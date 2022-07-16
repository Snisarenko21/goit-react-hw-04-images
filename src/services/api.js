import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api';
const API_KEY = '27687419-9b7122bc0ad1f15a1028fb6b8';

function fetchPicture(name, page) {
  const response = axios.get(
    `?q=${name}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
  );
  if (!response) {
    return Promise.reject(new Error('There is no picture for that name'));
  }

  return response;
}

const api = { fetchPicture };
export default api;
