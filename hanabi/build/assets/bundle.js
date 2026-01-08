(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function n(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(s){if(s.ep)return;s.ep=!0;const o=n(s);fetch(s.href,o)}})();const $={context:void 0,registry:void 0,effects:void 0,done:!1,getContextId(){return ut(this.context.count)},getNextContextId(){return ut(this.context.count++)}};function ut(e){const t=String(e),n=t.length-1;return $.context.id+(n?String.fromCharCode(96+n):"")+t}function we(e){$.context=e}const tn=!1,nn=(e,t)=>e===t,Ke=Symbol("solid-proxy"),rn=typeof Proxy=="function",sn=Symbol("solid-track"),Le={equals:nn};let St=Tt;const H=1,ke=2,$t={owned:null,cleanups:null,context:null,owner:null},je={};var S=null;let g=null,on=null,P=null,j=null,U=null,ze=0;function de(e,t){const n=P,r=S,s=e.length===0,o=t===void 0?r:t,i=s?$t:{owned:null,cleanups:null,context:o?o.context:null,owner:o},a=s?e:()=>e(()=>N(()=>ne(i)));S=i,P=null;try{return D(a,!0)}finally{P=n,S=r}}function R(e,t){t=t?Object.assign({},Le,t):Le;const n={value:e,observers:null,observerSlots:null,comparator:t.equals||void 0},r=s=>(typeof s=="function"&&(g&&g.running&&g.sources.has(n)?s=s(n.tValue):s=s(n.value)),Pt(n,s));return[Lt.bind(n),r]}function dt(e,t,n){const r=Fe(e,t,!0,H);ge(r)}function C(e,t,n){const r=Fe(e,t,!1,H);ge(r)}function an(e,t,n){St=pn;const r=Fe(e,t,!1,H),s=oe&&pe(oe);s&&(r.suspense=s),r.user=!0,U?U.push(r):ge(r)}function M(e,t,n){n=n?Object.assign({},Le,n):Le;const r=Fe(e,t,!0,0);return r.observers=null,r.observerSlots=null,r.comparator=n.equals||void 0,ge(r),Lt.bind(r)}function cn(e){return e&&typeof e=="object"&&"then"in e}function At(e,t,n){let r,s,o;typeof t=="function"?(r=e,s=t,o={}):(r=!0,s=e,o=t||{});let i=null,a=je,c=null,l=!1,u=!1,d="initialValue"in o,h=typeof r=="function"&&M(r);const w=new Set,[v,f]=(o.storage||R)(o.initialValue),[m,k]=R(void 0),[y,E]=R(void 0,{equals:!1}),[T,F]=R(d?"ready":"unresolved");$.context&&(c=$.getNextContextId(),o.ssrLoadFrom==="initial"?a=o.initialValue:$.load&&$.has(c)&&(a=$.load(c)));function B(z,O,V,_){return i===z&&(i=null,_!==void 0&&(d=!0),(z===a||O===a)&&o.onHydrated&&queueMicrotask(()=>o.onHydrated(_,{value:O})),a=je,g&&z&&l?(g.promises.delete(z),l=!1,D(()=>{g.running=!0,J(O,V)},!1)):J(O,V)),O}function J(z,O){D(()=>{O===void 0&&f(()=>z),F(O!==void 0?"errored":d?"ready":"unresolved"),k(O);for(const V of w.keys())V.decrement();w.clear()},!1)}function Q(){const z=oe&&pe(oe),O=v(),V=m();if(V!==void 0&&!i)throw V;return P&&!P.user&&z&&dt(()=>{y(),i&&(z.resolved&&g&&l?g.promises.add(i):w.has(z)||(z.increment(),w.add(z)))}),O}function Y(z=!0){if(z!==!1&&u)return;u=!1;const O=h?h():r;if(l=g&&g.running,O==null||O===!1){B(i,N(v));return}g&&i&&g.promises.delete(i);let V;const _=a!==je?a:N(()=>{try{return s(O,{value:v(),refetching:z})}catch(L){V=L}});if(V!==void 0){B(i,void 0,$e(V),O);return}else if(!cn(_))return B(i,_,void 0,O),_;return i=_,"v"in _?(_.s===1?B(i,_.v,void 0,O):B(i,void 0,$e(_.v),O),_):(u=!0,queueMicrotask(()=>u=!1),D(()=>{F(d?"refreshing":"pending"),E()},!1),_.then(L=>B(_,L,void 0,O),L=>B(_,void 0,$e(L),O)))}Object.defineProperties(Q,{state:{get:()=>T()},error:{get:()=>m()},loading:{get(){const z=T();return z==="pending"||z==="refreshing"}},latest:{get(){if(!d)return Q();const z=m();if(z&&!i)throw z;return v()}}});let be=S;return h?dt(()=>(be=S,Y(!1))):Y(!1),[Q,{refetch:z=>rt(be,()=>Y(z)),mutate:f}]}function ln(e){return D(e,!1)}function N(e){if(P===null)return e();const t=P;P=null;try{return e()}finally{P=t}}function tt(e,t,n){const r=Array.isArray(e);let s,o=n&&n.defer;return i=>{let a;if(r){a=Array(e.length);for(let l=0;l<e.length;l++)a[l]=e[l]()}else a=e();if(o)return o=!1,i;const c=N(()=>t(a,s,i));return s=a,c}}function Oe(e){return S===null||(S.cleanups===null?S.cleanups=[e]:S.cleanups.push(e)),e}function nt(){return S}function rt(e,t){const n=S,r=P;S=e,P=null;try{return D(t,!0)}catch(s){st(s)}finally{S=n,P=r}}function un(e){if(g&&g.running)return e(),g.done;const t=P,n=S;return Promise.resolve().then(()=>{P=t,S=n;let r;return oe&&(r=g||(g={sources:new Set,effects:[],promises:new Set,disposed:new Set,queue:new Set,running:!0}),r.done||(r.done=new Promise(s=>r.resolve=s)),r.running=!0),D(e,!1),P=S=null,r?r.done:void 0})}const[co,ft]=R(!1);function dn(e){U.push.apply(U,e),e.length=0}function he(e,t){const n=Symbol("context");return{id:n,Provider:gn(n),defaultValue:e}}function pe(e){let t;return S&&S.context&&(t=S.context[e.id])!==void 0?t:e.defaultValue}function Re(e){const t=M(e),n=M(()=>Xe(t()));return n.toArray=()=>{const r=n();return Array.isArray(r)?r:r!=null?[r]:[]},n}let oe;function fn(){return oe||(oe=he())}function Lt(){const e=g&&g.running;if(this.sources&&(e?this.tState:this.state))if((e?this.tState:this.state)===H)ge(this);else{const t=j;j=null,D(()=>Te(this),!1),j=t}if(P){const t=this.observers?this.observers.length:0;P.sources?(P.sources.push(this),P.sourceSlots.push(t)):(P.sources=[this],P.sourceSlots=[t]),this.observers?(this.observers.push(P),this.observerSlots.push(P.sources.length-1)):(this.observers=[P],this.observerSlots=[P.sources.length-1])}return e&&g.sources.has(this)?this.tValue:this.value}function Pt(e,t,n){let r=g&&g.running&&g.sources.has(e)?e.tValue:e.value;if(!e.comparator||!e.comparator(r,t)){if(g){const s=g.running;(s||!n&&g.sources.has(e))&&(g.sources.add(e),e.tValue=t),s||(e.value=t)}else e.value=t;e.observers&&e.observers.length&&D(()=>{for(let s=0;s<e.observers.length;s+=1){const o=e.observers[s],i=g&&g.running;i&&g.disposed.has(o)||((i?!o.tState:!o.state)&&(o.pure?j.push(o):U.push(o),o.observers&&Mt(o)),i?o.tState=H:o.state=H)}if(j.length>1e6)throw j=[],new Error},!1)}return t}function ge(e){if(!e.fn)return;ne(e);const t=ze;ht(e,g&&g.running&&g.sources.has(e)?e.tValue:e.value,t),g&&!g.running&&g.sources.has(e)&&queueMicrotask(()=>{D(()=>{g&&(g.running=!0),P=S=e,ht(e,e.tValue,t),P=S=null},!1)})}function ht(e,t,n){let r;const s=S,o=P;P=S=e;try{r=e.fn(t)}catch(i){return e.pure&&(g&&g.running?(e.tState=H,e.tOwned&&e.tOwned.forEach(ne),e.tOwned=void 0):(e.state=H,e.owned&&e.owned.forEach(ne),e.owned=null)),e.updatedAt=n+1,st(i)}finally{P=o,S=s}(!e.updatedAt||e.updatedAt<=n)&&(e.updatedAt!=null&&"observers"in e?Pt(e,r,!0):g&&g.running&&e.pure?(g.sources.add(e),e.tValue=r):e.value=r,e.updatedAt=n)}function Fe(e,t,n,r=H,s){const o={fn:e,state:r,updatedAt:null,owned:null,sources:null,sourceSlots:null,cleanups:null,value:t,owner:S,context:S?S.context:null,pure:n};return g&&g.running&&(o.state=0,o.tState=r),S===null||S!==$t&&(g&&g.running&&S.pure?S.tOwned?S.tOwned.push(o):S.tOwned=[o]:S.owned?S.owned.push(o):S.owned=[o]),o}function Pe(e){const t=g&&g.running;if((t?e.tState:e.state)===0)return;if((t?e.tState:e.state)===ke)return Te(e);if(e.suspense&&N(e.suspense.inFallback))return e.suspense.effects.push(e);const n=[e];for(;(e=e.owner)&&(!e.updatedAt||e.updatedAt<ze);){if(t&&g.disposed.has(e))return;(t?e.tState:e.state)&&n.push(e)}for(let r=n.length-1;r>=0;r--){if(e=n[r],t){let s=e,o=n[r+1];for(;(s=s.owner)&&s!==o;)if(g.disposed.has(s))return}if((t?e.tState:e.state)===H)ge(e);else if((t?e.tState:e.state)===ke){const s=j;j=null,D(()=>Te(e,n[0]),!1),j=s}}}function D(e,t){if(j)return e();let n=!1;t||(j=[]),U?n=!0:U=[],ze++;try{const r=e();return hn(n),r}catch(r){n||(U=null),j=null,st(r)}}function hn(e){if(j&&(Tt(j),j=null),e)return;let t;if(g){if(!g.promises.size&&!g.queue.size){const r=g.sources,s=g.disposed;U.push.apply(U,g.effects),t=g.resolve;for(const o of U)"tState"in o&&(o.state=o.tState),delete o.tState;g=null,D(()=>{for(const o of s)ne(o);for(const o of r){if(o.value=o.tValue,o.owned)for(let i=0,a=o.owned.length;i<a;i++)ne(o.owned[i]);o.tOwned&&(o.owned=o.tOwned),delete o.tValue,delete o.tOwned,o.tState=0}ft(!1)},!1)}else if(g.running){g.running=!1,g.effects.push.apply(g.effects,U),U=null,ft(!0);return}}const n=U;U=null,n.length&&D(()=>St(n),!1),t&&t()}function Tt(e){for(let t=0;t<e.length;t++)Pe(e[t])}function pn(e){let t,n=0;for(t=0;t<e.length;t++){const r=e[t];r.user?e[n++]=r:Pe(r)}if($.context){if($.count){$.effects||($.effects=[]),$.effects.push(...e.slice(0,n));return}we()}for($.effects&&($.done||!$.count)&&(e=[...$.effects,...e],n+=$.effects.length,delete $.effects),t=0;t<n;t++)Pe(e[t])}function Te(e,t){const n=g&&g.running;n?e.tState=0:e.state=0;for(let r=0;r<e.sources.length;r+=1){const s=e.sources[r];if(s.sources){const o=n?s.tState:s.state;o===H?s!==t&&(!s.updatedAt||s.updatedAt<ze)&&Pe(s):o===ke&&Te(s,t)}}}function Mt(e){const t=g&&g.running;for(let n=0;n<e.observers.length;n+=1){const r=e.observers[n];(t?!r.tState:!r.state)&&(t?r.tState=ke:r.state=ke,r.pure?j.push(r):U.push(r),r.observers&&Mt(r))}}function ne(e){let t;if(e.sources)for(;e.sources.length;){const n=e.sources.pop(),r=e.sourceSlots.pop(),s=n.observers;if(s&&s.length){const o=s.pop(),i=n.observerSlots.pop();r<s.length&&(o.sourceSlots[i]=r,s[r]=o,n.observerSlots[r]=i)}}if(e.tOwned){for(t=e.tOwned.length-1;t>=0;t--)ne(e.tOwned[t]);delete e.tOwned}if(g&&g.running&&e.pure)Et(e,!0);else if(e.owned){for(t=e.owned.length-1;t>=0;t--)ne(e.owned[t]);e.owned=null}if(e.cleanups){for(t=e.cleanups.length-1;t>=0;t--)e.cleanups[t]();e.cleanups=null}g&&g.running?e.tState=0:e.state=0}function Et(e,t){if(t||(e.tState=0,g.disposed.add(e)),e.owned)for(let n=0;n<e.owned.length;n++)Et(e.owned[n])}function $e(e){return e instanceof Error?e:new Error(typeof e=="string"?e:"Unknown error",{cause:e})}function st(e,t=S){throw $e(e)}function Xe(e){if(typeof e=="function"&&!e.length)return Xe(e());if(Array.isArray(e)){const t=[];for(let n=0;n<e.length;n++){const r=Xe(e[n]);Array.isArray(r)?t.push.apply(t,r):t.push(r)}return t}return e}function gn(e,t){return function(r){let s;return C(()=>s=N(()=>(S.context={...S.context,[e]:r.value},Re(()=>r.children))),void 0),s}}const mn=Symbol("fallback");function pt(e){for(let t=0;t<e.length;t++)e[t]()}function wn(e,t,n={}){let r=[],s=[],o=[],i=0,a=t.length>1?[]:null;return Oe(()=>pt(o)),()=>{let c=e()||[],l=c.length,u,d;return c[sn],N(()=>{let w,v,f,m,k,y,E,T,F;if(l===0)i!==0&&(pt(o),o=[],r=[],s=[],i=0,a&&(a=[])),n.fallback&&(r=[mn],s[0]=de(B=>(o[0]=B,n.fallback())),i=1);else if(i===0){for(s=new Array(l),d=0;d<l;d++)r[d]=c[d],s[d]=de(h);i=l}else{for(f=new Array(l),m=new Array(l),a&&(k=new Array(l)),y=0,E=Math.min(i,l);y<E&&r[y]===c[y];y++);for(E=i-1,T=l-1;E>=y&&T>=y&&r[E]===c[T];E--,T--)f[T]=s[E],m[T]=o[E],a&&(k[T]=a[E]);for(w=new Map,v=new Array(T+1),d=T;d>=y;d--)F=c[d],u=w.get(F),v[d]=u===void 0?-1:u,w.set(F,d);for(u=y;u<=E;u++)F=r[u],d=w.get(F),d!==void 0&&d!==-1?(f[d]=s[u],m[d]=o[u],a&&(k[d]=a[u]),d=v[d],w.set(F,d)):o[u]();for(d=y;d<l;d++)d in f?(s[d]=f[d],o[d]=m[d],a&&(a[d]=k[d],a[d](d))):s[d]=de(h);s=s.slice(0,i=l),r=c.slice(0)}return s});function h(w){if(o[d]=w,a){const[v,f]=R(d);return a[d]=f,t(c[d],v)}return t(c[d])}}}function p(e,t){return N(()=>e(t||{}))}function Se(){return!0}const vn={get(e,t,n){return t===Ke?n:e.get(t)},has(e,t){return t===Ke?!0:e.has(t)},set:Se,deleteProperty:Se,getOwnPropertyDescriptor(e,t){return{configurable:!0,enumerable:!0,get(){return e.get(t)},set:Se,deleteProperty:Se}},ownKeys(e){return e.keys()}};function Ne(e){return(e=typeof e=="function"?e():e)?e:{}}function yn(){for(let e=0,t=this.length;e<t;++e){const n=this[e]();if(n!==void 0)return n}}function zt(...e){let t=!1;for(let i=0;i<e.length;i++){const a=e[i];t=t||!!a&&Ke in a,e[i]=typeof a=="function"?(t=!0,M(a)):a}if(rn&&t)return new Proxy({get(i){for(let a=e.length-1;a>=0;a--){const c=Ne(e[a])[i];if(c!==void 0)return c}},has(i){for(let a=e.length-1;a>=0;a--)if(i in Ne(e[a]))return!0;return!1},keys(){const i=[];for(let a=0;a<e.length;a++)i.push(...Object.keys(Ne(e[a])));return[...new Set(i)]}},vn);const n={},r=Object.create(null);for(let i=e.length-1;i>=0;i--){const a=e[i];if(!a)continue;const c=Object.getOwnPropertyNames(a);for(let l=c.length-1;l>=0;l--){const u=c[l];if(u==="__proto__"||u==="constructor")continue;const d=Object.getOwnPropertyDescriptor(a,u);if(!r[u])r[u]=d.get?{enumerable:!0,configurable:!0,get:yn.bind(n[u]=[d.get.bind(a)])}:d.value!==void 0?d:void 0;else{const h=n[u];h&&(d.get?h.push(d.get.bind(a)):d.value!==void 0&&h.push(()=>d.value))}}}const s={},o=Object.keys(r);for(let i=o.length-1;i>=0;i--){const a=o[i],c=r[a];c&&c.get?Object.defineProperty(s,a,c):s[a]=c?c.value:void 0}return s}const Ot=e=>`Stale read from <${e}>.`;function kn(e){const t="fallback"in e&&{fallback:()=>e.fallback};return M(wn(()=>e.each,e.children,t||void 0))}function te(e){const t=e.keyed,n=M(()=>e.when,void 0,void 0),r=t?n:M(n,void 0,{equals:(s,o)=>!s==!o});return M(()=>{const s=r();if(s){const o=e.children;return typeof o=="function"&&o.length>0?N(()=>o(t?s:()=>{if(!N(r))throw Ot("Show");return n()})):o}return e.fallback},void 0,void 0)}function xe(e){const t=Re(()=>e.children),n=M(()=>{const r=t(),s=Array.isArray(r)?r:[r];let o=()=>{};for(let i=0;i<s.length;i++){const a=i,c=s[i],l=o,u=M(()=>l()?void 0:c.when,void 0,void 0),d=c.keyed?u:M(u,void 0,{equals:(h,w)=>!h==!w});o=()=>l()||(d()?[a,u,c]:void 0)}return o});return M(()=>{const r=n()();if(!r)return e.fallback;const[s,o,i]=r,a=i.children;return typeof a=="function"&&a.length>0?N(()=>a(i.keyed?o():()=>{if(N(n)()?.[0]!==s)throw Ot("Match");return o()})):a},void 0,void 0)}function W(e){return e}const xn=he();function _n(e){let t=0,n,r,s,o,i;const[a,c]=R(!1),l=fn(),u={increment:()=>{++t===1&&c(!0)},decrement:()=>{--t===0&&c(!1)},inFallback:a,effects:[],resolved:!1},d=nt();if($.context&&$.load){const v=$.getContextId();let f=$.load(v);if(f&&(typeof f!="object"||f.s!==1?s=f:$.gather(v)),s&&s!=="$$f"){const[m,k]=R(void 0,{equals:!1});o=m,s.then(()=>{if($.done)return k();$.gather(v),we(r),k(),we()},y=>{i=y,k()})}}const h=pe(xn);h&&(n=h.register(u.inFallback));let w;return Oe(()=>w&&w()),p(l.Provider,{value:u,get children(){return M(()=>{if(i)throw i;if(r=$.context,o)return o(),o=void 0;r&&s==="$$f"&&we();const v=M(()=>e.children);return M(f=>{const m=u.inFallback(),{showContent:k=!0,showFallback:y=!0}=n?n():{};if((!m||s&&s!=="$$f")&&k)return u.resolved=!0,w&&w(),w=r=s=void 0,dn(u.effects),v();if(y)return w?f:de(E=>(w=E,r&&(we({id:r.id+"F",count:0}),r=void 0),e.fallback),d)})})}})}const Rt=e=>M(()=>e());function bn(e,t,n){let r=n.length,s=t.length,o=r,i=0,a=0,c=t[s-1].nextSibling,l=null;for(;i<s||a<o;){if(t[i]===n[a]){i++,a++;continue}for(;t[s-1]===n[o-1];)s--,o--;if(s===i){const u=o<r?a?n[a-1].nextSibling:n[o-a]:c;for(;a<o;)e.insertBefore(n[a++],u)}else if(o===a)for(;i<s;)(!l||!l.has(t[i]))&&t[i].remove(),i++;else if(t[i]===n[o-1]&&n[a]===t[s-1]){const u=t[--s].nextSibling;e.insertBefore(n[a++],t[i++].nextSibling),e.insertBefore(n[--o],u),t[s]=n[o]}else{if(!l){l=new Map;let d=a;for(;d<o;)l.set(n[d],d++)}const u=l.get(t[i]);if(u!=null)if(a<u&&u<o){let d=i,h=1,w;for(;++d<s&&d<o&&!((w=l.get(t[d]))==null||w!==u+h);)h++;if(h>u-a){const v=t[i];for(;a<u;)e.insertBefore(n[a++],v)}else e.replaceChild(n[a++],t[i++])}else i++;else t[i++].remove()}}}const gt="_$DX_DELEGATE";function Cn(e,t,n,r={}){let s;return de(o=>{s=o,t===document?e():b(t,e(),t.firstChild?null:void 0,n)},r.owner),()=>{s(),t.textContent=""}}function A(e,t,n,r){let s;const o=()=>{const a=document.createElement("template");return a.innerHTML=e,a.content.firstChild},i=()=>(s||(s=o())).cloneNode(!0);return i.cloneNode=i,i}function Sn(e,t=window.document){const n=t[gt]||(t[gt]=new Set);for(let r=0,s=e.length;r<s;r++){const o=e[r];n.has(o)||(n.add(o),t.addEventListener(o,$n))}}function q(e,t,n){ot(e)||(n==null?e.removeAttribute(t):e.setAttribute(t,n))}function x(e,t){ot(e)||(t==null?e.removeAttribute("class"):e.className=t)}function X(e,t,n,r){if(Array.isArray(n)){const s=n[0];e.addEventListener(t,n[0]=o=>s.call(e,n[1],o))}else e.addEventListener(t,n,typeof n!="function"&&n)}function ee(e,t,n){n!=null?e.style.setProperty(t,n):e.style.removeProperty(t)}function b(e,t,n,r){if(n!==void 0&&!r&&(r=[]),typeof t!="function")return Me(e,t,r,n);C(s=>Me(e,t(),s,n),r)}function ot(e){return!!$.context&&!$.done&&(!e||e.isConnected)}function $n(e){if($.registry&&$.events&&$.events.find(([c,l])=>l===e))return;let t=e.target;const n=`$$${e.type}`,r=e.target,s=e.currentTarget,o=c=>Object.defineProperty(e,"target",{configurable:!0,value:c}),i=()=>{const c=t[n];if(c&&!t.disabled){const l=t[`${n}Data`];if(l!==void 0?c.call(t,l,e):c.call(t,e),e.cancelBubble)return}return t.host&&typeof t.host!="string"&&!t.host._$host&&t.contains(e.target)&&o(t.host),!0},a=()=>{for(;i()&&(t=t._$host||t.parentNode||t.host););};if(Object.defineProperty(e,"currentTarget",{configurable:!0,get(){return t||document}}),$.registry&&!$.done&&($.done=_$HY.done=!0),e.composedPath){const c=e.composedPath();o(c[0]);for(let l=0;l<c.length-2&&(t=c[l],!!i());l++){if(t._$host){t=t._$host,a();break}if(t.parentNode===s)break}}else a();o(r)}function Me(e,t,n,r,s){const o=ot(e);if(o){!n&&(n=[...e.childNodes]);let c=[];for(let l=0;l<n.length;l++){const u=n[l];u.nodeType===8&&u.data.slice(0,2)==="!$"?u.remove():c.push(u)}n=c}for(;typeof n=="function";)n=n();if(t===n)return n;const i=typeof t,a=r!==void 0;if(e=a&&n[0]&&n[0].parentNode||e,i==="string"||i==="number"){if(o||i==="number"&&(t=t.toString(),t===n))return n;if(a){let c=n[0];c&&c.nodeType===3?c.data!==t&&(c.data=t):c=document.createTextNode(t),n=le(e,n,r,c)}else n!==""&&typeof n=="string"?n=e.firstChild.data=t:n=e.textContent=t}else if(t==null||i==="boolean"){if(o)return n;n=le(e,n,r)}else{if(i==="function")return C(()=>{let c=t();for(;typeof c=="function";)c=c();n=Me(e,c,n,r)}),()=>n;if(Array.isArray(t)){const c=[],l=n&&Array.isArray(n);if(Ye(c,t,n,s))return C(()=>n=Me(e,c,n,r,!0)),()=>n;if(o){if(!c.length)return n;if(r===void 0)return n=[...e.childNodes];let u=c[0];if(u.parentNode!==e)return n;const d=[u];for(;(u=u.nextSibling)!==r;)d.push(u);return n=d}if(c.length===0){if(n=le(e,n,r),a)return n}else l?n.length===0?mt(e,c,r):bn(e,n,c):(n&&le(e),mt(e,c));n=c}else if(t.nodeType){if(o&&t.parentNode)return n=a?[t]:t;if(Array.isArray(n)){if(a)return n=le(e,n,r,t);le(e,n,null,t)}else n==null||n===""||!e.firstChild?e.appendChild(t):e.replaceChild(t,e.firstChild);n=t}}return n}function Ye(e,t,n,r){let s=!1;for(let o=0,i=t.length;o<i;o++){let a=t[o],c=n&&n[e.length],l;if(!(a==null||a===!0||a===!1))if((l=typeof a)=="object"&&a.nodeType)e.push(a);else if(Array.isArray(a))s=Ye(e,a,c)||s;else if(l==="function")if(r){for(;typeof a=="function";)a=a();s=Ye(e,Array.isArray(a)?a:[a],Array.isArray(c)?c:[c])||s}else e.push(a),s=!0;else{const u=String(a);c&&c.nodeType===3&&c.data===u?e.push(c):e.push(document.createTextNode(u))}}return s}function mt(e,t,n=null){for(let r=0,s=t.length;r<s;r++)e.insertBefore(t[r],n)}function le(e,t,n,r){if(n===void 0)return e.textContent="";const s=r||document.createTextNode("");if(t.length){let o=!1;for(let i=t.length-1;i>=0;i--){const a=t[i];if(s!==a){const c=a.parentNode===e;!o&&!i?c?e.replaceChild(s,a):e.insertBefore(s,n):c&&a.remove()}else o=!0}}else e.insertBefore(s,n);return[s]}const An=!1;function Ft(){let e=new Set;function t(s){return e.add(s),()=>e.delete(s)}let n=!1;function r(s,o){if(n)return!(n=!1);const i={to:s,options:o,defaultPrevented:!1,preventDefault:()=>i.defaultPrevented=!0};for(const a of e)a.listener({...i,from:a.location,retry:c=>{c&&(n=!0),a.navigate(s,{...o,resolve:!1})}});return!i.defaultPrevented}return{subscribe:t,confirm:r}}let Ze;function it(){(!window.history.state||window.history.state._depth==null)&&window.history.replaceState({...window.history.state,_depth:window.history.length-1},""),Ze=window.history.state._depth}it();function Ln(e){return{...e,_depth:window.history.state&&window.history.state._depth}}function Pn(e,t){let n=!1;return()=>{const r=Ze;it();const s=r==null?null:Ze-r;if(n){n=!1;return}s&&t(s)?(n=!0,window.history.go(-s)):e()}}const Tn=/^(?:[a-z0-9]+:)?\/\//i,Mn=/^\/+|(\/)\/+$/g,Bt="http://sr";function ye(e,t=!1){const n=e.replace(Mn,"$1");return n?t||/^[?#]/.test(n)?n:"/"+n:""}function Ae(e,t,n){if(Tn.test(t))return;const r=ye(e),s=n&&ye(n);let o="";return!s||t.startsWith("/")?o=r:s.toLowerCase().indexOf(r.toLowerCase())!==0?o=r+s:o=s,(o||"/")+ye(t,!o)}function En(e,t){return ye(e).replace(/\/*(\*.*)?$/g,"")+ye(t)}function Gt(e){const t={};return e.searchParams.forEach((n,r)=>{r in t?Array.isArray(t[r])?t[r].push(n):t[r]=[t[r],n]:t[r]=n}),t}function zn(e,t,n){const[r,s]=e.split("/*",2),o=r.split("/").filter(Boolean),i=o.length;return a=>{const c=a.split("/").filter(Boolean),l=c.length-i;if(l<0||l>0&&s===void 0&&!t)return null;const u={path:i?"":"/",params:{}},d=h=>n===void 0?void 0:n[h];for(let h=0;h<i;h++){const w=o[h],v=w[0]===":",f=v?c[h]:c[h].toLowerCase(),m=v?w.slice(1):w.toLowerCase();if(v&&Ve(f,d(m)))u.params[m]=f;else if(v||!Ve(f,m))return null;u.path+=`/${f}`}if(s){const h=l?c.slice(-l).join("/"):"";if(Ve(h,d(s)))u.params[s]=h;else return null}return u}}function Ve(e,t){const n=r=>r===e;return t===void 0?!0:typeof t=="string"?n(t):typeof t=="function"?t(e):Array.isArray(t)?t.some(n):t instanceof RegExp?t.test(e):!1}function On(e){const[t,n]=e.pattern.split("/*",2),r=t.split("/").filter(Boolean);return r.reduce((s,o)=>s+(o.startsWith(":")?2:3),r.length-(n===void 0?0:1))}function Ut(e){const t=new Map,n=nt();return new Proxy({},{get(r,s){return t.has(s)||rt(n,()=>t.set(s,M(()=>e()[s]))),t.get(s)()},getOwnPropertyDescriptor(){return{enumerable:!0,configurable:!0}},ownKeys(){return Reflect.ownKeys(e())},has(r,s){return s in e()}})}function jt(e){let t=/(\/?\:[^\/]+)\?/.exec(e);if(!t)return[e];let n=e.slice(0,t.index),r=e.slice(t.index+t[0].length);const s=[n,n+=t[1]];for(;t=/^(\/\:[^\/]+)\?/.exec(r);)s.push(n+=t[1]),r=r.slice(t[0].length);return jt(r).reduce((o,i)=>[...o,...s.map(a=>a+i)],[])}const Rn=100,Fn=he(),Nt=he();function Bn(e,t=""){const{component:n,preload:r,load:s,children:o,info:i}=e,a=!o||Array.isArray(o)&&!o.length,c={key:e,component:n,preload:r||s,info:i};return Vt(e.path).reduce((l,u)=>{for(const d of jt(u)){const h=En(t,d);let w=a?h:h.split("/*",1)[0];w=w.split("/").map(v=>v.startsWith(":")||v.startsWith("*")?v:encodeURIComponent(v)).join("/"),l.push({...c,originalPath:u,pattern:w,matcher:zn(w,!a,e.matchFilters)})}return l},[])}function Gn(e,t=0){return{routes:e,score:On(e[e.length-1])*1e4-t,matcher(n){const r=[];for(let s=e.length-1;s>=0;s--){const o=e[s],i=o.matcher(n);if(!i)return null;r.unshift({...i,route:o})}return r}}}function Vt(e){return Array.isArray(e)?e:[e]}function It(e,t="",n=[],r=[]){const s=Vt(e);for(let o=0,i=s.length;o<i;o++){const a=s[o];if(a&&typeof a=="object"){a.hasOwnProperty("path")||(a.path="");const c=Bn(a,t);for(const l of c){n.push(l);const u=Array.isArray(a.children)&&a.children.length===0;if(a.children&&!u)It(a.children,l.pattern,n,r);else{const d=Gn([...n],r.length);r.push(d)}n.pop()}}}return n.length?r:r.sort((o,i)=>i.score-o.score)}function Ie(e,t){for(let n=0,r=e.length;n<r;n++){const s=e[n].matcher(t);if(s)return s}return[]}function Un(e,t,n){const r=new URL(Bt),s=M(u=>{const d=e();try{return new URL(d,r)}catch{return console.error(`Invalid path ${d}`),u}},r,{equals:(u,d)=>u.href===d.href}),o=M(()=>s().pathname),i=M(()=>s().search,!0),a=M(()=>s().hash),c=()=>"",l=tt(i,()=>Gt(s()));return{get pathname(){return o()},get search(){return i()},get hash(){return a()},get state(){return t()},get key(){return c()},query:n?n(l):Ut(l)}}let se;function jn(){return se}function Nn(e,t,n,r={}){const{signal:[s,o],utils:i={}}=e,a=i.parsePath||(_=>_),c=i.renderPath||(_=>_),l=i.beforeLeave||Ft(),u=Ae("",r.base||"");if(u===void 0)throw new Error(`${u} is not a valid base path`);u&&!s().value&&o({value:u,replace:!0,scroll:!1});const[d,h]=R(!1);let w;const v=(_,L)=>{L.value===f()&&L.state===k()||(w===void 0&&h(!0),se=_,w=L,un(()=>{w===L&&(m(w.value),y(w.state),F[1](I=>I.filter(ae=>ae.pending)))}).finally(()=>{w===L&&ln(()=>{se=void 0,_==="navigate"&&O(w),h(!1),w=void 0})}))},[f,m]=R(s().value),[k,y]=R(s().state),E=Un(f,k,i.queryWrapper),T=[],F=R([]),B=M(()=>typeof r.transformUrl=="function"?Ie(t(),r.transformUrl(E.pathname)):Ie(t(),E.pathname)),J=()=>{const _=B(),L={};for(let I=0;I<_.length;I++)Object.assign(L,_[I].params);return L},Q=i.paramsWrapper?i.paramsWrapper(J,t):Ut(J),Y={pattern:u,path:()=>u,outlet:()=>null,resolvePath(_){return Ae(u,_)}};return C(tt(s,_=>v("native",_),{defer:!0})),{base:Y,location:E,params:Q,isRouting:d,renderPath:c,parsePath:a,navigatorFactory:z,matches:B,beforeLeave:l,preloadRoute:V,singleFlight:r.singleFlight===void 0?!0:r.singleFlight,submissions:F};function be(_,L,I){N(()=>{if(typeof L=="number"){L&&(i.go?i.go(L):console.warn("Router integration does not support relative routing"));return}const ae=!L||L[0]==="?",{replace:Ge,resolve:ce,scroll:Ue,state:me}={replace:!1,resolve:!ae,scroll:!0,...I},Ce=ce?_.resolvePath(L):Ae(ae&&E.pathname||"",L);if(Ce===void 0)throw new Error(`Path '${L}' is not a routable path`);if(T.length>=Rn)throw new Error("Too many redirects");const lt=f();(Ce!==lt||me!==k())&&(An||l.confirm(Ce,I)&&(T.push({value:lt,replace:Ge,scroll:Ue,state:k()}),v("navigate",{value:Ce,state:me})))})}function z(_){return _=_||pe(Nt)||Y,(L,I)=>be(_,L,I)}function O(_){const L=T[0];L&&(o({..._,replace:L.replace,scroll:L.scroll}),T.length=0)}function V(_,L){const I=Ie(t(),_.pathname),ae=se;se="preload";for(let Ge in I){const{route:ce,params:Ue}=I[Ge];ce.component&&ce.component.preload&&ce.component.preload();const{preload:me}=ce;L&&me&&rt(n(),()=>me({params:Ue,location:{pathname:_.pathname,search:_.search,hash:_.hash,query:Gt(_),state:null,key:""},intent:"preload"}))}se=ae}}function Vn(e,t,n,r){const{base:s,location:o,params:i}=e,{pattern:a,component:c,preload:l}=r().route,u=M(()=>r().path);c&&c.preload&&c.preload();const d=l?l({params:i,location:o,intent:se||"initial"}):void 0;return{parent:t,pattern:a,path:u,outlet:()=>c?p(c,{params:i,location:o,data:d,get children(){return n()}}):n(),resolvePath(w){return Ae(s.path(),w,u())}}}const In=e=>t=>{const{base:n}=t,r=Re(()=>t.children),s=M(()=>It(r(),t.base||""));let o;const i=Nn(e,s,()=>o,{base:n,singleFlight:t.singleFlight,transformUrl:t.transformUrl});return e.create&&e.create(i),p(Fn.Provider,{value:i,get children(){return p(Dn,{routerState:i,get root(){return t.root},get preload(){return t.rootPreload||t.rootLoad},get children(){return[Rt(()=>(o=nt())&&null),p(qn,{routerState:i,get branches(){return s()}})]}})}})};function Dn(e){const t=e.routerState.location,n=e.routerState.params,r=M(()=>e.preload&&N(()=>{e.preload({params:n,location:t,intent:jn()||"initial"})}));return p(te,{get when(){return e.root},keyed:!0,get fallback(){return e.children},children:s=>p(s,{params:n,location:t,get data(){return r()},get children(){return e.children}})})}function qn(e){const t=[];let n;const r=M(tt(e.routerState.matches,(s,o,i)=>{let a=o&&s.length===o.length;const c=[];for(let l=0,u=s.length;l<u;l++){const d=o&&o[l],h=s[l];i&&d&&h.route.key===d.route.key?c[l]=i[l]:(a=!1,t[l]&&t[l](),de(w=>{t[l]=w,c[l]=Vn(e.routerState,c[l-1]||e.routerState.base,wt(()=>r()[l+1]),()=>{const v=e.routerState.matches();return v[l]??v[0]})}))}return t.splice(s.length).forEach(l=>l()),i&&a?i:(n=c[0],c)}));return wt(()=>r()&&n)()}const wt=e=>()=>p(te,{get when(){return e()},keyed:!0,children:t=>p(Nt.Provider,{value:t,get children(){return t.outlet()}})}),De=e=>{const t=Re(()=>e.children);return zt(e,{get children(){return t()}})};function Hn([e,t],n,r){return[e,r?s=>t(r(s)):t]}function Wn(e){let t=!1;const n=s=>typeof s=="string"?{value:s}:s,r=Hn(R(n(e.get()),{equals:(s,o)=>s.value===o.value&&s.state===o.state}),void 0,s=>(!t&&e.set(s),$.registry&&!$.done&&($.done=!0),s));return e.init&&Oe(e.init((s=e.get())=>{t=!0,r[1](n(s)),t=!1})),In({signal:r,create:e.create,utils:e.utils})}function Kn(e,t,n){return e.addEventListener(t,n),()=>e.removeEventListener(t,n)}function Xn(e,t){const n=e&&document.getElementById(e);n?n.scrollIntoView():t&&window.scrollTo(0,0)}const Yn=new Map;function Zn(e=!0,t=!1,n="/_server",r){return s=>{const o=s.base.path(),i=s.navigatorFactory(s.base);let a,c;function l(f){return f.namespaceURI==="http://www.w3.org/2000/svg"}function u(f){if(f.defaultPrevented||f.button!==0||f.metaKey||f.altKey||f.ctrlKey||f.shiftKey)return;const m=f.composedPath().find(B=>B instanceof Node&&B.nodeName.toUpperCase()==="A");if(!m||t&&!m.hasAttribute("link"))return;const k=l(m),y=k?m.href.baseVal:m.href;if((k?m.target.baseVal:m.target)||!y&&!m.hasAttribute("state"))return;const T=(m.getAttribute("rel")||"").split(/\s+/);if(m.hasAttribute("download")||T&&T.includes("external"))return;const F=k?new URL(y,document.baseURI):new URL(y);if(!(F.origin!==window.location.origin||o&&F.pathname&&!F.pathname.toLowerCase().startsWith(o.toLowerCase())))return[m,F]}function d(f){const m=u(f);if(!m)return;const[k,y]=m,E=s.parsePath(y.pathname+y.search+y.hash),T=k.getAttribute("state");f.preventDefault(),i(E,{resolve:!1,replace:k.hasAttribute("replace"),scroll:!k.hasAttribute("noscroll"),state:T?JSON.parse(T):void 0})}function h(f){const m=u(f);if(!m)return;const[k,y]=m;r&&(y.pathname=r(y.pathname)),s.preloadRoute(y,k.getAttribute("preload")!=="false")}function w(f){clearTimeout(a);const m=u(f);if(!m)return c=null;const[k,y]=m;c!==k&&(r&&(y.pathname=r(y.pathname)),a=setTimeout(()=>{s.preloadRoute(y,k.getAttribute("preload")!=="false"),c=k},20))}function v(f){if(f.defaultPrevented)return;let m=f.submitter&&f.submitter.hasAttribute("formaction")?f.submitter.getAttribute("formaction"):f.target.getAttribute("action");if(!m)return;if(!m.startsWith("https://action/")){const y=new URL(m,Bt);if(m=s.parsePath(y.pathname+y.search),!m.startsWith(n))return}if(f.target.method.toUpperCase()!=="POST")throw new Error("Only POST forms are supported for Actions");const k=Yn.get(m);if(k){f.preventDefault();const y=new FormData(f.target,f.submitter);k.call({r:s,f:f.target},f.target.enctype==="multipart/form-data"?y:new URLSearchParams(y))}}Sn(["click","submit"]),document.addEventListener("click",d),e&&(document.addEventListener("mousemove",w,{passive:!0}),document.addEventListener("focusin",h,{passive:!0}),document.addEventListener("touchstart",h,{passive:!0})),document.addEventListener("submit",v),Oe(()=>{document.removeEventListener("click",d),e&&(document.removeEventListener("mousemove",w),document.removeEventListener("focusin",h),document.removeEventListener("touchstart",h)),document.removeEventListener("submit",v)})}}function Jn(e){const t=()=>{const r=window.location.pathname.replace(/^\/+/,"/")+window.location.search,s=window.history.state&&window.history.state._depth&&Object.keys(window.history.state).length===1?void 0:window.history.state;return{value:r+window.location.hash,state:s}},n=Ft();return Wn({get:t,set({value:r,replace:s,scroll:o,state:i}){s?window.history.replaceState(Ln(i),"",r):window.history.pushState(i,"",r),Xn(decodeURIComponent(window.location.hash.slice(1)),o),it()},init:r=>Kn(window,"popstate",Pn(r,s=>{if(s)return!n.confirm(s);{const o=t();return!n.confirm(o.value,{state:o.state})}})),create:Zn(e.preload,e.explicitLinks,e.actionBase,e.transformUrl),utils:{go:r=>window.history.go(r),beforeLeave:n}})(e)}const G=e=>new DOMParser().parseFromString(e,"image/svg+xml").querySelector("svg");function fe(e){return e===void 0?"":e.constructor.name=="String"?e:e.join(" ")}const[Qn,er]=R({name:void 0}),tr=he({user:Qn,re_user:er});function _e(){return pe(tr)}const nr="_CheckBox_16c0a_1",rr="_Box_16c0a_17",sr="_TickMark_16c0a_37",or="_Content_16c0a_38",ir="_Postman_16c0a_54",ar="_Text_16c0a_71",ue={CheckBox:nr,Box:rr,TickMark:sr,Content:or,Postman:ir,Text:ar};var cr=A("<input type=hidden>"),lr=A("<span>"),ur=A("<legend>"),dr=A("<div><div style=background:transparent><div>");const fr={width:.6,height:.6,state:!1,tick:"",accent:"#485d6c"},Dt=e=>{const t=zt(fr,e),n=()=>t.state,r=()=>t.accent,s=()=>t.tick,o=()=>t.width,i=()=>t.height,a=()=>t.legend,c=()=>t.name,[l,u]=R(n()),d=()=>u(h=>!l());return(()=>{var h=dr(),w=h.firstChild,v=w.firstChild;return X(h,"click",d),b(h,p(te,{get when(){return c()!==void 0},get children(){var f=cr();return C(m=>{var k=ue.Postman,y=c();return k!==m.e&&x(f,m.e=k),y!==m.t&&q(f,"name",m.t=y),m},{e:void 0,t:void 0}),C(()=>f.value=l()),f}}),w),b(v,p(te,{get when(){return s()!==""},get children(){var f=lr();return b(f,s),C(()=>x(f,ue.TickMark)),f}})),b(h,p(te,{get when(){return a()!==void 0},get children(){var f=ur();return b(f,a),C(m=>{var k=ue.Text,y=r();return k!==m.e&&x(f,m.e=k),y!==m.t&&ee(f,"color",m.t=y),m},{e:void 0,t:void 0}),f}}),null),C(f=>{var m=ue.CheckBox,k=ue.Box,y=`0.11em solid ${r()}`,E=`${o()+.19}em`,T=`${i()+.19}em`,F=l(),B=ue.Content,J=r(),Q=`${o()}em`,Y=`${i()}em`;return m!==f.e&&x(h,f.e=m),k!==f.t&&x(w,f.t=k),y!==f.a&&ee(w,"border",f.a=y),E!==f.o&&ee(w,"width",f.o=E),T!==f.i&&ee(w,"height",f.i=T),F!==f.n&&q(w,"box-state",f.n=F),B!==f.s&&x(v,f.s=B),J!==f.h&&ee(v,"background",f.h=J),Q!==f.r&&ee(v,"width",f.r=Q),Y!==f.d&&ee(v,"height",f.d=Y),f},{e:void 0,t:void 0,a:void 0,o:void 0,i:void 0,n:void 0,s:void 0,h:void 0,r:void 0,d:void 0}),h})()},hr="_Logo_8bwge_1",pr="_Actuator_8bwge_7",vt={Logo:hr,Actuator:pr},qt=`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!-- Created with Inkscape (http://www.inkscape.org/) -->

<svg
   width="389.60306mm"
   height="172.83472mm"
   viewBox="0 0 389.60305 172.83472"
   version="1.1"
   id="svg1"
   sodipodi:docname="hanabi.svg"
   inkscape:version="1.4.2 (ebf0e940d0, 2025-05-08)"
   xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape"
   xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd"
   xmlns:xlink="http://www.w3.org/1999/xlink"
   xmlns="http://www.w3.org/2000/svg"
   xmlns:svg="http://www.w3.org/2000/svg">
  <sodipodi:namedview
     id="namedview1"
     pagecolor="#ffffff"
     bordercolor="#000000"
     borderopacity="0.25"
     inkscape:showpageshadow="2"
     inkscape:pageopacity="0.0"
     inkscape:pagecheckerboard="0"
     inkscape:deskcolor="#d1d1d1"
     inkscape:document-units="mm"
     inkscape:zoom="0.56630326"
     inkscape:cx="1131.0194"
     inkscape:cy="562.4195"
     inkscape:window-width="1920"
     inkscape:window-height="1080"
     inkscape:window-x="0"
     inkscape:window-y="0"
     inkscape:window-maximized="1"
     inkscape:current-layer="g38" />
  <defs
     id="defs1">
    <rect
       x="1628.5885"
       y="604.05826"
       width="76.987818"
       height="19.740466"
       id="rect4" />
    <rect
       x="1246.3828"
       y="433.76354"
       width="158.66028"
       height="109.79328"
       id="rect3" />
    <rect
       x="1103.3226"
       y="416.31293"
       width="286.12099"
       height="181.53938"
       id="rect1" />
    <linearGradient
       id="linearGradient2">
      <stop
         style="stop-color:#f27e49;stop-opacity:1;"
         offset="0"
         id="stop1" />
      <stop
         style="stop-color:#46394e;stop-opacity:1;"
         offset="1"
         id="stop2" />
    </linearGradient>
    <linearGradient
       id="linearGradient38">
      <stop
         style="stop-color:#f23449;stop-opacity:1;"
         offset="0"
         id="stop38" />
      <stop
         style="stop-color:#46394e;stop-opacity:1;"
         offset="1"
         id="stop39" />
    </linearGradient>
    <linearGradient
       xlink:href="#linearGradient38"
       id="linearGradient39"
       x1="101.4521"
       y1="99.864105"
       x2="109.87026"
       y2="160.49869"
       gradientUnits="userSpaceOnUse" />
    <linearGradient
       xlink:href="#linearGradient38"
       id="linearGradient6"
       gradientUnits="userSpaceOnUse"
       x1="101.4521"
       y1="99.864105"
       x2="109.87026"
       y2="160.49869" />
    <linearGradient
       xlink:href="#linearGradient38"
       id="linearGradient7"
       gradientUnits="userSpaceOnUse"
       x1="101.4521"
       y1="99.864105"
       x2="109.87026"
       y2="160.49869" />
    <linearGradient
       xlink:href="#linearGradient38"
       id="linearGradient8"
       gradientUnits="userSpaceOnUse"
       x1="101.4521"
       y1="99.864105"
       x2="109.87026"
       y2="160.49869" />
    <linearGradient
       xlink:href="#linearGradient38"
       id="linearGradient9"
       gradientUnits="userSpaceOnUse"
       x1="101.4521"
       y1="99.864105"
       x2="109.87026"
       y2="160.49869" />
    <linearGradient
       xlink:href="#linearGradient38"
       id="linearGradient10"
       gradientUnits="userSpaceOnUse"
       x1="101.4521"
       y1="99.864105"
       x2="109.87026"
       y2="160.49869" />
    <linearGradient
       xlink:href="#linearGradient38"
       id="linearGradient11"
       gradientUnits="userSpaceOnUse"
       x1="101.4521"
       y1="99.864105"
       x2="109.87026"
       y2="160.49869" />
    <linearGradient
       xlink:href="#linearGradient38"
       id="linearGradient12"
       gradientUnits="userSpaceOnUse"
       x1="101.4521"
       y1="99.864105"
       x2="109.87026"
       y2="160.49869" />
    <linearGradient
       xlink:href="#linearGradient38"
       id="linearGradient13"
       gradientUnits="userSpaceOnUse"
       x1="101.4521"
       y1="99.864105"
       x2="109.87026"
       y2="160.49869" />
    <linearGradient
       xlink:href="#linearGradient2"
       id="linearGradient14"
       gradientUnits="userSpaceOnUse"
       x1="101.4521"
       y1="99.864105"
       x2="109.87026"
       y2="160.49869" />
  </defs>
  <g
     id="layer1"
     transform="matrix(1.5873876,0,0,1.5873876,61.568369,-109.04508)">
    <g
       id="g38"
       style="fill:url(#linearGradient39)">
      <path
         style="fill:none;fill-opacity:1;fill-rule:evenodd;stroke:#000000;stroke-width:1.00983;stroke-linecap:round;stroke-linejoin:bevel;stroke-opacity:1"
         d="M -9.6310054,168.20343 -18.004062,80.884426 -12.501767,138.77812 6.3974091,135.18967 6.87587,167.24651"
         id="path1" />
      <path
         style="fill:none;fill-opacity:1;fill-rule:evenodd;stroke:#000000;stroke-width:1.00983;stroke-linecap:round;stroke-linejoin:bevel;stroke-opacity:1"
         d="M 31.002791,136.14659 12.58207,134.47198 13.77822,167.24651 32.916631,167.00728 30.2851,128.01277"
         id="path2" />
      <text
         xml:space="preserve"
         style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:7.11162px;line-height:6.6;font-family:Dimnah;-inkscape-font-specification:Dimnah;text-align:center;writing-mode:lr-tb;direction:ltr;text-anchor:middle;fill:none;fill-opacity:1;fill-rule:evenodd;stroke:#000000;stroke-width:1.00983;stroke-linecap:round;stroke-linejoin:bevel;stroke-opacity:1"
         x="35.375378"
         y="128.26299"
         id="text2"><tspan
           sodipodi:role="line"
           id="tspan2"
           style="stroke-width:1.00984" /></text>
      <path
         style="fill:none;fill-opacity:1;fill-rule:evenodd;stroke:#000000;stroke-width:1.00983;stroke-linecap:round;stroke-linejoin:bevel;stroke-opacity:1"
         d="m 41.034805,128.73046 -1.91384,38.03759 1.43538,-30.38223 23.683785,-2.15307 -3.827683,32.5353"
         id="path3" />
      <path
         style="fill:none;fill-opacity:1;fill-rule:evenodd;stroke:#000000;stroke-width:1.00983;stroke-linecap:round;stroke-linejoin:bevel;stroke-opacity:1"
         d="m 88.006728,136.14659 -18.420612,-1.67461 1.19615,32.77453 19.138287,-0.23923 -2.631506,-38.99451"
         id="path4" />
      <path
         style="fill:none;fill-opacity:1;fill-rule:evenodd;stroke:#000000;stroke-width:1.00983;stroke-linecap:round;stroke-linejoin:bevel;stroke-opacity:1"
         d="m 95.725579,82.319807 4.449831,84.209013 h 25.59763 l -6.82894,-24.23032 -19.122197,7.42379"
         id="path5"
         sodipodi:nodetypes="ccccc" />
      <path
         style="fill:none;fill-opacity:1;fill-rule:evenodd;stroke:#000000;stroke-width:1.00984;stroke-linecap:round;stroke-linejoin:bevel;stroke-dasharray:none;stroke-opacity:1"
         d="m 132.52958,137.17989 0.927,29.89582"
         id="path6"
         sodipodi:nodetypes="cc" />
      <path
         style="fill:none;fill-opacity:1;fill-rule:evenodd;stroke:#000000;stroke-width:1.00983;stroke-linecap:round;stroke-linejoin:bevel;stroke-opacity:1"
         d="m 131.12647,130.12654 3.24378,3.7e-4 -1.36657,3.21936 -1.80397,-0.78076 z"
         id="path7"
         sodipodi:nodetypes="ccccc" />
      <circle
         id="path10"
         style="fill:#c0006f;stroke:#000000;stroke-width:0.166678"
         cx="146.27028"
         cy="132.131"
         r="0" />
      <circle
         id="path11"
         style="fill:#c0006f;stroke:#000000;stroke-width:0.166678"
         cx="148.69461"
         cy="168.09171"
         r="0" />
      <circle
         id="path12"
         style="fill:#ca3c70;stroke:#000000;stroke-width:0.166678"
         cx="177.3519"
         cy="145.28326"
         r="0" />
      <circle
         id="path15"
         style="fill:#ca3c70;stroke:#000000;stroke-width:0.166678"
         cx="202.97227"
         cy="179.62547"
         r="0" />
      <path
         id="text1"
         style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:18.6667px;line-height:1.3;font-family:carlito;-inkscape-font-specification:carlito;text-align:center;writing-mode:lr-tb;direction:ltr;text-anchor:middle;white-space:pre;shape-inside:url(#rect1);display:inline;fill:#ab1243;fill-opacity:1;fill-rule:evenodd;stroke-width:15.1181;stroke-linecap:round;stroke-linejoin:bevel;stroke-dasharray:none"
         d="M 1248.2969 424.04348 C 1247.7318 424.04348 1247.2487 424.2136 1246.8477 424.55388 C 1246.4466 424.89416 1246.1094 425.35903 1245.836 425.94844 L 1245.7266 424.63599 C 1245.7144 424.478 1245.6719 424.36552 1245.5989 424.29868 C 1245.5321 424.23184 1245.4136 424.1985 1245.2435 424.1985 L 1244.3229 424.1985 L 1244.3229 433.1125 L 1245.9271 433.1125 L 1245.9271 427.47974 C 1246.0364 427.18199 1246.1549 426.91767 1246.2825 426.68677 C 1246.4101 426.45587 1246.556 426.26134 1246.72 426.10336 C 1246.8902 425.93929 1247.0786 425.81778 1247.2852 425.73879 C 1247.3961 425.6944 1247.5153 425.66159 1247.6428 425.64036 L 1247.63 425.61795 C 1248.1121 425.15375 1248.6298 424.80864 1249.1833 424.58249 C 1249.2035 424.57409 1249.2238 424.5658 1249.2442 424.5577 L 1249.2721 424.29868 C 1249.1384 424.20754 1248.9896 424.14377 1248.8255 424.10731 C 1248.6615 424.06477 1248.4852 424.04348 1248.2969 424.04348 z M 1249.2442 424.5577 L 1249.1446 425.48359 C 1249.1263 425.6355 1249.0413 425.71152 1248.8894 425.71152 C 1248.8043 425.71152 1248.6827 425.69625 1248.5247 425.66587 C 1248.3728 425.62941 1248.2027 425.61124 1248.0143 425.61124 C 1247.8835 425.61124 1247.7597 425.6209 1247.6428 425.64036 L 1247.9157 426.11781 C 1247.9633 426.20113 1248.0257 426.26967 1248.1031 426.32323 C 1248.1805 426.3768 1248.2728 426.40348 1248.3799 426.40348 C 1248.5168 426.40348 1248.6506 426.35587 1248.7815 426.26065 C 1248.9184 426.16543 1249.0792 426.06131 1249.2636 425.94823 C 1249.4481 425.83516 1249.6654 425.73104 1249.9153 425.63582 C 1250.1712 425.5406 1250.4836 425.49298 1250.8526 425.49298 C 1251.406 425.49298 1251.8257 425.66554 1252.1113 426.01072 C 1252.4029 426.34994 1252.5487 426.85882 1252.5487 427.53726 L 1252.5487 428.20671 C 1251.5608 428.23051 1250.7276 428.32281 1250.0492 428.48349 C 1249.3707 428.63823 1248.8203 428.84061 1248.3978 429.09056 C 1247.9752 429.34051 1247.6687 429.62609 1247.4783 429.94746 C 1247.2938 430.26287 1247.2015 430.59323 1247.2015 430.93841 C 1247.2015 431.33119 1247.264 431.67337 1247.3889 431.96499 C 1247.5199 432.25065 1247.6955 432.49164 1247.9157 432.68803 C 1248.1418 432.87847 1248.4007 433.02131 1248.6923 433.11653 C 1248.9899 433.2058 1249.3083 433.25048 1249.6475 433.25048 C 1249.9748 433.25048 1250.2754 433.22066 1250.5491 433.16115 C 1250.8229 433.10759 1251.0788 433.02429 1251.3168 432.91122 C 1251.5549 432.79814 1251.781 432.66127 1251.9952 432.50058 C 1252.2154 432.33395 1252.4386 432.14653 1252.6648 431.93824 L 1252.8611 432.75052 C 1252.8909 432.8993 1252.9475 432.99756 1253.0308 433.04517 C 1253.1141 433.09278 1253.2331 433.11653 1253.3878 433.11653 L 1254.0841 433.11653 L 1254.0841 427.53726 C 1254.0841 427.04331 1254.0157 426.59397 1253.8788 426.18928 C 1253.7479 425.7846 1253.5545 425.43645 1253.2986 425.14484 C 1253.0427 424.85322 1252.7243 424.63002 1252.3434 424.47529 C 1251.9625 424.3146 1251.528 424.23434 1251.04 424.23434 C 1250.3861 424.23434 1249.7876 424.3421 1249.2442 424.5577 z M 1252.5487 429.18867 L 1252.5487 430.9919 C 1252.3761 431.17044 1252.2005 431.3341 1252.022 431.48289 C 1251.8494 431.62572 1251.6649 431.74773 1251.4685 431.8489 C 1251.2721 431.94412 1251.0639 432.01852 1250.8437 432.07208 C 1250.6235 432.12565 1250.3825 432.15243 1250.1206 432.15243 C 1249.9243 432.15243 1249.7398 432.12868 1249.5672 432.08107 C 1249.3946 432.02751 1249.2458 431.95007 1249.1208 431.8489 C 1248.9958 431.74178 1248.8946 431.60794 1248.8173 431.44725 C 1248.7459 431.28062 1248.7102 431.0842 1248.7102 430.85806 C 1248.7102 430.62001 1248.7786 430.4058 1248.9155 430.21536 C 1249.0524 430.01897 1249.2725 429.84934 1249.5761 429.70651 C 1249.8855 429.56368 1250.2842 429.45056 1250.7722 429.36724 C 1251.2602 429.27797 1251.8524 429.21843 1252.5487 429.18867 z "
         transform="matrix(3.1521213,0,0,3.1521213,-3781.5669,-1197.9476)" />
      <text
         xml:space="preserve"
         transform="matrix(0.16667847,0,0,0.16667847,-38.785971,68.694678)"
         id="text4"
         style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:18.6667px;line-height:1.3;font-family:carlito;-inkscape-font-specification:carlito;text-align:center;writing-mode:lr-tb;direction:ltr;white-space:pre;shape-inside:url(#rect4);display:inline;fill:#ab1243;fill-opacity:1;fill-rule:evenodd;stroke-width:15.1181;stroke-linecap:round;stroke-linejoin:bevel;stroke-dasharray:none" />
    </g>
  </g>
</svg>
`;var gr=A("<div><a href=/>");const mr=()=>{const e=G(qt);return(()=>{var t=gr(),n=t.firstChild;return b(n,e),C(r=>{var s=vt.Logo,o=vt.Actuator;return s!==r.e&&x(t,r.e=s),o!==r.t&&x(n,r.t=o),r},{e:void 0,t:void 0}),t})()},wr="_Splash_knpkf_1",vr={Splash:wr};var yr=A("<div>");const Ht=()=>{const e=G(qt);return(()=>{var t=yr();return b(t,e),C(()=>x(t,vr.Splash)),t})()},kr="_PasswordField_1i8ty_1",xr="_PswSwitch_1i8ty_6",yt={PasswordField:kr,PswSwitch:xr},_r="_TextField_1ul46_1",br="_InputLegend_1ul46_23",Cr="_InputField_1ul46_19",qe={TextField:_r,InputLegend:br,InputField:Cr};var Sr=A("<div><legend></legend><input>");const Ee=e=>{const[t,n]=R(!1),r=()=>n(l=>!0),s=l=>n(u=>l.target.value!==""),o=l=>n(u=>u||(l.target.nextElementSibling.focus(),!0)),i=()=>e.legend,a=()=>e.name,c=()=>e.type;return(()=>{var l=Sr(),u=l.firstChild,d=u.nextSibling;return X(u,"click",o),b(u,i),X(d,"blur",s),X(d,"focus",r),C(h=>{var w=qe.TextField,v=t(),f=qe.InputLegend,m=c(),k=qe.InputField,y=a();return w!==h.e&&x(l,h.e=w),v!==h.t&&q(l,"input-focus",h.t=v),f!==h.a&&x(u,h.a=f),m!==h.o&&q(d,"type",h.o=m),k!==h.i&&x(d,h.i=k),y!==h.n&&q(d,"name",h.n=y),h},{e:void 0,t:void 0,a:void 0,o:void 0,i:void 0,n:void 0}),l})()},$r=`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<svg
   viewBox="0 0 24 24"
   width="24"
   height="24"
   color="#595858"
   fill="none"
   version="1.1"
   id="svg5"
   sodipodi:docname="see.svg"
   inkscape:version="1.4.2 (ebf0e940d0, 2025-05-08)"
   xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape"
   xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd"
   xmlns="http://www.w3.org/2000/svg"
   xmlns:svg="http://www.w3.org/2000/svg">
  <defs
     id="defs5" />
  <sodipodi:namedview
     id="namedview5"
     pagecolor="#ffffff"
     bordercolor="#000000"
     borderopacity="0.25"
     inkscape:showpageshadow="2"
     inkscape:pageopacity="0.0"
     inkscape:pagecheckerboard="0"
     inkscape:deskcolor="#d1d1d1"
     inkscape:zoom="15.619368"
     inkscape:cx="9.507427"
     inkscape:cy="9.507427"
     inkscape:window-width="1920"
     inkscape:window-height="1080"
     inkscape:window-x="0"
     inkscape:window-y="0"
     inkscape:window-maximized="1"
     inkscape:current-layer="svg5" />
  <path
     d="M19 19.1414C17.1962 20.9097 14.7255 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C14.7974 2 17.3265 3.14864 19.1414 5"
     stroke="#595858"
     stroke-width="1.5"
     stroke-linecap="round"
     stroke-linejoin="round"
     id="path1"
     style="stroke:#242423;stroke-opacity:1" />
  <path
     d="M8 15C8.91212 16.2144 10.3643 17 12 17C12.7111 17 13.3875 16.8515 14 16.5839"
     stroke="#595858"
     stroke-width="1.5"
     stroke-linecap="round"
     stroke-linejoin="round"
     id="path2"
     style="stroke:#242423;stroke-opacity:1" />
  <path
     d="M8.00897 9L8 9"
     stroke="#595858"
     stroke-width="1.5"
     stroke-linecap="round"
     stroke-linejoin="round"
     id="path3"
     style="stroke:#242423;stroke-opacity:1" />
  <path
     d="M22 15L22 15M22 18L22 18M22 21L22 21"
     stroke="#595858"
     stroke-width="1.5"
     stroke-linecap="round"
     stroke-linejoin="round"
     id="path4"
     style="stroke:#242423;stroke-opacity:1" />
  <circle
     cx="16"
     cy="10"
     r="3"
     stroke="#595858"
     stroke-width="1.5"
     stroke-linecap="round"
     stroke-linejoin="round"
     id="circle4"
     style="stroke:#242423;stroke-opacity:1" />
  <path
     d="M22 12C21.7927 11.6041 21.689 11.4062 21.552 11.2328C21.2015 10.7894 20.6784 10.4407 20.0558 10.2354C19.8124 10.1551 19.5416 10.1034 19 10"
     stroke="#595858"
     stroke-width="1.5"
     stroke-linecap="round"
     stroke-linejoin="round"
     id="path5"
     style="stroke:#242423;stroke-opacity:1" />
</svg>
`,Ar=`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<svg
   viewBox="0 0 24 24"
   width="24"
   height="24"
   color="#595858"
   fill="none"
   version="1.1"
   id="svg5"
   sodipodi:docname="nosee.svg"
   inkscape:version="1.4.3 (0d15f75042, 2025-12-25)"
   xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape"
   xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd"
   xmlns="http://www.w3.org/2000/svg"
   xmlns:svg="http://www.w3.org/2000/svg">
  <defs
     id="defs5" />
  <sodipodi:namedview
     id="namedview5"
     pagecolor="#ffffff"
     bordercolor="#000000"
     borderopacity="0.25"
     inkscape:showpageshadow="2"
     inkscape:pageopacity="0.0"
     inkscape:pagecheckerboard="0"
     inkscape:deskcolor="#d1d1d1"
     inkscape:zoom="26.997662"
     inkscape:cx="10.61203"
     inkscape:cy="10.908352"
     inkscape:window-width="1920"
     inkscape:window-height="1080"
     inkscape:window-x="0"
     inkscape:window-y="0"
     inkscape:window-maximized="1"
     inkscape:current-layer="svg5" />
  <path
     d="M19 19.1414C17.1962 20.9097 14.7255 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C14.7974 2 17.3265 3.14864 19.1414 5"
     stroke="#595858"
     stroke-width="1.5"
     stroke-linecap="round"
     stroke-linejoin="round"
     id="path1"
     style="stroke:#242423;stroke-opacity:1" />
  <path
     d="M8 15C8.91212 16.2144 10.3643 17 12 17C12.7111 17 13.3875 16.8515 14 16.5839"
     stroke="#595858"
     stroke-width="1.5"
     stroke-linecap="round"
     stroke-linejoin="round"
     id="path2"
     style="stroke:#242423;stroke-opacity:1" />
  <path
     d="M8.00897 9L8 9"
     stroke="#595858"
     stroke-width="1.5"
     stroke-linecap="round"
     stroke-linejoin="round"
     id="path3"
     style="stroke:#242423;stroke-opacity:1" />
  <path
     d="M22 15L22 15M22 18L22 18M22 21L22 21"
     stroke="#595858"
     stroke-width="1.5"
     stroke-linecap="round"
     stroke-linejoin="round"
     id="path4"
     style="stroke:#242423;stroke-opacity:1" />
  <circle
     cx="16"
     cy="10"
     r="3"
     stroke="#595858"
     stroke-width="1.5"
     stroke-linecap="round"
     stroke-linejoin="round"
     id="circle4"
     style="stroke:#242423;stroke-opacity:1" />
  <path
     d="M22 12C21.7927 11.6041 21.689 11.4062 21.552 11.2328C21.2015 10.7894 20.6784 10.4407 20.0558 10.2354C19.8124 10.1551 19.5416 10.1034 19 10"
     stroke="#595858"
     stroke-width="1.5"
     stroke-linecap="round"
     stroke-linejoin="round"
     id="path5"
     style="stroke:#242423;stroke-opacity:1" />
  <path
     style="fill:none;fill-opacity:1;fill-rule:evenodd;stroke:#242423;stroke-width:1.717;stroke-linecap:round;stroke-linejoin:bevel;stroke-dasharray:none;stroke-opacity:1"
     d="M 1.6692014,22.06846 C 3.877351,20.002974 20.116505,4.4879105 22.227815,2.3166395"
     id="path8"
     sodipodi:nodetypes="cc" />
</svg>
`;var Lr=A("<div><button type=button>");const Je=e=>{const t=()=>e.name,n=G($r),r=G(Ar),[s,o]=R({type:"password",svg:r}),i=()=>o(c=>c.type=="password"?{type:"text",svg:n}:{type:"password",svg:r}),a=()=>e.legend;return(()=>{var c=Lr(),l=c.firstChild;return b(c,p(Ee,{get type(){return s().type},get name(){return t()},get legend(){return a()??"Password"}}),l),X(l,"click",i),b(l,()=>s().svg),C(u=>{var d=yt.PasswordField,h=yt.PswSwitch;return d!==u.e&&x(c,u.e=d),h!==u.t&&x(l,u.t=h),u},{e:void 0,t:void 0}),c})()},Pr="_TextLine_5y4ha_1",Tr={TextLine:Pr};var Mr=A("<span>");const Wt=e=>{const t=()=>e.children,n=()=>e.cls;return(()=>{var r=Mr();return b(r,t),C(()=>x(r,` ${Tr.TextLine} ${fe(n())}`)),r})()},Er="_Actuator_191in_1",zr="_Button_191in_13",kt={Actuator:Er,Button:zr};var Or=A("<button>"),Rr=A("<a>");const ie=e=>{const t=()=>e.children,n=()=>e.link,r=()=>e.class,s=()=>e.call;return n()===void 0?(()=>{var o=Or();return X(o,"click",s()),b(o,t),C(()=>x(o,`${kt.Button} ${fe(r())}`)),o})():(()=>{var o=Rr();return X(o,"click",s()),b(o,t),C(i=>{var a=`${kt.Actuator} ${fe(r())}`,c=n();return a!==i.e&&x(o,i.e=a),c!==i.t&&q(o,"href",i.t=c),i},{e:void 0,t:void 0}),o})()},Fr="_Separator_uerzn_1",xt={Separator:Fr};var Br=A("<span>");const Kt=()=>{const[e,t]=R(!1),n=r=>t(s=>{const o=document.querySelector(`.${xt.Separator}`);if(o==null)return s;const a=o.parentElement.getBoundingClientRect(),c=r.clientX,l=r.clientY;return c>=a.left&&c<=a.right&&l<=a.bottom&&l>=a.top});return document.body.addEventListener("mousemove",n),(()=>{var r=Br();return C(s=>{var o=xt.Separator,i=e();return o!==s.e&&x(r,s.e=o),i!==s.t&&q(r,"active",s.t=i),s},{e:void 0,t:void 0}),r})()},Gr="_WildText_t25g1_1",Ur="_WildContent_t25g1_20",_t={WildText:Gr,WildContent:Ur};var jr=A("<div><span>");const Xt=e=>{const t=()=>e.text,n=()=>e.class;return(()=>{var r=jr(),s=r.firstChild;return b(s,t),C(o=>{var i=`${_t.WildText} ${fe(n())}`,a=_t.WildContent;return i!==o.e&&x(r,o.e=i),a!==o.t&&x(s,o.t=a),o},{e:void 0,t:void 0}),r})()},Nr="_Home_mqets_1",Vr="_Apps_mqets_6",Ir="_App_mqets_6",Dr="_LeftRtt_mqets_47",qr="_RightRtt_mqets_51",Hr="_AppText_mqets_57",Wr="_AppTitle_mqets_63",Kr="_AppDepict_mqets_68",Xr="_Greetings_mqets_72",Z={Home:Nr,Apps:Vr,App:Ir,LeftRtt:Dr,RightRtt:qr,AppText:Hr,AppTitle:Wr,AppDepict:Kr,Greetings:Xr},Yr='<svg xmlns="http://www.w3.org/2000/svg" class="ionicon" viewBox="0 0 512 512"><path d="M473 39.05a24 24 0 00-25.5-5.46L47.47 185h-.08a24 24 0 001 45.16l.41.13 137.3 58.63a16 16 0 0015.54-3.59L422 80a7.07 7.07 0 0110 10L226.66 310.26a16 16 0 00-3.59 15.54l58.65 137.38c.06.2.12.38.19.57 3.2 9.27 11.3 15.81 21.09 16.25h1a24.63 24.63 0 0023-15.46L478.39 64.62A24 24 0 00473 39.05z"/></svg>',Zr='<svg xmlns="http://www.w3.org/2000/svg" class="ionicon" viewBox="0 0 512 512"><path d="M465.94 119.76l-73.7-73.7A47.68 47.68 0 00358.3 32H96a64 64 0 00-64 64v320a64 64 0 0064 64h320a64 64 0 0064-64V153.7a47.68 47.68 0 00-14.06-33.94zM120 112h176a8 8 0 018 8v48a8 8 0 01-8 8H120a8 8 0 01-8-8v-48a8 8 0 018-8zm139.75 319.91a80 80 0 1176.16-76.16 80.06 80.06 0 01-76.16 76.16z"/><circle cx="256" cy="352" r="48"/></svg>',Jr='<svg xmlns="http://www.w3.org/2000/svg" class="ionicon" viewBox="0 0 512 512"><path d="M480 128a64 64 0 00-64-64h-16V48.45c0-8.61-6.62-16-15.23-16.43A16 16 0 00368 48v16H144V48.45c0-8.61-6.62-16-15.23-16.43A16 16 0 00112 48v16H96a64 64 0 00-64 64v12a4 4 0 004 4h440a4 4 0 004-4zM32 416a64 64 0 0064 64h320a64 64 0 0064-64V179a3 3 0 00-3-3H35a3 3 0 00-3 3zm344-208a24 24 0 11-24 24 24 24 0 0124-24zm0 80a24 24 0 11-24 24 24 24 0 0124-24zm-80-80a24 24 0 11-24 24 24 24 0 0124-24zm0 80a24 24 0 11-24 24 24 24 0 0124-24zm0 80a24 24 0 11-24 24 24 24 0 0124-24zm-80-80a24 24 0 11-24 24 24 24 0 0124-24zm0 80a24 24 0 11-24 24 24 24 0 0124-24zm-80-80a24 24 0 11-24 24 24 24 0 0124-24zm0 80a24 24 0 11-24 24 24 24 0 0124-24z"/></svg>',Qr='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M434 461.5l-26.6-69.1c-2.1-5.1-7-8.4-12.4-8.4-4.5 0-8.6 2.2-11.1 5.9s-3 8.4-1.4 12.5l26 69.1c2.1 5.1 7 8.5 12.5 8.5h.5c4.5 0 8.7-2.2 11.2-5.9 2.5-3.8 3-8.5 1.3-12.6zM117.6 384c-5.5 0-10.4 3.3-12.4 8.4l-26.6 69.1c-1.7 4.2-1.2 8.9 1.3 12.6 2.5 3.7 6.7 5.9 11.2 5.9h.5c5.5 0 10.4-3.3 12.5-8.5l26-69.1c1.7-4.1 1.2-8.8-1.4-12.5-2.4-3.7-6.6-5.9-11.1-5.9zM256.6 384h-1.1c-7.4 0-13.4 6-13.4 13.4v36.1c0 7.4 6 14.4 13.4 14.4h1.1c7.4 0 13.4-7 13.4-14.4v-36.1c0-7.4-6-13.4-13.4-13.4z"/><g><path d="M424 128H88c-4.4 0-8 3.6-8 8v176c0 4.4 3.6 8 8 8h336c4.4 0 8-3.6 8-8V136c0-4.4-3.6-8-8-8z"/><path d="M448 80H63.9C46.3 80 32 94.3 32 111.9v224.2c0 17.6 14.3 31.9 31.9 31.9H448c17.7 0 32-14.3 32-32V112c0-17.7-14.3-32-32-32zm4 244c0 8.8-7.2 16-16 16H76c-8.8 0-16-7.2-16-16V124c0-8.8 7.2-16 16-16h364.6c3 0 5.9 1.2 8 3.3 2.1 2.1 3.3 5 3.3 8V324z"/></g><path d="M256 32c-13.4-.2-24.4 12.2-24.4 25.6h48.7c.1-13.4-10.9-25.8-24.3-25.6z"/></svg>';var Yt=A("<div>"),es=A("<div><span><span></span><span>");const ts=()=>(()=>{var e=Yt();return b(e,p(rs,{})),C(()=>x(e,Z.Home)),e})();async function ns(){return[{name:"calendar",icon:G(Jr),accent:"#00a86b",depict:"manage your schedule and affairs [not yet avalable]"},{name:"drive",icon:G(Zr),accent:"#a18369",depict:"store, share and backup your files [pre-alpha release]"},{name:"comms",icon:G(Yr),accent:"#1475dc",depict:"talk with people in text, audio or video format [not yet avalable]"},{name:"vms",icon:G(Qr),accent:"#ce1f57",depict:"manage your virtual machines [not yet avalable]"}]}const rs=()=>{const{user:e,re_user:t}=_e(),[n]=At(ns),[r,s]=R(0);return p(xe,{get children(){return[p(W,{get when(){return ct(e())},get children(){var o=Yt();return b(o,p(kn,{get each(){return n()},children:i=>p(ss,{get icon(){return i.icon},get depict(){return i.depict},get name(){return i.name},get accent(){return i.accent},get rtt(){return r()},re_rtt:s})})),C(()=>x(o,Z.Apps)),o}}),p(W,{when:!0,get children(){return p(Xt,{get class(){return Z.Greetings},text:"welcome"})}})]}})},ss=e=>{const t=()=>e.rtt,n=()=>e.re_rtt,r=()=>e.name,s=()=>e.depict,o=()=>e.icon,i=()=>e.accent,a=()=>n()(c=>Math.abs(1-c));return(()=>{var c=es(),l=c.firstChild,u=l.firstChild,d=u.nextSibling;return X(c,"mouseenter",a),b(c,o,l),b(u,r),b(d,s),C(h=>{var w=`${Z.App} ${t()==0?Z.RightRtt:Z.LeftRtt}`,v=i(),f=Z.AppText,m=Z.AppTitle,k=Z.AppDepict;return w!==h.e&&x(c,h.e=w),v!==h.t&&ee(c,"--accent",h.t=v),f!==h.a&&x(l,h.a=f),m!==h.o&&x(u,h.o=m),k!==h.i&&x(d,h.i=k),h},{e:void 0,t:void 0,a:void 0,o:void 0,i:void 0}),c})()},os="_Auth_w4vpc_1",is={Auth:os},as="_Form_x67kl_1",cs="_FormTitle_x67kl_27",ls="_SubmitButton_x67kl_31",us="_Note_x67kl_49",ds="_SwapButton_x67kl_58",K={Form:as,FormTitle:cs,SubmitButton:ls,Note:us,SwapButton:ds};var bt=A("<form>");const Zt=e=>{const t=()=>e.action,n=()=>e.method,r=()=>e.children,s=()=>e.target;return s()===void 0?(()=>{var o=bt();return b(o,r),C(i=>{var a=K.Form,c=t(),l=n();return a!==i.e&&x(o,i.e=a),c!==i.t&&q(o,"action",i.t=c),l!==i.a&&q(o,"method",i.a=l),i},{e:void 0,t:void 0,a:void 0}),o})():(()=>{var o=bt();return b(o,r),C(i=>{var a=K.Form,c=t(),l=n(),u=s();return a!==i.e&&x(o,i.e=a),c!==i.t&&q(o,"action",i.t=c),l!==i.a&&q(o,"method",i.a=l),u!==i.o&&q(o,"target",i.o=u),i},{e:void 0,t:void 0,a:void 0,o:void 0}),o})()};var fs=A("<input type=hidden name=method_override value=put>"),hs=A("<h4>Register"),ps=A("<span>Already have an account?"),gs=A("<span>Login.");const ms=e=>{const t=()=>e.swap_call;return p(Zt,{action:"/auth/user",method:"post",target:"_blank",get children(){return[fs(),(()=>{var n=hs();return C(()=>x(n,K.FormTitle)),n})(),p(Ee,{type:"text",name:"user_name",legend:"User Name"}),p(Je,{name:"user_pswd"}),p(Je,{legend:"Verify Password"}),p(Dt,{name:"auto_login",legend:" auto login"}),p(ie,{get class(){return K.SubmitButton},children:"Register"}),p(Kt,{}),p(Wt,{get children(){return[(()=>{var n=ps();return C(()=>x(n,K.Note)),n})(),p(ie,{get class(){return K.SwapButton},get call(){return t()},get children(){return gs()}})]}})]}})};var ws=A("<h4>Login"),vs=A("<span>New to hanabi?"),ys=A("<span>Register.");const ks=e=>{const t=()=>e.swap_call;return p(Zt,{action:"/auth/user",method:"post",target:"_blank",get children(){return[(()=>{var n=ws();return C(()=>x(n,K.FormTitle)),n})(),p(Ee,{type:"text",name:"user_name",legend:"User Name"}),p(Ee,{type:"email",name:"user_email",legend:"Email"}),p(Je,{name:"user_pswd"}),p(Dt,{name:"persist_session",legend:" persist session"}),p(ie,{type:"submit",get class(){return K.SubmitButton},children:"Login"}),p(Kt,{}),p(Wt,{get children(){return[(()=>{var n=vs();return C(()=>x(n,K.Note)),n})(),p(ie,{get class(){return K.SwapButton},get call(){return t()},get children(){return ys()}})]}})]}})};var xs=A("<div>");const[_s,bs]=R(0),Cs=he({form:_s,set_form:bs});function Jt(){return pe(Cs)}const Ss=()=>{const{user:e,re_user:t}=_e(),{form:n,set_form:r}=Jt(),s=()=>r(o=>Math.abs(1-o));return(()=>{var o=xs();return b(o,p(xe,{get children(){return[p(W,{get when(){return en(e())},get children(){return p(xe,{get children(){return[p(W,{get when(){return n()==0},get children(){return p(ks,{swap_call:s})}}),p(W,{get when(){return n()==1},get children(){return p(ms,{swap_call:s})}})]}})}}),p(W,{get when(){return ct(e())},get children(){return p(Xt,{text:"You are already logged-in."})}})]}})),C(()=>x(o,is.Auth)),o})()},$s="_Initialize_jfktd_1",As="_Negotiate_jfktd_21",Qe={Initialize:$s,Negotiate:As};var Ls=A("<div>"),Ps=A("<span>negotiating an identity... ok"),Ts=A("<span>negotiating an identity...");const Ms=()=>(()=>{var e=Ls();return b(e,p(Ht,{}),null),b(e,p(Es,{}),null),C(()=>x(e,Qe.Initialize)),e})(),Es=()=>{const{user:e,re_user:t}=_e(),[n]=At(e(),zs);return an(()=>{et(e())&&n()!==void 0&&t(n())}),p(_n,{get fallback(){return(()=>{var r=Ts();return C(()=>x(r,Qe.Negotiate)),r})()},get children(){var r=Ps();return C(()=>x(r,Qe.Negotiate)),r}})};async function zs(e){return await new Promise(t=>setTimeout(t,500)),{name:e.name??""}}const Os="_Menu_1d35f_1",Rs="_Entry_1d35f_10",Fs="_Path_1d35f_19",re={Menu:Os,Entry:Rs,Path:Fs},Bs="_UserMenu_2j7hj_1",Gs="_Entry_2j7hj_11",ve={UserMenu:Bs,Entry:Gs},Us='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M220.8 406.1l4.8 14.8c.4 1.2 1.9 1.8 3 1.1l6.8-4.2c2.5-1.6 2.5-5.2 0-6.8l-11.5-7.2c-1.7-1-3.6.5-3.1 2.3zM286.6 421l4.9-15.2c.6-1.8-1.4-3.3-3-2.3l-11.9 7.4a4.02 4.02 0 0 0 0 6.8l7 4.4c1.2.7 2.6.1 3-1.1zM188.6 242.2c-3.9 3.5-9.6 6.4-15.7 8.5-1 .4-1.6 1.5-1.2 2.5l9.3 28.9 3.8 11.8c.4 1.2 1.9 1.8 3 1.1l7-4.3 36.6-22.5c3-1.9 2.3-6.5-1.2-7.3-14.3-3.3-26.5-9.8-36.2-18.5-1.6-1.4-3.9-1.5-5.4-.2zM192.6 310.8l-2 1.2 14.6 45.3c.4 1.2 1.9 1.8 3 1.1l27.2-16.9c2.5-1.6 2.5-5.2 0-6.8l-38.5-23.9c-1.4-.8-3-.8-4.3 0zM258.1 348.9c-1.3-.8-2.9-.8-4.2 0L212 374.5l-.1.1c-1 .8-1 2.4 0 3.2l.7.5 41.3 25.3c1.3.8 2.9.8 4.2 0l41.7-25.5.4-.3c1-.8 1-2.2 0-3l-42.1-25.9zM296.7 296.6l-38.5-23.9c-1.3-.8-2.9-.8-4.2 0l-38.5 23.9a4.02 4.02 0 0 0 0 6.8l38.5 23.9c1.3.8 2.9.8 4.2 0l38.5-23.9c2.5-1.5 2.5-5.2 0-6.8zM318.1 242.3c-9.7 8.7-22 15.1-36.2 18.5-3.5.8-4.2 5.4-1.2 7.3l36.6 22.5 7.4 4.6c1.1.7 2.6.2 3-1.1l4-12.4 9.8-30.3c-6.9-2.1-13.6-5.3-18-9.2-1.6-1.3-3.9-1.2-5.4.1zM232.4 442l1.6 5s7.5 19 22 19c15 0 22.2-19 22.2-19l1.6-4.8c.6-1.7-.1-3.7-1.7-4.6l-20-12.4c-1.3-.8-2.9-.8-4.2 0l-19.8 12.3c-1.6.8-2.3 2.7-1.7 4.5zM276.7 341.5l27.5 17.1c1.1.7 2.6.2 3-1.1l14.2-43.8c.3-.9-.1-1.8-.8-2.3l-1-.6c-1.3-.8-2.9-.8-4.2 0l-38.5 23.9c-2.8 1.6-2.8 5.3-.2 6.8z"/><path d="M376.1 168.2c-6.2 5.4-13.2 8.7-18 10.5-1.8.7-3.5-1.4-2.3-3l4-5.7c6.1-8.7 8.5-19.4 6.8-29.8C357.9 86.8 311.7 46 256 46c-55.7 0-101.9 41.2-110.6 94.7-1.7 10.5.8 21.2 6.9 29.8l4 5.6c1.2 1.6-.5 3.8-2.4 3-5.4-2.1-13.5-6.2-20.1-12.8-1.4-1.4-3.6-1.5-5.2-.4-10.2 7.3-16.8 19.1-16.8 32.5 0 22.1 17.9 40 40 40 11.3 0 28-4.7 36.6-12.3 1.5-1.3 3.8-1.3 5.3.1 15.2 13.4 36.6 20.2 62.1 20.2s47-6.8 62.1-20.2c1.5-1.3 3.8-1.4 5.3-.1 8.5 7.6 25.3 12.3 36.6 12.3 22.1 0 40-18 40-40.1 0-11.9-5.2-22.6-13.5-30-2.7-2.6-7.2-2.7-10.2-.1z"/></svg>',Qt=`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<svg
   viewBox="0 0 512 512"
   version="1.1"
   id="svg2"
   sodipodi:docname="logout2.svg"
   inkscape:version="1.4.2 (ebf0e940d0, 2025-05-08)"
   xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape"
   xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd"
   xmlns="http://www.w3.org/2000/svg"
   xmlns:svg="http://www.w3.org/2000/svg">
  <defs
     id="defs2" />
  <sodipodi:namedview
     id="namedview2"
     pagecolor="#ffffff"
     bordercolor="#000000"
     borderopacity="0.25"
     inkscape:showpageshadow="2"
     inkscape:pageopacity="0.0"
     inkscape:pagecheckerboard="0"
     inkscape:deskcolor="#d1d1d1"
     inkscape:zoom="1.5769689"
     inkscape:cx="232.09082"
     inkscape:cy="253.33411"
     inkscape:window-width="1920"
     inkscape:window-height="1080"
     inkscape:window-x="0"
     inkscape:window-y="0"
     inkscape:window-maximized="1"
     inkscape:current-layer="svg2" />
  <path
     d="m 192,277.4 c 44.71272,44.71272 189.7,0 189.7,0 0,0 -43.72964,23.88628 -43.6,44.7 0.0878,14.09472 15.805,29.9 29.9,29.9 45.25483,0 96,-50.74517 96,-96 0,-45.25483 -50.74701,-95.59134 -96,-96 -14.35602,-0.12964 -30.87036,15.54398 -31,29.9 -0.19028,21.07092 44.7,44.7 44.7,44.7 0,0 -144.98728,-44.71272 -189.7,0 -10.08806,10.08806 -10.08806,32.71194 0,42.8 z"
     id="path1"
     sodipodi:nodetypes="scssssscss" />
  <path
     d="M 255.7,421.3 C 211.6,421.3 170.2,404.1 139,372.9 107.8,341.7 90.7,300.2 90.7,256 c 0,-44.1 17.2,-85.7 48.3,-116.9 31.2,-31.2 72.6,-48.4 116.7,-48.4 44,0 75.28342,56.40726 116.5,48.2 14.00853,-2.78945 29.07932,-14.48771 30.3,-30.3 C 403.72068,92.787712 386.28552,79.255584 362.75157,66.376162 339.21762,53.49674 298.6,48 255.7,48 249.00248,48 242.37785,48.319226 235.84048,48.943288 130.61568,58.988123 48,148.00921 48,256 c 0,114.7 93.2,208 207.7,208 42.9,0 84.42371,-5.33637 119,-26.71983 12.42856,-7.68635 27.12084,-20.85271 27.7,-33.98017 0.57916,-13.12746 -16.2377,-27.41975 -30.2,-30.2 -41.21658,-8.20726 -72.5,48.2 -116.5,48.2 z m 192.304,-164.453 -0.849,-0.848 0.849,-0.849 0.848,0.849 z"
     id="path2"
     sodipodi:nodetypes="ssscsascssssazasccccc" />
</svg>
`,js='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M480 176H272v.1h-32v-.1H32v48h11l5 21.5C64 313 88.5 336 144 336s96-17.4 96-90.5V224s1.5-16 16-16 16 16 16 16v21.8c0 73 42.1 90.2 97 90.2s79-25 95-90.2l5-21.8h11v-48z"/></svg>';var Ns=A("<div>"),Vs=A("<div><span>");const Is=()=>{const e=G(Us),t=G(Qt),n=G(js);return(()=>{var r=Ns();return b(r,p(He,{get class(){return ve.Entry},text:"profile",icon:n}),null),b(r,p(He,{get class(){return ve.Entry},text:"configs",icon:e}),null),b(r,p(He,{get class(){return ve.Entry},text:"logout",icon:t}),null),C(()=>x(r,ve.UserMenu)),r})()},He=e=>{const t=()=>e.icon,n=()=>e.text,r=()=>e.class;return(()=>{var s=Vs(),o=s.firstChild;return b(s,t,o),b(o,n),C(i=>{var a=fe(r()),c=ve.ItemTitle;return a!==i.e&&x(s,i.e=a),c!==i.t&&x(o,i.t=c),i},{e:void 0,t:void 0}),s})()},Ds=`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<svg
   viewBox="0 0 512 512"
   version="1.1"
   id="svg2"
   sodipodi:docname="login2.svg"
   inkscape:version="1.4.2 (ebf0e940d0, 2025-05-08)"
   xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape"
   xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd"
   xmlns="http://www.w3.org/2000/svg"
   xmlns:svg="http://www.w3.org/2000/svg">
  <defs
     id="defs2" />
  <sodipodi:namedview
     id="namedview2"
     pagecolor="#ffffff"
     bordercolor="#000000"
     borderopacity="0.25"
     inkscape:showpageshadow="2"
     inkscape:pageopacity="0.0"
     inkscape:pagecheckerboard="0"
     inkscape:deskcolor="#d1d1d1"
     inkscape:zoom="1.5177548"
     inkscape:cx="279.68944"
     inkscape:cy="263.21774"
     inkscape:window-width="1920"
     inkscape:window-height="1080"
     inkscape:window-x="0"
     inkscape:window-y="0"
     inkscape:window-maximized="1"
     inkscape:current-layer="svg2" />
  <path
     d="m 256,48 c -42.9,0 -84.2,13 -119.2,37.5 -34.2,24 -90.651518,58.53735 -75.1,96.1 5.639837,13.62229 28.257843,12.37671 43.9,5.4 15.64216,-6.97671 19.4,-33.9 33.5,-48 31.2,-31.2 72.7,-48.4 116.9,-48.4 44.2,0 85.7,17.2 116.9,48.4 31.2,31.2 48.4,72.7 48.4,116.9 0,44.1 -17.2,85.7 -48.4,116.9 -31.2,31.2 -72.7,48.4 -116.9,48.4 -44.1,0 -85.6,-17.2 -116.9,-48.4 -14,-14 -17.85276,-40.92762 -33.5,-47.9 -15.647241,-6.97238 -38.345627,-8.25208 -44,5.4 -15.55669,37.56051 40.9,72.1 75.1,96.1 C 171.8,451.1 213,464 256,464 370.7,464 464,370.7 464,256 464,141.3 370.7,48 256,48 Z"
     id="path1"
     sodipodi:nodetypes="scacssssssccacsss" />
  <path
     d="m 48,277.4 c 44.712719,44.71272 189.7,0 189.7,0 0,0 -43.72964,23.88628 -43.6,44.7 0.0878,14.09472 15.805,29.9 29.9,29.9 45.25483,0 96,-96 96,-96 0,0 -50.74701,-95.59134 -96,-96 -14.35602,-0.12964 -30.87036,15.54398 -31,29.9 -0.19028,21.07092 44.7,44.7 44.7,44.7 0,0 -144.987281,-44.71272 -189.7,0 -10.088057,10.08806 -10.088057,32.71194 0,42.8 z"
     id="path2"
     sodipodi:nodetypes="scsscsscss" />
</svg>
`,qs=`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<svg
   viewBox="0 0 512 512"
   version="1.1"
   id="svg2"
   sodipodi:docname="register2.svg"
   inkscape:version="1.4.2 (ebf0e940d0, 2025-05-08)"
   xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape"
   xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd"
   xmlns="http://www.w3.org/2000/svg"
   xmlns:svg="http://www.w3.org/2000/svg">
  <defs
     id="defs2" />
  <sodipodi:namedview
     id="namedview2"
     pagecolor="#ffffff"
     bordercolor="#000000"
     borderopacity="0.25"
     inkscape:showpageshadow="2"
     inkscape:pageopacity="0.0"
     inkscape:pagecheckerboard="0"
     inkscape:deskcolor="#d1d1d1"
     inkscape:zoom="0.78203884"
     inkscape:cx="330.54624"
     inkscape:cy="349.72688"
     inkscape:window-width="1920"
     inkscape:window-height="1080"
     inkscape:window-x="0"
     inkscape:window-y="0"
     inkscape:window-maximized="1"
     inkscape:current-layer="svg2" />
  <path
     d="m 256,48 c -42.9,0 -84.2,13 -119.2,37.5 -34.2,24 -90.651518,58.53735 -75.1,96.1 5.639837,13.62229 28.257843,12.37671 43.9,5.4 15.64216,-6.97671 19.4,-33.9 33.5,-48 31.2,-31.2 72.7,-48.4 116.9,-48.4 44.2,0 85.7,17.2 116.9,48.4 31.2,31.2 48.4,72.7 48.4,116.9 0,44.1 -17.2,85.7 -48.4,116.9 -31.2,31.2 -72.7,48.4 -116.9,48.4 -44.1,0 -85.6,-17.2 -116.9,-48.4 -14,-14 -15.70286,-39.96963 -33.5,-47.9 -13.497343,-6.01439 -38.345627,-8.25208 -44,5.4 -15.55669,37.56051 40.9,72.1 75.1,96.1 C 171.8,451.1 213,464 256,464 370.7,464 464,370.7 464,256 464,141.3 370.7,48 256,48 Z"
     id="path1"
     sodipodi:nodetypes="scacsssssscaacsss" />
  <path
     d="m 234.01084,120 c -44.71272,44.71272 0,189.7 0,189.7 0,0 -23.88628,-43.72964 -44.7,-43.6 -14.09472,0.0878 -29.9,15.805 -29.9,29.9 0,45.25483 96,96 96,96 0,0 95.59134,-50.74701 96,-96 0.12964,-14.35602 -15.54398,-30.87036 -29.9,-31 -21.07092,-0.19028 -44.7,44.7 -44.7,44.7 0,0 44.71272,-144.98728 0,-189.7 -10.08806,-10.08806 -32.71194,-10.08806 -42.8,0 z"
     id="path2"
     sodipodi:nodetypes="scsscsscss" />
</svg>
`,Hs='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 48C141.1 48 48 141.1 48 256s93.1 208 208 208 208-93.1 208-208S370.9 48 256 48zM76 256c0-48.1 18.7-93.3 52.7-127.3S207.9 76 256 76c48.1 0 93.3 18.7 127.3 52.7 32.2 32.2 50.7 74.5 52.6 119.7-8.8-10.3-24.2-24-43.8-24-27.5 0-41.7 25.7-51 42.7-1.4 2.5-2.7 4.9-3.9 7-11.4 19.2-27.3 30-42.5 28.9-13.4-.9-24.8-11.2-32.2-28.8-9.2-22.1-29.1-45.8-52.9-49.2-11.3-1.6-28.1.8-44.7 21.4-3.2 4-6.9 9.4-11.1 15.6-10.4 15.5-26.2 38.8-38.1 40.8-17.3 2.8-30.9-7.5-36.4-12.3-2.2-11.2-3.3-22.8-3.3-34.5z"/></svg>',Ws='<svg xmlns="http://www.w3.org/2000/svg" class="ionicon" viewBox="0 0 512 512"><path d="M328.85 156.79a26.69 26.69 0 1018.88 7.81 26.6 26.6 0 00-18.88-7.81z"/><path d="M477.44 50.06a.29.29 0 010-.09 20.4 20.4 0 00-15.13-15.3c-29.8-7.27-76.68.48-128.63 21.28-52.36 21-101.42 52-134.58 85.22A320.7 320.7 0 00169.55 175c-22.33-1-42 2.18-58.57 9.41-57.74 25.41-74.23 90.44-78.62 117.14a25 25 0 0027.19 29h.13l64.32-7.02c.08.82.17 1.57.24 2.26a34.36 34.36 0 009.9 20.72l31.39 31.41a34.27 34.27 0 0020.71 9.91l2.15.23-7 64.24v.13A25 25 0 00206 480a25.25 25.25 0 004.15-.34C237 475.34 302 459.05 327.34 401c7.17-16.46 10.34-36.05 9.45-58.34a314.78 314.78 0 0033.95-29.55c33.43-33.26 64.53-81.92 85.31-133.52 20.69-51.36 28.48-98.59 21.39-129.53zM370.38 224.94a58.77 58.77 0 110-83.07 58.3 58.3 0 010 83.07z"/><path d="M161.93 386.44a16 16 0 00-11 2.67c-6.39 4.37-12.81 8.69-19.29 12.9-13.11 8.52-28.79-6.44-21-20l12.15-21a16 16 0 00-15.16-24.91A61.25 61.25 0 0072 353.56c-3.66 3.67-14.79 14.81-20.78 57.26A357.94 357.94 0 0048 447.59 16 16 0 0064 464h.4a359.87 359.87 0 0036.8-3.2c42.47-6 53.61-17.14 57.27-20.8a60.49 60.49 0 0017.39-35.74 16 16 0 00-13.93-17.82z"/></svg>',Ks='<svg xmlns="http://www.w3.org/2000/svg" class="ionicon" viewBox="0 0 512 512"><path d="M261.56 101.28a8 8 0 00-11.06 0L66.4 277.15a8 8 0 00-2.47 5.79L63.9 448a32 32 0 0032 32H192a16 16 0 0016-16V328a8 8 0 018-8h80a8 8 0 018 8v136a16 16 0 0016 16h96.06a32 32 0 0032-32V282.94a8 8 0 00-2.47-5.79z"/><path d="M490.91 244.15l-74.8-71.56V64a16 16 0 00-16-16h-48a16 16 0 00-16 16v32l-57.92-55.38C272.77 35.14 264.71 32 256 32c-8.68 0-16.72 3.14-22.14 8.63l-212.7 203.5c-6.22 6-7 15.87-1.34 22.37A16 16 0 0043 267.56L250.5 69.28a8 8 0 0111.06 0l207.52 198.28a16 16 0 0022.59-.44c6.14-6.36 5.63-16.86-.76-22.97z"/></svg>';var Be=A("<div>"),at=A("<span>");const Xs=()=>{const{user:e,re_user:t}=_e(),{form:n,set_form:r}=Jt(),s=G(Ds),o=G(Qt),i=G(qs),a=G(Hs),c=G(Ws),l=G(Ks),u=()=>{const v=document.body.style;v.getPropertyValue("filter")===""?v.setProperty("filter","invert() contrast(.89)"):v.removeProperty("filter")},d=()=>t(v=>({name:""})),h=()=>r(1),w=()=>r(0);return(()=>{var v=Be();return b(v,p(Ct,{call:u,icon:a,text:"colors"}),null),b(v,p(Ct,{call:()=>console.log("placeholder"),icon:c,text:"settings"}),null),b(v,p(xe,{get children(){return[p(W,{get when(){return en(e())},get children(){return[p(We,{link:"/auth",call:w,icon:s,text:"login"}),p(We,{link:"/auth",call:h,icon:i,text:"register"})]}}),p(W,{get when(){return ct(e())},get children(){return[p(We,{link:"/",call:d,icon:o,text:"logout"}),p(Ys,{get class(){return re.UserMenu},get content(){return p(Is,{})},icon:l,get text(){return e().name}})]}})]}}),null),C(()=>x(v,re.Menu)),v})()},We=e=>{const t=()=>e.icon,n=()=>e.text,r=()=>e.link,s=()=>e.call;return(()=>{var o=Be();return b(o,p(ie,{get link(){return r()},get call(){return s()},get class(){return re.Path},get children(){return[p(te,{get when(){return t()!==void 0},get children(){return t()}}),(()=>{var i=at();return b(i,n),i})()]}})),C(()=>x(o,re.Entry)),o})()},Ct=e=>{const t=()=>e.icon,n=()=>e.text,r=()=>e.call;return(()=>{var s=Be();return b(s,p(ie,{get call(){return r()},get class(){return re.Path},get children(){return[p(te,{get when(){return t()!==void 0},get children(){return t()}}),(()=>{var o=at();return b(o,n),o})()]}})),C(()=>x(s,re.Entry)),s})()},Ys=e=>{const t=()=>e.icon,n=()=>e.text,r=()=>e.call,s=()=>e.class,o=()=>e.content,[i,a]=R(!1),c=()=>a(l=>!l);return(()=>{var l=Be();return X(l,"click",c),b(l,p(ie,{get call(){return r()},get class(){return re.Path},get children(){return[Rt(()=>t()),(()=>{var u=at();return b(u,n),u})(),p(te,{get when(){return i()},get children(){return o()}})]}})),C(()=>x(l,`${re.Entry} ${fe(s())}`)),l})()},Zs="_Page_e1i3l_1",Js={Page:Zs};var Qs=A("<div>");const eo=e=>{const t=()=>e.children;return(()=>{var n=Qs();return b(n,p(mr,{}),null),b(n,p(Xs,{}),null),b(n,t,null),C(()=>x(n,Js.Page)),n})()},to="_App_wcrpu_1",no={App:to};var ro=A("<div>");function so(e,t){if(e===null)return;const n=e.parentElement;if(n!==null)return n.className.includes(t)}function oo(e,t){for(;;){const n=so(e,t);if(n===void 0)return!1;if(n)return!0;e=e.parentElement}}function io(e,t){const n=t.target;if(n.className.constructor.name!=="String")return e;let s=!1;return n.className.includes("Auth")&&(s=!0),s||(s=oo(n,"Auth")),s?{name:e.name==""?"scarecrow":""}:e}const ao=()=>{const{user:e,re_user:t}=_e(),n=r=>t(s=>io(s,r));return(()=>{var r=ro();return X(r,"click",n),b(r,p(xe,{get children(){return[p(W,{get when(){return et(e())},get children(){return p(Ms,{})}}),p(W,{get when(){return!et(e())},get children(){return p(eo,{get children(){return p(Jn,{get children(){return[p(De,{path:"/",component:ts}),p(De,{path:"/auth",component:Ss}),p(De,{path:"*",component:Ht})]}})}})}})]}})),C(()=>x(r,no.App)),r})()};function en(e){return e.name===""}function et(e){return e.name===void 0}function ct(e){return e.name===void 0?!1:e.name.constructor.name==="String"?e.name.length!==0:!0}Cn(()=>p(ao,{}),document.body);
