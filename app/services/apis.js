const SERVER = "http://192.168.100.3:4000";
import axios from "axios";
export const testServer = async () => {
  console.log("this is ok ");
  const result = await axios
    .get(SERVER)
    .then((res) => console.log(res.data))
    .catch((e) => {});
};
