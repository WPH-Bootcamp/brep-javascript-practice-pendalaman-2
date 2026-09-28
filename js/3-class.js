class User {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }

  greet() {
    return `Hello ${this.name}`;
  }
}

const user1 = new User('Ucup', 'ucup@gmail.com');
console.log(user1.name);
console.log(user1.greet());

const user2 = new User('Renday', 'renday@gmail.com');
console.log(user2.name);
console.log(user2.greet());
