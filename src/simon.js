export class Simon {
	// var guesses, colors,

	constructor() {
		this.guesses = 0;
		this.colors = ["red", "green", "blue", "yellow"];
		this.turn = 1;
		this.selections = [];
		this.userSelections = [];
		this.lastSelection = "";
		this.message = "";
	}

	userGuess(color) {
		this.userSelections.push(color)
		if(this.compare()) {
			this.turn++;
			this.message = "Correct! Simon is picking...";
			this.generatePattern();
		} else {
			this.message = "Wrong Choice! You lose!";
		}
	}

	generatePattern() {
		for(var i = 0; i <= this.turn; i++) {
			this.selections.push(this.colors[Math.floor(Math.random() * 4)]);
			this.lastSelection = this.selections[this.selections.length - 1];
		}
	}

	compare() {
		let areEqual = false;

		for(var i = 0; i < this.userSelections.length; i++) {
			
			if(this.userSelections[i] === this.selections[i]) {
				areEqual = true;
				i++;
			} else {
				return false;
			}
		}

		return areEqual;
	}
}