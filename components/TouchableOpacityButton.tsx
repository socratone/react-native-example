import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

type TouchableOpacityButtonProps = {
  title: string;
  onPress: () => void;
};

const TouchableOpacityButton = ({
  title,
  onPress,
}: TouchableOpacityButtonProps) => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={onPress}
      style={styles.container}
    >
      <View style={styles.button}>
        <Text style={styles.text}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 200,
  },
  button: {
    backgroundColor: 'tomato',
    height: 30,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
  text: {
    color: 'white',
  },
});

export default TouchableOpacityButton;
