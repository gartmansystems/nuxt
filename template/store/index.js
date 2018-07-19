export const state = () => ({
  sidebar: false,
  isDark: false
})

export const mutations = {
  toggleSidebar(state) {
    state.sidebar = !state.sidebar
  }
}

export const getters = {
  isDark: state => state.isDark
}

export const actions = {
  nuxtServerInit({
    commit
  }, {

  })
}
export const strict = false