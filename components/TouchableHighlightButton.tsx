import { View, Text, StyleSheet, TouchableHighlight } from 'react-native';

type TouchableHighlightButtonProps = {
  title: string;
  onPress: () => void;
};

const TouchableHighlightButton = ({
  title,
  onPress,
}: TouchableHighlightButtonProps) => {
  return (
    <TouchableHighlight
      activeOpacity={0.8}
      underlayColor="gold"
      onPress={onPress}
      style={styles.container}
    >
      <View style={styles.button}>
        <Text style={styles.text}>{title}</Text>
      </View>
    </TouchableHighlight>
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

export default TouchableHighlightButton;
