webpackJsonp([1],{"0/0X":function(t,e){},"1/oy":function(t,e){},"8zHx":function(t,e){},"A+lE":function(t,e){},Id91:function(t,e){},NHnr:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=i("7+uW"),n={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("router-view")],1)},staticRenderFns:[]};var s=i("VU/8")({name:"App",data:function(){return{}}},n,!1,function(t){i("0/0X")},null,null).exports,r=i("/ocq"),o=i("BO1k"),l=i.n(o),c=i("mvHQ"),u=i.n(c),h=firebase.database().ref("/content/"),d=firebase.database().ref().child("/UI/");Date.prototype.myDate=function(){if(this.getMinutes().length<2){var t=u()(this.getMinutes()).split("");this.myProp=t.unshift("0")}else this.myProp=this.getMinutes()};var p=new Date;p.myDate();var f=p.myProp,v={all:function(t){return t},hashTag:function(t,e){var i=[];for(var a in e)if(e.hasOwnProperty(a)){var n=!0,s=!1,r=void 0;try{for(var o,c=l()(e[a].hashTag);!(n=(o=c.next()).done);n=!0){if(o.value===t){i.push(e[a]);break}}}catch(t){s=!0,r=t}finally{try{!n&&c.return&&c.return()}finally{if(s)throw r}}}return i}},g={data:function(){return{now:p.getFullYear()+"/"+(p.getMonth()+1)+"/"+p.getDate()+"  "+p.getHours()+": "+f,dataAll:[],fScreen:!1,fScreenImg:"",inputEmail:"",inputName:"",inputText:"",chatPosition:"top",chat:!1,currentPage:1,countOfPage:5,allHashTag:[],filterArray:[],view:"all",hashTagKeyWord:"",loading:!0,frontPic:[],nextPic:[],currentPost:0,currentPostPic:[],UIBase:"",itemUI:[]}},computed:{getNavBarText:function(){return void 0===this.itemUI[this.UIBase]?"loading":this.itemUI[this.UIBase].navBarText},getTitleText:function(){return void 0===this.itemUI[this.UIBase]?"none":this.itemUI[this.UIBase].titleText},getHeadPic:function(){return void 0===this.itemUI[this.UIBase]?"none":this.itemUI[this.UIBase].headPic},getProfilePic:function(){return void 0===this.itemUI[this.UIBase]?"none":this.itemUI[this.UIBase].profilePic},getProfileText:function(){return void 0===this.itemUI[this.UIBase]?"none":this.itemUI[this.UIBase].profileText},fullScreenLeft:function(){return void 0===this.filterData[this.currentPost-1].pic?"":this.filterData[this.currentPost-1].pic},fullScreenRight:function(){return void 0===this.filterData[this.currentPost+1].pic?"":this.filterData[this.currentPost+1].pic},pageStart:function(){return(this.currentPage-1)*this.countOfPage},totalPage:function(){return Math.ceil(this.filterData.length/this.countOfPage)},filterData:function(){return"all"===this.view?v[this.view](this.dataAll):"hashTag"===this.view?v[this.view](this.hashTagKeyWord,this.dataAll):void 0}},methods:{frontPost:function(t){void 0!==this.filterData[t-1]&&(this.currentPost=t,this.frontPic=this.dataAll[t-1].pic)},nextPost:function(t){void 0!==this.filterData[t+1]&&(this.currentPost=t,this.nextPic=this.dataAll[t+1].pic)},setNowPost:function(t){this.currentPostPic=t},changeToFullScreen:function(t){this.fScreenImg=t,this.fScreen=!this.fScreen},closeFullScreen:function(){this.fScreenImg="",this.fScreen=!this.fScreen},changeToLeft:function(){void 0===this.currentPostPic[this.currentPostPic.indexOf(this.fScreenImg)-1]?(this.currentPostPic=this.fullScreenLeft,this.currentPost--,this.fScreenImg=this.currentPostPic[this.currentPostPic.length-1]):this.fScreenImg=this.currentPostPic[this.currentPostPic.indexOf(this.fScreenImg)-1]},changeToRight:function(){void 0===this.currentPostPic[this.currentPostPic.indexOf(this.fScreenImg)+1]?(this.currentPostPic=this.fullScreenRight,this.currentPost++,this.fScreenImg=this.currentPostPic[0]):this.fScreenImg=this.currentPostPic[this.currentPostPic.indexOf(this.fScreenImg)+1]},chatOpen:function(){this.chat=!this.chat},setPage:function(t){t<=0||t>this.totalPage||(this.currentPage=t)},getHashTag:function(){var t=this;for(var e in t.dataAll)if(t.dataAll.hasOwnProperty(e)){var i=!0,a=!1,n=void 0;try{for(var s,r=l()(t.dataAll[e].hashTag);!(i=(s=r.next()).done);i=!0){var o=s.value;-1===t.allHashTag.indexOf(o)&&t.allHashTag.push(o)}}catch(t){a=!0,n=t}finally{try{!i&&r.return&&r.return()}finally{if(a)throw n}}}},filterTest:function(){this.filterArray=v.hashTag("work",this.dataAll)},setHashTagKeyWord:function(t){this.view="hashTag",this.hashTagKeyWord=t},setHashTagKeyToNone:function(){this.view="all"}},mounted:function(){var t=this;d.on("value",function(e){e.forEach(function(e){t.UIBase=e.key}),t.itemUI=e.val()}),h.orderByChild("pinned").on("value",function(e){e.forEach(function(e){t.dataAll.push(e.val())}),t.dataAll.reverse(),t.getHashTag(),t.loading=!1})}},b={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"all"},[i("b-container",{staticStyle:{position:"relative"},attrs:{id:"app"}},[i("b-navbar",{staticClass:"fixed-top",attrs:{toggleable:"md",type:"white",variant:"white"}},[i("h1",{staticClass:"text-center",staticStyle:{display:"inline-block",margin:"0 auto"}},[t._v(t._s(t.getNavBarText||"未設定"))])]),t._v(" "),i("div",{staticClass:"d-none d-md-block main-picture",style:{background:"url("+t.getHeadPic||"https://loremflickr.com/1024/768)"}},[i("div",{staticClass:"main-picture--element"})]),t._v(" "),!0===t.loading?i("div",{staticClass:"loading"},[i("div",{staticClass:"loading-item-0"})]):t._e(),t._v(" "),i("b-row",{class:{loadingBlur:t.loading}},[i("b-col",{attrs:{sm:"12",md:"8",lg:"8"}},[i("div",{staticClass:"main-block"},[i("ul",{staticClass:"main-block--element"},t._l(t.filterData.slice(t.pageStart,t.pageStart+t.countOfPage),function(e,a){return i("li",{staticClass:"main-block--element-mod",attrs:{id:"list"+t.pageStart+a}},[i("b-row",{staticClass:"mb-3"},[i("b-col",{attrs:{sm:"8"}},[i("h1",[t._v(t._s(e.title))])]),t._v(" "),i("b-col",{attrs:{sm:"4",right:""}},[i("b-row",[i("b-col",{attrs:{sm:"12",right:""}},[0===a?i("a",{staticClass:"float-right text-right d-md-none d-block",attrs:{href:"#"},on:{click:t.setHashTagKeyToNone}},[t._v("#All")]):t._e(),t._v(" "),t._l(e.hashTag||"",function(a){return void 0!==e.hashTag?i("a",{staticClass:"float-right text-right",attrs:{href:"#"},on:{click:function(e){t.setHashTagKeyWord(a)}}},[t._v("#"+t._s(a)+" ")]):t._e()})],2),t._v(" "),i("b-col",{attrs:{sm:"12",right:""}},[i("h4",{staticClass:"float-right text-right"},[t._v(t._s(e.time||t.now))])]),t._v(" "),i("b-col",{attrs:{sm:"12"}},[i("hr")])],1)],1)],1),t._v(" "),i("b-row",[t._l(e.pic,function(n){return!1===e.square?i("b-col",{key:n.id,staticClass:"mb-3",attrs:{sm:"12"}},[i("div",{staticClass:"innerImg-block",on:{click:function(i){t.changeToFullScreen(n),t.setNowPost(e.pic),t.frontPost(t.pageStart+a),t.nextPost(t.pageStart+a)}}},[i("b-img",{staticClass:"innerImg-block--element",attrs:{src:n,fluid:""}})],1)]):t._e()}),t._v(" "),t._l(e.pic,function(a){return!0===e.square?i("b-col",{key:a.id},[i("b-row",[i("div",{staticStyle:{height:"500px",width:"500px","background-color":"#000"}})])],1):t._e()})],2),t._v(" "),!0===t.fScreen?i("div",{staticClass:"fullScreen-block d-none d-md-block"},[i("b-btn",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],staticClass:"text-white fullScreen-block-element-closer",attrs:{title:"關閉"},on:{click:t.closeFullScreen}},[i("a",{staticClass:"text-white fullScreen-block-element-closer-innerText",attrs:{href:"#"}},[t._v("X")])]),t._v(" "),i("b-btn",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],staticClass:"fullScreen-block-element-arrowContainer-left",attrs:{title:"上一張圖片"},on:{click:t.changeToLeft}},[i("div",{staticClass:"fullScreen-block-element-left"})]),t._v(" "),i("b-btn",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],staticClass:"fullScreen-block-element-arrowContainer-right",attrs:{title:"下一張圖片"},on:{click:t.changeToRight}},[i("div",{staticClass:"fullScreen-block-element-right"})]),t._v(" "),i("div",{staticClass:"fullScreen-block-element-imgContainer"},[void 0!==t.fScreenImg?i("b-img",{staticClass:"fullScreen-block-element-imgContainer-img",attrs:{src:t.fScreenImg,fluid:""}}):t._e()],1)],1):t._e(),t._v(" "),i("b-row",[i("b-col",[i("p",{staticStyle:{"font-weight":"lighter",color:"#707C74"}},[t._v(t._s(e.text))])])],1)],1)})),t._v(" "),i("div",{staticStyle:{position:"relative"}},[i("b-button-toolbar",{attrs:{"aria-label":"Toolbar with button groups"}},[i("b-button-group",{staticClass:"mx-1",attrs:{variant:"info"}},[t.totalPage>=1?i("b-btn",{staticClass:"btn-sm btn-color-test",on:{click:function(e){t.setPage(t.currentPage-1)}}},[t._v("\n                  ‹\n                ")]):t._e(),t._v(" "),t._l(t.totalPage,function(e,a){return i("b-btn",{key:a,staticClass:"btn-sm btn-color-test",attrs:{sm:""},on:{click:function(i){t.setPage(e)}}},[t._v("\n                  "+t._s(e)+"\n                ")])}),t._v(" "),t.totalPage>=1?i("b-btn",{staticClass:"btn-sm btn-color-test",on:{click:function(e){t.setPage(t.currentPage+1)}}},[t._v("\n                  ›\n                ")]):t._e()],2)],1)],1)])]),t._v(" "),i("b-col",{staticClass:"d-none d-md-block",attrs:{sm:"0",md:"4",lg:"4"}},[i("div",{staticClass:"square"},[i("div",{staticStyle:{position:"relative","max-width":"20rem"}},[i("h1",{staticClass:"mb-4 text-center"},[t._v(t._s(t.getTitleText))]),t._v(" "),i("b-card",{staticClass:"text-center bottom-shadow mb-5",attrs:{"border-variant":"light",header:"關於我"}},[i("p",{staticClass:"card-text"},[t._v(t._s(t.getProfileText))]),t._v(" "),i("b-img",{attrs:{src:t.getProfilePic,fluid:""}})],1),t._v(" "),i("b-card",{staticClass:"bottom-shadow",attrs:{"border-variant":"light",header:"標籤"}},[i("b-col",{attrs:{sm:"12"}},[i("a",{staticClass:"card-text text-left",attrs:{href:"#"},on:{click:t.setHashTagKeyToNone}},[t._v("#All")])]),t._v(" "),t._l(t.allHashTag,function(e){return i("b-col",{key:e.id,attrs:{sm:"12"}},[i("a",{staticClass:"text-left",attrs:{href:"#"},on:{click:function(i){t.setHashTagKeyWord(e)}}},[t._v("#"+t._s(e))]),i("br")])})],2),t._v(" "),i("b-col",{attrs:{sm:"12"}})],1)])])],1),t._v(" "),i("b-btn",{staticClass:"btn-circle",attrs:{id:"chat"},on:{click:t.chatOpen}},[i("div",{staticStyle:{position:"relative"}},[i("i",{staticClass:"icon-letterLIne letterLine"})])]),t._v(" "),i("b-popover",{attrs:{target:"chat",placement:t.chatPosition,title:"請聯絡我！",content:"123",show:t.chat},on:{"update:show":function(e){t.chat=e}}},[i("b-form",{attrs:{action:"https://formspree.io/bloom10091992@gmail.com",method:"POST"}},[i("b-form-group",{attrs:{id:"emailGroupEmail",label:"您的信箱：","label-for":"emailInput",description:"我們不會洩漏您的資訊。"}},[i("b-form-input",{attrs:{id:"emailInput",type:"email",name:"_replyto",required:"",placeholder:"請輸入您的信箱。"},model:{value:t.inputEmail,callback:function(e){t.inputEmail=e},expression:"inputEmail"}})],1),t._v(" "),i("b-form-group",{attrs:{id:"emailGroupName",label:"您的大名：","label-for":"nameInput"}},[i("b-form-input",{attrs:{id:"nameInput",type:"text",required:"",placeholder:"請輸入您的大名。",name:"name"},model:{value:t.inputName,callback:function(e){t.inputName=e},expression:"inputName"}})],1),t._v(" "),i("b-form-textarea",{attrs:{id:"emailGroupTextArea",placeholder:"請輸入您的寶貴意見。",rows:3,"max-rows":6,name:"name"},model:{value:t.inputText,callback:function(e){t.inputText=e},expression:"inputText"}}),t._v(" "),i("input",{attrs:{type:"hidden",name:"_next",value:"//chuhsu.me/#/thanks"}}),t._v(" "),i("b-form-group",[i("b-button",{staticClass:"btn-outline-info mt-3",attrs:{type:"submit"}},[t._v("送出")])],1)],1)],1),t._v(" "),i("b-col")],1)],1)},staticRenderFns:[]};var m=i("VU/8")(g,b,!1,function(t){i("vBxO")},"data-v-2f4c07c5",null).exports,T=(firebase.storage().ref("/images/"),firebase.database().ref().child("/content/")),_=firebase.database().ref().child("/UI/");function P(t){return t<10?"0"+t:t}var x={name:"back",data:function(){return{inputAccount:"",inputPassword:"",logged:!1,inputTitle:"",editTitle:"",inputInnerText:"",editInnerText:"",inputInnerPic:[],inputInnerPicText:"",editInnerPic:"",editInnerPicArray:[],inputHashTagArray:[],editHashTagArray:[],inputHashTagText:"",editHashTagText:"",squarePic:!1,squareSelect:[{text:"正方形",value:!0},{text:"長方形",value:!1}],item:[],itemUI:[],allHashTag:[],inputNavBarText:"",inputRightTitleText:"",inputHeadPic:"",inputProfileText:"",inputProfilePic:"",UIBase:""}},computed:{getNavBarText:function(){return void 0===this.itemUI[this.UIBase]?"none":this.itemUI[this.UIBase].navBarText},getTitleText:function(){return void 0===this.itemUI[this.UIBase]?"none":this.itemUI[this.UIBase].titleText},getHeadPic:function(){return void 0===this.itemUI[this.UIBase]?"none":this.itemUI[this.UIBase].headPic},getProfileText:function(){return void 0===this.itemUI[this.UIBase]?"none":(this.inputProfileText=this.itemUI[this.UIBase].profileText,this.itemUI[this.UIBase].profileText)},getProfilePic:function(){return void 0===this.itemUI[this.UIBase]?"none":this.itemUI[this.UIBase].profilePic}},methods:{login:function(){var t=this;firebase.auth().signInWithEmailAndPassword(this.inputAccount,this.inputPassword).then(function(){t.logged=!0,t.getHashTag()}).catch(function(t){var e=t.code;console.log(e)})},addHashTag:function(){-1===this.inputHashTagArray.indexOf(this.inputHashTagText.toLowerCase())?(this.inputHashTagArray.push(this.inputHashTagText.toLowerCase()),this.inputHashTagText=""):(alert("這個 tag 重複囉"),this.inputHashTagText="")},addAlreadyHashTag:function(t){-1===this.inputHashTagArray.indexOf(t)?this.inputHashTagArray.push(t):alert("這個已經有囉")},deleteHashTagFromArray:function(t){this.inputHashTagArray.splice(this.inputHashTagArray.indexOf(t),1)},addInnerPic:function(){-1===this.inputInnerPic.indexOf(this.inputHashTagText)?(this.inputInnerPic.push(this.inputInnerPicText),this.inputInnerPicText=""):(alert("這張圖用過囉"),this.inputInnerPicText="")},deletePicArray:function(t){this.inputInnerPic.splice(this.inputInnerPic.indexOf(t),1)},newPost:function(){if(""===this.inputTitle||""===this.inputInnerPic||0===this.inputHashTagArray.length)return alert("有一些資料還沒填ㄛ");var t,e,i,a,n;T.push({title:this.inputTitle,text:this.inputInnerText,pic:this.inputInnerPic,hashTag:this.inputHashTagArray,editing:!1,pinned:!1,time:(t=new Date,e=t.getFullYear(),i=t.getMonth()+1,a=P(t.getDate()),n=function(t){switch(t){case 0:return"Sun";case 1:return"Mon";case 2:return"Tue";case 3:return"Wed";case 4:return"Thu";case 5:return"Fri";case 6:return"Sat"}}(t.getDay()),P(t.getHours()),P(t.getMinutes()),P(t.getSeconds()),e+"/"+i+"/"+a+" "+n),square:this.squarePic}),this.inputTitle="",this.inputInnerText="",this.inputInnerPic=[],this.inputInnerPicText="",this.inputHashTagArray=[],this.inputHashTagText=""},deleteData:function(t){T.child(t).remove()},editData:function(t){var e=void 0;T.child(t).child("editing").once("value",function(t){e=t.val()}),e=!e,T.child(t).update({editing:e}),this.editTitle=this.item[t].title,this.editInnerPicArray=this.item[t].pic,this.editInnerText=this.item[t].text,this.editHashTagArray=this.item[t].hashTag},pinnedPost:function(t){var e=void 0;T.child(t).child("pinned").once("value",function(t){e=t.val()}),e=!e,T.child(t).update({pinned:e})},cancelEditData:function(t){T.child(t).update({editing:!1})},deleteInnerPicFormArrayEdit:function(t){this.editInnerPicArray.splice(this.inputHashTagArray.indexOf(t),1)},addInnerPicEdit:function(t){this.editInnerPicArray.push(t)},addHashTagEdit:function(t){this.editHashTagArray.push(t)},deleteHashTagFromArrayEdit:function(t){this.editHashTagArray.splice(this.editHashTagArray.indexOf(t),1)},saveEditedData:function(t){T.child(t).update({title:this.editTitle,text:this.editInnerText,pic:this.editInnerPicArray,hashTag:this.editHashTagArray,editing:!1})},getHashTag:function(){var t=this;for(var e in t.item)if(t.item.hasOwnProperty(e)){var i=!0,a=!1,n=void 0;try{for(var s,r=l()(t.item[e].hashTag);!(i=(s=r.next()).done);i=!0){var o=s.value;-1===t.allHashTag.indexOf(o)&&t.allHashTag.push(o)}}catch(t){a=!0,n=t}finally{try{!i&&r.return&&r.return()}finally{if(a)throw n}}}},editNavBarText:function(){""!==this.inputNavBarText?_.child(this.UIBase).update({navBarText:this.inputNavBarText}):alert("不得為空")},editTitleText:function(){""!==this.inputRightTitleText?_.child(this.UIBase).update({titleText:this.inputRightTitleText}):alert("不得為空")},editHeadPic:function(){""!==this.inputHeadPic?_.child(this.UIBase).update({headPic:this.inputHeadPic}):alert("不得為空")},editProfileText:function(){""!==this.inputProfileText?_.child(this.UIBase).update({profileText:this.inputProfileText}):alert("不得為空")},editProfilePic:function(){""!==this.inputProfilePic?_.child(this.UIBase).update({profilePic:this.inputProfilePic}):alert("不得為空")}},created:function(){var t=this;firebase.auth().onAuthStateChanged(function(e){e?(T.on("value",function(e){t.item=e.val()}),_.on("value",function(e){e.forEach(function(e){t.UIBase=e.key}),t.itemUI=e.val()}),t.logged=!0,t.getHashTag()):t.logged=!1})},destroyed:function(){firebase.database().ref("/test/").set({destroyTest:!0})}},I={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("b-container",{attrs:{fluid:"",id:"app"}},[i("div",{staticClass:"row"},[!1===t.logged?i("div",{staticClass:"col-sm-6 col-md-4 offset-md-4"},[i("h1",{staticClass:"text-center login-title"},[i("b",[t._v("登入之後繼續")])]),t._v(" "),i("div",{staticClass:"account-wall"},[i("img",{staticClass:"profile-img",attrs:{src:"https://lh5.googleusercontent.com/-b0-k99FZlyE/AAAAAAAAAAI/AAAAAAAAAAA/eu7opA4byxI/photo.jpg?sz=120",alt:""}}),t._v(" "),i("form",{staticClass:"form-signin",on:{submit:function(e){return e.preventDefault(),t.login(e)}}},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.inputAccount,expression:"inputAccount"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Email",required:"",autofocus:""},domProps:{value:t.inputAccount},on:{input:function(e){e.target.composing||(t.inputAccount=e.target.value)}}}),t._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:t.inputPassword,expression:"inputPassword"}],staticClass:"form-control",attrs:{type:"password",placeholder:"Password",required:""},domProps:{value:t.inputPassword},on:{input:function(e){e.target.composing||(t.inputPassword=e.target.value)}}}),t._v(" "),i("button",{staticClass:"btn btn-lg btn-outline-info btn-block",attrs:{type:"submit"}},[t._v("\n            登入\n          ")])])])]):t._e()]),t._v(" "),!0===t.logged?i("b-card",{attrs:{"no-body":""}},[i("b-tabs",{attrs:{pills:"",card:"",vertical:"","nav-wrapper-class":"w-50"}},[i("b-tab",{attrs:{title:"全部貼文",active:""}},[i("ul",t._l(t.item,function(e,a){return i("li",{staticStyle:{"margin-bottom":"15px"}},[i("b-list-group",[i("b-list-group-item",{staticClass:"flex-column align-items-start",attrs:{href:"#",active:""}},[!1===e.editing?i("div",[i("div",{staticClass:"d-flex w-100 justify-content-between"},[i("h5",{staticClass:"mb-1"},[t._v(t._s(e.title))]),t._v(" "),!0===e.pinned?i("p",{staticClass:"float-right"},[t._v("🏓")]):t._e()]),t._v(" "),i("p",{staticClass:"mb-1"},[t._v("\n                    "+t._s(e.text)+"\n                  ")]),t._v(" "),i("small",[t._v("id: "+t._s(a))]),t._v(" "),i("br"),t._v(" "),t._l(e.hashTag,function(e){return i("small",[t._v("#"+t._s(e))])}),t._v(" "),i("br"),t._v(" "),i("b-button",{staticClass:"btn-outline-danger",on:{click:function(e){t.deleteData(a)}}},[t._v("刪除")]),t._v(" "),i("b-button",{staticClass:"btn-outline-warning",on:{click:function(e){t.pinnedPost(a)}}},[t._v("置頂")]),t._v(" "),i("b-button",{staticClass:"btn-outline-info",on:{click:function(e){t.editData(a)}}},[t._v("編輯")])],2):t._e(),t._v(" "),!0===e.editing?i("div",{staticClass:"d-flex w-100 justify-content-between"},[i("b-row",[i("b-col",{attrs:{cols:"12"}},[i("p",[t._v("請輸入標題：")]),t._v(" "),i("b-form-input",{staticClass:"mb-5",attrs:{placeholder:"請輸入標題"},model:{value:t.editTitle,callback:function(e){t.editTitle=e},expression:"editTitle"}}),t._v(" "),i("p",[t._v("請輸入圖片網址：")]),t._v(" "),i("b-input-group",{staticClass:"mb-5",attrs:{prepend:"圖片"}},[i("b-form-input",{attrs:{placeholder:"請輸入圖片"},model:{value:t.editInnerPic,callback:function(e){t.editInnerPic=e},expression:"editInnerPic"}}),t._v(" "),i("b-input-group-append",[i("b-button",{attrs:{variant:"info"},on:{click:function(e){t.addInnerPicEdit(t.editInnerPic)}}},[t._v("新增")])],1)],1),t._v(" "),null!==t.editInnerPicArray?i("b-list-group",{staticClass:"mb-3"},t._l(t.editInnerPicArray,function(e){return i("b-list-group-item",{key:e.id,staticClass:"mb-2 text-dark"},[i("b-img",{attrs:{src:e,fluid:""}}),t._v("\n                          #"+t._s(e)+"\n                          "),i("b-button",{staticClass:"btn-danger float-right",on:{click:function(i){t.deleteInnerPicFormArrayEdit(e)}}},[t._v("刪除")])],1)})):t._e()],1),t._v(" "),i("b-col",{attrs:{cols:"12"}},[i("p",[t._v("請輸入內文：")]),t._v(" "),i("b-form-textarea",{attrs:{placeholder:"請輸入內文",rows:"3"},model:{value:t.editInnerText,callback:function(e){t.editInnerText=e},expression:"editInnerText"}}),t._v(" "),i("b-input-group",{staticClass:"mb-5",attrs:{prepend:"標籤"}},[i("b-form-input",{attrs:{placeholder:"請輸入標籤"},model:{value:t.editHashTagText,callback:function(e){t.editHashTagText=e},expression:"editHashTagText"}}),t._v(" "),i("b-input-group-append",[i("b-button",{attrs:{variant:"info"},on:{click:function(e){t.addHashTagEdit(t.editHashTagText)}}},[t._v("新增")])],1)],1),t._v(" "),null!==t.editHashTagArray?i("b-list-group",{staticClass:"mb-3"},t._l(t.editHashTagArray,function(e){return i("b-list-group-item",{key:e.id,staticClass:"mb-2 text-dark"},[t._v("#"+t._s(e)+"\n                          "),i("b-button",{staticClass:"btn-danger float-right",on:{click:function(i){t.deleteHashTagFromArrayEdit(e)}}},[t._v("刪除")])],1)})):t._e(),t._v(" "),i("b-button",{staticClass:"btn mt-4 mb-5",on:{click:function(e){t.saveEditedData(a)}}},[t._v("保存")]),t._v(" "),i("b-button",{staticClass:"btn mt-4 mb-5",on:{click:function(e){t.cancelEditData(a)}}},[t._v("取消編輯")])],1)],1)],1):t._e()])],1)],1)}))]),t._v(" "),i("b-tab",{attrs:{title:"新增貼文"}},[i("b-form",[i("b-input-group",{staticClass:"mb-5",attrs:{prepend:"標題"}},[i("b-form-input",{attrs:{placeholder:"請輸入標題",required:""},model:{value:t.inputTitle,callback:function(e){t.inputTitle=e},expression:"inputTitle"}})],1),t._v(" "),i("b-input-group",[i("b-form-input",{attrs:{placeholder:"請輸入圖片網址",required:""},model:{value:t.inputInnerPicText,callback:function(e){t.inputInnerPicText=e},expression:"inputInnerPicText"}}),t._v(" "),i("b-input-group-append",[i("b-button",{attrs:{variant:"info"},on:{click:t.addInnerPic}},[t._v("新增圖片")])],1)],1),t._v(" "),i("b-list-group",{staticClass:"mb-5"},t._l(t.inputInnerPic,function(e){return i("b-list-group-item",{key:e.id},[t._v(t._s(e)+"\n              "),i("b-img",{attrs:{src:e,fluid:""}}),t._v(" "),i("b-button",{staticClass:"btn-danger float-right",on:{click:function(i){t.deletePicArray(e)}}},[t._v("刪除")])],1)})),t._v(" "),i("b-form-input",{staticClass:"mb-5",attrs:{placeholder:"請輸入內文",required:""},model:{value:t.inputInnerText,callback:function(e){t.inputInnerText=e},expression:"inputInnerText"}}),t._v(" "),i("b-input-group",{staticClass:"mb-5",attrs:{prepend:"標籤"}},[i("b-form-input",{attrs:{placeholder:"請輸入標籤"},model:{value:t.inputHashTagText,callback:function(e){t.inputHashTagText=e},expression:"inputHashTagText"}}),t._v(" "),i("b-input-group-append",[i("b-button",{attrs:{variant:"info"},on:{click:t.addHashTag}},[t._v("新增")])],1)],1),t._v(" "),i("b-button",{staticClass:"mb-5",on:{click:t.getHashTag}},[t._v("取得既有標籤")]),t._v(" "),null!==t.allHashTag?i("b-list-group",{staticClass:"mb-3"},t._l(t.allHashTag,function(e){return i("b-list-group-item",{key:e.id},[t._v(t._s(e)+"\n              "),i("b-button",{staticClass:"btn-success float-right",on:{click:function(i){t.addAlreadyHashTag(e)}}},[t._v("加入")])],1)})):t._e(),t._v(" "),null!==t.inputHashTagArray?i("b-list-group",{staticClass:"mb-3"},t._l(t.inputHashTagArray,function(e){return i("b-list-group-item",{key:e.id,staticClass:"mb-2"},[t._v("#"+t._s(e)+"\n              "),i("b-button",{staticClass:"btn-danger float-right",on:{click:function(i){t.deleteHashTagFromArray(e)}}},[t._v("刪除")])],1)})):t._e(),t._v(" "),i("b-form-group",{attrs:{label:"Radios using <code>options</code>"}},[i("b-form-radio-group",{attrs:{id:"radios1",options:t.squareSelect,name:"radioOpenions"},model:{value:t.squarePic,callback:function(e){t.squarePic=e},expression:"squarePic"}})],1),t._v(" "),i("b-button",{staticClass:"btn-outline-info",on:{click:t.newPost}},[t._v("送出")])],1)],1),t._v(" "),i("b-tab",{attrs:{title:"hashTag 測試"}},[i("b-input-group",{attrs:{prepend:"導覽列文字"}},[i("b-form-input",{model:{value:t.inputNavBarText,callback:function(e){t.inputNavBarText=e},expression:"inputNavBarText"}}),t._v(" "),i("b-input-group-append",[i("b-button",{attrs:{variant:"info"},on:{click:t.editNavBarText}},[t._v("修改")])],1)],1),t._v(" "),i("p",{staticClass:"mb-5"},[t._v("現在的 navBar 為 "+t._s(t.getNavBarText||""))]),t._v(" "),i("b-input-group",{attrs:{prepend:"右側標題"}},[i("b-form-input",{model:{value:t.inputRightTitleText,callback:function(e){t.inputRightTitleText=e},expression:"inputRightTitleText"}}),t._v(" "),i("b-input-group-append",[i("b-button",{attrs:{variant:"info"},on:{click:t.editTitleText}},[t._v("修改")])],1)],1),t._v(" "),i("p",{staticClass:"mb-5"},[t._v("現在的 右側標題 為 "+t._s(t.getTitleText||""))]),t._v(" "),i("b-input-group",{attrs:{prepend:"上面大圖"}},[i("b-form-input",{model:{value:t.inputHeadPic,callback:function(e){t.inputHeadPic=e},expression:"inputHeadPic"}}),t._v(" "),i("b-input-group-append",[i("b-button",{attrs:{variant:"info"},on:{click:t.editHeadPic}},[t._v("修改")])],1)],1),t._v(" "),i("p",[t._v("現在的 頭頂大圖 為 "+t._s(t.getHeadPic||""))]),t._v(" "),""!==t.getHeadPic?i("b-img",{staticClass:"mb-5",attrs:{src:t.getHeadPic,fluid:""}}):t._e(),t._v(" "),i("b-input-group",{staticClass:"mb-5",attrs:{prepend:"自我介紹文字"}},[i("b-form-textarea",{attrs:{rows:3,"max-rows":6,name:"name"},model:{value:t.inputProfileText,callback:function(e){t.inputProfileText=e},expression:"inputProfileText"}}),t._v(" "),i("b-input-group-append",[i("b-button",{attrs:{variant:"info"},on:{click:t.editProfileText}},[t._v("修改")])],1)],1),t._v(" "),i("p",{staticClass:"mb-5"},[t._v("現在的自我介紹是："),i("code",[t._v(t._s(t.getProfileText))])]),t._v(" "),i("b-input-group",{attrs:{prepend:"自我介紹頭圖"}},[i("b-form-input",{model:{value:t.inputProfilePic,callback:function(e){t.inputProfilePic=e},expression:"inputProfilePic"}}),t._v(" "),i("b-input-group-append",[i("b-button",{attrs:{variant:"info"},on:{click:t.editProfilePic}},[t._v("修改")])],1)],1),t._v(" "),i("b-img",{attrs:{fluid:"",src:t.getProfilePic}})],1)],1)],1):t._e()],1)},staticRenderFns:[]};var y=i("VU/8")(x,I,!1,function(t){i("8zHx")},"data-v-0b39b9f4",null).exports,k={render:function(){var t=this.$createElement,e=this._self._c||t;return e("b-container",[e("div",{staticClass:"square-block"},[e("h1",[this._v("感謝、一日順心。")]),this._v(" "),e("i",{staticClass:"icon-letterLIne",staticStyle:{"font-size":"5rem"}})])])},staticRenderFns:[]};var C=i("VU/8")({name:"thanks"},k,!1,function(t){i("A+lE")},"data-v-fb384802",null).exports;a.a.use(r.a);var A=new r.a({routes:[{path:"/",name:"main",component:m},{path:"/back",name:"back",component:y},{path:"/thanks",name:"thanks",component:C}]}),H=i("mtWM"),w=i.n(H),U=i("e6fC"),S=i("Rf8U"),B=i.n(S);i("X66/");a.a.use(B.a,w.a),a.a.use(U.a),a.a.config.productionTip=!1,new a.a({el:"#app",router:A,components:{App:s},template:"<App/>"})},"X66/":function(t,e){},vBxO:function(t,e){},zj2Q:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.787cc47eb001e9e9aa95.js.map