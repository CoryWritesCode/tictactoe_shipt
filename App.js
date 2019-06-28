import React from 'react';
import NativeTachyons from 'react-native-style-tachyons';
import GameBoard from './src/components/GameBoard';

class App extends React.Component {
	render() {
		return <GameBoard />;
	}
}

export default NativeTachyons.wrap(App);
