console.clear();

// Part 1: Password
const SUPER_SECRET_PASSWORD = "h4x0r1337";

const receivedPassword = "password1234";

if (SUPER_SECRET_PASSWORD === receivedPassword) {
  console.log("Welcome! You are logged in as Brunhilde1984.");
} else {
  console.log("Access denied");
}

// Part 2: Even / Odd
const number = 6;
if (number % 2 === 0) {
  console.log("The given number: " + number + " is Even");
} else {
  console.log("The given number: " + number + " is Odd");
}

// Part 3: Hotdogs
const numberOfHotdogs = 1000000;
let costPerHotdogs = 0;

if (numberOfHotdogs < 5) {
  costPerHotdogs = 2;
} else if (numberOfHotdogs >= 5 && numberOfHotdogs < 100) {
  costPerHotdogs = 1.5;
} else if (numberOfHotdogs >= 100 && numberOfHotdogs < 1000000) {
  costPerHotdogs = 1;
} else {
  costPerHotdogs = 0.1;
}
console.log(
  "The cost per Hotdog for: " +
    numberOfHotdogs +
    " Hotdogs is --> " +
    costPerHotdogs
);

// Part 4: Daytime
const currentHour = 16;

const statement = currentHour < 17 ? "Still need to learn..." : "Partytime!!!";

console.log(statement);

// Part 5: Greeting
const name1 = "Archibald";

const greeting = "Hello " + (name1 === "Feline" ? "Couch!" : name1);

console.log(greeting);
