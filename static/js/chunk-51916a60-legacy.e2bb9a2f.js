(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-51916a60"],{1876:function(e,t,n){"use strict";n.r(t);var s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"components-container"},[n("aside",[e._v("\n    Based on\n    "),n("a",{staticClass:"link-type",attrs:{href:"https://github.com/rowanwins/vue-dropzone"}},[e._v("\n      dropzone\n    ")]),e._v(".\n    "+e._s(e.$t("components.dropzoneTips"))+"\n  ")]),e._v(" "),n("div",{staticClass:"editor-container"},[n("dropzone",{attrs:{id:"myVueDropzone",url:"https://httpbin.org/post"},on:{"dropzone-removedFile":e.dropzoneR,"dropzone-success":e.dropzoneS}})],1),e._v(" "),e._m(0),e._v(" "),n("ClipBoard",{attrs:{code:e.code,"related-link":e.relatedLink}})],1)},i=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[e._v("\n    可在控制台看到文件信息，需要传到后端，用\n    "),n("a",{staticClass:"link-type",attrs:{href:"https://devdocs.io/dom/formdata/append",target:"_blank"}},[e._v("\n      formData\n    ")]),e._v("\n    处理即可\n  ")])}],o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{ref:e.id,staticClass:"dropzone",attrs:{id:e.id,action:e.url}},[n("input",{attrs:{type:"file",name:"file"}})])},a=[],d=n("a745"),l=n.n(d),r=(n("c5f6"),n("79e3")),c=n.n(r);n("7bc13");c.a.autoDiscover=!1;var p={props:{id:{type:String,required:!0},url:{type:String,required:!0},clickable:{type:Boolean,default:!0},defaultMsg:{type:String,default:"上传图片"},acceptedFiles:{type:String,default:""},thumbnailHeight:{type:Number,default:200},thumbnailWidth:{type:Number,default:200},showRemoveLink:{type:Boolean,default:!0},maxFilesize:{type:Number,default:2},maxFiles:{type:Number,default:3},autoProcessQueue:{type:Boolean,default:!0},useCustomDropzoneOptions:{type:Boolean,default:!1},defaultImg:{default:"",type:[String,Array]},couldPaste:{type:Boolean,default:!1}},data:function(){return{dropzone:"",initOnce:!0}},watch:{defaultImg:function(e){0!==e.length?this.initOnce&&(this.initImages(e),this.initOnce=!1):this.initOnce=!1}},mounted:function(){var e=document.getElementById(this.id),t=this;this.dropzone=new c.a(e,{clickable:this.clickable,thumbnailWidth:this.thumbnailWidth,thumbnailHeight:this.thumbnailHeight,maxFiles:this.maxFiles,maxFilesize:this.maxFilesize,dictRemoveFile:"Remove",addRemoveLinks:this.showRemoveLink,acceptedFiles:this.acceptedFiles,autoProcessQueue:this.autoProcessQueue,dictDefaultMessage:'<i style="margin-top: 3em;display: inline-block" class="material-icons">'+this.defaultMsg+"</i><br>Drop files here to upload",dictMaxFilesExceeded:"只能一个图",previewTemplate:'<div class="dz-preview dz-file-preview">  <div class="dz-image" style="width:'+this.thumbnailWidth+"px;height:"+this.thumbnailHeight+'px" ><img style="width:'+this.thumbnailWidth+"px;height:"+this.thumbnailHeight+'px" data-dz-thumbnail /></div>  <div class="dz-details"><div class="dz-size"><span data-dz-size></span></div> <div class="dz-progress"><span class="dz-upload" data-dz-uploadprogress></span></div>  <div class="dz-error-message"><span data-dz-errormessage></span></div>  <div class="dz-success-mark"> <i class="material-icons">done</i> </div>  <div class="dz-error-mark"><i class="material-icons">error</i></div></div>',init:function(){var e=this,n=t.defaultImg;if(n)if(l()(n)){if(0===n.length)return;n.map(function(n,s){var i={name:"name"+s,size:12345,url:n};return e.options.addedfile.call(e,i),e.options.thumbnail.call(e,i,n),i.previewElement.classList.add("dz-success"),i.previewElement.classList.add("dz-complete"),t.initOnce=!1,!0})}else{var s={name:"name",size:12345,url:n};this.options.addedfile.call(this,s),this.options.thumbnail.call(this,s,n),s.previewElement.classList.add("dz-success"),s.previewElement.classList.add("dz-complete"),t.initOnce=!1}},accept:function(e,t){t()},sending:function(e,n,s){t.initOnce=!1}}),this.couldPaste&&document.addEventListener("paste",this.pasteImg),this.dropzone.on("success",function(e){t.$emit("dropzone-success",e,t.dropzone.element)}),this.dropzone.on("addedfile",function(e){t.$emit("dropzone-fileAdded",e)}),this.dropzone.on("removedfile",function(e){t.$emit("dropzone-removedFile",e)}),this.dropzone.on("error",function(e,n,s){t.$emit("dropzone-error",e,n,s)}),this.dropzone.on("successmultiple",function(e,n,s){t.$emit("dropzone-successmultiple",e,n,s)})},destroyed:function(){document.removeEventListener("paste",this.pasteImg),this.dropzone.destroy()},methods:{removeAllFiles:function(){this.dropzone.removeAllFiles(!0)},processQueue:function(){this.dropzone.processQueue()},pasteImg:function(e){var t=(e.clipboardData||e.originalEvent.clipboardData).items;"file"===t[0].kind&&this.dropzone.addFile(t[0].getAsFile())},initImages:function(e){var t=this;if(e)if(l()(e))e.map(function(e,n){var s={name:"name"+n,size:12345,url:e};return t.dropzone.options.addedfile.call(t.dropzone,s),t.dropzone.options.thumbnail.call(t.dropzone,s,e),s.previewElement.classList.add("dz-success"),s.previewElement.classList.add("dz-complete"),!0});else{var n={name:"name",size:12345,url:e};this.dropzone.options.addedfile.call(this.dropzone,n),this.dropzone.options.thumbnail.call(this.dropzone,n,e),n.previewElement.classList.add("dz-success"),n.previewElement.classList.add("dz-complete")}}}},u=p,m=(n("e2ae"),n("2877")),h=Object(m["a"])(u,o,a,!1,null,"318cdf27",null),z=h.exports,f=n("1fb2"),v={name:"DropzoneDemo",components:{Dropzone:z,ClipBoard:f["a"]},data:function(){return{relatedLink:[{title:"@/components/Dropzone",link:"https://github.com/PanJiaChen/vue-element-admin/tree/master/src/components"}],code:'\n<template>\n  <div class="components-container">\n    <aside>\n      Based on\n      <a\n        class="link-type"\n        href="https://github.com/rowanwins/vue-dropzone"\n      >\n        dropzone\n      </a>.\n      {{ $t(\'components.dropzoneTips\') }}\n    </aside>\n    <div class="editor-container">\n      <dropzone\n        id="myVueDropzone"\n        url="https://httpbin.org/post"\n        @dropzone-removedFile="dropzoneR"\n        @dropzone-success="dropzoneS"\n      />\n    </div>\n  </div>\n</template>\n\n<script>\nimport Dropzone from \'@/components/Dropzone\'\n\nexport default {\n  name: \'DropzoneDemo\',\n  components: { Dropzone },\n  methods: {\n    dropzoneS (file) {\n      console.log(file)\n      this.$message({ message: \'Upload success\', type: \'success\' })\n    },\n    dropzoneR (file) {\n      console.log(file)\n      this.$message({ message: \'Delete success\', type: \'success\' })\n    }\n  }\n}\n<//script>\n\n      '}},methods:{dropzoneS:function(e){console.log(e),this.$message({message:"Upload success",type:"success"})},dropzoneR:function(e){console.log(e),this.$message({message:"Delete success",type:"success"})}}},g=v,b=Object(m["a"])(g,s,i,!1,null,null,null);t["default"]=b.exports},5456:function(e,t,n){},e2ae:function(e,t,n){"use strict";var s=n("5456"),i=n.n(s);i.a}}]);