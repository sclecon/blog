import Vue from 'vue';
import axios from "axios";
import config from "@/config";
const http = axios.create({
    baseURL: config.api.host,
    headers: config.api.headers,
    method: config.api.default.method
});
Vue.prototype.http = http;
export default http;