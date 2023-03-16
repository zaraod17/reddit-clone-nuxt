<template>
  <v-sheet width="40%">
    <v-autocomplete
      variant="solo"
      placeholder="Search Reddit"
      :items="trendingToday"
      prepend-inner-icon="mdi-magnify"
      hide-details
      no-filter
    >
      <template #item="{ props, item }">
        <v-list-item v-bind="{ props, item }" :value="item.title">
          <v-sheet>
            <div class="item-top">
              <v-icon>mdi-arrow-right-circle-outline</v-icon>
              <div>some text</div>
            </div>
          </v-sheet>
        </v-list-item>
      </template>
    </v-autocomplete>
  </v-sheet>
</template>

<script setup lang="ts">
const trendingToday: Array<{
  title: string;
  description: string;
  category: string;
  img: string;
}> = [
  {
    title: "title1",
    description: "some description",
    category: "some category1",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS80NuubzKZyPE5H7fJuUDzeHl7Kr70UeeA0g&usqp=CAU",
  },
  {
    title: "title2",
    description: "some description",
    category: "some category2",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS80NuubzKZyPE5H7fJuUDzeHl7Kr70UeeA0g&usqp=CAU",
  },
  {
    title: "title3",
    description: "some description",
    category: "some category3",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS80NuubzKZyPE5H7fJuUDzeHl7Kr70UeeA0g&usqp=CAU",
  },
  {
    title: "title4",
    description: "some description",
    category: "some category4",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS80NuubzKZyPE5H7fJuUDzeHl7Kr70UeeA0g&usqp=CAU",
  },
];
</script>

<style lang="scss" scoped>
.v-sheet {
  :deep(.v-field--prepended) {
    border-radius: 500px;
    box-shadow: none;
    background-color: whitesmoke;

    &:hover,
    &:focus,
    &:focus-within {
      background-color: white;
      border-color: blue;
    }

    :deep(.v-switch) {
      height: inherit !important;
      padding-left: 10px;
    }

    .mdi-menu-down {
      display: none;
    }
  }
  .item-top {
    display: flex;

    .v-icon {
      transform: rotate(-45deg);
      color: rgb(54, 116, 209);
      margin-right: 1rem;
    }
  }
}
</style>
