import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: null, 
    token: null,
    username: null
  },
  getters: {
    isLoggedIn(state) {
      return !!state.token;
    },
    getToken(state) {
      return state.token
  }
  },
  mutations: {
    setUser(state, user) {
      console.log('this ')
      state.user = user;
    }, 
    setToken(state, token) {
      state.token = token
    },
    setToken(state, username) {
      state.username = username
    }
  },
  actions: {
  },
  modules: {
  },
});
