import Animal from "./animal.js";
import Mammal from "./mammal.js";

const elephant = new Animal("Gajah", "Herbivora",true, 100, 200);
const orangutan = new Mammal ("orangutan", "Carnivore", true, 50, 15);
const tiger = new Animal("Harimau", "Karnivora", true, 100, 100);

console.log(elephant)
console.log(orangutan)
console.log(tiger.isAdult())
