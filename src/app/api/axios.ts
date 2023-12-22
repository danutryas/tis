import axios from "axios";

const Axios = axios.create({
  baseURL: "https://tis-backend.vercel.app/",
});

export default Axios;
