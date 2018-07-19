import Vue from 'vue'
export default ({
  store
}) => {
  Vue.mixin({
    computed: {
      isMobile() {
        if (process.client) {
          return window.innerWidth < 600
        }
      },
      isDark() {
        return store.getters.isDark
      }
    }
  })
}