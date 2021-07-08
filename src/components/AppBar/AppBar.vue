<template>
  <v-app-bar
    app
    color="primary"
    dark
  >
    <div class="d-flex align-center">
      El rey
    </div>

    <v-spacer />

    <v-btn
      text
      @click="logout"
    >
      <v-icon>mdi-logout</v-icon>
    </v-btn>
  </v-app-bar>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  methods: {
    ...mapActions({
      logout: 'auth/logout'
    }),
    name () {

    }
  }
}
</script>

<style lang="scss" scoped>

</style>
