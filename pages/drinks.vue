<template>
  <div class="flex flex-col space-y-6">
    <div class="flex space-x-6">
      <!-- Drinks images-->
      <div class="w-3/4 h-screen border-2 rounded-lg p-1 overflow-auto">
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
          <div v-for="drink in drinks" :key="drink.id" class="relative">
            <div
              @click="selectDrink(drink)"
              class="
                z-0
                w-full
                aspect-square
                relative
                cursor-pointer
                rounded-lg
                bg-gray-100
                py-2
                shadow-sm
              "
            >
              <div v-if="drink.selected">
                <MdCheckmarkCircleIcon
                  w="35px"
                  h="35px"
                  class="
                    absolute
                    top-2
                    right-2
                    fill-green-600
                    z-20
                    cursor-pointer
                  "
                />
              </div>
              <img
                :src="drink.image"
                alt="drink"
                class="
                  rounded-md
                  w-auto
                  cursor-pointer
                  object-fit
                  h-full
                  z-10
                  m-auto
                "
              />
            </div>
          </div>
        </div>
      </div>

      <!-- Next box -->
      <div class="w-1/4 h-64 border-2 p-6 flex flex-col justify-between">
        <h1 class="heading-1">Pick date and amount</h1>
        <p v-for="error in errors" :key="error" class="error">
          {{ error }}
        </p>
        <button @click="completeDrinksOrder" class="btn-primary w-full">
          Next
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import MdCheckmarkCircleIcon from "vue-ionicons/dist/md-checkmark-circle.vue";
import { mapState } from "vuex";
export default {
  components: {
    MdCheckmarkCircleIcon,
  },
  middleware({ store, redirect }) {
    if (store.getters.dishCompleted === false) {
      return redirect("/");
    }
  },
  created() {
    this.fetchDrinks();
    if (this.order.isUpdating === true) {
      this.selectedDrinks = this.order.selectedDrinks;
    }
  },
  data() {
    return {
      drinks: [],
      selectedDrinks: [],
      errors: [],
    };
  },
  methods: {
    async fetchDrinks() {
      const response = await fetch("https://api.punkapi.com/v2/beers");
      const drinks = await response.json();
      this.drinks = drinks.map((drink) => {
        const selected = this.selectedDrinks.find(
          (selectedDrink) => selectedDrink.name === drink.name
        );
        return {
          name: drink.name,
          image: drink.image_url,
          selected,
        };
      });
    },
    selectDrink(drink) {
      console.log(drink.name);
      if (!drink.selected) {
        drink.selected = true;
        this.selectedDrinks = [...this.selectedDrinks, drink];
      } else {
        this.selectedDrinks = this.selectedDrinks.filter(
          (selectedDrink) => selectedDrink.name !== drink.name
        );
        drink.selected = false;
      }
    },

    completeDrinksOrder() {
      this.$store.commit("setOrder", {
        key: "selectedDrinks",
        value: this.selectedDrinks,
      });
      this.$router.push("/order");
    },
    // checkInputs() {
    //   this.errors = [];
    //   if (this.selectedDrinks.length) {

    //   } else {
    //     this.errors.push("Please select at least one drink");
    //   }
    // },
  },
  computed: {
    ...mapState(["order"]),
  },
};
</script>

<style>
</style>