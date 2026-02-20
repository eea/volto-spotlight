# volto-spotlight

[![Releases](https://img.shields.io/github/v/release/eea/volto-spotlight)](https://github.com/eea/volto-spotlight/releases)

[![Pipeline](https://ci.eionet.europa.eu/buildStatus/icon?job=volto-addons%2Fvolto-spotlight%2Fmaster&subject=master)](https://ci.eionet.europa.eu/view/Github/job/volto-addons/job/volto-spotlight/job/master/display/redirect)
[![Lines of Code](https://sonarqube.eea.europa.eu/api/project_badges/measure?project=volto-spotlight&metric=ncloc)](https://sonarqube.eea.europa.eu/dashboard?id=volto-spotlight)
[![Coverage](https://sonarqube.eea.europa.eu/api/project_badges/measure?project=volto-spotlight&metric=coverage)](https://sonarqube.eea.europa.eu/dashboard?id=volto-spotlight)
[![Bugs](https://sonarqube.eea.europa.eu/api/project_badges/measure?project=volto-spotlight&metric=bugs)](https://sonarqube.eea.europa.eu/dashboard?id=volto-spotlight)
[![Duplicated Lines (%)](https://sonarqube.eea.europa.eu/api/project_badges/measure?project=volto-spotlight&metric=duplicated_lines_density)](https://sonarqube.eea.europa.eu/dashboard?id=volto-spotlight)

[![Pipeline](https://ci.eionet.europa.eu/buildStatus/icon?job=volto-addons%2Fvolto-spotlight%2Fdevelop&subject=develop)](https://ci.eionet.europa.eu/view/Github/job/volto-addons/job/volto-spotlight/job/develop/display/redirect)
[![Lines of Code](https://sonarqube.eea.europa.eu/api/project_badges/measure?project=volto-spotlight&branch=develop&metric=ncloc)](https://sonarqube.eea.europa.eu/dashboard?id=volto-spotlight&branch=develop)
[![Coverage](https://sonarqube.eea.europa.eu/api/project_badges/measure?project=volto-spotlight&branch=develop&metric=coverage)](https://sonarqube.eea.europa.eu/dashboard?id=volto-spotlight&branch=develop)
[![Bugs](https://sonarqube.eea.europa.eu/api/project_badges/measure?project=volto-spotlight&branch=develop&metric=bugs)](https://sonarqube.eea.europa.eu/dashboard?id=volto-spotlight&branch=develop)
[![Duplicated Lines (%)](https://sonarqube.eea.europa.eu/api/project_badges/measure?project=volto-spotlight&branch=develop&metric=duplicated_lines_density)](https://sonarqube.eea.europa.eu/dashboard?id=volto-spotlight&branch=develop)

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
ttps://github.com/eea/volto-spotlight/blob/master/LICENSE.md) for details.

## Funding

[European Environment Agency (EU)](http://eea.europa.eu)
