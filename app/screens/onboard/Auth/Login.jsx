import { StyleSheet, Alert, ActivityIndicator } from "react-native";
import {
  Input,
  Radio,
  Box,
  Text,
  Center,
  NativeBaseProvider,
  Stack,
  Button,
} from "native-base";
import * as Notifications from "expo-notifications";

import { useEffect, useState } from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useDispatch } from "react-redux";
import { LoginUser } from "../../../store/UserActions";
import CustomTheme from "../../../constants/theme";
import { login, testServer } from "../../../services/apis";

const Login = ({ navigation }) => {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const [value, setValue] = useState("Teacher");
  const [password, setPassword] = useState("");
  const [userName, setuserName] = useState("");
  const [email, setEmail] = useState("");

  return (
    <NativeBaseProvider>
      <Center px="3" padding={"10"} mt={"10"}>
        <Text pt={"20"} style={{ fontSize: 50 }}>
          Login Screen{" "}
        </Text>
        <Text> Open Account, Enjoy Learning </Text>

        <Center px={"10"}>
          <Box alignItems="center" pt={"10"}>
            <Input
              mx="3"
              placeholder="username"
              value={userName}
              onChangeText={setuserName}
              w="100%"
            />
          </Box>
          <Box alignItems="center" pt={"10"}>
            <Input
              mx="3"
              placeholder="Password"
              value={password}
              onChangeText={setPassword}
              w="100%"
              type="password"
            />
          </Box>
        </Center>

        <Button
          mt={"10"}
          px={"20"}
          py={"15"}
          style={{ color: CustomTheme.buttonText }}
          borderRadius={"lg"}
          onPress={async () => {
            const data = await login(userName, password);
            if (data) {
              console.log(data);
              dispatch(
                LoginUser(data._id, data.email, data.username, data?.token)
              );
              navigation.navigate("Home");
            }
          }}
        >
          Login
        </Button>

        <Stack
          direction={{
            base: "row",
            md: "row",
          }}
          justifyContent={"space-around"}
          space={20}
          w="100%"
          mt={"15"}
        >
          <TouchableOpacity
            onPress={() => {
              alert("Sign Up");
            }}
          >
            <Text
              underline={true}
              onPress={() => {
                navigation.navigate("ForgotPassword");
              }}
            >
              Forgot password
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              alert("forgot password");
            }}
          >
            <Text
              underline={true}
              onPress={() => {
                navigation.push("Register");

                // Alert.alert("Create Account 😃", `Please Select Account Type`, [
                //   {
                //     text: "Student 👨‍🎓",
                //     style: "destructive",
                //     onPress: () => {
                //       alert("Create Student Account");
                //     },
                //   },
                //   {
                //     text: "Teacher 👨‍🏫",

                //     style: "destructive",
                //     onPress: () => {
                //       alert("Create Teacher Account");
                //     },
                //   },
                // ]); // navigation.navigate("");
              }}
              label="Sign Up"
            >
              Sign Up
            </Text>
          </TouchableOpacity>
        </Stack>
        {loading && <ActivityIndicator size="large" />}
      </Center>
    </NativeBaseProvider>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  heading: {},
  begin: {},
});
