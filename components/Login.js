import React, { Component } from 'react';
import { StyleSheet, AsyncStorage } from 'react-native';
import { Container, Content, Form, Item, Label, Input, Button, Text } from 'native-base';
import { Auth } from 'aws-amplify';

class Login extends Component {
	constructor(){
		super();
		this.state = {
			username: '',
			password: '',
			authCode: '',
			user: {}
		}
	}

	login(){
		Auth.signIn(this.state.username, this.state.password)
		.then(user => {
			this.setState({ user })
			console.log(Auth)
			console.log('Successful Login')
			AsyncStorage.setItem('user', Auth.user.username)
			this.props.navigation.navigate('Main')
		})
		.catch(err => console.log('Error Logging In: ', err ));
	}

	render(){
		return(
			<Container style={styles.container}>
				<Content>
					<Form>
						<Item floatingLabel>
							<Label>Username</Label>
			              	<Input 
			              		autoCorrect={false} 
			              		autoCapitalize="none" 
			              		onChangeText={(username) => this.setState({username})}
			              	/>
			            </Item>
			            <Item floatingLabel>
							<Label>Password</Label>
			              	<Input 
			              		secureTextEntry={true}
			              		autoCorrect={false} 
			              		autoCapitalize="none" 
			              		onChangeText={(password) => this.setState({password})}
			              	/>
			            </Item>
			            <Button style={{ marginTop: 10 }} full rounded
			            	onPress={this.login.bind(this)}
			            >
							<Text style={{ color: 'white' }}>Login</Text>
			            </Button>
					</Form>
				</Content>
			</Container>
		)
	}
}

export default Login;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: 'white'
	}
})