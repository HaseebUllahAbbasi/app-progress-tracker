import React from "react";
import {
  View,
  Text,
  ImageBackground,
  Image,
  TouchableOpacity,
} from "react-native";
import {
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import { Share } from "react-native";

import Ionicons from "react-native-vector-icons/Ionicons";
// import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import { useDispatch, useSelector } from "react-redux";
// import { LogoutUser } from "../redux/action";

const CustomDrawer = (props) => {
  const dispatch = useDispatch();
  const userPic = "man.png";
  const accout = useSelector((state) => state?.user);
  const onShare = async () => {
    try {
      const result = await Share.share({
        message: `https://github.com/haseebullahabbasi`,
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          alert("shared");
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      alert(error.message);
    }
  };
  const { navigation } = props;
  return (
    <View style={{ flex: 1 }}>
      <DrawerContentScrollView
        {...props}
        contentContainerStyle={{ backgroundColor: "#8200d6" }}
      >
        <ImageBackground
          source={require("../assets/images/menu-bg.jpeg")}
          style={{ padding: 20 }}
        >
          <TouchableOpacity onPress={() => navigation.navigate("My Profile")}>
            <Image
              source={require(`../assets/images/${userPic}`)}
              style={{
                height: 80,
                width: 80,
                borderRadius: 40,
                marginBottom: 10,
              }}
            />
          </TouchableOpacity>
          <Text
            style={{
              fontWeight: "800",
              color: "#fff000",
              fontSize: 25,
              // fontFamily: "Roboto-Medium",
              marginBottom: 5,
            }}
          >
            {accout?.userName}
          </Text>
          <View style={{ flexDirection: "row" }}>
            <Text
              style={{
                color: "#fff009",

                fontWeight: "300",
                // color: "#fff",
                fontSize: 16,
                // fontFamily: "Roboto-Regular",
                marginRight: 5,
              }}
            >
              {accout?.email}
              {/* dot@gmail.com */}
            </Text>
            {/* <FontAwesome5 name="envelope" size={14} color="#fff" /> */}
          </View>
        </ImageBackground>
        <View style={{ flex: 1, backgroundColor: "#fff", paddingTop: 10 }}>
          <DrawerItemList {...props} />
        </View>
      </DrawerContentScrollView>
      <View style={{ padding: 20, borderTopWidth: 1, borderTopColor: "#ccc" }}>
        <TouchableOpacity
          onPress={async () => {
            onShare();
          }}
          style={{ paddingVertical: 15 }}
        >
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Ionicons name="share-social-outline" size={22} />
            <Text
              style={{
                fontSize: 15,
                // fontFamily: "Roboto-Medium",
                marginLeft: 5,
              }}
            >
              Tell a Friend
            </Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            // dispatch(LogoutUser());
            navigation.navigate("Onboarding");
          }}
          style={{ paddingVertical: 15 }}
        >
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Ionicons name="exit-outline" size={22} />
            <Text
              style={{
                fontSize: 15,
                // fontFamily: "Roboto-Medium",
                marginLeft: 5,
              }}
            >
              Sign Out
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CustomDrawer;
