<template>
  <div class="flex space-x-10 border-2 px-4 py-2 h-auto">
    <!-- Date picker-->
    <div class="w-1/2 p-6">
      <h1 class="heading-1 mb-4">When?</h1>
      <v-date-picker
        v-model="orderDate"
        mode="dateTime"
        :valid-hours="{ min: 16, max: 23 }"
        is24hr
      />
    </div>

    <!-- Select amount of people -->
    <div class="w-1/2 p-6 space-y-3">
      <h1 class="heading-1">How many people?</h1>
      <div class="flex">
        <button @click="decrement">-</button>
        <p class="font-bold text-4xl">{{ amountOfPeople }}</p>
        <button @click="increment">+</button>
      </div>
      <label for="email" class="mb-2">Enter e-mail</label>
      <input
        type="email"
        v-model="orderEmail"
        name="email"
        class="w-full border-2 rounded-xl p-1"
      />

      <NuxtLink to="/receipt">
        <button @click.prevent="completeOrder" class="btn-primary w-1/3 my-4">
          Order
        </button>
      </NuxtLink>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  components: {},
  data() {
    return {
      amountOfPeople: 1,
      orderDate: null,
      orderEmail: "",
    };
  },
  mounted() {
    if (this.order.isUpdating === true) {
      this.amountOfPeople = this.order.amountOfPeople;
      this.orderEmail = this.order.orderEmail;
      this.orderDate = new Date(this.order.orderDate);
    } else {
      this.orderDate = new Date();
    }
  },
  methods: {
    decrement() {
      if (this.amountOfPeople > 1)
        this.amountOfPeople = this.amountOfPeople - 1;
    },
    increment() {
      if (this.amountOfPeople < 10)
        this.amountOfPeople = this.amountOfPeople + 1;
    },
    completeOrder() {
      this.saveToStore();
      let orders = JSON.parse(localStorage.getItem("orders"));
      if (orders === null) orders = [];
      orders = orders.filter(
        (order) => order.orderEmail !== this.order.orderEmail
      );
      orders.push(this.order);
      localStorage.setItem("orders", JSON.stringify(orders));
      this.$router.push("/receipt");
    },
    saveToStore() {
      this.$store.commit("setOrder", {
        key: "amountOfPeople",
        value: this.amountOfPeople,
      });
      this.$store.commit("setOrder", {
        key: "orderEmail",
        value: this.orderEmail,
      });
      this.$store.commit("setOrder", {
        key: "orderDate",
        value: this.orderDate,
      });
    },
  },
  computed: {
    ...mapState(["order"]),
  },
};
</script>

