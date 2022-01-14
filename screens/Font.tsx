import { StyleSheet, View, Text } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { StackParamList } from '../App';

type Props = NativeStackScreenProps<StackParamList, 'Font'>;

const Font = (props: Props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.defaultFont}>기본 글자</Text>
      <Text style={styles.customFont}>커스텀 글자</Text>
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
  defaultFont: {
    fontSize: 30,
    // includeFontPadding: false,
    // textAlignVertical: 'center',
  },
  customFont: {
    fontFamily: 'NotoSerifKR-Medium',
    fontSize: 30,
    // includeFontPadding: false,
    // textAlignVertical: 'center',
  },
});

export default Font;
