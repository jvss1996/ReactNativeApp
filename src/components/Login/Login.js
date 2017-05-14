import React, { Component } from 'react';
import { View, StyleSheet, Image, Text, KeyboardAvoidingView} from 'react-native';
import LoginForm from './LoginForm';

export default class Login extends Component {
	render(){
		return (
			<KeyboardAvoidingView behaviour="padding" style={styles.container}>
				<View style={styles.logoContainer}>
					<Image 
						style={styles.logo}
						source={require('../../images/octocat1.png')}/>
					<Text style={styles.title}>An App made for Github using React Native
					</Text>
				</View>
				<View style={styles.formContainer}>
					<LoginForm/>
				</View>
			</KeyboardAvoidingView>
		);
	}
}

const styles= StyleSheet.create({
	container: {
		flex:1,
		backgroundColor:'#3498db'
	},
	logo: {
		width: 100,
		height:100
	},
	logoContainer: {
		alignItems:'center',
		flexGrow:1,
		justifyContent: 'center'
	},
	title: {
		color: 'white',
		marginTop: 10,
		width: 160,
		textAlign: 'center',
		opacity:0.7
	}
});