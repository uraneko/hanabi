(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function n(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(s){if(s.ep)return;s.ep=!0;const o=n(s);fetch(s.href,o)}})();const pn=!1,gn=(e,t)=>e===t,lt=Symbol("solid-proxy"),wn=typeof Proxy=="function",Oe={equals:gn};let Mt=zt;const ne=1,Te=2,Bt={owned:null,cleanups:null,context:null,owner:null},Qe={};var k=null;let Ze=null,mn=null,_=null,F=null,te=null,ze=0;function Ut(e,t){const n=_,r=k,s=e.length===0,o=t===void 0?r:t,l=s?Bt:{owned:null,cleanups:null,context:o?o.context:null,owner:o},i=s?e:()=>e(()=>V(()=>ve(l)));k=l,_=null;try{return Z(i,!0)}finally{_=n,k=r}}function X(e,t){t=t?Object.assign({},Oe,t):Oe;const n={value:e,observers:null,observerSlots:null,comparator:t.equals||void 0},r=s=>(typeof s=="function"&&(s=s(n.value)),Gt(n,s));return[Nt.bind(n),r]}function yn(e,t,n){const r=De(e,t,!0,ne);ge(r)}function L(e,t,n){const r=De(e,t,!1,ne);ge(r)}function vn(e,t,n){Mt=Pn;const r=De(e,t,!1,ne);r.user=!0,te?te.push(r):ge(r)}function C(e,t,n){n=n?Object.assign({},Oe,n):Oe;const r=De(e,t,!0,0);return r.observers=null,r.observerSlots=null,r.comparator=n.equals||void 0,ge(r),Nt.bind(r)}function kn(e){return e&&typeof e=="object"&&"then"in e}function _n(e,t,n){let r,s,o;typeof t=="function"?(r=e,s=t,o={}):(r=!0,s=e,o=t||{});let l=null,i=Qe,a=!1,c="initialValue"in o,u=typeof r=="function"&&C(r);const f=new Set,[h,g]=(o.storage||X)(o.initialValue),[m,d]=X(void 0),[w,v]=X(void 0,{equals:!1}),[y,G]=X(c?"ready":"unresolved");function A($,S,H,B){return l===$&&(l=null,B!==void 0&&(c=!0),($===i||S===i)&&o.onHydrated&&queueMicrotask(()=>o.onHydrated(B,{value:S})),i=Qe,I(S,H)),S}function I($,S){Z(()=>{S===void 0&&g(()=>$),G(S!==void 0?"errored":c?"ready":"unresolved"),d(S);for(const H of f.keys())H.decrement();f.clear()},!1)}function q(){const $=Sn,S=h(),H=m();if(H!==void 0&&!l)throw H;return _&&_.user,S}function J($=!0){if($!==!1&&a)return;a=!1;const S=u?u():r;if(S==null||S===!1){A(l,V(h));return}let H;const B=i!==Qe?i:V(()=>{try{return s(S,{value:h(),refetching:$})}catch(se){H=se}});if(H!==void 0){A(l,void 0,Pe(H),S);return}else if(!kn(B))return A(l,B,void 0,S),B;return l=B,"v"in B?(B.s===1?A(l,B.v,void 0,S):A(l,void 0,Pe(B.v),S),B):(a=!0,queueMicrotask(()=>a=!1),Z(()=>{G(c?"refreshing":"pending"),v()},!1),B.then(se=>A(B,se,void 0,S),se=>A(B,void 0,Pe(se),S)))}Object.defineProperties(q,{state:{get:()=>y()},error:{get:()=>m()},loading:{get(){const $=y();return $==="pending"||$==="refreshing"}},latest:{get(){if(!c)return q();const $=m();if($&&!l)throw $;return h()}}});let re=k;return u?yn(()=>(re=k,J(!1))):J(!1),[q,{refetch:$=>wt(re,()=>J($)),mutate:g}]}function xn(e){return Z(e,!1)}function V(e){if(_===null)return e();const t=_;_=null;try{return e()}finally{_=t}}function gt(e,t,n){const r=Array.isArray(e);let s,o=n&&n.defer;return l=>{let i;if(r){i=Array(e.length);for(let c=0;c<e.length;c++)i[c]=e[c]()}else i=e();if(o)return o=!1,l;const a=V(()=>t(i,s,l));return s=i,a}}function jt(e){return k===null||(k.cleanups===null?k.cleanups=[e]:k.cleanups.push(e)),e}function Ft(){return k}function wt(e,t){const n=k,r=_;k=e,_=null;try{return Z(t,!0)}catch(s){mt(s)}finally{k=n,_=r}}function bn(e){const t=_,n=k;return Promise.resolve().then(()=>{_=t,k=n;let r;return Z(e,!1),_=k=null,r?r.done:void 0})}const[So,Co]=X(!1);function Rt(e,t){const n=Symbol("context");return{id:n,Provider:Ln(n),defaultValue:e}}function $n(e){let t;return k&&k.context&&(t=k.context[e.id])!==void 0?t:e.defaultValue}function Ve(e){const t=C(e),n=C(()=>at(t()));return n.toArray=()=>{const r=n();return Array.isArray(r)?r:r!=null?[r]:[]},n}let Sn;function Nt(){if(this.sources&&this.state)if(this.state===ne)ge(this);else{const e=F;F=null,Z(()=>Be(this),!1),F=e}if(_){const e=this.observers?this.observers.length:0;_.sources?(_.sources.push(this),_.sourceSlots.push(e)):(_.sources=[this],_.sourceSlots=[e]),this.observers?(this.observers.push(_),this.observerSlots.push(_.sources.length-1)):(this.observers=[_],this.observerSlots=[_.sources.length-1])}return this.value}function Gt(e,t,n){let r=e.value;return(!e.comparator||!e.comparator(r,t))&&(e.value=t,e.observers&&e.observers.length&&Z(()=>{for(let s=0;s<e.observers.length;s+=1){const o=e.observers[s],l=Ze&&Ze.running;l&&Ze.disposed.has(o),(l?!o.tState:!o.state)&&(o.pure?F.push(o):te.push(o),o.observers&&Vt(o)),l||(o.state=ne)}if(F.length>1e6)throw F=[],new Error},!1)),t}function ge(e){if(!e.fn)return;ve(e);const t=ze;Cn(e,e.value,t)}function Cn(e,t,n){let r;const s=k,o=_;_=k=e;try{r=e.fn(t)}catch(l){return e.pure&&(e.state=ne,e.owned&&e.owned.forEach(ve),e.owned=null),e.updatedAt=n+1,mt(l)}finally{_=o,k=s}(!e.updatedAt||e.updatedAt<=n)&&(e.updatedAt!=null&&"observers"in e?Gt(e,r):e.value=r,e.updatedAt=n)}function De(e,t,n,r=ne,s){const o={fn:e,state:r,updatedAt:null,owned:null,sources:null,sourceSlots:null,cleanups:null,value:t,owner:k,context:k?k.context:null,pure:n};return k===null||k!==Bt&&(k.owned?k.owned.push(o):k.owned=[o]),o}function Me(e){if(e.state===0)return;if(e.state===Te)return Be(e);if(e.suspense&&V(e.suspense.inFallback))return e.suspense.effects.push(e);const t=[e];for(;(e=e.owner)&&(!e.updatedAt||e.updatedAt<ze);)e.state&&t.push(e);for(let n=t.length-1;n>=0;n--)if(e=t[n],e.state===ne)ge(e);else if(e.state===Te){const r=F;F=null,Z(()=>Be(e,t[0]),!1),F=r}}function Z(e,t){if(F)return e();let n=!1;t||(F=[]),te?n=!0:te=[],ze++;try{const r=e();return An(n),r}catch(r){n||(te=null),F=null,mt(r)}}function An(e){if(F&&(zt(F),F=null),e)return;const t=te;te=null,t.length&&Z(()=>Mt(t),!1)}function zt(e){for(let t=0;t<e.length;t++)Me(e[t])}function Pn(e){let t,n=0;for(t=0;t<e.length;t++){const r=e[t];r.user?e[n++]=r:Me(r)}for(t=0;t<n;t++)Me(e[t])}function Be(e,t){e.state=0;for(let n=0;n<e.sources.length;n+=1){const r=e.sources[n];if(r.sources){const s=r.state;s===ne?r!==t&&(!r.updatedAt||r.updatedAt<ze)&&Me(r):s===Te&&Be(r,t)}}}function Vt(e){for(let t=0;t<e.observers.length;t+=1){const n=e.observers[t];n.state||(n.state=Te,n.pure?F.push(n):te.push(n),n.observers&&Vt(n))}}function ve(e){let t;if(e.sources)for(;e.sources.length;){const n=e.sources.pop(),r=e.sourceSlots.pop(),s=n.observers;if(s&&s.length){const o=s.pop(),l=n.observerSlots.pop();r<s.length&&(o.sourceSlots[l]=r,s[r]=o,n.observerSlots[r]=l)}}if(e.tOwned){for(t=e.tOwned.length-1;t>=0;t--)ve(e.tOwned[t]);delete e.tOwned}if(e.owned){for(t=e.owned.length-1;t>=0;t--)ve(e.owned[t]);e.owned=null}if(e.cleanups){for(t=e.cleanups.length-1;t>=0;t--)e.cleanups[t]();e.cleanups=null}e.state=0}function Pe(e){return e instanceof Error?e:new Error(typeof e=="string"?e:"Unknown error",{cause:e})}function mt(e,t=k){throw Pe(e)}function at(e){if(typeof e=="function"&&!e.length)return at(e());if(Array.isArray(e)){const t=[];for(let n=0;n<e.length;n++){const r=at(e[n]);Array.isArray(r)?t.push.apply(t,r):t.push(r)}return t}return e}function Ln(e,t){return function(r){let s;return L(()=>s=V(()=>(k.context={...k.context,[e]:r.value},Ve(()=>r.children))),void 0),s}}function p(e,t){return V(()=>e(t||{}))}function Ce(){return!0}const En={get(e,t,n){return t===lt?n:e.get(t)},has(e,t){return t===lt?!0:e.has(t)},set:Ce,deleteProperty:Ce,getOwnPropertyDescriptor(e,t){return{configurable:!0,enumerable:!0,get(){return e.get(t)},set:Ce,deleteProperty:Ce}},ownKeys(e){return e.keys()}};function Je(e){return(e=typeof e=="function"?e():e)?e:{}}function On(){for(let e=0,t=this.length;e<t;++e){const n=this[e]();if(n!==void 0)return n}}function Tn(...e){let t=!1;for(let l=0;l<e.length;l++){const i=e[l];t=t||!!i&&lt in i,e[l]=typeof i=="function"?(t=!0,C(i)):i}if(wn&&t)return new Proxy({get(l){for(let i=e.length-1;i>=0;i--){const a=Je(e[i])[l];if(a!==void 0)return a}},has(l){for(let i=e.length-1;i>=0;i--)if(l in Je(e[i]))return!0;return!1},keys(){const l=[];for(let i=0;i<e.length;i++)l.push(...Object.keys(Je(e[i])));return[...new Set(l)]}},En);const n={},r=Object.create(null);for(let l=e.length-1;l>=0;l--){const i=e[l];if(!i)continue;const a=Object.getOwnPropertyNames(i);for(let c=a.length-1;c>=0;c--){const u=a[c];if(u==="__proto__"||u==="constructor")continue;const f=Object.getOwnPropertyDescriptor(i,u);if(!r[u])r[u]=f.get?{enumerable:!0,configurable:!0,get:On.bind(n[u]=[f.get.bind(i)])}:f.value!==void 0?f:void 0;else{const h=n[u];h&&(f.get?h.push(f.get.bind(i)):f.value!==void 0&&h.push(()=>f.value))}}}const s={},o=Object.keys(r);for(let l=o.length-1;l>=0;l--){const i=o[l],a=r[i];a&&a.get?Object.defineProperty(s,i,a):s[i]=a?a.value:void 0}return s}const Dt=e=>`Stale read from <${e}>.`;function Ie(e){const t=e.keyed,n=C(()=>e.when,void 0,void 0),r=t?n:C(n,void 0,{equals:(s,o)=>!s==!o});return C(()=>{const s=r();if(s){const o=e.children;return typeof o=="function"&&o.length>0?V(()=>o(t?s:()=>{if(!V(r))throw Dt("Show");return n()})):o}return e.fallback},void 0,void 0)}function ke(e){const t=Ve(()=>e.children),n=C(()=>{const r=t(),s=Array.isArray(r)?r:[r];let o=()=>{};for(let l=0;l<s.length;l++){const i=l,a=s[l],c=o,u=C(()=>c()?void 0:a.when,void 0,void 0),f=a.keyed?u:C(u,void 0,{equals:(h,g)=>!h==!g});o=()=>c()||(f()?[i,u,a]:void 0)}return o});return C(()=>{const r=n()();if(!r)return e.fallback;const[s,o,l]=r,i=l.children;return typeof i=="function"&&i.length>0?V(()=>i(l.keyed?o():()=>{if(V(n)()?.[0]!==s)throw Dt("Match");return o()})):i},void 0,void 0)}function Q(e){return e}const Mn=e=>C(()=>e());function Bn(e,t,n){let r=n.length,s=t.length,o=r,l=0,i=0,a=t[s-1].nextSibling,c=null;for(;l<s||i<o;){if(t[l]===n[i]){l++,i++;continue}for(;t[s-1]===n[o-1];)s--,o--;if(s===l){const u=o<r?i?n[i-1].nextSibling:n[o-i]:a;for(;i<o;)e.insertBefore(n[i++],u)}else if(o===i)for(;l<s;)(!c||!c.has(t[l]))&&t[l].remove(),l++;else if(t[l]===n[o-1]&&n[i]===t[s-1]){const u=t[--s].nextSibling;e.insertBefore(n[i++],t[l++].nextSibling),e.insertBefore(n[--o],u),t[s]=n[o]}else{if(!c){c=new Map;let f=i;for(;f<o;)c.set(n[f],f++)}const u=c.get(t[l]);if(u!=null)if(i<u&&u<o){let f=l,h=1,g;for(;++f<s&&f<o&&!((g=c.get(t[f]))==null||g!==u+h);)h++;if(h>u-i){const m=t[l];for(;i<u;)e.insertBefore(n[i++],m)}else e.replaceChild(n[i++],t[l++])}else l++;else t[l++].remove()}}}const $t="_$DX_DELEGATE";function Un(e,t,n,r={}){let s;return Ut(o=>{s=o,t===document?e():P(t,e(),t.firstChild?null:void 0,n)},r.owner),()=>{s(),t.textContent=""}}function M(e,t,n,r){let s;const o=()=>{const i=document.createElement("template");return i.innerHTML=e,i.content.firstChild},l=()=>(s||(s=o())).cloneNode(!0);return l.cloneNode=l,l}function jn(e,t=window.document){const n=t[$t]||(t[$t]=new Set);for(let r=0,s=e.length;r<s;r++){const o=e[r];n.has(o)||(n.add(o),t.addEventListener(o,Rn))}}function E(e,t){t==null?e.removeAttribute("class"):e.className=t}function Fn(e,t,n,r){if(Array.isArray(n)){const s=n[0];e.addEventListener(t,n[0]=o=>s.call(e,n[1],o))}else e.addEventListener(t,n,typeof n!="function"&&n)}function P(e,t,n,r){if(n!==void 0&&!r&&(r=[]),typeof t!="function")return Ue(e,t,r,n);L(s=>Ue(e,t(),s,n),r)}function Rn(e){let t=e.target;const n=`$$${e.type}`,r=e.target,s=e.currentTarget,o=a=>Object.defineProperty(e,"target",{configurable:!0,value:a}),l=()=>{const a=t[n];if(a&&!t.disabled){const c=t[`${n}Data`];if(c!==void 0?a.call(t,c,e):a.call(t,e),e.cancelBubble)return}return t.host&&typeof t.host!="string"&&!t.host._$host&&t.contains(e.target)&&o(t.host),!0},i=()=>{for(;l()&&(t=t._$host||t.parentNode||t.host););};if(Object.defineProperty(e,"currentTarget",{configurable:!0,get(){return t||document}}),e.composedPath){const a=e.composedPath();o(a[0]);for(let c=0;c<a.length-2&&(t=a[c],!!l());c++){if(t._$host){t=t._$host,i();break}if(t.parentNode===s)break}}else i();o(r)}function Ue(e,t,n,r,s){for(;typeof n=="function";)n=n();if(t===n)return n;const o=typeof t,l=r!==void 0;if(e=l&&n[0]&&n[0].parentNode||e,o==="string"||o==="number"){if(o==="number"&&(t=t.toString(),t===n))return n;if(l){let i=n[0];i&&i.nodeType===3?i.data!==t&&(i.data=t):i=document.createTextNode(t),n=de(e,n,r,i)}else n!==""&&typeof n=="string"?n=e.firstChild.data=t:n=e.textContent=t}else if(t==null||o==="boolean")n=de(e,n,r);else{if(o==="function")return L(()=>{let i=t();for(;typeof i=="function";)i=i();n=Ue(e,i,n,r)}),()=>n;if(Array.isArray(t)){const i=[],a=n&&Array.isArray(n);if(ct(i,t,n,s))return L(()=>n=Ue(e,i,n,r,!0)),()=>n;if(i.length===0){if(n=de(e,n,r),l)return n}else a?n.length===0?St(e,i,r):Bn(e,n,i):(n&&de(e),St(e,i));n=i}else if(t.nodeType){if(Array.isArray(n)){if(l)return n=de(e,n,r,t);de(e,n,null,t)}else n==null||n===""||!e.firstChild?e.appendChild(t):e.replaceChild(t,e.firstChild);n=t}}return n}function ct(e,t,n,r){let s=!1;for(let o=0,l=t.length;o<l;o++){let i=t[o],a=n&&n[e.length],c;if(!(i==null||i===!0||i===!1))if((c=typeof i)=="object"&&i.nodeType)e.push(i);else if(Array.isArray(i))s=ct(e,i,a)||s;else if(c==="function")if(r){for(;typeof i=="function";)i=i();s=ct(e,Array.isArray(i)?i:[i],Array.isArray(a)?a:[a])||s}else e.push(i),s=!0;else{const u=String(i);a&&a.nodeType===3&&a.data===u?e.push(a):e.push(document.createTextNode(u))}}return s}function St(e,t,n=null){for(let r=0,s=t.length;r<s;r++)e.insertBefore(t[r],n)}function de(e,t,n,r){if(n===void 0)return e.textContent="";const s=r||document.createTextNode("");if(t.length){let o=!1;for(let l=t.length-1;l>=0;l--){const i=t[l];if(s!==i){const a=i.parentNode===e;!o&&!l?a?e.replaceChild(s,i):e.insertBefore(s,n):a&&i.remove()}else o=!0}}else e.insertBefore(s,n);return[s]}const Nn=!1;function It(){let e=new Set;function t(s){return e.add(s),()=>e.delete(s)}let n=!1;function r(s,o){if(n)return!(n=!1);const l={to:s,options:o,defaultPrevented:!1,preventDefault:()=>l.defaultPrevented=!0};for(const i of e)i.listener({...l,from:i.location,retry:a=>{a&&(n=!0),i.navigate(s,{...o,resolve:!1})}});return!l.defaultPrevented}return{subscribe:t,confirm:r}}let ut;function yt(){(!window.history.state||window.history.state._depth==null)&&window.history.replaceState({...window.history.state,_depth:window.history.length-1},""),ut=window.history.state._depth}yt();function Gn(e){return{...e,_depth:window.history.state&&window.history.state._depth}}function zn(e,t){let n=!1;return()=>{const r=ut;yt();const s=r==null?null:ut-r;if(n){n=!1;return}s&&t(s)?(n=!0,window.history.go(-s)):e()}}const Vn=/^(?:[a-z0-9]+:)?\/\//i,Dn=/^\/+|(\/)\/+$/g,qt="http://sr";function ye(e,t=!1){const n=e.replace(Dn,"$1");return n?t||/^[?#]/.test(n)?n:"/"+n:""}function Le(e,t,n){if(Vn.test(t))return;const r=ye(e),s=n&&ye(n);let o="";return!s||t.startsWith("/")?o=r:s.toLowerCase().indexOf(r.toLowerCase())!==0?o=r+s:o=s,(o||"/")+ye(t,!o)}function In(e,t){return ye(e).replace(/\/*(\*.*)?$/g,"")+ye(t)}function Ht(e){const t={};return e.searchParams.forEach((n,r)=>{r in t?Array.isArray(t[r])?t[r].push(n):t[r]=[t[r],n]:t[r]=n}),t}function qn(e,t,n){const[r,s]=e.split("/*",2),o=r.split("/").filter(Boolean),l=o.length;return i=>{const a=i.split("/").filter(Boolean),c=a.length-l;if(c<0||c>0&&s===void 0&&!t)return null;const u={path:l?"":"/",params:{}},f=h=>n===void 0?void 0:n[h];for(let h=0;h<l;h++){const g=o[h],m=g[0]===":",d=m?a[h]:a[h].toLowerCase(),w=m?g.slice(1):g.toLowerCase();if(m&&et(d,f(w)))u.params[w]=d;else if(m||!et(d,w))return null;u.path+=`/${d}`}if(s){const h=c?a.slice(-c).join("/"):"";if(et(h,f(s)))u.params[s]=h;else return null}return u}}function et(e,t){const n=r=>r===e;return t===void 0?!0:typeof t=="string"?n(t):typeof t=="function"?t(e):Array.isArray(t)?t.some(n):t instanceof RegExp?t.test(e):!1}function Hn(e){const[t,n]=e.pattern.split("/*",2),r=t.split("/").filter(Boolean);return r.reduce((s,o)=>s+(o.startsWith(":")?2:3),r.length-(n===void 0?0:1))}function Kt(e){const t=new Map,n=Ft();return new Proxy({},{get(r,s){return t.has(s)||wt(n,()=>t.set(s,C(()=>e()[s]))),t.get(s)()},getOwnPropertyDescriptor(){return{enumerable:!0,configurable:!0}},ownKeys(){return Reflect.ownKeys(e())},has(r,s){return s in e()}})}function Wt(e){let t=/(\/?\:[^\/]+)\?/.exec(e);if(!t)return[e];let n=e.slice(0,t.index),r=e.slice(t.index+t[0].length);const s=[n,n+=t[1]];for(;t=/^(\/\:[^\/]+)\?/.exec(r);)s.push(n+=t[1]),r=r.slice(t[0].length);return Wt(r).reduce((o,l)=>[...o,...s.map(i=>i+l)],[])}const Kn=100,Wn=Rt(),Xt=Rt();function Xn(e,t=""){const{component:n,preload:r,load:s,children:o,info:l}=e,i=!o||Array.isArray(o)&&!o.length,a={key:e,component:n,preload:r||s,info:l};return Yt(e.path).reduce((c,u)=>{for(const f of Wt(u)){const h=In(t,f);let g=i?h:h.split("/*",1)[0];g=g.split("/").map(m=>m.startsWith(":")||m.startsWith("*")?m:encodeURIComponent(m)).join("/"),c.push({...a,originalPath:u,pattern:g,matcher:qn(g,!i,e.matchFilters)})}return c},[])}function Yn(e,t=0){return{routes:e,score:Hn(e[e.length-1])*1e4-t,matcher(n){const r=[];for(let s=e.length-1;s>=0;s--){const o=e[s],l=o.matcher(n);if(!l)return null;r.unshift({...l,route:o})}return r}}}function Yt(e){return Array.isArray(e)?e:[e]}function Qt(e,t="",n=[],r=[]){const s=Yt(e);for(let o=0,l=s.length;o<l;o++){const i=s[o];if(i&&typeof i=="object"){i.hasOwnProperty("path")||(i.path="");const a=Xn(i,t);for(const c of a){n.push(c);const u=Array.isArray(i.children)&&i.children.length===0;if(i.children&&!u)Qt(i.children,c.pattern,n,r);else{const f=Yn([...n],r.length);r.push(f)}n.pop()}}}return n.length?r:r.sort((o,l)=>l.score-o.score)}function tt(e,t){for(let n=0,r=e.length;n<r;n++){const s=e[n].matcher(t);if(s)return s}return[]}function Qn(e,t,n){const r=new URL(qt),s=C(u=>{const f=e();try{return new URL(f,r)}catch{return console.error(`Invalid path ${f}`),u}},r,{equals:(u,f)=>u.href===f.href}),o=C(()=>s().pathname),l=C(()=>s().search,!0),i=C(()=>s().hash),a=()=>"",c=gt(l,()=>Ht(s()));return{get pathname(){return o()},get search(){return l()},get hash(){return i()},get state(){return t()},get key(){return a()},query:n?n(c):Kt(c)}}let ie;function Zn(){return ie}function Jn(e,t,n,r={}){const{signal:[s,o],utils:l={}}=e,i=l.parsePath||(x=>x),a=l.renderPath||(x=>x),c=l.beforeLeave||It(),u=Le("",r.base||"");if(u===void 0)throw new Error(`${u} is not a valid base path`);u&&!s().value&&o({value:u,replace:!0,scroll:!1});const[f,h]=X(!1);let g;const m=(x,b)=>{b.value===d()&&b.state===v()||(g===void 0&&h(!0),ie=x,g=b,bn(()=>{g===b&&(w(g.value),y(g.state),I[1](z=>z.filter(ce=>ce.pending)))}).finally(()=>{g===b&&xn(()=>{ie=void 0,x==="navigate"&&B(g),h(!1),g=void 0})}))},[d,w]=X(s().value),[v,y]=X(s().state),G=Qn(d,v,l.queryWrapper),A=[],I=X([]),q=C(()=>typeof r.transformUrl=="function"?tt(t(),r.transformUrl(G.pathname)):tt(t(),G.pathname)),J=()=>{const x=q(),b={};for(let z=0;z<x.length;z++)Object.assign(b,x[z].params);return b},re=l.paramsWrapper?l.paramsWrapper(J,t):Kt(J),$={pattern:u,path:()=>u,outlet:()=>null,resolvePath(x){return Le(u,x)}};return L(gt(s,x=>m("native",x),{defer:!0})),{base:$,location:G,params:re,isRouting:f,renderPath:a,parsePath:i,navigatorFactory:H,matches:q,beforeLeave:c,preloadRoute:se,singleFlight:r.singleFlight===void 0?!0:r.singleFlight,submissions:I};function S(x,b,z){V(()=>{if(typeof b=="number"){b&&(l.go?l.go(b):console.warn("Router integration does not support relative routing"));return}const ce=!b||b[0]==="?",{replace:Xe,resolve:ue,scroll:Ye,state:we}={replace:!1,resolve:!ce,scroll:!0,...z},Se=ue?x.resolvePath(b):Le(ce&&G.pathname||"",b);if(Se===void 0)throw new Error(`Path '${b}' is not a routable path`);if(A.length>=Kn)throw new Error("Too many redirects");const bt=d();(Se!==bt||we!==v())&&(Nn||c.confirm(Se,z)&&(A.push({value:bt,replace:Xe,scroll:Ye,state:v()}),m("navigate",{value:Se,state:we})))})}function H(x){return x=x||$n(Xt)||$,(b,z)=>S(x,b,z)}function B(x){const b=A[0];b&&(o({...x,replace:b.replace,scroll:b.scroll}),A.length=0)}function se(x,b){const z=tt(t(),x.pathname),ce=ie;ie="preload";for(let Xe in z){const{route:ue,params:Ye}=z[Xe];ue.component&&ue.component.preload&&ue.component.preload();const{preload:we}=ue;b&&we&&wt(n(),()=>we({params:Ye,location:{pathname:x.pathname,search:x.search,hash:x.hash,query:Ht(x),state:null,key:""},intent:"preload"}))}ie=ce}}function er(e,t,n,r){const{base:s,location:o,params:l}=e,{pattern:i,component:a,preload:c}=r().route,u=C(()=>r().path);a&&a.preload&&a.preload();const f=c?c({params:l,location:o,intent:ie||"initial"}):void 0;return{parent:t,pattern:i,path:u,outlet:()=>a?p(a,{params:l,location:o,data:f,get children(){return n()}}):n(),resolvePath(g){return Le(s.path(),g,u())}}}const tr=e=>t=>{const{base:n}=t,r=Ve(()=>t.children),s=C(()=>Qt(r(),t.base||""));let o;const l=Jn(e,s,()=>o,{base:n,singleFlight:t.singleFlight,transformUrl:t.transformUrl});return e.create&&e.create(l),p(Wn.Provider,{value:l,get children(){return p(nr,{routerState:l,get root(){return t.root},get preload(){return t.rootPreload||t.rootLoad},get children(){return[Mn(()=>(o=Ft())&&null),p(rr,{routerState:l,get branches(){return s()}})]}})}})};function nr(e){const t=e.routerState.location,n=e.routerState.params,r=C(()=>e.preload&&V(()=>{e.preload({params:n,location:t,intent:Zn()||"initial"})}));return p(Ie,{get when(){return e.root},keyed:!0,get fallback(){return e.children},children:s=>p(s,{params:n,location:t,get data(){return r()},get children(){return e.children}})})}function rr(e){const t=[];let n;const r=C(gt(e.routerState.matches,(s,o,l)=>{let i=o&&s.length===o.length;const a=[];for(let c=0,u=s.length;c<u;c++){const f=o&&o[c],h=s[c];l&&f&&h.route.key===f.route.key?a[c]=l[c]:(i=!1,t[c]&&t[c](),Ut(g=>{t[c]=g,a[c]=er(e.routerState,a[c-1]||e.routerState.base,Ct(()=>r()[c+1]),()=>{const m=e.routerState.matches();return m[c]??m[0]})}))}return t.splice(s.length).forEach(c=>c()),l&&i?l:(n=a[0],a)}));return Ct(()=>r()&&n)()}const Ct=e=>()=>p(Ie,{get when(){return e()},keyed:!0,children:t=>p(Xt.Provider,{value:t,get children(){return t.outlet()}})}),At=e=>{const t=Ve(()=>e.children);return Tn(e,{get children(){return t()}})};function sr([e,t],n,r){return[e,r?s=>t(r(s)):t]}function or(e){let t=!1;const n=s=>typeof s=="string"?{value:s}:s,r=sr(X(n(e.get()),{equals:(s,o)=>s.value===o.value&&s.state===o.state}),void 0,s=>(!t&&e.set(s),s));return e.init&&jt(e.init((s=e.get())=>{t=!0,r[1](n(s)),t=!1})),tr({signal:r,create:e.create,utils:e.utils})}function ir(e,t,n){return e.addEventListener(t,n),()=>e.removeEventListener(t,n)}function lr(e,t){const n=e&&document.getElementById(e);n?n.scrollIntoView():t&&window.scrollTo(0,0)}const ar=new Map;function cr(e=!0,t=!1,n="/_server",r){return s=>{const o=s.base.path(),l=s.navigatorFactory(s.base);let i,a;function c(d){return d.namespaceURI==="http://www.w3.org/2000/svg"}function u(d){if(d.defaultPrevented||d.button!==0||d.metaKey||d.altKey||d.ctrlKey||d.shiftKey)return;const w=d.composedPath().find(q=>q instanceof Node&&q.nodeName.toUpperCase()==="A");if(!w||t&&!w.hasAttribute("link"))return;const v=c(w),y=v?w.href.baseVal:w.href;if((v?w.target.baseVal:w.target)||!y&&!w.hasAttribute("state"))return;const A=(w.getAttribute("rel")||"").split(/\s+/);if(w.hasAttribute("download")||A&&A.includes("external"))return;const I=v?new URL(y,document.baseURI):new URL(y);if(!(I.origin!==window.location.origin||o&&I.pathname&&!I.pathname.toLowerCase().startsWith(o.toLowerCase())))return[w,I]}function f(d){const w=u(d);if(!w)return;const[v,y]=w,G=s.parsePath(y.pathname+y.search+y.hash),A=v.getAttribute("state");d.preventDefault(),l(G,{resolve:!1,replace:v.hasAttribute("replace"),scroll:!v.hasAttribute("noscroll"),state:A?JSON.parse(A):void 0})}function h(d){const w=u(d);if(!w)return;const[v,y]=w;r&&(y.pathname=r(y.pathname)),s.preloadRoute(y,v.getAttribute("preload")!=="false")}function g(d){clearTimeout(i);const w=u(d);if(!w)return a=null;const[v,y]=w;a!==v&&(r&&(y.pathname=r(y.pathname)),i=setTimeout(()=>{s.preloadRoute(y,v.getAttribute("preload")!=="false"),a=v},20))}function m(d){if(d.defaultPrevented)return;let w=d.submitter&&d.submitter.hasAttribute("formaction")?d.submitter.getAttribute("formaction"):d.target.getAttribute("action");if(!w)return;if(!w.startsWith("https://action/")){const y=new URL(w,qt);if(w=s.parsePath(y.pathname+y.search),!w.startsWith(n))return}if(d.target.method.toUpperCase()!=="POST")throw new Error("Only POST forms are supported for Actions");const v=ar.get(w);if(v){d.preventDefault();const y=new FormData(d.target,d.submitter);v.call({r:s,f:d.target},d.target.enctype==="multipart/form-data"?y:new URLSearchParams(y))}}jn(["click","submit"]),document.addEventListener("click",f),e&&(document.addEventListener("mousemove",g,{passive:!0}),document.addEventListener("focusin",h,{passive:!0}),document.addEventListener("touchstart",h,{passive:!0})),document.addEventListener("submit",m),jt(()=>{document.removeEventListener("click",f),e&&(document.removeEventListener("mousemove",g),document.removeEventListener("focusin",h),document.removeEventListener("touchstart",h)),document.removeEventListener("submit",m)})}}function ur(e){const t=()=>{const r=window.location.pathname.replace(/^\/+/,"/")+window.location.search,s=window.history.state&&window.history.state._depth&&Object.keys(window.history.state).length===1?void 0:window.history.state;return{value:r+window.location.hash,state:s}},n=It();return or({get:t,set({value:r,replace:s,scroll:o,state:l}){s?window.history.replaceState(Gn(l),"",r):window.history.pushState(l,"",r),lr(decodeURIComponent(window.location.hash.slice(1)),o),yt()},init:r=>ir(window,"popstate",zn(r,s=>{if(s)return!n.confirm(s);{const o=t();return!n.confirm(o.value,{state:o.state})}})),create:cr(e.preload,e.explicitLinks,e.actionBase,e.transformUrl),utils:{go:r=>window.history.go(r),beforeLeave:n}})(e)}const dr="_App_wcrpu_1",fr={App:dr},hr="_Home_1qp1l_1",pr="_Apps_1qp1l_6",gr="_App_1qp1l_6",wr="_A1_1qp1l_28",mr="_A2_1qp1l_40",yr="_A3_1qp1l_51",vr="_A4_1qp1l_64",Y={Home:hr,Apps:pr,App:gr,A1:wr,A2:mr,A3:yr,A4:vr},W=e=>new DOMParser().parseFromString(e,"image/svg+xml").querySelector("svg");function vt(e){return e===void 0?"":e.constructor.name=="String"?e:e.join(" ")}const kr='<svg xmlns="http://www.w3.org/2000/svg" class="ionicon" viewBox="0 0 512 512"><path d="M473 39.05a24 24 0 00-25.5-5.46L47.47 185h-.08a24 24 0 001 45.16l.41.13 137.3 58.63a16 16 0 0015.54-3.59L422 80a7.07 7.07 0 0110 10L226.66 310.26a16 16 0 00-3.59 15.54l58.65 137.38c.06.2.12.38.19.57 3.2 9.27 11.3 15.81 21.09 16.25h1a24.63 24.63 0 0023-15.46L478.39 64.62A24 24 0 00473 39.05z"/></svg>',Zt='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 48C141.1 48 48 141.1 48 256s93.1 208 208 208 208-93.1 208-208S370.9 48 256 48zM76 256c0-48.1 18.7-93.3 52.7-127.3S207.9 76 256 76c48.1 0 93.3 18.7 127.3 52.7 32.2 32.2 50.7 74.5 52.6 119.7-8.8-10.3-24.2-24-43.8-24-27.5 0-41.7 25.7-51 42.7-1.4 2.5-2.7 4.9-3.9 7-11.4 19.2-27.3 30-42.5 28.9-13.4-.9-24.8-11.2-32.2-28.8-9.2-22.1-29.1-45.8-52.9-49.2-11.3-1.6-28.1.8-44.7 21.4-3.2 4-6.9 9.4-11.1 15.6-10.4 15.5-26.2 38.8-38.1 40.8-17.3 2.8-30.9-7.5-36.4-12.3-2.2-11.2-3.3-22.8-3.3-34.5z"/></svg>',_r='<svg xmlns="http://www.w3.org/2000/svg" class="ionicon" viewBox="0 0 512 512"><path d="M480 128a64 64 0 00-64-64h-16V48.45c0-8.61-6.62-16-15.23-16.43A16 16 0 00368 48v16H144V48.45c0-8.61-6.62-16-15.23-16.43A16 16 0 00112 48v16H96a64 64 0 00-64 64v12a4 4 0 004 4h440a4 4 0 004-4zM32 416a64 64 0 0064 64h320a64 64 0 0064-64V179a3 3 0 00-3-3H35a3 3 0 00-3 3zm344-208a24 24 0 11-24 24 24 24 0 0124-24zm0 80a24 24 0 11-24 24 24 24 0 0124-24zm-80-80a24 24 0 11-24 24 24 24 0 0124-24zm0 80a24 24 0 11-24 24 24 24 0 0124-24zm0 80a24 24 0 11-24 24 24 24 0 0124-24zm-80-80a24 24 0 11-24 24 24 24 0 0124-24zm0 80a24 24 0 11-24 24 24 24 0 0124-24zm-80-80a24 24 0 11-24 24 24 24 0 0124-24zm0 80a24 24 0 11-24 24 24 24 0 0124-24z"/></svg>',xr='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M376 64v42.667h-40V64H176v42.667h-40V64H96v384h40v-42.666h40V448h160v-42.666h40V448h40V64h-40zM176 362.667h-40V320h40v42.667zm0-85.333h-40v-42.667h40v42.667zM176 192h-40v-42.666h40V192zm200 170.667h-40V320h40v42.667zm0-85.333h-40v-42.667h40v42.667zM376 192h-40v-42.666h40V192z"/></svg>';var br=M("<div>"),$r=M("<div><div><a href=#></a></div><div><a href=#></a></div><div><a href=#></a></div><div><a href=#>");const Sr=()=>(()=>{var e=br();return P(e,p(Cr,{})),L(()=>E(e,Y.Home)),e})(),Cr=()=>{const e=W(xr),t=W(Zt),n=W(kr),r=W(_r);return(()=>{var s=$r(),o=s.firstChild,l=o.firstChild,i=o.nextSibling,a=i.firstChild,c=i.nextSibling,u=c.firstChild,f=c.nextSibling,h=f.firstChild;return P(l,r),P(a,n),P(u,t),P(h,e),L(g=>{var m=Y.Apps,d=`${Y.A1} ${Y.App}`,w=`${Y.A2} ${Y.App}`,v=`${Y.A3} ${Y.App}`,y=`${Y.A4} ${Y.App}`;return m!==g.e&&E(s,g.e=m),d!==g.t&&E(o,g.t=d),w!==g.a&&E(i,g.a=w),v!==g.o&&E(c,g.o=v),y!==g.i&&E(f,g.i=y),g},{e:void 0,t:void 0,a:void 0,o:void 0,i:void 0}),s})()},Ar="_Auth_w4vpc_1",Pr={Auth:Ar},Lr=!1,Er=(e,t)=>e===t,dt=Symbol("solid-proxy"),Or=typeof Proxy=="function",je={equals:Er};let Tr=rn;const ae=1,Fe=2,Mr={};var j=null;let nt=null,Br=null,U=null,R=null,le=null,qe=0;function $e(e,t){t=t?Object.assign({},je,t):je;const n={value:e,observers:null,observerSlots:null,comparator:t.equals||void 0},r=s=>(typeof s=="function"&&(s=s(n.value)),en(n,s));return[Jt.bind(n),r]}function O(e,t,n){const r=tn(e,t,!1,ae);He(r)}function he(e,t,n){n=n?Object.assign({},je,n):je;const r=tn(e,t,!0,0);return r.observers=null,r.observerSlots=null,r.comparator=n.equals||void 0,He(r),Jt.bind(r)}function _e(e){if(U===null)return e();const t=U;U=null;try{return e()}finally{U=t}}function Ur(e,t){const n=Symbol("context");return{id:n,Provider:zr(n),defaultValue:e}}function jr(e){let t;return j&&j.context&&(t=j.context[e.id])!==void 0?t:e.defaultValue}function Fr(e){const t=he(e),n=he(()=>ft(t()));return n.toArray=()=>{const r=n();return Array.isArray(r)?r:r!=null?[r]:[]},n}function Jt(){if(this.sources&&this.state)if(this.state===ae)He(this);else{const e=R;R=null,Ke(()=>Re(this)),R=e}if(U){const e=this.observers?this.observers.length:0;U.sources?(U.sources.push(this),U.sourceSlots.push(e)):(U.sources=[this],U.sourceSlots=[e]),this.observers?(this.observers.push(U),this.observerSlots.push(U.sources.length-1)):(this.observers=[U],this.observerSlots=[U.sources.length-1])}return this.value}function en(e,t,n){let r=e.value;return(!e.comparator||!e.comparator(r,t))&&(e.value=t,e.observers&&e.observers.length&&Ke(()=>{for(let s=0;s<e.observers.length;s+=1){const o=e.observers[s],l=nt&&nt.running;l&&nt.disposed.has(o),(l?!o.tState:!o.state)&&(o.pure?R.push(o):le.push(o),o.observers&&sn(o)),l||(o.state=ae)}if(R.length>1e6)throw R=[],new Error})),t}function He(e){if(!e.fn)return;Ne(e);const t=qe;Rr(e,e.value,t)}function Rr(e,t,n){let r;const s=j,o=U;U=j=e;try{r=e.fn(t)}catch(l){return e.pure&&(e.state=ae,e.owned&&e.owned.forEach(Ne),e.owned=null),e.updatedAt=n+1,on(l)}finally{U=o,j=s}(!e.updatedAt||e.updatedAt<=n)&&(e.updatedAt!=null&&"observers"in e?en(e,r):e.value=r,e.updatedAt=n)}function tn(e,t,n,r=ae,s){const o={fn:e,state:r,updatedAt:null,owned:null,sources:null,sourceSlots:null,cleanups:null,value:t,owner:j,context:j?j.context:null,pure:n};return j===null||j!==Mr&&(j.owned?j.owned.push(o):j.owned=[o]),o}function nn(e){if(e.state===0)return;if(e.state===Fe)return Re(e);if(e.suspense&&_e(e.suspense.inFallback))return e.suspense.effects.push(e);const t=[e];for(;(e=e.owner)&&(!e.updatedAt||e.updatedAt<qe);)e.state&&t.push(e);for(let n=t.length-1;n>=0;n--)if(e=t[n],e.state===ae)He(e);else if(e.state===Fe){const r=R;R=null,Ke(()=>Re(e,t[0])),R=r}}function Ke(e,t){if(R)return e();let n=!1;R=[],le?n=!0:le=[],qe++;try{const r=e();return Nr(n),r}catch(r){n||(le=null),R=null,on(r)}}function Nr(e){if(R&&(rn(R),R=null),e)return;const t=le;le=null,t.length&&Ke(()=>Tr(t))}function rn(e){for(let t=0;t<e.length;t++)nn(e[t])}function Re(e,t){e.state=0;for(let n=0;n<e.sources.length;n+=1){const r=e.sources[n];if(r.sources){const s=r.state;s===ae?r!==t&&(!r.updatedAt||r.updatedAt<qe)&&nn(r):s===Fe&&Re(r,t)}}}function sn(e){for(let t=0;t<e.observers.length;t+=1){const n=e.observers[t];n.state||(n.state=Fe,n.pure?R.push(n):le.push(n),n.observers&&sn(n))}}function Ne(e){let t;if(e.sources)for(;e.sources.length;){const n=e.sources.pop(),r=e.sourceSlots.pop(),s=n.observers;if(s&&s.length){const o=s.pop(),l=n.observerSlots.pop();r<s.length&&(o.sourceSlots[l]=r,s[r]=o,n.observerSlots[r]=l)}}if(e.tOwned){for(t=e.tOwned.length-1;t>=0;t--)Ne(e.tOwned[t]);delete e.tOwned}if(e.owned){for(t=e.owned.length-1;t>=0;t--)Ne(e.owned[t]);e.owned=null}if(e.cleanups){for(t=e.cleanups.length-1;t>=0;t--)e.cleanups[t]();e.cleanups=null}e.state=0}function Gr(e){return e instanceof Error?e:new Error(typeof e=="string"?e:"Unknown error",{cause:e})}function on(e,t=j){throw Gr(e)}function ft(e){if(typeof e=="function"&&!e.length)return ft(e());if(Array.isArray(e)){const t=[];for(let n=0;n<e.length;n++){const r=ft(e[n]);Array.isArray(r)?t.push.apply(t,r):t.push(r)}return t}return e}function zr(e,t){return function(r){let s;return O(()=>s=_e(()=>(j.context={...j.context,[e]:r.value},Fr(()=>r.children))),void 0),s}}function Ee(e,t){return _e(()=>e(t||{}))}function Ae(){return!0}const Vr={get(e,t,n){return t===dt?n:e.get(t)},has(e,t){return t===dt?!0:e.has(t)},set:Ae,deleteProperty:Ae,getOwnPropertyDescriptor(e,t){return{configurable:!0,enumerable:!0,get(){return e.get(t)},set:Ae,deleteProperty:Ae}},ownKeys(e){return e.keys()}};function rt(e){return(e=typeof e=="function"?e():e)?e:{}}function Dr(){for(let e=0,t=this.length;e<t;++e){const n=this[e]();if(n!==void 0)return n}}function Ir(...e){let t=!1;for(let l=0;l<e.length;l++){const i=e[l];t=t||!!i&&dt in i,e[l]=typeof i=="function"?(t=!0,he(i)):i}if(Or&&t)return new Proxy({get(l){for(let i=e.length-1;i>=0;i--){const a=rt(e[i])[l];if(a!==void 0)return a}},has(l){for(let i=e.length-1;i>=0;i--)if(l in rt(e[i]))return!0;return!1},keys(){const l=[];for(let i=0;i<e.length;i++)l.push(...Object.keys(rt(e[i])));return[...new Set(l)]}},Vr);const n={},r=Object.create(null);for(let l=e.length-1;l>=0;l--){const i=e[l];if(!i)continue;const a=Object.getOwnPropertyNames(i);for(let c=a.length-1;c>=0;c--){const u=a[c];if(u==="__proto__"||u==="constructor")continue;const f=Object.getOwnPropertyDescriptor(i,u);if(!r[u])r[u]=f.get?{enumerable:!0,configurable:!0,get:Dr.bind(n[u]=[f.get.bind(i)])}:f.value!==void 0?f:void 0;else{const h=n[u];h&&(f.get?h.push(f.get.bind(i)):f.value!==void 0&&h.push(()=>f.value))}}}const s={},o=Object.keys(r);for(let l=o.length-1;l>=0;l--){const i=o[l],a=r[i];a&&a.get?Object.defineProperty(s,i,a):s[i]=a?a.value:void 0}return s}const qr=e=>`Stale read from <${e}>.`;function st(e){const t=e.keyed,n=he(()=>e.when,void 0,void 0),r=t?n:he(n,void 0,{equals:(s,o)=>!s==!o});return he(()=>{const s=r();if(s){const o=e.children;return typeof o=="function"&&o.length>0?_e(()=>o(t?s:()=>{if(!_e(r))throw qr("Show");return n()})):o}return e.fallback},void 0,void 0)}class Hr{constructor(){this.name_=void 0,this.kind_=void 0}name_;kind_;is_unset(){return this.name_===void 0&&this.kind_===void 0}is_guest(){return this.name_===void 0&&this.kind_==1}is_member(){return this.name_!==void 0&&this.kind_==2}is_admin(){return this.name_!==void 0&&this.kind_==4}is_synced(){return this.is_member()||this.is_admin()}init(){this.kind_=1}sync(t){this.name_=t,this.kind_=2}name(){return this.name_}}const[Kr,Wr]=$e(new Hr),Xr=Ur({user:Kr,re_user:Wr});function We(){return jr(Xr)}function Yr(e,t,n){let r=n.length,s=t.length,o=r,l=0,i=0,a=t[s-1].nextSibling,c=null;for(;l<s||i<o;){if(t[l]===n[i]){l++,i++;continue}for(;t[s-1]===n[o-1];)s--,o--;if(s===l){const u=o<r?i?n[i-1].nextSibling:n[o-i]:a;for(;i<o;)e.insertBefore(n[i++],u)}else if(o===i)for(;l<s;)(!c||!c.has(t[l]))&&t[l].remove(),l++;else if(t[l]===n[o-1]&&n[i]===t[s-1]){const u=t[--s].nextSibling;e.insertBefore(n[i++],t[l++].nextSibling),e.insertBefore(n[--o],u),t[s]=n[o]}else{if(!c){c=new Map;let f=i;for(;f<o;)c.set(n[f],f++)}const u=c.get(t[l]);if(u!=null)if(i<u&&u<o){let f=l,h=1,g;for(;++f<s&&f<o&&!((g=c.get(t[f]))==null||g!==u+h);)h++;if(h>u-i){const m=t[l];for(;i<u;)e.insertBefore(n[i++],m)}else e.replaceChild(n[i++],t[l++])}else l++;else t[l++].remove()}}}function D(e,t,n,r){let s;const o=()=>{const i=document.createElement("template");return i.innerHTML=e,i.content.firstChild},l=()=>(s||(s=o())).cloneNode(!0);return l.cloneNode=l,l}function K(e,t,n){n==null?e.removeAttribute(t):e.setAttribute(t,n)}function T(e,t){t==null?e.removeAttribute("class"):e.className=t}function pe(e,t,n,r){if(Array.isArray(n)){const s=n[0];e.addEventListener(t,n[0]=o=>s.call(e,n[1],o))}else e.addEventListener(t,n,typeof n!="function"&&n)}function oe(e,t,n){n!=null?e.style.setProperty(t,n):e.style.removeProperty(t)}function N(e,t,n,r){if(n!==void 0&&!r&&(r=[]),typeof t!="function")return Ge(e,t,r,n);O(s=>Ge(e,t(),s,n),r)}function Ge(e,t,n,r,s){for(;typeof n=="function";)n=n();if(t===n)return n;const o=typeof t,l=r!==void 0;if(e=l&&n[0]&&n[0].parentNode||e,o==="string"||o==="number"){if(o==="number"&&(t=t.toString(),t===n))return n;if(l){let i=n[0];i&&i.nodeType===3?i.data!==t&&(i.data=t):i=document.createTextNode(t),n=fe(e,n,r,i)}else n!==""&&typeof n=="string"?n=e.firstChild.data=t:n=e.textContent=t}else if(t==null||o==="boolean")n=fe(e,n,r);else{if(o==="function")return O(()=>{let i=t();for(;typeof i=="function";)i=i();n=Ge(e,i,n,r)}),()=>n;if(Array.isArray(t)){const i=[],a=n&&Array.isArray(n);if(ht(i,t,n,s))return O(()=>n=Ge(e,i,n,r,!0)),()=>n;if(i.length===0){if(n=fe(e,n,r),l)return n}else a?n.length===0?Pt(e,i,r):Yr(e,n,i):(n&&fe(e),Pt(e,i));n=i}else if(t.nodeType){if(Array.isArray(n)){if(l)return n=fe(e,n,r,t);fe(e,n,null,t)}else n==null||n===""||!e.firstChild?e.appendChild(t):e.replaceChild(t,e.firstChild);n=t}}return n}function ht(e,t,n,r){let s=!1;for(let o=0,l=t.length;o<l;o++){let i=t[o],a=n&&n[e.length],c;if(!(i==null||i===!0||i===!1))if((c=typeof i)=="object"&&i.nodeType)e.push(i);else if(Array.isArray(i))s=ht(e,i,a)||s;else if(c==="function")if(r){for(;typeof i=="function";)i=i();s=ht(e,Array.isArray(i)?i:[i],Array.isArray(a)?a:[a])||s}else e.push(i),s=!0;else{const u=String(i);a&&a.nodeType===3&&a.data===u?e.push(a):e.push(document.createTextNode(u))}}return s}function Pt(e,t,n=null){for(let r=0,s=t.length;r<s;r++)e.insertBefore(t[r],n)}function fe(e,t,n,r){if(n===void 0)return e.textContent="";const s=r||document.createTextNode("");if(t.length){let o=!1;for(let l=t.length-1;l>=0;l--){const i=t[l];if(s!==i){const a=i.parentNode===e;!o&&!l?a?e.replaceChild(s,i):e.insertBefore(s,n):a&&i.remove()}else o=!0}}else e.insertBefore(s,n);return[s]}const Qr="_CheckBox_99a5h_1",Zr="_Box_99a5h_17",Jr="_TickMark_99a5h_37",es="_Content_99a5h_38",ts="_Postman_99a5h_54",me={CheckBox:Qr,Box:Zr,TickMark:Jr,Content:es,Postman:ts};var ns=D("<input type=hidden>"),rs=D("<span>"),ss=D("<legend>"),os=D("<div><div style=background:transparent><div>");const is={width:.6,height:.6,state:!1,tick:"",accent:"#485d6c"},ln=e=>{const t=Ir(is,e),n=()=>t.state,r=()=>t.accent,s=()=>t.tick,o=()=>t.width,l=()=>t.height,i=()=>t.legend,a=()=>t.name,[c,u]=$e(n()),f=()=>u(h=>!c());return(()=>{var h=os(),g=h.firstChild,m=g.firstChild;return pe(h,"click",f),N(h,Ee(st,{get when(){return a()!==void 0},get children(){var d=ns();return O(w=>{var v=me.Postman,y=a();return v!==w.e&&T(d,w.e=v),y!==w.t&&K(d,"name",w.t=y),w},{e:void 0,t:void 0}),O(()=>d.value=c()),d}}),g),N(m,Ee(st,{get when(){return s()!==""},get children(){var d=rs();return N(d,s),O(()=>T(d,me.TickMark)),d}})),N(h,Ee(st,{get when(){return i()!==void 0},get children(){var d=ss();return N(d,i),O(w=>oe(d,"color",r())),d}}),null),O(d=>{var w=me.CheckBox,v=me.Box,y=`0.11em solid ${r()}`,G=`${o()+.19}em`,A=`${l()+.19}em`,I=c(),q=me.Content,J=r(),re=`${o()}em`,$=`${l()}em`;return w!==d.e&&T(h,d.e=w),v!==d.t&&T(g,d.t=v),y!==d.a&&oe(g,"border",d.a=y),G!==d.o&&oe(g,"width",d.o=G),A!==d.i&&oe(g,"height",d.i=A),I!==d.n&&K(g,"box-state",d.n=I),q!==d.s&&T(m,d.s=q),J!==d.h&&oe(m,"background",d.h=J),re!==d.r&&oe(m,"width",d.r=re),$!==d.d&&oe(m,"height",d.d=$),d},{e:void 0,t:void 0,a:void 0,o:void 0,i:void 0,n:void 0,s:void 0,h:void 0,r:void 0,d:void 0}),h})()},ls="_Logo_nas3v_1",as="_Anchor_nas3v_7",Lt={Logo:ls,Anchor:as},an=`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
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
`;var cs=D("<div><a href=/>");const us=()=>{const e=W(an);return(()=>{var t=cs(),n=t.firstChild;return N(n,e),O(r=>{var s=Lt.Logo,o=Lt.Anchor;return s!==r.e&&T(t,r.e=s),o!==r.t&&T(n,r.t=o),r},{e:void 0,t:void 0}),t})()},ds="_Splash_knpkf_1",fs={Splash:ds};var hs=D("<div>");const ps=()=>{const e=W(an);return(()=>{var t=hs();return N(t,e),O(()=>T(t,fs.Splash)),t})()},gs="_PasswordField_1i8ty_1",ws="_PswSwitch_1i8ty_6",Et={PasswordField:gs,PswSwitch:ws},ms="_TextField_1s4vm_1",ys="_InputLegend_1s4vm_23",vs="_InputField_1s4vm_19",ot={TextField:ms,InputLegend:ys,InputField:vs};var ks=D("<div><legend></legend><input>");const kt=e=>{const[t,n]=$e(!1),r=()=>n(c=>!0),s=c=>n(u=>c.target.value!==""),o=c=>n(u=>u||(c.target.nextElementSibling.focus(),!0)),l=()=>e.legend,i=()=>e.name,a=()=>e.type;return(()=>{var c=ks(),u=c.firstChild,f=u.nextSibling;return pe(u,"click",o),N(u,l),pe(f,"blur",s),pe(f,"focus",r),O(h=>{var g=ot.TextField,m=t(),d=ot.InputLegend,w=a(),v=ot.InputField,y=i();return g!==h.e&&T(c,h.e=g),m!==h.t&&K(c,"input-focus",h.t=m),d!==h.a&&T(u,h.a=d),w!==h.o&&K(f,"type",h.o=w),v!==h.i&&T(f,h.i=v),y!==h.n&&K(f,"name",h.n=y),h},{e:void 0,t:void 0,a:void 0,o:void 0,i:void 0,n:void 0}),c})()},_s=`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
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
`,xs=`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
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
`;var bs=D("<div><button type=button>");const pt=e=>{const t=()=>e.name,n=W(_s),r=W(xs),[s,o]=$e({type:"password",svg:r}),l=()=>o(a=>a.type=="password"?{type:"text",svg:n}:{type:"password",svg:r}),i=()=>e.legend;return(()=>{var a=bs(),c=a.firstChild;return N(a,Ee(kt,{get type(){return s().type},get name(){return t()},get legend(){return i()??"Password"}}),c),pe(c,"click",l),N(c,()=>s().svg),O(u=>{var f=Et.PasswordField,h=Et.PswSwitch;return f!==u.e&&T(a,u.e=f),h!==u.t&&T(c,u.t=h),u},{e:void 0,t:void 0}),a})()},$s="_TextLine_5y4ha_1",Ss={TextLine:$s};var Cs=D("<span>");const cn=e=>{const t=()=>e.children,n=()=>e.cls;return(()=>{var r=Cs();return N(r,t),O(()=>T(r,` ${Ss.TextLine} ${vt(n())}`)),r})()},As="_Button_18bd8_1",Ps={Button:As};var Ls=D("<button>");const xe=e=>{const t=()=>e.children,n=()=>e.call,r=()=>e.class;return(()=>{var s=Ls();return pe(s,"click",n()),N(s,t),O(()=>T(s,`${Ps.Button} ${vt(r())}`)),s})()},Es="_Anchor_1k1wp_1",Os={Anchor:Es};var Ts=D("<a>");const Ms=e=>{const t=()=>e.children,n=()=>e.link,r=()=>e.cls;return(()=>{var s=Ts();return N(s,t),O(o=>{var l=`${Os.Anchor} ${vt(r())}`,i=n();return l!==o.e&&T(s,o.e=l),i!==o.t&&K(s,"href",o.t=i),o},{e:void 0,t:void 0}),s})()},Bs="_Separator_uerzn_1",Ot={Separator:Bs};var Us=D("<span>");const un=()=>{const[e,t]=$e(!1),n=r=>t(s=>{const o=document.querySelector(`.${Ot.Separator}`);if(o==null)return s;const i=o.parentElement.getBoundingClientRect(),a=r.clientX,c=r.clientY;return a>=i.left&&a<=i.right&&c<=i.bottom&&c>=i.top});return document.body.addEventListener("mousemove",n),(()=>{var r=Us();return O(s=>{var o=Ot.Separator,l=e();return o!==s.e&&T(r,s.e=o),l!==s.t&&K(r,"active",s.t=l),s},{e:void 0,t:void 0}),r})()},js="_Form_fury4_1",Fs="_FormTitle_fury4_27",Rs="_SubmitButton_fury4_31",Ns="_Note_fury4_49",Gs="_SwapButton_fury4_58",ee={Form:js,FormTitle:Fs,SubmitButton:Rs,Note:Ns,SwapButton:Gs};var Tt=D("<form>");const dn=e=>{const t=()=>e.action,n=()=>e.method,r=()=>e.children,s=()=>e.target;return s()===void 0?(()=>{var o=Tt();return N(o,r),O(l=>{var i=ee.Form,a=t(),c=n();return i!==l.e&&T(o,l.e=i),a!==l.t&&K(o,"action",l.t=a),c!==l.a&&K(o,"method",l.a=c),l},{e:void 0,t:void 0,a:void 0}),o})():(()=>{var o=Tt();return N(o,r),O(l=>{var i=ee.Form,a=t(),c=n(),u=s();return i!==l.e&&T(o,l.e=i),a!==l.t&&K(o,"action",l.t=a),c!==l.a&&K(o,"method",l.a=c),u!==l.o&&K(o,"target",l.o=u),l},{e:void 0,t:void 0,a:void 0,o:void 0}),o})()},zs={};var Vs=M("<input type=hidden name=method_override value=put>"),Ds=M("<h4>Register"),Is=M("<span>Already have an account?"),qs=M("<span>Login.");const Hs=e=>{const t=()=>e.swap_call;return p(dn,{action:"/auth/user",method:"post",target:"_blank",get children(){return[Vs(),(()=>{var n=Ds();return L(()=>E(n,zs.FormTitle)),n})(),p(kt,{type:"text",name:"user_name",legend:"User Name"}),p(pt,{name:"user_pswd"}),p(pt,{legend:"Verify Password"}),p(ln,{name:"auto_login",legend:" auto login"}),p(xe,{get class(){return ee.SubmitButton},children:"Register"}),p(un,{}),p(cn,{get children(){return[(()=>{var n=Is();return L(()=>E(n,ee.Note)),n})(),p(xe,{get class(){return ee.SwapButton},get call(){return t()},get children(){return qs()}})]}})]}})};var Ks=M("<h4>Login"),Ws=M("<span>New to hanabi?"),Xs=M("<span>Register.");const Ys=e=>{const t=()=>e.swap_call;return p(dn,{action:"/auth/user",method:"post",target:"_blank",get children(){return[(()=>{var n=Ks();return L(()=>E(n,ee.FormTitle)),n})(),p(kt,{type:"text",name:"user_name",legend:"User Name"}),p(pt,{name:"user_pswd"}),p(ln,{name:"persist_session",legend:" persist session"}),p(xe,{type:"submit",get class(){return ee.SubmitButton},children:"Login"}),p(un,{}),p(cn,{get children(){return[(()=>{var n=Ws();return L(()=>E(n,ee.Note)),n})(),p(xe,{get class(){return ee.SwapButton},get call(){return t()},get children(){return Xs()}})]}})]}})};var Qs=M("<span>you are already signed in."),Zs=M("<div>");const Js=()=>{const{user:e,re_user:t}=We(),[n,r]=X(0),s=()=>r(o=>Math.abs(1-o));return(()=>{var o=Zs();return P(o,p(ke,{get children(){return[p(Q,{get when(){return e().is_guest()},get children(){return p(ke,{get children(){return[p(Q,{get when(){return n()==0},get children(){return p(Ys,{swap_call:s})}}),p(Q,{get when(){return n()==1},get children(){return p(Hs,{swap_call:s})}})]}})}}),p(Q,{get when(){return e().is_synced()},get children(){return Qs()}})]}})),L(()=>E(o,Pr.Auth)),o})()},eo="_Initializer_o6th1_1",to="_Negotiator_o6th1_21",_t={Initializer:eo,Negotiator:to};var fn=M("<div>"),no=M("<span>&nbsp;ok"),ro=M("<span>&nbsp;err!"),so=M("<span><span>negotiating user authentication...");const oo=()=>(()=>{var e=fn();return P(e,p(ps,{}),null),P(e,p(co,{}),null),L(()=>E(e,`${_t.Initializer}`)),e})(),io="http://127.10.10.1:6680";async function lo(e){return await(await fetch(io+`/auth/user?name=${e===void 0?"":e}`,{method:"GET",credentials:"include"})).text()}const ao=e=>{const t=()=>e.re_user,n=()=>e.user;let[r]=_n(n().name(),lo);return vn(()=>{t()(s=>s.sync(r()))}),n().is_synced(),(()=>{var s=so();return s.firstChild,P(s,p(ke,{get children(){return[p(Q,{get when(){return n().is_synced()},get children(){return no()}}),p(Q,{get when(){return!n().is_synced()},get children(){return ro()}})]}}),null),L(()=>E(s,_t.Negotiate)),s})()},co=()=>{const{user:e,re_user:t}=We();return console.log("loading app"),(()=>{var n=fn();return P(n,p(ao,{user:e,re_user:t})),L(()=>E(n,_t.Negotiator)),n})()},uo="_Menu_rjehr_1",fo="_Entry_rjehr_10",ho="_Path_rjehr_19",be={Menu:uo,Entry:fo,Path:ho},po=`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
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
`,go=`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
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
`,wo=`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
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
`;var xt=M("<div>"),hn=M("<span>");const mo=()=>{const{user:e,re_user:t}=We(),n=W(go),r=W(po),s=W(wo),o=W(Zt),l=()=>{const i=document.body.style;i.getPropertyValue("filter")===""?i.setProperty("filter","invert() contrast(.89)"):i.removeProperty("filter")};return(()=>{var i=xt();return P(i,p(ke,{get children(){return[p(Q,{get when(){return e().is_guest()},get children(){return[p(yo,{call:l,icon:o,text:"colors"}),p(it,{link:"/auth",icon:n,text:"login"}),p(it,{link:"/auth",icon:s,text:"register"})]}}),p(Q,{get when(){return e().is_synced()},get children(){return p(it,{link:"/",icon:r,text:"login"})}})]}})),L(()=>E(i,be.Menu)),i})()},it=e=>{const t=()=>e.icon,n=()=>e.text,r=()=>e.link;return(()=>{var s=xt();return P(s,p(Ms,{get link(){return r()},get class(){return be.Path},get children(){return[p(Ie,{get when(){return t()!==void 0},get children(){return t()}}),(()=>{var o=hn();return P(o,n),o})()]}})),L(()=>E(s,be.Entry)),s})()},yo=e=>{const t=()=>e.icon,n=()=>e.text,r=()=>e.call;return(()=>{var s=xt();return P(s,p(xe,{get call(){return r()},get class(){return be.Path},get children(){return[p(Ie,{get when(){return t()!==void 0},get children(){return t()}}),(()=>{var o=hn();return P(o,n),o})()]}})),L(()=>E(s,be.Entry)),s})()},vo="_Page_e1i3l_1",ko={Page:vo};var _o=M("<div>");const xo=e=>{const t=()=>e.children;return(()=>{var n=_o();return P(n,p(us,{}),null),P(n,p(mo,{}),null),P(n,t,null),L(()=>E(n,ko.Page)),n})()};var bo=M("<div>");const $o=()=>{const{user:e,re_user:t}=We();return console.log(e()),(()=>{var n=bo();return Fn(n,"click",()=>console.log(e())),P(n,p(ke,{get children(){return[p(Q,{get when(){return e().is_unset()},get children(){return p(oo,{})}}),p(Q,{get when(){return!e().is_unset()},get children(){return p(xo,{get children(){return p(ur,{get children(){return[p(At,{path:"/",component:Sr}),p(At,{path:"/auth",component:Js})]}})}})}})]}})),L(()=>E(n,fr.App)),n})()};Un(()=>p($o,{}),document.body);
