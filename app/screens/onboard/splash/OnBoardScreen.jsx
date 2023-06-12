import { StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import * as Animatable from "react-native-animatable";
import { useDispatch, useSelector } from "react-redux";

import { Image, Center, Text, View, NativeBaseProvider } from "native-base";

const OnBoardScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state);
  return (
    <View style={styles.container}>
      <View
        style={{
          marginTop: 100,
          textAlign: "center",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Animatable.View animation="wobble" iterationCount={3}>
          <View>
            <Image
              width={200}
              height={200}
              source={require(`${"../../../assets/logo.png"}`)}
              alt="Main Logo"
            />
          </View>
        </Animatable.View>
      </View>
      <View
        style={{
          height: 400,
          marginTop: 100,
          textAlign: "center",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Animatable.Text
          animation={"fadeInRight"}
          style={{
            fontWeight: "bold",
            fontSize: 30,
            padding: 30,

            color: "#20315f",
            height: 100,
          }}
        >
          Assessment Module 📑📝
        </Animatable.Text>

        <TouchableOpacity
          style={{
            backgroundColor: "#AD40AF",
            padding: 20,
            width: "90%",
            borderRadius: 10,
            marginBottom: 120,
            flexDirection: "row",
            justifyContent: "space-between",
          }}
          onPress={() => {
            navigation.navigate("Login");
          }}
        >
          <Text
            style={{
              color: "white",
              fontSize: 18,
              textAlign: "center",
              fontWeight: "bold",
              // fontFamily: "Roboto-MediumItalic",
            }}
          >
            Let's Begin
          </Text>

          <MaterialIcons name="arrow-forward-ios" size={22} color="#fff" />
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default OnBoardScreen;

const styles = StyleSheet.create({
  container: {},
  heading: {},
  begin: {},
});
