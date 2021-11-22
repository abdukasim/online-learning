<template>
  <div
    class="
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
        <router-link to="/login" class="button--green"> Login </router-link>
      </div>
    </div>
  </div>
</template>

<style>
.links {
  padding-top: 15px;
}
</style>
