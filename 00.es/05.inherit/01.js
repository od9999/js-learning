function Animal(){ }
Animal.prototype.species = "动物";

function Cat(name,color){
	this.name = name;
	this.color = color;
}

Cat.prototype = Animal.prototype;
console.log(Cat.prototype.constructor === Animal);	// true

Cat.prototype.constructor = Cat;
console.log(Cat.prototype.constructor === Cat);		// true

console.log(Animal.prototype.constructor === Animal);	// false
console.log(Animal.prototype.constructor === Cat);		// true
