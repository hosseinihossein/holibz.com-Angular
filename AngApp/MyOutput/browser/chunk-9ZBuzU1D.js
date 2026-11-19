import{t as p}from"./chunk-B-Zylx5n.js";import{t as a}from"./chunk-DXvsSCR6.js";import{t as o}from"./chunk-Dgb5wn2Z.js";import{i as Ze,n as He,r as Je,t as Dt}from"./chunk-DAz00hNE.js";import{t as C}from"./chunk-a9FyGxLJ.js";import{c as te,i as Ut}from"./chunk-B6x1SB07.js";import{c as V,i as N,l as X,n as G,r as H,s as R,t as B}from"./chunk-BF2eRkby.js";import{$ as qt,A as Yn,B as h0,G as ll,I as d0,J as pi,K as ml,L as di,M as _t,R as dn,X as py,Y as po,b as K0,d as Dc,et as rS,g as Hf,h as Gc,n as c,nt as tr,t as at,v as Ie$1,x as Kc}from"./main-7T6GM65G.js";import"./chunk-DEh4_Za2.js";import{A as ID,Ar as yC,D as Gy,Dn as kg,Et as Ud,H as K,In as nC,J as Ll,Kn as ob,M as Ic,N as Ij,O as Hi,On as kl,Or as xd,Pn as mt,Pr as zg,Pt as Wr,Q as Nj,Sn as iv,T as Fr,Tr as wm,Un as ny,Wn as oC,Xn as pm,Zn as qg,Zt as aw,_n as iC,_r as vC,_t as S,b as Ej,bn as is,bt as Sj,ct as QC,dn as gC,dr as tb,en as eC,er as rC,fn as gn,gr as v,jt as Vl,k as IC,ln as fm,lt as Qe,m as DC,mn as hE,mt as Rl,nn as ee,nt as Og,on as fC,qn as om,qt as _j,r as $r,rr,s as At,un as fw,ut as Qg,vn as ib,vt as Sd,w as Fe,x as Et,xn as it,yn as im,zn as nm,zt as Yg}from"./chunk-kniop8OV.js";var j=(()=>{class t{_listeners=[];notify(e,n){for(let d of this._listeners)d(e,n)}listen(e){return this._listeners.push(e),()=>{this._listeners=this._listeners.filter(n=>e!==n)}}ngOnDestroy(){this._listeners=[]}static ɵfac=function(n){return new(n||t)};static ɵprov=$r({token:t,factory:t.ɵfac})}return t})();var fn=new S(`CdkAccordion`);var vn=(()=>{class t{accordion=v(fn,{optional:!0,skipSelf:!0});_changeDetectorRef=v(_j);_expansionDispatcher=v(j);_openCloseAllSubscription=K.EMPTY;closed=new Qe;opened=new Qe;destroyed=new Qe;expandedChange=new Qe;id=v(Yn).getId(`cdk-accordion-child-`);get expanded(){return this._expanded}set expanded(e){if(this._expanded!==e){if(this._expanded=e,this.expandedChange.emit(e),e){this.opened.emit();let n=this.accordion?this.accordion.id:this.id;this._expansionDispatcher.notify(this.id,n)}else this.closed.emit();this._changeDetectorRef.markForCheck()}}_expanded=!1;get disabled(){return this._disabled()}set disabled(e){this._disabled.set(e)}_disabled=Et(!1);_removeUniqueSelectionListener=()=>{};ngOnInit(){this._removeUniqueSelectionListener=this._expansionDispatcher.listen((e,n)=>{this.accordion&&!this.accordion.multi&&this.accordion.id===n&&this.id!==e&&(this.expanded=!1)}),this.accordion&&(this._openCloseAllSubscription=this._subscribeToOpenCloseAllActions())}ngOnDestroy(){this.opened.complete(),this.closed.complete(),this.destroyed.emit(),this.destroyed.complete(),this._removeUniqueSelectionListener(),this._openCloseAllSubscription.unsubscribe()}toggle(){this.disabled||(this.expanded=!this.expanded)}close(){this.disabled||(this.expanded=!1)}open(){this.disabled||(this.expanded=!0)}_subscribeToOpenCloseAllActions(){return this.accordion._openCloseAllActions.subscribe(e=>{this.disabled||(this.expanded=e)})}static ɵfac=function(n){return new(n||t)};static ɵdir=fw({type:t,selectors:[[`cdk-accordion-item`],[``,`cdkAccordionItem`,``]],inputs:{expanded:[2,`expanded`,`expanded`,Nj],disabled:[2,`disabled`,`disabled`,Nj]},outputs:{closed:`closed`,opened:`opened`,destroyed:`destroyed`,expandedChange:`expandedChange`},exportAs:[`cdkAccordionItem`],features:[tb([{provide:fn,useValue:void 0}])]})}return t})();var yn=new S(`MAT_ACCORDION`);var _n=new S(`MAT_EXPANSION_PANEL`);var On=(()=>{class t{_template=v(Fr);_expansionPanel=v(_n,{optional:!0});static ɵfac=function(n){return new(n||t)};static ɵdir=fw({type:t,selectors:[[`ng-template`,`matExpansionPanelContent`,``]]})}return t})();var Cn=new S(`MAT_EXPANSION_PANEL_DEFAULT_OPTIONS`);var Ie=(()=>{class t extends vn{_viewContainerRef=v(is);_animationsDisabled=dn();_document=v(mt);_ngZone=v(Fe);_elementRef=v(Wr);_renderer=v(Ic);_cleanupTransitionEnd;get hideToggle(){return this._hideToggle||this.accordion&&this.accordion.hideToggle}set hideToggle(e){this._hideToggle=e}_hideToggle=!1;get togglePosition(){return this._togglePosition||this.accordion&&this.accordion.togglePosition}set togglePosition(e){this._togglePosition=e}_togglePosition;afterExpand=new Qe;afterCollapse=new Qe;_inputChanges=new ee;accordion=v(yn,{optional:!0,skipSelf:!0});_lazyContent;_body;_bodyWrapper;_portal;_headerId=v(Yn).getId(`mat-expansion-panel-header-`);constructor(){super();let e=v(Cn,{optional:!0});this._expansionDispatcher=v(j),e&&(this.hideToggle=e.hideToggle)}_hasSpacing(){return this.accordion?this.expanded&&this.accordion.displayMode==="default":!1}_getExpandedState(){return this.expanded?`expanded`:`collapsed`}toggle(){this.expanded=!this.expanded}close(){this.expanded=!1}open(){this.expanded=!0}ngAfterContentInit(){this._lazyContent&&this._lazyContent._expansionPanel===this&&this.opened.pipe(iv(null),rr(()=>this.expanded&&!this._portal),gn(1)).subscribe(()=>{this._portal=new tr(this._lazyContent._template,this._viewContainerRef)}),this._setupAnimationEvents()}ngOnChanges(e){this._inputChanges.next(e)}ngOnDestroy(){super.ngOnDestroy(),this._cleanupTransitionEnd?.(),this._inputChanges.complete()}_containsFocus(){if(this._body){let e=this._document.activeElement,n=this._body.nativeElement;return e===n||n.contains(e)}return!1}_transitionEndListener=({target:e,propertyName:n})=>{e===this._bodyWrapper?.nativeElement&&n===`grid-template-rows`&&this._ngZone.run(()=>{this.expanded?this.afterExpand.emit():this.afterCollapse.emit()})};_setupAnimationEvents(){this._ngZone.runOutsideAngular(()=>{this._animationsDisabled?(this.opened.subscribe(()=>this._ngZone.run(()=>this.afterExpand.emit())),this.closed.subscribe(()=>this._ngZone.run(()=>this.afterCollapse.emit()))):setTimeout(()=>{let e=this._elementRef.nativeElement;this._cleanupTransitionEnd=this._renderer.listen(e,`transitionend`,this._transitionEndListener),e.classList.add(`mat-expansion-panel-animations-enabled`)},200)})}static ɵfac=function(n){return new(n||t)};static ɵcmp=(function(){let e=[`body`],n=[`bodyWrapper`],d=[[[`mat-expansion-panel-header`]],`*`,[[`mat-action-row`]]],f=[`mat-expansion-panel-header`,`*`,`mat-action-row`];function m(p,h){}return aw({type:t,selectors:[[`mat-expansion-panel`]],contentQueries:function(h,g,k){if(h&1&&om(k,On,5),h&2){let Ee;IC(Ee=DC())&&(g._lazyContent=Ee.first)}},viewQuery:function(h,g){if(h&1&&im(e,5)(n,5),h&2){let k;IC(k=DC())&&(g._body=k.first),IC(k=DC())&&(g._bodyWrapper=k.first)}},hostAttrs:[1,`mat-expansion-panel`],hostVars:4,hostBindings:function(h,g){h&2&&pm(`mat-expanded`,g.expanded)(`mat-expansion-panel-spacing`,g._hasSpacing())},inputs:{hideToggle:[2,`hideToggle`,`hideToggle`,Nj],togglePosition:`togglePosition`},outputs:{afterExpand:`afterExpand`,afterCollapse:`afterCollapse`},exportAs:[`matExpansionPanel`],features:[tb([{provide:yn,useValue:void 0},{provide:_n,useExisting:t}]),Og,hE],ngContentSelectors:f,decls:9,vars:4,consts:[[`bodyWrapper`,``],[`body`,``],[1,`mat-expansion-panel-content-wrapper`],[`role`,`region`,1,`mat-expansion-panel-content`,3,`id`],[1,`mat-expansion-panel-body`],[3,`cdkPortalOutlet`]],template:function(h,g){h&1&&(yC(d),vC(0),Hi(1,`div`,2,0)(3,`div`,3,1)(5,`div`,4),vC(6,1),kg(7,m,0,0,`ng-template`,5),Rl(),vC(8,2),Rl()()),h&2&&(ID(),qg(`inert`,g.expanded?null:``),ID(2),zg(`id`,g.id),qg(`aria-labelledby`,g._headerId),ID(4),zg(`cdkPortalOutlet`,g._portal))},dependencies:[K0],styles:[`.mat-expansion-panel {
  box-sizing: content-box;
  display: block;
  margin: 0;
  overflow: hidden;
}
.mat-expansion-panel.mat-expansion-panel-animations-enabled {
  transition: margin 225ms cubic-bezier(0.4, 0, 0.2, 1), box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-expansion-panel {
  position: relative;
  background: var(--%NS%mat-expansion-container-background-color, var(--%NS%mat-sys-surface));
  color: var(--%NS%mat-expansion-container-text-color, var(--%NS%mat-sys-on-surface));
  border-radius: var(--%NS%mat-expansion-container-shape, 12px);
}
.mat-expansion-panel:not([class*=mat-elevation-z]) {
  box-shadow: var(--%NS%mat-expansion-container-elevation-shadow, 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12));
}
.mat-accordion .mat-expansion-panel:not(.mat-expanded), .mat-accordion .mat-expansion-panel:not(.mat-expansion-panel-spacing) {
  border-radius: 0;
}
.mat-accordion .mat-expansion-panel:first-of-type {
  border-top-right-radius: var(--%NS%mat-expansion-container-shape, 12px);
  border-top-left-radius: var(--%NS%mat-expansion-container-shape, 12px);
}
.mat-accordion .mat-expansion-panel:last-of-type {
  border-bottom-right-radius: var(--%NS%mat-expansion-container-shape, 12px);
  border-bottom-left-radius: var(--%NS%mat-expansion-container-shape, 12px);
}
@media (forced-colors: active) {
  .mat-expansion-panel {
    outline: solid 1px;
  }
}

.mat-expansion-panel-content-wrapper {
  display: grid;
  grid-template-rows: 0fr;
  grid-template-columns: 100%;
}
.mat-expansion-panel-animations-enabled .mat-expansion-panel-content-wrapper {
  transition: grid-template-rows 225ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-expansion-panel.mat-expanded > .mat-expansion-panel-content-wrapper {
  grid-template-rows: 1fr;
}
@supports not (grid-template-rows: 0fr) {
  .mat-expansion-panel-content-wrapper {
    height: 0;
  }
  .mat-expansion-panel.mat-expanded > .mat-expansion-panel-content-wrapper {
    height: auto;
  }
}
@media print {
  .mat-expansion-panel-content-wrapper {
    height: 0;
  }
  .mat-expansion-panel.mat-expanded > .mat-expansion-panel-content-wrapper {
    height: auto;
  }
}

.mat-expansion-panel-content {
  display: flex;
  flex-direction: column;
  overflow: visible;
  min-height: 0;
  visibility: hidden;
}
.mat-expansion-panel-animations-enabled .mat-expansion-panel-content {
  transition: visibility 190ms linear;
}
.mat-expansion-panel.mat-expanded > .mat-expansion-panel-content-wrapper > .mat-expansion-panel-content {
  visibility: visible;
}
.mat-expansion-panel-content {
  font-family: var(--%NS%mat-expansion-container-text-font, var(--%NS%mat-sys-body-large-font));
  font-size: var(--%NS%mat-expansion-container-text-size, var(--%NS%mat-sys-body-large-size));
  font-weight: var(--%NS%mat-expansion-container-text-weight, var(--%NS%mat-sys-body-large-weight));
  line-height: var(--%NS%mat-expansion-container-text-line-height, var(--%NS%mat-sys-body-large-line-height));
  letter-spacing: var(--%NS%mat-expansion-container-text-tracking, var(--%NS%mat-sys-body-large-tracking));
}

.mat-expansion-panel-body {
  padding: 0 24px 16px;
}

.mat-expansion-panel-spacing {
  margin: 16px 0;
}
.mat-accordion > .mat-expansion-panel-spacing:first-child, .mat-accordion > *:first-child:not(.mat-expansion-panel) .mat-expansion-panel-spacing {
  margin-top: 0;
}
.mat-accordion > .mat-expansion-panel-spacing:last-child, .mat-accordion > *:last-child:not(.mat-expansion-panel) .mat-expansion-panel-spacing {
  margin-bottom: 0;
}

.mat-action-row {
  border-top-style: solid;
  border-top-width: 1px;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  padding: 16px 8px 16px 24px;
  border-top-color: var(--%NS%mat-expansion-actions-divider-color, var(--%NS%mat-sys-outline));
}
.mat-action-row .mat-button-base,
.mat-action-row .mat-mdc-button-base {
  margin-left: 8px;
}
[dir=rtl] .mat-action-row .mat-button-base,
[dir=rtl] .mat-action-row .mat-mdc-button-base {
  margin-left: 0;
  margin-right: 8px;
}
`],encapsulation:2})})()}return t})();var Mn=(()=>{class t{static ɵfac=function(n){return new(n||t)};static ɵdir=fw({type:t,selectors:[[`mat-action-row`]],hostAttrs:[1,`mat-action-row`]})}return t})();var wn=(()=>{class t{panel=v(Ie,{host:!0});_element=v(Wr);_focusMonitor=v(pi);_changeDetectorRef=v(_j);_parentChangeSubscription=K.EMPTY;constructor(){v(_t).load(ll);let e=this.panel,n=v(Cn,{optional:!0}),d=v(new ny(`tabindex`),{optional:!0}),f=e.accordion?e.accordion._stateChanges.pipe(rr(m=>!!(m.hideToggle||m.togglePosition))):At;this.tabIndex=parseInt(d||``)||0,this._parentChangeSubscription=Gy(e.opened,e.closed,f,e._inputChanges.pipe(rr(m=>!!(m.hideToggle||m.disabled||m.togglePosition)))).subscribe(()=>this._changeDetectorRef.markForCheck()),e.closed.pipe(rr(()=>e._containsFocus())).subscribe(()=>this._focusMonitor.focusVia(this._element,`program`)),n&&(this.expandedHeight=n.expandedHeight,this.collapsedHeight=n.collapsedHeight)}expandedHeight;collapsedHeight;tabIndex=0;get disabled(){return this.panel.disabled}_toggle(){this.disabled||this.panel.toggle()}_isExpanded(){return this.panel.expanded}_getExpandedState(){return this.panel._getExpandedState()}_getPanelId(){return this.panel.id}_getTogglePosition(){return this.panel.togglePosition}_showToggle(){return!this.panel.hideToggle&&!this.panel.disabled}_getHeaderHeight(){let e=this._isExpanded();return e&&this.expandedHeight?this.expandedHeight:!e&&this.collapsedHeight?this.collapsedHeight:null}_keydown(e){switch(e.keyCode){case 32:case 13:Kc(e)||(e.preventDefault(),this._toggle());break;default:this.panel.accordion&&this.panel.accordion._handleHeaderKeydown(e);return}}focus(e,n){e?this._focusMonitor.focusVia(this._element,e,n):this._element.nativeElement.focus(n)}ngAfterViewInit(){this._focusMonitor.monitor(this._element).subscribe(e=>{e&&this.panel.accordion&&this.panel.accordion._handleHeaderFocus(this)})}ngOnDestroy(){this._parentChangeSubscription.unsubscribe(),this._focusMonitor.stopMonitoring(this._element)}static ɵfac=function(n){return new(n||t)};static ɵcmp=(function(){let e=[[[`mat-panel-title`]],[[`mat-panel-description`]],`*`],n=[`mat-panel-title`,`mat-panel-description`,`*`];function d(f,m){f&1&&(kl(0,`span`,1),Ud(),kl(1,`svg`,2),Yg(2,`path`,3),Ll()())}return aw({type:t,selectors:[[`mat-expansion-panel-header`]],hostAttrs:[`role`,`button`,1,`mat-expansion-panel-header`,`mat-focus-indicator`],hostVars:13,hostBindings:function(m,p){m&1&&nm(`click`,function(){return p._toggle()})(`keydown`,function(g){return p._keydown(g)}),m&2&&(qg(`id`,p.panel._headerId)(`tabindex`,p.disabled?-1:p.tabIndex)(`aria-controls`,p._getPanelId())(`aria-expanded`,p._isExpanded())(`aria-disabled`,p.panel.disabled),fm(`height`,p._getHeaderHeight()),pm(`mat-expanded`,p._isExpanded())(`mat-expansion-toggle-indicator-after`,p._getTogglePosition()===`after`)(`mat-expansion-toggle-indicator-before`,p._getTogglePosition()===`before`))},inputs:{expandedHeight:`expandedHeight`,collapsedHeight:`collapsedHeight`,tabIndex:[2,`tabIndex`,`tabIndex`,f=>f==null?0:Sj(f)]},ngContentSelectors:n,decls:5,vars:3,consts:[[1,`mat-content`],[1,`mat-expansion-indicator`],[`xmlns`,`http://www.w3.org/2000/svg`,`viewBox`,`0 -960 960 960`,`aria-hidden`,`true`,`focusable`,`false`],[`d`,`M480-345 240-585l56-56 184 184 184-184 56 56-240 240Z`]],template:function(m,p){m&1&&(yC(e),kl(0,`span`,0),vC(1),vC(2,1),vC(3,2),Ll(),eC(4,d,3,0,`span`,1)),m&2&&(pm(`mat-content-hide-toggle`,!p._showToggle()),ID(4),nC(p._showToggle()?4:-1))},styles:[`.mat-expansion-panel-header {
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0 24px;
  border-radius: inherit;
  outline: 0;
}
.mat-expansion-panel-animations-enabled .mat-expansion-panel-header {
  transition: height 225ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-expansion-panel-header::before {
  border-radius: inherit;
}
.mat-expansion-panel-header {
  height: var(--%NS%mat-expansion-header-collapsed-state-height, 48px);
  font-family: var(--%NS%mat-expansion-header-text-font, var(--%NS%mat-sys-title-medium-font));
  font-size: var(--%NS%mat-expansion-header-text-size, var(--%NS%mat-sys-title-medium-size));
  font-weight: var(--%NS%mat-expansion-header-text-weight, var(--%NS%mat-sys-title-medium-weight));
  line-height: var(--%NS%mat-expansion-header-text-line-height, var(--%NS%mat-sys-title-medium-line-height));
  letter-spacing: var(--%NS%mat-expansion-header-text-tracking, var(--%NS%mat-sys-title-medium-tracking));
}
.mat-expansion-panel-header.mat-expanded {
  height: var(--%NS%mat-expansion-header-expanded-state-height, 64px);
}
.mat-expansion-panel-header[aria-disabled=true] {
  color: var(--%NS%mat-expansion-header-disabled-state-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mat-expansion-panel-header:not([aria-disabled=true]) {
  cursor: pointer;
}
.mat-expansion-panel:not(.mat-expanded) .mat-expansion-panel-header:not([aria-disabled=true]):hover {
  background: var(--%NS%mat-expansion-header-hover-state-layer-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) calc(var(--%NS%mat-sys-hover-state-layer-opacity) * 100%), transparent));
}
@media (hover: none) {
  .mat-expansion-panel:not(.mat-expanded) .mat-expansion-panel-header:not([aria-disabled=true]):hover {
    background: var(--%NS%mat-expansion-container-background-color, var(--%NS%mat-sys-surface));
  }
}
.mat-expansion-panel .mat-expansion-panel-header:not([aria-disabled=true]).cdk-keyboard-focused, .mat-expansion-panel .mat-expansion-panel-header:not([aria-disabled=true]).cdk-program-focused {
  background: var(--%NS%mat-expansion-header-focus-state-layer-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) calc(var(--%NS%mat-sys-focus-state-layer-opacity) * 100%), transparent));
}
.mat-expansion-panel-header._mat-animation-noopable {
  transition: none;
}
.mat-expansion-panel-header.mat-expanded:focus, .mat-expansion-panel-header.mat-expanded:hover {
  background: inherit;
}
.mat-expansion-panel-header.mat-expansion-toggle-indicator-before {
  flex-direction: row-reverse;
}
.mat-expansion-panel-header.mat-expansion-toggle-indicator-before .mat-expansion-indicator {
  margin: 0 16px 0 0;
}
[dir=rtl] .mat-expansion-panel-header.mat-expansion-toggle-indicator-before .mat-expansion-indicator {
  margin: 0 0 0 16px;
}

.mat-content {
  display: flex;
  flex: 1;
  flex-direction: row;
  overflow: hidden;
}
.mat-content.mat-content-hide-toggle {
  margin-right: 8px;
}
[dir=rtl] .mat-content.mat-content-hide-toggle {
  margin-right: 0;
  margin-left: 8px;
}
.mat-expansion-toggle-indicator-before .mat-content.mat-content-hide-toggle {
  margin-left: 24px;
  margin-right: 0;
}
[dir=rtl] .mat-expansion-toggle-indicator-before .mat-content.mat-content-hide-toggle {
  margin-right: 24px;
  margin-left: 0;
}

.mat-expansion-panel-header-title {
  color: var(--%NS%mat-expansion-header-text-color, var(--%NS%mat-sys-on-surface));
}

.mat-expansion-panel-header-title,
.mat-expansion-panel-header-description {
  display: flex;
  flex-grow: 1;
  flex-basis: 0;
  margin-right: 16px;
  align-items: center;
}
[dir=rtl] .mat-expansion-panel-header-title,
[dir=rtl] .mat-expansion-panel-header-description {
  margin-right: 0;
  margin-left: 16px;
}
.mat-expansion-panel-header[aria-disabled=true] .mat-expansion-panel-header-title,
.mat-expansion-panel-header[aria-disabled=true] .mat-expansion-panel-header-description {
  color: inherit;
}

.mat-expansion-panel-header-description {
  flex-grow: 2;
  color: var(--%NS%mat-expansion-header-description-color, var(--%NS%mat-sys-on-surface-variant));
}

.mat-expansion-panel-animations-enabled .mat-expansion-indicator {
  transition: transform 225ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-expansion-panel-header.mat-expanded .mat-expansion-indicator {
  transform: rotate(180deg);
}
.mat-expansion-indicator::after {
  border-style: solid;
  border-width: 0 2px 2px 0;
  content: "";
  padding: 3px;
  transform: rotate(45deg);
  vertical-align: middle;
  color: var(--%NS%mat-expansion-header-indicator-color, var(--%NS%mat-sys-on-surface-variant));
  display: var(--%NS%mat-expansion-legacy-header-indicator-display, none);
}
.mat-expansion-indicator svg {
  width: 24px;
  height: 24px;
  margin: 0 -8px;
  vertical-align: middle;
  fill: var(--%NS%mat-expansion-header-indicator-color, var(--%NS%mat-sys-on-surface-variant));
  display: var(--%NS%mat-expansion-header-indicator-display, inline-block);
}

@media (forced-colors: active) {
  .mat-expansion-panel-content {
    border-top: 1px solid;
    border-top-left-radius: 0;
    border-top-right-radius: 0;
  }
}
`],encapsulation:2})})()}return t})();var Sn=(()=>{class t{static ɵfac=function(n){return new(n||t)};static ɵdir=fw({type:t,selectors:[[`mat-panel-description`]],hostAttrs:[1,`mat-expansion-panel-header-description`]})}return t})();var In=(()=>{class t{static ɵfac=function(n){return new(n||t)};static ɵdir=fw({type:t,selectors:[[`mat-panel-title`]],hostAttrs:[1,`mat-expansion-panel-header-title`]})}return t})();var zn=new S(`MAT_BADGE_CONFIG`);var Nn=`mat-badge-content`;var kn=(()=>{class t{static ɵfac=function(n){return new(n||t)};static ɵcmp=aw({type:t,selectors:[[`ng-component`]],decls:0,vars:0,template:function(n,d){},styles:[`.mat-badge {
  position: relative;
}
.mat-badge.mat-badge {
  overflow: visible;
}

.mat-badge-content {
  position: absolute;
  text-align: center;
  display: inline-block;
  transition: transform 200ms ease-in-out;
  transform: scale(0.6);
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  box-sizing: border-box;
  pointer-events: none;
  background-color: var(--%NS%mat-badge-background-color, var(--%NS%mat-sys-error));
  color: var(--%NS%mat-badge-text-color, var(--%NS%mat-sys-on-error));
  font-family: var(--%NS%mat-badge-text-font, var(--%NS%mat-sys-label-small-font));
  font-weight: var(--%NS%mat-badge-text-weight, var(--%NS%mat-sys-label-small-weight));
  border-radius: var(--%NS%mat-badge-container-shape, var(--%NS%mat-sys-corner-full));
}
.mat-badge-above .mat-badge-content {
  bottom: 100%;
}
.mat-badge-below .mat-badge-content {
  top: 100%;
}
.mat-badge-before .mat-badge-content {
  right: 100%;
}
[dir=rtl] .mat-badge-before .mat-badge-content {
  right: auto;
  left: 100%;
}
.mat-badge-after .mat-badge-content {
  left: 100%;
}
[dir=rtl] .mat-badge-after .mat-badge-content {
  left: auto;
  right: 100%;
}
@media (forced-colors: active) {
  .mat-badge-content {
    outline: solid 1px;
    border-radius: 0;
  }
}

.mat-badge-disabled .mat-badge-content {
  background-color: var(--%NS%mat-badge-disabled-state-background-color, color-mix(in srgb, var(--%NS%mat-sys-error) 38%, transparent));
  color: var(--%NS%mat-badge-disabled-state-text-color, var(--%NS%mat-sys-on-error));
}

.mat-badge-hidden .mat-badge-content {
  display: none;
}

.ng-animate-disabled .mat-badge-content,
.mat-badge-content._mat-animation-noopable {
  transition: none;
}

.mat-badge-content.mat-badge-active {
  transform: none;
}

.mat-badge-small .mat-badge-content {
  width: var(--%NS%mat-badge-legacy-small-size-container-size, unset);
  height: var(--%NS%mat-badge-legacy-small-size-container-size, unset);
  min-width: var(--%NS%mat-badge-small-size-container-size, 6px);
  min-height: var(--%NS%mat-badge-small-size-container-size, 6px);
  line-height: var(--%NS%mat-badge-small-size-line-height, 6px);
  padding: var(--%NS%mat-badge-small-size-container-padding, 0);
  font-size: var(--%NS%mat-badge-small-size-text-size, 0);
  margin: var(--%NS%mat-badge-small-size-container-offset, -6px 0);
}
.mat-badge-small.mat-badge-overlap .mat-badge-content {
  margin: var(--%NS%mat-badge-small-size-container-overlap-offset, -6px);
}

.mat-badge-medium .mat-badge-content {
  width: var(--%NS%mat-badge-legacy-container-size, unset);
  height: var(--%NS%mat-badge-legacy-container-size, unset);
  min-width: var(--%NS%mat-badge-container-size, 16px);
  min-height: var(--%NS%mat-badge-container-size, 16px);
  line-height: var(--%NS%mat-badge-line-height, 16px);
  padding: var(--%NS%mat-badge-container-padding, 0 4px);
  font-size: var(--%NS%mat-badge-text-size, var(--%NS%mat-sys-label-small-size));
  margin: var(--%NS%mat-badge-container-offset, -12px 0);
}
.mat-badge-medium.mat-badge-overlap .mat-badge-content {
  margin: var(--%NS%mat-badge-container-overlap-offset, -12px);
}

.mat-badge-large .mat-badge-content {
  width: var(--%NS%mat-badge-legacy-large-size-container-size, unset);
  height: var(--%NS%mat-badge-legacy-large-size-container-size, unset);
  min-width: var(--%NS%mat-badge-large-size-container-size, 16px);
  min-height: var(--%NS%mat-badge-large-size-container-size, 16px);
  line-height: var(--%NS%mat-badge-large-size-line-height, 16px);
  padding: var(--%NS%mat-badge-large-size-container-padding, 0 4px);
  font-size: var(--%NS%mat-badge-large-size-text-size, var(--%NS%mat-sys-label-small-size));
  margin: var(--%NS%mat-badge-large-size-container-offset, -12px 0);
}
.mat-badge-large.mat-badge-overlap .mat-badge-content {
  margin: var(--%NS%mat-badge-large-size-container-overlap-offset, -12px);
}
`],encapsulation:2})}return t})();var En=(()=>{class t{_ngZone=v(Fe);_elementRef=v(Wr);_ariaDescriber=v(rS);_renderer=v(Ic);_animationsDisabled=dn();_idGenerator=v(Yn);get color(){return this._color}set color(e){this._setColor(e),this._color=e}_color;overlap;disabled=!1;position;get content(){return this._content}set content(e){this._updateRenderedContent(e)}_content;get description(){return this._description}set description(e){this._updateDescription(e)}_description;size;hidden=!1;_badgeElement;_inlineBadgeDescription;_isInitialized=!1;_interactivityChecker=v(Gc);_document=v(mt);constructor(){let e=v(zn,{optional:!0}),n=v(_t);n.load(kn),n.load(di),this._color=e?.color||`primary`,this.overlap=e?.overlap??!0,this.position=e?.position||`above after`,this.size=e?.size||`medium`}isAbove(){return this.position.indexOf(`below`)===-1}isAfter(){return this.position.indexOf(`before`)===-1}getBadgeElement(){return this._badgeElement}ngOnInit(){this._clearExistingBadges(),this.content&&!this._badgeElement&&(this._badgeElement=this._createBadgeElement(),this._updateRenderedContent(this.content)),this._isInitialized=!0}ngAfterViewInit(){}ngOnDestroy(){this._renderer.destroyNode&&(this._renderer.destroyNode(this._badgeElement),this._inlineBadgeDescription?.remove()),this._ariaDescriber.removeDescription(this._elementRef.nativeElement,this.description)}_isHostInteractive(){return this._interactivityChecker.isFocusable(this._elementRef.nativeElement,{ignoreVisibility:!0})}_createBadgeElement(){let e=this._renderer.createElement(`span`),n=`mat-badge-active`;return e.setAttribute(`id`,this._idGenerator.getId(`mat-badge-content-`)),e.setAttribute(`aria-hidden`,`true`),e.classList.add(Nn),this._animationsDisabled&&e.classList.add(`_mat-animation-noopable`),this._elementRef.nativeElement.appendChild(e),typeof requestAnimationFrame==`function`&&!this._animationsDisabled?this._ngZone.runOutsideAngular(()=>{requestAnimationFrame(()=>{e.classList.add(n)})}):e.classList.add(n),e}_updateRenderedContent(e){let n=`${e??``}`.trim();this._isInitialized&&n&&!this._badgeElement&&(this._badgeElement=this._createBadgeElement()),this._badgeElement&&(this._badgeElement.textContent=n),this._content=n}_updateDescription(e){this._ariaDescriber.removeDescription(this._elementRef.nativeElement,this.description),(!e||this._isHostInteractive())&&this._removeInlineDescription(),this._description=e,this._isHostInteractive()?this._ariaDescriber.describe(this._elementRef.nativeElement,e):this._updateInlineDescription()}_updateInlineDescription(){this._inlineBadgeDescription||(this._inlineBadgeDescription=this._document.createElement(`span`),this._inlineBadgeDescription.classList.add(`cdk-visually-hidden`)),this._inlineBadgeDescription.textContent=this.description,this._badgeElement?.appendChild(this._inlineBadgeDescription)}_removeInlineDescription(){this._inlineBadgeDescription?.remove(),this._inlineBadgeDescription=void 0}_setColor(e){let n=this._elementRef.nativeElement.classList;n.remove(`mat-badge-${this._color}`),e&&n.add(`mat-badge-${e}`)}_clearExistingBadges(){let e=this._elementRef.nativeElement.querySelectorAll(`:scope > .${Nn}`);for(let n of Array.from(e))n!==this._badgeElement&&n.remove()}static ɵfac=function(n){return new(n||t)};static ɵdir=fw({type:t,selectors:[[``,`matBadge`,``]],hostAttrs:[1,`mat-badge`],hostVars:20,hostBindings:function(n,d){n&2&&pm(`mat-badge-overlap`,d.overlap)(`mat-badge-above`,d.isAbove())(`mat-badge-below`,!d.isAbove())(`mat-badge-before`,!d.isAfter())(`mat-badge-after`,d.isAfter())(`mat-badge-small`,d.size===`small`)(`mat-badge-medium`,d.size===`medium`)(`mat-badge-large`,d.size===`large`)(`mat-badge-hidden`,d.hidden||!d.content)(`mat-badge-disabled`,d.disabled)},inputs:{color:[0,`matBadgeColor`,`color`],overlap:[2,`matBadgeOverlap`,`overlap`,Nj],disabled:[2,`matBadgeDisabled`,`disabled`,Nj],position:[0,`matBadgePosition`,`position`],content:[0,`matBadge`,`content`],description:[0,`matBadgeDescription`,`description`],size:[0,`matBadgeSize`,`size`],hidden:[2,`matBadgeHidden`,`hidden`,Nj]}})}return t})();function Tn(t,r){if(t&1&&Qg(0,`img`,3,0),t&2){let e=gC();zg(`ngSrc`,e.docCardInfo.value()?.imageUrl)}}var be=class t{docId=Ij.required();docService=v(a);docCardInfo=po(()=>this.docService.GetDocMiniCardInfo_Url+this.docId());appearance=Et(`outlined`);constructor(){}raiseCard(){this.appearance.set(`raised`)}outlineCard(){this.appearance.set(`outlined`)}static ɵfac=function(e){return new(e||t)};static ɵcmp=aw({type:t,selectors:[[`app-document-mini-card`]],inputs:{docId:[1,`docId`]},decls:8,vars:6,consts:[[`mainImg`,``],[3,`mouseenter`,`mouseleave`,`appearance`],[2,`padding`,`4px`],[`mat-card-image`,``,`width`,`100`,`height`,`100`,`alt`,`document image`,3,`ngSrc`]],template:function(e,n){e&1&&(Hi(0,`mat-card`,1),nm(`mouseenter`,function(){return n.raiseCard()})(`mouseleave`,function(){return n.outlineCard()}),Hi(1,`mat-card-header`,2)(2,`mat-card-title`),QC(3),Rl()(),Hi(4,`mat-card-content`),eC(5,Tn,2,1,`img`,3),Hi(6,`p`),QC(7),Rl()()()),e&2&&(zg(`appearance`,n.appearance()),ID(3),Vl(` `,n.docCardInfo.value()?.title,` `),ID(2),nC(n.docCardInfo.value()?.imageUrl?5:-1),ID(),pm(`display`,!n.docCardInfo.value()?.imageUrl),ID(),Vl(` `,n.docCardInfo.value()?.description,` `))},dependencies:[V,H,Hf,R,X],styles:[`mat-card[_ngcontent-%COMP%]{width:100px;height:200px;transition:all .15s;position:relative}mat-card[_ngcontent-%COMP%]:hover{border:1px solid var(--%NS%mat-sys-outline-variant);width:150px}mat-card-title[_ngcontent-%COMP%]{font-size:14px;line-height:16px;text-align:center;font-weight:500}mat-card[_ngcontent-%COMP%]:hover   mat-card-title[_ngcontent-%COMP%]{text-align:center;font-weight:700}mat-card-content[_ngcontent-%COMP%]{height:200px;overflow:auto;padding:0;flex:1 1 auto}mat-card-content[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;height:100px;object-fit:contain;transition:all .15s}mat-card[_ngcontent-%COMP%]:hover   mat-card-content[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{height:150px}mat-card-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{display:none;padding:0 4px;font-size:12px;line-height:14px;margin:0}mat-card[_ngcontent-%COMP%]:hover   mat-card-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], mat-card-content[_ngcontent-%COMP%]   p.display[_ngcontent-%COMP%]{display:block}`]})};var Bn=t=>[`/UserAccount/Profile`,t];function Ln(t,r){if(t&1&&Qg(0,`img`,3),t&2){let e=gC();zg(`ngSrc`,e.shelfCardInfo.value().imageUrl)}}function Rn(t,r){t&1&&(Hi(0,`mat-icon`),QC(1,`newsstand`),Rl())}function Hn(t,r){if(t&1&&Qg(0,`img`,5),t&2){let e=gC();zg(`ngSrc`,e.ownerAvatarUrl())(`matTooltip`,e.ownerUsername())}}function Fn(t,r){if(t&1&&(Hi(0,`mat-icon`,6),QC(1,`account_circle`),Rl()),t&2){let e=gC();zg(`matTooltip`,e.ownerUsername())}}function Un(t,r){if(t&1){let e=fC();Hi(0,`app-document-mini-card`,10),nm(`click`,function(){let d=Sd(e).$implicit,f=gC();return xd(f.router.navigate([`/Document`,d]))}),Rl()}if(t&2){let e=r.$implicit;zg(`docId`,e)}}var ve=class t{shelfId=Ij.required();shelfService=v(p);profileService=v(c);identityService=v(ml);router=v(Ie$1);docService=v(a);shelfCardInfo=po(()=>this.shelfService.GetShelfCardInfo_Url+this.shelfId());isMine=it(()=>this.identityService.isAuthenticated()&&this.shelfCardInfo.value()&&this.shelfCardInfo.value()?.ownerId===this.identityService.myIdentityInfo.value()?.id);otherOwnerUsername=po(()=>{if(this.shelfCardInfo.value())return this.isMine()?void 0:this.identityService.GetUsername_Url+this.shelfCardInfo.value()?.ownerId});ownerUsername=it(()=>this.shelfCardInfo.value()&&this.isMine()?this.identityService.myIdentityInfo.value()?.userName:this.otherOwnerUsername.value()?.username);otherOwnerAvatarUrl=po(()=>{if(this.shelfCardInfo.value())return this.isMine()?void 0:this.profileService.GetAvatarUrl_Url+this.shelfCardInfo.value()?.ownerId},{parse:r=>r===null?void 0:r});ownerAvatarUrl=it(()=>this.shelfCardInfo.value()&&this.isMine()?this.profileService.myProfileInfo.value()?.avatarUrl:this.otherOwnerAvatarUrl.value()?.avatarUrl);docIds=po(()=>this.docService.GetDocIdsOfShelf_Url+this.shelfId());constructor(){}openShelf(){this.router.navigate([`/Shelf`,this.shelfId()])}static ɵfac=function(e){return new(e||t)};static ɵcmp=aw({type:t,selectors:[[`app-shelf-card`]],inputs:{shelfId:[1,`shelfId`]},decls:20,vars:8,consts:[[`hideToggle`,``,`expanded`,``],[`tagName`,`Shelf`,`iconName`,`newsstand`],[`matBadgePosition`,`above`,1,`icon-box`,3,`matBadge`],[`width`,`40`,`height`,`40`,`alt`,`shelf image`,3,`ngSrc`],[3,`routerLink`],[`id`,`owner-username`,`priority`,``,`width`,`40`,`height`,`40`,`alt`,`user image`,3,`ngSrc`,`matTooltip`],[2,`font-size`,`50px`,`width`,`50px`,`height`,`50px`,3,`matTooltip`],[1,`listOfDocs`],[2,`cursor`,`pointer`,3,`docId`],[`matButton`,``,3,`click`],[2,`cursor`,`pointer`,3,`click`,`docId`]],template:function(e,n){e&1&&(Hi(0,`mat-expansion-panel`,0),Qg(1,`app-card-tag`,1),Hi(2,`mat-expansion-panel-header`)(3,`mat-panel-title`)(4,`div`,2),eC(5,Ln,1,1,`img`,3)(6,Rn,2,0,`mat-icon`),Rl(),QC(7),Rl(),Hi(8,`mat-panel-description`)(9,`p`),QC(10),Rl()(),Hi(11,`a`,4),eC(12,Hn,1,2,`img`,5)(13,Fn,2,1,`mat-icon`,6),Rl()(),Hi(14,`div`,7),oC(15,Un,1,1,`app-document-mini-card`,8,rC),Rl(),Hi(17,`mat-action-row`)(18,`button`,9),nm(`click`,function(){return n.openShelf()}),QC(19,`Open`),Rl()()()),e&2&&(ID(4),zg(`matBadge`,n.shelfCardInfo.value()?.totalNumberOfDocs),ID(),nC(n.shelfCardInfo.hasValue()&&n.shelfCardInfo.value().imageUrl?5:6),ID(2),Vl(` `,n.shelfCardInfo.value()?.title,` `),ID(3),Vl(` `,n.shelfCardInfo.value()?.description,` `),ID(),zg(`routerLink`,ib(6,Bn,n.shelfCardInfo.value()?.ownerId)),ID(),nC(n.ownerAvatarUrl()?12:13),ID(3),iC(n.docIds.value()?.docIds))},dependencies:[Ie,wn,In,N,Sn,py,Hf,at,Mn,d0,En,be,Dc],styles:[`[_nghost-%COMP%]{width:100%}img[_ngcontent-%COMP%]{border-radius:50%;overflow:hidden;width:40px;height:40px;object-fit:contain}mat-expansion-panel[_ngcontent-%COMP%]{padding:0;border:1px solid var(--%NS%mat-sys-outline-variant);overflow:visible}mat-expansion-panel[_ngcontent-%COMP%]   .listOfDocs[_ngcontent-%COMP%]{display:flex;justify-content:start}mat-expansion-panel[_ngcontent-%COMP%]   .listOfDocs[_ngcontent-%COMP%]   app-document-mini-card[_ngcontent-%COMP%]{margin:8px}mat-expansion-panel-header[_ngcontent-%COMP%]{padding:8px 0 8px 4px}mat-panel-title[_ngcontent-%COMP%]{width:fit-content;text-wrap:nowrap}mat-panel-description[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:14px;width:100%;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}mat-action-row[_ngcontent-%COMP%]{padding:8px;border-top:none}.icon-box[_ngcontent-%COMP%]{width:40px;height:40px;float:left;margin:0 8px}.icon-box[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{width:40px;height:40px;font-size:32px;text-align:center;position:relative;top:14px}`]})};function Vn(t,r){if(t&1){let e=fC();Hi(0,`button`,6),nm(`click`,function(){Sd(e);let d=gC();return xd(d.openNewShelfForm())}),Hi(1,`mat-icon`),QC(2,`add_box`),Rl(),QC(3,` Create New Shelf `),Rl()}}function jn(t,r){if(t&1&&Qg(0,`app-shelf-card`,5),t&2){let e=r.$implicit;zg(`shelfId`,e)}}var ye=class t{shelfIds=Ij.required();isMine=Ij(!1);parentLibId=Ij();reload=Ej();dialog=v(Ut);shelfService=v(p);identityService=v(ml);sidenavOpen=Et(!0);displayWaitSpinner=Et(!1);constructor(){}toggleSidenavOpen(){this.sidenavOpen.update(r=>!r)}openNewShelfForm(){!this.isMine()||!this.parentLibId()||(this.identityService.getAntiForgeryToken.reload(),this.dialog.open(Ze).afterClosed().subscribe(r=>{r&&(this.displayWaitSpinner.set(!0),this.shelfService.submitNewShelf({newShelfModel:r,parentLibId:this.parentLibId()}).subscribe({next:e=>{e&&e.success&&(this.reload.emit(void 0),this.displayWaitSpinner.set(!1))},error:e=>{throw this.displayWaitSpinner.set(!1),this.dialog.open(te,{data:{description:[`Something went wrong during submitting the new shelf!`,`Please try later.`],title:`Submit Error`,status:`warning`}}),e}}))}))}static ɵfac=function(e){return new(e||t)};static ɵcmp=aw({type:t,selectors:[[`app-shelf-list`]],inputs:{shelfIds:[1,`shelfIds`],isMine:[1,`isMine`],parentLibId:[1,`parentLibId`]},outputs:{reload:`reload`},decls:11,vars:4,consts:[[`id`,``,`mode`,`side`,`position`,`start`,2,`position`,`absolute`,3,`opened`],[`matButton`,``],[2,`float`,`inline-start`],[`matMiniFab`,``,3,`click`,`matTooltip`],[1,`list`],[3,`shelfId`],[`matButton`,``,3,`click`]],template:function(e,n){e&1&&(Hi(0,`mat-sidenav-container`)(1,`mat-sidenav`,0),eC(2,Vn,4,0,`button`,1),Rl(),Hi(3,`mat-sidenav-content`)(4,`div`,2)(5,`button`,3),nm(`click`,function(){return n.toggleSidenavOpen()}),Hi(6,`mat-icon`),QC(7),Rl()()(),Hi(8,`div`,4),oC(9,jn,1,1,`app-shelf-card`,5,rC),Rl()()()),e&2&&(ID(),zg(`opened`,n.sidenavOpen()),ID(),nC(n.isMine()?2:-1),ID(3),zg(`matTooltip`,n.sidenavOpen()?`Close panel`:`Open panel`),ID(2),wm(n.sidenavOpen()?`left_panel_close`:`left_panel_open`),ID(2),iC(n.shelfIds()))},dependencies:[Dt,Je,d0,py,He,h0,at,ve],styles:[`mat-sidenav-container[_ngcontent-%COMP%]{position:relative}mat-sidenav[_ngcontent-%COMP%]{width:340px;border-right:1px solid var(--%NS%mat-sys-outline-variant);border-radius:0;padding-right:10px;padding-top:10px}mat-sidenav-content[_ngcontent-%COMP%]{padding:8px}.list[_ngcontent-%COMP%]{display:flex;flex-direction:row;justify-content:space-evenly;flex-wrap:wrap;width:100%;padding:8px 0}app-shelf-card[_ngcontent-%COMP%]{margin:8px}`]})};var Gn=()=>[];var qn=t=>[`/Library/Setting`,t];function Wn(t,r){if(t&1&&Qg(0,`img`,3),t&2){let e=gC();zg(`ngSrc`,e.libCardInfo.value().imageUrl)}}function Qn(t,r){t&1&&(Hi(0,`mat-icon`,4),QC(1,`shelves`),Rl())}function Zn(t,r){if(t&1&&(Hi(0,`a`,9)(1,`mat-icon`),QC(2,`edit_note`),Rl(),QC(3,` Edit Library `),Rl()),t&2){let e=gC();zg(`routerLink`,ib(1,qn,e.libId()))}}var Dn=class t{activatedRoute=v(qt);identityService=v(ml);libService=v(o);shelfService=v(p);params=C(this.activatedRoute.paramMap);libId=it(()=>this.params()?.get(`libId`));libCardInfo=po(()=>this.libId()?this.libService.GetLibraryCardInfo_Url+this.libId():void 0);isMine=it(()=>this.identityService.isAuthenticated()&&!!this.libCardInfo.value()&&this.libCardInfo.value().ownerId===this.identityService.myIdentityInfo.value()?.id);ownerUsernameResource=po(()=>{let r=this.libCardInfo.value();return this.isMine()&&r?this.identityService.GetUsername_Url+r.ownerId:void 0});ownerUsername=it(()=>this.isMine()?this.identityService.myIdentityInfo.value()?.userName:this.ownerUsernameResource.value()?.username);shelfIds=po(()=>this.libId()?this.shelfService.GetShelfIdsOfLib_Url+this.libId():void 0);constructor(){}static ɵfac=function(e){return new(e||t)};static ɵcmp=aw({type:t,selectors:[[`app-library-page`]],decls:18,vars:9,consts:[[`appearance`,`outlined`],[`iconName`,`shelves`,`tagName`,`Library`],[2,`float`,`inline-start`,`position`,`relative`],[`priority`,``,`width`,`100`,`height`,`100`,`alt`,`user image`,`id`,`header-img`,3,`ngSrc`],[2,`font-size`,`100px`,`width`,`100px`,`height`,`100px`],[2,`margin`,`0`],[1,`clearfix`],[2,`text-wrap`,`wrap`],[`align`,`end`],[`matButton`,``,3,`routerLink`],[3,`reload`,`shelfIds`,`isMine`,`parentLibId`]],template:function(e,n){e&1&&(Hi(0,`mat-card`,0),Qg(1,`app-card-tag`,1),Hi(2,`mat-card-header`)(3,`div`,2),eC(4,Wn,1,1,`img`,3)(5,Qn,2,0,`mat-icon`,4),Rl(),Hi(6,`div`,2)(7,`mat-card-title`)(8,`p`,5),QC(9),Rl()(),Hi(10,`mat-card-subtitle`),QC(11),Rl()()(),Hi(12,`mat-card-content`,6)(13,`pre`,7),QC(14),Rl()(),Hi(15,`mat-card-actions`,8),eC(16,Zn,4,3,`a`,9),Rl()(),Hi(17,`app-shelf-list`,10),nm(`reload`,function(){return n.shelfIds.reload()}),Rl()),e&2&&(ID(4),nC(n.libCardInfo.value()?.imageUrl?4:5),ID(5),Vl(` `,n.libCardInfo.value()?.title,` `),ID(2),Vl(` `,n.ownerUsername(),` `),ID(3),wm(n.libCardInfo.value()?.description),ID(2),nC(n.isMine()?16:-1),ID(),zg(`shelfIds`,n.shelfIds.value()?.shelfIds??ob(8,Gn))(`isMine`,n.isMine())(`parentLibId`,n.libId()))},dependencies:[V,H,py,R,B,X,G,Dc,d0,Hf,N,ye],styles:[`mat-card[_ngcontent-%COMP%]{width:50vw;min-width:370px;margin:16px auto;display:block}img#header-img[_ngcontent-%COMP%]{width:100px;height:100px;object-fit:cover;border-radius:50%;overflow:hidden}mat-card-title[_ngcontent-%COMP%]{margin:16px}mat-card-subtitle[_ngcontent-%COMP%]{margin:0 16px;letter-spacing:1px}`]})};export{Dn as LibraryPage};