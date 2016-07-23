<template>
  <div class="container">
    <!-- <avatar :email="profile.email"></avatar> -->
    <sidebar :profile="profile"></sidebar>
    <div class="main">
      <project></project>
      <experience></experience>
      <education></education>
    </div>
  </div>
</template>

<script>
import store from 'vx/store'
import profile from 'utils/profile'
import { mapGetters, mapActions } from 'vuex'

import Avatar from 'components/avatar'
import Sidebar from 'components/sidebar'
import Project from 'components/project'
import Education from 'components/education'
import Experience from 'components/experience'

export default {
  name: 'App',
  store,
  data () {
    return { profile }
  },
  computed: {
    ...mapGetters(['repos'])
  },
  created () {
    this.getRepos()
  },
  methods: {
    ...mapActions(['getRepos'])
  },
  components: {
    Avatar,
    Sidebar,
    Project,
    Education,
    Experience
  }
}

</script>

<style src="styles/app"></style>
