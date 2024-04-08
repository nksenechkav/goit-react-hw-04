import axios from "axios";

export const fetchImagesWithQuery = async (query, page) => {
  const perPage = 12;
  const response = await axios.get('https://api.unsplash.com/photos', {
    params: { query: query,
      page: page,
      per_page: perPage
    },
    headers: {
      Authorization: 'Client-ID HIfkJCCOjdGgAJ4ztyY-tfg0RhoVIp9eZ5GLEDchnWw'
    }
  });
  return response.data;
};