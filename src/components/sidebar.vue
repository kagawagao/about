<template lang="html">
  <div class="sidebar">
    <avatar :email="profile.email"></avatar>
    <div class="profile email">
      <p>{{profile.email}}</p>
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
  computed: {},
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
