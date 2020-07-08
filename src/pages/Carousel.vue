<template>
  <div>
    <q-list>
    <q-item v-ripple>
      <q-item-section thumbnail>
        <img src="http://220.128.133.15/s1090109/miniattic/assets/img/carousel-item-1.jpg">
      </q-item-section>
      <q-item-section>carousel-item-1</q-item-section>
      <q-toggle
        v-model="toggles[0]"
        checked-icon="check"
        color="green"
        unchecked-icon="clear"
        label="是否顯示"
      />
      <div class="q-pa-md">
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
      </div>
    </q-item>
    <q-item v-ripple>
      <q-item-section thumbnail>
        <img src="http://220.128.133.15/s1090109/miniattic/assets/img/carousel-item-2.jpg">
      </q-item-section>
      <q-item-section>carousel-item-2</q-item-section>
      <q-toggle
        v-model="toggles[1]"
        checked-icon="check"
        color="green"
        unchecked-icon="clear"
        label="是否顯示"
      />
      <div class="q-pa-md">
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
      </div>
    </q-item>
    <q-item v-ripple>
      <q-item-section thumbnail>
        <img src="http://220.128.133.15/s1090109/miniattic/assets/img/carousel-item-3.jpg">
      </q-item-section>
      <q-item-section>carousel-item-3</q-item-section>
      <q-toggle
        v-model="toggles[2]"
        checked-icon="check"
        color="green"
        unchecked-icon="clear"
        label="是否顯示"
      />
      <div class="q-pa-md">
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
      </div>
    </q-item>
    <q-item v-ripple>
      <q-item-section thumbnail>
        <img src="http://220.128.133.15/s1090109/miniattic/assets/img/carousel-item-4.jpg">
      </q-item-section>
      <q-item-section>carousel-item-4</q-item-section>
      <q-toggle
        v-model="toggles[3]"
        checked-icon="check"
        color="green"
        unchecked-icon="clear"
        label="是否顯示"
      />
      <div class="q-pa-md">
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
      </div>
    </q-item>
    </q-list>

  </div>
</template>

<script>
export default {
  data () {
    return {
      toggles: [
        true, true, true, true
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
