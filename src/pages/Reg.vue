<template>
  <q-page id="login" class="flex flex-center">
    <div class="q-pa-md">
          <q-form
      @submit="onSubmit"
      @reset="onReset"
      class="q-gutter-md"
    >
      <q-input class="input" clearable v-model="account" filled label="輸入帳號"/>
      <div></div>
      <q-input class="input" clearable v-model="password" filled :type="isPwd ? 'password' : 'text'" label="輸入密碼">
        <template v-slot:append>
          <q-icon
            :name="isPwd ? 'visibility_off' : 'visibility'"
            class="cursor-pointer"
            @click="isPwd = !isPwd"
          />
        </template>
      </q-input>
      <q-btn color="blue" label="註冊" type="submit"></q-btn>
      <q-btn label="重設" type="reset"></q-btn>
          </q-form>
    </div>
  </q-page>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      account: '',
      password: '',
      isPwd: true
    }
  },
  methods: {
    onSubmit () {
      this.$axios.post(
        process.env.API + '/users',
        { account: this.account, password: this.password })
        .then(response => {
          const data = response.data
          if (data.success) {
            alert('註冊成功')
            // 如果回來的資料 success 是 ture
          } else {
            // 不是就顯示回來的message
            alert(data.message)
          }
        })
        .catch(error => {
          // 如果回來的狀態不是 200，顯示回來的 message
          alert(error.response.data.message)
        })
    },
    onReset () {
      this.account = ''
      this.password = ''
    }
  }
}
</script>
