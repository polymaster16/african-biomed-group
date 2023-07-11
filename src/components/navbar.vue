<template>
  <div class="drawer drawer-start xc ">
  <input id="my-drawer-4" type="checkbox" class="drawer-toggle" />
  <div class="drawer-content">
    <!-- Page content here -->
  </div> 
  <div class="drawer-side">
    <label for="my-drawer-4" class="drawer-overlay"></label>
    <ul class="menu p-4 w-80 h-full bg-base-200 text-base-content pt-10 font-bold">
      <!-- Sidebar content here -->
      <div class="font-bold text-lg mb-5">
        <!-- <span>    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect></svg>
</span> -->
 </div>
      <img class="mb-5 rounded-full" width="150" src="@/assets/logox.png" alt="" srcset="">
      <li @click="router.push('/')"><a>Home</a></li>
      <li @click="router.push('/about')"><a>About us</a></li>
      <li  @click="router.push('/achievements')"><a>Our achievements</a></li>
      <li  @click="router.push('/team')" ><a >Our team</a></li>
      <li  @click="router.push('/gallery')" ><a >Gallery</a></li>
      <li  @click="router.push('/videos')" ><a >Videos</a></li>

      <li  @click="router.push('/join')" ><a>Join Us</a></li>

      <input type="checkbox" class="toggle toggle-lg ml-4 mt-5 mb-5" @click="props.darkModex" />
      <div class="mt-4">
        <bottom-icons class="mt-4 mx-14"/>

      </div>
      

    </ul>
  </div>
</div>

  <div class="navbar bg-base-100 sticy">
  <div class="flex-none">
  </div>
  <div class="flex-1">
    <img class="ml-3" width="100"
     src="@/assets/logox.png">
  </div>
  <div class="flex-none">
    <label  for="my-drawer-4" class="btn btn-square btn-ghost">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" 
      viewBox="0 0 24 24" class="inline-block w-5 h-5 stroke-current">
      <path stroke-linecap="round" stroke-linejoin="round"
       stroke-width="2" d="M4 6h16M4 12h16M4 18h16">
      </path></svg>
    </label>
  </div>
</div>
</template>

<script setup>
import BottomIcons from './bottom-icons.vue'
import { useRouter } from 'vue-router';
const router = useRouter()


const props = defineProps({
  darkModex: '',
})


</script>

<style  scoped>
.sticy{
  position: sticky;
}
.xc{
  position: absolute;
  z-index: 10;
}
</style>