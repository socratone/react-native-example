import { StyleSheet, View, Text, Platform } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { StackParamList } from '../App';

type Props = NativeStackScreenProps<StackParamList, 'Size'>;

const FontSize = (props: Props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>android = ios - 1</Text>
      <View style={styles.textContainer}>
        <Text
          style={{
            fontSize: Platform.OS === 'android' ? 10 : 9,
            ...styles.text,
          }}
        >
          안녕하세요 반가워요
        </Text>
        <Text
          style={{
            fontSize: Platform.OS === 'android' ? 11 : 10,
            ...styles.text,
          }}
        >
          안녕하세요 반가워요
        </Text>
        <Text
          style={{
            fontSize: Platform.OS === 'android' ? 12 : 11,
            ...styles.text,
          }}
        >
          안녕하세요 반가워요
        </Text>
        <Text
          style={{
            fontSize: Platform.OS === 'android' ? 13 : 12,
            ...styles.text,
          }}
        >
          안녕하세요 반가워요
        </Text>
        <Text
          style={{
            fontSize: Platform.OS === 'android' ? 14 : 13,
            ...styles.text,
          }}
        >
          안녕하세요 반가워요
        </Text>
        <Text
          style={{
            fontSize: Platform.OS === 'android' ? 15 : 14,
            ...styles.text,
          }}
        >
          안녕하세요 반가워요
        </Text>
        <Text
          style={{
            fontSize: Platform.OS === 'android' ? 16 : 15,
            ...styles.text,
          }}
        >
          안녕하세요 반가워요
        </Text>
        <Text
          style={{
            fontSize: Platform.OS === 'android' ? 17 : 16,
            ...styles.text,
          }}
        >
          안녕하세요 반가워요
        </Text>
        <Text
          style={{
            fontSize: Platform.OS === 'android' ? 18 : 17,
            ...styles.text,
          }}
        >
          안녕하세요 반가워요
        </Text>
      </View>

      <Text style={styles.title}>android = ios</Text>
      <View style={styles.textContainer}>
        <Text
          style={{
            fontSize: 10,
          }}
        >
          안녕하세요 반가워요
        </Text>
        <Text
          style={{
            fontSize: 11,
          }}
        >
          안녕하세요 반가워요
        </Text>
        <Text
          style={{
            fontSize: 12,
          }}
        >
          안녕하세요 반가워요
        </Text>
        <Text
          style={{
            fontSize: 13,
          }}
        >
          안녕하세요 반가워요
        </Text>
        <Text
          style={{
            fontSize: 14,
          }}
        >
          안녕하세요 반가워요
        </Text>
        <Text
          style={{
            fontSize: 15,
          }}
        >
          안녕하세요 반가워요
        </Text>
        <Text
          style={{
            fontSize: 16,
          }}
        >
          안녕하세요 반가워요
        </Text>
        <Text
          style={{
            fontSize: 17,
          }}
        >
          안녕하세요 반가워요
        </Text>
        <Text
          style={{
            fontSize: 18,
          }}
        >
          안녕하세요 반가워요
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  title: {
    textAlign: 'center',
  },
  textContainer: {
    padding: 20,
    backgroundColor: 'gold',
    height: 200,
    margin: 20,
  },
  text: {
    includeFontPadding: false,
    textAlignVertical: 'center',
  },
});

export default FontSize;
