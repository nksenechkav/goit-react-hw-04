import axios from "axios";

export const fetchImagesWithQuery = async query => {
  const response = await axios.get('https://api.unsplash.com/photos', {
    params: { query: query },
    headers: {
      Authorization: 'Client-ID HIfkJCCOjdGgAJ4ztyY-tfg0RhoVIp9eZ5GLEDchnWw'
    }
  });
  return response.data;
};