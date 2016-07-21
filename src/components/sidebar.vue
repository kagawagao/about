<template lang="html">
  <div class="sidebar">
    <avatar :email="profile.email"></avatar>
    <div class="profile">
      <div class="profile-item website">
        <a :href="profile.url">{{profile.url}}</a>
      </div>
      <div class="profile-item website">
        <a :href="profile.blog">{{profile.blog}}</a>
      </div>
      <div class="profile-item email">
        <a :href="email">{{profile.email}}</a>
      </div>
      <div class="profile-item github">
        <a :href="github">{{github}}</a>
      </div>
    </div>
  </div>
</template>

<script>
import Avatar from './avatar'
export default {
  props: ['profile'],
  data () {
    return {
    }
  },
  computed: {
    github () {
      return `https://github.com/${this.profile.github}`
    },
    email () {
      return `mailto:${this.profile.email}`
    }
  },
  ready () {},
  attached () {},
  methods: {},
  components: {
    Avatar
  }
}
</script>

<style lang="css">
</style>
