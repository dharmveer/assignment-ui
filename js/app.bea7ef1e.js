(function(e){function t(t){for(var a,c,o=t[0],l=t[1],n=t[2],u=0,p=[];u<o.length;u++)c=o[u],Object.prototype.hasOwnProperty.call(r,c)&&r[c]&&p.push(r[c][0]),r[c]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(e[a]=l[a]);d&&d(t);while(p.length)p.shift()();return i.push.apply(i,n||[]),s()}function s(){for(var e,t=0;t<i.length;t++){for(var s=i[t],a=!0,o=1;o<s.length;o++){var l=s[o];0!==r[l]&&(a=!1)}a&&(i.splice(t--,1),e=c(c.s=s[0]))}return e}var a={},r={app:0},i=[];function c(t){if(a[t])return a[t].exports;var s=a[t]={i:t,l:!1,exports:{}};return e[t].call(s.exports,s,s.exports,c),s.l=!0,s.exports}c.m=e,c.c=a,c.d=function(e,t,s){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:s})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(c.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)c.d(s,a,function(t){return e[t]}.bind(null,a));return s},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/assignment-ui/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=t,o=o.slice();for(var n=0;n<o.length;n++)t(o[n]);var d=l;i.push([0,"chunk-vendors"]),s()})({0:function(e,t,s){e.exports=s("56d7")},"034f":function(e,t,s){"use strict";var a=s("85ec"),r=s.n(a);r.a},"56d7":function(e,t,s){"use strict";s.r(t);s("e260"),s("e6cf"),s("cca6"),s("a79d");var a=s("2b0e"),r=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{attrs:{id:"app"}},[s("LineChart",{attrs:{msg:"lineChart"}})],1)},i=[],c=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"hello"},[s("label",[e._v(" Select: "),s("select",{attrs:{"v-model":e.selected,name:"listoption"},on:{change:function(t){return e.onChange(t)}}},e._l(e.listoptions,(function(t){return s("option",{key:t},[e._v(e._s(t))])})),0)]),s("GChart",{attrs:{type:"LineChart",data:e.chartData,options:e.chartOptions}})],1)},o=[],l=(s("99af"),s("d81d"),s("b64b"),s("cb43")),n=s("a9ca"),d={props:{msg:String},components:{GChart:l["GChart"]},methods:{onChange:function(e){var t=[["Year",e.target.value]];if(this.$store.dispatch("selectedval",e.target.value),console.log(this.selected),"clickThruRate"==e.target.value){var s=this.lists.records.map((function(e){return[e.date,e.clickThruRate]}));this.$store.dispatch("setchartdata",t.concat(s))}else if("pageViews"==e.target.value){var a=this.lists.records.map((function(e){return[e.date,e.pageViews]}));this.$store.dispatch("setchartdata",t.concat(a))}else if("orders"==e.target.value){console.log("clickThruRate");var r=this.lists.records.map((function(e){return[e.date,e.orders]}));this.$store.dispatch("setchartdata",t.concat(r))}else{var i=this.lists.records.map((function(e){return[e.date,e.sales]}));this.$store.dispatch("setchartdata",t.concat(i))}}},data:function(){return{text:"",adults:[],lists:[],listoptions:[],chartOptions:{chart:{title:"Reports",subtitle:"Sales, pageViews, and orders"}}}},mounted:function(){this.lists=n,this.listoptions=Object.keys(this.lists.records[0]);var e=[["Year","Expenses"]],t=this.lists.records.map((function(e){return[e.date,e.sales]}));this.$store.dispatch("setchartdata",e.concat(t))},computed:{listsstor:function(){return console.log("ddd"+this.selected),console.log(this.adults),this.$store.state.listsstor},selected:function(){return this.$store.state.selected},chartData:function(){return this.$store.state.chartData}}},u=d,p=s("2877"),h=Object(p["a"])(u,c,o,!1,null,null,null),g=h.exports,f={name:"App",components:{LineChart:g}},w=f,T=(s("034f"),Object(p["a"])(w,r,i,!1,null,null,null)),k=T.exports,R=s("2f62");a["a"].use(R["a"]);var V=new R["a"].Store({state:{count:0,selected:"sales",chartData:[],listsstor:{xaxis:"date",records:[{date:"04/27/2016",clickThruRate:11.575086019490813,sales:1685103.46,pageViews:672522,orders:14274},{date:"04/28/2016",clickThruRate:11.057877730829555,sales:1409394.37,pageViews:700062,orders:13279},{date:"04/29/2016",clickThruRate:10.769637784623608,sales:1587128.08,pageViews:733293,orders:15378},{date:"04/30/2016",clickThruRate:11.793559308371288,sales:2021584.7,pageViews:744330,orders:16934},{date:"05/01/2016",clickThruRate:11.906171613821066,sales:1916290.7,pageViews:721189,orders:16156},{date:"05/02/2016",clickThruRate:11.618584711166937,sales:1903934.82,pageViews:732430,orders:16097},{date:"05/03/2016",clickThruRate:11.816696070335519,sales:1829264.87,pageViews:754441,orders:15928},{date:"05/04/2016",clickThruRate:11.348390339421794,sales:1801206.07,pageViews:688406,orders:14728},{date:"05/05/2016",clickThruRate:10.878498398534205,sales:1469729.23,pageViews:714970,orders:13465},{date:"05/06/2016",clickThruRate:10.516210900323584,sales:1718445.58,pageViews:788050,orders:15098},{date:"05/07/2016",clickThruRate:11.526655322695047,sales:2114943.18,pageViews:830397,orders:17652},{date:"05/08/2016",clickThruRate:11.507679701892917,sales:2014664.09,pageViews:766436,orders:16546},{date:"05/09/2016",clickThruRate:11.242699566809593,sales:1928012.85,pageViews:770331,orders:16092},{date:"05/10/2016",clickThruRate:10.893546540059813,sales:1881597.17,pageViews:813858,orders:16011},{date:"05/11/2016",clickThruRate:10.426308502316706,sales:2006681.52,pageViews:750419,orders:15244},{date:"05/12/2016",clickThruRate:10.228687824092221,sales:1657790.28,pageViews:778135,orders:14396},{date:"05/13/2016",clickThruRate:10.267319244803828,sales:1831513.38,pageViews:815841,orders:15821},{date:"05/14/2016",clickThruRate:10.505324018843531,sales:2307825.41,pageViews:901105,orders:18631},{date:"05/15/2016",clickThruRate:11.040994856188075,sales:2030277.03,pageViews:777439,orders:15679},{date:"05/16/2016",clickThruRate:10.718396935289883,sales:2046377.97,pageViews:853066,orders:16816},{date:"05/17/2016",clickThruRate:10.957155771243695,sales:2068041.45,pageViews:840720,orders:18060},{date:"05/18/2016",clickThruRate:10.773169526744848,sales:2624135.41,pageViews:933133,orders:20846},{date:"05/19/2016",clickThruRate:10.69431474989667,sales:2227262.63,pageViews:914542,orders:18442},{date:"05/20/2016",clickThruRate:10.408943385701141,sales:2678447.38,pageViews:935753,orders:21437},{date:"05/21/2016",clickThruRate:11.149821409515202,sales:2573659.9,pageViews:955818,orders:21210},{date:"05/22/2016",clickThruRate:15.679479678699595,sales:2420261.63,pageViews:599937,orders:19976},{date:"05/23/2016",clickThruRate:15.608790757968327,sales:2300511.8,pageViews:594761,orders:19180},{date:"05/24/2016",clickThruRate:16.032771319578874,sales:2298817.47,pageViews:598206,orders:19109},{date:"05/25/2016",clickThruRate:15.722837859811564,sales:2252306.65,pageViews:535037,orders:18709},{date:"05/26/2016",clickThruRate:15.787245628692487,sales:2198129.93,pageViews:536224,orders:18708},{date:"05/27/2016",clickThruRate:15.69726378964112,sales:3441237.84,pageViews:831113,orders:29139}]}},mutations:{increment:function(e){e.count++},SELECTEDVAL:function(e,t){e.selected=t},SET_CHARTDATA:function(e,t){e.chartData=t}},actions:{selectedval:function(e,t){var s=e.commit;s("SELECTEDVAL",t)},setchartdata:function(e,t){var s=e.commit;s("SET_CHARTDATA",t)}}}),v=V,m=s("9483");Object(m["a"])("".concat("/assignment-ui/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}}),a["a"].config.productionTip=!1,new a["a"]({store:v,render:function(e){return e(k)}}).$mount("#app")},"85ec":function(e,t,s){},a9ca:function(e){e.exports=JSON.parse('{"xaxis":"date","records":[{"date":"04/27/2016","clickThruRate":11.575086019490813,"sales":1685103.46,"pageViews":672522,"orders":14274},{"date":"04/28/2016","clickThruRate":11.057877730829555,"sales":1409394.37,"pageViews":700062,"orders":13279},{"date":"04/29/2016","clickThruRate":10.769637784623608,"sales":1587128.08,"pageViews":733293,"orders":15378},{"date":"04/30/2016","clickThruRate":11.793559308371288,"sales":2021584.7,"pageViews":744330,"orders":16934},{"date":"05/01/2016","clickThruRate":11.906171613821066,"sales":1916290.7,"pageViews":721189,"orders":16156},{"date":"05/02/2016","clickThruRate":11.618584711166937,"sales":1903934.82,"pageViews":732430,"orders":16097},{"date":"05/03/2016","clickThruRate":11.816696070335519,"sales":1829264.87,"pageViews":754441,"orders":15928},{"date":"05/04/2016","clickThruRate":11.348390339421794,"sales":1801206.07,"pageViews":688406,"orders":14728},{"date":"05/05/2016","clickThruRate":10.878498398534205,"sales":1469729.23,"pageViews":714970,"orders":13465},{"date":"05/06/2016","clickThruRate":10.516210900323584,"sales":1718445.58,"pageViews":788050,"orders":15098},{"date":"05/07/2016","clickThruRate":11.526655322695047,"sales":2114943.18,"pageViews":830397,"orders":17652},{"date":"05/08/2016","clickThruRate":11.507679701892917,"sales":2014664.09,"pageViews":766436,"orders":16546},{"date":"05/09/2016","clickThruRate":11.242699566809593,"sales":1928012.85,"pageViews":770331,"orders":16092},{"date":"05/10/2016","clickThruRate":10.893546540059813,"sales":1881597.17,"pageViews":813858,"orders":16011},{"date":"05/11/2016","clickThruRate":10.426308502316706,"sales":2006681.52,"pageViews":750419,"orders":15244},{"date":"05/12/2016","clickThruRate":10.228687824092221,"sales":1657790.28,"pageViews":778135,"orders":14396},{"date":"05/13/2016","clickThruRate":10.267319244803828,"sales":1831513.38,"pageViews":815841,"orders":15821},{"date":"05/14/2016","clickThruRate":10.505324018843531,"sales":2307825.41,"pageViews":901105,"orders":18631},{"date":"05/15/2016","clickThruRate":11.040994856188075,"sales":2030277.03,"pageViews":777439,"orders":15679},{"date":"05/16/2016","clickThruRate":10.718396935289883,"sales":2046377.97,"pageViews":853066,"orders":16816},{"date":"05/17/2016","clickThruRate":10.957155771243695,"sales":2068041.45,"pageViews":840720,"orders":18060},{"date":"05/18/2016","clickThruRate":10.773169526744848,"sales":2624135.41,"pageViews":933133,"orders":20846},{"date":"05/19/2016","clickThruRate":10.69431474989667,"sales":2227262.63,"pageViews":914542,"orders":18442},{"date":"05/20/2016","clickThruRate":10.408943385701141,"sales":2678447.38,"pageViews":935753,"orders":21437},{"date":"05/21/2016","clickThruRate":11.149821409515202,"sales":2573659.9,"pageViews":955818,"orders":21210},{"date":"05/22/2016","clickThruRate":15.679479678699595,"sales":2420261.63,"pageViews":599937,"orders":19976},{"date":"05/23/2016","clickThruRate":15.608790757968327,"sales":2300511.8,"pageViews":594761,"orders":19180},{"date":"05/24/2016","clickThruRate":16.032771319578874,"sales":2298817.47,"pageViews":598206,"orders":19109},{"date":"05/25/2016","clickThruRate":15.722837859811564,"sales":2252306.65,"pageViews":535037,"orders":18709},{"date":"05/26/2016","clickThruRate":15.787245628692487,"sales":2198129.93,"pageViews":536224,"orders":18708},{"date":"05/27/2016","clickThruRate":15.69726378964112,"sales":3441237.84,"pageViews":831113,"orders":29139}]}')}});
//# sourceMappingURL=app.bea7ef1e.js.map