import{c as Re,d as ee,g as re,h as oe,i as Le,l as ae,m as le,n as Ee,o as Oe,p as je,r as Fe,s as Pe,t as Be}from"./chunk-DcnuKlH9.js";import{A as _o,C as Uc,E as WS,F as ee$1,G as rc,H as ni,J as tp,K as sg,M as c0,N as d0,O as Zo,Q as z,R as ia$1,S as Te,U as pn,V as mm,Y as vC,_ as P_,b as Qn$1,f as Lm,g as Ny,h as Ne,i as Ce,j as _r,k as _C,l as Jn$1,o as Dt,p as Me,r as Am,t as c,u as Jt,v as Pc,x as Sy,y as Pl}from"./main-SR7ULYPV.js";import{a as Ns,c as da$1,d as kr,i as Ms,l as ga,m as xr,n as Bl,o as Pt,r as Cs,s as Ss,t as $n$1,u as jo}from"./chunk-B7MENAN7.js";import{A as ID,Ar as yC,Cn as jC,Ct as TC,D as Gy,Dn as kg,Dr as x,Dt as Ue,E as Gg,H as K,Ht as Yy,In as nC,Kn as ob,M as Ic,N as Ij,Nn as lw,O as Hi,Or as xd,Pn as mt,Pr as zg,Pt as Wr,Q as Nj,Qt as bs,Rn as nd,Sn as iv,Sr as wC,T as Fr,Tr as wm,Vn as nr,Wn as oC,X as Mi,Xn as pm,Xt as av,Yn as ov,Yt as am,Zn as qg,Zt as aw,_n as iC,_r as vC$1,_t as S,b as Ej,bn as is,bt as Sj,c as Ay,cn as fe$1,ct as QC,dn as gC,dr as tb,dt as Qy,en as eC,er as rC,fn as gn,ft as RE,g as Dj,gr as v,h as Dh,j as IT,jt as Vl,k as IC,ln as fm,lr as sv,lt as Qe,m as DC,mn as hE,mt as Rl,nn as ee$2,nt as Og,on as fC,or as se,q as Lg,qn as om,qt as _j,r as $r,rr,s as At,un as fw,ut as Qg,vn as ib,vr as vT,vt as Sd,w as Fe$1,x as Et,xn as it,xr as w,yn as im,zn as nm}from"./chunk-kniop8OV.js";function xn(n,s){let e=!s?.manualCleanup?s?.injector?.get(fe$1)??v(fe$1):null,a=Pn(s?.equal),i;s?.requireSync?i=Et({kind:0},{equal:a}):i=Et({kind:1,value:s?.initialValue},{equal:a});let o,l=n.subscribe({next:c=>i.set({kind:1,value:c}),error:c=>{i.set({kind:2,error:c}),o?.()},complete:()=>{o?.()}});if(s?.requireSync&&i().kind===0)throw new w(601,!1);return o=e?.onDestroy(l.unsubscribe.bind(l)),it(()=>{let c=i();switch(c.kind){case 1:return c.value;case 2:throw c.error;case 0:throw new w(601,!1)}},{equal:s?.equal})}function Pn(n=Object.is){return(s,t)=>s.kind===1&&t.kind===1&&n(s.value,t.value)}var zn=new S(`MatTabContent`);var fe=(()=>{class n{template=v(Fr);static ɵfac=function(e){return new(e||n)};static ɵdir=fw({type:n,selectors:[[``,`matTabContent`,``]],features:[tb([{provide:zn,useExisting:n}])]})}return n})();var Vn=new S(`MatTabLabel`);var Sn=new S(`MAT_TAB`);var jn=(()=>{class n extends c0{_closestTab=v(Sn,{optional:!0});static ɵfac=(()=>{let t;return function(a){return(t||(t=RE(n)))(a||n)}})();static ɵdir=fw({type:n,selectors:[[``,`mat-tab-label`,``],[``,`matTabLabel`,``]],features:[tb([{provide:Vn,useExisting:n}]),Og]})}return n})();var Tn=new S(`MAT_TAB_GROUP`);var _e=(()=>{class n{_viewContainerRef=v(is);_closestTabGroup=v(Tn,{optional:!0});disabled=!1;get templateLabel(){return this._templateLabel}set templateLabel(t){this._setTemplateLabelInput(t)}_templateLabel;_explicitContent=void 0;_implicitContent;textLabel=``;ariaLabel;ariaLabelledby;labelClass;bodyClass;id=null;_contentPortal=null;get content(){return this._contentPortal}_stateChanges=new ee$2;position=null;origin=null;isActive=!1;constructor(){v(Dt).load(Pc)}ngOnChanges(t){(Object.hasOwn(t,`textLabel`)||Object.hasOwn(t,`disabled`))&&this._stateChanges.next()}ngOnDestroy(){this._stateChanges.complete()}ngOnInit(){this._contentPortal=new ni(this._explicitContent||this._implicitContent,this._viewContainerRef)}_setTemplateLabelInput(t){t&&t._closestTab===this&&(this._templateLabel=t)}static ɵfac=function(e){return new(e||n)};static ɵcmp=(function(){let t=[`*`];function e(a,i){a&1&&vC$1(0)}return aw({type:n,selectors:[[`mat-tab`]],contentQueries:function(i,o,l){if(i&1&&om(l,jn,5)(l,fe,7,Fr),i&2){let c;IC(c=DC())&&(o.templateLabel=c.first),IC(c=DC())&&(o._explicitContent=c.first)}},viewQuery:function(i,o){if(i&1&&im(Fr,7),i&2){let l;IC(l=DC())&&(o._implicitContent=l.first)}},hostAttrs:[`hidden`,``],hostVars:1,hostBindings:function(i,o){i&2&&qg(`id`,null)},inputs:{disabled:[2,`disabled`,`disabled`,Nj],textLabel:[0,`label`,`textLabel`],ariaLabel:[0,`aria-label`,`ariaLabel`],ariaLabelledby:[0,`aria-labelledby`,`ariaLabelledby`],labelClass:`labelClass`,bodyClass:`bodyClass`,id:`id`},exportAs:[`matTab`],features:[tb([{provide:Sn,useExisting:n}]),hE],ngContentSelectors:t,decls:1,vars:0,template:function(i,o){i&1&&(yC(),Lg(0,e,1,0,`ng-template`))},encapsulation:2,changeDetection:1})})()}return n})();var be=`mdc-tab-indicator--active`;var Cn=`mdc-tab-indicator--no-transition`;var ue=class{_items;_currentItem;constructor(s){this._items=s}hide(){this._items.forEach(s=>s.deactivateInkBar()),this._currentItem=void 0}alignToElement(s){let t=this._items.find(a=>a.elementRef.nativeElement===s),e=this._currentItem;if(t!==e&&(e?.deactivateInkBar(),t)){let a=e?.elementRef.nativeElement.getBoundingClientRect?.();t.activateInkBar(a),this._currentItem=t}}};var Hn=(()=>{class n{_elementRef=v(Wr);_inkBarElement=null;_inkBarContentElement=null;_fitToContent=!1;get fitInkBarToContent(){return this._fitToContent}set fitInkBarToContent(t){this._fitToContent!==t&&(this._fitToContent=t,this._inkBarElement&&this._appendInkBarElement())}activateInkBar(t){let e=this._elementRef.nativeElement;if(!t||!e.getBoundingClientRect||!this._inkBarContentElement){e.classList.add(be);return}let a=e.getBoundingClientRect(),i=t.width/a.width,o=t.left-a.left;e.classList.add(Cn),this._inkBarContentElement.style.setProperty(`transform`,`translateX(${o}px) scaleX(${i})`),e.getBoundingClientRect(),e.classList.remove(Cn),e.classList.add(be),this._inkBarContentElement.style.setProperty(`transform`,``)}deactivateInkBar(){this._elementRef.nativeElement.classList.remove(be)}ngOnInit(){this._createInkBarElement()}ngOnDestroy(){this._inkBarElement?.remove(),this._inkBarElement=this._inkBarContentElement=null}_createInkBarElement(){let t=this._elementRef.nativeElement.ownerDocument||document,e=this._inkBarElement=t.createElement(`span`),a=this._inkBarContentElement=t.createElement(`span`);e.className=`mdc-tab-indicator`,a.className=`mdc-tab-indicator__content mdc-tab-indicator__content--underline`,e.appendChild(this._inkBarContentElement),this._appendInkBarElement()}_appendInkBarElement(){this._inkBarElement;(this._fitToContent?this._elementRef.nativeElement.querySelector(`.mdc-tab__content`):this._elementRef.nativeElement).appendChild(this._inkBarElement)}static ɵfac=function(e){return new(e||n)};static ɵdir=fw({type:n,inputs:{fitInkBarToContent:[2,`fitInkBarToContent`,`fitInkBarToContent`,Nj]}})}return n})();var Mn=(()=>{class n extends Hn{elementRef=v(Wr);disabled=!1;focus(){this.elementRef.nativeElement.focus()}getOffsetLeft(){return this.elementRef.nativeElement.offsetLeft}getOffsetWidth(){return this.elementRef.nativeElement.offsetWidth}static ɵfac=(()=>{let t;return function(a){return(t||(t=RE(n)))(a||n)}})();static ɵdir=fw({type:n,selectors:[[``,`matTabLabelWrapper`,``]],hostVars:3,hostBindings:function(e,a){e&2&&(qg(`aria-disabled`,!!a.disabled),pm(`mat-mdc-tab-disabled`,a.disabled))},inputs:{disabled:[2,`disabled`,`disabled`,Nj]},features:[Og]})}return n})();var kn={passive:!0};var Wn=650;var Qn=100;function pe(n){let s=n+``;return/^[0-9]+(?:\.[0-9]+)?$/.test(s)?`${n}ms`:/^[0-9]+(?:\.[0-9]+)?(?:ms|s)$/.test(s)?s:``}var Gn=(()=>{class n{_elementRef=v(Wr);_changeDetectorRef=v(_j);_viewportRuler=v(Qn$1);_dir=v(Te,{optional:!0});_ngZone=v(Fe$1);_platform=v(z);_sharedResizeObserver=v(xr);_injector=v(se);_renderer=v(Ic);_animationsDisabled=ee$1();_eventCleanups;_scrollDistance=0;_selectedIndexChanged=!1;_destroyed=new ee$2;_showPaginationControls=!1;_disableScrollAfter=!0;_disableScrollBefore=!0;_tabLabelCount;_scrollDistanceChanged=!1;_keyManager;_currentTextContent;_stopScrolling=new ee$2;disablePagination=!1;get selectedIndex(){return this._selectedIndex}set selectedIndex(t){let e=isNaN(t)?0:t;this._selectedIndex!=e&&(this._selectedIndexChanged=!0,this._selectedIndex=e,this._keyManager&&this._keyManager.updateActiveItem(e))}_selectedIndex=0;selectFocusedIndex=new Qe;indexFocused=new Qe;constructor(){this._eventCleanups=this._ngZone.runOutsideAngular(()=>[this._renderer.listen(this._elementRef.nativeElement,`mouseleave`,()=>this._stopInterval())])}ngAfterViewInit(){this._eventCleanups.push(this._renderer.listen(this._previousPaginator.nativeElement,`touchstart`,()=>this._handlePaginatorPress(`before`),kn),this._renderer.listen(this._nextPaginator.nativeElement,`touchstart`,()=>this._handlePaginatorPress(`after`),kn))}ngAfterContentInit(){let t=this._dir?this._dir.change:Ay(`ltr`),e=this._sharedResizeObserver.observe(this._elementRef.nativeElement).pipe(Qy(32),av(this._destroyed)),a=this._viewportRuler.change(150).pipe(av(this._destroyed)),i=()=>{this.updatePagination(),this._alignInkBarToSelectedTab()};this._keyManager=new ia$1(this._items).withHorizontalOrientation(this._getLayoutDirection()).withHomeAndEnd().withWrap().skipPredicate(()=>!1),this._keyManager.updateActiveItem(Math.max(this._selectedIndex,0)),Dh(i,{injector:this._injector}),Gy(t,a,e,this._items.changes,this._itemsResized()).pipe(av(this._destroyed)).subscribe(()=>{this._ngZone.run(()=>{Promise.resolve().then(()=>{this._scrollDistance=Math.max(0,Math.min(this._getMaxScrollDistance(),this._scrollDistance)),i()})}),this._keyManager?.withHorizontalOrientation(this._getLayoutDirection())}),this._keyManager.change.subscribe(o=>{this.indexFocused.emit(o),this._setTabFocus(o)})}_itemsResized(){return typeof ResizeObserver!=`function`?At:this._items.changes.pipe(iv(this._items),sv(t=>new x(e=>this._ngZone.runOutsideAngular(()=>{let a=new ResizeObserver(i=>e.next(i));return t.forEach(i=>a.observe(i.elementRef.nativeElement)),()=>{a.disconnect()}}))),ov(1),rr(t=>t.some(e=>e.contentRect.width>0&&e.contentRect.height>0)))}ngAfterContentChecked(){this._tabLabelCount!=this._items.length&&(this.updatePagination(),this._tabLabelCount=this._items.length,this._changeDetectorRef.markForCheck()),this._selectedIndexChanged&&(this._scrollToLabel(this._selectedIndex),this._checkScrollingControls(),this._alignInkBarToSelectedTab(),this._selectedIndexChanged=!1,this._changeDetectorRef.markForCheck()),this._scrollDistanceChanged&&(this._updateTabScrollPosition(),this._scrollDistanceChanged=!1,this._changeDetectorRef.markForCheck())}ngOnDestroy(){this._eventCleanups.forEach(t=>t()),this._keyManager?.destroy(),this._destroyed.next(),this._destroyed.complete(),this._stopScrolling.complete()}_handleKeydown(t){if(!_r(t))switch(t.keyCode){case 13:case 32:if(this.focusIndex!==this.selectedIndex){let e=this._items.get(this.focusIndex);e&&!e.disabled&&(this.selectFocusedIndex.emit(this.focusIndex),this._itemSelected(t))}break;default:this._keyManager?.onKeydown(t)}}_onContentChanges(){let t=this._elementRef.nativeElement.textContent;t!==this._currentTextContent&&(this._currentTextContent=t||``,this._ngZone.run(()=>{this.updatePagination(),this._alignInkBarToSelectedTab(),this._changeDetectorRef.markForCheck()}))}updatePagination(){this._checkPaginationEnabled(),this._checkScrollingControls(),this._updateTabScrollPosition()}get focusIndex(){return this._keyManager?this._keyManager.activeItemIndex:0}set focusIndex(t){!this._isValidIndex(t)||this.focusIndex===t||!this._keyManager||this._keyManager.setActiveItem(t)}_isValidIndex(t){return this._items?!!this._items.toArray()[t]:!0}_setTabFocus(t){if(this._showPaginationControls&&this._scrollToLabel(t),this._items&&this._items.length){this._items.toArray()[t].focus();let e=this._tabListContainer.nativeElement;this._getLayoutDirection()==`ltr`?e.scrollLeft=0:e.scrollLeft=e.scrollWidth-e.offsetWidth}}_getLayoutDirection(){return this._dir&&this._dir.value===`rtl`?`rtl`:`ltr`}_updateTabScrollPosition(){if(this.disablePagination)return;let t=this.scrollDistance,e=this._getLayoutDirection()===`ltr`?-t:t;this._tabList.nativeElement.style.transform=`translateX(${Math.round(e)}px)`,(this._platform.TRIDENT||this._platform.EDGE)&&(this._tabListContainer.nativeElement.scrollLeft=0)}get scrollDistance(){return this._scrollDistance}set scrollDistance(t){this._scrollTo(t)}_scrollHeader(t){let e=this._tabListContainer.nativeElement.offsetWidth,a=(t==`before`?-1:1)*e/3;return this._scrollTo(this._scrollDistance+a)}_handlePaginatorClick(t){this._stopInterval(),this._scrollHeader(t)}_scrollToLabel(t){if(this.disablePagination)return;let e=this._items?this._items.toArray()[t]:null;if(!e)return;let a=this._tabListContainer.nativeElement.offsetWidth,{offsetLeft:i,offsetWidth:o}=e.elementRef.nativeElement,l,c;this._getLayoutDirection()==`ltr`?(l=i,c=l+o):(c=this._tabListInner.nativeElement.offsetWidth-i,l=c-o);let g=this.scrollDistance,b=this.scrollDistance+a;l<g?this.scrollDistance-=g-l:c>b&&(this.scrollDistance+=Math.min(c-b,l-g))}_checkPaginationEnabled(){if(this.disablePagination)this._showPaginationControls=!1;else{let a=this._tabListInner.nativeElement.scrollWidth-this._elementRef.nativeElement.offsetWidth>=5;a||(this.scrollDistance=0),a!==this._showPaginationControls&&(this._showPaginationControls=a,this._changeDetectorRef.markForCheck())}}_checkScrollingControls(){this.disablePagination?this._disableScrollAfter=this._disableScrollBefore=!0:(this._disableScrollBefore=this.scrollDistance==0,this._disableScrollAfter=this.scrollDistance==this._getMaxScrollDistance(),this._changeDetectorRef.markForCheck())}_getMaxScrollDistance(){return this._tabListInner.nativeElement.scrollWidth-this._tabListContainer.nativeElement.offsetWidth||0}_alignInkBarToSelectedTab(){let t=this._items&&this._items.length?this._items.toArray()[this.selectedIndex]:null,e=t?t.elementRef.nativeElement:null;e?this._inkBar.alignToElement(e):this._inkBar.hide()}_stopInterval(){this._stopScrolling.next()}_handlePaginatorPress(t,e){e&&e.button!=null&&e.button!==0||(this._stopInterval(),nr(Wn,Qn).pipe(av(Gy(this._stopScrolling,this._destroyed))).subscribe(()=>{let{maxScrollDistance:a,distance:i}=this._scrollHeader(t);(i===0||i>=a)&&this._stopInterval()}))}_scrollTo(t){if(this.disablePagination)return{maxScrollDistance:0,distance:0};let e=this._getMaxScrollDistance();return this._scrollDistance=Math.max(0,Math.min(e,t)),this._scrollDistanceChanged=!0,this._checkScrollingControls(),{maxScrollDistance:e,distance:this._scrollDistance}}static ɵfac=function(e){return new(e||n)};static ɵdir=fw({type:n,inputs:{disablePagination:[2,`disablePagination`,`disablePagination`,Nj],selectedIndex:[2,`selectedIndex`,`selectedIndex`,Sj]},outputs:{selectFocusedIndex:`selectFocusedIndex`,indexFocused:`indexFocused`}})}return n})();var $n=(()=>{class n extends Gn{_items;_tabListContainer;_tabList;_tabListInner;_nextPaginator;_previousPaginator;_inkBar;ariaLabel;ariaLabelledby;disableRipple=!1;ngAfterContentInit(){this._inkBar=new ue(this._items),super.ngAfterContentInit()}_itemSelected(t){t.preventDefault()}static ɵfac=(()=>{let t;return function(a){return(t||(t=RE(n)))(a||n)}})();static ɵcmp=(function(){let t=[`tabListContainer`],e=[`tabList`],a=[`tabListInner`],i=[`nextPaginator`],o=[`previousPaginator`];return aw({type:n,selectors:[[`mat-tab-header`]],contentQueries:function(g,b,h){if(g&1&&om(h,Mn,4),g&2){let f;IC(f=DC())&&(b._items=f)}},viewQuery:function(g,b){if(g&1&&im(t,7)(e,7)(a,7)(i,5)(o,5),g&2){let h;IC(h=DC())&&(b._tabListContainer=h.first),IC(h=DC())&&(b._tabList=h.first),IC(h=DC())&&(b._tabListInner=h.first),IC(h=DC())&&(b._nextPaginator=h.first),IC(h=DC())&&(b._previousPaginator=h.first)}},hostAttrs:[1,`mat-mdc-tab-header`],hostVars:4,hostBindings:function(g,b){g&2&&pm(`mat-mdc-tab-header-pagination-controls-enabled`,b._showPaginationControls)(`mat-mdc-tab-header-rtl`,b._getLayoutDirection()==`rtl`)},inputs:{ariaLabel:[0,`aria-label`,`ariaLabel`],ariaLabelledby:[0,`aria-labelledby`,`ariaLabelledby`],disableRipple:[2,`disableRipple`,`disableRipple`,Nj]},features:[Og],ngContentSelectors:[`*`],decls:13,vars:10,consts:[[`previousPaginator`,``],[`tabListContainer`,``],[`tabList`,``],[`tabListInner`,``],[`nextPaginator`,``],[`mat-ripple`,``,1,`mat-mdc-tab-header-pagination`,`mat-mdc-tab-header-pagination-before`,3,`click`,`mousedown`,`touchend`,`matRippleDisabled`],[1,`mat-mdc-tab-header-pagination-chevron`],[1,`mat-mdc-tab-label-container`,3,`keydown`],[`role`,`tablist`,1,`mat-mdc-tab-list`,3,`cdkObserveContent`],[1,`mat-mdc-tab-labels`],[`mat-ripple`,``,1,`mat-mdc-tab-header-pagination`,`mat-mdc-tab-header-pagination-after`,3,`mousedown`,`click`,`touchend`,`matRippleDisabled`]],template:function(g,b){g&1&&(yC(),Hi(0,`div`,5,0),nm(`click`,function(){return b._handlePaginatorClick(`before`)})(`mousedown`,function(f){return b._handlePaginatorPress(`before`,f)})(`touchend`,function(){return b._stopInterval()}),Qg(2,`div`,6),Rl(),Hi(3,`div`,7,1),nm(`keydown`,function(f){return b._handleKeydown(f)}),Hi(5,`div`,8,2),nm(`cdkObserveContent`,function(){return b._onContentChanges()}),Hi(7,`div`,9,3),vC$1(9),Rl()()(),Hi(10,`div`,10,4),nm(`mousedown`,function(f){return b._handlePaginatorPress(`after`,f)})(`click`,function(){return b._handlePaginatorClick(`after`)})(`touchend`,function(){return b._stopInterval()}),Qg(12,`div`,6),Rl()),g&2&&(pm(`mat-mdc-tab-header-pagination-disabled`,b._disableScrollBefore),zg(`matRippleDisabled`,b._disableScrollBefore||b.disableRipple),ID(3),pm(`_mat-animation-noopable`,b._animationsDisabled),ID(2),qg(`aria-label`,b.ariaLabel||null)(`aria-labelledby`,b.ariaLabelledby||null),ID(5),pm(`mat-mdc-tab-header-pagination-disabled`,b._disableScrollAfter),zg(`matRippleDisabled`,b._disableScrollAfter||b.disableRipple))},dependencies:[WS,P_],styles:[`.mat-mdc-tab-header {
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
`],encapsulation:2,changeDetection:1})})()}return n})();var qn=new S(`MAT_TABS_CONFIG`);var In=(()=>{class n extends d0{_host=v(he);_ngZone=v(Fe$1);_centeringSub=K.EMPTY;_leavingSub=K.EMPTY;ngOnInit(){super.ngOnInit(),this._centeringSub=this._host._beforeCentering.pipe(iv(this._host._isCenterPosition())).subscribe(t=>{this._host._content&&t&&!this.hasAttached()&&this._ngZone.run(()=>{Promise.resolve().then(),this.attach(this._host._content)})}),this._leavingSub=this._host._afterLeavingCenter.subscribe(()=>{this._host.preserveContent||this._ngZone.run(()=>this.detach())})}ngOnDestroy(){super.ngOnDestroy(),this._centeringSub.unsubscribe(),this._leavingSub.unsubscribe()}static ɵfac=(()=>{let t;return function(a){return(t||(t=RE(n)))(a||n)}})();static ɵdir=fw({type:n,selectors:[[``,`matTabBodyHost`,``]],features:[Og]})}return n})();var he=(()=>{class n{_elementRef=v(Wr);_dir=v(Te,{optional:!0});_ngZone=v(Fe$1);_injector=v(se);_renderer=v(Ic);_diAnimationsDisabled=ee$1();_eventCleanups;_initialized=!1;_fallbackTimer;_positionIndex;_dirChangeSubscription=K.EMPTY;_position;_previousPosition;_onCentering=new Qe;_beforeCentering=new Qe;_afterLeavingCenter=new Qe;_onCentered=new Qe(!0);_portalHost;_contentElement;_content;animationDuration=`500ms`;preserveContent=!1;set position(t){this._positionIndex=t,this._computePositionAnimationState()}constructor(){if(this._dir){let t=v(_j);this._dirChangeSubscription=this._dir.change.subscribe(e=>{this._computePositionAnimationState(e),t.markForCheck()})}}ngOnInit(){this._bindTransitionEvents(),this._position===`center`&&(this._setActiveClass(!0),Dh(()=>this._onCentering.emit(this._elementRef.nativeElement.clientHeight),{injector:this._injector})),this._initialized=!0}ngOnDestroy(){clearTimeout(this._fallbackTimer),this._eventCleanups?.forEach(t=>t()),this._dirChangeSubscription.unsubscribe()}_bindTransitionEvents(){this._ngZone.runOutsideAngular(()=>{let t=this._elementRef.nativeElement,e=a=>{a.target===this._contentElement?.nativeElement&&(this._elementRef.nativeElement.classList.remove(`mat-tab-body-animating`),a.type===`transitionend`&&this._transitionDone())};this._eventCleanups=[this._renderer.listen(t,`transitionstart`,a=>{a.target===this._contentElement?.nativeElement&&(this._elementRef.nativeElement.classList.add(`mat-tab-body-animating`),this._transitionStarted())}),this._renderer.listen(t,`transitionend`,e),this._renderer.listen(t,`transitioncancel`,e)]})}_transitionStarted(){clearTimeout(this._fallbackTimer);let t=this._position===`center`;this._beforeCentering.emit(t),t&&this._onCentering.emit(this._elementRef.nativeElement.clientHeight)}_transitionDone(){this._position===`center`?this._onCentered.emit():this._previousPosition===`center`&&this._afterLeavingCenter.emit()}_setActiveClass(t){this._elementRef.nativeElement.classList.toggle(`mat-mdc-tab-body-active`,t)}_getLayoutDirection(){return this._dir&&this._dir.value===`rtl`?`rtl`:`ltr`}_isCenterPosition(){return this._positionIndex===0}_computePositionAnimationState(t=this._getLayoutDirection()){this._previousPosition=this._position,this._positionIndex<0?this._position=t==`ltr`?`left`:`right`:this._positionIndex>0?this._position=t==`ltr`?`right`:`left`:this._position=`center`,this._animationsDisabled()?this._simulateTransitionEvents():this._initialized&&(this._position===`center`||this._previousPosition===`center`)&&(clearTimeout(this._fallbackTimer),this._fallbackTimer=this._ngZone.runOutsideAngular(()=>setTimeout(()=>this._simulateTransitionEvents(),100)))}_simulateTransitionEvents(){this._transitionStarted(),Dh(()=>this._transitionDone(),{injector:this._injector})}_animationsDisabled(){return this._diAnimationsDisabled||this.animationDuration===`0ms`||this.animationDuration===`0s`}static ɵfac=function(e){return new(e||n)};static ɵcmp=(function(){let t=[`content`];function e(a,i){}return aw({type:n,selectors:[[`mat-tab-body`]],viewQuery:function(i,o){if(i&1&&im(In,5)(t,5),i&2){let l;IC(l=DC())&&(o._portalHost=l.first),IC(l=DC())&&(o._contentElement=l.first)}},hostAttrs:[1,`mat-mdc-tab-body`],hostVars:1,hostBindings:function(i,o){i&2&&qg(`inert`,o._position===`center`?null:``)},inputs:{_content:[0,`content`,`_content`],animationDuration:`animationDuration`,preserveContent:`preserveContent`,position:`position`},outputs:{_onCentering:`_onCentering`,_beforeCentering:`_beforeCentering`,_onCentered:`_onCentered`},decls:3,vars:6,consts:[[`content`,``],[`cdkScrollable`,``,1,`mat-mdc-tab-body-content`],[`matTabBodyHost`,``]],template:function(i,o){i&1&&(Hi(0,`div`,1,0),kg(2,e,0,0,`ng-template`,2),Rl()),i&2&&pm(`mat-tab-body-content-left`,o._position===`left`)(`mat-tab-body-content-right`,o._position===`right`)(`mat-tab-body-content-can-animate`,o._position===`center`||o._previousPosition===`center`)},dependencies:[In,Lm],styles:[`.mat-mdc-tab-body {
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
`],encapsulation:2,changeDetection:1})})()}return n})();var Dn=(()=>{class n{_elementRef=v(Wr);_changeDetectorRef=v(_j);_ngZone=v(Fe$1);_tabsSubscription=K.EMPTY;_tabLabelSubscription=K.EMPTY;_tabBodySubscription=K.EMPTY;_diAnimationsDisabled=ee$1();_bodyAnimationDuration;_headerAnimationDuration;_allTabs;_tabBodies;_tabBodyWrapper;_tabHeader;_tabs=new Mi;_indexToSelect=0;_lastFocusedTabIndex=null;_tabBodyWrapperHeight=0;color;get fitInkBarToContent(){return this._fitInkBarToContent}set fitInkBarToContent(t){this._fitInkBarToContent=t,this._changeDetectorRef.markForCheck()}_fitInkBarToContent=!1;stretchTabs=!0;alignTabs=null;dynamicHeight=!1;get selectedIndex(){return this._selectedIndex}set selectedIndex(t){this._indexToSelect=isNaN(t)?null:t}_selectedIndex=null;headerPosition=`above`;get animationDuration(){return this._animationDuration}set animationDuration(t){this._animationDuration=t,t&&typeof t==`object`?(this._bodyAnimationDuration=pe(t.body),this._headerAnimationDuration=pe(t.header)):this._headerAnimationDuration=this._bodyAnimationDuration=pe(t)}_animationDuration;get contentTabIndex(){return this._contentTabIndex}set contentTabIndex(t){this._contentTabIndex=isNaN(t)?null:t}_contentTabIndex=null;disablePagination=!1;disableRipple=!1;preserveContent=!1;get backgroundColor(){return this._backgroundColor}set backgroundColor(t){let e=this._elementRef.nativeElement.classList;e.remove(`mat-tabs-with-background`,`mat-background-${this.backgroundColor}`),t&&e.add(`mat-tabs-with-background`,`mat-background-${t}`),this._backgroundColor=t}_backgroundColor;ariaLabel;ariaLabelledby;selectedIndexChange=new Qe;focusChange=new Qe;animationDone=new Qe;selectedTabChange=new Qe(!0);_groupId;_isServer=!v(z).isBrowser;constructor(){let t=v(qn,{optional:!0});this._groupId=v(Jn$1).getId(`mat-tab-group-`),this.animationDuration=t&&t.animationDuration?t.animationDuration:`500ms`,this.disablePagination=t&&t.disablePagination!=null?t.disablePagination:!1,this.dynamicHeight=t&&t.dynamicHeight!=null?t.dynamicHeight:!1,t?.contentTabIndex!=null&&(this.contentTabIndex=t.contentTabIndex),this.preserveContent=!!t?.preserveContent,this.fitInkBarToContent=t&&t.fitInkBarToContent!=null?t.fitInkBarToContent:!1,this.stretchTabs=t&&t.stretchTabs!=null?t.stretchTabs:!0,this.alignTabs=t&&t.alignTabs!=null?t.alignTabs:null}ngAfterContentChecked(){let t=this._indexToSelect=this._clampTabIndex(this._indexToSelect);if(this._selectedIndex!=t){let e=this._selectedIndex==null;if(!e){this.selectedTabChange.emit(this._createChangeEvent(t));let a=this._tabBodyWrapper.nativeElement;a.style.minHeight=a.clientHeight+`px`}Promise.resolve().then(()=>{this._tabs.forEach((a,i)=>a.isActive=i===t),e||(this.selectedIndexChange.emit(t),this._tabBodyWrapper.nativeElement.style.minHeight=``)})}this._tabs.forEach((e,a)=>{e.position=a-t,this._selectedIndex!=null&&e.position==0&&!e.origin&&(e.origin=t-this._selectedIndex)}),this._selectedIndex!==t&&(this._selectedIndex=t,this._lastFocusedTabIndex=null,this._changeDetectorRef.markForCheck())}ngAfterContentInit(){this._subscribeToAllTabChanges(),this._subscribeToTabLabels(),this._tabsSubscription=this._tabs.changes.subscribe(()=>{let t=this._clampTabIndex(this._indexToSelect);if(t===this._selectedIndex){let e=this._tabs.toArray(),a;for(let i=0;i<e.length;i++)if(e[i].isActive){this._indexToSelect=this._selectedIndex=i,this._lastFocusedTabIndex=null,a=e[i];break}!a&&e[t]&&Promise.resolve().then(()=>{e[t].isActive=!0,this.selectedTabChange.emit(this._createChangeEvent(t))})}this._changeDetectorRef.markForCheck()})}ngAfterViewInit(){this._tabBodySubscription=this._tabBodies.changes.subscribe(()=>this._bodyCentered(!0))}_subscribeToAllTabChanges(){this._allTabs.changes.pipe(iv(this._allTabs)).subscribe(t=>{this._tabs.reset(t.filter(e=>e._closestTabGroup===this||!e._closestTabGroup)),this._tabs.notifyOnChanges()})}ngOnDestroy(){this._tabs.destroy(),this._tabsSubscription.unsubscribe(),this._tabLabelSubscription.unsubscribe(),this._tabBodySubscription.unsubscribe()}realignInkBar(){this._tabHeader&&this._tabHeader._alignInkBarToSelectedTab()}updatePagination(){this._tabHeader&&this._tabHeader.updatePagination()}focusTab(t){let e=this._tabHeader;e&&(e.focusIndex=t)}_focusChanged(t){this._lastFocusedTabIndex=t,this.focusChange.emit(this._createChangeEvent(t))}_createChangeEvent(t){let e=new ge;return e.index=t,this._tabs&&this._tabs.length&&(e.tab=this._tabs.toArray()[t]),e}_subscribeToTabLabels(){this._tabLabelSubscription&&this._tabLabelSubscription.unsubscribe(),this._tabLabelSubscription=Gy(...this._tabs.map(t=>t._stateChanges)).subscribe(()=>this._changeDetectorRef.markForCheck())}_clampTabIndex(t){return Math.min(this._tabs.length-1,Math.max(t||0,0))}_getTabLabelId(t,e){return t.id||`${this._groupId}-label-${e}`}_getTabContentId(t){return`${this._groupId}-content-${t}`}_setTabBodyWrapperHeight(t){if(!this.dynamicHeight||!this._tabBodyWrapperHeight){this._tabBodyWrapperHeight=t;return}let e=this._tabBodyWrapper.nativeElement;e.style.height=this._tabBodyWrapperHeight+`px`,this._tabBodyWrapper.nativeElement.offsetHeight&&(e.style.height=t+`px`)}_removeTabBodyWrapperHeight(){let t=this._tabBodyWrapper.nativeElement;this._tabBodyWrapperHeight=t.clientHeight,t.style.height=``,this._ngZone.run(()=>this.animationDone.emit())}_handleClick(t,e,a){e.focusIndex=a,t.disabled||(this.selectedIndex=a)}_getTabIndex(t){return t===(this._lastFocusedTabIndex??this.selectedIndex)?0:-1}_tabFocusChanged(t,e){t&&t!==`mouse`&&t!==`touch`&&(this._tabHeader.focusIndex=e)}_bodyCentered(t){t&&this._tabBodies?.forEach((e,a)=>e._setActiveClass(a===this._selectedIndex))}_bodyAnimationsDisabled(){return this._diAnimationsDisabled||this._bodyAnimationDuration===`0`||this._bodyAnimationDuration===`0ms`}static ɵfac=function(e){return new(e||n)};static ɵcmp=(function(){let t=[`tabBodyWrapper`],e=[`tabHeader`],a=[`*`];function i(h,f){}function o(h,f){if(h&1&&kg(0,i,0,0,`ng-template`,12),h&2){let p=gC().$implicit;zg(`cdkPortalOutlet`,p.templateLabel)}}function l(h,f){if(h&1&&QC(0),h&2){let p=gC().$implicit;wm(p.textLabel)}}function c(h,f){if(h&1){let p=fC();Hi(0,`div`,7,2),nm(`click`,function(){let _=Sd(p),N=_.$implicit,Kt=_.$index,Rn=gC(),Bn=wC(1);return xd(Rn._handleClick(N,Bn,Kt))})(`cdkFocusChange`,function(_){let N=Sd(p).$index,Kt=gC();return xd(Kt._tabFocusChanged(_,N))}),Qg(2,`span`,8)(3,`div`,9),Hi(4,`span`,10)(5,`span`,11),eC(6,o,1,1,null,12)(7,l,1,1),Rl()()()}if(h&2){let p=f.$implicit,y=f.$index,_=wC(1),N=gC();jC(p.labelClass),pm(`mdc-tab--active`,N.selectedIndex===y),zg(`id`,N._getTabLabelId(p,y))(`disabled`,p.disabled)(`fitInkBarToContent`,N.fitInkBarToContent),qg(`tabIndex`,N._getTabIndex(y))(`aria-posinset`,y+1)(`aria-setsize`,N._tabs.length)(`aria-controls`,N._getTabContentId(y))(`aria-selected`,N.selectedIndex===y)(`aria-label`,p.ariaLabel||null)(`aria-labelledby`,!p.ariaLabel&&p.ariaLabelledby?p.ariaLabelledby:null),ID(3),zg(`matRippleTrigger`,_)(`matRippleDisabled`,p.disabled||N.disableRipple),ID(3),nC(p.templateLabel?6:7)}}function g(h,f){h&1&&vC$1(0)}function b(h,f){if(h&1){let p=fC();Hi(0,`mat-tab-body`,13),nm(`_onCentered`,function(){Sd(p);let _=gC();return xd(_._removeTabBodyWrapperHeight())})(`_onCentering`,function(_){Sd(p);let N=gC();return xd(N._setTabBodyWrapperHeight(_))})(`_beforeCentering`,function(_){Sd(p);let N=gC();return xd(N._bodyCentered(_))}),Rl()}if(h&2){let p=f.$implicit,y=f.$index,_=gC();jC(p.bodyClass),zg(`id`,_._getTabContentId(y))(`content`,p.content)(`position`,p.position)(`animationDuration`,_._bodyAnimationDuration)(`preserveContent`,_.preserveContent),qg(`tabindex`,_.contentTabIndex!=null&&_.selectedIndex===y?_.contentTabIndex:null)(`aria-labelledby`,_._getTabLabelId(p,y))(`aria-hidden`,_.selectedIndex!==y)}}return aw({type:n,selectors:[[`mat-tab-group`]],contentQueries:function(f,p,y){if(f&1&&om(y,_e,5),f&2){let _;IC(_=DC())&&(p._allTabs=_)}},viewQuery:function(f,p){if(f&1&&im(t,5)(e,5)(he,5),f&2){let y;IC(y=DC())&&(p._tabBodyWrapper=y.first),IC(y=DC())&&(p._tabHeader=y.first),IC(y=DC())&&(p._tabBodies=y)}},hostAttrs:[1,`mat-mdc-tab-group`],hostVars:13,hostBindings:function(f,p){f&2&&(qg(`mat-align-tabs`,p.alignTabs),jC(`mat-`+(p.color||`primary`)),fm(`--%NS%mat-tab-body-animation-duration`,p._bodyAnimationDuration)(`--%NS%mat-tab-header-animation-duration`,p._headerAnimationDuration),pm(`mat-mdc-tab-group-dynamic-height`,p.dynamicHeight)(`mat-mdc-tab-group-inverted-header`,p.headerPosition===`below`)(`mat-mdc-tab-group-stretch-tabs`,p.stretchTabs))},inputs:{color:`color`,fitInkBarToContent:[2,`fitInkBarToContent`,`fitInkBarToContent`,Nj],stretchTabs:[2,`mat-stretch-tabs`,`stretchTabs`,Nj],alignTabs:[0,`mat-align-tabs`,`alignTabs`],dynamicHeight:[2,`dynamicHeight`,`dynamicHeight`,Nj],selectedIndex:[2,`selectedIndex`,`selectedIndex`,Sj],headerPosition:`headerPosition`,animationDuration:`animationDuration`,contentTabIndex:[2,`contentTabIndex`,`contentTabIndex`,Sj],disablePagination:[2,`disablePagination`,`disablePagination`,Nj],disableRipple:[2,`disableRipple`,`disableRipple`,Nj],preserveContent:[2,`preserveContent`,`preserveContent`,Nj],backgroundColor:`backgroundColor`,ariaLabel:[0,`aria-label`,`ariaLabel`],ariaLabelledby:[0,`aria-labelledby`,`ariaLabelledby`]},outputs:{selectedIndexChange:`selectedIndexChange`,focusChange:`focusChange`,animationDone:`animationDone`,selectedTabChange:`selectedTabChange`},exportAs:[`matTabGroup`],features:[tb([{provide:Tn,useExisting:n}])],ngContentSelectors:a,decls:9,vars:8,consts:[[`tabHeader`,``],[`tabBodyWrapper`,``],[`tabNode`,``],[3,`indexFocused`,`selectFocusedIndex`,`selectedIndex`,`disableRipple`,`disablePagination`,`aria-label`,`aria-labelledby`],[`role`,`tab`,`matTabLabelWrapper`,``,`cdkMonitorElementFocus`,``,1,`mdc-tab`,`mat-mdc-tab`,`mat-focus-indicator`,3,`id`,`mdc-tab--active`,`class`,`disabled`,`fitInkBarToContent`],[1,`mat-mdc-tab-body-wrapper`],[`role`,`tabpanel`,3,`id`,`class`,`content`,`position`,`animationDuration`,`preserveContent`],[`role`,`tab`,`matTabLabelWrapper`,``,`cdkMonitorElementFocus`,``,1,`mdc-tab`,`mat-mdc-tab`,`mat-focus-indicator`,3,`click`,`cdkFocusChange`,`id`,`disabled`,`fitInkBarToContent`],[1,`mdc-tab__ripple`],[`mat-ripple`,``,1,`mat-mdc-tab-ripple`,3,`matRippleTrigger`,`matRippleDisabled`],[1,`mdc-tab__content`],[1,`mdc-tab__text-label`],[3,`cdkPortalOutlet`],[`role`,`tabpanel`,3,`_onCentered`,`_onCentering`,`_beforeCentering`,`id`,`content`,`position`,`animationDuration`,`preserveContent`]],template:function(f,p){f&1&&(yC(),Hi(0,`mat-tab-header`,3,0),nm(`indexFocused`,function(_){return p._focusChanged(_)})(`selectFocusedIndex`,function(_){return p.selectedIndex=_}),oC(2,c,8,17,`div`,4,rC),Rl(),eC(4,g,1,0),Hi(5,`div`,5,1),oC(7,b,1,10,`mat-tab-body`,6,rC),Rl()),f&2&&(zg(`selectedIndex`,p.selectedIndex||0)(`disableRipple`,p.disableRipple)(`disablePagination`,p.disablePagination),Gg(`aria-label`,p.ariaLabel)(`aria-labelledby`,p.ariaLabelledby),ID(2),iC(p._tabs),ID(2),nC(p._isServer?4:-1),ID(),pm(`_mat-animation-noopable`,p._bodyAnimationsDisabled()),ID(2),iC(p._tabs))},dependencies:[$n,Mn,mm,WS,d0,he],styles:[`.mdc-tab {
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
`],encapsulation:2,changeDetection:1})})()}return n})();var ge=class{index;tab};var Nn=(()=>{class n{static ɵfac=function(e){return new(e||n)};static ɵmod=lw({type:n});static ɵinj=nd({imports:[Sy]})}return n})();var Kn=new S(`MAT_DRAWER_DEFAULT_AUTOSIZE`,{providedIn:`root`,factory:()=>!1});var we=new S(`MAT_DRAWER_CONTAINER`);var Tt=(()=>{class n extends Lm{_platform=v(z);_changeDetectorRef=v(_j);_element=v(Wr);_ngZone=v(Fe$1);_isInert=!1;_container=v(ye);ngAfterContentInit(){this._container._contentMarginChanges.subscribe(()=>this._changeDetectorRef.markForCheck())}_drawerToggled(t){t.opened?this._ngZone.runOutsideAngular(()=>{t._animationEnd.pipe(Yy(50),gn(1)).subscribe(()=>this._updateInert())}):this._updateInert()}_drawerModeChanged(){this._updateInert()}_updateInert(){let t=this._container._isShowingBackdrop();if(t!==this._isInert){let e=this._element.nativeElement;this._isInert=t,t?e.setAttribute(`inert`,`true`):e.removeAttribute(`inert`)}}_shouldBeHidden(){if(this._platform.isBrowser)return!1;let{start:t,end:e}=this._container;return t!=null&&t.mode!==`over`&&t.opened||e!=null&&e.mode!==`over`&&e.opened}static ɵfac=(()=>{let t;return function(a){return(t||(t=RE(n)))(a||n)}})();static ɵcmp=(function(){return aw({type:n,selectors:[[`mat-drawer-content`]],hostAttrs:[1,`mat-drawer-content`],hostVars:6,hostBindings:function(a,i){a&2&&(fm(`margin-left`,i._container._contentMargins.left,`px`)(`margin-right`,i._container._contentMargins.right,`px`),pm(`mat-drawer-content-hidden`,i._shouldBeHidden()))},features:[tb([{provide:Lm,useExisting:n}]),Og],ngContentSelectors:[`*`],decls:1,vars:0,template:function(a,i){a&1&&(yC(),vC$1(0))},encapsulation:2})})()}return n})();var ve=(()=>{class n{_elementRef=v(Wr);_focusTrapFactory=v(Am);_focusMonitor=v(pn);_platform=v(z);_ngZone=v(Fe$1);_renderer=v(Ic);_interactivityChecker=v(rc);_doc=v(mt);_isAnimating=!1;_container=v(we,{optional:!0});_focusTrap=null;_elementFocusedBeforeDrawerWasOpened=null;_eventCleanups;_isAttached=!1;_anchor=null;get position(){return this._position}set position(t){t=t===`end`?`end`:`start`,t!==this._position&&(this._isAttached&&this._updatePositionInParent(t),this._position=t,this.onPositionChanged.emit())}_position=`start`;get mode(){return this._mode}set mode(t){this._mode=t,this._updateFocusTrapState(),this._modeChanged.next(),this._getContent()?._drawerModeChanged()}_mode=`over`;get disableClose(){return this._disableClose}set disableClose(t){this._disableClose=Zo(t)}_disableClose=!1;get autoFocus(){return this._autoFocus??(this.mode===`side`?`dialog`:`first-tabbable`)}set autoFocus(t){(t===`true`||t===`false`||t==null)&&(t=Zo(t)),this._autoFocus=t}_autoFocus;get opened(){return this._opened()}set opened(t){this.toggle(Zo(t))}_opened=Et(!1);_openedVia=null;_animationStarted=new ee$2;_animationEnd=new ee$2;openedChange=new Qe(!0);_openedStream=this.openedChange.pipe(rr(t=>t),Ue(()=>{}));openedStart=this._animationStarted.pipe(rr(()=>this.opened),bs(void 0));_closedStream=this.openedChange.pipe(rr(t=>!t),Ue(()=>{}));closedStart=this._animationStarted.pipe(rr(()=>!this.opened),bs(void 0));_destroyed=new ee$2;onPositionChanged=new Qe;_content;_modeChanged=new ee$2;_injector=v(se);_changeDetectorRef=v(_j);constructor(){this.openedChange.pipe(av(this._destroyed)).subscribe(t=>{t?(this._elementFocusedBeforeDrawerWasOpened=this._doc.activeElement,this._takeFocus()):this._isFocusWithinDrawer()&&this._restoreFocus(this._openedVia||`program`)}),this._eventCleanups=this._ngZone.runOutsideAngular(()=>{let t=this._renderer,e=this._elementRef.nativeElement;return[t.listen(e,`keydown`,a=>{a.keyCode===27&&!this.disableClose&&!_r(a)&&this._ngZone.run(()=>{this.close(),a.stopPropagation(),a.preventDefault()})}),t.listen(e,`transitionend`,this._handleTransitionEvent),t.listen(e,`transitioncancel`,this._handleTransitionEvent)]}),this._animationEnd.subscribe(()=>{this.openedChange.emit(this.opened)})}_focusByCssSelector(t,e){let a=this._elementRef.nativeElement.querySelector(t);a&&(this._interactivityChecker.isFocusable(a)||(a.tabIndex=-1,this._ngZone.runOutsideAngular(()=>{let i=()=>{o(),l(),a.removeAttribute(`tabindex`)},o=this._renderer.listen(a,`blur`,i),l=this._renderer.listen(a,`mousedown`,i)})),a.focus(e))}_takeFocus(){if(!this._focusTrap)return;let t=this._elementRef.nativeElement;switch(this.autoFocus){case!1:case`dialog`:return;case!0:case`first-tabbable`:Dh(()=>{let e=this._isAnimating?{preventScroll:!0}:void 0;!this._focusTrap.focusInitialElement(e)&&typeof t.focus==`function`&&t.focus(e)},{injector:this._injector});break;case`first-heading`:this._focusByCssSelector(`h1, h2, h3, h4, h5, h6, [role="heading"]`);break;default:this._focusByCssSelector(this.autoFocus)}}_restoreFocus(t){this.autoFocus!==`dialog`&&(this._elementFocusedBeforeDrawerWasOpened?this._focusMonitor.focusVia(this._elementFocusedBeforeDrawerWasOpened,t):this._elementRef.nativeElement.blur(),this._elementFocusedBeforeDrawerWasOpened=null)}_isFocusWithinDrawer(){let t=this._doc.activeElement;return!!t&&this._elementRef.nativeElement.contains(t)}ngAfterViewInit(){this._isAttached=!0,this._position===`end`&&this._updatePositionInParent(`end`),this._platform.isBrowser&&(this._focusTrap=this._focusTrapFactory.create(this._elementRef.nativeElement),this._updateFocusTrapState())}ngOnDestroy(){this._eventCleanups.forEach(t=>t()),this._focusTrap?.destroy(),this._anchor?.remove(),this._anchor=null,this._animationStarted.complete(),this._animationEnd.complete(),this._modeChanged.complete(),this._destroyed.next(),this._destroyed.complete()}open(t){return this.toggle(!0,t)}close(){return this.toggle(!1)}_closeViaBackdropClick(){return this._setOpen(!1,!0,`mouse`)}toggle(t=!this.opened,e){t&&e&&(this._openedVia=e);let a=this._setOpen(t,!t&&this._isFocusWithinDrawer(),this._openedVia||`program`);return t||(this._openedVia=null),a}_setOpen(t,e,a){return t===this.opened?Promise.resolve(t?`open`:`close`):(this._opened.set(t),this._getContent()?._drawerToggled(this),this._container?._transitionsEnabled?this._isAnimating?(this._setIsAnimating(!1),this._simulateAnimation()):(this._setIsAnimating(!0),setTimeout(()=>this._animationStarted.next())):this._simulateAnimation(),this._elementRef.nativeElement.classList.toggle(`mat-drawer-opened`,t),!t&&e&&this._restoreFocus(a),this._changeDetectorRef.markForCheck(),this._updateFocusTrapState(),new Promise(i=>{this.openedChange.pipe(gn(1)).subscribe(o=>i(o?`open`:`close`))}))}_getContent(){return this._container?._content||this._container?._userContent}_setIsAnimating(t){t!==this._isAnimating&&(this._isAnimating=t,this._elementRef.nativeElement.classList.toggle(`mat-drawer-animating`,t))}_simulateAnimation(){setTimeout(()=>{this._animationStarted.next(),this._animationEnd.next()})}_getWidth(){return this._elementRef.nativeElement.offsetWidth||0}_updateFocusTrapState(){this._focusTrap&&(this._focusTrap.enabled=this.opened&&!!this._container?._isShowingBackdrop())}_updatePositionInParent(t){if(!this._platform.isBrowser)return;let e=this._elementRef.nativeElement,a=e.parentNode;t===`end`?(this._anchor||(this._anchor=this._doc.createComment(`mat-drawer-anchor`),a.insertBefore(this._anchor,e)),a.appendChild(e)):this._anchor&&this._anchor.parentNode.insertBefore(e,this._anchor)}_handleTransitionEvent=t=>{let e=this._elementRef.nativeElement;t.target===e&&this._ngZone.run(()=>{t.type===`transitionend`&&this._setIsAnimating(!1),this._animationEnd.next(t)})};static ɵfac=function(e){return new(e||n)};static ɵcmp=(function(){let t=[`content`];return aw({type:n,selectors:[[`mat-drawer`]],viewQuery:function(i,o){if(i&1&&im(t,5),i&2){let l;IC(l=DC())&&(o._content=l.first)}},hostAttrs:[1,`mat-drawer`],hostVars:12,hostBindings:function(i,o){i&2&&(qg(`align`,null)(`tabIndex`,o.mode!==`side`?`-1`:null),fm(`visibility`,!o._container&&!o.opened?`hidden`:null),pm(`mat-drawer-end`,o.position===`end`)(`mat-drawer-over`,o.mode===`over`)(`mat-drawer-push`,o.mode===`push`)(`mat-drawer-side`,o.mode===`side`))},inputs:{position:`position`,mode:`mode`,disableClose:`disableClose`,autoFocus:`autoFocus`,opened:`opened`},outputs:{openedChange:`openedChange`,_openedStream:`opened`,openedStart:`openedStart`,_closedStream:`closed`,closedStart:`closedStart`,onPositionChanged:`positionChanged`},exportAs:[`matDrawer`],ngContentSelectors:[`*`],decls:3,vars:0,consts:[[`content`,``],[`cdkScrollable`,``,1,`mat-drawer-inner-container`]],template:function(i,o){i&1&&(yC(),Hi(0,`div`,1,0),vC$1(2),Rl())},dependencies:[Lm],encapsulation:2})})()}return n})();var ye=(()=>{class n{_dir=v(Te,{optional:!0});_element=v(Wr);_ngZone=v(Fe$1);_changeDetectorRef=v(_j);_animationDisabled=ee$1();_transitionsEnabled=!1;_allDrawers;_drawers=new Mi;_content;_userContent;get start(){return this._start}get end(){return this._end}get autosize(){return this._autosize}set autosize(t){this._autosize=Zo(t)}_autosize=v(Kn);get hasBackdrop(){return this._drawerHasBackdrop(this._start)||this._drawerHasBackdrop(this._end)}set hasBackdrop(t){this._backdropOverride=t==null?null:Zo(t)}_backdropOverride=null;backdropClick=new Qe;_start=null;_end=null;_left=null;_right=null;_destroyed=new ee$2;_doCheckSubject=new ee$2;_contentMargins={left:null,right:null};_contentMarginChanges=new ee$2;get scrollable(){return this._userContent||this._content}_injector=v(se);constructor(){let t=v(z),e=v(Qn$1);this._dir?.change.pipe(av(this._destroyed)).subscribe(()=>{this._validateDrawers(),this.updateContentMargins()}),e.change().pipe(av(this._destroyed)).subscribe(()=>this.updateContentMargins()),!this._animationDisabled&&t.isBrowser&&this._ngZone.runOutsideAngular(()=>{setTimeout(()=>{this._element.nativeElement.classList.add(`mat-drawer-transition`),this._transitionsEnabled=!0},200)})}ngAfterContentInit(){this._allDrawers.changes.pipe(iv(this._allDrawers),av(this._destroyed)).subscribe(t=>{this._drawers.reset(t.filter(e=>!e._container||e._container===this)),this._drawers.notifyOnChanges()}),this._drawers.changes.pipe(iv(null)).subscribe(()=>{this._validateDrawers(),this._drawers.forEach(t=>{this._watchDrawerToggle(t),this._watchDrawerPosition(t),this._watchDrawerMode(t)}),(!this._drawers.length||this._isDrawerOpen(this._start)||this._isDrawerOpen(this._end))&&this.updateContentMargins(),this._changeDetectorRef.markForCheck()}),this._ngZone.runOutsideAngular(()=>{this._doCheckSubject.pipe(Qy(10),av(this._destroyed)).subscribe(()=>this.updateContentMargins())})}ngOnDestroy(){this._contentMarginChanges.complete(),this._doCheckSubject.complete(),this._drawers.destroy(),this._destroyed.next(),this._destroyed.complete()}open(){this._drawers.forEach(t=>t.open())}close(){this._drawers.forEach(t=>t.close())}updateContentMargins(){let t=0,e=0;if(this._left&&this._left.opened){if(this._left.mode==`side`)t+=this._left._getWidth();else if(this._left.mode==`push`){let a=this._left._getWidth();t+=a,e-=a}}if(this._right&&this._right.opened){if(this._right.mode==`side`)e+=this._right._getWidth();else if(this._right.mode==`push`){let a=this._right._getWidth();e+=a,t-=a}}t=t||null,e=e||null,(t!==this._contentMargins.left||e!==this._contentMargins.right)&&(this._contentMargins={left:t,right:e},this._ngZone.run(()=>this._contentMarginChanges.next(this._contentMargins)))}ngDoCheck(){this._autosize&&this._isPushed()&&this._ngZone.runOutsideAngular(()=>this._doCheckSubject.next())}_watchDrawerToggle(t){t._animationStarted.pipe(av(this._drawers.changes)).subscribe(()=>{this.updateContentMargins(),this._changeDetectorRef.markForCheck()}),t.mode!==`side`&&t.openedChange.pipe(av(this._drawers.changes)).subscribe(()=>this._setContainerClass(t.opened))}_watchDrawerPosition(t){t.onPositionChanged.pipe(av(this._drawers.changes)).subscribe(()=>{Dh({read:()=>this._validateDrawers()},{injector:this._injector})})}_watchDrawerMode(t){t._modeChanged.pipe(av(Gy(this._drawers.changes,this._destroyed))).subscribe(()=>{this.updateContentMargins(),this._changeDetectorRef.markForCheck()})}_setContainerClass(t){let e=this._element.nativeElement.classList,a=`mat-drawer-container-has-open`;t?e.add(a):e.remove(a)}_validateDrawers(){this._start=this._end=null,this._drawers.forEach(t=>{t.position==`end`?(this._end,this._end=t):(this._start,this._start=t)}),this._right=this._left=null,this._dir&&this._dir.value===`rtl`?(this._left=this._end,this._right=this._start):(this._left=this._start,this._right=this._end)}_isPushed(){return this._isDrawerOpen(this._start)&&this._start.mode!=`over`||this._isDrawerOpen(this._end)&&this._end.mode!=`over`}_onBackdropClicked(){this.backdropClick.emit(),this._closeModalDrawersViaBackdrop()}_closeModalDrawersViaBackdrop(){[this._start,this._end].filter(t=>t&&!t.disableClose&&this._drawerHasBackdrop(t)).forEach(t=>t._closeViaBackdropClick())}_isShowingBackdrop(){return this._isDrawerOpen(this._start)&&this._drawerHasBackdrop(this._start)||this._isDrawerOpen(this._end)&&this._drawerHasBackdrop(this._end)}_isDrawerOpen(t){return t!=null&&t.opened}_drawerHasBackdrop(t){return this._backdropOverride==null?!!t&&t.mode!==`side`:this._backdropOverride}static ɵfac=function(e){return new(e||n)};static ɵcmp=(function(){let t=[[[`mat-drawer`],[`mat-sidenav`]],[[`mat-drawer-content`],[`mat-sidenav-content`]],`*`],e=[`mat-drawer, mat-sidenav`,`mat-drawer-content, mat-sidenav-content`,`*`];function a(o,l){if(o&1){let c=fC();Hi(0,`div`,1),nm(`click`,function(){Sd(c);let b=gC();return xd(b._onBackdropClicked())}),Rl()}if(o&2){let c=gC();pm(`mat-drawer-shown`,c._isShowingBackdrop())}}function i(o,l){o&1&&(Hi(0,`mat-drawer-content`),vC$1(1,2),Rl())}return aw({type:n,selectors:[[`mat-drawer-container`]],contentQueries:function(l,c,g){if(l&1&&om(g,Tt,5)(g,ve,5),l&2){let b;IC(b=DC())&&(c._content=b.first),IC(b=DC())&&(c._allDrawers=b)}},viewQuery:function(l,c){if(l&1&&im(Tt,5),l&2){let g;IC(g=DC())&&(c._userContent=g.first)}},hostAttrs:[1,`mat-drawer-container`],hostVars:2,hostBindings:function(l,c){l&2&&pm(`mat-drawer-container-explicit-backdrop`,c._backdropOverride)},inputs:{autosize:`autosize`,hasBackdrop:`hasBackdrop`},outputs:{backdropClick:`backdropClick`},exportAs:[`matDrawerContainer`],features:[tb([{provide:we,useExisting:n}])],ngContentSelectors:e,decls:4,vars:2,consts:[[1,`mat-drawer-backdrop`,3,`mat-drawer-shown`],[1,`mat-drawer-backdrop`,3,`click`]],template:function(l,c){l&1&&(yC(t),eC(0,a,1,2,`div`,0),vC$1(1),vC$1(2,1),eC(3,i,2,0,`mat-drawer-content`)),l&2&&(nC(c.hasBackdrop?0:-1),ID(3),nC(c._content?-1:3))},dependencies:[Tt],styles:[`.mat-drawer-container {
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
`],encapsulation:2})})()}return n})();var Qt=(()=>{class n extends Tt{static ɵfac=(()=>{let t;return function(a){return(t||(t=RE(n)))(a||n)}})();static ɵcmp=(function(){return aw({type:n,selectors:[[`mat-sidenav-content`]],hostAttrs:[1,`mat-drawer-content`,`mat-sidenav-content`],features:[tb([{provide:Lm,useExisting:n},{provide:Tt,useExisting:n}]),Og],ngContentSelectors:[`*`],decls:1,vars:0,template:function(a,i){a&1&&(yC(),vC$1(0))},encapsulation:2})})()}return n})();var xe=(()=>{class n extends ve{get fixedInViewport(){return this._fixedInViewport}set fixedInViewport(t){this._fixedInViewport=Zo(t)}_fixedInViewport=!1;get fixedTopGap(){return this._fixedTopGap}set fixedTopGap(t){this._fixedTopGap=Ne(t)}_fixedTopGap=0;get fixedBottomGap(){return this._fixedBottomGap}set fixedBottomGap(t){this._fixedBottomGap=Ne(t)}_fixedBottomGap=0;static ɵfac=(()=>{let t;return function(a){return(t||(t=RE(n)))(a||n)}})();static ɵcmp=(function(){return aw({type:n,selectors:[[`mat-sidenav`]],hostAttrs:[1,`mat-drawer`,`mat-sidenav`],hostVars:16,hostBindings:function(a,i){a&2&&(qg(`tabIndex`,i.mode!==`side`?`-1`:null)(`align`,null),fm(`top`,i.fixedInViewport?i.fixedTopGap:null,`px`)(`bottom`,i.fixedInViewport?i.fixedBottomGap:null,`px`),pm(`mat-drawer-end`,i.position===`end`)(`mat-drawer-over`,i.mode===`over`)(`mat-drawer-push`,i.mode===`push`)(`mat-drawer-side`,i.mode===`side`)(`mat-sidenav-fixed`,i.fixedInViewport))},inputs:{fixedInViewport:`fixedInViewport`,fixedTopGap:`fixedTopGap`,fixedBottomGap:`fixedBottomGap`},exportAs:[`matSidenav`],features:[tb([{provide:ve,useExisting:n}]),Og],ngContentSelectors:[`*`],decls:3,vars:0,consts:[[`content`,``],[`cdkScrollable`,``,1,`mat-drawer-inner-container`]],template:function(a,i){a&1&&(yC(),Hi(0,`div`,1,0),vC$1(2),Rl())},dependencies:[Lm],encapsulation:2})})()}return n})();var Ln=(()=>{class n extends ye{_allDrawers=void 0;_content=void 0;static ɵfac=(()=>{let t;return function(a){return(t||(t=RE(n)))(a||n)}})();static ɵcmp=(function(){let t=[[[`mat-drawer`],[`mat-sidenav`]],[[`mat-drawer-content`],[`mat-sidenav-content`]],`*`],e=[`mat-drawer, mat-sidenav`,`mat-drawer-content, mat-sidenav-content`,`*`];function a(o,l){if(o&1){let c=fC();Hi(0,`div`,1),nm(`click`,function(){Sd(c);let b=gC();return xd(b._onBackdropClicked())}),Rl()}if(o&2){let c=gC();pm(`mat-drawer-shown`,c._isShowingBackdrop())}}function i(o,l){o&1&&(Hi(0,`mat-sidenav-content`),vC$1(1,2),Rl())}return aw({type:n,selectors:[[`mat-sidenav-container`]],contentQueries:function(l,c,g){if(l&1&&om(g,Qt,5)(g,xe,5),l&2){let b;IC(b=DC())&&(c._content=b.first),IC(b=DC())&&(c._allDrawers=b)}},hostAttrs:[1,`mat-drawer-container`,`mat-sidenav-container`],hostVars:2,hostBindings:function(l,c){l&2&&pm(`mat-drawer-container-explicit-backdrop`,c._backdropOverride)},exportAs:[`matSidenavContainer`],features:[tb([{provide:we,useExisting:n},{provide:ye,useExisting:n}]),Og],ngContentSelectors:e,decls:4,vars:2,consts:[[1,`mat-drawer-backdrop`,3,`mat-drawer-shown`],[1,`mat-drawer-backdrop`,3,`click`]],template:function(l,c){l&1&&(yC(t),eC(0,a,1,2,`div`,0),vC$1(1),vC$1(2,1),eC(3,i,2,0,`mat-sidenav-content`)),l&2&&(nC(c.hasBackdrop?0:-1),ID(3),nC(c._content?-1:3))},dependencies:[Qt],styles:[`.mat-drawer-container {
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
`],encapsulation:2})})()}return n})();var ot=class n{httpClient=v(Ce);libraryCardInfo_Url=`/api/library/GetLibraryCardInfo?libId=`;getLibraryIds_Url=`/api/Library/GetLibraryIds?userId=`;constructor(){}submitNewLibrary(s){let t=new FormData;return t.append(`Title`,s.title),s.description&&t.append(`Description`,s.description),s.image&&t.append(`Image`,s.image),this.httpClient.post(`/api/Library/SubmitNewLibrary`,t)}static ɵfac=function(t){return new(t||n)};static ɵprov=$r({token:n,factory:n.ɵfac})};var Yn=n=>[`/UserAccount/Profile/`,n];function Xn(n,s){if(n&1&&Qg(0,`img`,1),n&2){let t=gC();zg(`ngSrc`,t.libCardInfo.value()?.imageUrl)}}function Jn(n,s){n&1&&(Hi(0,`mat-icon`,2),QC(1,` account_balance `),Rl())}var Gt=class n{libraryId=Ij.required();router=v(Me);libService=v(ot);identityService=v(Uc);libCardInfo=_o(()=>this.libService.libraryCardInfo_Url+this.libraryId());ownerUsername=_o(()=>this.libCardInfo.hasValue()?this.identityService.getUsername_Url+this.libCardInfo.value()?.ownerId:void 0);constructor(){}openLibrary(){this.router.navigate([`/Library`,this.libraryId()])}static ɵfac=function(t){return new(t||n)};static ɵcmp=aw({type:n,selectors:[[`app-library-card`]],hostBindings:function(t,e){t&1&&nm(`click`,function(){return e.openLibrary()})},inputs:{libraryId:[1,`libraryId`]},decls:13,vars:7,consts:[[`appearance`,`outlined`],[`width`,`40`,`height`,`40`,`alt`,`library logo`,`matCardAvatar`,``,3,`ngSrc`],[`matCardAvatar`,``,2,`font-size`,`36px`,`text-align`,`center`,`/*width`,`40px`,`height`,`40px`],[3,`routerLink`],[2,`font-size`,`12px`]],template:function(t,e){t&1&&(Hi(0,`mat-card`,0)(1,`mat-card-header`),eC(2,Xn,1,1,`img`,1)(3,Jn,2,0,`mat-icon`,2),Hi(4,`mat-card-title`),QC(5),Rl(),Hi(6,`mat-card-subtitle`),QC(7,`from `),Hi(8,`a`,3),QC(9),Rl()()(),Hi(10,`mat-card-content`)(11,`p`,4),QC(12),Rl()()()),t&2&&(ID(2),nC(e.libCardInfo.value()?.imageUrl?2:3),ID(3),wm(e.libCardInfo.value()?.title),ID(3),zg(`routerLink`,ib(5,Yn,e.libCardInfo.value()?.ownerId)),ID(),Vl(` `,e.ownerUsername.value()),ID(3),wm(e.libCardInfo.value()?.description))},dependencies:[Oe,Pe,Be,Ee,Le,Fe,Ny,sg,Pl],styles:[`mat-card[_ngcontent-%COMP%]{width:256px;height:256px;cursor:pointer;overflow:hidden;transition:all .1s}mat-card[_ngcontent-%COMP%]:hover{box-shadow:0 5px 10px var(--%NS%mat-sys-outline-variant)}mat-card-header[_ngcontent-%COMP%]{border-bottom:1px solid var(--%NS%mat-sys-outline-variant)}mat-card-title[_ngcontent-%COMP%]{font-size:18px}mat-card-subtitle[_ngcontent-%COMP%]{font-size:12px}mat-card-content[_ngcontent-%COMP%]{flex:1 1 auto;overflow:auto}mat-card-content[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{font-size:12px}`]})};var ta=[`canvas`];function ea(n,s){if(n&1&&Qg(0,`img`,4,2),n&2){let t=gC();zg(`src`,t.previewImgSrc())}}function na(n,s){if(n&1&&QC(0),n&2){let t=s.$implicit;Vl(` `,t.message,` `)}}function aa(n,s){if(n&1&&(Hi(0,`mat-error`),oC(1,na,1,1,null,null,rC),Rl()),n&2){let t=gC();ID(),iC(t.newLibForm.title().errors())}}function ia(n,s){if(n&1&&QC(0),n&2){let t=s.$implicit;Vl(` `,t.message,` `)}}function ra(n,s){if(n&1&&(Hi(0,`mat-error`),oC(1,ia,1,1,null,null,rC),Rl()),n&2){let t=gC();ID(),iC(t.newLibForm.description().errors())}}var qt=class n{selectedFile=Et(null);previewImgSrc=Et(null);imageSizeError=Et(null);canvas=Dj(`canvas`);signalModel=Et({title:``,description:``});newLibForm=jo(this.signalModel,s=>{Ms(s.title,{message:`Title is required for the new library!`}),Cs(s.title,60,{message:`Title cannot be more than 60 characters!`}),Ss(s.title,3,{message:`Title cannot be less than 3 characters!`}),Pt(s.title,({value:t})=>{let e=t(),a=e.trim();return e!==a&&a===``?{kind:`trimmed`,message:`Title cannot be only blank space!`}:null}),Cs(s.description,400,{message:`Descrption cannot be more than 400 characters!`})});result=it(()=>({description:this.signalModel().description,image:this.selectedFile(),title:this.signalModel().title.trim()}));onSelectImage(s){let t=s.target;if(t.files&&t.files[0])if(t.files[0].size>122880)if(this.canvas()){let e=new FileReader;e.onload=a=>{let i=new Image;i.onload=()=>{let o=this.canvas().nativeElement.getContext(`2d`),l=800,c=Math.round(i.height/i.width*l);this.canvas().nativeElement.width=l,this.canvas().nativeElement.height=c,o&&o.drawImage(i,0,0,l,c);let g=this.canvas().nativeElement.toDataURL(`image/webp`,.8);this.previewImgSrc.set(g),this.canvas().nativeElement.toBlob(b=>{if(b){let h=new File([b],`editedImage`,{type:b.type||`application/octet-stream`,lastModified:Date.now()});this.selectedFile.set(h)}},`image/webp`,.8)},i.src=a.target.result},e.readAsDataURL(t.files[0])}else this.imageSizeError.set(`Size of the choosen image cannot be more than 120 KB!`);else{this.selectedFile.set(t.files[0]);let e=new FileReader;e.onload=a=>{this.previewImgSrc.set(a.target.result)},e.readAsDataURL(t.files[0])}else this.selectedFile.set(null),this.previewImgSrc.set(null)}static ɵfac=function(t){return new(t||n)};static ɵcmp=aw({type:n,selectors:[[`app-new-library-form`]],viewQuery:function(t,e){t&1&&am(e.canvas,ta,5),t&2&&TC()},decls:24,vars:7,consts:[[`fileInput`,``],[`canvas`,``],[`previewImg`,``],[`id`,`img-box`,1,`clearfix`],[`alt`,`image`,3,`src`],[`matButton`,`elevated`,`id`,`selectButton`,3,`click`],[`type`,`file`,`hidden`,``,3,`change`],[2,`display`,`none`],[`appearance`,`fill`,`subscriptSizing`,`dynamic`],[`type`,`text`,`matInput`,``,3,`formField`],[`matInput`,``,`placeholder`,`Write here..`,`rows`,`5`,3,`formField`],[`align`,`end`,2,`float`,`inline-end`],[`matButton`,``,`mat-dialog-close`,``],[`matButton`,`filled`,3,`mat-dialog-close`,`disabled`]],template:function(t,e){if(t&1){let a=fC();Hi(0,`mat-dialog-content`)(1,`div`,3),eC(2,ea,2,1,`img`,4),Hi(3,`button`,5),nm(`click`,function(){Sd(a);let o=wC(6);return xd(o.click())}),QC(4,`Select an image`),Rl(),Hi(5,`input`,6,0),nm(`change`,function(o){return e.onSelectImage(o)}),Rl(),Qg(7,`canvas`,7,1),Rl(),Hi(9,`mat-form-field`,8)(10,`mat-label`),QC(11,`Title`),Rl(),Hi(12,`input`,9),vT(),Rl(),eC(13,aa,3,0,`mat-error`),Rl(),Hi(14,`mat-form-field`,8)(15,`mat-label`),QC(16,`Description`),Rl(),Hi(17,`textarea`,10),vT(),Rl(),eC(18,ra,3,0,`mat-error`),Rl(),Hi(19,`mat-dialog-actions`,11)(20,`button`,12),QC(21,`Cancel`),Rl(),Hi(22,`button`,13),QC(23,` Submit `),Rl()()()}t&2&&(ID(2),nC(e.previewImgSrc()?2:-1),ID(10),zg(`formField`,e.newLibForm.title),IT(),ID(),nC(e.newLibForm.title().touched()&&e.newLibForm.title().invalid()?13:-1),ID(4),zg(`formField`,e.newLibForm.description),IT(),ID(),nC(e.newLibForm.description().touched()&&e.newLibForm.description().invalid()?18:-1),ID(4),zg(`mat-dialog-close`,e.result())(`disabled`,e.newLibForm().invalid()))},dependencies:[oe,re,ae,ga,vC,$n$1,Bl,da$1,Ns],styles:[`mat-form-field[_ngcontent-%COMP%]{width:100%;margin:8px auto}mat-dialog-content[_ngcontent-%COMP%]{width:60vw;min-width:400px}@media screen and (max-width:800px){mat-dialog-content[_ngcontent-%COMP%]{width:80vw}}button#selectButton[_ngcontent-%COMP%]{margin:88px 8px 0}#img-box[_ngcontent-%COMP%]{margin:8px auto;width:fit-content}#img-box[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:150px;height:150px;object-fit:contain;float:left}`]})};function oa(n,s){if(n&1){let t=fC();Hi(0,`button`,6),nm(`click`,function(){Sd(t);let a=gC();return xd(a.openNewLibraryForm())}),Hi(1,`mat-icon`),QC(2,`add_box`),Rl(),QC(3,` Create New Library `),Rl()}}function sa(n,s){if(n&1&&Qg(0,`app-library-card`,5),n&2){let t=s.$implicit;zg(`libraryId`,t)}}var Ut=class n{libIds=Ij.required();isMe=Ij(!1);reload=Ej();dialog=v(ee);libService=v(ot);identityService=v(Uc);sidenavOpen=Et(!0);displayWaitSpinner=Et(!1);constructor(){}toggleSidenavOpen(){this.sidenavOpen.update(s=>!s)}openNewLibraryForm(){this.identityService.getAntiForgeryToken.reload(),this.dialog.open(qt).afterClosed().subscribe(s=>{s&&(this.displayWaitSpinner.set(!0),this.libService.submitNewLibrary(s).subscribe({next:t=>{t&&t.success&&(this.reload.emit(void 0),this.displayWaitSpinner.set(!1))},error:t=>{this.displayWaitSpinner.set(!1),this.dialog.open(le,{data:{description:[`Something went wrong during submitting the new library!`,`Please try later.`],title:`Submit Error`,status:`warning`}})}}))})}static ɵfac=function(t){return new(t||n)};static ɵcmp=aw({type:n,selectors:[[`app-library-list`]],inputs:{libIds:[1,`libIds`],isMe:[1,`isMe`]},outputs:{reload:`reload`},decls:11,vars:4,consts:[[`id`,``,`mode`,`side`,`position`,`start`,2,`position`,`absolute`,3,`opened`],[`matButton`,``],[2,`float`,`inline-start`],[`matMiniFab`,``,3,`click`,`matTooltip`],[1,`list`],[3,`libraryId`],[`matButton`,``,3,`click`]],template:function(t,e){t&1&&(Hi(0,`mat-sidenav-container`)(1,`mat-sidenav`,0),eC(2,oa,4,0,`button`,1),Rl(),Hi(3,`mat-sidenav-content`)(4,`div`,2)(5,`button`,3),nm(`click`,function(){return e.toggleSidenavOpen()}),Hi(6,`mat-icon`),QC(7),Rl()()(),Hi(8,`div`,4),oC(9,sa,1,1,`app-library-card`,5,rC),Rl()()()),t&2&&(ID(),zg(`opened`,e.sidenavOpen()),ID(),nC(e.isMe()?2:-1),ID(3),zg(`matTooltip`,e.sidenavOpen()?`Close panel`:`Open panel`),ID(2),wm(e.sidenavOpen()?`left_panel_close`:`left_panel_open`),ID(2),iC(e.libIds()))},dependencies:[Ln,xe,Qt,Gt,Ny,_C,vC,tp],styles:[`mat-sidenav-container[_ngcontent-%COMP%]{position:relative}mat-sidenav[_ngcontent-%COMP%]{width:340px;border-right:1px solid var(--%NS%mat-sys-outline-variant);border-radius:0;padding-right:10px;padding-top:10px}mat-sidenav-content[_ngcontent-%COMP%]{padding:8px}.list[_ngcontent-%COMP%]{display:flex;flex-direction:row;justify-content:space-evenly;flex-wrap:wrap;width:100%;padding:8px 0}app-library-card[_ngcontent-%COMP%]{margin:8px}`]})};var da=()=>[];function la(n,s){if(n&1){let t=fC();Hi(0,`app-library-list`,3),nm(`reload`,function(){Sd(t);let a=gC();return xd(a.libIdsResource.reload())}),Rl()}if(n&2){let t=gC();zg(`libIds`,t.libIdsResource.value()?.libIds??ob(2,da))(`isMe`,t.isMe())}}var Zt=class n{userId=Ij.required();identityServise=v(Uc);libService=v(ot);libIdsResource=_o(()=>this.libService.getLibraryIds_Url+this.userId());isMe=it(()=>this.identityServise.isAuthenticated()&&this.userId()===this.identityServise.myIdentityInfo.value()?.id);static ɵfac=function(t){return new(t||n)};static ɵcmp=aw({type:n,selectors:[[`app-mainboard`]],inputs:{userId:[1,`userId`]},decls:3,vars:0,consts:[[`dynamicHeight`,``],[`label`,`Libraries`],[`matTabContent`,``],[3,`reload`,`libIds`,`isMe`]],template:function(t,e){t&1&&(Hi(0,`mat-tab-group`,0)(1,`mat-tab`,1),kg(2,la,1,3,`ng-template`,2),Rl()())},dependencies:[Nn,fe,_e,Dn,Ut],encapsulation:2})};var ca=()=>[`/UserAccount/ProfileSetting`];function ma(n,s){if(n&1&&Qg(0,`img`,2),n&2){let t=gC();zg(`ngSrc`,t.profileInfo.value().avatarUrl)}}function ba(n,s){n&1&&(Hi(0,`mat-icon`,3),QC(1,`account_circle`),Rl())}function pa(n,s){n&1&&(Hi(0,`a`,7)(1,`mat-icon`),QC(2,`person_edit`),Rl(),QC(3,` Edit Profile `),Rl()),n&2&&zg(`routerLink`,ob(1,ca))}function ua(n,s){n&1&&Qg(0,`app-wait-spinner`)}var En=class n{identityService=v(Uc);profileService=v(c);activatedRoute=v(Jt);router=v(Me);params=xn(this.activatedRoute.paramMap);userId=it(()=>this.params()?.get(`userId`)??this.identityService.myIdentityInfo.value()?.id);isMe=it(()=>this.userId()&&this.userId()===this.identityService.myIdentityInfo.value()?.id);profileInfo=_o(()=>this.profileService.getProfileInfo_Url+this.userId());profileUsername=_o(()=>this.identityService.getUsername_Url+this.userId());displayWaitSpinner=Et(!1);constructor(){this.userId()||this.router.navigate([`/Identity/Login`])}static ɵfac=function(t){return new(t||n)};static ɵcmp=aw({type:n,selectors:[[`app-profile`]],decls:18,vars:7,consts:[[`appearance`,`outlined`],[2,`float`,`inline-start`,`position`,`relative`],[`priority`,``,`width`,`100`,`height`,`100`,`alt`,`user image`,`id`,`user-profile-img`,3,`ngSrc`],[2,`font-size`,`100px`,`width`,`100px`,`height`,`100px`],[1,`persian-font`,2,`margin`,`0`],[1,`clearfix`],[`align`,`end`],[`matButton`,``,3,`routerLink`],[3,`userId`]],template:function(t,e){t&1&&(Hi(0,`mat-card`,0)(1,`mat-card-header`)(2,`div`,1),eC(3,ma,1,1,`img`,2)(4,ba,2,0,`mat-icon`,3),Rl(),Hi(5,`div`,1)(6,`mat-card-title`)(7,`p`,4),QC(8),Rl()(),Hi(9,`mat-card-subtitle`),QC(10),Rl()()(),Hi(11,`mat-card-content`,5)(12,`pre`),QC(13),Rl()(),Hi(14,`mat-card-actions`,6),eC(15,pa,4,2,`a`,7),Rl()(),Qg(16,`app-mainboard`,8),eC(17,ua,1,0,`app-wait-spinner`)),t&2&&(ID(3),nC(e.profileInfo.value()?.avatarUrl?3:4),ID(5),Vl(` `,e.profileInfo.value()?.name,` `),ID(2),Vl(` `,e.profileUsername.value()?.username,` `),ID(3),wm(e.profileInfo.value()?.description),ID(2),nC(e.isMe()?15:-1),ID(),zg(`userId`,e.userId()),ID(),nC(e.displayWaitSpinner()?17:-1))},dependencies:[je,Oe,Re,Fe,Pe,Le,Ee,Ny,vC,sg,kr,Pl,Zt],styles:[`mat-card[_ngcontent-%COMP%]{width:50vw;min-width:370px;margin:0 auto 16px;display:block}img#user-profile-img[_ngcontent-%COMP%]{width:100px;height:100px;object-fit:cover;border-radius:50%;overflow:hidden}mat-card-title[_ngcontent-%COMP%]{margin:16px}mat-card-subtitle[_ngcontent-%COMP%]{margin:0 16px;letter-spacing:1px}`]})};export{En as Profile};