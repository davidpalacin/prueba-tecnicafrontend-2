import { ref, computed } from "vue";
import { defineStore } from "pinia";

export const LoginStore = defineStore("login", () => {
  async function login(name: string, pass: string) {

    console.log(`Intentas loggear con ${name} y ${pass}`);
    const data = {
      name: name,
      password: pass
    }

    const req = await fetch("http://localhost:3000/api/users/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const res = await req.json();

    console.log(res);

  }

  return { login };
});
