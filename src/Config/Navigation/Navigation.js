import {
  GettingStart,
  Register,
  Home,
  Result,
  QuizEnd,
  Splash,
} from '../../Screens';

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import {createStackNavigator} from '@react-navigation/stack';
import ChoosNumberOfQuestions from "../../Screens/ChoosNumberOfQuestions/ChoosNumberOfQuestions";
const Stack = createStackNavigator();

export default () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          component={Splash}
          name="splash"
          options={{
            headerShown: false,
          }}
        />

        <Stack.Screen
          component={GettingStart}
          name="start"
          options={{
            headerShown: false,
          }}
        />

        <Stack.Screen
          component={Result}
          name="result"
          options={{
            headerShown: false,
          }}
        />

        <Stack.Screen
          component={Register}
          name="register"
          options={{
            headerShown: false,
          }}
        />

          <Stack.Screen
          component={ChoosNumberOfQuestions}
          name="ChoosNumberOfQuestions"
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          component={Home}
          name="home"
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          component={QuizEnd}
          name="quizend"
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
