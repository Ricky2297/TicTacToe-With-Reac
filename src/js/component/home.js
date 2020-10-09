import React, { Component } from "react";
import { GameBoard } from "./gameboard";
import { Players } from "./players";

export class Home extends React.Component {
	constructor() {
		super();

		this.state = {
			player: null,
			winner: null
		};
	}
	newGame = (player, player1, player2) => {
		this.setState({
			player: player,
			player1: player1,
			player2: player2
		});
	};

	onWinner = winner => {
		this.setState({ winner: winner });
	};
	switchPlayer = () => {
		this.setState({ player: this.state.player == "x" ? "o" : "x" });
	};
	renderMessage = () => {
		if (this.state.player == null) {
			return <h1>Pick a Weapon! </h1>;
		} else if (this.state.winner == null) {
			return <h1>it is {this.state.player} turn </h1>;
		} else if (this.state.winner != null) {
			return <h1>The Winner is {this.state.winner}</h1>;
		}
	};
	render() {
		return (
			<div>
				<div id="winner" className=" text-center ">
					{this.renderMessage()}
				</div>
				<div className="container  text-center mt-5">
					<Players
						newGame={this.newGame}
						player={this.state.player}
					/>
					<GameBoard
						player={this.state.player}
						switchPlayer={this.switchPlayer}
						onWinner={this.onWinner}
					/>
				</div>
				<div>
					<p className="lead text-center ">
						<a
							id="buttom"
							className="btn btn-lg mt-5 resetButton  "
							href=""
							role="button">
							<strong>
								<strong>RESET</strong>
							</strong>
						</a>
					</p>
				</div>
			</div>
		);
	}
}
