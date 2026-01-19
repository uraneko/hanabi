(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function n(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(s){if(s.ep)return;s.ep=!0;const o=n(s);fetch(s.href,o)}})();const A={context:void 0,registry:void 0,effects:void 0,done:!1,getContextId(){return dt(this.context.count)},getNextContextId(){return dt(this.context.count++)}};function dt(e){const t=String(e),n=t.length-1;return A.context.id+(n?String.fromCharCode(96+n):"")+t}function ye(e){A.context=e}const an=!1,cn=(e,t)=>e===t,Ke=Symbol("solid-proxy"),ln=typeof Proxy=="function",un=Symbol("solid-track"),Te={equals:cn};let $t=Tt;const Y=1,_e=2,At={owned:null,cleanups:null,context:null,owner:null},Ve={};var C=null;let v=null,dn=null,P=null,U=null,j=null,Re=0;function me(e,t){const n=P,r=C,s=e.length===0,o=t===void 0?r:t,i=s?At:{owned:null,cleanups:null,context:o?o.context:null,owner:o},a=s?e:()=>e(()=>V(()=>se(i)));C=i,P=null;try{return D(a,!0)}finally{P=n,C=r}}function O(e,t){t=t?Object.assign({},Te,t):Te;const n={value:e,observers:null,observerSlots:null,comparator:t.equals||void 0},r=s=>(typeof s=="function"&&(v&&v.running&&v.sources.has(n)?s=s(n.tValue):s=s(n.value)),Pt(n,s));return[Lt.bind(n),r]}function ft(e,t,n){const r=Ge(e,t,!0,Y);we(r)}function S(e,t,n){const r=Ge(e,t,!1,Y);we(r)}function fn(e,t,n){$t=yn;const r=Ge(e,t,!1,Y),s=le&&de(le);s&&(r.suspense=s),r.user=!0,j?j.push(r):we(r)}function z(e,t,n){n=n?Object.assign({},Te,n):Te;const r=Ge(e,t,!0,0);return r.observers=null,r.observerSlots=null,r.comparator=n.equals||void 0,we(r),Lt.bind(r)}function hn(e){return e&&typeof e=="object"&&"then"in e}function et(e,t,n){let r,s,o;typeof t=="function"?(r=e,s=t,o=n||{}):(r=!0,s=e,o=t||{});let i=null,a=Ve,c=null,l=!1,u=!1,d="initialValue"in o,h=typeof r=="function"&&z(r);const g=new Set,[k,f]=(o.storage||O)(o.initialValue),[w,y]=O(void 0),[m,E]=O(void 0,{equals:!1}),[T,R]=O(d?"ready":"unresolved");A.context&&(c=A.getNextContextId(),o.ssrLoadFrom==="initial"?a=o.initialValue:A.load&&A.has(c)&&(a=A.load(c)));function B(M,F,N,b){return i===M&&(i=null,b!==void 0&&(d=!0),(M===a||F===a)&&o.onHydrated&&queueMicrotask(()=>o.onHydrated(b,{value:F})),a=Ve,v&&M&&l?(v.promises.delete(M),l=!1,D(()=>{v.running=!0,K(F,N)},!1)):K(F,N)),F}function K(M,F){D(()=>{F===void 0&&f(()=>M),R(F!==void 0?"errored":d?"ready":"unresolved"),y(F);for(const N of g.keys())N.decrement();g.clear()},!1)}function X(){const M=le&&de(le),F=k(),N=w();if(N!==void 0&&!i)throw N;return P&&!P.user&&M&&ft(()=>{m(),i&&(M.resolved&&v&&l?v.promises.add(i):g.has(M)||(M.increment(),g.add(M)))}),F}function q(M=!0){if(M!==!1&&u)return;u=!1;const F=h?h():r;if(l=v&&v.running,F==null||F===!1){B(i,V(k));return}v&&i&&v.promises.delete(i);let N;const b=a!==Ve?a:V(()=>{try{return s(F,{value:k(),refetching:M})}catch(L){N=L}});if(N!==void 0){B(i,void 0,Le(N),F);return}else if(!hn(b))return B(i,b,void 0,F),b;return i=b,"v"in b?(b.s===1?B(i,b.v,void 0,F):B(i,void 0,Le(b.v),F),b):(u=!0,queueMicrotask(()=>u=!1),D(()=>{R(d?"refreshing":"pending"),E()},!1),b.then(L=>B(b,L,void 0,F),L=>B(b,void 0,Le(L),F)))}Object.defineProperties(X,{state:{get:()=>T()},error:{get:()=>w()},loading:{get(){const M=T();return M==="pending"||M==="refreshing"}},latest:{get(){if(!d)return X();const M=w();if(M&&!i)throw M;return k()}}});let ie=C;return h?ft(()=>(ie=C,q(!1))):q(!1),[X,{refetch:M=>rt(ie,()=>q(M)),mutate:f}]}function pn(e){return D(e,!1)}function V(e){if(P===null)return e();const t=P;P=null;try{return e()}finally{P=t}}function tt(e,t,n){const r=Array.isArray(e);let s,o=n&&n.defer;return i=>{let a;if(r){a=Array(e.length);for(let l=0;l<e.length;l++)a[l]=e[l]()}else a=e();if(o)return o=!1,i;const c=V(()=>t(a,s,i));return s=a,c}}function Fe(e){return C===null||(C.cleanups===null?C.cleanups=[e]:C.cleanups.push(e)),e}function nt(){return C}function rt(e,t){const n=C,r=P;C=e,P=null;try{return D(t,!0)}catch(s){st(s)}finally{C=n,P=r}}function gn(e){if(v&&v.running)return e(),v.done;const t=P,n=C;return Promise.resolve().then(()=>{P=t,C=n;let r;return le&&(r=v||(v={sources:new Set,effects:[],promises:new Set,disposed:new Set,queue:new Set,running:!0}),r.done||(r.done=new Promise(s=>r.resolve=s)),r.running=!0),D(e,!1),P=C=null,r?r.done:void 0})}const[Ko,ht]=O(!1);function mn(e){j.push.apply(j,e),e.length=0}function ue(e,t){const n=Symbol("context");return{id:n,Provider:kn(n),defaultValue:e}}function de(e){let t;return C&&C.context&&(t=C.context[e.id])!==void 0?t:e.defaultValue}function Be(e){const t=z(e),n=z(()=>Xe(t()));return n.toArray=()=>{const r=n();return Array.isArray(r)?r:r!=null?[r]:[]},n}let le;function wn(){return le||(le=ue())}function Lt(){const e=v&&v.running;if(this.sources&&(e?this.tState:this.state))if((e?this.tState:this.state)===Y)we(this);else{const t=U;U=null,D(()=>Me(this),!1),U=t}if(P){const t=this.observers?this.observers.length:0;P.sources?(P.sources.push(this),P.sourceSlots.push(t)):(P.sources=[this],P.sourceSlots=[t]),this.observers?(this.observers.push(P),this.observerSlots.push(P.sources.length-1)):(this.observers=[P],this.observerSlots=[P.sources.length-1])}return e&&v.sources.has(this)?this.tValue:this.value}function Pt(e,t,n){let r=v&&v.running&&v.sources.has(e)?e.tValue:e.value;if(!e.comparator||!e.comparator(r,t)){if(v){const s=v.running;(s||!n&&v.sources.has(e))&&(v.sources.add(e),e.tValue=t),s||(e.value=t)}else e.value=t;e.observers&&e.observers.length&&D(()=>{for(let s=0;s<e.observers.length;s+=1){const o=e.observers[s],i=v&&v.running;i&&v.disposed.has(o)||((i?!o.tState:!o.state)&&(o.pure?U.push(o):j.push(o),o.observers&&Et(o)),i?o.tState=Y:o.state=Y)}if(U.length>1e6)throw U=[],new Error},!1)}return t}function we(e){if(!e.fn)return;se(e);const t=Re;pt(e,v&&v.running&&v.sources.has(e)?e.tValue:e.value,t),v&&!v.running&&v.sources.has(e)&&queueMicrotask(()=>{D(()=>{v&&(v.running=!0),P=C=e,pt(e,e.tValue,t),P=C=null},!1)})}function pt(e,t,n){let r;const s=C,o=P;P=C=e;try{r=e.fn(t)}catch(i){return e.pure&&(v&&v.running?(e.tState=Y,e.tOwned&&e.tOwned.forEach(se),e.tOwned=void 0):(e.state=Y,e.owned&&e.owned.forEach(se),e.owned=null)),e.updatedAt=n+1,st(i)}finally{P=o,C=s}(!e.updatedAt||e.updatedAt<=n)&&(e.updatedAt!=null&&"observers"in e?Pt(e,r,!0):v&&v.running&&e.pure?(v.sources.add(e),e.tValue=r):e.value=r,e.updatedAt=n)}function Ge(e,t,n,r=Y,s){const o={fn:e,state:r,updatedAt:null,owned:null,sources:null,sourceSlots:null,cleanups:null,value:t,owner:C,context:C?C.context:null,pure:n};return v&&v.running&&(o.state=0,o.tState=r),C===null||C!==At&&(v&&v.running&&C.pure?C.tOwned?C.tOwned.push(o):C.tOwned=[o]:C.owned?C.owned.push(o):C.owned=[o]),o}function Ee(e){const t=v&&v.running;if((t?e.tState:e.state)===0)return;if((t?e.tState:e.state)===_e)return Me(e);if(e.suspense&&V(e.suspense.inFallback))return e.suspense.effects.push(e);const n=[e];for(;(e=e.owner)&&(!e.updatedAt||e.updatedAt<Re);){if(t&&v.disposed.has(e))return;(t?e.tState:e.state)&&n.push(e)}for(let r=n.length-1;r>=0;r--){if(e=n[r],t){let s=e,o=n[r+1];for(;(s=s.owner)&&s!==o;)if(v.disposed.has(s))return}if((t?e.tState:e.state)===Y)we(e);else if((t?e.tState:e.state)===_e){const s=U;U=null,D(()=>Me(e,n[0]),!1),U=s}}}function D(e,t){if(U)return e();let n=!1;t||(U=[]),j?n=!0:j=[],Re++;try{const r=e();return vn(n),r}catch(r){n||(j=null),U=null,st(r)}}function vn(e){if(U&&(Tt(U),U=null),e)return;let t;if(v){if(!v.promises.size&&!v.queue.size){const r=v.sources,s=v.disposed;j.push.apply(j,v.effects),t=v.resolve;for(const o of j)"tState"in o&&(o.state=o.tState),delete o.tState;v=null,D(()=>{for(const o of s)se(o);for(const o of r){if(o.value=o.tValue,o.owned)for(let i=0,a=o.owned.length;i<a;i++)se(o.owned[i]);o.tOwned&&(o.owned=o.tOwned),delete o.tValue,delete o.tOwned,o.tState=0}ht(!1)},!1)}else if(v.running){v.running=!1,v.effects.push.apply(v.effects,j),j=null,ht(!0);return}}const n=j;j=null,n.length&&D(()=>$t(n),!1),t&&t()}function Tt(e){for(let t=0;t<e.length;t++)Ee(e[t])}function yn(e){let t,n=0;for(t=0;t<e.length;t++){const r=e[t];r.user?e[n++]=r:Ee(r)}if(A.context){if(A.count){A.effects||(A.effects=[]),A.effects.push(...e.slice(0,n));return}ye()}for(A.effects&&(A.done||!A.count)&&(e=[...A.effects,...e],n+=A.effects.length,delete A.effects),t=0;t<n;t++)Ee(e[t])}function Me(e,t){const n=v&&v.running;n?e.tState=0:e.state=0;for(let r=0;r<e.sources.length;r+=1){const s=e.sources[r];if(s.sources){const o=n?s.tState:s.state;o===Y?s!==t&&(!s.updatedAt||s.updatedAt<Re)&&Ee(s):o===_e&&Me(s,t)}}}function Et(e){const t=v&&v.running;for(let n=0;n<e.observers.length;n+=1){const r=e.observers[n];(t?!r.tState:!r.state)&&(t?r.tState=_e:r.state=_e,r.pure?U.push(r):j.push(r),r.observers&&Et(r))}}function se(e){let t;if(e.sources)for(;e.sources.length;){const n=e.sources.pop(),r=e.sourceSlots.pop(),s=n.observers;if(s&&s.length){const o=s.pop(),i=n.observerSlots.pop();r<s.length&&(o.sourceSlots[i]=r,s[r]=o,n.observerSlots[r]=i)}}if(e.tOwned){for(t=e.tOwned.length-1;t>=0;t--)se(e.tOwned[t]);delete e.tOwned}if(v&&v.running&&e.pure)Mt(e,!0);else if(e.owned){for(t=e.owned.length-1;t>=0;t--)se(e.owned[t]);e.owned=null}if(e.cleanups){for(t=e.cleanups.length-1;t>=0;t--)e.cleanups[t]();e.cleanups=null}v&&v.running?e.tState=0:e.state=0}function Mt(e,t){if(t||(e.tState=0,v.disposed.add(e)),e.owned)for(let n=0;n<e.owned.length;n++)Mt(e.owned[n])}function Le(e){return e instanceof Error?e:new Error(typeof e=="string"?e:"Unknown error",{cause:e})}function st(e,t=C){throw Le(e)}function Xe(e){if(typeof e=="function"&&!e.length)return Xe(e());if(Array.isArray(e)){const t=[];for(let n=0;n<e.length;n++){const r=Xe(e[n]);Array.isArray(r)?t.push.apply(t,r):t.push(r)}return t}return e}function kn(e,t){return function(r){let s;return S(()=>s=V(()=>(C.context={...C.context,[e]:r.value},Be(()=>r.children))),void 0),s}}const _n=Symbol("fallback");function gt(e){for(let t=0;t<e.length;t++)e[t]()}function xn(e,t,n={}){let r=[],s=[],o=[],i=0,a=t.length>1?[]:null;return Fe(()=>gt(o)),()=>{let c=e()||[],l=c.length,u,d;return c[un],V(()=>{let g,k,f,w,y,m,E,T,R;if(l===0)i!==0&&(gt(o),o=[],r=[],s=[],i=0,a&&(a=[])),n.fallback&&(r=[_n],s[0]=me(B=>(o[0]=B,n.fallback())),i=1);else if(i===0){for(s=new Array(l),d=0;d<l;d++)r[d]=c[d],s[d]=me(h);i=l}else{for(f=new Array(l),w=new Array(l),a&&(y=new Array(l)),m=0,E=Math.min(i,l);m<E&&r[m]===c[m];m++);for(E=i-1,T=l-1;E>=m&&T>=m&&r[E]===c[T];E--,T--)f[T]=s[E],w[T]=o[E],a&&(y[T]=a[E]);for(g=new Map,k=new Array(T+1),d=T;d>=m;d--)R=c[d],u=g.get(R),k[d]=u===void 0?-1:u,g.set(R,d);for(u=m;u<=E;u++)R=r[u],d=g.get(R),d!==void 0&&d!==-1?(f[d]=s[u],w[d]=o[u],a&&(y[d]=a[u]),d=k[d],g.set(R,d)):o[u]();for(d=m;d<l;d++)d in f?(s[d]=f[d],o[d]=w[d],a&&(a[d]=y[d],a[d](d))):s[d]=me(h);s=s.slice(0,i=l),r=c.slice(0)}return s});function h(g){if(o[d]=g,a){const[k,f]=O(d);return a[d]=f,t(c[d],k)}return t(c[d])}}}function p(e,t){return V(()=>e(t||{}))}function $e(){return!0}const bn={get(e,t,n){return t===Ke?n:e.get(t)},has(e,t){return t===Ke?!0:e.has(t)},set:$e,deleteProperty:$e,getOwnPropertyDescriptor(e,t){return{configurable:!0,enumerable:!0,get(){return e.get(t)},set:$e,deleteProperty:$e}},ownKeys(e){return e.keys()}};function Ne(e){return(e=typeof e=="function"?e():e)?e:{}}function Sn(){for(let e=0,t=this.length;e<t;++e){const n=this[e]();if(n!==void 0)return n}}function zt(...e){let t=!1;for(let i=0;i<e.length;i++){const a=e[i];t=t||!!a&&Ke in a,e[i]=typeof a=="function"?(t=!0,z(a)):a}if(ln&&t)return new Proxy({get(i){for(let a=e.length-1;a>=0;a--){const c=Ne(e[a])[i];if(c!==void 0)return c}},has(i){for(let a=e.length-1;a>=0;a--)if(i in Ne(e[a]))return!0;return!1},keys(){const i=[];for(let a=0;a<e.length;a++)i.push(...Object.keys(Ne(e[a])));return[...new Set(i)]}},bn);const n={},r=Object.create(null);for(let i=e.length-1;i>=0;i--){const a=e[i];if(!a)continue;const c=Object.getOwnPropertyNames(a);for(let l=c.length-1;l>=0;l--){const u=c[l];if(u==="__proto__"||u==="constructor")continue;const d=Object.getOwnPropertyDescriptor(a,u);if(!r[u])r[u]=d.get?{enumerable:!0,configurable:!0,get:Sn.bind(n[u]=[d.get.bind(a)])}:d.value!==void 0?d:void 0;else{const h=n[u];h&&(d.get?h.push(d.get.bind(a)):d.value!==void 0&&h.push(()=>d.value))}}}const s={},o=Object.keys(r);for(let i=o.length-1;i>=0;i--){const a=o[i],c=r[a];c&&c.get?Object.defineProperty(s,a,c):s[a]=c?c.value:void 0}return s}const Ot=e=>`Stale read from <${e}>.`;function Cn(e){const t="fallback"in e&&{fallback:()=>e.fallback};return z(xn(()=>e.each,e.children,t||void 0))}function ne(e){const t=e.keyed,n=z(()=>e.when,void 0,void 0),r=t?n:z(n,void 0,{equals:(s,o)=>!s==!o});return z(()=>{const s=r();if(s){const o=e.children;return typeof o=="function"&&o.length>0?V(()=>o(t?s:()=>{if(!V(r))throw Ot("Show");return n()})):o}return e.fallback},void 0,void 0)}function xe(e){const t=Be(()=>e.children),n=z(()=>{const r=t(),s=Array.isArray(r)?r:[r];let o=()=>{};for(let i=0;i<s.length;i++){const a=i,c=s[i],l=o,u=z(()=>l()?void 0:c.when,void 0,void 0),d=c.keyed?u:z(u,void 0,{equals:(h,g)=>!h==!g});o=()=>l()||(d()?[a,u,c]:void 0)}return o});return z(()=>{const r=n()();if(!r)return e.fallback;const[s,o,i]=r,a=i.children;return typeof a=="function"&&a.length>0?V(()=>a(i.keyed?o():()=>{if(V(n)()?.[0]!==s)throw Ot("Match");return o()})):a},void 0,void 0)}function J(e){return e}const $n=ue();function An(e){let t=0,n,r,s,o,i;const[a,c]=O(!1),l=wn(),u={increment:()=>{++t===1&&c(!0)},decrement:()=>{--t===0&&c(!1)},inFallback:a,effects:[],resolved:!1},d=nt();if(A.context&&A.load){const k=A.getContextId();let f=A.load(k);if(f&&(typeof f!="object"||f.s!==1?s=f:A.gather(k)),s&&s!=="$$f"){const[w,y]=O(void 0,{equals:!1});o=w,s.then(()=>{if(A.done)return y();A.gather(k),ye(r),y(),ye()},m=>{i=m,y()})}}const h=de($n);h&&(n=h.register(u.inFallback));let g;return Fe(()=>g&&g()),p(l.Provider,{value:u,get children(){return z(()=>{if(i)throw i;if(r=A.context,o)return o(),o=void 0;r&&s==="$$f"&&ye();const k=z(()=>e.children);return z(f=>{const w=u.inFallback(),{showContent:y=!0,showFallback:m=!0}=n?n():{};if((!w||s&&s!=="$$f")&&y)return u.resolved=!0,g&&g(),g=r=s=void 0,mn(u.effects),k();if(m)return g?f:me(E=>(g=E,r&&(ye({id:r.id+"F",count:0}),r=void 0),e.fallback),d)})})}})}const Rt=e=>z(()=>e());function Ln(e,t,n){let r=n.length,s=t.length,o=r,i=0,a=0,c=t[s-1].nextSibling,l=null;for(;i<s||a<o;){if(t[i]===n[a]){i++,a++;continue}for(;t[s-1]===n[o-1];)s--,o--;if(s===i){const u=o<r?a?n[a-1].nextSibling:n[o-a]:c;for(;a<o;)e.insertBefore(n[a++],u)}else if(o===a)for(;i<s;)(!l||!l.has(t[i]))&&t[i].remove(),i++;else if(t[i]===n[o-1]&&n[a]===t[s-1]){const u=t[--s].nextSibling;e.insertBefore(n[a++],t[i++].nextSibling),e.insertBefore(n[--o],u),t[s]=n[o]}else{if(!l){l=new Map;let d=a;for(;d<o;)l.set(n[d],d++)}const u=l.get(t[i]);if(u!=null)if(a<u&&u<o){let d=i,h=1,g;for(;++d<s&&d<o&&!((g=l.get(t[d]))==null||g!==u+h);)h++;if(h>u-a){const k=t[i];for(;a<u;)e.insertBefore(n[a++],k)}else e.replaceChild(n[a++],t[i++])}else i++;else t[i++].remove()}}}const mt="_$DX_DELEGATE";function Pn(e,t,n,r={}){let s;return me(o=>{s=o,t===document?e():x(t,e(),t.firstChild?null:void 0,n)},r.owner),()=>{s(),t.textContent=""}}function $(e,t,n,r){let s;const o=()=>{const a=document.createElement("template");return a.innerHTML=e,a.content.firstChild},i=()=>(s||(s=o())).cloneNode(!0);return i.cloneNode=i,i}function Ft(e,t=window.document){const n=t[mt]||(t[mt]=new Set);for(let r=0,s=e.length;r<s;r++){const o=e[r];n.has(o)||(n.add(o),t.addEventListener(o,Tn))}}function H(e,t,n){ot(e)||(n==null?e.removeAttribute(t):e.setAttribute(t,n))}function _(e,t){ot(e)||(t==null?e.removeAttribute("class"):e.className=t)}function W(e,t,n,r){if(Array.isArray(n)){const s=n[0];e.addEventListener(t,n[0]=o=>s.call(e,n[1],o))}else e.addEventListener(t,n,typeof n!="function"&&n)}function re(e,t,n){n!=null?e.style.setProperty(t,n):e.style.removeProperty(t)}function x(e,t,n,r){if(n!==void 0&&!r&&(r=[]),typeof t!="function")return ze(e,t,r,n);S(s=>ze(e,t(),s,n),r)}function ot(e){return!!A.context&&!A.done&&(!e||e.isConnected)}function Tn(e){if(A.registry&&A.events&&A.events.find(([c,l])=>l===e))return;let t=e.target;const n=`$$${e.type}`,r=e.target,s=e.currentTarget,o=c=>Object.defineProperty(e,"target",{configurable:!0,value:c}),i=()=>{const c=t[n];if(c&&!t.disabled){const l=t[`${n}Data`];if(l!==void 0?c.call(t,l,e):c.call(t,e),e.cancelBubble)return}return t.host&&typeof t.host!="string"&&!t.host._$host&&t.contains(e.target)&&o(t.host),!0},a=()=>{for(;i()&&(t=t._$host||t.parentNode||t.host););};if(Object.defineProperty(e,"currentTarget",{configurable:!0,get(){return t||document}}),A.registry&&!A.done&&(A.done=_$HY.done=!0),e.composedPath){const c=e.composedPath();o(c[0]);for(let l=0;l<c.length-2&&(t=c[l],!!i());l++){if(t._$host){t=t._$host,a();break}if(t.parentNode===s)break}}else a();o(r)}function ze(e,t,n,r,s){const o=ot(e);if(o){!n&&(n=[...e.childNodes]);let c=[];for(let l=0;l<n.length;l++){const u=n[l];u.nodeType===8&&u.data.slice(0,2)==="!$"?u.remove():c.push(u)}n=c}for(;typeof n=="function";)n=n();if(t===n)return n;const i=typeof t,a=r!==void 0;if(e=a&&n[0]&&n[0].parentNode||e,i==="string"||i==="number"){if(o||i==="number"&&(t=t.toString(),t===n))return n;if(a){let c=n[0];c&&c.nodeType===3?c.data!==t&&(c.data=t):c=document.createTextNode(t),n=pe(e,n,r,c)}else n!==""&&typeof n=="string"?n=e.firstChild.data=t:n=e.textContent=t}else if(t==null||i==="boolean"){if(o)return n;n=pe(e,n,r)}else{if(i==="function")return S(()=>{let c=t();for(;typeof c=="function";)c=c();n=ze(e,c,n,r)}),()=>n;if(Array.isArray(t)){const c=[],l=n&&Array.isArray(n);if(Ye(c,t,n,s))return S(()=>n=ze(e,c,n,r,!0)),()=>n;if(o){if(!c.length)return n;if(r===void 0)return n=[...e.childNodes];let u=c[0];if(u.parentNode!==e)return n;const d=[u];for(;(u=u.nextSibling)!==r;)d.push(u);return n=d}if(c.length===0){if(n=pe(e,n,r),a)return n}else l?n.length===0?wt(e,c,r):Ln(e,n,c):(n&&pe(e),wt(e,c));n=c}else if(t.nodeType){if(o&&t.parentNode)return n=a?[t]:t;if(Array.isArray(n)){if(a)return n=pe(e,n,r,t);pe(e,n,null,t)}else n==null||n===""||!e.firstChild?e.appendChild(t):e.replaceChild(t,e.firstChild);n=t}}return n}function Ye(e,t,n,r){let s=!1;for(let o=0,i=t.length;o<i;o++){let a=t[o],c=n&&n[e.length],l;if(!(a==null||a===!0||a===!1))if((l=typeof a)=="object"&&a.nodeType)e.push(a);else if(Array.isArray(a))s=Ye(e,a,c)||s;else if(l==="function")if(r){for(;typeof a=="function";)a=a();s=Ye(e,Array.isArray(a)?a:[a],Array.isArray(c)?c:[c])||s}else e.push(a),s=!0;else{const u=String(a);c&&c.nodeType===3&&c.data===u?e.push(c):e.push(document.createTextNode(u))}}return s}function wt(e,t,n=null){for(let r=0,s=t.length;r<s;r++)e.insertBefore(t[r],n)}function pe(e,t,n,r){if(n===void 0)return e.textContent="";const s=r||document.createTextNode("");if(t.length){let o=!1;for(let i=t.length-1;i>=0;i--){const a=t[i];if(s!==a){const c=a.parentNode===e;!o&&!i?c?e.replaceChild(s,a):e.insertBefore(s,n):c&&a.remove()}else o=!0}}else e.insertBefore(s,n);return[s]}const En=!1;function Bt(){let e=new Set;function t(s){return e.add(s),()=>e.delete(s)}let n=!1;function r(s,o){if(n)return!(n=!1);const i={to:s,options:o,defaultPrevented:!1,preventDefault:()=>i.defaultPrevented=!0};for(const a of e)a.listener({...i,from:a.location,retry:c=>{c&&(n=!0),a.navigate(s,{...o,resolve:!1})}});return!i.defaultPrevented}return{subscribe:t,confirm:r}}let Je;function it(){(!window.history.state||window.history.state._depth==null)&&window.history.replaceState({...window.history.state,_depth:window.history.length-1},""),Je=window.history.state._depth}it();function Mn(e){return{...e,_depth:window.history.state&&window.history.state._depth}}function zn(e,t){let n=!1;return()=>{const r=Je;it();const s=r==null?null:Je-r;if(n){n=!1;return}s&&t(s)?(n=!0,window.history.go(-s)):e()}}const On=/^(?:[a-z0-9]+:)?\/\//i,Rn=/^\/+|(\/)\/+$/g,Gt="http://sr";function ke(e,t=!1){const n=e.replace(Rn,"$1");return n?t||/^[?#]/.test(n)?n:"/"+n:""}function Pe(e,t,n){if(On.test(t))return;const r=ke(e),s=n&&ke(n);let o="";return!s||t.startsWith("/")?o=r:s.toLowerCase().indexOf(r.toLowerCase())!==0?o=r+s:o=s,(o||"/")+ke(t,!o)}function Fn(e,t){return ke(e).replace(/\/*(\*.*)?$/g,"")+ke(t)}function jt(e){const t={};return e.searchParams.forEach((n,r)=>{r in t?Array.isArray(t[r])?t[r].push(n):t[r]=[t[r],n]:t[r]=n}),t}function Bn(e,t,n){const[r,s]=e.split("/*",2),o=r.split("/").filter(Boolean),i=o.length;return a=>{const c=a.split("/").filter(Boolean),l=c.length-i;if(l<0||l>0&&s===void 0&&!t)return null;const u={path:i?"":"/",params:{}},d=h=>n===void 0?void 0:n[h];for(let h=0;h<i;h++){const g=o[h],k=g[0]===":",f=k?c[h]:c[h].toLowerCase(),w=k?g.slice(1):g.toLowerCase();if(k&&Ie(f,d(w)))u.params[w]=f;else if(k||!Ie(f,w))return null;u.path+=`/${f}`}if(s){const h=l?c.slice(-l).join("/"):"";if(Ie(h,d(s)))u.params[s]=h;else return null}return u}}function Ie(e,t){const n=r=>r===e;return t===void 0?!0:typeof t=="string"?n(t):typeof t=="function"?t(e):Array.isArray(t)?t.some(n):t instanceof RegExp?t.test(e):!1}function Gn(e){const[t,n]=e.pattern.split("/*",2),r=t.split("/").filter(Boolean);return r.reduce((s,o)=>s+(o.startsWith(":")?2:3),r.length-(n===void 0?0:1))}function Ut(e){const t=new Map,n=nt();return new Proxy({},{get(r,s){return t.has(s)||rt(n,()=>t.set(s,z(()=>e()[s]))),t.get(s)()},getOwnPropertyDescriptor(){return{enumerable:!0,configurable:!0}},ownKeys(){return Reflect.ownKeys(e())},has(r,s){return s in e()}})}function Vt(e){let t=/(\/?\:[^\/]+)\?/.exec(e);if(!t)return[e];let n=e.slice(0,t.index),r=e.slice(t.index+t[0].length);const s=[n,n+=t[1]];for(;t=/^(\/\:[^\/]+)\?/.exec(r);)s.push(n+=t[1]),r=r.slice(t[0].length);return Vt(r).reduce((o,i)=>[...o,...s.map(a=>a+i)],[])}const jn=100,Un=ue(),Nt=ue();function Vn(e,t=""){const{component:n,preload:r,load:s,children:o,info:i}=e,a=!o||Array.isArray(o)&&!o.length,c={key:e,component:n,preload:r||s,info:i};return It(e.path).reduce((l,u)=>{for(const d of Vt(u)){const h=Fn(t,d);let g=a?h:h.split("/*",1)[0];g=g.split("/").map(k=>k.startsWith(":")||k.startsWith("*")?k:encodeURIComponent(k)).join("/"),l.push({...c,originalPath:u,pattern:g,matcher:Bn(g,!a,e.matchFilters)})}return l},[])}function Nn(e,t=0){return{routes:e,score:Gn(e[e.length-1])*1e4-t,matcher(n){const r=[];for(let s=e.length-1;s>=0;s--){const o=e[s],i=o.matcher(n);if(!i)return null;r.unshift({...i,route:o})}return r}}}function It(e){return Array.isArray(e)?e:[e]}function Ht(e,t="",n=[],r=[]){const s=It(e);for(let o=0,i=s.length;o<i;o++){const a=s[o];if(a&&typeof a=="object"){a.hasOwnProperty("path")||(a.path="");const c=Vn(a,t);for(const l of c){n.push(l);const u=Array.isArray(a.children)&&a.children.length===0;if(a.children&&!u)Ht(a.children,l.pattern,n,r);else{const d=Nn([...n],r.length);r.push(d)}n.pop()}}}return n.length?r:r.sort((o,i)=>i.score-o.score)}function He(e,t){for(let n=0,r=e.length;n<r;n++){const s=e[n].matcher(t);if(s)return s}return[]}function In(e,t,n){const r=new URL(Gt),s=z(u=>{const d=e();try{return new URL(d,r)}catch{return console.error(`Invalid path ${d}`),u}},r,{equals:(u,d)=>u.href===d.href}),o=z(()=>s().pathname),i=z(()=>s().search,!0),a=z(()=>s().hash),c=()=>"",l=tt(i,()=>jt(s()));return{get pathname(){return o()},get search(){return i()},get hash(){return a()},get state(){return t()},get key(){return c()},query:n?n(l):Ut(l)}}let ae;function Hn(){return ae}function Dn(e,t,n,r={}){const{signal:[s,o],utils:i={}}=e,a=i.parsePath||(b=>b),c=i.renderPath||(b=>b),l=i.beforeLeave||Bt(),u=Pe("",r.base||"");if(u===void 0)throw new Error(`${u} is not a valid base path`);u&&!s().value&&o({value:u,replace:!0,scroll:!1});const[d,h]=O(!1);let g;const k=(b,L)=>{L.value===f()&&L.state===y()||(g===void 0&&h(!0),ae=b,g=L,gn(()=>{g===L&&(w(g.value),m(g.state),R[1](I=>I.filter(fe=>fe.pending)))}).finally(()=>{g===L&&pn(()=>{ae=void 0,b==="navigate"&&F(g),h(!1),g=void 0})}))},[f,w]=O(s().value),[y,m]=O(s().state),E=In(f,y,i.queryWrapper),T=[],R=O([]),B=z(()=>typeof r.transformUrl=="function"?He(t(),r.transformUrl(E.pathname)):He(t(),E.pathname)),K=()=>{const b=B(),L={};for(let I=0;I<b.length;I++)Object.assign(L,b[I].params);return L},X=i.paramsWrapper?i.paramsWrapper(K,t):Ut(K),q={pattern:u,path:()=>u,outlet:()=>null,resolvePath(b){return Pe(u,b)}};return S(tt(s,b=>k("native",b),{defer:!0})),{base:q,location:E,params:X,isRouting:d,renderPath:c,parsePath:a,navigatorFactory:M,matches:B,beforeLeave:l,preloadRoute:N,singleFlight:r.singleFlight===void 0?!0:r.singleFlight,submissions:R};function ie(b,L,I){V(()=>{if(typeof L=="number"){L&&(i.go?i.go(L):console.warn("Router integration does not support relative routing"));return}const fe=!L||L[0]==="?",{replace:je,resolve:he,scroll:Ue,state:ve}={replace:!1,resolve:!fe,scroll:!0,...I},Ce=he?b.resolvePath(L):Pe(fe&&E.pathname||"",L);if(Ce===void 0)throw new Error(`Path '${L}' is not a routable path`);if(T.length>=jn)throw new Error("Too many redirects");const ut=f();(Ce!==ut||ve!==y())&&(En||l.confirm(Ce,I)&&(T.push({value:ut,replace:je,scroll:Ue,state:y()}),k("navigate",{value:Ce,state:ve})))})}function M(b){return b=b||de(Nt)||q,(L,I)=>ie(b,L,I)}function F(b){const L=T[0];L&&(o({...b,replace:L.replace,scroll:L.scroll}),T.length=0)}function N(b,L){const I=He(t(),b.pathname),fe=ae;ae="preload";for(let je in I){const{route:he,params:Ue}=I[je];he.component&&he.component.preload&&he.component.preload();const{preload:ve}=he;L&&ve&&rt(n(),()=>ve({params:Ue,location:{pathname:b.pathname,search:b.search,hash:b.hash,query:jt(b),state:null,key:""},intent:"preload"}))}ae=fe}}function qn(e,t,n,r){const{base:s,location:o,params:i}=e,{pattern:a,component:c,preload:l}=r().route,u=z(()=>r().path);c&&c.preload&&c.preload();const d=l?l({params:i,location:o,intent:ae||"initial"}):void 0;return{parent:t,pattern:a,path:u,outlet:()=>c?p(c,{params:i,location:o,data:d,get children(){return n()}}):n(),resolvePath(g){return Pe(s.path(),g,u())}}}const Wn=e=>t=>{const{base:n}=t,r=Be(()=>t.children),s=z(()=>Ht(r(),t.base||""));let o;const i=Dn(e,s,()=>o,{base:n,singleFlight:t.singleFlight,transformUrl:t.transformUrl});return e.create&&e.create(i),p(Un.Provider,{value:i,get children(){return p(Kn,{routerState:i,get root(){return t.root},get preload(){return t.rootPreload||t.rootLoad},get children(){return[Rt(()=>(o=nt())&&null),p(Xn,{routerState:i,get branches(){return s()}})]}})}})};function Kn(e){const t=e.routerState.location,n=e.routerState.params,r=z(()=>e.preload&&V(()=>{e.preload({params:n,location:t,intent:Hn()||"initial"})}));return p(ne,{get when(){return e.root},keyed:!0,get fallback(){return e.children},children:s=>p(s,{params:n,location:t,get data(){return r()},get children(){return e.children}})})}function Xn(e){const t=[];let n;const r=z(tt(e.routerState.matches,(s,o,i)=>{let a=o&&s.length===o.length;const c=[];for(let l=0,u=s.length;l<u;l++){const d=o&&o[l],h=s[l];i&&d&&h.route.key===d.route.key?c[l]=i[l]:(a=!1,t[l]&&t[l](),me(g=>{t[l]=g,c[l]=qn(e.routerState,c[l-1]||e.routerState.base,vt(()=>r()[l+1]),()=>{const k=e.routerState.matches();return k[l]??k[0]})}))}return t.splice(s.length).forEach(l=>l()),i&&a?i:(n=c[0],c)}));return vt(()=>r()&&n)()}const vt=e=>()=>p(ne,{get when(){return e()},keyed:!0,children:t=>p(Nt.Provider,{value:t,get children(){return t.outlet()}})}),De=e=>{const t=Be(()=>e.children);return zt(e,{get children(){return t()}})};function Yn([e,t],n,r){return[e,r?s=>t(r(s)):t]}function Jn(e){let t=!1;const n=s=>typeof s=="string"?{value:s}:s,r=Yn(O(n(e.get()),{equals:(s,o)=>s.value===o.value&&s.state===o.state}),void 0,s=>(!t&&e.set(s),A.registry&&!A.done&&(A.done=!0),s));return e.init&&Fe(e.init((s=e.get())=>{t=!0,r[1](n(s)),t=!1})),Wn({signal:r,create:e.create,utils:e.utils})}function Zn(e,t,n){return e.addEventListener(t,n),()=>e.removeEventListener(t,n)}function Qn(e,t){const n=e&&document.getElementById(e);n?n.scrollIntoView():t&&window.scrollTo(0,0)}const er=new Map;function tr(e=!0,t=!1,n="/_server",r){return s=>{const o=s.base.path(),i=s.navigatorFactory(s.base);let a,c;function l(f){return f.namespaceURI==="http://www.w3.org/2000/svg"}function u(f){if(f.defaultPrevented||f.button!==0||f.metaKey||f.altKey||f.ctrlKey||f.shiftKey)return;const w=f.composedPath().find(B=>B instanceof Node&&B.nodeName.toUpperCase()==="A");if(!w||t&&!w.hasAttribute("link"))return;const y=l(w),m=y?w.href.baseVal:w.href;if((y?w.target.baseVal:w.target)||!m&&!w.hasAttribute("state"))return;const T=(w.getAttribute("rel")||"").split(/\s+/);if(w.hasAttribute("download")||T&&T.includes("external"))return;const R=y?new URL(m,document.baseURI):new URL(m);if(!(R.origin!==window.location.origin||o&&R.pathname&&!R.pathname.toLowerCase().startsWith(o.toLowerCase())))return[w,R]}function d(f){const w=u(f);if(!w)return;const[y,m]=w,E=s.parsePath(m.pathname+m.search+m.hash),T=y.getAttribute("state");f.preventDefault(),i(E,{resolve:!1,replace:y.hasAttribute("replace"),scroll:!y.hasAttribute("noscroll"),state:T?JSON.parse(T):void 0})}function h(f){const w=u(f);if(!w)return;const[y,m]=w;r&&(m.pathname=r(m.pathname)),s.preloadRoute(m,y.getAttribute("preload")!=="false")}function g(f){clearTimeout(a);const w=u(f);if(!w)return c=null;const[y,m]=w;c!==y&&(r&&(m.pathname=r(m.pathname)),a=setTimeout(()=>{s.preloadRoute(m,y.getAttribute("preload")!=="false"),c=y},20))}function k(f){if(f.defaultPrevented)return;let w=f.submitter&&f.submitter.hasAttribute("formaction")?f.submitter.getAttribute("formaction"):f.target.getAttribute("action");if(!w)return;if(!w.startsWith("https://action/")){const m=new URL(w,Gt);if(w=s.parsePath(m.pathname+m.search),!w.startsWith(n))return}if(f.target.method.toUpperCase()!=="POST")throw new Error("Only POST forms are supported for Actions");const y=er.get(w);if(y){f.preventDefault();const m=new FormData(f.target,f.submitter);y.call({r:s,f:f.target},f.target.enctype==="multipart/form-data"?m:new URLSearchParams(m))}}Ft(["click","submit"]),document.addEventListener("click",d),e&&(document.addEventListener("mousemove",g,{passive:!0}),document.addEventListener("focusin",h,{passive:!0}),document.addEventListener("touchstart",h,{passive:!0})),document.addEventListener("submit",k),Fe(()=>{document.removeEventListener("click",d),e&&(document.removeEventListener("mousemove",g),document.removeEventListener("focusin",h),document.removeEventListener("touchstart",h)),document.removeEventListener("submit",k)})}}function nr(e){const t=()=>{const r=window.location.pathname.replace(/^\/+/,"/")+window.location.search,s=window.history.state&&window.history.state._depth&&Object.keys(window.history.state).length===1?void 0:window.history.state;return{value:r+window.location.hash,state:s}},n=Bt();return Jn({get:t,set({value:r,replace:s,scroll:o,state:i}){s?window.history.replaceState(Mn(i),"",r):window.history.pushState(i,"",r),Qn(decodeURIComponent(window.location.hash.slice(1)),o),it()},init:r=>Zn(window,"popstate",zn(r,s=>{if(s)return!n.confirm(s);{const o=t();return!n.confirm(o.value,{state:o.state})}})),create:tr(e.preload,e.explicitLinks,e.actionBase,e.transformUrl),utils:{go:r=>window.history.go(r),beforeLeave:n}})(e)}const G=e=>new DOMParser().parseFromString(e,"image/svg+xml").querySelector("svg");function Dt(e){return Object.fromEntries(e)}function rr(e){return e>127?!1:e>=48&&e<=57}function sr(e){return e>127?!1:e>=65&&e<=90||e>=97&&e<=122}function or(e){return sr(e)||rr(e)}function ir(e){if(e.constructor.name!=="String")return!1;const t=e[Symbol.iterator]();let n=t.next();for(;!n.done&&or(n.value.charCodeAt(0));)n=t.next();return n.done??!1}function ar(e){if(e.constructor.name!=="String")return!1;const t=e[Symbol.iterator]();let n=t.next();for(;!n.done&&n.value.charCodeAt(0)<=127;)n=t.next();return n.done??!1}function be(e){return e===void 0?"":e.constructor.name=="String"?e:e.join(" ")}function cr(){return O({time:0,trigger:!1})}function lr(e,t){return(t<=0||t===null||t===void 0||t.constructor.name!=="Number")&&(t=700),n=>e(r=>{let s=n.timeStamp;return r.time===0?{time:s,trigger:!1}:s-r.time<t?{time:0,trigger:!0}:{time:s,trigger:!1}})}const[ur,dr]=O({name:void 0,email:void 0,data:new Object({}),access_token:void 0}),fr=ue({user:ur,re_user:dr});function oe(){return de(fr)}function at(e){return e.name===""}function qt(e){return e.name===void 0}function Se(e){return e.name===void 0?!1:e.name.constructor.name==="String"?e.name.length!==0:!0}const hr="_CheckBox_16c0a_1",pr="_Box_16c0a_17",gr="_TickMark_16c0a_37",mr="_Content_16c0a_38",wr="_Postman_16c0a_54",vr="_Text_16c0a_71",ge={CheckBox:hr,Box:pr,TickMark:gr,Content:mr,Postman:wr,Text:vr};var yr=$("<input data-type=bool type=hidden>"),kr=$("<span>"),_r=$("<legend>"),xr=$("<div><div style=background:transparent><div>");const br={width:.6,height:.6,state:!1,tick:"",accent:"#485d6c"},Wt=e=>{const t=zt(br,e),n=()=>t.state,r=()=>t.accent,s=()=>t.tick,o=()=>t.width,i=()=>t.height,a=()=>t.legend,c=()=>t.name,[l,u]=O(n()),d=()=>u(h=>!l());return(()=>{var h=xr(),g=h.firstChild,k=g.firstChild;return W(h,"click",d),x(h,p(ne,{get when(){return c()!==void 0},get children(){var f=yr();return S(w=>{var y=ge.Postman,m=c();return y!==w.e&&_(f,w.e=y),m!==w.t&&H(f,"name",w.t=m),w},{e:void 0,t:void 0}),S(()=>f.value=l()),f}}),g),x(k,p(ne,{get when(){return s()!==""},get children(){var f=kr();return x(f,s),S(()=>_(f,ge.TickMark)),f}})),x(h,p(ne,{get when(){return a()!==void 0},get children(){var f=_r();return x(f,a),S(w=>{var y=ge.Text,m=r();return y!==w.e&&_(f,w.e=y),m!==w.t&&re(f,"color",w.t=m),w},{e:void 0,t:void 0}),f}}),null),S(f=>{var w=ge.CheckBox,y=ge.Box,m=`0.11em solid ${r()}`,E=`${o()+.19}em`,T=`${i()+.19}em`,R=l(),B=ge.Content,K=r(),X=`${o()}em`,q=`${i()}em`;return w!==f.e&&_(h,f.e=w),y!==f.t&&_(g,f.t=y),m!==f.a&&re(g,"border",f.a=m),E!==f.o&&re(g,"width",f.o=E),T!==f.i&&re(g,"height",f.i=T),R!==f.n&&H(g,"box-state",f.n=R),B!==f.s&&_(k,f.s=B),K!==f.h&&re(k,"background",f.h=K),X!==f.r&&re(k,"width",f.r=X),q!==f.d&&re(k,"height",f.d=q),f},{e:void 0,t:void 0,a:void 0,o:void 0,i:void 0,n:void 0,s:void 0,h:void 0,r:void 0,d:void 0}),h})()},Sr="_Logo_8bwge_1",Cr="_Actuator_8bwge_7",yt={Logo:Sr,Actuator:Cr},Kt=`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
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
`;var $r=$("<div><a href=/>");const Ar=()=>{const e=G(Kt);return(()=>{var t=$r(),n=t.firstChild;return x(n,e),S(r=>{var s=yt.Logo,o=yt.Actuator;return s!==r.e&&_(t,r.e=s),o!==r.t&&_(n,r.t=o),r},{e:void 0,t:void 0}),t})()},Lr="_Splash_knpkf_1",Pr={Splash:Lr};var Tr=$("<div>");const Xt=()=>{const e=G(Kt);return(()=>{var t=Tr();return x(t,e),S(()=>_(t,Pr.Splash)),t})()},Er="_PasswordField_1i8ty_1",Mr="_PswSwitch_1i8ty_6",kt={PasswordField:Er,PswSwitch:Mr},zr="_TextField_10wei_1",Or="_InputLegend_10wei_19",Rr="_InputField_10wei_29",qe={TextField:zr,InputLegend:Or,InputField:Rr};var Fr=$("<div><legend></legend><input>");function Br(e){return async t=>t.length===0?!0:await(await fetch(`/auth/field?field=${e()}&value=${t}`)).text()!=="false"}const Oe=e=>{const t=()=>e.ty??"str",n=()=>e.name,r=()=>e.type,s=()=>e.mandatory??!1,o=()=>i().blank_mandatory?()=>e.legend+Gr:i().bad_value?()=>e.legend+jr:()=>e.legend,[i,a]=O({lights_up:!1,blank_mandatory:!1,bad_value:!1}),[c,l]=O(null),[u]=et(c,Br(n),{initialValue:!0}),d=f=>a(w=>{const y=f.target;if(y.value===c())return w;if(y.value.length===0)return l(""),w;l(y.value);const m=c().length===0;return console.log(u()),{lights_up:!m,blank_mandatory:s()&&m,bad_value:!m&&!u()}}),h=()=>a(f=>({lights_up:!0,blank_mandatory:!1,bad_value:!1})),g=f=>a(w=>{let y=f.target;l(y.value);const m=c().length===0;return{lights_up:!m,blank_mandatory:s()&&m,bad_value:!m&&!u()}}),k=f=>a(w=>w.light_up?{lights_up:!0,blank_mandatory:!1,bad_value:!1}:(f.target.nextElementSibling.focus(),{lights_up:!0,blank_mandatory:!1,bad_value:!1}));return(()=>{var f=Fr(),w=f.firstChild,y=w.nextSibling;return W(w,"click",k),x(w,o),W(y,"input",d),W(y,"blur",g),W(y,"focus",h),S(m=>{var E=qe.TextField,T=i().lights_up,R=i().blank_mandatory,B=i().bad_value,K=qe.InputLegend,X=r(),q=t(),ie=`${qe.InputField}${s()?" mandatory":""}`,M=n();return E!==m.e&&_(f,m.e=E),T!==m.t&&H(f,"lights-up",m.t=T),R!==m.a&&H(f,"blank-mandatory",m.a=R),B!==m.o&&H(f,"bad-value",m.o=B),K!==m.i&&_(w,m.i=K),X!==m.n&&H(y,"type",m.n=X),q!==m.s&&H(y,"data-type",m.s=q),ie!==m.h&&_(y,m.h=ie),M!==m.r&&H(y,"name",m.r=M),m},{e:void 0,t:void 0,a:void 0,o:void 0,i:void 0,n:void 0,s:void 0,h:void 0,r:void 0}),f})()},Gr=" (this field is mandatory)",jr=" (this value is already taken)",Ur=`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
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
`,Vr=`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
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
`;var Nr=$("<div><button type=button>");const Ze=e=>{const t=()=>e.name,n=()=>e.mandatory,r=G(Ur),s=G(Vr),[o,i]=O({type:"password",svg:s}),a=()=>i(l=>l.type=="password"?{type:"text",svg:r}:{type:"password",svg:s}),c=()=>e.legend;return(()=>{var l=Nr(),u=l.firstChild;return x(l,p(Oe,{get type(){return o().type},get name(){return t()},get legend(){return c()??"Password"},get mandatory(){return n()}}),u),W(u,"click",a),x(u,()=>o().svg),S(d=>{var h=kt.PasswordField,g=kt.PswSwitch;return h!==d.e&&_(l,d.e=h),g!==d.t&&_(u,d.t=g),d},{e:void 0,t:void 0}),l})()},Ir="_TextLine_5y4ha_1",Hr={TextLine:Ir};var Dr=$("<span>");const Yt=e=>{const t=()=>e.children,n=()=>e.cls;return(()=>{var r=Dr();return x(r,t),S(()=>_(r,` ${Hr.TextLine} ${be(n())}`)),r})()},qr="_Actuator_95tug_1",Wr="_Button_95tug_13",_t={Actuator:qr,Button:Wr};var Kr=$("<button>"),Xr=$("<a>");const Z=e=>{const t=()=>e.children,n=()=>e.link,r=()=>e.class,s=()=>e.call;return n()===void 0?(()=>{var o=Kr();return W(o,"click",s()),x(o,t),S(()=>_(o,`${_t.Button} ${be(r())}`)),o})():(()=>{var o=Xr();return W(o,"click",s()),x(o,t),S(i=>{var a=`${_t.Actuator} ${be(r())}`,c=n();return a!==i.e&&_(o,i.e=a),c!==i.t&&H(o,"href",i.t=c),i},{e:void 0,t:void 0}),o})()},Yr="_Separator_vbrhy_1",xt={Separator:Yr};var Jr=$("<span>");const Jt=()=>{const[e,t]=O(!1),n=r=>t(s=>{const o=document.querySelector(`.${xt.Separator}`);if(o==null)return s;const a=o.parentElement.getBoundingClientRect(),c=r.clientX,l=r.clientY;return c>=a.left&&c<=a.right&&l<=a.bottom&&l>=a.top});return document.body.addEventListener("mousemove",n),(()=>{var r=Jr();return S(s=>{var o=xt.Separator,i=e();return o!==s.e&&_(r,s.e=o),i!==s.t&&H(r,"active",s.t=i),s},{e:void 0,t:void 0}),r})()},Zr="_WildText_t25g1_1",Qr="_WildContent_t25g1_20",bt={WildText:Zr,WildContent:Qr};var es=$("<div><span>");const Zt=e=>{const t=()=>e.text,n=()=>e.class;return(()=>{var r=es(),s=r.firstChild;return x(s,t),S(o=>{var i=`${bt.WildText} ${be(n())}`,a=bt.WildContent;return i!==o.e&&_(r,o.e=i),a!==o.t&&_(s,o.t=a),o},{e:void 0,t:void 0}),r})()},ts="_Home_mqets_1",ns="_Apps_mqets_6",rs="_App_mqets_6",ss="_LeftRtt_mqets_47",os="_RightRtt_mqets_51",is="_AppText_mqets_57",as="_AppTitle_mqets_63",cs="_AppDepict_mqets_68",ls="_Greetings_mqets_72",ee={Home:ts,Apps:ns,App:rs,LeftRtt:ss,RightRtt:os,AppText:is,AppTitle:as,AppDepict:cs,Greetings:ls},us='<svg xmlns="http://www.w3.org/2000/svg" class="ionicon" viewBox="0 0 512 512"><path d="M473 39.05a24 24 0 00-25.5-5.46L47.47 185h-.08a24 24 0 001 45.16l.41.13 137.3 58.63a16 16 0 0015.54-3.59L422 80a7.07 7.07 0 0110 10L226.66 310.26a16 16 0 00-3.59 15.54l58.65 137.38c.06.2.12.38.19.57 3.2 9.27 11.3 15.81 21.09 16.25h1a24.63 24.63 0 0023-15.46L478.39 64.62A24 24 0 00473 39.05z"/></svg>',ds='<svg xmlns="http://www.w3.org/2000/svg" class="ionicon" viewBox="0 0 512 512"><path d="M465.94 119.76l-73.7-73.7A47.68 47.68 0 00358.3 32H96a64 64 0 00-64 64v320a64 64 0 0064 64h320a64 64 0 0064-64V153.7a47.68 47.68 0 00-14.06-33.94zM120 112h176a8 8 0 018 8v48a8 8 0 01-8 8H120a8 8 0 01-8-8v-48a8 8 0 018-8zm139.75 319.91a80 80 0 1176.16-76.16 80.06 80.06 0 01-76.16 76.16z"/><circle cx="256" cy="352" r="48"/></svg>',fs='<svg xmlns="http://www.w3.org/2000/svg" class="ionicon" viewBox="0 0 512 512"><path d="M480 128a64 64 0 00-64-64h-16V48.45c0-8.61-6.62-16-15.23-16.43A16 16 0 00368 48v16H144V48.45c0-8.61-6.62-16-15.23-16.43A16 16 0 00112 48v16H96a64 64 0 00-64 64v12a4 4 0 004 4h440a4 4 0 004-4zM32 416a64 64 0 0064 64h320a64 64 0 0064-64V179a3 3 0 00-3-3H35a3 3 0 00-3 3zm344-208a24 24 0 11-24 24 24 24 0 0124-24zm0 80a24 24 0 11-24 24 24 24 0 0124-24zm-80-80a24 24 0 11-24 24 24 24 0 0124-24zm0 80a24 24 0 11-24 24 24 24 0 0124-24zm0 80a24 24 0 11-24 24 24 24 0 0124-24zm-80-80a24 24 0 11-24 24 24 24 0 0124-24zm0 80a24 24 0 11-24 24 24 24 0 0124-24zm-80-80a24 24 0 11-24 24 24 24 0 0124-24zm0 80a24 24 0 11-24 24 24 24 0 0124-24z"/></svg>',hs='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M434 461.5l-26.6-69.1c-2.1-5.1-7-8.4-12.4-8.4-4.5 0-8.6 2.2-11.1 5.9s-3 8.4-1.4 12.5l26 69.1c2.1 5.1 7 8.5 12.5 8.5h.5c4.5 0 8.7-2.2 11.2-5.9 2.5-3.8 3-8.5 1.3-12.6zM117.6 384c-5.5 0-10.4 3.3-12.4 8.4l-26.6 69.1c-1.7 4.2-1.2 8.9 1.3 12.6 2.5 3.7 6.7 5.9 11.2 5.9h.5c5.5 0 10.4-3.3 12.5-8.5l26-69.1c1.7-4.1 1.2-8.8-1.4-12.5-2.4-3.7-6.6-5.9-11.1-5.9zM256.6 384h-1.1c-7.4 0-13.4 6-13.4 13.4v36.1c0 7.4 6 14.4 13.4 14.4h1.1c7.4 0 13.4-7 13.4-14.4v-36.1c0-7.4-6-13.4-13.4-13.4z"/><g><path d="M424 128H88c-4.4 0-8 3.6-8 8v176c0 4.4 3.6 8 8 8h336c4.4 0 8-3.6 8-8V136c0-4.4-3.6-8-8-8z"/><path d="M448 80H63.9C46.3 80 32 94.3 32 111.9v224.2c0 17.6 14.3 31.9 31.9 31.9H448c17.7 0 32-14.3 32-32V112c0-17.7-14.3-32-32-32zm4 244c0 8.8-7.2 16-16 16H76c-8.8 0-16-7.2-16-16V124c0-8.8 7.2-16 16-16h364.6c3 0 5.9 1.2 8 3.3 2.1 2.1 3.3 5 3.3 8V324z"/></g><path d="M256 32c-13.4-.2-24.4 12.2-24.4 25.6h48.7c.1-13.4-10.9-25.8-24.3-25.6z"/></svg>';var Qt=$("<div>"),ps=$("<div><span><span></span><span>");const gs=()=>(()=>{var e=Qt();return x(e,p(ws,{})),S(()=>_(e,ee.Home)),e})();async function ms(){return[{name:"calendar",icon:G(fs),accent:"#00a86b",depict:"manage your schedule and affairs [not yet avalable]"},{name:"drive",icon:G(ds),accent:"#a18369",depict:"store, share and backup your files [pre-alpha release]"},{name:"comms",icon:G(us),accent:"#1475dc",depict:"talk with people in text, audio or video format [not yet avalable]"},{name:"vms",icon:G(hs),accent:"#ce1f57",depict:"manage your virtual machines [not yet avalable]"}]}const ws=()=>{const{user:e,re_user:t}=oe(),[n]=et(ms),[r,s]=O(0);return p(xe,{get children(){return[p(J,{get when(){return Se(e())},get children(){var o=Qt();return x(o,p(Cn,{get each(){return n()},children:i=>p(vs,{get icon(){return i.icon},get depict(){return i.depict},get name(){return i.name},get accent(){return i.accent},get rtt(){return r()},re_rtt:s})})),S(()=>_(o,ee.Apps)),o}}),p(J,{when:!0,get children(){return p(Zt,{get class(){return ee.Greetings},text:"welcome"})}})]}})},vs=e=>{const t=()=>e.rtt,n=()=>e.re_rtt,r=()=>e.name,s=()=>e.depict,o=()=>e.icon,i=()=>e.accent,a=()=>n()(c=>Math.abs(1-c));return(()=>{var c=ps(),l=c.firstChild,u=l.firstChild,d=u.nextSibling;return W(c,"mouseenter",a),x(c,o,l),x(u,r),x(d,s),S(h=>{var g=`${ee.App} ${t()==0?ee.RightRtt:ee.LeftRtt}`,k=i(),f=ee.AppText,w=ee.AppTitle,y=ee.AppDepict;return g!==h.e&&_(c,h.e=g),k!==h.t&&re(c,"--accent",h.t=k),f!==h.a&&_(l,h.a=f),w!==h.o&&_(u,h.o=w),y!==h.i&&_(d,h.i=y),h},{e:void 0,t:void 0,a:void 0,o:void 0,i:void 0}),c})()},ys="_Auth_w4vpc_1",ks={Auth:ys},_s="_Form_6hlzr_1",xs="_FormTitle_6hlzr_27",bs="_SubmitButton_6hlzr_31",Ss="_Note_6hlzr_49",Cs="_SwapButton_6hlzr_58",te={Form:_s,FormTitle:xs,SubmitButton:bs,Note:Ss,SwapButton:Cs};var $s=$("<form>");const en=e=>{const t=()=>e.action,n=()=>e.method,r=()=>e.children,s=()=>e.target,o=()=>e.submit;return(()=>{var i=$s();return W(i,"submit",o()),x(i,r),S(a=>{var c=te.Form,l=t(),u=n(),d=s()??"_self";return c!==a.e&&_(i,a.e=c),l!==a.t&&H(i,"action",a.t=l),u!==a.a&&H(i,"method",a.a=u),d!==a.o&&H(i,"target",a.o=d),a},{e:void 0,t:void 0,a:void 0,o:void 0}),i})()};function As(e){return new Array(...e.querySelectorAll("input")).filter(t=>t.hasAttribute("name"))}function Ls(e){const t=e.map(n=>n.name);return t.length===new Set(...t).size?new Error("duplicate input field names are not allowed"):null}function Ps(e){return e.some(t=>t.classList.contains("mandatory")&&t.value.length===0)?new Error("mandatory field is empty"):null}function Ts(e,t){return e==="bool"?["true","yes","1","on"].includes(t):["int","uint","float"].includes(e)?Number(t):t}function Es(e){const t=new Map;return e.forEach(n=>{if(n.value.length>0){const r=n.getAttribute("data-type")??"str";t.set(n.name,Ts(r,n.value))}}),t}async function tn(e){e.preventDefault();const t=e.target;if(t.tagName!=="FORM"){const i=new Error("submit event target is not a form");return window.alert(i),i}const n=t.action,r=As(t);let s=Ls(r);return s!==null?(console.error(s),s):(s=Ps(r),s!==null?(r.filter(i=>i.classList.contains("mandatory")&&i.value.length===0).reverse().forEach(i=>i.focus()),s):{map:Es(r),path:n})}var Ms=$("<h4>Register"),zs=$("<span>Already have an account?"),Os=$("<span>Login.");function Rs(e){const t=new Error;if(e.length>24)return t.message="password too long",t.cause="LengthFailure",console.error(t),t;if(e.length<8)return t.message="password too short",t.cause="LengthFailure",console.error(t),t;if(ar(e)){if(ir(e))return t.message="password needs to have at least 1 symbol (non-alphanumeric char)",t.cause="TooLittleVariation",console.error(t),t}else return t.message="password contains non ascii chars",t.cause="NonAsciiDetected",console.error(t),t;return null}function Fs(e,t){if(e!==t){const n=new Error("password verification mismatch");return console.error(n),n}return null}async function Bs(e){const t=await tn(e);if(t.constructor.name==="Error")return t;const{map:n,path:r}=t,s=n.get("user_pswd");let o=Fs(s,n.get("verify_pswd"));if(o!==null||(o=Rs(s),o!==null))return t;const i=JSON.stringify(Dt(n));console.log(i),await fetch(r,{method:"PUT",credentials:"include",headers:{"content-type":"application/json","content-length":`${i.length}`},body:i})}const Gs=e=>{const t=()=>e.swap_call;return p(en,{action:"/auth/remembrance",method:"post",target:"_blank",submit:Bs,get children(){return[(()=>{var n=Ms();return S(()=>_(n,te.FormTitle)),n})(),p(Oe,{type:"text",name:"user_name",legend:"User Name",mandatory:!0}),p(Oe,{type:"email",name:"user_email",legend:"Email"}),p(Ze,{name:"user_pswd",mandatory:!0}),p(Ze,{name:"verify_pswd",legend:"Verify Password",mandatory:!0}),p(Wt,{name:"auto_login",legend:" auto login"}),p(Z,{get class(){return te.SubmitButton},children:"Register"}),p(Jt,{}),p(Yt,{get children(){return[(()=>{var n=zs();return S(()=>_(n,te.Note)),n})(),p(Z,{get class(){return te.SwapButton},get call(){return t()},get children(){return Os()}})]}})]}})};var js=$("<h4>Login"),Us=$("<span>New to hanabi?"),Vs=$("<span>Register.");async function Ns(e){const{user:t,re_user:n}=oe();{const r=await tn(e);if(r.constructor.name==="Error")return r;const{map:s,path:o}=r,i=JSON.stringify(Dt(s)),c=await(await fetch(o,{method:"PATCH",credentials:"include",headers:{"content-type":"application/json","content-length":`${i.length}`},body:i})).json();c.data=structuredClone(t().data),n(c);const l=()=>n(u=>({name:u.name,email:u.email,data:u.data,access_token:void 0}));await new Promise(u=>setTimeout(l,1200*1e3))}}const Is=e=>{const t=()=>e.swap_call;return p(en,{action:"/auth/remembrance",method:"post",target:"_blank",submit:Ns,get children(){return[(()=>{var n=js();return S(()=>_(n,te.FormTitle)),n})(),p(Oe,{type:"text",name:"user_name",legend:"User Name or Email",mandatory:!0}),p(Ze,{name:"user_pswd",mandatory:!0}),p(Wt,{name:"persist_session",legend:" persist session"}),p(Z,{type:"submit",get class(){return te.SubmitButton},children:"Login"}),p(Jt,{}),p(Yt,{get children(){return[(()=>{var n=Us();return S(()=>_(n,te.Note)),n})(),p(Z,{get class(){return te.SwapButton},get call(){return t()},get children(){return Vs()}})]}})]}})};var Hs=$("<div>");const[Ds,qs]=O(0),Ws=ue({form:Ds,set_form:qs});function nn(){return de(Ws)}const Ks=()=>{const{user:e,re_user:t}=oe(),{form:n,set_form:r}=nn(),s=()=>r(o=>Math.abs(1-o));return(()=>{var o=Hs();return x(o,p(xe,{get children(){return[p(J,{get when(){return at(e())},get children(){return p(xe,{get children(){return[p(J,{get when(){return n()==0},get children(){return p(Is,{swap_call:s})}}),p(J,{get when(){return n()==1},get children(){return p(Gs,{swap_call:s})}})]}})}}),p(J,{get when(){return Se(e())},get children(){return p(Zt,{text:"You are already logged-in."})}})]}})),S(()=>_(o,ks.Auth)),o})()},Xs="_Initialize_jfktd_1",Ys="_Negotiate_jfktd_21",Qe={Initialize:Xs,Negotiate:Ys};var Js=$("<div>"),Zs=$("<span>negotiating an identity... ok"),Qs=$("<span>negotiating an identity...");const eo=()=>(()=>{var e=Js();return x(e,p(Xt,{}),null),x(e,p(to,{}),null),S(()=>_(e,Qe.Initialize)),e})(),to=()=>{const{user:e,re_user:t}=oe(),[n]=et(e(),no);return fn(()=>{qt(e())&&n()!==void 0&&t(n())}),p(An,{get fallback(){return(()=>{var r=Qs();return S(()=>_(r,Qe.Negotiate)),r})()},get children(){var r=Zs();return S(()=>_(r,Qe.Negotiate)),r}})};async function no(e){if(e.name!==void 0)return e;{const t=await fetch("/auth/remembrance",{method:"POST",credentials:"include"});if(t.headers.get("content-length")==="0")return{name:e.name??"",email:e.email,access_token:e.access_token,data:e.data};const n=await t.json();return{name:n.name,email:n.email,access_token:n.access_token,data:e.data}}}const ro="_Menu_1azud_1",so="_ContentItem_1azud_10",oo="_Entry_1azud_16",io="_Path_1azud_24",Q={Menu:ro,ContentItem:so,Entry:oo,Path:io},ao="_UserMenu_1bbqu_1",co="_Entry_1bbqu_16",Ae={UserMenu:ao,Entry:co},lo='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M220.8 406.1l4.8 14.8c.4 1.2 1.9 1.8 3 1.1l6.8-4.2c2.5-1.6 2.5-5.2 0-6.8l-11.5-7.2c-1.7-1-3.6.5-3.1 2.3zM286.6 421l4.9-15.2c.6-1.8-1.4-3.3-3-2.3l-11.9 7.4a4.02 4.02 0 0 0 0 6.8l7 4.4c1.2.7 2.6.1 3-1.1zM188.6 242.2c-3.9 3.5-9.6 6.4-15.7 8.5-1 .4-1.6 1.5-1.2 2.5l9.3 28.9 3.8 11.8c.4 1.2 1.9 1.8 3 1.1l7-4.3 36.6-22.5c3-1.9 2.3-6.5-1.2-7.3-14.3-3.3-26.5-9.8-36.2-18.5-1.6-1.4-3.9-1.5-5.4-.2zM192.6 310.8l-2 1.2 14.6 45.3c.4 1.2 1.9 1.8 3 1.1l27.2-16.9c2.5-1.6 2.5-5.2 0-6.8l-38.5-23.9c-1.4-.8-3-.8-4.3 0zM258.1 348.9c-1.3-.8-2.9-.8-4.2 0L212 374.5l-.1.1c-1 .8-1 2.4 0 3.2l.7.5 41.3 25.3c1.3.8 2.9.8 4.2 0l41.7-25.5.4-.3c1-.8 1-2.2 0-3l-42.1-25.9zM296.7 296.6l-38.5-23.9c-1.3-.8-2.9-.8-4.2 0l-38.5 23.9a4.02 4.02 0 0 0 0 6.8l38.5 23.9c1.3.8 2.9.8 4.2 0l38.5-23.9c2.5-1.5 2.5-5.2 0-6.8zM318.1 242.3c-9.7 8.7-22 15.1-36.2 18.5-3.5.8-4.2 5.4-1.2 7.3l36.6 22.5 7.4 4.6c1.1.7 2.6.2 3-1.1l4-12.4 9.8-30.3c-6.9-2.1-13.6-5.3-18-9.2-1.6-1.3-3.9-1.2-5.4.1zM232.4 442l1.6 5s7.5 19 22 19c15 0 22.2-19 22.2-19l1.6-4.8c.6-1.7-.1-3.7-1.7-4.6l-20-12.4c-1.3-.8-2.9-.8-4.2 0l-19.8 12.3c-1.6.8-2.3 2.7-1.7 4.5zM276.7 341.5l27.5 17.1c1.1.7 2.6.2 3-1.1l14.2-43.8c.3-.9-.1-1.8-.8-2.3l-1-.6c-1.3-.8-2.9-.8-4.2 0l-38.5 23.9c-2.8 1.6-2.8 5.3-.2 6.8z"/><path d="M376.1 168.2c-6.2 5.4-13.2 8.7-18 10.5-1.8.7-3.5-1.4-2.3-3l4-5.7c6.1-8.7 8.5-19.4 6.8-29.8C357.9 86.8 311.7 46 256 46c-55.7 0-101.9 41.2-110.6 94.7-1.7 10.5.8 21.2 6.9 29.8l4 5.6c1.2 1.6-.5 3.8-2.4 3-5.4-2.1-13.5-6.2-20.1-12.8-1.4-1.4-3.6-1.5-5.2-.4-10.2 7.3-16.8 19.1-16.8 32.5 0 22.1 17.9 40 40 40 11.3 0 28-4.7 36.6-12.3 1.5-1.3 3.8-1.3 5.3.1 15.2 13.4 36.6 20.2 62.1 20.2s47-6.8 62.1-20.2c1.5-1.3 3.8-1.4 5.3-.1 8.5 7.6 25.3 12.3 36.6 12.3 22.1 0 40-18 40-40.1 0-11.9-5.2-22.6-13.5-30-2.7-2.6-7.2-2.7-10.2-.1z"/></svg>',rn=`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
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
`,uo='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M480 176H272v.1h-32v-.1H32v48h11l5 21.5C64 313 88.5 336 144 336s96-17.4 96-90.5V224s1.5-16 16-16 16 16 16 16v21.8c0 73 42.1 90.2 97 90.2s79-25 95-90.2l5-21.8h11v-48z"/></svg>';var fo=$("<span>| profile"),ho=$("<span>| configs"),po=$("<span>| logout"),go=$("<div>");const mo=()=>{const{user:e,re_user:t}=oe(),n=G(lo),r=G(rn),s=G(uo),o=async()=>{(await fetch("/auth/remembrance",{method:"DELETE",credentials:"include",headers:{authorization:`Bearer<${e().access_token}>`}})).status!==403&&t(a=>({name:"",email:void 0,access_token:void 0,data:a.data}))};return(()=>{var i=go();return x(i,p(Z,{get class(){return Ae.Entry},get children(){return[s,fo()]}}),null),x(i,p(Z,{get class(){return Ae.Entry},get children(){return[n,ho()]}}),null),x(i,p(Z,{link:"/",get class(){return Ae.Entry},call:o,get children(){return[r,po()]}}),null),S(()=>_(i,Ae.UserMenu)),i})()},wo="_Settings_1ytnl_1",vo="_Headers_1ytnl_26",yo="_TextfulHeader_1ytnl_43",ko="_Header_1ytnl_26",_o="_TextlessHeader_1ytnl_48",xo="_Contents_1ytnl_88",ce={Settings:wo,Headers:vo,TextfulHeader:yo,Header:ko,TextlessHeader:_o,Contents:xo},bo='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M265.6 212.3c-10.5 0-18.5 4.4-24 13.2-5.5 8.8-9.1 22-10.8 39.6-.9 11.7 0 20.5 2.7 26.5s7.1 9 13.1 9c5.5 0 10.3-1.5 14.6-4.4 4.3-2.9 8.1-8.3 11.3-16.2l6.1-66c-2.2-.5-4.4-.9-6.5-1.2-2.3-.4-4.4-.5-6.5-.5z"/><path d="M256 48C141.1 48 48 141.1 48 256s93.1 208 208 208 208-93.1 208-208S370.9 48 256 48zm127.8 201.9c-.9 21.4-7.6 39.9-20 55.6-12.4 15.6-31 23.4-55.6 23.4-8.2 0-15.3-2.2-21.2-6.6-6-4.4-10.2-10.7-12.6-18.8-4.1 8.3-9.4 14.5-15.7 18.6-6.3 4.1-13.7 6.2-22.2 6.2-15.1 0-26.6-5.8-34.6-17.3s-10.9-26.8-8.8-45.9c2.6-24.4 10-44 22.2-58.7 12.2-14.7 27-22 44.4-22 12.2 0 22.1 1.3 29.5 3.8 7.4 2.5 15.6 5.7 24.5 11l-.5-.1h.8l-7.7 83.4c-.5 8.5.1 14.6 1.7 17.8 1.7 3.2 3.9 4.9 6.7 4.9 11.3 0 20.4-5.1 27.2-15.6 6.8-10.5 10.6-23.6 11.4-39.6 1.6-33-5.1-58.7-20.2-77.1-15.1-18.4-38.3-27.7-69.7-27.7-30.5 0-54.8 9.9-72.8 29.8s-27.7 46.9-29.3 81.2c-1.7 33.4 5.6 59.8 21.9 79.1 16.3 19.4 39.7 29.1 70.3 29.1 8.5 0 17.3-.9 26.5-2.7 9.1-1.8 17.1-4.1 23.7-6.8l5.8 24.2c-6.8 4.1-15.4 7.3-25.9 9.6-10.5 2.3-20.7 3.4-30.7 3.4-40.8 0-72.3-12.1-94.3-36.4-22-24.2-32.2-57.4-30.5-99.6 1.8-41.8 14.9-74.9 39.1-99.4 24.3-24.5 56.5-36.7 96.7-36.7 39.5 0 69.8 11.6 90.7 34.7 21.2 23.2 30.8 54.9 29.2 95.2z"/></svg>',So='<svg xmlns="http://www.w3.org/2000/svg" class="ionicon" viewBox="0 0 512 512"><path d="M345.14 480H274a18 18 0 01-18-18v-27.71a31.32 31.32 0 00-9.71-22.77c-7.78-7.59-19.08-11.8-30.89-11.51-21.36.5-39.4 19.3-39.4 41.06V462a18 18 0 01-18 18H87.62A55.62 55.62 0 0132 424.38V354a18 18 0 0118-18h27.71c9.16 0 18.07-3.92 25.09-11a42.06 42.06 0 0012.2-29.92C114.7 273.89 97.26 256 76.91 256H50a18 18 0 01-18-18v-70.38A55.62 55.62 0 0187.62 112h55.24a8 8 0 008-8v-6.48A65.53 65.53 0 01217.54 32c35.49.62 64.36 30.38 64.36 66.33V104a8 8 0 008 8h55.24A54.86 54.86 0 01400 166.86v55.24a8 8 0 008 8h5.66c36.58 0 66.34 29 66.34 64.64 0 36.61-29.39 66.4-65.52 66.4H408a8 8 0 00-8 8v56A54.86 54.86 0 01345.14 480z"/></svg>',sn='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 48C141.1 48 48 141.1 48 256s93.1 208 208 208 208-93.1 208-208S370.9 48 256 48zM76 256c0-48.1 18.7-93.3 52.7-127.3S207.9 76 256 76c48.1 0 93.3 18.7 127.3 52.7 32.2 32.2 50.7 74.5 52.6 119.7-8.8-10.3-24.2-24-43.8-24-27.5 0-41.7 25.7-51 42.7-1.4 2.5-2.7 4.9-3.9 7-11.4 19.2-27.3 30-42.5 28.9-13.4-.9-24.8-11.2-32.2-28.8-9.2-22.1-29.1-45.8-52.9-49.2-11.3-1.6-28.1.8-44.7 21.4-3.2 4-6.9 9.4-11.1 15.6-10.4 15.5-26.2 38.8-38.1 40.8-17.3 2.8-30.9-7.5-36.4-12.3-2.2-11.2-3.3-22.8-3.3-34.5z"/></svg>';var Co=$("<div><div></div><div>"),$o=$("<span>"),Ao=$("<div>");const Lo=()=>{const e=G(bo),t=G(So),n=G(sn),[r,s]=cr(),o=lr(s,700),[i,a]=O(!0),c=l=>a(u=>(o(l),r().trigger?!u:u));return(()=>{var l=Co(),u=l.firstChild,d=u.nextSibling;return W(u,"mousedown",c),x(u,p(We,{text:"| account",icon:e,get switch(){return i()}}),null),x(u,p(We,{text:"| apps",icon:t,get switch(){return i()}}),null),x(u,p(We,{text:"| colorschemes",icon:n,get switch(){return i()}}),null),S(h=>{var g=ce.Settings,k=ce.Headers,f=ce.Contents;return g!==h.e&&_(l,h.e=g),k!==h.t&&_(u,h.t=k),f!==h.a&&_(d,h.a=f),h},{e:void 0,t:void 0,a:void 0}),l})()},We=e=>{const t=()=>e.text,n=()=>e.icon,r=()=>e.switch;return(()=>{var s=Ao();return x(s,n,null),x(s,p(ne,{get when(){return r()},get children(){var o=$o();return x(o,t),S(()=>_(o,ce.HeaderText)),o}}),null),S(()=>_(s,`${ce.Header} ${r()?ce.TextfulHeader:ce.TextlessHeader}`)),s})()},Po=`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
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
`,To=`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
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
`,Eo='<svg xmlns="http://www.w3.org/2000/svg" class="ionicon" viewBox="0 0 512 512"><path d="M328.85 156.79a26.69 26.69 0 1018.88 7.81 26.6 26.6 0 00-18.88-7.81z"/><path d="M477.44 50.06a.29.29 0 010-.09 20.4 20.4 0 00-15.13-15.3c-29.8-7.27-76.68.48-128.63 21.28-52.36 21-101.42 52-134.58 85.22A320.7 320.7 0 00169.55 175c-22.33-1-42 2.18-58.57 9.41-57.74 25.41-74.23 90.44-78.62 117.14a25 25 0 0027.19 29h.13l64.32-7.02c.08.82.17 1.57.24 2.26a34.36 34.36 0 009.9 20.72l31.39 31.41a34.27 34.27 0 0020.71 9.91l2.15.23-7 64.24v.13A25 25 0 00206 480a25.25 25.25 0 004.15-.34C237 475.34 302 459.05 327.34 401c7.17-16.46 10.34-36.05 9.45-58.34a314.78 314.78 0 0033.95-29.55c33.43-33.26 64.53-81.92 85.31-133.52 20.69-51.36 28.48-98.59 21.39-129.53zM370.38 224.94a58.77 58.77 0 110-83.07 58.3 58.3 0 010 83.07z"/><path d="M161.93 386.44a16 16 0 00-11 2.67c-6.39 4.37-12.81 8.69-19.29 12.9-13.11 8.52-28.79-6.44-21-20l12.15-21a16 16 0 00-15.16-24.91A61.25 61.25 0 0072 353.56c-3.66 3.67-14.79 14.81-20.78 57.26A357.94 357.94 0 0048 447.59 16 16 0 0064 464h.4a359.87 359.87 0 0036.8-3.2c42.47-6 53.61-17.14 57.27-20.8a60.49 60.49 0 0017.39-35.74 16 16 0 00-13.93-17.82z"/></svg>',Mo='<svg xmlns="http://www.w3.org/2000/svg" class="ionicon" viewBox="0 0 512 512"><path d="M261.56 101.28a8 8 0 00-11.06 0L66.4 277.15a8 8 0 00-2.47 5.79L63.9 448a32 32 0 0032 32H192a16 16 0 0016-16V328a8 8 0 018-8h80a8 8 0 018 8v136a16 16 0 0016 16h96.06a32 32 0 0032-32V282.94a8 8 0 00-2.47-5.79z"/><path d="M490.91 244.15l-74.8-71.56V64a16 16 0 00-16-16h-48a16 16 0 00-16 16v32l-57.92-55.38C272.77 35.14 264.71 32 256 32c-8.68 0-16.72 3.14-22.14 8.63l-212.7 203.5c-6.22 6-7 15.87-1.34 22.37A16 16 0 0043 267.56L250.5 69.28a8 8 0 0111.06 0l207.52 198.28a16 16 0 0022.59-.44c6.14-6.36 5.63-16.86-.76-22.97z"/></svg>';var ct=$("<div>"),lt=$("<span>"),zo=$("<div><div>");const Oo=()=>{const{user:e,re_user:t}=oe(),{form:n,set_form:r}=nn(),s=G(Po);G(rn);const o=G(To),i=G(sn),a=G(Eo),c=G(Mo),l=()=>{const h=document.body.style;h.getPropertyValue("filter")===""?h.setProperty("filter","invert() contrast(.89)"):h.removeProperty("filter")},u=()=>r(1),d=()=>r(0);return(()=>{var h=ct();return x(h,p(Ro,{call:l,icon:i,text:"colors"}),null),x(h,p(Ct,{get class(){return Q.ContentItem},get content(){return p(Lo,{})},icon:a,text:"settings"}),null),x(h,p(xe,{get children(){return[p(J,{get when(){return at(e())},get children(){return[p(St,{link:"/auth",call:d,icon:s,text:"login"}),p(St,{link:"/auth",call:u,icon:o,text:"register"})]}}),p(J,{get when(){return Se(e())},get children(){return p(Ct,{get class(){return Q.ContentItem},get content(){return p(mo,{})},icon:c,get text(){return e().name}})}})]}}),null),S(()=>_(h,Q.Menu)),h})()},St=e=>{const t=()=>e.icon,n=()=>e.text,r=()=>e.link,s=()=>e.call;return(()=>{var o=ct();return x(o,p(Z,{get link(){return r()},get call(){return s()},get class(){return Q.Path},get children(){return[p(ne,{get when(){return t()!==void 0},get children(){return t()}}),(()=>{var i=lt();return x(i,n),i})()]}})),S(()=>_(o,Q.Entry)),o})()},Ro=e=>{const t=()=>e.icon,n=()=>e.text,r=()=>e.call;return(()=>{var s=ct();return x(s,p(Z,{get call(){return r()},get class(){return Q.Path},get children(){return[p(ne,{get when(){return t()!==void 0},get children(){return t()}}),(()=>{var o=lt();return x(o,n),o})()]}})),S(()=>_(s,Q.Entry)),s})()},Ct=e=>{const{active:t,up_active:n}=on(),r=()=>e.icon,s=()=>e.text,o=()=>e.call,i=()=>e.class,a=()=>e.content,[c,l]=O(!1),u=d=>l(h=>!h);return(()=>{var d=zo(),h=d.firstChild;return h.$$mousedown=u,x(h,p(Z,{get call(){return o()},get class(){return Q.Path},get children(){return[Rt(()=>r()),(()=>{var g=lt();return x(g,s),g})()]}})),x(d,p(ne,{get when(){return c()},get children(){return a()}}),null),S(g=>{var k=Q.ContentItem,f=`${Q.Entry} ${be(i())}`;return k!==g.e&&_(d,g.e=k),f!==g.t&&_(h,g.t=f),g},{e:void 0,t:void 0}),d})()};Ft(["mousedown"]);const Fo="_Page_e1i3l_1",Bo={Page:Fo};var Go=$("<div>");const jo=e=>{const t=()=>e.children;return(()=>{var n=Go();return x(n,p(Ar,{}),null),x(n,p(Oo,{}),null),x(n,t,null),S(()=>_(n,Bo.Page)),n})()},Uo="_App_wcrpu_1",Vo={App:Uo};var No=$("<div>");const Io=()=>{const{user:e,re_user:t}=oe(),{active:n,up_active:r}=on();return(()=>{var s=No();return W(s,"click",()=>console.log(e())),x(s,p(xe,{get children(){return[p(J,{get when(){return qt(e())},get children(){return p(eo,{})}}),p(J,{get when(){return at(e())||Se(e())},get children(){return p(jo,{get children(){return p(nr,{get children(){return[p(De,{path:"/",component:gs}),p(De,{path:"/auth",component:Ks}),p(De,{path:"*",component:Xt})]}})}})}})]}})),S(()=>_(s,Vo.App)),s})()},[Ho,Do]=O(document.body),qo=ue({active:Ho,up_active:Do});function on(){return de(qo)}async function Wo(){if(!document.hidden)return;const{user:e,re_user:t}=oe();if(!Se(e()))return;const n=JSON.stringify({name:e().name,email:e().email,access_token:e().access_token}),r=await fetch("auth/cache",{method:"POST",credentials:"include",headers:{"content-type":"application/json","content-length":`${n.length}`},keepalive:!0,body:n});console.log(r)}window.addEventListener("visibilitychange",Wo);Pn(()=>p(Io,{}),document.body);
