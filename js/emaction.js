/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const t$1=window,e$2=t$1.ShadowRoot&&(void 0===t$1.ShadyCSS||t$1.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,s$3=Symbol(),n$3=new WeakMap;let o$3=class{constructor(t,e,o){if(this._$cssResult$=!0,o!==s$3)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(e$2&&void 0===t){const o=void 0!==e&&1===e.length;o&&(t=n$3.get(e)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),o&&n$3.set(e,t))}return t}toString(){return this.cssText}};const r$2=t=>new o$3("string"==typeof t?t:t+"",void 0,s$3),i$1=(t,...e)=>{const o=1===t.length?t[0]:e.reduce(((e,o,r)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(o)+t[r+1]),t[0]);return new o$3(o,t,s$3)},S$1=(t,e)=>{e$2?t.adoptedStyleSheets=e.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet)):e.forEach((e=>{const o=document.createElement("style"),r=t$1.litNonce;void 0!==r&&o.setAttribute("nonce",r),o.textContent=e.cssText,t.appendChild(o)}))},c$1=e$2?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const o of t.cssRules)e+=o.cssText;return r$2(e)})(t):t
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */;var s$2;const e$1=window,r$1=e$1.trustedTypes,h$1=r$1?r$1.emptyScript:"",o$2=e$1.reactiveElementPolyfillSupport,n$2={toAttribute(t,e){switch(e){case Boolean:t=t?h$1:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let o=t;switch(e){case Boolean:o=null!==t;break;case Number:o=null===t?null:Number(t);break;case Object:case Array:try{o=JSON.parse(t)}catch(t){o=null}}return o}},a$1=(t,e)=>e!==t&&(e==e||t==t),l$2={attribute:!0,type:String,converter:n$2,reflect:!1,hasChanged:a$1},d$1="finalized";let u$1=class extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this.u()}static addInitializer(t){var e;this.finalize(),(null!==(e=this.h)&&void 0!==e?e:this.h=[]).push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach(((e,o)=>{const r=this._$Ep(o,e);void 0!==r&&(this._$Ev.set(r,o),t.push(r))})),t}static createProperty(t,e=l$2){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){const o="symbol"==typeof t?Symbol():"__"+t,r=this.getPropertyDescriptor(t,o,e);void 0!==r&&Object.defineProperty(this.prototype,t,r)}}static getPropertyDescriptor(t,e,o){return{get(){return this[e]},set(r){const i=this[t];this[e]=r,this.requestUpdate(t,i,o)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||l$2}static finalize(){if(this.hasOwnProperty(d$1))return!1;this[d$1]=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),void 0!==t.h&&(this.h=[...t.h]),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const t=this.properties,e=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const o of e)this.createProperty(o,t[o])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const o=new Set(t.flat(1/0).reverse());for(const t of o)e.unshift(c$1(t))}else void 0!==t&&e.push(c$1(t));return e}static _$Ep(t,e){const o=e.attribute;return!1===o?void 0:"string"==typeof o?o:"string"==typeof t?t.toLowerCase():void 0}u(){var t;this._$E_=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$Eg(),this.requestUpdate(),null===(t=this.constructor.h)||void 0===t||t.forEach((t=>t(this)))}addController(t){var e,o;(null!==(e=this._$ES)&&void 0!==e?e:this._$ES=[]).push(t),void 0!==this.renderRoot&&this.isConnected&&(null===(o=t.hostConnected)||void 0===o||o.call(t))}removeController(t){var e;null===(e=this._$ES)||void 0===e||e.splice(this._$ES.indexOf(t)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach(((t,e)=>{this.hasOwnProperty(e)&&(this._$Ei.set(e,this[e]),delete this[e])}))}createRenderRoot(){var t;const e=null!==(t=this.shadowRoot)&&void 0!==t?t:this.attachShadow(this.constructor.shadowRootOptions);return S$1(e,this.constructor.elementStyles),e}connectedCallback(){var t;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(t=this._$ES)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostConnected)||void 0===e?void 0:e.call(t)}))}enableUpdating(t){}disconnectedCallback(){var t;null===(t=this._$ES)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostDisconnected)||void 0===e?void 0:e.call(t)}))}attributeChangedCallback(t,e,o){this._$AK(t,o)}_$EO(t,e,o=l$2){var r;const i=this.constructor._$Ep(t,o);if(void 0!==i&&!0===o.reflect){const a=(void 0!==(null===(r=o.converter)||void 0===r?void 0:r.toAttribute)?o.converter:n$2).toAttribute(e,o.type);this._$El=t,null==a?this.removeAttribute(i):this.setAttribute(i,a),this._$El=null}}_$AK(t,e){var o;const r=this.constructor,i=r._$Ev.get(t);if(void 0!==i&&this._$El!==i){const t=r.getPropertyOptions(i),a="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==(null===(o=t.converter)||void 0===o?void 0:o.fromAttribute)?t.converter:n$2;this._$El=i,this[i]=a.fromAttribute(e,t.type),this._$El=null}}requestUpdate(t,e,o){let r=!0;void 0!==t&&(((o=o||this.constructor.getPropertyOptions(t)).hasChanged||a$1)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),!0===o.reflect&&this._$El!==t&&(void 0===this._$EC&&(this._$EC=new Map),this._$EC.set(t,o))):r=!1),!this.isUpdatePending&&r&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach(((t,e)=>this[e]=t)),this._$Ei=void 0);let e=!1;const o=this._$AL;try{e=this.shouldUpdate(o),e?(this.willUpdate(o),null===(t=this._$ES)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostUpdate)||void 0===e?void 0:e.call(t)})),this.update(o)):this._$Ek()}catch(t){throw e=!1,this._$Ek(),t}e&&this._$AE(o)}willUpdate(t){}_$AE(t){var e;null===(e=this._$ES)||void 0===e||e.forEach((t=>{var e;return null===(e=t.hostUpdated)||void 0===e?void 0:e.call(t)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return!0}update(t){void 0!==this._$EC&&(this._$EC.forEach(((t,e)=>this._$EO(e,this[e],t))),this._$EC=void 0),this._$Ek()}updated(t){}firstUpdated(t){}};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var t;u$1[d$1]=!0,u$1.elementProperties=new Map,u$1.elementStyles=[],u$1.shadowRootOptions={mode:"open"},null==o$2||o$2({ReactiveElement:u$1}),(null!==(s$2=e$1.reactiveElementVersions)&&void 0!==s$2?s$2:e$1.reactiveElementVersions=[]).push("1.6.2");const i=window,s$1=i.trustedTypes,e=s$1?s$1.createPolicy("lit-html",{createHTML:t=>t}):void 0,o$1="$lit$",n$1=`lit$${(Math.random()+"").slice(9)}$`,l$1="?"+n$1,h=`<${l$1}>`,r=document,u=()=>r.createComment(""),d=t=>null===t||"object"!=typeof t&&"function"!=typeof t,c=Array.isArray,v=t=>c(t)||"function"==typeof(null==t?void 0:t[Symbol.iterator]),a="[ \t\n\f\r]",f=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,_=/-->/g,m=/>/g,p=RegExp(`>|${a}(?:([^\\s"'>=/]+)(${a}*=${a}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),g=/'/g,$=/"/g,y=/^(?:script|style|textarea|title)$/i,w=t=>(e,...o)=>({_$litType$:t,strings:e,values:o}),x=w(1),T=Symbol.for("lit-noChange"),A=Symbol.for("lit-nothing"),E=new WeakMap,C=r.createTreeWalker(r,129,null,!1);function P(t,o){if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==e?e.createHTML(o):o}const V=(t,e)=>{const o=t.length-1,r=[];let i,a=2===e?"<svg>":"",s=f;for(let e=0;e<o;e++){const o=t[e];let n,l,c=-1,d=0;for(;d<o.length&&(s.lastIndex=d,l=s.exec(o),null!==l);)d=s.lastIndex,s===f?"!--"===l[1]?s=_:void 0!==l[1]?s=m:void 0!==l[2]?(y.test(l[2])&&(i=RegExp("</"+l[2],"g")),s=p):void 0!==l[3]&&(s=p):s===p?">"===l[0]?(s=null!=i?i:f,c=-1):void 0===l[1]?c=-2:(c=s.lastIndex-l[2].length,n=l[1],s=void 0===l[3]?p:'"'===l[3]?$:g):s===$||s===g?s=p:s===_||s===m?s=f:(s=p,i=void 0);const u=s===p&&t[e+1].startsWith("/>")?" ":"";a+=s===f?o+h:c>=0?(r.push(n),o.slice(0,c)+o$1+o.slice(c)+n$1+u):o+n$1+(-2===c?(r.push(void 0),e):u)}return[P(t,a+(t[o]||"<?>")+(2===e?"</svg>":"")),r]};class N{constructor({strings:t,_$litType$:e},o){let r;this.parts=[];let i=0,a=0;const s=t.length-1,n=this.parts,[l,c]=V(t,e);if(this.el=N.createElement(l,o),C.currentNode=this.el.content,2===e){const t=this.el.content,e=t.firstChild;e.remove(),t.append(...e.childNodes)}for(;null!==(r=C.nextNode())&&n.length<s;){if(1===r.nodeType){if(r.hasAttributes()){const t=[];for(const e of r.getAttributeNames())if(e.endsWith(o$1)||e.startsWith(n$1)){const o=c[a++];if(t.push(e),void 0!==o){const t=r.getAttribute(o.toLowerCase()+o$1).split(n$1),e=/([.?@])?(.*)/.exec(o);n.push({type:1,index:i,name:e[2],strings:t,ctor:"."===e[1]?H:"?"===e[1]?L:"@"===e[1]?z:k})}else n.push({type:6,index:i})}for(const e of t)r.removeAttribute(e)}if(y.test(r.tagName)){const t=r.textContent.split(n$1),e=t.length-1;if(e>0){r.textContent=s$1?s$1.emptyScript:"";for(let o=0;o<e;o++)r.append(t[o],u()),C.nextNode(),n.push({type:2,index:++i});r.append(t[e],u())}}}else if(8===r.nodeType)if(r.data===l$1)n.push({type:2,index:i});else{let t=-1;for(;-1!==(t=r.data.indexOf(n$1,t+1));)n.push({type:7,index:i}),t+=n$1.length-1}i++}}static createElement(t,e){const o=r.createElement("template");return o.innerHTML=t,o}}function S(t,e,o=t,r){var i,a,s,n;if(e===T)return e;let l=void 0!==r?null===(i=o._$Co)||void 0===i?void 0:i[r]:o._$Cl;const c=d(e)?void 0:e._$litDirective$;return(null==l?void 0:l.constructor)!==c&&(null===(a=null==l?void 0:l._$AO)||void 0===a||a.call(l,!1),void 0===c?l=void 0:(l=new c(t),l._$AT(t,o,r)),void 0!==r?(null!==(s=(n=o)._$Co)&&void 0!==s?s:n._$Co=[])[r]=l:o._$Cl=l),void 0!==l&&(e=S(t,l._$AS(t,e.values),l,r)),e}class M{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){var e;const{el:{content:o},parts:i}=this._$AD,a=(null!==(e=null==t?void 0:t.creationScope)&&void 0!==e?e:r).importNode(o,!0);C.currentNode=a;let s=C.nextNode(),n=0,l=0,c=i[0];for(;void 0!==c;){if(n===c.index){let e;2===c.type?e=new R(s,s.nextSibling,this,t):1===c.type?e=new c.ctor(s,c.name,c.strings,this,t):6===c.type&&(e=new Z(s,this,t)),this._$AV.push(e),c=i[++l]}n!==(null==c?void 0:c.index)&&(s=C.nextNode(),n++)}return C.currentNode=r,a}v(t){let e=0;for(const o of this._$AV)void 0!==o&&(void 0!==o.strings?(o._$AI(t,o,e),e+=o.strings.length-2):o._$AI(t[e])),e++}}class R{constructor(t,e,o,r){var i;this.type=2,this._$AH=A,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=o,this.options=r,this._$Cp=null===(i=null==r?void 0:r.isConnected)||void 0===i||i}get _$AU(){var t,e;return null!==(e=null===(t=this._$AM)||void 0===t?void 0:t._$AU)&&void 0!==e?e:this._$Cp}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===(null==t?void 0:t.nodeType)&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=S(this,t,e),d(t)?t===A||null==t||""===t?(this._$AH!==A&&this._$AR(),this._$AH=A):t!==this._$AH&&t!==T&&this._(t):void 0!==t._$litType$?this.g(t):void 0!==t.nodeType?this.$(t):v(t)?this.T(t):this._(t)}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t))}_(t){this._$AH!==A&&d(this._$AH)?this._$AA.nextSibling.data=t:this.$(r.createTextNode(t)),this._$AH=t}g(t){var e;const{values:o,_$litType$:r}=t,i="number"==typeof r?this._$AC(t):(void 0===r.el&&(r.el=N.createElement(P(r.h,r.h[0]),this.options)),r);if((null===(e=this._$AH)||void 0===e?void 0:e._$AD)===i)this._$AH.v(o);else{const t=new M(i,this),e=t.u(this.options);t.v(o),this.$(e),this._$AH=t}}_$AC(t){let e=E.get(t.strings);return void 0===e&&E.set(t.strings,e=new N(t)),e}T(t){c(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let o,r=0;for(const i of t)r===e.length?e.push(o=new R(this.k(u()),this.k(u()),this,this.options)):o=e[r],o._$AI(i),r++;r<e.length&&(this._$AR(o&&o._$AB.nextSibling,r),e.length=r)}_$AR(t=this._$AA.nextSibling,e){var o;for(null===(o=this._$AP)||void 0===o||o.call(this,!1,!0,e);t&&t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){var e;void 0===this._$AM&&(this._$Cp=t,null===(e=this._$AP)||void 0===e||e.call(this,t))}}class k{constructor(t,e,o,r,i){this.type=1,this._$AH=A,this._$AN=void 0,this.element=t,this.name=e,this._$AM=r,this.options=i,o.length>2||""!==o[0]||""!==o[1]?(this._$AH=Array(o.length-1).fill(new String),this.strings=o):this._$AH=A}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,o,r){const i=this.strings;let a=!1;if(void 0===i)t=S(this,t,e,0),a=!d(t)||t!==this._$AH&&t!==T,a&&(this._$AH=t);else{const r=t;let s,n;for(t=i[0],s=0;s<i.length-1;s++)n=S(this,r[o+s],e,s),n===T&&(n=this._$AH[s]),a||(a=!d(n)||n!==this._$AH[s]),n===A?t=A:t!==A&&(t+=(null!=n?n:"")+i[s+1]),this._$AH[s]=n}a&&!r&&this.j(t)}j(t){t===A?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"")}}class H extends k{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===A?void 0:t}}const I=s$1?s$1.emptyScript:"";class L extends k{constructor(){super(...arguments),this.type=4}j(t){t&&t!==A?this.element.setAttribute(this.name,I):this.element.removeAttribute(this.name)}}class z extends k{constructor(t,e,o,r,i){super(t,e,o,r,i),this.type=5}_$AI(t,e=this){var o;if((t=null!==(o=S(this,t,e,0))&&void 0!==o?o:A)===T)return;const r=this._$AH,i=t===A&&r!==A||t.capture!==r.capture||t.once!==r.once||t.passive!==r.passive,a=t!==A&&(r===A||i);i&&this.element.removeEventListener(this.name,this,r),a&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,o;"function"==typeof this._$AH?this._$AH.call(null!==(o=null===(e=this.options)||void 0===e?void 0:e.host)&&void 0!==o?o:this.element,t):this._$AH.handleEvent(t)}}class Z{constructor(t,e,o){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=o}get _$AU(){return this._$AM._$AU}_$AI(t){S(this,t)}}const B=i.litHtmlPolyfillSupport;null==B||B(N,R),(null!==(t=i.litHtmlVersions)&&void 0!==t?t:i.litHtmlVersions=[]).push("2.7.5");const D=(t,e,o)=>{var r,i;const a=null!==(r=null==o?void 0:o.renderBefore)&&void 0!==r?r:e;let s=a._$litPart$;if(void 0===s){const t=null!==(i=null==o?void 0:o.renderBefore)&&void 0!==i?i:null;a._$litPart$=s=new R(e.insertBefore(u(),t),t,void 0,null!=o?o:{})}return s._$AI(t),s
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */};var l,o;class s extends u$1{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t,e;const o=super.createRenderRoot();return null!==(t=(e=this.renderOptions).renderBefore)&&void 0!==t||(e.renderBefore=o.firstChild),o}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=D(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!1)}render(){return T}}s.finalized=!0,s._$litElement$=!0,null===(l=globalThis.litElementHydrateSupport)||void 0===l||l.call(globalThis,{LitElement:s});const n=globalThis.litElementPolyfillSupport;null==n||n({LitElement:s}),(null!==(o=globalThis.litElementVersions)&&void 0!==o?o:globalThis.litElementVersions=[]).push("3.3.2");const DEFAULT_EMOJIS="👍,thumbs-up;🎉,party-popper;❤️,red-heart;😎,cool;😄,smile-face;🚀,rocket;";class EmojiReaction extends s{static properties={showAvailable:{attribute:!1},availableReactions:{attribute:!1},availableArrayString:{},endpoint:{},reactTargetId:{},theme:{}};static styles=i$1`
    /* default light */
    .container {
      --start-smile-border-color-default: #d0d7de;
      --start-smile-border-color-hover-default: #1f232826;
      --start-smile-bg-color-default: #f6f8fa;
      --start-smile-svg-fill-color-default: #656d76;
      --reaction-got-not-reacted-bg-color-default: transparent;
      --reaction-got-not-reacted-bg-color-hover-default: #eaeef2;
      --reaction-got-not-reacted-border-color-default: #d0d7de;
      --reaction-got-not-reacted-text-color-default: #656d76;
      --reaction-got-reacted-bg-color-default: transparent;
      --reaction-got-reacted-bg-color-hover-default: #eaeef2;
      --reaction-got-reacted-border-color-default: #42b983;
      --reaction-got-reacted-text-color-default: #42b983;
      --reaction-available-popup-bg-color-default: #ffffff;
      --reaction-available-popup-border-color-default: #d0d7de;
      --reaction-available-popup-box-shadow-default: 0 4px 6px rgba(0,0,0,.04);
      --reaction-available-emoji-reacted-bg-color-default: #ddf4ff;
      --reaction-available-emoji-bg-color-hover-default: #f3f4f6;
      --reaction-available-emoji-z-index-default: 100;
      --reaction-available-mask-z-index-default: 80;
    }
    /* default dark */
    .container-dark{
      --start-smile-border-color-default: #3b3d42;
      --start-smile-border-color-hover-default: #3b3d42;
      --start-smile-bg-color-default: transparent;
      --start-smile-svg-fill-color-default: #ffffff;
      --reaction-got-not-reacted-bg-color-default: transparent;
      --reaction-got-not-reacted-bg-color-hover-default: #272727;
      --reaction-got-not-reacted-border-color-default: #3b3d42;
      --reaction-got-not-reacted-text-color-default: #ffffff;
      --reaction-got-reacted-bg-color-default: #272727;
      --reaction-got-reacted-bg-color-hover-default: #272727;
      --reaction-got-reacted-border-color-default: #42b983;
      --reaction-got-reacted-text-color-default: #42b983;
      --reaction-available-popup-bg-color-default: #161b22;
      --reaction-available-popup-border-color-default: #30363d;
      --reaction-available-popup-box-shadow-default: 0 4px 6px rgba(0,0,0,.04);
      --reaction-available-emoji-reacted-bg-color-default: #388bfd1a;
      --reaction-available-emoji-bg-color-hover-default: #30363d;
      --reaction-available-emoji-z-index-default: 100;
      --reaction-available-mask-z-index-default: 80;
    }
    .anim-scale-in {
      animation-name: scale-in;
      animation-duration: .15s;
      animation-timing-function: cubic-bezier(0.2, 0, 0.13, 1.5);
    }

    @keyframes scale-in {
      0% {
          opacity: 0;
          transform: scale(0.5);
      }
      100% {
          opacity: 1;
          transform: scale(1);
      }
    }
  `;render(){var t=localStorage.getItem("theme")||"";return null!=t&&"undefined"!=t&&""!=t||(t=window.matchMedia("(prefers-color-scheme: light)").matches?"light":"dark"),x`
    <style>
      #start-smile {
        border-width: 1px;
        border-style: solid;
        border-color: var(--start-smile-border-color, var(--start-smile-border-color-default));
        background-color: var(--start-smile-bg-color, var(--start-smile-bg-color-default));
      }
      #start-smile:hover {
        border-color: var(--start-smile-border-color-hover, var(--start-smile-border-color-hover-default)) !important;
      }
      #start-smile-svg {
        fill: var(--start-smile-svg-fill-color, var(--start-smile-svg-fill-color-default));
      }
      .reaction-got-not-reacted {
        background-color: var(--reaction-got-not-reacted-bg-color, var(--reaction-got-not-reacted-bg-color-default));
        border-width: 1px;
        border-style: solid;
        border-color: var(--reaction-got-not-reacted-border-color, var(--reaction-got-not-reacted-border-color-default));
        color: var(--reaction-got-not-reacted-text-color, var(--reaction-got-not-reacted-text-color-default));
      }
      .reaction-got-not-reacted:hover {
        background-color: var(--reaction-got-not-reacted-bg-color-hover, var(--reaction-got-not-reacted-bg-color-hover-default));
      }
      .reaction-got-reacted {
        background-color: var(--reaction-got-reacted-bg-color, var(--reaction-got-reacted-bg-color-default));
        border-width: 1px;
        border-style: solid;
        border-color: var(--reaction-got-reacted-border-color, var(--reaction-got-reacted-border-color-default));
        color: var(--reaction-got-reacted-text-color, var(--reaction-got-reacted-text-color-default));
      }
      .reaction-got-reacted:hover {
        background-color: var(--reaction-got-reacted-bg-color-hover, var(--reaction-got-reacted-bg-color-hover-default));
      }
      .reaction-available-popup {
        background-color: var(--reaction-available-popup-bg-color, var(--reaction-available-popup-bg-color-default));
        border-width: 1px;
        border-style: solid;
        border-color: var(--reaction-available-popup-border-color, var(--reaction-available-popup-border-color-default));
        box-shadow: var(--reaction-available-popup-box-shadow, var(--reaction-available-popup-box-shadow-default));
      }
      .reaction-available-emoji {
        z-index: var(--reaction-available-emoji-z-index, var(--reaction-available-emoji-z-index-default));
      }
      .reaction-available-emoji:hover {
        background-color: var(--reaction-available-emoji-bg-color-hover, var(--reaction-available-emoji-bg-color-hover-default));
      }
      .reaction-available-emoji-reacted {
        background-color: var(--reaction-available-emoji-reacted-bg-color, var(--reaction-available-emoji-reacted-bg-color-default));
      }
      .reaction-available-popup::before {
        position: fixed;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        z-index: var(--reaction-available-mask-z-index, var(--reaction-available-mask-z-index-default));
        display: block;
        cursor: default;
        content: " ";
        background: transparent;
      }
    </style>
    <!-- container -->
    <div style="flex-wrap: nowrap; max-width: 100%; display: flex; gap: 0.375rem;height: 1.5rem;" class="${"dark"===this?.theme||"system"===this?.theme&&"dark"===t?"container-dark":"container"}">
      <!-- 灰色笑脸 -->
      <div style="position: relative; user-select: none;">
        <div id="start-smile" @click="${this._showAvailable}"
          style="border-radius: 800px; width: 1rem; height: 1rem; line-height: 1rem; padding: 0.25rem;">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16" id="start-smile-svg" style="cursor: pointer;">
            <path
              d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0ZM1.5 8a6.5 6.5 0 1 0 13 0 6.5 6.5 0 0 0-13 0Zm3.82 1.636a.75.75 0 0 1 1.038.175l.007.009c.103.118.22.222.35.31.264.178.683.37 1.285.37.602 0 1.02-.192 1.285-.371.13-.088.247-.192.35-.31l.007-.008a.75.75 0 0 1 1.222.87l-.022-.015c.02.013.021.015.021.015v.001l-.001.002-.002.003-.005.007-.014.019a2.066 2.066 0 0 1-.184.213c-.16.166-.338.316-.53.445-.63.418-1.37.638-2.127.629-.946 0-1.652-.308-2.126-.63a3.331 3.331 0 0 1-.715-.657l-.014-.02-.005-.006-.002-.003v-.002h-.001l.613-.432-.614.43a.75.75 0 0 1 .183-1.044ZM12 7a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM5 8a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm5.25 2.25.592.416a97.71 97.71 0 0 0-.592-.416Z">
            </path>
          </svg>
        </div>
        <div class="anim-scale-in reaction-available-popup" @click=${this._closePopup} style="display: ${this.showAvailable?"flex":"none"}; user-select: none; position: absolute; top: -3rem; font-size: 0.875rem; border-radius: 0.375rem; padding: 0 0.125rem;">
          <!-- reactions available -->
          ${this.availableReactions.map((t=>x`
            <span @click=${this._react} data-name="${t.reaction_name}" class="reaction-available-emoji ${t.meReacted?"reaction-available-emoji-reacted":""}" style="cursor: pointer; margin: 0.25rem 0.25rem; padding: 0.25rem 0.35rem; border-radius: 0.375rem;">${t.emoji}</span>
          `))}
        </div>
      </div>
      <!-- reactions got -->
      <div style="display: flex; overflow-x: auto; gap: 0.375rem;">
        ${this.availableReactions.map((t=>x`
          <div @click=${this._react} data-name="${t.reaction_name}" class="${t.meReacted?"reaction-got-reacted":"reaction-got-not-reacted"}" style="display: ${t?.count&&t.count>0?"flex":"none"}; user-select: none; cursor: pointer; justify-content: center; align-items: center; border-radius: 108px; padding: 0 0.25rem; font-size: 0.75rem;">
            <span style="pointer-events: none;">${t.emoji}</span><span style="padding:0 0.375rem; pointer-events: none;">${t.count}</span>
          </div>
        `))}
      </div>
    </div>
    `}constructor(){super(),this.showAvailable=!1,this.availableReactions=[]}connectedCallback(){super.connectedCallback(),this.initReactions()}async initReactions(){let t=this?.availableArrayString;t||(t=DEFAULT_EMOJIS);const e=t.split(";").map((t=>{const[e,o]=t.split(",");return e&&o?{emoji:e,reaction_name:o}:null})).filter((t=>t));this?.endpoint||(this.endpoint="https://api.emaction.cool");let o="";const r=document.head.querySelector("link[rel='canonical']");o=r&&r.href?r.href:window.location.href;const i=new URL(o),a=i.origin+i.pathname+i.search;this?.reactTargetId||(this.reactTargetId=await this._sha256(a));const{data:{reactionsGot:s}}=await fetch(this.endpoint+"/reactions?"+new URLSearchParams({targetId:this.reactTargetId}),{method:"GET"}).then((t=>t.json())).then((t=>{if(!t?.data||!Array.isArray(t?.data?.reactionsGot))throw new Error("获取 reactions 出错！");return t}));s.forEach((t=>{e.forEach((e=>{t.reaction_name===e.reaction_name&&(e.count=t.count)}))}));const n=`meReactedReactions_${this.reactTargetId}`;JSON.parse(window.localStorage.getItem(n)||"[]").forEach((t=>{e.forEach((e=>{t===e.reaction_name&&(e.meReacted=!0)}))})),this.availableReactions=e}_closePopup(t){console.log(t.target),this.showAvailable=!1}async _react(t){const{name:e}=t.target.dataset,o=this.availableReactions.find((t=>t.reaction_name===e));if(!o)return void console.error("未知的 reaction!");const r=!!o?.meReacted,i=Math.max(0,o?.count?o.count+(r?-1:1):r?0:1),a=!o.meReacted;this.availableReactions=this.availableReactions.map((t=>(t.reaction_name===e&&(t.count=i,t.meReacted=a),t))),this.showAvailable=!1,await fetch(this.endpoint+"/reaction?"+new URLSearchParams({targetId:this.reactTargetId,reaction_name:e,diff:r?-1:1}),{method:"PATCH"});const s=`meReactedReactions_${this.reactTargetId}`,n=new Set(JSON.parse(window.localStorage.getItem(s)||"[]"));r?n.delete(e):n.add(e),window.localStorage.setItem(s,JSON.stringify(Array.from(n)))}_showAvailable(t){t.preventDefault(),this.showAvailable=!this.showAvailable}async _sha256(t){return Array.from(new Uint8Array(await crypto.subtle.digest("sha-256",(new TextEncoder).encode(t)))).map((t=>t.toString(16).padStart(2,"0"))).join("")}}customElements.define("emoji-reaction",EmojiReaction);export{EmojiReaction};