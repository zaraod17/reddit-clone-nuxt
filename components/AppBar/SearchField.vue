<template>
  <v-sheet width="40%">
    <v-text-field
      variant="solo"
      placeholder="Search"
      density="comfortable"
      prepend-inner-icon="mdi-magnify"
      hide-details
    ></v-text-field>
  </v-sheet>
</template>

<script setup lang="ts">
defineComponent({
  name: "SearchField",
});
</script>

<style lang="scss" scoped>
.v-sheet {
  :deep(.v-field--prepended) {
    border-radius: 500px;
    box-shadow: none;
    background-color: whitesmoke;

    &:hover,
    &:focus,
    &:focus-within {
      background-color: white;
      border: 0.1px solid blue;
    }

    :deep(.v-switch) {
      height: inherit !important;
      padding-left: 10px;
    }
  }
}
</style>
