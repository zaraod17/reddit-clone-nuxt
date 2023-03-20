<template>
  <v-app-bar elevation="1">
    <template #prepend>
      <v-app-bar-nav-icon color="red" variant="text"
        ><v-icon icon="mdi-reddit" size="x-large"></v-icon
      ></v-app-bar-nav-icon>
      <div class="text-h6 d-none d-lg-inline">reddit</div>
    </template>
    <topics-dropdown />
    <search-field />
    <template #append>
      <div class="d-none d-sm-flex">
        <action-buttons />
      </div>
    <actions-dropdown/> 
    </template>
  </v-app-bar>
</template>

<script setup lang="ts">
import SearchField from "./SearchField.vue";

import TopicsDropdown from "./TopicsDropdown.vue";
import ActionButtons from "./ActionButtons.vue";
import ActionsDropdown from "./ActionsDropdown.vue";
import { useAppBarStore } from "~/store/AppbarStore";

const store = useAppBarStore();

const { items } = store;

const mode = ref<boolean>(false);
</script>

<style lang="scss" scoped>
.v-toolbar {
  &-nav-icon {
    opacity: 1;
  }

  :deep(.v-toolbar__content) {
    justify-content: space-between;
  }
  :deep(.v-toolbar__prepend) {
    margin-right: 0;
  }

  :deep(.v-toolbar__append) {
    margin-left: 0;
  }
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
}
</style>
