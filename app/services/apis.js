export const SERVER = "http://192.168.100.3:4000";
import axios from "axios";
export const testServer = async () => {
  const result = await axios
    .get(SERVER)
    .then((res) => console.log(res.data))
    .catch((e) => {});
};
export const login = async (username, password) => {
  const result = await axios
    .post(`${SERVER}/api/users/login`, { username, password })
    .then((res) => res.data)
    .catch((e) => {
      console.log(e);
    });
  if (result) {
    return result;
  } else return undefined;
};

export const storeToken = async (userId, expoPushToken) => {
  const result = await axios
    .post(`${SERVER}/notificationApply`, { userId, expoPushToken })
    .then((res) => res.data)
    .catch((e) => {
      console.log(e);
    });
  if (result) {
    return result;
  } else return undefined;
};

export const signUp = async (userName, password) => {
  const result = await axios
    .post(`${SERVER}/api/users`, { username, password, email })
    .then((res) => res.data);
  if (result) {
    console.log(result);
  }
};

export const getNotesByUser = async (userId) => {
  console.log(`${SERVER}/api/notes/${userId}`, "api call");
  const result = await axios
    .get(`${SERVER}/api/notes/${userId}`)
    .then((res) => res.data);
  if (result) {
    return result;
  }
};

export const editNote = async ({ noteId, userId, color, title, desc }) => {
  const result = await axios
    .put(`${SERVER}/api/notes/${noteId}`, {
      userId: userId,
      heading: title,
      items: desc,
      color: color,
    })
    .then((res) => res.data);
  if (result) {
    return result;
  }
};

export const deleteNote = async (noteId) => {
  const result = await axios.delete(SERVER + "/api/notes/" + noteId);
  if (result) {
    return result;
  }
};

export const createNote = async (userId, color, title, desc) => {
  const result = await axios
    .post(`${SERVER}/api/notes`, { userId, heading: title, items: desc, color })
    .then((res) => res.data);
  if (result) {
    return result;
  }
};
