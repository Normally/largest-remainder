/* Largest remainder - written by Nic Mulvaney */

const totalObj = (obj, key) => {
	return Object.values(obj).reduce(
		(t, i) => t + parseFloat(key ? i[key] : i),
		0
	)
}

const fixed = (num, fixed) => {
	var re = new RegExp('^-?\\d+(?:.\\d{0,' + (fixed || -1) + '})?')
	let m = num.toString().match(re)
	return parseFloat(m ? m[0] : 0)
}

const largestRemainder = (input, totalSeats, type) => {
	if (!Object.keys(input).length) {
		console.error('Empty input for proportional-distribution')
		return []
	}
	// Make sure seats is a number
	totalSeats = parseFloat(totalSeats)

	let tally = []

	// Get the total votes
	let total = totalObj(input)

	// choose a quota
	let quota

	if (type === 'hare') {
		quota = total / totalSeats
	}

	if (type === 'droop') {
		quota = 1 + total / (1 + totalSeats)
	}

	if (type === 'hagenbach-bischoff') {
		quota = total / (1 + totalSeats)
	}

	if (type === 'imperiali') {
		quota = total / (2 + totalSeats)
	}
	// For each party create an analysis object
	for (var i in input) {
		let votes = parseFloat(input[i])
		let percentage = votes / total
		let distribution = percentage * totalSeats
		let seats, remainder
		if (type) {
			let seatsFloat = votes / quota
			seats = fixed(seatsFloat, 0)
			remainder = seatsFloat - seats
		} else {
			seats = Math.floor(distribution)
			remainder = distribution - seats
		}
		tally.push({
			type,
			party: i,
			votes,
			percentage,
			distribution,
			remainder,
			seats,
			error: distribution - seats
		})
	}

	// sum the total seats
	total = totalObj(tally, 'seats')

	// check for a difference from the total
	let remainder = totalSeats - total

	// sort by the largest remainder
	tally.sort((a, b) => {
		return b.remainder - a.remainder
	})

	// increment up to the full total
	for (var i = 0; i < remainder; i++) {
		tally[i].seats++
		tally[i].error = tally[i].seats - tally[i].distribution
	}
	for (var i in tally) {
		tally[i].percentageSeats = tally[i].seats / totalSeats
	}

	// Sort by allocated seats
	tally.sort((a, b) => {
		return b.percentage - a.percentage
	})

	return tally
}

module.exports = largestRemainder
