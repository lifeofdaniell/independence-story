export const state = () => ({
  menuOpen: false,
  loading: true,
  hover: false,
  gridColor: ''
})

export const getters = {
  menuState: (state) => {
    return state.menuOpen
  },

  loadingState: (state) => {
    return state.loading
  },

  hoverState: (state) => {
    return state.hover
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

  toggleHover: (state, payload) => {
    state.hover = payload
  },

  updateGridColor: (state, payload) => {
    state.gridColor = payload
  }
}
