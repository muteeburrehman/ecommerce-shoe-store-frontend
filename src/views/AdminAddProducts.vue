<template>
  <div>
    <h2>Add Product</h2>
    <form @submit.prevent="addProduct">
      <div>
        <label for="name">Name:</label>
        <input type="text" id="name" v-model="productName" required />
      </div>
      <div>
        <label for="price">Price:</label>
        <input type="number" id="price" v-model.number="productPrice" required />
      </div>
      <div>
        <label for="imageUrl">Image URL:</label>
        <input type="text" id="imageUrl" v-model="productImageUrl" required />
      </div>
      <button type="submit">Add Product</button>
    </form>
    <p v-if="message">{{ message }}</p>
  </div>
</template>

<script>
import { ref } from 'vue';
import axios from 'axios';

export default {
  name: 'AdminAddProducts',
  setup() {
    const productName = ref('');
    const productPrice = ref(0);
    const productImageUrl = ref('');
    const message = ref('');

    const addProduct = async () => {
      try {
        const response = await axios.post('http://localhost:8000/shoes/', {
          name: productName.value,
          price: productPrice.value,
          imageUrl: productImageUrl.value
        });
        if (response.status === 201) {
          message.value = 'Product added successfully!';
          // Redirect to the products page after successful addition
          // You can use router.push('/products') here if you are using Vue Router
        }
      } catch (error) {
        console.error('Error adding product:', error);
        message.value = 'Error adding product. Please try again.';
      }
    };

    return {
      productName,
      productPrice,
      productImageUrl,
      addProduct,
      message
    };
  }
};
</script>

<style scoped>
/* Add your styles here if needed */
</style>
