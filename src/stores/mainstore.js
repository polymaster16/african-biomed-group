import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { client } from '../client'

export const useMainStore = defineStore('mainstore', () => {
  const count = ref(0)
  const blogPosts = ref([])
  const teamMembers = ref([])
  const gallery = ref([])


  async function fetchBlogPosts() {
    try {
        blogPosts.value  = 
      await client.fetch('*[_type == "blog-post"]');
    //localStorage.setItem('@articles', JSON.stringify(articles.value))
        console.log(blogPosts.value)

    } catch (error) {
      //  fetchArticles()
      console.log(error, 'In article.js')
    }
   
  }

  
  async function fetchTeamMembers() {
    try {
        teamMembers.value  = 
      await client.fetch('*[_type == "team"]');
    //localStorage.setItem('@articles', JSON.stringify(articles.value))
        console.log(teamMembers.value)
    } catch (error) {
      //  fetchArticles()
      console.log(error, 'In article.js')
    }
   
  }

   
  async function fetchGallery() {
    try {
        gallery.value  = 
      await client.fetch('*[_type == "gallery"]');
    //localStorage.setItem('@articles', JSON.stringify(articles.value))
        console.log(gallery.value)
    } catch (error) {
      //  fetchArticles()
      console.log(error, 'In article.js')
    }
   
  }



  return { count, blogPosts, fetchBlogPosts, teamMembers, fetchTeamMembers, gallery, fetchGallery }
})
