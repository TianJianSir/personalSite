// 存储全局公共变量
const COMMONSTORE = {
    namespace: 'commonStore',
    setData: function(name, data){
        this[name] = data;
    }
};

export default COMMONSTORE;
