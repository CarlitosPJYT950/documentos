import type { User } from "./components.ts";

const user: User = {
  name: "Alice",
  age: 30,
  email: "juanpana10ospina@gmail.com",
  role: "admin",
  company: {
    name: "Tech Corp",
    address: "123 Tech Street",
    phone: "555-1234"
    }
}

const otheruser: User = {
    name: "Bob",
    age: 25,
    email: "juanestebanpradaospina@gmail.com",
    role: "user",
}

const anotheruser: User = {
    name: "Charlie",
    age: 28,
    role: "guest",
}

type Dictionary = {[key: string]: string;}

const translations: Dictionary = {
    hello: "Hola",
    goodbye: "Adiós",
    thankYou: "Gracias"
}

export { user, otheruser, anotheruser, translations };
console.log(user, otheruser, anotheruser, translations);