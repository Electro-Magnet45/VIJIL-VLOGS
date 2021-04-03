import axios from "axios";

const instance = axios.create({
  baseURL: "https://vijil-vlogs-server.herokuapp.com",
});

export default instance;
