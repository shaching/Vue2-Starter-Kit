<template>
  <v-app id="inspire" dark>
    <Drawer v-bind:is-active="drawer"></Drawer>

    <v-toolbar fixed app>
      <v-spacer></v-spacer>
      <v-toolbar-title>Application</v-toolbar-title>
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
    </v-toolbar>

    <v-content>
      <v-container fluid fill-height>
        <router-view></router-view>
      </v-container>
    </v-content>

    <Footer></Footer>
  </v-app>
</template>

<script>
import Footer from '@/Components/Footer/Views/Footer';
import Drawer from '@/Components/Drawer/Views/Drawer';

export default {
  name: 'Home',
  components: { Drawer, Footer },
  data: () => ({
    drawer: false,
  }),
};
</script>
