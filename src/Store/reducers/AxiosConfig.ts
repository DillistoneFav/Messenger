import axios from "axios";

export const $host = axios.create({
    baseURL: 'http://192.168.1.44:8080'
})