<template>
  <div id="intro">
    <div class="row">
      <div v-for="(intro,index) in data" :key="index" class="edit col-lg-4 col-sm-12">
        <p>Intro-{{index+1}}</p>
        <img :src="intro.src">
        <p>編輯</p>
        <q-file color="teal" filled v-model="intro.file" label="選擇圖片" accept=".jpg" hint="限jpg">
          <template v-slot:prepend>
            <q-icon name="cloud_upload" />
          </template>
        </q-file>
        <q-input class="text" outlined v-model="intro.descriptionModel" placeholder="圖片描述" :hint="intro.description" />
        <q-input class="text" outlined v-model="intro.linkModel" placeholder="超連結" :hint="intro.link" />
        <div class="controller">
        <q-btn push color="primary" label="保存" @click="submit(intro)"/>
        <q-toggle
          v-model="intro.show"
          checked-icon="check"
          color="green"
          unchecked-icon="clear"
          label="是否顯示"
        /></div>
      </div>
    </div>
  </div>
</template>

<script>
import path from 'path'
export default {
  inject: ['reload'],
  data () {
    return {
      data: [
        {
          item: 'intro-item-1',
          src: '',
          descriptionModel: '',
          linkModel: '',
          description: '回首頁',
          link: 'http://localhost:8080/',
          show: true,
          file: null
        },
        {
          item: 'intro-item-2',
          src: '',
          descriptionModel: '',
          linkModel: '',
          description: '回首頁',
          link: 'http://localhost:8080/',
          show: true,
          file: null
        },
        {
          item: 'intro-item-3',
          src: '',
          descriptionModel: '',
          linkModel: '',
          description: '回首頁',
          link: 'http://localhost:8080/',
          show: true,
          file: null
        }
      ]
    }
  },
  methods: {
    submit (intro) {
      if (
        intro.file === null ||
        intro.file.size >= 1024 * 1024 ||
        !intro.file.type.includes('image')
      ) {
        alert('檔案格式不符')
      } else {
        // formData可以同時傳送檔案和表單資料
        const fd = new FormData()
        // append(欄位, 檔案, 檔名)
        fd.append('image', intro.file, intro.item + path.extname(intro.file.name))
        fd.append('item', intro.item)
        fd.append('description', intro.descriptionModel)
        fd.append('link', intro.linkModel)
        fd.append('show', intro.show)

        this.$axios
          .post(process.env.API + '/pages', fd, {
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
    }
  },
  mounted () {
    for (let i = 0; i < this.data.length; i++) {
      this.$axios.get(process.env.API + '/pages/intro-item-' + (i + 1))
        .then(response => {
          this.data[i].description = response.data.description
          this.data[i].link = response.data.link
          this.data[i].src = process.env.API + '/img/' + this.data[i].item
          this.data[i].show = response.data.show
        }).catch(error => {
          alert(error.response.data.message)
        })
    }
  }
}
</script>
