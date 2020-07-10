<template>
  <div id="carousel">
    <q-form class="row">
      <div class="edit col-lg-3 col-md-12" v-for="(carousel,index) in data" :key="index">
        <p>carousel-item-{{index+1}}</p>
        <img :src="carousel.src">
        <p>編輯</p>
        <q-file color="teal" filled v-model="carousel.file" label="選擇圖片">
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
export default {
  data () {
    return {
      data: [
        {
          src: 'http://220.128.133.15/s1090109/miniattic/assets/img/carousel-item-1.jpg',
          show: true,
          file: null
        },
        {
          src: 'http://220.128.133.15/s1090109/miniattic/assets/img/carousel-item-2.jpg',
          show: true,
          file: null
        },
        {
          src: 'http://220.128.133.15/s1090109/miniattic/assets/img/carousel-item-3.jpg',
          show: true,
          file: null
        },
        {
          src: 'http://220.128.133.15/s1090109/miniattic/assets/img/carousel-item-4.jpg',
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
        fd.append('image', this.file)
        fd.append('description', this.description)

        this.$axios
          .post(process.env.API + '/file', fd, {
            // 因為 axios 預設送 JSON，所以要自己設定成 formdata
            headers: {
              'content-Type': 'multipart/form-data'
            }
          })
          .then(response => {
            this.images.push({
              title: this.description,
              src: process.env.API + '/file/' + response.data.name,
              name: response.data.name,
              _id: response.data._id,
              edit: false,
              model: response.data.name
            })
            this.file = null
            this.description = ''
          })
          .catch(error => {
            alert(error.response.data.message)
          })
      }
    }
  }
}
</script>
