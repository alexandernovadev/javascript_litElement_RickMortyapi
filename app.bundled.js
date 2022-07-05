/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const t=window.ShadowRoot&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,i=Symbol(),s=new WeakMap;class e{constructor(t,s,e){if(this._$cssResult$=!0,e!==i)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=s}get styleSheet(){let i=this.o;const e=this.t;if(t&&void 0===i){const t=void 0!==e&&1===e.length;t&&(i=s.get(e)),void 0===i&&((this.o=i=new CSSStyleSheet).replaceSync(this.cssText),t&&s.set(e,i))}return i}toString(){return this.cssText}}const n=(t,...s)=>{const n=1===t.length?t[0]:s.reduce(((i,s,e)=>i+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+t[e+1]),t[0]);return new e(n,t,i)},r=t?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let s="";for(const i of t.cssRules)s+=i.cssText;return(t=>new e("string"==typeof t?t:t+"",void 0,i))(s)})(t):t
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */;var o;const h=window.trustedTypes,l=h?h.emptyScript:"",a=window.reactiveElementPolyfillSupport,c={toAttribute(t,i){switch(i){case Boolean:t=t?l:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,i){let s=t;switch(i){case Boolean:s=null!==t;break;case Number:s=null===t?null:Number(t);break;case Object:case Array:try{s=JSON.parse(t)}catch(t){s=null}}return s}},d=(t,i)=>i!==t&&(i==i||t==t),u={attribute:!0,type:String,converter:c,reflect:!1,hasChanged:d};class v extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this.u()}static addInitializer(t){var i;null!==(i=this.h)&&void 0!==i||(this.h=[]),this.h.push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach(((i,s)=>{const e=this._$Ep(s,i);void 0!==e&&(this._$Ev.set(e,s),t.push(e))})),t}static createProperty(t,i=u){if(i.state&&(i.attribute=!1),this.finalize(),this.elementProperties.set(t,i),!i.noAccessor&&!this.prototype.hasOwnProperty(t)){const s="symbol"==typeof t?Symbol():"__"+t,e=this.getPropertyDescriptor(t,s,i);void 0!==e&&Object.defineProperty(this.prototype,t,e)}}static getPropertyDescriptor(t,i,s){return{get(){return this[i]},set(e){const n=this[t];this[i]=e,this.requestUpdate(t,n,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||u}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const t=this.properties,i=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const s of i)this.createProperty(s,t[s])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const i=[];if(Array.isArray(t)){const s=new Set(t.flat(1/0).reverse());for(const t of s)i.unshift(r(t))}else void 0!==t&&i.push(r(t));return i}static _$Ep(t,i){const s=i.attribute;return!1===s?void 0:"string"==typeof s?s:"string"==typeof t?t.toLowerCase():void 0}u(){var t;this._$E_=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$Eg(),this.requestUpdate(),null===(t=this.constructor.h)||void 0===t||t.forEach((t=>t(this)))}addController(t){var i,s;(null!==(i=this._$ES)&&void 0!==i?i:this._$ES=[]).push(t),void 0!==this.renderRoot&&this.isConnected&&(null===(s=t.hostConnected)||void 0===s||s.call(t))}removeController(t){var i;null===(i=this._$ES)||void 0===i||i.splice(this._$ES.indexOf(t)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach(((t,i)=>{this.hasOwnProperty(i)&&(this._$Ei.set(i,this[i]),delete this[i])}))}createRenderRoot(){var i;const s=null!==(i=this.shadowRoot)&&void 0!==i?i:this.attachShadow(this.constructor.shadowRootOptions);return((i,s)=>{t?i.adoptedStyleSheets=s.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet)):s.forEach((t=>{const s=document.createElement("style"),e=window.litNonce;void 0!==e&&s.setAttribute("nonce",e),s.textContent=t.cssText,i.appendChild(s)}))})(s,this.constructor.elementStyles),s}connectedCallback(){var t;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(t=this._$ES)||void 0===t||t.forEach((t=>{var i;return null===(i=t.hostConnected)||void 0===i?void 0:i.call(t)}))}enableUpdating(t){}disconnectedCallback(){var t;null===(t=this._$ES)||void 0===t||t.forEach((t=>{var i;return null===(i=t.hostDisconnected)||void 0===i?void 0:i.call(t)}))}attributeChangedCallback(t,i,s){this._$AK(t,s)}_$EO(t,i,s=u){var e,n;const r=this.constructor._$Ep(t,s);if(void 0!==r&&!0===s.reflect){const o=(null!==(n=null===(e=s.converter)||void 0===e?void 0:e.toAttribute)&&void 0!==n?n:c.toAttribute)(i,s.type);this._$El=t,null==o?this.removeAttribute(r):this.setAttribute(r,o),this._$El=null}}_$AK(t,i){var s,e;const n=this.constructor,r=n._$Ev.get(t);if(void 0!==r&&this._$El!==r){const t=n.getPropertyOptions(r),o=t.converter,h=null!==(e=null!==(s=null==o?void 0:o.fromAttribute)&&void 0!==s?s:"function"==typeof o?o:null)&&void 0!==e?e:c.fromAttribute;this._$El=r,this[r]=h(i,t.type),this._$El=null}}requestUpdate(t,i,s){let e=!0;void 0!==t&&(((s=s||this.constructor.getPropertyOptions(t)).hasChanged||d)(this[t],i)?(this._$AL.has(t)||this._$AL.set(t,i),!0===s.reflect&&this._$El!==t&&(void 0===this._$EC&&(this._$EC=new Map),this._$EC.set(t,s))):e=!1),!this.isUpdatePending&&e&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach(((t,i)=>this[i]=t)),this._$Ei=void 0);let i=!1;const s=this._$AL;try{i=this.shouldUpdate(s),i?(this.willUpdate(s),null===(t=this._$ES)||void 0===t||t.forEach((t=>{var i;return null===(i=t.hostUpdate)||void 0===i?void 0:i.call(t)})),this.update(s)):this._$Ek()}catch(t){throw i=!1,this._$Ek(),t}i&&this._$AE(s)}willUpdate(t){}_$AE(t){var i;null===(i=this._$ES)||void 0===i||i.forEach((t=>{var i;return null===(i=t.hostUpdated)||void 0===i?void 0:i.call(t)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return!0}update(t){void 0!==this._$EC&&(this._$EC.forEach(((t,i)=>this._$EO(i,this[i],t))),this._$EC=void 0),this._$Ek()}updated(t){}firstUpdated(t){}}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var p;v.finalized=!0,v.elementProperties=new Map,v.elementStyles=[],v.shadowRootOptions={mode:"open"},null==a||a({ReactiveElement:v}),(null!==(o=globalThis.reactiveElementVersions)&&void 0!==o?o:globalThis.reactiveElementVersions=[]).push("1.3.3");const f=globalThis.trustedTypes,g=f?f.createPolicy("lit-html",{createHTML:t=>t}):void 0,y=`lit$${(Math.random()+"").slice(9)}$`,m="?"+y,w=`<${m}>`,b=document,x=(t="")=>b.createComment(t),$=t=>null===t||"object"!=typeof t&&"function"!=typeof t,S=Array.isArray,k=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,A=/-->/g,C=/>/g,_=/>|[ 	\n\r](?:([^\s"'>=/]+)([ 	\n\r]*=[ 	\n\r]*(?:[^ 	\n\r"'`<>=]|("|')|))|$)/g,E=/'/g,T=/"/g,M=/^(?:script|style|textarea|title)$/i,U=(t=>(i,...s)=>({_$litType$:t,strings:i,values:s}))(1),j=Symbol.for("lit-noChange"),O=Symbol.for("lit-nothing"),R=new WeakMap,z=b.createTreeWalker(b,129,null,!1),N=(t,i)=>{const s=t.length-1,e=[];let n,r=2===i?"<svg>":"",o=k;for(let i=0;i<s;i++){const s=t[i];let h,l,a=-1,c=0;for(;c<s.length&&(o.lastIndex=c,l=o.exec(s),null!==l);)c=o.lastIndex,o===k?"!--"===l[1]?o=A:void 0!==l[1]?o=C:void 0!==l[2]?(M.test(l[2])&&(n=RegExp("</"+l[2],"g")),o=_):void 0!==l[3]&&(o=_):o===_?">"===l[0]?(o=null!=n?n:k,a=-1):void 0===l[1]?a=-2:(a=o.lastIndex-l[2].length,h=l[1],o=void 0===l[3]?_:'"'===l[3]?T:E):o===T||o===E?o=_:o===A||o===C?o=k:(o=_,n=void 0);const d=o===_&&t[i+1].startsWith("/>")?" ":"";r+=o===k?s+w:a>=0?(e.push(h),s.slice(0,a)+"$lit$"+s.slice(a)+y+d):s+y+(-2===a?(e.push(void 0),i):d)}const h=r+(t[s]||"<?>")+(2===i?"</svg>":"");if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return[void 0!==g?g.createHTML(h):h,e]};class I{constructor({strings:t,_$litType$:i},s){let e;this.parts=[];let n=0,r=0;const o=t.length-1,h=this.parts,[l,a]=N(t,i);if(this.el=I.createElement(l,s),z.currentNode=this.el.content,2===i){const t=this.el.content,i=t.firstChild;i.remove(),t.append(...i.childNodes)}for(;null!==(e=z.nextNode())&&h.length<o;){if(1===e.nodeType){if(e.hasAttributes()){const t=[];for(const i of e.getAttributeNames())if(i.endsWith("$lit$")||i.startsWith(y)){const s=a[r++];if(t.push(i),void 0!==s){const t=e.getAttribute(s.toLowerCase()+"$lit$").split(y),i=/([.?@])?(.*)/.exec(s);h.push({type:1,index:n,name:i[2],strings:t,ctor:"."===i[1]?H:"?"===i[1]?W:"@"===i[1]?Z:D})}else h.push({type:6,index:n})}for(const i of t)e.removeAttribute(i)}if(M.test(e.tagName)){const t=e.textContent.split(y),i=t.length-1;if(i>0){e.textContent=f?f.emptyScript:"";for(let s=0;s<i;s++)e.append(t[s],x()),z.nextNode(),h.push({type:2,index:++n});e.append(t[i],x())}}}else if(8===e.nodeType)if(e.data===m)h.push({type:2,index:n});else{let t=-1;for(;-1!==(t=e.data.indexOf(y,t+1));)h.push({type:7,index:n}),t+=y.length-1}n++}}static createElement(t,i){const s=b.createElement("template");return s.innerHTML=t,s}}function P(t,i,s=t,e){var n,r,o,h;if(i===j)return i;let l=void 0!==e?null===(n=s._$Cl)||void 0===n?void 0:n[e]:s._$Cu;const a=$(i)?void 0:i._$litDirective$;return(null==l?void 0:l.constructor)!==a&&(null===(r=null==l?void 0:l._$AO)||void 0===r||r.call(l,!1),void 0===a?l=void 0:(l=new a(t),l._$AT(t,s,e)),void 0!==e?(null!==(o=(h=s)._$Cl)&&void 0!==o?o:h._$Cl=[])[e]=l:s._$Cu=l),void 0!==l&&(i=P(t,l._$AS(t,i.values),l,e)),i}class L{constructor(t,i){this.v=[],this._$AN=void 0,this._$AD=t,this._$AM=i}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}p(t){var i;const{el:{content:s},parts:e}=this._$AD,n=(null!==(i=null==t?void 0:t.creationScope)&&void 0!==i?i:b).importNode(s,!0);z.currentNode=n;let r=z.nextNode(),o=0,h=0,l=e[0];for(;void 0!==l;){if(o===l.index){let i;2===l.type?i=new B(r,r.nextSibling,this,t):1===l.type?i=new l.ctor(r,l.name,l.strings,this,t):6===l.type&&(i=new q(r,this,t)),this.v.push(i),l=e[++h]}o!==(null==l?void 0:l.index)&&(r=z.nextNode(),o++)}return n}m(t){let i=0;for(const s of this.v)void 0!==s&&(void 0!==s.strings?(s._$AI(t,s,i),i+=s.strings.length-2):s._$AI(t[i])),i++}}class B{constructor(t,i,s,e){var n;this.type=2,this._$AH=O,this._$AN=void 0,this._$AA=t,this._$AB=i,this._$AM=s,this.options=e,this._$Cg=null===(n=null==e?void 0:e.isConnected)||void 0===n||n}get _$AU(){var t,i;return null!==(i=null===(t=this._$AM)||void 0===t?void 0:t._$AU)&&void 0!==i?i:this._$Cg}get parentNode(){let t=this._$AA.parentNode;const i=this._$AM;return void 0!==i&&11===t.nodeType&&(t=i.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,i=this){t=P(this,t,i),$(t)?t===O||null==t||""===t?(this._$AH!==O&&this._$AR(),this._$AH=O):t!==this._$AH&&t!==j&&this.$(t):void 0!==t._$litType$?this.T(t):void 0!==t.nodeType?this.k(t):(t=>{var i;return S(t)||"function"==typeof(null===(i=t)||void 0===i?void 0:i[Symbol.iterator])})(t)?this.S(t):this.$(t)}M(t,i=this._$AB){return this._$AA.parentNode.insertBefore(t,i)}k(t){this._$AH!==t&&(this._$AR(),this._$AH=this.M(t))}$(t){this._$AH!==O&&$(this._$AH)?this._$AA.nextSibling.data=t:this.k(b.createTextNode(t)),this._$AH=t}T(t){var i;const{values:s,_$litType$:e}=t,n="number"==typeof e?this._$AC(t):(void 0===e.el&&(e.el=I.createElement(e.h,this.options)),e);if((null===(i=this._$AH)||void 0===i?void 0:i._$AD)===n)this._$AH.m(s);else{const t=new L(n,this),i=t.p(this.options);t.m(s),this.k(i),this._$AH=t}}_$AC(t){let i=R.get(t.strings);return void 0===i&&R.set(t.strings,i=new I(t)),i}S(t){S(this._$AH)||(this._$AH=[],this._$AR());const i=this._$AH;let s,e=0;for(const n of t)e===i.length?i.push(s=new B(this.M(x()),this.M(x()),this,this.options)):s=i[e],s._$AI(n),e++;e<i.length&&(this._$AR(s&&s._$AB.nextSibling,e),i.length=e)}_$AR(t=this._$AA.nextSibling,i){var s;for(null===(s=this._$AP)||void 0===s||s.call(this,!1,!0,i);t&&t!==this._$AB;){const i=t.nextSibling;t.remove(),t=i}}setConnected(t){var i;void 0===this._$AM&&(this._$Cg=t,null===(i=this._$AP)||void 0===i||i.call(this,t))}}class D{constructor(t,i,s,e,n){this.type=1,this._$AH=O,this._$AN=void 0,this.element=t,this.name=i,this._$AM=e,this.options=n,s.length>2||""!==s[0]||""!==s[1]?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=O}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,i=this,s,e){const n=this.strings;let r=!1;if(void 0===n)t=P(this,t,i,0),r=!$(t)||t!==this._$AH&&t!==j,r&&(this._$AH=t);else{const e=t;let o,h;for(t=n[0],o=0;o<n.length-1;o++)h=P(this,e[s+o],i,o),h===j&&(h=this._$AH[o]),r||(r=!$(h)||h!==this._$AH[o]),h===O?t=O:t!==O&&(t+=(null!=h?h:"")+n[o+1]),this._$AH[o]=h}r&&!e&&this.C(t)}C(t){t===O?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"")}}class H extends D{constructor(){super(...arguments),this.type=3}C(t){this.element[this.name]=t===O?void 0:t}}const J=f?f.emptyScript:"";class W extends D{constructor(){super(...arguments),this.type=4}C(t){t&&t!==O?this.element.setAttribute(this.name,J):this.element.removeAttribute(this.name)}}class Z extends D{constructor(t,i,s,e,n){super(t,i,s,e,n),this.type=5}_$AI(t,i=this){var s;if((t=null!==(s=P(this,t,i,0))&&void 0!==s?s:O)===j)return;const e=this._$AH,n=t===O&&e!==O||t.capture!==e.capture||t.once!==e.once||t.passive!==e.passive,r=t!==O&&(e===O||n);n&&this.element.removeEventListener(this.name,this,e),r&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var i,s;"function"==typeof this._$AH?this._$AH.call(null!==(s=null===(i=this.options)||void 0===i?void 0:i.host)&&void 0!==s?s:this.element,t):this._$AH.handleEvent(t)}}class q{constructor(t,i,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=i,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(t){P(this,t)}}const F=window.litHtmlPolyfillSupport;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var K,Q;null==F||F(I,B),(null!==(p=globalThis.litHtmlVersions)&&void 0!==p?p:globalThis.litHtmlVersions=[]).push("2.2.6");class V extends v{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t,i;const s=super.createRenderRoot();return null!==(t=(i=this.renderOptions).renderBefore)&&void 0!==t||(i.renderBefore=s.firstChild),s}update(t){const i=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=((t,i,s)=>{var e,n;const r=null!==(e=null==s?void 0:s.renderBefore)&&void 0!==e?e:i;let o=r._$litPart$;if(void 0===o){const t=null!==(n=null==s?void 0:s.renderBefore)&&void 0!==n?n:null;r._$litPart$=o=new B(i.insertBefore(x(),t),t,void 0,null!=s?s:{})}return o._$AI(t),o})(i,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!1)}render(){return j}}V.finalized=!0,V._$litElement$=!0,null===(K=globalThis.litElementHydrateSupport)||void 0===K||K.call(globalThis,{LitElement:V});const G=globalThis.litElementPolyfillSupport;null==G||G({LitElement:V}),(null!==(Q=globalThis.litElementVersions)&&void 0!==Q?Q:globalThis.litElementVersions=[]).push("3.2.1");class X extends V{static styles=[n`
      :host {
        display: block;
      }
      .card {
        width: 200px;
        height: 260px;
        background: #fff;
        border: solid 1px #f4f4f4;
        border-radius: 4px;
        cursor: pointer;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
        transition: all 0.3s ease-in-out;
      }
      .card:hover {
        transform: scale(1.05);
        box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
      }

      .card h1 {
        text-align: center;
        font-size:1rem;
      }
      .card p {
        padding: 0 8px;
        text-align:center;
      }
      .card p u{
        color:#24aa91;
        font-weight:700;
      }
      .card img {
        width: 100%;
        height: 60%;
      }
    `];static get properties(){return{character:{type:Object}}}render(){return U`
      <div class="card">
        <h1>${this.character.name}</h1>
        <img src="${this.character.image}" alt="${this.character.name}" />

        <p><u>${this.character.status}</u> - ${this.character.species}</p>
      </div>
    `}}customElements.define("character-rick",X);class Y extends V{static styles=[n`
      :host {
        display: block;
      }
      section {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
      }
    `];render(){return U`
      <section>
        <img
          src="https://media4.giphy.com/media/Temfv2HyFgM47QmiOm/giphy.gif"
        />
        <h2>Loading ...</h2>
      </section>
    `}}customElements.define("loading-api",Y);class tt extends V{static styles=[n`
      :host {
        display: block;
      }
      section {
        display: flex;
        justify-content: center;
        flex-direction: row;
        flex-wrap: wrap;
        gap: 16px;
      }
    `];static get properties(){return{loading:{type:Boolean},characters:{type:Array}}}constructor(){super(),this.loading=!1,this.characters=[],this.getData()}async getData(){this.loading=!0;const t=await(async()=>{const t=await fetch("https://rickandmortyapi.com/api/character"),{results:i}=await t.json();return i.map((({id:t,status:i,species:s,image:e,name:n})=>({id:t,name:n,status:i,species:s,image:e})))})();this.characters=t,this.loading=!1}render(){return U`
      ${this.loading?U`<loading-api></loading-api>`:U`
            <section>
              ${this.characters.map((t=>U`
                  <character-rick .character=${t}></character-rick>
                `))}
            </section>
          `}
    `}}customElements.define("characters-rick",tt);class it extends V{static styles=[n`
      :host {
        display: block;
      }
      div{
       display:flex;
       flex-direction:column;
       justify-content:center; 
       align-items:center;
       margin-bottom:24px;
       text-align:center;
      }
      h1{
        font-size:4rem;
      }
      h1 span , a{
        color:#24aa91;
      }
      @media (max-width: 600px) {
        h1{
          font-size:3rem;
        }
      }
    `];render(){return U`
    <div>
      <h1>The <span>Rick and Morty</span> API </h1>
      <a>LitElement</a>
    </div>
    `}}customElements.define("title-rick",it);window.customElements.define("my-app",class extends V{static get styles(){return n`
      :host {
        display: block;
        padding: 16px;
        max-width: 1024px;
        margin: 0 auto;
      }
    `}constructor(){super(),document.title="Rick and Morty API"}render(){return U`
      <title-rick></title-rick>
      <characters-rick></characters-rick>
    `}});
