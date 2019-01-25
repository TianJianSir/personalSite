import axios from 'axios';

const API = {
    REQUEST: function(url, type, params={}){
        // todo 可以在此处统一加loading，走参数配置，决定是否使用loading
        return this[type](url, params).then((res) => {
            return res.data;
            // todo 统一容错
        });
    },
    GET: function(url, params){
        return axios.get(url, {params});
    },
    POST: function(url, params){
        return axios.post(url, params);
    },
    DELETE: function(url, {params}){
        return axios.delete(url, params);
    },
    PUT: function(url, params){
        return axios.put(url, params);
    }
};

export default API;
