import{$n as qy,A as ID,Ar as yC,B as Je$1,C as FI,Cn as jC,D as Gy,Dn as kg,Dr as x,Er as wt,Et as Ud,Fr as zv,H as K$2,In as nC,J as Ll,Jt as ae,Kn as ob,Kt as _T,M as Ic,Mt as Vr,N as Ij,Nr as z,O as Hi,On as kl,Or as xd,Pn as mt,Pr as zg,Pt as Wr,Q as Nj,Sn as iv,Sr as wC,T as Fr,Tn as ju,Tr as wm,Wt as Zv,X as Mi,Xn as pm,Xt as av,Zn as qg,Zt as aw,_r as vC,_t as S,bn as is,c as Ay,ct as QC,dn as gC,dr as tb,en as eC,fn as gn$1,ft as RE,gr as v,h as Dh,it as PC,jn as le,jt as Vl,k as IC,kt as Un,lr as sv,lt as Qe$1,m as DC,mt as Rl,nn as ee$1,nr as rm,nt as Og,o as Aj,on as fC,or as se,q as Lg,qn as om,qt as _j,r as $r,rn as em,rr,st as Q$2,un as fw,ut as Qg,vt as Sd,w as Fe$1,x as Et,xn as it$1,y as Ee,yn as im,zn as nm}from"./chunk-kniop8OV.js";import{$ as v_,B as g_,C as Si,D as Xd,E as W_,F as am,H as h_,I as bi,J as mt$1,L as c_,M as _c,N as _i,O as Xe,P as ae$1,S as Se$1,U as je$1,W as jt$1,X as re,Y as nn$1,Z as si,_ as Oc,a as Gd,at as yl,b as Pn,c as Hl,d as La,et as vt$1,f as Lc,g as O_,h as Nm,it as yi,k as Xr,l as Jr,m as M_,nt as xe,o as Gp,ot as yv,p as Ln,r as C_,rt as y0,s as Hd,st as zm,t as $l,tt as wg,u as Ks,v as On,w as To,z as fm}from"./chunk-666tH_z6.js";var i=class e{_document=v(mt);_colorScheme=Et(`light`);colorScheme=it$1(()=>this._colorScheme());constructor(){Dh(()=>{let o=localStorage.getItem(`colorScheme`);o&&(o===`dark`?(this._colorScheme.set(`dark`),this._document.body.classList.add(`dark-mode`)):(this._colorScheme.set(`light`),this._document.body.classList.remove(`dark-mode`)))})}toggleColorScheme(){this._colorScheme()===`dark`?(this._colorScheme.set(`light`),this._document.body.classList.remove(`dark-mode`)):(this._colorScheme.set(`dark`),this._document.body.classList.add(`dark-mode`)),localStorage.setItem(`colorScheme`,this.colorScheme())}static ɵfac=function(l){return new(l||e)};static ɵprov=$r({token:e,factory:e.ɵfac})};var c=class s{httpClient=v(mt$1);identityService=v(Lc);getProfileInfo_Url=`/api/UserProfile/GetProfileInfo?userId=`;myProfileInfo=La(()=>this.identityService.isAuthenticated()?`${this.getProfileInfo_Url}${this.identityService.myIdentityInfo.value()?.id}`:void 0);constructor(){}getUserAvatarUrl(e){let t=new re().set(`userId`,e);return this.httpClient.get(`/api/UserProfile/GetUserAvatarUrl`,{params:t})}saveUserAvatar(e){let t=new FormData;return t.append(`userImageFile`,e),this.httpClient.post(`/api/UserProfile/SubmitUserImage`,t).pipe(ju({next:r=>{r&&r.success&&this.myProfileInfo.reload()}}))}deleteUserAvatar(){return this.httpClient.delete(`/api/UserProfile/DeleteUserImage`).pipe(ju({next:e=>{e&&e.success&&this.myProfileInfo.reload()}}))}changeName(e){let t=new re().set(`name`,e);return this.httpClient.post(`/api/UserProfile/SubmitProfileName`,t).pipe(ju({next:r=>{r&&r.success&&this.myProfileInfo.reload()}}))}changeDescription(e){let t=new re().set(`description`,e);return this.httpClient.post(`/api/UserProfile/SubmitDescription`,t).pipe(ju({next:r=>{r&&r.success&&this.myProfileInfo.reload()}}))}static ɵfac=function(t){return new(t||s)};static ɵprov=$r({token:s,factory:s.ɵfac})};var Gt=20;var H=(()=>{class o{_ngZone=v(Fe$1);_platform=v(ae$1);_renderer=v(Vr).createRenderer(null,null);_cleanupGlobalListener;_scrolled=new ee$1;_scrolledCount=0;scrollContainers=/* @__PURE__ */ new Map;register(e){this.scrollContainers.has(e)||this.scrollContainers.set(e,e.elementScrolled().subscribe(()=>this._scrolled.next(e)))}deregister(e){let i=this.scrollContainers.get(e);i&&(i.unsubscribe(),this.scrollContainers.delete(e))}scrolled(e=Gt){return this._platform.isBrowser?new x(i=>{this._cleanupGlobalListener||(this._cleanupGlobalListener=this._ngZone.runOutsideAngular(()=>this._renderer.listen(`document`,`scroll`,()=>this._scrolled.next())));let n=e>0?this._scrolled.pipe(qy(e)).subscribe(i):this._scrolled.subscribe(i);return this._scrolledCount++,()=>{n.unsubscribe(),this._scrolledCount--,this._scrolledCount||(this._cleanupGlobalListener?.(),this._cleanupGlobalListener=void 0)}}):Ay()}ngOnDestroy(){this._cleanupGlobalListener?.(),this._cleanupGlobalListener=void 0,this.scrollContainers.forEach((e,i)=>this.deregister(i)),this._scrolled.complete()}ancestorScrolled(e,i){let n=this.getAncestorScrollContainers(e);return this.scrolled(i).pipe(rr(r=>!r||n.indexOf(r)>-1))}getAncestorScrollContainers(e){let i=[];return this.scrollContainers.forEach((n,r)=>{this._targetContainsElement(r,e)&&i.push(r)}),i}_targetContainsElement(e,i){let n=xe(i),r=e.getElementRef().nativeElement;do if(n==r)return!0;while(n=n.parentElement);return!1}static ɵfac=function(i){return new(i||o)};static ɵprov=$r({token:o,factory:o.ɵfac})}return o})();var $t=(()=>{class o{elementRef=v(Wr);scrollDispatcher=v(H);ngZone=v(Fe$1);dir=v(am,{optional:!0});_scrollElement=this.elementRef.nativeElement;_destroyed=new ee$1;_renderer=v(Ic);_cleanupScroll;_elementScrolled=new ee$1;ngOnInit(){this._cleanupScroll=this.ngZone.runOutsideAngular(()=>this._renderer.listen(this._scrollElement,`scroll`,e=>this._elementScrolled.next(e))),this.scrollDispatcher.register(this)}ngOnDestroy(){this._cleanupScroll?.(),this._elementScrolled.complete(),this.scrollDispatcher.deregister(this),this._destroyed.next(),this._destroyed.complete()}elementScrolled(){return this._elementScrolled}getElementRef(){return this.elementRef}scrollTo(e){let i=this.elementRef.nativeElement,n=this.dir&&this.dir.value==`rtl`;e.left??=n?e.end:e.start,e.right??=n?e.start:e.end,e.bottom!=null&&(e.top=i.scrollHeight-i.clientHeight-e.bottom),n&&g_()!=Ln.NORMAL?(e.left!=null&&(e.right=i.scrollWidth-i.clientWidth-e.left),g_()==Ln.INVERTED?e.left=e.right:g_()==Ln.NEGATED&&(e.left=e.right?-e.right:e.right)):e.right!=null&&(e.left=i.scrollWidth-i.clientWidth-e.right),this._applyScrollToOptions(e)}_applyScrollToOptions(e){let i=this.elementRef.nativeElement;h_()?i.scrollTo(e):(e.top!=null&&(i.scrollTop=e.top),e.left!=null&&(i.scrollLeft=e.left))}measureScrollOffset(e){let i=`left`,n=`right`,r=this.elementRef.nativeElement;if(e==`top`)return r.scrollTop;if(e==`bottom`)return r.scrollHeight-r.clientHeight-r.scrollTop;let s=this.dir&&this.dir.value==`rtl`;return e==`start`?e=s?n:i:e==`end`&&(e=s?i:n),s&&g_()==Ln.INVERTED?e==i?r.scrollWidth-r.clientWidth-r.scrollLeft:r.scrollLeft:s&&g_()==Ln.NEGATED?e==i?r.scrollLeft+r.scrollWidth-r.clientWidth:-r.scrollLeft:e==i?r.scrollLeft:r.scrollWidth-r.clientWidth-r.scrollLeft}static ɵfac=function(i){return new(i||o)};static ɵdir=fw({type:o,selectors:[[``,`cdk-scrollable`,``],[``,`cdkScrollable`,``]]})}return o})();var Kt$1=20;var M=(()=>{class o{_platform=v(ae$1);_listeners;_viewportSize=null;_change=new ee$1;_document=v(mt);constructor(){let e=v(Fe$1),i=v(Vr).createRenderer(null,null);e.runOutsideAngular(()=>{if(this._platform.isBrowser){let n=r=>this._change.next(r);this._listeners=[i.listen(`window`,`resize`,n),i.listen(`window`,`orientationchange`,n)]}this.change().subscribe(()=>this._viewportSize=null)})}ngOnDestroy(){this._listeners?.forEach(e=>e()),this._change.complete()}getViewportSize(){this._viewportSize||this._updateViewportSize();let e={width:this._viewportSize.width,height:this._viewportSize.height};return this._platform.isBrowser||(this._viewportSize=null),e}getViewportRect(){let e=this.getViewportScrollPosition(),{width:i,height:n}=this.getViewportSize();return{top:e.top,left:e.left,bottom:e.top+n,right:e.left+i,height:n,width:i}}getViewportScrollPosition(){if(!this._platform.isBrowser)return{top:0,left:0};let e=this._document,i=this._getWindow(),n=e.documentElement,r=n.getBoundingClientRect();return{top:-r.top||e.body?.scrollTop||i.scrollY||n.scrollTop||0,left:-r.left||e.body?.scrollLeft||i.scrollX||n.scrollLeft||0}}change(e=Kt$1){return e>0?this._change.pipe(qy(e)):this._change}_getWindow(){return this._document.defaultView||window}_updateViewportSize(){let e=this._getWindow();this._viewportSize=this._platform.isBrowser?{width:e.innerWidth,height:e.innerHeight}:{width:0,height:0}}static ɵfac=function(i){return new(i||o)};static ɵprov=$r({token:o,factory:o.ɵfac})}return o})();var V$1=class{_attachedHost=null;attach(t){return this._attachedHost=t,t.attach(this)}detach(){let t=this._attachedHost;t!=null&&(this._attachedHost=null,t.detach())}get isAttached(){return this._attachedHost!=null}setAttachedHost(t){this._attachedHost=t}};var pt=class extends V$1{component;viewContainerRef;injector;projectableNodes;bindings;directives;constructor(t,e,i,n,r,s){super(),this.component=t,this.viewContainerRef=e,this.injector=i,this.projectableNodes=n,this.bindings=r||null,this.directives=s||null}};var A=class extends V$1{templateRef;viewContainerRef;context;injector;constructor(t,e,i,n){super(),this.templateRef=t,this.viewContainerRef=e,this.context=i,this.injector=n}get origin(){return this.templateRef.elementRef}attach(t,e=this.context){return this.context=e,super.attach(t)}detach(){return this.context=void 0,super.detach()}};var ft=class extends V$1{element;constructor(t){super(),this.element=t instanceof Wr?t.nativeElement:t}};var X$1=class{_attachedPortal=null;_disposeFn=null;_isDisposed=!1;hasAttached(){return!!this._attachedPortal}attach(t){if(t instanceof pt)return this._attachedPortal=t,this.attachComponentPortal(t);if(t instanceof A)return this._attachedPortal=t,this.attachTemplatePortal(t);if(this.attachDomPortal&&t instanceof ft)return this._attachedPortal=t,this.attachDomPortal(t)}attachDomPortal=null;detach(){this._attachedPortal&&(this._attachedPortal.setAttachedHost(null),this._attachedPortal=null),this._invokeDisposeFn()}dispose(){this.hasAttached()&&this.detach(),this._invokeDisposeFn(),this._isDisposed=!0}setDisposeFn(t){this._disposeFn=t}_invokeDisposeFn(){this._disposeFn&&(this._disposeFn(),this._disposeFn=null)}};var j=class extends X$1{outletElement;_appRef;_defaultInjector;constructor(t,e,i){super(),this.outletElement=t,this._appRef=e,this._defaultInjector=i}attachComponentPortal(t){let e;if(t.viewContainerRef){let i=t.injector||t.viewContainerRef.injector,n=i.get(Un,null,{optional:!0})||void 0;e=t.viewContainerRef.createComponent(t.component,{index:t.viewContainerRef.length,injector:i,ngModuleRef:n,projectableNodes:t.projectableNodes||void 0,bindings:t.bindings||void 0,directives:t.directives||void 0}),this.setDisposeFn(()=>e.destroy())}else{let i=this._appRef,n=t.injector||this._defaultInjector||se.NULL,r=n.get(Ee,i.injector);e=Aj(t.component,{elementInjector:n,environmentInjector:r,projectableNodes:t.projectableNodes||void 0,bindings:t.bindings||void 0,directives:t.directives||void 0}),i.attachView(e.hostView),this.setDisposeFn(()=>{i.viewCount>0&&i.detachView(e.hostView),e.destroy()})}return this.outletElement.appendChild(this._getComponentRootNode(e)),this._attachedPortal=t,e}attachTemplatePortal(t){let e=t.viewContainerRef,i=e.createEmbeddedView(t.templateRef,t.context,{injector:t.injector});return i.rootNodes.forEach(n=>this.outletElement.appendChild(n)),i.detectChanges(),this.setDisposeFn(()=>{let n=e.indexOf(i);n!==-1&&e.remove(n)}),this._attachedPortal=t,i}attachDomPortal=t=>{let e=t.element;e.parentNode;let i=this.outletElement.ownerDocument.createComment(`dom-portal`);e.parentNode.insertBefore(i,e),this.outletElement.appendChild(e),this._attachedPortal=t,super.setDisposeFn(()=>{i.parentNode&&i.parentNode.replaceChild(e,i)})};dispose(){super.dispose(),this.outletElement.remove()}_getComponentRootNode(t){return t.hostView.rootNodes[0]}};var Qe=(()=>{class o extends A{constructor(){let e=v(Fr),i=v(is);super(e,i)}static ɵfac=function(i){return new(i||o)};static ɵdir=fw({type:o,selectors:[[``,`cdkPortal`,``]],exportAs:[`cdkPortal`],features:[Og]})}return o})();var Je=(()=>{class o extends X$1{_moduleRef=v(Un,{optional:!0});_document=v(mt);_viewContainerRef=v(is);_isInitialized=!1;_attachedRef=null;get portal(){return this._attachedPortal}set portal(e){this.hasAttached()&&!e&&!this._isInitialized||(this.hasAttached()&&super.detach(),e&&super.attach(e),this._attachedPortal=e||null)}attached=new Qe$1;get attachedRef(){return this._attachedRef}ngOnInit(){this._isInitialized=!0}ngOnDestroy(){super.dispose(),this._attachedRef=this._attachedPortal=null}attachComponentPortal(e){e.setAttachedHost(this);let i=e.viewContainerRef!=null?e.viewContainerRef:this._viewContainerRef,n=i.createComponent(e.component,{index:i.length,injector:e.injector||i.injector,projectableNodes:e.projectableNodes||void 0,ngModuleRef:this._moduleRef||void 0,bindings:e.bindings||void 0,directives:e.directives||void 0});return i!==this._viewContainerRef&&this._insertContent(n.hostView.rootNodes[0]),super.setDisposeFn(()=>n.destroy()),this._attachedPortal=e,this._attachedRef=n,this.attached.emit(n),n}attachTemplatePortal(e){e.setAttachedHost(this);let i=this._viewContainerRef.createEmbeddedView(e.templateRef,e.context,{injector:e.injector});return super.setDisposeFn(()=>this._viewContainerRef.clear()),this._attachedPortal=e,this._attachedRef=i,this.attached.emit(i),i}attachDomPortal=e=>{let i=e.element;i.parentNode;let n=this._document.createComment(`dom-portal`);e.setAttachedHost(this),i.parentNode.insertBefore(n,i),this._insertContent(i),this._attachedPortal=e,super.setDisposeFn(()=>n.parentNode?.replaceChild(i,n))};_insertContent(e){let i=this._viewContainerRef.element.nativeElement;i.nodeType===i.ELEMENT_NODE?i.appendChild(e):i.parentNode?.insertBefore(e,i)}static ɵfac=(()=>{let e;return function(n){return(e||(e=RE(o)))(n||o)}})();static ɵdir=fw({type:o,selectors:[[``,`cdkPortalOutlet`,``]],inputs:{portal:[0,`cdkPortalOutlet`,`portal`]},outputs:{attached:`attached`},exportAs:[`cdkPortalOutlet`],features:[Og]})}return o})();var At=h_();function qt(o){return new Z$1(o.get(M),o.get(mt))}var Z$1=class{_viewportRuler;_previousHTMLStyles={top:``,left:``};_previousScrollPosition;_isEnabled=!1;_document;constructor(t,e){this._viewportRuler=t,this._document=e}attach(){}enable(){if(this._canBeEnabled()){let t=this._document.documentElement;this._previousScrollPosition=this._viewportRuler.getViewportScrollPosition(),this._previousHTMLStyles.left=t.style.left||``,this._previousHTMLStyles.top=t.style.top||``,t.style.left=M_(-this._previousScrollPosition.left),t.style.top=M_(-this._previousScrollPosition.top),t.classList.add(`cdk-global-scrollblock`),this._isEnabled=!0}}disable(){if(this._isEnabled){let t=this._document.documentElement,e=this._document.body,i=t.style,n=e.style,r=i.scrollBehavior||``,s=n.scrollBehavior||``;this._isEnabled=!1,i.left=this._previousHTMLStyles.left,i.top=this._previousHTMLStyles.top,t.classList.remove(`cdk-global-scrollblock`),At&&(i.scrollBehavior=n.scrollBehavior=`auto`),window.scroll(this._previousScrollPosition.left,this._previousScrollPosition.top),At&&(i.scrollBehavior=r,n.scrollBehavior=s)}}_canBeEnabled(){if(this._document.documentElement.classList.contains(`cdk-global-scrollblock`)||this._isEnabled)return!1;let e=this._document.documentElement,i=this._viewportRuler.getViewportSize();return e.scrollHeight>i.height||e.scrollWidth>i.width}};var U$1=class{enable(){}disable(){}attach(){}};function _t(o,t){return t.some(e=>{let i=o.bottom<e.top,n=o.top>e.bottom,r=o.right<e.left,s=o.left>e.right;return i||n||r||s})}function Bt(o,t){return t.some(e=>{let i=o.top<e.top,n=o.bottom>e.bottom,r=o.left<e.left,s=o.right>e.right;return i||n||r||s})}function Qt$1(o,t){return new G(o.get(H),o.get(M),o.get(Fe$1),t)}var G=class{_scrollDispatcher;_viewportRuler;_ngZone;_config;_scrollSubscription=null;_overlayRef;constructor(t,e,i,n){this._scrollDispatcher=t,this._viewportRuler=e,this._ngZone=i,this._config=n}attach(t){this._overlayRef,this._overlayRef=t}enable(){if(!this._scrollSubscription){let t=this._config?this._config.scrollThrottle:0;this._scrollSubscription=this._scrollDispatcher.scrolled(t).subscribe(()=>{if(this._overlayRef.updatePosition(),this._config&&this._config.autoClose){let e=this._overlayRef.overlayElement.getBoundingClientRect(),{width:i,height:n}=this._viewportRuler.getViewportSize();_t(e,[{width:i,height:n,bottom:n,right:i,top:0,left:0}])&&(this.disable(),this._ngZone.run(()=>this._overlayRef.detach()))}})}}disable(){this._scrollSubscription&&(this._scrollSubscription.unsubscribe(),this._scrollSubscription=null)}detach(){this.disable(),this._overlayRef=null}};var $=class{positionStrategy;scrollStrategy=new U$1;panelClass=``;hasBackdrop=!1;backdropClass=`cdk-overlay-dark-backdrop`;disableAnimations;width;height;minWidth;minHeight;maxWidth;maxHeight;direction;disposeOnNavigation=!1;usePopover;eventPredicate;constructor(t){if(t){let e=Object.keys(t);for(let i of e)t[i]!==void 0&&(this[i]=t[i])}}};var K$1=class{connectionPair;scrollableViewProperties;constructor(t,e){this.connectionPair=t,this.scrollableViewProperties=e}};var Nt=(()=>{class o{_attachedOverlays=[];_document=v(mt);_isAttached=!1;ngOnDestroy(){this.detach()}add(e){this.remove(e),this._attachedOverlays.push(e)}remove(e){let i=this._attachedOverlays.indexOf(e);i>-1&&this._attachedOverlays.splice(i,1),this._attachedOverlays.length===0&&this.detach()}canReceiveEvent(e,i,n){return n.observers.length<1?!1:e.eventPredicate?e.eventPredicate(i):!0}static ɵfac=function(i){return new(i||o)};static ɵprov=$r({token:o,factory:o.ɵfac})}return o})();var Wt$1=(()=>{class o extends Nt{_ngZone=v(Fe$1);_renderer=v(Vr).createRenderer(null,null);_cleanupKeydown;add(e){super.add(e),this._isAttached||(this._ngZone.runOutsideAngular(()=>{this._cleanupKeydown=this._renderer.listen(`body`,`keydown`,this._keydownListener)}),this._isAttached=!0)}detach(){this._isAttached&&(this._cleanupKeydown?.(),this._isAttached=!1)}_keydownListener=e=>{let i=this._attachedOverlays;for(let n=i.length-1;n>-1;n--){let r=i[n];if(this.canReceiveEvent(r,e,r._keydownEvents)){this._ngZone.run(()=>r._keydownEvents.next(e));break}}};static ɵfac=function(i){return new(i||o)};static ɵprov=$r({token:o,factory:o.ɵfac})}return o})();var Yt=(()=>{class o extends Nt{_platform=v(ae$1);_ngZone=v(Fe$1);_renderer=v(Vr).createRenderer(null,null);_cursorOriginalValue;_cursorStyleIsSet=!1;_pointerDownEventTarget=null;_cleanups;add(e){if(super.add(e),!this._isAttached){let i=this._document.body,n={capture:!0},r=this._renderer;this._cleanups=this._ngZone.runOutsideAngular(()=>[r.listen(i,`pointerdown`,this._pointerDownListener,n),r.listen(i,`click`,this._clickListener,n),r.listen(i,`auxclick`,this._clickListener,n),r.listen(i,`contextmenu`,this._clickListener,n)]),this._platform.IOS&&!this._cursorStyleIsSet&&(this._cursorOriginalValue=i.style.cursor,i.style.cursor=`pointer`,this._cursorStyleIsSet=!0),this._isAttached=!0}}detach(){this._isAttached&&(this._cleanups?.forEach(e=>e()),this._cleanups=void 0,this._platform.IOS&&this._cursorStyleIsSet&&(this._document.body.style.cursor=this._cursorOriginalValue,this._cursorStyleIsSet=!1),this._isAttached=!1)}_pointerDownListener=e=>{this._pointerDownEventTarget=Se$1(e)};_clickListener=e=>{let i=Se$1(e),n=e.type===`click`&&this._pointerDownEventTarget?this._pointerDownEventTarget:i;this._pointerDownEventTarget=null;let r=this._attachedOverlays.slice();for(let s=r.length-1;s>-1;s--){let a=r[s],c=a._outsidePointerEvents;if(!(!a.hasAttached()||!this.canReceiveEvent(a,e,c))){if(Ft(a.overlayElement,i)||Ft(a.overlayElement,n))break;this._ngZone?this._ngZone.run(()=>c.next(e)):c.next(e)}}};static ɵfac=function(i){return new(i||o)};static ɵprov=$r({token:o,factory:o.ɵfac})}return o})();function Ft(o,t){let e=typeof ShadowRoot<`u`&&ShadowRoot,i=t;for(;i;){if(i===o)return!0;i=e&&i instanceof ShadowRoot?i.host:i.parentNode}return!1}var Ht$1=(()=>{class o{static ɵfac=function(i){return new(i||o)};static ɵcmp=aw({type:o,selectors:[[`ng-component`]],hostAttrs:[`cdk-overlay-style-loader`,``],decls:0,vars:0,template:function(i,n){},styles:[`.cdk-overlay-container, .cdk-global-overlay-wrapper {
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
`],encapsulation:2})}return o})();var Xt=(()=>{class o{_platform=v(ae$1);_containerElement;_document=v(mt);_styleLoader=v(je$1);ngOnDestroy(){this._containerElement?.remove()}getContainerElement(){return this._loadStyles(),this._containerElement||this._createContainer(),this._containerElement}_createContainer(){let e=`cdk-overlay-container`;if(this._platform.isBrowser||v_()){let n=this._document.querySelectorAll(`.${e}[platform="server"], .${e}[platform="test"]`);for(let r=0;r<n.length;r++)n[r].remove()}let i=this._document.createElement(`div`);i.classList.add(e),v_()?i.setAttribute(`platform`,`test`):this._platform.isBrowser||i.setAttribute(`platform`,`server`),this._document.body.appendChild(i),this._containerElement=i}_loadStyles(){this._styleLoader.load(Ht$1)}static ɵfac=function(i){return new(i||o)};static ɵprov=$r({token:o,factory:o.ɵfac})}return o})();var vt=class{_renderer;_ngZone;element;_cleanupClick;_cleanupTransitionEnd;_fallbackTimeout;constructor(t,e,i,n){this._renderer=e,this._ngZone=i,this.element=t.createElement(`div`),this.element.classList.add(`cdk-overlay-backdrop`),this._cleanupClick=e.listen(this.element,`click`,n)}detach(){this._ngZone.runOutsideAngular(()=>{let t=this.element;clearTimeout(this._fallbackTimeout),this._cleanupTransitionEnd?.(),this._cleanupTransitionEnd=this._renderer.listen(t,`transitionend`,this.dispose),this._fallbackTimeout=setTimeout(this.dispose,500),t.style.pointerEvents=`none`,t.classList.remove(`cdk-overlay-backdrop-showing`)})}dispose=()=>{clearTimeout(this._fallbackTimeout),this._cleanupClick?.(),this._cleanupTransitionEnd?.(),this._cleanupClick=this._cleanupTransitionEnd=this._fallbackTimeout=void 0,this.element.remove()}};function yt(o){return o&&o.nodeType===1}var gt=Et([]);var q=class{_portalOutlet;_host;_pane;_config;_ngZone;_keyboardDispatcher;_document;_location;_outsideClickDispatcher;_animationsDisabled;_injector;_renderer;_backdropClick=new ee$1;_attachments=new ee$1;_detachments=new ee$1;_positionStrategy;_scrollStrategy;_locationChanges;_backdropRef=null;_detachContentMutationObserver;_detachContentAfterRenderRef;_disposed=!1;_previousHostParent;_keydownEvents=new ee$1;_outsidePointerEvents=new ee$1;_afterNextRenderRef;constructor(t,e,i,n,r,s,a,c,u,l=!1,d,f){this._portalOutlet=t,this._host=e,this._pane=i,this._config=n,this._ngZone=r,this._keyboardDispatcher=s,this._document=a,this._location=c,this._outsideClickDispatcher=u,this._animationsDisabled=l,this._injector=d,this._renderer=f,n.scrollStrategy&&(this._scrollStrategy=n.scrollStrategy,this._scrollStrategy.attach(this)),this._positionStrategy=n.positionStrategy}get overlayElement(){return this._pane}get backdropElement(){return this._backdropRef?.element||null}get hostElement(){return this._host}get eventPredicate(){return this._config?.eventPredicate||null}attach(t){if(this._disposed)return null;this._attachHost();let e=this._portalOutlet.attach(t);if(this._positionStrategy?.attach(this),this._updateStackingOrder(),this._updateElementSize(),this._updateElementDirection(),le(()=>{gt.update(i=>i.includes(this)?i:[...i,this])}),this._scrollStrategy&&this._scrollStrategy.enable(),this._afterNextRenderRef?.destroy(),this._afterNextRenderRef=Dh(()=>{this.hasAttached()&&this.updatePosition()},{injector:this._injector}),this._togglePointerEvents(!0),this._config.hasBackdrop&&this._attachBackdrop(),this._config.panelClass&&this._toggleClasses(this._pane,this._config.panelClass,!0),this._attachments.next(),this._completeDetachContent(),this._keyboardDispatcher.add(this),this._config.disposeOnNavigation===!0||this._config.disposeOnNavigation===`pop-state`){let i=this._location.subscribe(()=>this.dispose());this._locationChanges=()=>i.unsubscribe()}else this._config.disposeOnNavigation===`url-change`&&(this._locationChanges=this._location.onUrlChange(()=>this.dispose()));return this._outsideClickDispatcher.add(this),typeof e?.onDestroy==`function`&&e.onDestroy(()=>{this.hasAttached()&&this._ngZone.runOutsideAngular(()=>Promise.resolve().then(()=>this.detach()))}),e}detach(){if(!this.hasAttached())return;this.detachBackdrop(),this._togglePointerEvents(!1),this._positionStrategy&&this._positionStrategy.detach&&this._positionStrategy.detach(),this._scrollStrategy&&this._scrollStrategy.disable();let t=this._portalOutlet.detach();return this._detachments.next(),this._completeDetachContent(),this._keyboardDispatcher.remove(this),this._detachContentWhenEmpty(),this._locationChanges?.(),this._outsideClickDispatcher.remove(this),le(()=>{gt.update(e=>e.filter(i=>i!==this))}),t}dispose(){if(this._disposed)return;let t=this.hasAttached();this._positionStrategy&&this._positionStrategy.dispose(),this._disposeScrollStrategy(),this._backdropRef?.dispose(),this._locationChanges?.(),this._keyboardDispatcher.remove(this),this._portalOutlet.dispose(),this._attachments.complete(),this._backdropClick.complete(),this._keydownEvents.complete(),this._outsidePointerEvents.complete(),this._outsideClickDispatcher.remove(this),this._host?.remove(),this._afterNextRenderRef?.destroy(),this._previousHostParent=this._pane=this._host=this._backdropRef=null,t&&this._detachments.next(),this._detachments.complete(),this._completeDetachContent(),this._disposed=!0,le(()=>{gt.update(e=>e.filter(i=>i!==this))})}hasAttached(){return this._portalOutlet.hasAttached()}backdropClick(){return this._backdropClick}attachments(){return this._attachments}detachments(){return this._detachments}keydownEvents(){return this._keydownEvents}outsidePointerEvents(){return this._outsidePointerEvents}getConfig(){return this._config}updatePosition(){this._positionStrategy&&this._positionStrategy.apply()}updatePositionStrategy(t){t!==this._positionStrategy&&(this._positionStrategy&&this._positionStrategy.dispose(),this._positionStrategy=t,this.hasAttached()&&(t.attach(this),this.updatePosition()))}updateSize(t){this._config=z(z({},this._config),t),this._updateElementSize()}setDirection(t){this._config=Q$2(z({},this._config),{direction:t}),this._updateElementDirection()}addPanelClass(t){this._pane&&this._toggleClasses(this._pane,t,!0)}removePanelClass(t){this._pane&&this._toggleClasses(this._pane,t,!1)}getDirection(){let t=this._config.direction;return t?typeof t==`string`?t:t.value:`ltr`}updateScrollStrategy(t){t!==this._scrollStrategy&&(this._disposeScrollStrategy(),this._scrollStrategy=t,this.hasAttached()&&(t.attach(this),t.enable()))}_updateElementDirection(){this._host.setAttribute(`dir`,this.getDirection())}_updateElementSize(){if(!this._pane)return;let t=this._pane.style;t.width=M_(this._config.width),t.height=M_(this._config.height),t.minWidth=M_(this._config.minWidth),t.minHeight=M_(this._config.minHeight),t.maxWidth=M_(this._config.maxWidth),t.maxHeight=M_(this._config.maxHeight)}_togglePointerEvents(t){this._pane.style.pointerEvents=t?``:`none`}_attachHost(){if(!this._host.parentElement){let t=this._config.usePopover?this._positionStrategy?.getPopoverInsertionPoint?.():null;yt(t)?t.after(this._host):t?.type===`parent`?t.element.appendChild(this._host):this._previousHostParent?.appendChild(this._host)}if(this._config.usePopover)try{this._host.showPopover()}catch{}}_attachBackdrop(){let t=`cdk-overlay-backdrop-showing`;this._backdropRef?.dispose(),this._backdropRef=new vt(this._document,this._renderer,this._ngZone,e=>{this._backdropClick.next(e)}),this._animationsDisabled&&this._backdropRef.element.classList.add(`cdk-overlay-backdrop-noop-animation`),this._config.backdropClass&&this._toggleClasses(this._backdropRef.element,this._config.backdropClass,!0),this._config.usePopover?this._host.prepend(this._backdropRef.element):this._host.parentElement.insertBefore(this._backdropRef.element,this._host),!this._animationsDisabled&&typeof requestAnimationFrame<`u`?this._ngZone.runOutsideAngular(()=>{requestAnimationFrame(()=>this._backdropRef?.element.classList.add(t))}):this._backdropRef.element.classList.add(t)}_updateStackingOrder(){!this._config.usePopover&&this._host.nextSibling&&this._host.parentNode.appendChild(this._host)}detachBackdrop(){this._animationsDisabled?(this._backdropRef?.dispose(),this._backdropRef=null):this._backdropRef?.detach()}_toggleClasses(t,e,i){let n=yi(e||[]).filter(r=>!!r);n.length&&(i?t.classList.add(...n):t.classList.remove(...n))}_detachContentWhenEmpty(){let t=!1;try{this._detachContentAfterRenderRef=Dh(()=>{t=!0,this._detachContent()},{injector:this._injector})}catch(e){if(t)throw e;this._detachContent()}globalThis.MutationObserver&&this._pane&&(this._detachContentMutationObserver||=new globalThis.MutationObserver(()=>{this._detachContent()}),this._detachContentMutationObserver.observe(this._pane,{childList:!0}))}_detachContent(){(!this._pane||!this._host||this._pane.children.length===0)&&(this._pane&&this._config.panelClass&&this._toggleClasses(this._pane,this._config.panelClass,!1),this._host&&this._host.parentElement&&(this._previousHostParent=this._host.parentElement,this._host.remove()),this._completeDetachContent())}_completeDetachContent(){this._detachContentAfterRenderRef?.destroy(),this._detachContentAfterRenderRef=void 0,this._detachContentMutationObserver?.disconnect()}_disposeScrollStrategy(){let t=this._scrollStrategy;t?.disable(),t?.detach?.()}};var It=`cdk-overlay-connected-position-bounding-box`;var Jt$1=/([A-Za-z%]+)$/;function te(o,t){return new Q$1(t,o.get(M),o.get(mt),o.get(ae$1),o.get(Xt))}var Q$1=class{_viewportRuler;_document;_platform;_overlayContainer;_overlayRef;_isInitialRender=!1;_lastBoundingBoxSize={width:0,height:0};_isPushed=!1;_canPush=!0;_growAfterOpen=!1;_hasFlexibleDimensions=!0;_positionLocked=!1;_originRect;_overlayRect;_viewportRect;_containerRect;_viewportMargin=0;_scrollables=[];_preferredPositions=[];_origin;_pane;_isDisposed=!1;_boundingBox=null;_lastPosition=null;_lastScrollVisibility=null;_positionChanges=new ee$1;_resizeSubscription=K$2.EMPTY;_offsetX=0;_offsetY=0;_transformOriginSelector;_appliedPanelClasses=[];_previousPushAmount=null;_popoverLocation=`global`;positionChanges=this._positionChanges;get positions(){return this._preferredPositions}constructor(t,e,i,n,r){this._viewportRuler=e,this._document=i,this._platform=n,this._overlayContainer=r,this.setOrigin(t)}attach(t){this._overlayRef&&this._overlayRef,this._validatePositions(),t.hostElement.classList.add(It),this._overlayRef=t,this._boundingBox=t.hostElement,this._pane=t.overlayElement,this._isDisposed=!1,this._isInitialRender=!0,this._lastPosition=null,this._resizeSubscription.unsubscribe(),this._resizeSubscription=this._viewportRuler.change().subscribe(()=>{this._isInitialRender=!0,this.apply()})}apply(){if(this._isDisposed||!this._platform.isBrowser)return;if(!this._isInitialRender&&this._positionLocked&&this._lastPosition){this.reapplyLastPosition();return}this._clearPanelClasses(),this._resetOverlayElementStyles(),this._resetBoundingBoxStyles(),this._viewportRect=this._getNarrowedViewportRect(),this._originRect=this._getOriginRect(),this._overlayRect=this._pane.getBoundingClientRect(),this._containerRect=this._getContainerRect();let t=this._originRect,e=this._overlayRect,i=this._viewportRect,n=this._containerRect,r=[],s;for(let a of this._preferredPositions){let c=this._getOriginPoint(t,n,a),u=this._getOverlayPoint(c,e,a),l=this._getOverlayFit(u,e,i,a);if(l.isCompletelyWithinViewport){this._isPushed=!1,this._applyPosition(a,c);return}if(this._canFitWithFlexibleDimensions(l,u,i)){r.push({position:a,origin:c,overlayRect:e,boundingBoxRect:this._calculateBoundingBoxRect(c,a)});continue}(!s||s.overlayFit.visibleArea<l.visibleArea)&&(s={overlayFit:l,overlayPoint:u,originPoint:c,position:a,overlayRect:e})}if(r.length){let a=null,c=-1;for(let u of r){let l=u.boundingBoxRect.width*u.boundingBoxRect.height*(u.position.weight||1);l>c&&(c=l,a=u)}this._isPushed=!1,this._applyPosition(a.position,a.origin);return}if(this._canPush){this._isPushed=!0,this._applyPosition(s.position,s.originPoint);return}this._applyPosition(s.position,s.originPoint)}detach(){this._clearPanelClasses(),this._lastPosition=null,this._previousPushAmount=null,this._resizeSubscription.unsubscribe()}dispose(){this._isDisposed||(this._boundingBox&&O(this._boundingBox.style,{top:``,left:``,right:``,bottom:``,height:``,width:``,alignItems:``,justifyContent:``}),this._pane&&this._resetOverlayElementStyles(),this._overlayRef&&this._overlayRef.hostElement.classList.remove(It),this.detach(),this._positionChanges.complete(),this._overlayRef=this._boundingBox=null,this._isDisposed=!0)}reapplyLastPosition(){if(this._isDisposed||!this._platform.isBrowser)return;let t=this._lastPosition;t?(this._originRect=this._getOriginRect(),this._overlayRect=this._pane.getBoundingClientRect(),this._viewportRect=this._getNarrowedViewportRect(),this._containerRect=this._getContainerRect(),this._applyPosition(t,this._getOriginPoint(this._originRect,this._containerRect,t))):this.apply()}withScrollableContainers(t){return this._scrollables=t,this}withPositions(t){return this._preferredPositions=t,t.indexOf(this._lastPosition)===-1&&(this._lastPosition=null),this._validatePositions(),this}withViewportMargin(t){return this._viewportMargin=t,this}withFlexibleDimensions(t=!0){return this._hasFlexibleDimensions=t,this}withGrowAfterOpen(t=!0){return this._growAfterOpen=t,this}withPush(t=!0){return this._canPush=t,this}withLockedPosition(t=!0){return this._positionLocked=t,this}setOrigin(t){return this._origin=t,this}withDefaultOffsetX(t){return this._offsetX=t,this}withDefaultOffsetY(t){return this._offsetY=t,this}withTransformOriginOn(t){return this._transformOriginSelector=t,this}withPopoverLocation(t){return this._popoverLocation=t,this}getPopoverInsertionPoint(){return this._popoverLocation===`global`?null:this._popoverLocation!==`inline`?this._popoverLocation:this._origin instanceof Wr?this._origin.nativeElement:yt(this._origin)?this._origin:null}_getOriginPoint(t,e,i){let n;if(i.originX==`center`)n=t.left+t.width/2;else{let s=this._isRtl()?t.right:t.left,a=this._isRtl()?t.left:t.right;n=i.originX==`start`?s:a}e.left<0&&(n-=e.left);let r;return i.originY==`center`?r=t.top+t.height/2:r=i.originY==`top`?t.top:t.bottom,e.top<0&&(r-=e.top),{x:n,y:r}}_getOverlayPoint(t,e,i){let n;i.overlayX==`center`?n=-e.width/2:i.overlayX===`start`?n=this._isRtl()?-e.width:0:n=this._isRtl()?0:-e.width;let r;return i.overlayY==`center`?r=-e.height/2:r=i.overlayY==`top`?0:-e.height,{x:t.x+n,y:t.y+r}}_getOverlayFit(t,e,i,n){let r=zt$1(e),{x:s,y:a}=t,c=this._getOffset(n,`x`),u=this._getOffset(n,`y`);c&&(s+=c),u&&(a+=u);let l=0-s,d=s+r.width-i.width,f=0-a,_=a+r.height-i.height,g=this._subtractOverflows(r.width,l,d),y=this._subtractOverflows(r.height,f,_),mt=g*y;return{visibleArea:mt,isCompletelyWithinViewport:r.width*r.height===mt,fitsInViewportVertically:y===r.height,fitsInViewportHorizontally:g==r.width}}_canFitWithFlexibleDimensions(t,e,i){if(this._hasFlexibleDimensions){let n=i.bottom-e.y,r=i.right-e.x,s=Tt(this._overlayRef.getConfig().minHeight),a=Tt(this._overlayRef.getConfig().minWidth),c=t.fitsInViewportVertically||s!=null&&s<=n,u=t.fitsInViewportHorizontally||a!=null&&a<=r;return c&&u}return!1}_pushOverlayOnScreen(t,e,i){if(this._previousPushAmount&&this._positionLocked)return{x:t.x+this._previousPushAmount.x,y:t.y+this._previousPushAmount.y};let n=zt$1(e),r=this._viewportRect,s=Math.max(t.x+n.width-r.width,0),a=Math.max(t.y+n.height-r.height,0),c=Math.max(r.top-i.top-t.y,0),u=Math.max(r.left-i.left-t.x,0),l=0,d=0;return n.width<=r.width?l=u||-s:l=t.x<this._getViewportMarginStart()?r.left-i.left-t.x:0,n.height<=r.height?d=c||-a:d=t.y<this._getViewportMarginTop()?r.top-i.top-t.y:0,this._previousPushAmount={x:l,y:d},{x:t.x+l,y:t.y+d}}_applyPosition(t,e){if(this._setTransformOrigin(t),this._setOverlayElementStyles(e,t),this._setBoundingBoxStyles(e,t),t.panelClass&&this._addPanelClasses(t.panelClass),this._positionChanges.observers.length){let i=this._getScrollVisibility();if(t!==this._lastPosition||!this._lastScrollVisibility||!ee(this._lastScrollVisibility,i)){let n=new K$1(t,i);this._positionChanges.next(n)}this._lastScrollVisibility=i}this._lastPosition=t,this._isInitialRender=!1}_setTransformOrigin(t){if(!this._transformOriginSelector)return;let e=this._boundingBox.querySelectorAll(this._transformOriginSelector),i,n=t.overlayY;t.overlayX===`center`?i=`center`:this._isRtl()?i=t.overlayX===`start`?`right`:`left`:i=t.overlayX===`start`?`left`:`right`;for(let r=0;r<e.length;r++)e[r].style.transformOrigin=`${i} ${n}`}_calculateBoundingBoxRect(t,e){let i=this._viewportRect,n=this._isRtl(),r,s,a;if(e.overlayY===`top`)s=t.y,r=i.height-s+this._getViewportMarginBottom();else if(e.overlayY===`bottom`)a=i.height-t.y+this._getViewportMarginTop()+this._getViewportMarginBottom(),r=i.height-a+this._getViewportMarginTop();else{let _=Math.min(i.bottom-t.y+i.top,t.y),g=this._lastBoundingBoxSize.height;r=_*2,s=t.y-_,r>g&&!this._isInitialRender&&!this._growAfterOpen&&(s=t.y-g/2)}let c=e.overlayX===`start`&&!n||e.overlayX===`end`&&n,u=e.overlayX===`end`&&!n||e.overlayX===`start`&&n,l,d,f;if(u)f=i.width-t.x+this._getViewportMarginStart()+this._getViewportMarginEnd(),l=t.x-this._getViewportMarginStart();else if(c)d=t.x,l=i.right-t.x-this._getViewportMarginEnd();else{let _=Math.min(i.right-t.x+i.left,t.x),g=this._lastBoundingBoxSize.width;l=_*2,d=t.x-_,l>g&&!this._isInitialRender&&!this._growAfterOpen&&(d=t.x-g/2)}return{top:s,left:d,bottom:a,right:f,width:l,height:r}}_setBoundingBoxStyles(t,e){let i=this._calculateBoundingBoxRect(t,e);!this._isInitialRender&&!this._growAfterOpen&&(i.height=Math.min(i.height,this._lastBoundingBoxSize.height),i.width=Math.min(i.width,this._lastBoundingBoxSize.width));let n={};if(this._hasExactPosition())n.top=n.left=`0`,n.bottom=n.right=`auto`,n.maxHeight=n.maxWidth=``,n.width=n.height=`100%`;else{let r=this._overlayRef.getConfig().maxHeight,s=this._overlayRef.getConfig().maxWidth;n.width=M_(i.width),n.height=M_(i.height),n.top=M_(i.top)||`auto`,n.bottom=M_(i.bottom)||`auto`,n.left=M_(i.left)||`auto`,n.right=M_(i.right)||`auto`,e.overlayX===`center`?n.alignItems=`center`:n.alignItems=e.overlayX===`end`?`flex-end`:`flex-start`,e.overlayY===`center`?n.justifyContent=`center`:n.justifyContent=e.overlayY===`bottom`?`flex-end`:`flex-start`,r&&(n.maxHeight=M_(r)),s&&(n.maxWidth=M_(s))}this._lastBoundingBoxSize=i,O(this._boundingBox.style,n)}_resetBoundingBoxStyles(){O(this._boundingBox.style,{top:`0`,left:`0`,right:`0`,bottom:`0`,height:``,width:``,alignItems:``,justifyContent:``})}_resetOverlayElementStyles(){O(this._pane.style,{top:``,left:``,bottom:``,right:``,position:``,transform:``})}_setOverlayElementStyles(t,e){let i={},n=this._hasExactPosition(),r=this._hasFlexibleDimensions,s=this._overlayRef.getConfig();if(n){let l=this._viewportRuler.getViewportScrollPosition();O(i,this._getExactOverlayY(e,t,l)),O(i,this._getExactOverlayX(e,t,l))}else i.position=`static`;let a=``,c=this._getOffset(e,`x`),u=this._getOffset(e,`y`);c&&(a+=`translateX(${c}px) `),u&&(a+=`translateY(${u}px)`),i.transform=a.trim(),s.maxHeight&&(n?i.maxHeight=M_(s.maxHeight):r&&(i.maxHeight=``)),s.maxWidth&&(n?i.maxWidth=M_(s.maxWidth):r&&(i.maxWidth=``)),O(this._pane.style,i)}_getExactOverlayY(t,e,i){let n={top:``,bottom:``},r=this._getOverlayPoint(e,this._overlayRect,t);if(this._isPushed&&(r=this._pushOverlayOnScreen(r,this._overlayRect,i)),t.overlayY===`bottom`)n.bottom=`${this._document.documentElement.clientHeight-(r.y+this._overlayRect.height)}px`;else n.top=M_(r.y);return n}_getExactOverlayX(t,e,i){let n={left:``,right:``},r=this._getOverlayPoint(e,this._overlayRect,t);this._isPushed&&(r=this._pushOverlayOnScreen(r,this._overlayRect,i));let s;if(this._isRtl()?s=t.overlayX===`end`?`left`:`right`:s=t.overlayX===`end`?`right`:`left`,s===`right`)n.right=`${this._document.documentElement.clientWidth-(r.x+this._overlayRect.width)}px`;else n.left=M_(r.x);return n}_getScrollVisibility(){let t=this._getOriginRect(),e=this._pane.getBoundingClientRect(),i=this._scrollables.map(n=>n.getElementRef().nativeElement.getBoundingClientRect());return{isOriginClipped:Bt(t,i),isOriginOutsideView:_t(t,i),isOverlayClipped:Bt(e,i),isOverlayOutsideView:_t(e,i)}}_subtractOverflows(t,...e){return e.reduce((i,n)=>i-Math.max(n,0),t)}_getNarrowedViewportRect(){let t=this._document.documentElement.clientWidth,e=this._document.documentElement.clientHeight,i=this._viewportRuler.getViewportScrollPosition();return{top:i.top+this._getViewportMarginTop(),left:i.left+this._getViewportMarginStart(),right:i.left+t-this._getViewportMarginEnd(),bottom:i.top+e-this._getViewportMarginBottom(),width:t-this._getViewportMarginStart()-this._getViewportMarginEnd(),height:e-this._getViewportMarginTop()-this._getViewportMarginBottom()}}_isRtl(){return this._overlayRef.getDirection()===`rtl`}_hasExactPosition(){return!this._hasFlexibleDimensions||this._isPushed}_getOffset(t,e){return e===`x`?t.offsetX==null?this._offsetX:t.offsetX:t.offsetY==null?this._offsetY:t.offsetY}_validatePositions(){}_addPanelClasses(t){this._pane&&yi(t).forEach(e=>{e!==``&&this._appliedPanelClasses.indexOf(e)===-1&&(this._appliedPanelClasses.push(e),this._pane.classList.add(e))})}_clearPanelClasses(){this._pane&&(this._appliedPanelClasses.forEach(t=>{this._pane.classList.remove(t)}),this._appliedPanelClasses=[])}_getViewportMarginStart(){return typeof this._viewportMargin==`number`?this._viewportMargin:this._viewportMargin?.start??0}_getViewportMarginEnd(){return typeof this._viewportMargin==`number`?this._viewportMargin:this._viewportMargin?.end??0}_getViewportMarginTop(){return typeof this._viewportMargin==`number`?this._viewportMargin:this._viewportMargin?.top??0}_getViewportMarginBottom(){return typeof this._viewportMargin==`number`?this._viewportMargin:this._viewportMargin?.bottom??0}_getOriginRect(){let t=this._origin;if(t instanceof Wr)return t.nativeElement.getBoundingClientRect();if(t instanceof Element)return t.getBoundingClientRect();let e=t.width||0,i=t.height||0;return{top:t.y,bottom:t.y+i,left:t.x,right:t.x+e,height:i,width:e}}_getContainerRect(){let t=this._overlayRef.getConfig().usePopover&&this._popoverLocation!==`global`,e=this._overlayContainer.getContainerElement();t&&(e.style.display=`block`);let i=e.getBoundingClientRect();return t&&(e.style.display=``),i}};function O(o,t){for(let e in t)Object.hasOwn(t,e)&&(o[e]=t[e]);return o}function Tt(o){if(typeof o!=`number`&&o!=null){let[t,e]=o.split(Jt$1);return!e||e===`px`?parseFloat(t):null}return o||null}function zt$1(o){return{top:Math.floor(o.top),right:Math.floor(o.right),bottom:Math.floor(o.bottom),left:Math.floor(o.left),width:Math.floor(o.width),height:Math.floor(o.height)}}function ee(o,t){return o===t?!0:o.isOriginClipped===t.isOriginClipped&&o.isOriginOutsideView===t.isOriginOutsideView&&o.isOverlayClipped===t.isOverlayClipped&&o.isOverlayOutsideView===t.isOverlayOutsideView}var Lt$1=`cdk-global-overlay-wrapper`;function ie(o){return new J$2}var J$2=class{_overlayRef;_cssPosition=`static`;_topOffset=``;_bottomOffset=``;_alignItems=``;_xPosition=``;_xOffset=``;_width=``;_height=``;_isDisposed=!1;attach(t){let e=t.getConfig();this._overlayRef=t,this._width&&!e.width&&t.updateSize({width:this._width}),this._height&&!e.height&&t.updateSize({height:this._height}),t.hostElement.classList.add(Lt$1),this._isDisposed=!1}top(t=``){return this._bottomOffset=``,this._topOffset=t,this._alignItems=`flex-start`,this}left(t=``){return this._xOffset=t,this._xPosition=`left`,this}bottom(t=``){return this._topOffset=``,this._bottomOffset=t,this._alignItems=`flex-end`,this}right(t=``){return this._xOffset=t,this._xPosition=`right`,this}start(t=``){return this._xOffset=t,this._xPosition=`start`,this}end(t=``){return this._xOffset=t,this._xPosition=`end`,this}width(t=``){return this._overlayRef?this._overlayRef.updateSize({width:t}):this._width=t,this}height(t=``){return this._overlayRef?this._overlayRef.updateSize({height:t}):this._height=t,this}centerHorizontally(t=``){return this.left(t),this._xPosition=`center`,this}centerVertically(t=``){return this.top(t),this._alignItems=`center`,this}apply(){if(!this._overlayRef||!this._overlayRef.hasAttached())return;let t=this._overlayRef.overlayElement.style,e=this._overlayRef.hostElement.style,{width:n,height:r,maxWidth:s,maxHeight:a}=this._overlayRef.getConfig(),c=(n===`100%`||n===`100vw`)&&(!s||s===`100%`||s===`100vw`),u=(r===`100%`||r===`100vh`)&&(!a||a===`100%`||a===`100vh`),l=this._xPosition,d=this._xOffset,f=this._overlayRef.getConfig().direction===`rtl`,_=``,g=``,y=``;c?y=`flex-start`:l===`center`?(y=`center`,f?g=d:_=d):f?l===`left`||l===`end`?(y=`flex-end`,_=d):(l===`right`||l===`start`)&&(y=`flex-start`,g=d):l===`left`||l===`start`?(y=`flex-start`,_=d):(l===`right`||l===`end`)&&(y=`flex-end`,g=d),t.position=this._cssPosition,t.marginLeft=c?`0`:_,t.marginTop=u?`0`:this._topOffset,t.marginBottom=this._bottomOffset,t.marginRight=c?`0`:g,e.justifyContent=y,e.alignItems=u?`flex-start`:this._alignItems}dispose(){if(this._isDisposed||!this._overlayRef)return;let t=this._overlayRef.overlayElement.style,e=this._overlayRef.hostElement,i=e.style;e.classList.remove(Lt$1),i.justifyContent=i.alignItems=t.marginTop=t.marginBottom=t.marginLeft=t.marginRight=t.position=``,this._overlayRef=null,this._isDisposed=!0}};var jt=new S(`OVERLAY_DEFAULT_CONFIG`);function ne(o,t){o.get(je$1).load(Ht$1);let e=o.get(Xt),i=o.get(mt),n=o.get(Si),r=o.get(wt),s=o.get(am),a=o.get(Ic,null,{optional:!0})||o.get(Vr).createRenderer(null,null),c=new $(t),u=o.get(jt,null,{optional:!0})?.usePopover??!0;c.direction=c.direction||s.value,!i.body||!(`showPopover`in i.body)?c.usePopover=!1:c.usePopover=t?.usePopover??u;let l=i.createElement(`div`),d=i.createElement(`div`);l.id=n.getId(`cdk-overlay-`),l.classList.add(`cdk-overlay-pane`),d.appendChild(l),c.usePopover&&(d.setAttribute(`popover`,`manual`),d.classList.add(`cdk-overlay-popover`));let f=c.usePopover?c.positionStrategy?.getPopoverInsertionPoint?.():null;return yt(f)?f.after(d):f?.type===`parent`?f.element.appendChild(d):e.getContainerElement().appendChild(d),new q(new j(l,r,o),d,l,c,o.get(Fe$1),o.get(Wt$1),i,o.get(jt$1),o.get(Yt),t?.disableAnimations??o.get(Zv,null,{optional:!0})===`NoopAnimations`,o.get(Ee),a)}var K=20;var J$1=new S(`mat-tooltip-scroll-strategy`,{providedIn:`root`,factory:()=>{let a=v(se);return()=>Qt$1(a,{scrollThrottle:K})}});var tt=new S(`mat-tooltip-default-options`,{providedIn:`root`,factory:()=>({showDelay:0,hideDelay:0,touchendHideDelay:1500})});var Q=`tooltip-panel`;var et={passive:!0};var it=8;var ot=8;var nt=24;var st=200;var at=(()=>{class a{_elementRef=v(Wr);_ngZone=v(Fe$1);_platform=v(ae$1);_ariaDescriber=v(c_);_focusMonitor=v(Xr);_dir=v(am);_injector=v(se);_viewContainerRef=v(is);_mediaMatcher=v(Jr);_document=v(mt);_renderer=v(Ic);_animationsDisabled=nn$1();_defaultOptions=v(tt,{optional:!0});_overlayRef=null;_tooltipInstance=null;_overlayPanelClass;_portal;_position=`below`;_positionAtOrigin=!1;_disabled=!1;_tooltipClass;_viewInitialized=!1;_pointerExitEventsInitialized=!1;_tooltipComponent=W;_viewportMargin=8;_currentPosition;_cssClassPrefix=`mat-mdc`;_ariaDescriptionPending=!1;_dirSubscribed=!1;get position(){return this._position}set position(t){t!==this._position&&(this._position=t,this._overlayRef&&(this._updatePosition(this._overlayRef),this._tooltipInstance?.show(0),this._overlayRef.updatePosition()))}get positionAtOrigin(){return this._positionAtOrigin}set positionAtOrigin(t){this._positionAtOrigin=O_(t),this._detach(),this._overlayRef=null}get disabled(){return this._disabled}set disabled(t){let e=O_(t);this._disabled!==e&&(this._disabled=e,e?this.hide(0):this._setupPointerEnterEventsIfNeeded(),this._syncAriaDescription(this.message))}get showDelay(){return this._showDelay}set showDelay(t){this._showDelay=bi(t)}_showDelay;get hideDelay(){return this._hideDelay}set hideDelay(t){this._hideDelay=bi(t),this._tooltipInstance&&(this._tooltipInstance._mouseLeaveHideDelay=this._hideDelay)}_hideDelay;touchGestures=`auto`;get message(){return this._message}set message(t){let e=this._message;this._message=t!=null?String(t).trim():``,!this._message&&this._isTooltipVisible()?this.hide(0):(this._setupPointerEnterEventsIfNeeded(),this._updateTooltipMessage()),this._syncAriaDescription(e)}_message=``;get tooltipClass(){return this._tooltipClass}set tooltipClass(t){this._tooltipClass=t,this._tooltipInstance&&this._setTooltipClass(this._tooltipClass)}_eventCleanups=[];_touchstartTimeout=null;_destroyed=new ee$1;_isDestroyed=!1;constructor(){let t=this._defaultOptions;t&&(this._showDelay=t.showDelay,this._hideDelay=t.hideDelay,t.position&&(this.position=t.position),t.positionAtOrigin&&(this.positionAtOrigin=t.positionAtOrigin),t.touchGestures&&(this.touchGestures=t.touchGestures),t.tooltipClass&&(this.tooltipClass=t.tooltipClass)),this._viewportMargin=it}ngAfterViewInit(){this._viewInitialized=!0,this._setupPointerEnterEventsIfNeeded(),this._focusMonitor.monitor(this._elementRef).pipe(av(this._destroyed)).subscribe(t=>{t?t===`keyboard`&&this._ngZone.run(()=>this.show()):this._ngZone.run(()=>this.hide(0))})}ngOnDestroy(){let t=this._elementRef.nativeElement;this._touchstartTimeout&&clearTimeout(this._touchstartTimeout),this._overlayRef&&(this._overlayRef.dispose(),this._tooltipInstance=null),this._eventCleanups.forEach(e=>e()),this._eventCleanups.length=0,this._destroyed.next(),this._destroyed.complete(),this._isDestroyed=!0,this._ariaDescriber.removeDescription(t,this.message,`tooltip`),this._focusMonitor.stopMonitoring(t)}show(t=this.showDelay,e){if(this.disabled||!this.message||this._isTooltipVisible()){this._tooltipInstance?._cancelPendingAnimations();return}let i=this._createOverlay(e);this._detach(),this._portal=this._portal||new pt(this._tooltipComponent,this._viewContainerRef);let o=this._tooltipInstance=i.attach(this._portal).instance;o._triggerElement=this._elementRef.nativeElement,o._mouseLeaveHideDelay=this._hideDelay,o.afterHidden().pipe(av(this._destroyed)).subscribe(()=>this._detach()),this._setTooltipClass(this._tooltipClass),this._updateTooltipMessage(),o.show(t)}hide(t=this.hideDelay){let e=this._tooltipInstance;e&&(e.isVisible()?e.hide(t):(e._cancelPendingAnimations(),this._detach()))}toggle(t){this._isTooltipVisible()?this.hide():this.show(void 0,t)}_isTooltipVisible(){return!!this._tooltipInstance&&this._tooltipInstance.isVisible()}_createOverlay(t){if(this._overlayRef){let n=this._overlayRef.getConfig().positionStrategy;if((!this.positionAtOrigin||!t)&&n._origin instanceof Wr)return this._overlayRef;this._detach()}let e=this._injector.get(H).getAncestorScrollContainers(this._elementRef),i=`${this._cssClassPrefix}-${Q}`,o=te(this._injector,this.positionAtOrigin?t||this._elementRef:this._elementRef).withTransformOriginOn(`.${this._cssClassPrefix}-tooltip`).withFlexibleDimensions(!1).withViewportMargin(this._viewportMargin).withScrollableContainers(e).withPopoverLocation(`global`);return o.positionChanges.pipe(av(this._destroyed)).subscribe(n=>{this._updateCurrentPositionClass(n.connectionPair),this._tooltipInstance&&n.scrollableViewProperties.isOverlayClipped&&this._tooltipInstance.isVisible()&&this._ngZone.run(()=>this.hide(0))}),this._overlayRef=ne(this._injector,{direction:this._dir,positionStrategy:o,panelClass:this._overlayPanelClass?[...this._overlayPanelClass,i]:i,scrollStrategy:this._injector.get(J$1)(),disableAnimations:this._animationsDisabled,eventPredicate:this._overlayEventPredicate}),this._updatePosition(this._overlayRef),this._overlayRef.detachments().pipe(av(this._destroyed)).subscribe(()=>this._detach()),this._overlayRef.outsidePointerEvents().pipe(av(this._destroyed)).subscribe(()=>this._tooltipInstance?._handleBodyInteraction()),this._overlayRef.keydownEvents().pipe(av(this._destroyed)).subscribe(n=>{n.preventDefault(),n.stopPropagation(),this._ngZone.run(()=>this.hide(0))}),this._defaultOptions?.disableTooltipInteractivity&&this._overlayRef.addPanelClass(`${this._cssClassPrefix}-tooltip-panel-non-interactive`),this._dirSubscribed||(this._dirSubscribed=!0,this._dir.change.pipe(av(this._destroyed)).subscribe(()=>{this._overlayRef&&this._updatePosition(this._overlayRef)})),this._overlayRef}_detach(){this._overlayRef&&this._overlayRef.hasAttached()&&this._overlayRef.detach(),this._tooltipInstance=null}_updatePosition(t){let e=t.getConfig().positionStrategy,i=this._getOrigin(),o=this._getOverlayPosition();e.withPositions([this._addOffset(z(z({},i.main),o.main)),this._addOffset(z(z({},i.fallback),o.fallback))])}_addOffset(t){let e=ot,i=!this._dir||this._dir.value==`ltr`;return t.originY===`top`?t.offsetY=-e:t.originY===`bottom`?t.offsetY=e:t.originX===`start`?t.offsetX=i?-e:e:t.originX===`end`&&(t.offsetX=i?e:-e),t}_getOrigin(){let t=!this._dir||this._dir.value==`ltr`,e=this.position,i;e==`above`||e==`below`?i={originX:`center`,originY:e==`above`?`top`:`bottom`}:e==`before`||e==`left`&&t||e==`right`&&!t?i={originX:`start`,originY:`center`}:(e==`after`||e==`right`&&t||e==`left`&&!t)&&(i={originX:`end`,originY:`center`});let{x:o,y:n}=this._invertPosition(i.originX,i.originY);return{main:i,fallback:{originX:o,originY:n}}}_getOverlayPosition(){let t=!this._dir||this._dir.value==`ltr`,e=this.position,i;e==`above`?i={overlayX:`center`,overlayY:`bottom`}:e==`below`?i={overlayX:`center`,overlayY:`top`}:e==`before`||e==`left`&&t||e==`right`&&!t?i={overlayX:`end`,overlayY:`center`}:(e==`after`||e==`right`&&t||e==`left`&&!t)&&(i={overlayX:`start`,overlayY:`center`});let{x:o,y:n}=this._invertPosition(i.overlayX,i.overlayY);return{main:i,fallback:{overlayX:o,overlayY:n}}}_updateTooltipMessage(){this._tooltipInstance&&(this._tooltipInstance.message=this.message,this._tooltipInstance._markForCheck(),Dh(()=>{this._tooltipInstance&&this._overlayRef.updatePosition()},{injector:this._injector}))}_setTooltipClass(t){this._tooltipInstance&&(this._tooltipInstance.tooltipClass=t instanceof Set?Array.from(t):t,this._tooltipInstance._markForCheck())}_invertPosition(t,e){return this.position===`above`||this.position===`below`?e===`top`?e=`bottom`:e===`bottom`&&(e=`top`):t===`end`?t=`start`:t===`start`&&(t=`end`),{x:t,y:e}}_updateCurrentPositionClass(t){let{overlayY:e,originX:i,originY:o}=t,n;if(e===`center`?this._dir&&this._dir.value===`rtl`?n=i===`end`?`left`:`right`:n=i===`start`?`left`:`right`:n=e===`bottom`&&o===`top`?`above`:`below`,n!==this._currentPosition){let l=this._overlayRef;if(l){let b=`${this._cssClassPrefix}-${Q}-`;l.removePanelClass(b+this._currentPosition),l.addPanelClass(b+n)}this._currentPosition=n}}_setupPointerEnterEventsIfNeeded(){this._disabled||!this.message||!this._viewInitialized||this._eventCleanups.length||(this._isTouchPlatform()?this.touchGestures!==`off`&&(this._disableNativeGesturesIfNecessary(),this._addListener(`touchstart`,t=>{let e=t.targetTouches?.[0],i=e?{x:e.clientX,y:e.clientY}:void 0;this._setupPointerExitEventsIfNeeded(),this._touchstartTimeout&&clearTimeout(this._touchstartTimeout);let o=500;this._touchstartTimeout=setTimeout(()=>{this._touchstartTimeout=null,this.show(void 0,i)},this._defaultOptions?.touchLongPressShowDelay??o)})):this._addListener(`mouseenter`,t=>{this._setupPointerExitEventsIfNeeded();let e;t.x!==void 0&&t.y!==void 0&&(e=t),this.show(void 0,e)}))}_setupPointerExitEventsIfNeeded(){if(!this._pointerExitEventsInitialized){if(this._pointerExitEventsInitialized=!0,!this._isTouchPlatform())this._addListener(`mouseleave`,t=>{let e=t.relatedTarget;(!e||!this._overlayRef?.overlayElement.contains(e))&&this.hide()}),this._addListener(`wheel`,t=>{if(this._isTooltipVisible()){let e=this._document.elementFromPoint(t.clientX,t.clientY),i=this._elementRef.nativeElement;e!==i&&!i.contains(e)&&this.hide()}});else if(this.touchGestures!==`off`){this._disableNativeGesturesIfNecessary();let t=()=>{this._touchstartTimeout&&clearTimeout(this._touchstartTimeout),this.hide(this._defaultOptions?.touchendHideDelay)};this._addListener(`touchend`,t),this._addListener(`touchcancel`,t)}}}_addListener(t,e){this._eventCleanups.push(this._renderer.listen(this._elementRef.nativeElement,t,e,et))}_isTouchPlatform(){let t=this._defaultOptions?.detectHoverCapability;return typeof t==`function`?!t():this._platform.IOS||this._platform.ANDROID?!0:this._platform.isBrowser?!!t&&this._mediaMatcher.matchMedia(`(any-hover: none)`).matches:!1}_disableNativeGesturesIfNecessary(){let t=this.touchGestures;if(t!==`off`){let e=this._elementRef.nativeElement,i=e.style;(t===`on`||e.nodeName!==`INPUT`&&e.nodeName!==`TEXTAREA`)&&(i.userSelect=i.msUserSelect=i.webkitUserSelect=i.MozUserSelect=`none`),(t===`on`||!e.draggable)&&(i.webkitUserDrag=`none`),i.touchAction=`none`,i.webkitTapHighlightColor=`transparent`}}_syncAriaDescription(t){this._ariaDescriptionPending||(this._ariaDescriptionPending=!0,this._ariaDescriber.removeDescription(this._elementRef.nativeElement,t,`tooltip`),this._isDestroyed||Dh({write:()=>{this._ariaDescriptionPending=!1,this.message&&!this.disabled&&this._ariaDescriber.describe(this._elementRef.nativeElement,this.message,`tooltip`)}},{injector:this._injector}))}_overlayEventPredicate=t=>t.type===`keydown`?this._isTooltipVisible()&&t.keyCode===27&&!_c(t):!0;static ɵfac=function(e){return new(e||a)};static ɵdir=fw({type:a,selectors:[[``,`matTooltip`,``]],hostAttrs:[1,`mat-mdc-tooltip-trigger`],hostVars:2,hostBindings:function(e,i){e&2&&pm(`mat-mdc-tooltip-disabled`,i.disabled)},inputs:{position:[0,`matTooltipPosition`,`position`],positionAtOrigin:[0,`matTooltipPositionAtOrigin`,`positionAtOrigin`],disabled:[0,`matTooltipDisabled`,`disabled`],showDelay:[0,`matTooltipShowDelay`,`showDelay`],hideDelay:[0,`matTooltipHideDelay`,`hideDelay`],touchGestures:[0,`matTooltipTouchGestures`,`touchGestures`],message:[0,`matTooltip`,`message`],tooltipClass:[0,`matTooltipClass`,`tooltipClass`]},exportAs:[`matTooltip`]})}return a})();var W=(()=>{class a{_changeDetectorRef=v(_j);_elementRef=v(Wr);_isMultiline=!1;message;tooltipClass;_showTimeoutId;_hideTimeoutId;_triggerElement;_mouseLeaveHideDelay;_animationsDisabled=nn$1();_tooltip;_closeOnInteraction=!1;_isVisible=!1;_onHide=new ee$1;_showAnimation=`mat-mdc-tooltip-show`;_hideAnimation=`mat-mdc-tooltip-hide`;show(t){this._hideTimeoutId!=null&&clearTimeout(this._hideTimeoutId),this._showTimeoutId=setTimeout(()=>{this._toggleVisibility(!0),this._showTimeoutId=void 0},t)}hide(t){this._showTimeoutId!=null&&clearTimeout(this._showTimeoutId),this._hideTimeoutId=setTimeout(()=>{this._toggleVisibility(!1),this._hideTimeoutId=void 0},t)}afterHidden(){return this._onHide}isVisible(){return this._isVisible}ngOnDestroy(){this._cancelPendingAnimations(),this._onHide.complete(),this._triggerElement=null}_handleBodyInteraction(){this._closeOnInteraction&&this.hide(0)}_markForCheck(){this._changeDetectorRef.markForCheck()}_handleMouseLeave({relatedTarget:t}){(!t||!this._triggerElement.contains(t))&&(this.isVisible()?this.hide(this._mouseLeaveHideDelay):this._finalizeAnimation(!1))}_onShow(){this._isMultiline=this._isTooltipMultiline(),this._markForCheck()}_isTooltipMultiline(){let t=this._elementRef.nativeElement.getBoundingClientRect();return t.height>nt&&t.width>=st}_handleAnimationEnd({animationName:t}){(t===this._showAnimation||t===this._hideAnimation)&&this._finalizeAnimation(t===this._showAnimation)}_cancelPendingAnimations(){this._showTimeoutId!=null&&clearTimeout(this._showTimeoutId),this._hideTimeoutId!=null&&clearTimeout(this._hideTimeoutId),this._showTimeoutId=this._hideTimeoutId=void 0}_finalizeAnimation(t){t?this._closeOnInteraction=!0:this.isVisible()||this._onHide.next()}_toggleVisibility(t){let e=this._tooltip.nativeElement,i=this._showAnimation,o=this._hideAnimation;if(e.classList.remove(t?o:i),e.classList.add(t?i:o),this._isVisible!==t&&(this._isVisible=t,this._changeDetectorRef.markForCheck()),t&&!this._animationsDisabled&&typeof getComputedStyle==`function`){let n=getComputedStyle(e);(n.getPropertyValue(`animation-duration`)===`0s`||n.getPropertyValue(`animation-name`)===`none`)&&(this._animationsDisabled=!0)}t&&this._onShow(),this._animationsDisabled&&(e.classList.add(`_mat-animation-noopable`),this._finalizeAnimation(t))}static ɵfac=function(e){return new(e||a)};static ɵcmp=(function(){let t=[`tooltip`];return aw({type:a,selectors:[[`mat-tooltip-component`]],viewQuery:function(i,o){if(i&1&&im(t,7),i&2){let n;IC(n=DC())&&(o._tooltip=n.first)}},hostAttrs:[`aria-hidden`,`true`],hostBindings:function(i,o){i&1&&nm(`mouseleave`,function(l){return o._handleMouseLeave(l)})},decls:4,vars:5,consts:[[`tooltip`,``],[1,`mdc-tooltip`,`mat-mdc-tooltip`,3,`animationend`],[1,`mat-mdc-tooltip-surface`,`mdc-tooltip__surface`]],template:function(i,o){i&1&&(kl(0,`div`,1,0),rm(`animationend`,function(l){return o._handleAnimationEnd(l)}),kl(2,`div`,2),QC(3),Ll()()),i&2&&(jC(o.tooltipClass),pm(`mdc-tooltip--multiline`,o._isMultiline),ID(3),wm(o.message))},styles:[`.mat-mdc-tooltip {
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
`],encapsulation:2})})()}return a})();var we=class a{static ɵfac=function(e){return new(e||a)};static ɵcmp=aw({type:a,selectors:[[`app-home`]],decls:2,vars:0,template:function(e,t){e&1&&(kl(0,`p`),QC(1,`home works!`),Ll())},encapsulation:2})};var Lt=[{path:`Identity/Login`,loadComponent:()=>import(`./chunk-BBlR5dco.js`).then(a=>a.Login)},{path:`Identity/Signup`,loadComponent:()=>import(`./chunk-eyQ3hNBw.js`).then(a=>a.Signup)},{path:`Identity/Setting`,loadComponent:()=>import(`./chunk-Bfm0eN8A.js`).then(a=>a.Setting)},{path:`Identity/ResetPassword`,loadComponent:()=>import(`./chunk-4fOC5vBd.js`).then(a=>a.ResetPassword)}];var zt=(a,m)=>{let e=v(Lc),t=v(vt$1);return e.isAuthenticated()?!0:t.createUrlTree([`/identity/login`],{queryParams:{ReturnUrl:m.url}})};var Ht=[...[{path:`UserAccount/Profile/:userId`,loadComponent:()=>import(`./chunk-4krNul6U.js`).then(a=>a.Profile)},{path:`UserAccount/Profile`,loadComponent:()=>import(`./chunk-4krNul6U.js`).then(a=>a.Profile)},{path:`UserAccount/ProfileSetting`,loadComponent:()=>import(`./chunk-gjG9tF8W.js`).then(a=>a.ProfileSetting),canActivate:[zt]}]];var Vt=[{path:`Library/:libId`,loadComponent:()=>import(`./chunk-BZqmY5st.js`).then(a=>a.LibraryPage)},{path:`Library/Setting/:libId`,loadComponent:()=>import(`./chunk-B8cECj3U.js`).then(a=>a.LibrarySetting)}];var Ut=[{path:``,component:we},...Lt,...Ht,...Vt];var tn=Math.pow(2,31)-1;var Z=class{_overlayRef;instance;containerInstance;_afterDismissed=new ee$1;_afterOpened=new ee$1;_onAction=new ee$1;_durationTimeoutId;_dismissedByAction=!1;constructor(m,e){this._overlayRef=e,this.containerInstance=m,m._onExit.subscribe(()=>this._finishDismiss())}dismiss(){this._afterDismissed.closed||this.containerInstance.exit(),clearTimeout(this._durationTimeoutId)}dismissWithAction(){this._onAction.closed||(this._dismissedByAction=!0,this._onAction.next(),this._onAction.complete(),this.dismiss()),clearTimeout(this._durationTimeoutId)}closeWithAction(){this.dismissWithAction()}_dismissAfter(m){this._durationTimeoutId=setTimeout(()=>this.dismiss(),Math.min(m,tn))}_open(){this._afterOpened.closed||(this._afterOpened.next(),this._afterOpened.complete())}_finishDismiss(){this._overlayRef.dispose(),this._onAction.closed||this._onAction.complete(),this._afterDismissed.next({dismissedByAction:this._dismissedByAction}),this._afterDismissed.complete(),this._dismissedByAction=!1}afterDismissed(){return this._afterDismissed}afterOpened(){return this.containerInstance._onEnter}onAction(){return this._onAction}};var Qt=new S(`MatSnackBarData`);var V=class{politeness=`polite`;announcementMessage=``;viewContainerRef;duration=0;panelClass;direction;data=null;horizontalPosition=`center`;verticalPosition=`bottom`};var nn=(()=>{class a{static ɵfac=function(t){return new(t||a)};static ɵdir=fw({type:a,selectors:[[``,`matSnackBarLabel`,``]],hostAttrs:[1,`mat-mdc-snack-bar-label`,`mdc-snackbar__label`]})}return a})();var an=(()=>{class a{static ɵfac=function(t){return new(t||a)};static ɵdir=fw({type:a,selectors:[[``,`matSnackBarActions`,``]],hostAttrs:[1,`mat-mdc-snack-bar-actions`,`mdc-snackbar__actions`]})}return a})();var on=(()=>{class a{static ɵfac=function(t){return new(t||a)};static ɵdir=fw({type:a,selectors:[[``,`matSnackBarAction`,``]],hostAttrs:[1,`mat-mdc-snack-bar-action`,`mdc-snackbar__action`]})}return a})();var rn=(()=>{class a{snackBarRef=v(Z);data=v(Qt);action(){this.snackBarRef.dismissWithAction()}get hasAction(){return!!this.data.action}static ɵfac=function(t){return new(t||a)};static ɵcmp=(function(){function e(t,n){if(t&1){let i=fC();Hi(0,`div`,1)(1,`button`,2),nm(`click`,function(){Sd(i);let r=gC();return xd(r.action())}),QC(2),Rl()()}if(t&2){let i=gC();ID(2),Vl(` `,i.data.action,` `)}}return aw({type:a,selectors:[[`simple-snack-bar`]],hostAttrs:[1,`mat-mdc-simple-snack-bar`],exportAs:[`matSnackBar`],decls:3,vars:2,consts:[[`matSnackBarLabel`,``],[`matSnackBarActions`,``],[`matButton`,``,`matSnackBarAction`,``,3,`click`]],template:function(n,i){n&1&&(Hi(0,`div`,0),QC(1),Rl(),eC(2,e,3,1,`div`,1)),n&2&&(ID(),Vl(` `,i.data.message,`
`),ID(),nC(i.hasAction?2:-1))},dependencies:[y0,nn,an,on],styles:[`.mat-mdc-simple-snack-bar {
  display: flex;
}
.mat-mdc-simple-snack-bar .mat-mdc-snack-bar-label {
  max-height: 50vh;
  overflow: auto;
}
`],encapsulation:2})})()}return a})();var Fe=`_mat-snack-bar-enter`;var Le=`_mat-snack-bar-exit`;var sn=(()=>{class a extends X$1{_ngZone=v(Fe$1);_elementRef=v(Wr);_changeDetectorRef=v(_j);_platform=v(ae$1);_animationsDisabled=nn$1();snackBarConfig=v(V);_document=v(mt);_trackedModals=/* @__PURE__ */ new Set;_enterFallback;_exitFallback;_injector=v(se);_announceDelay=150;_announceTimeoutId;_destroyed=!1;_portalOutlet;_onAnnounce=new ee$1;_onExit=new ee$1;_onEnter=new ee$1;_animationState=`void`;_live;_label;_role;_liveElementId=v(Si).getId(`mat-snack-bar-container-live-`);constructor(){super();let e=this.snackBarConfig;e.politeness===`assertive`&&!e.announcementMessage?this._live=`assertive`:e.politeness===`off`?this._live=`off`:this._live=`polite`,this._platform.FIREFOX&&(this._live===`polite`&&(this._role=`status`),this._live===`assertive`&&(this._role=`alert`))}attachComponentPortal(e){this._assertNotAttached();let t=this._portalOutlet.attachComponentPortal(e);return this._afterPortalAttached(),t}attachTemplatePortal(e){this._assertNotAttached();let t=this._portalOutlet.attachTemplatePortal(e);return this._afterPortalAttached(),t}attachDomPortal=e=>{this._assertNotAttached();let t=this._portalOutlet.attachDomPortal(e);return this._afterPortalAttached(),t};onAnimationEnd(e){e===Le?this._completeExit():e===Fe&&(clearTimeout(this._enterFallback),this._ngZone.run(()=>{this._onEnter.next(),this._onEnter.complete()}))}enter(){this._destroyed||(this._animationState=`visible`,this._changeDetectorRef.markForCheck(),this._changeDetectorRef.detectChanges(),this._screenReaderAnnounce(),this._animationsDisabled?Dh(()=>{this._ngZone.run(()=>queueMicrotask(()=>this.onAnimationEnd(Fe)))},{injector:this._injector}):(clearTimeout(this._enterFallback),this._enterFallback=setTimeout(()=>{this._elementRef.nativeElement.classList.add(`mat-snack-bar-fallback-visible`),this.onAnimationEnd(Fe)},200)))}exit(){return this._destroyed?Ay(void 0):(this._ngZone.run(()=>{this._animationState=`hidden`,this._changeDetectorRef.markForCheck(),this._elementRef.nativeElement.setAttribute(`mat-exit`,``),clearTimeout(this._announceTimeoutId),this._animationsDisabled?Dh(()=>{this._ngZone.run(()=>queueMicrotask(()=>this.onAnimationEnd(Le)))},{injector:this._injector}):(clearTimeout(this._exitFallback),this._exitFallback=setTimeout(()=>this.onAnimationEnd(Le),200))}),this._onExit)}ngOnDestroy(){this._destroyed=!0,this._clearFromModals(),this._completeExit()}_completeExit(){clearTimeout(this._exitFallback),queueMicrotask(()=>{this._onExit.next(),this._onExit.complete()})}_afterPortalAttached(){let e=this._elementRef.nativeElement,t=this.snackBarConfig.panelClass;t&&(Array.isArray(t)?t.forEach(o=>e.classList.add(o)):e.classList.add(t)),this._exposeToModals();let n=this._label.nativeElement,i=`mdc-snackbar__label`;n.classList.toggle(i,!n.querySelector(`.${i}`))}_exposeToModals(){let e=this._liveElementId,t=this._document.querySelectorAll(`body > .cdk-overlay-container [aria-modal="true"]`);for(let n=0;n<t.length;n++){let i=t[n],o=i.getAttribute(`aria-owns`);this._trackedModals.add(i),o?o.indexOf(e)===-1&&i.setAttribute(`aria-owns`,o+` `+e):i.setAttribute(`aria-owns`,e)}}_clearFromModals(){this._trackedModals.forEach(e=>{let t=e.getAttribute(`aria-owns`);if(t){let n=t.replace(this._liveElementId,``).trim();n.length>0?e.setAttribute(`aria-owns`,n):e.removeAttribute(`aria-owns`)}}),this._trackedModals.clear()}_assertNotAttached(){this._portalOutlet.hasAttached()}_screenReaderAnnounce(){this._announceTimeoutId||this._ngZone.runOutsideAngular(()=>{this._announceTimeoutId=setTimeout(()=>{if(this._destroyed)return;let e=this._elementRef.nativeElement,t=e.querySelector(`[aria-hidden]`),n=e.querySelector(`[aria-live]`);if(t&&n){let i=null;this._platform.isBrowser&&document.activeElement instanceof HTMLElement&&t.contains(document.activeElement)&&(i=document.activeElement),t.removeAttribute(`aria-hidden`),n.appendChild(t),i?.focus(),this._onAnnounce.next(),this._onAnnounce.complete()}},this._announceDelay)})}static ɵfac=function(t){return new(t||a)};static ɵcmp=(function(){let e=[`label`];function t(n,i){}return aw({type:a,selectors:[[`mat-snack-bar-container`]],viewQuery:function(i,o){if(i&1&&im(Je,7)(e,7),i&2){let r;IC(r=DC())&&(o._portalOutlet=r.first),IC(r=DC())&&(o._label=r.first)}},hostAttrs:[1,`mdc-snackbar`,`mat-mdc-snack-bar-container`],hostVars:6,hostBindings:function(i,o){i&1&&nm(`animationend`,function(l){return o.onAnimationEnd(l.animationName)})(`animationcancel`,function(l){return o.onAnimationEnd(l.animationName)}),i&2&&pm(`mat-snack-bar-container-enter`,o._animationState===`visible`)(`mat-snack-bar-container-exit`,o._animationState===`hidden`)(`mat-snack-bar-container-animations-enabled`,!o._animationsDisabled)},features:[Og],decls:6,vars:3,consts:[[`label`,``],[1,`mdc-snackbar__surface`,`mat-mdc-snackbar-surface`],[1,`mat-mdc-snack-bar-label`],[`aria-hidden`,`true`],[`cdkPortalOutlet`,``]],template:function(i,o){i&1&&(Hi(0,`div`,1)(1,`div`,2,0)(3,`div`,3),kg(4,t,0,0,`ng-template`,4),Rl(),Qg(5,`div`),Rl()()),i&2&&(ID(5),qg(`aria-live`,o._live)(`role`,o._role)(`id`,o._liveElementId))},dependencies:[Je],styles:[`@keyframes _mat-snack-bar-enter {
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
`],encapsulation:2,changeDetection:1})})()}return a})();var ln=new S(`mat-snack-bar-default-options`,{providedIn:`root`,factory:()=>new V});var Wt=(()=>{class a{_live=v(Nm);_injector=v(se);_breakpointObserver=v(fm);_parentSnackBar=v(a,{optional:!0,skipSelf:!0});_defaultConfig=v(ln);_animationsDisabled=nn$1();_snackBarRefAtThisLevel=null;simpleSnackBarComponent=rn;snackBarContainerComponent=sn;handsetCssClass=`mat-mdc-snack-bar-handset`;get _openedSnackBarRef(){let e=this._parentSnackBar;return e?e._openedSnackBarRef:this._snackBarRefAtThisLevel}set _openedSnackBarRef(e){this._parentSnackBar?this._parentSnackBar._openedSnackBarRef=e:this._snackBarRefAtThisLevel=e}openFromComponent(e,t){return this._attach(e,t)}openFromTemplate(e,t){return this._attach(e,t)}open(e,t=``,n){let i=z(z({},this._defaultConfig),n);return i.data={message:e,action:t},i.announcementMessage===e&&(i.announcementMessage=void 0),this.openFromComponent(this.simpleSnackBarComponent,i)}dismiss(){this._openedSnackBarRef&&this._openedSnackBarRef.dismiss()}ngOnDestroy(){this._snackBarRefAtThisLevel&&this._snackBarRefAtThisLevel.dismiss()}_attachSnackBarContainer(e,t){let n=t&&t.viewContainerRef&&t.viewContainerRef.injector,i=se.create({parent:n||this._injector,providers:[{provide:V,useValue:t}]}),o=new pt(this.snackBarContainerComponent,t.viewContainerRef,i),r=e.attach(o);return r.instance.snackBarConfig=t,r.instance}_attach(e,t){let n=z(z(z({},new V),this._defaultConfig),t),i=this._createOverlay(n),o=this._attachSnackBarContainer(i,n),r=new Z(o,i);if(e instanceof Fr){let l=new A(e,null,{$implicit:n.data,snackBarRef:r});r.instance=o.attachTemplatePortal(l)}else{let l=this._createInjector(n,r),g=new pt(e,void 0,l);r.instance=o.attachComponentPortal(g).instance}return this._breakpointObserver.observe(C_.HandsetPortrait).pipe(av(i.detachments())).subscribe(l=>{i.overlayElement.classList.toggle(this.handsetCssClass,l.matches)}),n.announcementMessage&&o._onAnnounce.subscribe(()=>{this._live.announce(n.announcementMessage,n.politeness)}),this._animateSnackBar(r,n),this._openedSnackBarRef=r,this._openedSnackBarRef}_animateSnackBar(e,t){e.afterDismissed().subscribe(()=>{this._openedSnackBarRef==e&&(this._openedSnackBarRef=null),t.announcementMessage&&this._live.clear()}),t.duration&&t.duration>0&&e.afterOpened().subscribe(()=>e._dismissAfter(t.duration)),this._openedSnackBarRef?(this._openedSnackBarRef.afterDismissed().subscribe(()=>{e.containerInstance.enter()}),this._openedSnackBarRef.dismiss()):e.containerInstance.enter()}_createOverlay(e){let t=new $;t.direction=e.direction;let n=ie(this._injector),i=e.direction===`rtl`,o=e.horizontalPosition===`left`||e.horizontalPosition===`start`&&!i||e.horizontalPosition===`end`&&i,r=!o&&e.horizontalPosition!==`center`;return o?n.left(`0`):r?n.right(`0`):n.centerHorizontally(),e.verticalPosition===`top`?n.top(`0`):n.bottom(`0`),t.positionStrategy=n,t.disableAnimations=this._animationsDisabled,ne(this._injector,t)}_createInjector(e,t){let n=e&&e.viewContainerRef&&e.viewContainerRef.injector;return se.create({parent:n||this._injector,providers:[{provide:Z,useValue:t},{provide:Qt,useValue:e.data}]})}static ɵfac=function(t){return new(t||a)};static ɵprov=$r({token:a,factory:a.ɵfac})}return a})();var Se=class a{snackBar=v(Wt);handleError(m){let e=m.rejection||m,t=``;if(e instanceof Xe)switch(e.status){case 0:t=`Connection Error`;break;case To.Unauthorized:t=`Unauthorized`;break;case To.Forbidden:t=`Access Denied`;break;case To.BadRequest:t=`Bad Request`;break;default:t=`Unknown Error`}else t=`Application Error`;this.snackBar.open(t,`Ok`),console.error(t,e)}static ɵfac=function(e){return new(e||a)};static ɵprov=ae({token:a,factory:a.ɵfac,providedIn:`root`})};var Kt={providers:[{provide:Je$1,useClass:Se},zv(),Gd(Ut,Xd(Hd)),wg(),$l(Hl({cookieName:`XSRF-TOKEN`,headerName:`X-CSRF-TOKEN`}))]};var je=new S(`MAT_MENU_PANEL`);var J=(()=>{class a{_isAnchor;_elementRef=v(Wr);_document=v(mt);_focusMonitor=v(Xr);_parentMenu=v(je,{optional:!0});_changeDetectorRef=v(_j);role=`menuitem`;disabled=!1;disabledInteractive=!1;disableRipple=!1;_hovered=new ee$1;_focused=new ee$1;_highlighted=!1;_triggersSubmenu=!1;constructor(){v(je$1).load(Oc),this._parentMenu?.addItem?.(this),this._isAnchor=this._elementRef.nativeElement.tagName===`A`}focus(e,t){this._focusMonitor&&e?this._focusMonitor.focusVia(this._getHostElement(),e,t):this._getHostElement().focus(t),this._focused.next(this)}ngAfterViewInit(){this._focusMonitor&&this._focusMonitor.monitor(this._elementRef,!1)}ngOnDestroy(){this._focusMonitor&&this._focusMonitor.stopMonitoring(this._elementRef),this._parentMenu&&this._parentMenu.removeItem&&this._parentMenu.removeItem(this),this._hovered.complete(),this._focused.complete()}_getTabIndex(){return this.disabled&&!this.disabledInteractive?`-1`:`0`}_getAriaDisabled(){return this._isAnchor?this.disabled||null:this.disabled&&this.disabledInteractive?!0:null}_getDisabled(){return this.disabledInteractive||!this.disabled?null:!0}_getHostElement(){return this._elementRef.nativeElement}_checkDisabled(e){this.disabled&&(e.preventDefault(),e.stopPropagation())}_handleMouseEnter(){this._hovered.next(this)}getLabel(){let e=this._elementRef.nativeElement.cloneNode(!0),t=e.querySelectorAll(`mat-icon, .material-icons, .material-symbols-outlined, .material-symbols-rounded, .material-symbols-sharp`);for(let n=0;n<t.length;n++)t[n].remove();return e.textContent?.trim()||``}_setHighlighted(e){this._highlighted=e,this._changeDetectorRef.markForCheck()}_setTriggersSubmenu(e){this._triggersSubmenu=e,this._changeDetectorRef.markForCheck()}_hasFocus(){return this._document&&this._document.activeElement===this._getHostElement()}static ɵfac=function(t){return new(t||a)};static ɵcmp=(function(){let e=[[[`mat-icon`],[``,`matMenuItemIcon`,``]],`*`],t=[`mat-icon, [matMenuItemIcon]`,`*`];function n(i,o){i&1&&(Ud(),Hi(0,`svg`,2),Qg(1,`polygon`,3),Rl())}return aw({type:a,selectors:[[``,`mat-menu-item`,``]],hostAttrs:[1,`mat-mdc-menu-item`,`mat-focus-indicator`],hostVars:12,hostBindings:function(o,r){o&1&&nm(`click`,function(g){return r._checkDisabled(g)})(`mouseenter`,function(){return r._handleMouseEnter()}),o&2&&(qg(`role`,r.role)(`tabindex`,r._getTabIndex())(`aria-disabled`,r._getAriaDisabled())(`disabled`,r._getDisabled()),pm(`mat-mdc-menu-item-highlighted`,r._highlighted)(`mat-mdc-menu-item-submenu-trigger`,r._triggersSubmenu)(`mat-mdc-menu-item-disabled`,r.disabled)(`mat-mdc-menu-item-disabled-interactive`,r.disabledInteractive))},inputs:{role:`role`,disabled:[2,`disabled`,`disabled`,Nj],disabledInteractive:[2,`disabledInteractive`,`disabledInteractive`,Nj],disableRipple:[2,`disableRipple`,`disableRipple`,Nj]},exportAs:[`matMenuItem`],ngContentSelectors:t,decls:5,vars:3,consts:[[1,`mat-mdc-menu-item-text`],[`matRipple`,``,1,`mat-mdc-menu-ripple`,3,`matRippleDisabled`,`matRippleTrigger`],[`viewBox`,`0 0 5 10`,`focusable`,`false`,`aria-hidden`,`true`,1,`mat-mdc-menu-submenu-icon`],[`points`,`0,0 5,5 0,10`]],template:function(o,r){o&1&&(yC(e),vC(0),Hi(1,`span`,0),vC(2,1),Rl(),Qg(3,`div`,1),eC(4,n,2,0,`svg`,2)),o&2&&(ID(3),zg(`matRippleDisabled`,r.disableRipple||r.disabled)(`matRippleTrigger`,r._getHostElement()),ID(),nC(r._triggersSubmenu?4:-1))},dependencies:[W_],encapsulation:2})})()}return a})();var hn=new S(`MatMenuContent`);var fn=new S(`mat-menu-default-options`,{providedIn:`root`,factory:()=>({overlapTrigger:!1,xPosition:`after`,yPosition:`below`,backdropClass:`cdk-overlay-transparent-backdrop`})});var ze=`_mat-menu-enter`;var Ce=`_mat-menu-exit`;var X=(()=>{class a{_elementRef=v(Wr);_changeDetectorRef=v(_j);_injector=v(se);_keyManager;_xPosition;_yPosition;_firstItemFocusRef;_exitFallbackTimeout;_animationsDisabled=nn$1();_allItems;_directDescendantItems=new Mi;_classList={};_panelAnimationState=`void`;_animationDone=new ee$1;_isAnimating=Et(!1);parentMenu;direction;overlayPanelClass;backdropClass;ariaLabel;ariaLabelledby;ariaDescribedby;get xPosition(){return this._xPosition}set xPosition(e){this._xPosition=e,this.setPositionClasses()}get yPosition(){return this._yPosition}set yPosition(e){this._yPosition=e,this.setPositionClasses()}templateRef;items;lazyContent;overlapTrigger=!1;hasBackdrop;get panelClass(){return this._previousPanelClass}set panelClass(e){let t=this._previousPanelClass,n=z({},this._classList);t&&t.length&&t.split(` `).forEach(i=>{n[i]=!1}),this._previousPanelClass=e,e&&e.length&&(e.split(` `).forEach(i=>{n[i]=!0}),this._elementRef.nativeElement.className=``),this._classList=n}_previousPanelClass=``;get classList(){return this.panelClass}set classList(e){this.panelClass=e}closed=new Qe$1;close=this.closed;panelId=v(Si).getId(`mat-menu-panel-`);constructor(){let e=v(fn);this.overlayPanelClass=e.overlayPanelClass||``,this._xPosition=e.xPosition,this._yPosition=e.yPosition,this.backdropClass=e.backdropClass,this.overlapTrigger=e.overlapTrigger,this.hasBackdrop=e.hasBackdrop}ngOnInit(){this.setPositionClasses()}ngAfterContentInit(){this._updateDirectDescendants(),this._keyManager=new _i(this._directDescendantItems).withWrap().withTypeAhead().withHomeAndEnd().skipPredicate(e=>e.disabled&&!e.disabledInteractive),this._keyManager.tabOut.subscribe(()=>this.closed.emit(`tab`)),this._directDescendantItems.changes.pipe(iv(this._directDescendantItems),sv(e=>Gy(...e.map(t=>t._focused)))).subscribe(e=>this._keyManager.updateActiveItem(e)),this._directDescendantItems.changes.subscribe(e=>{let t=this._keyManager;if(this._panelAnimationState===`enter`&&t.activeItem?._hasFocus()){let n=e.toArray(),i=Math.max(0,Math.min(n.length-1,t.activeItemIndex||0));n[i]&&!n[i].disabled?t.setActiveItem(i):t.setNextItemActive()}})}ngOnDestroy(){this._keyManager?.destroy(),this._directDescendantItems.destroy(),this.closed.complete(),this._firstItemFocusRef?.destroy(),clearTimeout(this._exitFallbackTimeout)}_hovered(){return this._directDescendantItems.changes.pipe(iv(this._directDescendantItems),sv(t=>Gy(...t.map(n=>n._hovered))))}addItem(e){}removeItem(e){}_handleKeydown(e){let t=e.keyCode,n=this._keyManager;switch(t){case 27:_c(e)||(e.preventDefault(),this.closed.emit(`keydown`));break;case 37:this.parentMenu&&this.direction===`ltr`&&this.closed.emit(`keydown`);break;case 39:this.parentMenu&&this.direction===`rtl`&&this.closed.emit(`keydown`);break;default:(t===38||t===40)&&n.setFocusOrigin(`keyboard`),n.onKeydown(e);return}}focusFirstItem(e=`program`){this._firstItemFocusRef?.destroy(),this._firstItemFocusRef=Dh(()=>{let t=this._resolvePanel();if(!t||!t.contains(document.activeElement)){let n=this._keyManager;n.setFocusOrigin(e).setFirstItemActive(),!n.activeItem&&t&&t.focus()}},{injector:this._injector})}resetActiveItem(){this._keyManager.setActiveItem(-1)}setElevation(e){}setPositionClasses(e=this.xPosition,t=this.yPosition){this._classList=Q$2(z({},this._classList),{"mat-menu-before":e===`before`,"mat-menu-after":e===`after`,"mat-menu-above":t===`above`,"mat-menu-below":t===`below`}),this._changeDetectorRef.markForCheck()}_onAnimationDone(e){let t=e===Ce;(t||e===ze)&&(t&&(clearTimeout(this._exitFallbackTimeout),this._exitFallbackTimeout=void 0),this._animationDone.next(t?`void`:`enter`),this._isAnimating.set(!1))}_onAnimationStart(e){(e===ze||e===Ce)&&this._isAnimating.set(!0)}_setIsOpen(e){if(this._panelAnimationState=e?`enter`:`void`,e){if(this._keyManager.activeItemIndex===0){let t=this._resolvePanel();t&&(t.scrollTop=0)}}else this._animationsDisabled||(this._exitFallbackTimeout=setTimeout(()=>this._onAnimationDone(Ce),200));this._animationsDisabled&&setTimeout(()=>{this._onAnimationDone(e?ze:Ce)}),this._changeDetectorRef.markForCheck()}_updateDirectDescendants(){this._allItems.changes.pipe(iv(this._allItems)).subscribe(e=>{this._directDescendantItems.reset(e.filter(t=>t._parentMenu===this)),this._directDescendantItems.notifyOnChanges()})}_resolvePanel(){let e=null;return this._directDescendantItems.length&&(e=this._directDescendantItems.first._getHostElement().closest(`[role="menu"]`)),e}static ɵfac=function(t){return new(t||a)};static ɵcmp=(function(){let e=[`*`];function t(n,i){if(n&1){let o=fC();kl(0,`div`,0),rm(`click`,function(){Sd(o);let l=gC();return xd(l.closed.emit(`click`))})(`animationstart`,function(l){Sd(o);let g=gC();return xd(g._onAnimationStart(l.animationName))})(`animationend`,function(l){Sd(o);let g=gC();return xd(g._onAnimationDone(l.animationName))})(`animationcancel`,function(l){Sd(o);let g=gC();return xd(g._onAnimationDone(l.animationName))}),kl(1,`div`,1),vC(2),Ll()()}if(n&2){let o=gC();jC(o._classList),pm(`mat-menu-panel-animations-disabled`,o._animationsDisabled)(`mat-menu-panel-exit-animation`,o._panelAnimationState===`void`)(`mat-menu-panel-animating`,o._isAnimating()),em(`id`,o.panelId),qg(`aria-label`,o.ariaLabel||null)(`aria-labelledby`,o.ariaLabelledby||null)(`aria-describedby`,o.ariaDescribedby||null)}}return aw({type:a,selectors:[[`mat-menu`]],contentQueries:function(i,o,r){if(i&1&&om(r,hn,5)(r,J,5)(r,J,4),i&2){let l;IC(l=DC())&&(o.lazyContent=l.first),IC(l=DC())&&(o._allItems=l),IC(l=DC())&&(o.items=l)}},viewQuery:function(i,o){if(i&1&&im(Fr,5),i&2){let r;IC(r=DC())&&(o.templateRef=r.first)}},hostVars:3,hostBindings:function(i,o){i&2&&qg(`aria-label`,null)(`aria-labelledby`,null)(`aria-describedby`,null)},inputs:{backdropClass:`backdropClass`,ariaLabel:[0,`aria-label`,`ariaLabel`],ariaLabelledby:[0,`aria-labelledby`,`ariaLabelledby`],ariaDescribedby:[0,`aria-describedby`,`ariaDescribedby`],xPosition:`xPosition`,yPosition:`yPosition`,overlapTrigger:[2,`overlapTrigger`,`overlapTrigger`,Nj],hasBackdrop:[2,`hasBackdrop`,`hasBackdrop`,n=>n==null?null:Nj(n)],panelClass:[0,`class`,`panelClass`],classList:`classList`},outputs:{closed:`closed`,close:`close`},exportAs:[`matMenu`],features:[tb([{provide:je,useExisting:a}])],ngContentSelectors:e,decls:1,vars:0,consts:[[`tabindex`,`-1`,`role`,`menu`,1,`mat-mdc-menu-panel`,3,`click`,`animationstart`,`animationend`,`animationcancel`,`id`],[1,`mat-mdc-menu-content`]],template:function(i,o){i&1&&(yC(),Lg(0,t,3,12,`ng-template`))},styles:[`mat-menu {
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
`],encapsulation:2})})()}return a})();var gn=new S(`mat-menu-scroll-strategy`,{providedIn:`root`,factory:()=>{let a=v(se);return()=>Qt$1(a)}});var U=/* @__PURE__ */ new WeakMap;var bn=(()=>{class a{_canHaveBackdrop;_element=v(Wr);_viewContainerRef=v(is);_menuItemInstance=v(J,{optional:!0,self:!0});_dir=v(am,{optional:!0});_focusMonitor=v(Xr);_ngZone=v(Fe$1);_injector=v(se);_scrollStrategy=v(gn);_changeDetectorRef=v(_j);_animationsDisabled=nn$1();_portal;_overlayRef=null;_menuOpen=!1;_closingActionsSubscription=K$2.EMPTY;_menuCloseSubscription=K$2.EMPTY;_pendingRemoval;_parentMaterialMenu;_parentInnerPadding;_openedBy=void 0;get _menu(){return this._menuInternal}set _menu(e){e!==this._menuInternal&&(this._menuInternal=e,this._menuCloseSubscription.unsubscribe(),e?(this._parentMaterialMenu,this._menuCloseSubscription=e.close.subscribe(t=>{this._destroyMenu(t),(t===`click`||t===`tab`)&&this._parentMaterialMenu&&this._parentMaterialMenu.closed.emit(t)})):this._destroyMenu(),this._menuItemInstance?._setTriggersSubmenu(this._triggersSubmenu()))}_menuInternal=null;constructor(e){this._canHaveBackdrop=e;let t=v(je,{optional:!0});this._parentMaterialMenu=t instanceof X?t:void 0}ngOnDestroy(){this._menu&&this._ownsMenu(this._menu)&&U.delete(this._menu),this._pendingRemoval?.unsubscribe(),this._menuCloseSubscription.unsubscribe(),this._closingActionsSubscription.unsubscribe(),this._overlayRef&&(this._overlayRef.dispose(),this._overlayRef=null)}get menuOpen(){return this._menuOpen}get dir(){return this._dir&&this._dir.value===`rtl`?`rtl`:`ltr`}_triggersSubmenu(){return!!(this._menuItemInstance&&this._parentMaterialMenu&&this._menu)}_closeMenu(){this._menu?.close.emit()}_openMenu(e){if(this._triggerIsAriaDisabled())return;let t=this._menu;if(this._menuOpen||!t)return;this._pendingRemoval?.unsubscribe();let n=U.get(t);U.set(t,this),n&&n!==this&&n._closeMenu();let i=this._createOverlay(t),o=i.getConfig(),r=o.positionStrategy;this._setPosition(t,r),this._canHaveBackdrop?o.hasBackdrop=t.hasBackdrop==null?!this._triggersSubmenu():t.hasBackdrop:o.hasBackdrop=t.hasBackdrop??!1,i.hasAttached()||(i.attach(this._getPortal(t)),t.lazyContent?.attach(this.menuData)),this._closingActionsSubscription=this._menuClosingActions().subscribe(()=>this._closeMenu()),t.parentMenu=this._triggersSubmenu()?this._parentMaterialMenu:void 0,t.direction=this.dir,e&&t.focusFirstItem(this._openedBy||`program`),this._setIsMenuOpen(!0),t instanceof X&&(t._setIsOpen(!0),t._directDescendantItems.changes.pipe(av(t.close)).subscribe(()=>{r.withLockedPosition(!1).reapplyLastPosition(),r.withLockedPosition(!0)}))}focus(e,t){this._focusMonitor&&e?this._focusMonitor.focusVia(this._element,e,t):this._element.nativeElement.focus(t)}_destroyMenu(e){let t=this._overlayRef,n=this._menu;!t||!this.menuOpen||(this._closingActionsSubscription.unsubscribe(),this._pendingRemoval?.unsubscribe(),n instanceof X&&this._ownsMenu(n)?(this._pendingRemoval=n._animationDone.pipe(gn$1(1)).subscribe(()=>{t.detach(),U.has(n)||n.lazyContent?.detach()}),n._setIsOpen(!1)):(t.detach(),n?.lazyContent?.detach()),n&&this._ownsMenu(n)&&U.delete(n),this.restoreFocus&&(e===`keydown`||!this._openedBy||!this._triggersSubmenu())&&this.focus(this._openedBy),this._openedBy=void 0,this._setIsMenuOpen(!1))}_setIsMenuOpen(e){e!==this._menuOpen&&(this._menuOpen=e,this._menuOpen?this.menuOpened.emit():this.menuClosed.emit(),this._triggersSubmenu()&&this._menuItemInstance._setHighlighted(e),this._changeDetectorRef.markForCheck())}_createOverlay(e){if(!this._overlayRef){let t=this._getOverlayConfig(e);this._subscribeToPositions(e,t.positionStrategy),this._overlayRef=ne(this._injector,t),this._overlayRef.keydownEvents().subscribe(n=>{this._menu instanceof X&&this._menu._handleKeydown(n)})}return this._overlayRef}_getOverlayConfig(e){return new $({positionStrategy:te(this._injector,this._getOverlayOrigin()).withLockedPosition().withGrowAfterOpen().withTransformOriginOn(`.mat-menu-panel, .mat-mdc-menu-panel`),backdropClass:e.backdropClass||`cdk-overlay-transparent-backdrop`,panelClass:e.overlayPanelClass,scrollStrategy:this._scrollStrategy(),direction:this._dir||`ltr`,disableAnimations:this._animationsDisabled})}_subscribeToPositions(e,t){e.setPositionClasses&&t.positionChanges.subscribe(n=>{this._ngZone.run(()=>{let i=n.connectionPair.overlayX===`start`?`after`:`before`,o=n.connectionPair.overlayY===`top`?`below`:`above`;e.setPositionClasses(i,o)})})}_setPosition(e,t){let[n,i]=e.xPosition===`before`?[`end`,`start`]:[`start`,`end`],[o,r]=e.yPosition===`above`?[`bottom`,`top`]:[`top`,`bottom`],[l,g]=[o,r],[Y,Ae]=[n,i],q=0;if(this._triggersSubmenu()){if(Ae=n=e.xPosition===`before`?`start`:`end`,i=Y=n===`end`?`start`:`end`,this._parentMaterialMenu){if(this._parentInnerPadding==null){let He=this._parentMaterialMenu.items.first;this._parentInnerPadding=He?He._getHostElement().offsetTop:0}q=o===`bottom`?this._parentInnerPadding:-this._parentInnerPadding}}else e.overlapTrigger||(l=o===`top`?`bottom`:`top`,g=r===`top`?`bottom`:`top`);t.withPositions([{originX:n,originY:l,overlayX:Y,overlayY:o,offsetY:q},{originX:i,originY:l,overlayX:Ae,overlayY:o,offsetY:q},{originX:n,originY:g,overlayX:Y,overlayY:r,offsetY:-q},{originX:i,originY:g,overlayX:Ae,overlayY:r,offsetY:-q}])}_menuClosingActions(){let e=this._getOutsideClickStream(this._overlayRef),t=this._overlayRef.detachments(),n=this._parentMaterialMenu?this._parentMaterialMenu.closed:Ay(),i=this._parentMaterialMenu?this._parentMaterialMenu._hovered().pipe(rr(o=>this._menuOpen&&o!==this._menuItemInstance)):Ay();return Gy(e,n,i,t)}_getPortal(e){return(!this._portal||this._portal.templateRef!==e.templateRef)&&(this._portal=new A(e.templateRef,this._viewContainerRef)),this._portal}_ownsMenu(e){return U.get(e)===this}_triggerIsAriaDisabled(){return Nj(this._element.nativeElement.getAttribute(`aria-disabled`))}static ɵfac=function(t){_T()};static ɵdir=fw({type:a})}return a})();var Zt=(()=>{class a extends bn{_cleanupTouchstart;_hoverSubscription=K$2.EMPTY;get _deprecatedMatMenuTriggerFor(){return this.menu}set _deprecatedMatMenuTriggerFor(e){this.menu=e}get menu(){return this._menu}set menu(e){this._menu=e}menuData;restoreFocus=!0;menuOpened=new Qe$1;onMenuOpen=this.menuOpened;menuClosed=new Qe$1;onMenuClose=this.menuClosed;constructor(){super(!0);let e=v(Ic);this._cleanupTouchstart=e.listen(this._element.nativeElement,`touchstart`,t=>{Pn(t)||(this._openedBy=`touch`)},{passive:!0})}triggersSubmenu(){return super._triggersSubmenu()}toggleMenu(){return this.menuOpen?this.closeMenu():this.openMenu()}openMenu(){this._openMenu(!0)}closeMenu(){this._closeMenu()}updatePosition(){this._overlayRef?.updatePosition()}ngAfterContentInit(){this._handleHover()}ngOnDestroy(){super.ngOnDestroy(),this._cleanupTouchstart(),this._hoverSubscription.unsubscribe()}_getOverlayOrigin(){return this._element}_getOutsideClickStream(e){return e.backdropClick()}_handleMousedown(e){On(e)||(this._openedBy=e.button===0?`mouse`:void 0,this.triggersSubmenu()&&e.preventDefault())}_handleKeydown(e){let t=e.keyCode;(t===13||t===32)&&(this._openedBy=`keyboard`),this.triggersSubmenu()&&(t===39&&this.dir===`ltr`||t===37&&this.dir===`rtl`)&&(this._openedBy=`keyboard`,this.openMenu())}_handleClick(e){this.triggersSubmenu()?(e.stopPropagation(),this.openMenu()):this.toggleMenu()}_handleHover(){this.triggersSubmenu()&&this._parentMaterialMenu&&(this._hoverSubscription=this._parentMaterialMenu._hovered().subscribe(e=>{e===this._menuItemInstance&&!e.disabled&&this._parentMaterialMenu?._panelAnimationState!==`void`&&(this._openedBy=`mouse`,this._openMenu(!1))}))}static ɵfac=function(t){return new(t||a)};static ɵdir=fw({type:a,selectors:[[``,`mat-menu-trigger-for`,``],[``,`matMenuTriggerFor`,``]],hostAttrs:[1,`mat-mdc-menu-trigger`],hostVars:3,hostBindings:function(t,n){t&1&&nm(`click`,function(o){return n._handleClick(o)})(`mousedown`,function(o){return n._handleMousedown(o)})(`keydown`,function(o){return n._handleKeydown(o)}),t&2&&qg(`aria-haspopup`,n.menu?`menu`:null)(`aria-expanded`,n.menuOpen)(`aria-controls`,n.menuOpen?n.menu?.panelId:null)},inputs:{_deprecatedMatMenuTriggerFor:[0,`mat-menu-trigger-for`,`_deprecatedMatMenuTriggerFor`],menu:[0,`matMenuTriggerFor`,`menu`],menuData:[0,`matMenuTriggerData`,`menuData`],restoreFocus:[0,`matMenuTriggerRestoreFocus`,`restoreFocus`]},outputs:{menuOpened:`menuOpened`,onMenuOpen:`onMenuOpen`,menuClosed:`menuClosed`,onMenuClose:`onMenuClose`},exportAs:[`matMenuTrigger`],features:[Og]})}return a})();var _n=(()=>{class a{static ɵfac=function(t){return new(t||a)};static ɵdir=fw({type:a,selectors:[[`mat-toolbar-row`]],hostAttrs:[1,`mat-toolbar-row`],exportAs:[`matToolbarRow`]})}return a})();var Jt=(()=>{class a{_elementRef=v(Wr);_platform=v(ae$1);_document=v(mt);color;_toolbarRows;ngAfterViewInit(){this._platform.isBrowser&&(this._checkToolbarMixedModes(),this._toolbarRows.changes.subscribe(()=>this._checkToolbarMixedModes()))}_checkToolbarMixedModes(){this._toolbarRows.length}static ɵfac=function(t){return new(t||a)};static ɵcmp=(function(){let e=[`*`,[[`mat-toolbar-row`]]];return aw({type:a,selectors:[[`mat-toolbar`]],contentQueries:function(i,o,r){if(i&1&&om(r,_n,5),i&2){let l;IC(l=DC())&&(o._toolbarRows=l)}},hostAttrs:[1,`mat-toolbar`],hostVars:6,hostBindings:function(i,o){i&2&&(jC(o.color?`mat-`+o.color:``),pm(`mat-toolbar-multiple-rows`,o._toolbarRows.length>0)(`mat-toolbar-single-row`,o._toolbarRows.length===0))},inputs:{color:`color`},exportAs:[`matToolbar`],ngContentSelectors:[`*`,`mat-toolbar-row`],decls:2,vars:0,template:function(i,o){i&1&&(yC(e),vC(0),vC(1,1))},styles:[`.mat-toolbar {
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
`],encapsulation:2})})()}return a})();function yn(a,m){if(a&1&&Qg(0,`img`,1),a&2){let e=gC();zg(`ngSrc`,e.profileService.myProfileInfo.value().avatarUrl)(`matTooltip`,e.identityService.myIdentityInfo.value()?.userName)}}function vn(a,m){if(a&1&&(Hi(0,`mat-icon`,2),QC(1,` account_circle `),Rl()),a&2){let e=gC();zg(`matTooltip`,e.identityService.myIdentityInfo.value()?.userName)}}function Mn(a,m){a&1&&(Hi(0,`mat-icon`),QC(1,`account_circle_off`),Rl())}var Ie=class a{menu=Ij.required();identityService=v(Lc);profileService=v(c);imgBtnStyle=`padding: 0px; width: 40px; height: 40px; transform: translateY(3px);`;static ɵfac=function(e){return new(e||a)};static ɵcmp=aw({type:a,selectors:[[`app-account-dropdown`]],inputs:{menu:[1,`menu`]},decls:4,vars:4,consts:[[`matIconButton`,``,3,`matMenuTriggerFor`],[`priority`,``,`width`,`40`,`height`,`40`,`alt`,`user avatar`,3,`ngSrc`,`matTooltip`],[3,`matTooltip`]],template:function(e,t){e&1&&(Hi(0,`button`,0),eC(1,yn,1,2,`img`,1)(2,vn,2,1,`mat-icon`,2)(3,Mn,2,0,`mat-icon`),Rl()),e&2&&(PC(t.profileService.myProfileInfo.hasValue()?t.imgBtnStyle:``),zg(`matMenuTriggerFor`,t.menu()),ID(),nC(t.profileService.myProfileInfo.value()?.avatarUrl?1:t.identityService.isAuthenticated()?2:3))},dependencies:[zm,Zt,yv,Gp,at],styles:[`button[_ngcontent-%COMP%]{margin:0;overflow:hidden}button[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:40px;height:40px}`]})};var xn=()=>[`/`];var kn=()=>[`/UserAccount/Profile`];var wn=()=>[`/Identity/Login`];var Sn=()=>[`/Identity/Signup`];function Cn(a,m){if(a&1){let e=fC();Hi(0,`button`,8),nm(`click`,function(){Sd(e);let n=gC();return xd(n.sharedConfigs.toggleColorScheme())}),Hi(1,`mat-icon`),QC(2,`light_mode`),Rl()()}}function In(a,m){if(a&1){let e=fC();Hi(0,`button`,9),nm(`click`,function(){Sd(e);let n=gC();return xd(n.sharedConfigs.toggleColorScheme())}),Hi(1,`mat-icon`),QC(2,`dark_mode`),Rl()()}}function Tn(a,m){if(a&1){let e=fC();Hi(0,`a`,10)(1,`mat-icon`),QC(2,`account_box`),Rl(),QC(3,` Profile `),Rl(),Hi(4,`a`,11),nm(`click`,function(){Sd(e);let n=gC();return xd(n.identityService.logout())}),Hi(5,`mat-icon`),QC(6,`logout`),Rl(),QC(7,` Logout `),Rl()}a&2&&zg(`routerLink`,ob(1,kn))}function Dn(a,m){a&1&&(Hi(0,`a`,10)(1,`mat-icon`),QC(2,`login`),Rl(),QC(3,` Login `),Rl(),Hi(4,`a`,10)(5,`mat-icon`),QC(6,`person_add`),Rl(),QC(7,` Create a new account `),Rl()),a&2&&(zg(`routerLink`,ob(2,wn)),ID(4),zg(`routerLink`,ob(3,Sn)))}var Te=class a{sharedConfigs=v(i);document=v(mt);identityService=v(Lc);logoImgSrc=it$1(()=>this.sharedConfigs.colorScheme()===`dark`?`/Logo/HoLibz_Logo_Dark_Pink_Only.webp`:`/Logo/HoLibz_Logo_Light_Blue_Only.webp`);displayShadow=Et(!1);onWindowScroll(){this.document.defaultView&&this.document.defaultView.scrollY>0?this.displayShadow.set(!0):this.displayShadow.set(!1)}static ɵfac=function(e){return new(e||a)};static ɵcmp=aw({type:a,selectors:[[`app-nav-bar`]],hostBindings:function(e,t){e&1&&nm(`scroll`,function(){return t.onWindowScroll()},FI)},decls:11,vars:8,consts:[[`account`,``],[`matButton`,``,`matTooltip`,`Home`,2,`padding`,`12px 0 0 0`,`overflow`,`hidden`,3,`routerLink`],[`width`,`52`,`height`,`40`,`alt`,`HoLibz Logo`,3,`ngSrc`],[1,`full-spacer`],[`matIconButton`,``,`matTooltip`,`Light Mode`,1,`lightDarkBtn`],[`matIconButton`,``,`matTooltip`,`Dark Mode`,1,`lightDarkBtn`],[3,`menu`],[1,`navbar-matMenu`],[`matIconButton`,``,`matTooltip`,`Light Mode`,1,`lightDarkBtn`,3,`click`],[`matIconButton`,``,`matTooltip`,`Dark Mode`,1,`lightDarkBtn`,3,`click`],[`mat-menu-item`,``,3,`routerLink`],[`mat-menu-item`,``,3,`click`]],template:function(e,t){if(e&1&&(Hi(0,`mat-toolbar`)(1,`a`,1),Qg(2,`img`,2),Rl(),Qg(3,`span`,3),eC(4,Cn,3,0,`button`,4)(5,In,3,0,`button`,5),Qg(6,`app-account-dropdown`,6),Hi(7,`mat-menu`,7,0),eC(9,Tn,8,2)(10,Dn,8,4),Rl()()),e&2){let n=wC(8);pm(`shadow`,t.displayShadow()),ID(),zg(`routerLink`,ob(7,xn)),ID(),zg(`ngSrc`,t.logoImgSrc()),ID(2),nC(t.sharedConfigs.colorScheme()===`light`?4:5),ID(2),zg(`menu`,n),ID(3),nC(t.identityService&&t.identityService.isAuthenticated()?9:10)}},dependencies:[yv,Jt,zm,X,J,Ie,at,Ks,Gp,y0],styles:[`.full-spacer[_ngcontent-%COMP%]{flex:1 1 auto}mat-toolbar[_ngcontent-%COMP%]{position:fixed;width:100%;height:56px;z-index:10;top:0}mat-toolbar.shadow[_ngcontent-%COMP%]{box-shadow:0 0 5px 0 var(--%NS%mat-sys-outline-variant)}#mainMenu[_ngcontent-%COMP%]{display:block}#littleMenu[_ngcontent-%COMP%]{display:none}.lightDarkBtn[_ngcontent-%COMP%]{margin:0 20px 0 0}@media screen and (max-width:600px){.lightDarkBtn[_ngcontent-%COMP%]{margin:0}}`]})};var De=class a{static ɵfac=function(e){return new(e||a)};static ɵcmp=aw({type:a,selectors:[[`app-root`]],decls:2,vars:0,template:function(e,t){e&1&&Qg(0,`app-nav-bar`)(1,`router-outlet`)},dependencies:[si,Te],encapsulation:2})};yl(De,Kt).catch(a=>console.error(a));export{Je as a,X$1 as c,ne as d,pt as f,i as g,c as h,A as i,Xt as l,qt as m,$ as n,M as o,q as p,$t as r,Qe as s,at as t,ie as u};