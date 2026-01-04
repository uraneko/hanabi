(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const s of o)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function n(o){const s={};return o.integrity&&(s.integrity=o.integrity),o.referrerPolicy&&(s.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?s.credentials="include":o.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(o){if(o.ep)return;o.ep=!0;const s=n(o);fetch(o.href,s)}})();const Nt=!1,It=(e,t)=>e===t,Ge=Symbol("solid-proxy"),Dt=typeof Proxy=="function",Vt=Symbol("solid-track"),ye={equals:It};let ht=kt;const X=1,ke=2,pt={owned:null,cleanups:null,context:null,owner:null},Re={};var b=null;let Be=null,Ht=null,S=null,z=null,K=null,Ae=0;function de(e,t){const n=S,r=b,o=e.length===0,s=t===void 0?r:t,i=o?pt:{owned:null,cleanups:null,context:s?s.context:null,owner:s},a=o?e:()=>e(()=>U(()=>fe(i)));b=i,S=null;try{return H(a,!0)}finally{S=n,b=r}}function M(e,t){t=t?Object.assign({},ye,t):ye;const n={value:e,observers:null,observerSlots:null,comparator:t.equals||void 0},r=o=>(typeof o=="function"&&(o=o(n.value)),yt(n,o));return[vt.bind(n),r]}function qt(e,t,n){const r=Pe(e,t,!0,X);ce(r)}function x(e,t,n){const r=Pe(e,t,!1,X);ce(r)}function gt(e,t,n){ht=Qt;const r=Pe(e,t,!1,X);r.user=!0,K?K.push(r):ce(r)}function E(e,t,n){n=n?Object.assign({},ye,n):ye;const r=Pe(e,t,!0,0);return r.observers=null,r.observerSlots=null,r.comparator=n.equals||void 0,ce(r),vt.bind(r)}function Kt(e){return e&&typeof e=="object"&&"then"in e}function mt(e,t,n){let r,o,s;typeof t=="function"?(r=e,o=t,s={}):(r=!0,o=e,s=t||{});let i=null,a=Re,c=!1,l="initialValue"in s,u=typeof r=="function"&&E(r);const d=new Set,[f,m]=(s.storage||M)(s.initialValue),[y,h]=M(void 0),[g,v]=M(void 0,{equals:!1}),[w,L]=M(l?"ready":"unresolved");function A(T,R,G,O){return i===T&&(i=null,O!==void 0&&(l=!0),(T===a||R===a)&&s.onHydrated&&queueMicrotask(()=>s.onHydrated(O,{value:R})),a=Re,B(R,G)),R}function B(T,R){H(()=>{R===void 0&&m(()=>T),L(R!==void 0?"errored":l?"ready":"unresolved"),h(R);for(const G of d.keys())G.decrement();d.clear()},!1)}function F(){const T=Yt,R=f(),G=y();if(G!==void 0&&!i)throw G;return S&&S.user,R}function q(T=!0){if(T!==!1&&c)return;c=!1;const R=u?u():r;if(R==null||R===!1){A(i,U(f));return}let G;const O=a!==Re?a:U(()=>{try{return o(R,{value:f(),refetching:T})}catch(Q){G=Q}});if(G!==void 0){A(i,void 0,we(G),R);return}else if(!Kt(O))return A(i,O,void 0,R),O;return i=O,"v"in O?(O.s===1?A(i,O.v,void 0,R):A(i,void 0,we(O.v),R),O):(c=!0,queueMicrotask(()=>c=!1),H(()=>{L(l?"refreshing":"pending"),v()},!1),O.then(Q=>A(O,Q,void 0,R),Q=>A(O,void 0,we(Q),R)))}Object.defineProperties(F,{state:{get:()=>w()},error:{get:()=>y()},loading:{get(){const T=w();return T==="pending"||T==="refreshing"}},latest:{get(){if(!l)return F();const T=y();if(T&&!i)throw T;return f()}}});let J=b;return u?qt(()=>(J=b,q(!1))):q(!1),[F,{refetch:T=>Xe(J,()=>q(T)),mutate:m}]}function Wt(e){return H(e,!1)}function U(e){if(S===null)return e();const t=S;S=null;try{return e()}finally{S=t}}function Ke(e,t,n){const r=Array.isArray(e);let o,s=n&&n.defer;return i=>{let a;if(r){a=Array(e.length);for(let l=0;l<e.length;l++)a[l]=e[l]()}else a=e();if(s)return s=!1,i;const c=U(()=>t(a,o,i));return o=a,c}}function We(e){return b===null||(b.cleanups===null?b.cleanups=[e]:b.cleanups.push(e)),e}function wt(){return b}function Xe(e,t){const n=b,r=S;b=e,S=null;try{return H(t,!0)}catch(o){Ze(o)}finally{b=n,S=r}}function Xt(e){const t=S,n=b;return Promise.resolve().then(()=>{S=t,b=n;let r;return H(e,!1),S=b=null,r?r.done:void 0})}const[jo,Go]=M(!1);function Se(e,t){const n=Symbol("context");return{id:n,Provider:en(n),defaultValue:e}}function Ye(e){let t;return b&&b.context&&(t=b.context[e.id])!==void 0?t:e.defaultValue}function $e(e){const t=E(e),n=E(()=>Ne(t()));return n.toArray=()=>{const r=n();return Array.isArray(r)?r:r!=null?[r]:[]},n}let Yt;function vt(){if(this.sources&&this.state)if(this.state===X)ce(this);else{const e=z;z=null,H(()=>_e(this),!1),z=e}if(S){const e=this.observers?this.observers.length:0;S.sources?(S.sources.push(this),S.sourceSlots.push(e)):(S.sources=[this],S.sourceSlots=[e]),this.observers?(this.observers.push(S),this.observerSlots.push(S.sources.length-1)):(this.observers=[S],this.observerSlots=[S.sources.length-1])}return this.value}function yt(e,t,n){let r=e.value;return(!e.comparator||!e.comparator(r,t))&&(e.value=t,e.observers&&e.observers.length&&H(()=>{for(let o=0;o<e.observers.length;o+=1){const s=e.observers[o],i=Be&&Be.running;i&&Be.disposed.has(s),(i?!s.tState:!s.state)&&(s.pure?z.push(s):K.push(s),s.observers&&xt(s)),i||(s.state=X)}if(z.length>1e6)throw z=[],new Error},!1)),t}function ce(e){if(!e.fn)return;fe(e);const t=Ae;Zt(e,e.value,t)}function Zt(e,t,n){let r;const o=b,s=S;S=b=e;try{r=e.fn(t)}catch(i){return e.pure&&(e.state=X,e.owned&&e.owned.forEach(fe),e.owned=null),e.updatedAt=n+1,Ze(i)}finally{S=s,b=o}(!e.updatedAt||e.updatedAt<=n)&&(e.updatedAt!=null&&"observers"in e?yt(e,r):e.value=r,e.updatedAt=n)}function Pe(e,t,n,r=X,o){const s={fn:e,state:r,updatedAt:null,owned:null,sources:null,sourceSlots:null,cleanups:null,value:t,owner:b,context:b?b.context:null,pure:n};return b===null||b!==pt&&(b.owned?b.owned.push(s):b.owned=[s]),s}function xe(e){if(e.state===0)return;if(e.state===ke)return _e(e);if(e.suspense&&U(e.suspense.inFallback))return e.suspense.effects.push(e);const t=[e];for(;(e=e.owner)&&(!e.updatedAt||e.updatedAt<Ae);)e.state&&t.push(e);for(let n=t.length-1;n>=0;n--)if(e=t[n],e.state===X)ce(e);else if(e.state===ke){const r=z;z=null,H(()=>_e(e,t[0]),!1),z=r}}function H(e,t){if(z)return e();let n=!1;t||(z=[]),K?n=!0:K=[],Ae++;try{const r=e();return Jt(n),r}catch(r){n||(K=null),z=null,Ze(r)}}function Jt(e){if(z&&(kt(z),z=null),e)return;const t=K;K=null,t.length&&H(()=>ht(t),!1)}function kt(e){for(let t=0;t<e.length;t++)xe(e[t])}function Qt(e){let t,n=0;for(t=0;t<e.length;t++){const r=e[t];r.user?e[n++]=r:xe(r)}for(t=0;t<n;t++)xe(e[t])}function _e(e,t){e.state=0;for(let n=0;n<e.sources.length;n+=1){const r=e.sources[n];if(r.sources){const o=r.state;o===X?r!==t&&(!r.updatedAt||r.updatedAt<Ae)&&xe(r):o===ke&&_e(r,t)}}}function xt(e){for(let t=0;t<e.observers.length;t+=1){const n=e.observers[t];n.state||(n.state=ke,n.pure?z.push(n):K.push(n),n.observers&&xt(n))}}function fe(e){let t;if(e.sources)for(;e.sources.length;){const n=e.sources.pop(),r=e.sourceSlots.pop(),o=n.observers;if(o&&o.length){const s=o.pop(),i=n.observerSlots.pop();r<o.length&&(s.sourceSlots[i]=r,o[r]=s,n.observerSlots[r]=i)}}if(e.tOwned){for(t=e.tOwned.length-1;t>=0;t--)fe(e.tOwned[t]);delete e.tOwned}if(e.owned){for(t=e.owned.length-1;t>=0;t--)fe(e.owned[t]);e.owned=null}if(e.cleanups){for(t=e.cleanups.length-1;t>=0;t--)e.cleanups[t]();e.cleanups=null}e.state=0}function we(e){return e instanceof Error?e:new Error(typeof e=="string"?e:"Unknown error",{cause:e})}function Ze(e,t=b){throw we(e)}function Ne(e){if(typeof e=="function"&&!e.length)return Ne(e());if(Array.isArray(e)){const t=[];for(let n=0;n<e.length;n++){const r=Ne(e[n]);Array.isArray(r)?t.push.apply(t,r):t.push(r)}return t}return e}function en(e,t){return function(r){let o;return x(()=>o=U(()=>(b.context={...b.context,[e]:r.value},$e(()=>r.children))),void 0),o}}const tn=Symbol("fallback");function nt(e){for(let t=0;t<e.length;t++)e[t]()}function nn(e,t,n={}){let r=[],o=[],s=[],i=0,a=t.length>1?[]:null;return We(()=>nt(s)),()=>{let c=e()||[],l=c.length,u,d;return c[Vt],U(()=>{let m,y,h,g,v,w,L,A,B;if(l===0)i!==0&&(nt(s),s=[],r=[],o=[],i=0,a&&(a=[])),n.fallback&&(r=[tn],o[0]=de(F=>(s[0]=F,n.fallback())),i=1);else if(i===0){for(o=new Array(l),d=0;d<l;d++)r[d]=c[d],o[d]=de(f);i=l}else{for(h=new Array(l),g=new Array(l),a&&(v=new Array(l)),w=0,L=Math.min(i,l);w<L&&r[w]===c[w];w++);for(L=i-1,A=l-1;L>=w&&A>=w&&r[L]===c[A];L--,A--)h[A]=o[L],g[A]=s[L],a&&(v[A]=a[L]);for(m=new Map,y=new Array(A+1),d=A;d>=w;d--)B=c[d],u=m.get(B),y[d]=u===void 0?-1:u,m.set(B,d);for(u=w;u<=L;u++)B=r[u],d=m.get(B),d!==void 0&&d!==-1?(h[d]=o[u],g[d]=s[u],a&&(v[d]=a[u]),d=y[d],m.set(B,d)):s[u]();for(d=w;d<l;d++)d in h?(o[d]=h[d],s[d]=g[d],a&&(a[d]=v[d],a[d](d))):o[d]=de(f);o=o.slice(0,i=l),r=c.slice(0)}return o});function f(m){if(s[d]=m,a){const[y,h]=M(d);return a[d]=h,t(c[d],y)}return t(c[d])}}}function p(e,t){return U(()=>e(t||{}))}function me(){return!0}const rn={get(e,t,n){return t===Ge?n:e.get(t)},has(e,t){return t===Ge?!0:e.has(t)},set:me,deleteProperty:me,getOwnPropertyDescriptor(e,t){return{configurable:!0,enumerable:!0,get(){return e.get(t)},set:me,deleteProperty:me}},ownKeys(e){return e.keys()}};function Me(e){return(e=typeof e=="function"?e():e)?e:{}}function on(){for(let e=0,t=this.length;e<t;++e){const n=this[e]();if(n!==void 0)return n}}function _t(...e){let t=!1;for(let i=0;i<e.length;i++){const a=e[i];t=t||!!a&&Ge in a,e[i]=typeof a=="function"?(t=!0,E(a)):a}if(Dt&&t)return new Proxy({get(i){for(let a=e.length-1;a>=0;a--){const c=Me(e[a])[i];if(c!==void 0)return c}},has(i){for(let a=e.length-1;a>=0;a--)if(i in Me(e[a]))return!0;return!1},keys(){const i=[];for(let a=0;a<e.length;a++)i.push(...Object.keys(Me(e[a])));return[...new Set(i)]}},rn);const n={},r=Object.create(null);for(let i=e.length-1;i>=0;i--){const a=e[i];if(!a)continue;const c=Object.getOwnPropertyNames(a);for(let l=c.length-1;l>=0;l--){const u=c[l];if(u==="__proto__"||u==="constructor")continue;const d=Object.getOwnPropertyDescriptor(a,u);if(!r[u])r[u]=d.get?{enumerable:!0,configurable:!0,get:on.bind(n[u]=[d.get.bind(a)])}:d.value!==void 0?d:void 0;else{const f=n[u];f&&(d.get?f.push(d.get.bind(a)):d.value!==void 0&&f.push(()=>d.value))}}}const o={},s=Object.keys(r);for(let i=s.length-1;i>=0;i--){const a=s[i],c=r[a];c&&c.get?Object.defineProperty(o,a,c):o[a]=c?c.value:void 0}return o}const bt=e=>`Stale read from <${e}>.`;function sn(e){const t="fallback"in e&&{fallback:()=>e.fallback};return E(nn(()=>e.each,e.children,t||void 0))}function te(e){const t=e.keyed,n=E(()=>e.when,void 0,void 0),r=t?n:E(n,void 0,{equals:(o,s)=>!o==!s});return E(()=>{const o=r();if(o){const s=e.children;return typeof s=="function"&&s.length>0?U(()=>s(t?o:()=>{if(!U(r))throw bt("Show");return n()})):s}return e.fallback},void 0,void 0)}function he(e){const t=$e(()=>e.children),n=E(()=>{const r=t(),o=Array.isArray(r)?r:[r];let s=()=>{};for(let i=0;i<o.length;i++){const a=i,c=o[i],l=s,u=E(()=>l()?void 0:c.when,void 0,void 0),d=c.keyed?u:E(u,void 0,{equals:(f,m)=>!f==!m});s=()=>l()||(d()?[a,u,c]:void 0)}return s});return E(()=>{const r=n()();if(!r)return e.fallback;const[o,s,i]=r,a=i.children;return typeof a=="function"&&a.length>0?U(()=>a(i.keyed?s():()=>{if(U(n)()?.[0]!==o)throw bt("Match");return s()})):a},void 0,void 0)}function D(e){return e}const an=e=>E(()=>e());function cn(e,t,n){let r=n.length,o=t.length,s=r,i=0,a=0,c=t[o-1].nextSibling,l=null;for(;i<o||a<s;){if(t[i]===n[a]){i++,a++;continue}for(;t[o-1]===n[s-1];)o--,s--;if(o===i){const u=s<r?a?n[a-1].nextSibling:n[s-a]:c;for(;a<s;)e.insertBefore(n[a++],u)}else if(s===a)for(;i<o;)(!l||!l.has(t[i]))&&t[i].remove(),i++;else if(t[i]===n[s-1]&&n[a]===t[o-1]){const u=t[--o].nextSibling;e.insertBefore(n[a++],t[i++].nextSibling),e.insertBefore(n[--s],u),t[o]=n[s]}else{if(!l){l=new Map;let d=a;for(;d<s;)l.set(n[d],d++)}const u=l.get(t[i]);if(u!=null)if(a<u&&u<s){let d=i,f=1,m;for(;++d<o&&d<s&&!((m=l.get(t[d]))==null||m!==u+f);)f++;if(f>u-a){const y=t[i];for(;a<u;)e.insertBefore(n[a++],y)}else e.replaceChild(n[a++],t[i++])}else i++;else t[i++].remove()}}}const rt="_$DX_DELEGATE";function ln(e,t,n,r={}){let o;return de(s=>{o=s,t===document?e():_(t,e(),t.firstChild?null:void 0,n)},r.owner),()=>{o(),t.textContent=""}}function C(e,t,n,r){let o;const s=()=>{const a=document.createElement("template");return a.innerHTML=e,a.content.firstChild},i=()=>(o||(o=s())).cloneNode(!0);return i.cloneNode=i,i}function dn(e,t=window.document){const n=t[rt]||(t[rt]=new Set);for(let r=0,o=e.length;r<o;r++){const s=e[r];n.has(s)||(n.add(s),t.addEventListener(s,un))}}function N(e,t,n){n==null?e.removeAttribute(t):e.setAttribute(t,n)}function k(e,t){t==null?e.removeAttribute("class"):e.className=t}function W(e,t,n,r){if(Array.isArray(n)){const o=n[0];e.addEventListener(t,n[0]=s=>o.call(e,n[1],s))}else e.addEventListener(t,n,typeof n!="function"&&n)}function Y(e,t,n){n!=null?e.style.setProperty(t,n):e.style.removeProperty(t)}function _(e,t,n,r){if(n!==void 0&&!r&&(r=[]),typeof t!="function")return be(e,t,r,n);x(o=>be(e,t(),o,n),r)}function un(e){let t=e.target;const n=`$$${e.type}`,r=e.target,o=e.currentTarget,s=c=>Object.defineProperty(e,"target",{configurable:!0,value:c}),i=()=>{const c=t[n];if(c&&!t.disabled){const l=t[`${n}Data`];if(l!==void 0?c.call(t,l,e):c.call(t,e),e.cancelBubble)return}return t.host&&typeof t.host!="string"&&!t.host._$host&&t.contains(e.target)&&s(t.host),!0},a=()=>{for(;i()&&(t=t._$host||t.parentNode||t.host););};if(Object.defineProperty(e,"currentTarget",{configurable:!0,get(){return t||document}}),e.composedPath){const c=e.composedPath();s(c[0]);for(let l=0;l<c.length-2&&(t=c[l],!!i());l++){if(t._$host){t=t._$host,a();break}if(t.parentNode===o)break}}else a();s(r)}function be(e,t,n,r,o){for(;typeof n=="function";)n=n();if(t===n)return n;const s=typeof t,i=r!==void 0;if(e=i&&n[0]&&n[0].parentNode||e,s==="string"||s==="number"){if(s==="number"&&(t=t.toString(),t===n))return n;if(i){let a=n[0];a&&a.nodeType===3?a.data!==t&&(a.data=t):a=document.createTextNode(t),n=se(e,n,r,a)}else n!==""&&typeof n=="string"?n=e.firstChild.data=t:n=e.textContent=t}else if(t==null||s==="boolean")n=se(e,n,r);else{if(s==="function")return x(()=>{let a=t();for(;typeof a=="function";)a=a();n=be(e,a,n,r)}),()=>n;if(Array.isArray(t)){const a=[],c=n&&Array.isArray(n);if(Ie(a,t,n,o))return x(()=>n=be(e,a,n,r,!0)),()=>n;if(a.length===0){if(n=se(e,n,r),i)return n}else c?n.length===0?ot(e,a,r):cn(e,n,a):(n&&se(e),ot(e,a));n=a}else if(t.nodeType){if(Array.isArray(n)){if(i)return n=se(e,n,r,t);se(e,n,null,t)}else n==null||n===""||!e.firstChild?e.appendChild(t):e.replaceChild(t,e.firstChild);n=t}}return n}function Ie(e,t,n,r){let o=!1;for(let s=0,i=t.length;s<i;s++){let a=t[s],c=n&&n[e.length],l;if(!(a==null||a===!0||a===!1))if((l=typeof a)=="object"&&a.nodeType)e.push(a);else if(Array.isArray(a))o=Ie(e,a,c)||o;else if(l==="function")if(r){for(;typeof a=="function";)a=a();o=Ie(e,Array.isArray(a)?a:[a],Array.isArray(c)?c:[c])||o}else e.push(a),o=!0;else{const u=String(a);c&&c.nodeType===3&&c.data===u?e.push(c):e.push(document.createTextNode(u))}}return o}function ot(e,t,n=null){for(let r=0,o=t.length;r<o;r++)e.insertBefore(t[r],n)}function se(e,t,n,r){if(n===void 0)return e.textContent="";const o=r||document.createTextNode("");if(t.length){let s=!1;for(let i=t.length-1;i>=0;i--){const a=t[i];if(o!==a){const c=a.parentNode===e;!s&&!i?c?e.replaceChild(o,a):e.insertBefore(o,n):c&&a.remove()}else s=!0}}else e.insertBefore(o,n);return[o]}const fn=!1;function Ct(){let e=new Set;function t(o){return e.add(o),()=>e.delete(o)}let n=!1;function r(o,s){if(n)return!(n=!1);const i={to:o,options:s,defaultPrevented:!1,preventDefault:()=>i.defaultPrevented=!0};for(const a of e)a.listener({...i,from:a.location,retry:c=>{c&&(n=!0),a.navigate(o,{...s,resolve:!1})}});return!i.defaultPrevented}return{subscribe:t,confirm:r}}let De;function Je(){(!window.history.state||window.history.state._depth==null)&&window.history.replaceState({...window.history.state,_depth:window.history.length-1},""),De=window.history.state._depth}Je();function hn(e){return{...e,_depth:window.history.state&&window.history.state._depth}}function pn(e,t){let n=!1;return()=>{const r=De;Je();const o=r==null?null:De-r;if(n){n=!1;return}o&&t(o)?(n=!0,window.history.go(-o)):e()}}const gn=/^(?:[a-z0-9]+:)?\/\//i,mn=/^\/+|(\/)\/+$/g,At="http://sr";function ue(e,t=!1){const n=e.replace(mn,"$1");return n?t||/^[?#]/.test(n)?n:"/"+n:""}function ve(e,t,n){if(gn.test(t))return;const r=ue(e),o=n&&ue(n);let s="";return!o||t.startsWith("/")?s=r:o.toLowerCase().indexOf(r.toLowerCase())!==0?s=r+o:s=o,(s||"/")+ue(t,!s)}function wn(e,t){return ue(e).replace(/\/*(\*.*)?$/g,"")+ue(t)}function St(e){const t={};return e.searchParams.forEach((n,r)=>{r in t?Array.isArray(t[r])?t[r].push(n):t[r]=[t[r],n]:t[r]=n}),t}function vn(e,t,n){const[r,o]=e.split("/*",2),s=r.split("/").filter(Boolean),i=s.length;return a=>{const c=a.split("/").filter(Boolean),l=c.length-i;if(l<0||l>0&&o===void 0&&!t)return null;const u={path:i?"":"/",params:{}},d=f=>n===void 0?void 0:n[f];for(let f=0;f<i;f++){const m=s[f],y=m[0]===":",h=y?c[f]:c[f].toLowerCase(),g=y?m.slice(1):m.toLowerCase();if(y&&Oe(h,d(g)))u.params[g]=h;else if(y||!Oe(h,g))return null;u.path+=`/${h}`}if(o){const f=l?c.slice(-l).join("/"):"";if(Oe(f,d(o)))u.params[o]=f;else return null}return u}}function Oe(e,t){const n=r=>r===e;return t===void 0?!0:typeof t=="string"?n(t):typeof t=="function"?t(e):Array.isArray(t)?t.some(n):t instanceof RegExp?t.test(e):!1}function yn(e){const[t,n]=e.pattern.split("/*",2),r=t.split("/").filter(Boolean);return r.reduce((o,s)=>o+(s.startsWith(":")?2:3),r.length-(n===void 0?0:1))}function $t(e){const t=new Map,n=wt();return new Proxy({},{get(r,o){return t.has(o)||Xe(n,()=>t.set(o,E(()=>e()[o]))),t.get(o)()},getOwnPropertyDescriptor(){return{enumerable:!0,configurable:!0}},ownKeys(){return Reflect.ownKeys(e())},has(r,o){return o in e()}})}function Pt(e){let t=/(\/?\:[^\/]+)\?/.exec(e);if(!t)return[e];let n=e.slice(0,t.index),r=e.slice(t.index+t[0].length);const o=[n,n+=t[1]];for(;t=/^(\/\:[^\/]+)\?/.exec(r);)o.push(n+=t[1]),r=r.slice(t[0].length);return Pt(r).reduce((s,i)=>[...s,...o.map(a=>a+i)],[])}const kn=100,xn=Se(),Lt=Se();function _n(e,t=""){const{component:n,preload:r,load:o,children:s,info:i}=e,a=!s||Array.isArray(s)&&!s.length,c={key:e,component:n,preload:r||o,info:i};return Tt(e.path).reduce((l,u)=>{for(const d of Pt(u)){const f=wn(t,d);let m=a?f:f.split("/*",1)[0];m=m.split("/").map(y=>y.startsWith(":")||y.startsWith("*")?y:encodeURIComponent(y)).join("/"),l.push({...c,originalPath:u,pattern:m,matcher:vn(m,!a,e.matchFilters)})}return l},[])}function bn(e,t=0){return{routes:e,score:yn(e[e.length-1])*1e4-t,matcher(n){const r=[];for(let o=e.length-1;o>=0;o--){const s=e[o],i=s.matcher(n);if(!i)return null;r.unshift({...i,route:s})}return r}}}function Tt(e){return Array.isArray(e)?e:[e]}function Et(e,t="",n=[],r=[]){const o=Tt(e);for(let s=0,i=o.length;s<i;s++){const a=o[s];if(a&&typeof a=="object"){a.hasOwnProperty("path")||(a.path="");const c=_n(a,t);for(const l of c){n.push(l);const u=Array.isArray(a.children)&&a.children.length===0;if(a.children&&!u)Et(a.children,l.pattern,n,r);else{const d=bn([...n],r.length);r.push(d)}n.pop()}}}return n.length?r:r.sort((s,i)=>i.score-s.score)}function ze(e,t){for(let n=0,r=e.length;n<r;n++){const o=e[n].matcher(t);if(o)return o}return[]}function Cn(e,t,n){const r=new URL(At),o=E(u=>{const d=e();try{return new URL(d,r)}catch{return console.error(`Invalid path ${d}`),u}},r,{equals:(u,d)=>u.href===d.href}),s=E(()=>o().pathname),i=E(()=>o().search,!0),a=E(()=>o().hash),c=()=>"",l=Ke(i,()=>St(o()));return{get pathname(){return s()},get search(){return i()},get hash(){return a()},get state(){return t()},get key(){return c()},query:n?n(l):$t(l)}}let ee;function An(){return ee}function Sn(e,t,n,r={}){const{signal:[o,s],utils:i={}}=e,a=i.parsePath||($=>$),c=i.renderPath||($=>$),l=i.beforeLeave||Ct(),u=ve("",r.base||"");if(u===void 0)throw new Error(`${u} is not a valid base path`);u&&!o().value&&s({value:u,replace:!0,scroll:!1});const[d,f]=M(!1);let m;const y=($,P)=>{P.value===h()&&P.state===v()||(m===void 0&&f(!0),ee=$,m=P,Xt(()=>{m===P&&(g(m.value),w(m.state),B[1](j=>j.filter(re=>re.pending)))}).finally(()=>{m===P&&Wt(()=>{ee=void 0,$==="navigate"&&O(m),f(!1),m=void 0})}))},[h,g]=M(o().value),[v,w]=M(o().state),L=Cn(h,v,i.queryWrapper),A=[],B=M([]),F=E(()=>typeof r.transformUrl=="function"?ze(t(),r.transformUrl(L.pathname)):ze(t(),L.pathname)),q=()=>{const $=F(),P={};for(let j=0;j<$.length;j++)Object.assign(P,$[j].params);return P},J=i.paramsWrapper?i.paramsWrapper(q,t):$t(q),T={pattern:u,path:()=>u,outlet:()=>null,resolvePath($){return ve(u,$)}};return x(Ke(o,$=>y("native",$),{defer:!0})),{base:T,location:L,params:J,isRouting:d,renderPath:c,parsePath:a,navigatorFactory:G,matches:F,beforeLeave:l,preloadRoute:Q,singleFlight:r.singleFlight===void 0?!0:r.singleFlight,submissions:B};function R($,P,j){U(()=>{if(typeof P=="number"){P&&(i.go?i.go(P):console.warn("Router integration does not support relative routing"));return}const re=!P||P[0]==="?",{replace:Te,resolve:oe,scroll:Ee,state:le}={replace:!1,resolve:!re,scroll:!0,...j},ge=oe?$.resolvePath(P):ve(re&&L.pathname||"",P);if(ge===void 0)throw new Error(`Path '${P}' is not a routable path`);if(A.length>=kn)throw new Error("Too many redirects");const tt=h();(ge!==tt||le!==v())&&(fn||l.confirm(ge,j)&&(A.push({value:tt,replace:Te,scroll:Ee,state:v()}),y("navigate",{value:ge,state:le})))})}function G($){return $=$||Ye(Lt)||T,(P,j)=>R($,P,j)}function O($){const P=A[0];P&&(s({...$,replace:P.replace,scroll:P.scroll}),A.length=0)}function Q($,P){const j=ze(t(),$.pathname),re=ee;ee="preload";for(let Te in j){const{route:oe,params:Ee}=j[Te];oe.component&&oe.component.preload&&oe.component.preload();const{preload:le}=oe;P&&le&&Xe(n(),()=>le({params:Ee,location:{pathname:$.pathname,search:$.search,hash:$.hash,query:St($),state:null,key:""},intent:"preload"}))}ee=re}}function $n(e,t,n,r){const{base:o,location:s,params:i}=e,{pattern:a,component:c,preload:l}=r().route,u=E(()=>r().path);c&&c.preload&&c.preload();const d=l?l({params:i,location:s,intent:ee||"initial"}):void 0;return{parent:t,pattern:a,path:u,outlet:()=>c?p(c,{params:i,location:s,data:d,get children(){return n()}}):n(),resolvePath(m){return ve(o.path(),m,u())}}}const Pn=e=>t=>{const{base:n}=t,r=$e(()=>t.children),o=E(()=>Et(r(),t.base||""));let s;const i=Sn(e,o,()=>s,{base:n,singleFlight:t.singleFlight,transformUrl:t.transformUrl});return e.create&&e.create(i),p(xn.Provider,{value:i,get children(){return p(Ln,{routerState:i,get root(){return t.root},get preload(){return t.rootPreload||t.rootLoad},get children(){return[an(()=>(s=wt())&&null),p(Tn,{routerState:i,get branches(){return o()}})]}})}})};function Ln(e){const t=e.routerState.location,n=e.routerState.params,r=E(()=>e.preload&&U(()=>{e.preload({params:n,location:t,intent:An()||"initial"})}));return p(te,{get when(){return e.root},keyed:!0,get fallback(){return e.children},children:o=>p(o,{params:n,location:t,get data(){return r()},get children(){return e.children}})})}function Tn(e){const t=[];let n;const r=E(Ke(e.routerState.matches,(o,s,i)=>{let a=s&&o.length===s.length;const c=[];for(let l=0,u=o.length;l<u;l++){const d=s&&s[l],f=o[l];i&&d&&f.route.key===d.route.key?c[l]=i[l]:(a=!1,t[l]&&t[l](),de(m=>{t[l]=m,c[l]=$n(e.routerState,c[l-1]||e.routerState.base,st(()=>r()[l+1]),()=>{const y=e.routerState.matches();return y[l]??y[0]})}))}return t.splice(o.length).forEach(l=>l()),i&&a?i:(n=c[0],c)}));return st(()=>r()&&n)()}const st=e=>()=>p(te,{get when(){return e()},keyed:!0,children:t=>p(Lt.Provider,{value:t,get children(){return t.outlet()}})}),Fe=e=>{const t=$e(()=>e.children);return _t(e,{get children(){return t()}})};function En([e,t],n,r){return[e,r?o=>t(r(o)):t]}function Rn(e){let t=!1;const n=o=>typeof o=="string"?{value:o}:o,r=En(M(n(e.get()),{equals:(o,s)=>o.value===s.value&&o.state===s.state}),void 0,o=>(!t&&e.set(o),o));return e.init&&We(e.init((o=e.get())=>{t=!0,r[1](n(o)),t=!1})),Pn({signal:r,create:e.create,utils:e.utils})}function Bn(e,t,n){return e.addEventListener(t,n),()=>e.removeEventListener(t,n)}function Mn(e,t){const n=e&&document.getElementById(e);n?n.scrollIntoView():t&&window.scrollTo(0,0)}const On=new Map;function zn(e=!0,t=!1,n="/_server",r){return o=>{const s=o.base.path(),i=o.navigatorFactory(o.base);let a,c;function l(h){return h.namespaceURI==="http://www.w3.org/2000/svg"}function u(h){if(h.defaultPrevented||h.button!==0||h.metaKey||h.altKey||h.ctrlKey||h.shiftKey)return;const g=h.composedPath().find(F=>F instanceof Node&&F.nodeName.toUpperCase()==="A");if(!g||t&&!g.hasAttribute("link"))return;const v=l(g),w=v?g.href.baseVal:g.href;if((v?g.target.baseVal:g.target)||!w&&!g.hasAttribute("state"))return;const A=(g.getAttribute("rel")||"").split(/\s+/);if(g.hasAttribute("download")||A&&A.includes("external"))return;const B=v?new URL(w,document.baseURI):new URL(w);if(!(B.origin!==window.location.origin||s&&B.pathname&&!B.pathname.toLowerCase().startsWith(s.toLowerCase())))return[g,B]}function d(h){const g=u(h);if(!g)return;const[v,w]=g,L=o.parsePath(w.pathname+w.search+w.hash),A=v.getAttribute("state");h.preventDefault(),i(L,{resolve:!1,replace:v.hasAttribute("replace"),scroll:!v.hasAttribute("noscroll"),state:A?JSON.parse(A):void 0})}function f(h){const g=u(h);if(!g)return;const[v,w]=g;r&&(w.pathname=r(w.pathname)),o.preloadRoute(w,v.getAttribute("preload")!=="false")}function m(h){clearTimeout(a);const g=u(h);if(!g)return c=null;const[v,w]=g;c!==v&&(r&&(w.pathname=r(w.pathname)),a=setTimeout(()=>{o.preloadRoute(w,v.getAttribute("preload")!=="false"),c=v},20))}function y(h){if(h.defaultPrevented)return;let g=h.submitter&&h.submitter.hasAttribute("formaction")?h.submitter.getAttribute("formaction"):h.target.getAttribute("action");if(!g)return;if(!g.startsWith("https://action/")){const w=new URL(g,At);if(g=o.parsePath(w.pathname+w.search),!g.startsWith(n))return}if(h.target.method.toUpperCase()!=="POST")throw new Error("Only POST forms are supported for Actions");const v=On.get(g);if(v){h.preventDefault();const w=new FormData(h.target,h.submitter);v.call({r:o,f:h.target},h.target.enctype==="multipart/form-data"?w:new URLSearchParams(w))}}dn(["click","submit"]),document.addEventListener("click",d),e&&(document.addEventListener("mousemove",m,{passive:!0}),document.addEventListener("focusin",f,{passive:!0}),document.addEventListener("touchstart",f,{passive:!0})),document.addEventListener("submit",y),We(()=>{document.removeEventListener("click",d),e&&(document.removeEventListener("mousemove",m),document.removeEventListener("focusin",f),document.removeEventListener("touchstart",f)),document.removeEventListener("submit",y)})}}function Fn(e){const t=()=>{const r=window.location.pathname.replace(/^\/+/,"/")+window.location.search,o=window.history.state&&window.history.state._depth&&Object.keys(window.history.state).length===1?void 0:window.history.state;return{value:r+window.location.hash,state:o}},n=Ct();return Rn({get:t,set({value:r,replace:o,scroll:s,state:i}){o?window.history.replaceState(hn(i),"",r):window.history.pushState(i,"",r),Mn(decodeURIComponent(window.location.hash.slice(1)),s),Je()},init:r=>Bn(window,"popstate",pn(r,o=>{if(o)return!n.confirm(o);{const s=t();return!n.confirm(s.value,{state:s.state})}})),create:zn(e.preload,e.explicitLinks,e.actionBase,e.transformUrl),utils:{go:r=>window.history.go(r),beforeLeave:n}})(e)}const Un="_Home_547n4_1",jn="_Apps_547n4_6",Gn="_App_547n4_6",Nn="_LeftRtt_547n4_47",In="_RightRtt_547n4_51",Dn="_AppText_547n4_57",Vn="_AppTitle_547n4_63",Hn="_AppDepict_547n4_68",Z={Home:Un,Apps:jn,App:Gn,LeftRtt:Nn,RightRtt:In,AppText:Dn,AppTitle:Vn,AppDepict:Hn},I=e=>new DOMParser().parseFromString(e,"image/svg+xml").querySelector("svg");function ne(e){return e!==void 0}function Ve(e){return e===void 0?"":e.constructor.name=="String"?e:e.join(" ")}const qn='<svg xmlns="http://www.w3.org/2000/svg" class="ionicon" viewBox="0 0 512 512"><path d="M473 39.05a24 24 0 00-25.5-5.46L47.47 185h-.08a24 24 0 001 45.16l.41.13 137.3 58.63a16 16 0 0015.54-3.59L422 80a7.07 7.07 0 0110 10L226.66 310.26a16 16 0 00-3.59 15.54l58.65 137.38c.06.2.12.38.19.57 3.2 9.27 11.3 15.81 21.09 16.25h1a24.63 24.63 0 0023-15.46L478.39 64.62A24 24 0 00473 39.05z"/></svg>',Kn='<svg xmlns="http://www.w3.org/2000/svg" class="ionicon" viewBox="0 0 512 512"><path d="M465.94 119.76l-73.7-73.7A47.68 47.68 0 00358.3 32H96a64 64 0 00-64 64v320a64 64 0 0064 64h320a64 64 0 0064-64V153.7a47.68 47.68 0 00-14.06-33.94zM120 112h176a8 8 0 018 8v48a8 8 0 01-8 8H120a8 8 0 01-8-8v-48a8 8 0 018-8zm139.75 319.91a80 80 0 1176.16-76.16 80.06 80.06 0 01-76.16 76.16z"/><circle cx="256" cy="352" r="48"/></svg>',Wn='<svg xmlns="http://www.w3.org/2000/svg" class="ionicon" viewBox="0 0 512 512"><path d="M480 128a64 64 0 00-64-64h-16V48.45c0-8.61-6.62-16-15.23-16.43A16 16 0 00368 48v16H144V48.45c0-8.61-6.62-16-15.23-16.43A16 16 0 00112 48v16H96a64 64 0 00-64 64v12a4 4 0 004 4h440a4 4 0 004-4zM32 416a64 64 0 0064 64h320a64 64 0 0064-64V179a3 3 0 00-3-3H35a3 3 0 00-3 3zm344-208a24 24 0 11-24 24 24 24 0 0124-24zm0 80a24 24 0 11-24 24 24 24 0 0124-24zm-80-80a24 24 0 11-24 24 24 24 0 0124-24zm0 80a24 24 0 11-24 24 24 24 0 0124-24zm0 80a24 24 0 11-24 24 24 24 0 0124-24zm-80-80a24 24 0 11-24 24 24 24 0 0124-24zm0 80a24 24 0 11-24 24 24 24 0 0124-24zm-80-80a24 24 0 11-24 24 24 24 0 0124-24zm0 80a24 24 0 11-24 24 24 24 0 0124-24z"/></svg>',Xn='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M434 461.5l-26.6-69.1c-2.1-5.1-7-8.4-12.4-8.4-4.5 0-8.6 2.2-11.1 5.9s-3 8.4-1.4 12.5l26 69.1c2.1 5.1 7 8.5 12.5 8.5h.5c4.5 0 8.7-2.2 11.2-5.9 2.5-3.8 3-8.5 1.3-12.6zM117.6 384c-5.5 0-10.4 3.3-12.4 8.4l-26.6 69.1c-1.7 4.2-1.2 8.9 1.3 12.6 2.5 3.7 6.7 5.9 11.2 5.9h.5c5.5 0 10.4-3.3 12.5-8.5l26-69.1c1.7-4.1 1.2-8.8-1.4-12.5-2.4-3.7-6.6-5.9-11.1-5.9zM256.6 384h-1.1c-7.4 0-13.4 6-13.4 13.4v36.1c0 7.4 6 14.4 13.4 14.4h1.1c7.4 0 13.4-7 13.4-14.4v-36.1c0-7.4-6-13.4-13.4-13.4z"/><g><path d="M424 128H88c-4.4 0-8 3.6-8 8v176c0 4.4 3.6 8 8 8h336c4.4 0 8-3.6 8-8V136c0-4.4-3.6-8-8-8z"/><path d="M448 80H63.9C46.3 80 32 94.3 32 111.9v224.2c0 17.6 14.3 31.9 31.9 31.9H448c17.7 0 32-14.3 32-32V112c0-17.7-14.3-32-32-32zm4 244c0 8.8-7.2 16-16 16H76c-8.8 0-16-7.2-16-16V124c0-8.8 7.2-16 16-16h364.6c3 0 5.9 1.2 8 3.3 2.1 2.1 3.3 5 3.3 8V324z"/></g><path d="M256 32c-13.4-.2-24.4 12.2-24.4 25.6h48.7c.1-13.4-10.9-25.8-24.3-25.6z"/></svg>';var Rt=C("<div>"),Yn=C("<div><span><span></span><span>");const Zn=()=>(()=>{var e=Rt();return _(e,p(Qn,{})),x(()=>k(e,Z.Home)),e})();async function Jn(){return[{name:"calendar",icon:I(Wn),accent:"#00a86b",depict:"manage your schedule and affairs [not yet avalable]"},{name:"drive",icon:I(Kn),accent:"#a18369",depict:"store, share and backup your files [pre-alpha release]"},{name:"comms",icon:I(qn),accent:"#1475dc",depict:"talk with people in text, audio or video format [not yet avalable]"},{name:"vms",icon:I(Xn),accent:"#ce1f57",depict:"manage your virtual machines [not yet avalable]"}]}const Qn=()=>{const[e]=mt(Jn),[t,n]=M(0);return(()=>{var r=Rt();return _(r,p(sn,{get each(){return e()},children:o=>p(er,{get icon(){return o.icon},get depict(){return o.depict},get name(){return o.name},get accent(){return o.accent},get rtt(){return t()},re_rtt:n})})),x(()=>k(r,Z.Apps)),r})()},er=e=>{const t=()=>e.rtt,n=()=>e.re_rtt,r=()=>e.name,o=()=>e.depict,s=()=>e.icon,i=()=>e.accent,a=()=>n()(c=>Math.abs(1-c));return(()=>{var c=Yn(),l=c.firstChild,u=l.firstChild,d=u.nextSibling;return W(c,"mouseenter",a),_(c,s,l),_(u,r),_(d,o),x(f=>{var m=`${Z.App} ${t()==0?Z.RightRtt:Z.LeftRtt}`,y=i(),h=Z.AppText,g=Z.AppTitle,v=Z.AppDepict;return m!==f.e&&k(c,f.e=m),y!==f.t&&Y(c,"--accent",f.t=y),h!==f.a&&k(l,f.a=h),g!==f.o&&k(u,f.o=g),v!==f.i&&k(d,f.i=v),f},{e:void 0,t:void 0,a:void 0,o:void 0,i:void 0}),c})()},tr="_Auth_574ex_1",nr="_TurnBack_574ex_21",rr="_TurnBackText_574ex_40",He={Auth:tr,TurnBack:nr,TurnBackText:rr},[or,sr]=M({name:void 0}),ir=Se({user:or,re_user:sr});function Le(){return Ye(ir)}const ar="_CheckBox_16c0a_1",cr="_Box_16c0a_17",lr="_TickMark_16c0a_37",dr="_Content_16c0a_38",ur="_Postman_16c0a_54",fr="_Text_16c0a_71",ie={CheckBox:ar,Box:cr,TickMark:lr,Content:dr,Postman:ur,Text:fr};var hr=C("<input type=hidden>"),pr=C("<span>"),gr=C("<legend>"),mr=C("<div><div style=background:transparent><div>");const wr={width:.6,height:.6,state:!1,tick:"",accent:"#485d6c"},Bt=e=>{const t=_t(wr,e),n=()=>t.state,r=()=>t.accent,o=()=>t.tick,s=()=>t.width,i=()=>t.height,a=()=>t.legend,c=()=>t.name,[l,u]=M(n()),d=()=>u(f=>!l());return(()=>{var f=mr(),m=f.firstChild,y=m.firstChild;return W(f,"click",d),_(f,p(te,{get when(){return c()!==void 0},get children(){var h=hr();return x(g=>{var v=ie.Postman,w=c();return v!==g.e&&k(h,g.e=v),w!==g.t&&N(h,"name",g.t=w),g},{e:void 0,t:void 0}),x(()=>h.value=l()),h}}),m),_(y,p(te,{get when(){return o()!==""},get children(){var h=pr();return _(h,o),x(()=>k(h,ie.TickMark)),h}})),_(f,p(te,{get when(){return a()!==void 0},get children(){var h=gr();return _(h,a),x(g=>{var v=ie.Text,w=r();return v!==g.e&&k(h,g.e=v),w!==g.t&&Y(h,"color",g.t=w),g},{e:void 0,t:void 0}),h}}),null),x(h=>{var g=ie.CheckBox,v=ie.Box,w=`0.11em solid ${r()}`,L=`${s()+.19}em`,A=`${i()+.19}em`,B=l(),F=ie.Content,q=r(),J=`${s()}em`,T=`${i()}em`;return g!==h.e&&k(f,h.e=g),v!==h.t&&k(m,h.t=v),w!==h.a&&Y(m,"border",h.a=w),L!==h.o&&Y(m,"width",h.o=L),A!==h.i&&Y(m,"height",h.i=A),B!==h.n&&N(m,"box-state",h.n=B),F!==h.s&&k(y,h.s=F),q!==h.h&&Y(y,"background",h.h=q),J!==h.r&&Y(y,"width",h.r=J),T!==h.d&&Y(y,"height",h.d=T),h},{e:void 0,t:void 0,a:void 0,o:void 0,i:void 0,n:void 0,s:void 0,h:void 0,r:void 0,d:void 0}),f})()},vr="_Logo_8bwge_1",yr="_Actuator_8bwge_7",it={Logo:vr,Actuator:yr},Mt=`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
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
`;var kr=C("<div><a href=/>");const xr=()=>{const e=I(Mt);return(()=>{var t=kr(),n=t.firstChild;return _(n,e),x(r=>{var o=it.Logo,s=it.Actuator;return o!==r.e&&k(t,r.e=o),s!==r.t&&k(n,r.t=s),r},{e:void 0,t:void 0}),t})()},_r="_Splash_knpkf_1",br={Splash:_r};var Cr=C("<div>");const Ar=()=>{const e=I(Mt);return(()=>{var t=Cr();return _(t,e),x(()=>k(t,br.Splash)),t})()},Sr="_PasswordField_1i8ty_1",$r="_PswSwitch_1i8ty_6",at={PasswordField:Sr,PswSwitch:$r},Pr="_TextField_1ul46_1",Lr="_InputLegend_1ul46_23",Tr="_InputField_1ul46_19",Ue={TextField:Pr,InputLegend:Lr,InputField:Tr};var Er=C("<div><legend></legend><input>");const Qe=e=>{const[t,n]=M(!1),r=()=>n(l=>!0),o=l=>n(u=>l.target.value!==""),s=l=>n(u=>u||(l.target.nextElementSibling.focus(),!0)),i=()=>e.legend,a=()=>e.name,c=()=>e.type;return(()=>{var l=Er(),u=l.firstChild,d=u.nextSibling;return W(u,"click",s),_(u,i),W(d,"blur",o),W(d,"focus",r),x(f=>{var m=Ue.TextField,y=t(),h=Ue.InputLegend,g=c(),v=Ue.InputField,w=a();return m!==f.e&&k(l,f.e=m),y!==f.t&&N(l,"input-focus",f.t=y),h!==f.a&&k(u,f.a=h),g!==f.o&&N(d,"type",f.o=g),v!==f.i&&k(d,f.i=v),w!==f.n&&N(d,"name",f.n=w),f},{e:void 0,t:void 0,a:void 0,o:void 0,i:void 0,n:void 0}),l})()},Rr=`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
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
`,Br=`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
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
`;var Mr=C("<div><button type=button>");const qe=e=>{const t=()=>e.name,n=I(Rr),r=I(Br),[o,s]=M({type:"password",svg:r}),i=()=>s(c=>c.type=="password"?{type:"text",svg:n}:{type:"password",svg:r}),a=()=>e.legend;return(()=>{var c=Mr(),l=c.firstChild;return _(c,p(Qe,{get type(){return o().type},get name(){return t()},get legend(){return a()??"Password"}}),l),W(l,"click",i),_(l,()=>o().svg),x(u=>{var d=at.PasswordField,f=at.PswSwitch;return d!==u.e&&k(c,u.e=d),f!==u.t&&k(l,u.t=f),u},{e:void 0,t:void 0}),c})()},Or="_TextLine_5y4ha_1",zr={TextLine:Or};var Fr=C("<span>");const Ot=e=>{const t=()=>e.children,n=()=>e.cls;return(()=>{var r=Fr();return _(r,t),x(()=>k(r,` ${zr.TextLine} ${Ve(n())}`)),r})()},Ur="_Actuator_191in_1",jr="_Button_191in_13",ct={Actuator:Ur,Button:jr};var Gr=C("<button>"),Nr=C("<a>");const ae=e=>{const t=()=>e.children,n=()=>e.link,r=()=>e.class,o=()=>e.call;return n()===void 0?(()=>{var s=Gr();return W(s,"click",o()),_(s,t),x(()=>k(s,`${ct.Button} ${Ve(r())}`)),s})():(()=>{var s=Nr();return W(s,"click",o()),_(s,t),x(i=>{var a=`${ct.Actuator} ${Ve(r())}`,c=n();return a!==i.e&&k(s,i.e=a),c!==i.t&&N(s,"href",i.t=c),i},{e:void 0,t:void 0}),s})()},Ir="_Separator_uerzn_1",lt={Separator:Ir};var Dr=C("<span>");const zt=()=>{const[e,t]=M(!1),n=r=>t(o=>{const s=document.querySelector(`.${lt.Separator}`);if(s==null)return o;const a=s.parentElement.getBoundingClientRect(),c=r.clientX,l=r.clientY;return c>=a.left&&c<=a.right&&l<=a.bottom&&l>=a.top});return document.body.addEventListener("mousemove",n),(()=>{var r=Dr();return x(o=>{var s=lt.Separator,i=e();return s!==o.e&&k(r,o.e=s),i!==o.t&&N(r,"active",o.t=i),o},{e:void 0,t:void 0}),r})()},Vr="_Form_x67kl_1",Hr="_FormTitle_x67kl_27",qr="_SubmitButton_x67kl_31",Kr="_Note_x67kl_49",Wr="_SwapButton_x67kl_58",V={Form:Vr,FormTitle:Hr,SubmitButton:qr,Note:Kr,SwapButton:Wr};var dt=C("<form>");const Ft=e=>{const t=()=>e.action,n=()=>e.method,r=()=>e.children,o=()=>e.target;return o()===void 0?(()=>{var s=dt();return _(s,r),x(i=>{var a=V.Form,c=t(),l=n();return a!==i.e&&k(s,i.e=a),c!==i.t&&N(s,"action",i.t=c),l!==i.a&&N(s,"method",i.a=l),i},{e:void 0,t:void 0,a:void 0}),s})():(()=>{var s=dt();return _(s,r),x(i=>{var a=V.Form,c=t(),l=n(),u=o();return a!==i.e&&k(s,i.e=a),c!==i.t&&N(s,"action",i.t=c),l!==i.a&&N(s,"method",i.a=l),u!==i.o&&N(s,"target",i.o=u),i},{e:void 0,t:void 0,a:void 0,o:void 0}),s})()};var Xr=C("<input type=hidden name=method_override value=put>"),Yr=C("<h4>Register"),Zr=C("<span>Already have an account?"),Jr=C("<span>Login.");const Qr=e=>{const t=()=>e.swap_call;return p(Ft,{action:"/auth/user",method:"post",target:"_blank",get children(){return[Xr(),(()=>{var n=Yr();return x(()=>k(n,V.FormTitle)),n})(),p(Qe,{type:"text",name:"user_name",legend:"User Name"}),p(qe,{name:"user_pswd"}),p(qe,{legend:"Verify Password"}),p(Bt,{name:"auto_login",legend:" auto login"}),p(ae,{get class(){return V.SubmitButton},children:"Register"}),p(zt,{}),p(Ot,{get children(){return[(()=>{var n=Zr();return x(()=>k(n,V.Note)),n})(),p(ae,{get class(){return V.SwapButton},get call(){return t()},get children(){return Jr()}})]}})]}})};var eo=C("<h4>Login"),to=C("<span>New to hanabi?"),no=C("<span>Register.");const ro=e=>{const t=()=>e.swap_call;return p(Ft,{action:"/auth/user",method:"post",target:"_blank",get children(){return[(()=>{var n=eo();return x(()=>k(n,V.FormTitle)),n})(),p(Qe,{type:"text",name:"user_name",legend:"User Name"}),p(qe,{name:"user_pswd"}),p(Bt,{name:"persist_session",legend:" persist session"}),p(ae,{type:"submit",get class(){return V.SubmitButton},children:"Login"}),p(zt,{}),p(Ot,{get children(){return[(()=>{var n=to();return x(()=>k(n,V.Note)),n})(),p(ae,{get class(){return V.SwapButton},get call(){return t()},get children(){return no()}})]}})]}})};var oo=C("<div>"),so=C("<div><span>");const[io,ao]=M(0),co=Se({form:io,set_form:ao});function Ut(){return Ye(co)}const lo=()=>{const{user:e,re_user:t}=Le(),{form:n,set_form:r}=Ut(),o=()=>r(s=>Math.abs(1-s));return(()=>{var s=oo();return _(s,p(he,{get children(){return[p(D,{get when(){return e().name===void 0},get children(){return p(he,{get children(){return[p(D,{get when(){return n()==0},get children(){return p(ro,{swap_call:o})}}),p(D,{get when(){return n()==1},get children(){return p(Qr,{swap_call:o})}})]}})}}),p(D,{get when(){return e().name!==void 0},get children(){return p(uo,{text:"You are already signed in."})}})]}})),x(()=>k(s,He.Auth)),s})()},uo=e=>{const t=()=>e.text;return(()=>{var n=so(),r=n.firstChild;return _(r,t),x(o=>{var s=He.TurnBack,i=He.TurnBackText;return s!==o.e&&k(n,o.e=s),i!==o.t&&k(r,o.t=i),o},{e:void 0,t:void 0}),n})()},fo="_Initializer_o6th1_1",ho="_Negotiator_o6th1_21",Ce={Initializer:fo,Negotiator:ho};var jt=C("<div>"),po=C("<span>&nbsp;ok"),go=C("<span>&nbsp;err!"),mo=C("<span><span>negotiating user authentication...");const ut=()=>(gt(()=>{const e=document.querySelector(`.${Ce.Initializer}`);if(e!==void 0){const t=e.parentElement;t.childNodes.length>1&&(t.parentElement.appendChild(e),t.remove())}}),(()=>{var e=jt();return _(e,p(Ar,{}),null),_(e,p(yo,{}),null),x(()=>k(e,`${Ce.Initializer}`)),e})());async function wo(e){return await{text:async()=>e??"scarecrow"}.text()}const vo=e=>{const t=()=>e.re_user,n=()=>e.user;let[r]=mt(n().name,wo);return gt(()=>{t()(o=>(ne(r())&&t()(r()),o))}),(()=>{var o=mo();return o.firstChild,_(o,p(he,{get children(){return[p(D,{get when(){return ne(n().name)},get children(){return po()}}),p(D,{get when(){return!ne(n().name)},get children(){return go()}})]}}),null),x(()=>k(o,Ce.Negotiate)),o})()},yo=()=>{const{user:e,re_user:t}=Le();return(()=>{var n=jt();return _(n,p(vo,{user:e,re_user:t})),x(()=>k(n,Ce.Negotiator)),n})()},ko="_Menu_rjehr_1",xo="_Entry_rjehr_10",_o="_Path_rjehr_19",pe={Menu:ko,Entry:xo,Path:_o},bo=`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
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
`,Co=`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
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
`,Ao=`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
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
`,So='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 48C141.1 48 48 141.1 48 256s93.1 208 208 208 208-93.1 208-208S370.9 48 256 48zM76 256c0-48.1 18.7-93.3 52.7-127.3S207.9 76 256 76c48.1 0 93.3 18.7 127.3 52.7 32.2 32.2 50.7 74.5 52.6 119.7-8.8-10.3-24.2-24-43.8-24-27.5 0-41.7 25.7-51 42.7-1.4 2.5-2.7 4.9-3.9 7-11.4 19.2-27.3 30-42.5 28.9-13.4-.9-24.8-11.2-32.2-28.8-9.2-22.1-29.1-45.8-52.9-49.2-11.3-1.6-28.1.8-44.7 21.4-3.2 4-6.9 9.4-11.1 15.6-10.4 15.5-26.2 38.8-38.1 40.8-17.3 2.8-30.9-7.5-36.4-12.3-2.2-11.2-3.3-22.8-3.3-34.5z"/></svg>';var et=C("<div>"),Gt=C("<span>");const $o=()=>{const{user:e,re_user:t}=Le(),{form:n,set_form:r}=Ut(),o=I(Co),s=I(bo),i=I(Ao),a=I(So),c=()=>{const f=document.body.style;f.getPropertyValue("filter")===""?f.setProperty("filter","invert() contrast(.89)"):f.removeProperty("filter")},l=()=>t(f=>({name:void 0})),u=()=>r(1),d=()=>r(0);return(()=>{var f=et();return _(f,p(he,{get children(){return[p(D,{get when(){return!ne(e().name)},get children(){return[p(ft,{call:c,icon:a,text:"colors"}),p(je,{link:"/auth",call:d,icon:o,text:"login"}),p(je,{link:"/auth",call:u,icon:i,text:"register"})]}}),p(D,{get when(){return ne(e().name)},get children(){return[p(ft,{call:c,icon:a,text:"colors"}),p(je,{link:"/",call:l,icon:s,text:"logout"})]}})]}})),x(()=>k(f,pe.Menu)),f})()},je=e=>{const t=()=>e.icon,n=()=>e.text,r=()=>e.link,o=()=>e.call;return(()=>{var s=et();return _(s,p(ae,{get link(){return r()},get call(){return o()},get class(){return pe.Path},get children(){return[p(te,{get when(){return t()!==void 0},get children(){return t()}}),(()=>{var i=Gt();return _(i,n),i})()]}})),x(()=>k(s,pe.Entry)),s})()},ft=e=>{const t=()=>e.icon,n=()=>e.text,r=()=>e.call;return(()=>{var o=et();return _(o,p(ae,{get call(){return r()},get class(){return pe.Path},get children(){return[p(te,{get when(){return t()!==void 0},get children(){return t()}}),(()=>{var s=Gt();return _(s,n),s})()]}})),x(()=>k(o,pe.Entry)),o})()},Po="_Page_e1i3l_1",Lo={Page:Po};var To=C("<div>");const Eo=e=>{const t=()=>e.children;return(()=>{var n=To();return _(n,p(xr,{}),null),_(n,p($o,{}),null),_(n,t,null),x(()=>k(n,Lo.Page)),n})()},Ro="_App_wcrpu_1",Bo={App:Ro};var Mo=C("<div>");function Oo(e,t){if(e===null)return;const n=e.parentElement;if(n!==null)return n.className.includes(t)}function zo(e,t){for(;;){const n=Oo(e,t);if(n===void 0)return!1;if(n)return!0;e=e.parentElement}}function Fo(e,t){const n=t.target;if(n.className.constructor.name!=="String")return e;let o=!1;return n.className.includes("Auth")&&(o=!0),o||(o=zo(n,"Auth")),o?{name:e.name==null?"scarecrow":void 0}:e}const Uo=()=>{const{user:e,re_user:t}=Le(),n=r=>t(o=>Fo(o,r));return(()=>{var r=Mo();return W(r,"click",n),_(r,p(he,{get children(){return[p(D,{get when(){return!ne(e())},get children(){return p(ut,{})}}),p(D,{get when(){return ne(e())},get children(){return p(Eo,{get children(){return p(Fn,{get children(){return[p(Fe,{path:"/",component:Zn}),p(Fe,{path:"/auth",component:lo}),p(Fe,{path:"*",component:ut})]}})}})}})]}})),x(()=>k(r,Bo.App)),r})()};ln(()=>p(Uo,{}),document.body);
