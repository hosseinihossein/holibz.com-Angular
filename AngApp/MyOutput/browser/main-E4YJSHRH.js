import{$ as Nl$1,$n as qy$1,$t as bt$1,A as ID,Ar as yC$1,B as Je$1,Bt as Yo$1,C as FI,Cn as jC,Cr as wI,D as Gy,Dn as kg,Dr as x,Dt as Ue,En as kI,Er as wt,Et as Ud$1,F as Iy,Fn as mv,Fr as zv,Ft as Wy,G as Kn$1,Gn as oI,Gt as Zy,H as K,I as J$1,In as nC,Ir as zy,It as Xc$1,J as Ll$1,Jn as os$1,Jt as ae,K as Kv,Kn as ob,Kt as _T,L as JI,Ln as nI,M as Ic$1,Mn as lg,Mr as yt,Mt as Vr,N as Ij,Nn as lw,Nr as z$1,Nt as Wl$1,O as Hi$1,On as kl$1,Or as xd$1,Ot as Ul$1,P as It,Pn as mt,Pr as zg,Pt as Wr,Q as Nj,Qn as ql$1,R as Jc,Rn as nd$1,Rt as Xy,Sn as iv,Sr as wC,St as Sr$1,T as Fr$1,Tn as ju$1,Tr as wm$1,Tt as Tn$2,U as Kd$1,Un as ny,Ut as Zt$2,V as Jv,Vt as Yv,Wt as Zv,X as Mi$1,Xn as pm$1,Xt as av,Y as Mg,Yn as ov,Z as Mj,Zn as qg,Zt as aw,_ as Dr$1,_r as vC$1,_t as S,a as $y,an as ev,at as Pe$1,bn as is$1,br as vt,bt as Sj,c as Ay,cn as fe,cr as sn$2,ct as QC,dn as gC,dr as tb,dt as Qy,en as eC,et as Nr$1,f as By,fn as gn$2,fr as tn$2,ft as RE,gr as v,gt as Ry,h as Dh$1,hn as hn$2,hr as ub,ht as Rm$1,i as $w,in as eo,it as PC,jn as le$1,jr as yp,jt as Vl$1,k as IC,kn as ku$1,kt as Un$1,l as BE,ln as fm$1,lr as sv,lt as Qe$1,m as DC,mn as hE,mr as tv,mt as Rl$1,n as $e,nn as ee$1,nr as rm$1,nt as Og,o as Aj,on as fC,or as se,p as Cj,pr as tr$1,pt as Re$1,q as Lg,qn as om$1,qt as _j,r as $r,rn as em$1,rr as rr$1,rt as Oy,s as At,sn as fa$1,st as Q$1,tn as eI,tr as rI,tt as Ns$1,u as Be,un as fw,ur as tI,ut as Qg,v as Dt$1,vt as Sd$1,w as Fe$1,wn as ja,wr as wj,x as Et$1,xn as it,xr as w$1,xt as Sl$1,y as Ee$1,yn as im$1,yr as vj,yt as Si,z as Jd$1,zn as nm$1,zt as Yg}from"./chunk-kniop8OV.js";var i=class e{_document=v(mt);_colorScheme=Et$1(`light`);colorScheme=it(()=>this._colorScheme());constructor(){Dh$1(()=>{let o=localStorage.getItem(`colorScheme`);o&&(o===`dark`?(this._colorScheme.set(`dark`),this._document.body.classList.add(`dark-mode`)):(this._colorScheme.set(`light`),this._document.body.classList.remove(`dark-mode`)))})}toggleColorScheme(){this._colorScheme()===`dark`?(this._colorScheme.set(`light`),this._document.body.classList.remove(`dark-mode`)):(this._colorScheme.set(`dark`),this._document.body.classList.add(`dark-mode`)),localStorage.setItem(`colorScheme`,this.colorScheme())}static ɵfac=function(l){return new(l||e)};static ɵprov=$r({token:e,factory:e.ɵfac})};var qa=null;function Kt(){return qa}function no(n){qa??=n}var Cn$1=class{};var Xe=(()=>{class n{historyGo(t){throw new Error(``)}static ɵfac=function(e){return new(e||n)};static ɵprov=ae({token:n,factory:()=>v(Ka),providedIn:`platform`})}return n})();var Ka=(()=>{class n extends Xe{_location;_history;_doc=v(mt);constructor(){super(),this._location=window.location,this._history=window.history}getBaseHrefFromDOM(){return Kt().getBaseHref(this._doc)}onPopState(t){let e=Kt().getGlobalEventTarget(this._doc,`window`);return e.addEventListener(`popstate`,t,!1),()=>e.removeEventListener(`popstate`,t)}onHashChange(t){let e=Kt().getGlobalEventTarget(this._doc,`window`);return e.addEventListener(`hashchange`,t,!1),()=>e.removeEventListener(`hashchange`,t)}get href(){return this._location.href}get protocol(){return this._location.protocol}get hostname(){return this._location.hostname}get port(){return this._location.port}get pathname(){return this._location.pathname}get search(){return this._location.search}get hash(){return this._location.hash}set pathname(t){this._location.pathname=t}pushState(t,e,r){this._history.pushState(t,e,r)}replaceState(t,e,r){this._history.replaceState(t,e,r)}forward(){this._history.forward()}back(){this._history.back()}historyGo(t=0){this._history.go(t)}getState(){return this._history.state}static ɵfac=function(e){return new(e||n)};static ɵprov=ae({token:n,factory:()=>new n,providedIn:`platform`})}return n})();function Qa(n,i){return n?i?n.endsWith(`/`)?i.startsWith(`/`)?n+i.slice(1):n+i:i.startsWith(`/`)?n+i:`${n}/${i}`:n:i}function Za(n){let i=n.search(/#|\?|$/);return n[i-1]===`/`?n.slice(0,i-1)+n.slice(i):n}function le(n){return n&&n[0]!==`?`?`?${n}`:n}var qe=(()=>{class n{historyGo(t){throw new Error(``)}static ɵfac=function(e){return new(e||n)};static ɵprov=ae({token:n,factory:()=>v(Hc),providedIn:`root`})}return n})();var Vc=new S(``);var Hc=(()=>{class n extends qe{_platformLocation;_baseHref;_removeListenerFns=[];constructor(t,e){super(),this._platformLocation=t,this._baseHref=e??this._platformLocation.getBaseHrefFromDOM()??v(mt).location?.origin??``}ngOnDestroy(){for(;this._removeListenerFns.length;)this._removeListenerFns.pop()()}onPopState(t){this._removeListenerFns.push(this._platformLocation.onPopState(t),this._platformLocation.onHashChange(t))}getBaseHref(){return this._baseHref}prepareExternalUrl(t){return Qa(this._baseHref,t)}path(t=!1){let e=this._platformLocation.pathname+le(this._platformLocation.search),r=this._platformLocation.hash;return r&&t?`${e}${r}`:e}pushState(t,e,r,o){let a=this.prepareExternalUrl(r+le(o));this._platformLocation.pushState(t,e,a)}replaceState(t,e,r,o){let a=this.prepareExternalUrl(r+le(o));this._platformLocation.replaceState(t,e,a)}forward(){this._platformLocation.forward()}back(){this._platformLocation.back()}getState(){return this._platformLocation.getState()}historyGo(t=0){this._platformLocation.historyGo?.(t)}static ɵfac=function(e){return new(e||n)(Pe$1(Xe),Pe$1(Vc,8))};static ɵprov=ae({token:n,factory:n.ɵfac,providedIn:`root`})}return n})();var ce=(()=>{class n{_subject=new ee$1;_basePath;_locationStrategy;_urlChangeListeners=[];_urlChangeSubscription=null;constructor(t){this._locationStrategy=t;let e=this._locationStrategy.getBaseHref();this._basePath=Gc(Za(Ja(e))),this._locationStrategy.onPopState(r=>{let o={url:this.path(!0),pop:!0,state:r.state,type:r.type};r.hasUAVisualTransition&&(o.hasUAVisualTransition=!0),this._subject.next(o)})}ngOnDestroy(){this._urlChangeSubscription?.unsubscribe(),this._urlChangeListeners=[]}path(t=!1){return this.normalize(this._locationStrategy.path(t))}getState(){return this._locationStrategy.getState()}isCurrentPathEqualTo(t,e=``){return this.path()==this.normalize(t+le(e))}normalize(t){return n.stripTrailingSlash(Wc(this._basePath,Ja(t)))}prepareExternalUrl(t){return t&&t[0]!==`/`&&(t=`/`+t),this._locationStrategy.prepareExternalUrl(t)}go(t,e=``,r=null){this._locationStrategy.pushState(r,``,t,e),this._notifyUrlChangeListeners(this.prepareExternalUrl(t+le(e)),r)}replaceState(t,e=``,r=null){this._locationStrategy.replaceState(r,``,t,e),this._notifyUrlChangeListeners(this.prepareExternalUrl(t+le(e)),r)}forward(){this._locationStrategy.forward()}back(){this._locationStrategy.back()}historyGo(t=0){this._locationStrategy.historyGo?.(t)}onUrlChange(t){return this._urlChangeListeners.push(t),this._urlChangeSubscription??=this.subscribe(e=>{this._notifyUrlChangeListeners(e.url,e.state)}),()=>{let e=this._urlChangeListeners.indexOf(t);this._urlChangeListeners.splice(e,1),this._urlChangeListeners.length===0&&(this._urlChangeSubscription?.unsubscribe(),this._urlChangeSubscription=null)}}_notifyUrlChangeListeners(t=``,e){this._urlChangeListeners.forEach(r=>r(t,e))}subscribe(t,e,r){return this._subject.subscribe({next:t,error:e??void 0,complete:r??void 0})}static normalizeQueryParams=le;static joinWithSlash=Qa;static stripTrailingSlash=Za;static ɵfac=function(e){return new(e||n)(Pe$1(qe))};static ɵprov=ae({token:n,factory:()=>$c(),providedIn:`root`})}return n})();function $c(){return new ce(Pe$1(qe))}function Wc(n,i){if(!n||!i.startsWith(n))return i;let t=i.substring(n.length);return t===``||[`/`,`;`,`?`,`#`].includes(t[0])?t:i}function Ja(n){return n.replace(/\/index\.html$/,``)}function Gc(n){if((/* @__PURE__ */ new RegExp(`^(https?:)?//`)).test(n)){let[,t]=n.split(/\/\/[^\/]+/);return t}return n}var Xc=(()=>{class n{_viewContainerRef;_viewRef=null;ngTemplateOutletContext=null;ngTemplateOutlet=null;ngTemplateOutletInjector=null;injector=v(se);constructor(t){this._viewContainerRef=t}ngOnChanges(t){if(this._shouldRecreateView(t)){let e=this._viewContainerRef;if(this._viewRef&&e.remove(e.indexOf(this._viewRef)),!this.ngTemplateOutlet){this._viewRef=null;return}let r=this._createContextForwardProxy();this._viewRef=e.createEmbeddedView(this.ngTemplateOutlet,r,{injector:this._getInjector()})}}_getInjector(){return this.ngTemplateOutletInjector===`outlet`?this.injector:this.ngTemplateOutletInjector??void 0}_shouldRecreateView(t){return!!t.ngTemplateOutlet||!!t.ngTemplateOutletInjector}_createContextForwardProxy(){return new Proxy({},{set:(t,e,r)=>this.ngTemplateOutletContext?Reflect.set(this.ngTemplateOutletContext,e,r):!1,get:(t,e,r)=>{if(this.ngTemplateOutletContext)return Reflect.get(this.ngTemplateOutletContext,e,r)}})}static ɵfac=function(e){return new(e||n)(os$1(is$1))};static ɵdir=fw({type:n,selectors:[[``,`ngTemplateOutlet`,``]],inputs:{ngTemplateOutletContext:`ngTemplateOutletContext`,ngTemplateOutlet:`ngTemplateOutlet`,ngTemplateOutletInjector:`ngTemplateOutletInjector`},features:[hE]})}return n})();function Dn(n,i){i=encodeURIComponent(i);for(let t of n.split(`;`)){let e=t.indexOf(`=`),[r,o]=e==-1?[t,``]:[t.slice(0,e),t.slice(e+1)];if(r.trim()!==i)continue;let a=o;try{a=decodeURIComponent(o)}catch{}return a.length>1&&a[0]===`"`&&a[a.length-1]===`"`&&(a=a.slice(1,-1)),a}return null}var io=`browser`;function Ri(n){return n===io}function ts(n){return n.replace(/\\/g,`\\\\`).replace(/[\n\r\f\0]/g,``).replace(/"/g,`\\"`)}var ns=n=>n.src;var Qc=new S(``,{factory:()=>ns});var es=/^((\s*\d+w\s*(,|$)){1,})$/;var td=[1,2];var ed=640;var nd=1920;var id=1080;var sg=(()=>{class n{imageLoader=v(Qc);config=rd(v(Jv));renderer=v(Ic$1);imgElement=v(Wr).nativeElement;injector=v(se);destroyRef=v(fe);lcpObserver;_renderedSrc=null;ngSrc;ngSrcset;sizes;width;height;decoding;loading;priority=!1;loaderParams;disableOptimizedSrcset=!1;fill=!1;placeholder;placeholderConfig;src;srcset;constructor(){this.destroyRef.onDestroy(()=>{this.renderer.removeAttribute(this.imgElement,`loading`)})}ngOnInit(){Be(`NgOptimizedImage`),this.placeholder&&this.removePlaceholderOnLoad(this.imgElement),this.setHostAttributes()}setHostAttributes(){this.fill?this.sizes||=`100vw`:(this.setHostAttribute(`width`,this.width.toString()),this.setHostAttribute(`height`,this.height.toString())),this.setHostAttribute(`loading`,this.getLoadingBehavior()),this.setHostAttribute(`fetchpriority`,this.getFetchPriority()),this.setHostAttribute(`decoding`,this.getDecoding()),this.setHostAttribute(`ng-img`,`true`);this.updateSrcAndSrcset();this.sizes?this.getLoadingBehavior()===`lazy`?this.setHostAttribute(`sizes`,`auto, `+this.sizes):this.setHostAttribute(`sizes`,this.sizes):this.ngSrcset&&es.test(this.ngSrcset)&&this.getLoadingBehavior()===`lazy`&&this.setHostAttribute(`sizes`,`auto, 100vw`)}ngOnChanges(t){if(t.ngSrc&&!t.ngSrc.isFirstChange()){this._renderedSrc;this.updateSrcAndSrcset(!0)}}getAspectRatio(){return this.width&&this.height&&this.height!==0?this.width/this.height:null}callImageLoader(t){let e=t;this.loaderParams&&(e.loaderParams=this.loaderParams);let r=this.getAspectRatio();return r!==null&&e.width&&(e.height=Math.round(e.width/r)),this.imageLoader(e)}getLoadingBehavior(){return!this.priority&&this.loading!==void 0?this.loading:this.priority?`eager`:`lazy`}getFetchPriority(){return this.priority?`high`:`auto`}getDecoding(){return this.priority?`sync`:this.decoding??`auto`}getRewrittenSrc(){if(!this._renderedSrc){let t={src:this.ngSrc};this._renderedSrc=this.callImageLoader(t)}return this._renderedSrc}getRewrittenSrcset(){let t=es.test(this.ngSrcset);return this.ngSrcset.split(`,`).filter(r=>r!==``).map(r=>{r=r.trim();let o=t?parseFloat(r):parseFloat(r)*this.width;return`${this.callImageLoader({src:this.ngSrc,width:o})} ${r}`}).join(`, `)}getAutomaticSrcset(){return this.sizes?this.getResponsiveSrcset():this.getFixedSrcset()}getResponsiveSrcset(){let{breakpoints:t}=this.config,e=t;return this.sizes?.trim()===`100vw`&&(e=t.filter(o=>o>=ed)),e.map(o=>`${this.callImageLoader({src:this.ngSrc,width:o})} ${o}w`).join(`, `)}updateSrcAndSrcset(t=!1){t&&(this._renderedSrc=null);let e=this.getRewrittenSrc();this.setHostAttribute(`src`,e);let r;return this.ngSrcset?r=this.getRewrittenSrcset():this.shouldGenerateAutomaticSrcset()&&(r=this.getAutomaticSrcset()),r?this.setHostAttribute(`srcset`,r):this.disableOptimizedSrcset&&this.srcset&&this.setHostAttribute(`srcset`,this.srcset),r}getFixedSrcset(){return td.map(e=>`${this.callImageLoader({src:this.ngSrc,width:this.width*e})} ${e}x`).join(`, `)}shouldGenerateAutomaticSrcset(){let t=!1;return this.sizes||(t=this.width>nd||this.height>id),!this.disableOptimizedSrcset&&!this.srcset&&this.imageLoader!==ns&&!t}generatePlaceholder(t){let{placeholderResolution:e}=this.config;return t===!0?`url("${ts(this.callImageLoader({src:this.ngSrc,width:e,isPlaceholder:!0}))}")`:typeof t==`string`?`url("${ts(t)}")`:null}shouldBlurPlaceholder(t){return!t||!Object.hasOwn(t,`blur`)?!0:!!t.blur}removePlaceholderOnLoad(t){let e=()=>{let a=this.injector.get(_j);r(),o(),this.placeholder=!1,a.markForCheck()},r=this.renderer.listen(t,`load`,e),o=this.renderer.listen(t,`error`,e);this.destroyRef.onDestroy(()=>{r(),o()}),od(t,e)}setHostAttribute(t,e){this.renderer.setAttribute(this.imgElement,t,e)}static ɵfac=function(e){return new(e||n)};static ɵdir=fw({type:n,selectors:[[`img`,`ngSrc`,``]],hostVars:18,hostBindings:function(e,r){e&2&&fm$1(`position`,r.fill?`absolute`:null)(`width`,r.fill?`100%`:null)(`height`,r.fill?`100%`:null)(`inset`,r.fill?`0`:null)(`background-size`,r.placeholder?`cover`:null)(`background-position`,r.placeholder?`50% 50%`:null)(`background-repeat`,r.placeholder?`no-repeat`:null)(`background-image`,r.placeholder?r.generatePlaceholder(r.placeholder):null)(`filter`,r.placeholder&&r.shouldBlurPlaceholder(r.placeholderConfig)?`blur(15px)`:null)},inputs:{ngSrc:[2,`ngSrc`,`ngSrc`,ad],ngSrcset:`ngSrcset`,sizes:`sizes`,width:[2,`width`,`width`,Sj],height:[2,`height`,`height`,Sj],decoding:`decoding`,loading:`loading`,priority:[2,`priority`,`priority`,Nj],loaderParams:`loaderParams`,disableOptimizedSrcset:[2,`disableOptimizedSrcset`,`disableOptimizedSrcset`,Nj],fill:[2,`fill`,`fill`,Nj],placeholder:[2,`placeholder`,`placeholder`,sd],placeholderConfig:`placeholderConfig`,src:`src`,srcset:`srcset`},features:[hE]})}return n})();function rd(n){let i={};return n.breakpoints&&(i.breakpoints=n.breakpoints.sort((t,e)=>t-e)),Object.assign({},Jd$1,n,i)}function od(n,i){n.complete&&n.naturalWidth&&i()}function ad(n){return typeof n==`string`?n:Dt$1(n)}function sd(n){return typeof n==`string`&&n!==`true`&&n!==`false`&&n!==``?n:Nj(n)}var En=class{_doc;constructor(i){this._doc=i}manager};var xi=(()=>{class n extends En{constructor(t){super(t)}supports(t){return!0}addEventListener(t,e,r,o){return t.addEventListener(e,r,o),()=>this.removeEventListener(t,e,r,o)}removeEventListener(t,e,r,o){return t.removeEventListener(e,r,o)}static ɵfac=function(e){return new(e||n)(Pe$1(mt))};static ɵprov=ae({token:n,factory:n.ɵfac})}return n})();var Ai=new S(``);var so=(()=>{class n{_zone;_plugins;_eventNameToPlugin=/* @__PURE__ */ new Map;constructor(t,e){this._zone=e,t.forEach(a=>{a.manager=this});let r=t.filter(a=>!(a instanceof xi));this._plugins=r.slice().reverse();let o=t.find(a=>a instanceof xi);o&&this._plugins.push(o)}addEventListener(t,e,r,o){return this._findPluginFor(e).addEventListener(t,e,r,o)}getZone(){return this._zone}_findPluginFor(t){let e=this._eventNameToPlugin.get(t);if(e)return e;if(e=this._plugins.find(o=>o.supports(t)),!e)throw new w$1(-5101,!1);return this._eventNameToPlugin.set(t,e),e}static ɵfac=function(e){return new(e||n)(Pe$1(Ai),Pe$1(Fe$1))};static ɵprov=ae({token:n,factory:n.ɵfac})}return n})();var ro=`ng-app-id`;function is(n){for(let i of n)i.remove()}function rs(n,i){let t=i.createElement(`style`);return t.textContent=n,t}function cd(n,i,t,e){let r=n.head?.querySelectorAll(`style[${ro}="${i}"],link[${ro}="${i}"]`);if(!r||r.length===0)return!1;for(let o of r)o.removeAttribute(ro),o instanceof HTMLLinkElement?e.set(o.href.slice(o.href.lastIndexOf(`/`)+1),{usage:0,elements:[o]}):o.textContent&&t.set(o.textContent,{usage:0,elements:[o]});return!0}function ao(n,i){let t=i.createElement(`link`);return t.setAttribute(`rel`,`stylesheet`),t.setAttribute(`href`,n),t}var lo=(()=>{class n{doc;appId;nonce;inline=/* @__PURE__ */ new Map;external=/* @__PURE__ */ new Map;hosts=/* @__PURE__ */ new Set;constructor(t,e,r,o={}){this.doc=t,this.appId=e,this.nonce=r,cd(t,e,this.inline,this.external)&&this.hosts.add(t.head)}addStyles(t,e){for(let r of t)this.addUsage(r,this.inline,rs);e?.forEach(r=>this.addUsage(r,this.external,ao))}removeStyles(t,e){for(let r of t)this.removeUsage(r,this.inline);e?.forEach(r=>this.removeUsage(r,this.external))}addUsage(t,e,r){let o=e.get(t);o?o.usage++:e.set(t,{usage:1,elements:[...this.hosts].map(a=>this.addElement(a,r(t,this.doc)))})}removeUsage(t,e){let r=e.get(t);r&&(r.usage--,r.usage<=0&&(is(r.elements),e.delete(t)))}ngOnDestroy(){for(let[,{elements:t}]of[...this.inline,...this.external])is(t);this.hosts.clear()}addHost(t){if(!this.hosts.has(t)){this.hosts.add(t);for(let[e,{elements:r}]of this.inline)r.push(this.addElement(t,rs(e,this.doc)));for(let[e,{elements:r}]of this.external)r.push(this.addElement(t,ao(e,this.doc)))}}removeHost(t){this.hosts.delete(t);for(let e of[...this.inline.values(),...this.external.values()]){let r=[];for(let o of e.elements)o.parentNode===t?o.remove():r.push(o);e.elements=r}}addElement(t,e){return this.nonce&&e.setAttribute(`nonce`,this.nonce),t.appendChild(e)}static ɵfac=function(e){return new(e||n)(Pe$1(mt),Pe$1(It),Pe$1(Kv,8),Pe$1(Yv))};static ɵprov=ae({token:n,factory:n.ɵfac})}return n})();var oo={svg:`http://www.w3.org/2000/svg`,xhtml:`http://www.w3.org/1999/xhtml`,xlink:`http://www.w3.org/1999/xlink`,xml:`http://www.w3.org/XML/1998/namespace`,xmlns:`http://www.w3.org/2000/xmlns/`,math:`http://www.w3.org/1998/Math/MathML`};var co=/%COMP%/g;var as=`%COMP%`;var dd=`_nghost-${as}`;var ud=`_ngcontent-${as}`;var hd=!0;var md=new S(``,{factory:()=>hd});var pd=new S(``);function fd(n){return ud.replace(co,n)}function gd(n){return dd.replace(co,n)}function ss(n,i){return i.map(t=>t.replace(co,n))}var uo=(()=>{class n{eventManager;sharedStylesHost;appId;removeStylesOnCompDestroy;doc;ngZone;nonce;tracingService;rendererByCompId=/* @__PURE__ */ new Map;defaultRenderer;cssVarNamespace;constructor(t,e,r,o,a,s,l=null,d=null,u=null){this.eventManager=t,this.sharedStylesHost=e,this.appId=r,this.removeStylesOnCompDestroy=o,this.doc=a,this.ngZone=s,this.nonce=l,this.tracingService=d,this.cssVarNamespace=u??``,this.defaultRenderer=new Rn(t,a,s,this.tracingService,this.cssVarNamespace)}createRenderer(t,e){if(!t||!e)return this.defaultRenderer;let r=this.getOrCreateRenderer(t,e);return r instanceof Mi?r.applyToHost(t):r instanceof xn$1&&r.applyStyles(),r}getOrCreateRenderer(t,e){let r=this.rendererByCompId,o=r.get(e.id);if(!o){let a=this.doc,s=this.ngZone,l=this.eventManager,d=this.sharedStylesHost,u=this.removeStylesOnCompDestroy,h=this.tracingService;switch(e.encapsulation){case tn$2.Emulated:o=new Mi(l,d,e,this.appId,u,a,s,h,this.cssVarNamespace);break;case tn$2.ShadowDom:return new Ii(l,t,e,a,s,this.nonce,h,this.cssVarNamespace,d);case tn$2.ExperimentalIsolatedShadowDom:return new Ii(l,t,e,a,s,this.nonce,h,this.cssVarNamespace);default:o=new xn$1(l,d,e,u,a,s,h,this.cssVarNamespace)}r.set(e.id,o)}return o}ngOnDestroy(){this.rendererByCompId.clear()}componentReplaced(t){this.rendererByCompId.delete(t)}static ɵfac=function(e){return new(e||n)(Pe$1(so),Pe$1(lg),Pe$1(It),Pe$1(md),Pe$1(mt),Pe$1(Fe$1),Pe$1(Kv),Pe$1(sn$2,8),Pe$1(pd,8))};static ɵprov=ae({token:n,factory:n.ɵfac})}return n})();var Rn=class{eventManager;doc;ngZone;tracingService;cssVarNamespace;data=Object.create(null);throwOnSyntheticProps=!0;constructor(i,t,e,r,o=``){this.eventManager=i,this.doc=t,this.ngZone=e,this.tracingService=r,this.cssVarNamespace=o}destroy(){}destroyNode=null;createElement(i,t){return t?this.doc.createElementNS(oo[t]||t,i):this.doc.createElement(i)}createComment(i){return this.doc.createComment(i)}createText(i){return this.doc.createTextNode(i)}appendChild(i,t){(os(i)?i.content:i).appendChild(t)}insertBefore(i,t,e){if(i){let r=os(i)?i.content:i;if(e!=null&&e.parentNode!==r)throw new w$1(-5106,!1);r.insertBefore(t,e)}}removeChild(i,t){t.remove()}selectRootElement(i,t){let e=typeof i==`string`?this.doc.querySelector(i):i;if(!e)throw new w$1(-5104,!1);return t||(e.textContent=``),e}parentNode(i){return i.parentNode}nextSibling(i){return i.nextSibling}setAttribute(i,t,e,r){if(r){t=r+`:`+t;let o=oo[r];o?i.setAttributeNS(o,t,e):i.setAttribute(t,e)}else i.setAttribute(t,e)}removeAttribute(i,t,e){if(e){let r=oo[e];r?i.removeAttributeNS(r,t):i.removeAttribute(`${e}:${t}`)}else i.removeAttribute(t)}addClass(i,t){i.classList.add(t)}removeClass(i,t){i.classList.remove(t)}setStyle(i,t,e,r){let o=t.startsWith(`--`);o&&(t=t.replace(`%NS%`,this.cssVarNamespace)),o||r&(Si.DashCase|Si.Important)?i.style.setProperty(t,e,r&Si.Important?`important`:``):i.style[t]=e}removeStyle(i,t,e){let r=t.startsWith(`--`);r&&(t=t.replace(`%NS%`,this.cssVarNamespace)),r||e&Si.DashCase?i.style.removeProperty(t):i.style[t]=``}setProperty(i,t,e){i!=null&&(i[t]=e)}setValue(i,t){i.nodeValue=t}listen(i,t,e,r){if(typeof i==`string`&&(i=Kt().getGlobalEventTarget(this.doc,i),!i))throw new w$1(-5102,!1);let o=this.decoratePreventDefault(e);return this.tracingService?.wrapEventListener&&(o=this.tracingService.wrapEventListener(i,t,o)),this.eventManager.addEventListener(i,t,o,r)}decoratePreventDefault(i){return t=>{if(t===`__ngUnwrap__`)return i;i(t)===!1&&t.preventDefault()}}};function os(n){return n.tagName===`TEMPLATE`&&n.content!==void 0}var Ii=class extends Rn{hostEl;sharedStylesHost;shadowRoot;constructor(i,t,e,r,o,a,s,l,d){super(i,r,o,s,l),this.hostEl=t,this.sharedStylesHost=d,this.shadowRoot=t.attachShadow({mode:`open`}),this.sharedStylesHost&&this.sharedStylesHost.addHost(this.shadowRoot);let u=e.styles;u=ss(e.id,u).map(p=>p.replace(/%NS%/g,l));for(let p of u){let b=document.createElement(`style`);a&&b.setAttribute(`nonce`,a),b.textContent=p,this.shadowRoot.appendChild(b)}let h=e.getExternalStyles?.();if(h)for(let p of h){let b=ao(p,r);a&&b.setAttribute(`nonce`,a),this.shadowRoot.appendChild(b)}}nodeOrShadowRoot(i){return i===this.hostEl?this.shadowRoot:i}appendChild(i,t){return super.appendChild(this.nodeOrShadowRoot(i),t)}insertBefore(i,t,e){return super.insertBefore(this.nodeOrShadowRoot(i),t,e)}removeChild(i,t){return super.removeChild(null,t)}parentNode(i){return this.nodeOrShadowRoot(super.parentNode(this.nodeOrShadowRoot(i)))}destroy(){this.sharedStylesHost&&this.sharedStylesHost.removeHost(this.shadowRoot)}};var xn$1=class extends Rn{sharedStylesHost;removeStylesOnCompDestroy;styles;styleUrls;constructor(i,t,e,r,o,a,s,l,d){super(i,o,a,s,l),this.sharedStylesHost=t,this.removeStylesOnCompDestroy=r;let u=e.styles,h=d?ss(d,u):u;this.styles=h.map(p=>p.replace(/%NS%/g,l)),this.styleUrls=e.getExternalStyles?.(d)}applyStyles(){this.sharedStylesHost.addStyles(this.styles,this.styleUrls)}destroy(){this.removeStylesOnCompDestroy&&JI.size===0&&this.sharedStylesHost.removeStyles(this.styles,this.styleUrls)}};var Mi=class extends xn$1{contentAttr;hostAttr;constructor(i,t,e,r,o,a,s,l,d){let u=r+`-`+e.id;super(i,t,e,o,a,s,l,d,u),this.contentAttr=fd(u),this.hostAttr=gd(u)}applyToHost(i){this.applyStyles(),this.setAttribute(i,this.hostAttr,``)}createElement(i,t){let e=super.createElement(i,t);return super.setAttribute(e,this.contentAttr,``),e}};var Ti=class n extends Cn$1{supportsDOMEvents=!0;static makeCurrent(){no(new n)}onAndCancel(i,t,e,r){return i.addEventListener(t,e,r),()=>{i.removeEventListener(t,e,r)}}dispatchEvent(i,t){i.dispatchEvent(t)}remove(i){i.remove()}createElement(i,t){return t=t||this.getDefaultDocument(),t.createElement(i)}createHtmlDocument(){return document.implementation.createHTMLDocument(`fakeTitle`)}getDefaultDocument(){return document}isElementNode(i){return i.nodeType===Node.ELEMENT_NODE}isShadowRoot(i){return i instanceof DocumentFragment}getGlobalEventTarget(i,t){return t===`window`?window:t===`document`?i:t===`body`?i.body:null}getBaseHref(i){let t=vd();return t==null?null:yd(t)}resetBaseElement(){In$1=null}getUserAgent(){return window.navigator.userAgent}getCookie(i){return Dn(document.cookie,i)}};var In$1=null;function vd(){return In$1=In$1||document.head.querySelector(`base`),In$1?In$1.getAttribute(`href`):null}function yd(n){return new URL(n,document.baseURI).pathname}var ls=[`alt`,`control`,`meta`,`shift`];var _d={"\b":`Backspace`,"	":`Tab`,"":`Delete`,"\x1B":`Escape`,Del:`Delete`,Esc:`Escape`,Left:`ArrowLeft`,Right:`ArrowRight`,Up:`ArrowUp`,Down:`ArrowDown`,Menu:`ContextMenu`,Scroll:`ScrollLock`,Win:`OS`};var wd={alt:n=>n.altKey,control:n=>n.ctrlKey,meta:n=>n.metaKey,shift:n=>n.shiftKey};var cs=(()=>{class n extends En{constructor(t){super(t)}supports(t){return n.parseEventName(t)!=null}addEventListener(t,e,r,o){let a=n.parseEventName(e),s=n.eventCallback(a.fullKey,r,this.manager.getZone());return this.manager.getZone().runOutsideAngular(()=>Kt().onAndCancel(t,a.domEventName,s,o))}static parseEventName(t){let e=t.toLowerCase().split(`.`),r=e.shift();if(e.length===0||!(r===`keydown`||r===`keyup`))return null;let o=n._normalizeKey(e.pop()),a=``,s=e.indexOf(`code`);if(s>-1&&(e.splice(s,1),a=`code.`),ls.forEach(d=>{let u=e.indexOf(d);u>-1&&(e.splice(u,1),a+=d+`.`)}),a+=o,e.length!=0||o.length===0)return null;let l={};return l.domEventName=r,l.fullKey=a,l}static matchEventFullKeyCode(t,e){let r=_d[t.key]||t.key,o=``;return e.indexOf(`code.`)>-1&&(r=t.code,o=`code.`),r==null||!r?!1:(r=r.toLowerCase(),r===` `?r=`space`:r===`.`&&(r=`dot`),ls.forEach(a=>{if(a!==r){let s=wd[a];s(t)&&(o+=a+`.`)}}),o+=r,o===e)}static eventCallback(t,e,r){return o=>{n.matchEventFullKeyCode(o,t)&&r.runGuarded(()=>e(o))}}static _normalizeKey(t){return t===`esc`?`escape`:t}static ɵfac=function(e){return new(e||n)(Pe$1(mt))};static ɵprov=ae({token:n,factory:n.ɵfac})}return n})();async function Sd(n,i,t){let e=z$1({rootComponent:n},Cd(i,t));return Mj(e)}function Cd(n,i){return{platformRef:i?.platformRef,appProviders:[...Id,...n?.providers??[]],platformProviders:xd}}function Dd(){Ti.makeCurrent()}function Ed(){return new Je$1}function Rd(){return BE(document),document}var xd=[{provide:Yv,useValue:io},{provide:Kd$1,useValue:Dd,multi:!0},{provide:mt,useFactory:Rd}];var Id=[{provide:fa$1,useValue:`root`},{provide:Je$1,useFactory:Ed},{provide:Ai,useClass:xi,multi:!0},{provide:Ai,useClass:cs,multi:!0},uo,{provide:lg,useClass:lo},{provide:lo,useExisting:lg},so,{provide:Vr,useExisting:uo},[]];var St=class n{headers;normalizedNames=/* @__PURE__ */ new Map;lazyInit;lazyUpdate=null;constructor(i){i?typeof i==`string`?this.lazyInit=()=>{this.headers=/* @__PURE__ */ new Map,i.split(`
`).forEach(t=>{let e=t.indexOf(`:`);if(e>0){let r=t.slice(0,e),o=t.slice(e+1).trim();this.addHeaderEntry(r,o)}})}:typeof Headers<`u`&&i instanceof Headers?(this.headers=/* @__PURE__ */ new Map,i.forEach((t,e)=>{this.addHeaderEntry(e,t)})):this.lazyInit=()=>{this.headers=/* @__PURE__ */ new Map,Object.entries(i).forEach(([t,e])=>{this.setHeaderEntries(t,e)})}:this.headers=/* @__PURE__ */ new Map}has(i){return this.init(),this.headers.has(i.toLowerCase())}get(i){this.init();let t=this.headers.get(i.toLowerCase());return t&&t.length>0?t[0]:null}keys(){return this.init(),Array.from(this.normalizedNames.values())}getAll(i){return this.init(),this.headers.get(i.toLowerCase())||null}append(i,t){return this.clone({name:i,value:t,op:`a`})}set(i,t){return this.clone({name:i,value:t,op:`s`})}delete(i,t){return this.clone({name:i,value:t,op:`d`})}maybeSetNormalizedName(i,t){this.normalizedNames.has(t)||this.normalizedNames.set(t,i)}init(){this.lazyInit&&(this.lazyInit instanceof n?this.copyFrom(this.lazyInit):this.lazyInit(),this.lazyInit=null,this.lazyUpdate&&(this.lazyUpdate.forEach(i=>this.applyUpdate(i)),this.lazyUpdate=null))}copyFrom(i){i.init();for(let[t,e]of i.headers.entries())this.headers.set(t,e),this.normalizedNames.set(t,i.normalizedNames.get(t))}clone(i){let t=new n;return t.lazyInit=this.lazyInit&&this.lazyInit instanceof n?this.lazyInit:this,t.lazyUpdate=(this.lazyUpdate||[]).concat([i]),t}applyUpdate(i){let t=i.name.toLowerCase();switch(i.op){case`a`:case`s`:let e=i.value;if(typeof e==`string`&&(e=[e]),e.length===0)return;this.maybeSetNormalizedName(i.name,t);let r=i.op===`a`?(this.headers.get(t)||[]).slice():[];r.push(...e),this.headers.set(t,r);break;case`d`:let o=i.value;if(o===void 0)this.headers.delete(t),this.normalizedNames.delete(t);else{let a=Array.isArray(o)?o:[o],s=this.headers.get(t);if(!s)return;s=s.filter(l=>a.indexOf(l)===-1),s.length===0?(this.headers.delete(t),this.normalizedNames.delete(t)):this.headers.set(t,s)}}}addHeaderEntry(i,t){let e=i.toLowerCase();this.maybeSetNormalizedName(i,e),this.headers.has(e)?this.headers.get(e).push(t):this.headers.set(e,[t])}setHeaderEntries(i,t){let e=(Array.isArray(t)?t:[t]).map(o=>o.toString()),r=i.toLowerCase();this.headers.set(r,e),this.maybeSetNormalizedName(i,r)}forEach(i){this.init(),Array.from(this.normalizedNames.keys()).forEach(t=>i(this.normalizedNames.get(t),this.headers.get(t)))}};var Oi=class{map=/* @__PURE__ */ new Map;set(i,t){return this.map.set(i,t),this}get(i){return this.map.has(i)||this.map.set(i,i.defaultValue()),this.map.get(i)}delete(i){return this.map.delete(i),this}has(i){return this.map.has(i)}keys(){return this.map.keys()}};var ki=class{encodeKey(i){return ds(i)}encodeValue(i){return ds(i)}decodeKey(i){return decodeURIComponent(i)}decodeValue(i){return decodeURIComponent(i)}};function Md(n,i){let t=/* @__PURE__ */ new Map;return n.length>0&&n.replace(/^\?/,``).split(`&`).forEach(r=>{let o=r.indexOf(`=`),[a,s]=o==-1?[i.decodeKey(r),``]:[i.decodeKey(r.slice(0,o)),i.decodeValue(r.slice(o+1))],l=t.get(a)||[];l.push(s),t.set(a,l)}),t}var Ad=/[&+#]/g;function ds(n){return encodeURI(n).replace(Ad,encodeURIComponent)}function Ni(n){return`${n}`}var lt=class n{map;encoder;updates=null;cloneFrom=null;constructor(i={}){if(this.encoder=i.encoder||new ki,i.fromString){if(i.fromObject)throw new w$1(2805,!1);this.map=Md(i.fromString,this.encoder)}else i.fromObject?(this.map=/* @__PURE__ */ new Map,Object.keys(i.fromObject).forEach(t=>{let e=i.fromObject[t],r=Array.isArray(e)?e.map(Ni):[Ni(e)];this.map.set(t,r)})):this.map=null}has(i){return this.init(),this.map.has(i)}get(i){this.init();let t=this.map.get(i);return t?t[0]:null}getAll(i){return this.init(),this.map.get(i)||null}keys(){return this.init(),Array.from(this.map.keys())}append(i,t){return this.clone({param:i,value:t,op:`a`})}appendAll(i){let t=[];return Object.keys(i).forEach(e=>{let r=i[e];Array.isArray(r)?r.forEach(o=>{t.push({param:e,value:o,op:`a`})}):t.push({param:e,value:r,op:`a`})}),this.clone(t)}set(i,t){return this.clone({param:i,value:t,op:`s`})}delete(i,t){return this.clone({param:i,value:t,op:`d`})}toString(){return this.init(),this.keys().map(i=>{let t=this.encoder.encodeKey(i);return this.map.get(i).map(e=>t+`=`+this.encoder.encodeValue(e)).join(`&`)}).filter(i=>i!==``).join(`&`)}clone(i){let t=new n({encoder:this.encoder});return t.cloneFrom=this.cloneFrom||this,t.updates=(this.updates||[]).concat(i),t}init(){if(this.map===null&&(this.map=/* @__PURE__ */ new Map),this.cloneFrom!==null){this.cloneFrom.init();for(let[i,t]of this.cloneFrom.map.entries())this.map.set(i,t);this.updates.forEach(i=>{switch(i.op){case`a`:case`s`:let t=i.op===`a`?(this.map.get(i.param)||[]).slice():[];t.push(Ni(i.value)),this.map.set(i.param,t);break;case`d`:if(i.value!==void 0){let e=(this.map.get(i.param)||[]).slice(),r=e.indexOf(Ni(i.value));r!==-1&&e.splice(r,1),e.length>0?this.map.set(i.param,e):this.map.delete(i.param)}else{this.map.delete(i.param);break}}}),this.cloneFrom=this.updates=null}}};function Td(n){switch(n){case`DELETE`:case`GET`:case`HEAD`:case`OPTIONS`:case`JSONP`:return!1;default:return!0}}function us(n){return typeof ArrayBuffer<`u`&&n instanceof ArrayBuffer}function hs(n){return typeof Blob<`u`&&n instanceof Blob}function ms(n){return typeof FormData<`u`&&n instanceof FormData}function Nd(n){return typeof URLSearchParams<`u`&&n instanceof URLSearchParams}var ho=`Content-Type`;var ps=`Accept`;var bs=`text/plain`;var vs=`application/json`;var Od=`${vs}, ${bs}, */*`;var Se$1=class n{url;body=null;headers;context;reportProgress=!1;reportUploadProgress=!1;reportDownloadProgress=!1;withCredentials=!1;credentials;keepalive=!1;cache;priority;mode;redirect;referrer;integrity;referrerPolicy;responseType=`json`;method;params;urlWithParams;transferCache;timeout;constructor(i,t,e,r){this.url=t,this.method=i.toUpperCase();let o;if(Td(this.method)||r?(this.body=e!==void 0?e:null,o=r):o=e,o){if(this.reportProgress=!!o.reportProgress,this.reportUploadProgress=!!o.reportUploadProgress,this.reportDownloadProgress=!!o.reportDownloadProgress,this.withCredentials=!!o.withCredentials,this.keepalive=!!o.keepalive,o.responseType&&(this.responseType=o.responseType),o.headers&&(this.headers=o.headers),o.context&&(this.context=o.context),o.params&&(this.params=o.params),o.priority&&(this.priority=o.priority),o.cache&&(this.cache=o.cache),o.credentials&&(this.credentials=o.credentials),typeof o.timeout==`number`){if(o.timeout<1||!Number.isInteger(o.timeout))throw new w$1(2822,``);this.timeout=o.timeout}o.mode&&(this.mode=o.mode),o.redirect&&(this.redirect=o.redirect),o.integrity&&(this.integrity=o.integrity),o.referrer!==void 0&&(this.referrer=o.referrer),o.referrerPolicy&&(this.referrerPolicy=o.referrerPolicy),this.transferCache=o.transferCache}if(this.headers??=new St,this.context??=new Oi,!this.params)this.params=new lt,this.urlWithParams=t;else{let a=this.params.toString();if(a.length===0)this.urlWithParams=t;else{let s=t,l=``,d=t.indexOf(`#`);d!==-1&&(l=t.substring(d),s=t.substring(0,d));let u=s.indexOf(`?`),h=u===-1?`?`:u<s.length-1?`&`:``;this.urlWithParams=s+h+a+l}}}serializeBody(){return this.body===null?null:typeof this.body==`string`||us(this.body)||hs(this.body)||ms(this.body)||Nd(this.body)?this.body:this.body instanceof lt?this.body.toString():typeof this.body==`object`||typeof this.body==`boolean`||Array.isArray(this.body)?JSON.stringify(this.body):this.body.toString()}detectContentTypeHeader(){return this.body===null||ms(this.body)?null:hs(this.body)?this.body.type||null:us(this.body)?null:typeof this.body==`string`?bs:this.body instanceof lt?`application/x-www-form-urlencoded;charset=UTF-8`:typeof this.body==`object`||typeof this.body==`number`||typeof this.body==`boolean`?vs:null}clone(i={}){let t=i.method||this.method,e=i.url||this.url,r=i.responseType||this.responseType,o=i.keepalive??this.keepalive,a=i.priority||this.priority,s=i.cache||this.cache,l=i.mode||this.mode,d=i.redirect||this.redirect,u=i.credentials||this.credentials,h=i.referrer??this.referrer,p=i.integrity||this.integrity,b=i.referrerPolicy||this.referrerPolicy,S=i.transferCache??this.transferCache,D=i.timeout??this.timeout,E=i.body!==void 0?i.body:this.body,x=i.withCredentials??this.withCredentials,P=i.reportProgress??this.reportProgress,V=i.reportUploadProgress??this.reportUploadProgress,xt=i.reportDownloadProgress??this.reportDownloadProgress,vt=i.headers||this.headers,K=i.params||this.params,Ut=i.context??this.context;return i.setHeaders!==void 0&&(vt=Object.keys(i.setHeaders).reduce((It,yt)=>It.set(yt,i.setHeaders[yt]),vt)),i.setParams&&(K=Object.keys(i.setParams).reduce((It,yt)=>It.set(yt,i.setParams[yt]),K)),new n(t,e,E,{params:K,headers:vt,context:Ut,reportProgress:P,reportUploadProgress:V,reportDownloadProgress:xt,responseType:r,withCredentials:x,transferCache:S,keepalive:o,cache:s,priority:a,timeout:D,mode:l,redirect:d,credentials:u,referrer:h,integrity:p,referrerPolicy:b})}};var Zt$1=(function(n){return n[n.Sent=0]=`Sent`,n[n.UploadProgress=1]=`UploadProgress`,n[n.ResponseHeader=2]=`ResponseHeader`,n[n.DownloadProgress=3]=`DownloadProgress`,n[n.Response=4]=`Response`,n[n.User=5]=`User`,n})(Zt$1||{});var Ke=class{headers;status;statusText;url;ok;type;redirected;responseType;constructor(i,t=200,e=`OK`){this.headers=i.headers||new St,this.status=i.status!==void 0?i.status:t,this.statusText=i.statusText||e,this.url=i.url||null,this.redirected=i.redirected,this.responseType=i.responseType,this.ok=this.status>=200&&this.status<300}};var Pi=class n extends Ke{constructor(i={}){super(i)}type=Zt$1.ResponseHeader;clone(i={}){return new n({headers:i.headers||this.headers,status:i.status!==void 0?i.status:this.status,statusText:i.statusText||this.statusText,url:i.url||this.url||void 0})}};var Ze=class n extends Ke{body;constructor(i={}){super(i),this.body=i.body!==void 0?i.body:null}type=Zt$1.Response;clone(i={}){return new n({body:i.body!==void 0?i.body:this.body,headers:i.headers||this.headers,status:i.status!==void 0?i.status:this.status,statusText:i.statusText||this.statusText,url:i.url||this.url||void 0,redirected:i.redirected??this.redirected,responseType:i.responseType??this.responseType})}};var de=class extends Ke{name=`HttpErrorResponse`;message;error;ok=!1;constructor(i){super(i,0,`Unknown Error`),this.status>=200&&this.status<300?this.message=`Http failure during parsing for ${i.url||`(unknown url)`}`:this.message=`Http failure response for ${i.url||`(unknown url)`}: ${i.status} ${i.statusText}`,this.error=i.error||null}};var kd=200;var ys=(function(n){return n[n.Continue=100]=`Continue`,n[n.SwitchingProtocols=101]=`SwitchingProtocols`,n[n.Processing=102]=`Processing`,n[n.EarlyHints=103]=`EarlyHints`,n[n.Ok=200]=`Ok`,n[n.Created=201]=`Created`,n[n.Accepted=202]=`Accepted`,n[n.NonAuthoritativeInformation=203]=`NonAuthoritativeInformation`,n[n.NoContent=204]=`NoContent`,n[n.ResetContent=205]=`ResetContent`,n[n.PartialContent=206]=`PartialContent`,n[n.MultiStatus=207]=`MultiStatus`,n[n.AlreadyReported=208]=`AlreadyReported`,n[n.ImUsed=226]=`ImUsed`,n[n.MultipleChoices=300]=`MultipleChoices`,n[n.MovedPermanently=301]=`MovedPermanently`,n[n.Found=302]=`Found`,n[n.SeeOther=303]=`SeeOther`,n[n.NotModified=304]=`NotModified`,n[n.UseProxy=305]=`UseProxy`,n[n.Unused=306]=`Unused`,n[n.TemporaryRedirect=307]=`TemporaryRedirect`,n[n.PermanentRedirect=308]=`PermanentRedirect`,n[n.BadRequest=400]=`BadRequest`,n[n.Unauthorized=401]=`Unauthorized`,n[n.PaymentRequired=402]=`PaymentRequired`,n[n.Forbidden=403]=`Forbidden`,n[n.NotFound=404]=`NotFound`,n[n.MethodNotAllowed=405]=`MethodNotAllowed`,n[n.NotAcceptable=406]=`NotAcceptable`,n[n.ProxyAuthenticationRequired=407]=`ProxyAuthenticationRequired`,n[n.RequestTimeout=408]=`RequestTimeout`,n[n.Conflict=409]=`Conflict`,n[n.Gone=410]=`Gone`,n[n.LengthRequired=411]=`LengthRequired`,n[n.PreconditionFailed=412]=`PreconditionFailed`,n[n.PayloadTooLarge=413]=`PayloadTooLarge`,n[n.UriTooLong=414]=`UriTooLong`,n[n.UnsupportedMediaType=415]=`UnsupportedMediaType`,n[n.RangeNotSatisfiable=416]=`RangeNotSatisfiable`,n[n.ExpectationFailed=417]=`ExpectationFailed`,n[n.ImATeapot=418]=`ImATeapot`,n[n.MisdirectedRequest=421]=`MisdirectedRequest`,n[n.UnprocessableEntity=422]=`UnprocessableEntity`,n[n.Locked=423]=`Locked`,n[n.FailedDependency=424]=`FailedDependency`,n[n.TooEarly=425]=`TooEarly`,n[n.UpgradeRequired=426]=`UpgradeRequired`,n[n.PreconditionRequired=428]=`PreconditionRequired`,n[n.TooManyRequests=429]=`TooManyRequests`,n[n.RequestHeaderFieldsTooLarge=431]=`RequestHeaderFieldsTooLarge`,n[n.UnavailableForLegalReasons=451]=`UnavailableForLegalReasons`,n[n.InternalServerError=500]=`InternalServerError`,n[n.NotImplemented=501]=`NotImplemented`,n[n.BadGateway=502]=`BadGateway`,n[n.ServiceUnavailable=503]=`ServiceUnavailable`,n[n.GatewayTimeout=504]=`GatewayTimeout`,n[n.HttpVersionNotSupported=505]=`HttpVersionNotSupported`,n[n.VariantAlsoNegotiates=506]=`VariantAlsoNegotiates`,n[n.InsufficientStorage=507]=`InsufficientStorage`,n[n.LoopDetected=508]=`LoopDetected`,n[n.NotExtended=510]=`NotExtended`,n[n.NetworkAuthenticationRequired=511]=`NetworkAuthenticationRequired`,n})(ys||{});var Pd=/^\)\]\}',?\n/;var _s=new S(``,{factory:()=>null});var Fi=(()=>{class n{fetchImpl=v(po,{optional:!0})?.fetch??((...t)=>globalThis.fetch(...t));ngZone=v(Fe$1);destroyRef=v(fe);maxResponseSize=v(_s);handle(t){return new x(e=>{let r=new AbortController,o=!1,a={next:l=>{l.type===Zt$1.Response&&(o=!0),e.next(l)},error:l=>{o=!0,e.error(l)},complete:()=>{o=!0,e.complete()}};this.doRequest(t,r.signal,a).then(fo,l=>a.error(new de({error:l})));let s;return t.timeout&&(s=this.ngZone.runOutsideAngular(()=>setTimeout(()=>{r.signal.aborted||r.abort(new DOMException(`signal timed out`,`TimeoutError`))},t.timeout))),()=>{s!==void 0&&clearTimeout(s),!o&&!r.signal.aborted&&r.abort()}})}async doRequest(t,e,r){let o=this.createRequestInit(t),a;try{let E=this.ngZone.runOutsideAngular(()=>this.fetchImpl(t.urlWithParams,z$1({signal:e},o)));Fd(E),r.next({type:Zt$1.Sent}),a=await E}catch(E){r.error(new de({error:E,status:E.status??0,statusText:E.statusText,url:t.urlWithParams,headers:E.headers}));return}let s=new St(a.headers),l=a.statusText,d=a.url||t.urlWithParams,u=a.status,h=null,p=t.reportProgress||t.reportDownloadProgress;if(p&&r.next(new Pi({headers:s,status:u,statusText:l,url:d})),a.body){let E=a.headers.get(ho)??``,x=a.headers.get(`content-length`),P=x!==null?Number(x):NaN;this.maxResponseSize!==null&&Number.isFinite(P)&&P>this.maxResponseSize&&(await a.body.cancel(),fs(this.maxResponseSize));let V=[],xt=a.body.getReader(),vt=0,K,Ut,It=typeof Zone<`u`&&Zone.current,yt=!1;if(await this.ngZone.runOutsideAngular(async()=>{for(;;){if(this.destroyRef.destroyed){await xt.cancel(),yt=!0;break}let{done:Mt,value:fe}=await xt.read();if(Mt)break;if(V.push(fe),vt+=fe.length,this.maxResponseSize!==null&&vt>this.maxResponseSize&&(await xt.cancel(),fs(this.maxResponseSize)),p){Ut=t.responseType===`text`?(Ut??``)+(K??=gs(E)).decode(fe,{stream:!0}):void 0;let At=()=>r.next({type:Zt$1.DownloadProgress,total:Number.isFinite(P)?P:void 0,loaded:vt,partialText:Ut});It?It.run(At):At()}}}),yt){r.complete();return}let G=this.concatChunks(V,vt);try{h=this.parseBody(t,G,E,u)}catch(Mt){r.error(new de({error:Mt,headers:new St(a.headers),status:a.status,statusText:a.statusText,url:a.url||t.urlWithParams}));return}}u===0&&(u=h?kd:0);let b=u>=200&&u<300,S=a.redirected,D=a.type;b?(r.next(new Ze({body:h,headers:s,status:u,statusText:l,url:d,redirected:S,responseType:D})),r.complete()):r.error(new de({error:h,headers:s,status:u,statusText:l,url:d,redirected:S,responseType:D}))}parseBody(t,e,r,o){switch(t.responseType){case`json`:let a=new TextDecoder().decode(e).replace(Pd,``);if(a===``)return null;try{return JSON.parse(a)}catch(s){if(o<200||o>=300)return a;throw s}case`text`:return gs(r).decode(e);case`blob`:return new Blob([e],{type:r});case`arraybuffer`:return e.buffer}}createRequestInit(t){if(t.reportUploadProgress)throw new w$1(2824,!1);let e={},r;if(r=t.credentials,t.withCredentials&&(r=`include`),t.headers.forEach((o,a)=>e[o]=a.join(`,`)),t.headers.has(ps)||(e[ps]=Od),!t.headers.has(ho)){let o=t.detectContentTypeHeader();o!==null&&(e[ho]=o)}return{body:t.serializeBody(),method:t.method,headers:e,credentials:r,keepalive:t.keepalive,cache:t.cache,priority:t.priority,mode:t.mode,redirect:t.redirect,referrer:t.referrer,integrity:t.integrity,referrerPolicy:t.referrerPolicy}}concatChunks(t,e){let r=new Uint8Array(e),o=0;for(let a of t)r.set(a,o),o+=a.length;return r}static ɵfac=function(e){return new(e||n)};static ɵprov=$r({token:n,factory:n.ɵfac})}return n})();var po=class{};function fo(){}function Fd(n){n.then(fo,fo)}function fs(n){throw new w$1(-2825,!1)}var Ld=/charset=\s*["']?([^;"'\s]+)["']?/i;function gs(n){let i=n.match(Ld);if(i!==null)try{return new TextDecoder(i[1])}catch{}return new TextDecoder}var Bd=new S(``,{factory:()=>!0});var Ud=`XSRF-TOKEN`;var ws=new S(``,{factory:()=>Ud});var jd=`X-XSRF-TOKEN`;var Ss=new S(``,{factory:()=>jd});var zd=(()=>{class n{cookieName=v(ws);doc=v(mt);lastCookieString=``;lastToken=null;parseCount=0;getToken(){let t=this.doc.cookie||``;return t!==this.lastCookieString&&(this.parseCount++,this.lastToken=Dn(t,this.cookieName),this.lastCookieString=t),this.lastToken}static ɵfac=function(e){return new(e||n)};static ɵprov=$r({token:n,factory:n.ɵfac})}return n})();var Cs=(()=>{class n{static ɵfac=function(e){return new(e||n)};static ɵprov=ae({token:n,factory:function(e){let r=null;return e?r=new(e||n):r=Pe$1(zd),r},providedIn:`root`})}return n})();function Ds(n,i){if(!v(Bd)||n.method===`GET`||n.method===`HEAD`)return i(n);try{let r=v(Xe).href,{origin:o}=new URL(r),{origin:a}=new URL(n.url,o);if(o!==a)return i(n)}catch{return i(n)}let t=v(Cs).getToken(),e=v(Ss);return t!=null&&!n.headers.has(e)&&(n=n.clone({headers:n.headers.set(e,t)})),i(n)}function Vd(n,i){return i(n)}function Hd(n,i,t){return(e,r)=>Yo$1(t,()=>i(e,o=>n(o,r)))}var Es=new S(``,{factory:()=>[Ds]});var go=new S(``);var Rs=new S(``,{factory:()=>!0});var bo=(()=>{class n{static ɵfac=function(e){return new(e||n)};static ɵprov=ae({token:n,factory:function(e){let r=null;return e?r=new(e||n):r=Pe$1(Fi),r},providedIn:`root`})}return n})();var Li=(()=>{class n{backend;injector;chain=null;pendingTasks=v(Sr$1);contributeToStability=v(Rs);constructor(t,e){this.backend=t,this.injector=e}handle(t){if(this.chain===null){let r=this.injector.get(Bi,null,{skipSelf:!0}),o=r!==null&&this.backend===r,a=this.injector.get(go,[],o?{self:!0}:void 0),s=Array.from(/* @__PURE__ */ new Set([...this.injector.get(Es),...a]));this.chain=s.reduceRight((l,d)=>Hd(l,d,this.injector),Vd)}let e=this.chain;if(this.contributeToStability){let r=this.pendingTasks.add();return le$1(()=>e(t,o=>this.backend.handle(o))).pipe(Xy(r))}else return le$1(()=>e(t,r=>this.backend.handle(r)))}static ɵfac=function(e){return new(e||n)(Pe$1(bo),Pe$1(Ee$1))};static ɵprov=ae({token:n,factory:n.ɵfac,providedIn:`root`})}return n})();var Bi=(()=>{class n{static ɵfac=function(e){return new(e||n)};static ɵprov=ae({token:n,factory:function(e){let r=null;return e?r=new(e||n):r=Pe$1(Li),r},providedIn:`root`})}return n})();function mo(n,i){return z$1({body:i},n)}var Ce$1=(()=>{class n{handler;constructor(t){this.handler=t}request(t,e,r={}){let o;if(t instanceof Se$1)o=t;else{let l;r.headers instanceof St?l=r.headers:l=new St(r.headers);let d;r.params&&(r.params instanceof lt?d=r.params:d=new lt({fromObject:r.params})),o=new Se$1(t,e,r.body!==void 0?r.body:null,{headers:l,context:r.context,params:d,reportProgress:r.reportProgress,reportUploadProgress:r.reportUploadProgress,reportDownloadProgress:r.reportDownloadProgress,responseType:r.responseType||`json`,withCredentials:r.withCredentials,transferCache:r.transferCache,keepalive:r.keepalive,priority:r.priority,cache:r.cache,mode:r.mode,redirect:r.redirect,credentials:r.credentials,referrer:r.referrer,referrerPolicy:r.referrerPolicy,integrity:r.integrity,timeout:r.timeout})}let a=Ay(o).pipe(zy(l=>this.handler.handle(l)));if(t instanceof Se$1||r.observe===`events`)return a;let s=a.pipe(rr$1(l=>l instanceof Ze));switch(r.observe||`body`){case`body`:switch(o.responseType){case`arraybuffer`:return s.pipe(Ue(l=>{if(l.body!==null&&!(l.body instanceof ArrayBuffer))throw new w$1(2806,!1);return l.body}));case`blob`:return s.pipe(Ue(l=>{if(l.body!==null&&!(l.body instanceof Blob))throw new w$1(2807,!1);return l.body}));case`text`:return s.pipe(Ue(l=>{if(l.body!==null&&typeof l.body!=`string`)throw new w$1(2808,!1);return l.body}));default:return s.pipe(Ue(l=>l.body))}case`response`:return s;default:throw new w$1(2809,!1)}}delete(t,e={}){return this.request(`DELETE`,t,e)}get(t,e={}){return this.request(`GET`,t,e)}head(t,e={}){return this.request(`HEAD`,t,e)}jsonp(t,e){return this.request(`JSONP`,t,{params:new lt().append(e,`JSONP_CALLBACK`),observe:`body`,responseType:`json`})}options(t,e={}){return this.request(`OPTIONS`,t,e)}patch(t,e,r={}){return this.request(`PATCH`,t,mo(r,e))}post(t,e,r={}){return this.request(`POST`,t,mo(r,e))}put(t,e,r={}){return this.request(`PUT`,t,mo(r,e))}static ɵfac=function(e){return new(e||n)(Pe$1(Bi))};static ɵprov=ae({token:n,factory:n.ɵfac,providedIn:`root`})}return n})();var vo=(function(n){return n[n.Interceptors=0]=`Interceptors`,n[n.LegacyInterceptors=1]=`LegacyInterceptors`,n[n.CustomXsrfConfiguration=2]=`CustomXsrfConfiguration`,n[n.NoXsrfProtection=3]=`NoXsrfProtection`,n[n.JsonpSupport=4]=`JsonpSupport`,n[n.RequestsMadeViaParent=5]=`RequestsMadeViaParent`,n[n.Fetch=6]=`Fetch`,n[n.Xhr=7]=`Xhr`,n})(vo||{});function $d(n,i){return{ɵkind:n,ɵproviders:i}}function Wd(...n){let i=[Ce$1,Fi,Li,{provide:Bi,useExisting:Li},{provide:bo,useFactory:()=>v(Fi)},{provide:Es,useValue:Ds,multi:!0}];for(let t of n)i.push(...t.ɵproviders);return Dr$1(i)}function Gd({cookieName:n,headerName:i}){let t=[];return n!==void 0&&t.push({provide:ws,useValue:n}),i!==void 0&&t.push({provide:Ss,useValue:i}),$d(vo.CustomXsrfConfiguration,t)}var As=new S(``);var Yd=`b`;var Xd=`h`;var qd=`s`;var Kd=`st`;var Zd=`u`;var Jd=`rt`;var ji=new S(``);var Qd=[`GET`,`HEAD`];function Ts(n,i){let{isCacheActive:t,filter:e,includePostRequests:r,includeRequestsWithAuthHeaders:o,includeRequestsWithCredentials:a,includeNonCacheableRequests:s}=i,{transferCache:l,method:d}=n;return!(!t||l===!1||d===`POST`&&!r&&!l||d!==`POST`&&!Qd.includes(d)||!o&&eu(n)||!a&&ou(n)||!s&&(iu(n.headers)||ru(n.cache))||e?.(n)===!1)}function Ns(n,i,t,e,r,o=!1){if(!o&&!Ts(n,i))return null;if(e)throw new w$1(2803,!1);if(!r){let D=n.url;r=Os(n,D)}let a=t.get(r,null);if(!a)return null;let{[Yd]:s,[Jd]:l,[Xd]:d,[qd]:u,[Kd]:h,[Zd]:p}=a,b=s;switch(l){case`arraybuffer`:b=Is(s);break;case`blob`:b=new Blob([Is(s)])}let S=new St(d);return new Ze({body:b,headers:S,status:u,statusText:h,url:p})}function tu(n,i){let t=v(ji);if(!Ts(n,t))return i(n);let e=v(Zt$2);v(As,{optional:!0});let o=n.url,s=Ns(n,t,e,null,Os(n,o),!0);return s?Ay(s):i(n)}function eu(n){let i=n.headers;return i.has(`authorization`)||i.has(`proxy-authorization`)||i.has(`cookie`)}var nu=/* @__PURE__ */ new Set([`no-store`,`private`,`no-cache`]);function iu(n){let i=n.getAll(`cache-control`);return i?i.some(t=>t.split(`,`).some(e=>{let r=e.split(`=`,1)[0].trim().toLowerCase();return nu.has(r)})):!1}function ru(n){return n===`no-cache`||n===`no-store`}function ou(n){let{withCredentials:i,credentials:t}=n;return i||t===`include`||t===`same-origin`}function xs(n){let i=new URLSearchParams(n instanceof URLSearchParams?n:n.toString());return i.sort(),i.toString()}function Os(n,i){let{params:t,method:e,responseType:r}=n,o=xs(t),a=n.serializeBody();a instanceof URLSearchParams?a=xs(a):typeof a!=`string`&&(a=``);return su([e,r,i,a,o].join(`\0`))}function Is(n){let i=atob(n);return Uint8Array.from(i,e=>e.charCodeAt(0)).buffer}function ks(n){return[{provide:ji,useFactory:()=>(Be(`NgHttpTransferCache`),z$1({isCacheActive:!0},n))},{provide:go,useValue:tu,multi:!0},{provide:eo,multi:!0,useFactory:()=>{let i=v(wt),t=v(ji);return()=>{i.whenStable().then(()=>{t.isCacheActive=!1})}}}]}var au=new Uint32Array([1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298]);var Ms;function su(n){Ms??=new TextEncoder;let i=Ms.encode(n),t=1779033703,e=3144134277,r=1013904242,o=2773480762,a=1359893119,s=2600822924,l=528734635,d=1541459225,u=i.length*8,h=(i.length+8>>6)+1<<6,p=new Uint8Array(h);p.set(i),p[i.length]=128;let b=new DataView(p.buffer),S=u>>>0,D=u/4294967296>>>0;b.setUint32(h-8,D,!1),b.setUint32(h-4,S,!1);let E=/* @__PURE__ */ new Uint32Array(64);for(let x=0;x<h;x+=64){for(let G=0;G<16;G++)E[G]=b.getUint32(x+G*4,!1);for(let G=16;G<64;G++){let Mt=E[G-15],fe=((Mt>>>7|Mt<<25)^(Mt>>>18|Mt<<14)^Mt>>>3)>>>0,At=E[G-2],jr=((At>>>17|At<<15)^(At>>>19|At<<13)^At>>>10)>>>0;E[G]=E[G-16]+fe+E[G-7]+jr>>>0}let P=t,V=e,xt=r,vt=o,K=a,Ut=s,It=l,yt=d;for(let G=0;G<64;G++){let Mt=((K>>>6|K<<26)^(K>>>11|K<<21)^(K>>>25|K<<7))>>>0,fe=(K&Ut^~K&It)>>>0,At=yt+Mt+fe+au[G]+E[G]>>>0,zc=(((P>>>2|P<<30)^(P>>>13|P<<19)^(P>>>22|P<<10))>>>0)+((P&V^P&xt^V&xt)>>>0)>>>0;yt=It,It=Ut,Ut=K,K=vt+At>>>0,vt=xt,xt=V,V=P,P=At+zc>>>0}t=t+P>>>0,e=e+V>>>0,r=r+xt>>>0,o=o+vt>>>0,a=a+K>>>0,s=s+Ut>>>0,l=l+It>>>0,d=d+yt>>>0}return[t,e,r,o,a,s,l,d].map(x=>x.toString(16).padStart(8,`0`)).join(``)}var _o=(()=>{let n=Ui(`json`);return n.arrayBuffer=Ui(`arraybuffer`),n.blob=Ui(`blob`),n.text=Ui(`text`),n})();function Ui(n){return function(t,e){let r=e?.injector??v(se),o=r.get(ji,null,{optional:!0}),a=r.get(Zt$2,null,{optional:!0}),s=r.get(As,null,{optional:!0}),l=d=>{if(o&&a&&d){let u=Ns(d,o,a,s);if(u)try{let h=u.body,p=e?.parse?e.parse(h):h;return Et$1({value:p})}catch{}}};return new yo(r,d=>lu(d,t,n),e?.defaultValue,e?.debugName,e?.parse,e?.equal,l)}}function lu(n,i,t){let e=typeof i==`function`?i(n):i;if(e===void 0)return;typeof e==`string`&&(e={url:e});let r=e.headers instanceof St?e.headers:new St(e.headers),o=e.params instanceof lt?e.params:new lt({fromObject:e.params});return new Se$1(e.method??`GET`,e.url,e.body??null,{headers:r,params:o,reportDownloadProgress:e.reportProgress,withCredentials:e.withCredentials,keepalive:e.keepalive,cache:e.cache,priority:e.priority,mode:e.mode,redirect:e.redirect,responseType:t,context:e.context,transferCache:e.transferCache,credentials:e.credentials,referrer:e.referrer,referrerPolicy:e.referrerPolicy,integrity:e.integrity,timeout:e.timeout})}var yo=class extends Wl$1{client;_headers=Ul$1({source:this.extRequest,computation:()=>{}});_progress=Ul$1({source:this.extRequest,computation:()=>{}});_statusCode=Ul$1({source:this.extRequest,computation:()=>{}});headers=it(()=>this.status()===`resolved`||this.status()===`error`?this._headers():void 0);progress=this._progress.asReadonly();statusCode=this._statusCode.asReadonly();constructor(i,t,e,r,o,a,s){super(t,({params:l,abortSignal:d})=>{let u,h=!1,p=()=>{h=!0,u?.unsubscribe()};d.addEventListener(`abort`,p,{once:!0});let b=Et$1({value:void 0}),S,D=new Promise(x=>S=x),E=x=>{b.set(x),S?.(b),S=void 0};return u=this.client.request(l).subscribe({next:x=>{switch(x.type){case Zt$1.Response:this._headers.set(x.headers),this._statusCode.set(x.status);try{E({value:o?o(x.body):x.body})}catch(P){E({error:ql$1(P)})}break;case Zt$1.DownloadProgress:this._progress.set(x)}},error:x=>{x instanceof de&&(this._headers.set(x.headers),this._statusCode.set(x.status)),E({error:x}),d.removeEventListener(`abort`,p)},complete:()=>{S&&E({error:new w$1(-991,!1)}),d.removeEventListener(`abort`,p)}}),h&&u.unsubscribe(),D},e,a,r,i,void 0,s),this.client=i.get(Ce$1)}set(i){super.set(i),this._headers.set(void 0),this._progress.set(void 0),this._statusCode.set(void 0)}};var Ps=(()=>{class n{_doc;constructor(t){this._doc=t}getTitle(){return this._doc.title}setTitle(t){this._doc.title=t||``}static ɵfac=function(e){return new(e||n)(Pe$1(mt))};static ɵprov=ae({token:n,factory:n.ɵfac,providedIn:`root`})}return n})();var zi=(function(n){return n[n.NoHttpTransferCache=0]=`NoHttpTransferCache`,n[n.HttpTransferCacheOptions=1]=`HttpTransferCacheOptions`,n[n.I18nSupport=2]=`I18nSupport`,n[n.EventReplay=3]=`EventReplay`,n[n.IncrementalHydration=4]=`IncrementalHydration`,n[n.NoIncrementalHydration=5]=`NoIncrementalHydration`,n})(zi||{});function Ub(...n){let i=[],t=/* @__PURE__ */ new Set;for(let{ɵproviders:r,ɵkind:o}of n)t.add(o),r.length&&i.push(r);let e=t.has(zi.HttpTransferCacheOptions);return Dr$1([[],[],wj(),t.has(zi.NoHttpTransferCache)||e?[]:ks({}),t.has(zi.NoIncrementalHydration)?[]:Cj(),i,{provide:Rm$1,useValue:{isActive:!0}},{provide:eo,multi:!0,useFactory:()=>{let r=v(wt),o=v(Rm$1);return()=>{r.whenStable().then(()=>{o.isActive=!1})}}}])}var Mn$1=(()=>{class n{static ɵfac=function(e){return new(e||n)};static ɵprov=ae({token:n,factory:function(e){let r=null;return e?r=new(e||n):r=Pe$1(uu),r},providedIn:`root`})}return n})();var uu=(()=>{class n extends Mn$1{_doc=v(mt);sanitize(t,e){if(e==null)return null;switch(t){case J$1.NONE:return e;case J$1.HTML:return Jc(e,`HTML`)?Dt$1(e):wI(this._doc,String(e)).toString();case J$1.STYLE:return Jc(e,`Style`)?Dt$1(e):e;case J$1.SCRIPT:if(Jc(e,`Script`))return Dt$1(e);throw new w$1(5200,!1);case J$1.URL:return Jc(e,`URL`)?Dt$1(e):Xc$1(String(e));case J$1.RESOURCE_URL:if(Jc(e,`ResourceURL`))return Dt$1(e);throw new w$1(-5201,!1);default:throw new w$1(5202,!1)}}bypassSecurityTrustHtml(t){return eI(t)}bypassSecurityTrustStyle(t){return tI(t)}bypassSecurityTrustScript(t){return nI(t)}bypassSecurityTrustUrl(t){return rI(t)}bypassSecurityTrustResourceUrl(t){return oI(t)}static ɵfac=function(e){return new(e||n)};static ɵprov=$r({token:n,factory:n.ɵfac})}return n})();var w=`primary`;var Hn=Symbol(`RouteTitle`);var Ro=class{params;constructor(i){this.params=i||{}}has(i){return Object.hasOwn(this.params,i)}get(i){if(this.has(i)){let t=this.params[i];return Array.isArray(t)?t[0]:t}return null}getAll(i){if(this.has(i)){let t=this.params[i];return Array.isArray(t)?t:[t]}return[]}get keys(){return Object.keys(this.params)}};function Ee(n){return new Ro(n)}function wo(n,i,t){for(let e=0;e<n.length;e++){let r=n[e],o=i[e];if(r[0]===`:`)t[r.substring(1)]=o;else if(r!==o.path)return!1}return!0}function Ws(n,i,t){let e=t.path.split(`/`),r=e.indexOf(`**`);if(r===-1){if(e.length>n.length||t.pathMatch===`full`&&(i.hasChildren()||e.length<n.length))return null;let l={},d=n.slice(0,e.length);return wo(e,d,l)?{consumed:d,posParams:l}:null}if(r!==e.lastIndexOf(`**`))return null;let o=e.slice(0,r),a=e.slice(r+1);if(o.length+a.length>n.length||t.pathMatch===`full`&&i.hasChildren()&&t.path!==`**`)return null;let s={};return!wo(o,n.slice(0,o.length),s)||!wo(a,n.slice(n.length-a.length),s)?null:{consumed:n,posParams:s}}function Yi(n){return new Promise((i,t)=>{n.pipe(ev()).subscribe({next:e=>i(e),error:e=>t(e)})})}function pu(n,i){if(n.length!==i.length)return!1;for(let t=0;t<n.length;++t)if(!Ht$1(n[t],i[t]))return!1;return!0}function Ht$1(n,i){let t=n?xo(n):void 0,e=i?xo(i):void 0;if(!t||!e||t.length!=e.length)return!1;let r;for(let o=0;o<t.length;o++)if(r=t[o],!Gs(n[r],i[r]))return!1;return!0}function xo(n){return[...Object.keys(n),...Object.getOwnPropertySymbols(n)]}function Gs(n,i){if(Array.isArray(n)&&Array.isArray(i)){if(n.length!==i.length)return!1;let t=[...n].sort(),e=[...i].sort();return t.every((r,o)=>e[o]===r)}else return n===i}function fu(n){return n.length>0?n[n.length-1]:null}function $n(n){return Ry(n)?n:Nl$1(n)?Re$1(Promise.resolve(n)):Ay(n)}function Ys(n){return Ry(n)?Yi(n):Promise.resolve(n)}var gu={exact:Ks,subset:Zs};var Xs={exact:bu,subset:vu,ignored:()=>!0};var qs={paths:`exact`,fragment:`ignored`,matrixParams:`ignored`,queryParams:`exact`};var Xi={paths:`subset`,fragment:`ignored`,matrixParams:`ignored`,queryParams:`subset`};function Io(n,i,t){let e=z$1(z$1({},Xi),t||{});return gu[e.paths](n.root,i.root,e.matrixParams)&&Xs[e.queryParams](n.queryParams,i.queryParams)&&!(e.fragment===`exact`&&n.fragment!==i.fragment)}function bu(n,i){return Ht$1(n,i)}function Ks(n,i,t){if(!De$1(n.segments,i.segments)||!$i(n.segments,i.segments,t)||n.numberOfChildren!==i.numberOfChildren)return!1;for(let e in i.children)if(!n.children[e]||!Ks(n.children[e],i.children[e],t))return!1;return!0}function vu(n,i){return Object.keys(i).length<=Object.keys(n).length&&Object.keys(i).every(t=>Gs(n[t],i[t]))}function Zs(n,i,t){return Js(n,i,i.segments,t)}function Js(n,i,t,e){if(n.segments.length>t.length){let r=n.segments.slice(0,t.length);return!(!De$1(r,t)||i.hasChildren()||!$i(r,t,e))}else if(n.segments.length===t.length){if(!De$1(n.segments,t)||!$i(n.segments,t,e))return!1;for(let r in i.children)if(!n.children[r]||!Zs(n.children[r],i.children[r],e))return!1;return!0}else{let r=t.slice(0,n.segments.length),o=t.slice(n.segments.length);return!De$1(n.segments,r)||!$i(n.segments,r,e)||!n.children[w]?!1:Js(n.children[w],i,o,e)}}function $i(n,i,t){return i.every((e,r)=>Xs[t](n[r].parameters,e.parameters))}var gt=class{root;queryParams;fragment;_queryParamMap;constructor(i=new k([],{}),t={},e=null){this.root=i,this.queryParams=t,this.fragment=e}get queryParamMap(){return this._queryParamMap??=Ee(this.queryParams),this._queryParamMap}toString(){return Su.serialize(this)}};var k=class{segments;children;parent=null;constructor(i,t){this.segments=i,this.children=t,Object.values(t).forEach(e=>e.parent=this)}hasChildren(){return this.numberOfChildren>0}get numberOfChildren(){return Object.keys(this.children).length}toString(){return Wi(this)}};var ue=class{path;parameters;_parameterMap;constructor(i,t){this.path=i,this.parameters=t}get parameterMap(){return this._parameterMap??=Ee(this.parameters),this._parameterMap}toString(){return tl(this)}};function yu(n,i){return De$1(n,i)&&n.every((t,e)=>Ht$1(t.parameters,i[e].parameters))}function De$1(n,i){return n.length!==i.length?!1:n.every((t,e)=>t.path===i[e].path)}function _u(n,i){let t=[];return Object.entries(n.children).forEach(([e,r])=>{e===w&&(t=t.concat(i(r,e)))}),Object.entries(n.children).forEach(([e,r])=>{e!==w&&(t=t.concat(i(r,e)))}),t}var sn$1=(()=>{class n{static ɵfac=function(e){return new(e||n)};static ɵprov=$r({token:n,factory:()=>new he})}return n})();var he=class{parse(i){let t=new Ao(i);return new gt(t.parseRootSegment(),t.parseQueryParams(),t.parseFragment())}serialize(i){let t=`/${Je(i.root,!0)}`;wu(t)&&(t=`/`);let e=Ru(i.queryParams),r=typeof i.fragment==`string`?`#${Du(i.fragment)}`:``;return`${t}${e}${r}`}};var Ls=`http://fake`;function wu(n){try{let i=new URL(n,Ls);return i.origin!==Ls||i.pathname.startsWith(`//`)}catch{return!0}}var Su=new he;function Wi(n){return n.segments.map(i=>tl(i)).join(`/`)}function Je(n,i){if(!n.hasChildren())return Wi(n);if(i){let t=n.children[w]?Je(n.children[w],!1):``,e=[];return Object.entries(n.children).forEach(([r,o])=>{r!==w&&e.push(`${r}:${Je(o,!1)}`)}),e.length>0?`${t}(${e.join(`//`)})`:t}else{if(Object.keys(n.children).length===1&&n.children[w]!=null)return`${Wi(n)}/${Je(n.children[w],!1)}`;let t=_u(n,(e,r)=>r===w?[Cu(Je(n.children[w],!1))]:[`${r}:${Je(e,!1)}`]);return`${Wi(n)}/(${t.join(`//`)})`}}function Cu(n){return n.replace(el,i=>i.replace(/:/g,`%3A`))}function Qs(n){return encodeURIComponent(n).replace(/%40/g,`@`).replace(/%3A/gi,`:`).replace(/%24/g,`$`).replace(/%2C/gi,`,`)}function Vi(n){return Qs(n).replace(/%3B/gi,`;`)}function Du(n){return encodeURI(n)}function Mo(n){return Qs(n).replace(/\(/g,`%28`).replace(/\)/g,`%29`).replace(/%26/gi,`&`)}function Gi(n){return decodeURIComponent(n)}function Bs(n){return Gi(n.replace(/\+/g,`%20`))}function tl(n){return`${Mo(n.path)}${Eu(n.parameters)}`}function Eu(n){return Object.entries(n).map(([i,t])=>`;${Mo(i)}=${Mo(t)}`).join(``)}function Ru(n){let i=Object.entries(n).map(([t,e])=>Array.isArray(e)?e.map(r=>`${Vi(t)}=${Vi(r)}`).join(`&`):`${Vi(t)}=${Vi(e)}`).filter(t=>t);return i.length?`?${i.join(`&`)}`:``}var So=1073741824;function qi(n,i,t){Number(i)>=32&&!Object.hasOwn(n,So)&&(n[So]=t,delete n[So]),n[i]=t}var el=/^[^\/()?;#]+/;function Co(n){let i=n.match(el);return i?i[0]:``}var xu=/^[^\/()?;=#]+/;function Iu(n){let i=n.match(xu);return i?i[0]:``}var Mu=/^[^=?&#]+/;function Au(n){let i=n.match(Mu);return i?i[0]:``}var Tu=/^[^&#]+/;function Nu(n){let i=n.match(Tu);return i?i[0]:``}var Ao=class{url;remaining;constructor(i){this.url=i,this.remaining=i}parseRootSegment(){for(;this.consumeOptional(`/`););return this.remaining===``||this.peekStartsWith(`?`)||this.peekStartsWith(`#`)?new k([],{}):new k([],this.parseChildren())}parseQueryParams(){let i={};if(this.consumeOptional(`?`))do this.parseQueryParam(i);while(this.consumeOptional(`&`));return i}parseFragment(){return this.consumeOptional(`#`)?decodeURIComponent(this.remaining):null}parseChildren(i=0){if(i>50)throw new w$1(4010,!1);if(this.remaining===``)return{};this.consumeOptional(`/`);let t=[];for(this.peekStartsWith(`(`)||t.push(this.parseSegment());this.peekStartsWith(`/`)&&!this.peekStartsWith(`//`)&&!this.peekStartsWith(`/(`);)this.capture(`/`),t.push(this.parseSegment());let e={};this.peekStartsWith(`/(`)&&(this.capture(`/`),e=this.parseParens(!0,i));let r={};return this.peekStartsWith(`(`)&&(r=this.parseParens(!1,i)),(t.length>0||Object.keys(e).length>0)&&(r[w]=new k(t,e)),r}parseSegment(){let i=Co(this.remaining);if(i===``&&this.peekStartsWith(`;`))throw new w$1(4009,!1);return this.capture(i),new ue(Gi(i),this.parseMatrixParams())}parseMatrixParams(){let i={};for(;this.consumeOptional(`;`);)this.parseParam(i);return i}parseParam(i){let t=Iu(this.remaining);if(!t)return;this.capture(t);let e=``;if(this.consumeOptional(`=`)){let r=Co(this.remaining);r&&(e=r,this.capture(e))}qi(i,Gi(t),Gi(e))}parseQueryParam(i){let t=Au(this.remaining);if(!t)return;this.capture(t);let e=``;if(this.consumeOptional(`=`)){let a=Nu(this.remaining);a&&(e=a,this.capture(e))}let r=Bs(t),o=Bs(e);if(Object.hasOwn(i,r)){let a=i[r];Array.isArray(a)||(a=[a],i[r]=a),a.push(o)}else i[r]=o}parseParens(i,t){let e=Object.create(null);for(this.capture(`(`);!this.consumeOptional(`)`)&&this.remaining.length>0;){let r=Co(this.remaining),o=this.remaining[r.length];if(o!==`/`&&o!==`)`&&o!==`;`)throw new w$1(4010,!1);let a;r.indexOf(`:`)>-1?(a=r.slice(0,r.indexOf(`:`)),this.capture(a),this.capture(`:`)):i&&(a=w);let s=this.parseChildren(t+1),l=Object.keys(s).length===1&&s[w]?s[w]:new k([],s);qi(e,a??w,l),this.consumeOptional(`//`)}return e}peekStartsWith(i){return this.remaining.startsWith(i)}consumeOptional(i){return this.peekStartsWith(i)?(this.remaining=this.remaining.substring(i.length),!0):!1}capture(i){if(!this.consumeOptional(i))throw new w$1(4011,!1)}};function nl(n){return n.segments.length>0?new k([],{[w]:n}):n}function il(n){let i=Object.create(null);for(let[e,r]of Object.entries(n.children)){let o=il(r);if(e===w&&o.segments.length===0&&o.hasChildren())for(let[a,s]of Object.entries(o.children))qi(i,a,s);else(o.segments.length>0||o.hasChildren())&&qi(i,e,o)}return Ou(new k(n.segments,i))}function Ou(n){if(n.numberOfChildren===1&&n.children[w]){let i=n.children[w];return new k(n.segments.concat(i.segments),i.children)}return n}function me(n){return n instanceof gt}function rl(n,i,t=null,e=null,r=new he){return al(ol(n),i,t,e,r)}function ol(n){let i;function t(o){let a={};for(let l of o.children){let d=t(l);a[l.outlet]=d}let s=new k(o.url,a);return o===n&&(i=s),s}let r=nl(t(n.root));return i??r}function al(n,i,t,e,r){let o=n;for(;o.parent;)o=o.parent;if(i.length===0)return Do(o,o,o,t,e,r);let a=ku(i);if(a.toRoot())return Do(o,o,new k([],{}),t,e,r);let s=Pu(a,o,n),l=s.processChildren?Tn$1(s.segmentGroup,s.index,a.commands):ll(s.segmentGroup,s.index,a.commands);return Do(o,s.segmentGroup,l,t,e,r)}function Ki(n){return typeof n==`object`&&n!=null&&!n.outlets&&!n.segmentPath}function Pn(n){return typeof n==`object`&&n!=null&&n.outlets}function Us(n,i,t){n||=`ɵ`;let e=new gt;return e.queryParams={[n]:i},t.parse(t.serialize(e)).queryParams[n]}function Do(n,i,t,e,r,o){let a={};for(let[d,u]of Object.entries(e??{}))u!=null&&(a[d]=Array.isArray(u)?u.map(h=>Us(d,h,o)):Us(d,u,o));let s;n===i?s=t:s=sl(n,i,t);return new gt(nl(il(s)),a,r)}function sl(n,i,t){let e=Object.create(null);return Object.entries(n.children).forEach(([r,o])=>{o===i?e[r]=t:e[r]=sl(o,i,t)}),new k(n.segments,e)}var Zi=class{isAbsolute;numberOfDoubleDots;commands;constructor(i,t,e){if(this.isAbsolute=i,this.numberOfDoubleDots=t,this.commands=e,i&&e.length>0&&Ki(e[0]))throw new w$1(4003,!1);let r=e.find(Pn);if(r&&r!==fu(e))throw new w$1(4004,!1)}toRoot(){return this.isAbsolute&&this.commands.length===1&&this.commands[0]==`/`}};function ku(n){if(typeof n[0]==`string`&&n.length===1&&n[0]===`/`)return new Zi(!0,0,n);let i=0,t=!1,e=n.reduce((r,o,a)=>{if(typeof o==`object`&&o!=null){if(o.outlets){let s={};return Object.entries(o.outlets).forEach(([l,d])=>{s[l]=typeof d==`string`?d.split(`/`):d}),[...r,{outlets:s}]}if(o.segmentPath)return[...r,o.segmentPath]}return typeof o!=`string`?[...r,o]:a===0?(o.split(`/`).forEach((s,l)=>{l==0&&s===`.`||(l==0&&s===``?t=!0:s===`..`?i++:s!=``&&r.push(s))}),r):[...r,o]},[]);return new Zi(t,i,e)}var tn$1=class{segmentGroup;processChildren;index;constructor(i,t,e){this.segmentGroup=i,this.processChildren=t,this.index=e}};function Pu(n,i,t){if(n.isAbsolute)return new tn$1(i,!0,0);if(!t)return new tn$1(i,!1,NaN);if(t.parent===null)return new tn$1(t,!0,0);let e=Ki(n.commands[0])?0:1;return Fu(t,t.segments.length-1+e,n.numberOfDoubleDots)}function Fu(n,i,t){let e=n,r=i,o=t;for(;o>r;){if(o-=r,e=e.parent,!e)throw new w$1(4005,!1);r=e.segments.length}return new tn$1(e,!1,r-o)}function Lu(n){return Pn(n[0])?n[0].outlets:{[w]:n}}function ll(n,i,t){if(n??=new k([],{}),n.segments.length===0&&n.hasChildren())return Tn$1(n,i,t);let e=Bu(n,i,t),r=t.slice(e.commandIndex);if(e.match&&e.pathIndex<n.segments.length){let o=new k(n.segments.slice(0,e.pathIndex),{});return o.children[w]=new k(n.segments.slice(e.pathIndex),n.children),Tn$1(o,0,r)}else return e.match&&r.length===0?new k(n.segments,{}):e.match&&!n.hasChildren()?To(n,i,t):e.match?Tn$1(n,0,r):To(n,i,t)}function Tn$1(n,i,t){if(t.length===0)return new k(n.segments,{});{let e=Lu(t),r=Object.create(null);if(Object.keys(e).some(o=>o!==w)&&n.children[w]&&n.numberOfChildren===1&&n.children[w].segments.length===0){let o=Tn$1(n.children[w],i,t);return new k(n.segments,o.children)}return Object.entries(e).forEach(([o,a])=>{typeof a==`string`&&(a=[a]),a!==null&&(r[o]=ll(n.children[o],i,a))}),Object.entries(n.children).forEach(([o,a])=>{e[o]===void 0&&(r[o]=a)}),new k(n.segments,r)}}function Bu(n,i,t){let e=0,r=i,o={match:!1,pathIndex:0,commandIndex:0};for(;r<n.segments.length;){if(e>=t.length)return o;let a=n.segments[r],s=t[e];if(Pn(s))break;let l=`${s}`,d=e<t.length-1?t[e+1]:null;if(r>0&&l===void 0)break;if(l&&d&&typeof d==`object`&&d.outlets===void 0){if(!zs(l,d,a))return o;e+=2}else{if(!zs(l,{},a))return o;e++}r++}return{match:!0,pathIndex:r,commandIndex:e}}function To(n,i,t){let e=n.segments.slice(0,i),r=0;for(;r<t.length;){let o=t[r];if(Pn(o))return new k(e,Uu(o.outlets));if(r===0&&Ki(t[0])){let l=n.segments[i];e.push(new ue(l.path,js(t[0]))),r++;continue}let a=Pn(o)?o.outlets[w]:`${o}`,s=r<t.length-1?t[r+1]:null;a&&s&&Ki(s)?(e.push(new ue(a,js(s))),r+=2):(e.push(new ue(a,{})),r++)}return new k(e,{})}function Uu(n){let i={};return Object.entries(n).forEach(([t,e])=>{typeof e==`string`&&(e=[e]),e!==null&&(i[t]=To(new k([],{}),0,e))}),i}function js(n){let i={};return Object.entries(n).forEach(([t,e])=>i[t]=`${e}`),i}function zs(n,i,t){return n==t.path&&Ht$1(i,t.parameters)}var Ji=class{rootInjector;outlet=null;route=null;children;attachRef=null;get injector(){return this.route?.snapshot._environmentInjector??this.rootInjector}constructor(i){this.rootInjector=i,this.children=new Re(this.rootInjector)}resetChildren(){this.children=new Re(this.rootInjector)}};var Re=(()=>{class n{rootInjector;contexts=/* @__PURE__ */ new Map;constructor(t){this.rootInjector=t}onChildOutletCreated(t,e){let r=this.getOrCreateContext(t);r.outlet=e,this.contexts.set(t,r)}onChildOutletDestroyed(t){let e=this.getContext(t);e&&(e.outlet=null,e.attachRef=null)}onOutletDeactivated(){let t=this.contexts;return this.contexts=/* @__PURE__ */ new Map,t}onOutletReAttached(t){this.contexts=t}getOrCreateContext(t){let e=this.getContext(t);return e||(e=new Ji(this.rootInjector),this.contexts.set(t,e)),e}getContext(t){return this.contexts.get(t)||null}static ɵfac=function(e){return new(e||n)(Pe$1(Ee$1))};static ɵprov=ae({token:n,factory:n.ɵfac,providedIn:`root`})}return n})();var Qi=class{_root;constructor(i){this._root=i}get root(){return this._root.value}parent(i){let t=this.pathFromRoot(i);return t.length>1?t[t.length-2]:null}children(i){let t=No(i,this._root);return t?t.children.map(e=>e.value):[]}firstChild(i){let t=No(i,this._root);return t&&t.children.length>0?t.children[0].value:null}siblings(i){let t=Oo(i,this._root);return t.length<2?[]:t[t.length-2].children.map(r=>r.value).filter(r=>r!==i)}pathFromRoot(i){return Oo(i,this._root).map(t=>t.value)}};function No(n,i){if(n===i.value)return i;for(let t of i.children){let e=No(n,t);if(e)return e}return null}function Oo(n,i){if(n===i.value)return[i];for(let t of i.children){let e=Oo(n,t);if(e.length)return e.unshift(i),e}return[]}var at=class{value;children;constructor(i,t){this.value=i,this.children=t}toString(){return`TreeNode(${this.value})`}};function Qe(n){let i={};return n&&n.children.forEach(t=>i[t.value.outlet]=t),i}var Fn=class extends Qi{snapshot;constructor(i,t){super(i),this.snapshot=t,Ho(this,i)}toString(){return this.snapshot.toString()}};function cl(n,i){let t=ju(n,i),e=new Kn$1([new ue(``,{})]),r=new Kn$1({}),o=new Kn$1({}),l=new Jt(e,r,new Kn$1({}),new Kn$1(``),o,w,n,t.root);return l.snapshot=t.root,new Fn(new at(l,[]),t)}function ju(n,i){return new Ln(``,new at(new nn$1([],{},{},``,{},w,n,null,{},i),[]))}var Jt=class{urlSubject;paramsSubject;queryParamsSubject;fragmentSubject;dataSubject;outlet;component;snapshot;_futureSnapshot;_routerState;_paramMap;_queryParamMap;title;url;params;queryParams;fragment;data;resources;_localInjector;pending;paramsSignal;queryParamsSignal;paramMapSignal;queryParamMapSignal;fragmentSignal;dataSignal;constructor(i,t,e,r,o,a,s,l){this.urlSubject=i,this.paramsSubject=t,this.queryParamsSubject=e,this.fragmentSubject=r,this.dataSubject=o,this.outlet=a,this.component=s,this._futureSnapshot=l,this.title=this.dataSubject?.pipe(Ue(d=>d[Hn]))??Ay(void 0),this.url=i,this.params=t,this.queryParams=e,this.fragment=r,this.data=o}get routeConfig(){return this._futureSnapshot.routeConfig}get root(){return this._routerState.root}get parent(){return this._routerState.parent(this)}get firstChild(){return this._routerState.firstChild(this)}get children(){return this._routerState.children(this)}get pathFromRoot(){return this._routerState.pathFromRoot(this)}get paramMap(){return this._paramMap??=this.params.pipe(Ue(i=>Ee(i))),this._paramMap}get queryParamMap(){return this._queryParamMap??=this.queryParams.pipe(Ue(i=>Ee(i))),this._queryParamMap}toString(){return this.snapshot?this.snapshot.toString():`Future(${this._futureSnapshot})`}_setPending(i){this._futureSnapshot=i,this.pending?.set(!0)}};var zu=`always`;function Vo(n,i,t){let e,{routeConfig:r}=n;return i!==null&&(t===`always`||r?.path===``||!i.component&&!i.routeConfig?.loadComponent)?e={params:Object.keys(n.params).length===0?i.params:Object.freeze(z$1(z$1({},i.params),n.params)),data:Object.freeze(z$1(z$1({},i.data),n.data)),resolve:z$1(z$1(z$1(z$1({},n.data),i.data),r?.data),n._resolvedData)}:e={params:Object.freeze(z$1({},n.params)),data:Object.freeze(z$1({},n.data)),resolve:z$1(z$1({},n.data),n._resolvedData??{})},r&&ul(r)&&(e.resolve[Hn]=r.title),e}var nn$1=class{url;params;queryParams;fragment;data;outlet;component;routeConfig;_resolve;_resolvedData;_routerState;_paramMap;_queryParamMap;_environmentInjector;resources;get title(){return this.data?.[Hn]}constructor(i,t,e,r,o,a,s,l,d,u){this.url=i,this.params=t,this.queryParams=e,this.fragment=r,this.data=o,this.outlet=a,this.component=s,this.routeConfig=l,this._resolve=d,this._environmentInjector=u}get root(){return this._routerState.root}get parent(){return this._routerState.parent(this)}get firstChild(){return this._routerState.firstChild(this)}get children(){return this._routerState.children(this)}get pathFromRoot(){return this._routerState.pathFromRoot(this)}get paramMap(){return this._paramMap??=Ee(this.params),this._paramMap}get queryParamMap(){return this._queryParamMap??=Ee(this.queryParams),this._queryParamMap}toString(){return`Route(url:'${this.url.map(e=>e.toString()).join(`/`)}', path:'${this.routeConfig?this.routeConfig.path:``}')`}};var Ln=class extends Qi{url;constructor(i,t){super(t),this.url=i,Ho(this,t)}toString(){return dl(this._root)}};function Ho(n,i){i.value._routerState=n,i.children.forEach(t=>Ho(n,t))}function dl(n){let i=n.children.length>0?` { ${n.children.map(dl).join(`, `)} } `:``;return`${n.value}${i}`}function Eo(n){if(n.snapshot){let i=n.snapshot,t=n._futureSnapshot;n.snapshot=t,Ht$1(i.queryParams,t.queryParams)||n.queryParamsSubject.next(t.queryParams),i.fragment!==t.fragment&&n.fragmentSubject.next(t.fragment),Ht$1(i.params,t.params)||n.paramsSubject.next(t.params),pu(i.url,t.url)||n.urlSubject.next(t.url),Ht$1(i.data,t.data)||n.dataSubject.next(t.data)}else n.snapshot=n._futureSnapshot,n.dataSubject.next(n._futureSnapshot.data)}function ko(n,i){let t=Ht$1(n.params,i.params)&&yu(n.url,i.url),e=!n.parent!=!i.parent;return t&&!e&&(!n.parent||ko(n.parent,i.parent))}function ul(n){return typeof n.title==`string`||n.title===null}var hl=new S(``);var $o=(()=>{class n{activated=null;get activatedComponentRef(){return this.activated}_activatedRoute=null;name=w;activateEvents=new Qe$1;deactivateEvents=new Qe$1;attachEvents=new Qe$1;detachEvents=new Qe$1;routerOutletData=Ij();parentContexts=v(Re);location=v(is$1);changeDetector=v(_j);inputBinder=v(hr,{optional:!0});supportsBindingToComponentInputs=!0;ngOnChanges(t){if(t.name){let{firstChange:e,previousValue:r}=t.name;if(e)return;this.isTrackedInParentContexts(r)&&(this.deactivate(),this.parentContexts.onChildOutletDestroyed(r)),this.initializeOutletWithName()}}ngOnDestroy(){this.isTrackedInParentContexts(this.name)&&this.parentContexts.onChildOutletDestroyed(this.name),this.inputBinder?.unsubscribeFromRouteData(this)}isTrackedInParentContexts(t){return this.parentContexts.getContext(t)?.outlet===this}ngOnInit(){this.initializeOutletWithName()}initializeOutletWithName(){if(this.parentContexts.onChildOutletCreated(this.name,this),this.activated)return;let t=this.parentContexts.getContext(this.name);t?.route&&(t.attachRef?this.attach(t.attachRef,t.route):this.activateWith(t.route,t.injector))}get isActivated(){return!!this.activated}get component(){if(!this.activated)throw new w$1(4012,!1);return this.activated.instance}get activatedRoute(){if(!this.activated)throw new w$1(4012,!1);return this._activatedRoute}get activatedRouteData(){return this._activatedRoute?this._activatedRoute.snapshot.data:{}}detach(){if(!this.activated)throw new w$1(4012,!1);this.location.detach();let t=this.activated;return this.activated=null,this._activatedRoute=null,this.detachEvents.emit(t.instance),t}attach(t,e){this.activated=t,this._activatedRoute=e,this.location.insert(t.hostView),this.inputBinder?.bindActivatedRouteToOutletComponent(this,this.location.injector),this.attachEvents.emit(t.instance)}deactivate(){if(this.activated){let t=this.component;this.inputBinder?.unsubscribeFromRouteData(this),this.activated.destroy(),this.activated=null,this._activatedRoute=null,this.deactivateEvents.emit(t)}}activateWith(t,e){if(this.isActivated)throw new w$1(4013,!1);this._activatedRoute=t;let r=this.location,a=t.snapshot.component,s=this.parentContexts.getOrCreateContext(this.name).children,l=new Po(t,s,r.injector,this.routerOutletData);this.activated=r.createComponent(a,{index:r.length,injector:l,environmentInjector:e}),this.changeDetector.markForCheck(),this.inputBinder?.bindActivatedRouteToOutletComponent(this,this.location.injector),this.activateEvents.emit(this.activated.instance)}static ɵfac=function(e){return new(e||n)};static ɵdir=fw({type:n,selectors:[[`router-outlet`]],inputs:{name:`name`,routerOutletData:[1,`routerOutletData`]},outputs:{activateEvents:`activate`,deactivateEvents:`deactivate`,attachEvents:`attach`,detachEvents:`detach`},exportAs:[`outlet`],features:[hE]})}return n})();var Po=class{route;childContexts;parent;outletData;constructor(i,t,e,r){this.route=i,this.childContexts=t,this.parent=e,this.outletData=r}get(i,t){return i===Jt?this.route:i===Re?this.childContexts:i===hl?this.outletData:this.parent.get(i,t)}};var hr=new S(``);var Wo=(()=>{class n{static ɵfac=function(e){return new(e||n)};static ɵcmp=aw({type:n,selectors:[[`ng-component`]],exportAs:[`emptyRouterOutlet`],decls:1,vars:0,template:function(e,r){e&1&&Qg(0,`router-outlet`)},dependencies:[$o],encapsulation:2,changeDetection:1})}return n})();function Go(n){let i=n.children&&n.children.map(Go),t=i?Q$1(z$1({},n),{children:i}):z$1({},n);return!t.component&&!t.loadComponent&&(i||t.loadChildren)&&t.outlet&&t.outlet!==w&&(t.component=Wo),t}var Nn=`imperative`;var q=(function(n){return n[n.NavigationStart=0]=`NavigationStart`,n[n.NavigationEnd=1]=`NavigationEnd`,n[n.NavigationCancel=2]=`NavigationCancel`,n[n.NavigationError=3]=`NavigationError`,n[n.RoutesRecognized=4]=`RoutesRecognized`,n[n.ResolveStart=5]=`ResolveStart`,n[n.ResolveEnd=6]=`ResolveEnd`,n[n.GuardsCheckStart=7]=`GuardsCheckStart`,n[n.GuardsCheckEnd=8]=`GuardsCheckEnd`,n[n.RouteConfigLoadStart=9]=`RouteConfigLoadStart`,n[n.RouteConfigLoadEnd=10]=`RouteConfigLoadEnd`,n[n.ChildActivationStart=11]=`ChildActivationStart`,n[n.ChildActivationEnd=12]=`ChildActivationEnd`,n[n.ActivationStart=13]=`ActivationStart`,n[n.ActivationEnd=14]=`ActivationEnd`,n[n.Scroll=15]=`Scroll`,n[n.NavigationSkipped=16]=`NavigationSkipped`,n})(q||{});var bt=class{id;url;constructor(i,t){this.id=i,this.url=t}};var xe=class extends bt{type=q.NavigationStart;navigationTrigger;restoredState;constructor(i,t,e=`imperative`,r=null){super(i,t),this.navigationTrigger=e,this.restoredState=r}toString(){return`NavigationStart(id: ${this.id}, url: '${this.url}')`}};var Lt$1=class extends bt{urlAfterRedirects;type=q.NavigationEnd;constructor(i,t,e){super(i,t),this.urlAfterRedirects=e}toString(){return`NavigationEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}')`}};var Q=(function(n){return n[n.Redirect=0]=`Redirect`,n[n.SupersededByNewNavigation=1]=`SupersededByNewNavigation`,n[n.NoDataFromResolver=2]=`NoDataFromResolver`,n[n.GuardRejected=3]=`GuardRejected`,n[n.Aborted=4]=`Aborted`,n})(Q||{});var Bn=(function(n){return n[n.IgnoredSameUrlNavigation=0]=`IgnoredSameUrlNavigation`,n[n.IgnoredByUrlHandlingStrategy=1]=`IgnoredByUrlHandlingStrategy`,n})(Bn||{});var Ct=class extends bt{reason;code;type=q.NavigationCancel;constructor(i,t,e,r){super(i,t),this.reason=e,this.code=r}toString(){return`NavigationCancel(id: ${this.id}, url: '${this.url}')`}};function ml(n){return n instanceof Ct&&(n.code===Q.Redirect||n.code===Q.SupersededByNewNavigation)}var Qt$1=class extends bt{reason;code;type=q.NavigationSkipped;constructor(i,t,e,r){super(i,t),this.reason=e,this.code=r}};var Ie$1=class extends bt{error;target;type=q.NavigationError;constructor(i,t,e,r){super(i,t),this.error=e,this.target=r}toString(){return`NavigationError(id: ${this.id}, url: '${this.url}', error: ${this.error})`}};var Un=class extends bt{urlAfterRedirects;state;type=q.RoutesRecognized;constructor(i,t,e,r){super(i,t),this.urlAfterRedirects=e,this.state=r}toString(){return`RoutesRecognized(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}};var tr=class extends bt{urlAfterRedirects;state;type=q.GuardsCheckStart;constructor(i,t,e,r){super(i,t),this.urlAfterRedirects=e,this.state=r}toString(){return`GuardsCheckStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}};var er=class extends bt{urlAfterRedirects;state;shouldActivate;type=q.GuardsCheckEnd;constructor(i,t,e,r,o){super(i,t),this.urlAfterRedirects=e,this.state=r,this.shouldActivate=o}toString(){return`GuardsCheckEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state}, shouldActivate: ${this.shouldActivate})`}};var nr=class extends bt{urlAfterRedirects;state;type=q.ResolveStart;constructor(i,t,e,r){super(i,t),this.urlAfterRedirects=e,this.state=r}toString(){return`ResolveStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}};var ir=class extends bt{urlAfterRedirects;state;type=q.ResolveEnd;constructor(i,t,e,r){super(i,t),this.urlAfterRedirects=e,this.state=r}toString(){return`ResolveEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}};var rr=class{route;type=q.RouteConfigLoadStart;constructor(i){this.route=i}toString(){return`RouteConfigLoadStart(path: ${this.route.path})`}};var or=class{route;type=q.RouteConfigLoadEnd;constructor(i){this.route=i}toString(){return`RouteConfigLoadEnd(path: ${this.route.path})`}};var ar=class{snapshot;type=q.ChildActivationStart;constructor(i){this.snapshot=i}toString(){return`ChildActivationStart(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||``}')`}};var sr=class{snapshot;type=q.ChildActivationEnd;constructor(i){this.snapshot=i}toString(){return`ChildActivationEnd(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||``}')`}};var lr=class{snapshot;type=q.ActivationStart;constructor(i){this.snapshot=i}toString(){return`ActivationStart(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||``}')`}};var cr=class{snapshot;type=q.ActivationEnd;constructor(i){this.snapshot=i}toString(){return`ActivationEnd(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||``}')`}};var rn$1=class{};var jn=class{};var on$1=class{url;navigationBehaviorOptions;constructor(i,t){this.url=i,this.navigationBehaviorOptions=t}};function Vu(n){return!(n instanceof rn$1)&&!(n instanceof on$1)&&!(n instanceof jn)}function Hu(n,i,t){let e=/* @__PURE__ */ new Set;return{newlyCreatedRoutes:e,state:new Fn(zn(n,i._root,t?t._root:void 0,e),i)}}function zn(n,i,t,e){if(t&&n.shouldReuseRoute(i.value,t.value.snapshot)){let r=t.value;r._setPending(i.value);return new at(r,$u(n,i,t,e))}else{if(n.shouldAttach(i.value)){let a=n.retrieve(i.value);if(a!==null){let s=a.route;return s.value._setPending(i.value),s.children=i.children.map(l=>zn(n,l,void 0,e)),s}}let r=Wu(i.value);r._setPending(i.value),e.add(r);return new at(r,i.children.map(a=>zn(n,a,void 0,e)))}}function $u(n,i,t,e){return i.children.map(r=>{for(let o of t.children)if(n.shouldReuseRoute(r.value,o.value.snapshot))return zn(n,r,o,e);return zn(n,r,void 0,e)})}function Wu(n){return new Jt(new Kn$1(n.url),new Kn$1(n.params),new Kn$1(n.queryParams),new Kn$1(n.fragment),new Kn$1(n.data),n.outlet,n.component,n)}var pe=class n extends Error{redirectTo;navigationBehaviorOptions;constructor(i,t){super(),this.redirectTo=i,this.navigationBehaviorOptions=t,Object.setPrototypeOf(this,n.prototype)}};var pl=`ngNavigationCancelingError`;function On(n,i){let{redirectTo:t,navigationBehaviorOptions:e}=me(i)?{redirectTo:i,navigationBehaviorOptions:void 0}:i,r=fl(!1,Q.Redirect);return r.url=t,r.navigationBehaviorOptions=e,r}function fl(n,i){let t=/* @__PURE__ */ new Error(`NavigationCancelingError: ${n||``}`);return t[pl]=!0,t.cancellationCode=i,t}function Gu(n){return gl(n)&&me(n.url)}function gl(n){return!!n&&n[pl]}var Fo=class{routeReuseStrategy;futureState;currState;forwardEvent;inputBindingEnabled;constructor(i,t,e,r,o){this.routeReuseStrategy=i,this.futureState=t,this.currState=e,this.forwardEvent=r,this.inputBindingEnabled=o}activate(i){let t=this.futureState._root,e=this.currState?this.currState._root:null;this.deactivateChildRoutes(t,e,i),Eo(this.futureState.root),this.activateChildRoutes(t,e,i)}deactivateChildRoutes(i,t,e){let r=Qe(t);i.children.forEach(o=>{let a=o.value.outlet;this.deactivateRoutes(o,r[a],e),delete r[a]}),Object.values(r).forEach(o=>{this.deactivateRouteAndItsChildren(o,e)})}deactivateRoutes(i,t,e){let r=i.value,o=t?t.value:null;if(r===o)if(r.component){let a=e.getContext(r.outlet);a&&this.deactivateChildRoutes(i,t,a.children)}else this.deactivateChildRoutes(i,t,e);else o&&this.deactivateRouteAndItsChildren(t,e)}deactivateRouteAndItsChildren(i,t){i.value.component&&this.routeReuseStrategy.shouldDetach(i.value.snapshot)?this.detachAndStoreRouteSubtree(i,t):this.deactivateRouteAndOutlet(i,t)}detachAndStoreRouteSubtree(i,t){let e=t.getContext(i.value.outlet),r=e&&i.value.component?e.children:t,o=Qe(i);for(let a of Object.values(o))this.deactivateRouteAndItsChildren(a,r);if(e&&e.outlet){let a=e.outlet.detach(),s=e.children.contexts;e.resetChildren(),this.routeReuseStrategy.store(i.value.snapshot,{componentRef:a,route:i,contexts:s})}}deactivateRouteAndOutlet(i,t){let e=t.getContext(i.value.outlet),r=e&&i.value.component?e.children:t,o=Qe(i);for(let a of Object.values(o))this.deactivateRouteAndItsChildren(a,r);e&&(e.outlet&&(e.outlet.deactivate(),e.children.onOutletDeactivated()),e.attachRef=null,e.route=null),i.value._localInjector?.destroy()}activateChildRoutes(i,t,e){let r=Qe(t);i.children.forEach(o=>{this.activateRoutes(o,r[o.value.outlet],e),this.forwardEvent(new cr(o.value.snapshot))}),i.children.length&&this.forwardEvent(new sr(i.value.snapshot))}activateRoutes(i,t,e){let r=i.value,o=t?t.value:null;if(Eo(r),r===o)if(r.component){let a=e.getOrCreateContext(r.outlet);this.activateChildRoutes(i,t,a.children)}else this.activateChildRoutes(i,t,e);else if(r.component){let a=e.getOrCreateContext(r.outlet);if(this.routeReuseStrategy.shouldAttach(r.snapshot)){let s=this.routeReuseStrategy.retrieve(r.snapshot);this.routeReuseStrategy.store(r.snapshot,null),a.children.onOutletReAttached(s.contexts),a.attachRef=s.componentRef,a.route=s.route.value,a.outlet&&a.outlet.attach(s.componentRef,s.route.value),Eo(s.route.value),this.activateChildRoutes(i,null,a.children)}else a.attachRef=null,a.route=r,a.outlet&&a.outlet.activateWith(r,a.injector),this.activateChildRoutes(i,null,a.children)}else this.activateChildRoutes(i,null,e)}};var dr=class{path;route;constructor(i){this.path=i,this.route=this.path[this.path.length-1]}};var en$1=class{component;route;constructor(i,t){this.component=i,this.route=t}};function Yu(n,i,t){let e=n._root;return An(e,i?i._root:null,t,[e.value])}function Xu(n){let i=n.routeConfig?n.routeConfig.canActivateChild:null;return!i||i.length===0?null:{node:n,guards:i}}function ln(n,i){let t=Symbol(),e=i.get(n,t);return e===t?typeof n==`function`&&!mv(n)?n:i.get(n):e}function An(n,i,t,e,r={canDeactivateChecks:[],canActivateChecks:[]}){let o=Qe(i);return n.children.forEach(a=>{qu(a,o[a.value.outlet],t,e.concat([a.value]),r),delete o[a.value.outlet]}),Object.entries(o).forEach(([a,s])=>kn$1(s,t.getContext(a),t,r)),r}function qu(n,i,t,e,r={canDeactivateChecks:[],canActivateChecks:[]}){let o=n.value,a=i?i.value:null,s=t?t.getContext(n.value.outlet):null;if(a&&o.routeConfig===a.routeConfig){let l=Ku(a,o,o.routeConfig.runGuardsAndResolvers);l?r.canActivateChecks.push(new dr(e)):(o.data=a.data,o._resolvedData=a._resolvedData),o.component?An(n,i,s?s.children:null,e,r):An(n,i,t,e,r),l&&s&&s.outlet&&s.outlet.isActivated&&r.canDeactivateChecks.push(new en$1(s.outlet.component,a))}else a&&kn$1(i,s,t,r),r.canActivateChecks.push(new dr(e)),o.component?An(n,null,s?s.children:null,e,r):An(n,null,t,e,r);return r}function Ku(n,i,t){if(typeof t==`function`)return Yo$1(i._environmentInjector,()=>t(n,i));switch(t){case`pathParamsChange`:return!De$1(n.url,i.url);case`pathParamsOrQueryParamsChange`:return!De$1(n.url,i.url)||!Ht$1(n.queryParams,i.queryParams);case`always`:return!0;case`paramsOrQueryParamsChange`:return!ko(n,i)||!Ht$1(n.queryParams,i.queryParams);default:return!ko(n,i)}}function kn$1(n,i,t,e){let r=Qe(n),o=n.value;Object.entries(r).forEach(([a,s])=>{o.component?i?kn$1(s,i.children.getContext(a),i.children,e):kn$1(s,null,null,e):kn$1(s,t?t.getContext(a):null,t,e)}),o.component?i&&i.outlet&&i.outlet.isActivated?e.canDeactivateChecks.push(new en$1(i.outlet.component,o)):e.canDeactivateChecks.push(new en$1(null,o)):e.canDeactivateChecks.push(new en$1(null,o))}function Wn(n){return typeof n==`function`}function Zu(n){return typeof n==`boolean`}function Ju(n){return n&&Wn(n.canLoad)}function Qu(n){return n&&Wn(n.canActivate)}function th(n){return n&&Wn(n.canActivateChild)}function eh(n){return n&&Wn(n.canDeactivate)}function nh(n){return n&&Wn(n.canMatch)}function bl(n){return n instanceof bt$1||n?.name===`EmptyError`}var Hi=Symbol(`INITIAL_VALUE`);function an$1(){return sv(n=>By(n.map(i=>i.pipe(gn$2(1),ku$1(t=>{if(t instanceof pe)return Ay(t);throw t}),iv(Hi)))).pipe(Ue(i=>{for(let t of i)if(t!==!0){if(t===Hi)return Hi;if(t===!1||ih(t))return t}return!0}),rr$1(i=>i!==Hi),gn$2(1)))}function ih(n){return me(n)||n instanceof pe}function vl(n){return new x(i=>{if(n.aborted){i.next(),i.complete();return}let t=()=>{i.next(),i.complete()};return n.addEventListener(`abort`,t),()=>n.removeEventListener(`abort`,t)})}function yl(n){return av(vl(n))}function rh(n){return $e(i=>{let{targetSnapshot:t,currentSnapshot:e,guards:{canActivateChecks:r,canDeactivateChecks:o}}=i;return o.length===0&&r.length===0?Ay(Q$1(z$1({},i),{guardsResult:!0})):oh(o,t,e).pipe($e(a=>a&&Zu(a)?ah(t,r,n):Ay(a)),Ue(a=>Q$1(z$1({},i),{guardsResult:a})))})}function oh(n,i,t){return Re$1(n).pipe($e(e=>uh(e.component,e.route,t,i)),ev(e=>e!==!0,!0))}function ah(n,i,t){return Re$1(i).pipe(zy(e=>hn$2(lh(e.route.parent,t),sh(e.route,t),dh(n,e.path),ch(n,e.route))),ev(e=>e!==!0,!0))}function sh(n,i){return n!==null&&i&&i(new lr(n)),Ay(!0)}function lh(n,i){return n!==null&&i&&i(new ar(n)),Ay(!0)}function ch(n,i){let t=i.routeConfig?i.routeConfig.canActivate:null;if(!t||t.length===0)return Ay(!0);let e=t.map(r=>$y(()=>{let o=i._environmentInjector,a=ln(r,o);return $n(Qu(a)?a.canActivate(i,n):Yo$1(o,()=>a(i,n))).pipe(ev())}));return Ay(e).pipe(an$1())}function dh(n,i){let t=i[i.length-1],r=i.slice(0,i.length-1).reverse().map(o=>Xu(o)).filter(o=>o!==null).map(o=>$y(()=>{let a=o.guards.map(s=>{let l=o.node._environmentInjector,d=ln(s,l);return $n(th(d)?d.canActivateChild(t,n):Yo$1(l,()=>d(t,n))).pipe(ev())});return Ay(a).pipe(an$1())}));return Ay(r).pipe(an$1())}function uh(n,i,t,e){let r=i&&i.routeConfig?i.routeConfig.canDeactivate:null;if(!r||r.length===0)return Ay(!0);let o=r.map(a=>{let s=i._environmentInjector,l=ln(a,s);return Yo(()=>eh(l)?l.canDeactivate(n,i,t,e):Yo$1(s,()=>l(n,i,t,e))).pipe(ev())});return Ay(o).pipe(an$1())}function hh(n,i,t,e,r){let o=i.canLoad;if(o===void 0||o.length===0)return Ay(!0);let a=o.map(s=>{let l=ln(s,n),d=Yo(()=>Ju(l)?l.canLoad(i,t):Yo$1(n,()=>l(i,t)));return r?d.pipe(yl(r)):d});return Ay(a).pipe(an$1(),_l(e))}function Yo(n){try{return $n(n())}catch(i){return new x(t=>t.error(i))}}function _l(n){return Iy(ju$1(i=>{if(typeof i!=`boolean`)throw On(n,i)}),Ue(i=>i===!0))}function mh(n,i,t,e,r,o){let a=i.canMatch;if(!a||a.length===0)return Ay(!0);let s=a.map(l=>{let d=ln(l,n);return Yo(()=>nh(d)?d.canMatch(i,t,r):Yo$1(n,()=>d(i,t,r))).pipe(yl(o))});return Ay(s).pipe(an$1(),_l(e))}var Vt$1=class n extends Error{name=`NoMatch`;segmentGroup;constructor(i){super(),this.segmentGroup=i||null,Object.setPrototypeOf(this,n.prototype)}};var Vn=class n extends Error{urlTree;name=`AbsoluteRedirect`;constructor(i){super(),this.urlTree=i,Object.setPrototypeOf(this,n.prototype)}};function ph(n){throw new w$1(4e3,!1)}function fh(n){throw fl(!1,Q.GuardRejected)}var Lo=class{urlSerializer;urlTree;constructor(i,t){this.urlSerializer=i,this.urlTree=t}async lineralizeSegments(i,t){let e=[],r=t.root;for(;;){if(e=e.concat(r.segments),r.numberOfChildren===0)return e;if(r.numberOfChildren>1||!r.children[w])throw ph(`${i.redirectTo}`);r=r.children[w]}}async applyRedirectCommands(i,t,e,r,o){let a=await gh(t,r,o);if(a instanceof gt)throw new Vn(a);let s=this.applyRedirectCreateUrlTree(a,this.urlSerializer.parse(a),i,e);if(a[0]===`/`)throw new Vn(s);return s}applyRedirectCreateUrlTree(i,t,e,r){return new gt(this.createSegmentGroup(i,t.root,e,r),this.createQueryParams(t.queryParams,this.urlTree.queryParams),t.fragment)}createQueryParams(i,t){let e={};return Object.entries(i).forEach(([r,o])=>{if(typeof o==`string`&&o[0]===`:`){let s=o.substring(1);e[r]=t[s]}else e[r]=o}),e}createSegmentGroup(i,t,e,r){let o=this.createSegments(i,t.segments,e,r),a=Object.create(null);return Object.entries(t.children).forEach(([s,l])=>{a[s]=this.createSegmentGroup(i,l,e,r)}),new k(o,a)}createSegments(i,t,e,r){return t.map(o=>o.path[0]===`:`?this.findPosParam(i,o,r):this.findOrReturn(o,e))}findPosParam(i,t,e){let r=e[t.path.substring(1)];if(!r)throw new w$1(4001,!1);return r}findOrReturn(i,t){let e=0;for(let r of t){if(r.path===i.path)return t.splice(e),r;e++}return i}};function gh(n,i,t){if(typeof n==`string`)return Promise.resolve(n);let e=n;return Yi($n(Yo$1(t,()=>e(i))))}function bh(n,i){return n.providers&&!n._injector&&(n._injector=Sl$1(n.providers,i,`Route: ${n.path}`)),n._injector??i}function $t$1(n){return n.outlet||w}function vh(n,i){let t=n.filter(e=>$t$1(e)===i);return t.push(...n.filter(e=>$t$1(e)!==i)),t}var Bo={matched:!1,consumedSegments:[],remainingSegments:[],parameters:{},positionalParamSegments:{}};function wl(n){return{routeConfig:n.routeConfig,url:n.url,params:n.params,queryParams:n.queryParams,fragment:n.fragment,data:n.data,outlet:n.outlet,title:n.title,paramMap:n.paramMap,queryParamMap:n.queryParamMap}}function yh(n,i,t,e,r,o,a){let s=Sl(n,i,t);if(!s.matched)return Ay(s);let l=wl(o(s));return e=bh(i,e),mh(e,i,t,r,l,a).pipe(Ue(d=>d===!0?s:z$1({},Bo)))}function Sl(n,i,t){if(i.path===``)return i.pathMatch===`full`&&(n.hasChildren()||t.length>0)?z$1({},Bo):{matched:!0,consumedSegments:[],remainingSegments:t,parameters:{},positionalParamSegments:{}};let r=(i.matcher||Ws)(t,n,i);if(!r)return z$1({},Bo);let o={};Object.entries(r.posParams??{}).forEach(([s,l])=>{o[s]=l.path});let a=r.consumed.length>0?z$1(z$1({},o),r.consumed[r.consumed.length-1].parameters):o;return{matched:!0,consumedSegments:r.consumed,remainingSegments:t.slice(r.consumed.length),parameters:a,positionalParamSegments:r.posParams??{}}}function Vs(n,i,t,e){return t.length>0&&Sh(n,t,e)?{segmentGroup:new k(i,wh(e,new k(t,n.children))),slicedSegments:[]}:t.length===0&&Ch(n,t,e)?{segmentGroup:new k(n.segments,_h(n,t,e,n.children)),slicedSegments:t}:{segmentGroup:new k(n.segments,n.children),slicedSegments:t}}function _h(n,i,t,e){let r={};for(let o of t)if(mr(n,i,o)&&!e[$t$1(o)]){let a=new k([],{});r[$t$1(o)]=a}return z$1(z$1({},e),r)}function wh(n,i){let t={};t[w]=i;for(let e of n)if(e.path===``&&$t$1(e)!==w){let r=new k([],{});t[$t$1(e)]=r}return t}function Sh(n,i,t){return t.some(e=>mr(n,i,e)&&$t$1(e)!==w)}function Ch(n,i,t){return t.some(e=>mr(n,i,e))}function mr(n,i,t){return(n.hasChildren()||i.length>0)&&t.pathMatch===`full`?!1:t.path===``}function Dh(n,i,t){return i.length===0&&!n.hasChildren()}var Uo=class{};async function Eh(n,i,t,e,r,o,a,s){return new jo(n,i,t,e,r,a,o,s).recognize()}var Rh=31;var jo=class{injector;configLoader;rootComponentType;config;urlTree;paramsInheritanceStrategy;urlSerializer;abortSignal;applyRedirects;absoluteRedirectCount=0;allowRedirects=!0;queryParams;constructor(i,t,e,r,o,a,s,l){this.injector=i,this.configLoader=t,this.rootComponentType=e,this.config=r,this.urlTree=o,this.paramsInheritanceStrategy=a,this.urlSerializer=s,this.abortSignal=l,this.applyRedirects=new Lo(this.urlSerializer,this.urlTree),this.queryParams=Object.freeze(z$1({},this.urlTree.queryParams))}noMatchError(i){return new w$1(4002,`'${i.segmentGroup}'`)}async recognize(){let i=Vs(this.urlTree.root,[],[],this.config).segmentGroup,{children:t,rootSnapshot:e}=await this.match(i),o=new Ln(``,new at(e,t)),a=rl(e,[],this.urlTree.queryParams,this.urlTree.fragment);return a.queryParams=this.urlTree.queryParams,o.url=this.urlSerializer.serialize(a),{state:o,tree:a}}async match(i){let t=new nn$1([],Object.freeze({}),this.queryParams,this.urlTree.fragment,Object.freeze({}),w,this.rootComponentType,null,{},this.injector);try{return{children:await this.processSegmentGroup(this.injector,this.config,i,w,t),rootSnapshot:t}}catch(e){if(e instanceof Vn)return this.absoluteRedirectCount++,this.absoluteRedirectCount>Rh&&(this.allowRedirects=!1),this.urlTree=e.urlTree,this.queryParams=Object.freeze(z$1({},this.urlTree.queryParams)),this.match(e.urlTree.root);throw e instanceof Vt$1?this.noMatchError(e):e}}async processSegmentGroup(i,t,e,r,o){if(e.segments.length===0&&e.hasChildren())return this.processChildren(i,t,e,o);let a=await this.processSegment(i,t,e,e.segments,r,!0,o);return a instanceof at?[a]:[]}async processChildren(i,t,e,r){let o=[];for(let l of Object.keys(e.children))l===`primary`?o.unshift(l):o.push(l);let a=[];for(let l of o){let d=e.children[l],u=vh(t,l),h=await this.processSegment(i,u,d,d.segments,l,!0,r);h instanceof at&&a.push(h)}let s=Cl(a);return xh(s),s}async processSegment(i,t,e,r,o,a,s){for(let l of t)try{return await this.processSegmentAgainstRoute(l._injector??i,t,l,e,r,o,a,s)}catch(d){if(d instanceof Vt$1||bl(d))continue;throw d}if(Dh(e,r))return new Uo;throw new Vt$1(e)}async processSegmentAgainstRoute(i,t,e,r,o,a,s,l){if($t$1(e)!==a&&(a===w||!mr(r,o,e)||!e.children?.length&&!e.loadChildren||o.length===0&&!r.hasChildren()))throw new Vt$1(r);if(e.redirectTo===void 0)return this.matchSegmentAgainstRoute(i,r,e,o,a,l);if(this.allowRedirects&&s)return this.expandSegmentAgainstRouteUsingRedirect(i,r,t,e,o,a,l);throw new Vt$1(r)}async expandSegmentAgainstRouteUsingRedirect(i,t,e,r,o,a,s){let{matched:l,parameters:d,consumedSegments:u,positionalParamSegments:h,remainingSegments:p}=Sl(t,r,o);if(!l)throw new Vt$1(t);let b=this.createSnapshot(i,r,o,d,s);if(this.abortSignal.aborted)throw new Error(this.abortSignal.reason);let S=await this.applyRedirects.applyRedirectCommands(u,r.redirectTo,h,wl(b),i),D=await this.applyRedirects.lineralizeSegments(r,S);return this.processSegment(i,e,t,D.concat(p),a,!1,s)}createSnapshot(i,t,e,r,o){let a=new nn$1(e,r,this.queryParams,this.urlTree.fragment,Ah(t),$t$1(t),t.component??t._loadedComponent??null,t,Th(t),i),s=Vo(a,o,this.paramsInheritanceStrategy);return a.params=s.params,a.data=s.data,a}async matchSegmentAgainstRoute(i,t,e,r,o,a){if(this.abortSignal.aborted)throw new Error(this.abortSignal.reason);let s=V=>this.createSnapshot(i,e,V.consumedSegments,V.parameters,a),l=await Yi(yh(t,e,r,i,this.urlSerializer,s,this.abortSignal));if(e.path===`**`&&(t.children={}),!l?.matched)throw new Vt$1(t);i=e._injector??i;let{routes:d}=await this.getChildConfig(i,e,r),u=e._loadedInjector??i,{parameters:h,consumedSegments:p,remainingSegments:b}=l,S=this.createSnapshot(i,e,p,h,a),D=$t$1(e)===o,{segmentGroup:E,slicedSegments:x}=D?Vs(t,p,b,d):{segmentGroup:t,slicedSegments:b};if(D&&x.length===0&&E.hasChildren())return new at(S,await this.processChildren(u,d,E,S));if(D&&d.length===0&&x.length===0)return new at(S,[]);let P=await this.processSegment(u,d,E,x,D?w:o,!0,S);if(!D&&!(P instanceof at))throw new Vt$1(t);return new at(S,P instanceof at?[P]:[])}async getChildConfig(i,t,e){if(t.children)return{routes:t.children,injector:i};if(t.loadChildren){if(t._loadedRoutes!==void 0){let o=t._loadedNgModuleFactory;return o&&!t._loadedInjector&&(t._loadedInjector=o.create(i).injector),{routes:t._loadedRoutes,injector:t._loadedInjector}}if(this.abortSignal.aborted)throw new Error(this.abortSignal.reason);if(await Yi(hh(i,t,e,this.urlSerializer,this.abortSignal))){let o=await this.configLoader.loadChildren(i,t);return t._loadedRoutes=o.routes,t._loadedInjector=o.injector,t._loadedNgModuleFactory=o.factory,o}throw fh(t)}return{routes:[],injector:i}}};function xh(n){n.sort((i,t)=>i.value.outlet===w?-1:t.value.outlet===w?1:i.value.outlet.localeCompare(t.value.outlet))}function Ih(n){let i=n.value.routeConfig;return i&&i.path===``}function Cl(n){let i=[],t=/* @__PURE__ */ new Set;for(let r of n){if(!Ih(r)){i.push(r);continue}let o=i.find(a=>r.value.routeConfig===a.value.routeConfig);o!==void 0?(o.children.push(...r.children),t.add(o)):i.push(r)}for(let r of t){let o=Cl(r.children);i.push(new at(r.value,o))}let e=i.filter(r=>!t.has(r));return Mh(e),e}function Mh(n){let i=Object.create(null);n.forEach(t=>{let e=i[t.value.outlet];if(e){e.url.map(a=>a.toString()).join(`/`);t.value.url.map(a=>a.toString()).join(`/`);throw new w$1(4006,!1)}i[t.value.outlet]=t.value})}function Ah(n){return n.data||{}}function Th(n){return n.resolve||{}}function Nh(n,i,t,e,r,o,a){return $e(async s=>{let{state:l,tree:d}=await Eh(n,i,t,e,s.extractedUrl,r,o,a);return Q$1(z$1({},s),{targetSnapshot:l,urlAfterRedirects:d})})}function Oh(n){return $e(i=>{let{targetSnapshot:t,guards:{canActivateChecks:e}}=i;if(!e.length)return Ay(i);let r=new Set(e.map(s=>s.route)),o=/* @__PURE__ */ new Set;for(let s of r)if(!o.has(s))for(let l of Dl(s))o.add(l);let a=0;return Re$1(o).pipe(zy(s=>r.has(s)?kh(s,t,n):(s.data=Vo(s,s.parent,n).resolve,Ay(void 0))),ju$1(()=>a++),tv(1),$e(s=>a===o.size?Ay(i):At))})}function Dl(n){return[n,...n.children.map(t=>Dl(t)).flat()]}function kh(n,i,t){let e=n.routeConfig,r=n._resolve;return e?.title!==void 0&&!ul(e)&&(r[Hn]=e.title),$y(()=>(n.data=Vo(n,n.parent,t).resolve,Ph(r,n,i).pipe(Ue(o=>(n._resolvedData=o,n.data=z$1(z$1({},n.data),o),null)))))}function Ph(n,i,t){let e=xo(n);if(e.length===0)return Ay({});let r={};return Re$1(e).pipe($e(o=>Fh(n[o],i,t).pipe(ev(),ju$1(a=>{if(a instanceof pe)throw On(new he,a);r[o]=a}))),tv(1),Ue(()=>r),ku$1(o=>bl(o)?At:Oy(o)))}function Fh(n,i,t){let e=i._environmentInjector,r=ln(n,e);return $n(r.resolve?r.resolve(i,t):Yo$1(e,()=>r(i,t)))}var El=new S(``);function zo(n){return sv(i=>{let t=n(i);return t?Re$1(t).pipe(Ue(()=>i)):Ay(i)})}var Xo=(()=>{class n{buildTitle(t){let e,r=t.root;for(;r!==void 0;)e=this.getResolvedTitleForRoute(r)??e,r=r.children.find(o=>o.outlet===w);return e}getResolvedTitleForRoute(t){return t.data[Hn]}static ɵfac=function(e){return new(e||n)};static ɵprov=$r({token:n,factory:()=>v(Rl)})}return n})();var Rl=(()=>{class n extends Xo{title;constructor(t){super(),this.title=t}updateTitle(t){let e=this.buildTitle(t);e!==void 0&&this.title.setTitle(e)}static ɵfac=function(e){return new(e||n)(Pe$1(Ps))};static ɵprov=ae({token:n,factory:n.ɵfac,providedIn:`root`})}return n})();var cn=new S(``,{factory:()=>({})});var Gn=new S(``);var qo=(()=>{class n{componentLoaders=/* @__PURE__ */ new WeakMap;childrenLoaders=/* @__PURE__ */ new WeakMap;onLoadStartListener;onLoadEndListener;compiler=v(ub);async loadComponent(t,e){if(this.componentLoaders.get(e))return this.componentLoaders.get(e);if(e._loadedComponent)return Promise.resolve(e._loadedComponent);this.onLoadStartListener&&this.onLoadStartListener(e);let r=(async()=>{try{let o=await Ys(Yo$1(t,()=>e.loadComponent())),a=await Il(vj(o));return this.onLoadEndListener&&this.onLoadEndListener(e),e._loadedComponent=a,a}finally{this.componentLoaders.delete(e)}})();return this.componentLoaders.set(e,r),r}loadChildren(t,e){if(this.childrenLoaders.get(e))return this.childrenLoaders.get(e);if(e._loadedRoutes)return Promise.resolve({routes:e._loadedRoutes,injector:e._loadedInjector});this.onLoadStartListener&&this.onLoadStartListener(e);let r=(async()=>{try{let o=await xl(e,this.compiler,t,this.onLoadEndListener);return e._loadedRoutes=o.routes,e._loadedInjector=o.injector,e._loadedNgModuleFactory=o.factory,o}finally{this.childrenLoaders.delete(e)}})();return this.childrenLoaders.set(e,r),r}static ɵfac=function(e){return new(e||n)};static ɵprov=$r({token:n,factory:n.ɵfac})}return n})();async function xl(n,i,t,e){let r=await Ys(Yo$1(t,()=>n.loadChildren())),o=await Il(vj(r)),a;o instanceof Mg||Array.isArray(o)?a=o:a=await i.compileModuleAsync(o),e&&e(n);let s,l,u;return Array.isArray(a)?l=a:(s=a.create(t).injector,u=a,l=s.get(Gn,[],{optional:!0,self:!0}).flat()),{routes:l.map(Go),injector:s,factory:u}}async function Il(n){return n}var pr=(()=>{class n{static ɵfac=function(e){return new(e||n)};static ɵprov=$r({token:n,factory:()=>v(Lh)})}return n})();var Lh=(()=>{class n{shouldProcessUrl(t){return!0}extract(t){return t}merge(t,e){return t}static ɵfac=function(e){return new(e||n)};static ɵprov=$r({token:n,factory:n.ɵfac})}return n})();var Ml=new S(``);var Bh=()=>{};var Al=new S(``);var Tl=(()=>{class n{currentNavigation=Et$1(null,{equal:()=>!1});currentTransition=null;lastSuccessfulNavigation=Et$1(null);events=new ee$1;transitionAbortWithErrorSubject=new ee$1;configLoader=v(qo);environmentInjector=v(Ee$1);destroyRef=v(fe);urlSerializer=v(sn$1);rootContexts=v(Re);location=v(ce);inputBindingEnabled=v(hr,{optional:!0})!==null;titleStrategy=v(Xo);options=v(cn,{optional:!0})||{};paramsInheritanceStrategy=this.options.paramsInheritanceStrategy||zu;urlHandlingStrategy=v(pr);createViewTransition=v(Ml,{optional:!0});navigationErrorHandler=v(Al,{optional:!0});routerResourcesFeature=v(El,{optional:!0});navigationId=0;get hasRequestedNavigation(){return this.navigationId!==0}transitions;afterPreactivation=()=>Ay(void 0);rootComponentType=null;destroyed=!1;constructor(){let t=r=>this.events.next(new rr(r)),e=r=>this.events.next(new or(r));this.configLoader.onLoadEndListener=e,this.configLoader.onLoadStartListener=t,this.destroyRef.onDestroy(()=>{this.destroyed=!0})}complete(){this.transitions?.complete()}handleNavigationRequest(t){let e=++this.navigationId;le$1(()=>{this.transitions?.next(Q$1(z$1({},t),{extractedUrl:this.urlHandlingStrategy.extract(t.rawUrl),targetSnapshot:null,targetRouterState:null,guards:{canActivateChecks:[],canDeactivateChecks:[]},guardsResult:null,id:e,routesRecognizeHandler:{},beforeActivateHandler:{}}))})}setupNavigations(t){return this.transitions=new Kn$1(null),this.transitions.pipe(rr$1(e=>e!==null),sv(e=>{let r=!0,o=!1,a=new AbortController,s=()=>!o&&this.currentTransition?.id===e.id;return Ay(e).pipe(sv(l=>{if(this.navigationId>e.id)return this.cancelNavigationTransition(e,``,Q.SupersededByNewNavigation),At;this.currentTransition=e;let d=this.lastSuccessfulNavigation();this.currentNavigation.set({id:l.id,initialUrl:l.rawUrl,extractedUrl:l.extractedUrl,targetBrowserUrl:typeof l.extras.browserUrl==`string`?this.urlSerializer.parse(l.extras.browserUrl):l.extras.browserUrl,trigger:l.source,extras:l.extras,previousNavigation:d?Q$1(z$1({},d),{previousNavigation:null}):null,abort:()=>a.abort(),routesRecognizeHandler:l.routesRecognizeHandler,beforeActivateHandler:l.beforeActivateHandler});let u=!t.navigated||this.isUpdatingInternalState()||this.isUpdatedBrowserUrl(),h=l.extras.onSameUrlNavigation??t.onSameUrlNavigation;if(!u&&h!==`reload`)return this.events.next(new Qt$1(l.id,this.urlSerializer.serialize(l.rawUrl),``,Bn.IgnoredSameUrlNavigation)),l.resolve(!1),At;if(this.urlHandlingStrategy.shouldProcessUrl(l.rawUrl))return Ay(l).pipe(sv(p=>(this.events.next(new xe(p.id,this.urlSerializer.serialize(p.extractedUrl),p.source,p.restoredState)),p.id!==this.navigationId?At:Promise.resolve(p))),Nh(this.environmentInjector,this.configLoader,this.rootComponentType,t.config,this.urlSerializer,this.paramsInheritanceStrategy,a.signal),ju$1(p=>{e.targetSnapshot=p.targetSnapshot,e.urlAfterRedirects=p.urlAfterRedirects,this.currentNavigation.update(b=>(b.finalUrl=p.urlAfterRedirects,b)),this.events.next(new jn)}),sv(p=>Re$1(e.routesRecognizeHandler.deferredHandle??Ay(void 0)).pipe(Ue(()=>p))),ju$1(()=>{let p=new Un(l.id,this.urlSerializer.serialize(l.extractedUrl),this.urlSerializer.serialize(l.urlAfterRedirects),l.targetSnapshot);this.events.next(p)}));if(u&&this.urlHandlingStrategy.shouldProcessUrl(l.currentRawUrl)){let{id:p,extractedUrl:b,source:S,restoredState:D,extras:E}=l,x=new xe(p,this.urlSerializer.serialize(b),S,D);this.events.next(x);let P=cl(this.rootComponentType,this.environmentInjector).snapshot;return this.currentTransition=e=Q$1(z$1({},l),{targetSnapshot:P,urlAfterRedirects:b,extras:Q$1(z$1({},E),{skipLocationChange:!1,replaceUrl:!1})}),this.currentNavigation.update(V=>(V.finalUrl=b,V)),Ay(e)}else return this.events.next(new Qt$1(l.id,this.urlSerializer.serialize(l.extractedUrl),``,Bn.IgnoredByUrlHandlingStrategy)),l.resolve(!1),At}),Ue(l=>{let d=new tr(l.id,this.urlSerializer.serialize(l.extractedUrl),this.urlSerializer.serialize(l.urlAfterRedirects),l.targetSnapshot);return this.events.next(d),this.currentTransition=e=Q$1(z$1({},l),{guards:Yu(l.targetSnapshot,l.currentSnapshot,this.rootContexts)}),e}),rh(l=>this.events.next(l)),sv(l=>{if(e.guardsResult=l.guardsResult,l.guardsResult&&typeof l.guardsResult!=`boolean`)throw On(this.urlSerializer,l.guardsResult);let d=new er(l.id,this.urlSerializer.serialize(l.extractedUrl),this.urlSerializer.serialize(l.urlAfterRedirects),l.targetSnapshot,!!l.guardsResult);if(this.events.next(d),!s())return At;if(!l.guardsResult)return this.cancelNavigationTransition(l,``,Q.GuardRejected),At;if(l.guards.canActivateChecks.length===0)return Ay(l);let u=new nr(l.id,this.urlSerializer.serialize(l.extractedUrl),this.urlSerializer.serialize(l.urlAfterRedirects),l.targetSnapshot);if(this.events.next(u),!s())return At;let h=!1;return Ay(l).pipe(Oh(this.paramsInheritanceStrategy),ju$1({next:()=>{h=!0;let p=new ir(l.id,this.urlSerializer.serialize(l.extractedUrl),this.urlSerializer.serialize(l.urlAfterRedirects),l.targetSnapshot);this.events.next(p)},complete:()=>{h||this.cancelNavigationTransition(l,``,Q.NoDataFromResolver)}}))}),zo(l=>{let d=h=>{let p=[];if(h.routeConfig?._loadedComponent)h.component=h.routeConfig?._loadedComponent;else if(h.routeConfig?.loadComponent){let b=h._environmentInjector;p.push(this.configLoader.loadComponent(b,h.routeConfig).then(S=>{h.component=S}))}for(let b of h.children)p.push(...d(b));return p},u=d(l.targetSnapshot.root);return u.length===0?Ay(l):Re$1(Promise.all(u).then(()=>l))}),sv(l=>{let{newlyCreatedRoutes:d,state:u}=Hu(t.routeReuseStrategy,l.targetSnapshot,l.currentRouterState);return this.currentTransition=e=l=Q$1(z$1({},l),{targetRouterState:u,newlyCreatedRoutes:d}),this.currentNavigation.update(h=>(h.targetRouterState=u,h)),Ay(l)}),this.routerResourcesFeature?.setupAndRunResources(a.signal)??(l=>l),zo(()=>this.afterPreactivation()),sv(()=>{let{currentSnapshot:l,targetSnapshot:d}=e,u=this.createViewTransition?.(this.environmentInjector,l.root,d.root,e.hasUAVisualTransition);return u?Re$1(u).pipe(Ue(()=>e)):Ay(e)}),gn$2(1),sv(l=>{r=!1,this.events.next(new rn$1);let d=e.beforeActivateHandler.deferredHandle;return d?Re$1(d.then(()=>l)):Ay(l)}),ju$1(l=>{new Fo(t.routeReuseStrategy,e.targetRouterState,e.currentRouterState,d=>this.events.next(d),this.inputBindingEnabled).activate(this.rootContexts),l.newlyCreatedRoutes?.clear(),s()&&(Nl(l.targetRouterState),o=!0,this.currentNavigation.update(d=>(d.abort=Bh,d)),this.lastSuccessfulNavigation.set(le$1(this.currentNavigation)),this.events.next(new Lt$1(l.id,this.urlSerializer.serialize(l.extractedUrl),this.urlSerializer.serialize(l.urlAfterRedirects))),this.titleStrategy?.updateTitle(l.targetRouterState.snapshot),l.resolve(!0))}),av(vl(a.signal).pipe(rr$1(()=>!o&&r),ju$1(()=>{this.cancelNavigationTransition(e,a.signal.reason+``,Q.Aborted)}))),ju$1({complete:()=>{o=!0}}),av(this.transitionAbortWithErrorSubject.pipe(ju$1(l=>{throw l}))),Xy(()=>{a.abort(),o||this.cancelNavigationTransition(e,``,Q.SupersededByNewNavigation),this.currentTransition?.id===e.id&&(this.currentNavigation.set(null),this.currentTransition=null)}),ku$1(l=>{if(o=!0,Hs(e),this.destroyed)return e.resolve(!1),At;if(l instanceof pe&&(l=On(this.urlSerializer,l)),gl(l))this.events.next(new Ct(e.id,this.urlSerializer.serialize(e.extractedUrl),l.message,l.cancellationCode)),Gu(l)?this.events.next(new on$1(l.url,l.navigationBehaviorOptions)):e.resolve(!1);else{let d=new Ie$1(e.id,this.urlSerializer.serialize(e.extractedUrl),l,e.targetSnapshot??void 0);try{let u=Yo$1(this.environmentInjector,()=>this.navigationErrorHandler?.(d));if(u instanceof pe){let{message:h,cancellationCode:p}=On(this.urlSerializer,u);this.events.next(new Ct(e.id,this.urlSerializer.serialize(e.extractedUrl),h,p)),this.events.next(new on$1(u.redirectTo,u.navigationBehaviorOptions))}else throw this.events.next(d),l}catch(u){this.options.resolveNavigationPromiseOnError?e.resolve(!1):e.reject(u)}}return At}))}))}cancelNavigationTransition(t,e,r){Hs(t);let o=new Ct(t.id,this.urlSerializer.serialize(t.extractedUrl),e,r);this.events.next(o),t.resolve(!1)}isUpdatingInternalState(){return this.currentTransition?.extractedUrl.toString()!==this.currentTransition?.currentUrlTree.toString()}isUpdatedBrowserUrl(){let t=this.urlHandlingStrategy.extract(this.urlSerializer.parse(this.location.path(!0))),e=le$1(this.currentNavigation),r=e?.targetBrowserUrl??e?.extractedUrl;return t.toString()!==r?.toString()&&!e?.extras.skipLocationChange}static ɵfac=function(e){return new(e||n)};static ɵprov=$r({token:n,factory:n.ɵfac})}return n})();function Uh(n){return n!==Nn}function Hs(n){for(let i of n.newlyCreatedRoutes??[])i._localInjector?.destroy(),i._localInjector=void 0;Nl(n.targetRouterState)}function Nl(n){if(!n)return;let i=t=>{t.value.pending?.set(!1),t.children.forEach(i)};i(n._root)}var Ol=new S(``);var kl=(()=>{class n{static ɵfac=function(e){return new(e||n)};static ɵprov=$r({token:n,factory:()=>v(jh)})}return n})();var ur=class{shouldDetach(i){return!1}store(i,t){}shouldAttach(i){return!1}retrieve(i){return null}shouldReuseRoute(i,t){return i.routeConfig===t.routeConfig}shouldDestroyInjector(i){return!0}};var jh=(()=>{class n extends ur{static ɵfac=function(e){return new(e||n)};static ɵprov=$r({token:n,factory:n.ɵfac})}return n})();var fr=(()=>{class n{urlSerializer=v(sn$1);options=v(cn,{optional:!0})||{};canceledNavigationResolution=this.options.canceledNavigationResolution||`replace`;location=v(ce);urlHandlingStrategy=v(pr);urlUpdateStrategy=this.options.urlUpdateStrategy||`deferred`;currentUrlTree=new gt;getCurrentUrlTree(){return this.currentUrlTree}rawUrlTree=this.currentUrlTree;getRawUrlTree(){return this.rawUrlTree}createBrowserPath({finalUrl:t,initialUrl:e,targetBrowserUrl:r}){let o=t!==void 0?this.urlHandlingStrategy.merge(t,e):e,a=r??o;return a instanceof gt?this.urlSerializer.serialize(a):a}routerUrlState(t){return t?.targetBrowserUrl===void 0||t?.finalUrl===void 0?{}:{ɵrouterUrl:this.urlSerializer.serialize(t.finalUrl)}}commitTransition({targetRouterState:t,finalUrl:e,initialUrl:r}){e&&t?(this.currentUrlTree=e,this.rawUrlTree=this.urlHandlingStrategy.merge(e,r),this.routerState=t):this.rawUrlTree=r}routerState=cl(null,v(Ee$1));getRouterState(){return this.routerState}_stateMemento=this.createStateMemento();get stateMemento(){return this._stateMemento}updateStateMemento(){this._stateMemento=this.createStateMemento()}createStateMemento(){return{rawUrlTree:this.rawUrlTree,currentUrlTree:this.currentUrlTree,routerState:this.routerState}}restoredState(){return this.location.getState()}static ɵfac=function(e){return new(e||n)};static ɵprov=$r({token:n,factory:()=>v(zh)})}return n})();var zh=(()=>{class n extends fr{currentPageId=0;lastSuccessfulId=-1;get browserPageId(){return this.canceledNavigationResolution!==`computed`?this.currentPageId:this.restoredState()?.ɵrouterPageId??this.currentPageId}registerNonRouterCurrentEntryChangeListener(t){return this.location.subscribe(e=>{e.type===`popstate`&&setTimeout(()=>{t(e.url,e.state,`popstate`,{replaceUrl:!0},e.hasUAVisualTransition)})})}handleRouterEvent(t,e){t instanceof xe?this.updateStateMemento():t instanceof Qt$1?this.commitTransition(e):t instanceof Un?this.urlUpdateStrategy===`eager`&&(e.extras.skipLocationChange||this.setBrowserUrl(this.createBrowserPath(e),e)):t instanceof rn$1?(this.commitTransition(e),this.urlUpdateStrategy===`deferred`&&!e.extras.skipLocationChange&&this.setBrowserUrl(this.createBrowserPath(e),e)):t instanceof Ct?ml(t)?t.code===Q.Redirect&&this.routerState===e.targetRouterState&&this.resetInternalState(e):this.restoreHistory(e):t instanceof Ie$1?this.restoreHistory(e,!0):t instanceof Lt$1&&(this.lastSuccessfulId=t.id,this.currentPageId=this.browserPageId)}setBrowserUrl(t,e){let{extras:r,id:o}=e,{replaceUrl:a,state:s}=r;if(this.location.isCurrentPathEqualTo(t)||a){let l=this.browserPageId,d=z$1(z$1({},s),this.generateNgRouterState(o,l,e));this.location.replaceState(t,``,d)}else{let l=z$1(z$1({},s),this.generateNgRouterState(o,this.browserPageId+1,e));this.location.go(t,``,l)}}restoreHistory(t,e=!1){if(this.canceledNavigationResolution===`computed`){let r=this.browserPageId,o=this.currentPageId-r;o!==0?this.location.historyGo(o):this.getCurrentUrlTree()===t.finalUrl&&o===0&&(this.resetInternalState(t),this.resetUrlToCurrentUrlTree())}else this.canceledNavigationResolution===`replace`&&(e&&this.resetInternalState(t),this.resetUrlToCurrentUrlTree())}resetInternalState({finalUrl:t}){this.routerState=this.stateMemento.routerState,this.currentUrlTree=this.stateMemento.currentUrlTree,this.rawUrlTree=this.urlHandlingStrategy.merge(this.currentUrlTree,t??this.rawUrlTree)}resetUrlToCurrentUrlTree(){this.location.replaceState(this.urlSerializer.serialize(this.getRawUrlTree()),``,this.generateNgRouterState(this.lastSuccessfulId,this.currentPageId))}generateNgRouterState(t,e,r){return this.canceledNavigationResolution===`computed`?z$1({navigationId:t,ɵrouterPageId:e},this.routerUrlState(r)):z$1({navigationId:t},this.routerUrlState(r))}static ɵfac=function(e){return new(e||n)};static ɵprov=$r({token:n,factory:n.ɵfac})}return n})();function Ko(n,i){n.events.pipe(rr$1(t=>t instanceof Lt$1||t instanceof Ct||t instanceof Ie$1||t instanceof Qt$1),Ue(t=>t instanceof Lt$1||t instanceof Qt$1?0:(t instanceof Ct?t.code===Q.Redirect||t.code===Q.SupersededByNewNavigation:!1)?2:1),rr$1(t=>t!==2),gn$2(1)).subscribe(()=>{i()})}var Me=(()=>{class n{get currentUrlTree(){return this.stateManager.getCurrentUrlTree()}get rawUrlTree(){return this.stateManager.getRawUrlTree()}disposed=!1;nonRouterCurrentEntryChangeSubscription;console=v($w);stateManager=v(fr);options=v(cn,{optional:!0})||{};pendingTasks=v(yt);urlUpdateStrategy=this.options.urlUpdateStrategy||`deferred`;navigationTransitions=v(Tl);urlSerializer=v(sn$1);location=v(ce);urlHandlingStrategy=v(pr);injector=v(Ee$1);_events=new ee$1;get events(){return this._events}get routerState(){return this.stateManager.getRouterState()}navigated=!1;routeReuseStrategy=v(kl);injectorCleanup=v(Ol,{optional:!0});onSameUrlNavigation=this.options.onSameUrlNavigation||`ignore`;config=v(Gn,{optional:!0})?.flat()??[];componentInputBindingEnabled=!!v(hr,{optional:!0});currentNavigation=this.navigationTransitions.currentNavigation.asReadonly();constructor(){this.resetConfig(this.config),this.navigationTransitions.setupNavigations(this).subscribe({error:t=>{}}),this.subscribeToNavigationEvents()}eventsSubscription=new K;subscribeToNavigationEvents(){let t=this.navigationTransitions.events.subscribe(e=>{try{let r=this.navigationTransitions.currentTransition,o=le$1(this.navigationTransitions.currentNavigation);if(r!==null&&o!==null){if(this.stateManager.handleRouterEvent(e,o),e instanceof Ct&&e.code!==Q.Redirect&&e.code!==Q.SupersededByNewNavigation)this.navigated=!0;else if(e instanceof Lt$1)this.navigated=!0,this.injectorCleanup?.(this.routeReuseStrategy,this.routerState,this.config);else if(e instanceof on$1){let a=e.navigationBehaviorOptions,s=this.urlHandlingStrategy.merge(e.url,r.currentRawUrl),l=z$1({scroll:r.extras.scroll,browserUrl:r.extras.browserUrl,info:r.extras.info,skipLocationChange:r.extras.skipLocationChange,replaceUrl:r.extras.replaceUrl||this.urlUpdateStrategy===`eager`||Uh(r.source)},a);this.scheduleNavigation(s,Nn,null,l,r.hasUAVisualTransition,{resolve:r.resolve,reject:r.reject,promise:r.promise})}}Vu(e)&&this._events.next(e)}catch(r){this.navigationTransitions.transitionAbortWithErrorSubject.next(r)}});this.eventsSubscription.add(t)}resetRootComponentType(t){this.routerState.root.component=t,this.navigationTransitions.rootComponentType=t}initialNavigation(){this.setUpLocationChangeListener(),this.navigationTransitions.hasRequestedNavigation||this.navigateToSyncWithBrowser(this.location.path(!0),Nn,this.stateManager.restoredState(),{replaceUrl:!0})}setUpLocationChangeListener(){this.nonRouterCurrentEntryChangeSubscription??=this.stateManager.registerNonRouterCurrentEntryChangeListener((t,e,r,o,a)=>{this.navigateToSyncWithBrowser(t,r,e,o,a)})}navigateToSyncWithBrowser(t,e,r,o,a){let s=r?.navigationId?r:null,l=r?.ɵrouterUrl??t;if(r?.ɵrouterUrl&&(o=Q$1(z$1({},o),{browserUrl:t})),r){let u=z$1({},r);delete u.navigationId,delete u.ɵrouterPageId,delete u.ɵrouterUrl,Object.keys(u).length!==0&&(o.state=u)}let d=this.parseUrl(l);this.scheduleNavigation(d,e,s,o,a).catch(u=>{this.disposed||this.injector.get(vt)(u)})}get url(){return this.serializeUrl(this.currentUrlTree)}getCurrentNavigation(){return le$1(this.navigationTransitions.currentNavigation)}get lastSuccessfulNavigation(){return this.navigationTransitions.lastSuccessfulNavigation}resetConfig(t){this.config=t.map(Go),this.navigated=!1}ngOnDestroy(){this.dispose()}dispose(){this._events.unsubscribe(),this.navigationTransitions.complete(),this.nonRouterCurrentEntryChangeSubscription?.unsubscribe(),this.nonRouterCurrentEntryChangeSubscription=void 0,this.disposed=!0,this.eventsSubscription.unsubscribe()}createUrlTree(t,e={}){let{relativeTo:r,queryParams:o,fragment:a,queryParamsHandling:s,preserveFragment:l}=e,d=l?this.currentUrlTree.fragment:a,u=null;switch(s??this.options.defaultQueryParamsHandling){case`merge`:u=z$1(z$1({},this.currentUrlTree.queryParams),o);break;case`preserve`:u=this.currentUrlTree.queryParams;break;default:u=o||null}let h;try{h=ol(r?r.snapshot:this.routerState.snapshot.root)}catch{(typeof t[0]!=`string`||t[0][0]!==`/`)&&(t=[]),h=this.currentUrlTree.root}return al(h,t,u,d??null,this.urlSerializer)}navigateByUrl(t,e={skipLocationChange:!1}){let r=me(t)?t:this.parseUrl(t),o=this.urlHandlingStrategy.merge(r,this.rawUrlTree);return this.scheduleNavigation(o,Nn,null,e)}navigate(t,e={skipLocationChange:!1}){return Vh(t),this.navigateByUrl(this.createUrlTree(t,e),e)}serializeUrl(t){return this.urlSerializer.serialize(t)}parseUrl(t){try{return this.urlSerializer.parse(t)}catch{return this.console.warn(Tn$2(4018,!1)),this.urlSerializer.parse(`/`)}}isActive(t,e){let r;if(e===!0?r=z$1({},qs):e===!1?r=z$1({},Xi):r=z$1(z$1({},Xi),e),me(t))return Io(this.currentUrlTree,t,r);let o=this.parseUrl(t);return Io(this.currentUrlTree,o,r)}scheduleNavigation(t,e,r,o,a,s){if(this.disposed)return Promise.resolve(!1);let l,d,u;s?(l=s.resolve,d=s.reject,u=s.promise):u=new Promise((p,b)=>{l=p,d=b});let h=this.pendingTasks.add();return Ko(this,()=>{queueMicrotask(()=>this.pendingTasks.remove(h))}),this.navigationTransitions.handleNavigationRequest({source:e,restoredState:r,currentUrlTree:this.currentUrlTree,currentRawUrl:this.currentUrlTree,rawUrl:t,extras:o,hasUAVisualTransition:a,resolve:l,reject:d,promise:u,currentSnapshot:this.routerState.snapshot,currentRouterState:this.routerState}),u.catch(Promise.reject.bind(Promise))}static ɵfac=function(e){return new(e||n)};static ɵprov=$r({token:n,factory:n.ɵfac})}return n})();function Vh(n){for(let i=0;i<n.length;i++)if(n[i]==null)throw new w$1(4008,!1)}var Wh=(()=>{class n{router=v(Me);stateManager=v(fr);fragment=Et$1(``);queryParams=Et$1({});path=Et$1(``);serializer=v(sn$1);constructor(){this.updateState(),this.router.events?.subscribe(t=>{t instanceof Lt$1&&this.updateState()})}updateState(){let{fragment:t,root:e,queryParams:r}=this.stateManager.getCurrentUrlTree();this.fragment.set(t),this.queryParams.set(r),this.path.set(this.serializer.serialize(new gt(e)))}static ɵfac=function(e){return new(e||n)};static ɵprov=$r({token:n,factory:n.ɵfac})}return n})();var Pl=(()=>{class n{router;route;tabIndexAttribute;renderer;el;locationStrategy;hrefAttributeValue=v(new ny(`href`),{optional:!0});reactiveHref=Ul$1(()=>{if(!this.isAnchorElement)return this.hrefAttributeValue;this.reactiveRouterState.path(),this._preserveFragment()&&this.reactiveRouterState.fragment();let t=e=>e===`preserve`||e===`merge`;return(t(this._queryParamsHandling())||t(this.options?.defaultQueryParamsHandling))&&this.reactiveRouterState.queryParams(),this.computeHref(this.createUrlTree())});get href(){return le$1(this.reactiveHref)}set href(t){this.reactiveHref.set(t)}set target(t){this._target.set(t)}get target(){return le$1(this._target)}_target=Et$1(void 0);set queryParams(t){this._queryParams.set(t)}get queryParams(){return le$1(this._queryParams)}_queryParams=Et$1(void 0,{equal:()=>!1});set fragment(t){this._fragment.set(t)}get fragment(){return le$1(this._fragment)}_fragment=Et$1(void 0);set queryParamsHandling(t){this._queryParamsHandling.set(t)}get queryParamsHandling(){return le$1(this._queryParamsHandling)}_queryParamsHandling=Et$1(void 0);set state(t){this._state.set(t)}get state(){return le$1(this._state)}_state=Et$1(void 0,{equal:()=>!1});set info(t){this._info.set(t)}get info(){return le$1(this._info)}_info=Et$1(void 0,{equal:()=>!1});set relativeTo(t){this._relativeTo.set(t)}get relativeTo(){return le$1(this._relativeTo)}_relativeTo=Et$1(void 0);set preserveFragment(t){this._preserveFragment.set(t)}get preserveFragment(){return le$1(this._preserveFragment)}_preserveFragment=Et$1(!1);set skipLocationChange(t){this._skipLocationChange.set(t)}get skipLocationChange(){return le$1(this._skipLocationChange)}_skipLocationChange=Et$1(!1);set replaceUrl(t){this._replaceUrl.set(t)}get replaceUrl(){return le$1(this._replaceUrl)}_replaceUrl=Et$1(!1);browserUrl=Ij(void 0);isAnchorElement;onChanges=new ee$1;applicationErrorHandler=v(vt);options=v(cn,{optional:!0});reactiveRouterState=v(Wh);constructor(t,e,r,o,a,s){this.router=t,this.route=e,this.tabIndexAttribute=r,this.renderer=o,this.el=a,this.locationStrategy=s;let l=a.nativeElement.tagName?.toLowerCase();this.isAnchorElement=l===`a`||l===`area`||!!(typeof customElements==`object`&&customElements.get(l)?.observedAttributes?.includes?.(`href`))}setTabIndexIfNotOnNativeEl(t){this.tabIndexAttribute!=null||this.isAnchorElement||this.applyAttributeValue(`tabindex`,t)}ngOnChanges(t){this.onChanges.next(this)}routerLinkInput=Et$1(null);set routerLink(t){t==null?(this.routerLinkInput.set(null),this.setTabIndexIfNotOnNativeEl(null)):(me(t)?this.routerLinkInput.set(t):this.routerLinkInput.set(Array.isArray(t)?t:[t]),this.setTabIndexIfNotOnNativeEl(`0`))}onClick(t,e,r,o,a){let s=this.urlTree;if(s===null||this.isAnchorElement&&(t!==0||e||r||o||a||typeof this.target==`string`&&this.target!=`_self`))return!0;let l=this.browserUrl(),d=z$1({skipLocationChange:this.skipLocationChange,replaceUrl:this.replaceUrl,state:this.state,info:this.info},l!==void 0&&{browserUrl:l});return this.router.navigateByUrl(s,d)?.catch(u=>{this.applicationErrorHandler(u)}),!this.isAnchorElement}ngOnDestroy(){}applyAttributeValue(t,e){let r=this.renderer,o=this.el.nativeElement;e!==null?r.setAttribute(o,t,e):r.removeAttribute(o,t)}createUrlTree(){let t=this.routerLinkInput();return t===null||!this.router.createUrlTree?null:me(t)?t:this.router.createUrlTree(t,{relativeTo:this._relativeTo()!==void 0?this._relativeTo():this.route,queryParams:this._queryParams(),fragment:this._fragment(),queryParamsHandling:this._queryParamsHandling(),preserveFragment:this._preserveFragment()})}get urlTree(){return le$1(()=>this.createUrlTree())}computeHref(t){return t!==null&&this.locationStrategy?this.locationStrategy?.prepareExternalUrl(this.router.serializeUrl(t))??``:null}static ɵfac=function(e){return new(e||n)(os$1(Me),os$1(Jt),yp(`tabindex`),os$1(Ic$1),os$1(Wr),os$1(qe))};static ɵdir=fw({type:n,selectors:[[``,`routerLink`,``]],hostVars:2,hostBindings:function(e,r){e&1&&nm$1(`click`,function(a){return r.onClick(a.button,a.ctrlKey,a.shiftKey,a.altKey,a.metaKey)}),e&2&&qg(`href`,r.reactiveHref(),kI)(`target`,r._target())},inputs:{target:`target`,queryParams:`queryParams`,fragment:`fragment`,queryParamsHandling:`queryParamsHandling`,state:`state`,info:`info`,relativeTo:`relativeTo`,preserveFragment:[2,`preserveFragment`,`preserveFragment`,Nj],skipLocationChange:[2,`skipLocationChange`,`skipLocationChange`,Nj],replaceUrl:[2,`replaceUrl`,`replaceUrl`,Nj],browserUrl:[1,`browserUrl`],routerLink:`routerLink`},features:[hE]})}return n})();var Yn=class{};var Gh=(()=>{class n{preload(t,e){return e().pipe(ku$1(()=>Ay(null)))}static ɵfac=function(e){return new(e||n)};static ɵprov=$r({token:n,factory:n.ɵfac})}return n})();var Fl=(()=>{class n{router;injector;preloadingStrategy;loader;subscription;constructor(t,e,r,o){this.router=t,this.injector=e,this.preloadingStrategy=r,this.loader=o}setUpPreloading(){this.subscription=this.router.events.pipe(rr$1(t=>t instanceof Lt$1),zy(()=>this.preload())).subscribe(()=>{})}preload(){return this.processRoutes(this.injector,this.router.config)}ngOnDestroy(){this.subscription?.unsubscribe()}processRoutes(t,e){let r=[];for(let o of e){o.providers&&!o._injector&&(o._injector=Sl$1(o.providers,t,``));let a=o._injector??t;o._loadedNgModuleFactory&&!o._loadedInjector&&(o._loadedInjector=o._loadedNgModuleFactory.create(a).injector);let s=o._loadedInjector??a;(o.loadChildren&&!o._loadedRoutes&&o.canLoad===void 0||o.loadComponent&&!o._loadedComponent)&&r.push(this.preloadConfig(a,o)),(o.children||o._loadedRoutes)&&r.push(this.processRoutes(s,o.children??o._loadedRoutes))}return Re$1(r).pipe(tr$1())}preloadConfig(t,e){return this.preloadingStrategy.preload(e,()=>{if(t.destroyed)return Ay(null);let r;e.loadChildren&&e.canLoad===void 0?r=Re$1(this.loader.loadChildren(t,e)):r=Ay(null);let o=r.pipe($e(a=>a===null?Ay(void 0):(e._loadedRoutes=a.routes,e._loadedInjector=a.injector,e._loadedNgModuleFactory=a.factory,this.processRoutes(a.injector??t,a.routes))));if(e.loadComponent&&!e._loadedComponent){let a=this.loader.loadComponent(t,e);return Re$1([o,a]).pipe(tr$1())}else return o})}static ɵfac=function(e){return new(e||n)(Pe$1(Me),Pe$1(Ee$1),Pe$1(Yn),Pe$1(qo))};static ɵprov=ae({token:n,factory:n.ɵfac,providedIn:`root`})}return n})();var Yh=new S(``);function Xh(n,...i){return Dr$1([{provide:Gn,multi:!0,useValue:n},{provide:Jt,useFactory:qh},{provide:eo,multi:!0,useFactory:Zh},i.map(t=>t.ɵproviders)])}function qh(){return v(Me).routerState.root}function Kh(n,i){return{ɵkind:n,ɵproviders:i}}function Zh(){let n=v(se);return i=>{let t=n.get(wt);if(i!==t.components[0])return;let e=n.get(Me),r=n.get(Jh);n.get(Qh)===1&&e.initialNavigation(),n.get(Ll,null,{optional:!0})?.setUpPreloading(),n.get(Yh,null,{optional:!0})?.init(),e.resetRootComponentType(t.componentTypes[0]),r.closed||(r.next(),r.complete(),r.unsubscribe())}}var Jh=new S(``,{factory:()=>new ee$1});var Qh=new S(``,{factory:()=>1});var Ll=new S(``);function tm(n){return Kh(0,[{provide:Ll,useExisting:Fl},{provide:Yn,useExisting:n}])}var gr=/* @__PURE__ */ new WeakMap;var Dt=(()=>{class n{_appRef;_injector=v(se);_environmentInjector=v(Ee$1);load(t){let e=this._appRef=this._appRef||this._injector.get(wt),r=gr.get(e);r||(r={loaders:/* @__PURE__ */ new Set,refs:[]},gr.set(e,r),e.onDestroy(()=>{gr.get(e)?.refs.forEach(o=>o.destroy()),gr.delete(e)})),r.loaders.has(t)||(r.loaders.add(t),r.refs.push(Aj(t,{environmentInjector:this._environmentInjector})))}static ɵfac=function(e){return new(e||n)};static ɵprov=$r({token:n,factory:n.ɵfac})}return n})();var vr=(()=>{class n{static ɵfac=function(e){return new(e||n)};static ɵcmp=aw({type:n,selectors:[[`ng-component`]],exportAs:[`cdkVisuallyHidden`],decls:0,vars:0,template:function(e,r){},styles:[`.cdk-visually-hidden {
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
`],encapsulation:2})}return n})();var br;function em(){if(br===void 0&&(br=null,typeof window<`u`)){let n=window;if(n.trustedTypes!==void 0)try{br=n.trustedTypes.createPolicy(`angular#components`,{createHTML:i=>i})}catch(i){console.error(i)}}return br}function Ae(n){return em()?.createHTML(n)||n}function Bl(n,i,t){n.innerHTML=Ae(t.sanitize(J$1.HTML,i)||``)}function Ul(n){return Error(`Unable to find icon with the name "${n}"`)}function nm(){return Error(`Could not find HttpClient for use with Angular Material icons. Please add provideHttpClient() to your providers.`)}function jl(n){return Error(`The URL provided to MatIconRegistry was not trusted as a resource URL via Angular's DomSanitizer. Attempted URL was "${n}".`)}function zl(n){return Error(`The literal provided to MatIconRegistry was not trusted as safe HTML by Angular's DomSanitizer. Attempted literal was "${n}".`)}var te=class{url;svgText;options;svgElement=null;constructor(i,t,e){this.url=i,this.svgText=t,this.options=e}};var Hl=(()=>{class n{_httpClient;_sanitizer;_errorHandler;_document;_svgIconConfigs=/* @__PURE__ */ new Map;_iconSetConfigs=/* @__PURE__ */ new Map;_cachedIconsByUrl=/* @__PURE__ */ new Map;_inProgressUrlFetches=/* @__PURE__ */ new Map;_fontCssClassesByAlias=/* @__PURE__ */ new Map;_resolvers=[];_defaultFontSetClass;constructor(t,e,r,o){this._httpClient=t,this._sanitizer=e,this._errorHandler=o,this._document=r}addSvgIcon(t,e,r){return this.addSvgIconInNamespace(``,t,e,r)}addSvgIconLiteral(t,e,r){return this.addSvgIconLiteralInNamespace(``,t,e,r)}addSvgIconInNamespace(t,e,r,o){return this._addSvgIconConfig(t,e,new te(r,null,o))}addSvgIconResolver(t){return this._resolvers.push(t),this}addSvgIconLiteralInNamespace(t,e,r,o){let a=this._sanitizer.sanitize(J$1.HTML,r);if(!a)throw zl(r);let s=Ae(a);return this._addSvgIconConfig(t,e,new te(``,s,o))}addSvgIconSet(t,e){return this.addSvgIconSetInNamespace(``,t,e)}addSvgIconSetLiteral(t,e){return this.addSvgIconSetLiteralInNamespace(``,t,e)}addSvgIconSetInNamespace(t,e,r){return this._addSvgIconSetConfig(t,new te(e,null,r))}addSvgIconSetLiteralInNamespace(t,e,r){let o=this._sanitizer.sanitize(J$1.HTML,e);if(!o)throw zl(e);let a=Ae(o);return this._addSvgIconSetConfig(t,new te(``,a,r))}registerFontClassAlias(t,e=t){return this._fontCssClassesByAlias.set(t,e),this}classNameForFontAlias(t){return this._fontCssClassesByAlias.get(t)||t}setDefaultFontSetClass(...t){return this._defaultFontSetClass=t,this}getDefaultFontSetClass(){return this._defaultFontSetClass??=rm(this._document),this._defaultFontSetClass}getSvgIconFromUrl(t){let e=this._sanitizer.sanitize(J$1.RESOURCE_URL,t);if(!e)throw jl(t);let r=this._cachedIconsByUrl.get(e);return r?Ay(yr(r)):this._loadSvgIconFromConfig(new te(t,null)).pipe(ju$1(o=>this._cachedIconsByUrl.set(e,o)),Ue(o=>yr(o)))}getNamedSvgIcon(t,e=``){let r=Vl(e,t),o=this._svgIconConfigs.get(r);if(o)return this._getSvgFromConfig(o);if(o=this._getIconConfigFromResolvers(e,t),o)return this._svgIconConfigs.set(r,o),this._getSvgFromConfig(o);let a=this._iconSetConfigs.get(e);return a?this._getSvgFromIconSetConfigs(t,a):Oy(Ul(r))}ngOnDestroy(){this._resolvers=[],this._svgIconConfigs.clear(),this._iconSetConfigs.clear(),this._cachedIconsByUrl.clear()}_getSvgFromConfig(t){return t.svgText?Ay(yr(this._svgElementFromConfig(t))):this._loadSvgIconFromConfig(t).pipe(Ue(e=>yr(e)))}_getSvgFromIconSetConfigs(t,e){let r=this._extractIconWithNameFromAnySet(t,e);if(r)return Ay(r);let o=e.filter(a=>!a.svgText).map(a=>this._loadSvgIconSetFromConfig(a).pipe(ku$1(s=>{let d=`Loading icon set URL: ${this._sanitizer.sanitize(J$1.RESOURCE_URL,a.url)} failed: ${s.message}`;return this._errorHandler.handleError(new Error(d)),Ay(null)})));return Wy(o).pipe(Ue(()=>{let a=this._extractIconWithNameFromAnySet(t,e);if(!a)throw Ul(t);return a}))}_extractIconWithNameFromAnySet(t,e){for(let r=e.length-1;r>=0;r--){let o=e[r];if(o.svgText&&o.svgText.toString().indexOf(t)>-1){let a=this._svgElementFromConfig(o),s=this._extractSvgIconFromSet(a,t,o.options);if(s)return s}}return null}_loadSvgIconFromConfig(t){return this._fetchIcon(t).pipe(ju$1(e=>t.svgText=e),Ue(()=>this._svgElementFromConfig(t)))}_loadSvgIconSetFromConfig(t){return t.svgText?Ay(null):this._fetchIcon(t).pipe(ju$1(e=>t.svgText=e))}_extractSvgIconFromSet(t,e,r){let o=t.querySelector(`[id="${e}"]`);if(!o)return null;let a=o.cloneNode(!0);if(a.removeAttribute(`id`),a.nodeName.toLowerCase()===`svg`)return this._setSvgAttributes(a,r);if(a.nodeName.toLowerCase()===`symbol`)return this._setSvgAttributes(this._toSvgElement(a),r);let s=this._svgElementFromString(Ae(`<svg></svg>`));return s.appendChild(a),this._setSvgAttributes(s,r)}_svgElementFromString(t){let e=this._document.createElement(`DIV`);e.innerHTML=t;let r=e.querySelector(`svg`);if(!r)throw Error(`<svg> tag not found`);return r}_toSvgElement(t){let e=this._svgElementFromString(Ae(`<svg></svg>`)),r=t.attributes;for(let o=0;o<r.length;o++){let{name:a,value:s}=r[o],l=a.toLowerCase();l!==`id`&&!l.startsWith(`on`)&&e.setAttribute(a,s)}for(let o=0;o<t.childNodes.length;o++)t.childNodes[o].nodeType===this._document.ELEMENT_NODE&&e.appendChild(t.childNodes[o].cloneNode(!0));return e}_setSvgAttributes(t,e){return t.setAttribute(`fit`,``),t.setAttribute(`height`,`100%`),t.setAttribute(`width`,`100%`),t.setAttribute(`preserveAspectRatio`,`xMidYMid meet`),t.setAttribute(`focusable`,`false`),e&&e.viewBox&&t.setAttribute(`viewBox`,e.viewBox),t}_fetchIcon(t){let{url:e,options:r}=t,o=r?.withCredentials??!1;if(!this._httpClient)throw nm();if(e==null)throw Error(`Cannot fetch icon from URL "${e}".`);let a=this._sanitizer.sanitize(J$1.RESOURCE_URL,e);if(!a)throw jl(e);let s=this._inProgressUrlFetches.get(a);if(s)return s;let l=this._httpClient.get(a,{responseType:`text`,withCredentials:o}).pipe(Ue(d=>Ae(d)),Xy(()=>this._inProgressUrlFetches.delete(a)),Ns$1());return this._inProgressUrlFetches.set(a,l),l}_addSvgIconConfig(t,e,r){return this._svgIconConfigs.set(Vl(t,e),r),this}_addSvgIconSetConfig(t,e){let r=this._iconSetConfigs.get(t);return r?r.push(e):this._iconSetConfigs.set(t,[e]),this}_svgElementFromConfig(t){if(!t.svgElement){let e=this._svgElementFromString(t.svgText);this._setSvgAttributes(e,t.options),t.svgElement=e}return t.svgElement}_getIconConfigFromResolvers(t,e){for(let r=0;r<this._resolvers.length;r++){let o=this._resolvers[r](e,t);if(o)return im(o)?new te(o.url,null,o.options):new te(o,null)}}static ɵfac=function(e){return new(e||n)(Pe$1(Ce$1,8),Pe$1(Mn$1),Pe$1(mt,8),Pe$1(Je$1))};static ɵprov=ae({token:n,factory:n.ɵfac,providedIn:`root`})}return n})();function yr(n){return n.cloneNode(!0)}function Vl(n,i){return n+`:`+i}function im(n){return!!(n.url&&n.options)}function rm(n){let i=null,t=!1;return n.fonts&&typeof n.fonts.forEach==`function`&&n.fonts.forEach(e=>{let r=e.family.replace(/['"]/g,``).trim().toLowerCase();(r===`material icons`||r.startsWith(`material icons `))&&(t=!0),r.startsWith(`material symbols rounded`)?i=`rounded`:r.startsWith(`material symbols sharp`)?i=`sharp`:r.startsWith(`material symbols`)&&(i=`outlined`)}),[i&&!t?`material-symbols-${i}`:`material-icons`,`mat-ligature-font`]}var om=new S(`cdk-dir-doc`,{providedIn:`root`,factory:()=>v(mt)});var am=/^(ar|ckb|dv|he|iw|fa|nqo|ps|sd|ug|ur|yi|.*[-_](Adlm|Arab|Hebr|Nkoo|Rohg|Thaa))(?!.*[-_](Latn|Cyrl)($|-|_))($|-|_)/i;function $l(n){let i=n?.toLowerCase()||``;return i===`auto`&&typeof navigator<`u`&&navigator?.language?am.test(navigator.language)?`rtl`:`ltr`:i===`rtl`?`rtl`:`ltr`}var Te$1=(()=>{class n{get value(){return this.valueSignal()}valueSignal=Et$1(`ltr`);change=new Qe$1;constructor(){let t=v(om,{optional:!0});if(t){let e=t.body?t.body.dir:null,r=t.documentElement?t.documentElement.dir:null;this.valueSignal.set($l(e||r||`ltr`))}}ngOnDestroy(){this.change.complete()}static ɵfac=function(e){return new(e||n)};static ɵprov=$r({token:n,factory:n.ɵfac})}return n})();var Sy=(()=>{class n{static ɵfac=function(e){return new(e||n)};static ɵmod=lw({type:n});static ɵinj=nd$1({})}return n})();var lm=new S(`MAT_ICON_DEFAULT_OPTIONS`);var cm=new S(`mat-icon-location`,{providedIn:`root`,factory:()=>{let n=v(mt),i=n?n.location:null;return{getPathname:()=>i?i.pathname+i.search:``}}});var Wl=[`clip-path`,`color-profile`,`src`,`cursor`,`fill`,`filter`,`marker`,`marker-start`,`marker-mid`,`marker-end`,`mask`,`stroke`];var dm=Wl.map(n=>`[${n}]`).join(`, `);var um=/^url\(['"]?#(.*?)['"]?\)$/;var Ny=(()=>{class n{_elementRef=v(Wr);_iconRegistry=v(Hl);_location=v(cm);_errorHandler=v(Je$1);_defaultColor;get color(){return this._color||this._defaultColor}set color(t){this._color=t}_color;inline=!1;get svgIcon(){return this._svgIcon}set svgIcon(t){t!==this._svgIcon&&(t?this._updateSvgIcon(t):this._svgIcon&&this._clearSvgElement(),this._svgIcon=t)}_svgIcon;get fontSet(){return this._fontSet}set fontSet(t){let e=this._cleanupFontValue(t);e!==this._fontSet&&(this._fontSet=e,this._updateFontIconClasses())}_fontSet;get fontIcon(){return this._fontIcon}set fontIcon(t){let e=this._cleanupFontValue(t);e!==this._fontIcon&&(this._fontIcon=e,this._updateFontIconClasses())}_fontIcon;_previousFontSetClass=[];_previousFontIconClass;_svgName=null;_svgNamespace=null;_previousPath;_elementsWithExternalReferences;_currentIconFetch=K.EMPTY;constructor(){let t=v(new ny(`aria-hidden`),{optional:!0}),e=v(lm,{optional:!0});e&&(e.color&&(this.color=this._defaultColor=e.color),e.fontSet&&(this.fontSet=e.fontSet)),t||this._elementRef.nativeElement.setAttribute(`aria-hidden`,`true`)}_splitIconName(t){if(!t)return[``,``];let e=t.split(`:`);switch(e.length){case 1:return[``,e[0]];case 2:return e;default:throw Error(`Invalid icon name: "${t}"`)}}ngOnInit(){this._updateFontIconClasses()}ngAfterViewChecked(){let t=this._elementsWithExternalReferences;if(t&&t.size){let e=this._location.getPathname();e!==this._previousPath&&(this._previousPath=e,this._prependPathToReferences(e))}}ngOnDestroy(){this._currentIconFetch.unsubscribe(),this._elementsWithExternalReferences&&this._elementsWithExternalReferences.clear()}_usingFontIcon(){return!this.svgIcon}_setSvgElement(t){this._clearSvgElement();let e=this._location.getPathname();this._previousPath=e,this._cacheChildrenWithExternalReferences(t),this._prependPathToReferences(e),this._elementRef.nativeElement.appendChild(t)}_clearSvgElement(){let t=this._elementRef.nativeElement,e=t.childNodes.length;for(this._elementsWithExternalReferences&&this._elementsWithExternalReferences.clear();e--;){let r=t.childNodes[e];(r.nodeType!==1||r.nodeName.toLowerCase()===`svg`)&&r.remove()}}_updateFontIconClasses(){if(!this._usingFontIcon())return;let t=this._elementRef.nativeElement,e=(this.fontSet?this._iconRegistry.classNameForFontAlias(this.fontSet).split(/ +/):this._iconRegistry.getDefaultFontSetClass()).filter(r=>r.length>0);this._previousFontSetClass.forEach(r=>t.classList.remove(r)),e.forEach(r=>t.classList.add(r)),this._previousFontSetClass=e,this.fontIcon!==this._previousFontIconClass&&!e.includes(`mat-ligature-font`)&&(this._previousFontIconClass&&t.classList.remove(this._previousFontIconClass),this.fontIcon&&t.classList.add(this.fontIcon),this._previousFontIconClass=this.fontIcon)}_cleanupFontValue(t){return typeof t==`string`?t.trim().split(` `)[0]:t}_prependPathToReferences(t){let e=this._elementsWithExternalReferences,r=t.startsWith(`//`)?`/.${t}`:t;e&&e.forEach((o,a)=>{o.forEach(s=>{a.setAttribute(s.name,`url('${r}#${s.value}')`)})})}_cacheChildrenWithExternalReferences(t){let e=t.querySelectorAll(dm),r=this._elementsWithExternalReferences=this._elementsWithExternalReferences||/* @__PURE__ */ new Map;for(let o=0;o<e.length;o++)Wl.forEach(a=>{let s=e[o],l=s.getAttribute(a),d=l?l.match(um):null;if(d){let u=r.get(s);u||(u=[],r.set(s,u)),u.push({name:a,value:d[1]})}})}_updateSvgIcon(t){if(this._svgNamespace=null,this._svgName=null,this._currentIconFetch.unsubscribe(),t){let[e,r]=this._splitIconName(t);e&&(this._svgNamespace=e),r&&(this._svgName=r),this._currentIconFetch=this._iconRegistry.getNamedSvgIcon(r,e).pipe(gn$2(1)).subscribe(o=>this._setSvgElement(o),o=>{let a=`Error retrieving icon ${e}:${r}! ${o.message}`;this._errorHandler.handleError(new Error(a))})}}static ɵfac=function(e){return new(e||n)};static ɵcmp=(function(){return aw({type:n,selectors:[[`mat-icon`]],hostAttrs:[`role`,`img`,1,`mat-icon`,`notranslate`],hostVars:10,hostBindings:function(r,o){r&2&&(qg(`data-mat-icon-type`,o._usingFontIcon()?`font`:`svg`)(`data-mat-icon-name`,o._svgName||o.fontIcon)(`data-mat-icon-namespace`,o._svgNamespace||o.fontSet)(`fontIcon`,o._usingFontIcon()?o.fontIcon:null),jC(o.color?`mat-`+o.color:``),pm$1(`mat-icon-inline`,o.inline)(`mat-icon-no-color`,o.color!==`primary`&&o.color!==`accent`&&o.color!==`warn`))},inputs:{color:`color`,inline:[2,`inline`,`inline`,Nj],svgIcon:`svgIcon`,fontSet:`fontSet`,fontIcon:`fontIcon`},exportAs:[`matIcon`],ngContentSelectors:[`*`],decls:1,vars:0,template:function(r,o){r&1&&(yC$1(),vC$1(0))},styles:[`mat-icon, mat-icon.mat-primary, mat-icon.mat-accent, mat-icon.mat-warn {
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
`],encapsulation:2})})()}return n})();function Ne(n,i=0){return Gl(n)?Number(n):arguments.length===2?i:0}function Gl(n){return!isNaN(parseFloat(n))&&!isNaN(Number(n))}function Et(n){return n instanceof Wr?n.nativeElement:n}function dn(n){return Array.isArray(n)?n:[n]}function $(n){return n==null?``:typeof n==`string`?n:`${n}px`}function Zo(n){return n!=null&&`${n}`!=`false`}function _r(n,...i){return i.length?i.some(t=>n[t]):n.altKey||n.shiftKey||n.ctrlKey||n.metaKey}var Jo;try{Jo=typeof Intl<`u`&&Intl.v8BreakIterator}catch{Jo=!1}var z=(()=>{class n{_platformId=v(Yv);isBrowser=this._platformId?Ri(this._platformId):typeof document==`object`&&!!document;EDGE=this.isBrowser&&/(edge)/i.test(navigator.userAgent);TRIDENT=this.isBrowser&&/(msie|trident)/i.test(navigator.userAgent);BLINK=this.isBrowser&&!!(window.chrome||Jo)&&typeof CSS<`u`&&!this.EDGE&&!this.TRIDENT;WEBKIT=this.isBrowser&&/AppleWebKit/i.test(navigator.userAgent)&&!this.BLINK&&!this.EDGE&&!this.TRIDENT;IOS=this.isBrowser&&/iPad|iPhone|iPod/.test(navigator.userAgent)&&!(`MSStream`in window);FIREFOX=this.isBrowser&&/(firefox|minefield)/i.test(navigator.userAgent);ANDROID=this.isBrowser&&/android/i.test(navigator.userAgent)&&!this.TRIDENT;SAFARI=this.isBrowser&&/safari/i.test(navigator.userAgent)&&this.WEBKIT;static ɵfac=function(e){return new(e||n)};static ɵprov=$r({token:n,factory:n.ɵfac})}return n})();var Bt=(function(n){return n[n.NORMAL=0]=`NORMAL`,n[n.NEGATED=1]=`NEGATED`,n[n.INVERTED=2]=`INVERTED`,n})(Bt||{});var wr;var Oe;function Sr(){if(Oe==null){if(typeof document!=`object`||!document||typeof Element!=`function`||!Element)return Oe=!1,Oe;if(document.documentElement?.style&&`scrollBehavior`in document.documentElement.style)Oe=!0;else{let n=Element.prototype.scrollTo;n?Oe=!/\{\s*\[native code\]\s*\}/.test(n.toString()):Oe=!1}}return Oe}function un(){if(typeof document!=`object`||!document)return Bt.NORMAL;if(wr==null){let n=document.createElement(`div`),i=n.style;n.dir=`rtl`,i.width=`1px`,i.overflow=`auto`,i.visibility=`hidden`,i.pointerEvents=`none`,i.position=`absolute`;let t=document.createElement(`div`),e=t.style;e.width=`2px`,e.height=`1px`,n.appendChild(t),document.body.appendChild(n),wr=Bt.NORMAL,n.scrollLeft===0&&(n.scrollLeft=1,wr=n.scrollLeft===0?Bt.NEGATED:Bt.INVERTED),n.remove()}return wr}var Qo;function Yl(){if(Qo==null){let n=typeof document<`u`?document.head:null;Qo=!!(n&&(n.createShadowRoot||n.attachShadow))}return Qo}function ta(n){if(Yl()){let i=n.getRootNode?n.getRootNode():null;if(typeof ShadowRoot<`u`&&ShadowRoot&&i instanceof ShadowRoot)return i}return null}function hm(){let n=typeof document<`u`&&document?document.activeElement:null;for(;n&&n.shadowRoot;){let i=n.shadowRoot.activeElement;if(i===n)break;n=i}return n}function ct(n){if(n.composedPath)try{return n.composedPath()[0]}catch{}return n.target}function ea(){return typeof __karma__<`u`&&!!__karma__||typeof jasmine<`u`&&!!jasmine||typeof jest<`u`&&!!jest||typeof Mocha<`u`&&!!Mocha}var Xn;function Xl(){if(Xn==null&&typeof window<`u`)try{window.addEventListener(`test`,null,Object.defineProperty({},"passive",{get:()=>Xn=!0}))}finally{Xn=Xn||!1}return Xn}function hn$1(n){return Xl()?n:!!n.capture}var mn;var ql=[`color`,`button`,`checkbox`,`date`,`datetime-local`,`email`,`file`,`hidden`,`image`,`month`,`number`,`password`,`radio`,`range`,`reset`,`search`,`submit`,`tel`,`text`,`time`,`url`,`week`];function qy(){if(mn)return mn;if(typeof document!=`object`||!document)return mn=new Set(ql),mn;let n=document.createElement(`input`);return mn=new Set(ql.filter(i=>(n.setAttribute(`type`,i),n.type===i))),mn}function qn(n){return n.buttons===0||n.detail===0}function Kn(n){let i=n.touches&&n.touches[0]||n.changedTouches&&n.changedTouches[0];return!!i&&i.identifier===-1&&(i.radiusX==null||i.radiusX===1)&&(i.radiusY==null||i.radiusY===1)}var Kl=new S(`cdk-input-modality-detector-options`);var Zl={ignoreKeys:[18,17,224,91,16]};var Jl=650;var na={passive:!0,capture:!0};var Ql=(()=>{class n{_platform=v(z);_listenerCleanups;modalityDetected;modalityChanged;get mostRecentModality(){return this._modality.value}_mostRecentTarget=null;_modality=new Kn$1(null);_options;_lastTouchMs=0;_onKeydown=t=>{this._options?.ignoreKeys?.some(e=>e===t.keyCode)||(this._modality.next(`keyboard`),this._mostRecentTarget=ct(t))};_onMousedown=t=>{Date.now()-this._lastTouchMs<Jl||(this._modality.next(qn(t)?`keyboard`:`mouse`),this._mostRecentTarget=ct(t))};_onTouchstart=t=>{if(Kn(t)){this._modality.next(`keyboard`);return}this._lastTouchMs=Date.now(),this._modality.next(`touch`),this._mostRecentTarget=ct(t)};constructor(){let t=v(Fe$1),e=v(mt),r=v(Kl,{optional:!0});if(this._options=z$1(z$1({},Zl),r),this.modalityDetected=this._modality.pipe(ov(1)),this.modalityChanged=this.modalityDetected.pipe(Zy()),this._platform.isBrowser){let o=v(Vr).createRenderer(null,null);this._listenerCleanups=t.runOutsideAngular(()=>[o.listen(e,`keydown`,this._onKeydown,na),o.listen(e,`mousedown`,this._onMousedown,na),o.listen(e,`touchstart`,this._onTouchstart,na)])}}ngOnDestroy(){this._modality.complete(),this._listenerCleanups?.forEach(t=>t())}static ɵfac=function(e){return new(e||n)};static ɵprov=$r({token:n,factory:n.ɵfac})}return n})();var Zn=(function(n){return n[n.IMMEDIATE=0]=`IMMEDIATE`,n[n.EVENTUAL=1]=`EVENTUAL`,n})(Zn||{});var tc=new S(`cdk-focus-monitor-default-options`);var Cr=hn$1({passive:!0,capture:!0});var pn$1=(()=>{class n{_ngZone=v(Fe$1);_platform=v(z);_inputModalityDetector=v(Ql);_origin=null;_lastFocusOrigin=null;_windowFocused=!1;_windowFocusTimeoutId;_originTimeoutId;_originFromTouchInteraction=!1;_elementInfo=/* @__PURE__ */ new Map;_monitoredElementCount=0;_rootNodeFocusListenerCount=/* @__PURE__ */ new Map;_detectionMode;_windowFocusListener=()=>{this._windowFocused=!0,this._windowFocusTimeoutId=setTimeout(()=>this._windowFocused=!1)};_document=v(mt);_stopInputModalityDetector=new ee$1;constructor(){let t=v(tc,{optional:!0});this._detectionMode=t?.detectionMode||Zn.IMMEDIATE}_rootNodeFocusAndBlurListener=t=>{let e=ct(t);for(let r=e;r;r=r.parentElement)t.type===`focus`?this._onFocus(t,r):this._onBlur(t,r)};monitor(t,e=!1){let r=Et(t);if(!this._platform.isBrowser||r.nodeType!==1)return Ay();let o=ta(r)||this._document,a=this._elementInfo.get(r);if(a)return e&&(a.checkChildren=!0),a.subject;let s={checkChildren:e,subject:new ee$1,rootNode:o};return this._elementInfo.set(r,s),this._registerGlobalListeners(s),s.subject}stopMonitoring(t){let e=Et(t),r=this._elementInfo.get(e);r&&(r.subject.complete(),this._setClasses(e),this._elementInfo.delete(e),this._removeGlobalListeners(r))}focusVia(t,e,r){let o=Et(t);o===this._document.activeElement?this._getClosestElementsInfo(o).forEach(([s,l])=>this._originChanged(s,e,l)):(this._setOrigin(e),typeof o.focus==`function`&&o.focus(r))}ngOnDestroy(){this._elementInfo.forEach((t,e)=>this.stopMonitoring(e))}_getWindow(){return this._document.defaultView||window}_getFocusOrigin(t){return this._origin?this._originFromTouchInteraction?this._shouldBeAttributedToTouch(t)?`touch`:`program`:this._origin:this._windowFocused&&this._lastFocusOrigin?this._lastFocusOrigin:t&&this._isLastInteractionFromInputLabel(t)?`mouse`:`program`}_shouldBeAttributedToTouch(t){return this._detectionMode===Zn.EVENTUAL||!!t?.contains(this._inputModalityDetector._mostRecentTarget)}_setClasses(t,e){t.classList.toggle(`cdk-focused`,!!e),t.classList.toggle(`cdk-touch-focused`,e===`touch`),t.classList.toggle(`cdk-keyboard-focused`,e===`keyboard`),t.classList.toggle(`cdk-mouse-focused`,e===`mouse`),t.classList.toggle(`cdk-program-focused`,e===`program`)}_setOrigin(t,e=!1){this._ngZone.runOutsideAngular(()=>{if(this._origin=t,this._originFromTouchInteraction=t===`touch`&&e,this._detectionMode===Zn.IMMEDIATE){clearTimeout(this._originTimeoutId);let r=this._originFromTouchInteraction?Jl:1;this._originTimeoutId=setTimeout(()=>this._origin=null,r)}})}_onFocus(t,e){let r=this._elementInfo.get(e),o=ct(t);!r||!r.checkChildren&&e!==o||this._originChanged(e,this._getFocusOrigin(o),r)}_onBlur(t,e){let r=this._elementInfo.get(e);!r||r.checkChildren&&t.relatedTarget instanceof Node&&e.contains(t.relatedTarget)||(this._setClasses(e),this._emitOrigin(r,null))}_emitOrigin(t,e){t.subject.observers.length&&this._ngZone.run(()=>t.subject.next(e))}_registerGlobalListeners(t){if(!this._platform.isBrowser)return;let e=t.rootNode,r=this._rootNodeFocusListenerCount.get(e)||0;r||this._ngZone.runOutsideAngular(()=>{e.addEventListener(`focus`,this._rootNodeFocusAndBlurListener,Cr),e.addEventListener(`blur`,this._rootNodeFocusAndBlurListener,Cr)}),this._rootNodeFocusListenerCount.set(e,r+1),++this._monitoredElementCount===1&&(this._ngZone.runOutsideAngular(()=>{this._getWindow().addEventListener(`focus`,this._windowFocusListener)}),this._inputModalityDetector.modalityDetected.pipe(av(this._stopInputModalityDetector)).subscribe(o=>{this._setOrigin(o,!0)}))}_removeGlobalListeners(t){let e=t.rootNode;if(this._rootNodeFocusListenerCount.has(e)){let r=this._rootNodeFocusListenerCount.get(e);r>1?this._rootNodeFocusListenerCount.set(e,r-1):(e.removeEventListener(`focus`,this._rootNodeFocusAndBlurListener,Cr),e.removeEventListener(`blur`,this._rootNodeFocusAndBlurListener,Cr),this._rootNodeFocusListenerCount.delete(e))}--this._monitoredElementCount||(this._getWindow().removeEventListener(`focus`,this._windowFocusListener),this._stopInputModalityDetector.next(),clearTimeout(this._windowFocusTimeoutId),clearTimeout(this._originTimeoutId))}_originChanged(t,e,r){this._setClasses(t,e),this._emitOrigin(r,e),this._lastFocusOrigin=e}_getClosestElementsInfo(t){let e=[];return this._elementInfo.forEach((r,o)=>{(o===t||r.checkChildren&&o.contains(t))&&e.push([o,r])}),e}_isLastInteractionFromInputLabel(t){let{_mostRecentTarget:e,mostRecentModality:r}=this._inputModalityDetector;if(r!==`mouse`||!e||e===t||t.nodeName!==`INPUT`&&t.nodeName!==`TEXTAREA`||t.disabled)return!1;let o=t.labels;if(o){for(let a=0;a<o.length;a++)if(o[a].contains(e))return!0}return!1}static ɵfac=function(e){return new(e||n)};static ɵprov=$r({token:n,factory:n.ɵfac})}return n})();var mm=(()=>{class n{_elementRef=v(Wr);_focusMonitor=v(pn$1);_monitorSubscription;_focusOrigin=null;cdkFocusChange=new Qe$1;get focusOrigin(){return this._focusOrigin}ngAfterViewInit(){let t=this._elementRef.nativeElement;this._monitorSubscription=this._focusMonitor.monitor(t,t.nodeType===1&&t.hasAttribute(`cdkMonitorSubtreeFocus`)).subscribe(e=>{this._focusOrigin=e,this.cdkFocusChange.emit(e)})}ngOnDestroy(){this._focusMonitor.stopMonitoring(this._elementRef),this._monitorSubscription?.unsubscribe()}static ɵfac=function(e){return new(e||n)};static ɵdir=fw({type:n,selectors:[[``,`cdkMonitorElementFocus`,``],[``,`cdkMonitorSubtreeFocus`,``]],outputs:{cdkFocusChange:`cdkFocusChange`},exportAs:[`cdkMonitorFocus`]})}return n})();var ec=/* @__PURE__ */ new Set;var ke;var fn$1=(()=>{class n{_platform=v(z);_nonce=v(Kv,{optional:!0});_matchMedia;constructor(){this._matchMedia=this._platform.isBrowser&&window.matchMedia?window.matchMedia.bind(window):fm}matchMedia(t){return(this._platform.WEBKIT||this._platform.BLINK)&&pm(t,this._nonce),this._matchMedia(t)}static ɵfac=function(e){return new(e||n)};static ɵprov=$r({token:n,factory:n.ɵfac})}return n})();function pm(n,i){if(!ec.has(n))try{ke||(ke=document.createElement(`style`),i&&ke.setAttribute(`nonce`,i),ke.setAttribute(`type`,`text/css`),document.head.appendChild(ke)),ke.sheet&&(ke.sheet.insertRule(`@media ${n.replace(/[{}]/g,``)} {body{ }}`,0),ec.add(n))}catch(t){console.error(t)}}function fm(n){return{matches:n===`all`||n===``,media:n,addListener:()=>{},removeListener:()=>{}}}var gm=(()=>{class n{_mediaMatcher=v(fn$1);_zone=v(Fe$1);_queries=/* @__PURE__ */ new Map;_destroySubject=new ee$1;ngOnDestroy(){this._destroySubject.next(),this._destroySubject.complete()}isMatched(t){return nc(dn(t)).some(r=>this._registerQuery(r).mql.matches)}observe(t){let r=nc(dn(t)).map(a=>this._registerQuery(a).observable),o=By(r);return o=hn$2(o.pipe(gn$2(1)),o.pipe(ov(1),Qy(0))),o.pipe(Ue(a=>{let s={matches:!1,breakpoints:{}};return a.forEach(({matches:l,query:d})=>{s.matches=s.matches||l,s.breakpoints[d]=l}),s}))}_registerQuery(t){if(this._queries.has(t))return this._queries.get(t);let e=this._mediaMatcher.matchMedia(t),o={observable:new x(a=>{let s=l=>this._zone.run(()=>a.next(l));return e.addListener(s),()=>{e.removeListener(s)}}).pipe(iv(e),Ue(({matches:a})=>({query:t,matches:a})),av(this._destroySubject)),mql:e};return this._queries.set(t,o),o}static ɵfac=function(e){return new(e||n)};static ɵprov=$r({token:n,factory:n.ɵfac})}return n})();function nc(n){return n.map(i=>i.split(`,`)).reduce((i,t)=>i.concat(t)).map(i=>i.trim())}function bm(n){if(n.type===`characterData`&&n.target instanceof Comment)return!0;if(n.type===`childList`){for(let i=0;i<n.addedNodes.length;i++)if(!(n.addedNodes[i]instanceof Comment))return!1;for(let i=0;i<n.removedNodes.length;i++)if(!(n.removedNodes[i]instanceof Comment))return!1;return!0}return!1}var vm=(()=>{class n{create(t){return typeof MutationObserver>`u`?null:new MutationObserver(t)}static ɵfac=function(e){return new(e||n)};static ɵprov=$r({token:n,factory:n.ɵfac})}return n})();var ym=(()=>{class n{_mutationObserverFactory=v(vm);_observedElements=/* @__PURE__ */ new Map;_ngZone=v(Fe$1);ngOnDestroy(){this._observedElements.forEach((t,e)=>this._cleanupObserver(e))}observe(t){let e=Et(t);return new x(r=>{let a=this._observeElement(e).pipe(Ue(s=>s.filter(l=>!bm(l))),rr$1(s=>!!s.length)).subscribe(s=>{this._ngZone.run(()=>{r.next(s)})});return()=>{a.unsubscribe(),this._unobserveElement(e)}})}_observeElement(t){return this._ngZone.runOutsideAngular(()=>{if(this._observedElements.has(t))this._observedElements.get(t).count++;else{let e=new ee$1,r=this._mutationObserverFactory.create(o=>e.next(o));r&&r.observe(t,{characterData:!0,childList:!0,subtree:!0}),this._observedElements.set(t,{observer:r,stream:e,count:1})}return this._observedElements.get(t).stream})}_unobserveElement(t){this._observedElements.has(t)&&(this._observedElements.get(t).count--,this._observedElements.get(t).count||this._cleanupObserver(t))}_cleanupObserver(t){if(this._observedElements.has(t)){let{observer:e,stream:r}=this._observedElements.get(t);e&&e.disconnect(),r.complete(),this._observedElements.delete(t)}}static ɵfac=function(e){return new(e||n)};static ɵprov=$r({token:n,factory:n.ɵfac})}return n})();var P_=(()=>{class n{_contentObserver=v(ym);_elementRef=v(Wr);event=new Qe$1;get disabled(){return this._disabled}set disabled(t){this._disabled=t,this._disabled?this._unsubscribe():this._subscribe()}_disabled=!1;get debounce(){return this._debounce}set debounce(t){this._debounce=Ne(t),this._subscribe()}_debounce;_currentSubscription=null;ngAfterContentInit(){!this._currentSubscription&&!this.disabled&&this._subscribe()}ngOnDestroy(){this._unsubscribe()}_subscribe(){this._unsubscribe();let t=this._contentObserver.observe(this._elementRef);this._currentSubscription=(this.debounce?t.pipe(Qy(this.debounce)):t).subscribe(this.event)}_unsubscribe(){this._currentSubscription?.unsubscribe()}static ɵfac=function(e){return new(e||n)};static ɵdir=fw({type:n,selectors:[[``,`cdkObserveContent`,``]],inputs:{disabled:[2,`cdkObserveContentDisabled`,`disabled`,Nj],debounce:`debounce`},outputs:{event:`cdkObserveContent`},exportAs:[`cdkObserveContent`]})}return n})();var rc=(()=>{class n{_platform=v(z);isDisabled(t){return t.hasAttribute(`disabled`)}isVisible(t){return wm(t)&&getComputedStyle(t).visibility===`visible`}isTabbable(t){if(!this._platform.isBrowser)return!1;let e=_m(Mm(t));if(e&&(ic(e)===-1||!this.isVisible(e)))return!1;let r=t.nodeName.toLowerCase(),o=ic(t);return t.hasAttribute(`contenteditable`)?o!==-1:r===`iframe`||r===`object`||this._platform.WEBKIT&&this._platform.IOS&&!xm(t)?!1:r===`audio`?t.hasAttribute(`controls`)?o!==-1:!1:r===`video`?o===-1?!1:o!==null?!0:this._platform.FIREFOX||t.hasAttribute(`controls`):t.tabIndex>=0}isFocusable(t,e){return Im(t)&&!this.isDisabled(t)&&(e?.ignoreInert||!t.closest?.(`[inert]`))&&(e?.ignoreVisibility||this.isVisible(t))}static ɵfac=function(e){return new(e||n)};static ɵprov=$r({token:n,factory:n.ɵfac})}return n})();function _m(n){try{return n.frameElement}catch{return null}}function wm(n){return!!(n.offsetWidth||n.offsetHeight||typeof n.getClientRects==`function`&&n.getClientRects().length)}function Sm(n){let i=n.nodeName.toLowerCase();return i===`input`||i===`select`||i===`button`||i===`textarea`}function Cm(n){return Em(n)&&n.type==`hidden`}function Dm(n){return Rm(n)&&n.hasAttribute(`href`)}function Em(n){return n.nodeName.toLowerCase()==`input`}function Rm(n){return n.nodeName.toLowerCase()==`a`}function oc(n){if(!n.hasAttribute(`tabindex`)||n.tabIndex===void 0)return!1;let i=n.getAttribute(`tabindex`);return!!(i&&!isNaN(parseInt(i,10)))}function ic(n){if(!oc(n))return null;let i=parseInt(n.getAttribute(`tabindex`)||``,10);return isNaN(i)?-1:i}function xm(n){let i=n.nodeName.toLowerCase(),t=i===`input`&&n.type;return t===`text`||t===`password`||i===`select`||i===`textarea`}function Im(n){return Cm(n)?!1:Sm(n)||Dm(n)||n.hasAttribute(`contenteditable`)||oc(n)}function Mm(n){return n.ownerDocument&&n.ownerDocument.defaultView||window}var Dr=class{_element;_checker;_ngZone;_document;_injector;_startAnchor=null;_endAnchor=null;_hasAttached=!1;startAnchorListener=()=>{!this.focusLastTabbableElement()&&this._checker.isFocusable(this._element)&&this._element.focus()};endAnchorListener=()=>{!this.focusFirstTabbableElement()&&this._checker.isFocusable(this._element)&&this._element.focus()};get enabled(){return this._enabled}set enabled(i){this._enabled=i,this._startAnchor&&this._endAnchor&&(this._toggleAnchorTabIndex(i,this._startAnchor),this._toggleAnchorTabIndex(i,this._endAnchor))}_enabled=!0;constructor(i,t,e,r,o=!1,a){this._element=i,this._checker=t,this._ngZone=e,this._document=r,this._injector=a,o||this.attachAnchors()}destroy(){let i=this._startAnchor,t=this._endAnchor;i&&(i.removeEventListener(`focus`,this.startAnchorListener),i.remove()),t&&(t.removeEventListener(`focus`,this.endAnchorListener),t.remove()),this._startAnchor=this._endAnchor=null,this._hasAttached=!1}attachAnchors(){return this._hasAttached?!0:(this._ngZone.runOutsideAngular(()=>{this._startAnchor||(this._startAnchor=this._createAnchor(),this._startAnchor.addEventListener(`focus`,this.startAnchorListener)),this._endAnchor||(this._endAnchor=this._createAnchor(),this._endAnchor.addEventListener(`focus`,this.endAnchorListener))}),this._element.parentNode&&(this._element.parentNode.insertBefore(this._startAnchor,this._element),this._element.parentNode.insertBefore(this._endAnchor,this._element.nextSibling),this._hasAttached=!0),this._hasAttached)}focusInitialElementWhenReady(i){return new Promise(t=>{this._executeOnStable(()=>t(this.focusInitialElement(i)))})}focusFirstTabbableElementWhenReady(i){return new Promise(t=>{this._executeOnStable(()=>t(this.focusFirstTabbableElement(i)))})}focusLastTabbableElementWhenReady(i){return new Promise(t=>{this._executeOnStable(()=>t(this.focusLastTabbableElement(i)))})}_getRegionBoundary(i){let t=this._element.querySelectorAll(`[cdk-focus-region-${i}], [cdkFocusRegion${i}], [cdk-focus-${i}]`);return i==`start`?t.length?t[0]:this._getFirstTabbableElement(this._element):t.length?t[t.length-1]:this._getLastTabbableElement(this._element)}focusInitialElement(i){let t=this._element.querySelector(`[cdk-focus-initial], [cdkFocusInitial]`);if(t){if(!this._checker.isFocusable(t)){let e=this._getFirstTabbableElement(t);return e?.focus(i),!!e}return t.focus(i),!0}return this.focusFirstTabbableElement(i)}focusFirstTabbableElement(i){let t=this._getRegionBoundary(`start`);return t&&t.focus(i),!!t}focusLastTabbableElement(i){let t=this._getRegionBoundary(`end`);return t&&t.focus(i),!!t}hasAttached(){return this._hasAttached}_getFirstTabbableElement(i){if(this._checker.isFocusable(i)&&this._checker.isTabbable(i))return i;let t=i.children;for(let e=0;e<t.length;e++){let r=t[e].nodeType===this._document.ELEMENT_NODE?this._getFirstTabbableElement(t[e]):null;if(r)return r}return null}_getLastTabbableElement(i){if(this._checker.isFocusable(i)&&this._checker.isTabbable(i))return i;let t=i.children;for(let e=t.length-1;e>=0;e--){let r=t[e].nodeType===this._document.ELEMENT_NODE?this._getLastTabbableElement(t[e]):null;if(r)return r}return null}_createAnchor(){let i=this._document.createElement(`div`);return this._toggleAnchorTabIndex(this._enabled,i),i.classList.add(`cdk-visually-hidden`),i.classList.add(`cdk-focus-trap-anchor`),i.setAttribute(`aria-hidden`,`true`),i}_toggleAnchorTabIndex(i,t){i?t.setAttribute(`tabindex`,`0`):t.removeAttribute(`tabindex`)}toggleAnchors(i){this._startAnchor&&this._endAnchor&&(this._toggleAnchorTabIndex(i,this._startAnchor),this._toggleAnchorTabIndex(i,this._endAnchor))}_executeOnStable(i){Dh$1(i,{injector:this._injector})}};var Am=(()=>{class n{_checker=v(rc);_ngZone=v(Fe$1);_document=v(mt);_injector=v(se);constructor(){v(Dt).load(vr)}create(t,e=!1){return new Dr(t,this._checker,this._ngZone,this._document,e,this._injector)}static ɵfac=function(e){return new(e||n)};static ɵprov=$r({token:n,factory:n.ɵfac})}return n})();var ac=new S(`liveAnnouncerElement`,{providedIn:`root`,factory:()=>null});var sc=new S(`LIVE_ANNOUNCER_DEFAULT_OPTIONS`);var Tm=0;var Nm=(()=>{class n{_ngZone=v(Fe$1);_defaultOptions=v(sc,{optional:!0});_liveElement;_document=v(mt);_sanitizer=v(Mn$1);_previousTimeout;_currentPromise;_currentResolve;constructor(){let t=v(ac,{optional:!0});this._liveElement=t||this._createLiveElement()}announce(t,...e){let r=this._defaultOptions,o,a;return e.length===1&&typeof e[0]==`number`?a=e[0]:[o,a]=e,this.clear(),clearTimeout(this._previousTimeout),o||(o=r&&r.politeness?r.politeness:`polite`),a==null&&r&&(a=r.duration),this._liveElement.setAttribute(`aria-live`,o),this._liveElement.id&&this._exposeAnnouncerToModals(this._liveElement.id),this._ngZone.runOutsideAngular(()=>(this._currentPromise||(this._currentPromise=new Promise(s=>this._currentResolve=s)),clearTimeout(this._previousTimeout),this._previousTimeout=setTimeout(()=>{!t||typeof t==`string`?this._liveElement.textContent=t:Bl(this._liveElement,t,this._sanitizer),typeof a==`number`&&(this._previousTimeout=setTimeout(()=>this.clear(),a)),this._currentResolve?.(),this._currentPromise=this._currentResolve=void 0},100),this._currentPromise))}clear(){this._liveElement&&(this._liveElement.textContent=``)}ngOnDestroy(){clearTimeout(this._previousTimeout),this._liveElement?.remove(),this._liveElement=null,this._currentResolve?.(),this._currentPromise=this._currentResolve=void 0}_createLiveElement(){let t=`cdk-live-announcer-element`,e=this._document.getElementsByClassName(t),r=this._document.createElement(`div`);for(let o=0;o<e.length;o++)e[o].remove();return r.classList.add(t),r.classList.add(`cdk-visually-hidden`),r.setAttribute(`aria-atomic`,`true`),r.setAttribute(`aria-live`,`polite`),r.id=`cdk-live-announcer-${Tm++}`,this._document.body.appendChild(r),r}_exposeAnnouncerToModals(t){let e=this._document.querySelectorAll(`body > .cdk-overlay-container [aria-modal="true"]`);for(let r=0;r<e.length;r++){let o=e[r],a=o.getAttribute(`aria-owns`);a?a.indexOf(t)===-1&&o.setAttribute(`aria-owns`,a+` `+t):o.setAttribute(`aria-owns`,t)}}static ɵfac=function(e){return new(e||n)};static ɵprov=$r({token:n,factory:n.ɵfac})}return n})();var Om=200;var Er=class{_letterKeyStream=new ee$1;_items=[];_selectedItemIndex=-1;_pressedLetters=[];_skipPredicateFn;_selectedItem=new ee$1;selectedItem=this._selectedItem;constructor(i,t){let e=typeof t?.debounceInterval==`number`?t.debounceInterval:Om;t?.skipPredicate&&(this._skipPredicateFn=t.skipPredicate),this.setItems(i),this._setupKeyHandler(e)}destroy(){this._pressedLetters=[],this._letterKeyStream.complete(),this._selectedItem.complete()}setCurrentSelectedItemIndex(i){this._selectedItemIndex=i}setItems(i){this._items=i}handleKey(i){let t=i.keyCode;i.key&&i.key.length===1?this._letterKeyStream.next(i.key.toLocaleUpperCase()):(t>=65&&t<=90||t>=48&&t<=57)&&this._letterKeyStream.next(String.fromCharCode(t))}isTyping(){return this._pressedLetters.length>0}reset(){this._pressedLetters=[]}_setupKeyHandler(i){this._letterKeyStream.pipe(ju$1(t=>this._pressedLetters.push(t)),Qy(i),rr$1(()=>this._pressedLetters.length>0),Ue(()=>this._pressedLetters.join(``).toLocaleUpperCase())).subscribe(t=>{for(let e=1;e<this._items.length+1;e++){let r=(this._selectedItemIndex+e)%this._items.length,o=this._items[r];if(!this._skipPredicateFn?.(o)&&o.getLabel?.().toLocaleUpperCase().trim().indexOf(t)===0){this._selectedItem.next(o);break}}this._pressedLetters=[]})}};var Rr=class{_items;_activeItemIndex=Et$1(-1);_activeItem=Et$1(null);_wrap=!1;_typeaheadSubscription=K.EMPTY;_itemChangesSubscription;_vertical=!0;_horizontal=null;_allowedModifierKeys=[];_homeAndEnd=!1;_pageUpAndDown={enabled:!1,delta:10};_effectRef;_typeahead;_skipPredicateFn=i=>i.disabled;constructor(i,t){this._items=i,i instanceof Mi$1?this._itemChangesSubscription=i.changes.subscribe(e=>this._itemsChanged(e.toArray())):Nr$1(i)&&(this._effectRef=ja(()=>this._itemsChanged(i()),{injector:t}))}tabOut=new ee$1;change=new ee$1;skipPredicate(i){return this._skipPredicateFn=i,this}withWrap(i=!0){return this._wrap=i,this}withVerticalOrientation(i=!0){return this._vertical=i,this}withHorizontalOrientation(i){return this._horizontal=i,this}withAllowedModifierKeys(i){return this._allowedModifierKeys=i,this}withTypeAhead(i=200){this._typeaheadSubscription.unsubscribe();let t=this._getItemsArray();return this._typeahead=new Er(t,{debounceInterval:typeof i==`number`?i:void 0,skipPredicate:e=>this._skipPredicateFn(e)}),this._typeaheadSubscription=this._typeahead.selectedItem.subscribe(e=>{this.setActiveItem(e)}),this}cancelTypeahead(){return this._typeahead?.reset(),this}withHomeAndEnd(i=!0){return this._homeAndEnd=i,this}withPageUpDown(i=!0,t=10){return this._pageUpAndDown={enabled:i,delta:t},this}setActiveItem(i){let t=this._activeItem();this.updateActiveItem(i),this._activeItem()!==t&&this.change.next(this._activeItemIndex())}onKeydown(i){let t=i.keyCode,r=[`altKey`,`ctrlKey`,`metaKey`,`shiftKey`].every(o=>!i[o]||this._allowedModifierKeys.indexOf(o)>-1);switch(t){case 9:this.tabOut.next();return;case 40:if(this._vertical&&r){this.setNextItemActive();break}else return;case 38:if(this._vertical&&r){this.setPreviousItemActive();break}else return;case 39:if(this._horizontal&&r){this._horizontal===`rtl`?this.setPreviousItemActive():this.setNextItemActive();break}else return;case 37:if(this._horizontal&&r){this._horizontal===`rtl`?this.setNextItemActive():this.setPreviousItemActive();break}else return;case 36:if(this._homeAndEnd&&r){this.setFirstItemActive();break}else return;case 35:if(this._homeAndEnd&&r){this.setLastItemActive();break}else return;case 33:if(this._pageUpAndDown.enabled&&r){let o=this._activeItemIndex()-this._pageUpAndDown.delta;this._setActiveItemByIndex(o>0?o:0,1);break}else return;case 34:if(this._pageUpAndDown.enabled&&r){let o=this._activeItemIndex()+this._pageUpAndDown.delta,a=this._getItemsArray().length;this._setActiveItemByIndex(o<a?o:a-1,-1);break}else return;default:(r||_r(i,`shiftKey`))&&this._typeahead?.handleKey(i);return}this._typeahead?.reset(),i.preventDefault()}get activeItemIndex(){return this._activeItemIndex()}get activeItem(){return this._activeItem()}isTyping(){return!!this._typeahead&&this._typeahead.isTyping()}setFirstItemActive(){this._setActiveItemByIndex(0,1)}setLastItemActive(){this._setActiveItemByIndex(this._getItemsArray().length-1,-1)}setNextItemActive(){this._activeItemIndex()<0?this.setFirstItemActive():this._setActiveItemByDelta(1)}setPreviousItemActive(){this._activeItemIndex()<0&&this._wrap?this.setLastItemActive():this._setActiveItemByDelta(-1)}updateActiveItem(i){let t=this._getItemsArray(),e=typeof i==`number`?i:t.indexOf(i),r=t[e];this._activeItem.set(r??null),this._activeItemIndex.set(e),this._typeahead?.setCurrentSelectedItemIndex(e)}destroy(){this._typeaheadSubscription.unsubscribe(),this._itemChangesSubscription?.unsubscribe(),this._effectRef?.destroy(),this._typeahead?.destroy(),this.tabOut.complete(),this.change.complete()}_setActiveItemByDelta(i){this._wrap?this._setActiveInWrapMode(i):this._setActiveInDefaultMode(i)}_setActiveInWrapMode(i){let t=this._getItemsArray();for(let e=1;e<=t.length;e++){let r=(this._activeItemIndex()+i*e+t.length)%t.length,o=t[r];if(!this._skipPredicateFn(o)){this.setActiveItem(r);return}}}_setActiveInDefaultMode(i){this._setActiveItemByIndex(this._activeItemIndex()+i,i)}_setActiveItemByIndex(i,t){let e=this._getItemsArray();if(e[i]){for(;this._skipPredicateFn(e[i]);)if(i+=t,!e[i])return;this.setActiveItem(i)}}_getItemsArray(){return Nr$1(this._items)?this._items():this._items instanceof Mi$1?this._items.toArray():this._items}_itemsChanged(i){this._typeahead?.setItems(i);let t=this._activeItem();if(t){let e=i.indexOf(t);e>-1&&e!==this._activeItemIndex()&&(this._activeItemIndex.set(e),this._typeahead?.setCurrentSelectedItemIndex(e))}}};var ia=class extends Rr{_origin=`program`;setFocusOrigin(i){return this._origin=i,this}setActiveItem(i){super.setActiveItem(i),this.activeItem&&this.activeItem.focus(this._origin)}};var lc=/* @__PURE__ */ new Map;var Jn=class n{_appId=v(It);static _infix=`a${Math.floor(Math.random()*1e5).toString()}`;getId(i,t=!1){this._appId!==`ng`&&(i+=this._appId);let e=lc.get(i);return e===void 0?e=0:e++,lc.set(i,e),`${i}${t?n._infix+`-`:``}${e}`}static ɵfac=function(t){return new(t||n)};static ɵprov=$r({token:n,factory:n.ɵfac})};var dc=` `;function km(n,i,t){let e=Ir(n,i);t=t.trim(),!e.some(r=>r.trim()===t)&&(e.push(t),n.setAttribute(i,e.join(dc)))}function Pm(n,i,t){let e=Ir(n,i);t=t.trim();let r=e.filter(o=>o!==t);r.length?n.setAttribute(i,r.join(dc)):n.removeAttribute(i)}function Ir(n,i){return n.getAttribute(i)?.match(/\S+/g)??[]}var uc=`cdk-describedby-message`;var xr=`cdk-describedby-host`;var oa=0;var hc=(()=>{class n{_platform=v(z);_document=v(mt);_messageRegistry=/* @__PURE__ */ new Map;_messagesContainer=null;_id=`${oa++}`;constructor(){v(Dt).load(vr),this._id=v(It)+`-`+oa++}describe(t,e,r){if(!this._canBeDescribed(t,e))return;let o=ra(e,r);typeof e!=`string`?(cc(e,this._id),this._messageRegistry.set(o,{messageElement:e,referenceCount:0})):this._messageRegistry.has(o)||this._createMessageElement(e,r),this._isElementDescribedByMessage(t,o)||this._addMessageReference(t,o)}removeDescription(t,e,r){if(!e||!this._isElementNode(t))return;let o=ra(e,r);if(this._isElementDescribedByMessage(t,o)&&this._removeMessageReference(t,o),typeof e==`string`){let a=this._messageRegistry.get(o);a&&a.referenceCount===0&&this._deleteMessageElement(o)}this._messagesContainer?.childNodes.length===0&&(this._messagesContainer.remove(),this._messagesContainer=null)}ngOnDestroy(){let t=this._document.querySelectorAll(`[${xr}="${this._id}"]`);for(let e=0;e<t.length;e++)this._removeCdkDescribedByReferenceIds(t[e]),t[e].removeAttribute(xr);this._messagesContainer?.remove(),this._messagesContainer=null,this._messageRegistry.clear()}_createMessageElement(t,e){let r=this._document.createElement(`div`);cc(r,this._id),r.textContent=t,e&&r.setAttribute(`role`,e),this._createMessagesContainer(),this._messagesContainer.appendChild(r),this._messageRegistry.set(ra(t,e),{messageElement:r,referenceCount:0})}_deleteMessageElement(t){this._messageRegistry.get(t)?.messageElement?.remove(),this._messageRegistry.delete(t)}_createMessagesContainer(){if(this._messagesContainer)return;let t=`cdk-describedby-message-container`,e=this._document.querySelectorAll(`.${t}[platform="server"]`);for(let o=0;o<e.length;o++)e[o].remove();let r=this._document.createElement(`div`);r.style.visibility=`hidden`,r.classList.add(t),r.classList.add(`cdk-visually-hidden`),this._platform.isBrowser||r.setAttribute(`platform`,`server`),this._document.body.appendChild(r),this._messagesContainer=r}_removeCdkDescribedByReferenceIds(t){let e=Ir(t,`aria-describedby`).filter(r=>r.indexOf(uc)!=0);t.setAttribute(`aria-describedby`,e.join(` `))}_addMessageReference(t,e){let r=this._messageRegistry.get(e);km(t,`aria-describedby`,r.messageElement.id),t.setAttribute(xr,this._id),r.referenceCount++}_removeMessageReference(t,e){let r=this._messageRegistry.get(e);r.referenceCount--,Pm(t,`aria-describedby`,r.messageElement.id),t.removeAttribute(xr)}_isElementDescribedByMessage(t,e){let r=Ir(t,`aria-describedby`),o=this._messageRegistry.get(e),a=o&&o.messageElement.id;return!!a&&r.indexOf(a)!=-1}_canBeDescribed(t,e){if(!this._isElementNode(t))return!1;if(e&&typeof e==`object`)return!0;let r=e==null?``:`${e}`.trim(),o=t.getAttribute(`aria-label`);return r?!o||o.trim()!==r:!1}_isElementNode(t){return t.nodeType===this._document.ELEMENT_NODE}static ɵfac=function(e){return new(e||n)};static ɵprov=$r({token:n,factory:n.ɵfac})}return n})();function ra(n,i){return typeof n==`string`?`${i||``}/${n}`:n}function cc(n,i){n.id||(n.id=`${uc}-${i}-${oa++}`)}var Fm=20;var gn$1=(()=>{class n{_ngZone=v(Fe$1);_platform=v(z);_renderer=v(Vr).createRenderer(null,null);_cleanupGlobalListener;_scrolled=new ee$1;_scrolledCount=0;scrollContainers=/* @__PURE__ */ new Map;register(t){this.scrollContainers.has(t)||this.scrollContainers.set(t,t.elementScrolled().subscribe(()=>this._scrolled.next(t)))}deregister(t){let e=this.scrollContainers.get(t);e&&(e.unsubscribe(),this.scrollContainers.delete(t))}scrolled(t=Fm){return this._platform.isBrowser?new x(e=>{this._cleanupGlobalListener||(this._cleanupGlobalListener=this._ngZone.runOutsideAngular(()=>this._renderer.listen(`document`,`scroll`,()=>this._scrolled.next())));let r=t>0?this._scrolled.pipe(qy$1(t)).subscribe(e):this._scrolled.subscribe(e);return this._scrolledCount++,()=>{r.unsubscribe(),this._scrolledCount--,this._scrolledCount||(this._cleanupGlobalListener?.(),this._cleanupGlobalListener=void 0)}}):Ay()}ngOnDestroy(){this._cleanupGlobalListener?.(),this._cleanupGlobalListener=void 0,this.scrollContainers.forEach((t,e)=>this.deregister(e)),this._scrolled.complete()}ancestorScrolled(t,e){let r=this.getAncestorScrollContainers(t);return this.scrolled(e).pipe(rr$1(o=>!o||r.indexOf(o)>-1))}getAncestorScrollContainers(t){let e=[];return this.scrollContainers.forEach((r,o)=>{this._targetContainsElement(o,t)&&e.push(o)}),e}_targetContainsElement(t,e){let r=Et(e),o=t.getElementRef().nativeElement;do if(r==o)return!0;while(r=r.parentElement);return!1}static ɵfac=function(e){return new(e||n)};static ɵprov=$r({token:n,factory:n.ɵfac})}return n})();var Lm=(()=>{class n{elementRef=v(Wr);scrollDispatcher=v(gn$1);ngZone=v(Fe$1);dir=v(Te$1,{optional:!0});_scrollElement=this.elementRef.nativeElement;_destroyed=new ee$1;_renderer=v(Ic$1);_cleanupScroll;_elementScrolled=new ee$1;ngOnInit(){this._cleanupScroll=this.ngZone.runOutsideAngular(()=>this._renderer.listen(this._scrollElement,`scroll`,t=>this._elementScrolled.next(t))),this.scrollDispatcher.register(this)}ngOnDestroy(){this._cleanupScroll?.(),this._elementScrolled.complete(),this.scrollDispatcher.deregister(this),this._destroyed.next(),this._destroyed.complete()}elementScrolled(){return this._elementScrolled}getElementRef(){return this.elementRef}scrollTo(t){let e=this.elementRef.nativeElement,r=this.dir&&this.dir.value==`rtl`;t.left??=r?t.end:t.start,t.right??=r?t.start:t.end,t.bottom!=null&&(t.top=e.scrollHeight-e.clientHeight-t.bottom),r&&un()!=Bt.NORMAL?(t.left!=null&&(t.right=e.scrollWidth-e.clientWidth-t.left),un()==Bt.INVERTED?t.left=t.right:un()==Bt.NEGATED&&(t.left=t.right?-t.right:t.right)):t.right!=null&&(t.left=e.scrollWidth-e.clientWidth-t.right),this._applyScrollToOptions(t)}_applyScrollToOptions(t){let e=this.elementRef.nativeElement;Sr()?e.scrollTo(t):(t.top!=null&&(e.scrollTop=t.top),t.left!=null&&(e.scrollLeft=t.left))}measureScrollOffset(t){let e=`left`,r=`right`,o=this.elementRef.nativeElement;if(t==`top`)return o.scrollTop;if(t==`bottom`)return o.scrollHeight-o.clientHeight-o.scrollTop;let a=this.dir&&this.dir.value==`rtl`;return t==`start`?t=a?r:e:t==`end`&&(t=a?e:r),a&&un()==Bt.INVERTED?t==e?o.scrollWidth-o.clientWidth-o.scrollLeft:o.scrollLeft:a&&un()==Bt.NEGATED?t==e?o.scrollLeft+o.scrollWidth-o.clientWidth:-o.scrollLeft:t==e?o.scrollLeft:o.scrollWidth-o.clientWidth-o.scrollLeft}static ɵfac=function(e){return new(e||n)};static ɵdir=fw({type:n,selectors:[[``,`cdk-scrollable`,``],[``,`cdkScrollable`,``]]})}return n})();var Bm=20;var Qn=(()=>{class n{_platform=v(z);_listeners;_viewportSize=null;_change=new ee$1;_document=v(mt);constructor(){let t=v(Fe$1),e=v(Vr).createRenderer(null,null);t.runOutsideAngular(()=>{if(this._platform.isBrowser){let r=o=>this._change.next(o);this._listeners=[e.listen(`window`,`resize`,r),e.listen(`window`,`orientationchange`,r)]}this.change().subscribe(()=>this._viewportSize=null)})}ngOnDestroy(){this._listeners?.forEach(t=>t()),this._change.complete()}getViewportSize(){this._viewportSize||this._updateViewportSize();let t={width:this._viewportSize.width,height:this._viewportSize.height};return this._platform.isBrowser||(this._viewportSize=null),t}getViewportRect(){let t=this.getViewportScrollPosition(),{width:e,height:r}=this.getViewportSize();return{top:t.top,left:t.left,bottom:t.top+r,right:t.left+e,height:r,width:e}}getViewportScrollPosition(){if(!this._platform.isBrowser)return{top:0,left:0};let t=this._document,e=this._getWindow(),r=t.documentElement,o=r.getBoundingClientRect();return{top:-o.top||t.body?.scrollTop||e.scrollY||r.scrollTop||0,left:-o.left||t.body?.scrollLeft||e.scrollX||r.scrollLeft||0}}change(t=Bm){return t>0?this._change.pipe(qy$1(t)):this._change}_getWindow(){return this._document.defaultView||window}_updateViewportSize(){let t=this._getWindow();this._viewportSize=this._platform.isBrowser?{width:t.innerWidth,height:t.innerHeight}:{width:0,height:0}}static ɵfac=function(e){return new(e||n)};static ɵprov=$r({token:n,factory:n.ɵfac})}return n})();var ti=class{_attachedHost=null;attach(i){return this._attachedHost=i,i.attach(this)}detach(){let i=this._attachedHost;i!=null&&(this._attachedHost=null,i.detach())}get isAttached(){return this._attachedHost!=null}setAttachedHost(i){this._attachedHost=i}};var ei=class extends ti{component;viewContainerRef;injector;projectableNodes;bindings;directives;constructor(i,t,e,r,o,a){super(),this.component=i,this.viewContainerRef=t,this.injector=e,this.projectableNodes=r,this.bindings=o||null,this.directives=a||null}};var ni=class extends ti{templateRef;viewContainerRef;context;injector;constructor(i,t,e,r){super(),this.templateRef=i,this.viewContainerRef=t,this.context=e,this.injector=r}get origin(){return this.templateRef.elementRef}attach(i,t=this.context){return this.context=t,super.attach(i)}detach(){return this.context=void 0,super.detach()}};var aa=class extends ti{element;constructor(i){super(),this.element=i instanceof Wr?i.nativeElement:i}};var Mr=class{_attachedPortal=null;_disposeFn=null;_isDisposed=!1;hasAttached(){return!!this._attachedPortal}attach(i){if(i instanceof ei)return this._attachedPortal=i,this.attachComponentPortal(i);if(i instanceof ni)return this._attachedPortal=i,this.attachTemplatePortal(i);if(this.attachDomPortal&&i instanceof aa)return this._attachedPortal=i,this.attachDomPortal(i)}attachDomPortal=null;detach(){this._attachedPortal&&(this._attachedPortal.setAttachedHost(null),this._attachedPortal=null),this._invokeDisposeFn()}dispose(){this.hasAttached()&&this.detach(),this._invokeDisposeFn(),this._isDisposed=!0}setDisposeFn(i){this._disposeFn=i}_invokeDisposeFn(){this._disposeFn&&(this._disposeFn(),this._disposeFn=null)}};var Ar=class extends Mr{outletElement;_appRef;_defaultInjector;constructor(i,t,e){super(),this.outletElement=i,this._appRef=t,this._defaultInjector=e}attachComponentPortal(i){let t;if(i.viewContainerRef){let e=i.injector||i.viewContainerRef.injector,r=e.get(Un$1,null,{optional:!0})||void 0;t=i.viewContainerRef.createComponent(i.component,{index:i.viewContainerRef.length,injector:e,ngModuleRef:r,projectableNodes:i.projectableNodes||void 0,bindings:i.bindings||void 0,directives:i.directives||void 0}),this.setDisposeFn(()=>t.destroy())}else{let e=this._appRef,r=i.injector||this._defaultInjector||se.NULL,o=r.get(Ee$1,e.injector);t=Aj(i.component,{elementInjector:r,environmentInjector:o,projectableNodes:i.projectableNodes||void 0,bindings:i.bindings||void 0,directives:i.directives||void 0}),e.attachView(t.hostView),this.setDisposeFn(()=>{e.viewCount>0&&e.detachView(t.hostView),t.destroy()})}return this.outletElement.appendChild(this._getComponentRootNode(t)),this._attachedPortal=i,t}attachTemplatePortal(i){let t=i.viewContainerRef,e=t.createEmbeddedView(i.templateRef,i.context,{injector:i.injector});return e.rootNodes.forEach(r=>this.outletElement.appendChild(r)),e.detectChanges(),this.setDisposeFn(()=>{let r=t.indexOf(e);r!==-1&&t.remove(r)}),this._attachedPortal=i,e}attachDomPortal=i=>{let t=i.element;t.parentNode;let e=this.outletElement.ownerDocument.createComment(`dom-portal`);t.parentNode.insertBefore(e,t),this.outletElement.appendChild(t),this._attachedPortal=i,super.setDisposeFn(()=>{e.parentNode&&e.parentNode.replaceChild(t,e)})};dispose(){super.dispose(),this.outletElement.remove()}_getComponentRootNode(i){return i.hostView.rootNodes[0]}};var c0=(()=>{class n extends ni{constructor(){let t=v(Fr$1),e=v(is$1);super(t,e)}static ɵfac=function(e){return new(e||n)};static ɵdir=fw({type:n,selectors:[[``,`cdkPortal`,``]],exportAs:[`cdkPortal`],features:[Og]})}return n})();var d0=(()=>{class n extends Mr{_moduleRef=v(Un$1,{optional:!0});_document=v(mt);_viewContainerRef=v(is$1);_isInitialized=!1;_attachedRef=null;get portal(){return this._attachedPortal}set portal(t){this.hasAttached()&&!t&&!this._isInitialized||(this.hasAttached()&&super.detach(),t&&super.attach(t),this._attachedPortal=t||null)}attached=new Qe$1;get attachedRef(){return this._attachedRef}ngOnInit(){this._isInitialized=!0}ngOnDestroy(){super.dispose(),this._attachedRef=this._attachedPortal=null}attachComponentPortal(t){t.setAttachedHost(this);let e=t.viewContainerRef!=null?t.viewContainerRef:this._viewContainerRef,r=e.createComponent(t.component,{index:e.length,injector:t.injector||e.injector,projectableNodes:t.projectableNodes||void 0,ngModuleRef:this._moduleRef||void 0,bindings:t.bindings||void 0,directives:t.directives||void 0});return e!==this._viewContainerRef&&this._insertContent(r.hostView.rootNodes[0]),super.setDisposeFn(()=>r.destroy()),this._attachedPortal=t,this._attachedRef=r,this.attached.emit(r),r}attachTemplatePortal(t){t.setAttachedHost(this);let e=this._viewContainerRef.createEmbeddedView(t.templateRef,t.context,{injector:t.injector});return super.setDisposeFn(()=>this._viewContainerRef.clear()),this._attachedPortal=t,this._attachedRef=e,this.attached.emit(e),e}attachDomPortal=t=>{let e=t.element;e.parentNode;let r=this._document.createComment(`dom-portal`);t.setAttachedHost(this),e.parentNode.insertBefore(r,e),this._insertContent(e),this._attachedPortal=t,super.setDisposeFn(()=>r.parentNode?.replaceChild(e,r))};_insertContent(t){let e=this._viewContainerRef.element.nativeElement;e.nodeType===e.ELEMENT_NODE?e.appendChild(t):e.parentNode?.insertBefore(t,e)}static ɵfac=(()=>{let t;return function(r){return(t||(t=RE(n)))(r||n)}})();static ɵdir=fw({type:n,selectors:[[``,`cdkPortalOutlet`,``]],inputs:{portal:[0,`cdkPortalOutlet`,`portal`]},outputs:{attached:`attached`},exportAs:[`cdkPortalOutlet`],features:[Og]})}return n})();var mc=Sr();function Um(n){return new Tr(n.get(Qn),n.get(mt))}var Tr=class{_viewportRuler;_previousHTMLStyles={top:``,left:``};_previousScrollPosition;_isEnabled=!1;_document;constructor(i,t){this._viewportRuler=i,this._document=t}attach(){}enable(){if(this._canBeEnabled()){let i=this._document.documentElement;this._previousScrollPosition=this._viewportRuler.getViewportScrollPosition(),this._previousHTMLStyles.left=i.style.left||``,this._previousHTMLStyles.top=i.style.top||``,i.style.left=$(-this._previousScrollPosition.left),i.style.top=$(-this._previousScrollPosition.top),i.classList.add(`cdk-global-scrollblock`),this._isEnabled=!0}}disable(){if(this._isEnabled){let i=this._document.documentElement,t=this._document.body,e=i.style,r=t.style,o=e.scrollBehavior||``,a=r.scrollBehavior||``;this._isEnabled=!1,e.left=this._previousHTMLStyles.left,e.top=this._previousHTMLStyles.top,i.classList.remove(`cdk-global-scrollblock`),mc&&(e.scrollBehavior=r.scrollBehavior=`auto`),window.scroll(this._previousScrollPosition.left,this._previousScrollPosition.top),mc&&(e.scrollBehavior=o,r.scrollBehavior=a)}}_canBeEnabled(){if(this._document.documentElement.classList.contains(`cdk-global-scrollblock`)||this._isEnabled)return!1;let t=this._document.documentElement,e=this._viewportRuler.getViewportSize();return t.scrollHeight>e.height||t.scrollWidth>e.width}};var Nr=class{enable(){}disable(){}attach(){}};function la(n,i){return i.some(t=>{let e=n.bottom<t.top,r=n.top>t.bottom,o=n.right<t.left,a=n.left>t.right;return e||r||o||a})}function pc(n,i){return i.some(t=>{let e=n.top<t.top,r=n.bottom>t.bottom,o=n.left<t.left,a=n.right>t.right;return e||r||o||a})}function da(n,i){return new Or(n.get(gn$1),n.get(Qn),n.get(Fe$1),i)}var Or=class{_scrollDispatcher;_viewportRuler;_ngZone;_config;_scrollSubscription=null;_overlayRef;constructor(i,t,e,r){this._scrollDispatcher=i,this._viewportRuler=t,this._ngZone=e,this._config=r}attach(i){this._overlayRef,this._overlayRef=i}enable(){if(!this._scrollSubscription){let i=this._config?this._config.scrollThrottle:0;this._scrollSubscription=this._scrollDispatcher.scrolled(i).subscribe(()=>{if(this._overlayRef.updatePosition(),this._config&&this._config.autoClose){let t=this._overlayRef.overlayElement.getBoundingClientRect(),{width:e,height:r}=this._viewportRuler.getViewportSize();la(t,[{width:e,height:r,bottom:r,right:e,top:0,left:0}])&&(this.disable(),this._ngZone.run(()=>this._overlayRef.detach()))}})}}disable(){this._scrollSubscription&&(this._scrollSubscription.unsubscribe(),this._scrollSubscription=null)}detach(){this.disable(),this._overlayRef=null}};var kr=class{positionStrategy;scrollStrategy=new Nr;panelClass=``;hasBackdrop=!1;backdropClass=`cdk-overlay-dark-backdrop`;disableAnimations;width;height;minWidth;minHeight;maxWidth;maxHeight;direction;disposeOnNavigation=!1;usePopover;eventPredicate;constructor(i){if(i){let t=Object.keys(i);for(let e of t)i[e]!==void 0&&(this[e]=i[e])}}};var Pr=class{connectionPair;scrollableViewProperties;constructor(i,t){this.connectionPair=i,this.scrollableViewProperties=t}};var _c=(()=>{class n{_attachedOverlays=[];_document=v(mt);_isAttached=!1;ngOnDestroy(){this.detach()}add(t){this.remove(t),this._attachedOverlays.push(t)}remove(t){let e=this._attachedOverlays.indexOf(t);e>-1&&this._attachedOverlays.splice(e,1),this._attachedOverlays.length===0&&this.detach()}canReceiveEvent(t,e,r){return r.observers.length<1?!1:t.eventPredicate?t.eventPredicate(e):!0}static ɵfac=function(e){return new(e||n)};static ɵprov=$r({token:n,factory:n.ɵfac})}return n})();var wc=(()=>{class n extends _c{_ngZone=v(Fe$1);_renderer=v(Vr).createRenderer(null,null);_cleanupKeydown;add(t){super.add(t),this._isAttached||(this._ngZone.runOutsideAngular(()=>{this._cleanupKeydown=this._renderer.listen(`body`,`keydown`,this._keydownListener)}),this._isAttached=!0)}detach(){this._isAttached&&(this._cleanupKeydown?.(),this._isAttached=!1)}_keydownListener=t=>{let e=this._attachedOverlays;for(let r=e.length-1;r>-1;r--){let o=e[r];if(this.canReceiveEvent(o,t,o._keydownEvents)){this._ngZone.run(()=>o._keydownEvents.next(t));break}}};static ɵfac=function(e){return new(e||n)};static ɵprov=$r({token:n,factory:n.ɵfac})}return n})();var Sc=(()=>{class n extends _c{_platform=v(z);_ngZone=v(Fe$1);_renderer=v(Vr).createRenderer(null,null);_cursorOriginalValue;_cursorStyleIsSet=!1;_pointerDownEventTarget=null;_cleanups;add(t){if(super.add(t),!this._isAttached){let e=this._document.body,r={capture:!0},o=this._renderer;this._cleanups=this._ngZone.runOutsideAngular(()=>[o.listen(e,`pointerdown`,this._pointerDownListener,r),o.listen(e,`click`,this._clickListener,r),o.listen(e,`auxclick`,this._clickListener,r),o.listen(e,`contextmenu`,this._clickListener,r)]),this._platform.IOS&&!this._cursorStyleIsSet&&(this._cursorOriginalValue=e.style.cursor,e.style.cursor=`pointer`,this._cursorStyleIsSet=!0),this._isAttached=!0}}detach(){this._isAttached&&(this._cleanups?.forEach(t=>t()),this._cleanups=void 0,this._platform.IOS&&this._cursorStyleIsSet&&(this._document.body.style.cursor=this._cursorOriginalValue,this._cursorStyleIsSet=!1),this._isAttached=!1)}_pointerDownListener=t=>{this._pointerDownEventTarget=ct(t)};_clickListener=t=>{let e=ct(t),r=t.type===`click`&&this._pointerDownEventTarget?this._pointerDownEventTarget:e;this._pointerDownEventTarget=null;let o=this._attachedOverlays.slice();for(let a=o.length-1;a>-1;a--){let s=o[a],l=s._outsidePointerEvents;if(!(!s.hasAttached()||!this.canReceiveEvent(s,t,l))){if(fc(s.overlayElement,e)||fc(s.overlayElement,r))break;this._ngZone?this._ngZone.run(()=>l.next(t)):l.next(t)}}};static ɵfac=function(e){return new(e||n)};static ɵprov=$r({token:n,factory:n.ɵfac})}return n})();function fc(n,i){let t=typeof ShadowRoot<`u`&&ShadowRoot,e=i;for(;e;){if(e===n)return!0;e=t&&e instanceof ShadowRoot?e.host:e.parentNode}return!1}var Cc=(()=>{class n{static ɵfac=function(e){return new(e||n)};static ɵcmp=aw({type:n,selectors:[[`ng-component`]],hostAttrs:[`cdk-overlay-style-loader`,``],decls:0,vars:0,template:function(e,r){},styles:[`.cdk-overlay-container, .cdk-global-overlay-wrapper {
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
`],encapsulation:2})}return n})();var Dc=(()=>{class n{_platform=v(z);_containerElement;_document=v(mt);_styleLoader=v(Dt);ngOnDestroy(){this._containerElement?.remove()}getContainerElement(){return this._loadStyles(),this._containerElement||this._createContainer(),this._containerElement}_createContainer(){let t=`cdk-overlay-container`;if(this._platform.isBrowser||ea()){let r=this._document.querySelectorAll(`.${t}[platform="server"], .${t}[platform="test"]`);for(let o=0;o<r.length;o++)r[o].remove()}let e=this._document.createElement(`div`);e.classList.add(t),ea()?e.setAttribute(`platform`,`test`):this._platform.isBrowser||e.setAttribute(`platform`,`server`),this._document.body.appendChild(e),this._containerElement=e}_loadStyles(){this._styleLoader.load(Cc)}static ɵfac=function(e){return new(e||n)};static ɵprov=$r({token:n,factory:n.ɵfac})}return n})();var ca=class{_renderer;_ngZone;element;_cleanupClick;_cleanupTransitionEnd;_fallbackTimeout;constructor(i,t,e,r){this._renderer=t,this._ngZone=e,this.element=i.createElement(`div`),this.element.classList.add(`cdk-overlay-backdrop`),this._cleanupClick=t.listen(this.element,`click`,r)}detach(){this._ngZone.runOutsideAngular(()=>{let i=this.element;clearTimeout(this._fallbackTimeout),this._cleanupTransitionEnd?.(),this._cleanupTransitionEnd=this._renderer.listen(i,`transitionend`,this.dispose),this._fallbackTimeout=setTimeout(this.dispose,500),i.style.pointerEvents=`none`,i.classList.remove(`cdk-overlay-backdrop-showing`)})}dispose=()=>{clearTimeout(this._fallbackTimeout),this._cleanupClick?.(),this._cleanupTransitionEnd?.(),this._cleanupClick=this._cleanupTransitionEnd=this._fallbackTimeout=void 0,this.element.remove()}};function ua(n){return n&&n.nodeType===1}var sa=Et$1([]);var Fr=class{_portalOutlet;_host;_pane;_config;_ngZone;_keyboardDispatcher;_document;_location;_outsideClickDispatcher;_animationsDisabled;_injector;_renderer;_backdropClick=new ee$1;_attachments=new ee$1;_detachments=new ee$1;_positionStrategy;_scrollStrategy;_locationChanges;_backdropRef=null;_detachContentMutationObserver;_detachContentAfterRenderRef;_disposed=!1;_previousHostParent;_keydownEvents=new ee$1;_outsidePointerEvents=new ee$1;_afterNextRenderRef;constructor(i,t,e,r,o,a,s,l,d,u=!1,h,p){this._portalOutlet=i,this._host=t,this._pane=e,this._config=r,this._ngZone=o,this._keyboardDispatcher=a,this._document=s,this._location=l,this._outsideClickDispatcher=d,this._animationsDisabled=u,this._injector=h,this._renderer=p,r.scrollStrategy&&(this._scrollStrategy=r.scrollStrategy,this._scrollStrategy.attach(this)),this._positionStrategy=r.positionStrategy}get overlayElement(){return this._pane}get backdropElement(){return this._backdropRef?.element||null}get hostElement(){return this._host}get eventPredicate(){return this._config?.eventPredicate||null}attach(i){if(this._disposed)return null;this._attachHost();let t=this._portalOutlet.attach(i);if(this._positionStrategy?.attach(this),this._updateStackingOrder(),this._updateElementSize(),this._updateElementDirection(),le$1(()=>{sa.update(e=>e.includes(this)?e:[...e,this])}),this._scrollStrategy&&this._scrollStrategy.enable(),this._afterNextRenderRef?.destroy(),this._afterNextRenderRef=Dh$1(()=>{this.hasAttached()&&this.updatePosition()},{injector:this._injector}),this._togglePointerEvents(!0),this._config.hasBackdrop&&this._attachBackdrop(),this._config.panelClass&&this._toggleClasses(this._pane,this._config.panelClass,!0),this._attachments.next(),this._completeDetachContent(),this._keyboardDispatcher.add(this),this._config.disposeOnNavigation===!0||this._config.disposeOnNavigation===`pop-state`){let e=this._location.subscribe(()=>this.dispose());this._locationChanges=()=>e.unsubscribe()}else this._config.disposeOnNavigation===`url-change`&&(this._locationChanges=this._location.onUrlChange(()=>this.dispose()));return this._outsideClickDispatcher.add(this),typeof t?.onDestroy==`function`&&t.onDestroy(()=>{this.hasAttached()&&this._ngZone.runOutsideAngular(()=>Promise.resolve().then(()=>this.detach()))}),t}detach(){if(!this.hasAttached())return;this.detachBackdrop(),this._togglePointerEvents(!1),this._positionStrategy&&this._positionStrategy.detach&&this._positionStrategy.detach(),this._scrollStrategy&&this._scrollStrategy.disable();let i=this._portalOutlet.detach();return this._detachments.next(),this._completeDetachContent(),this._keyboardDispatcher.remove(this),this._detachContentWhenEmpty(),this._locationChanges?.(),this._outsideClickDispatcher.remove(this),le$1(()=>{sa.update(t=>t.filter(e=>e!==this))}),i}dispose(){if(this._disposed)return;let i=this.hasAttached();this._positionStrategy&&this._positionStrategy.dispose(),this._disposeScrollStrategy(),this._backdropRef?.dispose(),this._locationChanges?.(),this._keyboardDispatcher.remove(this),this._portalOutlet.dispose(),this._attachments.complete(),this._backdropClick.complete(),this._keydownEvents.complete(),this._outsidePointerEvents.complete(),this._outsideClickDispatcher.remove(this),this._host?.remove(),this._afterNextRenderRef?.destroy(),this._previousHostParent=this._pane=this._host=this._backdropRef=null,i&&this._detachments.next(),this._detachments.complete(),this._completeDetachContent(),this._disposed=!0,le$1(()=>{sa.update(t=>t.filter(e=>e!==this))})}hasAttached(){return this._portalOutlet.hasAttached()}backdropClick(){return this._backdropClick}attachments(){return this._attachments}detachments(){return this._detachments}keydownEvents(){return this._keydownEvents}outsidePointerEvents(){return this._outsidePointerEvents}getConfig(){return this._config}updatePosition(){this._positionStrategy&&this._positionStrategy.apply()}updatePositionStrategy(i){i!==this._positionStrategy&&(this._positionStrategy&&this._positionStrategy.dispose(),this._positionStrategy=i,this.hasAttached()&&(i.attach(this),this.updatePosition()))}updateSize(i){this._config=z$1(z$1({},this._config),i),this._updateElementSize()}setDirection(i){this._config=Q$1(z$1({},this._config),{direction:i}),this._updateElementDirection()}addPanelClass(i){this._pane&&this._toggleClasses(this._pane,i,!0)}removePanelClass(i){this._pane&&this._toggleClasses(this._pane,i,!1)}getDirection(){let i=this._config.direction;return i?typeof i==`string`?i:i.value:`ltr`}updateScrollStrategy(i){i!==this._scrollStrategy&&(this._disposeScrollStrategy(),this._scrollStrategy=i,this.hasAttached()&&(i.attach(this),i.enable()))}_updateElementDirection(){this._host.setAttribute(`dir`,this.getDirection())}_updateElementSize(){if(!this._pane)return;let i=this._pane.style;i.width=$(this._config.width),i.height=$(this._config.height),i.minWidth=$(this._config.minWidth),i.minHeight=$(this._config.minHeight),i.maxWidth=$(this._config.maxWidth),i.maxHeight=$(this._config.maxHeight)}_togglePointerEvents(i){this._pane.style.pointerEvents=i?``:`none`}_attachHost(){if(!this._host.parentElement){let i=this._config.usePopover?this._positionStrategy?.getPopoverInsertionPoint?.():null;ua(i)?i.after(this._host):i?.type===`parent`?i.element.appendChild(this._host):this._previousHostParent?.appendChild(this._host)}if(this._config.usePopover)try{this._host.showPopover()}catch{}}_attachBackdrop(){let i=`cdk-overlay-backdrop-showing`;this._backdropRef?.dispose(),this._backdropRef=new ca(this._document,this._renderer,this._ngZone,t=>{this._backdropClick.next(t)}),this._animationsDisabled&&this._backdropRef.element.classList.add(`cdk-overlay-backdrop-noop-animation`),this._config.backdropClass&&this._toggleClasses(this._backdropRef.element,this._config.backdropClass,!0),this._config.usePopover?this._host.prepend(this._backdropRef.element):this._host.parentElement.insertBefore(this._backdropRef.element,this._host),!this._animationsDisabled&&typeof requestAnimationFrame<`u`?this._ngZone.runOutsideAngular(()=>{requestAnimationFrame(()=>this._backdropRef?.element.classList.add(i))}):this._backdropRef.element.classList.add(i)}_updateStackingOrder(){!this._config.usePopover&&this._host.nextSibling&&this._host.parentNode.appendChild(this._host)}detachBackdrop(){this._animationsDisabled?(this._backdropRef?.dispose(),this._backdropRef=null):this._backdropRef?.detach()}_toggleClasses(i,t,e){let r=dn(t||[]).filter(o=>!!o);r.length&&(e?i.classList.add(...r):i.classList.remove(...r))}_detachContentWhenEmpty(){let i=!1;try{this._detachContentAfterRenderRef=Dh$1(()=>{i=!0,this._detachContent()},{injector:this._injector})}catch(t){if(i)throw t;this._detachContent()}globalThis.MutationObserver&&this._pane&&(this._detachContentMutationObserver||=new globalThis.MutationObserver(()=>{this._detachContent()}),this._detachContentMutationObserver.observe(this._pane,{childList:!0}))}_detachContent(){(!this._pane||!this._host||this._pane.children.length===0)&&(this._pane&&this._config.panelClass&&this._toggleClasses(this._pane,this._config.panelClass,!1),this._host&&this._host.parentElement&&(this._previousHostParent=this._host.parentElement,this._host.remove()),this._completeDetachContent())}_completeDetachContent(){this._detachContentAfterRenderRef?.destroy(),this._detachContentAfterRenderRef=void 0,this._detachContentMutationObserver?.disconnect()}_disposeScrollStrategy(){let i=this._scrollStrategy;i?.disable(),i?.detach?.()}};var gc=`cdk-overlay-connected-position-bounding-box`;var jm=/([A-Za-z%]+)$/;function ha(n,i){return new Lr(i,n.get(Qn),n.get(mt),n.get(z),n.get(Dc))}var Lr=class{_viewportRuler;_document;_platform;_overlayContainer;_overlayRef;_isInitialRender=!1;_lastBoundingBoxSize={width:0,height:0};_isPushed=!1;_canPush=!0;_growAfterOpen=!1;_hasFlexibleDimensions=!0;_positionLocked=!1;_originRect;_overlayRect;_viewportRect;_containerRect;_viewportMargin=0;_scrollables=[];_preferredPositions=[];_origin;_pane;_isDisposed=!1;_boundingBox=null;_lastPosition=null;_lastScrollVisibility=null;_positionChanges=new ee$1;_resizeSubscription=K.EMPTY;_offsetX=0;_offsetY=0;_transformOriginSelector;_appliedPanelClasses=[];_previousPushAmount=null;_popoverLocation=`global`;positionChanges=this._positionChanges;get positions(){return this._preferredPositions}constructor(i,t,e,r,o){this._viewportRuler=t,this._document=e,this._platform=r,this._overlayContainer=o,this.setOrigin(i)}attach(i){this._overlayRef&&this._overlayRef,this._validatePositions(),i.hostElement.classList.add(gc),this._overlayRef=i,this._boundingBox=i.hostElement,this._pane=i.overlayElement,this._isDisposed=!1,this._isInitialRender=!0,this._lastPosition=null,this._resizeSubscription.unsubscribe(),this._resizeSubscription=this._viewportRuler.change().subscribe(()=>{this._isInitialRender=!0,this.apply()})}apply(){if(this._isDisposed||!this._platform.isBrowser)return;if(!this._isInitialRender&&this._positionLocked&&this._lastPosition){this.reapplyLastPosition();return}this._clearPanelClasses(),this._resetOverlayElementStyles(),this._resetBoundingBoxStyles(),this._viewportRect=this._getNarrowedViewportRect(),this._originRect=this._getOriginRect(),this._overlayRect=this._pane.getBoundingClientRect(),this._containerRect=this._getContainerRect();let i=this._originRect,t=this._overlayRect,e=this._viewportRect,r=this._containerRect,o=[],a;for(let s of this._preferredPositions){let l=this._getOriginPoint(i,r,s),d=this._getOverlayPoint(l,t,s),u=this._getOverlayFit(d,t,e,s);if(u.isCompletelyWithinViewport){this._isPushed=!1,this._applyPosition(s,l);return}if(this._canFitWithFlexibleDimensions(u,d,e)){o.push({position:s,origin:l,overlayRect:t,boundingBoxRect:this._calculateBoundingBoxRect(l,s)});continue}(!a||a.overlayFit.visibleArea<u.visibleArea)&&(a={overlayFit:u,overlayPoint:d,originPoint:l,position:s,overlayRect:t})}if(o.length){let s=null,l=-1;for(let d of o){let u=d.boundingBoxRect.width*d.boundingBoxRect.height*(d.position.weight||1);u>l&&(l=u,s=d)}this._isPushed=!1,this._applyPosition(s.position,s.origin);return}if(this._canPush){this._isPushed=!0,this._applyPosition(a.position,a.originPoint);return}this._applyPosition(a.position,a.originPoint)}detach(){this._clearPanelClasses(),this._lastPosition=null,this._previousPushAmount=null,this._resizeSubscription.unsubscribe()}dispose(){this._isDisposed||(this._boundingBox&&Pe(this._boundingBox.style,{top:``,left:``,right:``,bottom:``,height:``,width:``,alignItems:``,justifyContent:``}),this._pane&&this._resetOverlayElementStyles(),this._overlayRef&&this._overlayRef.hostElement.classList.remove(gc),this.detach(),this._positionChanges.complete(),this._overlayRef=this._boundingBox=null,this._isDisposed=!0)}reapplyLastPosition(){if(this._isDisposed||!this._platform.isBrowser)return;let i=this._lastPosition;i?(this._originRect=this._getOriginRect(),this._overlayRect=this._pane.getBoundingClientRect(),this._viewportRect=this._getNarrowedViewportRect(),this._containerRect=this._getContainerRect(),this._applyPosition(i,this._getOriginPoint(this._originRect,this._containerRect,i))):this.apply()}withScrollableContainers(i){return this._scrollables=i,this}withPositions(i){return this._preferredPositions=i,i.indexOf(this._lastPosition)===-1&&(this._lastPosition=null),this._validatePositions(),this}withViewportMargin(i){return this._viewportMargin=i,this}withFlexibleDimensions(i=!0){return this._hasFlexibleDimensions=i,this}withGrowAfterOpen(i=!0){return this._growAfterOpen=i,this}withPush(i=!0){return this._canPush=i,this}withLockedPosition(i=!0){return this._positionLocked=i,this}setOrigin(i){return this._origin=i,this}withDefaultOffsetX(i){return this._offsetX=i,this}withDefaultOffsetY(i){return this._offsetY=i,this}withTransformOriginOn(i){return this._transformOriginSelector=i,this}withPopoverLocation(i){return this._popoverLocation=i,this}getPopoverInsertionPoint(){return this._popoverLocation===`global`?null:this._popoverLocation!==`inline`?this._popoverLocation:this._origin instanceof Wr?this._origin.nativeElement:ua(this._origin)?this._origin:null}_getOriginPoint(i,t,e){let r;if(e.originX==`center`)r=i.left+i.width/2;else{let a=this._isRtl()?i.right:i.left,s=this._isRtl()?i.left:i.right;r=e.originX==`start`?a:s}t.left<0&&(r-=t.left);let o;return e.originY==`center`?o=i.top+i.height/2:o=e.originY==`top`?i.top:i.bottom,t.top<0&&(o-=t.top),{x:r,y:o}}_getOverlayPoint(i,t,e){let r;e.overlayX==`center`?r=-t.width/2:e.overlayX===`start`?r=this._isRtl()?-t.width:0:r=this._isRtl()?0:-t.width;let o;return e.overlayY==`center`?o=-t.height/2:o=e.overlayY==`top`?0:-t.height,{x:i.x+r,y:i.y+o}}_getOverlayFit(i,t,e,r){let o=vc(t),{x:a,y:s}=i,l=this._getOffset(r,`x`),d=this._getOffset(r,`y`);l&&(a+=l),d&&(s+=d);let u=0-a,h=a+o.width-e.width,p=0-s,b=s+o.height-e.height,S=this._subtractOverflows(o.width,u,h),D=this._subtractOverflows(o.height,p,b),E=S*D;return{visibleArea:E,isCompletelyWithinViewport:o.width*o.height===E,fitsInViewportVertically:D===o.height,fitsInViewportHorizontally:S==o.width}}_canFitWithFlexibleDimensions(i,t,e){if(this._hasFlexibleDimensions){let r=e.bottom-t.y,o=e.right-t.x,a=bc(this._overlayRef.getConfig().minHeight),s=bc(this._overlayRef.getConfig().minWidth),l=i.fitsInViewportVertically||a!=null&&a<=r,d=i.fitsInViewportHorizontally||s!=null&&s<=o;return l&&d}return!1}_pushOverlayOnScreen(i,t,e){if(this._previousPushAmount&&this._positionLocked)return{x:i.x+this._previousPushAmount.x,y:i.y+this._previousPushAmount.y};let r=vc(t),o=this._viewportRect,a=Math.max(i.x+r.width-o.width,0),s=Math.max(i.y+r.height-o.height,0),l=Math.max(o.top-e.top-i.y,0),d=Math.max(o.left-e.left-i.x,0),u=0,h=0;return r.width<=o.width?u=d||-a:u=i.x<this._getViewportMarginStart()?o.left-e.left-i.x:0,r.height<=o.height?h=l||-s:h=i.y<this._getViewportMarginTop()?o.top-e.top-i.y:0,this._previousPushAmount={x:u,y:h},{x:i.x+u,y:i.y+h}}_applyPosition(i,t){if(this._setTransformOrigin(i),this._setOverlayElementStyles(t,i),this._setBoundingBoxStyles(t,i),i.panelClass&&this._addPanelClasses(i.panelClass),this._positionChanges.observers.length){let e=this._getScrollVisibility();if(i!==this._lastPosition||!this._lastScrollVisibility||!zm(this._lastScrollVisibility,e)){let r=new Pr(i,e);this._positionChanges.next(r)}this._lastScrollVisibility=e}this._lastPosition=i,this._isInitialRender=!1}_setTransformOrigin(i){if(!this._transformOriginSelector)return;let t=this._boundingBox.querySelectorAll(this._transformOriginSelector),e,r=i.overlayY;i.overlayX===`center`?e=`center`:this._isRtl()?e=i.overlayX===`start`?`right`:`left`:e=i.overlayX===`start`?`left`:`right`;for(let o=0;o<t.length;o++)t[o].style.transformOrigin=`${e} ${r}`}_calculateBoundingBoxRect(i,t){let e=this._viewportRect,r=this._isRtl(),o,a,s;if(t.overlayY===`top`)a=i.y,o=e.height-a+this._getViewportMarginBottom();else if(t.overlayY===`bottom`)s=e.height-i.y+this._getViewportMarginTop()+this._getViewportMarginBottom(),o=e.height-s+this._getViewportMarginTop();else{let b=Math.min(e.bottom-i.y+e.top,i.y),S=this._lastBoundingBoxSize.height;o=b*2,a=i.y-b,o>S&&!this._isInitialRender&&!this._growAfterOpen&&(a=i.y-S/2)}let l=t.overlayX===`start`&&!r||t.overlayX===`end`&&r,d=t.overlayX===`end`&&!r||t.overlayX===`start`&&r,u,h,p;if(d)p=e.width-i.x+this._getViewportMarginStart()+this._getViewportMarginEnd(),u=i.x-this._getViewportMarginStart();else if(l)h=i.x,u=e.right-i.x-this._getViewportMarginEnd();else{let b=Math.min(e.right-i.x+e.left,i.x),S=this._lastBoundingBoxSize.width;u=b*2,h=i.x-b,u>S&&!this._isInitialRender&&!this._growAfterOpen&&(h=i.x-S/2)}return{top:a,left:h,bottom:s,right:p,width:u,height:o}}_setBoundingBoxStyles(i,t){let e=this._calculateBoundingBoxRect(i,t);!this._isInitialRender&&!this._growAfterOpen&&(e.height=Math.min(e.height,this._lastBoundingBoxSize.height),e.width=Math.min(e.width,this._lastBoundingBoxSize.width));let r={};if(this._hasExactPosition())r.top=r.left=`0`,r.bottom=r.right=`auto`,r.maxHeight=r.maxWidth=``,r.width=r.height=`100%`;else{let o=this._overlayRef.getConfig().maxHeight,a=this._overlayRef.getConfig().maxWidth;r.width=$(e.width),r.height=$(e.height),r.top=$(e.top)||`auto`,r.bottom=$(e.bottom)||`auto`,r.left=$(e.left)||`auto`,r.right=$(e.right)||`auto`,t.overlayX===`center`?r.alignItems=`center`:r.alignItems=t.overlayX===`end`?`flex-end`:`flex-start`,t.overlayY===`center`?r.justifyContent=`center`:r.justifyContent=t.overlayY===`bottom`?`flex-end`:`flex-start`,o&&(r.maxHeight=$(o)),a&&(r.maxWidth=$(a))}this._lastBoundingBoxSize=e,Pe(this._boundingBox.style,r)}_resetBoundingBoxStyles(){Pe(this._boundingBox.style,{top:`0`,left:`0`,right:`0`,bottom:`0`,height:``,width:``,alignItems:``,justifyContent:``})}_resetOverlayElementStyles(){Pe(this._pane.style,{top:``,left:``,bottom:``,right:``,position:``,transform:``})}_setOverlayElementStyles(i,t){let e={},r=this._hasExactPosition(),o=this._hasFlexibleDimensions,a=this._overlayRef.getConfig();if(r){let u=this._viewportRuler.getViewportScrollPosition();Pe(e,this._getExactOverlayY(t,i,u)),Pe(e,this._getExactOverlayX(t,i,u))}else e.position=`static`;let s=``,l=this._getOffset(t,`x`),d=this._getOffset(t,`y`);l&&(s+=`translateX(${l}px) `),d&&(s+=`translateY(${d}px)`),e.transform=s.trim(),a.maxHeight&&(r?e.maxHeight=$(a.maxHeight):o&&(e.maxHeight=``)),a.maxWidth&&(r?e.maxWidth=$(a.maxWidth):o&&(e.maxWidth=``)),Pe(this._pane.style,e)}_getExactOverlayY(i,t,e){let r={top:``,bottom:``},o=this._getOverlayPoint(t,this._overlayRect,i);if(this._isPushed&&(o=this._pushOverlayOnScreen(o,this._overlayRect,e)),i.overlayY===`bottom`)r.bottom=`${this._document.documentElement.clientHeight-(o.y+this._overlayRect.height)}px`;else r.top=$(o.y);return r}_getExactOverlayX(i,t,e){let r={left:``,right:``},o=this._getOverlayPoint(t,this._overlayRect,i);this._isPushed&&(o=this._pushOverlayOnScreen(o,this._overlayRect,e));let a;if(this._isRtl()?a=i.overlayX===`end`?`left`:`right`:a=i.overlayX===`end`?`right`:`left`,a===`right`)r.right=`${this._document.documentElement.clientWidth-(o.x+this._overlayRect.width)}px`;else r.left=$(o.x);return r}_getScrollVisibility(){let i=this._getOriginRect(),t=this._pane.getBoundingClientRect(),e=this._scrollables.map(r=>r.getElementRef().nativeElement.getBoundingClientRect());return{isOriginClipped:pc(i,e),isOriginOutsideView:la(i,e),isOverlayClipped:pc(t,e),isOverlayOutsideView:la(t,e)}}_subtractOverflows(i,...t){return t.reduce((e,r)=>e-Math.max(r,0),i)}_getNarrowedViewportRect(){let i=this._document.documentElement.clientWidth,t=this._document.documentElement.clientHeight,e=this._viewportRuler.getViewportScrollPosition();return{top:e.top+this._getViewportMarginTop(),left:e.left+this._getViewportMarginStart(),right:e.left+i-this._getViewportMarginEnd(),bottom:e.top+t-this._getViewportMarginBottom(),width:i-this._getViewportMarginStart()-this._getViewportMarginEnd(),height:t-this._getViewportMarginTop()-this._getViewportMarginBottom()}}_isRtl(){return this._overlayRef.getDirection()===`rtl`}_hasExactPosition(){return!this._hasFlexibleDimensions||this._isPushed}_getOffset(i,t){return t===`x`?i.offsetX==null?this._offsetX:i.offsetX:i.offsetY==null?this._offsetY:i.offsetY}_validatePositions(){}_addPanelClasses(i){this._pane&&dn(i).forEach(t=>{t!==``&&this._appliedPanelClasses.indexOf(t)===-1&&(this._appliedPanelClasses.push(t),this._pane.classList.add(t))})}_clearPanelClasses(){this._pane&&(this._appliedPanelClasses.forEach(i=>{this._pane.classList.remove(i)}),this._appliedPanelClasses=[])}_getViewportMarginStart(){return typeof this._viewportMargin==`number`?this._viewportMargin:this._viewportMargin?.start??0}_getViewportMarginEnd(){return typeof this._viewportMargin==`number`?this._viewportMargin:this._viewportMargin?.end??0}_getViewportMarginTop(){return typeof this._viewportMargin==`number`?this._viewportMargin:this._viewportMargin?.top??0}_getViewportMarginBottom(){return typeof this._viewportMargin==`number`?this._viewportMargin:this._viewportMargin?.bottom??0}_getOriginRect(){let i=this._origin;if(i instanceof Wr)return i.nativeElement.getBoundingClientRect();if(i instanceof Element)return i.getBoundingClientRect();let t=i.width||0,e=i.height||0;return{top:i.y,bottom:i.y+e,left:i.x,right:i.x+t,height:e,width:t}}_getContainerRect(){let i=this._overlayRef.getConfig().usePopover&&this._popoverLocation!==`global`,t=this._overlayContainer.getContainerElement();i&&(t.style.display=`block`);let e=t.getBoundingClientRect();return i&&(t.style.display=``),e}};function Pe(n,i){for(let t in i)Object.hasOwn(i,t)&&(n[t]=i[t]);return n}function bc(n){if(typeof n!=`number`&&n!=null){let[i,t]=n.split(jm);return!t||t===`px`?parseFloat(i):null}return n||null}function vc(n){return{top:Math.floor(n.top),right:Math.floor(n.right),bottom:Math.floor(n.bottom),left:Math.floor(n.left),width:Math.floor(n.width),height:Math.floor(n.height)}}function zm(n,i){return n===i?!0:n.isOriginClipped===i.isOriginClipped&&n.isOriginOutsideView===i.isOriginOutsideView&&n.isOverlayClipped===i.isOverlayClipped&&n.isOverlayOutsideView===i.isOverlayOutsideView}var yc=`cdk-global-overlay-wrapper`;function Vm(n){return new Br}var Br=class{_overlayRef;_cssPosition=`static`;_topOffset=``;_bottomOffset=``;_alignItems=``;_xPosition=``;_xOffset=``;_width=``;_height=``;_isDisposed=!1;attach(i){let t=i.getConfig();this._overlayRef=i,this._width&&!t.width&&i.updateSize({width:this._width}),this._height&&!t.height&&i.updateSize({height:this._height}),i.hostElement.classList.add(yc),this._isDisposed=!1}top(i=``){return this._bottomOffset=``,this._topOffset=i,this._alignItems=`flex-start`,this}left(i=``){return this._xOffset=i,this._xPosition=`left`,this}bottom(i=``){return this._topOffset=``,this._bottomOffset=i,this._alignItems=`flex-end`,this}right(i=``){return this._xOffset=i,this._xPosition=`right`,this}start(i=``){return this._xOffset=i,this._xPosition=`start`,this}end(i=``){return this._xOffset=i,this._xPosition=`end`,this}width(i=``){return this._overlayRef?this._overlayRef.updateSize({width:i}):this._width=i,this}height(i=``){return this._overlayRef?this._overlayRef.updateSize({height:i}):this._height=i,this}centerHorizontally(i=``){return this.left(i),this._xPosition=`center`,this}centerVertically(i=``){return this.top(i),this._alignItems=`center`,this}apply(){if(!this._overlayRef||!this._overlayRef.hasAttached())return;let i=this._overlayRef.overlayElement.style,t=this._overlayRef.hostElement.style,{width:r,height:o,maxWidth:a,maxHeight:s}=this._overlayRef.getConfig(),l=(r===`100%`||r===`100vw`)&&(!a||a===`100%`||a===`100vw`),d=(o===`100%`||o===`100vh`)&&(!s||s===`100%`||s===`100vh`),u=this._xPosition,h=this._xOffset,p=this._overlayRef.getConfig().direction===`rtl`,b=``,S=``,D=``;l?D=`flex-start`:u===`center`?(D=`center`,p?S=h:b=h):p?u===`left`||u===`end`?(D=`flex-end`,b=h):(u===`right`||u===`start`)&&(D=`flex-start`,S=h):u===`left`||u===`start`?(D=`flex-start`,b=h):(u===`right`||u===`end`)&&(D=`flex-end`,S=h),i.position=this._cssPosition,i.marginLeft=l?`0`:b,i.marginTop=d?`0`:this._topOffset,i.marginBottom=this._bottomOffset,i.marginRight=l?`0`:S,t.justifyContent=D,t.alignItems=d?`flex-start`:this._alignItems}dispose(){if(this._isDisposed||!this._overlayRef)return;let i=this._overlayRef.overlayElement.style,t=this._overlayRef.hostElement,e=t.style;t.classList.remove(yc),e.justifyContent=e.alignItems=i.marginTop=i.marginBottom=i.marginLeft=i.marginRight=i.position=``,this._overlayRef=null,this._isDisposed=!0}};var Ec=new S(`OVERLAY_DEFAULT_CONFIG`);function ma(n,i){n.get(Dt).load(Cc);let t=n.get(Dc),e=n.get(mt),r=n.get(Jn),o=n.get(wt),a=n.get(Te$1),s=n.get(Ic$1,null,{optional:!0})||n.get(Vr).createRenderer(null,null),l=new kr(i),d=n.get(Ec,null,{optional:!0})?.usePopover??!0;l.direction=l.direction||a.value,!e.body||!(`showPopover`in e.body)?l.usePopover=!1:l.usePopover=i?.usePopover??d;let u=e.createElement(`div`),h=e.createElement(`div`);u.id=r.getId(`cdk-overlay-`),u.classList.add(`cdk-overlay-pane`),h.appendChild(u),l.usePopover&&(h.setAttribute(`popover`,`manual`),h.classList.add(`cdk-overlay-popover`));let p=l.usePopover?l.positionStrategy?.getPopoverInsertionPoint?.():null;return ua(p)?p.after(h):p?.type===`parent`?p.element.appendChild(h):t.getContainerElement().appendChild(h),new Fr(new Ar(u,o,n),h,u,l,n.get(Fe$1),n.get(wc),e,n.get(ce),n.get(Sc),i?.disableAnimations??n.get(Zv,null,{optional:!0})===`NoopAnimations`,n.get(Ee$1),s)}var lS={XSmall:`(max-width: 599.98px)`,Small:`(min-width: 600px) and (max-width: 959.98px)`,Medium:`(min-width: 960px) and (max-width: 1279.98px)`,Large:`(min-width: 1280px) and (max-width: 1919.98px)`,XLarge:`(min-width: 1920px)`,Handset:`(max-width: 599.98px) and (orientation: portrait), (max-width: 959.98px) and (orientation: landscape)`,Tablet:`(min-width: 600px) and (max-width: 839.98px) and (orientation: portrait), (min-width: 960px) and (max-width: 1279.98px) and (orientation: landscape)`,Web:`(min-width: 840px) and (orientation: portrait), (min-width: 1280px) and (orientation: landscape)`,HandsetPortrait:`(max-width: 599.98px) and (orientation: portrait)`,TabletPortrait:`(min-width: 600px) and (max-width: 839.98px) and (orientation: portrait)`,WebPortrait:`(min-width: 840px) and (orientation: portrait)`,HandsetLandscape:`(max-width: 959.98px) and (orientation: landscape)`,TabletLandscape:`(min-width: 960px) and (max-width: 1279.98px) and (orientation: landscape)`,WebLandscape:`(min-width: 1280px) and (orientation: landscape)`};var Hm=new S(`MATERIAL_ANIMATIONS`);var Rc=null;function $m(){return v(Hm,{optional:!0})?.animationsDisabled||v(Zv,{optional:!0})===`NoopAnimations`?`di-disabled`:(Rc??=v(fn$1).matchMedia(`(prefers-reduced-motion)`).matches,Rc?`reduced-motion`:`enabled`)}function ee(){return $m()!==`enabled`}var Gm=20;var Ym=new S(`mat-tooltip-scroll-strategy`,{providedIn:`root`,factory:()=>{let n=v(se);return()=>da(n,{scrollThrottle:Gm})}});var Xm=new S(`mat-tooltip-default-options`,{providedIn:`root`,factory:()=>({showDelay:0,hideDelay:0,touchendHideDelay:1500})});var xc=`tooltip-panel`;var qm={passive:!0};var Km=8;var Zm=8;var Jm=24;var Qm=200;var tp=(()=>{class n{_elementRef=v(Wr);_ngZone=v(Fe$1);_platform=v(z);_ariaDescriber=v(hc);_focusMonitor=v(pn$1);_dir=v(Te$1);_injector=v(se);_viewContainerRef=v(is$1);_mediaMatcher=v(fn$1);_document=v(mt);_renderer=v(Ic$1);_animationsDisabled=ee();_defaultOptions=v(Xm,{optional:!0});_overlayRef=null;_tooltipInstance=null;_overlayPanelClass;_portal;_position=`below`;_positionAtOrigin=!1;_disabled=!1;_tooltipClass;_viewInitialized=!1;_pointerExitEventsInitialized=!1;_tooltipComponent=Ic;_viewportMargin=8;_currentPosition;_cssClassPrefix=`mat-mdc`;_ariaDescriptionPending=!1;_dirSubscribed=!1;get position(){return this._position}set position(t){t!==this._position&&(this._position=t,this._overlayRef&&(this._updatePosition(this._overlayRef),this._tooltipInstance?.show(0),this._overlayRef.updatePosition()))}get positionAtOrigin(){return this._positionAtOrigin}set positionAtOrigin(t){this._positionAtOrigin=Zo(t),this._detach(),this._overlayRef=null}get disabled(){return this._disabled}set disabled(t){let e=Zo(t);this._disabled!==e&&(this._disabled=e,e?this.hide(0):this._setupPointerEnterEventsIfNeeded(),this._syncAriaDescription(this.message))}get showDelay(){return this._showDelay}set showDelay(t){this._showDelay=Ne(t)}_showDelay;get hideDelay(){return this._hideDelay}set hideDelay(t){this._hideDelay=Ne(t),this._tooltipInstance&&(this._tooltipInstance._mouseLeaveHideDelay=this._hideDelay)}_hideDelay;touchGestures=`auto`;get message(){return this._message}set message(t){let e=this._message;this._message=t!=null?String(t).trim():``,!this._message&&this._isTooltipVisible()?this.hide(0):(this._setupPointerEnterEventsIfNeeded(),this._updateTooltipMessage()),this._syncAriaDescription(e)}_message=``;get tooltipClass(){return this._tooltipClass}set tooltipClass(t){this._tooltipClass=t,this._tooltipInstance&&this._setTooltipClass(this._tooltipClass)}_eventCleanups=[];_touchstartTimeout=null;_destroyed=new ee$1;_isDestroyed=!1;constructor(){let t=this._defaultOptions;t&&(this._showDelay=t.showDelay,this._hideDelay=t.hideDelay,t.position&&(this.position=t.position),t.positionAtOrigin&&(this.positionAtOrigin=t.positionAtOrigin),t.touchGestures&&(this.touchGestures=t.touchGestures),t.tooltipClass&&(this.tooltipClass=t.tooltipClass)),this._viewportMargin=Km}ngAfterViewInit(){this._viewInitialized=!0,this._setupPointerEnterEventsIfNeeded(),this._focusMonitor.monitor(this._elementRef).pipe(av(this._destroyed)).subscribe(t=>{t?t===`keyboard`&&this._ngZone.run(()=>this.show()):this._ngZone.run(()=>this.hide(0))})}ngOnDestroy(){let t=this._elementRef.nativeElement;this._touchstartTimeout&&clearTimeout(this._touchstartTimeout),this._overlayRef&&(this._overlayRef.dispose(),this._tooltipInstance=null),this._eventCleanups.forEach(e=>e()),this._eventCleanups.length=0,this._destroyed.next(),this._destroyed.complete(),this._isDestroyed=!0,this._ariaDescriber.removeDescription(t,this.message,`tooltip`),this._focusMonitor.stopMonitoring(t)}show(t=this.showDelay,e){if(this.disabled||!this.message||this._isTooltipVisible()){this._tooltipInstance?._cancelPendingAnimations();return}let r=this._createOverlay(e);this._detach(),this._portal=this._portal||new ei(this._tooltipComponent,this._viewContainerRef);let o=this._tooltipInstance=r.attach(this._portal).instance;o._triggerElement=this._elementRef.nativeElement,o._mouseLeaveHideDelay=this._hideDelay,o.afterHidden().pipe(av(this._destroyed)).subscribe(()=>this._detach()),this._setTooltipClass(this._tooltipClass),this._updateTooltipMessage(),o.show(t)}hide(t=this.hideDelay){let e=this._tooltipInstance;e&&(e.isVisible()?e.hide(t):(e._cancelPendingAnimations(),this._detach()))}toggle(t){this._isTooltipVisible()?this.hide():this.show(void 0,t)}_isTooltipVisible(){return!!this._tooltipInstance&&this._tooltipInstance.isVisible()}_createOverlay(t){if(this._overlayRef){let a=this._overlayRef.getConfig().positionStrategy;if((!this.positionAtOrigin||!t)&&a._origin instanceof Wr)return this._overlayRef;this._detach()}let e=this._injector.get(gn$1).getAncestorScrollContainers(this._elementRef),r=`${this._cssClassPrefix}-${xc}`,o=ha(this._injector,this.positionAtOrigin?t||this._elementRef:this._elementRef).withTransformOriginOn(`.${this._cssClassPrefix}-tooltip`).withFlexibleDimensions(!1).withViewportMargin(this._viewportMargin).withScrollableContainers(e).withPopoverLocation(`global`);return o.positionChanges.pipe(av(this._destroyed)).subscribe(a=>{this._updateCurrentPositionClass(a.connectionPair),this._tooltipInstance&&a.scrollableViewProperties.isOverlayClipped&&this._tooltipInstance.isVisible()&&this._ngZone.run(()=>this.hide(0))}),this._overlayRef=ma(this._injector,{direction:this._dir,positionStrategy:o,panelClass:this._overlayPanelClass?[...this._overlayPanelClass,r]:r,scrollStrategy:this._injector.get(Ym)(),disableAnimations:this._animationsDisabled,eventPredicate:this._overlayEventPredicate}),this._updatePosition(this._overlayRef),this._overlayRef.detachments().pipe(av(this._destroyed)).subscribe(()=>this._detach()),this._overlayRef.outsidePointerEvents().pipe(av(this._destroyed)).subscribe(()=>this._tooltipInstance?._handleBodyInteraction()),this._overlayRef.keydownEvents().pipe(av(this._destroyed)).subscribe(a=>{a.preventDefault(),a.stopPropagation(),this._ngZone.run(()=>this.hide(0))}),this._defaultOptions?.disableTooltipInteractivity&&this._overlayRef.addPanelClass(`${this._cssClassPrefix}-tooltip-panel-non-interactive`),this._dirSubscribed||(this._dirSubscribed=!0,this._dir.change.pipe(av(this._destroyed)).subscribe(()=>{this._overlayRef&&this._updatePosition(this._overlayRef)})),this._overlayRef}_detach(){this._overlayRef&&this._overlayRef.hasAttached()&&this._overlayRef.detach(),this._tooltipInstance=null}_updatePosition(t){let e=t.getConfig().positionStrategy,r=this._getOrigin(),o=this._getOverlayPosition();e.withPositions([this._addOffset(z$1(z$1({},r.main),o.main)),this._addOffset(z$1(z$1({},r.fallback),o.fallback))])}_addOffset(t){let e=Zm,r=!this._dir||this._dir.value==`ltr`;return t.originY===`top`?t.offsetY=-e:t.originY===`bottom`?t.offsetY=e:t.originX===`start`?t.offsetX=r?-e:e:t.originX===`end`&&(t.offsetX=r?e:-e),t}_getOrigin(){let t=!this._dir||this._dir.value==`ltr`,e=this.position,r;e==`above`||e==`below`?r={originX:`center`,originY:e==`above`?`top`:`bottom`}:e==`before`||e==`left`&&t||e==`right`&&!t?r={originX:`start`,originY:`center`}:(e==`after`||e==`right`&&t||e==`left`&&!t)&&(r={originX:`end`,originY:`center`});let{x:o,y:a}=this._invertPosition(r.originX,r.originY);return{main:r,fallback:{originX:o,originY:a}}}_getOverlayPosition(){let t=!this._dir||this._dir.value==`ltr`,e=this.position,r;e==`above`?r={overlayX:`center`,overlayY:`bottom`}:e==`below`?r={overlayX:`center`,overlayY:`top`}:e==`before`||e==`left`&&t||e==`right`&&!t?r={overlayX:`end`,overlayY:`center`}:(e==`after`||e==`right`&&t||e==`left`&&!t)&&(r={overlayX:`start`,overlayY:`center`});let{x:o,y:a}=this._invertPosition(r.overlayX,r.overlayY);return{main:r,fallback:{overlayX:o,overlayY:a}}}_updateTooltipMessage(){this._tooltipInstance&&(this._tooltipInstance.message=this.message,this._tooltipInstance._markForCheck(),Dh$1(()=>{this._tooltipInstance&&this._overlayRef.updatePosition()},{injector:this._injector}))}_setTooltipClass(t){this._tooltipInstance&&(this._tooltipInstance.tooltipClass=t instanceof Set?Array.from(t):t,this._tooltipInstance._markForCheck())}_invertPosition(t,e){return this.position===`above`||this.position===`below`?e===`top`?e=`bottom`:e===`bottom`&&(e=`top`):t===`end`?t=`start`:t===`start`&&(t=`end`),{x:t,y:e}}_updateCurrentPositionClass(t){let{overlayY:e,originX:r,originY:o}=t,a;if(e===`center`?this._dir&&this._dir.value===`rtl`?a=r===`end`?`left`:`right`:a=r===`start`?`left`:`right`:a=e===`bottom`&&o===`top`?`above`:`below`,a!==this._currentPosition){let s=this._overlayRef;if(s){let l=`${this._cssClassPrefix}-${xc}-`;s.removePanelClass(l+this._currentPosition),s.addPanelClass(l+a)}this._currentPosition=a}}_setupPointerEnterEventsIfNeeded(){this._disabled||!this.message||!this._viewInitialized||this._eventCleanups.length||(this._isTouchPlatform()?this.touchGestures!==`off`&&(this._disableNativeGesturesIfNecessary(),this._addListener(`touchstart`,t=>{let e=t.targetTouches?.[0],r=e?{x:e.clientX,y:e.clientY}:void 0;this._setupPointerExitEventsIfNeeded(),this._touchstartTimeout&&clearTimeout(this._touchstartTimeout);let o=500;this._touchstartTimeout=setTimeout(()=>{this._touchstartTimeout=null,this.show(void 0,r)},this._defaultOptions?.touchLongPressShowDelay??o)})):this._addListener(`mouseenter`,t=>{this._setupPointerExitEventsIfNeeded();let e;t.x!==void 0&&t.y!==void 0&&(e=t),this.show(void 0,e)}))}_setupPointerExitEventsIfNeeded(){if(!this._pointerExitEventsInitialized){if(this._pointerExitEventsInitialized=!0,!this._isTouchPlatform())this._addListener(`mouseleave`,t=>{let e=t.relatedTarget;(!e||!this._overlayRef?.overlayElement.contains(e))&&this.hide()}),this._addListener(`wheel`,t=>{if(this._isTooltipVisible()){let e=this._document.elementFromPoint(t.clientX,t.clientY),r=this._elementRef.nativeElement;e!==r&&!r.contains(e)&&this.hide()}});else if(this.touchGestures!==`off`){this._disableNativeGesturesIfNecessary();let t=()=>{this._touchstartTimeout&&clearTimeout(this._touchstartTimeout),this.hide(this._defaultOptions?.touchendHideDelay)};this._addListener(`touchend`,t),this._addListener(`touchcancel`,t)}}}_addListener(t,e){this._eventCleanups.push(this._renderer.listen(this._elementRef.nativeElement,t,e,qm))}_isTouchPlatform(){let t=this._defaultOptions?.detectHoverCapability;return typeof t==`function`?!t():this._platform.IOS||this._platform.ANDROID?!0:this._platform.isBrowser?!!t&&this._mediaMatcher.matchMedia(`(any-hover: none)`).matches:!1}_disableNativeGesturesIfNecessary(){let t=this.touchGestures;if(t!==`off`){let e=this._elementRef.nativeElement,r=e.style;(t===`on`||e.nodeName!==`INPUT`&&e.nodeName!==`TEXTAREA`)&&(r.userSelect=r.msUserSelect=r.webkitUserSelect=r.MozUserSelect=`none`),(t===`on`||!e.draggable)&&(r.webkitUserDrag=`none`),r.touchAction=`none`,r.webkitTapHighlightColor=`transparent`}}_syncAriaDescription(t){this._ariaDescriptionPending||(this._ariaDescriptionPending=!0,this._ariaDescriber.removeDescription(this._elementRef.nativeElement,t,`tooltip`),this._isDestroyed||Dh$1({write:()=>{this._ariaDescriptionPending=!1,this.message&&!this.disabled&&this._ariaDescriber.describe(this._elementRef.nativeElement,this.message,`tooltip`)}},{injector:this._injector}))}_overlayEventPredicate=t=>t.type===`keydown`?this._isTooltipVisible()&&t.keyCode===27&&!_r(t):!0;static ɵfac=function(e){return new(e||n)};static ɵdir=fw({type:n,selectors:[[``,`matTooltip`,``]],hostAttrs:[1,`mat-mdc-tooltip-trigger`],hostVars:2,hostBindings:function(e,r){e&2&&pm$1(`mat-mdc-tooltip-disabled`,r.disabled)},inputs:{position:[0,`matTooltipPosition`,`position`],positionAtOrigin:[0,`matTooltipPositionAtOrigin`,`positionAtOrigin`],disabled:[0,`matTooltipDisabled`,`disabled`],showDelay:[0,`matTooltipShowDelay`,`showDelay`],hideDelay:[0,`matTooltipHideDelay`,`hideDelay`],touchGestures:[0,`matTooltipTouchGestures`,`touchGestures`],message:[0,`matTooltip`,`message`],tooltipClass:[0,`matTooltipClass`,`tooltipClass`]},exportAs:[`matTooltip`]})}return n})();var Ic=(()=>{class n{_changeDetectorRef=v(_j);_elementRef=v(Wr);_isMultiline=!1;message;tooltipClass;_showTimeoutId;_hideTimeoutId;_triggerElement;_mouseLeaveHideDelay;_animationsDisabled=ee();_tooltip;_closeOnInteraction=!1;_isVisible=!1;_onHide=new ee$1;_showAnimation=`mat-mdc-tooltip-show`;_hideAnimation=`mat-mdc-tooltip-hide`;show(t){this._hideTimeoutId!=null&&clearTimeout(this._hideTimeoutId),this._showTimeoutId=setTimeout(()=>{this._toggleVisibility(!0),this._showTimeoutId=void 0},t)}hide(t){this._showTimeoutId!=null&&clearTimeout(this._showTimeoutId),this._hideTimeoutId=setTimeout(()=>{this._toggleVisibility(!1),this._hideTimeoutId=void 0},t)}afterHidden(){return this._onHide}isVisible(){return this._isVisible}ngOnDestroy(){this._cancelPendingAnimations(),this._onHide.complete(),this._triggerElement=null}_handleBodyInteraction(){this._closeOnInteraction&&this.hide(0)}_markForCheck(){this._changeDetectorRef.markForCheck()}_handleMouseLeave({relatedTarget:t}){(!t||!this._triggerElement.contains(t))&&(this.isVisible()?this.hide(this._mouseLeaveHideDelay):this._finalizeAnimation(!1))}_onShow(){this._isMultiline=this._isTooltipMultiline(),this._markForCheck()}_isTooltipMultiline(){let t=this._elementRef.nativeElement.getBoundingClientRect();return t.height>Jm&&t.width>=Qm}_handleAnimationEnd({animationName:t}){(t===this._showAnimation||t===this._hideAnimation)&&this._finalizeAnimation(t===this._showAnimation)}_cancelPendingAnimations(){this._showTimeoutId!=null&&clearTimeout(this._showTimeoutId),this._hideTimeoutId!=null&&clearTimeout(this._hideTimeoutId),this._showTimeoutId=this._hideTimeoutId=void 0}_finalizeAnimation(t){t?this._closeOnInteraction=!0:this.isVisible()||this._onHide.next()}_toggleVisibility(t){let e=this._tooltip.nativeElement,r=this._showAnimation,o=this._hideAnimation;if(e.classList.remove(t?o:r),e.classList.add(t?r:o),this._isVisible!==t&&(this._isVisible=t,this._changeDetectorRef.markForCheck()),t&&!this._animationsDisabled&&typeof getComputedStyle==`function`){let a=getComputedStyle(e);(a.getPropertyValue(`animation-duration`)===`0s`||a.getPropertyValue(`animation-name`)===`none`)&&(this._animationsDisabled=!0)}t&&this._onShow(),this._animationsDisabled&&(e.classList.add(`_mat-animation-noopable`),this._finalizeAnimation(t))}static ɵfac=function(e){return new(e||n)};static ɵcmp=(function(){let t=[`tooltip`];return aw({type:n,selectors:[[`mat-tooltip-component`]],viewQuery:function(r,o){if(r&1&&im$1(t,7),r&2){let a;IC(a=DC())&&(o._tooltip=a.first)}},hostAttrs:[`aria-hidden`,`true`],hostBindings:function(r,o){r&1&&nm$1(`mouseleave`,function(s){return o._handleMouseLeave(s)})},decls:4,vars:5,consts:[[`tooltip`,``],[1,`mdc-tooltip`,`mat-mdc-tooltip`,3,`animationend`],[1,`mat-mdc-tooltip-surface`,`mdc-tooltip__surface`]],template:function(r,o){r&1&&(kl$1(0,`div`,1,0),rm$1(`animationend`,function(s){return o._handleAnimationEnd(s)}),kl$1(2,`div`,2),QC(3),Ll$1()()),r&2&&(jC(o.tooltipClass),pm$1(`mdc-tooltip--multiline`,o._isMultiline),ID(3),wm$1(o.message))},styles:[`.mat-mdc-tooltip {
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
`],encapsulation:2})})()}return n})();var Rt=(function(n){return n[n.FADING_IN=0]=`FADING_IN`,n[n.VISIBLE=1]=`VISIBLE`,n[n.FADING_OUT=2]=`FADING_OUT`,n[n.HIDDEN=3]=`HIDDEN`,n})(Rt||{});var pa=class{_renderer;element;config;_animationForciblyDisabledThroughCss;state=Rt.HIDDEN;constructor(i,t,e,r=!1){this._renderer=i,this.element=t,this.config=e,this._animationForciblyDisabledThroughCss=r}fadeOut(){this._renderer.fadeOutRipple(this)}};var Mc=hn$1({passive:!0,capture:!0});var fa=class{_events=/* @__PURE__ */ new Map;addHandler(i,t,e,r){let o=this._events.get(t);if(o){let a=o.get(e);a?a.add(r):o.set(e,/* @__PURE__ */ new Set([r]))}else this._events.set(t,/* @__PURE__ */ new Map([[e,/* @__PURE__ */ new Set([r])]])),i.runOutsideAngular(()=>{document.addEventListener(t,this._delegateEventHandler,Mc)})}removeHandler(i,t,e){let r=this._events.get(i);if(!r)return;let o=r.get(t);o&&(o.delete(e),o.size===0&&r.delete(t),r.size===0&&(this._events.delete(i),document.removeEventListener(i,this._delegateEventHandler,Mc)))}_delegateEventHandler=i=>{let t=ct(i);t&&this._events.get(i.type)?.forEach((e,r)=>{(r===t||r.contains(t))&&e.forEach(o=>o.handleEvent(i))})}};var ii={enterDuration:225,exitDuration:150};var ep=800;var Ac=hn$1({passive:!0,capture:!0});var Tc=[`mousedown`,`touchstart`];var Nc=[`mouseup`,`mouseleave`,`touchend`,`touchcancel`];var np=(()=>{class n{static ɵfac=function(e){return new(e||n)};static ɵcmp=aw({type:n,selectors:[[`ng-component`]],hostAttrs:[`mat-ripple-style-loader`,``],decls:0,vars:0,template:function(e,r){},styles:[`.mat-ripple {
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
`],encapsulation:2})}return n})();var ri=class n{_target;_ngZone;_platform;_containerElement;_triggerElement=null;_isPointerDown=!1;_activeRipples=/* @__PURE__ */ new Map;_mostRecentTransientRipple=null;_lastTouchStartEvent;_pointerUpEventsRegistered=!1;_containerRect=null;static _eventManager=new fa;constructor(i,t,e,r,o){this._target=i,this._ngZone=t,this._platform=r,r.isBrowser&&(this._containerElement=Et(e)),o&&o.get(Dt).load(np)}fadeInRipple(i,t,e={}){let r=this._containerRect=this._containerRect||this._containerElement.getBoundingClientRect(),o=z$1(z$1({},ii),e.animation);e.centered&&(i=r.left+r.width/2,t=r.top+r.height/2);let a=e.radius||ip(i,t,r),s=i-r.left,l=t-r.top,d=o.enterDuration,u=document.createElement(`div`);u.classList.add(`mat-ripple-element`),u.style.left=`${s-a}px`,u.style.top=`${l-a}px`,u.style.height=`${a*2}px`,u.style.width=`${a*2}px`,e.color!=null&&(u.style.backgroundColor=e.color),u.style.transitionDuration=`${d}ms`,this._containerElement.appendChild(u);let h=window.getComputedStyle(u),p=h.transitionProperty,b=h.transitionDuration,S=p===`none`||b===`0s`||b===`0s, 0s`||r.width===0&&r.height===0,D=new pa(this,u,e,S);u.style.transform=`scale3d(1, 1, 1)`,D.state=Rt.FADING_IN,e.persistent||(this._mostRecentTransientRipple=D);let E=null;return!S&&(d||o.exitDuration)&&this._ngZone.runOutsideAngular(()=>{let x=()=>{E&&(E.fallbackTimer=null),clearTimeout(V),this._finishRippleTransition(D)},P=()=>this._destroyRipple(D),V=setTimeout(P,d+100);u.addEventListener(`transitionend`,x),u.addEventListener(`transitioncancel`,P),E={onTransitionEnd:x,onTransitionCancel:P,fallbackTimer:V}}),this._activeRipples.set(D,E),(S||!d)&&this._finishRippleTransition(D),D}fadeOutRipple(i){if(i.state===Rt.FADING_OUT||i.state===Rt.HIDDEN)return;let t=i.element,e=z$1(z$1({},ii),i.config.animation);t.style.transitionDuration=`${e.exitDuration}ms`,t.style.opacity=`0`,i.state=Rt.FADING_OUT,(i._animationForciblyDisabledThroughCss||!e.exitDuration)&&this._finishRippleTransition(i)}fadeOutAll(){this._getActiveRipples().forEach(i=>i.fadeOut())}fadeOutAllNonPersistent(){this._getActiveRipples().forEach(i=>{i.config.persistent||i.fadeOut()})}setupTriggerEvents(i){let t=Et(i);!this._platform.isBrowser||!t||t===this._triggerElement||(this._removeTriggerEvents(),this._triggerElement=t,Tc.forEach(e=>{n._eventManager.addHandler(this._ngZone,e,t,this)}))}handleEvent(i){i.type===`mousedown`?this._onMousedown(i):i.type===`touchstart`?this._onTouchStart(i):this._onPointerUp(),this._pointerUpEventsRegistered||(this._ngZone.runOutsideAngular(()=>{Nc.forEach(t=>{this._triggerElement.addEventListener(t,this,Ac)})}),this._pointerUpEventsRegistered=!0)}_finishRippleTransition(i){i.state===Rt.FADING_IN?this._startFadeOutTransition(i):i.state===Rt.FADING_OUT&&this._destroyRipple(i)}_startFadeOutTransition(i){let t=i===this._mostRecentTransientRipple,{persistent:e}=i.config;i.state=Rt.VISIBLE,!e&&(!t||!this._isPointerDown)&&i.fadeOut()}_destroyRipple(i){let t=this._activeRipples.get(i)??null;this._activeRipples.delete(i),this._activeRipples.size||(this._containerRect=null),i===this._mostRecentTransientRipple&&(this._mostRecentTransientRipple=null),i.state=Rt.HIDDEN,t!==null&&(i.element.removeEventListener(`transitionend`,t.onTransitionEnd),i.element.removeEventListener(`transitioncancel`,t.onTransitionCancel),t.fallbackTimer!==null&&clearTimeout(t.fallbackTimer)),i.element.remove()}_onMousedown(i){let t=qn(i),e=this._lastTouchStartEvent&&Date.now()<this._lastTouchStartEvent+ep;!this._target.rippleDisabled&&!t&&!e&&(this._isPointerDown=!0,this.fadeInRipple(i.clientX,i.clientY,this._target.rippleConfig))}_onTouchStart(i){if(!this._target.rippleDisabled&&!Kn(i)){this._lastTouchStartEvent=Date.now(),this._isPointerDown=!0;let t=i.changedTouches;if(t)for(let e=0;e<t.length;e++)this.fadeInRipple(t[e].clientX,t[e].clientY,this._target.rippleConfig)}}_onPointerUp(){this._isPointerDown&&(this._isPointerDown=!1,this._getActiveRipples().forEach(i=>{let t=i.state===Rt.VISIBLE||i.config.terminateOnPointerUp&&i.state===Rt.FADING_IN;!i.config.persistent&&t&&i.fadeOut()}))}_getActiveRipples(){return Array.from(this._activeRipples.keys())}_removeTriggerEvents(){let i=this._triggerElement;i&&(Tc.forEach(t=>n._eventManager.removeHandler(t,i,this)),this._pointerUpEventsRegistered&&(Nc.forEach(t=>i.removeEventListener(t,this,Ac)),this._pointerUpEventsRegistered=!1))}};function ip(n,i,t){let e=Math.max(Math.abs(n-t.left),Math.abs(n-t.right)),r=Math.max(Math.abs(i-t.top),Math.abs(i-t.bottom));return Math.sqrt(e*e+r*r)}var ga=new S(`mat-ripple-global-options`);var WS=(()=>{class n{_elementRef=v(Wr);_animationsDisabled=ee();color;unbounded=!1;centered=!1;radius=0;animation;get disabled(){return this._disabled}set disabled(t){t&&this.fadeOutAllNonPersistent(),this._disabled=t,this._setupTriggerEventsIfEnabled()}_disabled=!1;get trigger(){return this._trigger||this._elementRef.nativeElement}set trigger(t){this._trigger=t,this._setupTriggerEventsIfEnabled()}_trigger;_rippleRenderer;_globalOptions;_isInitialized=!1;constructor(){let t=v(Fe$1),e=v(z),r=v(ga,{optional:!0}),o=v(se);this._globalOptions=r||{},this._rippleRenderer=new ri(this,t,this._elementRef,e,o)}ngOnInit(){this._isInitialized=!0,this._setupTriggerEventsIfEnabled()}ngOnDestroy(){this._rippleRenderer._removeTriggerEvents()}fadeOutAll(){this._rippleRenderer.fadeOutAll()}fadeOutAllNonPersistent(){this._rippleRenderer.fadeOutAllNonPersistent()}get rippleConfig(){return{centered:this.centered,radius:this.radius,color:this.color,animation:z$1(z$1(z$1({},this._globalOptions.animation),this._animationsDisabled?{enterDuration:0,exitDuration:0}:{}),this.animation),terminateOnPointerUp:this._globalOptions.terminateOnPointerUp}}get rippleDisabled(){return this.disabled||!!this._globalOptions.disabled}_setupTriggerEventsIfEnabled(){!this.disabled&&this._isInitialized&&this._rippleRenderer.setupTriggerEvents(this.trigger)}launch(t,e=0,r){return typeof t==`number`?this._rippleRenderer.fadeInRipple(t,e,z$1(z$1({},this.rippleConfig),r)):this._rippleRenderer.fadeInRipple(0,0,z$1(z$1({},this.rippleConfig),t))}static ɵfac=function(e){return new(e||n)};static ɵdir=fw({type:n,selectors:[[``,`mat-ripple`,``],[``,`matRipple`,``]],hostAttrs:[1,`mat-ripple`],hostVars:2,hostBindings:function(e,r){e&2&&pm$1(`mat-ripple-unbounded`,r.unbounded)},inputs:{color:[0,`matRippleColor`,`color`],unbounded:[0,`matRippleUnbounded`,`unbounded`],centered:[0,`matRippleCentered`,`centered`],radius:[0,`matRippleRadius`,`radius`],animation:[0,`matRippleAnimation`,`animation`],disabled:[0,`matRippleDisabled`,`disabled`],trigger:[0,`matRippleTrigger`,`trigger`]},exportAs:[`matRipple`]})}return n})();var rp={capture:!0};var op=[`focus`,`mousedown`,`mouseenter`,`touchstart`];var ba=`mat-ripple-loader-uninitialized`;var va=`mat-ripple-loader-class-name`;var Oc=`mat-ripple-loader-centered`;var Ur=`mat-ripple-loader-disabled`;var kc=(()=>{class n{_document=v(mt);_animationsDisabled=ee();_globalRippleOptions=v(ga,{optional:!0});_platform=v(z);_ngZone=v(Fe$1);_injector=v(se);_eventCleanups;_hosts=/* @__PURE__ */ new Map;constructor(){let t=v(Vr).createRenderer(null,null);this._eventCleanups=this._ngZone.runOutsideAngular(()=>op.map(e=>t.listen(this._document,e,this._onInteraction,rp)))}ngOnDestroy(){let t=this._hosts.keys();for(let e of t)this.destroyRipple(e);this._eventCleanups.forEach(e=>e())}configureRipple(t,e){t.setAttribute(ba,this._globalRippleOptions?.namespace??``),(e.className||!t.hasAttribute(va))&&t.setAttribute(va,e.className||``),e.centered&&t.setAttribute(Oc,``),e.disabled&&t.setAttribute(Ur,``)}setDisabled(t,e){let r=this._hosts.get(t);r?(r.target.rippleDisabled=e,!e&&!r.hasSetUpEvents&&(r.hasSetUpEvents=!0,r.renderer.setupTriggerEvents(t))):e?t.setAttribute(Ur,``):t.removeAttribute(Ur)}_onInteraction=t=>{let e=ct(t);if(e instanceof HTMLElement){let r=e.closest(`[${ba}="${this._globalRippleOptions?.namespace??``}"]`);r&&this._createRipple(r)}};_createRipple(t){if(!this._document||this._hosts.has(t))return;t.querySelector(`.mat-ripple`)?.remove();let e=this._document.createElement(`span`);e.classList.add(`mat-ripple`,t.getAttribute(va)),t.append(e);let r=this._globalRippleOptions,o=this._animationsDisabled?0:r?.animation?.enterDuration??ii.enterDuration,a=this._animationsDisabled?0:r?.animation?.exitDuration??ii.exitDuration,s={rippleDisabled:this._animationsDisabled||r?.disabled||t.hasAttribute(Ur),rippleConfig:{centered:t.hasAttribute(Oc),terminateOnPointerUp:r?.terminateOnPointerUp,animation:{enterDuration:o,exitDuration:a}}},l=new ri(s,this._ngZone,e,this._platform,this._injector),d=!s.rippleDisabled;d&&l.setupTriggerEvents(t),this._hosts.set(t,{target:s,renderer:l,hasSetUpEvents:d}),t.removeAttribute(ba)}destroyRipple(t){let e=this._hosts.get(t);e&&(e.renderer._removeTriggerEvents(),this._hosts.delete(t))}static ɵfac=function(e){return new(e||n)};static ɵprov=$r({token:n,factory:n.ɵfac})}return n})();var Pc=(()=>{class n{static ɵfac=function(e){return new(e||n)};static ɵcmp=aw({type:n,selectors:[[`structural-styles`]],decls:0,vars:0,template:function(e,r){},styles:[`.mat-focus-indicator {
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
`],encapsulation:2})}return n})();var ap=new S(`MAT_BUTTON_CONFIG`);function Fc(n){return n==null?void 0:Sj(n)}var oi=(()=>{class n{_elementRef=v(Wr);_ngZone=v(Fe$1);_animationsDisabled=ee();_config=v(ap,{optional:!0});_focusMonitor=v(pn$1);_cleanupClick;_renderer=v(Ic$1);_rippleLoader=v(kc);_isAnchor;_isFab=!1;color;get disableRipple(){return this._disableRipple}set disableRipple(t){this._disableRipple=t,this._updateRippleDisabled()}_disableRipple=!1;get disabled(){return this._disabled}set disabled(t){this._disabled=t,this._updateRippleDisabled()}_disabled=!1;ariaDisabled;disabledInteractive;tabIndex;set _tabindex(t){this.tabIndex=t}showProgress=Ij(!1,{transform:Nj});constructor(){v(Dt).load(Pc);let t=this._elementRef.nativeElement;this._isAnchor=t.tagName===`A`,this.disabledInteractive=this._config?.disabledInteractive??!1,this.color=this._config?.color??null,this._rippleLoader?.configureRipple(t,{className:`mat-mdc-button-ripple`})}ngAfterViewInit(){this._focusMonitor.monitor(this._elementRef,!0),this._isAnchor&&this._setupAsAnchor()}ngOnDestroy(){this._cleanupClick?.(),this._focusMonitor.stopMonitoring(this._elementRef),this._rippleLoader?.destroyRipple(this._elementRef.nativeElement)}focus(t=`program`,e){t?this._focusMonitor.focusVia(this._elementRef.nativeElement,t,e):this._elementRef.nativeElement.focus(e)}_getAriaDisabled(){return this.ariaDisabled!=null?this.ariaDisabled:this._isAnchor?this.disabled||null:this.disabled&&this.disabledInteractive?!0:null}_getDisabledAttribute(){return this.disabledInteractive||!this.disabled?null:!0}_updateRippleDisabled(){this._rippleLoader?.setDisabled(this._elementRef.nativeElement,this.disableRipple||this.disabled)}_getTabIndex(){return this._isAnchor?this.disabled&&!this.disabledInteractive?-1:this.tabIndex:this.tabIndex}_setupAsAnchor(){this._cleanupClick=this._ngZone.runOutsideAngular(()=>this._renderer.listen(this._elementRef.nativeElement,`click`,t=>{this.disabled&&(t.preventDefault(),t.stopImmediatePropagation())}))}static ɵfac=function(e){return new(e||n)};static ɵdir=fw({type:n,hostAttrs:[1,`mat-mdc-button-base`],hostVars:15,hostBindings:function(e,r){e&2&&(qg(`disabled`,r._getDisabledAttribute())(`aria-disabled`,r._getAriaDisabled())(`tabindex`,r._getTabIndex()),jC(r.color?`mat-`+r.color:``),pm$1(`mat-mdc-button-progress-indicator-shown`,r.showProgress())(`mat-mdc-button-disabled`,r.disabled)(`mat-mdc-button-disabled-interactive`,r.disabledInteractive)(`mat-unthemed`,!r.color)(`_mat-animation-noopable`,r._animationsDisabled))},inputs:{color:`color`,disableRipple:[2,`disableRipple`,`disableRipple`,Nj],disabled:[2,`disabled`,`disabled`,Nj],ariaDisabled:[2,`aria-disabled`,`ariaDisabled`,Nj],disabledInteractive:[2,`disabledInteractive`,`disabledInteractive`,Nj],tabIndex:[2,`tabIndex`,`tabIndex`,Fc],_tabindex:[2,`tabindex`,`_tabindex`,Fc],showProgress:[1,`showProgress`]}})}return n})();var sp=(()=>{class n extends oi{constructor(){super(),this._rippleLoader.configureRipple(this._elementRef.nativeElement,{centered:!0})}static ɵfac=function(e){return new(e||n)};static ɵcmp=(function(){let t=[`*`,[[``,`progressIndicator`,``]]],e=[`*`,`[progressIndicator]`];function r(o,a){o&1&&(kl$1(0,`div`,1),vC$1(1,1),Ll$1())}return aw({type:n,selectors:[[`button`,`mat-icon-button`,``],[`a`,`mat-icon-button`,``],[`button`,`matIconButton`,``],[`a`,`matIconButton`,``]],hostAttrs:[1,`mdc-icon-button`,`mat-mdc-icon-button`],exportAs:[`matButton`,`matAnchor`],features:[Og],ngContentSelectors:e,decls:5,vars:1,consts:[[1,`mat-mdc-button-persistent-ripple`,`mdc-icon-button__ripple`],[1,`mat-mdc-button-progress-indicator-container`],[1,`mat-focus-indicator`],[1,`mat-mdc-button-touch-target`]],template:function(a,s){a&1&&(yC$1(t),Yg(0,`span`,0),vC$1(1),eC(2,r,2,0,`div`,1),Yg(3,`span`,2)(4,`span`,3)),a&2&&(ID(2),nC(s.showProgress()?2:-1))},styles:[`.mat-mdc-icon-button {
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
`],encapsulation:2})})()}return n})();var Lc=/* @__PURE__ */ new Map([[`text`,[`mat-mdc-button`]],[`filled`,[`mdc-button--unelevated`,`mat-mdc-unelevated-button`]],[`elevated`,[`mdc-button--raised`,`mat-mdc-raised-button`]],[`outlined`,[`mdc-button--outlined`,`mat-mdc-outlined-button`]],[`tonal`,[`mat-tonal-button`]]]);var vC=(()=>{class n extends oi{get appearance(){return this._appearance}set appearance(t){this.setAppearance(t||this._config?.defaultAppearance||`text`)}_appearance=null;constructor(){super();let t=lp(this._elementRef.nativeElement);t&&this.setAppearance(t)}setAppearance(t){if(t===this._appearance)return;let e=this._elementRef.nativeElement.classList,r=this._appearance?Lc.get(this._appearance):null,o=Lc.get(t);r&&e.remove(...r),e.add(...o),this._appearance=t}static ɵfac=function(e){return new(e||n)};static ɵcmp=(function(){let t=[[[``,8,`material-icons`,3,`iconPositionEnd`,``],[`mat-icon`,3,`iconPositionEnd`,``],[``,`matButtonIcon`,``,3,`iconPositionEnd`,``],[``,8,`material-symbols-outlined`,3,`iconPositionEnd`,``],[``,8,`material-symbols-rounded`,3,`iconPositionEnd`,``],[``,8,`material-symbols-sharp`,3,`iconPositionEnd`,``]],`*`,[[``,`iconPositionEnd`,``,8,`material-icons`],[`mat-icon`,`iconPositionEnd`,``],[``,`matButtonIcon`,``,`iconPositionEnd`,``],[``,`iconPositionEnd`,``,8,`material-symbols-outlined`],[``,`iconPositionEnd`,``,8,`material-symbols-rounded`],[``,`iconPositionEnd`,``,8,`material-symbols-sharp`]],[[``,`progressIndicator`,``]]],e=[`.material-icons:not([iconPositionEnd]), mat-icon:not([iconPositionEnd]), [matButtonIcon]:not([iconPositionEnd]), .material-symbols-outlined:not([iconPositionEnd]), .material-symbols-rounded:not([iconPositionEnd]), .material-symbols-sharp:not([iconPositionEnd])`,`*`,`.material-icons[iconPositionEnd], mat-icon[iconPositionEnd], [matButtonIcon][iconPositionEnd], .material-symbols-outlined[iconPositionEnd], .material-symbols-rounded[iconPositionEnd], .material-symbols-sharp[iconPositionEnd]`,`[progressIndicator]`];function r(o,a){o&1&&(kl$1(0,`div`,2),vC$1(1,3),Ll$1())}return aw({type:n,selectors:[[`button`,`matButton`,``],[`a`,`matButton`,``],[`button`,`mat-button`,``],[`button`,`mat-raised-button`,``],[`button`,`mat-flat-button`,``],[`button`,`mat-stroked-button`,``],[`a`,`mat-button`,``],[`a`,`mat-raised-button`,``],[`a`,`mat-flat-button`,``],[`a`,`mat-stroked-button`,``]],hostAttrs:[1,`mdc-button`],inputs:{appearance:[0,`matButton`,`appearance`]},exportAs:[`matButton`,`matAnchor`],features:[Og],ngContentSelectors:e,decls:8,vars:5,consts:[[1,`mat-mdc-button-persistent-ripple`],[1,`mdc-button__label`],[1,`mat-mdc-button-progress-indicator-container`],[1,`mat-focus-indicator`],[1,`mat-mdc-button-touch-target`]],template:function(a,s){a&1&&(yC$1(t),Yg(0,`span`,0),vC$1(1),kl$1(2,`span`,1),vC$1(3,1),Ll$1(),vC$1(4,2),eC(5,r,2,0,`div`,2),Yg(6,`span`,3)(7,`span`,4)),a&2&&(pm$1(`mdc-button__ripple`,!s._isFab)(`mdc-fab__ripple`,s._isFab),ID(5),nC(s.showProgress()?5:-1))},styles:[`.mat-mdc-button-base {
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
`],encapsulation:2})})()}return n})();function lp(n){return n.hasAttribute(`mat-raised-button`)?`elevated`:n.hasAttribute(`mat-stroked-button`)?`outlined`:n.hasAttribute(`mat-flat-button`)?`filled`:n.hasAttribute(`mat-button`)?`text`:null}var Bc=new S(`mat-mdc-fab-default-options`,{providedIn:`root`,factory:()=>ai});var ai={color:`accent`};var yC=(()=>{class n extends oi{_options=v(Bc,{optional:!0});_isFab=!0;extended=!1;constructor(){super(),this._options=this._options||ai,this.color=this._options.color||ai.color}static ɵfac=function(e){return new(e||n)};static ɵcmp=(function(){let t=[[[``,8,`material-icons`,3,`iconPositionEnd`,``],[`mat-icon`,3,`iconPositionEnd`,``],[``,`matButtonIcon`,``,3,`iconPositionEnd`,``],[``,8,`material-symbols-outlined`,3,`iconPositionEnd`,``],[``,8,`material-symbols-rounded`,3,`iconPositionEnd`,``],[``,8,`material-symbols-sharp`,3,`iconPositionEnd`,``]],`*`,[[``,`iconPositionEnd`,``,8,`material-icons`],[`mat-icon`,`iconPositionEnd`,``],[``,`matButtonIcon`,``,`iconPositionEnd`,``],[``,`iconPositionEnd`,``,8,`material-symbols-outlined`],[``,`iconPositionEnd`,``,8,`material-symbols-rounded`],[``,`iconPositionEnd`,``,8,`material-symbols-sharp`]],[[``,`progressIndicator`,``]]],e=[`.material-icons:not([iconPositionEnd]), mat-icon:not([iconPositionEnd]), [matButtonIcon]:not([iconPositionEnd]), .material-symbols-outlined:not([iconPositionEnd]), .material-symbols-rounded:not([iconPositionEnd]), .material-symbols-sharp:not([iconPositionEnd])`,`*`,`.material-icons[iconPositionEnd], mat-icon[iconPositionEnd], [matButtonIcon][iconPositionEnd], .material-symbols-outlined[iconPositionEnd], .material-symbols-rounded[iconPositionEnd], .material-symbols-sharp[iconPositionEnd]`,`[progressIndicator]`];function r(o,a){o&1&&(kl$1(0,`div`,2),vC$1(1,3),Ll$1())}return aw({type:n,selectors:[[`button`,`mat-fab`,``],[`a`,`mat-fab`,``],[`button`,`matFab`,``],[`a`,`matFab`,``]],hostAttrs:[1,`mdc-fab`,`mat-mdc-fab-base`,`mat-mdc-fab`],hostVars:4,hostBindings:function(a,s){a&2&&pm$1(`mdc-fab--extended`,s.extended)(`mat-mdc-extended-fab`,s.extended)},inputs:{extended:[2,`extended`,`extended`,Nj]},exportAs:[`matButton`,`matAnchor`],features:[Og],ngContentSelectors:e,decls:8,vars:5,consts:[[1,`mat-mdc-button-persistent-ripple`],[1,`mdc-button__label`],[1,`mat-mdc-button-progress-indicator-container`],[1,`mat-focus-indicator`],[1,`mat-mdc-button-touch-target`]],template:function(a,s){a&1&&(yC$1(t),Yg(0,`span`,0),vC$1(1),kl$1(2,`span`,1),vC$1(3,1),Ll$1(),vC$1(4,2),eC(5,r,2,0,`div`,2),Yg(6,`span`,3)(7,`span`,4)),a&2&&(pm$1(`mdc-button__ripple`,!s._isFab)(`mdc-fab__ripple`,s._isFab),ID(5),nC(s.showProgress()?5:-1))},styles:[`.mat-mdc-fab-base {
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
`],encapsulation:2})})()}return n})();var _C=(()=>{class n extends oi{_options=v(Bc,{optional:!0});_isFab=!0;constructor(){super(),this._options=this._options||ai,this.color=this._options.color||ai.color}static ɵfac=function(e){return new(e||n)};static ɵcmp=(function(){let t=[[[``,8,`material-icons`,3,`iconPositionEnd`,``],[`mat-icon`,3,`iconPositionEnd`,``],[``,`matButtonIcon`,``,3,`iconPositionEnd`,``],[``,8,`material-symbols-outlined`,3,`iconPositionEnd`,``],[``,8,`material-symbols-rounded`,3,`iconPositionEnd`,``],[``,8,`material-symbols-sharp`,3,`iconPositionEnd`,``]],`*`,[[``,`iconPositionEnd`,``,8,`material-icons`],[`mat-icon`,`iconPositionEnd`,``],[``,`matButtonIcon`,``,`iconPositionEnd`,``],[``,`iconPositionEnd`,``,8,`material-symbols-outlined`],[``,`iconPositionEnd`,``,8,`material-symbols-rounded`],[``,`iconPositionEnd`,``,8,`material-symbols-sharp`]],[[``,`progressIndicator`,``]]],e=[`.material-icons:not([iconPositionEnd]), mat-icon:not([iconPositionEnd]), [matButtonIcon]:not([iconPositionEnd]), .material-symbols-outlined:not([iconPositionEnd]), .material-symbols-rounded:not([iconPositionEnd]), .material-symbols-sharp:not([iconPositionEnd])`,`*`,`.material-icons[iconPositionEnd], mat-icon[iconPositionEnd], [matButtonIcon][iconPositionEnd], .material-symbols-outlined[iconPositionEnd], .material-symbols-rounded[iconPositionEnd], .material-symbols-sharp[iconPositionEnd]`,`[progressIndicator]`];function r(o,a){o&1&&(kl$1(0,`div`,2),vC$1(1,3),Ll$1())}return aw({type:n,selectors:[[`button`,`mat-mini-fab`,``],[`a`,`mat-mini-fab`,``],[`button`,`matMiniFab`,``],[`a`,`matMiniFab`,``]],hostAttrs:[1,`mdc-fab`,`mat-mdc-fab-base`,`mdc-fab--mini`,`mat-mdc-mini-fab`],exportAs:[`matButton`,`matAnchor`],features:[Og],ngContentSelectors:e,decls:8,vars:5,consts:[[1,`mat-mdc-button-persistent-ripple`],[1,`mdc-button__label`],[1,`mat-mdc-button-progress-indicator-container`],[1,`mat-focus-indicator`],[1,`mat-mdc-button-touch-target`]],template:function(a,s){a&1&&(yC$1(t),Yg(0,`span`,0),vC$1(1),kl$1(2,`span`,1),vC$1(3,1),Ll$1(),vC$1(4,2),eC(5,r,2,0,`div`,2),Yg(6,`span`,3)(7,`span`,4)),a&2&&(pm$1(`mdc-button__ripple`,!s._isFab)(`mdc-fab__ripple`,s._isFab),ID(5),nC(s.showProgress()?5:-1))},styles:[`.mat-mdc-fab-base {
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
`],encapsulation:2})})()}return n})();var Uc=class n{httpClient=v(Ce$1);isBrowser=Ri(v(Yv));_isAuthenticated=Et$1(!1);isAuthenticated=it(()=>this.myIdentityInfo.hasValue());myIdentityInfo=_o(()=>this.isBrowser?`/api/identity/CheckAuthentication`:void 0,{parse:i=>i===null?void 0:i});getUsername_Url=`/api/identity/GetUsername?userId=`;getAntiForgeryToken=_o(()=>this.isBrowser?`/api/identity/GetAntiForgeryToken`:void 0);constructor(){}submitLogin(i){let t=new lt().set(`CfTurnstileResponse`,i.CfTurnstileResponse).set(`Password`,i.Password).set(`UsernameOrEmail`,i.UsernameOrEmail).set(`ReturnUrl`,i.ReturnUrl);return this.httpClient.post(`/api/identity/Login`,t,{observe:`response`,responseType:`text`}).pipe(ju$1({next:e=>{e.ok&&this.myIdentityInfo.reload()}}))}submitSignup(i){let t=new FormData;return t.set(`CfTurnstileResponse`,i.CfTurnstileResponse),t.set(`Email`,i.Email),t.set(`Username`,i.Username),t.set(`Password`,i.Password),this.httpClient.post(`/api/identity/Signup`,t).pipe(ju$1({next:e=>{e.success&&this.myIdentityInfo.reload()}}))}logout(){this.httpClient.post(`/api/identity/Logout`,null).subscribe({next:()=>{this.myIdentityInfo.reload()}})}getUsername(i){let t=new lt().set(`userId`,i);return this.httpClient.get(`/api/identity/GetUsername`,{params:t})}static ɵfac=function(t){return new(t||n)};static ɵprov=$r({token:n,factory:n.ɵfac})};var c=class s{httpClient=v(Ce$1);identityService=v(Uc);getProfileInfo_Url=`/api/UserProfile/GetProfileInfo?userId=`;myProfileInfo=_o(()=>this.identityService.isAuthenticated()?`${this.getProfileInfo_Url}${this.identityService.myIdentityInfo.value()?.id}`:void 0);constructor(){}getUserAvatarUrl(e){let t=new lt().set(`userId`,e);return this.httpClient.get(`/api/UserProfile/GetUserAvatarUrl`,{params:t})}saveUserAvatar(e){let t=new FormData;return t.append(`userImageFile`,e),this.httpClient.post(`/api/UserProfile/SubmitUserImage`,t).pipe(ju$1({next:r=>{r&&r.success&&this.myProfileInfo.reload()}}))}deleteUserAvatar(){return this.httpClient.delete(`/api/UserProfile/DeleteUserImage`).pipe(ju$1({next:e=>{e&&e.success&&this.myProfileInfo.reload()}}))}changeName(e){let t=new lt().set(`name`,e);return this.httpClient.post(`/api/UserProfile/SubmitProfileName`,t).pipe(ju$1({next:r=>{r&&r.success&&this.myProfileInfo.reload()}}))}changeDescription(e){let t=new lt().set(`description`,e);return this.httpClient.post(`/api/UserProfile/SubmitDescription`,t).pipe(ju$1({next:r=>{r&&r.success&&this.myProfileInfo.reload()}}))}static ɵfac=function(t){return new(t||s)};static ɵprov=$r({token:s,factory:s.ɵfac})};var we=class a{static ɵfac=function(e){return new(e||a)};static ɵcmp=aw({type:a,selectors:[[`app-home`]],decls:2,vars:0,template:function(e,t){e&1&&(kl$1(0,`p`),QC(1,`home works!`),Ll$1())},encapsulation:2})};var Lt=[{path:`Identity/Login`,loadComponent:()=>import(`./chunk-C1YOy0Dk.js`).then(a=>a.Login)},{path:`Identity/Signup`,loadComponent:()=>import(`./chunk-D4GWr8C_.js`).then(a=>a.Signup)},{path:`Identity/Setting`,loadComponent:()=>import(`./chunk-Bfm0eN8A.js`).then(a=>a.Setting)},{path:`Identity/ResetPassword`,loadComponent:()=>import(`./chunk-4fOC5vBd.js`).then(a=>a.ResetPassword)}];var zt=(a,m)=>{let e=v(Uc),t=v(Me);return e.isAuthenticated()?!0:t.createUrlTree([`/identity/login`],{queryParams:{ReturnUrl:m.url}})};var Ht=[...[{path:`UserAccount/Profile/:userId`,loadComponent:()=>import(`./chunk-CsvJjb9M.js`).then(a=>a.Profile)},{path:`UserAccount/Profile`,loadComponent:()=>import(`./chunk-CsvJjb9M.js`).then(a=>a.Profile)},{path:`UserAccount/ProfileSetting`,loadComponent:()=>import(`./chunk-BauWvsqA.js`).then(a=>a.ProfileSetting),canActivate:[zt]}]];var Vt=[{path:``,component:we},...Lt,...Ht];var en=Math.pow(2,31)-1;var Z=class{_overlayRef;instance;containerInstance;_afterDismissed=new ee$1;_afterOpened=new ee$1;_onAction=new ee$1;_durationTimeoutId;_dismissedByAction=!1;constructor(m,e){this._overlayRef=e,this.containerInstance=m,m._onExit.subscribe(()=>this._finishDismiss())}dismiss(){this._afterDismissed.closed||this.containerInstance.exit(),clearTimeout(this._durationTimeoutId)}dismissWithAction(){this._onAction.closed||(this._dismissedByAction=!0,this._onAction.next(),this._onAction.complete(),this.dismiss()),clearTimeout(this._durationTimeoutId)}closeWithAction(){this.dismissWithAction()}_dismissAfter(m){this._durationTimeoutId=setTimeout(()=>this.dismiss(),Math.min(m,en))}_open(){this._afterOpened.closed||(this._afterOpened.next(),this._afterOpened.complete())}_finishDismiss(){this._overlayRef.dispose(),this._onAction.closed||this._onAction.complete(),this._afterDismissed.next({dismissedByAction:this._dismissedByAction}),this._afterDismissed.complete(),this._dismissedByAction=!1}afterDismissed(){return this._afterDismissed}afterOpened(){return this.containerInstance._onEnter}onAction(){return this._onAction}};var qt=new S(`MatSnackBarData`);var V=class{politeness=`polite`;announcementMessage=``;viewContainerRef;duration=0;panelClass;direction;data=null;horizontalPosition=`center`;verticalPosition=`bottom`};var tn=(()=>{class a{static ɵfac=function(t){return new(t||a)};static ɵdir=fw({type:a,selectors:[[``,`matSnackBarLabel`,``]],hostAttrs:[1,`mat-mdc-snack-bar-label`,`mdc-snackbar__label`]})}return a})();var nn=(()=>{class a{static ɵfac=function(t){return new(t||a)};static ɵdir=fw({type:a,selectors:[[``,`matSnackBarActions`,``]],hostAttrs:[1,`mat-mdc-snack-bar-actions`,`mdc-snackbar__actions`]})}return a})();var an=(()=>{class a{static ɵfac=function(t){return new(t||a)};static ɵdir=fw({type:a,selectors:[[``,`matSnackBarAction`,``]],hostAttrs:[1,`mat-mdc-snack-bar-action`,`mdc-snackbar__action`]})}return a})();var on=(()=>{class a{snackBarRef=v(Z);data=v(qt);action(){this.snackBarRef.dismissWithAction()}get hasAction(){return!!this.data.action}static ɵfac=function(t){return new(t||a)};static ɵcmp=(function(){function e(t,n){if(t&1){let i=fC();Hi$1(0,`div`,1)(1,`button`,2),nm$1(`click`,function(){Sd$1(i);let r=gC();return xd$1(r.action())}),QC(2),Rl$1()()}if(t&2){let i=gC();ID(2),Vl$1(` `,i.data.action,` `)}}return aw({type:a,selectors:[[`simple-snack-bar`]],hostAttrs:[1,`mat-mdc-simple-snack-bar`],exportAs:[`matSnackBar`],decls:3,vars:2,consts:[[`matSnackBarLabel`,``],[`matSnackBarActions`,``],[`matButton`,``,`matSnackBarAction`,``,3,`click`]],template:function(n,i){n&1&&(Hi$1(0,`div`,0),QC(1),Rl$1(),eC(2,e,3,1,`div`,1)),n&2&&(ID(),Vl$1(` `,i.data.message,`
`),ID(),nC(i.hasAction?2:-1))},dependencies:[vC,tn,nn,an],styles:[`.mat-mdc-simple-snack-bar {
  display: flex;
}
.mat-mdc-simple-snack-bar .mat-mdc-snack-bar-label {
  max-height: 50vh;
  overflow: auto;
}
`],encapsulation:2})})()}return a})();var Fe=`_mat-snack-bar-enter`;var Le=`_mat-snack-bar-exit`;var rn=(()=>{class a extends Mr{_ngZone=v(Fe$1);_elementRef=v(Wr);_changeDetectorRef=v(_j);_platform=v(z);_animationsDisabled=ee();snackBarConfig=v(V);_document=v(mt);_trackedModals=/* @__PURE__ */ new Set;_enterFallback;_exitFallback;_injector=v(se);_announceDelay=150;_announceTimeoutId;_destroyed=!1;_portalOutlet;_onAnnounce=new ee$1;_onExit=new ee$1;_onEnter=new ee$1;_animationState=`void`;_live;_label;_role;_liveElementId=v(Jn).getId(`mat-snack-bar-container-live-`);constructor(){super();let e=this.snackBarConfig;e.politeness===`assertive`&&!e.announcementMessage?this._live=`assertive`:e.politeness===`off`?this._live=`off`:this._live=`polite`,this._platform.FIREFOX&&(this._live===`polite`&&(this._role=`status`),this._live===`assertive`&&(this._role=`alert`))}attachComponentPortal(e){this._assertNotAttached();let t=this._portalOutlet.attachComponentPortal(e);return this._afterPortalAttached(),t}attachTemplatePortal(e){this._assertNotAttached();let t=this._portalOutlet.attachTemplatePortal(e);return this._afterPortalAttached(),t}attachDomPortal=e=>{this._assertNotAttached();let t=this._portalOutlet.attachDomPortal(e);return this._afterPortalAttached(),t};onAnimationEnd(e){e===Le?this._completeExit():e===Fe&&(clearTimeout(this._enterFallback),this._ngZone.run(()=>{this._onEnter.next(),this._onEnter.complete()}))}enter(){this._destroyed||(this._animationState=`visible`,this._changeDetectorRef.markForCheck(),this._changeDetectorRef.detectChanges(),this._screenReaderAnnounce(),this._animationsDisabled?Dh$1(()=>{this._ngZone.run(()=>queueMicrotask(()=>this.onAnimationEnd(Fe)))},{injector:this._injector}):(clearTimeout(this._enterFallback),this._enterFallback=setTimeout(()=>{this._elementRef.nativeElement.classList.add(`mat-snack-bar-fallback-visible`),this.onAnimationEnd(Fe)},200)))}exit(){return this._destroyed?Ay(void 0):(this._ngZone.run(()=>{this._animationState=`hidden`,this._changeDetectorRef.markForCheck(),this._elementRef.nativeElement.setAttribute(`mat-exit`,``),clearTimeout(this._announceTimeoutId),this._animationsDisabled?Dh$1(()=>{this._ngZone.run(()=>queueMicrotask(()=>this.onAnimationEnd(Le)))},{injector:this._injector}):(clearTimeout(this._exitFallback),this._exitFallback=setTimeout(()=>this.onAnimationEnd(Le),200))}),this._onExit)}ngOnDestroy(){this._destroyed=!0,this._clearFromModals(),this._completeExit()}_completeExit(){clearTimeout(this._exitFallback),queueMicrotask(()=>{this._onExit.next(),this._onExit.complete()})}_afterPortalAttached(){let e=this._elementRef.nativeElement,t=this.snackBarConfig.panelClass;t&&(Array.isArray(t)?t.forEach(o=>e.classList.add(o)):e.classList.add(t)),this._exposeToModals();let n=this._label.nativeElement,i=`mdc-snackbar__label`;n.classList.toggle(i,!n.querySelector(`.${i}`))}_exposeToModals(){let e=this._liveElementId,t=this._document.querySelectorAll(`body > .cdk-overlay-container [aria-modal="true"]`);for(let n=0;n<t.length;n++){let i=t[n],o=i.getAttribute(`aria-owns`);this._trackedModals.add(i),o?o.indexOf(e)===-1&&i.setAttribute(`aria-owns`,o+` `+e):i.setAttribute(`aria-owns`,e)}}_clearFromModals(){this._trackedModals.forEach(e=>{let t=e.getAttribute(`aria-owns`);if(t){let n=t.replace(this._liveElementId,``).trim();n.length>0?e.setAttribute(`aria-owns`,n):e.removeAttribute(`aria-owns`)}}),this._trackedModals.clear()}_assertNotAttached(){this._portalOutlet.hasAttached()}_screenReaderAnnounce(){this._announceTimeoutId||this._ngZone.runOutsideAngular(()=>{this._announceTimeoutId=setTimeout(()=>{if(this._destroyed)return;let e=this._elementRef.nativeElement,t=e.querySelector(`[aria-hidden]`),n=e.querySelector(`[aria-live]`);if(t&&n){let i=null;this._platform.isBrowser&&document.activeElement instanceof HTMLElement&&t.contains(document.activeElement)&&(i=document.activeElement),t.removeAttribute(`aria-hidden`),n.appendChild(t),i?.focus(),this._onAnnounce.next(),this._onAnnounce.complete()}},this._announceDelay)})}static ɵfac=function(t){return new(t||a)};static ɵcmp=(function(){let e=[`label`];function t(n,i){}return aw({type:a,selectors:[[`mat-snack-bar-container`]],viewQuery:function(i,o){if(i&1&&im$1(d0,7)(e,7),i&2){let r;IC(r=DC())&&(o._portalOutlet=r.first),IC(r=DC())&&(o._label=r.first)}},hostAttrs:[1,`mdc-snackbar`,`mat-mdc-snack-bar-container`],hostVars:6,hostBindings:function(i,o){i&1&&nm$1(`animationend`,function(l){return o.onAnimationEnd(l.animationName)})(`animationcancel`,function(l){return o.onAnimationEnd(l.animationName)}),i&2&&pm$1(`mat-snack-bar-container-enter`,o._animationState===`visible`)(`mat-snack-bar-container-exit`,o._animationState===`hidden`)(`mat-snack-bar-container-animations-enabled`,!o._animationsDisabled)},features:[Og],decls:6,vars:3,consts:[[`label`,``],[1,`mdc-snackbar__surface`,`mat-mdc-snackbar-surface`],[1,`mat-mdc-snack-bar-label`],[`aria-hidden`,`true`],[`cdkPortalOutlet`,``]],template:function(i,o){i&1&&(Hi$1(0,`div`,1)(1,`div`,2,0)(3,`div`,3),kg(4,t,0,0,`ng-template`,4),Rl$1(),Qg(5,`div`),Rl$1()()),i&2&&(ID(5),qg(`aria-live`,o._live)(`role`,o._role)(`id`,o._liveElementId))},dependencies:[d0],styles:[`@keyframes _mat-snack-bar-enter {
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
`],encapsulation:2,changeDetection:1})})()}return a})();var sn=new S(`mat-snack-bar-default-options`,{providedIn:`root`,factory:()=>new V});var Qt=(()=>{class a{_live=v(Nm);_injector=v(se);_breakpointObserver=v(gm);_parentSnackBar=v(a,{optional:!0,skipSelf:!0});_defaultConfig=v(sn);_animationsDisabled=ee();_snackBarRefAtThisLevel=null;simpleSnackBarComponent=on;snackBarContainerComponent=rn;handsetCssClass=`mat-mdc-snack-bar-handset`;get _openedSnackBarRef(){let e=this._parentSnackBar;return e?e._openedSnackBarRef:this._snackBarRefAtThisLevel}set _openedSnackBarRef(e){this._parentSnackBar?this._parentSnackBar._openedSnackBarRef=e:this._snackBarRefAtThisLevel=e}openFromComponent(e,t){return this._attach(e,t)}openFromTemplate(e,t){return this._attach(e,t)}open(e,t=``,n){let i=z$1(z$1({},this._defaultConfig),n);return i.data={message:e,action:t},i.announcementMessage===e&&(i.announcementMessage=void 0),this.openFromComponent(this.simpleSnackBarComponent,i)}dismiss(){this._openedSnackBarRef&&this._openedSnackBarRef.dismiss()}ngOnDestroy(){this._snackBarRefAtThisLevel&&this._snackBarRefAtThisLevel.dismiss()}_attachSnackBarContainer(e,t){let n=t&&t.viewContainerRef&&t.viewContainerRef.injector,i=se.create({parent:n||this._injector,providers:[{provide:V,useValue:t}]}),o=new ei(this.snackBarContainerComponent,t.viewContainerRef,i),r=e.attach(o);return r.instance.snackBarConfig=t,r.instance}_attach(e,t){let n=z$1(z$1(z$1({},new V),this._defaultConfig),t),i=this._createOverlay(n),o=this._attachSnackBarContainer(i,n),r=new Z(o,i);if(e instanceof Fr$1){let l=new ni(e,null,{$implicit:n.data,snackBarRef:r});r.instance=o.attachTemplatePortal(l)}else{let l=this._createInjector(n,r),g=new ei(e,void 0,l);r.instance=o.attachComponentPortal(g).instance}return this._breakpointObserver.observe(lS.HandsetPortrait).pipe(av(i.detachments())).subscribe(l=>{i.overlayElement.classList.toggle(this.handsetCssClass,l.matches)}),n.announcementMessage&&o._onAnnounce.subscribe(()=>{this._live.announce(n.announcementMessage,n.politeness)}),this._animateSnackBar(r,n),this._openedSnackBarRef=r,this._openedSnackBarRef}_animateSnackBar(e,t){e.afterDismissed().subscribe(()=>{this._openedSnackBarRef==e&&(this._openedSnackBarRef=null),t.announcementMessage&&this._live.clear()}),t.duration&&t.duration>0&&e.afterOpened().subscribe(()=>e._dismissAfter(t.duration)),this._openedSnackBarRef?(this._openedSnackBarRef.afterDismissed().subscribe(()=>{e.containerInstance.enter()}),this._openedSnackBarRef.dismiss()):e.containerInstance.enter()}_createOverlay(e){let t=new kr;t.direction=e.direction;let n=Vm(this._injector),i=e.direction===`rtl`,o=e.horizontalPosition===`left`||e.horizontalPosition===`start`&&!i||e.horizontalPosition===`end`&&i,r=!o&&e.horizontalPosition!==`center`;return o?n.left(`0`):r?n.right(`0`):n.centerHorizontally(),e.verticalPosition===`top`?n.top(`0`):n.bottom(`0`),t.positionStrategy=n,t.disableAnimations=this._animationsDisabled,ma(this._injector,t)}_createInjector(e,t){let n=e&&e.viewContainerRef&&e.viewContainerRef.injector;return se.create({parent:n||this._injector,providers:[{provide:Z,useValue:t},{provide:qt,useValue:e.data}]})}static ɵfac=function(t){return new(t||a)};static ɵprov=$r({token:a,factory:a.ɵfac})}return a})();var Se=class a{snackBar=v(Qt);handleError(m){let e=m.rejection||m,t=``;if(e instanceof de)switch(e.status){case 0:t=`Connection Error`;break;case ys.Unauthorized:t=`Unauthorized`;break;case ys.Forbidden:t=`Access Denied`;break;case ys.BadRequest:t=`Bad Request`;break;default:t=`Unknown Error`}else t=`Application Error`;this.snackBar.open(t,`Ok`),console.error(t,e)}static ɵfac=function(e){return new(e||a)};static ɵprov=ae({token:a,factory:a.ɵfac,providedIn:`root`})};var Wt={providers:[{provide:Je$1,useClass:Se},zv(),Xh(Vt,tm(Gh)),Ub(),Wd(Gd({cookieName:`XSRF-TOKEN`,headerName:`X-CSRF-TOKEN`}))]};var je=new S(`MAT_MENU_PANEL`);var J=(()=>{class a{_isAnchor;_elementRef=v(Wr);_document=v(mt);_focusMonitor=v(pn$1);_parentMenu=v(je,{optional:!0});_changeDetectorRef=v(_j);role=`menuitem`;disabled=!1;disabledInteractive=!1;disableRipple=!1;_hovered=new ee$1;_focused=new ee$1;_highlighted=!1;_triggersSubmenu=!1;constructor(){v(Dt).load(Pc),this._parentMenu?.addItem?.(this),this._isAnchor=this._elementRef.nativeElement.tagName===`A`}focus(e,t){this._focusMonitor&&e?this._focusMonitor.focusVia(this._getHostElement(),e,t):this._getHostElement().focus(t),this._focused.next(this)}ngAfterViewInit(){this._focusMonitor&&this._focusMonitor.monitor(this._elementRef,!1)}ngOnDestroy(){this._focusMonitor&&this._focusMonitor.stopMonitoring(this._elementRef),this._parentMenu&&this._parentMenu.removeItem&&this._parentMenu.removeItem(this),this._hovered.complete(),this._focused.complete()}_getTabIndex(){return this.disabled&&!this.disabledInteractive?`-1`:`0`}_getAriaDisabled(){return this._isAnchor?this.disabled||null:this.disabled&&this.disabledInteractive?!0:null}_getDisabled(){return this.disabledInteractive||!this.disabled?null:!0}_getHostElement(){return this._elementRef.nativeElement}_checkDisabled(e){this.disabled&&(e.preventDefault(),e.stopPropagation())}_handleMouseEnter(){this._hovered.next(this)}getLabel(){let e=this._elementRef.nativeElement.cloneNode(!0),t=e.querySelectorAll(`mat-icon, .material-icons, .material-symbols-outlined, .material-symbols-rounded, .material-symbols-sharp`);for(let n=0;n<t.length;n++)t[n].remove();return e.textContent?.trim()||``}_setHighlighted(e){this._highlighted=e,this._changeDetectorRef.markForCheck()}_setTriggersSubmenu(e){this._triggersSubmenu=e,this._changeDetectorRef.markForCheck()}_hasFocus(){return this._document&&this._document.activeElement===this._getHostElement()}static ɵfac=function(t){return new(t||a)};static ɵcmp=(function(){let e=[[[`mat-icon`],[``,`matMenuItemIcon`,``]],`*`],t=[`mat-icon, [matMenuItemIcon]`,`*`];function n(i,o){i&1&&(Ud$1(),Hi$1(0,`svg`,2),Qg(1,`polygon`,3),Rl$1())}return aw({type:a,selectors:[[``,`mat-menu-item`,``]],hostAttrs:[1,`mat-mdc-menu-item`,`mat-focus-indicator`],hostVars:12,hostBindings:function(o,r){o&1&&nm$1(`click`,function(g){return r._checkDisabled(g)})(`mouseenter`,function(){return r._handleMouseEnter()}),o&2&&(qg(`role`,r.role)(`tabindex`,r._getTabIndex())(`aria-disabled`,r._getAriaDisabled())(`disabled`,r._getDisabled()),pm$1(`mat-mdc-menu-item-highlighted`,r._highlighted)(`mat-mdc-menu-item-submenu-trigger`,r._triggersSubmenu)(`mat-mdc-menu-item-disabled`,r.disabled)(`mat-mdc-menu-item-disabled-interactive`,r.disabledInteractive))},inputs:{role:`role`,disabled:[2,`disabled`,`disabled`,Nj],disabledInteractive:[2,`disabledInteractive`,`disabledInteractive`,Nj],disableRipple:[2,`disableRipple`,`disableRipple`,Nj]},exportAs:[`matMenuItem`],ngContentSelectors:t,decls:5,vars:3,consts:[[1,`mat-mdc-menu-item-text`],[`matRipple`,``,1,`mat-mdc-menu-ripple`,3,`matRippleDisabled`,`matRippleTrigger`],[`viewBox`,`0 0 5 10`,`focusable`,`false`,`aria-hidden`,`true`,1,`mat-mdc-menu-submenu-icon`],[`points`,`0,0 5,5 0,10`]],template:function(o,r){o&1&&(yC$1(e),vC$1(0),Hi$1(1,`span`,0),vC$1(2,1),Rl$1(),Qg(3,`div`,1),eC(4,n,2,0,`svg`,2)),o&2&&(ID(3),zg(`matRippleDisabled`,r.disableRipple||r.disabled)(`matRippleTrigger`,r._getHostElement()),ID(),nC(r._triggersSubmenu?4:-1))},dependencies:[WS],encapsulation:2})})()}return a})();var pn=new S(`MatMenuContent`);var hn=new S(`mat-menu-default-options`,{providedIn:`root`,factory:()=>({overlapTrigger:!1,xPosition:`after`,yPosition:`below`,backdropClass:`cdk-overlay-transparent-backdrop`})});var ze=`_mat-menu-enter`;var Ce=`_mat-menu-exit`;var X=(()=>{class a{_elementRef=v(Wr);_changeDetectorRef=v(_j);_injector=v(se);_keyManager;_xPosition;_yPosition;_firstItemFocusRef;_exitFallbackTimeout;_animationsDisabled=ee();_allItems;_directDescendantItems=new Mi$1;_classList={};_panelAnimationState=`void`;_animationDone=new ee$1;_isAnimating=Et$1(!1);parentMenu;direction;overlayPanelClass;backdropClass;ariaLabel;ariaLabelledby;ariaDescribedby;get xPosition(){return this._xPosition}set xPosition(e){this._xPosition=e,this.setPositionClasses()}get yPosition(){return this._yPosition}set yPosition(e){this._yPosition=e,this.setPositionClasses()}templateRef;items;lazyContent;overlapTrigger=!1;hasBackdrop;get panelClass(){return this._previousPanelClass}set panelClass(e){let t=this._previousPanelClass,n=z$1({},this._classList);t&&t.length&&t.split(` `).forEach(i=>{n[i]=!1}),this._previousPanelClass=e,e&&e.length&&(e.split(` `).forEach(i=>{n[i]=!0}),this._elementRef.nativeElement.className=``),this._classList=n}_previousPanelClass=``;get classList(){return this.panelClass}set classList(e){this.panelClass=e}closed=new Qe$1;close=this.closed;panelId=v(Jn).getId(`mat-menu-panel-`);constructor(){let e=v(hn);this.overlayPanelClass=e.overlayPanelClass||``,this._xPosition=e.xPosition,this._yPosition=e.yPosition,this.backdropClass=e.backdropClass,this.overlapTrigger=e.overlapTrigger,this.hasBackdrop=e.hasBackdrop}ngOnInit(){this.setPositionClasses()}ngAfterContentInit(){this._updateDirectDescendants(),this._keyManager=new ia(this._directDescendantItems).withWrap().withTypeAhead().withHomeAndEnd().skipPredicate(e=>e.disabled&&!e.disabledInteractive),this._keyManager.tabOut.subscribe(()=>this.closed.emit(`tab`)),this._directDescendantItems.changes.pipe(iv(this._directDescendantItems),sv(e=>Gy(...e.map(t=>t._focused)))).subscribe(e=>this._keyManager.updateActiveItem(e)),this._directDescendantItems.changes.subscribe(e=>{let t=this._keyManager;if(this._panelAnimationState===`enter`&&t.activeItem?._hasFocus()){let n=e.toArray(),i=Math.max(0,Math.min(n.length-1,t.activeItemIndex||0));n[i]&&!n[i].disabled?t.setActiveItem(i):t.setNextItemActive()}})}ngOnDestroy(){this._keyManager?.destroy(),this._directDescendantItems.destroy(),this.closed.complete(),this._firstItemFocusRef?.destroy(),clearTimeout(this._exitFallbackTimeout)}_hovered(){return this._directDescendantItems.changes.pipe(iv(this._directDescendantItems),sv(t=>Gy(...t.map(n=>n._hovered))))}addItem(e){}removeItem(e){}_handleKeydown(e){let t=e.keyCode,n=this._keyManager;switch(t){case 27:_r(e)||(e.preventDefault(),this.closed.emit(`keydown`));break;case 37:this.parentMenu&&this.direction===`ltr`&&this.closed.emit(`keydown`);break;case 39:this.parentMenu&&this.direction===`rtl`&&this.closed.emit(`keydown`);break;default:(t===38||t===40)&&n.setFocusOrigin(`keyboard`),n.onKeydown(e);return}}focusFirstItem(e=`program`){this._firstItemFocusRef?.destroy(),this._firstItemFocusRef=Dh$1(()=>{let t=this._resolvePanel();if(!t||!t.contains(document.activeElement)){let n=this._keyManager;n.setFocusOrigin(e).setFirstItemActive(),!n.activeItem&&t&&t.focus()}},{injector:this._injector})}resetActiveItem(){this._keyManager.setActiveItem(-1)}setElevation(e){}setPositionClasses(e=this.xPosition,t=this.yPosition){this._classList=Q$1(z$1({},this._classList),{"mat-menu-before":e===`before`,"mat-menu-after":e===`after`,"mat-menu-above":t===`above`,"mat-menu-below":t===`below`}),this._changeDetectorRef.markForCheck()}_onAnimationDone(e){let t=e===Ce;(t||e===ze)&&(t&&(clearTimeout(this._exitFallbackTimeout),this._exitFallbackTimeout=void 0),this._animationDone.next(t?`void`:`enter`),this._isAnimating.set(!1))}_onAnimationStart(e){(e===ze||e===Ce)&&this._isAnimating.set(!0)}_setIsOpen(e){if(this._panelAnimationState=e?`enter`:`void`,e){if(this._keyManager.activeItemIndex===0){let t=this._resolvePanel();t&&(t.scrollTop=0)}}else this._animationsDisabled||(this._exitFallbackTimeout=setTimeout(()=>this._onAnimationDone(Ce),200));this._animationsDisabled&&setTimeout(()=>{this._onAnimationDone(e?ze:Ce)}),this._changeDetectorRef.markForCheck()}_updateDirectDescendants(){this._allItems.changes.pipe(iv(this._allItems)).subscribe(e=>{this._directDescendantItems.reset(e.filter(t=>t._parentMenu===this)),this._directDescendantItems.notifyOnChanges()})}_resolvePanel(){let e=null;return this._directDescendantItems.length&&(e=this._directDescendantItems.first._getHostElement().closest(`[role="menu"]`)),e}static ɵfac=function(t){return new(t||a)};static ɵcmp=(function(){let e=[`*`];function t(n,i){if(n&1){let o=fC();kl$1(0,`div`,0),rm$1(`click`,function(){Sd$1(o);let l=gC();return xd$1(l.closed.emit(`click`))})(`animationstart`,function(l){Sd$1(o);let g=gC();return xd$1(g._onAnimationStart(l.animationName))})(`animationend`,function(l){Sd$1(o);let g=gC();return xd$1(g._onAnimationDone(l.animationName))})(`animationcancel`,function(l){Sd$1(o);let g=gC();return xd$1(g._onAnimationDone(l.animationName))}),kl$1(1,`div`,1),vC$1(2),Ll$1()()}if(n&2){let o=gC();jC(o._classList),pm$1(`mat-menu-panel-animations-disabled`,o._animationsDisabled)(`mat-menu-panel-exit-animation`,o._panelAnimationState===`void`)(`mat-menu-panel-animating`,o._isAnimating()),em$1(`id`,o.panelId),qg(`aria-label`,o.ariaLabel||null)(`aria-labelledby`,o.ariaLabelledby||null)(`aria-describedby`,o.ariaDescribedby||null)}}return aw({type:a,selectors:[[`mat-menu`]],contentQueries:function(i,o,r){if(i&1&&om$1(r,pn,5)(r,J,5)(r,J,4),i&2){let l;IC(l=DC())&&(o.lazyContent=l.first),IC(l=DC())&&(o._allItems=l),IC(l=DC())&&(o.items=l)}},viewQuery:function(i,o){if(i&1&&im$1(Fr$1,5),i&2){let r;IC(r=DC())&&(o.templateRef=r.first)}},hostVars:3,hostBindings:function(i,o){i&2&&qg(`aria-label`,null)(`aria-labelledby`,null)(`aria-describedby`,null)},inputs:{backdropClass:`backdropClass`,ariaLabel:[0,`aria-label`,`ariaLabel`],ariaLabelledby:[0,`aria-labelledby`,`ariaLabelledby`],ariaDescribedby:[0,`aria-describedby`,`ariaDescribedby`],xPosition:`xPosition`,yPosition:`yPosition`,overlapTrigger:[2,`overlapTrigger`,`overlapTrigger`,Nj],hasBackdrop:[2,`hasBackdrop`,`hasBackdrop`,n=>n==null?null:Nj(n)],panelClass:[0,`class`,`panelClass`],classList:`classList`},outputs:{closed:`closed`,close:`close`},exportAs:[`matMenu`],features:[tb([{provide:je,useExisting:a}])],ngContentSelectors:e,decls:1,vars:0,consts:[[`tabindex`,`-1`,`role`,`menu`,1,`mat-mdc-menu-panel`,3,`click`,`animationstart`,`animationend`,`animationcancel`,`id`],[1,`mat-mdc-menu-content`]],template:function(i,o){i&1&&(yC$1(),Lg(0,t,3,12,`ng-template`))},styles:[`mat-menu {
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
`],encapsulation:2})})()}return a})();var fn=new S(`mat-menu-scroll-strategy`,{providedIn:`root`,factory:()=>{let a=v(se);return()=>da(a)}});var U=/* @__PURE__ */ new WeakMap;var gn=(()=>{class a{_canHaveBackdrop;_element=v(Wr);_viewContainerRef=v(is$1);_menuItemInstance=v(J,{optional:!0,self:!0});_dir=v(Te$1,{optional:!0});_focusMonitor=v(pn$1);_ngZone=v(Fe$1);_injector=v(se);_scrollStrategy=v(fn);_changeDetectorRef=v(_j);_animationsDisabled=ee();_portal;_overlayRef=null;_menuOpen=!1;_closingActionsSubscription=K.EMPTY;_menuCloseSubscription=K.EMPTY;_pendingRemoval;_parentMaterialMenu;_parentInnerPadding;_openedBy=void 0;get _menu(){return this._menuInternal}set _menu(e){e!==this._menuInternal&&(this._menuInternal=e,this._menuCloseSubscription.unsubscribe(),e?(this._parentMaterialMenu,this._menuCloseSubscription=e.close.subscribe(t=>{this._destroyMenu(t),(t===`click`||t===`tab`)&&this._parentMaterialMenu&&this._parentMaterialMenu.closed.emit(t)})):this._destroyMenu(),this._menuItemInstance?._setTriggersSubmenu(this._triggersSubmenu()))}_menuInternal=null;constructor(e){this._canHaveBackdrop=e;let t=v(je,{optional:!0});this._parentMaterialMenu=t instanceof X?t:void 0}ngOnDestroy(){this._menu&&this._ownsMenu(this._menu)&&U.delete(this._menu),this._pendingRemoval?.unsubscribe(),this._menuCloseSubscription.unsubscribe(),this._closingActionsSubscription.unsubscribe(),this._overlayRef&&(this._overlayRef.dispose(),this._overlayRef=null)}get menuOpen(){return this._menuOpen}get dir(){return this._dir&&this._dir.value===`rtl`?`rtl`:`ltr`}_triggersSubmenu(){return!!(this._menuItemInstance&&this._parentMaterialMenu&&this._menu)}_closeMenu(){this._menu?.close.emit()}_openMenu(e){if(this._triggerIsAriaDisabled())return;let t=this._menu;if(this._menuOpen||!t)return;this._pendingRemoval?.unsubscribe();let n=U.get(t);U.set(t,this),n&&n!==this&&n._closeMenu();let i=this._createOverlay(t),o=i.getConfig(),r=o.positionStrategy;this._setPosition(t,r),this._canHaveBackdrop?o.hasBackdrop=t.hasBackdrop==null?!this._triggersSubmenu():t.hasBackdrop:o.hasBackdrop=t.hasBackdrop??!1,i.hasAttached()||(i.attach(this._getPortal(t)),t.lazyContent?.attach(this.menuData)),this._closingActionsSubscription=this._menuClosingActions().subscribe(()=>this._closeMenu()),t.parentMenu=this._triggersSubmenu()?this._parentMaterialMenu:void 0,t.direction=this.dir,e&&t.focusFirstItem(this._openedBy||`program`),this._setIsMenuOpen(!0),t instanceof X&&(t._setIsOpen(!0),t._directDescendantItems.changes.pipe(av(t.close)).subscribe(()=>{r.withLockedPosition(!1).reapplyLastPosition(),r.withLockedPosition(!0)}))}focus(e,t){this._focusMonitor&&e?this._focusMonitor.focusVia(this._element,e,t):this._element.nativeElement.focus(t)}_destroyMenu(e){let t=this._overlayRef,n=this._menu;!t||!this.menuOpen||(this._closingActionsSubscription.unsubscribe(),this._pendingRemoval?.unsubscribe(),n instanceof X&&this._ownsMenu(n)?(this._pendingRemoval=n._animationDone.pipe(gn$2(1)).subscribe(()=>{t.detach(),U.has(n)||n.lazyContent?.detach()}),n._setIsOpen(!1)):(t.detach(),n?.lazyContent?.detach()),n&&this._ownsMenu(n)&&U.delete(n),this.restoreFocus&&(e===`keydown`||!this._openedBy||!this._triggersSubmenu())&&this.focus(this._openedBy),this._openedBy=void 0,this._setIsMenuOpen(!1))}_setIsMenuOpen(e){e!==this._menuOpen&&(this._menuOpen=e,this._menuOpen?this.menuOpened.emit():this.menuClosed.emit(),this._triggersSubmenu()&&this._menuItemInstance._setHighlighted(e),this._changeDetectorRef.markForCheck())}_createOverlay(e){if(!this._overlayRef){let t=this._getOverlayConfig(e);this._subscribeToPositions(e,t.positionStrategy),this._overlayRef=ma(this._injector,t),this._overlayRef.keydownEvents().subscribe(n=>{this._menu instanceof X&&this._menu._handleKeydown(n)})}return this._overlayRef}_getOverlayConfig(e){return new kr({positionStrategy:ha(this._injector,this._getOverlayOrigin()).withLockedPosition().withGrowAfterOpen().withTransformOriginOn(`.mat-menu-panel, .mat-mdc-menu-panel`),backdropClass:e.backdropClass||`cdk-overlay-transparent-backdrop`,panelClass:e.overlayPanelClass,scrollStrategy:this._scrollStrategy(),direction:this._dir||`ltr`,disableAnimations:this._animationsDisabled})}_subscribeToPositions(e,t){e.setPositionClasses&&t.positionChanges.subscribe(n=>{this._ngZone.run(()=>{let i=n.connectionPair.overlayX===`start`?`after`:`before`,o=n.connectionPair.overlayY===`top`?`below`:`above`;e.setPositionClasses(i,o)})})}_setPosition(e,t){let[n,i]=e.xPosition===`before`?[`end`,`start`]:[`start`,`end`],[o,r]=e.yPosition===`above`?[`bottom`,`top`]:[`top`,`bottom`],[l,g]=[o,r],[Y,Ae]=[n,i],q=0;if(this._triggersSubmenu()){if(Ae=n=e.xPosition===`before`?`start`:`end`,i=Y=n===`end`?`start`:`end`,this._parentMaterialMenu){if(this._parentInnerPadding==null){let He=this._parentMaterialMenu.items.first;this._parentInnerPadding=He?He._getHostElement().offsetTop:0}q=o===`bottom`?this._parentInnerPadding:-this._parentInnerPadding}}else e.overlapTrigger||(l=o===`top`?`bottom`:`top`,g=r===`top`?`bottom`:`top`);t.withPositions([{originX:n,originY:l,overlayX:Y,overlayY:o,offsetY:q},{originX:i,originY:l,overlayX:Ae,overlayY:o,offsetY:q},{originX:n,originY:g,overlayX:Y,overlayY:r,offsetY:-q},{originX:i,originY:g,overlayX:Ae,overlayY:r,offsetY:-q}])}_menuClosingActions(){let e=this._getOutsideClickStream(this._overlayRef),t=this._overlayRef.detachments(),n=this._parentMaterialMenu?this._parentMaterialMenu.closed:Ay(),i=this._parentMaterialMenu?this._parentMaterialMenu._hovered().pipe(rr$1(o=>this._menuOpen&&o!==this._menuItemInstance)):Ay();return Gy(e,n,i,t)}_getPortal(e){return(!this._portal||this._portal.templateRef!==e.templateRef)&&(this._portal=new ni(e.templateRef,this._viewContainerRef)),this._portal}_ownsMenu(e){return U.get(e)===this}_triggerIsAriaDisabled(){return Nj(this._element.nativeElement.getAttribute(`aria-disabled`))}static ɵfac=function(t){_T()};static ɵdir=fw({type:a})}return a})();var $t=(()=>{class a extends gn{_cleanupTouchstart;_hoverSubscription=K.EMPTY;get _deprecatedMatMenuTriggerFor(){return this.menu}set _deprecatedMatMenuTriggerFor(e){this.menu=e}get menu(){return this._menu}set menu(e){this._menu=e}menuData;restoreFocus=!0;menuOpened=new Qe$1;onMenuOpen=this.menuOpened;menuClosed=new Qe$1;onMenuClose=this.menuClosed;constructor(){super(!0);let e=v(Ic$1);this._cleanupTouchstart=e.listen(this._element.nativeElement,`touchstart`,t=>{Kn(t)||(this._openedBy=`touch`)},{passive:!0})}triggersSubmenu(){return super._triggersSubmenu()}toggleMenu(){return this.menuOpen?this.closeMenu():this.openMenu()}openMenu(){this._openMenu(!0)}closeMenu(){this._closeMenu()}updatePosition(){this._overlayRef?.updatePosition()}ngAfterContentInit(){this._handleHover()}ngOnDestroy(){super.ngOnDestroy(),this._cleanupTouchstart(),this._hoverSubscription.unsubscribe()}_getOverlayOrigin(){return this._element}_getOutsideClickStream(e){return e.backdropClick()}_handleMousedown(e){qn(e)||(this._openedBy=e.button===0?`mouse`:void 0,this.triggersSubmenu()&&e.preventDefault())}_handleKeydown(e){let t=e.keyCode;(t===13||t===32)&&(this._openedBy=`keyboard`),this.triggersSubmenu()&&(t===39&&this.dir===`ltr`||t===37&&this.dir===`rtl`)&&(this._openedBy=`keyboard`,this.openMenu())}_handleClick(e){this.triggersSubmenu()?(e.stopPropagation(),this.openMenu()):this.toggleMenu()}_handleHover(){this.triggersSubmenu()&&this._parentMaterialMenu&&(this._hoverSubscription=this._parentMaterialMenu._hovered().subscribe(e=>{e===this._menuItemInstance&&!e.disabled&&this._parentMaterialMenu?._panelAnimationState!==`void`&&(this._openedBy=`mouse`,this._openMenu(!1))}))}static ɵfac=function(t){return new(t||a)};static ɵdir=fw({type:a,selectors:[[``,`mat-menu-trigger-for`,``],[``,`matMenuTriggerFor`,``]],hostAttrs:[1,`mat-mdc-menu-trigger`],hostVars:3,hostBindings:function(t,n){t&1&&nm$1(`click`,function(o){return n._handleClick(o)})(`mousedown`,function(o){return n._handleMousedown(o)})(`keydown`,function(o){return n._handleKeydown(o)}),t&2&&qg(`aria-haspopup`,n.menu?`menu`:null)(`aria-expanded`,n.menuOpen)(`aria-controls`,n.menuOpen?n.menu?.panelId:null)},inputs:{_deprecatedMatMenuTriggerFor:[0,`mat-menu-trigger-for`,`_deprecatedMatMenuTriggerFor`],menu:[0,`matMenuTriggerFor`,`menu`],menuData:[0,`matMenuTriggerData`,`menuData`],restoreFocus:[0,`matMenuTriggerRestoreFocus`,`restoreFocus`]},outputs:{menuOpened:`menuOpened`,onMenuOpen:`onMenuOpen`,menuClosed:`menuClosed`,onMenuClose:`onMenuClose`},exportAs:[`matMenuTrigger`],features:[Og]})}return a})();var bn=(()=>{class a{static ɵfac=function(t){return new(t||a)};static ɵdir=fw({type:a,selectors:[[`mat-toolbar-row`]],hostAttrs:[1,`mat-toolbar-row`],exportAs:[`matToolbarRow`]})}return a})();var Zt=(()=>{class a{_elementRef=v(Wr);_platform=v(z);_document=v(mt);color;_toolbarRows;ngAfterViewInit(){this._platform.isBrowser&&(this._checkToolbarMixedModes(),this._toolbarRows.changes.subscribe(()=>this._checkToolbarMixedModes()))}_checkToolbarMixedModes(){this._toolbarRows.length}static ɵfac=function(t){return new(t||a)};static ɵcmp=(function(){let e=[`*`,[[`mat-toolbar-row`]]];return aw({type:a,selectors:[[`mat-toolbar`]],contentQueries:function(i,o,r){if(i&1&&om$1(r,bn,5),i&2){let l;IC(l=DC())&&(o._toolbarRows=l)}},hostAttrs:[1,`mat-toolbar`],hostVars:6,hostBindings:function(i,o){i&2&&(jC(o.color?`mat-`+o.color:``),pm$1(`mat-toolbar-multiple-rows`,o._toolbarRows.length>0)(`mat-toolbar-single-row`,o._toolbarRows.length===0))},inputs:{color:`color`},exportAs:[`matToolbar`],ngContentSelectors:[`*`,`mat-toolbar-row`],decls:2,vars:0,template:function(i,o){i&1&&(yC$1(e),vC$1(0),vC$1(1,1))},styles:[`.mat-toolbar {
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
`],encapsulation:2})})()}return a})();function _n(a,m){if(a&1&&Qg(0,`img`,1),a&2){let e=gC();zg(`ngSrc`,e.profileService.myProfileInfo.value().avatarUrl)(`matTooltip`,e.identityService.myIdentityInfo.value()?.userName)}}function yn(a,m){if(a&1&&(Hi$1(0,`mat-icon`,2),QC(1,` account_circle `),Rl$1()),a&2){let e=gC();zg(`matTooltip`,e.identityService.myIdentityInfo.value()?.userName)}}function vn(a,m){a&1&&(Hi$1(0,`mat-icon`),QC(1,`account_circle_off`),Rl$1())}var Ie=class a{menu=Ij.required();identityService=v(Uc);profileService=v(c);imgBtnStyle=`padding: 0px; width: 40px; height: 40px; transform: translateY(3px);`;static ɵfac=function(e){return new(e||a)};static ɵcmp=aw({type:a,selectors:[[`app-account-dropdown`]],inputs:{menu:[1,`menu`]},decls:4,vars:4,consts:[[`matIconButton`,``,3,`matMenuTriggerFor`],[`priority`,``,`width`,`40`,`height`,`40`,`alt`,`user avatar`,3,`ngSrc`,`matTooltip`],[3,`matTooltip`]],template:function(e,t){e&1&&(Hi$1(0,`button`,0),eC(1,_n,1,2,`img`,1)(2,yn,2,1,`mat-icon`,2)(3,vn,2,0,`mat-icon`),Rl$1()),e&2&&(PC(t.profileService.myProfileInfo.hasValue()?t.imgBtnStyle:``),zg(`matMenuTriggerFor`,t.menu()),ID(),nC(t.profileService.myProfileInfo.value()?.avatarUrl?1:t.identityService.isAuthenticated()?2:3))},dependencies:[sp,$t,Ny,sg,tp],styles:[`button[_ngcontent-%COMP%]{margin:0;overflow:hidden}button[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:40px;height:40px}`]})};var Mn=()=>[`/`];var xn=()=>[`/UserAccount/Profile`];var kn=()=>[`/Identity/Login`];var wn=()=>[`/Identity/Signup`];function Sn(a,m){if(a&1){let e=fC();Hi$1(0,`button`,8),nm$1(`click`,function(){Sd$1(e);let n=gC();return xd$1(n.sharedConfigs.toggleColorScheme())}),Hi$1(1,`mat-icon`),QC(2,`light_mode`),Rl$1()()}}function Cn(a,m){if(a&1){let e=fC();Hi$1(0,`button`,9),nm$1(`click`,function(){Sd$1(e);let n=gC();return xd$1(n.sharedConfigs.toggleColorScheme())}),Hi$1(1,`mat-icon`),QC(2,`dark_mode`),Rl$1()()}}function In(a,m){if(a&1){let e=fC();Hi$1(0,`a`,10)(1,`mat-icon`),QC(2,`account_box`),Rl$1(),QC(3,` Profile `),Rl$1(),Hi$1(4,`a`,11),nm$1(`click`,function(){Sd$1(e);let n=gC();return xd$1(n.identityService.logout())}),Hi$1(5,`mat-icon`),QC(6,`logout`),Rl$1(),QC(7,` Logout `),Rl$1()}a&2&&zg(`routerLink`,ob(1,xn))}function Tn(a,m){a&1&&(Hi$1(0,`a`,10)(1,`mat-icon`),QC(2,`login`),Rl$1(),QC(3,` Login `),Rl$1(),Hi$1(4,`a`,10)(5,`mat-icon`),QC(6,`person_add`),Rl$1(),QC(7,` Create a new account `),Rl$1()),a&2&&(zg(`routerLink`,ob(2,kn)),ID(4),zg(`routerLink`,ob(3,wn)))}var Te=class a{sharedConfigs=v(i);document=v(mt);identityService=v(Uc);logoImgSrc=it(()=>this.sharedConfigs.colorScheme()===`dark`?`/Logo/HoLibz_Logo_Dark_Pink_Only.webp`:`/Logo/HoLibz_Logo_Light_Blue_Only.webp`);displayShadow=Et$1(!1);onWindowScroll(){this.document.defaultView&&this.document.defaultView.scrollY>0?this.displayShadow.set(!0):this.displayShadow.set(!1)}static ɵfac=function(e){return new(e||a)};static ɵcmp=aw({type:a,selectors:[[`app-nav-bar`]],hostBindings:function(e,t){e&1&&nm$1(`scroll`,function(){return t.onWindowScroll()},FI)},decls:11,vars:8,consts:[[`account`,``],[`matButton`,``,`matTooltip`,`Home`,2,`padding`,`12px 0 0 0`,`overflow`,`hidden`,3,`routerLink`],[`width`,`52`,`height`,`40`,`alt`,`HoLibz Logo`,3,`ngSrc`],[1,`full-spacer`],[`matIconButton`,``,`matTooltip`,`Light Mode`,1,`lightDarkBtn`],[`matIconButton`,``,`matTooltip`,`Dark Mode`,1,`lightDarkBtn`],[3,`menu`],[1,`navbar-matMenu`],[`matIconButton`,``,`matTooltip`,`Light Mode`,1,`lightDarkBtn`,3,`click`],[`matIconButton`,``,`matTooltip`,`Dark Mode`,1,`lightDarkBtn`,3,`click`],[`mat-menu-item`,``,3,`routerLink`],[`mat-menu-item`,``,3,`click`]],template:function(e,t){if(e&1&&(Hi$1(0,`mat-toolbar`)(1,`a`,1),Qg(2,`img`,2),Rl$1(),Qg(3,`span`,3),eC(4,Sn,3,0,`button`,4)(5,Cn,3,0,`button`,5),Qg(6,`app-account-dropdown`,6),Hi$1(7,`mat-menu`,7,0),eC(9,In,8,2)(10,Tn,8,4),Rl$1()()),e&2){let n=wC(8);pm$1(`shadow`,t.displayShadow()),ID(),zg(`routerLink`,ob(7,Mn)),ID(),zg(`ngSrc`,t.logoImgSrc()),ID(2),nC(t.sharedConfigs.colorScheme()===`light`?4:5),ID(2),zg(`menu`,n),ID(3),nC(t.identityService&&t.identityService.isAuthenticated()?9:10)}},dependencies:[Ny,Zt,sp,X,J,Ie,tp,Pl,sg,vC],styles:[`.full-spacer[_ngcontent-%COMP%]{flex:1 1 auto}mat-toolbar[_ngcontent-%COMP%]{position:fixed;width:100%;height:56px;z-index:10;top:0}mat-toolbar.shadow[_ngcontent-%COMP%]{box-shadow:0 0 5px 0 var(--%NS%mat-sys-outline-variant)}#mainMenu[_ngcontent-%COMP%]{display:block}#littleMenu[_ngcontent-%COMP%]{display:none}.lightDarkBtn[_ngcontent-%COMP%]{margin:0 20px 0 0}@media screen and (max-width:600px){.lightDarkBtn[_ngcontent-%COMP%]{margin:0}}`]})};var De=class a{static ɵfac=function(e){return new(e||a)};static ɵcmp=aw({type:a,selectors:[[`app-root`]],decls:2,vars:0,template:function(e,t){e&1&&Qg(0,`app-nav-bar`)(1,`router-outlet`)},dependencies:[$o,Te],encapsulation:2})};Sd(De,Wt).catch(a=>console.error(a));export{i as $,_o as A,ma as B,Uc as C,Xc as D,WS as E,ee as F,rc as G,ni as H,ei as I,tp as J,sg as K,hm as L,c0 as M,d0 as N,Zo as O,de as P,z as Q,ia as R,Te$1 as S,Vm as T,pn$1 as U,mm as V,qy as W,yC as X,vC as Y,ys as Z,P_ as _,Dc as a,Qn as b,Fr as c,Kt as d,Lm as f,Ny as g,Ne as h,Ce$1 as i,_r as j,_C as k,Jn as l,Mr as m,$m as n,Dt as o,Me as p,sp as q,Am as r,Et as s,c as t,Jt as u,Pc as v,Um as w,Sy as x,Pl as y,kr as z};