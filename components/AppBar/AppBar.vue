<template>
  <v-app-bar elevation="1">
    <template #prepend>
      <v-app-bar-nav-icon color="red" variant="plain"
        ><v-icon icon="mdi-reddit" size="x-large"></v-icon
      ></v-app-bar-nav-icon>
      <div class="text-h6">reddit</div>
    </template>
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
import ActionButtons from "./ActionButtons.vue";
import { useAppBarStore } from "~/store/AppbarStore";

const store = useAppBarStore();

const items = [
  {
    title: "Dark Mode",
    prepIcon: "mdi-weather-night",
    apIcon: "",
    hasAppIcon: false,
  },
  {
    title: "Help Center",
    prepIcon: "mdi-help-circle-outline",
    apIcon: "",
    hasAppIcon: false,
  },
  {
    title: "More",
    prepIcon: "mdi-information-outline",
    apIcon: "",
    hasAppIcon: true,
    subList: [
      "Reddit iOS",
      "Reddit Android",
      "Rereddit",
      "Best Communities",
      "Communities",
      "About Reddit",
      "Blog",
      "Careers",
      "Press",
    ],
  },
  {
    title: "Terms & Policies",
    prepIcon: "mdi-view-list-outline",
    apIcon: "",
    hasAppIcon: true,
    subList: [
      "User Agreement",
      "Privacy Policy",
      "Content Policy",
      "Moderator Code of Conduct",
    ],
  },
  {
    title: "Advertise on Reddit",
    prepIcon: "mdi-bullhorn-outline",
    apIcon: "",
    hasAppIcon: false,
  },
];

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
.v-app-bar {
  &-nav-icon {
    opacity: 1;
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
  :deep(.v-toolbar__prepend) {
    margin-inline-end: 20%;
  }
}
</style>
