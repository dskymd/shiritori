// import Vuex from 'vuex'
export const state = () => ({
  keywords: 'surly',
  isloading: false,
  // new Vuex.Store({
  count: 0,
  shiri: 'り'
})

export const mutations = {
  increment(state) {
    state.count++
  },
  setShiri(state, word) {
    state.shiri = word.slice(-1)
  }
}
