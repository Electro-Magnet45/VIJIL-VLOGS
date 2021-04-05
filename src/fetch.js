import axios from "./axios";

export default function fetchAllVideos(skip) {
  return axios
    .post("/api/videos/all", {
      skip: skip,
    })
    .then((response) => {
      return response.data;
    });
}
