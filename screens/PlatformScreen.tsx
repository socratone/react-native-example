import { StyleSheet, View, Text, Platform } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { StackParamList } from '../App';

type Props = NativeStackScreenProps<StackParamList, 'PlatformScreen'>;

const PlatformScreen = (props: Props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{Platform.OS}</Text>
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
  text: {
    fontSize: 40,
  },
});

export default PlatformScreen;
