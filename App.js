// App.js

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './components/LoginScreen';
import ForgotPasswordScreen from './components/ForgotPasswordScreen';
import SignUpScreen from './components/SignUpScreen';
import HomeScreen from './components/HomeScreen'; // Importa a HomeScreen
import Toast from 'react-native-toast-message'; // Importa o Toast

const Stack = createStackNavigator();

const App = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Login">
                <Stack.Screen name="Login" component={LoginScreen} />
                <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
                <Stack.Screen name="SignUp" component={SignUpScreen} />
                <Stack.Screen name="Home" component={HomeScreen} /> {/* Adiciona a HomeScreen */}
            </Stack.Navigator>
            <Toast ref={(ref) => Toast.setRef(ref)} />
        </NavigationContainer>
    );
};

export default App;