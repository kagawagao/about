<template lang="html">
  <div>
    <h1>Project</h1>
    <ul>
      <li v-for="repo in sourceRepo">
        <div>
          Name:{{repo.full_name}}
        </div>
        <div>
          Description: {{repo.description}}
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  data () {
    return {
    }
  },
  computed: {
    ...mapGetters(['repos']),
    sourceRepo () {
      const temp = []
      this.repos.map(repo => {
        if (!repo.fork && !repo.private) {
          temp.push(repo)
        }
      })
      // temp.sort((repo1, repo2) => {
      //   if (repo1.stargazers_count > repo2.stargazers_count) {
      //     return -1
      //   }
      //   return 1
      // })
      return temp
    }
  },
  ready () {},
  attached () {},
  methods: {},
  components: {}
}
</script>

<style lang="css">
</style>
