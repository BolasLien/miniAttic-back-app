(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[16],{e1e5:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"category"}},[a("div",{staticClass:"row q-ma-md"},[a("q-table",{staticClass:"col-lg-12 col-sm-12",attrs:{title:"付款方式",data:t.data,columns:t.columns,"row-key":"name"},scopedSlots:t._u([{key:"top",fn:function(){return[a("div",{staticClass:"text-h4"},[t._v("\n        付款方式\n      ")]),a("q-space"),a("q-btn",{attrs:{push:"",color:"positive",label:"新增分類"},on:{click:function(e){t.add=!0}}})]},proxy:!0},{key:"body",fn:function(e){return[a("q-tr",{attrs:{props:e}},[a("q-td",{key:"itemId",attrs:{props:e}},[a("div",{staticClass:"text-subtitle1 text-center"},[t._v("\n              "+t._s(e.row.item)+"\n              ")])]),a("q-td",{key:"name",attrs:{props:e}},[a("div",{staticClass:"text-subtitle1 text-center"},[t._v("\n              "+t._s(e.row.name)+"\n              ")])]),a("q-td",{key:"price",attrs:{props:e}},[a("div",{staticClass:"text-subtitle1 text-center"},[t._v("\n              "+t._s(e.row.price)+"\n              ")])]),a("q-td",{key:"description",attrs:{props:e}},[a("div",{staticClass:"text-subtitle1 text-center"},[t._v("\n              "+t._s(e.row.description)+"\n              ")])]),a("q-td",{key:"show",attrs:{props:e}},[a("q-badge",{attrs:{color:e.row.show?"positive":"nagative"}},[t._v("\n              "+t._s(e.row.show)+"\n            ")])],1),a("q-td",{key:"action",attrs:{props:e}},[a("q-btn",{attrs:{push:"",color:"primary",label:"編輯內容"},on:{click:function(a){return t.editPayment(e.row)}}}),a("q-btn",{attrs:{push:"",color:"negative",label:"刪除"},on:{click:function(a){return t.remove(e.row)}}})],1)],1)]}}])}),a("q-dialog",{attrs:{persistent:""},model:{value:t.add,callback:function(e){t.add=e},expression:"add"}},[a("q-card",{staticStyle:{"min-width":"500px"}},[a("q-card-section",[a("div",{staticClass:"text-h6"},[t._v("新增付款方式")])]),a("q-card-section",{staticClass:"q-pt-none"},[a("q-input",{staticClass:"text",attrs:{outlined:"",placeholder:"序號"},model:{value:t.addData.item,callback:function(e){t.$set(t.addData,"item",e)},expression:"addData.item"}}),a("q-input",{staticClass:"text",attrs:{outlined:"",placeholder:"名稱"},model:{value:t.addData.name,callback:function(e){t.$set(t.addData,"name",e)},expression:"addData.name"}}),a("q-input",{staticClass:"text",attrs:{outlined:"",placeholder:"價格"},model:{value:t.addData.price,callback:function(e){t.$set(t.addData,"price",e)},expression:"addData.price"}}),a("q-input",{staticClass:"text",attrs:{outlined:"",placeholder:"說明"},model:{value:t.addData.description,callback:function(e){t.$set(t.addData,"description",e)},expression:"addData.description"}}),a("q-toggle",{attrs:{"checked-icon":"check",color:"green","unchecked-icon":"clear",label:"是否顯示"},model:{value:t.addData.show,callback:function(e){t.$set(t.addData,"show",e)},expression:"addData.show"}})],1),a("q-card-actions",{staticClass:"text-primary",attrs:{align:"right"}},[a("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{flat:"",label:"取消"}}),a("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{flat:"",label:"送出"},on:{click:function(e){return t.create(t.addData)}}})],1)],1)],1),a("q-dialog",{attrs:{persistent:""},model:{value:t.edit,callback:function(e){t.edit=e},expression:"edit"}},[a("q-card",{staticStyle:{"min-width":"500px"}},[a("q-card-section",[a("div",{staticClass:"text-h6"},[t._v("編輯付款方式")])]),a("q-card-section",{staticClass:"q-pt-none"},[a("q-input",{staticClass:"text",attrs:{outlined:"",placeholder:"名稱"},model:{value:t.editData.name,callback:function(e){t.$set(t.editData,"name",e)},expression:"editData.name"}}),a("q-input",{staticClass:"text",attrs:{outlined:"",placeholder:"價格"},model:{value:t.editData.price,callback:function(e){t.$set(t.editData,"price",e)},expression:"editData.price"}}),a("q-input",{staticClass:"text",attrs:{outlined:"",placeholder:"說明"},model:{value:t.editData.description,callback:function(e){t.$set(t.editData,"description",e)},expression:"editData.description"}}),a("q-toggle",{attrs:{"checked-icon":"check",color:"green","unchecked-icon":"clear",label:"是否上架"},model:{value:t.editData.show,callback:function(e){t.$set(t.editData,"show",e)},expression:"editData.show"}})],1),a("q-card-actions",{staticClass:"text-primary",attrs:{align:"right"}},[a("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{flat:"",label:"取消"},on:{click:function(e){t.edit=!1}}}),a("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{flat:"",label:"送出"},on:{click:function(e){return t.update(t.editData)}}})],1)],1)],1)],1)])},i=[],n=(a("e01a"),{inject:["reload"],data(){return{columns:[{name:"itemId",field:"itemId",align:"center",label:"序號",sortable:!0,sort:(t,e)=>parseInt(t,10)-parseInt(e,10)},{name:"name",field:"name",align:"center",label:"名稱"},{name:"price",field:"price",align:"center",label:"價格"},{name:"description",field:"description",align:"center",label:"說明"},{name:"show",field:"show",align:"center",label:"是否顯示",sortable:!0,sort:(t,e)=>parseInt(t,10)-parseInt(e,10)},{name:"action",field:"action",align:"center",label:"操作"}],data:[],add:!1,addData:{},edit:!1,editData:{}}},computed:{token(){return this.$store.getters.token}},methods:{editPayment(t){this.edit=!0,this.editData=t},create(t){this.$axios.post("https://miniattic.herokuapp.com/payments",{item:t.item,name:t.name,price:t.price,description:t.description,show:t.show},{headers:{Authorization:"Bearer "+this.token}}).then(t=>{this.reload(),alert(t.data.message)}).catch(t=>{alert(t.response.data.message)})},update(t){this.$axios.patch("https://miniattic.herokuapp.com/payments/"+t.item,{name:t.name,price:t.price,description:t.description,show:t.show},{headers:{Authorization:"Bearer "+this.token}}).then(t=>{this.reload(),alert(t.data.message)}).catch(t=>{alert(t.response.data.message)})},remove(t){this.$axios.delete("https://miniattic.herokuapp.com/payments/"+t.item,{headers:{Authorization:"Bearer "+this.token}}).then(t=>{this.reload(),alert(t.data.message)}).catch(t=>{console.log(t)})}},mounted(){this.$axios.get("https://miniattic.herokuapp.com/payments").then(t=>{this.data=t.data.datas}).catch(t=>{console.log(t.response.data)})}}),o=n,c=a("2877"),r=a("eaac"),l=a("2c91"),d=a("9c40"),p=a("bd08"),u=a("db86"),m=a("58a81"),h=a("24e8"),b=a("f09f"),v=a("a370"),k=a("27f9"),f=a("9564"),q=a("4b7e"),x=a("7f67"),w=a("eebe"),g=a.n(w),D=Object(c["a"])(o,s,i,!1,null,null,null);e["default"]=D.exports;g()(D,"components",{QTable:r["a"],QSpace:l["a"],QBtn:d["a"],QTr:p["a"],QTd:u["a"],QBadge:m["a"],QDialog:h["a"],QCard:b["a"],QCardSection:v["a"],QInput:k["a"],QToggle:f["a"],QCardActions:q["a"]}),g()(D,"directives",{ClosePopup:x["a"]})}}]);