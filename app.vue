<template>
  <v-app id="inspire">
    <!--  -->
    <app-bar />

    <v-navigation-drawer> </v-navigation-drawer>
    <v-main>
      <!--  -->
    </v-main>
  </v-app>
</template>

<script lang="ts" setup>
// const drawer = ref<boolean | null>(null);
useHead({
  title: "Reddit",
});

const items = [{ title: "Tu" }, { title: "jest" }, { title: "dropdown" }];
</script>

<style scoped lang="scss"></style>
