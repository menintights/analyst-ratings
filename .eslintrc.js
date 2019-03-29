/**
 * These rules enforce the Hack Reactor Style Guide
 *
 * Visit this repo for more information:
 *   https://github.com/reactorcore/eslint-config-hackreactor
 */
module.exports = {
 extends: 'airbnb-base',
 "rules": {
   "max-len": ["error", { "ignoreComments": true }]
 },
 "parser": "babel-eslint"
};