import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: process.env.REACT_APP_HOST_URL,
})

axiosInstance.interceptors.request.use((config) => {
    const token = localStorage.getItem('accessToken');
    if(!token) {
        return config
    }

    config.headers.Authorization = `Bearer ${token}`;

    return config
});

axiosInstance.interceptors.response.use(
    (response) => {
        return response
    },
    (error) => {
        const { response } = error;

        if (response.status === 401 && response.config.url !== '/auth/signin') {
            // refreshToken 구현 필요
        }

        // throw error message
        throw response?.data?.message
    })

export default axiosInstance;
