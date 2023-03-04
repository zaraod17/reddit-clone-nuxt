<template>
  <v-card>
    <v-list>
      <v-list-group v-for="(item, index) in listItems" :value="item.title">
        <template #activator="{ props }">
          <v-list-item v-bind="props" :title="item.title"></v-list-item>
        </template>

        <div>Exmple tag</div>
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
  {
    title: "Sports",
    tags: [
      "runing",
      "soccer",
      "bjj",
      "MMA",
      "hockey",
      "formula1",
      "CFB",
      "barstoolsports",
      "aitsoft",
      "rugbyunion",
      "golf",
      "MTB",
      "cycling",
    ],
  },
  {
    title: "Tv",
    tags: [
      "Naruto",
      "BokuNoHeroAcademia",
      "marvelstudios",
      "tupauldragace",
      "90DaysFiance",
      "dbz",
      "Boruto",
    ],
  },
  {
    title: "Travel",
    tags: [
      "vacouver",
      "brasil",
      "australia",
      "mexico",
      "argentina",
      "melbourne",
      "ottava",
      "korea",
      "ireland",
      "travel",
      "Calgary",
      "portugal",
    ],
  },
  {
    title: "Health & Fitness",
    tags: [
      "orangetheory",
      "bodybuilding",
      "bodyweightfitness",
      "vegan",
      "crossfit",
      "nattyorjuice",
      "EatCheapAndHealthy",
      "loseit",
    ],
  },
  {
    title: "Fashion",
    tags: [
      "MakeupAddiction",
      "Watches",
      "Beauty",
      "BeautyGuruChatter",
      "femalefashionadvice",
      "frugalmalefashion",
      "curlyhair",
      "poshmark",
    ],
  },
];
</script>

<style lang="scss" scoped>
.v-card {
  width: 310px;
  margin-top: 1.75rem;
}
</style>
