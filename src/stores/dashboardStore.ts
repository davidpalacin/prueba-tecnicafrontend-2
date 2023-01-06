import { defineStore } from "pinia";

export const DashboardStore = defineStore("dashboard", () => {
  async function deleteUser(id: number) {
    console.log(`intentas eliminar el id: ${id}`);
  }

  return { deleteUser }
});
