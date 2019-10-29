const largestRemainder = require('./index')

const votes = {
	Socialists: 1307550,
	Conservatives: 109068,
	Liberals: 86403,
	Greens: 35069,
	'Rent Is Too Damn High': 12340
}

let governmentHare = largestRemainder(votes, 420, 'hare')
let governmentDroop = largestRemainder(votes, 420, 'droop')
let governmentHB = largestRemainder(votes, 420, 'hagenbach-bischoff')
let governmentImperiali = largestRemainder(votes, 420, 'imperiali')

console.table(governmentHare)
console.table(governmentDroop)
console.table(governmentHB)
console.table(governmentImperiali)
