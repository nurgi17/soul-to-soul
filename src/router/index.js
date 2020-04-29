import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '../store'

Vue.use(VueRouter)

const routes = [
  {
    path: ('/', '/login'),
    name: 'login',
    meta: { layout: 'user' },
    component: () => import('../views/Login.vue')
  },
  {
    path: ('/register'),
    name: 'register',
    meta: { layout: 'user' },
    component: () => import('../views/Register.vue')
  },
  {
    path: '/',
    name: 'Home',
    meta: { layout: 'user' },
    component: () => import('../views/Home.vue')
  },
  {
    path: '/profile',
    name: 'Profile',
    meta: { layout: 'user', auth: true, user: true, admin: false, moderator: false },
    component: () => import('../views/Profile.vue')
  },
  {
    path: '/create',
    name: 'Create',
    meta: { layout: 'user', auth: true, user: true, admin: false, moderator: false },
    component: () => import('../views/Create.vue')
  },
  {
    path: '/my-blog',
    name: 'MyBlog',
    meta: { layout: 'user', auth: true, user: true, admin: false, moderator: false },
    component: () => import('../views/MyBlog.vue')
  },
  {
    path: '/blog',
    name: 'Blog',
    meta: { layout: 'user' },
    component: () => import('../views/Blog.vue')
  },
  {
    path: '/chat',
    name: 'Chat',
    meta: { layout: 'user' },
    component: () => import('../views/Chat.vue')
  },
  {
    path: '/kids-choose',
    name: 'Choose',
    meta: { layout: 'user' },
    component: () => import('../views/Choose.vue')
  },
  {
    path: '/kids-articles',
    name: 'kids-articles',
    meta: { layout: 'user' },
    component: () => import('../views/Articles.vue'),
    props: (route) => ({
      f: 0,
      t: 0,
      ...route.params
    })
  },
  {
    path: '/kids-articles-current', // '/kids-articles-current/:id'
    name: 'kids-articles-current',
    meta: { layout: 'user' },
    component: () => import('../views/ArticleCurrent.vue')
  },
  {
    path: '/adults-articles',
    name: 'Adults',
    meta: { layout: 'user' },
    component: () => import('../views/Adults.vue')
  },
  {
    path: '/adults-articles-current', // '/adults-articles-current/:id'
    name: 'AdultsCurrent',
    meta: { layout: 'user' },
    component: () => import('../views/AdultsCurrent.vue'),
    props: (route) => ({
      isBlog: false,
      ...route.params
    })
  },
  {
    path: '/moderator',
    name: 'moderator',
    meta: { layout: 'moderator', auth: true, user: false, admin: false, moderator: true },
    component: () => import('../views/moderator/Home.vue')
  },

  {
    path: '/moderator-chat',
    name: 'moderator-chat',
    meta: { layout: 'moderator', auth: true, user: false, admin: false, moderator: true },
    component: () => import('../views/moderator/Chat.vue')
  },

  {
    path: '/moderator-check',
    name: 'moderator-check',
    meta: { layout: 'moderator', auth: true, user: false, admin: false, moderator: true },
    component: () => import('../views/moderator/Blog.vue')
  },
  {
    path: '/moderator-check-current',
    name: 'moderator-check-current',
    meta: { layout: 'moderator', auth: true, user: false, admin: false, moderator: true },
    component: () => import('../views/moderator/BlogCurrent.vue')
  },
  // errors
  {
    path: '/401',
    name: 'Access-denied',
    meta: { layout: 'user' },
    component: () => import('../views/errors/401.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  if (to.meta.auth) {
    const token = window.localStorage.getItem('token')
    if (!token) {
      next('/login?message=login')
    } else if (to.meta.admin) {
      const role = window.localStorage.getItem('role')
      if (role === '1') {
        next()
      } else {
        next('/401')
      }
    } else if (to.meta.moderator) {
      const role = window.localStorage.getItem('role')
      if (role === '2') {
        next()
      } else {
        next('/401')
      }
    } else if (to.meta.user) {
      const role = window.localStorage.getItem('role')
      if (role === '3') {
        next()
      } else {
        next('/401')
      }
    }
  } else if ((to.path === '/login' || to.path === '/register') && store.getters.isLoggedIn) {
    next('/')
  } else {
    next()
  }
})

export default router
