export const state = () => ({
  menuOpen: false
})

export const getters = {
  menuState: (state) => {
    return state.menuOpen
  }
}

export const mutations = {
  toggleMenu: (state, payload) => {
    state.menuOpen = payload
  }
}
