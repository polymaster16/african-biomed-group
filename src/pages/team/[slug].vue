<template>
    <div v-motion-fade>
   <div >

    <div class="merr text-white">

      <div class="mt-4 mb-4 mx-4  font-bold text-2xl text-left">{{ teamMember.name }}</div>
   
   <div class="flex flex-row justify-center">
 <img
 
             alt="image"
             :src="CreateURL(teamMember.image.asset._ref)"
             class="mb-4 imc"
           />
         </div>
 
           <div class="mx-4 blockstyle">
            <SanityBlocks :blocks="teamMember.bio" :serializers="serializers"  /> 
 
           </div>
 
 
           <div class="blog-post-container3 mx-4 mt-8 mb-8">
           <div class="blog-post-profile">
             <img
               alt="profile"
               :src="CreateURL(teamMember.image)"
               loading="lazy"
               class="blog-post-image"
             />
             <span class="font-bold mx-2">{{ teamMember.name }}</span>
           </div>
         
         </div>
        

    </div>

   
             <!-- <div class="blog-post-container5">
             <button class="btn bg-amber-600">
               <svg viewBox="0 0 877.7142857142857 1024" class="blog-post-icon2">
                 <path
                   d="M694.857 585.143c101.143 0 182.857 81.714 182.857 182.857s-81.714 182.857-182.857 182.857-182.857-81.714-182.857-182.857c0-6.286 0.571-13.143 1.143-19.429l-205.714-102.857c-32.571 30.286-76.571 49.143-124.571 49.143-101.143 0-182.857-81.714-182.857-182.857s81.714-182.857 182.857-182.857c48 0 92 18.857 124.571 49.143l205.714-102.857c-0.571-6.286-1.143-13.143-1.143-19.429 0-101.143 81.714-182.857 182.857-182.857s182.857 81.714 182.857 182.857-81.714 182.857-182.857 182.857c-48 0-92-18.857-124.571-49.143l-205.714 102.857c0.571 6.286 1.143 13.143 1.143 19.429s-0.571 13.143-1.143 19.429l205.714 102.857c32.571-30.286 76.571-49.143 124.571-49.143z"
                 ></path>
               </svg>
               <span>Share</span>
             </button>

             <button  @click="{showComments = !showComments; 
          getComments(); }"
              class="btn bg-green-600 ml-10">
               <svg viewBox="0 0 1024 1024" class="blog-post-icon4">
                 <path
                   d="M365.714 512c0-40.571-32.571-73.143-73.143-73.143s-73.143 32.571-73.143 73.143 32.571 73.143 73.143 73.143 73.143-32.571 73.143-73.143zM585.143 512c0-40.571-32.571-73.143-73.143-73.143s-73.143 32.571-73.143 73.143 32.571 73.143 73.143 73.143 73.143-32.571 73.143-73.143zM804.571 512c0-40.571-32.571-73.143-73.143-73.143s-73.143 32.571-73.143 73.143 32.571 73.143 73.143 73.143 73.143-32.571 73.143-73.143zM1024 512c0 202.286-229.143 365.714-512 365.714-41.714 0-82.286-3.429-120.571-10.286-65.143 65.143-150.286 109.714-248.571 130.857-15.429 2.857-32 5.714-49.143 7.429-9.143 1.143-17.714-5.143-20-13.714v0c-2.286-9.143 4.571-14.857 11.429-21.143 36-33.714 78.857-60.571 93.714-181.143-109.143-66.857-178.857-166.286-178.857-277.714 0-202.286 229.143-365.714 512-365.714s512 163.429 512 365.714z"
                 ></path>
               </svg>
               <span>Comments</span>
             </button>
           </div>
   
   
           <div class="wwx1" v-motion-slide-left v-if="showComments">
         <h2 class="wwx1 font-bold text-lg">Discussion</h2>
         <div v-for="comment in comments" class="wwx1">
         <div class="comment-box">
           <strong class="comment-text-1">@{{ comment.name }}</strong>
           <p class="comment-text-2"> -{{ comment.message }}</p>
         </div>
       </div>
    
       <div class="wwx">
       <FormKit
      v-model="name"
     label="Your name"
     type="text"
     help="Pick a new username"
     validation="required|length:5"
   />
   
   <FormKit
   v-model="message"
     type="textarea"
     label="Your message"
     rows="10"
     placeholder="Remember to write in complete sentences."
     help="Write your comment  !"
     validation="required"
   
   />
   <button @click="postComment" :loading="loading" class="btn btn-secondary">Send</button>
   </div>
   </div>
           </div> -->
   
<!--    
           <div class="bg-gray-200 py-12 ">
    <p class="font-bold text-2xl mx-8 mb-4 text-black">🧲 Related posts</p><v-lazy
     :min-height="50"
     :options="{'threshold':0.5}"
     transition="fade-transition"
     class="mx-6"
   >
   <blog-post-card
   @click="router.push(`/article/${articles[Math.floor(Math.random() * articles.length)].slug.current}`)"
    :text=" articles[Math.floor(Math.random() * articles.length)].description "
    :text1="new Date( articles[Math.floor(Math.random() * articles.length)].publishedAt).toLocaleDateString('en-GB')"
    :heading=" articles[Math.floor(Math.random() * articles.length)].title "
    :image_src="CreateURL(articles[Math.floor(Math.random() * articles.length)].mainImage, cor.x, cor.y)"
   />
   </v-lazy>
   
   <div  v-for="article in articles.slice(0,5)"
       v-bind:key="article.id"
    class="mx-6">
     <blog-post-card3
           @click="router.push(`/article/${article.slug.current}`)"
             :label="categories.filter(x => x._id===article.categories[0]._ref)[0].title"
             :title="article.title"
             :author="`By ${authors.filter(x => x._id=== article.author._ref)[0].name}`"
             :image_src1="CreateURL(article.mainImage)"
             rootClassName="rootClassName2"
           ></blog-post-card3>
   </div>
   </div>
   
    -->
   </div>
   
      </div>
   
   
   
   </template>
   
   <script setup>
   import navbar from '@/components/navbar.vue'
   
   import { SanityBlocks } from 'sanity-blocks-vue-component';
   import {useRoute, useRouter} from 'vue-router'
   import { onBeforeMount, ref, h, reactive, onBeforeUnmount } from 'vue'
   
   import {CreateURL} from '@/utils.js'   
   import { useMainStore } from '@/stores/mainstore.js';

   
   const mainStore = useMainStore()

   
   const serializers = { 
     types: {
       image: (data) => {
         return h("img", { src: CreateURL(data,1200,700) });
       },
   
     },
   };
   
   const router = useRouter()
   const route = useRoute()
   const isMobile = navigator.userAgentData.mobile;
   
   const teamMember = ref()

   const article= ref()
           
   
   onBeforeMount(() => {
  
     teamMember.value = mainStore.teamMembers.filter( x => x.slug.current === route.params.slug)[0]
     console.log(teamMember.value)
   
   })
   
 
   </script>
   
   <style scoped>

   
.merr{
  margin-left: 20px;
  margin-right: 20px;
}
@media (min-width: 768px) {

   .blockstyle{
     line-height: 1.6;
     white-space: break-spaces;
     overflow: visible;
   }
  }
   .imc{
     width: 90%;
   }
   .wwx{
     width:100%;
     padding-left:20px;
     padding-right:20px;
   }
   .comment-box{
     width: 100%;
     background-color: bisque;
     padding: 15px;
     border-radius: 10px;
     font-family: Poppins;
     line-height: 1.5;
     margin-top: 15px;
   }
   
   
   .wwx1{
     width:100%;
     padding-left:20px;
     padding-right:20px;
     margin-bottom: 20px;
     margin-top: 20px;
   
   
   }
   .cont{
       width: 100%;
     height: auto;
       background-image: radial-gradient(circle at center, rgb(230, 248, 255) 0.00%,rgb(255, 255, 255) 100.00%);
   }
   .cont2{
       width: 100%;
     height: auto;
       background-image: radial-gradient(circle at center, rgb(255, 238, 230) 0.00%,rgb(255, 255, 255) 100.00%);
   }
   .cont3{
       width: 100%;
     height: auto;
       background-image: radial-gradient(circle at center, rgb(230, 255, 231) 0.00%,rgb(255, 255, 255) 100.00%);
   }
   .cont4{
       width: 100%;
     height: auto;
       background-image: radial-gradient(circle at center, rgb(228, 228, 228) 0.00%,rgb(255, 255, 255) 100.00%);
   }
   .blog-post-profile {
     display: flex;
     align-items: center;
   }
   .blog-post-image {
     width: var(--dl-size-size-small);
     height: var(--dl-size-size-small);
     object-fit: cover;
     border-radius: var(--dl-radius-radius-round);
   }
   
   
   .blog-post-container {
     width: 100%;
     display: flex;
     overflow: auto;
     min-height: 100vh;
     align-items: center;
     flex-direction: column;
     justify-content: flex-start;
   }
   .blog-post-container1 {
     width: 100%;
     height: auto;
     display: flex;
     align-items: center;
     padding-top: 0px;
     padding-left: 0vw;
     padding-right: 0vw;
     flex-direction: column;
     justify-content: flex-start;
     background-image: radial-gradient(circle at center, rgb(255, 227, 187) 0.00%,rgb(255, 255, 255) 100.00%);
   }
   .blog-post-container2 {
     flex: 0 0 auto;
     width: 100%;
     height: auto;
     display: flex;
     align-items: center;
     padding-top: var(--dl-space-space-twounits);
     padding-left: 10vw;
     padding-right: 10vw;
     flex-direction: column;
     justify-content: center;
   }
   .blog-post-text {
     font-family: Poppins;
     margin-bottom: var(--dl-space-space-unit);
   }
   .blog-post-container3 {
     flex: 0 0 auto;
     width: 100%;
     display: flex;
     align-items: center;
     margin-bottom: var(--dl-space-space-unit);
     justify-content: flex-start;
   }
   .blog-post-profile {
     display: flex;
     align-items: center;
   }
   .blog-post-image {
     width: var(--dl-size-size-small);
     height: var(--dl-size-size-small);
     object-fit: cover;
     border-radius: var(--dl-radius-radius-round);
   }
   .blog-post-text01 {
     font-style: normal;
     font-family: Poppins;
     font-weight: 600;
     margin-left: var(--dl-space-space-halfunit);
   }
   .blog-post-text02 {
     color: #3e3e3e;
     font-style: normal;
     font-family: Poppins;
     font-weight: 600;
     margin-left: var(--dl-space-space-twounits);
   }
   .blog-post-container4 {
     flex: 0 0 auto;
     width: 100%;
     display: flex;
     align-items: center;
     margin-bottom: var(--dl-space-space-unit);
     justify-content: center;
   }
   .blog-post-icon {
     fill: rgb(62, 62, 62);
     width: 15px;
     height: 16px;
   }
   .blog-post-text03 {
     color: rgb(62, 62, 62);
     font-style: italic;
     font-family: Poppins;
     font-weight: 500;
     margin-left: 4px;
   }
   .blog-post-image1 {
     width: 100%;
     height: 100%;
     object-fit: cover;
   }
   .blog-post-text04 {
     font-size: 18px;
     margin-top: var(--dl-space-space-twounits);
     font-family: Poppins;
     line-height: 1.9;
     margin-bottom: var(--dl-space-space-twounits);
   }
   .blog-post-container5 {
     flex: 0 0 auto;
     width: 100%;
     height: 100px;
     display: flex;
     align-self: center;
     align-items: flex-start;
     margin-bottom: var(--dl-space-space-twounits);
     justify-content: center;
   }
   .blog-post-find {
     color: var(--dl-color-gray-white);
     display: flex;
     font-style: normal;
     margin-top: var(--dl-space-space-twounits);
     transition: 0.3s;
     font-weight: 500;
     padding-top: var(--dl-space-space-unit);
     border-width: 0px;
     padding-left: var(--dl-space-space-oneandhalfunits);
     border-radius: 10px;
     padding-right: var(--dl-space-space-oneandhalfunits);
     flex-direction: row;
     padding-bottom: var(--dl-space-space-unit);
     background-color: rgb(236, 71, 0);
   }
   .blog-post-find:hover {
     opacity: 0.5;
   }
   .blog-post-icon2 {
     fill: #ffffff;
     width: 14px;
     height: 18px;
     margin-right: var(--dl-space-space-halfunit);
   }
   .blog-post-find1 {
     color: var(--dl-color-gray-white);
     display: flex;
     font-style: normal;
     margin-top: var(--dl-space-space-twounits);
     transition: 0.3s;
     font-weight: 500;
     margin-left: var(--dl-space-space-fourunits);
     padding-top: var(--dl-space-space-unit);
     border-width: 0px;
     padding-left: var(--dl-space-space-oneandhalfunits);
     border-radius: 10px;
     padding-right: var(--dl-space-space-oneandhalfunits);
     flex-direction: row;
     padding-bottom: var(--dl-space-space-unit);
     background-color: #404040;
   }
   .blog-post-find1:hover {
     opacity: 0.5;
   }
   .blog-post-icon4 {
     fill: #ffffff;
     width: 16px;
     height: 21px;
     margin-right: var(--dl-space-space-halfunit);
   }
   .blog-post-text07 {
     font-size: 28px;
     font-style: normal;
     margin-top: var(--dl-space-space-twounits);
     font-family: Poppins;
     font-weight: 700;
     margin-bottom: var(--dl-space-space-halfunit);
   }
   .blog-post-text09 {
     color: #ec4700;
   }
   .blog-post-text11 {
     color: #ec4700;
   }
   .blog-post-blog {
     width: 100%;
     display: flex;
     padding: var(--dl-space-space-threeunits);
     max-width: var(--dl-size-size-maxwidth);
     align-items: flex-start;
     padding-top: 5px;
     flex-direction: column;
     justify-content: space-between;
   }
   .blog-post-container6 {
     display: flex;
     align-items: center;
     margin-bottom: var(--dl-space-space-twounits);
     flex-direction: column;
     justify-content: space-between;
   }
   .blog-post-container7 {
     display: flex;
     align-items: center;
     margin-bottom: var(--dl-space-space-twounits);
     flex-direction: column;
     justify-content: space-between;
   }
   @media(max-width: 991px) {
     .blog-post-find {
       width: 139px;
       text-align: center;
       margin-right: 0px;
     }
     .blog-post-find1 {
       width: 139px;
       text-align: center;
       margin-right: 0px;
     }
     .blog-post-icon4 {
       margin-right: var(--dl-space-space-halfunit);
     }
   }
   @media(max-width: 767px) {
     .blog-post-container5 {
       height: auto;
       padding-bottom: var(--dl-space-space-unit);
     }
     .blog-post-find {
       width: 137px;
       margin-top: var(--dl-space-space-halfunit);
     }
     .blog-post-find1 {
       width: 137px;
       margin-top: var(--dl-space-space-halfunit);
     }
     .blog-post-blog {
       padding-left: var(--dl-space-space-threeunits);
       padding-right: var(--dl-space-space-threeunits);
     }
   }
   @media(max-width: 479px) {
     .blog-post-text {
       text-align: center;
     }
     .blog-post-container3 {
       align-items: center;
       margin-bottom: 1px;
     }
     .blog-post-text02 {
       color: #484848;
       font-style: normal;
       font-family: Poppins;
       font-weight: 600;
       margin-left: var(--dl-space-space-twounits);
     }
     .blog-post-text03 {
       color: rgb(72, 72, 72);
       font-style: italic;
       font-family: Poppins;
       font-weight: 500;
       margin-left: 4px;
     }
     .blog-post-text07 {
       font-size: 24px;
     }
     .blog-post-text11 {
       color: #ec4700;
     }
     .blog-post-blog {
       padding-top: 5px;
       padding-left: var(--dl-space-space-twounits);
       padding-right: var(--dl-space-space-twounits);
       padding-bottom: var(--dl-space-space-twounits);
     }
   }
   @media(max-width: 474px) {
     .blog-post-find {
       margin-top: var(--dl-space-space-oneandhalfunits);
     }
     .blog-post-find1 {
       margin-top: var(--dl-space-space-oneandhalfunits);
     }
   }
   </style>