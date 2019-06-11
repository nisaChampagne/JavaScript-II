// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!

function house(){
  let mother = 'mom';
  console.log(mother + ' said stop punching your sister!')

  function room(){
    let father = "dad";
    console.log(father + 'reminded me that' + mother + 'does not know what she is talking about')
  }
  room()
}
house()


/* STRETCH PROBLEMS, Do not attempt until you have completed all previous tasks for today's project files */


// ==== Challenge 2: Create a counter function ====
const counter = () => {
  // Return a function that when invoked increments and returns a counter variable.
  let count = 0;
  return function(){
    count = count + 1;
    return count;
  }
};

const secondCounter = counter();
console.log(secondCounter());
console.log(secondCounter());
console.log(secondCounter());
console.log(secondCounter());
console.log(secondCounter());
console.log(secondCounter());
// Example usage: const newCounter = counter();
// newCounter(); // 1
// newCounter(); // 2

// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
const counterFactory = () => {
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
};
