import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from "./screens/Home/Home";
import login from "./screens/Login/Login";
import Signup from "./screens/Signup/Signup";
import Welcome from "./screens/Welcome/welcome";
const Stack = createStackNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Welcome'>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="login" component={login} />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen
          name="Welcome"
          component={Welcome}
          options={{ headerShown: false }}
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
}
