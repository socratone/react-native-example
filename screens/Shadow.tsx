import { StyleSheet, View, Button } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { StackParamList } from '../App';

type Props = NativeStackScreenProps<StackParamList, 'Shadow'>;

const Shadow = (props: Props) => {
  return (
    <View style={styles.container}>
      <View style={styles.shadow} />
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
  shadow: {
    width: 100,
    height: 100,
    backgroundColor: 'snow',
    // ios에서만 작동
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.26,
    // android에서만 작동
    elevation: 8,
  },
});

export default Shadow;
