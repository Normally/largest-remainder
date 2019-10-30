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
	Conservatives: 13636684,
	Labour: 12877918,
	SNP: 977568,
	'Liberal Democrats': 2371861,
	Green: 525665,
	Other: 746144
}
const seats = 650

let government = largestRemainder(votes, seats, 'hare')
console.table(government)
```

## Results

```js
┌─────────┬────────┬─────────────────────┬──────────┬──────────────────────┬────────────────────┬─────────────────────┬───────┬──────────────────────┬──────────────────────┐
│ (index) │  type  │        party        │  votes   │      percentage      │    distribution    │      remainder      │ seats │        error         │   percentageSeats    │
├─────────┼────────┼─────────────────────┼──────────┼──────────────────────┼────────────────────┼─────────────────────┼───────┼──────────────────────┼──────────────────────┤
│    0    │ 'hare' │   'Conservatives'   │ 13636684 │  0.437973859064024   │ 284.6830083916156  │ 0.6830083916155445  │  285  │ 0.31699160838439866  │ 0.43846153846153846  │
│    1    │ 'hare' │      'Labour'       │ 12877918 │ 0.41360432222159416  │ 268.8428094440362  │ 0.8428094440361633  │  269  │ 0.15719055596377984  │ 0.41384615384615386  │
│    2    │ 'hare' │ 'Liberal Democrats' │ 2371861  │ 0.07617783878642748  │ 49.51559521117786  │ 0.5155952111778532  │  49   │  0.5155952111778603  │ 0.07538461538461538  │
│    3    │ 'hare' │        'SNP'        │  977568  │ 0.031396872543024375 │ 20.407967152965842 │ 0.40796715296584196 │  20   │ 0.40796715296584196  │ 0.03076923076923077  │
│    4    │ 'hare' │       'Other'       │  746144  │ 0.02396415192267175  │ 15.576698749736638 │ 0.5766987497366376  │  16   │  0.4233012502633624  │ 0.024615384615384615 │
│    5    │ 'hare' │       'Green'       │  525665  │ 0.016882955462258285 │ 10.973921050467885 │ 0.9739210504678848  │  11   │ 0.026078949532115203 │ 0.016923076923076923 │
└─────────┴────────┴─────────────────────┴──────────┴──────────────────────┴────────────────────┴─────────────────────┴───────┴──────────────────────┴──────────────────────┘
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

Written by [Nic Mulvaney](mailto:nic@normally.com) @ [Normally](https://www.normally.com)

Inspired by https://github.com/juliuste/hare-niemeyer
