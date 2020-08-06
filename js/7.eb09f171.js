(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[7],{"713b":function(t,e,i){"use strict";i.r(e);var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("q-layout",{attrs:{view:"lHh Lpr lFf"}},[i("q-header",{attrs:{elevated:""}},[i("q-toolbar",[i("q-btn",{attrs:{flat:"",dense:"",round:"",icon:"menu","aria-label":"Menu"},on:{click:function(e){t.leftDrawerOpen=!t.leftDrawerOpen}}}),i("q-toolbar-title",[t._v("\n        小閣樓 App\n      ")]),0!==t.user.length?i("div",[i("q-btn",{attrs:{color:"red","icon-right":"fas fa-sign-out-alt",label:"登出"},on:{click:t.logout}})],1):t._e()],1)],1),i("q-drawer",{attrs:{"show-if-above":"",bordered:"","content-class":"bg-grey-1"},model:{value:t.leftDrawerOpen,callback:function(e){t.leftDrawerOpen=e},expression:"leftDrawerOpen"}},[i("q-list",[i("q-item-label",{staticClass:"text-grey-8",attrs:{header:""}},[t._v("\n        後台管理項目\n      ")]),t._l(t.essentialLinks,(function(e){return i("EssentialLink",t._b({key:e.title},"EssentialLink",e,!1))})),0!==t.user.length?i("ExpansionItem"):t._e()],2)],1),i("q-page-container",[t.isRouterAlive?i("router-view",{attrs:{to:t.isLogin}}):t._e()],1)],1)},n=[],o=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("q-item",{attrs:{clickable:"",tag:"a",to:t.to}},[t.icon?i("q-item-section",{attrs:{avatar:""}},[i("q-icon",{attrs:{name:t.icon}})],1):t._e(),i("q-item-section",[i("q-item-label",[t._v(t._s(t.title))]),i("q-item-label",{attrs:{caption:""}},[t._v("\n      "+t._s(t.caption)+"\n    ")])],1)],1)},s=[],r={name:"EssentialLink",props:{title:{type:String,required:!0},caption:{type:String,default:""},link:{type:String,default:"#"},icon:{type:String,default:""},to:{type:String,default:"/"}}},l=r,c=i("2877"),p=i("66e5"),d=i("4074"),u=i("0016"),m=i("0170"),h=i("eebe"),f=i.n(h),g=Object(c["a"])(l,o,s,!1,null,null,null),b=g.exports;f()(g,"components",{QItem:p["a"],QItemSection:d["a"],QIcon:u["a"],QItemLabel:m["a"]});var k=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"q-pa-md",staticStyle:{"max-width":"350px"}},[i("q-list",{staticClass:"rounded-borders",attrs:{bordered:""}},[i("q-expansion-item",{attrs:{"expand-separator":"",icon:"store",label:"小閣樓",caption:"網站內容管理","default-opened":"","content-inset-level":.5}},[i("q-expansion-item",{attrs:{"expand-separator":"",icon:"home",label:"首頁",caption:"首頁管理","default-opened":"","content-inset-level":.5}},t._l(t.homeLinks,(function(e){return i("EssentialLink",t._b({key:e.title},"EssentialLink",e,!1))})),1)],1),"admin"===t.accessRight?i("q-expansion-item",{attrs:{"expand-separator":"",icon:"store",label:"商店",caption:"商品管理","default-opened":"","content-inset-level":.5}},t._l(t.shopLinks,(function(e){return i("EssentialLink",t._b({key:e.title},"EssentialLink",e,!1))})),1):t._e(),"admin"===t.accessRight?i("q-expansion-item",{attrs:{"expand-separator":"",icon:"receipt",label:"訂單",caption:"訂單管理","default-opened":"","content-inset-level":.5}},t._l(t.orderLinks,(function(e){return i("EssentialLink",t._b({key:e.title},"EssentialLink",e,!1))})),1):t._e()],1)],1)},v=[],L={name:"ExpansionItem",components:{EssentialLink:b},data(){return{leftDrawerOpen:!1,homeLinks:[{title:"Carousel",caption:"輪播圖",icon:"image",to:"Carousel"},{title:"miniNews",caption:"小閣樓新鮮事",icon:"fas fa-newspaper",to:"Intro"},{title:"miniProducts",caption:"小閣樓商品",icon:"fas fa-shopping-bag",to:"miniProducts"},{title:"miniAbout",caption:"微介紹",icon:"fas fa-address-card",to:"miniAbout"},{title:"CallToAction",caption:"試吃連結",icon:"fas fa-phone-square",to:"CallToAction"},{title:"miniRecommend",caption:"好評推薦",icon:"fas fa-newspaper",to:"miniRecommend"},{title:"miniFooter",caption:"首頁的底部",icon:"fas fa-step-forward",to:"miniFooter"}],shopLinks:[{title:"Product List",caption:"商品列表",icon:"fas fa-list",to:"Products"},{title:"Categorys",caption:"商品分類",icon:"fas fa-tags",to:"Category"}],orderLinks:[{title:"Orders",caption:"訂單列表",icon:"fas fa-list",to:"orders"},{title:"Payment",caption:"付款方式",icon:"fas fa-tags",to:"Payment"}]}},computed:{accessRight(){return this.$store.getters.accessRight}}},w=L,_=i("1c1c"),x=i("3b73"),q=Object(c["a"])(w,k,v,!1,null,null,null),y=q.exports;f()(q,"components",{QList:_["a"],QExpansionItem:x["a"]});var E=i("df7c"),$=i.n(E),Q={name:"MainLayout",components:{EssentialLink:b,ExpansionItem:y},data(){return{isRouterAlive:!0,leftDrawerOpen:!1,essentialLinks:[{title:"Home",caption:"後台首頁",icon:"home",to:"/"}]}},methods:{logout(){this.$axios.delete("https://miniattic.herokuapp.com/logout").then(t=>{const e=t.data;e.success?(alert("登出成功"),this.$store.commit("logout"),this.$router.push("login")):alert(e.message)}).catch(t=>{alert(t.response.data.message)})},heartbeat(){this.$axios.get("https://miniattic.herokuapp.com/heartbeat").then(t=>{const e=t.data;this.user.length>0&&(e||(this.$store.commit("logout"),"/login"!==this.$route.path&&this.$router.push("login")))}).catch(()=>{this.$store.commit("logout"),"/login"!==this.$route.path&&this.$router.push("login")})},reload(){this.isRouterAlive=!1,this.$nextTick((function(){this.isRouterAlive=!0}))},upload(t,e){if(null===t.file||t.file.size>=1048576||!t.file.type.includes("image"))alert("檔案格式不符");else{const i=new FormData;i.append("image",t.file,t.item+$.a.extname(t.file.name)),i.append("collection",e),this.$axios.post("https://miniattic.herokuapp.com/img/"+t.item,i,{headers:{"content-Type":"multipart/form-data"}}).then(t=>{this.reload(),alert(t.data.message)}).catch(t=>{alert(t.response.data.message)})}},submit(t){this.$axios.patch("https://miniattic.herokuapp.com/pages/"+t.item,{show:t.show,description1:void 0===t.description1Model?t.description1:t.description1Model,description2:void 0===t.description2Model?t.description2:t.description2Model,description3:void 0===t.description3Model?t.description3:t.description3Model,link:void 0===t.linkModel?t.link:t.linkModel}).then(t=>{this.reload(),alert(t.data.message)}).catch(t=>{alert(t.response.data.message)})}},computed:{user(){return this.$store.getters.user},isLogin(){const t=0!==this.user.length?"/":"Login";return t}},mounted(){this.heartbeat(),setInterval(()=>{this.heartbeat()},1e4)},provide(){return{reload:this.reload,submit:this.submit,upload:this.upload}}},I=Q,O=i("4d5a"),C=i("e359"),M=i("65c6"),R=i("9c40"),A=i("6ac5"),D=i("9404"),P=i("09e3"),S=Object(c["a"])(I,a,n,!1,null,null,null);e["default"]=S.exports;f()(S,"components",{QLayout:O["a"],QHeader:C["a"],QToolbar:M["a"],QBtn:R["a"],QToolbarTitle:A["a"],QDrawer:D["a"],QList:_["a"],QItemLabel:m["a"],QPageContainer:P["a"]})}}]);