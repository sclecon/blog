import Vue from 'vue';
import axios from '@/utils/axios';
import utils from './utils';


const http = {
    request(mark, config={}){
        const data = config.data || {};
        const headers = config.headers || {};
        const success = config.success || false;
        const error = config.error || false;
        const api = utils.getApi(mark);
        if(typeof api === 'object'){
            const method = utils.getMethod(api);
            const _config = {
                params: utils.fusionParams(api, data),
                headers: utils.fusionHeaders(api, headers)
            };
            switch(method) {
                case 'GET' :axios.get(api.path, _config).then(utils.then(success, error));break;
                case 'POST' :axios.post(api.path, _config).then(utils.then(success, error));break;
                case 'PUT' :axios.put(api.path, _config).then(utils.then(success, error));break;
                case 'DELETE' :axios.delete(api.path, _config).then(utils.then(success, error));break;
            }
        }
    }
}
Vue.prototype.http = http;
export default http;