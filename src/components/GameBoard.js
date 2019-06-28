import React, { useState } from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import NativeTachyons from 'react-native-style-tachyons';
import Box from './Box';
import { BOXES, TEXT, COLORS } from '../constants';
import PlayerBox from './PlayerBox';
import Winner from './Winner';
import ResetBoard from './ResetBoard';

const styles = StyleSheet.create({
	welcome: {
		backgroundColor: COLORS.LIGHT.BACKGROUND,
		width: '100%'
	},
	gameboard: {
		width: '75%'
	}
});

function GameBoard() {
	const [isPlayerOne, setIsPlayerOne] = useState(true);
	const [turns, setTurns] = useState(0);
	const [isWinner, setIsWinner] = useState();
	const [isGameOver, setIsGameOver] = useState(false);
	const [xSpace, setXSpace] = useState([]);
	const [oSpace, setOSpace] = useState([]);
	let usedSpace = isPlayerOne ? xSpace : oSpace;

	return (
		<View cls='flx-i aic jcc'>
			<View
				accessibilityLabel={TEXT.WELCOME_TEXT}
				cls='aic mv3 pv2'
				style={styles.welcome}
			>
				<Text cls='f3'>{TEXT.WELCOME_TEXT}</Text>
			</View>
			<View>
				{isGameOver ? (
					<Winner winner={isWinner} />
				) : (
					<PlayerBox who={isPlayerOne} />
				)}
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
						usedSpace={usedSpace}
						setGame={setIsGameOver}
						setWinner={setIsWinner}
						isOver={isGameOver}
					/>
				))}
				<View>
					<ResetBoard />
				</View>
			</View>
		</View>
	);
}

export default NativeTachyons.wrap(GameBoard);
