(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function n(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(s){if(s.ep)return;s.ep=!0;const o=n(s);fetch(s.href,o)}})();const A={context:void 0,registry:void 0,effects:void 0,done:!1,getContextId(){return ut(this.context.count)},getNextContextId(){return ut(this.context.count++)}};function ut(e){const t=String(e),n=t.length-1;return A.context.id+(n?String.fromCharCode(96+n):"")+t}function ve(e){A.context=e}const sn=!1,on=(e,t)=>e===t,We=Symbol("solid-proxy"),an=typeof Proxy=="function",ln=Symbol("solid-track"),Le={equals:on};let St=Tt;const q=1,ke=2,$t={owned:null,cleanups:null,context:null,owner:null},Ve={};var S=null;let m=null,cn=null,L=null,V=null,U=null,Oe=0;function pe(e,t){const n=L,r=S,s=e.length===0,o=t===void 0?r:t,i=s?$t:{owned:null,cleanups:null,context:o?o.context:null,owner:o},a=s?e:()=>e(()=>j(()=>se(i)));S=i,L=null;try{return H(a,!0)}finally{L=n,S=r}}function O(e,t){t=t?Object.assign({},Le,t):Le;const n={value:e,observers:null,observerSlots:null,comparator:t.equals||void 0},r=s=>(typeof s=="function"&&(m&&m.running&&m.sources.has(n)?s=s(n.tValue):s=s(n.value)),Lt(n,s));return[Pt.bind(n),r]}function dt(e,t,n){const r=Be(e,t,!0,q);ge(r)}function C(e,t,n){const r=Be(e,t,!1,q);ge(r)}function un(e,t,n){St=wn;const r=Be(e,t,!1,q),s=ae&&ce(ae);s&&(r.suspense=s),r.user=!0,U?U.push(r):ge(r)}function M(e,t,n){n=n?Object.assign({},Le,n):Le;const r=Be(e,t,!0,0);return r.observers=null,r.observerSlots=null,r.comparator=n.equals||void 0,ge(r),Pt.bind(r)}function dn(e){return e&&typeof e=="object"&&"then"in e}function At(e,t,n){let r,s,o;typeof t=="function"?(r=e,s=t,o={}):(r=!0,s=e,o=t||{});let i=null,a=Ve,l=null,u=!1,c=!1,d="initialValue"in o,h=typeof r=="function"&&M(r);const p=new Set,[v,f]=(o.storage||O)(o.initialValue),[w,k]=O(void 0),[y,E]=O(void 0,{equals:!1}),[T,R]=O(d?"ready":"unresolved");A.context&&(l=A.getNextContextId(),o.ssrLoadFrom==="initial"?a=o.initialValue:A.load&&A.has(l)&&(a=A.load(l)));function G(z,F,I,b){return i===z&&(i=null,b!==void 0&&(d=!0),(z===a||F===a)&&o.onHydrated&&queueMicrotask(()=>o.onHydrated(b,{value:F})),a=Ve,m&&z&&u?(m.promises.delete(z),u=!1,H(()=>{m.running=!0,te(F,I)},!1)):te(F,I)),F}function te(z,F){H(()=>{F===void 0&&f(()=>z),R(F!==void 0?"errored":d?"ready":"unresolved"),k(F);for(const I of p.keys())I.decrement();p.clear()},!1)}function ne(){const z=ae&&ce(ae),F=v(),I=w();if(I!==void 0&&!i)throw I;return L&&!L.user&&z&&dt(()=>{y(),i&&(z.resolved&&m&&u?m.promises.add(i):p.has(z)||(z.increment(),p.add(z)))}),F}function Z(z=!0){if(z!==!1&&c)return;c=!1;const F=h?h():r;if(u=m&&m.running,F==null||F===!1){G(i,j(v));return}m&&i&&m.promises.delete(i);let I;const b=a!==Ve?a:j(()=>{try{return s(F,{value:v(),refetching:z})}catch(P){I=P}});if(I!==void 0){G(i,void 0,Ae(I),F);return}else if(!dn(b))return G(i,b,void 0,F),b;return i=b,"v"in b?(b.s===1?G(i,b.v,void 0,F):G(i,void 0,Ae(b.v),F),b):(c=!0,queueMicrotask(()=>c=!1),H(()=>{R(d?"refreshing":"pending"),E()},!1),b.then(P=>G(b,P,void 0,F),P=>G(b,void 0,Ae(P),F)))}Object.defineProperties(ne,{state:{get:()=>T()},error:{get:()=>w()},loading:{get(){const z=T();return z==="pending"||z==="refreshing"}},latest:{get(){if(!d)return ne();const z=w();if(z&&!i)throw z;return v()}}});let be=S;return h?dt(()=>(be=S,Z(!1))):Z(!1),[ne,{refetch:z=>nt(be,()=>Z(z)),mutate:f}]}function fn(e){return H(e,!1)}function j(e){if(L===null)return e();const t=L;L=null;try{return e()}finally{L=t}}function et(e,t,n){const r=Array.isArray(e);let s,o=n&&n.defer;return i=>{let a;if(r){a=Array(e.length);for(let u=0;u<e.length;u++)a[u]=e[u]()}else a=e();if(o)return o=!1,i;const l=j(()=>t(a,s,i));return s=a,l}}function Re(e){return S===null||(S.cleanups===null?S.cleanups=[e]:S.cleanups.push(e)),e}function tt(){return S}function nt(e,t){const n=S,r=L;S=e,L=null;try{return H(t,!0)}catch(s){rt(s)}finally{S=n,L=r}}function hn(e){if(m&&m.running)return e(),m.done;const t=L,n=S;return Promise.resolve().then(()=>{L=t,S=n;let r;return ae&&(r=m||(m={sources:new Set,effects:[],promises:new Set,disposed:new Set,queue:new Set,running:!0}),r.done||(r.done=new Promise(s=>r.resolve=s)),r.running=!0),H(e,!1),L=S=null,r?r.done:void 0})}const[jo,ft]=O(!1);function pn(e){U.push.apply(U,e),e.length=0}function le(e,t){const n=Symbol("context");return{id:n,Provider:vn(n),defaultValue:e}}function ce(e){let t;return S&&S.context&&(t=S.context[e.id])!==void 0?t:e.defaultValue}function Fe(e){const t=M(e),n=M(()=>Ke(t()));return n.toArray=()=>{const r=n();return Array.isArray(r)?r:r!=null?[r]:[]},n}let ae;function gn(){return ae||(ae=le())}function Pt(){const e=m&&m.running;if(this.sources&&(e?this.tState:this.state))if((e?this.tState:this.state)===q)ge(this);else{const t=V;V=null,H(()=>Ee(this),!1),V=t}if(L){const t=this.observers?this.observers.length:0;L.sources?(L.sources.push(this),L.sourceSlots.push(t)):(L.sources=[this],L.sourceSlots=[t]),this.observers?(this.observers.push(L),this.observerSlots.push(L.sources.length-1)):(this.observers=[L],this.observerSlots=[L.sources.length-1])}return e&&m.sources.has(this)?this.tValue:this.value}function Lt(e,t,n){let r=m&&m.running&&m.sources.has(e)?e.tValue:e.value;if(!e.comparator||!e.comparator(r,t)){if(m){const s=m.running;(s||!n&&m.sources.has(e))&&(m.sources.add(e),e.tValue=t),s||(e.value=t)}else e.value=t;e.observers&&e.observers.length&&H(()=>{for(let s=0;s<e.observers.length;s+=1){const o=e.observers[s],i=m&&m.running;i&&m.disposed.has(o)||((i?!o.tState:!o.state)&&(o.pure?V.push(o):U.push(o),o.observers&&Et(o)),i?o.tState=q:o.state=q)}if(V.length>1e6)throw V=[],new Error},!1)}return t}function ge(e){if(!e.fn)return;se(e);const t=Oe;ht(e,m&&m.running&&m.sources.has(e)?e.tValue:e.value,t),m&&!m.running&&m.sources.has(e)&&queueMicrotask(()=>{H(()=>{m&&(m.running=!0),L=S=e,ht(e,e.tValue,t),L=S=null},!1)})}function ht(e,t,n){let r;const s=S,o=L;L=S=e;try{r=e.fn(t)}catch(i){return e.pure&&(m&&m.running?(e.tState=q,e.tOwned&&e.tOwned.forEach(se),e.tOwned=void 0):(e.state=q,e.owned&&e.owned.forEach(se),e.owned=null)),e.updatedAt=n+1,rt(i)}finally{L=o,S=s}(!e.updatedAt||e.updatedAt<=n)&&(e.updatedAt!=null&&"observers"in e?Lt(e,r,!0):m&&m.running&&e.pure?(m.sources.add(e),e.tValue=r):e.value=r,e.updatedAt=n)}function Be(e,t,n,r=q,s){const o={fn:e,state:r,updatedAt:null,owned:null,sources:null,sourceSlots:null,cleanups:null,value:t,owner:S,context:S?S.context:null,pure:n};return m&&m.running&&(o.state=0,o.tState=r),S===null||S!==$t&&(m&&m.running&&S.pure?S.tOwned?S.tOwned.push(o):S.tOwned=[o]:S.owned?S.owned.push(o):S.owned=[o]),o}function Te(e){const t=m&&m.running;if((t?e.tState:e.state)===0)return;if((t?e.tState:e.state)===ke)return Ee(e);if(e.suspense&&j(e.suspense.inFallback))return e.suspense.effects.push(e);const n=[e];for(;(e=e.owner)&&(!e.updatedAt||e.updatedAt<Oe);){if(t&&m.disposed.has(e))return;(t?e.tState:e.state)&&n.push(e)}for(let r=n.length-1;r>=0;r--){if(e=n[r],t){let s=e,o=n[r+1];for(;(s=s.owner)&&s!==o;)if(m.disposed.has(s))return}if((t?e.tState:e.state)===q)ge(e);else if((t?e.tState:e.state)===ke){const s=V;V=null,H(()=>Ee(e,n[0]),!1),V=s}}}function H(e,t){if(V)return e();let n=!1;t||(V=[]),U?n=!0:U=[],Oe++;try{const r=e();return mn(n),r}catch(r){n||(U=null),V=null,rt(r)}}function mn(e){if(V&&(Tt(V),V=null),e)return;let t;if(m){if(!m.promises.size&&!m.queue.size){const r=m.sources,s=m.disposed;U.push.apply(U,m.effects),t=m.resolve;for(const o of U)"tState"in o&&(o.state=o.tState),delete o.tState;m=null,H(()=>{for(const o of s)se(o);for(const o of r){if(o.value=o.tValue,o.owned)for(let i=0,a=o.owned.length;i<a;i++)se(o.owned[i]);o.tOwned&&(o.owned=o.tOwned),delete o.tValue,delete o.tOwned,o.tState=0}ft(!1)},!1)}else if(m.running){m.running=!1,m.effects.push.apply(m.effects,U),U=null,ft(!0);return}}const n=U;U=null,n.length&&H(()=>St(n),!1),t&&t()}function Tt(e){for(let t=0;t<e.length;t++)Te(e[t])}function wn(e){let t,n=0;for(t=0;t<e.length;t++){const r=e[t];r.user?e[n++]=r:Te(r)}if(A.context){if(A.count){A.effects||(A.effects=[]),A.effects.push(...e.slice(0,n));return}ve()}for(A.effects&&(A.done||!A.count)&&(e=[...A.effects,...e],n+=A.effects.length,delete A.effects),t=0;t<n;t++)Te(e[t])}function Ee(e,t){const n=m&&m.running;n?e.tState=0:e.state=0;for(let r=0;r<e.sources.length;r+=1){const s=e.sources[r];if(s.sources){const o=n?s.tState:s.state;o===q?s!==t&&(!s.updatedAt||s.updatedAt<Oe)&&Te(s):o===ke&&Ee(s,t)}}}function Et(e){const t=m&&m.running;for(let n=0;n<e.observers.length;n+=1){const r=e.observers[n];(t?!r.tState:!r.state)&&(t?r.tState=ke:r.state=ke,r.pure?V.push(r):U.push(r),r.observers&&Et(r))}}function se(e){let t;if(e.sources)for(;e.sources.length;){const n=e.sources.pop(),r=e.sourceSlots.pop(),s=n.observers;if(s&&s.length){const o=s.pop(),i=n.observerSlots.pop();r<s.length&&(o.sourceSlots[i]=r,s[r]=o,n.observerSlots[r]=i)}}if(e.tOwned){for(t=e.tOwned.length-1;t>=0;t--)se(e.tOwned[t]);delete e.tOwned}if(m&&m.running&&e.pure)Mt(e,!0);else if(e.owned){for(t=e.owned.length-1;t>=0;t--)se(e.owned[t]);e.owned=null}if(e.cleanups){for(t=e.cleanups.length-1;t>=0;t--)e.cleanups[t]();e.cleanups=null}m&&m.running?e.tState=0:e.state=0}function Mt(e,t){if(t||(e.tState=0,m.disposed.add(e)),e.owned)for(let n=0;n<e.owned.length;n++)Mt(e.owned[n])}function Ae(e){return e instanceof Error?e:new Error(typeof e=="string"?e:"Unknown error",{cause:e})}function rt(e,t=S){throw Ae(e)}function Ke(e){if(typeof e=="function"&&!e.length)return Ke(e());if(Array.isArray(e)){const t=[];for(let n=0;n<e.length;n++){const r=Ke(e[n]);Array.isArray(r)?t.push.apply(t,r):t.push(r)}return t}return e}function vn(e,t){return function(r){let s;return C(()=>s=j(()=>(S.context={...S.context,[e]:r.value},Fe(()=>r.children))),void 0),s}}const yn=Symbol("fallback");function pt(e){for(let t=0;t<e.length;t++)e[t]()}function kn(e,t,n={}){let r=[],s=[],o=[],i=0,a=t.length>1?[]:null;return Re(()=>pt(o)),()=>{let l=e()||[],u=l.length,c,d;return l[ln],j(()=>{let p,v,f,w,k,y,E,T,R;if(u===0)i!==0&&(pt(o),o=[],r=[],s=[],i=0,a&&(a=[])),n.fallback&&(r=[yn],s[0]=pe(G=>(o[0]=G,n.fallback())),i=1);else if(i===0){for(s=new Array(u),d=0;d<u;d++)r[d]=l[d],s[d]=pe(h);i=u}else{for(f=new Array(u),w=new Array(u),a&&(k=new Array(u)),y=0,E=Math.min(i,u);y<E&&r[y]===l[y];y++);for(E=i-1,T=u-1;E>=y&&T>=y&&r[E]===l[T];E--,T--)f[T]=s[E],w[T]=o[E],a&&(k[T]=a[E]);for(p=new Map,v=new Array(T+1),d=T;d>=y;d--)R=l[d],c=p.get(R),v[d]=c===void 0?-1:c,p.set(R,d);for(c=y;c<=E;c++)R=r[c],d=p.get(R),d!==void 0&&d!==-1?(f[d]=s[c],w[d]=o[c],a&&(k[d]=a[c]),d=v[d],p.set(R,d)):o[c]();for(d=y;d<u;d++)d in f?(s[d]=f[d],o[d]=w[d],a&&(a[d]=k[d],a[d](d))):s[d]=pe(h);s=s.slice(0,i=u),r=l.slice(0)}return s});function h(p){if(o[d]=p,a){const[v,f]=O(d);return a[d]=f,t(l[d],v)}return t(l[d])}}}function g(e,t){return j(()=>e(t||{}))}function Se(){return!0}const _n={get(e,t,n){return t===We?n:e.get(t)},has(e,t){return t===We?!0:e.has(t)},set:Se,deleteProperty:Se,getOwnPropertyDescriptor(e,t){return{configurable:!0,enumerable:!0,get(){return e.get(t)},set:Se,deleteProperty:Se}},ownKeys(e){return e.keys()}};function je(e){return(e=typeof e=="function"?e():e)?e:{}}function xn(){for(let e=0,t=this.length;e<t;++e){const n=this[e]();if(n!==void 0)return n}}function zt(...e){let t=!1;for(let i=0;i<e.length;i++){const a=e[i];t=t||!!a&&We in a,e[i]=typeof a=="function"?(t=!0,M(a)):a}if(an&&t)return new Proxy({get(i){for(let a=e.length-1;a>=0;a--){const l=je(e[a])[i];if(l!==void 0)return l}},has(i){for(let a=e.length-1;a>=0;a--)if(i in je(e[a]))return!0;return!1},keys(){const i=[];for(let a=0;a<e.length;a++)i.push(...Object.keys(je(e[a])));return[...new Set(i)]}},_n);const n={},r=Object.create(null);for(let i=e.length-1;i>=0;i--){const a=e[i];if(!a)continue;const l=Object.getOwnPropertyNames(a);for(let u=l.length-1;u>=0;u--){const c=l[u];if(c==="__proto__"||c==="constructor")continue;const d=Object.getOwnPropertyDescriptor(a,c);if(!r[c])r[c]=d.get?{enumerable:!0,configurable:!0,get:xn.bind(n[c]=[d.get.bind(a)])}:d.value!==void 0?d:void 0;else{const h=n[c];h&&(d.get?h.push(d.get.bind(a)):d.value!==void 0&&h.push(()=>d.value))}}}const s={},o=Object.keys(r);for(let i=o.length-1;i>=0;i--){const a=o[i],l=r[a];l&&l.get?Object.defineProperty(s,a,l):s[a]=l?l.value:void 0}return s}const Ot=e=>`Stale read from <${e}>.`;function bn(e){const t="fallback"in e&&{fallback:()=>e.fallback};return M(kn(()=>e.each,e.children,t||void 0))}function ee(e){const t=e.keyed,n=M(()=>e.when,void 0,void 0),r=t?n:M(n,void 0,{equals:(s,o)=>!s==!o});return M(()=>{const s=r();if(s){const o=e.children;return typeof o=="function"&&o.length>0?j(()=>o(t?s:()=>{if(!j(r))throw Ot("Show");return n()})):o}return e.fallback},void 0,void 0)}function _e(e){const t=Fe(()=>e.children),n=M(()=>{const r=t(),s=Array.isArray(r)?r:[r];let o=()=>{};for(let i=0;i<s.length;i++){const a=i,l=s[i],u=o,c=M(()=>u()?void 0:l.when,void 0,void 0),d=l.keyed?c:M(c,void 0,{equals:(h,p)=>!h==!p});o=()=>u()||(d()?[a,c,l]:void 0)}return o});return M(()=>{const r=n()();if(!r)return e.fallback;const[s,o,i]=r,a=i.children;return typeof a=="function"&&a.length>0?j(()=>a(i.keyed?o():()=>{if(j(n)()?.[0]!==s)throw Ot("Match");return o()})):a},void 0,void 0)}function W(e){return e}const Cn=le();function Sn(e){let t=0,n,r,s,o,i;const[a,l]=O(!1),u=gn(),c={increment:()=>{++t===1&&l(!0)},decrement:()=>{--t===0&&l(!1)},inFallback:a,effects:[],resolved:!1},d=tt();if(A.context&&A.load){const v=A.getContextId();let f=A.load(v);if(f&&(typeof f!="object"||f.s!==1?s=f:A.gather(v)),s&&s!=="$$f"){const[w,k]=O(void 0,{equals:!1});o=w,s.then(()=>{if(A.done)return k();A.gather(v),ve(r),k(),ve()},y=>{i=y,k()})}}const h=ce(Cn);h&&(n=h.register(c.inFallback));let p;return Re(()=>p&&p()),g(u.Provider,{value:c,get children(){return M(()=>{if(i)throw i;if(r=A.context,o)return o(),o=void 0;r&&s==="$$f"&&ve();const v=M(()=>e.children);return M(f=>{const w=c.inFallback(),{showContent:k=!0,showFallback:y=!0}=n?n():{};if((!w||s&&s!=="$$f")&&k)return c.resolved=!0,p&&p(),p=r=s=void 0,pn(c.effects),v();if(y)return p?f:pe(E=>(p=E,r&&(ve({id:r.id+"F",count:0}),r=void 0),e.fallback),d)})})}})}const Rt=e=>M(()=>e());function $n(e,t,n){let r=n.length,s=t.length,o=r,i=0,a=0,l=t[s-1].nextSibling,u=null;for(;i<s||a<o;){if(t[i]===n[a]){i++,a++;continue}for(;t[s-1]===n[o-1];)s--,o--;if(s===i){const c=o<r?a?n[a-1].nextSibling:n[o-a]:l;for(;a<o;)e.insertBefore(n[a++],c)}else if(o===a)for(;i<s;)(!u||!u.has(t[i]))&&t[i].remove(),i++;else if(t[i]===n[o-1]&&n[a]===t[s-1]){const c=t[--s].nextSibling;e.insertBefore(n[a++],t[i++].nextSibling),e.insertBefore(n[--o],c),t[s]=n[o]}else{if(!u){u=new Map;let d=a;for(;d<o;)u.set(n[d],d++)}const c=u.get(t[i]);if(c!=null)if(a<c&&c<o){let d=i,h=1,p;for(;++d<s&&d<o&&!((p=u.get(t[d]))==null||p!==c+h);)h++;if(h>c-a){const v=t[i];for(;a<c;)e.insertBefore(n[a++],v)}else e.replaceChild(n[a++],t[i++])}else i++;else t[i++].remove()}}}const gt="_$DX_DELEGATE";function An(e,t,n,r={}){let s;return pe(o=>{s=o,t===document?e():x(t,e(),t.firstChild?null:void 0,n)},r.owner),()=>{s(),t.textContent=""}}function $(e,t,n,r){let s;const o=()=>{const a=document.createElement("template");return a.innerHTML=e,a.content.firstChild},i=()=>(s||(s=o())).cloneNode(!0);return i.cloneNode=i,i}function Ft(e,t=window.document){const n=t[gt]||(t[gt]=new Set);for(let r=0,s=e.length;r<s;r++){const o=e[r];n.has(o)||(n.add(o),t.addEventListener(o,Pn))}}function D(e,t,n){st(e)||(n==null?e.removeAttribute(t):e.setAttribute(t,n))}function _(e,t){st(e)||(t==null?e.removeAttribute("class"):e.className=t)}function K(e,t,n,r){if(Array.isArray(n)){const s=n[0];e.addEventListener(t,n[0]=o=>s.call(e,n[1],o))}else e.addEventListener(t,n,typeof n!="function"&&n)}function re(e,t,n){n!=null?e.style.setProperty(t,n):e.style.removeProperty(t)}function x(e,t,n,r){if(n!==void 0&&!r&&(r=[]),typeof t!="function")return Me(e,t,r,n);C(s=>Me(e,t(),s,n),r)}function st(e){return!!A.context&&!A.done&&(!e||e.isConnected)}function Pn(e){if(A.registry&&A.events&&A.events.find(([l,u])=>u===e))return;let t=e.target;const n=`$$${e.type}`,r=e.target,s=e.currentTarget,o=l=>Object.defineProperty(e,"target",{configurable:!0,value:l}),i=()=>{const l=t[n];if(l&&!t.disabled){const u=t[`${n}Data`];if(u!==void 0?l.call(t,u,e):l.call(t,e),e.cancelBubble)return}return t.host&&typeof t.host!="string"&&!t.host._$host&&t.contains(e.target)&&o(t.host),!0},a=()=>{for(;i()&&(t=t._$host||t.parentNode||t.host););};if(Object.defineProperty(e,"currentTarget",{configurable:!0,get(){return t||document}}),A.registry&&!A.done&&(A.done=_$HY.done=!0),e.composedPath){const l=e.composedPath();o(l[0]);for(let u=0;u<l.length-2&&(t=l[u],!!i());u++){if(t._$host){t=t._$host,a();break}if(t.parentNode===s)break}}else a();o(r)}function Me(e,t,n,r,s){const o=st(e);if(o){!n&&(n=[...e.childNodes]);let l=[];for(let u=0;u<n.length;u++){const c=n[u];c.nodeType===8&&c.data.slice(0,2)==="!$"?c.remove():l.push(c)}n=l}for(;typeof n=="function";)n=n();if(t===n)return n;const i=typeof t,a=r!==void 0;if(e=a&&n[0]&&n[0].parentNode||e,i==="string"||i==="number"){if(o||i==="number"&&(t=t.toString(),t===n))return n;if(a){let l=n[0];l&&l.nodeType===3?l.data!==t&&(l.data=t):l=document.createTextNode(t),n=fe(e,n,r,l)}else n!==""&&typeof n=="string"?n=e.firstChild.data=t:n=e.textContent=t}else if(t==null||i==="boolean"){if(o)return n;n=fe(e,n,r)}else{if(i==="function")return C(()=>{let l=t();for(;typeof l=="function";)l=l();n=Me(e,l,n,r)}),()=>n;if(Array.isArray(t)){const l=[],u=n&&Array.isArray(n);if(Xe(l,t,n,s))return C(()=>n=Me(e,l,n,r,!0)),()=>n;if(o){if(!l.length)return n;if(r===void 0)return n=[...e.childNodes];let c=l[0];if(c.parentNode!==e)return n;const d=[c];for(;(c=c.nextSibling)!==r;)d.push(c);return n=d}if(l.length===0){if(n=fe(e,n,r),a)return n}else u?n.length===0?mt(e,l,r):$n(e,n,l):(n&&fe(e),mt(e,l));n=l}else if(t.nodeType){if(o&&t.parentNode)return n=a?[t]:t;if(Array.isArray(n)){if(a)return n=fe(e,n,r,t);fe(e,n,null,t)}else n==null||n===""||!e.firstChild?e.appendChild(t):e.replaceChild(t,e.firstChild);n=t}}return n}function Xe(e,t,n,r){let s=!1;for(let o=0,i=t.length;o<i;o++){let a=t[o],l=n&&n[e.length],u;if(!(a==null||a===!0||a===!1))if((u=typeof a)=="object"&&a.nodeType)e.push(a);else if(Array.isArray(a))s=Xe(e,a,l)||s;else if(u==="function")if(r){for(;typeof a=="function";)a=a();s=Xe(e,Array.isArray(a)?a:[a],Array.isArray(l)?l:[l])||s}else e.push(a),s=!0;else{const c=String(a);l&&l.nodeType===3&&l.data===c?e.push(l):e.push(document.createTextNode(c))}}return s}function mt(e,t,n=null){for(let r=0,s=t.length;r<s;r++)e.insertBefore(t[r],n)}function fe(e,t,n,r){if(n===void 0)return e.textContent="";const s=r||document.createTextNode("");if(t.length){let o=!1;for(let i=t.length-1;i>=0;i--){const a=t[i];if(s!==a){const l=a.parentNode===e;!o&&!i?l?e.replaceChild(s,a):e.insertBefore(s,n):l&&a.remove()}else o=!0}}else e.insertBefore(s,n);return[s]}const Ln=!1;function Bt(){let e=new Set;function t(s){return e.add(s),()=>e.delete(s)}let n=!1;function r(s,o){if(n)return!(n=!1);const i={to:s,options:o,defaultPrevented:!1,preventDefault:()=>i.defaultPrevented=!0};for(const a of e)a.listener({...i,from:a.location,retry:l=>{l&&(n=!0),a.navigate(s,{...o,resolve:!1})}});return!i.defaultPrevented}return{subscribe:t,confirm:r}}let Ye;function ot(){(!window.history.state||window.history.state._depth==null)&&window.history.replaceState({...window.history.state,_depth:window.history.length-1},""),Ye=window.history.state._depth}ot();function Tn(e){return{...e,_depth:window.history.state&&window.history.state._depth}}function En(e,t){let n=!1;return()=>{const r=Ye;ot();const s=r==null?null:Ye-r;if(n){n=!1;return}s&&t(s)?(n=!0,window.history.go(-s)):e()}}const Mn=/^(?:[a-z0-9]+:)?\/\//i,zn=/^\/+|(\/)\/+$/g,Gt="http://sr";function ye(e,t=!1){const n=e.replace(zn,"$1");return n?t||/^[?#]/.test(n)?n:"/"+n:""}function Pe(e,t,n){if(Mn.test(t))return;const r=ye(e),s=n&&ye(n);let o="";return!s||t.startsWith("/")?o=r:s.toLowerCase().indexOf(r.toLowerCase())!==0?o=r+s:o=s,(o||"/")+ye(t,!o)}function On(e,t){return ye(e).replace(/\/*(\*.*)?$/g,"")+ye(t)}function Ut(e){const t={};return e.searchParams.forEach((n,r)=>{r in t?Array.isArray(t[r])?t[r].push(n):t[r]=[t[r],n]:t[r]=n}),t}function Rn(e,t,n){const[r,s]=e.split("/*",2),o=r.split("/").filter(Boolean),i=o.length;return a=>{const l=a.split("/").filter(Boolean),u=l.length-i;if(u<0||u>0&&s===void 0&&!t)return null;const c={path:i?"":"/",params:{}},d=h=>n===void 0?void 0:n[h];for(let h=0;h<i;h++){const p=o[h],v=p[0]===":",f=v?l[h]:l[h].toLowerCase(),w=v?p.slice(1):p.toLowerCase();if(v&&Ie(f,d(w)))c.params[w]=f;else if(v||!Ie(f,w))return null;c.path+=`/${f}`}if(s){const h=u?l.slice(-u).join("/"):"";if(Ie(h,d(s)))c.params[s]=h;else return null}return c}}function Ie(e,t){const n=r=>r===e;return t===void 0?!0:typeof t=="string"?n(t):typeof t=="function"?t(e):Array.isArray(t)?t.some(n):t instanceof RegExp?t.test(e):!1}function Fn(e){const[t,n]=e.pattern.split("/*",2),r=t.split("/").filter(Boolean);return r.reduce((s,o)=>s+(o.startsWith(":")?2:3),r.length-(n===void 0?0:1))}function Vt(e){const t=new Map,n=tt();return new Proxy({},{get(r,s){return t.has(s)||nt(n,()=>t.set(s,M(()=>e()[s]))),t.get(s)()},getOwnPropertyDescriptor(){return{enumerable:!0,configurable:!0}},ownKeys(){return Reflect.ownKeys(e())},has(r,s){return s in e()}})}function jt(e){let t=/(\/?\:[^\/]+)\?/.exec(e);if(!t)return[e];let n=e.slice(0,t.index),r=e.slice(t.index+t[0].length);const s=[n,n+=t[1]];for(;t=/^(\/\:[^\/]+)\?/.exec(r);)s.push(n+=t[1]),r=r.slice(t[0].length);return jt(r).reduce((o,i)=>[...o,...s.map(a=>a+i)],[])}const Bn=100,Gn=le(),It=le();function Un(e,t=""){const{component:n,preload:r,load:s,children:o,info:i}=e,a=!o||Array.isArray(o)&&!o.length,l={key:e,component:n,preload:r||s,info:i};return Nt(e.path).reduce((u,c)=>{for(const d of jt(c)){const h=On(t,d);let p=a?h:h.split("/*",1)[0];p=p.split("/").map(v=>v.startsWith(":")||v.startsWith("*")?v:encodeURIComponent(v)).join("/"),u.push({...l,originalPath:c,pattern:p,matcher:Rn(p,!a,e.matchFilters)})}return u},[])}function Vn(e,t=0){return{routes:e,score:Fn(e[e.length-1])*1e4-t,matcher(n){const r=[];for(let s=e.length-1;s>=0;s--){const o=e[s],i=o.matcher(n);if(!i)return null;r.unshift({...i,route:o})}return r}}}function Nt(e){return Array.isArray(e)?e:[e]}function Ht(e,t="",n=[],r=[]){const s=Nt(e);for(let o=0,i=s.length;o<i;o++){const a=s[o];if(a&&typeof a=="object"){a.hasOwnProperty("path")||(a.path="");const l=Un(a,t);for(const u of l){n.push(u);const c=Array.isArray(a.children)&&a.children.length===0;if(a.children&&!c)Ht(a.children,u.pattern,n,r);else{const d=Vn([...n],r.length);r.push(d)}n.pop()}}}return n.length?r:r.sort((o,i)=>i.score-o.score)}function Ne(e,t){for(let n=0,r=e.length;n<r;n++){const s=e[n].matcher(t);if(s)return s}return[]}function jn(e,t,n){const r=new URL(Gt),s=M(c=>{const d=e();try{return new URL(d,r)}catch{return console.error(`Invalid path ${d}`),c}},r,{equals:(c,d)=>c.href===d.href}),o=M(()=>s().pathname),i=M(()=>s().search,!0),a=M(()=>s().hash),l=()=>"",u=et(i,()=>Ut(s()));return{get pathname(){return o()},get search(){return i()},get hash(){return a()},get state(){return t()},get key(){return l()},query:n?n(u):Vt(u)}}let oe;function In(){return oe}function Nn(e,t,n,r={}){const{signal:[s,o],utils:i={}}=e,a=i.parsePath||(b=>b),l=i.renderPath||(b=>b),u=i.beforeLeave||Bt(),c=Pe("",r.base||"");if(c===void 0)throw new Error(`${c} is not a valid base path`);c&&!s().value&&o({value:c,replace:!0,scroll:!1});const[d,h]=O(!1);let p;const v=(b,P)=>{P.value===f()&&P.state===k()||(p===void 0&&h(!0),oe=b,p=P,hn(()=>{p===P&&(w(p.value),y(p.state),R[1](N=>N.filter(ue=>ue.pending)))}).finally(()=>{p===P&&fn(()=>{oe=void 0,b==="navigate"&&F(p),h(!1),p=void 0})}))},[f,w]=O(s().value),[k,y]=O(s().state),E=jn(f,k,i.queryWrapper),T=[],R=O([]),G=M(()=>typeof r.transformUrl=="function"?Ne(t(),r.transformUrl(E.pathname)):Ne(t(),E.pathname)),te=()=>{const b=G(),P={};for(let N=0;N<b.length;N++)Object.assign(P,b[N].params);return P},ne=i.paramsWrapper?i.paramsWrapper(te,t):Vt(te),Z={pattern:c,path:()=>c,outlet:()=>null,resolvePath(b){return Pe(c,b)}};return C(et(s,b=>v("native",b),{defer:!0})),{base:Z,location:E,params:ne,isRouting:d,renderPath:l,parsePath:a,navigatorFactory:z,matches:G,beforeLeave:u,preloadRoute:I,singleFlight:r.singleFlight===void 0?!0:r.singleFlight,submissions:R};function be(b,P,N){j(()=>{if(typeof P=="number"){P&&(i.go?i.go(P):console.warn("Router integration does not support relative routing"));return}const ue=!P||P[0]==="?",{replace:Ge,resolve:de,scroll:Ue,state:we}={replace:!1,resolve:!ue,scroll:!0,...N},Ce=de?b.resolvePath(P):Pe(ue&&E.pathname||"",P);if(Ce===void 0)throw new Error(`Path '${P}' is not a routable path`);if(T.length>=Bn)throw new Error("Too many redirects");const ct=f();(Ce!==ct||we!==k())&&(Ln||u.confirm(Ce,N)&&(T.push({value:ct,replace:Ge,scroll:Ue,state:k()}),v("navigate",{value:Ce,state:we})))})}function z(b){return b=b||ce(It)||Z,(P,N)=>be(b,P,N)}function F(b){const P=T[0];P&&(o({...b,replace:P.replace,scroll:P.scroll}),T.length=0)}function I(b,P){const N=Ne(t(),b.pathname),ue=oe;oe="preload";for(let Ge in N){const{route:de,params:Ue}=N[Ge];de.component&&de.component.preload&&de.component.preload();const{preload:we}=de;P&&we&&nt(n(),()=>we({params:Ue,location:{pathname:b.pathname,search:b.search,hash:b.hash,query:Ut(b),state:null,key:""},intent:"preload"}))}oe=ue}}function Hn(e,t,n,r){const{base:s,location:o,params:i}=e,{pattern:a,component:l,preload:u}=r().route,c=M(()=>r().path);l&&l.preload&&l.preload();const d=u?u({params:i,location:o,intent:oe||"initial"}):void 0;return{parent:t,pattern:a,path:c,outlet:()=>l?g(l,{params:i,location:o,data:d,get children(){return n()}}):n(),resolvePath(p){return Pe(s.path(),p,c())}}}const Dn=e=>t=>{const{base:n}=t,r=Fe(()=>t.children),s=M(()=>Ht(r(),t.base||""));let o;const i=Nn(e,s,()=>o,{base:n,singleFlight:t.singleFlight,transformUrl:t.transformUrl});return e.create&&e.create(i),g(Gn.Provider,{value:i,get children(){return g(qn,{routerState:i,get root(){return t.root},get preload(){return t.rootPreload||t.rootLoad},get children(){return[Rt(()=>(o=tt())&&null),g(Wn,{routerState:i,get branches(){return s()}})]}})}})};function qn(e){const t=e.routerState.location,n=e.routerState.params,r=M(()=>e.preload&&j(()=>{e.preload({params:n,location:t,intent:In()||"initial"})}));return g(ee,{get when(){return e.root},keyed:!0,get fallback(){return e.children},children:s=>g(s,{params:n,location:t,get data(){return r()},get children(){return e.children}})})}function Wn(e){const t=[];let n;const r=M(et(e.routerState.matches,(s,o,i)=>{let a=o&&s.length===o.length;const l=[];for(let u=0,c=s.length;u<c;u++){const d=o&&o[u],h=s[u];i&&d&&h.route.key===d.route.key?l[u]=i[u]:(a=!1,t[u]&&t[u](),pe(p=>{t[u]=p,l[u]=Hn(e.routerState,l[u-1]||e.routerState.base,wt(()=>r()[u+1]),()=>{const v=e.routerState.matches();return v[u]??v[0]})}))}return t.splice(s.length).forEach(u=>u()),i&&a?i:(n=l[0],l)}));return wt(()=>r()&&n)()}const wt=e=>()=>g(ee,{get when(){return e()},keyed:!0,children:t=>g(It.Provider,{value:t,get children(){return t.outlet()}})}),He=e=>{const t=Fe(()=>e.children);return zt(e,{get children(){return t()}})};function Kn([e,t],n,r){return[e,r?s=>t(r(s)):t]}function Xn(e){let t=!1;const n=s=>typeof s=="string"?{value:s}:s,r=Kn(O(n(e.get()),{equals:(s,o)=>s.value===o.value&&s.state===o.state}),void 0,s=>(!t&&e.set(s),A.registry&&!A.done&&(A.done=!0),s));return e.init&&Re(e.init((s=e.get())=>{t=!0,r[1](n(s)),t=!1})),Dn({signal:r,create:e.create,utils:e.utils})}function Yn(e,t,n){return e.addEventListener(t,n),()=>e.removeEventListener(t,n)}function Zn(e,t){const n=e&&document.getElementById(e);n?n.scrollIntoView():t&&window.scrollTo(0,0)}const Jn=new Map;function Qn(e=!0,t=!1,n="/_server",r){return s=>{const o=s.base.path(),i=s.navigatorFactory(s.base);let a,l;function u(f){return f.namespaceURI==="http://www.w3.org/2000/svg"}function c(f){if(f.defaultPrevented||f.button!==0||f.metaKey||f.altKey||f.ctrlKey||f.shiftKey)return;const w=f.composedPath().find(G=>G instanceof Node&&G.nodeName.toUpperCase()==="A");if(!w||t&&!w.hasAttribute("link"))return;const k=u(w),y=k?w.href.baseVal:w.href;if((k?w.target.baseVal:w.target)||!y&&!w.hasAttribute("state"))return;const T=(w.getAttribute("rel")||"").split(/\s+/);if(w.hasAttribute("download")||T&&T.includes("external"))return;const R=k?new URL(y,document.baseURI):new URL(y);if(!(R.origin!==window.location.origin||o&&R.pathname&&!R.pathname.toLowerCase().startsWith(o.toLowerCase())))return[w,R]}function d(f){const w=c(f);if(!w)return;const[k,y]=w,E=s.parsePath(y.pathname+y.search+y.hash),T=k.getAttribute("state");f.preventDefault(),i(E,{resolve:!1,replace:k.hasAttribute("replace"),scroll:!k.hasAttribute("noscroll"),state:T?JSON.parse(T):void 0})}function h(f){const w=c(f);if(!w)return;const[k,y]=w;r&&(y.pathname=r(y.pathname)),s.preloadRoute(y,k.getAttribute("preload")!=="false")}function p(f){clearTimeout(a);const w=c(f);if(!w)return l=null;const[k,y]=w;l!==k&&(r&&(y.pathname=r(y.pathname)),a=setTimeout(()=>{s.preloadRoute(y,k.getAttribute("preload")!=="false"),l=k},20))}function v(f){if(f.defaultPrevented)return;let w=f.submitter&&f.submitter.hasAttribute("formaction")?f.submitter.getAttribute("formaction"):f.target.getAttribute("action");if(!w)return;if(!w.startsWith("https://action/")){const y=new URL(w,Gt);if(w=s.parsePath(y.pathname+y.search),!w.startsWith(n))return}if(f.target.method.toUpperCase()!=="POST")throw new Error("Only POST forms are supported for Actions");const k=Jn.get(w);if(k){f.preventDefault();const y=new FormData(f.target,f.submitter);k.call({r:s,f:f.target},f.target.enctype==="multipart/form-data"?y:new URLSearchParams(y))}}Ft(["click","submit"]),document.addEventListener("click",d),e&&(document.addEventListener("mousemove",p,{passive:!0}),document.addEventListener("focusin",h,{passive:!0}),document.addEventListener("touchstart",h,{passive:!0})),document.addEventListener("submit",v),Re(()=>{document.removeEventListener("click",d),e&&(document.removeEventListener("mousemove",p),document.removeEventListener("focusin",h),document.removeEventListener("touchstart",h)),document.removeEventListener("submit",v)})}}function er(e){const t=()=>{const r=window.location.pathname.replace(/^\/+/,"/")+window.location.search,s=window.history.state&&window.history.state._depth&&Object.keys(window.history.state).length===1?void 0:window.history.state;return{value:r+window.location.hash,state:s}},n=Bt();return Xn({get:t,set({value:r,replace:s,scroll:o,state:i}){s?window.history.replaceState(Tn(i),"",r):window.history.pushState(i,"",r),Zn(decodeURIComponent(window.location.hash.slice(1)),o),ot()},init:r=>Yn(window,"popstate",En(r,s=>{if(s)return!n.confirm(s);{const o=t();return!n.confirm(o.value,{state:o.state})}})),create:Qn(e.preload,e.explicitLinks,e.actionBase,e.transformUrl),utils:{go:r=>window.history.go(r),beforeLeave:n}})(e)}const B=e=>new DOMParser().parseFromString(e,"image/svg+xml").querySelector("svg");function xe(e){return e===void 0?"":e.constructor.name=="String"?e:e.join(" ")}function tr(){return O({time:0,trigger:!1})}function nr(e,t){return(t<=0||t===null||t===void 0||t.constructor.name!=="Number")&&(t=700),n=>e(r=>{let s=n.timeStamp;return r.time===0?{time:s,trigger:!1}:s-r.time<t?{time:0,trigger:!0}:{time:s,trigger:!1}})}const[rr,sr]=O({name:void 0}),or=le({user:rr,re_user:sr});function me(){return ce(or)}const ir="_CheckBox_16c0a_1",ar="_Box_16c0a_17",lr="_TickMark_16c0a_37",cr="_Content_16c0a_38",ur="_Postman_16c0a_54",dr="_Text_16c0a_71",he={CheckBox:ir,Box:ar,TickMark:lr,Content:cr,Postman:ur,Text:dr};var fr=$("<input type=hidden>"),hr=$("<span>"),pr=$("<legend>"),gr=$("<div><div style=background:transparent><div>");const mr={width:.6,height:.6,state:!1,tick:"",accent:"#485d6c"},Dt=e=>{const t=zt(mr,e),n=()=>t.state,r=()=>t.accent,s=()=>t.tick,o=()=>t.width,i=()=>t.height,a=()=>t.legend,l=()=>t.name,[u,c]=O(n()),d=()=>c(h=>!u());return(()=>{var h=gr(),p=h.firstChild,v=p.firstChild;return K(h,"click",d),x(h,g(ee,{get when(){return l()!==void 0},get children(){var f=fr();return C(w=>{var k=he.Postman,y=l();return k!==w.e&&_(f,w.e=k),y!==w.t&&D(f,"name",w.t=y),w},{e:void 0,t:void 0}),C(()=>f.value=u()),f}}),p),x(v,g(ee,{get when(){return s()!==""},get children(){var f=hr();return x(f,s),C(()=>_(f,he.TickMark)),f}})),x(h,g(ee,{get when(){return a()!==void 0},get children(){var f=pr();return x(f,a),C(w=>{var k=he.Text,y=r();return k!==w.e&&_(f,w.e=k),y!==w.t&&re(f,"color",w.t=y),w},{e:void 0,t:void 0}),f}}),null),C(f=>{var w=he.CheckBox,k=he.Box,y=`0.11em solid ${r()}`,E=`${o()+.19}em`,T=`${i()+.19}em`,R=u(),G=he.Content,te=r(),ne=`${o()}em`,Z=`${i()}em`;return w!==f.e&&_(h,f.e=w),k!==f.t&&_(p,f.t=k),y!==f.a&&re(p,"border",f.a=y),E!==f.o&&re(p,"width",f.o=E),T!==f.i&&re(p,"height",f.i=T),R!==f.n&&D(p,"box-state",f.n=R),G!==f.s&&_(v,f.s=G),te!==f.h&&re(v,"background",f.h=te),ne!==f.r&&re(v,"width",f.r=ne),Z!==f.d&&re(v,"height",f.d=Z),f},{e:void 0,t:void 0,a:void 0,o:void 0,i:void 0,n:void 0,s:void 0,h:void 0,r:void 0,d:void 0}),h})()},wr="_Logo_8bwge_1",vr="_Actuator_8bwge_7",vt={Logo:wr,Actuator:vr},qt=`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
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
`;var yr=$("<div><a href=/>");const kr=()=>{const e=B(qt);return(()=>{var t=yr(),n=t.firstChild;return x(n,e),C(r=>{var s=vt.Logo,o=vt.Actuator;return s!==r.e&&_(t,r.e=s),o!==r.t&&_(n,r.t=o),r},{e:void 0,t:void 0}),t})()},_r="_Splash_knpkf_1",xr={Splash:_r};var br=$("<div>");const Wt=()=>{const e=B(qt);return(()=>{var t=br();return x(t,e),C(()=>_(t,xr.Splash)),t})()},Cr="_PasswordField_1i8ty_1",Sr="_PswSwitch_1i8ty_6",yt={PasswordField:Cr,PswSwitch:Sr},$r="_TextField_1w6od_1",Ar="_InputLegend_1w6od_19",Pr="_InputField_1w6od_29",De={TextField:$r,InputLegend:Ar,InputField:Pr};var Lr=$("<div><legend></legend><input>");const Tr=e=>e==="???",ze=e=>{const[t,n]=O({lights_up:!1,blank_mandatory:!1,bad_value:!1}),r=()=>n(c=>({lights_up:!0,blank_mandatory:!1,bad_value:!1})),s=c=>n(d=>{let h=c.target;const p=h.value==="";return{lights_up:!p,blank_mandatory:l()&&p,bad_value:!p&&Tr(h.value)}}),o=c=>n(d=>d.light_up?{lights_up:!0,blank_mandatory:!1,bad_value:!1}:(c.target.nextElementSibling.focus(),{lights_up:!0,blank_mandatory:!1,bad_value:!1})),i=()=>e.name,a=()=>e.type,l=()=>e.mandatory??!1,u=()=>t().blank_mandatory?()=>e.legend+Er:t().bad_value?()=>e.legend+Mr:()=>e.legend;return(()=>{var c=Lr(),d=c.firstChild,h=d.nextSibling;return K(d,"click",o),x(d,u),K(h,"blur",s),K(h,"focus",r),C(p=>{var v=De.TextField,f=t().lights_up,w=t().blank_mandatory,k=t().bad_value,y=De.InputLegend,E=a(),T=De.InputField,R=i();return v!==p.e&&_(c,p.e=v),f!==p.t&&D(c,"lights-up",p.t=f),w!==p.a&&D(c,"blank-mandatory",p.a=w),k!==p.o&&D(c,"bad-value",p.o=k),y!==p.i&&_(d,p.i=y),E!==p.n&&D(h,"type",p.n=E),T!==p.s&&_(h,p.s=T),R!==p.h&&D(h,"name",p.h=R),p},{e:void 0,t:void 0,a:void 0,o:void 0,i:void 0,n:void 0,s:void 0,h:void 0}),c})()},Er=" (this field is mandatory)",Mr=" (this value is already taken)",zr=`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
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
`,Or=`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
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
`;var Rr=$("<div><button type=button>");const Ze=e=>{const t=()=>e.name,n=()=>e.mandatory,r=B(zr),s=B(Or),[o,i]=O({type:"password",svg:s}),a=()=>i(u=>u.type=="password"?{type:"text",svg:r}:{type:"password",svg:s}),l=()=>e.legend;return(()=>{var u=Rr(),c=u.firstChild;return x(u,g(ze,{get type(){return o().type},get name(){return t()},get legend(){return l()??"Password"},get mandatory(){return n()}}),c),K(c,"click",a),x(c,()=>o().svg),C(d=>{var h=yt.PasswordField,p=yt.PswSwitch;return h!==d.e&&_(u,d.e=h),p!==d.t&&_(c,d.t=p),d},{e:void 0,t:void 0}),u})()},Fr="_TextLine_5y4ha_1",Br={TextLine:Fr};var Gr=$("<span>");const Kt=e=>{const t=()=>e.children,n=()=>e.cls;return(()=>{var r=Gr();return x(r,t),C(()=>_(r,` ${Br.TextLine} ${xe(n())}`)),r})()},Ur="_Actuator_191in_1",Vr="_Button_191in_13",kt={Actuator:Ur,Button:Vr};var jr=$("<button>"),Ir=$("<a>");const X=e=>{const t=()=>e.children,n=()=>e.link,r=()=>e.class,s=()=>e.call;return n()===void 0?(()=>{var o=jr();return K(o,"click",s()),x(o,t),C(()=>_(o,`${kt.Button} ${xe(r())}`)),o})():(()=>{var o=Ir();return K(o,"click",s()),x(o,t),C(i=>{var a=`${kt.Actuator} ${xe(r())}`,l=n();return a!==i.e&&_(o,i.e=a),l!==i.t&&D(o,"href",i.t=l),i},{e:void 0,t:void 0}),o})()},Nr="_Separator_uerzn_1",_t={Separator:Nr};var Hr=$("<span>");const Xt=()=>{const[e,t]=O(!1),n=r=>t(s=>{const o=document.querySelector(`.${_t.Separator}`);if(o==null)return s;const a=o.parentElement.getBoundingClientRect(),l=r.clientX,u=r.clientY;return l>=a.left&&l<=a.right&&u<=a.bottom&&u>=a.top});return document.body.addEventListener("mousemove",n),(()=>{var r=Hr();return C(s=>{var o=_t.Separator,i=e();return o!==s.e&&_(r,s.e=o),i!==s.t&&D(r,"active",s.t=i),s},{e:void 0,t:void 0}),r})()},Dr="_WildText_t25g1_1",qr="_WildContent_t25g1_20",xt={WildText:Dr,WildContent:qr};var Wr=$("<div><span>");const Yt=e=>{const t=()=>e.text,n=()=>e.class;return(()=>{var r=Wr(),s=r.firstChild;return x(s,t),C(o=>{var i=`${xt.WildText} ${xe(n())}`,a=xt.WildContent;return i!==o.e&&_(r,o.e=i),a!==o.t&&_(s,o.t=a),o},{e:void 0,t:void 0}),r})()},Kr="_Home_mqets_1",Xr="_Apps_mqets_6",Yr="_App_mqets_6",Zr="_LeftRtt_mqets_47",Jr="_RightRtt_mqets_51",Qr="_AppText_mqets_57",es="_AppTitle_mqets_63",ts="_AppDepict_mqets_68",ns="_Greetings_mqets_72",J={Home:Kr,Apps:Xr,App:Yr,LeftRtt:Zr,RightRtt:Jr,AppText:Qr,AppTitle:es,AppDepict:ts,Greetings:ns},rs='<svg xmlns="http://www.w3.org/2000/svg" class="ionicon" viewBox="0 0 512 512"><path d="M473 39.05a24 24 0 00-25.5-5.46L47.47 185h-.08a24 24 0 001 45.16l.41.13 137.3 58.63a16 16 0 0015.54-3.59L422 80a7.07 7.07 0 0110 10L226.66 310.26a16 16 0 00-3.59 15.54l58.65 137.38c.06.2.12.38.19.57 3.2 9.27 11.3 15.81 21.09 16.25h1a24.63 24.63 0 0023-15.46L478.39 64.62A24 24 0 00473 39.05z"/></svg>',ss='<svg xmlns="http://www.w3.org/2000/svg" class="ionicon" viewBox="0 0 512 512"><path d="M465.94 119.76l-73.7-73.7A47.68 47.68 0 00358.3 32H96a64 64 0 00-64 64v320a64 64 0 0064 64h320a64 64 0 0064-64V153.7a47.68 47.68 0 00-14.06-33.94zM120 112h176a8 8 0 018 8v48a8 8 0 01-8 8H120a8 8 0 01-8-8v-48a8 8 0 018-8zm139.75 319.91a80 80 0 1176.16-76.16 80.06 80.06 0 01-76.16 76.16z"/><circle cx="256" cy="352" r="48"/></svg>',os='<svg xmlns="http://www.w3.org/2000/svg" class="ionicon" viewBox="0 0 512 512"><path d="M480 128a64 64 0 00-64-64h-16V48.45c0-8.61-6.62-16-15.23-16.43A16 16 0 00368 48v16H144V48.45c0-8.61-6.62-16-15.23-16.43A16 16 0 00112 48v16H96a64 64 0 00-64 64v12a4 4 0 004 4h440a4 4 0 004-4zM32 416a64 64 0 0064 64h320a64 64 0 0064-64V179a3 3 0 00-3-3H35a3 3 0 00-3 3zm344-208a24 24 0 11-24 24 24 24 0 0124-24zm0 80a24 24 0 11-24 24 24 24 0 0124-24zm-80-80a24 24 0 11-24 24 24 24 0 0124-24zm0 80a24 24 0 11-24 24 24 24 0 0124-24zm0 80a24 24 0 11-24 24 24 24 0 0124-24zm-80-80a24 24 0 11-24 24 24 24 0 0124-24zm0 80a24 24 0 11-24 24 24 24 0 0124-24zm-80-80a24 24 0 11-24 24 24 24 0 0124-24zm0 80a24 24 0 11-24 24 24 24 0 0124-24z"/></svg>',is='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M434 461.5l-26.6-69.1c-2.1-5.1-7-8.4-12.4-8.4-4.5 0-8.6 2.2-11.1 5.9s-3 8.4-1.4 12.5l26 69.1c2.1 5.1 7 8.5 12.5 8.5h.5c4.5 0 8.7-2.2 11.2-5.9 2.5-3.8 3-8.5 1.3-12.6zM117.6 384c-5.5 0-10.4 3.3-12.4 8.4l-26.6 69.1c-1.7 4.2-1.2 8.9 1.3 12.6 2.5 3.7 6.7 5.9 11.2 5.9h.5c5.5 0 10.4-3.3 12.5-8.5l26-69.1c1.7-4.1 1.2-8.8-1.4-12.5-2.4-3.7-6.6-5.9-11.1-5.9zM256.6 384h-1.1c-7.4 0-13.4 6-13.4 13.4v36.1c0 7.4 6 14.4 13.4 14.4h1.1c7.4 0 13.4-7 13.4-14.4v-36.1c0-7.4-6-13.4-13.4-13.4z"/><g><path d="M424 128H88c-4.4 0-8 3.6-8 8v176c0 4.4 3.6 8 8 8h336c4.4 0 8-3.6 8-8V136c0-4.4-3.6-8-8-8z"/><path d="M448 80H63.9C46.3 80 32 94.3 32 111.9v224.2c0 17.6 14.3 31.9 31.9 31.9H448c17.7 0 32-14.3 32-32V112c0-17.7-14.3-32-32-32zm4 244c0 8.8-7.2 16-16 16H76c-8.8 0-16-7.2-16-16V124c0-8.8 7.2-16 16-16h364.6c3 0 5.9 1.2 8 3.3 2.1 2.1 3.3 5 3.3 8V324z"/></g><path d="M256 32c-13.4-.2-24.4 12.2-24.4 25.6h48.7c.1-13.4-10.9-25.8-24.3-25.6z"/></svg>';var Zt=$("<div>"),as=$("<div><span><span></span><span>");const ls=()=>(()=>{var e=Zt();return x(e,g(us,{})),C(()=>_(e,J.Home)),e})();async function cs(){return[{name:"calendar",icon:B(os),accent:"#00a86b",depict:"manage your schedule and affairs [not yet avalable]"},{name:"drive",icon:B(ss),accent:"#a18369",depict:"store, share and backup your files [pre-alpha release]"},{name:"comms",icon:B(rs),accent:"#1475dc",depict:"talk with people in text, audio or video format [not yet avalable]"},{name:"vms",icon:B(is),accent:"#ce1f57",depict:"manage your virtual machines [not yet avalable]"}]}const us=()=>{const{user:e,re_user:t}=me(),[n]=At(cs),[r,s]=O(0);return g(_e,{get children(){return[g(W,{get when(){return lt(e())},get children(){var o=Zt();return x(o,g(bn,{get each(){return n()},children:i=>g(ds,{get icon(){return i.icon},get depict(){return i.depict},get name(){return i.name},get accent(){return i.accent},get rtt(){return r()},re_rtt:s})})),C(()=>_(o,J.Apps)),o}}),g(W,{when:!0,get children(){return g(Yt,{get class(){return J.Greetings},text:"welcome"})}})]}})},ds=e=>{const t=()=>e.rtt,n=()=>e.re_rtt,r=()=>e.name,s=()=>e.depict,o=()=>e.icon,i=()=>e.accent,a=()=>n()(l=>Math.abs(1-l));return(()=>{var l=as(),u=l.firstChild,c=u.firstChild,d=c.nextSibling;return K(l,"mouseenter",a),x(l,o,u),x(c,r),x(d,s),C(h=>{var p=`${J.App} ${t()==0?J.RightRtt:J.LeftRtt}`,v=i(),f=J.AppText,w=J.AppTitle,k=J.AppDepict;return p!==h.e&&_(l,h.e=p),v!==h.t&&re(l,"--accent",h.t=v),f!==h.a&&_(u,h.a=f),w!==h.o&&_(c,h.o=w),k!==h.i&&_(d,h.i=k),h},{e:void 0,t:void 0,a:void 0,o:void 0,i:void 0}),l})()},fs="_Auth_w4vpc_1",hs={Auth:fs},ps="_Form_x67kl_1",gs="_FormTitle_x67kl_27",ms="_SubmitButton_x67kl_31",ws="_Note_x67kl_49",vs="_SwapButton_x67kl_58",Q={Form:ps,FormTitle:gs,SubmitButton:ms,Note:ws,SwapButton:vs};var ys=$("<form>");const Jt=e=>{const t=()=>e.action,n=()=>e.method,r=()=>e.children,s=()=>e.target,o=()=>e.submit;return(()=>{var i=ys();return K(i,"submit",o()),x(i,r),C(a=>{var l=Q.Form,u=t(),c=n(),d=s()??"_self";return l!==a.e&&_(i,a.e=l),u!==a.t&&D(i,"action",a.t=u),c!==a.a&&D(i,"method",a.a=c),d!==a.o&&D(i,"target",a.o=d),a},{e:void 0,t:void 0,a:void 0,o:void 0}),i})()};var ks=$("<h4>Register"),_s=$("<span>Already have an account?"),xs=$("<span>Login.");function bs(e){return new Array(...e.querySelectorAll("input")).filter(t=>t.hasAttribute("name"))}function Cs(e){const t=e.map(n=>n.name);return t.length===new Set(...t).size?new Error("duplicate input field names are not allowed"):null}function Ss(e){return`${e.name}=${e.value}`}function $s(e){const t=bs(e),n=Cs(t);return n!==null?n:t.map(r=>Ss(r)).join("&")}async function As(e){e.preventDefault();const t=e.target;if(console.log(t.elements),t.tagName!=="FORM"){const o=new Error("submit event target is not a form");return window.alert(o),o}const n=t.action,r=$s(t);if(console.log(r),r.constructor.name==="Error")return window.alert(r),r;console.log("-->",r);const s=await fetch(n,{method:"PUT",credentials:"include",headers:{"content-type":"text/plain","content-length":`${r.length}`},body:r});console.log(s.text())}const Ps=e=>{const t=()=>e.swap_call;return g(Jt,{action:"/auth/user",method:"post",target:"_blank",submit:As,get children(){return[(()=>{var n=ks();return C(()=>_(n,Q.FormTitle)),n})(),g(ze,{type:"text",name:"user_name",legend:"User Name",mandatory:!0}),g(ze,{type:"email",name:"user_email",legend:"Email"}),g(Ze,{name:"user_pswd",mandatory:!0}),g(Ze,{legend:"Verify Password",mandatory:!0}),g(Dt,{name:"auto_login",legend:" auto login"}),g(X,{get class(){return Q.SubmitButton},children:"Register"}),g(Xt,{}),g(Kt,{get children(){return[(()=>{var n=_s();return C(()=>_(n,Q.Note)),n})(),g(X,{get class(){return Q.SwapButton},get call(){return t()},get children(){return xs()}})]}})]}})};var Ls=$("<h4>Login"),Ts=$("<span>New to hanabi?"),Es=$("<span>Register.");function Ms(e){return new Array(...e.children).filter(t=>t.hasAttribute("name"))}function zs(e){const t=e.map(n=>n.name);return t.length===new Set(t).size?new Error("duplicate input field names are not allowed"):null}function Os(e){return`${e.name}=${e.value}`}function Rs(e){const t=Ms(e),n=zs(t);return n.constructor.name==="Error"?n:t.map(r=>Os(r)).join("&")}async function Fs(e){e.preventDefault();const t=e.target;if(t.tagName!=="FORM")return new Error("submit event target is not a form");const n=t.action,r=Rs(t);if(r.constructor.name==="Error")return r;const s=await fetch(n,{method:"POST",credentials:"include",headers:{"content-type":"text/plain","content-length":`${r.length}`},body:r});console.log(s.text())}const Bs=e=>{const t=()=>e.swap_call;return g(Jt,{action:"/auth/user",method:"post",target:"_blank",submit:Fs,get children(){return[(()=>{var n=Ls();return C(()=>_(n,Q.FormTitle)),n})(),g(ze,{type:"text",name:"user_name",legend:"User Name or Email"}),g(Ze,{name:"user_pswd"}),g(Dt,{name:"persist_session",legend:" persist session"}),g(X,{type:"submit",get class(){return Q.SubmitButton},children:"Login"}),g(Xt,{}),g(Kt,{get children(){return[(()=>{var n=Ts();return C(()=>_(n,Q.Note)),n})(),g(X,{get class(){return Q.SwapButton},get call(){return t()},get children(){return Es()}})]}})]}})};var Gs=$("<div>");const[Us,Vs]=O(0),js=le({form:Us,set_form:Vs});function Qt(){return ce(js)}const Is=()=>{const{user:e,re_user:t}=me(),{form:n,set_form:r}=Qt(),s=()=>r(o=>Math.abs(1-o));return(()=>{var o=Gs();return x(o,g(_e,{get children(){return[g(W,{get when(){return nn(e())},get children(){return g(_e,{get children(){return[g(W,{get when(){return n()==0},get children(){return g(Bs,{swap_call:s})}}),g(W,{get when(){return n()==1},get children(){return g(Ps,{swap_call:s})}})]}})}}),g(W,{get when(){return lt(e())},get children(){return g(Yt,{text:"You are already logged-in."})}})]}})),C(()=>_(o,hs.Auth)),o})()},Ns="_Initialize_jfktd_1",Hs="_Negotiate_jfktd_21",Je={Initialize:Ns,Negotiate:Hs};var Ds=$("<div>"),qs=$("<span>negotiating an identity... ok"),Ws=$("<span>negotiating an identity...");const Ks=()=>(()=>{var e=Ds();return x(e,g(Wt,{}),null),x(e,g(Xs,{}),null),C(()=>_(e,Je.Initialize)),e})(),Xs=()=>{const{user:e,re_user:t}=me(),[n]=At(e(),Ys);return un(()=>{Qe(e())&&n()!==void 0&&t(n())}),g(Sn,{get fallback(){return(()=>{var r=Ws();return C(()=>_(r,Je.Negotiate)),r})()},get children(){var r=qs();return C(()=>_(r,Je.Negotiate)),r}})};async function Ys(e){return await new Promise(t=>setTimeout(t,500)),{name:e.name??""}}const Zs="_Menu_1azud_1",Js="_ContentItem_1azud_10",Qs="_Entry_1azud_16",eo="_Path_1azud_24",Y={Menu:Zs,ContentItem:Js,Entry:Qs,Path:eo},to="_UserMenu_1bbqu_1",no="_Entry_1bbqu_16",$e={UserMenu:to,Entry:no},ro='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M220.8 406.1l4.8 14.8c.4 1.2 1.9 1.8 3 1.1l6.8-4.2c2.5-1.6 2.5-5.2 0-6.8l-11.5-7.2c-1.7-1-3.6.5-3.1 2.3zM286.6 421l4.9-15.2c.6-1.8-1.4-3.3-3-2.3l-11.9 7.4a4.02 4.02 0 0 0 0 6.8l7 4.4c1.2.7 2.6.1 3-1.1zM188.6 242.2c-3.9 3.5-9.6 6.4-15.7 8.5-1 .4-1.6 1.5-1.2 2.5l9.3 28.9 3.8 11.8c.4 1.2 1.9 1.8 3 1.1l7-4.3 36.6-22.5c3-1.9 2.3-6.5-1.2-7.3-14.3-3.3-26.5-9.8-36.2-18.5-1.6-1.4-3.9-1.5-5.4-.2zM192.6 310.8l-2 1.2 14.6 45.3c.4 1.2 1.9 1.8 3 1.1l27.2-16.9c2.5-1.6 2.5-5.2 0-6.8l-38.5-23.9c-1.4-.8-3-.8-4.3 0zM258.1 348.9c-1.3-.8-2.9-.8-4.2 0L212 374.5l-.1.1c-1 .8-1 2.4 0 3.2l.7.5 41.3 25.3c1.3.8 2.9.8 4.2 0l41.7-25.5.4-.3c1-.8 1-2.2 0-3l-42.1-25.9zM296.7 296.6l-38.5-23.9c-1.3-.8-2.9-.8-4.2 0l-38.5 23.9a4.02 4.02 0 0 0 0 6.8l38.5 23.9c1.3.8 2.9.8 4.2 0l38.5-23.9c2.5-1.5 2.5-5.2 0-6.8zM318.1 242.3c-9.7 8.7-22 15.1-36.2 18.5-3.5.8-4.2 5.4-1.2 7.3l36.6 22.5 7.4 4.6c1.1.7 2.6.2 3-1.1l4-12.4 9.8-30.3c-6.9-2.1-13.6-5.3-18-9.2-1.6-1.3-3.9-1.2-5.4.1zM232.4 442l1.6 5s7.5 19 22 19c15 0 22.2-19 22.2-19l1.6-4.8c.6-1.7-.1-3.7-1.7-4.6l-20-12.4c-1.3-.8-2.9-.8-4.2 0l-19.8 12.3c-1.6.8-2.3 2.7-1.7 4.5zM276.7 341.5l27.5 17.1c1.1.7 2.6.2 3-1.1l14.2-43.8c.3-.9-.1-1.8-.8-2.3l-1-.6c-1.3-.8-2.9-.8-4.2 0l-38.5 23.9c-2.8 1.6-2.8 5.3-.2 6.8z"/><path d="M376.1 168.2c-6.2 5.4-13.2 8.7-18 10.5-1.8.7-3.5-1.4-2.3-3l4-5.7c6.1-8.7 8.5-19.4 6.8-29.8C357.9 86.8 311.7 46 256 46c-55.7 0-101.9 41.2-110.6 94.7-1.7 10.5.8 21.2 6.9 29.8l4 5.6c1.2 1.6-.5 3.8-2.4 3-5.4-2.1-13.5-6.2-20.1-12.8-1.4-1.4-3.6-1.5-5.2-.4-10.2 7.3-16.8 19.1-16.8 32.5 0 22.1 17.9 40 40 40 11.3 0 28-4.7 36.6-12.3 1.5-1.3 3.8-1.3 5.3.1 15.2 13.4 36.6 20.2 62.1 20.2s47-6.8 62.1-20.2c1.5-1.3 3.8-1.4 5.3-.1 8.5 7.6 25.3 12.3 36.6 12.3 22.1 0 40-18 40-40.1 0-11.9-5.2-22.6-13.5-30-2.7-2.6-7.2-2.7-10.2-.1z"/></svg>',en=`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
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
`,so='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M480 176H272v.1h-32v-.1H32v48h11l5 21.5C64 313 88.5 336 144 336s96-17.4 96-90.5V224s1.5-16 16-16 16 16 16 16v21.8c0 73 42.1 90.2 97 90.2s79-25 95-90.2l5-21.8h11v-48z"/></svg>';var oo=$("<span>| profile"),io=$("<span>| configs"),ao=$("<span>| logout"),lo=$("<div>");const co=()=>{const{user:e,re_user:t}=me(),n=B(ro),r=B(en),s=B(so),o=()=>t(i=>({name:""}));return(()=>{var i=lo();return x(i,g(X,{get class(){return $e.Entry},get children(){return[s,oo()]}}),null),x(i,g(X,{get class(){return $e.Entry},get children(){return[n,io()]}}),null),x(i,g(X,{link:"/",get class(){return $e.Entry},call:o,get children(){return[r,ao()]}}),null),C(()=>_(i,$e.UserMenu)),i})()},uo="_Settings_1ytnl_1",fo="_Headers_1ytnl_26",ho="_TextfulHeader_1ytnl_43",po="_Header_1ytnl_26",go="_TextlessHeader_1ytnl_48",mo="_Contents_1ytnl_88",ie={Settings:uo,Headers:fo,TextfulHeader:ho,Header:po,TextlessHeader:go,Contents:mo},wo='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M265.6 212.3c-10.5 0-18.5 4.4-24 13.2-5.5 8.8-9.1 22-10.8 39.6-.9 11.7 0 20.5 2.7 26.5s7.1 9 13.1 9c5.5 0 10.3-1.5 14.6-4.4 4.3-2.9 8.1-8.3 11.3-16.2l6.1-66c-2.2-.5-4.4-.9-6.5-1.2-2.3-.4-4.4-.5-6.5-.5z"/><path d="M256 48C141.1 48 48 141.1 48 256s93.1 208 208 208 208-93.1 208-208S370.9 48 256 48zm127.8 201.9c-.9 21.4-7.6 39.9-20 55.6-12.4 15.6-31 23.4-55.6 23.4-8.2 0-15.3-2.2-21.2-6.6-6-4.4-10.2-10.7-12.6-18.8-4.1 8.3-9.4 14.5-15.7 18.6-6.3 4.1-13.7 6.2-22.2 6.2-15.1 0-26.6-5.8-34.6-17.3s-10.9-26.8-8.8-45.9c2.6-24.4 10-44 22.2-58.7 12.2-14.7 27-22 44.4-22 12.2 0 22.1 1.3 29.5 3.8 7.4 2.5 15.6 5.7 24.5 11l-.5-.1h.8l-7.7 83.4c-.5 8.5.1 14.6 1.7 17.8 1.7 3.2 3.9 4.9 6.7 4.9 11.3 0 20.4-5.1 27.2-15.6 6.8-10.5 10.6-23.6 11.4-39.6 1.6-33-5.1-58.7-20.2-77.1-15.1-18.4-38.3-27.7-69.7-27.7-30.5 0-54.8 9.9-72.8 29.8s-27.7 46.9-29.3 81.2c-1.7 33.4 5.6 59.8 21.9 79.1 16.3 19.4 39.7 29.1 70.3 29.1 8.5 0 17.3-.9 26.5-2.7 9.1-1.8 17.1-4.1 23.7-6.8l5.8 24.2c-6.8 4.1-15.4 7.3-25.9 9.6-10.5 2.3-20.7 3.4-30.7 3.4-40.8 0-72.3-12.1-94.3-36.4-22-24.2-32.2-57.4-30.5-99.6 1.8-41.8 14.9-74.9 39.1-99.4 24.3-24.5 56.5-36.7 96.7-36.7 39.5 0 69.8 11.6 90.7 34.7 21.2 23.2 30.8 54.9 29.2 95.2z"/></svg>',vo='<svg xmlns="http://www.w3.org/2000/svg" class="ionicon" viewBox="0 0 512 512"><path d="M345.14 480H274a18 18 0 01-18-18v-27.71a31.32 31.32 0 00-9.71-22.77c-7.78-7.59-19.08-11.8-30.89-11.51-21.36.5-39.4 19.3-39.4 41.06V462a18 18 0 01-18 18H87.62A55.62 55.62 0 0132 424.38V354a18 18 0 0118-18h27.71c9.16 0 18.07-3.92 25.09-11a42.06 42.06 0 0012.2-29.92C114.7 273.89 97.26 256 76.91 256H50a18 18 0 01-18-18v-70.38A55.62 55.62 0 0187.62 112h55.24a8 8 0 008-8v-6.48A65.53 65.53 0 01217.54 32c35.49.62 64.36 30.38 64.36 66.33V104a8 8 0 008 8h55.24A54.86 54.86 0 01400 166.86v55.24a8 8 0 008 8h5.66c36.58 0 66.34 29 66.34 64.64 0 36.61-29.39 66.4-65.52 66.4H408a8 8 0 00-8 8v56A54.86 54.86 0 01345.14 480z"/></svg>',tn='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 48C141.1 48 48 141.1 48 256s93.1 208 208 208 208-93.1 208-208S370.9 48 256 48zM76 256c0-48.1 18.7-93.3 52.7-127.3S207.9 76 256 76c48.1 0 93.3 18.7 127.3 52.7 32.2 32.2 50.7 74.5 52.6 119.7-8.8-10.3-24.2-24-43.8-24-27.5 0-41.7 25.7-51 42.7-1.4 2.5-2.7 4.9-3.9 7-11.4 19.2-27.3 30-42.5 28.9-13.4-.9-24.8-11.2-32.2-28.8-9.2-22.1-29.1-45.8-52.9-49.2-11.3-1.6-28.1.8-44.7 21.4-3.2 4-6.9 9.4-11.1 15.6-10.4 15.5-26.2 38.8-38.1 40.8-17.3 2.8-30.9-7.5-36.4-12.3-2.2-11.2-3.3-22.8-3.3-34.5z"/></svg>';var yo=$("<div><div></div><div>"),ko=$("<span>"),_o=$("<div>");const xo=()=>{const e=B(wo),t=B(vo),n=B(tn),[r,s]=tr(),o=nr(s,700),[i,a]=O(!0),l=u=>a(c=>(o(u),r().trigger?!c:c));return(()=>{var u=yo(),c=u.firstChild,d=c.nextSibling;return K(c,"mousedown",l),x(c,g(qe,{text:"| account",icon:e,get switch(){return i()}}),null),x(c,g(qe,{text:"| apps",icon:t,get switch(){return i()}}),null),x(c,g(qe,{text:"| colorschemes",icon:n,get switch(){return i()}}),null),C(h=>{var p=ie.Settings,v=ie.Headers,f=ie.Contents;return p!==h.e&&_(u,h.e=p),v!==h.t&&_(c,h.t=v),f!==h.a&&_(d,h.a=f),h},{e:void 0,t:void 0,a:void 0}),u})()},qe=e=>{const t=()=>e.text,n=()=>e.icon,r=()=>e.switch;return(()=>{var s=_o();return x(s,n,null),x(s,g(ee,{get when(){return r()},get children(){var o=ko();return x(o,t),C(()=>_(o,ie.HeaderText)),o}}),null),C(()=>_(s,`${ie.Header} ${r()?ie.TextfulHeader:ie.TextlessHeader}`)),s})()},bo=`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
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
`,Co=`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
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
`,So='<svg xmlns="http://www.w3.org/2000/svg" class="ionicon" viewBox="0 0 512 512"><path d="M328.85 156.79a26.69 26.69 0 1018.88 7.81 26.6 26.6 0 00-18.88-7.81z"/><path d="M477.44 50.06a.29.29 0 010-.09 20.4 20.4 0 00-15.13-15.3c-29.8-7.27-76.68.48-128.63 21.28-52.36 21-101.42 52-134.58 85.22A320.7 320.7 0 00169.55 175c-22.33-1-42 2.18-58.57 9.41-57.74 25.41-74.23 90.44-78.62 117.14a25 25 0 0027.19 29h.13l64.32-7.02c.08.82.17 1.57.24 2.26a34.36 34.36 0 009.9 20.72l31.39 31.41a34.27 34.27 0 0020.71 9.91l2.15.23-7 64.24v.13A25 25 0 00206 480a25.25 25.25 0 004.15-.34C237 475.34 302 459.05 327.34 401c7.17-16.46 10.34-36.05 9.45-58.34a314.78 314.78 0 0033.95-29.55c33.43-33.26 64.53-81.92 85.31-133.52 20.69-51.36 28.48-98.59 21.39-129.53zM370.38 224.94a58.77 58.77 0 110-83.07 58.3 58.3 0 010 83.07z"/><path d="M161.93 386.44a16 16 0 00-11 2.67c-6.39 4.37-12.81 8.69-19.29 12.9-13.11 8.52-28.79-6.44-21-20l12.15-21a16 16 0 00-15.16-24.91A61.25 61.25 0 0072 353.56c-3.66 3.67-14.79 14.81-20.78 57.26A357.94 357.94 0 0048 447.59 16 16 0 0064 464h.4a359.87 359.87 0 0036.8-3.2c42.47-6 53.61-17.14 57.27-20.8a60.49 60.49 0 0017.39-35.74 16 16 0 00-13.93-17.82z"/></svg>',$o='<svg xmlns="http://www.w3.org/2000/svg" class="ionicon" viewBox="0 0 512 512"><path d="M261.56 101.28a8 8 0 00-11.06 0L66.4 277.15a8 8 0 00-2.47 5.79L63.9 448a32 32 0 0032 32H192a16 16 0 0016-16V328a8 8 0 018-8h80a8 8 0 018 8v136a16 16 0 0016 16h96.06a32 32 0 0032-32V282.94a8 8 0 00-2.47-5.79z"/><path d="M490.91 244.15l-74.8-71.56V64a16 16 0 00-16-16h-48a16 16 0 00-16 16v32l-57.92-55.38C272.77 35.14 264.71 32 256 32c-8.68 0-16.72 3.14-22.14 8.63l-212.7 203.5c-6.22 6-7 15.87-1.34 22.37A16 16 0 0043 267.56L250.5 69.28a8 8 0 0111.06 0l207.52 198.28a16 16 0 0022.59-.44c6.14-6.36 5.63-16.86-.76-22.97z"/></svg>';var it=$("<div>"),at=$("<span>"),Ao=$("<div><div>");const Po=()=>{const{user:e,re_user:t}=me(),{form:n,set_form:r}=Qt(),s=B(bo);B(en);const o=B(Co),i=B(tn),a=B(So),l=B($o),u=()=>{const h=document.body.style;h.getPropertyValue("filter")===""?h.setProperty("filter","invert() contrast(.89)"):h.removeProperty("filter")},c=()=>r(1),d=()=>r(0);return(()=>{var h=it();return x(h,g(Lo,{call:u,icon:i,text:"colors"}),null),x(h,g(Ct,{get class(){return Y.ContentItem},get content(){return g(xo,{})},icon:a,text:"settings"}),null),x(h,g(_e,{get children(){return[g(W,{get when(){return nn(e())},get children(){return[g(bt,{link:"/auth",call:d,icon:s,text:"login"}),g(bt,{link:"/auth",call:c,icon:o,text:"register"})]}}),g(W,{get when(){return lt(e())},get children(){return g(Ct,{get class(){return Y.ContentItem},get content(){return g(co,{})},icon:l,get text(){return e().name}})}})]}}),null),C(()=>_(h,Y.Menu)),h})()},bt=e=>{const t=()=>e.icon,n=()=>e.text,r=()=>e.link,s=()=>e.call;return(()=>{var o=it();return x(o,g(X,{get link(){return r()},get call(){return s()},get class(){return Y.Path},get children(){return[g(ee,{get when(){return t()!==void 0},get children(){return t()}}),(()=>{var i=at();return x(i,n),i})()]}})),C(()=>_(o,Y.Entry)),o})()},Lo=e=>{const t=()=>e.icon,n=()=>e.text,r=()=>e.call;return(()=>{var s=it();return x(s,g(X,{get call(){return r()},get class(){return Y.Path},get children(){return[g(ee,{get when(){return t()!==void 0},get children(){return t()}}),(()=>{var o=at();return x(o,n),o})()]}})),C(()=>_(s,Y.Entry)),s})()},Ct=e=>{const{active:t,up_active:n}=rn(),r=()=>e.icon,s=()=>e.text,o=()=>e.call,i=()=>e.class,a=()=>e.content,[l,u]=O(!1),c=d=>u(h=>!h);return(()=>{var d=Ao(),h=d.firstChild;return h.$$mousedown=c,x(h,g(X,{get call(){return o()},get class(){return Y.Path},get children(){return[Rt(()=>r()),(()=>{var p=at();return x(p,s),p})()]}})),x(d,g(ee,{get when(){return l()},get children(){return a()}}),null),C(p=>{var v=Y.ContentItem,f=`${Y.Entry} ${xe(i())}`;return v!==p.e&&_(d,p.e=v),f!==p.t&&_(h,p.t=f),p},{e:void 0,t:void 0}),d})()};Ft(["mousedown"]);const To="_Page_e1i3l_1",Eo={Page:To};var Mo=$("<div>");const zo=e=>{const t=()=>e.children;return(()=>{var n=Mo();return x(n,g(kr,{}),null),x(n,g(Po,{}),null),x(n,t,null),C(()=>_(n,Eo.Page)),n})()},Oo="_App_wcrpu_1",Ro={App:Oo};var Fo=$("<div>");const Bo=()=>{const{user:e,re_user:t}=me(),{active:n,up_active:r}=rn();return(()=>{var s=Fo();return x(s,g(_e,{get children(){return[g(W,{get when(){return Qe(e())},get children(){return g(Ks,{})}}),g(W,{get when(){return!Qe(e())},get children(){return g(zo,{get children(){return g(er,{get children(){return[g(He,{path:"/",component:ls}),g(He,{path:"/auth",component:Is}),g(He,{path:"*",component:Wt})]}})}})}})]}})),C(()=>_(s,Ro.App)),s})()};function nn(e){return e.name===""}function Qe(e){return e.name===void 0}function lt(e){return e.name===void 0?!1:e.name.constructor.name==="String"?e.name.length!==0:!0}const[Go,Uo]=O(document.body),Vo=le({active:Go,up_active:Uo});function rn(){return ce(Vo)}An(()=>g(Bo,{}),document.body);
