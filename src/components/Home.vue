<script setup></script>

<template>
  <h1>Welcome to Dataclau</h1>

  <v-card style="margin: 15px 0">
    <v-card-title>
      <v-avatar>
        <img
          src="https://firebasestorage.googleapis.com/v0/b/mantis-project-7c277.appspot.com/o/Screenshot_20230327-202809_Gallery.jpg?alt=media&token=c5ebba52-f2d1-4719-a6f8-b39799b9b677"
        />
      </v-avatar>
      <span class="ml-3">Luis Eduardo Gutierrez</span>
    </v-card-title>
    <v-card-text>
      <div class="d-flex align-items-center">
        <v-icon small class="mr-2">mdi-link-variant</v-icon>
        <a>luis@dataclau.com</a>
      </div>
      <div class="d-flex align-items-center">
        <v-icon small class="mr-2">mdi-office-building</v-icon>
        <span>Dataclau</span>
      </div>
      <div class="d-flex align-items-center">
        <v-icon small class="mr-2">mdi-map-marker</v-icon>
        <span>Sede Manizales</span>
      </div>
    </v-card-text>
  </v-card>

  <div>
    <v-btn to="/users" prepend-icon="mdi-vuetify" stacked>Users</v-btn>
    <v-btn to="/users" prepend-icon="mdi-vuetify" stacked>Sales</v-btn>
    <v-btn to="/users" prepend-icon="mdi-vuetify" stacked>Products</v-btn>
    <v-btn to="/users" prepend-icon="mdi-vuetify" stacked>Analitycs</v-btn>
  </div>
</template>

<style scoped></style>
