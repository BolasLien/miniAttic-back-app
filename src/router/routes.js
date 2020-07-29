
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: '',
        component: () => import('pages/Index.vue'),
        meta: {
          login: true
        }
      },
      {
        path: 'home',
        component: () => import('pages/Home.vue')
      },
      {
        path: 'carousel',
        component: () => import('pages/home/Carousel.vue'),
        meta: {
          login: true
        }
      },
      {
        path: 'intro',
        component: () => import('pages/home/Intro.vue'),
        meta: {
          login: true
        }
      },
      {
        path: 'miniProducts',
        component: () => import('pages/home/miniProducts.vue'),
        meta: {
          login: true
        }
      },
      {
        path: 'miniAbout',
        component: () => import('pages/home/miniAbout.vue'),
        meta: {
          login: true
        }
      },
      {
        path: 'CallToAction',
        component: () => import('pages/home/CallToAction.vue'),
        meta: {
          login: true
        }
      },
      {
        path: 'miniRecommend',
        component: () => import('pages/home/miniRecommend.vue'),
        meta: {
          login: true
        }
      },
      {
        path: 'miniFooter',
        component: () => import('pages/home/miniFooter.vue'),
        meta: {
          login: true
        }
      },
      {
        path: 'Products',
        component: () => import('pages/shop/Products.vue'),
        meta: {
          login: true
        }
      },
      {
        path: 'Category',
        component: () => import('pages/shop/Category.vue'),
        meta: {
          login: true
        }
      },
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
