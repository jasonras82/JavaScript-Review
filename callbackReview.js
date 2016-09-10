/* Declare and Define the functions here that will make the function calls below work properly */

var names = ['Tyler', 'Cahlan', 'Ryan', 'Colt', 'Tyler', 'Blaine', 'Cahlan'];
first(names, function(firstName){
  console.log('The first name in names is ', firstName);
});

var first = function(arr, cb) {
  cb(arr[0]);
};



/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */


var names = ['Tyler', 'Cahlan', 'Ryan', 'Colt', 'Tyler', 'Blaine', 'Cahlan'];

function last(arr, cb) {
  cb(arr[arr.length-1]);
}

last(names, function(lastName){
  console.log('The last name in names is ', lastName);
});



/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */


//have the contains function return a boolean value for if the name is in the array or not.


var names = ['Tyler', 'Cahlan', 'Ryan', 'Colt', 'Tyler', 'Blaine', 'Cahlan'];

function contains(value, arr, cb) {
  var result = false;
  for(var i = 0; i < arr.length; i++) {
    if(arr[i] === value) {
      result = true;
    }
  }cb(result);
}

contains('Colt', names, function(yes){
  if(yes){
    console.log('Colt is in the array');
  } else {
    console.log('Colt is not in the list');
  }
});



/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */


var numbers = [1,2,3,4,5];
//Produces a new array of values by mapping each value in list through a transformation function
map(numbers, function(num){
  return num * 2; //returns an array of [2,4,6,8,10]
});

function map(arr, cb) {
  for(var i = 0; i < arr.length; i++) {
    arr[i] = cb(arr[i]);
  }return arr;
}



/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */


var names = ['Tyler', 'Cahlan', 'Ryan', 'Colt', 'Tyler', 'Blaine', 'Cahlan'];
uniq(names, function(uniqArr){
  console.log('The new names array with all the duplicate items removed is ', uniqArr);
});

function uniq(arr, cb) {
  var newArr = [];
  for(var i = 0; i < arr.length; i++) {
    if(newArr.indexOf(arr[i]) === -1){
      newArr.push(arr[i]);
    }
  }return cb(newArr);
}



/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */


var names = ['Tyler', 'Cahlan', 'Ryan', 'Colt', 'Tyler', 'Blaine', 'Cahlan'];
each(names, function(item, indice){
  console.log('The item in the ' + indice + ' position is ' + item);
});

function each(arr, cb) {
  for(var i = 0; i < arr.length; i++) {
    cb(arr[i], i);
  }
}



/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */


var users = [
  {
    id: '12d',
    email: 'tyler@gmail.com',
    name: 'Tyler',
    address: '167 East 500 North'
  },
  {
    id: '15a',
    email: 'cahlan@gmail.com',
    name: 'Cahlan',
    address: '135 East 320 North'
  },
  {
    id: '16t',
    email: 'ryan@gmail.com',
    name: 'Ryan',
    address: '192 East 32 North'
  },
];
getUserById('16t', users, function(user){
  console.log('The user with the id 16t has the email of ' + user.email + 'the name of ' + user.name + ' and the address of ' + user.address);
});

function getUserById(value, arr, cb) {
  for(var i = 0; i < arr.length; i++) {
    if(arr[i].id === value) {
      return cb(arr[i]);
    }
  }
}



/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */


//Looks through each value in the list, returning the first one that passes a truth test
var numbers  = [1, 2, 3, 4, 5, 6];
find(numbers, function(num){
  return num % 2 === 0; //should return 2
});

function find(arr, cb) {
  for(var i = 0; i < arr.length; i++) {
    if (cb(arr[i])) {
      return arr[i];
    }
  }
}
