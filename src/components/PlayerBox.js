import React from 'react';
import NativeTachyons from 'react-native-style-tachyons';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';

function PlayerBox(props) {
	return (
		<View cls='flx-row'>
			<View cls='br'>
				<Text
					cls='pa2'
					style={{
						backgroundColor: props.who ? props.theme.prim : null,
						color: props.who ? props.theme.text : props.theme.sec
					}}
				>
					Player 1
				</Text>
			</View>
			<Text
				cls='pa2'
				style={{
					backgroundColor: !props.who ? props.theme.prim : null,
					color: !props.who ? props.theme.text : props.theme.sec
				}}
			>
				Player 2
			</Text>
		</View>
	);
}

PlayerBox.propTypes = {
	who: PropTypes.bool.isRequired,
	theme: PropTypes.string.isRequired
};

export default NativeTachyons.wrap(PlayerBox);
