var array = [123, "Pick up drycleaning", false];
var [id, title, isvalid] = array;

console.log(id, title, isvalid);

var x = 1, y = 2;

[x, y] = [y, x];

console.log(x, "x", y, "y");

var rect = { x: 0, y: 10, width: 15, height: 20 };

var {x, y, width, height} = rect;

console.log(x,y,width,height);