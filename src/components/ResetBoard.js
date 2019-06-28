import React from 'react';
import NativeTachyons from 'react-native-style-tachyons';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import { TEXT } from '../constants';

const styles = StyleSheet.create({});

function ResetBoard() {
	return (
		<TouchableOpacity
			cls='ba pv2 ph4 top-2'
			accessibilityRole='button'
			accessibilityLabel={TEXT.RESET}
		>
			<Text>Reset</Text>
		</TouchableOpacity>
	);
}

export default NativeTachyons.wrap(ResetBoard);
