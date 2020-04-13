import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    result: {
      point: 0
    }
  },
  mutations: {
    setPoint (state, { point }) {
      state.result.point = ~~point
      console.log(point)
    }
  },
  actions: {

  }
})