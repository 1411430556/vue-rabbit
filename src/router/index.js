// createRouter：创建router实例对象
// createWebHistory：创建history模式的路由
import { createRouter, createWebHistory } from 'vue-router'

import Login from '@/views/Login/index.vue'
import Layout from '@/views/Layout/index.vue'
import Home from '@/views/Home/index.vue'
import Category from '@/views/Category/index.vue'
import SubCategort from '@/views/SubCategory/index.vue'
import Detail from '@/views/Detail/index.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  // path和component对应关系的位置
  routes: [
    {
      path: '/',
      component: Layout,
      children: [
        {
          // 默认二级路由，一级路由显示时它也会显示
          path: '',
          component: Home,
        },
        {
          path: 'category/:id',
          component: Category,
        },
        {
          path: 'category/sub/:id',
          component: SubCategort,
        },
        {
          path: 'detail/:id',
          component: Detail,
        },
      ],
    },
    {
      path: '/login',
      component: Login,
    },
  ],
  // 路由滚动行为定制
  scrollBehavior (to, from, savePosition) {
    if (savePosition) {
      return savePosition
    } else {
      return {
        top: 0,
        behavior: 'smooth',
      }
    }
  },
})

// 路由滚动行为定制
// router.afterEach(() => {
//   window.scrollTo({
//     top: 0,
//     behavior: 'smooth',
//   })
// })

export default router
