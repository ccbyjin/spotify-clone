import { createRouter, createWebHistory, createWebHashHistory} from 'vue-router'
import HomeView from '../views/HomeView.vue'
import SearchView from '../views/SearchView.vue'
import LibraryView from '../views/LibraryView.vue'

const router = createRouter({
  // 上傳至 github page 必須使用這種 history 透過路徑後自動新增的 # 符號以確保 router 正常跳轉
  history: createWebHashHistory(import.meta.env.BASE_URL),
  // 原本在一般情況使用
  // history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: HomeView
    },
    {
      path: '/search',
      component: SearchView
    },
    {
      path: '/library',
      component: LibraryView
    }
  ]
})

export default router
