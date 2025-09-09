
let username = "Ema";

let surname; 

console.log(typeof(username))
console.log(surname)

let user = {
	userName : "Ema",
	surname: "Gurini",
	//age: 36,
	city: 'Bologna',
	sayHello() {
		console.log('hello')
	}
}

const input = "city"

delete user.city

console.log('===================================')
console.log('Printing each value inside the object')
console.log('===================================')
for (let key in user) {
	console.log(key + ' ' + user[key])
}

console.log('===================================')
console.log('Printing the complete object')
console.log('===================================')

console.log('===================================')
console.log('Optional chaining ?.')
console.log('===================================')
console.log(user?.address?.city || 'Data does not exist')

console.log('===================================')
console.log('Always const')
console.log('===================================')
const city = {
	cap: 62017
}

city.cap = 44444
city.address = "pippo"
console.log(city)

console.log('===================================')
console.log('Destructuring')
console.log('===================================')

const {cap, address} = city 

console.log(cap)

console.log('===================================')
console.log('Array')
console.log('===================================')

const food = ['pizza', 'pasta', 'gnocchi']
const veg = ['salad', 'tomatoes']

const foodandveg = [...food, ...veg]

const [pateta, , mario] = foodandveg
console.log(pateta)


/* for (let i = 0; i < food.length; i++) {
	console.log(food[i])
} */

	console.log(food.includes('pizza'))
// food.forEach( el => console.log(el))
const f = food.map( el => el).filter( el => el != 'pizza')
console.log(f)

const num = [0, 2, 1, 5, 10, 4]
num.sort((a, b) => a - b)
console.log(num)

