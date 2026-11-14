import{a as Xt,c as te,i as Ut$1,n as Kt,t as $t$1}from"./chunk-BSTH8ofH.js";import{B as gc,C as Oc,E as Si,F as _i,I as ae,J as vt,K as nn,L as am,O as Ue,P as _c,R as bi,S as O_,T as S0,V as je,W as lv,X as y0,Z as yv,a as W,b as La,f as we,g as Am,h as c,j as Xr,k as W_,m as z,n as Le,p as wi,q as um,t as Ci,v as Gp,x as Lc,y as Ks,z as dy}from"./main-6WHCNVGB.js";import{a as aa$1,c as fs,d as ms,i as Jo,l as hr,m as zn$1,n as Fl,o as cs,p as us,r as Ft,t as Ao}from"./chunk-DsAnlPyv.js";import{n as v,t as N}from"./chunk-kVFAzHR1.js";import{a as T,c as k,i as L,l as z$1,n as E,o as _,r as F,s as j,t as A}from"./chunk-D7uWp6Om.js";import{A as ID,Ar as yC,Cn as jC,Ct as TC,D as Gy,Dn as kg,Dr as x,Dt as Ue$1,E as Gg,H as K,Ht as Yy,In as nC,Kn as ob,M as Ic,N as Ij,Nn as lw,O as Hi,Or as xd,Pn as mt,Pr as zg,Pt as Wr,Q as Nj,Qt as bs,Rn as nd,Sn as iv,Sr as wC,T as Fr,Tr as wm,Vn as nr,Wn as oC,X as Mi,Xn as pm,Xt as av,Yn as ov,Yt as am$1,Zn as qg,Zt as aw,_n as iC,_r as vC,_t as S,b as Ej,bn as is,bt as Sj,c as Ay,ct as QC,dn as gC,dr as tb,dt as Qy,en as eC,er as rC,fn as gn,ft as RE,g as Dj,gr as v$1,h as Dh,j as IT,jt as Vl,k as IC,ln as fm,lr as sv,lt as Qe,m as DC,mn as hE,mt as Rl,nn as ee,nt as Og,on as fC,or as se,q as Lg,qn as om,qt as _j,rr,s as At,un as fw,ut as Qg,vn as ib,vr as vT,vt as Sd,w as Fe,x as Et,xn as it,yn as im,zn as nm}from"./chunk-kniop8OV.js";var Pn=new S(`MatTabContent`);var ue=(()=>{class n{template=v$1(Fr);static ɵfac=function(e){return new(e||n)};static ɵdir=fw({type:n,selectors:[[``,`matTabContent`,``]],features:[tb([{provide:Pn,useExisting:n}])]})}return n})();var Rn=new S(`MatTabLabel`);var xn=new S(`MAT_TAB`);var An=(()=>{class n extends wi{_closestTab=v$1(xn,{optional:!0});static ɵfac=(()=>{let t;return function(a){return(t||(t=RE(n)))(a||n)}})();static ɵdir=fw({type:n,selectors:[[``,`mat-tab-label`,``],[``,`matTabLabel`,``]],features:[tb([{provide:Rn,useExisting:n}]),Og]})}return n})();var Cn=new S(`MAT_TAB_GROUP`);var he=(()=>{class n{_viewContainerRef=v$1(is);_closestTabGroup=v$1(Cn,{optional:!0});disabled=!1;get templateLabel(){return this._templateLabel}set templateLabel(t){this._setTemplateLabelInput(t)}_templateLabel;_explicitContent=void 0;_implicitContent;textLabel=``;ariaLabel;ariaLabelledby;labelClass;bodyClass;id=null;_contentPortal=null;get content(){return this._contentPortal}_stateChanges=new ee;position=null;origin=null;isActive=!1;constructor(){v$1(je).load(Oc)}ngOnChanges(t){(Object.hasOwn(t,`textLabel`)||Object.hasOwn(t,`disabled`))&&this._stateChanges.next()}ngOnDestroy(){this._stateChanges.complete()}ngOnInit(){this._contentPortal=new W(this._explicitContent||this._implicitContent,this._viewContainerRef)}_setTemplateLabelInput(t){t&&t._closestTab===this&&(this._templateLabel=t)}static ɵfac=function(e){return new(e||n)};static ɵcmp=(function(){let t=[`*`];function e(a,i){a&1&&vC(0)}return aw({type:n,selectors:[[`mat-tab`]],contentQueries:function(i,o,c){if(i&1&&om(c,An,5)(c,ue,7,Fr),i&2){let p;IC(p=DC())&&(o.templateLabel=p.first),IC(p=DC())&&(o._explicitContent=p.first)}},viewQuery:function(i,o){if(i&1&&im(Fr,7),i&2){let c;IC(c=DC())&&(o._implicitContent=c.first)}},hostAttrs:[`hidden`,``],hostVars:1,hostBindings:function(i,o){i&2&&qg(`id`,null)},inputs:{disabled:[2,`disabled`,`disabled`,Nj],textLabel:[0,`label`,`textLabel`],ariaLabel:[0,`aria-label`,`ariaLabel`],ariaLabelledby:[0,`aria-labelledby`,`ariaLabelledby`],labelClass:`labelClass`,bodyClass:`bodyClass`,id:`id`},exportAs:[`matTab`],features:[tb([{provide:xn,useExisting:n}]),hE],ngContentSelectors:t,decls:1,vars:0,template:function(i,o){i&1&&(yC(),Lg(0,e,1,0,`ng-template`))},encapsulation:2,changeDetection:1})})()}return n})();var le=`mdc-tab-indicator--active`;var vn=`mdc-tab-indicator--no-transition`;var me=class{_items;_currentItem;constructor(l){this._items=l}hide(){this._items.forEach(l=>l.deactivateInkBar()),this._currentItem=void 0}alignToElement(l){let t=this._items.find(a=>a.elementRef.nativeElement===l),e=this._currentItem;if(t!==e&&(e?.deactivateInkBar(),t)){let a=e?.elementRef.nativeElement.getBoundingClientRect?.();t.activateInkBar(a),this._currentItem=t}}};var Fn=(()=>{class n{_elementRef=v$1(Wr);_inkBarElement=null;_inkBarContentElement=null;_fitToContent=!1;get fitInkBarToContent(){return this._fitToContent}set fitInkBarToContent(t){this._fitToContent!==t&&(this._fitToContent=t,this._inkBarElement&&this._appendInkBarElement())}activateInkBar(t){let e=this._elementRef.nativeElement;if(!t||!e.getBoundingClientRect||!this._inkBarContentElement){e.classList.add(le);return}let a=e.getBoundingClientRect(),i=t.width/a.width,o=t.left-a.left;e.classList.add(vn),this._inkBarContentElement.style.setProperty(`transform`,`translateX(${o}px) scaleX(${i})`),e.getBoundingClientRect(),e.classList.remove(vn),e.classList.add(le),this._inkBarContentElement.style.setProperty(`transform`,``)}deactivateInkBar(){this._elementRef.nativeElement.classList.remove(le)}ngOnInit(){this._createInkBarElement()}ngOnDestroy(){this._inkBarElement?.remove(),this._inkBarElement=this._inkBarContentElement=null}_createInkBarElement(){let t=this._elementRef.nativeElement.ownerDocument||document,e=this._inkBarElement=t.createElement(`span`),a=this._inkBarContentElement=t.createElement(`span`);e.className=`mdc-tab-indicator`,a.className=`mdc-tab-indicator__content mdc-tab-indicator__content--underline`,e.appendChild(this._inkBarContentElement),this._appendInkBarElement()}_appendInkBarElement(){this._inkBarElement;(this._fitToContent?this._elementRef.nativeElement.querySelector(`.mdc-tab__content`):this._elementRef.nativeElement).appendChild(this._inkBarElement)}static ɵfac=function(e){return new(e||n)};static ɵdir=fw({type:n,inputs:{fitInkBarToContent:[2,`fitInkBarToContent`,`fitInkBarToContent`,Nj]}})}return n})();var kn=(()=>{class n extends Fn{elementRef=v$1(Wr);disabled=!1;focus(){this.elementRef.nativeElement.focus()}getOffsetLeft(){return this.elementRef.nativeElement.offsetLeft}getOffsetWidth(){return this.elementRef.nativeElement.offsetWidth}static ɵfac=(()=>{let t;return function(a){return(t||(t=RE(n)))(a||n)}})();static ɵdir=fw({type:n,selectors:[[``,`matTabLabelWrapper`,``]],hostVars:3,hostBindings:function(e,a){e&2&&(qg(`aria-disabled`,!!a.disabled),pm(`mat-mdc-tab-disabled`,a.disabled))},inputs:{disabled:[2,`disabled`,`disabled`,Nj]},features:[Og]})}return n})();var yn={passive:!0};var zn=650;var On=100;function ce(n){let l=n+``;return/^[0-9]+(?:\.[0-9]+)?$/.test(l)?`${n}ms`:/^[0-9]+(?:\.[0-9]+)?(?:ms|s)$/.test(l)?l:``}var Vn=(()=>{class n{_elementRef=v$1(Wr);_changeDetectorRef=v$1(_j);_viewportRuler=v$1(z);_dir=v$1(am,{optional:!0});_ngZone=v$1(Fe);_platform=v$1(ae);_sharedResizeObserver=v$1(hr);_injector=v$1(se);_renderer=v$1(Ic);_animationsDisabled=nn();_eventCleanups;_scrollDistance=0;_selectedIndexChanged=!1;_destroyed=new ee;_showPaginationControls=!1;_disableScrollAfter=!0;_disableScrollBefore=!0;_tabLabelCount;_scrollDistanceChanged=!1;_keyManager;_currentTextContent;_stopScrolling=new ee;disablePagination=!1;get selectedIndex(){return this._selectedIndex}set selectedIndex(t){let e=isNaN(t)?0:t;this._selectedIndex!=e&&(this._selectedIndexChanged=!0,this._selectedIndex=e,this._keyManager&&this._keyManager.updateActiveItem(e))}_selectedIndex=0;selectFocusedIndex=new Qe;indexFocused=new Qe;constructor(){this._eventCleanups=this._ngZone.runOutsideAngular(()=>[this._renderer.listen(this._elementRef.nativeElement,`mouseleave`,()=>this._stopInterval())])}ngAfterViewInit(){this._eventCleanups.push(this._renderer.listen(this._previousPaginator.nativeElement,`touchstart`,()=>this._handlePaginatorPress(`before`),yn),this._renderer.listen(this._nextPaginator.nativeElement,`touchstart`,()=>this._handlePaginatorPress(`after`),yn))}ngAfterContentInit(){let t=this._dir?this._dir.change:Ay(`ltr`),e=this._sharedResizeObserver.observe(this._elementRef.nativeElement).pipe(Qy(32),av(this._destroyed)),a=this._viewportRuler.change(150).pipe(av(this._destroyed)),i=()=>{this.updatePagination(),this._alignInkBarToSelectedTab()};this._keyManager=new _i(this._items).withHorizontalOrientation(this._getLayoutDirection()).withHomeAndEnd().withWrap().skipPredicate(()=>!1),this._keyManager.updateActiveItem(Math.max(this._selectedIndex,0)),Dh(i,{injector:this._injector}),Gy(t,a,e,this._items.changes,this._itemsResized()).pipe(av(this._destroyed)).subscribe(()=>{this._ngZone.run(()=>{Promise.resolve().then(()=>{this._scrollDistance=Math.max(0,Math.min(this._getMaxScrollDistance(),this._scrollDistance)),i()})}),this._keyManager?.withHorizontalOrientation(this._getLayoutDirection())}),this._keyManager.change.subscribe(o=>{this.indexFocused.emit(o),this._setTabFocus(o)})}_itemsResized(){return typeof ResizeObserver!=`function`?At:this._items.changes.pipe(iv(this._items),sv(t=>new x(e=>this._ngZone.runOutsideAngular(()=>{let a=new ResizeObserver(i=>e.next(i));return t.forEach(i=>a.observe(i.elementRef.nativeElement)),()=>{a.disconnect()}}))),ov(1),rr(t=>t.some(e=>e.contentRect.width>0&&e.contentRect.height>0)))}ngAfterContentChecked(){this._tabLabelCount!=this._items.length&&(this.updatePagination(),this._tabLabelCount=this._items.length,this._changeDetectorRef.markForCheck()),this._selectedIndexChanged&&(this._scrollToLabel(this._selectedIndex),this._checkScrollingControls(),this._alignInkBarToSelectedTab(),this._selectedIndexChanged=!1,this._changeDetectorRef.markForCheck()),this._scrollDistanceChanged&&(this._updateTabScrollPosition(),this._scrollDistanceChanged=!1,this._changeDetectorRef.markForCheck())}ngOnDestroy(){this._eventCleanups.forEach(t=>t()),this._keyManager?.destroy(),this._destroyed.next(),this._destroyed.complete(),this._stopScrolling.complete()}_handleKeydown(t){if(!_c(t))switch(t.keyCode){case 13:case 32:if(this.focusIndex!==this.selectedIndex){let e=this._items.get(this.focusIndex);e&&!e.disabled&&(this.selectFocusedIndex.emit(this.focusIndex),this._itemSelected(t))}break;default:this._keyManager?.onKeydown(t)}}_onContentChanges(){let t=this._elementRef.nativeElement.textContent;t!==this._currentTextContent&&(this._currentTextContent=t||``,this._ngZone.run(()=>{this.updatePagination(),this._alignInkBarToSelectedTab(),this._changeDetectorRef.markForCheck()}))}updatePagination(){this._checkPaginationEnabled(),this._checkScrollingControls(),this._updateTabScrollPosition()}get focusIndex(){return this._keyManager?this._keyManager.activeItemIndex:0}set focusIndex(t){!this._isValidIndex(t)||this.focusIndex===t||!this._keyManager||this._keyManager.setActiveItem(t)}_isValidIndex(t){return this._items?!!this._items.toArray()[t]:!0}_setTabFocus(t){if(this._showPaginationControls&&this._scrollToLabel(t),this._items&&this._items.length){this._items.toArray()[t].focus();let e=this._tabListContainer.nativeElement;this._getLayoutDirection()==`ltr`?e.scrollLeft=0:e.scrollLeft=e.scrollWidth-e.offsetWidth}}_getLayoutDirection(){return this._dir&&this._dir.value===`rtl`?`rtl`:`ltr`}_updateTabScrollPosition(){if(this.disablePagination)return;let t=this.scrollDistance,e=this._getLayoutDirection()===`ltr`?-t:t;this._tabList.nativeElement.style.transform=`translateX(${Math.round(e)}px)`,(this._platform.TRIDENT||this._platform.EDGE)&&(this._tabListContainer.nativeElement.scrollLeft=0)}get scrollDistance(){return this._scrollDistance}set scrollDistance(t){this._scrollTo(t)}_scrollHeader(t){let e=this._tabListContainer.nativeElement.offsetWidth,a=(t==`before`?-1:1)*e/3;return this._scrollTo(this._scrollDistance+a)}_handlePaginatorClick(t){this._stopInterval(),this._scrollHeader(t)}_scrollToLabel(t){if(this.disablePagination)return;let e=this._items?this._items.toArray()[t]:null;if(!e)return;let a=this._tabListContainer.nativeElement.offsetWidth,{offsetLeft:i,offsetWidth:o}=e.elementRef.nativeElement,c,p;this._getLayoutDirection()==`ltr`?(c=i,p=c+o):(p=this._tabListInner.nativeElement.offsetWidth-i,c=p-o);let _=this.scrollDistance,m=this.scrollDistance+a;c<_?this.scrollDistance-=_-c:p>m&&(this.scrollDistance+=Math.min(p-m,c-_))}_checkPaginationEnabled(){if(this.disablePagination)this._showPaginationControls=!1;else{let a=this._tabListInner.nativeElement.scrollWidth-this._elementRef.nativeElement.offsetWidth>=5;a||(this.scrollDistance=0),a!==this._showPaginationControls&&(this._showPaginationControls=a,this._changeDetectorRef.markForCheck())}}_checkScrollingControls(){this.disablePagination?this._disableScrollAfter=this._disableScrollBefore=!0:(this._disableScrollBefore=this.scrollDistance==0,this._disableScrollAfter=this.scrollDistance==this._getMaxScrollDistance(),this._changeDetectorRef.markForCheck())}_getMaxScrollDistance(){return this._tabListInner.nativeElement.scrollWidth-this._tabListContainer.nativeElement.offsetWidth||0}_alignInkBarToSelectedTab(){let t=this._items&&this._items.length?this._items.toArray()[this.selectedIndex]:null,e=t?t.elementRef.nativeElement:null;e?this._inkBar.alignToElement(e):this._inkBar.hide()}_stopInterval(){this._stopScrolling.next()}_handlePaginatorPress(t,e){e&&e.button!=null&&e.button!==0||(this._stopInterval(),nr(zn,On).pipe(av(Gy(this._stopScrolling,this._destroyed))).subscribe(()=>{let{maxScrollDistance:a,distance:i}=this._scrollHeader(t);(i===0||i>=a)&&this._stopInterval()}))}_scrollTo(t){if(this.disablePagination)return{maxScrollDistance:0,distance:0};let e=this._getMaxScrollDistance();return this._scrollDistance=Math.max(0,Math.min(e,t)),this._scrollDistanceChanged=!0,this._checkScrollingControls(),{maxScrollDistance:e,distance:this._scrollDistance}}static ɵfac=function(e){return new(e||n)};static ɵdir=fw({type:n,inputs:{disablePagination:[2,`disablePagination`,`disablePagination`,Nj],selectedIndex:[2,`selectedIndex`,`selectedIndex`,Sj]},outputs:{selectFocusedIndex:`selectFocusedIndex`,indexFocused:`indexFocused`}})}return n})();var Hn=(()=>{class n extends Vn{_items;_tabListContainer;_tabList;_tabListInner;_nextPaginator;_previousPaginator;_inkBar;ariaLabel;ariaLabelledby;disableRipple=!1;ngAfterContentInit(){this._inkBar=new me(this._items),super.ngAfterContentInit()}_itemSelected(t){t.preventDefault()}static ɵfac=(()=>{let t;return function(a){return(t||(t=RE(n)))(a||n)}})();static ɵcmp=(function(){let t=[`tabListContainer`],e=[`tabList`],a=[`tabListInner`],i=[`nextPaginator`],o=[`previousPaginator`];return aw({type:n,selectors:[[`mat-tab-header`]],contentQueries:function(_,m,u){if(_&1&&om(u,kn,4),_&2){let f;IC(f=DC())&&(m._items=f)}},viewQuery:function(_,m){if(_&1&&im(t,7)(e,7)(a,7)(i,5)(o,5),_&2){let u;IC(u=DC())&&(m._tabListContainer=u.first),IC(u=DC())&&(m._tabList=u.first),IC(u=DC())&&(m._tabListInner=u.first),IC(u=DC())&&(m._nextPaginator=u.first),IC(u=DC())&&(m._previousPaginator=u.first)}},hostAttrs:[1,`mat-mdc-tab-header`],hostVars:4,hostBindings:function(_,m){_&2&&pm(`mat-mdc-tab-header-pagination-controls-enabled`,m._showPaginationControls)(`mat-mdc-tab-header-rtl`,m._getLayoutDirection()==`rtl`)},inputs:{ariaLabel:[0,`aria-label`,`ariaLabel`],ariaLabelledby:[0,`aria-labelledby`,`ariaLabelledby`],disableRipple:[2,`disableRipple`,`disableRipple`,Nj]},features:[Og],ngContentSelectors:[`*`],decls:13,vars:10,consts:[[`previousPaginator`,``],[`tabListContainer`,``],[`tabList`,``],[`tabListInner`,``],[`nextPaginator`,``],[`mat-ripple`,``,1,`mat-mdc-tab-header-pagination`,`mat-mdc-tab-header-pagination-before`,3,`click`,`mousedown`,`touchend`,`matRippleDisabled`],[1,`mat-mdc-tab-header-pagination-chevron`],[1,`mat-mdc-tab-label-container`,3,`keydown`],[`role`,`tablist`,1,`mat-mdc-tab-list`,3,`cdkObserveContent`],[1,`mat-mdc-tab-labels`],[`mat-ripple`,``,1,`mat-mdc-tab-header-pagination`,`mat-mdc-tab-header-pagination-after`,3,`mousedown`,`click`,`touchend`,`matRippleDisabled`]],template:function(_,m){_&1&&(yC(),Hi(0,`div`,5,0),nm(`click`,function(){return m._handlePaginatorClick(`before`)})(`mousedown`,function(f){return m._handlePaginatorPress(`before`,f)})(`touchend`,function(){return m._stopInterval()}),Qg(2,`div`,6),Rl(),Hi(3,`div`,7,1),nm(`keydown`,function(f){return m._handleKeydown(f)}),Hi(5,`div`,8,2),nm(`cdkObserveContent`,function(){return m._onContentChanges()}),Hi(7,`div`,9,3),vC(9),Rl()()(),Hi(10,`div`,10,4),nm(`mousedown`,function(f){return m._handlePaginatorPress(`after`,f)})(`click`,function(){return m._handlePaginatorClick(`after`)})(`touchend`,function(){return m._stopInterval()}),Qg(12,`div`,6),Rl()),_&2&&(pm(`mat-mdc-tab-header-pagination-disabled`,m._disableScrollBefore),zg(`matRippleDisabled`,m._disableScrollBefore||m.disableRipple),ID(3),pm(`_mat-animation-noopable`,m._animationsDisabled),ID(2),qg(`aria-label`,m.ariaLabel||null)(`aria-labelledby`,m.ariaLabelledby||null),ID(5),pm(`mat-mdc-tab-header-pagination-disabled`,m._disableScrollAfter),zg(`matRippleDisabled`,m._disableScrollAfter||m.disableRipple))},dependencies:[W_,dy],styles:[`.mat-mdc-tab-header {
  display: flex;
  overflow: hidden;
  position: relative;
  flex-shrink: 0;
}

.mdc-tab-indicator .mdc-tab-indicator__content {
  transition-duration: var(--%NS%mat-tab-header-animation-duration, 250ms);
}

.mat-mdc-tab-header-pagination {
  -webkit-user-select: none;
  user-select: none;
  position: relative;
  display: none;
  justify-content: center;
  align-items: center;
  min-width: 32px;
  cursor: pointer;
  z-index: 2;
  -webkit-tap-highlight-color: transparent;
  touch-action: none;
  box-sizing: content-box;
  outline: 0;
}
.mat-mdc-tab-header-pagination::-moz-focus-inner {
  border: 0;
}
.mat-mdc-tab-header-pagination .mat-ripple-element {
  opacity: 0.12;
  background-color: var(--%NS%mat-tab-inactive-ripple-color, var(--%NS%mat-sys-on-surface));
}
.mat-mdc-tab-header-pagination-controls-enabled .mat-mdc-tab-header-pagination {
  display: flex;
}

.mat-mdc-tab-header-pagination-before,
.mat-mdc-tab-header-rtl .mat-mdc-tab-header-pagination-after {
  padding-left: 4px;
}
.mat-mdc-tab-header-pagination-before .mat-mdc-tab-header-pagination-chevron,
.mat-mdc-tab-header-rtl .mat-mdc-tab-header-pagination-after .mat-mdc-tab-header-pagination-chevron {
  transform: rotate(-135deg);
}

.mat-mdc-tab-header-rtl .mat-mdc-tab-header-pagination-before,
.mat-mdc-tab-header-pagination-after {
  padding-right: 4px;
}
.mat-mdc-tab-header-rtl .mat-mdc-tab-header-pagination-before .mat-mdc-tab-header-pagination-chevron,
.mat-mdc-tab-header-pagination-after .mat-mdc-tab-header-pagination-chevron {
  transform: rotate(45deg);
}

.mat-mdc-tab-header-pagination-chevron {
  border-style: solid;
  border-width: 2px 2px 0 0;
  height: 8px;
  width: 8px;
  border-color: var(--%NS%mat-tab-pagination-icon-color, var(--%NS%mat-sys-on-surface));
}

.mat-mdc-tab-header-pagination-disabled {
  box-shadow: none;
  cursor: default;
  pointer-events: none;
}
.mat-mdc-tab-header-pagination-disabled .mat-mdc-tab-header-pagination-chevron {
  opacity: 0.4;
}

.mat-mdc-tab-list {
  flex-grow: 1;
  position: relative;
  transition: transform 500ms cubic-bezier(0.35, 0, 0.25, 1);
}
._mat-animation-noopable .mat-mdc-tab-list {
  transition: none;
}

.mat-mdc-tab-label-container {
  display: flex;
  flex-grow: 1;
  overflow: hidden;
  z-index: 1;
  border-bottom-style: solid;
  border-bottom-width: var(--%NS%mat-tab-divider-height, 1px);
  border-bottom-color: var(--%NS%mat-tab-divider-color, var(--%NS%mat-sys-surface-variant));
}
.mat-mdc-tab-group-inverted-header .mat-mdc-tab-label-container {
  border-bottom: none;
  border-top-style: solid;
  border-top-width: var(--%NS%mat-tab-divider-height, 1px);
  border-top-color: var(--%NS%mat-tab-divider-color, var(--%NS%mat-sys-surface-variant));
}

.mat-mdc-tab-labels {
  display: flex;
  flex: 1 0 auto;
}
[mat-align-tabs=center] > .mat-mdc-tab-header .mat-mdc-tab-labels {
  justify-content: center;
}
[mat-align-tabs=end] > .mat-mdc-tab-header .mat-mdc-tab-labels {
  justify-content: flex-end;
}
.cdk-drop-list .mat-mdc-tab-labels, .mat-mdc-tab-labels.cdk-drop-list {
  min-height: var(--%NS%mat-tab-container-height, 48px);
}

.mat-mdc-tab::before {
  margin: 5px;
}
@media (forced-colors: active) {
  .mat-mdc-tab[aria-disabled=true] {
    color: GrayText;
  }
}
`],encapsulation:2,changeDetection:1})})()}return n})();var jn=new S(`MAT_TABS_CONFIG`);var wn=(()=>{class n extends Ci{_host=v$1(be);_ngZone=v$1(Fe);_centeringSub=K.EMPTY;_leavingSub=K.EMPTY;ngOnInit(){super.ngOnInit(),this._centeringSub=this._host._beforeCentering.pipe(iv(this._host._isCenterPosition())).subscribe(t=>{this._host._content&&t&&!this.hasAttached()&&this._ngZone.run(()=>{Promise.resolve().then(),this.attach(this._host._content)})}),this._leavingSub=this._host._afterLeavingCenter.subscribe(()=>{this._host.preserveContent||this._ngZone.run(()=>this.detach())})}ngOnDestroy(){super.ngOnDestroy(),this._centeringSub.unsubscribe(),this._leavingSub.unsubscribe()}static ɵfac=(()=>{let t;return function(a){return(t||(t=RE(n)))(a||n)}})();static ɵdir=fw({type:n,selectors:[[``,`matTabBodyHost`,``]],features:[Og]})}return n})();var be=(()=>{class n{_elementRef=v$1(Wr);_dir=v$1(am,{optional:!0});_ngZone=v$1(Fe);_injector=v$1(se);_renderer=v$1(Ic);_diAnimationsDisabled=nn();_eventCleanups;_initialized=!1;_fallbackTimer;_positionIndex;_dirChangeSubscription=K.EMPTY;_position;_previousPosition;_onCentering=new Qe;_beforeCentering=new Qe;_afterLeavingCenter=new Qe;_onCentered=new Qe(!0);_portalHost;_contentElement;_content;animationDuration=`500ms`;preserveContent=!1;set position(t){this._positionIndex=t,this._computePositionAnimationState()}constructor(){if(this._dir){let t=v$1(_j);this._dirChangeSubscription=this._dir.change.subscribe(e=>{this._computePositionAnimationState(e),t.markForCheck()})}}ngOnInit(){this._bindTransitionEvents(),this._position===`center`&&(this._setActiveClass(!0),Dh(()=>this._onCentering.emit(this._elementRef.nativeElement.clientHeight),{injector:this._injector})),this._initialized=!0}ngOnDestroy(){clearTimeout(this._fallbackTimer),this._eventCleanups?.forEach(t=>t()),this._dirChangeSubscription.unsubscribe()}_bindTransitionEvents(){this._ngZone.runOutsideAngular(()=>{let t=this._elementRef.nativeElement,e=a=>{a.target===this._contentElement?.nativeElement&&(this._elementRef.nativeElement.classList.remove(`mat-tab-body-animating`),a.type===`transitionend`&&this._transitionDone())};this._eventCleanups=[this._renderer.listen(t,`transitionstart`,a=>{a.target===this._contentElement?.nativeElement&&(this._elementRef.nativeElement.classList.add(`mat-tab-body-animating`),this._transitionStarted())}),this._renderer.listen(t,`transitionend`,e),this._renderer.listen(t,`transitioncancel`,e)]})}_transitionStarted(){clearTimeout(this._fallbackTimer);let t=this._position===`center`;this._beforeCentering.emit(t),t&&this._onCentering.emit(this._elementRef.nativeElement.clientHeight)}_transitionDone(){this._position===`center`?this._onCentered.emit():this._previousPosition===`center`&&this._afterLeavingCenter.emit()}_setActiveClass(t){this._elementRef.nativeElement.classList.toggle(`mat-mdc-tab-body-active`,t)}_getLayoutDirection(){return this._dir&&this._dir.value===`rtl`?`rtl`:`ltr`}_isCenterPosition(){return this._positionIndex===0}_computePositionAnimationState(t=this._getLayoutDirection()){this._previousPosition=this._position,this._positionIndex<0?this._position=t==`ltr`?`left`:`right`:this._positionIndex>0?this._position=t==`ltr`?`right`:`left`:this._position=`center`,this._animationsDisabled()?this._simulateTransitionEvents():this._initialized&&(this._position===`center`||this._previousPosition===`center`)&&(clearTimeout(this._fallbackTimer),this._fallbackTimer=this._ngZone.runOutsideAngular(()=>setTimeout(()=>this._simulateTransitionEvents(),100)))}_simulateTransitionEvents(){this._transitionStarted(),Dh(()=>this._transitionDone(),{injector:this._injector})}_animationsDisabled(){return this._diAnimationsDisabled||this.animationDuration===`0ms`||this.animationDuration===`0s`}static ɵfac=function(e){return new(e||n)};static ɵcmp=(function(){let t=[`content`];function e(a,i){}return aw({type:n,selectors:[[`mat-tab-body`]],viewQuery:function(i,o){if(i&1&&im(wn,5)(t,5),i&2){let c;IC(c=DC())&&(o._portalHost=c.first),IC(c=DC())&&(o._contentElement=c.first)}},hostAttrs:[1,`mat-mdc-tab-body`],hostVars:1,hostBindings:function(i,o){i&2&&qg(`inert`,o._position===`center`?null:``)},inputs:{_content:[0,`content`,`_content`],animationDuration:`animationDuration`,preserveContent:`preserveContent`,position:`position`},outputs:{_onCentering:`_onCentering`,_beforeCentering:`_beforeCentering`,_onCentered:`_onCentered`},decls:3,vars:6,consts:[[`content`,``],[`cdkScrollable`,``,1,`mat-mdc-tab-body-content`],[`matTabBodyHost`,``]],template:function(i,o){i&1&&(Hi(0,`div`,1,0),kg(2,e,0,0,`ng-template`,2),Rl()),i&2&&pm(`mat-tab-body-content-left`,o._position===`left`)(`mat-tab-body-content-right`,o._position===`right`)(`mat-tab-body-content-can-animate`,o._position===`center`||o._previousPosition===`center`)},dependencies:[wn,we],styles:[`.mat-mdc-tab-body {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  display: block;
  overflow: hidden;
  outline: 0;
  flex-basis: 100%;
}
.mat-mdc-tab-body.mat-mdc-tab-body-active {
  position: relative;
  overflow-x: hidden;
  overflow-y: auto;
  z-index: 1;
  flex-grow: 1;
}
.mat-mdc-tab-group.mat-mdc-tab-group-dynamic-height .mat-mdc-tab-body.mat-mdc-tab-body-active {
  overflow-y: hidden;
}

.mat-mdc-tab-body-content {
  height: 100%;
  overflow: auto;
  transform: none;
  visibility: hidden;
}
.mat-tab-body-animating > .mat-mdc-tab-body-content, .mat-mdc-tab-body-active > .mat-mdc-tab-body-content {
  visibility: visible;
}
.mat-tab-body-animating > .mat-mdc-tab-body-content {
  min-height: 1px;
}
.mat-mdc-tab-group-dynamic-height .mat-mdc-tab-body-content {
  overflow: hidden;
}

.mat-tab-body-content-can-animate {
  transition: transform var(--%NS%mat-tab-body-animation-duration) 1ms cubic-bezier(0.35, 0, 0.25, 1);
}
.mat-mdc-tab-body-wrapper._mat-animation-noopable .mat-tab-body-content-can-animate {
  transition: none;
}

.mat-tab-body-content-left {
  transform: translate3d(-100%, 0, 0);
}

.mat-tab-body-content-right {
  transform: translate3d(100%, 0, 0);
}
`],encapsulation:2,changeDetection:1})})()}return n})();var Tn=(()=>{class n{_elementRef=v$1(Wr);_changeDetectorRef=v$1(_j);_ngZone=v$1(Fe);_tabsSubscription=K.EMPTY;_tabLabelSubscription=K.EMPTY;_tabBodySubscription=K.EMPTY;_diAnimationsDisabled=nn();_bodyAnimationDuration;_headerAnimationDuration;_allTabs;_tabBodies;_tabBodyWrapper;_tabHeader;_tabs=new Mi;_indexToSelect=0;_lastFocusedTabIndex=null;_tabBodyWrapperHeight=0;color;get fitInkBarToContent(){return this._fitInkBarToContent}set fitInkBarToContent(t){this._fitInkBarToContent=t,this._changeDetectorRef.markForCheck()}_fitInkBarToContent=!1;stretchTabs=!0;alignTabs=null;dynamicHeight=!1;get selectedIndex(){return this._selectedIndex}set selectedIndex(t){this._indexToSelect=isNaN(t)?null:t}_selectedIndex=null;headerPosition=`above`;get animationDuration(){return this._animationDuration}set animationDuration(t){this._animationDuration=t,t&&typeof t==`object`?(this._bodyAnimationDuration=ce(t.body),this._headerAnimationDuration=ce(t.header)):this._headerAnimationDuration=this._bodyAnimationDuration=ce(t)}_animationDuration;get contentTabIndex(){return this._contentTabIndex}set contentTabIndex(t){this._contentTabIndex=isNaN(t)?null:t}_contentTabIndex=null;disablePagination=!1;disableRipple=!1;preserveContent=!1;get backgroundColor(){return this._backgroundColor}set backgroundColor(t){let e=this._elementRef.nativeElement.classList;e.remove(`mat-tabs-with-background`,`mat-background-${this.backgroundColor}`),t&&e.add(`mat-tabs-with-background`,`mat-background-${t}`),this._backgroundColor=t}_backgroundColor;ariaLabel;ariaLabelledby;selectedIndexChange=new Qe;focusChange=new Qe;animationDone=new Qe;selectedTabChange=new Qe(!0);_groupId;_isServer=!v$1(ae).isBrowser;constructor(){let t=v$1(jn,{optional:!0});this._groupId=v$1(Si).getId(`mat-tab-group-`),this.animationDuration=t&&t.animationDuration?t.animationDuration:`500ms`,this.disablePagination=t&&t.disablePagination!=null?t.disablePagination:!1,this.dynamicHeight=t&&t.dynamicHeight!=null?t.dynamicHeight:!1,t?.contentTabIndex!=null&&(this.contentTabIndex=t.contentTabIndex),this.preserveContent=!!t?.preserveContent,this.fitInkBarToContent=t&&t.fitInkBarToContent!=null?t.fitInkBarToContent:!1,this.stretchTabs=t&&t.stretchTabs!=null?t.stretchTabs:!0,this.alignTabs=t&&t.alignTabs!=null?t.alignTabs:null}ngAfterContentChecked(){let t=this._indexToSelect=this._clampTabIndex(this._indexToSelect);if(this._selectedIndex!=t){let e=this._selectedIndex==null;if(!e){this.selectedTabChange.emit(this._createChangeEvent(t));let a=this._tabBodyWrapper.nativeElement;a.style.minHeight=a.clientHeight+`px`}Promise.resolve().then(()=>{this._tabs.forEach((a,i)=>a.isActive=i===t),e||(this.selectedIndexChange.emit(t),this._tabBodyWrapper.nativeElement.style.minHeight=``)})}this._tabs.forEach((e,a)=>{e.position=a-t,this._selectedIndex!=null&&e.position==0&&!e.origin&&(e.origin=t-this._selectedIndex)}),this._selectedIndex!==t&&(this._selectedIndex=t,this._lastFocusedTabIndex=null,this._changeDetectorRef.markForCheck())}ngAfterContentInit(){this._subscribeToAllTabChanges(),this._subscribeToTabLabels(),this._tabsSubscription=this._tabs.changes.subscribe(()=>{let t=this._clampTabIndex(this._indexToSelect);if(t===this._selectedIndex){let e=this._tabs.toArray(),a;for(let i=0;i<e.length;i++)if(e[i].isActive){this._indexToSelect=this._selectedIndex=i,this._lastFocusedTabIndex=null,a=e[i];break}!a&&e[t]&&Promise.resolve().then(()=>{e[t].isActive=!0,this.selectedTabChange.emit(this._createChangeEvent(t))})}this._changeDetectorRef.markForCheck()})}ngAfterViewInit(){this._tabBodySubscription=this._tabBodies.changes.subscribe(()=>this._bodyCentered(!0))}_subscribeToAllTabChanges(){this._allTabs.changes.pipe(iv(this._allTabs)).subscribe(t=>{this._tabs.reset(t.filter(e=>e._closestTabGroup===this||!e._closestTabGroup)),this._tabs.notifyOnChanges()})}ngOnDestroy(){this._tabs.destroy(),this._tabsSubscription.unsubscribe(),this._tabLabelSubscription.unsubscribe(),this._tabBodySubscription.unsubscribe()}realignInkBar(){this._tabHeader&&this._tabHeader._alignInkBarToSelectedTab()}updatePagination(){this._tabHeader&&this._tabHeader.updatePagination()}focusTab(t){let e=this._tabHeader;e&&(e.focusIndex=t)}_focusChanged(t){this._lastFocusedTabIndex=t,this.focusChange.emit(this._createChangeEvent(t))}_createChangeEvent(t){let e=new pe;return e.index=t,this._tabs&&this._tabs.length&&(e.tab=this._tabs.toArray()[t]),e}_subscribeToTabLabels(){this._tabLabelSubscription&&this._tabLabelSubscription.unsubscribe(),this._tabLabelSubscription=Gy(...this._tabs.map(t=>t._stateChanges)).subscribe(()=>this._changeDetectorRef.markForCheck())}_clampTabIndex(t){return Math.min(this._tabs.length-1,Math.max(t||0,0))}_getTabLabelId(t,e){return t.id||`${this._groupId}-label-${e}`}_getTabContentId(t){return`${this._groupId}-content-${t}`}_setTabBodyWrapperHeight(t){if(!this.dynamicHeight||!this._tabBodyWrapperHeight){this._tabBodyWrapperHeight=t;return}let e=this._tabBodyWrapper.nativeElement;e.style.height=this._tabBodyWrapperHeight+`px`,this._tabBodyWrapper.nativeElement.offsetHeight&&(e.style.height=t+`px`)}_removeTabBodyWrapperHeight(){let t=this._tabBodyWrapper.nativeElement;this._tabBodyWrapperHeight=t.clientHeight,t.style.height=``,this._ngZone.run(()=>this.animationDone.emit())}_handleClick(t,e,a){e.focusIndex=a,t.disabled||(this.selectedIndex=a)}_getTabIndex(t){return t===(this._lastFocusedTabIndex??this.selectedIndex)?0:-1}_tabFocusChanged(t,e){t&&t!==`mouse`&&t!==`touch`&&(this._tabHeader.focusIndex=e)}_bodyCentered(t){t&&this._tabBodies?.forEach((e,a)=>e._setActiveClass(a===this._selectedIndex))}_bodyAnimationsDisabled(){return this._diAnimationsDisabled||this._bodyAnimationDuration===`0`||this._bodyAnimationDuration===`0ms`}static ɵfac=function(e){return new(e||n)};static ɵcmp=(function(){let t=[`tabBodyWrapper`],e=[`tabHeader`],a=[`*`];function i(u,f){}function o(u,f){if(u&1&&kg(0,i,0,0,`ng-template`,12),u&2){let b=gC().$implicit;zg(`cdkPortalOutlet`,b.templateLabel)}}function c(u,f){if(u&1&&QC(0),u&2){let b=gC().$implicit;wm(b.textLabel)}}function p(u,f){if(u&1){let b=fC();Hi(0,`div`,7,2),nm(`click`,function(){let v=Sd(b),N=v.$implicit,Zt=v.$index,Dn=gC(),Nn=wC(1);return xd(Dn._handleClick(N,Nn,Zt))})(`cdkFocusChange`,function(v){let N=Sd(b).$index,Zt=gC();return xd(Zt._tabFocusChanged(v,N))}),Qg(2,`span`,8)(3,`div`,9),Hi(4,`span`,10)(5,`span`,11),eC(6,o,1,1,null,12)(7,c,1,1),Rl()()()}if(u&2){let b=f.$implicit,w=f.$index,v=wC(1),N=gC();jC(b.labelClass),pm(`mdc-tab--active`,N.selectedIndex===w),zg(`id`,N._getTabLabelId(b,w))(`disabled`,b.disabled)(`fitInkBarToContent`,N.fitInkBarToContent),qg(`tabIndex`,N._getTabIndex(w))(`aria-posinset`,w+1)(`aria-setsize`,N._tabs.length)(`aria-controls`,N._getTabContentId(w))(`aria-selected`,N.selectedIndex===w)(`aria-label`,b.ariaLabel||null)(`aria-labelledby`,!b.ariaLabel&&b.ariaLabelledby?b.ariaLabelledby:null),ID(3),zg(`matRippleTrigger`,v)(`matRippleDisabled`,b.disabled||N.disableRipple),ID(3),nC(b.templateLabel?6:7)}}function _(u,f){u&1&&vC(0)}function m(u,f){if(u&1){let b=fC();Hi(0,`mat-tab-body`,13),nm(`_onCentered`,function(){Sd(b);let v=gC();return xd(v._removeTabBodyWrapperHeight())})(`_onCentering`,function(v){Sd(b);let N=gC();return xd(N._setTabBodyWrapperHeight(v))})(`_beforeCentering`,function(v){Sd(b);let N=gC();return xd(N._bodyCentered(v))}),Rl()}if(u&2){let b=f.$implicit,w=f.$index,v=gC();jC(b.bodyClass),zg(`id`,v._getTabContentId(w))(`content`,b.content)(`position`,b.position)(`animationDuration`,v._bodyAnimationDuration)(`preserveContent`,v.preserveContent),qg(`tabindex`,v.contentTabIndex!=null&&v.selectedIndex===w?v.contentTabIndex:null)(`aria-labelledby`,v._getTabLabelId(b,w))(`aria-hidden`,v.selectedIndex!==w)}}return aw({type:n,selectors:[[`mat-tab-group`]],contentQueries:function(f,b,w){if(f&1&&om(w,he,5),f&2){let v;IC(v=DC())&&(b._allTabs=v)}},viewQuery:function(f,b){if(f&1&&im(t,5)(e,5)(be,5),f&2){let w;IC(w=DC())&&(b._tabBodyWrapper=w.first),IC(w=DC())&&(b._tabHeader=w.first),IC(w=DC())&&(b._tabBodies=w)}},hostAttrs:[1,`mat-mdc-tab-group`],hostVars:13,hostBindings:function(f,b){f&2&&(qg(`mat-align-tabs`,b.alignTabs),jC(`mat-`+(b.color||`primary`)),fm(`--%NS%mat-tab-body-animation-duration`,b._bodyAnimationDuration)(`--%NS%mat-tab-header-animation-duration`,b._headerAnimationDuration),pm(`mat-mdc-tab-group-dynamic-height`,b.dynamicHeight)(`mat-mdc-tab-group-inverted-header`,b.headerPosition===`below`)(`mat-mdc-tab-group-stretch-tabs`,b.stretchTabs))},inputs:{color:`color`,fitInkBarToContent:[2,`fitInkBarToContent`,`fitInkBarToContent`,Nj],stretchTabs:[2,`mat-stretch-tabs`,`stretchTabs`,Nj],alignTabs:[0,`mat-align-tabs`,`alignTabs`],dynamicHeight:[2,`dynamicHeight`,`dynamicHeight`,Nj],selectedIndex:[2,`selectedIndex`,`selectedIndex`,Sj],headerPosition:`headerPosition`,animationDuration:`animationDuration`,contentTabIndex:[2,`contentTabIndex`,`contentTabIndex`,Sj],disablePagination:[2,`disablePagination`,`disablePagination`,Nj],disableRipple:[2,`disableRipple`,`disableRipple`,Nj],preserveContent:[2,`preserveContent`,`preserveContent`,Nj],backgroundColor:`backgroundColor`,ariaLabel:[0,`aria-label`,`ariaLabel`],ariaLabelledby:[0,`aria-labelledby`,`ariaLabelledby`]},outputs:{selectedIndexChange:`selectedIndexChange`,focusChange:`focusChange`,animationDone:`animationDone`,selectedTabChange:`selectedTabChange`},exportAs:[`matTabGroup`],features:[tb([{provide:Cn,useExisting:n}])],ngContentSelectors:a,decls:9,vars:8,consts:[[`tabHeader`,``],[`tabBodyWrapper`,``],[`tabNode`,``],[3,`indexFocused`,`selectFocusedIndex`,`selectedIndex`,`disableRipple`,`disablePagination`,`aria-label`,`aria-labelledby`],[`role`,`tab`,`matTabLabelWrapper`,``,`cdkMonitorElementFocus`,``,1,`mdc-tab`,`mat-mdc-tab`,`mat-focus-indicator`,3,`id`,`mdc-tab--active`,`class`,`disabled`,`fitInkBarToContent`],[1,`mat-mdc-tab-body-wrapper`],[`role`,`tabpanel`,3,`id`,`class`,`content`,`position`,`animationDuration`,`preserveContent`],[`role`,`tab`,`matTabLabelWrapper`,``,`cdkMonitorElementFocus`,``,1,`mdc-tab`,`mat-mdc-tab`,`mat-focus-indicator`,3,`click`,`cdkFocusChange`,`id`,`disabled`,`fitInkBarToContent`],[1,`mdc-tab__ripple`],[`mat-ripple`,``,1,`mat-mdc-tab-ripple`,3,`matRippleTrigger`,`matRippleDisabled`],[1,`mdc-tab__content`],[1,`mdc-tab__text-label`],[3,`cdkPortalOutlet`],[`role`,`tabpanel`,3,`_onCentered`,`_onCentering`,`_beforeCentering`,`id`,`content`,`position`,`animationDuration`,`preserveContent`]],template:function(f,b){f&1&&(yC(),Hi(0,`mat-tab-header`,3,0),nm(`indexFocused`,function(v){return b._focusChanged(v)})(`selectFocusedIndex`,function(v){return b.selectedIndex=v}),oC(2,p,8,17,`div`,4,rC),Rl(),eC(4,_,1,0),Hi(5,`div`,5,1),oC(7,m,1,10,`mat-tab-body`,6,rC),Rl()),f&2&&(zg(`selectedIndex`,b.selectedIndex||0)(`disableRipple`,b.disableRipple)(`disablePagination`,b.disablePagination),Gg(`aria-label`,b.ariaLabel)(`aria-labelledby`,b.ariaLabelledby),ID(2),iC(b._tabs),ID(2),nC(b._isServer?4:-1),ID(),pm(`_mat-animation-noopable`,b._bodyAnimationsDisabled()),ID(2),iC(b._tabs))},dependencies:[Hn,kn,um,W_,Ci,be],styles:[`.mdc-tab {
  min-width: 90px;
  padding: 0 24px;
  display: flex;
  flex: 1 0 auto;
  justify-content: center;
  box-sizing: border-box;
  border: none;
  outline: none;
  text-align: center;
  white-space: nowrap;
  cursor: pointer;
  z-index: 1;
  touch-action: manipulation;
}

.mdc-tab__content {
  display: flex;
  align-items: center;
  justify-content: center;
  height: inherit;
  pointer-events: none;
}

.mdc-tab__text-label {
  transition: 150ms color linear;
  display: inline-block;
  line-height: 1;
  z-index: 2;
}

.mdc-tab--active .mdc-tab__text-label {
  transition-delay: 100ms;
}

._mat-animation-noopable .mdc-tab__text-label {
  transition: none;
}

.mdc-tab-indicator {
  display: flex;
  position: absolute;
  top: 0;
  left: 0;
  justify-content: center;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 1;
}

.mdc-tab-indicator__content {
  transition: var(--%NS%mat-tab-header-animation-duration, 250ms) transform cubic-bezier(0.4, 0, 0.2, 1);
  transform-origin: left;
  opacity: 0;
}

.mdc-tab-indicator__content--underline {
  align-self: flex-end;
  box-sizing: border-box;
  width: 100%;
  border-top-style: solid;
}

.mdc-tab-indicator--active .mdc-tab-indicator__content {
  opacity: 1;
}

._mat-animation-noopable .mdc-tab-indicator__content, .mdc-tab-indicator--no-transition .mdc-tab-indicator__content {
  transition: none;
}

.mat-mdc-tab-ripple.mat-mdc-tab-ripple {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  pointer-events: none;
}

.mat-mdc-tab {
  -webkit-tap-highlight-color: transparent;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-decoration: none;
  background: none;
  height: var(--%NS%mat-tab-container-height, 48px);
  font-family: var(--%NS%mat-tab-label-text-font, var(--%NS%mat-sys-title-small-font));
  font-size: var(--%NS%mat-tab-label-text-size, var(--%NS%mat-sys-title-small-size));
  letter-spacing: var(--%NS%mat-tab-label-text-tracking, var(--%NS%mat-sys-title-small-tracking));
  line-height: var(--%NS%mat-tab-label-text-line-height, var(--%NS%mat-sys-title-small-line-height));
  font-weight: var(--%NS%mat-tab-label-text-weight, var(--%NS%mat-sys-title-small-weight));
}
.mat-mdc-tab.mdc-tab {
  flex-grow: 0;
}
.mat-mdc-tab .mdc-tab-indicator__content--underline {
  border-color: var(--%NS%mat-tab-active-indicator-color, var(--%NS%mat-sys-primary));
  border-top-width: var(--%NS%mat-tab-active-indicator-height, 2px);
  border-radius: var(--%NS%mat-tab-active-indicator-shape, 0);
}
.mat-mdc-tab:hover .mdc-tab__text-label {
  color: var(--%NS%mat-tab-inactive-hover-label-text-color, var(--%NS%mat-sys-on-surface));
}
.mat-mdc-tab:focus .mdc-tab__text-label {
  color: var(--%NS%mat-tab-inactive-focus-label-text-color, var(--%NS%mat-sys-on-surface));
}
.mat-mdc-tab.mdc-tab--active .mdc-tab__text-label {
  color: var(--%NS%mat-tab-active-label-text-color, var(--%NS%mat-sys-on-surface));
}
.mat-mdc-tab.mdc-tab--active .mdc-tab__ripple::before,
.mat-mdc-tab.mdc-tab--active .mat-ripple-element {
  background-color: var(--%NS%mat-tab-active-ripple-color, var(--%NS%mat-sys-on-surface));
}
.mat-mdc-tab.mdc-tab--%NS%active:hover .mdc-tab__text-label {
  color: var(--%NS%mat-tab-active-hover-label-text-color, var(--%NS%mat-sys-on-surface));
}
.mat-mdc-tab.mdc-tab--%NS%active:hover .mdc-tab-indicator__content--underline {
  border-color: var(--%NS%mat-tab-active-hover-indicator-color, var(--%NS%mat-sys-primary));
}
.mat-mdc-tab.mdc-tab--%NS%active:focus .mdc-tab__text-label {
  color: var(--%NS%mat-tab-active-focus-label-text-color, var(--%NS%mat-sys-on-surface));
}
.mat-mdc-tab.mdc-tab--%NS%active:focus .mdc-tab-indicator__content--underline {
  border-color: var(--%NS%mat-tab-active-focus-indicator-color, var(--%NS%mat-sys-primary));
}
.mat-mdc-tab.mat-mdc-tab-disabled {
  opacity: 0.4;
  pointer-events: none;
}
.mat-mdc-tab.mat-mdc-tab-disabled .mdc-tab__content {
  pointer-events: none;
}
.mat-mdc-tab.mat-mdc-tab-disabled .mdc-tab__ripple::before,
.mat-mdc-tab.mat-mdc-tab-disabled .mat-ripple-element {
  background-color: var(--%NS%mat-tab-disabled-ripple-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-tab .mdc-tab__ripple::before {
  content: "";
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  opacity: 0;
  pointer-events: none;
  background-color: var(--%NS%mat-tab-inactive-ripple-color, var(--%NS%mat-sys-on-surface));
}
.mat-mdc-tab .mdc-tab__text-label {
  color: var(--%NS%mat-tab-inactive-label-text-color, var(--%NS%mat-sys-on-surface));
  display: inline-flex;
  align-items: center;
}
.mat-mdc-tab .mdc-tab__content {
  position: relative;
  pointer-events: auto;
}
.mat-mdc-tab:hover .mdc-tab__ripple::before {
  opacity: 0.04;
}
.mat-mdc-tab.cdk-program-focused .mdc-tab__ripple::before, .mat-mdc-tab.cdk-keyboard-focused .mdc-tab__ripple::before {
  opacity: 0.12;
}
.mat-mdc-tab .mat-ripple-element {
  opacity: 0.12;
  background-color: var(--%NS%mat-tab-inactive-ripple-color, var(--%NS%mat-sys-on-surface));
}
.mat-mdc-tab-group.mat-mdc-tab-group-stretch-tabs > .mat-mdc-tab-header .mat-mdc-tab {
  flex-grow: 1;
}

.mat-mdc-tab-group {
  display: flex;
  flex-direction: column;
  max-width: 100%;
}
.mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header, .mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header-pagination {
  background-color: var(--%NS%mat-tab-background-color);
}
.mat-mdc-tab-group.mat-tabs-with-background.mat-primary > .mat-mdc-tab-header .mat-mdc-tab .mdc-tab__text-label {
  color: var(--%NS%mat-tab-foreground-color);
}
.mat-mdc-tab-group.mat-tabs-with-background.mat-primary > .mat-mdc-tab-header .mdc-tab-indicator__content--underline {
  border-color: var(--%NS%mat-tab-foreground-color);
}
.mat-mdc-tab-group.mat-tabs-with-background:not(.mat-primary) > .mat-mdc-tab-header .mat-mdc-tab:not(.mdc-tab--active) .mdc-tab__text-label {
  color: var(--%NS%mat-tab-foreground-color);
}
.mat-mdc-tab-group.mat-tabs-with-background:not(.mat-primary) > .mat-mdc-tab-header .mat-mdc-tab:not(.mdc-tab--active) .mdc-tab-indicator__content--underline {
  border-color: var(--%NS%mat-tab-foreground-color);
}
.mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header .mat-mdc-tab-header-pagination-chevron,
.mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header .mat-focus-indicator::before, .mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header-pagination .mat-mdc-tab-header-pagination-chevron,
.mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header-pagination .mat-focus-indicator::before {
  border-color: var(--%NS%mat-tab-foreground-color);
}
.mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header .mat-ripple-element, .mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header .mdc-tab__ripple::before, .mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header-pagination .mat-ripple-element, .mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header-pagination .mdc-tab__ripple::before {
  background-color: var(--%NS%mat-tab-foreground-color);
}
.mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header .mat-mdc-tab-header-pagination-chevron, .mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header-pagination .mat-mdc-tab-header-pagination-chevron {
  color: var(--%NS%mat-tab-foreground-color);
}
.mat-mdc-tab-group.mat-mdc-tab-group-inverted-header {
  flex-direction: column-reverse;
}
.mat-mdc-tab-group.mat-mdc-tab-group-inverted-header .mdc-tab-indicator__content--underline {
  align-self: flex-start;
}

.mat-mdc-tab-body-wrapper {
  position: relative;
  overflow: hidden;
  display: flex;
  transition: height 500ms cubic-bezier(0.35, 0, 0.25, 1);
}
.mat-mdc-tab-body-wrapper._mat-animation-noopable {
  transition: none !important;
  animation: none !important;
}
`],encapsulation:2,changeDetection:1})})()}return n})();var pe=class{index;tab};var Sn=(()=>{class n{static ɵfac=function(e){return new(e||n)};static ɵmod=lw({type:n});static ɵinj=nd({imports:[lv]})}return n})();var Gn=new S(`MAT_DRAWER_DEFAULT_AUTOSIZE`,{providedIn:`root`,factory:()=>!1});var fe=new S(`MAT_DRAWER_CONTAINER`);var It=(()=>{class n extends we{_platform=v$1(ae);_changeDetectorRef=v$1(_j);_element=v$1(Wr);_ngZone=v$1(Fe);_isInert=!1;_container=v$1(_e);ngAfterContentInit(){this._container._contentMarginChanges.subscribe(()=>this._changeDetectorRef.markForCheck())}_drawerToggled(t){t.opened?this._ngZone.runOutsideAngular(()=>{t._animationEnd.pipe(Yy(50),gn(1)).subscribe(()=>this._updateInert())}):this._updateInert()}_drawerModeChanged(){this._updateInert()}_updateInert(){let t=this._container._isShowingBackdrop();if(t!==this._isInert){let e=this._element.nativeElement;this._isInert=t,t?e.setAttribute(`inert`,`true`):e.removeAttribute(`inert`)}}_shouldBeHidden(){if(this._platform.isBrowser)return!1;let{start:t,end:e}=this._container;return t!=null&&t.mode!==`over`&&t.opened||e!=null&&e.mode!==`over`&&e.opened}static ɵfac=(()=>{let t;return function(a){return(t||(t=RE(n)))(a||n)}})();static ɵcmp=(function(){return aw({type:n,selectors:[[`mat-drawer-content`]],hostAttrs:[1,`mat-drawer-content`],hostVars:6,hostBindings:function(a,i){a&2&&(fm(`margin-left`,i._container._contentMargins.left,`px`)(`margin-right`,i._container._contentMargins.right,`px`),pm(`mat-drawer-content-hidden`,i._shouldBeHidden()))},features:[tb([{provide:we,useExisting:n}]),Og],ngContentSelectors:[`*`],decls:1,vars:0,template:function(a,i){a&1&&(yC(),vC(0))},encapsulation:2})})()}return n})();var ge=(()=>{class n{_elementRef=v$1(Wr);_focusTrapFactory=v$1(Am);_focusMonitor=v$1(Xr);_platform=v$1(ae);_ngZone=v$1(Fe);_renderer=v$1(Ic);_interactivityChecker=v$1(gc);_doc=v$1(mt);_isAnimating=!1;_container=v$1(fe,{optional:!0});_focusTrap=null;_elementFocusedBeforeDrawerWasOpened=null;_eventCleanups;_isAttached=!1;_anchor=null;get position(){return this._position}set position(t){t=t===`end`?`end`:`start`,t!==this._position&&(this._isAttached&&this._updatePositionInParent(t),this._position=t,this.onPositionChanged.emit())}_position=`start`;get mode(){return this._mode}set mode(t){this._mode=t,this._updateFocusTrapState(),this._modeChanged.next(),this._getContent()?._drawerModeChanged()}_mode=`over`;get disableClose(){return this._disableClose}set disableClose(t){this._disableClose=O_(t)}_disableClose=!1;get autoFocus(){return this._autoFocus??(this.mode===`side`?`dialog`:`first-tabbable`)}set autoFocus(t){(t===`true`||t===`false`||t==null)&&(t=O_(t)),this._autoFocus=t}_autoFocus;get opened(){return this._opened()}set opened(t){this.toggle(O_(t))}_opened=Et(!1);_openedVia=null;_animationStarted=new ee;_animationEnd=new ee;openedChange=new Qe(!0);_openedStream=this.openedChange.pipe(rr(t=>t),Ue$1(()=>{}));openedStart=this._animationStarted.pipe(rr(()=>this.opened),bs(void 0));_closedStream=this.openedChange.pipe(rr(t=>!t),Ue$1(()=>{}));closedStart=this._animationStarted.pipe(rr(()=>!this.opened),bs(void 0));_destroyed=new ee;onPositionChanged=new Qe;_content;_modeChanged=new ee;_injector=v$1(se);_changeDetectorRef=v$1(_j);constructor(){this.openedChange.pipe(av(this._destroyed)).subscribe(t=>{t?(this._elementFocusedBeforeDrawerWasOpened=this._doc.activeElement,this._takeFocus()):this._isFocusWithinDrawer()&&this._restoreFocus(this._openedVia||`program`)}),this._eventCleanups=this._ngZone.runOutsideAngular(()=>{let t=this._renderer,e=this._elementRef.nativeElement;return[t.listen(e,`keydown`,a=>{a.keyCode===27&&!this.disableClose&&!_c(a)&&this._ngZone.run(()=>{this.close(),a.stopPropagation(),a.preventDefault()})}),t.listen(e,`transitionend`,this._handleTransitionEvent),t.listen(e,`transitioncancel`,this._handleTransitionEvent)]}),this._animationEnd.subscribe(()=>{this.openedChange.emit(this.opened)})}_focusByCssSelector(t,e){let a=this._elementRef.nativeElement.querySelector(t);a&&(this._interactivityChecker.isFocusable(a)||(a.tabIndex=-1,this._ngZone.runOutsideAngular(()=>{let i=()=>{o(),c(),a.removeAttribute(`tabindex`)},o=this._renderer.listen(a,`blur`,i),c=this._renderer.listen(a,`mousedown`,i)})),a.focus(e))}_takeFocus(){if(!this._focusTrap)return;let t=this._elementRef.nativeElement;switch(this.autoFocus){case!1:case`dialog`:return;case!0:case`first-tabbable`:Dh(()=>{let e=this._isAnimating?{preventScroll:!0}:void 0;!this._focusTrap.focusInitialElement(e)&&typeof t.focus==`function`&&t.focus(e)},{injector:this._injector});break;case`first-heading`:this._focusByCssSelector(`h1, h2, h3, h4, h5, h6, [role="heading"]`);break;default:this._focusByCssSelector(this.autoFocus)}}_restoreFocus(t){this.autoFocus!==`dialog`&&(this._elementFocusedBeforeDrawerWasOpened?this._focusMonitor.focusVia(this._elementFocusedBeforeDrawerWasOpened,t):this._elementRef.nativeElement.blur(),this._elementFocusedBeforeDrawerWasOpened=null)}_isFocusWithinDrawer(){let t=this._doc.activeElement;return!!t&&this._elementRef.nativeElement.contains(t)}ngAfterViewInit(){this._isAttached=!0,this._position===`end`&&this._updatePositionInParent(`end`),this._platform.isBrowser&&(this._focusTrap=this._focusTrapFactory.create(this._elementRef.nativeElement),this._updateFocusTrapState())}ngOnDestroy(){this._eventCleanups.forEach(t=>t()),this._focusTrap?.destroy(),this._anchor?.remove(),this._anchor=null,this._animationStarted.complete(),this._animationEnd.complete(),this._modeChanged.complete(),this._destroyed.next(),this._destroyed.complete()}open(t){return this.toggle(!0,t)}close(){return this.toggle(!1)}_closeViaBackdropClick(){return this._setOpen(!1,!0,`mouse`)}toggle(t=!this.opened,e){t&&e&&(this._openedVia=e);let a=this._setOpen(t,!t&&this._isFocusWithinDrawer(),this._openedVia||`program`);return t||(this._openedVia=null),a}_setOpen(t,e,a){return t===this.opened?Promise.resolve(t?`open`:`close`):(this._opened.set(t),this._getContent()?._drawerToggled(this),this._container?._transitionsEnabled?this._isAnimating?(this._setIsAnimating(!1),this._simulateAnimation()):(this._setIsAnimating(!0),setTimeout(()=>this._animationStarted.next())):this._simulateAnimation(),this._elementRef.nativeElement.classList.toggle(`mat-drawer-opened`,t),!t&&e&&this._restoreFocus(a),this._changeDetectorRef.markForCheck(),this._updateFocusTrapState(),new Promise(i=>{this.openedChange.pipe(gn(1)).subscribe(o=>i(o?`open`:`close`))}))}_getContent(){return this._container?._content||this._container?._userContent}_setIsAnimating(t){t!==this._isAnimating&&(this._isAnimating=t,this._elementRef.nativeElement.classList.toggle(`mat-drawer-animating`,t))}_simulateAnimation(){setTimeout(()=>{this._animationStarted.next(),this._animationEnd.next()})}_getWidth(){return this._elementRef.nativeElement.offsetWidth||0}_updateFocusTrapState(){this._focusTrap&&(this._focusTrap.enabled=this.opened&&!!this._container?._isShowingBackdrop())}_updatePositionInParent(t){if(!this._platform.isBrowser)return;let e=this._elementRef.nativeElement,a=e.parentNode;t===`end`?(this._anchor||(this._anchor=this._doc.createComment(`mat-drawer-anchor`),a.insertBefore(this._anchor,e)),a.appendChild(e)):this._anchor&&this._anchor.parentNode.insertBefore(e,this._anchor)}_handleTransitionEvent=t=>{let e=this._elementRef.nativeElement;t.target===e&&this._ngZone.run(()=>{t.type===`transitionend`&&this._setIsAnimating(!1),this._animationEnd.next(t)})};static ɵfac=function(e){return new(e||n)};static ɵcmp=(function(){let t=[`content`];return aw({type:n,selectors:[[`mat-drawer`]],viewQuery:function(i,o){if(i&1&&im(t,5),i&2){let c;IC(c=DC())&&(o._content=c.first)}},hostAttrs:[1,`mat-drawer`],hostVars:12,hostBindings:function(i,o){i&2&&(qg(`align`,null)(`tabIndex`,o.mode!==`side`?`-1`:null),fm(`visibility`,!o._container&&!o.opened?`hidden`:null),pm(`mat-drawer-end`,o.position===`end`)(`mat-drawer-over`,o.mode===`over`)(`mat-drawer-push`,o.mode===`push`)(`mat-drawer-side`,o.mode===`side`))},inputs:{position:`position`,mode:`mode`,disableClose:`disableClose`,autoFocus:`autoFocus`,opened:`opened`},outputs:{openedChange:`openedChange`,_openedStream:`opened`,openedStart:`openedStart`,_closedStream:`closed`,closedStart:`closedStart`,onPositionChanged:`positionChanged`},exportAs:[`matDrawer`],ngContentSelectors:[`*`],decls:3,vars:0,consts:[[`content`,``],[`cdkScrollable`,``,1,`mat-drawer-inner-container`]],template:function(i,o){i&1&&(yC(),Hi(0,`div`,1,0),vC(2),Rl())},dependencies:[we],encapsulation:2})})()}return n})();var _e=(()=>{class n{_dir=v$1(am,{optional:!0});_element=v$1(Wr);_ngZone=v$1(Fe);_changeDetectorRef=v$1(_j);_animationDisabled=nn();_transitionsEnabled=!1;_allDrawers;_drawers=new Mi;_content;_userContent;get start(){return this._start}get end(){return this._end}get autosize(){return this._autosize}set autosize(t){this._autosize=O_(t)}_autosize=v$1(Gn);get hasBackdrop(){return this._drawerHasBackdrop(this._start)||this._drawerHasBackdrop(this._end)}set hasBackdrop(t){this._backdropOverride=t==null?null:O_(t)}_backdropOverride=null;backdropClick=new Qe;_start=null;_end=null;_left=null;_right=null;_destroyed=new ee;_doCheckSubject=new ee;_contentMargins={left:null,right:null};_contentMarginChanges=new ee;get scrollable(){return this._userContent||this._content}_injector=v$1(se);constructor(){let t=v$1(ae),e=v$1(z);this._dir?.change.pipe(av(this._destroyed)).subscribe(()=>{this._validateDrawers(),this.updateContentMargins()}),e.change().pipe(av(this._destroyed)).subscribe(()=>this.updateContentMargins()),!this._animationDisabled&&t.isBrowser&&this._ngZone.runOutsideAngular(()=>{setTimeout(()=>{this._element.nativeElement.classList.add(`mat-drawer-transition`),this._transitionsEnabled=!0},200)})}ngAfterContentInit(){this._allDrawers.changes.pipe(iv(this._allDrawers),av(this._destroyed)).subscribe(t=>{this._drawers.reset(t.filter(e=>!e._container||e._container===this)),this._drawers.notifyOnChanges()}),this._drawers.changes.pipe(iv(null)).subscribe(()=>{this._validateDrawers(),this._drawers.forEach(t=>{this._watchDrawerToggle(t),this._watchDrawerPosition(t),this._watchDrawerMode(t)}),(!this._drawers.length||this._isDrawerOpen(this._start)||this._isDrawerOpen(this._end))&&this.updateContentMargins(),this._changeDetectorRef.markForCheck()}),this._ngZone.runOutsideAngular(()=>{this._doCheckSubject.pipe(Qy(10),av(this._destroyed)).subscribe(()=>this.updateContentMargins())})}ngOnDestroy(){this._contentMarginChanges.complete(),this._doCheckSubject.complete(),this._drawers.destroy(),this._destroyed.next(),this._destroyed.complete()}open(){this._drawers.forEach(t=>t.open())}close(){this._drawers.forEach(t=>t.close())}updateContentMargins(){let t=0,e=0;if(this._left&&this._left.opened){if(this._left.mode==`side`)t+=this._left._getWidth();else if(this._left.mode==`push`){let a=this._left._getWidth();t+=a,e-=a}}if(this._right&&this._right.opened){if(this._right.mode==`side`)e+=this._right._getWidth();else if(this._right.mode==`push`){let a=this._right._getWidth();e+=a,t-=a}}t=t||null,e=e||null,(t!==this._contentMargins.left||e!==this._contentMargins.right)&&(this._contentMargins={left:t,right:e},this._ngZone.run(()=>this._contentMarginChanges.next(this._contentMargins)))}ngDoCheck(){this._autosize&&this._isPushed()&&this._ngZone.runOutsideAngular(()=>this._doCheckSubject.next())}_watchDrawerToggle(t){t._animationStarted.pipe(av(this._drawers.changes)).subscribe(()=>{this.updateContentMargins(),this._changeDetectorRef.markForCheck()}),t.mode!==`side`&&t.openedChange.pipe(av(this._drawers.changes)).subscribe(()=>this._setContainerClass(t.opened))}_watchDrawerPosition(t){t.onPositionChanged.pipe(av(this._drawers.changes)).subscribe(()=>{Dh({read:()=>this._validateDrawers()},{injector:this._injector})})}_watchDrawerMode(t){t._modeChanged.pipe(av(Gy(this._drawers.changes,this._destroyed))).subscribe(()=>{this.updateContentMargins(),this._changeDetectorRef.markForCheck()})}_setContainerClass(t){let e=this._element.nativeElement.classList,a=`mat-drawer-container-has-open`;t?e.add(a):e.remove(a)}_validateDrawers(){this._start=this._end=null,this._drawers.forEach(t=>{t.position==`end`?(this._end,this._end=t):(this._start,this._start=t)}),this._right=this._left=null,this._dir&&this._dir.value===`rtl`?(this._left=this._end,this._right=this._start):(this._left=this._start,this._right=this._end)}_isPushed(){return this._isDrawerOpen(this._start)&&this._start.mode!=`over`||this._isDrawerOpen(this._end)&&this._end.mode!=`over`}_onBackdropClicked(){this.backdropClick.emit(),this._closeModalDrawersViaBackdrop()}_closeModalDrawersViaBackdrop(){[this._start,this._end].filter(t=>t&&!t.disableClose&&this._drawerHasBackdrop(t)).forEach(t=>t._closeViaBackdropClick())}_isShowingBackdrop(){return this._isDrawerOpen(this._start)&&this._drawerHasBackdrop(this._start)||this._isDrawerOpen(this._end)&&this._drawerHasBackdrop(this._end)}_isDrawerOpen(t){return t!=null&&t.opened}_drawerHasBackdrop(t){return this._backdropOverride==null?!!t&&t.mode!==`side`:this._backdropOverride}static ɵfac=function(e){return new(e||n)};static ɵcmp=(function(){let t=[[[`mat-drawer`],[`mat-sidenav`]],[[`mat-drawer-content`],[`mat-sidenav-content`]],`*`],e=[`mat-drawer, mat-sidenav`,`mat-drawer-content, mat-sidenav-content`,`*`];function a(o,c){if(o&1){let p=fC();Hi(0,`div`,1),nm(`click`,function(){Sd(p);let m=gC();return xd(m._onBackdropClicked())}),Rl()}if(o&2){let p=gC();pm(`mat-drawer-shown`,p._isShowingBackdrop())}}function i(o,c){o&1&&(Hi(0,`mat-drawer-content`),vC(1,2),Rl())}return aw({type:n,selectors:[[`mat-drawer-container`]],contentQueries:function(c,p,_){if(c&1&&om(_,It,5)(_,ge,5),c&2){let m;IC(m=DC())&&(p._content=m.first),IC(m=DC())&&(p._allDrawers=m)}},viewQuery:function(c,p){if(c&1&&im(It,5),c&2){let _;IC(_=DC())&&(p._userContent=_.first)}},hostAttrs:[1,`mat-drawer-container`],hostVars:2,hostBindings:function(c,p){c&2&&pm(`mat-drawer-container-explicit-backdrop`,p._backdropOverride)},inputs:{autosize:`autosize`,hasBackdrop:`hasBackdrop`},outputs:{backdropClick:`backdropClick`},exportAs:[`matDrawerContainer`],features:[tb([{provide:fe,useExisting:n}])],ngContentSelectors:e,decls:4,vars:2,consts:[[1,`mat-drawer-backdrop`,3,`mat-drawer-shown`],[1,`mat-drawer-backdrop`,3,`click`]],template:function(c,p){c&1&&(yC(t),eC(0,a,1,2,`div`,0),vC(1),vC(2,1),eC(3,i,2,0,`mat-drawer-content`)),c&2&&(nC(p.hasBackdrop?0:-1),ID(3),nC(p._content?-1:3))},dependencies:[It],styles:[`.mat-drawer-container {
  position: relative;
  z-index: 1;
  color: var(--%NS%mat-sidenav-content-text-color, var(--%NS%mat-sys-on-background));
  background-color: var(--%NS%mat-sidenav-content-background-color, var(--%NS%mat-sys-background));
  box-sizing: border-box;
  display: block;
  overflow: hidden;
}
.mat-drawer-container[fullscreen] {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
}
.mat-drawer-container[fullscreen].mat-drawer-container-has-open {
  overflow: hidden;
}
.mat-drawer-container.mat-drawer-container-explicit-backdrop .mat-drawer-side {
  z-index: 3;
}
.mat-drawer-container.ng-animate-disabled .mat-drawer-backdrop,
.mat-drawer-container.ng-animate-disabled .mat-drawer-content, .ng-animate-disabled .mat-drawer-container .mat-drawer-backdrop,
.ng-animate-disabled .mat-drawer-container .mat-drawer-content {
  transition: none;
}

.mat-drawer-backdrop {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  display: block;
  z-index: 3;
  visibility: hidden;
}
.mat-drawer-backdrop.mat-drawer-shown {
  visibility: visible;
  background-color: var(--%NS%mat-sidenav-scrim-color, color-mix(in srgb, var(--%NS%mat-sys-neutral-variant20) 40%, transparent));
}
.mat-drawer-transition .mat-drawer-backdrop {
  transition-duration: 400ms;
  transition-timing-function: cubic-bezier(0.25, 0.8, 0.25, 1);
  transition-property: background-color, visibility;
}
@media (forced-colors: active) {
  .mat-drawer-backdrop {
    opacity: 0.5;
  }
}

.mat-drawer-content {
  position: relative;
  z-index: 1;
  display: block;
  height: 100%;
  overflow: auto;
}
.mat-drawer-content.mat-drawer-content-hidden {
  opacity: 0;
}
.mat-drawer-transition .mat-drawer-content {
  transition-duration: 400ms;
  transition-timing-function: cubic-bezier(0.25, 0.8, 0.25, 1);
  transition-property: transform, margin-left, margin-right;
}

.mat-drawer {
  position: relative;
  z-index: 4;
  color: var(--%NS%mat-sidenav-container-text-color, var(--%NS%mat-sys-on-surface-variant));
  box-shadow: var(--%NS%mat-sidenav-container-elevation-shadow, none);
  background-color: var(--%NS%mat-sidenav-container-background-color, var(--%NS%mat-sys-surface));
  border-top-right-radius: var(--%NS%mat-sidenav-container-shape, var(--%NS%mat-sys-corner-large));
  border-bottom-right-radius: var(--%NS%mat-sidenav-container-shape, var(--%NS%mat-sys-corner-large));
  width: var(--%NS%mat-sidenav-container-width, 360px);
  display: block;
  position: absolute;
  top: 0;
  bottom: 0;
  z-index: 3;
  outline: 0;
  box-sizing: border-box;
  overflow-y: auto;
  transform: translate3d(-100%, 0, 0);
}
@media (forced-colors: active) {
  .mat-drawer, [dir=rtl] .mat-drawer.mat-drawer-end {
    border-right: solid 1px currentColor;
  }
}
@media (forced-colors: active) {
  [dir=rtl] .mat-drawer, .mat-drawer.mat-drawer-end {
    border-left: solid 1px currentColor;
    border-right: none;
  }
}
.mat-drawer.mat-drawer-side {
  z-index: 2;
}
.mat-drawer.mat-drawer-end {
  right: 0;
  transform: translate3d(100%, 0, 0);
  border-top-left-radius: var(--%NS%mat-sidenav-container-shape, var(--%NS%mat-sys-corner-large));
  border-bottom-left-radius: var(--%NS%mat-sidenav-container-shape, var(--%NS%mat-sys-corner-large));
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
}
[dir=rtl] .mat-drawer {
  border-top-left-radius: var(--%NS%mat-sidenav-container-shape, var(--%NS%mat-sys-corner-large));
  border-bottom-left-radius: var(--%NS%mat-sidenav-container-shape, var(--%NS%mat-sys-corner-large));
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  transform: translate3d(100%, 0, 0);
}
[dir=rtl] .mat-drawer.mat-drawer-end {
  border-top-right-radius: var(--%NS%mat-sidenav-container-shape, var(--%NS%mat-sys-corner-large));
  border-bottom-right-radius: var(--%NS%mat-sidenav-container-shape, var(--%NS%mat-sys-corner-large));
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  left: 0;
  right: auto;
  transform: translate3d(-100%, 0, 0);
}
.mat-drawer-transition .mat-drawer {
  transition: transform 400ms cubic-bezier(0.25, 0.8, 0.25, 1);
}
.mat-drawer:not(.mat-drawer-opened):not(.mat-drawer-animating) {
  visibility: hidden;
  box-shadow: none;
}
.mat-drawer:not(.mat-drawer-opened):not(.mat-drawer-animating) .mat-drawer-inner-container {
  display: none;
}
.mat-drawer.mat-drawer-opened.mat-drawer-opened {
  transform: none;
}

.mat-drawer-side {
  box-shadow: none;
  border-right-color: var(--%NS%mat-sidenav-container-divider-color, transparent);
  border-right-width: 1px;
  border-right-style: solid;
}
.mat-drawer-side.mat-drawer-end {
  border-left-color: var(--%NS%mat-sidenav-container-divider-color, transparent);
  border-left-width: 1px;
  border-left-style: solid;
  border-right: none;
}
[dir=rtl] .mat-drawer-side {
  border-left-color: var(--%NS%mat-sidenav-container-divider-color, transparent);
  border-left-width: 1px;
  border-left-style: solid;
  border-right: none;
}
[dir=rtl] .mat-drawer-side.mat-drawer-end {
  border-right-color: var(--%NS%mat-sidenav-container-divider-color, transparent);
  border-right-width: 1px;
  border-right-style: solid;
  border-left: none;
}

.mat-drawer-inner-container {
  width: 100%;
  height: 100%;
  overflow: auto;
}

.mat-sidenav-fixed {
  position: fixed;
}
`],encapsulation:2})})()}return n})();var Wt=(()=>{class n extends It{static ɵfac=(()=>{let t;return function(a){return(t||(t=RE(n)))(a||n)}})();static ɵcmp=(function(){return aw({type:n,selectors:[[`mat-sidenav-content`]],hostAttrs:[1,`mat-drawer-content`,`mat-sidenav-content`],features:[tb([{provide:we,useExisting:n},{provide:It,useExisting:n}]),Og],ngContentSelectors:[`*`],decls:1,vars:0,template:function(a,i){a&1&&(yC(),vC(0))},encapsulation:2})})()}return n})();var ve=(()=>{class n extends ge{get fixedInViewport(){return this._fixedInViewport}set fixedInViewport(t){this._fixedInViewport=O_(t)}_fixedInViewport=!1;get fixedTopGap(){return this._fixedTopGap}set fixedTopGap(t){this._fixedTopGap=bi(t)}_fixedTopGap=0;get fixedBottomGap(){return this._fixedBottomGap}set fixedBottomGap(t){this._fixedBottomGap=bi(t)}_fixedBottomGap=0;static ɵfac=(()=>{let t;return function(a){return(t||(t=RE(n)))(a||n)}})();static ɵcmp=(function(){return aw({type:n,selectors:[[`mat-sidenav`]],hostAttrs:[1,`mat-drawer`,`mat-sidenav`],hostVars:16,hostBindings:function(a,i){a&2&&(qg(`tabIndex`,i.mode!==`side`?`-1`:null)(`align`,null),fm(`top`,i.fixedInViewport?i.fixedTopGap:null,`px`)(`bottom`,i.fixedInViewport?i.fixedBottomGap:null,`px`),pm(`mat-drawer-end`,i.position===`end`)(`mat-drawer-over`,i.mode===`over`)(`mat-drawer-push`,i.mode===`push`)(`mat-drawer-side`,i.mode===`side`)(`mat-sidenav-fixed`,i.fixedInViewport))},inputs:{fixedInViewport:`fixedInViewport`,fixedTopGap:`fixedTopGap`,fixedBottomGap:`fixedBottomGap`},exportAs:[`matSidenav`],features:[tb([{provide:ge,useExisting:n}]),Og],ngContentSelectors:[`*`],decls:3,vars:0,consts:[[`content`,``],[`cdkScrollable`,``,1,`mat-drawer-inner-container`]],template:function(a,i){a&1&&(yC(),Hi(0,`div`,1,0),vC(2),Rl())},dependencies:[we],encapsulation:2})})()}return n})();var In=(()=>{class n extends _e{_allDrawers=void 0;_content=void 0;static ɵfac=(()=>{let t;return function(a){return(t||(t=RE(n)))(a||n)}})();static ɵcmp=(function(){let t=[[[`mat-drawer`],[`mat-sidenav`]],[[`mat-drawer-content`],[`mat-sidenav-content`]],`*`],e=[`mat-drawer, mat-sidenav`,`mat-drawer-content, mat-sidenav-content`,`*`];function a(o,c){if(o&1){let p=fC();Hi(0,`div`,1),nm(`click`,function(){Sd(p);let m=gC();return xd(m._onBackdropClicked())}),Rl()}if(o&2){let p=gC();pm(`mat-drawer-shown`,p._isShowingBackdrop())}}function i(o,c){o&1&&(Hi(0,`mat-sidenav-content`),vC(1,2),Rl())}return aw({type:n,selectors:[[`mat-sidenav-container`]],contentQueries:function(c,p,_){if(c&1&&om(_,Wt,5)(_,ve,5),c&2){let m;IC(m=DC())&&(p._content=m.first),IC(m=DC())&&(p._allDrawers=m)}},hostAttrs:[1,`mat-drawer-container`,`mat-sidenav-container`],hostVars:2,hostBindings:function(c,p){c&2&&pm(`mat-drawer-container-explicit-backdrop`,p._backdropOverride)},exportAs:[`matSidenavContainer`],features:[tb([{provide:fe,useExisting:n},{provide:_e,useExisting:n}]),Og],ngContentSelectors:e,decls:4,vars:2,consts:[[1,`mat-drawer-backdrop`,3,`mat-drawer-shown`],[1,`mat-drawer-backdrop`,3,`click`]],template:function(c,p){c&1&&(yC(t),eC(0,a,1,2,`div`,0),vC(1),vC(2,1),eC(3,i,2,0,`mat-sidenav-content`)),c&2&&(nC(p.hasBackdrop?0:-1),ID(3),nC(p._content?-1:3))},dependencies:[Wt],styles:[`.mat-drawer-container {
  position: relative;
  z-index: 1;
  color: var(--%NS%mat-sidenav-content-text-color, var(--%NS%mat-sys-on-background));
  background-color: var(--%NS%mat-sidenav-content-background-color, var(--%NS%mat-sys-background));
  box-sizing: border-box;
  display: block;
  overflow: hidden;
}
.mat-drawer-container[fullscreen] {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
}
.mat-drawer-container[fullscreen].mat-drawer-container-has-open {
  overflow: hidden;
}
.mat-drawer-container.mat-drawer-container-explicit-backdrop .mat-drawer-side {
  z-index: 3;
}
.mat-drawer-container.ng-animate-disabled .mat-drawer-backdrop,
.mat-drawer-container.ng-animate-disabled .mat-drawer-content, .ng-animate-disabled .mat-drawer-container .mat-drawer-backdrop,
.ng-animate-disabled .mat-drawer-container .mat-drawer-content {
  transition: none;
}

.mat-drawer-backdrop {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  display: block;
  z-index: 3;
  visibility: hidden;
}
.mat-drawer-backdrop.mat-drawer-shown {
  visibility: visible;
  background-color: var(--%NS%mat-sidenav-scrim-color, color-mix(in srgb, var(--%NS%mat-sys-neutral-variant20) 40%, transparent));
}
.mat-drawer-transition .mat-drawer-backdrop {
  transition-duration: 400ms;
  transition-timing-function: cubic-bezier(0.25, 0.8, 0.25, 1);
  transition-property: background-color, visibility;
}
@media (forced-colors: active) {
  .mat-drawer-backdrop {
    opacity: 0.5;
  }
}

.mat-drawer-content {
  position: relative;
  z-index: 1;
  display: block;
  height: 100%;
  overflow: auto;
}
.mat-drawer-content.mat-drawer-content-hidden {
  opacity: 0;
}
.mat-drawer-transition .mat-drawer-content {
  transition-duration: 400ms;
  transition-timing-function: cubic-bezier(0.25, 0.8, 0.25, 1);
  transition-property: transform, margin-left, margin-right;
}

.mat-drawer {
  position: relative;
  z-index: 4;
  color: var(--%NS%mat-sidenav-container-text-color, var(--%NS%mat-sys-on-surface-variant));
  box-shadow: var(--%NS%mat-sidenav-container-elevation-shadow, none);
  background-color: var(--%NS%mat-sidenav-container-background-color, var(--%NS%mat-sys-surface));
  border-top-right-radius: var(--%NS%mat-sidenav-container-shape, var(--%NS%mat-sys-corner-large));
  border-bottom-right-radius: var(--%NS%mat-sidenav-container-shape, var(--%NS%mat-sys-corner-large));
  width: var(--%NS%mat-sidenav-container-width, 360px);
  display: block;
  position: absolute;
  top: 0;
  bottom: 0;
  z-index: 3;
  outline: 0;
  box-sizing: border-box;
  overflow-y: auto;
  transform: translate3d(-100%, 0, 0);
}
@media (forced-colors: active) {
  .mat-drawer, [dir=rtl] .mat-drawer.mat-drawer-end {
    border-right: solid 1px currentColor;
  }
}
@media (forced-colors: active) {
  [dir=rtl] .mat-drawer, .mat-drawer.mat-drawer-end {
    border-left: solid 1px currentColor;
    border-right: none;
  }
}
.mat-drawer.mat-drawer-side {
  z-index: 2;
}
.mat-drawer.mat-drawer-end {
  right: 0;
  transform: translate3d(100%, 0, 0);
  border-top-left-radius: var(--%NS%mat-sidenav-container-shape, var(--%NS%mat-sys-corner-large));
  border-bottom-left-radius: var(--%NS%mat-sidenav-container-shape, var(--%NS%mat-sys-corner-large));
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
}
[dir=rtl] .mat-drawer {
  border-top-left-radius: var(--%NS%mat-sidenav-container-shape, var(--%NS%mat-sys-corner-large));
  border-bottom-left-radius: var(--%NS%mat-sidenav-container-shape, var(--%NS%mat-sys-corner-large));
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  transform: translate3d(100%, 0, 0);
}
[dir=rtl] .mat-drawer.mat-drawer-end {
  border-top-right-radius: var(--%NS%mat-sidenav-container-shape, var(--%NS%mat-sys-corner-large));
  border-bottom-right-radius: var(--%NS%mat-sidenav-container-shape, var(--%NS%mat-sys-corner-large));
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  left: 0;
  right: auto;
  transform: translate3d(-100%, 0, 0);
}
.mat-drawer-transition .mat-drawer {
  transition: transform 400ms cubic-bezier(0.25, 0.8, 0.25, 1);
}
.mat-drawer:not(.mat-drawer-opened):not(.mat-drawer-animating) {
  visibility: hidden;
  box-shadow: none;
}
.mat-drawer:not(.mat-drawer-opened):not(.mat-drawer-animating) .mat-drawer-inner-container {
  display: none;
}
.mat-drawer.mat-drawer-opened.mat-drawer-opened {
  transform: none;
}

.mat-drawer-side {
  box-shadow: none;
  border-right-color: var(--%NS%mat-sidenav-container-divider-color, transparent);
  border-right-width: 1px;
  border-right-style: solid;
}
.mat-drawer-side.mat-drawer-end {
  border-left-color: var(--%NS%mat-sidenav-container-divider-color, transparent);
  border-left-width: 1px;
  border-left-style: solid;
  border-right: none;
}
[dir=rtl] .mat-drawer-side {
  border-left-color: var(--%NS%mat-sidenav-container-divider-color, transparent);
  border-left-width: 1px;
  border-left-style: solid;
  border-right: none;
}
[dir=rtl] .mat-drawer-side.mat-drawer-end {
  border-right-color: var(--%NS%mat-sidenav-container-divider-color, transparent);
  border-right-width: 1px;
  border-right-style: solid;
  border-left: none;
}

.mat-drawer-inner-container {
  width: 100%;
  height: 100%;
  overflow: auto;
}

.mat-sidenav-fixed {
  position: fixed;
}
`],encapsulation:2})})()}return n})();var $n=n=>[`/UserAccount/Profile`,n];function Un(n,l){if(n&1&&Qg(0,`img`,1),n&2){let t=gC();zg(`ngSrc`,t.libCardInfo.value()?.imageUrl)}}function qn(n,l){n&1&&(Hi(0,`mat-icon`,2),QC(1,` account_balance `),Rl())}var Qt=class n{libraryId=Ij.required();router=v$1(vt);libService=v$1(v);identityService=v$1(Lc);libCardInfo=La(()=>this.libService.libraryCardInfo_Url+this.libraryId());ownerUsername=La(()=>{let l=this.libCardInfo.value();return l?this.identityService.getUsername_Url+l.ownerId:void 0});constructor(){}openLibrary(){this.router.navigate([`/Library`,this.libraryId()])}static ɵfac=function(t){return new(t||n)};static ɵcmp=aw({type:n,selectors:[[`app-library-card`]],hostBindings:function(t,e){t&1&&nm(`click`,function(){return e.openLibrary()})},inputs:{libraryId:[1,`libraryId`]},decls:22,vars:7,consts:[[`appearance`,`outlined`],[`width`,`40`,`height`,`40`,`alt`,`library logo`,`matCardAvatar`,``,3,`ngSrc`],[`matCardAvatar`,``,2,`font-size`,`36px`,`text-align`,`center`,`/*width`,`40px`,`height`,`40px`],[2,`text-wrap`,`wrap`,3,`routerLink`],[2,`font-size`,`12px`]],template:function(t,e){t&1&&(Hi(0,`mat-card`,0)(1,`mat-card-header`),eC(2,Un,1,1,`img`,1)(3,qn,2,0,`mat-icon`,2),Hi(4,`mat-card-title`),QC(5),Rl(),Hi(6,`mat-card-subtitle`)(7,`a`,3),QC(8),Rl()()(),Hi(9,`mat-card-content`)(10,`p`,4),QC(11),Rl()(),Hi(12,`mat-card-footer`)(13,`mat-icon`),QC(14,`bookmark`),Rl(),QC(15,`105 `),Hi(16,`mat-icon`),QC(17,`shelves`),Rl(),QC(18,`7 `),Hi(19,`mat-icon`),QC(20,`docs`),Rl(),QC(21,`53 `),Rl()()),t&2&&(ID(2),nC(e.libCardInfo.value()?.imageUrl?2:3),ID(3),wm(e.libCardInfo.value()?.title),ID(2),zg(`routerLink`,ib(5,$n,e.libCardInfo.value()?.ownerId)),ID(),Vl(` `,e.ownerUsername.value()?.username,` `),ID(3),wm(e.libCardInfo.value()?.description))},dependencies:[_,j,E,A,z$1,k,yv,Gp,Ks,F],styles:[`mat-card[_ngcontent-%COMP%]{width:256px;height:256px;cursor:pointer;overflow:hidden;transition:all .1s}mat-card[_ngcontent-%COMP%]:hover{box-shadow:0 5px 10px var(--%NS%mat-sys-outline-variant)}mat-card-header[_ngcontent-%COMP%]{border-bottom:1px solid var(--%NS%mat-sys-outline-variant)}mat-card-title[_ngcontent-%COMP%]{font-size:18px}mat-card-subtitle[_ngcontent-%COMP%]{font-size:12px}mat-card-content[_ngcontent-%COMP%]{flex:1 1 auto;overflow:auto}mat-card-content[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{font-size:12px}`]})};var Zn=[`canvas`];function Kn(n,l){if(n&1&&Qg(0,`img`,4,2),n&2){let t=gC();zg(`src`,t.previewImgSrc())}}function Yn(n,l){if(n&1&&QC(0),n&2){let t=l.$implicit;Vl(` `,t.message,` `)}}function Xn(n,l){if(n&1&&(Hi(0,`mat-error`),oC(1,Yn,1,1,null,null,rC),Rl()),n&2){let t=gC();ID(),iC(t.newLibForm.title().errors())}}function Jn(n,l){if(n&1&&QC(0),n&2){let t=l.$implicit;Vl(` `,t.message,` `)}}function ta(n,l){if(n&1&&(Hi(0,`mat-error`),oC(1,Jn,1,1,null,null,rC),Rl()),n&2){let t=gC();ID(),iC(t.newLibForm.description().errors())}}var $t=class n{selectedFile=Et(null);previewImgSrc=Et(null);imageSizeError=Et(null);canvas=Dj(`canvas`);signalModel=Et({title:``,description:``});newLibForm=Ao(this.signalModel,l=>{fs(l.title,{message:`Title is required for the new library!`}),cs(l.title,60,{message:`Title cannot be more than 60 characters!`}),us(l.title,3,{message:`Title cannot be less than 3 characters!`}),Ft(l.title,({value:t})=>{let e=t(),a=e.trim();return e!==a&&a===``?{kind:`trimmed`,message:`Title cannot be only blank space!`}:null}),cs(l.description,400,{message:`Descrption cannot be more than 400 characters!`})});result=it(()=>({description:this.signalModel().description,image:this.selectedFile(),title:this.signalModel().title.trim()}));onSelectImage(l){let t=l.target;if(t.files&&t.files[0])if(t.files[0].size>122880)if(this.canvas()){let e=new FileReader;e.onload=a=>{let i=new Image;i.onload=()=>{let o=this.canvas().nativeElement.getContext(`2d`),c=800,p=Math.round(i.height/i.width*c);this.canvas().nativeElement.width=c,this.canvas().nativeElement.height=p,o&&o.drawImage(i,0,0,c,p);let _=this.canvas().nativeElement.toDataURL(`image/webp`,.8);this.previewImgSrc.set(_),this.canvas().nativeElement.toBlob(m=>{if(m){let u=new File([m],`editedImage`,{type:m.type||`application/octet-stream`,lastModified:Date.now()});this.selectedFile.set(u)}},`image/webp`,.8)},i.src=a.target.result},e.readAsDataURL(t.files[0])}else this.imageSizeError.set(`Size of the choosen image cannot be more than 120 KB!`);else{this.selectedFile.set(t.files[0]);let e=new FileReader;e.onload=a=>{this.previewImgSrc.set(a.target.result)},e.readAsDataURL(t.files[0])}else this.selectedFile.set(null),this.previewImgSrc.set(null)}static ɵfac=function(t){return new(t||n)};static ɵcmp=aw({type:n,selectors:[[`app-new-library-form`]],viewQuery:function(t,e){t&1&&am$1(e.canvas,Zn,5),t&2&&TC()},decls:24,vars:7,consts:[[`fileInput`,``],[`canvas`,``],[`previewImg`,``],[`id`,`img-box`,1,`clearfix`],[`alt`,`image`,3,`src`],[`matButton`,`elevated`,`id`,`selectButton`,3,`click`],[`type`,`file`,`hidden`,``,3,`change`],[2,`display`,`none`],[`appearance`,`fill`,`subscriptSizing`,`dynamic`],[`type`,`text`,`matInput`,``,3,`formField`],[`matInput`,``,`placeholder`,`Write here..`,`rows`,`5`,3,`formField`],[`align`,`end`,2,`float`,`inline-end`],[`matButton`,``,`mat-dialog-close`,``],[`matButton`,`filled`,3,`mat-dialog-close`,`disabled`]],template:function(t,e){if(t&1){let a=fC();Hi(0,`mat-dialog-content`)(1,`div`,3),eC(2,Kn,2,1,`img`,4),Hi(3,`button`,5),nm(`click`,function(){Sd(a);let o=wC(6);return xd(o.click())}),QC(4,`Select an image`),Rl(),Hi(5,`input`,6,0),nm(`change`,function(o){return e.onSelectImage(o)}),Rl(),Qg(7,`canvas`,7,1),Rl(),Hi(9,`mat-form-field`,8)(10,`mat-label`),QC(11,`Title`),Rl(),Hi(12,`input`,9),vT(),Rl(),eC(13,Xn,3,0,`mat-error`),Rl(),Hi(14,`mat-form-field`,8)(15,`mat-label`),QC(16,`Description`),Rl(),Hi(17,`textarea`,10),vT(),Rl(),eC(18,ta,3,0,`mat-error`),Rl(),Hi(19,`mat-dialog-actions`,11)(20,`button`,12),QC(21,`Cancel`),Rl(),Hi(22,`button`,13),QC(23,` Submit `),Rl()()()}t&2&&(ID(2),nC(e.previewImgSrc()?2:-1),ID(10),zg(`formField`,e.newLibForm.title),IT(),ID(),nC(e.newLibForm.title().touched()&&e.newLibForm.title().invalid()?13:-1),ID(4),zg(`formField`,e.newLibForm.description),IT(),ID(),nC(e.newLibForm.description().touched()&&e.newLibForm.description().invalid()?18:-1),ID(4),zg(`mat-dialog-close`,e.result())(`disabled`,e.newLibForm().invalid()))},dependencies:[Kt,Xt,$t$1,aa$1,y0,zn$1,Fl,Jo,ms],styles:[`mat-form-field[_ngcontent-%COMP%]{width:100%;margin:8px auto}mat-dialog-content[_ngcontent-%COMP%]{width:60vw;min-width:400px}@media screen and (max-width:800px){mat-dialog-content[_ngcontent-%COMP%]{width:80vw}}button#selectButton[_ngcontent-%COMP%]{margin:88px 8px 0}#img-box[_ngcontent-%COMP%]{margin:8px auto;width:fit-content}#img-box[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:150px;height:150px;object-fit:contain;float:left}`]})};function ea(n,l){if(n&1){let t=fC();Hi(0,`button`,6),nm(`click`,function(){Sd(t);let a=gC();return xd(a.openNewLibraryForm())}),Hi(1,`mat-icon`),QC(2,`add_box`),Rl(),QC(3,` Create New Library `),Rl()}}function na(n,l){if(n&1&&Qg(0,`app-library-card`,5),n&2){let t=l.$implicit;zg(`libraryId`,t)}}var Ut=class n{libIds=Ij.required();isMe=Ij(!1);reload=Ej();dialog=v$1(Ut$1);libService=v$1(v);identityService=v$1(Lc);sidenavOpen=Et(!0);displayWaitSpinner=Et(!1);constructor(){}toggleSidenavOpen(){this.sidenavOpen.update(l=>!l)}openNewLibraryForm(){this.identityService.getAntiForgeryToken.reload(),this.dialog.open($t).afterClosed().subscribe(l=>{l&&(this.displayWaitSpinner.set(!0),this.libService.submitNewLibrary(l).subscribe({next:t=>{t&&t.success&&(this.reload.emit(void 0),this.displayWaitSpinner.set(!1))},error:t=>{throw this.displayWaitSpinner.set(!1),this.dialog.open(te,{data:{description:[`Something went wrong during submitting the new library!`,`Please try later.`],title:`Submit Error`,status:`warning`}}),t}}))})}static ɵfac=function(t){return new(t||n)};static ɵcmp=aw({type:n,selectors:[[`app-library-list`]],inputs:{libIds:[1,`libIds`],isMe:[1,`isMe`]},outputs:{reload:`reload`},decls:11,vars:4,consts:[[`id`,``,`mode`,`side`,`position`,`start`,2,`position`,`absolute`,3,`opened`],[`matButton`,``],[2,`float`,`inline-start`],[`matMiniFab`,``,3,`click`,`matTooltip`],[1,`list`],[3,`libraryId`],[`matButton`,``,3,`click`]],template:function(t,e){t&1&&(Hi(0,`mat-sidenav-container`)(1,`mat-sidenav`,0),eC(2,ea,4,0,`button`,1),Rl(),Hi(3,`mat-sidenav-content`)(4,`div`,2)(5,`button`,3),nm(`click`,function(){return e.toggleSidenavOpen()}),Hi(6,`mat-icon`),QC(7),Rl()()(),Hi(8,`div`,4),oC(9,na,1,1,`app-library-card`,5,rC),Rl()()()),t&2&&(ID(),zg(`opened`,e.sidenavOpen()),ID(),nC(e.isMe()?2:-1),ID(3),zg(`matTooltip`,e.sidenavOpen()?`Close panel`:`Open panel`),ID(2),wm(e.sidenavOpen()?`left_panel_close`:`left_panel_open`),ID(2),iC(e.libIds()))},dependencies:[In,ve,Wt,Qt,yv,S0,y0,Le],styles:[`mat-sidenav-container[_ngcontent-%COMP%]{position:relative}mat-sidenav[_ngcontent-%COMP%]{width:340px;border-right:1px solid var(--%NS%mat-sys-outline-variant);border-radius:0;padding-right:10px;padding-top:10px}mat-sidenav-content[_ngcontent-%COMP%]{padding:8px}.list[_ngcontent-%COMP%]{display:flex;flex-direction:row;justify-content:space-evenly;flex-wrap:wrap;width:100%;padding:8px 0}app-library-card[_ngcontent-%COMP%]{margin:8px}`]})};var aa=()=>[];function ia(n,l){if(n&1){let t=fC();Hi(0,`app-library-list`,3),nm(`reload`,function(){Sd(t);let a=gC();return xd(a.libIdsResource.reload())}),Rl()}if(n&2){let t=gC();zg(`libIds`,t.libIdsResource.value()?.libIds??ob(2,aa))(`isMe`,t.isMe())}}var qt=class n{userId=Ij.required();identityServise=v$1(Lc);libService=v$1(v);libIdsResource=La(()=>this.libService.getLibraryIds_Url+this.userId());isMe=it(()=>this.identityServise.isAuthenticated()&&this.userId()===this.identityServise.myIdentityInfo.value()?.id);static ɵfac=function(t){return new(t||n)};static ɵcmp=aw({type:n,selectors:[[`app-mainboard`]],inputs:{userId:[1,`userId`]},decls:3,vars:0,consts:[[`dynamicHeight`,``],[`label`,`Libraries`],[`matTabContent`,``],[3,`reload`,`libIds`,`isMe`]],template:function(t,e){t&1&&(Hi(0,`mat-tab-group`,0)(1,`mat-tab`,1),kg(2,ia,1,3,`ng-template`,2),Rl()())},dependencies:[Sn,ue,he,Tn,Ut],encapsulation:2})};var ra=()=>[`/UserAccount/ProfileSetting`];function oa(n,l){if(n&1&&Qg(0,`img`,3),n&2){let t=gC();zg(`ngSrc`,t.profileInfo.value().avatarUrl)}}function sa(n,l){n&1&&(Hi(0,`mat-icon`,4),QC(1,`account_circle`),Rl())}function da(n,l){n&1&&(Hi(0,`a`,8)(1,`mat-icon`),QC(2,`person_edit`),Rl(),QC(3,` Edit Profile `),Rl()),n&2&&zg(`routerLink`,ob(1,ra))}var Mn=class n{identityService=v$1(Lc);profileService=v$1(c);activatedRoute=v$1(Ue);params=N(this.activatedRoute.paramMap);userId=it(()=>this.params()?.get(`userId`)??this.identityService.myIdentityInfo.value()?.id);isMe=it(()=>this.userId()&&this.userId()===this.identityService.myIdentityInfo.value()?.id);profileInfo=La(()=>this.identityService.isAuthenticated()?this.profileService.getProfileInfo_Url+this.userId():void 0);profileUsername=La(()=>this.identityService.isAuthenticated()?this.identityService.getUsername_Url+this.userId():void 0);constructor(){}static ɵfac=function(t){return new(t||n)};static ɵcmp=aw({type:n,selectors:[[`app-profile`]],decls:19,vars:6,consts:[[`appearance`,`outlined`],[`id`,`matCardLable`],[2,`float`,`inline-start`,`position`,`relative`],[`priority`,``,`width`,`100`,`height`,`100`,`alt`,`user image`,`id`,`user-profile-img`,3,`ngSrc`],[2,`font-size`,`100px`,`width`,`100px`,`height`,`100px`],[2,`margin`,`0`],[1,`clearfix`],[`align`,`end`],[`matButton`,``,3,`routerLink`],[3,`userId`]],template:function(t,e){t&1&&(Hi(0,`mat-card`,0)(1,`span`,1),QC(2,`User Profile`),Rl(),Hi(3,`mat-card-header`)(4,`div`,2),eC(5,oa,1,1,`img`,3)(6,sa,2,0,`mat-icon`,4),Rl(),Hi(7,`div`,2)(8,`mat-card-title`)(9,`p`,5),QC(10),Rl()(),Hi(11,`mat-card-subtitle`),QC(12),Rl()()(),Hi(13,`mat-card-content`,6)(14,`pre`),QC(15),Rl()(),Hi(16,`mat-card-actions`,7),eC(17,da,4,2,`a`,8),Rl()(),Qg(18,`app-mainboard`,9)),t&2&&(ID(5),nC(e.profileInfo.value()?.avatarUrl?5:6),ID(5),Vl(` `,e.profileInfo.value()?.name,` `),ID(2),Vl(` `,e.profileUsername.value()?.username,` `),ID(3),wm(e.profileInfo.value()?.description),ID(2),nC(e.isMe()?17:-1),ID(),zg(`userId`,e.userId()))},dependencies:[L,_,T,k,j,z$1,A,yv,y0,Gp,Ks,qt],styles:[`mat-card[_ngcontent-%COMP%]{width:50vw;min-width:370px;margin:0 auto 16px;display:block}img#user-profile-img[_ngcontent-%COMP%]{width:100px;height:100px;object-fit:cover;border-radius:50%;overflow:hidden}mat-card-title[_ngcontent-%COMP%]{margin:16px}mat-card-subtitle[_ngcontent-%COMP%]{margin:0 16px;letter-spacing:1px}#matCardLable[_ngcontent-%COMP%]{position:absolute;top:0;left:8px;background-color:var(--%NS%mat-sys-container);margin:0;padding:8px;transform:translateY(-50%)}`]})};export{Mn as Profile};