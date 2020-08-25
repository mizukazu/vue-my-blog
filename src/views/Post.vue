<template>
  <v-app>
    <v-container>
     <!-- <div v-html="convertMd()" /> -->
    </v-container>
  </v-app>
</template>

<script>
// import marked from 'marked'
// import postData from '../assets/data/post.json'

export default {
  name: 'post',
  components: {
  },
  data () {
    return {
      col: '12',
      postData: ''
    }
  },
  created () {
    // console.log(postData[0].title)
    // this.$route.params.name
  },
  methods: {
    convertMd () {
      // return marked(this.md)
    }
  }
}
</script>

<style lang="scss">
</style>
