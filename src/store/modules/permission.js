import {constantRouter,asyncRouter} from '@/router'

function hasPermission(roles, route) {
  if (route.meta && route.meta.role) {
    return roles.some(role => route.meta.role.indexOf(role) >= 0)
  } else {
    return true
  }
}

const state = {
  routers:constantRouter,
  addRouters:[],
  roles:[]
}
const mutations = {
  SET_ROUTERS(state,routers){
    state.addRouters = routers
    state.routers = constantRouter.concat(routers)
  },
  SET_ROLE(state,role){
    state.roles = role
  }
}
const actions = {
  getRoutes({commit},data){
    return new Promise(resolve => {
      const { roles } = data;
      const role = roles
      console.log(role,'123')
      const accessedRouters = asyncRouter.filter(v => {
        if (roles.indexOf('admin') >= 0) return true;
        if (hasPermission(roles, v)) {
          if (v.children && v.children.length > 0) {
            v.children = v.children.filter(child => {
              if (hasPermission(roles, child)) {
                return child
              }
              return false;
            });
            return v
          } else {
            return v
          }
        }
        return false;
      });
      console.log(accessedRouters)
      commit('SET_ROUTERS', accessedRouters);
      commit('SET_ROLE', role);
      resolve();
    })
  }
}
export default {
  state,
  mutations,
  actions
}