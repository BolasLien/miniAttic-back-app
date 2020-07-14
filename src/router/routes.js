
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') },
      { path: 'home', component: () => import('pages/Home.vue') },
      { path: 'carousel', component: () => import('pages/home/Carousel.vue') },
      { path: 'intro', component: () => import('pages/home/Intro.vue') },
      { path: 'miniProducts', component: () => import('pages/home/miniProducts.vue') },
      { path: 'miniAbout', component: () => import('pages/home/miniAbout.vue') },
      { path: 'CallToAction', component: () => import('pages/home/CallToAction.vue') },
      { path: 'miniRecommend', component: () => import('pages/home/miniRecommend.vue') },
      { path: 'miniFooter', component: () => import('pages/home/miniFooter.vue') },
      { path: 'login', component: () => import('pages/Login.vue') },
      { path: 'Reg', component: () => import('pages/Reg.vue') }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
