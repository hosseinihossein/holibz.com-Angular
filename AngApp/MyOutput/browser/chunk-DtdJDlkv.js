import{t as o}from"./chunk-DTya09ve.js";import{i as Ze$1,n as He,r as Je,t as Dt$1}from"./chunk-DVbk4Ypc.js";import{t as C}from"./chunk-a9FyGxLJ.js";import{c as te,i as Ut}from"./chunk-DHyoxqlZ.js";import{a as O,c as V,i as N,l as X,n as G,o as P,r as H,s as R,t as B}from"./chunk-nN9M4vGc.js";import{$ as qt,A as Yn,B as h0,G as ll,I as d0,K as ml,M as _t,N as a_,O as V$1,Q as qo,R as dn,S as LS,W as iy,X as py,Y as po,Z as q0,b as K0,d as Dc,g as Hf,k as Vn,m as Fm,n as c,nt as tr,q as nm,t as at,v as Ie,x as Kc,y as Jn}from"./main-MEHMG3EG.js";import{l as hr}from"./chunk-DzmNeOqn.js";import{A as ID,Ar as yC,Cn as jC,D as Gy,Dn as kg,Dr as x,E as Gg,H as K,In as nC,Kn as ob,M as Ic,N as Ij,Nn as lw,O as Hi,Or as xd,Pr as zg,Pt as Wr,Q as Nj,Rn as nd,Sn as iv,Sr as wC,T as Fr,Tr as wm,Vn as nr,Wn as oC,X as Mi,Xn as pm,Xt as av,Yn as ov,Zn as qg,Zt as aw,_n as iC,_r as vC,_t as S,b as Ej,bn as is,bt as Sj,c as Ay,ct as QC,dn as gC,dr as tb,dt as Qy,en as eC,er as rC,ft as RE,gr as v,h as Dh,jt as Vl,k as IC,ln as fm,lr as sv,lt as Qe$1,m as DC,mn as hE,mt as Rl,nn as ee,nt as Og,on as fC,or as se,q as Lg,qn as om,qt as _j,rr,s as At,un as fw,ut as Qg,vn as ib,vt as Sd,w as Fe,x as Et,xn as it,yn as im,zn as nm$1}from"./chunk-kniop8OV.js";var ta=new S(`MatTabContent`);var Qt=(()=>{class a{template=v(Fr);static ɵfac=function(e){return new(e||a)};static ɵdir=fw({type:a,selectors:[[``,`matTabContent`,``]],features:[tb([{provide:ta,useExisting:a}])]})}return a})();var ea=new S(`MatTabLabel`);var $e=new S(`MAT_TAB`);var aa=(()=>{class a extends q0{_closestTab=v($e,{optional:!0});static ɵfac=(()=>{let t;return function(n){return(t||(t=RE(a)))(n||a)}})();static ɵdir=fw({type:a,selectors:[[``,`mat-tab-label`,``],[``,`matTabLabel`,``]],features:[tb([{provide:ea,useExisting:a}]),Og]})}return a})();var Qe=new S(`MAT_TAB_GROUP`);var Gt=(()=>{class a{_viewContainerRef=v(is);_closestTabGroup=v(Qe,{optional:!0});disabled=!1;get templateLabel(){return this._templateLabel}set templateLabel(t){this._setTemplateLabelInput(t)}_templateLabel;_explicitContent=void 0;_implicitContent;textLabel=``;ariaLabel;ariaLabelledby;labelClass;bodyClass;id=null;_contentPortal=null;get content(){return this._contentPortal}_stateChanges=new ee;position=null;origin=null;isActive=!1;constructor(){v(_t).load(ll)}ngOnChanges(t){(Object.hasOwn(t,`textLabel`)||Object.hasOwn(t,`disabled`))&&this._stateChanges.next()}ngOnDestroy(){this._stateChanges.complete()}ngOnInit(){this._contentPortal=new tr(this._explicitContent||this._implicitContent,this._viewContainerRef)}_setTemplateLabelInput(t){t&&t._closestTab===this&&(this._templateLabel=t)}static ɵfac=function(e){return new(e||a)};static ɵcmp=(function(){let t=[`*`];function e(n,r){n&1&&vC(0)}return aw({type:a,selectors:[[`mat-tab`]],contentQueries:function(r,u,f){if(r&1&&om(f,aa,5)(f,Qt,7,Fr),r&2){let x;IC(x=DC())&&(u.templateLabel=x.first),IC(x=DC())&&(u._explicitContent=x.first)}},viewQuery:function(r,u){if(r&1&&im(Fr,7),r&2){let f;IC(f=DC())&&(u._implicitContent=f.first)}},hostAttrs:[`hidden`,``],hostVars:1,hostBindings:function(r,u){r&2&&qg(`id`,null)},inputs:{disabled:[2,`disabled`,`disabled`,Nj],textLabel:[0,`label`,`textLabel`],ariaLabel:[0,`aria-label`,`ariaLabel`],ariaLabelledby:[0,`aria-labelledby`,`ariaLabelledby`],labelClass:`labelClass`,bodyClass:`bodyClass`,id:`id`},exportAs:[`matTab`],features:[tb([{provide:$e,useExisting:a}]),hE],ngContentSelectors:t,decls:1,vars:0,template:function(r,u){r&1&&(yC(),Lg(0,e,1,0,`ng-template`))},encapsulation:2,changeDetection:1})})()}return a})();var zt=`mdc-tab-indicator--active`;var Ve=`mdc-tab-indicator--no-transition`;var jt=class{_items;_currentItem;constructor(c){this._items=c}hide(){this._items.forEach(c=>c.deactivateInkBar()),this._currentItem=void 0}alignToElement(c){let t=this._items.find(n=>n.elementRef.nativeElement===c),e=this._currentItem;if(t!==e&&(e?.deactivateInkBar(),t)){let n=e?.elementRef.nativeElement.getBoundingClientRect?.();t.activateInkBar(n),this._currentItem=t}}};var na=(()=>{class a{_elementRef=v(Wr);_inkBarElement=null;_inkBarContentElement=null;_fitToContent=!1;get fitInkBarToContent(){return this._fitToContent}set fitInkBarToContent(t){this._fitToContent!==t&&(this._fitToContent=t,this._inkBarElement&&this._appendInkBarElement())}activateInkBar(t){let e=this._elementRef.nativeElement;if(!t||!e.getBoundingClientRect||!this._inkBarContentElement){e.classList.add(zt);return}let n=e.getBoundingClientRect(),r=t.width/n.width,u=t.left-n.left;e.classList.add(Ve),this._inkBarContentElement.style.setProperty(`transform`,`translateX(${u}px) scaleX(${r})`),e.getBoundingClientRect(),e.classList.remove(Ve),e.classList.add(zt),this._inkBarContentElement.style.setProperty(`transform`,``)}deactivateInkBar(){this._elementRef.nativeElement.classList.remove(zt)}ngOnInit(){this._createInkBarElement()}ngOnDestroy(){this._inkBarElement?.remove(),this._inkBarElement=this._inkBarContentElement=null}_createInkBarElement(){let t=this._elementRef.nativeElement.ownerDocument||document,e=this._inkBarElement=t.createElement(`span`),n=this._inkBarContentElement=t.createElement(`span`);e.className=`mdc-tab-indicator`,n.className=`mdc-tab-indicator__content mdc-tab-indicator__content--underline`,e.appendChild(this._inkBarContentElement),this._appendInkBarElement()}_appendInkBarElement(){this._inkBarElement;(this._fitToContent?this._elementRef.nativeElement.querySelector(`.mdc-tab__content`):this._elementRef.nativeElement).appendChild(this._inkBarElement)}static ɵfac=function(e){return new(e||a)};static ɵdir=fw({type:a,inputs:{fitInkBarToContent:[2,`fitInkBarToContent`,`fitInkBarToContent`,Nj]}})}return a})();var Ge=(()=>{class a extends na{elementRef=v(Wr);disabled=!1;focus(){this.elementRef.nativeElement.focus()}getOffsetLeft(){return this.elementRef.nativeElement.offsetLeft}getOffsetWidth(){return this.elementRef.nativeElement.offsetWidth}static ɵfac=(()=>{let t;return function(n){return(t||(t=RE(a)))(n||a)}})();static ɵdir=fw({type:a,selectors:[[``,`matTabLabelWrapper`,``]],hostVars:3,hostBindings:function(e,n){e&2&&(qg(`aria-disabled`,!!n.disabled),pm(`mat-mdc-tab-disabled`,n.disabled))},inputs:{disabled:[2,`disabled`,`disabled`,Nj]},features:[Og]})}return a})();var je={passive:!0};var ia=650;var ra=100;function Vt(a){let c=a+``;return/^[0-9]+(?:\.[0-9]+)?$/.test(c)?`${a}ms`:/^[0-9]+(?:\.[0-9]+)?(?:ms|s)$/.test(c)?c:``}var oa=(()=>{class a{_elementRef=v(Wr);_changeDetectorRef=v(_j);_viewportRuler=v(Jn);_dir=v(Vn,{optional:!0});_ngZone=v(Fe);_platform=v(V$1);_sharedResizeObserver=v(hr);_injector=v(se);_renderer=v(Ic);_animationsDisabled=dn();_eventCleanups;_scrollDistance=0;_selectedIndexChanged=!1;_destroyed=new ee;_showPaginationControls=!1;_disableScrollAfter=!0;_disableScrollBefore=!0;_tabLabelCount;_scrollDistanceChanged=!1;_keyManager;_currentTextContent;_stopScrolling=new ee;disablePagination=!1;get selectedIndex(){return this._selectedIndex}set selectedIndex(t){let e=isNaN(t)?0:t;this._selectedIndex!=e&&(this._selectedIndexChanged=!0,this._selectedIndex=e,this._keyManager&&this._keyManager.updateActiveItem(e))}_selectedIndex=0;selectFocusedIndex=new Qe$1;indexFocused=new Qe$1;constructor(){this._eventCleanups=this._ngZone.runOutsideAngular(()=>[this._renderer.listen(this._elementRef.nativeElement,`mouseleave`,()=>this._stopInterval())])}ngAfterViewInit(){this._eventCleanups.push(this._renderer.listen(this._previousPaginator.nativeElement,`touchstart`,()=>this._handlePaginatorPress(`before`),je),this._renderer.listen(this._nextPaginator.nativeElement,`touchstart`,()=>this._handlePaginatorPress(`after`),je))}ngAfterContentInit(){let t=this._dir?this._dir.change:Ay(`ltr`),e=this._sharedResizeObserver.observe(this._elementRef.nativeElement).pipe(Qy(32),av(this._destroyed)),n=this._viewportRuler.change(150).pipe(av(this._destroyed)),r=()=>{this.updatePagination(),this._alignInkBarToSelectedTab()};this._keyManager=new qo(this._items).withHorizontalOrientation(this._getLayoutDirection()).withHomeAndEnd().withWrap().skipPredicate(()=>!1),this._keyManager.updateActiveItem(Math.max(this._selectedIndex,0)),Dh(r,{injector:this._injector}),Gy(t,n,e,this._items.changes,this._itemsResized()).pipe(av(this._destroyed)).subscribe(()=>{this._ngZone.run(()=>{Promise.resolve().then(()=>{this._scrollDistance=Math.max(0,Math.min(this._getMaxScrollDistance(),this._scrollDistance)),r()})}),this._keyManager?.withHorizontalOrientation(this._getLayoutDirection())}),this._keyManager.change.subscribe(u=>{this.indexFocused.emit(u),this._setTabFocus(u)})}_itemsResized(){return typeof ResizeObserver!=`function`?At:this._items.changes.pipe(iv(this._items),sv(t=>new x(e=>this._ngZone.runOutsideAngular(()=>{let n=new ResizeObserver(r=>e.next(r));return t.forEach(r=>n.observe(r.elementRef.nativeElement)),()=>{n.disconnect()}}))),ov(1),rr(t=>t.some(e=>e.contentRect.width>0&&e.contentRect.height>0)))}ngAfterContentChecked(){this._tabLabelCount!=this._items.length&&(this.updatePagination(),this._tabLabelCount=this._items.length,this._changeDetectorRef.markForCheck()),this._selectedIndexChanged&&(this._scrollToLabel(this._selectedIndex),this._checkScrollingControls(),this._alignInkBarToSelectedTab(),this._selectedIndexChanged=!1,this._changeDetectorRef.markForCheck()),this._scrollDistanceChanged&&(this._updateTabScrollPosition(),this._scrollDistanceChanged=!1,this._changeDetectorRef.markForCheck())}ngOnDestroy(){this._eventCleanups.forEach(t=>t()),this._keyManager?.destroy(),this._destroyed.next(),this._destroyed.complete(),this._stopScrolling.complete()}_handleKeydown(t){if(!Kc(t))switch(t.keyCode){case 13:case 32:if(this.focusIndex!==this.selectedIndex){let e=this._items.get(this.focusIndex);e&&!e.disabled&&(this.selectFocusedIndex.emit(this.focusIndex),this._itemSelected(t))}break;default:this._keyManager?.onKeydown(t)}}_onContentChanges(){let t=this._elementRef.nativeElement.textContent;t!==this._currentTextContent&&(this._currentTextContent=t||``,this._ngZone.run(()=>{this.updatePagination(),this._alignInkBarToSelectedTab(),this._changeDetectorRef.markForCheck()}))}updatePagination(){this._checkPaginationEnabled(),this._checkScrollingControls(),this._updateTabScrollPosition()}get focusIndex(){return this._keyManager?this._keyManager.activeItemIndex:0}set focusIndex(t){!this._isValidIndex(t)||this.focusIndex===t||!this._keyManager||this._keyManager.setActiveItem(t)}_isValidIndex(t){return this._items?!!this._items.toArray()[t]:!0}_setTabFocus(t){if(this._showPaginationControls&&this._scrollToLabel(t),this._items&&this._items.length){this._items.toArray()[t].focus();let e=this._tabListContainer.nativeElement;this._getLayoutDirection()==`ltr`?e.scrollLeft=0:e.scrollLeft=e.scrollWidth-e.offsetWidth}}_getLayoutDirection(){return this._dir&&this._dir.value===`rtl`?`rtl`:`ltr`}_updateTabScrollPosition(){if(this.disablePagination)return;let t=this.scrollDistance,e=this._getLayoutDirection()===`ltr`?-t:t;this._tabList.nativeElement.style.transform=`translateX(${Math.round(e)}px)`,(this._platform.TRIDENT||this._platform.EDGE)&&(this._tabListContainer.nativeElement.scrollLeft=0)}get scrollDistance(){return this._scrollDistance}set scrollDistance(t){this._scrollTo(t)}_scrollHeader(t){let e=this._tabListContainer.nativeElement.offsetWidth,n=(t==`before`?-1:1)*e/3;return this._scrollTo(this._scrollDistance+n)}_handlePaginatorClick(t){this._stopInterval(),this._scrollHeader(t)}_scrollToLabel(t){if(this.disablePagination)return;let e=this._items?this._items.toArray()[t]:null;if(!e)return;let n=this._tabListContainer.nativeElement.offsetWidth,{offsetLeft:r,offsetWidth:u}=e.elementRef.nativeElement,f,x;this._getLayoutDirection()==`ltr`?(f=r,x=f+u):(x=this._tabListInner.nativeElement.offsetWidth-r,f=x-u);let C=this.scrollDistance,l=this.scrollDistance+n;f<C?this.scrollDistance-=C-f:x>l&&(this.scrollDistance+=Math.min(x-l,f-C))}_checkPaginationEnabled(){if(this.disablePagination)this._showPaginationControls=!1;else{let n=this._tabListInner.nativeElement.scrollWidth-this._elementRef.nativeElement.offsetWidth>=5;n||(this.scrollDistance=0),n!==this._showPaginationControls&&(this._showPaginationControls=n,this._changeDetectorRef.markForCheck())}}_checkScrollingControls(){this.disablePagination?this._disableScrollAfter=this._disableScrollBefore=!0:(this._disableScrollBefore=this.scrollDistance==0,this._disableScrollAfter=this.scrollDistance==this._getMaxScrollDistance(),this._changeDetectorRef.markForCheck())}_getMaxScrollDistance(){return this._tabListInner.nativeElement.scrollWidth-this._tabListContainer.nativeElement.offsetWidth||0}_alignInkBarToSelectedTab(){let t=this._items&&this._items.length?this._items.toArray()[this.selectedIndex]:null,e=t?t.elementRef.nativeElement:null;e?this._inkBar.alignToElement(e):this._inkBar.hide()}_stopInterval(){this._stopScrolling.next()}_handlePaginatorPress(t,e){e&&e.button!=null&&e.button!==0||(this._stopInterval(),nr(ia,ra).pipe(av(Gy(this._stopScrolling,this._destroyed))).subscribe(()=>{let{maxScrollDistance:n,distance:r}=this._scrollHeader(t);(r===0||r>=n)&&this._stopInterval()}))}_scrollTo(t){if(this.disablePagination)return{maxScrollDistance:0,distance:0};let e=this._getMaxScrollDistance();return this._scrollDistance=Math.max(0,Math.min(e,t)),this._scrollDistanceChanged=!0,this._checkScrollingControls(),{maxScrollDistance:e,distance:this._scrollDistance}}static ɵfac=function(e){return new(e||a)};static ɵdir=fw({type:a,inputs:{disablePagination:[2,`disablePagination`,`disablePagination`,Nj],selectedIndex:[2,`selectedIndex`,`selectedIndex`,Sj]},outputs:{selectFocusedIndex:`selectFocusedIndex`,indexFocused:`indexFocused`}})}return a})();var sa=(()=>{class a extends oa{_items;_tabListContainer;_tabList;_tabListInner;_nextPaginator;_previousPaginator;_inkBar;ariaLabel;ariaLabelledby;disableRipple=!1;ngAfterContentInit(){this._inkBar=new jt(this._items),super.ngAfterContentInit()}_itemSelected(t){t.preventDefault()}static ɵfac=(()=>{let t;return function(n){return(t||(t=RE(a)))(n||a)}})();static ɵcmp=(function(){let t=[`tabListContainer`],e=[`tabList`],n=[`tabListInner`],r=[`nextPaginator`],u=[`previousPaginator`];return aw({type:a,selectors:[[`mat-tab-header`]],contentQueries:function(C,l,s){if(C&1&&om(s,Ge,4),C&2){let b;IC(b=DC())&&(l._items=b)}},viewQuery:function(C,l){if(C&1&&im(t,7)(e,7)(n,7)(r,5)(u,5),C&2){let s;IC(s=DC())&&(l._tabListContainer=s.first),IC(s=DC())&&(l._tabList=s.first),IC(s=DC())&&(l._tabListInner=s.first),IC(s=DC())&&(l._nextPaginator=s.first),IC(s=DC())&&(l._previousPaginator=s.first)}},hostAttrs:[1,`mat-mdc-tab-header`],hostVars:4,hostBindings:function(C,l){C&2&&pm(`mat-mdc-tab-header-pagination-controls-enabled`,l._showPaginationControls)(`mat-mdc-tab-header-rtl`,l._getLayoutDirection()==`rtl`)},inputs:{ariaLabel:[0,`aria-label`,`ariaLabel`],ariaLabelledby:[0,`aria-labelledby`,`ariaLabelledby`],disableRipple:[2,`disableRipple`,`disableRipple`,Nj]},features:[Og],ngContentSelectors:[`*`],decls:13,vars:10,consts:[[`previousPaginator`,``],[`tabListContainer`,``],[`tabList`,``],[`tabListInner`,``],[`nextPaginator`,``],[`mat-ripple`,``,1,`mat-mdc-tab-header-pagination`,`mat-mdc-tab-header-pagination-before`,3,`click`,`mousedown`,`touchend`,`matRippleDisabled`],[1,`mat-mdc-tab-header-pagination-chevron`],[1,`mat-mdc-tab-label-container`,3,`keydown`],[`role`,`tablist`,1,`mat-mdc-tab-list`,3,`cdkObserveContent`],[1,`mat-mdc-tab-labels`],[`mat-ripple`,``,1,`mat-mdc-tab-header-pagination`,`mat-mdc-tab-header-pagination-after`,3,`mousedown`,`click`,`touchend`,`matRippleDisabled`]],template:function(C,l){C&1&&(yC(),Hi(0,`div`,5,0),nm$1(`click`,function(){return l._handlePaginatorClick(`before`)})(`mousedown`,function(b){return l._handlePaginatorPress(`before`,b)})(`touchend`,function(){return l._stopInterval()}),Qg(2,`div`,6),Rl(),Hi(3,`div`,7,1),nm$1(`keydown`,function(b){return l._handleKeydown(b)}),Hi(5,`div`,8,2),nm$1(`cdkObserveContent`,function(){return l._onContentChanges()}),Hi(7,`div`,9,3),vC(9),Rl()()(),Hi(10,`div`,10,4),nm$1(`mousedown`,function(b){return l._handlePaginatorPress(`after`,b)})(`click`,function(){return l._handlePaginatorClick(`after`)})(`touchend`,function(){return l._stopInterval()}),Qg(12,`div`,6),Rl()),C&2&&(pm(`mat-mdc-tab-header-pagination-disabled`,l._disableScrollBefore),zg(`matRippleDisabled`,l._disableScrollBefore||l.disableRipple),ID(3),pm(`_mat-animation-noopable`,l._animationsDisabled),ID(2),qg(`aria-label`,l.ariaLabel||null)(`aria-labelledby`,l.ariaLabelledby||null),ID(5),pm(`mat-mdc-tab-header-pagination-disabled`,l._disableScrollAfter),zg(`matRippleDisabled`,l._disableScrollAfter||l.disableRipple))},dependencies:[LS,a_],styles:[`.mat-mdc-tab-header {
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
`],encapsulation:2,changeDetection:1})})()}return a})();var da=new S(`MAT_TABS_CONFIG`);var We=(()=>{class a extends K0{_host=v(Wt);_ngZone=v(Fe);_centeringSub=K.EMPTY;_leavingSub=K.EMPTY;ngOnInit(){super.ngOnInit(),this._centeringSub=this._host._beforeCentering.pipe(iv(this._host._isCenterPosition())).subscribe(t=>{this._host._content&&t&&!this.hasAttached()&&this._ngZone.run(()=>{Promise.resolve().then(),this.attach(this._host._content)})}),this._leavingSub=this._host._afterLeavingCenter.subscribe(()=>{this._host.preserveContent||this._ngZone.run(()=>this.detach())})}ngOnDestroy(){super.ngOnDestroy(),this._centeringSub.unsubscribe(),this._leavingSub.unsubscribe()}static ɵfac=(()=>{let t;return function(n){return(t||(t=RE(a)))(n||a)}})();static ɵdir=fw({type:a,selectors:[[``,`matTabBodyHost`,``]],features:[Og]})}return a})();var Wt=(()=>{class a{_elementRef=v(Wr);_dir=v(Vn,{optional:!0});_ngZone=v(Fe);_injector=v(se);_renderer=v(Ic);_diAnimationsDisabled=dn();_eventCleanups;_initialized=!1;_fallbackTimer;_positionIndex;_dirChangeSubscription=K.EMPTY;_position;_previousPosition;_onCentering=new Qe$1;_beforeCentering=new Qe$1;_afterLeavingCenter=new Qe$1;_onCentered=new Qe$1(!0);_portalHost;_contentElement;_content;animationDuration=`500ms`;preserveContent=!1;set position(t){this._positionIndex=t,this._computePositionAnimationState()}constructor(){if(this._dir){let t=v(_j);this._dirChangeSubscription=this._dir.change.subscribe(e=>{this._computePositionAnimationState(e),t.markForCheck()})}}ngOnInit(){this._bindTransitionEvents(),this._position===`center`&&(this._setActiveClass(!0),Dh(()=>this._onCentering.emit(this._elementRef.nativeElement.clientHeight),{injector:this._injector})),this._initialized=!0}ngOnDestroy(){clearTimeout(this._fallbackTimer),this._eventCleanups?.forEach(t=>t()),this._dirChangeSubscription.unsubscribe()}_bindTransitionEvents(){this._ngZone.runOutsideAngular(()=>{let t=this._elementRef.nativeElement,e=n=>{n.target===this._contentElement?.nativeElement&&(this._elementRef.nativeElement.classList.remove(`mat-tab-body-animating`),n.type===`transitionend`&&this._transitionDone())};this._eventCleanups=[this._renderer.listen(t,`transitionstart`,n=>{n.target===this._contentElement?.nativeElement&&(this._elementRef.nativeElement.classList.add(`mat-tab-body-animating`),this._transitionStarted())}),this._renderer.listen(t,`transitionend`,e),this._renderer.listen(t,`transitioncancel`,e)]})}_transitionStarted(){clearTimeout(this._fallbackTimer);let t=this._position===`center`;this._beforeCentering.emit(t),t&&this._onCentering.emit(this._elementRef.nativeElement.clientHeight)}_transitionDone(){this._position===`center`?this._onCentered.emit():this._previousPosition===`center`&&this._afterLeavingCenter.emit()}_setActiveClass(t){this._elementRef.nativeElement.classList.toggle(`mat-mdc-tab-body-active`,t)}_getLayoutDirection(){return this._dir&&this._dir.value===`rtl`?`rtl`:`ltr`}_isCenterPosition(){return this._positionIndex===0}_computePositionAnimationState(t=this._getLayoutDirection()){this._previousPosition=this._position,this._positionIndex<0?this._position=t==`ltr`?`left`:`right`:this._positionIndex>0?this._position=t==`ltr`?`right`:`left`:this._position=`center`,this._animationsDisabled()?this._simulateTransitionEvents():this._initialized&&(this._position===`center`||this._previousPosition===`center`)&&(clearTimeout(this._fallbackTimer),this._fallbackTimer=this._ngZone.runOutsideAngular(()=>setTimeout(()=>this._simulateTransitionEvents(),100)))}_simulateTransitionEvents(){this._transitionStarted(),Dh(()=>this._transitionDone(),{injector:this._injector})}_animationsDisabled(){return this._diAnimationsDisabled||this.animationDuration===`0ms`||this.animationDuration===`0s`}static ɵfac=function(e){return new(e||a)};static ɵcmp=(function(){let t=[`content`];function e(n,r){}return aw({type:a,selectors:[[`mat-tab-body`]],viewQuery:function(r,u){if(r&1&&im(We,5)(t,5),r&2){let f;IC(f=DC())&&(u._portalHost=f.first),IC(f=DC())&&(u._contentElement=f.first)}},hostAttrs:[1,`mat-mdc-tab-body`],hostVars:1,hostBindings:function(r,u){r&2&&qg(`inert`,u._position===`center`?null:``)},inputs:{_content:[0,`content`,`_content`],animationDuration:`animationDuration`,preserveContent:`preserveContent`,position:`position`},outputs:{_onCentering:`_onCentering`,_beforeCentering:`_beforeCentering`,_onCentered:`_onCentered`},decls:3,vars:6,consts:[[`content`,``],[`cdkScrollable`,``,1,`mat-mdc-tab-body-content`],[`matTabBodyHost`,``]],template:function(r,u){r&1&&(Hi(0,`div`,1,0),kg(2,e,0,0,`ng-template`,2),Rl()),r&2&&pm(`mat-tab-body-content-left`,u._position===`left`)(`mat-tab-body-content-right`,u._position===`right`)(`mat-tab-body-content-can-animate`,u._position===`center`||u._previousPosition===`center`)},dependencies:[We,Fm],styles:[`.mat-mdc-tab-body {
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
`],encapsulation:2,changeDetection:1})})()}return a})();var Ue=(()=>{class a{_elementRef=v(Wr);_changeDetectorRef=v(_j);_ngZone=v(Fe);_tabsSubscription=K.EMPTY;_tabLabelSubscription=K.EMPTY;_tabBodySubscription=K.EMPTY;_diAnimationsDisabled=dn();_bodyAnimationDuration;_headerAnimationDuration;_allTabs;_tabBodies;_tabBodyWrapper;_tabHeader;_tabs=new Mi;_indexToSelect=0;_lastFocusedTabIndex=null;_tabBodyWrapperHeight=0;color;get fitInkBarToContent(){return this._fitInkBarToContent}set fitInkBarToContent(t){this._fitInkBarToContent=t,this._changeDetectorRef.markForCheck()}_fitInkBarToContent=!1;stretchTabs=!0;alignTabs=null;dynamicHeight=!1;get selectedIndex(){return this._selectedIndex}set selectedIndex(t){this._indexToSelect=isNaN(t)?null:t}_selectedIndex=null;headerPosition=`above`;get animationDuration(){return this._animationDuration}set animationDuration(t){this._animationDuration=t,t&&typeof t==`object`?(this._bodyAnimationDuration=Vt(t.body),this._headerAnimationDuration=Vt(t.header)):this._headerAnimationDuration=this._bodyAnimationDuration=Vt(t)}_animationDuration;get contentTabIndex(){return this._contentTabIndex}set contentTabIndex(t){this._contentTabIndex=isNaN(t)?null:t}_contentTabIndex=null;disablePagination=!1;disableRipple=!1;preserveContent=!1;get backgroundColor(){return this._backgroundColor}set backgroundColor(t){let e=this._elementRef.nativeElement.classList;e.remove(`mat-tabs-with-background`,`mat-background-${this.backgroundColor}`),t&&e.add(`mat-tabs-with-background`,`mat-background-${t}`),this._backgroundColor=t}_backgroundColor;ariaLabel;ariaLabelledby;selectedIndexChange=new Qe$1;focusChange=new Qe$1;animationDone=new Qe$1;selectedTabChange=new Qe$1(!0);_groupId;_isServer=!v(V$1).isBrowser;constructor(){let t=v(da,{optional:!0});this._groupId=v(Yn).getId(`mat-tab-group-`),this.animationDuration=t&&t.animationDuration?t.animationDuration:`500ms`,this.disablePagination=t&&t.disablePagination!=null?t.disablePagination:!1,this.dynamicHeight=t&&t.dynamicHeight!=null?t.dynamicHeight:!1,t?.contentTabIndex!=null&&(this.contentTabIndex=t.contentTabIndex),this.preserveContent=!!t?.preserveContent,this.fitInkBarToContent=t&&t.fitInkBarToContent!=null?t.fitInkBarToContent:!1,this.stretchTabs=t&&t.stretchTabs!=null?t.stretchTabs:!0,this.alignTabs=t&&t.alignTabs!=null?t.alignTabs:null}ngAfterContentChecked(){let t=this._indexToSelect=this._clampTabIndex(this._indexToSelect);if(this._selectedIndex!=t){let e=this._selectedIndex==null;if(!e){this.selectedTabChange.emit(this._createChangeEvent(t));let n=this._tabBodyWrapper.nativeElement;n.style.minHeight=n.clientHeight+`px`}Promise.resolve().then(()=>{this._tabs.forEach((n,r)=>n.isActive=r===t),e||(this.selectedIndexChange.emit(t),this._tabBodyWrapper.nativeElement.style.minHeight=``)})}this._tabs.forEach((e,n)=>{e.position=n-t,this._selectedIndex!=null&&e.position==0&&!e.origin&&(e.origin=t-this._selectedIndex)}),this._selectedIndex!==t&&(this._selectedIndex=t,this._lastFocusedTabIndex=null,this._changeDetectorRef.markForCheck())}ngAfterContentInit(){this._subscribeToAllTabChanges(),this._subscribeToTabLabels(),this._tabsSubscription=this._tabs.changes.subscribe(()=>{let t=this._clampTabIndex(this._indexToSelect);if(t===this._selectedIndex){let e=this._tabs.toArray(),n;for(let r=0;r<e.length;r++)if(e[r].isActive){this._indexToSelect=this._selectedIndex=r,this._lastFocusedTabIndex=null,n=e[r];break}!n&&e[t]&&Promise.resolve().then(()=>{e[t].isActive=!0,this.selectedTabChange.emit(this._createChangeEvent(t))})}this._changeDetectorRef.markForCheck()})}ngAfterViewInit(){this._tabBodySubscription=this._tabBodies.changes.subscribe(()=>this._bodyCentered(!0))}_subscribeToAllTabChanges(){this._allTabs.changes.pipe(iv(this._allTabs)).subscribe(t=>{this._tabs.reset(t.filter(e=>e._closestTabGroup===this||!e._closestTabGroup)),this._tabs.notifyOnChanges()})}ngOnDestroy(){this._tabs.destroy(),this._tabsSubscription.unsubscribe(),this._tabLabelSubscription.unsubscribe(),this._tabBodySubscription.unsubscribe()}realignInkBar(){this._tabHeader&&this._tabHeader._alignInkBarToSelectedTab()}updatePagination(){this._tabHeader&&this._tabHeader.updatePagination()}focusTab(t){let e=this._tabHeader;e&&(e.focusIndex=t)}_focusChanged(t){this._lastFocusedTabIndex=t,this.focusChange.emit(this._createChangeEvent(t))}_createChangeEvent(t){let e=new $t;return e.index=t,this._tabs&&this._tabs.length&&(e.tab=this._tabs.toArray()[t]),e}_subscribeToTabLabels(){this._tabLabelSubscription&&this._tabLabelSubscription.unsubscribe(),this._tabLabelSubscription=Gy(...this._tabs.map(t=>t._stateChanges)).subscribe(()=>this._changeDetectorRef.markForCheck())}_clampTabIndex(t){return Math.min(this._tabs.length-1,Math.max(t||0,0))}_getTabLabelId(t,e){return t.id||`${this._groupId}-label-${e}`}_getTabContentId(t){return`${this._groupId}-content-${t}`}_setTabBodyWrapperHeight(t){if(!this.dynamicHeight||!this._tabBodyWrapperHeight){this._tabBodyWrapperHeight=t;return}let e=this._tabBodyWrapper.nativeElement;e.style.height=this._tabBodyWrapperHeight+`px`,this._tabBodyWrapper.nativeElement.offsetHeight&&(e.style.height=t+`px`)}_removeTabBodyWrapperHeight(){let t=this._tabBodyWrapper.nativeElement;this._tabBodyWrapperHeight=t.clientHeight,t.style.height=``,this._ngZone.run(()=>this.animationDone.emit())}_handleClick(t,e,n){e.focusIndex=n,t.disabled||(this.selectedIndex=n)}_getTabIndex(t){return t===(this._lastFocusedTabIndex??this.selectedIndex)?0:-1}_tabFocusChanged(t,e){t&&t!==`mouse`&&t!==`touch`&&(this._tabHeader.focusIndex=e)}_bodyCentered(t){t&&this._tabBodies?.forEach((e,n)=>e._setActiveClass(n===this._selectedIndex))}_bodyAnimationsDisabled(){return this._diAnimationsDisabled||this._bodyAnimationDuration===`0`||this._bodyAnimationDuration===`0ms`}static ɵfac=function(e){return new(e||a)};static ɵcmp=(function(){let t=[`tabBodyWrapper`],e=[`tabHeader`],n=[`*`];function r(s,b){}function u(s,b){if(s&1&&kg(0,r,0,0,`ng-template`,12),s&2){let i=gC().$implicit;zg(`cdkPortalOutlet`,i.templateLabel)}}function f(s,b){if(s&1&&QC(0),s&2){let i=gC().$implicit;wm(i.textLabel)}}function x(s,b){if(s&1){let i=fC();Hi(0,`div`,7,2),nm$1(`click`,function(){let h=Sd(i),k=h.$implicit,Pt=h.$index,Ke=gC(),Ye=wC(1);return xd(Ke._handleClick(k,Ye,Pt))})(`cdkFocusChange`,function(h){let k=Sd(i).$index,Pt=gC();return xd(Pt._tabFocusChanged(h,k))}),Qg(2,`span`,8)(3,`div`,9),Hi(4,`span`,10)(5,`span`,11),eC(6,u,1,1,null,12)(7,f,1,1),Rl()()()}if(s&2){let i=b.$implicit,_=b.$index,h=wC(1),k=gC();jC(i.labelClass),pm(`mdc-tab--active`,k.selectedIndex===_),zg(`id`,k._getTabLabelId(i,_))(`disabled`,i.disabled)(`fitInkBarToContent`,k.fitInkBarToContent),qg(`tabIndex`,k._getTabIndex(_))(`aria-posinset`,_+1)(`aria-setsize`,k._tabs.length)(`aria-controls`,k._getTabContentId(_))(`aria-selected`,k.selectedIndex===_)(`aria-label`,i.ariaLabel||null)(`aria-labelledby`,!i.ariaLabel&&i.ariaLabelledby?i.ariaLabelledby:null),ID(3),zg(`matRippleTrigger`,h)(`matRippleDisabled`,i.disabled||k.disableRipple),ID(3),nC(i.templateLabel?6:7)}}function C(s,b){s&1&&vC(0)}function l(s,b){if(s&1){let i=fC();Hi(0,`mat-tab-body`,13),nm$1(`_onCentered`,function(){Sd(i);let h=gC();return xd(h._removeTabBodyWrapperHeight())})(`_onCentering`,function(h){Sd(i);let k=gC();return xd(k._setTabBodyWrapperHeight(h))})(`_beforeCentering`,function(h){Sd(i);let k=gC();return xd(k._bodyCentered(h))}),Rl()}if(s&2){let i=b.$implicit,_=b.$index,h=gC();jC(i.bodyClass),zg(`id`,h._getTabContentId(_))(`content`,i.content)(`position`,i.position)(`animationDuration`,h._bodyAnimationDuration)(`preserveContent`,h.preserveContent),qg(`tabindex`,h.contentTabIndex!=null&&h.selectedIndex===_?h.contentTabIndex:null)(`aria-labelledby`,h._getTabLabelId(i,_))(`aria-hidden`,h.selectedIndex!==_)}}return aw({type:a,selectors:[[`mat-tab-group`]],contentQueries:function(b,i,_){if(b&1&&om(_,Gt,5),b&2){let h;IC(h=DC())&&(i._allTabs=h)}},viewQuery:function(b,i){if(b&1&&im(t,5)(e,5)(Wt,5),b&2){let _;IC(_=DC())&&(i._tabBodyWrapper=_.first),IC(_=DC())&&(i._tabHeader=_.first),IC(_=DC())&&(i._tabBodies=_)}},hostAttrs:[1,`mat-mdc-tab-group`],hostVars:13,hostBindings:function(b,i){b&2&&(qg(`mat-align-tabs`,i.alignTabs),jC(`mat-`+(i.color||`primary`)),fm(`--%NS%mat-tab-body-animation-duration`,i._bodyAnimationDuration)(`--%NS%mat-tab-header-animation-duration`,i._headerAnimationDuration),pm(`mat-mdc-tab-group-dynamic-height`,i.dynamicHeight)(`mat-mdc-tab-group-inverted-header`,i.headerPosition===`below`)(`mat-mdc-tab-group-stretch-tabs`,i.stretchTabs))},inputs:{color:`color`,fitInkBarToContent:[2,`fitInkBarToContent`,`fitInkBarToContent`,Nj],stretchTabs:[2,`mat-stretch-tabs`,`stretchTabs`,Nj],alignTabs:[0,`mat-align-tabs`,`alignTabs`],dynamicHeight:[2,`dynamicHeight`,`dynamicHeight`,Nj],selectedIndex:[2,`selectedIndex`,`selectedIndex`,Sj],headerPosition:`headerPosition`,animationDuration:`animationDuration`,contentTabIndex:[2,`contentTabIndex`,`contentTabIndex`,Sj],disablePagination:[2,`disablePagination`,`disablePagination`,Nj],disableRipple:[2,`disableRipple`,`disableRipple`,Nj],preserveContent:[2,`preserveContent`,`preserveContent`,Nj],backgroundColor:`backgroundColor`,ariaLabel:[0,`aria-label`,`ariaLabel`],ariaLabelledby:[0,`aria-labelledby`,`ariaLabelledby`]},outputs:{selectedIndexChange:`selectedIndexChange`,focusChange:`focusChange`,animationDone:`animationDone`,selectedTabChange:`selectedTabChange`},exportAs:[`matTabGroup`],features:[tb([{provide:Qe,useExisting:a}])],ngContentSelectors:n,decls:9,vars:8,consts:[[`tabHeader`,``],[`tabBodyWrapper`,``],[`tabNode`,``],[3,`indexFocused`,`selectFocusedIndex`,`selectedIndex`,`disableRipple`,`disablePagination`,`aria-label`,`aria-labelledby`],[`role`,`tab`,`matTabLabelWrapper`,``,`cdkMonitorElementFocus`,``,1,`mdc-tab`,`mat-mdc-tab`,`mat-focus-indicator`,3,`id`,`mdc-tab--active`,`class`,`disabled`,`fitInkBarToContent`],[1,`mat-mdc-tab-body-wrapper`],[`role`,`tabpanel`,3,`id`,`class`,`content`,`position`,`animationDuration`,`preserveContent`],[`role`,`tab`,`matTabLabelWrapper`,``,`cdkMonitorElementFocus`,``,1,`mdc-tab`,`mat-mdc-tab`,`mat-focus-indicator`,3,`click`,`cdkFocusChange`,`id`,`disabled`,`fitInkBarToContent`],[1,`mdc-tab__ripple`],[`mat-ripple`,``,1,`mat-mdc-tab-ripple`,3,`matRippleTrigger`,`matRippleDisabled`],[1,`mdc-tab__content`],[1,`mdc-tab__text-label`],[3,`cdkPortalOutlet`],[`role`,`tabpanel`,3,`_onCentered`,`_onCentering`,`_beforeCentering`,`id`,`content`,`position`,`animationDuration`,`preserveContent`]],template:function(b,i){b&1&&(yC(),Hi(0,`mat-tab-header`,3,0),nm$1(`indexFocused`,function(h){return i._focusChanged(h)})(`selectFocusedIndex`,function(h){return i.selectedIndex=h}),oC(2,x,8,17,`div`,4,rC),Rl(),eC(4,C,1,0),Hi(5,`div`,5,1),oC(7,l,1,10,`mat-tab-body`,6,rC),Rl()),b&2&&(zg(`selectedIndex`,i.selectedIndex||0)(`disableRipple`,i.disableRipple)(`disablePagination`,i.disablePagination),Gg(`aria-label`,i.ariaLabel)(`aria-labelledby`,i.ariaLabelledby),ID(2),iC(i._tabs),ID(2),nC(i._isServer?4:-1),ID(),pm(`_mat-animation-noopable`,i._bodyAnimationsDisabled()),ID(2),iC(i._tabs))},dependencies:[sa,Ge,nm,LS,K0,Wt],styles:[`.mdc-tab {
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
`],encapsulation:2,changeDetection:1})})()}return a})();var $t=class{index;tab};var qe=(()=>{class a{static ɵfac=function(e){return new(e||a)};static ɵmod=lw({type:a});static ɵinj=nd({imports:[iy]})}return a})();var ca=a=>[`/UserAccount/Profile`,a];function ma(a,c){if(a&1&&Qg(0,`img`,1),a&2){let t=gC();zg(`ngSrc`,t.libCardInfo.value().imageUrl)}}function ba(a,c){a&1&&(Hi(0,`mat-icon`,2),QC(1,` shelves `),Rl())}var Dt=class a{libraryId=Ij.required();router=v(Ie);libService=v(o);identityService=v(ml);libCardInfo=po(()=>this.libService.GetLibraryCardInfo_Url+this.libraryId());isMine=it(()=>this.identityService.isAuthenticated()&&this.libCardInfo.value()&&this.libCardInfo.value()?.ownerId===this.identityService.myIdentityInfo.value()?.id);otherOwnerUsername=po(()=>{if(this.libCardInfo.value())return this.isMine()?void 0:this.identityService.GetUsername_Url+this.libCardInfo.value()?.ownerId});ownerUsername=it(()=>this.libCardInfo.value()&&this.isMine()?this.identityService.myIdentityInfo.value()?.userName:this.otherOwnerUsername.value()?.username);constructor(){}openLibrary(){this.router.navigate([`/Library`,this.libraryId()])}static ɵfac=function(t){return new(t||a)};static ɵcmp=aw({type:a,selectors:[[`app-library-card`]],hostBindings:function(t,e){t&1&&nm$1(`click`,function(){return e.openLibrary()})},inputs:{libraryId:[1,`libraryId`]},decls:12,vars:7,consts:[[`appearance`,`outlined`],[`width`,`40`,`height`,`40`,`alt`,`library logo`,`matCardAvatar`,``,3,`ngSrc`],[`matCardAvatar`,``,2,`font-size`,`36px`,`text-align`,`center`],[2,`text-wrap`,`wrap`,3,`routerLink`],[2,`font-size`,`12px`]],template:function(t,e){t&1&&(Hi(0,`mat-card`,0)(1,`mat-card-header`),eC(2,ma,1,1,`img`,1)(3,ba,2,0,`mat-icon`,2),Hi(4,`mat-card-title`),QC(5),Rl(),Hi(6,`mat-card-subtitle`)(7,`a`,3),QC(8),Rl()()(),Hi(9,`mat-card-content`)(10,`p`,4),QC(11),Rl()()()),t&2&&(ID(2),nC(e.libCardInfo.value()?.imageUrl?2:3),ID(3),wm(e.libCardInfo.value()?.title),ID(2),zg(`routerLink`,ib(5,ca,e.libCardInfo.value()?.ownerId)),ID(),Vl(` `,e.ownerUsername(),` `),ID(3),wm(e.libCardInfo.value()?.description))},dependencies:[V,H,P,R,B,X,py,Hf,Dc],styles:[`mat-card[_ngcontent-%COMP%]{width:256px;height:256px;cursor:pointer;overflow:hidden;transition:all .1s}mat-card[_ngcontent-%COMP%]:hover{box-shadow:0 5px 10px var(--%NS%mat-sys-outline-variant)}mat-card-header[_ngcontent-%COMP%]{border-bottom:1px solid var(--%NS%mat-sys-outline-variant)}mat-card-title[_ngcontent-%COMP%]{font-size:18px}mat-card-subtitle[_ngcontent-%COMP%]{font-size:12px}mat-card-content[_ngcontent-%COMP%]{flex:1 1 auto;overflow:auto}mat-card-content[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{font-size:12px}`]})};function pa(a,c){if(a&1){let t=fC();Hi(0,`button`,6),nm$1(`click`,function(){Sd(t);let n=gC();return xd(n.openNewLibraryForm())}),Hi(1,`mat-icon`),QC(2,`add_box`),Rl(),QC(3,` Create New Library `),Rl()}}function ua(a,c){if(a&1&&Qg(0,`app-library-card`,5),a&2){let t=c.$implicit;zg(`libraryId`,t)}}var Lt=class a{libIds=Ij.required();isMine=Ij(!1);reload=Ej();dialog=v(Ut);libService=v(o);identityService=v(ml);sidenavOpen=Et(!0);displayWaitSpinner=Et(!1);constructor(){}toggleSidenavOpen(){this.sidenavOpen.update(c=>!c)}openNewLibraryForm(){this.isMine()&&(this.identityService.getAntiForgeryToken.reload(),this.dialog.open(Ze$1).afterClosed().subscribe(c=>{c&&(this.displayWaitSpinner.set(!0),this.libService.submitNewLibrary(c).subscribe({next:t=>{t&&t.success&&(this.reload.emit(void 0),this.displayWaitSpinner.set(!1))},error:t=>{throw this.displayWaitSpinner.set(!1),this.dialog.open(te,{data:{description:[`Something went wrong during submitting the new library!`,`Please try later.`],title:`Submit Error`,status:`warning`}}),t}}))}))}static ɵfac=function(t){return new(t||a)};static ɵcmp=aw({type:a,selectors:[[`app-library-list`]],inputs:{libIds:[1,`libIds`],isMine:[1,`isMine`]},outputs:{reload:`reload`},decls:11,vars:4,consts:[[`id`,``,`mode`,`side`,`position`,`start`,2,`position`,`absolute`,3,`opened`],[`matButton`,``],[2,`float`,`inline-start`],[`matMiniFab`,``,3,`click`,`matTooltip`],[1,`list`],[3,`libraryId`],[`matButton`,``,3,`click`]],template:function(t,e){t&1&&(Hi(0,`mat-sidenav-container`)(1,`mat-sidenav`,0),eC(2,pa,4,0,`button`,1),Rl(),Hi(3,`mat-sidenav-content`)(4,`div`,2)(5,`button`,3),nm$1(`click`,function(){return e.toggleSidenavOpen()}),Hi(6,`mat-icon`),QC(7),Rl()()(),Hi(8,`div`,4),oC(9,ua,1,1,`app-library-card`,5,rC),Rl()()()),t&2&&(ID(),zg(`opened`,e.sidenavOpen()),ID(),nC(e.isMine()?2:-1),ID(3),zg(`matTooltip`,e.sidenavOpen()?`Close panel`:`Open panel`),ID(2),wm(e.sidenavOpen()?`left_panel_close`:`left_panel_open`),ID(2),iC(e.libIds()))},dependencies:[Dt$1,Je,He,Dt,py,h0,d0,at],styles:[`mat-sidenav-container[_ngcontent-%COMP%]{position:relative}mat-sidenav[_ngcontent-%COMP%]{width:340px;border-right:1px solid var(--%NS%mat-sys-outline-variant);border-radius:0;padding-right:10px;padding-top:10px}mat-sidenav-content[_ngcontent-%COMP%]{padding:8px}.list[_ngcontent-%COMP%]{display:flex;flex-direction:row;justify-content:space-evenly;flex-wrap:wrap;width:100%;padding:8px 0}app-library-card[_ngcontent-%COMP%]{margin:8px}`]})};var ha=()=>[];function _a(a,c){if(a&1){let t=fC();Hi(0,`app-library-list`,3),nm$1(`reload`,function(){Sd(t);let n=gC();return xd(n.libIdsResource.reload())}),Rl()}if(a&2){let t=gC();zg(`libIds`,t.libIdsResource.value()?.libIds??ob(2,ha))(`isMine`,t.isMine())}}var Nt=class a{userId=Ij.required();identityServise=v(ml);libService=v(o);libIdsResource=po(()=>this.libService.GetLibraryIdsOfUser_Url+this.userId());isMine=it(()=>this.identityServise.isAuthenticated()&&this.userId()===this.identityServise.myIdentityInfo.value()?.id);static ɵfac=function(t){return new(t||a)};static ɵcmp=aw({type:a,selectors:[[`app-mainboard`]],inputs:{userId:[1,`userId`]},decls:3,vars:0,consts:[[`dynamicHeight`,``],[`label`,`Libraries`],[`matTabContent`,``],[3,`reload`,`libIds`,`isMine`]],template:function(t,e){t&1&&(Hi(0,`mat-tab-group`,0)(1,`mat-tab`,1),kg(2,_a,1,3,`ng-template`,2),Rl()())},dependencies:[qe,Qt,Gt,Ue,Lt],encapsulation:2})};var ga=()=>[`/UserAccount/ProfileSetting`];function fa(a,c){if(a&1&&Qg(0,`img`,3),a&2){let t=gC();zg(`ngSrc`,t.profileInfo.value().avatarUrl)}}function va(a,c){a&1&&(Hi(0,`mat-icon`,4),QC(1,`account_circle`),Rl())}function ya(a,c){a&1&&(Hi(0,`a`,9)(1,`mat-icon`),QC(2,`person_edit`),Rl(),QC(3,` Edit Profile `),Rl()),a&2&&zg(`routerLink`,ob(1,ga))}var Ze=class a{identityService=v(ml);profileService=v(c);activatedRoute=v(qt);params=C(this.activatedRoute.paramMap);userId=it(()=>this.params()?.get(`userId`)??this.identityService.myIdentityInfo.value()?.id);isMe=it(()=>this.userId()&&this.userId()===this.identityService.myIdentityInfo.value()?.id);profileInfo=po(()=>this.identityService.isAuthenticated()?this.profileService.GetProfileInfo_Url+this.userId():void 0);profileUsername=po(()=>this.identityService.isAuthenticated()?this.identityService.GetUsername_Url+this.userId():void 0);constructor(){}static ɵfac=function(t){return new(t||a)};static ɵcmp=aw({type:a,selectors:[[`app-profile`]],decls:18,vars:6,consts:[[`appearance`,`outlined`],[`iconName`,`person`,`tagName`,`Profile`],[2,`float`,`inline-start`,`position`,`relative`],[`priority`,``,`width`,`100`,`height`,`100`,`alt`,`user image`,`id`,`user-profile-img`,3,`ngSrc`],[2,`font-size`,`100px`,`width`,`100px`,`height`,`100px`],[2,`margin`,`0`],[1,`clearfix`],[2,`text-wrap`,`wrap`],[`align`,`end`],[`matButton`,``,3,`routerLink`],[3,`userId`]],template:function(t,e){t&1&&(Hi(0,`mat-card`,0),Qg(1,`app-card-tag`,1),Hi(2,`mat-card-header`)(3,`div`,2),eC(4,fa,1,1,`img`,3)(5,va,2,0,`mat-icon`,4),Rl(),Hi(6,`div`,2)(7,`mat-card-title`)(8,`p`,5),QC(9),Rl()(),Hi(10,`mat-card-subtitle`),QC(11),Rl()()(),Hi(12,`mat-card-content`,6)(13,`pre`,7),QC(14),Rl()(),Hi(15,`mat-card-actions`,8),eC(16,ya,4,2,`a`,9),Rl()(),Qg(17,`app-mainboard`,10)),t&2&&(ID(4),nC(e.profileInfo.value()?.avatarUrl?4:5),ID(5),Vl(` `,e.profileInfo.value()?.name,` `),ID(2),Vl(` `,e.profileUsername.value()?.username,` `),ID(3),wm(e.profileInfo.value()?.description),ID(2),nC(e.isMe()?16:-1),ID(),zg(`userId`,e.userId()))},dependencies:[O,V,G,X,H,B,R,py,d0,Hf,Dc,Nt,N],styles:[`mat-card[_ngcontent-%COMP%]{width:50vw;min-width:370px;margin:16px auto;display:block}img#user-profile-img[_ngcontent-%COMP%]{width:100px;height:100px;object-fit:cover;border-radius:50%;overflow:hidden}mat-card-title[_ngcontent-%COMP%]{margin:16px}mat-card-subtitle[_ngcontent-%COMP%]{margin:0 16px;letter-spacing:1px}`]})};export{Ze as Profile};