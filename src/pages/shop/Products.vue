<template>
  <div id="products">
  <div class="q-pa-md">
    <q-table
      title="商品列表"
      :data="data"
      :columns="columns"
      row-key="name"
    >
    <template v-slot:top>
      <div class="text-h4">
        商品列表
      </div>
      <q-space></q-space>
        <q-btn push color="positive" label="新增商品" @click="add = true"></q-btn>
    </template>
      <template v-slot:body="props">
        <q-tr :props="props">
          <q-td key="img" :props="props">
            <q-img :src="props.row.src" style="width: 120px; " :ratio="4/3">
            </q-img>
          </q-td>
          <q-td key="upload" :props="props">
            <q-file color="teal" filled v-model="props.row.file" label="選擇圖片" accept=".jpg" hint="限.jpg, 1M以下">
              <template v-slot:prepend>
                <q-icon name="cloud_upload" />
              </template>
            </q-file>
            <q-btn push color="primary" label="上傳" @click="upload(props.row,'product')"/>
          </q-td>
          <q-td key="name" :props="props">
              <div class="text-subtitle1 text-center">
              {{ props.row.name }}
              </div>
          </q-td>
          <q-td key="class" :props="props">
            <q-badge color="warning">
              {{ props.row.class }}
            </q-badge>
          </q-td>
          <q-td key="price" :props="props">
              <div class="text-negative">
              NT$&ensp;{{ props.row.price }}
              </div>
          </q-td>
          <q-td key="show" :props="props">
            <q-badge :color="props.row.show? 'positive' : 'nagative'">
              {{ props.row.show }}
            </q-badge>
          </q-td>
          <q-td key="action" :props="props">
            <q-btn push color="primary" label="編輯內容" @click="editProduct(props.row)"></q-btn>
            <q-btn push color="positive" label="預覽" @click="newProdouct = true"></q-btn>
            <q-btn push color="negative" label="刪除" @click="newProdouct = true"></q-btn>
          </q-td>
        </q-tr>
      </template>
    </q-table>
  </div>

  <!-- 新增商品的彈窗 -->
    <q-dialog v-model="add" persistent>
      <q-card style="min-width: 500px">
        <q-card-section>
          <div class="text-h6">新增商品</div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          <q-input class="text" v-model="addData.name" outlined placeholder="商品名稱" />
          <q-select outlined v-model="addData.class" :options="options" label="分類" />
          <q-input class="text" v-model="addData.subheading" outlined placeholder="副標題" />
          <q-input class="text" v-model="addData.intro" outlined placeholder="簡述" />
          <q-input prefix="$" class="text" v-model="addData.price" outlined placeholder="價格" />
          <q-input class="text" v-model="addData.description" type="textarea" outlined placeholder="介紹" />
        <q-toggle
          v-model="addData.show"
          checked-icon="check"
          color="green"
          unchecked-icon="clear"
          label="是否上架"
        />
        </q-card-section>

        <q-card-actions align="right" class="text-primary">
          <q-btn flat label="取消" v-close-popup />
          <q-btn flat label="送出" v-close-popup @click="create(addData)" />
        </q-card-actions>
      </q-card>
    </q-dialog>

    <!-- 編輯商品的彈窗 -->
    <q-dialog v-model="edit" persistent>
      <q-card style="min-width: 500px">
        <q-card-section>
          <div class="text-h6">商品編輯</div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          <q-input class="text" v-model="editData.name" outlined placeholder="商品名稱" />
          <q-select v-model="editData.class" outlined :options="options" label="分類" />
          <q-input class="text" v-model="editData.subheading" outlined placeholder="副標題" />
          <q-input class="text" v-model="editData.intro" outlined placeholder="簡述" />
          <q-input prefix="$" class="text" v-model="editData.price" outlined placeholder="價格" />
          <q-input class="text" v-model="editData.description" type="textarea" outlined placeholder="介紹" />
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
</template>

<script>
export default {
  inject: ['upload', 'updateProduct', 'createProduct', 'reload'],
  data () {
    return {
      columns: [
        { name: 'img', align: 'center', label: '商品圖片' },
        { name: 'upload', align: 'center', label: '圖片上傳' },
        { name: 'name', align: 'center', label: '名稱', sortable: true },
        { name: 'class', align: 'center', label: '分類', sortable: true },
        { name: 'price', align: 'center', label: '價格', sortable: true },
        { name: 'show', align: 'center', label: '是否上架', sortable: true },
        { name: 'action', align: 'center', label: '操作', sortable: true }
      ],
      data: [],
      add: false,
      addData: {
        class: '',
        name: '',
        show: true,
        subheading: '',
        intro: '',
        price: '',
        description: ''
      },

      // 編輯商品彈窗的參數
      edit: false,
      editData: {
        class: '',
        name: '',
        show: '',
        subheading: '',
        intro: '',
        price: '',
        description: ''
      },
      options: [
        'Google', 'Facebook', 'Twitter', 'Apple', 'Oracle'
      ],
      model: ''
    }
  },
  methods: {
    editProduct (data) {
      this.edit = true
      this.editData = data
    },
    update (data) {
      this.updateProduct(data)
    },
    create (data) {
      this.createProduct(data)
    }
  },
  mounted () {
    this.$axios.get(process.env.API + '/products')
      .then((response) => {
        this.data = response.data.datas
      }).catch((error) => {
        console.log(error.response.data)
      })
  }
}
</script>
