<template>
  <div id="q-app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App',
  computed: {
    user () {
      return this.$store.getters.user
    }
  },
  methods: {
    heartbeat () {
      this.$axios
        .get(process.env.API + '/heartbeat')
        .then(response => {
          const data = response.data

          if (this.user.length > 0) {
            if (!data) {
              // alert('登入時效已過')
              // 前端登出
              this.$store.commit('logout')
              // 如果現在不是在首頁，跳到登出後的首頁
              if (this.$route.path !== '/') {
                this.$router.push('/')
              }
            }
          }
        })
        .catch(() => {
          alert('發生錯誤')
          // console.log(error)
          this.$store.commit('logout')
          // 如果現在不是在首頁，跳到登出後的首頁
          // if (this.$route.path !== '/') {
          //   this.$router.push('/')
          // }
        })
    }
  },
  mounted () {
    this.heartbeat()
    setInterval(() => {
      this.heartbeat()
    }, 1000 * 5)
  }
}
</script>
