<template>
  <v-navigation-drawer v-model="isActive" fixed right app> DRAWER </v-navigation-drawer>
</template>

<script>
export default {
  name: 'Drawer',
  props: { isActive: Boolean },
};
</script>
