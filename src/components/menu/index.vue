<template>
  <div class="menu-warp">
    <el-scrollbar>
      <el-menu
        :default-active="$route.path"
        class="el-menu-vertical-demo"
        background-color="#fff"
        text-color="#000"
        active-text-color="#ffd04b"
        router
        @open="handleOpen"
        @close="handleClose"
      >
        <side-menu-item :routes="routes"></side-menu-item>
      </el-menu>

      <!-- <el-menu
        :default-active="$route.path"
        class="el-menu-vertical-demo"
        background-color="#fff"
        text-color="#000"
        active-text-color="#ffd04b"
        router
        @open="handleOpen"
        @close="handleClose">
        <template v-for="item in routes">
          <el-menu-item :index="item.path">{{item.name}}</el-menu-item>
        </template>
      </el-menu> -->
    </el-scrollbar>
  </div>
</template>
<script>
import sideMenuItem from './sideMenuItem.vue'
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
  },
  components:{
    'side-menu-item':sideMenuItem
  }
}
</script>
<style lang="less">
.el-menu-vertical-demo {
  width: 200px;
}
/* /deep/ .el-submenu>.el-submenu__title i{
  color:red;
}
/deep/ .el-submenu>.el-submenu__title i:before{
  content: '\e6e0'
}
/deep/ .el-submenu.is-opened>.el-submenu__title i{
  color:red;
}
/deep/ .el-submenu>.el-submenu__title i:before{
  content: '\e6e1'
} */
</style>