const createMoves = pins => new Array(2*pins-1)
			.fill('')
			.map((el, i) => i)

const nextPinSetting = (pins, movesArr) => new Array(Number(pins))
	.fill(0)
	.map((el, i) => movesArr.includes(i*2))


const pickMove = nMoves => Math.floor(Math.random()*nMoves)

const pickOrder = () => Math.random()<0.5 ? 0 : 1;

const nextUp = p => p===0 ? 1 : 0;

const handleMove = (moves, i) => {
	let spliceStart, spliceLength
	let n = moves[i]
	if(n%2===0){
		spliceLength = 1
		spliceStart = i
		if(moves[i-1]+1===n){
			spliceLength++
			spliceStart--
		}
		if(moves[i+1]-1===n){
			spliceLength++
		}
		moves.splice(spliceStart, spliceLength) 
		return moves
	} else {
		spliceLength = 3
		spliceStart = i-1
		if(moves[i-2]+2===n){
			spliceLength++
			spliceStart--
		}
		if(moves[i+2]-2===n){
			spliceLength++
		}
		moves.splice(spliceStart, spliceLength)
		return moves
	}	
	
}

const simGame = obj => {
	let { p1, p2, pins } = obj
	let moves = createMoves(pins)
	let nextPins = nextPinSetting(pins, moves)
	let up = pickOrder()
	let result = []
	while(moves.length){
		let nextMove = pickMove(moves.length)
		moves = handleMove(moves, nextMove)
		nextPins = nextPinSetting(pins, moves)
		result.push({
			player: up,
			pins: nextPins
		})
		up = nextUp(up)
	}
	return result
}

const simGame4Games = pins => {
	let moves = createMoves(pins)
	let turnTally = 0
	while(moves.length){
		turnTally++
		let nextMove = pickMove(moves.length)
		moves = handleMove(moves, nextMove)
	}
	return turnTally%2===1
}

const simGames = obj => {
	let { p1, p2, pins, games } = obj
	let results = {
		[p1]: 0,
		[p2]: 0
	}
	for(let i = 0; i<games; i++){
		if(i%2===0) simGame4Games(pins) ? results[p2]++ : results[p1]++
		if(i%2===1) simGame4Games(pins) ? results[p1]++ : results[p2]++
	}
	return results
}

const simTourney = input => {
	let players = []
	let moves = createMoves(input.pins)
	if(!input.players){
		players = input.names.split(',').map(el => el.trim())
	} else {
		players = new Array(input.players).fill(null).map((el, i) => 'Player '+(i+1).toString())
	}
	let results = []
	results.push(Object.assign([],players))
	while(players.length>1){
		let next = Object.assign([], nextRound(players, moves))
		results.push(Object.assign([], next))
		players = next
	}
	return results
}

const nextRound = (array, moves) => {
	let nextArr = []
	while(array.length>1){
		let p1 = array.shift()
		let p2 = array.shift()
		nextArr.push(simGame4Tourn(p1, p2, moves))
	}
	if(array.length===1){
		nextArr.push(array[0])
	}
	return nextArr
}

const simGame4Tourn = (p1, p2, moves) => {
	let up = pickOrder()
	let turnTracker = 0
	while(moves.length){
		turnTracker++
		let nextMove = pickMove(moves.length)
		moves = handleMove(moves, nextMove)
	}
	let last = turnTracker%2
	if(up===0 && last===1) return p1
	else if(up===1 && last===0) return p1
	else return p2
}

module.exports = { simGame, simGames, simTourney }