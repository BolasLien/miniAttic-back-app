
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') },
      { path: 'home', component: () => import('pages/Home.vue') },
      { path: 'carousel', component: () => import('pages/Carousel.vue') },
      { path: 'intro', component: () => import('pages/Intro.vue') },
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
