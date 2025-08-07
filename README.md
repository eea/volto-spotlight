# volto-spotlight

[![Releases](https://img.shields.io/github/v/release/eea/volto-spotlight)](https://github.com/eea/volto-spotlight/releases)

[![Pipeline](https://ci.eionet.europa.eu/buildStatus/icon?job=volto-addons%2Fvolto-spotlight%2Fmaster&subject=master)](https://ci.eionet.europa.eu/view/Github/job/volto-addons/job/volto-spotlight/job/master/display/redirect)
[![Lines of Code](https://sonarqube.eea.europa.eu/api/project_badges/measure?project=volto-spotlight-master&metric=ncloc)](https://sonarqube.eea.europa.eu/dashboard?id=volto-spotlight-master)
[![Coverage](https://sonarqube.eea.europa.eu/api/project_badges/measure?project=volto-spotlight-master&metric=coverage)](https://sonarqube.eea.europa.eu/dashboard?id=volto-spotlight-master)
[![Bugs](https://sonarqube.eea.europa.eu/api/project_badges/measure?project=volto-spotlight-master&metric=bugs)](https://sonarqube.eea.europa.eu/dashboard?id=volto-spotlight-master)
[![Duplicated Lines (%)](https://sonarqube.eea.europa.eu/api/project_badges/measure?project=volto-spotlight-master&metric=duplicated_lines_density)](https://sonarqube.eea.europa.eu/dashboard?id=volto-spotlight-master)

[![Pipeline](https://ci.eionet.europa.eu/buildStatus/icon?job=volto-addons%2Fvolto-spotlight%2Fdevelop&subject=develop)](https://ci.eionet.europa.eu/view/Github/job/volto-addons/job/volto-spotlight/job/develop/display/redirect)
[![Lines of Code](https://sonarqube.eea.europa.eu/api/project_badges/measure?project=volto-spotlight-develop&metric=ncloc)](https://sonarqube.eea.europa.eu/dashboard?id=volto-spotlight-develop)
[![Coverage](https://sonarqube.eea.europa.eu/api/project_badges/measure?project=volto-spotlight-develop&metric=coverage)](https://sonarqube.eea.europa.eu/dashboard?id=volto-spotlight-develop)
[![Bugs](https://sonarqube.eea.europa.eu/api/project_badges/measure?project=volto-spotlight-develop&metric=bugs)](https://sonarqube.eea.europa.eu/dashboard?id=volto-spotlight-develop)
[![Duplicated Lines (%)](https://sonarqube.eea.europa.eu/api/project_badges/measure?project=volto-spotlight-develop&metric=duplicated_lines_density)](https://sonarqube.eea.europa.eu/dashboard?id=volto-spotlight-develop)

[Volto](https://github.com/plone/volto) add-on

## Features

Demo GIF

## Getting started

### Try volto-spotlight with Docker

      git clone https://github.com/eea/volto-spotlight.git
      cd volto-spotlight
      make
      make start

Go to http://localhost:3000

### Add volto-spotlight to your Volto project

1. Make sure you have a [Plone backend](https://plone.org/download) up-and-running at http://localhost:8080/Plone

   ```Bash
   docker compose up backend
   ```

1. Start Volto frontend

- If you already have a volto project, just update `package.json`:

  ```JSON
  "addons": [
      "@eeacms/volto-spotlight"
  ],

  "dependencies": {
      "@eeacms/volto-spotlight": "*"
  }
  ```

- If not, create one:

  ```
  npm install -g yo @plone/generator-volto
  yo @plone/volto my-volto-project --canary --addon @eeacms/volto-spotlight
  cd my-volto-project
  ```

1. Install new add-ons and restart Volto:

   ```
   yarn
   yarn start
   ```

1. Go to http://localhost:3000

1. Happy editing!

## Purpose

The `volto-spotlight` add-on provides a spotlight feature for Volto, allowing users to quickly access and execute various commands through a spotlight search interface. This feature enhances the user experience by providing a convenient way to perform common actions such as adding, editing, deleting, copying, and pasting content, as well as navigating to different parts of the site.

## Functionality

The spotlight feature in `volto-spotlight` includes the following commands:

- **Add Content**: Allows users to add new content of a specified type.
- **Edit**: Enables users to edit the current content.
- **Delete**: Provides an option to delete the current content.
- **Copy**: Copies the blocks of the current content to the clipboard.
- **Paste**: Pastes the blocks from the clipboard, replacing the current content blocks.
- **Go to Path**: Navigates to a specified path within the site.
- **Go Back**: Navigates back to the previous page.
- **Go Forward**: Navigates forward to the next page.
- **Go to Home**: Navigates to the home page.
- **Go to Control Panel**: Navigates to the control panel.
- **Logout**: Logs the user out of the site.

The spotlight feature is activated using the keyboard shortcut `Ctrl+K` (or `Cmd+K` on macOS) and provides a search input where users can type commands. The commands are filtered based on the user's input, and the user can navigate through the filtered commands using the arrow keys and execute a command by pressing `Enter`.

## Release

See [RELEASE.md](https://github.com/eea/volto-spotlight/blob/master/RELEASE.md).

## How to contribute

See [DEVELOP.md](https://github.com/eea/volto-spotlight/blob/master/DEVELOP.md).

## Copyright and license

The Initial Owner of the Original Code is European Environment Agency (EEA).
All Rights Reserved.

See [LICENSE.md](https://github.com/eea/volto-spotlight/blob/master/LICENSE.md) for details.

## Funding

[European Environment Agency (EU)](http://eea.europa.eu)
