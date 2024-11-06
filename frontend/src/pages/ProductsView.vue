<script setup>
import { ref, onMounted } from "vue";
import ProductsGrid from "../components/ProductsGrid.vue"
const products = ref(null);
const getProducts = async () => {
  try {
    const response = await fetch('http://localhost:3002/products');
    if (!response.ok) {
      console.error("Failed to get products.");
    } else {
      products.value = await response.json();
    }
  } catch (error) {
    console.error("Failed to get products.")
  }
}

onMounted(() => {
    getProducts()
})
</script>
<template>
<h1 class="title">Prekės</h1>
<ProductsGrid :products="products"></ProductsGrid>
</template>
<style scoped>
.title {
  font-size: 40px;
  text-align: center;
  margin: 30px 0px;
  font-weight: bold;
}
</style>