<template>
  <div id="category">
    <div class="row q-ma-md">
      <q-table
        title="分類列表"
        :data="data"
        :columns="columns"
        row-key="name"
        class="col-lg-6 col-sm-12"
      >
      <template v-slot:top>
        <div class="text-h4">
          分類列表
        </div>
        <q-space></q-space>
          <q-btn push color="positive" label="新增分類" @click="add = true"></q-btn>
      </template>
        <template v-slot:body="props">
          <q-tr :props="props">
            <q-td key="itemId" :props="props">
                <div class="text-subtitle1 text-center">
                {{ props.row.item }}
                </div>
            </q-td>
            <q-td key="name" :props="props">
                <div class="text-subtitle1 text-center">
                {{ props.row.name }}
                </div>
            </q-td>
            <q-td key="show" :props="props">
              <q-badge :color="props.row.show? 'positive' : 'nagative'">
                {{ props.row.show }}
              </q-badge>
            </q-td>
            <q-td key="action" :props="props">
              <q-btn push color="primary" label="編輯內容" @click="editCategory(props.row)"></q-btn>
              <q-btn push color="negative" label="刪除" @click="remove(props.row)"></q-btn>
            </q-td>
          </q-tr>
        </template>
      </q-table>

      <!-- 新增分類 -->
      <q-dialog v-model="add" persistent>
      <q-card style="min-width: 500px">
        <q-card-section>
          <div class="text-h6">新增分類</div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          <q-input class="text" v-model="addData.item" outlined placeholder="序號" />
          <q-input class="text" v-model="addData.name" outlined placeholder="分類名稱" />
        <q-toggle
          v-model="addData.show"
          checked-icon="check"
          color="green"
          unchecked-icon="clear"
          label="是否顯示"
        />
        </q-card-section>

        <q-card-actions align="right" class="text-primary">
          <q-btn flat label="取消" v-close-popup />
          <q-btn flat label="送出" v-close-popup @click="create(addData)" />
        </q-card-actions>
      </q-card>
    </q-dialog>

        <!-- 編輯分類 -->
    <q-dialog v-model="edit" persistent>
      <q-card style="min-width: 500px">
        <q-card-section>
          <div class="text-h6">編輯分類</div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          <q-input class="text" v-model="editData.name" outlined placeholder="商品名稱" />
          <q-toggle
            v-model="editData.show"
            checked-icon="check"
            color="green"
            unchecked-icon="clear"
            label="是否上架"
          />
        </q-card-section>

        <q-card-actions align="right" class="text-primary">
          <q-btn flat label="取消" v-close-popup @click="edit=false"/>
          <q-btn flat label="送出" v-close-popup @click="update(editData)" />
        </q-card-actions>
      </q-card>
    </q-dialog>
    </div>
  </div>
</template>

<script>
export default {
  inject: ['reload'],
  data () {
    return {
      columns: [
        { name: 'itemId', field: 'itemId', align: 'center', label: '序號', sortable: true, sort: (a, b) => parseInt(a, 10) - parseInt(b, 10) },
        { name: 'name', field: 'name', align: 'center', label: '分類名稱' },
        { name: 'show', field: 'show', align: 'center', label: '是否顯示', sortable: true, sort: (a, b) => parseInt(a, 10) - parseInt(b, 10) },
        { name: 'action', field: 'action', align: 'center', label: '操作' }
      ],
      data: [],
      // 新增彈窗的參數
      add: false,
      addData: {},

      // 編輯彈窗的參數
      edit: false,
      editData: {}
    }
  },
  methods: {
    editCategory (data) {
      this.edit = true
      this.editData = data
    },
    create (data) {
      this.$axios.post(process.env.API + '/categorys', {
        item: data.item,
        name: data.name,
        show: data.show
      })
        .then(response => {
          this.reload()
          alert(response.data.message)
        })
        .catch(error => {
          alert(error.response.data.message)
        })
    },
    update (data) {
      this.$axios.patch(process.env.API + '/categorys/' + data.item, {
        name: data.name,
        show: data.show
      })
        .then(response => {
          this.reload()
          alert(response.data.message)
        })
        .catch(error => {
          alert(error.response.data.message)
        })
    },
    remove (data) {
      this.$axios.delete(process.env.API + '/categorys/' + data.item)
        .then(response => {
          this.reload()
          console.log(response.data)
          alert(response.data.message)
        })
        .catch(error => {
          console.log(error)
        })
    }

  },
  mounted () {
    this.$axios.get(process.env.API + '/categorys')
      .then((response) => {
        this.data = response.data.datas
      }).catch((error) => {
        console.log(error.response.data)
      })
  }
}
</script>
