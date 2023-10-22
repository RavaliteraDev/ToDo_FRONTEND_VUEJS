<template>
  <v-app>
    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script setup lang="ts"></script>

<style>
  @font-face {
    font-family: 'Lora';
    src: url(./fonts/Lora/static/Lora-Regular.ttf);
  }

  * {
    font-family: 'Lora', serif;
  }
</style>
