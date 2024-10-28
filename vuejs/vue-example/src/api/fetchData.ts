import axios from 'axios';

const API_URL_LIMIT = (page: number, limit: number): string =>
    `https://jsonplaceholder.typicode.com/photos?_page=${page}&_limit=${limit}`;

const API_URL = 'https://jsonplaceholder.typicode.com/photos';

export const fetchPhotos = async (page: number, limit: number): Promise<any[]> => {
    const response = await axios.get(API_URL_LIMIT(page, limit));
    return response.data;
};

export const fetchAllPhotos = async (): Promise<any[]> => {
    const response = await axios.get(API_URL);
    return response.data;
};
