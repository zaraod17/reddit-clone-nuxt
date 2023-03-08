<template>
  <v-sheet class="post-card" width="640">
    <div class="rating">
      <v-icon>mdi-arrow-up-bold-outline</v-icon>
      <h4>100</h4>
      <v-icon>mdi-arrow-down-bold-outline</v-icon>
    </div>
    <div>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem
      soluta recusandae aut impedit quibusdam ratione asperiores earum officiis
      ut, dolore est, qui ipsam in nostrum cumque tempore quae reiciendis
      debitis?
    </div>
  </v-sheet>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.post-card {
  display: flex;
  margin-top: 1rem;

  .rating {
    color: gray;

    h4 {
      color: black;
    }
  }
}
</style>
