import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  ScrollView,
  FlatList,
  Modal,
} from 'react-native';
import TouchableOpacityButton from '../components/TouchableOpacityButton';
import TouchableHighlightButton from '../components/TouchableHighlightButton';
import { useState } from 'react';
import { StackParamList } from '../App';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

type Props = NativeStackScreenProps<StackParamList, 'Other'>;

const Other = (props: Props) => {
  const [modal, setModal] = useState(false);

  return (
    <View style={styles.container}>
      <View>
        <Text style={{ color: 'dodgerblue' }}>Inline Style</Text>
      </View>

      <View>
        <TextInput placeholder="이름" />
      </View>

      <ScrollView style={{ height: 80 }}>
        <Text>적은 수의 Item 1</Text>
        <Text>적은 수의 Item 2</Text>
        <Text>적은 수의 Item 3</Text>
        <Text>적은 수의 Item 4</Text>
        <Text>적은 수의 Item 5</Text>
        <Text>적은 수의 Item 6</Text>
      </ScrollView>

      {/* ScrollView는 모든 것을 렌더링 하기 때문에 긴리스트 인 경우에는 FlatList를 사용해야 한다. */}
      <FlatList
        keyExtractor={(item) => item}
        data={[
          '많은 수의 Item 1',
          '많은 수의 Item 2',
          '많은 수의 Item 3',
          '많은 수의 Item 4',
          '많은 수의 Item 5',
          '많은 수의 Item 6',
        ]}
        renderItem={(itemData) => (
          <View>
            <Text>{itemData.item}</Text>
          </View>
        )}
        style={{ height: 80 }}
      />

      <View>
        <TouchableOpacityButton title="TouchableOpacity" onPress={() => {}} />
        <TouchableHighlightButton
          title="TouchableHighlight"
          onPress={() => {}}
        />
      </View>

      <View>
        <Button title="모달 열기" onPress={() => setModal(true)} />
      </View>

      <Modal visible={modal} animationType="slide">
        <View style={styles.modalContainer}>
          <Button title="모달 닫기" onPress={() => setModal(false)} />
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    padding: 20,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Other;
