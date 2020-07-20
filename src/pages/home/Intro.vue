<template>
  <div id="intro">
    <Heading :title="title"></Heading>
    <div class="row">
      <div v-for="(data,index) in datas" :key="index" class="edit col-lg-4 col-sm-12">
        <p>{{data.item}}</p>
        <img :src="data.src">
        <p>圖片上傳</p>
        <q-file color="teal" filled v-model="data.file" label="選擇圖片" accept=".jpg" hint="限.jpg, 1M以下">
          <template v-slot:prepend>
            <q-icon name="cloud_upload" />
          </template>
        </q-file>
        <q-btn push color="primary" label="上傳" @click="upload(data,'page')"/>
        <hr>
        <p>內容編輯</p>
        <q-input class="text" outlined v-model="data.description1Model" placeholder="圖片描述" :hint="data.description1" />
        <q-input class="text" outlined v-model="data.linkModel" placeholder="超連結" :hint="data.link" />
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
import Heading from 'components/Heading.vue'

export default {
  components: {
    Heading
  },
  inject: ['reload', 'submit', 'upload'],
  data () {
    return {
      title: {},
      datas: []
    }
  },
  mounted () {
    // 頁面更新後重新拿資料
    this.$axios.get(process.env.API + '/pages/intro')
      .then(response => {
        this.title = response.data.datas.filter(e => e.item.includes('title'))[0]
        this.datas = response.data.datas.filter(e => !e.item.includes('title'))
      })
      .catch(error => {
        alert(error.response.data.message)
      })
  }
}
</script>
