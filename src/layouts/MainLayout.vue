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
      <router-view v-if="isRouterAlive"  :to="isLogin"/>
    </q-page-container>
  </q-layout>
</template>

<script>
import EssentialLink from 'components/EssentialLink.vue'
import ExpansionItem from 'components/ExpansionItem.vue'
import path from 'path'

export default {
  name: 'MainLayout',

  components: {
    EssentialLink,
    ExpansionItem
  },
  data () {
    return {
      isRouterAlive: true,
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
    },
    heartbeat () {
      this.$axios.get(process.env.API + '/heartbeat')
        .then(response => {
          const data = response.data
          if (this.user.length > 0) {
            if (!data) {
              // alert('登入時效已過')
              // 前端登出
              this.$store.commit('logout')
              // 如果現在不是在首頁，跳到登出後的首頁
              if (this.$route.path !== '/login') {
                this.$router.push('login')
              }
            }
          }
        })
        .catch(() => {
          // alert('發生錯誤')
          // console.log(error)
          this.$store.commit('logout')
          // 如果現在不是在首頁，跳到登出後的首頁
          if (this.$route.path !== '/login') {
            this.$router.push('login')
          }
        })
    },
    reload () {
      // 當前的路由要刷新的時候使用這個功能
      this.isRouterAlive = false
      this.$nextTick(function () {
        this.isRouterAlive = true
      })
    },
    upload (data, collection) {
      if (
        data.file === null ||
        data.file.size >= 1024 * 1024 ||
        !data.file.type.includes('image')
      ) {
        alert('檔案格式不符')
      } else {
        // formData可以同時傳送檔案和表單資料
        const fd = new FormData()
        // append(欄位, 檔案, 檔名)
        fd.append('image', data.file, data.item + path.extname(data.file.name))
        fd.append('collection', collection)

        this.$axios
          .post(process.env.API + '/img/' + data.item, fd, {
            // 因為 axios 預設送 JSON，所以要自己設定成 formdata
            headers: {
              'content-Type': 'multipart/form-data'
            }
          })
          .then(response => {
            this.reload()
            alert(response.data.message)
          })
          .catch(error => {
            alert(error.response.data.message)
          })
      }
    },
    submit (data) {
      this.$axios
        .patch(process.env.API + '/pages/' + data.item, {
          show: data.show,
          description1: (data.description1Model === undefined) ? data.description1 : data.description1Model,
          description2: (data.description2Model === undefined) ? data.description2 : data.description2Model,
          description3: (data.description3Model === undefined) ? data.description3 : data.description3Model,
          link: (data.linkModel === undefined) ? data.link : data.linkModel
        })
        .then(response => {
          this.reload()
          alert(response.data.message)
        })
        .catch(error => {
          alert(error.response.data.message)
        })
    }
  },
  computed: {
    user () {
      return this.$store.getters.user
    },
    isLogin () {
      const to = this.user.length !== 0 ? '/' : 'Login'
      return to
    }
  },
  mounted () {
    this.heartbeat()
    setInterval(() => {
      this.heartbeat()
    }, 1000 * 10)
  },
  provide () {
    return {
      reload: this.reload,
      submit: this.submit,
      upload: this.upload
    }
  }
}
</script>
