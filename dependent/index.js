//var printf = require('@internal/dep1/node_modules/printf');
//console.log(printf('%05d', 42));
//console.log("dependent");
const test = require('@internal/dep1/test')
console.log('test:', test)

const test2 = require('dep2/dep2test')
console.log('test2:', test2)