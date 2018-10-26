import {
  Banner,
  Nav,
  Home,
  Detail,
  LoginWay
} from './mutation-types'
export default {
 [Banner](state,{banner}) {
    state.banner = banner
  },
  [Home](state,{result}) {
    const {home} = result
    state.home = home
  },
  [Nav](state,{result}) {
    const {nav} = result
    state.nav = nav
  },
  [Detail](state,{result}) {
    const {detail} = result
    state.detail = detail
  },
  [LoginWay](state,loginWay) {
    state.loginWay = loginWay
  },
}
