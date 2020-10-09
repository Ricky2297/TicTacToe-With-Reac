import React, { Component } from "react";
import { GameBoard } from "./gameboard";





// const handleClick = i => {
//         const boardCopy = [...board];
//         // If user click an occupied square or if game is won, return
//         if (winner || boardCopy[i]) return;
//         // Put an X or an O in the clicked square
//         boardCopy[i] = xIsNext ? 'X' : 'O';
//         setBoard(boardCopy);
//         setXisNext(!xIsNext);
//     }


    // upDateMove = index => {
	// 	var newBoxValue = this.state.boxValues.map((item, i) => {
	// 		if (i == index) {
	// 			return "X";
	// 		}
	// 		return item;
	// 	});
	// 	this.setState({ boxValues: newBoxValue });
	// 	console.log(this.state.boxValues);
	// };