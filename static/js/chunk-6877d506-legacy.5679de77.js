(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6877d506"],{2423:function(e,t,n){"use strict";n.d(t,"c",function(){return d}),n.d(t,"b",function(){return p}),n.d(t,"d",function(){return h}),n.d(t,"a",function(){return m}),n.d(t,"e",function(){return g});for(var i=n("795b"),o=n.n(i),a=(n("b775"),n("96eb")),r=n.n(a),l=[],c=100,s='<p>I am testing data, I am testing data.</p><p><img src="https://wpimg.wallstcn.com/4c69009c-0fd4-4153-b112-6cb53d1cf943"></p>',u="https://wpimg.wallstcn.com/e4558086-631c-425c-9430-56ffb46e70b3",f=0;f<c;f++)l.push(r.a.mock({id:"@increment",timestamp:+r.a.Random.date("T"),author:"@first",reviewer:"@first",title:"@title(5, 10)",content_short:"mock data",content:s,forecast:"@float(0, 100, 2, 2)",importance:"@integer(1, 3)","type|1":["CN","US","JP","EU"],"status|1":["published","draft","deleted"],display_time:"@datetime",comment_disabled:!0,pageviews:"@integer(300, 5000)",image_uri:u,platforms:["a-platform"]}));function d(e){return new o.a(function(e,t){var n=1,i=20,o=l.filter(function(e){return!0}),a=o.filter(function(e,t){return t<i*n&&t>=i*(n-1)});e({code:2e4,data:{total:o.length,items:a}})})}function p(e){return new o.a(function(t,n){for(var i=0,o=l;i<o.length;i++){var a=o[i];a.id===+e&&t({code:2e4,data:a})}})}function h(e){return new o.a(function(e,t){e({code:2e4,data:{pvData:[{key:"PC",pv:1024},{key:"mobile",pv:1024},{key:"ios",pv:1024},{key:"android",pv:1024}]}})})}function m(e){return new o.a(function(e,t){e({code:2e4,data:"success"})})}function g(e){return new o.a(function(e,t){e({code:2e4,data:"success"})})}},"3e07":function(e,t,n){"use strict";n.r(t);var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"app-container"},[n("el-input",{staticStyle:{width:"350px"},attrs:{placeholder:e.$t("excel.placeholder"),"prefix-icon":"el-icon-document"},model:{value:e.filename,callback:function(t){e.filename=t},expression:"filename"}}),e._v(" "),n("el-button",{staticStyle:{"margin-bottom":"20px"},attrs:{loading:e.downloadLoading,type:"primary",icon:"document"},on:{click:e.handleDownload}},[e._v("\n    "+e._s(e.$t("excel.selectedExport"))+"\n  ")]),e._v(" "),n("a",{staticStyle:{"margin-left":"15px"},attrs:{href:"https://panjiachen.github.io/vue-element-admin-site/feature/component/excel.html",target:"_blank"}},[n("el-tag",{attrs:{type:"info"}},[e._v("Documentation")])],1),e._v(" "),n("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.listLoading,expression:"listLoading"}],ref:"multipleTable",attrs:{data:e.list,"element-loading-text":"拼命加载中",border:"",fit:"","highlight-current-row":""},on:{"selection-change":e.handleSelectionChange}},[n("el-table-column",{attrs:{type:"selection",align:"center"}}),e._v(" "),n("el-table-column",{attrs:{align:"center",label:"Id",width:"95"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n        "+e._s(t.$index)+"\n      ")]}}])}),e._v(" "),n("el-table-column",{attrs:{label:"Title"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n        "+e._s(t.row.title)+"\n      ")]}}])}),e._v(" "),n("el-table-column",{attrs:{label:"Author",width:"110",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("el-tag",[e._v(e._s(t.row.author))])]}}])}),e._v(" "),n("el-table-column",{attrs:{label:"Readings",width:"115",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n        "+e._s(t.row.pageviews)+"\n      ")]}}])}),e._v(" "),n("el-table-column",{attrs:{align:"center",label:"PDate",width:"220"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("i",{staticClass:"el-icon-time"}),e._v(" "),n("span",[e._v(e._s(t.row.display_time))])]}}])})],1),e._v(" "),n("ClipBoard",{attrs:{code:e.code,"related-link":e.relatedLink}})],1)},o=[],a=n("2423"),r=n("1fb2"),l={name:"SelectExcel",components:{ClipBoard:r["a"]},data:function(){return{list:null,listLoading:!0,multipleSelection:[],downloadLoading:!1,filename:"",relatedLink:[{title:"@/api/article",link:"https://github.com/PanJiaChen/vue-element-admin/tree/master/src/api"},{title:"@/vendor/Export2Excel",link:"https://github.com/fekun/vue-element-admin/tree/master/src/vendor"}],code:'\n<template>\n  <div class="app-container">\n    \x3c!-- $t is vue-i18n global function to translate lang --\x3e\n    <el-input\n      v-model="filename"\n      :placeholder="$t(\'excel.placeholder\')"\n      style="width:350px;"\n      prefix-icon="el-icon-document"\n    />\n    <el-button\n      :loading="downloadLoading"\n      style="margin-bottom:20px"\n      type="primary"\n      icon="document"\n      @click="handleDownload"\n    >\n      {{ $t(\'excel.selectedExport\') }}\n    </el-button>\n    <a\n      href="https://panjiachen.github.io/vue-element-admin-site/feature/component/excel.html"\n      target="_blank"\n      style="margin-left:15px;"\n    >\n      <el-tag type="info">Documentation</el-tag>\n    </a>\n    <el-table\n      ref="multipleTable"\n      v-loading="listLoading"\n      :data="list"\n      element-loading-text="拼命加载中"\n      border\n      fit\n      highlight-current-row\n      @selection-change="handleSelectionChange"\n    >\n      <el-table-column\n        type="selection"\n        align="center"\n      />\n      <el-table-column\n        align="center"\n        label="Id"\n        width="95"\n      >\n        <template slot-scope="scope">\n          {{ scope.$index }}\n        </template>\n      </el-table-column>\n      <el-table-column label="Title">\n        <template slot-scope="scope">\n          {{ scope.row.title }}\n        </template>\n      </el-table-column>\n      <el-table-column\n        label="Author"\n        width="110"\n        align="center"\n      >\n        <template slot-scope="scope">\n          <el-tag>{{ scope.row.author }}</el-tag>\n        </template>\n      </el-table-column>\n      <el-table-column\n        label="Readings"\n        width="115"\n        align="center"\n      >\n        <template slot-scope="scope">\n          {{ scope.row.pageviews }}\n        </template>\n      </el-table-column>\n      <el-table-column\n        align="center"\n        label="PDate"\n        width="220"\n      >\n        <template slot-scope="scope">\n          <i class="el-icon-time" />\n          <span>{{ scope.row.display_time }}</span>\n        </template>\n      </el-table-column>\n    </el-table>\n  </div>\n</template>\n\n<script>\nimport { fetchList } from \'@/api/article\'\n\nexport default {\n  name: \'SelectExcel\',\n  data () {\n    return {\n      list: null,\n      listLoading: true,\n      multipleSelection: [],\n      downloadLoading: false,\n      filename: \'\'\n    }\n  },\n  created () {\n    this.fetchData()\n  },\n  methods: {\n    fetchData () {\n      this.listLoading = true\n      fetchList(this.listQuery).then(response => {\n        this.list = response.data.items\n        this.listLoading = false\n      })\n    },\n    handleSelectionChange (val) {\n      this.multipleSelection = val\n    },\n    handleDownload () {\n      if (this.multipleSelection.length) {\n        this.downloadLoading = true\n        import(\'@/vendor/Export2Excel\').then(excel => {\n          const tHeader = [\'Id\', \'Title\', \'Author\', \'Readings\', \'Date\']\n          const filterVal = [\'id\', \'title\', \'author\', \'pageviews\', \'display_time\']\n          const list = this.multipleSelection\n          const data = this.formatJson(filterVal, list)\n          excel.export_json_to_excel({\n            header: tHeader,\n            data,\n            filename: this.filename\n          })\n          this.$refs.multipleTable.clearSelection()\n          this.downloadLoading = false\n        })\n      } else {\n        this.$message({\n          message: \'Please select at least one item\',\n          type: \'warning\'\n        })\n      }\n    },\n    formatJson (filterVal, jsonData) {\n      return jsonData.map(v => filterVal.map(j => v[j]))\n    }\n  }\n}\n<//script>\n\n      '}},created:function(){this.fetchData()},methods:{fetchData:function(){var e=this;this.listLoading=!0,Object(a["c"])(this.listQuery).then(function(t){e.list=t.data.items,e.listLoading=!1})},handleSelectionChange:function(e){this.multipleSelection=e},handleDownload:function(){var e=this;this.multipleSelection.length?(this.downloadLoading=!0,Promise.all([n.e("chunk-6e83591c"),n.e("chunk-5164a781"),n.e("chunk-15221d3a"),n.e("chunk-87968d96")]).then(n.bind(null,"4bf8d")).then(function(t){var n=["Id","Title","Author","Readings","Date"],i=["id","title","author","pageviews","display_time"],o=e.multipleSelection,a=e.formatJson(i,o);t.export_json_to_excel({header:n,data:a,filename:e.filename}),e.$refs.multipleTable.clearSelection(),e.downloadLoading=!1})):this.$message({message:"Please select at least one item",type:"warning"})},formatJson:function(e,t){return t.map(function(t){return e.map(function(e){return t[e]})})}}},c=l,s=n("2877"),u=Object(s["a"])(c,i,o,!1,null,null,null);t["default"]=u.exports},b311:function(e,t,n){
/*!
 * clipboard.js v2.0.4
 * https://zenorocha.github.io/clipboard.js
 * 
 * Licensed MIT © Zeno Rocha
 */
(function(t,n){e.exports=n()})(0,function(){return function(e){var t={};function n(i){if(t[i])return t[i].exports;var o=t[i]={i:i,l:!1,exports:{}};return e[i].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,i){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(i,o,function(t){return e[t]}.bind(null,o));return i},n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";var i="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),a=n(1),r=f(a),l=n(3),c=f(l),s=n(4),u=f(s);function f(e){return e&&e.__esModule?e:{default:e}}function d(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function p(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function h(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var m=function(e){function t(e,n){d(this,t);var i=p(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return i.resolveOptions(n),i.listenClick(e),i}return h(t,e),o(t,[{key:"resolveOptions",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.action="function"===typeof e.action?e.action:this.defaultAction,this.target="function"===typeof e.target?e.target:this.defaultTarget,this.text="function"===typeof e.text?e.text:this.defaultText,this.container="object"===i(e.container)?e.container:document.body}},{key:"listenClick",value:function(e){var t=this;this.listener=(0,u.default)(e,"click",function(e){return t.onClick(e)})}},{key:"onClick",value:function(e){var t=e.delegateTarget||e.currentTarget;this.clipboardAction&&(this.clipboardAction=null),this.clipboardAction=new r.default({action:this.action(t),target:this.target(t),text:this.text(t),container:this.container,trigger:t,emitter:this})}},{key:"defaultAction",value:function(e){return g("action",e)}},{key:"defaultTarget",value:function(e){var t=g("target",e);if(t)return document.querySelector(t)}},{key:"defaultText",value:function(e){return g("text",e)}},{key:"destroy",value:function(){this.listener.destroy(),this.clipboardAction&&(this.clipboardAction.destroy(),this.clipboardAction=null)}}],[{key:"isSupported",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:["copy","cut"],t="string"===typeof e?[e]:e,n=!!document.queryCommandSupported;return t.forEach(function(e){n=n&&!!document.queryCommandSupported(e)}),n}}]),t}(c.default);function g(e,t){var n="data-clipboard-"+e;if(t.hasAttribute(n))return t.getAttribute(n)}e.exports=m},function(e,t,n){"use strict";var i="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),a=n(2),r=l(a);function l(e){return e&&e.__esModule?e:{default:e}}function c(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var s=function(){function e(t){c(this,e),this.resolveOptions(t),this.initSelection()}return o(e,[{key:"resolveOptions",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.action=e.action,this.container=e.container,this.emitter=e.emitter,this.target=e.target,this.text=e.text,this.trigger=e.trigger,this.selectedText=""}},{key:"initSelection",value:function(){this.text?this.selectFake():this.target&&this.selectTarget()}},{key:"selectFake",value:function(){var e=this,t="rtl"==document.documentElement.getAttribute("dir");this.removeFake(),this.fakeHandlerCallback=function(){return e.removeFake()},this.fakeHandler=this.container.addEventListener("click",this.fakeHandlerCallback)||!0,this.fakeElem=document.createElement("textarea"),this.fakeElem.style.fontSize="12pt",this.fakeElem.style.border="0",this.fakeElem.style.padding="0",this.fakeElem.style.margin="0",this.fakeElem.style.position="absolute",this.fakeElem.style[t?"right":"left"]="-9999px";var n=window.pageYOffset||document.documentElement.scrollTop;this.fakeElem.style.top=n+"px",this.fakeElem.setAttribute("readonly",""),this.fakeElem.value=this.text,this.container.appendChild(this.fakeElem),this.selectedText=(0,r.default)(this.fakeElem),this.copyText()}},{key:"removeFake",value:function(){this.fakeHandler&&(this.container.removeEventListener("click",this.fakeHandlerCallback),this.fakeHandler=null,this.fakeHandlerCallback=null),this.fakeElem&&(this.container.removeChild(this.fakeElem),this.fakeElem=null)}},{key:"selectTarget",value:function(){this.selectedText=(0,r.default)(this.target),this.copyText()}},{key:"copyText",value:function(){var e=void 0;try{e=document.execCommand(this.action)}catch(t){e=!1}this.handleResult(e)}},{key:"handleResult",value:function(e){this.emitter.emit(e?"success":"error",{action:this.action,text:this.selectedText,trigger:this.trigger,clearSelection:this.clearSelection.bind(this)})}},{key:"clearSelection",value:function(){this.trigger&&this.trigger.focus(),window.getSelection().removeAllRanges()}},{key:"destroy",value:function(){this.removeFake()}},{key:"action",set:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"copy";if(this._action=e,"copy"!==this._action&&"cut"!==this._action)throw new Error('Invalid "action" value, use either "copy" or "cut"')},get:function(){return this._action}},{key:"target",set:function(e){if(void 0!==e){if(!e||"object"!==("undefined"===typeof e?"undefined":i(e))||1!==e.nodeType)throw new Error('Invalid "target" value, use a valid Element');if("copy"===this.action&&e.hasAttribute("disabled"))throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');if("cut"===this.action&&(e.hasAttribute("readonly")||e.hasAttribute("disabled")))throw new Error('Invalid "target" attribute. You can\'t cut text from elements with "readonly" or "disabled" attributes');this._target=e}},get:function(){return this._target}}]),e}();e.exports=s},function(e,t){function n(e){var t;if("SELECT"===e.nodeName)e.focus(),t=e.value;else if("INPUT"===e.nodeName||"TEXTAREA"===e.nodeName){var n=e.hasAttribute("readonly");n||e.setAttribute("readonly",""),e.select(),e.setSelectionRange(0,e.value.length),n||e.removeAttribute("readonly"),t=e.value}else{e.hasAttribute("contenteditable")&&e.focus();var i=window.getSelection(),o=document.createRange();o.selectNodeContents(e),i.removeAllRanges(),i.addRange(o),t=i.toString()}return t}e.exports=n},function(e,t){function n(){}n.prototype={on:function(e,t,n){var i=this.e||(this.e={});return(i[e]||(i[e]=[])).push({fn:t,ctx:n}),this},once:function(e,t,n){var i=this;function o(){i.off(e,o),t.apply(n,arguments)}return o._=t,this.on(e,o,n)},emit:function(e){var t=[].slice.call(arguments,1),n=((this.e||(this.e={}))[e]||[]).slice(),i=0,o=n.length;for(i;i<o;i++)n[i].fn.apply(n[i].ctx,t);return this},off:function(e,t){var n=this.e||(this.e={}),i=n[e],o=[];if(i&&t)for(var a=0,r=i.length;a<r;a++)i[a].fn!==t&&i[a].fn._!==t&&o.push(i[a]);return o.length?n[e]=o:delete n[e],this}},e.exports=n},function(e,t,n){var i=n(5),o=n(6);function a(e,t,n){if(!e&&!t&&!n)throw new Error("Missing required arguments");if(!i.string(t))throw new TypeError("Second argument must be a String");if(!i.fn(n))throw new TypeError("Third argument must be a Function");if(i.node(e))return r(e,t,n);if(i.nodeList(e))return l(e,t,n);if(i.string(e))return c(e,t,n);throw new TypeError("First argument must be a String, HTMLElement, HTMLCollection, or NodeList")}function r(e,t,n){return e.addEventListener(t,n),{destroy:function(){e.removeEventListener(t,n)}}}function l(e,t,n){return Array.prototype.forEach.call(e,function(e){e.addEventListener(t,n)}),{destroy:function(){Array.prototype.forEach.call(e,function(e){e.removeEventListener(t,n)})}}}function c(e,t,n){return o(document.body,e,t,n)}e.exports=a},function(e,t){t.node=function(e){return void 0!==e&&e instanceof HTMLElement&&1===e.nodeType},t.nodeList=function(e){var n=Object.prototype.toString.call(e);return void 0!==e&&("[object NodeList]"===n||"[object HTMLCollection]"===n)&&"length"in e&&(0===e.length||t.node(e[0]))},t.string=function(e){return"string"===typeof e||e instanceof String},t.fn=function(e){var t=Object.prototype.toString.call(e);return"[object Function]"===t}},function(e,t,n){var i=n(7);function o(e,t,n,i,o){var a=r.apply(this,arguments);return e.addEventListener(n,a,o),{destroy:function(){e.removeEventListener(n,a,o)}}}function a(e,t,n,i,a){return"function"===typeof e.addEventListener?o.apply(null,arguments):"function"===typeof n?o.bind(null,document).apply(null,arguments):("string"===typeof e&&(e=document.querySelectorAll(e)),Array.prototype.map.call(e,function(e){return o(e,t,n,i,a)}))}function r(e,t,n,o){return function(n){n.delegateTarget=i(n.target,t),n.delegateTarget&&o.call(e,n)}}e.exports=a},function(e,t){var n=9;if("undefined"!==typeof Element&&!Element.prototype.matches){var i=Element.prototype;i.matches=i.matchesSelector||i.mozMatchesSelector||i.msMatchesSelector||i.oMatchesSelector||i.webkitMatchesSelector}function o(e,t){while(e&&e.nodeType!==n){if("function"===typeof e.matches&&e.matches(t))return e;e=e.parentNode}}e.exports=o}])})}}]);