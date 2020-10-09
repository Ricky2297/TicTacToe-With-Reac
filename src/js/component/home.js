import React, { Component } from "react";
import { GameBoard } from "./gameboard";

// export class Yourturn extends React.Component {
//     constructor() {
//         super();
//         this.state = {
//             playerOne: null,
//             playerTwo: null
//             //      playerOne:   "X";
//             //     playerTwo:   "O"
//         };
//     }
//     this.state.playerOne = true ? this.state.playerOne  ;
//     player = () => {};
// }
//create your first component

export class Home extends React.Component {
	constructor() {
		super();

		this.state = {
			player: "x",
			winner: null
		};
	}

	onWinner = winner => {
		this.setState({ winner: winner });
	};
	switchPlayer = () => {
		this.setState({ player: this.state.player == "x" ? "o" : "x" });
	};

	render() {
		return (
			<div>
				<div id="winner" className=" text-center ">
					The Winner is {this.state.winner}
				</div>
				<div className="container  text-center mt-5">
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
