import React from 'react';
import NativeTachyons from 'react-native-style-tachyons';
import { View, Text, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
	text: {
		paddingVertical: 8,
		width: 142
	}
});

function Winner(props) {
	return (
		<View cls='flx-row jcc' style={styles.text}>
			<Text cls='f6' style={{ color: props.theme.text }}>
				{props.winner}
			</Text>
		</View>
	);
}

Winner.propTypes = {
	winner: PropTypes.string.isRequired,
	theme: PropTypes.string
};

export default NativeTachyons.wrap(Winner);
