import { StyleSheet, View, Text, Dimensions } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { StackParamList } from '../App';
import { ratio } from '../styles/size';

type Props = NativeStackScreenProps<StackParamList, 'PixelRatioScreen'>;

const PixelRatioScreen = (props: Props) => {
  return (
    <View style={styles.container}>
      <Text>ratio : {ratio}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
});

export default PixelRatioScreen;
