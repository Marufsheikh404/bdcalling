import axios from 'axios';

const AxiosPublic = axios.create({
    baseURL:"http://localhost:5000",
})

export default AxiosPublic;