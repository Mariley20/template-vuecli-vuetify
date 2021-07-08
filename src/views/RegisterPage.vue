<template>
  <v-container
    class="d-flex justify-center"
    fill-height
  >
    <v-card
      width="500"
      class="mb-2"
    >
      <v-card-text>
        <div class="d-flex justify-center align-end pb-6 pt-3">
          El rey del Sur - register
        </div>
        <div class="text-center">
          <v-btn
            type="submit"
            color="teal"
            class="white--text"
            :loading="processingForm"
            @click.prevent="registerAuthGoogleProvider"
          >
            Iniciar Sesión con google
          </v-btn>
          <br>
          <v-btn
            text
            color="info"
            class="ma-0 subtitle-1 mt-3 text-none"
          >
            Olvide mi contraseña
          </v-btn>
        </div>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>

import { mapActions } from 'vuex'

export default {
  components: {},
  data () {
    return {
      form: {
        email: '',
        password: ''
      },
      rules: {
        email: [
          (v) => !!v || 'Email es requerido'
          // (v) => EMAIL_VALID_REGEX.test(v) || this.$t('message.email_is_invalid')
        ],
        password: [(v) => !!v || 'Password es requerido']
      },
      errors: {
        password: null
      },
      validForm: true,
      showPassword: false,
      processingForm: false
    }
  },
  methods: {
    ...mapActions({
      registerAuthGoogleProvider: 'auth/registerAuthGoogleProvider'
    })
  }
}
</script>

<style lang="scss">
.v-text-field {
  &--label-always-active {
    .v-label {
      background: white;
      border-left: 3px solid white;
      border-right: 3px solid white;
      transform: translateY(-24px) scale(0.75);
    }
  }
}
</style>
