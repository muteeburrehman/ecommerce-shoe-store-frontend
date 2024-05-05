<template>
  <div class="grid-wrap">
    <ProductGridItem
        v-for="product in products"
        :key="product.id"
        :product="product"/>
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import ProductGridItem from "@/components/ProductsGridItem.vue";

export default defineComponent({
  name: 'ProductsGrid',
  props: {
    products: {
      type: Array,
      required: true
    }
  },
  components: {
    ProductGridItem
  }
});
</script>

<style scoped>
.grid-wrap {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-top: 16px;
}
</style>
