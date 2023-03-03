<template>
  <v-card>
    <v-list>
      <v-list-group v-for="(item, index) in listItems" :value="item.title">
        <template #activator="props">
          <v-list-item v-bind="props" :title="item.title"></v-list-item>
        </template>
      </v-list-group>
    </v-list>
  </v-card>
</template>

<script setup lang="ts">
const listItems: Array<{ title: string; tags: string[] }> = [
  {
    title: "Popular Communities",
    tags: [
      "AskReddit",
      "NoStupidQuestions",
      "DestinyTheGame",
      "explainlikeimfive",
      "AskMen",
      "leaueoflegends",
      "Minecraft",
    ],
  },
  {
    title: "Gaming",
    tags: [
      "StarewValley",
      "FortniteCompetitive",
      "Warframe",
      "totalwar",
      "Fallout",
      "RocketLeague",
      "fo76",
      "yugioh",
      "eu4",
    ],
  },
  { title: "Sports", tags: [] },
  { title: "Tv", tags: [] },
  { title: "Travel", tags: [] },
  { title: "Health & Fitness", tags: [] },
  { title: "Fashion", tags: [] },
];
</script>

<style lang="scss" scoped>
.v-card {
  margin-top: 1.75rem;
  margin-right: 1rem;
}
</style>
