<template>
  <v-app>
    <v-container>
      Post!
    </v-container>
  </v-app>
</template>

<script>
import md from '../assets/data/post/test.md'

export default {
  name: 'Home',
  components: {
    // Test
  },
  data () {
    return {
      col: '12'
    }
  },
  created () {
    console.log(md)
  }
}
</script>

<style lang="scss">
</style>
