<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <nav>
    <RouterLink to="/login">
      Login
    </RouterLink>

    <RouterLink to="/register">
      Register
    </RouterLink>
  </nav>

  <RouterView></RouterView>


</template>

<style scoped>

</style>
