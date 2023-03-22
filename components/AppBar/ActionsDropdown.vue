<template>
  <v-menu transition="none" :close-on-content-click="false">
    <template v-slot:activator="{ props }">
      <v-btn v-bind="props">
        <v-icon style="color: gray" size="x-large">mdi-account-outline</v-icon>
        <v-icon style="color: gray" size="x-large">mdi-chevron-down</v-icon>
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
                <v-icon style="margin-right: 10px">{{ item.prepIcon }}</v-icon>
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

      <login-dialog>
        <template #activator="{ props }">
          <v-list-item v-bind="props" key="log" value="xd">
            <v-sheet style="display: flex; align-items: center">
              <v-icon style="margin-right: 10px">mdi-logout-variant</v-icon>
              <v-list-item-title> Log In / Sign Up </v-list-item-title>
            </v-sheet>
          </v-list-item>
        </template>
      </login-dialog>
    </v-list>
  </v-menu>
</template>

<script setup lang="ts">
import LoginDialog from '../AppComponents/LoginDialog.vue'
import { useAppBarStore } from "~/store/AppbarStore";

const mode = ref<boolean>(false);
const store = useAppBarStore();

const { items } = store;
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
</style>
