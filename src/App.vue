<template>
  <v-app>
    <!-- Navigation -->
    <v-navigation-drawer app v-model="drawer">
      <v-container>
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title class="title grey--text text--darken-2 center">サイト項目</v-list-item-title>
            <v-divider></v-divider>

            <v-list dense nav>
              <v-list-item v-for="navList in navLists" :key="navList.name" :to="navList.link">
                <v-list-item-icon>
                  <v-icon>{{ navList.icon }}</v-icon>
                </v-list-item-icon>

                <v-list-item-content>
                  <v-list-item-title>{{ navList.name }}</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list>

          </v-list-item-content>
        </v-list-item>
      </v-container>
    </v-navigation-drawer>
    <!-- End of Navigation -->

    <v-app-bar app dark>
      <v-app-bar-nav-icon @click="drawer=!drawer"></v-app-bar-nav-icon>
      <!-- <v-toobar-title></v-toobar-title> -->
      <v-spacer></v-spacer>
    </v-app-bar>

    <v-main>
      <transition mode="out-in">
        <router-view />
      </transition>
    </v-main>

    <v-footer app dark>
      ひな形
    </v-footer>
  </v-app>
</template>

<script>
import 'normalize.css'

export default {
  name: 'App',

  components: {
  },

  data () {
    return {
      drawer: null,
      result: [],
      navLists: [
        { name: 'ホーム', icon: 'mdi-vuetify', link: '/' }
      ]
    }
  }
}
</script>

<style>
.v-enter-active, .v-leave-active {
  transition: opacity .5s;
}
.v-enter, .v-leave-to {
  opacity: 0;
}
</style>
