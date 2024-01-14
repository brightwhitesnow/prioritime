import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import 'react-native-gesture-handler';

function TaskDetails() {

  showAlert = () => {
    alert("hi!")
  }

  return (
    <View style={styles.container}>
      <Text>Task Detail</Text>
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

export default TaskDetails;