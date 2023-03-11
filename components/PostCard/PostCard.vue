<template>
  <v-sheet class="post-card" width="640">
    <div class="rating">
      <v-icon>mdi-arrow-up-bold-outline</v-icon>
      <h4>100</h4>
      <v-icon>mdi-arrow-down-bold-outline</v-icon>
    </div>
    <div class="post-content">
      <div class="post-title">
        <v-sheet style="display: flex; align-items: center">
          <v-avatar icon="mdi-account"></v-avatar>
          <h6>Community</h6>
          <span> . Posted by </span>
          <span> u/user123</span>
          <span>x hours ago</span>
        </v-sheet>
        <v-btn color="blue-darken-3" rounded="pill" size="small">Join</v-btn>
      </div>
      <div class="post-main">
        <v-sheet>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Exercitationem soluta recusandae aut impedit quibusdam ratione
          asperiores earum officiis ut, dolore est, qui ipsam in nostrum cumque
          tempore quae reiciendis debitis?
        </v-sheet>
        <v-img
          src="https://render.fineartamerica.com/images/rendered/default/poster/8/10/break/images/artworkimages/medium/1/smiling-raccoon-paul-freidlund.jpg"
          cover
        >
        </v-img>
      </div>
      <div class="post-footer">
        <v-btn prepend-icon="mdi-comment-outline" variant="flat"
          >Comments</v-btn
        >
        <v-btn prepend-icon="mdi-share-outline" variant="flat">Share</v-btn>
        <v-btn prepend-icon="mdi-content-save-check-outline" variant="flat"
          >Save</v-btn
        >
        <v-btn size="small" variant="flat"
          ><v-icon>mdi-dots-horizontal</v-icon></v-btn
        >
      </div>
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

    .post-title {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-inline-end: 0.5rem;

      .v-btn {
        font-family: Noto Sans, Arial, sans-serif;
        font-size: 12px;
        font-weight: 700;
        letter-spacing: unset;
        line-height: 16px;
        text-transform: unset;
        box-shadow: none;
      }
      h6 {
        font-size: 12px;
        font-weight: 700;
        line-height: 16px;
        display: inline;
        line-height: 20px;
        text-decoration: none;
        vertical-align: baseline;
      }

      span {
        color: #787c7e;
        font-size: 11px;
        margin-inline: 2px;
      }
    }

    .post-main {
      font-weight: bold;
      .v-sheet {
        padding-inline: 0.2rem;
      }
      .v-img {
        max-height: 500px;
      }
    }

    .post-footer {
      .v-btn {
        font-size: 12px;
        font-weight: 700;
        line-height: 16px;
        padding: 4px;
        box-sizing: border-box;
        text-transform: capitalize;
        color: gray;
      }
    }
  }
}
</style>
