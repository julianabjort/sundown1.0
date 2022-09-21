<template>
  <div class="flex flex-col space-y-10">
    <div class="flex space-x-10">
      <!-- Drinks images-->
      <div class="w-3/4 h-screen border-2 p-6 overflow-auto">
        <div
          class="
            w-full
            h-auto
            p-2
            grid grid-cols-1
            md:grid-cols-2
            lg:grid-cols-3
            gap-2
            grid-rows-auto
            mb-4
          "
        >
          <div v-for="drink in drinks" :key="drink.id">
            <img
              @click="selectDrink(drink)"
              :src="drink.image"
              alt="drink"
              class="
                rounded-md
                w-full
                cursor-pointer
                object-cover
                aspect-square
              "
            />
          </div>
        </div>
      </div>

      <!-- Next box -->
      <div class="w-1/4 h-64 border-2 p-6 flex flex-col justify-between">
        <h1 class="heading-1">Pick date and amount</h1>
        <NuxtLink to="/order">
          <button class="btn-primary w-full">Next</button>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  created() {
    this.fetchDrinks();
  },
  data() {
    return {
      drinks: [],
      selectedDrinks: [],
    };
  },
  methods: {
    async fetchDrinks() {
      const response = await fetch("https://api.punkapi.com/v2/beers");
      const drinks = await response.json();
      this.drinks = drinks.map((drink) => {
        return { name: drink.name, image: drink.image_url, selected: false };
      });
    },
    selectDrink(drink) {
      this.selectedDrinks = [...this.selectedDrinks, { drink }];
      this.$store.commit("setOrder", {
        key: "selectedDrinks",
        value: this.selectedDrinks,
      });
    },
  },
};
</script>

<style>
</style>