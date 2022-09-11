import axios from 'axios';
import { RENEWAL_PATH } from '@utility/COMMON_FUNCTION';

const axiosInstance = axios.create({
    baseURL: process.env.REACT_APP_HOST_URL,
})

axiosInstance.interceptors.request.use((config) => config);

axiosInstance.interceptors.response.use(
    (response) => {
        return response
    },
    (error) => {
        const { response } = error;
        console.log(response);

        if (response.status === 401 && response.config.url !== '/auth/signin') {
            // logout 기능 구현 필요
            // window.alert('logout');
            window.location.href = RENEWAL_PATH.login;
        }

        throw error
    })

export default axiosInstance;
