import React from "react";

import OnBoardScreen from "../screens/onboard/splash/OnBoardScreen";
import LoginScreen from "../screens/onboard/Auth/LoginScreen";
// import RegisterScreen from "../screens/RegisterScreen";
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
      <Stack.Screen name="Login" component={LoginScreen} />
      {/* <Stack.Screen name="Register" component={RegisterScreen} /> */}

      {/* <Stack.Screen name="ForgotPassword" component={ForgotPassword} /> */}

      {/* <Stack.Screen name="TeacherHome" component={AppStack} /> */}
      {/* <Stack.Screen name="StudentHome" component={StudentStack} /> */}
    </Stack.Navigator>
  );
};

export default AuthStack;
