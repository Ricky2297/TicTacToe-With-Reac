import React, { Component } from "react";
import PropTypes from "prop-types";
var laX = (
	<div className="x">
		<i className="fas fa-expand-arrows-alt" />
	</div>
);
var laO = (
	<div className="o">
		<i className="fab fa-opera" />
	</div>
);

// const winner = [
// 	//Horizontal
// 	[0, 1, 2],
// 	[3, 4, 5],
// 	[6, 7, 8],
// 	//Vertical
// 	[0, 3, 6],
// 	[1, 4, 7],
// 	[2, 5, 8],
// 	//Diagonal
// 	[0, 4, 8],
// 	[2, 4, 6]
// ];

export class GameBoard extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			boxValues: ["", "", "", "", "", "", "", "", ""]
		};
	}
	///Winner///

	checkWinningCombo = (winningCombo, wArray) => {
		var successFullMatches = 0;
		for (var i = 0; i < winningCombo.length; i++) {
			if (winningCombo[i] == 1) {
				if (wArray[i] == this.props.player) {
					successFullMatches++;
					if (successFullMatches > 2) return this.props.player;
				}
			}
		}
	};

	pickWinner = wArray => {
		const wCombos = [
			[1, 1, 1, 0, 0, 0, 0, 0, 0],
			[0, 0, 0, 1, 1, 1, 0, 0, 0],
			[0, 0, 0, 0, 0, 0, 1, 1, 1],
			[1, 0, 0, 1, 0, 0, 1, 0, 0],
			[0, 1, 0, 0, 1, 0, 0, 1, 0],
			[0, 0, 1, 0, 0, 1, 0, 0, 1],
			[1, 0, 0, 0, 1, 0, 0, 0, 1],
			[0, 0, 1, 0, 1, 0, 1, 0, 0]
		];
		wCombos.forEach(winningCombo => {
			var winner = null;
			winner = this.checkWinningCombo(winningCombo, wArray);
			if (winner != null) {
				this.props.onWinner(this.props.player);
				this.setState({
					boxValues: ["", "", "", "", "", "", "", "", ""]
				});
			}
		});
		return null;
	};

	upDateMove = index => {
		var newBoxValue = this.state.boxValues.map((item, i) => {
			if (i == index) {
				return this.props.player;
			}
			return item;
		});
		this.setState({ boxValues: newBoxValue });

		this.props.switchPlayer();

		this.pickWinner(newBoxValue);
	};
	render() {
		return (
			<div className="board">
				<div className="row">
					{" "}
					<div
						className="box 1 col-4"
						onClick={() => {
							this.upDateMove(0);
						}}>
						{this.state.boxValues[0] == "x"
							? laX
							: this.state.boxValues[0] == "o"
								? laO
								: ""}
					</div>
					<div
						className="box 2 col-4"
						onClick={() => {
							this.upDateMove(1);
						}}>
						{this.state.boxValues[1] == "x"
							? laX
							: this.state.boxValues[1] == "o"
								? laO
								: ""}
					</div>
					<div
						className="box 3 col-4 "
						onClick={() => {
							this.upDateMove(2);
						}}>
						{this.state.boxValues[2] == "x"
							? laX
							: this.state.boxValues[2] == "o"
								? laO
								: ""}
					</div>
				</div>
				<div className="row">
					<div
						className="box 4 col-4"
						onClick={() => {
							this.upDateMove(3);
						}}>
						{this.state.boxValues[3] == "x"
							? laX
							: this.state.boxValues[3] == "o"
								? laO
								: ""}
					</div>
					<div
						className="box 5 col-4"
						onClick={() => {
							this.upDateMove(4);
						}}>
						{this.state.boxValues[4] == "x"
							? laX
							: this.state.boxValues[4] == "o"
								? laO
								: ""}
					</div>
					<div
						className="box 6 col-4"
						onClick={() => {
							this.upDateMove(5);
						}}>
						{this.state.boxValues[5] == "x"
							? laX
							: this.state.boxValues[5] == "o"
								? laO
								: ""}
					</div>
				</div>
				<div className="row">
					<div
						className="box 7 col-4"
						onClick={() => {
							this.upDateMove(6);
						}}>
						{this.state.boxValues[6] == "x"
							? laX
							: this.state.boxValues[6] == "o"
								? laO
								: ""}
					</div>
					<div
						className="box 8 col-4"
						onClick={() => {
							this.upDateMove(7);
						}}>
						{this.state.boxValues[7] == "x"
							? laX
							: this.state.boxValues[7] == "o"
								? laO
								: ""}
					</div>
					<div
						className="box 9 col-4"
						onClick={() => {
							this.upDateMove(8);
						}}>
						{this.state.boxValues[8] == "x"
							? laX
							: this.state.boxValues[8] == "o"
								? laO
								: ""}
					</div>
				</div>
			</div>
		);
	}
}

GameBoard.propTypes = {
	switchPlayer: PropTypes.func,
	player: PropTypes.string,
	onWinner: PropTypes.func
};
