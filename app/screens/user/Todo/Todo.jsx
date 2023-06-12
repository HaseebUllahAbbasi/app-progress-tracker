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

const Todo = () => {
  return (
    <NativeBaseProvider>
      <Center px="3" padding={"10"} mt={"10"}>
        <Text>Todo Screen</Text>
      </Center>
    </NativeBaseProvider>
  );
};
export default Todo;
