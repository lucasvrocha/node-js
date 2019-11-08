var Table = require('cli-table');
 
// instantiate
var table = new Table({
    head: ['TH 1 label', 'TH 2 label']
  , colWidths: [30, 60]
});
 
// table is an Array, so you can `push`, `unshift`, `splice` and friends
table.push(
    ['First value', 'Second value']
  , ['First value', 'Second value']
);

console.log(table.toString());

table.push(
    { 'Some key': 'Some value' }
  , { 'Another key': 'Another value' }
);
 
console.log(table.toString());

var table = new Table({
    chars: { 'top': '═' , 'top-mid': '╤' , 'top-left': '╔' , 'top-right': '╗'
           , 'bottom': '═' , 'bottom-mid': '╧' , 'bottom-left': '╚' , 'bottom-right': '╝'
           , 'left': '║' , 'left-mid': '╟' , 'mid': '─' , 'mid-mid': '┼'
           , 'right': '║' , 'right-mid': '╢' , 'middle': '│' }
  });
   
  table.push(
      ['foo', 'bar', 'baz']
    , ['frob', 'bar', 'quuz']
  );
   
  console.log(table.toString());