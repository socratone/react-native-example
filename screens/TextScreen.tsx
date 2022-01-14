import { StyleSheet, View, Text } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { StackParamList } from '../App';

type Props = NativeStackScreenProps<StackParamList, 'TextScreen'>;

const TextScreen = (props: Props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.ellipsis} numberOfLines={3}>
        ellipsis ellipsis <Text style={styles.red}>ellipsis</Text> ellipsis
        ellipsis ellipsis ellipsis ellipsis ellipsis ellipsis ellipsis ellipsis
        ellipsis ellipsis ellipsis ellipsis
      </Text>
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
  ellipsis: {
    fontSize: 30,
  },
  red: {
    color: 'red',
  },
});

export default TextScreen;
