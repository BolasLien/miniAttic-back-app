(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[10],{"013f":function(t,s,e){"use strict";e.r(s);var a=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("q-page",{staticClass:"flex flex-center",attrs:{id:"login"}},[e("div",{staticClass:"q-pa-md"},[e("q-form",{staticClass:"q-gutter-md",on:{submit:t.onSubmit,reset:t.onReset}},[e("q-input",{staticClass:"input",attrs:{clearable:"",filled:"",label:"輸入帳號"},model:{value:t.account,callback:function(s){t.account=s},expression:"account"}}),e("div"),e("q-input",{staticClass:"input",attrs:{clearable:"",filled:"",type:t.isPwd?"password":"text",label:"輸入密碼"},scopedSlots:t._u([{key:"append",fn:function(){return[e("q-icon",{staticClass:"cursor-pointer",attrs:{name:t.isPwd?"visibility_off":"visibility"},on:{click:function(s){t.isPwd=!t.isPwd}}})]},proxy:!0}]),model:{value:t.password,callback:function(s){t.password=s},expression:"password"}}),e("q-btn",{attrs:{color:"blue",label:"登入",type:"submit"}}),e("q-btn",{attrs:{label:"重設",type:"reset"}}),e("q-btn",{attrs:{label:"註冊",to:"reg"}})],1)],1)])},o=[],n={name:"Login",data(){return{account:"",password:"",isPwd:!0}},computed:{token(){return this.$store.getters.token}},methods:{onSubmit(){this.$axios.post("https://miniattic.herokuapp.com/back/login",{account:this.account,password:this.password}).then(t=>{const s=t.data;s.success?(this.$q.dialog({title:"alert",message:"登入成功"}),this.$store.commit("login",s),this.$router.push("/")):alert(s.message)}).catch(t=>{alert(t.response.data.message)})},onReset(){this.account="",this.password=""}}},i=n,c=e("2877"),l=e("9989"),r=e("0378"),u=e("27f9"),p=e("0016"),d=e("9c40"),b=e("eebe"),m=e.n(b),w=Object(c["a"])(i,a,o,!1,null,null,null);s["default"]=w.exports;m()(w,"components",{QPage:l["a"],QForm:r["a"],QInput:u["a"],QIcon:p["a"],QBtn:d["a"]})}}]);