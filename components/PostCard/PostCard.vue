<template>
  <v-sheet class="post-card" width="640">
    <div class="rating">
      <v-icon class="like">mdi-arrow-up-bold-outline</v-icon>
      <h4>100</h4>
      <v-icon class="dislike">mdi-arrow-down-bold-outline</v-icon>
    </div>
    <div class="post-content">
      <div class="post-title">
        <v-sheet style="display: flex; align-items: center">
          <v-avatar icon="mdi-account"></v-avatar>
          <v-menu
            close-on-content-click
            close-on-back
            open-on-hover
            location="bottom left"
          >
            <template #activator="{ props: menu }">
              <h6 class="community-tag" v-bind="menu">Community</h6>
            </template>
            <tag-menu />
          </v-menu>
          <span> . Posted by </span>
          <v-menu
            open-on-hover
            close-on-content-click
            close-on-back
            location="bottom left"
          >
            <template #activator="{ props: userCard }">
              <span v-bind="userCard"> u/user123</span>
            </template>
            <user-menu />
          </v-menu>
          <v-tooltip location="top center">
            <template #activator="{ props: tooltip }">
              <span class="community-tag" v-bind="tooltip">x hours ago</span>
            </template>
            <p>some timestamp</p>
          </v-tooltip>
        </v-sheet>
        <v-btn color="blue-darken-3" rounded="pill" size="small">Join</v-btn>
      </div>
      <div class="post-main">
        <v-sheet>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Exercitationem soluta recusandae aut impedit quibusdam ratione
          asperiores earum officiis ut, dolore est, qui ipsam in nostrum cumque
          tempore quae reiciendis debitis?
          <v-chip>Tag</v-chip>
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

<script setup lang="ts">
import TagMenu from "../PopularTags/TagMenu.vue";
import UserMenu from "../UserMenu/UserMenu.vue";


</script>

<style src="./PostCardStyles.scss" lang="scss" scoped></style>
