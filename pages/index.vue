<template>
  <div class="flex flex-col space-y-10">
    <div class="flex space-x-10">
      <!-- Image carousel -->
      <div class="w-3/4 h-64 border-2 p-6">
        <h1 class="heading-1">Images</h1>
      </div>

      <!-- Order flow box -->
      <div class="w-1/4 h-64 border-2 p-6 flex flex-col justify-between">
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
        <input
          type="text"
          name="email"
          class="w-full border-2 rounded-xl my-2 p-1"
        />
        <button class="btn-primary w-1/2">Find</button>
      </div>

      <!-- content box -->
      <div class="w-1/2 h-64 border-2 p-6">
        <h1 class="heading-1">Content box</h1>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>
