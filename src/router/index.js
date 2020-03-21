import Vue from 'vue'
import VueRouter from 'vue-router'

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
    meta: { layout: 'user', auth: true },
    component: () => import('../views/Profile.vue')
  },
  {
    path: '/create',
    name: 'Create',
    meta: { layout: 'user', auth: true },
    component: () => import('../views/Create.vue')
  },
  {
    path: '/my-blog',
    name: 'MyBlog',
    meta: { layout: 'user', auth: true },
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
    name: 'Articles',
    meta: { layout: 'user' },
    component: () => import('../views/Articles.vue')
  },
  {
    path: '/kids-articles-current',
    name: 'ArticleCurrent',
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
    path: '/adults-articles-current',
    name: 'AdultsCurrent',
    meta: { layout: 'user' },
    component: () => import('../views/AdultsCurrent.vue')
  },
  {
    path: '/moderator',
    name: 'moderator',
    meta: { layout: 'moderator', auth: true },
    component: () => import('../views/moderator/Home.vue')
  },

  {
    path: '/moderator-chat',
    name: 'moderator-chat',
    meta: { layout: 'moderator', auth: true },
    component: () => import('../views/moderator/Chat.vue')
  },

  {
    path: '/moderator-check',
    name: 'moderator-check',
    meta: { layout: 'moderator', auth: true },
    component: () => import('../views/moderator/Blog.vue')
  },
  {
    path: '/moderator-check-current',
    name: 'moderator-check-current',
    meta: { layout: 'moderator', auth: true },
    component: () => import('../views/moderator/BlogCurrent.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
