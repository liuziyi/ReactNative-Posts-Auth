import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Container, Content, Form, Item, Label, Input, Button, Text } from 'native-base';
import axios from 'axios';

class AddPost extends Component{
	constructor(){
		super();
		this.state = {
			title: '',
			body: ''
		}
	}

	addPost(){
		alert('works')
		const newPost = {
			title: this.state.title,
			body: this.state.body
		}
		axios.request({
			method: 'post',
			url: 'https://jsonplaceholder.typicode.com/posts',
			data: newPost
		})
		.then(res => {
			this.props.navigation.navigate('AllPosts')
		})
		.catch(err => console.log(err))
	}

	render(){
		return(
			<Container style={styles.container}>
				<Content>
					<Form>
						<Item floatingLabel>
							<Label>Title</Label>
			              	<Input 
			              		autoCorrect={false} 
			              		autoCapitalize="none" 
			              		onChangeText={(title) => this.setState({title})}
			              	/>
			            </Item>
			            <Item floatingLabel>
							<Label>Body</Label>
			              	<Input 
			              		style={{height:100}} 
			              		autoCorrect={false} 
			              		autoCapitalize="none" 
			              		onChangeText={(body) => this.setState({body})}
			              	/>
			            </Item>
			            <Button full rounded
			            	style={{ marginTop: 10 }}
			            	onPress={this.addPost.bind(this)}
			            >
			            	<Text style={{ color: 'white' }}>Post</Text>
			            </Button>
					</Form>
				</Content>
			</Container>
		)
	}
}

export default AddPost;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: 'white'
	}
});