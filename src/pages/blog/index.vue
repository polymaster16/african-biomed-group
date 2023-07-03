<template>
   

<div v-motion-slide-right class="bg-green-100 dark:bg-green-900">
<div class="font-bold text-2xl text-center pt-8 mb-6  "> 
   📰 Our blog</div>
 <div class="grid grid-cols-1 lg:grid-cols-3">
 <div v-for="article in 6" class="mb-7">
   <v-card
    class="mx-auto"
    max-width="344"
  >
    <v-img
      src="https://media.licdn.com/dms/image/C4E12AQFkfevPQ7ILRg/article-cover_image-shrink_600_2000/0/1604022350822?e=2147483647&v=beta&t=uSfb14aBp-RT0ADM3RhbehXKELv4VCW-CjkKE_AKDZg"
      height="200px"
      cover
    ></v-img>

    <div class="text-lg font-bold ml-4 mt-3">
     Article title goes here
    </div>

    <v-card-subtitle>
      Article description goes here
    </v-card-subtitle>

    <v-card-actions>
      <v-btn
      size="small"
        color="green-lighten-2"
        variant="text"
      >
        Read more
      </v-btn>

      <v-spacer></v-spacer>

    </v-card-actions>
  </v-card>
</div>
</div>
</div>
</template>

<script setup>

</script>

<style scoped>

</style>