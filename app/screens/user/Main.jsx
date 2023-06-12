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

const MainScreen = () => {
  return (
    <NativeBaseProvider>
      <Center px="3" padding={"10"} mt={"10"}>
        <Text>Main Screen</Text>
      </Center>
    </NativeBaseProvider>
  );
};
export default MainScreen;
