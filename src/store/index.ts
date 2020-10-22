import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    expression: '',
    result: ''
  },
  mutations: {
    changeExpression: (state, data: string) => {
      state.expression = data
    },
    changeResult: (state, data: string) => {
      state.result = data
    }
  },
  actions: {
    calculate({ state, commit }) {
      if (state.expression && state.expression !== '0') {
        const lastChar = state.expression.slice(-1)
        const expression = (+lastChar) ? state.expression : state.expression.slice(0, -1)
        commit('changeResult', new Function(`return (${expression})`)())
      }
    },
    getResult({ state, commit }) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          commit('changeExpression', `${state.result}`)
          commit('changeResult', '')
          resolve(true)
        }, 2000)
      })
    }
  },
  modules: {
  }
})
