<template>
  <div class="container">
    <!-- <avatar :email="profile.email"></avatar> -->
    <sidebar :profile="profile"></sidebar>
    <div class="main">
      <div class="main-item">
        <h2>工作经历</h2>
      </div>
      <div class="main-item">
        <h2>项目</h2>
      </div>
      <div class="main-item">
        <h2>教育背景</h2>
      </div>
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
