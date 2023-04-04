/**
 * Commands menu
 * @module components/manage/Spotlight/Spotlight
 */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import isFunction from 'lodash/isFunction';
import find from 'lodash/find';
import { Card, Input, List } from 'semantic-ui-react';
import { updateContent, deleteContent } from '@plone/volto/actions';
import config from '@plone/volto/registry';

/**
 * @export
 * @class Spotlight
 * @extends {Component}
 */
class Spotlight extends Component {
  /**
   * Property types.
   * @property {Object} propTypes Property types.
   * @static
   */
  static propTypes = {};

  /**
   * Constructor
   * @method constructor
   * @param {Object} props Component properties
   * @constructs SpotlightComponent
   */
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      commands: this.getFilteredCommands(),
      selectedCommand: 0,
      search: '',
      editPermission: !!find(this.props.objectActions, { id: 'edit' }),
    };
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.handleClickOutside = this.handleClickOutside.bind(this);
    this.getFilteredCommands = this.getFilteredCommands.bind(this);
    this.commandMenuElement = React.createRef();
    this.searchElement = React.createRef();
  }

  /**
   * Component did mount
   * @method componentDidMount
   * @returns {undefined}
   */
  componentDidMount() {
    if (__CLIENT__) {
      document.addEventListener('keydown', this.handleKeyDown);
      document.addEventListener('click', this.handleClickOutside);
    }
  }

  /**
   * Component will unmount
   * @method componentWillUnmount
   * @returns {undefined}
   */
  componentWillUnmount() {
    if (__CLIENT__) {
      document.removeEventListener('keydown', this.handleKeyDown);
      document.removeEventListener('click', this.handleClickOutside);
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (
      prevState.search !== this.state.search ||
      prevProps.location.pathname !== this.props.location.pathname
    ) {
      this.setState({
        commands: this.getFilteredCommands(this.state.search),
      });
    }
    if (
      JSON.stringify(prevProps.objectActions) !==
      JSON.stringify(this.props.objectActions)
    ) {
      this.setState({
        editPermission: !!find(this.props.objectActions, { id: 'edit' }),
      });
    }
  }

  handleKeyDown(event) {
    if (!this.state.editPermission) return;
    const { spotlight } = config.settings;
    const maxResults =
      this.state.commands.length < spotlight.maxResults
        ? this.state.commands.length
        : spotlight.maxResults;

    if (event.key === 'Escape' && this.state.open) {
      this.setState({ open: false, search: '', selectedCommand: 0 });
      event.preventDefault();
    }
    if (event.key === 'ArrowUp' && this.state.open) {
      if (this.state.selectedCommand === 0) {
        this.setState({ selectedCommand: maxResults - 1 });
      } else {
        this.setState({ selectedCommand: this.state.selectedCommand - 1 });
      }
      event.preventDefault();
    }
    if (event.key === 'ArrowDown' && this.state.open) {
      if (this.state.selectedCommand === maxResults - 1) {
        this.setState({ selectedCommand: 0 });
      } else {
        this.setState({ selectedCommand: this.state.selectedCommand + 1 });
      }
      event.preventDefault();
    }
    if (event.key === 'Enter' && this.state.open) {
      this.state.commands[this.state.selectedCommand].action({
        ...this.props,
        search: this.state.search,
      });
      this.setState({
        open: false,
        search: '',
        selectedCommand: 0,
      });
      event.preventDefault();
    }
    if ((event.metaKey || event.ctrlKey) && event.key === 'k') {
      const open = !this.state.open;
      this.setState({ open }, () => {
        const { inputRef = {} } = this.searchElement.current || {};
        if (!inputRef.current) return;
        if (open) {
          inputRef.current.focus();
        }
      });
      event.preventDefault();
    }
  }

  handleClickOutside(event) {
    if (!this.state.open) return;
    if (!document.getElementById('spotlight').contains(event.target)) {
      this.setState({ open: false, search: '', selectedCommand: 0 });
    }
  }

  getFilteredCommands(search = '') {
    const { spotlight } = config.settings;
    return spotlight.commands
      .filter((command) => {
        const hasFilter = isFunction(command.filter);
        return hasFilter
          ? command.filter?.({
              ...this.props,
              search,
            })
          : command.title.toLowerCase().includes(search.toLocaleLowerCase());
      })
      .slice(0, spotlight.maxResults);
  }

  render() {
    if (!this.state.editPermission) return null;
    return (
      this.state.open && (
        <>
          <Card ref={this.commandMenuElement} id="spotlight">
            <Input
              ref={this.searchElement}
              placeholder="Type to search commands..."
              focus={this.open}
              value={this.state.search}
              onChange={(event) => {
                this.setState({
                  search: event.target.value,
                  selectedCommand: 0,
                });
              }}
              transparent
            />
            <Card.Content>
              <List selection verticalAlign="middle">
                {this.state.commands.map((command, index) => {
                  const title = isFunction(command.title)
                    ? command.title({
                        ...this.props,
                        search: this.state.search,
                      })
                    : command.title;
                  return (
                    <List.Item
                      key={`Spotlight-${index}`}
                      active={this.state.selectedCommand === index}
                      onClick={() => {
                        command.action({
                          ...this.props,
                          search: this.state.search,
                        });
                        this.setState({
                          open: false,
                          search: '',
                          selectedCommand: 0,
                        });
                      }}
                      onMouseEnter={() =>
                        this.setState({ selectedCommand: index })
                      }
                    >
                      <List.Content>{title}</List.Content>
                    </List.Item>
                  );
                })}
              </List>
            </Card.Content>
          </Card>
          <div id="spotlight-backdrop" />
        </>
      )
    );
  }
}

export default compose(
  connect(
    (state, props) => ({
      content: state.content.data,
      updateRequest: state.content.update,
      pathname: props.location.pathname,
      objectActions: state.actions.actions.object,
    }),
    {
      updateContent,
      deleteContent,
    },
  ),
)(Spotlight);
