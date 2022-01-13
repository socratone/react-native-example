import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  ScrollView,
  FlatList,
  Modal,
} from 'react-native';
import TouchableOpacityButton from './components/TouchableOpacityButton';
import TouchableHighlightButton from './components/TouchableHighlightButton';
import { useState } from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';

// const Stack = createStackNavigator();

export default function App() {
  return (
    // <NavigationContainer>
    //   <Stack.Navigator>
    //     <Stack.Screen name="Home" component={MyScreen} />
    //   </Stack.Navigator>
    // </NavigationContainer>
    // <MyScreen />
    <MyScreen />
  );
}

const MyScreen = (props: any) => {
  const [modal, setModal] = useState(false);

  const handlePress = () => {
    props.navigation.navigate('Shop');
  };

  return (
    <View style={styles.container}>
      <View>
        <Text style={{ color: 'dodgerblue' }}>Inline Style</Text>
      </View>

      <View>
        <TextInput placeholder="이름" />
      </View>

      <ScrollView style={{ height: 80 }}>
        <Text>적은 수의 Item 1</Text>
        <Text>적은 수의 Item 2</Text>
        <Text>적은 수의 Item 3</Text>
        <Text>적은 수의 Item 4</Text>
        <Text>적은 수의 Item 5</Text>
        <Text>적은 수의 Item 6</Text>
      </ScrollView>

      {/* ScrollView는 모든 것을 렌더링 하기 때문에 긴리스트 인 경우에는 FlatList를 사용해야 한다. */}
      <FlatList
        keyExtractor={(item) => item}
        data={[
          '많은 수의 Item 1',
          '많은 수의 Item 2',
          '많은 수의 Item 3',
          '많은 수의 Item 4',
          '많은 수의 Item 5',
          '많은 수의 Item 6',
        ]}
        renderItem={(itemData) => (
          <View>
            <Text>{itemData.item}</Text>
          </View>
        )}
        style={{ height: 80 }}
      />

      <View>
        <TouchableOpacityButton title="TouchableOpacity" onPress={() => {}} />
        <TouchableHighlightButton
          title="TouchableHighlight"
          onPress={() => {}}
        />
      </View>

      <View>
        <Button title="Open" onPress={() => setModal(true)} />
      </View>

      <Modal visible={modal} animationType="slide">
        <View style={styles.modalContainer}>
          <Button title="Close" onPress={() => setModal(false)} />
        </View>
      </Modal>

      <View>
        <Button title="이동" onPress={handlePress} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    padding: 20,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
