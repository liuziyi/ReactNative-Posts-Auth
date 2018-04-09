import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Container, Content, List, ListItem, Text, Button } from 'native-base';
import axios from 'axios';

class Posts extends Component {

	static navigationOptions = ({navigation}) => {
		return {
			headerBackTitle: "Back",
			title: "Posts",
			headerRight: (
				<Button bordered dark
					style={{ height: 30, marginTop: 5, marginRight: 10 }}
					onPress={() => navigation.navigate('AddPost')}
				>
					<Text>Add</Text>
				</Button>
			)
		}
	}

	constructor(){
		super();
		this.state = {
			posts: []
		}
	}

	componentDidMount(){
		this.getPosts();
	}

	getPosts(){
		axios.get('https://jsonplaceholder.typicode.com/posts')
		.then(res => {
			// console.log(res.data)
			this.setState({posts: res.data })
		})
		.catch(err => console.log(err));
	}

	render(){
		const postItems = this.state.posts.map((post, i) => {
			return(
				<ListItem key={post.id}>
					<Button transparent
						onPress={() => this.props.navigation.navigate('PostDetails',{
							title: post.title,
							body: post.body 
						})}
					>
						<Text style={{ color: 'black' }}>{post.title}</Text>
					</Button>
				</ListItem>
			)
		})

		return(
			<Container style={styles.container}>
				<Content>
					<List>
						{postItems}
					</List>
				</Content>
			</Container>
		)
	}
}

export default Posts;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: 'white',
		justifyContent: 'center',
		alignItems: 'center'
	}
})