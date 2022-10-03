export const state = () => ({
  menuOpen: false,
  loading: true,
  isPlaying: false,
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
  },

  getPlayingState: (state) => {
    return state.isPlaying
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
  },

  updatePlayingState: (state, payload) => {
    state.isPlaying = payload
  }
}
