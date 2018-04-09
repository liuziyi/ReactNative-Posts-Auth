import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Container, Card, CardItem, Body, Text } from 'native-base';

class PostDetails extends Component {
	render(){
		const { params } = this.props.navigation.state;
		const title = params ? params.title : null;
		const body = params ? params.body : null;

		return(
			<Container style={styles.container}>
				<Card>
					<CardItem>
						<Text>{title}</Text>
					</CardItem>
					<CardItem>
						<Body>
							<Text>{body}</Text>
						</Body>
					</CardItem>
				</Card>
			</Container>
		)
	}
}

export default PostDetails;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: 'white'
	}
});