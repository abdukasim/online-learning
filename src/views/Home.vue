<template>
  <div
    class="
      bg-gray-200
      my-0
      mx-auto
      min-h-screen
      flex
      justify-center
      items-center
      text-center
    "
  >
    <div>
      <img src="@/assets/images/cape.png" class="logo" alt="" />

      <h2 class="subtitle font-light mt-6 text-lg">
        Temaru Educational Platform
      </h2>
      <div class="links">
        <router-link to="/login" class="">
          <button
            class="
              px-4
              py-2
              rounded-md
              text-sm
              font-medium
              border
              focus:outline-none focus:ring
              transition
              text-green-600
              border-green-600
              hover:text-white hover:bg-green-600
              active:bg-green-700
              focus:ring-green-300
            "
            type="submit"
          >
            Login
          </button>
        </router-link>
      </div>
    </div>
  </div>
</template>

<style>
.links {
  padding-top: 15px;
}
</style>
