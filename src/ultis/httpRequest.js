import axios from "axios";

const request = axios.create({
  baseURL: "https://shoe-data.onrender.com/",
});

export const get = async (api, config = {}) => {
    const data = await request.get(api, config);
    return data.data;
}

export default request;