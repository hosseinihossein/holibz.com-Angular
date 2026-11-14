import{$ as Nl$1,$n as qy,$t as bt$1,A as ID,Ar as yC,B as Je$1,Bt as Yo,C as FI,Cn as jC,Cr as wI,D as Gy,Dn as kg,Dr as x,Dt as Ue$1,En as kI,Er as wt,Et as Ud$1,F as Iy,Fn as mv,Fr as zv,Ft as Wy,G as Kn,Gn as oI,Gt as Zy,H as K,I as J$2,In as nC,Ir as zy,It as Xc$1,J as Ll$1,Jn as os$1,Jt as ae$2,K as Kv,Kn as ob,Kt as _T,L as JI,Ln as nI,M as Ic$1,Mn as lg,Mr as yt$1,Mt as Vr$1,N as Ij,Nn as lw,Nr as z$1,Nt as Wl$1,O as Hi,On as kl$1,Or as xd$1,Ot as Ul$1,P as It$1,Pn as mt$1,Pr as zg,Pt as Wr$1,Q as Nj,Qn as ql$1,R as Jc$1,Rn as nd$1,Rt as Xy,Sn as iv,Sr as wC,St as Sr$1,T as Fr$1,Tn as ju$1,Tr as wm$1,Tt as Tn$2,U as Kd$1,Un as ny,Ut as Zt$2,V as Jv,Vt as Yv,Wt as Zv,X as Mi,Xn as pm$1,Xt as av,Y as Mg,Yn as ov,Z as Mj,Zn as qg,Zt as aw,_ as Dr$1,_r as vC,_t as S,a as $y,an as ev,at as Pe$1,bn as is$1,br as vt$1,bt as Sj,c as Ay,cn as fe$2,cr as sn$1,ct as QC,dn as gC,dr as tb,dt as Qy,en as eC,et as Nr$1,f as By,fn as gn$2,fr as tn$2,ft as RE,gr as v,gt as Ry,h as Dh,hn as hn$2,hr as ub,ht as Rm$1,i as $w,in as eo,it as PC,jn as le$1,jr as yp,jt as Vl$1,k as IC,kn as ku$1,kt as Un$1,l as BE,ln as fm$1,lr as sv,lt as Qe$1,m as DC,mn as hE,mr as tv,mt as Rl$1,n as $e,nn as ee,nr as rm$1,nt as Og,o as Aj,on as fC,or as se$1,p as Cj,pr as tr,pt as Re$2,q as Lg,qn as om$1,qt as _j,r as $r$1,rn as em$1,rr as rr$1,rt as Oy,s as At$1,sn as fa,st as Q$2,tn as eI,tr as rI,tt as Ns$1,u as Be$1,un as fw,ur as tI,ut as Qg,v as Dt$1,vt as Sd$1,w as Fe$1,wn as ja$1,wr as wj,x as Et$1,xn as it$1,xr as w,xt as Sl$1,y as Ee$1,yn as im$1,yr as vj,yt as Si$1,z as Jd$1,zn as nm$1,zt as Yg}from"./chunk-kniop8OV.js";var i=class e{_document=v(mt$1);_colorScheme=Et$1(`light`);colorScheme=it$1(()=>this._colorScheme());constructor(){Dh(()=>{let o=localStorage.getItem(`colorScheme`);o&&(o===`dark`?(this._colorScheme.set(`dark`),this._document.body.classList.add(`dark-mode`)):(this._colorScheme.set(`light`),this._document.body.classList.remove(`dark-mode`)))})}toggleColorScheme(){this._colorScheme()===`dark`?(this._colorScheme.set(`light`),this._document.body.classList.remove(`dark-mode`)):(this._colorScheme.set(`dark`),this._document.body.classList.add(`dark-mode`)),localStorage.setItem(`colorScheme`,this.colorScheme())}static ɵfac=function(l){return new(l||e)};static ɵprov=$r$1({token:e,factory:e.ɵfac})};var so=null;function ke$1(){return so}function _a(t){so??=t}var cn=class{};var Ut$1=(()=>{class t{historyGo(e){throw new Error(``)}static ɵfac=function(n){return new(n||t)};static ɵprov=ae$2({token:t,factory:()=>v(co),providedIn:`platform`})}return t})();var co=(()=>{class t extends Ut$1{_location;_history;_doc=v(mt$1);constructor(){super(),this._location=window.location,this._history=window.history}getBaseHrefFromDOM(){return ke$1().getBaseHref(this._doc)}onPopState(e){let n=ke$1().getGlobalEventTarget(this._doc,`window`);return n.addEventListener(`popstate`,e,!1),()=>n.removeEventListener(`popstate`,e)}onHashChange(e){let n=ke$1().getGlobalEventTarget(this._doc,`window`);return n.addEventListener(`hashchange`,e,!1),()=>n.removeEventListener(`hashchange`,e)}get href(){return this._location.href}get protocol(){return this._location.protocol}get hostname(){return this._location.hostname}get port(){return this._location.port}get pathname(){return this._location.pathname}get search(){return this._location.search}get hash(){return this._location.hash}set pathname(e){this._location.pathname=e}pushState(e,n,a){this._history.pushState(e,n,a)}replaceState(e,n,a){this._history.replaceState(e,n,a)}forward(){this._history.forward()}back(){this._history.back()}historyGo(e=0){this._history.go(e)}getState(){return this._history.state}static ɵfac=function(n){return new(n||t)};static ɵprov=ae$2({token:t,factory:()=>new t,providedIn:`platform`})}return t})();function mo(t,r){return t?r?t.endsWith(`/`)?r.startsWith(`/`)?t+r.slice(1):t+r:r.startsWith(`/`)?t+r:`${t}/${r}`:t:r}function lo(t){let r=t.search(/#|\?|$/);return t[r-1]===`/`?t.slice(0,r-1)+t.slice(r):t}function Ze(t){return t&&t[0]!==`?`?`?${t}`:t}var Bt=(()=>{class t{historyGo(e){throw new Error(``)}static ɵfac=function(n){return new(n||t)};static ɵprov=ae$2({token:t,factory:()=>v(zc),providedIn:`root`})}return t})();var jc=new S(``);var zc=(()=>{class t extends Bt{_platformLocation;_baseHref;_removeListenerFns=[];constructor(e,n){super(),this._platformLocation=e,this._baseHref=n??this._platformLocation.getBaseHrefFromDOM()??v(mt$1).location?.origin??``}ngOnDestroy(){for(;this._removeListenerFns.length;)this._removeListenerFns.pop()()}onPopState(e){this._removeListenerFns.push(this._platformLocation.onPopState(e),this._platformLocation.onHashChange(e))}getBaseHref(){return this._baseHref}prepareExternalUrl(e){return mo(this._baseHref,e)}path(e=!1){let n=this._platformLocation.pathname+Ze(this._platformLocation.search),a=this._platformLocation.hash;return a&&e?`${n}${a}`:n}pushState(e,n,a,i){let o=this.prepareExternalUrl(a+Ze(i));this._platformLocation.pushState(e,n,o)}replaceState(e,n,a,i){let o=this.prepareExternalUrl(a+Ze(i));this._platformLocation.replaceState(e,n,o)}forward(){this._platformLocation.forward()}back(){this._platformLocation.back()}getState(){return this._platformLocation.getState()}historyGo(e=0){this._platformLocation.historyGo?.(e)}static ɵfac=function(n){return new(n||t)(Pe$1(Ut$1),Pe$1(jc,8))};static ɵprov=ae$2({token:t,factory:t.ɵfac,providedIn:`root`})}return t})();var jt=(()=>{class t{_subject=new ee;_basePath;_locationStrategy;_urlChangeListeners=[];_urlChangeSubscription=null;constructor(e){this._locationStrategy=e;let n=this._locationStrategy.getBaseHref();this._basePath=Vc(lo(uo(n))),this._locationStrategy.onPopState(a=>{let i={url:this.path(!0),pop:!0,state:a.state,type:a.type};a.hasUAVisualTransition&&(i.hasUAVisualTransition=!0),this._subject.next(i)})}ngOnDestroy(){this._urlChangeSubscription?.unsubscribe(),this._urlChangeListeners=[]}path(e=!1){return this.normalize(this._locationStrategy.path(e))}getState(){return this._locationStrategy.getState()}isCurrentPathEqualTo(e,n=``){return this.path()==this.normalize(e+Ze(n))}normalize(e){return t.stripTrailingSlash(Hc(this._basePath,uo(e)))}prepareExternalUrl(e){return e&&e[0]!==`/`&&(e=`/`+e),this._locationStrategy.prepareExternalUrl(e)}go(e,n=``,a=null){this._locationStrategy.pushState(a,``,e,n),this._notifyUrlChangeListeners(this.prepareExternalUrl(e+Ze(n)),a)}replaceState(e,n=``,a=null){this._locationStrategy.replaceState(a,``,e,n),this._notifyUrlChangeListeners(this.prepareExternalUrl(e+Ze(n)),a)}forward(){this._locationStrategy.forward()}back(){this._locationStrategy.back()}historyGo(e=0){this._locationStrategy.historyGo?.(e)}onUrlChange(e){return this._urlChangeListeners.push(e),this._urlChangeSubscription??=this.subscribe(n=>{this._notifyUrlChangeListeners(n.url,n.state)}),()=>{let n=this._urlChangeListeners.indexOf(e);this._urlChangeListeners.splice(n,1),this._urlChangeListeners.length===0&&(this._urlChangeSubscription?.unsubscribe(),this._urlChangeSubscription=null)}}_notifyUrlChangeListeners(e=``,n){this._urlChangeListeners.forEach(a=>a(e,n))}subscribe(e,n,a){return this._subject.subscribe({next:e,error:n??void 0,complete:a??void 0})}static normalizeQueryParams=Ze;static joinWithSlash=mo;static stripTrailingSlash=lo;static ɵfac=function(n){return new(n||t)(Pe$1(Bt))};static ɵprov=ae$2({token:t,factory:()=>$c(),providedIn:`root`})}return t})();function $c(){return new jt(Pe$1(Bt))}function Hc(t,r){if(!t||!r.startsWith(t))return r;let e=r.substring(t.length);return e===``||[`/`,`;`,`?`,`#`].includes(e[0])?e:r}function uo(t){return t.replace(/\/index\.html$/,``)}function Vc(t){if((/* @__PURE__ */ new RegExp(`^(https?:)?//`)).test(t)){let[,e]=t.split(/\/\/[^\/]+/);return e}return t}var Gc=(()=>{class t{_viewContainerRef;_viewRef=null;ngTemplateOutletContext=null;ngTemplateOutlet=null;ngTemplateOutletInjector=null;injector=v(se$1);constructor(e){this._viewContainerRef=e}ngOnChanges(e){if(this._shouldRecreateView(e)){let n=this._viewContainerRef;if(this._viewRef&&n.remove(n.indexOf(this._viewRef)),!this.ngTemplateOutlet){this._viewRef=null;return}let a=this._createContextForwardProxy();this._viewRef=n.createEmbeddedView(this.ngTemplateOutlet,a,{injector:this._getInjector()})}}_getInjector(){return this.ngTemplateOutletInjector===`outlet`?this.injector:this.ngTemplateOutletInjector??void 0}_shouldRecreateView(e){return!!e.ngTemplateOutlet||!!e.ngTemplateOutletInjector}_createContextForwardProxy(){return new Proxy({},{set:(e,n,a)=>this.ngTemplateOutletContext?Reflect.set(this.ngTemplateOutletContext,n,a):!1,get:(e,n,a)=>{if(this.ngTemplateOutletContext)return Reflect.get(this.ngTemplateOutletContext,n,a)}})}static ɵfac=function(n){return new(n||t)(os$1(is$1))};static ɵdir=fw({type:t,selectors:[[``,`ngTemplateOutlet`,``]],inputs:{ngTemplateOutletContext:`ngTemplateOutletContext`,ngTemplateOutlet:`ngTemplateOutlet`,ngTemplateOutletInjector:`ngTemplateOutletInjector`},features:[hE]})}return t})();function ln$1(t,r){r=encodeURIComponent(r);for(let e of t.split(`;`)){let n=e.indexOf(`=`),[a,i]=n==-1?[e,``]:[e.slice(0,n),e.slice(n+1)];if(a.trim()!==r)continue;let o=i;try{o=decodeURIComponent(i)}catch{}return o.length>1&&o[0]===`"`&&o[o.length-1]===`"`&&(o=o.slice(1,-1)),o}return null}var Sa=`browser`;function nr(t){return t===Sa}function fo(t){return t.replace(/\\/g,`\\\\`).replace(/[\n\r\f\0]/g,``).replace(/"/g,`\\"`)}var ho=t=>t.src;var Zc=new S(``,{factory:()=>ho});var po=/^((\s*\d+w\s*(,|$)){1,})$/;var Xc=[1,2];var Jc=640;var Qc=1920;var el=1080;var Gp=(()=>{class t{imageLoader=v(Zc);config=tl(v(Jv));renderer=v(Ic$1);imgElement=v(Wr$1).nativeElement;injector=v(se$1);destroyRef=v(fe$2);lcpObserver;_renderedSrc=null;ngSrc;ngSrcset;sizes;width;height;decoding;loading;priority=!1;loaderParams;disableOptimizedSrcset=!1;fill=!1;placeholder;placeholderConfig;src;srcset;constructor(){this.destroyRef.onDestroy(()=>{this.renderer.removeAttribute(this.imgElement,`loading`)})}ngOnInit(){Be$1(`NgOptimizedImage`),this.placeholder&&this.removePlaceholderOnLoad(this.imgElement),this.setHostAttributes()}setHostAttributes(){this.fill?this.sizes||=`100vw`:(this.setHostAttribute(`width`,this.width.toString()),this.setHostAttribute(`height`,this.height.toString())),this.setHostAttribute(`loading`,this.getLoadingBehavior()),this.setHostAttribute(`fetchpriority`,this.getFetchPriority()),this.setHostAttribute(`decoding`,this.getDecoding()),this.setHostAttribute(`ng-img`,`true`);this.updateSrcAndSrcset();this.sizes?this.getLoadingBehavior()===`lazy`?this.setHostAttribute(`sizes`,`auto, `+this.sizes):this.setHostAttribute(`sizes`,this.sizes):this.ngSrcset&&po.test(this.ngSrcset)&&this.getLoadingBehavior()===`lazy`&&this.setHostAttribute(`sizes`,`auto, 100vw`)}ngOnChanges(e){if(e.ngSrc&&!e.ngSrc.isFirstChange()){this._renderedSrc;this.updateSrcAndSrcset(!0)}}getAspectRatio(){return this.width&&this.height&&this.height!==0?this.width/this.height:null}callImageLoader(e){let n=e;this.loaderParams&&(n.loaderParams=this.loaderParams);let a=this.getAspectRatio();return a!==null&&n.width&&(n.height=Math.round(n.width/a)),this.imageLoader(n)}getLoadingBehavior(){return!this.priority&&this.loading!==void 0?this.loading:this.priority?`eager`:`lazy`}getFetchPriority(){return this.priority?`high`:`auto`}getDecoding(){return this.priority?`sync`:this.decoding??`auto`}getRewrittenSrc(){if(!this._renderedSrc){let e={src:this.ngSrc};this._renderedSrc=this.callImageLoader(e)}return this._renderedSrc}getRewrittenSrcset(){let e=po.test(this.ngSrcset);return this.ngSrcset.split(`,`).filter(a=>a!==``).map(a=>{a=a.trim();let i=e?parseFloat(a):parseFloat(a)*this.width;return`${this.callImageLoader({src:this.ngSrc,width:i})} ${a}`}).join(`, `)}getAutomaticSrcset(){return this.sizes?this.getResponsiveSrcset():this.getFixedSrcset()}getResponsiveSrcset(){let{breakpoints:e}=this.config,n=e;return this.sizes?.trim()===`100vw`&&(n=e.filter(i=>i>=Jc)),n.map(i=>`${this.callImageLoader({src:this.ngSrc,width:i})} ${i}w`).join(`, `)}updateSrcAndSrcset(e=!1){e&&(this._renderedSrc=null);let n=this.getRewrittenSrc();this.setHostAttribute(`src`,n);let a;return this.ngSrcset?a=this.getRewrittenSrcset():this.shouldGenerateAutomaticSrcset()&&(a=this.getAutomaticSrcset()),a?this.setHostAttribute(`srcset`,a):this.disableOptimizedSrcset&&this.srcset&&this.setHostAttribute(`srcset`,this.srcset),a}getFixedSrcset(){return Xc.map(n=>`${this.callImageLoader({src:this.ngSrc,width:this.width*n})} ${n}x`).join(`, `)}shouldGenerateAutomaticSrcset(){let e=!1;return this.sizes||(e=this.width>Qc||this.height>el),!this.disableOptimizedSrcset&&!this.srcset&&this.imageLoader!==ho&&!e}generatePlaceholder(e){let{placeholderResolution:n}=this.config;return e===!0?`url("${fo(this.callImageLoader({src:this.ngSrc,width:n,isPlaceholder:!0}))}")`:typeof e==`string`?`url("${fo(e)}")`:null}shouldBlurPlaceholder(e){return!e||!Object.hasOwn(e,`blur`)?!0:!!e.blur}removePlaceholderOnLoad(e){let n=()=>{let o=this.injector.get(_j);a(),i(),this.placeholder=!1,o.markForCheck()},a=this.renderer.listen(e,`load`,n),i=this.renderer.listen(e,`error`,n);this.destroyRef.onDestroy(()=>{a(),i()}),nl(e,n)}setHostAttribute(e,n){this.renderer.setAttribute(this.imgElement,e,n)}static ɵfac=function(n){return new(n||t)};static ɵdir=fw({type:t,selectors:[[`img`,`ngSrc`,``]],hostVars:18,hostBindings:function(n,a){n&2&&fm$1(`position`,a.fill?`absolute`:null)(`width`,a.fill?`100%`:null)(`height`,a.fill?`100%`:null)(`inset`,a.fill?`0`:null)(`background-size`,a.placeholder?`cover`:null)(`background-position`,a.placeholder?`50% 50%`:null)(`background-repeat`,a.placeholder?`no-repeat`:null)(`background-image`,a.placeholder?a.generatePlaceholder(a.placeholder):null)(`filter`,a.placeholder&&a.shouldBlurPlaceholder(a.placeholderConfig)?`blur(15px)`:null)},inputs:{ngSrc:[2,`ngSrc`,`ngSrc`,rl],ngSrcset:`ngSrcset`,sizes:`sizes`,width:[2,`width`,`width`,Sj],height:[2,`height`,`height`,Sj],decoding:`decoding`,loading:`loading`,priority:[2,`priority`,`priority`,Nj],loaderParams:`loaderParams`,disableOptimizedSrcset:[2,`disableOptimizedSrcset`,`disableOptimizedSrcset`,Nj],fill:[2,`fill`,`fill`,Nj],placeholder:[2,`placeholder`,`placeholder`,al],placeholderConfig:`placeholderConfig`,src:`src`,srcset:`srcset`},features:[hE]})}return t})();function tl(t){let r={};return t.breakpoints&&(r.breakpoints=t.breakpoints.sort((e,n)=>e-n)),Object.assign({},Jd$1,t,r)}function nl(t,r){t.complete&&t.naturalWidth&&r()}function rl(t){return typeof t==`string`?t:Dt$1(t)}function al(t){return typeof t==`string`&&t!==`true`&&t!==`false`&&t!==``?t:Nj(t)}var un=class{_doc;constructor(r){this._doc=r}manager};var rr=(()=>{class t extends un{constructor(e){super(e)}supports(e){return!0}addEventListener(e,n,a,i){return e.addEventListener(n,a,i),()=>this.removeEventListener(e,n,a,i)}removeEventListener(e,n,a,i){return e.removeEventListener(n,a,i)}static ɵfac=function(n){return new(n||t)(Pe$1(mt$1))};static ɵprov=ae$2({token:t,factory:t.ɵfac})}return t})();var or=new S(``);var Ca=(()=>{class t{_zone;_plugins;_eventNameToPlugin=/* @__PURE__ */ new Map;constructor(e,n){this._zone=n,e.forEach(o=>{o.manager=this});let a=e.filter(o=>!(o instanceof rr));this._plugins=a.slice().reverse();let i=e.find(o=>o instanceof rr);i&&this._plugins.push(i)}addEventListener(e,n,a,i){return this._findPluginFor(n).addEventListener(e,n,a,i)}getZone(){return this._zone}_findPluginFor(e){let n=this._eventNameToPlugin.get(e);if(n)return n;if(n=this._plugins.find(i=>i.supports(e)),!n)throw new w(-5101,!1);return this._eventNameToPlugin.set(e,n),n}static ɵfac=function(n){return new(n||t)(Pe$1(or),Pe$1(Fe$1))};static ɵprov=ae$2({token:t,factory:t.ɵfac})}return t})();var Da=`ng-app-id`;function go(t){for(let r of t)r.remove()}function bo(t,r){let e=r.createElement(`style`);return e.textContent=t,e}function ol(t,r,e,n){let a=t.head?.querySelectorAll(`style[${Da}="${r}"],link[${Da}="${r}"]`);if(!a||a.length===0)return!1;for(let i of a)i.removeAttribute(Da),i instanceof HTMLLinkElement?n.set(i.href.slice(i.href.lastIndexOf(`/`)+1),{usage:0,elements:[i]}):i.textContent&&e.set(i.textContent,{usage:0,elements:[i]});return!0}function Ea(t,r){let e=r.createElement(`link`);return e.setAttribute(`rel`,`stylesheet`),e.setAttribute(`href`,t),e}var Ia=(()=>{class t{doc;appId;nonce;inline=/* @__PURE__ */ new Map;external=/* @__PURE__ */ new Map;hosts=/* @__PURE__ */ new Set;constructor(e,n,a,i={}){this.doc=e,this.appId=n,this.nonce=a,ol(e,n,this.inline,this.external)&&this.hosts.add(e.head)}addStyles(e,n){for(let a of e)this.addUsage(a,this.inline,bo);n?.forEach(a=>this.addUsage(a,this.external,Ea))}removeStyles(e,n){for(let a of e)this.removeUsage(a,this.inline);n?.forEach(a=>this.removeUsage(a,this.external))}addUsage(e,n,a){let i=n.get(e);i?i.usage++:n.set(e,{usage:1,elements:[...this.hosts].map(o=>this.addElement(o,a(e,this.doc)))})}removeUsage(e,n){let a=n.get(e);a&&(a.usage--,a.usage<=0&&(go(a.elements),n.delete(e)))}ngOnDestroy(){for(let[,{elements:e}]of[...this.inline,...this.external])go(e);this.hosts.clear()}addHost(e){if(!this.hosts.has(e)){this.hosts.add(e);for(let[n,{elements:a}]of this.inline)a.push(this.addElement(e,bo(n,this.doc)));for(let[n,{elements:a}]of this.external)a.push(this.addElement(e,Ea(n,this.doc)))}}removeHost(e){this.hosts.delete(e);for(let n of[...this.inline.values(),...this.external.values()]){let a=[];for(let i of n.elements)i.parentNode===e?i.remove():a.push(i);n.elements=a}}addElement(e,n){return this.nonce&&n.setAttribute(`nonce`,this.nonce),e.appendChild(n)}static ɵfac=function(n){return new(n||t)(Pe$1(mt$1),Pe$1(It$1),Pe$1(Kv,8),Pe$1(Yv))};static ɵprov=ae$2({token:t,factory:t.ɵfac})}return t})();var wa={svg:`http://www.w3.org/2000/svg`,xhtml:`http://www.w3.org/1999/xhtml`,xlink:`http://www.w3.org/1999/xlink`,xml:`http://www.w3.org/XML/1998/namespace`,xmlns:`http://www.w3.org/2000/xmlns/`,math:`http://www.w3.org/1998/Math/MathML`};var Aa=/%COMP%/g;var yo=`%COMP%`;var sl=`_nghost-${yo}`;var cl=`_ngcontent-${yo}`;var ll=!0;var ul=new S(``,{factory:()=>ll});var dl=new S(``);function ml(t){return cl.replace(Aa,t)}function fl(t){return sl.replace(Aa,t)}function _o(t,r){return r.map(e=>e.replace(Aa,t))}var Ra=(()=>{class t{eventManager;sharedStylesHost;appId;removeStylesOnCompDestroy;doc;ngZone;nonce;tracingService;rendererByCompId=/* @__PURE__ */ new Map;defaultRenderer;cssVarNamespace;constructor(e,n,a,i,o,c,s=null,u=null,d=null){this.eventManager=e,this.sharedStylesHost=n,this.appId=a,this.removeStylesOnCompDestroy=i,this.doc=o,this.ngZone=c,this.nonce=s,this.tracingService=u,this.cssVarNamespace=d??``,this.defaultRenderer=new dn(e,o,c,this.tracingService,this.cssVarNamespace)}createRenderer(e,n){if(!e||!n)return this.defaultRenderer;let a=this.getOrCreateRenderer(e,n);return a instanceof ir?a.applyToHost(e):a instanceof mn&&a.applyStyles(),a}getOrCreateRenderer(e,n){let a=this.rendererByCompId,i=a.get(n.id);if(!i){let o=this.doc,c=this.ngZone,s=this.eventManager,u=this.sharedStylesHost,d=this.removeStylesOnCompDestroy,f=this.tracingService;switch(n.encapsulation){case tn$2.Emulated:i=new ir(s,u,n,this.appId,d,o,c,f,this.cssVarNamespace);break;case tn$2.ShadowDom:return new ar(s,e,n,o,c,this.nonce,f,this.cssVarNamespace,u);case tn$2.ExperimentalIsolatedShadowDom:return new ar(s,e,n,o,c,this.nonce,f,this.cssVarNamespace);default:i=new mn(s,u,n,d,o,c,f,this.cssVarNamespace)}a.set(n.id,i)}return i}ngOnDestroy(){this.rendererByCompId.clear()}componentReplaced(e){this.rendererByCompId.delete(e)}static ɵfac=function(n){return new(n||t)(Pe$1(Ca),Pe$1(lg),Pe$1(It$1),Pe$1(ul),Pe$1(mt$1),Pe$1(Fe$1),Pe$1(Kv),Pe$1(sn$1,8),Pe$1(dl,8))};static ɵprov=ae$2({token:t,factory:t.ɵfac})}return t})();var dn=class{eventManager;doc;ngZone;tracingService;cssVarNamespace;data=Object.create(null);throwOnSyntheticProps=!0;constructor(r,e,n,a,i=``){this.eventManager=r,this.doc=e,this.ngZone=n,this.tracingService=a,this.cssVarNamespace=i}destroy(){}destroyNode=null;createElement(r,e){return e?this.doc.createElementNS(wa[e]||e,r):this.doc.createElement(r)}createComment(r){return this.doc.createComment(r)}createText(r){return this.doc.createTextNode(r)}appendChild(r,e){(vo(r)?r.content:r).appendChild(e)}insertBefore(r,e,n){if(r){let a=vo(r)?r.content:r;if(n!=null&&n.parentNode!==a)throw new w(-5106,!1);a.insertBefore(e,n)}}removeChild(r,e){e.remove()}selectRootElement(r,e){let n=typeof r==`string`?this.doc.querySelector(r):r;if(!n)throw new w(-5104,!1);return e||(n.textContent=``),n}parentNode(r){return r.parentNode}nextSibling(r){return r.nextSibling}setAttribute(r,e,n,a){if(a){e=a+`:`+e;let i=wa[a];i?r.setAttributeNS(i,e,n):r.setAttribute(e,n)}else r.setAttribute(e,n)}removeAttribute(r,e,n){if(n){let a=wa[n];a?r.removeAttributeNS(a,e):r.removeAttribute(`${n}:${e}`)}else r.removeAttribute(e)}addClass(r,e){r.classList.add(e)}removeClass(r,e){r.classList.remove(e)}setStyle(r,e,n,a){let i=e.startsWith(`--`);i&&(e=e.replace(`%NS%`,this.cssVarNamespace)),i||a&(Si$1.DashCase|Si$1.Important)?r.style.setProperty(e,n,a&Si$1.Important?`important`:``):r.style[e]=n}removeStyle(r,e,n){let a=e.startsWith(`--`);a&&(e=e.replace(`%NS%`,this.cssVarNamespace)),a||n&Si$1.DashCase?r.style.removeProperty(e):r.style[e]=``}setProperty(r,e,n){r!=null&&(r[e]=n)}setValue(r,e){r.nodeValue=e}listen(r,e,n,a){if(typeof r==`string`&&(r=ke$1().getGlobalEventTarget(this.doc,r),!r))throw new w(-5102,!1);let i=this.decoratePreventDefault(n);return this.tracingService?.wrapEventListener&&(i=this.tracingService.wrapEventListener(r,e,i)),this.eventManager.addEventListener(r,e,i,a)}decoratePreventDefault(r){return e=>{if(e===`__ngUnwrap__`)return r;r(e)===!1&&e.preventDefault()}}};function vo(t){return t.tagName===`TEMPLATE`&&t.content!==void 0}var ar=class extends dn{hostEl;sharedStylesHost;shadowRoot;constructor(r,e,n,a,i,o,c,s,u){super(r,a,i,c,s),this.hostEl=e,this.sharedStylesHost=u,this.shadowRoot=e.attachShadow({mode:`open`}),this.sharedStylesHost&&this.sharedStylesHost.addHost(this.shadowRoot);let d=n.styles;d=_o(n.id,d).map(p=>p.replace(/%NS%/g,s));for(let p of d){let _=document.createElement(`style`);o&&_.setAttribute(`nonce`,o),_.textContent=p,this.shadowRoot.appendChild(_)}let f=n.getExternalStyles?.();if(f)for(let p of f){let _=Ea(p,a);o&&_.setAttribute(`nonce`,o),this.shadowRoot.appendChild(_)}}nodeOrShadowRoot(r){return r===this.hostEl?this.shadowRoot:r}appendChild(r,e){return super.appendChild(this.nodeOrShadowRoot(r),e)}insertBefore(r,e,n){return super.insertBefore(this.nodeOrShadowRoot(r),e,n)}removeChild(r,e){return super.removeChild(null,e)}parentNode(r){return this.nodeOrShadowRoot(super.parentNode(this.nodeOrShadowRoot(r)))}destroy(){this.sharedStylesHost&&this.sharedStylesHost.removeHost(this.shadowRoot)}};var mn=class extends dn{sharedStylesHost;removeStylesOnCompDestroy;styles;styleUrls;constructor(r,e,n,a,i,o,c,s,u){super(r,i,o,c,s),this.sharedStylesHost=e,this.removeStylesOnCompDestroy=a;let d=n.styles,f=u?_o(u,d):d;this.styles=f.map(p=>p.replace(/%NS%/g,s)),this.styleUrls=n.getExternalStyles?.(u)}applyStyles(){this.sharedStylesHost.addStyles(this.styles,this.styleUrls)}destroy(){this.removeStylesOnCompDestroy&&JI.size===0&&this.sharedStylesHost.removeStyles(this.styles,this.styleUrls)}};var ir=class extends mn{contentAttr;hostAttr;constructor(r,e,n,a,i,o,c,s,u){let d=a+`-`+n.id;super(r,e,n,i,o,c,s,u,d),this.contentAttr=ml(d),this.hostAttr=fl(d)}applyToHost(r){this.applyStyles(),this.setAttribute(r,this.hostAttr,``)}createElement(r,e){let n=super.createElement(r,e);return super.setAttribute(n,this.contentAttr,``),n}};var sr=class t extends cn{supportsDOMEvents=!0;static makeCurrent(){_a(new t)}onAndCancel(r,e,n,a){return r.addEventListener(e,n,a),()=>{r.removeEventListener(e,n,a)}}dispatchEvent(r,e){r.dispatchEvent(e)}remove(r){r.remove()}createElement(r,e){return e=e||this.getDefaultDocument(),e.createElement(r)}createHtmlDocument(){return document.implementation.createHTMLDocument(`fakeTitle`)}getDefaultDocument(){return document}isElementNode(r){return r.nodeType===Node.ELEMENT_NODE}isShadowRoot(r){return r instanceof DocumentFragment}getGlobalEventTarget(r,e){return e===`window`?window:e===`document`?r:e===`body`?r.body:null}getBaseHref(r){let e=hl();return e==null?null:gl(e)}resetBaseElement(){fn$1=null}getUserAgent(){return window.navigator.userAgent}getCookie(r){return ln$1(document.cookie,r)}};var fn$1=null;function hl(){return fn$1=fn$1||document.head.querySelector(`base`),fn$1?fn$1.getAttribute(`href`):null}function gl(t){return new URL(t,document.baseURI).pathname}var So=[`alt`,`control`,`meta`,`shift`];var bl={"\b":`Backspace`,"	":`Tab`,"":`Delete`,"\x1B":`Escape`,Del:`Delete`,Esc:`Escape`,Left:`ArrowLeft`,Right:`ArrowRight`,Up:`ArrowUp`,Down:`ArrowDown`,Menu:`ContextMenu`,Scroll:`ScrollLock`,Win:`OS`};var vl={alt:t=>t.altKey,control:t=>t.ctrlKey,meta:t=>t.metaKey,shift:t=>t.shiftKey};var Do=(()=>{class t extends un{constructor(e){super(e)}supports(e){return t.parseEventName(e)!=null}addEventListener(e,n,a,i){let o=t.parseEventName(n),c=t.eventCallback(o.fullKey,a,this.manager.getZone());return this.manager.getZone().runOutsideAngular(()=>ke$1().onAndCancel(e,o.domEventName,c,i))}static parseEventName(e){let n=e.toLowerCase().split(`.`),a=n.shift();if(n.length===0||!(a===`keydown`||a===`keyup`))return null;let i=t._normalizeKey(n.pop()),o=``,c=n.indexOf(`code`);if(c>-1&&(n.splice(c,1),o=`code.`),So.forEach(u=>{let d=n.indexOf(u);d>-1&&(n.splice(d,1),o+=u+`.`)}),o+=i,n.length!=0||i.length===0)return null;let s={};return s.domEventName=a,s.fullKey=o,s}static matchEventFullKeyCode(e,n){let a=bl[e.key]||e.key,i=``;return n.indexOf(`code.`)>-1&&(a=e.code,i=`code.`),a==null||!a?!1:(a=a.toLowerCase(),a===` `?a=`space`:a===`.`&&(a=`dot`),So.forEach(o=>{if(o!==a){let c=vl[o];c(e)&&(i+=o+`.`)}}),i+=a,i===n)}static eventCallback(e,n,a){return i=>{t.matchEventFullKeyCode(i,e)&&a.runGuarded(()=>n(i))}}static _normalizeKey(e){return e===`esc`?`escape`:e}static ɵfac=function(n){return new(n||t)(Pe$1(mt$1))};static ɵprov=ae$2({token:t,factory:t.ɵfac})}return t})();async function yl(t,r,e){let n=z$1({rootComponent:t},_l(r,e));return Mj(n)}function _l(t,r){return{platformRef:r?.platformRef,appProviders:[...Cl,...t?.providers??[]],platformProviders:El}}function Sl(){sr.makeCurrent()}function Dl(){return new Je$1}function wl(){return BE(document),document}var El=[{provide:Yv,useValue:Sa},{provide:Kd$1,useValue:Sl,multi:!0},{provide:mt$1,useFactory:wl}];var Cl=[{provide:fa,useValue:`root`},{provide:Je$1,useFactory:Dl},{provide:or,useClass:rr,multi:!0},{provide:or,useClass:Do,multi:!0},Ra,{provide:lg,useClass:Ia},{provide:Ia,useExisting:lg},Ca,{provide:Vr$1,useExisting:Ra},[]];var me$1=class t{headers;normalizedNames=/* @__PURE__ */ new Map;lazyInit;lazyUpdate=null;constructor(r){r?typeof r==`string`?this.lazyInit=()=>{this.headers=/* @__PURE__ */ new Map,r.split(`
`).forEach(e=>{let n=e.indexOf(`:`);if(n>0){let a=e.slice(0,n),i=e.slice(n+1).trim();this.addHeaderEntry(a,i)}})}:typeof Headers<`u`&&r instanceof Headers?(this.headers=/* @__PURE__ */ new Map,r.forEach((e,n)=>{this.addHeaderEntry(n,e)})):this.lazyInit=()=>{this.headers=/* @__PURE__ */ new Map,Object.entries(r).forEach(([e,n])=>{this.setHeaderEntries(e,n)})}:this.headers=/* @__PURE__ */ new Map}has(r){return this.init(),this.headers.has(r.toLowerCase())}get(r){this.init();let e=this.headers.get(r.toLowerCase());return e&&e.length>0?e[0]:null}keys(){return this.init(),Array.from(this.normalizedNames.values())}getAll(r){return this.init(),this.headers.get(r.toLowerCase())||null}append(r,e){return this.clone({name:r,value:e,op:`a`})}set(r,e){return this.clone({name:r,value:e,op:`s`})}delete(r,e){return this.clone({name:r,value:e,op:`d`})}maybeSetNormalizedName(r,e){this.normalizedNames.has(e)||this.normalizedNames.set(e,r)}init(){this.lazyInit&&(this.lazyInit instanceof t?this.copyFrom(this.lazyInit):this.lazyInit(),this.lazyInit=null,this.lazyUpdate&&(this.lazyUpdate.forEach(r=>this.applyUpdate(r)),this.lazyUpdate=null))}copyFrom(r){r.init();for(let[e,n]of r.headers.entries())this.headers.set(e,n),this.normalizedNames.set(e,r.normalizedNames.get(e))}clone(r){let e=new t;return e.lazyInit=this.lazyInit&&this.lazyInit instanceof t?this.lazyInit:this,e.lazyUpdate=(this.lazyUpdate||[]).concat([r]),e}applyUpdate(r){let e=r.name.toLowerCase();switch(r.op){case`a`:case`s`:let n=r.value;if(typeof n==`string`&&(n=[n]),n.length===0)return;this.maybeSetNormalizedName(r.name,e);let a=r.op===`a`?(this.headers.get(e)||[]).slice():[];a.push(...n),this.headers.set(e,a);break;case`d`:let i=r.value;if(i===void 0)this.headers.delete(e),this.normalizedNames.delete(e);else{let o=Array.isArray(i)?i:[i],c=this.headers.get(e);if(!c)return;c=c.filter(s=>o.indexOf(s)===-1),c.length===0?(this.headers.delete(e),this.normalizedNames.delete(e)):this.headers.set(e,c)}}}addHeaderEntry(r,e){let n=r.toLowerCase();this.maybeSetNormalizedName(r,n),this.headers.has(n)?this.headers.get(n).push(e):this.headers.set(n,[e])}setHeaderEntries(r,e){let n=(Array.isArray(e)?e:[e]).map(i=>i.toString()),a=r.toLowerCase();this.headers.set(a,n),this.maybeSetNormalizedName(r,a)}forEach(r){this.init(),Array.from(this.normalizedNames.keys()).forEach(e=>r(this.normalizedNames.get(e),this.headers.get(e)))}};var lr=class{map=/* @__PURE__ */ new Map;set(r,e){return this.map.set(r,e),this}get(r){return this.map.has(r)||this.map.set(r,r.defaultValue()),this.map.get(r)}delete(r){return this.map.delete(r),this}has(r){return this.map.has(r)}keys(){return this.map.keys()}};var ur=class{encodeKey(r){return wo(r)}encodeValue(r){return wo(r)}decodeKey(r){return decodeURIComponent(r)}decodeValue(r){return decodeURIComponent(r)}};function Il(t,r){let e=/* @__PURE__ */ new Map;return t.length>0&&t.replace(/^\?/,``).split(`&`).forEach(a=>{let i=a.indexOf(`=`),[o,c]=i==-1?[r.decodeKey(a),``]:[r.decodeKey(a.slice(0,i)),r.decodeValue(a.slice(i+1))],s=e.get(o)||[];s.push(c),e.set(o,s)}),e}var Al=/[&+#]/g;function wo(t){return encodeURI(t).replace(Al,encodeURIComponent)}function cr(t){return`${t}`}var re$1=class t{map;encoder;updates=null;cloneFrom=null;constructor(r={}){if(this.encoder=r.encoder||new ur,r.fromString){if(r.fromObject)throw new w(2805,!1);this.map=Il(r.fromString,this.encoder)}else r.fromObject?(this.map=/* @__PURE__ */ new Map,Object.keys(r.fromObject).forEach(e=>{let n=r.fromObject[e],a=Array.isArray(n)?n.map(cr):[cr(n)];this.map.set(e,a)})):this.map=null}has(r){return this.init(),this.map.has(r)}get(r){this.init();let e=this.map.get(r);return e?e[0]:null}getAll(r){return this.init(),this.map.get(r)||null}keys(){return this.init(),Array.from(this.map.keys())}append(r,e){return this.clone({param:r,value:e,op:`a`})}appendAll(r){let e=[];return Object.keys(r).forEach(n=>{let a=r[n];Array.isArray(a)?a.forEach(i=>{e.push({param:n,value:i,op:`a`})}):e.push({param:n,value:a,op:`a`})}),this.clone(e)}set(r,e){return this.clone({param:r,value:e,op:`s`})}delete(r,e){return this.clone({param:r,value:e,op:`d`})}toString(){return this.init(),this.keys().map(r=>{let e=this.encoder.encodeKey(r);return this.map.get(r).map(n=>e+`=`+this.encoder.encodeValue(n)).join(`&`)}).filter(r=>r!==``).join(`&`)}clone(r){let e=new t({encoder:this.encoder});return e.cloneFrom=this.cloneFrom||this,e.updates=(this.updates||[]).concat(r),e}init(){if(this.map===null&&(this.map=/* @__PURE__ */ new Map),this.cloneFrom!==null){this.cloneFrom.init();for(let[r,e]of this.cloneFrom.map.entries())this.map.set(r,e);this.updates.forEach(r=>{switch(r.op){case`a`:case`s`:let e=r.op===`a`?(this.map.get(r.param)||[]).slice():[];e.push(cr(r.value)),this.map.set(r.param,e);break;case`d`:if(r.value!==void 0){let n=(this.map.get(r.param)||[]).slice(),a=n.indexOf(cr(r.value));a!==-1&&n.splice(a,1),n.length>0?this.map.set(r.param,n):this.map.delete(r.param)}else{this.map.delete(r.param);break}}}),this.cloneFrom=this.updates=null}}};function Rl(t){switch(t){case`DELETE`:case`GET`:case`HEAD`:case`OPTIONS`:case`JSONP`:return!1;default:return!0}}function Eo(t){return typeof ArrayBuffer<`u`&&t instanceof ArrayBuffer}function Co(t){return typeof Blob<`u`&&t instanceof Blob}function Io(t){return typeof FormData<`u`&&t instanceof FormData}function Nl(t){return typeof URLSearchParams<`u`&&t instanceof URLSearchParams}var Na=`Content-Type`;var Ao=`Accept`;var xo=`text/plain`;var Mo=`application/json`;var xl=`${Mo}, ${xo}, */*`;var dt=class t{url;body=null;headers;context;reportProgress=!1;reportUploadProgress=!1;reportDownloadProgress=!1;withCredentials=!1;credentials;keepalive=!1;cache;priority;mode;redirect;referrer;integrity;referrerPolicy;responseType=`json`;method;params;urlWithParams;transferCache;timeout;constructor(r,e,n,a){this.url=e,this.method=r.toUpperCase();let i;if(Rl(this.method)||a?(this.body=n!==void 0?n:null,i=a):i=n,i){if(this.reportProgress=!!i.reportProgress,this.reportUploadProgress=!!i.reportUploadProgress,this.reportDownloadProgress=!!i.reportDownloadProgress,this.withCredentials=!!i.withCredentials,this.keepalive=!!i.keepalive,i.responseType&&(this.responseType=i.responseType),i.headers&&(this.headers=i.headers),i.context&&(this.context=i.context),i.params&&(this.params=i.params),i.priority&&(this.priority=i.priority),i.cache&&(this.cache=i.cache),i.credentials&&(this.credentials=i.credentials),typeof i.timeout==`number`){if(i.timeout<1||!Number.isInteger(i.timeout))throw new w(2822,``);this.timeout=i.timeout}i.mode&&(this.mode=i.mode),i.redirect&&(this.redirect=i.redirect),i.integrity&&(this.integrity=i.integrity),i.referrer!==void 0&&(this.referrer=i.referrer),i.referrerPolicy&&(this.referrerPolicy=i.referrerPolicy),this.transferCache=i.transferCache}if(this.headers??=new me$1,this.context??=new lr,!this.params)this.params=new re$1,this.urlWithParams=e;else{let o=this.params.toString();if(o.length===0)this.urlWithParams=e;else{let c=e,s=``,u=e.indexOf(`#`);u!==-1&&(s=e.substring(u),c=e.substring(0,u));let d=c.indexOf(`?`),f=d===-1?`?`:d<c.length-1?`&`:``;this.urlWithParams=c+f+o+s}}}serializeBody(){return this.body===null?null:typeof this.body==`string`||Eo(this.body)||Co(this.body)||Io(this.body)||Nl(this.body)?this.body:this.body instanceof re$1?this.body.toString():typeof this.body==`object`||typeof this.body==`boolean`||Array.isArray(this.body)?JSON.stringify(this.body):this.body.toString()}detectContentTypeHeader(){return this.body===null||Io(this.body)?null:Co(this.body)?this.body.type||null:Eo(this.body)?null:typeof this.body==`string`?xo:this.body instanceof re$1?`application/x-www-form-urlencoded;charset=UTF-8`:typeof this.body==`object`||typeof this.body==`number`||typeof this.body==`boolean`?Mo:null}clone(r={}){let e=r.method||this.method,n=r.url||this.url,a=r.responseType||this.responseType,i=r.keepalive??this.keepalive,o=r.priority||this.priority,c=r.cache||this.cache,s=r.mode||this.mode,u=r.redirect||this.redirect,d=r.credentials||this.credentials,f=r.referrer??this.referrer,p=r.integrity||this.integrity,_=r.referrerPolicy||this.referrerPolicy,R=r.transferCache??this.transferCache,N=r.timeout??this.timeout,D=r.body!==void 0?r.body:this.body,w=r.withCredentials??this.withCredentials,x=r.reportProgress??this.reportProgress,U=r.reportUploadProgress??this.reportUploadProgress,he=r.reportDownloadProgress??this.reportDownloadProgress,se=r.headers||this.headers,G=r.params||this.params,De=r.context??this.context;return r.setHeaders!==void 0&&(se=Object.keys(r.setHeaders).reduce((ge,ce)=>ge.set(ce,r.setHeaders[ce]),se)),r.setParams&&(G=Object.keys(r.setParams).reduce((ge,ce)=>ge.set(ce,r.setParams[ce]),G)),new t(e,n,D,{params:G,headers:se,context:De,reportProgress:x,reportUploadProgress:U,reportDownloadProgress:he,responseType:a,withCredentials:w,transferCache:R,keepalive:i,cache:c,priority:o,timeout:N,mode:s,redirect:u,credentials:d,referrer:f,integrity:p,referrerPolicy:_})}};var Le$2=(function(t){return t[t.Sent=0]=`Sent`,t[t.UploadProgress=1]=`UploadProgress`,t[t.ResponseHeader=2]=`ResponseHeader`,t[t.DownloadProgress=3]=`DownloadProgress`,t[t.Response=4]=`Response`,t[t.User=5]=`User`,t})(Le$2||{});var zt$1=class{headers;status;statusText;url;ok;type;redirected;responseType;constructor(r,e=200,n=`OK`){this.headers=r.headers||new me$1,this.status=r.status!==void 0?r.status:e,this.statusText=r.statusText||n,this.url=r.url||null,this.redirected=r.redirected,this.responseType=r.responseType,this.ok=this.status>=200&&this.status<300}};var dr=class t extends zt$1{constructor(r={}){super(r)}type=Le$2.ResponseHeader;clone(r={}){return new t({headers:r.headers||this.headers,status:r.status!==void 0?r.status:this.status,statusText:r.statusText||this.statusText,url:r.url||this.url||void 0})}};var $t=class t extends zt$1{body;constructor(r={}){super(r),this.body=r.body!==void 0?r.body:null}type=Le$2.Response;clone(r={}){return new t({body:r.body!==void 0?r.body:this.body,headers:r.headers||this.headers,status:r.status!==void 0?r.status:this.status,statusText:r.statusText||this.statusText,url:r.url||this.url||void 0,redirected:r.redirected??this.redirected,responseType:r.responseType??this.responseType})}};var Xe=class extends zt$1{name=`HttpErrorResponse`;message;error;ok=!1;constructor(r){super(r,0,`Unknown Error`),this.status>=200&&this.status<300?this.message=`Http failure during parsing for ${r.url||`(unknown url)`}`:this.message=`Http failure response for ${r.url||`(unknown url)`}: ${r.status} ${r.statusText}`,this.error=r.error||null}};var Ml=200;var To=(function(t){return t[t.Continue=100]=`Continue`,t[t.SwitchingProtocols=101]=`SwitchingProtocols`,t[t.Processing=102]=`Processing`,t[t.EarlyHints=103]=`EarlyHints`,t[t.Ok=200]=`Ok`,t[t.Created=201]=`Created`,t[t.Accepted=202]=`Accepted`,t[t.NonAuthoritativeInformation=203]=`NonAuthoritativeInformation`,t[t.NoContent=204]=`NoContent`,t[t.ResetContent=205]=`ResetContent`,t[t.PartialContent=206]=`PartialContent`,t[t.MultiStatus=207]=`MultiStatus`,t[t.AlreadyReported=208]=`AlreadyReported`,t[t.ImUsed=226]=`ImUsed`,t[t.MultipleChoices=300]=`MultipleChoices`,t[t.MovedPermanently=301]=`MovedPermanently`,t[t.Found=302]=`Found`,t[t.SeeOther=303]=`SeeOther`,t[t.NotModified=304]=`NotModified`,t[t.UseProxy=305]=`UseProxy`,t[t.Unused=306]=`Unused`,t[t.TemporaryRedirect=307]=`TemporaryRedirect`,t[t.PermanentRedirect=308]=`PermanentRedirect`,t[t.BadRequest=400]=`BadRequest`,t[t.Unauthorized=401]=`Unauthorized`,t[t.PaymentRequired=402]=`PaymentRequired`,t[t.Forbidden=403]=`Forbidden`,t[t.NotFound=404]=`NotFound`,t[t.MethodNotAllowed=405]=`MethodNotAllowed`,t[t.NotAcceptable=406]=`NotAcceptable`,t[t.ProxyAuthenticationRequired=407]=`ProxyAuthenticationRequired`,t[t.RequestTimeout=408]=`RequestTimeout`,t[t.Conflict=409]=`Conflict`,t[t.Gone=410]=`Gone`,t[t.LengthRequired=411]=`LengthRequired`,t[t.PreconditionFailed=412]=`PreconditionFailed`,t[t.PayloadTooLarge=413]=`PayloadTooLarge`,t[t.UriTooLong=414]=`UriTooLong`,t[t.UnsupportedMediaType=415]=`UnsupportedMediaType`,t[t.RangeNotSatisfiable=416]=`RangeNotSatisfiable`,t[t.ExpectationFailed=417]=`ExpectationFailed`,t[t.ImATeapot=418]=`ImATeapot`,t[t.MisdirectedRequest=421]=`MisdirectedRequest`,t[t.UnprocessableEntity=422]=`UnprocessableEntity`,t[t.Locked=423]=`Locked`,t[t.FailedDependency=424]=`FailedDependency`,t[t.TooEarly=425]=`TooEarly`,t[t.UpgradeRequired=426]=`UpgradeRequired`,t[t.PreconditionRequired=428]=`PreconditionRequired`,t[t.TooManyRequests=429]=`TooManyRequests`,t[t.RequestHeaderFieldsTooLarge=431]=`RequestHeaderFieldsTooLarge`,t[t.UnavailableForLegalReasons=451]=`UnavailableForLegalReasons`,t[t.InternalServerError=500]=`InternalServerError`,t[t.NotImplemented=501]=`NotImplemented`,t[t.BadGateway=502]=`BadGateway`,t[t.ServiceUnavailable=503]=`ServiceUnavailable`,t[t.GatewayTimeout=504]=`GatewayTimeout`,t[t.HttpVersionNotSupported=505]=`HttpVersionNotSupported`,t[t.VariantAlsoNegotiates=506]=`VariantAlsoNegotiates`,t[t.InsufficientStorage=507]=`InsufficientStorage`,t[t.LoopDetected=508]=`LoopDetected`,t[t.NotExtended=510]=`NotExtended`,t[t.NetworkAuthenticationRequired=511]=`NetworkAuthenticationRequired`,t})(To||{});var Tl=/^\)\]\}',?\n/;var Oo=new S(``,{factory:()=>null});var mr=(()=>{class t{fetchImpl=v(Ma,{optional:!0})?.fetch??((...e)=>globalThis.fetch(...e));ngZone=v(Fe$1);destroyRef=v(fe$2);maxResponseSize=v(Oo);handle(e){return new x(n=>{let a=new AbortController,i=!1,o={next:s=>{s.type===Le$2.Response&&(i=!0),n.next(s)},error:s=>{i=!0,n.error(s)},complete:()=>{i=!0,n.complete()}};this.doRequest(e,a.signal,o).then(Ta,s=>o.error(new Xe({error:s})));let c;return e.timeout&&(c=this.ngZone.runOutsideAngular(()=>setTimeout(()=>{a.signal.aborted||a.abort(new DOMException(`signal timed out`,`TimeoutError`))},e.timeout))),()=>{c!==void 0&&clearTimeout(c),!i&&!a.signal.aborted&&a.abort()}})}async doRequest(e,n,a){let i=this.createRequestInit(e),o;try{let D=this.ngZone.runOutsideAngular(()=>this.fetchImpl(e.urlWithParams,z$1({signal:n},i)));Ol(D),a.next({type:Le$2.Sent}),o=await D}catch(D){a.error(new Xe({error:D,status:D.status??0,statusText:D.statusText,url:e.urlWithParams,headers:D.headers}));return}let c=new me$1(o.headers),s=o.statusText,u=o.url||e.urlWithParams,d=o.status,f=null,p=e.reportProgress||e.reportDownloadProgress;if(p&&a.next(new dr({headers:c,status:d,statusText:s,url:u})),o.body){let D=o.headers.get(Na)??``,w=o.headers.get(`content-length`),x=w!==null?Number(w):NaN;this.maxResponseSize!==null&&Number.isFinite(x)&&x>this.maxResponseSize&&(await o.body.cancel(),Ro(this.maxResponseSize));let U=[],he=o.body.getReader(),se=0,G,De,ge=typeof Zone<`u`&&Zone.current,ce=!1;if(await this.ngZone.runOutsideAngular(async()=>{for(;;){if(this.destroyRef.destroyed){await he.cancel(),ce=!0;break}let{done:be,value:nt}=await he.read();if(be)break;if(U.push(nt),se+=nt.length,this.maxResponseSize!==null&&se>this.maxResponseSize&&(await he.cancel(),Ro(this.maxResponseSize)),p){De=e.responseType===`text`?(De??``)+(G??=No(D)).decode(nt,{stream:!0}):void 0;let ve=()=>a.next({type:Le$2.DownloadProgress,total:Number.isFinite(x)?x:void 0,loaded:se,partialText:De});ge?ge.run(ve):ve()}}}),ce){a.complete();return}let j=this.concatChunks(U,se);try{f=this.parseBody(e,j,D,d)}catch(be){a.error(new Xe({error:be,headers:new me$1(o.headers),status:o.status,statusText:o.statusText,url:o.url||e.urlWithParams}));return}}d===0&&(d=f?Ml:0);let _=d>=200&&d<300,R=o.redirected,N=o.type;_?(a.next(new $t({body:f,headers:c,status:d,statusText:s,url:u,redirected:R,responseType:N})),a.complete()):a.error(new Xe({error:f,headers:c,status:d,statusText:s,url:u,redirected:R,responseType:N}))}parseBody(e,n,a,i){switch(e.responseType){case`json`:let o=new TextDecoder().decode(n).replace(Tl,``);if(o===``)return null;try{return JSON.parse(o)}catch(c){if(i<200||i>=300)return o;throw c}case`text`:return No(a).decode(n);case`blob`:return new Blob([n],{type:a});case`arraybuffer`:return n.buffer}}createRequestInit(e){if(e.reportUploadProgress)throw new w(2824,!1);let n={},a;if(a=e.credentials,e.withCredentials&&(a=`include`),e.headers.forEach((i,o)=>n[i]=o.join(`,`)),e.headers.has(Ao)||(n[Ao]=xl),!e.headers.has(Na)){let i=e.detectContentTypeHeader();i!==null&&(n[Na]=i)}return{body:e.serializeBody(),method:e.method,headers:n,credentials:a,keepalive:e.keepalive,cache:e.cache,priority:e.priority,mode:e.mode,redirect:e.redirect,referrer:e.referrer,integrity:e.integrity,referrerPolicy:e.referrerPolicy}}concatChunks(e,n){let a=new Uint8Array(n),i=0;for(let o of e)a.set(o,i),i+=o.length;return a}static ɵfac=function(n){return new(n||t)};static ɵprov=$r$1({token:t,factory:t.ɵfac})}return t})();var Ma=class{};function Ta(){}function Ol(t){t.then(Ta,Ta)}function Ro(t){throw new w(-2825,!1)}var Pl=/charset=\s*["']?([^;"'\s]+)["']?/i;function No(t){let r=t.match(Pl);if(r!==null)try{return new TextDecoder(r[1])}catch{}return new TextDecoder}var Fl=new S(``,{factory:()=>!0});var kl=`XSRF-TOKEN`;var Po=new S(``,{factory:()=>kl});var Ll=`X-XSRF-TOKEN`;var Fo=new S(``,{factory:()=>Ll});var Ul=(()=>{class t{cookieName=v(Po);doc=v(mt$1);lastCookieString=``;lastToken=null;parseCount=0;getToken(){let e=this.doc.cookie||``;return e!==this.lastCookieString&&(this.parseCount++,this.lastToken=ln$1(e,this.cookieName),this.lastCookieString=e),this.lastToken}static ɵfac=function(n){return new(n||t)};static ɵprov=$r$1({token:t,factory:t.ɵfac})}return t})();var ko=(()=>{class t{static ɵfac=function(n){return new(n||t)};static ɵprov=ae$2({token:t,factory:function(n){let a=null;return n?a=new(n||t):a=Pe$1(Ul),a},providedIn:`root`})}return t})();function Lo(t,r){if(!v(Fl)||t.method===`GET`||t.method===`HEAD`)return r(t);try{let a=v(Ut$1).href,{origin:i}=new URL(a),{origin:o}=new URL(t.url,i);if(i!==o)return r(t)}catch{return r(t)}let e=v(ko).getToken(),n=v(Fo);return e!=null&&!t.headers.has(n)&&(t=t.clone({headers:t.headers.set(n,e)})),r(t)}function Bl(t,r){return r(t)}function jl(t,r,e){return(n,a)=>Yo(e,()=>r(n,i=>t(i,a)))}var Uo=new S(``,{factory:()=>[Lo]});var Oa=new S(``);var Bo=new S(``,{factory:()=>!0});var Pa=(()=>{class t{static ɵfac=function(n){return new(n||t)};static ɵprov=ae$2({token:t,factory:function(n){let a=null;return n?a=new(n||t):a=Pe$1(mr),a},providedIn:`root`})}return t})();var fr=(()=>{class t{backend;injector;chain=null;pendingTasks=v(Sr$1);contributeToStability=v(Bo);constructor(e,n){this.backend=e,this.injector=n}handle(e){if(this.chain===null){let a=this.injector.get(pr,null,{skipSelf:!0}),i=a!==null&&this.backend===a,o=this.injector.get(Oa,[],i?{self:!0}:void 0),c=Array.from(/* @__PURE__ */ new Set([...this.injector.get(Uo),...o]));this.chain=c.reduceRight((s,u)=>jl(s,u,this.injector),Bl)}let n=this.chain;if(this.contributeToStability){let a=this.pendingTasks.add();return le$1(()=>n(e,i=>this.backend.handle(i))).pipe(Xy(a))}else return le$1(()=>n(e,a=>this.backend.handle(a)))}static ɵfac=function(n){return new(n||t)(Pe$1(Pa),Pe$1(Ee$1))};static ɵprov=ae$2({token:t,factory:t.ɵfac,providedIn:`root`})}return t})();var pr=(()=>{class t{static ɵfac=function(n){return new(n||t)};static ɵprov=ae$2({token:t,factory:function(n){let a=null;return n?a=new(n||t):a=Pe$1(fr),a},providedIn:`root`})}return t})();function xa(t,r){return z$1({body:r},t)}var mt=(()=>{class t{handler;constructor(e){this.handler=e}request(e,n,a={}){let i;if(e instanceof dt)i=e;else{let s;a.headers instanceof me$1?s=a.headers:s=new me$1(a.headers);let u;a.params&&(a.params instanceof re$1?u=a.params:u=new re$1({fromObject:a.params})),i=new dt(e,n,a.body!==void 0?a.body:null,{headers:s,context:a.context,params:u,reportProgress:a.reportProgress,reportUploadProgress:a.reportUploadProgress,reportDownloadProgress:a.reportDownloadProgress,responseType:a.responseType||`json`,withCredentials:a.withCredentials,transferCache:a.transferCache,keepalive:a.keepalive,priority:a.priority,cache:a.cache,mode:a.mode,redirect:a.redirect,credentials:a.credentials,referrer:a.referrer,referrerPolicy:a.referrerPolicy,integrity:a.integrity,timeout:a.timeout})}let o=Ay(i).pipe(zy(s=>this.handler.handle(s)));if(e instanceof dt||a.observe===`events`)return o;let c=o.pipe(rr$1(s=>s instanceof $t));switch(a.observe||`body`){case`body`:switch(i.responseType){case`arraybuffer`:return c.pipe(Ue$1(s=>{if(s.body!==null&&!(s.body instanceof ArrayBuffer))throw new w(2806,!1);return s.body}));case`blob`:return c.pipe(Ue$1(s=>{if(s.body!==null&&!(s.body instanceof Blob))throw new w(2807,!1);return s.body}));case`text`:return c.pipe(Ue$1(s=>{if(s.body!==null&&typeof s.body!=`string`)throw new w(2808,!1);return s.body}));default:return c.pipe(Ue$1(s=>s.body))}case`response`:return c;default:throw new w(2809,!1)}}delete(e,n={}){return this.request(`DELETE`,e,n)}get(e,n={}){return this.request(`GET`,e,n)}head(e,n={}){return this.request(`HEAD`,e,n)}jsonp(e,n){return this.request(`JSONP`,e,{params:new re$1().append(n,`JSONP_CALLBACK`),observe:`body`,responseType:`json`})}options(e,n={}){return this.request(`OPTIONS`,e,n)}patch(e,n,a={}){return this.request(`PATCH`,e,xa(a,n))}post(e,n,a={}){return this.request(`POST`,e,xa(a,n))}put(e,n,a={}){return this.request(`PUT`,e,xa(a,n))}static ɵfac=function(n){return new(n||t)(Pe$1(pr))};static ɵprov=ae$2({token:t,factory:t.ɵfac,providedIn:`root`})}return t})();var Fa=(function(t){return t[t.Interceptors=0]=`Interceptors`,t[t.LegacyInterceptors=1]=`LegacyInterceptors`,t[t.CustomXsrfConfiguration=2]=`CustomXsrfConfiguration`,t[t.NoXsrfProtection=3]=`NoXsrfProtection`,t[t.JsonpSupport=4]=`JsonpSupport`,t[t.RequestsMadeViaParent=5]=`RequestsMadeViaParent`,t[t.Fetch=6]=`Fetch`,t[t.Xhr=7]=`Xhr`,t})(Fa||{});function zl(t,r){return{ɵkind:t,ɵproviders:r}}function $l(...t){let r=[mt,mr,fr,{provide:pr,useExisting:fr},{provide:Pa,useFactory:()=>v(mr)},{provide:Uo,useValue:Lo,multi:!0}];for(let e of t)r.push(...e.ɵproviders);return Dr$1(r)}function Hl({cookieName:t,headerName:r}){let e=[];return t!==void 0&&e.push({provide:Po,useValue:t}),r!==void 0&&e.push({provide:Fo,useValue:r}),zl(Fa.CustomXsrfConfiguration,e)}var Ho=new S(``);var Vl=`b`;var Gl=`h`;var Wl=`s`;var ql=`st`;var Kl=`u`;var Yl=`rt`;var gr=new S(``);var Zl=[`GET`,`HEAD`];function Vo(t,r){let{isCacheActive:e,filter:n,includePostRequests:a,includeRequestsWithAuthHeaders:i,includeRequestsWithCredentials:o,includeNonCacheableRequests:c}=r,{transferCache:s,method:u}=t;return!(!e||s===!1||u===`POST`&&!a&&!s||u!==`POST`&&!Zl.includes(u)||!i&&Jl(t)||!o&&nu(t)||!c&&(eu(t.headers)||tu(t.cache))||n?.(t)===!1)}function Go(t,r,e,n,a,i=!1){if(!i&&!Vo(t,r))return null;if(n)throw new w(2803,!1);if(!a){let N=t.url;a=Wo(t,N)}let o=e.get(a,null);if(!o)return null;let{[Vl]:c,[Yl]:s,[Gl]:u,[Wl]:d,[ql]:f,[Kl]:p}=o,_=c;switch(s){case`arraybuffer`:_=zo(c);break;case`blob`:_=new Blob([zo(c)])}let R=new me$1(u);return new $t({body:_,headers:R,status:d,statusText:f,url:p})}function Xl(t,r){let e=v(gr);if(!Vo(t,e))return r(t);let n=v(Zt$2);v(Ho,{optional:!0});let i=t.url,c=Go(t,e,n,null,Wo(t,i),!0);return c?Ay(c):r(t)}function Jl(t){let r=t.headers;return r.has(`authorization`)||r.has(`proxy-authorization`)||r.has(`cookie`)}var Ql=/* @__PURE__ */ new Set([`no-store`,`private`,`no-cache`]);function eu(t){let r=t.getAll(`cache-control`);return r?r.some(e=>e.split(`,`).some(n=>{let a=n.split(`=`,1)[0].trim().toLowerCase();return Ql.has(a)})):!1}function tu(t){return t===`no-cache`||t===`no-store`}function nu(t){let{withCredentials:r,credentials:e}=t;return r||e===`include`||e===`same-origin`}function jo(t){let r=new URLSearchParams(t instanceof URLSearchParams?t:t.toString());return r.sort(),r.toString()}function Wo(t,r){let{params:e,method:n,responseType:a}=t,i=jo(e),o=t.serializeBody();o instanceof URLSearchParams?o=jo(o):typeof o!=`string`&&(o=``);return au([n,a,r,o,i].join(`\0`))}function zo(t){let r=atob(t);return Uint8Array.from(r,n=>n.charCodeAt(0)).buffer}function qo(t){return[{provide:gr,useFactory:()=>(Be$1(`NgHttpTransferCache`),z$1({isCacheActive:!0},t))},{provide:Oa,useValue:Xl,multi:!0},{provide:eo,multi:!0,useFactory:()=>{let r=v(wt),e=v(gr);return()=>{r.whenStable().then(()=>{e.isCacheActive=!1})}}}]}var ru=new Uint32Array([1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298]);var $o;function au(t){$o??=new TextEncoder;let r=$o.encode(t),e=1779033703,n=3144134277,a=1013904242,i=2773480762,o=1359893119,c=2600822924,s=528734635,u=1541459225,d=r.length*8,f=(r.length+8>>6)+1<<6,p=new Uint8Array(f);p.set(r),p[r.length]=128;let _=new DataView(p.buffer),R=d>>>0,N=d/4294967296>>>0;_.setUint32(f-8,N,!1),_.setUint32(f-4,R,!1);let D=/* @__PURE__ */ new Uint32Array(64);for(let w=0;w<f;w+=64){for(let j=0;j<16;j++)D[j]=_.getUint32(w+j*4,!1);for(let j=16;j<64;j++){let be=D[j-15],nt=((be>>>7|be<<25)^(be>>>18|be<<14)^be>>>3)>>>0,ve=D[j-2],oa=((ve>>>17|ve<<15)^(ve>>>19|ve<<13)^ve>>>10)>>>0;D[j]=D[j-16]+nt+D[j-7]+oa>>>0}let x=e,U=n,he=a,se=i,G=o,De=c,ge=s,ce=u;for(let j=0;j<64;j++){let be=((G>>>6|G<<26)^(G>>>11|G<<21)^(G>>>25|G<<7))>>>0,nt=(G&De^~G&ge)>>>0,ve=ce+be+nt+ru[j]+D[j]>>>0,Bc=(((x>>>2|x<<30)^(x>>>13|x<<19)^(x>>>22|x<<10))>>>0)+((x&U^x&he^U&he)>>>0)>>>0;ce=ge,ge=De,De=G,G=se+ve>>>0,se=he,he=U,U=x,x=ve+Bc>>>0}e=e+x>>>0,n=n+U>>>0,a=a+he>>>0,i=i+se>>>0,o=o+G>>>0,c=c+De>>>0,s=s+ge>>>0,u=u+ce>>>0}return[e,n,a,i,o,c,s,u].map(w=>w.toString(16).padStart(8,`0`)).join(``)}var La=(()=>{let t=hr(`json`);return t.arrayBuffer=hr(`arraybuffer`),t.blob=hr(`blob`),t.text=hr(`text`),t})();function hr(t){return function(e,n){let a=n?.injector??v(se$1),i=a.get(gr,null,{optional:!0}),o=a.get(Zt$2,null,{optional:!0}),c=a.get(Ho,null,{optional:!0}),s=u=>{if(i&&o&&u){let d=Go(u,i,o,c);if(d)try{let f=d.body,p=n?.parse?n.parse(f):f;return Et$1({value:p})}catch{}}};return new ka(a,u=>iu(u,e,t),n?.defaultValue,n?.debugName,n?.parse,n?.equal,s)}}function iu(t,r,e){let n=typeof r==`function`?r(t):r;if(n===void 0)return;typeof n==`string`&&(n={url:n});let a=n.headers instanceof me$1?n.headers:new me$1(n.headers),i=n.params instanceof re$1?n.params:new re$1({fromObject:n.params});return new dt(n.method??`GET`,n.url,n.body??null,{headers:a,params:i,reportDownloadProgress:n.reportProgress,withCredentials:n.withCredentials,keepalive:n.keepalive,cache:n.cache,priority:n.priority,mode:n.mode,redirect:n.redirect,responseType:e,context:n.context,transferCache:n.transferCache,credentials:n.credentials,referrer:n.referrer,referrerPolicy:n.referrerPolicy,integrity:n.integrity,timeout:n.timeout})}var ka=class extends Wl$1{client;_headers=Ul$1({source:this.extRequest,computation:()=>{}});_progress=Ul$1({source:this.extRequest,computation:()=>{}});_statusCode=Ul$1({source:this.extRequest,computation:()=>{}});headers=it$1(()=>this.status()===`resolved`||this.status()===`error`?this._headers():void 0);progress=this._progress.asReadonly();statusCode=this._statusCode.asReadonly();constructor(r,e,n,a,i,o,c){super(e,({params:s,abortSignal:u})=>{let d,f=!1,p=()=>{f=!0,d?.unsubscribe()};u.addEventListener(`abort`,p,{once:!0});let _=Et$1({value:void 0}),R,N=new Promise(w=>R=w),D=w=>{_.set(w),R?.(_),R=void 0};return d=this.client.request(s).subscribe({next:w=>{switch(w.type){case Le$2.Response:this._headers.set(w.headers),this._statusCode.set(w.status);try{D({value:i?i(w.body):w.body})}catch(x){D({error:ql$1(x)})}break;case Le$2.DownloadProgress:this._progress.set(w)}},error:w=>{w instanceof Xe&&(this._headers.set(w.headers),this._statusCode.set(w.status)),D({error:w}),u.removeEventListener(`abort`,p)},complete:()=>{R&&D({error:new w(-991,!1)}),u.removeEventListener(`abort`,p)}}),f&&d.unsubscribe(),N},n,o,a,r,void 0,c),this.client=r.get(mt)}set(r){super.set(r),this._headers.set(void 0),this._progress.set(void 0),this._statusCode.set(void 0)}};var Ko=(()=>{class t{_doc;constructor(e){this._doc=e}getTitle(){return this._doc.title}setTitle(e){this._doc.title=e||``}static ɵfac=function(n){return new(n||t)(Pe$1(mt$1))};static ɵprov=ae$2({token:t,factory:t.ɵfac,providedIn:`root`})}return t})();var br=(function(t){return t[t.NoHttpTransferCache=0]=`NoHttpTransferCache`,t[t.HttpTransferCacheOptions=1]=`HttpTransferCacheOptions`,t[t.I18nSupport=2]=`I18nSupport`,t[t.EventReplay=3]=`EventReplay`,t[t.IncrementalHydration=4]=`IncrementalHydration`,t[t.NoIncrementalHydration=5]=`NoIncrementalHydration`,t})(br||{});function wg(...t){let r=[],e=/* @__PURE__ */ new Set;for(let{ɵproviders:a,ɵkind:i}of t)e.add(i),a.length&&r.push(a);let n=e.has(br.HttpTransferCacheOptions);return Dr$1([[],[],wj(),e.has(br.NoHttpTransferCache)||n?[]:qo({}),e.has(br.NoIncrementalHydration)?[]:Cj(),r,{provide:Rm$1,useValue:{isActive:!0}},{provide:eo,multi:!0,useFactory:()=>{let a=v(wt),i=v(Rm$1);return()=>{a.whenStable().then(()=>{i.isActive=!1})}}}])}var pn=(()=>{class t{static ɵfac=function(n){return new(n||t)};static ɵprov=ae$2({token:t,factory:function(n){let a=null;return n?a=new(n||t):a=Pe$1(cu),a},providedIn:`root`})}return t})();var cu=(()=>{class t extends pn{_doc=v(mt$1);sanitize(e,n){if(n==null)return null;switch(e){case J$2.NONE:return n;case J$2.HTML:return Jc$1(n,`HTML`)?Dt$1(n):wI(this._doc,String(n)).toString();case J$2.STYLE:return Jc$1(n,`Style`)?Dt$1(n):n;case J$2.SCRIPT:if(Jc$1(n,`Script`))return Dt$1(n);throw new w(5200,!1);case J$2.URL:return Jc$1(n,`URL`)?Dt$1(n):Xc$1(String(n));case J$2.RESOURCE_URL:if(Jc$1(n,`ResourceURL`))return Dt$1(n);throw new w(-5201,!1);default:throw new w(5202,!1)}}bypassSecurityTrustHtml(e){return eI(e)}bypassSecurityTrustStyle(e){return tI(e)}bypassSecurityTrustScript(e){return nI(e)}bypassSecurityTrustUrl(e){return rI(e)}bypassSecurityTrustResourceUrl(e){return oI(e)}static ɵfac=function(n){return new(n||t)};static ɵprov=$r$1({token:t,factory:t.ɵfac})}return t})();var y=`primary`;var Rn=Symbol(`RouteTitle`);var Ha=class{params;constructor(r){this.params=r||{}}has(r){return Object.hasOwn(this.params,r)}get(r){if(this.has(r)){let e=this.params[r];return Array.isArray(e)?e[0]:e}return null}getAll(r){if(this.has(r)){let e=this.params[r];return Array.isArray(e)?e:[e]}return[]}get keys(){return Object.keys(this.params)}};function pt(t){return new Ha(t)}function Ua(t,r,e){for(let n=0;n<t.length;n++){let a=t[n],i=r[n];if(a[0]===`:`)e[a.substring(1)]=i;else if(a!==i.path)return!1}return!0}function as(t,r,e){let n=e.path.split(`/`),a=n.indexOf(`**`);if(a===-1){if(n.length>t.length||e.pathMatch===`full`&&(r.hasChildren()||n.length<t.length))return null;let s={},u=t.slice(0,n.length);return Ua(n,u,s)?{consumed:u,posParams:s}:null}if(a!==n.lastIndexOf(`**`))return null;let i=n.slice(0,a),o=n.slice(a+1);if(i.length+o.length>t.length||e.pathMatch===`full`&&r.hasChildren()&&e.path!==`**`)return null;let c={};return!Ua(i,t.slice(0,i.length),c)||!Ua(o,t.slice(t.length-o.length),c)?null:{consumed:t,posParams:c}}function wr(t){return new Promise((r,e)=>{t.pipe(ev()).subscribe({next:n=>r(n),error:n=>e(n)})})}function du(t,r){if(t.length!==r.length)return!1;for(let e=0;e<t.length;++e)if(!Re$1(t[e],r[e]))return!1;return!0}function Re$1(t,r){let e=t?Va(t):void 0,n=r?Va(r):void 0;if(!e||!n||e.length!=n.length)return!1;let a;for(let i=0;i<e.length;i++)if(a=e[i],!is(t[a],r[a]))return!1;return!0}function Va(t){return[...Object.keys(t),...Object.getOwnPropertySymbols(t)]}function is(t,r){if(Array.isArray(t)&&Array.isArray(r)){if(t.length!==r.length)return!1;let e=[...t].sort(),n=[...r].sort();return e.every((a,i)=>n[i]===a)}else return t===r}function mu(t){return t.length>0?t[t.length-1]:null}function Nn(t){return Ry(t)?t:Nl$1(t)?Re$2(Promise.resolve(t)):Ay(t)}function os(t){return Ry(t)?wr(t):Promise.resolve(t)}var fu={exact:ls,subset:us};var ss={exact:pu,subset:hu,ignored:()=>!0};var cs={paths:`exact`,fragment:`ignored`,matrixParams:`ignored`,queryParams:`exact`};var Er={paths:`subset`,fragment:`ignored`,matrixParams:`ignored`,queryParams:`subset`};function Ga(t,r,e){let n=z$1(z$1({},Er),e||{});return fu[n.paths](t.root,r.root,n.matrixParams)&&ss[n.queryParams](t.queryParams,r.queryParams)&&!(n.fragment===`exact`&&t.fragment!==r.fragment)}function pu(t,r){return Re$1(t,r)}function ls(t,r,e){if(!ft(t.segments,r.segments)||!_r(t.segments,r.segments,e)||t.numberOfChildren!==r.numberOfChildren)return!1;for(let n in r.children)if(!t.children[n]||!ls(t.children[n],r.children[n],e))return!1;return!0}function hu(t,r){return Object.keys(r).length<=Object.keys(t).length&&Object.keys(r).every(e=>is(t[e],r[e]))}function us(t,r,e){return ds(t,r,r.segments,e)}function ds(t,r,e,n){if(t.segments.length>e.length){let a=t.segments.slice(0,e.length);return!(!ft(a,e)||r.hasChildren()||!_r(a,e,n))}else if(t.segments.length===e.length){if(!ft(t.segments,e)||!_r(t.segments,e,n))return!1;for(let a in r.children)if(!t.children[a]||!us(t.children[a],r.children[a],n))return!1;return!0}else{let a=e.slice(0,t.segments.length),i=e.slice(t.segments.length);return!ft(t.segments,a)||!_r(t.segments,a,n)||!t.children[y]?!1:ds(t.children[y],r,i,n)}}function _r(t,r,e){return r.every((n,a)=>ss[e](t[a].parameters,n.parameters))}var ie=class{root;queryParams;fragment;_queryParamMap;constructor(r=new A([],{}),e={},n=null){this.root=r,this.queryParams=e,this.fragment=n}get queryParamMap(){return this._queryParamMap??=pt(this.queryParams),this._queryParamMap}toString(){return yu.serialize(this)}};var A=class{segments;children;parent=null;constructor(r,e){this.segments=r,this.children=e,Object.values(e).forEach(n=>n.parent=this)}hasChildren(){return this.numberOfChildren>0}get numberOfChildren(){return Object.keys(this.children).length}toString(){return Sr(this)}};var Je=class{path;parameters;_parameterMap;constructor(r,e){this.path=r,this.parameters=e}get parameterMap(){return this._parameterMap??=pt(this.parameters),this._parameterMap}toString(){return fs(this)}};function gu(t,r){return ft(t,r)&&t.every((e,n)=>Re$1(e.parameters,r[n].parameters))}function ft(t,r){return t.length!==r.length?!1:t.every((e,n)=>e.path===r[n].path)}function bu(t,r){let e=[];return Object.entries(t.children).forEach(([n,a])=>{n===y&&(e=e.concat(r(a,n)))}),Object.entries(t.children).forEach(([n,a])=>{n!==y&&(e=e.concat(r(a,n)))}),e}var Xt=(()=>{class t{static ɵfac=function(n){return new(n||t)};static ɵprov=$r$1({token:t,factory:()=>new Qe})}return t})();var Qe=class{parse(r){let e=new qa(r);return new ie(e.parseRootSegment(),e.parseQueryParams(),e.parseFragment())}serialize(r){let e=`/${Ht$1(r.root,!0)}`;vu(e)&&(e=`/`);let n=wu(r.queryParams),a=typeof r.fragment==`string`?`#${Su(r.fragment)}`:``;return`${e}${n}${a}`}};var Zo=`http://fake`;function vu(t){try{let r=new URL(t,Zo);return r.origin!==Zo||r.pathname.startsWith(`//`)}catch{return!0}}var yu=new Qe;function Sr(t){return t.segments.map(r=>fs(r)).join(`/`)}function Ht$1(t,r){if(!t.hasChildren())return Sr(t);if(r){let e=t.children[y]?Ht$1(t.children[y],!1):``,n=[];return Object.entries(t.children).forEach(([a,i])=>{a!==y&&n.push(`${a}:${Ht$1(i,!1)}`)}),n.length>0?`${e}(${n.join(`//`)})`:e}else{if(Object.keys(t.children).length===1&&t.children[y]!=null)return`${Sr(t)}/${Ht$1(t.children[y],!1)}`;let e=bu(t,(n,a)=>a===y?[_u(Ht$1(t.children[y],!1))]:[`${a}:${Ht$1(n,!1)}`]);return`${Sr(t)}/(${e.join(`//`)})`}}function _u(t){return t.replace(ps,r=>r.replace(/:/g,`%3A`))}function ms(t){return encodeURIComponent(t).replace(/%40/g,`@`).replace(/%3A/gi,`:`).replace(/%24/g,`$`).replace(/%2C/gi,`,`)}function vr(t){return ms(t).replace(/%3B/gi,`;`)}function Su(t){return encodeURI(t)}function Wa(t){return ms(t).replace(/\(/g,`%28`).replace(/\)/g,`%29`).replace(/%26/gi,`&`)}function Dr(t){return decodeURIComponent(t)}function Xo(t){return Dr(t.replace(/\+/g,`%20`))}function fs(t){return`${Wa(t.path)}${Du(t.parameters)}`}function Du(t){return Object.entries(t).map(([r,e])=>`;${Wa(r)}=${Wa(e)}`).join(``)}function wu(t){let r=Object.entries(t).map(([e,n])=>Array.isArray(n)?n.map(a=>`${vr(e)}=${vr(a)}`).join(`&`):`${vr(e)}=${vr(n)}`).filter(e=>e);return r.length?`?${r.join(`&`)}`:``}var Ba=1073741824;function Cr(t,r,e){Number(r)>=32&&!Object.hasOwn(t,Ba)&&(t[Ba]=e,delete t[Ba]),t[r]=e}var ps=/^[^\/()?;#]+/;function ja(t){let r=t.match(ps);return r?r[0]:``}var Eu=/^[^\/()?;=#]+/;function Cu(t){let r=t.match(Eu);return r?r[0]:``}var Iu=/^[^=?&#]+/;function Au(t){let r=t.match(Iu);return r?r[0]:``}var Ru=/^[^&#]+/;function Nu(t){let r=t.match(Ru);return r?r[0]:``}var qa=class{url;remaining;constructor(r){this.url=r,this.remaining=r}parseRootSegment(){for(;this.consumeOptional(`/`););return this.remaining===``||this.peekStartsWith(`?`)||this.peekStartsWith(`#`)?new A([],{}):new A([],this.parseChildren())}parseQueryParams(){let r={};if(this.consumeOptional(`?`))do this.parseQueryParam(r);while(this.consumeOptional(`&`));return r}parseFragment(){return this.consumeOptional(`#`)?decodeURIComponent(this.remaining):null}parseChildren(r=0){if(r>50)throw new w(4010,!1);if(this.remaining===``)return{};this.consumeOptional(`/`);let e=[];for(this.peekStartsWith(`(`)||e.push(this.parseSegment());this.peekStartsWith(`/`)&&!this.peekStartsWith(`//`)&&!this.peekStartsWith(`/(`);)this.capture(`/`),e.push(this.parseSegment());let n={};this.peekStartsWith(`/(`)&&(this.capture(`/`),n=this.parseParens(!0,r));let a={};return this.peekStartsWith(`(`)&&(a=this.parseParens(!1,r)),(e.length>0||Object.keys(n).length>0)&&(a[y]=new A(e,n)),a}parseSegment(){let r=ja(this.remaining);if(r===``&&this.peekStartsWith(`;`))throw new w(4009,!1);return this.capture(r),new Je(Dr(r),this.parseMatrixParams())}parseMatrixParams(){let r={};for(;this.consumeOptional(`;`);)this.parseParam(r);return r}parseParam(r){let e=Cu(this.remaining);if(!e)return;this.capture(e);let n=``;if(this.consumeOptional(`=`)){let a=ja(this.remaining);a&&(n=a,this.capture(n))}Cr(r,Dr(e),Dr(n))}parseQueryParam(r){let e=Au(this.remaining);if(!e)return;this.capture(e);let n=``;if(this.consumeOptional(`=`)){let o=Nu(this.remaining);o&&(n=o,this.capture(n))}let a=Xo(e),i=Xo(n);if(Object.hasOwn(r,a)){let o=r[a];Array.isArray(o)||(o=[o],r[a]=o),o.push(i)}else r[a]=i}parseParens(r,e){let n=Object.create(null);for(this.capture(`(`);!this.consumeOptional(`)`)&&this.remaining.length>0;){let a=ja(this.remaining),i=this.remaining[a.length];if(i!==`/`&&i!==`)`&&i!==`;`)throw new w(4010,!1);let o;a.indexOf(`:`)>-1?(o=a.slice(0,a.indexOf(`:`)),this.capture(o),this.capture(`:`)):r&&(o=y);let c=this.parseChildren(e+1),s=Object.keys(c).length===1&&c[y]?c[y]:new A([],c);Cr(n,o??y,s),this.consumeOptional(`//`)}return n}peekStartsWith(r){return this.remaining.startsWith(r)}consumeOptional(r){return this.peekStartsWith(r)?(this.remaining=this.remaining.substring(r.length),!0):!1}capture(r){if(!this.consumeOptional(r))throw new w(4011,!1)}};function hs(t){return t.segments.length>0?new A([],{[y]:t}):t}function gs(t){let r=Object.create(null);for(let[n,a]of Object.entries(t.children)){let i=gs(a);if(n===y&&i.segments.length===0&&i.hasChildren())for(let[o,c]of Object.entries(i.children))Cr(r,o,c);else(i.segments.length>0||i.hasChildren())&&Cr(r,n,i)}return xu(new A(t.segments,r))}function xu(t){if(t.numberOfChildren===1&&t.children[y]){let r=t.children[y];return new A(t.segments.concat(r.segments),r.children)}return t}function et$1(t){return t instanceof ie}function bs(t,r,e=null,n=null,a=new Qe){return ys(vs(t),r,e,n,a)}function vs(t){let r;function e(i){let o={};for(let s of i.children){let u=e(s);o[s.outlet]=u}let c=new A(i.url,o);return i===t&&(r=c),c}let a=hs(e(t.root));return r??a}function ys(t,r,e,n,a){let i=t;for(;i.parent;)i=i.parent;if(r.length===0)return za(i,i,i,e,n,a);let o=Mu(r);if(o.toRoot())return za(i,i,new A([],{}),e,n,a);let c=Tu(o,i,t),s=c.processChildren?gn$1(c.segmentGroup,c.index,o.commands):Ss(c.segmentGroup,c.index,o.commands);return za(i,c.segmentGroup,s,e,n,a)}function Ir(t){return typeof t==`object`&&t!=null&&!t.outlets&&!t.segmentPath}function _n$1(t){return typeof t==`object`&&t!=null&&t.outlets}function Jo(t,r,e){t||=`ɵ`;let n=new ie;return n.queryParams={[t]:r},e.parse(e.serialize(n)).queryParams[t]}function za(t,r,e,n,a,i){let o={};for(let[u,d]of Object.entries(n??{}))d!=null&&(o[u]=Array.isArray(d)?d.map(f=>Jo(u,f,i)):Jo(u,d,i));let c;t===r?c=e:c=_s(t,r,e);return new ie(hs(gs(c)),o,a)}function _s(t,r,e){let n=Object.create(null);return Object.entries(t.children).forEach(([a,i])=>{i===r?n[a]=e:n[a]=_s(i,r,e)}),new A(t.segments,n)}var Ar=class{isAbsolute;numberOfDoubleDots;commands;constructor(r,e,n){if(this.isAbsolute=r,this.numberOfDoubleDots=e,this.commands=n,r&&n.length>0&&Ir(n[0]))throw new w(4003,!1);let a=n.find(_n$1);if(a&&a!==mu(n))throw new w(4004,!1)}toRoot(){return this.isAbsolute&&this.commands.length===1&&this.commands[0]==`/`}};function Mu(t){if(typeof t[0]==`string`&&t.length===1&&t[0]===`/`)return new Ar(!0,0,t);let r=0,e=!1,n=t.reduce((a,i,o)=>{if(typeof i==`object`&&i!=null){if(i.outlets){let c={};return Object.entries(i.outlets).forEach(([s,u])=>{c[s]=typeof u==`string`?u.split(`/`):u}),[...a,{outlets:c}]}if(i.segmentPath)return[...a,i.segmentPath]}return typeof i!=`string`?[...a,i]:o===0?(i.split(`/`).forEach((c,s)=>{s==0&&c===`.`||(s==0&&c===``?e=!0:c===`..`?r++:c!=``&&a.push(c))}),a):[...a,i]},[]);return new Ar(e,r,n)}var Gt=class{segmentGroup;processChildren;index;constructor(r,e,n){this.segmentGroup=r,this.processChildren=e,this.index=n}};function Tu(t,r,e){if(t.isAbsolute)return new Gt(r,!0,0);if(!e)return new Gt(r,!1,NaN);if(e.parent===null)return new Gt(e,!0,0);let n=Ir(t.commands[0])?0:1;return Ou(e,e.segments.length-1+n,t.numberOfDoubleDots)}function Ou(t,r,e){let n=t,a=r,i=e;for(;i>a;){if(i-=a,n=n.parent,!n)throw new w(4005,!1);a=n.segments.length}return new Gt(n,!1,a-i)}function Pu(t){return _n$1(t[0])?t[0].outlets:{[y]:t}}function Ss(t,r,e){if(t??=new A([],{}),t.segments.length===0&&t.hasChildren())return gn$1(t,r,e);let n=Fu(t,r,e),a=e.slice(n.commandIndex);if(n.match&&n.pathIndex<t.segments.length){let i=new A(t.segments.slice(0,n.pathIndex),{});return i.children[y]=new A(t.segments.slice(n.pathIndex),t.children),gn$1(i,0,a)}else return n.match&&a.length===0?new A(t.segments,{}):n.match&&!t.hasChildren()?Ka(t,r,e):n.match?gn$1(t,0,a):Ka(t,r,e)}function gn$1(t,r,e){if(e.length===0)return new A(t.segments,{});{let n=Pu(e),a=Object.create(null);if(Object.keys(n).some(i=>i!==y)&&t.children[y]&&t.numberOfChildren===1&&t.children[y].segments.length===0){let i=gn$1(t.children[y],r,e);return new A(t.segments,i.children)}return Object.entries(n).forEach(([i,o])=>{typeof o==`string`&&(o=[o]),o!==null&&(a[i]=Ss(t.children[i],r,o))}),Object.entries(t.children).forEach(([i,o])=>{n[i]===void 0&&(a[i]=o)}),new A(t.segments,a)}}function Fu(t,r,e){let n=0,a=r,i={match:!1,pathIndex:0,commandIndex:0};for(;a<t.segments.length;){if(n>=e.length)return i;let o=t.segments[a],c=e[n];if(_n$1(c))break;let s=`${c}`,u=n<e.length-1?e[n+1]:null;if(a>0&&s===void 0)break;if(s&&u&&typeof u==`object`&&u.outlets===void 0){if(!es(s,u,o))return i;n+=2}else{if(!es(s,{},o))return i;n++}a++}return{match:!0,pathIndex:a,commandIndex:n}}function Ka(t,r,e){let n=t.segments.slice(0,r),a=0;for(;a<e.length;){let i=e[a];if(_n$1(i))return new A(n,ku(i.outlets));if(a===0&&Ir(e[0])){let s=t.segments[r];n.push(new Je(s.path,Qo(e[0]))),a++;continue}let o=_n$1(i)?i.outlets[y]:`${i}`,c=a<e.length-1?e[a+1]:null;o&&c&&Ir(c)?(n.push(new Je(o,Qo(c))),a+=2):(n.push(new Je(o,{})),a++)}return new A(n,{})}function ku(t){let r={};return Object.entries(t).forEach(([e,n])=>{typeof n==`string`&&(n=[n]),n!==null&&(r[e]=Ka(new A([],{}),0,n))}),r}function Qo(t){let r={};return Object.entries(t).forEach(([e,n])=>r[e]=`${n}`),r}function es(t,r,e){return t==e.path&&Re$1(r,e.parameters)}var Rr=class{rootInjector;outlet=null;route=null;children;attachRef=null;get injector(){return this.route?.snapshot._environmentInjector??this.rootInjector}constructor(r){this.rootInjector=r,this.children=new ht(this.rootInjector)}resetChildren(){this.children=new ht(this.rootInjector)}};var ht=(()=>{class t{rootInjector;contexts=/* @__PURE__ */ new Map;constructor(e){this.rootInjector=e}onChildOutletCreated(e,n){let a=this.getOrCreateContext(e);a.outlet=n,this.contexts.set(e,a)}onChildOutletDestroyed(e){let n=this.getContext(e);n&&(n.outlet=null,n.attachRef=null)}onOutletDeactivated(){let e=this.contexts;return this.contexts=/* @__PURE__ */ new Map,e}onOutletReAttached(e){this.contexts=e}getOrCreateContext(e){let n=this.getContext(e);return n||(n=new Rr(this.rootInjector),this.contexts.set(e,n)),n}getContext(e){return this.contexts.get(e)||null}static ɵfac=function(n){return new(n||t)(Pe$1(Ee$1))};static ɵprov=ae$2({token:t,factory:t.ɵfac,providedIn:`root`})}return t})();var Nr=class{_root;constructor(r){this._root=r}get root(){return this._root.value}parent(r){let e=this.pathFromRoot(r);return e.length>1?e[e.length-2]:null}children(r){let e=Ya(r,this._root);return e?e.children.map(n=>n.value):[]}firstChild(r){let e=Ya(r,this._root);return e&&e.children.length>0?e.children[0].value:null}siblings(r){let e=Za(r,this._root);return e.length<2?[]:e[e.length-2].children.map(a=>a.value).filter(a=>a!==r)}pathFromRoot(r){return Za(r,this._root).map(e=>e.value)}};function Ya(t,r){if(t===r.value)return r;for(let e of r.children){let n=Ya(t,e);if(n)return n}return null}function Za(t,r){if(t===r.value)return[r];for(let e of r.children){let n=Za(t,e);if(n.length)return n.unshift(r),n}return[]}var Q$1=class{value;children;constructor(r,e){this.value=r,this.children=e}toString(){return`TreeNode(${this.value})`}};function Vt$2(t){let r={};return t&&t.children.forEach(e=>r[e.value.outlet]=e),r}var Sn$1=class extends Nr{snapshot;constructor(r,e){super(r),this.snapshot=e,oi(this,r)}toString(){return this.snapshot.toString()}};function Ds(t,r){let e=Lu(t,r),n=new Kn([new Je(``,{})]),a=new Kn({}),i=new Kn({}),s=new Ue(n,a,new Kn({}),new Kn(``),i,y,t,e.root);return s.snapshot=e.root,new Sn$1(new Q$1(s,[]),e)}function Lu(t,r){return new Dn$1(``,new Q$1(new qt([],{},{},``,{},y,t,null,{},r),[]))}var Ue=class{urlSubject;paramsSubject;queryParamsSubject;fragmentSubject;dataSubject;outlet;component;snapshot;_futureSnapshot;_routerState;_paramMap;_queryParamMap;title;url;params;queryParams;fragment;data;resources;_localInjector;pending;paramsSignal;queryParamsSignal;paramMapSignal;queryParamMapSignal;fragmentSignal;dataSignal;constructor(r,e,n,a,i,o,c,s){this.urlSubject=r,this.paramsSubject=e,this.queryParamsSubject=n,this.fragmentSubject=a,this.dataSubject=i,this.outlet=o,this.component=c,this._futureSnapshot=s,this.title=this.dataSubject?.pipe(Ue$1(u=>u[Rn]))??Ay(void 0),this.url=r,this.params=e,this.queryParams=n,this.fragment=a,this.data=i}get routeConfig(){return this._futureSnapshot.routeConfig}get root(){return this._routerState.root}get parent(){return this._routerState.parent(this)}get firstChild(){return this._routerState.firstChild(this)}get children(){return this._routerState.children(this)}get pathFromRoot(){return this._routerState.pathFromRoot(this)}get paramMap(){return this._paramMap??=this.params.pipe(Ue$1(r=>pt(r))),this._paramMap}get queryParamMap(){return this._queryParamMap??=this.queryParams.pipe(Ue$1(r=>pt(r))),this._queryParamMap}toString(){return this.snapshot?this.snapshot.toString():`Future(${this._futureSnapshot})`}_setPending(r){this._futureSnapshot=r,this.pending?.set(!0)}};var Uu=`always`;function ii(t,r,e){let n,{routeConfig:a}=t;return r!==null&&(e===`always`||a?.path===``||!r.component&&!r.routeConfig?.loadComponent)?n={params:Object.keys(t.params).length===0?r.params:Object.freeze(z$1(z$1({},r.params),t.params)),data:Object.freeze(z$1(z$1({},r.data),t.data)),resolve:z$1(z$1(z$1(z$1({},t.data),r.data),a?.data),t._resolvedData)}:n={params:Object.freeze(z$1({},t.params)),data:Object.freeze(z$1({},t.data)),resolve:z$1(z$1({},t.data),t._resolvedData??{})},a&&Es(a)&&(n.resolve[Rn]=a.title),n}var qt=class{url;params;queryParams;fragment;data;outlet;component;routeConfig;_resolve;_resolvedData;_routerState;_paramMap;_queryParamMap;_environmentInjector;resources;get title(){return this.data?.[Rn]}constructor(r,e,n,a,i,o,c,s,u,d){this.url=r,this.params=e,this.queryParams=n,this.fragment=a,this.data=i,this.outlet=o,this.component=c,this.routeConfig=s,this._resolve=u,this._environmentInjector=d}get root(){return this._routerState.root}get parent(){return this._routerState.parent(this)}get firstChild(){return this._routerState.firstChild(this)}get children(){return this._routerState.children(this)}get pathFromRoot(){return this._routerState.pathFromRoot(this)}get paramMap(){return this._paramMap??=pt(this.params),this._paramMap}get queryParamMap(){return this._queryParamMap??=pt(this.queryParams),this._queryParamMap}toString(){return`Route(url:'${this.url.map(n=>n.toString()).join(`/`)}', path:'${this.routeConfig?this.routeConfig.path:``}')`}};var Dn$1=class extends Nr{url;constructor(r,e){super(e),this.url=r,oi(this,e)}toString(){return ws(this._root)}};function oi(t,r){r.value._routerState=t,r.children.forEach(e=>oi(t,e))}function ws(t){let r=t.children.length>0?` { ${t.children.map(ws).join(`, `)} } `:``;return`${t.value}${r}`}function $a(t){if(t.snapshot){let r=t.snapshot,e=t._futureSnapshot;t.snapshot=e,Re$1(r.queryParams,e.queryParams)||t.queryParamsSubject.next(e.queryParams),r.fragment!==e.fragment&&t.fragmentSubject.next(e.fragment),Re$1(r.params,e.params)||t.paramsSubject.next(e.params),du(r.url,e.url)||t.urlSubject.next(e.url),Re$1(r.data,e.data)||t.dataSubject.next(e.data)}else t.snapshot=t._futureSnapshot,t.dataSubject.next(t._futureSnapshot.data)}function Xa(t,r){let e=Re$1(t.params,r.params)&&gu(t.url,r.url),n=!t.parent!=!r.parent;return e&&!n&&(!t.parent||Xa(t.parent,r.parent))}function Es(t){return typeof t.title==`string`||t.title===null}var Cs=new S(``);var si=(()=>{class t{activated=null;get activatedComponentRef(){return this.activated}_activatedRoute=null;name=y;activateEvents=new Qe$1;deactivateEvents=new Qe$1;attachEvents=new Qe$1;detachEvents=new Qe$1;routerOutletData=Ij();parentContexts=v(ht);location=v(is$1);changeDetector=v(_j);inputBinder=v($r,{optional:!0});supportsBindingToComponentInputs=!0;ngOnChanges(e){if(e.name){let{firstChange:n,previousValue:a}=e.name;if(n)return;this.isTrackedInParentContexts(a)&&(this.deactivate(),this.parentContexts.onChildOutletDestroyed(a)),this.initializeOutletWithName()}}ngOnDestroy(){this.isTrackedInParentContexts(this.name)&&this.parentContexts.onChildOutletDestroyed(this.name),this.inputBinder?.unsubscribeFromRouteData(this)}isTrackedInParentContexts(e){return this.parentContexts.getContext(e)?.outlet===this}ngOnInit(){this.initializeOutletWithName()}initializeOutletWithName(){if(this.parentContexts.onChildOutletCreated(this.name,this),this.activated)return;let e=this.parentContexts.getContext(this.name);e?.route&&(e.attachRef?this.attach(e.attachRef,e.route):this.activateWith(e.route,e.injector))}get isActivated(){return!!this.activated}get component(){if(!this.activated)throw new w(4012,!1);return this.activated.instance}get activatedRoute(){if(!this.activated)throw new w(4012,!1);return this._activatedRoute}get activatedRouteData(){return this._activatedRoute?this._activatedRoute.snapshot.data:{}}detach(){if(!this.activated)throw new w(4012,!1);this.location.detach();let e=this.activated;return this.activated=null,this._activatedRoute=null,this.detachEvents.emit(e.instance),e}attach(e,n){this.activated=e,this._activatedRoute=n,this.location.insert(e.hostView),this.inputBinder?.bindActivatedRouteToOutletComponent(this,this.location.injector),this.attachEvents.emit(e.instance)}deactivate(){if(this.activated){let e=this.component;this.inputBinder?.unsubscribeFromRouteData(this),this.activated.destroy(),this.activated=null,this._activatedRoute=null,this.deactivateEvents.emit(e)}}activateWith(e,n){if(this.isActivated)throw new w(4013,!1);this._activatedRoute=e;let a=this.location,o=e.snapshot.component,c=this.parentContexts.getOrCreateContext(this.name).children,s=new Ja(e,c,a.injector,this.routerOutletData);this.activated=a.createComponent(o,{index:a.length,injector:s,environmentInjector:n}),this.changeDetector.markForCheck(),this.inputBinder?.bindActivatedRouteToOutletComponent(this,this.location.injector),this.activateEvents.emit(this.activated.instance)}static ɵfac=function(n){return new(n||t)};static ɵdir=fw({type:t,selectors:[[`router-outlet`]],inputs:{name:`name`,routerOutletData:[1,`routerOutletData`]},outputs:{activateEvents:`activate`,deactivateEvents:`deactivate`,attachEvents:`attach`,detachEvents:`detach`},exportAs:[`outlet`],features:[hE]})}return t})();var Ja=class{route;childContexts;parent;outletData;constructor(r,e,n,a){this.route=r,this.childContexts=e,this.parent=n,this.outletData=a}get(r,e){return r===Ue?this.route:r===ht?this.childContexts:r===Cs?this.outletData:this.parent.get(r,e)}};var $r=new S(``);var ci=(()=>{class t{static ɵfac=function(n){return new(n||t)};static ɵcmp=aw({type:t,selectors:[[`ng-component`]],exportAs:[`emptyRouterOutlet`],decls:1,vars:0,template:function(n,a){n&1&&Qg(0,`router-outlet`)},dependencies:[si],encapsulation:2,changeDetection:1})}return t})();function li(t){let r=t.children&&t.children.map(li),e=r?Q$2(z$1({},t),{children:r}):z$1({},t);return!e.component&&!e.loadComponent&&(r||e.loadChildren)&&e.outlet&&e.outlet!==y&&(e.component=ci),e}var bn$1=`imperative`;var V$1=(function(t){return t[t.NavigationStart=0]=`NavigationStart`,t[t.NavigationEnd=1]=`NavigationEnd`,t[t.NavigationCancel=2]=`NavigationCancel`,t[t.NavigationError=3]=`NavigationError`,t[t.RoutesRecognized=4]=`RoutesRecognized`,t[t.ResolveStart=5]=`ResolveStart`,t[t.ResolveEnd=6]=`ResolveEnd`,t[t.GuardsCheckStart=7]=`GuardsCheckStart`,t[t.GuardsCheckEnd=8]=`GuardsCheckEnd`,t[t.RouteConfigLoadStart=9]=`RouteConfigLoadStart`,t[t.RouteConfigLoadEnd=10]=`RouteConfigLoadEnd`,t[t.ChildActivationStart=11]=`ChildActivationStart`,t[t.ChildActivationEnd=12]=`ChildActivationEnd`,t[t.ActivationStart=13]=`ActivationStart`,t[t.ActivationEnd=14]=`ActivationEnd`,t[t.Scroll=15]=`Scroll`,t[t.NavigationSkipped=16]=`NavigationSkipped`,t})(V$1||{});var oe$1=class{id;url;constructor(r,e){this.id=r,this.url=e}};var gt=class extends oe$1{type=V$1.NavigationStart;navigationTrigger;restoredState;constructor(r,e,n=`imperative`,a=null){super(r,e),this.navigationTrigger=n,this.restoredState=a}toString(){return`NavigationStart(id: ${this.id}, url: '${this.url}')`}};var _e$1=class extends oe$1{urlAfterRedirects;type=V$1.NavigationEnd;constructor(r,e,n){super(r,e),this.urlAfterRedirects=n}toString(){return`NavigationEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}')`}};var q$1=(function(t){return t[t.Redirect=0]=`Redirect`,t[t.SupersededByNewNavigation=1]=`SupersededByNewNavigation`,t[t.NoDataFromResolver=2]=`NoDataFromResolver`,t[t.GuardRejected=3]=`GuardRejected`,t[t.Aborted=4]=`Aborted`,t})(q$1||{});var wn$1=(function(t){return t[t.IgnoredSameUrlNavigation=0]=`IgnoredSameUrlNavigation`,t[t.IgnoredByUrlHandlingStrategy=1]=`IgnoredByUrlHandlingStrategy`,t})(wn$1||{});var fe$1=class extends oe$1{reason;code;type=V$1.NavigationCancel;constructor(r,e,n,a){super(r,e),this.reason=n,this.code=a}toString(){return`NavigationCancel(id: ${this.id}, url: '${this.url}')`}};function Is(t){return t instanceof fe$1&&(t.code===q$1.Redirect||t.code===q$1.SupersededByNewNavigation)}var Be=class extends oe$1{reason;code;type=V$1.NavigationSkipped;constructor(r,e,n,a){super(r,e),this.reason=n,this.code=a}};var bt=class extends oe$1{error;target;type=V$1.NavigationError;constructor(r,e,n,a){super(r,e),this.error=n,this.target=a}toString(){return`NavigationError(id: ${this.id}, url: '${this.url}', error: ${this.error})`}};var En=class extends oe$1{urlAfterRedirects;state;type=V$1.RoutesRecognized;constructor(r,e,n,a){super(r,e),this.urlAfterRedirects=n,this.state=a}toString(){return`RoutesRecognized(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}};var xr=class extends oe$1{urlAfterRedirects;state;type=V$1.GuardsCheckStart;constructor(r,e,n,a){super(r,e),this.urlAfterRedirects=n,this.state=a}toString(){return`GuardsCheckStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}};var Mr=class extends oe$1{urlAfterRedirects;state;shouldActivate;type=V$1.GuardsCheckEnd;constructor(r,e,n,a,i){super(r,e),this.urlAfterRedirects=n,this.state=a,this.shouldActivate=i}toString(){return`GuardsCheckEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state}, shouldActivate: ${this.shouldActivate})`}};var Tr=class extends oe$1{urlAfterRedirects;state;type=V$1.ResolveStart;constructor(r,e,n,a){super(r,e),this.urlAfterRedirects=n,this.state=a}toString(){return`ResolveStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}};var Or=class extends oe$1{urlAfterRedirects;state;type=V$1.ResolveEnd;constructor(r,e,n,a){super(r,e),this.urlAfterRedirects=n,this.state=a}toString(){return`ResolveEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}};var Pr=class{route;type=V$1.RouteConfigLoadStart;constructor(r){this.route=r}toString(){return`RouteConfigLoadStart(path: ${this.route.path})`}};var Fr=class{route;type=V$1.RouteConfigLoadEnd;constructor(r){this.route=r}toString(){return`RouteConfigLoadEnd(path: ${this.route.path})`}};var kr=class{snapshot;type=V$1.ChildActivationStart;constructor(r){this.snapshot=r}toString(){return`ChildActivationStart(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||``}')`}};var Lr=class{snapshot;type=V$1.ChildActivationEnd;constructor(r){this.snapshot=r}toString(){return`ChildActivationEnd(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||``}')`}};var Ur=class{snapshot;type=V$1.ActivationStart;constructor(r){this.snapshot=r}toString(){return`ActivationStart(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||``}')`}};var Br=class{snapshot;type=V$1.ActivationEnd;constructor(r){this.snapshot=r}toString(){return`ActivationEnd(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||``}')`}};var Kt$1=class{};var Cn$1=class{};var Yt=class{url;navigationBehaviorOptions;constructor(r,e){this.url=r,this.navigationBehaviorOptions=e}};function Bu(t){return!(t instanceof Kt$1)&&!(t instanceof Yt)&&!(t instanceof Cn$1)}function ju(t,r,e){let n=/* @__PURE__ */ new Set;return{newlyCreatedRoutes:n,state:new Sn$1(In$1(t,r._root,e?e._root:void 0,n),r)}}function In$1(t,r,e,n){if(e&&t.shouldReuseRoute(r.value,e.value.snapshot)){let a=e.value;a._setPending(r.value);return new Q$1(a,zu(t,r,e,n))}else{if(t.shouldAttach(r.value)){let o=t.retrieve(r.value);if(o!==null){let c=o.route;return c.value._setPending(r.value),c.children=r.children.map(s=>In$1(t,s,void 0,n)),c}}let a=$u(r.value);a._setPending(r.value),n.add(a);return new Q$1(a,r.children.map(o=>In$1(t,o,void 0,n)))}}function zu(t,r,e,n){return r.children.map(a=>{for(let i of e.children)if(t.shouldReuseRoute(a.value,i.value.snapshot))return In$1(t,a,i,n);return In$1(t,a,void 0,n)})}function $u(t){return new Ue(new Kn(t.url),new Kn(t.params),new Kn(t.queryParams),new Kn(t.fragment),new Kn(t.data),t.outlet,t.component,t)}var tt$1=class t extends Error{redirectTo;navigationBehaviorOptions;constructor(r,e){super(),this.redirectTo=r,this.navigationBehaviorOptions=e,Object.setPrototypeOf(this,t.prototype)}};var As=`ngNavigationCancelingError`;function vn$1(t,r){let{redirectTo:e,navigationBehaviorOptions:n}=et$1(r)?{redirectTo:r,navigationBehaviorOptions:void 0}:r,a=Rs(!1,q$1.Redirect);return a.url=e,a.navigationBehaviorOptions=n,a}function Rs(t,r){let e=/* @__PURE__ */ new Error(`NavigationCancelingError: ${t||``}`);return e[As]=!0,e.cancellationCode=r,e}function Hu(t){return Ns(t)&&et$1(t.url)}function Ns(t){return!!t&&t[As]}var Qa=class{routeReuseStrategy;futureState;currState;forwardEvent;inputBindingEnabled;constructor(r,e,n,a,i){this.routeReuseStrategy=r,this.futureState=e,this.currState=n,this.forwardEvent=a,this.inputBindingEnabled=i}activate(r){let e=this.futureState._root,n=this.currState?this.currState._root:null;this.deactivateChildRoutes(e,n,r),$a(this.futureState.root),this.activateChildRoutes(e,n,r)}deactivateChildRoutes(r,e,n){let a=Vt$2(e);r.children.forEach(i=>{let o=i.value.outlet;this.deactivateRoutes(i,a[o],n),delete a[o]}),Object.values(a).forEach(i=>{this.deactivateRouteAndItsChildren(i,n)})}deactivateRoutes(r,e,n){let a=r.value,i=e?e.value:null;if(a===i)if(a.component){let o=n.getContext(a.outlet);o&&this.deactivateChildRoutes(r,e,o.children)}else this.deactivateChildRoutes(r,e,n);else i&&this.deactivateRouteAndItsChildren(e,n)}deactivateRouteAndItsChildren(r,e){r.value.component&&this.routeReuseStrategy.shouldDetach(r.value.snapshot)?this.detachAndStoreRouteSubtree(r,e):this.deactivateRouteAndOutlet(r,e)}detachAndStoreRouteSubtree(r,e){let n=e.getContext(r.value.outlet),a=n&&r.value.component?n.children:e,i=Vt$2(r);for(let o of Object.values(i))this.deactivateRouteAndItsChildren(o,a);if(n&&n.outlet){let o=n.outlet.detach(),c=n.children.contexts;n.resetChildren(),this.routeReuseStrategy.store(r.value.snapshot,{componentRef:o,route:r,contexts:c})}}deactivateRouteAndOutlet(r,e){let n=e.getContext(r.value.outlet),a=n&&r.value.component?n.children:e,i=Vt$2(r);for(let o of Object.values(i))this.deactivateRouteAndItsChildren(o,a);n&&(n.outlet&&(n.outlet.deactivate(),n.children.onOutletDeactivated()),n.attachRef=null,n.route=null),r.value._localInjector?.destroy()}activateChildRoutes(r,e,n){let a=Vt$2(e);r.children.forEach(i=>{this.activateRoutes(i,a[i.value.outlet],n),this.forwardEvent(new Br(i.value.snapshot))}),r.children.length&&this.forwardEvent(new Lr(r.value.snapshot))}activateRoutes(r,e,n){let a=r.value,i=e?e.value:null;if($a(a),a===i)if(a.component){let o=n.getOrCreateContext(a.outlet);this.activateChildRoutes(r,e,o.children)}else this.activateChildRoutes(r,e,n);else if(a.component){let o=n.getOrCreateContext(a.outlet);if(this.routeReuseStrategy.shouldAttach(a.snapshot)){let c=this.routeReuseStrategy.retrieve(a.snapshot);this.routeReuseStrategy.store(a.snapshot,null),o.children.onOutletReAttached(c.contexts),o.attachRef=c.componentRef,o.route=c.route.value,o.outlet&&o.outlet.attach(c.componentRef,c.route.value),$a(c.route.value),this.activateChildRoutes(r,null,o.children)}else o.attachRef=null,o.route=a,o.outlet&&o.outlet.activateWith(a,o.injector),this.activateChildRoutes(r,null,o.children)}else this.activateChildRoutes(r,null,n)}};var jr=class{path;route;constructor(r){this.path=r,this.route=this.path[this.path.length-1]}};var Wt$1=class{component;route;constructor(r,e){this.component=r,this.route=e}};function Vu(t,r,e){let n=t._root;return hn$1(n,r?r._root:null,e,[n.value])}function Gu(t){let r=t.routeConfig?t.routeConfig.canActivateChild:null;return!r||r.length===0?null:{node:t,guards:r}}function Jt$1(t,r){let e=Symbol(),n=r.get(t,e);return n===e?typeof t==`function`&&!mv(t)?t:r.get(t):n}function hn$1(t,r,e,n,a={canDeactivateChecks:[],canActivateChecks:[]}){let i=Vt$2(r);return t.children.forEach(o=>{Wu(o,i[o.value.outlet],e,n.concat([o.value]),a),delete i[o.value.outlet]}),Object.entries(i).forEach(([o,c])=>yn$1(c,e.getContext(o),e,a)),a}function Wu(t,r,e,n,a={canDeactivateChecks:[],canActivateChecks:[]}){let i=t.value,o=r?r.value:null,c=e?e.getContext(t.value.outlet):null;if(o&&i.routeConfig===o.routeConfig){let s=qu(o,i,i.routeConfig.runGuardsAndResolvers);s?a.canActivateChecks.push(new jr(n)):(i.data=o.data,i._resolvedData=o._resolvedData),i.component?hn$1(t,r,c?c.children:null,n,a):hn$1(t,r,e,n,a),s&&c&&c.outlet&&c.outlet.isActivated&&a.canDeactivateChecks.push(new Wt$1(c.outlet.component,o))}else o&&yn$1(r,c,e,a),a.canActivateChecks.push(new jr(n)),i.component?hn$1(t,null,c?c.children:null,n,a):hn$1(t,null,e,n,a);return a}function qu(t,r,e){if(typeof e==`function`)return Yo(r._environmentInjector,()=>e(t,r));switch(e){case`pathParamsChange`:return!ft(t.url,r.url);case`pathParamsOrQueryParamsChange`:return!ft(t.url,r.url)||!Re$1(t.queryParams,r.queryParams);case`always`:return!0;case`paramsOrQueryParamsChange`:return!Xa(t,r)||!Re$1(t.queryParams,r.queryParams);default:return!Xa(t,r)}}function yn$1(t,r,e,n){let a=Vt$2(t),i=t.value;Object.entries(a).forEach(([o,c])=>{i.component?r?yn$1(c,r.children.getContext(o),r.children,n):yn$1(c,null,null,n):yn$1(c,e?e.getContext(o):null,e,n)}),i.component?r&&r.outlet&&r.outlet.isActivated?n.canDeactivateChecks.push(new Wt$1(r.outlet.component,i)):n.canDeactivateChecks.push(new Wt$1(null,i)):n.canDeactivateChecks.push(new Wt$1(null,i))}function xn$1(t){return typeof t==`function`}function Ku(t){return typeof t==`boolean`}function Yu(t){return t&&xn$1(t.canLoad)}function Zu(t){return t&&xn$1(t.canActivate)}function Xu(t){return t&&xn$1(t.canActivateChild)}function Ju(t){return t&&xn$1(t.canDeactivate)}function Qu(t){return t&&xn$1(t.canMatch)}function xs(t){return t instanceof bt$1||t?.name===`EmptyError`}var yr=Symbol(`INITIAL_VALUE`);function Zt$1(){return sv(t=>By(t.map(r=>r.pipe(gn$2(1),ku$1(e=>{if(e instanceof tt$1)return Ay(e);throw e}),iv(yr)))).pipe(Ue$1(r=>{for(let e of r)if(e!==!0){if(e===yr)return yr;if(e===!1||ed(e))return e}return!0}),rr$1(r=>r!==yr),gn$2(1)))}function ed(t){return et$1(t)||t instanceof tt$1}function Ms(t){return new x(r=>{if(t.aborted){r.next(),r.complete();return}let e=()=>{r.next(),r.complete()};return t.addEventListener(`abort`,e),()=>t.removeEventListener(`abort`,e)})}function Ts(t){return av(Ms(t))}function td(t){return $e(r=>{let{targetSnapshot:e,currentSnapshot:n,guards:{canActivateChecks:a,canDeactivateChecks:i}}=r;return i.length===0&&a.length===0?Ay(Q$2(z$1({},r),{guardsResult:!0})):nd(i,e,n).pipe($e(o=>o&&Ku(o)?rd(e,a,t):Ay(o)),Ue$1(o=>Q$2(z$1({},r),{guardsResult:o})))})}function nd(t,r,e){return Re$2(t).pipe($e(n=>cd(n.component,n.route,e,r)),ev(n=>n!==!0,!0))}function rd(t,r,e){return Re$2(r).pipe(zy(n=>hn$2(id(n.route.parent,e),ad(n.route,e),sd(t,n.path),od(t,n.route))),ev(n=>n!==!0,!0))}function ad(t,r){return t!==null&&r&&r(new Ur(t)),Ay(!0)}function id(t,r){return t!==null&&r&&r(new kr(t)),Ay(!0)}function od(t,r){let e=r.routeConfig?r.routeConfig.canActivate:null;if(!e||e.length===0)return Ay(!0);let n=e.map(a=>$y(()=>{let i=r._environmentInjector,o=Jt$1(a,i);return Nn(Zu(o)?o.canActivate(r,t):Yo(i,()=>o(r,t))).pipe(ev())}));return Ay(n).pipe(Zt$1())}function sd(t,r){let e=r[r.length-1],a=r.slice(0,r.length-1).reverse().map(i=>Gu(i)).filter(i=>i!==null).map(i=>$y(()=>{let o=i.guards.map(c=>{let s=i.node._environmentInjector,u=Jt$1(c,s);return Nn(Xu(u)?u.canActivateChild(e,t):Yo(s,()=>u(e,t))).pipe(ev())});return Ay(o).pipe(Zt$1())}));return Ay(a).pipe(Zt$1())}function cd(t,r,e,n){let a=r&&r.routeConfig?r.routeConfig.canDeactivate:null;if(!a||a.length===0)return Ay(!0);let i=a.map(o=>{let c=r._environmentInjector,s=Jt$1(o,c);return ui(()=>Ju(s)?s.canDeactivate(t,r,e,n):Yo(c,()=>s(t,r,e,n))).pipe(ev())});return Ay(i).pipe(Zt$1())}function ld(t,r,e,n,a){let i=r.canLoad;if(i===void 0||i.length===0)return Ay(!0);let o=i.map(c=>{let s=Jt$1(c,t),u=ui(()=>Yu(s)?s.canLoad(r,e):Yo(t,()=>s(r,e)));return a?u.pipe(Ts(a)):u});return Ay(o).pipe(Zt$1(),Os(n))}function ui(t){try{return Nn(t())}catch(r){return new x(e=>e.error(r))}}function Os(t){return Iy(ju$1(r=>{if(typeof r!=`boolean`)throw vn$1(t,r)}),Ue$1(r=>r===!0))}function ud(t,r,e,n,a,i){let o=r.canMatch;if(!o||o.length===0)return Ay(!0);let c=o.map(s=>{let u=Jt$1(s,t);return ui(()=>Qu(u)?u.canMatch(r,e,a):Yo(t,()=>u(r,e,a))).pipe(Ts(i))});return Ay(c).pipe(Zt$1(),Os(n))}var Ae$1=class t extends Error{name=`NoMatch`;segmentGroup;constructor(r){super(),this.segmentGroup=r||null,Object.setPrototypeOf(this,t.prototype)}};var An=class t extends Error{urlTree;name=`AbsoluteRedirect`;constructor(r){super(),this.urlTree=r,Object.setPrototypeOf(this,t.prototype)}};function dd(t){throw new w(4e3,!1)}function md(t){throw Rs(!1,q$1.GuardRejected)}var ei=class{urlSerializer;urlTree;constructor(r,e){this.urlSerializer=r,this.urlTree=e}async lineralizeSegments(r,e){let n=[],a=e.root;for(;;){if(n=n.concat(a.segments),a.numberOfChildren===0)return n;if(a.numberOfChildren>1||!a.children[y])throw dd(`${r.redirectTo}`);a=a.children[y]}}async applyRedirectCommands(r,e,n,a,i){let o=await fd(e,a,i);if(o instanceof ie)throw new An(o);let c=this.applyRedirectCreateUrlTree(o,this.urlSerializer.parse(o),r,n);if(o[0]===`/`)throw new An(c);return c}applyRedirectCreateUrlTree(r,e,n,a){return new ie(this.createSegmentGroup(r,e.root,n,a),this.createQueryParams(e.queryParams,this.urlTree.queryParams),e.fragment)}createQueryParams(r,e){let n={};return Object.entries(r).forEach(([a,i])=>{if(typeof i==`string`&&i[0]===`:`){let c=i.substring(1);n[a]=e[c]}else n[a]=i}),n}createSegmentGroup(r,e,n,a){let i=this.createSegments(r,e.segments,n,a),o=Object.create(null);return Object.entries(e.children).forEach(([c,s])=>{o[c]=this.createSegmentGroup(r,s,n,a)}),new A(i,o)}createSegments(r,e,n,a){return e.map(i=>i.path[0]===`:`?this.findPosParam(r,i,a):this.findOrReturn(i,n))}findPosParam(r,e,n){let a=n[e.path.substring(1)];if(!a)throw new w(4001,!1);return a}findOrReturn(r,e){let n=0;for(let a of e){if(a.path===r.path)return e.splice(n),a;n++}return r}};function fd(t,r,e){if(typeof t==`string`)return Promise.resolve(t);let n=t;return wr(Nn(Yo(e,()=>n(r))))}function pd(t,r){return t.providers&&!t._injector&&(t._injector=Sl$1(t.providers,r,`Route: ${t.path}`)),t._injector??r}function Ne(t){return t.outlet||y}function hd(t,r){let e=t.filter(n=>Ne(n)===r);return e.push(...t.filter(n=>Ne(n)!==r)),e}var ti={matched:!1,consumedSegments:[],remainingSegments:[],parameters:{},positionalParamSegments:{}};function Ps(t){return{routeConfig:t.routeConfig,url:t.url,params:t.params,queryParams:t.queryParams,fragment:t.fragment,data:t.data,outlet:t.outlet,title:t.title,paramMap:t.paramMap,queryParamMap:t.queryParamMap}}function gd(t,r,e,n,a,i,o){let c=Fs(t,r,e);if(!c.matched)return Ay(c);let s=Ps(i(c));return n=pd(r,n),ud(n,r,e,a,s,o).pipe(Ue$1(u=>u===!0?c:z$1({},ti)))}function Fs(t,r,e){if(r.path===``)return r.pathMatch===`full`&&(t.hasChildren()||e.length>0)?z$1({},ti):{matched:!0,consumedSegments:[],remainingSegments:e,parameters:{},positionalParamSegments:{}};let a=(r.matcher||as)(e,t,r);if(!a)return z$1({},ti);let i={};Object.entries(a.posParams??{}).forEach(([c,s])=>{i[c]=s.path});let o=a.consumed.length>0?z$1(z$1({},i),a.consumed[a.consumed.length-1].parameters):i;return{matched:!0,consumedSegments:a.consumed,remainingSegments:e.slice(a.consumed.length),parameters:o,positionalParamSegments:a.posParams??{}}}function ts(t,r,e,n){return e.length>0&&yd(t,e,n)?{segmentGroup:new A(r,vd(n,new A(e,t.children))),slicedSegments:[]}:e.length===0&&_d(t,e,n)?{segmentGroup:new A(t.segments,bd(t,e,n,t.children)),slicedSegments:e}:{segmentGroup:new A(t.segments,t.children),slicedSegments:e}}function bd(t,r,e,n){let a={};for(let i of e)if(Hr(t,r,i)&&!n[Ne(i)]){let o=new A([],{});a[Ne(i)]=o}return z$1(z$1({},n),a)}function vd(t,r){let e={};e[y]=r;for(let n of t)if(n.path===``&&Ne(n)!==y){let a=new A([],{});e[Ne(n)]=a}return e}function yd(t,r,e){return e.some(n=>Hr(t,r,n)&&Ne(n)!==y)}function _d(t,r,e){return e.some(n=>Hr(t,r,n))}function Hr(t,r,e){return(t.hasChildren()||r.length>0)&&e.pathMatch===`full`?!1:e.path===``}function Sd(t,r,e){return r.length===0&&!t.hasChildren()}var ni=class{};async function Dd(t,r,e,n,a,i,o,c){return new ri(t,r,e,n,a,o,i,c).recognize()}var wd=31;var ri=class{injector;configLoader;rootComponentType;config;urlTree;paramsInheritanceStrategy;urlSerializer;abortSignal;applyRedirects;absoluteRedirectCount=0;allowRedirects=!0;queryParams;constructor(r,e,n,a,i,o,c,s){this.injector=r,this.configLoader=e,this.rootComponentType=n,this.config=a,this.urlTree=i,this.paramsInheritanceStrategy=o,this.urlSerializer=c,this.abortSignal=s,this.applyRedirects=new ei(this.urlSerializer,this.urlTree),this.queryParams=Object.freeze(z$1({},this.urlTree.queryParams))}noMatchError(r){return new w(4002,`'${r.segmentGroup}'`)}async recognize(){let r=ts(this.urlTree.root,[],[],this.config).segmentGroup,{children:e,rootSnapshot:n}=await this.match(r),i=new Dn$1(``,new Q$1(n,e)),o=bs(n,[],this.urlTree.queryParams,this.urlTree.fragment);return o.queryParams=this.urlTree.queryParams,i.url=this.urlSerializer.serialize(o),{state:i,tree:o}}async match(r){let e=new qt([],Object.freeze({}),this.queryParams,this.urlTree.fragment,Object.freeze({}),y,this.rootComponentType,null,{},this.injector);try{return{children:await this.processSegmentGroup(this.injector,this.config,r,y,e),rootSnapshot:e}}catch(n){if(n instanceof An)return this.absoluteRedirectCount++,this.absoluteRedirectCount>wd&&(this.allowRedirects=!1),this.urlTree=n.urlTree,this.queryParams=Object.freeze(z$1({},this.urlTree.queryParams)),this.match(n.urlTree.root);throw n instanceof Ae$1?this.noMatchError(n):n}}async processSegmentGroup(r,e,n,a,i){if(n.segments.length===0&&n.hasChildren())return this.processChildren(r,e,n,i);let o=await this.processSegment(r,e,n,n.segments,a,!0,i);return o instanceof Q$1?[o]:[]}async processChildren(r,e,n,a){let i=[];for(let s of Object.keys(n.children))s===`primary`?i.unshift(s):i.push(s);let o=[];for(let s of i){let u=n.children[s],d=hd(e,s),f=await this.processSegment(r,d,u,u.segments,s,!0,a);f instanceof Q$1&&o.push(f)}let c=ks(o);return Ed(c),c}async processSegment(r,e,n,a,i,o,c){for(let s of e)try{return await this.processSegmentAgainstRoute(s._injector??r,e,s,n,a,i,o,c)}catch(u){if(u instanceof Ae$1||xs(u))continue;throw u}if(Sd(n,a))return new ni;throw new Ae$1(n)}async processSegmentAgainstRoute(r,e,n,a,i,o,c,s){if(Ne(n)!==o&&(o===y||!Hr(a,i,n)||!n.children?.length&&!n.loadChildren||i.length===0&&!a.hasChildren()))throw new Ae$1(a);if(n.redirectTo===void 0)return this.matchSegmentAgainstRoute(r,a,n,i,o,s);if(this.allowRedirects&&c)return this.expandSegmentAgainstRouteUsingRedirect(r,a,e,n,i,o,s);throw new Ae$1(a)}async expandSegmentAgainstRouteUsingRedirect(r,e,n,a,i,o,c){let{matched:s,parameters:u,consumedSegments:d,positionalParamSegments:f,remainingSegments:p}=Fs(e,a,i);if(!s)throw new Ae$1(e);let _=this.createSnapshot(r,a,i,u,c);if(this.abortSignal.aborted)throw new Error(this.abortSignal.reason);let R=await this.applyRedirects.applyRedirectCommands(d,a.redirectTo,f,Ps(_),r),N=await this.applyRedirects.lineralizeSegments(a,R);return this.processSegment(r,n,e,N.concat(p),o,!1,c)}createSnapshot(r,e,n,a,i){let o=new qt(n,a,this.queryParams,this.urlTree.fragment,Ad(e),Ne(e),e.component??e._loadedComponent??null,e,Rd(e),r),c=ii(o,i,this.paramsInheritanceStrategy);return o.params=c.params,o.data=c.data,o}async matchSegmentAgainstRoute(r,e,n,a,i,o){if(this.abortSignal.aborted)throw new Error(this.abortSignal.reason);let c=U=>this.createSnapshot(r,n,U.consumedSegments,U.parameters,o),s=await wr(gd(e,n,a,r,this.urlSerializer,c,this.abortSignal));if(n.path===`**`&&(e.children={}),!s?.matched)throw new Ae$1(e);r=n._injector??r;let{routes:u}=await this.getChildConfig(r,n,a),d=n._loadedInjector??r,{parameters:f,consumedSegments:p,remainingSegments:_}=s,R=this.createSnapshot(r,n,p,f,o),N=Ne(n)===i,{segmentGroup:D,slicedSegments:w}=N?ts(e,p,_,u):{segmentGroup:e,slicedSegments:_};if(N&&w.length===0&&D.hasChildren())return new Q$1(R,await this.processChildren(d,u,D,R));if(N&&u.length===0&&w.length===0)return new Q$1(R,[]);let x=await this.processSegment(d,u,D,w,N?y:i,!0,R);if(!N&&!(x instanceof Q$1))throw new Ae$1(e);return new Q$1(R,x instanceof Q$1?[x]:[])}async getChildConfig(r,e,n){if(e.children)return{routes:e.children,injector:r};if(e.loadChildren){if(e._loadedRoutes!==void 0){let i=e._loadedNgModuleFactory;return i&&!e._loadedInjector&&(e._loadedInjector=i.create(r).injector),{routes:e._loadedRoutes,injector:e._loadedInjector}}if(this.abortSignal.aborted)throw new Error(this.abortSignal.reason);if(await wr(ld(r,e,n,this.urlSerializer,this.abortSignal))){let i=await this.configLoader.loadChildren(r,e);return e._loadedRoutes=i.routes,e._loadedInjector=i.injector,e._loadedNgModuleFactory=i.factory,i}throw md(e)}return{routes:[],injector:r}}};function Ed(t){t.sort((r,e)=>r.value.outlet===y?-1:e.value.outlet===y?1:r.value.outlet.localeCompare(e.value.outlet))}function Cd(t){let r=t.value.routeConfig;return r&&r.path===``}function ks(t){let r=[],e=/* @__PURE__ */ new Set;for(let a of t){if(!Cd(a)){r.push(a);continue}let i=r.find(o=>a.value.routeConfig===o.value.routeConfig);i!==void 0?(i.children.push(...a.children),e.add(i)):r.push(a)}for(let a of e){let i=ks(a.children);r.push(new Q$1(a.value,i))}let n=r.filter(a=>!e.has(a));return Id(n),n}function Id(t){let r=Object.create(null);t.forEach(e=>{let n=r[e.value.outlet];if(n){n.url.map(o=>o.toString()).join(`/`);e.value.url.map(o=>o.toString()).join(`/`);throw new w(4006,!1)}r[e.value.outlet]=e.value})}function Ad(t){return t.data||{}}function Rd(t){return t.resolve||{}}function Nd(t,r,e,n,a,i,o){return $e(async c=>{let{state:s,tree:u}=await Dd(t,r,e,n,c.extractedUrl,a,i,o);return Q$2(z$1({},c),{targetSnapshot:s,urlAfterRedirects:u})})}function xd(t){return $e(r=>{let{targetSnapshot:e,guards:{canActivateChecks:n}}=r;if(!n.length)return Ay(r);let a=new Set(n.map(c=>c.route)),i=/* @__PURE__ */ new Set;for(let c of a)if(!i.has(c))for(let s of Ls(c))i.add(s);let o=0;return Re$2(i).pipe(zy(c=>a.has(c)?Md(c,e,t):(c.data=ii(c,c.parent,t).resolve,Ay(void 0))),ju$1(()=>o++),tv(1),$e(c=>o===i.size?Ay(r):At$1))})}function Ls(t){return[t,...t.children.map(e=>Ls(e)).flat()]}function Md(t,r,e){let n=t.routeConfig,a=t._resolve;return n?.title!==void 0&&!Es(n)&&(a[Rn]=n.title),$y(()=>(t.data=ii(t,t.parent,e).resolve,Td(a,t,r).pipe(Ue$1(i=>(t._resolvedData=i,t.data=z$1(z$1({},t.data),i),null)))))}function Td(t,r,e){let n=Va(t);if(n.length===0)return Ay({});let a={};return Re$2(n).pipe($e(i=>Od(t[i],r,e).pipe(ev(),ju$1(o=>{if(o instanceof tt$1)throw vn$1(new Qe,o);a[i]=o}))),tv(1),Ue$1(()=>a),ku$1(i=>xs(i)?At$1:Oy(i)))}function Od(t,r,e){let n=r._environmentInjector,a=Jt$1(t,n);return Nn(a.resolve?a.resolve(r,e):Yo(n,()=>a(r,e)))}var Us=new S(``);function ai(t){return sv(r=>{let e=t(r);return e?Re$2(e).pipe(Ue$1(()=>r)):Ay(r)})}var di=(()=>{class t{buildTitle(e){let n,a=e.root;for(;a!==void 0;)n=this.getResolvedTitleForRoute(a)??n,a=a.children.find(i=>i.outlet===y);return n}getResolvedTitleForRoute(e){return e.data[Rn]}static ɵfac=function(n){return new(n||t)};static ɵprov=$r$1({token:t,factory:()=>v(Bs)})}return t})();var Bs=(()=>{class t extends di{title;constructor(e){super(),this.title=e}updateTitle(e){let n=this.buildTitle(e);n!==void 0&&this.title.setTitle(n)}static ɵfac=function(n){return new(n||t)(Pe$1(Ko))};static ɵprov=ae$2({token:t,factory:t.ɵfac,providedIn:`root`})}return t})();var Qt$1=new S(``,{factory:()=>({})});var Mn$1=new S(``);var mi=(()=>{class t{componentLoaders=/* @__PURE__ */ new WeakMap;childrenLoaders=/* @__PURE__ */ new WeakMap;onLoadStartListener;onLoadEndListener;compiler=v(ub);async loadComponent(e,n){if(this.componentLoaders.get(n))return this.componentLoaders.get(n);if(n._loadedComponent)return Promise.resolve(n._loadedComponent);this.onLoadStartListener&&this.onLoadStartListener(n);let a=(async()=>{try{let i=await os(Yo(e,()=>n.loadComponent())),o=await zs(vj(i));return this.onLoadEndListener&&this.onLoadEndListener(n),n._loadedComponent=o,o}finally{this.componentLoaders.delete(n)}})();return this.componentLoaders.set(n,a),a}loadChildren(e,n){if(this.childrenLoaders.get(n))return this.childrenLoaders.get(n);if(n._loadedRoutes)return Promise.resolve({routes:n._loadedRoutes,injector:n._loadedInjector});this.onLoadStartListener&&this.onLoadStartListener(n);let a=(async()=>{try{let i=await js(n,this.compiler,e,this.onLoadEndListener);return n._loadedRoutes=i.routes,n._loadedInjector=i.injector,n._loadedNgModuleFactory=i.factory,i}finally{this.childrenLoaders.delete(n)}})();return this.childrenLoaders.set(n,a),a}static ɵfac=function(n){return new(n||t)};static ɵprov=$r$1({token:t,factory:t.ɵfac})}return t})();async function js(t,r,e,n){let a=await os(Yo(e,()=>t.loadChildren())),i=await zs(vj(a)),o;i instanceof Mg||Array.isArray(i)?o=i:o=await r.compileModuleAsync(i),n&&n(t);let c,s,d;return Array.isArray(o)?s=o:(c=o.create(e).injector,d=o,s=c.get(Mn$1,[],{optional:!0,self:!0}).flat()),{routes:s.map(li),injector:c,factory:d}}async function zs(t){return t}var Vr=(()=>{class t{static ɵfac=function(n){return new(n||t)};static ɵprov=$r$1({token:t,factory:()=>v(Pd)})}return t})();var Pd=(()=>{class t{shouldProcessUrl(e){return!0}extract(e){return e}merge(e,n){return e}static ɵfac=function(n){return new(n||t)};static ɵprov=$r$1({token:t,factory:t.ɵfac})}return t})();var $s=new S(``);var Fd=()=>{};var Hs=new S(``);var Vs=(()=>{class t{currentNavigation=Et$1(null,{equal:()=>!1});currentTransition=null;lastSuccessfulNavigation=Et$1(null);events=new ee;transitionAbortWithErrorSubject=new ee;configLoader=v(mi);environmentInjector=v(Ee$1);destroyRef=v(fe$2);urlSerializer=v(Xt);rootContexts=v(ht);location=v(jt);inputBindingEnabled=v($r,{optional:!0})!==null;titleStrategy=v(di);options=v(Qt$1,{optional:!0})||{};paramsInheritanceStrategy=this.options.paramsInheritanceStrategy||Uu;urlHandlingStrategy=v(Vr);createViewTransition=v($s,{optional:!0});navigationErrorHandler=v(Hs,{optional:!0});routerResourcesFeature=v(Us,{optional:!0});navigationId=0;get hasRequestedNavigation(){return this.navigationId!==0}transitions;afterPreactivation=()=>Ay(void 0);rootComponentType=null;destroyed=!1;constructor(){let e=a=>this.events.next(new Pr(a)),n=a=>this.events.next(new Fr(a));this.configLoader.onLoadEndListener=n,this.configLoader.onLoadStartListener=e,this.destroyRef.onDestroy(()=>{this.destroyed=!0})}complete(){this.transitions?.complete()}handleNavigationRequest(e){let n=++this.navigationId;le$1(()=>{this.transitions?.next(Q$2(z$1({},e),{extractedUrl:this.urlHandlingStrategy.extract(e.rawUrl),targetSnapshot:null,targetRouterState:null,guards:{canActivateChecks:[],canDeactivateChecks:[]},guardsResult:null,id:n,routesRecognizeHandler:{},beforeActivateHandler:{}}))})}setupNavigations(e){return this.transitions=new Kn(null),this.transitions.pipe(rr$1(n=>n!==null),sv(n=>{let a=!0,i=!1,o=new AbortController,c=()=>!i&&this.currentTransition?.id===n.id;return Ay(n).pipe(sv(s=>{if(this.navigationId>n.id)return this.cancelNavigationTransition(n,``,q$1.SupersededByNewNavigation),At$1;this.currentTransition=n;let u=this.lastSuccessfulNavigation();this.currentNavigation.set({id:s.id,initialUrl:s.rawUrl,extractedUrl:s.extractedUrl,targetBrowserUrl:typeof s.extras.browserUrl==`string`?this.urlSerializer.parse(s.extras.browserUrl):s.extras.browserUrl,trigger:s.source,extras:s.extras,previousNavigation:u?Q$2(z$1({},u),{previousNavigation:null}):null,abort:()=>o.abort(),routesRecognizeHandler:s.routesRecognizeHandler,beforeActivateHandler:s.beforeActivateHandler});let d=!e.navigated||this.isUpdatingInternalState()||this.isUpdatedBrowserUrl(),f=s.extras.onSameUrlNavigation??e.onSameUrlNavigation;if(!d&&f!==`reload`)return this.events.next(new Be(s.id,this.urlSerializer.serialize(s.rawUrl),``,wn$1.IgnoredSameUrlNavigation)),s.resolve(!1),At$1;if(this.urlHandlingStrategy.shouldProcessUrl(s.rawUrl))return Ay(s).pipe(sv(p=>(this.events.next(new gt(p.id,this.urlSerializer.serialize(p.extractedUrl),p.source,p.restoredState)),p.id!==this.navigationId?At$1:Promise.resolve(p))),Nd(this.environmentInjector,this.configLoader,this.rootComponentType,e.config,this.urlSerializer,this.paramsInheritanceStrategy,o.signal),ju$1(p=>{n.targetSnapshot=p.targetSnapshot,n.urlAfterRedirects=p.urlAfterRedirects,this.currentNavigation.update(_=>(_.finalUrl=p.urlAfterRedirects,_)),this.events.next(new Cn$1)}),sv(p=>Re$2(n.routesRecognizeHandler.deferredHandle??Ay(void 0)).pipe(Ue$1(()=>p))),ju$1(()=>{let p=new En(s.id,this.urlSerializer.serialize(s.extractedUrl),this.urlSerializer.serialize(s.urlAfterRedirects),s.targetSnapshot);this.events.next(p)}));if(d&&this.urlHandlingStrategy.shouldProcessUrl(s.currentRawUrl)){let{id:p,extractedUrl:_,source:R,restoredState:N,extras:D}=s,w=new gt(p,this.urlSerializer.serialize(_),R,N);this.events.next(w);let x=Ds(this.rootComponentType,this.environmentInjector).snapshot;return this.currentTransition=n=Q$2(z$1({},s),{targetSnapshot:x,urlAfterRedirects:_,extras:Q$2(z$1({},D),{skipLocationChange:!1,replaceUrl:!1})}),this.currentNavigation.update(U=>(U.finalUrl=_,U)),Ay(n)}else return this.events.next(new Be(s.id,this.urlSerializer.serialize(s.extractedUrl),``,wn$1.IgnoredByUrlHandlingStrategy)),s.resolve(!1),At$1}),Ue$1(s=>{let u=new xr(s.id,this.urlSerializer.serialize(s.extractedUrl),this.urlSerializer.serialize(s.urlAfterRedirects),s.targetSnapshot);return this.events.next(u),this.currentTransition=n=Q$2(z$1({},s),{guards:Vu(s.targetSnapshot,s.currentSnapshot,this.rootContexts)}),n}),td(s=>this.events.next(s)),sv(s=>{if(n.guardsResult=s.guardsResult,s.guardsResult&&typeof s.guardsResult!=`boolean`)throw vn$1(this.urlSerializer,s.guardsResult);let u=new Mr(s.id,this.urlSerializer.serialize(s.extractedUrl),this.urlSerializer.serialize(s.urlAfterRedirects),s.targetSnapshot,!!s.guardsResult);if(this.events.next(u),!c())return At$1;if(!s.guardsResult)return this.cancelNavigationTransition(s,``,q$1.GuardRejected),At$1;if(s.guards.canActivateChecks.length===0)return Ay(s);let d=new Tr(s.id,this.urlSerializer.serialize(s.extractedUrl),this.urlSerializer.serialize(s.urlAfterRedirects),s.targetSnapshot);if(this.events.next(d),!c())return At$1;let f=!1;return Ay(s).pipe(xd(this.paramsInheritanceStrategy),ju$1({next:()=>{f=!0;let p=new Or(s.id,this.urlSerializer.serialize(s.extractedUrl),this.urlSerializer.serialize(s.urlAfterRedirects),s.targetSnapshot);this.events.next(p)},complete:()=>{f||this.cancelNavigationTransition(s,``,q$1.NoDataFromResolver)}}))}),ai(s=>{let u=f=>{let p=[];if(f.routeConfig?._loadedComponent)f.component=f.routeConfig?._loadedComponent;else if(f.routeConfig?.loadComponent){let _=f._environmentInjector;p.push(this.configLoader.loadComponent(_,f.routeConfig).then(R=>{f.component=R}))}for(let _ of f.children)p.push(...u(_));return p},d=u(s.targetSnapshot.root);return d.length===0?Ay(s):Re$2(Promise.all(d).then(()=>s))}),sv(s=>{let{newlyCreatedRoutes:u,state:d}=ju(e.routeReuseStrategy,s.targetSnapshot,s.currentRouterState);return this.currentTransition=n=s=Q$2(z$1({},s),{targetRouterState:d,newlyCreatedRoutes:u}),this.currentNavigation.update(f=>(f.targetRouterState=d,f)),Ay(s)}),this.routerResourcesFeature?.setupAndRunResources(o.signal)??(s=>s),ai(()=>this.afterPreactivation()),sv(()=>{let{currentSnapshot:s,targetSnapshot:u}=n,d=this.createViewTransition?.(this.environmentInjector,s.root,u.root,n.hasUAVisualTransition);return d?Re$2(d).pipe(Ue$1(()=>n)):Ay(n)}),gn$2(1),sv(s=>{a=!1,this.events.next(new Kt$1);let u=n.beforeActivateHandler.deferredHandle;return u?Re$2(u.then(()=>s)):Ay(s)}),ju$1(s=>{new Qa(e.routeReuseStrategy,n.targetRouterState,n.currentRouterState,u=>this.events.next(u),this.inputBindingEnabled).activate(this.rootContexts),s.newlyCreatedRoutes?.clear(),c()&&(Gs(s.targetRouterState),i=!0,this.currentNavigation.update(u=>(u.abort=Fd,u)),this.lastSuccessfulNavigation.set(le$1(this.currentNavigation)),this.events.next(new _e$1(s.id,this.urlSerializer.serialize(s.extractedUrl),this.urlSerializer.serialize(s.urlAfterRedirects))),this.titleStrategy?.updateTitle(s.targetRouterState.snapshot),s.resolve(!0))}),av(Ms(o.signal).pipe(rr$1(()=>!i&&a),ju$1(()=>{this.cancelNavigationTransition(n,o.signal.reason+``,q$1.Aborted)}))),ju$1({complete:()=>{i=!0}}),av(this.transitionAbortWithErrorSubject.pipe(ju$1(s=>{throw s}))),Xy(()=>{o.abort(),i||this.cancelNavigationTransition(n,``,q$1.SupersededByNewNavigation),this.currentTransition?.id===n.id&&(this.currentNavigation.set(null),this.currentTransition=null)}),ku$1(s=>{if(i=!0,ns(n),this.destroyed)return n.resolve(!1),At$1;if(s instanceof tt$1&&(s=vn$1(this.urlSerializer,s)),Ns(s))this.events.next(new fe$1(n.id,this.urlSerializer.serialize(n.extractedUrl),s.message,s.cancellationCode)),Hu(s)?this.events.next(new Yt(s.url,s.navigationBehaviorOptions)):n.resolve(!1);else{let u=new bt(n.id,this.urlSerializer.serialize(n.extractedUrl),s,n.targetSnapshot??void 0);try{let d=Yo(this.environmentInjector,()=>this.navigationErrorHandler?.(u));if(d instanceof tt$1){let{message:f,cancellationCode:p}=vn$1(this.urlSerializer,d);this.events.next(new fe$1(n.id,this.urlSerializer.serialize(n.extractedUrl),f,p)),this.events.next(new Yt(d.redirectTo,d.navigationBehaviorOptions))}else throw this.events.next(u),s}catch(d){this.options.resolveNavigationPromiseOnError?n.resolve(!1):n.reject(d)}}return At$1}))}))}cancelNavigationTransition(e,n,a){ns(e);let i=new fe$1(e.id,this.urlSerializer.serialize(e.extractedUrl),n,a);this.events.next(i),e.resolve(!1)}isUpdatingInternalState(){return this.currentTransition?.extractedUrl.toString()!==this.currentTransition?.currentUrlTree.toString()}isUpdatedBrowserUrl(){let e=this.urlHandlingStrategy.extract(this.urlSerializer.parse(this.location.path(!0))),n=le$1(this.currentNavigation),a=n?.targetBrowserUrl??n?.extractedUrl;return e.toString()!==a?.toString()&&!n?.extras.skipLocationChange}static ɵfac=function(n){return new(n||t)};static ɵprov=$r$1({token:t,factory:t.ɵfac})}return t})();function kd(t){return t!==bn$1}function ns(t){for(let r of t.newlyCreatedRoutes??[])r._localInjector?.destroy(),r._localInjector=void 0;Gs(t.targetRouterState)}function Gs(t){if(!t)return;let r=e=>{e.value.pending?.set(!1),e.children.forEach(r)};r(t._root)}var Ws=new S(``);var qs=(()=>{class t{static ɵfac=function(n){return new(n||t)};static ɵprov=$r$1({token:t,factory:()=>v(Ld)})}return t})();var zr=class{shouldDetach(r){return!1}store(r,e){}shouldAttach(r){return!1}retrieve(r){return null}shouldReuseRoute(r,e){return r.routeConfig===e.routeConfig}shouldDestroyInjector(r){return!0}};var Ld=(()=>{class t extends zr{static ɵfac=function(n){return new(n||t)};static ɵprov=$r$1({token:t,factory:t.ɵfac})}return t})();var Gr=(()=>{class t{urlSerializer=v(Xt);options=v(Qt$1,{optional:!0})||{};canceledNavigationResolution=this.options.canceledNavigationResolution||`replace`;location=v(jt);urlHandlingStrategy=v(Vr);urlUpdateStrategy=this.options.urlUpdateStrategy||`deferred`;currentUrlTree=new ie;getCurrentUrlTree(){return this.currentUrlTree}rawUrlTree=this.currentUrlTree;getRawUrlTree(){return this.rawUrlTree}createBrowserPath({finalUrl:e,initialUrl:n,targetBrowserUrl:a}){let i=e!==void 0?this.urlHandlingStrategy.merge(e,n):n,o=a??i;return o instanceof ie?this.urlSerializer.serialize(o):o}routerUrlState(e){return e?.targetBrowserUrl===void 0||e?.finalUrl===void 0?{}:{ɵrouterUrl:this.urlSerializer.serialize(e.finalUrl)}}commitTransition({targetRouterState:e,finalUrl:n,initialUrl:a}){n&&e?(this.currentUrlTree=n,this.rawUrlTree=this.urlHandlingStrategy.merge(n,a),this.routerState=e):this.rawUrlTree=a}routerState=Ds(null,v(Ee$1));getRouterState(){return this.routerState}_stateMemento=this.createStateMemento();get stateMemento(){return this._stateMemento}updateStateMemento(){this._stateMemento=this.createStateMemento()}createStateMemento(){return{rawUrlTree:this.rawUrlTree,currentUrlTree:this.currentUrlTree,routerState:this.routerState}}restoredState(){return this.location.getState()}static ɵfac=function(n){return new(n||t)};static ɵprov=$r$1({token:t,factory:()=>v(Ud)})}return t})();var Ud=(()=>{class t extends Gr{currentPageId=0;lastSuccessfulId=-1;get browserPageId(){return this.canceledNavigationResolution!==`computed`?this.currentPageId:this.restoredState()?.ɵrouterPageId??this.currentPageId}registerNonRouterCurrentEntryChangeListener(e){return this.location.subscribe(n=>{n.type===`popstate`&&setTimeout(()=>{e(n.url,n.state,`popstate`,{replaceUrl:!0},n.hasUAVisualTransition)})})}handleRouterEvent(e,n){e instanceof gt?this.updateStateMemento():e instanceof Be?this.commitTransition(n):e instanceof En?this.urlUpdateStrategy===`eager`&&(n.extras.skipLocationChange||this.setBrowserUrl(this.createBrowserPath(n),n)):e instanceof Kt$1?(this.commitTransition(n),this.urlUpdateStrategy===`deferred`&&!n.extras.skipLocationChange&&this.setBrowserUrl(this.createBrowserPath(n),n)):e instanceof fe$1?Is(e)?e.code===q$1.Redirect&&this.routerState===n.targetRouterState&&this.resetInternalState(n):this.restoreHistory(n):e instanceof bt?this.restoreHistory(n,!0):e instanceof _e$1&&(this.lastSuccessfulId=e.id,this.currentPageId=this.browserPageId)}setBrowserUrl(e,n){let{extras:a,id:i}=n,{replaceUrl:o,state:c}=a;if(this.location.isCurrentPathEqualTo(e)||o){let s=this.browserPageId,u=z$1(z$1({},c),this.generateNgRouterState(i,s,n));this.location.replaceState(e,``,u)}else{let s=z$1(z$1({},c),this.generateNgRouterState(i,this.browserPageId+1,n));this.location.go(e,``,s)}}restoreHistory(e,n=!1){if(this.canceledNavigationResolution===`computed`){let a=this.browserPageId,i=this.currentPageId-a;i!==0?this.location.historyGo(i):this.getCurrentUrlTree()===e.finalUrl&&i===0&&(this.resetInternalState(e),this.resetUrlToCurrentUrlTree())}else this.canceledNavigationResolution===`replace`&&(n&&this.resetInternalState(e),this.resetUrlToCurrentUrlTree())}resetInternalState({finalUrl:e}){this.routerState=this.stateMemento.routerState,this.currentUrlTree=this.stateMemento.currentUrlTree,this.rawUrlTree=this.urlHandlingStrategy.merge(this.currentUrlTree,e??this.rawUrlTree)}resetUrlToCurrentUrlTree(){this.location.replaceState(this.urlSerializer.serialize(this.getRawUrlTree()),``,this.generateNgRouterState(this.lastSuccessfulId,this.currentPageId))}generateNgRouterState(e,n,a){return this.canceledNavigationResolution===`computed`?z$1({navigationId:e,ɵrouterPageId:n},this.routerUrlState(a)):z$1({navigationId:e},this.routerUrlState(a))}static ɵfac=function(n){return new(n||t)};static ɵprov=$r$1({token:t,factory:t.ɵfac})}return t})();function fi(t,r){t.events.pipe(rr$1(e=>e instanceof _e$1||e instanceof fe$1||e instanceof bt||e instanceof Be),Ue$1(e=>e instanceof _e$1||e instanceof Be?0:(e instanceof fe$1?e.code===q$1.Redirect||e.code===q$1.SupersededByNewNavigation:!1)?2:1),rr$1(e=>e!==2),gn$2(1)).subscribe(()=>{r()})}var vt=(()=>{class t{get currentUrlTree(){return this.stateManager.getCurrentUrlTree()}get rawUrlTree(){return this.stateManager.getRawUrlTree()}disposed=!1;nonRouterCurrentEntryChangeSubscription;console=v($w);stateManager=v(Gr);options=v(Qt$1,{optional:!0})||{};pendingTasks=v(yt$1);urlUpdateStrategy=this.options.urlUpdateStrategy||`deferred`;navigationTransitions=v(Vs);urlSerializer=v(Xt);location=v(jt);urlHandlingStrategy=v(Vr);injector=v(Ee$1);_events=new ee;get events(){return this._events}get routerState(){return this.stateManager.getRouterState()}navigated=!1;routeReuseStrategy=v(qs);injectorCleanup=v(Ws,{optional:!0});onSameUrlNavigation=this.options.onSameUrlNavigation||`ignore`;config=v(Mn$1,{optional:!0})?.flat()??[];componentInputBindingEnabled=!!v($r,{optional:!0});currentNavigation=this.navigationTransitions.currentNavigation.asReadonly();constructor(){this.resetConfig(this.config),this.navigationTransitions.setupNavigations(this).subscribe({error:e=>{}}),this.subscribeToNavigationEvents()}eventsSubscription=new K;subscribeToNavigationEvents(){let e=this.navigationTransitions.events.subscribe(n=>{try{let a=this.navigationTransitions.currentTransition,i=le$1(this.navigationTransitions.currentNavigation);if(a!==null&&i!==null){if(this.stateManager.handleRouterEvent(n,i),n instanceof fe$1&&n.code!==q$1.Redirect&&n.code!==q$1.SupersededByNewNavigation)this.navigated=!0;else if(n instanceof _e$1)this.navigated=!0,this.injectorCleanup?.(this.routeReuseStrategy,this.routerState,this.config);else if(n instanceof Yt){let o=n.navigationBehaviorOptions,c=this.urlHandlingStrategy.merge(n.url,a.currentRawUrl),s=z$1({scroll:a.extras.scroll,browserUrl:a.extras.browserUrl,info:a.extras.info,skipLocationChange:a.extras.skipLocationChange,replaceUrl:a.extras.replaceUrl||this.urlUpdateStrategy===`eager`||kd(a.source)},o);this.scheduleNavigation(c,bn$1,null,s,a.hasUAVisualTransition,{resolve:a.resolve,reject:a.reject,promise:a.promise})}}Bu(n)&&this._events.next(n)}catch(a){this.navigationTransitions.transitionAbortWithErrorSubject.next(a)}});this.eventsSubscription.add(e)}resetRootComponentType(e){this.routerState.root.component=e,this.navigationTransitions.rootComponentType=e}initialNavigation(){this.setUpLocationChangeListener(),this.navigationTransitions.hasRequestedNavigation||this.navigateToSyncWithBrowser(this.location.path(!0),bn$1,this.stateManager.restoredState(),{replaceUrl:!0})}setUpLocationChangeListener(){this.nonRouterCurrentEntryChangeSubscription??=this.stateManager.registerNonRouterCurrentEntryChangeListener((e,n,a,i,o)=>{this.navigateToSyncWithBrowser(e,a,n,i,o)})}navigateToSyncWithBrowser(e,n,a,i,o){let c=a?.navigationId?a:null,s=a?.ɵrouterUrl??e;if(a?.ɵrouterUrl&&(i=Q$2(z$1({},i),{browserUrl:e})),a){let d=z$1({},a);delete d.navigationId,delete d.ɵrouterPageId,delete d.ɵrouterUrl,Object.keys(d).length!==0&&(i.state=d)}let u=this.parseUrl(s);this.scheduleNavigation(u,n,c,i,o).catch(d=>{this.disposed||this.injector.get(vt$1)(d)})}get url(){return this.serializeUrl(this.currentUrlTree)}getCurrentNavigation(){return le$1(this.navigationTransitions.currentNavigation)}get lastSuccessfulNavigation(){return this.navigationTransitions.lastSuccessfulNavigation}resetConfig(e){this.config=e.map(li),this.navigated=!1}ngOnDestroy(){this.dispose()}dispose(){this._events.unsubscribe(),this.navigationTransitions.complete(),this.nonRouterCurrentEntryChangeSubscription?.unsubscribe(),this.nonRouterCurrentEntryChangeSubscription=void 0,this.disposed=!0,this.eventsSubscription.unsubscribe()}createUrlTree(e,n={}){let{relativeTo:a,queryParams:i,fragment:o,queryParamsHandling:c,preserveFragment:s}=n,u=s?this.currentUrlTree.fragment:o,d=null;switch(c??this.options.defaultQueryParamsHandling){case`merge`:d=z$1(z$1({},this.currentUrlTree.queryParams),i);break;case`preserve`:d=this.currentUrlTree.queryParams;break;default:d=i||null}let f;try{f=vs(a?a.snapshot:this.routerState.snapshot.root)}catch{(typeof e[0]!=`string`||e[0][0]!==`/`)&&(e=[]),f=this.currentUrlTree.root}return ys(f,e,d,u??null,this.urlSerializer)}navigateByUrl(e,n={skipLocationChange:!1}){let a=et$1(e)?e:this.parseUrl(e),i=this.urlHandlingStrategy.merge(a,this.rawUrlTree);return this.scheduleNavigation(i,bn$1,null,n)}navigate(e,n={skipLocationChange:!1}){return Bd(e),this.navigateByUrl(this.createUrlTree(e,n),n)}serializeUrl(e){return this.urlSerializer.serialize(e)}parseUrl(e){try{return this.urlSerializer.parse(e)}catch{return this.console.warn(Tn$2(4018,!1)),this.urlSerializer.parse(`/`)}}isActive(e,n){let a;if(n===!0?a=z$1({},cs):n===!1?a=z$1({},Er):a=z$1(z$1({},Er),n),et$1(e))return Ga(this.currentUrlTree,e,a);let i=this.parseUrl(e);return Ga(this.currentUrlTree,i,a)}scheduleNavigation(e,n,a,i,o,c){if(this.disposed)return Promise.resolve(!1);let s,u,d;c?(s=c.resolve,u=c.reject,d=c.promise):d=new Promise((p,_)=>{s=p,u=_});let f=this.pendingTasks.add();return fi(this,()=>{queueMicrotask(()=>this.pendingTasks.remove(f))}),this.navigationTransitions.handleNavigationRequest({source:n,restoredState:a,currentUrlTree:this.currentUrlTree,currentRawUrl:this.currentUrlTree,rawUrl:e,extras:i,hasUAVisualTransition:o,resolve:s,reject:u,promise:d,currentSnapshot:this.routerState.snapshot,currentRouterState:this.routerState}),d.catch(Promise.reject.bind(Promise))}static ɵfac=function(n){return new(n||t)};static ɵprov=$r$1({token:t,factory:t.ɵfac})}return t})();function Bd(t){for(let r=0;r<t.length;r++)if(t[r]==null)throw new w(4008,!1)}var $d=(()=>{class t{router=v(vt);stateManager=v(Gr);fragment=Et$1(``);queryParams=Et$1({});path=Et$1(``);serializer=v(Xt);constructor(){this.updateState(),this.router.events?.subscribe(e=>{e instanceof _e$1&&this.updateState()})}updateState(){let{fragment:e,root:n,queryParams:a}=this.stateManager.getCurrentUrlTree();this.fragment.set(e),this.queryParams.set(a),this.path.set(this.serializer.serialize(new ie(n)))}static ɵfac=function(n){return new(n||t)};static ɵprov=$r$1({token:t,factory:t.ɵfac})}return t})();var Ks=(()=>{class t{router;route;tabIndexAttribute;renderer;el;locationStrategy;hrefAttributeValue=v(new ny(`href`),{optional:!0});reactiveHref=Ul$1(()=>{if(!this.isAnchorElement)return this.hrefAttributeValue;this.reactiveRouterState.path(),this._preserveFragment()&&this.reactiveRouterState.fragment();let e=n=>n===`preserve`||n===`merge`;return(e(this._queryParamsHandling())||e(this.options?.defaultQueryParamsHandling))&&this.reactiveRouterState.queryParams(),this.computeHref(this.createUrlTree())});get href(){return le$1(this.reactiveHref)}set href(e){this.reactiveHref.set(e)}set target(e){this._target.set(e)}get target(){return le$1(this._target)}_target=Et$1(void 0);set queryParams(e){this._queryParams.set(e)}get queryParams(){return le$1(this._queryParams)}_queryParams=Et$1(void 0,{equal:()=>!1});set fragment(e){this._fragment.set(e)}get fragment(){return le$1(this._fragment)}_fragment=Et$1(void 0);set queryParamsHandling(e){this._queryParamsHandling.set(e)}get queryParamsHandling(){return le$1(this._queryParamsHandling)}_queryParamsHandling=Et$1(void 0);set state(e){this._state.set(e)}get state(){return le$1(this._state)}_state=Et$1(void 0,{equal:()=>!1});set info(e){this._info.set(e)}get info(){return le$1(this._info)}_info=Et$1(void 0,{equal:()=>!1});set relativeTo(e){this._relativeTo.set(e)}get relativeTo(){return le$1(this._relativeTo)}_relativeTo=Et$1(void 0);set preserveFragment(e){this._preserveFragment.set(e)}get preserveFragment(){return le$1(this._preserveFragment)}_preserveFragment=Et$1(!1);set skipLocationChange(e){this._skipLocationChange.set(e)}get skipLocationChange(){return le$1(this._skipLocationChange)}_skipLocationChange=Et$1(!1);set replaceUrl(e){this._replaceUrl.set(e)}get replaceUrl(){return le$1(this._replaceUrl)}_replaceUrl=Et$1(!1);browserUrl=Ij(void 0);isAnchorElement;onChanges=new ee;applicationErrorHandler=v(vt$1);options=v(Qt$1,{optional:!0});reactiveRouterState=v($d);constructor(e,n,a,i,o,c){this.router=e,this.route=n,this.tabIndexAttribute=a,this.renderer=i,this.el=o,this.locationStrategy=c;let s=o.nativeElement.tagName?.toLowerCase();this.isAnchorElement=s===`a`||s===`area`||!!(typeof customElements==`object`&&customElements.get(s)?.observedAttributes?.includes?.(`href`))}setTabIndexIfNotOnNativeEl(e){this.tabIndexAttribute!=null||this.isAnchorElement||this.applyAttributeValue(`tabindex`,e)}ngOnChanges(e){this.onChanges.next(this)}routerLinkInput=Et$1(null);set routerLink(e){e==null?(this.routerLinkInput.set(null),this.setTabIndexIfNotOnNativeEl(null)):(et$1(e)?this.routerLinkInput.set(e):this.routerLinkInput.set(Array.isArray(e)?e:[e]),this.setTabIndexIfNotOnNativeEl(`0`))}onClick(e,n,a,i,o){let c=this.urlTree;if(c===null||this.isAnchorElement&&(e!==0||n||a||i||o||typeof this.target==`string`&&this.target!=`_self`))return!0;let s=this.browserUrl(),u=z$1({skipLocationChange:this.skipLocationChange,replaceUrl:this.replaceUrl,state:this.state,info:this.info},s!==void 0&&{browserUrl:s});return this.router.navigateByUrl(c,u)?.catch(d=>{this.applicationErrorHandler(d)}),!this.isAnchorElement}ngOnDestroy(){}applyAttributeValue(e,n){let a=this.renderer,i=this.el.nativeElement;n!==null?a.setAttribute(i,e,n):a.removeAttribute(i,e)}createUrlTree(){let e=this.routerLinkInput();return e===null||!this.router.createUrlTree?null:et$1(e)?e:this.router.createUrlTree(e,{relativeTo:this._relativeTo()!==void 0?this._relativeTo():this.route,queryParams:this._queryParams(),fragment:this._fragment(),queryParamsHandling:this._queryParamsHandling(),preserveFragment:this._preserveFragment()})}get urlTree(){return le$1(()=>this.createUrlTree())}computeHref(e){return e!==null&&this.locationStrategy?this.locationStrategy?.prepareExternalUrl(this.router.serializeUrl(e))??``:null}static ɵfac=function(n){return new(n||t)(os$1(vt),os$1(Ue),yp(`tabindex`),os$1(Ic$1),os$1(Wr$1),os$1(Bt))};static ɵdir=fw({type:t,selectors:[[``,`routerLink`,``]],hostVars:2,hostBindings:function(n,a){n&1&&nm$1(`click`,function(o){return a.onClick(o.button,o.ctrlKey,o.shiftKey,o.altKey,o.metaKey)}),n&2&&qg(`href`,a.reactiveHref(),kI)(`target`,a._target())},inputs:{target:`target`,queryParams:`queryParams`,fragment:`fragment`,queryParamsHandling:`queryParamsHandling`,state:`state`,info:`info`,relativeTo:`relativeTo`,preserveFragment:[2,`preserveFragment`,`preserveFragment`,Nj],skipLocationChange:[2,`skipLocationChange`,`skipLocationChange`,Nj],replaceUrl:[2,`replaceUrl`,`replaceUrl`,Nj],browserUrl:[1,`browserUrl`],routerLink:`routerLink`},features:[hE]})}return t})();var Tn$1=class{};var Hd=(()=>{class t{preload(e,n){return n().pipe(ku$1(()=>Ay(null)))}static ɵfac=function(n){return new(n||t)};static ɵprov=$r$1({token:t,factory:t.ɵfac})}return t})();var Ys=(()=>{class t{router;injector;preloadingStrategy;loader;subscription;constructor(e,n,a,i){this.router=e,this.injector=n,this.preloadingStrategy=a,this.loader=i}setUpPreloading(){this.subscription=this.router.events.pipe(rr$1(e=>e instanceof _e$1),zy(()=>this.preload())).subscribe(()=>{})}preload(){return this.processRoutes(this.injector,this.router.config)}ngOnDestroy(){this.subscription?.unsubscribe()}processRoutes(e,n){let a=[];for(let i of n){i.providers&&!i._injector&&(i._injector=Sl$1(i.providers,e,``));let o=i._injector??e;i._loadedNgModuleFactory&&!i._loadedInjector&&(i._loadedInjector=i._loadedNgModuleFactory.create(o).injector);let c=i._loadedInjector??o;(i.loadChildren&&!i._loadedRoutes&&i.canLoad===void 0||i.loadComponent&&!i._loadedComponent)&&a.push(this.preloadConfig(o,i)),(i.children||i._loadedRoutes)&&a.push(this.processRoutes(c,i.children??i._loadedRoutes))}return Re$2(a).pipe(tr())}preloadConfig(e,n){return this.preloadingStrategy.preload(n,()=>{if(e.destroyed)return Ay(null);let a;n.loadChildren&&n.canLoad===void 0?a=Re$2(this.loader.loadChildren(e,n)):a=Ay(null);let i=a.pipe($e(o=>o===null?Ay(void 0):(n._loadedRoutes=o.routes,n._loadedInjector=o.injector,n._loadedNgModuleFactory=o.factory,this.processRoutes(o.injector??e,o.routes))));if(n.loadComponent&&!n._loadedComponent){let o=this.loader.loadComponent(e,n);return Re$2([i,o]).pipe(tr())}else return i})}static ɵfac=function(n){return new(n||t)(Pe$1(vt),Pe$1(Ee$1),Pe$1(Tn$1),Pe$1(mi))};static ɵprov=ae$2({token:t,factory:t.ɵfac,providedIn:`root`})}return t})();var Vd=new S(``);function Gd(t,...r){return Dr$1([{provide:Mn$1,multi:!0,useValue:t},{provide:Ue,useFactory:Wd},{provide:eo,multi:!0,useFactory:Kd},r.map(e=>e.ɵproviders)])}function Wd(){return v(vt).routerState.root}function qd(t,r){return{ɵkind:t,ɵproviders:r}}function Kd(){let t=v(se$1);return r=>{let e=t.get(wt);if(r!==e.components[0])return;let n=t.get(vt),a=t.get(Yd);t.get(Zd)===1&&n.initialNavigation(),t.get(Zs,null,{optional:!0})?.setUpPreloading(),t.get(Vd,null,{optional:!0})?.init(),n.resetRootComponentType(e.componentTypes[0]),a.closed||(a.next(),a.complete(),a.unsubscribe())}}var Yd=new S(``,{factory:()=>new ee});var Zd=new S(``,{factory:()=>1});var Zs=new S(``);function Xd(t){return qd(0,[{provide:Zs,useExisting:Ys},{provide:Tn$1,useExisting:t}])}var Wr=/* @__PURE__ */ new WeakMap;var je$1=(()=>{class t{_appRef;_injector=v(se$1);_environmentInjector=v(Ee$1);load(e){let n=this._appRef=this._appRef||this._injector.get(wt),a=Wr.get(n);a||(a={loaders:/* @__PURE__ */ new Set,refs:[]},Wr.set(n,a),n.onDestroy(()=>{Wr.get(n)?.refs.forEach(i=>i.destroy()),Wr.delete(n)})),a.loaders.has(e)||(a.loaders.add(e),a.refs.push(Aj(e,{environmentInjector:this._environmentInjector})))}static ɵfac=function(n){return new(n||t)};static ɵprov=$r$1({token:t,factory:t.ɵfac})}return t})();var Kr=(()=>{class t{static ɵfac=function(n){return new(n||t)};static ɵcmp=aw({type:t,selectors:[[`ng-component`]],exportAs:[`cdkVisuallyHidden`],decls:0,vars:0,template:function(n,a){},styles:[`.cdk-visually-hidden {
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
`],encapsulation:2})}return t})();var qr;function Jd(){if(qr===void 0&&(qr=null,typeof window<`u`)){let t=window;if(t.trustedTypes!==void 0)try{qr=t.trustedTypes.createPolicy(`angular#components`,{createHTML:r=>r})}catch(r){console.error(r)}}return qr}function yt(t){return Jd()?.createHTML(t)||t}function Xs(t,r,e){t.innerHTML=yt(e.sanitize(J$2.HTML,r)||``)}function Js(t){return Error(`Unable to find icon with the name "${t}"`)}function Qd(){return Error(`Could not find HttpClient for use with Angular Material icons. Please add provideHttpClient() to your providers.`)}function Qs(t){return Error(`The URL provided to MatIconRegistry was not trusted as a resource URL via Angular's DomSanitizer. Attempted URL was "${t}".`)}function ec(t){return Error(`The literal provided to MatIconRegistry was not trusted as safe HTML by Angular's DomSanitizer. Attempted literal was "${t}".`)}var ze$1=class{url;svgText;options;svgElement=null;constructor(r,e,n){this.url=r,this.svgText=e,this.options=n}};var nc=(()=>{class t{_httpClient;_sanitizer;_errorHandler;_document;_svgIconConfigs=/* @__PURE__ */ new Map;_iconSetConfigs=/* @__PURE__ */ new Map;_cachedIconsByUrl=/* @__PURE__ */ new Map;_inProgressUrlFetches=/* @__PURE__ */ new Map;_fontCssClassesByAlias=/* @__PURE__ */ new Map;_resolvers=[];_defaultFontSetClass;constructor(e,n,a,i){this._httpClient=e,this._sanitizer=n,this._errorHandler=i,this._document=a}addSvgIcon(e,n,a){return this.addSvgIconInNamespace(``,e,n,a)}addSvgIconLiteral(e,n,a){return this.addSvgIconLiteralInNamespace(``,e,n,a)}addSvgIconInNamespace(e,n,a,i){return this._addSvgIconConfig(e,n,new ze$1(a,null,i))}addSvgIconResolver(e){return this._resolvers.push(e),this}addSvgIconLiteralInNamespace(e,n,a,i){let o=this._sanitizer.sanitize(J$2.HTML,a);if(!o)throw ec(a);let c=yt(o);return this._addSvgIconConfig(e,n,new ze$1(``,c,i))}addSvgIconSet(e,n){return this.addSvgIconSetInNamespace(``,e,n)}addSvgIconSetLiteral(e,n){return this.addSvgIconSetLiteralInNamespace(``,e,n)}addSvgIconSetInNamespace(e,n,a){return this._addSvgIconSetConfig(e,new ze$1(n,null,a))}addSvgIconSetLiteralInNamespace(e,n,a){let i=this._sanitizer.sanitize(J$2.HTML,n);if(!i)throw ec(n);let o=yt(i);return this._addSvgIconSetConfig(e,new ze$1(``,o,a))}registerFontClassAlias(e,n=e){return this._fontCssClassesByAlias.set(e,n),this}classNameForFontAlias(e){return this._fontCssClassesByAlias.get(e)||e}setDefaultFontSetClass(...e){return this._defaultFontSetClass=e,this}getDefaultFontSetClass(){return this._defaultFontSetClass??=tm(this._document),this._defaultFontSetClass}getSvgIconFromUrl(e){let n=this._sanitizer.sanitize(J$2.RESOURCE_URL,e);if(!n)throw Qs(e);let a=this._cachedIconsByUrl.get(n);return a?Ay(Yr(a)):this._loadSvgIconFromConfig(new ze$1(e,null)).pipe(ju$1(i=>this._cachedIconsByUrl.set(n,i)),Ue$1(i=>Yr(i)))}getNamedSvgIcon(e,n=``){let a=tc(n,e),i=this._svgIconConfigs.get(a);if(i)return this._getSvgFromConfig(i);if(i=this._getIconConfigFromResolvers(n,e),i)return this._svgIconConfigs.set(a,i),this._getSvgFromConfig(i);let o=this._iconSetConfigs.get(n);return o?this._getSvgFromIconSetConfigs(e,o):Oy(Js(a))}ngOnDestroy(){this._resolvers=[],this._svgIconConfigs.clear(),this._iconSetConfigs.clear(),this._cachedIconsByUrl.clear()}_getSvgFromConfig(e){return e.svgText?Ay(Yr(this._svgElementFromConfig(e))):this._loadSvgIconFromConfig(e).pipe(Ue$1(n=>Yr(n)))}_getSvgFromIconSetConfigs(e,n){let a=this._extractIconWithNameFromAnySet(e,n);if(a)return Ay(a);let i=n.filter(o=>!o.svgText).map(o=>this._loadSvgIconSetFromConfig(o).pipe(ku$1(c=>{let u=`Loading icon set URL: ${this._sanitizer.sanitize(J$2.RESOURCE_URL,o.url)} failed: ${c.message}`;return this._errorHandler.handleError(new Error(u)),Ay(null)})));return Wy(i).pipe(Ue$1(()=>{let o=this._extractIconWithNameFromAnySet(e,n);if(!o)throw Js(e);return o}))}_extractIconWithNameFromAnySet(e,n){for(let a=n.length-1;a>=0;a--){let i=n[a];if(i.svgText&&i.svgText.toString().indexOf(e)>-1){let o=this._svgElementFromConfig(i),c=this._extractSvgIconFromSet(o,e,i.options);if(c)return c}}return null}_loadSvgIconFromConfig(e){return this._fetchIcon(e).pipe(ju$1(n=>e.svgText=n),Ue$1(()=>this._svgElementFromConfig(e)))}_loadSvgIconSetFromConfig(e){return e.svgText?Ay(null):this._fetchIcon(e).pipe(ju$1(n=>e.svgText=n))}_extractSvgIconFromSet(e,n,a){let i=e.querySelector(`[id="${n}"]`);if(!i)return null;let o=i.cloneNode(!0);if(o.removeAttribute(`id`),o.nodeName.toLowerCase()===`svg`)return this._setSvgAttributes(o,a);if(o.nodeName.toLowerCase()===`symbol`)return this._setSvgAttributes(this._toSvgElement(o),a);let c=this._svgElementFromString(yt(`<svg></svg>`));return c.appendChild(o),this._setSvgAttributes(c,a)}_svgElementFromString(e){let n=this._document.createElement(`DIV`);n.innerHTML=e;let a=n.querySelector(`svg`);if(!a)throw Error(`<svg> tag not found`);return a}_toSvgElement(e){let n=this._svgElementFromString(yt(`<svg></svg>`)),a=e.attributes;for(let i=0;i<a.length;i++){let{name:o,value:c}=a[i],s=o.toLowerCase();s!==`id`&&!s.startsWith(`on`)&&n.setAttribute(o,c)}for(let i=0;i<e.childNodes.length;i++)e.childNodes[i].nodeType===this._document.ELEMENT_NODE&&n.appendChild(e.childNodes[i].cloneNode(!0));return n}_setSvgAttributes(e,n){return e.setAttribute(`fit`,``),e.setAttribute(`height`,`100%`),e.setAttribute(`width`,`100%`),e.setAttribute(`preserveAspectRatio`,`xMidYMid meet`),e.setAttribute(`focusable`,`false`),n&&n.viewBox&&e.setAttribute(`viewBox`,n.viewBox),e}_fetchIcon(e){let{url:n,options:a}=e,i=a?.withCredentials??!1;if(!this._httpClient)throw Qd();if(n==null)throw Error(`Cannot fetch icon from URL "${n}".`);let o=this._sanitizer.sanitize(J$2.RESOURCE_URL,n);if(!o)throw Qs(n);let c=this._inProgressUrlFetches.get(o);if(c)return c;let s=this._httpClient.get(o,{responseType:`text`,withCredentials:i}).pipe(Ue$1(u=>yt(u)),Xy(()=>this._inProgressUrlFetches.delete(o)),Ns$1());return this._inProgressUrlFetches.set(o,s),s}_addSvgIconConfig(e,n,a){return this._svgIconConfigs.set(tc(e,n),a),this}_addSvgIconSetConfig(e,n){let a=this._iconSetConfigs.get(e);return a?a.push(n):this._iconSetConfigs.set(e,[n]),this}_svgElementFromConfig(e){if(!e.svgElement){let n=this._svgElementFromString(e.svgText);this._setSvgAttributes(n,e.options),e.svgElement=n}return e.svgElement}_getIconConfigFromResolvers(e,n){for(let a=0;a<this._resolvers.length;a++){let i=this._resolvers[a](n,e);if(i)return em(i)?new ze$1(i.url,null,i.options):new ze$1(i,null)}}static ɵfac=function(n){return new(n||t)(Pe$1(mt,8),Pe$1(pn),Pe$1(mt$1,8),Pe$1(Je$1))};static ɵprov=ae$2({token:t,factory:t.ɵfac,providedIn:`root`})}return t})();function Yr(t){return t.cloneNode(!0)}function tc(t,r){return t+`:`+r}function em(t){return!!(t.url&&t.options)}function tm(t){let r=null,e=!1;return t.fonts&&typeof t.fonts.forEach==`function`&&t.fonts.forEach(n=>{let a=n.family.replace(/['"]/g,``).trim().toLowerCase();(a===`material icons`||a.startsWith(`material icons `))&&(e=!0),a.startsWith(`material symbols rounded`)?r=`rounded`:a.startsWith(`material symbols sharp`)?r=`sharp`:a.startsWith(`material symbols`)&&(r=`outlined`)}),[r&&!e?`material-symbols-${r}`:`material-icons`,`mat-ligature-font`]}var nm=new S(`cdk-dir-doc`,{providedIn:`root`,factory:()=>v(mt$1)});var rm=/^(ar|ckb|dv|he|iw|fa|nqo|ps|sd|ug|ur|yi|.*[-_](Adlm|Arab|Hebr|Nkoo|Rohg|Thaa))(?!.*[-_](Latn|Cyrl)($|-|_))($|-|_)/i;function rc(t){let r=t?.toLowerCase()||``;return r===`auto`&&typeof navigator<`u`&&navigator?.language?rm.test(navigator.language)?`rtl`:`ltr`:r===`rtl`?`rtl`:`ltr`}var am=(()=>{class t{get value(){return this.valueSignal()}valueSignal=Et$1(`ltr`);change=new Qe$1;constructor(){let e=v(nm,{optional:!0});if(e){let n=e.body?e.body.dir:null,a=e.documentElement?e.documentElement.dir:null;this.valueSignal.set(rc(n||a||`ltr`))}}ngOnDestroy(){this.change.complete()}static ɵfac=function(n){return new(n||t)};static ɵprov=$r$1({token:t,factory:t.ɵfac})}return t})();var lv=(()=>{class t{static ɵfac=function(n){return new(n||t)};static ɵmod=lw({type:t});static ɵinj=nd$1({})}return t})();var im=new S(`MAT_ICON_DEFAULT_OPTIONS`);var om=new S(`mat-icon-location`,{providedIn:`root`,factory:()=>{let t=v(mt$1),r=t?t.location:null;return{getPathname:()=>r?r.pathname+r.search:``}}});var ac=[`clip-path`,`color-profile`,`src`,`cursor`,`fill`,`filter`,`marker`,`marker-start`,`marker-mid`,`marker-end`,`mask`,`stroke`];var sm=ac.map(t=>`[${t}]`).join(`, `);var cm=/^url\(['"]?#(.*?)['"]?\)$/;var yv=(()=>{class t{_elementRef=v(Wr$1);_iconRegistry=v(nc);_location=v(om);_errorHandler=v(Je$1);_defaultColor;get color(){return this._color||this._defaultColor}set color(e){this._color=e}_color;inline=!1;get svgIcon(){return this._svgIcon}set svgIcon(e){e!==this._svgIcon&&(e?this._updateSvgIcon(e):this._svgIcon&&this._clearSvgElement(),this._svgIcon=e)}_svgIcon;get fontSet(){return this._fontSet}set fontSet(e){let n=this._cleanupFontValue(e);n!==this._fontSet&&(this._fontSet=n,this._updateFontIconClasses())}_fontSet;get fontIcon(){return this._fontIcon}set fontIcon(e){let n=this._cleanupFontValue(e);n!==this._fontIcon&&(this._fontIcon=n,this._updateFontIconClasses())}_fontIcon;_previousFontSetClass=[];_previousFontIconClass;_svgName=null;_svgNamespace=null;_previousPath;_elementsWithExternalReferences;_currentIconFetch=K.EMPTY;constructor(){let e=v(new ny(`aria-hidden`),{optional:!0}),n=v(im,{optional:!0});n&&(n.color&&(this.color=this._defaultColor=n.color),n.fontSet&&(this.fontSet=n.fontSet)),e||this._elementRef.nativeElement.setAttribute(`aria-hidden`,`true`)}_splitIconName(e){if(!e)return[``,``];let n=e.split(`:`);switch(n.length){case 1:return[``,n[0]];case 2:return n;default:throw Error(`Invalid icon name: "${e}"`)}}ngOnInit(){this._updateFontIconClasses()}ngAfterViewChecked(){let e=this._elementsWithExternalReferences;if(e&&e.size){let n=this._location.getPathname();n!==this._previousPath&&(this._previousPath=n,this._prependPathToReferences(n))}}ngOnDestroy(){this._currentIconFetch.unsubscribe(),this._elementsWithExternalReferences&&this._elementsWithExternalReferences.clear()}_usingFontIcon(){return!this.svgIcon}_setSvgElement(e){this._clearSvgElement();let n=this._location.getPathname();this._previousPath=n,this._cacheChildrenWithExternalReferences(e),this._prependPathToReferences(n),this._elementRef.nativeElement.appendChild(e)}_clearSvgElement(){let e=this._elementRef.nativeElement,n=e.childNodes.length;for(this._elementsWithExternalReferences&&this._elementsWithExternalReferences.clear();n--;){let a=e.childNodes[n];(a.nodeType!==1||a.nodeName.toLowerCase()===`svg`)&&a.remove()}}_updateFontIconClasses(){if(!this._usingFontIcon())return;let e=this._elementRef.nativeElement,n=(this.fontSet?this._iconRegistry.classNameForFontAlias(this.fontSet).split(/ +/):this._iconRegistry.getDefaultFontSetClass()).filter(a=>a.length>0);this._previousFontSetClass.forEach(a=>e.classList.remove(a)),n.forEach(a=>e.classList.add(a)),this._previousFontSetClass=n,this.fontIcon!==this._previousFontIconClass&&!n.includes(`mat-ligature-font`)&&(this._previousFontIconClass&&e.classList.remove(this._previousFontIconClass),this.fontIcon&&e.classList.add(this.fontIcon),this._previousFontIconClass=this.fontIcon)}_cleanupFontValue(e){return typeof e==`string`?e.trim().split(` `)[0]:e}_prependPathToReferences(e){let n=this._elementsWithExternalReferences,a=e.startsWith(`//`)?`/.${e}`:e;n&&n.forEach((i,o)=>{i.forEach(c=>{o.setAttribute(c.name,`url('${a}#${c.value}')`)})})}_cacheChildrenWithExternalReferences(e){let n=e.querySelectorAll(sm),a=this._elementsWithExternalReferences=this._elementsWithExternalReferences||/* @__PURE__ */ new Map;for(let i=0;i<n.length;i++)ac.forEach(o=>{let c=n[i],s=c.getAttribute(o),u=s?s.match(cm):null;if(u){let d=a.get(c);d||(d=[],a.set(c,d)),d.push({name:o,value:u[1]})}})}_updateSvgIcon(e){if(this._svgNamespace=null,this._svgName=null,this._currentIconFetch.unsubscribe(),e){let[n,a]=this._splitIconName(e);n&&(this._svgNamespace=n),a&&(this._svgName=a),this._currentIconFetch=this._iconRegistry.getNamedSvgIcon(a,n).pipe(gn$2(1)).subscribe(i=>this._setSvgElement(i),i=>{let o=`Error retrieving icon ${n}:${a}! ${i.message}`;this._errorHandler.handleError(new Error(o))})}}static ɵfac=function(n){return new(n||t)};static ɵcmp=(function(){return aw({type:t,selectors:[[`mat-icon`]],hostAttrs:[`role`,`img`,1,`mat-icon`,`notranslate`],hostVars:10,hostBindings:function(a,i){a&2&&(qg(`data-mat-icon-type`,i._usingFontIcon()?`font`:`svg`)(`data-mat-icon-name`,i._svgName||i.fontIcon)(`data-mat-icon-namespace`,i._svgNamespace||i.fontSet)(`fontIcon`,i._usingFontIcon()?i.fontIcon:null),jC(i.color?`mat-`+i.color:``),pm$1(`mat-icon-inline`,i.inline)(`mat-icon-no-color`,i.color!==`primary`&&i.color!==`accent`&&i.color!==`warn`))},inputs:{color:`color`,inline:[2,`inline`,`inline`,Nj],svgIcon:`svgIcon`,fontSet:`fontSet`,fontIcon:`fontIcon`},exportAs:[`matIcon`],ngContentSelectors:[`*`],decls:1,vars:0,template:function(a,i){a&1&&(yC(),vC(0))},styles:[`mat-icon, mat-icon.mat-primary, mat-icon.mat-accent, mat-icon.mat-warn {
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
`],encapsulation:2})})()}return t})();function On(t){return t.buttons===0||t.detail===0}function Pn(t){let r=t.touches&&t.touches[0]||t.changedTouches&&t.changedTouches[0];return!!r&&r.identifier===-1&&(r.radiusX==null||r.radiusX===1)&&(r.radiusY==null||r.radiusY===1)}var pi;function ic(){if(pi==null){let t=typeof document<`u`?document.head:null;pi=!!(t&&(t.createShadowRoot||t.attachShadow))}return pi}function hi(t){if(ic()){let r=t.getRootNode?t.getRootNode():null;if(typeof ShadowRoot<`u`&&ShadowRoot&&r instanceof ShadowRoot)return r}return null}function lm(){let t=typeof document<`u`&&document?document.activeElement:null;for(;t&&t.shadowRoot;){let r=t.shadowRoot.activeElement;if(r===t)break;t=r}return t}function Se$2(t){if(t.composedPath)try{return t.composedPath()[0]}catch{}return t.target}var gi;try{gi=typeof Intl<`u`&&Intl.v8BreakIterator}catch{gi=!1}var ae$1=(()=>{class t{_platformId=v(Yv);isBrowser=this._platformId?nr(this._platformId):typeof document==`object`&&!!document;EDGE=this.isBrowser&&/(edge)/i.test(navigator.userAgent);TRIDENT=this.isBrowser&&/(msie|trident)/i.test(navigator.userAgent);BLINK=this.isBrowser&&!!(window.chrome||gi)&&typeof CSS<`u`&&!this.EDGE&&!this.TRIDENT;WEBKIT=this.isBrowser&&/AppleWebKit/i.test(navigator.userAgent)&&!this.BLINK&&!this.EDGE&&!this.TRIDENT;IOS=this.isBrowser&&/iPad|iPhone|iPod/.test(navigator.userAgent)&&!(`MSStream`in window);FIREFOX=this.isBrowser&&/(firefox|minefield)/i.test(navigator.userAgent);ANDROID=this.isBrowser&&/android/i.test(navigator.userAgent)&&!this.TRIDENT;SAFARI=this.isBrowser&&/safari/i.test(navigator.userAgent)&&this.WEBKIT;static ɵfac=function(n){return new(n||t)};static ɵprov=$r$1({token:t,factory:t.ɵfac})}return t})();var Fn;function oc(){if(Fn==null&&typeof window<`u`)try{window.addEventListener(`test`,null,Object.defineProperty({},"passive",{get:()=>Fn=!0}))}finally{Fn=Fn||!1}return Fn}function en(t){return oc()?t:!!t.capture}function bi(t,r=0){return sc(t)?Number(t):arguments.length===2?r:0}function sc(t){return!isNaN(parseFloat(t))&&!isNaN(Number(t))}function xe(t){return t instanceof Wr$1?t.nativeElement:t}var cc=new S(`cdk-input-modality-detector-options`);var lc={ignoreKeys:[18,17,224,91,16]};var uc=650;var vi={passive:!0,capture:!0};var dc=(()=>{class t{_platform=v(ae$1);_listenerCleanups;modalityDetected;modalityChanged;get mostRecentModality(){return this._modality.value}_mostRecentTarget=null;_modality=new Kn(null);_options;_lastTouchMs=0;_onKeydown=e=>{this._options?.ignoreKeys?.some(n=>n===e.keyCode)||(this._modality.next(`keyboard`),this._mostRecentTarget=Se$2(e))};_onMousedown=e=>{Date.now()-this._lastTouchMs<uc||(this._modality.next(On(e)?`keyboard`:`mouse`),this._mostRecentTarget=Se$2(e))};_onTouchstart=e=>{if(Pn(e)){this._modality.next(`keyboard`);return}this._lastTouchMs=Date.now(),this._modality.next(`touch`),this._mostRecentTarget=Se$2(e)};constructor(){let e=v(Fe$1),n=v(mt$1),a=v(cc,{optional:!0});if(this._options=z$1(z$1({},lc),a),this.modalityDetected=this._modality.pipe(ov(1)),this.modalityChanged=this.modalityDetected.pipe(Zy()),this._platform.isBrowser){let i=v(Vr$1).createRenderer(null,null);this._listenerCleanups=e.runOutsideAngular(()=>[i.listen(n,`keydown`,this._onKeydown,vi),i.listen(n,`mousedown`,this._onMousedown,vi),i.listen(n,`touchstart`,this._onTouchstart,vi)])}}ngOnDestroy(){this._modality.complete(),this._listenerCleanups?.forEach(e=>e())}static ɵfac=function(n){return new(n||t)};static ɵprov=$r$1({token:t,factory:t.ɵfac})}return t})();var kn$1=(function(t){return t[t.IMMEDIATE=0]=`IMMEDIATE`,t[t.EVENTUAL=1]=`EVENTUAL`,t})(kn$1||{});var mc=new S(`cdk-focus-monitor-default-options`);var Zr=en({passive:!0,capture:!0});var Xr=(()=>{class t{_ngZone=v(Fe$1);_platform=v(ae$1);_inputModalityDetector=v(dc);_origin=null;_lastFocusOrigin=null;_windowFocused=!1;_windowFocusTimeoutId;_originTimeoutId;_originFromTouchInteraction=!1;_elementInfo=/* @__PURE__ */ new Map;_monitoredElementCount=0;_rootNodeFocusListenerCount=/* @__PURE__ */ new Map;_detectionMode;_windowFocusListener=()=>{this._windowFocused=!0,this._windowFocusTimeoutId=setTimeout(()=>this._windowFocused=!1)};_document=v(mt$1);_stopInputModalityDetector=new ee;constructor(){let e=v(mc,{optional:!0});this._detectionMode=e?.detectionMode||kn$1.IMMEDIATE}_rootNodeFocusAndBlurListener=e=>{let n=Se$2(e);for(let a=n;a;a=a.parentElement)e.type===`focus`?this._onFocus(e,a):this._onBlur(e,a)};monitor(e,n=!1){let a=xe(e);if(!this._platform.isBrowser||a.nodeType!==1)return Ay();let i=hi(a)||this._document,o=this._elementInfo.get(a);if(o)return n&&(o.checkChildren=!0),o.subject;let c={checkChildren:n,subject:new ee,rootNode:i};return this._elementInfo.set(a,c),this._registerGlobalListeners(c),c.subject}stopMonitoring(e){let n=xe(e),a=this._elementInfo.get(n);a&&(a.subject.complete(),this._setClasses(n),this._elementInfo.delete(n),this._removeGlobalListeners(a))}focusVia(e,n,a){let i=xe(e);i===this._document.activeElement?this._getClosestElementsInfo(i).forEach(([c,s])=>this._originChanged(c,n,s)):(this._setOrigin(n),typeof i.focus==`function`&&i.focus(a))}ngOnDestroy(){this._elementInfo.forEach((e,n)=>this.stopMonitoring(n))}_getWindow(){return this._document.defaultView||window}_getFocusOrigin(e){return this._origin?this._originFromTouchInteraction?this._shouldBeAttributedToTouch(e)?`touch`:`program`:this._origin:this._windowFocused&&this._lastFocusOrigin?this._lastFocusOrigin:e&&this._isLastInteractionFromInputLabel(e)?`mouse`:`program`}_shouldBeAttributedToTouch(e){return this._detectionMode===kn$1.EVENTUAL||!!e?.contains(this._inputModalityDetector._mostRecentTarget)}_setClasses(e,n){e.classList.toggle(`cdk-focused`,!!n),e.classList.toggle(`cdk-touch-focused`,n===`touch`),e.classList.toggle(`cdk-keyboard-focused`,n===`keyboard`),e.classList.toggle(`cdk-mouse-focused`,n===`mouse`),e.classList.toggle(`cdk-program-focused`,n===`program`)}_setOrigin(e,n=!1){this._ngZone.runOutsideAngular(()=>{if(this._origin=e,this._originFromTouchInteraction=e===`touch`&&n,this._detectionMode===kn$1.IMMEDIATE){clearTimeout(this._originTimeoutId);let a=this._originFromTouchInteraction?uc:1;this._originTimeoutId=setTimeout(()=>this._origin=null,a)}})}_onFocus(e,n){let a=this._elementInfo.get(n),i=Se$2(e);!a||!a.checkChildren&&n!==i||this._originChanged(n,this._getFocusOrigin(i),a)}_onBlur(e,n){let a=this._elementInfo.get(n);!a||a.checkChildren&&e.relatedTarget instanceof Node&&n.contains(e.relatedTarget)||(this._setClasses(n),this._emitOrigin(a,null))}_emitOrigin(e,n){e.subject.observers.length&&this._ngZone.run(()=>e.subject.next(n))}_registerGlobalListeners(e){if(!this._platform.isBrowser)return;let n=e.rootNode,a=this._rootNodeFocusListenerCount.get(n)||0;a||this._ngZone.runOutsideAngular(()=>{n.addEventListener(`focus`,this._rootNodeFocusAndBlurListener,Zr),n.addEventListener(`blur`,this._rootNodeFocusAndBlurListener,Zr)}),this._rootNodeFocusListenerCount.set(n,a+1),++this._monitoredElementCount===1&&(this._ngZone.runOutsideAngular(()=>{this._getWindow().addEventListener(`focus`,this._windowFocusListener)}),this._inputModalityDetector.modalityDetected.pipe(av(this._stopInputModalityDetector)).subscribe(i=>{this._setOrigin(i,!0)}))}_removeGlobalListeners(e){let n=e.rootNode;if(this._rootNodeFocusListenerCount.has(n)){let a=this._rootNodeFocusListenerCount.get(n);a>1?this._rootNodeFocusListenerCount.set(n,a-1):(n.removeEventListener(`focus`,this._rootNodeFocusAndBlurListener,Zr),n.removeEventListener(`blur`,this._rootNodeFocusAndBlurListener,Zr),this._rootNodeFocusListenerCount.delete(n))}--this._monitoredElementCount||(this._getWindow().removeEventListener(`focus`,this._windowFocusListener),this._stopInputModalityDetector.next(),clearTimeout(this._windowFocusTimeoutId),clearTimeout(this._originTimeoutId))}_originChanged(e,n,a){this._setClasses(e,n),this._emitOrigin(a,n),this._lastFocusOrigin=n}_getClosestElementsInfo(e){let n=[];return this._elementInfo.forEach((a,i)=>{(i===e||a.checkChildren&&i.contains(e))&&n.push([i,a])}),n}_isLastInteractionFromInputLabel(e){let{_mostRecentTarget:n,mostRecentModality:a}=this._inputModalityDetector;if(a!==`mouse`||!n||n===e||e.nodeName!==`INPUT`&&e.nodeName!==`TEXTAREA`||e.disabled)return!1;let i=e.labels;if(i){for(let o=0;o<i.length;o++)if(i[o].contains(n))return!0}return!1}static ɵfac=function(n){return new(n||t)};static ɵprov=$r$1({token:t,factory:t.ɵfac})}return t})();var um=(()=>{class t{_elementRef=v(Wr$1);_focusMonitor=v(Xr);_monitorSubscription;_focusOrigin=null;cdkFocusChange=new Qe$1;get focusOrigin(){return this._focusOrigin}ngAfterViewInit(){let e=this._elementRef.nativeElement;this._monitorSubscription=this._focusMonitor.monitor(e,e.nodeType===1&&e.hasAttribute(`cdkMonitorSubtreeFocus`)).subscribe(n=>{this._focusOrigin=n,this.cdkFocusChange.emit(n)})}ngOnDestroy(){this._focusMonitor.stopMonitoring(this._elementRef),this._monitorSubscription?.unsubscribe()}static ɵfac=function(n){return new(n||t)};static ɵdir=fw({type:t,selectors:[[``,`cdkMonitorElementFocus`,``],[``,`cdkMonitorSubtreeFocus`,``]],outputs:{cdkFocusChange:`cdkFocusChange`},exportAs:[`cdkMonitorFocus`]})}return t})();function yi(t){return Array.isArray(t)?t:[t]}var fc=/* @__PURE__ */ new Set;var _t;var Jr=(()=>{class t{_platform=v(ae$1);_nonce=v(Kv,{optional:!0});_matchMedia;constructor(){this._matchMedia=this._platform.isBrowser&&window.matchMedia?window.matchMedia.bind(window):mm}matchMedia(e){return(this._platform.WEBKIT||this._platform.BLINK)&&dm(e,this._nonce),this._matchMedia(e)}static ɵfac=function(n){return new(n||t)};static ɵprov=$r$1({token:t,factory:t.ɵfac})}return t})();function dm(t,r){if(!fc.has(t))try{_t||(_t=document.createElement(`style`),r&&_t.setAttribute(`nonce`,r),_t.setAttribute(`type`,`text/css`),document.head.appendChild(_t)),_t.sheet&&(_t.sheet.insertRule(`@media ${t.replace(/[{}]/g,``)} {body{ }}`,0),fc.add(t))}catch(e){console.error(e)}}function mm(t){return{matches:t===`all`||t===``,media:t,addListener:()=>{},removeListener:()=>{}}}var fm=(()=>{class t{_mediaMatcher=v(Jr);_zone=v(Fe$1);_queries=/* @__PURE__ */ new Map;_destroySubject=new ee;ngOnDestroy(){this._destroySubject.next(),this._destroySubject.complete()}isMatched(e){return pc(yi(e)).some(a=>this._registerQuery(a).mql.matches)}observe(e){let a=pc(yi(e)).map(o=>this._registerQuery(o).observable),i=By(a);return i=hn$2(i.pipe(gn$2(1)),i.pipe(ov(1),Qy(0))),i.pipe(Ue$1(o=>{let c={matches:!1,breakpoints:{}};return o.forEach(({matches:s,query:u})=>{c.matches=c.matches||s,c.breakpoints[u]=s}),c}))}_registerQuery(e){if(this._queries.has(e))return this._queries.get(e);let n=this._mediaMatcher.matchMedia(e),i={observable:new x(o=>{let c=s=>this._zone.run(()=>o.next(s));return n.addListener(c),()=>{n.removeListener(c)}}).pipe(iv(n),Ue$1(({matches:o})=>({query:e,matches:o})),av(this._destroySubject)),mql:n};return this._queries.set(e,i),i}static ɵfac=function(n){return new(n||t)};static ɵprov=$r$1({token:t,factory:t.ɵfac})}return t})();function pc(t){return t.map(r=>r.split(`,`)).reduce((r,e)=>r.concat(e)).map(r=>r.trim())}function pm(t){if(t.type===`characterData`&&t.target instanceof Comment)return!0;if(t.type===`childList`){for(let r=0;r<t.addedNodes.length;r++)if(!(t.addedNodes[r]instanceof Comment))return!1;for(let r=0;r<t.removedNodes.length;r++)if(!(t.removedNodes[r]instanceof Comment))return!1;return!0}return!1}var hm=(()=>{class t{create(e){return typeof MutationObserver>`u`?null:new MutationObserver(e)}static ɵfac=function(n){return new(n||t)};static ɵprov=$r$1({token:t,factory:t.ɵfac})}return t})();var gm=(()=>{class t{_mutationObserverFactory=v(hm);_observedElements=/* @__PURE__ */ new Map;_ngZone=v(Fe$1);ngOnDestroy(){this._observedElements.forEach((e,n)=>this._cleanupObserver(n))}observe(e){let n=xe(e);return new x(a=>{let o=this._observeElement(n).pipe(Ue$1(c=>c.filter(s=>!pm(s))),rr$1(c=>!!c.length)).subscribe(c=>{this._ngZone.run(()=>{a.next(c)})});return()=>{o.unsubscribe(),this._unobserveElement(n)}})}_observeElement(e){return this._ngZone.runOutsideAngular(()=>{if(this._observedElements.has(e))this._observedElements.get(e).count++;else{let n=new ee,a=this._mutationObserverFactory.create(i=>n.next(i));a&&a.observe(e,{characterData:!0,childList:!0,subtree:!0}),this._observedElements.set(e,{observer:a,stream:n,count:1})}return this._observedElements.get(e).stream})}_unobserveElement(e){this._observedElements.has(e)&&(this._observedElements.get(e).count--,this._observedElements.get(e).count||this._cleanupObserver(e))}_cleanupObserver(e){if(this._observedElements.has(e)){let{observer:n,stream:a}=this._observedElements.get(e);n&&n.disconnect(),a.complete(),this._observedElements.delete(e)}}static ɵfac=function(n){return new(n||t)};static ɵprov=$r$1({token:t,factory:t.ɵfac})}return t})();var dy=(()=>{class t{_contentObserver=v(gm);_elementRef=v(Wr$1);event=new Qe$1;get disabled(){return this._disabled}set disabled(e){this._disabled=e,this._disabled?this._unsubscribe():this._subscribe()}_disabled=!1;get debounce(){return this._debounce}set debounce(e){this._debounce=bi(e),this._subscribe()}_debounce;_currentSubscription=null;ngAfterContentInit(){!this._currentSubscription&&!this.disabled&&this._subscribe()}ngOnDestroy(){this._unsubscribe()}_subscribe(){this._unsubscribe();let e=this._contentObserver.observe(this._elementRef);this._currentSubscription=(this.debounce?e.pipe(Qy(this.debounce)):e).subscribe(this.event)}_unsubscribe(){this._currentSubscription?.unsubscribe()}static ɵfac=function(n){return new(n||t)};static ɵdir=fw({type:t,selectors:[[``,`cdkObserveContent`,``]],inputs:{disabled:[2,`cdkObserveContentDisabled`,`disabled`,Nj],debounce:`debounce`},outputs:{event:`cdkObserveContent`},exportAs:[`cdkObserveContent`]})}return t})();var gc=(()=>{class t{_platform=v(ae$1);isDisabled(e){return e.hasAttribute(`disabled`)}isVisible(e){return vm(e)&&getComputedStyle(e).visibility===`visible`}isTabbable(e){if(!this._platform.isBrowser)return!1;let n=bm(Im(e));if(n&&(hc(n)===-1||!this.isVisible(n)))return!1;let a=e.nodeName.toLowerCase(),i=hc(e);return e.hasAttribute(`contenteditable`)?i!==-1:a===`iframe`||a===`object`||this._platform.WEBKIT&&this._platform.IOS&&!Em(e)?!1:a===`audio`?e.hasAttribute(`controls`)?i!==-1:!1:a===`video`?i===-1?!1:i!==null?!0:this._platform.FIREFOX||e.hasAttribute(`controls`):e.tabIndex>=0}isFocusable(e,n){return Cm(e)&&!this.isDisabled(e)&&(n?.ignoreInert||!e.closest?.(`[inert]`))&&(n?.ignoreVisibility||this.isVisible(e))}static ɵfac=function(n){return new(n||t)};static ɵprov=$r$1({token:t,factory:t.ɵfac})}return t})();function bm(t){try{return t.frameElement}catch{return null}}function vm(t){return!!(t.offsetWidth||t.offsetHeight||typeof t.getClientRects==`function`&&t.getClientRects().length)}function ym(t){let r=t.nodeName.toLowerCase();return r===`input`||r===`select`||r===`button`||r===`textarea`}function _m(t){return Dm(t)&&t.type==`hidden`}function Sm(t){return wm(t)&&t.hasAttribute(`href`)}function Dm(t){return t.nodeName.toLowerCase()==`input`}function wm(t){return t.nodeName.toLowerCase()==`a`}function bc(t){if(!t.hasAttribute(`tabindex`)||t.tabIndex===void 0)return!1;let r=t.getAttribute(`tabindex`);return!!(r&&!isNaN(parseInt(r,10)))}function hc(t){if(!bc(t))return null;let r=parseInt(t.getAttribute(`tabindex`)||``,10);return isNaN(r)?-1:r}function Em(t){let r=t.nodeName.toLowerCase(),e=r===`input`&&t.type;return e===`text`||e===`password`||r===`select`||r===`textarea`}function Cm(t){return _m(t)?!1:ym(t)||Sm(t)||t.hasAttribute(`contenteditable`)||bc(t)}function Im(t){return t.ownerDocument&&t.ownerDocument.defaultView||window}var Qr=class{_element;_checker;_ngZone;_document;_injector;_startAnchor=null;_endAnchor=null;_hasAttached=!1;startAnchorListener=()=>{!this.focusLastTabbableElement()&&this._checker.isFocusable(this._element)&&this._element.focus()};endAnchorListener=()=>{!this.focusFirstTabbableElement()&&this._checker.isFocusable(this._element)&&this._element.focus()};get enabled(){return this._enabled}set enabled(r){this._enabled=r,this._startAnchor&&this._endAnchor&&(this._toggleAnchorTabIndex(r,this._startAnchor),this._toggleAnchorTabIndex(r,this._endAnchor))}_enabled=!0;constructor(r,e,n,a,i=!1,o){this._element=r,this._checker=e,this._ngZone=n,this._document=a,this._injector=o,i||this.attachAnchors()}destroy(){let r=this._startAnchor,e=this._endAnchor;r&&(r.removeEventListener(`focus`,this.startAnchorListener),r.remove()),e&&(e.removeEventListener(`focus`,this.endAnchorListener),e.remove()),this._startAnchor=this._endAnchor=null,this._hasAttached=!1}attachAnchors(){return this._hasAttached?!0:(this._ngZone.runOutsideAngular(()=>{this._startAnchor||(this._startAnchor=this._createAnchor(),this._startAnchor.addEventListener(`focus`,this.startAnchorListener)),this._endAnchor||(this._endAnchor=this._createAnchor(),this._endAnchor.addEventListener(`focus`,this.endAnchorListener))}),this._element.parentNode&&(this._element.parentNode.insertBefore(this._startAnchor,this._element),this._element.parentNode.insertBefore(this._endAnchor,this._element.nextSibling),this._hasAttached=!0),this._hasAttached)}focusInitialElementWhenReady(r){return new Promise(e=>{this._executeOnStable(()=>e(this.focusInitialElement(r)))})}focusFirstTabbableElementWhenReady(r){return new Promise(e=>{this._executeOnStable(()=>e(this.focusFirstTabbableElement(r)))})}focusLastTabbableElementWhenReady(r){return new Promise(e=>{this._executeOnStable(()=>e(this.focusLastTabbableElement(r)))})}_getRegionBoundary(r){let e=this._element.querySelectorAll(`[cdk-focus-region-${r}], [cdkFocusRegion${r}], [cdk-focus-${r}]`);return r==`start`?e.length?e[0]:this._getFirstTabbableElement(this._element):e.length?e[e.length-1]:this._getLastTabbableElement(this._element)}focusInitialElement(r){let e=this._element.querySelector(`[cdk-focus-initial], [cdkFocusInitial]`);if(e){if(!this._checker.isFocusable(e)){let n=this._getFirstTabbableElement(e);return n?.focus(r),!!n}return e.focus(r),!0}return this.focusFirstTabbableElement(r)}focusFirstTabbableElement(r){let e=this._getRegionBoundary(`start`);return e&&e.focus(r),!!e}focusLastTabbableElement(r){let e=this._getRegionBoundary(`end`);return e&&e.focus(r),!!e}hasAttached(){return this._hasAttached}_getFirstTabbableElement(r){if(this._checker.isFocusable(r)&&this._checker.isTabbable(r))return r;let e=r.children;for(let n=0;n<e.length;n++){let a=e[n].nodeType===this._document.ELEMENT_NODE?this._getFirstTabbableElement(e[n]):null;if(a)return a}return null}_getLastTabbableElement(r){if(this._checker.isFocusable(r)&&this._checker.isTabbable(r))return r;let e=r.children;for(let n=e.length-1;n>=0;n--){let a=e[n].nodeType===this._document.ELEMENT_NODE?this._getLastTabbableElement(e[n]):null;if(a)return a}return null}_createAnchor(){let r=this._document.createElement(`div`);return this._toggleAnchorTabIndex(this._enabled,r),r.classList.add(`cdk-visually-hidden`),r.classList.add(`cdk-focus-trap-anchor`),r.setAttribute(`aria-hidden`,`true`),r}_toggleAnchorTabIndex(r,e){r?e.setAttribute(`tabindex`,`0`):e.removeAttribute(`tabindex`)}toggleAnchors(r){this._startAnchor&&this._endAnchor&&(this._toggleAnchorTabIndex(r,this._startAnchor),this._toggleAnchorTabIndex(r,this._endAnchor))}_executeOnStable(r){Dh(r,{injector:this._injector})}};var Am=(()=>{class t{_checker=v(gc);_ngZone=v(Fe$1);_document=v(mt$1);_injector=v(se$1);constructor(){v(je$1).load(Kr)}create(e,n=!1){return new Qr(e,this._checker,this._ngZone,this._document,n,this._injector)}static ɵfac=function(n){return new(n||t)};static ɵprov=$r$1({token:t,factory:t.ɵfac})}return t})();var vc=new S(`liveAnnouncerElement`,{providedIn:`root`,factory:()=>null});var yc=new S(`LIVE_ANNOUNCER_DEFAULT_OPTIONS`);var Rm=0;var Nm=(()=>{class t{_ngZone=v(Fe$1);_defaultOptions=v(yc,{optional:!0});_liveElement;_document=v(mt$1);_sanitizer=v(pn);_previousTimeout;_currentPromise;_currentResolve;constructor(){let e=v(vc,{optional:!0});this._liveElement=e||this._createLiveElement()}announce(e,...n){let a=this._defaultOptions,i,o;return n.length===1&&typeof n[0]==`number`?o=n[0]:[i,o]=n,this.clear(),clearTimeout(this._previousTimeout),i||(i=a&&a.politeness?a.politeness:`polite`),o==null&&a&&(o=a.duration),this._liveElement.setAttribute(`aria-live`,i),this._liveElement.id&&this._exposeAnnouncerToModals(this._liveElement.id),this._ngZone.runOutsideAngular(()=>(this._currentPromise||(this._currentPromise=new Promise(c=>this._currentResolve=c)),clearTimeout(this._previousTimeout),this._previousTimeout=setTimeout(()=>{!e||typeof e==`string`?this._liveElement.textContent=e:Xs(this._liveElement,e,this._sanitizer),typeof o==`number`&&(this._previousTimeout=setTimeout(()=>this.clear(),o)),this._currentResolve?.(),this._currentPromise=this._currentResolve=void 0},100),this._currentPromise))}clear(){this._liveElement&&(this._liveElement.textContent=``)}ngOnDestroy(){clearTimeout(this._previousTimeout),this._liveElement?.remove(),this._liveElement=null,this._currentResolve?.(),this._currentPromise=this._currentResolve=void 0}_createLiveElement(){let e=`cdk-live-announcer-element`,n=this._document.getElementsByClassName(e),a=this._document.createElement(`div`);for(let i=0;i<n.length;i++)n[i].remove();return a.classList.add(e),a.classList.add(`cdk-visually-hidden`),a.setAttribute(`aria-atomic`,`true`),a.setAttribute(`aria-live`,`polite`),a.id=`cdk-live-announcer-${Rm++}`,this._document.body.appendChild(a),a}_exposeAnnouncerToModals(e){let n=this._document.querySelectorAll(`body > .cdk-overlay-container [aria-modal="true"]`);for(let a=0;a<n.length;a++){let i=n[a],o=i.getAttribute(`aria-owns`);o?o.indexOf(e)===-1&&i.setAttribute(`aria-owns`,o+` `+e):i.setAttribute(`aria-owns`,e)}}static ɵfac=function(n){return new(n||t)};static ɵprov=$r$1({token:t,factory:t.ɵfac})}return t})();var xm=200;var ea=class{_letterKeyStream=new ee;_items=[];_selectedItemIndex=-1;_pressedLetters=[];_skipPredicateFn;_selectedItem=new ee;selectedItem=this._selectedItem;constructor(r,e){let n=typeof e?.debounceInterval==`number`?e.debounceInterval:xm;e?.skipPredicate&&(this._skipPredicateFn=e.skipPredicate),this.setItems(r),this._setupKeyHandler(n)}destroy(){this._pressedLetters=[],this._letterKeyStream.complete(),this._selectedItem.complete()}setCurrentSelectedItemIndex(r){this._selectedItemIndex=r}setItems(r){this._items=r}handleKey(r){let e=r.keyCode;r.key&&r.key.length===1?this._letterKeyStream.next(r.key.toLocaleUpperCase()):(e>=65&&e<=90||e>=48&&e<=57)&&this._letterKeyStream.next(String.fromCharCode(e))}isTyping(){return this._pressedLetters.length>0}reset(){this._pressedLetters=[]}_setupKeyHandler(r){this._letterKeyStream.pipe(ju$1(e=>this._pressedLetters.push(e)),Qy(r),rr$1(()=>this._pressedLetters.length>0),Ue$1(()=>this._pressedLetters.join(``).toLocaleUpperCase())).subscribe(e=>{for(let n=1;n<this._items.length+1;n++){let a=(this._selectedItemIndex+n)%this._items.length,i=this._items[a];if(!this._skipPredicateFn?.(i)&&i.getLabel?.().toLocaleUpperCase().trim().indexOf(e)===0){this._selectedItem.next(i);break}}this._pressedLetters=[]})}};function _c(t,...r){return r.length?r.some(e=>t[e]):t.altKey||t.shiftKey||t.ctrlKey||t.metaKey}var ta=class{_items;_activeItemIndex=Et$1(-1);_activeItem=Et$1(null);_wrap=!1;_typeaheadSubscription=K.EMPTY;_itemChangesSubscription;_vertical=!0;_horizontal=null;_allowedModifierKeys=[];_homeAndEnd=!1;_pageUpAndDown={enabled:!1,delta:10};_effectRef;_typeahead;_skipPredicateFn=r=>r.disabled;constructor(r,e){this._items=r,r instanceof Mi?this._itemChangesSubscription=r.changes.subscribe(n=>this._itemsChanged(n.toArray())):Nr$1(r)&&(this._effectRef=ja$1(()=>this._itemsChanged(r()),{injector:e}))}tabOut=new ee;change=new ee;skipPredicate(r){return this._skipPredicateFn=r,this}withWrap(r=!0){return this._wrap=r,this}withVerticalOrientation(r=!0){return this._vertical=r,this}withHorizontalOrientation(r){return this._horizontal=r,this}withAllowedModifierKeys(r){return this._allowedModifierKeys=r,this}withTypeAhead(r=200){this._typeaheadSubscription.unsubscribe();let e=this._getItemsArray();return this._typeahead=new ea(e,{debounceInterval:typeof r==`number`?r:void 0,skipPredicate:n=>this._skipPredicateFn(n)}),this._typeaheadSubscription=this._typeahead.selectedItem.subscribe(n=>{this.setActiveItem(n)}),this}cancelTypeahead(){return this._typeahead?.reset(),this}withHomeAndEnd(r=!0){return this._homeAndEnd=r,this}withPageUpDown(r=!0,e=10){return this._pageUpAndDown={enabled:r,delta:e},this}setActiveItem(r){let e=this._activeItem();this.updateActiveItem(r),this._activeItem()!==e&&this.change.next(this._activeItemIndex())}onKeydown(r){let e=r.keyCode,a=[`altKey`,`ctrlKey`,`metaKey`,`shiftKey`].every(i=>!r[i]||this._allowedModifierKeys.indexOf(i)>-1);switch(e){case 9:this.tabOut.next();return;case 40:if(this._vertical&&a){this.setNextItemActive();break}else return;case 38:if(this._vertical&&a){this.setPreviousItemActive();break}else return;case 39:if(this._horizontal&&a){this._horizontal===`rtl`?this.setPreviousItemActive():this.setNextItemActive();break}else return;case 37:if(this._horizontal&&a){this._horizontal===`rtl`?this.setNextItemActive():this.setPreviousItemActive();break}else return;case 36:if(this._homeAndEnd&&a){this.setFirstItemActive();break}else return;case 35:if(this._homeAndEnd&&a){this.setLastItemActive();break}else return;case 33:if(this._pageUpAndDown.enabled&&a){let i=this._activeItemIndex()-this._pageUpAndDown.delta;this._setActiveItemByIndex(i>0?i:0,1);break}else return;case 34:if(this._pageUpAndDown.enabled&&a){let i=this._activeItemIndex()+this._pageUpAndDown.delta,o=this._getItemsArray().length;this._setActiveItemByIndex(i<o?i:o-1,-1);break}else return;default:(a||_c(r,`shiftKey`))&&this._typeahead?.handleKey(r);return}this._typeahead?.reset(),r.preventDefault()}get activeItemIndex(){return this._activeItemIndex()}get activeItem(){return this._activeItem()}isTyping(){return!!this._typeahead&&this._typeahead.isTyping()}setFirstItemActive(){this._setActiveItemByIndex(0,1)}setLastItemActive(){this._setActiveItemByIndex(this._getItemsArray().length-1,-1)}setNextItemActive(){this._activeItemIndex()<0?this.setFirstItemActive():this._setActiveItemByDelta(1)}setPreviousItemActive(){this._activeItemIndex()<0&&this._wrap?this.setLastItemActive():this._setActiveItemByDelta(-1)}updateActiveItem(r){let e=this._getItemsArray(),n=typeof r==`number`?r:e.indexOf(r),a=e[n];this._activeItem.set(a??null),this._activeItemIndex.set(n),this._typeahead?.setCurrentSelectedItemIndex(n)}destroy(){this._typeaheadSubscription.unsubscribe(),this._itemChangesSubscription?.unsubscribe(),this._effectRef?.destroy(),this._typeahead?.destroy(),this.tabOut.complete(),this.change.complete()}_setActiveItemByDelta(r){this._wrap?this._setActiveInWrapMode(r):this._setActiveInDefaultMode(r)}_setActiveInWrapMode(r){let e=this._getItemsArray();for(let n=1;n<=e.length;n++){let a=(this._activeItemIndex()+r*n+e.length)%e.length,i=e[a];if(!this._skipPredicateFn(i)){this.setActiveItem(a);return}}}_setActiveInDefaultMode(r){this._setActiveItemByIndex(this._activeItemIndex()+r,r)}_setActiveItemByIndex(r,e){let n=this._getItemsArray();if(n[r]){for(;this._skipPredicateFn(n[r]);)if(r+=e,!n[r])return;this.setActiveItem(r)}}_getItemsArray(){return Nr$1(this._items)?this._items():this._items instanceof Mi?this._items.toArray():this._items}_itemsChanged(r){this._typeahead?.setItems(r);let e=this._activeItem();if(e){let n=r.indexOf(e);n>-1&&n!==this._activeItemIndex()&&(this._activeItemIndex.set(n),this._typeahead?.setCurrentSelectedItemIndex(n))}}};var _i=class extends ta{_origin=`program`;setFocusOrigin(r){return this._origin=r,this}setActiveItem(r){super.setActiveItem(r),this.activeItem&&this.activeItem.focus(this._origin)}};var Sc=/* @__PURE__ */ new Map;var Si=class t{_appId=v(It$1);static _infix=`a${Math.floor(Math.random()*1e5).toString()}`;getId(r,e=!1){this._appId!==`ng`&&(r+=this._appId);let n=Sc.get(r);return n===void 0?n=0:n++,Sc.set(r,n),`${r}${e?t._infix+`-`:``}${n}`}static ɵfac=function(e){return new(e||t)};static ɵprov=$r$1({token:t,factory:t.ɵfac})};var wc=` `;function Mm(t,r,e){let n=ra(t,r);e=e.trim(),!n.some(a=>a.trim()===e)&&(n.push(e),t.setAttribute(r,n.join(wc)))}function Tm(t,r,e){let n=ra(t,r);e=e.trim();let a=n.filter(i=>i!==e);a.length?t.setAttribute(r,a.join(wc)):t.removeAttribute(r)}function ra(t,r){return t.getAttribute(r)?.match(/\S+/g)??[]}var Ec=`cdk-describedby-message`;var na=`cdk-describedby-host`;var wi$1=0;var c_=(()=>{class t{_platform=v(ae$1);_document=v(mt$1);_messageRegistry=/* @__PURE__ */ new Map;_messagesContainer=null;_id=`${wi$1++}`;constructor(){v(je$1).load(Kr),this._id=v(It$1)+`-`+wi$1++}describe(e,n,a){if(!this._canBeDescribed(e,n))return;let i=Di(n,a);typeof n!=`string`?(Dc(n,this._id),this._messageRegistry.set(i,{messageElement:n,referenceCount:0})):this._messageRegistry.has(i)||this._createMessageElement(n,a),this._isElementDescribedByMessage(e,i)||this._addMessageReference(e,i)}removeDescription(e,n,a){if(!n||!this._isElementNode(e))return;let i=Di(n,a);if(this._isElementDescribedByMessage(e,i)&&this._removeMessageReference(e,i),typeof n==`string`){let o=this._messageRegistry.get(i);o&&o.referenceCount===0&&this._deleteMessageElement(i)}this._messagesContainer?.childNodes.length===0&&(this._messagesContainer.remove(),this._messagesContainer=null)}ngOnDestroy(){let e=this._document.querySelectorAll(`[${na}="${this._id}"]`);for(let n=0;n<e.length;n++)this._removeCdkDescribedByReferenceIds(e[n]),e[n].removeAttribute(na);this._messagesContainer?.remove(),this._messagesContainer=null,this._messageRegistry.clear()}_createMessageElement(e,n){let a=this._document.createElement(`div`);Dc(a,this._id),a.textContent=e,n&&a.setAttribute(`role`,n),this._createMessagesContainer(),this._messagesContainer.appendChild(a),this._messageRegistry.set(Di(e,n),{messageElement:a,referenceCount:0})}_deleteMessageElement(e){this._messageRegistry.get(e)?.messageElement?.remove(),this._messageRegistry.delete(e)}_createMessagesContainer(){if(this._messagesContainer)return;let e=`cdk-describedby-message-container`,n=this._document.querySelectorAll(`.${e}[platform="server"]`);for(let i=0;i<n.length;i++)n[i].remove();let a=this._document.createElement(`div`);a.style.visibility=`hidden`,a.classList.add(e),a.classList.add(`cdk-visually-hidden`),this._platform.isBrowser||a.setAttribute(`platform`,`server`),this._document.body.appendChild(a),this._messagesContainer=a}_removeCdkDescribedByReferenceIds(e){let n=ra(e,`aria-describedby`).filter(a=>a.indexOf(Ec)!=0);e.setAttribute(`aria-describedby`,n.join(` `))}_addMessageReference(e,n){let a=this._messageRegistry.get(n);Mm(e,`aria-describedby`,a.messageElement.id),e.setAttribute(na,this._id),a.referenceCount++}_removeMessageReference(e,n){let a=this._messageRegistry.get(n);a.referenceCount--,Tm(e,`aria-describedby`,a.messageElement.id),e.removeAttribute(na)}_isElementDescribedByMessage(e,n){let a=ra(e,`aria-describedby`),i=this._messageRegistry.get(n),o=i&&i.messageElement.id;return!!o&&a.indexOf(o)!=-1}_canBeDescribed(e,n){if(!this._isElementNode(e))return!1;if(n&&typeof n==`object`)return!0;let a=n==null?``:`${n}`.trim(),i=e.getAttribute(`aria-label`);return a?!i||i.trim()!==a:!1}_isElementNode(e){return e.nodeType===this._document.ELEMENT_NODE}static ɵfac=function(n){return new(n||t)};static ɵprov=$r$1({token:t,factory:t.ɵfac})}return t})();function Di(t,r){return typeof t==`string`?`${r||``}/${t}`:t}function Dc(t,r){t.id||(t.id=`${Ec}-${r}-${wi$1++}`)}var Ln=(function(t){return t[t.NORMAL=0]=`NORMAL`,t[t.NEGATED=1]=`NEGATED`,t[t.INVERTED=2]=`INVERTED`,t})(Ln||{});var aa;var St;function h_(){if(St==null){if(typeof document!=`object`||!document||typeof Element!=`function`||!Element)return St=!1,St;if(document.documentElement?.style&&`scrollBehavior`in document.documentElement.style)St=!0;else{let t=Element.prototype.scrollTo;t?St=!/\{\s*\[native code\]\s*\}/.test(t.toString()):St=!1}}return St}function g_(){if(typeof document!=`object`||!document)return Ln.NORMAL;if(aa==null){let t=document.createElement(`div`),r=t.style;t.dir=`rtl`,r.width=`1px`,r.overflow=`auto`,r.visibility=`hidden`,r.pointerEvents=`none`,r.position=`absolute`;let e=document.createElement(`div`),n=e.style;n.width=`2px`,n.height=`1px`,t.appendChild(e),document.body.appendChild(t),aa=Ln.NORMAL,t.scrollLeft===0&&(t.scrollLeft=1,aa=t.scrollLeft===0?Ln.NEGATED:Ln.INVERTED),t.remove()}return aa}function v_(){return typeof __karma__<`u`&&!!__karma__||typeof jasmine<`u`&&!!jasmine||typeof jest<`u`&&!!jest||typeof Mocha<`u`&&!!Mocha}var tn$1;var Cc=[`color`,`button`,`checkbox`,`date`,`datetime-local`,`email`,`file`,`hidden`,`image`,`month`,`number`,`password`,`radio`,`range`,`reset`,`search`,`submit`,`tel`,`text`,`time`,`url`,`week`];function __(){if(tn$1)return tn$1;if(typeof document!=`object`||!document)return tn$1=new Set(Cc),tn$1;let t=document.createElement(`input`);return tn$1=new Set(Cc.filter(r=>(t.setAttribute(`type`,r),t.type===r))),tn$1}var C_={XSmall:`(max-width: 599.98px)`,Small:`(min-width: 600px) and (max-width: 959.98px)`,Medium:`(min-width: 960px) and (max-width: 1279.98px)`,Large:`(min-width: 1280px) and (max-width: 1919.98px)`,XLarge:`(min-width: 1920px)`,Handset:`(max-width: 599.98px) and (orientation: portrait), (max-width: 959.98px) and (orientation: landscape)`,Tablet:`(min-width: 600px) and (max-width: 839.98px) and (orientation: portrait), (min-width: 960px) and (max-width: 1279.98px) and (orientation: landscape)`,Web:`(min-width: 840px) and (orientation: portrait), (min-width: 1280px) and (orientation: landscape)`,HandsetPortrait:`(max-width: 599.98px) and (orientation: portrait)`,TabletPortrait:`(min-width: 600px) and (max-width: 839.98px) and (orientation: portrait)`,WebPortrait:`(min-width: 840px) and (orientation: portrait)`,HandsetLandscape:`(max-width: 959.98px) and (orientation: landscape)`,TabletLandscape:`(min-width: 960px) and (max-width: 1279.98px) and (orientation: landscape)`,WebLandscape:`(min-width: 1280px) and (orientation: landscape)`};var Om=new S(`MATERIAL_ANIMATIONS`);var Ic=null;function Pm(){return v(Om,{optional:!0})?.animationsDisabled||v(Zv,{optional:!0})===`NoopAnimations`?`di-disabled`:(Ic??=v(Jr).matchMedia(`(prefers-reduced-motion)`).matches,Ic?`reduced-motion`:`enabled`)}function nn$1(){return Pm()!==`enabled`}function M_(t){return t==null?``:typeof t==`string`?t:`${t}px`}function O_(t){return t!=null&&`${t}`!=`false`}var pe$1=(function(t){return t[t.FADING_IN=0]=`FADING_IN`,t[t.VISIBLE=1]=`VISIBLE`,t[t.FADING_OUT=2]=`FADING_OUT`,t[t.HIDDEN=3]=`HIDDEN`,t})(pe$1||{});var Ei=class{_renderer;element;config;_animationForciblyDisabledThroughCss;state=pe$1.HIDDEN;constructor(r,e,n,a=!1){this._renderer=r,this.element=e,this.config=n,this._animationForciblyDisabledThroughCss=a}fadeOut(){this._renderer.fadeOutRipple(this)}};var Ac=en({passive:!0,capture:!0});var Ci$1=class{_events=/* @__PURE__ */ new Map;addHandler(r,e,n,a){let i=this._events.get(e);if(i){let o=i.get(n);o?o.add(a):i.set(n,/* @__PURE__ */ new Set([a]))}else this._events.set(e,/* @__PURE__ */ new Map([[n,/* @__PURE__ */ new Set([a])]])),r.runOutsideAngular(()=>{document.addEventListener(e,this._delegateEventHandler,Ac)})}removeHandler(r,e,n){let a=this._events.get(r);if(!a)return;let i=a.get(e);i&&(i.delete(n),i.size===0&&a.delete(e),a.size===0&&(this._events.delete(r),document.removeEventListener(r,this._delegateEventHandler,Ac)))}_delegateEventHandler=r=>{let e=Se$2(r);e&&this._events.get(r.type)?.forEach((n,a)=>{(a===e||a.contains(e))&&n.forEach(i=>i.handleEvent(r))})}};var Un={enterDuration:225,exitDuration:150};var Fm=800;var Rc=en({passive:!0,capture:!0});var Nc=[`mousedown`,`touchstart`];var xc=[`mouseup`,`mouseleave`,`touchend`,`touchcancel`];var km=(()=>{class t{static ɵfac=function(n){return new(n||t)};static ɵcmp=aw({type:t,selectors:[[`ng-component`]],hostAttrs:[`mat-ripple-style-loader`,``],decls:0,vars:0,template:function(n,a){},styles:[`.mat-ripple {
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
`],encapsulation:2})}return t})();var Bn=class t{_target;_ngZone;_platform;_containerElement;_triggerElement=null;_isPointerDown=!1;_activeRipples=/* @__PURE__ */ new Map;_mostRecentTransientRipple=null;_lastTouchStartEvent;_pointerUpEventsRegistered=!1;_containerRect=null;static _eventManager=new Ci$1;constructor(r,e,n,a,i){this._target=r,this._ngZone=e,this._platform=a,a.isBrowser&&(this._containerElement=xe(n)),i&&i.get(je$1).load(km)}fadeInRipple(r,e,n={}){let a=this._containerRect=this._containerRect||this._containerElement.getBoundingClientRect(),i=z$1(z$1({},Un),n.animation);n.centered&&(r=a.left+a.width/2,e=a.top+a.height/2);let o=n.radius||Lm(r,e,a),c=r-a.left,s=e-a.top,u=i.enterDuration,d=document.createElement(`div`);d.classList.add(`mat-ripple-element`),d.style.left=`${c-o}px`,d.style.top=`${s-o}px`,d.style.height=`${o*2}px`,d.style.width=`${o*2}px`,n.color!=null&&(d.style.backgroundColor=n.color),d.style.transitionDuration=`${u}ms`,this._containerElement.appendChild(d);let f=window.getComputedStyle(d),p=f.transitionProperty,_=f.transitionDuration,R=p===`none`||_===`0s`||_===`0s, 0s`||a.width===0&&a.height===0,N=new Ei(this,d,n,R);d.style.transform=`scale3d(1, 1, 1)`,N.state=pe$1.FADING_IN,n.persistent||(this._mostRecentTransientRipple=N);let D=null;return!R&&(u||i.exitDuration)&&this._ngZone.runOutsideAngular(()=>{let w=()=>{D&&(D.fallbackTimer=null),clearTimeout(U),this._finishRippleTransition(N)},x=()=>this._destroyRipple(N),U=setTimeout(x,u+100);d.addEventListener(`transitionend`,w),d.addEventListener(`transitioncancel`,x),D={onTransitionEnd:w,onTransitionCancel:x,fallbackTimer:U}}),this._activeRipples.set(N,D),(R||!u)&&this._finishRippleTransition(N),N}fadeOutRipple(r){if(r.state===pe$1.FADING_OUT||r.state===pe$1.HIDDEN)return;let e=r.element,n=z$1(z$1({},Un),r.config.animation);e.style.transitionDuration=`${n.exitDuration}ms`,e.style.opacity=`0`,r.state=pe$1.FADING_OUT,(r._animationForciblyDisabledThroughCss||!n.exitDuration)&&this._finishRippleTransition(r)}fadeOutAll(){this._getActiveRipples().forEach(r=>r.fadeOut())}fadeOutAllNonPersistent(){this._getActiveRipples().forEach(r=>{r.config.persistent||r.fadeOut()})}setupTriggerEvents(r){let e=xe(r);!this._platform.isBrowser||!e||e===this._triggerElement||(this._removeTriggerEvents(),this._triggerElement=e,Nc.forEach(n=>{t._eventManager.addHandler(this._ngZone,n,e,this)}))}handleEvent(r){r.type===`mousedown`?this._onMousedown(r):r.type===`touchstart`?this._onTouchStart(r):this._onPointerUp(),this._pointerUpEventsRegistered||(this._ngZone.runOutsideAngular(()=>{xc.forEach(e=>{this._triggerElement.addEventListener(e,this,Rc)})}),this._pointerUpEventsRegistered=!0)}_finishRippleTransition(r){r.state===pe$1.FADING_IN?this._startFadeOutTransition(r):r.state===pe$1.FADING_OUT&&this._destroyRipple(r)}_startFadeOutTransition(r){let e=r===this._mostRecentTransientRipple,{persistent:n}=r.config;r.state=pe$1.VISIBLE,!n&&(!e||!this._isPointerDown)&&r.fadeOut()}_destroyRipple(r){let e=this._activeRipples.get(r)??null;this._activeRipples.delete(r),this._activeRipples.size||(this._containerRect=null),r===this._mostRecentTransientRipple&&(this._mostRecentTransientRipple=null),r.state=pe$1.HIDDEN,e!==null&&(r.element.removeEventListener(`transitionend`,e.onTransitionEnd),r.element.removeEventListener(`transitioncancel`,e.onTransitionCancel),e.fallbackTimer!==null&&clearTimeout(e.fallbackTimer)),r.element.remove()}_onMousedown(r){let e=On(r),n=this._lastTouchStartEvent&&Date.now()<this._lastTouchStartEvent+Fm;!this._target.rippleDisabled&&!e&&!n&&(this._isPointerDown=!0,this.fadeInRipple(r.clientX,r.clientY,this._target.rippleConfig))}_onTouchStart(r){if(!this._target.rippleDisabled&&!Pn(r)){this._lastTouchStartEvent=Date.now(),this._isPointerDown=!0;let e=r.changedTouches;if(e)for(let n=0;n<e.length;n++)this.fadeInRipple(e[n].clientX,e[n].clientY,this._target.rippleConfig)}}_onPointerUp(){this._isPointerDown&&(this._isPointerDown=!1,this._getActiveRipples().forEach(r=>{let e=r.state===pe$1.VISIBLE||r.config.terminateOnPointerUp&&r.state===pe$1.FADING_IN;!r.config.persistent&&e&&r.fadeOut()}))}_getActiveRipples(){return Array.from(this._activeRipples.keys())}_removeTriggerEvents(){let r=this._triggerElement;r&&(Nc.forEach(e=>t._eventManager.removeHandler(e,r,this)),this._pointerUpEventsRegistered&&(xc.forEach(e=>r.removeEventListener(e,this,Rc)),this._pointerUpEventsRegistered=!1))}};function Lm(t,r,e){let n=Math.max(Math.abs(t-e.left),Math.abs(t-e.right)),a=Math.max(Math.abs(r-e.top),Math.abs(r-e.bottom));return Math.sqrt(n*n+a*a)}var Ii=new S(`mat-ripple-global-options`);var W_=(()=>{class t{_elementRef=v(Wr$1);_animationsDisabled=nn$1();color;unbounded=!1;centered=!1;radius=0;animation;get disabled(){return this._disabled}set disabled(e){e&&this.fadeOutAllNonPersistent(),this._disabled=e,this._setupTriggerEventsIfEnabled()}_disabled=!1;get trigger(){return this._trigger||this._elementRef.nativeElement}set trigger(e){this._trigger=e,this._setupTriggerEventsIfEnabled()}_trigger;_rippleRenderer;_globalOptions;_isInitialized=!1;constructor(){let e=v(Fe$1),n=v(ae$1),a=v(Ii,{optional:!0}),i=v(se$1);this._globalOptions=a||{},this._rippleRenderer=new Bn(this,e,this._elementRef,n,i)}ngOnInit(){this._isInitialized=!0,this._setupTriggerEventsIfEnabled()}ngOnDestroy(){this._rippleRenderer._removeTriggerEvents()}fadeOutAll(){this._rippleRenderer.fadeOutAll()}fadeOutAllNonPersistent(){this._rippleRenderer.fadeOutAllNonPersistent()}get rippleConfig(){return{centered:this.centered,radius:this.radius,color:this.color,animation:z$1(z$1(z$1({},this._globalOptions.animation),this._animationsDisabled?{enterDuration:0,exitDuration:0}:{}),this.animation),terminateOnPointerUp:this._globalOptions.terminateOnPointerUp}}get rippleDisabled(){return this.disabled||!!this._globalOptions.disabled}_setupTriggerEventsIfEnabled(){!this.disabled&&this._isInitialized&&this._rippleRenderer.setupTriggerEvents(this.trigger)}launch(e,n=0,a){return typeof e==`number`?this._rippleRenderer.fadeInRipple(e,n,z$1(z$1({},this.rippleConfig),a)):this._rippleRenderer.fadeInRipple(0,0,z$1(z$1({},this.rippleConfig),e))}static ɵfac=function(n){return new(n||t)};static ɵdir=fw({type:t,selectors:[[``,`mat-ripple`,``],[``,`matRipple`,``]],hostAttrs:[1,`mat-ripple`],hostVars:2,hostBindings:function(n,a){n&2&&pm$1(`mat-ripple-unbounded`,a.unbounded)},inputs:{color:[0,`matRippleColor`,`color`],unbounded:[0,`matRippleUnbounded`,`unbounded`],centered:[0,`matRippleCentered`,`centered`],radius:[0,`matRippleRadius`,`radius`],animation:[0,`matRippleAnimation`,`animation`],disabled:[0,`matRippleDisabled`,`disabled`],trigger:[0,`matRippleTrigger`,`trigger`]},exportAs:[`matRipple`]})}return t})();var Um={capture:!0};var Bm=[`focus`,`mousedown`,`mouseenter`,`touchstart`];var Ai=`mat-ripple-loader-uninitialized`;var Ri=`mat-ripple-loader-class-name`;var Mc=`mat-ripple-loader-centered`;var ia=`mat-ripple-loader-disabled`;var Tc=(()=>{class t{_document=v(mt$1);_animationsDisabled=nn$1();_globalRippleOptions=v(Ii,{optional:!0});_platform=v(ae$1);_ngZone=v(Fe$1);_injector=v(se$1);_eventCleanups;_hosts=/* @__PURE__ */ new Map;constructor(){let e=v(Vr$1).createRenderer(null,null);this._eventCleanups=this._ngZone.runOutsideAngular(()=>Bm.map(n=>e.listen(this._document,n,this._onInteraction,Um)))}ngOnDestroy(){let e=this._hosts.keys();for(let n of e)this.destroyRipple(n);this._eventCleanups.forEach(n=>n())}configureRipple(e,n){e.setAttribute(Ai,this._globalRippleOptions?.namespace??``),(n.className||!e.hasAttribute(Ri))&&e.setAttribute(Ri,n.className||``),n.centered&&e.setAttribute(Mc,``),n.disabled&&e.setAttribute(ia,``)}setDisabled(e,n){let a=this._hosts.get(e);a?(a.target.rippleDisabled=n,!n&&!a.hasSetUpEvents&&(a.hasSetUpEvents=!0,a.renderer.setupTriggerEvents(e))):n?e.setAttribute(ia,``):e.removeAttribute(ia)}_onInteraction=e=>{let n=Se$2(e);if(n instanceof HTMLElement){let a=n.closest(`[${Ai}="${this._globalRippleOptions?.namespace??``}"]`);a&&this._createRipple(a)}};_createRipple(e){if(!this._document||this._hosts.has(e))return;e.querySelector(`.mat-ripple`)?.remove();let n=this._document.createElement(`span`);n.classList.add(`mat-ripple`,e.getAttribute(Ri)),e.append(n);let a=this._globalRippleOptions,i=this._animationsDisabled?0:a?.animation?.enterDuration??Un.enterDuration,o=this._animationsDisabled?0:a?.animation?.exitDuration??Un.exitDuration,c={rippleDisabled:this._animationsDisabled||a?.disabled||e.hasAttribute(ia),rippleConfig:{centered:e.hasAttribute(Mc),terminateOnPointerUp:a?.terminateOnPointerUp,animation:{enterDuration:i,exitDuration:o}}},s=new Bn(c,this._ngZone,n,this._platform,this._injector),u=!c.rippleDisabled;u&&s.setupTriggerEvents(e),this._hosts.set(e,{target:c,renderer:s,hasSetUpEvents:u}),e.removeAttribute(Ai)}destroyRipple(e){let n=this._hosts.get(e);n&&(n.renderer._removeTriggerEvents(),this._hosts.delete(e))}static ɵfac=function(n){return new(n||t)};static ɵprov=$r$1({token:t,factory:t.ɵfac})}return t})();var Oc=(()=>{class t{static ɵfac=function(n){return new(n||t)};static ɵcmp=aw({type:t,selectors:[[`structural-styles`]],decls:0,vars:0,template:function(n,a){},styles:[`.mat-focus-indicator {
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
`],encapsulation:2})}return t})();var jm=new S(`MAT_BUTTON_CONFIG`);function Pc(t){return t==null?void 0:Sj(t)}var jn=(()=>{class t{_elementRef=v(Wr$1);_ngZone=v(Fe$1);_animationsDisabled=nn$1();_config=v(jm,{optional:!0});_focusMonitor=v(Xr);_cleanupClick;_renderer=v(Ic$1);_rippleLoader=v(Tc);_isAnchor;_isFab=!1;color;get disableRipple(){return this._disableRipple}set disableRipple(e){this._disableRipple=e,this._updateRippleDisabled()}_disableRipple=!1;get disabled(){return this._disabled}set disabled(e){this._disabled=e,this._updateRippleDisabled()}_disabled=!1;ariaDisabled;disabledInteractive;tabIndex;set _tabindex(e){this.tabIndex=e}showProgress=Ij(!1,{transform:Nj});constructor(){v(je$1).load(Oc);let e=this._elementRef.nativeElement;this._isAnchor=e.tagName===`A`,this.disabledInteractive=this._config?.disabledInteractive??!1,this.color=this._config?.color??null,this._rippleLoader?.configureRipple(e,{className:`mat-mdc-button-ripple`})}ngAfterViewInit(){this._focusMonitor.monitor(this._elementRef,!0),this._isAnchor&&this._setupAsAnchor()}ngOnDestroy(){this._cleanupClick?.(),this._focusMonitor.stopMonitoring(this._elementRef),this._rippleLoader?.destroyRipple(this._elementRef.nativeElement)}focus(e=`program`,n){e?this._focusMonitor.focusVia(this._elementRef.nativeElement,e,n):this._elementRef.nativeElement.focus(n)}_getAriaDisabled(){return this.ariaDisabled!=null?this.ariaDisabled:this._isAnchor?this.disabled||null:this.disabled&&this.disabledInteractive?!0:null}_getDisabledAttribute(){return this.disabledInteractive||!this.disabled?null:!0}_updateRippleDisabled(){this._rippleLoader?.setDisabled(this._elementRef.nativeElement,this.disableRipple||this.disabled)}_getTabIndex(){return this._isAnchor?this.disabled&&!this.disabledInteractive?-1:this.tabIndex:this.tabIndex}_setupAsAnchor(){this._cleanupClick=this._ngZone.runOutsideAngular(()=>this._renderer.listen(this._elementRef.nativeElement,`click`,e=>{this.disabled&&(e.preventDefault(),e.stopImmediatePropagation())}))}static ɵfac=function(n){return new(n||t)};static ɵdir=fw({type:t,hostAttrs:[1,`mat-mdc-button-base`],hostVars:15,hostBindings:function(n,a){n&2&&(qg(`disabled`,a._getDisabledAttribute())(`aria-disabled`,a._getAriaDisabled())(`tabindex`,a._getTabIndex()),jC(a.color?`mat-`+a.color:``),pm$1(`mat-mdc-button-progress-indicator-shown`,a.showProgress())(`mat-mdc-button-disabled`,a.disabled)(`mat-mdc-button-disabled-interactive`,a.disabledInteractive)(`mat-unthemed`,!a.color)(`_mat-animation-noopable`,a._animationsDisabled))},inputs:{color:`color`,disableRipple:[2,`disableRipple`,`disableRipple`,Nj],disabled:[2,`disabled`,`disabled`,Nj],ariaDisabled:[2,`aria-disabled`,`ariaDisabled`,Nj],disabledInteractive:[2,`disabledInteractive`,`disabledInteractive`,Nj],tabIndex:[2,`tabIndex`,`tabIndex`,Pc],_tabindex:[2,`tabindex`,`_tabindex`,Pc],showProgress:[1,`showProgress`]}})}return t})();var zm=(()=>{class t extends jn{constructor(){super(),this._rippleLoader.configureRipple(this._elementRef.nativeElement,{centered:!0})}static ɵfac=function(n){return new(n||t)};static ɵcmp=(function(){let e=[`*`,[[``,`progressIndicator`,``]]],n=[`*`,`[progressIndicator]`];function a(i,o){i&1&&(kl$1(0,`div`,1),vC(1,1),Ll$1())}return aw({type:t,selectors:[[`button`,`mat-icon-button`,``],[`a`,`mat-icon-button`,``],[`button`,`matIconButton`,``],[`a`,`matIconButton`,``]],hostAttrs:[1,`mdc-icon-button`,`mat-mdc-icon-button`],exportAs:[`matButton`,`matAnchor`],features:[Og],ngContentSelectors:n,decls:5,vars:1,consts:[[1,`mat-mdc-button-persistent-ripple`,`mdc-icon-button__ripple`],[1,`mat-mdc-button-progress-indicator-container`],[1,`mat-focus-indicator`],[1,`mat-mdc-button-touch-target`]],template:function(o,c){o&1&&(yC(e),Yg(0,`span`,0),vC(1),eC(2,a,2,0,`div`,1),Yg(3,`span`,2)(4,`span`,3)),o&2&&(ID(2),nC(c.showProgress()?2:-1))},styles:[`.mat-mdc-icon-button {
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
`],encapsulation:2})})()}return t})();var Fc=/* @__PURE__ */ new Map([[`text`,[`mat-mdc-button`]],[`filled`,[`mdc-button--unelevated`,`mat-mdc-unelevated-button`]],[`elevated`,[`mdc-button--raised`,`mat-mdc-raised-button`]],[`outlined`,[`mdc-button--outlined`,`mat-mdc-outlined-button`]],[`tonal`,[`mat-tonal-button`]]]);var y0=(()=>{class t extends jn{get appearance(){return this._appearance}set appearance(e){this.setAppearance(e||this._config?.defaultAppearance||`text`)}_appearance=null;constructor(){super();let e=$m(this._elementRef.nativeElement);e&&this.setAppearance(e)}setAppearance(e){if(e===this._appearance)return;let n=this._elementRef.nativeElement.classList,a=this._appearance?Fc.get(this._appearance):null,i=Fc.get(e);a&&n.remove(...a),n.add(...i),this._appearance=e}static ɵfac=function(n){return new(n||t)};static ɵcmp=(function(){let e=[[[``,8,`material-icons`,3,`iconPositionEnd`,``],[`mat-icon`,3,`iconPositionEnd`,``],[``,`matButtonIcon`,``,3,`iconPositionEnd`,``],[``,8,`material-symbols-outlined`,3,`iconPositionEnd`,``],[``,8,`material-symbols-rounded`,3,`iconPositionEnd`,``],[``,8,`material-symbols-sharp`,3,`iconPositionEnd`,``]],`*`,[[``,`iconPositionEnd`,``,8,`material-icons`],[`mat-icon`,`iconPositionEnd`,``],[``,`matButtonIcon`,``,`iconPositionEnd`,``],[``,`iconPositionEnd`,``,8,`material-symbols-outlined`],[``,`iconPositionEnd`,``,8,`material-symbols-rounded`],[``,`iconPositionEnd`,``,8,`material-symbols-sharp`]],[[``,`progressIndicator`,``]]],n=[`.material-icons:not([iconPositionEnd]), mat-icon:not([iconPositionEnd]), [matButtonIcon]:not([iconPositionEnd]), .material-symbols-outlined:not([iconPositionEnd]), .material-symbols-rounded:not([iconPositionEnd]), .material-symbols-sharp:not([iconPositionEnd])`,`*`,`.material-icons[iconPositionEnd], mat-icon[iconPositionEnd], [matButtonIcon][iconPositionEnd], .material-symbols-outlined[iconPositionEnd], .material-symbols-rounded[iconPositionEnd], .material-symbols-sharp[iconPositionEnd]`,`[progressIndicator]`];function a(i,o){i&1&&(kl$1(0,`div`,2),vC(1,3),Ll$1())}return aw({type:t,selectors:[[`button`,`matButton`,``],[`a`,`matButton`,``],[`button`,`mat-button`,``],[`button`,`mat-raised-button`,``],[`button`,`mat-flat-button`,``],[`button`,`mat-stroked-button`,``],[`a`,`mat-button`,``],[`a`,`mat-raised-button`,``],[`a`,`mat-flat-button`,``],[`a`,`mat-stroked-button`,``]],hostAttrs:[1,`mdc-button`],inputs:{appearance:[0,`matButton`,`appearance`]},exportAs:[`matButton`,`matAnchor`],features:[Og],ngContentSelectors:n,decls:8,vars:5,consts:[[1,`mat-mdc-button-persistent-ripple`],[1,`mdc-button__label`],[1,`mat-mdc-button-progress-indicator-container`],[1,`mat-focus-indicator`],[1,`mat-mdc-button-touch-target`]],template:function(o,c){o&1&&(yC(e),Yg(0,`span`,0),vC(1),kl$1(2,`span`,1),vC(3,1),Ll$1(),vC(4,2),eC(5,a,2,0,`div`,2),Yg(6,`span`,3)(7,`span`,4)),o&2&&(pm$1(`mdc-button__ripple`,!c._isFab)(`mdc-fab__ripple`,c._isFab),ID(5),nC(c.showProgress()?5:-1))},styles:[`.mat-mdc-button-base {
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
`],encapsulation:2})})()}return t})();function $m(t){return t.hasAttribute(`mat-raised-button`)?`elevated`:t.hasAttribute(`mat-stroked-button`)?`outlined`:t.hasAttribute(`mat-flat-button`)?`filled`:t.hasAttribute(`mat-button`)?`text`:null}var kc=new S(`mat-mdc-fab-default-options`,{providedIn:`root`,factory:()=>zn});var zn={color:`accent`};var _0=(()=>{class t extends jn{_options=v(kc,{optional:!0});_isFab=!0;extended=!1;constructor(){super(),this._options=this._options||zn,this.color=this._options.color||zn.color}static ɵfac=function(n){return new(n||t)};static ɵcmp=(function(){let e=[[[``,8,`material-icons`,3,`iconPositionEnd`,``],[`mat-icon`,3,`iconPositionEnd`,``],[``,`matButtonIcon`,``,3,`iconPositionEnd`,``],[``,8,`material-symbols-outlined`,3,`iconPositionEnd`,``],[``,8,`material-symbols-rounded`,3,`iconPositionEnd`,``],[``,8,`material-symbols-sharp`,3,`iconPositionEnd`,``]],`*`,[[``,`iconPositionEnd`,``,8,`material-icons`],[`mat-icon`,`iconPositionEnd`,``],[``,`matButtonIcon`,``,`iconPositionEnd`,``],[``,`iconPositionEnd`,``,8,`material-symbols-outlined`],[``,`iconPositionEnd`,``,8,`material-symbols-rounded`],[``,`iconPositionEnd`,``,8,`material-symbols-sharp`]],[[``,`progressIndicator`,``]]],n=[`.material-icons:not([iconPositionEnd]), mat-icon:not([iconPositionEnd]), [matButtonIcon]:not([iconPositionEnd]), .material-symbols-outlined:not([iconPositionEnd]), .material-symbols-rounded:not([iconPositionEnd]), .material-symbols-sharp:not([iconPositionEnd])`,`*`,`.material-icons[iconPositionEnd], mat-icon[iconPositionEnd], [matButtonIcon][iconPositionEnd], .material-symbols-outlined[iconPositionEnd], .material-symbols-rounded[iconPositionEnd], .material-symbols-sharp[iconPositionEnd]`,`[progressIndicator]`];function a(i,o){i&1&&(kl$1(0,`div`,2),vC(1,3),Ll$1())}return aw({type:t,selectors:[[`button`,`mat-fab`,``],[`a`,`mat-fab`,``],[`button`,`matFab`,``],[`a`,`matFab`,``]],hostAttrs:[1,`mdc-fab`,`mat-mdc-fab-base`,`mat-mdc-fab`],hostVars:4,hostBindings:function(o,c){o&2&&pm$1(`mdc-fab--extended`,c.extended)(`mat-mdc-extended-fab`,c.extended)},inputs:{extended:[2,`extended`,`extended`,Nj]},exportAs:[`matButton`,`matAnchor`],features:[Og],ngContentSelectors:n,decls:8,vars:5,consts:[[1,`mat-mdc-button-persistent-ripple`],[1,`mdc-button__label`],[1,`mat-mdc-button-progress-indicator-container`],[1,`mat-focus-indicator`],[1,`mat-mdc-button-touch-target`]],template:function(o,c){o&1&&(yC(e),Yg(0,`span`,0),vC(1),kl$1(2,`span`,1),vC(3,1),Ll$1(),vC(4,2),eC(5,a,2,0,`div`,2),Yg(6,`span`,3)(7,`span`,4)),o&2&&(pm$1(`mdc-button__ripple`,!c._isFab)(`mdc-fab__ripple`,c._isFab),ID(5),nC(c.showProgress()?5:-1))},styles:[`.mat-mdc-fab-base {
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
`],encapsulation:2})})()}return t})();var S0=(()=>{class t extends jn{_options=v(kc,{optional:!0});_isFab=!0;constructor(){super(),this._options=this._options||zn,this.color=this._options.color||zn.color}static ɵfac=function(n){return new(n||t)};static ɵcmp=(function(){let e=[[[``,8,`material-icons`,3,`iconPositionEnd`,``],[`mat-icon`,3,`iconPositionEnd`,``],[``,`matButtonIcon`,``,3,`iconPositionEnd`,``],[``,8,`material-symbols-outlined`,3,`iconPositionEnd`,``],[``,8,`material-symbols-rounded`,3,`iconPositionEnd`,``],[``,8,`material-symbols-sharp`,3,`iconPositionEnd`,``]],`*`,[[``,`iconPositionEnd`,``,8,`material-icons`],[`mat-icon`,`iconPositionEnd`,``],[``,`matButtonIcon`,``,`iconPositionEnd`,``],[``,`iconPositionEnd`,``,8,`material-symbols-outlined`],[``,`iconPositionEnd`,``,8,`material-symbols-rounded`],[``,`iconPositionEnd`,``,8,`material-symbols-sharp`]],[[``,`progressIndicator`,``]]],n=[`.material-icons:not([iconPositionEnd]), mat-icon:not([iconPositionEnd]), [matButtonIcon]:not([iconPositionEnd]), .material-symbols-outlined:not([iconPositionEnd]), .material-symbols-rounded:not([iconPositionEnd]), .material-symbols-sharp:not([iconPositionEnd])`,`*`,`.material-icons[iconPositionEnd], mat-icon[iconPositionEnd], [matButtonIcon][iconPositionEnd], .material-symbols-outlined[iconPositionEnd], .material-symbols-rounded[iconPositionEnd], .material-symbols-sharp[iconPositionEnd]`,`[progressIndicator]`];function a(i,o){i&1&&(kl$1(0,`div`,2),vC(1,3),Ll$1())}return aw({type:t,selectors:[[`button`,`mat-mini-fab`,``],[`a`,`mat-mini-fab`,``],[`button`,`matMiniFab`,``],[`a`,`matMiniFab`,``]],hostAttrs:[1,`mdc-fab`,`mat-mdc-fab-base`,`mdc-fab--mini`,`mat-mdc-mini-fab`],exportAs:[`matButton`,`matAnchor`],features:[Og],ngContentSelectors:n,decls:8,vars:5,consts:[[1,`mat-mdc-button-persistent-ripple`],[1,`mdc-button__label`],[1,`mat-mdc-button-progress-indicator-container`],[1,`mat-focus-indicator`],[1,`mat-mdc-button-touch-target`]],template:function(o,c){o&1&&(yC(e),Yg(0,`span`,0),vC(1),kl$1(2,`span`,1),vC(3,1),Ll$1(),vC(4,2),eC(5,a,2,0,`div`,2),Yg(6,`span`,3)(7,`span`,4)),o&2&&(pm$1(`mdc-button__ripple`,!c._isFab)(`mdc-fab__ripple`,c._isFab),ID(5),nC(c.showProgress()?5:-1))},styles:[`.mat-mdc-fab-base {
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
`],encapsulation:2})})()}return t})();var Lc=class t{httpClient=v(mt);isBrowser=nr(v(Yv));_isAuthenticated=Et$1(!1);isAuthenticated=it$1(()=>this.myIdentityInfo.hasValue());myIdentityInfo=La(()=>this.isBrowser?`/api/identity/CheckAuthentication`:void 0,{parse:r=>r===null?void 0:r});getUsername_Url=`/api/identity/GetUsername?userId=`;getAntiForgeryToken=La(()=>this.isBrowser?`/api/identity/GetAntiForgeryToken`:void 0);constructor(){}submitLogin(r){let e=new re$1().set(`CfTurnstileResponse`,r.CfTurnstileResponse).set(`Password`,r.Password).set(`UsernameOrEmail`,r.UsernameOrEmail).set(`ReturnUrl`,r.ReturnUrl);return this.httpClient.post(`/api/identity/Login`,e,{observe:`response`,responseType:`text`}).pipe(ju$1({next:n=>{n.ok&&this.myIdentityInfo.reload()}}))}submitSignup(r){let e=new FormData;return e.set(`CfTurnstileResponse`,r.CfTurnstileResponse),e.set(`Email`,r.Email),e.set(`Username`,r.Username),e.set(`Password`,r.Password),this.httpClient.post(`/api/identity/Signup`,e).pipe(ju$1({next:n=>{n.success&&this.myIdentityInfo.reload()}}))}logout(){this.httpClient.post(`/api/identity/Logout`,null).subscribe({next:()=>{this.myIdentityInfo.reload()}})}getUsername(r){let e=new re$1().set(`userId`,r);return this.httpClient.get(`/api/identity/GetUsername`,{params:e})}static ɵfac=function(e){return new(e||t)};static ɵprov=$r$1({token:t,factory:t.ɵfac})};var c=class s{httpClient=v(mt);identityService=v(Lc);getProfileInfo_Url=`/api/UserProfile/GetProfileInfo?userId=`;myProfileInfo=La(()=>this.identityService.isAuthenticated()?`${this.getProfileInfo_Url}${this.identityService.myIdentityInfo.value()?.id}`:void 0);constructor(){}getUserAvatarUrl(e){let t=new re$1().set(`userId`,e);return this.httpClient.get(`/api/UserProfile/GetUserAvatarUrl`,{params:t})}saveUserAvatar(e){let t=new FormData;return t.append(`userImageFile`,e),this.httpClient.post(`/api/UserProfile/SubmitUserImage`,t).pipe(ju$1({next:r=>{r&&r.success&&this.myProfileInfo.reload()}}))}deleteUserAvatar(){return this.httpClient.delete(`/api/UserProfile/DeleteUserImage`).pipe(ju$1({next:e=>{e&&e.success&&this.myProfileInfo.reload()}}))}changeName(e){let t=new re$1().set(`name`,e);return this.httpClient.post(`/api/UserProfile/SubmitProfileName`,t).pipe(ju$1({next:r=>{r&&r.success&&this.myProfileInfo.reload()}}))}changeDescription(e){let t=new re$1().set(`description`,e);return this.httpClient.post(`/api/UserProfile/SubmitDescription`,t).pipe(ju$1({next:r=>{r&&r.success&&this.myProfileInfo.reload()}}))}static ɵfac=function(t){return new(t||s)};static ɵprov=$r$1({token:s,factory:s.ɵfac})};var be=20;var B=(()=>{class s{_ngZone=v(Fe$1);_platform=v(ae$1);_renderer=v(Vr$1).createRenderer(null,null);_cleanupGlobalListener;_scrolled=new ee;_scrolledCount=0;scrollContainers=/* @__PURE__ */ new Map;register(t){this.scrollContainers.has(t)||this.scrollContainers.set(t,t.elementScrolled().subscribe(()=>this._scrolled.next(t)))}deregister(t){let e=this.scrollContainers.get(t);e&&(e.unsubscribe(),this.scrollContainers.delete(t))}scrolled(t=be){return this._platform.isBrowser?new x(e=>{this._cleanupGlobalListener||(this._cleanupGlobalListener=this._ngZone.runOutsideAngular(()=>this._renderer.listen(`document`,`scroll`,()=>this._scrolled.next())));let n=t>0?this._scrolled.pipe(qy(t)).subscribe(e):this._scrolled.subscribe(e);return this._scrolledCount++,()=>{n.unsubscribe(),this._scrolledCount--,this._scrolledCount||(this._cleanupGlobalListener?.(),this._cleanupGlobalListener=void 0)}}):Ay()}ngOnDestroy(){this._cleanupGlobalListener?.(),this._cleanupGlobalListener=void 0,this.scrollContainers.forEach((t,e)=>this.deregister(e)),this._scrolled.complete()}ancestorScrolled(t,e){let n=this.getAncestorScrollContainers(t);return this.scrolled(e).pipe(rr$1(o=>!o||n.indexOf(o)>-1))}getAncestorScrollContainers(t){let e=[];return this.scrollContainers.forEach((n,o)=>{this._targetContainsElement(o,t)&&e.push(o)}),e}_targetContainsElement(t,e){let n=xe(e),o=t.getElementRef().nativeElement;do if(n==o)return!0;while(n=n.parentElement);return!1}static ɵfac=function(e){return new(e||s)};static ɵprov=$r$1({token:s,factory:s.ɵfac})}return s})();var we$1=(()=>{class s{elementRef=v(Wr$1);scrollDispatcher=v(B);ngZone=v(Fe$1);dir=v(am,{optional:!0});_scrollElement=this.elementRef.nativeElement;_destroyed=new ee;_renderer=v(Ic$1);_cleanupScroll;_elementScrolled=new ee;ngOnInit(){this._cleanupScroll=this.ngZone.runOutsideAngular(()=>this._renderer.listen(this._scrollElement,`scroll`,t=>this._elementScrolled.next(t))),this.scrollDispatcher.register(this)}ngOnDestroy(){this._cleanupScroll?.(),this._elementScrolled.complete(),this.scrollDispatcher.deregister(this),this._destroyed.next(),this._destroyed.complete()}elementScrolled(){return this._elementScrolled}getElementRef(){return this.elementRef}scrollTo(t){let e=this.elementRef.nativeElement,n=this.dir&&this.dir.value==`rtl`;t.left??=n?t.end:t.start,t.right??=n?t.start:t.end,t.bottom!=null&&(t.top=e.scrollHeight-e.clientHeight-t.bottom),n&&g_()!=Ln.NORMAL?(t.left!=null&&(t.right=e.scrollWidth-e.clientWidth-t.left),g_()==Ln.INVERTED?t.left=t.right:g_()==Ln.NEGATED&&(t.left=t.right?-t.right:t.right)):t.right!=null&&(t.left=e.scrollWidth-e.clientWidth-t.right),this._applyScrollToOptions(t)}_applyScrollToOptions(t){let e=this.elementRef.nativeElement;h_()?e.scrollTo(t):(t.top!=null&&(e.scrollTop=t.top),t.left!=null&&(e.scrollLeft=t.left))}measureScrollOffset(t){let e=`left`,n=`right`,o=this.elementRef.nativeElement;if(t==`top`)return o.scrollTop;if(t==`bottom`)return o.scrollHeight-o.clientHeight-o.scrollTop;let r=this.dir&&this.dir.value==`rtl`;return t==`start`?t=r?n:e:t==`end`&&(t=r?e:n),r&&g_()==Ln.INVERTED?t==e?o.scrollWidth-o.clientWidth-o.scrollLeft:o.scrollLeft:r&&g_()==Ln.NEGATED?t==e?o.scrollLeft+o.scrollWidth-o.clientWidth:-o.scrollLeft:t==e?o.scrollLeft:o.scrollWidth-o.clientWidth-o.scrollLeft}static ɵfac=function(e){return new(e||s)};static ɵdir=fw({type:s,selectors:[[``,`cdk-scrollable`,``],[``,`cdkScrollable`,``]]})}return s})();var Ce$1=20;var z=(()=>{class s{_platform=v(ae$1);_listeners;_viewportSize=null;_change=new ee;_document=v(mt$1);constructor(){let t=v(Fe$1),e=v(Vr$1).createRenderer(null,null);t.runOutsideAngular(()=>{if(this._platform.isBrowser){let n=o=>this._change.next(o);this._listeners=[e.listen(`window`,`resize`,n),e.listen(`window`,`orientationchange`,n)]}this.change().subscribe(()=>this._viewportSize=null)})}ngOnDestroy(){this._listeners?.forEach(t=>t()),this._change.complete()}getViewportSize(){this._viewportSize||this._updateViewportSize();let t={width:this._viewportSize.width,height:this._viewportSize.height};return this._platform.isBrowser||(this._viewportSize=null),t}getViewportRect(){let t=this.getViewportScrollPosition(),{width:e,height:n}=this.getViewportSize();return{top:t.top,left:t.left,bottom:t.top+n,right:t.left+e,height:n,width:e}}getViewportScrollPosition(){if(!this._platform.isBrowser)return{top:0,left:0};let t=this._document,e=this._getWindow(),n=t.documentElement,o=n.getBoundingClientRect();return{top:-o.top||t.body?.scrollTop||e.scrollY||n.scrollTop||0,left:-o.left||t.body?.scrollLeft||e.scrollX||n.scrollLeft||0}}change(t=Ce$1){return t>0?this._change.pipe(qy(t)):this._change}_getWindow(){return this._document.defaultView||window}_updateViewportSize(){let t=this._getWindow();this._viewportSize=this._platform.isBrowser?{width:t.innerWidth,height:t.innerHeight}:{width:0,height:0}}static ɵfac=function(e){return new(e||s)};static ɵprov=$r$1({token:s,factory:s.ɵfac})}return s})();var H=class{_attachedHost=null;attach(i){return this._attachedHost=i,i.attach(this)}detach(){let i=this._attachedHost;i!=null&&(this._attachedHost=null,i.detach())}get isAttached(){return this._attachedHost!=null}setAttachedHost(i){this._attachedHost=i}};var Y=class extends H{component;viewContainerRef;injector;projectableNodes;bindings;directives;constructor(i,t,e,n,o,r){super(),this.component=i,this.viewContainerRef=t,this.injector=e,this.projectableNodes=n,this.bindings=o||null,this.directives=r||null}};var W=class extends H{templateRef;viewContainerRef;context;injector;constructor(i,t,e,n){super(),this.templateRef=i,this.viewContainerRef=t,this.context=e,this.injector=n}get origin(){return this.templateRef.elementRef}attach(i,t=this.context){return this.context=t,super.attach(i)}detach(){return this.context=void 0,super.detach()}};var Pt=class extends H{element;constructor(i){super(),this.element=i instanceof Wr$1?i.nativeElement:i}};var q=class{_attachedPortal=null;_disposeFn=null;_isDisposed=!1;hasAttached(){return!!this._attachedPortal}attach(i){if(i instanceof Y)return this._attachedPortal=i,this.attachComponentPortal(i);if(i instanceof W)return this._attachedPortal=i,this.attachTemplatePortal(i);if(this.attachDomPortal&&i instanceof Pt)return this._attachedPortal=i,this.attachDomPortal(i)}attachDomPortal=null;detach(){this._attachedPortal&&(this._attachedPortal.setAttachedHost(null),this._attachedPortal=null),this._invokeDisposeFn()}dispose(){this.hasAttached()&&this.detach(),this._invokeDisposeFn(),this._isDisposed=!0}setDisposeFn(i){this._disposeFn=i}_invokeDisposeFn(){this._disposeFn&&(this._disposeFn(),this._disposeFn=null)}};var Q=class extends q{outletElement;_appRef;_defaultInjector;constructor(i,t,e){super(),this.outletElement=i,this._appRef=t,this._defaultInjector=e}attachComponentPortal(i){let t;if(i.viewContainerRef){let e=i.injector||i.viewContainerRef.injector,n=e.get(Un$1,null,{optional:!0})||void 0;t=i.viewContainerRef.createComponent(i.component,{index:i.viewContainerRef.length,injector:e,ngModuleRef:n,projectableNodes:i.projectableNodes||void 0,bindings:i.bindings||void 0,directives:i.directives||void 0}),this.setDisposeFn(()=>t.destroy())}else{let e=this._appRef,n=i.injector||this._defaultInjector||se$1.NULL,o=n.get(Ee$1,e.injector);t=Aj(i.component,{elementInjector:n,environmentInjector:o,projectableNodes:i.projectableNodes||void 0,bindings:i.bindings||void 0,directives:i.directives||void 0}),e.attachView(t.hostView),this.setDisposeFn(()=>{e.viewCount>0&&e.detachView(t.hostView),t.destroy()})}return this.outletElement.appendChild(this._getComponentRootNode(t)),this._attachedPortal=i,t}attachTemplatePortal(i){let t=i.viewContainerRef,e=t.createEmbeddedView(i.templateRef,i.context,{injector:i.injector});return e.rootNodes.forEach(n=>this.outletElement.appendChild(n)),e.detectChanges(),this.setDisposeFn(()=>{let n=t.indexOf(e);n!==-1&&t.remove(n)}),this._attachedPortal=i,e}attachDomPortal=i=>{let t=i.element;t.parentNode;let e=this.outletElement.ownerDocument.createComment(`dom-portal`);t.parentNode.insertBefore(e,t),this.outletElement.appendChild(t),this._attachedPortal=i,super.setDisposeFn(()=>{e.parentNode&&e.parentNode.replaceChild(t,e)})};dispose(){super.dispose(),this.outletElement.remove()}_getComponentRootNode(i){return i.hostView.rootNodes[0]}};var wi=(()=>{class s extends W{constructor(){let t=v(Fr$1),e=v(is$1);super(t,e)}static ɵfac=function(e){return new(e||s)};static ɵdir=fw({type:s,selectors:[[``,`cdkPortal`,``]],exportAs:[`cdkPortal`],features:[Og]})}return s})();var Ci=(()=>{class s extends q{_moduleRef=v(Un$1,{optional:!0});_document=v(mt$1);_viewContainerRef=v(is$1);_isInitialized=!1;_attachedRef=null;get portal(){return this._attachedPortal}set portal(t){this.hasAttached()&&!t&&!this._isInitialized||(this.hasAttached()&&super.detach(),t&&super.attach(t),this._attachedPortal=t||null)}attached=new Qe$1;get attachedRef(){return this._attachedRef}ngOnInit(){this._isInitialized=!0}ngOnDestroy(){super.dispose(),this._attachedRef=this._attachedPortal=null}attachComponentPortal(t){t.setAttachedHost(this);let e=t.viewContainerRef!=null?t.viewContainerRef:this._viewContainerRef,n=e.createComponent(t.component,{index:e.length,injector:t.injector||e.injector,projectableNodes:t.projectableNodes||void 0,ngModuleRef:this._moduleRef||void 0,bindings:t.bindings||void 0,directives:t.directives||void 0});return e!==this._viewContainerRef&&this._insertContent(n.hostView.rootNodes[0]),super.setDisposeFn(()=>n.destroy()),this._attachedPortal=t,this._attachedRef=n,this.attached.emit(n),n}attachTemplatePortal(t){t.setAttachedHost(this);let e=this._viewContainerRef.createEmbeddedView(t.templateRef,t.context,{injector:t.injector});return super.setDisposeFn(()=>this._viewContainerRef.clear()),this._attachedPortal=t,this._attachedRef=e,this.attached.emit(e),e}attachDomPortal=t=>{let e=t.element;e.parentNode;let n=this._document.createComment(`dom-portal`);t.setAttachedHost(this),e.parentNode.insertBefore(n,e),this._insertContent(e),this._attachedPortal=t,super.setDisposeFn(()=>n.parentNode?.replaceChild(e,n))};_insertContent(t){let e=this._viewContainerRef.element.nativeElement;e.nodeType===e.ELEMENT_NODE?e.appendChild(t):e.parentNode?.insertBefore(t,e)}static ɵfac=(()=>{let t;return function(n){return(t||(t=RE(s)))(n||s)}})();static ɵdir=fw({type:s,selectors:[[``,`cdkPortalOutlet`,``]],inputs:{portal:[0,`cdkPortalOutlet`,`portal`]},outputs:{attached:`attached`},exportAs:[`cdkPortalOutlet`],features:[Og]})}return s})();var ne=h_();function ke(s){return new J$1(s.get(z),s.get(mt$1))}var J$1=class{_viewportRuler;_previousHTMLStyles={top:``,left:``};_previousScrollPosition;_isEnabled=!1;_document;constructor(i,t){this._viewportRuler=i,this._document=t}attach(){}enable(){if(this._canBeEnabled()){let i=this._document.documentElement;this._previousScrollPosition=this._viewportRuler.getViewportScrollPosition(),this._previousHTMLStyles.left=i.style.left||``,this._previousHTMLStyles.top=i.style.top||``,i.style.left=M_(-this._previousScrollPosition.left),i.style.top=M_(-this._previousScrollPosition.top),i.classList.add(`cdk-global-scrollblock`),this._isEnabled=!0}}disable(){if(this._isEnabled){let i=this._document.documentElement,t=this._document.body,e=i.style,n=t.style,o=e.scrollBehavior||``,r=n.scrollBehavior||``;this._isEnabled=!1,e.left=this._previousHTMLStyles.left,e.top=this._previousHTMLStyles.top,i.classList.remove(`cdk-global-scrollblock`),ne&&(e.scrollBehavior=n.scrollBehavior=`auto`),window.scroll(this._previousScrollPosition.left,this._previousScrollPosition.top),ne&&(e.scrollBehavior=o,n.scrollBehavior=r)}}_canBeEnabled(){if(this._document.documentElement.classList.contains(`cdk-global-scrollblock`)||this._isEnabled)return!1;let t=this._document.documentElement,e=this._viewportRuler.getViewportSize();return t.scrollHeight>e.height||t.scrollWidth>e.width}};var tt=class{enable(){}disable(){}attach(){}};function Et(s,i){return i.some(t=>{let e=s.bottom<t.top,n=s.top>t.bottom,o=s.right<t.left,r=s.left>t.right;return e||n||o||r})}function oe(s,i){return i.some(t=>{let e=s.top<t.top,n=s.bottom>t.bottom,o=s.left<t.left,r=s.right>t.right;return e||n||o||r})}function Tt(s,i){return new et(s.get(B),s.get(z),s.get(Fe$1),i)}var et=class{_scrollDispatcher;_viewportRuler;_ngZone;_config;_scrollSubscription=null;_overlayRef;constructor(i,t,e,n){this._scrollDispatcher=i,this._viewportRuler=t,this._ngZone=e,this._config=n}attach(i){this._overlayRef,this._overlayRef=i}enable(){if(!this._scrollSubscription){let i=this._config?this._config.scrollThrottle:0;this._scrollSubscription=this._scrollDispatcher.scrolled(i).subscribe(()=>{if(this._overlayRef.updatePosition(),this._config&&this._config.autoClose){let t=this._overlayRef.overlayElement.getBoundingClientRect(),{width:e,height:n}=this._viewportRuler.getViewportSize();Et(t,[{width:e,height:n,bottom:n,right:e,top:0,left:0}])&&(this.disable(),this._ngZone.run(()=>this._overlayRef.detach()))}})}}disable(){this._scrollSubscription&&(this._scrollSubscription.unsubscribe(),this._scrollSubscription=null)}detach(){this.disable(),this._overlayRef=null}};var it=class{positionStrategy;scrollStrategy=new tt;panelClass=``;hasBackdrop=!1;backdropClass=`cdk-overlay-dark-backdrop`;disableAnimations;width;height;minWidth;minHeight;maxWidth;maxHeight;direction;disposeOnNavigation=!1;usePopover;eventPredicate;constructor(i){if(i){let t=Object.keys(i);for(let e of t)i[e]!==void 0&&(this[e]=i[e])}}};var nt=class{connectionPair;scrollableViewProperties;constructor(i,t){this.connectionPair=i,this.scrollableViewProperties=t}};var he=(()=>{class s{_attachedOverlays=[];_document=v(mt$1);_isAttached=!1;ngOnDestroy(){this.detach()}add(t){this.remove(t),this._attachedOverlays.push(t)}remove(t){let e=this._attachedOverlays.indexOf(t);e>-1&&this._attachedOverlays.splice(e,1),this._attachedOverlays.length===0&&this.detach()}canReceiveEvent(t,e,n){return n.observers.length<1?!1:t.eventPredicate?t.eventPredicate(e):!0}static ɵfac=function(e){return new(e||s)};static ɵprov=$r$1({token:s,factory:s.ɵfac})}return s})();var de=(()=>{class s extends he{_ngZone=v(Fe$1);_renderer=v(Vr$1).createRenderer(null,null);_cleanupKeydown;add(t){super.add(t),this._isAttached||(this._ngZone.runOutsideAngular(()=>{this._cleanupKeydown=this._renderer.listen(`body`,`keydown`,this._keydownListener)}),this._isAttached=!0)}detach(){this._isAttached&&(this._cleanupKeydown?.(),this._isAttached=!1)}_keydownListener=t=>{let e=this._attachedOverlays;for(let n=e.length-1;n>-1;n--){let o=e[n];if(this.canReceiveEvent(o,t,o._keydownEvents)){this._ngZone.run(()=>o._keydownEvents.next(t));break}}};static ɵfac=function(e){return new(e||s)};static ɵprov=$r$1({token:s,factory:s.ɵfac})}return s})();var pe=(()=>{class s extends he{_platform=v(ae$1);_ngZone=v(Fe$1);_renderer=v(Vr$1).createRenderer(null,null);_cursorOriginalValue;_cursorStyleIsSet=!1;_pointerDownEventTarget=null;_cleanups;add(t){if(super.add(t),!this._isAttached){let e=this._document.body,n={capture:!0},o=this._renderer;this._cleanups=this._ngZone.runOutsideAngular(()=>[o.listen(e,`pointerdown`,this._pointerDownListener,n),o.listen(e,`click`,this._clickListener,n),o.listen(e,`auxclick`,this._clickListener,n),o.listen(e,`contextmenu`,this._clickListener,n)]),this._platform.IOS&&!this._cursorStyleIsSet&&(this._cursorOriginalValue=e.style.cursor,e.style.cursor=`pointer`,this._cursorStyleIsSet=!0),this._isAttached=!0}}detach(){this._isAttached&&(this._cleanups?.forEach(t=>t()),this._cleanups=void 0,this._platform.IOS&&this._cursorStyleIsSet&&(this._document.body.style.cursor=this._cursorOriginalValue,this._cursorStyleIsSet=!1),this._isAttached=!1)}_pointerDownListener=t=>{this._pointerDownEventTarget=Se$2(t)};_clickListener=t=>{let e=Se$2(t),n=t.type===`click`&&this._pointerDownEventTarget?this._pointerDownEventTarget:e;this._pointerDownEventTarget=null;let o=this._attachedOverlays.slice();for(let r=o.length-1;r>-1;r--){let a=o[r],c=a._outsidePointerEvents;if(!(!a.hasAttached()||!this.canReceiveEvent(a,t,c))){if(se(a.overlayElement,e)||se(a.overlayElement,n))break;this._ngZone?this._ngZone.run(()=>c.next(t)):c.next(t)}}};static ɵfac=function(e){return new(e||s)};static ɵprov=$r$1({token:s,factory:s.ɵfac})}return s})();function se(s,i){let t=typeof ShadowRoot<`u`&&ShadowRoot,e=i;for(;e;){if(e===s)return!0;e=t&&e instanceof ShadowRoot?e.host:e.parentNode}return!1}var ue=(()=>{class s{static ɵfac=function(e){return new(e||s)};static ɵcmp=aw({type:s,selectors:[[`ng-component`]],hostAttrs:[`cdk-overlay-style-loader`,``],decls:0,vars:0,template:function(e,n){},styles:[`.cdk-overlay-container, .cdk-global-overlay-wrapper {
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
`],encapsulation:2})}return s})();var fe=(()=>{class s{_platform=v(ae$1);_containerElement;_document=v(mt$1);_styleLoader=v(je$1);ngOnDestroy(){this._containerElement?.remove()}getContainerElement(){return this._loadStyles(),this._containerElement||this._createContainer(),this._containerElement}_createContainer(){let t=`cdk-overlay-container`;if(this._platform.isBrowser||v_()){let n=this._document.querySelectorAll(`.${t}[platform="server"], .${t}[platform="test"]`);for(let o=0;o<n.length;o++)n[o].remove()}let e=this._document.createElement(`div`);e.classList.add(t),v_()?e.setAttribute(`platform`,`test`):this._platform.isBrowser||e.setAttribute(`platform`,`server`),this._document.body.appendChild(e),this._containerElement=e}_loadStyles(){this._styleLoader.load(ue)}static ɵfac=function(e){return new(e||s)};static ɵprov=$r$1({token:s,factory:s.ɵfac})}return s})();var Mt=class{_renderer;_ngZone;element;_cleanupClick;_cleanupTransitionEnd;_fallbackTimeout;constructor(i,t,e,n){this._renderer=t,this._ngZone=e,this.element=i.createElement(`div`),this.element.classList.add(`cdk-overlay-backdrop`),this._cleanupClick=t.listen(this.element,`click`,n)}detach(){this._ngZone.runOutsideAngular(()=>{let i=this.element;clearTimeout(this._fallbackTimeout),this._cleanupTransitionEnd?.(),this._cleanupTransitionEnd=this._renderer.listen(i,`transitionend`,this.dispose),this._fallbackTimeout=setTimeout(this.dispose,500),i.style.pointerEvents=`none`,i.classList.remove(`cdk-overlay-backdrop-showing`)})}dispose=()=>{clearTimeout(this._fallbackTimeout),this._cleanupClick?.(),this._cleanupTransitionEnd?.(),this._cleanupClick=this._cleanupTransitionEnd=this._fallbackTimeout=void 0,this.element.remove()}};function At(s){return s&&s.nodeType===1}var Dt=Et$1([]);var ot=class{_portalOutlet;_host;_pane;_config;_ngZone;_keyboardDispatcher;_document;_location;_outsideClickDispatcher;_animationsDisabled;_injector;_renderer;_backdropClick=new ee;_attachments=new ee;_detachments=new ee;_positionStrategy;_scrollStrategy;_locationChanges;_backdropRef=null;_detachContentMutationObserver;_detachContentAfterRenderRef;_disposed=!1;_previousHostParent;_keydownEvents=new ee;_outsidePointerEvents=new ee;_afterNextRenderRef;constructor(i,t,e,n,o,r,a,c,p,h=!1,d,_){this._portalOutlet=i,this._host=t,this._pane=e,this._config=n,this._ngZone=o,this._keyboardDispatcher=r,this._document=a,this._location=c,this._outsideClickDispatcher=p,this._animationsDisabled=h,this._injector=d,this._renderer=_,n.scrollStrategy&&(this._scrollStrategy=n.scrollStrategy,this._scrollStrategy.attach(this)),this._positionStrategy=n.positionStrategy}get overlayElement(){return this._pane}get backdropElement(){return this._backdropRef?.element||null}get hostElement(){return this._host}get eventPredicate(){return this._config?.eventPredicate||null}attach(i){if(this._disposed)return null;this._attachHost();let t=this._portalOutlet.attach(i);if(this._positionStrategy?.attach(this),this._updateStackingOrder(),this._updateElementSize(),this._updateElementDirection(),le$1(()=>{Dt.update(e=>e.includes(this)?e:[...e,this])}),this._scrollStrategy&&this._scrollStrategy.enable(),this._afterNextRenderRef?.destroy(),this._afterNextRenderRef=Dh(()=>{this.hasAttached()&&this.updatePosition()},{injector:this._injector}),this._togglePointerEvents(!0),this._config.hasBackdrop&&this._attachBackdrop(),this._config.panelClass&&this._toggleClasses(this._pane,this._config.panelClass,!0),this._attachments.next(),this._completeDetachContent(),this._keyboardDispatcher.add(this),this._config.disposeOnNavigation===!0||this._config.disposeOnNavigation===`pop-state`){let e=this._location.subscribe(()=>this.dispose());this._locationChanges=()=>e.unsubscribe()}else this._config.disposeOnNavigation===`url-change`&&(this._locationChanges=this._location.onUrlChange(()=>this.dispose()));return this._outsideClickDispatcher.add(this),typeof t?.onDestroy==`function`&&t.onDestroy(()=>{this.hasAttached()&&this._ngZone.runOutsideAngular(()=>Promise.resolve().then(()=>this.detach()))}),t}detach(){if(!this.hasAttached())return;this.detachBackdrop(),this._togglePointerEvents(!1),this._positionStrategy&&this._positionStrategy.detach&&this._positionStrategy.detach(),this._scrollStrategy&&this._scrollStrategy.disable();let i=this._portalOutlet.detach();return this._detachments.next(),this._completeDetachContent(),this._keyboardDispatcher.remove(this),this._detachContentWhenEmpty(),this._locationChanges?.(),this._outsideClickDispatcher.remove(this),le$1(()=>{Dt.update(t=>t.filter(e=>e!==this))}),i}dispose(){if(this._disposed)return;let i=this.hasAttached();this._positionStrategy&&this._positionStrategy.dispose(),this._disposeScrollStrategy(),this._backdropRef?.dispose(),this._locationChanges?.(),this._keyboardDispatcher.remove(this),this._portalOutlet.dispose(),this._attachments.complete(),this._backdropClick.complete(),this._keydownEvents.complete(),this._outsidePointerEvents.complete(),this._outsideClickDispatcher.remove(this),this._host?.remove(),this._afterNextRenderRef?.destroy(),this._previousHostParent=this._pane=this._host=this._backdropRef=null,i&&this._detachments.next(),this._detachments.complete(),this._completeDetachContent(),this._disposed=!0,le$1(()=>{Dt.update(t=>t.filter(e=>e!==this))})}hasAttached(){return this._portalOutlet.hasAttached()}backdropClick(){return this._backdropClick}attachments(){return this._attachments}detachments(){return this._detachments}keydownEvents(){return this._keydownEvents}outsidePointerEvents(){return this._outsidePointerEvents}getConfig(){return this._config}updatePosition(){this._positionStrategy&&this._positionStrategy.apply()}updatePositionStrategy(i){i!==this._positionStrategy&&(this._positionStrategy&&this._positionStrategy.dispose(),this._positionStrategy=i,this.hasAttached()&&(i.attach(this),this.updatePosition()))}updateSize(i){this._config=z$1(z$1({},this._config),i),this._updateElementSize()}setDirection(i){this._config=Q$2(z$1({},this._config),{direction:i}),this._updateElementDirection()}addPanelClass(i){this._pane&&this._toggleClasses(this._pane,i,!0)}removePanelClass(i){this._pane&&this._toggleClasses(this._pane,i,!1)}getDirection(){let i=this._config.direction;return i?typeof i==`string`?i:i.value:`ltr`}updateScrollStrategy(i){i!==this._scrollStrategy&&(this._disposeScrollStrategy(),this._scrollStrategy=i,this.hasAttached()&&(i.attach(this),i.enable()))}_updateElementDirection(){this._host.setAttribute(`dir`,this.getDirection())}_updateElementSize(){if(!this._pane)return;let i=this._pane.style;i.width=M_(this._config.width),i.height=M_(this._config.height),i.minWidth=M_(this._config.minWidth),i.minHeight=M_(this._config.minHeight),i.maxWidth=M_(this._config.maxWidth),i.maxHeight=M_(this._config.maxHeight)}_togglePointerEvents(i){this._pane.style.pointerEvents=i?``:`none`}_attachHost(){if(!this._host.parentElement){let i=this._config.usePopover?this._positionStrategy?.getPopoverInsertionPoint?.():null;At(i)?i.after(this._host):i?.type===`parent`?i.element.appendChild(this._host):this._previousHostParent?.appendChild(this._host)}if(this._config.usePopover)try{this._host.showPopover()}catch{}}_attachBackdrop(){let i=`cdk-overlay-backdrop-showing`;this._backdropRef?.dispose(),this._backdropRef=new Mt(this._document,this._renderer,this._ngZone,t=>{this._backdropClick.next(t)}),this._animationsDisabled&&this._backdropRef.element.classList.add(`cdk-overlay-backdrop-noop-animation`),this._config.backdropClass&&this._toggleClasses(this._backdropRef.element,this._config.backdropClass,!0),this._config.usePopover?this._host.prepend(this._backdropRef.element):this._host.parentElement.insertBefore(this._backdropRef.element,this._host),!this._animationsDisabled&&typeof requestAnimationFrame<`u`?this._ngZone.runOutsideAngular(()=>{requestAnimationFrame(()=>this._backdropRef?.element.classList.add(i))}):this._backdropRef.element.classList.add(i)}_updateStackingOrder(){!this._config.usePopover&&this._host.nextSibling&&this._host.parentNode.appendChild(this._host)}detachBackdrop(){this._animationsDisabled?(this._backdropRef?.dispose(),this._backdropRef=null):this._backdropRef?.detach()}_toggleClasses(i,t,e){let n=yi(t||[]).filter(o=>!!o);n.length&&(e?i.classList.add(...n):i.classList.remove(...n))}_detachContentWhenEmpty(){let i=!1;try{this._detachContentAfterRenderRef=Dh(()=>{i=!0,this._detachContent()},{injector:this._injector})}catch(t){if(i)throw t;this._detachContent()}globalThis.MutationObserver&&this._pane&&(this._detachContentMutationObserver||=new globalThis.MutationObserver(()=>{this._detachContent()}),this._detachContentMutationObserver.observe(this._pane,{childList:!0}))}_detachContent(){(!this._pane||!this._host||this._pane.children.length===0)&&(this._pane&&this._config.panelClass&&this._toggleClasses(this._pane,this._config.panelClass,!1),this._host&&this._host.parentElement&&(this._previousHostParent=this._host.parentElement,this._host.remove()),this._completeDetachContent())}_completeDetachContent(){this._detachContentAfterRenderRef?.destroy(),this._detachContentAfterRenderRef=void 0,this._detachContentMutationObserver?.disconnect()}_disposeScrollStrategy(){let i=this._scrollStrategy;i?.disable(),i?.detach?.()}};var re=`cdk-overlay-connected-position-bounding-box`;var Se$1=/([A-Za-z%]+)$/;function It(s,i){return new st(i,s.get(z),s.get(mt$1),s.get(ae$1),s.get(fe))}var st=class{_viewportRuler;_document;_platform;_overlayContainer;_overlayRef;_isInitialRender=!1;_lastBoundingBoxSize={width:0,height:0};_isPushed=!1;_canPush=!0;_growAfterOpen=!1;_hasFlexibleDimensions=!0;_positionLocked=!1;_originRect;_overlayRect;_viewportRect;_containerRect;_viewportMargin=0;_scrollables=[];_preferredPositions=[];_origin;_pane;_isDisposed=!1;_boundingBox=null;_lastPosition=null;_lastScrollVisibility=null;_positionChanges=new ee;_resizeSubscription=K.EMPTY;_offsetX=0;_offsetY=0;_transformOriginSelector;_appliedPanelClasses=[];_previousPushAmount=null;_popoverLocation=`global`;positionChanges=this._positionChanges;get positions(){return this._preferredPositions}constructor(i,t,e,n,o){this._viewportRuler=t,this._document=e,this._platform=n,this._overlayContainer=o,this.setOrigin(i)}attach(i){this._overlayRef&&this._overlayRef,this._validatePositions(),i.hostElement.classList.add(re),this._overlayRef=i,this._boundingBox=i.hostElement,this._pane=i.overlayElement,this._isDisposed=!1,this._isInitialRender=!0,this._lastPosition=null,this._resizeSubscription.unsubscribe(),this._resizeSubscription=this._viewportRuler.change().subscribe(()=>{this._isInitialRender=!0,this.apply()})}apply(){if(this._isDisposed||!this._platform.isBrowser)return;if(!this._isInitialRender&&this._positionLocked&&this._lastPosition){this.reapplyLastPosition();return}this._clearPanelClasses(),this._resetOverlayElementStyles(),this._resetBoundingBoxStyles(),this._viewportRect=this._getNarrowedViewportRect(),this._originRect=this._getOriginRect(),this._overlayRect=this._pane.getBoundingClientRect(),this._containerRect=this._getContainerRect();let i=this._originRect,t=this._overlayRect,e=this._viewportRect,n=this._containerRect,o=[],r;for(let a of this._preferredPositions){let c=this._getOriginPoint(i,n,a),p=this._getOverlayPoint(c,t,a),h=this._getOverlayFit(p,t,e,a);if(h.isCompletelyWithinViewport){this._isPushed=!1,this._applyPosition(a,c);return}if(this._canFitWithFlexibleDimensions(h,p,e)){o.push({position:a,origin:c,overlayRect:t,boundingBoxRect:this._calculateBoundingBoxRect(c,a)});continue}(!r||r.overlayFit.visibleArea<h.visibleArea)&&(r={overlayFit:h,overlayPoint:p,originPoint:c,position:a,overlayRect:t})}if(o.length){let a=null,c=-1;for(let p of o){let h=p.boundingBoxRect.width*p.boundingBoxRect.height*(p.position.weight||1);h>c&&(c=h,a=p)}this._isPushed=!1,this._applyPosition(a.position,a.origin);return}if(this._canPush){this._isPushed=!0,this._applyPosition(r.position,r.originPoint);return}this._applyPosition(r.position,r.originPoint)}detach(){this._clearPanelClasses(),this._lastPosition=null,this._previousPushAmount=null,this._resizeSubscription.unsubscribe()}dispose(){this._isDisposed||(this._boundingBox&&M(this._boundingBox.style,{top:``,left:``,right:``,bottom:``,height:``,width:``,alignItems:``,justifyContent:``}),this._pane&&this._resetOverlayElementStyles(),this._overlayRef&&this._overlayRef.hostElement.classList.remove(re),this.detach(),this._positionChanges.complete(),this._overlayRef=this._boundingBox=null,this._isDisposed=!0)}reapplyLastPosition(){if(this._isDisposed||!this._platform.isBrowser)return;let i=this._lastPosition;i?(this._originRect=this._getOriginRect(),this._overlayRect=this._pane.getBoundingClientRect(),this._viewportRect=this._getNarrowedViewportRect(),this._containerRect=this._getContainerRect(),this._applyPosition(i,this._getOriginPoint(this._originRect,this._containerRect,i))):this.apply()}withScrollableContainers(i){return this._scrollables=i,this}withPositions(i){return this._preferredPositions=i,i.indexOf(this._lastPosition)===-1&&(this._lastPosition=null),this._validatePositions(),this}withViewportMargin(i){return this._viewportMargin=i,this}withFlexibleDimensions(i=!0){return this._hasFlexibleDimensions=i,this}withGrowAfterOpen(i=!0){return this._growAfterOpen=i,this}withPush(i=!0){return this._canPush=i,this}withLockedPosition(i=!0){return this._positionLocked=i,this}setOrigin(i){return this._origin=i,this}withDefaultOffsetX(i){return this._offsetX=i,this}withDefaultOffsetY(i){return this._offsetY=i,this}withTransformOriginOn(i){return this._transformOriginSelector=i,this}withPopoverLocation(i){return this._popoverLocation=i,this}getPopoverInsertionPoint(){return this._popoverLocation===`global`?null:this._popoverLocation!==`inline`?this._popoverLocation:this._origin instanceof Wr$1?this._origin.nativeElement:At(this._origin)?this._origin:null}_getOriginPoint(i,t,e){let n;if(e.originX==`center`)n=i.left+i.width/2;else{let r=this._isRtl()?i.right:i.left,a=this._isRtl()?i.left:i.right;n=e.originX==`start`?r:a}t.left<0&&(n-=t.left);let o;return e.originY==`center`?o=i.top+i.height/2:o=e.originY==`top`?i.top:i.bottom,t.top<0&&(o-=t.top),{x:n,y:o}}_getOverlayPoint(i,t,e){let n;e.overlayX==`center`?n=-t.width/2:e.overlayX===`start`?n=this._isRtl()?-t.width:0:n=this._isRtl()?0:-t.width;let o;return e.overlayY==`center`?o=-t.height/2:o=e.overlayY==`top`?0:-t.height,{x:i.x+n,y:i.y+o}}_getOverlayFit(i,t,e,n){let o=le(t),{x:r,y:a}=i,c=this._getOffset(n,`x`),p=this._getOffset(n,`y`);c&&(r+=c),p&&(a+=p);let h=0-r,d=r+o.width-e.width,_=0-a,m=a+o.height-e.height,g=this._subtractOverflows(o.width,h,d),w=this._subtractOverflows(o.height,_,m),Lt=g*w;return{visibleArea:Lt,isCompletelyWithinViewport:o.width*o.height===Lt,fitsInViewportVertically:w===o.height,fitsInViewportHorizontally:g==o.width}}_canFitWithFlexibleDimensions(i,t,e){if(this._hasFlexibleDimensions){let n=e.bottom-t.y,o=e.right-t.x,r=ae(this._overlayRef.getConfig().minHeight),a=ae(this._overlayRef.getConfig().minWidth),c=i.fitsInViewportVertically||r!=null&&r<=n,p=i.fitsInViewportHorizontally||a!=null&&a<=o;return c&&p}return!1}_pushOverlayOnScreen(i,t,e){if(this._previousPushAmount&&this._positionLocked)return{x:i.x+this._previousPushAmount.x,y:i.y+this._previousPushAmount.y};let n=le(t),o=this._viewportRect,r=Math.max(i.x+n.width-o.width,0),a=Math.max(i.y+n.height-o.height,0),c=Math.max(o.top-e.top-i.y,0),p=Math.max(o.left-e.left-i.x,0),h=0,d=0;return n.width<=o.width?h=p||-r:h=i.x<this._getViewportMarginStart()?o.left-e.left-i.x:0,n.height<=o.height?d=c||-a:d=i.y<this._getViewportMarginTop()?o.top-e.top-i.y:0,this._previousPushAmount={x:h,y:d},{x:i.x+h,y:i.y+d}}_applyPosition(i,t){if(this._setTransformOrigin(i),this._setOverlayElementStyles(t,i),this._setBoundingBoxStyles(t,i),i.panelClass&&this._addPanelClasses(i.panelClass),this._positionChanges.observers.length){let e=this._getScrollVisibility();if(i!==this._lastPosition||!this._lastScrollVisibility||!Oe(this._lastScrollVisibility,e)){let n=new nt(i,e);this._positionChanges.next(n)}this._lastScrollVisibility=e}this._lastPosition=i,this._isInitialRender=!1}_setTransformOrigin(i){if(!this._transformOriginSelector)return;let t=this._boundingBox.querySelectorAll(this._transformOriginSelector),e,n=i.overlayY;i.overlayX===`center`?e=`center`:this._isRtl()?e=i.overlayX===`start`?`right`:`left`:e=i.overlayX===`start`?`left`:`right`;for(let o=0;o<t.length;o++)t[o].style.transformOrigin=`${e} ${n}`}_calculateBoundingBoxRect(i,t){let e=this._viewportRect,n=this._isRtl(),o,r,a;if(t.overlayY===`top`)r=i.y,o=e.height-r+this._getViewportMarginBottom();else if(t.overlayY===`bottom`)a=e.height-i.y+this._getViewportMarginTop()+this._getViewportMarginBottom(),o=e.height-a+this._getViewportMarginTop();else{let m=Math.min(e.bottom-i.y+e.top,i.y),g=this._lastBoundingBoxSize.height;o=m*2,r=i.y-m,o>g&&!this._isInitialRender&&!this._growAfterOpen&&(r=i.y-g/2)}let c=t.overlayX===`start`&&!n||t.overlayX===`end`&&n,p=t.overlayX===`end`&&!n||t.overlayX===`start`&&n,h,d,_;if(p)_=e.width-i.x+this._getViewportMarginStart()+this._getViewportMarginEnd(),h=i.x-this._getViewportMarginStart();else if(c)d=i.x,h=e.right-i.x-this._getViewportMarginEnd();else{let m=Math.min(e.right-i.x+e.left,i.x),g=this._lastBoundingBoxSize.width;h=m*2,d=i.x-m,h>g&&!this._isInitialRender&&!this._growAfterOpen&&(d=i.x-g/2)}return{top:r,left:d,bottom:a,right:_,width:h,height:o}}_setBoundingBoxStyles(i,t){let e=this._calculateBoundingBoxRect(i,t);!this._isInitialRender&&!this._growAfterOpen&&(e.height=Math.min(e.height,this._lastBoundingBoxSize.height),e.width=Math.min(e.width,this._lastBoundingBoxSize.width));let n={};if(this._hasExactPosition())n.top=n.left=`0`,n.bottom=n.right=`auto`,n.maxHeight=n.maxWidth=``,n.width=n.height=`100%`;else{let o=this._overlayRef.getConfig().maxHeight,r=this._overlayRef.getConfig().maxWidth;n.width=M_(e.width),n.height=M_(e.height),n.top=M_(e.top)||`auto`,n.bottom=M_(e.bottom)||`auto`,n.left=M_(e.left)||`auto`,n.right=M_(e.right)||`auto`,t.overlayX===`center`?n.alignItems=`center`:n.alignItems=t.overlayX===`end`?`flex-end`:`flex-start`,t.overlayY===`center`?n.justifyContent=`center`:n.justifyContent=t.overlayY===`bottom`?`flex-end`:`flex-start`,o&&(n.maxHeight=M_(o)),r&&(n.maxWidth=M_(r))}this._lastBoundingBoxSize=e,M(this._boundingBox.style,n)}_resetBoundingBoxStyles(){M(this._boundingBox.style,{top:`0`,left:`0`,right:`0`,bottom:`0`,height:``,width:``,alignItems:``,justifyContent:``})}_resetOverlayElementStyles(){M(this._pane.style,{top:``,left:``,bottom:``,right:``,position:``,transform:``})}_setOverlayElementStyles(i,t){let e={},n=this._hasExactPosition(),o=this._hasFlexibleDimensions,r=this._overlayRef.getConfig();if(n){let h=this._viewportRuler.getViewportScrollPosition();M(e,this._getExactOverlayY(t,i,h)),M(e,this._getExactOverlayX(t,i,h))}else e.position=`static`;let a=``,c=this._getOffset(t,`x`),p=this._getOffset(t,`y`);c&&(a+=`translateX(${c}px) `),p&&(a+=`translateY(${p}px)`),e.transform=a.trim(),r.maxHeight&&(n?e.maxHeight=M_(r.maxHeight):o&&(e.maxHeight=``)),r.maxWidth&&(n?e.maxWidth=M_(r.maxWidth):o&&(e.maxWidth=``)),M(this._pane.style,e)}_getExactOverlayY(i,t,e){let n={top:``,bottom:``},o=this._getOverlayPoint(t,this._overlayRect,i);if(this._isPushed&&(o=this._pushOverlayOnScreen(o,this._overlayRect,e)),i.overlayY===`bottom`)n.bottom=`${this._document.documentElement.clientHeight-(o.y+this._overlayRect.height)}px`;else n.top=M_(o.y);return n}_getExactOverlayX(i,t,e){let n={left:``,right:``},o=this._getOverlayPoint(t,this._overlayRect,i);this._isPushed&&(o=this._pushOverlayOnScreen(o,this._overlayRect,e));let r;if(this._isRtl()?r=i.overlayX===`end`?`left`:`right`:r=i.overlayX===`end`?`right`:`left`,r===`right`)n.right=`${this._document.documentElement.clientWidth-(o.x+this._overlayRect.width)}px`;else n.left=M_(o.x);return n}_getScrollVisibility(){let i=this._getOriginRect(),t=this._pane.getBoundingClientRect(),e=this._scrollables.map(n=>n.getElementRef().nativeElement.getBoundingClientRect());return{isOriginClipped:oe(i,e),isOriginOutsideView:Et(i,e),isOverlayClipped:oe(t,e),isOverlayOutsideView:Et(t,e)}}_subtractOverflows(i,...t){return t.reduce((e,n)=>e-Math.max(n,0),i)}_getNarrowedViewportRect(){let i=this._document.documentElement.clientWidth,t=this._document.documentElement.clientHeight,e=this._viewportRuler.getViewportScrollPosition();return{top:e.top+this._getViewportMarginTop(),left:e.left+this._getViewportMarginStart(),right:e.left+i-this._getViewportMarginEnd(),bottom:e.top+t-this._getViewportMarginBottom(),width:i-this._getViewportMarginStart()-this._getViewportMarginEnd(),height:t-this._getViewportMarginTop()-this._getViewportMarginBottom()}}_isRtl(){return this._overlayRef.getDirection()===`rtl`}_hasExactPosition(){return!this._hasFlexibleDimensions||this._isPushed}_getOffset(i,t){return t===`x`?i.offsetX==null?this._offsetX:i.offsetX:i.offsetY==null?this._offsetY:i.offsetY}_validatePositions(){}_addPanelClasses(i){this._pane&&yi(i).forEach(t=>{t!==``&&this._appliedPanelClasses.indexOf(t)===-1&&(this._appliedPanelClasses.push(t),this._pane.classList.add(t))})}_clearPanelClasses(){this._pane&&(this._appliedPanelClasses.forEach(i=>{this._pane.classList.remove(i)}),this._appliedPanelClasses=[])}_getViewportMarginStart(){return typeof this._viewportMargin==`number`?this._viewportMargin:this._viewportMargin?.start??0}_getViewportMarginEnd(){return typeof this._viewportMargin==`number`?this._viewportMargin:this._viewportMargin?.end??0}_getViewportMarginTop(){return typeof this._viewportMargin==`number`?this._viewportMargin:this._viewportMargin?.top??0}_getViewportMarginBottom(){return typeof this._viewportMargin==`number`?this._viewportMargin:this._viewportMargin?.bottom??0}_getOriginRect(){let i=this._origin;if(i instanceof Wr$1)return i.nativeElement.getBoundingClientRect();if(i instanceof Element)return i.getBoundingClientRect();let t=i.width||0,e=i.height||0;return{top:i.y,bottom:i.y+e,left:i.x,right:i.x+t,height:e,width:t}}_getContainerRect(){let i=this._overlayRef.getConfig().usePopover&&this._popoverLocation!==`global`,t=this._overlayContainer.getContainerElement();i&&(t.style.display=`block`);let e=t.getBoundingClientRect();return i&&(t.style.display=``),e}};function M(s,i){for(let t in i)Object.hasOwn(i,t)&&(s[t]=i[t]);return s}function ae(s){if(typeof s!=`number`&&s!=null){let[i,t]=s.split(Se$1);return!t||t===`px`?parseFloat(i):null}return s||null}function le(s){return{top:Math.floor(s.top),right:Math.floor(s.right),bottom:Math.floor(s.bottom),left:Math.floor(s.left),width:Math.floor(s.width),height:Math.floor(s.height)}}function Oe(s,i){return s===i?!0:s.isOriginClipped===i.isOriginClipped&&s.isOriginOutsideView===i.isOriginOutsideView&&s.isOverlayClipped===i.isOverlayClipped&&s.isOverlayOutsideView===i.isOverlayOutsideView}var ce=`cdk-global-overlay-wrapper`;function Re(s){return new rt}var rt=class{_overlayRef;_cssPosition=`static`;_topOffset=``;_bottomOffset=``;_alignItems=``;_xPosition=``;_xOffset=``;_width=``;_height=``;_isDisposed=!1;attach(i){let t=i.getConfig();this._overlayRef=i,this._width&&!t.width&&i.updateSize({width:this._width}),this._height&&!t.height&&i.updateSize({height:this._height}),i.hostElement.classList.add(ce),this._isDisposed=!1}top(i=``){return this._bottomOffset=``,this._topOffset=i,this._alignItems=`flex-start`,this}left(i=``){return this._xOffset=i,this._xPosition=`left`,this}bottom(i=``){return this._topOffset=``,this._bottomOffset=i,this._alignItems=`flex-end`,this}right(i=``){return this._xOffset=i,this._xPosition=`right`,this}start(i=``){return this._xOffset=i,this._xPosition=`start`,this}end(i=``){return this._xOffset=i,this._xPosition=`end`,this}width(i=``){return this._overlayRef?this._overlayRef.updateSize({width:i}):this._width=i,this}height(i=``){return this._overlayRef?this._overlayRef.updateSize({height:i}):this._height=i,this}centerHorizontally(i=``){return this.left(i),this._xPosition=`center`,this}centerVertically(i=``){return this.top(i),this._alignItems=`center`,this}apply(){if(!this._overlayRef||!this._overlayRef.hasAttached())return;let i=this._overlayRef.overlayElement.style,t=this._overlayRef.hostElement.style,{width:n,height:o,maxWidth:r,maxHeight:a}=this._overlayRef.getConfig(),c=(n===`100%`||n===`100vw`)&&(!r||r===`100%`||r===`100vw`),p=(o===`100%`||o===`100vh`)&&(!a||a===`100%`||a===`100vh`),h=this._xPosition,d=this._xOffset,_=this._overlayRef.getConfig().direction===`rtl`,m=``,g=``,w=``;c?w=`flex-start`:h===`center`?(w=`center`,_?g=d:m=d):_?h===`left`||h===`end`?(w=`flex-end`,m=d):(h===`right`||h===`start`)&&(w=`flex-start`,g=d):h===`left`||h===`start`?(w=`flex-start`,m=d):(h===`right`||h===`end`)&&(w=`flex-end`,g=d),i.position=this._cssPosition,i.marginLeft=c?`0`:m,i.marginTop=p?`0`:this._topOffset,i.marginBottom=this._bottomOffset,i.marginRight=c?`0`:g,t.justifyContent=w,t.alignItems=p?`flex-start`:this._alignItems}dispose(){if(this._isDisposed||!this._overlayRef)return;let i=this._overlayRef.overlayElement.style,t=this._overlayRef.hostElement,e=t.style;t.classList.remove(ce),e.justifyContent=e.alignItems=i.marginTop=i.marginBottom=i.marginLeft=i.marginRight=i.position=``,this._overlayRef=null,this._isDisposed=!0}};var _e=new S(`OVERLAY_DEFAULT_CONFIG`);function Vt$1(s,i){s.get(je$1).load(ue);let t=s.get(fe),e=s.get(mt$1),n=s.get(Si),o=s.get(wt),r=s.get(am),a=s.get(Ic$1,null,{optional:!0})||s.get(Vr$1).createRenderer(null,null),c=new it(i),p=s.get(_e,null,{optional:!0})?.usePopover??!0;c.direction=c.direction||r.value,!e.body||!(`showPopover`in e.body)?c.usePopover=!1:c.usePopover=i?.usePopover??p;let h=e.createElement(`div`),d=e.createElement(`div`);h.id=n.getId(`cdk-overlay-`),h.classList.add(`cdk-overlay-pane`),d.appendChild(h),c.usePopover&&(d.setAttribute(`popover`,`manual`),d.classList.add(`cdk-overlay-popover`));let _=c.usePopover?c.positionStrategy?.getPopoverInsertionPoint?.():null;return At(_)?_.after(d):_?.type===`parent`?_.element.appendChild(d):t.getContainerElement().appendChild(d),new ot(new Q(h,o,s),d,h,c,s.get(Fe$1),s.get(de),e,s.get(jt),s.get(pe),i?.disableAnimations??s.get(Zv,null,{optional:!0})===`NoopAnimations`,s.get(Ee$1),a)}var Pe=20;var De$1=new S(`mat-tooltip-scroll-strategy`,{providedIn:`root`,factory:()=>{let s=v(se$1);return()=>Tt(s,{scrollThrottle:Pe})}});var Ee=new S(`mat-tooltip-default-options`,{providedIn:`root`,factory:()=>({showDelay:0,hideDelay:0,touchendHideDelay:1500})});var ge=`tooltip-panel`;var Me={passive:!0};var Te$1=8;var Ae=8;var Ie$1=24;var Ve=200;var Le$1=(()=>{class s{_elementRef=v(Wr$1);_ngZone=v(Fe$1);_platform=v(ae$1);_ariaDescriber=v(c_);_focusMonitor=v(Xr);_dir=v(am);_injector=v(se$1);_viewContainerRef=v(is$1);_mediaMatcher=v(Jr);_document=v(mt$1);_renderer=v(Ic$1);_animationsDisabled=nn$1();_defaultOptions=v(Ee,{optional:!0});_overlayRef=null;_tooltipInstance=null;_overlayPanelClass;_portal;_position=`below`;_positionAtOrigin=!1;_disabled=!1;_tooltipClass;_viewInitialized=!1;_pointerExitEventsInitialized=!1;_tooltipComponent=me;_viewportMargin=8;_currentPosition;_cssClassPrefix=`mat-mdc`;_ariaDescriptionPending=!1;_dirSubscribed=!1;get position(){return this._position}set position(t){t!==this._position&&(this._position=t,this._overlayRef&&(this._updatePosition(this._overlayRef),this._tooltipInstance?.show(0),this._overlayRef.updatePosition()))}get positionAtOrigin(){return this._positionAtOrigin}set positionAtOrigin(t){this._positionAtOrigin=O_(t),this._detach(),this._overlayRef=null}get disabled(){return this._disabled}set disabled(t){let e=O_(t);this._disabled!==e&&(this._disabled=e,e?this.hide(0):this._setupPointerEnterEventsIfNeeded(),this._syncAriaDescription(this.message))}get showDelay(){return this._showDelay}set showDelay(t){this._showDelay=bi(t)}_showDelay;get hideDelay(){return this._hideDelay}set hideDelay(t){this._hideDelay=bi(t),this._tooltipInstance&&(this._tooltipInstance._mouseLeaveHideDelay=this._hideDelay)}_hideDelay;touchGestures=`auto`;get message(){return this._message}set message(t){let e=this._message;this._message=t!=null?String(t).trim():``,!this._message&&this._isTooltipVisible()?this.hide(0):(this._setupPointerEnterEventsIfNeeded(),this._updateTooltipMessage()),this._syncAriaDescription(e)}_message=``;get tooltipClass(){return this._tooltipClass}set tooltipClass(t){this._tooltipClass=t,this._tooltipInstance&&this._setTooltipClass(this._tooltipClass)}_eventCleanups=[];_touchstartTimeout=null;_destroyed=new ee;_isDestroyed=!1;constructor(){let t=this._defaultOptions;t&&(this._showDelay=t.showDelay,this._hideDelay=t.hideDelay,t.position&&(this.position=t.position),t.positionAtOrigin&&(this.positionAtOrigin=t.positionAtOrigin),t.touchGestures&&(this.touchGestures=t.touchGestures),t.tooltipClass&&(this.tooltipClass=t.tooltipClass)),this._viewportMargin=Te$1}ngAfterViewInit(){this._viewInitialized=!0,this._setupPointerEnterEventsIfNeeded(),this._focusMonitor.monitor(this._elementRef).pipe(av(this._destroyed)).subscribe(t=>{t?t===`keyboard`&&this._ngZone.run(()=>this.show()):this._ngZone.run(()=>this.hide(0))})}ngOnDestroy(){let t=this._elementRef.nativeElement;this._touchstartTimeout&&clearTimeout(this._touchstartTimeout),this._overlayRef&&(this._overlayRef.dispose(),this._tooltipInstance=null),this._eventCleanups.forEach(e=>e()),this._eventCleanups.length=0,this._destroyed.next(),this._destroyed.complete(),this._isDestroyed=!0,this._ariaDescriber.removeDescription(t,this.message,`tooltip`),this._focusMonitor.stopMonitoring(t)}show(t=this.showDelay,e){if(this.disabled||!this.message||this._isTooltipVisible()){this._tooltipInstance?._cancelPendingAnimations();return}let n=this._createOverlay(e);this._detach(),this._portal=this._portal||new Y(this._tooltipComponent,this._viewContainerRef);let o=this._tooltipInstance=n.attach(this._portal).instance;o._triggerElement=this._elementRef.nativeElement,o._mouseLeaveHideDelay=this._hideDelay,o.afterHidden().pipe(av(this._destroyed)).subscribe(()=>this._detach()),this._setTooltipClass(this._tooltipClass),this._updateTooltipMessage(),o.show(t)}hide(t=this.hideDelay){let e=this._tooltipInstance;e&&(e.isVisible()?e.hide(t):(e._cancelPendingAnimations(),this._detach()))}toggle(t){this._isTooltipVisible()?this.hide():this.show(void 0,t)}_isTooltipVisible(){return!!this._tooltipInstance&&this._tooltipInstance.isVisible()}_createOverlay(t){if(this._overlayRef){let r=this._overlayRef.getConfig().positionStrategy;if((!this.positionAtOrigin||!t)&&r._origin instanceof Wr$1)return this._overlayRef;this._detach()}let e=this._injector.get(B).getAncestorScrollContainers(this._elementRef),n=`${this._cssClassPrefix}-${ge}`,o=It(this._injector,this.positionAtOrigin?t||this._elementRef:this._elementRef).withTransformOriginOn(`.${this._cssClassPrefix}-tooltip`).withFlexibleDimensions(!1).withViewportMargin(this._viewportMargin).withScrollableContainers(e).withPopoverLocation(`global`);return o.positionChanges.pipe(av(this._destroyed)).subscribe(r=>{this._updateCurrentPositionClass(r.connectionPair),this._tooltipInstance&&r.scrollableViewProperties.isOverlayClipped&&this._tooltipInstance.isVisible()&&this._ngZone.run(()=>this.hide(0))}),this._overlayRef=Vt$1(this._injector,{direction:this._dir,positionStrategy:o,panelClass:this._overlayPanelClass?[...this._overlayPanelClass,n]:n,scrollStrategy:this._injector.get(De$1)(),disableAnimations:this._animationsDisabled,eventPredicate:this._overlayEventPredicate}),this._updatePosition(this._overlayRef),this._overlayRef.detachments().pipe(av(this._destroyed)).subscribe(()=>this._detach()),this._overlayRef.outsidePointerEvents().pipe(av(this._destroyed)).subscribe(()=>this._tooltipInstance?._handleBodyInteraction()),this._overlayRef.keydownEvents().pipe(av(this._destroyed)).subscribe(r=>{r.preventDefault(),r.stopPropagation(),this._ngZone.run(()=>this.hide(0))}),this._defaultOptions?.disableTooltipInteractivity&&this._overlayRef.addPanelClass(`${this._cssClassPrefix}-tooltip-panel-non-interactive`),this._dirSubscribed||(this._dirSubscribed=!0,this._dir.change.pipe(av(this._destroyed)).subscribe(()=>{this._overlayRef&&this._updatePosition(this._overlayRef)})),this._overlayRef}_detach(){this._overlayRef&&this._overlayRef.hasAttached()&&this._overlayRef.detach(),this._tooltipInstance=null}_updatePosition(t){let e=t.getConfig().positionStrategy,n=this._getOrigin(),o=this._getOverlayPosition();e.withPositions([this._addOffset(z$1(z$1({},n.main),o.main)),this._addOffset(z$1(z$1({},n.fallback),o.fallback))])}_addOffset(t){let e=Ae,n=!this._dir||this._dir.value==`ltr`;return t.originY===`top`?t.offsetY=-e:t.originY===`bottom`?t.offsetY=e:t.originX===`start`?t.offsetX=n?-e:e:t.originX===`end`&&(t.offsetX=n?e:-e),t}_getOrigin(){let t=!this._dir||this._dir.value==`ltr`,e=this.position,n;e==`above`||e==`below`?n={originX:`center`,originY:e==`above`?`top`:`bottom`}:e==`before`||e==`left`&&t||e==`right`&&!t?n={originX:`start`,originY:`center`}:(e==`after`||e==`right`&&t||e==`left`&&!t)&&(n={originX:`end`,originY:`center`});let{x:o,y:r}=this._invertPosition(n.originX,n.originY);return{main:n,fallback:{originX:o,originY:r}}}_getOverlayPosition(){let t=!this._dir||this._dir.value==`ltr`,e=this.position,n;e==`above`?n={overlayX:`center`,overlayY:`bottom`}:e==`below`?n={overlayX:`center`,overlayY:`top`}:e==`before`||e==`left`&&t||e==`right`&&!t?n={overlayX:`end`,overlayY:`center`}:(e==`after`||e==`right`&&t||e==`left`&&!t)&&(n={overlayX:`start`,overlayY:`center`});let{x:o,y:r}=this._invertPosition(n.overlayX,n.overlayY);return{main:n,fallback:{overlayX:o,overlayY:r}}}_updateTooltipMessage(){this._tooltipInstance&&(this._tooltipInstance.message=this.message,this._tooltipInstance._markForCheck(),Dh(()=>{this._tooltipInstance&&this._overlayRef.updatePosition()},{injector:this._injector}))}_setTooltipClass(t){this._tooltipInstance&&(this._tooltipInstance.tooltipClass=t instanceof Set?Array.from(t):t,this._tooltipInstance._markForCheck())}_invertPosition(t,e){return this.position===`above`||this.position===`below`?e===`top`?e=`bottom`:e===`bottom`&&(e=`top`):t===`end`?t=`start`:t===`start`&&(t=`end`),{x:t,y:e}}_updateCurrentPositionClass(t){let{overlayY:e,originX:n,originY:o}=t,r;if(e===`center`?this._dir&&this._dir.value===`rtl`?r=n===`end`?`left`:`right`:r=n===`start`?`left`:`right`:r=e===`bottom`&&o===`top`?`above`:`below`,r!==this._currentPosition){let a=this._overlayRef;if(a){let c=`${this._cssClassPrefix}-${ge}-`;a.removePanelClass(c+this._currentPosition),a.addPanelClass(c+r)}this._currentPosition=r}}_setupPointerEnterEventsIfNeeded(){this._disabled||!this.message||!this._viewInitialized||this._eventCleanups.length||(this._isTouchPlatform()?this.touchGestures!==`off`&&(this._disableNativeGesturesIfNecessary(),this._addListener(`touchstart`,t=>{let e=t.targetTouches?.[0],n=e?{x:e.clientX,y:e.clientY}:void 0;this._setupPointerExitEventsIfNeeded(),this._touchstartTimeout&&clearTimeout(this._touchstartTimeout);let o=500;this._touchstartTimeout=setTimeout(()=>{this._touchstartTimeout=null,this.show(void 0,n)},this._defaultOptions?.touchLongPressShowDelay??o)})):this._addListener(`mouseenter`,t=>{this._setupPointerExitEventsIfNeeded();let e;t.x!==void 0&&t.y!==void 0&&(e=t),this.show(void 0,e)}))}_setupPointerExitEventsIfNeeded(){if(!this._pointerExitEventsInitialized){if(this._pointerExitEventsInitialized=!0,!this._isTouchPlatform())this._addListener(`mouseleave`,t=>{let e=t.relatedTarget;(!e||!this._overlayRef?.overlayElement.contains(e))&&this.hide()}),this._addListener(`wheel`,t=>{if(this._isTooltipVisible()){let e=this._document.elementFromPoint(t.clientX,t.clientY),n=this._elementRef.nativeElement;e!==n&&!n.contains(e)&&this.hide()}});else if(this.touchGestures!==`off`){this._disableNativeGesturesIfNecessary();let t=()=>{this._touchstartTimeout&&clearTimeout(this._touchstartTimeout),this.hide(this._defaultOptions?.touchendHideDelay)};this._addListener(`touchend`,t),this._addListener(`touchcancel`,t)}}}_addListener(t,e){this._eventCleanups.push(this._renderer.listen(this._elementRef.nativeElement,t,e,Me))}_isTouchPlatform(){let t=this._defaultOptions?.detectHoverCapability;return typeof t==`function`?!t():this._platform.IOS||this._platform.ANDROID?!0:this._platform.isBrowser?!!t&&this._mediaMatcher.matchMedia(`(any-hover: none)`).matches:!1}_disableNativeGesturesIfNecessary(){let t=this.touchGestures;if(t!==`off`){let e=this._elementRef.nativeElement,n=e.style;(t===`on`||e.nodeName!==`INPUT`&&e.nodeName!==`TEXTAREA`)&&(n.userSelect=n.msUserSelect=n.webkitUserSelect=n.MozUserSelect=`none`),(t===`on`||!e.draggable)&&(n.webkitUserDrag=`none`),n.touchAction=`none`,n.webkitTapHighlightColor=`transparent`}}_syncAriaDescription(t){this._ariaDescriptionPending||(this._ariaDescriptionPending=!0,this._ariaDescriber.removeDescription(this._elementRef.nativeElement,t,`tooltip`),this._isDestroyed||Dh({write:()=>{this._ariaDescriptionPending=!1,this.message&&!this.disabled&&this._ariaDescriber.describe(this._elementRef.nativeElement,this.message,`tooltip`)}},{injector:this._injector}))}_overlayEventPredicate=t=>t.type===`keydown`?this._isTooltipVisible()&&t.keyCode===27&&!_c(t):!0;static ɵfac=function(e){return new(e||s)};static ɵdir=fw({type:s,selectors:[[``,`matTooltip`,``]],hostAttrs:[1,`mat-mdc-tooltip-trigger`],hostVars:2,hostBindings:function(e,n){e&2&&pm$1(`mat-mdc-tooltip-disabled`,n.disabled)},inputs:{position:[0,`matTooltipPosition`,`position`],positionAtOrigin:[0,`matTooltipPositionAtOrigin`,`positionAtOrigin`],disabled:[0,`matTooltipDisabled`,`disabled`],showDelay:[0,`matTooltipShowDelay`,`showDelay`],hideDelay:[0,`matTooltipHideDelay`,`hideDelay`],touchGestures:[0,`matTooltipTouchGestures`,`touchGestures`],message:[0,`matTooltip`,`message`],tooltipClass:[0,`matTooltipClass`,`tooltipClass`]},exportAs:[`matTooltip`]})}return s})();var me=(()=>{class s{_changeDetectorRef=v(_j);_elementRef=v(Wr$1);_isMultiline=!1;message;tooltipClass;_showTimeoutId;_hideTimeoutId;_triggerElement;_mouseLeaveHideDelay;_animationsDisabled=nn$1();_tooltip;_closeOnInteraction=!1;_isVisible=!1;_onHide=new ee;_showAnimation=`mat-mdc-tooltip-show`;_hideAnimation=`mat-mdc-tooltip-hide`;show(t){this._hideTimeoutId!=null&&clearTimeout(this._hideTimeoutId),this._showTimeoutId=setTimeout(()=>{this._toggleVisibility(!0),this._showTimeoutId=void 0},t)}hide(t){this._showTimeoutId!=null&&clearTimeout(this._showTimeoutId),this._hideTimeoutId=setTimeout(()=>{this._toggleVisibility(!1),this._hideTimeoutId=void 0},t)}afterHidden(){return this._onHide}isVisible(){return this._isVisible}ngOnDestroy(){this._cancelPendingAnimations(),this._onHide.complete(),this._triggerElement=null}_handleBodyInteraction(){this._closeOnInteraction&&this.hide(0)}_markForCheck(){this._changeDetectorRef.markForCheck()}_handleMouseLeave({relatedTarget:t}){(!t||!this._triggerElement.contains(t))&&(this.isVisible()?this.hide(this._mouseLeaveHideDelay):this._finalizeAnimation(!1))}_onShow(){this._isMultiline=this._isTooltipMultiline(),this._markForCheck()}_isTooltipMultiline(){let t=this._elementRef.nativeElement.getBoundingClientRect();return t.height>Ie$1&&t.width>=Ve}_handleAnimationEnd({animationName:t}){(t===this._showAnimation||t===this._hideAnimation)&&this._finalizeAnimation(t===this._showAnimation)}_cancelPendingAnimations(){this._showTimeoutId!=null&&clearTimeout(this._showTimeoutId),this._hideTimeoutId!=null&&clearTimeout(this._hideTimeoutId),this._showTimeoutId=this._hideTimeoutId=void 0}_finalizeAnimation(t){t?this._closeOnInteraction=!0:this.isVisible()||this._onHide.next()}_toggleVisibility(t){let e=this._tooltip.nativeElement,n=this._showAnimation,o=this._hideAnimation;if(e.classList.remove(t?o:n),e.classList.add(t?n:o),this._isVisible!==t&&(this._isVisible=t,this._changeDetectorRef.markForCheck()),t&&!this._animationsDisabled&&typeof getComputedStyle==`function`){let r=getComputedStyle(e);(r.getPropertyValue(`animation-duration`)===`0s`||r.getPropertyValue(`animation-name`)===`none`)&&(this._animationsDisabled=!0)}t&&this._onShow(),this._animationsDisabled&&(e.classList.add(`_mat-animation-noopable`),this._finalizeAnimation(t))}static ɵfac=function(e){return new(e||s)};static ɵcmp=(function(){let t=[`tooltip`];return aw({type:s,selectors:[[`mat-tooltip-component`]],viewQuery:function(n,o){if(n&1&&im$1(t,7),n&2){let r;IC(r=DC())&&(o._tooltip=r.first)}},hostAttrs:[`aria-hidden`,`true`],hostBindings:function(n,o){n&1&&nm$1(`mouseleave`,function(a){return o._handleMouseLeave(a)})},decls:4,vars:5,consts:[[`tooltip`,``],[1,`mdc-tooltip`,`mat-mdc-tooltip`,3,`animationend`],[1,`mat-mdc-tooltip-surface`,`mdc-tooltip__surface`]],template:function(n,o){n&1&&(kl$1(0,`div`,1,0),rm$1(`animationend`,function(a){return o._handleAnimationEnd(a)}),kl$1(2,`div`,2),QC(3),Ll$1()()),n&2&&(jC(o.tooltipClass),pm$1(`mdc-tooltip--multiline`,o._isMultiline),ID(3),wm$1(o.message))},styles:[`.mat-mdc-tooltip {
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
`],encapsulation:2})})()}return s})();var we=class a{static ɵfac=function(e){return new(e||a)};static ɵcmp=aw({type:a,selectors:[[`app-home`]],decls:2,vars:0,template:function(e,t){e&1&&(kl$1(0,`p`),QC(1,`home works!`),Ll$1())},encapsulation:2})};var Lt=[{path:`Identity/Login`,loadComponent:()=>import(`./chunk-DhigpdHQ.js`).then(a=>a.Login)},{path:`Identity/Signup`,loadComponent:()=>import(`./chunk-Bl6T3hdO.js`).then(a=>a.Signup)},{path:`Identity/Setting`,loadComponent:()=>import(`./chunk-Bfm0eN8A.js`).then(a=>a.Setting)},{path:`Identity/ResetPassword`,loadComponent:()=>import(`./chunk-4fOC5vBd.js`).then(a=>a.ResetPassword)}];var zt=(a,m)=>{let e=v(Lc),t=v(vt);return e.isAuthenticated()?!0:t.createUrlTree([`/identity/login`],{queryParams:{ReturnUrl:m.url}})};var Ht=[...[{path:`UserAccount/Profile/:userId`,loadComponent:()=>import(`./chunk-JrH0iIKv.js`).then(a=>a.Profile)},{path:`UserAccount/Profile`,loadComponent:()=>import(`./chunk-JrH0iIKv.js`).then(a=>a.Profile)},{path:`UserAccount/ProfileSetting`,loadComponent:()=>import(`./chunk-BDI8BKO-.js`).then(a=>a.ProfileSetting),canActivate:[zt]}]];var Vt=[{path:`Library/:libId`,loadComponent:()=>import(`./chunk-BXPOv1Tz.js`).then(a=>a.LibraryPage)}];var Ut=[{path:``,component:we},...Lt,...Ht,...Vt];var tn=Math.pow(2,31)-1;var Z=class{_overlayRef;instance;containerInstance;_afterDismissed=new ee;_afterOpened=new ee;_onAction=new ee;_durationTimeoutId;_dismissedByAction=!1;constructor(m,e){this._overlayRef=e,this.containerInstance=m,m._onExit.subscribe(()=>this._finishDismiss())}dismiss(){this._afterDismissed.closed||this.containerInstance.exit(),clearTimeout(this._durationTimeoutId)}dismissWithAction(){this._onAction.closed||(this._dismissedByAction=!0,this._onAction.next(),this._onAction.complete(),this.dismiss()),clearTimeout(this._durationTimeoutId)}closeWithAction(){this.dismissWithAction()}_dismissAfter(m){this._durationTimeoutId=setTimeout(()=>this.dismiss(),Math.min(m,tn))}_open(){this._afterOpened.closed||(this._afterOpened.next(),this._afterOpened.complete())}_finishDismiss(){this._overlayRef.dispose(),this._onAction.closed||this._onAction.complete(),this._afterDismissed.next({dismissedByAction:this._dismissedByAction}),this._afterDismissed.complete(),this._dismissedByAction=!1}afterDismissed(){return this._afterDismissed}afterOpened(){return this.containerInstance._onEnter}onAction(){return this._onAction}};var Qt=new S(`MatSnackBarData`);var V=class{politeness=`polite`;announcementMessage=``;viewContainerRef;duration=0;panelClass;direction;data=null;horizontalPosition=`center`;verticalPosition=`bottom`};var nn=(()=>{class a{static ɵfac=function(t){return new(t||a)};static ɵdir=fw({type:a,selectors:[[``,`matSnackBarLabel`,``]],hostAttrs:[1,`mat-mdc-snack-bar-label`,`mdc-snackbar__label`]})}return a})();var an=(()=>{class a{static ɵfac=function(t){return new(t||a)};static ɵdir=fw({type:a,selectors:[[``,`matSnackBarActions`,``]],hostAttrs:[1,`mat-mdc-snack-bar-actions`,`mdc-snackbar__actions`]})}return a})();var on=(()=>{class a{static ɵfac=function(t){return new(t||a)};static ɵdir=fw({type:a,selectors:[[``,`matSnackBarAction`,``]],hostAttrs:[1,`mat-mdc-snack-bar-action`,`mdc-snackbar__action`]})}return a})();var rn=(()=>{class a{snackBarRef=v(Z);data=v(Qt);action(){this.snackBarRef.dismissWithAction()}get hasAction(){return!!this.data.action}static ɵfac=function(t){return new(t||a)};static ɵcmp=(function(){function e(t,n){if(t&1){let i=fC();Hi(0,`div`,1)(1,`button`,2),nm$1(`click`,function(){Sd$1(i);let r=gC();return xd$1(r.action())}),QC(2),Rl$1()()}if(t&2){let i=gC();ID(2),Vl$1(` `,i.data.action,` `)}}return aw({type:a,selectors:[[`simple-snack-bar`]],hostAttrs:[1,`mat-mdc-simple-snack-bar`],exportAs:[`matSnackBar`],decls:3,vars:2,consts:[[`matSnackBarLabel`,``],[`matSnackBarActions`,``],[`matButton`,``,`matSnackBarAction`,``,3,`click`]],template:function(n,i){n&1&&(Hi(0,`div`,0),QC(1),Rl$1(),eC(2,e,3,1,`div`,1)),n&2&&(ID(),Vl$1(` `,i.data.message,`
`),ID(),nC(i.hasAction?2:-1))},dependencies:[y0,nn,an,on],styles:[`.mat-mdc-simple-snack-bar {
  display: flex;
}
.mat-mdc-simple-snack-bar .mat-mdc-snack-bar-label {
  max-height: 50vh;
  overflow: auto;
}
`],encapsulation:2})})()}return a})();var Fe=`_mat-snack-bar-enter`;var Le=`_mat-snack-bar-exit`;var sn=(()=>{class a extends q{_ngZone=v(Fe$1);_elementRef=v(Wr$1);_changeDetectorRef=v(_j);_platform=v(ae$1);_animationsDisabled=nn$1();snackBarConfig=v(V);_document=v(mt$1);_trackedModals=/* @__PURE__ */ new Set;_enterFallback;_exitFallback;_injector=v(se$1);_announceDelay=150;_announceTimeoutId;_destroyed=!1;_portalOutlet;_onAnnounce=new ee;_onExit=new ee;_onEnter=new ee;_animationState=`void`;_live;_label;_role;_liveElementId=v(Si).getId(`mat-snack-bar-container-live-`);constructor(){super();let e=this.snackBarConfig;e.politeness===`assertive`&&!e.announcementMessage?this._live=`assertive`:e.politeness===`off`?this._live=`off`:this._live=`polite`,this._platform.FIREFOX&&(this._live===`polite`&&(this._role=`status`),this._live===`assertive`&&(this._role=`alert`))}attachComponentPortal(e){this._assertNotAttached();let t=this._portalOutlet.attachComponentPortal(e);return this._afterPortalAttached(),t}attachTemplatePortal(e){this._assertNotAttached();let t=this._portalOutlet.attachTemplatePortal(e);return this._afterPortalAttached(),t}attachDomPortal=e=>{this._assertNotAttached();let t=this._portalOutlet.attachDomPortal(e);return this._afterPortalAttached(),t};onAnimationEnd(e){e===Le?this._completeExit():e===Fe&&(clearTimeout(this._enterFallback),this._ngZone.run(()=>{this._onEnter.next(),this._onEnter.complete()}))}enter(){this._destroyed||(this._animationState=`visible`,this._changeDetectorRef.markForCheck(),this._changeDetectorRef.detectChanges(),this._screenReaderAnnounce(),this._animationsDisabled?Dh(()=>{this._ngZone.run(()=>queueMicrotask(()=>this.onAnimationEnd(Fe)))},{injector:this._injector}):(clearTimeout(this._enterFallback),this._enterFallback=setTimeout(()=>{this._elementRef.nativeElement.classList.add(`mat-snack-bar-fallback-visible`),this.onAnimationEnd(Fe)},200)))}exit(){return this._destroyed?Ay(void 0):(this._ngZone.run(()=>{this._animationState=`hidden`,this._changeDetectorRef.markForCheck(),this._elementRef.nativeElement.setAttribute(`mat-exit`,``),clearTimeout(this._announceTimeoutId),this._animationsDisabled?Dh(()=>{this._ngZone.run(()=>queueMicrotask(()=>this.onAnimationEnd(Le)))},{injector:this._injector}):(clearTimeout(this._exitFallback),this._exitFallback=setTimeout(()=>this.onAnimationEnd(Le),200))}),this._onExit)}ngOnDestroy(){this._destroyed=!0,this._clearFromModals(),this._completeExit()}_completeExit(){clearTimeout(this._exitFallback),queueMicrotask(()=>{this._onExit.next(),this._onExit.complete()})}_afterPortalAttached(){let e=this._elementRef.nativeElement,t=this.snackBarConfig.panelClass;t&&(Array.isArray(t)?t.forEach(o=>e.classList.add(o)):e.classList.add(t)),this._exposeToModals();let n=this._label.nativeElement,i=`mdc-snackbar__label`;n.classList.toggle(i,!n.querySelector(`.${i}`))}_exposeToModals(){let e=this._liveElementId,t=this._document.querySelectorAll(`body > .cdk-overlay-container [aria-modal="true"]`);for(let n=0;n<t.length;n++){let i=t[n],o=i.getAttribute(`aria-owns`);this._trackedModals.add(i),o?o.indexOf(e)===-1&&i.setAttribute(`aria-owns`,o+` `+e):i.setAttribute(`aria-owns`,e)}}_clearFromModals(){this._trackedModals.forEach(e=>{let t=e.getAttribute(`aria-owns`);if(t){let n=t.replace(this._liveElementId,``).trim();n.length>0?e.setAttribute(`aria-owns`,n):e.removeAttribute(`aria-owns`)}}),this._trackedModals.clear()}_assertNotAttached(){this._portalOutlet.hasAttached()}_screenReaderAnnounce(){this._announceTimeoutId||this._ngZone.runOutsideAngular(()=>{this._announceTimeoutId=setTimeout(()=>{if(this._destroyed)return;let e=this._elementRef.nativeElement,t=e.querySelector(`[aria-hidden]`),n=e.querySelector(`[aria-live]`);if(t&&n){let i=null;this._platform.isBrowser&&document.activeElement instanceof HTMLElement&&t.contains(document.activeElement)&&(i=document.activeElement),t.removeAttribute(`aria-hidden`),n.appendChild(t),i?.focus(),this._onAnnounce.next(),this._onAnnounce.complete()}},this._announceDelay)})}static ɵfac=function(t){return new(t||a)};static ɵcmp=(function(){let e=[`label`];function t(n,i){}return aw({type:a,selectors:[[`mat-snack-bar-container`]],viewQuery:function(i,o){if(i&1&&im$1(Ci,7)(e,7),i&2){let r;IC(r=DC())&&(o._portalOutlet=r.first),IC(r=DC())&&(o._label=r.first)}},hostAttrs:[1,`mdc-snackbar`,`mat-mdc-snack-bar-container`],hostVars:6,hostBindings:function(i,o){i&1&&nm$1(`animationend`,function(l){return o.onAnimationEnd(l.animationName)})(`animationcancel`,function(l){return o.onAnimationEnd(l.animationName)}),i&2&&pm$1(`mat-snack-bar-container-enter`,o._animationState===`visible`)(`mat-snack-bar-container-exit`,o._animationState===`hidden`)(`mat-snack-bar-container-animations-enabled`,!o._animationsDisabled)},features:[Og],decls:6,vars:3,consts:[[`label`,``],[1,`mdc-snackbar__surface`,`mat-mdc-snackbar-surface`],[1,`mat-mdc-snack-bar-label`],[`aria-hidden`,`true`],[`cdkPortalOutlet`,``]],template:function(i,o){i&1&&(Hi(0,`div`,1)(1,`div`,2,0)(3,`div`,3),kg(4,t,0,0,`ng-template`,4),Rl$1(),Qg(5,`div`),Rl$1()()),i&2&&(ID(5),qg(`aria-live`,o._live)(`role`,o._role)(`id`,o._liveElementId))},dependencies:[Ci],styles:[`@keyframes _mat-snack-bar-enter {
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
`],encapsulation:2,changeDetection:1})})()}return a})();var ln=new S(`mat-snack-bar-default-options`,{providedIn:`root`,factory:()=>new V});var Wt=(()=>{class a{_live=v(Nm);_injector=v(se$1);_breakpointObserver=v(fm);_parentSnackBar=v(a,{optional:!0,skipSelf:!0});_defaultConfig=v(ln);_animationsDisabled=nn$1();_snackBarRefAtThisLevel=null;simpleSnackBarComponent=rn;snackBarContainerComponent=sn;handsetCssClass=`mat-mdc-snack-bar-handset`;get _openedSnackBarRef(){let e=this._parentSnackBar;return e?e._openedSnackBarRef:this._snackBarRefAtThisLevel}set _openedSnackBarRef(e){this._parentSnackBar?this._parentSnackBar._openedSnackBarRef=e:this._snackBarRefAtThisLevel=e}openFromComponent(e,t){return this._attach(e,t)}openFromTemplate(e,t){return this._attach(e,t)}open(e,t=``,n){let i=z$1(z$1({},this._defaultConfig),n);return i.data={message:e,action:t},i.announcementMessage===e&&(i.announcementMessage=void 0),this.openFromComponent(this.simpleSnackBarComponent,i)}dismiss(){this._openedSnackBarRef&&this._openedSnackBarRef.dismiss()}ngOnDestroy(){this._snackBarRefAtThisLevel&&this._snackBarRefAtThisLevel.dismiss()}_attachSnackBarContainer(e,t){let n=t&&t.viewContainerRef&&t.viewContainerRef.injector,i=se$1.create({parent:n||this._injector,providers:[{provide:V,useValue:t}]}),o=new Y(this.snackBarContainerComponent,t.viewContainerRef,i),r=e.attach(o);return r.instance.snackBarConfig=t,r.instance}_attach(e,t){let n=z$1(z$1(z$1({},new V),this._defaultConfig),t),i=this._createOverlay(n),o=this._attachSnackBarContainer(i,n),r=new Z(o,i);if(e instanceof Fr$1){let l=new W(e,null,{$implicit:n.data,snackBarRef:r});r.instance=o.attachTemplatePortal(l)}else{let l=this._createInjector(n,r),g=new Y(e,void 0,l);r.instance=o.attachComponentPortal(g).instance}return this._breakpointObserver.observe(C_.HandsetPortrait).pipe(av(i.detachments())).subscribe(l=>{i.overlayElement.classList.toggle(this.handsetCssClass,l.matches)}),n.announcementMessage&&o._onAnnounce.subscribe(()=>{this._live.announce(n.announcementMessage,n.politeness)}),this._animateSnackBar(r,n),this._openedSnackBarRef=r,this._openedSnackBarRef}_animateSnackBar(e,t){e.afterDismissed().subscribe(()=>{this._openedSnackBarRef==e&&(this._openedSnackBarRef=null),t.announcementMessage&&this._live.clear()}),t.duration&&t.duration>0&&e.afterOpened().subscribe(()=>e._dismissAfter(t.duration)),this._openedSnackBarRef?(this._openedSnackBarRef.afterDismissed().subscribe(()=>{e.containerInstance.enter()}),this._openedSnackBarRef.dismiss()):e.containerInstance.enter()}_createOverlay(e){let t=new it;t.direction=e.direction;let n=Re(this._injector),i=e.direction===`rtl`,o=e.horizontalPosition===`left`||e.horizontalPosition===`start`&&!i||e.horizontalPosition===`end`&&i,r=!o&&e.horizontalPosition!==`center`;return o?n.left(`0`):r?n.right(`0`):n.centerHorizontally(),e.verticalPosition===`top`?n.top(`0`):n.bottom(`0`),t.positionStrategy=n,t.disableAnimations=this._animationsDisabled,Vt$1(this._injector,t)}_createInjector(e,t){let n=e&&e.viewContainerRef&&e.viewContainerRef.injector;return se$1.create({parent:n||this._injector,providers:[{provide:Z,useValue:t},{provide:Qt,useValue:e.data}]})}static ɵfac=function(t){return new(t||a)};static ɵprov=$r$1({token:a,factory:a.ɵfac})}return a})();var Se=class a{snackBar=v(Wt);handleError(m){let e=m.rejection||m,t=``;if(e instanceof Xe)switch(e.status){case 0:t=`Connection Error`;break;case To.Unauthorized:t=`Unauthorized`;break;case To.Forbidden:t=`Access Denied`;break;case To.BadRequest:t=`Bad Request`;break;default:t=`Unknown Error`}else t=`Application Error`;this.snackBar.open(t,`Ok`),console.error(t,e)}static ɵfac=function(e){return new(e||a)};static ɵprov=ae$2({token:a,factory:a.ɵfac,providedIn:`root`})};var Kt={providers:[{provide:Je$1,useClass:Se},zv(),Gd(Ut,Xd(Hd)),wg(),$l(Hl({cookieName:`XSRF-TOKEN`,headerName:`X-CSRF-TOKEN`}))]};var je=new S(`MAT_MENU_PANEL`);var J=(()=>{class a{_isAnchor;_elementRef=v(Wr$1);_document=v(mt$1);_focusMonitor=v(Xr);_parentMenu=v(je,{optional:!0});_changeDetectorRef=v(_j);role=`menuitem`;disabled=!1;disabledInteractive=!1;disableRipple=!1;_hovered=new ee;_focused=new ee;_highlighted=!1;_triggersSubmenu=!1;constructor(){v(je$1).load(Oc),this._parentMenu?.addItem?.(this),this._isAnchor=this._elementRef.nativeElement.tagName===`A`}focus(e,t){this._focusMonitor&&e?this._focusMonitor.focusVia(this._getHostElement(),e,t):this._getHostElement().focus(t),this._focused.next(this)}ngAfterViewInit(){this._focusMonitor&&this._focusMonitor.monitor(this._elementRef,!1)}ngOnDestroy(){this._focusMonitor&&this._focusMonitor.stopMonitoring(this._elementRef),this._parentMenu&&this._parentMenu.removeItem&&this._parentMenu.removeItem(this),this._hovered.complete(),this._focused.complete()}_getTabIndex(){return this.disabled&&!this.disabledInteractive?`-1`:`0`}_getAriaDisabled(){return this._isAnchor?this.disabled||null:this.disabled&&this.disabledInteractive?!0:null}_getDisabled(){return this.disabledInteractive||!this.disabled?null:!0}_getHostElement(){return this._elementRef.nativeElement}_checkDisabled(e){this.disabled&&(e.preventDefault(),e.stopPropagation())}_handleMouseEnter(){this._hovered.next(this)}getLabel(){let e=this._elementRef.nativeElement.cloneNode(!0),t=e.querySelectorAll(`mat-icon, .material-icons, .material-symbols-outlined, .material-symbols-rounded, .material-symbols-sharp`);for(let n=0;n<t.length;n++)t[n].remove();return e.textContent?.trim()||``}_setHighlighted(e){this._highlighted=e,this._changeDetectorRef.markForCheck()}_setTriggersSubmenu(e){this._triggersSubmenu=e,this._changeDetectorRef.markForCheck()}_hasFocus(){return this._document&&this._document.activeElement===this._getHostElement()}static ɵfac=function(t){return new(t||a)};static ɵcmp=(function(){let e=[[[`mat-icon`],[``,`matMenuItemIcon`,``]],`*`],t=[`mat-icon, [matMenuItemIcon]`,`*`];function n(i,o){i&1&&(Ud$1(),Hi(0,`svg`,2),Qg(1,`polygon`,3),Rl$1())}return aw({type:a,selectors:[[``,`mat-menu-item`,``]],hostAttrs:[1,`mat-mdc-menu-item`,`mat-focus-indicator`],hostVars:12,hostBindings:function(o,r){o&1&&nm$1(`click`,function(g){return r._checkDisabled(g)})(`mouseenter`,function(){return r._handleMouseEnter()}),o&2&&(qg(`role`,r.role)(`tabindex`,r._getTabIndex())(`aria-disabled`,r._getAriaDisabled())(`disabled`,r._getDisabled()),pm$1(`mat-mdc-menu-item-highlighted`,r._highlighted)(`mat-mdc-menu-item-submenu-trigger`,r._triggersSubmenu)(`mat-mdc-menu-item-disabled`,r.disabled)(`mat-mdc-menu-item-disabled-interactive`,r.disabledInteractive))},inputs:{role:`role`,disabled:[2,`disabled`,`disabled`,Nj],disabledInteractive:[2,`disabledInteractive`,`disabledInteractive`,Nj],disableRipple:[2,`disableRipple`,`disableRipple`,Nj]},exportAs:[`matMenuItem`],ngContentSelectors:t,decls:5,vars:3,consts:[[1,`mat-mdc-menu-item-text`],[`matRipple`,``,1,`mat-mdc-menu-ripple`,3,`matRippleDisabled`,`matRippleTrigger`],[`viewBox`,`0 0 5 10`,`focusable`,`false`,`aria-hidden`,`true`,1,`mat-mdc-menu-submenu-icon`],[`points`,`0,0 5,5 0,10`]],template:function(o,r){o&1&&(yC(e),vC(0),Hi(1,`span`,0),vC(2,1),Rl$1(),Qg(3,`div`,1),eC(4,n,2,0,`svg`,2)),o&2&&(ID(3),zg(`matRippleDisabled`,r.disableRipple||r.disabled)(`matRippleTrigger`,r._getHostElement()),ID(),nC(r._triggersSubmenu?4:-1))},dependencies:[W_],encapsulation:2})})()}return a})();var hn=new S(`MatMenuContent`);var fn=new S(`mat-menu-default-options`,{providedIn:`root`,factory:()=>({overlapTrigger:!1,xPosition:`after`,yPosition:`below`,backdropClass:`cdk-overlay-transparent-backdrop`})});var ze=`_mat-menu-enter`;var Ce=`_mat-menu-exit`;var X=(()=>{class a{_elementRef=v(Wr$1);_changeDetectorRef=v(_j);_injector=v(se$1);_keyManager;_xPosition;_yPosition;_firstItemFocusRef;_exitFallbackTimeout;_animationsDisabled=nn$1();_allItems;_directDescendantItems=new Mi;_classList={};_panelAnimationState=`void`;_animationDone=new ee;_isAnimating=Et$1(!1);parentMenu;direction;overlayPanelClass;backdropClass;ariaLabel;ariaLabelledby;ariaDescribedby;get xPosition(){return this._xPosition}set xPosition(e){this._xPosition=e,this.setPositionClasses()}get yPosition(){return this._yPosition}set yPosition(e){this._yPosition=e,this.setPositionClasses()}templateRef;items;lazyContent;overlapTrigger=!1;hasBackdrop;get panelClass(){return this._previousPanelClass}set panelClass(e){let t=this._previousPanelClass,n=z$1({},this._classList);t&&t.length&&t.split(` `).forEach(i=>{n[i]=!1}),this._previousPanelClass=e,e&&e.length&&(e.split(` `).forEach(i=>{n[i]=!0}),this._elementRef.nativeElement.className=``),this._classList=n}_previousPanelClass=``;get classList(){return this.panelClass}set classList(e){this.panelClass=e}closed=new Qe$1;close=this.closed;panelId=v(Si).getId(`mat-menu-panel-`);constructor(){let e=v(fn);this.overlayPanelClass=e.overlayPanelClass||``,this._xPosition=e.xPosition,this._yPosition=e.yPosition,this.backdropClass=e.backdropClass,this.overlapTrigger=e.overlapTrigger,this.hasBackdrop=e.hasBackdrop}ngOnInit(){this.setPositionClasses()}ngAfterContentInit(){this._updateDirectDescendants(),this._keyManager=new _i(this._directDescendantItems).withWrap().withTypeAhead().withHomeAndEnd().skipPredicate(e=>e.disabled&&!e.disabledInteractive),this._keyManager.tabOut.subscribe(()=>this.closed.emit(`tab`)),this._directDescendantItems.changes.pipe(iv(this._directDescendantItems),sv(e=>Gy(...e.map(t=>t._focused)))).subscribe(e=>this._keyManager.updateActiveItem(e)),this._directDescendantItems.changes.subscribe(e=>{let t=this._keyManager;if(this._panelAnimationState===`enter`&&t.activeItem?._hasFocus()){let n=e.toArray(),i=Math.max(0,Math.min(n.length-1,t.activeItemIndex||0));n[i]&&!n[i].disabled?t.setActiveItem(i):t.setNextItemActive()}})}ngOnDestroy(){this._keyManager?.destroy(),this._directDescendantItems.destroy(),this.closed.complete(),this._firstItemFocusRef?.destroy(),clearTimeout(this._exitFallbackTimeout)}_hovered(){return this._directDescendantItems.changes.pipe(iv(this._directDescendantItems),sv(t=>Gy(...t.map(n=>n._hovered))))}addItem(e){}removeItem(e){}_handleKeydown(e){let t=e.keyCode,n=this._keyManager;switch(t){case 27:_c(e)||(e.preventDefault(),this.closed.emit(`keydown`));break;case 37:this.parentMenu&&this.direction===`ltr`&&this.closed.emit(`keydown`);break;case 39:this.parentMenu&&this.direction===`rtl`&&this.closed.emit(`keydown`);break;default:(t===38||t===40)&&n.setFocusOrigin(`keyboard`),n.onKeydown(e);return}}focusFirstItem(e=`program`){this._firstItemFocusRef?.destroy(),this._firstItemFocusRef=Dh(()=>{let t=this._resolvePanel();if(!t||!t.contains(document.activeElement)){let n=this._keyManager;n.setFocusOrigin(e).setFirstItemActive(),!n.activeItem&&t&&t.focus()}},{injector:this._injector})}resetActiveItem(){this._keyManager.setActiveItem(-1)}setElevation(e){}setPositionClasses(e=this.xPosition,t=this.yPosition){this._classList=Q$2(z$1({},this._classList),{"mat-menu-before":e===`before`,"mat-menu-after":e===`after`,"mat-menu-above":t===`above`,"mat-menu-below":t===`below`}),this._changeDetectorRef.markForCheck()}_onAnimationDone(e){let t=e===Ce;(t||e===ze)&&(t&&(clearTimeout(this._exitFallbackTimeout),this._exitFallbackTimeout=void 0),this._animationDone.next(t?`void`:`enter`),this._isAnimating.set(!1))}_onAnimationStart(e){(e===ze||e===Ce)&&this._isAnimating.set(!0)}_setIsOpen(e){if(this._panelAnimationState=e?`enter`:`void`,e){if(this._keyManager.activeItemIndex===0){let t=this._resolvePanel();t&&(t.scrollTop=0)}}else this._animationsDisabled||(this._exitFallbackTimeout=setTimeout(()=>this._onAnimationDone(Ce),200));this._animationsDisabled&&setTimeout(()=>{this._onAnimationDone(e?ze:Ce)}),this._changeDetectorRef.markForCheck()}_updateDirectDescendants(){this._allItems.changes.pipe(iv(this._allItems)).subscribe(e=>{this._directDescendantItems.reset(e.filter(t=>t._parentMenu===this)),this._directDescendantItems.notifyOnChanges()})}_resolvePanel(){let e=null;return this._directDescendantItems.length&&(e=this._directDescendantItems.first._getHostElement().closest(`[role="menu"]`)),e}static ɵfac=function(t){return new(t||a)};static ɵcmp=(function(){let e=[`*`];function t(n,i){if(n&1){let o=fC();kl$1(0,`div`,0),rm$1(`click`,function(){Sd$1(o);let l=gC();return xd$1(l.closed.emit(`click`))})(`animationstart`,function(l){Sd$1(o);let g=gC();return xd$1(g._onAnimationStart(l.animationName))})(`animationend`,function(l){Sd$1(o);let g=gC();return xd$1(g._onAnimationDone(l.animationName))})(`animationcancel`,function(l){Sd$1(o);let g=gC();return xd$1(g._onAnimationDone(l.animationName))}),kl$1(1,`div`,1),vC(2),Ll$1()()}if(n&2){let o=gC();jC(o._classList),pm$1(`mat-menu-panel-animations-disabled`,o._animationsDisabled)(`mat-menu-panel-exit-animation`,o._panelAnimationState===`void`)(`mat-menu-panel-animating`,o._isAnimating()),em$1(`id`,o.panelId),qg(`aria-label`,o.ariaLabel||null)(`aria-labelledby`,o.ariaLabelledby||null)(`aria-describedby`,o.ariaDescribedby||null)}}return aw({type:a,selectors:[[`mat-menu`]],contentQueries:function(i,o,r){if(i&1&&om$1(r,hn,5)(r,J,5)(r,J,4),i&2){let l;IC(l=DC())&&(o.lazyContent=l.first),IC(l=DC())&&(o._allItems=l),IC(l=DC())&&(o.items=l)}},viewQuery:function(i,o){if(i&1&&im$1(Fr$1,5),i&2){let r;IC(r=DC())&&(o.templateRef=r.first)}},hostVars:3,hostBindings:function(i,o){i&2&&qg(`aria-label`,null)(`aria-labelledby`,null)(`aria-describedby`,null)},inputs:{backdropClass:`backdropClass`,ariaLabel:[0,`aria-label`,`ariaLabel`],ariaLabelledby:[0,`aria-labelledby`,`ariaLabelledby`],ariaDescribedby:[0,`aria-describedby`,`ariaDescribedby`],xPosition:`xPosition`,yPosition:`yPosition`,overlapTrigger:[2,`overlapTrigger`,`overlapTrigger`,Nj],hasBackdrop:[2,`hasBackdrop`,`hasBackdrop`,n=>n==null?null:Nj(n)],panelClass:[0,`class`,`panelClass`],classList:`classList`},outputs:{closed:`closed`,close:`close`},exportAs:[`matMenu`],features:[tb([{provide:je,useExisting:a}])],ngContentSelectors:e,decls:1,vars:0,consts:[[`tabindex`,`-1`,`role`,`menu`,1,`mat-mdc-menu-panel`,3,`click`,`animationstart`,`animationend`,`animationcancel`,`id`],[1,`mat-mdc-menu-content`]],template:function(i,o){i&1&&(yC(),Lg(0,t,3,12,`ng-template`))},styles:[`mat-menu {
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
`],encapsulation:2})})()}return a})();var gn=new S(`mat-menu-scroll-strategy`,{providedIn:`root`,factory:()=>{let a=v(se$1);return()=>Tt(a)}});var U=/* @__PURE__ */ new WeakMap;var bn=(()=>{class a{_canHaveBackdrop;_element=v(Wr$1);_viewContainerRef=v(is$1);_menuItemInstance=v(J,{optional:!0,self:!0});_dir=v(am,{optional:!0});_focusMonitor=v(Xr);_ngZone=v(Fe$1);_injector=v(se$1);_scrollStrategy=v(gn);_changeDetectorRef=v(_j);_animationsDisabled=nn$1();_portal;_overlayRef=null;_menuOpen=!1;_closingActionsSubscription=K.EMPTY;_menuCloseSubscription=K.EMPTY;_pendingRemoval;_parentMaterialMenu;_parentInnerPadding;_openedBy=void 0;get _menu(){return this._menuInternal}set _menu(e){e!==this._menuInternal&&(this._menuInternal=e,this._menuCloseSubscription.unsubscribe(),e?(this._parentMaterialMenu,this._menuCloseSubscription=e.close.subscribe(t=>{this._destroyMenu(t),(t===`click`||t===`tab`)&&this._parentMaterialMenu&&this._parentMaterialMenu.closed.emit(t)})):this._destroyMenu(),this._menuItemInstance?._setTriggersSubmenu(this._triggersSubmenu()))}_menuInternal=null;constructor(e){this._canHaveBackdrop=e;let t=v(je,{optional:!0});this._parentMaterialMenu=t instanceof X?t:void 0}ngOnDestroy(){this._menu&&this._ownsMenu(this._menu)&&U.delete(this._menu),this._pendingRemoval?.unsubscribe(),this._menuCloseSubscription.unsubscribe(),this._closingActionsSubscription.unsubscribe(),this._overlayRef&&(this._overlayRef.dispose(),this._overlayRef=null)}get menuOpen(){return this._menuOpen}get dir(){return this._dir&&this._dir.value===`rtl`?`rtl`:`ltr`}_triggersSubmenu(){return!!(this._menuItemInstance&&this._parentMaterialMenu&&this._menu)}_closeMenu(){this._menu?.close.emit()}_openMenu(e){if(this._triggerIsAriaDisabled())return;let t=this._menu;if(this._menuOpen||!t)return;this._pendingRemoval?.unsubscribe();let n=U.get(t);U.set(t,this),n&&n!==this&&n._closeMenu();let i=this._createOverlay(t),o=i.getConfig(),r=o.positionStrategy;this._setPosition(t,r),this._canHaveBackdrop?o.hasBackdrop=t.hasBackdrop==null?!this._triggersSubmenu():t.hasBackdrop:o.hasBackdrop=t.hasBackdrop??!1,i.hasAttached()||(i.attach(this._getPortal(t)),t.lazyContent?.attach(this.menuData)),this._closingActionsSubscription=this._menuClosingActions().subscribe(()=>this._closeMenu()),t.parentMenu=this._triggersSubmenu()?this._parentMaterialMenu:void 0,t.direction=this.dir,e&&t.focusFirstItem(this._openedBy||`program`),this._setIsMenuOpen(!0),t instanceof X&&(t._setIsOpen(!0),t._directDescendantItems.changes.pipe(av(t.close)).subscribe(()=>{r.withLockedPosition(!1).reapplyLastPosition(),r.withLockedPosition(!0)}))}focus(e,t){this._focusMonitor&&e?this._focusMonitor.focusVia(this._element,e,t):this._element.nativeElement.focus(t)}_destroyMenu(e){let t=this._overlayRef,n=this._menu;!t||!this.menuOpen||(this._closingActionsSubscription.unsubscribe(),this._pendingRemoval?.unsubscribe(),n instanceof X&&this._ownsMenu(n)?(this._pendingRemoval=n._animationDone.pipe(gn$2(1)).subscribe(()=>{t.detach(),U.has(n)||n.lazyContent?.detach()}),n._setIsOpen(!1)):(t.detach(),n?.lazyContent?.detach()),n&&this._ownsMenu(n)&&U.delete(n),this.restoreFocus&&(e===`keydown`||!this._openedBy||!this._triggersSubmenu())&&this.focus(this._openedBy),this._openedBy=void 0,this._setIsMenuOpen(!1))}_setIsMenuOpen(e){e!==this._menuOpen&&(this._menuOpen=e,this._menuOpen?this.menuOpened.emit():this.menuClosed.emit(),this._triggersSubmenu()&&this._menuItemInstance._setHighlighted(e),this._changeDetectorRef.markForCheck())}_createOverlay(e){if(!this._overlayRef){let t=this._getOverlayConfig(e);this._subscribeToPositions(e,t.positionStrategy),this._overlayRef=Vt$1(this._injector,t),this._overlayRef.keydownEvents().subscribe(n=>{this._menu instanceof X&&this._menu._handleKeydown(n)})}return this._overlayRef}_getOverlayConfig(e){return new it({positionStrategy:It(this._injector,this._getOverlayOrigin()).withLockedPosition().withGrowAfterOpen().withTransformOriginOn(`.mat-menu-panel, .mat-mdc-menu-panel`),backdropClass:e.backdropClass||`cdk-overlay-transparent-backdrop`,panelClass:e.overlayPanelClass,scrollStrategy:this._scrollStrategy(),direction:this._dir||`ltr`,disableAnimations:this._animationsDisabled})}_subscribeToPositions(e,t){e.setPositionClasses&&t.positionChanges.subscribe(n=>{this._ngZone.run(()=>{let i=n.connectionPair.overlayX===`start`?`after`:`before`,o=n.connectionPair.overlayY===`top`?`below`:`above`;e.setPositionClasses(i,o)})})}_setPosition(e,t){let[n,i]=e.xPosition===`before`?[`end`,`start`]:[`start`,`end`],[o,r]=e.yPosition===`above`?[`bottom`,`top`]:[`top`,`bottom`],[l,g]=[o,r],[Y,Ae]=[n,i],q=0;if(this._triggersSubmenu()){if(Ae=n=e.xPosition===`before`?`start`:`end`,i=Y=n===`end`?`start`:`end`,this._parentMaterialMenu){if(this._parentInnerPadding==null){let He=this._parentMaterialMenu.items.first;this._parentInnerPadding=He?He._getHostElement().offsetTop:0}q=o===`bottom`?this._parentInnerPadding:-this._parentInnerPadding}}else e.overlapTrigger||(l=o===`top`?`bottom`:`top`,g=r===`top`?`bottom`:`top`);t.withPositions([{originX:n,originY:l,overlayX:Y,overlayY:o,offsetY:q},{originX:i,originY:l,overlayX:Ae,overlayY:o,offsetY:q},{originX:n,originY:g,overlayX:Y,overlayY:r,offsetY:-q},{originX:i,originY:g,overlayX:Ae,overlayY:r,offsetY:-q}])}_menuClosingActions(){let e=this._getOutsideClickStream(this._overlayRef),t=this._overlayRef.detachments(),n=this._parentMaterialMenu?this._parentMaterialMenu.closed:Ay(),i=this._parentMaterialMenu?this._parentMaterialMenu._hovered().pipe(rr$1(o=>this._menuOpen&&o!==this._menuItemInstance)):Ay();return Gy(e,n,i,t)}_getPortal(e){return(!this._portal||this._portal.templateRef!==e.templateRef)&&(this._portal=new W(e.templateRef,this._viewContainerRef)),this._portal}_ownsMenu(e){return U.get(e)===this}_triggerIsAriaDisabled(){return Nj(this._element.nativeElement.getAttribute(`aria-disabled`))}static ɵfac=function(t){_T()};static ɵdir=fw({type:a})}return a})();var Zt=(()=>{class a extends bn{_cleanupTouchstart;_hoverSubscription=K.EMPTY;get _deprecatedMatMenuTriggerFor(){return this.menu}set _deprecatedMatMenuTriggerFor(e){this.menu=e}get menu(){return this._menu}set menu(e){this._menu=e}menuData;restoreFocus=!0;menuOpened=new Qe$1;onMenuOpen=this.menuOpened;menuClosed=new Qe$1;onMenuClose=this.menuClosed;constructor(){super(!0);let e=v(Ic$1);this._cleanupTouchstart=e.listen(this._element.nativeElement,`touchstart`,t=>{Pn(t)||(this._openedBy=`touch`)},{passive:!0})}triggersSubmenu(){return super._triggersSubmenu()}toggleMenu(){return this.menuOpen?this.closeMenu():this.openMenu()}openMenu(){this._openMenu(!0)}closeMenu(){this._closeMenu()}updatePosition(){this._overlayRef?.updatePosition()}ngAfterContentInit(){this._handleHover()}ngOnDestroy(){super.ngOnDestroy(),this._cleanupTouchstart(),this._hoverSubscription.unsubscribe()}_getOverlayOrigin(){return this._element}_getOutsideClickStream(e){return e.backdropClick()}_handleMousedown(e){On(e)||(this._openedBy=e.button===0?`mouse`:void 0,this.triggersSubmenu()&&e.preventDefault())}_handleKeydown(e){let t=e.keyCode;(t===13||t===32)&&(this._openedBy=`keyboard`),this.triggersSubmenu()&&(t===39&&this.dir===`ltr`||t===37&&this.dir===`rtl`)&&(this._openedBy=`keyboard`,this.openMenu())}_handleClick(e){this.triggersSubmenu()?(e.stopPropagation(),this.openMenu()):this.toggleMenu()}_handleHover(){this.triggersSubmenu()&&this._parentMaterialMenu&&(this._hoverSubscription=this._parentMaterialMenu._hovered().subscribe(e=>{e===this._menuItemInstance&&!e.disabled&&this._parentMaterialMenu?._panelAnimationState!==`void`&&(this._openedBy=`mouse`,this._openMenu(!1))}))}static ɵfac=function(t){return new(t||a)};static ɵdir=fw({type:a,selectors:[[``,`mat-menu-trigger-for`,``],[``,`matMenuTriggerFor`,``]],hostAttrs:[1,`mat-mdc-menu-trigger`],hostVars:3,hostBindings:function(t,n){t&1&&nm$1(`click`,function(o){return n._handleClick(o)})(`mousedown`,function(o){return n._handleMousedown(o)})(`keydown`,function(o){return n._handleKeydown(o)}),t&2&&qg(`aria-haspopup`,n.menu?`menu`:null)(`aria-expanded`,n.menuOpen)(`aria-controls`,n.menuOpen?n.menu?.panelId:null)},inputs:{_deprecatedMatMenuTriggerFor:[0,`mat-menu-trigger-for`,`_deprecatedMatMenuTriggerFor`],menu:[0,`matMenuTriggerFor`,`menu`],menuData:[0,`matMenuTriggerData`,`menuData`],restoreFocus:[0,`matMenuTriggerRestoreFocus`,`restoreFocus`]},outputs:{menuOpened:`menuOpened`,onMenuOpen:`onMenuOpen`,menuClosed:`menuClosed`,onMenuClose:`onMenuClose`},exportAs:[`matMenuTrigger`],features:[Og]})}return a})();var _n=(()=>{class a{static ɵfac=function(t){return new(t||a)};static ɵdir=fw({type:a,selectors:[[`mat-toolbar-row`]],hostAttrs:[1,`mat-toolbar-row`],exportAs:[`matToolbarRow`]})}return a})();var Jt=(()=>{class a{_elementRef=v(Wr$1);_platform=v(ae$1);_document=v(mt$1);color;_toolbarRows;ngAfterViewInit(){this._platform.isBrowser&&(this._checkToolbarMixedModes(),this._toolbarRows.changes.subscribe(()=>this._checkToolbarMixedModes()))}_checkToolbarMixedModes(){this._toolbarRows.length}static ɵfac=function(t){return new(t||a)};static ɵcmp=(function(){let e=[`*`,[[`mat-toolbar-row`]]];return aw({type:a,selectors:[[`mat-toolbar`]],contentQueries:function(i,o,r){if(i&1&&om$1(r,_n,5),i&2){let l;IC(l=DC())&&(o._toolbarRows=l)}},hostAttrs:[1,`mat-toolbar`],hostVars:6,hostBindings:function(i,o){i&2&&(jC(o.color?`mat-`+o.color:``),pm$1(`mat-toolbar-multiple-rows`,o._toolbarRows.length>0)(`mat-toolbar-single-row`,o._toolbarRows.length===0))},inputs:{color:`color`},exportAs:[`matToolbar`],ngContentSelectors:[`*`,`mat-toolbar-row`],decls:2,vars:0,template:function(i,o){i&1&&(yC(e),vC(0),vC(1,1))},styles:[`.mat-toolbar {
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
`],encapsulation:2})})()}return a})();function yn(a,m){if(a&1&&Qg(0,`img`,1),a&2){let e=gC();zg(`ngSrc`,e.profileService.myProfileInfo.value().avatarUrl)(`matTooltip`,e.identityService.myIdentityInfo.value()?.userName)}}function vn(a,m){if(a&1&&(Hi(0,`mat-icon`,2),QC(1,` account_circle `),Rl$1()),a&2){let e=gC();zg(`matTooltip`,e.identityService.myIdentityInfo.value()?.userName)}}function Mn(a,m){a&1&&(Hi(0,`mat-icon`),QC(1,`account_circle_off`),Rl$1())}var Ie=class a{menu=Ij.required();identityService=v(Lc);profileService=v(c);imgBtnStyle=`padding: 0px; width: 40px; height: 40px; transform: translateY(3px);`;static ɵfac=function(e){return new(e||a)};static ɵcmp=aw({type:a,selectors:[[`app-account-dropdown`]],inputs:{menu:[1,`menu`]},decls:4,vars:4,consts:[[`matIconButton`,``,3,`matMenuTriggerFor`],[`priority`,``,`width`,`40`,`height`,`40`,`alt`,`user avatar`,3,`ngSrc`,`matTooltip`],[3,`matTooltip`]],template:function(e,t){e&1&&(Hi(0,`button`,0),eC(1,yn,1,2,`img`,1)(2,vn,2,1,`mat-icon`,2)(3,Mn,2,0,`mat-icon`),Rl$1()),e&2&&(PC(t.profileService.myProfileInfo.hasValue()?t.imgBtnStyle:``),zg(`matMenuTriggerFor`,t.menu()),ID(),nC(t.profileService.myProfileInfo.value()?.avatarUrl?1:t.identityService.isAuthenticated()?2:3))},dependencies:[zm,Zt,yv,Gp,Le$1],styles:[`button[_ngcontent-%COMP%]{margin:0;overflow:hidden}button[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:40px;height:40px}`]})};var xn=()=>[`/`];var kn=()=>[`/UserAccount/Profile`];var wn=()=>[`/Identity/Login`];var Sn=()=>[`/Identity/Signup`];function Cn(a,m){if(a&1){let e=fC();Hi(0,`button`,8),nm$1(`click`,function(){Sd$1(e);let n=gC();return xd$1(n.sharedConfigs.toggleColorScheme())}),Hi(1,`mat-icon`),QC(2,`light_mode`),Rl$1()()}}function In(a,m){if(a&1){let e=fC();Hi(0,`button`,9),nm$1(`click`,function(){Sd$1(e);let n=gC();return xd$1(n.sharedConfigs.toggleColorScheme())}),Hi(1,`mat-icon`),QC(2,`dark_mode`),Rl$1()()}}function Tn(a,m){if(a&1){let e=fC();Hi(0,`a`,10)(1,`mat-icon`),QC(2,`account_box`),Rl$1(),QC(3,` Profile `),Rl$1(),Hi(4,`a`,11),nm$1(`click`,function(){Sd$1(e);let n=gC();return xd$1(n.identityService.logout())}),Hi(5,`mat-icon`),QC(6,`logout`),Rl$1(),QC(7,` Logout `),Rl$1()}a&2&&zg(`routerLink`,ob(1,kn))}function Dn(a,m){a&1&&(Hi(0,`a`,10)(1,`mat-icon`),QC(2,`login`),Rl$1(),QC(3,` Login `),Rl$1(),Hi(4,`a`,10)(5,`mat-icon`),QC(6,`person_add`),Rl$1(),QC(7,` Create a new account `),Rl$1()),a&2&&(zg(`routerLink`,ob(2,wn)),ID(4),zg(`routerLink`,ob(3,Sn)))}var Te=class a{sharedConfigs=v(i);document=v(mt$1);identityService=v(Lc);logoImgSrc=it$1(()=>this.sharedConfigs.colorScheme()===`dark`?`/Logo/HoLibz_Logo_Dark_Pink_Only.webp`:`/Logo/HoLibz_Logo_Light_Blue_Only.webp`);displayShadow=Et$1(!1);onWindowScroll(){this.document.defaultView&&this.document.defaultView.scrollY>0?this.displayShadow.set(!0):this.displayShadow.set(!1)}static ɵfac=function(e){return new(e||a)};static ɵcmp=aw({type:a,selectors:[[`app-nav-bar`]],hostBindings:function(e,t){e&1&&nm$1(`scroll`,function(){return t.onWindowScroll()},FI)},decls:11,vars:8,consts:[[`account`,``],[`matButton`,``,`matTooltip`,`Home`,2,`padding`,`12px 0 0 0`,`overflow`,`hidden`,3,`routerLink`],[`width`,`52`,`height`,`40`,`alt`,`HoLibz Logo`,3,`ngSrc`],[1,`full-spacer`],[`matIconButton`,``,`matTooltip`,`Light Mode`,1,`lightDarkBtn`],[`matIconButton`,``,`matTooltip`,`Dark Mode`,1,`lightDarkBtn`],[3,`menu`],[1,`navbar-matMenu`],[`matIconButton`,``,`matTooltip`,`Light Mode`,1,`lightDarkBtn`,3,`click`],[`matIconButton`,``,`matTooltip`,`Dark Mode`,1,`lightDarkBtn`,3,`click`],[`mat-menu-item`,``,3,`routerLink`],[`mat-menu-item`,``,3,`click`]],template:function(e,t){if(e&1&&(Hi(0,`mat-toolbar`)(1,`a`,1),Qg(2,`img`,2),Rl$1(),Qg(3,`span`,3),eC(4,Cn,3,0,`button`,4)(5,In,3,0,`button`,5),Qg(6,`app-account-dropdown`,6),Hi(7,`mat-menu`,7,0),eC(9,Tn,8,2)(10,Dn,8,4),Rl$1()()),e&2){let n=wC(8);pm$1(`shadow`,t.displayShadow()),ID(),zg(`routerLink`,ob(7,xn)),ID(),zg(`ngSrc`,t.logoImgSrc()),ID(2),nC(t.sharedConfigs.colorScheme()===`light`?4:5),ID(2),zg(`menu`,n),ID(3),nC(t.identityService&&t.identityService.isAuthenticated()?9:10)}},dependencies:[yv,Jt,zm,X,J,Ie,Le$1,Ks,Gp,y0],styles:[`.full-spacer[_ngcontent-%COMP%]{flex:1 1 auto}mat-toolbar[_ngcontent-%COMP%]{position:fixed;width:100%;height:56px;z-index:10;top:0}mat-toolbar.shadow[_ngcontent-%COMP%]{box-shadow:0 0 5px 0 var(--%NS%mat-sys-outline-variant)}#mainMenu[_ngcontent-%COMP%]{display:block}#littleMenu[_ngcontent-%COMP%]{display:none}.lightDarkBtn[_ngcontent-%COMP%]{margin:0 20px 0 0}@media screen and (max-width:600px){.lightDarkBtn[_ngcontent-%COMP%]{margin:0}}`]})};var De=class a{static ɵfac=function(e){return new(e||a)};static ɵcmp=aw({type:a,selectors:[[`app-root`]],decls:2,vars:0,template:function(e,t){e&1&&Qg(0,`app-nav-bar`)(1,`router-outlet`)},dependencies:[si,Te],encapsulation:2})};yl(De,Kt).catch(a=>console.error(a));export{i as $,Xe as A,gc as B,Oc as C,To as D,Si as E,_i as F,mt as G,ke$1 as H,ae$1 as I,vt as J,nn$1 as K,am as L,_0 as M,__ as N,Ue as O,_c as P,zm as Q,bi as R,O_ as S,S0 as T,lm as U,je$1 as V,lv as W,y0 as X,xe as Y,yv as Z,Gc as _,W as a,La as b,it as c,q as d,we$1 as f,Am as g,c as h,Vt$1 as i,Xr as j,W_ as k,ke as l,z as m,Le$1 as n,Y as o,wi as p,um as q,Re as r,fe as s,Ci as t,ot as u,Gp as v,Pm as w,Lc as x,Ks as y,dy as z};