import { defineStore } from "pinia";
import router from "@/router";

export const RegisterStore = defineStore("register", () => {
  async function register(name: string, password: string, email: string, role: string) {
    const data = {
      name: name,
      password: password,
      email: email,
      role: role
    }

    const req = await fetch("http://localhost:3000/api/users/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const res = await req.json();
    if(res.message == `Added ${name} to database`){
      router.push("/login");
    }
  }

  return { register };
});
