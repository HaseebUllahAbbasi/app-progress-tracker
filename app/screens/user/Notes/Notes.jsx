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
  Card,
} from "native-base";
import { ColorPicker } from "react-native-ui-lib";
import { useState } from "react";
import { ScrollView } from "react-native-gesture-handler";
import { io } from "socket.io-client";
import { useEffect } from "react";
import { SERVER, deleteNote, getNotesByUser } from "../../../services/apis";
import { useSelector } from "react-redux";
import Ionicons from "react-native-vector-icons/Ionicons";

const Notes = ({ navigation, route }) => {
  const user = useSelector((state) => state?.user);

  const [title, setTitle] = useState("");

  const [desc, setDesc] = useState([]);
  const [color, setColor] = useState("#fffffa");

  function changeValue(value, index) {
    const updatedDesc = [...desc];
    updatedDesc[index] = value;
    setDesc(updatedDesc);
  }

  const [data, setData] = useState([
    {
      _id: "112",
      user: "user1",
      heading: "Todo List 1",
      items: ["Item 1", "Item 2", "Item 3"],
      color: "#fa00af",
      createdAt: new Date(),
    },
  ]);
  const socket = io(SERVER);
  const fetchNotesByUser = async () => {
    if (user) {
      setData(await getNotesByUser(user?.id));
    }
  };
  useEffect(() => {
    if (user?.id) fetchNotesByUser();
    // Clean up the WebSocket connection
    socket.on("get-notes-user", (updatedData) => {
      setData(updatedData);
    });
    return () => {
      socket.disconnect();
    };
  }, []);

  return (
    <NativeBaseProvider>
      <Center px="3" padding={"10"} mt={"10"}>
        <Text>Notes Screen</Text>
        <Button
          onPress={() => {
            navigation.navigate("addNote");
          }}
        >
          Add Note
        </Button>
        <ScrollView>
          {data.map((item, index) => (
            <Card
              key={index}
              width={"350"}
              backgroundColor={item.color}
              my={"2"}
              mx={"1"}
            >
              <Box alignItems={"flex-end"}>
                <Box flexDirection={"row"}>
                  <Ionicons
                    onPress={() => {
                      navigation.navigate("editNote", {
                        noteId: item._id,
                        items: item.items,
                        color: item.color,
                        userId: item.user,
                        heading: item.heading,
                      });
                    }}
                    name="create-outline"
                    size={22}
                  />
                  <Ionicons
                    name="trash-outline"
                    onPress={async () => {
                      const result = await deleteNote(item._id);
                      if (result)
                        socket.emit("notes-user-update", { userId: user?.id });
                    }}
                    size={22}
                  />
                </Box>
              </Box>
              <Text textAlign={"center"}>{item.heading}</Text>
              <Box mx={"3"}>
                {item.items.map((subItem, subIndex) => (
                  <Text key={subIndex}> - {subItem}</Text>
                ))}
              </Box>
            </Card>
          ))}
        </ScrollView>
      </Center>
    </NativeBaseProvider>
  );
};
export default Notes;
