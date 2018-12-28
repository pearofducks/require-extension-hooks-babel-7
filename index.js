let babel;
const defaultConfig = {
  presets : [
    ['@babel/preset-env', {
      targets : {
        node : 'current'
      }
    }]
  ],
  sourceMaps : true
};
let globalConfig = Object.assign({}, defaultConfig);

module.exports = function({content, filename}){
  let config = Object.assign({ filename, sourceFileName : filename }, globalConfig);

  if (!babel) {
    babel = require('@babel/core');
  }

  let result = babel.transform(content, config);

  return { content : result.code, sourceMap : result.map };
};

module.exports.configure = function (options) {
  globalConfig = Object.assign({}, defaultConfig, options);
};
