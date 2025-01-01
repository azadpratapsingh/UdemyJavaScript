let restaurant = {
  name: "The Gourmet Spot",
  location: "123 Foodie Lane, Flavor Town",
  categories: ["Italian", "Vegetarian", "Gluten-Free", "Desserts"],
  startMenu: ["Garlic Bread", "Bruschetta", "Caesar Salad"],
  mainMenu: ["Margherita Pizza", "Pasta Alfredo", "Grilled Veggies"]
}

const arr=[2,3,4]

const a = arr[0]
const b = arr[1]
const c = arr[2]

const [x, y, z]=arr
console.log(x,y,z)
console.log(arr)

let [first, , second]=restaurant.categories
console.log(first, second)

[first, second] = [second,first]

console.log(first,second)
