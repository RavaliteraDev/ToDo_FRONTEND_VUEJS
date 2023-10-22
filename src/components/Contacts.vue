<template>
  <div id="contacts">
    <v-container class="pa-xxl-16 pa-xl-16 pa-lg-6 pa-md-4 pa-sm-4 pa-2">
      <v-row>
        <v-col cols="12" class="d-flex align-center justify-center">
          <h2 class="pt-8">Contacts</h2>
        </v-col>
        <v-col xxl="6" xl="6" lg="6" md="6" cols="12" class="d-flex justify-center px-xxl-16 px-xl-16 pa-lg-6 pa-md-4 pa-sm-4 pa-2" v-for="(contact, index) in contacts" :key="index">
          <contact :icon="contact.icon" :title="contact.title" :description="contact.description"></contact>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script setup lang="ts">
  import Contact from './Contact.vue';

  const contacts = [
    { icon: "mdi-email-plus", title: "email", description: "todo.contact@ravalitera.dev" },
    { icon: "mdi-linkedin", title: "linkedin", description: "RAVALITERA Rijavola" },
  ]
</script>

<style>
  #contacts {
    background-color: #BBDEFB;
  }
</style>
