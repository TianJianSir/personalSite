import { httpHelper } from '../utils/https'

let github = {
  getApilist(url,params,type){
    return httpHelper.REQUEST(url,params,type).then(res=>res.data)
  }
}

export default github
