<template>
  <div id="tutoriels">
    <v-container class="pa-xxl-16 pa-xl-16 pa-lg-6 pa-md-4 pa-sm-4 pa-2">
      <v-row>
        <v-col cols="12" class="d-flex align-center justify-center">
          <h2 class="pt-8">Tutoriels</h2>
        </v-col>
        <v-col xxl="6" xl="6" lg="6" md="6" cols="12" class="d-flex justify-center px-xxl-16 px-xl-16 pa-lg-6 pa-md-4 pa-sm-4 pa-2" v-for="(tutoriel, index) in tutoriels" :key="index">
          <tutoriel :icon="tutoriel.icon" :title="tutoriel.title" :description="tutoriel.description"></tutoriel>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script setup lang="ts">
  import Tutoriel from '@/components/Tutoriel.vue';
  const tutoriels = [
    { icon: "mdi-numeric-1-circle", title: "Create your account", description: "Click the register button and fill the form." },
    { icon: "mdi-numeric-2-circle", title: "Connect into your account", description: "You need to log in and you will have your own space." },
    { icon: "mdi-numeric-3-circle", title: "Create a todo item ", description: "Click the create button and fill the form." },
    { icon: "mdi-numeric-4-circle", title: "Edit a todo item ", description: "Click the edit button to show the edit form." },
    { icon: "mdi-numeric-5-circle", title: "Validate a todo item ", description: "Click the checkbox to validate it." },
    { icon: "mdi-numeric-6-circle", title: "Show all todo items", description: "List of all todo items ordered by importance and date time." },
  ];
</script>

<style>
  #tutoriels {
    background-color: #EEF8FF;
  }
</style>
