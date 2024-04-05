import axios from "axios";

axios.defaults.baseURL = "https://api.unsplash.com";

export const fetchImagesWithQuery = async query => {
  const response = axios.get(`/photos/?client_id=HIfkJCCOjdGgAJ4ztyY-tfg0RhoVIp9eZ5GLEDchnWw=${query}`);
  return response.data;
};