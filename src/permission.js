import router from './router'
// import store from './store'
// console.log(name)
// var roles = name
router.beforeEach((to, from, next) => {
  // to and from are both route objects. must call `next`.
  next()
})