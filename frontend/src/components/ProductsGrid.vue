<script setup>
import ProductCard from "./ProductCard.vue"
defineProps({
    products: Array
})
</script>
<template>
    <div class="productsGrid">
        <ProductCard v-for="product in products" :id="product.id" :name="product.name" :description="product.description" :quantity="product.quantity" :price="product.price" :image_url="product.image_url"></ProductCard>
    </div>
</template>
<style scoped>
.productsGrid {
    background: lightcyan;
    border: 2px solid black;
    border-radius: 15px;
    padding: 25px;
    min-height: 1100px;
    row-gap: 50px;
    display: grid;
    width: 50%;
    min-width: 800px;
    margin: 50px auto;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: 16px;
}
</style>