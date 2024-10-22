const fruits = ["Strawberry", "Banana", "Orange", "Apple"];

const foodSchedule = [
  { name: "Heura", isVegan: true },
  { name: "Salmon", isVegan: false },
  { name: "Tofu", isVegan: true },
  { name: "Burger", isVegan: false },
  { name: "Rice", isVegan: true },
  { name: "Pasta", isVegan: true },
];
const uniqueFruits = new Set(fruits);
for (let i = 0; i < foodSchedule.length; i++) {
  if (!foodSchedule[i].isVegan) {
    const fruitArray = Array.from(uniqueFruits);
    foodSchedule[i].name = fruitArray[i % fruitArray.length];
  }
}
console.log(foodSchedule);
