import { StyleSheet, View, Button } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { StackParamList } from '../App';
import colors from '../constants/colors';

type Props = NativeStackScreenProps<StackParamList, 'Home'>;

const Home = (props: Props) => {
  return (
    <View style={styles.container}>
      <Button
        title="Other"
        onPress={() => props.navigation.navigate('Other')}
        color={colors.primary}
      />
      <Button
        title="Shadow"
        onPress={() => props.navigation.navigate('Shadow')}
        color={colors.secondary}
      />
      <Button
        title="Blur"
        onPress={() => props.navigation.navigate('Blur')}
        color={colors.secondary}
      />
      <Button
        title="AlertPopup"
        onPress={() => props.navigation.navigate('AlertPopup')}
        color={colors.secondary}
      />
      <Button
        title="Font"
        onPress={() => props.navigation.navigate('Font')}
        color={colors.secondary}
      />
      <Button
        title="ImageScreen"
        onPress={() => props.navigation.navigate('ImageScreen')}
        color={colors.secondary}
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
