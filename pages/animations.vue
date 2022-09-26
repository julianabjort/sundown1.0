<template>
  <div class="flex flex-col space-y-2">
    <div class="w-full flex space-x-2">
      <div class="box1 w-1/2 h-56 border-2"></div>
      <div class="box2 w-1/2 h-56 border-2"></div>
    </div>
    <div class="w-full flex space-x-2">
      <div class="box3 w-1/2 h-56 border-2"></div>
      <div class="box4 w-1/2 h-56 border-2"></div>
    </div>
  </div>
  <!-- <div class="bg-blue-400 w-[300px] h-[300px] relative overflow-hidden">
    <div id="three" class="w-full h-full opacity-0 absolute bg-purple-600">
      <div class="flex">
        <img
          class="w-auto h-full"
          src="../assets/images/meal1.jpeg"
          alt="meal"
        />
        <img
          class="w-auto h-full"
          src="../assets/images/meal2.jpeg"
          alt="meal"
        />
        <img
          class="w-auto h-full"
          src="../assets/images/meal3.jpeg"
          alt="meal"
        />
      </div>
    </div>
  </div> -->
</template>

<script>
export default {
  mounted() {
    let tl = this.$gsap.timeline();
    tl.from(".box1", {
      x: "-30%",
      opacity: 0,
      duration: 0.6,
      ease: "expo",
    });
    tl.from(
      ".box2",
      {
        y: "-30%",
        opacity: 0,
        duration: 0.6,
        ease: "expo",
      },
      0.1
    );
    tl.from(
      ".box4",
      {
        x: "30%",
        opacity: 0,
        duration: 0.6,
        ease: "expo",
      },
      0.2
    );
    tl.from(
      ".box3",
      {
        y: "30%",
        opacity: 0,
        duration: 0.6,
        ease: "expo",
      },
      0.3
    );

    this.$gsap.fromTo(
      "#three",
      {
        x: "100%",
        opacity: 1,
      },
      {
        x: 0,
        opacity: 1,
        duration: 3,
      }
    );
    this.$gsap.fromTo(
      "#three",
      {
        x: 0,
        opacity: 1,
        delay: 3,
      },
      {
        x: "-100%",
        opacity: 1,
        duration: 3,
        delay: 3,
      }
    );
    this.$gsap.fromTo(
      "#three",
      {
        x: "-100%",
        opacity: 1,
        delay: 6,
      },
      {
        x: "-200%",
        opacity: 1,
        duration: 3,
        delay: 6,
      }
    );
  },
};
</script>

<style>
</style>