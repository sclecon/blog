import config from '@/config';
export default {
    getApi(mark){
        if((mark in config.api.list) === false){
            return this.error("'"+mark+"' 接口未定义");
        }
        return config.api.list[mark];
    },
    getMethod(api){
        if(typeof api.method === 'string'){
            return api.method in config.api.allowMethod ? method : config.api.allowMethod[0];
        }
        return config.api.default.method;
    },
    fusionParams(api, data){
        const params = typeof api.params === 'object' ? Object.assign(api.params, data) : data;
        return Object.assign(config.api.default.params, params);
    },
    fusionHeaders(api, data){
        const headers = Object.assign(config.api.headers, (typeof api.headers === 'object' ? Object.assign(api.headers, data) : data));
        const login = typeof api.login === 'boolean' ? api.login : config.api.default.login;
        if(login === true){
            headers[config.api.authentication] = 'usertoken';
        }
        return headers;
    },
    then(success, error){
        const _success = typeof success === 'function' ? success : config.api.default.response.success;
        const _error = typeof error === 'function' ? success : config.api.default.response.error;
        return (response) => {
            if(response.status == 200 && response.statusText === 'OK'){
                const code = response.data.code || 500;
                const msg = response.data.msg || '未知错误';
                const data = response.data.data || {};
                return code === 200 ? _success(data, code, msg) : _error(code, msg, data);
            }
            return _error(response.status, '[HTTP请求异常] '+response.statusText, {});
        }
    },
    error(msg){
        console.error('[config->api][http] '+msg);
        return false;
    }
}