<template>
    <div v-motion-slide-right>

        <div class="font-bold text-2xl text-center mt-10"> 
   🔥 Our team</div>

   <div class="my-6 mx-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
   <v-card v-for="member in mainStore.teamMembers">
   <router-link :to="`team/${member.slug.current}`" class="mx-4 flex flex-row my-4">
      <img class="rimg"
      loading="lazy"
      :src="CreateURL(member.image)" alt="" srcset="">
   <div class="flex flex-col justify-center mx-4 ">
      <p class="text-xl font-extrabold text-green-700">{{ member.name }}
</p>
<p class="text-sm font-thin">{{ member.role }}</p>
   </div>
   </router-link>
</v-card>




</div>
    </div>
</template>

<script setup>
  import {useMainStore} from '@/stores/mainstore'
  import { CreateURL } from '@/utils';
  import { RouterLink } from 'vue-router';
  const mainStore = useMainStore()
</script>

<style  scoped>
.rimg{
   border-radius: 50%;
   border-width: 4px;
   border-style: solid;
   border-color: rgb(46, 160, 40);
   background-position: center;
   width: 120px;
}
</style>