import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen } from './screens/HomeScreen';
import { CategoriesScreen } from './screens/CategoriesScreen';

function DetailsScreen({ navigation }) {
  return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Details Screen</Text>
        <Button
            title="Go to Details... again"
            onPress={() => navigation.push('Details')}
        />
        <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
        <Button title="Go back" onPress={() => navigation.goBack()} />
        <Button
            title="Go back to first screen in stack"
            onPress={() => navigation.popToTop()}
        />
      </View>
  );
}

const Stack = createStackNavigator();

function App() {
  return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={HomeScreen}  />
          <Stack.Screen name="Categories" component={CategoriesScreen} />
        </Stack.Navigator>
      </NavigationContainer>
  );
}

export default App;
