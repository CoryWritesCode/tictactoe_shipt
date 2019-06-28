import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import PropTypes from 'prop-types';
import NativeTachyons from 'react-native-style-tachyons';

function ThemeSwitcher(props) {
	let ally = 'Current Theme is ' + props.theme.key + '. Press to change!';
	return (
		<View>
			<TouchableOpacity
				style={{ backgroundColor: props.theme.prim, width: 130 }}
				cls='ba pv1 br5 aic mb3'
				onPress={props.handlePress}
				activeOpacity={1}
				accessibilityRole='button'
				accessibilityLabel={ally}
			>
				<Text style={{ color: props.theme.text }}>
					Theme: {props.theme.key}
				</Text>
			</TouchableOpacity>
		</View>
	);
}

ThemeSwitcher.propTypes = {
	theme: PropTypes.string.isRequired,
	handlePress: PropTypes.func.isRequired
};

export default NativeTachyons.wrap(ThemeSwitcher);
