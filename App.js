import React from 'react';
import { StackNavigator } from 'react-navigation';

import Amplify, { Auth } from 'aws-amplify';
import AWSConfig from './aws-exports';
Amplify.configure(AWSConfig);

import Splash from './components/Splash';
import SignUp from './components/SignUp';
import Login from './components/Login';
import Main from './components/Main';

class App extends React.Component {
  render() {
    return (
      <MainStack/>
    );
  }
}

export default App;

export const MainStack = StackNavigator({
  Splash: { screen: Splash },
  SignUp: { screen: SignUp },
  Login: { screen: Login },
  Main: { screen: Main }
})