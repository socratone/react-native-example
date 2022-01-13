import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Blur from './screens/Blur';
import Home from './screens/Home';
import Other from './screens/Other';
import Shadow from './screens/Shadow';

export type StackParamList = {
  Home: undefined;
  Other: undefined;
  Shadow: undefined;
  Blur: undefined;
};

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Other" component={Other} />
        <Stack.Screen name="Shadow" component={Shadow} />
        <Stack.Screen name="Blur" component={Blur} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
