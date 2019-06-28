import React from 'react';
import NativeTachyons from 'react-native-style-tachyons';
import { View, Text, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({});

function Winner(props) {
	return (
		<View>
			<Text cls='f4'>{props.winner}</Text>
		</View>
	);
}

Winner.propTypes = {
	winner: PropTypes.string.isRequired
};

export default NativeTachyons.wrap(Winner);
