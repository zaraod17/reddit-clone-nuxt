<template>
  <v-menu class="d-lg-none" close-on-back :close-on-content-click="false">
    <template #activator="{ props }">
      <v-btn
        class="activator-btn d-lg-none"
        :prepend-icon="selectedItem.icon"
        append-icon="mdi-chevron-down"
        v-bind="props"
        >{{ selectedItem.title }}</v-btn
      >
    </template>
    <v-list>
      <v-list-subheader>FEEDS</v-list-subheader>
      <v-list-item
        value="initial-item"
        @click="
          selectedItem = {
            title: 'Popular',
            icon: 'mdi-arrow-top-right-thin-circle-outline',
          }
        "
      >
        <template #prepend>
          <v-icon>mdi-arrow-right-circle</v-icon>
        </template>
        <v-list-item-title>Popular</v-list-item-title>
      </v-list-item>
      <v-list-subheader>TOPICS</v-list-subheader>
      <v-list-group v-for="(item, index) in items">
        <template #activator="{ props }">
          <v-list-item :value="index" v-bind="props">
            <template #prepend>
              <v-icon class="topic-icon">{{ item.icon }}</v-icon>
            </template>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item>
        </template>
        <v-list-item
          @click="selectedItem = { title: subItem, icon: 'mdi-emoticon-poop' }"
          v-for="(subItem, index) in item.subList"
          :value="subItem"
        >
          <v-list-item-title>{{ subItem }}</v-list-item-title>
        </v-list-item>
      </v-list-group>
    </v-list>
  </v-menu>
</template>

<script setup lang="ts">
import { useSidebarStore } from "@/store/SidebarStore";

const selectedItem = ref<{
  title: string;
  icon: string;
}>({
  title: "Popular",
  icon: "mdi-arrow-top-right-thin-circle-outline",
});

const store = useSidebarStore();
const { listItems: items } = store;
</script>

<style lang="scss" scoped>
.activator-btn {
  text-transform: capitalize;
  letter-spacing: 0.25px;
  min-width: 200px;
  font-weight: 700;
}
.btn-pill {
  margin-inline: 10px;
  width: 125px;
  font-family: Noto Sans, Arial, sans-serif;
  font-size: 14px;
  font-weight: 700;
  text-transform: capitalize;
  box-shadow: 0;
}
.v-list-item {
  &-title {
    font-size: 14px;
    line-height: 18px;
    text-overflow: ellipsis;
  }
  .topic-icon {
    margin-right: 12px;
  }
  i {
    margin-right: 8px;
    color: black;
    opacity: 1;
    transform: rotate(-45deg);
  }
}
.v-list-subheader {
  font-size: 10px;
  font-weight: 500;
  line-height: 16px;
  text-transform: uppercase;
}
</style>
