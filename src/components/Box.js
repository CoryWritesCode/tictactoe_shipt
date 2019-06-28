import React, { useState } from 'react';
import NativeTachyons from 'react-native-style-tachyons';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import { WINNERS, TEXT } from '../constants';

const styles = StyleSheet.create({});

function Box(props) {
	const [value, setValue] = useState('');

	let tachyonStyle = 'h3 w3 aic jcc';
	let bottom = [0, 1, 2];
	let leftRight = [1, 4, 7];
	let top = [6, 7, 8];

	if (bottom.includes(props.boxNumber)) {
		tachyonStyle += ' bb';
	}
	if (leftRight.includes(props.boxNumber)) {
		tachyonStyle += ' bl br';
	}
	if (top.includes(props.boxNumber)) {
		tachyonStyle += ' bt';
	}

	function checkWinner() {
		WINNERS.forEach(opt => {
			let option = opt.filter(a => props.usedSpace.includes(a));
			if (option.length === 3) {
				props.setGame(true);
				props.setWinner(props.player ? TEXT.PONE_WINNER : TEXT.PTWO_WINNER);
				return;
			} else if (props.turns === 8 && !props.isOver) {
				props.setGame(true);
				props.setWinner(TEXT.DRAW);
			}
		});
	}

	function pressBox() {
		if (props.turns < 9 && value === '' && !props.isOver) {
			props.player ? setValue('X') : setValue('O');
			props.state(!props.player);
			props.setTurns(props.turns + 1);
			props.usedSpace.push(props.boxNumber);
			if (props.turns > 3) {
				checkWinner();
			}
		} else {
			return;
		}
	}

	return (
		<TouchableOpacity cls={tachyonStyle} onPress={pressBox} activeOpacity={1}>
			<Text cls='f3'>{value}</Text>
		</TouchableOpacity>
	);
}

Box.propTypes = {
	player: PropTypes.bool,
	boxNumber: PropTypes.number,
	state: PropTypes.func,
	turns: PropTypes.number,
	setTurns: PropTypes.func,
	usedSpace: PropTypes.array
};

export default NativeTachyons.wrap(Box);
