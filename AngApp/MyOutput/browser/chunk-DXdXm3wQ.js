import{W as wm,w as Uc}from"./main-HQEM6PYB.js";import{$n as rb,An as ji,Cn as hC,Dn as im,Gn as om,J as Mg,Nn as lC,On as jd,S as Hg,Un as nt,_t as Sl,dr as v,et as OC,g as Fd,kn as jg,lr as tw,mn as fD,q as M,qn as q1,sr as tj,t as $g,vn as gC,w as Hr,wt as Vg,yr as yC,z as Kg}from"./chunk-BPeXiJGn.js";var j=new M(`mat-progress-spinner-default-options`,{providedIn:`root`,factory:()=>({diameter:B})});var B=100;var F=10;var R=(()=>{class a{_elementRef=v(Hr);_noopAnimations;get color(){return this._color||this._defaultColor}set color(r){this._color=r}_color;_defaultColor=`primary`;_determinateCircle;constructor(){let r=v(j),n=wm(),i=this._elementRef.nativeElement;this._noopAnimations=n===`di-disabled`&&!!r&&!r._forceAnimations,this.mode=i.nodeName.toLowerCase()===`mat-spinner`?`indeterminate`:`determinate`,!this._noopAnimations&&n===`reduced-motion`&&i.classList.add(`mat-progress-spinner-reduced-motion`),r&&(r.color&&(this.color=this._defaultColor=r.color),r.diameter&&(this.diameter=r.diameter),r.strokeWidth&&(this.strokeWidth=r.strokeWidth))}mode;get value(){return this.mode===`determinate`?this._value:0}set value(r){this._value=Math.max(0,Math.min(100,r||0))}_value=0;get diameter(){return this._diameter}set diameter(r){this._diameter=r||0}_diameter=B;get strokeWidth(){return this._strokeWidth??this.diameter/10}set strokeWidth(r){this._strokeWidth=r||0}_strokeWidth;_circleRadius(){return(this.diameter-F)/2}_viewBox(){let r=this._circleRadius()*2+this.strokeWidth;return`0 0 ${r} ${r}`}_strokeCircumference(){return 2*Math.PI*this._circleRadius()}_strokeDashOffset(){return this.mode===`determinate`?this._strokeCircumference()*(100-this._value)/100:null}_circleStrokeWidth(){return this.strokeWidth/this.diameter*100}static ɵfac=function(n){return new(n||a)};static ɵcmp=(function(){let r=[`determinateSpinner`];function n(i,t){if(i&1&&(Fd(),ji(0,`svg`,11),Hg(1,`circle`,12),Sl()),i&2){let e=lC();jg(`viewBox`,e._viewBox()),fD(),om(`stroke-dasharray`,e._strokeCircumference(),`px`)(`stroke-dashoffset`,e._strokeCircumference()/2,`px`)(`stroke-width`,e._circleStrokeWidth(),`%`),jg(`r`,e._circleRadius())}}return tw({type:a,selectors:[[`mat-progress-spinner`],[`mat-spinner`]],viewQuery:function(t,e){if(t&1&&Kg(r,5),t&2){let o;hC(o=gC())&&(e._determinateCircle=o.first)}},hostAttrs:[`role`,`progressbar`,`tabindex`,`-1`,1,`mat-mdc-progress-spinner`,`mdc-circular-progress`],hostVars:18,hostBindings:function(t,e){t&2&&(jg(`aria-valuemin`,0)(`aria-valuemax`,100)(`aria-valuenow`,e.mode===`determinate`?e.value:null)(`mode`,e.mode),OC(`mat-`+e.color),om(`width`,e.diameter,`px`)(`height`,e.diameter,`px`)(`--%NS%mat-progress-spinner-size`,e.diameter+`px`)(`--%NS%mat-progress-spinner-active-indicator-width`,e.diameter+`px`),im(`_mat-animation-noopable`,e._noopAnimations)(`mdc-circular-progress--indeterminate`,e.mode===`indeterminate`))},inputs:{color:`color`,mode:`mode`,value:[2,`value`,`value`,tj],diameter:[2,`diameter`,`diameter`,tj],strokeWidth:[2,`strokeWidth`,`strokeWidth`,tj]},exportAs:[`matProgressSpinner`],decls:14,vars:11,consts:[[`circle`,``],[`determinateSpinner`,``],[`aria-hidden`,`true`,1,`mdc-circular-progress__determinate-container`],[`xmlns`,`http://www.w3.org/2000/svg`,`focusable`,`false`,1,`mdc-circular-progress__determinate-circle-graphic`],[`cx`,`50%`,`cy`,`50%`,1,`mdc-circular-progress__determinate-circle`],[`aria-hidden`,`true`,1,`mdc-circular-progress__indeterminate-container`],[1,`mdc-circular-progress__spinner-layer`],[1,`mdc-circular-progress__circle-clipper`,`mdc-circular-progress__circle-left`],[3,`ngTemplateOutlet`],[1,`mdc-circular-progress__gap-patch`],[1,`mdc-circular-progress__circle-clipper`,`mdc-circular-progress__circle-right`],[`xmlns`,`http://www.w3.org/2000/svg`,`focusable`,`false`,1,`mdc-circular-progress__indeterminate-circle-graphic`],[`cx`,`50%`,`cy`,`50%`]],template:function(t,e){if(t&1&&(Mg(0,n,2,8,`ng-template`,null,0,rb),ji(2,`div`,2,1),Fd(),ji(4,`svg`,3),Hg(5,`circle`,4),Sl()(),jd(),ji(6,`div`,5)(7,`div`,6)(8,`div`,7),$g(9,8),Sl(),ji(10,`div`,9),$g(11,8),Sl(),ji(12,`div`,10),$g(13,8),Sl()()()),t&2){let o=yC(1);fD(4),jg(`viewBox`,e._viewBox()),fD(),om(`stroke-dasharray`,e._strokeCircumference(),`px`)(`stroke-dashoffset`,e._strokeDashOffset(),`px`)(`stroke-width`,e._circleStrokeWidth(),`%`),jg(`r`,e._circleRadius()),fD(4),Vg(`ngTemplateOutlet`,o),fD(2),Vg(`ngTemplateOutlet`,o),fD(2),Vg(`ngTemplateOutlet`,o)}},dependencies:[Uc],styles:[`.mat-mdc-progress-spinner {
  --%NS%mat-progress-spinner-animation-multiplier: 1;
  display: block;
  overflow: hidden;
  line-height: 0;
  position: relative;
  direction: ltr;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.6, 1);
}
.mat-mdc-progress-spinner circle {
  stroke-width: var(--%NS%mat-progress-spinner-active-indicator-width, 4px);
}
.mat-mdc-progress-spinner._mat-animation-noopable, .mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__determinate-circle {
  transition: none !important;
}
.mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__indeterminate-circle-graphic,
.mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__spinner-layer,
.mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__indeterminate-container {
  animation: none !important;
}
.mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__indeterminate-container circle {
  stroke-dasharray: 0 !important;
}
@media (forced-colors: active) {
  .mat-mdc-progress-spinner .mdc-circular-progress__indeterminate-circle-graphic,
  .mat-mdc-progress-spinner .mdc-circular-progress__determinate-circle {
    stroke: currentColor;
    stroke: CanvasText;
  }
}

.mat-progress-spinner-reduced-motion {
  --%NS%mat-progress-spinner-animation-multiplier: 1.25;
}

.mdc-circular-progress__determinate-container,
.mdc-circular-progress__indeterminate-circle-graphic,
.mdc-circular-progress__indeterminate-container,
.mdc-circular-progress__spinner-layer {
  position: absolute;
  width: 100%;
  height: 100%;
}

.mdc-circular-progress__determinate-container {
  transform: rotate(-90deg);
}
.mdc-circular-progress--indeterminate .mdc-circular-progress__determinate-container {
  opacity: 0;
}

.mdc-circular-progress__indeterminate-container {
  font-size: 0;
  letter-spacing: 0;
  white-space: nowrap;
  opacity: 0;
}
.mdc-circular-progress--indeterminate .mdc-circular-progress__indeterminate-container {
  opacity: 1;
  animation: mdc-circular-progress-container-rotate calc(1568.2352941176ms * var(--%NS%mat-progress-spinner-animation-multiplier)) linear infinite;
}

.mdc-circular-progress__determinate-circle-graphic,
.mdc-circular-progress__indeterminate-circle-graphic {
  fill: transparent;
}

.mat-mdc-progress-spinner .mdc-circular-progress__determinate-circle,
.mat-mdc-progress-spinner .mdc-circular-progress__indeterminate-circle-graphic {
  stroke: var(--%NS%mat-progress-spinner-active-indicator-color, var(--%NS%mat-sys-primary));
}
@media (forced-colors: active) {
  .mat-mdc-progress-spinner .mdc-circular-progress__determinate-circle,
  .mat-mdc-progress-spinner .mdc-circular-progress__indeterminate-circle-graphic {
    stroke: CanvasText;
  }
}

.mdc-circular-progress__determinate-circle {
  transition: stroke-dashoffset 500ms cubic-bezier(0, 0, 0.2, 1);
}

.mdc-circular-progress__gap-patch {
  position: absolute;
  top: 0;
  left: 47.5%;
  box-sizing: border-box;
  width: 5%;
  height: 100%;
  overflow: hidden;
}

.mdc-circular-progress__gap-patch .mdc-circular-progress__indeterminate-circle-graphic {
  left: -900%;
  width: 2000%;
  transform: rotate(180deg);
}
.mdc-circular-progress__circle-clipper .mdc-circular-progress__indeterminate-circle-graphic {
  width: 200%;
}
.mdc-circular-progress__circle-right .mdc-circular-progress__indeterminate-circle-graphic {
  left: -100%;
}
.mdc-circular-progress--indeterminate .mdc-circular-progress__circle-left .mdc-circular-progress__indeterminate-circle-graphic {
  animation: mdc-circular-progress-left-spin calc(1333ms * var(--%NS%mat-progress-spinner-animation-multiplier)) cubic-bezier(0.4, 0, 0.2, 1) infinite both;
}
.mdc-circular-progress--indeterminate .mdc-circular-progress__circle-right .mdc-circular-progress__indeterminate-circle-graphic {
  animation: mdc-circular-progress-right-spin calc(1333ms * var(--%NS%mat-progress-spinner-animation-multiplier)) cubic-bezier(0.4, 0, 0.2, 1) infinite both;
}

.mdc-circular-progress__circle-clipper {
  display: inline-flex;
  position: relative;
  width: 50%;
  height: 100%;
  overflow: hidden;
}

.mdc-circular-progress--indeterminate .mdc-circular-progress__spinner-layer {
  animation: mdc-circular-progress-spinner-layer-rotate calc(5332ms * var(--%NS%mat-progress-spinner-animation-multiplier)) cubic-bezier(0.4, 0, 0.2, 1) infinite both;
}

@keyframes mdc-circular-progress-container-rotate {
  to {
    transform: rotate(360deg);
  }
}
@keyframes mdc-circular-progress-spinner-layer-rotate {
  12.5% {
    transform: rotate(135deg);
  }
  25% {
    transform: rotate(270deg);
  }
  37.5% {
    transform: rotate(405deg);
  }
  50% {
    transform: rotate(540deg);
  }
  62.5% {
    transform: rotate(675deg);
  }
  75% {
    transform: rotate(810deg);
  }
  87.5% {
    transform: rotate(945deg);
  }
  100% {
    transform: rotate(1080deg);
  }
}
@keyframes mdc-circular-progress-left-spin {
  from {
    transform: rotate(265deg);
  }
  50% {
    transform: rotate(130deg);
  }
  to {
    transform: rotate(265deg);
  }
}
@keyframes mdc-circular-progress-right-spin {
  from {
    transform: rotate(-265deg);
  }
  50% {
    transform: rotate(-130deg);
  }
  to {
    transform: rotate(-265deg);
  }
}
`],encapsulation:2})})()}return a})();var D=class a{value=q1(0);mode=nt(()=>this.value()>0?`determinate`:`indeterminate`);static ɵfac=function(r){return new(r||a)};static ɵcmp=tw({type:a,selectors:[[`app-wait-spinner`]],inputs:{value:[1,`value`]},decls:1,vars:2,consts:[[3,`mode`,`value`]],template:function(r,n){r&1&&Hg(0,`mat-spinner`,0),r&2&&Vg(`mode`,n.mode())(`value`,n.value())},dependencies:[R],styles:[`[_nghost-%COMP%]{position:absolute;inset:0;-webkit-backdrop-filter:blur(4px);backdrop-filter:blur(4px);z-index:1}mat-spinner[_ngcontent-%COMP%]{display:block;margin:auto;position:relative;top:50%;transform:translateY(-50%)}`]})};export{D as t};