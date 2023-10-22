<template>
  <v-app-bar height="80" class="px-8" color="#EEF8FF">
    <template v-slot:prepend>
      <img src="/images/todo-logo.png" height="44" alt="ToDo logo">
    </template>

    <template v-slot:append v-if="!xs">
      <template v-for="(item, index) in menu" :key="index">
        <a :href="item.href" class="link pl-8">{{ item.title }}</a>
      </template>
    </template>

    <template v-slot:append v-if="xs">
      <v-btn icon="mdi-menu" color="#1976D2" variant="flat" size="large" id="menu-activator"></v-btn>
      <v-menu activator="#menu-activator">
        <v-list id="menu-list">
          <v-list-item v-for="(item, index) in menu">
            <v-list-item-title :key="index">
              <a :href="item.href" class="text-none menu">{{ item.title }}</a>
            </v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </template>
  </v-app-bar>
</template>

<script setup lang="ts">
import { useDisplay } from 'vuetify/lib/framework.mjs';

const { xs } = useDisplay();

const menu = [
  { title: "Home", href: "#home" },
  { title: "Tutoriels", href: "#tutoriels" },
  { title: "Contacts", href: "#contacts" },
];
</script>

<style>
  .link {
    color: #1976D2;
    font-weight: bold;
    font-size: 18px;
    text-decoration: none;
  }

  .link:hover {
    text-decoration: underline;
  }

  .menu {
    font-size: 18px;
    color: #1976D2;
    cursor: pointer;
    text-decoration: none;
    font-weight: bold;
  }

  .menu:hover {
    text-decoration: underline;
  }

  #menu-list {
    border: 2px #1976D2 solid;
    margin-top: 10px;
    border-radius: 8px;
  }
</style>
