import axios from "./axios";

function fetchAllVideos(skip) {
  return axios
    .post("/api/videos/all", {
      skip: skip,
    })
    .then((response) => {
      return response.data;
    });
}

function fetchById(itemId) {
  return axios
    .post("/api/videos/id", {
      itemId: itemId,
    })
    .then((response) => {
      return response.data;
    });
}

export { fetchAllVideos, fetchById };
