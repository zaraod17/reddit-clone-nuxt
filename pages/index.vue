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
          <v-sheet class="tags-wrapper">
            <popular-tags />
            <side-footer />
          </v-sheet>
        </v-sheet>
      </v-sheet>
    </v-main>
  </v-app>
</template>

<script lang="ts" setup>
import SideFooter from '../components/AppComponents/SideFooter.vue';
// const drawer = ref<boolean | null>(null);
useHead({
  title: "Reddit",
});
</script>

<style scoped lang="scss">
.v-main {
  background-color: #dae0e6;

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

    .tags-wrapper {
      margin-top: 1.75rem;
      background-color: transparent;
    }
  }
}
</style>
