import config from '@/config';
export default {
    getApi(mark){
        return config.api.list[mark] || false;
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
    validator(validators, data){
        for(let attr in validators){
            let validator = validators[attr];
            let require = validator.require || false;
            if(require && (attr in data) === false){
                return `'{{attr}}' 必须传递`;
            }
            if(attr in data) {
                let value = data[attr];
                console.log(validator.type, 'validator');
                console.log(value);
                console.log(typeof value);
                console.log('123123' instanceof String)
            }
        }
    },
    error(code, msg, data, error){
        const _error = typeof error === 'function' ? success : config.api.default.response.error;
        return _error(code, msg, data);
    }
}