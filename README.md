# Largest Remainder

The [largest remainder method](https://en.wikipedia.org/wiki/Largest_remainder_method) (also known as Hare–Niemeyer method, Hamilton method or as Vinton's method) is one way of [allocating seats proportionally](<https://en.wikipedia.org/wiki/Apportionment_(politics)>) for representative assemblies with voting systems.

## Installation

```bash
yarn add largest-remainder
```

## Usage

```js
const largestRemainder = require('largest-remainder')

const votes = {
	Socialists: 1307550,
	Conservatives: 109068,
	Liberals: 86403,
	Greens: 35069,
	'Rent Is Too Damn High': 12340
}

let government = largestRemainder(votes, 420, 'hare')
console.table(government)
```

## Results

```js
┌─────────┬────────┬─────────────────────────┬─────────┬──────────────────────┬────────────────────┬─────────────────────┬───────┬─────────────────────┬──────────────────────┐
│ (index) │  type  │          party          │  votes  │      percentage      │    distribution    │      remainder      │ seats │        error        │   percentageSeats    │
├─────────┼────────┼─────────────────────────┼─────────┼──────────────────────┼────────────────────┼─────────────────────┼───────┼─────────────────────┼──────────────────────┤
│    0    │ 'hare' │      'Socialists'       │ 1307550 │  0.8433466844681798  │ 354.2056074766355  │ 0.20560747663552092 │  354  │ 0.20560747663552092 │  0.8428571428571429  │
│    1    │ 'hare' │     'Conservatives'     │ 109068  │ 0.07034693601130008  │ 29.545713124746037 │ 0.5457131247460367  │  30   │ 0.4542868752539633  │ 0.07142857142857142  │
│    2    │ 'hare' │       'Liberals'        │  86403  │ 0.055728410827963856 │ 23.40593254774482  │ 0.40593254774481835 │  23   │ 0.40593254774481835 │ 0.05476190476190476  │
│    3    │ 'hare' │        'Greens'         │  35069  │ 0.022618886373457686 │ 9.499932276852228  │ 0.49993227685222763 │  10   │ 0.5000677231477724  │ 0.023809523809523808 │
│    4    │ 'hare' │ 'Rent Is Too Damn High' │  12340  │ 0.007959082319098573 │ 3.342814574021401  │ 0.34281457402140036 │   3   │ 0.3428145740214008  │ 0.007142857142857143 │
└─────────┴────────┴─────────────────────────┴─────────┴──────────────────────┴────────────────────┴─────────────────────┴───────┴─────────────────────┴──────────────────────┘
```

## Quotas

Available quotas are `hare`, `droop`, `hagenbach-bischoff` and `imperiali`. See [Quotas](https://en.wikipedia.org/wiki/Largest_remainder_method#Quotas)

Not providing a quota, rounds the seats down before ordering by the largest remainder and incrementally increasing.

## Results object

- `type` the quota used
- `party` the original key name
- `votes` the original key value
- `percentage` the overall percentage of votes received
- `distribution` how the seats _should_ be distributed
- `remainder` the remainder used to order the results before addition of new seats
- `seats` the seats allocated to the party
- `error` how far off the `distribution` is the `seats`
- `percentageSeats` what percentage the seats now represent

## Credits

Written by Nic Mulvaney @ Normally

Inspired by https://github.com/juliuste/hare-niemeyer
