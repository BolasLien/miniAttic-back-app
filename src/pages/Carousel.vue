<template>
  <div id="carousel">
    <q-form class="row">
      <div class="edit col-lg-3 col-md-12" v-for="(carousel,index) in data" :key="index">
        <p>{{carousel.item}}</p>
        <img :src="carousel.src">
        <p>編輯</p>
        <q-file color="teal" filled v-model="carousel.file" label="選擇圖片" accept=".jpg" hint="限jpg">
          <template v-slot:prepend>
            <q-icon name="cloud_upload" />
          </template>
        </q-file>
        <q-btn push color="primary" label="保存" @click="submit(carousel)" />
        <q-toggle
          v-model="carousel.show"
          checked-icon="check"
          color="green"
          unchecked-icon="clear"
          label="是否顯示"
        />
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
      data: [
        {
          item: 'carousel-item-1',
          src: '',
          show: true,
          file: null
        },
        {
          item: 'carousel-item-2',
          src: '',
          show: true,
          file: null
        },
        {
          item: 'carousel-item-3',
          src: '',
          show: true,
          file: null
        },
        {
          item: 'carousel-item-4',
          src: '',
          show: true,
          file: null
        }
      ]
    }
  },
  methods: {
    submit (carousel) {
      if (
        carousel.file === null ||
        carousel.file.size >= 1024 * 1024 ||
        !carousel.file.type.includes('image')
      ) {
        alert('檔案格式不符')
      } else {
        // formData可以同時傳送檔案和表單資料
        const fd = new FormData()
        // append(欄位, 檔案, 檔名)
        fd.append('image', carousel.file, carousel.item + path.extname(carousel.file.name))
        fd.append('item', carousel.item)
        fd.append('show', carousel.show)

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
      this.$axios.get(process.env.API + '/pages/carousel-item-' + (i + 1))
        .then(response => {
          this.data[i].src = response.data.src
          this.data[i].show = response.data.show
        }).catch(error => {
          alert(error.response.data.message)
        })
    }
  }
}
</script>
