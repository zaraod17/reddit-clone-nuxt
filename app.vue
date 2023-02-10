<template>
  <v-app id="inspire">
    <!--  -->

    <v-app-bar elevation="1">
      <template #prepend>
        <v-app-bar-nav-icon color="red" variant="plain"
          ><v-icon icon="mdi-reddit" size="x-large"></v-icon
        ></v-app-bar-nav-icon>
        <div class="text-h6">reddit</div>
      </template>

      <v-text-field
        variant="solo"
        label="Search"
        density="comfortable"
        prepend-inner-icon="mdi-magnify"
        hide-details
      ></v-text-field>
    </v-app-bar>

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
</script>

<style scoped lang="scss">
.v-application {
  .v-app-bar {
    &-nav-icon {
      opacity: 1;
    }
    :deep(.v-toolbar__prepend) {
      margin-inline-end: 15%;
    }
    .v-input {
      flex: 0 0 40%;
    }
  }
}
</style>
