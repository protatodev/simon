import {Simon} from "./simon";
import "./styles.css";
import img from "./simon.png";

$(document).ready(function() {
	let simon = new Simon();
	simon.generatePattern();

	$(".green").click(function() {
		simon.userGuess("green");
		$(".userDiv").text(simon.message);
		$(".simonDiv").text(simon.lastSelection);
	});
	$(".yellow").click(function() {
		simon.userGuess("yellow");
		$(".userDiv").text(simon.message);
		$(".simonDiv").text(simon.lastSelection);
	});
	$(".blue").click(function() {	
		simon.userGuess("blue");
		$(".userDiv").text(simon.message);
		$(".simonDiv").text(simon.lastSelection);
	});
	$(".red").click(function() {
		simon.userGuess("red");
		$(".userDiv").text(simon.message);
		$(".simonDiv").text(simon.lastSelection);
	});

});