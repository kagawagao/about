<template>
  <div class="container">
    <!-- <avatar :email="profile.email"></avatar> -->
    <sidebar :profile="profile"></sidebar>
    <div class="main">
      主区域
    </div>
  </div>
</template>

<script>
import store from 'vx/store'
import profile from 'utils/profile'
// import { mapGetters, mapActions } from 'vuex'
// import { routes } from 'routes'

import Avatar from 'components/avatar'
import Sidebar from 'components/sidebar'

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
  data () {
    return { profile }
  },
  computed: {
    // ...mapGetters(['lang', 'i18n', 'progress', 'toasts'])
  },

  methods: {
    // ...mapActions(['setEnv'])
  },
  components: {
    Avatar,
    Sidebar
  }
}

</script>

<style src="styles/app"></style>
