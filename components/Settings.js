import React, { Component } from 'react';
import { StyleSheet, AsyncStorage } from 'react-native';
import { Icon, Container, Text, Button } from 'native-base';
import { Auth } from 'aws-amplify';

class Settings extends Component {
	
	static navigationOptions = {
		tabBarIcon: ({tintColor}) => (
			<Icon name="ios-settings" style={{ color: tintColor }}/>
		)
	}

	state = { 
	    user: ''
	}

	componentDidMount(){
	    this.getUser()
	}

	getUser(){
		AsyncStorage.getItem('user')
	    .then(res => {
	      console.log('AsyncStorage: Feed ', res)
	      this.setState({ user: res })
	    })
	}

	signOut(){
		Auth.signOut()
		.then(() => AsyncStorage.removeItem('user'))
	}

	render(){
		let user = this.state.user;

		return(
			<Container style={styles.container}>
				<Text>Settings</Text>
				<Text>{user}</Text>
				<Button full rounded
					style={{ marginTop: 10 }}
					onPress={this.signOut.bind(this)}
				>
					<Text style={{ color: 'white' }}>Sign Out</Text>
				</Button>
			</Container>
		)
	}
}

export default Settings;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: 'white',
		justifyContent: 'center',
		alignItems: 'center'
	}
})