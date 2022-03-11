import 'react-native-gesture-handler';
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {navigationRef} from './RootNavigation';
import {NetworkManager} from '../components';

import ThemeProvider from '../Utils/theme';
import {Movie, Home} from '../views';

const MainStack = createStackNavigator();

const App = () => {
  React.useEffect(() => {}, []);

  return (
    <ThemeProvider>
      <NavigationContainer ref={navigationRef}>
        <NetworkManager />
        <MainStack.Navigator
          initialRouteName="Home"
          screenOptions={{
            headerShown: false,
            headerStyle: {elevation: 0},
            cardStyle: {backgroundColor: 'white'},
          }}>
          <MainStack.Screen name="Home" component={Home} />
          <MainStack.Screen name="Movie" component={Movie} />
        </MainStack.Navigator>
      </NavigationContainer>
    </ThemeProvider>
  );
};

export default App;
