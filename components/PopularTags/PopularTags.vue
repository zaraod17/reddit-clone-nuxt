<template>
  <v-card>
    <v-list>
      <v-list-group v-for="(item, index) in listItems" :value="item.title">
        <template #activator="{ props }">
          <v-list-item v-bind="props" :title="item.title"></v-list-item>
        </template>
        <v-sheet class="tags">
          <span class="tag" v-for="(tag, i) in item.tags">{{ tag }}</span>
        </v-sheet>
        <v-btn variant="text" color="info" rounded="pill">See more</v-btn>
      </v-list-group>
    </v-list>
  </v-card>
</template>

<script setup lang="ts">
import { usePopularTagsStore } from "~~/store/PopularTagsStore";

const { listItems } = usePopularTagsStore();
</script>

<style lang="scss" scoped>
.v-card {
  width: 310px;
  margin-top: 1.75rem;

  :deep(.v-btn__content) {
    text-transform: capitalize;
  }

  .v-list-item-title {
    font-size: 10px;
    font-weight: 700;
    letter-spacing: .5px;
    line-height: 12px;
    text-transform: uppercase;
  }

  .tags {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    padding-inline: 10px;

    .tag {
      margin-inline: 4px;
      font-size: 12px;
      font-weight: 600;
      line-height: 16px;
      font-family: sans-serif;

      &:hover {
        text-decoration: underline;
        cursor: pointer;
      }
    }
  }
}
</style>
