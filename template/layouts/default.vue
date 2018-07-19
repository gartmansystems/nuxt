<template>
  <v-app :dark="isDark">
    <v-navigation-drawer
      :mini-variant.sync="miniVariant"
      :clipped="clipped"
      v-model="drawer"
      fixed
      app
    >
      <g-navi-actions></g-navi-actions>      
      <v-list>
        <v-list-tile
          router
          :to="item.to"
          :key="i"
          v-for="(item, i) in items"
          exact
        >
          <v-list-tile-action>
            <v-icon :color="item.color" v-html="item.icon"></v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title v-text="item.title"></v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        </v-list-group>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar style="z-index: 5" :color="isDark ? '' : 'primary'" dark fixed app :clipped-left="clipped">
      <v-toolbar-side-icon @click="drawer = !drawer"></v-toolbar-side-icon>
      <nuxt-link to="/" class="ml-2 mt-1 hidden-xs-only">
        <img :src="require('@/assets/images/banner_logo.svg')" alt="Banner Logo" width="200px"/>
      </nuxt-link>
      <v-spacer></v-spacer>
      <v-btn
        icon
        @click.stop="rightDrawer = !rightDrawer"
      >
        <v-icon>menu</v-icon>
      </v-btn>
      <v-menu attach light bottom left v-if="!isMobile">
        <v-btn flat slot="activator">{{ customerNumber }}
          <v-icon right>arrow_drop_down</v-icon>
        </v-btn>
        <!-- Placeholder -->
        <v-card></v-card>
      </v-menu>
    </v-toolbar>
    <v-content>
      <nuxt />
    </v-content>
    <v-navigation-drawer
      temporary
      :right="right"
      v-model="rightDrawer"
      :width="isMobile ? 250 : 350"
      fixed
    >
    </v-navigation-drawer>
     <v-footer>
      <v-card width="100%" flat tile class="text-xs-center">
        <v-card-text>
          Copyright &copy; 1978-2018 <strong>Gartman Systems.</strong> All rights reserved. - v{{ currentVersion }}
        </v-card-text>
      </v-card>
    </v-footer>
  </v-app>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  components: {
  },
  data() {
    return {
      clipped: true,
      drawer: true,
      fixed: true,
      items: [{ icon: 'home', title: 'Home', to: '/', color: 'primary' }],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      currentVersion: process.env.version,
      tabIndex: 0
    }
  },
  computed: {
    customerNumber() {
      return 'Gartman'
    }
  }
}
</script>
