<template>
  <div class="container">
    <h1>About</h1>
    <h4>Everthing about me</h4>
  </div>
</template>

<script>
import store from 'vx/store'
// import { mapGetters, mapActions } from 'vuex'
// import { routes } from 'routes'

export default {
  name: 'App',
  store,
  // i18n: {
  //   // 翻译资源库
  //   // 覆盖上级（或全局）
  //   data () {
  //     return {}
  //   }
  // },

  computed: {
    // ...mapGetters(['lang', 'i18n', 'progress', 'toasts'])
  },

  methods: {
    // ...mapActions(['setEnv'])
  }
}

</script>

<style src="styles/app"></style>
