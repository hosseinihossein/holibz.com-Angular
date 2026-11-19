import{f as le,g as se,u as ie}from"./chunk-BWfN04bG.js";import{a as aa,c as fs,d as ms,i as Jo,m as zn,n as Fl,o as cs,p as us,r as Ft,t as Ao}from"./chunk-BVyp0qHA.js";import{M as d0,P as dn,R as hi,T as Vn,W as pi,_ as Kc,d as Gc,h as Jn,o as DS,tt as ym,u as Fm,w as V}from"./main-QYPBV57T.js";import{A as ID,Ar as yC,Ct as TC,D as Gy,Dt as Ue,Ht as Yy,In as nC,M as Ic,O as Hi,Or as xd,Pn as mt,Pr as zg,Pt as Wr,Qt as bs,Sn as iv,Sr as wC,Wn as oC,X as Mi,Xn as pm,Xt as av,Yt as am,Zn as qg,Zt as aw,_n as iC,_r as vC,_t as S,ct as QC,dn as gC,dr as tb,dt as Qy,en as eC,er as rC,fn as gn,ft as RE,g as Dj,gr as v,h as Dh,j as IT,jt as Vl,k as IC,ln as fm,lt as Qe,m as DC,mt as Rl,nn as ee,nt as Og,on as fC,or as se$1,qn as om,qt as _j,rr,ut as Qg,vr as vT,vt as Sd,w as Fe,x as Et,xn as it,yn as im,zn as nm}from"./chunk-kniop8OV.js";var Ke=new S(`MAT_DRAWER_DEFAULT_AUTOSIZE`,{providedIn:`root`,factory:()=>!1});var he=new S(`MAT_DRAWER_CONTAINER`);var L=(()=>{class r extends Fm{_platform=v(V);_changeDetectorRef=v(_j);_element=v(Wr);_ngZone=v(Fe);_isInert=!1;_container=v(pe);ngAfterContentInit(){this._container._contentMarginChanges.subscribe(()=>this._changeDetectorRef.markForCheck())}_drawerToggled(e){e.opened?this._ngZone.runOutsideAngular(()=>{e._animationEnd.pipe(Yy(50),gn(1)).subscribe(()=>this._updateInert())}):this._updateInert()}_drawerModeChanged(){this._updateInert()}_updateInert(){let e=this._container._isShowingBackdrop();if(e!==this._isInert){let t=this._element.nativeElement;this._isInert=e,e?t.setAttribute(`inert`,`true`):t.removeAttribute(`inert`)}}_shouldBeHidden(){if(this._platform.isBrowser)return!1;let{start:e,end:t}=this._container;return e!=null&&e.mode!==`over`&&e.opened||t!=null&&t.mode!==`over`&&t.opened}static ɵfac=(()=>{let e;return function(n){return(e||(e=RE(r)))(n||r)}})();static ɵcmp=(function(){return aw({type:r,selectors:[[`mat-drawer-content`]],hostAttrs:[1,`mat-drawer-content`],hostVars:6,hostBindings:function(n,a){n&2&&(fm(`margin-left`,a._container._contentMargins.left,`px`)(`margin-right`,a._container._contentMargins.right,`px`),pm(`mat-drawer-content-hidden`,a._shouldBeHidden()))},features:[tb([{provide:Fm,useExisting:r}]),Og],ngContentSelectors:[`*`],decls:1,vars:0,template:function(n,a){n&1&&(yC(),vC(0))},encapsulation:2})})()}return r})();var me=(()=>{class r{_elementRef=v(Wr);_focusTrapFactory=v(ym);_focusMonitor=v(pi);_platform=v(V);_ngZone=v(Fe);_renderer=v(Ic);_interactivityChecker=v(Gc);_doc=v(mt);_isAnimating=!1;_container=v(he,{optional:!0});_focusTrap=null;_elementFocusedBeforeDrawerWasOpened=null;_eventCleanups;_isAttached=!1;_anchor=null;get position(){return this._position}set position(e){e=e===`end`?`end`:`start`,e!==this._position&&(this._isAttached&&this._updatePositionInParent(e),this._position=e,this.onPositionChanged.emit())}_position=`start`;get mode(){return this._mode}set mode(e){this._mode=e,this._updateFocusTrapState(),this._modeChanged.next(),this._getContent()?._drawerModeChanged()}_mode=`over`;get disableClose(){return this._disableClose}set disableClose(e){this._disableClose=DS(e)}_disableClose=!1;get autoFocus(){return this._autoFocus??(this.mode===`side`?`dialog`:`first-tabbable`)}set autoFocus(e){(e===`true`||e===`false`||e==null)&&(e=DS(e)),this._autoFocus=e}_autoFocus;get opened(){return this._opened()}set opened(e){this.toggle(DS(e))}_opened=Et(!1);_openedVia=null;_animationStarted=new ee;_animationEnd=new ee;openedChange=new Qe(!0);_openedStream=this.openedChange.pipe(rr(e=>e),Ue(()=>{}));openedStart=this._animationStarted.pipe(rr(()=>this.opened),bs(void 0));_closedStream=this.openedChange.pipe(rr(e=>!e),Ue(()=>{}));closedStart=this._animationStarted.pipe(rr(()=>!this.opened),bs(void 0));_destroyed=new ee;onPositionChanged=new Qe;_content;_modeChanged=new ee;_injector=v(se$1);_changeDetectorRef=v(_j);constructor(){this.openedChange.pipe(av(this._destroyed)).subscribe(e=>{e?(this._elementFocusedBeforeDrawerWasOpened=this._doc.activeElement,this._takeFocus()):this._isFocusWithinDrawer()&&this._restoreFocus(this._openedVia||`program`)}),this._eventCleanups=this._ngZone.runOutsideAngular(()=>{let e=this._renderer,t=this._elementRef.nativeElement;return[e.listen(t,`keydown`,n=>{n.keyCode===27&&!this.disableClose&&!Kc(n)&&this._ngZone.run(()=>{this.close(),n.stopPropagation(),n.preventDefault()})}),e.listen(t,`transitionend`,this._handleTransitionEvent),e.listen(t,`transitioncancel`,this._handleTransitionEvent)]}),this._animationEnd.subscribe(()=>{this.openedChange.emit(this.opened)})}_focusByCssSelector(e,t){let n=this._elementRef.nativeElement.querySelector(e);n&&(this._interactivityChecker.isFocusable(n)||(n.tabIndex=-1,this._ngZone.runOutsideAngular(()=>{let a=()=>{i(),o(),n.removeAttribute(`tabindex`)},i=this._renderer.listen(n,`blur`,a),o=this._renderer.listen(n,`mousedown`,a)})),n.focus(t))}_takeFocus(){if(!this._focusTrap)return;let e=this._elementRef.nativeElement;switch(this.autoFocus){case!1:case`dialog`:return;case!0:case`first-tabbable`:Dh(()=>{let t=this._isAnimating?{preventScroll:!0}:void 0;!this._focusTrap.focusInitialElement(t)&&typeof e.focus==`function`&&e.focus(t)},{injector:this._injector});break;case`first-heading`:this._focusByCssSelector(`h1, h2, h3, h4, h5, h6, [role="heading"]`);break;default:this._focusByCssSelector(this.autoFocus)}}_restoreFocus(e){this.autoFocus!==`dialog`&&(this._elementFocusedBeforeDrawerWasOpened?this._focusMonitor.focusVia(this._elementFocusedBeforeDrawerWasOpened,e):this._elementRef.nativeElement.blur(),this._elementFocusedBeforeDrawerWasOpened=null)}_isFocusWithinDrawer(){let e=this._doc.activeElement;return!!e&&this._elementRef.nativeElement.contains(e)}ngAfterViewInit(){this._isAttached=!0,this._position===`end`&&this._updatePositionInParent(`end`),this._platform.isBrowser&&(this._focusTrap=this._focusTrapFactory.create(this._elementRef.nativeElement),this._updateFocusTrapState())}ngOnDestroy(){this._eventCleanups.forEach(e=>e()),this._focusTrap?.destroy(),this._anchor?.remove(),this._anchor=null,this._animationStarted.complete(),this._animationEnd.complete(),this._modeChanged.complete(),this._destroyed.next(),this._destroyed.complete()}open(e){return this.toggle(!0,e)}close(){return this.toggle(!1)}_closeViaBackdropClick(){return this._setOpen(!1,!0,`mouse`)}toggle(e=!this.opened,t){e&&t&&(this._openedVia=t);let n=this._setOpen(e,!e&&this._isFocusWithinDrawer(),this._openedVia||`program`);return e||(this._openedVia=null),n}_setOpen(e,t,n){return e===this.opened?Promise.resolve(e?`open`:`close`):(this._opened.set(e),this._getContent()?._drawerToggled(this),this._container?._transitionsEnabled?this._isAnimating?(this._setIsAnimating(!1),this._simulateAnimation()):(this._setIsAnimating(!0),setTimeout(()=>this._animationStarted.next())):this._simulateAnimation(),this._elementRef.nativeElement.classList.toggle(`mat-drawer-opened`,e),!e&&t&&this._restoreFocus(n),this._changeDetectorRef.markForCheck(),this._updateFocusTrapState(),new Promise(a=>{this.openedChange.pipe(gn(1)).subscribe(i=>a(i?`open`:`close`))}))}_getContent(){return this._container?._content||this._container?._userContent}_setIsAnimating(e){e!==this._isAnimating&&(this._isAnimating=e,this._elementRef.nativeElement.classList.toggle(`mat-drawer-animating`,e))}_simulateAnimation(){setTimeout(()=>{this._animationStarted.next(),this._animationEnd.next()})}_getWidth(){return this._elementRef.nativeElement.offsetWidth||0}_updateFocusTrapState(){this._focusTrap&&(this._focusTrap.enabled=this.opened&&!!this._container?._isShowingBackdrop())}_updatePositionInParent(e){if(!this._platform.isBrowser)return;let t=this._elementRef.nativeElement,n=t.parentNode;e===`end`?(this._anchor||(this._anchor=this._doc.createComment(`mat-drawer-anchor`),n.insertBefore(this._anchor,t)),n.appendChild(t)):this._anchor&&this._anchor.parentNode.insertBefore(t,this._anchor)}_handleTransitionEvent=e=>{let t=this._elementRef.nativeElement;e.target===t&&this._ngZone.run(()=>{e.type===`transitionend`&&this._setIsAnimating(!1),this._animationEnd.next(e)})};static ɵfac=function(t){return new(t||r)};static ɵcmp=(function(){let e=[`content`];return aw({type:r,selectors:[[`mat-drawer`]],viewQuery:function(a,i){if(a&1&&im(e,5),a&2){let o;IC(o=DC())&&(i._content=o.first)}},hostAttrs:[1,`mat-drawer`],hostVars:12,hostBindings:function(a,i){a&2&&(qg(`align`,null)(`tabIndex`,i.mode!==`side`?`-1`:null),fm(`visibility`,!i._container&&!i.opened?`hidden`:null),pm(`mat-drawer-end`,i.position===`end`)(`mat-drawer-over`,i.mode===`over`)(`mat-drawer-push`,i.mode===`push`)(`mat-drawer-side`,i.mode===`side`))},inputs:{position:`position`,mode:`mode`,disableClose:`disableClose`,autoFocus:`autoFocus`,opened:`opened`},outputs:{openedChange:`openedChange`,_openedStream:`opened`,openedStart:`openedStart`,_closedStream:`closed`,closedStart:`closedStart`,onPositionChanged:`positionChanged`},exportAs:[`matDrawer`],ngContentSelectors:[`*`],decls:3,vars:0,consts:[[`content`,``],[`cdkScrollable`,``,1,`mat-drawer-inner-container`]],template:function(a,i){a&1&&(yC(),Hi(0,`div`,1,0),vC(2),Rl())},dependencies:[Fm],encapsulation:2})})()}return r})();var pe=(()=>{class r{_dir=v(Vn,{optional:!0});_element=v(Wr);_ngZone=v(Fe);_changeDetectorRef=v(_j);_animationDisabled=dn();_transitionsEnabled=!1;_allDrawers;_drawers=new Mi;_content;_userContent;get start(){return this._start}get end(){return this._end}get autosize(){return this._autosize}set autosize(e){this._autosize=DS(e)}_autosize=v(Ke);get hasBackdrop(){return this._drawerHasBackdrop(this._start)||this._drawerHasBackdrop(this._end)}set hasBackdrop(e){this._backdropOverride=e==null?null:DS(e)}_backdropOverride=null;backdropClick=new Qe;_start=null;_end=null;_left=null;_right=null;_destroyed=new ee;_doCheckSubject=new ee;_contentMargins={left:null,right:null};_contentMarginChanges=new ee;get scrollable(){return this._userContent||this._content}_injector=v(se$1);constructor(){let e=v(V),t=v(Jn);this._dir?.change.pipe(av(this._destroyed)).subscribe(()=>{this._validateDrawers(),this.updateContentMargins()}),t.change().pipe(av(this._destroyed)).subscribe(()=>this.updateContentMargins()),!this._animationDisabled&&e.isBrowser&&this._ngZone.runOutsideAngular(()=>{setTimeout(()=>{this._element.nativeElement.classList.add(`mat-drawer-transition`),this._transitionsEnabled=!0},200)})}ngAfterContentInit(){this._allDrawers.changes.pipe(iv(this._allDrawers),av(this._destroyed)).subscribe(e=>{this._drawers.reset(e.filter(t=>!t._container||t._container===this)),this._drawers.notifyOnChanges()}),this._drawers.changes.pipe(iv(null)).subscribe(()=>{this._validateDrawers(),this._drawers.forEach(e=>{this._watchDrawerToggle(e),this._watchDrawerPosition(e),this._watchDrawerMode(e)}),(!this._drawers.length||this._isDrawerOpen(this._start)||this._isDrawerOpen(this._end))&&this.updateContentMargins(),this._changeDetectorRef.markForCheck()}),this._ngZone.runOutsideAngular(()=>{this._doCheckSubject.pipe(Qy(10),av(this._destroyed)).subscribe(()=>this.updateContentMargins())})}ngOnDestroy(){this._contentMarginChanges.complete(),this._doCheckSubject.complete(),this._drawers.destroy(),this._destroyed.next(),this._destroyed.complete()}open(){this._drawers.forEach(e=>e.open())}close(){this._drawers.forEach(e=>e.close())}updateContentMargins(){let e=0,t=0;if(this._left&&this._left.opened){if(this._left.mode==`side`)e+=this._left._getWidth();else if(this._left.mode==`push`){let n=this._left._getWidth();e+=n,t-=n}}if(this._right&&this._right.opened){if(this._right.mode==`side`)t+=this._right._getWidth();else if(this._right.mode==`push`){let n=this._right._getWidth();t+=n,e-=n}}e=e||null,t=t||null,(e!==this._contentMargins.left||t!==this._contentMargins.right)&&(this._contentMargins={left:e,right:t},this._ngZone.run(()=>this._contentMarginChanges.next(this._contentMargins)))}ngDoCheck(){this._autosize&&this._isPushed()&&this._ngZone.runOutsideAngular(()=>this._doCheckSubject.next())}_watchDrawerToggle(e){e._animationStarted.pipe(av(this._drawers.changes)).subscribe(()=>{this.updateContentMargins(),this._changeDetectorRef.markForCheck()}),e.mode!==`side`&&e.openedChange.pipe(av(this._drawers.changes)).subscribe(()=>this._setContainerClass(e.opened))}_watchDrawerPosition(e){e.onPositionChanged.pipe(av(this._drawers.changes)).subscribe(()=>{Dh({read:()=>this._validateDrawers()},{injector:this._injector})})}_watchDrawerMode(e){e._modeChanged.pipe(av(Gy(this._drawers.changes,this._destroyed))).subscribe(()=>{this.updateContentMargins(),this._changeDetectorRef.markForCheck()})}_setContainerClass(e){let t=this._element.nativeElement.classList,n=`mat-drawer-container-has-open`;e?t.add(n):t.remove(n)}_validateDrawers(){this._start=this._end=null,this._drawers.forEach(e=>{e.position==`end`?(this._end,this._end=e):(this._start,this._start=e)}),this._right=this._left=null,this._dir&&this._dir.value===`rtl`?(this._left=this._end,this._right=this._start):(this._left=this._start,this._right=this._end)}_isPushed(){return this._isDrawerOpen(this._start)&&this._start.mode!=`over`||this._isDrawerOpen(this._end)&&this._end.mode!=`over`}_onBackdropClicked(){this.backdropClick.emit(),this._closeModalDrawersViaBackdrop()}_closeModalDrawersViaBackdrop(){[this._start,this._end].filter(e=>e&&!e.disableClose&&this._drawerHasBackdrop(e)).forEach(e=>e._closeViaBackdropClick())}_isShowingBackdrop(){return this._isDrawerOpen(this._start)&&this._drawerHasBackdrop(this._start)||this._isDrawerOpen(this._end)&&this._drawerHasBackdrop(this._end)}_isDrawerOpen(e){return e!=null&&e.opened}_drawerHasBackdrop(e){return this._backdropOverride==null?!!e&&e.mode!==`side`:this._backdropOverride}static ɵfac=function(t){return new(t||r)};static ɵcmp=(function(){let e=[[[`mat-drawer`],[`mat-sidenav`]],[[`mat-drawer-content`],[`mat-sidenav-content`]],`*`],t=[`mat-drawer, mat-sidenav`,`mat-drawer-content, mat-sidenav-content`,`*`];function n(i,o){if(i&1){let s=fC();Hi(0,`div`,1),nm(`click`,function(){Sd(s);let p=gC();return xd(p._onBackdropClicked())}),Rl()}if(i&2){let s=gC();pm(`mat-drawer-shown`,s._isShowingBackdrop())}}function a(i,o){i&1&&(Hi(0,`mat-drawer-content`),vC(1,2),Rl())}return aw({type:r,selectors:[[`mat-drawer-container`]],contentQueries:function(o,s,h){if(o&1&&om(h,L,5)(h,me,5),o&2){let p;IC(p=DC())&&(s._content=p.first),IC(p=DC())&&(s._allDrawers=p)}},viewQuery:function(o,s){if(o&1&&im(L,5),o&2){let h;IC(h=DC())&&(s._userContent=h.first)}},hostAttrs:[1,`mat-drawer-container`],hostVars:2,hostBindings:function(o,s){o&2&&pm(`mat-drawer-container-explicit-backdrop`,s._backdropOverride)},inputs:{autosize:`autosize`,hasBackdrop:`hasBackdrop`},outputs:{backdropClick:`backdropClick`},exportAs:[`matDrawerContainer`],features:[tb([{provide:he,useExisting:r}])],ngContentSelectors:t,decls:4,vars:2,consts:[[1,`mat-drawer-backdrop`,3,`mat-drawer-shown`],[1,`mat-drawer-backdrop`,3,`click`]],template:function(o,s){o&1&&(yC(e),eC(0,n,1,2,`div`,0),vC(1),vC(2,1),eC(3,a,2,0,`mat-drawer-content`)),o&2&&(nC(s.hasBackdrop?0:-1),ID(3),nC(s._content?-1:3))},dependencies:[L],styles:[`.mat-drawer-container {
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
`],encapsulation:2})})()}return r})();var He=(()=>{class r extends L{static ɵfac=(()=>{let e;return function(n){return(e||(e=RE(r)))(n||r)}})();static ɵcmp=(function(){return aw({type:r,selectors:[[`mat-sidenav-content`]],hostAttrs:[1,`mat-drawer-content`,`mat-sidenav-content`],features:[tb([{provide:Fm,useExisting:r},{provide:L,useExisting:r}]),Og],ngContentSelectors:[`*`],decls:1,vars:0,template:function(n,a){n&1&&(yC(),vC(0))},encapsulation:2})})()}return r})();var Je=(()=>{class r extends me{get fixedInViewport(){return this._fixedInViewport}set fixedInViewport(e){this._fixedInViewport=DS(e)}_fixedInViewport=!1;get fixedTopGap(){return this._fixedTopGap}set fixedTopGap(e){this._fixedTopGap=hi(e)}_fixedTopGap=0;get fixedBottomGap(){return this._fixedBottomGap}set fixedBottomGap(e){this._fixedBottomGap=hi(e)}_fixedBottomGap=0;static ɵfac=(()=>{let e;return function(n){return(e||(e=RE(r)))(n||r)}})();static ɵcmp=(function(){return aw({type:r,selectors:[[`mat-sidenav`]],hostAttrs:[1,`mat-drawer`,`mat-sidenav`],hostVars:16,hostBindings:function(n,a){n&2&&(qg(`tabIndex`,a.mode!==`side`?`-1`:null)(`align`,null),fm(`top`,a.fixedInViewport?a.fixedTopGap:null,`px`)(`bottom`,a.fixedInViewport?a.fixedBottomGap:null,`px`),pm(`mat-drawer-end`,a.position===`end`)(`mat-drawer-over`,a.mode===`over`)(`mat-drawer-push`,a.mode===`push`)(`mat-drawer-side`,a.mode===`side`)(`mat-sidenav-fixed`,a.fixedInViewport))},inputs:{fixedInViewport:`fixedInViewport`,fixedTopGap:`fixedTopGap`,fixedBottomGap:`fixedBottomGap`},exportAs:[`matSidenav`],features:[tb([{provide:me,useExisting:r}]),Og],ngContentSelectors:[`*`],decls:3,vars:0,consts:[[`content`,``],[`cdkScrollable`,``,1,`mat-drawer-inner-container`]],template:function(n,a){n&1&&(yC(),Hi(0,`div`,1,0),vC(2),Rl())},dependencies:[Fm],encapsulation:2})})()}return r})();var Dt=(()=>{class r extends pe{_allDrawers=void 0;_content=void 0;static ɵfac=(()=>{let e;return function(n){return(e||(e=RE(r)))(n||r)}})();static ɵcmp=(function(){let e=[[[`mat-drawer`],[`mat-sidenav`]],[[`mat-drawer-content`],[`mat-sidenav-content`]],`*`],t=[`mat-drawer, mat-sidenav`,`mat-drawer-content, mat-sidenav-content`,`*`];function n(i,o){if(i&1){let s=fC();Hi(0,`div`,1),nm(`click`,function(){Sd(s);let p=gC();return xd(p._onBackdropClicked())}),Rl()}if(i&2){let s=gC();pm(`mat-drawer-shown`,s._isShowingBackdrop())}}function a(i,o){i&1&&(Hi(0,`mat-sidenav-content`),vC(1,2),Rl())}return aw({type:r,selectors:[[`mat-sidenav-container`]],contentQueries:function(o,s,h){if(o&1&&om(h,He,5)(h,Je,5),o&2){let p;IC(p=DC())&&(s._content=p.first),IC(p=DC())&&(s._allDrawers=p)}},hostAttrs:[1,`mat-drawer-container`,`mat-sidenav-container`],hostVars:2,hostBindings:function(o,s){o&2&&pm(`mat-drawer-container-explicit-backdrop`,s._backdropOverride)},exportAs:[`matSidenavContainer`],features:[tb([{provide:he,useExisting:r},{provide:pe,useExisting:r}]),Og],ngContentSelectors:t,decls:4,vars:2,consts:[[1,`mat-drawer-backdrop`,3,`mat-drawer-shown`],[1,`mat-drawer-backdrop`,3,`click`]],template:function(o,s){o&1&&(yC(e),eC(0,n,1,2,`div`,0),vC(1),vC(2,1),eC(3,a,2,0,`mat-sidenav-content`)),o&2&&(nC(s.hasBackdrop?0:-1),ID(3),nC(s._content?-1:3))},dependencies:[He],styles:[`.mat-drawer-container {
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
`],encapsulation:2})})()}return r})();var Xe=[`canvas`];function Ye(r,m){if(r&1&&Qg(0,`img`,4,2),r&2){let e=gC();zg(`src`,e.previewImgSrc())}}function et(r,m){if(r&1&&QC(0),r&2){let e=m.$implicit;Vl(` `,e.message,` `)}}function tt(r,m){if(r&1&&(Hi(0,`mat-error`),oC(1,et,1,1,null,null,rC),Rl()),r&2){let e=gC();ID(),iC(e.newLibForm.title().errors())}}function nt(r,m){if(r&1&&QC(0),r&2){let e=m.$implicit;Vl(` `,e.message,` `)}}function rt(r,m){if(r&1&&(Hi(0,`mat-error`),oC(1,nt,1,1,null,null,rC),Rl()),r&2){let e=gC();ID(),iC(e.newLibForm.description().errors())}}var Ze=class r{selectedFile=Et(null);previewImgSrc=Et(null);imageSizeError=Et(null);canvas=Dj(`canvas`);signalModel=Et({title:``,description:``});newLibForm=Ao(this.signalModel,m=>{fs(m.title,{message:`Title is required for the new library!`}),cs(m.title,60,{message:`Title cannot be more than 60 characters!`}),us(m.title,3,{message:`Title cannot be less than 3 characters!`}),Ft(m.title,({value:e})=>{let t=e(),n=t.trim();return t!==n&&n===``?{kind:`trimmed`,message:`Title cannot be only blank space!`}:null}),cs(m.description,400,{message:`Descrption cannot be more than 400 characters!`})});result=it(()=>({description:this.signalModel().description,image:this.selectedFile(),title:this.signalModel().title.trim()}));onSelectImage(m){let e=m.target;if(e.files&&e.files[0])if(e.files[0].size>122880)if(this.canvas()){let t=new FileReader;t.onload=n=>{let a=new Image;a.onload=()=>{let i=this.canvas().nativeElement.getContext(`2d`),o=800,s=Math.round(a.height/a.width*o);this.canvas().nativeElement.width=o,this.canvas().nativeElement.height=s,i&&i.drawImage(a,0,0,o,s);let h=this.canvas().nativeElement.toDataURL(`image/webp`,.8);this.previewImgSrc.set(h),this.canvas().nativeElement.toBlob(p=>{if(p){let qe=new File([p],`editedImage`,{type:p.type||`application/octet-stream`,lastModified:Date.now()});this.selectedFile.set(qe)}},`image/webp`,.8)},a.src=n.target.result},t.readAsDataURL(e.files[0])}else this.imageSizeError.set(`Size of the choosen image cannot be more than 120 KB!`);else{this.selectedFile.set(e.files[0]);let t=new FileReader;t.onload=n=>{this.previewImgSrc.set(n.target.result)},t.readAsDataURL(e.files[0])}else this.selectedFile.set(null),this.previewImgSrc.set(null)}static ɵfac=function(e){return new(e||r)};static ɵcmp=aw({type:r,selectors:[[`app-new-library-form`]],viewQuery:function(e,t){e&1&&am(t.canvas,Xe,5),e&2&&TC()},decls:24,vars:7,consts:[[`fileInput`,``],[`canvas`,``],[`previewImg`,``],[`id`,`img-box`,1,`clearfix`],[`alt`,`image`,3,`src`],[`matButton`,`elevated`,`id`,`selectButton`,3,`click`],[`type`,`file`,`hidden`,``,3,`change`],[2,`display`,`none`],[`appearance`,`fill`,`subscriptSizing`,`dynamic`],[`type`,`text`,`matInput`,``,3,`formField`],[`matInput`,``,`placeholder`,`Write here..`,`rows`,`5`,3,`formField`],[`align`,`end`,2,`float`,`inline-end`],[`matButton`,``,`mat-dialog-close`,``],[`matButton`,`filled`,3,`mat-dialog-close`,`disabled`]],template:function(e,t){if(e&1){let n=fC();Hi(0,`mat-dialog-content`)(1,`div`,3),eC(2,Ye,2,1,`img`,4),Hi(3,`button`,5),nm(`click`,function(){Sd(n);let i=wC(6);return xd(i.click())}),QC(4,`Select an image`),Rl(),Hi(5,`input`,6,0),nm(`change`,function(i){return t.onSelectImage(i)}),Rl(),Qg(7,`canvas`,7,1),Rl(),Hi(9,`mat-form-field`,8)(10,`mat-label`),QC(11,`Title`),Rl(),Hi(12,`input`,9),vT(),Rl(),eC(13,tt,3,0,`mat-error`),Rl(),Hi(14,`mat-form-field`,8)(15,`mat-label`),QC(16,`Description`),Rl(),Hi(17,`textarea`,10),vT(),Rl(),eC(18,rt,3,0,`mat-error`),Rl(),Hi(19,`mat-dialog-actions`,11)(20,`button`,12),QC(21,`Cancel`),Rl(),Hi(22,`button`,13),QC(23,` Submit `),Rl()()()}e&2&&(ID(2),nC(t.previewImgSrc()?2:-1),ID(10),zg(`formField`,t.newLibForm.title),IT(),ID(),nC(t.newLibForm.title().touched()&&t.newLibForm.title().invalid()?13:-1),ID(4),zg(`formField`,t.newLibForm.description),IT(),ID(),nC(t.newLibForm.description().touched()&&t.newLibForm.description().invalid()?18:-1),ID(4),zg(`mat-dialog-close`,t.result())(`disabled`,t.newLibForm().invalid()))},dependencies:[se,le,ie,aa,d0,zn,Fl,Jo,ms],styles:[`mat-form-field[_ngcontent-%COMP%]{width:100%;margin:8px auto}mat-dialog-content[_ngcontent-%COMP%]{width:60vw;min-width:400px}@media screen and (max-width:800px){mat-dialog-content[_ngcontent-%COMP%]{width:80vw}}button#selectButton[_ngcontent-%COMP%]{margin:88px 8px 0}#img-box[_ngcontent-%COMP%]{margin:8px auto;width:fit-content}#img-box[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:150px;height:150px;object-fit:contain;float:left}`]})};export{Ze as i,He as n,Je as r,Dt as t};