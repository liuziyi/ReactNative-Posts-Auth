import React, { Component } from 'react';
import { StyleSheet, AsyncStorage } from 'react-native';
import { Container, Text, Button } from 'native-base';

class Splash extends Component{
	
	static navigationOptions = {
		header: null
	}

	componentDidMount(){
		this.getUser()
	}

	getUser(){
		AsyncStorage.getItem('user')
		.then(res => {
			console.log('AsyncStorage: Splash ', res)
			if(res !== null){
				this.props.navigation.navigate('Main')
			}
		})
	}

	render(){
		return(
			<Container style={styles.container}>
				<Text>Welcome</Text>
				<Button rounded bordered block dark
					style={{ marginTop: 10, marginRight: 10, marginLeft: 10 }}
					onPress={() => this.props.navigation.navigate('SignUp')}
				>
					<Text>Sign Up</Text>
				</Button>
				<Button rounded bordered block dark
					style={{ marginTop: 10, marginRight: 10, marginLeft: 10 }}
					onPress={() => this.props.navigation.navigate('Login')}
				>
					<Text>Login</Text>
				</Button>
			</Container>
		)
	}
}

export default Splash;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: 'white',
		justifyContent: 'center',
		alignItems: 'center'
	}
})