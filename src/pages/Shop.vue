<template>
  <div class="wrapper-content wrapper-content--fixed">
    <section>
      <div class="container">
        <h1>Shop Page</h1>
        <div class="item__wrapper">
          <ShopItem v-for="item in shopList" :key="item.id" :product="item" />
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import ShopItem from "../components/ShopItem";

export default {
  components: { ShopItem },
  data() {
    return {
      shopList: null,
    };
  },
  created() {
    this.shopList = this.$store.getters.getShopList;
  },
};
</script>

