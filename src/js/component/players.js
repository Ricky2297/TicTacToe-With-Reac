import React, { Component } from "react";
import { GameBoard } from "./gameboard";
import { Home } from "./home";
import PropTypes from "prop-types";

export class Players extends React.Component {
	constructor() {
		super();
		this.state = {
			player1: "",
			player2: ""
		};
	}

	render() {
		return (
			<div
				className={
					this.props.player ? "d-none" : "choosePlayer d-block "
				}>
				<input
					id="player1"
					type="text"
					value={this.state.player1}
					onChange={e => {
						this.setState({ player1: e.target.value });
					}}
				/>
				<input
					id="player2"
					type="text"
					value={this.state.player2}
					onChange={e => {
						this.setState({ player2: e.target.value });
					}}
				/>
				<div>
					<button
						id="x"
						onClick={() =>
							this.props.newGame(
								"x",
								this.state.player1,
								this.state.player2
							)
						}>
						{" "}
						X
					</button>
					<button
						id="o"
						onClick={() =>
							this.props.newGame(
								"o",
								this.state.player1,
								this.state.player2
							)
						}>
						O
					</button>
				</div>
			</div>
		);
	}
}
Players.propTypes = {
	newGame: PropTypes.func,
	player: PropTypes.string
};
