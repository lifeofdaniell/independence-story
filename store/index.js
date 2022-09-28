// import { removeKeys } from '../commons/utils'
const apiKey = process.env.apiKey
const apiSecret = process.env.apiSecret
const cloudName = process.env.cloudName

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

export const actions = {
  fetchImages(context, payload) {
    const imageURL = `https://api.cloudinary.com/v1_1/${cloudName}/resources/image`
    return new Promise((resolve, reject) => {
      this.$axios
        .$get(imageURL, {
          headers: {
            Authorization: `Basic ${apiKey}:${apiSecret}`
          }
          // params: removeKeys(payload, ['page'])
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
