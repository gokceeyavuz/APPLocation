import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  AppMor1,
  AppMor2,
  Travel1,
  Travel2,
  Travel3,
  TuruncuBisiklet,
  TuruncuBisiklet2,
  appMor1,
  appMor2,
} from '../Screens';
import {RoutesName} from '../config';
import ButtomTabRoutes from './ButtomTabRoutes';
import ButtommTabRoutess from './ButtommTabRoutess';
import buttomTabRoutesAppMor from './buttomTabRoutesAppMor';

const Stack = createNativeStackNavigator();

const StackRoutes = () => {
  return (
    <Stack.Navigator initialRouteName={RoutesName.APPMOR1}>
      <Stack.Screen
        name={RoutesName.TURUNCUBİSİKLET2}
        component={TuruncuBisiklet2}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={RoutesName.TURUNCUBİSİKLET}
        component={TuruncuBisiklet}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Bisiklet"
        component={ButtomTabRoutes}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="buttomTabBisiklet"
        component={ButtommTabRoutess}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="seyahat"
        component={ButtomTabRoutes}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={RoutesName.TRAVEL1}
        component={Travel1}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="buttomTabLocation"
        component={buttomTabRoutesAppMor}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={RoutesName.APPMOR1}
        component={AppMor1}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};
export default StackRoutes;
