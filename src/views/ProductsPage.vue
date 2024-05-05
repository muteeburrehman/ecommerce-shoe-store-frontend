<template>
  <NavBar/>
  <div id="page-wrap">
    <ProductsGrid :products="products" />
  </div>
</template>

<script>

import { ref, onMounted } from 'vue';
import axios from 'axios';
import NavBar from "@/components/NavBar.vue";
import ProductsGrid from '../components/ProductsGrid.vue';

export default {
  name: 'ProductsPage',
  components: {
    ProductsGrid,
    NavBar
  },
  setup() {
    const products = ref([]);

    onMounted(async () => {
      try {
        const result = await axios.get('http://localhost:8000/shoes/');
        console.log('API response:', result.data); // Log the response data
        products.value = result.data;
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    });

    return {
      products,
    };
  },
};
</script>
