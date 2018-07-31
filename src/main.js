import {Simon} from "./simon";
import "./styles.css";
import img from "./simon.png";

$(document).ready(function() {

	$(".userSection").hide();
	$(".simonSection").hide();
	$(".gameOver").hide();

	$("#playGame").click(function() {
		let simon = new Simon();
		simon.startSimon();
	});

});