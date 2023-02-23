<template>
  <v-sheet class="trending">
    <h6>Trending today</h6>
    <v-sheet class="trending-items">
      <v-card v-for="(item, index) in trendingItems" width="238" height="178">
        <v-img cover :src="item.imgUrl"></v-img>
      </v-card>
    </v-sheet>
  </v-sheet>
</template>

<script setup lang="ts">
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
      "https://cdn1.naekranie.pl/media/cache/article-cover/2019/09/21_5d6d73519f4a4.jpeg",
  },
];
</script>

<style lang="scss" scoped>
.trending {
  h6 {
    padding-left: 55px;
    margin-block: 1rem;
  }
  background-color: transparent;
  &-items {
    display: flex;
    justify-content: space-between;
    background-color: transparent !important;
    margin-inline: 5%;

    .v-img {
      height: 100%;
    }
  }
}
</style>
