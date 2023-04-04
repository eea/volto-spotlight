const path = require('path');
const plugins = (defaultPlugins) => {
  return defaultPlugins;
};
const modify = (config, { target, dev }, webpack) => {
  const themeConfigPath = `${__dirname}/theme/theme.config`;
  config.resolve.alias['../../theme.config$'] = themeConfigPath;
  config.resolve.alias['../../theme.config'] = themeConfigPath;

  const spotlightSystem = '@eeacms/volto-spotlight';
  const spotlightSystemPath =
    config.resolve.alias[spotlightSystem] ||
    path.dirname(require.resolve(spotlightSystem));
  const themeLessPath = path.resolve(`${spotlightSystemPath}/../theme`);

  const themesPath = `${themeLessPath}/themes`;

  config.resolve.alias['volto-spotlight-themes'] = themesPath;

  return config;
};

module.exports = {
  plugins,
  modify,
};
