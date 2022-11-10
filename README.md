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

### Add volto-spotlight to your Volto project

1. Make sure you have a [Plone backend](https://plone.org/download) up-and-running at http://localhost:8080/Plone

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
