import React from 'react';
// import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './screens/Login';
import Register from './screens/Register';
import Chat from './screens/Chat';
import ActiveUsers from './screens/ActiveUsers';

export default function App() {

  const Stack = createStackNavigator();
  return (
    
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={Login} /> 
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="Chat" 
        component={Chat} 
        options={({ route }) => ({
        title:route.params.userdata.username +" is chatting in " + route.params.userdata.language
  })}/>
        <Stack.Screen name="ActiveUsers" component={ActiveUsers}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

