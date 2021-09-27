(function(e){function t(t){for(var n,l,r=t[0],c=t[1],s=t[2],u=0,m=[];u<r.length;u++)l=r[u],Object.prototype.hasOwnProperty.call(a,l)&&a[l]&&m.push(a[l][0]),a[l]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n]);d&&d(t);while(m.length)m.shift()();return o.push.apply(o,s||[]),i()}function i(){for(var e,t=0;t<o.length;t++){for(var i=o[t],n=!0,r=1;r<i.length;r++){var c=i[r];0!==a[c]&&(n=!1)}n&&(o.splice(t--,1),e=l(l.s=i[0]))}return e}var n={},a={app:0},o=[];function l(t){if(n[t])return n[t].exports;var i=n[t]={i:t,l:!1,exports:{}};return e[t].call(i.exports,i,i.exports,l),i.l=!0,i.exports}l.m=e,l.c=n,l.d=function(e,t,i){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(l.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)l.d(i,n,function(t){return e[t]}.bind(null,n));return i},l.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],c=r.push.bind(r);r.push=t,r=r.slice();for(var s=0;s<r.length;s++)t(r[s]);var d=c;o.push([0,"chunk-vendors"]),i()})({0:function(e,t,i){e.exports=i("56d7")},"56d7":function(e,t,i){"use strict";i.r(t);i("e260"),i("e6cf"),i("cca6"),i("a79d");var n=i("2b0e"),a=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"container"},[i("b-button",{directives:[{name:"b-modal",rawName:"v-b-modal.modal-add",modifiers:{"modal-add":!0}}],staticStyle:{margin:"10px 0"}},[e._v("Add new record")]),i("Table",{attrs:{info:e.info},on:{"show-delete-modal":e.showDeleteModal,"show-edit-modal":e.showEditModal}}),i("ModalEdit",{ref:"editForm",on:{"update-item":e.updateItem,"close-modal":e.closeModal}}),i("ModalAdd",{on:{"save-item":e.saveItem}}),i("ModalDelete",{on:{"delete-item":e.deleteItem,"close-modal":e.closeModal}})],1)},o=[],l=(i("a434"),function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[i("table",{staticClass:"table table-bordered"},[e._m(0),i("tbody",e._l(e.info,(function(t,n){return i("tr",{key:n},[i("td",[e._v(e._s(t.productName))]),i("td",[e._v(e._s("$"+t.unitPrice.toFixed(2)))]),i("td",[e._v(e._s(t.inStock))]),i("td",[e._v(e._s(t.discontied))]),i("td",[i("b-button",{directives:[{name:"b-modal",rawName:"v-b-modal.modal-edit",modifiers:{"modal-edit":!0}}],staticStyle:{margin:"0 5px"},on:{click:function(t){return e.showEditModal(n)}}},[e._v("Edit")]),i("b-button",{directives:[{name:"b-modal",rawName:"v-b-modal.modal-delete",modifiers:{"modal-delete":!0}}],staticStyle:{margin:"0 5px"},on:{click:function(t){return e.showDeleteModal(n)}}},[e._v("Delete")])],1)])})),0)])])}),r=[function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("thead",[i("tr",[i("th",[e._v("Product name")]),i("th",[e._v("Unit price")]),i("th",[e._v("Units in stock")]),i("th",[e._v("Discontinued")]),i("th")])])}],c=(i("f9e3"),i("2dd8"),{props:["info"],methods:{showDeleteModal:function(e){this.$emit("show-delete-modal",e)},showEditModal:function(e){this.$emit("show-edit-modal",e)}}}),s=c,d=i("2877"),u=Object(d["a"])(s,l,r,!1,null,null,null),m=u.exports,p=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[i("b-modal",{attrs:{id:"modal-edit",title:"Edit"},on:{ok:e.updateItem,hidden:e.closeModal}},[i("form",[i("b-form-group",{attrs:{label:"Product name","label-for":"name","invalid-feedback":"Incorrect value",state:e.nameState}},[i("b-form-input",{attrs:{id:"name",state:e.nameState,required:"",type:"text"},model:{value:e.name,callback:function(t){e.name=t},expression:"name"}})],1),i("b-form-group",{attrs:{label:"Unit price","label-for":"price","invalid-feedback":"Incorrect value",state:e.priceState}},[i("b-form-input",{staticClass:"form-control",attrs:{id:"price",state:e.priceState,required:"",type:"number"},model:{value:e.price,callback:function(t){e.price=e._n(t)},expression:"price"}})],1),i("b-form-group",{attrs:{label:"In stock","label-for":"count","invalid-feedback":"Incorrect value",state:e.countState}},[i("b-form-input",{staticClass:"form-control",attrs:{id:"count",state:e.countState,required:"",type:"number"},model:{value:e.count,callback:function(t){e.count=e._n(t)},expression:"count"}})],1),i("div",{staticClass:"form-check"},[i("input",{directives:[{name:"model",rawName:"v-model",value:e.sale,expression:"sale"}],staticClass:"form-check-input",attrs:{type:"checkbox",id:"sale"},domProps:{checked:Array.isArray(e.sale)?e._i(e.sale,null)>-1:e.sale},on:{change:function(t){var i=e.sale,n=t.target,a=!!n.checked;if(Array.isArray(i)){var o=null,l=e._i(i,o);n.checked?l<0&&(e.sale=i.concat([o])):l>-1&&(e.sale=i.slice(0,l).concat(i.slice(l+1)))}else e.sale=a}}}),i("label",{staticClass:"form-check-label",attrs:{for:"sale"}},[e._v("Discontied")])])],1)])],1)},f=[],h=(i("b0c0"),i("8ba4"),i("a9e3"),{data:function(){return{name:"",price:"",count:"",sale:"",nameState:null,priceState:null,countState:null}},methods:{setupEditModel:function(e){this.name=e.productName,this.price=e.unitPrice,this.count=e.inStock,this.sale=e.discontied},checkFormValidity:function(){var e=!0;return this.nameState=!!this.name,e=e&&this.nameState,this.priceState=!!this.price&&this.price>=1,e=e&&this.priceState,this.countState=""!==this.count&&this.count>=0&&Number.isInteger(this.count),e=e&&this.countState,e},updateItem:function(e){this.checkFormValidity()?(this.$emit("update-item",{productName:this.name,unitPrice:this.price,inStock:this.count,discontied:this.sale}),this.closeModal()):e.preventDefault()},closeModal:function(){this.nameState=null,this.priceState=null,this.countState=null,this.$emit("close-modal")}}}),b=h,v=Object(d["a"])(b,p,f,!1,null,null,null),S=v.exports,k=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[i("b-modal",{attrs:{id:"modal-add",title:"Add"},on:{ok:e.saveItem,hidden:e.closeModal}},[i("form",[i("b-form-group",{attrs:{label:"Product name","label-for":"name","invalid-feedback":"Incorrect value",state:e.nameState}},[i("b-form-input",{attrs:{id:"name",state:e.nameState,required:"",type:"text"},model:{value:e.name,callback:function(t){e.name=t},expression:"name"}})],1),i("b-form-group",{attrs:{label:"Unit price","label-for":"price","invalid-feedback":"Incorrect value",state:e.priceState}},[i("b-form-input",{staticClass:"form-control",attrs:{id:"price",state:e.priceState,required:"",type:"number",min:"1"},model:{value:e.price,callback:function(t){e.price=e._n(t)},expression:"price"}})],1),i("b-form-group",{attrs:{label:"In stock","label-for":"count","invalid-feedback":"Incorrect value",state:e.countState}},[i("b-form-input",{staticClass:"form-control",attrs:{id:"count",state:e.countState,required:"",type:"number"},model:{value:e.count,callback:function(t){e.count=e._n(t)},expression:"count"}})],1),i("div",{staticClass:"form-check"},[i("input",{directives:[{name:"model",rawName:"v-model",value:e.sale,expression:"sale"}],staticClass:"form-check-input",attrs:{type:"checkbox",id:"sale"},domProps:{checked:Array.isArray(e.sale)?e._i(e.sale,null)>-1:e.sale},on:{change:function(t){var i=e.sale,n=t.target,a=!!n.checked;if(Array.isArray(i)){var o=null,l=e._i(i,o);n.checked?l<0&&(e.sale=i.concat([o])):l>-1&&(e.sale=i.slice(0,l).concat(i.slice(l+1)))}else e.sale=a}}}),i("label",{staticClass:"form-check-label",attrs:{for:"sale"}},[e._v("Discontied")])])],1)])],1)},_=[],y={data:function(){return{name:"",price:"",count:0,sale:!1,nameState:null,priceState:null,countState:null}},methods:{checkFormValidity:function(){var e=!0;return this.nameState=!!this.name,e=e&&this.nameState,this.priceState=!!this.price&&this.price>=1,e=e&&this.priceState,this.countState=""!==this.count&&this.count>=0&&Number.isInteger(this.count),e=e&&this.countState,e},saveItem:function(e){this.checkFormValidity()?(this.$emit("save-item",{productName:this.name,unitPrice:this.price,inStock:this.count,discontied:this.sale}),this.closeModal()):e.preventDefault()},closeModal:function(){this.$emit("close-modal"),this.name="",this.price="",this.count=0,this.sale=!1,this.nameState=null,this.priceState=null,this.countState=null}}},x=y,I=Object(d["a"])(x,k,_,!1,null,null,null),M=I.exports,w=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[i("b-modal",{attrs:{id:"modal-delete",title:"Delete"},on:{ok:e.deleteItem,hidden:e.closeModal}},[i("div",[e._v("Are you sure you want to delete this record?")])])],1)},g=[],P={methods:{deleteItem:function(){this.$emit("delete-item")},closeModal:function(){this.$emit("close-modal")}}},N=P,$=Object(d["a"])(N,w,g,!1,null,null,null),E=$.exports,O={name:"App",components:{Table:m,ModalEdit:S,ModalAdd:M,ModalDelete:E},data:function(){return{info:[{productName:"Product 1",unitPrice:3,inStock:7,discontied:!0},{productName:"Product 2",unitPrice:4,inStock:0,discontied:!1},{productName:"Product 3",unitPrice:32,inStock:15,discontied:!0},{productName:"Product 4",unitPrice:3,inStock:8,discontied:!0}],updatedIndex:-1,deletedIndex:-1}},methods:{deleteItem:function(){this.info.splice(this.deletedIndex,1),this.deletedIndex=-1},showEditModal:function(e){this.updatedIndex=e,this.$refs.editForm.setupEditModel(this.info[e])},showDeleteModal:function(e){this.deletedIndex=e},updateItem:function(e){this.info[this.updatedIndex].productName=e.productName,this.info[this.updatedIndex].unitPrice=e.unitPrice,this.info[this.updatedIndex].inStock=e.inStock,this.info[this.updatedIndex].discontied=e.discontied,this.updatedIndex=-1},saveItem:function(e){this.info.unshift(e)},closeModal:function(){this.updatedIndex=-1,this.deletedIndex=-1}}},j=O,A=Object(d["a"])(j,a,o,!1,null,null,null),D=A.exports,C=i("5f5b"),F=i("b1e0");n["default"].use(C["a"]),n["default"].use(F["a"]),n["default"].config.productionTip=!1,new n["default"]({render:function(e){return e(D)}}).$mount("#app")}});
//# sourceMappingURL=app.626484ab.js.map