<script>
import Bar from "./components/Bar.vue";

export default {
  components: {
    Bar,
  },
};
</script>

<template>
  <v-app>
    <Bar />
    <div class="router-view-wrapper">
      <router-view></router-view>
    </div>
  </v-app>
</template>

<style scoped>
.router-view-wrapper {
  padding-top: 64px;
  width: 60vw;
}
.no-hover:hover {
  background-color: transparent !important;
}
.fixed-top {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 99;
}

header {
  line-height: 1.5;
}

.logo {
  margin: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
