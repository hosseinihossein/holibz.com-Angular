import{$ as Nl$1,$n as qy,$t as bt,A as ID,Ar as yC,B as Je$1,Bt as Yo$1,C as FI,Cn as jC,Cr as wI,D as Gy,Dn as kg,Dr as x,Dt as Ue,En as kI,Er as wt$1,Et as Ud$1,F as Iy,Fn as mv,Fr as zv,Ft as Wy,G as Kn$1,Gn as oI,Gt as Zy,H as K$1,I as J$3,In as nC,Ir as zy,It as Xc$1,J as Ll,Jn as os$1,Jt as ae$1,K as Kv,Kn as ob,Kt as _T,L as JI,Ln as nI,M as Ic$1,Mn as lg,Mr as yt$1,Mt as Vr$1,N as Ij,Nn as lw,Nr as z,Nt as Wl$1,O as Hi,On as kl,Or as xd$1,Ot as Ul,P as It,Pn as mt$1,Pr as zg,Pt as Wr$1,Q as Nj,Qn as ql,R as Jc$1,Rn as nd$1,Rt as Xy,Sn as iv,Sr as wC,St as Sr$1,T as Fr$1,Tn as ju$1,Tr as wm$1,Tt as Tn$2,U as Kd,Un as ny,Ut as Zt$2,V as Jv,Vt as Yv,Wt as Zv,X as Mi$1,Xn as pm$1,Xt as av,Y as Mg,Yn as ov,Z as Mj,Zn as qg,Zt as aw,_ as Dr$1,_r as vC,_t as S$1,a as $y,an as ev,at as Pe,bn as is$1,br as vt$1,bt as Sj,c as Ay,cn as fe,cr as sn$2,ct as QC,dn as gC,dr as tb,dt as Qy,en as eC,et as Nr$1,f as By,fn as gn$1,fr as tn$2,ft as RE,gr as v,gt as Ry,h as Dh$1,hn as hn$1,hr as ub,ht as Rm$1,i as $w,in as eo$1,it as PC,jn as le$1,jr as yp,jt as Vl$1,k as IC,kn as ku$1,kt as Un$1,l as BE,ln as fm$1,lr as sv,lt as Qe$1,m as DC,mn as hE,mr as tv,mt as Rl$1,n as $e$1,nn as ee,nr as rm$1,nt as Og,o as Aj,on as fC,or as se$1,p as Cj,pr as tr$1,pt as Re$1,q as Lg,qn as om$1,qt as _j,r as $r$1,rn as em$1,rr,rt as Oy,s as At,sn as fa,st as Q$1,tn as eI,tr as rI,tt as Ns$1,u as Be,un as fw,ur as tI,ut as Qg,v as Dt,vt as Sd$1,w as Fe$1,wn as ja$1,wr as wj,x as Et,xn as it$2,xr as w,xt as Sl$1,y as Ee$1,yn as im$1,yr as vj,yt as Si$1,z as Jd$1,zn as nm$1,zt as Yg}from"./chunk-kniop8OV.js";var i=class e{_document=v(mt$1);_colorScheme=Et(`light`);colorScheme=it$2(()=>this._colorScheme());constructor(){Dh$1(()=>{let o=localStorage.getItem(`colorScheme`);o&&(o===`dark`?(this._colorScheme.set(`dark`),this._document.body.classList.add(`dark-mode`)):(this._colorScheme.set(`light`),this._document.body.classList.remove(`dark-mode`)))})}toggleColorScheme(){this._colorScheme()===`dark`?(this._colorScheme.set(`light`),this._document.body.classList.remove(`dark-mode`)):(this._colorScheme.set(`dark`),this._document.body.classList.add(`dark-mode`)),localStorage.setItem(`colorScheme`,this.colorScheme())}static ɵfac=function(l){return new(l||e)};static ɵprov=$r$1({token:e,factory:e.ɵfac})};var Ba=null;function Yt(){return Ba}function Ki(n){Ba??=n}var bn$1=class{};var $e=(()=>{class n{historyGo(t){throw new Error(``)}static ɵfac=function(e){return new(e||n)};static ɵprov=ae$1({token:n,factory:()=>v(Ua),providedIn:`platform`})}return n})();var Ua=(()=>{class n extends $e{_location;_history;_doc=v(mt$1);constructor(){super(),this._location=window.location,this._history=window.history}getBaseHrefFromDOM(){return Yt().getBaseHref(this._doc)}onPopState(t){let e=Yt().getGlobalEventTarget(this._doc,`window`);return e.addEventListener(`popstate`,t,!1),()=>e.removeEventListener(`popstate`,t)}onHashChange(t){let e=Yt().getGlobalEventTarget(this._doc,`window`);return e.addEventListener(`hashchange`,t,!1),()=>e.removeEventListener(`hashchange`,t)}get href(){return this._location.href}get protocol(){return this._location.protocol}get hostname(){return this._location.hostname}get port(){return this._location.port}get pathname(){return this._location.pathname}get search(){return this._location.search}get hash(){return this._location.hash}set pathname(t){this._location.pathname=t}pushState(t,e,i){this._history.pushState(t,e,i)}replaceState(t,e,i){this._history.replaceState(t,e,i)}forward(){this._history.forward()}back(){this._history.back()}historyGo(t=0){this._history.go(t)}getState(){return this._history.state}static ɵfac=function(e){return new(e||n)};static ɵprov=ae$1({token:n,factory:()=>new n,providedIn:`platform`})}return n})();function Va(n,r){return n?r?n.endsWith(`/`)?r.startsWith(`/`)?n+r.slice(1):n+r:r.startsWith(`/`)?n+r:`${n}/${r}`:n:r}function ja(n){let r=n.search(/#|\?|$/);return n[r-1]===`/`?n.slice(0,r-1)+n.slice(r):n}function oe(n){return n&&n[0]!==`?`?`?${n}`:n}var We=(()=>{class n{historyGo(t){throw new Error(``)}static ɵfac=function(e){return new(e||n)};static ɵprov=ae$1({token:n,factory:()=>v(Al),providedIn:`root`})}return n})();var Ml=new S$1(``);var Al=(()=>{class n extends We{_platformLocation;_baseHref;_removeListenerFns=[];constructor(t,e){super(),this._platformLocation=t,this._baseHref=e??this._platformLocation.getBaseHrefFromDOM()??v(mt$1).location?.origin??``}ngOnDestroy(){for(;this._removeListenerFns.length;)this._removeListenerFns.pop()()}onPopState(t){this._removeListenerFns.push(this._platformLocation.onPopState(t),this._platformLocation.onHashChange(t))}getBaseHref(){return this._baseHref}prepareExternalUrl(t){return Va(this._baseHref,t)}path(t=!1){let e=this._platformLocation.pathname+oe(this._platformLocation.search),i=this._platformLocation.hash;return i&&t?`${e}${i}`:e}pushState(t,e,i,o){let a=this.prepareExternalUrl(i+oe(o));this._platformLocation.pushState(t,e,a)}replaceState(t,e,i,o){let a=this.prepareExternalUrl(i+oe(o));this._platformLocation.replaceState(t,e,a)}forward(){this._platformLocation.forward()}back(){this._platformLocation.back()}getState(){return this._platformLocation.getState()}historyGo(t=0){this._platformLocation.historyGo?.(t)}static ɵfac=function(e){return new(e||n)(Pe($e),Pe(Ml,8))};static ɵprov=ae$1({token:n,factory:n.ɵfac,providedIn:`root`})}return n})();var ae=(()=>{class n{_subject=new ee;_basePath;_locationStrategy;_urlChangeListeners=[];_urlChangeSubscription=null;constructor(t){this._locationStrategy=t;let e=this._locationStrategy.getBaseHref();this._basePath=Ol(ja(za(e))),this._locationStrategy.onPopState(i=>{let o={url:this.path(!0),pop:!0,state:i.state,type:i.type};i.hasUAVisualTransition&&(o.hasUAVisualTransition=!0),this._subject.next(o)})}ngOnDestroy(){this._urlChangeSubscription?.unsubscribe(),this._urlChangeListeners=[]}path(t=!1){return this.normalize(this._locationStrategy.path(t))}getState(){return this._locationStrategy.getState()}isCurrentPathEqualTo(t,e=``){return this.path()==this.normalize(t+oe(e))}normalize(t){return n.stripTrailingSlash(Tl(this._basePath,za(t)))}prepareExternalUrl(t){return t&&t[0]!==`/`&&(t=`/`+t),this._locationStrategy.prepareExternalUrl(t)}go(t,e=``,i=null){this._locationStrategy.pushState(i,``,t,e),this._notifyUrlChangeListeners(this.prepareExternalUrl(t+oe(e)),i)}replaceState(t,e=``,i=null){this._locationStrategy.replaceState(i,``,t,e),this._notifyUrlChangeListeners(this.prepareExternalUrl(t+oe(e)),i)}forward(){this._locationStrategy.forward()}back(){this._locationStrategy.back()}historyGo(t=0){this._locationStrategy.historyGo?.(t)}onUrlChange(t){return this._urlChangeListeners.push(t),this._urlChangeSubscription??=this.subscribe(e=>{this._notifyUrlChangeListeners(e.url,e.state)}),()=>{let e=this._urlChangeListeners.indexOf(t);this._urlChangeListeners.splice(e,1),this._urlChangeListeners.length===0&&(this._urlChangeSubscription?.unsubscribe(),this._urlChangeSubscription=null)}}_notifyUrlChangeListeners(t=``,e){this._urlChangeListeners.forEach(i=>i(t,e))}subscribe(t,e,i){return this._subject.subscribe({next:t,error:e??void 0,complete:i??void 0})}static normalizeQueryParams=oe;static joinWithSlash=Va;static stripTrailingSlash=ja;static ɵfac=function(e){return new(e||n)(Pe(We))};static ɵprov=ae$1({token:n,factory:()=>Nl(),providedIn:`root`})}return n})();function Nl(){return new ae(Pe(We))}function Tl(n,r){if(!n||!r.startsWith(n))return r;let t=r.substring(n.length);return t===``||[`/`,`;`,`?`,`#`].includes(t[0])?t:r}function za(n){return n.replace(/\/index\.html$/,``)}function Ol(n){if((/* @__PURE__ */ new RegExp(`^(https?:)?//`)).test(n)){let[,t]=n.split(/\/\/[^\/]+/);return t}return n}var Pl=(()=>{class n{_viewContainerRef;_viewRef=null;ngTemplateOutletContext=null;ngTemplateOutlet=null;ngTemplateOutletInjector=null;injector=v(se$1);constructor(t){this._viewContainerRef=t}ngOnChanges(t){if(this._shouldRecreateView(t)){let e=this._viewContainerRef;if(this._viewRef&&e.remove(e.indexOf(this._viewRef)),!this.ngTemplateOutlet){this._viewRef=null;return}let i=this._createContextForwardProxy();this._viewRef=e.createEmbeddedView(this.ngTemplateOutlet,i,{injector:this._getInjector()})}}_getInjector(){return this.ngTemplateOutletInjector===`outlet`?this.injector:this.ngTemplateOutletInjector??void 0}_shouldRecreateView(t){return!!t.ngTemplateOutlet||!!t.ngTemplateOutletInjector}_createContextForwardProxy(){return new Proxy({},{set:(t,e,i)=>this.ngTemplateOutletContext?Reflect.set(this.ngTemplateOutletContext,e,i):!1,get:(t,e,i)=>{if(this.ngTemplateOutletContext)return Reflect.get(this.ngTemplateOutletContext,e,i)}})}static ɵfac=function(e){return new(e||n)(os$1(is$1))};static ɵdir=fw({type:n,selectors:[[``,`ngTemplateOutlet`,``]],inputs:{ngTemplateOutletContext:`ngTemplateOutletContext`,ngTemplateOutlet:`ngTemplateOutlet`,ngTemplateOutletInjector:`ngTemplateOutletInjector`},features:[hE]})}return n})();function vn$1(n,r){r=encodeURIComponent(r);for(let t of n.split(`;`)){let e=t.indexOf(`=`),[i,o]=e==-1?[t,``]:[t.slice(0,e),t.slice(e+1)];if(i.trim()!==r)continue;let a=o;try{a=decodeURIComponent(o)}catch{}return a.length>1&&a[0]===`"`&&a[a.length-1]===`"`&&(a=a.slice(1,-1)),a}return null}var Zi=`browser`;function vr(n){return n===Zi}function Ha(n){return n.replace(/\\/g,`\\\\`).replace(/[\n\r\f\0]/g,``).replace(/"/g,`\\"`)}var Wa=n=>n.src;var jl=new S$1(``,{factory:()=>Wa});var $a=/^((\s*\d+w\s*(,|$)){1,})$/;var zl=[1,2];var Vl=640;var Hl=1920;var $l=1080;var Hf=(()=>{class n{imageLoader=v(jl);config=Wl(v(Jv));renderer=v(Ic$1);imgElement=v(Wr$1).nativeElement;injector=v(se$1);destroyRef=v(fe);lcpObserver;_renderedSrc=null;ngSrc;ngSrcset;sizes;width;height;decoding;loading;priority=!1;loaderParams;disableOptimizedSrcset=!1;fill=!1;placeholder;placeholderConfig;src;srcset;constructor(){this.destroyRef.onDestroy(()=>{this.renderer.removeAttribute(this.imgElement,`loading`)})}ngOnInit(){Be(`NgOptimizedImage`),this.placeholder&&this.removePlaceholderOnLoad(this.imgElement),this.setHostAttributes()}setHostAttributes(){this.fill?this.sizes||=`100vw`:(this.setHostAttribute(`width`,this.width.toString()),this.setHostAttribute(`height`,this.height.toString())),this.setHostAttribute(`loading`,this.getLoadingBehavior()),this.setHostAttribute(`fetchpriority`,this.getFetchPriority()),this.setHostAttribute(`decoding`,this.getDecoding()),this.setHostAttribute(`ng-img`,`true`);this.updateSrcAndSrcset();this.sizes?this.getLoadingBehavior()===`lazy`?this.setHostAttribute(`sizes`,`auto, `+this.sizes):this.setHostAttribute(`sizes`,this.sizes):this.ngSrcset&&$a.test(this.ngSrcset)&&this.getLoadingBehavior()===`lazy`&&this.setHostAttribute(`sizes`,`auto, 100vw`)}ngOnChanges(t){if(t.ngSrc&&!t.ngSrc.isFirstChange()){this._renderedSrc;this.updateSrcAndSrcset(!0)}}getAspectRatio(){return this.width&&this.height&&this.height!==0?this.width/this.height:null}callImageLoader(t){let e=t;this.loaderParams&&(e.loaderParams=this.loaderParams);let i=this.getAspectRatio();return i!==null&&e.width&&(e.height=Math.round(e.width/i)),this.imageLoader(e)}getLoadingBehavior(){return!this.priority&&this.loading!==void 0?this.loading:this.priority?`eager`:`lazy`}getFetchPriority(){return this.priority?`high`:`auto`}getDecoding(){return this.priority?`sync`:this.decoding??`auto`}getRewrittenSrc(){if(!this._renderedSrc){let t={src:this.ngSrc};this._renderedSrc=this.callImageLoader(t)}return this._renderedSrc}getRewrittenSrcset(){let t=$a.test(this.ngSrcset);return this.ngSrcset.split(`,`).filter(i=>i!==``).map(i=>{i=i.trim();let o=t?parseFloat(i):parseFloat(i)*this.width;return`${this.callImageLoader({src:this.ngSrc,width:o})} ${i}`}).join(`, `)}getAutomaticSrcset(){return this.sizes?this.getResponsiveSrcset():this.getFixedSrcset()}getResponsiveSrcset(){let{breakpoints:t}=this.config,e=t;return this.sizes?.trim()===`100vw`&&(e=t.filter(o=>o>=Vl)),e.map(o=>`${this.callImageLoader({src:this.ngSrc,width:o})} ${o}w`).join(`, `)}updateSrcAndSrcset(t=!1){t&&(this._renderedSrc=null);let e=this.getRewrittenSrc();this.setHostAttribute(`src`,e);let i;return this.ngSrcset?i=this.getRewrittenSrcset():this.shouldGenerateAutomaticSrcset()&&(i=this.getAutomaticSrcset()),i?this.setHostAttribute(`srcset`,i):this.disableOptimizedSrcset&&this.srcset&&this.setHostAttribute(`srcset`,this.srcset),i}getFixedSrcset(){return zl.map(e=>`${this.callImageLoader({src:this.ngSrc,width:this.width*e})} ${e}x`).join(`, `)}shouldGenerateAutomaticSrcset(){let t=!1;return this.sizes||(t=this.width>Hl||this.height>$l),!this.disableOptimizedSrcset&&!this.srcset&&this.imageLoader!==Wa&&!t}generatePlaceholder(t){let{placeholderResolution:e}=this.config;return t===!0?`url("${Ha(this.callImageLoader({src:this.ngSrc,width:e,isPlaceholder:!0}))}")`:typeof t==`string`?`url("${Ha(t)}")`:null}shouldBlurPlaceholder(t){return!t||!Object.hasOwn(t,`blur`)?!0:!!t.blur}removePlaceholderOnLoad(t){let e=()=>{let a=this.injector.get(_j);i(),o(),this.placeholder=!1,a.markForCheck()},i=this.renderer.listen(t,`load`,e),o=this.renderer.listen(t,`error`,e);this.destroyRef.onDestroy(()=>{i(),o()}),Gl(t,e)}setHostAttribute(t,e){this.renderer.setAttribute(this.imgElement,t,e)}static ɵfac=function(e){return new(e||n)};static ɵdir=fw({type:n,selectors:[[`img`,`ngSrc`,``]],hostVars:18,hostBindings:function(e,i){e&2&&fm$1(`position`,i.fill?`absolute`:null)(`width`,i.fill?`100%`:null)(`height`,i.fill?`100%`:null)(`inset`,i.fill?`0`:null)(`background-size`,i.placeholder?`cover`:null)(`background-position`,i.placeholder?`50% 50%`:null)(`background-repeat`,i.placeholder?`no-repeat`:null)(`background-image`,i.placeholder?i.generatePlaceholder(i.placeholder):null)(`filter`,i.placeholder&&i.shouldBlurPlaceholder(i.placeholderConfig)?`blur(15px)`:null)},inputs:{ngSrc:[2,`ngSrc`,`ngSrc`,Yl],ngSrcset:`ngSrcset`,sizes:`sizes`,width:[2,`width`,`width`,Sj],height:[2,`height`,`height`,Sj],decoding:`decoding`,loading:`loading`,priority:[2,`priority`,`priority`,Nj],loaderParams:`loaderParams`,disableOptimizedSrcset:[2,`disableOptimizedSrcset`,`disableOptimizedSrcset`,Nj],fill:[2,`fill`,`fill`,Nj],placeholder:[2,`placeholder`,`placeholder`,Xl],placeholderConfig:`placeholderConfig`,src:`src`,srcset:`srcset`},features:[hE]})}return n})();function Wl(n){let r={};return n.breakpoints&&(r.breakpoints=n.breakpoints.sort((t,e)=>t-e)),Object.assign({},Jd$1,n,r)}function Gl(n,r){n.complete&&n.naturalWidth&&r()}function Yl(n){return typeof n==`string`?n:Dt(n)}function Xl(n){return typeof n==`string`&&n!==`true`&&n!==`false`&&n!==``?n:Nj(n)}var yn$1=class{_doc;constructor(r){this._doc=r}manager};var yr=(()=>{class n extends yn$1{constructor(t){super(t)}supports(t){return!0}addEventListener(t,e,i,o){return t.addEventListener(e,i,o),()=>this.removeEventListener(t,e,i,o)}removeEventListener(t,e,i,o){return t.removeEventListener(e,i,o)}static ɵfac=function(e){return new(e||n)(Pe(mt$1))};static ɵprov=ae$1({token:n,factory:n.ɵfac})}return n})();var wr=new S$1(``);var eo=(()=>{class n{_zone;_plugins;_eventNameToPlugin=/* @__PURE__ */ new Map;constructor(t,e){this._zone=e,t.forEach(a=>{a.manager=this});let i=t.filter(a=>!(a instanceof yr));this._plugins=i.slice().reverse();let o=t.find(a=>a instanceof yr);o&&this._plugins.push(o)}addEventListener(t,e,i,o){return this._findPluginFor(e).addEventListener(t,e,i,o)}getZone(){return this._zone}_findPluginFor(t){let e=this._eventNameToPlugin.get(t);if(e)return e;if(e=this._plugins.find(o=>o.supports(t)),!e)throw new w(-5101,!1);return this._eventNameToPlugin.set(t,e),e}static ɵfac=function(e){return new(e||n)(Pe(wr),Pe(Fe$1))};static ɵprov=ae$1({token:n,factory:n.ɵfac})}return n})();var Ji=`ng-app-id`;function Ga(n){for(let r of n)r.remove()}function Ya(n,r){let t=r.createElement(`style`);return t.textContent=n,t}function Kl(n,r,t,e){let i=n.head?.querySelectorAll(`style[${Ji}="${r}"],link[${Ji}="${r}"]`);if(!i||i.length===0)return!1;for(let o of i)o.removeAttribute(Ji),o instanceof HTMLLinkElement?e.set(o.href.slice(o.href.lastIndexOf(`/`)+1),{usage:0,elements:[o]}):o.textContent&&t.set(o.textContent,{usage:0,elements:[o]});return!0}function to(n,r){let t=r.createElement(`link`);return t.setAttribute(`rel`,`stylesheet`),t.setAttribute(`href`,n),t}var no=(()=>{class n{doc;appId;nonce;inline=/* @__PURE__ */ new Map;external=/* @__PURE__ */ new Map;hosts=/* @__PURE__ */ new Set;constructor(t,e,i,o={}){this.doc=t,this.appId=e,this.nonce=i,Kl(t,e,this.inline,this.external)&&this.hosts.add(t.head)}addStyles(t,e){for(let i of t)this.addUsage(i,this.inline,Ya);e?.forEach(i=>this.addUsage(i,this.external,to))}removeStyles(t,e){for(let i of t)this.removeUsage(i,this.inline);e?.forEach(i=>this.removeUsage(i,this.external))}addUsage(t,e,i){let o=e.get(t);o?o.usage++:e.set(t,{usage:1,elements:[...this.hosts].map(a=>this.addElement(a,i(t,this.doc)))})}removeUsage(t,e){let i=e.get(t);i&&(i.usage--,i.usage<=0&&(Ga(i.elements),e.delete(t)))}ngOnDestroy(){for(let[,{elements:t}]of[...this.inline,...this.external])Ga(t);this.hosts.clear()}addHost(t){if(!this.hosts.has(t)){this.hosts.add(t);for(let[e,{elements:i}]of this.inline)i.push(this.addElement(t,Ya(e,this.doc)));for(let[e,{elements:i}]of this.external)i.push(this.addElement(t,to(e,this.doc)))}}removeHost(t){this.hosts.delete(t);for(let e of[...this.inline.values(),...this.external.values()]){let i=[];for(let o of e.elements)o.parentNode===t?o.remove():i.push(o);e.elements=i}}addElement(t,e){return this.nonce&&e.setAttribute(`nonce`,this.nonce),t.appendChild(e)}static ɵfac=function(e){return new(e||n)(Pe(mt$1),Pe(It),Pe(Kv,8),Pe(Yv))};static ɵprov=ae$1({token:n,factory:n.ɵfac})}return n})();var Qi={svg:`http://www.w3.org/2000/svg`,xhtml:`http://www.w3.org/1999/xhtml`,xlink:`http://www.w3.org/1999/xlink`,xml:`http://www.w3.org/XML/1998/namespace`,xmlns:`http://www.w3.org/2000/xmlns/`,math:`http://www.w3.org/1998/Math/MathML`};var ro=/%COMP%/g;var qa=`%COMP%`;var Zl=`_nghost-${qa}`;var Jl=`_ngcontent-${qa}`;var Ql=!0;var td=new S$1(``,{factory:()=>Ql});var ed=new S$1(``);function nd(n){return Jl.replace(ro,n)}function rd(n){return Zl.replace(ro,n)}function Ka(n,r){return r.map(t=>t.replace(ro,n))}var io=(()=>{class n{eventManager;sharedStylesHost;appId;removeStylesOnCompDestroy;doc;ngZone;nonce;tracingService;rendererByCompId=/* @__PURE__ */ new Map;defaultRenderer;cssVarNamespace;constructor(t,e,i,o,a,s,c=null,d=null,u=null){this.eventManager=t,this.sharedStylesHost=e,this.appId=i,this.removeStylesOnCompDestroy=o,this.doc=a,this.ngZone=s,this.nonce=c,this.tracingService=d,this.cssVarNamespace=u??``,this.defaultRenderer=new _n$1(t,a,s,this.tracingService,this.cssVarNamespace)}createRenderer(t,e){if(!t||!e)return this.defaultRenderer;let i=this.getOrCreateRenderer(t,e);return i instanceof Sr?i.applyToHost(t):i instanceof Sn$1&&i.applyStyles(),i}getOrCreateRenderer(t,e){let i=this.rendererByCompId,o=i.get(e.id);if(!o){let a=this.doc,s=this.ngZone,c=this.eventManager,d=this.sharedStylesHost,u=this.removeStylesOnCompDestroy,h=this.tracingService;switch(e.encapsulation){case tn$2.Emulated:o=new Sr(c,d,e,this.appId,u,a,s,h,this.cssVarNamespace);break;case tn$2.ShadowDom:return new _r(c,t,e,a,s,this.nonce,h,this.cssVarNamespace,d);case tn$2.ExperimentalIsolatedShadowDom:return new _r(c,t,e,a,s,this.nonce,h,this.cssVarNamespace);default:o=new Sn$1(c,d,e,u,a,s,h,this.cssVarNamespace)}i.set(e.id,o)}return o}ngOnDestroy(){this.rendererByCompId.clear()}componentReplaced(t){this.rendererByCompId.delete(t)}static ɵfac=function(e){return new(e||n)(Pe(eo),Pe(lg),Pe(It),Pe(td),Pe(mt$1),Pe(Fe$1),Pe(Kv),Pe(sn$2,8),Pe(ed,8))};static ɵprov=ae$1({token:n,factory:n.ɵfac})}return n})();var _n$1=class{eventManager;doc;ngZone;tracingService;cssVarNamespace;data=Object.create(null);throwOnSyntheticProps=!0;constructor(r,t,e,i,o=``){this.eventManager=r,this.doc=t,this.ngZone=e,this.tracingService=i,this.cssVarNamespace=o}destroy(){}destroyNode=null;createElement(r,t){return t?this.doc.createElementNS(Qi[t]||t,r):this.doc.createElement(r)}createComment(r){return this.doc.createComment(r)}createText(r){return this.doc.createTextNode(r)}appendChild(r,t){(Xa(r)?r.content:r).appendChild(t)}insertBefore(r,t,e){if(r){let i=Xa(r)?r.content:r;if(e!=null&&e.parentNode!==i)throw new w(-5106,!1);i.insertBefore(t,e)}}removeChild(r,t){t.remove()}selectRootElement(r,t){let e=typeof r==`string`?this.doc.querySelector(r):r;if(!e)throw new w(-5104,!1);return t||(e.textContent=``),e}parentNode(r){return r.parentNode}nextSibling(r){return r.nextSibling}setAttribute(r,t,e,i){if(i){t=i+`:`+t;let o=Qi[i];o?r.setAttributeNS(o,t,e):r.setAttribute(t,e)}else r.setAttribute(t,e)}removeAttribute(r,t,e){if(e){let i=Qi[e];i?r.removeAttributeNS(i,t):r.removeAttribute(`${e}:${t}`)}else r.removeAttribute(t)}addClass(r,t){r.classList.add(t)}removeClass(r,t){r.classList.remove(t)}setStyle(r,t,e,i){let o=t.startsWith(`--`);o&&(t=t.replace(`%NS%`,this.cssVarNamespace)),o||i&(Si$1.DashCase|Si$1.Important)?r.style.setProperty(t,e,i&Si$1.Important?`important`:``):r.style[t]=e}removeStyle(r,t,e){let i=t.startsWith(`--`);i&&(t=t.replace(`%NS%`,this.cssVarNamespace)),i||e&Si$1.DashCase?r.style.removeProperty(t):r.style[t]=``}setProperty(r,t,e){r!=null&&(r[t]=e)}setValue(r,t){r.nodeValue=t}listen(r,t,e,i){if(typeof r==`string`&&(r=Yt().getGlobalEventTarget(this.doc,r),!r))throw new w(-5102,!1);let o=this.decoratePreventDefault(e);return this.tracingService?.wrapEventListener&&(o=this.tracingService.wrapEventListener(r,t,o)),this.eventManager.addEventListener(r,t,o,i)}decoratePreventDefault(r){return t=>{if(t===`__ngUnwrap__`)return r;r(t)===!1&&t.preventDefault()}}};function Xa(n){return n.tagName===`TEMPLATE`&&n.content!==void 0}var _r=class extends _n$1{hostEl;sharedStylesHost;shadowRoot;constructor(r,t,e,i,o,a,s,c,d){super(r,i,o,s,c),this.hostEl=t,this.sharedStylesHost=d,this.shadowRoot=t.attachShadow({mode:`open`}),this.sharedStylesHost&&this.sharedStylesHost.addHost(this.shadowRoot);let u=e.styles;u=Ka(e.id,u).map(m=>m.replace(/%NS%/g,c));for(let m of u){let b=document.createElement(`style`);a&&b.setAttribute(`nonce`,a),b.textContent=m,this.shadowRoot.appendChild(b)}let h=e.getExternalStyles?.();if(h)for(let m of h){let b=to(m,i);a&&b.setAttribute(`nonce`,a),this.shadowRoot.appendChild(b)}}nodeOrShadowRoot(r){return r===this.hostEl?this.shadowRoot:r}appendChild(r,t){return super.appendChild(this.nodeOrShadowRoot(r),t)}insertBefore(r,t,e){return super.insertBefore(this.nodeOrShadowRoot(r),t,e)}removeChild(r,t){return super.removeChild(null,t)}parentNode(r){return this.nodeOrShadowRoot(super.parentNode(this.nodeOrShadowRoot(r)))}destroy(){this.sharedStylesHost&&this.sharedStylesHost.removeHost(this.shadowRoot)}};var Sn$1=class extends _n$1{sharedStylesHost;removeStylesOnCompDestroy;styles;styleUrls;constructor(r,t,e,i,o,a,s,c,d){super(r,o,a,s,c),this.sharedStylesHost=t,this.removeStylesOnCompDestroy=i;let u=e.styles,h=d?Ka(d,u):u;this.styles=h.map(m=>m.replace(/%NS%/g,c)),this.styleUrls=e.getExternalStyles?.(d)}applyStyles(){this.sharedStylesHost.addStyles(this.styles,this.styleUrls)}destroy(){this.removeStylesOnCompDestroy&&JI.size===0&&this.sharedStylesHost.removeStyles(this.styles,this.styleUrls)}};var Sr=class extends Sn$1{contentAttr;hostAttr;constructor(r,t,e,i,o,a,s,c,d){let u=i+`-`+e.id;super(r,t,e,o,a,s,c,d,u),this.contentAttr=nd(u),this.hostAttr=rd(u)}applyToHost(r){this.applyStyles(),this.setAttribute(r,this.hostAttr,``)}createElement(r,t){let e=super.createElement(r,t);return super.setAttribute(e,this.contentAttr,``),e}};var Cr=class n extends bn$1{supportsDOMEvents=!0;static makeCurrent(){Ki(new n)}onAndCancel(r,t,e,i){return r.addEventListener(t,e,i),()=>{r.removeEventListener(t,e,i)}}dispatchEvent(r,t){r.dispatchEvent(t)}remove(r){r.remove()}createElement(r,t){return t=t||this.getDefaultDocument(),t.createElement(r)}createHtmlDocument(){return document.implementation.createHTMLDocument(`fakeTitle`)}getDefaultDocument(){return document}isElementNode(r){return r.nodeType===Node.ELEMENT_NODE}isShadowRoot(r){return r instanceof DocumentFragment}getGlobalEventTarget(r,t){return t===`window`?window:t===`document`?r:t===`body`?r.body:null}getBaseHref(r){let t=od();return t==null?null:ad(t)}resetBaseElement(){wn$1=null}getUserAgent(){return window.navigator.userAgent}getCookie(r){return vn$1(document.cookie,r)}};var wn$1=null;function od(){return wn$1=wn$1||document.head.querySelector(`base`),wn$1?wn$1.getAttribute(`href`):null}function ad(n){return new URL(n,document.baseURI).pathname}var Za=[`alt`,`control`,`meta`,`shift`];var sd={"\b":`Backspace`,"	":`Tab`,"":`Delete`,"\x1B":`Escape`,Del:`Delete`,Esc:`Escape`,Left:`ArrowLeft`,Right:`ArrowRight`,Up:`ArrowUp`,Down:`ArrowDown`,Menu:`ContextMenu`,Scroll:`ScrollLock`,Win:`OS`};var cd={alt:n=>n.altKey,control:n=>n.ctrlKey,meta:n=>n.metaKey,shift:n=>n.shiftKey};var Ja=(()=>{class n extends yn$1{constructor(t){super(t)}supports(t){return n.parseEventName(t)!=null}addEventListener(t,e,i,o){let a=n.parseEventName(e),s=n.eventCallback(a.fullKey,i,this.manager.getZone());return this.manager.getZone().runOutsideAngular(()=>Yt().onAndCancel(t,a.domEventName,s,o))}static parseEventName(t){let e=t.toLowerCase().split(`.`),i=e.shift();if(e.length===0||!(i===`keydown`||i===`keyup`))return null;let o=n._normalizeKey(e.pop()),a=``,s=e.indexOf(`code`);if(s>-1&&(e.splice(s,1),a=`code.`),Za.forEach(d=>{let u=e.indexOf(d);u>-1&&(e.splice(u,1),a+=d+`.`)}),a+=o,e.length!=0||o.length===0)return null;let c={};return c.domEventName=i,c.fullKey=a,c}static matchEventFullKeyCode(t,e){let i=sd[t.key]||t.key,o=``;return e.indexOf(`code.`)>-1&&(i=t.code,o=`code.`),i==null||!i?!1:(i=i.toLowerCase(),i===` `?i=`space`:i===`.`&&(i=`dot`),Za.forEach(a=>{if(a!==i){let s=cd[a];s(t)&&(o+=a+`.`)}}),o+=i,o===e)}static eventCallback(t,e,i){return o=>{n.matchEventFullKeyCode(o,t)&&i.runGuarded(()=>e(o))}}static _normalizeKey(t){return t===`esc`?`escape`:t}static ɵfac=function(e){return new(e||n)(Pe(mt$1))};static ɵprov=ae$1({token:n,factory:n.ɵfac})}return n})();async function ld(n,r,t){let e=z({rootComponent:n},dd(r,t));return Mj(e)}function dd(n,r){return{platformRef:r?.platformRef,appProviders:[...fd,...n?.providers??[]],platformProviders:pd}}function ud(){Cr.makeCurrent()}function hd(){return new Je$1}function md(){return BE(document),document}var pd=[{provide:Yv,useValue:Zi},{provide:Kd,useValue:ud,multi:!0},{provide:mt$1,useFactory:md}];var fd=[{provide:fa,useValue:`root`},{provide:Je$1,useFactory:hd},{provide:wr,useClass:yr,multi:!0},{provide:wr,useClass:Ja,multi:!0},io,{provide:lg,useClass:no},{provide:no,useExisting:lg},eo,{provide:Vr$1,useExisting:io},[]];var vt=class n{headers;normalizedNames=/* @__PURE__ */ new Map;lazyInit;lazyUpdate=null;constructor(r){r?typeof r==`string`?this.lazyInit=()=>{this.headers=/* @__PURE__ */ new Map,r.split(`
`).forEach(t=>{let e=t.indexOf(`:`);if(e>0){let i=t.slice(0,e),o=t.slice(e+1).trim();this.addHeaderEntry(i,o)}})}:typeof Headers<`u`&&r instanceof Headers?(this.headers=/* @__PURE__ */ new Map,r.forEach((t,e)=>{this.addHeaderEntry(e,t)})):this.lazyInit=()=>{this.headers=/* @__PURE__ */ new Map,Object.entries(r).forEach(([t,e])=>{this.setHeaderEntries(t,e)})}:this.headers=/* @__PURE__ */ new Map}has(r){return this.init(),this.headers.has(r.toLowerCase())}get(r){this.init();let t=this.headers.get(r.toLowerCase());return t&&t.length>0?t[0]:null}keys(){return this.init(),Array.from(this.normalizedNames.values())}getAll(r){return this.init(),this.headers.get(r.toLowerCase())||null}append(r,t){return this.clone({name:r,value:t,op:`a`})}set(r,t){return this.clone({name:r,value:t,op:`s`})}delete(r,t){return this.clone({name:r,value:t,op:`d`})}maybeSetNormalizedName(r,t){this.normalizedNames.has(t)||this.normalizedNames.set(t,r)}init(){this.lazyInit&&(this.lazyInit instanceof n?this.copyFrom(this.lazyInit):this.lazyInit(),this.lazyInit=null,this.lazyUpdate&&(this.lazyUpdate.forEach(r=>this.applyUpdate(r)),this.lazyUpdate=null))}copyFrom(r){r.init();for(let[t,e]of r.headers.entries())this.headers.set(t,e),this.normalizedNames.set(t,r.normalizedNames.get(t))}clone(r){let t=new n;return t.lazyInit=this.lazyInit&&this.lazyInit instanceof n?this.lazyInit:this,t.lazyUpdate=(this.lazyUpdate||[]).concat([r]),t}applyUpdate(r){let t=r.name.toLowerCase();switch(r.op){case`a`:case`s`:let e=r.value;if(typeof e==`string`&&(e=[e]),e.length===0)return;this.maybeSetNormalizedName(r.name,t);let i=r.op===`a`?(this.headers.get(t)||[]).slice():[];i.push(...e),this.headers.set(t,i);break;case`d`:let o=r.value;if(o===void 0)this.headers.delete(t),this.normalizedNames.delete(t);else{let a=Array.isArray(o)?o:[o],s=this.headers.get(t);if(!s)return;s=s.filter(c=>a.indexOf(c)===-1),s.length===0?(this.headers.delete(t),this.normalizedNames.delete(t)):this.headers.set(t,s)}}}addHeaderEntry(r,t){let e=r.toLowerCase();this.maybeSetNormalizedName(r,e),this.headers.has(e)?this.headers.get(e).push(t):this.headers.set(e,[t])}setHeaderEntries(r,t){let e=(Array.isArray(t)?t:[t]).map(o=>o.toString()),i=r.toLowerCase();this.headers.set(i,e),this.maybeSetNormalizedName(r,i)}forEach(r){this.init(),Array.from(this.normalizedNames.keys()).forEach(t=>r(this.normalizedNames.get(t),this.headers.get(t)))}};var Er=class{map=/* @__PURE__ */ new Map;set(r,t){return this.map.set(r,t),this}get(r){return this.map.has(r)||this.map.set(r,r.defaultValue()),this.map.get(r)}delete(r){return this.map.delete(r),this}has(r){return this.map.has(r)}keys(){return this.map.keys()}};var Rr=class{encodeKey(r){return Qa(r)}encodeValue(r){return Qa(r)}decodeKey(r){return decodeURIComponent(r)}decodeValue(r){return decodeURIComponent(r)}};function gd(n,r){let t=/* @__PURE__ */ new Map;return n.length>0&&n.replace(/^\?/,``).split(`&`).forEach(i=>{let o=i.indexOf(`=`),[a,s]=o==-1?[r.decodeKey(i),``]:[r.decodeKey(i.slice(0,o)),r.decodeValue(i.slice(o+1))],c=t.get(a)||[];c.push(s),t.set(a,c)}),t}var bd=/[&+#]/g;function Qa(n){return encodeURI(n).replace(bd,encodeURIComponent)}function Dr(n){return`${n}`}var at$1=class n{map;encoder;updates=null;cloneFrom=null;constructor(r={}){if(this.encoder=r.encoder||new Rr,r.fromString){if(r.fromObject)throw new w(2805,!1);this.map=gd(r.fromString,this.encoder)}else r.fromObject?(this.map=/* @__PURE__ */ new Map,Object.keys(r.fromObject).forEach(t=>{let e=r.fromObject[t],i=Array.isArray(e)?e.map(Dr):[Dr(e)];this.map.set(t,i)})):this.map=null}has(r){return this.init(),this.map.has(r)}get(r){this.init();let t=this.map.get(r);return t?t[0]:null}getAll(r){return this.init(),this.map.get(r)||null}keys(){return this.init(),Array.from(this.map.keys())}append(r,t){return this.clone({param:r,value:t,op:`a`})}appendAll(r){let t=[];return Object.keys(r).forEach(e=>{let i=r[e];Array.isArray(i)?i.forEach(o=>{t.push({param:e,value:o,op:`a`})}):t.push({param:e,value:i,op:`a`})}),this.clone(t)}set(r,t){return this.clone({param:r,value:t,op:`s`})}delete(r,t){return this.clone({param:r,value:t,op:`d`})}toString(){return this.init(),this.keys().map(r=>{let t=this.encoder.encodeKey(r);return this.map.get(r).map(e=>t+`=`+this.encoder.encodeValue(e)).join(`&`)}).filter(r=>r!==``).join(`&`)}clone(r){let t=new n({encoder:this.encoder});return t.cloneFrom=this.cloneFrom||this,t.updates=(this.updates||[]).concat(r),t}init(){if(this.map===null&&(this.map=/* @__PURE__ */ new Map),this.cloneFrom!==null){this.cloneFrom.init();for(let[r,t]of this.cloneFrom.map.entries())this.map.set(r,t);this.updates.forEach(r=>{switch(r.op){case`a`:case`s`:let t=r.op===`a`?(this.map.get(r.param)||[]).slice():[];t.push(Dr(r.value)),this.map.set(r.param,t);break;case`d`:if(r.value!==void 0){let e=(this.map.get(r.param)||[]).slice(),i=e.indexOf(Dr(r.value));i!==-1&&e.splice(i,1),e.length>0?this.map.set(r.param,e):this.map.delete(r.param)}else{this.map.delete(r.param);break}}}),this.cloneFrom=this.updates=null}}};function vd(n){switch(n){case`DELETE`:case`GET`:case`HEAD`:case`OPTIONS`:case`JSONP`:return!1;default:return!0}}function ts(n){return typeof ArrayBuffer<`u`&&n instanceof ArrayBuffer}function es(n){return typeof Blob<`u`&&n instanceof Blob}function ns(n){return typeof FormData<`u`&&n instanceof FormData}function yd(n){return typeof URLSearchParams<`u`&&n instanceof URLSearchParams}var oo=`Content-Type`;var rs=`Accept`;var as=`text/plain`;var ss=`application/json`;var _d=`${ss}, ${as}, */*`;var Se$1=class n{url;body=null;headers;context;reportProgress=!1;reportUploadProgress=!1;reportDownloadProgress=!1;withCredentials=!1;credentials;keepalive=!1;cache;priority;mode;redirect;referrer;integrity;referrerPolicy;responseType=`json`;method;params;urlWithParams;transferCache;timeout;constructor(r,t,e,i){this.url=t,this.method=r.toUpperCase();let o;if(vd(this.method)||i?(this.body=e!==void 0?e:null,o=i):o=e,o){if(this.reportProgress=!!o.reportProgress,this.reportUploadProgress=!!o.reportUploadProgress,this.reportDownloadProgress=!!o.reportDownloadProgress,this.withCredentials=!!o.withCredentials,this.keepalive=!!o.keepalive,o.responseType&&(this.responseType=o.responseType),o.headers&&(this.headers=o.headers),o.context&&(this.context=o.context),o.params&&(this.params=o.params),o.priority&&(this.priority=o.priority),o.cache&&(this.cache=o.cache),o.credentials&&(this.credentials=o.credentials),typeof o.timeout==`number`){if(o.timeout<1||!Number.isInteger(o.timeout))throw new w(2822,``);this.timeout=o.timeout}o.mode&&(this.mode=o.mode),o.redirect&&(this.redirect=o.redirect),o.integrity&&(this.integrity=o.integrity),o.referrer!==void 0&&(this.referrer=o.referrer),o.referrerPolicy&&(this.referrerPolicy=o.referrerPolicy),this.transferCache=o.transferCache}if(this.headers??=new vt,this.context??=new Er,!this.params)this.params=new at$1,this.urlWithParams=t;else{let a=this.params.toString();if(a.length===0)this.urlWithParams=t;else{let s=t,c=``,d=t.indexOf(`#`);d!==-1&&(c=t.substring(d),s=t.substring(0,d));let u=s.indexOf(`?`),h=u===-1?`?`:u<s.length-1?`&`:``;this.urlWithParams=s+h+a+c}}}serializeBody(){return this.body===null?null:typeof this.body==`string`||ts(this.body)||es(this.body)||ns(this.body)||yd(this.body)?this.body:this.body instanceof at$1?this.body.toString():typeof this.body==`object`||typeof this.body==`boolean`||Array.isArray(this.body)?JSON.stringify(this.body):this.body.toString()}detectContentTypeHeader(){return this.body===null||ns(this.body)?null:es(this.body)?this.body.type||null:ts(this.body)?null:typeof this.body==`string`?as:this.body instanceof at$1?`application/x-www-form-urlencoded;charset=UTF-8`:typeof this.body==`object`||typeof this.body==`number`||typeof this.body==`boolean`?ss:null}clone(r={}){let t=r.method||this.method,e=r.url||this.url,i=r.responseType||this.responseType,o=r.keepalive??this.keepalive,a=r.priority||this.priority,s=r.cache||this.cache,c=r.mode||this.mode,d=r.redirect||this.redirect,u=r.credentials||this.credentials,h=r.referrer??this.referrer,m=r.integrity||this.integrity,b=r.referrerPolicy||this.referrerPolicy,w=r.transferCache??this.transferCache,D=r.timeout??this.timeout,E=r.body!==void 0?r.body:this.body,R=r.withCredentials??this.withCredentials,k=r.reportProgress??this.reportProgress,j=r.reportUploadProgress??this.reportUploadProgress,Ct=r.reportDownloadProgress??this.reportDownloadProgress,pt=r.headers||this.headers,K=r.params||this.params,kt=r.context??this.context;return r.setHeaders!==void 0&&(pt=Object.keys(r.setHeaders).reduce((Dt,ft)=>Dt.set(ft,r.setHeaders[ft]),pt)),r.setParams&&(K=Object.keys(r.setParams).reduce((Dt,ft)=>Dt.set(ft,r.setParams[ft]),K)),new n(t,e,E,{params:K,headers:pt,context:kt,reportProgress:k,reportUploadProgress:j,reportDownloadProgress:Ct,responseType:i,withCredentials:R,transferCache:w,keepalive:o,cache:s,priority:a,timeout:D,mode:c,redirect:d,credentials:u,referrer:h,integrity:m,referrerPolicy:b})}};var Xt=(function(n){return n[n.Sent=0]=`Sent`,n[n.UploadProgress=1]=`UploadProgress`,n[n.ResponseHeader=2]=`ResponseHeader`,n[n.DownloadProgress=3]=`DownloadProgress`,n[n.Response=4]=`Response`,n[n.User=5]=`User`,n})(Xt||{});var Ge=class{headers;status;statusText;url;ok;type;redirected;responseType;constructor(r,t=200,e=`OK`){this.headers=r.headers||new vt,this.status=r.status!==void 0?r.status:t,this.statusText=r.statusText||e,this.url=r.url||null,this.redirected=r.redirected,this.responseType=r.responseType,this.ok=this.status>=200&&this.status<300}};var xr=class n extends Ge{constructor(r={}){super(r)}type=Xt.ResponseHeader;clone(r={}){return new n({headers:r.headers||this.headers,status:r.status!==void 0?r.status:this.status,statusText:r.statusText||this.statusText,url:r.url||this.url||void 0})}};var Ye=class n extends Ge{body;constructor(r={}){super(r),this.body=r.body!==void 0?r.body:null}type=Xt.Response;clone(r={}){return new n({body:r.body!==void 0?r.body:this.body,headers:r.headers||this.headers,status:r.status!==void 0?r.status:this.status,statusText:r.statusText||this.statusText,url:r.url||this.url||void 0,redirected:r.redirected??this.redirected,responseType:r.responseType??this.responseType})}};var se=class extends Ge{name=`HttpErrorResponse`;message;error;ok=!1;constructor(r){super(r,0,`Unknown Error`),this.status>=200&&this.status<300?this.message=`Http failure during parsing for ${r.url||`(unknown url)`}`:this.message=`Http failure response for ${r.url||`(unknown url)`}: ${r.status} ${r.statusText}`,this.error=r.error||null}};var Sd=200;var cs=(function(n){return n[n.Continue=100]=`Continue`,n[n.SwitchingProtocols=101]=`SwitchingProtocols`,n[n.Processing=102]=`Processing`,n[n.EarlyHints=103]=`EarlyHints`,n[n.Ok=200]=`Ok`,n[n.Created=201]=`Created`,n[n.Accepted=202]=`Accepted`,n[n.NonAuthoritativeInformation=203]=`NonAuthoritativeInformation`,n[n.NoContent=204]=`NoContent`,n[n.ResetContent=205]=`ResetContent`,n[n.PartialContent=206]=`PartialContent`,n[n.MultiStatus=207]=`MultiStatus`,n[n.AlreadyReported=208]=`AlreadyReported`,n[n.ImUsed=226]=`ImUsed`,n[n.MultipleChoices=300]=`MultipleChoices`,n[n.MovedPermanently=301]=`MovedPermanently`,n[n.Found=302]=`Found`,n[n.SeeOther=303]=`SeeOther`,n[n.NotModified=304]=`NotModified`,n[n.UseProxy=305]=`UseProxy`,n[n.Unused=306]=`Unused`,n[n.TemporaryRedirect=307]=`TemporaryRedirect`,n[n.PermanentRedirect=308]=`PermanentRedirect`,n[n.BadRequest=400]=`BadRequest`,n[n.Unauthorized=401]=`Unauthorized`,n[n.PaymentRequired=402]=`PaymentRequired`,n[n.Forbidden=403]=`Forbidden`,n[n.NotFound=404]=`NotFound`,n[n.MethodNotAllowed=405]=`MethodNotAllowed`,n[n.NotAcceptable=406]=`NotAcceptable`,n[n.ProxyAuthenticationRequired=407]=`ProxyAuthenticationRequired`,n[n.RequestTimeout=408]=`RequestTimeout`,n[n.Conflict=409]=`Conflict`,n[n.Gone=410]=`Gone`,n[n.LengthRequired=411]=`LengthRequired`,n[n.PreconditionFailed=412]=`PreconditionFailed`,n[n.PayloadTooLarge=413]=`PayloadTooLarge`,n[n.UriTooLong=414]=`UriTooLong`,n[n.UnsupportedMediaType=415]=`UnsupportedMediaType`,n[n.RangeNotSatisfiable=416]=`RangeNotSatisfiable`,n[n.ExpectationFailed=417]=`ExpectationFailed`,n[n.ImATeapot=418]=`ImATeapot`,n[n.MisdirectedRequest=421]=`MisdirectedRequest`,n[n.UnprocessableEntity=422]=`UnprocessableEntity`,n[n.Locked=423]=`Locked`,n[n.FailedDependency=424]=`FailedDependency`,n[n.TooEarly=425]=`TooEarly`,n[n.UpgradeRequired=426]=`UpgradeRequired`,n[n.PreconditionRequired=428]=`PreconditionRequired`,n[n.TooManyRequests=429]=`TooManyRequests`,n[n.RequestHeaderFieldsTooLarge=431]=`RequestHeaderFieldsTooLarge`,n[n.UnavailableForLegalReasons=451]=`UnavailableForLegalReasons`,n[n.InternalServerError=500]=`InternalServerError`,n[n.NotImplemented=501]=`NotImplemented`,n[n.BadGateway=502]=`BadGateway`,n[n.ServiceUnavailable=503]=`ServiceUnavailable`,n[n.GatewayTimeout=504]=`GatewayTimeout`,n[n.HttpVersionNotSupported=505]=`HttpVersionNotSupported`,n[n.VariantAlsoNegotiates=506]=`VariantAlsoNegotiates`,n[n.InsufficientStorage=507]=`InsufficientStorage`,n[n.LoopDetected=508]=`LoopDetected`,n[n.NotExtended=510]=`NotExtended`,n[n.NetworkAuthenticationRequired=511]=`NetworkAuthenticationRequired`,n})(cs||{});var wd=/^\)\]\}',?\n/;var ls=new S$1(``,{factory:()=>null});var Ir=(()=>{class n{fetchImpl=v(so,{optional:!0})?.fetch??((...t)=>globalThis.fetch(...t));ngZone=v(Fe$1);destroyRef=v(fe);maxResponseSize=v(ls);handle(t){return new x(e=>{let i=new AbortController,o=!1,a={next:c=>{c.type===Xt.Response&&(o=!0),e.next(c)},error:c=>{o=!0,e.error(c)},complete:()=>{o=!0,e.complete()}};this.doRequest(t,i.signal,a).then(co,c=>a.error(new se({error:c})));let s;return t.timeout&&(s=this.ngZone.runOutsideAngular(()=>setTimeout(()=>{i.signal.aborted||i.abort(new DOMException(`signal timed out`,`TimeoutError`))},t.timeout))),()=>{s!==void 0&&clearTimeout(s),!o&&!i.signal.aborted&&i.abort()}})}async doRequest(t,e,i){let o=this.createRequestInit(t),a;try{let E=this.ngZone.runOutsideAngular(()=>this.fetchImpl(t.urlWithParams,z({signal:e},o)));Cd(E),i.next({type:Xt.Sent}),a=await E}catch(E){i.error(new se({error:E,status:E.status??0,statusText:E.statusText,url:t.urlWithParams,headers:E.headers}));return}let s=new vt(a.headers),c=a.statusText,d=a.url||t.urlWithParams,u=a.status,h=null,m=t.reportProgress||t.reportDownloadProgress;if(m&&i.next(new xr({headers:s,status:u,statusText:c,url:d})),a.body){let E=a.headers.get(oo)??``,R=a.headers.get(`content-length`),k=R!==null?Number(R):NaN;this.maxResponseSize!==null&&Number.isFinite(k)&&k>this.maxResponseSize&&(await a.body.cancel(),is(this.maxResponseSize));let j=[],Ct=a.body.getReader(),pt=0,K,kt,Dt=typeof Zone<`u`&&Zone.current,ft=!1;if(await this.ngZone.runOutsideAngular(async()=>{for(;;){if(this.destroyRef.destroyed){await Ct.cancel(),ft=!0;break}let{done:Et,value:he}=await Ct.read();if(Et)break;if(j.push(he),pt+=he.length,this.maxResponseSize!==null&&pt>this.maxResponseSize&&(await Ct.cancel(),is(this.maxResponseSize)),m){kt=t.responseType===`text`?(kt??``)+(K??=os(E)).decode(he,{stream:!0}):void 0;let Rt=()=>i.next({type:Xt.DownloadProgress,total:Number.isFinite(k)?k:void 0,loaded:pt,partialText:kt});Dt?Dt.run(Rt):Rt()}}}),ft){i.complete();return}let W=this.concatChunks(j,pt);try{h=this.parseBody(t,W,E,u)}catch(Et){i.error(new se({error:Et,headers:new vt(a.headers),status:a.status,statusText:a.statusText,url:a.url||t.urlWithParams}));return}}u===0&&(u=h?Sd:0);let b=u>=200&&u<300,w=a.redirected,D=a.type;b?(i.next(new Ye({body:h,headers:s,status:u,statusText:c,url:d,redirected:w,responseType:D})),i.complete()):i.error(new se({error:h,headers:s,status:u,statusText:c,url:d,redirected:w,responseType:D}))}parseBody(t,e,i,o){switch(t.responseType){case`json`:let a=new TextDecoder().decode(e).replace(wd,``);if(a===``)return null;try{return JSON.parse(a)}catch(s){if(o<200||o>=300)return a;throw s}case`text`:return os(i).decode(e);case`blob`:return new Blob([e],{type:i});case`arraybuffer`:return e.buffer}}createRequestInit(t){if(t.reportUploadProgress)throw new w(2824,!1);let e={},i;if(i=t.credentials,t.withCredentials&&(i=`include`),t.headers.forEach((o,a)=>e[o]=a.join(`,`)),t.headers.has(rs)||(e[rs]=_d),!t.headers.has(oo)){let o=t.detectContentTypeHeader();o!==null&&(e[oo]=o)}return{body:t.serializeBody(),method:t.method,headers:e,credentials:i,keepalive:t.keepalive,cache:t.cache,priority:t.priority,mode:t.mode,redirect:t.redirect,referrer:t.referrer,integrity:t.integrity,referrerPolicy:t.referrerPolicy}}concatChunks(t,e){let i=new Uint8Array(e),o=0;for(let a of t)i.set(a,o),o+=a.length;return i}static ɵfac=function(e){return new(e||n)};static ɵprov=$r$1({token:n,factory:n.ɵfac})}return n})();var so=class{};function co(){}function Cd(n){n.then(co,co)}function is(n){throw new w(-2825,!1)}var Dd=/charset=\s*["']?([^;"'\s]+)["']?/i;function os(n){let r=n.match(Dd);if(r!==null)try{return new TextDecoder(r[1])}catch{}return new TextDecoder}var Ed=new S$1(``,{factory:()=>!0});var Rd=`XSRF-TOKEN`;var ds=new S$1(``,{factory:()=>Rd});var xd=`X-XSRF-TOKEN`;var us=new S$1(``,{factory:()=>xd});var Id=(()=>{class n{cookieName=v(ds);doc=v(mt$1);lastCookieString=``;lastToken=null;parseCount=0;getToken(){let t=this.doc.cookie||``;return t!==this.lastCookieString&&(this.parseCount++,this.lastToken=vn$1(t,this.cookieName),this.lastCookieString=t),this.lastToken}static ɵfac=function(e){return new(e||n)};static ɵprov=$r$1({token:n,factory:n.ɵfac})}return n})();var hs=(()=>{class n{static ɵfac=function(e){return new(e||n)};static ɵprov=ae$1({token:n,factory:function(e){let i=null;return e?i=new(e||n):i=Pe(Id),i},providedIn:`root`})}return n})();function ms(n,r){if(!v(Ed)||n.method===`GET`||n.method===`HEAD`)return r(n);try{let i=v($e).href,{origin:o}=new URL(i),{origin:a}=new URL(n.url,o);if(o!==a)return r(n)}catch{return r(n)}let t=v(hs).getToken(),e=v(us);return t!=null&&!n.headers.has(e)&&(n=n.clone({headers:n.headers.set(e,t)})),r(n)}function Md(n,r){return r(n)}function Ad(n,r,t){return(e,i)=>Yo$1(t,()=>r(e,o=>n(o,i)))}var ps=new S$1(``,{factory:()=>[ms]});var lo=new S$1(``);var fs=new S$1(``,{factory:()=>!0});var uo=(()=>{class n{static ɵfac=function(e){return new(e||n)};static ɵprov=ae$1({token:n,factory:function(e){let i=null;return e?i=new(e||n):i=Pe(Ir),i},providedIn:`root`})}return n})();var Mr=(()=>{class n{backend;injector;chain=null;pendingTasks=v(Sr$1);contributeToStability=v(fs);constructor(t,e){this.backend=t,this.injector=e}handle(t){if(this.chain===null){let i=this.injector.get(Ar,null,{skipSelf:!0}),o=i!==null&&this.backend===i,a=this.injector.get(lo,[],o?{self:!0}:void 0),s=Array.from(/* @__PURE__ */ new Set([...this.injector.get(ps),...a]));this.chain=s.reduceRight((c,d)=>Ad(c,d,this.injector),Md)}let e=this.chain;if(this.contributeToStability){let i=this.pendingTasks.add();return le$1(()=>e(t,o=>this.backend.handle(o))).pipe(Xy(i))}else return le$1(()=>e(t,i=>this.backend.handle(i)))}static ɵfac=function(e){return new(e||n)(Pe(uo),Pe(Ee$1))};static ɵprov=ae$1({token:n,factory:n.ɵfac,providedIn:`root`})}return n})();var Ar=(()=>{class n{static ɵfac=function(e){return new(e||n)};static ɵprov=ae$1({token:n,factory:function(e){let i=null;return e?i=new(e||n):i=Pe(Mr),i},providedIn:`root`})}return n})();function ao(n,r){return z({body:r},n)}var we$1=(()=>{class n{handler;constructor(t){this.handler=t}request(t,e,i={}){let o;if(t instanceof Se$1)o=t;else{let c;i.headers instanceof vt?c=i.headers:c=new vt(i.headers);let d;i.params&&(i.params instanceof at$1?d=i.params:d=new at$1({fromObject:i.params})),o=new Se$1(t,e,i.body!==void 0?i.body:null,{headers:c,context:i.context,params:d,reportProgress:i.reportProgress,reportUploadProgress:i.reportUploadProgress,reportDownloadProgress:i.reportDownloadProgress,responseType:i.responseType||`json`,withCredentials:i.withCredentials,transferCache:i.transferCache,keepalive:i.keepalive,priority:i.priority,cache:i.cache,mode:i.mode,redirect:i.redirect,credentials:i.credentials,referrer:i.referrer,referrerPolicy:i.referrerPolicy,integrity:i.integrity,timeout:i.timeout})}let a=Ay(o).pipe(zy(c=>this.handler.handle(c)));if(t instanceof Se$1||i.observe===`events`)return a;let s=a.pipe(rr(c=>c instanceof Ye));switch(i.observe||`body`){case`body`:switch(o.responseType){case`arraybuffer`:return s.pipe(Ue(c=>{if(c.body!==null&&!(c.body instanceof ArrayBuffer))throw new w(2806,!1);return c.body}));case`blob`:return s.pipe(Ue(c=>{if(c.body!==null&&!(c.body instanceof Blob))throw new w(2807,!1);return c.body}));case`text`:return s.pipe(Ue(c=>{if(c.body!==null&&typeof c.body!=`string`)throw new w(2808,!1);return c.body}));default:return s.pipe(Ue(c=>c.body))}case`response`:return s;default:throw new w(2809,!1)}}delete(t,e={}){return this.request(`DELETE`,t,e)}get(t,e={}){return this.request(`GET`,t,e)}head(t,e={}){return this.request(`HEAD`,t,e)}jsonp(t,e){return this.request(`JSONP`,t,{params:new at$1().append(e,`JSONP_CALLBACK`),observe:`body`,responseType:`json`})}options(t,e={}){return this.request(`OPTIONS`,t,e)}patch(t,e,i={}){return this.request(`PATCH`,t,ao(i,e))}post(t,e,i={}){return this.request(`POST`,t,ao(i,e))}put(t,e,i={}){return this.request(`PUT`,t,ao(i,e))}static ɵfac=function(e){return new(e||n)(Pe(Ar))};static ɵprov=ae$1({token:n,factory:n.ɵfac,providedIn:`root`})}return n})();var ho=(function(n){return n[n.Interceptors=0]=`Interceptors`,n[n.LegacyInterceptors=1]=`LegacyInterceptors`,n[n.CustomXsrfConfiguration=2]=`CustomXsrfConfiguration`,n[n.NoXsrfProtection=3]=`NoXsrfProtection`,n[n.JsonpSupport=4]=`JsonpSupport`,n[n.RequestsMadeViaParent=5]=`RequestsMadeViaParent`,n[n.Fetch=6]=`Fetch`,n[n.Xhr=7]=`Xhr`,n})(ho||{});function Nd(n,r){return{ɵkind:n,ɵproviders:r}}function Td(...n){let r=[we$1,Ir,Mr,{provide:Ar,useExisting:Mr},{provide:uo,useFactory:()=>v(Ir)},{provide:ps,useValue:ms,multi:!0}];for(let t of n)r.push(...t.ɵproviders);return Dr$1(r)}function Od({cookieName:n,headerName:r}){let t=[];return n!==void 0&&t.push({provide:ds,useValue:n}),r!==void 0&&t.push({provide:us,useValue:r}),Nd(ho.CustomXsrfConfiguration,t)}var ys=new S$1(``);var kd=`b`;var Pd=`h`;var Fd=`s`;var Ld=`st`;var Bd=`u`;var Ud=`rt`;var Tr=new S$1(``);var jd=[`GET`,`HEAD`];function _s(n,r){let{isCacheActive:t,filter:e,includePostRequests:i,includeRequestsWithAuthHeaders:o,includeRequestsWithCredentials:a,includeNonCacheableRequests:s}=r,{transferCache:c,method:d}=n;return!(!t||c===!1||d===`POST`&&!i&&!c||d!==`POST`&&!jd.includes(d)||!o&&Vd(n)||!a&&Gd(n)||!s&&($d(n.headers)||Wd(n.cache))||e?.(n)===!1)}function Ss(n,r,t,e,i,o=!1){if(!o&&!_s(n,r))return null;if(e)throw new w(2803,!1);if(!i){let D=n.url;i=ws(n,D)}let a=t.get(i,null);if(!a)return null;let{[kd]:s,[Ud]:c,[Pd]:d,[Fd]:u,[Ld]:h,[Bd]:m}=a,b=s;switch(c){case`arraybuffer`:b=bs(s);break;case`blob`:b=new Blob([bs(s)])}let w$1=new vt(d);return new Ye({body:b,headers:w$1,status:u,statusText:h,url:m})}function zd(n,r){let t=v(Tr);if(!_s(n,t))return r(n);let e=v(Zt$2);v(ys,{optional:!0});let o=n.url,s=Ss(n,t,e,null,ws(n,o),!0);return s?Ay(s):r(n)}function Vd(n){let r=n.headers;return r.has(`authorization`)||r.has(`proxy-authorization`)||r.has(`cookie`)}var Hd=/* @__PURE__ */ new Set([`no-store`,`private`,`no-cache`]);function $d(n){let r=n.getAll(`cache-control`);return r?r.some(t=>t.split(`,`).some(e=>{let i=e.split(`=`,1)[0].trim().toLowerCase();return Hd.has(i)})):!1}function Wd(n){return n===`no-cache`||n===`no-store`}function Gd(n){let{withCredentials:r,credentials:t}=n;return r||t===`include`||t===`same-origin`}function gs(n){let r=new URLSearchParams(n instanceof URLSearchParams?n:n.toString());return r.sort(),r.toString()}function ws(n,r){let{params:t,method:e,responseType:i}=n,o=gs(t),a=n.serializeBody();a instanceof URLSearchParams?a=gs(a):typeof a!=`string`&&(a=``);return Xd([e,i,r,a,o].join(`\0`))}function bs(n){let r=atob(n);return Uint8Array.from(r,e=>e.charCodeAt(0)).buffer}function Cs(n){return[{provide:Tr,useFactory:()=>(Be(`NgHttpTransferCache`),z({isCacheActive:!0},n))},{provide:lo,useValue:zd,multi:!0},{provide:eo$1,multi:!0,useFactory:()=>{let r=v(wt$1),t=v(Tr);return()=>{r.whenStable().then(()=>{t.isCacheActive=!1})}}}]}var Yd=new Uint32Array([1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298]);var vs;function Xd(n){vs??=new TextEncoder;let r=vs.encode(n),t=1779033703,e=3144134277,i=1013904242,o=2773480762,a=1359893119,s=2600822924,c=528734635,d=1541459225,u=r.length*8,h=(r.length+8>>6)+1<<6,m=new Uint8Array(h);m.set(r),m[r.length]=128;let b=new DataView(m.buffer),w=u>>>0,D=u/4294967296>>>0;b.setUint32(h-8,D,!1),b.setUint32(h-4,w,!1);let E=/* @__PURE__ */ new Uint32Array(64);for(let R=0;R<h;R+=64){for(let W=0;W<16;W++)E[W]=b.getUint32(R+W*4,!1);for(let W=16;W<64;W++){let Et=E[W-15],he=((Et>>>7|Et<<25)^(Et>>>18|Et<<14)^Et>>>3)>>>0,Rt=E[W-2],Pi=((Rt>>>17|Rt<<15)^(Rt>>>19|Rt<<13)^Rt>>>10)>>>0;E[W]=E[W-16]+he+E[W-7]+Pi>>>0}let k=t,j=e,Ct=i,pt=o,K=a,kt=s,Dt=c,ft=d;for(let W=0;W<64;W++){let Et=((K>>>6|K<<26)^(K>>>11|K<<21)^(K>>>25|K<<7))>>>0,he=(K&kt^~K&Dt)>>>0,Rt=ft+Et+he+Yd[W]+E[W]>>>0,Il=(((k>>>2|k<<30)^(k>>>13|k<<19)^(k>>>22|k<<10))>>>0)+((k&j^k&Ct^j&Ct)>>>0)>>>0;ft=Dt,Dt=kt,kt=K,K=pt+Rt>>>0,pt=Ct,Ct=j,j=k,k=Rt+Il>>>0}t=t+k>>>0,e=e+j>>>0,i=i+Ct>>>0,o=o+pt>>>0,a=a+K>>>0,s=s+kt>>>0,c=c+Dt>>>0,d=d+ft>>>0}return[t,e,i,o,a,s,c,d].map(R=>R.toString(16).padStart(8,`0`)).join(``)}var po=(()=>{let n=Nr(`json`);return n.arrayBuffer=Nr(`arraybuffer`),n.blob=Nr(`blob`),n.text=Nr(`text`),n})();function Nr(n){return function(t,e){let i=e?.injector??v(se$1),o=i.get(Tr,null,{optional:!0}),a=i.get(Zt$2,null,{optional:!0}),s=i.get(ys,null,{optional:!0}),c=d=>{if(o&&a&&d){let u=Ss(d,o,a,s);if(u)try{let h=u.body,m=e?.parse?e.parse(h):h;return Et({value:m})}catch{}}};return new mo(i,d=>qd(d,t,n),e?.defaultValue,e?.debugName,e?.parse,e?.equal,c)}}function qd(n,r,t){let e=typeof r==`function`?r(n):r;if(e===void 0)return;typeof e==`string`&&(e={url:e});let i=e.headers instanceof vt?e.headers:new vt(e.headers),o=e.params instanceof at$1?e.params:new at$1({fromObject:e.params});return new Se$1(e.method??`GET`,e.url,e.body??null,{headers:i,params:o,reportDownloadProgress:e.reportProgress,withCredentials:e.withCredentials,keepalive:e.keepalive,cache:e.cache,priority:e.priority,mode:e.mode,redirect:e.redirect,responseType:t,context:e.context,transferCache:e.transferCache,credentials:e.credentials,referrer:e.referrer,referrerPolicy:e.referrerPolicy,integrity:e.integrity,timeout:e.timeout})}var mo=class extends Wl$1{client;_headers=Ul({source:this.extRequest,computation:()=>{}});_progress=Ul({source:this.extRequest,computation:()=>{}});_statusCode=Ul({source:this.extRequest,computation:()=>{}});headers=it$2(()=>this.status()===`resolved`||this.status()===`error`?this._headers():void 0);progress=this._progress.asReadonly();statusCode=this._statusCode.asReadonly();constructor(r,t,e,i,o,a,s){super(t,({params:c,abortSignal:d})=>{let u,h=!1,m=()=>{h=!0,u?.unsubscribe()};d.addEventListener(`abort`,m,{once:!0});let b=Et({value:void 0}),w$2,D=new Promise(R=>w$2=R),E=R=>{b.set(R),w$2?.(b),w$2=void 0};return u=this.client.request(c).subscribe({next:R=>{switch(R.type){case Xt.Response:this._headers.set(R.headers),this._statusCode.set(R.status);try{E({value:o?o(R.body):R.body})}catch(k){E({error:ql(k)})}break;case Xt.DownloadProgress:this._progress.set(R)}},error:R=>{R instanceof se&&(this._headers.set(R.headers),this._statusCode.set(R.status)),E({error:R}),d.removeEventListener(`abort`,m)},complete:()=>{w$2&&E({error:new w(-991,!1)}),d.removeEventListener(`abort`,m)}}),h&&u.unsubscribe(),D},e,a,i,r,void 0,s),this.client=r.get(we$1)}set(r){super.set(r),this._headers.set(void 0),this._progress.set(void 0),this._statusCode.set(void 0)}};var Ds=(()=>{class n{_doc;constructor(t){this._doc=t}getTitle(){return this._doc.title}setTitle(t){this._doc.title=t||``}static ɵfac=function(e){return new(e||n)(Pe(mt$1))};static ɵprov=ae$1({token:n,factory:n.ɵfac,providedIn:`root`})}return n})();var Or=(function(n){return n[n.NoHttpTransferCache=0]=`NoHttpTransferCache`,n[n.HttpTransferCacheOptions=1]=`HttpTransferCacheOptions`,n[n.I18nSupport=2]=`I18nSupport`,n[n.EventReplay=3]=`EventReplay`,n[n.IncrementalHydration=4]=`IncrementalHydration`,n[n.NoIncrementalHydration=5]=`NoIncrementalHydration`,n})(Or||{});function Sb(...n){let r=[],t=/* @__PURE__ */ new Set;for(let{ɵproviders:i,ɵkind:o}of n)t.add(o),i.length&&r.push(i);let e=t.has(Or.HttpTransferCacheOptions);return Dr$1([[],[],wj(),t.has(Or.NoHttpTransferCache)||e?[]:Cs({}),t.has(Or.NoIncrementalHydration)?[]:Cj(),r,{provide:Rm$1,useValue:{isActive:!0}},{provide:eo$1,multi:!0,useFactory:()=>{let i=v(wt$1),o=v(Rm$1);return()=>{i.whenStable().then(()=>{o.isActive=!1})}}}])}var Cn$1=(()=>{class n{static ɵfac=function(e){return new(e||n)};static ɵprov=ae$1({token:n,factory:function(e){let i=null;return e?i=new(e||n):i=Pe(Jd),i},providedIn:`root`})}return n})();var Jd=(()=>{class n extends Cn$1{_doc=v(mt$1);sanitize(t,e){if(e==null)return null;switch(t){case J$3.NONE:return e;case J$3.HTML:return Jc$1(e,`HTML`)?Dt(e):wI(this._doc,String(e)).toString();case J$3.STYLE:return Jc$1(e,`Style`)?Dt(e):e;case J$3.SCRIPT:if(Jc$1(e,`Script`))return Dt(e);throw new w(5200,!1);case J$3.URL:return Jc$1(e,`URL`)?Dt(e):Xc$1(String(e));case J$3.RESOURCE_URL:if(Jc$1(e,`ResourceURL`))return Dt(e);throw new w(-5201,!1);default:throw new w(5202,!1)}}bypassSecurityTrustHtml(t){return eI(t)}bypassSecurityTrustStyle(t){return tI(t)}bypassSecurityTrustScript(t){return nI(t)}bypassSecurityTrustUrl(t){return rI(t)}bypassSecurityTrustResourceUrl(t){return oI(t)}static ɵfac=function(e){return new(e||n)};static ɵprov=$r$1({token:n,factory:n.ɵfac})}return n})();var S=`primary`;var Ln=Symbol(`RouteTitle`);var _o=class{params;constructor(r){this.params=r||{}}has(r){return Object.hasOwn(this.params,r)}get(r){if(this.has(r)){let t=this.params[r];return Array.isArray(t)?t[0]:t}return null}getAll(r){if(this.has(r)){let t=this.params[r];return Array.isArray(t)?t:[t]}return[]}get keys(){return Object.keys(this.params)}};function De$1(n){return new _o(n)}function fo(n,r,t){for(let e=0;e<n.length;e++){let i=n[e],o=r[e];if(i[0]===`:`)t[i.substring(1)]=o;else if(i!==o.path)return!1}return!0}function ks(n,r,t){let e=t.path.split(`/`),i=e.indexOf(`**`);if(i===-1){if(e.length>n.length||t.pathMatch===`full`&&(r.hasChildren()||e.length<n.length))return null;let c={},d=n.slice(0,e.length);return fo(e,d,c)?{consumed:d,posParams:c}:null}if(i!==e.lastIndexOf(`**`))return null;let o=e.slice(0,i),a=e.slice(i+1);if(o.length+a.length>n.length||t.pathMatch===`full`&&r.hasChildren()&&t.path!==`**`)return null;let s={};return!fo(o,n.slice(0,o.length),s)||!fo(a,n.slice(n.length-a.length),s)?null:{consumed:n,posParams:s}}function Ur(n){return new Promise((r,t)=>{n.pipe(ev()).subscribe({next:e=>r(e),error:e=>t(e)})})}function eu(n,r){if(n.length!==r.length)return!1;for(let t=0;t<n.length;++t)if(!jt(n[t],r[t]))return!1;return!0}function jt(n,r){let t=n?So(n):void 0,e=r?So(r):void 0;if(!t||!e||t.length!=e.length)return!1;let i;for(let o=0;o<t.length;o++)if(i=t[o],!Ps(n[i],r[i]))return!1;return!0}function So(n){return[...Object.keys(n),...Object.getOwnPropertySymbols(n)]}function Ps(n,r){if(Array.isArray(n)&&Array.isArray(r)){if(n.length!==r.length)return!1;let t=[...n].sort(),e=[...r].sort();return t.every((i,o)=>e[o]===i)}else return n===r}function nu(n){return n.length>0?n[n.length-1]:null}function Bn(n){return Ry(n)?n:Nl$1(n)?Re$1(Promise.resolve(n)):Ay(n)}function Fs(n){return Ry(n)?Ur(n):Promise.resolve(n)}var ru={exact:Us,subset:js};var Ls={exact:iu,subset:ou,ignored:()=>!0};var Bs={paths:`exact`,fragment:`ignored`,matrixParams:`ignored`,queryParams:`exact`};var jr={paths:`subset`,fragment:`ignored`,matrixParams:`ignored`,queryParams:`subset`};function wo(n,r,t){let e=z(z({},jr),t||{});return ru[e.paths](n.root,r.root,e.matrixParams)&&Ls[e.queryParams](n.queryParams,r.queryParams)&&!(e.fragment===`exact`&&n.fragment!==r.fragment)}function iu(n,r){return jt(n,r)}function Us(n,r,t){if(!Ce$1(n.segments,r.segments)||!Fr(n.segments,r.segments,t)||n.numberOfChildren!==r.numberOfChildren)return!1;for(let e in r.children)if(!n.children[e]||!Us(n.children[e],r.children[e],t))return!1;return!0}function ou(n,r){return Object.keys(r).length<=Object.keys(n).length&&Object.keys(r).every(t=>Ps(n[t],r[t]))}function js(n,r,t){return zs(n,r,r.segments,t)}function zs(n,r,t,e){if(n.segments.length>t.length){let i=n.segments.slice(0,t.length);return!(!Ce$1(i,t)||r.hasChildren()||!Fr(i,t,e))}else if(n.segments.length===t.length){if(!Ce$1(n.segments,t)||!Fr(n.segments,t,e))return!1;for(let i in r.children)if(!n.children[i]||!js(n.children[i],r.children[i],e))return!1;return!0}else{let i=t.slice(0,n.segments.length),o=t.slice(n.segments.length);return!Ce$1(n.segments,i)||!Fr(n.segments,i,e)||!n.children[S]?!1:zs(n.children[S],r,o,e)}}function Fr(n,r,t){return r.every((e,i)=>Ls[t](n[i].parameters,e.parameters))}var ht=class{root;queryParams;fragment;_queryParamMap;constructor(r=new O([],{}),t={},e=null){this.root=r,this.queryParams=t,this.fragment=e}get queryParamMap(){return this._queryParamMap??=De$1(this.queryParams),this._queryParamMap}toString(){return lu.serialize(this)}};var O=class{segments;children;parent=null;constructor(r,t){this.segments=r,this.children=t,Object.values(t).forEach(e=>e.parent=this)}hasChildren(){return this.numberOfChildren>0}get numberOfChildren(){return Object.keys(this.children).length}toString(){return Lr(this)}};var ce=class{path;parameters;_parameterMap;constructor(r,t){this.path=r,this.parameters=t}get parameterMap(){return this._parameterMap??=De$1(this.parameters),this._parameterMap}toString(){return Hs(this)}};function au(n,r){return Ce$1(n,r)&&n.every((t,e)=>jt(t.parameters,r[e].parameters))}function Ce$1(n,r){return n.length!==r.length?!1:n.every((t,e)=>t.path===r[e].path)}function su(n,r){let t=[];return Object.entries(n.children).forEach(([e,i])=>{e===S&&(t=t.concat(r(i,e)))}),Object.entries(n.children).forEach(([e,i])=>{e!==S&&(t=t.concat(r(i,e)))}),t}var nn$1=(()=>{class n{static ɵfac=function(e){return new(e||n)};static ɵprov=$r$1({token:n,factory:()=>new le})}return n})();var le=class{parse(r){let t=new Do(r);return new ht(t.parseRootSegment(),t.parseQueryParams(),t.parseFragment())}serialize(r){let t=`/${Xe(r.root,!0)}`;cu(t)&&(t=`/`);let e=mu(r.queryParams),i=typeof r.fragment==`string`?`#${uu(r.fragment)}`:``;return`${t}${e}${i}`}};var Rs=`http://fake`;function cu(n){try{let r=new URL(n,Rs);return r.origin!==Rs||r.pathname.startsWith(`//`)}catch{return!0}}var lu=new le;function Lr(n){return n.segments.map(r=>Hs(r)).join(`/`)}function Xe(n,r){if(!n.hasChildren())return Lr(n);if(r){let t=n.children[S]?Xe(n.children[S],!1):``,e=[];return Object.entries(n.children).forEach(([i,o])=>{i!==S&&e.push(`${i}:${Xe(o,!1)}`)}),e.length>0?`${t}(${e.join(`//`)})`:t}else{if(Object.keys(n.children).length===1&&n.children[S]!=null)return`${Lr(n)}/${Xe(n.children[S],!1)}`;let t=su(n,(e,i)=>i===S?[du(Xe(n.children[S],!1))]:[`${i}:${Xe(e,!1)}`]);return`${Lr(n)}/(${t.join(`//`)})`}}function du(n){return n.replace($s,r=>r.replace(/:/g,`%3A`))}function Vs(n){return encodeURIComponent(n).replace(/%40/g,`@`).replace(/%3A/gi,`:`).replace(/%24/g,`$`).replace(/%2C/gi,`,`)}function kr(n){return Vs(n).replace(/%3B/gi,`;`)}function uu(n){return encodeURI(n)}function Co(n){return Vs(n).replace(/\(/g,`%28`).replace(/\)/g,`%29`).replace(/%26/gi,`&`)}function Br(n){return decodeURIComponent(n)}function xs(n){return Br(n.replace(/\+/g,`%20`))}function Hs(n){return`${Co(n.path)}${hu(n.parameters)}`}function hu(n){return Object.entries(n).map(([r,t])=>`;${Co(r)}=${Co(t)}`).join(``)}function mu(n){let r=Object.entries(n).map(([t,e])=>Array.isArray(e)?e.map(i=>`${kr(t)}=${kr(i)}`).join(`&`):`${kr(t)}=${kr(e)}`).filter(t=>t);return r.length?`?${r.join(`&`)}`:``}var go=1073741824;function zr(n,r,t){Number(r)>=32&&!Object.hasOwn(n,go)&&(n[go]=t,delete n[go]),n[r]=t}var $s=/^[^\/()?;#]+/;function bo(n){let r=n.match($s);return r?r[0]:``}var pu=/^[^\/()?;=#]+/;function fu(n){let r=n.match(pu);return r?r[0]:``}var gu=/^[^=?&#]+/;function bu(n){let r=n.match(gu);return r?r[0]:``}var vu=/^[^&#]+/;function yu(n){let r=n.match(vu);return r?r[0]:``}var Do=class{url;remaining;constructor(r){this.url=r,this.remaining=r}parseRootSegment(){for(;this.consumeOptional(`/`););return this.remaining===``||this.peekStartsWith(`?`)||this.peekStartsWith(`#`)?new O([],{}):new O([],this.parseChildren())}parseQueryParams(){let r={};if(this.consumeOptional(`?`))do this.parseQueryParam(r);while(this.consumeOptional(`&`));return r}parseFragment(){return this.consumeOptional(`#`)?decodeURIComponent(this.remaining):null}parseChildren(r=0){if(r>50)throw new w(4010,!1);if(this.remaining===``)return{};this.consumeOptional(`/`);let t=[];for(this.peekStartsWith(`(`)||t.push(this.parseSegment());this.peekStartsWith(`/`)&&!this.peekStartsWith(`//`)&&!this.peekStartsWith(`/(`);)this.capture(`/`),t.push(this.parseSegment());let e={};this.peekStartsWith(`/(`)&&(this.capture(`/`),e=this.parseParens(!0,r));let i={};return this.peekStartsWith(`(`)&&(i=this.parseParens(!1,r)),(t.length>0||Object.keys(e).length>0)&&(i[S]=new O(t,e)),i}parseSegment(){let r=bo(this.remaining);if(r===``&&this.peekStartsWith(`;`))throw new w(4009,!1);return this.capture(r),new ce(Br(r),this.parseMatrixParams())}parseMatrixParams(){let r={};for(;this.consumeOptional(`;`);)this.parseParam(r);return r}parseParam(r){let t=fu(this.remaining);if(!t)return;this.capture(t);let e=``;if(this.consumeOptional(`=`)){let i=bo(this.remaining);i&&(e=i,this.capture(e))}zr(r,Br(t),Br(e))}parseQueryParam(r){let t=bu(this.remaining);if(!t)return;this.capture(t);let e=``;if(this.consumeOptional(`=`)){let a=yu(this.remaining);a&&(e=a,this.capture(e))}let i=xs(t),o=xs(e);if(Object.hasOwn(r,i)){let a=r[i];Array.isArray(a)||(a=[a],r[i]=a),a.push(o)}else r[i]=o}parseParens(r,t){let e=Object.create(null);for(this.capture(`(`);!this.consumeOptional(`)`)&&this.remaining.length>0;){let i=bo(this.remaining),o=this.remaining[i.length];if(o!==`/`&&o!==`)`&&o!==`;`)throw new w(4010,!1);let a;i.indexOf(`:`)>-1?(a=i.slice(0,i.indexOf(`:`)),this.capture(a),this.capture(`:`)):r&&(a=S);let s=this.parseChildren(t+1),c=Object.keys(s).length===1&&s[S]?s[S]:new O([],s);zr(e,a??S,c),this.consumeOptional(`//`)}return e}peekStartsWith(r){return this.remaining.startsWith(r)}consumeOptional(r){return this.peekStartsWith(r)?(this.remaining=this.remaining.substring(r.length),!0):!1}capture(r){if(!this.consumeOptional(r))throw new w(4011,!1)}};function Ws(n){return n.segments.length>0?new O([],{[S]:n}):n}function Gs(n){let r=Object.create(null);for(let[e,i]of Object.entries(n.children)){let o=Gs(i);if(e===S&&o.segments.length===0&&o.hasChildren())for(let[a,s]of Object.entries(o.children))zr(r,a,s);else(o.segments.length>0||o.hasChildren())&&zr(r,e,o)}return _u(new O(n.segments,r))}function _u(n){if(n.numberOfChildren===1&&n.children[S]){let r=n.children[S];return new O(n.segments.concat(r.segments),r.children)}return n}function de(n){return n instanceof ht}function Ys(n,r,t=null,e=null,i=new le){return qs(Xs(n),r,t,e,i)}function Xs(n){let r;function t(o){let a={};for(let c of o.children){let d=t(c);a[c.outlet]=d}let s=new O(o.url,a);return o===n&&(r=s),s}let i=Ws(t(n.root));return r??i}function qs(n,r,t,e,i){let o=n;for(;o.parent;)o=o.parent;if(r.length===0)return vo(o,o,o,t,e,i);let a=Su(r);if(a.toRoot())return vo(o,o,new O([],{}),t,e,i);let s=wu(a,o,n),c=s.processChildren?En(s.segmentGroup,s.index,a.commands):Zs(s.segmentGroup,s.index,a.commands);return vo(o,s.segmentGroup,c,t,e,i)}function Vr(n){return typeof n==`object`&&n!=null&&!n.outlets&&!n.segmentPath}function Mn$1(n){return typeof n==`object`&&n!=null&&n.outlets}function Is(n,r,t){n||=`ɵ`;let e=new ht;return e.queryParams={[n]:r},t.parse(t.serialize(e)).queryParams[n]}function vo(n,r,t,e,i,o){let a={};for(let[d,u]of Object.entries(e??{}))u!=null&&(a[d]=Array.isArray(u)?u.map(h=>Is(d,h,o)):Is(d,u,o));let s;n===r?s=t:s=Ks(n,r,t);return new ht(Ws(Gs(s)),a,i)}function Ks(n,r,t){let e=Object.create(null);return Object.entries(n.children).forEach(([i,o])=>{o===r?e[i]=t:e[i]=Ks(o,r,t)}),new O(n.segments,e)}var Hr=class{isAbsolute;numberOfDoubleDots;commands;constructor(r,t,e){if(this.isAbsolute=r,this.numberOfDoubleDots=t,this.commands=e,r&&e.length>0&&Vr(e[0]))throw new w(4003,!1);let i=e.find(Mn$1);if(i&&i!==nu(e))throw new w(4004,!1)}toRoot(){return this.isAbsolute&&this.commands.length===1&&this.commands[0]==`/`}};function Su(n){if(typeof n[0]==`string`&&n.length===1&&n[0]===`/`)return new Hr(!0,0,n);let r=0,t=!1,e=n.reduce((i,o,a)=>{if(typeof o==`object`&&o!=null){if(o.outlets){let s={};return Object.entries(o.outlets).forEach(([c,d])=>{s[c]=typeof d==`string`?d.split(`/`):d}),[...i,{outlets:s}]}if(o.segmentPath)return[...i,o.segmentPath]}return typeof o!=`string`?[...i,o]:a===0?(o.split(`/`).forEach((s,c)=>{c==0&&s===`.`||(c==0&&s===``?t=!0:s===`..`?r++:s!=``&&i.push(s))}),i):[...i,o]},[]);return new Hr(t,r,e)}var Ke=class{segmentGroup;processChildren;index;constructor(r,t,e){this.segmentGroup=r,this.processChildren=t,this.index=e}};function wu(n,r,t){if(n.isAbsolute)return new Ke(r,!0,0);if(!t)return new Ke(r,!1,NaN);if(t.parent===null)return new Ke(t,!0,0);let e=Vr(n.commands[0])?0:1;return Cu(t,t.segments.length-1+e,n.numberOfDoubleDots)}function Cu(n,r,t){let e=n,i=r,o=t;for(;o>i;){if(o-=i,e=e.parent,!e)throw new w(4005,!1);i=e.segments.length}return new Ke(e,!1,i-o)}function Du(n){return Mn$1(n[0])?n[0].outlets:{[S]:n}}function Zs(n,r,t){if(n??=new O([],{}),n.segments.length===0&&n.hasChildren())return En(n,r,t);let e=Eu(n,r,t),i=t.slice(e.commandIndex);if(e.match&&e.pathIndex<n.segments.length){let o=new O(n.segments.slice(0,e.pathIndex),{});return o.children[S]=new O(n.segments.slice(e.pathIndex),n.children),En(o,0,i)}else return e.match&&i.length===0?new O(n.segments,{}):e.match&&!n.hasChildren()?Eo(n,r,t):e.match?En(n,0,i):Eo(n,r,t)}function En(n,r,t){if(t.length===0)return new O(n.segments,{});{let e=Du(t),i=Object.create(null);if(Object.keys(e).some(o=>o!==S)&&n.children[S]&&n.numberOfChildren===1&&n.children[S].segments.length===0){let o=En(n.children[S],r,t);return new O(n.segments,o.children)}return Object.entries(e).forEach(([o,a])=>{typeof a==`string`&&(a=[a]),a!==null&&(i[o]=Zs(n.children[o],r,a))}),Object.entries(n.children).forEach(([o,a])=>{e[o]===void 0&&(i[o]=a)}),new O(n.segments,i)}}function Eu(n,r,t){let e=0,i=r,o={match:!1,pathIndex:0,commandIndex:0};for(;i<n.segments.length;){if(e>=t.length)return o;let a=n.segments[i],s=t[e];if(Mn$1(s))break;let c=`${s}`,d=e<t.length-1?t[e+1]:null;if(i>0&&c===void 0)break;if(c&&d&&typeof d==`object`&&d.outlets===void 0){if(!As(c,d,a))return o;e+=2}else{if(!As(c,{},a))return o;e++}i++}return{match:!0,pathIndex:i,commandIndex:e}}function Eo(n,r,t){let e=n.segments.slice(0,r),i=0;for(;i<t.length;){let o=t[i];if(Mn$1(o))return new O(e,Ru(o.outlets));if(i===0&&Vr(t[0])){let c=n.segments[r];e.push(new ce(c.path,Ms(t[0]))),i++;continue}let a=Mn$1(o)?o.outlets[S]:`${o}`,s=i<t.length-1?t[i+1]:null;a&&s&&Vr(s)?(e.push(new ce(a,Ms(s))),i+=2):(e.push(new ce(a,{})),i++)}return new O(e,{})}function Ru(n){let r={};return Object.entries(n).forEach(([t,e])=>{typeof e==`string`&&(e=[e]),e!==null&&(r[t]=Eo(new O([],{}),0,e))}),r}function Ms(n){let r={};return Object.entries(n).forEach(([t,e])=>r[t]=`${e}`),r}function As(n,r,t){return n==t.path&&jt(r,t.parameters)}var $r=class{rootInjector;outlet=null;route=null;children;attachRef=null;get injector(){return this.route?.snapshot._environmentInjector??this.rootInjector}constructor(r){this.rootInjector=r,this.children=new Ee(this.rootInjector)}resetChildren(){this.children=new Ee(this.rootInjector)}};var Ee=(()=>{class n{rootInjector;contexts=/* @__PURE__ */ new Map;constructor(t){this.rootInjector=t}onChildOutletCreated(t,e){let i=this.getOrCreateContext(t);i.outlet=e,this.contexts.set(t,i)}onChildOutletDestroyed(t){let e=this.getContext(t);e&&(e.outlet=null,e.attachRef=null)}onOutletDeactivated(){let t=this.contexts;return this.contexts=/* @__PURE__ */ new Map,t}onOutletReAttached(t){this.contexts=t}getOrCreateContext(t){let e=this.getContext(t);return e||(e=new $r(this.rootInjector),this.contexts.set(t,e)),e}getContext(t){return this.contexts.get(t)||null}static ɵfac=function(e){return new(e||n)(Pe(Ee$1))};static ɵprov=ae$1({token:n,factory:n.ɵfac,providedIn:`root`})}return n})();var Wr=class{_root;constructor(r){this._root=r}get root(){return this._root.value}parent(r){let t=this.pathFromRoot(r);return t.length>1?t[t.length-2]:null}children(r){let t=Ro(r,this._root);return t?t.children.map(e=>e.value):[]}firstChild(r){let t=Ro(r,this._root);return t&&t.children.length>0?t.children[0].value:null}siblings(r){let t=xo(r,this._root);return t.length<2?[]:t[t.length-2].children.map(i=>i.value).filter(i=>i!==r)}pathFromRoot(r){return xo(r,this._root).map(t=>t.value)}};function Ro(n,r){if(n===r.value)return r;for(let t of r.children){let e=Ro(n,t);if(e)return e}return null}function xo(n,r){if(n===r.value)return[r];for(let t of r.children){let e=xo(n,t);if(e.length)return e.unshift(r),e}return[]}var it$1=class{value;children;constructor(r,t){this.value=r,this.children=t}toString(){return`TreeNode(${this.value})`}};function qe(n){let r={};return n&&n.children.forEach(t=>r[t.value.outlet]=t),r}var An=class extends Wr{snapshot;constructor(r,t){super(r),this.snapshot=t,Lo(this,r)}toString(){return this.snapshot.toString()}};function Js(n,r){let t=xu(n,r),e=new Kn$1([new ce(``,{})]),i=new Kn$1({}),o=new Kn$1({}),c=new qt$1(e,i,new Kn$1({}),new Kn$1(``),o,S,n,t.root);return c.snapshot=t.root,new An(new it$1(c,[]),t)}function xu(n,r){return new Nn(``,new it$1(new Je([],{},{},``,{},S,n,null,{},r),[]))}var qt$1=class{urlSubject;paramsSubject;queryParamsSubject;fragmentSubject;dataSubject;outlet;component;snapshot;_futureSnapshot;_routerState;_paramMap;_queryParamMap;title;url;params;queryParams;fragment;data;resources;_localInjector;pending;paramsSignal;queryParamsSignal;paramMapSignal;queryParamMapSignal;fragmentSignal;dataSignal;constructor(r,t,e,i,o,a,s,c){this.urlSubject=r,this.paramsSubject=t,this.queryParamsSubject=e,this.fragmentSubject=i,this.dataSubject=o,this.outlet=a,this.component=s,this._futureSnapshot=c,this.title=this.dataSubject?.pipe(Ue(d=>d[Ln]))??Ay(void 0),this.url=r,this.params=t,this.queryParams=e,this.fragment=i,this.data=o}get routeConfig(){return this._futureSnapshot.routeConfig}get root(){return this._routerState.root}get parent(){return this._routerState.parent(this)}get firstChild(){return this._routerState.firstChild(this)}get children(){return this._routerState.children(this)}get pathFromRoot(){return this._routerState.pathFromRoot(this)}get paramMap(){return this._paramMap??=this.params.pipe(Ue(r=>De$1(r))),this._paramMap}get queryParamMap(){return this._queryParamMap??=this.queryParams.pipe(Ue(r=>De$1(r))),this._queryParamMap}toString(){return this.snapshot?this.snapshot.toString():`Future(${this._futureSnapshot})`}_setPending(r){this._futureSnapshot=r,this.pending?.set(!0)}};var Iu=`always`;function Fo(n,r,t){let e,{routeConfig:i}=n;return r!==null&&(t===`always`||i?.path===``||!r.component&&!r.routeConfig?.loadComponent)?e={params:Object.keys(n.params).length===0?r.params:Object.freeze(z(z({},r.params),n.params)),data:Object.freeze(z(z({},r.data),n.data)),resolve:z(z(z(z({},n.data),r.data),i?.data),n._resolvedData)}:e={params:Object.freeze(z({},n.params)),data:Object.freeze(z({},n.data)),resolve:z(z({},n.data),n._resolvedData??{})},i&&tc(i)&&(e.resolve[Ln]=i.title),e}var Je=class{url;params;queryParams;fragment;data;outlet;component;routeConfig;_resolve;_resolvedData;_routerState;_paramMap;_queryParamMap;_environmentInjector;resources;get title(){return this.data?.[Ln]}constructor(r,t,e,i,o,a,s,c,d,u){this.url=r,this.params=t,this.queryParams=e,this.fragment=i,this.data=o,this.outlet=a,this.component=s,this.routeConfig=c,this._resolve=d,this._environmentInjector=u}get root(){return this._routerState.root}get parent(){return this._routerState.parent(this)}get firstChild(){return this._routerState.firstChild(this)}get children(){return this._routerState.children(this)}get pathFromRoot(){return this._routerState.pathFromRoot(this)}get paramMap(){return this._paramMap??=De$1(this.params),this._paramMap}get queryParamMap(){return this._queryParamMap??=De$1(this.queryParams),this._queryParamMap}toString(){return`Route(url:'${this.url.map(e=>e.toString()).join(`/`)}', path:'${this.routeConfig?this.routeConfig.path:``}')`}};var Nn=class extends Wr{url;constructor(r,t){super(t),this.url=r,Lo(this,t)}toString(){return Qs(this._root)}};function Lo(n,r){r.value._routerState=n,r.children.forEach(t=>Lo(n,t))}function Qs(n){let r=n.children.length>0?` { ${n.children.map(Qs).join(`, `)} } `:``;return`${n.value}${r}`}function yo(n){if(n.snapshot){let r=n.snapshot,t=n._futureSnapshot;n.snapshot=t,jt(r.queryParams,t.queryParams)||n.queryParamsSubject.next(t.queryParams),r.fragment!==t.fragment&&n.fragmentSubject.next(t.fragment),jt(r.params,t.params)||n.paramsSubject.next(t.params),eu(r.url,t.url)||n.urlSubject.next(t.url),jt(r.data,t.data)||n.dataSubject.next(t.data)}else n.snapshot=n._futureSnapshot,n.dataSubject.next(n._futureSnapshot.data)}function Io(n,r){let t=jt(n.params,r.params)&&au(n.url,r.url),e=!n.parent!=!r.parent;return t&&!e&&(!n.parent||Io(n.parent,r.parent))}function tc(n){return typeof n.title==`string`||n.title===null}var ec=new S$1(``);var Bo=(()=>{class n{activated=null;get activatedComponentRef(){return this.activated}_activatedRoute=null;name=S;activateEvents=new Qe$1;deactivateEvents=new Qe$1;attachEvents=new Qe$1;detachEvents=new Qe$1;routerOutletData=Ij();parentContexts=v(Ee);location=v(is$1);changeDetector=v(_j);inputBinder=v(ii,{optional:!0});supportsBindingToComponentInputs=!0;ngOnChanges(t){if(t.name){let{firstChange:e,previousValue:i}=t.name;if(e)return;this.isTrackedInParentContexts(i)&&(this.deactivate(),this.parentContexts.onChildOutletDestroyed(i)),this.initializeOutletWithName()}}ngOnDestroy(){this.isTrackedInParentContexts(this.name)&&this.parentContexts.onChildOutletDestroyed(this.name),this.inputBinder?.unsubscribeFromRouteData(this)}isTrackedInParentContexts(t){return this.parentContexts.getContext(t)?.outlet===this}ngOnInit(){this.initializeOutletWithName()}initializeOutletWithName(){if(this.parentContexts.onChildOutletCreated(this.name,this),this.activated)return;let t=this.parentContexts.getContext(this.name);t?.route&&(t.attachRef?this.attach(t.attachRef,t.route):this.activateWith(t.route,t.injector))}get isActivated(){return!!this.activated}get component(){if(!this.activated)throw new w(4012,!1);return this.activated.instance}get activatedRoute(){if(!this.activated)throw new w(4012,!1);return this._activatedRoute}get activatedRouteData(){return this._activatedRoute?this._activatedRoute.snapshot.data:{}}detach(){if(!this.activated)throw new w(4012,!1);this.location.detach();let t=this.activated;return this.activated=null,this._activatedRoute=null,this.detachEvents.emit(t.instance),t}attach(t,e){this.activated=t,this._activatedRoute=e,this.location.insert(t.hostView),this.inputBinder?.bindActivatedRouteToOutletComponent(this,this.location.injector),this.attachEvents.emit(t.instance)}deactivate(){if(this.activated){let t=this.component;this.inputBinder?.unsubscribeFromRouteData(this),this.activated.destroy(),this.activated=null,this._activatedRoute=null,this.deactivateEvents.emit(t)}}activateWith(t,e){if(this.isActivated)throw new w(4013,!1);this._activatedRoute=t;let i=this.location,a=t.snapshot.component,s=this.parentContexts.getOrCreateContext(this.name).children,c=new Mo(t,s,i.injector,this.routerOutletData);this.activated=i.createComponent(a,{index:i.length,injector:c,environmentInjector:e}),this.changeDetector.markForCheck(),this.inputBinder?.bindActivatedRouteToOutletComponent(this,this.location.injector),this.activateEvents.emit(this.activated.instance)}static ɵfac=function(e){return new(e||n)};static ɵdir=fw({type:n,selectors:[[`router-outlet`]],inputs:{name:`name`,routerOutletData:[1,`routerOutletData`]},outputs:{activateEvents:`activate`,deactivateEvents:`deactivate`,attachEvents:`attach`,detachEvents:`detach`},exportAs:[`outlet`],features:[hE]})}return n})();var Mo=class{route;childContexts;parent;outletData;constructor(r,t,e,i){this.route=r,this.childContexts=t,this.parent=e,this.outletData=i}get(r,t){return r===qt$1?this.route:r===Ee?this.childContexts:r===ec?this.outletData:this.parent.get(r,t)}};var ii=new S$1(``);var Uo=(()=>{class n{static ɵfac=function(e){return new(e||n)};static ɵcmp=aw({type:n,selectors:[[`ng-component`]],exportAs:[`emptyRouterOutlet`],decls:1,vars:0,template:function(e,i){e&1&&Qg(0,`router-outlet`)},dependencies:[Bo],encapsulation:2,changeDetection:1})}return n})();function jo(n){let r=n.children&&n.children.map(jo),t=r?Q$1(z({},n),{children:r}):z({},n);return!t.component&&!t.loadComponent&&(r||t.loadChildren)&&t.outlet&&t.outlet!==S&&(t.component=Uo),t}var Rn=`imperative`;var q=(function(n){return n[n.NavigationStart=0]=`NavigationStart`,n[n.NavigationEnd=1]=`NavigationEnd`,n[n.NavigationCancel=2]=`NavigationCancel`,n[n.NavigationError=3]=`NavigationError`,n[n.RoutesRecognized=4]=`RoutesRecognized`,n[n.ResolveStart=5]=`ResolveStart`,n[n.ResolveEnd=6]=`ResolveEnd`,n[n.GuardsCheckStart=7]=`GuardsCheckStart`,n[n.GuardsCheckEnd=8]=`GuardsCheckEnd`,n[n.RouteConfigLoadStart=9]=`RouteConfigLoadStart`,n[n.RouteConfigLoadEnd=10]=`RouteConfigLoadEnd`,n[n.ChildActivationStart=11]=`ChildActivationStart`,n[n.ChildActivationEnd=12]=`ChildActivationEnd`,n[n.ActivationStart=13]=`ActivationStart`,n[n.ActivationEnd=14]=`ActivationEnd`,n[n.Scroll=15]=`Scroll`,n[n.NavigationSkipped=16]=`NavigationSkipped`,n})(q||{});var mt=class{id;url;constructor(r,t){this.id=r,this.url=t}};var Re=class extends mt{type=q.NavigationStart;navigationTrigger;restoredState;constructor(r,t,e=`imperative`,i=null){super(r,t),this.navigationTrigger=e,this.restoredState=i}toString(){return`NavigationStart(id: ${this.id}, url: '${this.url}')`}};var Tt=class extends mt{urlAfterRedirects;type=q.NavigationEnd;constructor(r,t,e){super(r,t),this.urlAfterRedirects=e}toString(){return`NavigationEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}')`}};var J$2=(function(n){return n[n.Redirect=0]=`Redirect`,n[n.SupersededByNewNavigation=1]=`SupersededByNewNavigation`,n[n.NoDataFromResolver=2]=`NoDataFromResolver`,n[n.GuardRejected=3]=`GuardRejected`,n[n.Aborted=4]=`Aborted`,n})(J$2||{});var Tn$1=(function(n){return n[n.IgnoredSameUrlNavigation=0]=`IgnoredSameUrlNavigation`,n[n.IgnoredByUrlHandlingStrategy=1]=`IgnoredByUrlHandlingStrategy`,n})(Tn$1||{});var yt=class extends mt{reason;code;type=q.NavigationCancel;constructor(r,t,e,i){super(r,t),this.reason=e,this.code=i}toString(){return`NavigationCancel(id: ${this.id}, url: '${this.url}')`}};function nc(n){return n instanceof yt&&(n.code===J$2.Redirect||n.code===J$2.SupersededByNewNavigation)}var Kt=class extends mt{reason;code;type=q.NavigationSkipped;constructor(r,t,e,i){super(r,t),this.reason=e,this.code=i}};var xe=class extends mt{error;target;type=q.NavigationError;constructor(r,t,e,i){super(r,t),this.error=e,this.target=i}toString(){return`NavigationError(id: ${this.id}, url: '${this.url}', error: ${this.error})`}};var On=class extends mt{urlAfterRedirects;state;type=q.RoutesRecognized;constructor(r,t,e,i){super(r,t),this.urlAfterRedirects=e,this.state=i}toString(){return`RoutesRecognized(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}};var Gr=class extends mt{urlAfterRedirects;state;type=q.GuardsCheckStart;constructor(r,t,e,i){super(r,t),this.urlAfterRedirects=e,this.state=i}toString(){return`GuardsCheckStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}};var Yr=class extends mt{urlAfterRedirects;state;shouldActivate;type=q.GuardsCheckEnd;constructor(r,t,e,i,o){super(r,t),this.urlAfterRedirects=e,this.state=i,this.shouldActivate=o}toString(){return`GuardsCheckEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state}, shouldActivate: ${this.shouldActivate})`}};var Xr=class extends mt{urlAfterRedirects;state;type=q.ResolveStart;constructor(r,t,e,i){super(r,t),this.urlAfterRedirects=e,this.state=i}toString(){return`ResolveStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}};var qr=class extends mt{urlAfterRedirects;state;type=q.ResolveEnd;constructor(r,t,e,i){super(r,t),this.urlAfterRedirects=e,this.state=i}toString(){return`ResolveEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}};var Kr=class{route;type=q.RouteConfigLoadStart;constructor(r){this.route=r}toString(){return`RouteConfigLoadStart(path: ${this.route.path})`}};var Zr=class{route;type=q.RouteConfigLoadEnd;constructor(r){this.route=r}toString(){return`RouteConfigLoadEnd(path: ${this.route.path})`}};var Jr=class{snapshot;type=q.ChildActivationStart;constructor(r){this.snapshot=r}toString(){return`ChildActivationStart(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||``}')`}};var Qr=class{snapshot;type=q.ChildActivationEnd;constructor(r){this.snapshot=r}toString(){return`ChildActivationEnd(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||``}')`}};var ti=class{snapshot;type=q.ActivationStart;constructor(r){this.snapshot=r}toString(){return`ActivationStart(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||``}')`}};var ei=class{snapshot;type=q.ActivationEnd;constructor(r){this.snapshot=r}toString(){return`ActivationEnd(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||``}')`}};var Qe=class{};var kn$1=class{};var tn$1=class{url;navigationBehaviorOptions;constructor(r,t){this.url=r,this.navigationBehaviorOptions=t}};function Mu(n){return!(n instanceof Qe)&&!(n instanceof tn$1)&&!(n instanceof kn$1)}function Au(n,r,t){let e=/* @__PURE__ */ new Set;return{newlyCreatedRoutes:e,state:new An(Pn(n,r._root,t?t._root:void 0,e),r)}}function Pn(n,r,t,e){if(t&&n.shouldReuseRoute(r.value,t.value.snapshot)){let i=t.value;i._setPending(r.value);return new it$1(i,Nu(n,r,t,e))}else{if(n.shouldAttach(r.value)){let a=n.retrieve(r.value);if(a!==null){let s=a.route;return s.value._setPending(r.value),s.children=r.children.map(c=>Pn(n,c,void 0,e)),s}}let i=Tu(r.value);i._setPending(r.value),e.add(i);return new it$1(i,r.children.map(a=>Pn(n,a,void 0,e)))}}function Nu(n,r,t,e){return r.children.map(i=>{for(let o of t.children)if(n.shouldReuseRoute(i.value,o.value.snapshot))return Pn(n,i,o,e);return Pn(n,i,void 0,e)})}function Tu(n){return new qt$1(new Kn$1(n.url),new Kn$1(n.params),new Kn$1(n.queryParams),new Kn$1(n.fragment),new Kn$1(n.data),n.outlet,n.component,n)}var ue=class n extends Error{redirectTo;navigationBehaviorOptions;constructor(r,t){super(),this.redirectTo=r,this.navigationBehaviorOptions=t,Object.setPrototypeOf(this,n.prototype)}};var rc=`ngNavigationCancelingError`;function xn$1(n,r){let{redirectTo:t,navigationBehaviorOptions:e}=de(r)?{redirectTo:r,navigationBehaviorOptions:void 0}:r,i=ic(!1,J$2.Redirect);return i.url=t,i.navigationBehaviorOptions=e,i}function ic(n,r){let t=/* @__PURE__ */ new Error(`NavigationCancelingError: ${n||``}`);return t[rc]=!0,t.cancellationCode=r,t}function Ou(n){return oc(n)&&de(n.url)}function oc(n){return!!n&&n[rc]}var Ao=class{routeReuseStrategy;futureState;currState;forwardEvent;inputBindingEnabled;constructor(r,t,e,i,o){this.routeReuseStrategy=r,this.futureState=t,this.currState=e,this.forwardEvent=i,this.inputBindingEnabled=o}activate(r){let t=this.futureState._root,e=this.currState?this.currState._root:null;this.deactivateChildRoutes(t,e,r),yo(this.futureState.root),this.activateChildRoutes(t,e,r)}deactivateChildRoutes(r,t,e){let i=qe(t);r.children.forEach(o=>{let a=o.value.outlet;this.deactivateRoutes(o,i[a],e),delete i[a]}),Object.values(i).forEach(o=>{this.deactivateRouteAndItsChildren(o,e)})}deactivateRoutes(r,t,e){let i=r.value,o=t?t.value:null;if(i===o)if(i.component){let a=e.getContext(i.outlet);a&&this.deactivateChildRoutes(r,t,a.children)}else this.deactivateChildRoutes(r,t,e);else o&&this.deactivateRouteAndItsChildren(t,e)}deactivateRouteAndItsChildren(r,t){r.value.component&&this.routeReuseStrategy.shouldDetach(r.value.snapshot)?this.detachAndStoreRouteSubtree(r,t):this.deactivateRouteAndOutlet(r,t)}detachAndStoreRouteSubtree(r,t){let e=t.getContext(r.value.outlet),i=e&&r.value.component?e.children:t,o=qe(r);for(let a of Object.values(o))this.deactivateRouteAndItsChildren(a,i);if(e&&e.outlet){let a=e.outlet.detach(),s=e.children.contexts;e.resetChildren(),this.routeReuseStrategy.store(r.value.snapshot,{componentRef:a,route:r,contexts:s})}}deactivateRouteAndOutlet(r,t){let e=t.getContext(r.value.outlet),i=e&&r.value.component?e.children:t,o=qe(r);for(let a of Object.values(o))this.deactivateRouteAndItsChildren(a,i);e&&(e.outlet&&(e.outlet.deactivate(),e.children.onOutletDeactivated()),e.attachRef=null,e.route=null),r.value._localInjector?.destroy()}activateChildRoutes(r,t,e){let i=qe(t);r.children.forEach(o=>{this.activateRoutes(o,i[o.value.outlet],e),this.forwardEvent(new ei(o.value.snapshot))}),r.children.length&&this.forwardEvent(new Qr(r.value.snapshot))}activateRoutes(r,t,e){let i=r.value,o=t?t.value:null;if(yo(i),i===o)if(i.component){let a=e.getOrCreateContext(i.outlet);this.activateChildRoutes(r,t,a.children)}else this.activateChildRoutes(r,t,e);else if(i.component){let a=e.getOrCreateContext(i.outlet);if(this.routeReuseStrategy.shouldAttach(i.snapshot)){let s=this.routeReuseStrategy.retrieve(i.snapshot);this.routeReuseStrategy.store(i.snapshot,null),a.children.onOutletReAttached(s.contexts),a.attachRef=s.componentRef,a.route=s.route.value,a.outlet&&a.outlet.attach(s.componentRef,s.route.value),yo(s.route.value),this.activateChildRoutes(r,null,a.children)}else a.attachRef=null,a.route=i,a.outlet&&a.outlet.activateWith(i,a.injector),this.activateChildRoutes(r,null,a.children)}else this.activateChildRoutes(r,null,e)}};var ni=class{path;route;constructor(r){this.path=r,this.route=this.path[this.path.length-1]}};var Ze=class{component;route;constructor(r,t){this.component=r,this.route=t}};function ku(n,r,t){let e=n._root;return Dn(e,r?r._root:null,t,[e.value])}function Pu(n){let r=n.routeConfig?n.routeConfig.canActivateChild:null;return!r||r.length===0?null:{node:n,guards:r}}function rn$1(n,r){let t=Symbol(),e=r.get(n,t);return e===t?typeof n==`function`&&!mv(n)?n:r.get(n):e}function Dn(n,r,t,e,i={canDeactivateChecks:[],canActivateChecks:[]}){let o=qe(r);return n.children.forEach(a=>{Fu(a,o[a.value.outlet],t,e.concat([a.value]),i),delete o[a.value.outlet]}),Object.entries(o).forEach(([a,s])=>In$1(s,t.getContext(a),t,i)),i}function Fu(n,r,t,e,i={canDeactivateChecks:[],canActivateChecks:[]}){let o=n.value,a=r?r.value:null,s=t?t.getContext(n.value.outlet):null;if(a&&o.routeConfig===a.routeConfig){let c=Lu(a,o,o.routeConfig.runGuardsAndResolvers);c?i.canActivateChecks.push(new ni(e)):(o.data=a.data,o._resolvedData=a._resolvedData),o.component?Dn(n,r,s?s.children:null,e,i):Dn(n,r,t,e,i),c&&s&&s.outlet&&s.outlet.isActivated&&i.canDeactivateChecks.push(new Ze(s.outlet.component,a))}else a&&In$1(r,s,t,i),i.canActivateChecks.push(new ni(e)),o.component?Dn(n,null,s?s.children:null,e,i):Dn(n,null,t,e,i);return i}function Lu(n,r,t){if(typeof t==`function`)return Yo$1(r._environmentInjector,()=>t(n,r));switch(t){case`pathParamsChange`:return!Ce$1(n.url,r.url);case`pathParamsOrQueryParamsChange`:return!Ce$1(n.url,r.url)||!jt(n.queryParams,r.queryParams);case`always`:return!0;case`paramsOrQueryParamsChange`:return!Io(n,r)||!jt(n.queryParams,r.queryParams);default:return!Io(n,r)}}function In$1(n,r,t,e){let i=qe(n),o=n.value;Object.entries(i).forEach(([a,s])=>{o.component?r?In$1(s,r.children.getContext(a),r.children,e):In$1(s,null,null,e):In$1(s,t?t.getContext(a):null,t,e)}),o.component?r&&r.outlet&&r.outlet.isActivated?e.canDeactivateChecks.push(new Ze(r.outlet.component,o)):e.canDeactivateChecks.push(new Ze(null,o)):e.canDeactivateChecks.push(new Ze(null,o))}function Un(n){return typeof n==`function`}function Bu(n){return typeof n==`boolean`}function Uu(n){return n&&Un(n.canLoad)}function ju(n){return n&&Un(n.canActivate)}function zu(n){return n&&Un(n.canActivateChild)}function Vu(n){return n&&Un(n.canDeactivate)}function Hu(n){return n&&Un(n.canMatch)}function ac(n){return n instanceof bt||n?.name===`EmptyError`}var Pr=Symbol(`INITIAL_VALUE`);function en$1(){return sv(n=>By(n.map(r=>r.pipe(gn$1(1),ku$1(t=>{if(t instanceof ue)return Ay(t);throw t}),iv(Pr)))).pipe(Ue(r=>{for(let t of r)if(t!==!0){if(t===Pr)return Pr;if(t===!1||$u(t))return t}return!0}),rr(r=>r!==Pr),gn$1(1)))}function $u(n){return de(n)||n instanceof ue}function sc(n){return new x(r=>{if(n.aborted){r.next(),r.complete();return}let t=()=>{r.next(),r.complete()};return n.addEventListener(`abort`,t),()=>n.removeEventListener(`abort`,t)})}function cc(n){return av(sc(n))}function Wu(n){return $e$1(r=>{let{targetSnapshot:t,currentSnapshot:e,guards:{canActivateChecks:i,canDeactivateChecks:o}}=r;return o.length===0&&i.length===0?Ay(Q$1(z({},r),{guardsResult:!0})):Gu(o,t,e).pipe($e$1(a=>a&&Bu(a)?Yu(t,i,n):Ay(a)),Ue(a=>Q$1(z({},r),{guardsResult:a})))})}function Gu(n,r,t){return Re$1(n).pipe($e$1(e=>Ju(e.component,e.route,t,r)),ev(e=>e!==!0,!0))}function Yu(n,r,t){return Re$1(r).pipe(zy(e=>hn$1(qu(e.route.parent,t),Xu(e.route,t),Zu(n,e.path),Ku(n,e.route))),ev(e=>e!==!0,!0))}function Xu(n,r){return n!==null&&r&&r(new ti(n)),Ay(!0)}function qu(n,r){return n!==null&&r&&r(new Jr(n)),Ay(!0)}function Ku(n,r){let t=r.routeConfig?r.routeConfig.canActivate:null;if(!t||t.length===0)return Ay(!0);let e=t.map(i=>$y(()=>{let o=r._environmentInjector,a=rn$1(i,o);return Bn(ju(a)?a.canActivate(r,n):Yo$1(o,()=>a(r,n))).pipe(ev())}));return Ay(e).pipe(en$1())}function Zu(n,r){let t=r[r.length-1],i=r.slice(0,r.length-1).reverse().map(o=>Pu(o)).filter(o=>o!==null).map(o=>$y(()=>{let a=o.guards.map(s=>{let c=o.node._environmentInjector,d=rn$1(s,c);return Bn(zu(d)?d.canActivateChild(t,n):Yo$1(c,()=>d(t,n))).pipe(ev())});return Ay(a).pipe(en$1())}));return Ay(i).pipe(en$1())}function Ju(n,r,t,e){let i=r&&r.routeConfig?r.routeConfig.canDeactivate:null;if(!i||i.length===0)return Ay(!0);let o=i.map(a=>{let s=r._environmentInjector,c=rn$1(a,s);return zo(()=>Vu(c)?c.canDeactivate(n,r,t,e):Yo$1(s,()=>c(n,r,t,e))).pipe(ev())});return Ay(o).pipe(en$1())}function Qu(n,r,t,e,i){let o=r.canLoad;if(o===void 0||o.length===0)return Ay(!0);let a=o.map(s=>{let c=rn$1(s,n),d=zo(()=>Uu(c)?c.canLoad(r,t):Yo$1(n,()=>c(r,t)));return i?d.pipe(cc(i)):d});return Ay(a).pipe(en$1(),lc(e))}function zo(n){try{return Bn(n())}catch(r){return new x(t=>t.error(r))}}function lc(n){return Iy(ju$1(r=>{if(typeof r!=`boolean`)throw xn$1(n,r)}),Ue(r=>r===!0))}function th(n,r,t,e,i,o){let a=r.canMatch;if(!a||a.length===0)return Ay(!0);let s=a.map(c=>{let d=rn$1(c,n);return zo(()=>Hu(d)?d.canMatch(r,t,i):Yo$1(n,()=>d(r,t,i))).pipe(cc(o))});return Ay(s).pipe(en$1(),lc(e))}var Ut=class n extends Error{name=`NoMatch`;segmentGroup;constructor(r){super(),this.segmentGroup=r||null,Object.setPrototypeOf(this,n.prototype)}};var Fn=class n extends Error{urlTree;name=`AbsoluteRedirect`;constructor(r){super(),this.urlTree=r,Object.setPrototypeOf(this,n.prototype)}};function eh(n){throw new w(4e3,!1)}function nh(n){throw ic(!1,J$2.GuardRejected)}var No=class{urlSerializer;urlTree;constructor(r,t){this.urlSerializer=r,this.urlTree=t}async lineralizeSegments(r,t){let e=[],i=t.root;for(;;){if(e=e.concat(i.segments),i.numberOfChildren===0)return e;if(i.numberOfChildren>1||!i.children[S])throw eh(`${r.redirectTo}`);i=i.children[S]}}async applyRedirectCommands(r,t,e,i,o){let a=await rh(t,i,o);if(a instanceof ht)throw new Fn(a);let s=this.applyRedirectCreateUrlTree(a,this.urlSerializer.parse(a),r,e);if(a[0]===`/`)throw new Fn(s);return s}applyRedirectCreateUrlTree(r,t,e,i){return new ht(this.createSegmentGroup(r,t.root,e,i),this.createQueryParams(t.queryParams,this.urlTree.queryParams),t.fragment)}createQueryParams(r,t){let e={};return Object.entries(r).forEach(([i,o])=>{if(typeof o==`string`&&o[0]===`:`){let s=o.substring(1);e[i]=t[s]}else e[i]=o}),e}createSegmentGroup(r,t,e,i){let o=this.createSegments(r,t.segments,e,i),a=Object.create(null);return Object.entries(t.children).forEach(([s,c])=>{a[s]=this.createSegmentGroup(r,c,e,i)}),new O(o,a)}createSegments(r,t,e,i){return t.map(o=>o.path[0]===`:`?this.findPosParam(r,o,i):this.findOrReturn(o,e))}findPosParam(r,t,e){let i=e[t.path.substring(1)];if(!i)throw new w(4001,!1);return i}findOrReturn(r,t){let e=0;for(let i of t){if(i.path===r.path)return t.splice(e),i;e++}return r}};function rh(n,r,t){if(typeof n==`string`)return Promise.resolve(n);let e=n;return Ur(Bn(Yo$1(t,()=>e(r))))}function ih(n,r){return n.providers&&!n._injector&&(n._injector=Sl$1(n.providers,r,`Route: ${n.path}`)),n._injector??r}function zt$1(n){return n.outlet||S}function oh(n,r){let t=n.filter(e=>zt$1(e)===r);return t.push(...n.filter(e=>zt$1(e)!==r)),t}var To={matched:!1,consumedSegments:[],remainingSegments:[],parameters:{},positionalParamSegments:{}};function dc(n){return{routeConfig:n.routeConfig,url:n.url,params:n.params,queryParams:n.queryParams,fragment:n.fragment,data:n.data,outlet:n.outlet,title:n.title,paramMap:n.paramMap,queryParamMap:n.queryParamMap}}function ah(n,r,t,e,i,o,a){let s=uc(n,r,t);if(!s.matched)return Ay(s);let c=dc(o(s));return e=ih(r,e),th(e,r,t,i,c,a).pipe(Ue(d=>d===!0?s:z({},To)))}function uc(n,r,t){if(r.path===``)return r.pathMatch===`full`&&(n.hasChildren()||t.length>0)?z({},To):{matched:!0,consumedSegments:[],remainingSegments:t,parameters:{},positionalParamSegments:{}};let i=(r.matcher||ks)(t,n,r);if(!i)return z({},To);let o={};Object.entries(i.posParams??{}).forEach(([s,c])=>{o[s]=c.path});let a=i.consumed.length>0?z(z({},o),i.consumed[i.consumed.length-1].parameters):o;return{matched:!0,consumedSegments:i.consumed,remainingSegments:t.slice(i.consumed.length),parameters:a,positionalParamSegments:i.posParams??{}}}function Ns(n,r,t,e){return t.length>0&&lh(n,t,e)?{segmentGroup:new O(r,ch(e,new O(t,n.children))),slicedSegments:[]}:t.length===0&&dh(n,t,e)?{segmentGroup:new O(n.segments,sh(n,t,e,n.children)),slicedSegments:t}:{segmentGroup:new O(n.segments,n.children),slicedSegments:t}}function sh(n,r,t,e){let i={};for(let o of t)if(oi(n,r,o)&&!e[zt$1(o)]){let a=new O([],{});i[zt$1(o)]=a}return z(z({},e),i)}function ch(n,r){let t={};t[S]=r;for(let e of n)if(e.path===``&&zt$1(e)!==S){let i=new O([],{});t[zt$1(e)]=i}return t}function lh(n,r,t){return t.some(e=>oi(n,r,e)&&zt$1(e)!==S)}function dh(n,r,t){return t.some(e=>oi(n,r,e))}function oi(n,r,t){return(n.hasChildren()||r.length>0)&&t.pathMatch===`full`?!1:t.path===``}function uh(n,r,t){return r.length===0&&!n.hasChildren()}var Oo=class{};async function hh(n,r,t,e,i,o,a,s){return new ko(n,r,t,e,i,a,o,s).recognize()}var mh=31;var ko=class{injector;configLoader;rootComponentType;config;urlTree;paramsInheritanceStrategy;urlSerializer;abortSignal;applyRedirects;absoluteRedirectCount=0;allowRedirects=!0;queryParams;constructor(r,t,e,i,o,a,s,c){this.injector=r,this.configLoader=t,this.rootComponentType=e,this.config=i,this.urlTree=o,this.paramsInheritanceStrategy=a,this.urlSerializer=s,this.abortSignal=c,this.applyRedirects=new No(this.urlSerializer,this.urlTree),this.queryParams=Object.freeze(z({},this.urlTree.queryParams))}noMatchError(r){return new w(4002,`'${r.segmentGroup}'`)}async recognize(){let r=Ns(this.urlTree.root,[],[],this.config).segmentGroup,{children:t,rootSnapshot:e}=await this.match(r),o=new Nn(``,new it$1(e,t)),a=Ys(e,[],this.urlTree.queryParams,this.urlTree.fragment);return a.queryParams=this.urlTree.queryParams,o.url=this.urlSerializer.serialize(a),{state:o,tree:a}}async match(r){let t=new Je([],Object.freeze({}),this.queryParams,this.urlTree.fragment,Object.freeze({}),S,this.rootComponentType,null,{},this.injector);try{return{children:await this.processSegmentGroup(this.injector,this.config,r,S,t),rootSnapshot:t}}catch(e){if(e instanceof Fn)return this.absoluteRedirectCount++,this.absoluteRedirectCount>mh&&(this.allowRedirects=!1),this.urlTree=e.urlTree,this.queryParams=Object.freeze(z({},this.urlTree.queryParams)),this.match(e.urlTree.root);throw e instanceof Ut?this.noMatchError(e):e}}async processSegmentGroup(r,t,e,i,o){if(e.segments.length===0&&e.hasChildren())return this.processChildren(r,t,e,o);let a=await this.processSegment(r,t,e,e.segments,i,!0,o);return a instanceof it$1?[a]:[]}async processChildren(r,t,e,i){let o=[];for(let c of Object.keys(e.children))c===`primary`?o.unshift(c):o.push(c);let a=[];for(let c of o){let d=e.children[c],u=oh(t,c),h=await this.processSegment(r,u,d,d.segments,c,!0,i);h instanceof it$1&&a.push(h)}let s=hc(a);return ph(s),s}async processSegment(r,t,e,i,o,a,s){for(let c of t)try{return await this.processSegmentAgainstRoute(c._injector??r,t,c,e,i,o,a,s)}catch(d){if(d instanceof Ut||ac(d))continue;throw d}if(uh(e,i))return new Oo;throw new Ut(e)}async processSegmentAgainstRoute(r,t,e,i,o,a,s,c){if(zt$1(e)!==a&&(a===S||!oi(i,o,e)||!e.children?.length&&!e.loadChildren||o.length===0&&!i.hasChildren()))throw new Ut(i);if(e.redirectTo===void 0)return this.matchSegmentAgainstRoute(r,i,e,o,a,c);if(this.allowRedirects&&s)return this.expandSegmentAgainstRouteUsingRedirect(r,i,t,e,o,a,c);throw new Ut(i)}async expandSegmentAgainstRouteUsingRedirect(r,t,e,i,o,a,s){let{matched:c,parameters:d,consumedSegments:u,positionalParamSegments:h,remainingSegments:m}=uc(t,i,o);if(!c)throw new Ut(t);let b=this.createSnapshot(r,i,o,d,s);if(this.abortSignal.aborted)throw new Error(this.abortSignal.reason);let w=await this.applyRedirects.applyRedirectCommands(u,i.redirectTo,h,dc(b),r),D=await this.applyRedirects.lineralizeSegments(i,w);return this.processSegment(r,e,t,D.concat(m),a,!1,s)}createSnapshot(r,t,e,i,o){let a=new Je(e,i,this.queryParams,this.urlTree.fragment,bh(t),zt$1(t),t.component??t._loadedComponent??null,t,vh(t),r),s=Fo(a,o,this.paramsInheritanceStrategy);return a.params=s.params,a.data=s.data,a}async matchSegmentAgainstRoute(r,t,e,i,o,a){if(this.abortSignal.aborted)throw new Error(this.abortSignal.reason);let s=j=>this.createSnapshot(r,e,j.consumedSegments,j.parameters,a),c=await Ur(ah(t,e,i,r,this.urlSerializer,s,this.abortSignal));if(e.path===`**`&&(t.children={}),!c?.matched)throw new Ut(t);r=e._injector??r;let{routes:d}=await this.getChildConfig(r,e,i),u=e._loadedInjector??r,{parameters:h,consumedSegments:m,remainingSegments:b}=c,w=this.createSnapshot(r,e,m,h,a),D=zt$1(e)===o,{segmentGroup:E,slicedSegments:R}=D?Ns(t,m,b,d):{segmentGroup:t,slicedSegments:b};if(D&&R.length===0&&E.hasChildren())return new it$1(w,await this.processChildren(u,d,E,w));if(D&&d.length===0&&R.length===0)return new it$1(w,[]);let k=await this.processSegment(u,d,E,R,D?S:o,!0,w);if(!D&&!(k instanceof it$1))throw new Ut(t);return new it$1(w,k instanceof it$1?[k]:[])}async getChildConfig(r,t,e){if(t.children)return{routes:t.children,injector:r};if(t.loadChildren){if(t._loadedRoutes!==void 0){let o=t._loadedNgModuleFactory;return o&&!t._loadedInjector&&(t._loadedInjector=o.create(r).injector),{routes:t._loadedRoutes,injector:t._loadedInjector}}if(this.abortSignal.aborted)throw new Error(this.abortSignal.reason);if(await Ur(Qu(r,t,e,this.urlSerializer,this.abortSignal))){let o=await this.configLoader.loadChildren(r,t);return t._loadedRoutes=o.routes,t._loadedInjector=o.injector,t._loadedNgModuleFactory=o.factory,o}throw nh(t)}return{routes:[],injector:r}}};function ph(n){n.sort((r,t)=>r.value.outlet===S?-1:t.value.outlet===S?1:r.value.outlet.localeCompare(t.value.outlet))}function fh(n){let r=n.value.routeConfig;return r&&r.path===``}function hc(n){let r=[],t=/* @__PURE__ */ new Set;for(let i of n){if(!fh(i)){r.push(i);continue}let o=r.find(a=>i.value.routeConfig===a.value.routeConfig);o!==void 0?(o.children.push(...i.children),t.add(o)):r.push(i)}for(let i of t){let o=hc(i.children);r.push(new it$1(i.value,o))}let e=r.filter(i=>!t.has(i));return gh(e),e}function gh(n){let r=Object.create(null);n.forEach(t=>{let e=r[t.value.outlet];if(e){e.url.map(a=>a.toString()).join(`/`);t.value.url.map(a=>a.toString()).join(`/`);throw new w(4006,!1)}r[t.value.outlet]=t.value})}function bh(n){return n.data||{}}function vh(n){return n.resolve||{}}function yh(n,r,t,e,i,o,a){return $e$1(async s=>{let{state:c,tree:d}=await hh(n,r,t,e,s.extractedUrl,i,o,a);return Q$1(z({},s),{targetSnapshot:c,urlAfterRedirects:d})})}function _h(n){return $e$1(r=>{let{targetSnapshot:t,guards:{canActivateChecks:e}}=r;if(!e.length)return Ay(r);let i=new Set(e.map(s=>s.route)),o=/* @__PURE__ */ new Set;for(let s of i)if(!o.has(s))for(let c of mc(s))o.add(c);let a=0;return Re$1(o).pipe(zy(s=>i.has(s)?Sh(s,t,n):(s.data=Fo(s,s.parent,n).resolve,Ay(void 0))),ju$1(()=>a++),tv(1),$e$1(s=>a===o.size?Ay(r):At))})}function mc(n){return[n,...n.children.map(t=>mc(t)).flat()]}function Sh(n,r,t){let e=n.routeConfig,i=n._resolve;return e?.title!==void 0&&!tc(e)&&(i[Ln]=e.title),$y(()=>(n.data=Fo(n,n.parent,t).resolve,wh(i,n,r).pipe(Ue(o=>(n._resolvedData=o,n.data=z(z({},n.data),o),null)))))}function wh(n,r,t){let e=So(n);if(e.length===0)return Ay({});let i={};return Re$1(e).pipe($e$1(o=>Ch(n[o],r,t).pipe(ev(),ju$1(a=>{if(a instanceof ue)throw xn$1(new le,a);i[o]=a}))),tv(1),Ue(()=>i),ku$1(o=>ac(o)?At:Oy(o)))}function Ch(n,r,t){let e=r._environmentInjector,i=rn$1(n,e);return Bn(i.resolve?i.resolve(r,t):Yo$1(e,()=>i(r,t)))}var pc=new S$1(``);function Po(n){return sv(r=>{let t=n(r);return t?Re$1(t).pipe(Ue(()=>r)):Ay(r)})}var Vo=(()=>{class n{buildTitle(t){let e,i=t.root;for(;i!==void 0;)e=this.getResolvedTitleForRoute(i)??e,i=i.children.find(o=>o.outlet===S);return e}getResolvedTitleForRoute(t){return t.data[Ln]}static ɵfac=function(e){return new(e||n)};static ɵprov=$r$1({token:n,factory:()=>v(fc)})}return n})();var fc=(()=>{class n extends Vo{title;constructor(t){super(),this.title=t}updateTitle(t){let e=this.buildTitle(t);e!==void 0&&this.title.setTitle(e)}static ɵfac=function(e){return new(e||n)(Pe(Ds))};static ɵprov=ae$1({token:n,factory:n.ɵfac,providedIn:`root`})}return n})();var on$1=new S$1(``,{factory:()=>({})});var jn=new S$1(``);var Ho=(()=>{class n{componentLoaders=/* @__PURE__ */ new WeakMap;childrenLoaders=/* @__PURE__ */ new WeakMap;onLoadStartListener;onLoadEndListener;compiler=v(ub);async loadComponent(t,e){if(this.componentLoaders.get(e))return this.componentLoaders.get(e);if(e._loadedComponent)return Promise.resolve(e._loadedComponent);this.onLoadStartListener&&this.onLoadStartListener(e);let i=(async()=>{try{let o=await Fs(Yo$1(t,()=>e.loadComponent())),a=await bc(vj(o));return this.onLoadEndListener&&this.onLoadEndListener(e),e._loadedComponent=a,a}finally{this.componentLoaders.delete(e)}})();return this.componentLoaders.set(e,i),i}loadChildren(t,e){if(this.childrenLoaders.get(e))return this.childrenLoaders.get(e);if(e._loadedRoutes)return Promise.resolve({routes:e._loadedRoutes,injector:e._loadedInjector});this.onLoadStartListener&&this.onLoadStartListener(e);let i=(async()=>{try{let o=await gc(e,this.compiler,t,this.onLoadEndListener);return e._loadedRoutes=o.routes,e._loadedInjector=o.injector,e._loadedNgModuleFactory=o.factory,o}finally{this.childrenLoaders.delete(e)}})();return this.childrenLoaders.set(e,i),i}static ɵfac=function(e){return new(e||n)};static ɵprov=$r$1({token:n,factory:n.ɵfac})}return n})();async function gc(n,r,t,e){let i=await Fs(Yo$1(t,()=>n.loadChildren())),o=await bc(vj(i)),a;o instanceof Mg||Array.isArray(o)?a=o:a=await r.compileModuleAsync(o),e&&e(n);let s,c,u;return Array.isArray(a)?c=a:(s=a.create(t).injector,u=a,c=s.get(jn,[],{optional:!0,self:!0}).flat()),{routes:c.map(jo),injector:s,factory:u}}async function bc(n){return n}var ai=(()=>{class n{static ɵfac=function(e){return new(e||n)};static ɵprov=$r$1({token:n,factory:()=>v(Dh)})}return n})();var Dh=(()=>{class n{shouldProcessUrl(t){return!0}extract(t){return t}merge(t,e){return t}static ɵfac=function(e){return new(e||n)};static ɵprov=$r$1({token:n,factory:n.ɵfac})}return n})();var vc=new S$1(``);var Eh=()=>{};var yc=new S$1(``);var _c=(()=>{class n{currentNavigation=Et(null,{equal:()=>!1});currentTransition=null;lastSuccessfulNavigation=Et(null);events=new ee;transitionAbortWithErrorSubject=new ee;configLoader=v(Ho);environmentInjector=v(Ee$1);destroyRef=v(fe);urlSerializer=v(nn$1);rootContexts=v(Ee);location=v(ae);inputBindingEnabled=v(ii,{optional:!0})!==null;titleStrategy=v(Vo);options=v(on$1,{optional:!0})||{};paramsInheritanceStrategy=this.options.paramsInheritanceStrategy||Iu;urlHandlingStrategy=v(ai);createViewTransition=v(vc,{optional:!0});navigationErrorHandler=v(yc,{optional:!0});routerResourcesFeature=v(pc,{optional:!0});navigationId=0;get hasRequestedNavigation(){return this.navigationId!==0}transitions;afterPreactivation=()=>Ay(void 0);rootComponentType=null;destroyed=!1;constructor(){let t=i=>this.events.next(new Kr(i)),e=i=>this.events.next(new Zr(i));this.configLoader.onLoadEndListener=e,this.configLoader.onLoadStartListener=t,this.destroyRef.onDestroy(()=>{this.destroyed=!0})}complete(){this.transitions?.complete()}handleNavigationRequest(t){let e=++this.navigationId;le$1(()=>{this.transitions?.next(Q$1(z({},t),{extractedUrl:this.urlHandlingStrategy.extract(t.rawUrl),targetSnapshot:null,targetRouterState:null,guards:{canActivateChecks:[],canDeactivateChecks:[]},guardsResult:null,id:e,routesRecognizeHandler:{},beforeActivateHandler:{}}))})}setupNavigations(t){return this.transitions=new Kn$1(null),this.transitions.pipe(rr(e=>e!==null),sv(e=>{let i=!0,o=!1,a=new AbortController,s=()=>!o&&this.currentTransition?.id===e.id;return Ay(e).pipe(sv(c=>{if(this.navigationId>e.id)return this.cancelNavigationTransition(e,``,J$2.SupersededByNewNavigation),At;this.currentTransition=e;let d=this.lastSuccessfulNavigation();this.currentNavigation.set({id:c.id,initialUrl:c.rawUrl,extractedUrl:c.extractedUrl,targetBrowserUrl:typeof c.extras.browserUrl==`string`?this.urlSerializer.parse(c.extras.browserUrl):c.extras.browserUrl,trigger:c.source,extras:c.extras,previousNavigation:d?Q$1(z({},d),{previousNavigation:null}):null,abort:()=>a.abort(),routesRecognizeHandler:c.routesRecognizeHandler,beforeActivateHandler:c.beforeActivateHandler});let u=!t.navigated||this.isUpdatingInternalState()||this.isUpdatedBrowserUrl(),h=c.extras.onSameUrlNavigation??t.onSameUrlNavigation;if(!u&&h!==`reload`)return this.events.next(new Kt(c.id,this.urlSerializer.serialize(c.rawUrl),``,Tn$1.IgnoredSameUrlNavigation)),c.resolve(!1),At;if(this.urlHandlingStrategy.shouldProcessUrl(c.rawUrl))return Ay(c).pipe(sv(m=>(this.events.next(new Re(m.id,this.urlSerializer.serialize(m.extractedUrl),m.source,m.restoredState)),m.id!==this.navigationId?At:Promise.resolve(m))),yh(this.environmentInjector,this.configLoader,this.rootComponentType,t.config,this.urlSerializer,this.paramsInheritanceStrategy,a.signal),ju$1(m=>{e.targetSnapshot=m.targetSnapshot,e.urlAfterRedirects=m.urlAfterRedirects,this.currentNavigation.update(b=>(b.finalUrl=m.urlAfterRedirects,b)),this.events.next(new kn$1)}),sv(m=>Re$1(e.routesRecognizeHandler.deferredHandle??Ay(void 0)).pipe(Ue(()=>m))),ju$1(()=>{let m=new On(c.id,this.urlSerializer.serialize(c.extractedUrl),this.urlSerializer.serialize(c.urlAfterRedirects),c.targetSnapshot);this.events.next(m)}));if(u&&this.urlHandlingStrategy.shouldProcessUrl(c.currentRawUrl)){let{id:m,extractedUrl:b,source:w,restoredState:D,extras:E}=c,R=new Re(m,this.urlSerializer.serialize(b),w,D);this.events.next(R);let k=Js(this.rootComponentType,this.environmentInjector).snapshot;return this.currentTransition=e=Q$1(z({},c),{targetSnapshot:k,urlAfterRedirects:b,extras:Q$1(z({},E),{skipLocationChange:!1,replaceUrl:!1})}),this.currentNavigation.update(j=>(j.finalUrl=b,j)),Ay(e)}else return this.events.next(new Kt(c.id,this.urlSerializer.serialize(c.extractedUrl),``,Tn$1.IgnoredByUrlHandlingStrategy)),c.resolve(!1),At}),Ue(c=>{let d=new Gr(c.id,this.urlSerializer.serialize(c.extractedUrl),this.urlSerializer.serialize(c.urlAfterRedirects),c.targetSnapshot);return this.events.next(d),this.currentTransition=e=Q$1(z({},c),{guards:ku(c.targetSnapshot,c.currentSnapshot,this.rootContexts)}),e}),Wu(c=>this.events.next(c)),sv(c=>{if(e.guardsResult=c.guardsResult,c.guardsResult&&typeof c.guardsResult!=`boolean`)throw xn$1(this.urlSerializer,c.guardsResult);let d=new Yr(c.id,this.urlSerializer.serialize(c.extractedUrl),this.urlSerializer.serialize(c.urlAfterRedirects),c.targetSnapshot,!!c.guardsResult);if(this.events.next(d),!s())return At;if(!c.guardsResult)return this.cancelNavigationTransition(c,``,J$2.GuardRejected),At;if(c.guards.canActivateChecks.length===0)return Ay(c);let u=new Xr(c.id,this.urlSerializer.serialize(c.extractedUrl),this.urlSerializer.serialize(c.urlAfterRedirects),c.targetSnapshot);if(this.events.next(u),!s())return At;let h=!1;return Ay(c).pipe(_h(this.paramsInheritanceStrategy),ju$1({next:()=>{h=!0;let m=new qr(c.id,this.urlSerializer.serialize(c.extractedUrl),this.urlSerializer.serialize(c.urlAfterRedirects),c.targetSnapshot);this.events.next(m)},complete:()=>{h||this.cancelNavigationTransition(c,``,J$2.NoDataFromResolver)}}))}),Po(c=>{let d=h=>{let m=[];if(h.routeConfig?._loadedComponent)h.component=h.routeConfig?._loadedComponent;else if(h.routeConfig?.loadComponent){let b=h._environmentInjector;m.push(this.configLoader.loadComponent(b,h.routeConfig).then(w=>{h.component=w}))}for(let b of h.children)m.push(...d(b));return m},u=d(c.targetSnapshot.root);return u.length===0?Ay(c):Re$1(Promise.all(u).then(()=>c))}),sv(c=>{let{newlyCreatedRoutes:d,state:u}=Au(t.routeReuseStrategy,c.targetSnapshot,c.currentRouterState);return this.currentTransition=e=c=Q$1(z({},c),{targetRouterState:u,newlyCreatedRoutes:d}),this.currentNavigation.update(h=>(h.targetRouterState=u,h)),Ay(c)}),this.routerResourcesFeature?.setupAndRunResources(a.signal)??(c=>c),Po(()=>this.afterPreactivation()),sv(()=>{let{currentSnapshot:c,targetSnapshot:d}=e,u=this.createViewTransition?.(this.environmentInjector,c.root,d.root,e.hasUAVisualTransition);return u?Re$1(u).pipe(Ue(()=>e)):Ay(e)}),gn$1(1),sv(c=>{i=!1,this.events.next(new Qe);let d=e.beforeActivateHandler.deferredHandle;return d?Re$1(d.then(()=>c)):Ay(c)}),ju$1(c=>{new Ao(t.routeReuseStrategy,e.targetRouterState,e.currentRouterState,d=>this.events.next(d),this.inputBindingEnabled).activate(this.rootContexts),c.newlyCreatedRoutes?.clear(),s()&&(Sc(c.targetRouterState),o=!0,this.currentNavigation.update(d=>(d.abort=Eh,d)),this.lastSuccessfulNavigation.set(le$1(this.currentNavigation)),this.events.next(new Tt(c.id,this.urlSerializer.serialize(c.extractedUrl),this.urlSerializer.serialize(c.urlAfterRedirects))),this.titleStrategy?.updateTitle(c.targetRouterState.snapshot),c.resolve(!0))}),av(sc(a.signal).pipe(rr(()=>!o&&i),ju$1(()=>{this.cancelNavigationTransition(e,a.signal.reason+``,J$2.Aborted)}))),ju$1({complete:()=>{o=!0}}),av(this.transitionAbortWithErrorSubject.pipe(ju$1(c=>{throw c}))),Xy(()=>{a.abort(),o||this.cancelNavigationTransition(e,``,J$2.SupersededByNewNavigation),this.currentTransition?.id===e.id&&(this.currentNavigation.set(null),this.currentTransition=null)}),ku$1(c=>{if(o=!0,Ts(e),this.destroyed)return e.resolve(!1),At;if(c instanceof ue&&(c=xn$1(this.urlSerializer,c)),oc(c))this.events.next(new yt(e.id,this.urlSerializer.serialize(e.extractedUrl),c.message,c.cancellationCode)),Ou(c)?this.events.next(new tn$1(c.url,c.navigationBehaviorOptions)):e.resolve(!1);else{let d=new xe(e.id,this.urlSerializer.serialize(e.extractedUrl),c,e.targetSnapshot??void 0);try{let u=Yo$1(this.environmentInjector,()=>this.navigationErrorHandler?.(d));if(u instanceof ue){let{message:h,cancellationCode:m}=xn$1(this.urlSerializer,u);this.events.next(new yt(e.id,this.urlSerializer.serialize(e.extractedUrl),h,m)),this.events.next(new tn$1(u.redirectTo,u.navigationBehaviorOptions))}else throw this.events.next(d),c}catch(u){this.options.resolveNavigationPromiseOnError?e.resolve(!1):e.reject(u)}}return At}))}))}cancelNavigationTransition(t,e,i){Ts(t);let o=new yt(t.id,this.urlSerializer.serialize(t.extractedUrl),e,i);this.events.next(o),t.resolve(!1)}isUpdatingInternalState(){return this.currentTransition?.extractedUrl.toString()!==this.currentTransition?.currentUrlTree.toString()}isUpdatedBrowserUrl(){let t=this.urlHandlingStrategy.extract(this.urlSerializer.parse(this.location.path(!0))),e=le$1(this.currentNavigation),i=e?.targetBrowserUrl??e?.extractedUrl;return t.toString()!==i?.toString()&&!e?.extras.skipLocationChange}static ɵfac=function(e){return new(e||n)};static ɵprov=$r$1({token:n,factory:n.ɵfac})}return n})();function Rh(n){return n!==Rn}function Ts(n){for(let r of n.newlyCreatedRoutes??[])r._localInjector?.destroy(),r._localInjector=void 0;Sc(n.targetRouterState)}function Sc(n){if(!n)return;let r=t=>{t.value.pending?.set(!1),t.children.forEach(r)};r(n._root)}var wc=new S$1(``);var Cc=(()=>{class n{static ɵfac=function(e){return new(e||n)};static ɵprov=$r$1({token:n,factory:()=>v(xh)})}return n})();var ri=class{shouldDetach(r){return!1}store(r,t){}shouldAttach(r){return!1}retrieve(r){return null}shouldReuseRoute(r,t){return r.routeConfig===t.routeConfig}shouldDestroyInjector(r){return!0}};var xh=(()=>{class n extends ri{static ɵfac=function(e){return new(e||n)};static ɵprov=$r$1({token:n,factory:n.ɵfac})}return n})();var si=(()=>{class n{urlSerializer=v(nn$1);options=v(on$1,{optional:!0})||{};canceledNavigationResolution=this.options.canceledNavigationResolution||`replace`;location=v(ae);urlHandlingStrategy=v(ai);urlUpdateStrategy=this.options.urlUpdateStrategy||`deferred`;currentUrlTree=new ht;getCurrentUrlTree(){return this.currentUrlTree}rawUrlTree=this.currentUrlTree;getRawUrlTree(){return this.rawUrlTree}createBrowserPath({finalUrl:t,initialUrl:e,targetBrowserUrl:i}){let o=t!==void 0?this.urlHandlingStrategy.merge(t,e):e,a=i??o;return a instanceof ht?this.urlSerializer.serialize(a):a}routerUrlState(t){return t?.targetBrowserUrl===void 0||t?.finalUrl===void 0?{}:{ɵrouterUrl:this.urlSerializer.serialize(t.finalUrl)}}commitTransition({targetRouterState:t,finalUrl:e,initialUrl:i}){e&&t?(this.currentUrlTree=e,this.rawUrlTree=this.urlHandlingStrategy.merge(e,i),this.routerState=t):this.rawUrlTree=i}routerState=Js(null,v(Ee$1));getRouterState(){return this.routerState}_stateMemento=this.createStateMemento();get stateMemento(){return this._stateMemento}updateStateMemento(){this._stateMemento=this.createStateMemento()}createStateMemento(){return{rawUrlTree:this.rawUrlTree,currentUrlTree:this.currentUrlTree,routerState:this.routerState}}restoredState(){return this.location.getState()}static ɵfac=function(e){return new(e||n)};static ɵprov=$r$1({token:n,factory:()=>v(Ih)})}return n})();var Ih=(()=>{class n extends si{currentPageId=0;lastSuccessfulId=-1;get browserPageId(){return this.canceledNavigationResolution!==`computed`?this.currentPageId:this.restoredState()?.ɵrouterPageId??this.currentPageId}registerNonRouterCurrentEntryChangeListener(t){return this.location.subscribe(e=>{e.type===`popstate`&&setTimeout(()=>{t(e.url,e.state,`popstate`,{replaceUrl:!0},e.hasUAVisualTransition)})})}handleRouterEvent(t,e){t instanceof Re?this.updateStateMemento():t instanceof Kt?this.commitTransition(e):t instanceof On?this.urlUpdateStrategy===`eager`&&(e.extras.skipLocationChange||this.setBrowserUrl(this.createBrowserPath(e),e)):t instanceof Qe?(this.commitTransition(e),this.urlUpdateStrategy===`deferred`&&!e.extras.skipLocationChange&&this.setBrowserUrl(this.createBrowserPath(e),e)):t instanceof yt?nc(t)?t.code===J$2.Redirect&&this.routerState===e.targetRouterState&&this.resetInternalState(e):this.restoreHistory(e):t instanceof xe?this.restoreHistory(e,!0):t instanceof Tt&&(this.lastSuccessfulId=t.id,this.currentPageId=this.browserPageId)}setBrowserUrl(t,e){let{extras:i,id:o}=e,{replaceUrl:a,state:s}=i;if(this.location.isCurrentPathEqualTo(t)||a){let c=this.browserPageId,d=z(z({},s),this.generateNgRouterState(o,c,e));this.location.replaceState(t,``,d)}else{let c=z(z({},s),this.generateNgRouterState(o,this.browserPageId+1,e));this.location.go(t,``,c)}}restoreHistory(t,e=!1){if(this.canceledNavigationResolution===`computed`){let i=this.browserPageId,o=this.currentPageId-i;o!==0?this.location.historyGo(o):this.getCurrentUrlTree()===t.finalUrl&&o===0&&(this.resetInternalState(t),this.resetUrlToCurrentUrlTree())}else this.canceledNavigationResolution===`replace`&&(e&&this.resetInternalState(t),this.resetUrlToCurrentUrlTree())}resetInternalState({finalUrl:t}){this.routerState=this.stateMemento.routerState,this.currentUrlTree=this.stateMemento.currentUrlTree,this.rawUrlTree=this.urlHandlingStrategy.merge(this.currentUrlTree,t??this.rawUrlTree)}resetUrlToCurrentUrlTree(){this.location.replaceState(this.urlSerializer.serialize(this.getRawUrlTree()),``,this.generateNgRouterState(this.lastSuccessfulId,this.currentPageId))}generateNgRouterState(t,e,i){return this.canceledNavigationResolution===`computed`?z({navigationId:t,ɵrouterPageId:e},this.routerUrlState(i)):z({navigationId:t},this.routerUrlState(i))}static ɵfac=function(e){return new(e||n)};static ɵprov=$r$1({token:n,factory:n.ɵfac})}return n})();function $o(n,r){n.events.pipe(rr(t=>t instanceof Tt||t instanceof yt||t instanceof xe||t instanceof Kt),Ue(t=>t instanceof Tt||t instanceof Kt?0:(t instanceof yt?t.code===J$2.Redirect||t.code===J$2.SupersededByNewNavigation:!1)?2:1),rr(t=>t!==2),gn$1(1)).subscribe(()=>{r()})}var Ie$1=(()=>{class n{get currentUrlTree(){return this.stateManager.getCurrentUrlTree()}get rawUrlTree(){return this.stateManager.getRawUrlTree()}disposed=!1;nonRouterCurrentEntryChangeSubscription;console=v($w);stateManager=v(si);options=v(on$1,{optional:!0})||{};pendingTasks=v(yt$1);urlUpdateStrategy=this.options.urlUpdateStrategy||`deferred`;navigationTransitions=v(_c);urlSerializer=v(nn$1);location=v(ae);urlHandlingStrategy=v(ai);injector=v(Ee$1);_events=new ee;get events(){return this._events}get routerState(){return this.stateManager.getRouterState()}navigated=!1;routeReuseStrategy=v(Cc);injectorCleanup=v(wc,{optional:!0});onSameUrlNavigation=this.options.onSameUrlNavigation||`ignore`;config=v(jn,{optional:!0})?.flat()??[];componentInputBindingEnabled=!!v(ii,{optional:!0});currentNavigation=this.navigationTransitions.currentNavigation.asReadonly();constructor(){this.resetConfig(this.config),this.navigationTransitions.setupNavigations(this).subscribe({error:t=>{}}),this.subscribeToNavigationEvents()}eventsSubscription=new K$1;subscribeToNavigationEvents(){let t=this.navigationTransitions.events.subscribe(e=>{try{let i=this.navigationTransitions.currentTransition,o=le$1(this.navigationTransitions.currentNavigation);if(i!==null&&o!==null){if(this.stateManager.handleRouterEvent(e,o),e instanceof yt&&e.code!==J$2.Redirect&&e.code!==J$2.SupersededByNewNavigation)this.navigated=!0;else if(e instanceof Tt)this.navigated=!0,this.injectorCleanup?.(this.routeReuseStrategy,this.routerState,this.config);else if(e instanceof tn$1){let a=e.navigationBehaviorOptions,s=this.urlHandlingStrategy.merge(e.url,i.currentRawUrl),c=z({scroll:i.extras.scroll,browserUrl:i.extras.browserUrl,info:i.extras.info,skipLocationChange:i.extras.skipLocationChange,replaceUrl:i.extras.replaceUrl||this.urlUpdateStrategy===`eager`||Rh(i.source)},a);this.scheduleNavigation(s,Rn,null,c,i.hasUAVisualTransition,{resolve:i.resolve,reject:i.reject,promise:i.promise})}}Mu(e)&&this._events.next(e)}catch(i){this.navigationTransitions.transitionAbortWithErrorSubject.next(i)}});this.eventsSubscription.add(t)}resetRootComponentType(t){this.routerState.root.component=t,this.navigationTransitions.rootComponentType=t}initialNavigation(){this.setUpLocationChangeListener(),this.navigationTransitions.hasRequestedNavigation||this.navigateToSyncWithBrowser(this.location.path(!0),Rn,this.stateManager.restoredState(),{replaceUrl:!0})}setUpLocationChangeListener(){this.nonRouterCurrentEntryChangeSubscription??=this.stateManager.registerNonRouterCurrentEntryChangeListener((t,e,i,o,a)=>{this.navigateToSyncWithBrowser(t,i,e,o,a)})}navigateToSyncWithBrowser(t,e,i,o,a){let s=i?.navigationId?i:null,c=i?.ɵrouterUrl??t;if(i?.ɵrouterUrl&&(o=Q$1(z({},o),{browserUrl:t})),i){let u=z({},i);delete u.navigationId,delete u.ɵrouterPageId,delete u.ɵrouterUrl,Object.keys(u).length!==0&&(o.state=u)}let d=this.parseUrl(c);this.scheduleNavigation(d,e,s,o,a).catch(u=>{this.disposed||this.injector.get(vt$1)(u)})}get url(){return this.serializeUrl(this.currentUrlTree)}getCurrentNavigation(){return le$1(this.navigationTransitions.currentNavigation)}get lastSuccessfulNavigation(){return this.navigationTransitions.lastSuccessfulNavigation}resetConfig(t){this.config=t.map(jo),this.navigated=!1}ngOnDestroy(){this.dispose()}dispose(){this._events.unsubscribe(),this.navigationTransitions.complete(),this.nonRouterCurrentEntryChangeSubscription?.unsubscribe(),this.nonRouterCurrentEntryChangeSubscription=void 0,this.disposed=!0,this.eventsSubscription.unsubscribe()}createUrlTree(t,e={}){let{relativeTo:i,queryParams:o,fragment:a,queryParamsHandling:s,preserveFragment:c}=e,d=c?this.currentUrlTree.fragment:a,u=null;switch(s??this.options.defaultQueryParamsHandling){case`merge`:u=z(z({},this.currentUrlTree.queryParams),o);break;case`preserve`:u=this.currentUrlTree.queryParams;break;default:u=o||null}let h;try{h=Xs(i?i.snapshot:this.routerState.snapshot.root)}catch{(typeof t[0]!=`string`||t[0][0]!==`/`)&&(t=[]),h=this.currentUrlTree.root}return qs(h,t,u,d??null,this.urlSerializer)}navigateByUrl(t,e={skipLocationChange:!1}){let i=de(t)?t:this.parseUrl(t),o=this.urlHandlingStrategy.merge(i,this.rawUrlTree);return this.scheduleNavigation(o,Rn,null,e)}navigate(t,e={skipLocationChange:!1}){return Mh(t),this.navigateByUrl(this.createUrlTree(t,e),e)}serializeUrl(t){return this.urlSerializer.serialize(t)}parseUrl(t){try{return this.urlSerializer.parse(t)}catch{return this.console.warn(Tn$2(4018,!1)),this.urlSerializer.parse(`/`)}}isActive(t,e){let i;if(e===!0?i=z({},Bs):e===!1?i=z({},jr):i=z(z({},jr),e),de(t))return wo(this.currentUrlTree,t,i);let o=this.parseUrl(t);return wo(this.currentUrlTree,o,i)}scheduleNavigation(t,e,i,o,a,s){if(this.disposed)return Promise.resolve(!1);let c,d,u;s?(c=s.resolve,d=s.reject,u=s.promise):u=new Promise((m,b)=>{c=m,d=b});let h=this.pendingTasks.add();return $o(this,()=>{queueMicrotask(()=>this.pendingTasks.remove(h))}),this.navigationTransitions.handleNavigationRequest({source:e,restoredState:i,currentUrlTree:this.currentUrlTree,currentRawUrl:this.currentUrlTree,rawUrl:t,extras:o,hasUAVisualTransition:a,resolve:c,reject:d,promise:u,currentSnapshot:this.routerState.snapshot,currentRouterState:this.routerState}),u.catch(Promise.reject.bind(Promise))}static ɵfac=function(e){return new(e||n)};static ɵprov=$r$1({token:n,factory:n.ɵfac})}return n})();function Mh(n){for(let r=0;r<n.length;r++)if(n[r]==null)throw new w(4008,!1)}var kh=(()=>{class n{router=v(Ie$1);stateManager=v(si);fragment=Et(``);queryParams=Et({});path=Et(``);serializer=v(nn$1);constructor(){this.updateState(),this.router.events?.subscribe(t=>{t instanceof Tt&&this.updateState()})}updateState(){let{fragment:t,root:e,queryParams:i}=this.stateManager.getCurrentUrlTree();this.fragment.set(t),this.queryParams.set(i),this.path.set(this.serializer.serialize(new ht(e)))}static ɵfac=function(e){return new(e||n)};static ɵprov=$r$1({token:n,factory:n.ɵfac})}return n})();var Dc=(()=>{class n{router;route;tabIndexAttribute;renderer;el;locationStrategy;hrefAttributeValue=v(new ny(`href`),{optional:!0});reactiveHref=Ul(()=>{if(!this.isAnchorElement)return this.hrefAttributeValue;this.reactiveRouterState.path(),this._preserveFragment()&&this.reactiveRouterState.fragment();let t=e=>e===`preserve`||e===`merge`;return(t(this._queryParamsHandling())||t(this.options?.defaultQueryParamsHandling))&&this.reactiveRouterState.queryParams(),this.computeHref(this.createUrlTree())});get href(){return le$1(this.reactiveHref)}set href(t){this.reactiveHref.set(t)}set target(t){this._target.set(t)}get target(){return le$1(this._target)}_target=Et(void 0);set queryParams(t){this._queryParams.set(t)}get queryParams(){return le$1(this._queryParams)}_queryParams=Et(void 0,{equal:()=>!1});set fragment(t){this._fragment.set(t)}get fragment(){return le$1(this._fragment)}_fragment=Et(void 0);set queryParamsHandling(t){this._queryParamsHandling.set(t)}get queryParamsHandling(){return le$1(this._queryParamsHandling)}_queryParamsHandling=Et(void 0);set state(t){this._state.set(t)}get state(){return le$1(this._state)}_state=Et(void 0,{equal:()=>!1});set info(t){this._info.set(t)}get info(){return le$1(this._info)}_info=Et(void 0,{equal:()=>!1});set relativeTo(t){this._relativeTo.set(t)}get relativeTo(){return le$1(this._relativeTo)}_relativeTo=Et(void 0);set preserveFragment(t){this._preserveFragment.set(t)}get preserveFragment(){return le$1(this._preserveFragment)}_preserveFragment=Et(!1);set skipLocationChange(t){this._skipLocationChange.set(t)}get skipLocationChange(){return le$1(this._skipLocationChange)}_skipLocationChange=Et(!1);set replaceUrl(t){this._replaceUrl.set(t)}get replaceUrl(){return le$1(this._replaceUrl)}_replaceUrl=Et(!1);browserUrl=Ij(void 0);isAnchorElement;onChanges=new ee;applicationErrorHandler=v(vt$1);options=v(on$1,{optional:!0});reactiveRouterState=v(kh);constructor(t,e,i,o,a,s){this.router=t,this.route=e,this.tabIndexAttribute=i,this.renderer=o,this.el=a,this.locationStrategy=s;let c=a.nativeElement.tagName?.toLowerCase();this.isAnchorElement=c===`a`||c===`area`||!!(typeof customElements==`object`&&customElements.get(c)?.observedAttributes?.includes?.(`href`))}setTabIndexIfNotOnNativeEl(t){this.tabIndexAttribute!=null||this.isAnchorElement||this.applyAttributeValue(`tabindex`,t)}ngOnChanges(t){this.onChanges.next(this)}routerLinkInput=Et(null);set routerLink(t){t==null?(this.routerLinkInput.set(null),this.setTabIndexIfNotOnNativeEl(null)):(de(t)?this.routerLinkInput.set(t):this.routerLinkInput.set(Array.isArray(t)?t:[t]),this.setTabIndexIfNotOnNativeEl(`0`))}onClick(t,e,i,o,a){let s=this.urlTree;if(s===null||this.isAnchorElement&&(t!==0||e||i||o||a||typeof this.target==`string`&&this.target!=`_self`))return!0;let c=this.browserUrl(),d=z({skipLocationChange:this.skipLocationChange,replaceUrl:this.replaceUrl,state:this.state,info:this.info},c!==void 0&&{browserUrl:c});return this.router.navigateByUrl(s,d)?.catch(u=>{this.applicationErrorHandler(u)}),!this.isAnchorElement}ngOnDestroy(){}applyAttributeValue(t,e){let i=this.renderer,o=this.el.nativeElement;e!==null?i.setAttribute(o,t,e):i.removeAttribute(o,t)}createUrlTree(){let t=this.routerLinkInput();return t===null||!this.router.createUrlTree?null:de(t)?t:this.router.createUrlTree(t,{relativeTo:this._relativeTo()!==void 0?this._relativeTo():this.route,queryParams:this._queryParams(),fragment:this._fragment(),queryParamsHandling:this._queryParamsHandling(),preserveFragment:this._preserveFragment()})}get urlTree(){return le$1(()=>this.createUrlTree())}computeHref(t){return t!==null&&this.locationStrategy?this.locationStrategy?.prepareExternalUrl(this.router.serializeUrl(t))??``:null}static ɵfac=function(e){return new(e||n)(os$1(Ie$1),os$1(qt$1),yp(`tabindex`),os$1(Ic$1),os$1(Wr$1),os$1(We))};static ɵdir=fw({type:n,selectors:[[``,`routerLink`,``]],hostVars:2,hostBindings:function(e,i){e&1&&nm$1(`click`,function(a){return i.onClick(a.button,a.ctrlKey,a.shiftKey,a.altKey,a.metaKey)}),e&2&&qg(`href`,i.reactiveHref(),kI)(`target`,i._target())},inputs:{target:`target`,queryParams:`queryParams`,fragment:`fragment`,queryParamsHandling:`queryParamsHandling`,state:`state`,info:`info`,relativeTo:`relativeTo`,preserveFragment:[2,`preserveFragment`,`preserveFragment`,Nj],skipLocationChange:[2,`skipLocationChange`,`skipLocationChange`,Nj],replaceUrl:[2,`replaceUrl`,`replaceUrl`,Nj],browserUrl:[1,`browserUrl`],routerLink:`routerLink`},features:[hE]})}return n})();var zn=class{};var Ph=(()=>{class n{preload(t,e){return e().pipe(ku$1(()=>Ay(null)))}static ɵfac=function(e){return new(e||n)};static ɵprov=$r$1({token:n,factory:n.ɵfac})}return n})();var Ec=(()=>{class n{router;injector;preloadingStrategy;loader;subscription;constructor(t,e,i,o){this.router=t,this.injector=e,this.preloadingStrategy=i,this.loader=o}setUpPreloading(){this.subscription=this.router.events.pipe(rr(t=>t instanceof Tt),zy(()=>this.preload())).subscribe(()=>{})}preload(){return this.processRoutes(this.injector,this.router.config)}ngOnDestroy(){this.subscription?.unsubscribe()}processRoutes(t,e){let i=[];for(let o of e){o.providers&&!o._injector&&(o._injector=Sl$1(o.providers,t,``));let a=o._injector??t;o._loadedNgModuleFactory&&!o._loadedInjector&&(o._loadedInjector=o._loadedNgModuleFactory.create(a).injector);let s=o._loadedInjector??a;(o.loadChildren&&!o._loadedRoutes&&o.canLoad===void 0||o.loadComponent&&!o._loadedComponent)&&i.push(this.preloadConfig(a,o)),(o.children||o._loadedRoutes)&&i.push(this.processRoutes(s,o.children??o._loadedRoutes))}return Re$1(i).pipe(tr$1())}preloadConfig(t,e){return this.preloadingStrategy.preload(e,()=>{if(t.destroyed)return Ay(null);let i;e.loadChildren&&e.canLoad===void 0?i=Re$1(this.loader.loadChildren(t,e)):i=Ay(null);let o=i.pipe($e$1(a=>a===null?Ay(void 0):(e._loadedRoutes=a.routes,e._loadedInjector=a.injector,e._loadedNgModuleFactory=a.factory,this.processRoutes(a.injector??t,a.routes))));if(e.loadComponent&&!e._loadedComponent){let a=this.loader.loadComponent(t,e);return Re$1([o,a]).pipe(tr$1())}else return o})}static ɵfac=function(e){return new(e||n)(Pe(Ie$1),Pe(Ee$1),Pe(zn),Pe(Ho))};static ɵprov=ae$1({token:n,factory:n.ɵfac,providedIn:`root`})}return n})();var Fh=new S$1(``);function Lh(n,...r){return Dr$1([{provide:jn,multi:!0,useValue:n},{provide:qt$1,useFactory:Bh},{provide:eo$1,multi:!0,useFactory:jh},r.map(t=>t.ɵproviders)])}function Bh(){return v(Ie$1).routerState.root}function Uh(n,r){return{ɵkind:n,ɵproviders:r}}function jh(){let n=v(se$1);return r=>{let t=n.get(wt$1);if(r!==t.components[0])return;let e=n.get(Ie$1),i=n.get(zh);n.get(Vh)===1&&e.initialNavigation(),n.get(Rc,null,{optional:!0})?.setUpPreloading(),n.get(Fh,null,{optional:!0})?.init(),e.resetRootComponentType(t.componentTypes[0]),i.closed||(i.next(),i.complete(),i.unsubscribe())}}var zh=new S$1(``,{factory:()=>new ee});var Vh=new S$1(``,{factory:()=>1});var Rc=new S$1(``);function Hh(n){return Uh(0,[{provide:Rc,useExisting:Ec},{provide:zn,useExisting:n}])}var ci=/* @__PURE__ */ new WeakMap;var _t=(()=>{class n{_appRef;_injector=v(se$1);_environmentInjector=v(Ee$1);load(t){let e=this._appRef=this._appRef||this._injector.get(wt$1),i=ci.get(e);i||(i={loaders:/* @__PURE__ */ new Set,refs:[]},ci.set(e,i),e.onDestroy(()=>{ci.get(e)?.refs.forEach(o=>o.destroy()),ci.delete(e)})),i.loaders.has(t)||(i.loaders.add(t),i.refs.push(Aj(t,{environmentInjector:this._environmentInjector})))}static ɵfac=function(e){return new(e||n)};static ɵprov=$r$1({token:n,factory:n.ɵfac})}return n})();var di=(()=>{class n{static ɵfac=function(e){return new(e||n)};static ɵcmp=aw({type:n,selectors:[[`ng-component`]],exportAs:[`cdkVisuallyHidden`],decls:0,vars:0,template:function(e,i){},styles:[`.cdk-visually-hidden {
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
`],encapsulation:2})}return n})();var li;function $h(){if(li===void 0&&(li=null,typeof window<`u`)){let n=window;if(n.trustedTypes!==void 0)try{li=n.trustedTypes.createPolicy(`angular#components`,{createHTML:r=>r})}catch(r){console.error(r)}}return li}function Me(n){return $h()?.createHTML(n)||n}function xc(n,r,t){n.innerHTML=Me(t.sanitize(J$3.HTML,r)||``)}function Ic(n){return Error(`Unable to find icon with the name "${n}"`)}function Wh(){return Error(`Could not find HttpClient for use with Angular Material icons. Please add provideHttpClient() to your providers.`)}function Mc(n){return Error(`The URL provided to MatIconRegistry was not trusted as a resource URL via Angular's DomSanitizer. Attempted URL was "${n}".`)}function Ac(n){return Error(`The literal provided to MatIconRegistry was not trusted as safe HTML by Angular's DomSanitizer. Attempted literal was "${n}".`)}var Zt$1=class{url;svgText;options;svgElement=null;constructor(r,t,e){this.url=r,this.svgText=t,this.options=e}};var Tc=(()=>{class n{_httpClient;_sanitizer;_errorHandler;_document;_svgIconConfigs=/* @__PURE__ */ new Map;_iconSetConfigs=/* @__PURE__ */ new Map;_cachedIconsByUrl=/* @__PURE__ */ new Map;_inProgressUrlFetches=/* @__PURE__ */ new Map;_fontCssClassesByAlias=/* @__PURE__ */ new Map;_resolvers=[];_defaultFontSetClass;constructor(t,e,i,o){this._httpClient=t,this._sanitizer=e,this._errorHandler=o,this._document=i}addSvgIcon(t,e,i){return this.addSvgIconInNamespace(``,t,e,i)}addSvgIconLiteral(t,e,i){return this.addSvgIconLiteralInNamespace(``,t,e,i)}addSvgIconInNamespace(t,e,i,o){return this._addSvgIconConfig(t,e,new Zt$1(i,null,o))}addSvgIconResolver(t){return this._resolvers.push(t),this}addSvgIconLiteralInNamespace(t,e,i,o){let a=this._sanitizer.sanitize(J$3.HTML,i);if(!a)throw Ac(i);let s=Me(a);return this._addSvgIconConfig(t,e,new Zt$1(``,s,o))}addSvgIconSet(t,e){return this.addSvgIconSetInNamespace(``,t,e)}addSvgIconSetLiteral(t,e){return this.addSvgIconSetLiteralInNamespace(``,t,e)}addSvgIconSetInNamespace(t,e,i){return this._addSvgIconSetConfig(t,new Zt$1(e,null,i))}addSvgIconSetLiteralInNamespace(t,e,i){let o=this._sanitizer.sanitize(J$3.HTML,e);if(!o)throw Ac(e);let a=Me(o);return this._addSvgIconSetConfig(t,new Zt$1(``,a,i))}registerFontClassAlias(t,e=t){return this._fontCssClassesByAlias.set(t,e),this}classNameForFontAlias(t){return this._fontCssClassesByAlias.get(t)||t}setDefaultFontSetClass(...t){return this._defaultFontSetClass=t,this}getDefaultFontSetClass(){return this._defaultFontSetClass??=Yh(this._document),this._defaultFontSetClass}getSvgIconFromUrl(t){let e=this._sanitizer.sanitize(J$3.RESOURCE_URL,t);if(!e)throw Mc(t);let i=this._cachedIconsByUrl.get(e);return i?Ay(ui(i)):this._loadSvgIconFromConfig(new Zt$1(t,null)).pipe(ju$1(o=>this._cachedIconsByUrl.set(e,o)),Ue(o=>ui(o)))}getNamedSvgIcon(t,e=``){let i=Nc(e,t),o=this._svgIconConfigs.get(i);if(o)return this._getSvgFromConfig(o);if(o=this._getIconConfigFromResolvers(e,t),o)return this._svgIconConfigs.set(i,o),this._getSvgFromConfig(o);let a=this._iconSetConfigs.get(e);return a?this._getSvgFromIconSetConfigs(t,a):Oy(Ic(i))}ngOnDestroy(){this._resolvers=[],this._svgIconConfigs.clear(),this._iconSetConfigs.clear(),this._cachedIconsByUrl.clear()}_getSvgFromConfig(t){return t.svgText?Ay(ui(this._svgElementFromConfig(t))):this._loadSvgIconFromConfig(t).pipe(Ue(e=>ui(e)))}_getSvgFromIconSetConfigs(t,e){let i=this._extractIconWithNameFromAnySet(t,e);if(i)return Ay(i);let o=e.filter(a=>!a.svgText).map(a=>this._loadSvgIconSetFromConfig(a).pipe(ku$1(s=>{let d=`Loading icon set URL: ${this._sanitizer.sanitize(J$3.RESOURCE_URL,a.url)} failed: ${s.message}`;return this._errorHandler.handleError(new Error(d)),Ay(null)})));return Wy(o).pipe(Ue(()=>{let a=this._extractIconWithNameFromAnySet(t,e);if(!a)throw Ic(t);return a}))}_extractIconWithNameFromAnySet(t,e){for(let i=e.length-1;i>=0;i--){let o=e[i];if(o.svgText&&o.svgText.toString().indexOf(t)>-1){let a=this._svgElementFromConfig(o),s=this._extractSvgIconFromSet(a,t,o.options);if(s)return s}}return null}_loadSvgIconFromConfig(t){return this._fetchIcon(t).pipe(ju$1(e=>t.svgText=e),Ue(()=>this._svgElementFromConfig(t)))}_loadSvgIconSetFromConfig(t){return t.svgText?Ay(null):this._fetchIcon(t).pipe(ju$1(e=>t.svgText=e))}_extractSvgIconFromSet(t,e,i){let o=t.querySelector(`[id="${e}"]`);if(!o)return null;let a=o.cloneNode(!0);if(a.removeAttribute(`id`),a.nodeName.toLowerCase()===`svg`)return this._setSvgAttributes(a,i);if(a.nodeName.toLowerCase()===`symbol`)return this._setSvgAttributes(this._toSvgElement(a),i);let s=this._svgElementFromString(Me(`<svg></svg>`));return s.appendChild(a),this._setSvgAttributes(s,i)}_svgElementFromString(t){let e=this._document.createElement(`DIV`);e.innerHTML=t;let i=e.querySelector(`svg`);if(!i)throw Error(`<svg> tag not found`);return i}_toSvgElement(t){let e=this._svgElementFromString(Me(`<svg></svg>`)),i=t.attributes;for(let o=0;o<i.length;o++){let{name:a,value:s}=i[o],c=a.toLowerCase();c!==`id`&&!c.startsWith(`on`)&&e.setAttribute(a,s)}for(let o=0;o<t.childNodes.length;o++)t.childNodes[o].nodeType===this._document.ELEMENT_NODE&&e.appendChild(t.childNodes[o].cloneNode(!0));return e}_setSvgAttributes(t,e){return t.setAttribute(`fit`,``),t.setAttribute(`height`,`100%`),t.setAttribute(`width`,`100%`),t.setAttribute(`preserveAspectRatio`,`xMidYMid meet`),t.setAttribute(`focusable`,`false`),e&&e.viewBox&&t.setAttribute(`viewBox`,e.viewBox),t}_fetchIcon(t){let{url:e,options:i}=t,o=i?.withCredentials??!1;if(!this._httpClient)throw Wh();if(e==null)throw Error(`Cannot fetch icon from URL "${e}".`);let a=this._sanitizer.sanitize(J$3.RESOURCE_URL,e);if(!a)throw Mc(e);let s=this._inProgressUrlFetches.get(a);if(s)return s;let c=this._httpClient.get(a,{responseType:`text`,withCredentials:o}).pipe(Ue(d=>Me(d)),Xy(()=>this._inProgressUrlFetches.delete(a)),Ns$1());return this._inProgressUrlFetches.set(a,c),c}_addSvgIconConfig(t,e,i){return this._svgIconConfigs.set(Nc(t,e),i),this}_addSvgIconSetConfig(t,e){let i=this._iconSetConfigs.get(t);return i?i.push(e):this._iconSetConfigs.set(t,[e]),this}_svgElementFromConfig(t){if(!t.svgElement){let e=this._svgElementFromString(t.svgText);this._setSvgAttributes(e,t.options),t.svgElement=e}return t.svgElement}_getIconConfigFromResolvers(t,e){for(let i=0;i<this._resolvers.length;i++){let o=this._resolvers[i](e,t);if(o)return Gh(o)?new Zt$1(o.url,null,o.options):new Zt$1(o,null)}}static ɵfac=function(e){return new(e||n)(Pe(we$1,8),Pe(Cn$1),Pe(mt$1,8),Pe(Je$1))};static ɵprov=ae$1({token:n,factory:n.ɵfac,providedIn:`root`})}return n})();function ui(n){return n.cloneNode(!0)}function Nc(n,r){return n+`:`+r}function Gh(n){return!!(n.url&&n.options)}function Yh(n){let r=null,t=!1;return n.fonts&&typeof n.fonts.forEach==`function`&&n.fonts.forEach(e=>{let i=e.family.replace(/['"]/g,``).trim().toLowerCase();(i===`material icons`||i.startsWith(`material icons `))&&(t=!0),i.startsWith(`material symbols rounded`)?r=`rounded`:i.startsWith(`material symbols sharp`)?r=`sharp`:i.startsWith(`material symbols`)&&(r=`outlined`)}),[r&&!t?`material-symbols-${r}`:`material-icons`,`mat-ligature-font`]}var Xh=new S$1(`cdk-dir-doc`,{providedIn:`root`,factory:()=>v(mt$1)});var qh=/^(ar|ckb|dv|he|iw|fa|nqo|ps|sd|ug|ur|yi|.*[-_](Adlm|Arab|Hebr|Nkoo|Rohg|Thaa))(?!.*[-_](Latn|Cyrl)($|-|_))($|-|_)/i;function Oc(n){let r=n?.toLowerCase()||``;return r===`auto`&&typeof navigator<`u`&&navigator?.language?qh.test(navigator.language)?`rtl`:`ltr`:r===`rtl`?`rtl`:`ltr`}var Vn=(()=>{class n{get value(){return this.valueSignal()}valueSignal=Et(`ltr`);change=new Qe$1;constructor(){let t=v(Xh,{optional:!0});if(t){let e=t.body?t.body.dir:null,i=t.documentElement?t.documentElement.dir:null;this.valueSignal.set(Oc(e||i||`ltr`))}}ngOnDestroy(){this.change.complete()}static ɵfac=function(e){return new(e||n)};static ɵprov=$r$1({token:n,factory:n.ɵfac})}return n})();var iy=(()=>{class n{static ɵfac=function(e){return new(e||n)};static ɵmod=lw({type:n});static ɵinj=nd$1({})}return n})();var Zh=new S$1(`MAT_ICON_DEFAULT_OPTIONS`);var Jh=new S$1(`mat-icon-location`,{providedIn:`root`,factory:()=>{let n=v(mt$1),r=n?n.location:null;return{getPathname:()=>r?r.pathname+r.search:``}}});var kc=[`clip-path`,`color-profile`,`src`,`cursor`,`fill`,`filter`,`marker`,`marker-start`,`marker-mid`,`marker-end`,`mask`,`stroke`];var Qh=kc.map(n=>`[${n}]`).join(`, `);var tm=/^url\(['"]?#(.*?)['"]?\)$/;var py=(()=>{class n{_elementRef=v(Wr$1);_iconRegistry=v(Tc);_location=v(Jh);_errorHandler=v(Je$1);_defaultColor;get color(){return this._color||this._defaultColor}set color(t){this._color=t}_color;inline=!1;get svgIcon(){return this._svgIcon}set svgIcon(t){t!==this._svgIcon&&(t?this._updateSvgIcon(t):this._svgIcon&&this._clearSvgElement(),this._svgIcon=t)}_svgIcon;get fontSet(){return this._fontSet}set fontSet(t){let e=this._cleanupFontValue(t);e!==this._fontSet&&(this._fontSet=e,this._updateFontIconClasses())}_fontSet;get fontIcon(){return this._fontIcon}set fontIcon(t){let e=this._cleanupFontValue(t);e!==this._fontIcon&&(this._fontIcon=e,this._updateFontIconClasses())}_fontIcon;_previousFontSetClass=[];_previousFontIconClass;_svgName=null;_svgNamespace=null;_previousPath;_elementsWithExternalReferences;_currentIconFetch=K$1.EMPTY;constructor(){let t=v(new ny(`aria-hidden`),{optional:!0}),e=v(Zh,{optional:!0});e&&(e.color&&(this.color=this._defaultColor=e.color),e.fontSet&&(this.fontSet=e.fontSet)),t||this._elementRef.nativeElement.setAttribute(`aria-hidden`,`true`)}_splitIconName(t){if(!t)return[``,``];let e=t.split(`:`);switch(e.length){case 1:return[``,e[0]];case 2:return e;default:throw Error(`Invalid icon name: "${t}"`)}}ngOnInit(){this._updateFontIconClasses()}ngAfterViewChecked(){let t=this._elementsWithExternalReferences;if(t&&t.size){let e=this._location.getPathname();e!==this._previousPath&&(this._previousPath=e,this._prependPathToReferences(e))}}ngOnDestroy(){this._currentIconFetch.unsubscribe(),this._elementsWithExternalReferences&&this._elementsWithExternalReferences.clear()}_usingFontIcon(){return!this.svgIcon}_setSvgElement(t){this._clearSvgElement();let e=this._location.getPathname();this._previousPath=e,this._cacheChildrenWithExternalReferences(t),this._prependPathToReferences(e),this._elementRef.nativeElement.appendChild(t)}_clearSvgElement(){let t=this._elementRef.nativeElement,e=t.childNodes.length;for(this._elementsWithExternalReferences&&this._elementsWithExternalReferences.clear();e--;){let i=t.childNodes[e];(i.nodeType!==1||i.nodeName.toLowerCase()===`svg`)&&i.remove()}}_updateFontIconClasses(){if(!this._usingFontIcon())return;let t=this._elementRef.nativeElement,e=(this.fontSet?this._iconRegistry.classNameForFontAlias(this.fontSet).split(/ +/):this._iconRegistry.getDefaultFontSetClass()).filter(i=>i.length>0);this._previousFontSetClass.forEach(i=>t.classList.remove(i)),e.forEach(i=>t.classList.add(i)),this._previousFontSetClass=e,this.fontIcon!==this._previousFontIconClass&&!e.includes(`mat-ligature-font`)&&(this._previousFontIconClass&&t.classList.remove(this._previousFontIconClass),this.fontIcon&&t.classList.add(this.fontIcon),this._previousFontIconClass=this.fontIcon)}_cleanupFontValue(t){return typeof t==`string`?t.trim().split(` `)[0]:t}_prependPathToReferences(t){let e=this._elementsWithExternalReferences,i=t.startsWith(`//`)?`/.${t}`:t;e&&e.forEach((o,a)=>{o.forEach(s=>{a.setAttribute(s.name,`url('${i}#${s.value}')`)})})}_cacheChildrenWithExternalReferences(t){let e=t.querySelectorAll(Qh),i=this._elementsWithExternalReferences=this._elementsWithExternalReferences||/* @__PURE__ */ new Map;for(let o=0;o<e.length;o++)kc.forEach(a=>{let s=e[o],c=s.getAttribute(a),d=c?c.match(tm):null;if(d){let u=i.get(s);u||(u=[],i.set(s,u)),u.push({name:a,value:d[1]})}})}_updateSvgIcon(t){if(this._svgNamespace=null,this._svgName=null,this._currentIconFetch.unsubscribe(),t){let[e,i]=this._splitIconName(t);e&&(this._svgNamespace=e),i&&(this._svgName=i),this._currentIconFetch=this._iconRegistry.getNamedSvgIcon(i,e).pipe(gn$1(1)).subscribe(o=>this._setSvgElement(o),o=>{let a=`Error retrieving icon ${e}:${i}! ${o.message}`;this._errorHandler.handleError(new Error(a))})}}static ɵfac=function(e){return new(e||n)};static ɵcmp=(function(){return aw({type:n,selectors:[[`mat-icon`]],hostAttrs:[`role`,`img`,1,`mat-icon`,`notranslate`],hostVars:10,hostBindings:function(i,o){i&2&&(qg(`data-mat-icon-type`,o._usingFontIcon()?`font`:`svg`)(`data-mat-icon-name`,o._svgName||o.fontIcon)(`data-mat-icon-namespace`,o._svgNamespace||o.fontSet)(`fontIcon`,o._usingFontIcon()?o.fontIcon:null),jC(o.color?`mat-`+o.color:``),pm$1(`mat-icon-inline`,o.inline)(`mat-icon-no-color`,o.color!==`primary`&&o.color!==`accent`&&o.color!==`warn`))},inputs:{color:`color`,inline:[2,`inline`,`inline`,Nj],svgIcon:`svgIcon`,fontSet:`fontSet`,fontIcon:`fontIcon`},exportAs:[`matIcon`],ngContentSelectors:[`*`],decls:1,vars:0,template:function(i,o){i&1&&(yC(),vC(0))},styles:[`mat-icon, mat-icon.mat-primary, mat-icon.mat-accent, mat-icon.mat-warn {
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
`],encapsulation:2})})()}return n})();function Hn(n){return n.buttons===0||n.detail===0}function $n(n){let r=n.touches&&n.touches[0]||n.changedTouches&&n.changedTouches[0];return!!r&&r.identifier===-1&&(r.radiusX==null||r.radiusX===1)&&(r.radiusY==null||r.radiusY===1)}var Wo;function Pc(){if(Wo==null){let n=typeof document<`u`?document.head:null;Wo=!!(n&&(n.createShadowRoot||n.attachShadow))}return Wo}function Go(n){if(Pc()){let r=n.getRootNode?n.getRootNode():null;if(typeof ShadowRoot<`u`&&ShadowRoot&&r instanceof ShadowRoot)return r}return null}function em(){let n=typeof document<`u`&&document?document.activeElement:null;for(;n&&n.shadowRoot;){let r=n.shadowRoot.activeElement;if(r===n)break;n=r}return n}function st$1(n){if(n.composedPath)try{return n.composedPath()[0]}catch{}return n.target}var Yo;try{Yo=typeof Intl<`u`&&Intl.v8BreakIterator}catch{Yo=!1}var V$1=(()=>{class n{_platformId=v(Yv);isBrowser=this._platformId?vr(this._platformId):typeof document==`object`&&!!document;EDGE=this.isBrowser&&/(edge)/i.test(navigator.userAgent);TRIDENT=this.isBrowser&&/(msie|trident)/i.test(navigator.userAgent);BLINK=this.isBrowser&&!!(window.chrome||Yo)&&typeof CSS<`u`&&!this.EDGE&&!this.TRIDENT;WEBKIT=this.isBrowser&&/AppleWebKit/i.test(navigator.userAgent)&&!this.BLINK&&!this.EDGE&&!this.TRIDENT;IOS=this.isBrowser&&/iPad|iPhone|iPod/.test(navigator.userAgent)&&!(`MSStream`in window);FIREFOX=this.isBrowser&&/(firefox|minefield)/i.test(navigator.userAgent);ANDROID=this.isBrowser&&/android/i.test(navigator.userAgent)&&!this.TRIDENT;SAFARI=this.isBrowser&&/safari/i.test(navigator.userAgent)&&this.WEBKIT;static ɵfac=function(e){return new(e||n)};static ɵprov=$r$1({token:n,factory:n.ɵfac})}return n})();var Wn;function Fc(){if(Wn==null&&typeof window<`u`)try{window.addEventListener(`test`,null,Object.defineProperty({},"passive",{get:()=>Wn=!0}))}finally{Wn=Wn||!1}return Wn}function an$1(n){return Fc()?n:!!n.capture}function hi(n,r=0){return Lc(n)?Number(n):arguments.length===2?r:0}function Lc(n){return!isNaN(parseFloat(n))&&!isNaN(Number(n))}function St(n){return n instanceof Wr$1?n.nativeElement:n}var Bc=new S$1(`cdk-input-modality-detector-options`);var Uc={ignoreKeys:[18,17,224,91,16]};var jc=650;var Xo={passive:!0,capture:!0};var zc=(()=>{class n{_platform=v(V$1);_listenerCleanups;modalityDetected;modalityChanged;get mostRecentModality(){return this._modality.value}_mostRecentTarget=null;_modality=new Kn$1(null);_options;_lastTouchMs=0;_onKeydown=t=>{this._options?.ignoreKeys?.some(e=>e===t.keyCode)||(this._modality.next(`keyboard`),this._mostRecentTarget=st$1(t))};_onMousedown=t=>{Date.now()-this._lastTouchMs<jc||(this._modality.next(Hn(t)?`keyboard`:`mouse`),this._mostRecentTarget=st$1(t))};_onTouchstart=t=>{if($n(t)){this._modality.next(`keyboard`);return}this._lastTouchMs=Date.now(),this._modality.next(`touch`),this._mostRecentTarget=st$1(t)};constructor(){let t=v(Fe$1),e=v(mt$1),i=v(Bc,{optional:!0});if(this._options=z(z({},Uc),i),this.modalityDetected=this._modality.pipe(ov(1)),this.modalityChanged=this.modalityDetected.pipe(Zy()),this._platform.isBrowser){let o=v(Vr$1).createRenderer(null,null);this._listenerCleanups=t.runOutsideAngular(()=>[o.listen(e,`keydown`,this._onKeydown,Xo),o.listen(e,`mousedown`,this._onMousedown,Xo),o.listen(e,`touchstart`,this._onTouchstart,Xo)])}}ngOnDestroy(){this._modality.complete(),this._listenerCleanups?.forEach(t=>t())}static ɵfac=function(e){return new(e||n)};static ɵprov=$r$1({token:n,factory:n.ɵfac})}return n})();var Gn=(function(n){return n[n.IMMEDIATE=0]=`IMMEDIATE`,n[n.EVENTUAL=1]=`EVENTUAL`,n})(Gn||{});var Vc=new S$1(`cdk-focus-monitor-default-options`);var mi=an$1({passive:!0,capture:!0});var pi=(()=>{class n{_ngZone=v(Fe$1);_platform=v(V$1);_inputModalityDetector=v(zc);_origin=null;_lastFocusOrigin=null;_windowFocused=!1;_windowFocusTimeoutId;_originTimeoutId;_originFromTouchInteraction=!1;_elementInfo=/* @__PURE__ */ new Map;_monitoredElementCount=0;_rootNodeFocusListenerCount=/* @__PURE__ */ new Map;_detectionMode;_windowFocusListener=()=>{this._windowFocused=!0,this._windowFocusTimeoutId=setTimeout(()=>this._windowFocused=!1)};_document=v(mt$1);_stopInputModalityDetector=new ee;constructor(){let t=v(Vc,{optional:!0});this._detectionMode=t?.detectionMode||Gn.IMMEDIATE}_rootNodeFocusAndBlurListener=t=>{let e=st$1(t);for(let i=e;i;i=i.parentElement)t.type===`focus`?this._onFocus(t,i):this._onBlur(t,i)};monitor(t,e=!1){let i=St(t);if(!this._platform.isBrowser||i.nodeType!==1)return Ay();let o=Go(i)||this._document,a=this._elementInfo.get(i);if(a)return e&&(a.checkChildren=!0),a.subject;let s={checkChildren:e,subject:new ee,rootNode:o};return this._elementInfo.set(i,s),this._registerGlobalListeners(s),s.subject}stopMonitoring(t){let e=St(t),i=this._elementInfo.get(e);i&&(i.subject.complete(),this._setClasses(e),this._elementInfo.delete(e),this._removeGlobalListeners(i))}focusVia(t,e,i){let o=St(t);o===this._document.activeElement?this._getClosestElementsInfo(o).forEach(([s,c])=>this._originChanged(s,e,c)):(this._setOrigin(e),typeof o.focus==`function`&&o.focus(i))}ngOnDestroy(){this._elementInfo.forEach((t,e)=>this.stopMonitoring(e))}_getWindow(){return this._document.defaultView||window}_getFocusOrigin(t){return this._origin?this._originFromTouchInteraction?this._shouldBeAttributedToTouch(t)?`touch`:`program`:this._origin:this._windowFocused&&this._lastFocusOrigin?this._lastFocusOrigin:t&&this._isLastInteractionFromInputLabel(t)?`mouse`:`program`}_shouldBeAttributedToTouch(t){return this._detectionMode===Gn.EVENTUAL||!!t?.contains(this._inputModalityDetector._mostRecentTarget)}_setClasses(t,e){t.classList.toggle(`cdk-focused`,!!e),t.classList.toggle(`cdk-touch-focused`,e===`touch`),t.classList.toggle(`cdk-keyboard-focused`,e===`keyboard`),t.classList.toggle(`cdk-mouse-focused`,e===`mouse`),t.classList.toggle(`cdk-program-focused`,e===`program`)}_setOrigin(t,e=!1){this._ngZone.runOutsideAngular(()=>{if(this._origin=t,this._originFromTouchInteraction=t===`touch`&&e,this._detectionMode===Gn.IMMEDIATE){clearTimeout(this._originTimeoutId);let i=this._originFromTouchInteraction?jc:1;this._originTimeoutId=setTimeout(()=>this._origin=null,i)}})}_onFocus(t,e){let i=this._elementInfo.get(e),o=st$1(t);!i||!i.checkChildren&&e!==o||this._originChanged(e,this._getFocusOrigin(o),i)}_onBlur(t,e){let i=this._elementInfo.get(e);!i||i.checkChildren&&t.relatedTarget instanceof Node&&e.contains(t.relatedTarget)||(this._setClasses(e),this._emitOrigin(i,null))}_emitOrigin(t,e){t.subject.observers.length&&this._ngZone.run(()=>t.subject.next(e))}_registerGlobalListeners(t){if(!this._platform.isBrowser)return;let e=t.rootNode,i=this._rootNodeFocusListenerCount.get(e)||0;i||this._ngZone.runOutsideAngular(()=>{e.addEventListener(`focus`,this._rootNodeFocusAndBlurListener,mi),e.addEventListener(`blur`,this._rootNodeFocusAndBlurListener,mi)}),this._rootNodeFocusListenerCount.set(e,i+1),++this._monitoredElementCount===1&&(this._ngZone.runOutsideAngular(()=>{this._getWindow().addEventListener(`focus`,this._windowFocusListener)}),this._inputModalityDetector.modalityDetected.pipe(av(this._stopInputModalityDetector)).subscribe(o=>{this._setOrigin(o,!0)}))}_removeGlobalListeners(t){let e=t.rootNode;if(this._rootNodeFocusListenerCount.has(e)){let i=this._rootNodeFocusListenerCount.get(e);i>1?this._rootNodeFocusListenerCount.set(e,i-1):(e.removeEventListener(`focus`,this._rootNodeFocusAndBlurListener,mi),e.removeEventListener(`blur`,this._rootNodeFocusAndBlurListener,mi),this._rootNodeFocusListenerCount.delete(e))}--this._monitoredElementCount||(this._getWindow().removeEventListener(`focus`,this._windowFocusListener),this._stopInputModalityDetector.next(),clearTimeout(this._windowFocusTimeoutId),clearTimeout(this._originTimeoutId))}_originChanged(t,e,i){this._setClasses(t,e),this._emitOrigin(i,e),this._lastFocusOrigin=e}_getClosestElementsInfo(t){let e=[];return this._elementInfo.forEach((i,o)=>{(o===t||i.checkChildren&&o.contains(t))&&e.push([o,i])}),e}_isLastInteractionFromInputLabel(t){let{_mostRecentTarget:e,mostRecentModality:i}=this._inputModalityDetector;if(i!==`mouse`||!e||e===t||t.nodeName!==`INPUT`&&t.nodeName!==`TEXTAREA`||t.disabled)return!1;let o=t.labels;if(o){for(let a=0;a<o.length;a++)if(o[a].contains(e))return!0}return!1}static ɵfac=function(e){return new(e||n)};static ɵprov=$r$1({token:n,factory:n.ɵfac})}return n})();var nm=(()=>{class n{_elementRef=v(Wr$1);_focusMonitor=v(pi);_monitorSubscription;_focusOrigin=null;cdkFocusChange=new Qe$1;get focusOrigin(){return this._focusOrigin}ngAfterViewInit(){let t=this._elementRef.nativeElement;this._monitorSubscription=this._focusMonitor.monitor(t,t.nodeType===1&&t.hasAttribute(`cdkMonitorSubtreeFocus`)).subscribe(e=>{this._focusOrigin=e,this.cdkFocusChange.emit(e)})}ngOnDestroy(){this._focusMonitor.stopMonitoring(this._elementRef),this._monitorSubscription?.unsubscribe()}static ɵfac=function(e){return new(e||n)};static ɵdir=fw({type:n,selectors:[[``,`cdkMonitorElementFocus`,``],[``,`cdkMonitorSubtreeFocus`,``]],outputs:{cdkFocusChange:`cdkFocusChange`},exportAs:[`cdkMonitorFocus`]})}return n})();function sn$1(n){return Array.isArray(n)?n:[n]}var Hc=/* @__PURE__ */ new Set;var Ae;var fi=(()=>{class n{_platform=v(V$1);_nonce=v(Kv,{optional:!0});_matchMedia;constructor(){this._matchMedia=this._platform.isBrowser&&window.matchMedia?window.matchMedia.bind(window):im}matchMedia(t){return(this._platform.WEBKIT||this._platform.BLINK)&&rm(t,this._nonce),this._matchMedia(t)}static ɵfac=function(e){return new(e||n)};static ɵprov=$r$1({token:n,factory:n.ɵfac})}return n})();function rm(n,r){if(!Hc.has(n))try{Ae||(Ae=document.createElement(`style`),r&&Ae.setAttribute(`nonce`,r),Ae.setAttribute(`type`,`text/css`),document.head.appendChild(Ae)),Ae.sheet&&(Ae.sheet.insertRule(`@media ${n.replace(/[{}]/g,``)} {body{ }}`,0),Hc.add(n))}catch(t){console.error(t)}}function im(n){return{matches:n===`all`||n===``,media:n,addListener:()=>{},removeListener:()=>{}}}var om=(()=>{class n{_mediaMatcher=v(fi);_zone=v(Fe$1);_queries=/* @__PURE__ */ new Map;_destroySubject=new ee;ngOnDestroy(){this._destroySubject.next(),this._destroySubject.complete()}isMatched(t){return $c(sn$1(t)).some(i=>this._registerQuery(i).mql.matches)}observe(t){let i=$c(sn$1(t)).map(a=>this._registerQuery(a).observable),o=By(i);return o=hn$1(o.pipe(gn$1(1)),o.pipe(ov(1),Qy(0))),o.pipe(Ue(a=>{let s={matches:!1,breakpoints:{}};return a.forEach(({matches:c,query:d})=>{s.matches=s.matches||c,s.breakpoints[d]=c}),s}))}_registerQuery(t){if(this._queries.has(t))return this._queries.get(t);let e=this._mediaMatcher.matchMedia(t),o={observable:new x(a=>{let s=c=>this._zone.run(()=>a.next(c));return e.addListener(s),()=>{e.removeListener(s)}}).pipe(iv(e),Ue(({matches:a})=>({query:t,matches:a})),av(this._destroySubject)),mql:e};return this._queries.set(t,o),o}static ɵfac=function(e){return new(e||n)};static ɵprov=$r$1({token:n,factory:n.ɵfac})}return n})();function $c(n){return n.map(r=>r.split(`,`)).reduce((r,t)=>r.concat(t)).map(r=>r.trim())}function am(n){if(n.type===`characterData`&&n.target instanceof Comment)return!0;if(n.type===`childList`){for(let r=0;r<n.addedNodes.length;r++)if(!(n.addedNodes[r]instanceof Comment))return!1;for(let r=0;r<n.removedNodes.length;r++)if(!(n.removedNodes[r]instanceof Comment))return!1;return!0}return!1}var sm=(()=>{class n{create(t){return typeof MutationObserver>`u`?null:new MutationObserver(t)}static ɵfac=function(e){return new(e||n)};static ɵprov=$r$1({token:n,factory:n.ɵfac})}return n})();var cm=(()=>{class n{_mutationObserverFactory=v(sm);_observedElements=/* @__PURE__ */ new Map;_ngZone=v(Fe$1);ngOnDestroy(){this._observedElements.forEach((t,e)=>this._cleanupObserver(e))}observe(t){let e=St(t);return new x(i=>{let a=this._observeElement(e).pipe(Ue(s=>s.filter(c=>!am(c))),rr(s=>!!s.length)).subscribe(s=>{this._ngZone.run(()=>{i.next(s)})});return()=>{a.unsubscribe(),this._unobserveElement(e)}})}_observeElement(t){return this._ngZone.runOutsideAngular(()=>{if(this._observedElements.has(t))this._observedElements.get(t).count++;else{let e=new ee,i=this._mutationObserverFactory.create(o=>e.next(o));i&&i.observe(t,{characterData:!0,childList:!0,subtree:!0}),this._observedElements.set(t,{observer:i,stream:e,count:1})}return this._observedElements.get(t).stream})}_unobserveElement(t){this._observedElements.has(t)&&(this._observedElements.get(t).count--,this._observedElements.get(t).count||this._cleanupObserver(t))}_cleanupObserver(t){if(this._observedElements.has(t)){let{observer:e,stream:i}=this._observedElements.get(t);e&&e.disconnect(),i.complete(),this._observedElements.delete(t)}}static ɵfac=function(e){return new(e||n)};static ɵprov=$r$1({token:n,factory:n.ɵfac})}return n})();var a_=(()=>{class n{_contentObserver=v(cm);_elementRef=v(Wr$1);event=new Qe$1;get disabled(){return this._disabled}set disabled(t){this._disabled=t,this._disabled?this._unsubscribe():this._subscribe()}_disabled=!1;get debounce(){return this._debounce}set debounce(t){this._debounce=hi(t),this._subscribe()}_debounce;_currentSubscription=null;ngAfterContentInit(){!this._currentSubscription&&!this.disabled&&this._subscribe()}ngOnDestroy(){this._unsubscribe()}_subscribe(){this._unsubscribe();let t=this._contentObserver.observe(this._elementRef);this._currentSubscription=(this.debounce?t.pipe(Qy(this.debounce)):t).subscribe(this.event)}_unsubscribe(){this._currentSubscription?.unsubscribe()}static ɵfac=function(e){return new(e||n)};static ɵdir=fw({type:n,selectors:[[``,`cdkObserveContent`,``]],inputs:{disabled:[2,`cdkObserveContentDisabled`,`disabled`,Nj],debounce:`debounce`},outputs:{event:`cdkObserveContent`},exportAs:[`cdkObserveContent`]})}return n})();var Gc=(()=>{class n{_platform=v(V$1);isDisabled(t){return t.hasAttribute(`disabled`)}isVisible(t){return dm(t)&&getComputedStyle(t).visibility===`visible`}isTabbable(t){if(!this._platform.isBrowser)return!1;let e=lm(vm(t));if(e&&(Wc(e)===-1||!this.isVisible(e)))return!1;let i=t.nodeName.toLowerCase(),o=Wc(t);return t.hasAttribute(`contenteditable`)?o!==-1:i===`iframe`||i===`object`||this._platform.WEBKIT&&this._platform.IOS&&!gm(t)?!1:i===`audio`?t.hasAttribute(`controls`)?o!==-1:!1:i===`video`?o===-1?!1:o!==null?!0:this._platform.FIREFOX||t.hasAttribute(`controls`):t.tabIndex>=0}isFocusable(t,e){return bm(t)&&!this.isDisabled(t)&&(e?.ignoreInert||!t.closest?.(`[inert]`))&&(e?.ignoreVisibility||this.isVisible(t))}static ɵfac=function(e){return new(e||n)};static ɵprov=$r$1({token:n,factory:n.ɵfac})}return n})();function lm(n){try{return n.frameElement}catch{return null}}function dm(n){return!!(n.offsetWidth||n.offsetHeight||typeof n.getClientRects==`function`&&n.getClientRects().length)}function um(n){let r=n.nodeName.toLowerCase();return r===`input`||r===`select`||r===`button`||r===`textarea`}function hm(n){return pm(n)&&n.type==`hidden`}function mm(n){return fm(n)&&n.hasAttribute(`href`)}function pm(n){return n.nodeName.toLowerCase()==`input`}function fm(n){return n.nodeName.toLowerCase()==`a`}function Yc(n){if(!n.hasAttribute(`tabindex`)||n.tabIndex===void 0)return!1;let r=n.getAttribute(`tabindex`);return!!(r&&!isNaN(parseInt(r,10)))}function Wc(n){if(!Yc(n))return null;let r=parseInt(n.getAttribute(`tabindex`)||``,10);return isNaN(r)?-1:r}function gm(n){let r=n.nodeName.toLowerCase(),t=r===`input`&&n.type;return t===`text`||t===`password`||r===`select`||r===`textarea`}function bm(n){return hm(n)?!1:um(n)||mm(n)||n.hasAttribute(`contenteditable`)||Yc(n)}function vm(n){return n.ownerDocument&&n.ownerDocument.defaultView||window}var gi=class{_element;_checker;_ngZone;_document;_injector;_startAnchor=null;_endAnchor=null;_hasAttached=!1;startAnchorListener=()=>{!this.focusLastTabbableElement()&&this._checker.isFocusable(this._element)&&this._element.focus()};endAnchorListener=()=>{!this.focusFirstTabbableElement()&&this._checker.isFocusable(this._element)&&this._element.focus()};get enabled(){return this._enabled}set enabled(r){this._enabled=r,this._startAnchor&&this._endAnchor&&(this._toggleAnchorTabIndex(r,this._startAnchor),this._toggleAnchorTabIndex(r,this._endAnchor))}_enabled=!0;constructor(r,t,e,i,o=!1,a){this._element=r,this._checker=t,this._ngZone=e,this._document=i,this._injector=a,o||this.attachAnchors()}destroy(){let r=this._startAnchor,t=this._endAnchor;r&&(r.removeEventListener(`focus`,this.startAnchorListener),r.remove()),t&&(t.removeEventListener(`focus`,this.endAnchorListener),t.remove()),this._startAnchor=this._endAnchor=null,this._hasAttached=!1}attachAnchors(){return this._hasAttached?!0:(this._ngZone.runOutsideAngular(()=>{this._startAnchor||(this._startAnchor=this._createAnchor(),this._startAnchor.addEventListener(`focus`,this.startAnchorListener)),this._endAnchor||(this._endAnchor=this._createAnchor(),this._endAnchor.addEventListener(`focus`,this.endAnchorListener))}),this._element.parentNode&&(this._element.parentNode.insertBefore(this._startAnchor,this._element),this._element.parentNode.insertBefore(this._endAnchor,this._element.nextSibling),this._hasAttached=!0),this._hasAttached)}focusInitialElementWhenReady(r){return new Promise(t=>{this._executeOnStable(()=>t(this.focusInitialElement(r)))})}focusFirstTabbableElementWhenReady(r){return new Promise(t=>{this._executeOnStable(()=>t(this.focusFirstTabbableElement(r)))})}focusLastTabbableElementWhenReady(r){return new Promise(t=>{this._executeOnStable(()=>t(this.focusLastTabbableElement(r)))})}_getRegionBoundary(r){let t=this._element.querySelectorAll(`[cdk-focus-region-${r}], [cdkFocusRegion${r}], [cdk-focus-${r}]`);return r==`start`?t.length?t[0]:this._getFirstTabbableElement(this._element):t.length?t[t.length-1]:this._getLastTabbableElement(this._element)}focusInitialElement(r){let t=this._element.querySelector(`[cdk-focus-initial], [cdkFocusInitial]`);if(t){if(!this._checker.isFocusable(t)){let e=this._getFirstTabbableElement(t);return e?.focus(r),!!e}return t.focus(r),!0}return this.focusFirstTabbableElement(r)}focusFirstTabbableElement(r){let t=this._getRegionBoundary(`start`);return t&&t.focus(r),!!t}focusLastTabbableElement(r){let t=this._getRegionBoundary(`end`);return t&&t.focus(r),!!t}hasAttached(){return this._hasAttached}_getFirstTabbableElement(r){if(this._checker.isFocusable(r)&&this._checker.isTabbable(r))return r;let t=r.children;for(let e=0;e<t.length;e++){let i=t[e].nodeType===this._document.ELEMENT_NODE?this._getFirstTabbableElement(t[e]):null;if(i)return i}return null}_getLastTabbableElement(r){if(this._checker.isFocusable(r)&&this._checker.isTabbable(r))return r;let t=r.children;for(let e=t.length-1;e>=0;e--){let i=t[e].nodeType===this._document.ELEMENT_NODE?this._getLastTabbableElement(t[e]):null;if(i)return i}return null}_createAnchor(){let r=this._document.createElement(`div`);return this._toggleAnchorTabIndex(this._enabled,r),r.classList.add(`cdk-visually-hidden`),r.classList.add(`cdk-focus-trap-anchor`),r.setAttribute(`aria-hidden`,`true`),r}_toggleAnchorTabIndex(r,t){r?t.setAttribute(`tabindex`,`0`):t.removeAttribute(`tabindex`)}toggleAnchors(r){this._startAnchor&&this._endAnchor&&(this._toggleAnchorTabIndex(r,this._startAnchor),this._toggleAnchorTabIndex(r,this._endAnchor))}_executeOnStable(r){Dh$1(r,{injector:this._injector})}};var ym=(()=>{class n{_checker=v(Gc);_ngZone=v(Fe$1);_document=v(mt$1);_injector=v(se$1);constructor(){v(_t).load(di)}create(t,e=!1){return new gi(t,this._checker,this._ngZone,this._document,e,this._injector)}static ɵfac=function(e){return new(e||n)};static ɵprov=$r$1({token:n,factory:n.ɵfac})}return n})();var Xc=new S$1(`liveAnnouncerElement`,{providedIn:`root`,factory:()=>null});var qc=new S$1(`LIVE_ANNOUNCER_DEFAULT_OPTIONS`);var _m=0;var Sm=(()=>{class n{_ngZone=v(Fe$1);_defaultOptions=v(qc,{optional:!0});_liveElement;_document=v(mt$1);_sanitizer=v(Cn$1);_previousTimeout;_currentPromise;_currentResolve;constructor(){let t=v(Xc,{optional:!0});this._liveElement=t||this._createLiveElement()}announce(t,...e){let i=this._defaultOptions,o,a;return e.length===1&&typeof e[0]==`number`?a=e[0]:[o,a]=e,this.clear(),clearTimeout(this._previousTimeout),o||(o=i&&i.politeness?i.politeness:`polite`),a==null&&i&&(a=i.duration),this._liveElement.setAttribute(`aria-live`,o),this._liveElement.id&&this._exposeAnnouncerToModals(this._liveElement.id),this._ngZone.runOutsideAngular(()=>(this._currentPromise||(this._currentPromise=new Promise(s=>this._currentResolve=s)),clearTimeout(this._previousTimeout),this._previousTimeout=setTimeout(()=>{!t||typeof t==`string`?this._liveElement.textContent=t:xc(this._liveElement,t,this._sanitizer),typeof a==`number`&&(this._previousTimeout=setTimeout(()=>this.clear(),a)),this._currentResolve?.(),this._currentPromise=this._currentResolve=void 0},100),this._currentPromise))}clear(){this._liveElement&&(this._liveElement.textContent=``)}ngOnDestroy(){clearTimeout(this._previousTimeout),this._liveElement?.remove(),this._liveElement=null,this._currentResolve?.(),this._currentPromise=this._currentResolve=void 0}_createLiveElement(){let t=`cdk-live-announcer-element`,e=this._document.getElementsByClassName(t),i=this._document.createElement(`div`);for(let o=0;o<e.length;o++)e[o].remove();return i.classList.add(t),i.classList.add(`cdk-visually-hidden`),i.setAttribute(`aria-atomic`,`true`),i.setAttribute(`aria-live`,`polite`),i.id=`cdk-live-announcer-${_m++}`,this._document.body.appendChild(i),i}_exposeAnnouncerToModals(t){let e=this._document.querySelectorAll(`body > .cdk-overlay-container [aria-modal="true"]`);for(let i=0;i<e.length;i++){let o=e[i],a=o.getAttribute(`aria-owns`);a?a.indexOf(t)===-1&&o.setAttribute(`aria-owns`,a+` `+t):o.setAttribute(`aria-owns`,t)}}static ɵfac=function(e){return new(e||n)};static ɵprov=$r$1({token:n,factory:n.ɵfac})}return n})();var wm=200;var bi=class{_letterKeyStream=new ee;_items=[];_selectedItemIndex=-1;_pressedLetters=[];_skipPredicateFn;_selectedItem=new ee;selectedItem=this._selectedItem;constructor(r,t){let e=typeof t?.debounceInterval==`number`?t.debounceInterval:wm;t?.skipPredicate&&(this._skipPredicateFn=t.skipPredicate),this.setItems(r),this._setupKeyHandler(e)}destroy(){this._pressedLetters=[],this._letterKeyStream.complete(),this._selectedItem.complete()}setCurrentSelectedItemIndex(r){this._selectedItemIndex=r}setItems(r){this._items=r}handleKey(r){let t=r.keyCode;r.key&&r.key.length===1?this._letterKeyStream.next(r.key.toLocaleUpperCase()):(t>=65&&t<=90||t>=48&&t<=57)&&this._letterKeyStream.next(String.fromCharCode(t))}isTyping(){return this._pressedLetters.length>0}reset(){this._pressedLetters=[]}_setupKeyHandler(r){this._letterKeyStream.pipe(ju$1(t=>this._pressedLetters.push(t)),Qy(r),rr(()=>this._pressedLetters.length>0),Ue(()=>this._pressedLetters.join(``).toLocaleUpperCase())).subscribe(t=>{for(let e=1;e<this._items.length+1;e++){let i=(this._selectedItemIndex+e)%this._items.length,o=this._items[i];if(!this._skipPredicateFn?.(o)&&o.getLabel?.().toLocaleUpperCase().trim().indexOf(t)===0){this._selectedItem.next(o);break}}this._pressedLetters=[]})}};function Kc(n,...r){return r.length?r.some(t=>n[t]):n.altKey||n.shiftKey||n.ctrlKey||n.metaKey}var vi=class{_items;_activeItemIndex=Et(-1);_activeItem=Et(null);_wrap=!1;_typeaheadSubscription=K$1.EMPTY;_itemChangesSubscription;_vertical=!0;_horizontal=null;_allowedModifierKeys=[];_homeAndEnd=!1;_pageUpAndDown={enabled:!1,delta:10};_effectRef;_typeahead;_skipPredicateFn=r=>r.disabled;constructor(r,t){this._items=r,r instanceof Mi$1?this._itemChangesSubscription=r.changes.subscribe(e=>this._itemsChanged(e.toArray())):Nr$1(r)&&(this._effectRef=ja$1(()=>this._itemsChanged(r()),{injector:t}))}tabOut=new ee;change=new ee;skipPredicate(r){return this._skipPredicateFn=r,this}withWrap(r=!0){return this._wrap=r,this}withVerticalOrientation(r=!0){return this._vertical=r,this}withHorizontalOrientation(r){return this._horizontal=r,this}withAllowedModifierKeys(r){return this._allowedModifierKeys=r,this}withTypeAhead(r=200){this._typeaheadSubscription.unsubscribe();let t=this._getItemsArray();return this._typeahead=new bi(t,{debounceInterval:typeof r==`number`?r:void 0,skipPredicate:e=>this._skipPredicateFn(e)}),this._typeaheadSubscription=this._typeahead.selectedItem.subscribe(e=>{this.setActiveItem(e)}),this}cancelTypeahead(){return this._typeahead?.reset(),this}withHomeAndEnd(r=!0){return this._homeAndEnd=r,this}withPageUpDown(r=!0,t=10){return this._pageUpAndDown={enabled:r,delta:t},this}setActiveItem(r){let t=this._activeItem();this.updateActiveItem(r),this._activeItem()!==t&&this.change.next(this._activeItemIndex())}onKeydown(r){let t=r.keyCode,i=[`altKey`,`ctrlKey`,`metaKey`,`shiftKey`].every(o=>!r[o]||this._allowedModifierKeys.indexOf(o)>-1);switch(t){case 9:this.tabOut.next();return;case 40:if(this._vertical&&i){this.setNextItemActive();break}else return;case 38:if(this._vertical&&i){this.setPreviousItemActive();break}else return;case 39:if(this._horizontal&&i){this._horizontal===`rtl`?this.setPreviousItemActive():this.setNextItemActive();break}else return;case 37:if(this._horizontal&&i){this._horizontal===`rtl`?this.setNextItemActive():this.setPreviousItemActive();break}else return;case 36:if(this._homeAndEnd&&i){this.setFirstItemActive();break}else return;case 35:if(this._homeAndEnd&&i){this.setLastItemActive();break}else return;case 33:if(this._pageUpAndDown.enabled&&i){let o=this._activeItemIndex()-this._pageUpAndDown.delta;this._setActiveItemByIndex(o>0?o:0,1);break}else return;case 34:if(this._pageUpAndDown.enabled&&i){let o=this._activeItemIndex()+this._pageUpAndDown.delta,a=this._getItemsArray().length;this._setActiveItemByIndex(o<a?o:a-1,-1);break}else return;default:(i||Kc(r,`shiftKey`))&&this._typeahead?.handleKey(r);return}this._typeahead?.reset(),r.preventDefault()}get activeItemIndex(){return this._activeItemIndex()}get activeItem(){return this._activeItem()}isTyping(){return!!this._typeahead&&this._typeahead.isTyping()}setFirstItemActive(){this._setActiveItemByIndex(0,1)}setLastItemActive(){this._setActiveItemByIndex(this._getItemsArray().length-1,-1)}setNextItemActive(){this._activeItemIndex()<0?this.setFirstItemActive():this._setActiveItemByDelta(1)}setPreviousItemActive(){this._activeItemIndex()<0&&this._wrap?this.setLastItemActive():this._setActiveItemByDelta(-1)}updateActiveItem(r){let t=this._getItemsArray(),e=typeof r==`number`?r:t.indexOf(r),i=t[e];this._activeItem.set(i??null),this._activeItemIndex.set(e),this._typeahead?.setCurrentSelectedItemIndex(e)}destroy(){this._typeaheadSubscription.unsubscribe(),this._itemChangesSubscription?.unsubscribe(),this._effectRef?.destroy(),this._typeahead?.destroy(),this.tabOut.complete(),this.change.complete()}_setActiveItemByDelta(r){this._wrap?this._setActiveInWrapMode(r):this._setActiveInDefaultMode(r)}_setActiveInWrapMode(r){let t=this._getItemsArray();for(let e=1;e<=t.length;e++){let i=(this._activeItemIndex()+r*e+t.length)%t.length,o=t[i];if(!this._skipPredicateFn(o)){this.setActiveItem(i);return}}}_setActiveInDefaultMode(r){this._setActiveItemByIndex(this._activeItemIndex()+r,r)}_setActiveItemByIndex(r,t){let e=this._getItemsArray();if(e[r]){for(;this._skipPredicateFn(e[r]);)if(r+=t,!e[r])return;this.setActiveItem(r)}}_getItemsArray(){return Nr$1(this._items)?this._items():this._items instanceof Mi$1?this._items.toArray():this._items}_itemsChanged(r){this._typeahead?.setItems(r);let t=this._activeItem();if(t){let e=r.indexOf(t);e>-1&&e!==this._activeItemIndex()&&(this._activeItemIndex.set(e),this._typeahead?.setCurrentSelectedItemIndex(e))}}};var qo=class extends vi{_origin=`program`;setFocusOrigin(r){return this._origin=r,this}setActiveItem(r){super.setActiveItem(r),this.activeItem&&this.activeItem.focus(this._origin)}};var Zc=/* @__PURE__ */ new Map;var Yn=class n{_appId=v(It);static _infix=`a${Math.floor(Math.random()*1e5).toString()}`;getId(r,t=!1){this._appId!==`ng`&&(r+=this._appId);let e=Zc.get(r);return e===void 0?e=0:e++,Zc.set(r,e),`${r}${t?n._infix+`-`:``}${e}`}static ɵfac=function(t){return new(t||n)};static ɵprov=$r$1({token:n,factory:n.ɵfac})};var Qc=` `;function Cm(n,r,t){let e=_i(n,r);t=t.trim(),!e.some(i=>i.trim()===t)&&(e.push(t),n.setAttribute(r,e.join(Qc)))}function Dm(n,r,t){let e=_i(n,r);t=t.trim();let i=e.filter(o=>o!==t);i.length?n.setAttribute(r,i.join(Qc)):n.removeAttribute(r)}function _i(n,r){return n.getAttribute(r)?.match(/\S+/g)??[]}var tl=`cdk-describedby-message`;var yi=`cdk-describedby-host`;var Zo=0;var rS=(()=>{class n{_platform=v(V$1);_document=v(mt$1);_messageRegistry=/* @__PURE__ */ new Map;_messagesContainer=null;_id=`${Zo++}`;constructor(){v(_t).load(di),this._id=v(It)+`-`+Zo++}describe(t,e,i){if(!this._canBeDescribed(t,e))return;let o=Ko(e,i);typeof e!=`string`?(Jc(e,this._id),this._messageRegistry.set(o,{messageElement:e,referenceCount:0})):this._messageRegistry.has(o)||this._createMessageElement(e,i),this._isElementDescribedByMessage(t,o)||this._addMessageReference(t,o)}removeDescription(t,e,i){if(!e||!this._isElementNode(t))return;let o=Ko(e,i);if(this._isElementDescribedByMessage(t,o)&&this._removeMessageReference(t,o),typeof e==`string`){let a=this._messageRegistry.get(o);a&&a.referenceCount===0&&this._deleteMessageElement(o)}this._messagesContainer?.childNodes.length===0&&(this._messagesContainer.remove(),this._messagesContainer=null)}ngOnDestroy(){let t=this._document.querySelectorAll(`[${yi}="${this._id}"]`);for(let e=0;e<t.length;e++)this._removeCdkDescribedByReferenceIds(t[e]),t[e].removeAttribute(yi);this._messagesContainer?.remove(),this._messagesContainer=null,this._messageRegistry.clear()}_createMessageElement(t,e){let i=this._document.createElement(`div`);Jc(i,this._id),i.textContent=t,e&&i.setAttribute(`role`,e),this._createMessagesContainer(),this._messagesContainer.appendChild(i),this._messageRegistry.set(Ko(t,e),{messageElement:i,referenceCount:0})}_deleteMessageElement(t){this._messageRegistry.get(t)?.messageElement?.remove(),this._messageRegistry.delete(t)}_createMessagesContainer(){if(this._messagesContainer)return;let t=`cdk-describedby-message-container`,e=this._document.querySelectorAll(`.${t}[platform="server"]`);for(let o=0;o<e.length;o++)e[o].remove();let i=this._document.createElement(`div`);i.style.visibility=`hidden`,i.classList.add(t),i.classList.add(`cdk-visually-hidden`),this._platform.isBrowser||i.setAttribute(`platform`,`server`),this._document.body.appendChild(i),this._messagesContainer=i}_removeCdkDescribedByReferenceIds(t){let e=_i(t,`aria-describedby`).filter(i=>i.indexOf(tl)!=0);t.setAttribute(`aria-describedby`,e.join(` `))}_addMessageReference(t,e){let i=this._messageRegistry.get(e);Cm(t,`aria-describedby`,i.messageElement.id),t.setAttribute(yi,this._id),i.referenceCount++}_removeMessageReference(t,e){let i=this._messageRegistry.get(e);i.referenceCount--,Dm(t,`aria-describedby`,i.messageElement.id),t.removeAttribute(yi)}_isElementDescribedByMessage(t,e){let i=_i(t,`aria-describedby`),o=this._messageRegistry.get(e),a=o&&o.messageElement.id;return!!a&&i.indexOf(a)!=-1}_canBeDescribed(t,e){if(!this._isElementNode(t))return!1;if(e&&typeof e==`object`)return!0;let i=e==null?``:`${e}`.trim(),o=t.getAttribute(`aria-label`);return i?!o||o.trim()!==i:!1}_isElementNode(t){return t.nodeType===this._document.ELEMENT_NODE}static ɵfac=function(e){return new(e||n)};static ɵprov=$r$1({token:n,factory:n.ɵfac})}return n})();function Ko(n,r){return typeof n==`string`?`${r||``}/${n}`:n}function Jc(n,r){n.id||(n.id=`${tl}-${r}-${Zo++}`)}var Ot=(function(n){return n[n.NORMAL=0]=`NORMAL`,n[n.NEGATED=1]=`NEGATED`,n[n.INVERTED=2]=`INVERTED`,n})(Ot||{});var Si;var Ne;function wi(){if(Ne==null){if(typeof document!=`object`||!document||typeof Element!=`function`||!Element)return Ne=!1,Ne;if(document.documentElement?.style&&`scrollBehavior`in document.documentElement.style)Ne=!0;else{let n=Element.prototype.scrollTo;n?Ne=!/\{\s*\[native code\]\s*\}/.test(n.toString()):Ne=!1}}return Ne}function cn(){if(typeof document!=`object`||!document)return Ot.NORMAL;if(Si==null){let n=document.createElement(`div`),r=n.style;n.dir=`rtl`,r.width=`1px`,r.overflow=`auto`,r.visibility=`hidden`,r.pointerEvents=`none`,r.position=`absolute`;let t=document.createElement(`div`),e=t.style;e.width=`2px`,e.height=`1px`,n.appendChild(t),document.body.appendChild(n),Si=Ot.NORMAL,n.scrollLeft===0&&(n.scrollLeft=1,Si=n.scrollLeft===0?Ot.NEGATED:Ot.INVERTED),n.remove()}return Si}function Jo(){return typeof __karma__<`u`&&!!__karma__||typeof jasmine<`u`&&!!jasmine||typeof jest<`u`&&!!jest||typeof Mocha<`u`&&!!Mocha}var ln;var el=[`color`,`button`,`checkbox`,`date`,`datetime-local`,`email`,`file`,`hidden`,`image`,`month`,`number`,`password`,`radio`,`range`,`reset`,`search`,`submit`,`tel`,`text`,`time`,`url`,`week`];function hS(){if(ln)return ln;if(typeof document!=`object`||!document)return ln=new Set(el),ln;let n=document.createElement(`input`);return ln=new Set(el.filter(r=>(n.setAttribute(`type`,r),n.type===r))),ln}var bS={XSmall:`(max-width: 599.98px)`,Small:`(min-width: 600px) and (max-width: 959.98px)`,Medium:`(min-width: 960px) and (max-width: 1279.98px)`,Large:`(min-width: 1280px) and (max-width: 1919.98px)`,XLarge:`(min-width: 1920px)`,Handset:`(max-width: 599.98px) and (orientation: portrait), (max-width: 959.98px) and (orientation: landscape)`,Tablet:`(min-width: 600px) and (max-width: 839.98px) and (orientation: portrait), (min-width: 960px) and (max-width: 1279.98px) and (orientation: landscape)`,Web:`(min-width: 840px) and (orientation: portrait), (min-width: 1280px) and (orientation: landscape)`,HandsetPortrait:`(max-width: 599.98px) and (orientation: portrait)`,TabletPortrait:`(min-width: 600px) and (max-width: 839.98px) and (orientation: portrait)`,WebPortrait:`(min-width: 840px) and (orientation: portrait)`,HandsetLandscape:`(max-width: 959.98px) and (orientation: landscape)`,TabletLandscape:`(min-width: 960px) and (max-width: 1279.98px) and (orientation: landscape)`,WebLandscape:`(min-width: 1280px) and (orientation: landscape)`};var Em=new S$1(`MATERIAL_ANIMATIONS`);var nl=null;function Rm(){return v(Em,{optional:!0})?.animationsDisabled||v(Zv,{optional:!0})===`NoopAnimations`?`di-disabled`:(nl??=v(fi).matchMedia(`(prefers-reduced-motion)`).matches,nl?`reduced-motion`:`enabled`)}function dn(){return Rm()!==`enabled`}function H(n){return n==null?``:typeof n==`string`?n:`${n}px`}function DS(n){return n!=null&&`${n}`!=`false`}var wt=(function(n){return n[n.FADING_IN=0]=`FADING_IN`,n[n.VISIBLE=1]=`VISIBLE`,n[n.FADING_OUT=2]=`FADING_OUT`,n[n.HIDDEN=3]=`HIDDEN`,n})(wt||{});var Qo=class{_renderer;element;config;_animationForciblyDisabledThroughCss;state=wt.HIDDEN;constructor(r,t,e,i=!1){this._renderer=r,this.element=t,this.config=e,this._animationForciblyDisabledThroughCss=i}fadeOut(){this._renderer.fadeOutRipple(this)}};var rl=an$1({passive:!0,capture:!0});var ta=class{_events=/* @__PURE__ */ new Map;addHandler(r,t,e,i){let o=this._events.get(t);if(o){let a=o.get(e);a?a.add(i):o.set(e,/* @__PURE__ */ new Set([i]))}else this._events.set(t,/* @__PURE__ */ new Map([[e,/* @__PURE__ */ new Set([i])]])),r.runOutsideAngular(()=>{document.addEventListener(t,this._delegateEventHandler,rl)})}removeHandler(r,t,e){let i=this._events.get(r);if(!i)return;let o=i.get(t);o&&(o.delete(e),o.size===0&&i.delete(t),i.size===0&&(this._events.delete(r),document.removeEventListener(r,this._delegateEventHandler,rl)))}_delegateEventHandler=r=>{let t=st$1(r);t&&this._events.get(r.type)?.forEach((e,i)=>{(i===t||i.contains(t))&&e.forEach(o=>o.handleEvent(r))})}};var Xn={enterDuration:225,exitDuration:150};var xm=800;var il=an$1({passive:!0,capture:!0});var ol=[`mousedown`,`touchstart`];var al=[`mouseup`,`mouseleave`,`touchend`,`touchcancel`];var Im=(()=>{class n{static ɵfac=function(e){return new(e||n)};static ɵcmp=aw({type:n,selectors:[[`ng-component`]],hostAttrs:[`mat-ripple-style-loader`,``],decls:0,vars:0,template:function(e,i){},styles:[`.mat-ripple {
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
`],encapsulation:2})}return n})();var qn=class n{_target;_ngZone;_platform;_containerElement;_triggerElement=null;_isPointerDown=!1;_activeRipples=/* @__PURE__ */ new Map;_mostRecentTransientRipple=null;_lastTouchStartEvent;_pointerUpEventsRegistered=!1;_containerRect=null;static _eventManager=new ta;constructor(r,t,e,i,o){this._target=r,this._ngZone=t,this._platform=i,i.isBrowser&&(this._containerElement=St(e)),o&&o.get(_t).load(Im)}fadeInRipple(r,t,e={}){let i=this._containerRect=this._containerRect||this._containerElement.getBoundingClientRect(),o=z(z({},Xn),e.animation);e.centered&&(r=i.left+i.width/2,t=i.top+i.height/2);let a=e.radius||Mm(r,t,i),s=r-i.left,c=t-i.top,d=o.enterDuration,u=document.createElement(`div`);u.classList.add(`mat-ripple-element`),u.style.left=`${s-a}px`,u.style.top=`${c-a}px`,u.style.height=`${a*2}px`,u.style.width=`${a*2}px`,e.color!=null&&(u.style.backgroundColor=e.color),u.style.transitionDuration=`${d}ms`,this._containerElement.appendChild(u);let h=window.getComputedStyle(u),m=h.transitionProperty,b=h.transitionDuration,w=m===`none`||b===`0s`||b===`0s, 0s`||i.width===0&&i.height===0,D=new Qo(this,u,e,w);u.style.transform=`scale3d(1, 1, 1)`,D.state=wt.FADING_IN,e.persistent||(this._mostRecentTransientRipple=D);let E=null;return!w&&(d||o.exitDuration)&&this._ngZone.runOutsideAngular(()=>{let R=()=>{E&&(E.fallbackTimer=null),clearTimeout(j),this._finishRippleTransition(D)},k=()=>this._destroyRipple(D),j=setTimeout(k,d+100);u.addEventListener(`transitionend`,R),u.addEventListener(`transitioncancel`,k),E={onTransitionEnd:R,onTransitionCancel:k,fallbackTimer:j}}),this._activeRipples.set(D,E),(w||!d)&&this._finishRippleTransition(D),D}fadeOutRipple(r){if(r.state===wt.FADING_OUT||r.state===wt.HIDDEN)return;let t=r.element,e=z(z({},Xn),r.config.animation);t.style.transitionDuration=`${e.exitDuration}ms`,t.style.opacity=`0`,r.state=wt.FADING_OUT,(r._animationForciblyDisabledThroughCss||!e.exitDuration)&&this._finishRippleTransition(r)}fadeOutAll(){this._getActiveRipples().forEach(r=>r.fadeOut())}fadeOutAllNonPersistent(){this._getActiveRipples().forEach(r=>{r.config.persistent||r.fadeOut()})}setupTriggerEvents(r){let t=St(r);!this._platform.isBrowser||!t||t===this._triggerElement||(this._removeTriggerEvents(),this._triggerElement=t,ol.forEach(e=>{n._eventManager.addHandler(this._ngZone,e,t,this)}))}handleEvent(r){r.type===`mousedown`?this._onMousedown(r):r.type===`touchstart`?this._onTouchStart(r):this._onPointerUp(),this._pointerUpEventsRegistered||(this._ngZone.runOutsideAngular(()=>{al.forEach(t=>{this._triggerElement.addEventListener(t,this,il)})}),this._pointerUpEventsRegistered=!0)}_finishRippleTransition(r){r.state===wt.FADING_IN?this._startFadeOutTransition(r):r.state===wt.FADING_OUT&&this._destroyRipple(r)}_startFadeOutTransition(r){let t=r===this._mostRecentTransientRipple,{persistent:e}=r.config;r.state=wt.VISIBLE,!e&&(!t||!this._isPointerDown)&&r.fadeOut()}_destroyRipple(r){let t=this._activeRipples.get(r)??null;this._activeRipples.delete(r),this._activeRipples.size||(this._containerRect=null),r===this._mostRecentTransientRipple&&(this._mostRecentTransientRipple=null),r.state=wt.HIDDEN,t!==null&&(r.element.removeEventListener(`transitionend`,t.onTransitionEnd),r.element.removeEventListener(`transitioncancel`,t.onTransitionCancel),t.fallbackTimer!==null&&clearTimeout(t.fallbackTimer)),r.element.remove()}_onMousedown(r){let t=Hn(r),e=this._lastTouchStartEvent&&Date.now()<this._lastTouchStartEvent+xm;!this._target.rippleDisabled&&!t&&!e&&(this._isPointerDown=!0,this.fadeInRipple(r.clientX,r.clientY,this._target.rippleConfig))}_onTouchStart(r){if(!this._target.rippleDisabled&&!$n(r)){this._lastTouchStartEvent=Date.now(),this._isPointerDown=!0;let t=r.changedTouches;if(t)for(let e=0;e<t.length;e++)this.fadeInRipple(t[e].clientX,t[e].clientY,this._target.rippleConfig)}}_onPointerUp(){this._isPointerDown&&(this._isPointerDown=!1,this._getActiveRipples().forEach(r=>{let t=r.state===wt.VISIBLE||r.config.terminateOnPointerUp&&r.state===wt.FADING_IN;!r.config.persistent&&t&&r.fadeOut()}))}_getActiveRipples(){return Array.from(this._activeRipples.keys())}_removeTriggerEvents(){let r=this._triggerElement;r&&(ol.forEach(t=>n._eventManager.removeHandler(t,r,this)),this._pointerUpEventsRegistered&&(al.forEach(t=>r.removeEventListener(t,this,il)),this._pointerUpEventsRegistered=!1))}};function Mm(n,r,t){let e=Math.max(Math.abs(n-t.left),Math.abs(n-t.right)),i=Math.max(Math.abs(r-t.top),Math.abs(r-t.bottom));return Math.sqrt(e*e+i*i)}var ea=new S$1(`mat-ripple-global-options`);var LS=(()=>{class n{_elementRef=v(Wr$1);_animationsDisabled=dn();color;unbounded=!1;centered=!1;radius=0;animation;get disabled(){return this._disabled}set disabled(t){t&&this.fadeOutAllNonPersistent(),this._disabled=t,this._setupTriggerEventsIfEnabled()}_disabled=!1;get trigger(){return this._trigger||this._elementRef.nativeElement}set trigger(t){this._trigger=t,this._setupTriggerEventsIfEnabled()}_trigger;_rippleRenderer;_globalOptions;_isInitialized=!1;constructor(){let t=v(Fe$1),e=v(V$1),i=v(ea,{optional:!0}),o=v(se$1);this._globalOptions=i||{},this._rippleRenderer=new qn(this,t,this._elementRef,e,o)}ngOnInit(){this._isInitialized=!0,this._setupTriggerEventsIfEnabled()}ngOnDestroy(){this._rippleRenderer._removeTriggerEvents()}fadeOutAll(){this._rippleRenderer.fadeOutAll()}fadeOutAllNonPersistent(){this._rippleRenderer.fadeOutAllNonPersistent()}get rippleConfig(){return{centered:this.centered,radius:this.radius,color:this.color,animation:z(z(z({},this._globalOptions.animation),this._animationsDisabled?{enterDuration:0,exitDuration:0}:{}),this.animation),terminateOnPointerUp:this._globalOptions.terminateOnPointerUp}}get rippleDisabled(){return this.disabled||!!this._globalOptions.disabled}_setupTriggerEventsIfEnabled(){!this.disabled&&this._isInitialized&&this._rippleRenderer.setupTriggerEvents(this.trigger)}launch(t,e=0,i){return typeof t==`number`?this._rippleRenderer.fadeInRipple(t,e,z(z({},this.rippleConfig),i)):this._rippleRenderer.fadeInRipple(0,0,z(z({},this.rippleConfig),t))}static ɵfac=function(e){return new(e||n)};static ɵdir=fw({type:n,selectors:[[``,`mat-ripple`,``],[``,`matRipple`,``]],hostAttrs:[1,`mat-ripple`],hostVars:2,hostBindings:function(e,i){e&2&&pm$1(`mat-ripple-unbounded`,i.unbounded)},inputs:{color:[0,`matRippleColor`,`color`],unbounded:[0,`matRippleUnbounded`,`unbounded`],centered:[0,`matRippleCentered`,`centered`],radius:[0,`matRippleRadius`,`radius`],animation:[0,`matRippleAnimation`,`animation`],disabled:[0,`matRippleDisabled`,`disabled`],trigger:[0,`matRippleTrigger`,`trigger`]},exportAs:[`matRipple`]})}return n})();var Am={capture:!0};var Nm=[`focus`,`mousedown`,`mouseenter`,`touchstart`];var na=`mat-ripple-loader-uninitialized`;var ra=`mat-ripple-loader-class-name`;var sl=`mat-ripple-loader-centered`;var Ci=`mat-ripple-loader-disabled`;var cl=(()=>{class n{_document=v(mt$1);_animationsDisabled=dn();_globalRippleOptions=v(ea,{optional:!0});_platform=v(V$1);_ngZone=v(Fe$1);_injector=v(se$1);_eventCleanups;_hosts=/* @__PURE__ */ new Map;constructor(){let t=v(Vr$1).createRenderer(null,null);this._eventCleanups=this._ngZone.runOutsideAngular(()=>Nm.map(e=>t.listen(this._document,e,this._onInteraction,Am)))}ngOnDestroy(){let t=this._hosts.keys();for(let e of t)this.destroyRipple(e);this._eventCleanups.forEach(e=>e())}configureRipple(t,e){t.setAttribute(na,this._globalRippleOptions?.namespace??``),(e.className||!t.hasAttribute(ra))&&t.setAttribute(ra,e.className||``),e.centered&&t.setAttribute(sl,``),e.disabled&&t.setAttribute(Ci,``)}setDisabled(t,e){let i=this._hosts.get(t);i?(i.target.rippleDisabled=e,!e&&!i.hasSetUpEvents&&(i.hasSetUpEvents=!0,i.renderer.setupTriggerEvents(t))):e?t.setAttribute(Ci,``):t.removeAttribute(Ci)}_onInteraction=t=>{let e=st$1(t);if(e instanceof HTMLElement){let i=e.closest(`[${na}="${this._globalRippleOptions?.namespace??``}"]`);i&&this._createRipple(i)}};_createRipple(t){if(!this._document||this._hosts.has(t))return;t.querySelector(`.mat-ripple`)?.remove();let e=this._document.createElement(`span`);e.classList.add(`mat-ripple`,t.getAttribute(ra)),t.append(e);let i=this._globalRippleOptions,o=this._animationsDisabled?0:i?.animation?.enterDuration??Xn.enterDuration,a=this._animationsDisabled?0:i?.animation?.exitDuration??Xn.exitDuration,s={rippleDisabled:this._animationsDisabled||i?.disabled||t.hasAttribute(Ci),rippleConfig:{centered:t.hasAttribute(sl),terminateOnPointerUp:i?.terminateOnPointerUp,animation:{enterDuration:o,exitDuration:a}}},c=new qn(s,this._ngZone,e,this._platform,this._injector),d=!s.rippleDisabled;d&&c.setupTriggerEvents(t),this._hosts.set(t,{target:s,renderer:c,hasSetUpEvents:d}),t.removeAttribute(na)}destroyRipple(t){let e=this._hosts.get(t);e&&(e.renderer._removeTriggerEvents(),this._hosts.delete(t))}static ɵfac=function(e){return new(e||n)};static ɵprov=$r$1({token:n,factory:n.ɵfac})}return n})();var ll=(()=>{class n{static ɵfac=function(e){return new(e||n)};static ɵcmp=aw({type:n,selectors:[[`structural-styles`]],decls:0,vars:0,template:function(e,i){},styles:[`.mat-focus-indicator {
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
`],encapsulation:2})}return n})();var Tm=new S$1(`MAT_BUTTON_CONFIG`);function dl(n){return n==null?void 0:Sj(n)}var Kn=(()=>{class n{_elementRef=v(Wr$1);_ngZone=v(Fe$1);_animationsDisabled=dn();_config=v(Tm,{optional:!0});_focusMonitor=v(pi);_cleanupClick;_renderer=v(Ic$1);_rippleLoader=v(cl);_isAnchor;_isFab=!1;color;get disableRipple(){return this._disableRipple}set disableRipple(t){this._disableRipple=t,this._updateRippleDisabled()}_disableRipple=!1;get disabled(){return this._disabled}set disabled(t){this._disabled=t,this._updateRippleDisabled()}_disabled=!1;ariaDisabled;disabledInteractive;tabIndex;set _tabindex(t){this.tabIndex=t}showProgress=Ij(!1,{transform:Nj});constructor(){v(_t).load(ll);let t=this._elementRef.nativeElement;this._isAnchor=t.tagName===`A`,this.disabledInteractive=this._config?.disabledInteractive??!1,this.color=this._config?.color??null,this._rippleLoader?.configureRipple(t,{className:`mat-mdc-button-ripple`})}ngAfterViewInit(){this._focusMonitor.monitor(this._elementRef,!0),this._isAnchor&&this._setupAsAnchor()}ngOnDestroy(){this._cleanupClick?.(),this._focusMonitor.stopMonitoring(this._elementRef),this._rippleLoader?.destroyRipple(this._elementRef.nativeElement)}focus(t=`program`,e){t?this._focusMonitor.focusVia(this._elementRef.nativeElement,t,e):this._elementRef.nativeElement.focus(e)}_getAriaDisabled(){return this.ariaDisabled!=null?this.ariaDisabled:this._isAnchor?this.disabled||null:this.disabled&&this.disabledInteractive?!0:null}_getDisabledAttribute(){return this.disabledInteractive||!this.disabled?null:!0}_updateRippleDisabled(){this._rippleLoader?.setDisabled(this._elementRef.nativeElement,this.disableRipple||this.disabled)}_getTabIndex(){return this._isAnchor?this.disabled&&!this.disabledInteractive?-1:this.tabIndex:this.tabIndex}_setupAsAnchor(){this._cleanupClick=this._ngZone.runOutsideAngular(()=>this._renderer.listen(this._elementRef.nativeElement,`click`,t=>{this.disabled&&(t.preventDefault(),t.stopImmediatePropagation())}))}static ɵfac=function(e){return new(e||n)};static ɵdir=fw({type:n,hostAttrs:[1,`mat-mdc-button-base`],hostVars:15,hostBindings:function(e,i){e&2&&(qg(`disabled`,i._getDisabledAttribute())(`aria-disabled`,i._getAriaDisabled())(`tabindex`,i._getTabIndex()),jC(i.color?`mat-`+i.color:``),pm$1(`mat-mdc-button-progress-indicator-shown`,i.showProgress())(`mat-mdc-button-disabled`,i.disabled)(`mat-mdc-button-disabled-interactive`,i.disabledInteractive)(`mat-unthemed`,!i.color)(`_mat-animation-noopable`,i._animationsDisabled))},inputs:{color:`color`,disableRipple:[2,`disableRipple`,`disableRipple`,Nj],disabled:[2,`disabled`,`disabled`,Nj],ariaDisabled:[2,`aria-disabled`,`ariaDisabled`,Nj],disabledInteractive:[2,`disabledInteractive`,`disabledInteractive`,Nj],tabIndex:[2,`tabIndex`,`tabIndex`,dl],_tabindex:[2,`tabindex`,`_tabindex`,dl],showProgress:[1,`showProgress`]}})}return n})();var Om=(()=>{class n extends Kn{constructor(){super(),this._rippleLoader.configureRipple(this._elementRef.nativeElement,{centered:!0})}static ɵfac=function(e){return new(e||n)};static ɵcmp=(function(){let t=[`*`,[[``,`progressIndicator`,``]]],e=[`*`,`[progressIndicator]`];function i(o,a){o&1&&(kl(0,`div`,1),vC(1,1),Ll())}return aw({type:n,selectors:[[`button`,`mat-icon-button`,``],[`a`,`mat-icon-button`,``],[`button`,`matIconButton`,``],[`a`,`matIconButton`,``]],hostAttrs:[1,`mdc-icon-button`,`mat-mdc-icon-button`],exportAs:[`matButton`,`matAnchor`],features:[Og],ngContentSelectors:e,decls:5,vars:1,consts:[[1,`mat-mdc-button-persistent-ripple`,`mdc-icon-button__ripple`],[1,`mat-mdc-button-progress-indicator-container`],[1,`mat-focus-indicator`],[1,`mat-mdc-button-touch-target`]],template:function(a,s){a&1&&(yC(t),Yg(0,`span`,0),vC(1),eC(2,i,2,0,`div`,1),Yg(3,`span`,2)(4,`span`,3)),a&2&&(ID(2),nC(s.showProgress()?2:-1))},styles:[`.mat-mdc-icon-button {
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
`],encapsulation:2})})()}return n})();var ul=/* @__PURE__ */ new Map([[`text`,[`mat-mdc-button`]],[`filled`,[`mdc-button--unelevated`,`mat-mdc-unelevated-button`]],[`elevated`,[`mdc-button--raised`,`mat-mdc-raised-button`]],[`outlined`,[`mdc-button--outlined`,`mat-mdc-outlined-button`]],[`tonal`,[`mat-tonal-button`]]]);var d0=(()=>{class n extends Kn{get appearance(){return this._appearance}set appearance(t){this.setAppearance(t||this._config?.defaultAppearance||`text`)}_appearance=null;constructor(){super();let t=km(this._elementRef.nativeElement);t&&this.setAppearance(t)}setAppearance(t){if(t===this._appearance)return;let e=this._elementRef.nativeElement.classList,i=this._appearance?ul.get(this._appearance):null,o=ul.get(t);i&&e.remove(...i),e.add(...o),this._appearance=t}static ɵfac=function(e){return new(e||n)};static ɵcmp=(function(){let t=[[[``,8,`material-icons`,3,`iconPositionEnd`,``],[`mat-icon`,3,`iconPositionEnd`,``],[``,`matButtonIcon`,``,3,`iconPositionEnd`,``],[``,8,`material-symbols-outlined`,3,`iconPositionEnd`,``],[``,8,`material-symbols-rounded`,3,`iconPositionEnd`,``],[``,8,`material-symbols-sharp`,3,`iconPositionEnd`,``]],`*`,[[``,`iconPositionEnd`,``,8,`material-icons`],[`mat-icon`,`iconPositionEnd`,``],[``,`matButtonIcon`,``,`iconPositionEnd`,``],[``,`iconPositionEnd`,``,8,`material-symbols-outlined`],[``,`iconPositionEnd`,``,8,`material-symbols-rounded`],[``,`iconPositionEnd`,``,8,`material-symbols-sharp`]],[[``,`progressIndicator`,``]]],e=[`.material-icons:not([iconPositionEnd]), mat-icon:not([iconPositionEnd]), [matButtonIcon]:not([iconPositionEnd]), .material-symbols-outlined:not([iconPositionEnd]), .material-symbols-rounded:not([iconPositionEnd]), .material-symbols-sharp:not([iconPositionEnd])`,`*`,`.material-icons[iconPositionEnd], mat-icon[iconPositionEnd], [matButtonIcon][iconPositionEnd], .material-symbols-outlined[iconPositionEnd], .material-symbols-rounded[iconPositionEnd], .material-symbols-sharp[iconPositionEnd]`,`[progressIndicator]`];function i(o,a){o&1&&(kl(0,`div`,2),vC(1,3),Ll())}return aw({type:n,selectors:[[`button`,`matButton`,``],[`a`,`matButton`,``],[`button`,`mat-button`,``],[`button`,`mat-raised-button`,``],[`button`,`mat-flat-button`,``],[`button`,`mat-stroked-button`,``],[`a`,`mat-button`,``],[`a`,`mat-raised-button`,``],[`a`,`mat-flat-button`,``],[`a`,`mat-stroked-button`,``]],hostAttrs:[1,`mdc-button`],inputs:{appearance:[0,`matButton`,`appearance`]},exportAs:[`matButton`,`matAnchor`],features:[Og],ngContentSelectors:e,decls:8,vars:5,consts:[[1,`mat-mdc-button-persistent-ripple`],[1,`mdc-button__label`],[1,`mat-mdc-button-progress-indicator-container`],[1,`mat-focus-indicator`],[1,`mat-mdc-button-touch-target`]],template:function(a,s){a&1&&(yC(t),Yg(0,`span`,0),vC(1),kl(2,`span`,1),vC(3,1),Ll(),vC(4,2),eC(5,i,2,0,`div`,2),Yg(6,`span`,3)(7,`span`,4)),a&2&&(pm$1(`mdc-button__ripple`,!s._isFab)(`mdc-fab__ripple`,s._isFab),ID(5),nC(s.showProgress()?5:-1))},styles:[`.mat-mdc-button-base {
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
`],encapsulation:2})})()}return n})();function km(n){return n.hasAttribute(`mat-raised-button`)?`elevated`:n.hasAttribute(`mat-stroked-button`)?`outlined`:n.hasAttribute(`mat-flat-button`)?`filled`:n.hasAttribute(`mat-button`)?`text`:null}var hl=new S$1(`mat-mdc-fab-default-options`,{providedIn:`root`,factory:()=>Zn});var Zn={color:`accent`};var u0=(()=>{class n extends Kn{_options=v(hl,{optional:!0});_isFab=!0;extended=!1;constructor(){super(),this._options=this._options||Zn,this.color=this._options.color||Zn.color}static ɵfac=function(e){return new(e||n)};static ɵcmp=(function(){let t=[[[``,8,`material-icons`,3,`iconPositionEnd`,``],[`mat-icon`,3,`iconPositionEnd`,``],[``,`matButtonIcon`,``,3,`iconPositionEnd`,``],[``,8,`material-symbols-outlined`,3,`iconPositionEnd`,``],[``,8,`material-symbols-rounded`,3,`iconPositionEnd`,``],[``,8,`material-symbols-sharp`,3,`iconPositionEnd`,``]],`*`,[[``,`iconPositionEnd`,``,8,`material-icons`],[`mat-icon`,`iconPositionEnd`,``],[``,`matButtonIcon`,``,`iconPositionEnd`,``],[``,`iconPositionEnd`,``,8,`material-symbols-outlined`],[``,`iconPositionEnd`,``,8,`material-symbols-rounded`],[``,`iconPositionEnd`,``,8,`material-symbols-sharp`]],[[``,`progressIndicator`,``]]],e=[`.material-icons:not([iconPositionEnd]), mat-icon:not([iconPositionEnd]), [matButtonIcon]:not([iconPositionEnd]), .material-symbols-outlined:not([iconPositionEnd]), .material-symbols-rounded:not([iconPositionEnd]), .material-symbols-sharp:not([iconPositionEnd])`,`*`,`.material-icons[iconPositionEnd], mat-icon[iconPositionEnd], [matButtonIcon][iconPositionEnd], .material-symbols-outlined[iconPositionEnd], .material-symbols-rounded[iconPositionEnd], .material-symbols-sharp[iconPositionEnd]`,`[progressIndicator]`];function i(o,a){o&1&&(kl(0,`div`,2),vC(1,3),Ll())}return aw({type:n,selectors:[[`button`,`mat-fab`,``],[`a`,`mat-fab`,``],[`button`,`matFab`,``],[`a`,`matFab`,``]],hostAttrs:[1,`mdc-fab`,`mat-mdc-fab-base`,`mat-mdc-fab`],hostVars:4,hostBindings:function(a,s){a&2&&pm$1(`mdc-fab--extended`,s.extended)(`mat-mdc-extended-fab`,s.extended)},inputs:{extended:[2,`extended`,`extended`,Nj]},exportAs:[`matButton`,`matAnchor`],features:[Og],ngContentSelectors:e,decls:8,vars:5,consts:[[1,`mat-mdc-button-persistent-ripple`],[1,`mdc-button__label`],[1,`mat-mdc-button-progress-indicator-container`],[1,`mat-focus-indicator`],[1,`mat-mdc-button-touch-target`]],template:function(a,s){a&1&&(yC(t),Yg(0,`span`,0),vC(1),kl(2,`span`,1),vC(3,1),Ll(),vC(4,2),eC(5,i,2,0,`div`,2),Yg(6,`span`,3)(7,`span`,4)),a&2&&(pm$1(`mdc-button__ripple`,!s._isFab)(`mdc-fab__ripple`,s._isFab),ID(5),nC(s.showProgress()?5:-1))},styles:[`.mat-mdc-fab-base {
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
`],encapsulation:2})})()}return n})();var h0=(()=>{class n extends Kn{_options=v(hl,{optional:!0});_isFab=!0;constructor(){super(),this._options=this._options||Zn,this.color=this._options.color||Zn.color}static ɵfac=function(e){return new(e||n)};static ɵcmp=(function(){let t=[[[``,8,`material-icons`,3,`iconPositionEnd`,``],[`mat-icon`,3,`iconPositionEnd`,``],[``,`matButtonIcon`,``,3,`iconPositionEnd`,``],[``,8,`material-symbols-outlined`,3,`iconPositionEnd`,``],[``,8,`material-symbols-rounded`,3,`iconPositionEnd`,``],[``,8,`material-symbols-sharp`,3,`iconPositionEnd`,``]],`*`,[[``,`iconPositionEnd`,``,8,`material-icons`],[`mat-icon`,`iconPositionEnd`,``],[``,`matButtonIcon`,``,`iconPositionEnd`,``],[``,`iconPositionEnd`,``,8,`material-symbols-outlined`],[``,`iconPositionEnd`,``,8,`material-symbols-rounded`],[``,`iconPositionEnd`,``,8,`material-symbols-sharp`]],[[``,`progressIndicator`,``]]],e=[`.material-icons:not([iconPositionEnd]), mat-icon:not([iconPositionEnd]), [matButtonIcon]:not([iconPositionEnd]), .material-symbols-outlined:not([iconPositionEnd]), .material-symbols-rounded:not([iconPositionEnd]), .material-symbols-sharp:not([iconPositionEnd])`,`*`,`.material-icons[iconPositionEnd], mat-icon[iconPositionEnd], [matButtonIcon][iconPositionEnd], .material-symbols-outlined[iconPositionEnd], .material-symbols-rounded[iconPositionEnd], .material-symbols-sharp[iconPositionEnd]`,`[progressIndicator]`];function i(o,a){o&1&&(kl(0,`div`,2),vC(1,3),Ll())}return aw({type:n,selectors:[[`button`,`mat-mini-fab`,``],[`a`,`mat-mini-fab`,``],[`button`,`matMiniFab`,``],[`a`,`matMiniFab`,``]],hostAttrs:[1,`mdc-fab`,`mat-mdc-fab-base`,`mdc-fab--mini`,`mat-mdc-mini-fab`],exportAs:[`matButton`,`matAnchor`],features:[Og],ngContentSelectors:e,decls:8,vars:5,consts:[[1,`mat-mdc-button-persistent-ripple`],[1,`mdc-button__label`],[1,`mat-mdc-button-progress-indicator-container`],[1,`mat-focus-indicator`],[1,`mat-mdc-button-touch-target`]],template:function(a,s){a&1&&(yC(t),Yg(0,`span`,0),vC(1),kl(2,`span`,1),vC(3,1),Ll(),vC(4,2),eC(5,i,2,0,`div`,2),Yg(6,`span`,3)(7,`span`,4)),a&2&&(pm$1(`mdc-button__ripple`,!s._isFab)(`mdc-fab__ripple`,s._isFab),ID(5),nC(s.showProgress()?5:-1))},styles:[`.mat-mdc-fab-base {
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
`],encapsulation:2})})()}return n})();var ml=class n{httpClient=v(we$1);isBrowser=vr(v(Yv));_isAuthenticated=Et(!1);isAuthenticated=it$2(()=>this.myIdentityInfo.hasValue());myIdentityInfo=po(()=>this.isBrowser?`/api/identity/CheckAuthentication`:void 0,{parse:r=>r===null?void 0:r});getUsername_Url=`/api/identity/GetUsername?userId=`;getAntiForgeryToken=po(()=>this.isBrowser?`/api/identity/GetAntiForgeryToken`:void 0);constructor(){}submitLogin(r){let t=new at$1().set(`CfTurnstileResponse`,r.CfTurnstileResponse).set(`Password`,r.Password).set(`UsernameOrEmail`,r.UsernameOrEmail).set(`ReturnUrl`,r.ReturnUrl);return this.httpClient.post(`/api/identity/Login`,t,{observe:`response`,responseType:`text`}).pipe(ju$1({next:e=>{e.ok&&this.myIdentityInfo.reload()}}))}submitSignup(r){let t=new FormData;return t.set(`CfTurnstileResponse`,r.CfTurnstileResponse),t.set(`Email`,r.Email),t.set(`Username`,r.Username),t.set(`Password`,r.Password),this.httpClient.post(`/api/identity/Signup`,t).pipe(ju$1({next:e=>{e.success&&this.myIdentityInfo.reload()}}))}logout(){this.httpClient.post(`/api/identity/Logout`,null).subscribe({next:()=>{this.myIdentityInfo.reload()}})}getUsername(r){let t=new at$1().set(`userId`,r);return this.httpClient.get(`/api/identity/GetUsername`,{params:t})}static ɵfac=function(t){return new(t||n)};static ɵprov=$r$1({token:n,factory:n.ɵfac})};var Pm=20;var Di=(()=>{class n{_ngZone=v(Fe$1);_platform=v(V$1);_renderer=v(Vr$1).createRenderer(null,null);_cleanupGlobalListener;_scrolled=new ee;_scrolledCount=0;scrollContainers=/* @__PURE__ */ new Map;register(t){this.scrollContainers.has(t)||this.scrollContainers.set(t,t.elementScrolled().subscribe(()=>this._scrolled.next(t)))}deregister(t){let e=this.scrollContainers.get(t);e&&(e.unsubscribe(),this.scrollContainers.delete(t))}scrolled(t=Pm){return this._platform.isBrowser?new x(e=>{this._cleanupGlobalListener||(this._cleanupGlobalListener=this._ngZone.runOutsideAngular(()=>this._renderer.listen(`document`,`scroll`,()=>this._scrolled.next())));let i=t>0?this._scrolled.pipe(qy(t)).subscribe(e):this._scrolled.subscribe(e);return this._scrolledCount++,()=>{i.unsubscribe(),this._scrolledCount--,this._scrolledCount||(this._cleanupGlobalListener?.(),this._cleanupGlobalListener=void 0)}}):Ay()}ngOnDestroy(){this._cleanupGlobalListener?.(),this._cleanupGlobalListener=void 0,this.scrollContainers.forEach((t,e)=>this.deregister(e)),this._scrolled.complete()}ancestorScrolled(t,e){let i=this.getAncestorScrollContainers(t);return this.scrolled(e).pipe(rr(o=>!o||i.indexOf(o)>-1))}getAncestorScrollContainers(t){let e=[];return this.scrollContainers.forEach((i,o)=>{this._targetContainsElement(o,t)&&e.push(o)}),e}_targetContainsElement(t,e){let i=St(e),o=t.getElementRef().nativeElement;do if(i==o)return!0;while(i=i.parentElement);return!1}static ɵfac=function(e){return new(e||n)};static ɵprov=$r$1({token:n,factory:n.ɵfac})}return n})();var Fm=(()=>{class n{elementRef=v(Wr$1);scrollDispatcher=v(Di);ngZone=v(Fe$1);dir=v(Vn,{optional:!0});_scrollElement=this.elementRef.nativeElement;_destroyed=new ee;_renderer=v(Ic$1);_cleanupScroll;_elementScrolled=new ee;ngOnInit(){this._cleanupScroll=this.ngZone.runOutsideAngular(()=>this._renderer.listen(this._scrollElement,`scroll`,t=>this._elementScrolled.next(t))),this.scrollDispatcher.register(this)}ngOnDestroy(){this._cleanupScroll?.(),this._elementScrolled.complete(),this.scrollDispatcher.deregister(this),this._destroyed.next(),this._destroyed.complete()}elementScrolled(){return this._elementScrolled}getElementRef(){return this.elementRef}scrollTo(t){let e=this.elementRef.nativeElement,i=this.dir&&this.dir.value==`rtl`;t.left??=i?t.end:t.start,t.right??=i?t.start:t.end,t.bottom!=null&&(t.top=e.scrollHeight-e.clientHeight-t.bottom),i&&cn()!=Ot.NORMAL?(t.left!=null&&(t.right=e.scrollWidth-e.clientWidth-t.left),cn()==Ot.INVERTED?t.left=t.right:cn()==Ot.NEGATED&&(t.left=t.right?-t.right:t.right)):t.right!=null&&(t.left=e.scrollWidth-e.clientWidth-t.right),this._applyScrollToOptions(t)}_applyScrollToOptions(t){let e=this.elementRef.nativeElement;wi()?e.scrollTo(t):(t.top!=null&&(e.scrollTop=t.top),t.left!=null&&(e.scrollLeft=t.left))}measureScrollOffset(t){let e=`left`,i=`right`,o=this.elementRef.nativeElement;if(t==`top`)return o.scrollTop;if(t==`bottom`)return o.scrollHeight-o.clientHeight-o.scrollTop;let a=this.dir&&this.dir.value==`rtl`;return t==`start`?t=a?i:e:t==`end`&&(t=a?e:i),a&&cn()==Ot.INVERTED?t==e?o.scrollWidth-o.clientWidth-o.scrollLeft:o.scrollLeft:a&&cn()==Ot.NEGATED?t==e?o.scrollLeft+o.scrollWidth-o.clientWidth:-o.scrollLeft:t==e?o.scrollLeft:o.scrollWidth-o.clientWidth-o.scrollLeft}static ɵfac=function(e){return new(e||n)};static ɵdir=fw({type:n,selectors:[[``,`cdk-scrollable`,``],[``,`cdkScrollable`,``]]})}return n})();var Lm=20;var Jn=(()=>{class n{_platform=v(V$1);_listeners;_viewportSize=null;_change=new ee;_document=v(mt$1);constructor(){let t=v(Fe$1),e=v(Vr$1).createRenderer(null,null);t.runOutsideAngular(()=>{if(this._platform.isBrowser){let i=o=>this._change.next(o);this._listeners=[e.listen(`window`,`resize`,i),e.listen(`window`,`orientationchange`,i)]}this.change().subscribe(()=>this._viewportSize=null)})}ngOnDestroy(){this._listeners?.forEach(t=>t()),this._change.complete()}getViewportSize(){this._viewportSize||this._updateViewportSize();let t={width:this._viewportSize.width,height:this._viewportSize.height};return this._platform.isBrowser||(this._viewportSize=null),t}getViewportRect(){let t=this.getViewportScrollPosition(),{width:e,height:i}=this.getViewportSize();return{top:t.top,left:t.left,bottom:t.top+i,right:t.left+e,height:i,width:e}}getViewportScrollPosition(){if(!this._platform.isBrowser)return{top:0,left:0};let t=this._document,e=this._getWindow(),i=t.documentElement,o=i.getBoundingClientRect();return{top:-o.top||t.body?.scrollTop||e.scrollY||i.scrollTop||0,left:-o.left||t.body?.scrollLeft||e.scrollX||i.scrollLeft||0}}change(t=Lm){return t>0?this._change.pipe(qy(t)):this._change}_getWindow(){return this._document.defaultView||window}_updateViewportSize(){let t=this._getWindow();this._viewportSize=this._platform.isBrowser?{width:t.innerWidth,height:t.innerHeight}:{width:0,height:0}}static ɵfac=function(e){return new(e||n)};static ɵprov=$r$1({token:n,factory:n.ɵfac})}return n})();var Qn=class{_attachedHost=null;attach(r){return this._attachedHost=r,r.attach(this)}detach(){let r=this._attachedHost;r!=null&&(this._attachedHost=null,r.detach())}get isAttached(){return this._attachedHost!=null}setAttachedHost(r){this._attachedHost=r}};var ia=class extends Qn{component;viewContainerRef;injector;projectableNodes;bindings;directives;constructor(r,t,e,i,o,a){super(),this.component=r,this.viewContainerRef=t,this.injector=e,this.projectableNodes=i,this.bindings=o||null,this.directives=a||null}};var tr=class extends Qn{templateRef;viewContainerRef;context;injector;constructor(r,t,e,i){super(),this.templateRef=r,this.viewContainerRef=t,this.context=e,this.injector=i}get origin(){return this.templateRef.elementRef}attach(r,t=this.context){return this.context=t,super.attach(r)}detach(){return this.context=void 0,super.detach()}};var oa=class extends Qn{element;constructor(r){super(),this.element=r instanceof Wr$1?r.nativeElement:r}};var Ei=class{_attachedPortal=null;_disposeFn=null;_isDisposed=!1;hasAttached(){return!!this._attachedPortal}attach(r){if(r instanceof ia)return this._attachedPortal=r,this.attachComponentPortal(r);if(r instanceof tr)return this._attachedPortal=r,this.attachTemplatePortal(r);if(this.attachDomPortal&&r instanceof oa)return this._attachedPortal=r,this.attachDomPortal(r)}attachDomPortal=null;detach(){this._attachedPortal&&(this._attachedPortal.setAttachedHost(null),this._attachedPortal=null),this._invokeDisposeFn()}dispose(){this.hasAttached()&&this.detach(),this._invokeDisposeFn(),this._isDisposed=!0}setDisposeFn(r){this._disposeFn=r}_invokeDisposeFn(){this._disposeFn&&(this._disposeFn(),this._disposeFn=null)}};var Ri=class extends Ei{outletElement;_appRef;_defaultInjector;constructor(r,t,e){super(),this.outletElement=r,this._appRef=t,this._defaultInjector=e}attachComponentPortal(r){let t;if(r.viewContainerRef){let e=r.injector||r.viewContainerRef.injector,i=e.get(Un$1,null,{optional:!0})||void 0;t=r.viewContainerRef.createComponent(r.component,{index:r.viewContainerRef.length,injector:e,ngModuleRef:i,projectableNodes:r.projectableNodes||void 0,bindings:r.bindings||void 0,directives:r.directives||void 0}),this.setDisposeFn(()=>t.destroy())}else{let e=this._appRef,i=r.injector||this._defaultInjector||se$1.NULL,o=i.get(Ee$1,e.injector);t=Aj(r.component,{elementInjector:i,environmentInjector:o,projectableNodes:r.projectableNodes||void 0,bindings:r.bindings||void 0,directives:r.directives||void 0}),e.attachView(t.hostView),this.setDisposeFn(()=>{e.viewCount>0&&e.detachView(t.hostView),t.destroy()})}return this.outletElement.appendChild(this._getComponentRootNode(t)),this._attachedPortal=r,t}attachTemplatePortal(r){let t=r.viewContainerRef,e=t.createEmbeddedView(r.templateRef,r.context,{injector:r.injector});return e.rootNodes.forEach(i=>this.outletElement.appendChild(i)),e.detectChanges(),this.setDisposeFn(()=>{let i=t.indexOf(e);i!==-1&&t.remove(i)}),this._attachedPortal=r,e}attachDomPortal=r=>{let t=r.element;t.parentNode;let e=this.outletElement.ownerDocument.createComment(`dom-portal`);t.parentNode.insertBefore(e,t),this.outletElement.appendChild(t),this._attachedPortal=r,super.setDisposeFn(()=>{e.parentNode&&e.parentNode.replaceChild(t,e)})};dispose(){super.dispose(),this.outletElement.remove()}_getComponentRootNode(r){return r.hostView.rootNodes[0]}};var q0=(()=>{class n extends tr{constructor(){let t=v(Fr$1),e=v(is$1);super(t,e)}static ɵfac=function(e){return new(e||n)};static ɵdir=fw({type:n,selectors:[[``,`cdkPortal`,``]],exportAs:[`cdkPortal`],features:[Og]})}return n})();var K0=(()=>{class n extends Ei{_moduleRef=v(Un$1,{optional:!0});_document=v(mt$1);_viewContainerRef=v(is$1);_isInitialized=!1;_attachedRef=null;get portal(){return this._attachedPortal}set portal(t){this.hasAttached()&&!t&&!this._isInitialized||(this.hasAttached()&&super.detach(),t&&super.attach(t),this._attachedPortal=t||null)}attached=new Qe$1;get attachedRef(){return this._attachedRef}ngOnInit(){this._isInitialized=!0}ngOnDestroy(){super.dispose(),this._attachedRef=this._attachedPortal=null}attachComponentPortal(t){t.setAttachedHost(this);let e=t.viewContainerRef!=null?t.viewContainerRef:this._viewContainerRef,i=e.createComponent(t.component,{index:e.length,injector:t.injector||e.injector,projectableNodes:t.projectableNodes||void 0,ngModuleRef:this._moduleRef||void 0,bindings:t.bindings||void 0,directives:t.directives||void 0});return e!==this._viewContainerRef&&this._insertContent(i.hostView.rootNodes[0]),super.setDisposeFn(()=>i.destroy()),this._attachedPortal=t,this._attachedRef=i,this.attached.emit(i),i}attachTemplatePortal(t){t.setAttachedHost(this);let e=this._viewContainerRef.createEmbeddedView(t.templateRef,t.context,{injector:t.injector});return super.setDisposeFn(()=>this._viewContainerRef.clear()),this._attachedPortal=t,this._attachedRef=e,this.attached.emit(e),e}attachDomPortal=t=>{let e=t.element;e.parentNode;let i=this._document.createComment(`dom-portal`);t.setAttachedHost(this),e.parentNode.insertBefore(i,e),this._insertContent(e),this._attachedPortal=t,super.setDisposeFn(()=>i.parentNode?.replaceChild(e,i))};_insertContent(t){let e=this._viewContainerRef.element.nativeElement;e.nodeType===e.ELEMENT_NODE?e.appendChild(t):e.parentNode?.insertBefore(t,e)}static ɵfac=(()=>{let t;return function(i){return(t||(t=RE(n)))(i||n)}})();static ɵdir=fw({type:n,selectors:[[``,`cdkPortalOutlet`,``]],inputs:{portal:[0,`cdkPortalOutlet`,`portal`]},outputs:{attached:`attached`},exportAs:[`cdkPortalOutlet`],features:[Og]})}return n})();var pl=wi();function Bm(n){return new xi(n.get(Jn),n.get(mt$1))}var xi=class{_viewportRuler;_previousHTMLStyles={top:``,left:``};_previousScrollPosition;_isEnabled=!1;_document;constructor(r,t){this._viewportRuler=r,this._document=t}attach(){}enable(){if(this._canBeEnabled()){let r=this._document.documentElement;this._previousScrollPosition=this._viewportRuler.getViewportScrollPosition(),this._previousHTMLStyles.left=r.style.left||``,this._previousHTMLStyles.top=r.style.top||``,r.style.left=H(-this._previousScrollPosition.left),r.style.top=H(-this._previousScrollPosition.top),r.classList.add(`cdk-global-scrollblock`),this._isEnabled=!0}}disable(){if(this._isEnabled){let r=this._document.documentElement,t=this._document.body,e=r.style,i=t.style,o=e.scrollBehavior||``,a=i.scrollBehavior||``;this._isEnabled=!1,e.left=this._previousHTMLStyles.left,e.top=this._previousHTMLStyles.top,r.classList.remove(`cdk-global-scrollblock`),pl&&(e.scrollBehavior=i.scrollBehavior=`auto`),window.scroll(this._previousScrollPosition.left,this._previousScrollPosition.top),pl&&(e.scrollBehavior=o,i.scrollBehavior=a)}}_canBeEnabled(){if(this._document.documentElement.classList.contains(`cdk-global-scrollblock`)||this._isEnabled)return!1;let t=this._document.documentElement,e=this._viewportRuler.getViewportSize();return t.scrollHeight>e.height||t.scrollWidth>e.width}};var Ii=class{enable(){}disable(){}attach(){}};function sa(n,r){return r.some(t=>{let e=n.bottom<t.top,i=n.top>t.bottom,o=n.right<t.left,a=n.left>t.right;return e||i||o||a})}function fl(n,r){return r.some(t=>{let e=n.top<t.top,i=n.bottom>t.bottom,o=n.left<t.left,a=n.right>t.right;return e||i||o||a})}function Um(n,r){return new Mi(n.get(Di),n.get(Jn),n.get(Fe$1),r)}var Mi=class{_scrollDispatcher;_viewportRuler;_ngZone;_config;_scrollSubscription=null;_overlayRef;constructor(r,t,e,i){this._scrollDispatcher=r,this._viewportRuler=t,this._ngZone=e,this._config=i}attach(r){this._overlayRef,this._overlayRef=r}enable(){if(!this._scrollSubscription){let r=this._config?this._config.scrollThrottle:0;this._scrollSubscription=this._scrollDispatcher.scrolled(r).subscribe(()=>{if(this._overlayRef.updatePosition(),this._config&&this._config.autoClose){let t=this._overlayRef.overlayElement.getBoundingClientRect(),{width:e,height:i}=this._viewportRuler.getViewportSize();sa(t,[{width:e,height:i,bottom:i,right:e,top:0,left:0}])&&(this.disable(),this._ngZone.run(()=>this._overlayRef.detach()))}})}}disable(){this._scrollSubscription&&(this._scrollSubscription.unsubscribe(),this._scrollSubscription=null)}detach(){this.disable(),this._overlayRef=null}};var Ai=class{positionStrategy;scrollStrategy=new Ii;panelClass=``;hasBackdrop=!1;backdropClass=`cdk-overlay-dark-backdrop`;disableAnimations;width;height;minWidth;minHeight;maxWidth;maxHeight;direction;disposeOnNavigation=!1;usePopover;eventPredicate;constructor(r){if(r){let t=Object.keys(r);for(let e of t)r[e]!==void 0&&(this[e]=r[e])}}};var Ni=class{connectionPair;scrollableViewProperties;constructor(r,t){this.connectionPair=r,this.scrollableViewProperties=t}};var Sl=(()=>{class n{_attachedOverlays=[];_document=v(mt$1);_isAttached=!1;ngOnDestroy(){this.detach()}add(t){this.remove(t),this._attachedOverlays.push(t)}remove(t){let e=this._attachedOverlays.indexOf(t);e>-1&&this._attachedOverlays.splice(e,1),this._attachedOverlays.length===0&&this.detach()}canReceiveEvent(t,e,i){return i.observers.length<1?!1:t.eventPredicate?t.eventPredicate(e):!0}static ɵfac=function(e){return new(e||n)};static ɵprov=$r$1({token:n,factory:n.ɵfac})}return n})();var wl=(()=>{class n extends Sl{_ngZone=v(Fe$1);_renderer=v(Vr$1).createRenderer(null,null);_cleanupKeydown;add(t){super.add(t),this._isAttached||(this._ngZone.runOutsideAngular(()=>{this._cleanupKeydown=this._renderer.listen(`body`,`keydown`,this._keydownListener)}),this._isAttached=!0)}detach(){this._isAttached&&(this._cleanupKeydown?.(),this._isAttached=!1)}_keydownListener=t=>{let e=this._attachedOverlays;for(let i=e.length-1;i>-1;i--){let o=e[i];if(this.canReceiveEvent(o,t,o._keydownEvents)){this._ngZone.run(()=>o._keydownEvents.next(t));break}}};static ɵfac=function(e){return new(e||n)};static ɵprov=$r$1({token:n,factory:n.ɵfac})}return n})();var Cl=(()=>{class n extends Sl{_platform=v(V$1);_ngZone=v(Fe$1);_renderer=v(Vr$1).createRenderer(null,null);_cursorOriginalValue;_cursorStyleIsSet=!1;_pointerDownEventTarget=null;_cleanups;add(t){if(super.add(t),!this._isAttached){let e=this._document.body,i={capture:!0},o=this._renderer;this._cleanups=this._ngZone.runOutsideAngular(()=>[o.listen(e,`pointerdown`,this._pointerDownListener,i),o.listen(e,`click`,this._clickListener,i),o.listen(e,`auxclick`,this._clickListener,i),o.listen(e,`contextmenu`,this._clickListener,i)]),this._platform.IOS&&!this._cursorStyleIsSet&&(this._cursorOriginalValue=e.style.cursor,e.style.cursor=`pointer`,this._cursorStyleIsSet=!0),this._isAttached=!0}}detach(){this._isAttached&&(this._cleanups?.forEach(t=>t()),this._cleanups=void 0,this._platform.IOS&&this._cursorStyleIsSet&&(this._document.body.style.cursor=this._cursorOriginalValue,this._cursorStyleIsSet=!1),this._isAttached=!1)}_pointerDownListener=t=>{this._pointerDownEventTarget=st$1(t)};_clickListener=t=>{let e=st$1(t),i=t.type===`click`&&this._pointerDownEventTarget?this._pointerDownEventTarget:e;this._pointerDownEventTarget=null;let o=this._attachedOverlays.slice();for(let a=o.length-1;a>-1;a--){let s=o[a],c=s._outsidePointerEvents;if(!(!s.hasAttached()||!this.canReceiveEvent(s,t,c))){if(gl(s.overlayElement,e)||gl(s.overlayElement,i))break;this._ngZone?this._ngZone.run(()=>c.next(t)):c.next(t)}}};static ɵfac=function(e){return new(e||n)};static ɵprov=$r$1({token:n,factory:n.ɵfac})}return n})();function gl(n,r){let t=typeof ShadowRoot<`u`&&ShadowRoot,e=r;for(;e;){if(e===n)return!0;e=t&&e instanceof ShadowRoot?e.host:e.parentNode}return!1}var Dl=(()=>{class n{static ɵfac=function(e){return new(e||n)};static ɵcmp=aw({type:n,selectors:[[`ng-component`]],hostAttrs:[`cdk-overlay-style-loader`,``],decls:0,vars:0,template:function(e,i){},styles:[`.cdk-overlay-container, .cdk-global-overlay-wrapper {
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
`],encapsulation:2})}return n})();var El=(()=>{class n{_platform=v(V$1);_containerElement;_document=v(mt$1);_styleLoader=v(_t);ngOnDestroy(){this._containerElement?.remove()}getContainerElement(){return this._loadStyles(),this._containerElement||this._createContainer(),this._containerElement}_createContainer(){let t=`cdk-overlay-container`;if(this._platform.isBrowser||Jo()){let i=this._document.querySelectorAll(`.${t}[platform="server"], .${t}[platform="test"]`);for(let o=0;o<i.length;o++)i[o].remove()}let e=this._document.createElement(`div`);e.classList.add(t),Jo()?e.setAttribute(`platform`,`test`):this._platform.isBrowser||e.setAttribute(`platform`,`server`),this._document.body.appendChild(e),this._containerElement=e}_loadStyles(){this._styleLoader.load(Dl)}static ɵfac=function(e){return new(e||n)};static ɵprov=$r$1({token:n,factory:n.ɵfac})}return n})();var ca=class{_renderer;_ngZone;element;_cleanupClick;_cleanupTransitionEnd;_fallbackTimeout;constructor(r,t,e,i){this._renderer=t,this._ngZone=e,this.element=r.createElement(`div`),this.element.classList.add(`cdk-overlay-backdrop`),this._cleanupClick=t.listen(this.element,`click`,i)}detach(){this._ngZone.runOutsideAngular(()=>{let r=this.element;clearTimeout(this._fallbackTimeout),this._cleanupTransitionEnd?.(),this._cleanupTransitionEnd=this._renderer.listen(r,`transitionend`,this.dispose),this._fallbackTimeout=setTimeout(this.dispose,500),r.style.pointerEvents=`none`,r.classList.remove(`cdk-overlay-backdrop-showing`)})}dispose=()=>{clearTimeout(this._fallbackTimeout),this._cleanupClick?.(),this._cleanupTransitionEnd?.(),this._cleanupClick=this._cleanupTransitionEnd=this._fallbackTimeout=void 0,this.element.remove()}};function la(n){return n&&n.nodeType===1}var aa=Et([]);var Ti=class{_portalOutlet;_host;_pane;_config;_ngZone;_keyboardDispatcher;_document;_location;_outsideClickDispatcher;_animationsDisabled;_injector;_renderer;_backdropClick=new ee;_attachments=new ee;_detachments=new ee;_positionStrategy;_scrollStrategy;_locationChanges;_backdropRef=null;_detachContentMutationObserver;_detachContentAfterRenderRef;_disposed=!1;_previousHostParent;_keydownEvents=new ee;_outsidePointerEvents=new ee;_afterNextRenderRef;constructor(r,t,e,i,o,a,s,c,d,u=!1,h,m){this._portalOutlet=r,this._host=t,this._pane=e,this._config=i,this._ngZone=o,this._keyboardDispatcher=a,this._document=s,this._location=c,this._outsideClickDispatcher=d,this._animationsDisabled=u,this._injector=h,this._renderer=m,i.scrollStrategy&&(this._scrollStrategy=i.scrollStrategy,this._scrollStrategy.attach(this)),this._positionStrategy=i.positionStrategy}get overlayElement(){return this._pane}get backdropElement(){return this._backdropRef?.element||null}get hostElement(){return this._host}get eventPredicate(){return this._config?.eventPredicate||null}attach(r){if(this._disposed)return null;this._attachHost();let t=this._portalOutlet.attach(r);if(this._positionStrategy?.attach(this),this._updateStackingOrder(),this._updateElementSize(),this._updateElementDirection(),le$1(()=>{aa.update(e=>e.includes(this)?e:[...e,this])}),this._scrollStrategy&&this._scrollStrategy.enable(),this._afterNextRenderRef?.destroy(),this._afterNextRenderRef=Dh$1(()=>{this.hasAttached()&&this.updatePosition()},{injector:this._injector}),this._togglePointerEvents(!0),this._config.hasBackdrop&&this._attachBackdrop(),this._config.panelClass&&this._toggleClasses(this._pane,this._config.panelClass,!0),this._attachments.next(),this._completeDetachContent(),this._keyboardDispatcher.add(this),this._config.disposeOnNavigation===!0||this._config.disposeOnNavigation===`pop-state`){let e=this._location.subscribe(()=>this.dispose());this._locationChanges=()=>e.unsubscribe()}else this._config.disposeOnNavigation===`url-change`&&(this._locationChanges=this._location.onUrlChange(()=>this.dispose()));return this._outsideClickDispatcher.add(this),typeof t?.onDestroy==`function`&&t.onDestroy(()=>{this.hasAttached()&&this._ngZone.runOutsideAngular(()=>Promise.resolve().then(()=>this.detach()))}),t}detach(){if(!this.hasAttached())return;this.detachBackdrop(),this._togglePointerEvents(!1),this._positionStrategy&&this._positionStrategy.detach&&this._positionStrategy.detach(),this._scrollStrategy&&this._scrollStrategy.disable();let r=this._portalOutlet.detach();return this._detachments.next(),this._completeDetachContent(),this._keyboardDispatcher.remove(this),this._detachContentWhenEmpty(),this._locationChanges?.(),this._outsideClickDispatcher.remove(this),le$1(()=>{aa.update(t=>t.filter(e=>e!==this))}),r}dispose(){if(this._disposed)return;let r=this.hasAttached();this._positionStrategy&&this._positionStrategy.dispose(),this._disposeScrollStrategy(),this._backdropRef?.dispose(),this._locationChanges?.(),this._keyboardDispatcher.remove(this),this._portalOutlet.dispose(),this._attachments.complete(),this._backdropClick.complete(),this._keydownEvents.complete(),this._outsidePointerEvents.complete(),this._outsideClickDispatcher.remove(this),this._host?.remove(),this._afterNextRenderRef?.destroy(),this._previousHostParent=this._pane=this._host=this._backdropRef=null,r&&this._detachments.next(),this._detachments.complete(),this._completeDetachContent(),this._disposed=!0,le$1(()=>{aa.update(t=>t.filter(e=>e!==this))})}hasAttached(){return this._portalOutlet.hasAttached()}backdropClick(){return this._backdropClick}attachments(){return this._attachments}detachments(){return this._detachments}keydownEvents(){return this._keydownEvents}outsidePointerEvents(){return this._outsidePointerEvents}getConfig(){return this._config}updatePosition(){this._positionStrategy&&this._positionStrategy.apply()}updatePositionStrategy(r){r!==this._positionStrategy&&(this._positionStrategy&&this._positionStrategy.dispose(),this._positionStrategy=r,this.hasAttached()&&(r.attach(this),this.updatePosition()))}updateSize(r){this._config=z(z({},this._config),r),this._updateElementSize()}setDirection(r){this._config=Q$1(z({},this._config),{direction:r}),this._updateElementDirection()}addPanelClass(r){this._pane&&this._toggleClasses(this._pane,r,!0)}removePanelClass(r){this._pane&&this._toggleClasses(this._pane,r,!1)}getDirection(){let r=this._config.direction;return r?typeof r==`string`?r:r.value:`ltr`}updateScrollStrategy(r){r!==this._scrollStrategy&&(this._disposeScrollStrategy(),this._scrollStrategy=r,this.hasAttached()&&(r.attach(this),r.enable()))}_updateElementDirection(){this._host.setAttribute(`dir`,this.getDirection())}_updateElementSize(){if(!this._pane)return;let r=this._pane.style;r.width=H(this._config.width),r.height=H(this._config.height),r.minWidth=H(this._config.minWidth),r.minHeight=H(this._config.minHeight),r.maxWidth=H(this._config.maxWidth),r.maxHeight=H(this._config.maxHeight)}_togglePointerEvents(r){this._pane.style.pointerEvents=r?``:`none`}_attachHost(){if(!this._host.parentElement){let r=this._config.usePopover?this._positionStrategy?.getPopoverInsertionPoint?.():null;la(r)?r.after(this._host):r?.type===`parent`?r.element.appendChild(this._host):this._previousHostParent?.appendChild(this._host)}if(this._config.usePopover)try{this._host.showPopover()}catch{}}_attachBackdrop(){let r=`cdk-overlay-backdrop-showing`;this._backdropRef?.dispose(),this._backdropRef=new ca(this._document,this._renderer,this._ngZone,t=>{this._backdropClick.next(t)}),this._animationsDisabled&&this._backdropRef.element.classList.add(`cdk-overlay-backdrop-noop-animation`),this._config.backdropClass&&this._toggleClasses(this._backdropRef.element,this._config.backdropClass,!0),this._config.usePopover?this._host.prepend(this._backdropRef.element):this._host.parentElement.insertBefore(this._backdropRef.element,this._host),!this._animationsDisabled&&typeof requestAnimationFrame<`u`?this._ngZone.runOutsideAngular(()=>{requestAnimationFrame(()=>this._backdropRef?.element.classList.add(r))}):this._backdropRef.element.classList.add(r)}_updateStackingOrder(){!this._config.usePopover&&this._host.nextSibling&&this._host.parentNode.appendChild(this._host)}detachBackdrop(){this._animationsDisabled?(this._backdropRef?.dispose(),this._backdropRef=null):this._backdropRef?.detach()}_toggleClasses(r,t,e){let i=sn$1(t||[]).filter(o=>!!o);i.length&&(e?r.classList.add(...i):r.classList.remove(...i))}_detachContentWhenEmpty(){let r=!1;try{this._detachContentAfterRenderRef=Dh$1(()=>{r=!0,this._detachContent()},{injector:this._injector})}catch(t){if(r)throw t;this._detachContent()}globalThis.MutationObserver&&this._pane&&(this._detachContentMutationObserver||=new globalThis.MutationObserver(()=>{this._detachContent()}),this._detachContentMutationObserver.observe(this._pane,{childList:!0}))}_detachContent(){(!this._pane||!this._host||this._pane.children.length===0)&&(this._pane&&this._config.panelClass&&this._toggleClasses(this._pane,this._config.panelClass,!1),this._host&&this._host.parentElement&&(this._previousHostParent=this._host.parentElement,this._host.remove()),this._completeDetachContent())}_completeDetachContent(){this._detachContentAfterRenderRef?.destroy(),this._detachContentAfterRenderRef=void 0,this._detachContentMutationObserver?.disconnect()}_disposeScrollStrategy(){let r=this._scrollStrategy;r?.disable(),r?.detach?.()}};var bl=`cdk-overlay-connected-position-bounding-box`;var jm=/([A-Za-z%]+)$/;function zm(n,r){return new Oi(r,n.get(Jn),n.get(mt$1),n.get(V$1),n.get(El))}var Oi=class{_viewportRuler;_document;_platform;_overlayContainer;_overlayRef;_isInitialRender=!1;_lastBoundingBoxSize={width:0,height:0};_isPushed=!1;_canPush=!0;_growAfterOpen=!1;_hasFlexibleDimensions=!0;_positionLocked=!1;_originRect;_overlayRect;_viewportRect;_containerRect;_viewportMargin=0;_scrollables=[];_preferredPositions=[];_origin;_pane;_isDisposed=!1;_boundingBox=null;_lastPosition=null;_lastScrollVisibility=null;_positionChanges=new ee;_resizeSubscription=K$1.EMPTY;_offsetX=0;_offsetY=0;_transformOriginSelector;_appliedPanelClasses=[];_previousPushAmount=null;_popoverLocation=`global`;positionChanges=this._positionChanges;get positions(){return this._preferredPositions}constructor(r,t,e,i,o){this._viewportRuler=t,this._document=e,this._platform=i,this._overlayContainer=o,this.setOrigin(r)}attach(r){this._overlayRef&&this._overlayRef,this._validatePositions(),r.hostElement.classList.add(bl),this._overlayRef=r,this._boundingBox=r.hostElement,this._pane=r.overlayElement,this._isDisposed=!1,this._isInitialRender=!0,this._lastPosition=null,this._resizeSubscription.unsubscribe(),this._resizeSubscription=this._viewportRuler.change().subscribe(()=>{this._isInitialRender=!0,this.apply()})}apply(){if(this._isDisposed||!this._platform.isBrowser)return;if(!this._isInitialRender&&this._positionLocked&&this._lastPosition){this.reapplyLastPosition();return}this._clearPanelClasses(),this._resetOverlayElementStyles(),this._resetBoundingBoxStyles(),this._viewportRect=this._getNarrowedViewportRect(),this._originRect=this._getOriginRect(),this._overlayRect=this._pane.getBoundingClientRect(),this._containerRect=this._getContainerRect();let r=this._originRect,t=this._overlayRect,e=this._viewportRect,i=this._containerRect,o=[],a;for(let s of this._preferredPositions){let c=this._getOriginPoint(r,i,s),d=this._getOverlayPoint(c,t,s),u=this._getOverlayFit(d,t,e,s);if(u.isCompletelyWithinViewport){this._isPushed=!1,this._applyPosition(s,c);return}if(this._canFitWithFlexibleDimensions(u,d,e)){o.push({position:s,origin:c,overlayRect:t,boundingBoxRect:this._calculateBoundingBoxRect(c,s)});continue}(!a||a.overlayFit.visibleArea<u.visibleArea)&&(a={overlayFit:u,overlayPoint:d,originPoint:c,position:s,overlayRect:t})}if(o.length){let s=null,c=-1;for(let d of o){let u=d.boundingBoxRect.width*d.boundingBoxRect.height*(d.position.weight||1);u>c&&(c=u,s=d)}this._isPushed=!1,this._applyPosition(s.position,s.origin);return}if(this._canPush){this._isPushed=!0,this._applyPosition(a.position,a.originPoint);return}this._applyPosition(a.position,a.originPoint)}detach(){this._clearPanelClasses(),this._lastPosition=null,this._previousPushAmount=null,this._resizeSubscription.unsubscribe()}dispose(){this._isDisposed||(this._boundingBox&&Te$1(this._boundingBox.style,{top:``,left:``,right:``,bottom:``,height:``,width:``,alignItems:``,justifyContent:``}),this._pane&&this._resetOverlayElementStyles(),this._overlayRef&&this._overlayRef.hostElement.classList.remove(bl),this.detach(),this._positionChanges.complete(),this._overlayRef=this._boundingBox=null,this._isDisposed=!0)}reapplyLastPosition(){if(this._isDisposed||!this._platform.isBrowser)return;let r=this._lastPosition;r?(this._originRect=this._getOriginRect(),this._overlayRect=this._pane.getBoundingClientRect(),this._viewportRect=this._getNarrowedViewportRect(),this._containerRect=this._getContainerRect(),this._applyPosition(r,this._getOriginPoint(this._originRect,this._containerRect,r))):this.apply()}withScrollableContainers(r){return this._scrollables=r,this}withPositions(r){return this._preferredPositions=r,r.indexOf(this._lastPosition)===-1&&(this._lastPosition=null),this._validatePositions(),this}withViewportMargin(r){return this._viewportMargin=r,this}withFlexibleDimensions(r=!0){return this._hasFlexibleDimensions=r,this}withGrowAfterOpen(r=!0){return this._growAfterOpen=r,this}withPush(r=!0){return this._canPush=r,this}withLockedPosition(r=!0){return this._positionLocked=r,this}setOrigin(r){return this._origin=r,this}withDefaultOffsetX(r){return this._offsetX=r,this}withDefaultOffsetY(r){return this._offsetY=r,this}withTransformOriginOn(r){return this._transformOriginSelector=r,this}withPopoverLocation(r){return this._popoverLocation=r,this}getPopoverInsertionPoint(){return this._popoverLocation===`global`?null:this._popoverLocation!==`inline`?this._popoverLocation:this._origin instanceof Wr$1?this._origin.nativeElement:la(this._origin)?this._origin:null}_getOriginPoint(r,t,e){let i;if(e.originX==`center`)i=r.left+r.width/2;else{let a=this._isRtl()?r.right:r.left,s=this._isRtl()?r.left:r.right;i=e.originX==`start`?a:s}t.left<0&&(i-=t.left);let o;return e.originY==`center`?o=r.top+r.height/2:o=e.originY==`top`?r.top:r.bottom,t.top<0&&(o-=t.top),{x:i,y:o}}_getOverlayPoint(r,t,e){let i;e.overlayX==`center`?i=-t.width/2:e.overlayX===`start`?i=this._isRtl()?-t.width:0:i=this._isRtl()?0:-t.width;let o;return e.overlayY==`center`?o=-t.height/2:o=e.overlayY==`top`?0:-t.height,{x:r.x+i,y:r.y+o}}_getOverlayFit(r,t,e,i){let o=yl(t),{x:a,y:s}=r,c=this._getOffset(i,`x`),d=this._getOffset(i,`y`);c&&(a+=c),d&&(s+=d);let u=0-a,h=a+o.width-e.width,m=0-s,b=s+o.height-e.height,w=this._subtractOverflows(o.width,u,h),D=this._subtractOverflows(o.height,m,b),E=w*D;return{visibleArea:E,isCompletelyWithinViewport:o.width*o.height===E,fitsInViewportVertically:D===o.height,fitsInViewportHorizontally:w==o.width}}_canFitWithFlexibleDimensions(r,t,e){if(this._hasFlexibleDimensions){let i=e.bottom-t.y,o=e.right-t.x,a=vl(this._overlayRef.getConfig().minHeight),s=vl(this._overlayRef.getConfig().minWidth),c=r.fitsInViewportVertically||a!=null&&a<=i,d=r.fitsInViewportHorizontally||s!=null&&s<=o;return c&&d}return!1}_pushOverlayOnScreen(r,t,e){if(this._previousPushAmount&&this._positionLocked)return{x:r.x+this._previousPushAmount.x,y:r.y+this._previousPushAmount.y};let i=yl(t),o=this._viewportRect,a=Math.max(r.x+i.width-o.width,0),s=Math.max(r.y+i.height-o.height,0),c=Math.max(o.top-e.top-r.y,0),d=Math.max(o.left-e.left-r.x,0),u=0,h=0;return i.width<=o.width?u=d||-a:u=r.x<this._getViewportMarginStart()?o.left-e.left-r.x:0,i.height<=o.height?h=c||-s:h=r.y<this._getViewportMarginTop()?o.top-e.top-r.y:0,this._previousPushAmount={x:u,y:h},{x:r.x+u,y:r.y+h}}_applyPosition(r,t){if(this._setTransformOrigin(r),this._setOverlayElementStyles(t,r),this._setBoundingBoxStyles(t,r),r.panelClass&&this._addPanelClasses(r.panelClass),this._positionChanges.observers.length){let e=this._getScrollVisibility();if(r!==this._lastPosition||!this._lastScrollVisibility||!Vm(this._lastScrollVisibility,e)){let i=new Ni(r,e);this._positionChanges.next(i)}this._lastScrollVisibility=e}this._lastPosition=r,this._isInitialRender=!1}_setTransformOrigin(r){if(!this._transformOriginSelector)return;let t=this._boundingBox.querySelectorAll(this._transformOriginSelector),e,i=r.overlayY;r.overlayX===`center`?e=`center`:this._isRtl()?e=r.overlayX===`start`?`right`:`left`:e=r.overlayX===`start`?`left`:`right`;for(let o=0;o<t.length;o++)t[o].style.transformOrigin=`${e} ${i}`}_calculateBoundingBoxRect(r,t){let e=this._viewportRect,i=this._isRtl(),o,a,s;if(t.overlayY===`top`)a=r.y,o=e.height-a+this._getViewportMarginBottom();else if(t.overlayY===`bottom`)s=e.height-r.y+this._getViewportMarginTop()+this._getViewportMarginBottom(),o=e.height-s+this._getViewportMarginTop();else{let b=Math.min(e.bottom-r.y+e.top,r.y),w=this._lastBoundingBoxSize.height;o=b*2,a=r.y-b,o>w&&!this._isInitialRender&&!this._growAfterOpen&&(a=r.y-w/2)}let c=t.overlayX===`start`&&!i||t.overlayX===`end`&&i,d=t.overlayX===`end`&&!i||t.overlayX===`start`&&i,u,h,m;if(d)m=e.width-r.x+this._getViewportMarginStart()+this._getViewportMarginEnd(),u=r.x-this._getViewportMarginStart();else if(c)h=r.x,u=e.right-r.x-this._getViewportMarginEnd();else{let b=Math.min(e.right-r.x+e.left,r.x),w=this._lastBoundingBoxSize.width;u=b*2,h=r.x-b,u>w&&!this._isInitialRender&&!this._growAfterOpen&&(h=r.x-w/2)}return{top:a,left:h,bottom:s,right:m,width:u,height:o}}_setBoundingBoxStyles(r,t){let e=this._calculateBoundingBoxRect(r,t);!this._isInitialRender&&!this._growAfterOpen&&(e.height=Math.min(e.height,this._lastBoundingBoxSize.height),e.width=Math.min(e.width,this._lastBoundingBoxSize.width));let i={};if(this._hasExactPosition())i.top=i.left=`0`,i.bottom=i.right=`auto`,i.maxHeight=i.maxWidth=``,i.width=i.height=`100%`;else{let o=this._overlayRef.getConfig().maxHeight,a=this._overlayRef.getConfig().maxWidth;i.width=H(e.width),i.height=H(e.height),i.top=H(e.top)||`auto`,i.bottom=H(e.bottom)||`auto`,i.left=H(e.left)||`auto`,i.right=H(e.right)||`auto`,t.overlayX===`center`?i.alignItems=`center`:i.alignItems=t.overlayX===`end`?`flex-end`:`flex-start`,t.overlayY===`center`?i.justifyContent=`center`:i.justifyContent=t.overlayY===`bottom`?`flex-end`:`flex-start`,o&&(i.maxHeight=H(o)),a&&(i.maxWidth=H(a))}this._lastBoundingBoxSize=e,Te$1(this._boundingBox.style,i)}_resetBoundingBoxStyles(){Te$1(this._boundingBox.style,{top:`0`,left:`0`,right:`0`,bottom:`0`,height:``,width:``,alignItems:``,justifyContent:``})}_resetOverlayElementStyles(){Te$1(this._pane.style,{top:``,left:``,bottom:``,right:``,position:``,transform:``})}_setOverlayElementStyles(r,t){let e={},i=this._hasExactPosition(),o=this._hasFlexibleDimensions,a=this._overlayRef.getConfig();if(i){let u=this._viewportRuler.getViewportScrollPosition();Te$1(e,this._getExactOverlayY(t,r,u)),Te$1(e,this._getExactOverlayX(t,r,u))}else e.position=`static`;let s=``,c=this._getOffset(t,`x`),d=this._getOffset(t,`y`);c&&(s+=`translateX(${c}px) `),d&&(s+=`translateY(${d}px)`),e.transform=s.trim(),a.maxHeight&&(i?e.maxHeight=H(a.maxHeight):o&&(e.maxHeight=``)),a.maxWidth&&(i?e.maxWidth=H(a.maxWidth):o&&(e.maxWidth=``)),Te$1(this._pane.style,e)}_getExactOverlayY(r,t,e){let i={top:``,bottom:``},o=this._getOverlayPoint(t,this._overlayRect,r);if(this._isPushed&&(o=this._pushOverlayOnScreen(o,this._overlayRect,e)),r.overlayY===`bottom`)i.bottom=`${this._document.documentElement.clientHeight-(o.y+this._overlayRect.height)}px`;else i.top=H(o.y);return i}_getExactOverlayX(r,t,e){let i={left:``,right:``},o=this._getOverlayPoint(t,this._overlayRect,r);this._isPushed&&(o=this._pushOverlayOnScreen(o,this._overlayRect,e));let a;if(this._isRtl()?a=r.overlayX===`end`?`left`:`right`:a=r.overlayX===`end`?`right`:`left`,a===`right`)i.right=`${this._document.documentElement.clientWidth-(o.x+this._overlayRect.width)}px`;else i.left=H(o.x);return i}_getScrollVisibility(){let r=this._getOriginRect(),t=this._pane.getBoundingClientRect(),e=this._scrollables.map(i=>i.getElementRef().nativeElement.getBoundingClientRect());return{isOriginClipped:fl(r,e),isOriginOutsideView:sa(r,e),isOverlayClipped:fl(t,e),isOverlayOutsideView:sa(t,e)}}_subtractOverflows(r,...t){return t.reduce((e,i)=>e-Math.max(i,0),r)}_getNarrowedViewportRect(){let r=this._document.documentElement.clientWidth,t=this._document.documentElement.clientHeight,e=this._viewportRuler.getViewportScrollPosition();return{top:e.top+this._getViewportMarginTop(),left:e.left+this._getViewportMarginStart(),right:e.left+r-this._getViewportMarginEnd(),bottom:e.top+t-this._getViewportMarginBottom(),width:r-this._getViewportMarginStart()-this._getViewportMarginEnd(),height:t-this._getViewportMarginTop()-this._getViewportMarginBottom()}}_isRtl(){return this._overlayRef.getDirection()===`rtl`}_hasExactPosition(){return!this._hasFlexibleDimensions||this._isPushed}_getOffset(r,t){return t===`x`?r.offsetX==null?this._offsetX:r.offsetX:r.offsetY==null?this._offsetY:r.offsetY}_validatePositions(){}_addPanelClasses(r){this._pane&&sn$1(r).forEach(t=>{t!==``&&this._appliedPanelClasses.indexOf(t)===-1&&(this._appliedPanelClasses.push(t),this._pane.classList.add(t))})}_clearPanelClasses(){this._pane&&(this._appliedPanelClasses.forEach(r=>{this._pane.classList.remove(r)}),this._appliedPanelClasses=[])}_getViewportMarginStart(){return typeof this._viewportMargin==`number`?this._viewportMargin:this._viewportMargin?.start??0}_getViewportMarginEnd(){return typeof this._viewportMargin==`number`?this._viewportMargin:this._viewportMargin?.end??0}_getViewportMarginTop(){return typeof this._viewportMargin==`number`?this._viewportMargin:this._viewportMargin?.top??0}_getViewportMarginBottom(){return typeof this._viewportMargin==`number`?this._viewportMargin:this._viewportMargin?.bottom??0}_getOriginRect(){let r=this._origin;if(r instanceof Wr$1)return r.nativeElement.getBoundingClientRect();if(r instanceof Element)return r.getBoundingClientRect();let t=r.width||0,e=r.height||0;return{top:r.y,bottom:r.y+e,left:r.x,right:r.x+t,height:e,width:t}}_getContainerRect(){let r=this._overlayRef.getConfig().usePopover&&this._popoverLocation!==`global`,t=this._overlayContainer.getContainerElement();r&&(t.style.display=`block`);let e=t.getBoundingClientRect();return r&&(t.style.display=``),e}};function Te$1(n,r){for(let t in r)Object.hasOwn(r,t)&&(n[t]=r[t]);return n}function vl(n){if(typeof n!=`number`&&n!=null){let[r,t]=n.split(jm);return!t||t===`px`?parseFloat(r):null}return n||null}function yl(n){return{top:Math.floor(n.top),right:Math.floor(n.right),bottom:Math.floor(n.bottom),left:Math.floor(n.left),width:Math.floor(n.width),height:Math.floor(n.height)}}function Vm(n,r){return n===r?!0:n.isOriginClipped===r.isOriginClipped&&n.isOriginOutsideView===r.isOriginOutsideView&&n.isOverlayClipped===r.isOverlayClipped&&n.isOverlayOutsideView===r.isOverlayOutsideView}var _l=`cdk-global-overlay-wrapper`;function Hm(n){return new ki}var ki=class{_overlayRef;_cssPosition=`static`;_topOffset=``;_bottomOffset=``;_alignItems=``;_xPosition=``;_xOffset=``;_width=``;_height=``;_isDisposed=!1;attach(r){let t=r.getConfig();this._overlayRef=r,this._width&&!t.width&&r.updateSize({width:this._width}),this._height&&!t.height&&r.updateSize({height:this._height}),r.hostElement.classList.add(_l),this._isDisposed=!1}top(r=``){return this._bottomOffset=``,this._topOffset=r,this._alignItems=`flex-start`,this}left(r=``){return this._xOffset=r,this._xPosition=`left`,this}bottom(r=``){return this._topOffset=``,this._bottomOffset=r,this._alignItems=`flex-end`,this}right(r=``){return this._xOffset=r,this._xPosition=`right`,this}start(r=``){return this._xOffset=r,this._xPosition=`start`,this}end(r=``){return this._xOffset=r,this._xPosition=`end`,this}width(r=``){return this._overlayRef?this._overlayRef.updateSize({width:r}):this._width=r,this}height(r=``){return this._overlayRef?this._overlayRef.updateSize({height:r}):this._height=r,this}centerHorizontally(r=``){return this.left(r),this._xPosition=`center`,this}centerVertically(r=``){return this.top(r),this._alignItems=`center`,this}apply(){if(!this._overlayRef||!this._overlayRef.hasAttached())return;let r=this._overlayRef.overlayElement.style,t=this._overlayRef.hostElement.style,{width:i,height:o,maxWidth:a,maxHeight:s}=this._overlayRef.getConfig(),c=(i===`100%`||i===`100vw`)&&(!a||a===`100%`||a===`100vw`),d=(o===`100%`||o===`100vh`)&&(!s||s===`100%`||s===`100vh`),u=this._xPosition,h=this._xOffset,m=this._overlayRef.getConfig().direction===`rtl`,b=``,w=``,D=``;c?D=`flex-start`:u===`center`?(D=`center`,m?w=h:b=h):m?u===`left`||u===`end`?(D=`flex-end`,b=h):(u===`right`||u===`start`)&&(D=`flex-start`,w=h):u===`left`||u===`start`?(D=`flex-start`,b=h):(u===`right`||u===`end`)&&(D=`flex-end`,w=h),r.position=this._cssPosition,r.marginLeft=c?`0`:b,r.marginTop=d?`0`:this._topOffset,r.marginBottom=this._bottomOffset,r.marginRight=c?`0`:w,t.justifyContent=D,t.alignItems=d?`flex-start`:this._alignItems}dispose(){if(this._isDisposed||!this._overlayRef)return;let r=this._overlayRef.overlayElement.style,t=this._overlayRef.hostElement,e=t.style;t.classList.remove(_l),e.justifyContent=e.alignItems=r.marginTop=r.marginBottom=r.marginLeft=r.marginRight=r.position=``,this._overlayRef=null,this._isDisposed=!0}};var Rl=new S$1(`OVERLAY_DEFAULT_CONFIG`);function $m(n,r){n.get(_t).load(Dl);let t=n.get(El),e=n.get(mt$1),i=n.get(Yn),o=n.get(wt$1),a=n.get(Vn),s=n.get(Ic$1,null,{optional:!0})||n.get(Vr$1).createRenderer(null,null),c=new Ai(r),d=n.get(Rl,null,{optional:!0})?.usePopover??!0;c.direction=c.direction||a.value,!e.body||!(`showPopover`in e.body)?c.usePopover=!1:c.usePopover=r?.usePopover??d;let u=e.createElement(`div`),h=e.createElement(`div`);u.id=i.getId(`cdk-overlay-`),u.classList.add(`cdk-overlay-pane`),h.appendChild(u),c.usePopover&&(h.setAttribute(`popover`,`manual`),h.classList.add(`cdk-overlay-popover`));let m=c.usePopover?c.positionStrategy?.getPopoverInsertionPoint?.():null;return la(m)?m.after(h):m?.type===`parent`?m.element.appendChild(h):t.getContainerElement().appendChild(h),new Ti(new Ri(u,o,n),h,u,c,n.get(Fe$1),n.get(wl),e,n.get(ae),n.get(Cl),r?.disableAnimations??n.get(Zv,null,{optional:!0})===`NoopAnimations`,n.get(Ee$1),s)}var K=20;var J$1=new S$1(`mat-tooltip-scroll-strategy`,{providedIn:`root`,factory:()=>{let a=v(se$1);return()=>Um(a,{scrollThrottle:K})}});var tt=new S$1(`mat-tooltip-default-options`,{providedIn:`root`,factory:()=>({showDelay:0,hideDelay:0,touchendHideDelay:1500})});var Q=`tooltip-panel`;var et={passive:!0};var it=8;var ot=8;var nt=24;var st=200;var at=(()=>{class a{_elementRef=v(Wr$1);_ngZone=v(Fe$1);_platform=v(V$1);_ariaDescriber=v(rS);_focusMonitor=v(pi);_dir=v(Vn);_injector=v(se$1);_viewContainerRef=v(is$1);_mediaMatcher=v(fi);_document=v(mt$1);_renderer=v(Ic$1);_animationsDisabled=dn();_defaultOptions=v(tt,{optional:!0});_overlayRef=null;_tooltipInstance=null;_overlayPanelClass;_portal;_position=`below`;_positionAtOrigin=!1;_disabled=!1;_tooltipClass;_viewInitialized=!1;_pointerExitEventsInitialized=!1;_tooltipComponent=W;_viewportMargin=8;_currentPosition;_cssClassPrefix=`mat-mdc`;_ariaDescriptionPending=!1;_dirSubscribed=!1;get position(){return this._position}set position(t){t!==this._position&&(this._position=t,this._overlayRef&&(this._updatePosition(this._overlayRef),this._tooltipInstance?.show(0),this._overlayRef.updatePosition()))}get positionAtOrigin(){return this._positionAtOrigin}set positionAtOrigin(t){this._positionAtOrigin=DS(t),this._detach(),this._overlayRef=null}get disabled(){return this._disabled}set disabled(t){let e=DS(t);this._disabled!==e&&(this._disabled=e,e?this.hide(0):this._setupPointerEnterEventsIfNeeded(),this._syncAriaDescription(this.message))}get showDelay(){return this._showDelay}set showDelay(t){this._showDelay=hi(t)}_showDelay;get hideDelay(){return this._hideDelay}set hideDelay(t){this._hideDelay=hi(t),this._tooltipInstance&&(this._tooltipInstance._mouseLeaveHideDelay=this._hideDelay)}_hideDelay;touchGestures=`auto`;get message(){return this._message}set message(t){let e=this._message;this._message=t!=null?String(t).trim():``,!this._message&&this._isTooltipVisible()?this.hide(0):(this._setupPointerEnterEventsIfNeeded(),this._updateTooltipMessage()),this._syncAriaDescription(e)}_message=``;get tooltipClass(){return this._tooltipClass}set tooltipClass(t){this._tooltipClass=t,this._tooltipInstance&&this._setTooltipClass(this._tooltipClass)}_eventCleanups=[];_touchstartTimeout=null;_destroyed=new ee;_isDestroyed=!1;constructor(){let t=this._defaultOptions;t&&(this._showDelay=t.showDelay,this._hideDelay=t.hideDelay,t.position&&(this.position=t.position),t.positionAtOrigin&&(this.positionAtOrigin=t.positionAtOrigin),t.touchGestures&&(this.touchGestures=t.touchGestures),t.tooltipClass&&(this.tooltipClass=t.tooltipClass)),this._viewportMargin=it}ngAfterViewInit(){this._viewInitialized=!0,this._setupPointerEnterEventsIfNeeded(),this._focusMonitor.monitor(this._elementRef).pipe(av(this._destroyed)).subscribe(t=>{t?t===`keyboard`&&this._ngZone.run(()=>this.show()):this._ngZone.run(()=>this.hide(0))})}ngOnDestroy(){let t=this._elementRef.nativeElement;this._touchstartTimeout&&clearTimeout(this._touchstartTimeout),this._overlayRef&&(this._overlayRef.dispose(),this._tooltipInstance=null),this._eventCleanups.forEach(e=>e()),this._eventCleanups.length=0,this._destroyed.next(),this._destroyed.complete(),this._isDestroyed=!0,this._ariaDescriber.removeDescription(t,this.message,`tooltip`),this._focusMonitor.stopMonitoring(t)}show(t=this.showDelay,e){if(this.disabled||!this.message||this._isTooltipVisible()){this._tooltipInstance?._cancelPendingAnimations();return}let i=this._createOverlay(e);this._detach(),this._portal=this._portal||new ia(this._tooltipComponent,this._viewContainerRef);let o=this._tooltipInstance=i.attach(this._portal).instance;o._triggerElement=this._elementRef.nativeElement,o._mouseLeaveHideDelay=this._hideDelay,o.afterHidden().pipe(av(this._destroyed)).subscribe(()=>this._detach()),this._setTooltipClass(this._tooltipClass),this._updateTooltipMessage(),o.show(t)}hide(t=this.hideDelay){let e=this._tooltipInstance;e&&(e.isVisible()?e.hide(t):(e._cancelPendingAnimations(),this._detach()))}toggle(t){this._isTooltipVisible()?this.hide():this.show(void 0,t)}_isTooltipVisible(){return!!this._tooltipInstance&&this._tooltipInstance.isVisible()}_createOverlay(t){if(this._overlayRef){let n=this._overlayRef.getConfig().positionStrategy;if((!this.positionAtOrigin||!t)&&n._origin instanceof Wr$1)return this._overlayRef;this._detach()}let e=this._injector.get(Di).getAncestorScrollContainers(this._elementRef),i=`${this._cssClassPrefix}-${Q}`,o=zm(this._injector,this.positionAtOrigin?t||this._elementRef:this._elementRef).withTransformOriginOn(`.${this._cssClassPrefix}-tooltip`).withFlexibleDimensions(!1).withViewportMargin(this._viewportMargin).withScrollableContainers(e).withPopoverLocation(`global`);return o.positionChanges.pipe(av(this._destroyed)).subscribe(n=>{this._updateCurrentPositionClass(n.connectionPair),this._tooltipInstance&&n.scrollableViewProperties.isOverlayClipped&&this._tooltipInstance.isVisible()&&this._ngZone.run(()=>this.hide(0))}),this._overlayRef=$m(this._injector,{direction:this._dir,positionStrategy:o,panelClass:this._overlayPanelClass?[...this._overlayPanelClass,i]:i,scrollStrategy:this._injector.get(J$1)(),disableAnimations:this._animationsDisabled,eventPredicate:this._overlayEventPredicate}),this._updatePosition(this._overlayRef),this._overlayRef.detachments().pipe(av(this._destroyed)).subscribe(()=>this._detach()),this._overlayRef.outsidePointerEvents().pipe(av(this._destroyed)).subscribe(()=>this._tooltipInstance?._handleBodyInteraction()),this._overlayRef.keydownEvents().pipe(av(this._destroyed)).subscribe(n=>{n.preventDefault(),n.stopPropagation(),this._ngZone.run(()=>this.hide(0))}),this._defaultOptions?.disableTooltipInteractivity&&this._overlayRef.addPanelClass(`${this._cssClassPrefix}-tooltip-panel-non-interactive`),this._dirSubscribed||(this._dirSubscribed=!0,this._dir.change.pipe(av(this._destroyed)).subscribe(()=>{this._overlayRef&&this._updatePosition(this._overlayRef)})),this._overlayRef}_detach(){this._overlayRef&&this._overlayRef.hasAttached()&&this._overlayRef.detach(),this._tooltipInstance=null}_updatePosition(t){let e=t.getConfig().positionStrategy,i=this._getOrigin(),o=this._getOverlayPosition();e.withPositions([this._addOffset(z(z({},i.main),o.main)),this._addOffset(z(z({},i.fallback),o.fallback))])}_addOffset(t){let e=ot,i=!this._dir||this._dir.value==`ltr`;return t.originY===`top`?t.offsetY=-e:t.originY===`bottom`?t.offsetY=e:t.originX===`start`?t.offsetX=i?-e:e:t.originX===`end`&&(t.offsetX=i?e:-e),t}_getOrigin(){let t=!this._dir||this._dir.value==`ltr`,e=this.position,i;e==`above`||e==`below`?i={originX:`center`,originY:e==`above`?`top`:`bottom`}:e==`before`||e==`left`&&t||e==`right`&&!t?i={originX:`start`,originY:`center`}:(e==`after`||e==`right`&&t||e==`left`&&!t)&&(i={originX:`end`,originY:`center`});let{x:o,y:n}=this._invertPosition(i.originX,i.originY);return{main:i,fallback:{originX:o,originY:n}}}_getOverlayPosition(){let t=!this._dir||this._dir.value==`ltr`,e=this.position,i;e==`above`?i={overlayX:`center`,overlayY:`bottom`}:e==`below`?i={overlayX:`center`,overlayY:`top`}:e==`before`||e==`left`&&t||e==`right`&&!t?i={overlayX:`end`,overlayY:`center`}:(e==`after`||e==`right`&&t||e==`left`&&!t)&&(i={overlayX:`start`,overlayY:`center`});let{x:o,y:n}=this._invertPosition(i.overlayX,i.overlayY);return{main:i,fallback:{overlayX:o,overlayY:n}}}_updateTooltipMessage(){this._tooltipInstance&&(this._tooltipInstance.message=this.message,this._tooltipInstance._markForCheck(),Dh$1(()=>{this._tooltipInstance&&this._overlayRef.updatePosition()},{injector:this._injector}))}_setTooltipClass(t){this._tooltipInstance&&(this._tooltipInstance.tooltipClass=t instanceof Set?Array.from(t):t,this._tooltipInstance._markForCheck())}_invertPosition(t,e){return this.position===`above`||this.position===`below`?e===`top`?e=`bottom`:e===`bottom`&&(e=`top`):t===`end`?t=`start`:t===`start`&&(t=`end`),{x:t,y:e}}_updateCurrentPositionClass(t){let{overlayY:e,originX:i,originY:o}=t,n;if(e===`center`?this._dir&&this._dir.value===`rtl`?n=i===`end`?`left`:`right`:n=i===`start`?`left`:`right`:n=e===`bottom`&&o===`top`?`above`:`below`,n!==this._currentPosition){let l=this._overlayRef;if(l){let b=`${this._cssClassPrefix}-${Q}-`;l.removePanelClass(b+this._currentPosition),l.addPanelClass(b+n)}this._currentPosition=n}}_setupPointerEnterEventsIfNeeded(){this._disabled||!this.message||!this._viewInitialized||this._eventCleanups.length||(this._isTouchPlatform()?this.touchGestures!==`off`&&(this._disableNativeGesturesIfNecessary(),this._addListener(`touchstart`,t=>{let e=t.targetTouches?.[0],i=e?{x:e.clientX,y:e.clientY}:void 0;this._setupPointerExitEventsIfNeeded(),this._touchstartTimeout&&clearTimeout(this._touchstartTimeout);let o=500;this._touchstartTimeout=setTimeout(()=>{this._touchstartTimeout=null,this.show(void 0,i)},this._defaultOptions?.touchLongPressShowDelay??o)})):this._addListener(`mouseenter`,t=>{this._setupPointerExitEventsIfNeeded();let e;t.x!==void 0&&t.y!==void 0&&(e=t),this.show(void 0,e)}))}_setupPointerExitEventsIfNeeded(){if(!this._pointerExitEventsInitialized){if(this._pointerExitEventsInitialized=!0,!this._isTouchPlatform())this._addListener(`mouseleave`,t=>{let e=t.relatedTarget;(!e||!this._overlayRef?.overlayElement.contains(e))&&this.hide()}),this._addListener(`wheel`,t=>{if(this._isTooltipVisible()){let e=this._document.elementFromPoint(t.clientX,t.clientY),i=this._elementRef.nativeElement;e!==i&&!i.contains(e)&&this.hide()}});else if(this.touchGestures!==`off`){this._disableNativeGesturesIfNecessary();let t=()=>{this._touchstartTimeout&&clearTimeout(this._touchstartTimeout),this.hide(this._defaultOptions?.touchendHideDelay)};this._addListener(`touchend`,t),this._addListener(`touchcancel`,t)}}}_addListener(t,e){this._eventCleanups.push(this._renderer.listen(this._elementRef.nativeElement,t,e,et))}_isTouchPlatform(){let t=this._defaultOptions?.detectHoverCapability;return typeof t==`function`?!t():this._platform.IOS||this._platform.ANDROID?!0:this._platform.isBrowser?!!t&&this._mediaMatcher.matchMedia(`(any-hover: none)`).matches:!1}_disableNativeGesturesIfNecessary(){let t=this.touchGestures;if(t!==`off`){let e=this._elementRef.nativeElement,i=e.style;(t===`on`||e.nodeName!==`INPUT`&&e.nodeName!==`TEXTAREA`)&&(i.userSelect=i.msUserSelect=i.webkitUserSelect=i.MozUserSelect=`none`),(t===`on`||!e.draggable)&&(i.webkitUserDrag=`none`),i.touchAction=`none`,i.webkitTapHighlightColor=`transparent`}}_syncAriaDescription(t){this._ariaDescriptionPending||(this._ariaDescriptionPending=!0,this._ariaDescriber.removeDescription(this._elementRef.nativeElement,t,`tooltip`),this._isDestroyed||Dh$1({write:()=>{this._ariaDescriptionPending=!1,this.message&&!this.disabled&&this._ariaDescriber.describe(this._elementRef.nativeElement,this.message,`tooltip`)}},{injector:this._injector}))}_overlayEventPredicate=t=>t.type===`keydown`?this._isTooltipVisible()&&t.keyCode===27&&!Kc(t):!0;static ɵfac=function(e){return new(e||a)};static ɵdir=fw({type:a,selectors:[[``,`matTooltip`,``]],hostAttrs:[1,`mat-mdc-tooltip-trigger`],hostVars:2,hostBindings:function(e,i){e&2&&pm$1(`mat-mdc-tooltip-disabled`,i.disabled)},inputs:{position:[0,`matTooltipPosition`,`position`],positionAtOrigin:[0,`matTooltipPositionAtOrigin`,`positionAtOrigin`],disabled:[0,`matTooltipDisabled`,`disabled`],showDelay:[0,`matTooltipShowDelay`,`showDelay`],hideDelay:[0,`matTooltipHideDelay`,`hideDelay`],touchGestures:[0,`matTooltipTouchGestures`,`touchGestures`],message:[0,`matTooltip`,`message`],tooltipClass:[0,`matTooltipClass`,`tooltipClass`]},exportAs:[`matTooltip`]})}return a})();var W=(()=>{class a{_changeDetectorRef=v(_j);_elementRef=v(Wr$1);_isMultiline=!1;message;tooltipClass;_showTimeoutId;_hideTimeoutId;_triggerElement;_mouseLeaveHideDelay;_animationsDisabled=dn();_tooltip;_closeOnInteraction=!1;_isVisible=!1;_onHide=new ee;_showAnimation=`mat-mdc-tooltip-show`;_hideAnimation=`mat-mdc-tooltip-hide`;show(t){this._hideTimeoutId!=null&&clearTimeout(this._hideTimeoutId),this._showTimeoutId=setTimeout(()=>{this._toggleVisibility(!0),this._showTimeoutId=void 0},t)}hide(t){this._showTimeoutId!=null&&clearTimeout(this._showTimeoutId),this._hideTimeoutId=setTimeout(()=>{this._toggleVisibility(!1),this._hideTimeoutId=void 0},t)}afterHidden(){return this._onHide}isVisible(){return this._isVisible}ngOnDestroy(){this._cancelPendingAnimations(),this._onHide.complete(),this._triggerElement=null}_handleBodyInteraction(){this._closeOnInteraction&&this.hide(0)}_markForCheck(){this._changeDetectorRef.markForCheck()}_handleMouseLeave({relatedTarget:t}){(!t||!this._triggerElement.contains(t))&&(this.isVisible()?this.hide(this._mouseLeaveHideDelay):this._finalizeAnimation(!1))}_onShow(){this._isMultiline=this._isTooltipMultiline(),this._markForCheck()}_isTooltipMultiline(){let t=this._elementRef.nativeElement.getBoundingClientRect();return t.height>nt&&t.width>=st}_handleAnimationEnd({animationName:t}){(t===this._showAnimation||t===this._hideAnimation)&&this._finalizeAnimation(t===this._showAnimation)}_cancelPendingAnimations(){this._showTimeoutId!=null&&clearTimeout(this._showTimeoutId),this._hideTimeoutId!=null&&clearTimeout(this._hideTimeoutId),this._showTimeoutId=this._hideTimeoutId=void 0}_finalizeAnimation(t){t?this._closeOnInteraction=!0:this.isVisible()||this._onHide.next()}_toggleVisibility(t){let e=this._tooltip.nativeElement,i=this._showAnimation,o=this._hideAnimation;if(e.classList.remove(t?o:i),e.classList.add(t?i:o),this._isVisible!==t&&(this._isVisible=t,this._changeDetectorRef.markForCheck()),t&&!this._animationsDisabled&&typeof getComputedStyle==`function`){let n=getComputedStyle(e);(n.getPropertyValue(`animation-duration`)===`0s`||n.getPropertyValue(`animation-name`)===`none`)&&(this._animationsDisabled=!0)}t&&this._onShow(),this._animationsDisabled&&(e.classList.add(`_mat-animation-noopable`),this._finalizeAnimation(t))}static ɵfac=function(e){return new(e||a)};static ɵcmp=(function(){let t=[`tooltip`];return aw({type:a,selectors:[[`mat-tooltip-component`]],viewQuery:function(i,o){if(i&1&&im$1(t,7),i&2){let n;IC(n=DC())&&(o._tooltip=n.first)}},hostAttrs:[`aria-hidden`,`true`],hostBindings:function(i,o){i&1&&nm$1(`mouseleave`,function(l){return o._handleMouseLeave(l)})},decls:4,vars:5,consts:[[`tooltip`,``],[1,`mdc-tooltip`,`mat-mdc-tooltip`,3,`animationend`],[1,`mat-mdc-tooltip-surface`,`mdc-tooltip__surface`]],template:function(i,o){i&1&&(kl(0,`div`,1,0),rm$1(`animationend`,function(l){return o._handleAnimationEnd(l)}),kl(2,`div`,2),QC(3),Ll()()),i&2&&(jC(o.tooltipClass),pm$1(`mdc-tooltip--multiline`,o._isMultiline),ID(3),wm$1(o.message))},styles:[`.mat-mdc-tooltip {
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
`],encapsulation:2})})()}return a})();var c=class s{httpClient=v(we$1);identityService=v(ml);getProfileInfo_Url=`/api/UserProfile/GetProfileInfo?userId=`;myProfileInfo=po(()=>this.identityService.isAuthenticated()?`${this.getProfileInfo_Url}${this.identityService.myIdentityInfo.value()?.id}`:void 0);constructor(){}getUserAvatarUrl(e){let t=new at$1().set(`userId`,e);return this.httpClient.get(`/api/UserProfile/GetUserAvatarUrl`,{params:t})}saveUserAvatar(e){let t=new FormData;return t.append(`userImageFile`,e),this.httpClient.post(`/api/UserProfile/SubmitUserImage`,t).pipe(ju$1({next:r=>{r&&r.success&&this.myProfileInfo.reload()}}))}deleteUserAvatar(){return this.httpClient.delete(`/api/UserProfile/DeleteUserImage`).pipe(ju$1({next:e=>{e&&e.success&&this.myProfileInfo.reload()}}))}changeName(e){let t=new at$1().set(`name`,e);return this.httpClient.post(`/api/UserProfile/SubmitProfileName`,t).pipe(ju$1({next:r=>{r&&r.success&&this.myProfileInfo.reload()}}))}changeDescription(e){let t=new at$1().set(`description`,e);return this.httpClient.post(`/api/UserProfile/SubmitDescription`,t).pipe(ju$1({next:r=>{r&&r.success&&this.myProfileInfo.reload()}}))}static ɵfac=function(t){return new(t||s)};static ɵprov=$r$1({token:s,factory:s.ɵfac})};var we=class a{static ɵfac=function(e){return new(e||a)};static ɵcmp=aw({type:a,selectors:[[`app-home`]],decls:2,vars:0,template:function(e,t){e&1&&(kl(0,`p`),QC(1,`home works!`),Ll())},encapsulation:2})};var Lt=[{path:`Identity/Login`,loadComponent:()=>import(`./chunk-CIUKUqhF.js`).then(a=>a.Login)},{path:`Identity/Signup`,loadComponent:()=>import(`./chunk-CEGDbTar.js`).then(a=>a.Signup)},{path:`Identity/Setting`,loadComponent:()=>import(`./chunk-Bfm0eN8A.js`).then(a=>a.Setting)},{path:`Identity/ResetPassword`,loadComponent:()=>import(`./chunk-4fOC5vBd.js`).then(a=>a.ResetPassword)}];var zt=(a,m)=>{let e=v(ml),t=v(Ie$1);return e.isAuthenticated()?!0:t.createUrlTree([`/identity/login`],{queryParams:{ReturnUrl:m.url}})};var Ht=[...[{path:`UserAccount/Profile/:userId`,loadComponent:()=>import(`./chunk-Cjv4NUP4.js`).then(a=>a.Profile)},{path:`UserAccount/Profile`,loadComponent:()=>import(`./chunk-Cjv4NUP4.js`).then(a=>a.Profile)},{path:`UserAccount/ProfileSetting`,loadComponent:()=>import(`./chunk-CRr6TrN6.js`).then(a=>a.ProfileSetting),canActivate:[zt]}]];var Vt=[{path:``,component:we},...Lt,...Ht];var en=Math.pow(2,31)-1;var Z=class{_overlayRef;instance;containerInstance;_afterDismissed=new ee;_afterOpened=new ee;_onAction=new ee;_durationTimeoutId;_dismissedByAction=!1;constructor(m,e){this._overlayRef=e,this.containerInstance=m,m._onExit.subscribe(()=>this._finishDismiss())}dismiss(){this._afterDismissed.closed||this.containerInstance.exit(),clearTimeout(this._durationTimeoutId)}dismissWithAction(){this._onAction.closed||(this._dismissedByAction=!0,this._onAction.next(),this._onAction.complete(),this.dismiss()),clearTimeout(this._durationTimeoutId)}closeWithAction(){this.dismissWithAction()}_dismissAfter(m){this._durationTimeoutId=setTimeout(()=>this.dismiss(),Math.min(m,en))}_open(){this._afterOpened.closed||(this._afterOpened.next(),this._afterOpened.complete())}_finishDismiss(){this._overlayRef.dispose(),this._onAction.closed||this._onAction.complete(),this._afterDismissed.next({dismissedByAction:this._dismissedByAction}),this._afterDismissed.complete(),this._dismissedByAction=!1}afterDismissed(){return this._afterDismissed}afterOpened(){return this.containerInstance._onEnter}onAction(){return this._onAction}};var qt=new S$1(`MatSnackBarData`);var V=class{politeness=`polite`;announcementMessage=``;viewContainerRef;duration=0;panelClass;direction;data=null;horizontalPosition=`center`;verticalPosition=`bottom`};var tn=(()=>{class a{static ɵfac=function(t){return new(t||a)};static ɵdir=fw({type:a,selectors:[[``,`matSnackBarLabel`,``]],hostAttrs:[1,`mat-mdc-snack-bar-label`,`mdc-snackbar__label`]})}return a})();var nn=(()=>{class a{static ɵfac=function(t){return new(t||a)};static ɵdir=fw({type:a,selectors:[[``,`matSnackBarActions`,``]],hostAttrs:[1,`mat-mdc-snack-bar-actions`,`mdc-snackbar__actions`]})}return a})();var an=(()=>{class a{static ɵfac=function(t){return new(t||a)};static ɵdir=fw({type:a,selectors:[[``,`matSnackBarAction`,``]],hostAttrs:[1,`mat-mdc-snack-bar-action`,`mdc-snackbar__action`]})}return a})();var on=(()=>{class a{snackBarRef=v(Z);data=v(qt);action(){this.snackBarRef.dismissWithAction()}get hasAction(){return!!this.data.action}static ɵfac=function(t){return new(t||a)};static ɵcmp=(function(){function e(t,n){if(t&1){let i=fC();Hi(0,`div`,1)(1,`button`,2),nm$1(`click`,function(){Sd$1(i);let r=gC();return xd$1(r.action())}),QC(2),Rl$1()()}if(t&2){let i=gC();ID(2),Vl$1(` `,i.data.action,` `)}}return aw({type:a,selectors:[[`simple-snack-bar`]],hostAttrs:[1,`mat-mdc-simple-snack-bar`],exportAs:[`matSnackBar`],decls:3,vars:2,consts:[[`matSnackBarLabel`,``],[`matSnackBarActions`,``],[`matButton`,``,`matSnackBarAction`,``,3,`click`]],template:function(n,i){n&1&&(Hi(0,`div`,0),QC(1),Rl$1(),eC(2,e,3,1,`div`,1)),n&2&&(ID(),Vl$1(` `,i.data.message,`
`),ID(),nC(i.hasAction?2:-1))},dependencies:[d0,tn,nn,an],styles:[`.mat-mdc-simple-snack-bar {
  display: flex;
}
.mat-mdc-simple-snack-bar .mat-mdc-snack-bar-label {
  max-height: 50vh;
  overflow: auto;
}
`],encapsulation:2})})()}return a})();var Fe=`_mat-snack-bar-enter`;var Le=`_mat-snack-bar-exit`;var rn=(()=>{class a extends Ei{_ngZone=v(Fe$1);_elementRef=v(Wr$1);_changeDetectorRef=v(_j);_platform=v(V$1);_animationsDisabled=dn();snackBarConfig=v(V);_document=v(mt$1);_trackedModals=/* @__PURE__ */ new Set;_enterFallback;_exitFallback;_injector=v(se$1);_announceDelay=150;_announceTimeoutId;_destroyed=!1;_portalOutlet;_onAnnounce=new ee;_onExit=new ee;_onEnter=new ee;_animationState=`void`;_live;_label;_role;_liveElementId=v(Yn).getId(`mat-snack-bar-container-live-`);constructor(){super();let e=this.snackBarConfig;e.politeness===`assertive`&&!e.announcementMessage?this._live=`assertive`:e.politeness===`off`?this._live=`off`:this._live=`polite`,this._platform.FIREFOX&&(this._live===`polite`&&(this._role=`status`),this._live===`assertive`&&(this._role=`alert`))}attachComponentPortal(e){this._assertNotAttached();let t=this._portalOutlet.attachComponentPortal(e);return this._afterPortalAttached(),t}attachTemplatePortal(e){this._assertNotAttached();let t=this._portalOutlet.attachTemplatePortal(e);return this._afterPortalAttached(),t}attachDomPortal=e=>{this._assertNotAttached();let t=this._portalOutlet.attachDomPortal(e);return this._afterPortalAttached(),t};onAnimationEnd(e){e===Le?this._completeExit():e===Fe&&(clearTimeout(this._enterFallback),this._ngZone.run(()=>{this._onEnter.next(),this._onEnter.complete()}))}enter(){this._destroyed||(this._animationState=`visible`,this._changeDetectorRef.markForCheck(),this._changeDetectorRef.detectChanges(),this._screenReaderAnnounce(),this._animationsDisabled?Dh$1(()=>{this._ngZone.run(()=>queueMicrotask(()=>this.onAnimationEnd(Fe)))},{injector:this._injector}):(clearTimeout(this._enterFallback),this._enterFallback=setTimeout(()=>{this._elementRef.nativeElement.classList.add(`mat-snack-bar-fallback-visible`),this.onAnimationEnd(Fe)},200)))}exit(){return this._destroyed?Ay(void 0):(this._ngZone.run(()=>{this._animationState=`hidden`,this._changeDetectorRef.markForCheck(),this._elementRef.nativeElement.setAttribute(`mat-exit`,``),clearTimeout(this._announceTimeoutId),this._animationsDisabled?Dh$1(()=>{this._ngZone.run(()=>queueMicrotask(()=>this.onAnimationEnd(Le)))},{injector:this._injector}):(clearTimeout(this._exitFallback),this._exitFallback=setTimeout(()=>this.onAnimationEnd(Le),200))}),this._onExit)}ngOnDestroy(){this._destroyed=!0,this._clearFromModals(),this._completeExit()}_completeExit(){clearTimeout(this._exitFallback),queueMicrotask(()=>{this._onExit.next(),this._onExit.complete()})}_afterPortalAttached(){let e=this._elementRef.nativeElement,t=this.snackBarConfig.panelClass;t&&(Array.isArray(t)?t.forEach(o=>e.classList.add(o)):e.classList.add(t)),this._exposeToModals();let n=this._label.nativeElement,i=`mdc-snackbar__label`;n.classList.toggle(i,!n.querySelector(`.${i}`))}_exposeToModals(){let e=this._liveElementId,t=this._document.querySelectorAll(`body > .cdk-overlay-container [aria-modal="true"]`);for(let n=0;n<t.length;n++){let i=t[n],o=i.getAttribute(`aria-owns`);this._trackedModals.add(i),o?o.indexOf(e)===-1&&i.setAttribute(`aria-owns`,o+` `+e):i.setAttribute(`aria-owns`,e)}}_clearFromModals(){this._trackedModals.forEach(e=>{let t=e.getAttribute(`aria-owns`);if(t){let n=t.replace(this._liveElementId,``).trim();n.length>0?e.setAttribute(`aria-owns`,n):e.removeAttribute(`aria-owns`)}}),this._trackedModals.clear()}_assertNotAttached(){this._portalOutlet.hasAttached()}_screenReaderAnnounce(){this._announceTimeoutId||this._ngZone.runOutsideAngular(()=>{this._announceTimeoutId=setTimeout(()=>{if(this._destroyed)return;let e=this._elementRef.nativeElement,t=e.querySelector(`[aria-hidden]`),n=e.querySelector(`[aria-live]`);if(t&&n){let i=null;this._platform.isBrowser&&document.activeElement instanceof HTMLElement&&t.contains(document.activeElement)&&(i=document.activeElement),t.removeAttribute(`aria-hidden`),n.appendChild(t),i?.focus(),this._onAnnounce.next(),this._onAnnounce.complete()}},this._announceDelay)})}static ɵfac=function(t){return new(t||a)};static ɵcmp=(function(){let e=[`label`];function t(n,i){}return aw({type:a,selectors:[[`mat-snack-bar-container`]],viewQuery:function(i,o){if(i&1&&im$1(K0,7)(e,7),i&2){let r;IC(r=DC())&&(o._portalOutlet=r.first),IC(r=DC())&&(o._label=r.first)}},hostAttrs:[1,`mdc-snackbar`,`mat-mdc-snack-bar-container`],hostVars:6,hostBindings:function(i,o){i&1&&nm$1(`animationend`,function(l){return o.onAnimationEnd(l.animationName)})(`animationcancel`,function(l){return o.onAnimationEnd(l.animationName)}),i&2&&pm$1(`mat-snack-bar-container-enter`,o._animationState===`visible`)(`mat-snack-bar-container-exit`,o._animationState===`hidden`)(`mat-snack-bar-container-animations-enabled`,!o._animationsDisabled)},features:[Og],decls:6,vars:3,consts:[[`label`,``],[1,`mdc-snackbar__surface`,`mat-mdc-snackbar-surface`],[1,`mat-mdc-snack-bar-label`],[`aria-hidden`,`true`],[`cdkPortalOutlet`,``]],template:function(i,o){i&1&&(Hi(0,`div`,1)(1,`div`,2,0)(3,`div`,3),kg(4,t,0,0,`ng-template`,4),Rl$1(),Qg(5,`div`),Rl$1()()),i&2&&(ID(5),qg(`aria-live`,o._live)(`role`,o._role)(`id`,o._liveElementId))},dependencies:[K0],styles:[`@keyframes _mat-snack-bar-enter {
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
`],encapsulation:2,changeDetection:1})})()}return a})();var sn=new S$1(`mat-snack-bar-default-options`,{providedIn:`root`,factory:()=>new V});var Qt=(()=>{class a{_live=v(Sm);_injector=v(se$1);_breakpointObserver=v(om);_parentSnackBar=v(a,{optional:!0,skipSelf:!0});_defaultConfig=v(sn);_animationsDisabled=dn();_snackBarRefAtThisLevel=null;simpleSnackBarComponent=on;snackBarContainerComponent=rn;handsetCssClass=`mat-mdc-snack-bar-handset`;get _openedSnackBarRef(){let e=this._parentSnackBar;return e?e._openedSnackBarRef:this._snackBarRefAtThisLevel}set _openedSnackBarRef(e){this._parentSnackBar?this._parentSnackBar._openedSnackBarRef=e:this._snackBarRefAtThisLevel=e}openFromComponent(e,t){return this._attach(e,t)}openFromTemplate(e,t){return this._attach(e,t)}open(e,t=``,n){let i=z(z({},this._defaultConfig),n);return i.data={message:e,action:t},i.announcementMessage===e&&(i.announcementMessage=void 0),this.openFromComponent(this.simpleSnackBarComponent,i)}dismiss(){this._openedSnackBarRef&&this._openedSnackBarRef.dismiss()}ngOnDestroy(){this._snackBarRefAtThisLevel&&this._snackBarRefAtThisLevel.dismiss()}_attachSnackBarContainer(e,t){let n=t&&t.viewContainerRef&&t.viewContainerRef.injector,i=se$1.create({parent:n||this._injector,providers:[{provide:V,useValue:t}]}),o=new ia(this.snackBarContainerComponent,t.viewContainerRef,i),r=e.attach(o);return r.instance.snackBarConfig=t,r.instance}_attach(e,t){let n=z(z(z({},new V),this._defaultConfig),t),i=this._createOverlay(n),o=this._attachSnackBarContainer(i,n),r=new Z(o,i);if(e instanceof Fr$1){let l=new tr(e,null,{$implicit:n.data,snackBarRef:r});r.instance=o.attachTemplatePortal(l)}else{let l=this._createInjector(n,r),g=new ia(e,void 0,l);r.instance=o.attachComponentPortal(g).instance}return this._breakpointObserver.observe(bS.HandsetPortrait).pipe(av(i.detachments())).subscribe(l=>{i.overlayElement.classList.toggle(this.handsetCssClass,l.matches)}),n.announcementMessage&&o._onAnnounce.subscribe(()=>{this._live.announce(n.announcementMessage,n.politeness)}),this._animateSnackBar(r,n),this._openedSnackBarRef=r,this._openedSnackBarRef}_animateSnackBar(e,t){e.afterDismissed().subscribe(()=>{this._openedSnackBarRef==e&&(this._openedSnackBarRef=null),t.announcementMessage&&this._live.clear()}),t.duration&&t.duration>0&&e.afterOpened().subscribe(()=>e._dismissAfter(t.duration)),this._openedSnackBarRef?(this._openedSnackBarRef.afterDismissed().subscribe(()=>{e.containerInstance.enter()}),this._openedSnackBarRef.dismiss()):e.containerInstance.enter()}_createOverlay(e){let t=new Ai;t.direction=e.direction;let n=Hm(this._injector),i=e.direction===`rtl`,o=e.horizontalPosition===`left`||e.horizontalPosition===`start`&&!i||e.horizontalPosition===`end`&&i,r=!o&&e.horizontalPosition!==`center`;return o?n.left(`0`):r?n.right(`0`):n.centerHorizontally(),e.verticalPosition===`top`?n.top(`0`):n.bottom(`0`),t.positionStrategy=n,t.disableAnimations=this._animationsDisabled,$m(this._injector,t)}_createInjector(e,t){let n=e&&e.viewContainerRef&&e.viewContainerRef.injector;return se$1.create({parent:n||this._injector,providers:[{provide:Z,useValue:t},{provide:qt,useValue:e.data}]})}static ɵfac=function(t){return new(t||a)};static ɵprov=$r$1({token:a,factory:a.ɵfac})}return a})();var Se=class a{snackBar=v(Qt);handleError(m){let e=m.rejection||m,t=``;if(e instanceof se)switch(e.status){case 0:t=`Connection Error`;break;case cs.Unauthorized:t=`Unauthorized`;break;case cs.Forbidden:t=`Access Denied`;break;case cs.BadRequest:t=`Bad Request`;break;default:t=`Unknown Error`}else t=`Application Error`;this.snackBar.open(t,`Ok`),console.error(t,e)}static ɵfac=function(e){return new(e||a)};static ɵprov=ae$1({token:a,factory:a.ɵfac,providedIn:`root`})};var Wt={providers:[{provide:Je$1,useClass:Se},zv(),Lh(Vt,Hh(Ph)),Sb(),Td(Od({cookieName:`XSRF-TOKEN`,headerName:`X-CSRF-TOKEN`}))]};var je=new S$1(`MAT_MENU_PANEL`);var J=(()=>{class a{_isAnchor;_elementRef=v(Wr$1);_document=v(mt$1);_focusMonitor=v(pi);_parentMenu=v(je,{optional:!0});_changeDetectorRef=v(_j);role=`menuitem`;disabled=!1;disabledInteractive=!1;disableRipple=!1;_hovered=new ee;_focused=new ee;_highlighted=!1;_triggersSubmenu=!1;constructor(){v(_t).load(ll),this._parentMenu?.addItem?.(this),this._isAnchor=this._elementRef.nativeElement.tagName===`A`}focus(e,t){this._focusMonitor&&e?this._focusMonitor.focusVia(this._getHostElement(),e,t):this._getHostElement().focus(t),this._focused.next(this)}ngAfterViewInit(){this._focusMonitor&&this._focusMonitor.monitor(this._elementRef,!1)}ngOnDestroy(){this._focusMonitor&&this._focusMonitor.stopMonitoring(this._elementRef),this._parentMenu&&this._parentMenu.removeItem&&this._parentMenu.removeItem(this),this._hovered.complete(),this._focused.complete()}_getTabIndex(){return this.disabled&&!this.disabledInteractive?`-1`:`0`}_getAriaDisabled(){return this._isAnchor?this.disabled||null:this.disabled&&this.disabledInteractive?!0:null}_getDisabled(){return this.disabledInteractive||!this.disabled?null:!0}_getHostElement(){return this._elementRef.nativeElement}_checkDisabled(e){this.disabled&&(e.preventDefault(),e.stopPropagation())}_handleMouseEnter(){this._hovered.next(this)}getLabel(){let e=this._elementRef.nativeElement.cloneNode(!0),t=e.querySelectorAll(`mat-icon, .material-icons, .material-symbols-outlined, .material-symbols-rounded, .material-symbols-sharp`);for(let n=0;n<t.length;n++)t[n].remove();return e.textContent?.trim()||``}_setHighlighted(e){this._highlighted=e,this._changeDetectorRef.markForCheck()}_setTriggersSubmenu(e){this._triggersSubmenu=e,this._changeDetectorRef.markForCheck()}_hasFocus(){return this._document&&this._document.activeElement===this._getHostElement()}static ɵfac=function(t){return new(t||a)};static ɵcmp=(function(){let e=[[[`mat-icon`],[``,`matMenuItemIcon`,``]],`*`],t=[`mat-icon, [matMenuItemIcon]`,`*`];function n(i,o){i&1&&(Ud$1(),Hi(0,`svg`,2),Qg(1,`polygon`,3),Rl$1())}return aw({type:a,selectors:[[``,`mat-menu-item`,``]],hostAttrs:[1,`mat-mdc-menu-item`,`mat-focus-indicator`],hostVars:12,hostBindings:function(o,r){o&1&&nm$1(`click`,function(g){return r._checkDisabled(g)})(`mouseenter`,function(){return r._handleMouseEnter()}),o&2&&(qg(`role`,r.role)(`tabindex`,r._getTabIndex())(`aria-disabled`,r._getAriaDisabled())(`disabled`,r._getDisabled()),pm$1(`mat-mdc-menu-item-highlighted`,r._highlighted)(`mat-mdc-menu-item-submenu-trigger`,r._triggersSubmenu)(`mat-mdc-menu-item-disabled`,r.disabled)(`mat-mdc-menu-item-disabled-interactive`,r.disabledInteractive))},inputs:{role:`role`,disabled:[2,`disabled`,`disabled`,Nj],disabledInteractive:[2,`disabledInteractive`,`disabledInteractive`,Nj],disableRipple:[2,`disableRipple`,`disableRipple`,Nj]},exportAs:[`matMenuItem`],ngContentSelectors:t,decls:5,vars:3,consts:[[1,`mat-mdc-menu-item-text`],[`matRipple`,``,1,`mat-mdc-menu-ripple`,3,`matRippleDisabled`,`matRippleTrigger`],[`viewBox`,`0 0 5 10`,`focusable`,`false`,`aria-hidden`,`true`,1,`mat-mdc-menu-submenu-icon`],[`points`,`0,0 5,5 0,10`]],template:function(o,r){o&1&&(yC(e),vC(0),Hi(1,`span`,0),vC(2,1),Rl$1(),Qg(3,`div`,1),eC(4,n,2,0,`svg`,2)),o&2&&(ID(3),zg(`matRippleDisabled`,r.disableRipple||r.disabled)(`matRippleTrigger`,r._getHostElement()),ID(),nC(r._triggersSubmenu?4:-1))},dependencies:[LS],encapsulation:2})})()}return a})();var pn=new S$1(`MatMenuContent`);var hn=new S$1(`mat-menu-default-options`,{providedIn:`root`,factory:()=>({overlapTrigger:!1,xPosition:`after`,yPosition:`below`,backdropClass:`cdk-overlay-transparent-backdrop`})});var ze=`_mat-menu-enter`;var Ce=`_mat-menu-exit`;var X=(()=>{class a{_elementRef=v(Wr$1);_changeDetectorRef=v(_j);_injector=v(se$1);_keyManager;_xPosition;_yPosition;_firstItemFocusRef;_exitFallbackTimeout;_animationsDisabled=dn();_allItems;_directDescendantItems=new Mi$1;_classList={};_panelAnimationState=`void`;_animationDone=new ee;_isAnimating=Et(!1);parentMenu;direction;overlayPanelClass;backdropClass;ariaLabel;ariaLabelledby;ariaDescribedby;get xPosition(){return this._xPosition}set xPosition(e){this._xPosition=e,this.setPositionClasses()}get yPosition(){return this._yPosition}set yPosition(e){this._yPosition=e,this.setPositionClasses()}templateRef;items;lazyContent;overlapTrigger=!1;hasBackdrop;get panelClass(){return this._previousPanelClass}set panelClass(e){let t=this._previousPanelClass,n=z({},this._classList);t&&t.length&&t.split(` `).forEach(i=>{n[i]=!1}),this._previousPanelClass=e,e&&e.length&&(e.split(` `).forEach(i=>{n[i]=!0}),this._elementRef.nativeElement.className=``),this._classList=n}_previousPanelClass=``;get classList(){return this.panelClass}set classList(e){this.panelClass=e}closed=new Qe$1;close=this.closed;panelId=v(Yn).getId(`mat-menu-panel-`);constructor(){let e=v(hn);this.overlayPanelClass=e.overlayPanelClass||``,this._xPosition=e.xPosition,this._yPosition=e.yPosition,this.backdropClass=e.backdropClass,this.overlapTrigger=e.overlapTrigger,this.hasBackdrop=e.hasBackdrop}ngOnInit(){this.setPositionClasses()}ngAfterContentInit(){this._updateDirectDescendants(),this._keyManager=new qo(this._directDescendantItems).withWrap().withTypeAhead().withHomeAndEnd().skipPredicate(e=>e.disabled&&!e.disabledInteractive),this._keyManager.tabOut.subscribe(()=>this.closed.emit(`tab`)),this._directDescendantItems.changes.pipe(iv(this._directDescendantItems),sv(e=>Gy(...e.map(t=>t._focused)))).subscribe(e=>this._keyManager.updateActiveItem(e)),this._directDescendantItems.changes.subscribe(e=>{let t=this._keyManager;if(this._panelAnimationState===`enter`&&t.activeItem?._hasFocus()){let n=e.toArray(),i=Math.max(0,Math.min(n.length-1,t.activeItemIndex||0));n[i]&&!n[i].disabled?t.setActiveItem(i):t.setNextItemActive()}})}ngOnDestroy(){this._keyManager?.destroy(),this._directDescendantItems.destroy(),this.closed.complete(),this._firstItemFocusRef?.destroy(),clearTimeout(this._exitFallbackTimeout)}_hovered(){return this._directDescendantItems.changes.pipe(iv(this._directDescendantItems),sv(t=>Gy(...t.map(n=>n._hovered))))}addItem(e){}removeItem(e){}_handleKeydown(e){let t=e.keyCode,n=this._keyManager;switch(t){case 27:Kc(e)||(e.preventDefault(),this.closed.emit(`keydown`));break;case 37:this.parentMenu&&this.direction===`ltr`&&this.closed.emit(`keydown`);break;case 39:this.parentMenu&&this.direction===`rtl`&&this.closed.emit(`keydown`);break;default:(t===38||t===40)&&n.setFocusOrigin(`keyboard`),n.onKeydown(e);return}}focusFirstItem(e=`program`){this._firstItemFocusRef?.destroy(),this._firstItemFocusRef=Dh$1(()=>{let t=this._resolvePanel();if(!t||!t.contains(document.activeElement)){let n=this._keyManager;n.setFocusOrigin(e).setFirstItemActive(),!n.activeItem&&t&&t.focus()}},{injector:this._injector})}resetActiveItem(){this._keyManager.setActiveItem(-1)}setElevation(e){}setPositionClasses(e=this.xPosition,t=this.yPosition){this._classList=Q$1(z({},this._classList),{"mat-menu-before":e===`before`,"mat-menu-after":e===`after`,"mat-menu-above":t===`above`,"mat-menu-below":t===`below`}),this._changeDetectorRef.markForCheck()}_onAnimationDone(e){let t=e===Ce;(t||e===ze)&&(t&&(clearTimeout(this._exitFallbackTimeout),this._exitFallbackTimeout=void 0),this._animationDone.next(t?`void`:`enter`),this._isAnimating.set(!1))}_onAnimationStart(e){(e===ze||e===Ce)&&this._isAnimating.set(!0)}_setIsOpen(e){if(this._panelAnimationState=e?`enter`:`void`,e){if(this._keyManager.activeItemIndex===0){let t=this._resolvePanel();t&&(t.scrollTop=0)}}else this._animationsDisabled||(this._exitFallbackTimeout=setTimeout(()=>this._onAnimationDone(Ce),200));this._animationsDisabled&&setTimeout(()=>{this._onAnimationDone(e?ze:Ce)}),this._changeDetectorRef.markForCheck()}_updateDirectDescendants(){this._allItems.changes.pipe(iv(this._allItems)).subscribe(e=>{this._directDescendantItems.reset(e.filter(t=>t._parentMenu===this)),this._directDescendantItems.notifyOnChanges()})}_resolvePanel(){let e=null;return this._directDescendantItems.length&&(e=this._directDescendantItems.first._getHostElement().closest(`[role="menu"]`)),e}static ɵfac=function(t){return new(t||a)};static ɵcmp=(function(){let e=[`*`];function t(n,i){if(n&1){let o=fC();kl(0,`div`,0),rm$1(`click`,function(){Sd$1(o);let l=gC();return xd$1(l.closed.emit(`click`))})(`animationstart`,function(l){Sd$1(o);let g=gC();return xd$1(g._onAnimationStart(l.animationName))})(`animationend`,function(l){Sd$1(o);let g=gC();return xd$1(g._onAnimationDone(l.animationName))})(`animationcancel`,function(l){Sd$1(o);let g=gC();return xd$1(g._onAnimationDone(l.animationName))}),kl(1,`div`,1),vC(2),Ll()()}if(n&2){let o=gC();jC(o._classList),pm$1(`mat-menu-panel-animations-disabled`,o._animationsDisabled)(`mat-menu-panel-exit-animation`,o._panelAnimationState===`void`)(`mat-menu-panel-animating`,o._isAnimating()),em$1(`id`,o.panelId),qg(`aria-label`,o.ariaLabel||null)(`aria-labelledby`,o.ariaLabelledby||null)(`aria-describedby`,o.ariaDescribedby||null)}}return aw({type:a,selectors:[[`mat-menu`]],contentQueries:function(i,o,r){if(i&1&&om$1(r,pn,5)(r,J,5)(r,J,4),i&2){let l;IC(l=DC())&&(o.lazyContent=l.first),IC(l=DC())&&(o._allItems=l),IC(l=DC())&&(o.items=l)}},viewQuery:function(i,o){if(i&1&&im$1(Fr$1,5),i&2){let r;IC(r=DC())&&(o.templateRef=r.first)}},hostVars:3,hostBindings:function(i,o){i&2&&qg(`aria-label`,null)(`aria-labelledby`,null)(`aria-describedby`,null)},inputs:{backdropClass:`backdropClass`,ariaLabel:[0,`aria-label`,`ariaLabel`],ariaLabelledby:[0,`aria-labelledby`,`ariaLabelledby`],ariaDescribedby:[0,`aria-describedby`,`ariaDescribedby`],xPosition:`xPosition`,yPosition:`yPosition`,overlapTrigger:[2,`overlapTrigger`,`overlapTrigger`,Nj],hasBackdrop:[2,`hasBackdrop`,`hasBackdrop`,n=>n==null?null:Nj(n)],panelClass:[0,`class`,`panelClass`],classList:`classList`},outputs:{closed:`closed`,close:`close`},exportAs:[`matMenu`],features:[tb([{provide:je,useExisting:a}])],ngContentSelectors:e,decls:1,vars:0,consts:[[`tabindex`,`-1`,`role`,`menu`,1,`mat-mdc-menu-panel`,3,`click`,`animationstart`,`animationend`,`animationcancel`,`id`],[1,`mat-mdc-menu-content`]],template:function(i,o){i&1&&(yC(),Lg(0,t,3,12,`ng-template`))},styles:[`mat-menu {
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
`],encapsulation:2})})()}return a})();var fn=new S$1(`mat-menu-scroll-strategy`,{providedIn:`root`,factory:()=>{let a=v(se$1);return()=>Um(a)}});var U=/* @__PURE__ */ new WeakMap;var gn=(()=>{class a{_canHaveBackdrop;_element=v(Wr$1);_viewContainerRef=v(is$1);_menuItemInstance=v(J,{optional:!0,self:!0});_dir=v(Vn,{optional:!0});_focusMonitor=v(pi);_ngZone=v(Fe$1);_injector=v(se$1);_scrollStrategy=v(fn);_changeDetectorRef=v(_j);_animationsDisabled=dn();_portal;_overlayRef=null;_menuOpen=!1;_closingActionsSubscription=K$1.EMPTY;_menuCloseSubscription=K$1.EMPTY;_pendingRemoval;_parentMaterialMenu;_parentInnerPadding;_openedBy=void 0;get _menu(){return this._menuInternal}set _menu(e){e!==this._menuInternal&&(this._menuInternal=e,this._menuCloseSubscription.unsubscribe(),e?(this._parentMaterialMenu,this._menuCloseSubscription=e.close.subscribe(t=>{this._destroyMenu(t),(t===`click`||t===`tab`)&&this._parentMaterialMenu&&this._parentMaterialMenu.closed.emit(t)})):this._destroyMenu(),this._menuItemInstance?._setTriggersSubmenu(this._triggersSubmenu()))}_menuInternal=null;constructor(e){this._canHaveBackdrop=e;let t=v(je,{optional:!0});this._parentMaterialMenu=t instanceof X?t:void 0}ngOnDestroy(){this._menu&&this._ownsMenu(this._menu)&&U.delete(this._menu),this._pendingRemoval?.unsubscribe(),this._menuCloseSubscription.unsubscribe(),this._closingActionsSubscription.unsubscribe(),this._overlayRef&&(this._overlayRef.dispose(),this._overlayRef=null)}get menuOpen(){return this._menuOpen}get dir(){return this._dir&&this._dir.value===`rtl`?`rtl`:`ltr`}_triggersSubmenu(){return!!(this._menuItemInstance&&this._parentMaterialMenu&&this._menu)}_closeMenu(){this._menu?.close.emit()}_openMenu(e){if(this._triggerIsAriaDisabled())return;let t=this._menu;if(this._menuOpen||!t)return;this._pendingRemoval?.unsubscribe();let n=U.get(t);U.set(t,this),n&&n!==this&&n._closeMenu();let i=this._createOverlay(t),o=i.getConfig(),r=o.positionStrategy;this._setPosition(t,r),this._canHaveBackdrop?o.hasBackdrop=t.hasBackdrop==null?!this._triggersSubmenu():t.hasBackdrop:o.hasBackdrop=t.hasBackdrop??!1,i.hasAttached()||(i.attach(this._getPortal(t)),t.lazyContent?.attach(this.menuData)),this._closingActionsSubscription=this._menuClosingActions().subscribe(()=>this._closeMenu()),t.parentMenu=this._triggersSubmenu()?this._parentMaterialMenu:void 0,t.direction=this.dir,e&&t.focusFirstItem(this._openedBy||`program`),this._setIsMenuOpen(!0),t instanceof X&&(t._setIsOpen(!0),t._directDescendantItems.changes.pipe(av(t.close)).subscribe(()=>{r.withLockedPosition(!1).reapplyLastPosition(),r.withLockedPosition(!0)}))}focus(e,t){this._focusMonitor&&e?this._focusMonitor.focusVia(this._element,e,t):this._element.nativeElement.focus(t)}_destroyMenu(e){let t=this._overlayRef,n=this._menu;!t||!this.menuOpen||(this._closingActionsSubscription.unsubscribe(),this._pendingRemoval?.unsubscribe(),n instanceof X&&this._ownsMenu(n)?(this._pendingRemoval=n._animationDone.pipe(gn$1(1)).subscribe(()=>{t.detach(),U.has(n)||n.lazyContent?.detach()}),n._setIsOpen(!1)):(t.detach(),n?.lazyContent?.detach()),n&&this._ownsMenu(n)&&U.delete(n),this.restoreFocus&&(e===`keydown`||!this._openedBy||!this._triggersSubmenu())&&this.focus(this._openedBy),this._openedBy=void 0,this._setIsMenuOpen(!1))}_setIsMenuOpen(e){e!==this._menuOpen&&(this._menuOpen=e,this._menuOpen?this.menuOpened.emit():this.menuClosed.emit(),this._triggersSubmenu()&&this._menuItemInstance._setHighlighted(e),this._changeDetectorRef.markForCheck())}_createOverlay(e){if(!this._overlayRef){let t=this._getOverlayConfig(e);this._subscribeToPositions(e,t.positionStrategy),this._overlayRef=$m(this._injector,t),this._overlayRef.keydownEvents().subscribe(n=>{this._menu instanceof X&&this._menu._handleKeydown(n)})}return this._overlayRef}_getOverlayConfig(e){return new Ai({positionStrategy:zm(this._injector,this._getOverlayOrigin()).withLockedPosition().withGrowAfterOpen().withTransformOriginOn(`.mat-menu-panel, .mat-mdc-menu-panel`),backdropClass:e.backdropClass||`cdk-overlay-transparent-backdrop`,panelClass:e.overlayPanelClass,scrollStrategy:this._scrollStrategy(),direction:this._dir||`ltr`,disableAnimations:this._animationsDisabled})}_subscribeToPositions(e,t){e.setPositionClasses&&t.positionChanges.subscribe(n=>{this._ngZone.run(()=>{let i=n.connectionPair.overlayX===`start`?`after`:`before`,o=n.connectionPair.overlayY===`top`?`below`:`above`;e.setPositionClasses(i,o)})})}_setPosition(e,t){let[n,i]=e.xPosition===`before`?[`end`,`start`]:[`start`,`end`],[o,r]=e.yPosition===`above`?[`bottom`,`top`]:[`top`,`bottom`],[l,g]=[o,r],[Y,Ae]=[n,i],q=0;if(this._triggersSubmenu()){if(Ae=n=e.xPosition===`before`?`start`:`end`,i=Y=n===`end`?`start`:`end`,this._parentMaterialMenu){if(this._parentInnerPadding==null){let He=this._parentMaterialMenu.items.first;this._parentInnerPadding=He?He._getHostElement().offsetTop:0}q=o===`bottom`?this._parentInnerPadding:-this._parentInnerPadding}}else e.overlapTrigger||(l=o===`top`?`bottom`:`top`,g=r===`top`?`bottom`:`top`);t.withPositions([{originX:n,originY:l,overlayX:Y,overlayY:o,offsetY:q},{originX:i,originY:l,overlayX:Ae,overlayY:o,offsetY:q},{originX:n,originY:g,overlayX:Y,overlayY:r,offsetY:-q},{originX:i,originY:g,overlayX:Ae,overlayY:r,offsetY:-q}])}_menuClosingActions(){let e=this._getOutsideClickStream(this._overlayRef),t=this._overlayRef.detachments(),n=this._parentMaterialMenu?this._parentMaterialMenu.closed:Ay(),i=this._parentMaterialMenu?this._parentMaterialMenu._hovered().pipe(rr(o=>this._menuOpen&&o!==this._menuItemInstance)):Ay();return Gy(e,n,i,t)}_getPortal(e){return(!this._portal||this._portal.templateRef!==e.templateRef)&&(this._portal=new tr(e.templateRef,this._viewContainerRef)),this._portal}_ownsMenu(e){return U.get(e)===this}_triggerIsAriaDisabled(){return Nj(this._element.nativeElement.getAttribute(`aria-disabled`))}static ɵfac=function(t){_T()};static ɵdir=fw({type:a})}return a})();var $t=(()=>{class a extends gn{_cleanupTouchstart;_hoverSubscription=K$1.EMPTY;get _deprecatedMatMenuTriggerFor(){return this.menu}set _deprecatedMatMenuTriggerFor(e){this.menu=e}get menu(){return this._menu}set menu(e){this._menu=e}menuData;restoreFocus=!0;menuOpened=new Qe$1;onMenuOpen=this.menuOpened;menuClosed=new Qe$1;onMenuClose=this.menuClosed;constructor(){super(!0);let e=v(Ic$1);this._cleanupTouchstart=e.listen(this._element.nativeElement,`touchstart`,t=>{$n(t)||(this._openedBy=`touch`)},{passive:!0})}triggersSubmenu(){return super._triggersSubmenu()}toggleMenu(){return this.menuOpen?this.closeMenu():this.openMenu()}openMenu(){this._openMenu(!0)}closeMenu(){this._closeMenu()}updatePosition(){this._overlayRef?.updatePosition()}ngAfterContentInit(){this._handleHover()}ngOnDestroy(){super.ngOnDestroy(),this._cleanupTouchstart(),this._hoverSubscription.unsubscribe()}_getOverlayOrigin(){return this._element}_getOutsideClickStream(e){return e.backdropClick()}_handleMousedown(e){Hn(e)||(this._openedBy=e.button===0?`mouse`:void 0,this.triggersSubmenu()&&e.preventDefault())}_handleKeydown(e){let t=e.keyCode;(t===13||t===32)&&(this._openedBy=`keyboard`),this.triggersSubmenu()&&(t===39&&this.dir===`ltr`||t===37&&this.dir===`rtl`)&&(this._openedBy=`keyboard`,this.openMenu())}_handleClick(e){this.triggersSubmenu()?(e.stopPropagation(),this.openMenu()):this.toggleMenu()}_handleHover(){this.triggersSubmenu()&&this._parentMaterialMenu&&(this._hoverSubscription=this._parentMaterialMenu._hovered().subscribe(e=>{e===this._menuItemInstance&&!e.disabled&&this._parentMaterialMenu?._panelAnimationState!==`void`&&(this._openedBy=`mouse`,this._openMenu(!1))}))}static ɵfac=function(t){return new(t||a)};static ɵdir=fw({type:a,selectors:[[``,`mat-menu-trigger-for`,``],[``,`matMenuTriggerFor`,``]],hostAttrs:[1,`mat-mdc-menu-trigger`],hostVars:3,hostBindings:function(t,n){t&1&&nm$1(`click`,function(o){return n._handleClick(o)})(`mousedown`,function(o){return n._handleMousedown(o)})(`keydown`,function(o){return n._handleKeydown(o)}),t&2&&qg(`aria-haspopup`,n.menu?`menu`:null)(`aria-expanded`,n.menuOpen)(`aria-controls`,n.menuOpen?n.menu?.panelId:null)},inputs:{_deprecatedMatMenuTriggerFor:[0,`mat-menu-trigger-for`,`_deprecatedMatMenuTriggerFor`],menu:[0,`matMenuTriggerFor`,`menu`],menuData:[0,`matMenuTriggerData`,`menuData`],restoreFocus:[0,`matMenuTriggerRestoreFocus`,`restoreFocus`]},outputs:{menuOpened:`menuOpened`,onMenuOpen:`onMenuOpen`,menuClosed:`menuClosed`,onMenuClose:`onMenuClose`},exportAs:[`matMenuTrigger`],features:[Og]})}return a})();var bn=(()=>{class a{static ɵfac=function(t){return new(t||a)};static ɵdir=fw({type:a,selectors:[[`mat-toolbar-row`]],hostAttrs:[1,`mat-toolbar-row`],exportAs:[`matToolbarRow`]})}return a})();var Zt=(()=>{class a{_elementRef=v(Wr$1);_platform=v(V$1);_document=v(mt$1);color;_toolbarRows;ngAfterViewInit(){this._platform.isBrowser&&(this._checkToolbarMixedModes(),this._toolbarRows.changes.subscribe(()=>this._checkToolbarMixedModes()))}_checkToolbarMixedModes(){this._toolbarRows.length}static ɵfac=function(t){return new(t||a)};static ɵcmp=(function(){let e=[`*`,[[`mat-toolbar-row`]]];return aw({type:a,selectors:[[`mat-toolbar`]],contentQueries:function(i,o,r){if(i&1&&om$1(r,bn,5),i&2){let l;IC(l=DC())&&(o._toolbarRows=l)}},hostAttrs:[1,`mat-toolbar`],hostVars:6,hostBindings:function(i,o){i&2&&(jC(o.color?`mat-`+o.color:``),pm$1(`mat-toolbar-multiple-rows`,o._toolbarRows.length>0)(`mat-toolbar-single-row`,o._toolbarRows.length===0))},inputs:{color:`color`},exportAs:[`matToolbar`],ngContentSelectors:[`*`,`mat-toolbar-row`],decls:2,vars:0,template:function(i,o){i&1&&(yC(e),vC(0),vC(1,1))},styles:[`.mat-toolbar {
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
`],encapsulation:2})})()}return a})();function _n(a,m){if(a&1&&Qg(0,`img`,1),a&2){let e=gC();zg(`ngSrc`,e.profileService.myProfileInfo.value().avatarUrl)(`matTooltip`,e.identityService.myIdentityInfo.value()?.userName)}}function yn(a,m){if(a&1&&(Hi(0,`mat-icon`,2),QC(1,` account_circle `),Rl$1()),a&2){let e=gC();zg(`matTooltip`,e.identityService.myIdentityInfo.value()?.userName)}}function vn(a,m){a&1&&(Hi(0,`mat-icon`),QC(1,`account_circle_off`),Rl$1())}var Ie=class a{menu=Ij.required();identityService=v(ml);profileService=v(c);imgBtnStyle=`padding: 0px; width: 40px; height: 40px; transform: translateY(3px);`;static ɵfac=function(e){return new(e||a)};static ɵcmp=aw({type:a,selectors:[[`app-account-dropdown`]],inputs:{menu:[1,`menu`]},decls:4,vars:4,consts:[[`matIconButton`,``,3,`matMenuTriggerFor`],[`priority`,``,`width`,`40`,`height`,`40`,`alt`,`user avatar`,3,`ngSrc`,`matTooltip`],[3,`matTooltip`]],template:function(e,t){e&1&&(Hi(0,`button`,0),eC(1,_n,1,2,`img`,1)(2,yn,2,1,`mat-icon`,2)(3,vn,2,0,`mat-icon`),Rl$1()),e&2&&(PC(t.profileService.myProfileInfo.hasValue()?t.imgBtnStyle:``),zg(`matMenuTriggerFor`,t.menu()),ID(),nC(t.profileService.myProfileInfo.value()?.avatarUrl?1:t.identityService.isAuthenticated()?2:3))},dependencies:[Om,$t,py,Hf,at],styles:[`button[_ngcontent-%COMP%]{margin:0;overflow:hidden}`]})};var Mn=()=>[`/`];var xn=()=>[`/UserAccount/Profile`];var kn=()=>[`/Identity/Login`];var wn=()=>[`/Identity/Signup`];function Sn(a,m){if(a&1){let e=fC();Hi(0,`button`,8),nm$1(`click`,function(){Sd$1(e);let n=gC();return xd$1(n.sharedConfigs.toggleColorScheme())}),Hi(1,`mat-icon`),QC(2,`light_mode`),Rl$1()()}}function Cn(a,m){if(a&1){let e=fC();Hi(0,`button`,9),nm$1(`click`,function(){Sd$1(e);let n=gC();return xd$1(n.sharedConfigs.toggleColorScheme())}),Hi(1,`mat-icon`),QC(2,`dark_mode`),Rl$1()()}}function In(a,m){if(a&1){let e=fC();Hi(0,`a`,10)(1,`mat-icon`),QC(2,`account_box`),Rl$1(),QC(3,` Profile `),Rl$1(),Hi(4,`a`,11),nm$1(`click`,function(){Sd$1(e);let n=gC();return xd$1(n.identityService.logout())}),Hi(5,`mat-icon`),QC(6,`logout`),Rl$1(),QC(7,` Logout `),Rl$1()}a&2&&zg(`routerLink`,ob(1,xn))}function Tn(a,m){a&1&&(Hi(0,`a`,10)(1,`mat-icon`),QC(2,`login`),Rl$1(),QC(3,` Login `),Rl$1(),Hi(4,`a`,10)(5,`mat-icon`),QC(6,`person_add`),Rl$1(),QC(7,` Create a new account `),Rl$1()),a&2&&(zg(`routerLink`,ob(2,kn)),ID(4),zg(`routerLink`,ob(3,wn)))}var Te=class a{sharedConfigs=v(i);document=v(mt$1);identityService=v(ml);logoImgSrc=it$2(()=>this.sharedConfigs.colorScheme()===`dark`?`/Logo/HoLibz_Logo_Dark_Pink_Only.webp`:`/Logo/HoLibz_Logo_Light_Blue_Only.webp`);displayShadow=Et(!1);onWindowScroll(){this.document.defaultView&&this.document.defaultView.scrollY>0?this.displayShadow.set(!0):this.displayShadow.set(!1)}static ɵfac=function(e){return new(e||a)};static ɵcmp=aw({type:a,selectors:[[`app-nav-bar`]],hostBindings:function(e,t){e&1&&nm$1(`scroll`,function(){return t.onWindowScroll()},FI)},decls:11,vars:8,consts:[[`account`,``],[`matButton`,``,`matTooltip`,`Home`,2,`padding`,`12px 0 0 0`,`overflow`,`hidden`,3,`routerLink`],[`width`,`52`,`height`,`40`,`alt`,`HoLibz Logo`,3,`ngSrc`],[1,`full-spacer`],[`matIconButton`,``,`matTooltip`,`Light Mode`,1,`lightDarkBtn`],[`matIconButton`,``,`matTooltip`,`Dark Mode`,1,`lightDarkBtn`],[3,`menu`],[1,`navbar-matMenu`],[`matIconButton`,``,`matTooltip`,`Light Mode`,1,`lightDarkBtn`,3,`click`],[`matIconButton`,``,`matTooltip`,`Dark Mode`,1,`lightDarkBtn`,3,`click`],[`mat-menu-item`,``,3,`routerLink`],[`mat-menu-item`,``,3,`click`]],template:function(e,t){if(e&1&&(Hi(0,`mat-toolbar`)(1,`a`,1),Qg(2,`img`,2),Rl$1(),Qg(3,`span`,3),eC(4,Sn,3,0,`button`,4)(5,Cn,3,0,`button`,5),Qg(6,`app-account-dropdown`,6),Hi(7,`mat-menu`,7,0),eC(9,In,8,2)(10,Tn,8,4),Rl$1()()),e&2){let n=wC(8);pm$1(`shadow`,t.displayShadow()),ID(),zg(`routerLink`,ob(7,Mn)),ID(),zg(`ngSrc`,t.logoImgSrc()),ID(2),nC(t.sharedConfigs.colorScheme()===`light`?4:5),ID(2),zg(`menu`,n),ID(3),nC(t.identityService&&t.identityService.isAuthenticated()?9:10)}},dependencies:[py,Zt,Om,X,J,Ie,at,Dc,Hf,d0],styles:[`.full-spacer[_ngcontent-%COMP%]{flex:1 1 auto}mat-toolbar[_ngcontent-%COMP%]{position:fixed;width:100%;height:56px;z-index:10;top:0}mat-toolbar.shadow[_ngcontent-%COMP%]{box-shadow:0 0 5px 0 var(--%NS%mat-sys-outline-variant)}#mainMenu[_ngcontent-%COMP%]{display:block}#littleMenu[_ngcontent-%COMP%]{display:none}.lightDarkBtn[_ngcontent-%COMP%]{margin:0 20px 0 0}@media screen and (max-width:600px){.lightDarkBtn[_ngcontent-%COMP%]{margin:0}}`]})};var De=class a{static ɵfac=function(e){return new(e||a)};static ɵcmp=aw({type:a,selectors:[[`app-root`]],decls:2,vars:0,template:function(e,t){e&1&&Qg(0,`app-nav-bar`)(1,`router-outlet`)},dependencies:[Bo,Te],encapsulation:2})};ld(De,Wt).catch(a=>console.error(a));export{i as $,cs as A,ml as B,Ti as C,Yt as D,Yn as E,hS as F,q0 as G,pi as H,hi as I,se as J,qo as K,ia as L,dn as M,em as N,_t as O,h0 as P,ym as Q,iy as R,St as S,Vn as T,po as U,nm as V,py as W,u0 as X,tr as Y,we$1 as Z,Kc as _,Bm as a,Pl as b,Ei as c,Gc as d,Hf as f,K0 as g,Jn as h,Ai as i,d0 as j,a_ as k,El as l,Ie$1 as m,at as n,DS as o,Hm as p,qt$1 as q,$m as r,Dc as s,c as t,Fm as u,LS as v,V$1 as w,Rm as x,Om as y,ll as z};