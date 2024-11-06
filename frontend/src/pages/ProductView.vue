<script setup>
import { ref, onMounted } from "vue";
const props = defineProps({
    id: Number
})
const product = ref(null);
const getProducts = async () => {
  try {
    const response = await fetch('http://localhost:3002/products/'+props.id);
    if (!response.ok) {
      console.error("Failed to get product.");
    } else {
      product.value = await response.json();
    }
  } catch (error) {
    console.error("Failed to get product.")
  }
}
</script>
<template>
    <h1>Product view</h1>
</template>
<style scoped>
.product {
    background: lightcyan;
    border: 2px solid black;
    border-radius: 15px;
    padding: 25px;
    height: 1100px;
    width: 800px;
    margin: 50px auto;
}
</style>