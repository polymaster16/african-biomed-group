<template>
  
    <div v-motion-slide-right class="bg-orange-100 dark:bg-gray-800 py-14 ">
        <div class="font-bold text-2xl text-center  mb-5 ">🌱 Projects and reallisations</div>
  
            <div class="flex flex-row justify-center mx-2">
        <div class="grid grid-cols-2 lg:grid-cols-6 self-center gap-4 mt-4">
           
           <v-lazy v-for="post in mainStore.blogPosts" v-bind:key="post._id"
    :min-height="50"
    :options="{'threshold':0.5}"
    transition="fade-transition">
        <div  :style="`background-image: url(${CreateURL(post.mainImage, 1200, 700)})`" class="slideImage">
  <div class="shadow">
     <div class="font-bold text-xs text-white mx-2 ctx">
    {{ post.title.slice(0,43) }}...
  </div>
  </div>
        </div>
        </v-lazy>
  
     </div>
  </div>   
  
  <div class="mx-4 mt-4">
  We Collect Used Medical Equipment from U.S and These Equipment needs minor and major repairing we need your support to do such repairing and ship them to Cameroon.
  <br> <br>
  Never the less, you can see our current achivements so far 
  </div>
  </div>
  
  </template>
  
  <script setup>
  import {useMainStore} from '@/stores/mainstore'
  import { CreateURL } from '@/utils';
  const mainStore = useMainStore()
  </script>
  
  <style scoped>
  .shadow{
     width: 100%;
     height: 100%;
     background-color:  rgb(0, 0, 0, 0.2);
     @apply flex flex-col justify-center
   }
   .slideImage{
     background-image: url('https://img.freepik.com/premium-vector/blank-a4-paper-template-brochure-mockup_97886-7353.jpg');
   background-position: center;
   width: 180px;
   height: 180px;
   background-size: cover;
  }
  .ctx{
     margin-top: 135px;
  }
  </style>