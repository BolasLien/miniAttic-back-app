<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="leftDrawerOpen = !leftDrawerOpen"
        />

        <q-toolbar-title>
          <!-- Quasar App -->
          小閣樓 App
        </q-toolbar-title>

        <!-- <div>Quasar v{{ $q.version }}</div> -->
        <div v-if="user.length !== 0">
          <q-btn color="red" icon-right="fas fa-sign-out-alt" label="登出" @click="logout"/>
        </div>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      content-class="bg-grey-1"
    >
      <q-list>
        <q-item-label
          header
          class="text-grey-8"
        >
          <!-- Essential Links -->
          後台管理項目
        </q-item-label>
        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
        <ExpansionItem v-if="user.length !== 0"></ExpansionItem>
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import EssentialLink from 'components/EssentialLink.vue'
import ExpansionItem from 'components/ExpansionItem.vue'

export default {
  name: 'MainLayout',

  components: {
    EssentialLink,
    ExpansionItem
  },

  data () {
    return {
      leftDrawerOpen: false,
      essentialLinks: [
        {
          title: 'Home',
          caption: '後台首頁',
          icon: 'home',
          to: '/'
        }
      ]
    }
  },
  methods: {
    logout () {
      this.$axios
        .delete(process.env.API + '/logout')
        .then(response => {
          const data = response.data
          // 如果回來的資料 success 是 true
          if (data.success) {
            alert('登出成功')
            // 呼叫 vuex 的登出
            this.$store.commit('logout')

            // 跳到登出後的首頁
            this.$router.push('login')
          } else {
            alert(data.message)
          }
        })
        .catch(error => {
          // 如果回來的狀態不是 200，顯示回來的 message
          alert(error.response.data.message)
        })
    }
  },
  computed: {
    user () {
      return this.$store.getters.user
    }
  }
}
</script>
