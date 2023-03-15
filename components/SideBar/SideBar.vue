<template>
  <v-list>
    <v-list-subheader>FEEDS</v-list-subheader>
    <v-list-item>
      <template #prepend>
        <v-icon>mdi-arrow-right-circle</v-icon>
      </template>
      <v-list-item-title>Popular</v-list-item-title>
    </v-list-item>
    <v-list-subheader>TOPICS</v-list-subheader>
    <v-list-group v-for="(item, index) in listItems">
      <template #activator="{ props }">
        <v-list-item :value="index" v-bind="props">
          <template #prepend>
            <v-icon class="topic-icon">{{ item.icon }}</v-icon>
          </template>
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item>
      </template>
      <v-list-item v-for="(subItem, index) in item.subList" :value="index">
        <v-list-item-title>{{ subItem }}</v-list-item-title>
      </v-list-item>
    </v-list-group>
    <v-divider style="margin-inline: 10%; margin-top: 10%"></v-divider>
    <v-sheet class="account-text"
      >Create an account to follow your favorite communities and start taking
      part in conversations.
    </v-sheet>
    <v-sheet class="join-action">
      <v-btn
        class="btn-pill"
        variant="elevated"
        color="blue-darken-2"
        rounded="pill"
        >Join Reddit</v-btn
      >
    </v-sheet>
  </v-list>
</template>

<script setup lang="ts">
import { useSidebarStore } from "~~/store/SidebarStore";

const store = useSidebarStore();
const { listItems } = store;
</script>

<style lang="scss" scoped>
.join-action {
  display: flex;
  justify-content: center;

  button {
    width: 75%;
    box-shadow: none;
  }

}
.account-text {
  font: {
    weight: 400;
    size: 14px;
    family: Noto Sans, Arial, sans-serif;
  }
  line-height: 18px;
  margin-top: 20px;
  padding: {
    top: 4px;
    left: 20px;
    right: 24px;
    bottom: 22px;
  }
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
