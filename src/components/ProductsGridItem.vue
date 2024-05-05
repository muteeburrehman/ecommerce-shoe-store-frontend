<template>
  <div class="product-item">
    <img :src="'http://localhost:8000' + product.imageUrl" />
    <h3 class="product-name">{{ product.name }}</h3>
    <p class="product-price">${{ product.price }}</p>
    <div class="button-container">
      <router-link :to="'/products/' + product.id">
        <button class="view-details-button">View Details</button>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductsGridItem',
  props: ['product']
}
</script>

<style scoped>
.product-item {
  align-items: center;
  border-radius: 8px;
  box-shadow: 0px 2px 5px #888;
  display: flex;
  flex-direction: column;
  justify-content: space-between; /* To distribute content evenly within the item */
  margin-bottom: 2%;
  padding: 20px;
  position: relative;
  width: 32%;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.product-item:hover {
  transform: translateY(-5px);
  box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.1);
}

.product-name {
  margin-bottom: 0;
}

img {
  height: 100px;
  width: 120px;
  transition: transform 0.3s ease;
}

.product-item:hover img {
  transform: scale(1.1);
}

a {
  width: 100%;
}

.button-container {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
}

.view-details-button {
  background-color: #3498db;
  border: none;
  color: white;
  padding: 10px 20px;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.view-details-button:hover {
  background-color: #2980b9;
}

/* Media Queries */
@media (max-width: 576px) {
  /* Small screens */
  .product-item {
    width: 100%;
  }
}

@media (min-width: 577px) and (max-width: 768px) {
  /* Medium screens */
  .product-item {
    width: 49%; /* Adjust as needed */
  }
}

@media (min-width: 769px) and (max-width: 992px) {
  /* Large screens */
  .product-item {
    width: 32%; /* Adjust as needed */
  }
}

@media (min-width: 993px) {
  /* Extra-large screens */
  .product-item {
    width: 24%; /* Adjust as needed */
  }
}
</style>
