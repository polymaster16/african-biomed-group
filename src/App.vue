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

onBeforeMount(()=>{
  toggleDark(false)
    mainStore.fetchBlogPosts()
  mainStore.fetchTeamMembers()
  mainStore.fetchGallery()
})
setTimeout(() => {
  loading.value= false
}, 2000);

</script>

<template>
  <div :data-theme="mode" >
   <div v-motion-fade v-if="loading" class="flex flex-row justify-center my-14">
    <v-progress-circular
    :size="70"
      :width="7"
      color="amber"
      indeterminate
    ></v-progress-circular>
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
