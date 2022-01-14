import { StyleSheet, ScrollView, View, Image, Text } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { StackParamList } from '../App';

type Props = NativeStackScreenProps<StackParamList, 'Font'>;

const ImageScreen = (props: Props) => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <Image
          fadeDuration={1000}
          source={{
            uri: 'https://cdn.pixabay.com/photo/2022/01/06/06/08/katun-river-6918707_960_720.jpg',
          }}
          style={styles.networkImage}
        />
        <Text>Network Image</Text>

        <Image source={require('../assets/images/tree.jpg')} />
        <Text>Default Image</Text>

        <Image
          source={require('../assets/images/tree.jpg')}
          style={styles.borderImage}
        />
        <Text>width: 80%</Text>

        <Image
          source={require('../assets/images/tree.jpg')}
          style={styles.borderImage}
          resizeMode="stretch"
        />
        <Text>resizeMode: stretch</Text>

        <Image
          source={require('../assets/images/tree.jpg')}
          style={styles.borderImage}
          resizeMode="contain"
        />
        <Text>resizeMode: contain</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    padding: 20,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  borderImage: {
    width: '80%',
    borderWidth: 1,
    borderColor: 'grey',
  },
  networkImage: {
    width: 300,
    height: 300,
  },
});

export default ImageScreen;
