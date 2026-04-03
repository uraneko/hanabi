import{user_ctx as e,user_state as t}from"auth/user";import{Signin as n,Signup as r}from"auth";import{Configs as i,UserMenu as a,config_ctx as o,umstyles as s}from"config";(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var c={context:void 0,registry:void 0,effects:void 0,done:!1,getContextId(){return l(this.context.count)},getNextContextId(){return l(this.context.count++)}};function l(e){let t=String(e),n=t.length-1;return c.context.id+(n?String.fromCharCode(96+n):``)+t}function u(e){c.context=e}function d(){return{...c.context,id:c.getNextContextId(),count:0}}var f=(e,t)=>e===t,p=Symbol(`solid-proxy`),m=typeof Proxy==`function`,h=Symbol(`solid-track`),g={equals:f},_=null,v=be,y=1,b=2,x={owned:null,cleanups:null,context:null,owner:null},ee={},S=null,C=null,w=null,T=null,E=null,D=null,O=null,k=0;function A(e,t){let n=E,r=S,i=e.length===0,a=t===void 0?r:t,o=i?x:{owned:null,cleanups:null,context:a?a.context:null,owner:a},s=i?e:()=>e(()=>P(()=>H(o)));S=o,E=null;try{return V(s,!0)}finally{E=n,S=r}}function j(e,t){t=t?Object.assign({},g,t):g;let n={value:e,observers:null,observerSlots:null,comparator:t.equals||void 0};return[me.bind(n),e=>(typeof e==`function`&&(e=C&&C.running&&C.sources.has(n)?e(n.tValue):e(n.value)),he(n,e))]}function te(e,t,n){let r=_e(e,t,!0,y);w&&C&&C.running?D.push(r):B(r)}function M(e,t,n){let r=_e(e,t,!1,y);w&&C&&C.running?D.push(r):B(r)}function ne(e,t,n){v=Se;let r=_e(e,t,!1,y),i=z&&L(z);i&&(r.suspense=i),(!n||!n.render)&&(r.user=!0),O?O.push(r):B(r)}function N(e,t,n){n=n?Object.assign({},g,n):g;let r=_e(e,t,!0,0);return r.observers=null,r.observerSlots=null,r.comparator=n.equals||void 0,w&&C&&C.running?(r.tState=y,D.push(r)):B(r),me.bind(r)}function re(e){return e&&typeof e==`object`&&`then`in e}function ie(e,t,n){let r,i,a;typeof t==`function`?(r=e,i=t,a=n||{}):(r=!0,i=e,a=t||{});let o=null,s=ee,l=null,u=!1,d=!1,f=`initialValue`in a,p=typeof r==`function`&&N(r),m=new Set,[h,g]=(a.storage||j)(a.initialValue),[_,v]=j(void 0),[y,b]=j(void 0,{equals:!1}),[x,w]=j(f?`ready`:`unresolved`);c.context&&(l=c.getNextContextId(),a.ssrLoadFrom===`initial`?s=a.initialValue:c.load&&c.has(l)&&(s=c.load(l)));function T(e,t,n,r){return o===e&&(o=null,r!==void 0&&(f=!0),(e===s||t===s)&&a.onHydrated&&queueMicrotask(()=>a.onHydrated(r,{value:t})),s=ee,C&&e&&u?(C.promises.delete(e),u=!1,V(()=>{C.running=!0,D(t,n)},!1)):D(t,n)),t}function D(e,t){V(()=>{t===void 0&&g(()=>e),w(t===void 0?f?`ready`:`unresolved`:`errored`),v(t);for(let e of m.keys())e.decrement();m.clear()},!1)}function O(){let e=z&&L(z),t=h(),n=_();if(n!==void 0&&!o)throw n;return E&&!E.user&&e&&te(()=>{y(),o&&(e.resolved&&C&&u?C.promises.add(o):m.has(e)||(e.increment(),m.add(e)))}),t}function k(e=!0){if(e!==!1&&d)return;d=!1;let t=p?p():r;if(u=C&&C.running,t==null||t===!1){T(o,P(h));return}C&&o&&C.promises.delete(o);let n,a=s===ee?P(()=>{try{return i(t,{value:h(),refetching:e})}catch(e){n=e}}):s;if(n!==void 0){T(o,void 0,Ee(n),t);return}else if(!re(a))return T(o,a,void 0,t),a;return o=a,`v`in a?(a.s===1?T(o,a.v,void 0,t):T(o,void 0,Ee(a.v),t),a):(d=!0,queueMicrotask(()=>d=!1),V(()=>{w(f?`refreshing`:`pending`),b()},!1),a.then(e=>T(a,e,void 0,t),e=>T(a,void 0,Ee(e),t)))}Object.defineProperties(O,{state:{get:()=>x()},error:{get:()=>_()},loading:{get(){let e=x();return e===`pending`||e===`refreshing`}},latest:{get(){if(!f)return O();let e=_();if(e&&!o)throw e;return h()}}});let A=S;return p?te(()=>(A=S,k(!1))):k(!1),[O,{refetch:e=>ce(A,()=>k(e)),mutate:g}]}function ae(e){return V(e,!1)}function P(e){if(!T&&E===null)return e();let t=E;E=null;try{return T?T.untrack(e):e()}finally{E=t}}function oe(e,t,n){let r=Array.isArray(e),i,a=n&&n.defer;return n=>{let o;if(r){o=Array(e.length);for(let t=0;t<e.length;t++)o[t]=e[t]()}else o=e();if(a)return a=!1,n;let s=P(()=>t(o,i,n));return i=o,s}}function F(e){return S===null||(S.cleanups===null?S.cleanups=[e]:S.cleanups.push(e)),e}function se(){return S}function ce(e,t){let n=S,r=E;S=e,E=null;try{return V(t,!0)}catch(e){Oe(e)}finally{S=n,E=r}}function le(e){if(C&&C.running)return e(),C.done;let t=E,n=S;return Promise.resolve().then(()=>{E=t,S=n;let r;return(w||z)&&(r=C||={sources:new Set,effects:[],promises:new Set,disposed:new Set,queue:new Set,running:!0},r.done||=new Promise(e=>r.resolve=e),r.running=!0),V(e,!1),E=S=null,r?r.done:void 0})}var[ue,de]=j(!1);function fe(e){O.push.apply(O,e),e.length=0}function I(e,t){let n=Symbol(`context`);return{id:n,Provider:Ae(n),defaultValue:e}}function L(e){let t;return S&&S.context&&(t=S.context[e.id])!==void 0?t:e.defaultValue}function R(e){let t=N(e),n=N(()=>ke(t()));return n.toArray=()=>{let e=n();return Array.isArray(e)?e:e==null?[]:[e]},n}var z;function pe(){return z||=I()}function me(){let e=C&&C.running;if(this.sources&&(e?this.tState:this.state))if((e?this.tState:this.state)===y)B(this);else{let e=D;D=null,V(()=>Ce(this),!1),D=e}if(E){let e=this.observers?this.observers.length:0;E.sources?(E.sources.push(this),E.sourceSlots.push(e)):(E.sources=[this],E.sourceSlots=[e]),this.observers?(this.observers.push(E),this.observerSlots.push(E.sources.length-1)):(this.observers=[E],this.observerSlots=[E.sources.length-1])}return e&&C.sources.has(this)?this.tValue:this.value}function he(e,t,n){let r=C&&C.running&&C.sources.has(e)?e.tValue:e.value;if(!e.comparator||!e.comparator(r,t)){if(C){let r=C.running;(r||!n&&C.sources.has(e))&&(C.sources.add(e),e.tValue=t),r||(e.value=t)}else e.value=t;e.observers&&e.observers.length&&V(()=>{for(let t=0;t<e.observers.length;t+=1){let n=e.observers[t],r=C&&C.running;r&&C.disposed.has(n)||((r?!n.tState:!n.state)&&(n.pure?D.push(n):O.push(n),n.observers&&we(n)),r?n.tState=y:n.state=y)}if(D.length>1e6)throw D=[],Error()},!1)}return t}function B(e){if(!e.fn)return;H(e);let t=k;ge(e,C&&C.running&&C.sources.has(e)?e.tValue:e.value,t),C&&!C.running&&C.sources.has(e)&&queueMicrotask(()=>{V(()=>{C&&(C.running=!0),E=S=e,ge(e,e.tValue,t),E=S=null},!1)})}function ge(e,t,n){let r,i=S,a=E;E=S=e;try{r=e.fn(t)}catch(t){return e.pure&&(C&&C.running?(e.tState=y,e.tOwned&&e.tOwned.forEach(H),e.tOwned=void 0):(e.state=y,e.owned&&e.owned.forEach(H),e.owned=null)),e.updatedAt=n+1,Oe(t)}finally{E=a,S=i}(!e.updatedAt||e.updatedAt<=n)&&(e.updatedAt!=null&&`observers`in e?he(e,r,!0):C&&C.running&&e.pure?(C.sources.has(e)||(e.value=r),C.sources.add(e),e.tValue=r):e.value=r,e.updatedAt=n)}function _e(e,t,n,r=y,i){let a={fn:e,state:r,updatedAt:null,owned:null,sources:null,sourceSlots:null,cleanups:null,value:t,owner:S,context:S?S.context:null,pure:n};if(C&&C.running&&(a.state=0,a.tState=r),S===null||S!==x&&(C&&C.running&&S.pure?S.tOwned?S.tOwned.push(a):S.tOwned=[a]:S.owned?S.owned.push(a):S.owned=[a]),T&&a.fn){let e=a.fn,[t,n]=j(void 0,{equals:!1}),r=T.factory(e,n);F(()=>r.dispose());let i,o=()=>le(n).then(()=>{i&&=(i.dispose(),void 0)});a.fn=n=>(t(),C&&C.running?(i||=T.factory(e,o),i.track(n)):r.track(n))}return a}function ve(e){let t=C&&C.running;if((t?e.tState:e.state)===0)return;if((t?e.tState:e.state)===b)return Ce(e);if(e.suspense&&P(e.suspense.inFallback))return e.suspense.effects.push(e);let n=[e];for(;(e=e.owner)&&(!e.updatedAt||e.updatedAt<k);){if(t&&C.disposed.has(e))return;(t?e.tState:e.state)&&n.push(e)}for(let r=n.length-1;r>=0;r--){if(e=n[r],t){let t=e,i=n[r+1];for(;(t=t.owner)&&t!==i;)if(C.disposed.has(t))return}if((t?e.tState:e.state)===y)B(e);else if((t?e.tState:e.state)===b){let t=D;D=null,V(()=>Ce(e,n[0]),!1),D=t}}}function V(e,t){if(D)return e();let n=!1;t||(D=[]),O?n=!0:O=[],k++;try{let t=e();return ye(n),t}catch(e){n||(O=null),D=null,Oe(e)}}function ye(e){if(D&&=(w&&C&&C.running?xe(D):be(D),null),e)return;let t;if(C){if(!C.promises.size&&!C.queue.size){let e=C.sources,n=C.disposed;O.push.apply(O,C.effects),t=C.resolve;for(let e of O)`tState`in e&&(e.state=e.tState),delete e.tState;C=null,V(()=>{for(let e of n)H(e);for(let t of e){if(t.value=t.tValue,t.owned)for(let e=0,n=t.owned.length;e<n;e++)H(t.owned[e]);t.tOwned&&(t.owned=t.tOwned),delete t.tValue,delete t.tOwned,t.tState=0}de(!1)},!1)}else if(C.running){C.running=!1,C.effects.push.apply(C.effects,O),O=null,de(!0);return}}let n=O;O=null,n.length&&V(()=>v(n),!1),t&&t()}function be(e){for(let t=0;t<e.length;t++)ve(e[t])}function xe(e){for(let t=0;t<e.length;t++){let n=e[t],r=C.queue;r.has(n)||(r.add(n),w(()=>{r.delete(n),V(()=>{C.running=!0,ve(n)},!1),C&&(C.running=!1)}))}}function Se(e){let t,n=0;for(t=0;t<e.length;t++){let r=e[t];r.user?e[n++]=r:ve(r)}if(c.context){if(c.count){c.effects||=[],c.effects.push(...e.slice(0,n));return}u()}for(c.effects&&(c.done||!c.count)&&(e=[...c.effects,...e],n+=c.effects.length,delete c.effects),t=0;t<n;t++)ve(e[t])}function Ce(e,t){let n=C&&C.running;n?e.tState=0:e.state=0;for(let r=0;r<e.sources.length;r+=1){let i=e.sources[r];if(i.sources){let e=n?i.tState:i.state;e===y?i!==t&&(!i.updatedAt||i.updatedAt<k)&&ve(i):e===b&&Ce(i,t)}}}function we(e){let t=C&&C.running;for(let n=0;n<e.observers.length;n+=1){let r=e.observers[n];(t?!r.tState:!r.state)&&(t?r.tState=b:r.state=b,r.pure?D.push(r):O.push(r),r.observers&&we(r))}}function H(e){let t;if(e.sources)for(;e.sources.length;){let t=e.sources.pop(),n=e.sourceSlots.pop(),r=t.observers;if(r&&r.length){let e=r.pop(),i=t.observerSlots.pop();n<r.length&&(e.sourceSlots[i]=n,r[n]=e,t.observerSlots[n]=i)}}if(e.tOwned){for(t=e.tOwned.length-1;t>=0;t--)H(e.tOwned[t]);delete e.tOwned}if(C&&C.running&&e.pure)Te(e,!0);else if(e.owned){for(t=e.owned.length-1;t>=0;t--)H(e.owned[t]);e.owned=null}if(e.cleanups){for(t=e.cleanups.length-1;t>=0;t--)e.cleanups[t]();e.cleanups=null}C&&C.running?e.tState=0:e.state=0}function Te(e,t){if(t||(e.tState=0,C.disposed.add(e)),e.owned)for(let t=0;t<e.owned.length;t++)Te(e.owned[t])}function Ee(e){return e instanceof Error?e:Error(typeof e==`string`?e:`Unknown error`,{cause:e})}function De(e,t,n){try{for(let n of t)n(e)}catch(e){Oe(e,n&&n.owner||null)}}function Oe(e,t=S){let n=_&&t&&t.context&&t.context[_],r=Ee(e);if(!n)throw r;O?O.push({fn(){De(r,n,t)},state:y}):De(r,n,t)}function ke(e){if(typeof e==`function`&&!e.length)return ke(e());if(Array.isArray(e)){let t=[];for(let n=0;n<e.length;n++){let r=ke(e[n]);Array.isArray(r)?t.push.apply(t,r):t.push(r)}return t}return e}function Ae(e,t){return function(t){let n;return M(()=>n=P(()=>(S.context={...S.context,[e]:t.value},R(()=>t.children))),void 0),n}}var je=Symbol(`fallback`);function Me(e){for(let t=0;t<e.length;t++)e[t]()}function Ne(e,t,n={}){let r=[],i=[],a=[],o=0,s=t.length>1?[]:null;return F(()=>Me(a)),()=>{let c=e()||[],l=c.length,u,d;return c[h],P(()=>{let e,t,p,m,h,g,_,v,y;if(l===0)o!==0&&(Me(a),a=[],r=[],i=[],o=0,s&&=[]),n.fallback&&(r=[je],i[0]=A(e=>(a[0]=e,n.fallback())),o=1);else if(o===0){for(i=Array(l),d=0;d<l;d++)r[d]=c[d],i[d]=A(f);o=l}else{for(p=Array(l),m=Array(l),s&&(h=Array(l)),g=0,_=Math.min(o,l);g<_&&r[g]===c[g];g++);for(_=o-1,v=l-1;_>=g&&v>=g&&r[_]===c[v];_--,v--)p[v]=i[_],m[v]=a[_],s&&(h[v]=s[_]);for(e=new Map,t=Array(v+1),d=v;d>=g;d--)y=c[d],u=e.get(y),t[d]=u===void 0?-1:u,e.set(y,d);for(u=g;u<=_;u++)y=r[u],d=e.get(y),d!==void 0&&d!==-1?(p[d]=i[u],m[d]=a[u],s&&(h[d]=s[u]),d=t[d],e.set(y,d)):a[u]();for(d=g;d<l;d++)d in p?(i[d]=p[d],a[d]=m[d],s&&(s[d]=h[d],s[d](d))):i[d]=A(f);i=i.slice(0,o=l),r=c.slice(0)}return i});function f(e){if(a[d]=e,s){let[e,n]=j(d);return s[d]=n,t(c[d],e)}return t(c[d])}}}var Pe=!1;function U(e,t){if(Pe&&c.context){let n=c.context;u(d());let r=P(()=>e(t||{}));return u(n),r}return P(()=>e(t||{}))}function Fe(){return!0}var Ie={get(e,t,n){return t===p?n:e.get(t)},has(e,t){return t===p?!0:e.has(t)},set:Fe,deleteProperty:Fe,getOwnPropertyDescriptor(e,t){return{configurable:!0,enumerable:!0,get(){return e.get(t)},set:Fe,deleteProperty:Fe}},ownKeys(e){return e.keys()}};function Le(e){return(e=typeof e==`function`?e():e)?e:{}}function Re(){for(let e=0,t=this.length;e<t;++e){let t=this[e]();if(t!==void 0)return t}}function ze(...e){let t=!1;for(let n=0;n<e.length;n++){let r=e[n];t||=!!r&&p in r,e[n]=typeof r==`function`?(t=!0,N(r)):r}if(m&&t)return new Proxy({get(t){for(let n=e.length-1;n>=0;n--){let r=Le(e[n])[t];if(r!==void 0)return r}},has(t){for(let n=e.length-1;n>=0;n--)if(t in Le(e[n]))return!0;return!1},keys(){let t=[];for(let n=0;n<e.length;n++)t.push(...Object.keys(Le(e[n])));return[...new Set(t)]}},Ie);let n={},r=Object.create(null);for(let t=e.length-1;t>=0;t--){let i=e[t];if(!i)continue;let a=Object.getOwnPropertyNames(i);for(let e=a.length-1;e>=0;e--){let t=a[e];if(t===`__proto__`||t===`constructor`)continue;let o=Object.getOwnPropertyDescriptor(i,t);if(!r[t])r[t]=o.get?{enumerable:!0,configurable:!0,get:Re.bind(n[t]=[o.get.bind(i)])}:o.value===void 0?void 0:o;else{let e=n[t];e&&(o.get?e.push(o.get.bind(i)):o.value!==void 0&&e.push(()=>o.value))}}}let i={},a=Object.keys(r);for(let e=a.length-1;e>=0;e--){let t=a[e],n=r[t];n&&n.get?Object.defineProperty(i,t,n):i[t]=n?n.value:void 0}return i}var Be=e=>`Stale read from <${e}>.`;function Ve(e){let t=`fallback`in e&&{fallback:()=>e.fallback};return N(Ne(()=>e.each,e.children,t||void 0))}function He(e){let t=e.keyed,n=N(()=>e.when,void 0,void 0),r=t?n:N(n,void 0,{equals:(e,t)=>!e==!t});return N(()=>{let i=r();if(i){let a=e.children;return typeof a==`function`&&a.length>0?P(()=>a(t?i:()=>{if(!P(r))throw Be(`Show`);return n()})):a}return e.fallback},void 0,void 0)}function Ue(e){let t=R(()=>e.children),n=N(()=>{let e=t(),n=Array.isArray(e)?e:[e],r=()=>void 0;for(let e=0;e<n.length;e++){let t=e,i=n[e],a=r,o=N(()=>a()?void 0:i.when,void 0,void 0),s=i.keyed?o:N(o,void 0,{equals:(e,t)=>!e==!t});r=()=>a()||(s()?[t,o,i]:void 0)}return r});return N(()=>{let t=n()();if(!t)return e.fallback;let[r,i,a]=t,o=a.children;return typeof o==`function`&&o.length>0?P(()=>o(a.keyed?i():()=>{if(P(n)()?.[0]!==r)throw Be(`Match`);return i()})):o},void 0,void 0)}function W(e){return e}var We;function Ge(){We&&[...We].forEach(e=>e())}var Ke=I();function qe(e){let t=0,n,r,i,a,o,[s,l]=j(!1),d=pe(),f={increment:()=>{++t===1&&l(!0)},decrement:()=>{--t===0&&l(!1)},inFallback:s,effects:[],resolved:!1},p=se();if(c.context&&c.load){let e=c.getContextId(),t=c.load(e);if(t&&(typeof t!=`object`||t.s!==1?i=t:c.gather(e)),i&&i!==`$$f`){let[t,n]=j(void 0,{equals:!1});a=t,i.then(()=>{if(c.done)return n();c.gather(e),u(r),n(),u()},e=>{o=e,n()})}}let m=L(Ke);m&&(n=m.register(f.inFallback));let h;return F(()=>h&&h()),U(d.Provider,{value:f,get children(){return N(()=>{if(o)throw o;if(r=c.context,a){a(),a=void 0;return}r&&i===`$$f`&&u();let t=N(()=>e.children);return N(a=>{let o=f.inFallback(),{showContent:s=!0,showFallback:c=!0}=n?n():{};if((!o||i&&i!==`$$f`)&&s)return f.resolved=!0,h&&h(),h=r=i=void 0,fe(f.effects),t();if(c)return h?a:A(t=>(h=t,r&&=(u({id:r.id+`F`,count:0}),void 0),e.fallback),p)})})}})}var Je=e=>N(()=>e());function Ye(e,t,n){let r=n.length,i=t.length,a=r,o=0,s=0,c=t[i-1].nextSibling,l=null;for(;o<i||s<a;){if(t[o]===n[s]){o++,s++;continue}for(;t[i-1]===n[a-1];)i--,a--;if(i===o){let t=a<r?s?n[s-1].nextSibling:n[a-s]:c;for(;s<a;)e.insertBefore(n[s++],t)}else if(a===s)for(;o<i;)(!l||!l.has(t[o]))&&t[o].remove(),o++;else if(t[o]===n[a-1]&&n[s]===t[i-1]){let r=t[--i].nextSibling;e.insertBefore(n[s++],t[o++].nextSibling),e.insertBefore(n[--a],r),t[i]=n[a]}else{if(!l){l=new Map;let e=s;for(;e<a;)l.set(n[e],e++)}let r=l.get(t[o]);if(r!=null)if(s<r&&r<a){let c=o,u=1,d;for(;++c<i&&c<a&&!((d=l.get(t[c]))==null||d!==r+u);)u++;if(u>r-s){let i=t[o];for(;s<r;)e.insertBefore(n[s++],i)}else e.replaceChild(n[s++],t[o++])}else o++;else t[o++].remove()}}}var Xe=`_$DX_DELEGATE`;function Ze(e,t,n,r={}){let i;return A(r=>{i=r,t===document?e():q(t,e(),t.firstChild?null:void 0,n)},r.owner),()=>{i(),t.textContent=``}}function G(e,t,n,r){let i,a=()=>{let t=r?document.createElementNS(`http://www.w3.org/1998/Math/MathML`,`template`):document.createElement(`template`);return t.innerHTML=e,n?t.content.firstChild.firstChild:r?t.firstChild:t.content.firstChild},o=t?()=>P(()=>document.importNode(i||=a(),!0)):()=>(i||=a()).cloneNode(!0);return o.cloneNode=o,o}function Qe(e,t=window.document){let n=t[Xe]||(t[Xe]=new Set);for(let r=0,i=e.length;r<i;r++){let i=e[r];n.has(i)||(n.add(i),t.addEventListener(i,it))}}function $e(e,t,n){rt(e)||(n==null?e.removeAttribute(t):e.setAttribute(t,n))}function K(e,t){rt(e)||(t==null?e.removeAttribute(`class`):e.className=t)}function et(e,t,n,r){if(r)Array.isArray(n)?(e[`$$${t}`]=n[0],e[`$$${t}Data`]=n[1]):e[`$$${t}`]=n;else if(Array.isArray(n)){let r=n[0];e.addEventListener(t,n[0]=t=>r.call(e,n[1],t))}else e.addEventListener(t,n,typeof n!=`function`&&n)}function tt(e,t,n){if(!t)return n?$e(e,`style`):t;let r=e.style;if(typeof t==`string`)return r.cssText=t;typeof n==`string`&&(r.cssText=n=void 0),n||={},t||={};let i,a;for(a in n)t[a]??r.removeProperty(a),delete n[a];for(a in t)i=t[a],i!==n[a]&&(r.setProperty(a,i),n[a]=i);return n}function nt(e,t,n){n==null?e.style.removeProperty(t):e.style.setProperty(t,n)}function q(e,t,n,r){if(n!==void 0&&!r&&(r=[]),typeof t!=`function`)return at(e,t,r,n);M(r=>at(e,t(),r,n),r)}function rt(e){return!!c.context&&!c.done&&(!e||e.isConnected)}function it(e){if(c.registry&&c.events&&c.events.find(([t,n])=>n===e))return;let t=e.target,n=`$$${e.type}`,r=e.target,i=e.currentTarget,a=t=>Object.defineProperty(e,`target`,{configurable:!0,value:t}),o=()=>{let r=t[n];if(r&&!t.disabled){let i=t[`${n}Data`];if(i===void 0?r.call(t,e):r.call(t,i,e),e.cancelBubble)return}return t.host&&typeof t.host!=`string`&&!t.host._$host&&t.contains(e.target)&&a(t.host),!0},s=()=>{for(;o()&&(t=t._$host||t.parentNode||t.host););};if(Object.defineProperty(e,`currentTarget`,{configurable:!0,get(){return t||document}}),c.registry&&!c.done&&(c.done=_$HY.done=!0),e.composedPath){let n=e.composedPath();a(n[0]);for(let e=0;e<n.length-2&&(t=n[e],o());e++){if(t._$host){t=t._$host,s();break}if(t.parentNode===i)break}}else s();a(r)}function at(e,t,n,r,i){let a=rt(e);if(a){!n&&(n=[...e.childNodes]);let t=[];for(let e=0;e<n.length;e++){let r=n[e];r.nodeType===8&&r.data.slice(0,2)===`!$`?r.remove():t.push(r)}n=t}for(;typeof n==`function`;)n=n();if(t===n)return n;let o=typeof t,s=r!==void 0;if(e=s&&n[0]&&n[0].parentNode||e,o===`string`||o===`number`){if(a||o===`number`&&(t=t.toString(),t===n))return n;if(s){let i=n[0];i&&i.nodeType===3?i.data!==t&&(i.data=t):i=document.createTextNode(t),n=J(e,n,r,i)}else n=n!==``&&typeof n==`string`?e.firstChild.data=t:e.textContent=t}else if(t==null||o===`boolean`){if(a)return n;n=J(e,n,r)}else if(o===`function`)return M(()=>{let i=t();for(;typeof i==`function`;)i=i();n=at(e,i,n,r)}),()=>n;else if(Array.isArray(t)){let o=[],c=n&&Array.isArray(n);if(ot(o,t,n,i))return M(()=>n=at(e,o,n,r,!0)),()=>n;if(a){if(!o.length)return n;if(r===void 0)return n=[...e.childNodes];let t=o[0];if(t.parentNode!==e)return n;let i=[t];for(;(t=t.nextSibling)!==r;)i.push(t);return n=i}if(o.length===0){if(n=J(e,n,r),s)return n}else c?n.length===0?st(e,o,r):Ye(e,n,o):(n&&J(e),st(e,o));n=o}else if(t.nodeType){if(a&&t.parentNode)return n=s?[t]:t;if(Array.isArray(n)){if(s)return n=J(e,n,r,t);J(e,n,null,t)}else n==null||n===``||!e.firstChild?e.appendChild(t):e.replaceChild(t,e.firstChild);n=t}return n}function ot(e,t,n,r){let i=!1;for(let a=0,o=t.length;a<o;a++){let o=t[a],s=n&&n[e.length],c;if(!(o==null||o===!0||o===!1))if((c=typeof o)==`object`&&o.nodeType)e.push(o);else if(Array.isArray(o))i=ot(e,o,s)||i;else if(c===`function`)if(r){for(;typeof o==`function`;)o=o();i=ot(e,Array.isArray(o)?o:[o],Array.isArray(s)?s:[s])||i}else e.push(o),i=!0;else{let t=String(o);s&&s.nodeType===3&&s.data===t?e.push(s):e.push(document.createTextNode(t))}}return i}function st(e,t,n=null){for(let r=0,i=t.length;r<i;r++)e.insertBefore(t[r],n)}function J(e,t,n,r){if(n===void 0)return e.textContent=``;let i=r||document.createTextNode(``);if(t.length){let r=!1;for(let a=t.length-1;a>=0;a--){let o=t[a];if(i!==o){let t=o.parentNode===e;!r&&!a?t?e.replaceChild(i,o):e.insertBefore(i,n):t&&o.remove()}else r=!0}}else e.insertBefore(i,n);return[i]}function ct(){let e=new Set;function t(t){return e.add(t),()=>e.delete(t)}let n=!1;function r(t,r){if(n)return!(n=!1);let i={to:t,options:r,defaultPrevented:!1,preventDefault:()=>i.defaultPrevented=!0};for(let a of e)a.listener({...i,from:a.location,retry:e=>{e&&(n=!0),a.navigate(t,{...r,resolve:!1})}});return!i.defaultPrevented}return{subscribe:t,confirm:r}}var lt;function ut(){(!window.history.state||window.history.state._depth==null)&&window.history.replaceState({...window.history.state,_depth:window.history.length-1},``),lt=window.history.state._depth}ut();function dt(e){return{...e,_depth:window.history.state&&window.history.state._depth}}function ft(e,t){let n=!1;return()=>{let r=lt;ut();let i=r==null?null:lt-r;if(n){n=!1;return}i&&t(i)?(n=!0,window.history.go(-i)):e()}}var pt=/^(?:[a-z0-9]+:)?\/\//i,mt=/^\/+|(\/)\/+$/g,ht=`http://sr`;function gt(e,t=!1){let n=e.replace(mt,`$1`);return n?t||/^[?#]/.test(n)?n:`/`+n:``}function _t(e,t,n){if(pt.test(t))return;let r=gt(e),i=n&&gt(n),a=``;return a=!i||t.startsWith(`/`)?r:i.toLowerCase().indexOf(r.toLowerCase())===0?i:r+i,(a||`/`)+gt(t,!a)}function vt(e,t){return gt(e).replace(/\/*(\*.*)?$/g,``)+gt(t)}function yt(e){let t={};return e.searchParams.forEach((e,n)=>{n in t?Array.isArray(t[n])?t[n].push(e):t[n]=[t[n],e]:t[n]=e}),t}function bt(e,t,n){let[r,i]=e.split(`/*`,2),a=r.split(`/`).filter(Boolean),o=a.length;return e=>{let r=e.split(`/`).filter(Boolean),s=r.length-o;if(s<0||s>0&&i===void 0&&!t)return null;let c={path:o?``:`/`,params:{}},l=e=>n===void 0?void 0:n[e];for(let e=0;e<o;e++){let t=a[e],n=t[0]===`:`,i=n?r[e]:r[e].toLowerCase(),o=n?t.slice(1):t.toLowerCase();if(n&&xt(i,l(o)))c.params[o]=i;else if(n||!xt(i,o))return null;c.path+=`/${i}`}if(i){let e=s?r.slice(-s).join(`/`):``;if(xt(e,l(i)))c.params[i]=e;else return null}return c}}function xt(e,t){let n=t=>t===e;return t===void 0?!0:typeof t==`string`?n(t):typeof t==`function`?t(e):Array.isArray(t)?t.some(n):t instanceof RegExp?t.test(e):!1}function St(e){let[t,n]=e.pattern.split(`/*`,2),r=t.split(`/`).filter(Boolean);return r.reduce((e,t)=>e+(t.startsWith(`:`)?2:3),r.length-(n===void 0?0:1))}function Ct(e){let t=new Map,n=se();return new Proxy({},{get(r,i){return t.has(i)||ce(n,()=>t.set(i,N(()=>e()[i]))),t.get(i)()},getOwnPropertyDescriptor(){return{enumerable:!0,configurable:!0}},ownKeys(){return Reflect.ownKeys(e())},has(t,n){return n in e()}})}function wt(e){let t=/(\/?\:[^\/]+)\?/.exec(e);if(!t)return[e];let n=e.slice(0,t.index),r=e.slice(t.index+t[0].length),i=[n,n+=t[1]];for(;t=/^(\/\:[^\/]+)\?/.exec(r);)i.push(n+=t[1]),r=r.slice(t[0].length);return wt(r).reduce((e,t)=>[...e,...i.map(e=>e+t)],[])}var Tt=100,Et=I(),Dt=I();function Ot(e,t=``){let{component:n,preload:r,load:i,children:a,info:o}=e,s=!a||Array.isArray(a)&&!a.length,c={key:e,component:n,preload:r||i,info:o};return At(e.path).reduce((n,r)=>{for(let i of wt(r)){let a=vt(t,i),o=s?a:a.split(`/*`,1)[0];o=o.split(`/`).map(e=>e.startsWith(`:`)||e.startsWith(`*`)?e:encodeURIComponent(e)).join(`/`),n.push({...c,originalPath:r,pattern:o,matcher:bt(o,!s,e.matchFilters)})}return n},[])}function kt(e,t=0){return{routes:e,score:St(e[e.length-1])*1e4-t,matcher(t){let n=[];for(let r=e.length-1;r>=0;r--){let i=e[r],a=i.matcher(t);if(!a)return null;n.unshift({...a,route:i})}return n}}}function At(e){return Array.isArray(e)?e:[e]}function jt(e,t=``,n=[],r=[]){let i=At(e);for(let e=0,a=i.length;e<a;e++){let a=i[e];if(a&&typeof a==`object`){a.hasOwnProperty(`path`)||(a.path=``);let e=Ot(a,t);for(let t of e){n.push(t);let e=Array.isArray(a.children)&&a.children.length===0;if(a.children&&!e)jt(a.children,t.pattern,n,r);else{let e=kt([...n],r.length);r.push(e)}n.pop()}}}return n.length?r:r.sort((e,t)=>t.score-e.score)}function Mt(e,t){for(let n=0,r=e.length;n<r;n++){let r=e[n].matcher(t);if(r)return r}return[]}function Nt(e,t,n){let r=new URL(ht),i=N(t=>{let n=e();try{return new URL(n,r)}catch{return console.error(`Invalid path ${n}`),t}},r,{equals:(e,t)=>e.href===t.href}),a=N(()=>i().pathname),o=N(()=>i().search,!0),s=N(()=>i().hash),c=()=>``,l=oe(o,()=>yt(i()));return{get pathname(){return a()},get search(){return o()},get hash(){return s()},get state(){return t()},get key(){return c()},query:n?n(l):Ct(l)}}var Y;function Pt(){return Y}function Ft(e,t,n,r={}){let{signal:[i,a],utils:o={}}=e,s=o.parsePath||(e=>e),c=o.renderPath||(e=>e),l=o.beforeLeave||ct(),u=_t(``,r.base||``);if(u===void 0)throw Error(`${u} is not a valid base path`);u&&!i().value&&a({value:u,replace:!0,scroll:!1});let[d,f]=j(!1),p,m=(e,t)=>{t.value===h()&&t.state===_()||(p===void 0&&f(!0),Y=e,p=t,le(()=>{p===t&&(g(p.value),v(p.state),Ge(),x[1](e=>e.filter(e=>e.pending)))}).finally(()=>{p===t&&ae(()=>{Y=void 0,e===`navigate`&&D(p),f(!1),p=void 0})}))},[h,g]=j(i().value),[_,v]=j(i().state),y=Nt(h,_,o.queryWrapper),b=[],x=j([]),ee=N(()=>typeof r.transformUrl==`function`?Mt(t(),r.transformUrl(y.pathname)):Mt(t(),y.pathname)),S=()=>{let e=ee(),t={};for(let n=0;n<e.length;n++)Object.assign(t,e[n].params);return t},C=o.paramsWrapper?o.paramsWrapper(S,t):Ct(S),w={pattern:u,path:()=>u,outlet:()=>null,resolvePath(e){return _t(u,e)}};return M(oe(i,e=>m(`native`,e),{defer:!0})),{base:w,location:y,params:C,isRouting:d,renderPath:c,parsePath:s,navigatorFactory:E,matches:ee,beforeLeave:l,preloadRoute:O,singleFlight:r.singleFlight===void 0?!0:r.singleFlight,submissions:x};function T(e,t,n){P(()=>{if(typeof t==`number`){t&&(o.go?o.go(t):console.warn(`Router integration does not support relative routing`));return}let r=!t||t[0]===`?`,{replace:i,resolve:a,scroll:s,state:c}={replace:!1,resolve:!r,scroll:!0,...n},u=a?e.resolvePath(t):_t(r&&y.pathname||``,t);if(u===void 0)throw Error(`Path '${t}' is not a routable path`);if(b.length>=Tt)throw Error(`Too many redirects`);let d=h();(u!==d||c!==_())&&l.confirm(u,n)&&(b.push({value:d,replace:i,scroll:s,state:_()}),m(`navigate`,{value:u,state:c}))})}function E(e){return e=e||L(Dt)||w,(t,n)=>T(e,t,n)}function D(e){let t=b[0];t&&(a({...e,replace:t.replace,scroll:t.scroll}),b.length=0)}function O(e,r){let i=Mt(t(),e.pathname),a=Y;Y=`preload`;for(let t in i){let{route:a,params:o}=i[t];a.component&&a.component.preload&&a.component.preload();let{preload:s}=a;r&&s&&ce(n(),()=>s({params:o,location:{pathname:e.pathname,search:e.search,hash:e.hash,query:yt(e),state:null,key:``},intent:`preload`}))}Y=a}}function It(e,t,n,r){let{base:i,location:a,params:o}=e,{pattern:s,component:c,preload:l}=r().route,u=N(()=>r().path);c&&c.preload&&c.preload();let d=l?l({params:o,location:a,intent:Y||`initial`}):void 0;return{parent:t,pattern:s,path:u,outlet:()=>c?U(c,{params:o,location:a,data:d,get children(){return n()}}):n(),resolvePath(e){return _t(i.path(),e,u())}}}var Lt=e=>t=>{let{base:n}=t,r=R(()=>t.children),i=N(()=>jt(r(),t.base||``)),a,o=Ft(e,i,()=>a,{base:n,singleFlight:t.singleFlight,transformUrl:t.transformUrl});return e.create&&e.create(o),U(Et.Provider,{value:o,get children(){return U(Rt,{routerState:o,get root(){return t.root},get preload(){return t.rootPreload||t.rootLoad},get children(){return[Je(()=>(a=se())&&null),U(zt,{routerState:o,get branches(){return i()}})]}})}})};function Rt(e){let t=e.routerState.location,n=e.routerState.params,r=N(()=>e.preload&&P(()=>{e.preload({params:n,location:t,intent:Pt()||`initial`})}));return U(He,{get when(){return e.root},keyed:!0,get fallback(){return e.children},children:i=>U(i,{params:n,location:t,get data(){return r()},get children(){return e.children}})})}function zt(e){let t=[],n,r=N(oe(e.routerState.matches,(i,a,o)=>{let s=a&&i.length===a.length,c=[];for(let n=0,l=i.length;n<l;n++){let l=a&&a[n],u=i[n];o&&l&&u.route.key===l.route.key?c[n]=o[n]:(s=!1,t[n]&&t[n](),A(i=>{t[n]=i,c[n]=It(e.routerState,c[n-1]||e.routerState.base,Bt(()=>r()[n+1]),()=>{let t=e.routerState.matches();return t[n]??t[0]})}))}return t.splice(i.length).forEach(e=>e()),o&&s?o:(n=c[0],c)}));return Bt(()=>r()&&n)()}var Bt=e=>()=>U(He,{get when(){return e()},keyed:!0,children:e=>U(Dt.Provider,{value:e,get children(){return e.outlet()}})}),Vt=e=>{let t=R(()=>e.children);return ze(e,{get children(){return t()}})};function Ht([e,t],n,r){return[n?()=>n(e()):e,r?e=>t(r(e)):t]}function Ut(e){let t=!1,n=e=>typeof e==`string`?{value:e}:e,r=Ht(j(n(e.get()),{equals:(e,t)=>e.value===t.value&&e.state===t.state}),void 0,n=>(!t&&e.set(n),c.registry&&!c.done&&(c.done=!0),n));return e.init&&F(e.init((i=e.get())=>{t=!0,r[1](n(i)),t=!1})),Lt({signal:r,create:e.create,utils:e.utils})}function Wt(e,t,n){return e.addEventListener(t,n),()=>e.removeEventListener(t,n)}function Gt(e,t){let n=e&&document.getElementById(e);n?n.scrollIntoView():t&&window.scrollTo(0,0)}var Kt=new Map;function qt({preload:e=!0,explicitLinks:t=!1,actionBase:n=`/_server`,transformUrl:r}={}){return i=>{let a=i.base.path(),o=i.navigatorFactory(i.base),s,c;function l(e){return e.namespaceURI===`http://www.w3.org/2000/svg`}function u(e){if(e.defaultPrevented||e.button!==0||e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)return;let n=e.composedPath().find(e=>e instanceof Node&&e.nodeName.toUpperCase()===`A`);if(!n||t&&!n.hasAttribute(`link`))return;let r=l(n),i=r?n.href.baseVal:n.href;if((r?n.target.baseVal:n.target)||!i&&!n.hasAttribute(`state`))return;let o=(n.getAttribute(`rel`)||``).split(/\s+/);if(n.hasAttribute(`download`)||o&&o.includes(`external`))return;let s=r?new URL(i,document.baseURI):new URL(i);if(!(s.origin!==window.location.origin||a&&s.pathname&&!s.pathname.toLowerCase().startsWith(a.toLowerCase())))return[n,s]}function d(e){let t=u(e);if(!t)return;let[n,r]=t,a=i.parsePath(r.pathname+r.search+r.hash),s=n.getAttribute(`state`);e.preventDefault(),o(a,{resolve:!1,replace:n.hasAttribute(`replace`),scroll:!n.hasAttribute(`noscroll`),state:s?JSON.parse(s):void 0})}function f(e){let t=u(e);if(!t)return;let[n,a]=t;r&&(a.pathname=r(a.pathname)),i.preloadRoute(a,n.getAttribute(`preload`)!==`false`)}function p(e){clearTimeout(s);let t=u(e);if(!t)return c=null;let[n,a]=t;c!==n&&(r&&(a.pathname=r(a.pathname)),s=setTimeout(()=>{i.preloadRoute(a,n.getAttribute(`preload`)!==`false`),c=n},20))}function m(e){if(e.defaultPrevented)return;let t=e.submitter&&e.submitter.hasAttribute(`formaction`)?e.submitter.getAttribute(`formaction`):e.target.getAttribute(`action`);if(!t)return;if(!t.startsWith(`https://action/`)){let e=new URL(t,ht);if(t=i.parsePath(e.pathname+e.search),!t.startsWith(n))return}if(e.target.method.toUpperCase()!==`POST`)throw Error(`Only POST forms are supported for Actions`);let r=Kt.get(t);if(r){e.preventDefault();let t=new FormData(e.target,e.submitter);r.call({r:i,f:e.target},e.target.enctype===`multipart/form-data`?t:new URLSearchParams(t))}}Qe([`click`,`submit`]),document.addEventListener(`click`,d),e&&(document.addEventListener(`mousemove`,p,{passive:!0}),document.addEventListener(`focusin`,f,{passive:!0}),document.addEventListener(`touchstart`,f,{passive:!0})),document.addEventListener(`submit`,m),F(()=>{document.removeEventListener(`click`,d),e&&(document.removeEventListener(`mousemove`,p),document.removeEventListener(`focusin`,f),document.removeEventListener(`touchstart`,f)),document.removeEventListener(`submit`,m)})}}function Jt(e){let t=()=>{let e=window.location.pathname.replace(/^\/+/,`/`)+window.location.search,t=window.history.state&&window.history.state._depth&&Object.keys(window.history.state).length===1?void 0:window.history.state;return{value:e+window.location.hash,state:t}},n=ct();return Ut({get:t,set({value:e,replace:t,scroll:n,state:r}){t?window.history.replaceState(dt(r),``,e):window.history.pushState(r,``,e),Gt(decodeURIComponent(window.location.hash.slice(1)),n),ut()},init:e=>Wt(window,`popstate`,ft(e,e=>{if(e)return!n.confirm(e);{let e=t();return!n.confirm(e.value,{state:e.state})}})),create:qt({preload:e.preload,explicitLinks:e.explicitLinks,actionBase:e.actionBase,transformUrl:e.transformUrl}),utils:{go:e=>window.history.go(e),beforeLeave:n}})(e)}function Yt(){return{paths_:null,props_:null,styles_:null,init_props(){return(this.props_===null||this.paths_===null)&&(this.props_={},this.paths_={}),this},init_styles(){return this.styles_===null&&(this.styles_={}),this},override(e,...t){if(t.length===0||Object.keys(e).length===0)return this;this.init_props();let n=Object.keys(this.props_).length;return Object.entries(e).forEach(([e,r])=>{let i=Xt(this.props_,e,r,n);if(i>n){t.forEach(e=>Zt(this.paths_,e,n)),n=i;return}t.forEach(e=>Zt(this.paths_,e,i))}),this},style(e){return Object.keys(e).length===0?this:(this.init_styles(),Object.entries(e).forEach(([e,t])=>{this.styles_[e]=t}),this)},parse(e){let t=X(e),n=t.style;return this.styles_!==null&&Object.entries(this.styles_).forEach(([e,t])=>n.setProperty(e,t)),this.props_!==null&&this.paths_!==null&&Object.entries(this.paths_).forEach(([e,n])=>{let r=Qt(this.props_,n);new Array(...t.querySelectorAll(e)).forEach(e=>{let t=e.style;r.forEach(([e,n])=>{t.setProperty(e,n)})})}),t},clear(){return[this.paths_,this.props_,this.styles_].forEach(e=>{if(e!==null)for(let t of Object.keys(e))Reflect.deleteProperty(e,t)}),this}}}function Xt(e,t,n,r){let i=e[t];return i===void 0?(e[t]={val:n,idx:r},r+1):(i.val,i.idx)}function Zt(e,t,n){let r=e[t];if(r===void 0){e[t]=n;return}tn(r)===`Number`?r=[r,n]:r.push(n)}function Qt(e,t){let n=tn(t);return Object.entries(e).filter(([e,r])=>{let i=r.idx;return n===`Number`?i===t:t.includes(i)}).map(([e,t])=>[e,t.val])}var $t=`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!-- Created with Inkscape (http://www.inkscape.org/) -->

<svg
   width="265.5744mm"
   height="258.60724mm"
   viewBox="0 0 265.57441 258.60727"
   version="1.1"
   id="svg1"
   inkscape:version="1.4.3 (0d15f75042, 2025-12-25)"
   sodipodi:docname="fallback.svg"
   xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape"
   xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd"
   xmlns:xlink="http://www.w3.org/1999/xlink"
   xmlns="http://www.w3.org/2000/svg"
   xmlns:svg="http://www.w3.org/2000/svg">
  <sodipodi:namedview
     id="namedview1"
     pagecolor="#2a2b2f"
     bordercolor="#000000"
     borderopacity="0.25"
     inkscape:showpageshadow="2"
     inkscape:pageopacity="0.0"
     inkscape:pagecheckerboard="0"
     inkscape:deskcolor="#d1d1d1"
     inkscape:document-units="mm"
     inkscape:zoom="0.54649117"
     inkscape:cx="753.90056"
     inkscape:cy="397.99362"
     inkscape:window-width="1920"
     inkscape:window-height="1080"
     inkscape:window-x="0"
     inkscape:window-y="0"
     inkscape:window-maximized="1"
     inkscape:current-layer="layer1" />
  <defs
     id="defs1">
    <rect
       x="403.65251"
       y="294.25069"
       width="50.797919"
       height="35.619886"
       id="rect1" />
    <linearGradient
       id="linearGradient1"
       inkscape:collect="always">
      <stop
         style="stop-color:#b63e76;stop-opacity:1;"
         offset="0"
         id="stop1" />
      <stop
         style="stop-color:#e39091;stop-opacity:1;"
         offset="0.24453701"
         id="stop3" />
      <stop
         style="stop-color:#73caaa;stop-opacity:1;"
         offset="0.47508264"
         id="stop4" />
      <stop
         style="stop-color:#5a76d4;stop-opacity:1;"
         offset="0.71164858"
         id="stop5" />
      <stop
         style="stop-color:#8051c2;stop-opacity:1;"
         offset="0.85288382"
         id="stop6" />
      <stop
         style="stop-color:#bc81e6;stop-opacity:1;"
         offset="1"
         id="stop2" />
    </linearGradient>
    <linearGradient
       inkscape:collect="always"
       xlink:href="#linearGradient1"
       id="linearGradient2"
       x1="-10928.486"
       y1="5981.624"
       x2="26356.043"
       y2="5981.624"
       gradientUnits="userSpaceOnUse" />
  </defs>
  <g
     inkscape:label="Layer 1"
     inkscape:groupmode="layer"
     id="layer1"
     transform="translate(5304.5758,10092.13)">
    <path
       id="path1"
       style="fill:url(#linearGradient2);fill-rule:evenodd;stroke:#000000;stroke-width:10.7818"
       d="M -8485.9982 13561.959 C -8193.3048 14670.365 -7850.8238 15539.78 -7447.5367 15997.902 C -7246.3038 16074.123 -6959.3204 16115.815 -6631.2707 16118.541 C -7110.0237 15450.966 -7541.98 14747.534 -7922.2065 14013.016 C -8207.6766 13461.547 -8462.4935 12896.214 -8685.9644 12319.648 C -8650.8037 12774.515 -8583.4794 13192.805 -8485.9982 13561.959 z M -8478.865 9171.1059 C -8184.7114 10684.167 -7675.0091 12152.203 -6961.7534 13527.829 C -6515.152 14389.171 -5992.5671 15204.871 -5403.2603 15966.061 C -5391.8703 15963.146 -5380.4982 15960.215 -5369.1298 15957.213 C -4991.4429 15857.478 -4673.1455 15693.767 -4408.1947 15490.997 C -5014.924 14731.833 -5549.5914 13912.26 -6001.28 13042.72 C -7046.8564 11029.894 -7625.2732 8804.3349 -7693.4091 6537.1934 C -7693.624 6530.0438 -7693.8546 6522.8647 -7694.0593 6515.7154 C -8052.7496 7394.0852 -8311.6252 8296.0208 -8478.865 9171.1059 z M -6169.5536 9626.0793 C -5905.0776 10639.515 -5527.0776 11623.326 -5040.7296 12557.59 C -4653.4315 13301.582 -4200.7449 14006.093 -3690.5027 14663.511 C -3436.408 14219.683 -3317.5087 13746.456 -3303.9346 13367.649 C -3587.0743 12952.765 -3846.5166 12520.336 -4080.2766 12072.404 C -4239.7731 11766.776 -4386.719 11455.368 -4520.8577 11139.023 C -4913.5801 10620.151 -5326.7997 9916.8535 -5650.3799 8691.4818 C -5853.5902 7921.9409 -5819.5689 7106.3516 -5545.4553 6352.4391 C -5571.9729 5079.6426 -5411.7717 3813.0334 -5072.5053 2592.451 C -5616.9926 3101.7884 -6094.7869 3673.8917 -6509.5823 4285.9027 C -6604.2374 5023.4158 -6640.6371 5769.3473 -6617.5358 6516.838 C -6585.0003 7569.5948 -6434.0296 8612.6439 -6169.5536 9626.0793 z M -4390.6829 4686.2842 C -4050.2452 4390.2999 -3646.895 4133.1459 -3180.3067 3928.976 C -3027.4687 3169.4834 -2792.6916 2422.4712 -2475.7356 1702.0019 C -2331.5487 1374.252 -2171.3061 1054.527 -1996.043 743.83256 C -2546.3735 928.38018 -3059.0553 1164.0814 -3535.3796 1442.4697 C -3972.5893 2480.5758 -4259.8316 3572.8065 -4390.6829 4686.2842 z M -1990.6315 3561.808 C -1596.449 3490.4758 -1220.8448 3477.2399 -858.20474 3514.3355 C -762.98785 3204.5763 -650.0593 2898.8933 -519.43505 2598.8948 C -139.37036 1726.018 382.17993 923.10994 1015.4064 221.07956 C 529.02066 227.87714 30.943537 277.3708 -481.64154 367.55327 C -880.05392 923.02607 -1221.6827 1520.4773 -1497.5752 2150.4868 C -1699.0229 2610.4993 -1863.3805 3082.4142 -1990.6315 3561.808 z M 190.28054 3766.5245 C 520.90119 3891.5653 844.7018 4056.3881 1166.6187 4253.9333 C 1240.6986 3997.074 1330.7469 3743.8543 1436.8859 3495.8646 C 1921.6843 2363.1514 2721.0985 1383.9256 3722.4345 675.57313 C 3298.4287 519.35044 2868.7936 404.45482 2431.2575 329.17297 C 1588.1079 1077.2576 908.82875 2006.0065 458.7254 3047.3797 C 356.74596 3283.3225 267.26264 3523.364 190.28054 3766.5245 z M 2107.7303 4918.7385 C 2424.7901 5168.721 2744.7722 5443.6924 3072.5859 5737.0536 C 3107.9 5278.7689 3214.6942 4824.3799 3393.1865 4392.7574 C 3782.639 3450.9992 4492.2982 2661.5347 5383.7243 2168.5631 C 5564.0855 2068.8207 5750.0781 1982.0531 5940.2146 1908.3418 C 5589.9758 1645.532 5238.5418 1415.0154 4884.642 1215.6454 C 3783.2841 1818.5894 2903.5894 2786.962 2415.026 3944.2725 C 2281.4743 4260.6302 2179.1099 4587.0794 2107.7303 4918.7385 z M 4210.6626 6783.3351 C 4221.3073 6793.225 4232.0261 6803.0799 4242.695 6812.9898 C 5182.3486 7666.1522 6193.926 8672.9167 7512.695 9283.1355 C 7955.3719 9248.3474 8390.2878 9117.8586 8779.7567 8891.9925 C 9089.9477 8712.1024 9362.2355 8474.5745 9585.8458 8197.5678 L 8790.4643 7473.9474 C 8657.489 7652.0297 8491.0733 7808.799 8294.648 7931.5159 C 7339.1151 8528.4859 6099.1159 8164.0437 5524.6071 7220.9412 C 5173.1922 6644.0653 5114.144 5920.8489 5349.564 5289.63 C 5536.4287 4788.5998 5895.3018 4363.4316 6354.0187 4089.496 C 6847.4435 3794.8335 7433.5245 3689.0279 7995.8717 3773.1569 C 7785.479 3575.9006 7589.1763 3386.0556 7412.8307 3209.303 C 7251.3144 3045.1575 7089.9477 2888.2198 6928.6611 2738.3727 C 6559.2389 2810.3679 6200.4451 2940.6411 5868.833 3129.0397 C 5193.7999 3512.546 4659.6545 4119.8533 4371.4239 4841.222 C 4124.6253 5458.8968 4071.4008 6140.5742 4210.6626 6783.3351 z M 8790.4643 7473.9474 C 9206.6447 6916.5934 9288.8413 6146.1853 8886.3003 5522.8841 C 8448.8361 4845.5072 7526.4024 4585.5353 6839.1477 5050.0496 C 6292.9115 5419.2497 6085.185 6182.0366 6485.1371 6735.7345 C 6785.2581 7151.2253 7390.4852 7307.5849 7809.442 6970.9826 C 7884.8554 6910.3932 7947.3401 6833.9829 7994.0491 6749.5299 L 7445.6105 6250.6251 C 7366.7985 6290.4335 7297.8279 6205.3842 7293.1399 6133.6596 C 7290.2809 6089.9178 7302.0327 6048.0351 7324.3333 6010.506 C 7351.0781 5965.4981 7392.6691 5928.4909 7439.0777 5904.802 C 7603.2816 5820.9858 7801.9157 5881.7603 7925.8472 6008.0704 C 8128.8106 6214.9294 8124.162 6514.2769 7994.0491 6749.5299 L 8790.4643 7473.9474 z M 9585.8458 8197.5678 L 10381.734 8921.5483 C 10640.988 8610.7237 10854.986 8261.9278 11008.877 7884.2706 C 11193.29 7431.7121 11287.826 6948.9153 11292.826 6466.0176 C 10924.191 6220.388 10511.903 5914.5099 10088.282 5579.2048 C 10280.163 6180.2021 10261.459 6842.3054 10030.737 7435.8627 C 9923.1651 7712.6038 9770.8731 7968.3575 9585.8458 8197.5678 z M 10381.734 8921.5483 C 10091.846 9269.1017 9744.9537 9568.8919 9353.5353 9801.3953 C 9883.6135 9860.4497 10457.258 9852.1497 11082.725 9757.1871 C 11115.431 9720.8697 11144.566 9681.4973 11176.215 9644.2539 L 10381.734 8921.5483 z M 11176.215 9644.2539 L 11259.65 9720.1804 C 11491.815 9679.6457 11725.708 9636.2108 11972.337 9571.084 C 12189.727 9513.6782 12425.753 9447.427 12673.43 9374.3411 C 12781.191 9182.5101 12878.712 8984.578 12965.198 8781.2405 C 13196.976 8236.3072 13344.528 7663.9264 13408.099 7084.5949 C 13034.77 7128.3067 12683.675 7123.0756 12375.862 7036.71 C 12361.823 7033.0622 12347.447 7029.0087 12332.729 7024.5571 C 12278.401 7470.8911 12163.206 7911.6056 11987.038 8332.7556 C 11786.854 8811.3179 11509.694 9251.8384 11176.215 9644.2539 z M 14063.486 8932.1153 C 14500.909 8783.235 14935.712 8625.8931 15336.802 8469.2678 C 15500.371 7835.2708 15586.552 7186.1539 15595.529 6536.8466 C 15241.561 6642.577 14872.957 6757.8814 14506.357 6857.2248 C 14463.559 7562.0849 14316.089 8262.4206 14063.486 8932.1153 z M 16546.887 7941.5401 C 16587.396 7920.9474 16626.456 7900.5926 16663.959 7880.4968 C 16938.836 7638.5251 17027.509 7332.8529 17063.384 7041.0707 C 16964.332 6784.8051 16842.2 6639.2126 16671.178 6543.3862 C 16665.142 7010.9684 16623.717 7478.4716 16546.887 7941.5401 z M 20958.587 7136.1189 C 21257.099 7419.2073 21608.547 7641.1535 21989.703 7785.1416 C 22045.924 7184.7718 22065.109 6580.0048 22046.655 5974.2447 C 22009.302 4748.084 21817.181 3534.6205 21477.606 2362.8916 C 21119.946 2565.4379 20815.448 2836.8741 20576.92 3155.1481 C 20808.004 4082.3173 20940.664 5034.2921 20970.802 5994.6771 C 20982.766 6375.9173 20978.643 6756.6882 20958.587 7136.1189 z M 23052.624 7972.6031 C 23274.199 7968.9879 23498.354 7939.0294 23721.636 7880.0679 C 23871.285 7840.5505 24015.825 7789.279 24154.508 7727.4824 C 24201.003 7132.0787 24215.782 6533.2406 24198.402 5933.5339 C 24160.159 4613.9908 23965.745 3307.0772 23622.08 2040.2674 C 23257.444 1962.9806 22875.562 1949.8842 22495.457 2009.6513 C 22871.037 3288.495 23082.777 4614.1867 23122.528 5953.8893 C 23142.57 6629.3515 23119.034 7303.6045 23052.624 7972.6031 z M 25276.073 6859.859 C 25879.888 6116.0933 26150.021 5102.2265 25896.931 4143.7937 C 25730.008 3511.6718 25357.712 2987.7163 24869.873 2612.9749 C 25106.691 3694.9236 25242.685 4799.8582 25274.275 5913.1785 C 25283.238 6229.0744 25283.829 6544.7657 25276.073 6859.859 z "
       transform="matrix(-0.00165772,0.00627765,-0.00627763,-0.00165772,-5118.7577,-10001.859)" />
  </g>
</svg>
`;function X(e){let t=new DOMParser().parseFromString(e,`image/svg+xml`);if(tn(t)===`Error`)return nn();let n=t.querySelector(`svg`);return n===null?nn():n}function en(e){return e===void 0?``:e.constructor.name==`String`?` `+e:` `+e.join(` `)}function tn(e){return e.constructor.name}var nn=()=>Yt().style({width:`20px`,height:`20px`}).parse($t),rn={Logo:`Pvekua_Logo`,text1:`Pvekua_text1`,text3:`Pvekua_text3`},an=`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!-- Created with Inkscape (http://www.inkscape.org/) -->

<svg
   width="464.17731mm"
   height="280.61356mm"
   viewBox="0 0 464.1773 280.61356"
   version="1.1"
   id="svg1"
   sodipodi:docname="capra.svg"
   inkscape:version="1.4.3 (0d15f75042, 2025-12-25)"
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
     inkscape:zoom="0.31296124"
     inkscape:cx="659.82611"
     inkscape:cy="912.25353"
     inkscape:window-width="1920"
     inkscape:window-height="1080"
     inkscape:window-x="0"
     inkscape:window-y="0"
     inkscape:window-maximized="1"
     inkscape:current-layer="g38" />
  <defs
     id="defs1">
    <rect
       x="1019.9519"
       y="653.23358"
       width="418.7486"
       height="360.73621"
       id="rect11" />
    <rect
       x="942.18433"
       y="-101.69609"
       width="442.67709"
       height="367.90054"
       id="rect10" />
    <rect
       x="376.87372"
       y="-110.66927"
       width="337.98993"
       height="314.06143"
       id="rect9" />
    <rect
       x="92.7229"
       y="388.83798"
       width="305.08826"
       height="264.3956"
       id="rect8" />
    <rect
       x="119.64245"
       y="137.58882"
       width="212.36536"
       height="515.64478"
       id="rect7" />
    <rect
       x="96.141991"
       y="155.46364"
       width="303.37881"
       height="495.22858"
       id="rect6" />
    <rect
       x="252.7411"
       y="314.56265"
       width="284.35822"
       height="233.03165"
       id="rect5" />
    <rect
       x="1628.5885"
       y="604.05829"
       width="76.987816"
       height="19.740465"
       id="rect4" />
    <rect
       x="1246.3828"
       y="433.76355"
       width="158.66028"
       height="109.79328"
       id="rect3" />
    <rect
       x="1103.3226"
       y="416.31293"
       width="286.121"
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
      <text
         xml:space="preserve"
         style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:7.11162px;line-height:6.6;font-family:Dimnah;-inkscape-font-specification:Dimnah;text-align:center;writing-mode:lr-tb;direction:ltr;text-anchor:middle;fill:none;fill-opacity:1;fill-rule:evenodd;stroke:#000000;stroke-width:1.00983;stroke-linecap:round;stroke-linejoin:bevel;stroke-opacity:1"
         x="35.375378"
         y="128.26299"
         id="text2"><tspan
           sodipodi:role="line"
           id="tspan2"
           style="stroke-width:1.00984"
           x="35.375378"
           y="128.26299" /></text>
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
      <text
         xml:space="preserve"
         transform="matrix(0.16667847,0,0,0.16667847,-38.785971,68.694678)"
         id="text4"
         style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:18.6667px;line-height:1.3;font-family:carlito;-inkscape-font-specification:carlito;text-align:center;writing-mode:lr-tb;direction:ltr;white-space:pre;shape-inside:url(#rect4);display:inline;fill:#ab1243;fill-opacity:1;fill-rule:evenodd;stroke-width:15.1181;stroke-linecap:round;stroke-linejoin:bevel;stroke-dasharray:none" />
      <path
         id="text1"
         style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:18.6667px;line-height:1.3;font-family:carlito;-inkscape-font-specification:carlito;text-align:center;writing-mode:lr-tb;direction:ltr;text-anchor:middle;white-space:pre;shape-inside:url(#rect1);display:inline;fill:#c35e76;fill-opacity:1;fill-rule:evenodd;stroke-width:47.6542;stroke-linecap:round;stroke-linejoin:bevel;stroke-dasharray:none"
         d="m 163.47523,129.02882 c -2.73349,0 -5.07032,0.8229 -7.01003,2.4689 -1.9402,1.64599 -3.57128,3.89465 -4.89377,6.74573 l -0.52918,-6.34855 c -0.0591,-0.76423 -0.26459,-1.30832 -0.61772,-1.63164 -0.32312,-0.3233 -0.89633,-0.48459 -1.71912,-0.48459 h -4.45311 v 43.11858 h 7.7598 v -27.24664 c 0.52869,-1.44026 1.1019,-2.71883 1.71913,-3.83574 0.61722,-1.1169 1.32297,-2.05787 2.11626,-2.82206 0.82328,-0.79362 1.73461,-1.38139 2.73397,-1.76347 0.53644,-0.21474 1.11304,-0.37344 1.72977,-0.47614 l -0.062,-0.10834 c 2.332,-2.24541 4.83622,-3.91477 7.51358,-5.00869 0.0977,-0.0407 0.19592,-0.0807 0.29459,-0.11985 l 0.13489,-1.25294 c -0.64673,-0.44085 -1.36649,-0.74931 -2.16027,-0.92568 -0.7933,-0.20578 -1.64609,-0.30876 -2.55694,-0.30876 z m 4.58226,2.48738 -0.48178,4.47868 c -0.0885,0.73481 -0.49969,1.10255 -1.23445,1.10255 -0.41165,0 -0.99985,-0.0738 -1.76411,-0.22083 -0.73478,-0.17635 -1.55759,-0.26425 -2.46891,-0.26425 -0.63269,0 -1.23154,0.0468 -1.79701,0.14087 l 1.32008,2.30951 c 0.23025,0.40304 0.53208,0.73457 0.90647,0.99365 0.37441,0.25913 0.82088,0.38819 1.33894,0.38819 0.66221,0 1.30942,-0.2303 1.9426,-0.6909 0.66222,-0.46059 1.44004,-0.96423 2.33201,-1.51122 0.89246,-0.54694 1.94357,-1.05059 3.15239,-1.51119 1.23782,-0.46059 2.74897,-0.69094 4.53388,-0.69094 2.67688,0 4.70705,0.8347 6.08856,2.5044 1.4105,1.64086 2.11577,4.10241 2.11577,7.38414 v 3.23825 c -4.77865,0.11509 -8.80897,0.56159 -12.09051,1.33882 -3.28203,0.74851 -5.94442,1.72746 -7.98812,2.93651 -2.04418,1.20905 -3.52678,2.59046 -4.44777,4.14497 -0.89247,1.52569 -1.33894,3.12371 -1.33894,4.79341 0,1.89994 0.30233,3.55512 0.90649,4.96574 0.63367,1.38179 1.48308,2.5475 2.54823,3.49747 1.09368,0.92119 2.34601,1.61213 3.75654,2.07274 1.43954,0.43181 2.9797,0.64793 4.62047,0.64793 1.58321,0 3.03727,-0.14426 4.36119,-0.43211 1.32442,-0.25907 2.56226,-0.662 3.7135,-1.20894 1.15174,-0.547 2.24542,-1.20906 3.28154,-1.98634 1.06515,-0.80602 2.1448,-1.71261 3.23897,-2.72015 l 0.94955,3.92915 c 0.1441,0.71967 0.41793,1.19497 0.82086,1.42527 0.40294,0.23029 0.97856,0.34519 1.72688,0.34519 h 3.36812 v -26.98791 c 0,-2.38932 -0.33086,-4.56285 -0.99307,-6.52042 -0.63319,-1.95751 -1.56869,-3.64157 -2.80653,-5.05214 -1.23784,-1.41061 -2.77799,-2.49026 -4.62048,-3.23872 -1.84247,-0.77728 -3.94423,-1.16552 -6.30476,-1.16552 -3.16303,0 -6.05808,0.52125 -8.6866,1.56415 z m 15.98444,22.40081 v 8.72254 c -0.83489,0.86363 -1.68431,1.65527 -2.54774,2.375 -0.8349,0.69088 -1.72735,1.28107 -2.67738,1.77044 -0.95001,0.46061 -1.95712,0.8205 -3.02226,1.07956 -1.06515,0.25913 -2.2309,0.38868 -3.49776,0.38868 -0.94953,0 -1.842,-0.11494 -2.6769,-0.34519 -0.83489,-0.25908 -1.55467,-0.63367 -2.1593,-1.12305 -0.60466,-0.51815 -1.09417,-1.16555 -1.46809,-1.94285 -0.34537,-0.806 -0.51806,-1.75612 -0.51806,-2.85 0,-1.1515 0.33086,-2.18766 0.99307,-3.10886 0.66221,-0.94998 1.72686,-1.7705 3.19544,-2.4614 1.49661,-0.69089 3.42519,-1.23806 5.78574,-1.6411 2.36053,-0.43182 5.22511,-0.71983 8.59324,-0.86377 z" />
      <text
         xml:space="preserve"
         transform="matrix(0.46666343,0,0,0.46666343,-102.77047,-56.706672)"
         id="text3"
         style="font-size:192px;line-height:1.3;font-family:crimson;-inkscape-font-specification:crimson;text-align:center;writing-mode:lr-tb;direction:ltr;white-space:pre;shape-inside:url(#rect5);shape-padding:0;display:inline;fill:#000000;fill-opacity:1;fill-rule:evenodd;stroke-width:0.428605;stroke-linecap:round;stroke-linejoin:round;paint-order:stroke markers fill"><tspan
           x="263.97589"
           y="482.4875"
           id="tspan3">cap</tspan></text>
    </g>
  </g>
</svg>
`,on=G(`<span>`),sn=e=>{let t=()=>e.width??280,n=()=>e.height??120,r=X(an);return r.classList.add(`capra_svg`),cn(r,t(),n()),(()=>{var e=on();return q(e,r),M(()=>K(e,rn.Logo)),e})()};function cn(e,t,n){let r=e.style;r.setProperty(`width`,t+`px`),r.setProperty(`height`,n+`px`)}var ln={Splash:`yllh9a_Splash`},un=G(`<div>`),dn=()=>(()=>{var e=un();return q(e,U(sn,{width:340,height:160})),M(()=>K(e,ln.Splash)),e})(),fn={Button:`s19keG_Button`,Catalyst:`s19keG_Catalyst`},pn=G(`<button>`),mn=G(`<a>`),Z=e=>{let t=()=>e.children,n=()=>e.link,r=()=>e.class,i=()=>e.call,a=()=>e.attrs,o=()=>e.style,s=hn(t(),r(),i(),n());return gn(s,a()),_n(s,o()),s};function hn(e,t,n,r){return r===void 0?(()=>{var r=pn();return et(r,`mousedown`,n),q(r,e),M(()=>K(r,`${fn.Button} ${en(t)}`)),r})():(()=>{var i=mn();return et(i,`mousedown`,n),$e(i,`href`,r),q(i,e),M(()=>K(i,`${fn.Catalyst} ${en(t)}`)),i})()}function gn(e,t){if(t!==void 0)for(let[n,r]of Object.entries(t))e.setAttribute(n,r)}function _n(e,t){if(t===void 0)return;let n=e.style;for(let[e,r]of Object.entries(t))n.setProperty(e,r)}var vn={WildContent:`qXYRSW_WildContent`,WildText:`qXYRSW_WildText`},yn=G(`<div><span>`),bn=e=>{let t=()=>e.text,n=()=>e.class;return(()=>{var e=yn(),r=e.firstChild;return q(r,t),M(t=>{var i=`${vn.WildText} ${en(n())}`,a=vn.WildContent;return i!==t.e&&K(e,t.e=i),a!==t.t&&K(r,t.t=a),t},{e:void 0,t:void 0}),e})()},xn={Dialog:`P6b2uW_Dialog`},Sn=G(`<div>`),Cn=e=>{let t=R(()=>e.children),n=()=>e.width,r=()=>e.height,i=()=>e.left,a=()=>e.top,o=()=>e.center??!1,s=()=>e.class,c=()=>e.overtakes??!1,l={};return n()!==void 0&&(l.width=`${n()}em`),r()!==void 0&&(l.height=`${r()}em`),a()!==void 0&&(l.top=`${a()}%`),i()!==void 0&&(l.left=`${i()}%`),o()&&n()!==void 0&&r()!==void 0&&(l[`margin-left`]=`-${Math.floor(n()/2)}em`,l[`margin-top`]=`-${Math.floor(r()/2)}em`),(()=>{var e=Sn();return q(e,t),M(t=>{var n=`${xn.Dialog}${en(s())}`,r=l,i=c();return n!==t.e&&K(e,t.e=n),t.t=tt(e,r,t.t),i!==t.a&&$e(e,`overtakes-content`,t.a=i),t},{e:void 0,t:void 0,a:void 0}),e})()},wn={Branch:`-jetwW_Branch`,BranchName:`-jetwW_BranchName`,Leaf:`-jetwW_Leaf`,Tree:`-jetwW_Tree`},Tn=G(`<div>`),En=e=>(e.transform??Dn)(e.data,null,e.ident??`5px`);function Dn(e,t,n){t??=(()=>{var e=Tn();return nt(e,`--ident`,n),M(()=>K(e,wn.Tree)),e})();for(let n of e)if(tn(n)===`Object`){let e=Object.keys(n);for(let r of e){let e=(()=>{var e=Tn();return q(e,U(Z,{get class(){return`${wn.BranchName} ${wn.Leaf}`},children:r})),M(()=>K(e,wn.Branch)),e})();Dn(n[r],e),t.appendChild(e)}}else t.appendChild(U(Z,{get class(){return wn.Leaf},children:n})());return t}var On={Transient:`S8oQoq_Transient`},kn=G(`<div>`),An=e=>{let t=()=>e.children,n=()=>e.timer;return(()=>{var e=kn();return q(e,t),M(t=>{var r=On.Transient,i=n();return r!==t.e&&K(e,t.e=r),i!==t.t&&$e(e,`timer`,t.t=i),t},{e:void 0,t:void 0}),e})()},jn=new MutationObserver(()=>{document.querySelectorAll(`[timer]`).forEach(async e=>await Mn(e))});async function Mn(e){let t=e.getAttribute(`timer`);t=Number(t),await new Promise(n=>setTimeout(()=>e.remove(),t))}function Nn(){jn.observe(document.documentElement,{subtree:!0,childList:!0,attributes:!0,attributeFilter:[`timer`]})}var Pn=G(`<span>color copied!`);U(An,{timer:1500,get children(){return Pn()}});var Q={App:`rYAGPW_App`,AppDepict:`rYAGPW_AppDepict`,Apps:`rYAGPW_Apps`,AppText:`rYAGPW_AppText`,AppTitle:`rYAGPW_AppTitle`,Greetings:`rYAGPW_Greetings`,Home:`rYAGPW_Home`,"shakin'":`rYAGPW_shakin'`},Fn=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M73.8 141.9c-15.2 6-25.8 21.8-25.8 39.5v256c0 23.5 18.5 42.7 41.6 42.7h332.8c23.1 0 41.6-19.2 41.6-42.7v-256c0-23.7-18.5-42.7-41.6-42.7H179l171.8-71.3L336.7 32 73.8 141.9zM160 438c-35.4 0-64-28.6-64-64s28.6-64 64-64 64 28.6 64 64-28.6 64-64 64zm256-171.3h-32v-46.2h-44.8v46.2H96v-85.3h320v85.3z"/></svg>`,In=`<svg xmlns="http://www.w3.org/2000/svg" class="ionicon" viewBox="0 0 512 512"><path d="M465.94 119.76l-73.7-73.7A47.68 47.68 0 00358.3 32H96a64 64 0 00-64 64v320a64 64 0 0064 64h320a64 64 0 0064-64V153.7a47.68 47.68 0 00-14.06-33.94zM120 112h176a8 8 0 018 8v48a8 8 0 01-8 8H120a8 8 0 01-8-8v-48a8 8 0 018-8zm139.75 319.91a80 80 0 1176.16-76.16 80.06 80.06 0 01-76.16 76.16z"/><circle cx="256" cy="352" r="48"/></svg>`,Ln=`<svg xmlns="http://www.w3.org/2000/svg" class="ionicon" viewBox="0 0 512 512"><path d="M480 128a64 64 0 00-64-64h-16V48.45c0-8.61-6.62-16-15.23-16.43A16 16 0 00368 48v16H144V48.45c0-8.61-6.62-16-15.23-16.43A16 16 0 00112 48v16H96a64 64 0 00-64 64v12a4 4 0 004 4h440a4 4 0 004-4zM32 416a64 64 0 0064 64h320a64 64 0 0064-64V179a3 3 0 00-3-3H35a3 3 0 00-3 3zm344-208a24 24 0 11-24 24 24 24 0 0124-24zm0 80a24 24 0 11-24 24 24 24 0 0124-24zm-80-80a24 24 0 11-24 24 24 24 0 0124-24zm0 80a24 24 0 11-24 24 24 24 0 0124-24zm0 80a24 24 0 11-24 24 24 24 0 0124-24zm-80-80a24 24 0 11-24 24 24 24 0 0124-24zm0 80a24 24 0 11-24 24 24 24 0 0124-24zm-80-80a24 24 0 11-24 24 24 24 0 0124-24zm0 80a24 24 0 11-24 24 24 24 0 0124-24z"/></svg>`,Rn=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M434 461.5l-26.6-69.1c-2.1-5.1-7-8.4-12.4-8.4-4.5 0-8.6 2.2-11.1 5.9s-3 8.4-1.4 12.5l26 69.1c2.1 5.1 7 8.5 12.5 8.5h.5c4.5 0 8.7-2.2 11.2-5.9 2.5-3.8 3-8.5 1.3-12.6zM117.6 384c-5.5 0-10.4 3.3-12.4 8.4l-26.6 69.1c-1.7 4.2-1.2 8.9 1.3 12.6 2.5 3.7 6.7 5.9 11.2 5.9h.5c5.5 0 10.4-3.3 12.5-8.5l26-69.1c1.7-4.1 1.2-8.8-1.4-12.5-2.4-3.7-6.6-5.9-11.1-5.9zM256.6 384h-1.1c-7.4 0-13.4 6-13.4 13.4v36.1c0 7.4 6 14.4 13.4 14.4h1.1c7.4 0 13.4-7 13.4-14.4v-36.1c0-7.4-6-13.4-13.4-13.4z"/><g><path d="M424 128H88c-4.4 0-8 3.6-8 8v176c0 4.4 3.6 8 8 8h336c4.4 0 8-3.6 8-8V136c0-4.4-3.6-8-8-8z"/><path d="M448 80H63.9C46.3 80 32 94.3 32 111.9v224.2c0 17.6 14.3 31.9 31.9 31.9H448c17.7 0 32-14.3 32-32V112c0-17.7-14.3-32-32-32zm4 244c0 8.8-7.2 16-16 16H76c-8.8 0-16-7.2-16-16V124c0-8.8 7.2-16 16-16h364.6c3 0 5.9 1.2 8 3.3 2.1 2.1 3.3 5 3.3 8V324z"/></g><path d="M256 32c-13.4-.2-24.4 12.2-24.4 25.6h48.7c.1-13.4-10.9-25.8-24.3-25.6z"/></svg>`,zn=G(`<div>`),Bn=G(`<div><span><span></span><span>`),Vn=()=>(()=>{var e=zn();return q(e,U(Un,{})),M(()=>K(e,Q.Home)),e})();async function Hn(){return[{name:`calendar`,icon:X(Ln),accent:`#c29884`,depict:`manage your schedule and affairs [not yet available]`},{name:`drive`,icon:X(In),accent:`#859f60`,depict:`store, share and backup your files [not yet available]`},{name:`comms`,icon:X(Fn),accent:`#1475dc`,depict:`talk with people in text, audio or video format [not yet available]`},{name:`machines`,icon:X(Rn),accent:`#bd0841`,depict:`manage your virtual machines [not yet available]`}]}var Un=()=>{let e=t(),[n]=ie(Hn),[r,i]=j(0);return U(Ue,{get children(){return[U(W,{get when(){return e.is_logged_in()},get children(){var e=zn();return q(e,U(Ve,{get each(){return n()},children:e=>U(Wn,{get icon(){return e.icon},get depict(){return e.depict},get name(){return e.name},get accent(){return e.accent},get rtt(){return r()},re_rtt:i})})),M(()=>K(e,Q.Apps)),e}}),U(W,{when:!0,get children(){return U(bn,{get class(){return Q.Greetings},text:`welcome`})}})]}})},Wn=e=>{let t=()=>e.rtt,n=()=>e.re_rtt,r=()=>e.name,i=()=>e.depict,a=()=>e.icon,o=()=>e.accent,s=()=>n()(e=>Math.abs(1-e));return(()=>{var e=Bn(),n=e.firstChild,c=n.firstChild,l=c.nextSibling;return et(e,`mouseenter`,s),q(e,a,n),q(c,r),q(l,i),M(r=>{var i=`${Q.App} ${t()==0?Q.RightRtt:Q.LeftRtt}`,a=o(),s=Q.AppText,u=Q.AppTitle,d=Q.AppDepict;return i!==r.e&&K(e,r.e=i),a!==r.t&&nt(e,`--accent`,r.t=a),s!==r.a&&K(n,r.a=s),u!==r.o&&K(c,r.o=u),d!==r.i&&K(l,r.i=d),r},{e:void 0,t:void 0,a:void 0,o:void 0,i:void 0}),e})()},Gn={Auth:`a-whjW_Auth`},Kn=G(`<div>`),[qn,Jn]=j(0),Yn=I({form:qn,set_form:Jn});function Xn(){return L(Yn)}var Zn=()=>{let e=t(),{form:i,set_form:a}=Xn(),o=()=>a(e=>Math.abs(1-e));return(()=>{var t=Kn();return q(t,U(Ue,{get children(){return[U(W,{get when(){return e.is_logged_out()},get children(){return U(Ue,{get children(){return[U(W,{get when(){return i()==0},get children(){return U(n,{swap_call:o})}}),U(W,{get when(){return i()==1},get children(){return U(r,{swap_call:o})}})]}})}}),U(W,{get when(){return e.is_logged_in()},get children(){return U(bn,{text:`You are already logged-in.`})}})]}})),M(()=>K(t,Gn.Auth)),t})()},Qn={Initialize:`jAvltG_Initialize`,Negotiate:`jAvltG_Negotiate`},$n=G(`<div>`),er=G(`<span>negotiating an identity... ok`),tr=G(`<span>negotiating an identity...`),nr=()=>(()=>{var e=$n();return q(e,U(dn,{}),null),q(e,U(rr,{}),null),M(()=>K(e,Qn.Initialize)),e})(),rr=()=>{let{user:n,re_user:r}=e(),[i]=ie(n(),ir);return ne(()=>{t(n).is_non_init()&&i()!==void 0&&r(i())}),U(qe,{get fallback(){return(()=>{var e=tr();return M(()=>K(e,Qn.Negotiate)),e})()},get children(){var e=er();return M(()=>K(e,Qn.Negotiate)),e}})};async function ir(e){if(e.name!==void 0)return e;let t=await fetch(`/auth/remembrance`,{method:`POST`,credentials:`include`});if(!t.ok)return e;if(t.headers.get(`content-length`)===`0`)return{name:e.name??``,address:e.address,access_token:e.access_token};let n=await t.json();return{name:n.name,address:n.address,access_token:n.access_token}}var ar=G(`<div style=width:23rem;height:23rem;top:70%;left:105%;position:relative;background:var(--white)>`),or=[`branch0`,{branch1:[`leaf0`,{leaf1:[`fallen0`,`fallen1`,{fallen2:[`soil0`,`soil1`],fallen3:[`soil2`,{soil3:[`roots0`,`roots1`]}]}]}]}],sr=()=>(()=>{var e=ar();return q(e,U(En,{data:or})),e})(),[cr,lr]=j({}),ur=I({colors:cr,re_colors:lr});function dr(){return L(ur)}function fr(e){return{ctx:e??dr(),overwrite_:!1,name_:null,name(e){return this.name_=e,this},overwrite(e){return this.overwrite_=e,this},register(e){let{colors:t,re_colors:n}=this.ctx,r=this.name_,i=this.overwrite_??!1;if(r===null)throw Error(`cannot register new colorscheme without a name`);if(!i&&t()[r]!==void 0)throw Error(`a colorscheme with the same name already exists. enable the overwrite flag if you want to, well, overwrite it`);n(t=>(t[r]=e,structuredClone(t)))},refresh(e){let{colors:t,re_colors:n}=this.ctx,r=t()[e];if(r===void 0)throw Error(`no such colorscheme is registered`);pr(r)},contains(e){return this.ctx.colors()[e]!==void 0},load(e){if(!this.contains(e))return null;let t=this.ctx.colors()[e];return hr(t.selectors,t.props)},load_all(){return Object.entries(this.ctx.colors())},update(e,t){if(!this.contains(e))throw Error(`no such colorscheme`);this.ctx.re_colors(n=>(n[e]=t,structuredClone(n)))},update_iter(...e){e.forEach(([e,t])=>this.update(e,t))},clear(){return this.name_=null,this.overwrite_=!1,this}}}function pr(e){let t=Object.entries(e.props);Object.entries(e.selectors).map(([e,n])=>{mr(e,t.filter(([e,t])=>tn(n)===`Number`?n===t.idx:n.includes(t.idx)).map(([e,t])=>[e,t.value]))})}function mr(e,t){document.querySelectorAll(e).forEach(e=>{let n=e.style;t.forEach(([e,t])=>n.setProperty(e,t))})}function hr(e,t){return{selectors:e??{},props:t??{},make(){return{selectors:this.selectors,props:this.props}},extend(e){let t=Object.keys(this.props).length,n=Object.entries(e.props_).map(([n,r])=>{let[i,a]=gr(this.props,n,r,e.prefix_,t);return t=a,i}),r=n.map(([e,t])=>t.idx);r=r.length===1?r[0]:r;let i=e.selectors_.length===0?[`:root`]:e.selectors_;i=i.map(e=>[e,r]);for(let[e,t]of i)this.selectors[e]===void 0?this.selectors[e]=t:this.selectors[e].push(t);return n.forEach(([e,t])=>{this.props[e]===void 0&&(this.props[e]=t)}),this},mutate(){},reduce(){Reflect.deleteProperty(this,`prop`)},clear(){return this.selectors={},this.props={},this}}}function gr(e,t,n,r,i){t=r?`--`+t:t;let a=e[t];if(a!==void 0&&a.value===n)return[a,i];let o=[t,{value:n,idx:i}];return i+=1,[o,i]}function _r(){return{selectors_:[],props_:{},prefix_:!1,selectors(...e){return this.selectors_=e,this},selectors_mut(){return this.selectors_},props(e){return this.props_=e,this},props_mut(){return this.props_},prefix(e){return this.prefix_=e,this},clear(){this.prefix_=!1,this.props_={},this.selectors_=[]}}}var[vr,yr]=j(!0),br=I({content:vr,re_content:yr});function xr(){return L(br)}var Sr=e=>{let{content:t,re_content:n}=xr(),r=R(()=>e.children);return ne(()=>r.toArray().forEach(e=>{e!==null&&e.setAttribute(`main-content`,t())})),r},$={ContentItem:`_0AH76q_ContentItem`,Entry:`_0AH76q_Entry`,Menu:`_0AH76q_Menu`,Path:`_0AH76q_Path`},Cr=`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
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
`,wr=`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
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
`,Tr=`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
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
`,Er=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 48C141.1 48 48 141.1 48 256s93.1 208 208 208 208-93.1 208-208S370.9 48 256 48zM76 256c0-48.1 18.7-93.3 52.7-127.3S207.9 76 256 76c48.1 0 93.3 18.7 127.3 52.7 32.2 32.2 50.7 74.5 52.6 119.7-8.8-10.3-24.2-24-43.8-24-27.5 0-41.7 25.7-51 42.7-1.4 2.5-2.7 4.9-3.9 7-11.4 19.2-27.3 30-42.5 28.9-13.4-.9-24.8-11.2-32.2-28.8-9.2-22.1-29.1-45.8-52.9-49.2-11.3-1.6-28.1.8-44.7 21.4-3.2 4-6.9 9.4-11.1 15.6-10.4 15.5-26.2 38.8-38.1 40.8-17.3 2.8-30.9-7.5-36.4-12.3-2.2-11.2-3.3-22.8-3.3-34.5z"/></svg>`,Dr=`<svg xmlns="http://www.w3.org/2000/svg" class="ionicon" viewBox="0 0 512 512"><path d="M261.56 101.28a8 8 0 00-11.06 0L66.4 277.15a8 8 0 00-2.47 5.79L63.9 448a32 32 0 0032 32H192a16 16 0 0016-16V328a8 8 0 018-8h80a8 8 0 018 8v136a16 16 0 0016 16h96.06a32 32 0 0032-32V282.94a8 8 0 00-2.47-5.79z"/><path d="M490.91 244.15l-74.8-71.56V64a16 16 0 00-16-16h-48a16 16 0 00-16 16v32l-57.92-55.38C272.77 35.14 264.71 32 256 32c-8.68 0-16.72 3.14-22.14 8.63l-212.7 203.5c-6.22 6-7 15.87-1.34 22.37A16 16 0 0043 267.56L250.5 69.28a8 8 0 0111.06 0l207.52 198.28a16 16 0 0022.59-.44c6.14-6.36 5.63-16.86-.76-22.97z"/></svg>`,Or=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M220.8 406.1l4.8 14.8c.4 1.2 1.9 1.8 3 1.1l6.8-4.2c2.5-1.6 2.5-5.2 0-6.8l-11.5-7.2c-1.7-1-3.6.5-3.1 2.3zM286.6 421l4.9-15.2c.6-1.8-1.4-3.3-3-2.3l-11.9 7.4a4.02 4.02 0 0 0 0 6.8l7 4.4c1.2.7 2.6.1 3-1.1zM188.6 242.2c-3.9 3.5-9.6 6.4-15.7 8.5-1 .4-1.6 1.5-1.2 2.5l9.3 28.9 3.8 11.8c.4 1.2 1.9 1.8 3 1.1l7-4.3 36.6-22.5c3-1.9 2.3-6.5-1.2-7.3-14.3-3.3-26.5-9.8-36.2-18.5-1.6-1.4-3.9-1.5-5.4-.2zM192.6 310.8l-2 1.2 14.6 45.3c.4 1.2 1.9 1.8 3 1.1l27.2-16.9c2.5-1.6 2.5-5.2 0-6.8l-38.5-23.9c-1.4-.8-3-.8-4.3 0zM258.1 348.9c-1.3-.8-2.9-.8-4.2 0L212 374.5l-.1.1c-1 .8-1 2.4 0 3.2l.7.5 41.3 25.3c1.3.8 2.9.8 4.2 0l41.7-25.5.4-.3c1-.8 1-2.2 0-3l-42.1-25.9zM296.7 296.6l-38.5-23.9c-1.3-.8-2.9-.8-4.2 0l-38.5 23.9a4.02 4.02 0 0 0 0 6.8l38.5 23.9c1.3.8 2.9.8 4.2 0l38.5-23.9c2.5-1.5 2.5-5.2 0-6.8zM318.1 242.3c-9.7 8.7-22 15.1-36.2 18.5-3.5.8-4.2 5.4-1.2 7.3l36.6 22.5 7.4 4.6c1.1.7 2.6.2 3-1.1l4-12.4 9.8-30.3c-6.9-2.1-13.6-5.3-18-9.2-1.6-1.3-3.9-1.2-5.4.1zM232.4 442l1.6 5s7.5 19 22 19c15 0 22.2-19 22.2-19l1.6-4.8c.6-1.7-.1-3.7-1.7-4.6l-20-12.4c-1.3-.8-2.9-.8-4.2 0l-19.8 12.3c-1.6.8-2.3 2.7-1.7 4.5zM276.7 341.5l27.5 17.1c1.1.7 2.6.2 3-1.1l14.2-43.8c.3-.9-.1-1.8-.8-2.3l-1-.6c-1.3-.8-2.9-.8-4.2 0l-38.5 23.9c-2.8 1.6-2.8 5.3-.2 6.8z"/><path d="M376.1 168.2c-6.2 5.4-13.2 8.7-18 10.5-1.8.7-3.5-1.4-2.3-3l4-5.7c6.1-8.7 8.5-19.4 6.8-29.8C357.9 86.8 311.7 46 256 46c-55.7 0-101.9 41.2-110.6 94.7-1.7 10.5.8 21.2 6.9 29.8l4 5.6c1.2 1.6-.5 3.8-2.4 3-5.4-2.1-13.5-6.2-20.1-12.8-1.4-1.4-3.6-1.5-5.2-.4-10.2 7.3-16.8 19.1-16.8 32.5 0 22.1 17.9 40 40 40 11.3 0 28-4.7 36.6-12.3 1.5-1.3 3.8-1.3 5.3.1 15.2 13.4 36.6 20.2 62.1 20.2s47-6.8 62.1-20.2c1.5-1.3 3.8-1.4 5.3-.1 8.5 7.6 25.3 12.3 36.6 12.3 22.1 0 40-18 40-40.1 0-11.9-5.2-22.6-13.5-30-2.7-2.6-7.2-2.7-10.2-.1z"/></svg>`,kr=G(`<div>`),Ar=G(`<span>`),jr=G(`<div><div>`),Mr=()=>{let e=t(),{form:n,set_form:r}=Xn(),i=X(wr);X(Cr);let o=X(Tr),s=X(Er),c=X(Dr),l=X(Or),u=()=>r(1),d=()=>r(0);return(()=>{var t=kr();return q(t,U(Pr,{get class(){return $.ContentItem},icon:s,text:`colors`,get dialog(){return U(Lr,{})}}),null),q(t,U(Ue,{get children(){return[U(W,{get when(){return e.is_logged_out()},get children(){return[U(Nr,{link:`/auth`,call:d,icon:i,text:`login`}),U(Nr,{link:`/auth`,call:u,icon:o,text:`register`})]}}),U(W,{get when(){return e.is_logged_in()},get children(){return[U(Nr,{link:`/configs`,icon:l,text:`configs`}),U(Pr,{get class(){return $.ContentItem},get dialog(){return U(a,{})},icon:c,get text(){return e.name()},show:!1,events:`click`})]}})]}}),null),M(()=>K(t,$.Menu)),t})()},Nr=e=>{let t=()=>e.icon,n=()=>e.text,r=()=>e.link,i=()=>e.call;return(()=>{var e=kr();return q(e,U(Z,{get link(){return r()},get call(){return i()},get class(){return $.Path},get children(){return[U(He,{get when(){return t()!==void 0},get children(){return t()}}),(()=>{var e=Ar();return q(e,n),e})()]}})),M(()=>K(e,$.Entry)),e})()},Pr=e=>{let t=()=>e.icon,n=()=>e.text,r=()=>e.call,i=()=>e.class,a=()=>e.dialog,[o,s]=j(!1),{content:c,re_content:l}=xr(),u=()=>s(e=>!e);return(()=>{var e=jr(),s=e.firstChild;return et(s,`mousedown`,u),q(s,U(Z,{get call(){return r()},get class(){return $.Path},get children(){return[Je(()=>t()),(()=>{var e=Ar();return q(e,n),e})()]}})),q(e,U(He,{get when(){return o()},get children(){return a()}}),null),M(t=>{var n=$.ContentItem,r=`${$.Entry}${en(i())}`;return n!==t.e&&K(e,t.e=n),r!==t.t&&K(s,t.t=r),t},{e:void 0,t:void 0}),e})()},{content:Fr,re_content:Ir}=xr();new MutationObserver(()=>{document.querySelectorAll(`[overtakes-content='true']`).length===0?Ir(!0):Ir(!1)}).observe(document.body,{subtree:!0,childList:!0,attributeFilter:[`overtakes-content`],attributeOldValue:!0});var Lr=()=>{let{colors:e,re_colors:t}=dr(),n=Object.keys(e());return U(Cn,{get class(){return s.UserMenu},get children(){return U(Ve,{each:n,children:e=>U(Rr,{title:e})})}})},Rr=e=>{let t=()=>e.title,{colors:n,re_colors:r}=dr();return U(Z,{call:e=>{let t=e.currentTarget;t.firstElementChild;let n=t.textContent;fr().refresh(n);let{config:r,re_config:i}=o();i(e=>structuredClone(e))},get class(){return s.Entry},style:{"justify-content":`center`},get children(){var e=Ar();return q(e,t),e}})},zr={Logo:`eSJJNa_Logo`,Page:`eSJJNa_Page`},Br=G(`<div>`);function Vr(){let e=_r().props({red:`#A95525`,green:`#87a187`,blue:`#485d6c`,black:`black`,white:`#f0f8ff`,abstract:`#f0f8ff35`,opaque:`#a0c65578`,"grad-start":`rgb(204, 217, 208)`,"grad-end":`rgb(245, 244, 225)`,"grad-rotate":`328deg`}).prefix(!0),t=_r().selectors(`svg.capra_svg`).props({cap:`var(--black)`,ra:`#649279`}).prefix(!0);return hr().extend(e).extend(t).make()}function Hr(){let e=_r().props({opaque:`linear-gradient(132deg, #b574447a 0%, #502941 100%)`,abstract:`rgba(73, 126, 172, 0.21)`,black:`#e3e2e4`,white:`#1f212e`,blue:`#9e8776`,green:`#87a187`,red:`#A95525`,"grad-start":`#43001e`,"grad-end":`#000000`,"grad-rotate":`341deg`}).prefix(!0),t=_r().props({cap:`var(--black)`,ra:`var(--blue)`}).selectors(`svg.capra_svg`).prefix(!0);return hr().extend(e).extend(t).make()}var{colors:Ur,re_colors:Wr}=dr();fr({colors:Ur,re_colors:Wr}).name(`verdant`).register(Vr()),fr({colors:Ur,re_colors:Wr}).name(`black-star`).register(Hr());var Gr=e=>{let t=()=>e.children;return(()=>{var e=Br();return q(e,U(Z,{link:`/`,get class(){return zr.Logo},get children(){return U(sn,{width:140,height:60})}}),null),q(e,U(Mr,{}),null),q(e,U(Sr,{get children(){return t()}}),null),M(()=>K(e,zr.Page)),e})()},Kr=new MutationObserver(()=>{fr().refresh(`verdant`),Kr.disconnect()});Kr.observe(document.body,{childList:!0,subtree:!0});var qr={App:`gPMrEW_App`,AppRoute:`gPMrEW_AppRoute`},Jr=G(`<div>`);Nn();var Yr=()=>{let{user:n,re_user:r}=e(),a=t(n);return(()=>{var e=Jr();return q(e,U(Ue,{get children(){return[U(W,{get when(){return a.is_non_init()},get children(){return U(nr,{})}}),U(W,{get when(){return a.is_logged_out()||a.is_logged_in()},get children(){return U(Gr,{get children(){return U(Jt,{get children(){return[U(Vt,{path:`/`,component:Vn}),U(Vt,{path:`/auth`,component:Zn}),U(Vt,{path:`/configs`,component:i}),U(Vt,{path:`*`,component:dn}),U(Vt,{path:`/testing`,component:sr})]}})}})}})]}})),M(()=>K(e,qr.App)),e})()};async function Xr(){if(!document.hidden)return;let e=t();if(!e.is_logged_in())return;let n=JSON.stringify({name:e.name(),address:e.address(),access_token:e.access_token()});(await fetch(`auth/cache`,{method:`POST`,credentials:`include`,headers:{"content-type":`application/json`,"content-length":`${n.length}`},keepalive:!0,body:n})).ok}window.addEventListener(`visibilitychange`,Xr),Ze(()=>U(Yr,{}),document.body);