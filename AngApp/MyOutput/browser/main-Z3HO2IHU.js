import{$ as Ny,$n as rj,$t as _y,Ar as zo$1,At as Wb,B as K1,C as Gv,Cn as iw,Cr as y,Dn as le$2,Dr as z$2,E as Hy,En as kC,Er as yt,Et as Vl$1,F as Jt$1,Fn as nb,Ft as XE,G as Lr,Gn as pt,Gt as Zm,H as Kg,Hn as oj,I as Ju,In as ne$2,It as Xg,J as Mm,Jn as qC,Jt as _$1,K as ME,Kt as Zr,L as Jw,Ln as nn$1,Lt as Xy,M as Jg,Mn as mt,Mr as zy,Mt as Wy,N as Jn$1,Nn as my,O as It$2,On as mC,Or as zd,Ot as Vr,Pt as XC,Q as Nt$1,Qt as _t,R as Jy,Rn as ns$1,Sn as ij,St as Uy,T as Hr,Tn as jy,Tr as yr$1,Tt as Vi$1,Un as pC,Ut as ZE,V as KE,Vn as og,Vt as Yy,W as Le$3,Wn as pp,Wt as Zg,X as My,Xt as _i$1,Y as Mo$1,Yn as qe$1,Yt as _d,Z as Ni$1,Zt as _l$1,_ as EC,_r as vt,_t as St,a as Al$1,an as bl$1,at as Pl$1,b as FE,bn as gy,br as xg,bt as Tt$1,cn as ca$1,cr as tv,ct as QI,d as By,dn as eC,dr as uv,dt as Qg,er as rs$1,et as Oe$2,f as C,fn as eI,fr as uw,ft as Qy,g as DC,gn as ev,gr as vh,gt as Sg,h as Cs,hr as ve,ht as Rr,i as $y,in as bd,ir as st$1,it as Pe$2,j as JE,jn as mc$1,jt as Wv,k as J$2,kn as mD,kr as zn$1,kt as Vy,l as Bv,ln as cb,lr as uC,lt as Qc$1,m as Cr,mn as ej,mt as Ra$1,nn as am,nr as sj,nt as Ou,or as tj,ot as Py,p as CT,pn as ee$1,pr as vC,pt as RI,q as Mg,r as $v,rn as aw,rt as PC,s as Bg,sn as cE,st as Q$2,t as $g,tr as se$2,tt as Ol$1,u as Bw,un as cj,ur as ur$1,v as EI,vn as gC,vr as x,vt as Tg,w as Hg,wn as jd,wr as ym,x as Fn$1,xn as ht$1,xr as xl$1,xt as Ug,y as Ee$1,yn as gt$1,yr as xI,yt as Ts$1,z as K$1,zn as nt$2,zt as Yc$1}from"./chunk-Ccz3sO_E.js";import{a as m,i as k,o as q$1,r as Sn$2,t as An$1}from"./chunk-Bz9LNiV4.js";import{a as Ge$1,c as Xr,d as ce$2,i as Fe$2,l as Yt$1,n as Ce$3,o as O$1,p as ge$1,r as F,s as Ot$1,t as Br,u as _t$1}from"./chunk-nsZxSRIx.js";var i=class e{_document=y(pt);_colorScheme=mt(`light`);colorScheme=nt$2(()=>this._colorScheme());constructor(){vh(()=>{let o=localStorage.getItem(`colorScheme`);o&&(o===`dark`?(this._colorScheme.set(`dark`),this._document.body.classList.add(`dark-mode`)):(this._colorScheme.set(`light`),this._document.body.classList.remove(`dark-mode`)))})}toggleColorScheme(){this._colorScheme()===`dark`?(this._colorScheme.set(`light`),this._document.body.classList.remove(`dark-mode`)):(this._colorScheme.set(`dark`),this._document.body.classList.add(`dark-mode`)),localStorage.setItem(`colorScheme`,this.colorScheme())}static ɵfac=function(l){return new(l||e)};static ɵprov=Vr({token:e,factory:e.ɵfac})};var Ie$2=class{_doc;constructor(a){this._doc=a}manager};var vn$1=(()=>{class n extends Ie$2{constructor(t){super(t)}supports(t){return!0}addEventListener(t,e,r,o){return t.addEventListener(e,r,o),()=>this.removeEventListener(t,e,r,o)}removeEventListener(t,e,r,o){return t.removeEventListener(e,r,o)}static ɵfac=function(e){return new(e||n)(Le$3(pt))};static ɵprov=se$2({token:n,factory:n.ɵfac})}return n})();var Sn$1=new _$1(``);var Ma=(()=>{class n{_zone;_plugins;_eventNameToPlugin=/* @__PURE__ */ new Map;constructor(t,e){this._zone=e,t.forEach(i=>{i.manager=this});let r=t.filter(i=>!(i instanceof vn$1));this._plugins=r.slice().reverse();let o=t.find(i=>i instanceof vn$1);o&&this._plugins.push(o)}addEventListener(t,e,r,o){return this._findPluginFor(e).addEventListener(t,e,r,o)}getZone(){return this._zone}_findPluginFor(t){let e=this._eventNameToPlugin.get(t);if(e)return e;if(e=this._plugins.find(o=>o.supports(t)),!e)throw new C(-5101,!1);return this._eventNameToPlugin.set(t,e),e}static ɵfac=function(e){return new(e||n)(Le$3(Sn$1),Le$3(Pe$2))};static ɵprov=se$2({token:n,factory:n.ɵfac})}return n})();var Ia=`ng-app-id`;function mo(n){for(let a of n)a.remove()}function po(n,a){let t=a.createElement(`style`);return t.textContent=n,t}function os(n,a,t,e){let r=n.head?.querySelectorAll(`style[${Ia}="${a}"],link[${Ia}="${a}"]`);if(!r||r.length===0)return!1;for(let o of r)o.removeAttribute(Ia),o instanceof HTMLLinkElement?e.set(o.href.slice(o.href.lastIndexOf(`/`)+1),{usage:0,elements:[o]}):o.textContent&&t.set(o.textContent,{usage:0,elements:[o]});return!0}function Ra(n,a){let t=a.createElement(`link`);return t.setAttribute(`rel`,`stylesheet`),t.setAttribute(`href`,n),t}var Aa=(()=>{class n{doc;appId;nonce;inline=/* @__PURE__ */ new Map;external=/* @__PURE__ */ new Map;hosts=/* @__PURE__ */ new Set;constructor(t,e,r,o={}){this.doc=t,this.appId=e,this.nonce=r,os(t,e,this.inline,this.external)&&this.hosts.add(t.head)}addStyles(t,e){for(let r of t)this.addUsage(r,this.inline,po);e?.forEach(r=>this.addUsage(r,this.external,Ra))}removeStyles(t,e){for(let r of t)this.removeUsage(r,this.inline);e?.forEach(r=>this.removeUsage(r,this.external))}addUsage(t,e,r){let o=e.get(t);o?o.usage++:e.set(t,{usage:1,elements:[...this.hosts].map(i=>this.addElement(i,r(t,this.doc)))})}removeUsage(t,e){let r=e.get(t);r&&(r.usage--,r.usage<=0&&(mo(r.elements),e.delete(t)))}ngOnDestroy(){for(let[,{elements:t}]of[...this.inline,...this.external])mo(t);this.hosts.clear()}addHost(t){if(!this.hosts.has(t)){this.hosts.add(t);for(let[e,{elements:r}]of this.inline)r.push(this.addElement(t,po(e,this.doc)));for(let[e,{elements:r}]of this.external)r.push(this.addElement(t,Ra(e,this.doc)))}}removeHost(t){this.hosts.delete(t);for(let e of[...this.inline.values(),...this.external.values()]){let r=[];for(let o of e.elements)o.parentNode===t?o.remove():r.push(o);e.elements=r}}addElement(t,e){return this.nonce&&e.setAttribute(`nonce`,this.nonce),t.appendChild(e)}static ɵfac=function(e){return new(e||n)(Le$3(pt),Le$3(yt),Le$3(Gv,8),Le$3($v))};static ɵprov=se$2({token:n,factory:n.ɵfac})}return n})();var Ca={svg:`http://www.w3.org/2000/svg`,xhtml:`http://www.w3.org/1999/xhtml`,xlink:`http://www.w3.org/1999/xlink`,xml:`http://www.w3.org/XML/1998/namespace`,xmlns:`http://www.w3.org/2000/xmlns/`,math:`http://www.w3.org/1998/Math/MathML`};var Ta=/%COMP%/g;var ho=`%COMP%`;var is=`_nghost-${ho}`;var ss=`_ngcontent-${ho}`;var cs=!0;var ls=new _$1(``,{factory:()=>cs});var ds=new _$1(``);function us(n){return ss.replace(Ta,n)}function ms(n){return is.replace(Ta,n)}function bo(n,a){return a.map(t=>t.replace(Ta,n))}var Da=(()=>{class n{eventManager;sharedStylesHost;appId;removeStylesOnCompDestroy;doc;ngZone;nonce;tracingService;rendererByCompId=/* @__PURE__ */ new Map;defaultRenderer;cssVarNamespace;constructor(t,e,r,o,i,c,s=null,d=null,u=null){this.eventManager=t,this.sharedStylesHost=e,this.appId=r,this.removeStylesOnCompDestroy=o,this.doc=i,this.ngZone=c,this.nonce=s,this.tracingService=d,this.cssVarNamespace=u??``,this.defaultRenderer=new Ce$2(t,i,c,this.tracingService,this.cssVarNamespace)}createRenderer(t,e){if(!t||!e)return this.defaultRenderer;let r=this.getOrCreateRenderer(t,e);return r instanceof _n$1?r.applyToHost(t):r instanceof Re$1&&r.applyStyles(),r}getOrCreateRenderer(t,e){let r=this.rendererByCompId,o=r.get(e.id);if(!o){let i=this.doc,c=this.ngZone,s=this.eventManager,d=this.sharedStylesHost,u=this.removeStylesOnCompDestroy,f=this.tracingService;switch(e.encapsulation){case Jt$1.Emulated:o=new _n$1(s,d,e,this.appId,u,i,c,f,this.cssVarNamespace);break;case Jt$1.ShadowDom:return new yn$1(s,t,e,i,c,this.nonce,f,this.cssVarNamespace,d);case Jt$1.ExperimentalIsolatedShadowDom:return new yn$1(s,t,e,i,c,this.nonce,f,this.cssVarNamespace);default:o=new Re$1(s,d,e,u,i,c,f,this.cssVarNamespace)}r.set(e.id,o)}return o}ngOnDestroy(){this.rendererByCompId.clear()}componentReplaced(t){this.rendererByCompId.delete(t)}static ɵfac=function(e){return new(e||n)(Le$3(Ma),Le$3(og),Le$3(yt),Le$3(ls),Le$3(pt),Le$3(Pe$2),Le$3(Gv),Le$3(nn$1,8),Le$3(ds,8))};static ɵprov=se$2({token:n,factory:n.ɵfac})}return n})();var Ce$2=class{eventManager;doc;ngZone;tracingService;cssVarNamespace;data=Object.create(null);throwOnSyntheticProps=!0;constructor(a,t,e,r,o=``){this.eventManager=a,this.doc=t,this.ngZone=e,this.tracingService=r,this.cssVarNamespace=o}destroy(){}destroyNode=null;createElement(a,t){return t?this.doc.createElementNS(Ca[t]||t,a):this.doc.createElement(a)}createComment(a){return this.doc.createComment(a)}createText(a){return this.doc.createTextNode(a)}appendChild(a,t){(fo(a)?a.content:a).appendChild(t)}insertBefore(a,t,e){if(a){let r=fo(a)?a.content:a;if(e!=null&&e.parentNode!==r)throw new C(-5106,!1);r.insertBefore(t,e)}}removeChild(a,t){t.remove()}selectRootElement(a,t){let e=typeof a==`string`?this.doc.querySelector(a):a;if(!e)throw new C(-5104,!1);return t||(e.textContent=``),e}parentNode(a){return a.parentNode}nextSibling(a){return a.nextSibling}setAttribute(a,t,e,r){if(r){t=r+`:`+t;let o=Ca[r];o?a.setAttributeNS(o,t,e):a.setAttribute(t,e)}else a.setAttribute(t,e)}removeAttribute(a,t,e){if(e){let r=Ca[e];r?a.removeAttributeNS(r,t):a.removeAttribute(`${e}:${t}`)}else a.removeAttribute(t)}addClass(a,t){a.classList.add(t)}removeClass(a,t){a.classList.remove(t)}setStyle(a,t,e,r){let o=t.startsWith(`--`);o&&(t=t.replace(`%NS%`,this.cssVarNamespace)),o||r&(Ni$1.DashCase|Ni$1.Important)?a.style.setProperty(t,e,r&Ni$1.Important?`important`:``):a.style[t]=e}removeStyle(a,t,e){let r=t.startsWith(`--`);r&&(t=t.replace(`%NS%`,this.cssVarNamespace)),r||e&Ni$1.DashCase?a.style.removeProperty(t):a.style[t]=``}setProperty(a,t,e){a!=null&&(a[t]=e)}setValue(a,t){a.nodeValue=t}listen(a,t,e,r){if(typeof a==`string`&&(a=ce$2().getGlobalEventTarget(this.doc,a),!a))throw new C(-5102,!1);let o=this.decoratePreventDefault(e);return this.tracingService?.wrapEventListener&&(o=this.tracingService.wrapEventListener(a,t,o)),this.eventManager.addEventListener(a,t,o,r)}decoratePreventDefault(a){return t=>{if(t===`__ngUnwrap__`)return a;a(t)===!1&&t.preventDefault()}}};function fo(n){return n.tagName===`TEMPLATE`&&n.content!==void 0}var yn$1=class extends Ce$2{hostEl;sharedStylesHost;shadowRoot;constructor(a,t,e,r,o,i,c,s,d){super(a,r,o,c,s),this.hostEl=t,this.sharedStylesHost=d,this.shadowRoot=t.attachShadow({mode:`open`}),this.sharedStylesHost&&this.sharedStylesHost.addHost(this.shadowRoot);let u=e.styles;u=bo(e.id,u).map(p=>p.replace(/%NS%/g,s));for(let p of u){let w=document.createElement(`style`);i&&w.setAttribute(`nonce`,i),w.textContent=p,this.shadowRoot.appendChild(w)}let f=e.getExternalStyles?.();if(f)for(let p of f){let w=Ra(p,r);i&&w.setAttribute(`nonce`,i),this.shadowRoot.appendChild(w)}}nodeOrShadowRoot(a){return a===this.hostEl?this.shadowRoot:a}appendChild(a,t){return super.appendChild(this.nodeOrShadowRoot(a),t)}insertBefore(a,t,e){return super.insertBefore(this.nodeOrShadowRoot(a),t,e)}removeChild(a,t){return super.removeChild(null,t)}parentNode(a){return this.nodeOrShadowRoot(super.parentNode(this.nodeOrShadowRoot(a)))}destroy(){this.sharedStylesHost&&this.sharedStylesHost.removeHost(this.shadowRoot)}};var Re$1=class extends Ce$2{sharedStylesHost;removeStylesOnCompDestroy;styles;styleUrls;constructor(a,t,e,r,o,i,c,s,d){super(a,o,i,c,s),this.sharedStylesHost=t,this.removeStylesOnCompDestroy=r;let u=e.styles,f=d?bo(d,u):u;this.styles=f.map(p=>p.replace(/%NS%/g,s)),this.styleUrls=e.getExternalStyles?.(d)}applyStyles(){this.sharedStylesHost.addStyles(this.styles,this.styleUrls)}destroy(){this.removeStylesOnCompDestroy&&QI.size===0&&this.sharedStylesHost.removeStyles(this.styles,this.styleUrls)}};var _n$1=class extends Re$1{contentAttr;hostAttr;constructor(a,t,e,r,o,i,c,s,d){let u=r+`-`+e.id;super(a,t,e,o,i,c,s,d,u),this.contentAttr=us(u),this.hostAttr=ms(u)}applyToHost(a){this.applyStyles(),this.setAttribute(a,this.hostAttr,``)}createElement(a,t){let e=super.createElement(a,t);return super.setAttribute(e,this.contentAttr,``),e}};var wn$1=class n extends Fe$2{supportsDOMEvents=!0;static makeCurrent(){Yt$1(new n)}onAndCancel(a,t,e,r){return a.addEventListener(t,e,r),()=>{a.removeEventListener(t,e,r)}}dispatchEvent(a,t){a.dispatchEvent(t)}remove(a){a.remove()}createElement(a,t){return t=t||this.getDefaultDocument(),t.createElement(a)}createHtmlDocument(){return document.implementation.createHTMLDocument(`fakeTitle`)}getDefaultDocument(){return document}isElementNode(a){return a.nodeType===Node.ELEMENT_NODE}isShadowRoot(a){return a instanceof DocumentFragment}getGlobalEventTarget(a,t){return t===`window`?window:t===`document`?a:t===`body`?a.body:null}getBaseHref(a){let t=fs();return t==null?null:hs(t)}resetBaseElement(){Me$1=null}getUserAgent(){return window.navigator.userAgent}getCookie(a){return Ce$3(document.cookie,a)}};var Me$1=null;function fs(){return Me$1=Me$1||document.head.querySelector(`base`),Me$1?Me$1.getAttribute(`href`):null}function hs(n){return new URL(n,document.baseURI).pathname}var go=[`alt`,`control`,`meta`,`shift`];var bs={"\b":`Backspace`,"	":`Tab`,"":`Delete`,"\x1B":`Escape`,Del:`Delete`,Esc:`Escape`,Left:`ArrowLeft`,Right:`ArrowRight`,Up:`ArrowUp`,Down:`ArrowDown`,Menu:`ContextMenu`,Scroll:`ScrollLock`,Win:`OS`};var gs={alt:n=>n.altKey,control:n=>n.ctrlKey,meta:n=>n.metaKey,shift:n=>n.shiftKey};var vo=(()=>{class n extends Ie$2{constructor(t){super(t)}supports(t){return n.parseEventName(t)!=null}addEventListener(t,e,r,o){let i=n.parseEventName(e),c=n.eventCallback(i.fullKey,r,this.manager.getZone());return this.manager.getZone().runOutsideAngular(()=>ce$2().onAndCancel(t,i.domEventName,c,o))}static parseEventName(t){let e=t.toLowerCase().split(`.`),r=e.shift();if(e.length===0||!(r===`keydown`||r===`keyup`))return null;let o=n._normalizeKey(e.pop()),i=``,c=e.indexOf(`code`);if(c>-1&&(e.splice(c,1),i=`code.`),go.forEach(d=>{let u=e.indexOf(d);u>-1&&(e.splice(u,1),i+=d+`.`)}),i+=o,e.length!=0||o.length===0)return null;let s={};return s.domEventName=r,s.fullKey=i,s}static matchEventFullKeyCode(t,e){let r=bs[t.key]||t.key,o=``;return e.indexOf(`code.`)>-1&&(r=t.code,o=`code.`),r==null||!r?!1:(r=r.toLowerCase(),r===` `?r=`space`:r===`.`&&(r=`dot`),go.forEach(i=>{if(i!==r){let c=gs[i];c(t)&&(o+=i+`.`)}}),o+=r,o===e)}static eventCallback(t,e,r){return o=>{n.matchEventFullKeyCode(o,t)&&r.runGuarded(()=>e(o))}}static _normalizeKey(t){return t===`esc`?`escape`:t}static ɵfac=function(e){return new(e||n)(Le$3(pt))};static ɵprov=se$2({token:n,factory:n.ɵfac})}return n})();async function vs(n,a,t){let e=z$2({rootComponent:n},ys(a,t));return oj(e)}function ys(n,a){return{platformRef:a?.platformRef,appProviders:[...xs,...n?.providers??[]],platformProviders:Es}}function _s(){wn$1.makeCurrent()}function Ss(){return new st$1}function ws(){return FE(document),document}var Es=[{provide:$v,useValue:q$1},{provide:zd,useValue:_s,multi:!0},{provide:pt,useFactory:ws}];var xs=[{provide:ca$1,useValue:`root`},{provide:st$1,useFactory:Ss},{provide:Sn$1,useClass:vn$1,multi:!0},{provide:Sn$1,useClass:vo,multi:!0},Da,{provide:og,useClass:Aa},{provide:Aa,useExisting:og},Ma,{provide:Lr,useExisting:Da},[]];var yo=(()=>{class n{_doc;constructor(t){this._doc=t}getTitle(){return this._doc.title}setTitle(t){this._doc.title=t||``}static ɵfac=function(e){return new(e||n)(Le$3(pt))};static ɵprov=se$2({token:n,factory:n.ɵfac,providedIn:`root`})}return n})();var En=(function(n){return n[n.NoHttpTransferCache=0]=`NoHttpTransferCache`,n[n.HttpTransferCacheOptions=1]=`HttpTransferCacheOptions`,n[n.I18nSupport=2]=`I18nSupport`,n[n.EventReplay=3]=`EventReplay`,n[n.IncrementalHydration=4]=`IncrementalHydration`,n[n.NoIncrementalHydration=5]=`NoIncrementalHydration`,n})(En||{});function Zd(...n){let a=[],t=/* @__PURE__ */ new Set;for(let{ɵproviders:r,ɵkind:o}of n)t.add(o),r.length&&a.push(r);let e=t.has(En.HttpTransferCacheOptions);return yr$1([[],[],ej(),t.has(En.NoHttpTransferCache)||e?[]:Br({}),t.has(En.NoIncrementalHydration)?[]:tj(),a,{provide:Mm,useValue:{isActive:!0}},{provide:Zr,multi:!0,useFactory:()=>{let r=y(It$2),o=y(Mm);return()=>{r.whenStable().then(()=>{o.isActive=!1})}}}])}var Ae$1=(()=>{class n{static ɵfac=function(e){return new(e||n)};static ɵprov=se$2({token:n,factory:function(e){let r=null;return e?r=new(e||n):r=Le$3(Is),r},providedIn:`root`})}return n})();var Is=(()=>{class n extends Ae$1{_doc=y(pt);sanitize(t,e){if(e==null)return null;switch(t){case J$2.NONE:return e;case J$2.HTML:return Qc$1(e,`HTML`)?vt(e):EI(this._doc,String(e)).toString();case J$2.STYLE:return Qc$1(e,`Style`)?vt(e):e;case J$2.SCRIPT:if(Qc$1(e,`Script`))return vt(e);throw new C(5200,!1);case J$2.URL:return Qc$1(e,`URL`)?vt(e):Yc$1(String(e));case J$2.RESOURCE_URL:if(Qc$1(e,`ResourceURL`))return vt(e);throw new C(-5201,!1);default:throw new C(5202,!1)}}bypassSecurityTrustHtml(t){return ZE(t)}bypassSecurityTrustStyle(t){return KE(t)}bypassSecurityTrustScript(t){return JE(t)}bypassSecurityTrustUrl(t){return XE(t)}bypassSecurityTrustResourceUrl(t){return eI(t)}static ɵfac=function(e){return new(e||n)};static ɵprov=Vr({token:n,factory:n.ɵfac})}return n})();var h=`primary`;var Ve$1=Symbol(`RouteTitle`);var Fa=class{params;constructor(a){this.params=a||{}}has(a){return Object.hasOwn(this.params,a)}get(a){if(this.has(a)){let t=this.params[a];return Array.isArray(t)?t[0]:t}return null}getAll(a){if(this.has(a)){let t=this.params[a];return Array.isArray(t)?t:[t]}return[]}get keys(){return Object.keys(this.params)}};function Ft$1(n){return new Fa(n)}function ka(n,a,t){for(let e=0;e<n.length;e++){let r=n[e],o=a[e];if(r[0]===`:`)t[r.substring(1)]=o;else if(r!==o.path)return!1}return!0}function Mo(n,a,t){let e=t.path.split(`/`),r=e.indexOf(`**`);if(r===-1){if(e.length>n.length||t.pathMatch===`full`&&(a.hasChildren()||e.length<n.length))return null;let s={},d=n.slice(0,e.length);return ka(e,d,s)?{consumed:d,posParams:s}:null}if(r!==e.lastIndexOf(`**`))return null;let o=e.slice(0,r),i=e.slice(r+1);if(o.length+i.length>n.length||t.pathMatch===`full`&&a.hasChildren()&&t.path!==`**`)return null;let c={};return!ka(o,n.slice(0,o.length),c)||!ka(i,n.slice(n.length-i.length),c)?null:{consumed:n,posParams:c}}function Mn$1(n){return new Promise((a,t)=>{n.pipe(Qy()).subscribe({next:e=>a(e),error:e=>t(e)})})}function As(n,a){if(n.length!==a.length)return!1;for(let t=0;t<n.length;++t)if(!ct(n[t],a[t]))return!1;return!0}function ct(n,a){let t=n?ja(n):void 0,e=a?ja(a):void 0;if(!t||!e||t.length!=e.length)return!1;let r;for(let o=0;o<t.length;o++)if(r=t[o],!Ao(n[r],a[r]))return!1;return!0}function ja(n){return[...Object.keys(n),...Object.getOwnPropertySymbols(n)]}function Ao(n,a){if(Array.isArray(n)&&Array.isArray(a)){if(n.length!==a.length)return!1;let t=[...n].sort(),e=[...a].sort();return t.every((r,o)=>e[o]===r)}else return n===a}function Ts(n){return n.length>0?n[n.length-1]:null}function qe(n){return Ny(n)?n:bl$1(n)?Oe$2(Promise.resolve(n)):_y(n)}function To(n){return Ny(n)?Mn$1(n):Promise.resolve(n)}var Ds={exact:Oo,subset:Po};var Do={exact:ks,subset:Os,ignored:()=>!0};var ko={paths:`exact`,fragment:`ignored`,matrixParams:`ignored`,queryParams:`exact`};var An={paths:`subset`,fragment:`ignored`,matrixParams:`ignored`,queryParams:`subset`};function za(n,a,t){let e=z$2(z$2({},An),t||{});return Ds[e.paths](n.root,a.root,e.matrixParams)&&Do[e.queryParams](n.queryParams,a.queryParams)&&!(e.fragment===`exact`&&n.fragment!==a.fragment)}function ks(n,a){return ct(n,a)}function Oo(n,a,t){if(!Ut(n.segments,a.segments)||!In(n.segments,a.segments,t)||n.numberOfChildren!==a.numberOfChildren)return!1;for(let e in a.children)if(!n.children[e]||!Oo(n.children[e],a.children[e],t))return!1;return!0}function Os(n,a){return Object.keys(a).length<=Object.keys(n).length&&Object.keys(a).every(t=>Ao(n[t],a[t]))}function Po(n,a,t){return Lo(n,a,a.segments,t)}function Lo(n,a,t,e){if(n.segments.length>t.length){let r=n.segments.slice(0,t.length);return!(!Ut(r,t)||a.hasChildren()||!In(r,t,e))}else if(n.segments.length===t.length){if(!Ut(n.segments,t)||!In(n.segments,t,e))return!1;for(let r in a.children)if(!n.children[r]||!Po(n.children[r],a.children[r],e))return!1;return!0}else{let r=t.slice(0,n.segments.length),o=t.slice(n.segments.length);return!Ut(n.segments,r)||!In(n.segments,r,e)||!n.children[h]?!1:Lo(n.children[h],a,o,e)}}function In(n,a,t){return a.every((e,r)=>Do[t](n[r].parameters,e.parameters))}var W=class{root;queryParams;fragment;_queryParamMap;constructor(a=new _([],{}),t={},e=null){this.root=a,this.queryParams=t,this.fragment=e}get queryParamMap(){return this._queryParamMap??=Ft$1(this.queryParams),this._queryParamMap}toString(){return Fs.serialize(this)}};var _=class{segments;children;parent=null;constructor(a,t){this.segments=a,this.children=t,Object.values(t).forEach(e=>e.parent=this)}hasChildren(){return this.numberOfChildren>0}get numberOfChildren(){return Object.keys(this.children).length}toString(){return Cn$1(this)}};var xt$1=class{path;parameters;_parameterMap;constructor(a,t){this.path=a,this.parameters=t}get parameterMap(){return this._parameterMap??=Ft$1(this.parameters),this._parameterMap}toString(){return Fo(this)}};function Ps(n,a){return Ut(n,a)&&n.every((t,e)=>ct(t.parameters,a[e].parameters))}function Ut(n,a){return n.length!==a.length?!1:n.every((t,e)=>t.path===a[e].path)}function Ls(n,a){let t=[];return Object.entries(n.children).forEach(([e,r])=>{e===h&&(t=t.concat(a(r,e)))}),Object.entries(n.children).forEach(([e,r])=>{e!==h&&(t=t.concat(a(r,e)))}),t}var ce$1=(()=>{class n{static ɵfac=function(e){return new(e||n)};static ɵprov=Vr({token:n,factory:()=>new Nt})}return n})();var Nt=class{parse(a){let t=new Ha(a);return new W(t.parseRootSegment(),t.parseQueryParams(),t.parseFragment())}serialize(a){let t=`/${te(a.root,!0)}`;Us(t)&&(t=`/`);let e=Hs(a.queryParams),r=typeof a.fragment==`string`?`#${zs(a.fragment)}`:``;return`${t}${e}${r}`}};var So=`http://fake`;function Us(n){try{let a=new URL(n,So);return a.origin!==So||a.pathname.startsWith(`//`)}catch{return!0}}var Fs=new Nt;function Cn$1(n){return n.segments.map(a=>Fo(a)).join(`/`)}function te(n,a){if(!n.hasChildren())return Cn$1(n);if(a){let t=n.children[h]?te(n.children[h],!1):``,e=[];return Object.entries(n.children).forEach(([r,o])=>{r!==h&&e.push(`${r}:${te(o,!1)}`)}),e.length>0?`${t}(${e.join(`//`)})`:t}else{if(Object.keys(n.children).length===1&&n.children[h]!=null)return`${Cn$1(n)}/${te(n.children[h],!1)}`;let t=Ls(n,(e,r)=>r===h?[js(te(n.children[h],!1))]:[`${r}:${te(e,!1)}`]);return`${Cn$1(n)}/(${t.join(`//`)})`}}function js(n){return n.replace(jo,a=>a.replace(/:/g,`%3A`))}function Uo(n){return encodeURIComponent(n).replace(/%40/g,`@`).replace(/%3A/gi,`:`).replace(/%24/g,`$`).replace(/%2C/gi,`,`)}function xn$1(n){return Uo(n).replace(/%3B/gi,`;`)}function zs(n){return encodeURI(n)}function Ba(n){return Uo(n).replace(/\(/g,`%28`).replace(/\)/g,`%29`).replace(/%26/gi,`&`)}function Rn(n){return decodeURIComponent(n)}function wo(n){return Rn(n.replace(/\+/g,`%20`))}function Fo(n){return`${Ba(n.path)}${Bs(n.parameters)}`}function Bs(n){return Object.entries(n).map(([a,t])=>`;${Ba(a)}=${Ba(t)}`).join(``)}function Hs(n){let a=Object.entries(n).map(([t,e])=>Array.isArray(e)?e.map(r=>`${xn$1(t)}=${xn$1(r)}`).join(`&`):`${xn$1(t)}=${xn$1(e)}`).filter(t=>t);return a.length?`?${a.join(`&`)}`:``}var Oa=1073741824;function Tn(n,a,t){Number(a)>=32&&!Object.hasOwn(n,Oa)&&(n[Oa]=t,delete n[Oa]),n[a]=t}var jo=/^[^\/()?;#]+/;function Pa(n){let a=n.match(jo);return a?a[0]:``}var $s=/^[^\/()?;=#]+/;function Vs(n){let a=n.match($s);return a?a[0]:``}var qs=/^[^=?&#]+/;function Ws(n){let a=n.match(qs);return a?a[0]:``}var Gs=/^[^&#]+/;function Ks(n){let a=n.match(Gs);return a?a[0]:``}var Ha=class{url;remaining;constructor(a){this.url=a,this.remaining=a}parseRootSegment(){for(;this.consumeOptional(`/`););return this.remaining===``||this.peekStartsWith(`?`)||this.peekStartsWith(`#`)?new _([],{}):new _([],this.parseChildren())}parseQueryParams(){let a={};if(this.consumeOptional(`?`))do this.parseQueryParam(a);while(this.consumeOptional(`&`));return a}parseFragment(){return this.consumeOptional(`#`)?decodeURIComponent(this.remaining):null}parseChildren(a=0){if(a>50)throw new C(4010,!1);if(this.remaining===``)return{};this.consumeOptional(`/`);let t=[];for(this.peekStartsWith(`(`)||t.push(this.parseSegment());this.peekStartsWith(`/`)&&!this.peekStartsWith(`//`)&&!this.peekStartsWith(`/(`);)this.capture(`/`),t.push(this.parseSegment());let e={};this.peekStartsWith(`/(`)&&(this.capture(`/`),e=this.parseParens(!0,a));let r={};return this.peekStartsWith(`(`)&&(r=this.parseParens(!1,a)),(t.length>0||Object.keys(e).length>0)&&(r[h]=new _(t,e)),r}parseSegment(){let a=Pa(this.remaining);if(a===``&&this.peekStartsWith(`;`))throw new C(4009,!1);return this.capture(a),new xt$1(Rn(a),this.parseMatrixParams())}parseMatrixParams(){let a={};for(;this.consumeOptional(`;`);)this.parseParam(a);return a}parseParam(a){let t=Vs(this.remaining);if(!t)return;this.capture(t);let e=``;if(this.consumeOptional(`=`)){let r=Pa(this.remaining);r&&(e=r,this.capture(e))}Tn(a,Rn(t),Rn(e))}parseQueryParam(a){let t=Ws(this.remaining);if(!t)return;this.capture(t);let e=``;if(this.consumeOptional(`=`)){let i=Ks(this.remaining);i&&(e=i,this.capture(e))}let r=wo(t),o=wo(e);if(Object.hasOwn(a,r)){let i=a[r];Array.isArray(i)||(i=[i],a[r]=i),i.push(o)}else a[r]=o}parseParens(a,t){let e=Object.create(null);for(this.capture(`(`);!this.consumeOptional(`)`)&&this.remaining.length>0;){let r=Pa(this.remaining),o=this.remaining[r.length];if(o!==`/`&&o!==`)`&&o!==`;`)throw new C(4010,!1);let i;r.indexOf(`:`)>-1?(i=r.slice(0,r.indexOf(`:`)),this.capture(i),this.capture(`:`)):a&&(i=h);let c=this.parseChildren(t+1),s=Object.keys(c).length===1&&c[h]?c[h]:new _([],c);Tn(e,i??h,s),this.consumeOptional(`//`)}return e}peekStartsWith(a){return this.remaining.startsWith(a)}consumeOptional(a){return this.peekStartsWith(a)?(this.remaining=this.remaining.substring(a.length),!0):!1}capture(a){if(!this.consumeOptional(a))throw new C(4011,!1)}};function zo(n){return n.segments.length>0?new _([],{[h]:n}):n}function Bo(n){let a=Object.create(null);for(let[e,r]of Object.entries(n.children)){let o=Bo(r);if(e===h&&o.segments.length===0&&o.hasChildren())for(let[i,c]of Object.entries(o.children))Tn(a,i,c);else(o.segments.length>0||o.hasChildren())&&Tn(a,e,o)}return Ys(new _(n.segments,a))}function Ys(n){if(n.numberOfChildren===1&&n.children[h]){let a=n.children[h];return new _(n.segments.concat(a.segments),a.children)}return n}function It$1(n){return n instanceof W}function Ho(n,a,t=null,e=null,r=new Nt){return Vo($o(n),a,t,e,r)}function $o(n){let a;function t(o){let i={};for(let s of o.children){let d=t(s);i[s.outlet]=d}let c=new _(o.url,i);return o===n&&(a=c),c}let r=zo(t(n.root));return a??r}function Vo(n,a,t,e,r){let o=n;for(;o.parent;)o=o.parent;if(a.length===0)return La(o,o,o,t,e,r);let i=Zs(a);if(i.toRoot())return La(o,o,new _([],{}),t,e,r);let c=Qs(i,o,n),s=c.processChildren?De$2(c.segmentGroup,c.index,i.commands):Wo(c.segmentGroup,c.index,i.commands);return La(o,c.segmentGroup,s,t,e,r)}function Dn(n){return typeof n==`object`&&n!=null&&!n.outlets&&!n.segmentPath}function Le$2(n){return typeof n==`object`&&n!=null&&n.outlets}function Eo(n,a,t){n||=`ɵ`;let e=new W;return e.queryParams={[n]:a},t.parse(t.serialize(e)).queryParams[n]}function La(n,a,t,e,r,o){let i={};for(let[d,u]of Object.entries(e??{}))u!=null&&(i[d]=Array.isArray(u)?u.map(f=>Eo(d,f,o)):Eo(d,u,o));let c;n===a?c=t:c=qo(n,a,t);return new W(zo(Bo(c)),i,r)}function qo(n,a,t){let e=Object.create(null);return Object.entries(n.children).forEach(([r,o])=>{o===a?e[r]=t:e[r]=qo(o,a,t)}),new _(n.segments,e)}var kn$1=class{isAbsolute;numberOfDoubleDots;commands;constructor(a,t,e){if(this.isAbsolute=a,this.numberOfDoubleDots=t,this.commands=e,a&&e.length>0&&Dn(e[0]))throw new C(4003,!1);let r=e.find(Le$2);if(r&&r!==Ts(e))throw new C(4004,!1)}toRoot(){return this.isAbsolute&&this.commands.length===1&&this.commands[0]==`/`}};function Zs(n){if(typeof n[0]==`string`&&n.length===1&&n[0]===`/`)return new kn$1(!0,0,n);let a=0,t=!1,e=n.reduce((r,o,i)=>{if(typeof o==`object`&&o!=null){if(o.outlets){let c={};return Object.entries(o.outlets).forEach(([s,d])=>{c[s]=typeof d==`string`?d.split(`/`):d}),[...r,{outlets:c}]}if(o.segmentPath)return[...r,o.segmentPath]}return typeof o!=`string`?[...r,o]:i===0?(o.split(`/`).forEach((c,s)=>{s==0&&c===`.`||(s==0&&c===``?t=!0:c===`..`?a++:c!=``&&r.push(c))}),r):[...r,o]},[]);return new kn$1(t,a,e)}var ne$1=class{segmentGroup;processChildren;index;constructor(a,t,e){this.segmentGroup=a,this.processChildren=t,this.index=e}};function Qs(n,a,t){if(n.isAbsolute)return new ne$1(a,!0,0);if(!t)return new ne$1(a,!1,NaN);if(t.parent===null)return new ne$1(t,!0,0);let e=Dn(n.commands[0])?0:1;return Xs(t,t.segments.length-1+e,n.numberOfDoubleDots)}function Xs(n,a,t){let e=n,r=a,o=t;for(;o>r;){if(o-=r,e=e.parent,!e)throw new C(4005,!1);r=e.segments.length}return new ne$1(e,!1,r-o)}function Js(n){return Le$2(n[0])?n[0].outlets:{[h]:n}}function Wo(n,a,t){if(n??=new _([],{}),n.segments.length===0&&n.hasChildren())return De$2(n,a,t);let e=tc(n,a,t),r=t.slice(e.commandIndex);if(e.match&&e.pathIndex<n.segments.length){let o=new _(n.segments.slice(0,e.pathIndex),{});return o.children[h]=new _(n.segments.slice(e.pathIndex),n.children),De$2(o,0,r)}else return e.match&&r.length===0?new _(n.segments,{}):e.match&&!n.hasChildren()?$a(n,a,t):e.match?De$2(n,0,r):$a(n,a,t)}function De$2(n,a,t){if(t.length===0)return new _(n.segments,{});{let e=Js(t),r=Object.create(null);if(Object.keys(e).some(o=>o!==h)&&n.children[h]&&n.numberOfChildren===1&&n.children[h].segments.length===0){let o=De$2(n.children[h],a,t);return new _(n.segments,o.children)}return Object.entries(e).forEach(([o,i])=>{typeof i==`string`&&(i=[i]),i!==null&&(r[o]=Wo(n.children[o],a,i))}),Object.entries(n.children).forEach(([o,i])=>{e[o]===void 0&&(r[o]=i)}),new _(n.segments,r)}}function tc(n,a,t){let e=0,r=a,o={match:!1,pathIndex:0,commandIndex:0};for(;r<n.segments.length;){if(e>=t.length)return o;let i=n.segments[r],c=t[e];if(Le$2(c))break;let s=`${c}`,d=e<t.length-1?t[e+1]:null;if(r>0&&s===void 0)break;if(s&&d&&typeof d==`object`&&d.outlets===void 0){if(!No(s,d,i))return o;e+=2}else{if(!No(s,{},i))return o;e++}r++}return{match:!0,pathIndex:r,commandIndex:e}}function $a(n,a,t){let e=n.segments.slice(0,a),r=0;for(;r<t.length;){let o=t[r];if(Le$2(o))return new _(e,ec(o.outlets));if(r===0&&Dn(t[0])){let s=n.segments[a];e.push(new xt$1(s.path,xo(t[0]))),r++;continue}let i=Le$2(o)?o.outlets[h]:`${o}`,c=r<t.length-1?t[r+1]:null;i&&c&&Dn(c)?(e.push(new xt$1(i,xo(c))),r+=2):(e.push(new xt$1(i,{})),r++)}return new _(e,{})}function ec(n){let a={};return Object.entries(n).forEach(([t,e])=>{typeof e==`string`&&(e=[e]),e!==null&&(a[t]=$a(new _([],{}),0,e))}),a}function xo(n){let a={};return Object.entries(n).forEach(([t,e])=>a[t]=`${e}`),a}function No(n,a,t){return n==t.path&&ct(a,t.parameters)}var On=class{rootInjector;outlet=null;route=null;children;attachRef=null;get injector(){return this.route?.snapshot._environmentInjector??this.rootInjector}constructor(a){this.rootInjector=a,this.children=new jt$1(this.rootInjector)}resetChildren(){this.children=new jt$1(this.rootInjector)}};var jt$1=(()=>{class n{rootInjector;contexts=/* @__PURE__ */ new Map;constructor(t){this.rootInjector=t}onChildOutletCreated(t,e){let r=this.getOrCreateContext(t);r.outlet=e,this.contexts.set(t,r)}onChildOutletDestroyed(t){let e=this.getContext(t);e&&(e.outlet=null,e.attachRef=null)}onOutletDeactivated(){let t=this.contexts;return this.contexts=/* @__PURE__ */ new Map,t}onOutletReAttached(t){this.contexts=t}getOrCreateContext(t){let e=this.getContext(t);return e||(e=new On(this.rootInjector),this.contexts.set(t,e)),e}getContext(t){return this.contexts.get(t)||null}static ɵfac=function(e){return new(e||n)(Le$3(ve))};static ɵprov=se$2({token:n,factory:n.ɵfac,providedIn:`root`})}return n})();var Pn=class{_root;constructor(a){this._root=a}get root(){return this._root.value}parent(a){let t=this.pathFromRoot(a);return t.length>1?t[t.length-2]:null}children(a){let t=Va(a,this._root);return t?t.children.map(e=>e.value):[]}firstChild(a){let t=Va(a,this._root);return t&&t.children.length>0?t.children[0].value:null}siblings(a){let t=qa(a,this._root);return t.length<2?[]:t[t.length-2].children.map(r=>r.value).filter(r=>r!==a)}pathFromRoot(a){return qa(a,this._root).map(t=>t.value)}};function Va(n,a){if(n===a.value)return a;for(let t of a.children){let e=Va(n,t);if(e)return e}return null}function qa(n,a){if(n===a.value)return[a];for(let t of a.children){let e=qa(n,t);if(e.length)return e.unshift(a),e}return[]}var z$1=class{value;children;constructor(a,t){this.value=a,this.children=t}toString(){return`TreeNode(${this.value})`}};function ee(n){let a={};return n&&n.children.forEach(t=>a[t.value.outlet]=t),a}var Ue=class extends Pn{snapshot;constructor(a,t){super(a),this.snapshot=t,er(this,a)}toString(){return this.snapshot.toString()}};function Go(n,a){let t=nc(n,a),e=new zn$1([new xt$1(``,{})]),r=new zn$1({}),o=new zn$1({}),s=new ft(e,r,new zn$1({}),new zn$1(``),o,h,n,t.root);return s.snapshot=t.root,new Ue(new z$1(s,[]),t)}function nc(n,a){return new Fe$1(``,new z$1(new re$1([],{},{},``,{},h,n,null,{},a),[]))}var ft=class{urlSubject;paramsSubject;queryParamsSubject;fragmentSubject;dataSubject;outlet;component;snapshot;_futureSnapshot;_routerState;_paramMap;_queryParamMap;title;url;params;queryParams;fragment;data;resources;_localInjector;pending;paramsSignal;queryParamsSignal;paramMapSignal;queryParamMapSignal;fragmentSignal;dataSignal;constructor(a,t,e,r,o,i,c,s){this.urlSubject=a,this.paramsSubject=t,this.queryParamsSubject=e,this.fragmentSubject=r,this.dataSubject=o,this.outlet=i,this.component=c,this._futureSnapshot=s,this.title=this.dataSubject?.pipe(Nt$1(d=>d[Ve$1]))??_y(void 0),this.url=a,this.params=t,this.queryParams=e,this.fragment=r,this.data=o}get routeConfig(){return this._futureSnapshot.routeConfig}get root(){return this._routerState.root}get parent(){return this._routerState.parent(this)}get firstChild(){return this._routerState.firstChild(this)}get children(){return this._routerState.children(this)}get pathFromRoot(){return this._routerState.pathFromRoot(this)}get paramMap(){return this._paramMap??=this.params.pipe(Nt$1(a=>Ft$1(a))),this._paramMap}get queryParamMap(){return this._queryParamMap??=this.queryParams.pipe(Nt$1(a=>Ft$1(a))),this._queryParamMap}toString(){return this.snapshot?this.snapshot.toString():`Future(${this._futureSnapshot})`}_setPending(a){this._futureSnapshot=a,this.pending?.set(!0)}};var ac=`always`;function tr(n,a,t){let e,{routeConfig:r}=n;return a!==null&&(t===`always`||r?.path===``||!a.component&&!a.routeConfig?.loadComponent)?e={params:Object.keys(n.params).length===0?a.params:Object.freeze(z$2(z$2({},a.params),n.params)),data:Object.freeze(z$2(z$2({},a.data),n.data)),resolve:z$2(z$2(z$2(z$2({},n.data),a.data),r?.data),n._resolvedData)}:e={params:Object.freeze(z$2({},n.params)),data:Object.freeze(z$2({},n.data)),resolve:z$2(z$2({},n.data),n._resolvedData??{})},r&&Yo(r)&&(e.resolve[Ve$1]=r.title),e}var re$1=class{url;params;queryParams;fragment;data;outlet;component;routeConfig;_resolve;_resolvedData;_routerState;_paramMap;_queryParamMap;_environmentInjector;resources;get title(){return this.data?.[Ve$1]}constructor(a,t,e,r,o,i,c,s,d,u){this.url=a,this.params=t,this.queryParams=e,this.fragment=r,this.data=o,this.outlet=i,this.component=c,this.routeConfig=s,this._resolve=d,this._environmentInjector=u}get root(){return this._routerState.root}get parent(){return this._routerState.parent(this)}get firstChild(){return this._routerState.firstChild(this)}get children(){return this._routerState.children(this)}get pathFromRoot(){return this._routerState.pathFromRoot(this)}get paramMap(){return this._paramMap??=Ft$1(this.params),this._paramMap}get queryParamMap(){return this._queryParamMap??=Ft$1(this.queryParams),this._queryParamMap}toString(){return`Route(url:'${this.url.map(e=>e.toString()).join(`/`)}', path:'${this.routeConfig?this.routeConfig.path:``}')`}};var Fe$1=class extends Pn{url;constructor(a,t){super(t),this.url=a,er(this,t)}toString(){return Ko(this._root)}};function er(n,a){a.value._routerState=n,a.children.forEach(t=>er(n,t))}function Ko(n){let a=n.children.length>0?` { ${n.children.map(Ko).join(`, `)} } `:``;return`${n.value}${a}`}function Ua(n){if(n.snapshot){let a=n.snapshot,t=n._futureSnapshot;n.snapshot=t,ct(a.queryParams,t.queryParams)||n.queryParamsSubject.next(t.queryParams),a.fragment!==t.fragment&&n.fragmentSubject.next(t.fragment),ct(a.params,t.params)||n.paramsSubject.next(t.params),As(a.url,t.url)||n.urlSubject.next(t.url),ct(a.data,t.data)||n.dataSubject.next(t.data)}else n.snapshot=n._futureSnapshot,n.dataSubject.next(n._futureSnapshot.data)}function Wa(n,a){let t=ct(n.params,a.params)&&Ps(n.url,a.url),e=!n.parent!=!a.parent;return t&&!e&&(!n.parent||Wa(n.parent,a.parent))}function Yo(n){return typeof n.title==`string`||n.title===null}var Zo=new _$1(``);var nr=(()=>{class n{activated=null;get activatedComponentRef(){return this.activated}_activatedRoute=null;name=h;activateEvents=new qe$1;deactivateEvents=new qe$1;attachEvents=new qe$1;detachEvents=new qe$1;routerOutletData=K1();parentContexts=y(jt$1);location=y(rs$1);changeDetector=y(rj);inputBinder=y(Kn,{optional:!0});supportsBindingToComponentInputs=!0;ngOnChanges(t){if(t.name){let{firstChange:e,previousValue:r}=t.name;if(e)return;this.isTrackedInParentContexts(r)&&(this.deactivate(),this.parentContexts.onChildOutletDestroyed(r)),this.initializeOutletWithName()}}ngOnDestroy(){this.isTrackedInParentContexts(this.name)&&this.parentContexts.onChildOutletDestroyed(this.name),this.inputBinder?.unsubscribeFromRouteData(this)}isTrackedInParentContexts(t){return this.parentContexts.getContext(t)?.outlet===this}ngOnInit(){this.initializeOutletWithName()}initializeOutletWithName(){if(this.parentContexts.onChildOutletCreated(this.name,this),this.activated)return;let t=this.parentContexts.getContext(this.name);t?.route&&(t.attachRef?this.attach(t.attachRef,t.route):this.activateWith(t.route,t.injector))}get isActivated(){return!!this.activated}get component(){if(!this.activated)throw new C(4012,!1);return this.activated.instance}get activatedRoute(){if(!this.activated)throw new C(4012,!1);return this._activatedRoute}get activatedRouteData(){return this._activatedRoute?this._activatedRoute.snapshot.data:{}}detach(){if(!this.activated)throw new C(4012,!1);this.location.detach();let t=this.activated;return this.activated=null,this._activatedRoute=null,this.detachEvents.emit(t.instance),t}attach(t,e){this.activated=t,this._activatedRoute=e,this.location.insert(t.hostView),this.inputBinder?.bindActivatedRouteToOutletComponent(this,this.location.injector),this.attachEvents.emit(t.instance)}deactivate(){if(this.activated){let t=this.component;this.inputBinder?.unsubscribeFromRouteData(this),this.activated.destroy(),this.activated=null,this._activatedRoute=null,this.deactivateEvents.emit(t)}}activateWith(t,e){if(this.isActivated)throw new C(4013,!1);this._activatedRoute=t;let r=this.location,i=t.snapshot.component,c=this.parentContexts.getOrCreateContext(this.name).children,s=new Ga(t,c,r.injector,this.routerOutletData);this.activated=r.createComponent(i,{index:r.length,injector:s,environmentInjector:e}),this.changeDetector.markForCheck(),this.inputBinder?.bindActivatedRouteToOutletComponent(this,this.location.injector),this.activateEvents.emit(this.activated.instance)}static ɵfac=function(e){return new(e||n)};static ɵdir=uw({type:n,selectors:[[`router-outlet`]],inputs:{name:`name`,routerOutletData:[1,`routerOutletData`]},outputs:{activateEvents:`activate`,deactivateEvents:`deactivate`,attachEvents:`attach`,detachEvents:`detach`},exportAs:[`outlet`],features:[cE]})}return n})();var Ga=class{route;childContexts;parent;outletData;constructor(a,t,e,r){this.route=a,this.childContexts=t,this.parent=e,this.outletData=r}get(a,t){return a===ft?this.route:a===jt$1?this.childContexts:a===Zo?this.outletData:this.parent.get(a,t)}};var Kn=new _$1(``);var ar=(()=>{class n{static ɵfac=function(e){return new(e||n)};static ɵcmp=iw({type:n,selectors:[[`ng-component`]],exportAs:[`emptyRouterOutlet`],decls:1,vars:0,template:function(e,r){e&1&&Ug(0,`router-outlet`)},dependencies:[nr],encapsulation:2,changeDetection:1})}return n})();function rr(n){let a=n.children&&n.children.map(rr),t=a?Q$2(z$2({},n),{children:a}):z$2({},n);return!t.component&&!t.loadComponent&&(a||t.loadChildren)&&t.outlet&&t.outlet!==h&&(t.component=ar),t}var ke$1=`imperative`;var T=(function(n){return n[n.NavigationStart=0]=`NavigationStart`,n[n.NavigationEnd=1]=`NavigationEnd`,n[n.NavigationCancel=2]=`NavigationCancel`,n[n.NavigationError=3]=`NavigationError`,n[n.RoutesRecognized=4]=`RoutesRecognized`,n[n.ResolveStart=5]=`ResolveStart`,n[n.ResolveEnd=6]=`ResolveEnd`,n[n.GuardsCheckStart=7]=`GuardsCheckStart`,n[n.GuardsCheckEnd=8]=`GuardsCheckEnd`,n[n.RouteConfigLoadStart=9]=`RouteConfigLoadStart`,n[n.RouteConfigLoadEnd=10]=`RouteConfigLoadEnd`,n[n.ChildActivationStart=11]=`ChildActivationStart`,n[n.ChildActivationEnd=12]=`ChildActivationEnd`,n[n.ActivationStart=13]=`ActivationStart`,n[n.ActivationEnd=14]=`ActivationEnd`,n[n.Scroll=15]=`Scroll`,n[n.NavigationSkipped=16]=`NavigationSkipped`,n})(T||{});var G=class{id;url;constructor(a,t){this.id=a,this.url=t}};var zt$1=class extends G{type=T.NavigationStart;navigationTrigger;restoredState;constructor(a,t,e=`imperative`,r=null){super(a,t),this.navigationTrigger=e,this.restoredState=r}toString(){return`NavigationStart(id: ${this.id}, url: '${this.url}')`}};var dt=class extends G{urlAfterRedirects;type=T.NavigationEnd;constructor(a,t,e){super(a,t),this.urlAfterRedirects=e}toString(){return`NavigationEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}')`}};var O=(function(n){return n[n.Redirect=0]=`Redirect`,n[n.SupersededByNewNavigation=1]=`SupersededByNewNavigation`,n[n.NoDataFromResolver=2]=`NoDataFromResolver`,n[n.GuardRejected=3]=`GuardRejected`,n[n.Aborted=4]=`Aborted`,n})(O||{});var je$1=(function(n){return n[n.IgnoredSameUrlNavigation=0]=`IgnoredSameUrlNavigation`,n[n.IgnoredByUrlHandlingStrategy=1]=`IgnoredByUrlHandlingStrategy`,n})(je$1||{});var Q$1=class extends G{reason;code;type=T.NavigationCancel;constructor(a,t,e,r){super(a,t),this.reason=e,this.code=r}toString(){return`NavigationCancel(id: ${this.id}, url: '${this.url}')`}};function Qo(n){return n instanceof Q$1&&(n.code===O.Redirect||n.code===O.SupersededByNewNavigation)}var ht=class extends G{reason;code;type=T.NavigationSkipped;constructor(a,t,e,r){super(a,t),this.reason=e,this.code=r}};var Bt=class extends G{error;target;type=T.NavigationError;constructor(a,t,e,r){super(a,t),this.error=e,this.target=r}toString(){return`NavigationError(id: ${this.id}, url: '${this.url}', error: ${this.error})`}};var ze$1=class extends G{urlAfterRedirects;state;type=T.RoutesRecognized;constructor(a,t,e,r){super(a,t),this.urlAfterRedirects=e,this.state=r}toString(){return`RoutesRecognized(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}};var Ln=class extends G{urlAfterRedirects;state;type=T.GuardsCheckStart;constructor(a,t,e,r){super(a,t),this.urlAfterRedirects=e,this.state=r}toString(){return`GuardsCheckStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}};var Un=class extends G{urlAfterRedirects;state;shouldActivate;type=T.GuardsCheckEnd;constructor(a,t,e,r,o){super(a,t),this.urlAfterRedirects=e,this.state=r,this.shouldActivate=o}toString(){return`GuardsCheckEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state}, shouldActivate: ${this.shouldActivate})`}};var Fn=class extends G{urlAfterRedirects;state;type=T.ResolveStart;constructor(a,t,e,r){super(a,t),this.urlAfterRedirects=e,this.state=r}toString(){return`ResolveStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}};var jn=class extends G{urlAfterRedirects;state;type=T.ResolveEnd;constructor(a,t,e,r){super(a,t),this.urlAfterRedirects=e,this.state=r}toString(){return`ResolveEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}};var zn=class{route;type=T.RouteConfigLoadStart;constructor(a){this.route=a}toString(){return`RouteConfigLoadStart(path: ${this.route.path})`}};var Bn=class{route;type=T.RouteConfigLoadEnd;constructor(a){this.route=a}toString(){return`RouteConfigLoadEnd(path: ${this.route.path})`}};var Hn=class{snapshot;type=T.ChildActivationStart;constructor(a){this.snapshot=a}toString(){return`ChildActivationStart(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||``}')`}};var $n=class{snapshot;type=T.ChildActivationEnd;constructor(a){this.snapshot=a}toString(){return`ChildActivationEnd(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||``}')`}};var Vn=class{snapshot;type=T.ActivationStart;constructor(a){this.snapshot=a}toString(){return`ActivationStart(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||``}')`}};var qn=class{snapshot;type=T.ActivationEnd;constructor(a){this.snapshot=a}toString(){return`ActivationEnd(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||``}')`}};var oe$1=class{};var Be=class{};var ie=class{url;navigationBehaviorOptions;constructor(a,t){this.url=a,this.navigationBehaviorOptions=t}};function rc(n){return!(n instanceof oe$1)&&!(n instanceof ie)&&!(n instanceof Be)}function oc(n,a,t){let e=/* @__PURE__ */ new Set;return{newlyCreatedRoutes:e,state:new Ue(He(n,a._root,t?t._root:void 0,e),a)}}function He(n,a,t,e){if(t&&n.shouldReuseRoute(a.value,t.value.snapshot)){let r=t.value;r._setPending(a.value);return new z$1(r,ic(n,a,t,e))}else{if(n.shouldAttach(a.value)){let i=n.retrieve(a.value);if(i!==null){let c=i.route;return c.value._setPending(a.value),c.children=a.children.map(s=>He(n,s,void 0,e)),c}}let r=sc(a.value);r._setPending(a.value),e.add(r);return new z$1(r,a.children.map(i=>He(n,i,void 0,e)))}}function ic(n,a,t,e){return a.children.map(r=>{for(let o of t.children)if(n.shouldReuseRoute(r.value,o.value.snapshot))return He(n,r,o,e);return He(n,r,void 0,e)})}function sc(n){return new ft(new zn$1(n.url),new zn$1(n.params),new zn$1(n.queryParams),new zn$1(n.fragment),new zn$1(n.data),n.outlet,n.component,n)}var Ct=class n extends Error{redirectTo;navigationBehaviorOptions;constructor(a,t){super(),this.redirectTo=a,this.navigationBehaviorOptions=t,Object.setPrototypeOf(this,n.prototype)}};var Xo=`ngNavigationCancelingError`;function Oe$1(n,a){let{redirectTo:t,navigationBehaviorOptions:e}=It$1(a)?{redirectTo:a,navigationBehaviorOptions:void 0}:a,r=Jo(!1,O.Redirect);return r.url=t,r.navigationBehaviorOptions=e,r}function Jo(n,a){let t=/* @__PURE__ */ new Error(`NavigationCancelingError: ${n||``}`);return t[Xo]=!0,t.cancellationCode=a,t}function cc(n){return ti(n)&&It$1(n.url)}function ti(n){return!!n&&n[Xo]}var Ka=class{routeReuseStrategy;futureState;currState;forwardEvent;inputBindingEnabled;constructor(a,t,e,r,o){this.routeReuseStrategy=a,this.futureState=t,this.currState=e,this.forwardEvent=r,this.inputBindingEnabled=o}activate(a){let t=this.futureState._root,e=this.currState?this.currState._root:null;this.deactivateChildRoutes(t,e,a),Ua(this.futureState.root),this.activateChildRoutes(t,e,a)}deactivateChildRoutes(a,t,e){let r=ee(t);a.children.forEach(o=>{let i=o.value.outlet;this.deactivateRoutes(o,r[i],e),delete r[i]}),Object.values(r).forEach(o=>{this.deactivateRouteAndItsChildren(o,e)})}deactivateRoutes(a,t,e){let r=a.value,o=t?t.value:null;if(r===o)if(r.component){let i=e.getContext(r.outlet);i&&this.deactivateChildRoutes(a,t,i.children)}else this.deactivateChildRoutes(a,t,e);else o&&this.deactivateRouteAndItsChildren(t,e)}deactivateRouteAndItsChildren(a,t){a.value.component&&this.routeReuseStrategy.shouldDetach(a.value.snapshot)?this.detachAndStoreRouteSubtree(a,t):this.deactivateRouteAndOutlet(a,t)}detachAndStoreRouteSubtree(a,t){let e=t.getContext(a.value.outlet),r=e&&a.value.component?e.children:t,o=ee(a);for(let i of Object.values(o))this.deactivateRouteAndItsChildren(i,r);if(e&&e.outlet){let i=e.outlet.detach(),c=e.children.contexts;e.resetChildren(),this.routeReuseStrategy.store(a.value.snapshot,{componentRef:i,route:a,contexts:c})}}deactivateRouteAndOutlet(a,t){let e=t.getContext(a.value.outlet),r=e&&a.value.component?e.children:t,o=ee(a);for(let i of Object.values(o))this.deactivateRouteAndItsChildren(i,r);e&&(e.outlet&&(e.outlet.deactivate(),e.children.onOutletDeactivated()),e.attachRef=null,e.route=null),a.value._localInjector?.destroy()}activateChildRoutes(a,t,e){let r=ee(t);a.children.forEach(o=>{this.activateRoutes(o,r[o.value.outlet],e),this.forwardEvent(new qn(o.value.snapshot))}),a.children.length&&this.forwardEvent(new $n(a.value.snapshot))}activateRoutes(a,t,e){let r=a.value,o=t?t.value:null;if(Ua(r),r===o)if(r.component){let i=e.getOrCreateContext(r.outlet);this.activateChildRoutes(a,t,i.children)}else this.activateChildRoutes(a,t,e);else if(r.component){let i=e.getOrCreateContext(r.outlet);if(this.routeReuseStrategy.shouldAttach(r.snapshot)){let c=this.routeReuseStrategy.retrieve(r.snapshot);this.routeReuseStrategy.store(r.snapshot,null),i.children.onOutletReAttached(c.contexts),i.attachRef=c.componentRef,i.route=c.route.value,i.outlet&&i.outlet.attach(c.componentRef,c.route.value),Ua(c.route.value),this.activateChildRoutes(a,null,i.children)}else i.attachRef=null,i.route=r,i.outlet&&i.outlet.activateWith(r,i.injector),this.activateChildRoutes(a,null,i.children)}else this.activateChildRoutes(a,null,e)}};var Wn=class{path;route;constructor(a){this.path=a,this.route=this.path[this.path.length-1]}};var ae$1=class{component;route;constructor(a,t){this.component=a,this.route=t}};function lc(n,a,t){let e=n._root;return Te$2(e,a?a._root:null,t,[e.value])}function dc(n){let a=n.routeConfig?n.routeConfig.canActivateChild:null;return!a||a.length===0?null:{node:n,guards:a}}function le$1(n,a){let t=Symbol(),e=a.get(n,t);return e===t?typeof n==`function`&&!uv(n)?n:a.get(n):e}function Te$2(n,a,t,e,r={canDeactivateChecks:[],canActivateChecks:[]}){let o=ee(a);return n.children.forEach(i=>{uc(i,o[i.value.outlet],t,e.concat([i.value]),r),delete o[i.value.outlet]}),Object.entries(o).forEach(([i,c])=>Pe$1(c,t.getContext(i),t,r)),r}function uc(n,a,t,e,r={canDeactivateChecks:[],canActivateChecks:[]}){let o=n.value,i=a?a.value:null,c=t?t.getContext(n.value.outlet):null;if(i&&o.routeConfig===i.routeConfig){let s=mc(i,o,o.routeConfig.runGuardsAndResolvers);s?r.canActivateChecks.push(new Wn(e)):(o.data=i.data,o._resolvedData=i._resolvedData),o.component?Te$2(n,a,c?c.children:null,e,r):Te$2(n,a,t,e,r),s&&c&&c.outlet&&c.outlet.isActivated&&r.canDeactivateChecks.push(new ae$1(c.outlet.component,i))}else i&&Pe$1(a,c,t,r),r.canActivateChecks.push(new Wn(e)),o.component?Te$2(n,null,c?c.children:null,e,r):Te$2(n,null,t,e,r);return r}function mc(n,a,t){if(typeof t==`function`)return zo$1(a._environmentInjector,()=>t(n,a));switch(t){case`pathParamsChange`:return!Ut(n.url,a.url);case`pathParamsOrQueryParamsChange`:return!Ut(n.url,a.url)||!ct(n.queryParams,a.queryParams);case`always`:return!0;case`paramsOrQueryParamsChange`:return!Wa(n,a)||!ct(n.queryParams,a.queryParams);default:return!Wa(n,a)}}function Pe$1(n,a,t,e){let r=ee(n),o=n.value;Object.entries(r).forEach(([i,c])=>{o.component?a?Pe$1(c,a.children.getContext(i),a.children,e):Pe$1(c,null,null,e):Pe$1(c,t?t.getContext(i):null,t,e)}),o.component?a&&a.outlet&&a.outlet.isActivated?e.canDeactivateChecks.push(new ae$1(a.outlet.component,o)):e.canDeactivateChecks.push(new ae$1(null,o)):e.canDeactivateChecks.push(new ae$1(null,o))}function We(n){return typeof n==`function`}function pc(n){return typeof n==`boolean`}function fc(n){return n&&We(n.canLoad)}function hc(n){return n&&We(n.canActivate)}function bc(n){return n&&We(n.canActivateChild)}function gc(n){return n&&We(n.canDeactivate)}function vc(n){return n&&We(n.canMatch)}function ei(n){return n instanceof Tt$1||n?.name===`EmptyError`}var Nn=Symbol(`INITIAL_VALUE`);function se$1(){return ev(n=>Py(n.map(a=>a.pipe(Ts$1(1),Ou(t=>{if(t instanceof Ct)return _y(t);throw t}),Xy(Nn)))).pipe(Nt$1(a=>{for(let t of a)if(t!==!0){if(t===Nn)return Nn;if(t===!1||yc(t))return t}return!0}),Jn$1(a=>a!==Nn),Ts$1(1)))}function yc(n){return It$1(n)||n instanceof Ct}function ni(n){return new x(a=>{if(n.aborted){a.next(),a.complete();return}let t=()=>{a.next(),a.complete()};return n.addEventListener(`abort`,t),()=>n.removeEventListener(`abort`,t)})}function ai(n){return tv(ni(n))}function _c(n){return St(a=>{let{targetSnapshot:t,currentSnapshot:e,guards:{canActivateChecks:r,canDeactivateChecks:o}}=a;return o.length===0&&r.length===0?_y(Q$2(z$2({},a),{guardsResult:!0})):Sc(o,t,e).pipe(St(i=>i&&pc(i)?wc(t,r,n):_y(i)),Nt$1(i=>Q$2(z$2({},a),{guardsResult:i})))})}function Sc(n,a,t){return Oe$2(n).pipe(St(e=>Cc(e.component,e.route,t,a)),Qy(e=>e!==!0,!0))}function wc(n,a,t){return Oe$2(a).pipe(Uy(e=>Mo$1(xc(e.route.parent,t),Ec(e.route,t),Ic(n,e.path),Nc(n,e.route))),Qy(e=>e!==!0,!0))}function Ec(n,a){return n!==null&&a&&a(new Vn(n)),_y(!0)}function xc(n,a){return n!==null&&a&&a(new Hn(n)),_y(!0)}function Nc(n,a){let t=a.routeConfig?a.routeConfig.canActivate:null;if(!t||t.length===0)return _y(!0);let e=t.map(r=>jy(()=>{let o=a._environmentInjector,i=le$1(r,o);return qe(hc(i)?i.canActivate(a,n):zo$1(o,()=>i(a,n))).pipe(Qy())}));return _y(e).pipe(se$1())}function Ic(n,a){let t=a[a.length-1],r=a.slice(0,a.length-1).reverse().map(o=>dc(o)).filter(o=>o!==null).map(o=>jy(()=>{let i=o.guards.map(c=>{let s=o.node._environmentInjector,d=le$1(c,s);return qe(bc(d)?d.canActivateChild(t,n):zo$1(s,()=>d(t,n))).pipe(Qy())});return _y(i).pipe(se$1())}));return _y(r).pipe(se$1())}function Cc(n,a,t,e){let r=a&&a.routeConfig?a.routeConfig.canDeactivate:null;if(!r||r.length===0)return _y(!0);let o=r.map(i=>{let c=a._environmentInjector,s=le$1(i,c);return or(()=>gc(s)?s.canDeactivate(n,a,t,e):zo$1(c,()=>s(n,a,t,e))).pipe(Qy())});return _y(o).pipe(se$1())}function Rc(n,a,t,e,r){let o=a.canLoad;if(o===void 0||o.length===0)return _y(!0);let i=o.map(c=>{let s=le$1(c,n),d=or(()=>fc(s)?s.canLoad(a,t):zo$1(n,()=>s(a,t)));return r?d.pipe(ai(r)):d});return _y(i).pipe(se$1(),ri(e))}function or(n){try{return qe(n())}catch(a){return new x(t=>t.error(a))}}function ri(n){return my(gy(a=>{if(typeof a!=`boolean`)throw Oe$1(n,a)}),Nt$1(a=>a===!0))}function Mc(n,a,t,e,r,o){let i=a.canMatch;if(!i||i.length===0)return _y(!0);let c=i.map(s=>{let d=le$1(s,n);return or(()=>vc(d)?d.canMatch(a,t,r):zo$1(n,()=>d(a,t,r))).pipe(ai(o))});return _y(c).pipe(se$1(),ri(e))}var st=class n extends Error{name=`NoMatch`;segmentGroup;constructor(a){super(),this.segmentGroup=a||null,Object.setPrototypeOf(this,n.prototype)}};var $e=class n extends Error{urlTree;name=`AbsoluteRedirect`;constructor(a){super(),this.urlTree=a,Object.setPrototypeOf(this,n.prototype)}};function Ac(n){throw new C(4e3,!1)}function Tc(n){throw Jo(!1,O.GuardRejected)}var Ya=class{urlSerializer;urlTree;constructor(a,t){this.urlSerializer=a,this.urlTree=t}async lineralizeSegments(a,t){let e=[],r=t.root;for(;;){if(e=e.concat(r.segments),r.numberOfChildren===0)return e;if(r.numberOfChildren>1||!r.children[h])throw Ac(`${a.redirectTo}`);r=r.children[h]}}async applyRedirectCommands(a,t,e,r,o){let i=await Dc(t,r,o);if(i instanceof W)throw new $e(i);let c=this.applyRedirectCreateUrlTree(i,this.urlSerializer.parse(i),a,e);if(i[0]===`/`)throw new $e(c);return c}applyRedirectCreateUrlTree(a,t,e,r){return new W(this.createSegmentGroup(a,t.root,e,r),this.createQueryParams(t.queryParams,this.urlTree.queryParams),t.fragment)}createQueryParams(a,t){let e={};return Object.entries(a).forEach(([r,o])=>{if(typeof o==`string`&&o[0]===`:`){let c=o.substring(1);e[r]=t[c]}else e[r]=o}),e}createSegmentGroup(a,t,e,r){let o=this.createSegments(a,t.segments,e,r),i=Object.create(null);return Object.entries(t.children).forEach(([c,s])=>{i[c]=this.createSegmentGroup(a,s,e,r)}),new _(o,i)}createSegments(a,t,e,r){return t.map(o=>o.path[0]===`:`?this.findPosParam(a,o,r):this.findOrReturn(o,e))}findPosParam(a,t,e){let r=e[t.path.substring(1)];if(!r)throw new C(4001,!1);return r}findOrReturn(a,t){let e=0;for(let r of t){if(r.path===a.path)return t.splice(e),r;e++}return a}};function Dc(n,a,t){if(typeof n==`string`)return Promise.resolve(n);let e=n;return Mn$1(qe(zo$1(t,()=>e(a))))}function kc(n,a){return n.providers&&!n._injector&&(n._injector=_l$1(n.providers,a,`Route: ${n.path}`)),n._injector??a}function lt(n){return n.outlet||h}function Oc(n,a){let t=n.filter(e=>lt(e)===a);return t.push(...n.filter(e=>lt(e)!==a)),t}var Za={matched:!1,consumedSegments:[],remainingSegments:[],parameters:{},positionalParamSegments:{}};function oi(n){return{routeConfig:n.routeConfig,url:n.url,params:n.params,queryParams:n.queryParams,fragment:n.fragment,data:n.data,outlet:n.outlet,title:n.title,paramMap:n.paramMap,queryParamMap:n.queryParamMap}}function Pc(n,a,t,e,r,o,i){let c=ii(n,a,t);if(!c.matched)return _y(c);let s=oi(o(c));return e=kc(a,e),Mc(e,a,t,r,s,i).pipe(Nt$1(d=>d===!0?c:z$2({},Za)))}function ii(n,a,t){if(a.path===``)return a.pathMatch===`full`&&(n.hasChildren()||t.length>0)?z$2({},Za):{matched:!0,consumedSegments:[],remainingSegments:t,parameters:{},positionalParamSegments:{}};let r=(a.matcher||Mo)(t,n,a);if(!r)return z$2({},Za);let o={};Object.entries(r.posParams??{}).forEach(([c,s])=>{o[c]=s.path});let i=r.consumed.length>0?z$2(z$2({},o),r.consumed[r.consumed.length-1].parameters):o;return{matched:!0,consumedSegments:r.consumed,remainingSegments:t.slice(r.consumed.length),parameters:i,positionalParamSegments:r.posParams??{}}}function Io(n,a,t,e){return t.length>0&&Fc(n,t,e)?{segmentGroup:new _(a,Uc(e,new _(t,n.children))),slicedSegments:[]}:t.length===0&&jc(n,t,e)?{segmentGroup:new _(n.segments,Lc(n,t,e,n.children)),slicedSegments:t}:{segmentGroup:new _(n.segments,n.children),slicedSegments:t}}function Lc(n,a,t,e){let r={};for(let o of t)if(Yn(n,a,o)&&!e[lt(o)]){let i=new _([],{});r[lt(o)]=i}return z$2(z$2({},e),r)}function Uc(n,a){let t={};t[h]=a;for(let e of n)if(e.path===``&&lt(e)!==h){let r=new _([],{});t[lt(e)]=r}return t}function Fc(n,a,t){return t.some(e=>Yn(n,a,e)&&lt(e)!==h)}function jc(n,a,t){return t.some(e=>Yn(n,a,e))}function Yn(n,a,t){return(n.hasChildren()||a.length>0)&&t.pathMatch===`full`?!1:t.path===``}function zc(n,a,t){return a.length===0&&!n.hasChildren()}var Qa=class{};async function Bc(n,a,t,e,r,o,i,c){return new Xa(n,a,t,e,r,i,o,c).recognize()}var Hc=31;var Xa=class{injector;configLoader;rootComponentType;config;urlTree;paramsInheritanceStrategy;urlSerializer;abortSignal;applyRedirects;absoluteRedirectCount=0;allowRedirects=!0;queryParams;constructor(a,t,e,r,o,i,c,s){this.injector=a,this.configLoader=t,this.rootComponentType=e,this.config=r,this.urlTree=o,this.paramsInheritanceStrategy=i,this.urlSerializer=c,this.abortSignal=s,this.applyRedirects=new Ya(this.urlSerializer,this.urlTree),this.queryParams=Object.freeze(z$2({},this.urlTree.queryParams))}noMatchError(a){return new C(4002,`'${a.segmentGroup}'`)}async recognize(){let a=Io(this.urlTree.root,[],[],this.config).segmentGroup,{children:t,rootSnapshot:e}=await this.match(a),o=new Fe$1(``,new z$1(e,t)),i=Ho(e,[],this.urlTree.queryParams,this.urlTree.fragment);return i.queryParams=this.urlTree.queryParams,o.url=this.urlSerializer.serialize(i),{state:o,tree:i}}async match(a){let t=new re$1([],Object.freeze({}),this.queryParams,this.urlTree.fragment,Object.freeze({}),h,this.rootComponentType,null,{},this.injector);try{return{children:await this.processSegmentGroup(this.injector,this.config,a,h,t),rootSnapshot:t}}catch(e){if(e instanceof $e)return this.absoluteRedirectCount++,this.absoluteRedirectCount>Hc&&(this.allowRedirects=!1),this.urlTree=e.urlTree,this.queryParams=Object.freeze(z$2({},this.urlTree.queryParams)),this.match(e.urlTree.root);throw e instanceof st?this.noMatchError(e):e}}async processSegmentGroup(a,t,e,r,o){if(e.segments.length===0&&e.hasChildren())return this.processChildren(a,t,e,o);let i=await this.processSegment(a,t,e,e.segments,r,!0,o);return i instanceof z$1?[i]:[]}async processChildren(a,t,e,r){let o=[];for(let s of Object.keys(e.children))s===`primary`?o.unshift(s):o.push(s);let i=[];for(let s of o){let d=e.children[s],u=Oc(t,s),f=await this.processSegment(a,u,d,d.segments,s,!0,r);f instanceof z$1&&i.push(f)}let c=si(i);return $c(c),c}async processSegment(a,t,e,r,o,i,c){for(let s of t)try{return await this.processSegmentAgainstRoute(s._injector??a,t,s,e,r,o,i,c)}catch(d){if(d instanceof st||ei(d))continue;throw d}if(zc(e,r))return new Qa;throw new st(e)}async processSegmentAgainstRoute(a,t,e,r,o,i,c,s){if(lt(e)!==i&&(i===h||!Yn(r,o,e)||!e.children?.length&&!e.loadChildren||o.length===0&&!r.hasChildren()))throw new st(r);if(e.redirectTo===void 0)return this.matchSegmentAgainstRoute(a,r,e,o,i,s);if(this.allowRedirects&&c)return this.expandSegmentAgainstRouteUsingRedirect(a,r,t,e,o,i,s);throw new st(r)}async expandSegmentAgainstRouteUsingRedirect(a,t,e,r,o,i,c){let{matched:s,parameters:d,consumedSegments:u,positionalParamSegments:f,remainingSegments:p}=ii(t,r,o);if(!s)throw new st(t);let w=this.createSnapshot(a,r,o,d,c);if(this.abortSignal.aborted)throw new Error(this.abortSignal.reason);let L=await this.applyRedirects.applyRedirectCommands(u,r.redirectTo,f,oi(w),a),D=await this.applyRedirects.lineralizeSegments(r,L);return this.processSegment(a,e,t,D.concat(p),i,!1,c)}createSnapshot(a,t,e,r,o){let i=new re$1(e,r,this.queryParams,this.urlTree.fragment,Wc(t),lt(t),t.component??t._loadedComponent??null,t,Gc(t),a),c=tr(i,o,this.paramsInheritanceStrategy);return i.params=c.params,i.data=c.data,i}async matchSegmentAgainstRoute(a,t,e,r,o,i){if(this.abortSignal.aborted)throw new Error(this.abortSignal.reason);let c=rt=>this.createSnapshot(a,e,rt.consumedSegments,rt.parameters,i),s=await Mn$1(Pc(t,e,r,a,this.urlSerializer,c,this.abortSignal));if(e.path===`**`&&(t.children={}),!s?.matched)throw new st(t);a=e._injector??a;let{routes:d}=await this.getChildConfig(a,e,r),u=e._loadedInjector??a,{parameters:f,consumedSegments:p,remainingSegments:w}=s,L=this.createSnapshot(a,e,p,f,i),D=lt(e)===o,{segmentGroup:at,slicedSegments:vt}=D?Io(t,p,w,d):{segmentGroup:t,slicedSegments:w};if(D&&vt.length===0&&at.hasChildren())return new z$1(L,await this.processChildren(u,d,at,L));if(D&&d.length===0&&vt.length===0)return new z$1(L,[]);let ut=await this.processSegment(u,d,at,vt,D?h:o,!0,L);if(!D&&!(ut instanceof z$1))throw new st(t);return new z$1(L,ut instanceof z$1?[ut]:[])}async getChildConfig(a,t,e){if(t.children)return{routes:t.children,injector:a};if(t.loadChildren){if(t._loadedRoutes!==void 0){let o=t._loadedNgModuleFactory;return o&&!t._loadedInjector&&(t._loadedInjector=o.create(a).injector),{routes:t._loadedRoutes,injector:t._loadedInjector}}if(this.abortSignal.aborted)throw new Error(this.abortSignal.reason);if(await Mn$1(Rc(a,t,e,this.urlSerializer,this.abortSignal))){let o=await this.configLoader.loadChildren(a,t);return t._loadedRoutes=o.routes,t._loadedInjector=o.injector,t._loadedNgModuleFactory=o.factory,o}throw Tc(t)}return{routes:[],injector:a}}};function $c(n){n.sort((a,t)=>a.value.outlet===h?-1:t.value.outlet===h?1:a.value.outlet.localeCompare(t.value.outlet))}function Vc(n){let a=n.value.routeConfig;return a&&a.path===``}function si(n){let a=[],t=/* @__PURE__ */ new Set;for(let r of n){if(!Vc(r)){a.push(r);continue}let o=a.find(i=>r.value.routeConfig===i.value.routeConfig);o!==void 0?(o.children.push(...r.children),t.add(o)):a.push(r)}for(let r of t){let o=si(r.children);a.push(new z$1(r.value,o))}let e=a.filter(r=>!t.has(r));return qc(e),e}function qc(n){let a=Object.create(null);n.forEach(t=>{let e=a[t.value.outlet];if(e){e.url.map(i=>i.toString()).join(`/`);t.value.url.map(i=>i.toString()).join(`/`);throw new C(4006,!1)}a[t.value.outlet]=t.value})}function Wc(n){return n.data||{}}function Gc(n){return n.resolve||{}}function Kc(n,a,t,e,r,o,i){return St(async c=>{let{state:s,tree:d}=await Bc(n,a,t,e,c.extractedUrl,r,o,i);return Q$2(z$2({},c),{targetSnapshot:s,urlAfterRedirects:d})})}function Yc(n){return St(a=>{let{targetSnapshot:t,guards:{canActivateChecks:e}}=a;if(!e.length)return _y(a);let r=new Set(e.map(c=>c.route)),o=/* @__PURE__ */ new Set;for(let c of r)if(!o.has(c))for(let s of ci(c))o.add(s);let i=0;return Oe$2(o).pipe(Uy(c=>r.has(c)?Zc(c,t,n):(c.data=tr(c,c.parent,n).resolve,_y(void 0))),gy(()=>i++),Yy(1),St(c=>i===o.size?_y(a):_t))})}function ci(n){return[n,...n.children.map(t=>ci(t)).flat()]}function Zc(n,a,t){let e=n.routeConfig,r=n._resolve;return e?.title!==void 0&&!Yo(e)&&(r[Ve$1]=e.title),jy(()=>(n.data=tr(n,n.parent,t).resolve,Qc(r,n,a).pipe(Nt$1(o=>(n._resolvedData=o,n.data=z$2(z$2({},n.data),o),null)))))}function Qc(n,a,t){let e=ja(n);if(e.length===0)return _y({});let r={};return Oe$2(e).pipe(St(o=>Xc(n[o],a,t).pipe(Qy(),gy(i=>{if(i instanceof Ct)throw Oe$1(new Nt,i);r[o]=i}))),Yy(1),Nt$1(()=>r),Ou(o=>ei(o)?_t:My(o)))}function Xc(n,a,t){let e=a._environmentInjector,r=le$1(n,e);return qe(r.resolve?r.resolve(a,t):zo$1(e,()=>r(a,t)))}var li=new _$1(``);function Ja(n){return ev(a=>{let t=n(a);return t?Oe$2(t).pipe(Nt$1(()=>a)):_y(a)})}var ir=(()=>{class n{buildTitle(t){let e,r=t.root;for(;r!==void 0;)e=this.getResolvedTitleForRoute(r)??e,r=r.children.find(o=>o.outlet===h);return e}getResolvedTitleForRoute(t){return t.data[Ve$1]}static ɵfac=function(e){return new(e||n)};static ɵprov=Vr({token:n,factory:()=>y(di)})}return n})();var di=(()=>{class n extends ir{title;constructor(t){super(),this.title=t}updateTitle(t){let e=this.buildTitle(t);e!==void 0&&this.title.setTitle(e)}static ɵfac=function(e){return new(e||n)(Le$3(yo))};static ɵprov=se$2({token:n,factory:n.ɵfac,providedIn:`root`})}return n})();var de$1=new _$1(``,{factory:()=>({})});var Ge=new _$1(``);var ui=(()=>{class n{componentLoaders=/* @__PURE__ */ new WeakMap;childrenLoaders=/* @__PURE__ */ new WeakMap;onLoadStartListener;onLoadEndListener;compiler=y(cb);async loadComponent(t,e){if(this.componentLoaders.get(e))return this.componentLoaders.get(e);if(e._loadedComponent)return Promise.resolve(e._loadedComponent);this.onLoadStartListener&&this.onLoadStartListener(e);let r=(async()=>{try{let o=await To(zo$1(t,()=>e.loadComponent())),i=await pi(Wb(o));return this.onLoadEndListener&&this.onLoadEndListener(e),e._loadedComponent=i,i}finally{this.componentLoaders.delete(e)}})();return this.componentLoaders.set(e,r),r}loadChildren(t,e){if(this.childrenLoaders.get(e))return this.childrenLoaders.get(e);if(e._loadedRoutes)return Promise.resolve({routes:e._loadedRoutes,injector:e._loadedInjector});this.onLoadStartListener&&this.onLoadStartListener(e);let r=(async()=>{try{let o=await mi(e,this.compiler,t,this.onLoadEndListener);return e._loadedRoutes=o.routes,e._loadedInjector=o.injector,e._loadedNgModuleFactory=o.factory,o}finally{this.childrenLoaders.delete(e)}})();return this.childrenLoaders.set(e,r),r}static ɵfac=function(e){return new(e||n)};static ɵprov=Vr({token:n,factory:n.ɵfac})}return n})();async function mi(n,a,t,e){let r=await To(zo$1(t,()=>n.loadChildren())),o=await pi(Wb(r)),i;o instanceof Tg||Array.isArray(o)?i=o:i=await a.compileModuleAsync(o),e&&e(n);let c,s,u;return Array.isArray(i)?s=i:(c=i.create(t).injector,u=i,s=c.get(Ge,[],{optional:!0,self:!0}).flat()),{routes:s.map(rr),injector:c,factory:u}}async function pi(n){return n}var Zn=(()=>{class n{static ɵfac=function(e){return new(e||n)};static ɵprov=Vr({token:n,factory:()=>y(Jc)})}return n})();var Jc=(()=>{class n{shouldProcessUrl(t){return!0}extract(t){return t}merge(t,e){return t}static ɵfac=function(e){return new(e||n)};static ɵprov=Vr({token:n,factory:n.ɵfac})}return n})();var fi=new _$1(``);var tl=()=>{};var hi=new _$1(``);var bi=(()=>{class n{currentNavigation=mt(null,{equal:()=>!1});currentTransition=null;lastSuccessfulNavigation=mt(null);events=new ee$1;transitionAbortWithErrorSubject=new ee$1;configLoader=y(ui);environmentInjector=y(ve);destroyRef=y(Ee$1);urlSerializer=y(ce$1);rootContexts=y(jt$1);location=y(k);inputBindingEnabled=y(Kn,{optional:!0})!==null;titleStrategy=y(ir);options=y(de$1,{optional:!0})||{};paramsInheritanceStrategy=this.options.paramsInheritanceStrategy||ac;urlHandlingStrategy=y(Zn);createViewTransition=y(fi,{optional:!0});navigationErrorHandler=y(hi,{optional:!0});routerResourcesFeature=y(li,{optional:!0});navigationId=0;get hasRequestedNavigation(){return this.navigationId!==0}transitions;afterPreactivation=()=>_y(void 0);rootComponentType=null;destroyed=!1;constructor(){let t=r=>this.events.next(new zn(r)),e=r=>this.events.next(new Bn(r));this.configLoader.onLoadEndListener=e,this.configLoader.onLoadStartListener=t,this.destroyRef.onDestroy(()=>{this.destroyed=!0})}complete(){this.transitions?.complete()}handleNavigationRequest(t){let e=++this.navigationId;le$2(()=>{this.transitions?.next(Q$2(z$2({},t),{extractedUrl:this.urlHandlingStrategy.extract(t.rawUrl),targetSnapshot:null,targetRouterState:null,guards:{canActivateChecks:[],canDeactivateChecks:[]},guardsResult:null,id:e,routesRecognizeHandler:{},beforeActivateHandler:{}}))})}setupNavigations(t){return this.transitions=new zn$1(null),this.transitions.pipe(Jn$1(e=>e!==null),ev(e=>{let r=!0,o=!1,i=new AbortController,c=()=>!o&&this.currentTransition?.id===e.id;return _y(e).pipe(ev(s=>{if(this.navigationId>e.id)return this.cancelNavigationTransition(e,``,O.SupersededByNewNavigation),_t;this.currentTransition=e;let d=this.lastSuccessfulNavigation();this.currentNavigation.set({id:s.id,initialUrl:s.rawUrl,extractedUrl:s.extractedUrl,targetBrowserUrl:typeof s.extras.browserUrl==`string`?this.urlSerializer.parse(s.extras.browserUrl):s.extras.browserUrl,trigger:s.source,extras:s.extras,previousNavigation:d?Q$2(z$2({},d),{previousNavigation:null}):null,abort:()=>i.abort(),routesRecognizeHandler:s.routesRecognizeHandler,beforeActivateHandler:s.beforeActivateHandler});let u=!t.navigated||this.isUpdatingInternalState()||this.isUpdatedBrowserUrl(),f=s.extras.onSameUrlNavigation??t.onSameUrlNavigation;if(!u&&f!==`reload`)return this.events.next(new ht(s.id,this.urlSerializer.serialize(s.rawUrl),``,je$1.IgnoredSameUrlNavigation)),s.resolve(!1),_t;if(this.urlHandlingStrategy.shouldProcessUrl(s.rawUrl))return _y(s).pipe(ev(p=>(this.events.next(new zt$1(p.id,this.urlSerializer.serialize(p.extractedUrl),p.source,p.restoredState)),p.id!==this.navigationId?_t:Promise.resolve(p))),Kc(this.environmentInjector,this.configLoader,this.rootComponentType,t.config,this.urlSerializer,this.paramsInheritanceStrategy,i.signal),gy(p=>{e.targetSnapshot=p.targetSnapshot,e.urlAfterRedirects=p.urlAfterRedirects,this.currentNavigation.update(w=>(w.finalUrl=p.urlAfterRedirects,w)),this.events.next(new Be)}),ev(p=>Oe$2(e.routesRecognizeHandler.deferredHandle??_y(void 0)).pipe(Nt$1(()=>p))),gy(()=>{let p=new ze$1(s.id,this.urlSerializer.serialize(s.extractedUrl),this.urlSerializer.serialize(s.urlAfterRedirects),s.targetSnapshot);this.events.next(p)}));if(u&&this.urlHandlingStrategy.shouldProcessUrl(s.currentRawUrl)){let{id:p,extractedUrl:w,source:L,restoredState:D,extras:at}=s,vt=new zt$1(p,this.urlSerializer.serialize(w),L,D);this.events.next(vt);let ut=Go(this.rootComponentType,this.environmentInjector).snapshot;return this.currentTransition=e=Q$2(z$2({},s),{targetSnapshot:ut,urlAfterRedirects:w,extras:Q$2(z$2({},at),{skipLocationChange:!1,replaceUrl:!1})}),this.currentNavigation.update(rt=>(rt.finalUrl=w,rt)),_y(e)}else return this.events.next(new ht(s.id,this.urlSerializer.serialize(s.extractedUrl),``,je$1.IgnoredByUrlHandlingStrategy)),s.resolve(!1),_t}),Nt$1(s=>{let d=new Ln(s.id,this.urlSerializer.serialize(s.extractedUrl),this.urlSerializer.serialize(s.urlAfterRedirects),s.targetSnapshot);return this.events.next(d),this.currentTransition=e=Q$2(z$2({},s),{guards:lc(s.targetSnapshot,s.currentSnapshot,this.rootContexts)}),e}),_c(s=>this.events.next(s)),ev(s=>{if(e.guardsResult=s.guardsResult,s.guardsResult&&typeof s.guardsResult!=`boolean`)throw Oe$1(this.urlSerializer,s.guardsResult);let d=new Un(s.id,this.urlSerializer.serialize(s.extractedUrl),this.urlSerializer.serialize(s.urlAfterRedirects),s.targetSnapshot,!!s.guardsResult);if(this.events.next(d),!c())return _t;if(!s.guardsResult)return this.cancelNavigationTransition(s,``,O.GuardRejected),_t;if(s.guards.canActivateChecks.length===0)return _y(s);let u=new Fn(s.id,this.urlSerializer.serialize(s.extractedUrl),this.urlSerializer.serialize(s.urlAfterRedirects),s.targetSnapshot);if(this.events.next(u),!c())return _t;let f=!1;return _y(s).pipe(Yc(this.paramsInheritanceStrategy),gy({next:()=>{f=!0;let p=new jn(s.id,this.urlSerializer.serialize(s.extractedUrl),this.urlSerializer.serialize(s.urlAfterRedirects),s.targetSnapshot);this.events.next(p)},complete:()=>{f||this.cancelNavigationTransition(s,``,O.NoDataFromResolver)}}))}),Ja(s=>{let d=f=>{let p=[];if(f.routeConfig?._loadedComponent)f.component=f.routeConfig?._loadedComponent;else if(f.routeConfig?.loadComponent){let w=f._environmentInjector;p.push(this.configLoader.loadComponent(w,f.routeConfig).then(L=>{f.component=L}))}for(let w of f.children)p.push(...d(w));return p},u=d(s.targetSnapshot.root);return u.length===0?_y(s):Oe$2(Promise.all(u).then(()=>s))}),ev(s=>{let{newlyCreatedRoutes:d,state:u}=oc(t.routeReuseStrategy,s.targetSnapshot,s.currentRouterState);return this.currentTransition=e=s=Q$2(z$2({},s),{targetRouterState:u,newlyCreatedRoutes:d}),this.currentNavigation.update(f=>(f.targetRouterState=u,f)),_y(s)}),this.routerResourcesFeature?.setupAndRunResources(i.signal)??(s=>s),Ja(()=>this.afterPreactivation()),ev(()=>{let{currentSnapshot:s,targetSnapshot:d}=e,u=this.createViewTransition?.(this.environmentInjector,s.root,d.root,e.hasUAVisualTransition);return u?Oe$2(u).pipe(Nt$1(()=>e)):_y(e)}),Ts$1(1),ev(s=>{r=!1,this.events.next(new oe$1);let d=e.beforeActivateHandler.deferredHandle;return d?Oe$2(d.then(()=>s)):_y(s)}),gy(s=>{new Ka(t.routeReuseStrategy,e.targetRouterState,e.currentRouterState,d=>this.events.next(d),this.inputBindingEnabled).activate(this.rootContexts),s.newlyCreatedRoutes?.clear(),c()&&(gi(s.targetRouterState),o=!0,this.currentNavigation.update(d=>(d.abort=tl,d)),this.lastSuccessfulNavigation.set(le$2(this.currentNavigation)),this.events.next(new dt(s.id,this.urlSerializer.serialize(s.extractedUrl),this.urlSerializer.serialize(s.urlAfterRedirects))),this.titleStrategy?.updateTitle(s.targetRouterState.snapshot),s.resolve(!0))}),tv(ni(i.signal).pipe(Jn$1(()=>!o&&r),gy(()=>{this.cancelNavigationTransition(e,i.signal.reason+``,O.Aborted)}))),gy({complete:()=>{o=!0}}),tv(this.transitionAbortWithErrorSubject.pipe(gy(s=>{throw s}))),zy(()=>{i.abort(),o||this.cancelNavigationTransition(e,``,O.SupersededByNewNavigation),this.currentTransition?.id===e.id&&(this.currentNavigation.set(null),this.currentTransition=null)}),Ou(s=>{if(o=!0,Co(e),this.destroyed)return e.resolve(!1),_t;if(s instanceof Ct&&(s=Oe$1(this.urlSerializer,s)),ti(s))this.events.next(new Q$1(e.id,this.urlSerializer.serialize(e.extractedUrl),s.message,s.cancellationCode)),cc(s)?this.events.next(new ie(s.url,s.navigationBehaviorOptions)):e.resolve(!1);else{let d=new Bt(e.id,this.urlSerializer.serialize(e.extractedUrl),s,e.targetSnapshot??void 0);try{let u=zo$1(this.environmentInjector,()=>this.navigationErrorHandler?.(d));if(u instanceof Ct){let{message:f,cancellationCode:p}=Oe$1(this.urlSerializer,u);this.events.next(new Q$1(e.id,this.urlSerializer.serialize(e.extractedUrl),f,p)),this.events.next(new ie(u.redirectTo,u.navigationBehaviorOptions))}else throw this.events.next(d),s}catch(u){this.options.resolveNavigationPromiseOnError?e.resolve(!1):e.reject(u)}}return _t}))}))}cancelNavigationTransition(t,e,r){Co(t);let o=new Q$1(t.id,this.urlSerializer.serialize(t.extractedUrl),e,r);this.events.next(o),t.resolve(!1)}isUpdatingInternalState(){return this.currentTransition?.extractedUrl.toString()!==this.currentTransition?.currentUrlTree.toString()}isUpdatedBrowserUrl(){let t=this.urlHandlingStrategy.extract(this.urlSerializer.parse(this.location.path(!0))),e=le$2(this.currentNavigation),r=e?.targetBrowserUrl??e?.extractedUrl;return t.toString()!==r?.toString()&&!e?.extras.skipLocationChange}static ɵfac=function(e){return new(e||n)};static ɵprov=Vr({token:n,factory:n.ɵfac})}return n})();function el(n){return n!==ke$1}function Co(n){for(let a of n.newlyCreatedRoutes??[])a._localInjector?.destroy(),a._localInjector=void 0;gi(n.targetRouterState)}function gi(n){if(!n)return;let a=t=>{t.value.pending?.set(!1),t.children.forEach(a)};a(n._root)}var vi=new _$1(``);var yi=(()=>{class n{static ɵfac=function(e){return new(e||n)};static ɵprov=Vr({token:n,factory:()=>y(nl)})}return n})();var Gn=class{shouldDetach(a){return!1}store(a,t){}shouldAttach(a){return!1}retrieve(a){return null}shouldReuseRoute(a,t){return a.routeConfig===t.routeConfig}shouldDestroyInjector(a){return!0}};var nl=(()=>{class n extends Gn{static ɵfac=function(e){return new(e||n)};static ɵprov=Vr({token:n,factory:n.ɵfac})}return n})();var Qn=(()=>{class n{urlSerializer=y(ce$1);options=y(de$1,{optional:!0})||{};canceledNavigationResolution=this.options.canceledNavigationResolution||`replace`;location=y(k);urlHandlingStrategy=y(Zn);urlUpdateStrategy=this.options.urlUpdateStrategy||`deferred`;currentUrlTree=new W;getCurrentUrlTree(){return this.currentUrlTree}rawUrlTree=this.currentUrlTree;getRawUrlTree(){return this.rawUrlTree}createBrowserPath({finalUrl:t,initialUrl:e,targetBrowserUrl:r}){let o=t!==void 0?this.urlHandlingStrategy.merge(t,e):e,i=r??o;return i instanceof W?this.urlSerializer.serialize(i):i}routerUrlState(t){return t?.targetBrowserUrl===void 0||t?.finalUrl===void 0?{}:{ɵrouterUrl:this.urlSerializer.serialize(t.finalUrl)}}commitTransition({targetRouterState:t,finalUrl:e,initialUrl:r}){e&&t?(this.currentUrlTree=e,this.rawUrlTree=this.urlHandlingStrategy.merge(e,r),this.routerState=t):this.rawUrlTree=r}routerState=Go(null,y(ve));getRouterState(){return this.routerState}_stateMemento=this.createStateMemento();get stateMemento(){return this._stateMemento}updateStateMemento(){this._stateMemento=this.createStateMemento()}createStateMemento(){return{rawUrlTree:this.rawUrlTree,currentUrlTree:this.currentUrlTree,routerState:this.routerState}}restoredState(){return this.location.getState()}static ɵfac=function(e){return new(e||n)};static ɵprov=Vr({token:n,factory:()=>y(al)})}return n})();var al=(()=>{class n extends Qn{currentPageId=0;lastSuccessfulId=-1;get browserPageId(){return this.canceledNavigationResolution!==`computed`?this.currentPageId:this.restoredState()?.ɵrouterPageId??this.currentPageId}registerNonRouterCurrentEntryChangeListener(t){return this.location.subscribe(e=>{e.type===`popstate`&&setTimeout(()=>{t(e.url,e.state,`popstate`,{replaceUrl:!0},e.hasUAVisualTransition)})})}handleRouterEvent(t,e){t instanceof zt$1?this.updateStateMemento():t instanceof ht?this.commitTransition(e):t instanceof ze$1?this.urlUpdateStrategy===`eager`&&(e.extras.skipLocationChange||this.setBrowserUrl(this.createBrowserPath(e),e)):t instanceof oe$1?(this.commitTransition(e),this.urlUpdateStrategy===`deferred`&&!e.extras.skipLocationChange&&this.setBrowserUrl(this.createBrowserPath(e),e)):t instanceof Q$1?Qo(t)?t.code===O.Redirect&&this.routerState===e.targetRouterState&&this.resetInternalState(e):this.restoreHistory(e):t instanceof Bt?this.restoreHistory(e,!0):t instanceof dt&&(this.lastSuccessfulId=t.id,this.currentPageId=this.browserPageId)}setBrowserUrl(t,e){let{extras:r,id:o}=e,{replaceUrl:i,state:c}=r;if(this.location.isCurrentPathEqualTo(t)||i){let s=this.browserPageId,d=z$2(z$2({},c),this.generateNgRouterState(o,s,e));this.location.replaceState(t,``,d)}else{let s=z$2(z$2({},c),this.generateNgRouterState(o,this.browserPageId+1,e));this.location.go(t,``,s)}}restoreHistory(t,e=!1){if(this.canceledNavigationResolution===`computed`){let r=this.browserPageId,o=this.currentPageId-r;o!==0?this.location.historyGo(o):this.getCurrentUrlTree()===t.finalUrl&&o===0&&(this.resetInternalState(t),this.resetUrlToCurrentUrlTree())}else this.canceledNavigationResolution===`replace`&&(e&&this.resetInternalState(t),this.resetUrlToCurrentUrlTree())}resetInternalState({finalUrl:t}){this.routerState=this.stateMemento.routerState,this.currentUrlTree=this.stateMemento.currentUrlTree,this.rawUrlTree=this.urlHandlingStrategy.merge(this.currentUrlTree,t??this.rawUrlTree)}resetUrlToCurrentUrlTree(){this.location.replaceState(this.urlSerializer.serialize(this.getRawUrlTree()),``,this.generateNgRouterState(this.lastSuccessfulId,this.currentPageId))}generateNgRouterState(t,e,r){return this.canceledNavigationResolution===`computed`?z$2({navigationId:t,ɵrouterPageId:e},this.routerUrlState(r)):z$2({navigationId:t},this.routerUrlState(r))}static ɵfac=function(e){return new(e||n)};static ɵprov=Vr({token:n,factory:n.ɵfac})}return n})();function sr(n,a){n.events.pipe(Jn$1(t=>t instanceof dt||t instanceof Q$1||t instanceof Bt||t instanceof ht),Nt$1(t=>t instanceof dt||t instanceof ht?0:(t instanceof Q$1?t.code===O.Redirect||t.code===O.SupersededByNewNavigation:!1)?2:1),Jn$1(t=>t!==2),Ts$1(1)).subscribe(()=>{a()})}var ue$1=(()=>{class n{get currentUrlTree(){return this.stateManager.getCurrentUrlTree()}get rawUrlTree(){return this.stateManager.getRawUrlTree()}disposed=!1;nonRouterCurrentEntryChangeSubscription;console=y(Bw);stateManager=y(Qn);options=y(de$1,{optional:!0})||{};pendingTasks=y(ht$1);urlUpdateStrategy=this.options.urlUpdateStrategy||`deferred`;navigationTransitions=y(bi);urlSerializer=y(ce$1);location=y(k);urlHandlingStrategy=y(Zn);injector=y(ve);_events=new ee$1;get events(){return this._events}get routerState(){return this.stateManager.getRouterState()}navigated=!1;routeReuseStrategy=y(yi);injectorCleanup=y(vi,{optional:!0});onSameUrlNavigation=this.options.onSameUrlNavigation||`ignore`;config=y(Ge,{optional:!0})?.flat()??[];componentInputBindingEnabled=!!y(Kn,{optional:!0});currentNavigation=this.navigationTransitions.currentNavigation.asReadonly();constructor(){this.resetConfig(this.config),this.navigationTransitions.setupNavigations(this).subscribe({error:t=>{}}),this.subscribeToNavigationEvents()}eventsSubscription=new K$1;subscribeToNavigationEvents(){let t=this.navigationTransitions.events.subscribe(e=>{try{let r=this.navigationTransitions.currentTransition,o=le$2(this.navigationTransitions.currentNavigation);if(r!==null&&o!==null){if(this.stateManager.handleRouterEvent(e,o),e instanceof Q$1&&e.code!==O.Redirect&&e.code!==O.SupersededByNewNavigation)this.navigated=!0;else if(e instanceof dt)this.navigated=!0,this.injectorCleanup?.(this.routeReuseStrategy,this.routerState,this.config);else if(e instanceof ie){let i=e.navigationBehaviorOptions,c=this.urlHandlingStrategy.merge(e.url,r.currentRawUrl),s=z$2({scroll:r.extras.scroll,browserUrl:r.extras.browserUrl,info:r.extras.info,skipLocationChange:r.extras.skipLocationChange,replaceUrl:r.extras.replaceUrl||this.urlUpdateStrategy===`eager`||el(r.source)},i);this.scheduleNavigation(c,ke$1,null,s,r.hasUAVisualTransition,{resolve:r.resolve,reject:r.reject,promise:r.promise})}}rc(e)&&this._events.next(e)}catch(r){this.navigationTransitions.transitionAbortWithErrorSubject.next(r)}});this.eventsSubscription.add(t)}resetRootComponentType(t){this.routerState.root.component=t,this.navigationTransitions.rootComponentType=t}initialNavigation(){this.setUpLocationChangeListener(),this.navigationTransitions.hasRequestedNavigation||this.navigateToSyncWithBrowser(this.location.path(!0),ke$1,this.stateManager.restoredState(),{replaceUrl:!0})}setUpLocationChangeListener(){this.nonRouterCurrentEntryChangeSubscription??=this.stateManager.registerNonRouterCurrentEntryChangeListener((t,e,r,o,i)=>{this.navigateToSyncWithBrowser(t,r,e,o,i)})}navigateToSyncWithBrowser(t,e,r,o,i){let c=r?.navigationId?r:null,s=r?.ɵrouterUrl??t;if(r?.ɵrouterUrl&&(o=Q$2(z$2({},o),{browserUrl:t})),r){let u=z$2({},r);delete u.navigationId,delete u.ɵrouterPageId,delete u.ɵrouterUrl,Object.keys(u).length!==0&&(o.state=u)}let d=this.parseUrl(s);this.scheduleNavigation(d,e,c,o,i).catch(u=>{this.disposed||this.injector.get(gt$1)(u)})}get url(){return this.serializeUrl(this.currentUrlTree)}getCurrentNavigation(){return le$2(this.navigationTransitions.currentNavigation)}get lastSuccessfulNavigation(){return this.navigationTransitions.lastSuccessfulNavigation}resetConfig(t){this.config=t.map(rr),this.navigated=!1}ngOnDestroy(){this.dispose()}dispose(){this._events.unsubscribe(),this.navigationTransitions.complete(),this.nonRouterCurrentEntryChangeSubscription?.unsubscribe(),this.nonRouterCurrentEntryChangeSubscription=void 0,this.disposed=!0,this.eventsSubscription.unsubscribe()}createUrlTree(t,e={}){let{relativeTo:r,queryParams:o,fragment:i,queryParamsHandling:c,preserveFragment:s}=e,d=s?this.currentUrlTree.fragment:i,u=null;switch(c??this.options.defaultQueryParamsHandling){case`merge`:u=z$2(z$2({},this.currentUrlTree.queryParams),o);break;case`preserve`:u=this.currentUrlTree.queryParams;break;default:u=o||null}let f;try{f=$o(r?r.snapshot:this.routerState.snapshot.root)}catch{(typeof t[0]!=`string`||t[0][0]!==`/`)&&(t=[]),f=this.currentUrlTree.root}return Vo(f,t,u,d??null,this.urlSerializer)}navigateByUrl(t,e={skipLocationChange:!1}){let r=It$1(t)?t:this.parseUrl(t),o=this.urlHandlingStrategy.merge(r,this.rawUrlTree);return this.scheduleNavigation(o,ke$1,null,e)}navigate(t,e={skipLocationChange:!1}){return rl(t),this.navigateByUrl(this.createUrlTree(t,e),e)}serializeUrl(t){return this.urlSerializer.serialize(t)}parseUrl(t){try{return this.urlSerializer.parse(t)}catch{return this.console.warn(ur$1(4018,!1)),this.urlSerializer.parse(`/`)}}isActive(t,e){let r;if(e===!0?r=z$2({},ko):e===!1?r=z$2({},An):r=z$2(z$2({},An),e),It$1(t))return za(this.currentUrlTree,t,r);let o=this.parseUrl(t);return za(this.currentUrlTree,o,r)}scheduleNavigation(t,e,r,o,i,c){if(this.disposed)return Promise.resolve(!1);let s,d,u;c?(s=c.resolve,d=c.reject,u=c.promise):u=new Promise((p,w)=>{s=p,d=w});let f=this.pendingTasks.add();return sr(this,()=>{queueMicrotask(()=>this.pendingTasks.remove(f))}),this.navigationTransitions.handleNavigationRequest({source:e,restoredState:r,currentUrlTree:this.currentUrlTree,currentRawUrl:this.currentUrlTree,rawUrl:t,extras:o,hasUAVisualTransition:i,resolve:s,reject:d,promise:u,currentSnapshot:this.routerState.snapshot,currentRouterState:this.routerState}),u.catch(Promise.reject.bind(Promise))}static ɵfac=function(e){return new(e||n)};static ɵprov=Vr({token:n,factory:n.ɵfac})}return n})();function rl(n){for(let a=0;a<n.length;a++)if(n[a]==null)throw new C(4008,!1)}var sl=(()=>{class n{router=y(ue$1);stateManager=y(Qn);fragment=mt(``);queryParams=mt({});path=mt(``);serializer=y(ce$1);constructor(){this.updateState(),this.router.events?.subscribe(t=>{t instanceof dt&&this.updateState()})}updateState(){let{fragment:t,root:e,queryParams:r}=this.stateManager.getCurrentUrlTree();this.fragment.set(t),this.queryParams.set(r),this.path.set(this.serializer.serialize(new W(e)))}static ɵfac=function(e){return new(e||n)};static ɵprov=Vr({token:n,factory:n.ɵfac})}return n})();var _i=(()=>{class n{router;route;tabIndexAttribute;renderer;el;locationStrategy;hrefAttributeValue=y(new Zm(`href`),{optional:!0});reactiveHref=Vl$1(()=>{if(!this.isAnchorElement)return this.hrefAttributeValue;this.reactiveRouterState.path(),this._preserveFragment()&&this.reactiveRouterState.fragment();let t=e=>e===`preserve`||e===`merge`;return(t(this._queryParamsHandling())||t(this.options?.defaultQueryParamsHandling))&&this.reactiveRouterState.queryParams(),this.computeHref(this.createUrlTree())});get href(){return le$2(this.reactiveHref)}set href(t){this.reactiveHref.set(t)}set target(t){this._target.set(t)}get target(){return le$2(this._target)}_target=mt(void 0);set queryParams(t){this._queryParams.set(t)}get queryParams(){return le$2(this._queryParams)}_queryParams=mt(void 0,{equal:()=>!1});set fragment(t){this._fragment.set(t)}get fragment(){return le$2(this._fragment)}_fragment=mt(void 0);set queryParamsHandling(t){this._queryParamsHandling.set(t)}get queryParamsHandling(){return le$2(this._queryParamsHandling)}_queryParamsHandling=mt(void 0);set state(t){this._state.set(t)}get state(){return le$2(this._state)}_state=mt(void 0,{equal:()=>!1});set info(t){this._info.set(t)}get info(){return le$2(this._info)}_info=mt(void 0,{equal:()=>!1});set relativeTo(t){this._relativeTo.set(t)}get relativeTo(){return le$2(this._relativeTo)}_relativeTo=mt(void 0);set preserveFragment(t){this._preserveFragment.set(t)}get preserveFragment(){return le$2(this._preserveFragment)}_preserveFragment=mt(!1);set skipLocationChange(t){this._skipLocationChange.set(t)}get skipLocationChange(){return le$2(this._skipLocationChange)}_skipLocationChange=mt(!1);set replaceUrl(t){this._replaceUrl.set(t)}get replaceUrl(){return le$2(this._replaceUrl)}_replaceUrl=mt(!1);browserUrl=K1(void 0);isAnchorElement;onChanges=new ee$1;applicationErrorHandler=y(gt$1);options=y(de$1,{optional:!0});reactiveRouterState=y(sl);constructor(t,e,r,o,i,c){this.router=t,this.route=e,this.tabIndexAttribute=r,this.renderer=o,this.el=i,this.locationStrategy=c;let s=i.nativeElement.tagName?.toLowerCase();this.isAnchorElement=s===`a`||s===`area`||!!(typeof customElements==`object`&&customElements.get(s)?.observedAttributes?.includes?.(`href`))}setTabIndexIfNotOnNativeEl(t){this.tabIndexAttribute!=null||this.isAnchorElement||this.applyAttributeValue(`tabindex`,t)}ngOnChanges(t){this.onChanges.next(this)}routerLinkInput=mt(null);set routerLink(t){t==null?(this.routerLinkInput.set(null),this.setTabIndexIfNotOnNativeEl(null)):(It$1(t)?this.routerLinkInput.set(t):this.routerLinkInput.set(Array.isArray(t)?t:[t]),this.setTabIndexIfNotOnNativeEl(`0`))}onClick(t,e,r,o,i){let c=this.urlTree;if(c===null||this.isAnchorElement&&(t!==0||e||r||o||i||typeof this.target==`string`&&this.target!=`_self`))return!0;let s=this.browserUrl(),d=z$2({skipLocationChange:this.skipLocationChange,replaceUrl:this.replaceUrl,state:this.state,info:this.info},s!==void 0&&{browserUrl:s});return this.router.navigateByUrl(c,d)?.catch(u=>{this.applicationErrorHandler(u)}),!this.isAnchorElement}ngOnDestroy(){}applyAttributeValue(t,e){let r=this.renderer,o=this.el.nativeElement;e!==null?r.setAttribute(o,t,e):r.removeAttribute(o,t)}createUrlTree(){let t=this.routerLinkInput();return t===null||!this.router.createUrlTree?null:It$1(t)?t:this.router.createUrlTree(t,{relativeTo:this._relativeTo()!==void 0?this._relativeTo():this.route,queryParams:this._queryParams(),fragment:this._fragment(),queryParamsHandling:this._queryParamsHandling(),preserveFragment:this._preserveFragment()})}get urlTree(){return le$2(()=>this.createUrlTree())}computeHref(t){return t!==null&&this.locationStrategy?this.locationStrategy?.prepareExternalUrl(this.router.serializeUrl(t))??``:null}static ɵfac=function(e){return new(e||n)(ns$1(ue$1),ns$1(ft),pp(`tabindex`),ns$1(mc$1),ns$1(Hr),ns$1(m))};static ɵdir=uw({type:n,selectors:[[``,`routerLink`,``]],hostVars:2,hostBindings:function(e,r){e&1&&Zg(`click`,function(i){return r.onClick(i.button,i.ctrlKey,i.shiftKey,i.altKey,i.metaKey)}),e&2&&Hg(`href`,r.reactiveHref(),xI)(`target`,r._target())},inputs:{target:`target`,queryParams:`queryParams`,fragment:`fragment`,queryParamsHandling:`queryParamsHandling`,state:`state`,info:`info`,relativeTo:`relativeTo`,preserveFragment:[2,`preserveFragment`,`preserveFragment`,ij],skipLocationChange:[2,`skipLocationChange`,`skipLocationChange`,ij],replaceUrl:[2,`replaceUrl`,`replaceUrl`,ij],browserUrl:[1,`browserUrl`],routerLink:`routerLink`},features:[cE]})}return n})();var cl=new _$1(``);function ll(n,...a){return yr$1([{provide:Ge,multi:!0,useValue:n},{provide:ft,useFactory:dl},{provide:Zr,multi:!0,useFactory:ul},a.map(t=>t.ɵproviders)])}function dl(){return y(ue$1).routerState.root}function ul(){let n=y(ne$2);return a=>{let t=n.get(It$2);if(a!==t.components[0])return;let e=n.get(ue$1),r=n.get(ml);n.get(pl)===1&&e.initialNavigation(),n.get(fl,null,{optional:!0})?.setUpPreloading(),n.get(cl,null,{optional:!0})?.init(),e.resetRootComponentType(t.componentTypes[0]),r.closed||(r.next(),r.complete(),r.unsubscribe())}}var ml=new _$1(``,{factory:()=>new ee$1});var pl=new _$1(``,{factory:()=>1});var fl=new _$1(``);var Xn=/* @__PURE__ */ new WeakMap;var bt=(()=>{class n{_appRef;_injector=y(ne$2);_environmentInjector=y(ve);load(t){let e=this._appRef=this._appRef||this._injector.get(It$2),r=Xn.get(e);r||(r={loaders:/* @__PURE__ */ new Set,refs:[]},Xn.set(e,r),e.onDestroy(()=>{Xn.get(e)?.refs.forEach(o=>o.destroy()),Xn.delete(e)})),r.loaders.has(t)||(r.loaders.add(t),r.refs.push(cj(t,{environmentInjector:this._environmentInjector})))}static ɵfac=function(e){return new(e||n)};static ɵprov=Vr({token:n,factory:n.ɵfac})}return n})();var ta=(()=>{class n{static ɵfac=function(e){return new(e||n)};static ɵcmp=iw({type:n,selectors:[[`ng-component`]],exportAs:[`cdkVisuallyHidden`],decls:0,vars:0,template:function(e,r){},styles:[`.cdk-visually-hidden {
  border: 0;
  clip: rect(0 0 0 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  width: 1px;
  white-space: nowrap;
  outline: 0;
  -webkit-appearance: none;
  -moz-appearance: none;
  left: 0;
}
[dir=rtl] .cdk-visually-hidden {
  left: auto;
  right: 0;
}
`],encapsulation:2})}return n})();var Jn;function hl(){if(Jn===void 0&&(Jn=null,typeof window<`u`)){let n=window;if(n.trustedTypes!==void 0)try{Jn=n.trustedTypes.createPolicy(`angular#components`,{createHTML:a=>a})}catch(a){console.error(a)}}return Jn}function Ht(n){return hl()?.createHTML(n)||n}function Si(n,a,t){n.innerHTML=Ht(t.sanitize(J$2.HTML,a)||``)}function wi$1(n){return Error(`Unable to find icon with the name "${n}"`)}function bl(){return Error(`Could not find HttpClient for use with Angular Material icons. Please add provideHttpClient() to your providers.`)}function Ei(n){return Error(`The URL provided to MatIconRegistry was not trusted as a resource URL via Angular's DomSanitizer. Attempted URL was "${n}".`)}function xi(n){return Error(`The literal provided to MatIconRegistry was not trusted as safe HTML by Angular's DomSanitizer. Attempted literal was "${n}".`)}var gt=class{url;svgText;options;svgElement=null;constructor(a,t,e){this.url=a,this.svgText=t,this.options=e}};var Ii=(()=>{class n{_httpClient;_sanitizer;_errorHandler;_document;_svgIconConfigs=/* @__PURE__ */ new Map;_iconSetConfigs=/* @__PURE__ */ new Map;_cachedIconsByUrl=/* @__PURE__ */ new Map;_inProgressUrlFetches=/* @__PURE__ */ new Map;_fontCssClassesByAlias=/* @__PURE__ */ new Map;_resolvers=[];_defaultFontSetClass;constructor(t,e,r,o){this._httpClient=t,this._sanitizer=e,this._errorHandler=o,this._document=r}addSvgIcon(t,e,r){return this.addSvgIconInNamespace(``,t,e,r)}addSvgIconLiteral(t,e,r){return this.addSvgIconLiteralInNamespace(``,t,e,r)}addSvgIconInNamespace(t,e,r,o){return this._addSvgIconConfig(t,e,new gt(r,null,o))}addSvgIconResolver(t){return this._resolvers.push(t),this}addSvgIconLiteralInNamespace(t,e,r,o){let i=this._sanitizer.sanitize(J$2.HTML,r);if(!i)throw xi(r);let c=Ht(i);return this._addSvgIconConfig(t,e,new gt(``,c,o))}addSvgIconSet(t,e){return this.addSvgIconSetInNamespace(``,t,e)}addSvgIconSetLiteral(t,e){return this.addSvgIconSetLiteralInNamespace(``,t,e)}addSvgIconSetInNamespace(t,e,r){return this._addSvgIconSetConfig(t,new gt(e,null,r))}addSvgIconSetLiteralInNamespace(t,e,r){let o=this._sanitizer.sanitize(J$2.HTML,e);if(!o)throw xi(e);let i=Ht(o);return this._addSvgIconSetConfig(t,new gt(``,i,r))}registerFontClassAlias(t,e=t){return this._fontCssClassesByAlias.set(t,e),this}classNameForFontAlias(t){return this._fontCssClassesByAlias.get(t)||t}setDefaultFontSetClass(...t){return this._defaultFontSetClass=t,this}getDefaultFontSetClass(){return this._defaultFontSetClass??=vl(this._document),this._defaultFontSetClass}getSvgIconFromUrl(t){let e=this._sanitizer.sanitize(J$2.RESOURCE_URL,t);if(!e)throw Ei(t);let r=this._cachedIconsByUrl.get(e);return r?_y(ea(r)):this._loadSvgIconFromConfig(new gt(t,null)).pipe(gy(o=>this._cachedIconsByUrl.set(e,o)),Nt$1(o=>ea(o)))}getNamedSvgIcon(t,e=``){let r=Ni(e,t),o=this._svgIconConfigs.get(r);if(o)return this._getSvgFromConfig(o);if(o=this._getIconConfigFromResolvers(e,t),o)return this._svgIconConfigs.set(r,o),this._getSvgFromConfig(o);let i=this._iconSetConfigs.get(e);return i?this._getSvgFromIconSetConfigs(t,i):My(wi$1(r))}ngOnDestroy(){this._resolvers=[],this._svgIconConfigs.clear(),this._iconSetConfigs.clear(),this._cachedIconsByUrl.clear()}_getSvgFromConfig(t){return t.svgText?_y(ea(this._svgElementFromConfig(t))):this._loadSvgIconFromConfig(t).pipe(Nt$1(e=>ea(e)))}_getSvgFromIconSetConfigs(t,e){let r=this._extractIconWithNameFromAnySet(t,e);if(r)return _y(r);let o=e.filter(i=>!i.svgText).map(i=>this._loadSvgIconSetFromConfig(i).pipe(Ou(c=>{let d=`Loading icon set URL: ${this._sanitizer.sanitize(J$2.RESOURCE_URL,i.url)} failed: ${c.message}`;return this._errorHandler.handleError(new Error(d)),_y(null)})));return Vy(o).pipe(Nt$1(()=>{let i=this._extractIconWithNameFromAnySet(t,e);if(!i)throw wi$1(t);return i}))}_extractIconWithNameFromAnySet(t,e){for(let r=e.length-1;r>=0;r--){let o=e[r];if(o.svgText&&o.svgText.toString().indexOf(t)>-1){let i=this._svgElementFromConfig(o),c=this._extractSvgIconFromSet(i,t,o.options);if(c)return c}}return null}_loadSvgIconFromConfig(t){return this._fetchIcon(t).pipe(gy(e=>t.svgText=e),Nt$1(()=>this._svgElementFromConfig(t)))}_loadSvgIconSetFromConfig(t){return t.svgText?_y(null):this._fetchIcon(t).pipe(gy(e=>t.svgText=e))}_extractSvgIconFromSet(t,e,r){let o=t.querySelector(`[id="${e}"]`);if(!o)return null;let i=o.cloneNode(!0);if(i.removeAttribute(`id`),i.nodeName.toLowerCase()===`svg`)return this._setSvgAttributes(i,r);if(i.nodeName.toLowerCase()===`symbol`)return this._setSvgAttributes(this._toSvgElement(i),r);let c=this._svgElementFromString(Ht(`<svg></svg>`));return c.appendChild(i),this._setSvgAttributes(c,r)}_svgElementFromString(t){let e=this._document.createElement(`DIV`);e.innerHTML=t;let r=e.querySelector(`svg`);if(!r)throw Error(`<svg> tag not found`);return r}_toSvgElement(t){let e=this._svgElementFromString(Ht(`<svg></svg>`)),r=t.attributes;for(let o=0;o<r.length;o++){let{name:i,value:c}=r[o],s=i.toLowerCase();s!==`id`&&!s.startsWith(`on`)&&e.setAttribute(i,c)}for(let o=0;o<t.childNodes.length;o++)t.childNodes[o].nodeType===this._document.ELEMENT_NODE&&e.appendChild(t.childNodes[o].cloneNode(!0));return e}_setSvgAttributes(t,e){return t.setAttribute(`fit`,``),t.setAttribute(`height`,`100%`),t.setAttribute(`width`,`100%`),t.setAttribute(`preserveAspectRatio`,`xMidYMid meet`),t.setAttribute(`focusable`,`false`),e&&e.viewBox&&t.setAttribute(`viewBox`,e.viewBox),t}_fetchIcon(t){let{url:e,options:r}=t,o=r?.withCredentials??!1;if(!this._httpClient)throw bl();if(e==null)throw Error(`Cannot fetch icon from URL "${e}".`);let i=this._sanitizer.sanitize(J$2.RESOURCE_URL,e);if(!i)throw Ei(e);let c=this._inProgressUrlFetches.get(i);if(c)return c;let s=this._httpClient.get(i,{responseType:`text`,withCredentials:o}).pipe(Nt$1(d=>Ht(d)),zy(()=>this._inProgressUrlFetches.delete(i)),Cs());return this._inProgressUrlFetches.set(i,s),s}_addSvgIconConfig(t,e,r){return this._svgIconConfigs.set(Ni(t,e),r),this}_addSvgIconSetConfig(t,e){let r=this._iconSetConfigs.get(t);return r?r.push(e):this._iconSetConfigs.set(t,[e]),this}_svgElementFromConfig(t){if(!t.svgElement){let e=this._svgElementFromString(t.svgText);this._setSvgAttributes(e,t.options),t.svgElement=e}return t.svgElement}_getIconConfigFromResolvers(t,e){for(let r=0;r<this._resolvers.length;r++){let o=this._resolvers[r](e,t);if(o)return gl(o)?new gt(o.url,null,o.options):new gt(o,null)}}static ɵfac=function(e){return new(e||n)(Le$3(ge$1,8),Le$3(Ae$1),Le$3(pt,8),Le$3(st$1))};static ɵprov=se$2({token:n,factory:n.ɵfac,providedIn:`root`})}return n})();function ea(n){return n.cloneNode(!0)}function Ni(n,a){return n+`:`+a}function gl(n){return!!(n.url&&n.options)}function vl(n){let a=null,t=!1;return n.fonts&&typeof n.fonts.forEach==`function`&&n.fonts.forEach(e=>{let r=e.family.replace(/['"]/g,``).trim().toLowerCase();(r===`material icons`||r.startsWith(`material icons `))&&(t=!0),r.startsWith(`material symbols rounded`)?a=`rounded`:r.startsWith(`material symbols sharp`)?a=`sharp`:r.startsWith(`material symbols`)&&(a=`outlined`)}),[a&&!t?`material-symbols-${a}`:`material-icons`,`mat-ligature-font`]}var yl=new _$1(`cdk-dir-doc`,{providedIn:`root`,factory:()=>y(pt)});var _l=/^(ar|ckb|dv|he|iw|fa|nqo|ps|sd|ug|ur|yi|.*[-_](Adlm|Arab|Hebr|Nkoo|Rohg|Thaa))(?!.*[-_](Latn|Cyrl)($|-|_))($|-|_)/i;function Ci(n){let a=n?.toLowerCase()||``;return a===`auto`&&typeof navigator<`u`&&navigator?.language?_l.test(navigator.language)?`rtl`:`ltr`:a===`rtl`?`rtl`:`ltr`}var Sl=(()=>{class n{get value(){return this.valueSignal()}valueSignal=mt(`ltr`);change=new qe$1;constructor(){let t=y(yl,{optional:!0});if(t){let e=t.body?t.body.dir:null,r=t.documentElement?t.documentElement.dir:null;this.valueSignal.set(Ci(e||r||`ltr`))}}ngOnDestroy(){this.change.complete()}static ɵfac=function(e){return new(e||n)};static ɵprov=Vr({token:n,factory:n.ɵfac})}return n})();var Hm=(()=>{class n{static ɵfac=function(e){return new(e||n)};static ɵmod=aw({type:n});static ɵinj=Ju({})}return n})();var wl=new _$1(`MAT_ICON_DEFAULT_OPTIONS`);var El=new _$1(`mat-icon-location`,{providedIn:`root`,factory:()=>{let n=y(pt),a=n?n.location:null;return{getPathname:()=>a?a.pathname+a.search:``}}});var Ri=[`clip-path`,`color-profile`,`src`,`cursor`,`fill`,`filter`,`marker`,`marker-start`,`marker-mid`,`marker-end`,`mask`,`stroke`];var xl=Ri.map(n=>`[${n}]`).join(`, `);var Nl=/^url\(['"]?#(.*?)['"]?\)$/;var Xm=(()=>{class n{_elementRef=y(Hr);_iconRegistry=y(Ii);_location=y(El);_errorHandler=y(st$1);_defaultColor;get color(){return this._color||this._defaultColor}set color(t){this._color=t}_color;inline=!1;get svgIcon(){return this._svgIcon}set svgIcon(t){t!==this._svgIcon&&(t?this._updateSvgIcon(t):this._svgIcon&&this._clearSvgElement(),this._svgIcon=t)}_svgIcon;get fontSet(){return this._fontSet}set fontSet(t){let e=this._cleanupFontValue(t);e!==this._fontSet&&(this._fontSet=e,this._updateFontIconClasses())}_fontSet;get fontIcon(){return this._fontIcon}set fontIcon(t){let e=this._cleanupFontValue(t);e!==this._fontIcon&&(this._fontIcon=e,this._updateFontIconClasses())}_fontIcon;_previousFontSetClass=[];_previousFontIconClass;_svgName=null;_svgNamespace=null;_previousPath;_elementsWithExternalReferences;_currentIconFetch=K$1.EMPTY;constructor(){let t=y(new Zm(`aria-hidden`),{optional:!0}),e=y(wl,{optional:!0});e&&(e.color&&(this.color=this._defaultColor=e.color),e.fontSet&&(this.fontSet=e.fontSet)),t||this._elementRef.nativeElement.setAttribute(`aria-hidden`,`true`)}_splitIconName(t){if(!t)return[``,``];let e=t.split(`:`);switch(e.length){case 1:return[``,e[0]];case 2:return e;default:throw Error(`Invalid icon name: "${t}"`)}}ngOnInit(){this._updateFontIconClasses()}ngAfterViewChecked(){let t=this._elementsWithExternalReferences;if(t&&t.size){let e=this._location.getPathname();e!==this._previousPath&&(this._previousPath=e,this._prependPathToReferences(e))}}ngOnDestroy(){this._currentIconFetch.unsubscribe(),this._elementsWithExternalReferences&&this._elementsWithExternalReferences.clear()}_usingFontIcon(){return!this.svgIcon}_setSvgElement(t){this._clearSvgElement();let e=this._location.getPathname();this._previousPath=e,this._cacheChildrenWithExternalReferences(t),this._prependPathToReferences(e),this._elementRef.nativeElement.appendChild(t)}_clearSvgElement(){let t=this._elementRef.nativeElement,e=t.childNodes.length;for(this._elementsWithExternalReferences&&this._elementsWithExternalReferences.clear();e--;){let r=t.childNodes[e];(r.nodeType!==1||r.nodeName.toLowerCase()===`svg`)&&r.remove()}}_updateFontIconClasses(){if(!this._usingFontIcon())return;let t=this._elementRef.nativeElement,e=(this.fontSet?this._iconRegistry.classNameForFontAlias(this.fontSet).split(/ +/):this._iconRegistry.getDefaultFontSetClass()).filter(r=>r.length>0);this._previousFontSetClass.forEach(r=>t.classList.remove(r)),e.forEach(r=>t.classList.add(r)),this._previousFontSetClass=e,this.fontIcon!==this._previousFontIconClass&&!e.includes(`mat-ligature-font`)&&(this._previousFontIconClass&&t.classList.remove(this._previousFontIconClass),this.fontIcon&&t.classList.add(this.fontIcon),this._previousFontIconClass=this.fontIcon)}_cleanupFontValue(t){return typeof t==`string`?t.trim().split(` `)[0]:t}_prependPathToReferences(t){let e=this._elementsWithExternalReferences,r=t.startsWith(`//`)?`/.${t}`:t;e&&e.forEach((o,i)=>{o.forEach(c=>{i.setAttribute(c.name,`url('${r}#${c.value}')`)})})}_cacheChildrenWithExternalReferences(t){let e=t.querySelectorAll(xl),r=this._elementsWithExternalReferences=this._elementsWithExternalReferences||/* @__PURE__ */ new Map;for(let o=0;o<e.length;o++)Ri.forEach(i=>{let c=e[o],s=c.getAttribute(i),d=s?s.match(Nl):null;if(d){let u=r.get(c);u||(u=[],r.set(c,u)),u.push({name:i,value:d[1]})}})}_updateSvgIcon(t){if(this._svgNamespace=null,this._svgName=null,this._currentIconFetch.unsubscribe(),t){let[e,r]=this._splitIconName(t);e&&(this._svgNamespace=e),r&&(this._svgName=r),this._currentIconFetch=this._iconRegistry.getNamedSvgIcon(r,e).pipe(Ts$1(1)).subscribe(o=>this._setSvgElement(o),o=>{let i=`Error retrieving icon ${e}:${r}! ${o.message}`;this._errorHandler.handleError(new Error(i))})}}static ɵfac=function(e){return new(e||n)};static ɵcmp=(function(){return iw({type:n,selectors:[[`mat-icon`]],hostAttrs:[`role`,`img`,1,`mat-icon`,`notranslate`],hostVars:10,hostBindings:function(r,o){r&2&&(Hg(`data-mat-icon-type`,o._usingFontIcon()?`font`:`svg`)(`data-mat-icon-name`,o._svgName||o.fontIcon)(`data-mat-icon-namespace`,o._svgNamespace||o.fontSet)(`fontIcon`,o._usingFontIcon()?o.fontIcon:null),PC(o.color?`mat-`+o.color:``),am(`mat-icon-inline`,o.inline)(`mat-icon-no-color`,o.color!==`primary`&&o.color!==`accent`&&o.color!==`warn`))},inputs:{color:`color`,inline:[2,`inline`,`inline`,ij],svgIcon:`svgIcon`,fontSet:`fontSet`,fontIcon:`fontIcon`},exportAs:[`matIcon`],ngContentSelectors:[`*`],decls:1,vars:0,template:function(r,o){r&1&&(gC(),mC(0))},styles:[`mat-icon, mat-icon.mat-primary, mat-icon.mat-accent, mat-icon.mat-warn {
  color: var(--%NS%mat-icon-color, inherit);
}

.mat-icon {
  -webkit-user-select: none;
  user-select: none;
  background-repeat: no-repeat;
  display: inline-block;
  fill: currentColor;
  height: 24px;
  width: 24px;
  overflow: hidden;
}
.mat-icon.mat-icon-inline {
  font-size: inherit;
  height: inherit;
  line-height: inherit;
  width: inherit;
}
.mat-icon.mat-ligature-font[fontIcon]::before {
  content: attr(fontIcon);
}

[dir=rtl] .mat-icon-rtl-mirror {
  transform: scale(-1, 1);
}

.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon,
.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon {
  display: block;
}
.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon-button .mat-icon,
.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon-button .mat-icon {
  margin: auto;
}
`],encapsulation:2})})()}return n})();function Ke(n){return n.buttons===0||n.detail===0}function Ye(n){let a=n.touches&&n.touches[0]||n.changedTouches&&n.changedTouches[0];return!!a&&a.identifier===-1&&(a.radiusX==null||a.radiusX===1)&&(a.radiusY==null||a.radiusY===1)}var cr;function Mi(){if(cr==null){let n=typeof document<`u`?document.head:null;cr=!!(n&&(n.createShadowRoot||n.attachShadow))}return cr}function lr(n){if(Mi()){let a=n.getRootNode?n.getRootNode():null;if(typeof ShadowRoot<`u`&&ShadowRoot&&a instanceof ShadowRoot)return a}return null}function Il(){let n=typeof document<`u`&&document?document.activeElement:null;for(;n&&n.shadowRoot;){let a=n.shadowRoot.activeElement;if(a===n)break;n=a}return n}function nt$1(n){if(n.composedPath)try{return n.composedPath()[0]}catch{}return n.target}var dr;try{dr=typeof Intl<`u`&&Intl.v8BreakIterator}catch{dr=!1}var V$1=(()=>{class n{_platformId=y($v);isBrowser=this._platformId?An$1(this._platformId):typeof document==`object`&&!!document;EDGE=this.isBrowser&&/(edge)/i.test(navigator.userAgent);TRIDENT=this.isBrowser&&/(msie|trident)/i.test(navigator.userAgent);BLINK=this.isBrowser&&!!(window.chrome||dr)&&typeof CSS<`u`&&!this.EDGE&&!this.TRIDENT;WEBKIT=this.isBrowser&&/AppleWebKit/i.test(navigator.userAgent)&&!this.BLINK&&!this.EDGE&&!this.TRIDENT;IOS=this.isBrowser&&/iPad|iPhone|iPod/.test(navigator.userAgent)&&!(`MSStream`in window);FIREFOX=this.isBrowser&&/(firefox|minefield)/i.test(navigator.userAgent);ANDROID=this.isBrowser&&/android/i.test(navigator.userAgent)&&!this.TRIDENT;SAFARI=this.isBrowser&&/safari/i.test(navigator.userAgent)&&this.WEBKIT;static ɵfac=function(e){return new(e||n)};static ɵprov=Vr({token:n,factory:n.ɵfac})}return n})();var Ze;function Ai(){if(Ze==null&&typeof window<`u`)try{window.addEventListener(`test`,null,Object.defineProperty({},"passive",{get:()=>Ze=!0}))}finally{Ze=Ze||!1}return Ze}function me$1(n){return Ai()?n:!!n.capture}function Cl(n,a=0){return Ti(n)?Number(n):arguments.length===2?a:0}function Ti(n){return!isNaN(parseFloat(n))&&!isNaN(Number(n))}function Rt(n){return n instanceof Hr?n.nativeElement:n}var Di=new _$1(`cdk-input-modality-detector-options`);var ki={ignoreKeys:[18,17,224,91,16]};var Oi=650;var ur={passive:!0,capture:!0};var Pi=(()=>{class n{_platform=y(V$1);_listenerCleanups;modalityDetected;modalityChanged;get mostRecentModality(){return this._modality.value}_mostRecentTarget=null;_modality=new zn$1(null);_options;_lastTouchMs=0;_onKeydown=t=>{this._options?.ignoreKeys?.some(e=>e===t.keyCode)||(this._modality.next(`keyboard`),this._mostRecentTarget=nt$1(t))};_onMousedown=t=>{Date.now()-this._lastTouchMs<Oi||(this._modality.next(Ke(t)?`keyboard`:`mouse`),this._mostRecentTarget=nt$1(t))};_onTouchstart=t=>{if(Ye(t)){this._modality.next(`keyboard`);return}this._lastTouchMs=Date.now(),this._modality.next(`touch`),this._mostRecentTarget=nt$1(t)};constructor(){let t=y(Pe$2),e=y(pt),r=y(Di,{optional:!0});if(this._options=z$2(z$2({},ki),r),this.modalityDetected=this._modality.pipe(Jy(1)),this.modalityChanged=this.modalityDetected.pipe(Wy()),this._platform.isBrowser){let o=y(Lr).createRenderer(null,null);this._listenerCleanups=t.runOutsideAngular(()=>[o.listen(e,`keydown`,this._onKeydown,ur),o.listen(e,`mousedown`,this._onMousedown,ur),o.listen(e,`touchstart`,this._onTouchstart,ur)])}}ngOnDestroy(){this._modality.complete(),this._listenerCleanups?.forEach(t=>t())}static ɵfac=function(e){return new(e||n)};static ɵprov=Vr({token:n,factory:n.ɵfac})}return n})();var Qe=(function(n){return n[n.IMMEDIATE=0]=`IMMEDIATE`,n[n.EVENTUAL=1]=`EVENTUAL`,n})(Qe||{});var Li=new _$1(`cdk-focus-monitor-default-options`);var na=me$1({passive:!0,capture:!0});var mr=(()=>{class n{_ngZone=y(Pe$2);_platform=y(V$1);_inputModalityDetector=y(Pi);_origin=null;_lastFocusOrigin=null;_windowFocused=!1;_windowFocusTimeoutId;_originTimeoutId;_originFromTouchInteraction=!1;_elementInfo=/* @__PURE__ */ new Map;_monitoredElementCount=0;_rootNodeFocusListenerCount=/* @__PURE__ */ new Map;_detectionMode;_windowFocusListener=()=>{this._windowFocused=!0,this._windowFocusTimeoutId=setTimeout(()=>this._windowFocused=!1)};_document=y(pt);_stopInputModalityDetector=new ee$1;constructor(){let t=y(Li,{optional:!0});this._detectionMode=t?.detectionMode||Qe.IMMEDIATE}_rootNodeFocusAndBlurListener=t=>{let e=nt$1(t);for(let r=e;r;r=r.parentElement)t.type===`focus`?this._onFocus(t,r):this._onBlur(t,r)};monitor(t,e=!1){let r=Rt(t);if(!this._platform.isBrowser||r.nodeType!==1)return _y();let o=lr(r)||this._document,i=this._elementInfo.get(r);if(i)return e&&(i.checkChildren=!0),i.subject;let c={checkChildren:e,subject:new ee$1,rootNode:o};return this._elementInfo.set(r,c),this._registerGlobalListeners(c),c.subject}stopMonitoring(t){let e=Rt(t),r=this._elementInfo.get(e);r&&(r.subject.complete(),this._setClasses(e),this._elementInfo.delete(e),this._removeGlobalListeners(r))}focusVia(t,e,r){let o=Rt(t);o===this._document.activeElement?this._getClosestElementsInfo(o).forEach(([c,s])=>this._originChanged(c,e,s)):(this._setOrigin(e),typeof o.focus==`function`&&o.focus(r))}ngOnDestroy(){this._elementInfo.forEach((t,e)=>this.stopMonitoring(e))}_getWindow(){return this._document.defaultView||window}_getFocusOrigin(t){return this._origin?this._originFromTouchInteraction?this._shouldBeAttributedToTouch(t)?`touch`:`program`:this._origin:this._windowFocused&&this._lastFocusOrigin?this._lastFocusOrigin:t&&this._isLastInteractionFromInputLabel(t)?`mouse`:`program`}_shouldBeAttributedToTouch(t){return this._detectionMode===Qe.EVENTUAL||!!t?.contains(this._inputModalityDetector._mostRecentTarget)}_setClasses(t,e){t.classList.toggle(`cdk-focused`,!!e),t.classList.toggle(`cdk-touch-focused`,e===`touch`),t.classList.toggle(`cdk-keyboard-focused`,e===`keyboard`),t.classList.toggle(`cdk-mouse-focused`,e===`mouse`),t.classList.toggle(`cdk-program-focused`,e===`program`)}_setOrigin(t,e=!1){this._ngZone.runOutsideAngular(()=>{if(this._origin=t,this._originFromTouchInteraction=t===`touch`&&e,this._detectionMode===Qe.IMMEDIATE){clearTimeout(this._originTimeoutId);let r=this._originFromTouchInteraction?Oi:1;this._originTimeoutId=setTimeout(()=>this._origin=null,r)}})}_onFocus(t,e){let r=this._elementInfo.get(e),o=nt$1(t);!r||!r.checkChildren&&e!==o||this._originChanged(e,this._getFocusOrigin(o),r)}_onBlur(t,e){let r=this._elementInfo.get(e);!r||r.checkChildren&&t.relatedTarget instanceof Node&&e.contains(t.relatedTarget)||(this._setClasses(e),this._emitOrigin(r,null))}_emitOrigin(t,e){t.subject.observers.length&&this._ngZone.run(()=>t.subject.next(e))}_registerGlobalListeners(t){if(!this._platform.isBrowser)return;let e=t.rootNode,r=this._rootNodeFocusListenerCount.get(e)||0;r||this._ngZone.runOutsideAngular(()=>{e.addEventListener(`focus`,this._rootNodeFocusAndBlurListener,na),e.addEventListener(`blur`,this._rootNodeFocusAndBlurListener,na)}),this._rootNodeFocusListenerCount.set(e,r+1),++this._monitoredElementCount===1&&(this._ngZone.runOutsideAngular(()=>{this._getWindow().addEventListener(`focus`,this._windowFocusListener)}),this._inputModalityDetector.modalityDetected.pipe(tv(this._stopInputModalityDetector)).subscribe(o=>{this._setOrigin(o,!0)}))}_removeGlobalListeners(t){let e=t.rootNode;if(this._rootNodeFocusListenerCount.has(e)){let r=this._rootNodeFocusListenerCount.get(e);r>1?this._rootNodeFocusListenerCount.set(e,r-1):(e.removeEventListener(`focus`,this._rootNodeFocusAndBlurListener,na),e.removeEventListener(`blur`,this._rootNodeFocusAndBlurListener,na),this._rootNodeFocusListenerCount.delete(e))}--this._monitoredElementCount||(this._getWindow().removeEventListener(`focus`,this._windowFocusListener),this._stopInputModalityDetector.next(),clearTimeout(this._windowFocusTimeoutId),clearTimeout(this._originTimeoutId))}_originChanged(t,e,r){this._setClasses(t,e),this._emitOrigin(r,e),this._lastFocusOrigin=e}_getClosestElementsInfo(t){let e=[];return this._elementInfo.forEach((r,o)=>{(o===t||r.checkChildren&&o.contains(t))&&e.push([o,r])}),e}_isLastInteractionFromInputLabel(t){let{_mostRecentTarget:e,mostRecentModality:r}=this._inputModalityDetector;if(r!==`mouse`||!e||e===t||t.nodeName!==`INPUT`&&t.nodeName!==`TEXTAREA`||t.disabled)return!1;let o=t.labels;if(o){for(let i=0;i<o.length;i++)if(o[i].contains(e))return!0}return!1}static ɵfac=function(e){return new(e||n)};static ɵprov=Vr({token:n,factory:n.ɵfac})}return n})();function pr(n){return Array.isArray(n)?n:[n]}var Ui=/* @__PURE__ */ new Set;var $t;var aa=(()=>{class n{_platform=y(V$1);_nonce=y(Gv,{optional:!0});_matchMedia;constructor(){this._matchMedia=this._platform.isBrowser&&window.matchMedia?window.matchMedia.bind(window):Ml}matchMedia(t){return(this._platform.WEBKIT||this._platform.BLINK)&&Rl(t,this._nonce),this._matchMedia(t)}static ɵfac=function(e){return new(e||n)};static ɵprov=Vr({token:n,factory:n.ɵfac})}return n})();function Rl(n,a){if(!Ui.has(n))try{$t||($t=document.createElement(`style`),a&&$t.setAttribute(`nonce`,a),$t.setAttribute(`type`,`text/css`),document.head.appendChild($t)),$t.sheet&&($t.sheet.insertRule(`@media ${n.replace(/[{}]/g,``)} {body{ }}`,0),Ui.add(n))}catch(t){console.error(t)}}function Ml(n){return{matches:n===`all`||n===``,media:n,addListener:()=>{},removeListener:()=>{}}}var Al=(()=>{class n{_mediaMatcher=y(aa);_zone=y(Pe$2);_queries=/* @__PURE__ */ new Map;_destroySubject=new ee$1;ngOnDestroy(){this._destroySubject.next(),this._destroySubject.complete()}isMatched(t){return Fi(pr(t)).some(r=>this._registerQuery(r).mql.matches)}observe(t){let r=Fi(pr(t)).map(i=>this._registerQuery(i).observable),o=Py(r);return o=Mo$1(o.pipe(Ts$1(1)),o.pipe(Jy(1),$y(0))),o.pipe(Nt$1(i=>{let c={matches:!1,breakpoints:{}};return i.forEach(({matches:s,query:d})=>{c.matches=c.matches||s,c.breakpoints[d]=s}),c}))}_registerQuery(t){if(this._queries.has(t))return this._queries.get(t);let e=this._mediaMatcher.matchMedia(t),o={observable:new x(i=>{let c=s=>this._zone.run(()=>i.next(s));return e.addListener(c),()=>{e.removeListener(c)}}).pipe(Xy(e),Nt$1(({matches:i})=>({query:t,matches:i})),tv(this._destroySubject)),mql:e};return this._queries.set(t,o),o}static ɵfac=function(e){return new(e||n)};static ɵprov=Vr({token:n,factory:n.ɵfac})}return n})();function Fi(n){return n.map(a=>a.split(`,`)).reduce((a,t)=>a.concat(t)).map(a=>a.trim())}var Tl=(()=>{class n{_platform=y(V$1);isDisabled(t){return t.hasAttribute(`disabled`)}isVisible(t){return kl(t)&&getComputedStyle(t).visibility===`visible`}isTabbable(t){if(!this._platform.isBrowser)return!1;let e=Dl(Bl(t));if(e&&(ji(e)===-1||!this.isVisible(e)))return!1;let r=t.nodeName.toLowerCase(),o=ji(t);return t.hasAttribute(`contenteditable`)?o!==-1:r===`iframe`||r===`object`||this._platform.WEBKIT&&this._platform.IOS&&!jl(t)?!1:r===`audio`?t.hasAttribute(`controls`)?o!==-1:!1:r===`video`?o===-1?!1:o!==null?!0:this._platform.FIREFOX||t.hasAttribute(`controls`):t.tabIndex>=0}isFocusable(t,e){return zl(t)&&!this.isDisabled(t)&&(e?.ignoreInert||!t.closest?.(`[inert]`))&&(e?.ignoreVisibility||this.isVisible(t))}static ɵfac=function(e){return new(e||n)};static ɵprov=Vr({token:n,factory:n.ɵfac})}return n})();function Dl(n){try{return n.frameElement}catch{return null}}function kl(n){return!!(n.offsetWidth||n.offsetHeight||typeof n.getClientRects==`function`&&n.getClientRects().length)}function Ol(n){let a=n.nodeName.toLowerCase();return a===`input`||a===`select`||a===`button`||a===`textarea`}function Pl(n){return Ul(n)&&n.type==`hidden`}function Ll(n){return Fl(n)&&n.hasAttribute(`href`)}function Ul(n){return n.nodeName.toLowerCase()==`input`}function Fl(n){return n.nodeName.toLowerCase()==`a`}function zi(n){if(!n.hasAttribute(`tabindex`)||n.tabIndex===void 0)return!1;let a=n.getAttribute(`tabindex`);return!!(a&&!isNaN(parseInt(a,10)))}function ji(n){if(!zi(n))return null;let a=parseInt(n.getAttribute(`tabindex`)||``,10);return isNaN(a)?-1:a}function jl(n){let a=n.nodeName.toLowerCase(),t=a===`input`&&n.type;return t===`text`||t===`password`||a===`select`||a===`textarea`}function zl(n){return Pl(n)?!1:Ol(n)||Ll(n)||n.hasAttribute(`contenteditable`)||zi(n)}function Bl(n){return n.ownerDocument&&n.ownerDocument.defaultView||window}var fr=class{_element;_checker;_ngZone;_document;_injector;_startAnchor=null;_endAnchor=null;_hasAttached=!1;startAnchorListener=()=>{!this.focusLastTabbableElement()&&this._checker.isFocusable(this._element)&&this._element.focus()};endAnchorListener=()=>{!this.focusFirstTabbableElement()&&this._checker.isFocusable(this._element)&&this._element.focus()};get enabled(){return this._enabled}set enabled(a){this._enabled=a,this._startAnchor&&this._endAnchor&&(this._toggleAnchorTabIndex(a,this._startAnchor),this._toggleAnchorTabIndex(a,this._endAnchor))}_enabled=!0;constructor(a,t,e,r,o=!1,i){this._element=a,this._checker=t,this._ngZone=e,this._document=r,this._injector=i,o||this.attachAnchors()}destroy(){let a=this._startAnchor,t=this._endAnchor;a&&(a.removeEventListener(`focus`,this.startAnchorListener),a.remove()),t&&(t.removeEventListener(`focus`,this.endAnchorListener),t.remove()),this._startAnchor=this._endAnchor=null,this._hasAttached=!1}attachAnchors(){return this._hasAttached?!0:(this._ngZone.runOutsideAngular(()=>{this._startAnchor||(this._startAnchor=this._createAnchor(),this._startAnchor.addEventListener(`focus`,this.startAnchorListener)),this._endAnchor||(this._endAnchor=this._createAnchor(),this._endAnchor.addEventListener(`focus`,this.endAnchorListener))}),this._element.parentNode&&(this._element.parentNode.insertBefore(this._startAnchor,this._element),this._element.parentNode.insertBefore(this._endAnchor,this._element.nextSibling),this._hasAttached=!0),this._hasAttached)}focusInitialElementWhenReady(a){return new Promise(t=>{this._executeOnStable(()=>t(this.focusInitialElement(a)))})}focusFirstTabbableElementWhenReady(a){return new Promise(t=>{this._executeOnStable(()=>t(this.focusFirstTabbableElement(a)))})}focusLastTabbableElementWhenReady(a){return new Promise(t=>{this._executeOnStable(()=>t(this.focusLastTabbableElement(a)))})}_getRegionBoundary(a){let t=this._element.querySelectorAll(`[cdk-focus-region-${a}], [cdkFocusRegion${a}], [cdk-focus-${a}]`);return a==`start`?t.length?t[0]:this._getFirstTabbableElement(this._element):t.length?t[t.length-1]:this._getLastTabbableElement(this._element)}focusInitialElement(a){let t=this._element.querySelector(`[cdk-focus-initial], [cdkFocusInitial]`);if(t){if(!this._checker.isFocusable(t)){let e=this._getFirstTabbableElement(t);return e?.focus(a),!!e}return t.focus(a),!0}return this.focusFirstTabbableElement(a)}focusFirstTabbableElement(a){let t=this._getRegionBoundary(`start`);return t&&t.focus(a),!!t}focusLastTabbableElement(a){let t=this._getRegionBoundary(`end`);return t&&t.focus(a),!!t}hasAttached(){return this._hasAttached}_getFirstTabbableElement(a){if(this._checker.isFocusable(a)&&this._checker.isTabbable(a))return a;let t=a.children;for(let e=0;e<t.length;e++){let r=t[e].nodeType===this._document.ELEMENT_NODE?this._getFirstTabbableElement(t[e]):null;if(r)return r}return null}_getLastTabbableElement(a){if(this._checker.isFocusable(a)&&this._checker.isTabbable(a))return a;let t=a.children;for(let e=t.length-1;e>=0;e--){let r=t[e].nodeType===this._document.ELEMENT_NODE?this._getLastTabbableElement(t[e]):null;if(r)return r}return null}_createAnchor(){let a=this._document.createElement(`div`);return this._toggleAnchorTabIndex(this._enabled,a),a.classList.add(`cdk-visually-hidden`),a.classList.add(`cdk-focus-trap-anchor`),a.setAttribute(`aria-hidden`,`true`),a}_toggleAnchorTabIndex(a,t){a?t.setAttribute(`tabindex`,`0`):t.removeAttribute(`tabindex`)}toggleAnchors(a){this._startAnchor&&this._endAnchor&&(this._toggleAnchorTabIndex(a,this._startAnchor),this._toggleAnchorTabIndex(a,this._endAnchor))}_executeOnStable(a){vh(a,{injector:this._injector})}};var Hl=(()=>{class n{_checker=y(Tl);_ngZone=y(Pe$2);_document=y(pt);_injector=y(ne$2);constructor(){y(bt).load(ta)}create(t,e=!1){return new fr(t,this._checker,this._ngZone,this._document,e,this._injector)}static ɵfac=function(e){return new(e||n)};static ɵprov=Vr({token:n,factory:n.ɵfac})}return n})();var Bi=new _$1(`liveAnnouncerElement`,{providedIn:`root`,factory:()=>null});var Hi=new _$1(`LIVE_ANNOUNCER_DEFAULT_OPTIONS`);var $l=0;var Vl=(()=>{class n{_ngZone=y(Pe$2);_defaultOptions=y(Hi,{optional:!0});_liveElement;_document=y(pt);_sanitizer=y(Ae$1);_previousTimeout;_currentPromise;_currentResolve;constructor(){let t=y(Bi,{optional:!0});this._liveElement=t||this._createLiveElement()}announce(t,...e){let r=this._defaultOptions,o,i;return e.length===1&&typeof e[0]==`number`?i=e[0]:[o,i]=e,this.clear(),clearTimeout(this._previousTimeout),o||(o=r&&r.politeness?r.politeness:`polite`),i==null&&r&&(i=r.duration),this._liveElement.setAttribute(`aria-live`,o),this._liveElement.id&&this._exposeAnnouncerToModals(this._liveElement.id),this._ngZone.runOutsideAngular(()=>(this._currentPromise||(this._currentPromise=new Promise(c=>this._currentResolve=c)),clearTimeout(this._previousTimeout),this._previousTimeout=setTimeout(()=>{!t||typeof t==`string`?this._liveElement.textContent=t:Si(this._liveElement,t,this._sanitizer),typeof i==`number`&&(this._previousTimeout=setTimeout(()=>this.clear(),i)),this._currentResolve?.(),this._currentPromise=this._currentResolve=void 0},100),this._currentPromise))}clear(){this._liveElement&&(this._liveElement.textContent=``)}ngOnDestroy(){clearTimeout(this._previousTimeout),this._liveElement?.remove(),this._liveElement=null,this._currentResolve?.(),this._currentPromise=this._currentResolve=void 0}_createLiveElement(){let t=`cdk-live-announcer-element`,e=this._document.getElementsByClassName(t),r=this._document.createElement(`div`);for(let o=0;o<e.length;o++)e[o].remove();return r.classList.add(t),r.classList.add(`cdk-visually-hidden`),r.setAttribute(`aria-atomic`,`true`),r.setAttribute(`aria-live`,`polite`),r.id=`cdk-live-announcer-${$l++}`,this._document.body.appendChild(r),r}_exposeAnnouncerToModals(t){let e=this._document.querySelectorAll(`body > .cdk-overlay-container [aria-modal="true"]`);for(let r=0;r<e.length;r++){let o=e[r],i=o.getAttribute(`aria-owns`);i?i.indexOf(t)===-1&&o.setAttribute(`aria-owns`,i+` `+t):o.setAttribute(`aria-owns`,t)}}static ɵfac=function(e){return new(e||n)};static ɵprov=Vr({token:n,factory:n.ɵfac})}return n})();var ql=200;var ra=class{_letterKeyStream=new ee$1;_items=[];_selectedItemIndex=-1;_pressedLetters=[];_skipPredicateFn;_selectedItem=new ee$1;selectedItem=this._selectedItem;constructor(a,t){let e=typeof t?.debounceInterval==`number`?t.debounceInterval:ql;t?.skipPredicate&&(this._skipPredicateFn=t.skipPredicate),this.setItems(a),this._setupKeyHandler(e)}destroy(){this._pressedLetters=[],this._letterKeyStream.complete(),this._selectedItem.complete()}setCurrentSelectedItemIndex(a){this._selectedItemIndex=a}setItems(a){this._items=a}handleKey(a){let t=a.keyCode;a.key&&a.key.length===1?this._letterKeyStream.next(a.key.toLocaleUpperCase()):(t>=65&&t<=90||t>=48&&t<=57)&&this._letterKeyStream.next(String.fromCharCode(t))}isTyping(){return this._pressedLetters.length>0}reset(){this._pressedLetters=[]}_setupKeyHandler(a){this._letterKeyStream.pipe(gy(t=>this._pressedLetters.push(t)),$y(a),Jn$1(()=>this._pressedLetters.length>0),Nt$1(()=>this._pressedLetters.join(``).toLocaleUpperCase())).subscribe(t=>{for(let e=1;e<this._items.length+1;e++){let r=(this._selectedItemIndex+e)%this._items.length,o=this._items[r];if(!this._skipPredicateFn?.(o)&&o.getLabel?.().toLocaleUpperCase().trim().indexOf(t)===0){this._selectedItem.next(o);break}}this._pressedLetters=[]})}};function $i(n,...a){return a.length?a.some(t=>n[t]):n.altKey||n.shiftKey||n.ctrlKey||n.metaKey}var oa=class{_items;_activeItemIndex=mt(-1);_activeItem=mt(null);_wrap=!1;_typeaheadSubscription=K$1.EMPTY;_itemChangesSubscription;_vertical=!0;_horizontal=null;_allowedModifierKeys=[];_homeAndEnd=!1;_pageUpAndDown={enabled:!1,delta:10};_effectRef;_typeahead;_skipPredicateFn=a=>a.disabled;constructor(a,t){this._items=a,a instanceof _i$1?this._itemChangesSubscription=a.changes.subscribe(e=>this._itemsChanged(e.toArray())):Cr(a)&&(this._effectRef=Ra$1(()=>this._itemsChanged(a()),{injector:t}))}tabOut=new ee$1;change=new ee$1;skipPredicate(a){return this._skipPredicateFn=a,this}withWrap(a=!0){return this._wrap=a,this}withVerticalOrientation(a=!0){return this._vertical=a,this}withHorizontalOrientation(a){return this._horizontal=a,this}withAllowedModifierKeys(a){return this._allowedModifierKeys=a,this}withTypeAhead(a=200){this._typeaheadSubscription.unsubscribe();let t=this._getItemsArray();return this._typeahead=new ra(t,{debounceInterval:typeof a==`number`?a:void 0,skipPredicate:e=>this._skipPredicateFn(e)}),this._typeaheadSubscription=this._typeahead.selectedItem.subscribe(e=>{this.setActiveItem(e)}),this}cancelTypeahead(){return this._typeahead?.reset(),this}withHomeAndEnd(a=!0){return this._homeAndEnd=a,this}withPageUpDown(a=!0,t=10){return this._pageUpAndDown={enabled:a,delta:t},this}setActiveItem(a){let t=this._activeItem();this.updateActiveItem(a),this._activeItem()!==t&&this.change.next(this._activeItemIndex())}onKeydown(a){let t=a.keyCode,r=[`altKey`,`ctrlKey`,`metaKey`,`shiftKey`].every(o=>!a[o]||this._allowedModifierKeys.indexOf(o)>-1);switch(t){case 9:this.tabOut.next();return;case 40:if(this._vertical&&r){this.setNextItemActive();break}else return;case 38:if(this._vertical&&r){this.setPreviousItemActive();break}else return;case 39:if(this._horizontal&&r){this._horizontal===`rtl`?this.setPreviousItemActive():this.setNextItemActive();break}else return;case 37:if(this._horizontal&&r){this._horizontal===`rtl`?this.setNextItemActive():this.setPreviousItemActive();break}else return;case 36:if(this._homeAndEnd&&r){this.setFirstItemActive();break}else return;case 35:if(this._homeAndEnd&&r){this.setLastItemActive();break}else return;case 33:if(this._pageUpAndDown.enabled&&r){let o=this._activeItemIndex()-this._pageUpAndDown.delta;this._setActiveItemByIndex(o>0?o:0,1);break}else return;case 34:if(this._pageUpAndDown.enabled&&r){let o=this._activeItemIndex()+this._pageUpAndDown.delta,i=this._getItemsArray().length;this._setActiveItemByIndex(o<i?o:i-1,-1);break}else return;default:(r||$i(a,`shiftKey`))&&this._typeahead?.handleKey(a);return}this._typeahead?.reset(),a.preventDefault()}get activeItemIndex(){return this._activeItemIndex()}get activeItem(){return this._activeItem()}isTyping(){return!!this._typeahead&&this._typeahead.isTyping()}setFirstItemActive(){this._setActiveItemByIndex(0,1)}setLastItemActive(){this._setActiveItemByIndex(this._getItemsArray().length-1,-1)}setNextItemActive(){this._activeItemIndex()<0?this.setFirstItemActive():this._setActiveItemByDelta(1)}setPreviousItemActive(){this._activeItemIndex()<0&&this._wrap?this.setLastItemActive():this._setActiveItemByDelta(-1)}updateActiveItem(a){let t=this._getItemsArray(),e=typeof a==`number`?a:t.indexOf(a),r=t[e];this._activeItem.set(r??null),this._activeItemIndex.set(e),this._typeahead?.setCurrentSelectedItemIndex(e)}destroy(){this._typeaheadSubscription.unsubscribe(),this._itemChangesSubscription?.unsubscribe(),this._effectRef?.destroy(),this._typeahead?.destroy(),this.tabOut.complete(),this.change.complete()}_setActiveItemByDelta(a){this._wrap?this._setActiveInWrapMode(a):this._setActiveInDefaultMode(a)}_setActiveInWrapMode(a){let t=this._getItemsArray();for(let e=1;e<=t.length;e++){let r=(this._activeItemIndex()+a*e+t.length)%t.length,o=t[r];if(!this._skipPredicateFn(o)){this.setActiveItem(r);return}}}_setActiveInDefaultMode(a){this._setActiveItemByIndex(this._activeItemIndex()+a,a)}_setActiveItemByIndex(a,t){let e=this._getItemsArray();if(e[a]){for(;this._skipPredicateFn(e[a]);)if(a+=t,!e[a])return;this.setActiveItem(a)}}_getItemsArray(){return Cr(this._items)?this._items():this._items instanceof _i$1?this._items.toArray():this._items}_itemsChanged(a){this._typeahead?.setItems(a);let t=this._activeItem();if(t){let e=a.indexOf(t);e>-1&&e!==this._activeItemIndex()&&(this._activeItemIndex.set(e),this._typeahead?.setCurrentSelectedItemIndex(e))}}};var hr=class extends oa{_origin=`program`;setFocusOrigin(a){return this._origin=a,this}setActiveItem(a){super.setActiveItem(a),this.activeItem&&this.activeItem.focus(this._origin)}};var Vi=/* @__PURE__ */ new Map;var br=class n{_appId=y(yt);static _infix=`a${Math.floor(Math.random()*1e5).toString()}`;getId(a,t=!1){this._appId!==`ng`&&(a+=this._appId);let e=Vi.get(a);return e===void 0?e=0:e++,Vi.set(a,e),`${a}${t?n._infix+`-`:``}${e}`}static ɵfac=function(t){return new(t||n)};static ɵprov=Vr({token:n,factory:n.ɵfac})};var Wi=` `;function Wl(n,a,t){let e=sa(n,a);t=t.trim(),!e.some(r=>r.trim()===t)&&(e.push(t),n.setAttribute(a,e.join(Wi)))}function Gl(n,a,t){let e=sa(n,a);t=t.trim();let r=e.filter(o=>o!==t);r.length?n.setAttribute(a,r.join(Wi)):n.removeAttribute(a)}function sa(n,a){return n.getAttribute(a)?.match(/\S+/g)??[]}var Gi=`cdk-describedby-message`;var ia=`cdk-describedby-host`;var vr=0;var Tf=(()=>{class n{_platform=y(V$1);_document=y(pt);_messageRegistry=/* @__PURE__ */ new Map;_messagesContainer=null;_id=`${vr++}`;constructor(){y(bt).load(ta),this._id=y(yt)+`-`+vr++}describe(t,e,r){if(!this._canBeDescribed(t,e))return;let o=gr(e,r);typeof e!=`string`?(qi(e,this._id),this._messageRegistry.set(o,{messageElement:e,referenceCount:0})):this._messageRegistry.has(o)||this._createMessageElement(e,r),this._isElementDescribedByMessage(t,o)||this._addMessageReference(t,o)}removeDescription(t,e,r){if(!e||!this._isElementNode(t))return;let o=gr(e,r);if(this._isElementDescribedByMessage(t,o)&&this._removeMessageReference(t,o),typeof e==`string`){let i=this._messageRegistry.get(o);i&&i.referenceCount===0&&this._deleteMessageElement(o)}this._messagesContainer?.childNodes.length===0&&(this._messagesContainer.remove(),this._messagesContainer=null)}ngOnDestroy(){let t=this._document.querySelectorAll(`[${ia}="${this._id}"]`);for(let e=0;e<t.length;e++)this._removeCdkDescribedByReferenceIds(t[e]),t[e].removeAttribute(ia);this._messagesContainer?.remove(),this._messagesContainer=null,this._messageRegistry.clear()}_createMessageElement(t,e){let r=this._document.createElement(`div`);qi(r,this._id),r.textContent=t,e&&r.setAttribute(`role`,e),this._createMessagesContainer(),this._messagesContainer.appendChild(r),this._messageRegistry.set(gr(t,e),{messageElement:r,referenceCount:0})}_deleteMessageElement(t){this._messageRegistry.get(t)?.messageElement?.remove(),this._messageRegistry.delete(t)}_createMessagesContainer(){if(this._messagesContainer)return;let t=`cdk-describedby-message-container`,e=this._document.querySelectorAll(`.${t}[platform="server"]`);for(let o=0;o<e.length;o++)e[o].remove();let r=this._document.createElement(`div`);r.style.visibility=`hidden`,r.classList.add(t),r.classList.add(`cdk-visually-hidden`),this._platform.isBrowser||r.setAttribute(`platform`,`server`),this._document.body.appendChild(r),this._messagesContainer=r}_removeCdkDescribedByReferenceIds(t){let e=sa(t,`aria-describedby`).filter(r=>r.indexOf(Gi)!=0);t.setAttribute(`aria-describedby`,e.join(` `))}_addMessageReference(t,e){let r=this._messageRegistry.get(e);Wl(t,`aria-describedby`,r.messageElement.id),t.setAttribute(ia,this._id),r.referenceCount++}_removeMessageReference(t,e){let r=this._messageRegistry.get(e);r.referenceCount--,Gl(t,`aria-describedby`,r.messageElement.id),t.removeAttribute(ia)}_isElementDescribedByMessage(t,e){let r=sa(t,`aria-describedby`),o=this._messageRegistry.get(e),i=o&&o.messageElement.id;return!!i&&r.indexOf(i)!=-1}_canBeDescribed(t,e){if(!this._isElementNode(t))return!1;if(e&&typeof e==`object`)return!0;let r=e==null?``:`${e}`.trim(),o=t.getAttribute(`aria-label`);return r?!o||o.trim()!==r:!1}_isElementNode(t){return t.nodeType===this._document.ELEMENT_NODE}static ɵfac=function(e){return new(e||n)};static ɵprov=Vr({token:n,factory:n.ɵfac})}return n})();function gr(n,a){return typeof n==`string`?`${a||``}/${n}`:n}function qi(n,a){n.id||(n.id=`${Gi}-${a}-${vr++}`)}var Xe=(function(n){return n[n.NORMAL=0]=`NORMAL`,n[n.NEGATED=1]=`NEGATED`,n[n.INVERTED=2]=`INVERTED`,n})(Xe||{});var ca;var Vt;function Ff(){if(Vt==null){if(typeof document!=`object`||!document||typeof Element!=`function`||!Element)return Vt=!1,Vt;if(document.documentElement?.style&&`scrollBehavior`in document.documentElement.style)Vt=!0;else{let n=Element.prototype.scrollTo;n?Vt=!/\{\s*\[native code\]\s*\}/.test(n.toString()):Vt=!1}}return Vt}function jf(){if(typeof document!=`object`||!document)return Xe.NORMAL;if(ca==null){let n=document.createElement(`div`),a=n.style;n.dir=`rtl`,a.width=`1px`,a.overflow=`auto`,a.visibility=`hidden`,a.pointerEvents=`none`,a.position=`absolute`;let t=document.createElement(`div`),e=t.style;e.width=`2px`,e.height=`1px`,n.appendChild(t),document.body.appendChild(n),ca=Xe.NORMAL,n.scrollLeft===0&&(n.scrollLeft=1,ca=n.scrollLeft===0?Xe.NEGATED:Xe.INVERTED),n.remove()}return ca}function Bf(){return typeof __karma__<`u`&&!!__karma__||typeof jasmine<`u`&&!!jasmine||typeof jest<`u`&&!!jest||typeof Mocha<`u`&&!!Mocha}var pe$1;var Ki=[`color`,`button`,`checkbox`,`date`,`datetime-local`,`email`,`file`,`hidden`,`image`,`month`,`number`,`password`,`radio`,`range`,`reset`,`search`,`submit`,`tel`,`text`,`time`,`url`,`week`];function $f(){if(pe$1)return pe$1;if(typeof document!=`object`||!document)return pe$1=new Set(Ki),pe$1;let n=document.createElement(`input`);return pe$1=new Set(Ki.filter(a=>(n.setAttribute(`type`,a),n.type===a))),pe$1}var Kf={XSmall:`(max-width: 599.98px)`,Small:`(min-width: 600px) and (max-width: 959.98px)`,Medium:`(min-width: 960px) and (max-width: 1279.98px)`,Large:`(min-width: 1280px) and (max-width: 1919.98px)`,XLarge:`(min-width: 1920px)`,Handset:`(max-width: 599.98px) and (orientation: portrait), (max-width: 959.98px) and (orientation: landscape)`,Tablet:`(min-width: 600px) and (max-width: 839.98px) and (orientation: portrait), (min-width: 960px) and (max-width: 1279.98px) and (orientation: landscape)`,Web:`(min-width: 840px) and (orientation: portrait), (min-width: 1280px) and (orientation: landscape)`,HandsetPortrait:`(max-width: 599.98px) and (orientation: portrait)`,TabletPortrait:`(min-width: 600px) and (max-width: 839.98px) and (orientation: portrait)`,WebPortrait:`(min-width: 840px) and (orientation: portrait)`,HandsetLandscape:`(max-width: 959.98px) and (orientation: landscape)`,TabletLandscape:`(min-width: 960px) and (max-width: 1279.98px) and (orientation: landscape)`,WebLandscape:`(min-width: 1280px) and (orientation: landscape)`};var Kl=new _$1(`MATERIAL_ANIMATIONS`);var Yi=null;function Yl(){return y(Kl,{optional:!0})?.animationsDisabled||y(Wv,{optional:!0})===`NoopAnimations`?`di-disabled`:(Yi??=y(aa).matchMedia(`(prefers-reduced-motion)`).matches,Yi?`reduced-motion`:`enabled`)}function fe$1(){return Yl()!==`enabled`}function th(n){return n==null?``:typeof n==`string`?n:`${n}px`}function nh(n){return n!=null&&`${n}`!=`false`}var X$1=(function(n){return n[n.FADING_IN=0]=`FADING_IN`,n[n.VISIBLE=1]=`VISIBLE`,n[n.FADING_OUT=2]=`FADING_OUT`,n[n.HIDDEN=3]=`HIDDEN`,n})(X$1||{});var yr=class{_renderer;element;config;_animationForciblyDisabledThroughCss;state=X$1.HIDDEN;constructor(a,t,e,r=!1){this._renderer=a,this.element=t,this.config=e,this._animationForciblyDisabledThroughCss=r}fadeOut(){this._renderer.fadeOutRipple(this)}};var Zi=me$1({passive:!0,capture:!0});var _r=class{_events=/* @__PURE__ */ new Map;addHandler(a,t,e,r){let o=this._events.get(t);if(o){let i=o.get(e);i?i.add(r):o.set(e,/* @__PURE__ */ new Set([r]))}else this._events.set(t,/* @__PURE__ */ new Map([[e,/* @__PURE__ */ new Set([r])]])),a.runOutsideAngular(()=>{document.addEventListener(t,this._delegateEventHandler,Zi)})}removeHandler(a,t,e){let r=this._events.get(a);if(!r)return;let o=r.get(t);o&&(o.delete(e),o.size===0&&r.delete(t),r.size===0&&(this._events.delete(a),document.removeEventListener(a,this._delegateEventHandler,Zi)))}_delegateEventHandler=a=>{let t=nt$1(a);t&&this._events.get(a.type)?.forEach((e,r)=>{(r===t||r.contains(t))&&e.forEach(o=>o.handleEvent(a))})}};var Je={enterDuration:225,exitDuration:150};var Zl=800;var Qi=me$1({passive:!0,capture:!0});var Xi=[`mousedown`,`touchstart`];var Ji=[`mouseup`,`mouseleave`,`touchend`,`touchcancel`];var Ql=(()=>{class n{static ɵfac=function(e){return new(e||n)};static ɵcmp=iw({type:n,selectors:[[`ng-component`]],hostAttrs:[`mat-ripple-style-loader`,``],decls:0,vars:0,template:function(e,r){},styles:[`.mat-ripple {
  overflow: hidden;
  position: relative;
}
.mat-ripple:not(:empty) {
  transform: translateZ(0);
}

.mat-ripple.mat-ripple-unbounded {
  overflow: visible;
}

.mat-ripple-element {
  position: absolute;
  border-radius: 50%;
  pointer-events: none;
  transition: opacity, transform 0ms cubic-bezier(0, 0, 0.2, 1);
  transform: scale3d(0, 0, 0);
  background-color: var(--%NS%mat-ripple-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 10%, transparent));
}
@media (forced-colors: active) {
  .mat-ripple-element {
    display: none;
  }
}
.cdk-drag-preview .mat-ripple-element, .cdk-drag-placeholder .mat-ripple-element {
  display: none;
}
`],encapsulation:2})}return n})();var tn$1=class n{_target;_ngZone;_platform;_containerElement;_triggerElement=null;_isPointerDown=!1;_activeRipples=/* @__PURE__ */ new Map;_mostRecentTransientRipple=null;_lastTouchStartEvent;_pointerUpEventsRegistered=!1;_containerRect=null;static _eventManager=new _r;constructor(a,t,e,r,o){this._target=a,this._ngZone=t,this._platform=r,r.isBrowser&&(this._containerElement=Rt(e)),o&&o.get(bt).load(Ql)}fadeInRipple(a,t,e={}){let r=this._containerRect=this._containerRect||this._containerElement.getBoundingClientRect(),o=z$2(z$2({},Je),e.animation);e.centered&&(a=r.left+r.width/2,t=r.top+r.height/2);let i=e.radius||Xl(a,t,r),c=a-r.left,s=t-r.top,d=o.enterDuration,u=document.createElement(`div`);u.classList.add(`mat-ripple-element`),u.style.left=`${c-i}px`,u.style.top=`${s-i}px`,u.style.height=`${i*2}px`,u.style.width=`${i*2}px`,e.color!=null&&(u.style.backgroundColor=e.color),u.style.transitionDuration=`${d}ms`,this._containerElement.appendChild(u);let f=window.getComputedStyle(u),p=f.transitionProperty,w=f.transitionDuration,L=p===`none`||w===`0s`||w===`0s, 0s`||r.width===0&&r.height===0,D=new yr(this,u,e,L);u.style.transform=`scale3d(1, 1, 1)`,D.state=X$1.FADING_IN,e.persistent||(this._mostRecentTransientRipple=D);let at=null;return!L&&(d||o.exitDuration)&&this._ngZone.runOutsideAngular(()=>{let vt=()=>{at&&(at.fallbackTimer=null),clearTimeout(rt),this._finishRippleTransition(D)},ut=()=>this._destroyRipple(D),rt=setTimeout(ut,d+100);u.addEventListener(`transitionend`,vt),u.addEventListener(`transitioncancel`,ut),at={onTransitionEnd:vt,onTransitionCancel:ut,fallbackTimer:rt}}),this._activeRipples.set(D,at),(L||!d)&&this._finishRippleTransition(D),D}fadeOutRipple(a){if(a.state===X$1.FADING_OUT||a.state===X$1.HIDDEN)return;let t=a.element,e=z$2(z$2({},Je),a.config.animation);t.style.transitionDuration=`${e.exitDuration}ms`,t.style.opacity=`0`,a.state=X$1.FADING_OUT,(a._animationForciblyDisabledThroughCss||!e.exitDuration)&&this._finishRippleTransition(a)}fadeOutAll(){this._getActiveRipples().forEach(a=>a.fadeOut())}fadeOutAllNonPersistent(){this._getActiveRipples().forEach(a=>{a.config.persistent||a.fadeOut()})}setupTriggerEvents(a){let t=Rt(a);!this._platform.isBrowser||!t||t===this._triggerElement||(this._removeTriggerEvents(),this._triggerElement=t,Xi.forEach(e=>{n._eventManager.addHandler(this._ngZone,e,t,this)}))}handleEvent(a){a.type===`mousedown`?this._onMousedown(a):a.type===`touchstart`?this._onTouchStart(a):this._onPointerUp(),this._pointerUpEventsRegistered||(this._ngZone.runOutsideAngular(()=>{Ji.forEach(t=>{this._triggerElement.addEventListener(t,this,Qi)})}),this._pointerUpEventsRegistered=!0)}_finishRippleTransition(a){a.state===X$1.FADING_IN?this._startFadeOutTransition(a):a.state===X$1.FADING_OUT&&this._destroyRipple(a)}_startFadeOutTransition(a){let t=a===this._mostRecentTransientRipple,{persistent:e}=a.config;a.state=X$1.VISIBLE,!e&&(!t||!this._isPointerDown)&&a.fadeOut()}_destroyRipple(a){let t=this._activeRipples.get(a)??null;this._activeRipples.delete(a),this._activeRipples.size||(this._containerRect=null),a===this._mostRecentTransientRipple&&(this._mostRecentTransientRipple=null),a.state=X$1.HIDDEN,t!==null&&(a.element.removeEventListener(`transitionend`,t.onTransitionEnd),a.element.removeEventListener(`transitioncancel`,t.onTransitionCancel),t.fallbackTimer!==null&&clearTimeout(t.fallbackTimer)),a.element.remove()}_onMousedown(a){let t=Ke(a),e=this._lastTouchStartEvent&&Date.now()<this._lastTouchStartEvent+Zl;!this._target.rippleDisabled&&!t&&!e&&(this._isPointerDown=!0,this.fadeInRipple(a.clientX,a.clientY,this._target.rippleConfig))}_onTouchStart(a){if(!this._target.rippleDisabled&&!Ye(a)){this._lastTouchStartEvent=Date.now(),this._isPointerDown=!0;let t=a.changedTouches;if(t)for(let e=0;e<t.length;e++)this.fadeInRipple(t[e].clientX,t[e].clientY,this._target.rippleConfig)}}_onPointerUp(){this._isPointerDown&&(this._isPointerDown=!1,this._getActiveRipples().forEach(a=>{let t=a.state===X$1.VISIBLE||a.config.terminateOnPointerUp&&a.state===X$1.FADING_IN;!a.config.persistent&&t&&a.fadeOut()}))}_getActiveRipples(){return Array.from(this._activeRipples.keys())}_removeTriggerEvents(){let a=this._triggerElement;a&&(Xi.forEach(t=>n._eventManager.removeHandler(t,a,this)),this._pointerUpEventsRegistered&&(Ji.forEach(t=>a.removeEventListener(t,this,Qi)),this._pointerUpEventsRegistered=!1))}};function Xl(n,a,t){let e=Math.max(Math.abs(n-t.left),Math.abs(n-t.right)),r=Math.max(Math.abs(a-t.top),Math.abs(a-t.bottom));return Math.sqrt(e*e+r*r)}var Sr=new _$1(`mat-ripple-global-options`);var hh=(()=>{class n{_elementRef=y(Hr);_animationsDisabled=fe$1();color;unbounded=!1;centered=!1;radius=0;animation;get disabled(){return this._disabled}set disabled(t){t&&this.fadeOutAllNonPersistent(),this._disabled=t,this._setupTriggerEventsIfEnabled()}_disabled=!1;get trigger(){return this._trigger||this._elementRef.nativeElement}set trigger(t){this._trigger=t,this._setupTriggerEventsIfEnabled()}_trigger;_rippleRenderer;_globalOptions;_isInitialized=!1;constructor(){let t=y(Pe$2),e=y(V$1),r=y(Sr,{optional:!0}),o=y(ne$2);this._globalOptions=r||{},this._rippleRenderer=new tn$1(this,t,this._elementRef,e,o)}ngOnInit(){this._isInitialized=!0,this._setupTriggerEventsIfEnabled()}ngOnDestroy(){this._rippleRenderer._removeTriggerEvents()}fadeOutAll(){this._rippleRenderer.fadeOutAll()}fadeOutAllNonPersistent(){this._rippleRenderer.fadeOutAllNonPersistent()}get rippleConfig(){return{centered:this.centered,radius:this.radius,color:this.color,animation:z$2(z$2(z$2({},this._globalOptions.animation),this._animationsDisabled?{enterDuration:0,exitDuration:0}:{}),this.animation),terminateOnPointerUp:this._globalOptions.terminateOnPointerUp}}get rippleDisabled(){return this.disabled||!!this._globalOptions.disabled}_setupTriggerEventsIfEnabled(){!this.disabled&&this._isInitialized&&this._rippleRenderer.setupTriggerEvents(this.trigger)}launch(t,e=0,r){return typeof t==`number`?this._rippleRenderer.fadeInRipple(t,e,z$2(z$2({},this.rippleConfig),r)):this._rippleRenderer.fadeInRipple(0,0,z$2(z$2({},this.rippleConfig),t))}static ɵfac=function(e){return new(e||n)};static ɵdir=uw({type:n,selectors:[[``,`mat-ripple`,``],[``,`matRipple`,``]],hostAttrs:[1,`mat-ripple`],hostVars:2,hostBindings:function(e,r){e&2&&am(`mat-ripple-unbounded`,r.unbounded)},inputs:{color:[0,`matRippleColor`,`color`],unbounded:[0,`matRippleUnbounded`,`unbounded`],centered:[0,`matRippleCentered`,`centered`],radius:[0,`matRippleRadius`,`radius`],animation:[0,`matRippleAnimation`,`animation`],disabled:[0,`matRippleDisabled`,`disabled`],trigger:[0,`matRippleTrigger`,`trigger`]},exportAs:[`matRipple`]})}return n})();var Jl={capture:!0};var td=[`focus`,`mousedown`,`mouseenter`,`touchstart`];var wr=`mat-ripple-loader-uninitialized`;var Er=`mat-ripple-loader-class-name`;var ts=`mat-ripple-loader-centered`;var la=`mat-ripple-loader-disabled`;var es=(()=>{class n{_document=y(pt);_animationsDisabled=fe$1();_globalRippleOptions=y(Sr,{optional:!0});_platform=y(V$1);_ngZone=y(Pe$2);_injector=y(ne$2);_eventCleanups;_hosts=/* @__PURE__ */ new Map;constructor(){let t=y(Lr).createRenderer(null,null);this._eventCleanups=this._ngZone.runOutsideAngular(()=>td.map(e=>t.listen(this._document,e,this._onInteraction,Jl)))}ngOnDestroy(){let t=this._hosts.keys();for(let e of t)this.destroyRipple(e);this._eventCleanups.forEach(e=>e())}configureRipple(t,e){t.setAttribute(wr,this._globalRippleOptions?.namespace??``),(e.className||!t.hasAttribute(Er))&&t.setAttribute(Er,e.className||``),e.centered&&t.setAttribute(ts,``),e.disabled&&t.setAttribute(la,``)}setDisabled(t,e){let r=this._hosts.get(t);r?(r.target.rippleDisabled=e,!e&&!r.hasSetUpEvents&&(r.hasSetUpEvents=!0,r.renderer.setupTriggerEvents(t))):e?t.setAttribute(la,``):t.removeAttribute(la)}_onInteraction=t=>{let e=nt$1(t);if(e instanceof HTMLElement){let r=e.closest(`[${wr}="${this._globalRippleOptions?.namespace??``}"]`);r&&this._createRipple(r)}};_createRipple(t){if(!this._document||this._hosts.has(t))return;t.querySelector(`.mat-ripple`)?.remove();let e=this._document.createElement(`span`);e.classList.add(`mat-ripple`,t.getAttribute(Er)),t.append(e);let r=this._globalRippleOptions,o=this._animationsDisabled?0:r?.animation?.enterDuration??Je.enterDuration,i=this._animationsDisabled?0:r?.animation?.exitDuration??Je.exitDuration,c={rippleDisabled:this._animationsDisabled||r?.disabled||t.hasAttribute(la),rippleConfig:{centered:t.hasAttribute(ts),terminateOnPointerUp:r?.terminateOnPointerUp,animation:{enterDuration:o,exitDuration:i}}},s=new tn$1(c,this._ngZone,e,this._platform,this._injector),d=!c.rippleDisabled;d&&s.setupTriggerEvents(t),this._hosts.set(t,{target:c,renderer:s,hasSetUpEvents:d}),t.removeAttribute(wr)}destroyRipple(t){let e=this._hosts.get(t);e&&(e.renderer._removeTriggerEvents(),this._hosts.delete(t))}static ɵfac=function(e){return new(e||n)};static ɵprov=Vr({token:n,factory:n.ɵfac})}return n})();var ns=(()=>{class n{static ɵfac=function(e){return new(e||n)};static ɵcmp=iw({type:n,selectors:[[`structural-styles`]],decls:0,vars:0,template:function(e,r){},styles:[`.mat-focus-indicator {
  position: relative;
}
.mat-focus-indicator::before {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  box-sizing: border-box;
  pointer-events: none;
  display: var(--%NS%mat-focus-indicator-display, none);
  border-width: var(--%NS%mat-focus-indicator-border-width, 3px);
  border-style: var(--%NS%mat-focus-indicator-border-style, solid);
  border-color: var(--%NS%mat-focus-indicator-border-color, transparent);
  border-radius: var(--%NS%mat-focus-indicator-border-radius, 4px);
}
.mat-focus-indicator:focus-visible::before {
  content: "";
}

@media (forced-colors: active) {
  html {
    --%NS%mat-focus-indicator-display: block;
    --%NS%mat-focus-indicator-fallback-border-style: none;
  }
}
`],encapsulation:2})}return n})();var ed=new _$1(`MAT_BUTTON_CONFIG`);function as(n){return n==null?void 0:sj(n)}var da=(()=>{class n{_elementRef=y(Hr);_ngZone=y(Pe$2);_animationsDisabled=fe$1();_config=y(ed,{optional:!0});_focusMonitor=y(mr);_cleanupClick;_renderer=y(mc$1);_rippleLoader=y(es);_isAnchor;_isFab=!1;color;get disableRipple(){return this._disableRipple}set disableRipple(t){this._disableRipple=t,this._updateRippleDisabled()}_disableRipple=!1;get disabled(){return this._disabled}set disabled(t){this._disabled=t,this._updateRippleDisabled()}_disabled=!1;ariaDisabled;disabledInteractive;tabIndex;set _tabindex(t){this.tabIndex=t}showProgress=K1(!1,{transform:ij});constructor(){y(bt).load(ns);let t=this._elementRef.nativeElement;this._isAnchor=t.tagName===`A`,this.disabledInteractive=this._config?.disabledInteractive??!1,this.color=this._config?.color??null,this._rippleLoader?.configureRipple(t,{className:`mat-mdc-button-ripple`})}ngAfterViewInit(){this._focusMonitor.monitor(this._elementRef,!0),this._isAnchor&&this._setupAsAnchor()}ngOnDestroy(){this._cleanupClick?.(),this._focusMonitor.stopMonitoring(this._elementRef),this._rippleLoader?.destroyRipple(this._elementRef.nativeElement)}focus(t=`program`,e){t?this._focusMonitor.focusVia(this._elementRef.nativeElement,t,e):this._elementRef.nativeElement.focus(e)}_getAriaDisabled(){return this.ariaDisabled!=null?this.ariaDisabled:this._isAnchor?this.disabled||null:this.disabled&&this.disabledInteractive?!0:null}_getDisabledAttribute(){return this.disabledInteractive||!this.disabled?null:!0}_updateRippleDisabled(){this._rippleLoader?.setDisabled(this._elementRef.nativeElement,this.disableRipple||this.disabled)}_getTabIndex(){return this._isAnchor?this.disabled&&!this.disabledInteractive?-1:this.tabIndex:this.tabIndex}_setupAsAnchor(){this._cleanupClick=this._ngZone.runOutsideAngular(()=>this._renderer.listen(this._elementRef.nativeElement,`click`,t=>{this.disabled&&(t.preventDefault(),t.stopImmediatePropagation())}))}static ɵfac=function(e){return new(e||n)};static ɵdir=uw({type:n,hostAttrs:[1,`mat-mdc-button-base`],hostVars:15,hostBindings:function(e,r){e&2&&(Hg(`disabled`,r._getDisabledAttribute())(`aria-disabled`,r._getAriaDisabled())(`tabindex`,r._getTabIndex()),PC(r.color?`mat-`+r.color:``),am(`mat-mdc-button-progress-indicator-shown`,r.showProgress())(`mat-mdc-button-disabled`,r.disabled)(`mat-mdc-button-disabled-interactive`,r.disabledInteractive)(`mat-unthemed`,!r.color)(`_mat-animation-noopable`,r._animationsDisabled))},inputs:{color:`color`,disableRipple:[2,`disableRipple`,`disableRipple`,ij],disabled:[2,`disabled`,`disabled`,ij],ariaDisabled:[2,`aria-disabled`,`ariaDisabled`,ij],disabledInteractive:[2,`disabledInteractive`,`disabledInteractive`,ij],tabIndex:[2,`tabIndex`,`tabIndex`,as],_tabindex:[2,`tabindex`,`_tabindex`,as],showProgress:[1,`showProgress`]}})}return n})();var nd=(()=>{class n extends da{constructor(){super(),this._rippleLoader.configureRipple(this._elementRef.nativeElement,{centered:!0})}static ɵfac=function(e){return new(e||n)};static ɵcmp=(function(){let t=[`*`,[[``,`progressIndicator`,``]]],e=[`*`,`[progressIndicator]`];function r(o,i){o&1&&(Al$1(0,`div`,1),mC(1,1),Ol$1())}return iw({type:n,selectors:[[`button`,`mat-icon-button`,``],[`a`,`mat-icon-button`,``],[`button`,`matIconButton`,``],[`a`,`matIconButton`,``]],hostAttrs:[1,`mdc-icon-button`,`mat-mdc-icon-button`],exportAs:[`matButton`,`matAnchor`],features:[Mg],ngContentSelectors:e,decls:5,vars:1,consts:[[1,`mat-mdc-button-persistent-ripple`,`mdc-icon-button__ripple`],[1,`mat-mdc-button-progress-indicator-container`],[1,`mat-focus-indicator`],[1,`mat-mdc-button-touch-target`]],template:function(i,c){i&1&&(gC(t),$g(0,`span`,0),mC(1),Jw(2,r,2,0,`div`,1),$g(3,`span`,2)(4,`span`,3)),i&2&&(mD(2),eC(c.showProgress()?2:-1))},styles:[`.mat-mdc-icon-button {
  -webkit-user-select: none;
  user-select: none;
  display: inline-block;
  position: relative;
  box-sizing: border-box;
  border: none;
  outline: none;
  background-color: transparent;
  fill: currentColor;
  text-decoration: none;
  cursor: pointer;
  z-index: 0;
  overflow: visible;
  border-radius: var(--%NS%mat-icon-button-container-shape, var(--%NS%mat-sys-corner-full, 50%));
  flex-shrink: 0;
  text-align: center;
  width: var(--%NS%mat-icon-button-state-layer-size, 40px);
  height: var(--%NS%mat-icon-button-state-layer-size, 40px);
  padding: calc(calc(var(--%NS%mat-icon-button-state-layer-size, 40px) - var(--%NS%mat-icon-button-icon-size, 24px)) / 2);
  font-size: var(--%NS%mat-icon-button-icon-size, 24px);
  color: var(--%NS%mat-icon-button-icon-color, var(--%NS%mat-sys-on-surface-variant));
  -webkit-tap-highlight-color: transparent;
}
.mat-mdc-icon-button .mat-mdc-button-ripple,
.mat-mdc-icon-button .mat-mdc-button-persistent-ripple,
.mat-mdc-icon-button .mat-mdc-button-persistent-ripple::before {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
  border-radius: inherit;
}
.mat-mdc-icon-button .mat-mdc-button-ripple {
  overflow: hidden;
}
.mat-mdc-icon-button .mat-mdc-button-persistent-ripple::before {
  content: "";
  opacity: 0;
}
.mat-mdc-icon-button .mdc-button__label,
.mat-mdc-icon-button .mat-icon {
  z-index: 1;
  position: relative;
}
.mat-mdc-icon-button .mat-focus-indicator {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  border-radius: inherit;
}
.mat-mdc-icon-button:focus-visible > .mat-focus-indicator::before {
  content: "";
  border-radius: inherit;
}
.mat-mdc-icon-button .mat-ripple-element {
  background-color: var(--%NS%mat-icon-button-ripple-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface-variant) calc(var(--%NS%mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-icon-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-icon-button-state-layer-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-icon-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-icon-button-disabled-state-layer-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-icon-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-icon-button-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity));
}
.mat-mdc-icon-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-icon-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-icon-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-icon-button-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity));
}
.mat-mdc-icon-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-icon-button-pressed-state-layer-opacity, var(--%NS%mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-icon-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--%NS%mat-icon-button-touch-target-size, 48px);
  display: var(--%NS%mat-icon-button-touch-target-display, block);
  left: 50%;
  width: var(--%NS%mat-icon-button-touch-target-size, 48px);
  transform: translate(-50%, -50%);
}
.mat-mdc-icon-button._mat-animation-noopable {
  transition: none !important;
  animation: none !important;
}
.mat-mdc-icon-button[disabled], .mat-mdc-icon-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--%NS%mat-icon-button-disabled-icon-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mat-mdc-icon-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}
.mat-mdc-icon-button img,
.mat-mdc-icon-button svg {
  width: var(--%NS%mat-icon-button-icon-size, 24px);
  height: var(--%NS%mat-icon-button-icon-size, 24px);
  vertical-align: baseline;
}
.mat-mdc-icon-button .mat-mdc-button-progress-indicator-container .mdc-circular-progress__determinate-circle-graphic {
  width: inherit;
  height: inherit;
}
.mat-mdc-icon-button .mat-mdc-button-progress-indicator-container .mdc-circular-progress__indeterminate-circle-graphic {
  height: 100%;
}
.mat-mdc-icon-button .mat-mdc-button-persistent-ripple {
  border-radius: var(--%NS%mat-icon-button-container-shape, var(--%NS%mat-sys-corner-full, 50%));
}
.mat-mdc-icon-button[hidden] {
  display: none;
}
.mat-mdc-icon-button.mat-unthemed:not(.mdc-ripple-upgraded):focus::before, .mat-mdc-icon-button.mat-primary:not(.mdc-ripple-upgraded):focus::before, .mat-mdc-icon-button.mat-accent:not(.mdc-ripple-upgraded):focus::before, .mat-mdc-icon-button.mat-warn:not(.mdc-ripple-upgraded):focus::before {
  background: transparent;
  opacity: 1;
}

.mat-mdc-button-progress-indicator-container {
  position: absolute;
  inset-inline-start: 0;
  inset-block-start: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
}

.mat-mdc-button-progress-indicator-shown mat-icon {
  visibility: hidden;
}
`,`@media (forced-colors: active) {
  .mat-mdc-button:not(.mdc-button--outlined),
  .mat-mdc-unelevated-button:not(.mdc-button--outlined),
  .mat-mdc-raised-button:not(.mdc-button--outlined),
  .mat-mdc-outlined-button:not(.mdc-button--outlined),
  .mat-mdc-button-base.mat-tonal-button,
  .mat-mdc-icon-button.mat-mdc-icon-button,
  .mat-mdc-outlined-button .mdc-button__ripple {
    outline: solid 1px;
  }
}
`],encapsulation:2})})()}return n})();var rs=/* @__PURE__ */ new Map([[`text`,[`mat-mdc-button`]],[`filled`,[`mdc-button--unelevated`,`mat-mdc-unelevated-button`]],[`elevated`,[`mdc-button--raised`,`mat-mdc-raised-button`]],[`outlined`,[`mdc-button--outlined`,`mat-mdc-outlined-button`]],[`tonal`,[`mat-tonal-button`]]]);var Hh=(()=>{class n extends da{get appearance(){return this._appearance}set appearance(t){this.setAppearance(t||this._config?.defaultAppearance||`text`)}_appearance=null;constructor(){super();let t=ad(this._elementRef.nativeElement);t&&this.setAppearance(t)}setAppearance(t){if(t===this._appearance)return;let e=this._elementRef.nativeElement.classList,r=this._appearance?rs.get(this._appearance):null,o=rs.get(t);r&&e.remove(...r),e.add(...o),this._appearance=t}static ɵfac=function(e){return new(e||n)};static ɵcmp=(function(){let t=[[[``,8,`material-icons`,3,`iconPositionEnd`,``],[`mat-icon`,3,`iconPositionEnd`,``],[``,`matButtonIcon`,``,3,`iconPositionEnd`,``],[``,8,`material-symbols-outlined`,3,`iconPositionEnd`,``],[``,8,`material-symbols-rounded`,3,`iconPositionEnd`,``],[``,8,`material-symbols-sharp`,3,`iconPositionEnd`,``]],`*`,[[``,`iconPositionEnd`,``,8,`material-icons`],[`mat-icon`,`iconPositionEnd`,``],[``,`matButtonIcon`,``,`iconPositionEnd`,``],[``,`iconPositionEnd`,``,8,`material-symbols-outlined`],[``,`iconPositionEnd`,``,8,`material-symbols-rounded`],[``,`iconPositionEnd`,``,8,`material-symbols-sharp`]],[[``,`progressIndicator`,``]]],e=[`.material-icons:not([iconPositionEnd]), mat-icon:not([iconPositionEnd]), [matButtonIcon]:not([iconPositionEnd]), .material-symbols-outlined:not([iconPositionEnd]), .material-symbols-rounded:not([iconPositionEnd]), .material-symbols-sharp:not([iconPositionEnd])`,`*`,`.material-icons[iconPositionEnd], mat-icon[iconPositionEnd], [matButtonIcon][iconPositionEnd], .material-symbols-outlined[iconPositionEnd], .material-symbols-rounded[iconPositionEnd], .material-symbols-sharp[iconPositionEnd]`,`[progressIndicator]`];function r(o,i){o&1&&(Al$1(0,`div`,2),mC(1,3),Ol$1())}return iw({type:n,selectors:[[`button`,`matButton`,``],[`a`,`matButton`,``],[`button`,`mat-button`,``],[`button`,`mat-raised-button`,``],[`button`,`mat-flat-button`,``],[`button`,`mat-stroked-button`,``],[`a`,`mat-button`,``],[`a`,`mat-raised-button`,``],[`a`,`mat-flat-button`,``],[`a`,`mat-stroked-button`,``]],hostAttrs:[1,`mdc-button`],inputs:{appearance:[0,`matButton`,`appearance`]},exportAs:[`matButton`,`matAnchor`],features:[Mg],ngContentSelectors:e,decls:8,vars:5,consts:[[1,`mat-mdc-button-persistent-ripple`],[1,`mdc-button__label`],[1,`mat-mdc-button-progress-indicator-container`],[1,`mat-focus-indicator`],[1,`mat-mdc-button-touch-target`]],template:function(i,c){i&1&&(gC(t),$g(0,`span`,0),mC(1),Al$1(2,`span`,1),mC(3,1),Ol$1(),mC(4,2),Jw(5,r,2,0,`div`,2),$g(6,`span`,3)(7,`span`,4)),i&2&&(am(`mdc-button__ripple`,!c._isFab)(`mdc-fab__ripple`,c._isFab),mD(5),eC(c.showProgress()?5:-1))},styles:[`.mat-mdc-button-base {
  text-decoration: none;
}
.mat-mdc-button-base .mat-icon {
  min-height: fit-content;
  flex-shrink: 0;
}
@media (hover: none) {
  .mat-mdc-button-base:hover > span.mat-mdc-button-persistent-ripple::before {
    opacity: 0;
  }
}

.mdc-button {
  -webkit-user-select: none;
  user-select: none;
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  min-width: 64px;
  border: none;
  outline: none;
  line-height: inherit;
  -webkit-appearance: none;
  overflow: visible;
  vertical-align: middle;
  background: transparent;
  padding: 0 8px;
}
.mdc-button::-moz-focus-inner {
  padding: 0;
  border: 0;
}
.mdc-button:active {
  outline: none;
}
.mdc-button:hover {
  cursor: pointer;
}
.mdc-button:disabled {
  cursor: default;
  pointer-events: none;
}
.mdc-button[hidden] {
  display: none;
}
.mdc-button .mdc-button__label {
  position: relative;
}

.mat-mdc-button {
  padding: 0 var(--%NS%mat-button-text-horizontal-padding, 12px);
  height: var(--%NS%mat-button-text-container-height, 40px);
  font-family: var(--%NS%mat-button-text-label-text-font, var(--%NS%mat-sys-label-large-font));
  font-size: var(--%NS%mat-button-text-label-text-size, var(--%NS%mat-sys-label-large-size));
  letter-spacing: var(--%NS%mat-button-text-label-text-tracking, var(--%NS%mat-sys-label-large-tracking));
  text-transform: var(--%NS%mat-button-text-label-text-transform);
  font-weight: var(--%NS%mat-button-text-label-text-weight, var(--%NS%mat-sys-label-large-weight));
}
.mat-mdc-button, .mat-mdc-button .mdc-button__ripple {
  border-radius: var(--%NS%mat-button-text-container-shape, var(--%NS%mat-sys-corner-full));
}
.mat-mdc-button:not(:disabled) {
  color: var(--%NS%mat-button-text-label-text-color, var(--%NS%mat-sys-primary));
}
.mat-mdc-button[disabled], .mat-mdc-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--%NS%mat-button-text-disabled-label-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mat-mdc-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}
.mat-mdc-button:has(.material-icons, .material-symbols-outlined, .material-symbols-rounded,
.material-symbols-sharp, mat-icon, [matButtonIcon]) {
  padding: 0 var(--%NS%mat-button-text-with-icon-horizontal-padding, 16px);
}
.mat-mdc-button > .mat-icon {
  margin-right: var(--%NS%mat-button-text-icon-spacing, 8px);
  margin-left: var(--%NS%mat-button-text-icon-offset, -4px);
}
[dir=rtl] .mat-mdc-button > .mat-icon {
  margin-right: var(--%NS%mat-button-text-icon-offset, -4px);
  margin-left: var(--%NS%mat-button-text-icon-spacing, 8px);
}
.mat-mdc-button .mdc-button__label + .mat-icon {
  margin-right: var(--%NS%mat-button-text-icon-offset, -4px);
  margin-left: var(--%NS%mat-button-text-icon-spacing, 8px);
}
[dir=rtl] .mat-mdc-button .mdc-button__label + .mat-icon {
  margin-right: var(--%NS%mat-button-text-icon-spacing, 8px);
  margin-left: var(--%NS%mat-button-text-icon-offset, -4px);
}
.mat-mdc-button .mat-ripple-element {
  background-color: var(--%NS%mat-button-text-ripple-color, color-mix(in srgb, var(--%NS%mat-sys-primary) calc(var(--%NS%mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-button-text-state-layer-color, var(--%NS%mat-sys-primary));
}
.mat-mdc-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-button-text-disabled-state-layer-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-text-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity));
}
.mat-mdc-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-text-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity));
}
.mat-mdc-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-text-pressed-state-layer-opacity, var(--%NS%mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--%NS%mat-button-text-touch-target-size, 48px);
  display: var(--%NS%mat-button-text-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}

.mat-mdc-unelevated-button {
  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);
  height: var(--%NS%mat-button-filled-container-height, 40px);
  font-family: var(--%NS%mat-button-filled-label-text-font, var(--%NS%mat-sys-label-large-font));
  font-size: var(--%NS%mat-button-filled-label-text-size, var(--%NS%mat-sys-label-large-size));
  letter-spacing: var(--%NS%mat-button-filled-label-text-tracking, var(--%NS%mat-sys-label-large-tracking));
  text-transform: var(--%NS%mat-button-filled-label-text-transform);
  font-weight: var(--%NS%mat-button-filled-label-text-weight, var(--%NS%mat-sys-label-large-weight));
  padding: 0 var(--%NS%mat-button-filled-horizontal-padding, 24px);
}
.mat-mdc-unelevated-button > .mat-icon {
  margin-right: var(--%NS%mat-button-filled-icon-spacing, 8px);
  margin-left: var(--%NS%mat-button-filled-icon-offset, -8px);
}
[dir=rtl] .mat-mdc-unelevated-button > .mat-icon {
  margin-right: var(--%NS%mat-button-filled-icon-offset, -8px);
  margin-left: var(--%NS%mat-button-filled-icon-spacing, 8px);
}
.mat-mdc-unelevated-button .mdc-button__label + .mat-icon {
  margin-right: var(--%NS%mat-button-filled-icon-offset, -8px);
  margin-left: var(--%NS%mat-button-filled-icon-spacing, 8px);
}
[dir=rtl] .mat-mdc-unelevated-button .mdc-button__label + .mat-icon {
  margin-right: var(--%NS%mat-button-filled-icon-spacing, 8px);
  margin-left: var(--%NS%mat-button-filled-icon-offset, -8px);
}
.mat-mdc-unelevated-button .mat-ripple-element {
  background-color: var(--%NS%mat-button-filled-ripple-color, color-mix(in srgb, var(--%NS%mat-sys-on-primary) calc(var(--%NS%mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-button-filled-state-layer-color, var(--%NS%mat-sys-on-primary));
}
.mat-mdc-unelevated-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-button-filled-disabled-state-layer-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-unelevated-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-filled-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity));
}
.mat-mdc-unelevated-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-unelevated-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-unelevated-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-filled-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity));
}
.mat-mdc-unelevated-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-filled-pressed-state-layer-opacity, var(--%NS%mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-unelevated-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--%NS%mat-button-filled-touch-target-size, 48px);
  display: var(--%NS%mat-button-filled-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}
.mat-mdc-unelevated-button:not(:disabled) {
  color: var(--%NS%mat-button-filled-label-text-color, var(--%NS%mat-sys-on-primary));
  background-color: var(--%NS%mat-button-filled-container-color, var(--%NS%mat-sys-primary));
}
.mat-mdc-unelevated-button, .mat-mdc-unelevated-button .mdc-button__ripple {
  border-radius: var(--%NS%mat-button-filled-container-shape, var(--%NS%mat-sys-corner-full));
}
.mat-mdc-unelevated-button .mat-mdc-button-progress-indicator-container {
  --%NS%mat-progress-spinner-active-indicator-color: var(--%NS%mat-button-filled-progress-active-indicator-color, var(--%NS%mat-sys-on-primary));
}
.mat-mdc-unelevated-button[disabled], .mat-mdc-unelevated-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--%NS%mat-button-filled-disabled-label-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
  background-color: var(--%NS%mat-button-filled-disabled-container-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 12%, transparent));
}
.mat-mdc-unelevated-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}

.mat-mdc-raised-button {
  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: var(--%NS%mat-button-protected-container-elevation-shadow, var(--%NS%mat-sys-level1));
  height: var(--%NS%mat-button-protected-container-height, 40px);
  font-family: var(--%NS%mat-button-protected-label-text-font, var(--%NS%mat-sys-label-large-font));
  font-size: var(--%NS%mat-button-protected-label-text-size, var(--%NS%mat-sys-label-large-size));
  letter-spacing: var(--%NS%mat-button-protected-label-text-tracking, var(--%NS%mat-sys-label-large-tracking));
  text-transform: var(--%NS%mat-button-protected-label-text-transform);
  font-weight: var(--%NS%mat-button-protected-label-text-weight, var(--%NS%mat-sys-label-large-weight));
  padding: 0 var(--%NS%mat-button-protected-horizontal-padding, 24px);
}
.mat-mdc-raised-button > .mat-icon {
  margin-right: var(--%NS%mat-button-protected-icon-spacing, 8px);
  margin-left: var(--%NS%mat-button-protected-icon-offset, -8px);
}
[dir=rtl] .mat-mdc-raised-button > .mat-icon {
  margin-right: var(--%NS%mat-button-protected-icon-offset, -8px);
  margin-left: var(--%NS%mat-button-protected-icon-spacing, 8px);
}
.mat-mdc-raised-button .mdc-button__label + .mat-icon {
  margin-right: var(--%NS%mat-button-protected-icon-offset, -8px);
  margin-left: var(--%NS%mat-button-protected-icon-spacing, 8px);
}
[dir=rtl] .mat-mdc-raised-button .mdc-button__label + .mat-icon {
  margin-right: var(--%NS%mat-button-protected-icon-spacing, 8px);
  margin-left: var(--%NS%mat-button-protected-icon-offset, -8px);
}
.mat-mdc-raised-button .mat-ripple-element {
  background-color: var(--%NS%mat-button-protected-ripple-color, color-mix(in srgb, var(--%NS%mat-sys-primary) calc(var(--%NS%mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-raised-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-button-protected-state-layer-color, var(--%NS%mat-sys-primary));
}
.mat-mdc-raised-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-button-protected-disabled-state-layer-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-raised-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-protected-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity));
}
.mat-mdc-raised-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-raised-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-raised-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-protected-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity));
}
.mat-mdc-raised-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-protected-pressed-state-layer-opacity, var(--%NS%mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-raised-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--%NS%mat-button-protected-touch-target-size, 48px);
  display: var(--%NS%mat-button-protected-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}
.mat-mdc-raised-button:not(:disabled) {
  color: var(--%NS%mat-button-protected-label-text-color, var(--%NS%mat-sys-primary));
  background-color: var(--%NS%mat-button-protected-container-color, var(--%NS%mat-sys-surface));
}
.mat-mdc-raised-button, .mat-mdc-raised-button .mdc-button__ripple {
  border-radius: var(--%NS%mat-button-protected-container-shape, var(--%NS%mat-sys-corner-full));
}
@media (hover: hover) {
  .mat-mdc-raised-button:hover {
    box-shadow: var(--%NS%mat-button-protected-hover-container-elevation-shadow, var(--%NS%mat-sys-level2));
  }
}
.mat-mdc-raised-button:focus {
  box-shadow: var(--%NS%mat-button-protected-focus-container-elevation-shadow, var(--%NS%mat-sys-level1));
}
.mat-mdc-raised-button:active, .mat-mdc-raised-button:focus:active {
  box-shadow: var(--%NS%mat-button-protected-pressed-container-elevation-shadow, var(--%NS%mat-sys-level1));
}
.mat-mdc-raised-button[disabled], .mat-mdc-raised-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--%NS%mat-button-protected-disabled-label-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
  background-color: var(--%NS%mat-button-protected-disabled-container-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 12%, transparent));
}
.mat-mdc-raised-button[disabled].mat-mdc-button-disabled, .mat-mdc-raised-button.mat-mdc-button-disabled.mat-mdc-button-disabled {
  box-shadow: var(--%NS%mat-button-protected-disabled-container-elevation-shadow, var(--%NS%mat-sys-level0));
}
.mat-mdc-raised-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}

.mat-mdc-outlined-button {
  border-style: solid;
  transition: border 280ms cubic-bezier(0.4, 0, 0.2, 1);
  height: var(--%NS%mat-button-outlined-container-height, 40px);
  font-family: var(--%NS%mat-button-outlined-label-text-font, var(--%NS%mat-sys-label-large-font));
  font-size: var(--%NS%mat-button-outlined-label-text-size, var(--%NS%mat-sys-label-large-size));
  letter-spacing: var(--%NS%mat-button-outlined-label-text-tracking, var(--%NS%mat-sys-label-large-tracking));
  text-transform: var(--%NS%mat-button-outlined-label-text-transform);
  font-weight: var(--%NS%mat-button-outlined-label-text-weight, var(--%NS%mat-sys-label-large-weight));
  border-radius: var(--%NS%mat-button-outlined-container-shape, var(--%NS%mat-sys-corner-full));
  border-width: var(--%NS%mat-button-outlined-outline-width, 1px);
  padding: 0 var(--%NS%mat-button-outlined-horizontal-padding, 24px);
}
.mat-mdc-outlined-button > .mat-icon {
  margin-right: var(--%NS%mat-button-outlined-icon-spacing, 8px);
  margin-left: var(--%NS%mat-button-outlined-icon-offset, -8px);
}
[dir=rtl] .mat-mdc-outlined-button > .mat-icon {
  margin-right: var(--%NS%mat-button-outlined-icon-offset, -8px);
  margin-left: var(--%NS%mat-button-outlined-icon-spacing, 8px);
}
.mat-mdc-outlined-button .mdc-button__label + .mat-icon {
  margin-right: var(--%NS%mat-button-outlined-icon-offset, -8px);
  margin-left: var(--%NS%mat-button-outlined-icon-spacing, 8px);
}
[dir=rtl] .mat-mdc-outlined-button .mdc-button__label + .mat-icon {
  margin-right: var(--%NS%mat-button-outlined-icon-spacing, 8px);
  margin-left: var(--%NS%mat-button-outlined-icon-offset, -8px);
}
.mat-mdc-outlined-button .mat-ripple-element {
  background-color: var(--%NS%mat-button-outlined-ripple-color, color-mix(in srgb, var(--%NS%mat-sys-primary) calc(var(--%NS%mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-button-outlined-state-layer-color, var(--%NS%mat-sys-primary));
}
.mat-mdc-outlined-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-button-outlined-disabled-state-layer-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-outlined-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-outlined-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity));
}
.mat-mdc-outlined-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-outlined-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-outlined-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-outlined-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity));
}
.mat-mdc-outlined-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-outlined-pressed-state-layer-opacity, var(--%NS%mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-outlined-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--%NS%mat-button-outlined-touch-target-size, 48px);
  display: var(--%NS%mat-button-outlined-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}
.mat-mdc-outlined-button:not(:disabled) {
  color: var(--%NS%mat-button-outlined-label-text-color, var(--%NS%mat-sys-primary));
  border-color: var(--%NS%mat-button-outlined-outline-color, var(--%NS%mat-sys-outline));
}
.mat-mdc-outlined-button[disabled], .mat-mdc-outlined-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--%NS%mat-button-outlined-disabled-label-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
  border-color: var(--%NS%mat-button-outlined-disabled-outline-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 12%, transparent));
}
.mat-mdc-outlined-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}

.mat-tonal-button {
  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);
  height: var(--%NS%mat-button-tonal-container-height, 40px);
  font-family: var(--%NS%mat-button-tonal-label-text-font, var(--%NS%mat-sys-label-large-font));
  font-size: var(--%NS%mat-button-tonal-label-text-size, var(--%NS%mat-sys-label-large-size));
  letter-spacing: var(--%NS%mat-button-tonal-label-text-tracking, var(--%NS%mat-sys-label-large-tracking));
  text-transform: var(--%NS%mat-button-tonal-label-text-transform);
  font-weight: var(--%NS%mat-button-tonal-label-text-weight, var(--%NS%mat-sys-label-large-weight));
  padding: 0 var(--%NS%mat-button-tonal-horizontal-padding, 24px);
}
.mat-tonal-button:not(:disabled) {
  color: var(--%NS%mat-button-tonal-label-text-color, var(--%NS%mat-sys-on-secondary-container));
  background-color: var(--%NS%mat-button-tonal-container-color, var(--%NS%mat-sys-secondary-container));
}
.mat-tonal-button, .mat-tonal-button .mdc-button__ripple {
  border-radius: var(--%NS%mat-button-tonal-container-shape, var(--%NS%mat-sys-corner-full));
}
.mat-tonal-button[disabled], .mat-tonal-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--%NS%mat-button-tonal-disabled-label-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
  background-color: var(--%NS%mat-button-tonal-disabled-container-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 12%, transparent));
}
.mat-tonal-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}
.mat-tonal-button > .mat-icon {
  margin-right: var(--%NS%mat-button-tonal-icon-spacing, 8px);
  margin-left: var(--%NS%mat-button-tonal-icon-offset, -8px);
}
[dir=rtl] .mat-tonal-button > .mat-icon {
  margin-right: var(--%NS%mat-button-tonal-icon-offset, -8px);
  margin-left: var(--%NS%mat-button-tonal-icon-spacing, 8px);
}
.mat-tonal-button .mdc-button__label + .mat-icon {
  margin-right: var(--%NS%mat-button-tonal-icon-offset, -8px);
  margin-left: var(--%NS%mat-button-tonal-icon-spacing, 8px);
}
[dir=rtl] .mat-tonal-button .mdc-button__label + .mat-icon {
  margin-right: var(--%NS%mat-button-tonal-icon-spacing, 8px);
  margin-left: var(--%NS%mat-button-tonal-icon-offset, -8px);
}
.mat-tonal-button .mat-ripple-element {
  background-color: var(--%NS%mat-button-tonal-ripple-color, color-mix(in srgb, var(--%NS%mat-sys-on-secondary-container) calc(var(--%NS%mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-tonal-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-button-tonal-state-layer-color, var(--%NS%mat-sys-on-secondary-container));
}
.mat-tonal-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-button-tonal-disabled-state-layer-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-tonal-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-tonal-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity));
}
.mat-tonal-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-tonal-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-tonal-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-tonal-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity));
}
.mat-tonal-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-tonal-pressed-state-layer-opacity, var(--%NS%mat-sys-pressed-state-layer-opacity));
}
.mat-tonal-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--%NS%mat-button-tonal-touch-target-size, 48px);
  display: var(--%NS%mat-button-tonal-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}

.mat-mdc-button,
.mat-mdc-unelevated-button,
.mat-mdc-raised-button,
.mat-mdc-outlined-button,
.mat-tonal-button {
  -webkit-tap-highlight-color: transparent;
}
.mat-mdc-button .mat-mdc-button-ripple,
.mat-mdc-button .mat-mdc-button-persistent-ripple,
.mat-mdc-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-unelevated-button .mat-mdc-button-ripple,
.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple,
.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-raised-button .mat-mdc-button-ripple,
.mat-mdc-raised-button .mat-mdc-button-persistent-ripple,
.mat-mdc-raised-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-outlined-button .mat-mdc-button-ripple,
.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple,
.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple::before,
.mat-tonal-button .mat-mdc-button-ripple,
.mat-tonal-button .mat-mdc-button-persistent-ripple,
.mat-tonal-button .mat-mdc-button-persistent-ripple::before {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
  border-radius: inherit;
}
.mat-mdc-button .mat-mdc-button-ripple,
.mat-mdc-unelevated-button .mat-mdc-button-ripple,
.mat-mdc-raised-button .mat-mdc-button-ripple,
.mat-mdc-outlined-button .mat-mdc-button-ripple,
.mat-tonal-button .mat-mdc-button-ripple {
  overflow: hidden;
}
.mat-mdc-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-raised-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple::before,
.mat-tonal-button .mat-mdc-button-persistent-ripple::before {
  content: "";
  opacity: 0;
}
.mat-mdc-button .mdc-button__label,
.mat-mdc-button .mat-icon,
.mat-mdc-unelevated-button .mdc-button__label,
.mat-mdc-unelevated-button .mat-icon,
.mat-mdc-raised-button .mdc-button__label,
.mat-mdc-raised-button .mat-icon,
.mat-mdc-outlined-button .mdc-button__label,
.mat-mdc-outlined-button .mat-icon,
.mat-tonal-button .mdc-button__label,
.mat-tonal-button .mat-icon {
  z-index: 1;
  position: relative;
}
.mat-mdc-button .mat-focus-indicator,
.mat-mdc-unelevated-button .mat-focus-indicator,
.mat-mdc-raised-button .mat-focus-indicator,
.mat-mdc-outlined-button .mat-focus-indicator,
.mat-tonal-button .mat-focus-indicator {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  border-radius: inherit;
}
.mat-mdc-button:focus-visible > .mat-focus-indicator::before,
.mat-mdc-unelevated-button:focus-visible > .mat-focus-indicator::before,
.mat-mdc-raised-button:focus-visible > .mat-focus-indicator::before,
.mat-mdc-outlined-button:focus-visible > .mat-focus-indicator::before,
.mat-tonal-button:focus-visible > .mat-focus-indicator::before {
  content: "";
  border-radius: inherit;
}
.mat-mdc-button._mat-animation-noopable,
.mat-mdc-unelevated-button._mat-animation-noopable,
.mat-mdc-raised-button._mat-animation-noopable,
.mat-mdc-outlined-button._mat-animation-noopable,
.mat-tonal-button._mat-animation-noopable {
  transition: none !important;
  animation: none !important;
}
.mat-mdc-button > .mat-icon,
.mat-mdc-unelevated-button > .mat-icon,
.mat-mdc-raised-button > .mat-icon,
.mat-mdc-outlined-button > .mat-icon,
.mat-tonal-button > .mat-icon {
  display: inline-block;
  position: relative;
  vertical-align: top;
  font-size: 1.125rem;
  height: 1.125rem;
  width: 1.125rem;
}

.mat-mdc-outlined-button .mat-mdc-button-ripple,
.mat-mdc-outlined-button .mdc-button__ripple {
  top: -1px;
  left: -1px;
  bottom: -1px;
  right: -1px;
}

.mat-mdc-unelevated-button .mat-focus-indicator::before,
.mat-tonal-button .mat-focus-indicator::before,
.mat-mdc-raised-button .mat-focus-indicator::before {
  margin: calc(calc(var(--%NS%mat-focus-indicator-border-width, 3px) + 2px) * -1);
}

.mat-mdc-outlined-button .mat-focus-indicator::before {
  margin: calc(calc(var(--%NS%mat-focus-indicator-border-width, 3px) + 3px) * -1);
}

.mat-mdc-button-progress-indicator-container {
  position: absolute;
  inset-inline-start: 0;
  inset-block-start: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
}

.mat-mdc-button-progress-indicator-shown mat-icon,
.mat-mdc-button-progress-indicator-shown [matButtonIcon],
.mat-mdc-button-progress-indicator-shown .mdc-button__label {
  visibility: hidden;
}
`,`@media (forced-colors: active) {
  .mat-mdc-button:not(.mdc-button--outlined),
  .mat-mdc-unelevated-button:not(.mdc-button--outlined),
  .mat-mdc-raised-button:not(.mdc-button--outlined),
  .mat-mdc-outlined-button:not(.mdc-button--outlined),
  .mat-mdc-button-base.mat-tonal-button,
  .mat-mdc-icon-button.mat-mdc-icon-button,
  .mat-mdc-outlined-button .mdc-button__ripple {
    outline: solid 1px;
  }
}
`],encapsulation:2})})()}return n})();function ad(n){return n.hasAttribute(`mat-raised-button`)?`elevated`:n.hasAttribute(`mat-stroked-button`)?`outlined`:n.hasAttribute(`mat-flat-button`)?`filled`:n.hasAttribute(`mat-button`)?`text`:null}var rd=new _$1(`mat-mdc-fab-default-options`,{providedIn:`root`,factory:()=>xr});var xr={color:`accent`};var $h=(()=>{class n extends da{_options=y(rd,{optional:!0});_isFab=!0;extended=!1;constructor(){super(),this._options=this._options||xr,this.color=this._options.color||xr.color}static ɵfac=function(e){return new(e||n)};static ɵcmp=(function(){let t=[[[``,8,`material-icons`,3,`iconPositionEnd`,``],[`mat-icon`,3,`iconPositionEnd`,``],[``,`matButtonIcon`,``,3,`iconPositionEnd`,``],[``,8,`material-symbols-outlined`,3,`iconPositionEnd`,``],[``,8,`material-symbols-rounded`,3,`iconPositionEnd`,``],[``,8,`material-symbols-sharp`,3,`iconPositionEnd`,``]],`*`,[[``,`iconPositionEnd`,``,8,`material-icons`],[`mat-icon`,`iconPositionEnd`,``],[``,`matButtonIcon`,``,`iconPositionEnd`,``],[``,`iconPositionEnd`,``,8,`material-symbols-outlined`],[``,`iconPositionEnd`,``,8,`material-symbols-rounded`],[``,`iconPositionEnd`,``,8,`material-symbols-sharp`]],[[``,`progressIndicator`,``]]],e=[`.material-icons:not([iconPositionEnd]), mat-icon:not([iconPositionEnd]), [matButtonIcon]:not([iconPositionEnd]), .material-symbols-outlined:not([iconPositionEnd]), .material-symbols-rounded:not([iconPositionEnd]), .material-symbols-sharp:not([iconPositionEnd])`,`*`,`.material-icons[iconPositionEnd], mat-icon[iconPositionEnd], [matButtonIcon][iconPositionEnd], .material-symbols-outlined[iconPositionEnd], .material-symbols-rounded[iconPositionEnd], .material-symbols-sharp[iconPositionEnd]`,`[progressIndicator]`];function r(o,i){o&1&&(Al$1(0,`div`,2),mC(1,3),Ol$1())}return iw({type:n,selectors:[[`button`,`mat-fab`,``],[`a`,`mat-fab`,``],[`button`,`matFab`,``],[`a`,`matFab`,``]],hostAttrs:[1,`mdc-fab`,`mat-mdc-fab-base`,`mat-mdc-fab`],hostVars:4,hostBindings:function(i,c){i&2&&am(`mdc-fab--extended`,c.extended)(`mat-mdc-extended-fab`,c.extended)},inputs:{extended:[2,`extended`,`extended`,ij]},exportAs:[`matButton`,`matAnchor`],features:[Mg],ngContentSelectors:e,decls:8,vars:5,consts:[[1,`mat-mdc-button-persistent-ripple`],[1,`mdc-button__label`],[1,`mat-mdc-button-progress-indicator-container`],[1,`mat-focus-indicator`],[1,`mat-mdc-button-touch-target`]],template:function(i,c){i&1&&(gC(t),$g(0,`span`,0),mC(1),Al$1(2,`span`,1),mC(3,1),Ol$1(),mC(4,2),Jw(5,r,2,0,`div`,2),$g(6,`span`,3)(7,`span`,4)),i&2&&(am(`mdc-button__ripple`,!c._isFab)(`mdc-fab__ripple`,c._isFab),mD(5),eC(c.showProgress()?5:-1))},styles:[`.mat-mdc-fab-base {
  -webkit-user-select: none;
  user-select: none;
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  width: 56px;
  height: 56px;
  padding: 0;
  border: none;
  fill: currentColor;
  text-decoration: none;
  cursor: pointer;
  -moz-appearance: none;
  -webkit-appearance: none;
  overflow: visible;
  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1), opacity 15ms linear 30ms, transform 270ms 0ms cubic-bezier(0, 0, 0.2, 1);
  flex-shrink: 0;
  -webkit-tap-highlight-color: transparent;
}
.mat-mdc-fab-base .mat-mdc-button-ripple,
.mat-mdc-fab-base .mat-mdc-button-persistent-ripple,
.mat-mdc-fab-base .mat-mdc-button-persistent-ripple::before {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
  border-radius: inherit;
}
.mat-mdc-fab-base .mat-mdc-button-ripple {
  overflow: hidden;
}
.mat-mdc-fab-base .mat-mdc-button-persistent-ripple::before {
  content: "";
  opacity: 0;
}
.mat-mdc-fab-base .mdc-button__label,
.mat-mdc-fab-base .mat-icon {
  z-index: 1;
  position: relative;
}
.mat-mdc-fab-base .mat-focus-indicator {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
}
.mat-mdc-fab-base:focus-visible > .mat-focus-indicator::before {
  content: "";
}
.mat-mdc-fab-base._mat-animation-noopable {
  transition: none !important;
  animation: none !important;
}
.mat-mdc-fab-base::before {
  position: absolute;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  border: 1px solid transparent;
  border-radius: inherit;
  content: "";
  pointer-events: none;
}
.mat-mdc-fab-base[hidden] {
  display: none;
}
.mat-mdc-fab-base::-moz-focus-inner {
  padding: 0;
  border: 0;
}
.mat-mdc-fab-base:active, .mat-mdc-fab-base:focus {
  outline: none;
}
.mat-mdc-fab-base:hover {
  cursor: pointer;
}
.mat-mdc-fab-base > svg {
  width: 100%;
}
.mat-mdc-fab-base .mat-icon,
.mat-mdc-fab-base .material-icons,
.mat-mdc-fab-base .material-symbols-outlined,
.mat-mdc-fab-base .material-symbols-rounded,
.mat-mdc-fab-base .material-symbols-sharp {
  transition: transform 180ms 90ms cubic-bezier(0, 0, 0.2, 1);
  fill: currentColor;
  will-change: transform;
}
.mat-mdc-fab-base .mat-focus-indicator::before {
  margin: calc(calc(var(--%NS%mat-focus-indicator-border-width, 3px) + 2px) * -1);
  border-radius: calc(var(--%NS%mat-fab-container-shape, var(--%NS%mat-sys-corner-large)) + calc(var(--%NS%mat-focus-indicator-border-width, 3px) + 2px));
}
.mat-mdc-fab-base[disabled], .mat-mdc-fab-base.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
}
.mat-mdc-fab-base[disabled], .mat-mdc-fab-base[disabled]:focus, .mat-mdc-fab-base.mat-mdc-button-disabled, .mat-mdc-fab-base.mat-mdc-button-disabled:focus {
  box-shadow: none;
}
.mat-mdc-fab-base.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}

.mat-mdc-fab {
  background-color: var(--%NS%mat-fab-container-color, var(--%NS%mat-sys-primary-container));
  border-radius: var(--%NS%mat-fab-container-shape, var(--%NS%mat-sys-corner-large));
  color: var(--%NS%mat-fab-foreground-color, var(--%NS%mat-sys-on-primary-container, inherit));
  box-shadow: var(--%NS%mat-fab-container-elevation-shadow, var(--%NS%mat-sys-level3));
}
@media (hover: hover) {
  .mat-mdc-fab:hover {
    box-shadow: var(--%NS%mat-fab-hover-container-elevation-shadow, var(--%NS%mat-sys-level4));
  }
}
.mat-mdc-fab:focus {
  box-shadow: var(--%NS%mat-fab-focus-container-elevation-shadow, var(--%NS%mat-sys-level3));
}
.mat-mdc-fab:active, .mat-mdc-fab:focus:active {
  box-shadow: var(--%NS%mat-fab-pressed-container-elevation-shadow, var(--%NS%mat-sys-level3));
}
.mat-mdc-fab[disabled], .mat-mdc-fab.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--%NS%mat-fab-disabled-state-foreground-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
  background-color: var(--%NS%mat-fab-disabled-state-container-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 12%, transparent));
}
.mat-mdc-fab.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}
.mat-mdc-fab .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--%NS%mat-fab-touch-target-size, 48px);
  display: var(--%NS%mat-fab-touch-target-display, block);
  left: 50%;
  width: var(--%NS%mat-fab-touch-target-size, 48px);
  transform: translate(-50%, -50%);
}
.mat-mdc-fab .mat-ripple-element {
  background-color: var(--%NS%mat-fab-ripple-color, color-mix(in srgb, var(--%NS%mat-sys-on-primary-container) calc(var(--%NS%mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-fab .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-fab-state-layer-color, var(--%NS%mat-sys-on-primary-container));
}
.mat-mdc-fab.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-fab-disabled-state-layer-color);
}
.mat-mdc-fab:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-fab-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity));
}
.mat-mdc-fab.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-fab.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-fab.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-fab-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity));
}
.mat-mdc-fab:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-fab-pressed-state-layer-opacity, var(--%NS%mat-sys-pressed-state-layer-opacity));
}

.mat-mdc-mini-fab {
  width: 40px;
  height: 40px;
  background-color: var(--%NS%mat-fab-small-container-color, var(--%NS%mat-sys-primary-container));
  border-radius: var(--%NS%mat-fab-small-container-shape, var(--%NS%mat-sys-corner-medium));
  color: var(--%NS%mat-fab-small-foreground-color, var(--%NS%mat-sys-on-primary-container, inherit));
  box-shadow: var(--%NS%mat-fab-small-container-elevation-shadow, var(--%NS%mat-sys-level3));
}
@media (hover: hover) {
  .mat-mdc-mini-fab:hover {
    box-shadow: var(--%NS%mat-fab-small-hover-container-elevation-shadow, var(--%NS%mat-sys-level4));
  }
}
.mat-mdc-mini-fab:focus {
  box-shadow: var(--%NS%mat-fab-small-focus-container-elevation-shadow, var(--%NS%mat-sys-level3));
}
.mat-mdc-mini-fab:active, .mat-mdc-mini-fab:focus:active {
  box-shadow: var(--%NS%mat-fab-small-pressed-container-elevation-shadow, var(--%NS%mat-sys-level3));
}
.mat-mdc-mini-fab .mat-focus-indicator::before {
  border-radius: calc(var(--%NS%mat-fab-small-container-shape, var(--%NS%mat-sys-corner-medium)) + calc(var(--%NS%mat-focus-indicator-border-width, 3px) + 2px));
}
.mat-mdc-mini-fab[disabled], .mat-mdc-mini-fab.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--%NS%mat-fab-small-disabled-state-foreground-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
  background-color: var(--%NS%mat-fab-small-disabled-state-container-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 12%, transparent));
}
.mat-mdc-mini-fab.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}
.mat-mdc-mini-fab .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--%NS%mat-fab-small-touch-target-size, 48px);
  display: var(--%NS%mat-fab-small-touch-target-display);
  left: 50%;
  width: var(--%NS%mat-fab-small-touch-target-size, 48px);
  transform: translate(-50%, -50%);
}
.mat-mdc-mini-fab .mat-ripple-element {
  background-color: var(--%NS%mat-fab-small-ripple-color, color-mix(in srgb, var(--%NS%mat-sys-on-primary-container) calc(var(--%NS%mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-mini-fab .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-fab-small-state-layer-color, var(--%NS%mat-sys-on-primary-container));
}
.mat-mdc-mini-fab.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-fab-small-disabled-state-layer-color);
}
.mat-mdc-mini-fab:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-fab-small-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity));
}
.mat-mdc-mini-fab.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-mini-fab.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-mini-fab.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-fab-small-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity));
}
.mat-mdc-mini-fab:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-fab-small-pressed-state-layer-opacity, var(--%NS%mat-sys-pressed-state-layer-opacity));
}

.mat-mdc-extended-fab {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  padding-left: 20px;
  padding-right: 20px;
  width: auto;
  max-width: 100%;
  line-height: normal;
  box-shadow: var(--%NS%mat-fab-extended-container-elevation-shadow, var(--%NS%mat-sys-level3));
  height: var(--%NS%mat-fab-extended-container-height, 56px);
  border-radius: var(--%NS%mat-fab-extended-container-shape, var(--%NS%mat-sys-corner-large));
  font-family: var(--%NS%mat-fab-extended-label-text-font, var(--%NS%mat-sys-label-large-font));
  font-size: var(--%NS%mat-fab-extended-label-text-size, var(--%NS%mat-sys-label-large-size));
  font-weight: var(--%NS%mat-fab-extended-label-text-weight, var(--%NS%mat-sys-label-large-weight));
  letter-spacing: var(--%NS%mat-fab-extended-label-text-tracking, var(--%NS%mat-sys-label-large-tracking));
}
@media (hover: hover) {
  .mat-mdc-extended-fab:hover {
    box-shadow: var(--%NS%mat-fab-extended-hover-container-elevation-shadow, var(--%NS%mat-sys-level4));
  }
}
.mat-mdc-extended-fab:focus {
  box-shadow: var(--%NS%mat-fab-extended-focus-container-elevation-shadow, var(--%NS%mat-sys-level3));
}
.mat-mdc-extended-fab:active, .mat-mdc-extended-fab:focus:active {
  box-shadow: var(--%NS%mat-fab-extended-pressed-container-elevation-shadow, var(--%NS%mat-sys-level3));
}
.mat-mdc-extended-fab[disabled], .mat-mdc-extended-fab.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
}
.mat-mdc-extended-fab[disabled], .mat-mdc-extended-fab[disabled]:focus, .mat-mdc-extended-fab.mat-mdc-button-disabled, .mat-mdc-extended-fab.mat-mdc-button-disabled:focus {
  box-shadow: none;
}
.mat-mdc-extended-fab.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}
[dir=rtl] .mat-mdc-extended-fab .mdc-button__label + .mat-icon, [dir=rtl] .mat-mdc-extended-fab .mdc-button__label + .material-icons, [dir=rtl] .mat-mdc-extended-fab .mdc-button__label + .material-symbols-outlined, [dir=rtl] .mat-mdc-extended-fab .mdc-button__label + .material-symbols-rounded, [dir=rtl] .mat-mdc-extended-fab .mdc-button__label + .material-symbols-sharp,
.mat-mdc-extended-fab > .mat-icon,
.mat-mdc-extended-fab > .material-icons,
.mat-mdc-extended-fab > .material-symbols-outlined,
.mat-mdc-extended-fab > .material-symbols-rounded,
.mat-mdc-extended-fab > .material-symbols-sharp {
  margin-left: -8px;
  margin-right: 12px;
}
.mat-mdc-extended-fab .mdc-button__label + .mat-icon,
.mat-mdc-extended-fab .mdc-button__label + .material-icons,
.mat-mdc-extended-fab .mdc-button__label + .material-symbols-outlined,
.mat-mdc-extended-fab .mdc-button__label + .material-symbols-rounded,
.mat-mdc-extended-fab .mdc-button__label + .material-symbols-sharp, [dir=rtl] .mat-mdc-extended-fab > .mat-icon, [dir=rtl] .mat-mdc-extended-fab > .material-icons, [dir=rtl] .mat-mdc-extended-fab > .material-symbols-outlined, [dir=rtl] .mat-mdc-extended-fab > .material-symbols-rounded, [dir=rtl] .mat-mdc-extended-fab > .material-symbols-sharp {
  margin-left: 12px;
  margin-right: -8px;
}
.mat-mdc-extended-fab .mat-mdc-button-touch-target {
  width: 100%;
}

.mat-mdc-button-progress-indicator-container {
  position: absolute;
  inset-inline-start: 0;
  margin-block-start: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
}

.mat-mdc-button-progress-indicator-shown mat-icon,
.mat-mdc-button-progress-indicator-shown [matButtonIcon],
.mat-mdc-button-progress-indicator-shown .mdc-button__label {
  visibility: hidden;
}
`],encapsulation:2})})()}return n})();var be=20;var B=(()=>{class s{_ngZone=y(Pe$2);_platform=y(V$1);_renderer=y(Lr).createRenderer(null,null);_cleanupGlobalListener;_scrolled=new ee$1;_scrolledCount=0;scrollContainers=/* @__PURE__ */ new Map;register(t){this.scrollContainers.has(t)||this.scrollContainers.set(t,t.elementScrolled().subscribe(()=>this._scrolled.next(t)))}deregister(t){let e=this.scrollContainers.get(t);e&&(e.unsubscribe(),this.scrollContainers.delete(t))}scrolled(t=be){return this._platform.isBrowser?new x(e=>{this._cleanupGlobalListener||(this._cleanupGlobalListener=this._ngZone.runOutsideAngular(()=>this._renderer.listen(`document`,`scroll`,()=>this._scrolled.next())));let n=t>0?this._scrolled.pipe(By(t)).subscribe(e):this._scrolled.subscribe(e);return this._scrolledCount++,()=>{n.unsubscribe(),this._scrolledCount--,this._scrolledCount||(this._cleanupGlobalListener?.(),this._cleanupGlobalListener=void 0)}}):_y()}ngOnDestroy(){this._cleanupGlobalListener?.(),this._cleanupGlobalListener=void 0,this.scrollContainers.forEach((t,e)=>this.deregister(e)),this._scrolled.complete()}ancestorScrolled(t,e){let n=this.getAncestorScrollContainers(t);return this.scrolled(e).pipe(Jn$1(o=>!o||n.indexOf(o)>-1))}getAncestorScrollContainers(t){let e=[];return this.scrollContainers.forEach((n,o)=>{this._targetContainsElement(o,t)&&e.push(o)}),e}_targetContainsElement(t,e){let n=Rt(e),o=t.getElementRef().nativeElement;do if(n==o)return!0;while(n=n.parentElement);return!1}static ɵfac=function(e){return new(e||s)};static ɵprov=Vr({token:s,factory:s.ɵfac})}return s})();var we$1=(()=>{class s{elementRef=y(Hr);scrollDispatcher=y(B);ngZone=y(Pe$2);dir=y(Sl,{optional:!0});_scrollElement=this.elementRef.nativeElement;_destroyed=new ee$1;_renderer=y(mc$1);_cleanupScroll;_elementScrolled=new ee$1;ngOnInit(){this._cleanupScroll=this.ngZone.runOutsideAngular(()=>this._renderer.listen(this._scrollElement,`scroll`,t=>this._elementScrolled.next(t))),this.scrollDispatcher.register(this)}ngOnDestroy(){this._cleanupScroll?.(),this._elementScrolled.complete(),this.scrollDispatcher.deregister(this),this._destroyed.next(),this._destroyed.complete()}elementScrolled(){return this._elementScrolled}getElementRef(){return this.elementRef}scrollTo(t){let e=this.elementRef.nativeElement,n=this.dir&&this.dir.value==`rtl`;t.left??=n?t.end:t.start,t.right??=n?t.start:t.end,t.bottom!=null&&(t.top=e.scrollHeight-e.clientHeight-t.bottom),n&&jf()!=Xe.NORMAL?(t.left!=null&&(t.right=e.scrollWidth-e.clientWidth-t.left),jf()==Xe.INVERTED?t.left=t.right:jf()==Xe.NEGATED&&(t.left=t.right?-t.right:t.right)):t.right!=null&&(t.left=e.scrollWidth-e.clientWidth-t.right),this._applyScrollToOptions(t)}_applyScrollToOptions(t){let e=this.elementRef.nativeElement;Ff()?e.scrollTo(t):(t.top!=null&&(e.scrollTop=t.top),t.left!=null&&(e.scrollLeft=t.left))}measureScrollOffset(t){let e=`left`,n=`right`,o=this.elementRef.nativeElement;if(t==`top`)return o.scrollTop;if(t==`bottom`)return o.scrollHeight-o.clientHeight-o.scrollTop;let r=this.dir&&this.dir.value==`rtl`;return t==`start`?t=r?n:e:t==`end`&&(t=r?e:n),r&&jf()==Xe.INVERTED?t==e?o.scrollWidth-o.clientWidth-o.scrollLeft:o.scrollLeft:r&&jf()==Xe.NEGATED?t==e?o.scrollLeft+o.scrollWidth-o.clientWidth:-o.scrollLeft:t==e?o.scrollLeft:o.scrollWidth-o.clientWidth-o.scrollLeft}static ɵfac=function(e){return new(e||s)};static ɵdir=uw({type:s,selectors:[[``,`cdk-scrollable`,``],[``,`cdkScrollable`,``]]})}return s})();var Ce$1=20;var z=(()=>{class s{_platform=y(V$1);_listeners;_viewportSize=null;_change=new ee$1;_document=y(pt);constructor(){let t=y(Pe$2),e=y(Lr).createRenderer(null,null);t.runOutsideAngular(()=>{if(this._platform.isBrowser){let n=o=>this._change.next(o);this._listeners=[e.listen(`window`,`resize`,n),e.listen(`window`,`orientationchange`,n)]}this.change().subscribe(()=>this._viewportSize=null)})}ngOnDestroy(){this._listeners?.forEach(t=>t()),this._change.complete()}getViewportSize(){this._viewportSize||this._updateViewportSize();let t={width:this._viewportSize.width,height:this._viewportSize.height};return this._platform.isBrowser||(this._viewportSize=null),t}getViewportRect(){let t=this.getViewportScrollPosition(),{width:e,height:n}=this.getViewportSize();return{top:t.top,left:t.left,bottom:t.top+n,right:t.left+e,height:n,width:e}}getViewportScrollPosition(){if(!this._platform.isBrowser)return{top:0,left:0};let t=this._document,e=this._getWindow(),n=t.documentElement,o=n.getBoundingClientRect();return{top:-o.top||t.body?.scrollTop||e.scrollY||n.scrollTop||0,left:-o.left||t.body?.scrollLeft||e.scrollX||n.scrollLeft||0}}change(t=Ce$1){return t>0?this._change.pipe(By(t)):this._change}_getWindow(){return this._document.defaultView||window}_updateViewportSize(){let t=this._getWindow();this._viewportSize=this._platform.isBrowser?{width:t.innerWidth,height:t.innerHeight}:{width:0,height:0}}static ɵfac=function(e){return new(e||s)};static ɵprov=Vr({token:s,factory:s.ɵfac})}return s})();var H=class{_attachedHost=null;attach(i){return this._attachedHost=i,i.attach(this)}detach(){let i=this._attachedHost;i!=null&&(this._attachedHost=null,i.detach())}get isAttached(){return this._attachedHost!=null}setAttachedHost(i){this._attachedHost=i}};var Y=class extends H{component;viewContainerRef;injector;projectableNodes;bindings;directives;constructor(i,t,e,n,o,r){super(),this.component=i,this.viewContainerRef=t,this.injector=e,this.projectableNodes=n,this.bindings=o||null,this.directives=r||null}};var Z$1=class extends H{templateRef;viewContainerRef;context;injector;constructor(i,t,e,n){super(),this.templateRef=i,this.viewContainerRef=t,this.context=e,this.injector=n}get origin(){return this.templateRef.elementRef}attach(i,t=this.context){return this.context=t,super.attach(i)}detach(){return this.context=void 0,super.detach()}};var xt=class extends H{element;constructor(i){super(),this.element=i instanceof Hr?i.nativeElement:i}};var $=class{_attachedPortal=null;_disposeFn=null;_isDisposed=!1;hasAttached(){return!!this._attachedPortal}attach(i){if(i instanceof Y)return this._attachedPortal=i,this.attachComponentPortal(i);if(i instanceof Z$1)return this._attachedPortal=i,this.attachTemplatePortal(i);if(this.attachDomPortal&&i instanceof xt)return this._attachedPortal=i,this.attachDomPortal(i)}attachDomPortal=null;detach(){this._attachedPortal&&(this._attachedPortal.setAttachedHost(null),this._attachedPortal=null),this._invokeDisposeFn()}dispose(){this.hasAttached()&&this.detach(),this._invokeDisposeFn(),this._isDisposed=!0}setDisposeFn(i){this._disposeFn=i}_invokeDisposeFn(){this._disposeFn&&(this._disposeFn(),this._disposeFn=null)}};var K=class extends ${outletElement;_appRef;_defaultInjector;constructor(i,t,e){super(),this.outletElement=i,this._appRef=t,this._defaultInjector=e}attachComponentPortal(i){let t;if(i.viewContainerRef){let e=i.injector||i.viewContainerRef.injector,n=e.get(Fn$1,null,{optional:!0})||void 0;t=i.viewContainerRef.createComponent(i.component,{index:i.viewContainerRef.length,injector:e,ngModuleRef:n,projectableNodes:i.projectableNodes||void 0,bindings:i.bindings||void 0,directives:i.directives||void 0}),this.setDisposeFn(()=>t.destroy())}else{let e=this._appRef,n=i.injector||this._defaultInjector||ne$2.NULL,o=n.get(ve,e.injector);t=cj(i.component,{elementInjector:n,environmentInjector:o,projectableNodes:i.projectableNodes||void 0,bindings:i.bindings||void 0,directives:i.directives||void 0}),e.attachView(t.hostView),this.setDisposeFn(()=>{e.viewCount>0&&e.detachView(t.hostView),t.destroy()})}return this.outletElement.appendChild(this._getComponentRootNode(t)),this._attachedPortal=i,t}attachTemplatePortal(i){let t=i.viewContainerRef,e=t.createEmbeddedView(i.templateRef,i.context,{injector:i.injector});return e.rootNodes.forEach(n=>this.outletElement.appendChild(n)),e.detectChanges(),this.setDisposeFn(()=>{let n=t.indexOf(e);n!==-1&&t.remove(n)}),this._attachedPortal=i,e}attachDomPortal=i=>{let t=i.element;t.parentNode;let e=this.outletElement.ownerDocument.createComment(`dom-portal`);t.parentNode.insertBefore(e,t),this.outletElement.appendChild(t),this._attachedPortal=i,super.setDisposeFn(()=>{e.parentNode&&e.parentNode.replaceChild(t,e)})};dispose(){super.dispose(),this.outletElement.remove()}_getComponentRootNode(i){return i.hostView.rootNodes[0]}};var wi=(()=>{class s extends ${_moduleRef=y(Fn$1,{optional:!0});_document=y(pt);_viewContainerRef=y(rs$1);_isInitialized=!1;_attachedRef=null;get portal(){return this._attachedPortal}set portal(t){this.hasAttached()&&!t&&!this._isInitialized||(this.hasAttached()&&super.detach(),t&&super.attach(t),this._attachedPortal=t||null)}attached=new qe$1;get attachedRef(){return this._attachedRef}ngOnInit(){this._isInitialized=!0}ngOnDestroy(){super.dispose(),this._attachedRef=this._attachedPortal=null}attachComponentPortal(t){t.setAttachedHost(this);let e=t.viewContainerRef!=null?t.viewContainerRef:this._viewContainerRef,n=e.createComponent(t.component,{index:e.length,injector:t.injector||e.injector,projectableNodes:t.projectableNodes||void 0,ngModuleRef:this._moduleRef||void 0,bindings:t.bindings||void 0,directives:t.directives||void 0});return e!==this._viewContainerRef&&this._insertContent(n.hostView.rootNodes[0]),super.setDisposeFn(()=>n.destroy()),this._attachedPortal=t,this._attachedRef=n,this.attached.emit(n),n}attachTemplatePortal(t){t.setAttachedHost(this);let e=this._viewContainerRef.createEmbeddedView(t.templateRef,t.context,{injector:t.injector});return super.setDisposeFn(()=>this._viewContainerRef.clear()),this._attachedPortal=t,this._attachedRef=e,this.attached.emit(e),e}attachDomPortal=t=>{let e=t.element;e.parentNode;let n=this._document.createComment(`dom-portal`);t.setAttachedHost(this),e.parentNode.insertBefore(n,e),this._insertContent(e),this._attachedPortal=t,super.setDisposeFn(()=>n.parentNode?.replaceChild(e,n))};_insertContent(t){let e=this._viewContainerRef.element.nativeElement;e.nodeType===e.ELEMENT_NODE?e.appendChild(t):e.parentNode?.insertBefore(t,e)}static ɵfac=(()=>{let t;return function(n){return(t||(t=ME(s)))(n||s)}})();static ɵdir=uw({type:s,selectors:[[``,`cdkPortalOutlet`,``]],inputs:{portal:[0,`cdkPortalOutlet`,`portal`]},outputs:{attached:`attached`},exportAs:[`cdkPortalOutlet`],features:[Mg]})}return s})();var ne=Ff();function ke(s){return new q(s.get(z),s.get(pt))}var q=class{_viewportRuler;_previousHTMLStyles={top:``,left:``};_previousScrollPosition;_isEnabled=!1;_document;constructor(i,t){this._viewportRuler=i,this._document=t}attach(){}enable(){if(this._canBeEnabled()){let i=this._document.documentElement;this._previousScrollPosition=this._viewportRuler.getViewportScrollPosition(),this._previousHTMLStyles.left=i.style.left||``,this._previousHTMLStyles.top=i.style.top||``,i.style.left=th(-this._previousScrollPosition.left),i.style.top=th(-this._previousScrollPosition.top),i.classList.add(`cdk-global-scrollblock`),this._isEnabled=!0}}disable(){if(this._isEnabled){let i=this._document.documentElement,t=this._document.body,e=i.style,n=t.style,o=e.scrollBehavior||``,r=n.scrollBehavior||``;this._isEnabled=!1,e.left=this._previousHTMLStyles.left,e.top=this._previousHTMLStyles.top,i.classList.remove(`cdk-global-scrollblock`),ne&&(e.scrollBehavior=n.scrollBehavior=`auto`),window.scroll(this._previousScrollPosition.left,this._previousScrollPosition.top),ne&&(e.scrollBehavior=o,n.scrollBehavior=r)}}_canBeEnabled(){if(this._document.documentElement.classList.contains(`cdk-global-scrollblock`)||this._isEnabled)return!1;let t=this._document.documentElement,e=this._viewportRuler.getViewportSize();return t.scrollHeight>e.height||t.scrollWidth>e.width}};var Q=class{enable(){}disable(){}attach(){}};function Dt(s,i){return i.some(t=>{let e=s.bottom<t.top,n=s.top>t.bottom,o=s.right<t.left,r=s.left>t.right;return e||n||o||r})}function oe(s,i){return i.some(t=>{let e=s.top<t.top,n=s.bottom>t.bottom,o=s.left<t.left,r=s.right>t.right;return e||n||o||r})}function Mt(s,i){return new J$1(s.get(B),s.get(z),s.get(Pe$2),i)}var J$1=class{_scrollDispatcher;_viewportRuler;_ngZone;_config;_scrollSubscription=null;_overlayRef;constructor(i,t,e,n){this._scrollDispatcher=i,this._viewportRuler=t,this._ngZone=e,this._config=n}attach(i){this._overlayRef,this._overlayRef=i}enable(){if(!this._scrollSubscription){let i=this._config?this._config.scrollThrottle:0;this._scrollSubscription=this._scrollDispatcher.scrolled(i).subscribe(()=>{if(this._overlayRef.updatePosition(),this._config&&this._config.autoClose){let t=this._overlayRef.overlayElement.getBoundingClientRect(),{width:e,height:n}=this._viewportRuler.getViewportSize();Dt(t,[{width:e,height:n,bottom:n,right:e,top:0,left:0}])&&(this.disable(),this._ngZone.run(()=>this._overlayRef.detach()))}})}}disable(){this._scrollSubscription&&(this._scrollSubscription.unsubscribe(),this._scrollSubscription=null)}detach(){this.disable(),this._overlayRef=null}};var tt=class{positionStrategy;scrollStrategy=new Q;panelClass=``;hasBackdrop=!1;backdropClass=`cdk-overlay-dark-backdrop`;disableAnimations;width;height;minWidth;minHeight;maxWidth;maxHeight;direction;disposeOnNavigation=!1;usePopover;eventPredicate;constructor(i){if(i){let t=Object.keys(i);for(let e of t)i[e]!==void 0&&(this[e]=i[e])}}};var et=class{connectionPair;scrollableViewProperties;constructor(i,t){this.connectionPair=i,this.scrollableViewProperties=t}};var he=(()=>{class s{_attachedOverlays=[];_document=y(pt);_isAttached=!1;ngOnDestroy(){this.detach()}add(t){this.remove(t),this._attachedOverlays.push(t)}remove(t){let e=this._attachedOverlays.indexOf(t);e>-1&&this._attachedOverlays.splice(e,1),this._attachedOverlays.length===0&&this.detach()}canReceiveEvent(t,e,n){return n.observers.length<1?!1:t.eventPredicate?t.eventPredicate(e):!0}static ɵfac=function(e){return new(e||s)};static ɵprov=Vr({token:s,factory:s.ɵfac})}return s})();var de=(()=>{class s extends he{_ngZone=y(Pe$2);_renderer=y(Lr).createRenderer(null,null);_cleanupKeydown;add(t){super.add(t),this._isAttached||(this._ngZone.runOutsideAngular(()=>{this._cleanupKeydown=this._renderer.listen(`body`,`keydown`,this._keydownListener)}),this._isAttached=!0)}detach(){this._isAttached&&(this._cleanupKeydown?.(),this._isAttached=!1)}_keydownListener=t=>{let e=this._attachedOverlays;for(let n=e.length-1;n>-1;n--){let o=e[n];if(this.canReceiveEvent(o,t,o._keydownEvents)){this._ngZone.run(()=>o._keydownEvents.next(t));break}}};static ɵfac=function(e){return new(e||s)};static ɵprov=Vr({token:s,factory:s.ɵfac})}return s})();var pe=(()=>{class s extends he{_platform=y(V$1);_ngZone=y(Pe$2);_renderer=y(Lr).createRenderer(null,null);_cursorOriginalValue;_cursorStyleIsSet=!1;_pointerDownEventTarget=null;_cleanups;add(t){if(super.add(t),!this._isAttached){let e=this._document.body,n={capture:!0},o=this._renderer;this._cleanups=this._ngZone.runOutsideAngular(()=>[o.listen(e,`pointerdown`,this._pointerDownListener,n),o.listen(e,`click`,this._clickListener,n),o.listen(e,`auxclick`,this._clickListener,n),o.listen(e,`contextmenu`,this._clickListener,n)]),this._platform.IOS&&!this._cursorStyleIsSet&&(this._cursorOriginalValue=e.style.cursor,e.style.cursor=`pointer`,this._cursorStyleIsSet=!0),this._isAttached=!0}}detach(){this._isAttached&&(this._cleanups?.forEach(t=>t()),this._cleanups=void 0,this._platform.IOS&&this._cursorStyleIsSet&&(this._document.body.style.cursor=this._cursorOriginalValue,this._cursorStyleIsSet=!1),this._isAttached=!1)}_pointerDownListener=t=>{this._pointerDownEventTarget=nt$1(t)};_clickListener=t=>{let e=nt$1(t),n=t.type===`click`&&this._pointerDownEventTarget?this._pointerDownEventTarget:e;this._pointerDownEventTarget=null;let o=this._attachedOverlays.slice();for(let r=o.length-1;r>-1;r--){let a=o[r],c=a._outsidePointerEvents;if(!(!a.hasAttached()||!this.canReceiveEvent(a,t,c))){if(se(a.overlayElement,e)||se(a.overlayElement,n))break;this._ngZone?this._ngZone.run(()=>c.next(t)):c.next(t)}}};static ɵfac=function(e){return new(e||s)};static ɵprov=Vr({token:s,factory:s.ɵfac})}return s})();function se(s,i){let t=typeof ShadowRoot<`u`&&ShadowRoot,e=i;for(;e;){if(e===s)return!0;e=t&&e instanceof ShadowRoot?e.host:e.parentNode}return!1}var ue=(()=>{class s{static ɵfac=function(e){return new(e||s)};static ɵcmp=iw({type:s,selectors:[[`ng-component`]],hostAttrs:[`cdk-overlay-style-loader`,``],decls:0,vars:0,template:function(e,n){},styles:[`.cdk-overlay-container, .cdk-global-overlay-wrapper {
  pointer-events: none;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
}

.cdk-overlay-container {
  position: fixed;
}
@layer cdk-overlay {
  .cdk-overlay-container {
    z-index: 1000;
  }
}
.cdk-overlay-container:empty {
  display: none;
}

.cdk-global-overlay-wrapper {
  display: flex;
  position: absolute;
}
@layer cdk-overlay {
  .cdk-global-overlay-wrapper {
    z-index: 1000;
  }
}

.cdk-overlay-pane {
  position: absolute;
  pointer-events: auto;
  box-sizing: border-box;
  display: flex;
  max-width: 100%;
  max-height: 100%;
}
@layer cdk-overlay {
  .cdk-overlay-pane {
    z-index: 1000;
  }
}

.cdk-overlay-backdrop {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  pointer-events: auto;
  -webkit-tap-highlight-color: transparent;
  opacity: 0;
  touch-action: manipulation;
}
@layer cdk-overlay {
  .cdk-overlay-backdrop {
    z-index: 1000;
    transition: opacity 400ms cubic-bezier(0.25, 0.8, 0.25, 1);
  }
}
@media (prefers-reduced-motion) {
  .cdk-overlay-backdrop {
    transition-duration: 1ms;
  }
}

.cdk-overlay-backdrop-showing {
  opacity: 1;
}
@media (forced-colors: active) {
  .cdk-overlay-backdrop-showing {
    opacity: 0.6;
  }
}

@layer cdk-overlay {
  .cdk-overlay-dark-backdrop {
    background: rgba(0, 0, 0, 0.32);
  }
}

.cdk-overlay-transparent-backdrop {
  transition: visibility 1ms linear, opacity 1ms linear;
  visibility: hidden;
  opacity: 1;
}
.cdk-overlay-transparent-backdrop.cdk-overlay-backdrop-showing, .cdk-high-contrast-active .cdk-overlay-transparent-backdrop {
  opacity: 0;
  visibility: visible;
}

.cdk-overlay-backdrop-noop-animation {
  transition: none;
}

.cdk-overlay-connected-position-bounding-box {
  position: absolute;
  display: flex;
  flex-direction: column;
  min-width: 1px;
  min-height: 1px;
}
@layer cdk-overlay {
  .cdk-overlay-connected-position-bounding-box {
    z-index: 1000;
  }
}

.cdk-global-scrollblock {
  position: fixed;
  width: 100%;
  overflow-y: scroll;
}

.cdk-overlay-popover {
  background: none;
  border: none;
  padding: 0;
  outline: 0;
  overflow: visible;
  position: fixed;
  pointer-events: none;
  white-space: normal;
  color: inherit;
  text-decoration: none;
  width: 100%;
  height: 100%;
  inset: auto;
  top: 0;
  left: 0;
}
.cdk-overlay-popover::backdrop {
  display: none;
}
.cdk-overlay-popover .cdk-overlay-backdrop {
  position: fixed;
  z-index: auto;
}
`],encapsulation:2})}return s})();var fe=(()=>{class s{_platform=y(V$1);_containerElement;_document=y(pt);_styleLoader=y(bt);ngOnDestroy(){this._containerElement?.remove()}getContainerElement(){return this._loadStyles(),this._containerElement||this._createContainer(),this._containerElement}_createContainer(){let t=`cdk-overlay-container`;if(this._platform.isBrowser||Bf()){let n=this._document.querySelectorAll(`.${t}[platform="server"], .${t}[platform="test"]`);for(let o=0;o<n.length;o++)n[o].remove()}let e=this._document.createElement(`div`);e.classList.add(t),Bf()?e.setAttribute(`platform`,`test`):this._platform.isBrowser||e.setAttribute(`platform`,`server`),this._document.body.appendChild(e),this._containerElement=e}_loadStyles(){this._styleLoader.load(ue)}static ɵfac=function(e){return new(e||s)};static ɵprov=Vr({token:s,factory:s.ɵfac})}return s})();var Et=class{_renderer;_ngZone;element;_cleanupClick;_cleanupTransitionEnd;_fallbackTimeout;constructor(i,t,e,n){this._renderer=t,this._ngZone=e,this.element=i.createElement(`div`),this.element.classList.add(`cdk-overlay-backdrop`),this._cleanupClick=t.listen(this.element,`click`,n)}detach(){this._ngZone.runOutsideAngular(()=>{let i=this.element;clearTimeout(this._fallbackTimeout),this._cleanupTransitionEnd?.(),this._cleanupTransitionEnd=this._renderer.listen(i,`transitionend`,this.dispose),this._fallbackTimeout=setTimeout(this.dispose,500),i.style.pointerEvents=`none`,i.classList.remove(`cdk-overlay-backdrop-showing`)})}dispose=()=>{clearTimeout(this._fallbackTimeout),this._cleanupClick?.(),this._cleanupTransitionEnd?.(),this._cleanupClick=this._cleanupTransitionEnd=this._fallbackTimeout=void 0,this.element.remove()}};function Tt(s){return s&&s.nodeType===1}var Pt=mt([]);var it=class{_portalOutlet;_host;_pane;_config;_ngZone;_keyboardDispatcher;_document;_location;_outsideClickDispatcher;_animationsDisabled;_injector;_renderer;_backdropClick=new ee$1;_attachments=new ee$1;_detachments=new ee$1;_positionStrategy;_scrollStrategy;_locationChanges;_backdropRef=null;_detachContentMutationObserver;_detachContentAfterRenderRef;_disposed=!1;_previousHostParent;_keydownEvents=new ee$1;_outsidePointerEvents=new ee$1;_afterNextRenderRef;constructor(i,t,e,n,o,r,a,c,p,h=!1,d,_){this._portalOutlet=i,this._host=t,this._pane=e,this._config=n,this._ngZone=o,this._keyboardDispatcher=r,this._document=a,this._location=c,this._outsideClickDispatcher=p,this._animationsDisabled=h,this._injector=d,this._renderer=_,n.scrollStrategy&&(this._scrollStrategy=n.scrollStrategy,this._scrollStrategy.attach(this)),this._positionStrategy=n.positionStrategy}get overlayElement(){return this._pane}get backdropElement(){return this._backdropRef?.element||null}get hostElement(){return this._host}get eventPredicate(){return this._config?.eventPredicate||null}attach(i){if(this._disposed)return null;this._attachHost();let t=this._portalOutlet.attach(i);if(this._positionStrategy?.attach(this),this._updateStackingOrder(),this._updateElementSize(),this._updateElementDirection(),le$2(()=>{Pt.update(e=>e.includes(this)?e:[...e,this])}),this._scrollStrategy&&this._scrollStrategy.enable(),this._afterNextRenderRef?.destroy(),this._afterNextRenderRef=vh(()=>{this.hasAttached()&&this.updatePosition()},{injector:this._injector}),this._togglePointerEvents(!0),this._config.hasBackdrop&&this._attachBackdrop(),this._config.panelClass&&this._toggleClasses(this._pane,this._config.panelClass,!0),this._attachments.next(),this._completeDetachContent(),this._keyboardDispatcher.add(this),this._config.disposeOnNavigation===!0||this._config.disposeOnNavigation===`pop-state`){let e=this._location.subscribe(()=>this.dispose());this._locationChanges=()=>e.unsubscribe()}else this._config.disposeOnNavigation===`url-change`&&(this._locationChanges=this._location.onUrlChange(()=>this.dispose()));return this._outsideClickDispatcher.add(this),typeof t?.onDestroy==`function`&&t.onDestroy(()=>{this.hasAttached()&&this._ngZone.runOutsideAngular(()=>Promise.resolve().then(()=>this.detach()))}),t}detach(){if(!this.hasAttached())return;this.detachBackdrop(),this._togglePointerEvents(!1),this._positionStrategy&&this._positionStrategy.detach&&this._positionStrategy.detach(),this._scrollStrategy&&this._scrollStrategy.disable();let i=this._portalOutlet.detach();return this._detachments.next(),this._completeDetachContent(),this._keyboardDispatcher.remove(this),this._detachContentWhenEmpty(),this._locationChanges?.(),this._outsideClickDispatcher.remove(this),le$2(()=>{Pt.update(t=>t.filter(e=>e!==this))}),i}dispose(){if(this._disposed)return;let i=this.hasAttached();this._positionStrategy&&this._positionStrategy.dispose(),this._disposeScrollStrategy(),this._backdropRef?.dispose(),this._locationChanges?.(),this._keyboardDispatcher.remove(this),this._portalOutlet.dispose(),this._attachments.complete(),this._backdropClick.complete(),this._keydownEvents.complete(),this._outsidePointerEvents.complete(),this._outsideClickDispatcher.remove(this),this._host?.remove(),this._afterNextRenderRef?.destroy(),this._previousHostParent=this._pane=this._host=this._backdropRef=null,i&&this._detachments.next(),this._detachments.complete(),this._completeDetachContent(),this._disposed=!0,le$2(()=>{Pt.update(t=>t.filter(e=>e!==this))})}hasAttached(){return this._portalOutlet.hasAttached()}backdropClick(){return this._backdropClick}attachments(){return this._attachments}detachments(){return this._detachments}keydownEvents(){return this._keydownEvents}outsidePointerEvents(){return this._outsidePointerEvents}getConfig(){return this._config}updatePosition(){this._positionStrategy&&this._positionStrategy.apply()}updatePositionStrategy(i){i!==this._positionStrategy&&(this._positionStrategy&&this._positionStrategy.dispose(),this._positionStrategy=i,this.hasAttached()&&(i.attach(this),this.updatePosition()))}updateSize(i){this._config=z$2(z$2({},this._config),i),this._updateElementSize()}setDirection(i){this._config=Q$2(z$2({},this._config),{direction:i}),this._updateElementDirection()}addPanelClass(i){this._pane&&this._toggleClasses(this._pane,i,!0)}removePanelClass(i){this._pane&&this._toggleClasses(this._pane,i,!1)}getDirection(){let i=this._config.direction;return i?typeof i==`string`?i:i.value:`ltr`}updateScrollStrategy(i){i!==this._scrollStrategy&&(this._disposeScrollStrategy(),this._scrollStrategy=i,this.hasAttached()&&(i.attach(this),i.enable()))}_updateElementDirection(){this._host.setAttribute(`dir`,this.getDirection())}_updateElementSize(){if(!this._pane)return;let i=this._pane.style;i.width=th(this._config.width),i.height=th(this._config.height),i.minWidth=th(this._config.minWidth),i.minHeight=th(this._config.minHeight),i.maxWidth=th(this._config.maxWidth),i.maxHeight=th(this._config.maxHeight)}_togglePointerEvents(i){this._pane.style.pointerEvents=i?``:`none`}_attachHost(){if(!this._host.parentElement){let i=this._config.usePopover?this._positionStrategy?.getPopoverInsertionPoint?.():null;Tt(i)?i.after(this._host):i?.type===`parent`?i.element.appendChild(this._host):this._previousHostParent?.appendChild(this._host)}if(this._config.usePopover)try{this._host.showPopover()}catch{}}_attachBackdrop(){let i=`cdk-overlay-backdrop-showing`;this._backdropRef?.dispose(),this._backdropRef=new Et(this._document,this._renderer,this._ngZone,t=>{this._backdropClick.next(t)}),this._animationsDisabled&&this._backdropRef.element.classList.add(`cdk-overlay-backdrop-noop-animation`),this._config.backdropClass&&this._toggleClasses(this._backdropRef.element,this._config.backdropClass,!0),this._config.usePopover?this._host.prepend(this._backdropRef.element):this._host.parentElement.insertBefore(this._backdropRef.element,this._host),!this._animationsDisabled&&typeof requestAnimationFrame<`u`?this._ngZone.runOutsideAngular(()=>{requestAnimationFrame(()=>this._backdropRef?.element.classList.add(i))}):this._backdropRef.element.classList.add(i)}_updateStackingOrder(){!this._config.usePopover&&this._host.nextSibling&&this._host.parentNode.appendChild(this._host)}detachBackdrop(){this._animationsDisabled?(this._backdropRef?.dispose(),this._backdropRef=null):this._backdropRef?.detach()}_toggleClasses(i,t,e){let n=pr(t||[]).filter(o=>!!o);n.length&&(e?i.classList.add(...n):i.classList.remove(...n))}_detachContentWhenEmpty(){let i=!1;try{this._detachContentAfterRenderRef=vh(()=>{i=!0,this._detachContent()},{injector:this._injector})}catch(t){if(i)throw t;this._detachContent()}globalThis.MutationObserver&&this._pane&&(this._detachContentMutationObserver||=new globalThis.MutationObserver(()=>{this._detachContent()}),this._detachContentMutationObserver.observe(this._pane,{childList:!0}))}_detachContent(){(!this._pane||!this._host||this._pane.children.length===0)&&(this._pane&&this._config.panelClass&&this._toggleClasses(this._pane,this._config.panelClass,!1),this._host&&this._host.parentElement&&(this._previousHostParent=this._host.parentElement,this._host.remove()),this._completeDetachContent())}_completeDetachContent(){this._detachContentAfterRenderRef?.destroy(),this._detachContentAfterRenderRef=void 0,this._detachContentMutationObserver?.disconnect()}_disposeScrollStrategy(){let i=this._scrollStrategy;i?.disable(),i?.detach?.()}};var re=`cdk-overlay-connected-position-bounding-box`;var Se$1=/([A-Za-z%]+)$/;function At(s,i){return new nt(i,s.get(z),s.get(pt),s.get(V$1),s.get(fe))}var nt=class{_viewportRuler;_document;_platform;_overlayContainer;_overlayRef;_isInitialRender=!1;_lastBoundingBoxSize={width:0,height:0};_isPushed=!1;_canPush=!0;_growAfterOpen=!1;_hasFlexibleDimensions=!0;_positionLocked=!1;_originRect;_overlayRect;_viewportRect;_containerRect;_viewportMargin=0;_scrollables=[];_preferredPositions=[];_origin;_pane;_isDisposed=!1;_boundingBox=null;_lastPosition=null;_lastScrollVisibility=null;_positionChanges=new ee$1;_resizeSubscription=K$1.EMPTY;_offsetX=0;_offsetY=0;_transformOriginSelector;_appliedPanelClasses=[];_previousPushAmount=null;_popoverLocation=`global`;positionChanges=this._positionChanges;get positions(){return this._preferredPositions}constructor(i,t,e,n,o){this._viewportRuler=t,this._document=e,this._platform=n,this._overlayContainer=o,this.setOrigin(i)}attach(i){this._overlayRef&&this._overlayRef,this._validatePositions(),i.hostElement.classList.add(re),this._overlayRef=i,this._boundingBox=i.hostElement,this._pane=i.overlayElement,this._isDisposed=!1,this._isInitialRender=!0,this._lastPosition=null,this._resizeSubscription.unsubscribe(),this._resizeSubscription=this._viewportRuler.change().subscribe(()=>{this._isInitialRender=!0,this.apply()})}apply(){if(this._isDisposed||!this._platform.isBrowser)return;if(!this._isInitialRender&&this._positionLocked&&this._lastPosition){this.reapplyLastPosition();return}this._clearPanelClasses(),this._resetOverlayElementStyles(),this._resetBoundingBoxStyles(),this._viewportRect=this._getNarrowedViewportRect(),this._originRect=this._getOriginRect(),this._overlayRect=this._pane.getBoundingClientRect(),this._containerRect=this._getContainerRect();let i=this._originRect,t=this._overlayRect,e=this._viewportRect,n=this._containerRect,o=[],r;for(let a of this._preferredPositions){let c=this._getOriginPoint(i,n,a),p=this._getOverlayPoint(c,t,a),h=this._getOverlayFit(p,t,e,a);if(h.isCompletelyWithinViewport){this._isPushed=!1,this._applyPosition(a,c);return}if(this._canFitWithFlexibleDimensions(h,p,e)){o.push({position:a,origin:c,overlayRect:t,boundingBoxRect:this._calculateBoundingBoxRect(c,a)});continue}(!r||r.overlayFit.visibleArea<h.visibleArea)&&(r={overlayFit:h,overlayPoint:p,originPoint:c,position:a,overlayRect:t})}if(o.length){let a=null,c=-1;for(let p of o){let h=p.boundingBoxRect.width*p.boundingBoxRect.height*(p.position.weight||1);h>c&&(c=h,a=p)}this._isPushed=!1,this._applyPosition(a.position,a.origin);return}if(this._canPush){this._isPushed=!0,this._applyPosition(r.position,r.originPoint);return}this._applyPosition(r.position,r.originPoint)}detach(){this._clearPanelClasses(),this._lastPosition=null,this._previousPushAmount=null,this._resizeSubscription.unsubscribe()}dispose(){this._isDisposed||(this._boundingBox&&E(this._boundingBox.style,{top:``,left:``,right:``,bottom:``,height:``,width:``,alignItems:``,justifyContent:``}),this._pane&&this._resetOverlayElementStyles(),this._overlayRef&&this._overlayRef.hostElement.classList.remove(re),this.detach(),this._positionChanges.complete(),this._overlayRef=this._boundingBox=null,this._isDisposed=!0)}reapplyLastPosition(){if(this._isDisposed||!this._platform.isBrowser)return;let i=this._lastPosition;i?(this._originRect=this._getOriginRect(),this._overlayRect=this._pane.getBoundingClientRect(),this._viewportRect=this._getNarrowedViewportRect(),this._containerRect=this._getContainerRect(),this._applyPosition(i,this._getOriginPoint(this._originRect,this._containerRect,i))):this.apply()}withScrollableContainers(i){return this._scrollables=i,this}withPositions(i){return this._preferredPositions=i,i.indexOf(this._lastPosition)===-1&&(this._lastPosition=null),this._validatePositions(),this}withViewportMargin(i){return this._viewportMargin=i,this}withFlexibleDimensions(i=!0){return this._hasFlexibleDimensions=i,this}withGrowAfterOpen(i=!0){return this._growAfterOpen=i,this}withPush(i=!0){return this._canPush=i,this}withLockedPosition(i=!0){return this._positionLocked=i,this}setOrigin(i){return this._origin=i,this}withDefaultOffsetX(i){return this._offsetX=i,this}withDefaultOffsetY(i){return this._offsetY=i,this}withTransformOriginOn(i){return this._transformOriginSelector=i,this}withPopoverLocation(i){return this._popoverLocation=i,this}getPopoverInsertionPoint(){return this._popoverLocation===`global`?null:this._popoverLocation!==`inline`?this._popoverLocation:this._origin instanceof Hr?this._origin.nativeElement:Tt(this._origin)?this._origin:null}_getOriginPoint(i,t,e){let n;if(e.originX==`center`)n=i.left+i.width/2;else{let r=this._isRtl()?i.right:i.left,a=this._isRtl()?i.left:i.right;n=e.originX==`start`?r:a}t.left<0&&(n-=t.left);let o;return e.originY==`center`?o=i.top+i.height/2:o=e.originY==`top`?i.top:i.bottom,t.top<0&&(o-=t.top),{x:n,y:o}}_getOverlayPoint(i,t,e){let n;e.overlayX==`center`?n=-t.width/2:e.overlayX===`start`?n=this._isRtl()?-t.width:0:n=this._isRtl()?0:-t.width;let o;return e.overlayY==`center`?o=-t.height/2:o=e.overlayY==`top`?0:-t.height,{x:i.x+n,y:i.y+o}}_getOverlayFit(i,t,e,n){let o=le(t),{x:r,y:a}=i,c=this._getOffset(n,`x`),p=this._getOffset(n,`y`);c&&(r+=c),p&&(a+=p);let h=0-r,d=r+o.width-e.width,_=0-a,m=a+o.height-e.height,g=this._subtractOverflows(o.width,h,d),w=this._subtractOverflows(o.height,_,m),Vt=g*w;return{visibleArea:Vt,isCompletelyWithinViewport:o.width*o.height===Vt,fitsInViewportVertically:w===o.height,fitsInViewportHorizontally:g==o.width}}_canFitWithFlexibleDimensions(i,t,e){if(this._hasFlexibleDimensions){let n=e.bottom-t.y,o=e.right-t.x,r=ae(this._overlayRef.getConfig().minHeight),a=ae(this._overlayRef.getConfig().minWidth),c=i.fitsInViewportVertically||r!=null&&r<=n,p=i.fitsInViewportHorizontally||a!=null&&a<=o;return c&&p}return!1}_pushOverlayOnScreen(i,t,e){if(this._previousPushAmount&&this._positionLocked)return{x:i.x+this._previousPushAmount.x,y:i.y+this._previousPushAmount.y};let n=le(t),o=this._viewportRect,r=Math.max(i.x+n.width-o.width,0),a=Math.max(i.y+n.height-o.height,0),c=Math.max(o.top-e.top-i.y,0),p=Math.max(o.left-e.left-i.x,0),h=0,d=0;return n.width<=o.width?h=p||-r:h=i.x<this._getViewportMarginStart()?o.left-e.left-i.x:0,n.height<=o.height?d=c||-a:d=i.y<this._getViewportMarginTop()?o.top-e.top-i.y:0,this._previousPushAmount={x:h,y:d},{x:i.x+h,y:i.y+d}}_applyPosition(i,t){if(this._setTransformOrigin(i),this._setOverlayElementStyles(t,i),this._setBoundingBoxStyles(t,i),i.panelClass&&this._addPanelClasses(i.panelClass),this._positionChanges.observers.length){let e=this._getScrollVisibility();if(i!==this._lastPosition||!this._lastScrollVisibility||!Oe(this._lastScrollVisibility,e)){let n=new et(i,e);this._positionChanges.next(n)}this._lastScrollVisibility=e}this._lastPosition=i,this._isInitialRender=!1}_setTransformOrigin(i){if(!this._transformOriginSelector)return;let t=this._boundingBox.querySelectorAll(this._transformOriginSelector),e,n=i.overlayY;i.overlayX===`center`?e=`center`:this._isRtl()?e=i.overlayX===`start`?`right`:`left`:e=i.overlayX===`start`?`left`:`right`;for(let o=0;o<t.length;o++)t[o].style.transformOrigin=`${e} ${n}`}_calculateBoundingBoxRect(i,t){let e=this._viewportRect,n=this._isRtl(),o,r,a;if(t.overlayY===`top`)r=i.y,o=e.height-r+this._getViewportMarginBottom();else if(t.overlayY===`bottom`)a=e.height-i.y+this._getViewportMarginTop()+this._getViewportMarginBottom(),o=e.height-a+this._getViewportMarginTop();else{let m=Math.min(e.bottom-i.y+e.top,i.y),g=this._lastBoundingBoxSize.height;o=m*2,r=i.y-m,o>g&&!this._isInitialRender&&!this._growAfterOpen&&(r=i.y-g/2)}let c=t.overlayX===`start`&&!n||t.overlayX===`end`&&n,p=t.overlayX===`end`&&!n||t.overlayX===`start`&&n,h,d,_;if(p)_=e.width-i.x+this._getViewportMarginStart()+this._getViewportMarginEnd(),h=i.x-this._getViewportMarginStart();else if(c)d=i.x,h=e.right-i.x-this._getViewportMarginEnd();else{let m=Math.min(e.right-i.x+e.left,i.x),g=this._lastBoundingBoxSize.width;h=m*2,d=i.x-m,h>g&&!this._isInitialRender&&!this._growAfterOpen&&(d=i.x-g/2)}return{top:r,left:d,bottom:a,right:_,width:h,height:o}}_setBoundingBoxStyles(i,t){let e=this._calculateBoundingBoxRect(i,t);!this._isInitialRender&&!this._growAfterOpen&&(e.height=Math.min(e.height,this._lastBoundingBoxSize.height),e.width=Math.min(e.width,this._lastBoundingBoxSize.width));let n={};if(this._hasExactPosition())n.top=n.left=`0`,n.bottom=n.right=`auto`,n.maxHeight=n.maxWidth=``,n.width=n.height=`100%`;else{let o=this._overlayRef.getConfig().maxHeight,r=this._overlayRef.getConfig().maxWidth;n.width=th(e.width),n.height=th(e.height),n.top=th(e.top)||`auto`,n.bottom=th(e.bottom)||`auto`,n.left=th(e.left)||`auto`,n.right=th(e.right)||`auto`,t.overlayX===`center`?n.alignItems=`center`:n.alignItems=t.overlayX===`end`?`flex-end`:`flex-start`,t.overlayY===`center`?n.justifyContent=`center`:n.justifyContent=t.overlayY===`bottom`?`flex-end`:`flex-start`,o&&(n.maxHeight=th(o)),r&&(n.maxWidth=th(r))}this._lastBoundingBoxSize=e,E(this._boundingBox.style,n)}_resetBoundingBoxStyles(){E(this._boundingBox.style,{top:`0`,left:`0`,right:`0`,bottom:`0`,height:``,width:``,alignItems:``,justifyContent:``})}_resetOverlayElementStyles(){E(this._pane.style,{top:``,left:``,bottom:``,right:``,position:``,transform:``})}_setOverlayElementStyles(i,t){let e={},n=this._hasExactPosition(),o=this._hasFlexibleDimensions,r=this._overlayRef.getConfig();if(n){let h=this._viewportRuler.getViewportScrollPosition();E(e,this._getExactOverlayY(t,i,h)),E(e,this._getExactOverlayX(t,i,h))}else e.position=`static`;let a=``,c=this._getOffset(t,`x`),p=this._getOffset(t,`y`);c&&(a+=`translateX(${c}px) `),p&&(a+=`translateY(${p}px)`),e.transform=a.trim(),r.maxHeight&&(n?e.maxHeight=th(r.maxHeight):o&&(e.maxHeight=``)),r.maxWidth&&(n?e.maxWidth=th(r.maxWidth):o&&(e.maxWidth=``)),E(this._pane.style,e)}_getExactOverlayY(i,t,e){let n={top:``,bottom:``},o=this._getOverlayPoint(t,this._overlayRect,i);if(this._isPushed&&(o=this._pushOverlayOnScreen(o,this._overlayRect,e)),i.overlayY===`bottom`)n.bottom=`${this._document.documentElement.clientHeight-(o.y+this._overlayRect.height)}px`;else n.top=th(o.y);return n}_getExactOverlayX(i,t,e){let n={left:``,right:``},o=this._getOverlayPoint(t,this._overlayRect,i);this._isPushed&&(o=this._pushOverlayOnScreen(o,this._overlayRect,e));let r;if(this._isRtl()?r=i.overlayX===`end`?`left`:`right`:r=i.overlayX===`end`?`right`:`left`,r===`right`)n.right=`${this._document.documentElement.clientWidth-(o.x+this._overlayRect.width)}px`;else n.left=th(o.x);return n}_getScrollVisibility(){let i=this._getOriginRect(),t=this._pane.getBoundingClientRect(),e=this._scrollables.map(n=>n.getElementRef().nativeElement.getBoundingClientRect());return{isOriginClipped:oe(i,e),isOriginOutsideView:Dt(i,e),isOverlayClipped:oe(t,e),isOverlayOutsideView:Dt(t,e)}}_subtractOverflows(i,...t){return t.reduce((e,n)=>e-Math.max(n,0),i)}_getNarrowedViewportRect(){let i=this._document.documentElement.clientWidth,t=this._document.documentElement.clientHeight,e=this._viewportRuler.getViewportScrollPosition();return{top:e.top+this._getViewportMarginTop(),left:e.left+this._getViewportMarginStart(),right:e.left+i-this._getViewportMarginEnd(),bottom:e.top+t-this._getViewportMarginBottom(),width:i-this._getViewportMarginStart()-this._getViewportMarginEnd(),height:t-this._getViewportMarginTop()-this._getViewportMarginBottom()}}_isRtl(){return this._overlayRef.getDirection()===`rtl`}_hasExactPosition(){return!this._hasFlexibleDimensions||this._isPushed}_getOffset(i,t){return t===`x`?i.offsetX==null?this._offsetX:i.offsetX:i.offsetY==null?this._offsetY:i.offsetY}_validatePositions(){}_addPanelClasses(i){this._pane&&pr(i).forEach(t=>{t!==``&&this._appliedPanelClasses.indexOf(t)===-1&&(this._appliedPanelClasses.push(t),this._pane.classList.add(t))})}_clearPanelClasses(){this._pane&&(this._appliedPanelClasses.forEach(i=>{this._pane.classList.remove(i)}),this._appliedPanelClasses=[])}_getViewportMarginStart(){return typeof this._viewportMargin==`number`?this._viewportMargin:this._viewportMargin?.start??0}_getViewportMarginEnd(){return typeof this._viewportMargin==`number`?this._viewportMargin:this._viewportMargin?.end??0}_getViewportMarginTop(){return typeof this._viewportMargin==`number`?this._viewportMargin:this._viewportMargin?.top??0}_getViewportMarginBottom(){return typeof this._viewportMargin==`number`?this._viewportMargin:this._viewportMargin?.bottom??0}_getOriginRect(){let i=this._origin;if(i instanceof Hr)return i.nativeElement.getBoundingClientRect();if(i instanceof Element)return i.getBoundingClientRect();let t=i.width||0,e=i.height||0;return{top:i.y,bottom:i.y+e,left:i.x,right:i.x+t,height:e,width:t}}_getContainerRect(){let i=this._overlayRef.getConfig().usePopover&&this._popoverLocation!==`global`,t=this._overlayContainer.getContainerElement();i&&(t.style.display=`block`);let e=t.getBoundingClientRect();return i&&(t.style.display=``),e}};function E(s,i){for(let t in i)Object.hasOwn(i,t)&&(s[t]=i[t]);return s}function ae(s){if(typeof s!=`number`&&s!=null){let[i,t]=s.split(Se$1);return!t||t===`px`?parseFloat(i):null}return s||null}function le(s){return{top:Math.floor(s.top),right:Math.floor(s.right),bottom:Math.floor(s.bottom),left:Math.floor(s.left),width:Math.floor(s.width),height:Math.floor(s.height)}}function Oe(s,i){return s===i?!0:s.isOriginClipped===i.isOriginClipped&&s.isOriginOutsideView===i.isOriginOutsideView&&s.isOverlayClipped===i.isOverlayClipped&&s.isOverlayOutsideView===i.isOverlayOutsideView}var ce=`cdk-global-overlay-wrapper`;function Re(s){return new ot}var ot=class{_overlayRef;_cssPosition=`static`;_topOffset=``;_bottomOffset=``;_alignItems=``;_xPosition=``;_xOffset=``;_width=``;_height=``;_isDisposed=!1;attach(i){let t=i.getConfig();this._overlayRef=i,this._width&&!t.width&&i.updateSize({width:this._width}),this._height&&!t.height&&i.updateSize({height:this._height}),i.hostElement.classList.add(ce),this._isDisposed=!1}top(i=``){return this._bottomOffset=``,this._topOffset=i,this._alignItems=`flex-start`,this}left(i=``){return this._xOffset=i,this._xPosition=`left`,this}bottom(i=``){return this._topOffset=``,this._bottomOffset=i,this._alignItems=`flex-end`,this}right(i=``){return this._xOffset=i,this._xPosition=`right`,this}start(i=``){return this._xOffset=i,this._xPosition=`start`,this}end(i=``){return this._xOffset=i,this._xPosition=`end`,this}width(i=``){return this._overlayRef?this._overlayRef.updateSize({width:i}):this._width=i,this}height(i=``){return this._overlayRef?this._overlayRef.updateSize({height:i}):this._height=i,this}centerHorizontally(i=``){return this.left(i),this._xPosition=`center`,this}centerVertically(i=``){return this.top(i),this._alignItems=`center`,this}apply(){if(!this._overlayRef||!this._overlayRef.hasAttached())return;let i=this._overlayRef.overlayElement.style,t=this._overlayRef.hostElement.style,{width:n,height:o,maxWidth:r,maxHeight:a}=this._overlayRef.getConfig(),c=(n===`100%`||n===`100vw`)&&(!r||r===`100%`||r===`100vw`),p=(o===`100%`||o===`100vh`)&&(!a||a===`100%`||a===`100vh`),h=this._xPosition,d=this._xOffset,_=this._overlayRef.getConfig().direction===`rtl`,m=``,g=``,w=``;c?w=`flex-start`:h===`center`?(w=`center`,_?g=d:m=d):_?h===`left`||h===`end`?(w=`flex-end`,m=d):(h===`right`||h===`start`)&&(w=`flex-start`,g=d):h===`left`||h===`start`?(w=`flex-start`,m=d):(h===`right`||h===`end`)&&(w=`flex-end`,g=d),i.position=this._cssPosition,i.marginLeft=c?`0`:m,i.marginTop=p?`0`:this._topOffset,i.marginBottom=this._bottomOffset,i.marginRight=c?`0`:g,t.justifyContent=w,t.alignItems=p?`flex-start`:this._alignItems}dispose(){if(this._isDisposed||!this._overlayRef)return;let i=this._overlayRef.overlayElement.style,t=this._overlayRef.hostElement,e=t.style;t.classList.remove(ce),e.justifyContent=e.alignItems=i.marginTop=i.marginBottom=i.marginLeft=i.marginRight=i.position=``,this._overlayRef=null,this._isDisposed=!0}};var _e=new _$1(`OVERLAY_DEFAULT_CONFIG`);function It(s,i){s.get(bt).load(ue);let t=s.get(fe),e=s.get(pt),n=s.get(br),o=s.get(It$2),r=s.get(Sl),a=s.get(mc$1,null,{optional:!0})||s.get(Lr).createRenderer(null,null),c=new tt(i),p=s.get(_e,null,{optional:!0})?.usePopover??!0;c.direction=c.direction||r.value,!e.body||!(`showPopover`in e.body)?c.usePopover=!1:c.usePopover=i?.usePopover??p;let h=e.createElement(`div`),d=e.createElement(`div`);h.id=n.getId(`cdk-overlay-`),h.classList.add(`cdk-overlay-pane`),d.appendChild(h),c.usePopover&&(d.setAttribute(`popover`,`manual`),d.classList.add(`cdk-overlay-popover`));let _=c.usePopover?c.positionStrategy?.getPopoverInsertionPoint?.():null;return Tt(_)?_.after(d):_?.type===`parent`?_.element.appendChild(d):t.getContainerElement().appendChild(d),new it(new K(h,o,s),d,h,c,s.get(Pe$2),s.get(de),e,s.get(k),s.get(pe),i?.disableAnimations??s.get(Wv,null,{optional:!0})===`NoopAnimations`,s.get(ve),a)}var Pe=20;var De$1=new _$1(`mat-tooltip-scroll-strategy`,{providedIn:`root`,factory:()=>{let s=y(ne$2);return()=>Mt(s,{scrollThrottle:Pe})}});var Ee=new _$1(`mat-tooltip-default-options`,{providedIn:`root`,factory:()=>({showDelay:0,hideDelay:0,touchendHideDelay:1500})});var ge=`tooltip-panel`;var Me={passive:!0};var Te$1=8;var Ae=8;var Ie$1=24;var Ve=200;var Le$1=(()=>{class s{_elementRef=y(Hr);_ngZone=y(Pe$2);_platform=y(V$1);_ariaDescriber=y(Tf);_focusMonitor=y(mr);_dir=y(Sl);_injector=y(ne$2);_viewContainerRef=y(rs$1);_mediaMatcher=y(aa);_document=y(pt);_renderer=y(mc$1);_animationsDisabled=fe$1();_defaultOptions=y(Ee,{optional:!0});_overlayRef=null;_tooltipInstance=null;_overlayPanelClass;_portal;_position=`below`;_positionAtOrigin=!1;_disabled=!1;_tooltipClass;_viewInitialized=!1;_pointerExitEventsInitialized=!1;_tooltipComponent=me;_viewportMargin=8;_currentPosition;_cssClassPrefix=`mat-mdc`;_ariaDescriptionPending=!1;_dirSubscribed=!1;get position(){return this._position}set position(t){t!==this._position&&(this._position=t,this._overlayRef&&(this._updatePosition(this._overlayRef),this._tooltipInstance?.show(0),this._overlayRef.updatePosition()))}get positionAtOrigin(){return this._positionAtOrigin}set positionAtOrigin(t){this._positionAtOrigin=nh(t),this._detach(),this._overlayRef=null}get disabled(){return this._disabled}set disabled(t){let e=nh(t);this._disabled!==e&&(this._disabled=e,e?this.hide(0):this._setupPointerEnterEventsIfNeeded(),this._syncAriaDescription(this.message))}get showDelay(){return this._showDelay}set showDelay(t){this._showDelay=Cl(t)}_showDelay;get hideDelay(){return this._hideDelay}set hideDelay(t){this._hideDelay=Cl(t),this._tooltipInstance&&(this._tooltipInstance._mouseLeaveHideDelay=this._hideDelay)}_hideDelay;touchGestures=`auto`;get message(){return this._message}set message(t){let e=this._message;this._message=t!=null?String(t).trim():``,!this._message&&this._isTooltipVisible()?this.hide(0):(this._setupPointerEnterEventsIfNeeded(),this._updateTooltipMessage()),this._syncAriaDescription(e)}_message=``;get tooltipClass(){return this._tooltipClass}set tooltipClass(t){this._tooltipClass=t,this._tooltipInstance&&this._setTooltipClass(this._tooltipClass)}_eventCleanups=[];_touchstartTimeout=null;_destroyed=new ee$1;_isDestroyed=!1;constructor(){let t=this._defaultOptions;t&&(this._showDelay=t.showDelay,this._hideDelay=t.hideDelay,t.position&&(this.position=t.position),t.positionAtOrigin&&(this.positionAtOrigin=t.positionAtOrigin),t.touchGestures&&(this.touchGestures=t.touchGestures),t.tooltipClass&&(this.tooltipClass=t.tooltipClass)),this._viewportMargin=Te$1}ngAfterViewInit(){this._viewInitialized=!0,this._setupPointerEnterEventsIfNeeded(),this._focusMonitor.monitor(this._elementRef).pipe(tv(this._destroyed)).subscribe(t=>{t?t===`keyboard`&&this._ngZone.run(()=>this.show()):this._ngZone.run(()=>this.hide(0))})}ngOnDestroy(){let t=this._elementRef.nativeElement;this._touchstartTimeout&&clearTimeout(this._touchstartTimeout),this._overlayRef&&(this._overlayRef.dispose(),this._tooltipInstance=null),this._eventCleanups.forEach(e=>e()),this._eventCleanups.length=0,this._destroyed.next(),this._destroyed.complete(),this._isDestroyed=!0,this._ariaDescriber.removeDescription(t,this.message,`tooltip`),this._focusMonitor.stopMonitoring(t)}show(t=this.showDelay,e){if(this.disabled||!this.message||this._isTooltipVisible()){this._tooltipInstance?._cancelPendingAnimations();return}let n=this._createOverlay(e);this._detach(),this._portal=this._portal||new Y(this._tooltipComponent,this._viewContainerRef);let o=this._tooltipInstance=n.attach(this._portal).instance;o._triggerElement=this._elementRef.nativeElement,o._mouseLeaveHideDelay=this._hideDelay,o.afterHidden().pipe(tv(this._destroyed)).subscribe(()=>this._detach()),this._setTooltipClass(this._tooltipClass),this._updateTooltipMessage(),o.show(t)}hide(t=this.hideDelay){let e=this._tooltipInstance;e&&(e.isVisible()?e.hide(t):(e._cancelPendingAnimations(),this._detach()))}toggle(t){this._isTooltipVisible()?this.hide():this.show(void 0,t)}_isTooltipVisible(){return!!this._tooltipInstance&&this._tooltipInstance.isVisible()}_createOverlay(t){if(this._overlayRef){let r=this._overlayRef.getConfig().positionStrategy;if((!this.positionAtOrigin||!t)&&r._origin instanceof Hr)return this._overlayRef;this._detach()}let e=this._injector.get(B).getAncestorScrollContainers(this._elementRef),n=`${this._cssClassPrefix}-${ge}`,o=At(this._injector,this.positionAtOrigin?t||this._elementRef:this._elementRef).withTransformOriginOn(`.${this._cssClassPrefix}-tooltip`).withFlexibleDimensions(!1).withViewportMargin(this._viewportMargin).withScrollableContainers(e).withPopoverLocation(`global`);return o.positionChanges.pipe(tv(this._destroyed)).subscribe(r=>{this._updateCurrentPositionClass(r.connectionPair),this._tooltipInstance&&r.scrollableViewProperties.isOverlayClipped&&this._tooltipInstance.isVisible()&&this._ngZone.run(()=>this.hide(0))}),this._overlayRef=It(this._injector,{direction:this._dir,positionStrategy:o,panelClass:this._overlayPanelClass?[...this._overlayPanelClass,n]:n,scrollStrategy:this._injector.get(De$1)(),disableAnimations:this._animationsDisabled,eventPredicate:this._overlayEventPredicate}),this._updatePosition(this._overlayRef),this._overlayRef.detachments().pipe(tv(this._destroyed)).subscribe(()=>this._detach()),this._overlayRef.outsidePointerEvents().pipe(tv(this._destroyed)).subscribe(()=>this._tooltipInstance?._handleBodyInteraction()),this._overlayRef.keydownEvents().pipe(tv(this._destroyed)).subscribe(r=>{r.preventDefault(),r.stopPropagation(),this._ngZone.run(()=>this.hide(0))}),this._defaultOptions?.disableTooltipInteractivity&&this._overlayRef.addPanelClass(`${this._cssClassPrefix}-tooltip-panel-non-interactive`),this._dirSubscribed||(this._dirSubscribed=!0,this._dir.change.pipe(tv(this._destroyed)).subscribe(()=>{this._overlayRef&&this._updatePosition(this._overlayRef)})),this._overlayRef}_detach(){this._overlayRef&&this._overlayRef.hasAttached()&&this._overlayRef.detach(),this._tooltipInstance=null}_updatePosition(t){let e=t.getConfig().positionStrategy,n=this._getOrigin(),o=this._getOverlayPosition();e.withPositions([this._addOffset(z$2(z$2({},n.main),o.main)),this._addOffset(z$2(z$2({},n.fallback),o.fallback))])}_addOffset(t){let e=Ae,n=!this._dir||this._dir.value==`ltr`;return t.originY===`top`?t.offsetY=-e:t.originY===`bottom`?t.offsetY=e:t.originX===`start`?t.offsetX=n?-e:e:t.originX===`end`&&(t.offsetX=n?e:-e),t}_getOrigin(){let t=!this._dir||this._dir.value==`ltr`,e=this.position,n;e==`above`||e==`below`?n={originX:`center`,originY:e==`above`?`top`:`bottom`}:e==`before`||e==`left`&&t||e==`right`&&!t?n={originX:`start`,originY:`center`}:(e==`after`||e==`right`&&t||e==`left`&&!t)&&(n={originX:`end`,originY:`center`});let{x:o,y:r}=this._invertPosition(n.originX,n.originY);return{main:n,fallback:{originX:o,originY:r}}}_getOverlayPosition(){let t=!this._dir||this._dir.value==`ltr`,e=this.position,n;e==`above`?n={overlayX:`center`,overlayY:`bottom`}:e==`below`?n={overlayX:`center`,overlayY:`top`}:e==`before`||e==`left`&&t||e==`right`&&!t?n={overlayX:`end`,overlayY:`center`}:(e==`after`||e==`right`&&t||e==`left`&&!t)&&(n={overlayX:`start`,overlayY:`center`});let{x:o,y:r}=this._invertPosition(n.overlayX,n.overlayY);return{main:n,fallback:{overlayX:o,overlayY:r}}}_updateTooltipMessage(){this._tooltipInstance&&(this._tooltipInstance.message=this.message,this._tooltipInstance._markForCheck(),vh(()=>{this._tooltipInstance&&this._overlayRef.updatePosition()},{injector:this._injector}))}_setTooltipClass(t){this._tooltipInstance&&(this._tooltipInstance.tooltipClass=t instanceof Set?Array.from(t):t,this._tooltipInstance._markForCheck())}_invertPosition(t,e){return this.position===`above`||this.position===`below`?e===`top`?e=`bottom`:e===`bottom`&&(e=`top`):t===`end`?t=`start`:t===`start`&&(t=`end`),{x:t,y:e}}_updateCurrentPositionClass(t){let{overlayY:e,originX:n,originY:o}=t,r;if(e===`center`?this._dir&&this._dir.value===`rtl`?r=n===`end`?`left`:`right`:r=n===`start`?`left`:`right`:r=e===`bottom`&&o===`top`?`above`:`below`,r!==this._currentPosition){let a=this._overlayRef;if(a){let c=`${this._cssClassPrefix}-${ge}-`;a.removePanelClass(c+this._currentPosition),a.addPanelClass(c+r)}this._currentPosition=r}}_setupPointerEnterEventsIfNeeded(){this._disabled||!this.message||!this._viewInitialized||this._eventCleanups.length||(this._isTouchPlatform()?this.touchGestures!==`off`&&(this._disableNativeGesturesIfNecessary(),this._addListener(`touchstart`,t=>{let e=t.targetTouches?.[0],n=e?{x:e.clientX,y:e.clientY}:void 0;this._setupPointerExitEventsIfNeeded(),this._touchstartTimeout&&clearTimeout(this._touchstartTimeout);let o=500;this._touchstartTimeout=setTimeout(()=>{this._touchstartTimeout=null,this.show(void 0,n)},this._defaultOptions?.touchLongPressShowDelay??o)})):this._addListener(`mouseenter`,t=>{this._setupPointerExitEventsIfNeeded();let e;t.x!==void 0&&t.y!==void 0&&(e=t),this.show(void 0,e)}))}_setupPointerExitEventsIfNeeded(){if(!this._pointerExitEventsInitialized){if(this._pointerExitEventsInitialized=!0,!this._isTouchPlatform())this._addListener(`mouseleave`,t=>{let e=t.relatedTarget;(!e||!this._overlayRef?.overlayElement.contains(e))&&this.hide()}),this._addListener(`wheel`,t=>{if(this._isTooltipVisible()){let e=this._document.elementFromPoint(t.clientX,t.clientY),n=this._elementRef.nativeElement;e!==n&&!n.contains(e)&&this.hide()}});else if(this.touchGestures!==`off`){this._disableNativeGesturesIfNecessary();let t=()=>{this._touchstartTimeout&&clearTimeout(this._touchstartTimeout),this.hide(this._defaultOptions?.touchendHideDelay)};this._addListener(`touchend`,t),this._addListener(`touchcancel`,t)}}}_addListener(t,e){this._eventCleanups.push(this._renderer.listen(this._elementRef.nativeElement,t,e,Me))}_isTouchPlatform(){let t=this._defaultOptions?.detectHoverCapability;return typeof t==`function`?!t():this._platform.IOS||this._platform.ANDROID?!0:this._platform.isBrowser?!!t&&this._mediaMatcher.matchMedia(`(any-hover: none)`).matches:!1}_disableNativeGesturesIfNecessary(){let t=this.touchGestures;if(t!==`off`){let e=this._elementRef.nativeElement,n=e.style;(t===`on`||e.nodeName!==`INPUT`&&e.nodeName!==`TEXTAREA`)&&(n.userSelect=n.msUserSelect=n.webkitUserSelect=n.MozUserSelect=`none`),(t===`on`||!e.draggable)&&(n.webkitUserDrag=`none`),n.touchAction=`none`,n.webkitTapHighlightColor=`transparent`}}_syncAriaDescription(t){this._ariaDescriptionPending||(this._ariaDescriptionPending=!0,this._ariaDescriber.removeDescription(this._elementRef.nativeElement,t,`tooltip`),this._isDestroyed||vh({write:()=>{this._ariaDescriptionPending=!1,this.message&&!this.disabled&&this._ariaDescriber.describe(this._elementRef.nativeElement,this.message,`tooltip`)}},{injector:this._injector}))}_overlayEventPredicate=t=>t.type===`keydown`?this._isTooltipVisible()&&t.keyCode===27&&!$i(t):!0;static ɵfac=function(e){return new(e||s)};static ɵdir=uw({type:s,selectors:[[``,`matTooltip`,``]],hostAttrs:[1,`mat-mdc-tooltip-trigger`],hostVars:2,hostBindings:function(e,n){e&2&&am(`mat-mdc-tooltip-disabled`,n.disabled)},inputs:{position:[0,`matTooltipPosition`,`position`],positionAtOrigin:[0,`matTooltipPositionAtOrigin`,`positionAtOrigin`],disabled:[0,`matTooltipDisabled`,`disabled`],showDelay:[0,`matTooltipShowDelay`,`showDelay`],hideDelay:[0,`matTooltipHideDelay`,`hideDelay`],touchGestures:[0,`matTooltipTouchGestures`,`touchGestures`],message:[0,`matTooltip`,`message`],tooltipClass:[0,`matTooltipClass`,`tooltipClass`]},exportAs:[`matTooltip`]})}return s})();var me=(()=>{class s{_changeDetectorRef=y(rj);_elementRef=y(Hr);_isMultiline=!1;message;tooltipClass;_showTimeoutId;_hideTimeoutId;_triggerElement;_mouseLeaveHideDelay;_animationsDisabled=fe$1();_tooltip;_closeOnInteraction=!1;_isVisible=!1;_onHide=new ee$1;_showAnimation=`mat-mdc-tooltip-show`;_hideAnimation=`mat-mdc-tooltip-hide`;show(t){this._hideTimeoutId!=null&&clearTimeout(this._hideTimeoutId),this._showTimeoutId=setTimeout(()=>{this._toggleVisibility(!0),this._showTimeoutId=void 0},t)}hide(t){this._showTimeoutId!=null&&clearTimeout(this._showTimeoutId),this._hideTimeoutId=setTimeout(()=>{this._toggleVisibility(!1),this._hideTimeoutId=void 0},t)}afterHidden(){return this._onHide}isVisible(){return this._isVisible}ngOnDestroy(){this._cancelPendingAnimations(),this._onHide.complete(),this._triggerElement=null}_handleBodyInteraction(){this._closeOnInteraction&&this.hide(0)}_markForCheck(){this._changeDetectorRef.markForCheck()}_handleMouseLeave({relatedTarget:t}){(!t||!this._triggerElement.contains(t))&&(this.isVisible()?this.hide(this._mouseLeaveHideDelay):this._finalizeAnimation(!1))}_onShow(){this._isMultiline=this._isTooltipMultiline(),this._markForCheck()}_isTooltipMultiline(){let t=this._elementRef.nativeElement.getBoundingClientRect();return t.height>Ie$1&&t.width>=Ve}_handleAnimationEnd({animationName:t}){(t===this._showAnimation||t===this._hideAnimation)&&this._finalizeAnimation(t===this._showAnimation)}_cancelPendingAnimations(){this._showTimeoutId!=null&&clearTimeout(this._showTimeoutId),this._hideTimeoutId!=null&&clearTimeout(this._hideTimeoutId),this._showTimeoutId=this._hideTimeoutId=void 0}_finalizeAnimation(t){t?this._closeOnInteraction=!0:this.isVisible()||this._onHide.next()}_toggleVisibility(t){let e=this._tooltip.nativeElement,n=this._showAnimation,o=this._hideAnimation;if(e.classList.remove(t?o:n),e.classList.add(t?n:o),this._isVisible!==t&&(this._isVisible=t,this._changeDetectorRef.markForCheck()),t&&!this._animationsDisabled&&typeof getComputedStyle==`function`){let r=getComputedStyle(e);(r.getPropertyValue(`animation-duration`)===`0s`||r.getPropertyValue(`animation-name`)===`none`)&&(this._animationsDisabled=!0)}t&&this._onShow(),this._animationsDisabled&&(e.classList.add(`_mat-animation-noopable`),this._finalizeAnimation(t))}static ɵfac=function(e){return new(e||s)};static ɵcmp=(function(){let t=[`tooltip`];return iw({type:s,selectors:[[`mat-tooltip-component`]],viewQuery:function(n,o){if(n&1&&Xg(t,7),n&2){let r;vC(r=EC())&&(o._tooltip=r.first)}},hostAttrs:[`aria-hidden`,`true`],hostBindings:function(n,o){n&1&&Zg(`mouseleave`,function(a){return o._handleMouseLeave(a)})},decls:4,vars:5,consts:[[`tooltip`,``],[1,`mdc-tooltip`,`mat-mdc-tooltip`,3,`animationend`],[1,`mat-mdc-tooltip-surface`,`mdc-tooltip__surface`]],template:function(n,o){n&1&&(Al$1(0,`div`,1,0),Kg(`animationend`,function(a){return o._handleAnimationEnd(a)}),Al$1(2,`div`,2),qC(3),Ol$1()()),n&2&&(PC(o.tooltipClass),am(`mdc-tooltip--multiline`,o._isMultiline),mD(3),ym(o.message))},styles:[`.mat-mdc-tooltip {
  position: relative;
  transform: scale(0);
  display: inline-flex;
}
.mat-mdc-tooltip::before {
  content: "";
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: -1;
  position: absolute;
}
.mat-mdc-tooltip-panel-below .mat-mdc-tooltip::before {
  top: -8px;
}
.mat-mdc-tooltip-panel-above .mat-mdc-tooltip::before {
  bottom: -8px;
}
.mat-mdc-tooltip-panel-right .mat-mdc-tooltip::before {
  left: -8px;
}
.mat-mdc-tooltip-panel-left .mat-mdc-tooltip::before {
  right: -8px;
}
.mat-mdc-tooltip._mat-animation-noopable {
  animation: none;
  transform: scale(1);
}

.mat-mdc-tooltip-surface {
  word-break: normal;
  overflow-wrap: anywhere;
  padding: 4px 8px;
  min-width: 40px;
  max-width: 200px;
  min-height: 24px;
  max-height: 40vh;
  box-sizing: border-box;
  overflow: hidden;
  text-align: center;
  will-change: transform, opacity;
  background-color: var(--%NS%mat-tooltip-container-color, var(--%NS%mat-sys-inverse-surface));
  color: var(--%NS%mat-tooltip-supporting-text-color, var(--%NS%mat-sys-inverse-on-surface));
  border-radius: var(--%NS%mat-tooltip-container-shape, var(--%NS%mat-sys-corner-extra-small));
  font-family: var(--%NS%mat-tooltip-supporting-text-font, var(--%NS%mat-sys-body-small-font));
  font-size: var(--%NS%mat-tooltip-supporting-text-size, var(--%NS%mat-sys-body-small-size));
  font-weight: var(--%NS%mat-tooltip-supporting-text-weight, var(--%NS%mat-sys-body-small-weight));
  line-height: var(--%NS%mat-tooltip-supporting-text-line-height, var(--%NS%mat-sys-body-small-line-height));
  letter-spacing: var(--%NS%mat-tooltip-supporting-text-tracking, var(--%NS%mat-sys-body-small-tracking));
}
.mat-mdc-tooltip-surface::before {
  position: absolute;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  border: 1px solid transparent;
  border-radius: inherit;
  content: "";
  pointer-events: none;
}
.mdc-tooltip--multiline .mat-mdc-tooltip-surface {
  text-align: left;
}
[dir=rtl] .mdc-tooltip--multiline .mat-mdc-tooltip-surface {
  text-align: right;
}

.mat-mdc-tooltip-panel {
  line-height: normal;
}
.mat-mdc-tooltip-panel.mat-mdc-tooltip-panel-non-interactive {
  pointer-events: none;
}

@keyframes mat-mdc-tooltip-show {
  0% {
    opacity: 0;
    transform: scale(0.8);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}
@keyframes mat-mdc-tooltip-hide {
  0% {
    opacity: 1;
    transform: scale(1);
  }
  100% {
    opacity: 0;
    transform: scale(0.8);
  }
}
.mat-mdc-tooltip-show {
  animation: mat-mdc-tooltip-show 150ms cubic-bezier(0, 0, 0.2, 1) forwards;
}

.mat-mdc-tooltip-hide {
  animation: mat-mdc-tooltip-hide 75ms cubic-bezier(0.4, 0, 1, 1) forwards;
}
`],encapsulation:2})})()}return s})();var c=class n{httpClient=y(ge$1);isBrowser=An$1(y($v));_isAuthenticated=mt(!1);isAuthenticated=nt$2(()=>this.myIdentityInfo.hasValue());myIdentityInfo=Xr(()=>this.isBrowser?`/api/identity/CheckAuthentication`:void 0);GetUsernameUrl=`/api/identity/GetUsername?userId=`;constructor(){}submitLogin(e){let t=new O$1().set(`CfTurnstileResponse`,e.CfTurnstileResponse).set(`Password`,e.Password).set(`UsernameOrEmail`,e.UsernameOrEmail).set(`ReturnUrl`,e.ReturnUrl);return this.httpClient.post(`/api/identity/Login`,t,{observe:`response`}).pipe(gy({next:s=>{s.ok&&this.myIdentityInfo.reload()}}))}submitSignup(e){let t=new FormData;return t.set(`CfTurnstileResponse`,e.CfTurnstileResponse),t.set(`Email`,e.Email),t.set(`Username`,e.Username),t.set(`Password`,e.Password),this.httpClient.post(`/api/identity/Signup`,t).pipe(gy({next:s=>{s.success&&this.myIdentityInfo.reload()}}))}logout(){this.httpClient.post(`/api/identity/Logout`,null).pipe(gy({next:()=>{this.myIdentityInfo.reload()}}))}getUsername(e){let t=new O$1().set(`userId`,e);return this.httpClient.get(`/api/identity/GetUsername`,{params:t})}static ɵfac=function(t){return new(t||n)};static ɵprov=Vr({token:n,factory:n.ɵfac})};var p=class i{httpClient=y(ge$1);identityService=y(c);profileInfoUrl=`/api/UserAccount/GetProfileInfo?userId=`;myProfileInfo=Xr(()=>this.identityService.isAuthenticated()?`${this.profileInfoUrl}${this.identityService.myIdentityInfo.value()?.id}`:void 0);constructor(){}getUserAvatarUrl(t){let e=new O$1().set(`userId`,t);return this.httpClient.get(`/api/UserAccount/GetUserAvatarUrl`,{params:e})}saveUserAvatar(t){let e=new FormData;return e.append(`userImageFile`,t),this.httpClient.post(`/api/UserProfile/SubmitUserImage`,e)}deleteUserAvatar(){return this.httpClient.delete(`/api/Profile/DeleteUserImage`)}changeName(t){let e=new O$1().set(`name`,t);return this.httpClient.post(`/api/Profile/SubmitProfileName`,e)}changeDescription(t){let e=new O$1().set(`description`,t);return this.httpClient.post(`/api/Profile/SubmitDescription`,e)}static ɵfac=function(e){return new(e||i)};static ɵprov=Vr({token:i,factory:i.ɵfac})};var we=class a{static ɵfac=function(e){return new(e||a)};static ɵcmp=iw({type:a,selectors:[[`app-home`]],decls:2,vars:0,template:function(e,t){e&1&&(Al$1(0,`p`),qC(1,`home works!`),Ol$1())},encapsulation:2})};var Ot=[{path:`identity/login`,loadComponent:()=>import(`./chunk-Brt8Z_6I.js`).then(a=>a.Login)},{path:`identity/signup`,loadComponent:()=>import(`./chunk-CqPl9ye6.js`).then(a=>a.Signup)},{path:`identity/setting`,loadComponent:()=>import(`./chunk-sqnqgao9.js`).then(a=>a.Setting)},{path:`identity/resetpassword`,loadComponent:()=>import(`./chunk-Da2uM8Hu.js`).then(a=>a.ResetPassword)}];var Ft=(a,m)=>{let e=y(c),t=y(ue$1);return e.isAuthenticated()?!0:t.createUrlTree([`/identity/login`],{queryParams:{ReturnUrl:m.url}})};var zt=[...[{path:`UserAccount/Profile/:userId`,loadComponent:()=>import(`./chunk-DSouNYNT.js`).then(a=>a.Profile)},{path:`UserAccount/Profile`,loadComponent:()=>import(`./chunk-DSouNYNT.js`).then(a=>a.Profile)},{path:`UserAccount/ProfileSetting`,loadComponent:()=>import(`./chunk-DWMW1UZ0.js`).then(a=>a.ProfileSetting),canActivate:[Ft]}]];var jt=[{path:``,component:we},...Ot,...zt];var Zt=Math.pow(2,31)-1;var Z=class{_overlayRef;instance;containerInstance;_afterDismissed=new ee$1;_afterOpened=new ee$1;_onAction=new ee$1;_durationTimeoutId;_dismissedByAction=!1;constructor(m,e){this._overlayRef=e,this.containerInstance=m,m._onExit.subscribe(()=>this._finishDismiss())}dismiss(){this._afterDismissed.closed||this.containerInstance.exit(),clearTimeout(this._durationTimeoutId)}dismissWithAction(){this._onAction.closed||(this._dismissedByAction=!0,this._onAction.next(),this._onAction.complete(),this.dismiss()),clearTimeout(this._durationTimeoutId)}closeWithAction(){this.dismissWithAction()}_dismissAfter(m){this._durationTimeoutId=setTimeout(()=>this.dismiss(),Math.min(m,Zt))}_open(){this._afterOpened.closed||(this._afterOpened.next(),this._afterOpened.complete())}_finishDismiss(){this._overlayRef.dispose(),this._onAction.closed||this._onAction.complete(),this._afterDismissed.next({dismissedByAction:this._dismissedByAction}),this._afterDismissed.complete(),this._dismissedByAction=!1}afterDismissed(){return this._afterDismissed}afterOpened(){return this.containerInstance._onEnter}onAction(){return this._onAction}};var Xt=new _$1(`MatSnackBarData`);var V=class{politeness=`polite`;announcementMessage=``;viewContainerRef;duration=0;panelClass;direction;data=null;horizontalPosition=`center`;verticalPosition=`bottom`};var Jt=(()=>{class a{static ɵfac=function(t){return new(t||a)};static ɵdir=uw({type:a,selectors:[[``,`matSnackBarLabel`,``]],hostAttrs:[1,`mat-mdc-snack-bar-label`,`mdc-snackbar__label`]})}return a})();var en=(()=>{class a{static ɵfac=function(t){return new(t||a)};static ɵdir=uw({type:a,selectors:[[``,`matSnackBarActions`,``]],hostAttrs:[1,`mat-mdc-snack-bar-actions`,`mdc-snackbar__actions`]})}return a})();var tn=(()=>{class a{static ɵfac=function(t){return new(t||a)};static ɵdir=uw({type:a,selectors:[[``,`matSnackBarAction`,``]],hostAttrs:[1,`mat-mdc-snack-bar-action`,`mdc-snackbar__action`]})}return a})();var nn=(()=>{class a{snackBarRef=y(Z);data=y(Xt);action(){this.snackBarRef.dismissWithAction()}get hasAction(){return!!this.data.action}static ɵfac=function(t){return new(t||a)};static ɵcmp=(function(){function e(t,n){if(t&1){let i=uC();Vi$1(0,`div`,1)(1,`button`,2),Zg(`click`,function(){bd(i);let r=pC();return _d(r.action())}),qC(2),xl$1()()}if(t&2){let i=pC();mD(2),Pl$1(` `,i.data.action,` `)}}return iw({type:a,selectors:[[`simple-snack-bar`]],hostAttrs:[1,`mat-mdc-simple-snack-bar`],exportAs:[`matSnackBar`],decls:3,vars:2,consts:[[`matSnackBarLabel`,``],[`matSnackBarActions`,``],[`matButton`,``,`matSnackBarAction`,``,3,`click`]],template:function(n,i){n&1&&(Vi$1(0,`div`,0),qC(1),xl$1(),Jw(2,e,3,1,`div`,1)),n&2&&(mD(),Pl$1(` `,i.data.message,`
`),mD(),eC(i.hasAction?2:-1))},dependencies:[Hh,Jt,en,tn],styles:[`.mat-mdc-simple-snack-bar {
  display: flex;
}
.mat-mdc-simple-snack-bar .mat-mdc-snack-bar-label {
  max-height: 50vh;
  overflow: auto;
}
`],encapsulation:2})})()}return a})();var Fe=`_mat-snack-bar-enter`;var Le=`_mat-snack-bar-exit`;var an=(()=>{class a extends ${_ngZone=y(Pe$2);_elementRef=y(Hr);_changeDetectorRef=y(rj);_platform=y(V$1);_animationsDisabled=fe$1();snackBarConfig=y(V);_document=y(pt);_trackedModals=/* @__PURE__ */ new Set;_enterFallback;_exitFallback;_injector=y(ne$2);_announceDelay=150;_announceTimeoutId;_destroyed=!1;_portalOutlet;_onAnnounce=new ee$1;_onExit=new ee$1;_onEnter=new ee$1;_animationState=`void`;_live;_label;_role;_liveElementId=y(br).getId(`mat-snack-bar-container-live-`);constructor(){super();let e=this.snackBarConfig;e.politeness===`assertive`&&!e.announcementMessage?this._live=`assertive`:e.politeness===`off`?this._live=`off`:this._live=`polite`,this._platform.FIREFOX&&(this._live===`polite`&&(this._role=`status`),this._live===`assertive`&&(this._role=`alert`))}attachComponentPortal(e){this._assertNotAttached();let t=this._portalOutlet.attachComponentPortal(e);return this._afterPortalAttached(),t}attachTemplatePortal(e){this._assertNotAttached();let t=this._portalOutlet.attachTemplatePortal(e);return this._afterPortalAttached(),t}attachDomPortal=e=>{this._assertNotAttached();let t=this._portalOutlet.attachDomPortal(e);return this._afterPortalAttached(),t};onAnimationEnd(e){e===Le?this._completeExit():e===Fe&&(clearTimeout(this._enterFallback),this._ngZone.run(()=>{this._onEnter.next(),this._onEnter.complete()}))}enter(){this._destroyed||(this._animationState=`visible`,this._changeDetectorRef.markForCheck(),this._changeDetectorRef.detectChanges(),this._screenReaderAnnounce(),this._animationsDisabled?vh(()=>{this._ngZone.run(()=>queueMicrotask(()=>this.onAnimationEnd(Fe)))},{injector:this._injector}):(clearTimeout(this._enterFallback),this._enterFallback=setTimeout(()=>{this._elementRef.nativeElement.classList.add(`mat-snack-bar-fallback-visible`),this.onAnimationEnd(Fe)},200)))}exit(){return this._destroyed?_y(void 0):(this._ngZone.run(()=>{this._animationState=`hidden`,this._changeDetectorRef.markForCheck(),this._elementRef.nativeElement.setAttribute(`mat-exit`,``),clearTimeout(this._announceTimeoutId),this._animationsDisabled?vh(()=>{this._ngZone.run(()=>queueMicrotask(()=>this.onAnimationEnd(Le)))},{injector:this._injector}):(clearTimeout(this._exitFallback),this._exitFallback=setTimeout(()=>this.onAnimationEnd(Le),200))}),this._onExit)}ngOnDestroy(){this._destroyed=!0,this._clearFromModals(),this._completeExit()}_completeExit(){clearTimeout(this._exitFallback),queueMicrotask(()=>{this._onExit.next(),this._onExit.complete()})}_afterPortalAttached(){let e=this._elementRef.nativeElement,t=this.snackBarConfig.panelClass;t&&(Array.isArray(t)?t.forEach(o=>e.classList.add(o)):e.classList.add(t)),this._exposeToModals();let n=this._label.nativeElement,i=`mdc-snackbar__label`;n.classList.toggle(i,!n.querySelector(`.${i}`))}_exposeToModals(){let e=this._liveElementId,t=this._document.querySelectorAll(`body > .cdk-overlay-container [aria-modal="true"]`);for(let n=0;n<t.length;n++){let i=t[n],o=i.getAttribute(`aria-owns`);this._trackedModals.add(i),o?o.indexOf(e)===-1&&i.setAttribute(`aria-owns`,o+` `+e):i.setAttribute(`aria-owns`,e)}}_clearFromModals(){this._trackedModals.forEach(e=>{let t=e.getAttribute(`aria-owns`);if(t){let n=t.replace(this._liveElementId,``).trim();n.length>0?e.setAttribute(`aria-owns`,n):e.removeAttribute(`aria-owns`)}}),this._trackedModals.clear()}_assertNotAttached(){this._portalOutlet.hasAttached()}_screenReaderAnnounce(){this._announceTimeoutId||this._ngZone.runOutsideAngular(()=>{this._announceTimeoutId=setTimeout(()=>{if(this._destroyed)return;let e=this._elementRef.nativeElement,t=e.querySelector(`[aria-hidden]`),n=e.querySelector(`[aria-live]`);if(t&&n){let i=null;this._platform.isBrowser&&document.activeElement instanceof HTMLElement&&t.contains(document.activeElement)&&(i=document.activeElement),t.removeAttribute(`aria-hidden`),n.appendChild(t),i?.focus(),this._onAnnounce.next(),this._onAnnounce.complete()}},this._announceDelay)})}static ɵfac=function(t){return new(t||a)};static ɵcmp=(function(){let e=[`label`];function t(n,i){}return iw({type:a,selectors:[[`mat-snack-bar-container`]],viewQuery:function(i,o){if(i&1&&Xg(wi,7)(e,7),i&2){let r;vC(r=EC())&&(o._portalOutlet=r.first),vC(r=EC())&&(o._label=r.first)}},hostAttrs:[1,`mdc-snackbar`,`mat-mdc-snack-bar-container`],hostVars:6,hostBindings:function(i,o){i&1&&Zg(`animationend`,function(l){return o.onAnimationEnd(l.animationName)})(`animationcancel`,function(l){return o.onAnimationEnd(l.animationName)}),i&2&&am(`mat-snack-bar-container-enter`,o._animationState===`visible`)(`mat-snack-bar-container-exit`,o._animationState===`hidden`)(`mat-snack-bar-container-animations-enabled`,!o._animationsDisabled)},features:[Mg],decls:6,vars:3,consts:[[`label`,``],[1,`mdc-snackbar__surface`,`mat-mdc-snackbar-surface`],[1,`mat-mdc-snack-bar-label`],[`aria-hidden`,`true`],[`cdkPortalOutlet`,``]],template:function(i,o){i&1&&(Vi$1(0,`div`,1)(1,`div`,2,0)(3,`div`,3),Sg(4,t,0,0,`ng-template`,4),xl$1(),Ug(5,`div`),xl$1()()),i&2&&(mD(5),Hg(`aria-live`,o._live)(`role`,o._role)(`id`,o._liveElementId))},dependencies:[wi],styles:[`@keyframes _mat-snack-bar-enter {
  from {
    transform: scale(0.8);
    opacity: 0;
  }
  to {
    transform: scale(1);
    opacity: 1;
  }
}
@keyframes _mat-snack-bar-exit {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
.mat-mdc-snack-bar-container {
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  margin: 8px;
}
.mat-mdc-snack-bar-handset .mat-mdc-snack-bar-container {
  width: 100vw;
}

.mat-snack-bar-container-animations-enabled {
  opacity: 0;
}
.mat-snack-bar-container-animations-enabled.mat-snack-bar-fallback-visible {
  opacity: 1;
}
.mat-snack-bar-container-animations-enabled.mat-snack-bar-container-enter {
  animation: _mat-snack-bar-enter 150ms cubic-bezier(0, 0, 0.2, 1) forwards;
}
.mat-snack-bar-container-animations-enabled.mat-snack-bar-container-exit {
  animation: _mat-snack-bar-exit 75ms cubic-bezier(0.4, 0, 1, 1) forwards;
}

.mat-mdc-snackbar-surface {
  box-shadow: 0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12);
  display: flex;
  align-items: center;
  justify-content: flex-start;
  box-sizing: border-box;
  padding-left: 0;
  padding-right: 8px;
}
[dir=rtl] .mat-mdc-snackbar-surface {
  padding-right: 0;
  padding-left: 8px;
}
.mat-mdc-snack-bar-container .mat-mdc-snackbar-surface {
  min-width: 344px;
  max-width: 672px;
}
.mat-mdc-snack-bar-handset .mat-mdc-snackbar-surface {
  width: 100%;
  min-width: 0;
}
@media (forced-colors: active) {
  .mat-mdc-snackbar-surface {
    outline: solid 1px;
  }
}
.mat-mdc-snack-bar-container .mat-mdc-snackbar-surface {
  color: var(--%NS%mat-snack-bar-supporting-text-color, var(--%NS%mat-sys-inverse-on-surface));
  border-radius: var(--%NS%mat-snack-bar-container-shape, var(--%NS%mat-sys-corner-extra-small));
  background-color: var(--%NS%mat-snack-bar-container-color, var(--%NS%mat-sys-inverse-surface));
}

.mdc-snackbar__label {
  width: 100%;
  flex-grow: 1;
  box-sizing: border-box;
  margin: 0;
  padding: 14px 8px 14px 16px;
}
[dir=rtl] .mdc-snackbar__label {
  padding-left: 8px;
  padding-right: 16px;
}
.mat-mdc-snack-bar-container .mdc-snackbar__label {
  font-family: var(--%NS%mat-snack-bar-supporting-text-font, var(--%NS%mat-sys-body-medium-font));
  font-size: var(--%NS%mat-snack-bar-supporting-text-size, var(--%NS%mat-sys-body-medium-size));
  font-weight: var(--%NS%mat-snack-bar-supporting-text-weight, var(--%NS%mat-sys-body-medium-weight));
  line-height: var(--%NS%mat-snack-bar-supporting-text-line-height, var(--%NS%mat-sys-body-medium-line-height));
}

.mat-mdc-snack-bar-actions {
  display: flex;
  flex-shrink: 0;
  align-items: center;
  box-sizing: border-box;
}

.mat-mdc-snack-bar-handset,
.mat-mdc-snack-bar-container,
.mat-mdc-snack-bar-label {
  flex: 1 1 auto;
}

.mat-mdc-snack-bar-container .mat-mdc-button.mat-mdc-snack-bar-action:not(:disabled).mat-unthemed {
  color: var(--%NS%mat-snack-bar-button-color, var(--%NS%mat-sys-inverse-primary));
}
.mat-mdc-snack-bar-container .mat-mdc-button.mat-mdc-snack-bar-action:not(:disabled) {
  --%NS%mat-button-text-state-layer-color: currentColor;
  --%NS%mat-button-text-ripple-color: currentColor;
}
.mat-mdc-snack-bar-container .mat-mdc-button.mat-mdc-snack-bar-action:not(:disabled) .mat-ripple-element {
  opacity: 0.1;
}
`],encapsulation:2,changeDetection:1})})()}return a})();var on=new _$1(`mat-snack-bar-default-options`,{providedIn:`root`,factory:()=>new V});var Yt=(()=>{class a{_live=y(Vl);_injector=y(ne$2);_breakpointObserver=y(Al);_parentSnackBar=y(a,{optional:!0,skipSelf:!0});_defaultConfig=y(on);_animationsDisabled=fe$1();_snackBarRefAtThisLevel=null;simpleSnackBarComponent=nn;snackBarContainerComponent=an;handsetCssClass=`mat-mdc-snack-bar-handset`;get _openedSnackBarRef(){let e=this._parentSnackBar;return e?e._openedSnackBarRef:this._snackBarRefAtThisLevel}set _openedSnackBarRef(e){this._parentSnackBar?this._parentSnackBar._openedSnackBarRef=e:this._snackBarRefAtThisLevel=e}openFromComponent(e,t){return this._attach(e,t)}openFromTemplate(e,t){return this._attach(e,t)}open(e,t=``,n){let i=z$2(z$2({},this._defaultConfig),n);return i.data={message:e,action:t},i.announcementMessage===e&&(i.announcementMessage=void 0),this.openFromComponent(this.simpleSnackBarComponent,i)}dismiss(){this._openedSnackBarRef&&this._openedSnackBarRef.dismiss()}ngOnDestroy(){this._snackBarRefAtThisLevel&&this._snackBarRefAtThisLevel.dismiss()}_attachSnackBarContainer(e,t){let n=t&&t.viewContainerRef&&t.viewContainerRef.injector,i=ne$2.create({parent:n||this._injector,providers:[{provide:V,useValue:t}]}),o=new Y(this.snackBarContainerComponent,t.viewContainerRef,i),r=e.attach(o);return r.instance.snackBarConfig=t,r.instance}_attach(e,t){let n=z$2(z$2(z$2({},new V),this._defaultConfig),t),i=this._createOverlay(n),o=this._attachSnackBarContainer(i,n),r=new Z(o,i);if(e instanceof Rr){let l=new Z$1(e,null,{$implicit:n.data,snackBarRef:r});r.instance=o.attachTemplatePortal(l)}else{let l=this._createInjector(n,r),g=new Y(e,void 0,l);r.instance=o.attachComponentPortal(g).instance}return this._breakpointObserver.observe(Kf.HandsetPortrait).pipe(tv(i.detachments())).subscribe(l=>{i.overlayElement.classList.toggle(this.handsetCssClass,l.matches)}),n.announcementMessage&&o._onAnnounce.subscribe(()=>{this._live.announce(n.announcementMessage,n.politeness)}),this._animateSnackBar(r,n),this._openedSnackBarRef=r,this._openedSnackBarRef}_animateSnackBar(e,t){e.afterDismissed().subscribe(()=>{this._openedSnackBarRef==e&&(this._openedSnackBarRef=null),t.announcementMessage&&this._live.clear()}),t.duration&&t.duration>0&&e.afterOpened().subscribe(()=>e._dismissAfter(t.duration)),this._openedSnackBarRef?(this._openedSnackBarRef.afterDismissed().subscribe(()=>{e.containerInstance.enter()}),this._openedSnackBarRef.dismiss()):e.containerInstance.enter()}_createOverlay(e){let t=new tt;t.direction=e.direction;let n=Re(this._injector),i=e.direction===`rtl`,o=e.horizontalPosition===`left`||e.horizontalPosition===`start`&&!i||e.horizontalPosition===`end`&&i,r=!o&&e.horizontalPosition!==`center`;return o?n.left(`0`):r?n.right(`0`):n.centerHorizontally(),e.verticalPosition===`top`?n.top(`0`):n.bottom(`0`),t.positionStrategy=n,t.disableAnimations=this._animationsDisabled,It(this._injector,t)}_createInjector(e,t){let n=e&&e.viewContainerRef&&e.viewContainerRef.injector;return ne$2.create({parent:n||this._injector,providers:[{provide:Z,useValue:t},{provide:Xt,useValue:e.data}]})}static ɵfac=function(t){return new(t||a)};static ɵprov=Vr({token:a,factory:a.ɵfac})}return a})();var Ce=class a{snackBar=y(Yt);handleError(m){let e=m.rejection||m,t=``;if(e instanceof F)switch(e.status){case 0:t=`Connection Error`;break;case Ge$1.Unauthorized:t=`Unauthorized`;break;case Ge$1.Forbidden:t=`Access Denied`;break;case Ge$1.BadRequest:t=`Bad Request`;break;default:t=`Unknown Error`}else t=`Application Error`;this.snackBar.open(t,`Ok`),console.error(t,e)}static ɵfac=function(e){return new(e||a)};static ɵprov=se$2({token:a,factory:a.ɵfac,providedIn:`root`})};var qt={providers:[{provide:st$1,useClass:Ce},Bv(),ll(jt),Zd(),_t$1(Ot$1({cookieName:`XSRF-TOKEN`,headerName:`X-CSRF-TOKEN`}))]};var je=new _$1(`MAT_MENU_PANEL`);var J=(()=>{class a{_isAnchor;_elementRef=y(Hr);_document=y(pt);_focusMonitor=y(mr);_parentMenu=y(je,{optional:!0});_changeDetectorRef=y(rj);role=`menuitem`;disabled=!1;disabledInteractive=!1;disableRipple=!1;_hovered=new ee$1;_focused=new ee$1;_highlighted=!1;_triggersSubmenu=!1;constructor(){y(bt).load(ns),this._parentMenu?.addItem?.(this),this._isAnchor=this._elementRef.nativeElement.tagName===`A`}focus(e,t){this._focusMonitor&&e?this._focusMonitor.focusVia(this._getHostElement(),e,t):this._getHostElement().focus(t),this._focused.next(this)}ngAfterViewInit(){this._focusMonitor&&this._focusMonitor.monitor(this._elementRef,!1)}ngOnDestroy(){this._focusMonitor&&this._focusMonitor.stopMonitoring(this._elementRef),this._parentMenu&&this._parentMenu.removeItem&&this._parentMenu.removeItem(this),this._hovered.complete(),this._focused.complete()}_getTabIndex(){return this.disabled&&!this.disabledInteractive?`-1`:`0`}_getAriaDisabled(){return this._isAnchor?this.disabled||null:this.disabled&&this.disabledInteractive?!0:null}_getDisabled(){return this.disabledInteractive||!this.disabled?null:!0}_getHostElement(){return this._elementRef.nativeElement}_checkDisabled(e){this.disabled&&(e.preventDefault(),e.stopPropagation())}_handleMouseEnter(){this._hovered.next(this)}getLabel(){let e=this._elementRef.nativeElement.cloneNode(!0),t=e.querySelectorAll(`mat-icon, .material-icons, .material-symbols-outlined, .material-symbols-rounded, .material-symbols-sharp`);for(let n=0;n<t.length;n++)t[n].remove();return e.textContent?.trim()||``}_setHighlighted(e){this._highlighted=e,this._changeDetectorRef.markForCheck()}_setTriggersSubmenu(e){this._triggersSubmenu=e,this._changeDetectorRef.markForCheck()}_hasFocus(){return this._document&&this._document.activeElement===this._getHostElement()}static ɵfac=function(t){return new(t||a)};static ɵcmp=(function(){let e=[[[`mat-icon`],[``,`matMenuItemIcon`,``]],`*`],t=[`mat-icon, [matMenuItemIcon]`,`*`];function n(i,o){i&1&&(jd(),Vi$1(0,`svg`,2),Ug(1,`polygon`,3),xl$1())}return iw({type:a,selectors:[[``,`mat-menu-item`,``]],hostAttrs:[1,`mat-mdc-menu-item`,`mat-focus-indicator`],hostVars:12,hostBindings:function(o,r){o&1&&Zg(`click`,function(g){return r._checkDisabled(g)})(`mouseenter`,function(){return r._handleMouseEnter()}),o&2&&(Hg(`role`,r.role)(`tabindex`,r._getTabIndex())(`aria-disabled`,r._getAriaDisabled())(`disabled`,r._getDisabled()),am(`mat-mdc-menu-item-highlighted`,r._highlighted)(`mat-mdc-menu-item-submenu-trigger`,r._triggersSubmenu)(`mat-mdc-menu-item-disabled`,r.disabled)(`mat-mdc-menu-item-disabled-interactive`,r.disabledInteractive))},inputs:{role:`role`,disabled:[2,`disabled`,`disabled`,ij],disabledInteractive:[2,`disabledInteractive`,`disabledInteractive`,ij],disableRipple:[2,`disableRipple`,`disableRipple`,ij]},exportAs:[`matMenuItem`],ngContentSelectors:t,decls:5,vars:3,consts:[[1,`mat-mdc-menu-item-text`],[`matRipple`,``,1,`mat-mdc-menu-ripple`,3,`matRippleDisabled`,`matRippleTrigger`],[`viewBox`,`0 0 5 10`,`focusable`,`false`,`aria-hidden`,`true`,1,`mat-mdc-menu-submenu-icon`],[`points`,`0,0 5,5 0,10`]],template:function(o,r){o&1&&(gC(e),mC(0),Vi$1(1,`span`,0),mC(2,1),xl$1(),Ug(3,`div`,1),Jw(4,n,2,0,`svg`,2)),o&2&&(mD(3),Bg(`matRippleDisabled`,r.disableRipple||r.disabled)(`matRippleTrigger`,r._getHostElement()),mD(),eC(r._triggersSubmenu?4:-1))},dependencies:[hh],encapsulation:2})})()}return a})();var dn=new _$1(`MatMenuContent`);var un=new _$1(`mat-menu-default-options`,{providedIn:`root`,factory:()=>({overlapTrigger:!1,xPosition:`after`,yPosition:`below`,backdropClass:`cdk-overlay-transparent-backdrop`})});var ze=`_mat-menu-enter`;var Se=`_mat-menu-exit`;var X=(()=>{class a{_elementRef=y(Hr);_changeDetectorRef=y(rj);_injector=y(ne$2);_keyManager;_xPosition;_yPosition;_firstItemFocusRef;_exitFallbackTimeout;_animationsDisabled=fe$1();_allItems;_directDescendantItems=new _i$1;_classList={};_panelAnimationState=`void`;_animationDone=new ee$1;_isAnimating=mt(!1);parentMenu;direction;overlayPanelClass;backdropClass;ariaLabel;ariaLabelledby;ariaDescribedby;get xPosition(){return this._xPosition}set xPosition(e){this._xPosition=e,this.setPositionClasses()}get yPosition(){return this._yPosition}set yPosition(e){this._yPosition=e,this.setPositionClasses()}templateRef;items;lazyContent;overlapTrigger=!1;hasBackdrop;get panelClass(){return this._previousPanelClass}set panelClass(e){let t=this._previousPanelClass,n=z$2({},this._classList);t&&t.length&&t.split(` `).forEach(i=>{n[i]=!1}),this._previousPanelClass=e,e&&e.length&&(e.split(` `).forEach(i=>{n[i]=!0}),this._elementRef.nativeElement.className=``),this._classList=n}_previousPanelClass=``;get classList(){return this.panelClass}set classList(e){this.panelClass=e}closed=new qe$1;close=this.closed;panelId=y(br).getId(`mat-menu-panel-`);constructor(){let e=y(un);this.overlayPanelClass=e.overlayPanelClass||``,this._xPosition=e.xPosition,this._yPosition=e.yPosition,this.backdropClass=e.backdropClass,this.overlapTrigger=e.overlapTrigger,this.hasBackdrop=e.hasBackdrop}ngOnInit(){this.setPositionClasses()}ngAfterContentInit(){this._updateDirectDescendants(),this._keyManager=new hr(this._directDescendantItems).withWrap().withTypeAhead().withHomeAndEnd().skipPredicate(e=>e.disabled&&!e.disabledInteractive),this._keyManager.tabOut.subscribe(()=>this.closed.emit(`tab`)),this._directDescendantItems.changes.pipe(Xy(this._directDescendantItems),ev(e=>Hy(...e.map(t=>t._focused)))).subscribe(e=>this._keyManager.updateActiveItem(e)),this._directDescendantItems.changes.subscribe(e=>{let t=this._keyManager;if(this._panelAnimationState===`enter`&&t.activeItem?._hasFocus()){let n=e.toArray(),i=Math.max(0,Math.min(n.length-1,t.activeItemIndex||0));n[i]&&!n[i].disabled?t.setActiveItem(i):t.setNextItemActive()}})}ngOnDestroy(){this._keyManager?.destroy(),this._directDescendantItems.destroy(),this.closed.complete(),this._firstItemFocusRef?.destroy(),clearTimeout(this._exitFallbackTimeout)}_hovered(){return this._directDescendantItems.changes.pipe(Xy(this._directDescendantItems),ev(t=>Hy(...t.map(n=>n._hovered))))}addItem(e){}removeItem(e){}_handleKeydown(e){let t=e.keyCode,n=this._keyManager;switch(t){case 27:$i(e)||(e.preventDefault(),this.closed.emit(`keydown`));break;case 37:this.parentMenu&&this.direction===`ltr`&&this.closed.emit(`keydown`);break;case 39:this.parentMenu&&this.direction===`rtl`&&this.closed.emit(`keydown`);break;default:(t===38||t===40)&&n.setFocusOrigin(`keyboard`),n.onKeydown(e);return}}focusFirstItem(e=`program`){this._firstItemFocusRef?.destroy(),this._firstItemFocusRef=vh(()=>{let t=this._resolvePanel();if(!t||!t.contains(document.activeElement)){let n=this._keyManager;n.setFocusOrigin(e).setFirstItemActive(),!n.activeItem&&t&&t.focus()}},{injector:this._injector})}resetActiveItem(){this._keyManager.setActiveItem(-1)}setElevation(e){}setPositionClasses(e=this.xPosition,t=this.yPosition){this._classList=Q$2(z$2({},this._classList),{"mat-menu-before":e===`before`,"mat-menu-after":e===`after`,"mat-menu-above":t===`above`,"mat-menu-below":t===`below`}),this._changeDetectorRef.markForCheck()}_onAnimationDone(e){let t=e===Se;(t||e===ze)&&(t&&(clearTimeout(this._exitFallbackTimeout),this._exitFallbackTimeout=void 0),this._animationDone.next(t?`void`:`enter`),this._isAnimating.set(!1))}_onAnimationStart(e){(e===ze||e===Se)&&this._isAnimating.set(!0)}_setIsOpen(e){if(this._panelAnimationState=e?`enter`:`void`,e){if(this._keyManager.activeItemIndex===0){let t=this._resolvePanel();t&&(t.scrollTop=0)}}else this._animationsDisabled||(this._exitFallbackTimeout=setTimeout(()=>this._onAnimationDone(Se),200));this._animationsDisabled&&setTimeout(()=>{this._onAnimationDone(e?ze:Se)}),this._changeDetectorRef.markForCheck()}_updateDirectDescendants(){this._allItems.changes.pipe(Xy(this._allItems)).subscribe(e=>{this._directDescendantItems.reset(e.filter(t=>t._parentMenu===this)),this._directDescendantItems.notifyOnChanges()})}_resolvePanel(){let e=null;return this._directDescendantItems.length&&(e=this._directDescendantItems.first._getHostElement().closest(`[role="menu"]`)),e}static ɵfac=function(t){return new(t||a)};static ɵcmp=(function(){let e=[`*`];function t(n,i){if(n&1){let o=uC();Al$1(0,`div`,0),Kg(`click`,function(){bd(o);let l=pC();return _d(l.closed.emit(`click`))})(`animationstart`,function(l){bd(o);let g=pC();return _d(g._onAnimationStart(l.animationName))})(`animationend`,function(l){bd(o);let g=pC();return _d(g._onAnimationDone(l.animationName))})(`animationcancel`,function(l){bd(o);let g=pC();return _d(g._onAnimationDone(l.animationName))}),Al$1(1,`div`,1),mC(2),Ol$1()()}if(n&2){let o=pC();PC(o._classList),am(`mat-menu-panel-animations-disabled`,o._animationsDisabled)(`mat-menu-panel-exit-animation`,o._panelAnimationState===`void`)(`mat-menu-panel-animating`,o._isAnimating()),Qg(`id`,o.panelId),Hg(`aria-label`,o.ariaLabel||null)(`aria-labelledby`,o.ariaLabelledby||null)(`aria-describedby`,o.ariaDescribedby||null)}}return iw({type:a,selectors:[[`mat-menu`]],contentQueries:function(i,o,r){if(i&1&&Jg(r,dn,5)(r,J,5)(r,J,4),i&2){let l;vC(l=EC())&&(o.lazyContent=l.first),vC(l=EC())&&(o._allItems=l),vC(l=EC())&&(o.items=l)}},viewQuery:function(i,o){if(i&1&&Xg(Rr,5),i&2){let r;vC(r=EC())&&(o.templateRef=r.first)}},hostVars:3,hostBindings:function(i,o){i&2&&Hg(`aria-label`,null)(`aria-labelledby`,null)(`aria-describedby`,null)},inputs:{backdropClass:`backdropClass`,ariaLabel:[0,`aria-label`,`ariaLabel`],ariaLabelledby:[0,`aria-labelledby`,`ariaLabelledby`],ariaDescribedby:[0,`aria-describedby`,`ariaDescribedby`],xPosition:`xPosition`,yPosition:`yPosition`,overlapTrigger:[2,`overlapTrigger`,`overlapTrigger`,ij],hasBackdrop:[2,`hasBackdrop`,`hasBackdrop`,n=>n==null?null:ij(n)],panelClass:[0,`class`,`panelClass`],classList:`classList`},outputs:{closed:`closed`,close:`close`},exportAs:[`matMenu`],features:[XC([{provide:je,useExisting:a}])],ngContentSelectors:e,decls:1,vars:0,consts:[[`tabindex`,`-1`,`role`,`menu`,1,`mat-mdc-menu-panel`,3,`click`,`animationstart`,`animationend`,`animationcancel`,`id`],[1,`mat-mdc-menu-content`]],template:function(i,o){i&1&&(gC(),xg(0,t,3,12,`ng-template`))},styles:[`mat-menu {
  display: none;
}

.mat-mdc-menu-content {
  margin: 0;
  padding: 8px 0;
  outline: 0;
}
.mat-mdc-menu-content,
.mat-mdc-menu-content .mat-mdc-menu-item .mat-mdc-menu-item-text {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  flex: 1;
  white-space: normal;
  font-family: var(--%NS%mat-menu-item-label-text-font, var(--%NS%mat-sys-label-large-font));
  line-height: var(--%NS%mat-menu-item-label-text-line-height, var(--%NS%mat-sys-label-large-line-height));
  font-size: var(--%NS%mat-menu-item-label-text-size, var(--%NS%mat-sys-label-large-size));
  letter-spacing: var(--%NS%mat-menu-item-label-text-tracking, var(--%NS%mat-sys-label-large-tracking));
  font-weight: var(--%NS%mat-menu-item-label-text-weight, var(--%NS%mat-sys-label-large-weight));
}

@keyframes _mat-menu-enter {
  from {
    opacity: 0;
    transform: scale(0.8);
  }
  to {
    opacity: 1;
    transform: none;
  }
}
@keyframes _mat-menu-exit {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
.mat-mdc-menu-panel {
  min-width: 112px;
  max-width: 280px;
  overflow: auto;
  box-sizing: border-box;
  outline: 0;
  animation: _mat-menu-enter 120ms cubic-bezier(0, 0, 0.2, 1);
  border-radius: var(--%NS%mat-menu-container-shape, var(--%NS%mat-sys-corner-extra-small));
  background-color: var(--%NS%mat-menu-container-color, var(--%NS%mat-sys-surface-container));
  box-shadow: var(--%NS%mat-menu-container-elevation-shadow, 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12));
  will-change: transform, opacity;
}
.mat-mdc-menu-panel.mat-menu-panel-exit-animation {
  animation: _mat-menu-exit 100ms 25ms linear forwards;
}
.mat-mdc-menu-panel.mat-menu-panel-animations-disabled {
  animation: none;
}
.mat-mdc-menu-panel.mat-menu-panel-animating {
  pointer-events: none;
}
.mat-mdc-menu-panel.mat-menu-panel-animating:has(.mat-mdc-menu-content:empty) {
  display: none;
}
@media (forced-colors: active) {
  .mat-mdc-menu-panel {
    outline: solid 1px;
  }
}
.mat-mdc-menu-panel .mat-divider {
  border-top-color: var(--%NS%mat-menu-divider-color, var(--%NS%mat-sys-surface-variant));
  margin-bottom: var(--%NS%mat-menu-divider-bottom-spacing, 8px);
  margin-top: var(--%NS%mat-menu-divider-top-spacing, 8px);
}

.mat-mdc-menu-item {
  display: flex;
  position: relative;
  align-items: center;
  justify-content: flex-start;
  overflow: hidden;
  padding: 0;
  cursor: pointer;
  width: 100%;
  text-align: left;
  box-sizing: border-box;
  color: inherit;
  font-size: inherit;
  background: none;
  text-decoration: none;
  margin: 0;
  min-height: 48px;
  padding-left: var(--%NS%mat-menu-item-leading-spacing, 12px);
  padding-right: var(--%NS%mat-menu-item-trailing-spacing, 12px);
  -webkit-user-select: none;
  user-select: none;
  cursor: pointer;
  outline: none;
  border: none;
  -webkit-tap-highlight-color: transparent;
}
.mat-mdc-menu-item::-moz-focus-inner {
  border: 0;
}
[dir=rtl] .mat-mdc-menu-item {
  padding-left: var(--%NS%mat-menu-item-trailing-spacing, 12px);
  padding-right: var(--%NS%mat-menu-item-leading-spacing, 12px);
}
.mat-mdc-menu-item:has(.material-icons, .material-symbols-outlined, .material-symbols-rounded, .material-symbols-sharp, mat-icon, [matButtonIcon]) {
  padding-left: var(--%NS%mat-menu-item-with-icon-leading-spacing, 12px);
  padding-right: var(--%NS%mat-menu-item-with-icon-trailing-spacing, 12px);
}
[dir=rtl] .mat-mdc-menu-item:has(.material-icons, .material-symbols-outlined, .material-symbols-rounded, .material-symbols-sharp, mat-icon, [matButtonIcon]) {
  padding-left: var(--%NS%mat-menu-item-with-icon-trailing-spacing, 12px);
  padding-right: var(--%NS%mat-menu-item-with-icon-leading-spacing, 12px);
}
.mat-mdc-menu-item, .mat-mdc-menu-item:visited, .mat-mdc-menu-item:link {
  color: var(--%NS%mat-menu-item-label-text-color, var(--%NS%mat-sys-on-surface));
}
.mat-mdc-menu-item .mat-icon-no-color,
.mat-mdc-menu-item .mat-mdc-menu-submenu-icon {
  color: var(--%NS%mat-menu-item-icon-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-menu-item[disabled], .mat-mdc-menu-item.mat-mdc-menu-item-disabled {
  cursor: default;
  opacity: 0.38;
}
.mat-mdc-menu-item[disabled]::after, .mat-mdc-menu-item.mat-mdc-menu-item-disabled::after {
  display: block;
  position: absolute;
  content: "";
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
}
.mat-mdc-menu-item:focus {
  outline: 0;
}
.mat-mdc-menu-item .mat-icon {
  flex-shrink: 0;
  margin-right: var(--%NS%mat-menu-item-spacing, 12px);
  height: var(--%NS%mat-menu-item-icon-size, 24px);
  width: var(--%NS%mat-menu-item-icon-size, 24px);
}
[dir=rtl] .mat-mdc-menu-item {
  text-align: right;
}
[dir=rtl] .mat-mdc-menu-item .mat-icon {
  margin-right: 0;
  margin-left: var(--%NS%mat-menu-item-spacing, 12px);
}
.mat-mdc-menu-item:not([disabled]):hover {
  background-color: var(--%NS%mat-menu-item-hover-state-layer-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) calc(var(--%NS%mat-sys-hover-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-menu-item:not([disabled]).cdk-program-focused, .mat-mdc-menu-item:not([disabled]).cdk-keyboard-focused, .mat-mdc-menu-item:not([disabled]).mat-mdc-menu-item-highlighted {
  background-color: var(--%NS%mat-menu-item-focus-state-layer-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) calc(var(--%NS%mat-sys-focus-state-layer-opacity) * 100%), transparent));
}
@media (forced-colors: active) {
  .mat-mdc-menu-item {
    margin-top: 1px;
  }
}

.mat-mdc-menu-submenu-icon {
  width: var(--%NS%mat-menu-item-icon-size, 24px);
  height: 10px;
  fill: currentColor;
  padding-left: var(--%NS%mat-menu-item-spacing, 12px);
}
[dir=rtl] .mat-mdc-menu-submenu-icon {
  padding-right: var(--%NS%mat-menu-item-spacing, 12px);
  padding-left: 0;
}
[dir=rtl] .mat-mdc-menu-submenu-icon polygon {
  transform: scaleX(-1);
  transform-origin: center;
}
@media (forced-colors: active) {
  .mat-mdc-menu-submenu-icon {
    fill: CanvasText;
  }
}

.mat-mdc-menu-item .mat-mdc-menu-ripple {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
}
`],encapsulation:2})})()}return a})();var pn=new _$1(`mat-menu-scroll-strategy`,{providedIn:`root`,factory:()=>{let a=y(ne$2);return()=>Mt(a)}});var U=/* @__PURE__ */ new WeakMap;var hn=(()=>{class a{_canHaveBackdrop;_element=y(Hr);_viewContainerRef=y(rs$1);_menuItemInstance=y(J,{optional:!0,self:!0});_dir=y(Sl,{optional:!0});_focusMonitor=y(mr);_ngZone=y(Pe$2);_injector=y(ne$2);_scrollStrategy=y(pn);_changeDetectorRef=y(rj);_animationsDisabled=fe$1();_portal;_overlayRef=null;_menuOpen=!1;_closingActionsSubscription=K$1.EMPTY;_menuCloseSubscription=K$1.EMPTY;_pendingRemoval;_parentMaterialMenu;_parentInnerPadding;_openedBy=void 0;get _menu(){return this._menuInternal}set _menu(e){e!==this._menuInternal&&(this._menuInternal=e,this._menuCloseSubscription.unsubscribe(),e?(this._parentMaterialMenu,this._menuCloseSubscription=e.close.subscribe(t=>{this._destroyMenu(t),(t===`click`||t===`tab`)&&this._parentMaterialMenu&&this._parentMaterialMenu.closed.emit(t)})):this._destroyMenu(),this._menuItemInstance?._setTriggersSubmenu(this._triggersSubmenu()))}_menuInternal=null;constructor(e){this._canHaveBackdrop=e;let t=y(je,{optional:!0});this._parentMaterialMenu=t instanceof X?t:void 0}ngOnDestroy(){this._menu&&this._ownsMenu(this._menu)&&U.delete(this._menu),this._pendingRemoval?.unsubscribe(),this._menuCloseSubscription.unsubscribe(),this._closingActionsSubscription.unsubscribe(),this._overlayRef&&(this._overlayRef.dispose(),this._overlayRef=null)}get menuOpen(){return this._menuOpen}get dir(){return this._dir&&this._dir.value===`rtl`?`rtl`:`ltr`}_triggersSubmenu(){return!!(this._menuItemInstance&&this._parentMaterialMenu&&this._menu)}_closeMenu(){this._menu?.close.emit()}_openMenu(e){if(this._triggerIsAriaDisabled())return;let t=this._menu;if(this._menuOpen||!t)return;this._pendingRemoval?.unsubscribe();let n=U.get(t);U.set(t,this),n&&n!==this&&n._closeMenu();let i=this._createOverlay(t),o=i.getConfig(),r=o.positionStrategy;this._setPosition(t,r),this._canHaveBackdrop?o.hasBackdrop=t.hasBackdrop==null?!this._triggersSubmenu():t.hasBackdrop:o.hasBackdrop=t.hasBackdrop??!1,i.hasAttached()||(i.attach(this._getPortal(t)),t.lazyContent?.attach(this.menuData)),this._closingActionsSubscription=this._menuClosingActions().subscribe(()=>this._closeMenu()),t.parentMenu=this._triggersSubmenu()?this._parentMaterialMenu:void 0,t.direction=this.dir,e&&t.focusFirstItem(this._openedBy||`program`),this._setIsMenuOpen(!0),t instanceof X&&(t._setIsOpen(!0),t._directDescendantItems.changes.pipe(tv(t.close)).subscribe(()=>{r.withLockedPosition(!1).reapplyLastPosition(),r.withLockedPosition(!0)}))}focus(e,t){this._focusMonitor&&e?this._focusMonitor.focusVia(this._element,e,t):this._element.nativeElement.focus(t)}_destroyMenu(e){let t=this._overlayRef,n=this._menu;!t||!this.menuOpen||(this._closingActionsSubscription.unsubscribe(),this._pendingRemoval?.unsubscribe(),n instanceof X&&this._ownsMenu(n)?(this._pendingRemoval=n._animationDone.pipe(Ts$1(1)).subscribe(()=>{t.detach(),U.has(n)||n.lazyContent?.detach()}),n._setIsOpen(!1)):(t.detach(),n?.lazyContent?.detach()),n&&this._ownsMenu(n)&&U.delete(n),this.restoreFocus&&(e===`keydown`||!this._openedBy||!this._triggersSubmenu())&&this.focus(this._openedBy),this._openedBy=void 0,this._setIsMenuOpen(!1))}_setIsMenuOpen(e){e!==this._menuOpen&&(this._menuOpen=e,this._menuOpen?this.menuOpened.emit():this.menuClosed.emit(),this._triggersSubmenu()&&this._menuItemInstance._setHighlighted(e),this._changeDetectorRef.markForCheck())}_createOverlay(e){if(!this._overlayRef){let t=this._getOverlayConfig(e);this._subscribeToPositions(e,t.positionStrategy),this._overlayRef=It(this._injector,t),this._overlayRef.keydownEvents().subscribe(n=>{this._menu instanceof X&&this._menu._handleKeydown(n)})}return this._overlayRef}_getOverlayConfig(e){return new tt({positionStrategy:At(this._injector,this._getOverlayOrigin()).withLockedPosition().withGrowAfterOpen().withTransformOriginOn(`.mat-menu-panel, .mat-mdc-menu-panel`),backdropClass:e.backdropClass||`cdk-overlay-transparent-backdrop`,panelClass:e.overlayPanelClass,scrollStrategy:this._scrollStrategy(),direction:this._dir||`ltr`,disableAnimations:this._animationsDisabled})}_subscribeToPositions(e,t){e.setPositionClasses&&t.positionChanges.subscribe(n=>{this._ngZone.run(()=>{let i=n.connectionPair.overlayX===`start`?`after`:`before`,o=n.connectionPair.overlayY===`top`?`below`:`above`;e.setPositionClasses(i,o)})})}_setPosition(e,t){let[n,i]=e.xPosition===`before`?[`end`,`start`]:[`start`,`end`],[o,r]=e.yPosition===`above`?[`bottom`,`top`]:[`top`,`bottom`],[l,g]=[o,r],[Y,Ae]=[n,i],q=0;if(this._triggersSubmenu()){if(Ae=n=e.xPosition===`before`?`start`:`end`,i=Y=n===`end`?`start`:`end`,this._parentMaterialMenu){if(this._parentInnerPadding==null){let He=this._parentMaterialMenu.items.first;this._parentInnerPadding=He?He._getHostElement().offsetTop:0}q=o===`bottom`?this._parentInnerPadding:-this._parentInnerPadding}}else e.overlapTrigger||(l=o===`top`?`bottom`:`top`,g=r===`top`?`bottom`:`top`);t.withPositions([{originX:n,originY:l,overlayX:Y,overlayY:o,offsetY:q},{originX:i,originY:l,overlayX:Ae,overlayY:o,offsetY:q},{originX:n,originY:g,overlayX:Y,overlayY:r,offsetY:-q},{originX:i,originY:g,overlayX:Ae,overlayY:r,offsetY:-q}])}_menuClosingActions(){let e=this._getOutsideClickStream(this._overlayRef),t=this._overlayRef.detachments(),n=this._parentMaterialMenu?this._parentMaterialMenu.closed:_y(),i=this._parentMaterialMenu?this._parentMaterialMenu._hovered().pipe(Jn$1(o=>this._menuOpen&&o!==this._menuItemInstance)):_y();return Hy(e,n,i,t)}_getPortal(e){return(!this._portal||this._portal.templateRef!==e.templateRef)&&(this._portal=new Z$1(e.templateRef,this._viewContainerRef)),this._portal}_ownsMenu(e){return U.get(e)===this}_triggerIsAriaDisabled(){return ij(this._element.nativeElement.getAttribute(`aria-disabled`))}static ɵfac=function(t){CT()};static ɵdir=uw({type:a})}return a})();var Kt=(()=>{class a extends hn{_cleanupTouchstart;_hoverSubscription=K$1.EMPTY;get _deprecatedMatMenuTriggerFor(){return this.menu}set _deprecatedMatMenuTriggerFor(e){this.menu=e}get menu(){return this._menu}set menu(e){this._menu=e}menuData;restoreFocus=!0;menuOpened=new qe$1;onMenuOpen=this.menuOpened;menuClosed=new qe$1;onMenuClose=this.menuClosed;constructor(){super(!0);let e=y(mc$1);this._cleanupTouchstart=e.listen(this._element.nativeElement,`touchstart`,t=>{Ye(t)||(this._openedBy=`touch`)},{passive:!0})}triggersSubmenu(){return super._triggersSubmenu()}toggleMenu(){return this.menuOpen?this.closeMenu():this.openMenu()}openMenu(){this._openMenu(!0)}closeMenu(){this._closeMenu()}updatePosition(){this._overlayRef?.updatePosition()}ngAfterContentInit(){this._handleHover()}ngOnDestroy(){super.ngOnDestroy(),this._cleanupTouchstart(),this._hoverSubscription.unsubscribe()}_getOverlayOrigin(){return this._element}_getOutsideClickStream(e){return e.backdropClick()}_handleMousedown(e){Ke(e)||(this._openedBy=e.button===0?`mouse`:void 0,this.triggersSubmenu()&&e.preventDefault())}_handleKeydown(e){let t=e.keyCode;(t===13||t===32)&&(this._openedBy=`keyboard`),this.triggersSubmenu()&&(t===39&&this.dir===`ltr`||t===37&&this.dir===`rtl`)&&(this._openedBy=`keyboard`,this.openMenu())}_handleClick(e){this.triggersSubmenu()?(e.stopPropagation(),this.openMenu()):this.toggleMenu()}_handleHover(){this.triggersSubmenu()&&this._parentMaterialMenu&&(this._hoverSubscription=this._parentMaterialMenu._hovered().subscribe(e=>{e===this._menuItemInstance&&!e.disabled&&this._parentMaterialMenu?._panelAnimationState!==`void`&&(this._openedBy=`mouse`,this._openMenu(!1))}))}static ɵfac=function(t){return new(t||a)};static ɵdir=uw({type:a,selectors:[[``,`mat-menu-trigger-for`,``],[``,`matMenuTriggerFor`,``]],hostAttrs:[1,`mat-mdc-menu-trigger`],hostVars:3,hostBindings:function(t,n){t&1&&Zg(`click`,function(o){return n._handleClick(o)})(`mousedown`,function(o){return n._handleMousedown(o)})(`keydown`,function(o){return n._handleKeydown(o)}),t&2&&Hg(`aria-haspopup`,n.menu?`menu`:null)(`aria-expanded`,n.menuOpen)(`aria-controls`,n.menuOpen?n.menu?.panelId:null)},inputs:{_deprecatedMatMenuTriggerFor:[0,`mat-menu-trigger-for`,`_deprecatedMatMenuTriggerFor`],menu:[0,`matMenuTriggerFor`,`menu`],menuData:[0,`matMenuTriggerData`,`menuData`],restoreFocus:[0,`matMenuTriggerRestoreFocus`,`restoreFocus`]},outputs:{menuOpened:`menuOpened`,onMenuOpen:`onMenuOpen`,menuClosed:`menuClosed`,onMenuClose:`onMenuClose`},exportAs:[`matMenuTrigger`],features:[Mg]})}return a})();var fn=(()=>{class a{static ɵfac=function(t){return new(t||a)};static ɵdir=uw({type:a,selectors:[[`mat-toolbar-row`]],hostAttrs:[1,`mat-toolbar-row`],exportAs:[`matToolbarRow`]})}return a})();var Gt=(()=>{class a{_elementRef=y(Hr);_platform=y(V$1);_document=y(pt);color;_toolbarRows;ngAfterViewInit(){this._platform.isBrowser&&(this._checkToolbarMixedModes(),this._toolbarRows.changes.subscribe(()=>this._checkToolbarMixedModes()))}_checkToolbarMixedModes(){this._toolbarRows.length}static ɵfac=function(t){return new(t||a)};static ɵcmp=(function(){let e=[`*`,[[`mat-toolbar-row`]]];return iw({type:a,selectors:[[`mat-toolbar`]],contentQueries:function(i,o,r){if(i&1&&Jg(r,fn,5),i&2){let l;vC(l=EC())&&(o._toolbarRows=l)}},hostAttrs:[1,`mat-toolbar`],hostVars:6,hostBindings:function(i,o){i&2&&(PC(o.color?`mat-`+o.color:``),am(`mat-toolbar-multiple-rows`,o._toolbarRows.length>0)(`mat-toolbar-single-row`,o._toolbarRows.length===0))},inputs:{color:`color`},exportAs:[`matToolbar`],ngContentSelectors:[`*`,`mat-toolbar-row`],decls:2,vars:0,template:function(i,o){i&1&&(gC(e),mC(0),mC(1,1))},styles:[`.mat-toolbar {
  background: var(--%NS%mat-toolbar-container-background-color, var(--%NS%mat-sys-surface));
  color: var(--%NS%mat-toolbar-container-text-color, var(--%NS%mat-sys-on-surface));
}
.mat-toolbar, .mat-toolbar h1, .mat-toolbar h2, .mat-toolbar h3, .mat-toolbar h4, .mat-toolbar h5, .mat-toolbar h6 {
  font-family: var(--%NS%mat-toolbar-title-text-font, var(--%NS%mat-sys-title-large-font));
  font-size: var(--%NS%mat-toolbar-title-text-size, var(--%NS%mat-sys-title-large-size));
  line-height: var(--%NS%mat-toolbar-title-text-line-height, var(--%NS%mat-sys-title-large-line-height));
  font-weight: var(--%NS%mat-toolbar-title-text-weight, var(--%NS%mat-sys-title-large-weight));
  letter-spacing: var(--%NS%mat-toolbar-title-text-tracking, var(--%NS%mat-sys-title-large-tracking));
  margin: 0;
}
@media (forced-colors: active) {
  .mat-toolbar {
    outline: solid 1px;
  }
}
.mat-toolbar .mat-form-field-underline,
.mat-toolbar .mat-form-field-ripple,
.mat-toolbar .mat-focused .mat-form-field-ripple {
  background-color: currentColor;
}
.mat-toolbar .mat-form-field-label,
.mat-toolbar .mat-focused .mat-form-field-label,
.mat-toolbar .mat-select-value,
.mat-toolbar .mat-select-arrow,
.mat-toolbar .mat-form-field.mat-focused .mat-select-arrow {
  color: inherit;
}
.mat-toolbar .mat-input-element {
  caret-color: currentColor;
}
.mat-toolbar .mat-mdc-button-base.mat-mdc-button-base.mat-unthemed {
  --%NS%mat-button-text-label-text-color: var(--%NS%mat-toolbar-container-text-color, var(--%NS%mat-sys-on-surface));
  --%NS%mat-button-outlined-label-text-color: var(--%NS%mat-toolbar-container-text-color, var(--%NS%mat-sys-on-surface));
}

.mat-toolbar-row, .mat-toolbar-single-row {
  display: flex;
  box-sizing: border-box;
  padding: 0 16px;
  width: 100%;
  flex-direction: row;
  align-items: center;
  white-space: nowrap;
  height: var(--%NS%mat-toolbar-standard-height, 64px);
}
@media (max-width: 599px) {
  .mat-toolbar-row, .mat-toolbar-single-row {
    height: var(--%NS%mat-toolbar-mobile-height, 56px);
  }
}

.mat-toolbar-multiple-rows {
  display: flex;
  box-sizing: border-box;
  flex-direction: column;
  width: 100%;
  min-height: var(--%NS%mat-toolbar-standard-height, 64px);
}
@media (max-width: 599px) {
  .mat-toolbar-multiple-rows {
    min-height: var(--%NS%mat-toolbar-mobile-height, 56px);
  }
}
`],encapsulation:2})})()}return a})();function gn(a,m){if(a&1&&Ug(0,`img`,1),a&2){let e=pC();Bg(`ngSrc`,e.userAccService.myProfileInfo.value().avatarUrl)(`matTooltip`,e.identityService.myIdentityInfo.value()?.userName)}}function bn(a,m){if(a&1&&(Vi$1(0,`mat-icon`,2),qC(1,` account_circle `),xl$1()),a&2){let e=pC();Bg(`matTooltip`,e.identityService.myIdentityInfo.value()?.userName)}}function _n(a,m){a&1&&(Vi$1(0,`mat-icon`),qC(1,`account_circle_off`),xl$1())}var Te=class a{menu=K1.required();identityService=y(c);userAccService=y(p);imgBtnStyle=`padding: 0px; width: 40px; height: 40px; transform: translateY(3px);`;static ɵfac=function(e){return new(e||a)};static ɵcmp=iw({type:a,selectors:[[`app-account-dropdown`]],inputs:{menu:[1,`menu`]},decls:4,vars:4,consts:[[`matIconButton`,``,3,`matMenuTriggerFor`],[`priority`,``,`width`,`40`,`height`,`40`,`alt`,`user avatar`,3,`ngSrc`,`matTooltip`],[3,`matTooltip`]],template:function(e,t){e&1&&(Vi$1(0,`button`,0),Jw(1,gn,1,2,`img`,1)(2,bn,2,1,`mat-icon`,2)(3,_n,2,0,`mat-icon`),xl$1()),e&2&&(kC(t.userAccService.myProfileInfo.hasValue()?t.imgBtnStyle:``),Bg(`matMenuTriggerFor`,t.menu()),mD(),eC(t.userAccService.myProfileInfo.value()?.avatarUrl?1:t.identityService.isAuthenticated()?2:3))},dependencies:[nd,Kt,Xm,Sn$2,Le$1],styles:[`button[_ngcontent-%COMP%]{margin:0;overflow:hidden}button[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:40px;height:40px;margin:0;padding:0}`]})};var yn=()=>[`/`];var vn=()=>[`/profile`];var Mn=()=>[`/identity/login`];var xn=()=>[`/identity/signup`];function kn(a,m){if(a&1){let e=uC();Vi$1(0,`button`,8),Zg(`click`,function(){bd(e);let n=pC();return _d(n.sharedConfigs.toggleColorScheme())}),Vi$1(1,`mat-icon`),qC(2,`light_mode`),xl$1()()}}function wn(a,m){if(a&1){let e=uC();Vi$1(0,`button`,9),Zg(`click`,function(){bd(e);let n=pC();return _d(n.sharedConfigs.toggleColorScheme())}),Vi$1(1,`mat-icon`),qC(2,`dark_mode`),xl$1()()}}function Cn(a,m){if(a&1){let e=uC();Vi$1(0,`a`,10)(1,`mat-icon`),qC(2,`account_box`),xl$1(),qC(3,` Profile `),xl$1(),Vi$1(4,`a`,11),Zg(`click`,function(){bd(e);let n=pC();return _d(n.identityService.logout())}),Vi$1(5,`mat-icon`),qC(6,`logout`),xl$1(),qC(7,` Logout `),xl$1()}a&2&&Bg(`routerLink`,nb(1,vn))}function Sn(a,m){a&1&&(Vi$1(0,`a`,10)(1,`mat-icon`),qC(2,`login`),xl$1(),qC(3,` Login `),xl$1(),Vi$1(4,`a`,10)(5,`mat-icon`),qC(6,`person_add`),xl$1(),qC(7,` Create a new account `),xl$1()),a&2&&(Bg(`routerLink`,nb(2,Mn)),mD(4),Bg(`routerLink`,nb(3,xn)))}var De=class a{sharedConfigs=y(i);document=y(pt);identityService=y(c);logoImgSrc=nt$2(()=>this.sharedConfigs.colorScheme()===`dark`?`/Logo/HoLibz_Logo_Dark_Pink_Only.webp`:`/Logo/HoLibz_Logo_Light_Blue_Only.webp`);displayShadow=mt(!1);onWindowScroll(){this.document.defaultView&&this.document.defaultView.scrollY>0?this.displayShadow.set(!0):this.displayShadow.set(!1)}static ɵfac=function(e){return new(e||a)};static ɵcmp=iw({type:a,selectors:[[`app-nav-bar`]],hostBindings:function(e,t){e&1&&Zg(`scroll`,function(){return t.onWindowScroll()},RI)},decls:11,vars:8,consts:[[`account`,``],[`matButton`,``,`matTooltip`,`Home`,2,`padding`,`12px 0 0 0`,`overflow`,`hidden`,3,`routerLink`],[`width`,`52`,`height`,`40`,`alt`,`HoLibz Logo`,3,`ngSrc`],[1,`full-spacer`],[`matIconButton`,``,`matTooltip`,`Light Mode`,1,`lightDarkBtn`],[`matIconButton`,``,`matTooltip`,`Dark Mode`,1,`lightDarkBtn`],[3,`menu`],[1,`navbar-matMenu`],[`matIconButton`,``,`matTooltip`,`Light Mode`,1,`lightDarkBtn`,3,`click`],[`matIconButton`,``,`matTooltip`,`Dark Mode`,1,`lightDarkBtn`,3,`click`],[`mat-menu-item`,``,3,`routerLink`],[`mat-menu-item`,``,3,`click`]],template:function(e,t){if(e&1&&(Vi$1(0,`mat-toolbar`)(1,`a`,1),Ug(2,`img`,2),xl$1(),Ug(3,`span`,3),Jw(4,kn,3,0,`button`,4)(5,wn,3,0,`button`,5),Ug(6,`app-account-dropdown`,6),Vi$1(7,`mat-menu`,7,0),Jw(9,Cn,8,2)(10,Sn,8,4),xl$1()()),e&2){let n=DC(8);am(`shadow`,t.displayShadow()),mD(),Bg(`routerLink`,nb(7,yn)),mD(),Bg(`ngSrc`,t.logoImgSrc()),mD(2),eC(t.sharedConfigs.colorScheme()===`light`?4:5),mD(2),Bg(`menu`,n),mD(3),eC(t.identityService&&t.identityService.isAuthenticated()?9:10)}},dependencies:[Xm,Gt,nd,X,J,Te,Le$1,_i,Sn$2,Hh],styles:[`.full-spacer[_ngcontent-%COMP%]{flex:1 1 auto}mat-toolbar[_ngcontent-%COMP%]{position:fixed;width:100%;height:56px;z-index:10;top:0}mat-toolbar.shadow[_ngcontent-%COMP%]{box-shadow:0 0 5px 0 var(--%NS%mat-sys-outline-variant)}#mainMenu[_ngcontent-%COMP%]{display:block}#littleMenu[_ngcontent-%COMP%]{display:none}.lightDarkBtn[_ngcontent-%COMP%]{margin:0 20px 0 0}@media screen and (max-width:600px){.lightDarkBtn[_ngcontent-%COMP%]{margin:0}}`]})};var Ie=class a{static ɵfac=function(e){return new(e||a)};static ɵcmp=iw({type:a,selectors:[[`app-root`]],decls:2,vars:0,template:function(e,t){e&1&&Ug(0,`app-nav-bar`)(1,`router-outlet`)},dependencies:[nr,De],encapsulation:2})};vs(Ie,qt).catch(a=>console.error(a));export{br as A,Rt as C,Xm as D,V$1 as E,nd as F,nh as I,ue$1 as L,fe$1 as M,ft as N,Yl as O,mr as P,i as R,Il as S,Tl as T,$i as _,Le$1 as a,Hl as b,Z$1 as c,ke as d,tt as f,$h as g,$f as h,It as i,bt as j,_i as k,fe as l,wi as m,c as n,Re as o,we$1 as p,$ as r,Y as s,p as t,it as u,Cl as v,Sl as w,Hm as x,Hh as y};