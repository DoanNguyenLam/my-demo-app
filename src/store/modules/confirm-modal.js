const confirmModal = {
  namespaced: true,
  state: {
    isShow: false,
    isLoading: false,
    callback: null,
    customObj: {
      title: 'This is a message',
      sub: '',
      okType: 'primary',
      cancelType: 'default'
    }
  },
  mutations: {
    ADD_CALL_BACK(state, { callback, title, sub, okType, cancelType }) {
      state.callback = callback
      if (title) {
        state.customObj.title = title
      }
      if (sub) {
        state.customObj.sub = sub
      }
      if (okType) {
        state.customObj.okType = okType
      }
      if (cancelType) {
        state.customObj.cancelType = cancelType
      }

      state.isShow = true
      console.log('open', state)
    },
    START(state) {
      state.isLoading = true
      state.isShow = false
      console.log('start', state)
    },
    CANCEL(state) {
      state.isShow = false
      state.callback = null
      console.log('cancel', state)
    },
    FINISHED(state) {
      state.isLoading = false
      state.callback = null
      console.log('finished', state)
    }
  },
  actions: {
    open({ commit }, { callback, title, sub, okType, cancelType }) {
      commit('ADD_CALL_BACK', { callback, title, sub, okType, cancelType })
    },
    confirm({ commit, state }) {
      commit('START')
      setTimeout(() => {
        console.log('calling...')
        state.callback()
        commit('FINISHED')
      }, 3000)
    },
    cancel({ commit }) {
      commit('CANCEL')
    }
  }
}

export default confirmModal
