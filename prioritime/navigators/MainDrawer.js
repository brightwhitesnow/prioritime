import React from "react"
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Calendar from "../screens/Calendar"
import Dashboard from "../screens/Dashboard"
import Matrix from "../screens/Matrix"
import TaskList from "../screens/TaskList"

const Drawer = createDrawerNavigator();

function MainDrawer() {
    return (
        <Drawer.Navigator useLegacyImplementation>
            <Drawer.Screen name="Dashboard" component={Dashboard} />
            <Drawer.Screen name="Calendar" component={Calendar} />
            <Drawer.Screen name="Tasks" component={TaskList} />
            <Drawer.Screen name="Eisenhower Matrix" component={Matrix} />
        </Drawer.Navigator>
    );
}