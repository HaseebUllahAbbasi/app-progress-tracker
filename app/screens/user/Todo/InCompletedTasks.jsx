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

const InCompletedTasks = () => {
  return (
    <NativeBaseProvider>
      <Center px="3" padding={"10"} mt={"10"}>
        <Text>InCompletedTasks Screen</Text>
      </Center>
    </NativeBaseProvider>
  );
};
export default InCompletedTasks;
