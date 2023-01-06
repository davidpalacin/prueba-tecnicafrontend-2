<script setup lang="ts">
import { ref } from 'vue';
import {LoginStore} from '../stores/loginStore';

const loginStore = LoginStore();
const name = ref("");
const pass = ref("");
</script>

<template>
  <main>
    <div class="login">
      <h1>Login</h1>

      <label for="name">Name</label>
      <input type="text" v-model="name">

      <label for="pass">Password</label>
      <input type="password" v-model="pass">

      <button @click="loginStore.login(name, pass)">Login</button>
      <span>Still dont have an account? <a href='/register'>Register</a></span>
    </div>
  </main>
</template>

<style>
.login {
  display: flex;
  gap: 10px;
  justify-content: center;
  flex-direction: column;
  align-items: center;
}
</style>
