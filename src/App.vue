<script setup>
import { useDark, useToggle } from '@vueuse/core';
import { RouterLink, RouterView } from 'vue-router'
import navbar from './components/navbar.vue';
import {useMainStore} from './stores/mainstore'
import { onBeforeMount, ref } from 'vue';
import footerx from './components/footer.vue';

const mainStore = useMainStore()
const loading= ref(true)
const mode = ref('light')

const darkMode = useDark();
const toggleDark = useToggle(darkMode);

function darkModexy(){
  // console.log(darkMode.value)
  toggleDark()
  if(darkMode.value){
      mode.value='dark'
    }
    else {
      mode.value='light'
    }
}

async function fetchAll(){
  await mainStore.fetchBlogPosts()
  await mainStore.fetchTeamMembers()
  await mainStore.fetchGallery()
  await mainStore.fetchVideos()
  loading.value= false

}

onBeforeMount(()=>{
  toggleDark(false)
fetchAll();

})

</script>

<template>
  <div :data-theme="mode" >
   <div  style="height: 90vh;" v-motion-fade v-if="loading" class="flex flex-col justify-center my-14">
    <div class="flex flex-row justify-center">
   <img width="100" src="./assets/Candle.gif" alt="" srcset=""></div>
  </div>
  <div v-motion-slide-left v-else class="folt">
    <navbar :dark-modex="darkModexy"/>
  <RouterView />
  <footerx></footerx>

</div>
</div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@500&display=swap');
.folt{
  font-family: Montserrat;

}


</style>
