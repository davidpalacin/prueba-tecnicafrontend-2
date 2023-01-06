
<script lang="ts">
export default {
  mounted() {
    this.name = this.$route.query.name,
    this.role = this.$route.query.role,
    this.accessToken = this.$route.query.accessToken,
    this.userArr = this.getAllUsers()
  },
  data() {
    return {
      name: '',
      role: '',
      accessToken: '',
      userArr: []
    }
  },
  methods: {
    async getAllUsers(){
      const req = await fetch('http://localhost:3000/api/users');
      const res = await req.json();
      this.userArr = res;
    },
    async deleteUser(id: number) {
      const req = await fetch('http://localhost:3000/api/users/delete/' + id,{ method: "delete" });
      const res = await req.json();
      console.log(res);
      location.reload();
    },
    async updateUser(id: number) {
      const req = await fetch('http://localhost:3000/api/users/update/' + id, {
        method: "put",
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({name: "nuevoNombre"})
      });
      const res = await req.json();
      console.log(res);
      location.reload();
    }
  }
}



</script>

<template>
  <div class="dashboard">
    <h1>Visualizando la página de administración para {{ name }}</h1>
    <div v-if="role=='admin'">
      <!-- Crear tabla con todos los usuarios -->
      <table class="admin-table">
        <thead>
          <tr>
            <th>id</th>
            <th>name</th>
            <th>email</th>
            <th>role</th>
          </tr>
        </thead>

        <tbody>
          <tr v-for="user in userArr">
            <td>{{user.id}}</td>
            <td>{{user.name}}</td>
            <td>{{user.email}}</td>
            <td>{{user.role}}</td>
            <td><button @click="deleteUser(user.id)">delete</button></td>
            <td><button @click="updateUser(user.id)">update</button></td>
          </tr>
        </tbody>
      </table>
    </div>

    <div v-else>
      No tienes suficientes permisos para visualizar esta página
    </div>
  </div>
</template>

<style>
.dashboard {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.admin-table td{
  padding: 30px;
  text-align: center;
  border: 1px solid white;
}

button {
  border-radius: 5px;
  padding: 10px;
  cursor: pointer;
}

</style>
