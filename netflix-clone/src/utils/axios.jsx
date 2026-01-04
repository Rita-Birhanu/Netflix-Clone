import axios from "axios";

const instance = axios.create({
  basicURL: "https://api.themoviedb.org/3",
});
export default instance;
