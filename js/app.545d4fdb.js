(function(e){function s(s){for(var a,r,o=s[0],c=s[1],d=s[2],u=0,f=[];u<o.length;u++)r=o[u],n[r]&&f.push(n[r][0]),n[r]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(e[a]=c[a]);l&&l(s);while(f.length)f.shift()();return i.push.apply(i,d||[]),t()}function t(){for(var e,s=0;s<i.length;s++){for(var t=i[s],a=!0,o=1;o<t.length;o++){var c=t[o];0!==n[c]&&(a=!1)}a&&(i.splice(s--,1),e=r(r.s=t[0]))}return e}var a={},n={app:0},i=[];function r(s){if(a[s])return a[s].exports;var t=a[s]={i:s,l:!1,exports:{}};return e[s].call(t.exports,t,t.exports,r),t.l=!0,t.exports}r.m=e,r.c=a,r.d=function(e,s,t){r.o(e,s)||Object.defineProperty(e,s,{enumerable:!0,get:t})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,s){if(1&s&&(e=r(e)),8&s)return e;if(4&s&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(r.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&s&&"string"!=typeof e)for(var a in e)r.d(t,a,function(s){return e[s]}.bind(null,a));return t},r.n=function(e){var s=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(s,"a",s),s},r.o=function(e,s){return Object.prototype.hasOwnProperty.call(e,s)},r.p="/TestDex/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=s,o=o.slice();for(var d=0;d<o.length;d++)s(o[d]);var l=c;i.push([0,"chunk-vendors"]),t()})({0:function(e,s,t){e.exports=t("56d7")},4678:function(e,s,t){var a={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-SG":"cdab","./en-SG.js":"cdab","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-nz":"6f50","./en-nz.js":"6f50","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-tw":"90ea","./zh-tw.js":"90ea"};function n(e){var s=i(e);return t(s)}function i(e){var s=a[e];if(!(s+1)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return s}n.keys=function(){return Object.keys(a)},n.resolve=i,e.exports=n,n.id="4678"},"56d7":function(e,s,t){"use strict";t.r(s);t("cadf"),t("551c"),t("f751"),t("097d");var a=t("2b0e"),n=t("bc3a"),i=t.n(n);a["a"].use({install:function(e){a["a"].prototype.$http=i.a.create({baseURL:"https://cors-anywhere.herokuapp.com/https://nl0rh2wwna.execute-api.us-east-1.amazonaws.com/dev",timeout:1e4,withCredentials:!1})}});var r=function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",{attrs:{id:"app"}},[t("router-view")],1)},o=[],c=(t("5c0b"),t("2877")),d={},l=Object(c["a"])(d,r,o,!1,null,null,null),u=l.exports,f=t("8c4f"),p=function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",{staticClass:"home"},[t("h1",[e._v("Lista de Séries")]),t("Serie")],1)},m=[],j=function(){var e=this,s=e.$createElement,t=e._self._c||s;return 0==e.series.length?t("div",[e._v("Loading....")]):t("ul",e._l(e.series,function(s,a){return t("li",[t("strong",[e._v(e._s(s.title))]),t("div",[t("small",[e._v("Lançado: "+e._s(s.releaseDate))])]),t("div",[t("small",[e._v("IMDB: "+e._s(s.imdbId))])]),t("button",{attrs:{name:"seasons"},on:{click:function(t){return e.toggle(s.id)}}},[e._v(e._s(s.numberOfSeasons)+" Temporadas")]),s.isActive?t("div",{staticClass:"seasons"},[t("Seasons",{attrs:{serieid:s.id}})],1):e._e(),t("router-link",{attrs:{to:{name:"calculator",params:{id:s.id,serie:s}}}},[e._v("Assista novamente")])],1)}),0)},v=[],b=function(){var e=this,s=e.$createElement,t=e._self._c||s;return 0==e.seasons.length?t("div",[e._v("Loading....")]):t("ul",e._l(e.seasons,function(s){return t("li",[t("div",[t("strong",[e._v(e._s(s.id)+" Temporada")])]),t("div",[t("small",[e._v(e._s(s.releaseDate))])]),t("button",{attrs:{name:"seasons"},on:{click:function(t){return e.toggle(s.id)}}},[e._v(e._s(s.numberOfEpisodes)+" Episódios")]),s.isActive?t("div",{staticClass:"seasons"},[t("Episodes",{attrs:{serieid:e.serieId,seasonid:s.id}})],1):e._e()])}),0)},h=[],_=function(){var e=this,s=e.$createElement,t=e._self._c||s;return 0==e.episodes.length?t("div",[e._v("Loading....")]):t("ul",e._l(e.episodes,function(s){return t("li",[t("strong",[e._v(e._s(s.id)+" Episódio")]),e._v(" | \n    "),t("strong",[e._v(e._s(s.title))]),e._v(" | \n    "),t("small",[e._v("IMDB: "+e._s(s.imdbId))]),e._v(" | \n    "),t("small",[e._v(e._s(s.releaseDate))]),e._v(" | \n    "+e._s(s.duration)+"\n  ")])}),0)},g=[],y=t("c1df"),k=t.n(y),w={name:"Episodes",data:function(){return{episodes:[],serieId:this.serieid,seasonId:this.seasonid}},props:{serieid:String,seasonid:String},methods:{loadEpisodes:function(){var e=this;this.$http.get("/series/"+this.serieId+"/seasons/"+this.seasonId+"/episodes?mockDate=2019-03-01").then(function(s){e.episodes=s.data})}},filters:{formatDate:function(e){if(e)return k()(String(e)).format("DD/MM/YYYY",!0)}},mounted:function(){this.loadEpisodes()}},D=w,S=Object(c["a"])(D,_,g,!1,null,null,null),x=S.exports,z={name:"Seasons",components:{Episodes:x},data:function(){return{seasons:[],serieId:this.serieid}},props:{serieid:String},methods:{loadSeasons:function(){var e=this;this.$http.get("/series/"+this.serieId+"/seasons?mockDate=2019-03-01").then(function(s){e.seasons=s.data})},toggle:function(e){this.seasons=this.seasons.map(function(s){return s.id==e&&(s.isActive=!s.isActive),s})}},mounted:function(){this.loadSeasons()}},M=z,O=Object(c["a"])(M,b,h,!1,null,null,null),Y=O.exports,C={name:"Serie",components:{Seasons:Y},data:function(){return{series:[]}},methods:{loadSeries:function(){var e=this;this.$http.get("/series?mockDate=2019-03-01").then(function(s){e.series=s.data})},toggle:function(e){this.series=this.series.map(function(s){return s.id==e&&(s.isActive=!s.isActive),s})}},mounted:function(){this.loadSeries()}},E=C,$=Object(c["a"])(E,j,v,!1,null,null,null),I=$.exports,A={name:"home",components:{Serie:I}},T=A,L=Object(c["a"])(T,p,m,!1,null,null,null),P=L.exports,N=function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",{staticClass:"calculator"},[t("router-link",{attrs:{to:"/"}},[e._v("Voltar")]),t("h1",[e._v("Calculadora")]),t("h2",[e._v(e._s(e.serie.title)+" ")]),t("form",[t("div",{staticClass:"time"},[t("div",[e._v("Mock day: 2019-03-01")]),t("div",[e._v("Próxima temporada: "+e._s(e.novo))])]),t("div",{staticClass:"time"},[t("label",[e._v("Quando quero começar")]),t("br"),t("datepicker",{attrs:{placeholder:"dd/mm/aaaa",format:"dd/MM/yyyy",value:e.initial_date}})],1),t("div",{staticClass:"time"},[t("label",[e._v("Tempo para assistir por dia")]),t("br"),t("input",{directives:[{name:"model",rawName:"v-model",value:e.time_per_day,expression:"time_per_day"}],attrs:{type:"text",name:"time_per_day",id:"time_per_day"},domProps:{value:e.time_per_day},on:{input:function(s){s.target.composing||(e.time_per_day=s.target.value)}}})]),t("div",[t("button",{on:{click:function(s){return s.preventDefault(),e.result(s)}}},[e._v("Calcular")])])]),t("div",{directives:[{name:"show",rawName:"v-show",value:""!=e.status,expression:"status != ''"}]},[t("h1",[e._v("Resultado")]),"success"==e.status?t("div",{staticClass:"message"},[t("p",{staticClass:"success"}),t("div",{staticClass:"title"},[e._v("Fique pronto para próxima temporada !")]),e._m(0),t("p")]):"error"==e.status?t("div",{staticClass:"message"},[t("p",{staticClass:"error"}),t("div",{staticClass:"title"},[e._v("Lamentamos...")]),t("div",{staticClass:"description"},[e._v("Infelizmente não será possível toda a temporada antes da próxima temporada")]),t("p")]):e._e()])],1)},q=[function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",{staticClass:"description"},[e._v("voçê deverá começar a assistir em: "),t("strong",[e._v("aaaaa")])])}],B=(t("a481"),t("fa33")),F=t("e220"),U=t.n(F),G={name:"Calculator",components:{Datepicker:B["a"]},data:function(){return{serie:[],seasons:[],episodes:[],status:"",initial_date:"",time_per_day:"24",nextSeason:""}},methods:{result:function(){this.status="success"},loadSeasons:function(e){var s=this;this.$http.get("/series/"+e+"/seasons?mockDate=2019-03-01").then(function(e){s.seasons=e.data})},loadEpisodes:function(e,s){var t=this;this.$http.get("/series/"+e+"/seasons/"+s+"/episodes?mockDate=2019-03-01").then(function(e){t.episodes=e.data})},timeDiff:function(e){var s=[],t="";for(var a in e){var n=k()(e[a].releaseDate),i=k()().format("YYYY-MM-DD");if(k()(i).isSameOrBefore(n)){this.loadEpisodes(this.serie.id,a);var r=n.diff(i,"days"),o=n.diff(i,"hours"),c=0;for(var d in this.episodes){var l=this.episodes[d].duration;l=l.substring(l.length-2,0).replace(" ",""),c+=new U.a(l)}c=new U.a(c).minutes()/60;var u=Math.ceil(c/this.time_per_day);t=k()(n.format("YYYY-MM-DD")).subtract(u,"days").format("YYYY-MM-DD"),this.nextSeason=n,s.push(r,o,c,u,n.format("DD/MM/YY"),t)}}return this.initial_date=t,s}},computed:{novo:function(){this.timeDiff(this.seasons)}},created:function(){this.serie=this.$route.params.serie,this.loadSeasons(this.serie.id)},filters:{formatDate:function(e){if(e)return k()(String(e)).format("DD/MM/YYYY",!0)}}},J=G,R=(t("a81a"),Object(c["a"])(J,N,q,!1,null,null,null)),Q=R.exports;a["a"].use(f["a"]);var V=new f["a"]({routes:[{path:"/",name:"home",component:P},{path:"/calculator/:id",name:"calculator",props:!0,component:Q}]}),H=t("9483");Object(H["a"])("".concat("/TestDex/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}}),a["a"].config.productionTip=!1,new a["a"]({router:V,render:function(e){return e(u)}}).$mount("#app")},"5c0b":function(e,s,t){"use strict";var a=t("5e27"),n=t.n(a);n.a},"5e27":function(e,s,t){},a81a:function(e,s,t){"use strict";var a=t("d941"),n=t.n(a);n.a},d941:function(e,s,t){}});
//# sourceMappingURL=app.545d4fdb.js.map