export class Simon {
	// var guesses, colors,

	constructor() {
		this.guesses = 0;
		this.colors = ["red", "green", "blue"];
		this.turn = 1;
		this.selections = [];
		this.lastSelection = "";
		this.message = "";
	}

	userGuess(colors) {
		if(colors === this.selections) {
			this.turn++;
			this.message = "Simon is picking...";
			this.generatePattern();
		} else {
			this.message = "You lose!";
		}
	}

	generatePattern() {
		for(var i = 0; i <= this.turn; i++) {
			this.selections.push(this.color[Math.floor(Math.Random() * 3)]);
			this.lastSelection = this.selections[this.selections.length - 1];
		}
	}
}