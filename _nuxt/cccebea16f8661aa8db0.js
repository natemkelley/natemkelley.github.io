(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{168:function(t,e,n){var content=n(215);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(36).default)("a054bab0",content,!0,{sourceMap:!1})},214:function(t,e,n){"use strict";var o=n(168);n.n(o).a},215:function(t,e,n){(t.exports=n(35)(!1)).push([t.i,".me-cheering[data-v-093c3824]{margin-top:45px}.bouncing[data-v-093c3824]{text-align:center;-webkit-animation:bounce-data-v-093c3824 .45s;animation:bounce-data-v-093c3824 .45s;-webkit-animation-direction:alternate;animation-direction:alternate;-webkit-animation-timing-function:cubic-bezier(.5,.05,1,.5);animation-timing-function:cubic-bezier(.5,.05,1,.5);-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite}@-webkit-keyframes bounce-data-v-093c3824{0%{transform:translateZ(0)}to{transform:translate3d(0,17px,0)}}@keyframes bounce-data-v-093c3824{0%{transform:translateZ(0)}to{transform:translate3d(0,17px,0)}}",""])},218:function(t,e,n){"use strict";n.r(e);var o={name:"ModalLarge",data:function(){return{nateCheering:"nate/cheering_right"}},mounted:function(){this.toggleCheer("left"),this.$emit("loaded")},methods:{toggleCheer:function(t){var e=this;setTimeout((function(){e.nateCheering="nate/cheering_"+t,"right"===t?e.toggleCheer("left"):e.toggleCheer("right")}),900)}}},r=(n(214),n(19)),component=Object(r.a)(o,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"container-small test-component"},[e("h1",{staticClass:"text-center"},[this._v("Awesome Content")]),this._v(" "),e("div",{staticClass:"bar"}),this._v(" "),e("p",[this._v("Works like magic! By clicking on the buttons you will get access to more in depth explanations about some of my projects.")]),this._v(" "),e("div",{staticClass:"me-cheering bouncing"},[e("svg-icon",{attrs:{name:this.nateCheering,width:"200px",height:"200px"}})],1)])}),[],!1,null,"093c3824",null);e.default=component.exports}}]);