import React, { useState } from 'react';
import {
	View,
	Text,
	StyleSheet,
	TouchableOpacity,
	SafeAreaView
} from 'react-native';
import NativeTachyons from 'react-native-style-tachyons';
import Box from './Box';
import { BOXES, TEXT } from '../constants';
import PlayerBox from './PlayerBox';
import Winner from './Winner';
import ResetBoard from './ResetBoard';
import ThemeSwitcher from './ThemeSwitcher';
import { themes } from '../utils';

function GameBoard() {
	const [isPlayerOne, setIsPlayerOne] = useState(true);
	const [turns, setTurns] = useState(0);
	const [isWinner, setIsWinner] = useState('');
	const [isGameOver, setIsGameOver] = useState(false);
	const [xSpace, setXSpace] = useState([]);
	const [oSpace, setOSpace] = useState([]);
	const [keyReset, setKeyReset] = useState(1);
	const [colors, setColors] = useState(0);
	let color = themes[colors];
	let usedSpace = isPlayerOne ? xSpace : oSpace;

	return (
		<SafeAreaView cls='flx-i' style={{ backgroundColor: color.appBkgd }}>
			<View cls='flx-i aic jcc'>
				<View
					accessibilityLabel={TEXT.WELCOME_TEXT}
					cls='aic mv3 pv2'
					style={{ backgroundColor: color.bkgd, width: '100%' }}
				>
					<Text cls='f4' style={{ color: color.text }}>
						{TEXT.WELCOME_TEXT}
					</Text>
				</View>
				<View cls='mh3 mv2 flx-row ba br1'>
					{isGameOver ? (
						<Winner winner={isWinner} theme={color} />
					) : (
						<PlayerBox who={isPlayerOne} theme={color} />
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
							theme={color}
						/>
					))}
					<View>
						<ResetBoard
							theme={color}
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
				<ThemeSwitcher
					theme={color}
					handlePress={() => {
						if (color.key == 'LIT') {
							setColors(0);
						} else {
							setColors(colors + 1);
						}
					}}
				/>
			</View>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	gameboard: {
		width: '75%'
	}
});

export default NativeTachyons.wrap(GameBoard);
