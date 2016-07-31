
// Counter
var counter = (function(j) {  
var counter = 0;
return function(j) {  
  if (j == undefined) j = 'clear';
  return counter++ + " " + j;
};
}());


// Obj
var first = {

	x: 22,	
	foo:  function(x){  return x*2},
	foo2: function(x){  return x*2}
}


// app
var app = {

	init: {},

	monitor: function(){ return this.init },

	createTerminator: (function(x){ 
		var terminators = [];
		return function(x) {
			terminators.push(x);
			return terminators
		}
	}())
	
}
