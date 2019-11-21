<template>
  <div id="app">
    <lsb-header />
    <router-view />
  </div>
</template>
<script>
import header from '@c/header.vue'
export default {
  components:{
    'lsb-header':header
  }
}
</script>
<style>
  *{
    margin: 0;
    padding: 0;
    list-style: none;
  }
</style>