(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{158:function(t,e,n){var content=n(288);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(27).default)("80ec968c",content,!0,{sourceMap:!1})},287:function(t,e,n){"use strict";var r=n(158);n.n(r).a},288:function(t,e,n){(t.exports=n(26)(!1)).push([t.i,"canvas[data-v-350f9124]{background-color:hsla(0,0%,100%,.94);border-radius:12px}",""])},289:function(t,e,n){"use strict";var r={name:"BarChart",extends:n(293).a,props:["chartData"],data:function(){return{options:{scales:{yAxes:[{ticks:{beginAtZero:!0,max:100}}]},maintainAspectRatio:!0,layout:{padding:{left:20,right:22,top:20,bottom:20}}}}},mounted:function(){this.renderChart(this.chartData,this.options)},methods:{}},j=(n(287),n(12)),component=Object(j.a)(r,void 0,void 0,!1,null,"350f9124",null);e.a=component.exports},292:function(t,e,n){var map={"./af":160,"./af.js":160,"./ar":161,"./ar-dz":162,"./ar-dz.js":162,"./ar-kw":163,"./ar-kw.js":163,"./ar-ly":164,"./ar-ly.js":164,"./ar-ma":165,"./ar-ma.js":165,"./ar-sa":166,"./ar-sa.js":166,"./ar-tn":167,"./ar-tn.js":167,"./ar.js":161,"./az":168,"./az.js":168,"./be":169,"./be.js":169,"./bg":170,"./bg.js":170,"./bm":171,"./bm.js":171,"./bn":172,"./bn.js":172,"./bo":173,"./bo.js":173,"./br":174,"./br.js":174,"./bs":175,"./bs.js":175,"./ca":176,"./ca.js":176,"./cs":177,"./cs.js":177,"./cv":178,"./cv.js":178,"./cy":179,"./cy.js":179,"./da":180,"./da.js":180,"./de":181,"./de-at":182,"./de-at.js":182,"./de-ch":183,"./de-ch.js":183,"./de.js":181,"./dv":184,"./dv.js":184,"./el":185,"./el.js":185,"./en-SG":186,"./en-SG.js":186,"./en-au":187,"./en-au.js":187,"./en-ca":188,"./en-ca.js":188,"./en-gb":189,"./en-gb.js":189,"./en-ie":190,"./en-ie.js":190,"./en-il":191,"./en-il.js":191,"./en-nz":192,"./en-nz.js":192,"./eo":193,"./eo.js":193,"./es":194,"./es-do":195,"./es-do.js":195,"./es-us":196,"./es-us.js":196,"./es.js":194,"./et":197,"./et.js":197,"./eu":198,"./eu.js":198,"./fa":199,"./fa.js":199,"./fi":200,"./fi.js":200,"./fo":201,"./fo.js":201,"./fr":202,"./fr-ca":203,"./fr-ca.js":203,"./fr-ch":204,"./fr-ch.js":204,"./fr.js":202,"./fy":205,"./fy.js":205,"./ga":206,"./ga.js":206,"./gd":207,"./gd.js":207,"./gl":208,"./gl.js":208,"./gom-latn":209,"./gom-latn.js":209,"./gu":210,"./gu.js":210,"./he":211,"./he.js":211,"./hi":212,"./hi.js":212,"./hr":213,"./hr.js":213,"./hu":214,"./hu.js":214,"./hy-am":215,"./hy-am.js":215,"./id":216,"./id.js":216,"./is":217,"./is.js":217,"./it":218,"./it-ch":219,"./it-ch.js":219,"./it.js":218,"./ja":220,"./ja.js":220,"./jv":221,"./jv.js":221,"./ka":222,"./ka.js":222,"./kk":223,"./kk.js":223,"./km":224,"./km.js":224,"./kn":225,"./kn.js":225,"./ko":226,"./ko.js":226,"./ku":227,"./ku.js":227,"./ky":228,"./ky.js":228,"./lb":229,"./lb.js":229,"./lo":230,"./lo.js":230,"./lt":231,"./lt.js":231,"./lv":232,"./lv.js":232,"./me":233,"./me.js":233,"./mi":234,"./mi.js":234,"./mk":235,"./mk.js":235,"./ml":236,"./ml.js":236,"./mn":237,"./mn.js":237,"./mr":238,"./mr.js":238,"./ms":239,"./ms-my":240,"./ms-my.js":240,"./ms.js":239,"./mt":241,"./mt.js":241,"./my":242,"./my.js":242,"./nb":243,"./nb.js":243,"./ne":244,"./ne.js":244,"./nl":245,"./nl-be":246,"./nl-be.js":246,"./nl.js":245,"./nn":247,"./nn.js":247,"./pa-in":248,"./pa-in.js":248,"./pl":249,"./pl.js":249,"./pt":250,"./pt-br":251,"./pt-br.js":251,"./pt.js":250,"./ro":252,"./ro.js":252,"./ru":253,"./ru.js":253,"./sd":254,"./sd.js":254,"./se":255,"./se.js":255,"./si":256,"./si.js":256,"./sk":257,"./sk.js":257,"./sl":258,"./sl.js":258,"./sq":259,"./sq.js":259,"./sr":260,"./sr-cyrl":261,"./sr-cyrl.js":261,"./sr.js":260,"./ss":262,"./ss.js":262,"./sv":263,"./sv.js":263,"./sw":264,"./sw.js":264,"./ta":265,"./ta.js":265,"./te":266,"./te.js":266,"./tet":267,"./tet.js":267,"./tg":268,"./tg.js":268,"./th":269,"./th.js":269,"./tl-ph":270,"./tl-ph.js":270,"./tlh":271,"./tlh.js":271,"./tr":272,"./tr.js":272,"./tzl":273,"./tzl.js":273,"./tzm":274,"./tzm-latn":275,"./tzm-latn.js":275,"./tzm.js":274,"./ug-cn":276,"./ug-cn.js":276,"./uk":277,"./uk.js":277,"./ur":278,"./ur.js":278,"./uz":279,"./uz-latn":280,"./uz-latn.js":280,"./uz.js":279,"./vi":281,"./vi.js":281,"./x-pseudo":282,"./x-pseudo.js":282,"./yo":283,"./yo.js":283,"./zh-cn":284,"./zh-cn.js":284,"./zh-hk":285,"./zh-hk.js":285,"./zh-tw":286,"./zh-tw.js":286};function r(t){var e=j(t);return n(e)}function j(t){if(!n.o(map,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return map[t]}r.keys=function(){return Object.keys(map)},r.resolve=j,t.exports=r,r.id=292},453:function(t,e,n){"use strict";n.r(e);var r=n(290),j=n.n(r),o=n(289),l={name:"Test",layout:"indipage",components:{VuePureLightbox:j.a,BarChart:o.a},data:function(){return{chartData:{labels:["January","February"],datasets:[{label:"Data One",backgroundColor:"#f87979",data:[40,20]}]}}},mounted:function(){this.$emit("loaded")}},c=n(12),component=Object(c.a)(l,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"container-small test-component"},[e("h1",{staticClass:"text-center"},[this._v("M.S. USER EXPERIENCE")]),this._v(" "),e("h3",{staticClass:"text-center"},[this._v("Arizona State University - 2019 - 2020")]),this._v(" "),e("div",{staticClass:"bar"}),this._v(" "),this._m(0),this._v(" "),e("VuePureLightbox",{attrs:{thumbnail:"https://www.entertainmentsolutionsinc.com/wp-content/uploads/2017/11/logo-asu-white-bg.jpg",images:["https://www.entertainmentsolutionsinc.com/wp-content/uploads/2017/11/logo-asu-white-bg.jpg","https://asunow.asu.edu/sites/default/files/styles/panopoly_image_full/public/nancy-cooke-lab.jpg?itok=2F1fmza3","https://www.aiatopten.org/sites/default/files/styles/popup/public/ASU%20COTE%20Top%2010%20images_Page_18.jpg?itok=floVFYo-"]}})],1)}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"summary"},[n("ul",[n("li",[t._v("4.0 GPA as of December 12, 2019")]),t._v(" "),n("li",[n("strong",[t._v("Developed expertise in Vue.js")])]),t._v(" "),n("li",[t._v("Working with the United States Air Force on research focused on human-robot teaming")]),t._v(" "),n("li",[t._v("Completed 12 credit hours of courses related to product design ")]),t._v(" "),n("li",[t._v("Studied UX focused Agile management methods, ")]),t._v(" "),n("li",[t._v("Practiced user centered design thinking strategies")]),t._v(" "),n("li",[t._v("Created 12+ projects related to graphic and experience design")])])])}],!1,null,"597e216b",null);e.default=component.exports}}]);