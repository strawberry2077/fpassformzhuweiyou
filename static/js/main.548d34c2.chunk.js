(this.webpackJsonpfpass=this.webpackJsonpfpass||[]).push([[0],{81:function(n,e){},83:function(n,e){},97:function(n,e,t){"use strict";t.r(e);var o=t(3),a=t(1),i=t(5),r=t.n(i),c=t(100),s=t(101),l=(t(55),t(9)),d=t(10),m=t(4);function u(){var n=Object(l.a)(["\n  display: inline-block;\n  overflow: hidden;\n  width: 32px;\n  height: 32px;\n  color: #fff;\n\n  &:hover {\n    color: #fff;\n  }\n\n  svg {\n    fill: currentColor;\n  }\n"]);return u=function(){return n},n}function h(){var n=Object(l.a)(["\n  background: #343a40;\n"]);return h=function(){return n},n}function f(){var n=Object(l.a)(["\n  body {\n    padding-top: 56px;\n  }\n"]);return f=function(){return n},n}Object(d.b)(f());var g=Object(d.a)(m.k).attrs({dark:!0,fixed:"top"})(h()),j=d.a.a.attrs({href:"https://github.com/fpass/fpass",target:"_blank"})(u()),p=function(){return Object(o.jsx)(g,{children:Object(o.jsxs)(m.b,{children:[Object(o.jsx)(m.l,{href:"/",children:"FPASS"}),Object(o.jsx)(j,{children:Object(o.jsx)("svg",{height:"32",version:"1.1",viewBox:"0 0 16 16",width:"32",children:Object(o.jsx)("path",{fillRule:"evenodd",d:"M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"})})})]})})},b=t(26),v=t(42),x=t(43),O=t(49),w=t(48),y=t(44),k=t.n(y),C=t(45),S=t.n(C),N=t(46),q=t.n(N),A=function(n){var e=n.domain,t=n.salt,o=n.length;if(!e||!t||o<=2)return"";var a=Array.apply(null,{length:3}).reduce((function(n){return S()(n+t)}),e).substr(0,o).split("");a[0]=isNaN(a[0])?a[0].toLowerCase():String.fromCharCode(97+parseInt(a[0],10)),a[1]=isNaN(a[1])?a[1].toLowerCase():String.fromCharCode(97+parseInt(a[1],10)),a[2]=isNaN(a[2])?a[2].charCodeAt(0)%10:a[2],a[3]=["~","!","@","#","$","%","&"][a[4].charCodeAt(0)%7];for(var i=a.join(""),r=q()("keccak256").update(i).digest("hex"),c="",s=0;s<i.length;s++)parseInt(r[s],16)>=8?c+=i[s].toUpperCase():c+=i[s];return c},E=[{name:"\u817e\u8baf\u4f01\u4e1a\u90ae",domain:"exmail.qq.com",length:32},{name:"segmentfault",domain:"segmentfault.com",length:32},{name:"\u7b80\u4e66",domain:"jianshu.com",length:32},{name:"\u5fae\u4fe1\u516c\u4f17\u5e73\u53f0",domain:"mp.weixin.qq.com",length:16},{name:"\u4f18\u9177",domain:"youku.com",length:16},{name:"Steam",domain:"store.steampowered.com",length:64},{name:"\u817e\u8bafQQ",domain:"qq.com",length:16},{name:"\u5fae\u4fe1",domain:"wx.qq.com",length:16},{name:"GitHub",domain:"github.com",length:72},{name:"NPM",domain:"npmjs.com",length:72},{name:"\u77e5\u4e4e",domain:"zhihu.com",length:128},{name:"\u767e\u5ea6",domain:"baidu.com",length:14},{name:"\u65b0\u6d6a\u5fae\u535a",domain:"weibo.com",length:16},{name:"12306",domain:"12306.cn",length:20},{name:"\u8c46\u74e3",domain:"douban.com",length:20},{name:"\u62c9\u94a9",domain:"lagou.com",length:16},{name:"\u963f\u91cc\u4e91\u4f01\u4e1a\u90ae",domain:"qiye.aliyun.com",length:32},{name:"\u6dd8\u5b9d",domain:"taobao.com",length:20},{name:"\u4eac\u4e1c",domain:"jd.com",length:20},{name:"Coding",domain:"coding.net",length:64},{name:"\u5f00\u6e90\u4e2d\u56fd",domain:"oschina.net",length:20},{name:"\u7801\u4e91",domain:"gitee.com",length:16},{name:"\u6597\u9c7c",domain:"douyu.com",length:25},{name:"\u54d4\u54e9\u54d4\u54e9",domain:"bilibili.com",length:16},{name:"\u7532\u9aa8\u6587",domain:"oracle.com",length:80},{name:"\u997f\u4e86\u4e48",domain:"ele.me",length:20},{name:"Cloudflare",domain:"cloudflare.com",length:128},{name:"Freenom",domain:"freenom.com",length:64},{name:"Vultr",domain:"vultr.com",length:128},{name:"\u5c0f\u7c73",domain:"mi.com",length:16},{name:"\u534e\u4e3a\u8d26\u53f7",domain:"vmall.com",length:32},{name:"\u7f51\u6613",domain:"163.com",length:16},{name:"\u5b66\u4fe1\u7f51",domain:"chsi.com.cn",length:30},{name:"\u9524\u5b50\u79d1\u6280",domain:"smartisan.com",length:16}];E.sort((function(n,e){return n.domain<=e.domain?-1:1})),E.unshift({name:"\u81ea\u5b9a\u4e49",domain:""});function F(){var n=Object(l.a)(["\n  max-width: 480px;\n  width: 100%;\n  height: 380px;\n  padding: 15px 0;\n"]);return F=function(){return n},n}function I(){var n=Object(l.a)(["\n  min-height: calc(100vh - 56px);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n\n  @media screen and (max-width: 767px) {\n    display: block;\n  }\n"]);return I=function(){return n},n}var L=Object(d.a)(m.b)(I()),B=Object(d.a)(m.c)(F()),M=function(n){Object(O.a)(t,n);var e=Object(w.a)(t);function t(){var n;Object(v.a)(this,t);for(var o=arguments.length,a=new Array(o),i=0;i<o;i++)a[i]=arguments[i];return(n=e.call.apply(e,[this].concat(a))).state={selected:0,domain:"",length:"",password:"",modal:!1},n.submitForm=function(e){n.encrypt()&&n.setState({modal:!0})},n}return Object(x.a)(t,[{key:"componentDidMount",value:function(){var n;this.clipboard(),this.keyup(),n=r.a.findDOMNode(this.refs.passForm).querySelectorAll("input"),Array.from(n).forEach((function(n){return n.addEventListener("focus",(function(){return setTimeout((function(){return n.scrollIntoView(!1)}),250)}))}))}},{key:"render",value:function(){var n=this,e=this.state,t=e.selected,a=e.modal;return Object(o.jsxs)(L,{children:[Object(o.jsxs)(B,{ref:"passForm",children:[Object(o.jsxs)(m.d,{children:[Object(o.jsx)(m.f,{children:"\u57df\u540d"}),Object(o.jsx)(m.e,{type:"select",onChange:function(e){return n.setState({selected:~~e.target.value})},value:t,children:E.map((function(n,e){return Object(o.jsx)("option",{value:e,children:0===e?n.name:"".concat(n.domain," - ").concat(n.name)},e)}))})]}),Object(o.jsxs)("div",{style:{display:0===t?"block":"none"},children:[Object(o.jsx)(m.d,{children:Object(o.jsx)(m.e,{type:"text",onInput:function(e){return n.setState({domain:e.target.value})}})}),Object(o.jsxs)(m.d,{children:[Object(o.jsx)(m.f,{children:"\u957f\u5ea6"}),Object(o.jsx)(m.e,{type:"number",onInput:function(e){return n.setState({length:e.target.value})}})]})]}),Object(o.jsxs)(m.d,{children:[Object(o.jsx)(m.f,{children:"\u5bc6\u7801"}),Object(o.jsx)(m.e,{type:"password",autoComplete:"on",onInput:function(e){return n.setState({password:e.target.value})}}),Object(o.jsx)(m.e,{style:{display:"none"}})]}),Object(o.jsx)(m.a,{color:"secondary",ref:"submitButton",onClick:this.submitForm,children:"\u786e\u5b9a"})]}),Object(o.jsxs)(m.g,{isOpen:a,centered:!0,children:[Object(o.jsx)(m.j,{children:"\u63d0\u793a"}),Object(o.jsx)(m.h,{children:"\u5bc6\u7801\u5df2\u590d\u5236\u5230\u526a\u8d34\u677f"}),Object(o.jsx)(m.i,{children:Object(o.jsx)(m.a,{color:"secondary",onClick:function(e){return n.setState({modal:!1})},children:"\u5173\u95ed"})})]})]})}},{key:"encrypt",value:function(){var n=this.state,e=n.selected,t=n.domain,o=n.length,a=n.password,i=E[e];return i&&a?A(0===e?{domain:t,length:o,salt:a}:Object(b.a)(Object(b.a)({},i),{},{salt:a})):""}},{key:"clipboard",value:function(){var n=this;new k.a(r.a.findDOMNode(this.refs.submitButton),{text:function(){return n.encrypt()}})}},{key:"keyup",value:function(){var n=this,e={13:function(){return r.a.findDOMNode(n.refs.submitButton).click()},27:function(){return n.setState({modal:!1})}};window.addEventListener("keyup",(function(n){var t=n.keyCode;return e[t]&&e[t]()}))}}]),t}(a.Component),_=function(){return Object(o.jsxs)(a.Fragment,{children:[Object(o.jsx)(p,{}),Object(o.jsx)(c.a,{children:Object(o.jsx)(s.a,{path:"/",component:M})})]})},W=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function D(n){navigator.serviceWorker.register(n).then((function(n){n.onupdatefound=function(){var e=n.installing;e.onstatechange=function(){"installed"===e.state&&(navigator.serviceWorker.controller?(console.log("New content is available; please refresh."),window.__PLEASE_REFRESH__=!0):console.log("Content is cached for offline use."))}}})).catch((function(n){console.error("Error during service worker registration:",n)}))}r.a.render(Object(o.jsx)(_,{}),document.getElementById("app")),function(){if("serviceWorker"in navigator){if(new URL(".",window.location).origin!==window.location.origin)return;window.addEventListener("load",(function(){var n="".concat(".","/service-worker.js");W?(!function(n){fetch(n).then((function(e){404===e.status||-1===e.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then((function(n){n.unregister().then((function(){window.location.reload()}))})):D(n)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(n),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://goo.gl/SC7cgQ")}))):D(n)}))}}()}},[[97,1,2]]]);
//# sourceMappingURL=main.548d34c2.chunk.js.map