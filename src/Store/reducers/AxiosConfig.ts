import axios from "axios";
import Cookies from 'universal-cookie';

const cookies = new Cookies();

export const $host = axios.create({
    baseURL: 'http://192.168.1.44:8080',
    withCredentials: true,
    headers: {
        "Authorization": `Bearer ${cookies.get("user")}`
    }
})