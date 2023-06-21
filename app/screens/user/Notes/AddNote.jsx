import { useEffect, useState } from "react";
import {
  NativeBaseProvider,
  ScrollView,
  Box,
  Center,
  Input,
  Button,
  Divider,
  Text,
} from "native-base";
import { io } from "socket.io-client";
import axios from "axios";
import { Card, ColorPicker } from "react-native-ui-lib";
import { SERVER, createNote } from "../../../services/apis";
import { useDispatch, useSelector } from "react-redux";

const AddNote = ({ navigation }) => {
  const user = useSelector((state) => state?.user);
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState([""]);
  const socket = io(SERVER);
  const [color, setColor] = useState("#00000f");

  useEffect(() => {
    // Clean up the WebSocket connection
    return () => {
      socket.disconnect();
    };
  }, []);

  const handleAddNote = async () => {
    try {
      const result = await createNote(user?.id, color, title, desc);
      if (result) socket.emit("notes-user-update", { userId: user?.id });
      navigation.goBack(null);
    } catch (error) {
      console.error("Error adding note:", error);
    }
  };

  const onColorPickerDismiss = () => {
    // Handle color picker dismiss event
  };

  const onColorPickerSubmit = (selectedColor) => {
    // Handle color picker submit event
    setColor(selectedColor);
  };

  const onColorPickerValueChange = (selectedColor) => {
    // Handle color picker value change event
    setColor(selectedColor);
  };
  const handleRemoveItem = (index) => {
    const updatedDesc = [...desc];
    updatedDesc.splice(index, 1);
    setDesc(updatedDesc);
  };

  return (
    <NativeBaseProvider>
      <ScrollView>
        <Center px="3" padding="10" mt="10">
          <Text>Add Note</Text>
          <Box my="5">
            <ColorPicker
              initialColor={color}
              colors={["#00000f", "#00aff0", "#c0c0c0"]}
              onDismiss={onColorPickerDismiss}
              onSubmit={onColorPickerSubmit}
              onValueChange={onColorPickerValueChange}
              value={color}
              backgroundColor="#ffffff"
            />
          </Box>
          <Card backgroundColor={color}>
            <Box w="100%" p="6">
              <Input
                mx="3"
                placeholder="Title"
                value={title}
                onChangeText={setTitle}
                w="80%"
              />
            </Box>
            <Divider />
            <Box w="100%" p="6">
              {desc.map((item, index) => (
                <Box
                  key={index}
                  w="100%"
                  flexDirection="row"
                  alignItems="center"
                  justifyContent="space-between"
                >
                  <Input
                    flex={1}
                    placeholder={`Item ${index + 1}`}
                    value={item}
                    onChangeText={(text) => {
                      const updatedDesc = [...desc];
                      updatedDesc[index] = text;
                      setDesc(updatedDesc);
                    }}
                  />
                  <Button
                    size="sm"
                    variant="ghost"
                    onPress={() => handleRemoveItem(index)}
                  >
                    ➖
                  </Button>
                </Box>
              ))}
              <Button mx="20" my="1" onPress={() => setDesc([...desc, ""])}>
                +
              </Button>
            </Box>
          </Card>
          <Button onPress={handleAddNote}>Add Note</Button>
        </Center>
      </ScrollView>
    </NativeBaseProvider>
  );
};

export default AddNote;
