import { StyleSheet, View, Button } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { StackParamList } from '../App';

type Props = NativeStackScreenProps<StackParamList, 'Home'>;

const Home = (props: Props) => {
  return (
    <View style={styles.container}>
      <Button
        title="Other"
        onPress={() => props.navigation.navigate('Other')}
      />
      <Button
        title="Shadow"
        onPress={() => props.navigation.navigate('Shadow')}
      />
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
});

export default Home;
