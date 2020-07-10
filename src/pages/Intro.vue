<template>
  <div id="intro">
    <div class="row">
      <div v-for="(intro,index) in data" :key="index" class="edit col-lg-4 col-sm-12">
        <p>Intro-{{index+1}}</p>
        <img :src="intro.src">
        <p>編輯</p>
        <q-file color="teal" filled v-model="intro.file" label="選擇圖片">
          <template v-slot:prepend>
            <q-icon name="cloud_upload" />
          </template>
        </q-file>
        <q-input class="text" outlined v-model="intro.textModel" placeholder="圖片描述" :hint="intro.text" />
        <q-input class="text" outlined v-model="intro.hrefModel" placeholder="超連結" :hint="intro.href" />
        <div class="controller">
        <q-btn push color="primary" label="保存" />
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
export default {
  data () {
    return {
      data: [
        {
          src: 'http://220.128.133.15/s1090109/miniattic/assets/img/index-intro-1.jpg',
          textModel: '',
          hrefModel: '',
          text: '回首頁',
          href: 'http://localhost:8080/',
          show: true,
          file: null
        },
        {
          src: 'http://220.128.133.15/s1090109/miniattic/assets/img/index-intro-2.jpg',
          textModel: '',
          hrefModel: '',
          text: '回首頁',
          href: 'http://localhost:8080/',
          show: true,
          file: null
        },
        {
          src: 'http://220.128.133.15/s1090109/miniattic/assets/img/index-intro-3.jpg',
          textModel: '',
          hrefModel: '',
          text: '回首頁',
          href: 'http://localhost:8080/',
          show: true,
          file: null
        }
      ]
    }
  },
  methods: {
    onRejected (rejectedEntries) {
      // Notify plugin needs to be installed
      // https://quasar.dev/quasar-plugins/notify#Installation
      this.$q.notify({
        type: 'negative',
        message: `${rejectedEntries.length} file(s) did not pass validation constraints`
      })
    }
  }
}
</script>
