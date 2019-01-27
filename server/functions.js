/*

I've broken down this file into a number of sections.

I) Helper functions
II) Sim Game
III) Sim Games
IV) Sim Tournament

*/

// I) Helper Functions - It's important to note that not all of these functions are used in every game. They're only used where needed.

// createMoves is used to find the number of moves that exist for any given game. There are 2n-1 moves per game and createMoves creates an initial array of them.
const createMoves = pins => new Array(2*pins-1)
			.fill('')
			.map((el, i) => i)

// nextPinSetting is where we can keep track of pins for our own benefit. In our moves array, a single pin move would be represented by an even number (specifically itself*2) so we can check for that numbr and determine if the pin is upright (true) for knocked down (false)
const nextPinSetting = (pins, movesArr) => new Array(Number(pins))
	.fill(0)
	.map((el, i) => movesArr.includes(i*2))

// Moving into our simulation functions, pickMove randomizes the next move picked. It takes a number of moves and randomly selects one of them 
const pickMove = nMoves => Math.floor(Math.random()*nMoves)

// Order matters when randomly deciding the game simulation. If you only have one pin, then whoever goes first wins. So, we randomize who goes first
const pickOrder = () => Math.random()<0.5 ? 0 : 1;

// This is just a helpful toggle function that allows us to determine who is next
const nextUp = p => p===0 ? 1 : 0;

// This is the most important of the helper functions. Once we've decided what move to make, we need to adjust our moves array. 
const handleMove = (moves, i) => {
	/* 
	The most straightforward way to adjust our array is to splice out the moves that will be eliminated based off of the move we make.

	Option 1: We hit one pin
		a) we'll have to remove the "hit two pins" moves that exist on either side of our one pin move.
		b) but only if they exist
	Option 2: We hit two pins
		a) we'll have to remove the single pin moves as well as the two pin moves for each pin
		b) again, only if they still exist
	*/
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

// II) Single Game

const simGame = obj => {
	let { p1, p2, pins } = obj
	// Create our moves array
	let moves = createMoves(pins)
	// We keep track of pins here because we want to show our end user how the game played out.
	let nextPins = nextPinSetting(pins, moves)
	// Randomize who starts
	let up = pickOrder()
	// result will be where we note the state of the game after each move
	let result = []
	// the following loop works because the game is about getting rid of moves. When we are out of moves, the game is over
	while(moves.length){
		// Pick a move
		let nextMove = pickMove(moves.length)
		// Handle the move
		moves = handleMove(moves, nextMove)
		// Note the state of the pins
		nextPins = nextPinSetting(pins, moves)
		// Mark the state of the game
		result.push({
			player: up,
			pins: nextPins
		})
		// On to the next player
		up = nextUp(up)
	}
	// We'll send back the result array to the front end
	return result
}

// Sim Games

/*
	We don't care about the pins here, we just care about getting rid of moves. The number of moves it takes determines who 

*/

const simGame4Games = pins => {
	let moves = createMoves(pins)
	// Keep track of turns
	let turnTally = 0
	while(moves.length){
		// Add a turn
		turnTally++
		// Pick a move
		let nextMove = pickMove(moves.length)
		// Handle it
		moves = handleMove(moves, nextMove)
	}
	// When the game is over, we can figure out who wins based on how many turns it took. An odd number means the first person to move wins, vice-versa for an even number of turns.
	return turnTally%2===1
}

//simGames is what we call in our route.

const simGames = obj => {
	let { p1, p2, pins, games } = obj
	// Pick who goes first in the first game. We'll alternate every game after that
	let first = pickOrder()
	// Our results are only how many games are won by each player
	let results = {
		[p1]: 0,
		[p2]: 0
	}
	// If player 1 goes first in the first game
	if(first===0){
		for(let i = 0; i<games; i++){
			if(i%2===0) simGame4Games(pins) ? results[p2]++ : results[p1]++
			if(i%2===1) simGame4Games(pins) ? results[p1]++ : results[p2]++
		}
	}
	// if player 2 goes first in the first game
	if(first===1){
		for(let i = 0; i<games; i++){
			if(i%2===0) simGame4Games(pins) ? results[p1]++ : results[p2]++
			if(i%2===1) simGame4Games(pins) ? results[p2]++ : results[p1]++
		}
	}
	return results
}

// IV) Sim Tournament

const simTourney = input => {
	// Our front end allows us to send either a number of players OR a list of names. Here, we handle both of them with the same function
	let players = []
	let moves = createMoves(input.pins)
	// If = we have a list of names
	// Else = we have a number of players
	if(!input.players){
		players = input.names.split(',').map(el => el.trim())
	} else {
		players = new Array(input.players).fill(null).map((el, i) => 'Player '+(i+1).toString())
	}
	// We'll keep running rounds until we only have one player (our winner) left
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
	// Match two (in order of our arrray, match together and play them
	let nextArr = []
	while(array.length>1){
		let p1 = array.shift()
		let p2 = array.shift()
		nextArr.push(simGame4Tourn(p1, p2, moves))
	}
	/*
	If there is any "cheat" to my simulation it's this: if there are an odd number of players in any given round, the last player on the list will get a bye.
	*/
	if(array.length===1){
		nextArr.push(array[0])
	}
	return nextArr
}

// This is very similiar to my multiple game simulation, just handled a little differently
const simGame4Tourn = (p1, p2, moves) => {
	let up = pickOrder()
	let turnTracker = 0
	while(moves.length){
		turnTracker++
		let nextMove = pickMove(moves.length)
		moves = handleMove(moves, nextMove)
	}
	// Last can also be called "even or odd" number of moves
	let last = turnTracker%2
	// Player one wins if they are the first up and the game has an odd number of turns OR they are the second up and there are an even number of moves. Otherwise, player 2 wins
	if(up===0 && last===1) return p1
	else if(up===1 && last===0) return p1
	else return p2
}

module.exports = { simGame, simGames, simTourney }