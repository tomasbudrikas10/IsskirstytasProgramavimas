<script setup>
import { ref, onMounted } from "vue";
const orders = ref(null);

const getOrders = async () => {
  try {
    const response = await fetch('http://localhost:3002/orders');
    if (!response.ok) {
      console.error("Failed to get orders.");
    } else {
      orders.value = await response.json();
    }
  } catch (error) {
    console.error("Failed to get orders.")
  }
}

onMounted(() => {
    getOrders();
});
</script>
<template>
    <h1>Orders view</h1>
    <ul>
  <li v-for="order in orders">
    {{ order.id }} - {{ order.order_date }} - {{ order.user_id}} - {{ order.state_id }}
  </li>
</ul>
<hr>
</template>
<style scoped>
</style>