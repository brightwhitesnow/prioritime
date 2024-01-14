import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import 'react-native-gesture-handler';

function TaskAdd() {

  showAlert = () => {
    alert("hi!")
  }

  return (
    <View style={styles.container}>
      <Text>Task Add</Text>
      <Icon name="navicon" size={40} color="black" onPress={this.showAlert} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default TaskAdd;