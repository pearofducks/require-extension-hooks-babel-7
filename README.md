# require-extension-hooks-babel-7

Using require-extension-hooks you can transpile ES6/7/.. code to run in node. Although node supports 99.999% of ES6 features there is one major omission: export/import syntax.

## Installation  
`npm install require-extension-hooks require-extension-hooks-babel-7 --save-dev`  

## Usage  
```javascript
const hooks = require('require-extension-hooks');
hooks('js').exclude(({filename}) => filename.match(/\/node_modules\//).plugin('babel', {}).push();

// elsewhere...
import {foo} from './foo';
```

**Note:** This fork makes no attempt to exclude files for you, you must specify an 'exclude' condition as shown above or things will go horribly wrong for you.

The second argument allows you to configure which options are passed into babel's transform function. By default this contains a node : current configuration to only use babel polyfills that node doesn't have.
