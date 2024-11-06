<script setup>
import { ref, onMounted } from "vue";
const carts = ref(null);

const getCarts = async () => {
  try {
    const response = await fetch('http://localhost:3002/carts');
    if (!response.ok) {
      console.error("Failed to get carts.");
    } else {
      carts.value = await response.json();
    }
  } catch (error) {
    console.error("Failed to get carts.")
  }
}

onMounted(() => {
    getCarts();
});
</script>
<template>
    <h1>Cart view</h1>
    <ul>
  <li v-for="cart in carts">
    {{ cart.id }} - {{ cart.user_id }}
  </li>
</ul>
</template>
<style scoped>
</style>