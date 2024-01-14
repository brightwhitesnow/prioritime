import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { NavigationContainer } from "@react-navigation/native";
import MainDrawer from "./navigators/MainDrawer"

export default function App() {
  return (
    <NavigationContainer>
      <MainDrawer />
    </NavigationContainer>
  );
}

