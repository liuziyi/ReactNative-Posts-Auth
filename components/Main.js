import React, { Component } from 'react';
import { AsyncStorage, Platform } from 'react-native';
import { TabNavigator } from 'react-navigation';

import Feed from './Feed';
import Settings from './Settings';

class Main extends Component {
	
	static navigationOptions = {
		header: null
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
			console.log('AsyncStorage: Main ', res)
			if(res !== null){
	      		this.setState({ user: res })	
	      	}else{
	      		this.props.navigation.navigate('Splash')
	      	}
		})
	}

	render(){
		return(
			<MainTabNavigator/>
		)
	}
}

export default Main;

const MainTabNavigator = TabNavigator({
	Feed: { screen: Feed },
	Settings: { screen: Settings }
})