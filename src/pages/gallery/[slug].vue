<template>
    <div v-motion-slide-right class="ss">
      <div class="font-bold text-2xl text-center mb-3 "> 
        🖼️ Our gallery</div>

        <div class="mx-6 ss">
      <img
      loading="lazy"
       class="imgn my-1"
       :src="CreateURL(zeImage.mainImage.asset._ref)" alt="" srcset="">
            <p class="font-bold text-2xl text-center mt-4">
                {{ zeImage.imagename }}
            </p>
            <p class="mt-2">{{ zeImage.description }}</p>

      </div>

    </div>
</template>

<script setup>
import {CreateURL} from '@/utils.js'
import {useMainStore} from '@/stores/mainstore.js'
import { useRoute } from 'vue-router';

const mainstore = useMainStore()
console.log(mainstore.gallery)
const route = useRoute()

const zeImage = mainstore.gallery.filter( x => x.imagename === route.params.slug)[0]

</script>

<style scoped>
.ss{
  margin-left: 200px;
  margin-right: 200px;
}
.imgn{
  width: 100%;
  height: auto;
  object-fit: cover;
  object-position: center;
}

@media (max-width: 900px) {
  .ss{
  margin-left: 0px;
  margin-right: 0px;
}
}


</style>