<template lang="html">
  <div class="avatar">
    <img :src="avatar" alt="avatar" title="kingsongao1221@gmail.com"/>
  </div>
</template>

<script>
import md5 from 'md5'
export default {
  props: ['email'],
  computed: {
    avatar () {
      return `https://www.gravatar.com/avatar/${md5(this.email)}?s=160`
    }
  }
}
</script>

<style lang="css">
</style>
