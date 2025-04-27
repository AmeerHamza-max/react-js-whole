import axios from 'axios';
import React from 'react';

// Create Axios instance
const api = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
});

// Export a function to make the API call
export const movieData = () => {
  return api.get('/posts'); // Use the baseURL as the endpoint
};
export const deletePost=(id)=>{
  return api.delete(`/posts/${id}`);
}
export const postData=(post)=>{
  return api.post('/posts',post)
}