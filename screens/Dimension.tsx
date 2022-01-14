import { StyleSheet, View, Text, Dimensions } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { StackParamList } from '../App';

type Props = NativeStackScreenProps<StackParamList, 'Font'>;

const Dimension = (props: Props) => {
  return (
    <View style={styles.container}>
      <View style={styles.box}></View>
      <Text>Dimensions.get('window').width / 2</Text>
    </View>
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
  box: {
    backgroundColor: 'dodgerblue',
    width: Dimensions.get('window').width / 2,
    height: Dimensions.get('window').height / 2,
  },
});

export default Dimension;
