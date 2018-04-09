import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Container, Content, Form, Item, Label, Input, Button, Text } from 'native-base';
import { Auth } from 'aws-amplify';

class SignUp extends Component{
	constructor(){
		super();
		this.state = {
			username: '',
			password: '',
			phone_number: '',
			email: '',
			authCode: ''
		}
	}

	signUp(){
		Auth.signUp({
			username: this.state.username,
			password: this.state.password,
			attributes: {
				email: this.state.email,
				phone_number: this.state.phone_number
			}
		})
		.then(() => {
			console.log('Successful Sign Up')
		})
		.catch(err => console.log('Error Signing Up: ', err ));
	}

	confirmSignUp(){
		Auth.confirmSignUp(this.state.username,this.state.authCode)
		.then(() => {
			console.log('SIGN UP: AUTH ', Auth)
			console.log('Successful Confirm Sign Up')
			this.props.navigation.navigate('Login')
		})
		.catch(err => console.log('Error Confirming Signing Up: ', err ));
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
			            <Item floatingLabel>
							<Label>Phone</Label>
			              	<Input 
			              		onChangeText={(phone_number) => this.setState({phone_number})}
			              	/>
			            </Item>
			            <Item floatingLabel>
							<Label>Email</Label>
			              	<Input 
			              		autoCorrect={false} 
			              		autoCapitalize="none" 
			              		onChangeText={(email) => this.setState({email})}
			              	/>
			            </Item>
			            <Button full rounded
			            	style={{ marginTop: 10 }}
			            	onPress={this.signUp.bind(this)}
			            >
			            	<Text style={{ color: 'white' }}>Sign Up</Text>
			            </Button>
			            <Item floatingLabel>
							<Label>Authentication Code</Label>
			              	<Input 
			              		autoCorrect={false} 
			              		autoCapitalize="none" 
			              		onChangeText={(authCode) => this.setState({authCode})}
			              	/>
			            </Item>
			            <Button full rounded
			            	style={{ marginTop: 10 }}
			            	onPress={this.confirmSignUp.bind(this)}
			            >
			            	<Text style={{ color: 'white' }}>Confirm Sign Up</Text>
			            </Button>
					</Form>
				</Content>
			</Container>
		)
	}
}

export default SignUp;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: 'white',
		justifyContent: 'center'
	}
})