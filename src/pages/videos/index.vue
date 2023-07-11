<template>
    <div v-motion-slide-right>
      <div class="font-bold text-2xl text-center mb-3  "> 
        🎥 Videos</div>

        <div class="flex flex-col justify-center mx-4 lg:mx-6 gap-4">
          <iframe v-for="video in mainstore.videos" class="vid"
      :src="`https://www.youtube.com/embed/${extractVideoId(video.url)}`"
      frameborder="0"
      allowfullscreen
    ></iframe>
   
</div>

    </div>
</template>

<script setup>
 import "@mux/mux-player";
import {CreateURL} from '@/utils.js'
import {useMainStore} from '@/stores/mainstore.js'
import 'vidstack/styles/defaults.css'
import 'vidstack/styles/community-skin/video.css'
// the `.js` extension is required.
import 'vidstack/define/media-player.js';

import { defineCustomElements } from 'vidstack/elements';

defineCustomElements();

const mainstore = useMainStore()

    // Helper function to extract the video ID from the URL
    const extractVideoId = (url) => {
      const videoIdRegex = /(?:youtube(?:-nocookie)?\.com\/(?:[^/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=|youtu\.be\/|.*[?&]vi=))([^"&?/ ]{11})/
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
  border-color: rgb(0, 113, 9);
}
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