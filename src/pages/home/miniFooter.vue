<template>
  <div id="miniFooter">
    <div class="row">
      <div v-for="(data,index) in datas" :key="index" class="edit col-lg-4 col-sm-12">
        <p>{{data.item}}</p>
        <p>內容編輯</p>
        <q-input class="text" type="textarea" outlined v-model="data.descriptionModel" placeholder="圖片描述" :hint="data.description" />
        <q-toggle
          v-model="data.show"
          checked-icon="check"
          color="green"
          unchecked-icon="clear"
          label="是否顯示"
        />
        <br>
        <q-btn push color="primary" label="保存" @click="submit(data)"/>
      </div>
    </div>
  </div>
</template>

<script>
// import path from 'path'
export default {
  inject: ['reload', 'submit', 'upload'],
  data () {
    return {
      datas: []
    }
  },
  mounted () {
    // 頁面更新後重新拿資料
    this.$axios.get(process.env.API + '/pages/area/minifooter')
      .then(response => {
        this.datas = response.data.datas.filter(e => e.item !== 'title')
      })
      .catch(error => {
        alert(error.response.data.message)
      })
  }
}
</script>
