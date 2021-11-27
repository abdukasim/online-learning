<template>
  <transition name="slide">
    <div
      class="sidebar w-min shadow-xl md:shadow-none"
      @click="closeSidebarPanel"
      v-if="isPanelOpen"
    >
      <ul class="flex flex-col pt-48 px-8">
        <slot></slot>
      </ul>
    </div>
  </transition>
</template>

<script>
export default {
  data: () => ({}),
  methods: {
    closeSidebarPanel() {
      if (window.innerWidth < 768) {
        this.$store.commit("toggleSidebar");
      }
    },
  },
  computed: {
    isPanelOpen() {
      return this.$store.state.isSidebarOpen;
    },
  },
};
</script>

<style scoped>
.slide-enter-active,
.slide-leave-active {
  transition: transform 0.2s ease;
}

.slide-enter,
.slide-leave-to {
  transform: translateX(-100%);
  transition: all 150ms ease-in 0s;
}
</style>
