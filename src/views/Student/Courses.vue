<template>
  <div>
    <iframe
      class="w-full"
      height="450"
      loading="lazy"
      src="https://www.youtube.com/embed/Uszj_k0DGsg"
      title="YouTube video player"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    ></iframe>
    <div class="mt-6 rounded-lg bg-white shadow-md">
      <div class="p-4 space-y-2">
        <p class="text-xl">
          Git for Professionals Tutorial - Tools & Concepts for Mastering
          Version Control with Git
        </p>
        <p class="text-base text-gray-500">ICT, Lesson 1</p>
        <hr />
      </div>
      <div class="pb-2 px-4">
        <p class="text-xl">Transcript</p>

        <Stagger height="auto">
          <div v-if="!showMore" key="showmorenot">
            <p class="py-2 font-light leading-relaxed">
              {{ transcript.slice(0, 200) }}
            </p>
            <a
              href="#"
              class="uppercase text-gray-500 text-sm"
              @click.prevent="showMore = !showMore"
              >Show more</a
            >
          </div>
          <div v-else key="showmore">
            <p class="py-2 font-light leading-relaxed" v-html="transcript"></p>
            <a
              href="#"
              class="uppercase text-gray-500 text-sm"
              @click.prevent="showMore = !showMore"
              >Show less</a
            >
          </div>
        </Stagger>

        <hr class="mt-3" />
      </div>

      <div class="px-4 py-2">
        <p class="text-xl">Homework</p>
        <button
          class="my-2 rounded-full hover:bg-gray-400 py-3 px-4 bg-gray-200"
        >
          Exercise 1
        </button>
        <button
          class="m-2 rounded-full hover:bg-gray-400 py-3 px-4 bg-gray-200"
        >
          Exercise 2
        </button>
      </div>
    </div>
    <div class="mt-6 rounded-lg bg-white shadow-md"></div>
  </div>
</template>

<script>
export default {
  data: () => ({
    transcript: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, vero
          quo consequuntur recusandae aperiam iusto iure deleniti nostrum
          consectetur. Eius, quos delectus. Quis qui ratione veritatis? Quod
          amet consequuntur ipsam officia quisquam aliquam! Illum quia numquam,
          dolorum aperiam facere quaerat molestias eaque error adipisci vero!
          Nulla debitis molestias dicta illum dolore, molestiae eaque nesciunt
          dolorem blanditiis sequi adipisci autem! Cupiditate fugiat, vitae
          commodi tempore, alias debitis quos consequuntur labore ea praesentium
          minima aperiam, architecto odio nihil ipsa saepe similique
          necessitatibus dolorum numquam optio qui vero perspiciatis!
          Consequuntur corrupti autem, porro corporis incidunt rerum! Maiores,
          aliquid sint. Sit, minima alias. Reprehenderit.`,
    showMore: false,
  }),
};
</script>

<style></style>
