import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/pages/Home'
import Test1 from '@/pages/Test1'
import Test2 from '@/pages/Test2'
import Test3 from '@/pages/Test3'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/test1',
    name: 'Test1',
    component: Test1
  },
  {
    path: '/test2',
    name: 'Test2',
    component: Test2
  },
  {
    path: '/test3',
    name: 'Test3',
    component: Test3
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
