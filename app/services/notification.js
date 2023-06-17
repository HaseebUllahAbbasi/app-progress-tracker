import { Notifications } from "expo";
import * as Permissions from "expo-permissions";

export async function registerForPushNotificationsAsync() {
  let token = "";

  // Check if the user has already granted permission to receive push notifications
  const { status: existingStatus } = await Permissions.getAsync(
    Permissions.NOTIFICATIONS
  );
  let finalStatus = existingStatus;

  // If permission hasn't been granted, ask the user for permission
  if (existingStatus !== "granted") {
    const { status } = await Permissions.askAsync(Permissions.NOTIFICATIONS);
    finalStatus = status;
  }

  // If permission is granted, retrieve the token
  if (finalStatus === "granted") {
    token = (await Notifications.getExpoPushTokenAsync()).data;
  }

  return token;
}
