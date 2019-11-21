<template>
  <div class="menu-warp">
    <el-menu
      :default-active="$route.path"
      class="el-menu-vertical-demo"
      router
      @open="handleOpen"
      @close="handleClose"
    >
    <template v-for="(item,index) in routes">
      <el-menu-item :index="item.path" :route="item.path">{{item.name}}</el-menu-item>
    </template>    
    </el-menu>
  </div>
</template>
<script>
export default {
  computed:{
    routes(){
      let newRoutes = this.$store.getters.permission_routes.filter(item=>{
    
        return item.path == this.$route.path
      })
      
      if(newRoutes.length>0){
        localStorage.setItem('Menu',JSON.stringify(newRoutes[0].children))
        return newRoutes[0].children
      }
      else{
        return JSON.parse(localStorage.getItem('Menu'))
      }
    }
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  }
}
</script>
<style>
.el-menu-vertical-demo {
  width: 200px;
}
</style>