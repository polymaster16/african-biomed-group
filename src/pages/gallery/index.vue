<template>
    <div v-motion-slide-right>
      <div class="font-bold text-2xl text-center mb-3  "> 
        🖼️ Our gallery</div>

        <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 mx-4 gap-4 justify-center">
      <img v-for="galleryImage in mainstore.gallery"
      @click="$router.push(`/gallery/${galleryImage.imagename}`)"
      loading="lazy"
       class="imgn my-1"
       :src="CreateURL(galleryImage.mainImage.asset._ref)" alt="" srcset="">
      </div>

    </div>
</template>

<script setup>
import {CreateURL} from '@/utils.js'
import {useMainStore} from '@/stores/mainstore.js'

const mainstore = useMainStore()
console.log(mainstore.gallery)

</script>

<style scoped>
.imgn{
  width: 200px;
  height: 200px;
  object-fit: cover;
  object-position: center;
}

@media (max-width: 768px) {
  .imgn{
  width: 185px;
  height: 185px;
  object-fit: cover;
  object-position: center;
}
}

</style>