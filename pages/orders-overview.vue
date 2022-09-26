<template>
  <div>
    <h1 class="heading-1 mb-4">Your Orders</h1>
    <div
      v-for="(order, index) in orders"
      :key="index"
      class="
        bg-gray-100
        flex
        space-x-4
        w-full
        rounded-lg
        mb-4
        p-2
        shadow-sm
        relative
      "
    >
      <div>
        <img
          :src="order.dishImage"
          alt="dish-image"
          class="h-20 w-auto rounded-lg"
        />
      </div>
      <div>
        <p class="text-sm font-bold">Order {{ index + 1 }}</p>
        <li class="text-sm">{{ order.dishTitle }}</li>

        <div v-for="drink in order.selectedDrinks" :key="drink.id">
          <li class="text-sm">{{ drink.name }}</li>
        </div>
        <div v-if="order.amountOfPeople === 1">
          <p class="text-xs mt-2">
            {{ formatDate(order.orderDate) }} ·
            {{ order.amountOfPeople }} person
          </p>
        </div>
        <div v-else>
          {{ formatDate(order.orderDate) }} · {{ order.amountOfPeople }} people
        </div>
      </div>
      <div class="absolute top-1/2 right-2"><button>Update</button></div>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    let allOrders = JSON.parse(localStorage.getItem("orders"));
    this.orders = allOrders.filter(
      (order) => order.orderEmail === this.$store.state.order.orderEmail
    );
  },
  data() {
    return {
      orderNumber: 0,
      orders: [],
    };
  },

  methods: {
    formatDate(date) {
      return new Date(date).toLocaleString("en-US", {
        month: "numeric",
        day: "numeric",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
      });
    },
  },
};
</script>

<style>
</style>