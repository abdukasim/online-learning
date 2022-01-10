import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    api: {
      // target: 'local',
      target: "localIP",
      // target: 'heroku',
      local: "http://localhost:3000",
      localIP: "http://192.168.1.50:3000",
      heroku: "https://e-skool-api.herokuapp.com",
    },
    isSidebarOpen: false,
  },
  mutations: {
    toggleSidebar(state) {
      state.isSidebarOpen = !state.isSidebarOpen;
    },
  },
  actions: {},
  modules: {},
  getters: {
    api: (state) => (url) => `${state.api[state.api.target]}/${url}`,
    session: () => {
      let session = {
        username: "",
        id: "",
      };

      try {
        session = JSON.parse(localStorage.schoolData);
      } catch (e) {
        console.log(e);
      }

      return session;
    },
  },
});
