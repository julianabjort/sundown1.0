<template>
  <div class="flex space-x-6 border-2 px-4 h-auto">
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

      <button @click.prevent="completeOrder" class="btn-primary w-1/3 my-4">
        {{ buttonText }}
      </button>

      <p v-for="error in errors" :key="error" class="error">{{ error }}</p>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  middleware({ store, redirect }) {
    if (store.getters.dishCompleted === false) {
      return redirect("/");
    }
  },
  data() {
    return {
      amountOfPeople: 1,
      orderDate: null,
      orderEmail: "",
      buttonText: "Order",
      errors: [],
    };
  },
  mounted() {
    if (this.order.isUpdating === true) {
      this.amountOfPeople = this.order.amountOfPeople;
      this.orderEmail = this.order.orderEmail;
      this.orderDate = new Date(this.order.orderDate);
      this.buttonText = "Update";
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
      this.checkInputs();
      if (this.checkInputs() === true) {
        this.saveToStore();
        this.saveToLocalStorage();
      } else return;
    },
    checkInputs() {
      this.errors = [];
      if (!this.orderEmail) {
        this.errors.push("Please provide an email.");
      } else if (!this.validEmail(this.orderEmail)) {
        this.errors.push("Valid email required.");
      } else {
        return true;
      }
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
    saveToLocalStorage() {
      let orders = JSON.parse(localStorage.getItem("orders"));
      if (orders === null) orders = [];
      if (this.order.isUpdating === true) {
        orders = orders.filter(
          (order) => order.orderEmail !== this.order.orderEmail
        );
        orders.push(this.order);
      } else {
        orders.push(this.order);
      }
      localStorage.setItem("orders", JSON.stringify(orders));
      this.$router.push("/receipt");
    },
    validEmail(email) {
      var re =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
    },
  },
  computed: {
    ...mapState(["order"]),
  },
};
</script>

