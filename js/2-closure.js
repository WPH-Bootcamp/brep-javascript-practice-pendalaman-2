const umurGeneral = 20;

function person1() {
  const name = 'Ucup';
  const umur = umurGeneral;
  console.log(name, umur);
}
function person2() {
  const name = 'Renday';
  const umur = umurGeneral;
  console.log(name, umur);
}
function person3() {
  const name = name;
  console.log(name);
}

person1();
person2();
// person3();

function outer() {
  const outerVar = 'Value Outer';
  function inner() {
    const innerVar = 'Value Inner';
    console.log(outerVar, innerVar);
  }
  inner();
}

outer();

function createCounter() {
  let counter = 0;

  return function () {
    counter++;
    return counter;
  };
}

const counter = createCounter();
console.log(counter());
console.log(counter());
console.log(counter());
