<template>
  <div class="flex space-x-10 border-2 p-6 h-96">
    <!-- Date picker-->
    <div class="w-1/3 p-6">
      <h1 class="heading-1">Date picker</h1>
    </div>

    <!-- Select amount of people -->
    <div class="w-2/3 p-6 space-y-3">
      <h1 class="heading-1">Select amount of people</h1>
      <div class="flex">
        <button @click="decrement">-</button>
        <p class="font-bold text-4xl">{{ amountOfPeople }}</p>
        <button @click="increment">+</button>
      </div>
      <label for="email" class="mb-2">Enter e-mail</label>
      <input type="text" name="email" class="w-full border-2 rounded-xl p-1" />

      <NuxtLink to="/receipt">
        <button class="btn-primary w-1/3 my-4">Order</button>
      </NuxtLink>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      amountOfPeople: 1,
    };
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
  },
};
</script>

