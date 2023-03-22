<template>
  <v-sheet class="trending-wrapper">
    <v-sheet class="trending">
      <h6 class="font-weight-bold">Trending today</h6>
      <v-sheet class="trending-items">
        <v-card
          v-for="(item, index) in filteredTrendingItems"
          width="100%"
          height="178"
        >
          <v-img cover :src="item.imgUrl"></v-img>
          <v-sheet class="description">
            <div class="text-h6 font-weight-bold">{{ item.title }}</div>
            <div class="text-subtitle2">{{ item.subTitle }}</div>
            <div class="text-caption">{{ item.category }}</div>
          </v-sheet>
        </v-card>
      </v-sheet>
    </v-sheet>
  </v-sheet>
</template>

<script setup lang="ts">
import { useDisplay } from "vuetify";

const display = useDisplay();

const trendingItems = [
  {
    title: "trend1",
    subTitle: "trend1",
    category: "cat1",
    imgUrl:
      "https://images.theconversation.com/files/301120/original/file-20191111-194656-y6evbt.png?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=1200.0&fit=crop",
  },
  {
    title: "trend2",
    subTitle: "trend2",
    category: "cat2",
    imgUrl:
      "https://c.files.bbci.co.uk/E909/production/_112375695_crucible976.jpg",
  },
  {
    title: "trend3",
    subTitle: "trend3",
    category: "cat3",
    imgUrl:
      "https://www.pcgamesn.com/wp-content/sites/pcgamesn/2022/11/best-free-pc-games.jpg",
  },
  {
    title: "trend4",
    subTitle: "trend4",
    category: "cat4",
    imgUrl:
      "https://images.theconversation.com/files/301120/original/file-20191111-194656-y6evbt.png?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=1200.0&fit=crop",
  },
];

const filteredTrendingItems = computed(() => {
  switch (display.name.value) {
    case "xs":
      return trendingItems.slice(0, 1);
    case "sm":
      return trendingItems.slice(0, 2);
    case "md":
      return trendingItems.slice(0, 3);
    default:
      return trendingItems;
  }
});
</script>

<style lang="scss" scoped>
.trending-wrapper {
  background-color: transparent;
  display: flex;
  justify-content: center;
}
.trending {
  width: 100%;
  max-width: 1000px;
  background-color: transparent;
  h6 {
    padding-left: 1em;
    margin-block: 1rem;
    font-size: 14px;
    font-weight: 500;
    line-height: 18px;
    text-transform: unset;
  }
  &-items {
    display: flex;
    justify-content: center;
    background-color: transparent !important;
    margin-inline: 6px;

    .v-card {
      position: relative;
      margin-inline: 0.4rem;
      border-radius: 1rem;
      /* max-width: 300px; */
      cursor: pointer;
      .v-img {
        height: 100%;
        position: relative;
      }

      .description {
        top: 3.5rem;
        left: 1rem;
        position: absolute;
        background-color: transparent;
        color: white;
      }
    }
  }
}
</style>
