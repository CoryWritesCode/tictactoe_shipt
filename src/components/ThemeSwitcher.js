import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import PropTypes from 'prop-types';
import NativeTachyons from 'react-native-style-tachyons';

function ThemeSwitcher(props) {
	return (
		<View>
			<TouchableOpacity
				style={{ backgroundColor: props.theme.prim, width: 130 }}
				cls='ba pv1 br5 aic'
				onPress={props.handlePress}
				activeOpacity={1}
			>
				<Text>Theme: {props.theme.key}</Text>
			</TouchableOpacity>
		</View>
	);
}

ThemeSwitcher.propTypes = {
	theme: PropTypes.string.isRequired,
	handlePress: PropTypes.func.isRequired
};

export default NativeTachyons.wrap(ThemeSwitcher);
