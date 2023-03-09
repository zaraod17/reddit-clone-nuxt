<template>
  <v-sheet class="post-card" width="640">
    <div class="rating">
      <v-icon>mdi-arrow-up-bold-outline</v-icon>
      <h4>100</h4>
      <v-icon>mdi-arrow-down-bold-outline</v-icon>
    </div>
    <div class="post-content">
      <div>
        <v-avatar icon="mdi-account"></v-avatar>
        <span>Community</span>
        <span>Posted by u/user123 x hours ago</span>
        <v-btn>Join</v-btn>
      </div>
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
    .v-icon {
      cursor: pointer;
    }

    h4 {
      color: black;
    }
  }
  .post-content {
    padding-left: 1rem;
  }
}
</style>
