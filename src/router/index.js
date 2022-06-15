import { createWebHistory, createRouter } from "vue-router"
import TheHome from "@/pages/TheHome.vue"
import TheBlog from "@/pages/TheBlog.vue"
import PostItem from '@/components/blog/PostItem.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    title: 'Accueil',
    component: TheHome,
  },
  {
    path: '/blog',
    name: 'Blog',
    component: TheBlog,
  },
  {
    path: '/blog/:slug',
    name: 'Article',
    component: PostItem,
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
