import { createRouter, createWebHistory } from 'vue-router'
import AuthComponent from '@/views/AuthComponent.vue'
import IndexComponent from '@/views/IndexComponent.vue'
import MyProfileComponent from '@/views/MyProfileComponent.vue'
import UserProfileComponent from '@/views/UserProfileComponent.vue'
import MessageComponent from '@/views/MessageComponent.vue' 

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/auth',
      name: 'auth',
      component: AuthComponent
    },
    {
      path: '/base',
      name: 'base',
      component: IndexComponent
    },
    {
      path: '/base',
      name: 'base',
      component: MessageComponent
    },
    {
      path: '/base',
      name: 'base',
      component: MyProfileComponent
    },
    {
      path: '/base',
      name: 'base',
      component: UserProfileComponent
    }
  ]
})

export default router
