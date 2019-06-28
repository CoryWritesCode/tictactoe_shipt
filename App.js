import React from 'react';
import { StyleSheet, View, SafeAreaView } from 'react-native';
import NativeTachyons from 'react-native-style-tachyons';
import GameBoard from './src/components/GameBoard';
import { COLORS } from './src/constants';

class App extends React.Component {
	render() {
		return (
			<SafeAreaView cls='flx-i' style={styles.container}>
				<GameBoard />
			</SafeAreaView>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: COLORS.LIGHT.APP_BACKGROUND
	}
});

export default NativeTachyons.wrap(App);
