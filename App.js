import React from 'react';
import { StyleSheet, View, SafeAreaView } from 'react-native';
import NativeTachyons from 'react-native-style-tachyons';
import GameBoard from './src/components/GameBoard';

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
		backgroundColor: '#F5FCFF'
	}
});

export default NativeTachyons.wrap(App);
