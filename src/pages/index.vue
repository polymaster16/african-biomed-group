<template>
    <v-carousel
    :cycle="2000"
    hide-delimiters
    show-arrows="hover"
  >
    <v-carousel-item class="mainImage">
<div class="mainImage">
<div class="shadow">
   <p class="text-white font-extrabold mx-4 text-2xl lg:text-2xl text-center">
      "Transforming Lives  <span class="text-yellow-500">Through</span> 
      Medical Aid: <span class="text-yellow-500"> Join</span>
       African <span class="text-yellow-500">Biomed</span>  Group in  <span class="text-yellow-500">
         Providing
       </span> Hope <span class="text-yellow-500">and</span>
        Healing"
   </p>
   <p class="heroText mt-4 lg:mt-6 hover:scale-125 mb-0">
      <svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" fill="currentColor" class="bi bi-play-circle" viewBox="0 0 16 16"> <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/> <path d="M6.271 5.055a.5.5 0 0 1 .52.038l3.5 2.5a.5.5 0 0 1 0 .814l-3.5 2.5A.5.5 0 0 1 6 10.5v-5a.5.5 0 0 1 .271-.445z"/> </svg>
   </p>
</div></div>
    </v-carousel-item>

    <v-carousel-item>
    <div class="mainImage2 ">
<div class="shadow">
   <p class="text-white font-extrabold mx-4 text-2xl lg:text-2xl text-center">
      Breaking Barriers to Healthcare Access
   </p>
   <p class="heroText mt-4 lg:mt-6 hover:scale-125">
      <svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" fill="currentColor" class="bi bi-play-circle" viewBox="0 0 16 16"> <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/> <path d="M6.271 5.055a.5.5 0 0 1 .52.038l3.5 2.5a.5.5 0 0 1 0 .814l-3.5 2.5A.5.5 0 0 1 6 10.5v-5a.5.5 0 0 1 .271-.445z"/> </svg>
   </p>
</div>
    </div>
    </v-carousel-item>

    

    <v-carousel-item>
    <div class="mainImage3 ">
<div class="shadow">
   <p class="text-white font-extrabold mx-4 text-2xl lg:text-2xl text-center">
      "Improving Lives  <span class="text-green-600">One</span> 
      Medical <span class="text-green-600"> Facility</span>
       at <span class="text-green-600">a</span> time
        "
   </p>
   <p class="heroText mt-4 lg:mt-6 hover:scale-125">
      <svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" fill="currentColor" class="bi bi-play-circle" viewBox="0 0 16 16"> <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/> <path d="M6.271 5.055a.5.5 0 0 1 .52.038l3.5 2.5a.5.5 0 0 1 0 .814l-3.5 2.5A.5.5 0 0 1 6 10.5v-5a.5.5 0 0 1 .271-.445z"/> </svg>
   </p>
</div>
    </div>
   </v-carousel-item>
    <v-carousel-item>
    <div class="mainImage4 ">
<div class="shadow">
   <p class="text-white font-extrabold mx-4 text-2xl lg:text-2xl text-center">
      Providing Essential <span class="text-red-500">Supplies</span>   to <span class="text-red-500">Those</span>  in Need
   </p>
   <p class="heroText mt-4 lg:mt-6 hover:scale-125">
      <svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" fill="currentColor" class="bi bi-play-circle" viewBox="0 0 16 16"> <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/> <path d="M6.271 5.055a.5.5 0 0 1 .52.038l3.5 2.5a.5.5 0 0 1 0 .814l-3.5 2.5A.5.5 0 0 1 6 10.5v-5a.5.5 0 0 1 .271-.445z"/> </svg>
   </p>
</div>
    </div>
   </v-carousel-item>
<v-carousel-item>
    <div class="mainImage5 ">
<div class="shadow">
   <p class="text-white font-extrabold mx-4 text-2xl lg:text-2xl text-center">
      Join Us in Building a Healthier Future Together
   </p>
   <p class="heroText mt-4 lg:mt-6 hover:scale-125">
      <svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" fill="currentColor" class="bi bi-play-circle" viewBox="0 0 16 16"> <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/> <path d="M6.271 5.055a.5.5 0 0 1 .52.038l3.5 2.5a.5.5 0 0 1 0 .814l-3.5 2.5A.5.5 0 0 1 6 10.5v-5a.5.5 0 0 1 .271-.445z"/> </svg>
   </p>
</div>
    </div>
    </v-carousel-item>
  </v-carousel>

  <div class="text-2xl text-center mt-6 mb-6 font-extrabold"> 🌼 About Us</div>

   <p class="mx-4" v-if="false">
       -Come and be part of the African Biomed Group, where we're passionate about transforming
        the healthcare <span v-if="!readMore">...</span>          <div v-if="!readMore" @click="readMore = !readMore" class="text-green font-bold text-sm">Show more</div>
        <div v-if="readMore" v-motion-fade>

        system in Cameroon and other developing countries. With us, you have the 
        chance to make a real difference. 
        <br> <br>
       - As a member, your role will involve educating and 
        training healthcare professionals in various departments, focusing on essential medical 
        hygiene practices and the use and repair of medical equipment that we provide. <br><br>
        - Your valuable materials and financial contributions will help us establish a self-sustaining 
        medical system, benefiting underserved individuals who face numerous challenges.
         Together, we can create a clean and safe environment for healing, while changing lives one at a time.
         <br><br>
         - Join us today and become an instrumental part of this incredible journey. Thank you for considering investing in our cause.
         <div @click="readMore = !readMore" class="text-green font-bold text-sm">Show less</div>

      </div>
      </p>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mx-4">

         <v-card variant="tonal" color="green-lighten-1" >
            <div class="p-4">
               <div class="flex flex-row justify-center mb-3">
              <v-icon  class="text-green-700"  animation="float" scale="6" name="ai-africarxiv-square"></v-icon></div>
            <p class="text-sm">
               At The African Biomed Group, our mission is to make healthcare accessible to all, regardless of socio-economic background. We focus on underserved communities in Africa, like Cameroon, bridging the gap in healthcare.
      </p></div>
      </v-card>

      <v-card variant="tonal" color="grey-darken-2" >
            <div class="p-4">
               <div class="flex flex-row justify-center mb-3" >
              <v-icon class="text-gray-500" animation="float" scale="6" name="fa-hand-holding-medical"></v-icon></div>
            <p class="text-sm">
               Our dedicated team provides vital medical services, education, and training to healthcare professionals, empowering local communities to take charge of their well-being.
      </p></div>
      </v-card>

      <v-card variant="tonal" color="green-lighten-1">
            <div class="p-4">
               <div class="flex flex-row justify-center mb-3">
              <v-icon  class="text-green-700"  animation="float" scale="6" name="md-homerepairservice"></v-icon></div>
            <p class="text-sm">
               Through partnerships, we secure, repair, and deliver medical equipment to areas in need. Join us as a volunteer, partner, or supporter and make a tangible impact on lives.
      </p></div>
      </v-card>

      <v-card variant="tonal" color="grey-darken-2" >
            <div class="p-4">
               <div class="flex flex-row justify-center mb-3">
              <v-icon  class="text-gray-500"  animation="float" scale="6" name="md-groups"></v-icon></div>
            <p class="text-sm">
               Together, let's transform healthcare and uplift communities, one step at a time. Join The African Biomed Group today.      </p></div>
      </v-card>

      </div>
    

      <div class="bg-green-100 dark:bg-green-900 py-7 mt-12">
      <div class="font-bold text-2xl text-center  mb-5 ">🌱 Projects and reallisations</div>

          <div class="flex flex-row justify-center mx-2">
      <div class="grid grid-cols-2 lg:grid-cols-6 self-center gap-4 mt-4">
         
         <v-lazy v-for="post in mainStore.blogPosts" v-bind:key="post._id"
  :min-height="50"
  :options="{'threshold':0.5}"
  transition="fade-transition">
      <div  :style="`background-image: url(${CreateURL(post.mainImage, 1200, 700)})`" class="slideImage">
<RouterLink :to="`/achievements/${post.slug.current}`" class="shadow">
   <div class="font-bold text-xs text-white mx-2 ctx">
  {{ post.title.slice(0,43) }}...
</div>
</RouterLink>
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


<div class="font-bold text-2xl text-center mt-14 mb-6 ">💥 Our impact</div>

<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
<div class="flex flex-row justify-start mx-4 mb-4">
   <v-icon scale="4" color="green" name="oi-feed-heart" />
   <div class="flex flex-col justify-center ml-3">
      <p class="text-2xl font-bold text-green-600 ">200+</p>
   <p>People Getting Full Support</p>
</div>
</div>


<div class="flex flex-row justify-start mx-4 mb-4">
   <v-icon scale="4" color="green" name="pr-money-bill" />
   <div class="flex flex-col justify-center ml-3">
      <p class="text-2xl font-bold text-green-600 ">$75k+</p>
   <p>Spent on Welfare</p>
</div>
</div>


<div class="flex flex-row justify-start mx-4 mb-4">
   <v-icon scale="4" color="green" name="fa-wheelchair" />
   <div class="flex flex-col justify-center ml-3">
      <p class="text-2xl font-bold text-green-600 ">50+</p>
   <p>Wheelchairs</p>
</div>
</div>

<div class="flex flex-row justify-start mx-4 mb-4">
   <v-icon scale="4" color="green" name="fa-wheelchair" />
   <div class="flex flex-col justify-center ml-3">
      <p class="text-2xl font-bold text-green-600 ">20+</p>
   <p>Electric Wheelchairs</p>
</div>
</div>


<div class="flex flex-row justify-start mx-4 mb-4">
   <v-icon scale="4" color="green" name="gi-slot-machine" />
   <div class="flex flex-col justify-center ml-3">
      <p class="text-2xl font-bold text-green-600 ">50+</p>
   <p>Defibrillator</p>
</div>
</div>

<div class="flex flex-row justify-start mx-4 mb-4">
   <v-icon scale="4" color="green" name="md-medicalservices-round" />
   <div class="flex flex-col justify-center ml-4">
      <p class="text-2xl font-bold text-green-600 ">90+</p>
   <p>Miscellaneous Medical Equipment
</p>
</div>
</div>
</div>


<div class="px-4 pt-5 pb-12 bg-gray-300 dark:bg-gray-500 mt-14">
<div class="font-bold text-2xl text-gray-900 text-center mt-6 "> 
   Help us provide support to those who need it most</div>
   <div class="flex flext-row justify-center mt-4">
 <v-btn variant="elevated" size="large" rounded="xl" color="amber-lighten-1"> 
   <v-prepend-icon>  
       <v-icon class="mr-2" scale="1.5"  name="ri-hand-heart-fill" />
</v-prepend-icon>
 <strong>
    Donate now </strong>
   </v-btn>
</div>
</div>

<div class="font-bold text-2xl text-center mt-10"> 
   🔥 Our team</div>

   <div class="my-6 mx-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
   <v-card>
   <div class="mx-4 flex flex-row my-4">
      <img class="rimg"
      loading="lazy"
      src="https://media.licdn.com/dms/image/D5603AQHaY7S9XzH2eg/profile-displayphoto-shrink_200_200/0/1675012857279?e=1691625600&v=beta&t=Kaf5IVdya_WHlt_6Hie7iie7ZEa-rrzKm7ng_evheNU" alt="" srcset="">
   <div class="flex flex-col justify-center mx-4 ">
      <p class="text-xl font-extrabold text-green-700">Alain Lengue
</p>
<p class="text-sm font-thin">Chairman of the group</p>
   </div>
   </div>
</v-card>

<v-card >
   <div class="mx-4 flex flex-row my-4">
      <img class="rimg"
      loading="lazy"
      src="https://media.licdn.com/dms/image/C4E03AQHCq4xINcdbYQ/profile-displayphoto-shrink_800_800/0/1594337151904?e=2147483647&v=beta&t=evz2eiQWuoYS0Z3yjUHFp6q0tyx8Gc_P5mAOb9dMz6M" alt="" srcset="">
      <div class="flex flex-col justify-center mx-4 ">
      <p class="text-xl font-extrabold text-green-700">Luc Ngassam
</p>
<p class="text-sm font-thin">Director of projects</p>
   </div>   </div></v-card>

   <v-card>
   <div class="mx-4 flex flex-row my-4">
      <img class="rimg"
      loading="lazy"
      src="https://mentoring-club-mentors.s3.eu-central-1.amazonaws.com/profilepics/small/0ed7bf8a-4d08-47c7-b5d7-3957340f1c9b.jpg" alt="" srcset="">
      <div class="flex flex-col justify-center mx-4 ">
      <p class="text-xl font-extrabold text-green-700">Eric Yanou
</p>
<p class="text-sm font-thin">Director of operations</p>
   </div>    </div> 
</v-card> </div> 

<div class="secte mb-14 mt-10 flex flex-col justify-center">
   <div class="flex flex-row justify-center">
 <button @click="router.push('/about')" class="btn  glass text-white">Learn more about us </button>
</div>
</div>

<div class="font-bold text-2xl text-center mb-3  "> 
   ⚓ Where are we?</div>
 <div class="px-4 mb-20">
  <div class="hero-content flex-col lg:flex-row mx-21">
    <img style="filter: sepia(100%) hue-rotate(120deg);"
     width="400" src="https://thumbs.dreamstime.com/b/cameroon-map-highly-detailed-vector-administrative-regions-main-cities-roads-31962541.jpg" class=" rounded-lg shadow-2xl" />
    <div class="">
      <h1 class="text-3xl font-bold  lg:mx-1">Cameroon!</h1>
      <p class="py-6  lg:mx-1">In Cameroon, our campaigns and donations have made a lasting impact. Join us in creating change, assisting those in need, and building a better future. Together, we make a difference.</p>
      <div class="flex flex-row justify-start mx-4">
      <v-btn @click="router.push('/achievements')" rounded="full" variant="tonal" color="green-darken-1"><p class="text-sm">⭐ See our achievements</p> </v-btn>
         </div>

   </div>
</div>

<div class="hero-content flex-col lg:flex-row">
    <img style=" filter: sepia(100%) hue-rotate(120deg);"
     width="400" src="https://www.nationsonline.org/maps/USA-Topo-Map.jpg"  class=" rounded-lg shadow-2xl"  />
    <div>
      <h1 class="text-3xl font-bold ">USA!</h1>
      <p class="py-6">Our physical location is 811 S Central Expwy, Ste 201E, Richardson, TX 75080, United States of America. Being based in the US allows us to access medical equipment, perform repairs and refurbishments, and efficiently ship them to Africa. It is also within the US that we primarily raise funds to support our mission.</p>
    </div>
</div>
</div>


<div class="bg-green-100 dark:bg-green-900 pb-8">
<div class="font-bold text-2xl text-center pt-6 mb-6  "> 
   📰 Our Gallery</div>

   <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 mx-4 gap-4 justify-center">
      <img v-for="galleryImage in mainStore.gallery"
      @click="$router.push(`/gallery/${galleryImage.imagename}`)"
      loading="lazy"
       class="imgn my-1"
       :src="CreateURL(galleryImage.mainImage.asset._ref)" alt="" srcset="">
      </div>


      <div class="font-bold text-2xl text-center mb-3 mt-9 "> 
        🎥 Videos</div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-center mx-4 lg:mx-6 gap-4">
          <iframe v-for="video in mainStore.videos" class="vid"
      :src="`https://www.youtube.com/embed/${extractVideoId(video.url)}`"
      frameborder="0"
      allowfullscreen
    ></iframe>
   
</div>

</div>


</template>

<script setup>
   import 'vue3-carousel/dist/carousel.css'
   import footerx from '../components/footer.vue';

import {useMainStore} from '../stores/mainstore'
import { ref } from 'vue';
import {CreateURL} from '../utils'
import { RouterLink, useRouter } from 'vue-router';

const mainStore = useMainStore()
const readMore = ref(false)
const router = useRouter()

const extractVideoId = (url) => {
      const videoIdRegex = /^(?:(?:https?:\/\/)?(?:www\.)?youtube\.com\/shorts\/|https?:\/\/youtu\.be\/)([a-zA-Z0-9_-]{11})/
      const match = url.match(videoIdRegex)
      if (match && match.length === 2) {
        return match[1]
      } else {
        return null
      }
    }



</script>

<style scoped>
.vid{
  width: auto;
  height: 350px;
  border-width: 5px;
  border-color: rgb(96, 96, 96);
}
.secte{
  width: 100vw;
  height: 250px;
  filter: grayscale(100%);
            -webkit-filter: grayscale(100%);
  background-position: center;
  background-size: cover;
   background-image: url('https://elephantinthelab.org/wp-content/uploads/2018/11/A_group_of_African_students_working_in_the_lab.jpg');
}
.rimg{
   border-radius: 50%;
   border-width: 4px;
   border-style: solid;
   border-color: rgb(46, 160, 40);
   background-position: center;
   width: 120px;
}
.ctx{
   margin-top: 135px;
}
.slideImage{
   background-image: url('https://img.freepik.com/premium-vector/blank-a4-paper-template-brochure-mockup_97886-7353.jpg');
 background-position: center;
 width: 180px;
 height: 180px;
 background-size: cover;
}
 .mainImage{
 background-image: url('https://cdn.pixabay.com/animation/2023/02/20/01/27/01-27-16-323_512.gif');
 background-position: center;
 width: 100%;
 height: 100%;
 background-size: cover;
 }
 .mainImage2{
 background-image: url('@/assets/fck.png');
 background-position: center;
 width: 100%;
 height: 100%;
 background-size: cover;
 }

 .mainImage3{
 background-image: url('@/assets/tck.png');
 background-position: center;
 width: 100%;
 height: 100%;
 background-size: cover;
 }

 
 .mainImage4{
 background-image: url('@/assets/ccs.png');
 background-position: center;
 width: 100%;
 height: 100%;
 background-size: cover;
 }
 .mainImage5{
 background-image: url('@/assets/doktor.png');
 background-position: center;
 width: 100%;
 height: 100%;
 background-size: cover;
 }

 .shadow{
   width: 100%;
   height: 100%;
   background-color:  rgb(0, 0, 0, 0.2);
   @apply flex flex-col justify-center
 }

 .heroText{
   @apply flex flex-row justify-center text-white font-extrabold mx-4 text-2xl lg:text-2xl
 }

 .titr{
   font-weight: bolder;
 }



</style>