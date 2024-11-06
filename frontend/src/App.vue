<script setup>
import { useRoute, useRouter } from 'vue-router'
import { ref } from 'vue'
const router = useRouter()
const route = useRoute()
const isLoggedIn = ref(false)
console.log(route)
</script>
<template>
  <nav>
    <RouterLink  class="link" to="/">Products</RouterLink>
    <RouterLink v-if="!isLoggedIn" class="link" to="/register">Register</RouterLink>
    <RouterLink v-if="!isLoggedIn" class="link" to="/login">Login</RouterLink>
    <RouterLink v-if="isLoggedIn" class="link" to="/profile">Profile</RouterLink>
    <RouterLink v-if="isLoggedIn" class="link" to="/cart">Cart</RouterLink>
    <RouterLink class="link" to="/orders">Orders</RouterLink>
  </nav>
  <main>
    <RouterView />
  </main>
</template>

<style scoped>
nav {
  display: flex;
  height: 100px;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  gap: 30px;
  background-color: aquamarine;
}
nav .link {
  text-decoration-line: none;
  color: black;
  padding: 10px 30px;
  background-color: lightcyan;
  border: 2px solid black;
}
nav .link:hover {
  color: blue;
  border: 2px solid blue;
}
</style>