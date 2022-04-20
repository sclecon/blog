import Vue from 'vue';
import axios from '@/utils/axios';
import utils from './utils';


const http = {
    request(mark, config={}){
        const api = utils.getApi(mark);
        if(typeof api === 'object'){
            const method = utils.getMethod(api);
            const params = utils.fusionParams(api, config.data || {});
            const headers = utils.fusionHeaders(api, config.headers || {});
            const success = config.success || false;
            const error = config.error || false;
            switch(method) {
                case 'GET' :axios.get(api.path, {params, headers}).then(utils.then(success, error));break;
                case 'POST' :axios.post(api.path, params, {headers}).then(utils.then(success, error));break;
                case 'PUT' :axios.put(api.path, params, {headers}).then(utils.then(success, error));break;
                case 'DELETE' :axios.delete(api.path, {params, headers}).then(utils.then(success, error));break;
            }
        }
    }
}
Vue.prototype.http = http;
export default http;