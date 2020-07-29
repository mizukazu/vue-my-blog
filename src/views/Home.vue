<template>
  <v-app>
    <v-container>
      <v-row>
        <v-col v-bind:cols="col" sm="6" lg="4" v-for="n in 20" :key="n">
          <v-card class="mx-auto" max-width="400" to="/post">
            <v-img class="white--text align-end" height="200px" src="https://cdn.vuetifyjs.com/images/cards/docks.jpg">
              <v-card-title>Top 10 Australian beaches</v-card-title>
            </v-img>

            <v-card-subtitle class="pb-0">Number 10</v-card-subtitle>

            <v-card-text class="text--primary">
              <div>Whitehaven Beach</div>
              <div>Whitsunday Island, Whitsunday Islands</div>
            </v-card-text>
            <!-- <v-card-actions>
              <v-btn color="orange" text>
                Share
              </v-btn>

              <v-btn color="orange" text>
                Explore
              </v-btn>
            </v-card-actions> -->
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
export default {
  name: 'Home',
  components: {
    // Test
  },
  data () {
    return {
      col: '12'
    }
  }
}
</script>

<style lang="scss">
</style>
