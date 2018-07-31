export class Simon {

	constructor() {
		this.interval = "";
		this.colors = ["red", "green", "blue", "yellow"];
		this.turn = 0;
		this.selections = [];
		this.simonSelections = [];
		this.userSelections = [];
		this.lastSelection = "";
		this.counter = 0;
	}

	playUserTurn() {
		let self = this;

		$(".color").click(function(event) {
			event.stopImmediatePropagation();
			self.counter++;
			
			let color = $(this).attr("value");
			self.userSelections.push(color);
			console.log("User Array: " + self.userSelections);
			
			if(color !== self.selections[self.counter]) {
				console.log("User Color: " + color);
				console.log("Simon Color: " + self.selections[self.counter]);
				self.showLoserScreen();
				clearInterval(self.interval);
				return;
			} 

			if(self.userSelections.length === self.turn) {
				$(".userSection").hide();
				self.startSimon();
			}
			
		});
	}

	startSimon() {
		var thisPlaySimon = this.playSimonsTurn.bind(this);
		this.simonSelections = [];
		this.turn++;
		this.counter = -1;
		this.interval = setInterval(thisPlaySimon, 1000);
		console.log("Simon Turn: " + this.turn);
	}

	playSimonsTurn() {
		$(".simonSection").hide().fadeIn(1000);
		this.counter++;
		console.log("Simon Counter: " + this.counter);
		

		this.selections.push(this.colors[Math.floor(Math.random() * 3)]);
		this.simonSelections.push(this.selections[this.counter]);
		this.lastSelection = this.simonSelections[this.counter];
		console.log("Simon Array: " + this.simonSelections);
		
		$(".simonDiv").text(this.lastSelection);
		
		if(this.counter === (this.turn - 1)) {
			$(".simonSection").hide();
			clearInterval(this.interval);
			this.userSelections = [];
			this.counter = -1;
			$(".userSection").hide().fadeIn(1000);
			this.playUserTurn();
		}
	}

	showLoserScreen() {
		$(".userSection").hide();
		$(".simonSection").hide();

		$("#stats").text("You played a total of " + this.turn + " turns.");
		$(".gameOver").show();
	}
}