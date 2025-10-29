import axios from "axios";
import { useNavigate } from "react-router-dom";

const AxiosSecure = () => {
    const navigate = useNavigate();

    const axiosSecure = axios.create({
        baseURL: "http://localhost:5000",
    });

    // request interceptor
    axiosSecure.interceptors.request.use(
        (config) => {
            const token = localStorage.getItem("access-token");
            if (token) {
                config.headers.Authorization = `Bearer ${token}`;
            }
            return config;
        },
        (error) => Promise.reject(error)
    );

    // response interceptor
    axiosSecure.interceptors.response.use(
        (response) => response,
        (error) => {
            if (error.response?.status === 401 || error.response?.status === 403) {
                localStorage.removeItem("access-token");
                navigate("/login");
            }
            return Promise.reject(error);
        }
    );

    return axiosSecure;
};

export default AxiosSecure;
