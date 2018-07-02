import axios from 'axios'

class HttpHelper {
    /**
     * 自定义封装请求
     * @param url
     * @param params
     * @param type
     * @returns {*}
     * @constructor
     */
    REQUEST(url, params, type) {
        const instance = axios.create({
            baseURL: ''
        })

        switch (type) {
            case 'get':
                return instance.get(url, { params })
            case 'post':
                return instance.post(url, params)
            case 'put':
                return instance.put(url, params)
            case 'delete':
                return instance.delete(url, { params })
            case 'patch':
                return instance.patch(url, params)
        }
    }
}


let httpHelper = new HttpHelper()
export { httpHelper }
