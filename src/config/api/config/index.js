import tools from "@/utils/tools";
const prefix = '/tests/config/';

export default {
    configlist: {
        path: tools.path.combination(prefix, 'get'),
        login: false,
        validator: {
            name: {
                default: '张三丰',
            }
        }
    }
}