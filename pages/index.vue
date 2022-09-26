<template>
  <div class="flex flex-col space-y-10">
    <div class="flex space-x-10 h-80">
      <!-- Image carousel -->
      <div class="w-2/3">
        <ssr-carousel loop show-dots show-arrows>
          <div :index="1">
            <img
              src="../assets/images/meal1.jpeg"
              alt=""
              class="w-full object-cover h-80 rounded-md"
            />
          </div>
          <div :index="2">
            <img
              src="../assets/images/meal2.jpeg"
              alt=""
              class="w-full h-80 object-cover rounded-md"
            />
          </div>
          <div :index="3">
            <img
              src="../assets/images/meal3.jpeg"
              alt=""
              class="w-full h-80 object-cover rounded-md"
            />
          </div>
          <div :index="4">
            <img
              src="../assets/images/meal4.jpeg"
              alt=""
              class="w-full h-80 object-cover rounded-md"
            />
          </div>
        </ssr-carousel>
      </div>
      <!-- Order flow box -->
      <div class="w-1/3 border-2 p-6 flex flex-col justify-between">
        <h1 class="heading-1">Order flow box</h1>
        <NuxtLink to="/dish">
          <button class="btn-primary w-full">Order</button>
        </NuxtLink>
      </div>
    </div>
    <div class="flex space-x-10">
      <!-- find your order  -->
      <div class="w-1/2 h-64 border-2 p-6">
        <h1 class="heading-1 mb-6">Find your order</h1>
        <label for="email" class="mb-2">Enter e-mail</label>
        <p v-for="error in errors" :key="error">{{ error }}</p>
        <input
          type="text"
          v-model="inputEmail"
          name="email"
          class="w-full border-2 rounded-xl my-2 p-1"
        />
        <button @click="updateOrder" class="btn-primary w-1/2">Find</button>
      </div>

      <!-- content box -->
      <div class="w-1/2 h-64 border-2 p-6">
        <h1 class="heading-1">Content box</h1>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      inputEmail: "",
      errors: [],
    };
  },
  methods: {
    updateOrder() {
      this.errors = [];
      let allOrders = JSON.parse(localStorage.getItem("orders"));
      const orders = allOrders.filter(
        (order) => order.orderEmail === this.inputEmail
      );

      const order = orders[0];
      if (orders.length === 1) {
        order.isUpdating = true;
        this.$store.commit("setOrder", order);
        this.$router.push("/dish");
      } else if (orders.length > 1) {
        this.$store.commit("setOrder", {
          key: "orderEmail",
          value: order.orderEmail,
        });
        this.$router.push("/orders-overview");
      } else {
        this.errors.push("No orders associated with this email");
      }
    },
  },
};
</script>
