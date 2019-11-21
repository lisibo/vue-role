//方法一(有缺陷)
// import Vue from 'vue'
// import store from '@/store'
// const has = Vue.directive('permission',{
//   inserted:function(el,binding,vnode){   
//     const {value} = binding//按钮级别
//     if(!Vue.prototype.$_has(value)){
//       el.parentNode.removeChild(el)
//     }
//   }
// })
// Vue.prototype.$_has = function(value){
//   let isExist = false
//   let btnPermissionsStr = store.getters.roles.toString();//用户角色
//   if(btnPermissionsStr == undefined || btnPermissionsStr == null){
//     return false
//   }
//   let btnPermissions = btnPermissionsStr.split(',');
//   for(let i=0;i<btnPermissions.length;i++){
//     if(btnPermissions[i].indexOf(value)>-1){
//       isExist = true
//       break;
//     }
//   }
//   return isExist
// }
// export {has}


//方法二
import permission from './permission'

const install = function(Vue) {
  Vue.directive('permission', permission)
}

if (window.Vue) {
  window['permission'] = permission
  Vue.use(install); // eslint-disable-line
}

permission.install = install
export default permission

