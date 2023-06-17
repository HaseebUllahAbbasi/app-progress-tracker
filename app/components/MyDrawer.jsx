import { createDrawerNavigator } from "@react-navigation/drawer";
import { HourlyStack, NotesStack, TodoStack } from "../navigation/AuthStack";
import MainScreen from "../screens/user/Main";
import CustomDrawer from "./CustomDrawer";

const Drawer = createDrawerNavigator();

export function MainDrawer(props) {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawer {...props} />}
      useLegacyImplementation={true}
      initialRouteName="Main"
    >
      <Drawer.Screen name="Main" component={MainScreen} />

      <Drawer.Screen name="Hourly" component={HourlyStack} />
      <Drawer.Screen name="Todo" component={TodoStack} />
      <Drawer.Screen name="Notes" component={NotesStack} />
    </Drawer.Navigator>
  );
}
