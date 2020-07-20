<template>
  <div class="heading">
    <p class="item">{{title.item}}</p>
    <q-input class="inline on-left" outlined v-model="title.description1Model" placeholder="標題" :hint="title.description1" />
    <q-input class="inline on-left" outlined v-model="title.description2Model" placeholder="副標題" :hint="title.description2" />
    <q-btn push color="primary" label="保存" @click="submit(title)"/>
  </div>
</template>

<script>
export default {
  inject: ['reload', 'submit', 'upload'],
  name: 'Heading',
  props: {
    title: Object
  }
}
</script>
