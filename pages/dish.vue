<template>
  <div class="flex flex-col space-y-10">
    <div class="flex space-x-10">
      <!-- Dish Image-->

      <div class="w-3/4 h-64">
        <img
          :src="dishImage"
          alt="dish"
          class="rounded-md w-full h-full cursor-pointer object-cover"
        />
      </div>

      <!-- Next page box -->
      <div class="w-1/4 h-64 border-2 p-6 flex flex-col justify-between">
        <h1 class="heading-1">Pick drinks</h1>
        <NuxtLink to="/drinks">
          <button class="btn-primary w-full">Next</button>
        </NuxtLink>
      </div>
    </div>

    <!-- Dish information box  -->
    <div class="flex space-x-10">
      <div class="w-full h-64 border-2 p-6 overflow-auto">
        <h1 class="heading-1 mb-6">{{ dishTitle }}</h1>
        <p>{{ dishDesc }}</p>
      </div>
    </div>
    <button @click="fetchDish" class="btn-primary w-1/3">Generate new</button>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  created() {
    if (this.order.isUpdating === false) this.fetchDish();
    else {
      this.dishTitle = this.order.dishTitle;
      this.dishImage = this.order.dishImage;
      this.dishDesc = this.order.dishDesc;
    }
  },
  data() {
    return {
      dishTitle: "",
      dishImage: "",
      dishDesc: "",
    };
  },
  methods: {
    async fetchDish() {
      const response = await fetch(
        "https://www.themealdb.com/api/json/v1/1/random.php"
      );
      const dish = await response.json();
      this.dishTitle = dish.meals[0].strMeal;
      this.dishImage = dish.meals[0].strMealThumb;
      this.dishDesc = dish.meals[0].strInstructions;
      this.$store.commit("setOrder", {
        key: "dishTitle",
        value: this.dishTitle,
      });
      this.$store.commit("setOrder", {
        key: "dishImage",
        value: this.dishImage,
      });
      this.$store.commit("setOrder", {
        key: "dishDesc",
        value: this.dishDesc,
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