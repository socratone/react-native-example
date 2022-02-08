import { StyleSheet, View, Text } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { StackParamList } from '../App';

type Props = NativeStackScreenProps<StackParamList, 'Size'>;

const Size = (props: Props) => {
  return (
    <View style={styles.container}>
      <View style={styles.boxContainer}>
        <View style={styles.box2}>
          <View style={styles.box3}>
            <View style={styles.box4}>
              <View style={styles.box5}>
                <View style={styles.box6}>
                  <View style={styles.box7}>
                    <View style={styles.box8}></View>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.text1}>안녕하세요 반가워요</Text>
        <Text style={styles.text2}>안녕하세요 반가워요</Text>
        <Text style={styles.text3}>안녕하세요 반가워요</Text>
        <Text style={styles.text4}>안녕하세요 반가워요</Text>
        <Text style={styles.text5}>안녕하세요 반가워요</Text>
        <Text style={styles.text6}>안녕하세요 반가워요</Text>
        <Text style={styles.text7}>안녕하세요 반가워요</Text>
        <Text style={styles.text8}>안녕하세요 반가워요</Text>
        <Text style={styles.text9}>안녕하세요 반가워요</Text>
        <Text style={styles.text10}>안녕하세요 반가워요</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'grey',
  },
  boxContainer: {
    padding: 20,
    backgroundColor: 'white',
    flex: 1,
  },
  box2: {
    padding: 40,
    backgroundColor: 'dodgerblue',
    flex: 1,
  },
  box3: {
    padding: 10,
    backgroundColor: 'gold',
    flex: 1,
  },
  box4: {
    padding: 8,
    backgroundColor: 'tomato',
    flex: 1,
  },
  box5: {
    padding: 4,
    backgroundColor: 'green',
    flex: 1,
  },
  box6: {
    padding: 2,
    backgroundColor: 'white',
    flex: 1,
  },
  box7: {
    padding: 1,
    backgroundColor: 'black',
    flex: 1,
  },
  box8: {
    backgroundColor: 'white',
    flex: 1,
  },
  textContainer: {
    padding: 20,
    backgroundColor: 'white',
    flex: 1,
    margin: 20,
  },
  text1: {
    fontSize: 10,
    includeFontPadding: false,
    textAlignVertical: 'center',
  },
  text2: {
    fontSize: 11,
    includeFontPadding: false,
    textAlignVertical: 'center',
  },
  text3: {
    fontSize: 12,
    includeFontPadding: false,
    textAlignVertical: 'center',
  },
  text4: {
    fontSize: 13,
    includeFontPadding: false,
    textAlignVertical: 'center',
  },
  text5: {
    fontSize: 14,
    includeFontPadding: false,
    textAlignVertical: 'center',
  },
  text6: {
    fontSize: 15,
    includeFontPadding: false,
    textAlignVertical: 'center',
  },
  text7: {
    fontSize: 16,
    includeFontPadding: false,
    textAlignVertical: 'center',
  },
  text8: {
    fontSize: 17,
    includeFontPadding: false,
    textAlignVertical: 'center',
  },
  text9: {
    fontSize: 18,
    includeFontPadding: false,
    textAlignVertical: 'center',
  },
  text10: {
    fontSize: 19,
    includeFontPadding: false,
    textAlignVertical: 'center',
  },
});

export default Size;
