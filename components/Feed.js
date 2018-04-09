import React, { Component } from 'react';
import { Icon } from 'native-base';
import { StackNavigator } from 'react-navigation';

import Posts from './Posts';
import PostDetails from './PostDetails';
import AddPost from './AddPost';

class Feed extends Component {

	static navigationOptions = {
		tabBarIcon: ({tintColor}) => (
			<Icon name="ios-home" style={{ color: tintColor }}/>
		)
	}

	render(){
		return(
			<FeedStackNavigator/>
		)
	}
}

export default Feed;

const FeedStackNavigator = StackNavigator({
  Posts: { screen: Posts },
  PostDetails: { screen: PostDetails },
  AddPost: { screen: AddPost }
})