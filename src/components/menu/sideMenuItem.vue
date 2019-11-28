<template>
  <div>
    <template v-for="item in routes">
      <el-menu-item
      v-if="item.meta&&!item.children&&item.meta.role.indexOf(role)>=0"
      :index="item.path"
      >
        <span>{{item.name}}</span>
      </el-menu-item>

      <el-menu-item
      v-if="(!item.meta || !item.meta.role)&&!item.children"
      :index="item.path"
      >
        <span>{{item.name}}</span>
      </el-menu-item>

      <el-submenu
      v-if="item.meta&&item.meta.role.indexOf(role)>=0&&item.children"
      :index="item.path"
      >
        <template slot="title">
          <span>{{item.name}}</span>  
        </template>
        <side-menu-item :routes="item.children"></side-menu-item>
      </el-submenu>
      
      <el-submenu
      v-if="item.children"
      :index="item.path"
      >
        <template slot="title">
          <span>{{item.name}}</span>  
        </template>
        <side-menu-item :routes="item.children"></side-menu-item>
      </el-submenu>
    </template>
  </div>
</template>
<script>
export default {
  name:'sideMenuItem',
  props:['routes'],
  data(){
    return {
      role:localStorage.getItem('role')
    }
  }
}
</script>