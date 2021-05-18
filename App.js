import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen } from './screens/HomeScreen';
import { CategoriesScreen } from './screens/CategoriesScreen';
import { CardsScreen } from './screens/CardsScreen';

const Stack = createStackNavigator();

function App() {
  return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
            <Stack.Screen name="Home" component={HomeScreen}  />
            <Stack.Screen name="Categories" component={CategoriesScreen} />
            <Stack.Screen name="Cards" component={CardsScreen} />
        </Stack.Navigator>
      </NavigationContainer>
  );
}

export default App;

