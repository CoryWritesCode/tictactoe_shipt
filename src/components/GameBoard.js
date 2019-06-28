import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
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
	const [isWinner, setIsWinner] = useState('');
	const [isGameOver, setIsGameOver] = useState(false);
	const [xSpace, setXSpace] = useState([]);
	const [oSpace, setOSpace] = useState([]);
	const [keyReset, setKeyReset] = useState(1);
	let usedSpace = isPlayerOne ? xSpace : oSpace;

	return (
		<View cls='flx-i aic jcc'>
			<View
				accessibilityLabel={TEXT.WELCOME_TEXT}
				cls='aic mv3 pv2'
				style={styles.welcome}
			>
				<Text cls='f4 #111'>{TEXT.WELCOME_TEXT}</Text>
			</View>
			<View cls='mh3 mv2 flx-row ba br1'>
				{isGameOver ? (
					<Winner winner={isWinner} />
				) : (
					<PlayerBox who={isPlayerOne} />
				)}
			</View>
			<View
				accessible={true}
				key={keyReset}
				style={styles.gameboard}
				cls='jcc aic flx-i flx-wrap flx-row pa2 aic'
			>
				{BOXES.map(box => (
					<Box
						key={box}
						boxNumber={box}
						player={isPlayerOne}
						playerState={setIsPlayerOne}
						turns={turns}
						setTurns={setTurns}
						usedSpace={usedSpace}
						setGame={setIsGameOver}
						setWinner={setIsWinner}
						isOver={isGameOver}
						winner={isWinner}
					/>
				))}
				<View>
					<ResetBoard
						handlePress={() => {
							setKeyReset(keyReset + 1);
							setTurns(0);
							setIsGameOver(false);
							setIsPlayerOne(true);
							setIsWinner('');
							setXSpace([]);
							setOSpace([]);
						}}
					/>
				</View>
			</View>
		</View>
	);
}

export default NativeTachyons.wrap(GameBoard);
