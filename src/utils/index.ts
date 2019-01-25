import commonStore from './commonStore';

function init(Obj){
    setCommonStore(Obj);
}

function setCommonStore(Obj){
    commonStore.setData('initData', Obj);
}

export default {
    init
};
