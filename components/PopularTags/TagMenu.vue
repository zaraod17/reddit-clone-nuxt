<template>
  <v-card>
    <v-card-item>
      <v-sheet class="title">
        <v-icon class="mr-5">mdi-tag-outline</v-icon>
        <v-card-title>Card title</v-card-title>
      </v-sheet>
      <v-sheet class="subtitle">
        <v-sheet class="members">
          <h3>10m</h3>
          <span>Members</span>
        </v-sheet>
        <v-divider vertical></v-divider>
        <v-sheet class="online" style="margin-left: 10px">
          <h3>4k</h3>
          <span>Online</span>
        </v-sheet>
      </v-sheet>
    </v-card-item>
    <v-card-text>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam,
      earum numquam a cum, ad dolores deserunt temporibus ab consectetur nam
      labore exercitationem, enim illum eos reiciendis vel? Amet, deserunt vel.
    </v-card-text>
    <v-card-actions>
      <v-btn color="blue-darken-2" variant="flat" rounded="pill"
        >View Community</v-btn
      >
    </v-card-actions>
  </v-card>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.v-card {
  max-width: 500px;
  .title {
    display: flex;
    align-items: center;
  }

  .subtitle {
    display: flex;
    justify-content: space-between;

    .members,
    .online {
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;

      span {
        font-size: 12px;
        color: grey;
      }
    }
  }

  &-actions {
    justify-content: center;
    .v-btn {
      text-transform: capitalize;
      width: 100%;
    }
  }
}
</style>
