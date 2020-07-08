<template>
  <div>
    <div>
      <img src="http://220.128.133.15/s1090109/miniattic/assets/img/index-intro-1.jpg" width="350">
      <p>Intro-1</p>
      <q-input outlined v-model="data[0].textModel" placeholder="圖片描述" :hint="data[0].text" />
      <q-input outlined v-model="data[0].hrefModel" placeholder="超連結" :hint="data[0].href" />
      <q-btn push color="primary" label="保存" />
      <q-toggle
        v-model="toggles[0]"
        checked-icon="check"
        color="green"
        unchecked-icon="clear"
        label="是否顯示"
      />
      <!-- <div class="q-pa-md">
        <div class="q-gutter-md row items-start">
          <q-uploader
          style="max-width: 300px"
          url="http://localhost:4444/upload"
          label="Restricted to images"
          multiple
          accept=".jpg, image/*"
          @rejected="onRejected"
          />
        </div>
      </div> -->
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      toggles: [
        true, true, true
      ],
      data: [
        {
          textModel: '',
          hrefModel: '',
          text: '回首頁',
          href: 'http://localhost:8080/'
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
