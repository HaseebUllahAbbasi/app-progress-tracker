import React from "react";

import OnBoardScreen from "../screens/onboard/splash/OnBoardScreen";
import Login from "../screens/onboard/Auth/Login";
import SignUp from "../screens/onboard/Auth/SignUp";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
// import AppStack from "./AppStack";
// import StudentStack from "./StudentStack";
// import ForgotPassword from "../screens/ForgotPassword";

const Stack = createNativeStackNavigator();

const AuthStack = (props) => {
  return (
    <Stack.Navigator
      initialRouteName="Onboarding"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="Onboarding" component={OnBoardScreen} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Register" component={SignUp} />

      {/* <Stack.Screen name="ForgotPassword" component={ForgotPassword} /> */}

      {/* <Stack.Screen name="TeacherHome" component={AppStack} /> */}
      {/* <Stack.Screen name="StudentHome" component={StudentStack} /> */}
    </Stack.Navigator>
  );
};

export default AuthStack;
