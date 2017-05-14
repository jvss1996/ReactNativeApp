import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class Splash extends Component {
	render(){
		return (
			<View style={styles.wrapper}>
			<View style={styles.TitleWrapper}>
				<Text style={styles.title}>Github App</Text>
			</View>
			<View>
				<Text style={styles.subtitle}>Powered by React native</Text>
			</View>
			</View>
		);
	}
}

const styles= StyleSheet.create({
	wrapper: {
		backgroundColor:'#27ae60', 
		flex:1, 
		justifyContent:'center', 
		alignItems:'center'
	},

	title: {
		color: 'white',
		fontSize:35,
		fontWeight:'bold'
	},

	subtitle: {
		color:'white',
		fontWeight:'normal',
		paddingBottom: 20
	},

	TitleWrapper: {
		flex: 1,
		justifyContent: 'center'
	}
});