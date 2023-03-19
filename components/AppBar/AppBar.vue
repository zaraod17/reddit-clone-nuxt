<template>
  <v-app-bar elevation="1">
    <template #prepend>
      <v-app-bar-nav-icon color="red" variant="plain"
        ><v-icon icon="mdi-reddit" size="x-large"></v-icon
      ></v-app-bar-nav-icon>
      <div class="text-h6 d-none d-lg-inline">reddit</div>
    </template>
    <topics-dropdown />
    <search-field />
    <template #append>
      <action-buttons />
      <v-menu transition="none" :close-on-content-click="false">
        <template v-slot:activator="{ props }">
          <v-btn v-bind="props">
            <v-icon size="x-large">mdi-account-outline</v-icon>
            <v-icon size="x-large">mdi-chevron-down</v-icon>
          </v-btn>
        </template>
        <v-list>
          <v-sheet v-for="(item, index) in items" class="list-item">
            <v-list-item v-if="!item.hasAppIcon" :key="index" :value="index">
              <v-sheet style="display: flex; align-items: center">
                <v-icon style="margin-right: 10px">{{ item.prepIcon }}</v-icon>
                <v-list-item-title>{{ item.title }}</v-list-item-title>
              </v-sheet>
              <template #append>
                <v-switch
                  v-if="index === 0"
                  color="blue-darken-3"
                  inset
                  hide-details
                  v-model="mode"
                ></v-switch>
              </template>
            </v-list-item>
            <v-list-group v-else :value="index">
              <template #activator="{ props }">
                <v-list-item v-bind="props">
                  <v-sheet style="display: flex; align-items: center">
                    <v-icon style="margin-right: 10px">{{
                      item.prepIcon
                    }}</v-icon>
                    <v-list-item-title>{{ item.title }}</v-list-item-title>
                  </v-sheet>
                </v-list-item>
              </template>

              <v-list-item v-for="(sub, index) in item.subList" :value="sub">
                <v-sheet style="margin-left: 10px; inline-size: 119px">
                  {{ sub }}</v-sheet
                >
              </v-list-item>
            </v-list-group>
          </v-sheet>
          <v-divider></v-divider>

          <v-list-item key="log" value="xd">
            <v-sheet style="display: flex; align-items: center">
              <v-icon style="margin-right: 10px">mdi-logout-variant</v-icon>
              <v-list-item-title> Log In / Sign Up </v-list-item-title>
            </v-sheet>
          </v-list-item>
        </v-list>
      </v-menu>
    </template>
  </v-app-bar>
</template>

<script setup lang="ts">
import SearchField from "./SearchField.vue";
import TopicsDropdown from "./TopicsDropdown.vue";
import ActionButtons from "./ActionButtons.vue";
import { useAppBarStore } from "~/store/AppbarStore";

const store = useAppBarStore();

const { items } = store;

const mode = ref<boolean>(false);
</script>

<style lang="scss" scoped>
.v-menu {
  .v-list {
    width: 225px;

    .v-list-item {
      width: inherit;
      height: 40px;

      &:hover {
        background: rgb(66, 92, 241);
        color: white;
      }
      &:hover * {
        background-color: rgb(66, 92, 241);
        color: white;
      }

      &-title {
        font-size: 14px;
        font-weight: bold;
        line-height: 18px;
        margin-right: 0;
      }
      :deep(.v-icon) {
        margin-left: 0;
      }

      .v-sheet {
        font-size: 14px;
        font-weight: 500;
        line-height: 18px;
      }

      .v-switch {
        height: 48px;
        background-color: transparent;

        :deep(.v-input__control) {
          height: 48px;
        }
        :deep(.v-selection-control) {
          min-height: 48px;
        }
        :deep(.v-switch__thumb) {
          color: white !important;
        }
      }
    }
  }
}
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
