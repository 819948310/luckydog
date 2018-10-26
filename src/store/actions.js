import {
  reqBanner,
  reqHome,
    reqNav,
      reqDetail,
} from '../api'
import {Banner,Home,Nav,Detail,LoginWay} from "../store/mutation-types";

export default {
  async getBanner({commit}){
    const result = await reqBanner()
    commit(Banner,{banner:result.focusList})
  },
   async getHome({commit}){
    const result = await reqHome()
    commit(Home,{result})
  },
  async getNav({commit}){
    const result = await reqNav()
    commit(Nav,{result})
  },
   async getDetail({commit}){
    const result = await reqDetail()
    commit(Detail,{result})
  },
  setLoginWay({commit},loginWay){
    commit(LoginWay,loginWay)
  }
}
