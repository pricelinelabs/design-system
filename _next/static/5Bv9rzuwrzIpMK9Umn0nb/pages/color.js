(window.webpackJsonp=window.webpackJsonp||[]).push([[56],{"5jFM":function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/color",function(){return n("CKNw")}])},CKNw:function(t,e,n){"use strict";n.r(e);var r=n("Su23"),o=n("opOY"),a=n.n(o),i=n("IWw5"),l=n("829d"),c=n("QNLd"),u=n("2LpV"),s=n("h75n"),d=a.a.createElement,f=Object.keys(i.t.colors).filter((function(t){return!/[0-9]$/.test(t)})).map((function(t){return{name:t,value:i.t.colors[t]}})).filter((function(t){return!Array.isArray(t.value)})),p=f.filter((function(t){return!/^(lightGray|gray|borderGray|darkGray)$/.test(t.name)})),h=f.filter((function(t){return/^(lightGray|gray|borderGray|darkGray)$/.test(t.name)})),y=function(t){return d(l.a,Object(r.a)({},t,{width:[.5,null,1/3,.25,1/6],mb:4,px:2}))},b=function(t){return t.colors.map((function(t){return d(y,{key:t.key},d(s.a,t))}))};e.default=function(){return d(l.a,null,d(u.d,null,"Color"),d(u.c,null,"The design system includes a color palette of several primary colors, along with light and dark variations."),d(c.a,{wrap:!0,mx:-2,pt:4},d(b,{colors:p}),d(b,{colors:h})))}},h75n:function(t,e,n){"use strict";var r=n("opOY"),o=n.n(r),a=n("Q6av"),i=n("829d"),l=n("Jk40"),c=n("uv11"),u=n("2LpV"),s=n("1iA6"),d=n("lGE1"),f=n("ICVD"),p=n("1+ZH"),h=n("W+tb"),y=n("yKDJ"),b=n.n(y),m=o.a.createElement;function g(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=Object(h.a)(t);if(e){var o=Object(h.a)(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return Object(p.a)(this,n)}}var v=function(t){Object(f.a)(n,t);var e=g(n);function n(){var t;return Object(s.a)(this,n),(t=e.call(this)).handleClick=function(){b()(t.ghost),document.execCommand("copy")},t}return Object(d.a)(n,[{key:"render",value:function(){var t=this,e=this.props,n=e.children,r=e.text,a=o.a.Children.only(n),i=o.a.cloneElement(a,{onClick:this.handleClick});return m(o.a.Fragment,null,i,m("div",{ref:function(e){return t.ghost=e},style:{position:"absolute",zIndex:-1,opacity:0}},r))}}]),n}(o.a.Component),x=o.a.createElement,w=Object(a.default)(i.a).withConfig({displayName:"ColorCard__ColorChip",componentId:"sc-1ecvmsd-0"})(["height:100px;width:100%;border-radius:2px 2px 0 0;transition:all 0.1s ease;"]),C=a.default.button.withConfig({displayName:"ColorCard__HexButton",componentId:"sc-1ecvmsd-1"})(["width:100%;display:inline-block;position:relative;font-family:inherit;font-size:12px;margin:0;padding:0;color:inherit;text-align:left;background-color:transparent;border:0;border-radius:0;appearance:none;transition:all 0.125s ease;box-shadow:0 4px 4px 0 rgba(0,0,0,0.08);&:hover{box-shadow:0 8px 8px 0 rgba(0,0,0,0.08),0 16px 16px 0 rgba(0,0,0,0.08);}&:active{transform:scale(0.9);}& > span{top:0;left:0;position:absolute;font-size:12px;padding:8px 0;width:100%;color:#fff;border-radius:2px 2px 0 0;background-color:#001833;text-align:center;opacity:0;transition-property:opacity;transition-duration:0.125s;transition-timing-function:ease-out;}&:hover > span{opacity:1;}"]);e.a=function(t){var e=t.name,n=t.value;return x(l.a,{borderWidth:0,m:0},x(v,{text:n},x(C,null,x(w,{bg:n}),x("span",null,"Press to copy"),x(i.a,{p:2},x(c.a,{fontSize:1,mb:1,align:"left"},e),x(u.b,{fontSize:1,align:"left",color:"text"},n)))))}},yKDJ:function(t,e){t.exports=function(t){var e;if("SELECT"===t.nodeName)t.focus(),e=t.value;else if("INPUT"===t.nodeName||"TEXTAREA"===t.nodeName){var n=t.hasAttribute("readonly");n||t.setAttribute("readonly",""),t.select(),t.setSelectionRange(0,t.value.length),n||t.removeAttribute("readonly"),e=t.value}else{t.hasAttribute("contenteditable")&&t.focus();var r=window.getSelection(),o=document.createRange();o.selectNodeContents(t),r.removeAllRanges(),r.addRange(o),e=r.toString()}return e}}},[["5jFM",0,3,1,2,4]]]);