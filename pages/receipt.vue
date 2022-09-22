<template>
  <div>
    <h1 class="heading-1">Receipt</h1>
    <p class="font-bold">Items:</p>
    <p>{{ order.dishTitle }}</p>
    <div v-for="drink in order.selectedDrinks" :key="drink.name">
      <p>{{ drink.name }}</p>
    </div>
    <p class="font-bold">Date:</p>
    <p>{{ order.orderDate }}</p>
    <p class="font-bold">Amount of people:</p>
    <p>{{ order.amountOfPeople }}</p>
    <p class="font-bold">E-mail:</p>
    <p>{{ order.orderEmail }}</p>
    <NuxtLink to="/order">
      <button class="btn-primary w-1/3 my-4">Back</button>
    </NuxtLink>
    <NuxtLink to="/">
      <button class="btn-primary w-1/3 my-4">Home</button>
    </NuxtLink>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  created() {
    console.log(this.order);
  },
  computed: {
    ...mapState(["order"]),
  },
};
</script>

<style>
</style>