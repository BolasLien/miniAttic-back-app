<template>
  <div id="products">
    <div class="row">
      <div class="col-10">
        商品列表
      </div>
      <div class="col-2">
        <q-btn push color="positive" label="新增商品" @click="newProdouct = true"></q-btn>
      </div>
    </div>

  <div class="q-pa-md">
    <q-table
      title="Treats"
      :data="data"
      :columns="columns"
      row-key="name"
    >
      <template v-slot:body="props">
        <q-tr :props="props">
          <q-td key="name" :props="props">
            {{ props.row.name }}
          </q-td>
          <q-td key="calories" :props="props">
            <q-badge color="green">
              {{ props.row.calories }}
            </q-badge>
          </q-td>
          <q-td key="fat" :props="props">
            <q-badge color="purple">
              {{ props.row.fat }}
            </q-badge>
          </q-td>
          <q-td key="carbs" :props="props">
            <q-badge color="orange">
              {{ props.row.carbs }}
            </q-badge>
          </q-td>
          <q-td key="protein" :props="props">
            <q-badge color="primary">
              {{ props.row.protein }}
            </q-badge>
          </q-td>
          <q-td key="sodium" :props="props">
            <q-badge color="teal">
              {{ props.row.sodium }}
            </q-badge>
          </q-td>
          <q-td key="calcium" :props="props">
            <q-badge color="accent">
              {{ props.row.calcium }}
            </q-badge>
          </q-td>
          <q-td key="iron" :props="props">
            <q-badge color="amber">
              {{ props.row.iron }}
            </q-badge>
          </q-td>
        </q-tr>
      </template>
    </q-table>
  </div>

    <!-- <div class="row">
      <div class="col-12">
        <q-list>
          <q-item clickable v-ripple class="row">
            <q-item-section thumbnail class="col-2">
              <img src="https://cdn.quasar.dev/img/mountains.jpg">
            </q-item-section>
            <q-item-section class="col-2">List item</q-item-section>
            <q-item-section class="col-2">show</q-item-section>
            <q-item-section class="col-2">
              <q-btn push color="positive" label="編輯" @click="edit = true"></q-btn>
              <q-btn push color="positive" label="預覽" @click="edit = true"></q-btn>
              <q-btn push color="positive" label="刪除" @click="edit = true"></q-btn>
            </q-item-section>
          </q-item>
        </q-list>
      </div>
    </div> -->

    <q-dialog v-model="newProdouct" persistent>
      <q-card style="min-width: 350px">
        <q-card-section>
          <div class="text-h6">新增商品</div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          <q-input class="text" outlined placeholder="商品名稱" />
          <q-select outlined v-model="model" :options="options" label="分類" />
          <q-input class="text" outlined placeholder="標語" />
          <q-input class="text" outlined placeholder="簡述" />
          <q-input prefix="$" class="text" outlined placeholder="價格" />
          <q-input class="text" outlined placeholder="介紹" />
        <q-toggle
          v-model="show"
          checked-icon="check"
          color="green"
          unchecked-icon="clear"
          label="是否顯示"
        />
        </q-card-section>

        <q-card-actions align="right" class="text-primary">
          <q-btn flat label="取消" v-close-popup />
          <q-btn flat label="新增" v-close-popup @click="submit" />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </div>
</template>

<script>
export default {
  data () {
    return {
      columns: [
        {
          name: 'name',
          required: true,
          label: 'Dessert (100g serving)',
          align: 'left',
          field: row => row.name,
          format: val => `${val}`,
          sortable: true
        },
        { name: 'calories', align: 'center', label: 'Calories', field: 'calories', sortable: true },
        { name: 'fat', label: 'Fat (g)', field: 'fat', sortable: true },
        { name: 'carbs', label: 'Carbs (g)', field: 'carbs' },
        { name: 'protein', label: 'Protein (g)', field: 'protein' },
        { name: 'sodium', label: 'Sodium (mg)', field: 'sodium' },
        { name: 'calcium', label: 'Calcium (%)', field: 'calcium', sortable: true, sort: (a, b) => parseInt(a, 10) - parseInt(b, 10) },
        { name: 'iron', label: 'Iron (%)', field: 'iron', sortable: true, sort: (a, b) => parseInt(a, 10) - parseInt(b, 10) }
      ],
      data: [
        {
          name: 'Frozen Yogurt',
          calories: 159,
          fat: 6.0,
          carbs: 24,
          protein: 4.0,
          sodium: 87,
          calcium: '14%',
          iron: '1%'
        },
        {
          name: 'Ice cream sandwich',
          calories: 237,
          fat: 9.0,
          carbs: 37,
          protein: 4.3,
          sodium: 129,
          calcium: '8%',
          iron: '1%'
        }
      ],
      newProdouct: false,
      edit: false,
      options: [
        'Google', 'Facebook', 'Twitter', 'Apple', 'Oracle'
      ],
      model: '',
      show: true
    }
  },
  methods: {
    submit () {

    }
  }
}
</script>
