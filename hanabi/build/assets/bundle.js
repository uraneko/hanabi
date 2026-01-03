(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const s of o)if(s.type==="childList")for(const l of s.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function n(o){const s={};return o.integrity&&(s.integrity=o.integrity),o.referrerPolicy&&(s.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?s.credentials="include":o.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(o){if(o.ep)return;o.ep=!0;const s=n(o);fetch(o.href,s)}})();const kn=!1,xn=(e,t)=>e===t,ut=Symbol("solid-proxy"),_n=typeof Proxy=="function",Oe={equals:xn};let Ft=Kt;const re=1,Ne=2,Rt={owned:null,cleanups:null,context:null,owner:null},Je={};var k=null;let et=null,bn=null,x=null,U=null,te=null,Ve=0;function Gt(e,t){const n=x,r=k,o=e.length===0,s=t===void 0?r:t,l=o?Rt:{owned:null,cleanups:null,context:s?s.context:null,owner:s},i=o?e:()=>e(()=>D(()=>ke(l)));k=l,x=null;try{return Z(i,!0)}finally{x=n,k=r}}function X(e,t){t=t?Object.assign({},Oe,t):Oe;const n={value:e,observers:null,observerSlots:null,comparator:t.equals||void 0},r=o=>(typeof o=="function"&&(o=o(n.value)),Ht(n,o));return[qt.bind(n),r]}function $n(e,t,n){const r=qe(e,t,!0,re);me(r)}function E(e,t,n){const r=qe(e,t,!1,re);me(r)}function zt(e,t,n){Ft=On;const r=qe(e,t,!1,re);r.user=!0,te?te.push(r):me(r)}function A(e,t,n){n=n?Object.assign({},Oe,n):Oe;const r=qe(e,t,!0,0);return r.observers=null,r.observerSlots=null,r.comparator=n.equals||void 0,me(r),qt.bind(r)}function Sn(e){return e&&typeof e=="object"&&"then"in e}function An(e,t,n){let r,o,s;typeof t=="function"?(r=e,o=t,s={}):(r=!0,o=e,s=t||{});let l=null,i=Je,a=!1,c="initialValue"in s,u=typeof r=="function"&&A(r);const h=new Set,[d,g]=(s.storage||X)(s.initialValue),[v,f]=X(void 0),[w,y]=X(void 0,{equals:!1}),[m,G]=X(c?"ready":"unresolved");function C($,S,H,M){return l===$&&(l=null,M!==void 0&&(c=!0),($===i||S===i)&&s.onHydrated&&queueMicrotask(()=>s.onHydrated(M,{value:S})),i=Je,I(S,H)),S}function I($,S){Z(()=>{S===void 0&&g(()=>$),G(S!==void 0?"errored":c?"ready":"unresolved"),f(S);for(const H of h.keys())H.decrement();h.clear()},!1)}function q(){const $=Ln,S=d(),H=v();if(H!==void 0&&!l)throw H;return x&&x.user,S}function J($=!0){if($!==!1&&a)return;a=!1;const S=u?u():r;if(S==null||S===!1){C(l,D(d));return}let H;const M=i!==Je?i:D(()=>{try{return o(S,{value:d(),refetching:$})}catch(se){H=se}});if(H!==void 0){C(l,void 0,Le(H),S);return}else if(!Sn(M))return C(l,M,void 0,S),M;return l=M,"v"in M?(M.s===1?C(l,M.v,void 0,S):C(l,void 0,Le(M.v),S),M):(a=!0,queueMicrotask(()=>a=!1),Z(()=>{G(c?"refreshing":"pending"),y()},!1),M.then(se=>C(M,se,void 0,S),se=>C(M,void 0,Le(se),S)))}Object.defineProperties(q,{state:{get:()=>m()},error:{get:()=>v()},loading:{get(){const $=m();return $==="pending"||$==="refreshing"}},latest:{get(){if(!c)return q();const $=v();if($&&!l)throw $;return d()}}});let oe=k;return u?$n(()=>(oe=k,J(!1))):J(!1),[q,{refetch:$=>kt(oe,()=>J($)),mutate:g}]}function Cn(e){return Z(e,!1)}function D(e){if(x===null)return e();const t=x;x=null;try{return e()}finally{x=t}}function yt(e,t,n){const r=Array.isArray(e);let o,s=n&&n.defer;return l=>{let i;if(r){i=Array(e.length);for(let c=0;c<e.length;c++)i[c]=e[c]()}else i=e();if(s)return s=!1,l;const a=D(()=>t(i,o,l));return o=i,a}}function Dt(e){return k===null||(k.cleanups===null?k.cleanups=[e]:k.cleanups.push(e)),e}function Vt(){return k}function kt(e,t){const n=k,r=x;k=e,x=null;try{return Z(t,!0)}catch(o){_t(o)}finally{k=n,x=r}}function Pn(e){const t=x,n=k;return Promise.resolve().then(()=>{x=t,k=n;let r;return Z(e,!1),x=k=null,r?r.done:void 0})}const[Bs,js]=X(!1);function xt(e,t){const n=Symbol("context");return{id:n,Provider:Nn(n),defaultValue:e}}function It(e){let t;return k&&k.context&&(t=k.context[e.id])!==void 0?t:e.defaultValue}function Ie(e){const t=A(e),n=A(()=>dt(t()));return n.toArray=()=>{const r=n();return Array.isArray(r)?r:r!=null?[r]:[]},n}let Ln;function qt(){if(this.sources&&this.state)if(this.state===re)me(this);else{const e=U;U=null,Z(()=>Be(this),!1),U=e}if(x){const e=this.observers?this.observers.length:0;x.sources?(x.sources.push(this),x.sourceSlots.push(e)):(x.sources=[this],x.sourceSlots=[e]),this.observers?(this.observers.push(x),this.observerSlots.push(x.sources.length-1)):(this.observers=[x],this.observerSlots=[x.sources.length-1])}return this.value}function Ht(e,t,n){let r=e.value;return(!e.comparator||!e.comparator(r,t))&&(e.value=t,e.observers&&e.observers.length&&Z(()=>{for(let o=0;o<e.observers.length;o+=1){const s=e.observers[o],l=et&&et.running;l&&et.disposed.has(s),(l?!s.tState:!s.state)&&(s.pure?U.push(s):te.push(s),s.observers&&Wt(s)),l||(s.state=re)}if(U.length>1e6)throw U=[],new Error},!1)),t}function me(e){if(!e.fn)return;ke(e);const t=Ve;En(e,e.value,t)}function En(e,t,n){let r;const o=k,s=x;x=k=e;try{r=e.fn(t)}catch(l){return e.pure&&(e.state=re,e.owned&&e.owned.forEach(ke),e.owned=null),e.updatedAt=n+1,_t(l)}finally{x=s,k=o}(!e.updatedAt||e.updatedAt<=n)&&(e.updatedAt!=null&&"observers"in e?Ht(e,r):e.value=r,e.updatedAt=n)}function qe(e,t,n,r=re,o){const s={fn:e,state:r,updatedAt:null,owned:null,sources:null,sourceSlots:null,cleanups:null,value:t,owner:k,context:k?k.context:null,pure:n};return k===null||k!==Rt&&(k.owned?k.owned.push(s):k.owned=[s]),s}function Me(e){if(e.state===0)return;if(e.state===Ne)return Be(e);if(e.suspense&&D(e.suspense.inFallback))return e.suspense.effects.push(e);const t=[e];for(;(e=e.owner)&&(!e.updatedAt||e.updatedAt<Ve);)e.state&&t.push(e);for(let n=t.length-1;n>=0;n--)if(e=t[n],e.state===re)me(e);else if(e.state===Ne){const r=U;U=null,Z(()=>Be(e,t[0]),!1),U=r}}function Z(e,t){if(U)return e();let n=!1;t||(U=[]),te?n=!0:te=[],Ve++;try{const r=e();return Tn(n),r}catch(r){n||(te=null),U=null,_t(r)}}function Tn(e){if(U&&(Kt(U),U=null),e)return;const t=te;te=null,t.length&&Z(()=>Ft(t),!1)}function Kt(e){for(let t=0;t<e.length;t++)Me(e[t])}function On(e){let t,n=0;for(t=0;t<e.length;t++){const r=e[t];r.user?e[n++]=r:Me(r)}for(t=0;t<n;t++)Me(e[t])}function Be(e,t){e.state=0;for(let n=0;n<e.sources.length;n+=1){const r=e.sources[n];if(r.sources){const o=r.state;o===re?r!==t&&(!r.updatedAt||r.updatedAt<Ve)&&Me(r):o===Ne&&Be(r,t)}}}function Wt(e){for(let t=0;t<e.observers.length;t+=1){const n=e.observers[t];n.state||(n.state=Ne,n.pure?U.push(n):te.push(n),n.observers&&Wt(n))}}function ke(e){let t;if(e.sources)for(;e.sources.length;){const n=e.sources.pop(),r=e.sourceSlots.pop(),o=n.observers;if(o&&o.length){const s=o.pop(),l=n.observerSlots.pop();r<o.length&&(s.sourceSlots[l]=r,o[r]=s,n.observerSlots[r]=l)}}if(e.tOwned){for(t=e.tOwned.length-1;t>=0;t--)ke(e.tOwned[t]);delete e.tOwned}if(e.owned){for(t=e.owned.length-1;t>=0;t--)ke(e.owned[t]);e.owned=null}if(e.cleanups){for(t=e.cleanups.length-1;t>=0;t--)e.cleanups[t]();e.cleanups=null}e.state=0}function Le(e){return e instanceof Error?e:new Error(typeof e=="string"?e:"Unknown error",{cause:e})}function _t(e,t=k){throw Le(e)}function dt(e){if(typeof e=="function"&&!e.length)return dt(e());if(Array.isArray(e)){const t=[];for(let n=0;n<e.length;n++){const r=dt(e[n]);Array.isArray(r)?t.push.apply(t,r):t.push(r)}return t}return e}function Nn(e,t){return function(r){let o;return E(()=>o=D(()=>(k.context={...k.context,[e]:r.value},Ie(()=>r.children))),void 0),o}}function p(e,t){return D(()=>e(t||{}))}function Ce(){return!0}const Mn={get(e,t,n){return t===ut?n:e.get(t)},has(e,t){return t===ut?!0:e.has(t)},set:Ce,deleteProperty:Ce,getOwnPropertyDescriptor(e,t){return{configurable:!0,enumerable:!0,get(){return e.get(t)},set:Ce,deleteProperty:Ce}},ownKeys(e){return e.keys()}};function tt(e){return(e=typeof e=="function"?e():e)?e:{}}function Bn(){for(let e=0,t=this.length;e<t;++e){const n=this[e]();if(n!==void 0)return n}}function jn(...e){let t=!1;for(let l=0;l<e.length;l++){const i=e[l];t=t||!!i&&ut in i,e[l]=typeof i=="function"?(t=!0,A(i)):i}if(_n&&t)return new Proxy({get(l){for(let i=e.length-1;i>=0;i--){const a=tt(e[i])[l];if(a!==void 0)return a}},has(l){for(let i=e.length-1;i>=0;i--)if(l in tt(e[i]))return!0;return!1},keys(){const l=[];for(let i=0;i<e.length;i++)l.push(...Object.keys(tt(e[i])));return[...new Set(l)]}},Mn);const n={},r=Object.create(null);for(let l=e.length-1;l>=0;l--){const i=e[l];if(!i)continue;const a=Object.getOwnPropertyNames(i);for(let c=a.length-1;c>=0;c--){const u=a[c];if(u==="__proto__"||u==="constructor")continue;const h=Object.getOwnPropertyDescriptor(i,u);if(!r[u])r[u]=h.get?{enumerable:!0,configurable:!0,get:Bn.bind(n[u]=[h.get.bind(i)])}:h.value!==void 0?h:void 0;else{const d=n[u];d&&(h.get?d.push(h.get.bind(i)):h.value!==void 0&&d.push(()=>h.value))}}}const o={},s=Object.keys(r);for(let l=s.length-1;l>=0;l--){const i=s[l],a=r[i];a&&a.get?Object.defineProperty(o,i,a):o[i]=a?a.value:void 0}return o}const Xt=e=>`Stale read from <${e}>.`;function He(e){const t=e.keyed,n=A(()=>e.when,void 0,void 0),r=t?n:A(n,void 0,{equals:(o,s)=>!o==!s});return A(()=>{const o=r();if(o){const s=e.children;return typeof s=="function"&&s.length>0?D(()=>s(t?o:()=>{if(!D(r))throw Xt("Show");return n()})):s}return e.fallback},void 0,void 0)}function xe(e){const t=Ie(()=>e.children),n=A(()=>{const r=t(),o=Array.isArray(r)?r:[r];let s=()=>{};for(let l=0;l<o.length;l++){const i=l,a=o[l],c=s,u=A(()=>c()?void 0:a.when,void 0,void 0),h=a.keyed?u:A(u,void 0,{equals:(d,g)=>!d==!g});s=()=>c()||(h()?[i,u,a]:void 0)}return s});return A(()=>{const r=n()();if(!r)return e.fallback;const[o,s,l]=r,i=l.children;return typeof i=="function"&&i.length>0?D(()=>i(l.keyed?s():()=>{if(D(n)()?.[0]!==o)throw Xt("Match");return s()})):i},void 0,void 0)}function Q(e){return e}const Un=e=>A(()=>e());function Fn(e,t,n){let r=n.length,o=t.length,s=r,l=0,i=0,a=t[o-1].nextSibling,c=null;for(;l<o||i<s;){if(t[l]===n[i]){l++,i++;continue}for(;t[o-1]===n[s-1];)o--,s--;if(o===l){const u=s<r?i?n[i-1].nextSibling:n[s-i]:a;for(;i<s;)e.insertBefore(n[i++],u)}else if(s===i)for(;l<o;)(!c||!c.has(t[l]))&&t[l].remove(),l++;else if(t[l]===n[s-1]&&n[i]===t[o-1]){const u=t[--o].nextSibling;e.insertBefore(n[i++],t[l++].nextSibling),e.insertBefore(n[--s],u),t[o]=n[s]}else{if(!c){c=new Map;let h=i;for(;h<s;)c.set(n[h],h++)}const u=c.get(t[l]);if(u!=null)if(i<u&&u<s){let h=l,d=1,g;for(;++h<o&&h<s&&!((g=c.get(t[h]))==null||g!==u+d);)d++;if(d>u-i){const v=t[l];for(;i<u;)e.insertBefore(n[i++],v)}else e.replaceChild(n[i++],t[l++])}else l++;else t[l++].remove()}}}const Pt="_$DX_DELEGATE";function Rn(e,t,n,r={}){let o;return Gt(s=>{o=s,t===document?e():L(t,e(),t.firstChild?null:void 0,n)},r.owner),()=>{o(),t.textContent=""}}function N(e,t,n,r){let o;const s=()=>{const i=document.createElement("template");return i.innerHTML=e,i.content.firstChild},l=()=>(o||(o=s())).cloneNode(!0);return l.cloneNode=l,l}function Gn(e,t=window.document){const n=t[Pt]||(t[Pt]=new Set);for(let r=0,o=e.length;r<o;r++){const s=e[r];n.has(s)||(n.add(s),t.addEventListener(s,Dn))}}function P(e,t){t==null?e.removeAttribute("class"):e.className=t}function zn(e,t,n,r){if(Array.isArray(n)){const o=n[0];e.addEventListener(t,n[0]=s=>o.call(e,n[1],s))}else e.addEventListener(t,n,typeof n!="function"&&n)}function L(e,t,n,r){if(n!==void 0&&!r&&(r=[]),typeof t!="function")return je(e,t,r,n);E(o=>je(e,t(),o,n),r)}function Dn(e){let t=e.target;const n=`$$${e.type}`,r=e.target,o=e.currentTarget,s=a=>Object.defineProperty(e,"target",{configurable:!0,value:a}),l=()=>{const a=t[n];if(a&&!t.disabled){const c=t[`${n}Data`];if(c!==void 0?a.call(t,c,e):a.call(t,e),e.cancelBubble)return}return t.host&&typeof t.host!="string"&&!t.host._$host&&t.contains(e.target)&&s(t.host),!0},i=()=>{for(;l()&&(t=t._$host||t.parentNode||t.host););};if(Object.defineProperty(e,"currentTarget",{configurable:!0,get(){return t||document}}),e.composedPath){const a=e.composedPath();s(a[0]);for(let c=0;c<a.length-2&&(t=a[c],!!l());c++){if(t._$host){t=t._$host,i();break}if(t.parentNode===o)break}}else i();s(r)}function je(e,t,n,r,o){for(;typeof n=="function";)n=n();if(t===n)return n;const s=typeof t,l=r!==void 0;if(e=l&&n[0]&&n[0].parentNode||e,s==="string"||s==="number"){if(s==="number"&&(t=t.toString(),t===n))return n;if(l){let i=n[0];i&&i.nodeType===3?i.data!==t&&(i.data=t):i=document.createTextNode(t),n=he(e,n,r,i)}else n!==""&&typeof n=="string"?n=e.firstChild.data=t:n=e.textContent=t}else if(t==null||s==="boolean")n=he(e,n,r);else{if(s==="function")return E(()=>{let i=t();for(;typeof i=="function";)i=i();n=je(e,i,n,r)}),()=>n;if(Array.isArray(t)){const i=[],a=n&&Array.isArray(n);if(ft(i,t,n,o))return E(()=>n=je(e,i,n,r,!0)),()=>n;if(i.length===0){if(n=he(e,n,r),l)return n}else a?n.length===0?Lt(e,i,r):Fn(e,n,i):(n&&he(e),Lt(e,i));n=i}else if(t.nodeType){if(Array.isArray(n)){if(l)return n=he(e,n,r,t);he(e,n,null,t)}else n==null||n===""||!e.firstChild?e.appendChild(t):e.replaceChild(t,e.firstChild);n=t}}return n}function ft(e,t,n,r){let o=!1;for(let s=0,l=t.length;s<l;s++){let i=t[s],a=n&&n[e.length],c;if(!(i==null||i===!0||i===!1))if((c=typeof i)=="object"&&i.nodeType)e.push(i);else if(Array.isArray(i))o=ft(e,i,a)||o;else if(c==="function")if(r){for(;typeof i=="function";)i=i();o=ft(e,Array.isArray(i)?i:[i],Array.isArray(a)?a:[a])||o}else e.push(i),o=!0;else{const u=String(i);a&&a.nodeType===3&&a.data===u?e.push(a):e.push(document.createTextNode(u))}}return o}function Lt(e,t,n=null){for(let r=0,o=t.length;r<o;r++)e.insertBefore(t[r],n)}function he(e,t,n,r){if(n===void 0)return e.textContent="";const o=r||document.createTextNode("");if(t.length){let s=!1;for(let l=t.length-1;l>=0;l--){const i=t[l];if(o!==i){const a=i.parentNode===e;!s&&!l?a?e.replaceChild(o,i):e.insertBefore(o,n):a&&i.remove()}else s=!0}}else e.insertBefore(o,n);return[o]}const Vn=!1;function Yt(){let e=new Set;function t(o){return e.add(o),()=>e.delete(o)}let n=!1;function r(o,s){if(n)return!(n=!1);const l={to:o,options:s,defaultPrevented:!1,preventDefault:()=>l.defaultPrevented=!0};for(const i of e)i.listener({...l,from:i.location,retry:a=>{a&&(n=!0),i.navigate(o,{...s,resolve:!1})}});return!l.defaultPrevented}return{subscribe:t,confirm:r}}let ht;function bt(){(!window.history.state||window.history.state._depth==null)&&window.history.replaceState({...window.history.state,_depth:window.history.length-1},""),ht=window.history.state._depth}bt();function In(e){return{...e,_depth:window.history.state&&window.history.state._depth}}function qn(e,t){let n=!1;return()=>{const r=ht;bt();const o=r==null?null:ht-r;if(n){n=!1;return}o&&t(o)?(n=!0,window.history.go(-o)):e()}}const Hn=/^(?:[a-z0-9]+:)?\/\//i,Kn=/^\/+|(\/)\/+$/g,Qt="http://sr";function ye(e,t=!1){const n=e.replace(Kn,"$1");return n?t||/^[?#]/.test(n)?n:"/"+n:""}function Ee(e,t,n){if(Hn.test(t))return;const r=ye(e),o=n&&ye(n);let s="";return!o||t.startsWith("/")?s=r:o.toLowerCase().indexOf(r.toLowerCase())!==0?s=r+o:s=o,(s||"/")+ye(t,!s)}function Wn(e,t){return ye(e).replace(/\/*(\*.*)?$/g,"")+ye(t)}function Zt(e){const t={};return e.searchParams.forEach((n,r)=>{r in t?Array.isArray(t[r])?t[r].push(n):t[r]=[t[r],n]:t[r]=n}),t}function Xn(e,t,n){const[r,o]=e.split("/*",2),s=r.split("/").filter(Boolean),l=s.length;return i=>{const a=i.split("/").filter(Boolean),c=a.length-l;if(c<0||c>0&&o===void 0&&!t)return null;const u={path:l?"":"/",params:{}},h=d=>n===void 0?void 0:n[d];for(let d=0;d<l;d++){const g=s[d],v=g[0]===":",f=v?a[d]:a[d].toLowerCase(),w=v?g.slice(1):g.toLowerCase();if(v&&nt(f,h(w)))u.params[w]=f;else if(v||!nt(f,w))return null;u.path+=`/${f}`}if(o){const d=c?a.slice(-c).join("/"):"";if(nt(d,h(o)))u.params[o]=d;else return null}return u}}function nt(e,t){const n=r=>r===e;return t===void 0?!0:typeof t=="string"?n(t):typeof t=="function"?t(e):Array.isArray(t)?t.some(n):t instanceof RegExp?t.test(e):!1}function Yn(e){const[t,n]=e.pattern.split("/*",2),r=t.split("/").filter(Boolean);return r.reduce((o,s)=>o+(s.startsWith(":")?2:3),r.length-(n===void 0?0:1))}function Jt(e){const t=new Map,n=Vt();return new Proxy({},{get(r,o){return t.has(o)||kt(n,()=>t.set(o,A(()=>e()[o]))),t.get(o)()},getOwnPropertyDescriptor(){return{enumerable:!0,configurable:!0}},ownKeys(){return Reflect.ownKeys(e())},has(r,o){return o in e()}})}function en(e){let t=/(\/?\:[^\/]+)\?/.exec(e);if(!t)return[e];let n=e.slice(0,t.index),r=e.slice(t.index+t[0].length);const o=[n,n+=t[1]];for(;t=/^(\/\:[^\/]+)\?/.exec(r);)o.push(n+=t[1]),r=r.slice(t[0].length);return en(r).reduce((s,l)=>[...s,...o.map(i=>i+l)],[])}const Qn=100,Zn=xt(),tn=xt();function Jn(e,t=""){const{component:n,preload:r,load:o,children:s,info:l}=e,i=!s||Array.isArray(s)&&!s.length,a={key:e,component:n,preload:r||o,info:l};return nn(e.path).reduce((c,u)=>{for(const h of en(u)){const d=Wn(t,h);let g=i?d:d.split("/*",1)[0];g=g.split("/").map(v=>v.startsWith(":")||v.startsWith("*")?v:encodeURIComponent(v)).join("/"),c.push({...a,originalPath:u,pattern:g,matcher:Xn(g,!i,e.matchFilters)})}return c},[])}function er(e,t=0){return{routes:e,score:Yn(e[e.length-1])*1e4-t,matcher(n){const r=[];for(let o=e.length-1;o>=0;o--){const s=e[o],l=s.matcher(n);if(!l)return null;r.unshift({...l,route:s})}return r}}}function nn(e){return Array.isArray(e)?e:[e]}function rn(e,t="",n=[],r=[]){const o=nn(e);for(let s=0,l=o.length;s<l;s++){const i=o[s];if(i&&typeof i=="object"){i.hasOwnProperty("path")||(i.path="");const a=Jn(i,t);for(const c of a){n.push(c);const u=Array.isArray(i.children)&&i.children.length===0;if(i.children&&!u)rn(i.children,c.pattern,n,r);else{const h=er([...n],r.length);r.push(h)}n.pop()}}}return n.length?r:r.sort((s,l)=>l.score-s.score)}function rt(e,t){for(let n=0,r=e.length;n<r;n++){const o=e[n].matcher(t);if(o)return o}return[]}function tr(e,t,n){const r=new URL(Qt),o=A(u=>{const h=e();try{return new URL(h,r)}catch{return console.error(`Invalid path ${h}`),u}},r,{equals:(u,h)=>u.href===h.href}),s=A(()=>o().pathname),l=A(()=>o().search,!0),i=A(()=>o().hash),a=()=>"",c=yt(l,()=>Zt(o()));return{get pathname(){return s()},get search(){return l()},get hash(){return i()},get state(){return t()},get key(){return a()},query:n?n(c):Jt(c)}}let le;function nr(){return le}function rr(e,t,n,r={}){const{signal:[o,s],utils:l={}}=e,i=l.parsePath||(_=>_),a=l.renderPath||(_=>_),c=l.beforeLeave||Yt(),u=Ee("",r.base||"");if(u===void 0)throw new Error(`${u} is not a valid base path`);u&&!o().value&&s({value:u,replace:!0,scroll:!1});const[h,d]=X(!1);let g;const v=(_,b)=>{b.value===f()&&b.state===y()||(g===void 0&&d(!0),le=_,g=b,Pn(()=>{g===b&&(w(g.value),m(g.state),I[1](z=>z.filter(de=>de.pending)))}).finally(()=>{g===b&&Cn(()=>{le=void 0,_==="navigate"&&M(g),d(!1),g=void 0})}))},[f,w]=X(o().value),[y,m]=X(o().state),G=tr(f,y,l.queryWrapper),C=[],I=X([]),q=A(()=>typeof r.transformUrl=="function"?rt(t(),r.transformUrl(G.pathname)):rt(t(),G.pathname)),J=()=>{const _=q(),b={};for(let z=0;z<_.length;z++)Object.assign(b,_[z].params);return b},oe=l.paramsWrapper?l.paramsWrapper(J,t):Jt(J),$={pattern:u,path:()=>u,outlet:()=>null,resolvePath(_){return Ee(u,_)}};return E(yt(o,_=>v("native",_),{defer:!0})),{base:$,location:G,params:oe,isRouting:h,renderPath:a,parsePath:i,navigatorFactory:H,matches:q,beforeLeave:c,preloadRoute:se,singleFlight:r.singleFlight===void 0?!0:r.singleFlight,submissions:I};function S(_,b,z){D(()=>{if(typeof b=="number"){b&&(l.go?l.go(b):console.warn("Router integration does not support relative routing"));return}const de=!b||b[0]==="?",{replace:Qe,resolve:fe,scroll:Ze,state:ve}={replace:!1,resolve:!de,scroll:!0,...z},Ae=fe?_.resolvePath(b):Ee(de&&G.pathname||"",b);if(Ae===void 0)throw new Error(`Path '${b}' is not a routable path`);if(C.length>=Qn)throw new Error("Too many redirects");const Ct=f();(Ae!==Ct||ve!==y())&&(Vn||c.confirm(Ae,z)&&(C.push({value:Ct,replace:Qe,scroll:Ze,state:y()}),v("navigate",{value:Ae,state:ve})))})}function H(_){return _=_||It(tn)||$,(b,z)=>S(_,b,z)}function M(_){const b=C[0];b&&(s({..._,replace:b.replace,scroll:b.scroll}),C.length=0)}function se(_,b){const z=rt(t(),_.pathname),de=le;le="preload";for(let Qe in z){const{route:fe,params:Ze}=z[Qe];fe.component&&fe.component.preload&&fe.component.preload();const{preload:ve}=fe;b&&ve&&kt(n(),()=>ve({params:Ze,location:{pathname:_.pathname,search:_.search,hash:_.hash,query:Zt(_),state:null,key:""},intent:"preload"}))}le=de}}function or(e,t,n,r){const{base:o,location:s,params:l}=e,{pattern:i,component:a,preload:c}=r().route,u=A(()=>r().path);a&&a.preload&&a.preload();const h=c?c({params:l,location:s,intent:le||"initial"}):void 0;return{parent:t,pattern:i,path:u,outlet:()=>a?p(a,{params:l,location:s,data:h,get children(){return n()}}):n(),resolvePath(g){return Ee(o.path(),g,u())}}}const sr=e=>t=>{const{base:n}=t,r=Ie(()=>t.children),o=A(()=>rn(r(),t.base||""));let s;const l=rr(e,o,()=>s,{base:n,singleFlight:t.singleFlight,transformUrl:t.transformUrl});return e.create&&e.create(l),p(Zn.Provider,{value:l,get children(){return p(ir,{routerState:l,get root(){return t.root},get preload(){return t.rootPreload||t.rootLoad},get children(){return[Un(()=>(s=Vt())&&null),p(lr,{routerState:l,get branches(){return o()}})]}})}})};function ir(e){const t=e.routerState.location,n=e.routerState.params,r=A(()=>e.preload&&D(()=>{e.preload({params:n,location:t,intent:nr()||"initial"})}));return p(He,{get when(){return e.root},keyed:!0,get fallback(){return e.children},children:o=>p(o,{params:n,location:t,get data(){return r()},get children(){return e.children}})})}function lr(e){const t=[];let n;const r=A(yt(e.routerState.matches,(o,s,l)=>{let i=s&&o.length===s.length;const a=[];for(let c=0,u=o.length;c<u;c++){const h=s&&s[c],d=o[c];l&&h&&d.route.key===h.route.key?a[c]=l[c]:(i=!1,t[c]&&t[c](),Gt(g=>{t[c]=g,a[c]=or(e.routerState,a[c-1]||e.routerState.base,Et(()=>r()[c+1]),()=>{const v=e.routerState.matches();return v[c]??v[0]})}))}return t.splice(o.length).forEach(c=>c()),l&&i?l:(n=a[0],a)}));return Et(()=>r()&&n)()}const Et=e=>()=>p(He,{get when(){return e()},keyed:!0,children:t=>p(tn.Provider,{value:t,get children(){return t.outlet()}})}),ot=e=>{const t=Ie(()=>e.children);return jn(e,{get children(){return t()}})};function ar([e,t],n,r){return[e,r?o=>t(r(o)):t]}function cr(e){let t=!1;const n=o=>typeof o=="string"?{value:o}:o,r=ar(X(n(e.get()),{equals:(o,s)=>o.value===s.value&&o.state===s.state}),void 0,o=>(!t&&e.set(o),o));return e.init&&Dt(e.init((o=e.get())=>{t=!0,r[1](n(o)),t=!1})),sr({signal:r,create:e.create,utils:e.utils})}function ur(e,t,n){return e.addEventListener(t,n),()=>e.removeEventListener(t,n)}function dr(e,t){const n=e&&document.getElementById(e);n?n.scrollIntoView():t&&window.scrollTo(0,0)}const fr=new Map;function hr(e=!0,t=!1,n="/_server",r){return o=>{const s=o.base.path(),l=o.navigatorFactory(o.base);let i,a;function c(f){return f.namespaceURI==="http://www.w3.org/2000/svg"}function u(f){if(f.defaultPrevented||f.button!==0||f.metaKey||f.altKey||f.ctrlKey||f.shiftKey)return;const w=f.composedPath().find(q=>q instanceof Node&&q.nodeName.toUpperCase()==="A");if(!w||t&&!w.hasAttribute("link"))return;const y=c(w),m=y?w.href.baseVal:w.href;if((y?w.target.baseVal:w.target)||!m&&!w.hasAttribute("state"))return;const C=(w.getAttribute("rel")||"").split(/\s+/);if(w.hasAttribute("download")||C&&C.includes("external"))return;const I=y?new URL(m,document.baseURI):new URL(m);if(!(I.origin!==window.location.origin||s&&I.pathname&&!I.pathname.toLowerCase().startsWith(s.toLowerCase())))return[w,I]}function h(f){const w=u(f);if(!w)return;const[y,m]=w,G=o.parsePath(m.pathname+m.search+m.hash),C=y.getAttribute("state");f.preventDefault(),l(G,{resolve:!1,replace:y.hasAttribute("replace"),scroll:!y.hasAttribute("noscroll"),state:C?JSON.parse(C):void 0})}function d(f){const w=u(f);if(!w)return;const[y,m]=w;r&&(m.pathname=r(m.pathname)),o.preloadRoute(m,y.getAttribute("preload")!=="false")}function g(f){clearTimeout(i);const w=u(f);if(!w)return a=null;const[y,m]=w;a!==y&&(r&&(m.pathname=r(m.pathname)),i=setTimeout(()=>{o.preloadRoute(m,y.getAttribute("preload")!=="false"),a=y},20))}function v(f){if(f.defaultPrevented)return;let w=f.submitter&&f.submitter.hasAttribute("formaction")?f.submitter.getAttribute("formaction"):f.target.getAttribute("action");if(!w)return;if(!w.startsWith("https://action/")){const m=new URL(w,Qt);if(w=o.parsePath(m.pathname+m.search),!w.startsWith(n))return}if(f.target.method.toUpperCase()!=="POST")throw new Error("Only POST forms are supported for Actions");const y=fr.get(w);if(y){f.preventDefault();const m=new FormData(f.target,f.submitter);y.call({r:o,f:f.target},f.target.enctype==="multipart/form-data"?m:new URLSearchParams(m))}}Gn(["click","submit"]),document.addEventListener("click",h),e&&(document.addEventListener("mousemove",g,{passive:!0}),document.addEventListener("focusin",d,{passive:!0}),document.addEventListener("touchstart",d,{passive:!0})),document.addEventListener("submit",v),Dt(()=>{document.removeEventListener("click",h),e&&(document.removeEventListener("mousemove",g),document.removeEventListener("focusin",d),document.removeEventListener("touchstart",d)),document.removeEventListener("submit",v)})}}function pr(e){const t=()=>{const r=window.location.pathname.replace(/^\/+/,"/")+window.location.search,o=window.history.state&&window.history.state._depth&&Object.keys(window.history.state).length===1?void 0:window.history.state;return{value:r+window.location.hash,state:o}},n=Yt();return cr({get:t,set({value:r,replace:o,scroll:s,state:l}){o?window.history.replaceState(In(l),"",r):window.history.pushState(l,"",r),dr(decodeURIComponent(window.location.hash.slice(1)),s),bt()},init:r=>ur(window,"popstate",qn(r,o=>{if(o)return!n.confirm(o);{const s=t();return!n.confirm(s.value,{state:s.state})}})),create:hr(e.preload,e.explicitLinks,e.actionBase,e.transformUrl),utils:{go:r=>window.history.go(r),beforeLeave:n}})(e)}const gr="_Home_1qp1l_1",wr="_Apps_1qp1l_6",mr="_App_1qp1l_6",vr="_A1_1qp1l_28",yr="_A2_1qp1l_40",kr="_A3_1qp1l_51",xr="_A4_1qp1l_64",Y={Home:gr,Apps:wr,App:mr,A1:vr,A2:yr,A3:kr,A4:xr},W=e=>new DOMParser().parseFromString(e,"image/svg+xml").querySelector("svg");function ne(e){return e!==void 0}function $t(e){return e===void 0?"":e.constructor.name=="String"?e:e.join(" ")}const _r='<svg xmlns="http://www.w3.org/2000/svg" class="ionicon" viewBox="0 0 512 512"><path d="M473 39.05a24 24 0 00-25.5-5.46L47.47 185h-.08a24 24 0 001 45.16l.41.13 137.3 58.63a16 16 0 0015.54-3.59L422 80a7.07 7.07 0 0110 10L226.66 310.26a16 16 0 00-3.59 15.54l58.65 137.38c.06.2.12.38.19.57 3.2 9.27 11.3 15.81 21.09 16.25h1a24.63 24.63 0 0023-15.46L478.39 64.62A24 24 0 00473 39.05z"/></svg>',br='<svg xmlns="http://www.w3.org/2000/svg" class="ionicon" viewBox="0 0 512 512"><path d="M465.94 119.76l-73.7-73.7A47.68 47.68 0 00358.3 32H96a64 64 0 00-64 64v320a64 64 0 0064 64h320a64 64 0 0064-64V153.7a47.68 47.68 0 00-14.06-33.94zM120 112h176a8 8 0 018 8v48a8 8 0 01-8 8H120a8 8 0 01-8-8v-48a8 8 0 018-8zm139.75 319.91a80 80 0 1176.16-76.16 80.06 80.06 0 01-76.16 76.16z"/><circle cx="256" cy="352" r="48"/></svg>',$r='<svg xmlns="http://www.w3.org/2000/svg" class="ionicon" viewBox="0 0 512 512"><path d="M480 128a64 64 0 00-64-64h-16V48.45c0-8.61-6.62-16-15.23-16.43A16 16 0 00368 48v16H144V48.45c0-8.61-6.62-16-15.23-16.43A16 16 0 00112 48v16H96a64 64 0 00-64 64v12a4 4 0 004 4h440a4 4 0 004-4zM32 416a64 64 0 0064 64h320a64 64 0 0064-64V179a3 3 0 00-3-3H35a3 3 0 00-3 3zm344-208a24 24 0 11-24 24 24 24 0 0124-24zm0 80a24 24 0 11-24 24 24 24 0 0124-24zm-80-80a24 24 0 11-24 24 24 24 0 0124-24zm0 80a24 24 0 11-24 24 24 24 0 0124-24zm0 80a24 24 0 11-24 24 24 24 0 0124-24zm-80-80a24 24 0 11-24 24 24 24 0 0124-24zm0 80a24 24 0 11-24 24 24 24 0 0124-24zm-80-80a24 24 0 11-24 24 24 24 0 0124-24zm0 80a24 24 0 11-24 24 24 24 0 0124-24z"/></svg>',Sr='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M376 64v42.667h-40V64H176v42.667h-40V64H96v384h40v-42.666h40V448h160v-42.666h40V448h40V64h-40zM176 362.667h-40V320h40v42.667zm0-85.333h-40v-42.667h40v42.667zM176 192h-40v-42.666h40V192zm200 170.667h-40V320h40v42.667zm0-85.333h-40v-42.667h40v42.667zM376 192h-40v-42.666h40V192z"/></svg>';var Ar=N("<div>"),Cr=N("<div><div><a href=#></a></div><div><a href=#></a></div><div><a href=#></a></div><div><a href=#>");const Pr=()=>(()=>{var e=Ar();return L(e,p(Lr,{})),E(()=>P(e,Y.Home)),e})(),Lr=()=>{const e=W(Sr),t=W(br),n=W(_r),r=W($r);return(()=>{var o=Cr(),s=o.firstChild,l=s.firstChild,i=s.nextSibling,a=i.firstChild,c=i.nextSibling,u=c.firstChild,h=c.nextSibling,d=h.firstChild;return L(l,r),L(a,n),L(u,t),L(d,e),E(g=>{var v=Y.Apps,f=`${Y.A1} ${Y.App}`,w=`${Y.A2} ${Y.App}`,y=`${Y.A3} ${Y.App}`,m=`${Y.A4} ${Y.App}`;return v!==g.e&&P(o,g.e=v),f!==g.t&&P(s,g.t=f),w!==g.a&&P(i,g.a=w),y!==g.o&&P(c,g.o=y),m!==g.i&&P(h,g.i=m),g},{e:void 0,t:void 0,a:void 0,o:void 0,i:void 0}),o})()},Er="_Auth_162go_1",Tr="_NothingToDo_162go_21",Or="_NothingText_162go_40",pt={Auth:Er,NothingToDo:Tr,NothingText:Or},Nr=!1,Mr=(e,t)=>e===t,gt=Symbol("solid-proxy"),Br=typeof Proxy=="function",Ue={equals:Mr};let jr=cn;const ue=1,Fe=2,Ur={};var j=null;let st=null,Fr=null,B=null,F=null,ae=null,Ke=0;function Se(e,t){t=t?Object.assign({},Ue,t):Ue;const n={value:e,observers:null,observerSlots:null,comparator:t.equals||void 0},r=o=>(typeof o=="function"&&(o=o(n.value)),sn(n,o));return[on.bind(n),r]}function O(e,t,n){const r=ln(e,t,!1,ue);We(r)}function we(e,t,n){n=n?Object.assign({},Ue,n):Ue;const r=ln(e,t,!0,0);return r.observers=null,r.observerSlots=null,r.comparator=n.equals||void 0,We(r),on.bind(r)}function _e(e){if(B===null)return e();const t=B;B=null;try{return e()}finally{B=t}}function Rr(e,t){const n=Symbol("context");return{id:n,Provider:qr(n),defaultValue:e}}function Gr(e){let t;return j&&j.context&&(t=j.context[e.id])!==void 0?t:e.defaultValue}function zr(e){const t=we(e),n=we(()=>wt(t()));return n.toArray=()=>{const r=n();return Array.isArray(r)?r:r!=null?[r]:[]},n}function on(){if(this.sources&&this.state)if(this.state===ue)We(this);else{const e=F;F=null,Xe(()=>Re(this)),F=e}if(B){const e=this.observers?this.observers.length:0;B.sources?(B.sources.push(this),B.sourceSlots.push(e)):(B.sources=[this],B.sourceSlots=[e]),this.observers?(this.observers.push(B),this.observerSlots.push(B.sources.length-1)):(this.observers=[B],this.observerSlots=[B.sources.length-1])}return this.value}function sn(e,t,n){let r=e.value;return(!e.comparator||!e.comparator(r,t))&&(e.value=t,e.observers&&e.observers.length&&Xe(()=>{for(let o=0;o<e.observers.length;o+=1){const s=e.observers[o],l=st&&st.running;l&&st.disposed.has(s),(l?!s.tState:!s.state)&&(s.pure?F.push(s):ae.push(s),s.observers&&un(s)),l||(s.state=ue)}if(F.length>1e6)throw F=[],new Error})),t}function We(e){if(!e.fn)return;Ge(e);const t=Ke;Dr(e,e.value,t)}function Dr(e,t,n){let r;const o=j,s=B;B=j=e;try{r=e.fn(t)}catch(l){return e.pure&&(e.state=ue,e.owned&&e.owned.forEach(Ge),e.owned=null),e.updatedAt=n+1,dn(l)}finally{B=s,j=o}(!e.updatedAt||e.updatedAt<=n)&&(e.updatedAt!=null&&"observers"in e?sn(e,r):e.value=r,e.updatedAt=n)}function ln(e,t,n,r=ue,o){const s={fn:e,state:r,updatedAt:null,owned:null,sources:null,sourceSlots:null,cleanups:null,value:t,owner:j,context:j?j.context:null,pure:n};return j===null||j!==Ur&&(j.owned?j.owned.push(s):j.owned=[s]),s}function an(e){if(e.state===0)return;if(e.state===Fe)return Re(e);if(e.suspense&&_e(e.suspense.inFallback))return e.suspense.effects.push(e);const t=[e];for(;(e=e.owner)&&(!e.updatedAt||e.updatedAt<Ke);)e.state&&t.push(e);for(let n=t.length-1;n>=0;n--)if(e=t[n],e.state===ue)We(e);else if(e.state===Fe){const r=F;F=null,Xe(()=>Re(e,t[0])),F=r}}function Xe(e,t){if(F)return e();let n=!1;F=[],ae?n=!0:ae=[],Ke++;try{const r=e();return Vr(n),r}catch(r){n||(ae=null),F=null,dn(r)}}function Vr(e){if(F&&(cn(F),F=null),e)return;const t=ae;ae=null,t.length&&Xe(()=>jr(t))}function cn(e){for(let t=0;t<e.length;t++)an(e[t])}function Re(e,t){e.state=0;for(let n=0;n<e.sources.length;n+=1){const r=e.sources[n];if(r.sources){const o=r.state;o===ue?r!==t&&(!r.updatedAt||r.updatedAt<Ke)&&an(r):o===Fe&&Re(r,t)}}}function un(e){for(let t=0;t<e.observers.length;t+=1){const n=e.observers[t];n.state||(n.state=Fe,n.pure?F.push(n):ae.push(n),n.observers&&un(n))}}function Ge(e){let t;if(e.sources)for(;e.sources.length;){const n=e.sources.pop(),r=e.sourceSlots.pop(),o=n.observers;if(o&&o.length){const s=o.pop(),l=n.observerSlots.pop();r<o.length&&(s.sourceSlots[l]=r,o[r]=s,n.observerSlots[r]=l)}}if(e.tOwned){for(t=e.tOwned.length-1;t>=0;t--)Ge(e.tOwned[t]);delete e.tOwned}if(e.owned){for(t=e.owned.length-1;t>=0;t--)Ge(e.owned[t]);e.owned=null}if(e.cleanups){for(t=e.cleanups.length-1;t>=0;t--)e.cleanups[t]();e.cleanups=null}e.state=0}function Ir(e){return e instanceof Error?e:new Error(typeof e=="string"?e:"Unknown error",{cause:e})}function dn(e,t=j){throw Ir(e)}function wt(e){if(typeof e=="function"&&!e.length)return wt(e());if(Array.isArray(e)){const t=[];for(let n=0;n<e.length;n++){const r=wt(e[n]);Array.isArray(r)?t.push.apply(t,r):t.push(r)}return t}return e}function qr(e,t){return function(r){let o;return O(()=>o=_e(()=>(j.context={...j.context,[e]:r.value},zr(()=>r.children))),void 0),o}}function Te(e,t){return _e(()=>e(t||{}))}function Pe(){return!0}const Hr={get(e,t,n){return t===gt?n:e.get(t)},has(e,t){return t===gt?!0:e.has(t)},set:Pe,deleteProperty:Pe,getOwnPropertyDescriptor(e,t){return{configurable:!0,enumerable:!0,get(){return e.get(t)},set:Pe,deleteProperty:Pe}},ownKeys(e){return e.keys()}};function it(e){return(e=typeof e=="function"?e():e)?e:{}}function Kr(){for(let e=0,t=this.length;e<t;++e){const n=this[e]();if(n!==void 0)return n}}function Wr(...e){let t=!1;for(let l=0;l<e.length;l++){const i=e[l];t=t||!!i&&gt in i,e[l]=typeof i=="function"?(t=!0,we(i)):i}if(Br&&t)return new Proxy({get(l){for(let i=e.length-1;i>=0;i--){const a=it(e[i])[l];if(a!==void 0)return a}},has(l){for(let i=e.length-1;i>=0;i--)if(l in it(e[i]))return!0;return!1},keys(){const l=[];for(let i=0;i<e.length;i++)l.push(...Object.keys(it(e[i])));return[...new Set(l)]}},Hr);const n={},r=Object.create(null);for(let l=e.length-1;l>=0;l--){const i=e[l];if(!i)continue;const a=Object.getOwnPropertyNames(i);for(let c=a.length-1;c>=0;c--){const u=a[c];if(u==="__proto__"||u==="constructor")continue;const h=Object.getOwnPropertyDescriptor(i,u);if(!r[u])r[u]=h.get?{enumerable:!0,configurable:!0,get:Kr.bind(n[u]=[h.get.bind(i)])}:h.value!==void 0?h:void 0;else{const d=n[u];d&&(h.get?d.push(h.get.bind(i)):h.value!==void 0&&d.push(()=>h.value))}}}const o={},s=Object.keys(r);for(let l=s.length-1;l>=0;l--){const i=s[l],a=r[i];a&&a.get?Object.defineProperty(o,i,a):o[i]=a?a.value:void 0}return o}const Xr=e=>`Stale read from <${e}>.`;function lt(e){const t=e.keyed,n=we(()=>e.when,void 0,void 0),r=t?n:we(n,void 0,{equals:(o,s)=>!o==!s});return we(()=>{const o=r();if(o){const s=e.children;return typeof s=="function"&&s.length>0?_e(()=>s(t?o:()=>{if(!_e(r))throw Xr("Show");return n()})):s}return e.fallback},void 0,void 0)}const[Yr,Qr]=Se({name:void 0}),Zr=Rr({user:Yr,re_user:Qr});function Ye(){return Gr(Zr)}function Jr(e,t,n){let r=n.length,o=t.length,s=r,l=0,i=0,a=t[o-1].nextSibling,c=null;for(;l<o||i<s;){if(t[l]===n[i]){l++,i++;continue}for(;t[o-1]===n[s-1];)o--,s--;if(o===l){const u=s<r?i?n[i-1].nextSibling:n[s-i]:a;for(;i<s;)e.insertBefore(n[i++],u)}else if(s===i)for(;l<o;)(!c||!c.has(t[l]))&&t[l].remove(),l++;else if(t[l]===n[s-1]&&n[i]===t[o-1]){const u=t[--o].nextSibling;e.insertBefore(n[i++],t[l++].nextSibling),e.insertBefore(n[--s],u),t[o]=n[s]}else{if(!c){c=new Map;let h=i;for(;h<s;)c.set(n[h],h++)}const u=c.get(t[l]);if(u!=null)if(i<u&&u<s){let h=l,d=1,g;for(;++h<o&&h<s&&!((g=c.get(t[h]))==null||g!==u+d);)d++;if(d>u-i){const v=t[l];for(;i<u;)e.insertBefore(n[i++],v)}else e.replaceChild(n[i++],t[l++])}else l++;else t[l++].remove()}}}function V(e,t,n,r){let o;const s=()=>{const i=document.createElement("template");return i.innerHTML=e,i.content.firstChild},l=()=>(o||(o=s())).cloneNode(!0);return l.cloneNode=l,l}function K(e,t,n){n==null?e.removeAttribute(t):e.setAttribute(t,n)}function T(e,t){t==null?e.removeAttribute("class"):e.className=t}function ce(e,t,n,r){if(Array.isArray(n)){const o=n[0];e.addEventListener(t,n[0]=s=>o.call(e,n[1],s))}else e.addEventListener(t,n,typeof n!="function"&&n)}function ie(e,t,n){n!=null?e.style.setProperty(t,n):e.style.removeProperty(t)}function R(e,t,n,r){if(n!==void 0&&!r&&(r=[]),typeof t!="function")return ze(e,t,r,n);O(o=>ze(e,t(),o,n),r)}function ze(e,t,n,r,o){for(;typeof n=="function";)n=n();if(t===n)return n;const s=typeof t,l=r!==void 0;if(e=l&&n[0]&&n[0].parentNode||e,s==="string"||s==="number"){if(s==="number"&&(t=t.toString(),t===n))return n;if(l){let i=n[0];i&&i.nodeType===3?i.data!==t&&(i.data=t):i=document.createTextNode(t),n=pe(e,n,r,i)}else n!==""&&typeof n=="string"?n=e.firstChild.data=t:n=e.textContent=t}else if(t==null||s==="boolean")n=pe(e,n,r);else{if(s==="function")return O(()=>{let i=t();for(;typeof i=="function";)i=i();n=ze(e,i,n,r)}),()=>n;if(Array.isArray(t)){const i=[],a=n&&Array.isArray(n);if(mt(i,t,n,o))return O(()=>n=ze(e,i,n,r,!0)),()=>n;if(i.length===0){if(n=pe(e,n,r),l)return n}else a?n.length===0?Tt(e,i,r):Jr(e,n,i):(n&&pe(e),Tt(e,i));n=i}else if(t.nodeType){if(Array.isArray(n)){if(l)return n=pe(e,n,r,t);pe(e,n,null,t)}else n==null||n===""||!e.firstChild?e.appendChild(t):e.replaceChild(t,e.firstChild);n=t}}return n}function mt(e,t,n,r){let o=!1;for(let s=0,l=t.length;s<l;s++){let i=t[s],a=n&&n[e.length],c;if(!(i==null||i===!0||i===!1))if((c=typeof i)=="object"&&i.nodeType)e.push(i);else if(Array.isArray(i))o=mt(e,i,a)||o;else if(c==="function")if(r){for(;typeof i=="function";)i=i();o=mt(e,Array.isArray(i)?i:[i],Array.isArray(a)?a:[a])||o}else e.push(i),o=!0;else{const u=String(i);a&&a.nodeType===3&&a.data===u?e.push(a):e.push(document.createTextNode(u))}}return o}function Tt(e,t,n=null){for(let r=0,o=t.length;r<o;r++)e.insertBefore(t[r],n)}function pe(e,t,n,r){if(n===void 0)return e.textContent="";const o=r||document.createTextNode("");if(t.length){let s=!1;for(let l=t.length-1;l>=0;l--){const i=t[l];if(o!==i){const a=i.parentNode===e;!s&&!l?a?e.replaceChild(o,i):e.insertBefore(o,n):a&&i.remove()}else s=!0}}else e.insertBefore(o,n);return[o]}const eo="_CheckBox_16c0a_1",to="_Box_16c0a_17",no="_TickMark_16c0a_37",ro="_Content_16c0a_38",oo="_Postman_16c0a_54",so="_Text_16c0a_71",ge={CheckBox:eo,Box:to,TickMark:no,Content:ro,Postman:oo,Text:so};var io=V("<input type=hidden>"),lo=V("<span>"),ao=V("<legend>"),co=V("<div><div style=background:transparent><div>");const uo={width:.6,height:.6,state:!1,tick:"",accent:"#485d6c"},fn=e=>{const t=Wr(uo,e),n=()=>t.state,r=()=>t.accent,o=()=>t.tick,s=()=>t.width,l=()=>t.height,i=()=>t.legend,a=()=>t.name,[c,u]=Se(n()),h=()=>u(d=>!c());return(()=>{var d=co(),g=d.firstChild,v=g.firstChild;return ce(d,"click",h),R(d,Te(lt,{get when(){return a()!==void 0},get children(){var f=io();return O(w=>{var y=ge.Postman,m=a();return y!==w.e&&T(f,w.e=y),m!==w.t&&K(f,"name",w.t=m),w},{e:void 0,t:void 0}),O(()=>f.value=c()),f}}),g),R(v,Te(lt,{get when(){return o()!==""},get children(){var f=lo();return R(f,o),O(()=>T(f,ge.TickMark)),f}})),R(d,Te(lt,{get when(){return i()!==void 0},get children(){var f=ao();return R(f,i),O(w=>{var y=ge.Text,m=r();return y!==w.e&&T(f,w.e=y),m!==w.t&&ie(f,"color",w.t=m),w},{e:void 0,t:void 0}),f}}),null),O(f=>{var w=ge.CheckBox,y=ge.Box,m=`0.11em solid ${r()}`,G=`${s()+.19}em`,C=`${l()+.19}em`,I=c(),q=ge.Content,J=r(),oe=`${s()}em`,$=`${l()}em`;return w!==f.e&&T(d,f.e=w),y!==f.t&&T(g,f.t=y),m!==f.a&&ie(g,"border",f.a=m),G!==f.o&&ie(g,"width",f.o=G),C!==f.i&&ie(g,"height",f.i=C),I!==f.n&&K(g,"box-state",f.n=I),q!==f.s&&T(v,f.s=q),J!==f.h&&ie(v,"background",f.h=J),oe!==f.r&&ie(v,"width",f.r=oe),$!==f.d&&ie(v,"height",f.d=$),f},{e:void 0,t:void 0,a:void 0,o:void 0,i:void 0,n:void 0,s:void 0,h:void 0,r:void 0,d:void 0}),d})()},fo="_Logo_nas3v_1",ho="_Anchor_nas3v_7",Ot={Logo:fo,Anchor:ho},hn=`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
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
`;var po=V("<div><a href=/>");const go=()=>{const e=W(hn);return(()=>{var t=po(),n=t.firstChild;return R(n,e),O(r=>{var o=Ot.Logo,s=Ot.Anchor;return o!==r.e&&T(t,r.e=o),s!==r.t&&T(n,r.t=s),r},{e:void 0,t:void 0}),t})()},wo="_Splash_knpkf_1",mo={Splash:wo};var vo=V("<div>");const yo=()=>{const e=W(hn);return(()=>{var t=vo();return R(t,e),O(()=>T(t,mo.Splash)),t})()},ko="_PasswordField_1i8ty_1",xo="_PswSwitch_1i8ty_6",Nt={PasswordField:ko,PswSwitch:xo},_o="_TextField_1ul46_1",bo="_InputLegend_1ul46_23",$o="_InputField_1ul46_19",at={TextField:_o,InputLegend:bo,InputField:$o};var So=V("<div><legend></legend><input>");const St=e=>{const[t,n]=Se(!1),r=()=>n(c=>!0),o=c=>n(u=>c.target.value!==""),s=c=>n(u=>u||(c.target.nextElementSibling.focus(),!0)),l=()=>e.legend,i=()=>e.name,a=()=>e.type;return(()=>{var c=So(),u=c.firstChild,h=u.nextSibling;return ce(u,"click",s),R(u,l),ce(h,"blur",o),ce(h,"focus",r),O(d=>{var g=at.TextField,v=t(),f=at.InputLegend,w=a(),y=at.InputField,m=i();return g!==d.e&&T(c,d.e=g),v!==d.t&&K(c,"input-focus",d.t=v),f!==d.a&&T(u,d.a=f),w!==d.o&&K(h,"type",d.o=w),y!==d.i&&T(h,d.i=y),m!==d.n&&K(h,"name",d.n=m),d},{e:void 0,t:void 0,a:void 0,o:void 0,i:void 0,n:void 0}),c})()},Ao=`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
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
`,Co=`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<svg
   viewBox="0 0 24 24"
   width="24"
   height="24"
   color="#595858"
   fill="none"
   version="1.1"
   id="svg5"
   sodipodi:docname="nosee.svg"
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
     inkscape:zoom="16.574104"
     inkscape:cx="9.2011007"
     inkscape:cy="9.7441165"
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
     style="fill:none;fill-opacity:1;fill-rule:evenodd;stroke:#242423;stroke-width:1.717;stroke-linecap:round;stroke-linejoin:bevel;stroke-opacity:1;stroke-dasharray:none"
     d="M 1.6692014,22.06846 C 3.72919,19.817773 20.672109,4.7842325 22.227815,2.3166395"
     id="path8"
     sodipodi:nodetypes="cc" />
</svg>
`;var Po=V("<div><button type=button>");const vt=e=>{const t=()=>e.name,n=W(Ao),r=W(Co),[o,s]=Se({type:"password",svg:r}),l=()=>s(a=>a.type=="password"?{type:"text",svg:n}:{type:"password",svg:r}),i=()=>e.legend;return(()=>{var a=Po(),c=a.firstChild;return R(a,Te(St,{get type(){return o().type},get name(){return t()},get legend(){return i()??"Password"}}),c),ce(c,"click",l),R(c,()=>o().svg),O(u=>{var h=Nt.PasswordField,d=Nt.PswSwitch;return h!==u.e&&T(a,u.e=h),d!==u.t&&T(c,u.t=d),u},{e:void 0,t:void 0}),a})()},Lo="_TextLine_5y4ha_1",Eo={TextLine:Lo};var To=V("<span>");const pn=e=>{const t=()=>e.children,n=()=>e.cls;return(()=>{var r=To();return R(r,t),O(()=>T(r,` ${Eo.TextLine} ${$t(n())}`)),r})()},Oo="_Button_18bd8_1",No={Button:Oo};var Mo=V("<button>");const be=e=>{const t=()=>e.children,n=()=>e.call,r=()=>e.class;return(()=>{var o=Mo();return ce(o,"click",n()),R(o,t),O(()=>T(o,`${No.Button} ${$t(r())}`)),o})()},Bo="_Anchor_1k1wp_1",jo={Anchor:Bo};var Uo=V("<a>");const Fo=e=>{const t=()=>e.children,n=()=>e.link,r=()=>e.class,o=()=>e.call;return(()=>{var s=Uo();return ce(s,"click",o()),R(s,t),O(l=>{var i=`${jo.Anchor} ${$t(r())}`,a=n();return i!==l.e&&T(s,l.e=i),a!==l.t&&K(s,"href",l.t=a),l},{e:void 0,t:void 0}),s})()},Ro="_Separator_uerzn_1",Mt={Separator:Ro};var Go=V("<span>");const gn=()=>{const[e,t]=Se(!1),n=r=>t(o=>{const s=document.querySelector(`.${Mt.Separator}`);if(s==null)return o;const i=s.parentElement.getBoundingClientRect(),a=r.clientX,c=r.clientY;return a>=i.left&&a<=i.right&&c<=i.bottom&&c>=i.top});return document.body.addEventListener("mousemove",n),(()=>{var r=Go();return O(o=>{var s=Mt.Separator,l=e();return s!==o.e&&T(r,o.e=s),l!==o.t&&K(r,"active",o.t=l),o},{e:void 0,t:void 0}),r})()},zo="_Form_fury4_1",Do="_FormTitle_fury4_27",Vo="_SubmitButton_fury4_31",Io="_Note_fury4_49",qo="_SwapButton_fury4_58",ee={Form:zo,FormTitle:Do,SubmitButton:Vo,Note:Io,SwapButton:qo};var Bt=V("<form>");const wn=e=>{const t=()=>e.action,n=()=>e.method,r=()=>e.children,o=()=>e.target;return o()===void 0?(()=>{var s=Bt();return R(s,r),O(l=>{var i=ee.Form,a=t(),c=n();return i!==l.e&&T(s,l.e=i),a!==l.t&&K(s,"action",l.t=a),c!==l.a&&K(s,"method",l.a=c),l},{e:void 0,t:void 0,a:void 0}),s})():(()=>{var s=Bt();return R(s,r),O(l=>{var i=ee.Form,a=t(),c=n(),u=o();return i!==l.e&&T(s,l.e=i),a!==l.t&&K(s,"action",l.t=a),c!==l.a&&K(s,"method",l.a=c),u!==l.o&&K(s,"target",l.o=u),l},{e:void 0,t:void 0,a:void 0,o:void 0}),s})()},Ho={};var Ko=N("<input type=hidden name=method_override value=put>"),Wo=N("<h4>Register"),Xo=N("<span>Already have an account?"),Yo=N("<span>Login.");const Qo=e=>{const t=()=>e.swap_call;return p(wn,{action:"/auth/user",method:"post",target:"_blank",get children(){return[Ko(),(()=>{var n=Wo();return E(()=>P(n,Ho.FormTitle)),n})(),p(St,{type:"text",name:"user_name",legend:"User Name"}),p(vt,{name:"user_pswd"}),p(vt,{legend:"Verify Password"}),p(fn,{name:"auto_login",legend:" auto login"}),p(be,{get class(){return ee.SubmitButton},children:"Register"}),p(gn,{}),p(pn,{get children(){return[(()=>{var n=Xo();return E(()=>P(n,ee.Note)),n})(),p(be,{get class(){return ee.SwapButton},get call(){return t()},get children(){return Yo()}})]}})]}})};var Zo=N("<h4>Login"),Jo=N("<span>New to hanabi?"),es=N("<span>Register.");const ts=e=>{const t=()=>e.swap_call;return p(wn,{action:"/auth/user",method:"post",target:"_blank",get children(){return[(()=>{var n=Zo();return E(()=>P(n,ee.FormTitle)),n})(),p(St,{type:"text",name:"user_name",legend:"User Name"}),p(vt,{name:"user_pswd"}),p(fn,{name:"persist_session",legend:" persist session"}),p(be,{type:"submit",get class(){return ee.SubmitButton},children:"Login"}),p(gn,{}),p(pn,{get children(){return[(()=>{var n=Jo();return E(()=>P(n,ee.Note)),n})(),p(be,{get class(){return ee.SwapButton},get call(){return t()},get children(){return es()}})]}})]}})};var ns=N("<div>"),rs=N("<div><span>");const[os,ss]=X(0),is=xt({form:os,set_form:ss});function mn(){return It(is)}const ls=()=>{const{user:e,re_user:t}=Ye(),{form:n,set_form:r}=mn(),o=()=>r(s=>Math.abs(1-s));return(()=>{var s=ns();return L(s,p(xe,{get children(){return[p(Q,{get when(){return!ne(e().name)},get children(){return p(xe,{get children(){return[p(Q,{get when(){return n()==0},get children(){return p(ts,{swap_call:o})}}),p(Q,{get when(){return n()==1},get children(){return p(Qo,{swap_call:o})}})]}})}}),p(Q,{get when(){return ne(e().name)},get children(){return p(as,{text:"You are already signed in."})}})]}})),E(()=>P(s,pt.Auth)),s})()},as=e=>{const t=()=>e.text;return(()=>{var n=rs(),r=n.firstChild;return L(r,t),E(o=>{var s=pt.NothingToDo,l=pt.NothingText;return s!==o.e&&P(n,o.e=s),l!==o.t&&P(r,o.t=l),o},{e:void 0,t:void 0}),n})()},cs="_Initializer_o6th1_1",us="_Negotiator_o6th1_21",De={Initializer:cs,Negotiator:us};var vn=N("<div>"),ds=N("<span>&nbsp;ok"),fs=N("<span>&nbsp;err!"),hs=N("<span><span>negotiating user authentication...");const jt=()=>(zt(()=>{const e=document.querySelector(`.${De.Initializer}`);if(e!==void 0){const t=e.parentElement;t.childNodes.length>1&&(t.parentElement.appendChild(e),t.remove())}}),(()=>{var e=vn();return L(e,p(yo,{}),null),L(e,p(ws,{}),null),E(()=>P(e,`${De.Initializer}`)),e})());async function ps(e){return await{text:async()=>e??"scarecrow"}.text()}const gs=e=>{const t=()=>e.re_user,n=()=>e.user;let[r]=An(n().name,ps);return zt(()=>{t()(o=>(ne(r())&&t()(r()),o))}),(()=>{var o=hs();return o.firstChild,L(o,p(xe,{get children(){return[p(Q,{get when(){return ne(n().name)},get children(){return ds()}}),p(Q,{get when(){return!ne(n().name)},get children(){return fs()}})]}}),null),E(()=>P(o,De.Negotiate)),o})()},ws=()=>{const{user:e,re_user:t}=Ye();return console.log("loading app"),(()=>{var n=vn();return L(n,p(gs,{user:e,re_user:t})),E(()=>P(n,De.Negotiator)),n})()},ms="_Menu_rjehr_1",vs="_Entry_rjehr_10",ys="_Path_rjehr_19",$e={Menu:ms,Entry:vs,Path:ys},ks=`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
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
`,xs=`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
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
`,_s=`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
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
`,bs='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 48C141.1 48 48 141.1 48 256s93.1 208 208 208 208-93.1 208-208S370.9 48 256 48zM76 256c0-48.1 18.7-93.3 52.7-127.3S207.9 76 256 76c48.1 0 93.3 18.7 127.3 52.7 32.2 32.2 50.7 74.5 52.6 119.7-8.8-10.3-24.2-24-43.8-24-27.5 0-41.7 25.7-51 42.7-1.4 2.5-2.7 4.9-3.9 7-11.4 19.2-27.3 30-42.5 28.9-13.4-.9-24.8-11.2-32.2-28.8-9.2-22.1-29.1-45.8-52.9-49.2-11.3-1.6-28.1.8-44.7 21.4-3.2 4-6.9 9.4-11.1 15.6-10.4 15.5-26.2 38.8-38.1 40.8-17.3 2.8-30.9-7.5-36.4-12.3-2.2-11.2-3.3-22.8-3.3-34.5z"/></svg>';var At=N("<div>"),yn=N("<span>");const $s=()=>{const{user:e,re_user:t}=Ye(),{form:n,set_form:r}=mn(),o=W(xs),s=W(ks),l=W(_s),i=W(bs),a=()=>{const d=document.body.style;d.getPropertyValue("filter")===""?d.setProperty("filter","invert() contrast(.89)"):d.removeProperty("filter")},c=()=>t(d=>({name:void 0})),u=()=>r(1),h=()=>r(0);return(()=>{var d=At();return L(d,p(xe,{get children(){return[p(Q,{get when(){return!ne(e().name)},get children(){return[p(Ut,{call:a,icon:i,text:"colors"}),p(ct,{link:"/auth",call:h,icon:o,text:"login"}),p(ct,{link:"/auth",call:u,icon:l,text:"register"})]}}),p(Q,{get when(){return ne(e().name)},get children(){return[p(Ut,{call:a,icon:i,text:"colors"}),p(ct,{link:"/",call:c,icon:s,text:"logout"})]}})]}})),E(()=>P(d,$e.Menu)),d})()},ct=e=>{const t=()=>e.icon,n=()=>e.text,r=()=>e.link,o=()=>e.call;return(()=>{var s=At();return L(s,p(Fo,{get link(){return r()},get call(){return o()},get class(){return $e.Path},get children(){return[p(He,{get when(){return t()!==void 0},get children(){return t()}}),(()=>{var l=yn();return L(l,n),l})()]}})),E(()=>P(s,$e.Entry)),s})()},Ut=e=>{const t=()=>e.icon,n=()=>e.text,r=()=>e.call;return(()=>{var o=At();return L(o,p(be,{get call(){return r()},get class(){return $e.Path},get children(){return[p(He,{get when(){return t()!==void 0},get children(){return t()}}),(()=>{var s=yn();return L(s,n),s})()]}})),E(()=>P(o,$e.Entry)),o})()},Ss="_Page_e1i3l_1",As={Page:Ss};var Cs=N("<div>");const Ps=e=>{const t=()=>e.children;return(()=>{var n=Cs();return L(n,p(go,{}),null),L(n,p($s,{}),null),L(n,t,null),E(()=>P(n,As.Page)),n})()},Ls="_App_wcrpu_1",Es={App:Ls};var Ts=N("<div>");function Os(e,t){if(e===null)return;const n=e.parentElement;if(n!==null)return n.className.includes(t)}function Ns(e,t){for(;;){const n=Os(e,t);if(n===void 0)return!1;if(n)return!0;e=e.parentElement}}const Ms=()=>{const{user:e,re_user:t}=Ye();console.log(e());const n=r=>t(o=>{const s=r.target;if(s.className.constructor.name!=="String")return o;let i=!1;return s.className.includes("Auth")&&(i=!0),i||(i=Ns(s,"Auth")),i?{name:o.name==null?"scarecrow":void 0}:o});return(()=>{var r=Ts();return zn(r,"click",n),L(r,p(xe,{get children(){return[p(Q,{get when(){return!ne(e())},get children(){return p(jt,{})}}),p(Q,{get when(){return ne(e())},get children(){return p(Ps,{get children(){return p(pr,{get children(){return[p(ot,{path:"/",component:Pr}),p(ot,{path:"/auth",component:ls}),p(ot,{path:"*",component:jt})]}})}})}})]}})),E(()=>P(r,Es.App)),r})()};Rn(()=>p(Ms,{}),document.body);
