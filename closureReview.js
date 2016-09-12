var callFriend = function(){
  var friend = 'Jake';
  function callF(number){
    return 'Calling ' + friend + ' at ' + number;
  }
  return callF;
};

//Above you're given a callFriend function that returns another function.
//Do what you need to do in order to call your function and get 'Calling Jake at 435-215-9248' in your console.

  //code here
var callStr = callFriend();
console.log(callStr("801-636-5595"));


/*

Write a function that accepts a function as it's first argument and returns a new function (which calls the original function that was passed in) that can only ever be executed once.

Once completed, add a second arguments that allows the function to be executed N number of times. After the function has been called N number of times, console.log('STAHHP');

*/

//////////////////////////////// Version 1
function acceptFn() {
  var counter = 0;
  return function (x) {
    for(var i = 0; i < x; i++) {
      counter++;
    }console.log(counter);
    console.log('STAHHP');
  };
}

var runFn = acceptFn();
runFn(5); // Prints --> 5 / STAHHP

//////////////////////////////// Version 2
function acceptFn(cb) {
  var counter = 0;
  return function cb(x) {
    for(var i = 0; i < x; i++) {
      counter++;
    }console.log(counter);
    console.log('STAHHP');
  };
}

var runFn = acceptFn(runFn);
runFn(5); // Prints --> 5 / STAHHP
