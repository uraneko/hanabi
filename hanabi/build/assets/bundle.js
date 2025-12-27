(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function n(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(s){if(s.ep)return;s.ep=!0;const o=n(s);fetch(s.href,o)}})();const mn=!1,vn=(e,t)=>e===t,at=Symbol("solid-proxy"),yn=typeof Proxy=="function",Oe={equals:vn};let jt=zt;const ne=1,Te=2,Bt={owned:null,cleanups:null,context:null,owner:null},Ze={};var k=null;let Je=null,kn=null,x=null,U=null,te=null,Ve=0;function Nt(e,t){const n=x,r=k,s=e.length===0,o=t===void 0?r:t,l=s?Bt:{owned:null,cleanups:null,context:o?o.context:null,owner:o},i=s?e:()=>e(()=>D(()=>ke(l)));k=l,x=null;try{return Z(i,!0)}finally{x=n,k=r}}function Y(e,t){t=t?Object.assign({},Oe,t):Oe;const n={value:e,observers:null,observerSlots:null,comparator:t.equals||void 0},r=s=>(typeof s=="function"&&(s=s(n.value)),Vt(n,s));return[Gt.bind(n),r]}function xn(e,t,n){const r=De(e,t,!0,ne);we(r)}function L(e,t,n){const r=De(e,t,!1,ne);we(r)}function bn(e,t,n){jt=On;const r=De(e,t,!1,ne);r.user=!0,te?te.push(r):we(r)}function C(e,t,n){n=n?Object.assign({},Oe,n):Oe;const r=De(e,t,!0,0);return r.observers=null,r.observerSlots=null,r.comparator=n.equals||void 0,we(r),Gt.bind(r)}function _n(e){return e&&typeof e=="object"&&"then"in e}function $n(e,t,n){let r,s,o;typeof t=="function"?(r=e,s=t,o={}):(r=!0,s=e,o=t||{});let l=null,i=Ze,a=!1,c="initialValue"in o,u=typeof r=="function"&&C(r);const f=new Set,[h,g]=(o.storage||Y)(o.initialValue),[m,d]=Y(void 0),[w,y]=Y(void 0,{equals:!1}),[v,G]=Y(c?"ready":"unresolved");function P($,S,K,j){return l===$&&(l=null,j!==void 0&&(c=!0),($===i||S===i)&&o.onHydrated&&queueMicrotask(()=>o.onHydrated(j,{value:S})),i=Ze,q(S,K)),S}function q($,S){Z(()=>{S===void 0&&g(()=>$),G(S!==void 0?"errored":c?"ready":"unresolved"),d(S);for(const K of f.keys())K.decrement();f.clear()},!1)}function H(){const $=Pn,S=h(),K=m();if(K!==void 0&&!l)throw K;return x&&x.user,S}function J($=!0){if($!==!1&&a)return;a=!1;const S=u?u():r;if(S==null||S===!1){P(l,D(h));return}let K;const j=i!==Ze?i:D(()=>{try{return s(S,{value:h(),refetching:$})}catch(se){K=se}});if(K!==void 0){P(l,void 0,Pe(K),S);return}else if(!_n(j))return P(l,j,void 0,S),j;return l=j,"v"in j?(j.s===1?P(l,j.v,void 0,S):P(l,void 0,Pe(j.v),S),j):(a=!0,queueMicrotask(()=>a=!1),Z(()=>{G(c?"refreshing":"pending"),y()},!1),j.then(se=>P(j,se,void 0,S),se=>P(j,void 0,Pe(se),S)))}Object.defineProperties(H,{state:{get:()=>v()},error:{get:()=>m()},loading:{get(){const $=v();return $==="pending"||$==="refreshing"}},latest:{get(){if(!c)return H();const $=m();if($&&!l)throw $;return h()}}});let re=k;return u?xn(()=>(re=k,J(!1))):J(!1),[H,{refetch:$=>mt(re,()=>J($)),mutate:g}]}function Sn(e){return Z(e,!1)}function D(e){if(x===null)return e();const t=x;x=null;try{return e()}finally{x=t}}function wt(e,t,n){const r=Array.isArray(e);let s,o=n&&n.defer;return l=>{let i;if(r){i=Array(e.length);for(let c=0;c<e.length;c++)i[c]=e[c]()}else i=e();if(o)return o=!1,l;const a=D(()=>t(i,s,l));return s=i,a}}function Ut(e){return k===null||(k.cleanups===null?k.cleanups=[e]:k.cleanups.push(e)),e}function Ft(){return k}function mt(e,t){const n=k,r=x;k=e,x=null;try{return Z(t,!0)}catch(s){vt(s)}finally{k=n,x=r}}function Cn(e){const t=x,n=k;return Promise.resolve().then(()=>{x=t,k=n;let r;return Z(e,!1),x=k=null,r?r.done:void 0})}const[Lo,Eo]=Y(!1);function Rt(e,t){const n=Symbol("context");return{id:n,Provider:Tn(n),defaultValue:e}}function An(e){let t;return k&&k.context&&(t=k.context[e.id])!==void 0?t:e.defaultValue}function ze(e){const t=C(e),n=C(()=>ct(t()));return n.toArray=()=>{const r=n();return Array.isArray(r)?r:r!=null?[r]:[]},n}let Pn;function Gt(){if(this.sources&&this.state)if(this.state===ne)we(this);else{const e=U;U=null,Z(()=>je(this),!1),U=e}if(x){const e=this.observers?this.observers.length:0;x.sources?(x.sources.push(this),x.sourceSlots.push(e)):(x.sources=[this],x.sourceSlots=[e]),this.observers?(this.observers.push(x),this.observerSlots.push(x.sources.length-1)):(this.observers=[x],this.observerSlots=[x.sources.length-1])}return this.value}function Vt(e,t,n){let r=e.value;return(!e.comparator||!e.comparator(r,t))&&(e.value=t,e.observers&&e.observers.length&&Z(()=>{for(let s=0;s<e.observers.length;s+=1){const o=e.observers[s],l=Je&&Je.running;l&&Je.disposed.has(o),(l?!o.tState:!o.state)&&(o.pure?U.push(o):te.push(o),o.observers&&Dt(o)),l||(o.state=ne)}if(U.length>1e6)throw U=[],new Error},!1)),t}function we(e){if(!e.fn)return;ke(e);const t=Ve;Ln(e,e.value,t)}function Ln(e,t,n){let r;const s=k,o=x;x=k=e;try{r=e.fn(t)}catch(l){return e.pure&&(e.state=ne,e.owned&&e.owned.forEach(ke),e.owned=null),e.updatedAt=n+1,vt(l)}finally{x=o,k=s}(!e.updatedAt||e.updatedAt<=n)&&(e.updatedAt!=null&&"observers"in e?Vt(e,r):e.value=r,e.updatedAt=n)}function De(e,t,n,r=ne,s){const o={fn:e,state:r,updatedAt:null,owned:null,sources:null,sourceSlots:null,cleanups:null,value:t,owner:k,context:k?k.context:null,pure:n};return k===null||k!==Bt&&(k.owned?k.owned.push(o):k.owned=[o]),o}function Me(e){if(e.state===0)return;if(e.state===Te)return je(e);if(e.suspense&&D(e.suspense.inFallback))return e.suspense.effects.push(e);const t=[e];for(;(e=e.owner)&&(!e.updatedAt||e.updatedAt<Ve);)e.state&&t.push(e);for(let n=t.length-1;n>=0;n--)if(e=t[n],e.state===ne)we(e);else if(e.state===Te){const r=U;U=null,Z(()=>je(e,t[0]),!1),U=r}}function Z(e,t){if(U)return e();let n=!1;t||(U=[]),te?n=!0:te=[],Ve++;try{const r=e();return En(n),r}catch(r){n||(te=null),U=null,vt(r)}}function En(e){if(U&&(zt(U),U=null),e)return;const t=te;te=null,t.length&&Z(()=>jt(t),!1)}function zt(e){for(let t=0;t<e.length;t++)Me(e[t])}function On(e){let t,n=0;for(t=0;t<e.length;t++){const r=e[t];r.user?e[n++]=r:Me(r)}for(t=0;t<n;t++)Me(e[t])}function je(e,t){e.state=0;for(let n=0;n<e.sources.length;n+=1){const r=e.sources[n];if(r.sources){const s=r.state;s===ne?r!==t&&(!r.updatedAt||r.updatedAt<Ve)&&Me(r):s===Te&&je(r,t)}}}function Dt(e){for(let t=0;t<e.observers.length;t+=1){const n=e.observers[t];n.state||(n.state=Te,n.pure?U.push(n):te.push(n),n.observers&&Dt(n))}}function ke(e){let t;if(e.sources)for(;e.sources.length;){const n=e.sources.pop(),r=e.sourceSlots.pop(),s=n.observers;if(s&&s.length){const o=s.pop(),l=n.observerSlots.pop();r<s.length&&(o.sourceSlots[l]=r,s[r]=o,n.observerSlots[r]=l)}}if(e.tOwned){for(t=e.tOwned.length-1;t>=0;t--)ke(e.tOwned[t]);delete e.tOwned}if(e.owned){for(t=e.owned.length-1;t>=0;t--)ke(e.owned[t]);e.owned=null}if(e.cleanups){for(t=e.cleanups.length-1;t>=0;t--)e.cleanups[t]();e.cleanups=null}e.state=0}function Pe(e){return e instanceof Error?e:new Error(typeof e=="string"?e:"Unknown error",{cause:e})}function vt(e,t=k){throw Pe(e)}function ct(e){if(typeof e=="function"&&!e.length)return ct(e());if(Array.isArray(e)){const t=[];for(let n=0;n<e.length;n++){const r=ct(e[n]);Array.isArray(r)?t.push.apply(t,r):t.push(r)}return t}return e}function Tn(e,t){return function(r){let s;return L(()=>s=D(()=>(k.context={...k.context,[e]:r.value},ze(()=>r.children))),void 0),s}}function p(e,t){return D(()=>e(t||{}))}function Ce(){return!0}const Mn={get(e,t,n){return t===at?n:e.get(t)},has(e,t){return t===at?!0:e.has(t)},set:Ce,deleteProperty:Ce,getOwnPropertyDescriptor(e,t){return{configurable:!0,enumerable:!0,get(){return e.get(t)},set:Ce,deleteProperty:Ce}},ownKeys(e){return e.keys()}};function et(e){return(e=typeof e=="function"?e():e)?e:{}}function jn(){for(let e=0,t=this.length;e<t;++e){const n=this[e]();if(n!==void 0)return n}}function Bn(...e){let t=!1;for(let l=0;l<e.length;l++){const i=e[l];t=t||!!i&&at in i,e[l]=typeof i=="function"?(t=!0,C(i)):i}if(yn&&t)return new Proxy({get(l){for(let i=e.length-1;i>=0;i--){const a=et(e[i])[l];if(a!==void 0)return a}},has(l){for(let i=e.length-1;i>=0;i--)if(l in et(e[i]))return!0;return!1},keys(){const l=[];for(let i=0;i<e.length;i++)l.push(...Object.keys(et(e[i])));return[...new Set(l)]}},Mn);const n={},r=Object.create(null);for(let l=e.length-1;l>=0;l--){const i=e[l];if(!i)continue;const a=Object.getOwnPropertyNames(i);for(let c=a.length-1;c>=0;c--){const u=a[c];if(u==="__proto__"||u==="constructor")continue;const f=Object.getOwnPropertyDescriptor(i,u);if(!r[u])r[u]=f.get?{enumerable:!0,configurable:!0,get:jn.bind(n[u]=[f.get.bind(i)])}:f.value!==void 0?f:void 0;else{const h=n[u];h&&(f.get?h.push(f.get.bind(i)):f.value!==void 0&&h.push(()=>f.value))}}}const s={},o=Object.keys(r);for(let l=o.length-1;l>=0;l--){const i=o[l],a=r[i];a&&a.get?Object.defineProperty(s,i,a):s[i]=a?a.value:void 0}return s}const It=e=>`Stale read from <${e}>.`;function Ie(e){const t=e.keyed,n=C(()=>e.when,void 0,void 0),r=t?n:C(n,void 0,{equals:(s,o)=>!s==!o});return C(()=>{const s=r();if(s){const o=e.children;return typeof o=="function"&&o.length>0?D(()=>o(t?s:()=>{if(!D(r))throw It("Show");return n()})):o}return e.fallback},void 0,void 0)}function ge(e){const t=ze(()=>e.children),n=C(()=>{const r=t(),s=Array.isArray(r)?r:[r];let o=()=>{};for(let l=0;l<s.length;l++){const i=l,a=s[l],c=o,u=C(()=>c()?void 0:a.when,void 0,void 0),f=a.keyed?u:C(u,void 0,{equals:(h,g)=>!h==!g});o=()=>c()||(f()?[i,u,a]:void 0)}return o});return C(()=>{const r=n()();if(!r)return e.fallback;const[s,o,l]=r,i=l.children;return typeof i=="function"&&i.length>0?D(()=>i(l.keyed?o():()=>{if(D(n)()?.[0]!==s)throw It("Match");return o()})):i},void 0,void 0)}function z(e){return e}const Nn=e=>C(()=>e());function Un(e,t,n){let r=n.length,s=t.length,o=r,l=0,i=0,a=t[s-1].nextSibling,c=null;for(;l<s||i<o;){if(t[l]===n[i]){l++,i++;continue}for(;t[s-1]===n[o-1];)s--,o--;if(s===l){const u=o<r?i?n[i-1].nextSibling:n[o-i]:a;for(;i<o;)e.insertBefore(n[i++],u)}else if(o===i)for(;l<s;)(!c||!c.has(t[l]))&&t[l].remove(),l++;else if(t[l]===n[o-1]&&n[i]===t[s-1]){const u=t[--s].nextSibling;e.insertBefore(n[i++],t[l++].nextSibling),e.insertBefore(n[--o],u),t[s]=n[o]}else{if(!c){c=new Map;let f=i;for(;f<o;)c.set(n[f],f++)}const u=c.get(t[l]);if(u!=null)if(i<u&&u<o){let f=l,h=1,g;for(;++f<s&&f<o&&!((g=c.get(t[f]))==null||g!==u+h);)h++;if(h>u-i){const m=t[l];for(;i<u;)e.insertBefore(n[i++],m)}else e.replaceChild(n[i++],t[l++])}else l++;else t[l++].remove()}}}const $t="_$DX_DELEGATE";function Fn(e,t,n,r={}){let s;return Nt(o=>{s=o,t===document?e():A(t,e(),t.firstChild?null:void 0,n)},r.owner),()=>{s(),t.textContent=""}}function E(e,t,n,r){let s;const o=()=>{const i=document.createElement("template");return i.innerHTML=e,i.content.firstChild},l=()=>(s||(s=o())).cloneNode(!0);return l.cloneNode=l,l}function Rn(e,t=window.document){const n=t[$t]||(t[$t]=new Set);for(let r=0,s=e.length;r<s;r++){const o=e[r];n.has(o)||(n.add(o),t.addEventListener(o,Vn))}}function O(e,t){t==null?e.removeAttribute("class"):e.className=t}function Gn(e,t,n,r){if(Array.isArray(n)){const s=n[0];e.addEventListener(t,n[0]=o=>s.call(e,n[1],o))}else e.addEventListener(t,n,typeof n!="function"&&n)}function A(e,t,n,r){if(n!==void 0&&!r&&(r=[]),typeof t!="function")return Be(e,t,r,n);L(s=>Be(e,t(),s,n),r)}function Vn(e){let t=e.target;const n=`$$${e.type}`,r=e.target,s=e.currentTarget,o=a=>Object.defineProperty(e,"target",{configurable:!0,value:a}),l=()=>{const a=t[n];if(a&&!t.disabled){const c=t[`${n}Data`];if(c!==void 0?a.call(t,c,e):a.call(t,e),e.cancelBubble)return}return t.host&&typeof t.host!="string"&&!t.host._$host&&t.contains(e.target)&&o(t.host),!0},i=()=>{for(;l()&&(t=t._$host||t.parentNode||t.host););};if(Object.defineProperty(e,"currentTarget",{configurable:!0,get(){return t||document}}),e.composedPath){const a=e.composedPath();o(a[0]);for(let c=0;c<a.length-2&&(t=a[c],!!l());c++){if(t._$host){t=t._$host,i();break}if(t.parentNode===s)break}}else i();o(r)}function Be(e,t,n,r,s){for(;typeof n=="function";)n=n();if(t===n)return n;const o=typeof t,l=r!==void 0;if(e=l&&n[0]&&n[0].parentNode||e,o==="string"||o==="number"){if(o==="number"&&(t=t.toString(),t===n))return n;if(l){let i=n[0];i&&i.nodeType===3?i.data!==t&&(i.data=t):i=document.createTextNode(t),n=de(e,n,r,i)}else n!==""&&typeof n=="string"?n=e.firstChild.data=t:n=e.textContent=t}else if(t==null||o==="boolean")n=de(e,n,r);else{if(o==="function")return L(()=>{let i=t();for(;typeof i=="function";)i=i();n=Be(e,i,n,r)}),()=>n;if(Array.isArray(t)){const i=[],a=n&&Array.isArray(n);if(ut(i,t,n,s))return L(()=>n=Be(e,i,n,r,!0)),()=>n;if(i.length===0){if(n=de(e,n,r),l)return n}else a?n.length===0?St(e,i,r):Un(e,n,i):(n&&de(e),St(e,i));n=i}else if(t.nodeType){if(Array.isArray(n)){if(l)return n=de(e,n,r,t);de(e,n,null,t)}else n==null||n===""||!e.firstChild?e.appendChild(t):e.replaceChild(t,e.firstChild);n=t}}return n}function ut(e,t,n,r){let s=!1;for(let o=0,l=t.length;o<l;o++){let i=t[o],a=n&&n[e.length],c;if(!(i==null||i===!0||i===!1))if((c=typeof i)=="object"&&i.nodeType)e.push(i);else if(Array.isArray(i))s=ut(e,i,a)||s;else if(c==="function")if(r){for(;typeof i=="function";)i=i();s=ut(e,Array.isArray(i)?i:[i],Array.isArray(a)?a:[a])||s}else e.push(i),s=!0;else{const u=String(i);a&&a.nodeType===3&&a.data===u?e.push(a):e.push(document.createTextNode(u))}}return s}function St(e,t,n=null){for(let r=0,s=t.length;r<s;r++)e.insertBefore(t[r],n)}function de(e,t,n,r){if(n===void 0)return e.textContent="";const s=r||document.createTextNode("");if(t.length){let o=!1;for(let l=t.length-1;l>=0;l--){const i=t[l];if(s!==i){const a=i.parentNode===e;!o&&!l?a?e.replaceChild(s,i):e.insertBefore(s,n):a&&i.remove()}else o=!0}}else e.insertBefore(s,n);return[s]}const zn=!1;function qt(){let e=new Set;function t(s){return e.add(s),()=>e.delete(s)}let n=!1;function r(s,o){if(n)return!(n=!1);const l={to:s,options:o,defaultPrevented:!1,preventDefault:()=>l.defaultPrevented=!0};for(const i of e)i.listener({...l,from:i.location,retry:a=>{a&&(n=!0),i.navigate(s,{...o,resolve:!1})}});return!l.defaultPrevented}return{subscribe:t,confirm:r}}let dt;function yt(){(!window.history.state||window.history.state._depth==null)&&window.history.replaceState({...window.history.state,_depth:window.history.length-1},""),dt=window.history.state._depth}yt();function Dn(e){return{...e,_depth:window.history.state&&window.history.state._depth}}function In(e,t){let n=!1;return()=>{const r=dt;yt();const s=r==null?null:dt-r;if(n){n=!1;return}s&&t(s)?(n=!0,window.history.go(-s)):e()}}const qn=/^(?:[a-z0-9]+:)?\/\//i,Hn=/^\/+|(\/)\/+$/g,Ht="http://sr";function ye(e,t=!1){const n=e.replace(Hn,"$1");return n?t||/^[?#]/.test(n)?n:"/"+n:""}function Le(e,t,n){if(qn.test(t))return;const r=ye(e),s=n&&ye(n);let o="";return!s||t.startsWith("/")?o=r:s.toLowerCase().indexOf(r.toLowerCase())!==0?o=r+s:o=s,(o||"/")+ye(t,!o)}function Kn(e,t){return ye(e).replace(/\/*(\*.*)?$/g,"")+ye(t)}function Kt(e){const t={};return e.searchParams.forEach((n,r)=>{r in t?Array.isArray(t[r])?t[r].push(n):t[r]=[t[r],n]:t[r]=n}),t}function Wn(e,t,n){const[r,s]=e.split("/*",2),o=r.split("/").filter(Boolean),l=o.length;return i=>{const a=i.split("/").filter(Boolean),c=a.length-l;if(c<0||c>0&&s===void 0&&!t)return null;const u={path:l?"":"/",params:{}},f=h=>n===void 0?void 0:n[h];for(let h=0;h<l;h++){const g=o[h],m=g[0]===":",d=m?a[h]:a[h].toLowerCase(),w=m?g.slice(1):g.toLowerCase();if(m&&tt(d,f(w)))u.params[w]=d;else if(m||!tt(d,w))return null;u.path+=`/${d}`}if(s){const h=c?a.slice(-c).join("/"):"";if(tt(h,f(s)))u.params[s]=h;else return null}return u}}function tt(e,t){const n=r=>r===e;return t===void 0?!0:typeof t=="string"?n(t):typeof t=="function"?t(e):Array.isArray(t)?t.some(n):t instanceof RegExp?t.test(e):!1}function Xn(e){const[t,n]=e.pattern.split("/*",2),r=t.split("/").filter(Boolean);return r.reduce((s,o)=>s+(o.startsWith(":")?2:3),r.length-(n===void 0?0:1))}function Wt(e){const t=new Map,n=Ft();return new Proxy({},{get(r,s){return t.has(s)||mt(n,()=>t.set(s,C(()=>e()[s]))),t.get(s)()},getOwnPropertyDescriptor(){return{enumerable:!0,configurable:!0}},ownKeys(){return Reflect.ownKeys(e())},has(r,s){return s in e()}})}function Xt(e){let t=/(\/?\:[^\/]+)\?/.exec(e);if(!t)return[e];let n=e.slice(0,t.index),r=e.slice(t.index+t[0].length);const s=[n,n+=t[1]];for(;t=/^(\/\:[^\/]+)\?/.exec(r);)s.push(n+=t[1]),r=r.slice(t[0].length);return Xt(r).reduce((o,l)=>[...o,...s.map(i=>i+l)],[])}const Yn=100,Qn=Rt(),Yt=Rt();function Zn(e,t=""){const{component:n,preload:r,load:s,children:o,info:l}=e,i=!o||Array.isArray(o)&&!o.length,a={key:e,component:n,preload:r||s,info:l};return Qt(e.path).reduce((c,u)=>{for(const f of Xt(u)){const h=Kn(t,f);let g=i?h:h.split("/*",1)[0];g=g.split("/").map(m=>m.startsWith(":")||m.startsWith("*")?m:encodeURIComponent(m)).join("/"),c.push({...a,originalPath:u,pattern:g,matcher:Wn(g,!i,e.matchFilters)})}return c},[])}function Jn(e,t=0){return{routes:e,score:Xn(e[e.length-1])*1e4-t,matcher(n){const r=[];for(let s=e.length-1;s>=0;s--){const o=e[s],l=o.matcher(n);if(!l)return null;r.unshift({...l,route:o})}return r}}}function Qt(e){return Array.isArray(e)?e:[e]}function Zt(e,t="",n=[],r=[]){const s=Qt(e);for(let o=0,l=s.length;o<l;o++){const i=s[o];if(i&&typeof i=="object"){i.hasOwnProperty("path")||(i.path="");const a=Zn(i,t);for(const c of a){n.push(c);const u=Array.isArray(i.children)&&i.children.length===0;if(i.children&&!u)Zt(i.children,c.pattern,n,r);else{const f=Jn([...n],r.length);r.push(f)}n.pop()}}}return n.length?r:r.sort((o,l)=>l.score-o.score)}function nt(e,t){for(let n=0,r=e.length;n<r;n++){const s=e[n].matcher(t);if(s)return s}return[]}function er(e,t,n){const r=new URL(Ht),s=C(u=>{const f=e();try{return new URL(f,r)}catch{return console.error(`Invalid path ${f}`),u}},r,{equals:(u,f)=>u.href===f.href}),o=C(()=>s().pathname),l=C(()=>s().search,!0),i=C(()=>s().hash),a=()=>"",c=wt(l,()=>Kt(s()));return{get pathname(){return o()},get search(){return l()},get hash(){return i()},get state(){return t()},get key(){return a()},query:n?n(c):Wt(c)}}let ie;function tr(){return ie}function nr(e,t,n,r={}){const{signal:[s,o],utils:l={}}=e,i=l.parsePath||(b=>b),a=l.renderPath||(b=>b),c=l.beforeLeave||qt(),u=Le("",r.base||"");if(u===void 0)throw new Error(`${u} is not a valid base path`);u&&!s().value&&o({value:u,replace:!0,scroll:!1});const[f,h]=Y(!1);let g;const m=(b,_)=>{_.value===d()&&_.state===y()||(g===void 0&&h(!0),ie=b,g=_,Cn(()=>{g===_&&(w(g.value),v(g.state),q[1](V=>V.filter(ce=>ce.pending)))}).finally(()=>{g===_&&Sn(()=>{ie=void 0,b==="navigate"&&j(g),h(!1),g=void 0})}))},[d,w]=Y(s().value),[y,v]=Y(s().state),G=er(d,y,l.queryWrapper),P=[],q=Y([]),H=C(()=>typeof r.transformUrl=="function"?nt(t(),r.transformUrl(G.pathname)):nt(t(),G.pathname)),J=()=>{const b=H(),_={};for(let V=0;V<b.length;V++)Object.assign(_,b[V].params);return _},re=l.paramsWrapper?l.paramsWrapper(J,t):Wt(J),$={pattern:u,path:()=>u,outlet:()=>null,resolvePath(b){return Le(u,b)}};return L(wt(s,b=>m("native",b),{defer:!0})),{base:$,location:G,params:re,isRouting:f,renderPath:a,parsePath:i,navigatorFactory:K,matches:H,beforeLeave:c,preloadRoute:se,singleFlight:r.singleFlight===void 0?!0:r.singleFlight,submissions:q};function S(b,_,V){D(()=>{if(typeof _=="number"){_&&(l.go?l.go(_):console.warn("Router integration does not support relative routing"));return}const ce=!_||_[0]==="?",{replace:Ye,resolve:ue,scroll:Qe,state:me}={replace:!1,resolve:!ce,scroll:!0,...V},Se=ue?b.resolvePath(_):Le(ce&&G.pathname||"",_);if(Se===void 0)throw new Error(`Path '${_}' is not a routable path`);if(P.length>=Yn)throw new Error("Too many redirects");const _t=d();(Se!==_t||me!==y())&&(zn||c.confirm(Se,V)&&(P.push({value:_t,replace:Ye,scroll:Qe,state:y()}),m("navigate",{value:Se,state:me})))})}function K(b){return b=b||An(Yt)||$,(_,V)=>S(b,_,V)}function j(b){const _=P[0];_&&(o({...b,replace:_.replace,scroll:_.scroll}),P.length=0)}function se(b,_){const V=nt(t(),b.pathname),ce=ie;ie="preload";for(let Ye in V){const{route:ue,params:Qe}=V[Ye];ue.component&&ue.component.preload&&ue.component.preload();const{preload:me}=ue;_&&me&&mt(n(),()=>me({params:Qe,location:{pathname:b.pathname,search:b.search,hash:b.hash,query:Kt(b),state:null,key:""},intent:"preload"}))}ie=ce}}function rr(e,t,n,r){const{base:s,location:o,params:l}=e,{pattern:i,component:a,preload:c}=r().route,u=C(()=>r().path);a&&a.preload&&a.preload();const f=c?c({params:l,location:o,intent:ie||"initial"}):void 0;return{parent:t,pattern:i,path:u,outlet:()=>a?p(a,{params:l,location:o,data:f,get children(){return n()}}):n(),resolvePath(g){return Le(s.path(),g,u())}}}const sr=e=>t=>{const{base:n}=t,r=ze(()=>t.children),s=C(()=>Zt(r(),t.base||""));let o;const l=nr(e,s,()=>o,{base:n,singleFlight:t.singleFlight,transformUrl:t.transformUrl});return e.create&&e.create(l),p(Qn.Provider,{value:l,get children(){return p(or,{routerState:l,get root(){return t.root},get preload(){return t.rootPreload||t.rootLoad},get children(){return[Nn(()=>(o=Ft())&&null),p(ir,{routerState:l,get branches(){return s()}})]}})}})};function or(e){const t=e.routerState.location,n=e.routerState.params,r=C(()=>e.preload&&D(()=>{e.preload({params:n,location:t,intent:tr()||"initial"})}));return p(Ie,{get when(){return e.root},keyed:!0,get fallback(){return e.children},children:s=>p(s,{params:n,location:t,get data(){return r()},get children(){return e.children}})})}function ir(e){const t=[];let n;const r=C(wt(e.routerState.matches,(s,o,l)=>{let i=o&&s.length===o.length;const a=[];for(let c=0,u=s.length;c<u;c++){const f=o&&o[c],h=s[c];l&&f&&h.route.key===f.route.key?a[c]=l[c]:(i=!1,t[c]&&t[c](),Nt(g=>{t[c]=g,a[c]=rr(e.routerState,a[c-1]||e.routerState.base,Ct(()=>r()[c+1]),()=>{const m=e.routerState.matches();return m[c]??m[0]})}))}return t.splice(s.length).forEach(c=>c()),l&&i?l:(n=a[0],a)}));return Ct(()=>r()&&n)()}const Ct=e=>()=>p(Ie,{get when(){return e()},keyed:!0,children:t=>p(Yt.Provider,{value:t,get children(){return t.outlet()}})}),At=e=>{const t=ze(()=>e.children);return Bn(e,{get children(){return t()}})};function lr([e,t],n,r){return[e,r?s=>t(r(s)):t]}function ar(e){let t=!1;const n=s=>typeof s=="string"?{value:s}:s,r=lr(Y(n(e.get()),{equals:(s,o)=>s.value===o.value&&s.state===o.state}),void 0,s=>(!t&&e.set(s),s));return e.init&&Ut(e.init((s=e.get())=>{t=!0,r[1](n(s)),t=!1})),sr({signal:r,create:e.create,utils:e.utils})}function cr(e,t,n){return e.addEventListener(t,n),()=>e.removeEventListener(t,n)}function ur(e,t){const n=e&&document.getElementById(e);n?n.scrollIntoView():t&&window.scrollTo(0,0)}const dr=new Map;function fr(e=!0,t=!1,n="/_server",r){return s=>{const o=s.base.path(),l=s.navigatorFactory(s.base);let i,a;function c(d){return d.namespaceURI==="http://www.w3.org/2000/svg"}function u(d){if(d.defaultPrevented||d.button!==0||d.metaKey||d.altKey||d.ctrlKey||d.shiftKey)return;const w=d.composedPath().find(H=>H instanceof Node&&H.nodeName.toUpperCase()==="A");if(!w||t&&!w.hasAttribute("link"))return;const y=c(w),v=y?w.href.baseVal:w.href;if((y?w.target.baseVal:w.target)||!v&&!w.hasAttribute("state"))return;const P=(w.getAttribute("rel")||"").split(/\s+/);if(w.hasAttribute("download")||P&&P.includes("external"))return;const q=y?new URL(v,document.baseURI):new URL(v);if(!(q.origin!==window.location.origin||o&&q.pathname&&!q.pathname.toLowerCase().startsWith(o.toLowerCase())))return[w,q]}function f(d){const w=u(d);if(!w)return;const[y,v]=w,G=s.parsePath(v.pathname+v.search+v.hash),P=y.getAttribute("state");d.preventDefault(),l(G,{resolve:!1,replace:y.hasAttribute("replace"),scroll:!y.hasAttribute("noscroll"),state:P?JSON.parse(P):void 0})}function h(d){const w=u(d);if(!w)return;const[y,v]=w;r&&(v.pathname=r(v.pathname)),s.preloadRoute(v,y.getAttribute("preload")!=="false")}function g(d){clearTimeout(i);const w=u(d);if(!w)return a=null;const[y,v]=w;a!==y&&(r&&(v.pathname=r(v.pathname)),i=setTimeout(()=>{s.preloadRoute(v,y.getAttribute("preload")!=="false"),a=y},20))}function m(d){if(d.defaultPrevented)return;let w=d.submitter&&d.submitter.hasAttribute("formaction")?d.submitter.getAttribute("formaction"):d.target.getAttribute("action");if(!w)return;if(!w.startsWith("https://action/")){const v=new URL(w,Ht);if(w=s.parsePath(v.pathname+v.search),!w.startsWith(n))return}if(d.target.method.toUpperCase()!=="POST")throw new Error("Only POST forms are supported for Actions");const y=dr.get(w);if(y){d.preventDefault();const v=new FormData(d.target,d.submitter);y.call({r:s,f:d.target},d.target.enctype==="multipart/form-data"?v:new URLSearchParams(v))}}Rn(["click","submit"]),document.addEventListener("click",f),e&&(document.addEventListener("mousemove",g,{passive:!0}),document.addEventListener("focusin",h,{passive:!0}),document.addEventListener("touchstart",h,{passive:!0})),document.addEventListener("submit",m),Ut(()=>{document.removeEventListener("click",f),e&&(document.removeEventListener("mousemove",g),document.removeEventListener("focusin",h),document.removeEventListener("touchstart",h)),document.removeEventListener("submit",m)})}}function hr(e){const t=()=>{const r=window.location.pathname.replace(/^\/+/,"/")+window.location.search,s=window.history.state&&window.history.state._depth&&Object.keys(window.history.state).length===1?void 0:window.history.state;return{value:r+window.location.hash,state:s}},n=qt();return ar({get:t,set({value:r,replace:s,scroll:o,state:l}){s?window.history.replaceState(Dn(l),"",r):window.history.pushState(l,"",r),ur(decodeURIComponent(window.location.hash.slice(1)),o),yt()},init:r=>cr(window,"popstate",In(r,s=>{if(s)return!n.confirm(s);{const o=t();return!n.confirm(o.value,{state:o.state})}})),create:fr(e.preload,e.explicitLinks,e.actionBase,e.transformUrl),utils:{go:r=>window.history.go(r),beforeLeave:n}})(e)}const pr="_App_wcrpu_1",gr={App:pr},wr="_Home_1qp1l_1",mr="_Apps_1qp1l_6",vr="_App_1qp1l_6",yr="_A1_1qp1l_28",kr="_A2_1qp1l_40",xr="_A3_1qp1l_51",br="_A4_1qp1l_64",Q={Home:wr,Apps:mr,App:vr,A1:yr,A2:kr,A3:xr,A4:br},X=e=>new DOMParser().parseFromString(e,"image/svg+xml").querySelector("svg");function kt(e){return e===void 0?"":e.constructor.name=="String"?e:e.join(" ")}const _r='<svg xmlns="http://www.w3.org/2000/svg" class="ionicon" viewBox="0 0 512 512"><path d="M473 39.05a24 24 0 00-25.5-5.46L47.47 185h-.08a24 24 0 001 45.16l.41.13 137.3 58.63a16 16 0 0015.54-3.59L422 80a7.07 7.07 0 0110 10L226.66 310.26a16 16 0 00-3.59 15.54l58.65 137.38c.06.2.12.38.19.57 3.2 9.27 11.3 15.81 21.09 16.25h1a24.63 24.63 0 0023-15.46L478.39 64.62A24 24 0 00473 39.05z"/></svg>',Jt='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 48C141.1 48 48 141.1 48 256s93.1 208 208 208 208-93.1 208-208S370.9 48 256 48zM76 256c0-48.1 18.7-93.3 52.7-127.3S207.9 76 256 76c48.1 0 93.3 18.7 127.3 52.7 32.2 32.2 50.7 74.5 52.6 119.7-8.8-10.3-24.2-24-43.8-24-27.5 0-41.7 25.7-51 42.7-1.4 2.5-2.7 4.9-3.9 7-11.4 19.2-27.3 30-42.5 28.9-13.4-.9-24.8-11.2-32.2-28.8-9.2-22.1-29.1-45.8-52.9-49.2-11.3-1.6-28.1.8-44.7 21.4-3.2 4-6.9 9.4-11.1 15.6-10.4 15.5-26.2 38.8-38.1 40.8-17.3 2.8-30.9-7.5-36.4-12.3-2.2-11.2-3.3-22.8-3.3-34.5z"/></svg>',$r='<svg xmlns="http://www.w3.org/2000/svg" class="ionicon" viewBox="0 0 512 512"><path d="M480 128a64 64 0 00-64-64h-16V48.45c0-8.61-6.62-16-15.23-16.43A16 16 0 00368 48v16H144V48.45c0-8.61-6.62-16-15.23-16.43A16 16 0 00112 48v16H96a64 64 0 00-64 64v12a4 4 0 004 4h440a4 4 0 004-4zM32 416a64 64 0 0064 64h320a64 64 0 0064-64V179a3 3 0 00-3-3H35a3 3 0 00-3 3zm344-208a24 24 0 11-24 24 24 24 0 0124-24zm0 80a24 24 0 11-24 24 24 24 0 0124-24zm-80-80a24 24 0 11-24 24 24 24 0 0124-24zm0 80a24 24 0 11-24 24 24 24 0 0124-24zm0 80a24 24 0 11-24 24 24 24 0 0124-24zm-80-80a24 24 0 11-24 24 24 24 0 0124-24zm0 80a24 24 0 11-24 24 24 24 0 0124-24zm-80-80a24 24 0 11-24 24 24 24 0 0124-24zm0 80a24 24 0 11-24 24 24 24 0 0124-24z"/></svg>',Sr='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M376 64v42.667h-40V64H176v42.667h-40V64H96v384h40v-42.666h40V448h160v-42.666h40V448h40V64h-40zM176 362.667h-40V320h40v42.667zm0-85.333h-40v-42.667h40v42.667zM176 192h-40v-42.666h40V192zm200 170.667h-40V320h40v42.667zm0-85.333h-40v-42.667h40v42.667zM376 192h-40v-42.666h40V192z"/></svg>';var Cr=E("<div>"),Ar=E("<div><div><a href=#></a></div><div><a href=#></a></div><div><a href=#></a></div><div><a href=#>");const Pr=()=>(()=>{var e=Cr();return A(e,p(Lr,{})),L(()=>O(e,Q.Home)),e})(),Lr=()=>{const e=X(Sr),t=X(Jt),n=X(_r),r=X($r);return(()=>{var s=Ar(),o=s.firstChild,l=o.firstChild,i=o.nextSibling,a=i.firstChild,c=i.nextSibling,u=c.firstChild,f=c.nextSibling,h=f.firstChild;return A(l,r),A(a,n),A(u,t),A(h,e),L(g=>{var m=Q.Apps,d=`${Q.A1} ${Q.App}`,w=`${Q.A2} ${Q.App}`,y=`${Q.A3} ${Q.App}`,v=`${Q.A4} ${Q.App}`;return m!==g.e&&O(s,g.e=m),d!==g.t&&O(o,g.t=d),w!==g.a&&O(i,g.a=w),y!==g.o&&O(c,g.o=y),v!==g.i&&O(f,g.i=v),g},{e:void 0,t:void 0,a:void 0,o:void 0,i:void 0}),s})()},Er="_Auth_w4vpc_1",Or={Auth:Er},Tr=!1,Mr=(e,t)=>e===t,ft=Symbol("solid-proxy"),jr=typeof Proxy=="function",Ne={equals:Mr};let Br=sn;const ae=1,Ue=2,Nr={};var N=null;let rt=null,Ur=null,B=null,F=null,le=null,qe=0;function $e(e,t){t=t?Object.assign({},Ne,t):Ne;const n={value:e,observers:null,observerSlots:null,comparator:t.equals||void 0},r=s=>(typeof s=="function"&&(s=s(n.value)),tn(n,s));return[en.bind(n),r]}function T(e,t,n){const r=nn(e,t,!1,ae);He(r)}function he(e,t,n){n=n?Object.assign({},Ne,n):Ne;const r=nn(e,t,!0,0);return r.observers=null,r.observerSlots=null,r.comparator=n.equals||void 0,He(r),en.bind(r)}function xe(e){if(B===null)return e();const t=B;B=null;try{return e()}finally{B=t}}function Fr(e,t){const n=Symbol("context");return{id:n,Provider:Ir(n),defaultValue:e}}function Rr(e){let t;return N&&N.context&&(t=N.context[e.id])!==void 0?t:e.defaultValue}function Gr(e){const t=he(e),n=he(()=>ht(t()));return n.toArray=()=>{const r=n();return Array.isArray(r)?r:r!=null?[r]:[]},n}function en(){if(this.sources&&this.state)if(this.state===ae)He(this);else{const e=F;F=null,Ke(()=>Fe(this)),F=e}if(B){const e=this.observers?this.observers.length:0;B.sources?(B.sources.push(this),B.sourceSlots.push(e)):(B.sources=[this],B.sourceSlots=[e]),this.observers?(this.observers.push(B),this.observerSlots.push(B.sources.length-1)):(this.observers=[B],this.observerSlots=[B.sources.length-1])}return this.value}function tn(e,t,n){let r=e.value;return(!e.comparator||!e.comparator(r,t))&&(e.value=t,e.observers&&e.observers.length&&Ke(()=>{for(let s=0;s<e.observers.length;s+=1){const o=e.observers[s],l=rt&&rt.running;l&&rt.disposed.has(o),(l?!o.tState:!o.state)&&(o.pure?F.push(o):le.push(o),o.observers&&on(o)),l||(o.state=ae)}if(F.length>1e6)throw F=[],new Error})),t}function He(e){if(!e.fn)return;Re(e);const t=qe;Vr(e,e.value,t)}function Vr(e,t,n){let r;const s=N,o=B;B=N=e;try{r=e.fn(t)}catch(l){return e.pure&&(e.state=ae,e.owned&&e.owned.forEach(Re),e.owned=null),e.updatedAt=n+1,ln(l)}finally{B=o,N=s}(!e.updatedAt||e.updatedAt<=n)&&(e.updatedAt!=null&&"observers"in e?tn(e,r):e.value=r,e.updatedAt=n)}function nn(e,t,n,r=ae,s){const o={fn:e,state:r,updatedAt:null,owned:null,sources:null,sourceSlots:null,cleanups:null,value:t,owner:N,context:N?N.context:null,pure:n};return N===null||N!==Nr&&(N.owned?N.owned.push(o):N.owned=[o]),o}function rn(e){if(e.state===0)return;if(e.state===Ue)return Fe(e);if(e.suspense&&xe(e.suspense.inFallback))return e.suspense.effects.push(e);const t=[e];for(;(e=e.owner)&&(!e.updatedAt||e.updatedAt<qe);)e.state&&t.push(e);for(let n=t.length-1;n>=0;n--)if(e=t[n],e.state===ae)He(e);else if(e.state===Ue){const r=F;F=null,Ke(()=>Fe(e,t[0])),F=r}}function Ke(e,t){if(F)return e();let n=!1;F=[],le?n=!0:le=[],qe++;try{const r=e();return zr(n),r}catch(r){n||(le=null),F=null,ln(r)}}function zr(e){if(F&&(sn(F),F=null),e)return;const t=le;le=null,t.length&&Ke(()=>Br(t))}function sn(e){for(let t=0;t<e.length;t++)rn(e[t])}function Fe(e,t){e.state=0;for(let n=0;n<e.sources.length;n+=1){const r=e.sources[n];if(r.sources){const s=r.state;s===ae?r!==t&&(!r.updatedAt||r.updatedAt<qe)&&rn(r):s===Ue&&Fe(r,t)}}}function on(e){for(let t=0;t<e.observers.length;t+=1){const n=e.observers[t];n.state||(n.state=Ue,n.pure?F.push(n):le.push(n),n.observers&&on(n))}}function Re(e){let t;if(e.sources)for(;e.sources.length;){const n=e.sources.pop(),r=e.sourceSlots.pop(),s=n.observers;if(s&&s.length){const o=s.pop(),l=n.observerSlots.pop();r<s.length&&(o.sourceSlots[l]=r,s[r]=o,n.observerSlots[r]=l)}}if(e.tOwned){for(t=e.tOwned.length-1;t>=0;t--)Re(e.tOwned[t]);delete e.tOwned}if(e.owned){for(t=e.owned.length-1;t>=0;t--)Re(e.owned[t]);e.owned=null}if(e.cleanups){for(t=e.cleanups.length-1;t>=0;t--)e.cleanups[t]();e.cleanups=null}e.state=0}function Dr(e){return e instanceof Error?e:new Error(typeof e=="string"?e:"Unknown error",{cause:e})}function ln(e,t=N){throw Dr(e)}function ht(e){if(typeof e=="function"&&!e.length)return ht(e());if(Array.isArray(e)){const t=[];for(let n=0;n<e.length;n++){const r=ht(e[n]);Array.isArray(r)?t.push.apply(t,r):t.push(r)}return t}return e}function Ir(e,t){return function(r){let s;return T(()=>s=xe(()=>(N.context={...N.context,[e]:r.value},Gr(()=>r.children))),void 0),s}}function Ee(e,t){return xe(()=>e(t||{}))}function Ae(){return!0}const qr={get(e,t,n){return t===ft?n:e.get(t)},has(e,t){return t===ft?!0:e.has(t)},set:Ae,deleteProperty:Ae,getOwnPropertyDescriptor(e,t){return{configurable:!0,enumerable:!0,get(){return e.get(t)},set:Ae,deleteProperty:Ae}},ownKeys(e){return e.keys()}};function st(e){return(e=typeof e=="function"?e():e)?e:{}}function Hr(){for(let e=0,t=this.length;e<t;++e){const n=this[e]();if(n!==void 0)return n}}function Kr(...e){let t=!1;for(let l=0;l<e.length;l++){const i=e[l];t=t||!!i&&ft in i,e[l]=typeof i=="function"?(t=!0,he(i)):i}if(jr&&t)return new Proxy({get(l){for(let i=e.length-1;i>=0;i--){const a=st(e[i])[l];if(a!==void 0)return a}},has(l){for(let i=e.length-1;i>=0;i--)if(l in st(e[i]))return!0;return!1},keys(){const l=[];for(let i=0;i<e.length;i++)l.push(...Object.keys(st(e[i])));return[...new Set(l)]}},qr);const n={},r=Object.create(null);for(let l=e.length-1;l>=0;l--){const i=e[l];if(!i)continue;const a=Object.getOwnPropertyNames(i);for(let c=a.length-1;c>=0;c--){const u=a[c];if(u==="__proto__"||u==="constructor")continue;const f=Object.getOwnPropertyDescriptor(i,u);if(!r[u])r[u]=f.get?{enumerable:!0,configurable:!0,get:Hr.bind(n[u]=[f.get.bind(i)])}:f.value!==void 0?f:void 0;else{const h=n[u];h&&(f.get?h.push(f.get.bind(i)):f.value!==void 0&&h.push(()=>f.value))}}}const s={},o=Object.keys(r);for(let l=o.length-1;l>=0;l--){const i=o[l],a=r[i];a&&a.get?Object.defineProperty(s,i,a):s[i]=a?a.value:void 0}return s}const Wr=e=>`Stale read from <${e}>.`;function ot(e){const t=e.keyed,n=he(()=>e.when,void 0,void 0),r=t?n:he(n,void 0,{equals:(s,o)=>!s==!o});return he(()=>{const s=r();if(s){const o=e.children;return typeof o=="function"&&o.length>0?xe(()=>o(t?s:()=>{if(!xe(r))throw Wr("Show");return n()})):o}return e.fallback},void 0,void 0)}const[Xr,Yr]=$e(0),Qr=Fr({user:Xr,re_user:Yr});function We(){return Rr(Qr)}function Zr(e,t,n){let r=n.length,s=t.length,o=r,l=0,i=0,a=t[s-1].nextSibling,c=null;for(;l<s||i<o;){if(t[l]===n[i]){l++,i++;continue}for(;t[s-1]===n[o-1];)s--,o--;if(s===l){const u=o<r?i?n[i-1].nextSibling:n[o-i]:a;for(;i<o;)e.insertBefore(n[i++],u)}else if(o===i)for(;l<s;)(!c||!c.has(t[l]))&&t[l].remove(),l++;else if(t[l]===n[o-1]&&n[i]===t[s-1]){const u=t[--s].nextSibling;e.insertBefore(n[i++],t[l++].nextSibling),e.insertBefore(n[--o],u),t[s]=n[o]}else{if(!c){c=new Map;let f=i;for(;f<o;)c.set(n[f],f++)}const u=c.get(t[l]);if(u!=null)if(i<u&&u<o){let f=l,h=1,g;for(;++f<s&&f<o&&!((g=c.get(t[f]))==null||g!==u+h);)h++;if(h>u-i){const m=t[l];for(;i<u;)e.insertBefore(n[i++],m)}else e.replaceChild(n[i++],t[l++])}else l++;else t[l++].remove()}}}function I(e,t,n,r){let s;const o=()=>{const i=document.createElement("template");return i.innerHTML=e,i.content.firstChild},l=()=>(s||(s=o())).cloneNode(!0);return l.cloneNode=l,l}function W(e,t,n){n==null?e.removeAttribute(t):e.setAttribute(t,n)}function M(e,t){t==null?e.removeAttribute("class"):e.className=t}function pe(e,t,n,r){if(Array.isArray(n)){const s=n[0];e.addEventListener(t,n[0]=o=>s.call(e,n[1],o))}else e.addEventListener(t,n,typeof n!="function"&&n)}function oe(e,t,n){n!=null?e.style.setProperty(t,n):e.style.removeProperty(t)}function R(e,t,n,r){if(n!==void 0&&!r&&(r=[]),typeof t!="function")return Ge(e,t,r,n);T(s=>Ge(e,t(),s,n),r)}function Ge(e,t,n,r,s){for(;typeof n=="function";)n=n();if(t===n)return n;const o=typeof t,l=r!==void 0;if(e=l&&n[0]&&n[0].parentNode||e,o==="string"||o==="number"){if(o==="number"&&(t=t.toString(),t===n))return n;if(l){let i=n[0];i&&i.nodeType===3?i.data!==t&&(i.data=t):i=document.createTextNode(t),n=fe(e,n,r,i)}else n!==""&&typeof n=="string"?n=e.firstChild.data=t:n=e.textContent=t}else if(t==null||o==="boolean")n=fe(e,n,r);else{if(o==="function")return T(()=>{let i=t();for(;typeof i=="function";)i=i();n=Ge(e,i,n,r)}),()=>n;if(Array.isArray(t)){const i=[],a=n&&Array.isArray(n);if(pt(i,t,n,s))return T(()=>n=Ge(e,i,n,r,!0)),()=>n;if(i.length===0){if(n=fe(e,n,r),l)return n}else a?n.length===0?Pt(e,i,r):Zr(e,n,i):(n&&fe(e),Pt(e,i));n=i}else if(t.nodeType){if(Array.isArray(n)){if(l)return n=fe(e,n,r,t);fe(e,n,null,t)}else n==null||n===""||!e.firstChild?e.appendChild(t):e.replaceChild(t,e.firstChild);n=t}}return n}function pt(e,t,n,r){let s=!1;for(let o=0,l=t.length;o<l;o++){let i=t[o],a=n&&n[e.length],c;if(!(i==null||i===!0||i===!1))if((c=typeof i)=="object"&&i.nodeType)e.push(i);else if(Array.isArray(i))s=pt(e,i,a)||s;else if(c==="function")if(r){for(;typeof i=="function";)i=i();s=pt(e,Array.isArray(i)?i:[i],Array.isArray(a)?a:[a])||s}else e.push(i),s=!0;else{const u=String(i);a&&a.nodeType===3&&a.data===u?e.push(a):e.push(document.createTextNode(u))}}return s}function Pt(e,t,n=null){for(let r=0,s=t.length;r<s;r++)e.insertBefore(t[r],n)}function fe(e,t,n,r){if(n===void 0)return e.textContent="";const s=r||document.createTextNode("");if(t.length){let o=!1;for(let l=t.length-1;l>=0;l--){const i=t[l];if(s!==i){const a=i.parentNode===e;!o&&!l?a?e.replaceChild(s,i):e.insertBefore(s,n):a&&i.remove()}else o=!0}}else e.insertBefore(s,n);return[s]}const Jr="_CheckBox_99a5h_1",es="_Box_99a5h_17",ts="_TickMark_99a5h_37",ns="_Content_99a5h_38",rs="_Postman_99a5h_54",ve={CheckBox:Jr,Box:es,TickMark:ts,Content:ns,Postman:rs};var ss=I("<input type=hidden>"),os=I("<span>"),is=I("<legend>"),ls=I("<div><div style=background:transparent><div>");const as={width:.6,height:.6,state:!1,tick:"",accent:"#485d6c"},an=e=>{const t=Kr(as,e),n=()=>t.state,r=()=>t.accent,s=()=>t.tick,o=()=>t.width,l=()=>t.height,i=()=>t.legend,a=()=>t.name,[c,u]=$e(n()),f=()=>u(h=>!c());return(()=>{var h=ls(),g=h.firstChild,m=g.firstChild;return pe(h,"click",f),R(h,Ee(ot,{get when(){return a()!==void 0},get children(){var d=ss();return T(w=>{var y=ve.Postman,v=a();return y!==w.e&&M(d,w.e=y),v!==w.t&&W(d,"name",w.t=v),w},{e:void 0,t:void 0}),T(()=>d.value=c()),d}}),g),R(m,Ee(ot,{get when(){return s()!==""},get children(){var d=os();return R(d,s),T(()=>M(d,ve.TickMark)),d}})),R(h,Ee(ot,{get when(){return i()!==void 0},get children(){var d=is();return R(d,i),T(w=>oe(d,"color",r())),d}}),null),T(d=>{var w=ve.CheckBox,y=ve.Box,v=`0.11em solid ${r()}`,G=`${o()+.19}em`,P=`${l()+.19}em`,q=c(),H=ve.Content,J=r(),re=`${o()}em`,$=`${l()}em`;return w!==d.e&&M(h,d.e=w),y!==d.t&&M(g,d.t=y),v!==d.a&&oe(g,"border",d.a=v),G!==d.o&&oe(g,"width",d.o=G),P!==d.i&&oe(g,"height",d.i=P),q!==d.n&&W(g,"box-state",d.n=q),H!==d.s&&M(m,d.s=H),J!==d.h&&oe(m,"background",d.h=J),re!==d.r&&oe(m,"width",d.r=re),$!==d.d&&oe(m,"height",d.d=$),d},{e:void 0,t:void 0,a:void 0,o:void 0,i:void 0,n:void 0,s:void 0,h:void 0,r:void 0,d:void 0}),h})()},cs="_Logo_nas3v_1",us="_Anchor_nas3v_7",Lt={Logo:cs,Anchor:us},cn=`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
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
`;var ds=I("<div><a href=/>");const fs=()=>{const e=X(cn);return(()=>{var t=ds(),n=t.firstChild;return R(n,e),T(r=>{var s=Lt.Logo,o=Lt.Anchor;return s!==r.e&&M(t,r.e=s),o!==r.t&&M(n,r.t=o),r},{e:void 0,t:void 0}),t})()},hs="_Splash_knpkf_1",ps={Splash:hs};var gs=I("<div>");const ws=()=>{const e=X(cn);return(()=>{var t=gs();return R(t,e),T(()=>M(t,ps.Splash)),t})()},ms="_PasswordField_1i8ty_1",vs="_PswSwitch_1i8ty_6",Et={PasswordField:ms,PswSwitch:vs},ys="_TextField_1s4vm_1",ks="_InputLegend_1s4vm_23",xs="_InputField_1s4vm_19",it={TextField:ys,InputLegend:ks,InputField:xs};var bs=I("<div><legend></legend><input>");const xt=e=>{const[t,n]=$e(!1),r=()=>n(c=>!0),s=c=>n(u=>c.target.value!==""),o=c=>n(u=>u||(c.target.nextElementSibling.focus(),!0)),l=()=>e.legend,i=()=>e.name,a=()=>e.type;return(()=>{var c=bs(),u=c.firstChild,f=u.nextSibling;return pe(u,"click",o),R(u,l),pe(f,"blur",s),pe(f,"focus",r),T(h=>{var g=it.TextField,m=t(),d=it.InputLegend,w=a(),y=it.InputField,v=i();return g!==h.e&&M(c,h.e=g),m!==h.t&&W(c,"input-focus",h.t=m),d!==h.a&&M(u,h.a=d),w!==h.o&&W(f,"type",h.o=w),y!==h.i&&M(f,h.i=y),v!==h.n&&W(f,"name",h.n=v),h},{e:void 0,t:void 0,a:void 0,o:void 0,i:void 0,n:void 0}),c})()},_s=`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
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
`,$s=`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
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
`;var Ss=I("<div><button type=button>");const gt=e=>{const t=()=>e.name,n=X(_s),r=X($s),[s,o]=$e({type:"password",svg:r}),l=()=>o(a=>a.type=="password"?{type:"text",svg:n}:{type:"password",svg:r}),i=()=>e.legend;return(()=>{var a=Ss(),c=a.firstChild;return R(a,Ee(xt,{get type(){return s().type},get name(){return t()},get legend(){return i()??"Password"}}),c),pe(c,"click",l),R(c,()=>s().svg),T(u=>{var f=Et.PasswordField,h=Et.PswSwitch;return f!==u.e&&M(a,u.e=f),h!==u.t&&M(c,u.t=h),u},{e:void 0,t:void 0}),a})()},Cs="_TextLine_5y4ha_1",As={TextLine:Cs};var Ps=I("<span>");const un=e=>{const t=()=>e.children,n=()=>e.cls;return(()=>{var r=Ps();return R(r,t),T(()=>M(r,` ${As.TextLine} ${kt(n())}`)),r})()},Ls="_Button_18bd8_1",Es={Button:Ls};var Os=I("<button>");const be=e=>{const t=()=>e.children,n=()=>e.call,r=()=>e.class;return(()=>{var s=Os();return pe(s,"click",n()),R(s,t),T(()=>M(s,`${Es.Button} ${kt(r())}`)),s})()},Ts="_Anchor_1k1wp_1",Ms={Anchor:Ts};var js=I("<a>");const Bs=e=>{const t=()=>e.children,n=()=>e.link,r=()=>e.class;return(()=>{var s=js();return R(s,t),T(o=>{var l=`${Ms.Anchor} ${kt(r())}`,i=n();return l!==o.e&&M(s,o.e=l),i!==o.t&&W(s,"href",o.t=i),o},{e:void 0,t:void 0}),s})()},Ns="_Separator_uerzn_1",Ot={Separator:Ns};var Us=I("<span>");const dn=()=>{const[e,t]=$e(!1),n=r=>t(s=>{const o=document.querySelector(`.${Ot.Separator}`);if(o==null)return s;const i=o.parentElement.getBoundingClientRect(),a=r.clientX,c=r.clientY;return a>=i.left&&a<=i.right&&c<=i.bottom&&c>=i.top});return document.body.addEventListener("mousemove",n),(()=>{var r=Us();return T(s=>{var o=Ot.Separator,l=e();return o!==s.e&&M(r,s.e=o),l!==s.t&&W(r,"active",s.t=l),s},{e:void 0,t:void 0}),r})()},Fs="_Form_fury4_1",Rs="_FormTitle_fury4_27",Gs="_SubmitButton_fury4_31",Vs="_Note_fury4_49",zs="_SwapButton_fury4_58",ee={Form:Fs,FormTitle:Rs,SubmitButton:Gs,Note:Vs,SwapButton:zs};var Tt=I("<form>");const fn=e=>{const t=()=>e.action,n=()=>e.method,r=()=>e.children,s=()=>e.target;return s()===void 0?(()=>{var o=Tt();return R(o,r),T(l=>{var i=ee.Form,a=t(),c=n();return i!==l.e&&M(o,l.e=i),a!==l.t&&W(o,"action",l.t=a),c!==l.a&&W(o,"method",l.a=c),l},{e:void 0,t:void 0,a:void 0}),o})():(()=>{var o=Tt();return R(o,r),T(l=>{var i=ee.Form,a=t(),c=n(),u=s();return i!==l.e&&M(o,l.e=i),a!==l.t&&W(o,"action",l.t=a),c!==l.a&&W(o,"method",l.a=c),u!==l.o&&W(o,"target",l.o=u),l},{e:void 0,t:void 0,a:void 0,o:void 0}),o})()},Ds={};var Is=E("<input type=hidden name=method_override value=put>"),qs=E("<h4>Register"),Hs=E("<span>Already have an account?"),Ks=E("<span>Login.");const Ws=e=>{const t=()=>e.swap_call;return p(fn,{action:"/auth/user",method:"post",target:"_blank",get children(){return[Is(),(()=>{var n=qs();return L(()=>O(n,Ds.FormTitle)),n})(),p(xt,{type:"text",name:"user_name",legend:"User Name"}),p(gt,{name:"user_pswd"}),p(gt,{legend:"Verify Password"}),p(an,{name:"auto_login",legend:" auto login"}),p(be,{get class(){return ee.SubmitButton},children:"Register"}),p(dn,{}),p(un,{get children(){return[(()=>{var n=Hs();return L(()=>O(n,ee.Note)),n})(),p(be,{get class(){return ee.SwapButton},get call(){return t()},get children(){return Ks()}})]}})]}})};var Xs=E("<h4>Login"),Ys=E("<span>New to hanabi?"),Qs=E("<span>Register.");const Zs=e=>{const t=()=>e.swap_call;return p(fn,{action:"/auth/user",method:"post",target:"_blank",get children(){return[(()=>{var n=Xs();return L(()=>O(n,ee.FormTitle)),n})(),p(xt,{type:"text",name:"user_name",legend:"User Name"}),p(gt,{name:"user_pswd"}),p(an,{name:"persist_session",legend:" persist session"}),p(be,{type:"submit",get class(){return ee.SubmitButton},children:"Login"}),p(dn,{}),p(un,{get children(){return[(()=>{var n=Ys();return L(()=>O(n,ee.Note)),n})(),p(be,{get class(){return ee.SwapButton},get call(){return t()},get children(){return Qs()}})]}})]}})};var Js=E("<span>you are already signed in."),eo=E("<div>");const to=()=>{const{user:e,re_user:t}=We(),[n,r]=Y(0),s=()=>r(o=>Math.abs(1-o));return(()=>{var o=eo();return A(o,p(ge,{get children(){return[p(z,{get when(){return e()==1},get children(){return p(ge,{get children(){return[p(z,{get when(){return n()==0},get children(){return p(Zs,{swap_call:s})}}),p(z,{get when(){return n()==1},get children(){return p(Ws,{swap_call:s})}})]}})}}),p(z,{get when(){return[2,4].includes(e())},get children(){return Js()}})]}})),L(()=>O(o,Or.Auth)),o})()},no="_Initializer_11j2w_1",ro="_Negotiator_11j2w_19",so="_Validate_11j2w_38",Xe={Initializer:no,Negotiator:ro,Validate:so};var hn=E("<div>"),pn=E("<span>&nbsp;err!"),gn=E("<span>&nbsp;ok"),oo=E("<span><span>validating local params..."),io=E("<span><span>negotiating user authentication...");const lo=()=>(()=>{var e=hn();return A(e,p(ws,{}),null),A(e,p(ho,{}),null),L(()=>O(e,`${Xe.Initializer}`)),e})();function ao(e){return[0,1,2,4].includes(e())}const co=e=>{let n=ao(e.user);return(()=>{var r=oo();return r.firstChild,A(r,p(ge,{get children(){return[p(z,{when:!n,get children(){return pn()}}),p(z,{when:n,get children(){return gn()}})]}}),null),L(()=>O(r,Xe.Validate)),r})()};async function uo(e){const n=await(await fetch(`/auth/user?user=${e}`,{method:"GET",credentials:"include"})).text();return Number(n)}function Mt(e){return e!==void 0&&e.constructor.name==="Number"&&!Number.isNaN(e)}const fo=e=>{const t=()=>e.re_user,n=()=>e.user;let[r]=$n(n(),uo);return bn(()=>{t()(s=>r()===void 0?s:Number(r()))}),(()=>{var s=io();return s.firstChild,A(s,p(ge,{get children(){return[p(z,{get when(){return Mt(r())},get children(){return gn()}}),p(z,{get when(){return!Mt(r())},get children(){return pn()}})]}}),null),L(()=>O(s,Xe.Negotiate)),s})()},ho=()=>{const{user:e,re_user:t}=We();return console.log("loading app"),(()=>{var n=hn();return A(n,p(co,{user:e}),null),A(n,p(fo,{user:e,re_user:t}),null),L(()=>O(n,Xe.Negotiator)),n})()},po="_Menu_rjehr_1",go="_Entry_rjehr_10",wo="_Path_rjehr_19",_e={Menu:po,Entry:go,Path:wo},mo=`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
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
`,vo=`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
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
`,yo=`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
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
`;var bt=E("<div>"),wn=E("<span>");const ko=()=>{const{user:e,re_user:t}=We(),n=X(vo),r=X(mo),s=X(yo),o=X(Jt),l=()=>{const i=document.body.style;i.getPropertyValue("filter")===""?i.setProperty("filter","invert() contrast(.89)"):i.removeProperty("filter")};return(()=>{var i=bt();return A(i,p(ge,{get children(){return[p(z,{get when(){return e()==1},get children(){return[p(xo,{call:l,icon:o,text:"colors"}),p(lt,{link:"/auth",icon:n,text:"login"}),p(lt,{link:"/auth",icon:s,text:"register"})]}}),p(z,{get when(){return[2,4].includes(e())},get children(){return p(lt,{link:"/",icon:r,text:"login"})}})]}})),L(()=>O(i,_e.Menu)),i})()},lt=e=>{const t=()=>e.icon,n=()=>e.text,r=()=>e.link;return(()=>{var s=bt();return A(s,p(Bs,{get link(){return r()},get class(){return _e.Path},get children(){return[p(Ie,{get when(){return t()!==void 0},get children(){return t()}}),(()=>{var o=wn();return A(o,n),o})()]}})),L(()=>O(s,_e.Entry)),s})()},xo=e=>{const t=()=>e.icon,n=()=>e.text,r=()=>e.call;return(()=>{var s=bt();return A(s,p(be,{get call(){return r()},get class(){return _e.Path},get children(){return[p(Ie,{get when(){return t()!==void 0},get children(){return t()}}),(()=>{var o=wn();return A(o,n),o})()]}})),L(()=>O(s,_e.Entry)),s})()},bo="_Page_e1i3l_1",_o={Page:bo};var $o=E("<div>");const So=e=>{const t=()=>e.children;return(()=>{var n=$o();return A(n,p(fs,{}),null),A(n,p(ko,{}),null),A(n,t,null),L(()=>O(n,_o.Page)),n})()};var Co=E("<span>Error: User authentication error. Try clearing all page caches then refreshing."),Ao=E("<div>");const Po=()=>{const{user:e,re_user:t}=We();return console.log(e()),(()=>{var n=Ao();return Gn(n,"click",()=>console.log(e())),A(n,p(So,{get children(){return p(ge,{get children(){return[p(z,{get when(){return e()==0},get children(){return p(lo,{})}}),p(z,{get when(){return[1,2,4].includes(e())},get children(){return p(hr,{get children(){return[p(At,{path:"/",component:Pr}),p(At,{path:"/auth",component:to})]}})}}),p(z,{get when(){return e()>4||e()<0},get children(){return Co()}})]}})}})),L(()=>O(n,gr.App)),n})()};Fn(()=>p(Po,{}),document.body);
