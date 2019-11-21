import Vue from "vue";
import Vuex from "vuex";
import getters from './getters'
import permission from './modules/permission'

Vue.use(Vuex);

export default new Vuex.Store({
  namescaped:true,
  getters,
  modules: {
    permission
  }
});
