<template>
  <div class="bg-gray-200 flex justify-center min-h-screen">
    <div
      class="
        bg-white
        rounded-xl
        w-screen
        md:w-auto
        h-screen
        md:h-auto
        px-8
        pt-6
        shadow-lg
        self-center
        md:mb-4
        flex flex-col
      "
    >
      <p class="mx-auto my-16 text-3xl font-bold">Welcome</p>
      <div class="my-4 flex flex-col">
        <div class="my-5 text-sm">
          <label for="username" class="block text-black">Username</label>
          <input
            type="text"
            autofocus
            id="username"
            class="
              rounded-sm
              px-4
              py-3
              mt-3
              focus:outline-none
              bg-gray-100
              w-full
            "
            placeholder="Username"
            :disabled="loading"
            key="username"
            required
            v-model="username"
            :form-name="loginForm"
            @:keyup.enter="login"
          />
        </div>

        <div class="my-5 text-sm">
          <label for="password" class="block text-black">Password</label>
          <input
            type="password"
            id="password"
            class="
              rounded-sm
              px-4
              py-3
              mt-3
              focus:outline-none
              bg-gray-100
              w-full
            "
            placeholder="Password"
            :disabled="loading"
            required
            v-model="password"
            :form-name="loginForm"
          />
          <div class="flex justify-end mt-2 text-xs text-gray-600">
            <a href="#">Forget Password?</a>
          </div>
        </div>

        <button
          key="submit"
          style="--delay: 3; min-height: 28px"
          :disabled="loading"
          @:click="login"
          class="
            bg-blue-400
            w-full
            mb-16
            transform
            hover:translate-y-1
            transition-transform
            ease-in
            duration-200
            shadow-lg
            text-white
            mt-10
            rounded-sm
          "
        >
          <!-- <Loading custom-class="w-1.5 h-1.5" v-if="loading" /> -->
          <p class="p-3">Login</p>
        </button>

        <div class="flex justify-center mt-16 mb-4">
          <span class="text-gray-600"
            >Don't have an account? <a href="#" class="font-bold">Sign Up</a>
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data: () => ({
    username: "",
    password: "",
    loading: false,
    loginForm: {},
  }),

  methods: {
    login() {
      axios
        .post("http://192.168.239.172/session/login", {
          username: this.username,
          password: this.password,
        })
        .then((res) => this.loginSuccess(res))
        .catch((err) => {
          console.log(err);
        });
    },
  },

  head() {
    return {
      title: "Login",
      meta: [
        {
          hid: "description",
          name: "description",
          content: "Login Page",
        },
      ],
    };
  },
};
</script>

<style>
.btn {
  border-radius: 3rem;
}
</style>
