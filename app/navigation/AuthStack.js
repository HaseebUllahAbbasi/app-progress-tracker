import React from "react";

import OnBoardScreen from "../screens/onboard/splash/OnBoardScreen";
import Login from "../screens/onboard/Auth/Login";
import SignUp from "../screens/onboard/Auth/SignUp";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MainScreen from "../screens/user/Main";
import Todo from "../screens/user/Todo/Todo";

import DayCalender from "../screens/user/Houly/DayCalender";
import AddHourly from "../screens/user/Houly/AddHourly";
import Hourly from "../screens/user/Houly/Hourly";
import EditHourly from "../screens/user/Houly/EditHourly";
import CompletedTasks from "../screens/user/Todo/CompletedTasks";
import InCompletedTasks from "../screens/user/Todo/InCompletedTasks";
import AddNote from "../screens/user/Notes/AddNote";
import EditNote from "../screens/user/Notes/EditNote";
import CustomDrawer from "../components/CustomDrawer";
import { MainDrawer } from "../components/MyDrawer";
import Notes from "../screens/user/Notes/Notes";
// import CompletedTasks from "../screens/user/Todo/AddTodo";
// import AppStack from "./AppStack";
// import StudentStack from "./StudentStack";
// import ForgotPassword from "../screens/ForgotPassword";

const Stack = createNativeStackNavigator();

const AuthStack = (props) => {
  return (
    <Stack.Navigator
      initialRouteName="Onboarding"
      screenOptions={{ headerShown: false }}
      drawerContent={(props) => <CustomDrawer {...props} />}
      useLegacyImplementation={true}
    >
      <Stack.Screen name="Onboarding" component={OnBoardScreen} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Register" component={SignUp} />
      <Stack.Screen name="Home" component={MainDrawer} />

      {/* <Stack.Screen name="TeacherHome" component={AppStack} /> */}
      {/* <Stack.Screen name="StudentHome" component={StudentStack} /> */}
    </Stack.Navigator>
  );
};
export default AuthStack;

export const MainHomeStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="main"
      drawerContent={(props) => <CustomDrawer {...props} />}
      useLegacyImplementation={true}
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="main" component={MainScreen} />
      <Stack.Screen name="hourly-stack" component={DayCalender} />
      <Stack.Screen name="notes-stack" component={Hourly} />
      <Stack.Screen name="todo-stack" component={EditHourly} />
    </Stack.Navigator>
  );
};

export const HourlyStack = (props) => {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName="calender"
    >
      <Stack.Screen name="calender" component={DayCalender} />
      <Stack.Screen name="day-update" component={Hourly} />
      <Stack.Screen name="edit-update" component={EditHourly} />
      <Stack.Screen name="add-new-update" component={AddHourly} />
    </Stack.Navigator>
  );
};

export const NotesStack = (props) => {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName="notes"
    >
      <Stack.Screen name="notes" component={Notes} />
      <Stack.Screen name="addNote" component={AddNote} />
      <Stack.Screen name="editNote" component={EditNote} />
    </Stack.Navigator>
  );
};

export const TodoStack = (props) => {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName="TodoList"
    >
      <Stack.Screen name="TodoList" component={Todo} />
      <Stack.Screen name="completed" component={CompletedTasks} />
      <Stack.Screen name="inCompleted" component={InCompletedTasks} />
    </Stack.Navigator>
  );
};
