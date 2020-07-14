<template>
  <div id="carousel">
    <q-form class="row">
      <div class="edit col-lg-3 col-md-12" v-for="(carousel,index) in data" :key="index">
        <p>{{carousel.item}}</p>
        <img :src="carousel.src">
        <p>圖片上傳</p>
        <q-file color="teal" filled v-model="carousel.file" label="選擇圖片" accept=".jpg" hint="限.jpg, 1M以下">
          <template v-slot:prepend>
            <q-icon name="cloud_upload" />
          </template>
        </q-file>
        <q-btn push color="primary" label="上傳" @click="upload(carousel)"/>
        <hr>
        <p>內容編輯</p>
        <q-toggle
          v-model="carousel.show"
          checked-icon="check"
          color="green"
          unchecked-icon="clear"
          label="是否顯示"
        />
        <br>
        <q-btn push color="primary" label="保存" @click="submit(carousel)" />

      </div>
    </q-form>
  </div>
</template>

<script>
import path from 'path'

export default {
  inject: ['reload'],
  data () {
    return {
      data: []
    }
  },
  methods: {
    upload (data) {
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

        this.$axios
          .post(process.env.API + '/pages/' + data.item, fd, {
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
          show: data.show
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
  mounted () {
    // 頁面更新後重新拿資料
    this.$axios.get(process.env.API + '/pages/area/carousel')
      .then(response => {
        this.data = response.data.datas
      })
      .catch(error => {
        alert(error.response.data.message)
      })
  }
}
</script>
