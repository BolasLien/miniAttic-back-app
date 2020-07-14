<template>
  <div id="miniabout">
    <div>
      <div class="edit col-lg-4 col-sm-12">
        <p>標題</p>
        <q-input outlined v-model="title.titleModel" placeholder="標題" :hint="title.title" />
        <q-input outlined v-model="title.subtitleModel" placeholder="副標題" :hint="title.subtitle" />
        <br>
        <q-btn push color="primary" label="保存" @click="submit(title)"/>
      </div>
      <div v-for="(data,index) in datas" :key="index" class="row">
        <div class="edit col-lg-5 col-sm-12">
          <p>{{data.item}}</p>
          <img :src="data.src">
          <p>圖片上傳</p>
          <q-file color="teal" filled v-model="data.file" label="選擇圖片" accept=".jpg" hint="限.jpg, 1M以下">
            <template v-slot:prepend>
              <q-icon name="cloud_upload" />
            </template>
          </q-file>
          <q-btn push color="primary" label="上傳" @click="upload(data)"/>
        </div>

        <div class="edit col-lg-7 col-sm-12">
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
  </div>
</template>

<script>
// import path from 'path'
export default {
  inject: ['reload', 'submit', 'upload'],
  data () {
    return {
      title: {},
      datas: []
    }
  },
  mounted () {
    // 頁面更新後重新拿資料
    this.$axios.get(process.env.API + '/pages/area/miniabout')
      .then(response => {
        this.title = response.data.datas.filter(e => e.item === 'title')[0]
        this.datas = response.data.datas.filter(e => e.item !== 'title')
      })
      .catch(error => {
        alert(error.response.data.message)
      })
  }
}
</script>
