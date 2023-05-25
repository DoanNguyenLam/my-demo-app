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
    async OK(state) {
      state.isLoading = true
      setTimeout(() => {
        console.log('calling...')
        state.callback()
        state.isLoading = false
        state.callback = null
      }, 3000)

      state.isShow = false
      console.log('ok', state)
    },
    CANCEL(state) {
      state.callback = null
      state.isShow = false
      state.isLoading = false
      console.log('cancel', state)
    }
  },
  actions: {
    open({ commit }, { callback, title, sub, okType, cancelType }) {
      commit('ADD_CALL_BACK', { callback, title, sub, okType, cancelType })
    },
    confirm({ commit }) {
      commit('OK')
    },
    cancel({ commit }) {
      commit('CANCEL')
    }
  }
}

export default confirmModal
