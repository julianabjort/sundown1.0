<template>
  <div>
    <h1 class="heading-1">Receipt</h1>
    <p class="font-bold">Items:</p>
    <p>{{ order.dishTitle }}</p>
    <div v-for="drink in order.selectedDrinks" :key="drink.name">
      <p>{{ drink.name }}</p>
    </div>
    <p class="font-bold">Date:</p>
    <p>{{ formatDate(order.orderDate) }}</p>
    <p class="font-bold">Amount of people:</p>
    <p>{{ order.amountOfPeople }}</p>
    <p class="font-bold">E-mail:</p>
    <p>{{ order.orderEmail }}</p>
    <NuxtLink to="/">
      <button class="btn-primary w-1/3 my-4">Home</button>
    </NuxtLink>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  middleware({ store, redirect }) {
    if (
      store.getters.orderCompleted === false ||
      store.getters.dishCompleted === false
    ) {
      return redirect("/");
    }
  },
  methods: {
    formatDate(date) {
      return new Date(date).toLocaleString("en-US", {
        weekday: "long",
        month: "long",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
      });
    },
  },
  computed: {
    ...mapState(["order"]),
  },
};
</script>

<style>
</style>