import{a as j,i as _,n as F,o as k,r as T,s as z,t as A}from"./chunk-BSUrFOMv.js";import{A as aS,B as oc,C as Sv,E as Ve$1,H as q,J as sS,K as rn,M as fi,P as hS,S as Oo,U as qc,V as pS,W as qi,Y as t0,Z as x0,_ as Hc,f as Co,g as Et,h as Em,j as ap,m as Dy,t as p,v as He$1,w as To,x as Nv,y as Mc}from"./main-A26NNKKE.js";import{n as be,t as U}from"./chunk-Dx64qtOz.js";import{$n as rj,$t as aw,An as lE,At as Xn,B as Ku,Bn as nt,Bt as Yw,Dt as XC,E as Hy,En as ji,Fn as mh,G as Mg,Hn as nw,J as Mt$1,Kn as ow,L as Kg,Ln as nj,M as Jw,N as Jy,Nt as Xw,P as K,Pn as mC,Pt as Xy,Qt as am,Tr as yt,Ut as ZC,V as Kw,W as M,X as NE,Xn as qe$1,Xt as aC,Yt as _y,_n as gD,_t as Ug,an as cm,br as xg,cn as eC,cr as uC,dn as ej,dr as vC,en as bd,f as Br,fn as em,gn as gC,gt as Ts,h as Cd,i as $y,kn as kr,kt as Xg,m as C,mn as fC,mr as vm,n as $g,nr as se,pn as ev,pt as Sg,qn as pC,rt as Pl,sr as tv,st as Q1,t as $C,tn as bi,tr as rs,u as Bg,un as ee,ur as v,ut as RC,v as Ee$1,w as Hg,wr as yc,x as Fe,xr as xl,yr as x}from"./chunk-DDb8UntD.js";function Ie(a,c){let e=!c?.manualCleanup?c?.injector?.get(Ee$1)??v(Ee$1):null,n=He(c?.equal),i;c?.requireSync?i=yt({kind:0},{equal:n}):i=yt({kind:1,value:c?.initialValue},{equal:n});let l,h=a.subscribe({next:u=>i.set({kind:1,value:u}),error:u=>{i.set({kind:2,error:u}),l?.()},complete:()=>{l?.()}});if(c?.requireSync&&i().kind===0)throw new C(601,!1);return l=e?.onDestroy(h.unsubscribe.bind(h)),nt(()=>{let u=i();switch(u.kind){case 1:return u.value;case 2:throw u.error;case 0:throw new C(601,!1)}},{equal:c?.equal})}function He(a=Object.is){return(c,t)=>c.kind===1&&t.kind===1&&a(c.value,t.value)}var Ve=new M(`MatTabContent`);var Pt=(()=>{class a{template=v(kr);static ɵfac=function(e){return new(e||a)};static ɵdir=aw({type:a,selectors:[[``,`matTabContent`,``]],features:[ZC([{provide:Ve,useExisting:a}])]})}return a})();var We=new M(`MatTabLabel`);var Pe=new M(`MAT_TAB`);var $e=(()=>{class a extends hS{_closestTab=v(Pe,{optional:!0});static ɵfac=(()=>{let t;return function(n){return(t||(t=NE(a)))(n||a)}})();static ɵdir=aw({type:a,selectors:[[``,`mat-tab-label`,``],[``,`matTabLabel`,``]],features:[ZC([{provide:We,useExisting:a}]),Mg]})}return a})();var Le=new M(`MAT_TAB_GROUP`);var Lt=(()=>{class a{_viewContainerRef=v(rs);_closestTabGroup=v(Le,{optional:!0});disabled=!1;get templateLabel(){return this._templateLabel}set templateLabel(t){this._setTemplateLabelInput(t)}_templateLabel;_explicitContent=void 0;_implicitContent;textLabel=``;ariaLabel;ariaLabelledby;labelClass;bodyClass;id=null;_contentPortal=null;get content(){return this._contentPortal}_stateChanges=new ee;position=null;origin=null;isActive=!1;constructor(){v(He$1).load(Hc)}ngOnChanges(t){(Object.hasOwn(t,`textLabel`)||Object.hasOwn(t,`disabled`))&&this._stateChanges.next()}ngOnDestroy(){this._stateChanges.complete()}ngOnInit(){this._contentPortal=new fi(this._explicitContent||this._implicitContent,this._viewContainerRef)}_setTemplateLabelInput(t){t&&t._closestTab===this&&(this._templateLabel=t)}static ɵfac=function(e){return new(e||a)};static ɵcmp=(function(){let t=[`*`];function e(n,i){n&1&&pC(0)}return nw({type:a,selectors:[[`mat-tab`]],contentQueries:function(i,l,h){if(i&1&&Xg(h,$e,5)(h,Pt,7,kr),i&2){let u;gC(u=mC())&&(l.templateLabel=u.first),gC(u=mC())&&(l._explicitContent=u.first)}},viewQuery:function(i,l){if(i&1&&em(kr,7),i&2){let h;gC(h=mC())&&(l._implicitContent=h.first)}},hostAttrs:[`hidden`,``],hostVars:1,hostBindings:function(i,l){i&2&&Bg(`id`,null)},inputs:{disabled:[2,`disabled`,`disabled`,nj],textLabel:[0,`label`,`textLabel`],ariaLabel:[0,`aria-label`,`ariaLabel`],ariaLabelledby:[0,`aria-labelledby`,`ariaLabelledby`],labelClass:`labelClass`,bodyClass:`bodyClass`,id:`id`},exportAs:[`matTab`],features:[ZC([{provide:Pe,useExisting:a}]),lE],ngContentSelectors:t,decls:1,vars:0,template:function(i,l){i&1&&(fC(),xg(0,e,1,0,`ng-template`))},encapsulation:2,changeDetection:1})})()}return a})();var It=`mdc-tab-indicator--active`;var Se=`mdc-tab-indicator--no-transition`;var Mt=class{_items;_currentItem;constructor(c){this._items=c}hide(){this._items.forEach(c=>c.deactivateInkBar()),this._currentItem=void 0}alignToElement(c){let t=this._items.find(n=>n.elementRef.nativeElement===c),e=this._currentItem;if(t!==e&&(e?.deactivateInkBar(),t)){let n=e?.elementRef.nativeElement.getBoundingClientRect?.();t.activateInkBar(n),this._currentItem=t}}};var Qe=(()=>{class a{_elementRef=v(Br);_inkBarElement=null;_inkBarContentElement=null;_fitToContent=!1;get fitInkBarToContent(){return this._fitToContent}set fitInkBarToContent(t){this._fitToContent!==t&&(this._fitToContent=t,this._inkBarElement&&this._appendInkBarElement())}activateInkBar(t){let e=this._elementRef.nativeElement;if(!t||!e.getBoundingClientRect||!this._inkBarContentElement){e.classList.add(It);return}let n=e.getBoundingClientRect(),i=t.width/n.width,l=t.left-n.left;e.classList.add(Se),this._inkBarContentElement.style.setProperty(`transform`,`translateX(${l}px) scaleX(${i})`),e.getBoundingClientRect(),e.classList.remove(Se),e.classList.add(It),this._inkBarContentElement.style.setProperty(`transform`,``)}deactivateInkBar(){this._elementRef.nativeElement.classList.remove(It)}ngOnInit(){this._createInkBarElement()}ngOnDestroy(){this._inkBarElement?.remove(),this._inkBarElement=this._inkBarContentElement=null}_createInkBarElement(){let t=this._elementRef.nativeElement.ownerDocument||document,e=this._inkBarElement=t.createElement(`span`),n=this._inkBarContentElement=t.createElement(`span`);e.className=`mdc-tab-indicator`,n.className=`mdc-tab-indicator__content mdc-tab-indicator__content--underline`,e.appendChild(this._inkBarContentElement),this._appendInkBarElement()}_appendInkBarElement(){this._inkBarElement;(this._fitToContent?this._elementRef.nativeElement.querySelector(`.mdc-tab__content`):this._elementRef.nativeElement).appendChild(this._inkBarElement)}static ɵfac=function(e){return new(e||a)};static ɵdir=aw({type:a,inputs:{fitInkBarToContent:[2,`fitInkBarToContent`,`fitInkBarToContent`,nj]}})}return a})();var Re=(()=>{class a extends Qe{elementRef=v(Br);disabled=!1;focus(){this.elementRef.nativeElement.focus()}getOffsetLeft(){return this.elementRef.nativeElement.offsetLeft}getOffsetWidth(){return this.elementRef.nativeElement.offsetWidth}static ɵfac=(()=>{let t;return function(n){return(t||(t=NE(a)))(n||a)}})();static ɵdir=aw({type:a,selectors:[[``,`matTabLabelWrapper`,``]],hostVars:3,hostBindings:function(e,n){e&2&&(Bg(`aria-disabled`,!!n.disabled),cm(`mat-mdc-tab-disabled`,n.disabled))},inputs:{disabled:[2,`disabled`,`disabled`,nj]},features:[Mg]})}return a})();var Me={passive:!0};var Ge=650;var qe=100;function St(a){let c=a+``;return/^[0-9]+(?:\.[0-9]+)?$/.test(c)?`${a}ms`:/^[0-9]+(?:\.[0-9]+)?(?:ms|s)$/.test(c)?c:``}var Ue=(()=>{class a{_elementRef=v(Br);_changeDetectorRef=v(ej);_viewportRuler=v(sS);_dir=v(Co,{optional:!0});_ngZone=v(Fe);_platform=v(q);_sharedResizeObserver=v(be);_injector=v(se);_renderer=v(yc);_animationsDisabled=rn();_eventCleanups;_scrollDistance=0;_selectedIndexChanged=!1;_destroyed=new ee;_showPaginationControls=!1;_disableScrollAfter=!0;_disableScrollBefore=!0;_tabLabelCount;_scrollDistanceChanged=!1;_keyManager;_currentTextContent;_stopScrolling=new ee;disablePagination=!1;get selectedIndex(){return this._selectedIndex}set selectedIndex(t){let e=isNaN(t)?0:t;this._selectedIndex!=e&&(this._selectedIndexChanged=!0,this._selectedIndex=e,this._keyManager&&this._keyManager.updateActiveItem(e))}_selectedIndex=0;selectFocusedIndex=new qe$1;indexFocused=new qe$1;constructor(){this._eventCleanups=this._ngZone.runOutsideAngular(()=>[this._renderer.listen(this._elementRef.nativeElement,`mouseleave`,()=>this._stopInterval())])}ngAfterViewInit(){this._eventCleanups.push(this._renderer.listen(this._previousPaginator.nativeElement,`touchstart`,()=>this._handlePaginatorPress(`before`),Me),this._renderer.listen(this._nextPaginator.nativeElement,`touchstart`,()=>this._handlePaginatorPress(`after`),Me))}ngAfterContentInit(){let t=this._dir?this._dir.change:_y(`ltr`),e=this._sharedResizeObserver.observe(this._elementRef.nativeElement).pipe($y(32),tv(this._destroyed)),n=this._viewportRuler.change(150).pipe(tv(this._destroyed)),i=()=>{this.updatePagination(),this._alignInkBarToSelectedTab()};this._keyManager=new To(this._items).withHorizontalOrientation(this._getLayoutDirection()).withHomeAndEnd().withWrap().skipPredicate(()=>!1),this._keyManager.updateActiveItem(Math.max(this._selectedIndex,0)),mh(i,{injector:this._injector}),Hy(t,n,e,this._items.changes,this._itemsResized()).pipe(tv(this._destroyed)).subscribe(()=>{this._ngZone.run(()=>{Promise.resolve().then(()=>{this._scrollDistance=Math.max(0,Math.min(this._getMaxScrollDistance(),this._scrollDistance)),i()})}),this._keyManager?.withHorizontalOrientation(this._getLayoutDirection())}),this._keyManager.change.subscribe(l=>{this.indexFocused.emit(l),this._setTabFocus(l)})}_itemsResized(){return typeof ResizeObserver!=`function`?Mt$1:this._items.changes.pipe(Xy(this._items),ev(t=>new x(e=>this._ngZone.runOutsideAngular(()=>{let n=new ResizeObserver(i=>e.next(i));return t.forEach(i=>n.observe(i.elementRef.nativeElement)),()=>{n.disconnect()}}))),Jy(1),Xn(t=>t.some(e=>e.contentRect.width>0&&e.contentRect.height>0)))}ngAfterContentChecked(){this._tabLabelCount!=this._items.length&&(this.updatePagination(),this._tabLabelCount=this._items.length,this._changeDetectorRef.markForCheck()),this._selectedIndexChanged&&(this._scrollToLabel(this._selectedIndex),this._checkScrollingControls(),this._alignInkBarToSelectedTab(),this._selectedIndexChanged=!1,this._changeDetectorRef.markForCheck()),this._scrollDistanceChanged&&(this._updateTabScrollPosition(),this._scrollDistanceChanged=!1,this._changeDetectorRef.markForCheck())}ngOnDestroy(){this._eventCleanups.forEach(t=>t()),this._keyManager?.destroy(),this._destroyed.next(),this._destroyed.complete(),this._stopScrolling.complete()}_handleKeydown(t){if(!Mc(t))switch(t.keyCode){case 13:case 32:if(this.focusIndex!==this.selectedIndex){let e=this._items.get(this.focusIndex);e&&!e.disabled&&(this.selectFocusedIndex.emit(this.focusIndex),this._itemSelected(t))}break;default:this._keyManager?.onKeydown(t)}}_onContentChanges(){let t=this._elementRef.nativeElement.textContent;t!==this._currentTextContent&&(this._currentTextContent=t||``,this._ngZone.run(()=>{this.updatePagination(),this._alignInkBarToSelectedTab(),this._changeDetectorRef.markForCheck()}))}updatePagination(){this._checkPaginationEnabled(),this._checkScrollingControls(),this._updateTabScrollPosition()}get focusIndex(){return this._keyManager?this._keyManager.activeItemIndex:0}set focusIndex(t){!this._isValidIndex(t)||this.focusIndex===t||!this._keyManager||this._keyManager.setActiveItem(t)}_isValidIndex(t){return this._items?!!this._items.toArray()[t]:!0}_setTabFocus(t){if(this._showPaginationControls&&this._scrollToLabel(t),this._items&&this._items.length){this._items.toArray()[t].focus();let e=this._tabListContainer.nativeElement;this._getLayoutDirection()==`ltr`?e.scrollLeft=0:e.scrollLeft=e.scrollWidth-e.offsetWidth}}_getLayoutDirection(){return this._dir&&this._dir.value===`rtl`?`rtl`:`ltr`}_updateTabScrollPosition(){if(this.disablePagination)return;let t=this.scrollDistance,e=this._getLayoutDirection()===`ltr`?-t:t;this._tabList.nativeElement.style.transform=`translateX(${Math.round(e)}px)`,(this._platform.TRIDENT||this._platform.EDGE)&&(this._tabListContainer.nativeElement.scrollLeft=0)}get scrollDistance(){return this._scrollDistance}set scrollDistance(t){this._scrollTo(t)}_scrollHeader(t){let e=this._tabListContainer.nativeElement.offsetWidth,n=(t==`before`?-1:1)*e/3;return this._scrollTo(this._scrollDistance+n)}_handlePaginatorClick(t){this._stopInterval(),this._scrollHeader(t)}_scrollToLabel(t){if(this.disablePagination)return;let e=this._items?this._items.toArray()[t]:null;if(!e)return;let n=this._tabListContainer.nativeElement.offsetWidth,{offsetLeft:i,offsetWidth:l}=e.elementRef.nativeElement,h,u;this._getLayoutDirection()==`ltr`?(h=i,u=h+l):(u=this._tabListInner.nativeElement.offsetWidth-i,h=u-l);let v=this.scrollDistance,d=this.scrollDistance+n;h<v?this.scrollDistance-=v-h:u>d&&(this.scrollDistance+=Math.min(u-d,h-v))}_checkPaginationEnabled(){if(this.disablePagination)this._showPaginationControls=!1;else{let n=this._tabListInner.nativeElement.scrollWidth-this._elementRef.nativeElement.offsetWidth>=5;n||(this.scrollDistance=0),n!==this._showPaginationControls&&(this._showPaginationControls=n,this._changeDetectorRef.markForCheck())}}_checkScrollingControls(){this.disablePagination?this._disableScrollAfter=this._disableScrollBefore=!0:(this._disableScrollBefore=this.scrollDistance==0,this._disableScrollAfter=this.scrollDistance==this._getMaxScrollDistance(),this._changeDetectorRef.markForCheck())}_getMaxScrollDistance(){return this._tabListInner.nativeElement.scrollWidth-this._tabListContainer.nativeElement.offsetWidth||0}_alignInkBarToSelectedTab(){let t=this._items&&this._items.length?this._items.toArray()[this.selectedIndex]:null,e=t?t.elementRef.nativeElement:null;e?this._inkBar.alignToElement(e):this._inkBar.hide()}_stopInterval(){this._stopScrolling.next()}_handlePaginatorPress(t,e){e&&e.button!=null&&e.button!==0||(this._stopInterval(),Ts(Ge,qe).pipe(tv(Hy(this._stopScrolling,this._destroyed))).subscribe(()=>{let{maxScrollDistance:n,distance:i}=this._scrollHeader(t);(i===0||i>=n)&&this._stopInterval()}))}_scrollTo(t){if(this.disablePagination)return{maxScrollDistance:0,distance:0};let e=this._getMaxScrollDistance();return this._scrollDistance=Math.max(0,Math.min(e,t)),this._scrollDistanceChanged=!0,this._checkScrollingControls(),{maxScrollDistance:e,distance:this._scrollDistance}}static ɵfac=function(e){return new(e||a)};static ɵdir=aw({type:a,inputs:{disablePagination:[2,`disablePagination`,`disablePagination`,nj],selectedIndex:[2,`selectedIndex`,`selectedIndex`,rj]},outputs:{selectFocusedIndex:`selectFocusedIndex`,indexFocused:`indexFocused`}})}return a})();var Ze=(()=>{class a extends Ue{_items;_tabListContainer;_tabList;_tabListInner;_nextPaginator;_previousPaginator;_inkBar;ariaLabel;ariaLabelledby;disableRipple=!1;ngAfterContentInit(){this._inkBar=new Mt(this._items),super.ngAfterContentInit()}_itemSelected(t){t.preventDefault()}static ɵfac=(()=>{let t;return function(n){return(t||(t=NE(a)))(n||a)}})();static ɵcmp=(function(){let t=[`tabListContainer`],e=[`tabList`],n=[`tabListInner`],i=[`nextPaginator`],l=[`previousPaginator`];return nw({type:a,selectors:[[`mat-tab-header`]],contentQueries:function(v,d,o){if(v&1&&Xg(o,Re,4),v&2){let m;gC(m=mC())&&(d._items=m)}},viewQuery:function(v,d){if(v&1&&em(t,7)(e,7)(n,7)(i,5)(l,5),v&2){let o;gC(o=mC())&&(d._tabListContainer=o.first),gC(o=mC())&&(d._tabList=o.first),gC(o=mC())&&(d._tabListInner=o.first),gC(o=mC())&&(d._nextPaginator=o.first),gC(o=mC())&&(d._previousPaginator=o.first)}},hostAttrs:[1,`mat-mdc-tab-header`],hostVars:4,hostBindings:function(v,d){v&2&&cm(`mat-mdc-tab-header-pagination-controls-enabled`,d._showPaginationControls)(`mat-mdc-tab-header-rtl`,d._getLayoutDirection()==`rtl`)},inputs:{ariaLabel:[0,`aria-label`,`ariaLabel`],ariaLabelledby:[0,`aria-labelledby`,`ariaLabelledby`],disableRipple:[2,`disableRipple`,`disableRipple`,nj]},features:[Mg],ngContentSelectors:[`*`],decls:13,vars:10,consts:[[`previousPaginator`,``],[`tabListContainer`,``],[`tabList`,``],[`tabListInner`,``],[`nextPaginator`,``],[`mat-ripple`,``,1,`mat-mdc-tab-header-pagination`,`mat-mdc-tab-header-pagination-before`,3,`click`,`mousedown`,`touchend`,`matRippleDisabled`],[1,`mat-mdc-tab-header-pagination-chevron`],[1,`mat-mdc-tab-label-container`,3,`keydown`],[`role`,`tablist`,1,`mat-mdc-tab-list`,3,`cdkObserveContent`],[1,`mat-mdc-tab-labels`],[`mat-ripple`,``,1,`mat-mdc-tab-header-pagination`,`mat-mdc-tab-header-pagination-after`,3,`mousedown`,`click`,`touchend`,`matRippleDisabled`]],template:function(v,d){v&1&&(fC(),ji(0,`div`,5,0),Kg(`click`,function(){return d._handlePaginatorClick(`before`)})(`mousedown`,function(m){return d._handlePaginatorPress(`before`,m)})(`touchend`,function(){return d._stopInterval()}),$g(2,`div`,6),xl(),ji(3,`div`,7,1),Kg(`keydown`,function(m){return d._handleKeydown(m)}),ji(5,`div`,8,2),Kg(`cdkObserveContent`,function(){return d._onContentChanges()}),ji(7,`div`,9,3),pC(9),xl()()(),ji(10,`div`,10,4),Kg(`mousedown`,function(m){return d._handlePaginatorPress(`after`,m)})(`click`,function(){return d._handlePaginatorClick(`after`)})(`touchend`,function(){return d._stopInterval()}),$g(12,`div`,6),xl()),v&2&&(cm(`mat-mdc-tab-header-pagination-disabled`,d._disableScrollBefore),Ug(`matRippleDisabled`,d._disableScrollBefore||d.disableRipple),gD(3),cm(`_mat-animation-noopable`,d._animationsDisabled),gD(2),Bg(`aria-label`,d.ariaLabel||null)(`aria-labelledby`,d.ariaLabelledby||null),gD(5),cm(`mat-mdc-tab-header-pagination-disabled`,d._disableScrollAfter),Ug(`matRippleDisabled`,d._disableScrollAfter||d.disableRipple))},dependencies:[t0,Dy],styles:[`.mat-mdc-tab-header {
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
`],encapsulation:2,changeDetection:1})})()}return a})();var Ke=new M(`MAT_TABS_CONFIG`);var De=(()=>{class a extends pS{_host=v(Dt);_ngZone=v(Fe);_centeringSub=K.EMPTY;_leavingSub=K.EMPTY;ngOnInit(){super.ngOnInit(),this._centeringSub=this._host._beforeCentering.pipe(Xy(this._host._isCenterPosition())).subscribe(t=>{this._host._content&&t&&!this.hasAttached()&&this._ngZone.run(()=>{Promise.resolve().then(),this.attach(this._host._content)})}),this._leavingSub=this._host._afterLeavingCenter.subscribe(()=>{this._host.preserveContent||this._ngZone.run(()=>this.detach())})}ngOnDestroy(){super.ngOnDestroy(),this._centeringSub.unsubscribe(),this._leavingSub.unsubscribe()}static ɵfac=(()=>{let t;return function(n){return(t||(t=NE(a)))(n||a)}})();static ɵdir=aw({type:a,selectors:[[``,`matTabBodyHost`,``]],features:[Mg]})}return a})();var Dt=(()=>{class a{_elementRef=v(Br);_dir=v(Co,{optional:!0});_ngZone=v(Fe);_injector=v(se);_renderer=v(yc);_diAnimationsDisabled=rn();_eventCleanups;_initialized=!1;_fallbackTimer;_positionIndex;_dirChangeSubscription=K.EMPTY;_position;_previousPosition;_onCentering=new qe$1;_beforeCentering=new qe$1;_afterLeavingCenter=new qe$1;_onCentered=new qe$1(!0);_portalHost;_contentElement;_content;animationDuration=`500ms`;preserveContent=!1;set position(t){this._positionIndex=t,this._computePositionAnimationState()}constructor(){if(this._dir){let t=v(ej);this._dirChangeSubscription=this._dir.change.subscribe(e=>{this._computePositionAnimationState(e),t.markForCheck()})}}ngOnInit(){this._bindTransitionEvents(),this._position===`center`&&(this._setActiveClass(!0),mh(()=>this._onCentering.emit(this._elementRef.nativeElement.clientHeight),{injector:this._injector})),this._initialized=!0}ngOnDestroy(){clearTimeout(this._fallbackTimer),this._eventCleanups?.forEach(t=>t()),this._dirChangeSubscription.unsubscribe()}_bindTransitionEvents(){this._ngZone.runOutsideAngular(()=>{let t=this._elementRef.nativeElement,e=n=>{n.target===this._contentElement?.nativeElement&&(this._elementRef.nativeElement.classList.remove(`mat-tab-body-animating`),n.type===`transitionend`&&this._transitionDone())};this._eventCleanups=[this._renderer.listen(t,`transitionstart`,n=>{n.target===this._contentElement?.nativeElement&&(this._elementRef.nativeElement.classList.add(`mat-tab-body-animating`),this._transitionStarted())}),this._renderer.listen(t,`transitionend`,e),this._renderer.listen(t,`transitioncancel`,e)]})}_transitionStarted(){clearTimeout(this._fallbackTimer);let t=this._position===`center`;this._beforeCentering.emit(t),t&&this._onCentering.emit(this._elementRef.nativeElement.clientHeight)}_transitionDone(){this._position===`center`?this._onCentered.emit():this._previousPosition===`center`&&this._afterLeavingCenter.emit()}_setActiveClass(t){this._elementRef.nativeElement.classList.toggle(`mat-mdc-tab-body-active`,t)}_getLayoutDirection(){return this._dir&&this._dir.value===`rtl`?`rtl`:`ltr`}_isCenterPosition(){return this._positionIndex===0}_computePositionAnimationState(t=this._getLayoutDirection()){this._previousPosition=this._position,this._positionIndex<0?this._position=t==`ltr`?`left`:`right`:this._positionIndex>0?this._position=t==`ltr`?`right`:`left`:this._position=`center`,this._animationsDisabled()?this._simulateTransitionEvents():this._initialized&&(this._position===`center`||this._previousPosition===`center`)&&(clearTimeout(this._fallbackTimer),this._fallbackTimer=this._ngZone.runOutsideAngular(()=>setTimeout(()=>this._simulateTransitionEvents(),100)))}_simulateTransitionEvents(){this._transitionStarted(),mh(()=>this._transitionDone(),{injector:this._injector})}_animationsDisabled(){return this._diAnimationsDisabled||this.animationDuration===`0ms`||this.animationDuration===`0s`}static ɵfac=function(e){return new(e||a)};static ɵcmp=(function(){let t=[`content`];function e(n,i){}return nw({type:a,selectors:[[`mat-tab-body`]],viewQuery:function(i,l){if(i&1&&em(De,5)(t,5),i&2){let h;gC(h=mC())&&(l._portalHost=h.first),gC(h=mC())&&(l._contentElement=h.first)}},hostAttrs:[1,`mat-mdc-tab-body`],hostVars:1,hostBindings:function(i,l){i&2&&Bg(`inert`,l._position===`center`?null:``)},inputs:{_content:[0,`content`,`_content`],animationDuration:`animationDuration`,preserveContent:`preserveContent`,position:`position`},outputs:{_onCentering:`_onCentering`,_beforeCentering:`_beforeCentering`,_onCentered:`_onCentered`},decls:3,vars:6,consts:[[`content`,``],[`cdkScrollable`,``,1,`mat-mdc-tab-body-content`],[`matTabBodyHost`,``]],template:function(i,l){i&1&&(ji(0,`div`,1,0),Sg(2,e,0,0,`ng-template`,2),xl()),i&2&&cm(`mat-tab-body-content-left`,l._position===`left`)(`mat-tab-body-content-right`,l._position===`right`)(`mat-tab-body-content-can-animate`,l._position===`center`||l._previousPosition===`center`)},dependencies:[De,aS],styles:[`.mat-mdc-tab-body {
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
`],encapsulation:2,changeDetection:1})})()}return a})();var Be=(()=>{class a{_elementRef=v(Br);_changeDetectorRef=v(ej);_ngZone=v(Fe);_tabsSubscription=K.EMPTY;_tabLabelSubscription=K.EMPTY;_tabBodySubscription=K.EMPTY;_diAnimationsDisabled=rn();_bodyAnimationDuration;_headerAnimationDuration;_allTabs;_tabBodies;_tabBodyWrapper;_tabHeader;_tabs=new bi;_indexToSelect=0;_lastFocusedTabIndex=null;_tabBodyWrapperHeight=0;color;get fitInkBarToContent(){return this._fitInkBarToContent}set fitInkBarToContent(t){this._fitInkBarToContent=t,this._changeDetectorRef.markForCheck()}_fitInkBarToContent=!1;stretchTabs=!0;alignTabs=null;dynamicHeight=!1;get selectedIndex(){return this._selectedIndex}set selectedIndex(t){this._indexToSelect=isNaN(t)?null:t}_selectedIndex=null;headerPosition=`above`;get animationDuration(){return this._animationDuration}set animationDuration(t){this._animationDuration=t,t&&typeof t==`object`?(this._bodyAnimationDuration=St(t.body),this._headerAnimationDuration=St(t.header)):this._headerAnimationDuration=this._bodyAnimationDuration=St(t)}_animationDuration;get contentTabIndex(){return this._contentTabIndex}set contentTabIndex(t){this._contentTabIndex=isNaN(t)?null:t}_contentTabIndex=null;disablePagination=!1;disableRipple=!1;preserveContent=!1;get backgroundColor(){return this._backgroundColor}set backgroundColor(t){let e=this._elementRef.nativeElement.classList;e.remove(`mat-tabs-with-background`,`mat-background-${this.backgroundColor}`),t&&e.add(`mat-tabs-with-background`,`mat-background-${t}`),this._backgroundColor=t}_backgroundColor;ariaLabel;ariaLabelledby;selectedIndexChange=new qe$1;focusChange=new qe$1;animationDone=new qe$1;selectedTabChange=new qe$1(!0);_groupId;_isServer=!v(q).isBrowser;constructor(){let t=v(Ke,{optional:!0});this._groupId=v(Oo).getId(`mat-tab-group-`),this.animationDuration=t&&t.animationDuration?t.animationDuration:`500ms`,this.disablePagination=t&&t.disablePagination!=null?t.disablePagination:!1,this.dynamicHeight=t&&t.dynamicHeight!=null?t.dynamicHeight:!1,t?.contentTabIndex!=null&&(this.contentTabIndex=t.contentTabIndex),this.preserveContent=!!t?.preserveContent,this.fitInkBarToContent=t&&t.fitInkBarToContent!=null?t.fitInkBarToContent:!1,this.stretchTabs=t&&t.stretchTabs!=null?t.stretchTabs:!0,this.alignTabs=t&&t.alignTabs!=null?t.alignTabs:null}ngAfterContentChecked(){let t=this._indexToSelect=this._clampTabIndex(this._indexToSelect);if(this._selectedIndex!=t){let e=this._selectedIndex==null;if(!e){this.selectedTabChange.emit(this._createChangeEvent(t));let n=this._tabBodyWrapper.nativeElement;n.style.minHeight=n.clientHeight+`px`}Promise.resolve().then(()=>{this._tabs.forEach((n,i)=>n.isActive=i===t),e||(this.selectedIndexChange.emit(t),this._tabBodyWrapper.nativeElement.style.minHeight=``)})}this._tabs.forEach((e,n)=>{e.position=n-t,this._selectedIndex!=null&&e.position==0&&!e.origin&&(e.origin=t-this._selectedIndex)}),this._selectedIndex!==t&&(this._selectedIndex=t,this._lastFocusedTabIndex=null,this._changeDetectorRef.markForCheck())}ngAfterContentInit(){this._subscribeToAllTabChanges(),this._subscribeToTabLabels(),this._tabsSubscription=this._tabs.changes.subscribe(()=>{let t=this._clampTabIndex(this._indexToSelect);if(t===this._selectedIndex){let e=this._tabs.toArray(),n;for(let i=0;i<e.length;i++)if(e[i].isActive){this._indexToSelect=this._selectedIndex=i,this._lastFocusedTabIndex=null,n=e[i];break}!n&&e[t]&&Promise.resolve().then(()=>{e[t].isActive=!0,this.selectedTabChange.emit(this._createChangeEvent(t))})}this._changeDetectorRef.markForCheck()})}ngAfterViewInit(){this._tabBodySubscription=this._tabBodies.changes.subscribe(()=>this._bodyCentered(!0))}_subscribeToAllTabChanges(){this._allTabs.changes.pipe(Xy(this._allTabs)).subscribe(t=>{this._tabs.reset(t.filter(e=>e._closestTabGroup===this||!e._closestTabGroup)),this._tabs.notifyOnChanges()})}ngOnDestroy(){this._tabs.destroy(),this._tabsSubscription.unsubscribe(),this._tabLabelSubscription.unsubscribe(),this._tabBodySubscription.unsubscribe()}realignInkBar(){this._tabHeader&&this._tabHeader._alignInkBarToSelectedTab()}updatePagination(){this._tabHeader&&this._tabHeader.updatePagination()}focusTab(t){let e=this._tabHeader;e&&(e.focusIndex=t)}_focusChanged(t){this._lastFocusedTabIndex=t,this.focusChange.emit(this._createChangeEvent(t))}_createChangeEvent(t){let e=new Nt;return e.index=t,this._tabs&&this._tabs.length&&(e.tab=this._tabs.toArray()[t]),e}_subscribeToTabLabels(){this._tabLabelSubscription&&this._tabLabelSubscription.unsubscribe(),this._tabLabelSubscription=Hy(...this._tabs.map(t=>t._stateChanges)).subscribe(()=>this._changeDetectorRef.markForCheck())}_clampTabIndex(t){return Math.min(this._tabs.length-1,Math.max(t||0,0))}_getTabLabelId(t,e){return t.id||`${this._groupId}-label-${e}`}_getTabContentId(t){return`${this._groupId}-content-${t}`}_setTabBodyWrapperHeight(t){if(!this.dynamicHeight||!this._tabBodyWrapperHeight){this._tabBodyWrapperHeight=t;return}let e=this._tabBodyWrapper.nativeElement;e.style.height=this._tabBodyWrapperHeight+`px`,this._tabBodyWrapper.nativeElement.offsetHeight&&(e.style.height=t+`px`)}_removeTabBodyWrapperHeight(){let t=this._tabBodyWrapper.nativeElement;this._tabBodyWrapperHeight=t.clientHeight,t.style.height=``,this._ngZone.run(()=>this.animationDone.emit())}_handleClick(t,e,n){e.focusIndex=n,t.disabled||(this.selectedIndex=n)}_getTabIndex(t){return t===(this._lastFocusedTabIndex??this.selectedIndex)?0:-1}_tabFocusChanged(t,e){t&&t!==`mouse`&&t!==`touch`&&(this._tabHeader.focusIndex=e)}_bodyCentered(t){t&&this._tabBodies?.forEach((e,n)=>e._setActiveClass(n===this._selectedIndex))}_bodyAnimationsDisabled(){return this._diAnimationsDisabled||this._bodyAnimationDuration===`0`||this._bodyAnimationDuration===`0ms`}static ɵfac=function(e){return new(e||a)};static ɵcmp=(function(){let t=[`tabBodyWrapper`],e=[`tabHeader`],n=[`*`];function i(o,m){}function l(o,m){if(o&1&&Sg(0,i,0,0,`ng-template`,12),o&2){let r=uC().$implicit;Ug(`cdkPortalOutlet`,r.templateLabel)}}function h(o,m){if(o&1&&$C(0),o&2){let r=uC().$implicit;vm(r.textLabel)}}function u(o,m){if(o&1){let r=aC();ji(0,`div`,7,2),Kg(`click`,function(){let b=Cd(r),y=b.$implicit,mt=b.$index,Fe=uC(),Oe=vC(1);return bd(Fe._handleClick(y,Oe,mt))})(`cdkFocusChange`,function(b){let y=Cd(r).$index,mt=uC();return bd(mt._tabFocusChanged(b,y))}),$g(2,`span`,8)(3,`div`,9),ji(4,`span`,10)(5,`span`,11),Yw(6,l,1,1,null,12)(7,h,1,1),xl()()()}if(o&2){let r=m.$implicit,p=m.$index,b=vC(1),y=uC();RC(r.labelClass),cm(`mdc-tab--active`,y.selectedIndex===p),Ug(`id`,y._getTabLabelId(r,p))(`disabled`,r.disabled)(`fitInkBarToContent`,y.fitInkBarToContent),Bg(`tabIndex`,y._getTabIndex(p))(`aria-posinset`,p+1)(`aria-setsize`,y._tabs.length)(`aria-controls`,y._getTabContentId(p))(`aria-selected`,y.selectedIndex===p)(`aria-label`,r.ariaLabel||null)(`aria-labelledby`,!r.ariaLabel&&r.ariaLabelledby?r.ariaLabelledby:null),gD(3),Ug(`matRippleTrigger`,b)(`matRippleDisabled`,r.disabled||y.disableRipple),gD(3),Kw(r.templateLabel?6:7)}}function v(o,m){o&1&&pC(0)}function d(o,m){if(o&1){let r=aC();ji(0,`mat-tab-body`,13),Kg(`_onCentered`,function(){Cd(r);let b=uC();return bd(b._removeTabBodyWrapperHeight())})(`_onCentering`,function(b){Cd(r);let y=uC();return bd(y._setTabBodyWrapperHeight(b))})(`_beforeCentering`,function(b){Cd(r);let y=uC();return bd(y._bodyCentered(b))}),xl()}if(o&2){let r=m.$implicit,p=m.$index,b=uC();RC(r.bodyClass),Ug(`id`,b._getTabContentId(p))(`content`,r.content)(`position`,r.position)(`animationDuration`,b._bodyAnimationDuration)(`preserveContent`,b.preserveContent),Bg(`tabindex`,b.contentTabIndex!=null&&b.selectedIndex===p?b.contentTabIndex:null)(`aria-labelledby`,b._getTabLabelId(r,p))(`aria-hidden`,b.selectedIndex!==p)}}return nw({type:a,selectors:[[`mat-tab-group`]],contentQueries:function(m,r,p){if(m&1&&Xg(p,Lt,5),m&2){let b;gC(b=mC())&&(r._allTabs=b)}},viewQuery:function(m,r){if(m&1&&em(t,5)(e,5)(Dt,5),m&2){let p;gC(p=mC())&&(r._tabBodyWrapper=p.first),gC(p=mC())&&(r._tabHeader=p.first),gC(p=mC())&&(r._tabBodies=p)}},hostAttrs:[1,`mat-mdc-tab-group`],hostVars:13,hostBindings:function(m,r){m&2&&(Bg(`mat-align-tabs`,r.alignTabs),RC(`mat-`+(r.color||`primary`)),am(`--%NS%mat-tab-body-animation-duration`,r._bodyAnimationDuration)(`--%NS%mat-tab-header-animation-duration`,r._headerAnimationDuration),cm(`mat-mdc-tab-group-dynamic-height`,r.dynamicHeight)(`mat-mdc-tab-group-inverted-header`,r.headerPosition===`below`)(`mat-mdc-tab-group-stretch-tabs`,r.stretchTabs))},inputs:{color:`color`,fitInkBarToContent:[2,`fitInkBarToContent`,`fitInkBarToContent`,nj],stretchTabs:[2,`mat-stretch-tabs`,`stretchTabs`,nj],alignTabs:[0,`mat-align-tabs`,`alignTabs`],dynamicHeight:[2,`dynamicHeight`,`dynamicHeight`,nj],selectedIndex:[2,`selectedIndex`,`selectedIndex`,rj],headerPosition:`headerPosition`,animationDuration:`animationDuration`,contentTabIndex:[2,`contentTabIndex`,`contentTabIndex`,rj],disablePagination:[2,`disablePagination`,`disablePagination`,nj],disableRipple:[2,`disableRipple`,`disableRipple`,nj],preserveContent:[2,`preserveContent`,`preserveContent`,nj],backgroundColor:`backgroundColor`,ariaLabel:[0,`aria-label`,`ariaLabel`],ariaLabelledby:[0,`aria-labelledby`,`ariaLabelledby`]},outputs:{selectedIndexChange:`selectedIndexChange`,focusChange:`focusChange`,animationDone:`animationDone`,selectedTabChange:`selectedTabChange`},exportAs:[`matTabGroup`],features:[ZC([{provide:Le,useExisting:a}])],ngContentSelectors:n,decls:9,vars:8,consts:[[`tabHeader`,``],[`tabBodyWrapper`,``],[`tabNode`,``],[3,`indexFocused`,`selectFocusedIndex`,`selectedIndex`,`disableRipple`,`disablePagination`,`aria-label`,`aria-labelledby`],[`role`,`tab`,`matTabLabelWrapper`,``,`cdkMonitorElementFocus`,``,1,`mdc-tab`,`mat-mdc-tab`,`mat-focus-indicator`,3,`id`,`mdc-tab--active`,`class`,`disabled`,`fitInkBarToContent`],[1,`mat-mdc-tab-body-wrapper`],[`role`,`tabpanel`,3,`id`,`class`,`content`,`position`,`animationDuration`,`preserveContent`],[`role`,`tab`,`matTabLabelWrapper`,``,`cdkMonitorElementFocus`,``,1,`mdc-tab`,`mat-mdc-tab`,`mat-focus-indicator`,3,`click`,`cdkFocusChange`,`id`,`disabled`,`fitInkBarToContent`],[1,`mdc-tab__ripple`],[`mat-ripple`,``,1,`mat-mdc-tab-ripple`,3,`matRippleTrigger`,`matRippleDisabled`],[1,`mdc-tab__content`],[1,`mdc-tab__text-label`],[3,`cdkPortalOutlet`],[`role`,`tabpanel`,3,`_onCentered`,`_onCentering`,`_beforeCentering`,`id`,`content`,`position`,`animationDuration`,`preserveContent`]],template:function(m,r){m&1&&(fC(),ji(0,`mat-tab-header`,3,0),Kg(`indexFocused`,function(b){return r._focusChanged(b)})(`selectFocusedIndex`,function(b){return r.selectedIndex=b}),Xw(2,u,8,17,`div`,4,Jw),xl(),Yw(4,v,1,0),ji(5,`div`,5,1),Xw(7,d,1,10,`mat-tab-body`,6,Jw),xl()),m&2&&(Ug(`selectedIndex`,r.selectedIndex||0)(`disableRipple`,r.disableRipple)(`disablePagination`,r.disablePagination),Hg(`aria-label`,r.ariaLabel)(`aria-labelledby`,r.ariaLabelledby),gD(2),eC(r._tabs),gD(2),Kw(r._isServer?4:-1),gD(),cm(`_mat-animation-noopable`,r._bodyAnimationsDisabled()),gD(2),eC(r._tabs))},dependencies:[Ze,Re,Em,t0,pS,Dt],styles:[`.mdc-tab {
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
`],encapsulation:2,changeDetection:1})})()}return a})();var Nt=class{index;tab};var Ee=(()=>{class a{static ɵfac=function(e){return new(e||a)};static ɵmod=ow({type:a});static ɵinj=Ku({imports:[Sv]})}return a})();function Je(a,c){}var ct=class a{userId=Q1.required();static ɵfac=function(t){return new(t||a)};static ɵcmp=nw({type:a,selectors:[[`app-mainboard`]],inputs:{userId:[1,`userId`]},decls:3,vars:0,consts:[[`dynamicHeight`,``],[`label`,`Libraries`],[`matTabContent`,``]],template:function(t,e){t&1&&(ji(0,`mat-tab-group`,0)(1,`mat-tab`,1),Sg(2,Je,0,0,`ng-template`,2),xl()())},dependencies:[Ee,Pt,Lt,Be],encapsulation:2})};var ta=()=>[`/UserAccount/ProfileSetting`];function ea(a,c){if(a&1&&$g(0,`img`,2),a&2){let t=uC();Ug(`ngSrc`,t.profileInfo().avatarUrl)}}function aa(a,c){a&1&&(ji(0,`mat-icon`,3),$C(1,`account_circle`),xl())}function na(a,c){a&1&&(ji(0,`a`,7)(1,`mat-icon`),$C(2,`person_edit`),xl(),$C(3,` Edit Profile `),xl()),a&2&&Ug(`routerLink`,XC(1,ta))}function ia(a,c){a&1&&$g(0,`app-wait-spinner`)}var Ae=class a{identityService=v(qc);profileService=v(p);activatedRoute=v(Ve$1);router=v(Et);params=Ie(this.activatedRoute.paramMap);userId=nt(()=>this.params()?.get(`userId`)??this.identityService.myIdentityInfo.value()?.id);isMe=nt(()=>this.userId()&&this.userId()===this.identityService.myIdentityInfo.value()?.id);otherProfileInfo=qi(()=>this.isMe()?void 0:this.profileService.profileInfoUrl+this.userId());profileInfo=nt(()=>this.isMe()?this.profileService.myProfileInfo.value():this.otherProfileInfo.value());otherProfileUsername=qi(()=>this.isMe()?void 0:this.identityService.GetUsernameUrl+this.userId());profileUsername=nt(()=>this.isMe()?this.identityService.myIdentityInfo.value()?.userName:this.otherProfileUsername.value());displayWaitSpinner=yt(!1);constructor(){this.userId()||this.router.navigate([`/Identity/Login`])}static ɵfac=function(t){return new(t||a)};static ɵcmp=nw({type:a,selectors:[[`app-profile`]],decls:18,vars:7,consts:[[`appearance`,`outlined`],[2,`float`,`inline-start`,`position`,`relative`],[`priority`,``,`width`,`100`,`height`,`100`,`alt`,`user image`,`id`,`user-profile-img`,3,`ngSrc`],[2,`font-size`,`100px`,`width`,`100px`,`height`,`100px`],[1,`persian-font`,2,`margin`,`0`],[1,`clearfix`],[`align`,`end`],[`matButton`,``,3,`routerLink`],[3,`userId`]],template:function(t,e){t&1&&(ji(0,`mat-card`,0)(1,`mat-card-header`)(2,`div`,1),Yw(3,ea,1,1,`img`,2)(4,aa,2,0,`mat-icon`,3),xl(),ji(5,`div`,1)(6,`mat-card-title`)(7,`p`,4),$C(8),xl()(),ji(9,`mat-card-subtitle`),$C(10),xl()()(),ji(11,`mat-card-content`,5)(12,`pre`),$C(13),xl()(),ji(14,`mat-card-actions`,6),Yw(15,na,4,2,`a`,7),xl()(),$g(16,`app-mainboard`,8),Yw(17,ia,1,0,`app-wait-spinner`)),t&2&&(gD(3),Kw(e.profileInfo()?.avatarUrl?3:4),gD(5),Pl(` `,e.profileInfo()?.name,` `),gD(2),Pl(` @`,e.profileUsername(),` `),gD(3),vm(e.profileInfo()?.description),gD(2),Kw(e.isMe()?15:-1),gD(),Ug(`userId`,e.userId()),gD(),Kw(e.displayWaitSpinner()?17:-1))},dependencies:[F,_,T,k,j,z,A,Nv,x0,ap,U,oc,ct],styles:[`mat-card[_ngcontent-%COMP%]{width:50vw;min-width:370px;margin:0 auto 16px;display:block}img#user-profile-img[_ngcontent-%COMP%]{width:100px;height:100px;object-fit:cover;border-radius:50%;overflow:hidden}mat-card-title[_ngcontent-%COMP%]{margin:16px}mat-card-subtitle[_ngcontent-%COMP%]{margin:0 16px;letter-spacing:1px}`]})};export{Ae as Profile};