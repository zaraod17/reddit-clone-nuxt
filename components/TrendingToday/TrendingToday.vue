<template>
  <v-sheet class="trending-wrapper">
    <v-sheet class="trending">
      <h6 class="font-weight-bold">Trending today</h6>
      <v-sheet class="trending-items">
        <v-card v-for="(item, index) in trendingItems" width="238" height="178">
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
</script>

<style lang="scss" scoped>

.trending-wrapper {
  background-color: transparent;
  display: flex;
  justify-content: center;
}
.trending {
  h6 {
    padding-left: 1em;
    margin-block: 1rem;
    font-size: 14px;
    font-weight: 500;
    line-height: 18px;
    text-transform: unset;
  }
  background-color: transparent;
  &-items {
    display: flex;

    background-color: transparent !important;
    

    .v-card {
      position: relative;
      margin-left: 12px;
      border-radius: 1rem;
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
