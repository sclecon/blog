import Vue from 'vue';
import axios from '@/utils/axios';
import utils from './utils';
import validatorError from './validator';


const http = {
    request(mark, config={}){
        const success = config.success || false;
        const error = config.error || false;
        const api = utils.getApi(mark);
        if(api === false){
            return utils.error(600, "'"+mark+"' 接口未定义 无法发起请求", {}, error);
        }
        const method = utils.getMethod(api);
        const params = utils.fusionParams(api, config.data || {});
        const headers = utils.fusionHeaders(api, config.headers || {});
        const validator = api.validator || {};
        const _params = utils.validator(validator, params);
        if(_params instanceof validatorError){
            return utils.error(601, _params.getMsg(), {}, error);
        }
        switch(method) {
            case 'GET' :axios.get(api.path, {params, headers}).then(utils.then(success, error));break;
            case 'POST' :axios.post(api.path, params, {headers}).then(utils.then(success, error));break;
            case 'PUT' :axios.put(api.path, params, {headers}).then(utils.then(success, error));break;
            case 'DELETE' :axios.delete(api.path, {params, headers}).then(utils.then(success, error));break;
        }
    }
}
Vue.prototype.http = http;
export default http;