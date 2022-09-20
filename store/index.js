import { removeKeys } from '../commons/utils'
const token = process.env.token

export const state = () => ({
  menuOpen: false,
  loading: true,
  hover: false
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
  }
}

export const actions = {
  fetchImages(context, payload) {
    const imageURL = process.env.mediaURL + '/upload/files'
    return new Promise((resolve, reject) => {
      this.$axios
        .$get(imageURL, {
          headers: {
            Authorization: `Bearer ${token}`
          },
          params: removeKeys(payload, ['page'])
        })
        .then((response) => {
          resolve(response)
        })
        .catch((error) => {
          reject(error)
        })
    })
  }
}
