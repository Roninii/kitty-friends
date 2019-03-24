import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    searchField: ``
  },
  mutations: {
    UPDATE_SEARCH_FIELD(state, params) {
      state.searchField = params;
    }
  }
});
