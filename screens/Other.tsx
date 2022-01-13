import { StyleSheet, Text, View } from 'react-native';

const Other = (props: any) => {
  return (
    <View style={styles.container}>
      <Text>Other</Text>
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

export default Other;
