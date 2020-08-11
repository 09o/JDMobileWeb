import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

let router = new VueRouter({
  routes: [
    {
      path: '/',
      meta: { title: '首页' },
      component: () => import(/* webpackChunkName: "test" */ '@/page/Home')
    },
    {
      path: '/categories',
      meta: { title: '分类' },
      component: () => import(/* webpackChunkName: "test" */ '@/page/Classify')
    },
    {
      path: '/login',
      meta: { title: '登录' },
      component: () => import(/* webpackChunkName: "test" */ '@/page/Login')
    },
    // {
    //   // 动态路径参数
    //   path: '/detail/:id',
    //   // 组件可以使用props接收id
    //   props: true,
    //   meta: { title: '详情' },
    //   component: () => import(/* webpackChunkName: "test" */ '@/page/Detail')
    // },
    {
      // 动态路径参数
      path: '/detail',
      // 组件可以使用props接收id
      // props: true,
      meta: { title: '详情' },
      component: () => import(/* webpackChunkName: "test" */ '@/page/Detail')
    }
  ]
})

router.beforeEach((to, from, next) => {
  // let progress = document.querySelector('#progress')
  // if (progress) progress.style.display = 'block'
  if (to.meta && to.meta.title) {
    document.title = to.meta.title
  }
  next()
  // setTimeout(() => {
  //   next()
  // }, 600)
})

// 路由跳转之后会被此处拦截
// router.afterEach(() => {
//   let progress = document.querySelector('#progress')
//   if (progress) progress.style.display = 'none'
// })

export default router