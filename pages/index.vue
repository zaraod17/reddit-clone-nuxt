<template>
  <v-app id="inspire">
    <app-bar />

    <v-navigation-drawer>
      <side-bar />
    </v-navigation-drawer>
    <v-main>
      <trending-today />
      <v-container>
        <v-row>
          <v-col class="popular-posts-1" style="" cols="8">
            <popular-posts />
          </v-col>
          <v-col><popular-tags /></v-col>
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

  .v-container {
    padding-inline: 0;
  }

  .popular-posts-1 {
    display: flex;
    justify-content: end;
    padding-right: 1rem
  }
}
</style>
