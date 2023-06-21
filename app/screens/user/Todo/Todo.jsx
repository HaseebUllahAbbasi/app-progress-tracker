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
  Checkbox,
  Switch,
} from "native-base";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { SERVER } from "../../../services/apis";
import axios from "axios";
import { io } from "socket.io-client";
import { ScrollView } from "react-native-gesture-handler";

const Todo = ({ navigation, route }) => {
  const socket = io(SERVER);
  const user = useSelector((state) => state?.user);
  const [newTodo, setNewTodo] = useState("");
  const [todoUpdates, setTodoUpdates] = useState([
    {
      __v: 0,
      _id: "6489c2b0fa15a3a235e51507",
      completed: true,
      createdAt: "2023-06-14T13:37:52.836Z",
      title: "new task",
      user: "6480727dc8c877fb02d2f559",
    },
    {
      __v: 0,
      _id: "6489c4b9b00be36b3c4f7132",
      completed: false,
      createdAt: "2023-06-14T13:46:33.314Z",
      title: "this is another task",
      user: "6480727dc8c877fb02d2f559",
    },
  ]);

  const fetchTodoUpdates = async () => {
    try {
      if (user) {
        const response = await axios.get(SERVER + "/api/todo/" + user?.id);
        setTodoUpdates(response.data);
      } else alert("User is not present");
    } catch (error) {
      console.error("Error fetching hourly updates:", error);
    }
  };

  useEffect(() => {
    fetchTodoUpdates();
    socket.on("get-todo-user", (updatedData) => {
      setTodoUpdates(updatedData);
    });
    // Clean up the WebSocket connection
    return () => {
      socket.disconnect();
    };
  }, []);
  const [isChecked, setIsChecked] = useState(false);

  const handleAddUpdate = async () => {
    try {
      const response = await axios.post(SERVER + "/api/todo", {
        title: newTodo,
        user: user?.id,
      });

      socket.emit("todo-data-update", { userId: user?.id });
    } catch (error) {
      console.error("Error adding hourly update:", error);
    }
  };
  const handleSwitchChange = (value) => {
    setIsChecked(value);
    // Perform any additional logic or actions based on the new value
  };
  const handleToggleComplete = async (id, status) => {
    const response = await axios.put(SERVER + "/api/todo/" + id, {
      status: !status,
    });
    socket.emit("todo-data-update", { userId: user?.id });
  };

  return (
    <NativeBaseProvider>
      <Center px="3" padding={"10"} mt={"10"}>
        <Text>Todo Screen</Text>
        <Box flexDirection={"row"} w="100%" py="6">
          <Input
            mx="3"
            placeholder="Title"
            value={newTodo}
            onChangeText={setNewTodo}
            w="80%"
          />
          <Button onPress={handleAddUpdate}>Add</Button>
        </Box>
        <Box flexDirection={"row"} textAlign={"center"} alignItems={"center"}>
          <Text mr={2} color={`${!isChecked ? "teal.400" : "white"}`}>
            Incomplete{" "}
          </Text>
          <Switch
            isChecked={isChecked}
            onToggle={handleSwitchChange}
            colorScheme="primary"
          />
          <Text ml={2} color={`${isChecked ? "teal.400" : "white"}`}>
            Completed
          </Text>
        </Box>
        <ScrollView>
          {isChecked !== true
            ? todoUpdates.map((item, index) => (
                <Card
                  key={index}
                  width={"350"}
                  backgroundColor={item.color}
                  my={"2"}
                  mx={"1"}
                >
                  <Checkbox.Group>
                    <Checkbox
                      isChecked={isChecked}
                      my={2}
                      onChange={() => {}}
                      value={item.title}
                    >
                      {item.title}
                    </Checkbox>
                  </Checkbox.Group>
                  {/* <Text>{item.title}</Text> */}
                </Card>
              ))
            : todoUpdates
                .filter((todo) => !todo.completed)
                .map((item, index) => (
                  <Card
                    key={index}
                    width={"350"}
                    backgroundColor={item.color}
                    my={"2"}
                    mx={"1"}
                  >
                    <Checkbox.Group
                      onChange={() => {
                        console.log("change");
                      }}
                    >
                      <Checkbox my={2}>{item.title}</Checkbox>
                    </Checkbox.Group>
                    {/* <Text>{item.title}</Text> */}
                  </Card>
                ))}
        </ScrollView>
      </Center>
    </NativeBaseProvider>
  );
};
export default Todo;
