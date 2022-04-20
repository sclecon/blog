import Vue from 'vue';
import axios from "axios";
import config from "@/config";
const http = axios.create({
    baseURL: config.api.host,
    headers: config.api.headers
});
Vue.prototype.http = http;
export default http;