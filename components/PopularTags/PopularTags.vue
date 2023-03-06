<template>
  <v-card>
    <v-list>
      <v-list-group v-for="(item, index) in listItems" :value="item.title">
        <template #activator="{ props }">
          <v-list-item v-bind="props" :title="item.title"></v-list-item>
        </template>

        <v-sheet class="tags">
          <v-menu
            v-for="(tag, i) in item.tags"
            close-on-content-click
            close-on-back
            open-on-hover
            location="bottom left"
          >
            <template #activator="{ props: menu }">
              <v-tooltip location="right bottom">
                <template #activator="{ props: tooltip }">
                  <span class="tag" v-bind="mergeProps(tooltip, menu)">{{
                    tag
                  }}</span>
                </template>
                <span>{{ tag }}</span>
              </v-tooltip>
            </template>
            <tag-menu />
          </v-menu>
        </v-sheet>
        <v-btn variant="text" color="info" rounded="pill">See more</v-btn>
      </v-list-group>
    </v-list>
  </v-card>
</template>

<script setup lang="ts">
import { mergeProps } from "vue";
import { usePopularTagsStore } from "~~/store/PopularTagsStore";
import TagMenu from "./TagMenu.vue";

const { listItems } = usePopularTagsStore();
</script>

<style lang="scss" scoped>
.v-card {
  width: 310px;
  margin-top: 1.75rem;

  :deep(.v-btn__content) {
    text-transform: capitalize;
  }

  :deep(.v-list-item-title) {
    font-size: 10px;
    font-weight: 700;
    letter-spacing: 0.5px;
    line-height: 12px;
    text-transform: uppercase !important;
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
