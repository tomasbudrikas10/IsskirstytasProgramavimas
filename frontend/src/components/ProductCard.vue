<script setup>
const props = defineProps({
    id: Number,
    name: String,
    description: String,
    quantity: Number,
    price: Number,
    image_url: String,
})
const trimmedDescription = props.description.length > 50 ? props.description.substring(0, props.description.length) + "..." : props.description;
</script>
<template>
<div class="productCard">
    <div class="productPhotoContainer">
        <img class="productPhoto" :src="image_url" alt="Product has no image.">
    </div>
    <div class="productTextBox">
        <RouterLink class="productTitle" :to="'/product/' + id">{{ name }}</RouterLink>
        <p class="productDescription">{{ trimmedDescription }}</p>
        <div class="productBottom">
            <div class="productSideBySide">
                <p class="productQuantity">Kiekis: {{ quantity }}</p>
                <p class="productCost">&euro;{{ price }}</p>
            </div>
        <div class="productAddToCart">Į krėpšelį</div>
        </div>
    </div>
</div>
</template>
<style scoped>
.productCard {
    display: flex;
    flex-direction: column;
    text-align: center;
    border: 2px solid black;
    background-color: lightsteelblue;
    height: 500px;
}
.productPhoto {
    border-top-left-radius: 15px;
    border-top-right-radius: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    margin: 0 auto;
}
.productPhotoContainer {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: whitesmoke;
    width: 100%;
    height: 40%;
}
.productCost {
    font-size: 24px;
    font-weight: bold;
    color: red;
}
.productTitle:hover {
    color: blue;
    cursor: pointer;
}
.productQuantity {
    font-size: 24px;
    font-weight: bold;
    color: blue;
}
.productTitle {
    font-size: 24px;
    font-weight: bold;
    color: black;
    text-decoration: none;
}
.productDescription {
    font-size: 16px;
}
.productTextBox {
    flex-direction: column;
    justify-content: space-around;
    flex-grow: 1;
    padding: 20px;
    display: flex;
    gap: 20px;
}
.productBottom {
    display: flex;
    flex-direction: column;
    justify-content: space-betweens;
    gap: 10px;
}
.productSideBySide {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
}
.productAddToCart {
    padding: 10px 20px;
    color: black;
    background: lightgray;
    border: 2px solid black;
    border-radius: 10px;
}
.productAddToCart:hover {
    color: blue;
    border: 2px solid blue;
    cursor: pointer;
}
</style>