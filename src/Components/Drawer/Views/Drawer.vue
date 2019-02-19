<template>
  <v-navigation-drawer
      v-model="isActive"
      fixed
      right
      app
  >
    <v-list dense>
      <v-list-tile>
        <v-list-tile-action>
          <v-icon>home</v-icon>
        </v-list-tile-action>
        <router-link to="/">
          <v-list-tile-content>
            <v-list-tile-title>Home</v-list-tile-title>
          </v-list-tile-content>
        </router-link>
      </v-list-tile>

      <v-list-tile>
        <v-list-tile-action>
          <v-icon>perm_identity</v-icon>
        </v-list-tile-action>

        <router-link to="signin">
          <v-list-tile-content>
            <v-list-tile-title>SignIn</v-list-tile-title>
          </v-list-tile-content>
        </router-link>
      </v-list-tile>

    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  name: 'Drawer',
  props: { isActive: Boolean },
};
</script>
