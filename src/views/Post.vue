<template>
  <v-app>
    <v-container>
     <div v-html="convertMd()" />
    </v-container>
  </v-app>
</template>

<script>
// import VueMarkdown from 'vue-markdown'
import marked from 'marked'
import md from '../assets/data/post/test.md'

export default {
  name: 'Post',
  components: {
    // VueMarkdown
  },
  data () {
    return {
      col: '12',
      md: md,
      postInfo: ''
    }
  },
  created () {
    const textArray = md.split('\n')

    this.postInfo = textArray.filter(x => {
      if (x.includes('date') || x.includes('title')) {
        return x
      }
    })
  },
  methods: {
    convertMd () {
      return marked(this.md)
    }
  }
}
</script>

<style lang="scss">
</style>
