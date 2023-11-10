import {createStackNavigator} from '@react-navigation/stack';

import Login from '../pages/Login';

const Stack = createStackNavigator();

export default function Rotas() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Login"
        component={Login}
        options={{ headerShown:false, title:"Login"}}/>
    </Stack.Navigator>
  );
}
