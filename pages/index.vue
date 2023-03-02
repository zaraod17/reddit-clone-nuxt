<template>
  <v-app id="inspire">
    <app-bar />

    <v-navigation-drawer>
      <side-bar />
    </v-navigation-drawer>
    <v-main>
      <trending-today />
      <v-container fluid>
        <v-row>
          <v-col class="popular-posts-1" style="" cols="8">
            <popular-posts />
          </v-col>
          <v-col></v-col>
        </v-row>
      </v-container>
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

  .popular-posts-1 {
    display: flex;
    justify-content: end;

  }
}
</style>
