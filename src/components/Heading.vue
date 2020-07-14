<template>
  <div class="heading">
    <p>{{title.item}}</p>
      <q-input outlined v-model="title.titleModel" placeholder="標題" :hint="title.title" />
      <q-input outlined v-model="title.subtitleModel" placeholder="副標題" :hint="title.subtitle" />
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
