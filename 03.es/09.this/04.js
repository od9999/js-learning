function Person(){}

Person.test = function() {
	console.log(this === Person);
};

Person.test();