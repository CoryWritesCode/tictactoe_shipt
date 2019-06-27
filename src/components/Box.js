import React, { useState } from 'react';
import NativeTachyons from 'react-native-style-tachyons';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
	textValue: {
		fontSize: 26
	}
});

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

	function pressBox() {
		if (props.turns < 9 && value === '') {
			props.player ? setValue('X') : setValue('O');
			props.state(!props.player);
			props.setTurns(props.turns + 1);
		} else {
			return;
		}
	}

	return (
		<View>
			<TouchableOpacity cls={tachyonStyle} onPress={pressBox} activeOpacity={1}>
				<Text style={styles.textValue}>{value}</Text>
			</TouchableOpacity>
		</View>
	);
}

Box.propTypes = {
	player: PropTypes.bool,
	boxNumber: PropTypes.number,
	state: PropTypes.func,
	turns: PropTypes.number,
	setTurns: PropTypes.func
};

export default NativeTachyons.wrap(Box);
