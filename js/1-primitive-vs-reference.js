// Type Primitive
/**
 * 1. String
 * 2. Number
 * 3. Boolean
 * 4. Null
 * 5. Undefined
 * 6. Bigint
 * 7. Symbol
 */

// contoh
let nama1 = 'Ucup';

let nama2 = nama1;
nama2 = 'Rundy';
console.log(nama1);
console.log(nama2);

// Type Reference
/**
 * 1. Object
 * 2. Array
 * 3. Function
 * 4. Class
 */

// contoh
const obj1 = {
  name: 'Pucuk',
};

const obj2 = obj1;
obj2.name = 'Renday';
console.log(obj1);
console.log(obj2);

// 1. Shallow Copy
const obj3 = {
  name: 'Pucuk',
  alamat: {
    kota: 'Tangerang',
    pos: '123123',
  },
};

const obj4 = { ...obj3 };
obj4.name = 'Renday';
obj4.alamat.kota = 'Jakarta';
console.log(obj3);
console.log(obj4);

// 2. Deep Copy
const obj5 = structuredClone(obj3);
obj5.alamat.kota = 'Semarang';
console.log(obj3);
console.log(obj5);
