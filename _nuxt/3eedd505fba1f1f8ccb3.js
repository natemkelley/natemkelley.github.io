(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{164:function(e,t,o){var content=o(294);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,o(30).default)("80ec968c",content,!0,{sourceMap:!1})},293:function(e,t,o){"use strict";var n=o(164);o.n(n).a},294:function(e,t,o){(e.exports=o(29)(!1)).push([e.i,"canvas[data-v-350f9124]{background-color:hsla(0,0%,100%,.94);border-radius:12px}",""])},295:function(e,t,o){"use strict";var n={name:"BarChart",extends:o(299).a,props:["chartData"],data:function(){return{options:{scales:{yAxes:[{ticks:{beginAtZero:!0,max:100}}]},maintainAspectRatio:!0,layout:{padding:{left:20,right:22,top:20,bottom:20}}}}},mounted:function(){this.renderChart(this.chartData,this.options)},methods:{}},r=(o(293),o(14)),component=Object(r.a)(n,void 0,void 0,!1,null,"350f9124",null);t.a=component.exports},298:function(e,t,o){var map={"./af":166,"./af.js":166,"./ar":167,"./ar-dz":168,"./ar-dz.js":168,"./ar-kw":169,"./ar-kw.js":169,"./ar-ly":170,"./ar-ly.js":170,"./ar-ma":171,"./ar-ma.js":171,"./ar-sa":172,"./ar-sa.js":172,"./ar-tn":173,"./ar-tn.js":173,"./ar.js":167,"./az":174,"./az.js":174,"./be":175,"./be.js":175,"./bg":176,"./bg.js":176,"./bm":177,"./bm.js":177,"./bn":178,"./bn.js":178,"./bo":179,"./bo.js":179,"./br":180,"./br.js":180,"./bs":181,"./bs.js":181,"./ca":182,"./ca.js":182,"./cs":183,"./cs.js":183,"./cv":184,"./cv.js":184,"./cy":185,"./cy.js":185,"./da":186,"./da.js":186,"./de":187,"./de-at":188,"./de-at.js":188,"./de-ch":189,"./de-ch.js":189,"./de.js":187,"./dv":190,"./dv.js":190,"./el":191,"./el.js":191,"./en-SG":192,"./en-SG.js":192,"./en-au":193,"./en-au.js":193,"./en-ca":194,"./en-ca.js":194,"./en-gb":195,"./en-gb.js":195,"./en-ie":196,"./en-ie.js":196,"./en-il":197,"./en-il.js":197,"./en-nz":198,"./en-nz.js":198,"./eo":199,"./eo.js":199,"./es":200,"./es-do":201,"./es-do.js":201,"./es-us":202,"./es-us.js":202,"./es.js":200,"./et":203,"./et.js":203,"./eu":204,"./eu.js":204,"./fa":205,"./fa.js":205,"./fi":206,"./fi.js":206,"./fo":207,"./fo.js":207,"./fr":208,"./fr-ca":209,"./fr-ca.js":209,"./fr-ch":210,"./fr-ch.js":210,"./fr.js":208,"./fy":211,"./fy.js":211,"./ga":212,"./ga.js":212,"./gd":213,"./gd.js":213,"./gl":214,"./gl.js":214,"./gom-latn":215,"./gom-latn.js":215,"./gu":216,"./gu.js":216,"./he":217,"./he.js":217,"./hi":218,"./hi.js":218,"./hr":219,"./hr.js":219,"./hu":220,"./hu.js":220,"./hy-am":221,"./hy-am.js":221,"./id":222,"./id.js":222,"./is":223,"./is.js":223,"./it":224,"./it-ch":225,"./it-ch.js":225,"./it.js":224,"./ja":226,"./ja.js":226,"./jv":227,"./jv.js":227,"./ka":228,"./ka.js":228,"./kk":229,"./kk.js":229,"./km":230,"./km.js":230,"./kn":231,"./kn.js":231,"./ko":232,"./ko.js":232,"./ku":233,"./ku.js":233,"./ky":234,"./ky.js":234,"./lb":235,"./lb.js":235,"./lo":236,"./lo.js":236,"./lt":237,"./lt.js":237,"./lv":238,"./lv.js":238,"./me":239,"./me.js":239,"./mi":240,"./mi.js":240,"./mk":241,"./mk.js":241,"./ml":242,"./ml.js":242,"./mn":243,"./mn.js":243,"./mr":244,"./mr.js":244,"./ms":245,"./ms-my":246,"./ms-my.js":246,"./ms.js":245,"./mt":247,"./mt.js":247,"./my":248,"./my.js":248,"./nb":249,"./nb.js":249,"./ne":250,"./ne.js":250,"./nl":251,"./nl-be":252,"./nl-be.js":252,"./nl.js":251,"./nn":253,"./nn.js":253,"./pa-in":254,"./pa-in.js":254,"./pl":255,"./pl.js":255,"./pt":256,"./pt-br":257,"./pt-br.js":257,"./pt.js":256,"./ro":258,"./ro.js":258,"./ru":259,"./ru.js":259,"./sd":260,"./sd.js":260,"./se":261,"./se.js":261,"./si":262,"./si.js":262,"./sk":263,"./sk.js":263,"./sl":264,"./sl.js":264,"./sq":265,"./sq.js":265,"./sr":266,"./sr-cyrl":267,"./sr-cyrl.js":267,"./sr.js":266,"./ss":268,"./ss.js":268,"./sv":269,"./sv.js":269,"./sw":270,"./sw.js":270,"./ta":271,"./ta.js":271,"./te":272,"./te.js":272,"./tet":273,"./tet.js":273,"./tg":274,"./tg.js":274,"./th":275,"./th.js":275,"./tl-ph":276,"./tl-ph.js":276,"./tlh":277,"./tlh.js":277,"./tr":278,"./tr.js":278,"./tzl":279,"./tzl.js":279,"./tzm":280,"./tzm-latn":281,"./tzm-latn.js":281,"./tzm.js":280,"./ug-cn":282,"./ug-cn.js":282,"./uk":283,"./uk.js":283,"./ur":284,"./ur.js":284,"./uz":285,"./uz-latn":286,"./uz-latn.js":286,"./uz.js":285,"./vi":287,"./vi.js":287,"./x-pseudo":288,"./x-pseudo.js":288,"./yo":289,"./yo.js":289,"./zh-cn":290,"./zh-cn.js":290,"./zh-hk":291,"./zh-hk.js":291,"./zh-tw":292,"./zh-tw.js":292};function n(e){var t=r(e);return o(t)}function r(e){if(!o.o(map,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return map[e]}n.keys=function(){return Object.keys(map)},n.resolve=r,e.exports=n,n.id=298},309:function(e,t,o){var content=o(387);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,o(30).default)("7f69c360",content,!0,{sourceMap:!1})},384:function(e,t,o){e.exports=o.p+"img/d32ddc7.gif"},385:function(e,t,o){e.exports=o.p+"img/4482e1c.png"},386:function(e,t,o){"use strict";var n=o(309);o.n(n).a},387:function(e,t,o){(e.exports=o(29)(!1)).push([e.i,"h3[data-v-e92f4106]{font-size:24px;margin-left:5%;margin-top:12.5px}img[data-v-e92f4106]{width:100%}",""])},484:function(e,t,o){"use strict";o.r(t);var n=o(296),r=o.n(n),c=o(295),d={name:"smrts",layout:"indipage",components:{VuePureLightbox:r.a,BarChart:c.a},data:function(){return{smrts1:o(384),smrts2:o(385)}},mounted:function(){this.$emit("loaded")}},l=(o(386),o(14)),component=Object(l.a)(d,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"container-small test-component"},[o("h1",{staticClass:"text-center"},[e._v("Social Media Response Training Simulator")]),e._v(" "),o("h3",{staticClass:"text-center"},[e._v("Brigham Young University - 2019")]),e._v(" "),o("div",{staticClass:"bar"}),e._v(" "),o("VuePureLightbox",{attrs:{thumbnail:e.smrts1,images:[e.smrts1,e.smrts2]}}),e._v(" "),e._m(0),e._v(" "),o("p",[e._v("In Fall 2018 I worked closely with Professor Amanda Hughes on a research project exploring the implications that social media training has on disaster related emergency responders. Amanda Hughes has conducted over 10 years of research on the effects that social media has on disaster preparedness and relief. This most project dealt primarily with how organizations leverage social media and how small scale simulations better prepare them for a disaster.")]),e._v(" "),e._m(1),e._v(" "),e._m(2),e._v(" "),e._m(3),e._v(" "),e._m(4),e._v(" "),e._m(5)],1)}),[function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"summary"},[o("ul",[o("li",[e._v("\n          Created Twitter simulator to be used by BYU university professors in social media research projects.\n        ")]),e._v(" "),o("li",[e._v("\n          Developed project using Node.js, Socket.io, and React.\n        ")]),e._v(" "),o("li",[e._v("\n          Managed team of four developers over the course of 6 months.\n        ")]),e._v(" "),o("li",[e._v("\n          Presented results and final product to stakeholders and department faculty.\n        ")]),e._v(" "),o("li",[e._v("\n          Designed adaptable components which could be altered or built on for future projects and department needs.\n        ")]),e._v(" "),o("li",[e._v("\nWrote extensive API and component document for future developers.        ")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("The work that will be described in this article will detail why we built a social media simulator, what prototyping was done, and how it is being engineered. "),t("br"),t("br")])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",[t("h2",[this._v("Problem")]),this._v(" "),t("p",[this._v("Social Media has rapidly become the primary means in which people connect with each other and consume news. It then comes at no surprise that emergency responders use Twitter and Facebook as tools to gather information about areas affected by a natural or human caused disasters. In the early stages of a disaster, crowd-sourced information can be hard to find and often unreliable. However, good posts can provide necessary information as to what is going on. Most US cities have dedicated teams whose job it is to gather reliable information from social media accounts. Additionally, these teams reply to posts from the public to limit misinformation from spreading.")]),this._v(" "),t("p",[t("em",[this._v("Unfortunately, many small cities and departments do not have resources to conduct elaborate trainings on the effectiveness of social media.")])]),this._v(" "),t("div",[t("div",[t("div",[t("img",{attrs:{src:"https://nates-portfolio.firebaseapp.com/img/gooddata.png"}})])])])])},function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",[o("h2",[e._v("Process")]),e._v(" "),o("p",[e._v("We began work on the social media simulator by following the “nail it then scale it model”. That is, we first conducted research on what products currently exist in the market that match what we were building. It turned out that there were about six legitimate companies that were building products similar to ours. However, these companies often charge thousand of dollars and bring in equipment, actors, and datasets according to the organization's needs. Additionally, none of these products were geared for research.")]),e._v(" "),o("h3",[e._v("Interviews")]),e._v(" "),o("p",[e._v("We asked social media analysts from neighboring cities and organizations whether or not they use simulators like this. The majority replied that they were aware of these simulations, but did not use them due to their high cost. These same organizations said they conduct simulations regularly but use fake Twitter accounts or print off example posts of “good data”. \n")]),e._v(" "),o("h3",[e._v("Prototyping")]),e._v(" "),o("p",[e._v("As Amanda Hughes had 10 years experience conducting research on social media analysts, she was familiar with what features needed to be in a simulator. Additionally, she was familiar with how social media datasets were formatted. ")]),e._v(" "),o("p",[e._v("With a few other students, we whiteboarded possible layouts for the software and validated the design with Amanda Hughes who would be using this simulator for research and who had the most experience with social media simulations. Then, using Adobe XD, I built high fidelity prototypes and validated the flow and usability of our concept with 15 people who worked for the department.")]),e._v(" "),o("h3",[e._v("Engineering")]),e._v(" "),o("p",[e._v("With the prototypes validated, we decided on 3 core technologies to use: React.js, MongoDB, and Node.js (common JavaScript stack). We chose these technologies because the turnover for people supporting this project would be quite rapid and, as JavaScript is a common language for students to learn, this was an obvious solution.")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",[t("h2",[this._v("Solution")]),this._v(" "),t("p",[this._v("Still unsure as the potential success of our product, we decided to build the software in four stages – the first being 1) the minimum viable product. If this concept proved successful for both research and beta-tester use, we would 2) integrate authentication and group simulation support, 3) add support for facebook and instagram, 4) create tutorials on simulation best practices.")]),this._v(" "),t("p",[this._v("The core features for the minimum viable product are currently being built and tested. Our most recent prototype looks like this:")]),this._v(" "),t("div",[t("div",[t("div",[t("img",{attrs:{src:"https://nates-portfolio.firebaseapp.com/img/ToGif-xs.gif"}})])])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",[t("h2",[this._v("Future Plans")]),this._v(" "),t("p",[this._v("The software was built using React components and all APIs and endpoints were highly document allowing for the software to be easily changed according to the needs of the research.")])])}],!1,null,"e92f4106",null);t.default=component.exports}}]);