<template>
  <v-container>
    <v-row>
      <v-col cols="2">
        <v-icon :icon="icon" color="#1976D2" size="large"></v-icon>
      </v-col>
      <v-col cols="10">
        <h3 style="color: #1976D2;">{{ title }}</h3>
        <p>{{ description }}</p>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
defineProps<{
  icon: string
  title: string
  description: string
}>()
</script>
