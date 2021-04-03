import axios from "./axios";

export default function fetchAllVideos() {
  return axios.get("/api/videos/all").then((response) => {
    return response.data;
  });
}
