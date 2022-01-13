import {
  StyleSheet,
  View,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { StackParamList } from '../App';

type Props = NativeStackScreenProps<StackParamList, 'Blur'>;

/**
 * keyboard blur일 때 닫는 방법
 */
const Blur = (props: Props) => {
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          maxLength={5}
          keyboardType="number-pad"
        />
      </View>
    </TouchableWithoutFeedback>
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
  input: {
    borderColor: 'grey',
    borderWidth: 1,
    width: 200,
    height: 50,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
});

export default Blur;
