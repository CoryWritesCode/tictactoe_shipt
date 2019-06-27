import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
import NativeTachyons from 'react-native-style-tachyons';
import { StyleSheet, Dimensions } from 'react-native';

const screenWidth = Dimensions.get('window').width;

NativeTachyons.build(
	{
		rem: screenWidth > 340 ? 20 : 18,
		fontRem: 20
	},
	StyleSheet
);

AppRegistry.registerComponent(appName, () => App);
