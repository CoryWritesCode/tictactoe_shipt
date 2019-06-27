import React, { useState } from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import NativeTachyons from 'react-native-style-tachyons';
import Box from './Box';
import { BOXES } from '../constants';

const styles = StyleSheet.create({
	welcome: {
		fontSize: 20,
		textAlign: 'center',
		margin: 10
	},
	playerBox: {
		textAlign: 'center',
		color: '#333333',
		marginBottom: 5
	},
	activePlayer: {
		backgroundColor: 'cyan'
	},
	inactivePlayer: {},
	gameboard: {
		width: '75%'
	}
});

function GameBoard() {
	const [isPlayerOne, setIsPlayerOne] = useState(true);
	const [turns, setTurns] = useState(0);

	return (
		<View cls='flx-i aic jcc'>
			<Text style={styles.welcome}>Welcome to Tic-Tac-Toe!</Text>
			<View cls='flx-row ba mv3' stlye={styles.playerBox}>
				<Text
					cls='pa2'
					style={isPlayerOne ? styles.activePlayer : styles.inactivePlayer}
				>
					Player 1
				</Text>
				<Text
					cls='pa2'
					style={!isPlayerOne ? styles.activePlayer : styles.inactivePlayer}
				>
					Player 2
				</Text>
			</View>
			<View
				style={styles.gameboard}
				cls='jcc aic flx-i flx-wrap flx-row pa2 aic'
			>
				{BOXES.map(box => (
					<Box
						key={box}
						boxNumber={box}
						player={isPlayerOne}
						state={setIsPlayerOne}
						turns={turns}
						setTurns={setTurns}
					/>
				))}
			</View>
		</View>
	);
}

export default NativeTachyons.wrap(GameBoard);
