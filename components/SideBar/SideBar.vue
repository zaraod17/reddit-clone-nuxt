<template>
  <v-list>
    <v-list-subheader>Feeds</v-list-subheader>
    <v-list-item>
      <template #prepend>
        <v-icon>mdi-arrow-right-circle</v-icon>
      </template>
      <v-list-item-title>Popular</v-list-item-title>
    </v-list-item>
  </v-list>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.v-list-item {
  i {
    margin-right: 8px;
    color: black;
    opacity: 1;
    transform: rotate(-45deg);
  }
}
</style>
