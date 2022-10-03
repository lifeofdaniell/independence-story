export const state = () => ({
  menuOpen: false,
  loading: true,

  gridColor: ''
})

export const getters = {
  menuState: (state) => {
    return state.menuOpen
  },

  loadingState: (state) => {
    return state.loading
  },

  getGridColor: (state) => {
    return state.gridColor
  }
}

export const mutations = {
  toggleMenu: (state, payload) => {
    state.menuOpen = payload
  },

  toggleLoading: (state, payload) => {
    state.loading = payload
  },

  updateGridColor: (state, payload) => {
    state.gridColor = payload
  }
}
