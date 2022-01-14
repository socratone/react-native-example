import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';

import AlertPopup from './screens/AlertPopup';
import Blur from './screens/Blur';
import Font from './screens/Font';
import Home from './screens/Home';
import Other from './screens/Other';
import Shadow from './screens/Shadow';

export type StackParamList = {
  Home: undefined;
  Other: undefined;
  Shadow: undefined;
  Blur: undefined;
  AlertPopup: undefined;
  Font: undefined;
};

const Stack = createNativeStackNavigator();

export default function App() {
  let [fontsLoaded] = useFonts({
    'NotoSerifKR-Medium': require('./assets/fonts/NotoSerifKR-Medium.otf'),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Other" component={Other} />
        <Stack.Screen name="Shadow" component={Shadow} />
        <Stack.Screen name="Blur" component={Blur} />
        <Stack.Screen name="AlertPopup" component={AlertPopup} />
        <Stack.Screen name="Font" component={Font} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
