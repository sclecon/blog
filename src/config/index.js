import list from './api';
import success from '@/utils/http/response/success';
import error from '@/utils/http/response/error';

export default {
    title: '配置文件里面的网站标题',
    api: {
        host: 'http://www.wowozy.com:9501',
        headers: {
            'Content-Type': 'application/json; charset=utf-8'
        },
        default: {
            login: false,
            params: {},
            method: 'GET',
            response: {
                success: success,
                error: error
            }
        },
        allowMethod: ['GET', 'POST', 'PUT', 'DELETE'],
        authentication: 'authentication',
        list
    }
}