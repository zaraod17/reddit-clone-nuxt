<template>
  <v-app id="inspire">
    <app-bar />
    <v-navigation-drawer>
      <side-bar />
    </v-navigation-drawer>
    <v-main>
      <trending-today />
      <v-sheet class="content-wrapper">
        <v-sheet class="content">
          <popular-posts />
          <popular-tags />
        </v-sheet>
      </v-sheet>
    </v-main>
  </v-app>
</template>

<script lang="ts" setup>
// const drawer = ref<boolean | null>(null);
useHead({
  title: "Reddit",
});
</script>

<style scoped lang="scss">
.v-main {
  background-color: whitesmoke;

  .content-wrapper {
    margin-top: 20px;
    display: flex;
    background-color: transparent;
    justify-content: center;

    .content {
      display: inherit;
      background-color: inherit;
      width: 1000px;
      justify-content: space-evenly;
    }
  }
}
</style>
