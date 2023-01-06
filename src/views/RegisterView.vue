
<script setup lang="ts">
import { ref } from 'vue';
import { RegisterStore } from '../stores/registerStore';

const registerStore = RegisterStore();

const name = ref();
const password = ref();
const email = ref();
const role = 'user';
</script>

<template>
  <div class="register">
    <h1>Regístrate</h1>
  
    <label for="name">Nombre</label>
    <input type="text" v-model="name">
  
    <label for="password">Contraseña</label>
    <input type="password" v-model="password">
  
    <label for="name">Email</label>
    <input v-model="email" type="text">

    <button @click="registerStore.register(name, password, email, role)">Completar registro</button>

    <span>Already have an account? <a href="/login">Login</a> </span>

  </div>
</template>

<style>
.register {
  display: flex;
  gap: 10px;
  justify-content: center;
  flex-direction: column;
  align-items: center;
}
</style>
