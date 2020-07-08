<template>
  <div class="q-pa-md" style="max-width: 350px">
    <q-list bordered class="rounded-borders">
      <q-expansion-item
        expand-separator
        icon="store"
        label="小閣樓"
        caption="網站內容管理"
        default-opened
        :content-inset-level="0.5"
      >
      <q-expansion-item
        expand-separator
        icon="home"
        label="首頁"
        caption="首頁管理"
        default-opened
        :content-inset-level="0.5"
      >
        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-expansion-item>

      </q-expansion-item>

      <q-expansion-item :content-inset-level="0.5" expand-separator icon="mail" label="Inbox" caption="5 unread emails" default-opened>
        <q-expansion-item expand-separator :content-inset-level="0.5" icon="receipt" label="Receipts">

          <q-expansion-item label="Today" :content-inset-level="0.5">
            <q-card>
              <q-card-section>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, eius reprehenderit eos corrupti
                commodi magni quaerat ex numquam, dolorum officiis modi facere maiores architecto suscipit iste
                eveniet doloribus ullam aliquid.
              </q-card-section>
            </q-card>
          </q-expansion-item>

          <q-expansion-item label="Yesterday" :content-inset-level="0.5">
            <q-card>
              <q-card-section>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, eius reprehenderit eos corrupti
                commodi magni quaerat ex numquam, dolorum officiis modi facere maiores architecto suscipit iste
                eveniet doloribus ullam aliquid.
              </q-card-section>
            </q-card>
          </q-expansion-item>

        </q-expansion-item>

        <q-expansion-item :content-inset-level="0.5" expand-separator icon="schedule" label="Postponed">
          <q-card>
            <q-card-section>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, eius reprehenderit eos corrupti
              commodi magni quaerat ex numquam, dolorum officiis modi facere maiores architecto suscipit iste
              eveniet doloribus ullam aliquid.
            </q-card-section>
          </q-card>
        </q-expansion-item>

      </q-expansion-item>
    </q-list>
  </div>
</template>

<script>
import EssentialLink from 'components/EssentialLink.vue'

export default {
  name: 'ExpansionItem',

  components: {
    EssentialLink
  },

  data () {
    return {
      leftDrawerOpen: false,
      essentialLinks: [
        {
          title: 'Carousel',
          caption: '輪播圖',
          icon: 'image',
          to: 'Carousel'
        },
        {
          title: 'Intro',
          caption: '小閣樓新鮮事',
          icon: 'fiber_new',
          to: 'Intro'
        }
      ]
    }
  }
}
</script>
