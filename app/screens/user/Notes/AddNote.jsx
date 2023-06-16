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
import { ColorPicker, Picker } from "react-native-ui-lib";
import { useState } from "react";

const AddNote = () => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState([""]);

  const [color, setColor] = useState("#fa00af");

  const onDismiss = () => {
    // Handle dismiss event
  };

  const onSubmit = (selectedColor) => {
    // Handle color selection event
    setColor(selectedColor);
  };

  const onValueChange = (selectedColor) => {
    // Handle color change event
    setColor(selectedColor);
  };

  return (
    <NativeBaseProvider>
      <Center px="3" padding={"10"} mt={"10"}>
        <Text>AddNote</Text>
        <ColorPicker
          initialColor={color}
          colors={["#fa00af", "#00ff00", "#0000ff"]} // Replace with your custom color options
          onDismiss={this.onDismiss}
          onSubmit={this.onSubmit}
          onValueChange={this.onValueChange}
          value={color}
          // animatedIndex={0}
          backgroundColor="#ffffff" // Replace with your desired background color
        />
        <Picker
          placeholder="Select an option"
          onChange={(itemValue) => console.log("Selected value:", itemValue)}
        >
          <Picker.Item label="Option 2" value="option2" />
          <Picker.Item label="Option 3" value="option3" />
        </Picker>
      </Center>
    </NativeBaseProvider>
  );
};
export default AddNote;
