import React from 'react';
import NativeTachyons from 'react-native-style-tachyons';
import { TouchableOpacity, Text } from 'react-native';
import PropTypes from 'prop-types';
import { TEXT } from '../constants';

function ResetBoard(props) {
	return (
		<TouchableOpacity
			cls='ba pv2 ph4 top-2 br1'
			accessibilityRole='button'
			accessibilityLabel={TEXT.RESET}
			onPress={props.handlePress}
			style={{ backgroundColor: props.theme.prim }}
		>
			<Text style={{ color: props.theme.text }}>Reset</Text>
		</TouchableOpacity>
	);
}

ResetBoard.propTypes = {
	handlePress: PropTypes.func.isRequired,
	state: PropTypes.func,
	theme: PropTypes.string.isRequired
};

export default NativeTachyons.wrap(ResetBoard);
