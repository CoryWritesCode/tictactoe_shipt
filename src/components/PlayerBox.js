import React from 'react';
import NativeTachyons from 'react-native-style-tachyons';
import { View, Text, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import { COLORS } from '../constants';

const styles = StyleSheet.create({
	activePlayer: {
		backgroundColor: COLORS.LIGHT.PRIMARY,
		color: COLORS.LIGHT.TEXT
	},
	inactivePlayer: {
		color: COLORS.LIGHT.SECONDARY
	}
});

function PlayerBox(props) {
	return (
		<View cls='flx-row'>
			<View cls='br'>
				<Text
					cls='pa2'
					style={props.who ? styles.activePlayer : styles.inactivePlayer}
				>
					Player 1
				</Text>
			</View>
			<Text
				cls='pa2'
				style={props.who ? styles.inactivePlayer : styles.activePlayer}
			>
				Player 2
			</Text>
		</View>
	);
}

PlayerBox.propTypes = {
	who: PropTypes.bool.isRequired
};

export default NativeTachyons.wrap(PlayerBox);
