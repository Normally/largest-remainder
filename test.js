const largestRemainder = require('./index')

const votes = {
	Conservatives: 13636684,
	Labour: 12877918,
	SNP: 977568,
	'Liberal Democrats': 2371861,
	Green: 525665,
	Other: 746144
}
const seats = 650

let governmentHare = largestRemainder(votes, seats, 'hare')
let governmentDroop = largestRemainder(votes, seats, 'droop')
let governmentHB = largestRemainder(votes, seats, 'hagenbach-bischoff')
let governmentImperiali = largestRemainder(votes, seats, 'imperiali')

console.table(governmentHare)
console.table(governmentDroop)
console.table(governmentHB)
console.table(governmentImperiali)
