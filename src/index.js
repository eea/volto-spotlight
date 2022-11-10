import { toast } from 'react-toastify';
import {
  flattenToAppURL,
  isInternalURL,
  URLUtils,
} from '@plone/volto/helpers/Url/Url';
import Icon from '@plone/volto/components/theme/Icon/Icon';
import Toast from '@plone/volto/components/manage/Toast/Toast';

import { getBaseUrl } from '@plone/volto/helpers/Url/Url';
import Spotlight from './Spotlight/Spotlight';

import addSVG from '@plone/volto/icons/add-document.svg';
import editSVG from '@plone/volto/icons/pencil.svg';
import deleteSVG from '@plone/volto/icons/delete.svg';
import copySVG from '@plone/volto/icons/copy.svg';
import pasteSVG from '@plone/volto/icons/paste.svg';
import linkSVG from '@plone/volto/icons/link.svg';
import backSVG from '@plone/volto/icons/back.svg';
import forwardSVG from '@plone/volto/icons/ahead.svg';
import homeSVG from '@plone/volto/icons/home.svg';
import settingsSVG from '@plone/volto/icons/settings.svg';
import logoutSVG from '@plone/volto/icons/log-out.svg';

const applyConfig = (config) => {
  config.settings.appExtras = [
    ...(config.settings.appExtras || []),
    {
      match: '',
      component: Spotlight,
    },
  ];

  config.settings.spotlight = {
    enabled: true,
    maxResults: 9,
    commands: [
      // Add content type
      {
        title: (props) => {
          const { search } = props;
          const contentType =
            search.split(' ').splice(1).join(' ') || 'Document';

          return (
            <>
              <Icon name={addSVG} size="24px" /> <p>Add '{contentType}'</p>
            </>
          );
        },
        filter: (props) => {
          const { search } = props;

          return !search || search.toLowerCase().startsWith('add');
        },
        action: (props) => {
          const { history, location, search } = props;
          const contentType =
            search.split(' ').splice(1).join(' ') || 'Document';

          history.push(
            `${location.pathname
              .replace(/\/+$/, '')
              .replace('/edit', '')}/add?type=${contentType}`,
          );
        },
      },
      // Edit
      {
        title: () => (
          <>
            <Icon name={editSVG} size="24px" /> <p>Edit</p>
          </>
        ),
        filter: (props) => {
          return 'edit'.includes(props.search.toLowerCase());
        },
        action: (props) => {
          const { history, location } = props;
          history.push(`${location.pathname.replace(/\/+$/, '')}/edit`);
        },
      },
      // Delete
      {
        title: () => (
          <>
            <Icon name={deleteSVG} size="24px" /> <p>Delete</p>
          </>
        ),
        filter: (props) => {
          return 'delete'.includes(props.search.toLowerCase());
        },
        action: (props) => {
          const pathname = getBaseUrl(props.pathname);
          if (!pathname) {
            return toast.warn(
              <Toast
                warn
                title={'Warning'}
                content={"Your can't delete your root content."}
              />,
            );
          }
          const message = [
            '============= BRAKING CHANGE =============',
            '\nAre you sure you want to delete this content?',
          ];
          if (
            // eslint-disable-next-line no-alert
            window.confirm(message.join(''))
          ) {
            props.deleteContent(pathname);
            let parentPath = pathname.split('/');
            parentPath.pop();
            parentPath = parentPath.join('/');
            toast.success(
              <Toast
                success
                title={'Success'}
                content={'Your content has been deleted.'}
              />,
            );
            window.location.replace(parentPath ? parentPath : '/');
          }
        },
      },
      // Copy
      {
        title: () => (
          <>
            <Icon name={copySVG} size="24px" /> <p>Copy</p>
          </>
        ),
        filter: (props) => {
          return 'copy'.includes(props.search.toLowerCase());
        },
        action: (props) => {
          const { content } = props;
          navigator.clipboard.writeText(
            JSON.stringify({
              blocks: content.blocks,
              blocks_layout: content.blocks_layout,
            }),
          );
          toast.success(
            <Toast success title={'Success'} content={`Copied blocks`} />,
          );
        },
      },
      // Paste
      {
        title: () => (
          <>
            <Icon name={pasteSVG} size="24px" /> <p>Paste</p>
          </>
        ),
        filter: (props) => {
          return 'paste'.includes(props.search.toLowerCase());
        },
        action: (props) => {
          const message = [
            '============= BRAKING CHANGE =============',
            '\nAre you sure you want to paste from clipboard?',
            '\nThis action will replace all the blocks with those from clipboard and will trigger SUBMIT !!!',
          ];
          navigator.clipboard.readText().then((text) => {
            if (
              // eslint-disable-next-line no-alert
              window.confirm(message.join(''))
            ) {
              try {
                const data = JSON.parse(text) || {};
                const { blocks = {}, blocks_layout = {} } = data;
                const blocksIds = Object.keys(blocks);
                let valid = true;
                if (
                  blocks_layout &&
                  blocks_layout.items &&
                  blocks_layout.items.length === blocksIds.length
                ) {
                  blocks_layout.items.forEach((block) => {
                    if (valid && !blocksIds.includes(block)) {
                      valid = false;
                    }
                  });
                }
                if (valid) {
                  const lock_token = props.content?.lock?.token;
                  const headers = lock_token
                    ? { 'Lock-Token': lock_token }
                    : {};
                  props.updateContent(
                    getBaseUrl(props.pathname),
                    data,
                    headers,
                  );
                  toast.success(
                    <Toast
                      success
                      title={'Success'}
                      content={'Blocks replaced successfully'}
                    />,
                  );
                } else {
                  toast.error(
                    <Toast
                      error
                      title={'Error'}
                      content={'Your clipboard contains incompatible data'}
                    />,
                  );
                }
              } catch {
                toast.error(
                  <Toast
                    error
                    title={'Error'}
                    content={'Your clipboard contains incompatible data'}
                  />,
                );
              }
            }
          });
        },
      },
      // Go to :path
      {
        title: (props) => {
          const { search } = props;
          const path = search.split(' ').splice(2).join(' ');

          return (
            <>
              <Icon name={linkSVG} size="24px" /> <p>Go to '{path || '/'}'</p>
            </>
          );
        },
        filter: (props) => {
          const { search } = props;

          return search.toLowerCase().startsWith('go to');
        },
        action: (props) => {
          const { history, search } = props;
          const path = search.split(' ').splice(2).join(' ');
          let url = flattenToAppURL(path);
          if (
            !URLUtils.checkAndNormalizeUrl(url).isValid &&
            !url.startsWith('/')
          ) {
            url = `/${url}`;
          }

          return isInternalURL(url)
            ? history.push(url)
            : window.location.replace(url);
        },
      },
      // Go Back
      {
        title: () => {
          return (
            <>
              <Icon name={backSVG} size="24px" /> <p>Go Back</p>
            </>
          );
        },
        filter: (props) => {
          return 'go back'.includes(props.search.toLowerCase());
        },
        action: (props) => {
          return props.history.goBack();
        },
      },
      // Go Forward
      {
        title: () => {
          return (
            <>
              <Icon name={forwardSVG} size="24px" /> <p>Go Forward</p>
            </>
          );
        },
        filter: (props) => {
          return 'go forward'.includes(props.search.toLowerCase());
        },
        action: (props) => {
          return props.history.goForward();
        },
      },
      // Go to Home
      {
        title: () => (
          <>
            <Icon name={homeSVG} size="24px" /> <p>Go to Home</p>
          </>
        ),
        filter: (props) => {
          return 'go to home'.includes(props.search.toLowerCase());
        },
        action: (props) => {
          return props.history.push('/');
        },
      },
      // Go to Control Panel
      {
        title: () => (
          <>
            <Icon name={settingsSVG} size="24px" /> <p>Go to Control Panel</p>
          </>
        ),
        filter: (props) => {
          return 'go to control panel'.includes(props.search.toLowerCase());
        },
        action: (props) => {
          return props.history.push('/controlpanel');
        },
      },
      // Logout
      {
        title: () => (
          <>
            <Icon name={logoutSVG} size="24px" /> <p>Logout</p>
          </>
        ),
        filter: (props) => {
          return 'logout'.includes(props.search.toLowerCase());
        },
        action: (props) => {
          const { history, location } = props;
          history.push(`${location.pathname.replace(/\/+$/, '')}/logout`);
        },
      },
    ],
  };

  return config;
};

export default applyConfig;
