<template>
  <v-layout align-center justify-center>
    <v-flex xs12 sm8 md4>
      <v-card class="elevation-12">
        <v-toolbar color="primary">
          <v-toolbar-title>Login form</v-toolbar-title>
        </v-toolbar>
        <v-card-text>
          <v-text-field prepend-icon="email"
                        name="email"
                        label="123@gmail.com"
                        type="text"
                        v-model="email"
                        required>
          </v-text-field>
          <v-text-field prepend-icon="lock"
                        name="password"
                        label="123456"
                        type="password"
                        v-model="password"
                        required>
          </v-text-field>

          <div v-if="isSignIn">{{goToUrlWithReplace("hello")}}</div>

        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary" @click="signInAction(getSignInRequest)">SignIn</v-btn>
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'SignIn',
  methods: {
    ...mapActions([
      'signInAction',
      'setEmailAction',
      'setPasswordAction',
      'goToUrlWithReplace',
    ]),
  },
  computed: {
    ...mapGetters([
      'getSignInRequest',
      'getSignInResponse',
      'isSignIn',
    ]),
    email: {
      get() {
        return this.getSignInRequest.email;
      },
      set(value) {
        this.setEmailAction(value);
      },
    },
    password: {
      get() {
        return this.getSignInRequest.password;
      },
      set(value) {
        this.setPasswordAction(value);
      },
    },
  },
};
</script>
