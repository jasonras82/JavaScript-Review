//Create a Animal Constructor that has the following parameters. species, name, legs, color, food (which is an array of foods they can eat).

  //code here
function Animal(species, name, legs, color, food) {
  this.species = species;
  this.name = name;
  this.legs = legs;
  this.color = color;
  this.food = food;
}

//Now create a person function that creates an object and returns it (not in constructor form) that has the following parameters. name, age, height, gender

  //code here
  function person(name, age, height, gender) {
    var newObj = {
      name: name,
      age: age,
      height: height,
      gender: gender
    };
    return newObj;
  }

//Create a animal array and a person array.

  //code here
var animalArr = [];
var personArr = [];

//Create two instances of Animal and push those into your animal array

  //code here
var dog = new Animal('dog', 'ralph', 4, 'black', ['dog food', 'hotdogs', 'pizza']);
var cat = new Animal('cat', 'rusty', 4, 'tan', ['cat food', 'shoes', 'her own hair']);
animalArr.push(dog, cat);

//Create two instances of person and push those into your person array.

  //code here
personArr.push(person('Jason', 31, '5\' 11\"', 'male'));
personArr.push(person('Brittany', 26, '5\' 7\"', 'female'));

//Now we want every instance of Animal to have an eat method. This method will choose a random item in that instances food array, then alert "(name) ' ate ' (whichever food was chosen)".

  //code here
Animal.prototype.eat = function(){
  alert(this.name + ' ate ' + this.food[Math.floor(Math.random() * this.food.length)]);
};

console.log(cat.eat());

//At this point, if we wanted to add something to every istance of person could we?

  //Yes or no? and why or why not?
//No, that's only a constructor capability.  That's why we use constructors.


/*
  1) What happens when you use the 'new' keyword to call a Constructor function?
  --> It runs the function creating a new object.
  2) What's a good way to describe the keyword 'this'
  --> Refers to this context, the one we are currently in.
  3) Can a normal function which creates an object and then returns that object use the prototype?
  --> No, that's why we have constructors!
  4) What happens if you forget to use 'new' when calling a constructor?
  --> It comes back undefined. It just doesn't work.
*/
