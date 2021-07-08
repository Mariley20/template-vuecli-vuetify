<template>
  <v-app>
    <AppBar />
    <NavigationDrawerLeft />
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import NavigationDrawerLeft from '@/components/NavigationDrawer/NavigationDrawerLeft.vue'
import AppBar from '@/components/AppBar/AppBar.vue'
export default {
  name: 'App',
  components: {
    AppBar,
    NavigationDrawerLeft
  },

  data: () => ({
    //
  })
}
</script>
