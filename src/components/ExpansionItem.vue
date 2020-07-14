<template>
  <div class="q-pa-md" style="max-width: 350px">
    <q-list bordered class="rounded-borders">
      <q-expansion-item
        expand-separator
        icon="store"
        label="小閣樓"
        caption="網站內容管理"
        default-opened
        :content-inset-level="0.5"
      >
      <q-expansion-item
        expand-separator
        icon="home"
        label="首頁"
        caption="首頁管理"
        default-opened
        :content-inset-level="0.5"
      >
        <EssentialLink
          v-for="link in homeLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-expansion-item>

      </q-expansion-item>

      <q-expansion-item
        expand-separator
        icon="store"
        label="商店"
        caption="商品管理"
        default-opened
        :content-inset-level="0.5"
      >
        <EssentialLink
          v-for="link in shopLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-expansion-item>

    </q-list>
  </div>
</template>

<script>
import EssentialLink from 'components/EssentialLink.vue'

export default {
  name: 'ExpansionItem',

  components: {
    EssentialLink
  },

  data () {
    return {
      leftDrawerOpen: false,
      homeLinks: [
        {
          title: 'Carousel',
          caption: '輪播圖',
          icon: 'image',
          to: 'Carousel'
        },
        {
          title: 'miniNews',
          caption: '小閣樓新鮮事',
          icon: 'fas fa-newspaper',
          to: 'Intro'
        },
        {
          title: 'miniProducts',
          caption: '小閣樓商品',
          icon: 'fas fa-shopping-bag',
          to: 'miniProducts'
        },
        {
          title: 'miniAbout',
          caption: '微介紹',
          icon: 'fas fa-address-card',
          to: 'miniAbout'
        },
        {
          title: 'CallToAction',
          caption: '試吃連結',
          icon: 'fas fa-phone-square',
          to: 'CallToAction'
        },
        {
          title: 'miniRecommend',
          caption: '好評推薦',
          icon: 'fas fa-newspaper',
          to: 'miniRecommend'
        },
        {
          title: 'miniFooter',
          caption: '首頁的底部',
          icon: 'fas fa-step-forward',
          to: 'miniFooter'
        }
      ],
      shopLinks: [
        {
          title: 'Product List',
          caption: '商品列表',
          icon: 'fas fa-list',
          to: 'ProductList'
        }
      ]
    }
  }
}
</script>
