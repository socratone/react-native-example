import { StyleSheet, View, Button, Alert } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { StackParamList } from '../App';

type Props = NativeStackScreenProps<StackParamList, 'Shadow'>;

const AlertPopup = (props: Props) => {
  return (
    <View style={styles.container}>
      <Button
        title="alert"
        onPress={() =>
          Alert.alert('메시지1', '메시지2', [
            { text: '확인', style: 'destructive', onPress: () => {} },
          ])
        }
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

export default AlertPopup;
