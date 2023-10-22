<template>
  <div id="home">
    <v-container class="pa-xxl-16 pa-xl-16 pa-lg-6 pa-md-4 pa-sm-4 pa-2">
      <v-row>
        <v-col xxl="6" xl="6" lg="6" md="6" cols="12" class="d-flex align-center justify-center">
          <div class="pa-xxl-16 pa-xl-16 pa-lg-6 pa-md-4 pa-sm-4 pa-2">
            <h1 class="font-weight-bold pb-10">TO DO LIST</h1>
            <p class="pb-10">This is a powerful tool that can keep you focused and on track. It will help you remember all the important things you need to do and break down big goals into manageable tasks.</p>
            <v-btn variant="outlined" prepend-icon="mdi-login" color="#1976D2" size="x-large" class="text-none font-weight-bold mr-xxl-8 mr-xl-8 mr-lg-8 mr-md-8 mr-sm-8 mr-4" rounded="lg" style="background-color: #FFFFFF" elevation="4">Connect</v-btn>
            <v-btn variant="elevated" prepend-icon="mdi-account-plus" color="#1976D2" size="x-large" class="text-none font-weight-bold" rounded="lg" elevation="4">Register</v-btn>
          </div>
        </v-col>

        <v-col xxl="6" xl="6" lg="6" md="6" cols="12" class="d-flex align-center justify-center">
          <img src="/images/todo-illustration.webp" alt="todo-illustration.webp" style="max-width: 100%;">
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<style>
  #home {
    background-color: #BBDEFB;
  }
</style>
