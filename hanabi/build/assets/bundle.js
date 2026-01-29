(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e={context:void 0,registry:void 0,effects:void 0,done:!1,getContextId(){return t(this.context.count)},getNextContextId(){return t(this.context.count++)}};function t(t){let n=String(t),r=n.length-1;return e.context.id+(r?String.fromCharCode(96+r):``)+n}function n(t){e.context=t}function r(){return{...e.context,id:e.getNextContextId(),count:0}}var i=(e,t)=>e===t,a=Symbol(`solid-proxy`),o=typeof Proxy==`function`,s=Symbol(`solid-track`),c={equals:i},l=null,u=xe,d=1,f=2,p={owned:null,cleanups:null,context:null,owner:null},m={},h=null,g=null,_=null,v=null,y=null,b=null,x=null,S=0;function C(e,t){let n=y,r=h,i=e.length===0,a=t===void 0?r:t,o=i?p:{owned:null,cleanups:null,context:a?a.context:null,owner:a},s=i?e:()=>e(()=>O(()=>N(o)));h=o,y=null;try{return M(s,!0)}finally{y=n,h=r}}function w(e,t){t=t?Object.assign({},c,t):c;let n={value:e,observers:null,observerSlots:null,comparator:t.equals||void 0};return[me.bind(n),e=>(typeof e==`function`&&(e=g&&g.running&&g.sources.has(n)?e(n.tValue):e(n.value)),he(n,e))]}function ee(e,t,n){let r=ve(e,t,!0,d);_&&g&&g.running?b.push(r):ge(r)}function T(e,t,n){let r=ve(e,t,!1,d);_&&g&&g.running?b.push(r):ge(r)}function te(e,t,n){u=Ce;let r=ve(e,t,!1,d),i=fe&&j(fe);i&&(r.suspense=i),(!n||!n.render)&&(r.user=!0),x?x.push(r):ge(r)}function E(e,t,n){n=n?Object.assign({},c,n):c;let r=ve(e,t,!0,0);return r.observers=null,r.observerSlots=null,r.comparator=n.equals||void 0,_&&g&&g.running?(r.tState=d,b.push(r)):ge(r),me.bind(r)}function ne(e){return e&&typeof e==`object`&&`then`in e}function re(t,n,r){let i,a,o;typeof n==`function`?(i=t,a=n,o=r||{}):(i=!0,a=t,o=n||{});let s=null,c=m,l=null,u=!1,d=!1,f=`initialValue`in o,p=typeof i==`function`&&E(i),_=new Set,[v,b]=(o.storage||w)(o.initialValue),[x,S]=w(void 0),[C,T]=w(void 0,{equals:!1}),[te,re]=w(f?`ready`:`unresolved`);e.context&&(l=e.getNextContextId(),o.ssrLoadFrom===`initial`?c=o.initialValue:e.load&&e.has(l)&&(c=e.load(l)));function D(e,t,n,r){return s===e&&(s=null,r!==void 0&&(f=!0),(e===c||t===c)&&o.onHydrated&&queueMicrotask(()=>o.onHydrated(r,{value:t})),c=m,g&&e&&u?(g.promises.delete(e),u=!1,M(()=>{g.running=!0,ie(t,n)},!1)):ie(t,n)),t}function ie(e,t){M(()=>{t===void 0&&b(()=>e),re(t===void 0?f?`ready`:`unresolved`:`errored`),S(t);for(let e of _.keys())e.decrement();_.clear()},!1)}function k(){let e=fe&&j(fe),t=v(),n=x();if(n!==void 0&&!s)throw n;return y&&!y.user&&e&&ee(()=>{C(),s&&(e.resolved&&g&&u?g.promises.add(s):_.has(e)||(e.increment(),_.add(e)))}),t}function ae(e=!0){if(e!==!1&&d)return;d=!1;let t=p?p():i;if(u=g&&g.running,t==null||t===!1){D(s,O(v));return}g&&s&&g.promises.delete(s);let n,r=c===m?O(()=>{try{return a(t,{value:v(),refetching:e})}catch(e){n=e}}):c;if(n!==void 0){D(s,void 0,De(n),t);return}else if(!ne(r))return D(s,r,void 0,t),r;return s=r,`v`in r?(r.s===1?D(s,r.v,void 0,t):D(s,void 0,De(r.v),t),r):(d=!0,queueMicrotask(()=>d=!1),M(()=>{re(f?`refreshing`:`pending`),T()},!1),r.then(e=>D(r,e,void 0,t),e=>D(r,void 0,De(e),t)))}Object.defineProperties(k,{state:{get:()=>te()},error:{get:()=>x()},loading:{get(){let e=te();return e===`pending`||e===`refreshing`}},latest:{get(){if(!f)return k();let e=x();if(e&&!s)throw e;return v()}}});let se=h;return p?ee(()=>(se=h,ae(!1))):ae(!1),[k,{refetch:e=>oe(se,()=>ae(e)),mutate:b}]}function D(e){return M(e,!1)}function O(e){if(!v&&y===null)return e();let t=y;y=null;try{return v?v.untrack(e):e()}finally{y=t}}function ie(e,t,n){let r=Array.isArray(e),i,a=n&&n.defer;return n=>{let o;if(r){o=Array(e.length);for(let t=0;t<e.length;t++)o[t]=e[t]()}else o=e();if(a)return a=!1,n;let s=O(()=>t(o,i,n));return i=o,s}}function k(e){return h===null||(h.cleanups===null?h.cleanups=[e]:h.cleanups.push(e)),e}function ae(){return h}function oe(e,t){let n=h,r=y;h=e,y=null;try{return M(t,!0)}catch(e){ke(e)}finally{h=n,y=r}}function se(e){if(g&&g.running)return e(),g.done;let t=y,n=h;return Promise.resolve().then(()=>{y=t,h=n;let r;return(_||fe)&&(r=g||={sources:new Set,effects:[],promises:new Set,disposed:new Set,queue:new Set,running:!0},r.done||=new Promise(e=>r.resolve=e),r.running=!0),M(e,!1),y=h=null,r?r.done:void 0})}var[ce,le]=w(!1);function ue(e){x.push.apply(x,e),e.length=0}function A(e,t){let n=Symbol(`context`);return{id:n,Provider:je(n),defaultValue:e}}function j(e){let t;return h&&h.context&&(t=h.context[e.id])!==void 0?t:e.defaultValue}function de(e){let t=E(e),n=E(()=>Ae(t()));return n.toArray=()=>{let e=n();return Array.isArray(e)?e:e==null?[]:[e]},n}var fe;function pe(){return fe||=A()}function me(){let e=g&&g.running;if(this.sources&&(e?this.tState:this.state))if((e?this.tState:this.state)===d)ge(this);else{let e=b;b=null,M(()=>we(this),!1),b=e}if(y){let e=this.observers?this.observers.length:0;y.sources?(y.sources.push(this),y.sourceSlots.push(e)):(y.sources=[this],y.sourceSlots=[e]),this.observers?(this.observers.push(y),this.observerSlots.push(y.sources.length-1)):(this.observers=[y],this.observerSlots=[y.sources.length-1])}return e&&g.sources.has(this)?this.tValue:this.value}function he(e,t,n){let r=g&&g.running&&g.sources.has(e)?e.tValue:e.value;if(!e.comparator||!e.comparator(r,t)){if(g){let r=g.running;(r||!n&&g.sources.has(e))&&(g.sources.add(e),e.tValue=t),r||(e.value=t)}else e.value=t;e.observers&&e.observers.length&&M(()=>{for(let t=0;t<e.observers.length;t+=1){let n=e.observers[t],r=g&&g.running;r&&g.disposed.has(n)||((r?!n.tState:!n.state)&&(n.pure?b.push(n):x.push(n),n.observers&&Te(n)),r?n.tState=d:n.state=d)}if(b.length>1e6)throw b=[],Error()},!1)}return t}function ge(e){if(!e.fn)return;N(e);let t=S;_e(e,g&&g.running&&g.sources.has(e)?e.tValue:e.value,t),g&&!g.running&&g.sources.has(e)&&queueMicrotask(()=>{M(()=>{g&&(g.running=!0),y=h=e,_e(e,e.tValue,t),y=h=null},!1)})}function _e(e,t,n){let r,i=h,a=y;y=h=e;try{r=e.fn(t)}catch(t){return e.pure&&(g&&g.running?(e.tState=d,e.tOwned&&e.tOwned.forEach(N),e.tOwned=void 0):(e.state=d,e.owned&&e.owned.forEach(N),e.owned=null)),e.updatedAt=n+1,ke(t)}finally{y=a,h=i}(!e.updatedAt||e.updatedAt<=n)&&(e.updatedAt!=null&&`observers`in e?he(e,r,!0):g&&g.running&&e.pure?(g.sources.add(e),e.tValue=r):e.value=r,e.updatedAt=n)}function ve(e,t,n,r=d,i){let a={fn:e,state:r,updatedAt:null,owned:null,sources:null,sourceSlots:null,cleanups:null,value:t,owner:h,context:h?h.context:null,pure:n};if(g&&g.running&&(a.state=0,a.tState=r),h===null||h!==p&&(g&&g.running&&h.pure?h.tOwned?h.tOwned.push(a):h.tOwned=[a]:h.owned?h.owned.push(a):h.owned=[a]),v&&a.fn){let[e,t]=w(void 0,{equals:!1}),n=v.factory(a.fn,t);k(()=>n.dispose());let r=v.factory(a.fn,()=>se(t).then(()=>r.dispose()));a.fn=t=>(e(),g&&g.running?r.track(t):n.track(t))}return a}function ye(e){let t=g&&g.running;if((t?e.tState:e.state)===0)return;if((t?e.tState:e.state)===f)return we(e);if(e.suspense&&O(e.suspense.inFallback))return e.suspense.effects.push(e);let n=[e];for(;(e=e.owner)&&(!e.updatedAt||e.updatedAt<S);){if(t&&g.disposed.has(e))return;(t?e.tState:e.state)&&n.push(e)}for(let r=n.length-1;r>=0;r--){if(e=n[r],t){let t=e,i=n[r+1];for(;(t=t.owner)&&t!==i;)if(g.disposed.has(t))return}if((t?e.tState:e.state)===d)ge(e);else if((t?e.tState:e.state)===f){let t=b;b=null,M(()=>we(e,n[0]),!1),b=t}}}function M(e,t){if(b)return e();let n=!1;t||(b=[]),x?n=!0:x=[],S++;try{let t=e();return be(n),t}catch(e){n||(x=null),b=null,ke(e)}}function be(e){if(b&&=(_&&g&&g.running?Se(b):xe(b),null),e)return;let t;if(g){if(!g.promises.size&&!g.queue.size){let e=g.sources,n=g.disposed;x.push.apply(x,g.effects),t=g.resolve;for(let e of x)`tState`in e&&(e.state=e.tState),delete e.tState;g=null,M(()=>{for(let e of n)N(e);for(let t of e){if(t.value=t.tValue,t.owned)for(let e=0,n=t.owned.length;e<n;e++)N(t.owned[e]);t.tOwned&&(t.owned=t.tOwned),delete t.tValue,delete t.tOwned,t.tState=0}le(!1)},!1)}else if(g.running){g.running=!1,g.effects.push.apply(g.effects,x),x=null,le(!0);return}}let n=x;x=null,n.length&&M(()=>u(n),!1),t&&t()}function xe(e){for(let t=0;t<e.length;t++)ye(e[t])}function Se(e){for(let t=0;t<e.length;t++){let n=e[t],r=g.queue;r.has(n)||(r.add(n),_(()=>{r.delete(n),M(()=>{g.running=!0,ye(n)},!1),g&&(g.running=!1)}))}}function Ce(t){let r,i=0;for(r=0;r<t.length;r++){let e=t[r];e.user?t[i++]=e:ye(e)}if(e.context){if(e.count){e.effects||=[],e.effects.push(...t.slice(0,i));return}n()}for(e.effects&&(e.done||!e.count)&&(t=[...e.effects,...t],i+=e.effects.length,delete e.effects),r=0;r<i;r++)ye(t[r])}function we(e,t){let n=g&&g.running;n?e.tState=0:e.state=0;for(let r=0;r<e.sources.length;r+=1){let i=e.sources[r];if(i.sources){let e=n?i.tState:i.state;e===d?i!==t&&(!i.updatedAt||i.updatedAt<S)&&ye(i):e===f&&we(i,t)}}}function Te(e){let t=g&&g.running;for(let n=0;n<e.observers.length;n+=1){let r=e.observers[n];(t?!r.tState:!r.state)&&(t?r.tState=f:r.state=f,r.pure?b.push(r):x.push(r),r.observers&&Te(r))}}function N(e){let t;if(e.sources)for(;e.sources.length;){let t=e.sources.pop(),n=e.sourceSlots.pop(),r=t.observers;if(r&&r.length){let e=r.pop(),i=t.observerSlots.pop();n<r.length&&(e.sourceSlots[i]=n,r[n]=e,t.observerSlots[n]=i)}}if(e.tOwned){for(t=e.tOwned.length-1;t>=0;t--)N(e.tOwned[t]);delete e.tOwned}if(g&&g.running&&e.pure)Ee(e,!0);else if(e.owned){for(t=e.owned.length-1;t>=0;t--)N(e.owned[t]);e.owned=null}if(e.cleanups){for(t=e.cleanups.length-1;t>=0;t--)e.cleanups[t]();e.cleanups=null}g&&g.running?e.tState=0:e.state=0}function Ee(e,t){if(t||(e.tState=0,g.disposed.add(e)),e.owned)for(let t=0;t<e.owned.length;t++)Ee(e.owned[t])}function De(e){return e instanceof Error?e:Error(typeof e==`string`?e:`Unknown error`,{cause:e})}function Oe(e,t,n){try{for(let n of t)n(e)}catch(e){ke(e,n&&n.owner||null)}}function ke(e,t=h){let n=l&&t&&t.context&&t.context[l],r=De(e);if(!n)throw r;x?x.push({fn(){Oe(r,n,t)},state:d}):Oe(r,n,t)}function Ae(e){if(typeof e==`function`&&!e.length)return Ae(e());if(Array.isArray(e)){let t=[];for(let n=0;n<e.length;n++){let r=Ae(e[n]);Array.isArray(r)?t.push.apply(t,r):t.push(r)}return t}return e}function je(e,t){return function(t){let n;return T(()=>n=O(()=>(h.context={...h.context,[e]:t.value},de(()=>t.children))),void 0),n}}var Me=Symbol(`fallback`);function Ne(e){for(let t=0;t<e.length;t++)e[t]()}function Pe(e,t,n={}){let r=[],i=[],a=[],o=0,c=t.length>1?[]:null;return k(()=>Ne(a)),()=>{let l=e()||[],u=l.length,d,f;return l[s],O(()=>{let e,t,s,m,h,g,_,v,y;if(u===0)o!==0&&(Ne(a),a=[],r=[],i=[],o=0,c&&=[]),n.fallback&&(r=[Me],i[0]=C(e=>(a[0]=e,n.fallback())),o=1);else if(o===0){for(i=Array(u),f=0;f<u;f++)r[f]=l[f],i[f]=C(p);o=u}else{for(s=Array(u),m=Array(u),c&&(h=Array(u)),g=0,_=Math.min(o,u);g<_&&r[g]===l[g];g++);for(_=o-1,v=u-1;_>=g&&v>=g&&r[_]===l[v];_--,v--)s[v]=i[_],m[v]=a[_],c&&(h[v]=c[_]);for(e=new Map,t=Array(v+1),f=v;f>=g;f--)y=l[f],d=e.get(y),t[f]=d===void 0?-1:d,e.set(y,f);for(d=g;d<=_;d++)y=r[d],f=e.get(y),f!==void 0&&f!==-1?(s[f]=i[d],m[f]=a[d],c&&(h[f]=c[d]),f=t[f],e.set(y,f)):a[d]();for(f=g;f<u;f++)f in s?(i[f]=s[f],a[f]=m[f],c&&(c[f]=h[f],c[f](f))):i[f]=C(p);i=i.slice(0,o=u),r=l.slice(0)}return i});function p(e){if(a[f]=e,c){let[e,n]=w(f);return c[f]=n,t(l[f],e)}return t(l[f])}}}var Fe=!1;function P(t,i){if(Fe&&e.context){let a=e.context;n(r());let o=O(()=>t(i||{}));return n(a),o}return O(()=>t(i||{}))}function Ie(){return!0}var Le={get(e,t,n){return t===a?n:e.get(t)},has(e,t){return t===a?!0:e.has(t)},set:Ie,deleteProperty:Ie,getOwnPropertyDescriptor(e,t){return{configurable:!0,enumerable:!0,get(){return e.get(t)},set:Ie,deleteProperty:Ie}},ownKeys(e){return e.keys()}};function Re(e){return(e=typeof e==`function`?e():e)?e:{}}function ze(){for(let e=0,t=this.length;e<t;++e){let t=this[e]();if(t!==void 0)return t}}function Be(...e){let t=!1;for(let n=0;n<e.length;n++){let r=e[n];t||=!!r&&a in r,e[n]=typeof r==`function`?(t=!0,E(r)):r}if(o&&t)return new Proxy({get(t){for(let n=e.length-1;n>=0;n--){let r=Re(e[n])[t];if(r!==void 0)return r}},has(t){for(let n=e.length-1;n>=0;n--)if(t in Re(e[n]))return!0;return!1},keys(){let t=[];for(let n=0;n<e.length;n++)t.push(...Object.keys(Re(e[n])));return[...new Set(t)]}},Le);let n={},r=Object.create(null);for(let t=e.length-1;t>=0;t--){let i=e[t];if(!i)continue;let a=Object.getOwnPropertyNames(i);for(let e=a.length-1;e>=0;e--){let t=a[e];if(t===`__proto__`||t===`constructor`)continue;let o=Object.getOwnPropertyDescriptor(i,t);if(!r[t])r[t]=o.get?{enumerable:!0,configurable:!0,get:ze.bind(n[t]=[o.get.bind(i)])}:o.value===void 0?void 0:o;else{let e=n[t];e&&(o.get?e.push(o.get.bind(i)):o.value!==void 0&&e.push(()=>o.value))}}}let i={},s=Object.keys(r);for(let e=s.length-1;e>=0;e--){let t=s[e],n=r[t];n&&n.get?Object.defineProperty(i,t,n):i[t]=n?n.value:void 0}return i}var Ve=e=>`Stale read from <${e}>.`;function He(e){let t=`fallback`in e&&{fallback:()=>e.fallback};return E(Pe(()=>e.each,e.children,t||void 0))}function F(e){let t=e.keyed,n=E(()=>e.when,void 0,void 0),r=t?n:E(n,void 0,{equals:(e,t)=>!e==!t});return E(()=>{let i=r();if(i){let a=e.children;return typeof a==`function`&&a.length>0?O(()=>a(t?i:()=>{if(!O(r))throw Ve(`Show`);return n()})):a}return e.fallback},void 0,void 0)}function Ue(e){let t=de(()=>e.children),n=E(()=>{let e=t(),n=Array.isArray(e)?e:[e],r=()=>void 0;for(let e=0;e<n.length;e++){let t=e,i=n[e],a=r,o=E(()=>a()?void 0:i.when,void 0,void 0),s=i.keyed?o:E(o,void 0,{equals:(e,t)=>!e==!t});r=()=>a()||(s()?[t,o,i]:void 0)}return r});return E(()=>{let t=n()();if(!t)return e.fallback;let[r,i,a]=t,o=a.children;return typeof o==`function`&&o.length>0?O(()=>o(a.keyed?i():()=>{if(O(n)()?.[0]!==r)throw Ve(`Match`);return i()})):o},void 0,void 0)}function I(e){return e}var We;function Ge(){We&&[...We].forEach(e=>e())}var Ke=A();function qe(t){let r=0,i,a,o,s,c,[l,u]=w(!1),d=pe(),f={increment:()=>{++r===1&&u(!0)},decrement:()=>{--r===0&&u(!1)},inFallback:l,effects:[],resolved:!1},p=ae();if(e.context&&e.load){let t=e.getContextId(),r=e.load(t);if(r&&(typeof r!=`object`||r.s!==1?o=r:e.gather(t)),o&&o!==`$$f`){let[r,i]=w(void 0,{equals:!1});s=r,o.then(()=>{if(e.done)return i();e.gather(t),n(a),i(),n()},e=>{c=e,i()})}}let m=j(Ke);m&&(i=m.register(f.inFallback));let h;return k(()=>h&&h()),P(d.Provider,{value:f,get children(){return E(()=>{if(c)throw c;if(a=e.context,s){s(),s=void 0;return}a&&o===`$$f`&&n();let r=E(()=>t.children);return E(e=>{let s=f.inFallback(),{showContent:c=!0,showFallback:l=!0}=i?i():{};if((!s||o&&o!==`$$f`)&&c)return f.resolved=!0,h&&h(),h=a=o=void 0,ue(f.effects),r();if(l)return h?e:C(e=>(h=e,a&&=(n({id:a.id+`F`,count:0}),void 0),t.fallback),p)})})}})}var Je=e=>E(()=>e());function Ye(e,t,n){let r=n.length,i=t.length,a=r,o=0,s=0,c=t[i-1].nextSibling,l=null;for(;o<i||s<a;){if(t[o]===n[s]){o++,s++;continue}for(;t[i-1]===n[a-1];)i--,a--;if(i===o){let t=a<r?s?n[s-1].nextSibling:n[a-s]:c;for(;s<a;)e.insertBefore(n[s++],t)}else if(a===s)for(;o<i;)(!l||!l.has(t[o]))&&t[o].remove(),o++;else if(t[o]===n[a-1]&&n[s]===t[i-1]){let r=t[--i].nextSibling;e.insertBefore(n[s++],t[o++].nextSibling),e.insertBefore(n[--a],r),t[i]=n[a]}else{if(!l){l=new Map;let e=s;for(;e<a;)l.set(n[e],e++)}let r=l.get(t[o]);if(r!=null)if(s<r&&r<a){let c=o,u=1,d;for(;++c<i&&c<a&&!((d=l.get(t[c]))==null||d!==r+u);)u++;if(u>r-s){let i=t[o];for(;s<r;)e.insertBefore(n[s++],i)}else e.replaceChild(n[s++],t[o++])}else o++;else t[o++].remove()}}}var Xe=`_$DX_DELEGATE`;function Ze(e,t,n,r={}){let i;return C(r=>{i=r,t===document?e():H(t,e(),t.firstChild?null:void 0,n)},r.owner),()=>{i(),t.textContent=``}}function L(e,t,n,r){let i,a=()=>{let t=r?document.createElementNS(`http://www.w3.org/1998/Math/MathML`,`template`):document.createElement(`template`);return t.innerHTML=e,n?t.content.firstChild.firstChild:r?t.firstChild:t.content.firstChild},o=t?()=>O(()=>document.importNode(i||=a(),!0)):()=>(i||=a()).cloneNode(!0);return o.cloneNode=o,o}function Qe(e,t=window.document){let n=t[Xe]||(t[Xe]=new Set);for(let r=0,i=e.length;r<i;r++){let i=e[r];n.has(i)||(n.add(i),t.addEventListener(i,et))}}function R(e,t,n){$e(e)||(n==null?e.removeAttribute(t):e.setAttribute(t,n))}function z(e,t){$e(e)||(t==null?e.removeAttribute(`class`):e.className=t)}function B(e,t,n,r){if(r)Array.isArray(n)?(e[`$$${t}`]=n[0],e[`$$${t}Data`]=n[1]):e[`$$${t}`]=n;else if(Array.isArray(n)){let r=n[0];e.addEventListener(t,n[0]=t=>r.call(e,n[1],t))}else e.addEventListener(t,n,typeof n!=`function`&&n)}function V(e,t,n){n==null?e.style.removeProperty(t):e.style.setProperty(t,n)}function H(e,t,n,r){if(n!==void 0&&!r&&(r=[]),typeof t!=`function`)return tt(e,t,r,n);T(r=>tt(e,t(),r,n),r)}function $e(t){return!!e.context&&!e.done&&(!t||t.isConnected)}function et(t){if(e.registry&&e.events&&e.events.find(([e,n])=>n===t))return;let n=t.target,r=`$$${t.type}`,i=t.target,a=t.currentTarget,o=e=>Object.defineProperty(t,`target`,{configurable:!0,value:e}),s=()=>{let e=n[r];if(e&&!n.disabled){let i=n[`${r}Data`];if(i===void 0?e.call(n,t):e.call(n,i,t),t.cancelBubble)return}return n.host&&typeof n.host!=`string`&&!n.host._$host&&n.contains(t.target)&&o(n.host),!0},c=()=>{for(;s()&&(n=n._$host||n.parentNode||n.host););};if(Object.defineProperty(t,`currentTarget`,{configurable:!0,get(){return n||document}}),e.registry&&!e.done&&(e.done=_$HY.done=!0),t.composedPath){let e=t.composedPath();o(e[0]);for(let t=0;t<e.length-2&&(n=e[t],s());t++){if(n._$host){n=n._$host,c();break}if(n.parentNode===a)break}}else c();o(i)}function tt(e,t,n,r,i){let a=$e(e);if(a){!n&&(n=[...e.childNodes]);let t=[];for(let e=0;e<n.length;e++){let r=n[e];r.nodeType===8&&r.data.slice(0,2)===`!$`?r.remove():t.push(r)}n=t}for(;typeof n==`function`;)n=n();if(t===n)return n;let o=typeof t,s=r!==void 0;if(e=s&&n[0]&&n[0].parentNode||e,o===`string`||o===`number`){if(a||o===`number`&&(t=t.toString(),t===n))return n;if(s){let i=n[0];i&&i.nodeType===3?i.data!==t&&(i.data=t):i=document.createTextNode(t),n=it(e,n,r,i)}else n=n!==``&&typeof n==`string`?e.firstChild.data=t:e.textContent=t}else if(t==null||o===`boolean`){if(a)return n;n=it(e,n,r)}else if(o===`function`)return T(()=>{let i=t();for(;typeof i==`function`;)i=i();n=tt(e,i,n,r)}),()=>n;else if(Array.isArray(t)){let o=[],c=n&&Array.isArray(n);if(nt(o,t,n,i))return T(()=>n=tt(e,o,n,r,!0)),()=>n;if(a){if(!o.length)return n;if(r===void 0)return n=[...e.childNodes];let t=o[0];if(t.parentNode!==e)return n;let i=[t];for(;(t=t.nextSibling)!==r;)i.push(t);return n=i}if(o.length===0){if(n=it(e,n,r),s)return n}else c?n.length===0?rt(e,o,r):Ye(e,n,o):(n&&it(e),rt(e,o));n=o}else if(t.nodeType){if(a&&t.parentNode)return n=s?[t]:t;if(Array.isArray(n)){if(s)return n=it(e,n,r,t);it(e,n,null,t)}else n==null||n===``||!e.firstChild?e.appendChild(t):e.replaceChild(t,e.firstChild);n=t}return n}function nt(e,t,n,r){let i=!1;for(let a=0,o=t.length;a<o;a++){let o=t[a],s=n&&n[e.length],c;if(!(o==null||o===!0||o===!1))if((c=typeof o)==`object`&&o.nodeType)e.push(o);else if(Array.isArray(o))i=nt(e,o,s)||i;else if(c===`function`)if(r){for(;typeof o==`function`;)o=o();i=nt(e,Array.isArray(o)?o:[o],Array.isArray(s)?s:[s])||i}else e.push(o),i=!0;else{let t=String(o);s&&s.nodeType===3&&s.data===t?e.push(s):e.push(document.createTextNode(t))}}return i}function rt(e,t,n=null){for(let r=0,i=t.length;r<i;r++)e.insertBefore(t[r],n)}function it(e,t,n,r){if(n===void 0)return e.textContent=``;let i=r||document.createTextNode(``);if(t.length){let r=!1;for(let a=t.length-1;a>=0;a--){let o=t[a];if(i!==o){let t=o.parentNode===e;!r&&!a?t?e.replaceChild(i,o):e.insertBefore(i,n):t&&o.remove()}else r=!0}}else e.insertBefore(i,n);return[i]}function at(){let e=new Set;function t(t){return e.add(t),()=>e.delete(t)}let n=!1;function r(t,r){if(n)return!(n=!1);let i={to:t,options:r,defaultPrevented:!1,preventDefault:()=>i.defaultPrevented=!0};for(let a of e)a.listener({...i,from:a.location,retry:e=>{e&&(n=!0),a.navigate(t,{...r,resolve:!1})}});return!i.defaultPrevented}return{subscribe:t,confirm:r}}var ot;function st(){(!window.history.state||window.history.state._depth==null)&&window.history.replaceState({...window.history.state,_depth:window.history.length-1},``),ot=window.history.state._depth}st();function ct(e){return{...e,_depth:window.history.state&&window.history.state._depth}}function lt(e,t){let n=!1;return()=>{let r=ot;st();let i=r==null?null:ot-r;if(n){n=!1;return}i&&t(i)?(n=!0,window.history.go(-i)):e()}}var ut=/^(?:[a-z0-9]+:)?\/\//i,dt=/^\/+|(\/)\/+$/g;const ft=`http://sr`;function pt(e,t=!1){let n=e.replace(dt,`$1`);return n?t||/^[?#]/.test(n)?n:`/`+n:``}function mt(e,t,n){if(ut.test(t))return;let r=pt(e),i=n&&pt(n),a=``;return a=!i||t.startsWith(`/`)?r:i.toLowerCase().indexOf(r.toLowerCase())===0?i:r+i,(a||`/`)+pt(t,!a)}function ht(e,t){return pt(e).replace(/\/*(\*.*)?$/g,``)+pt(t)}function gt(e){let t={};return e.searchParams.forEach((e,n)=>{n in t?Array.isArray(t[n])?t[n].push(e):t[n]=[t[n],e]:t[n]=e}),t}function _t(e,t,n){let[r,i]=e.split(`/*`,2),a=r.split(`/`).filter(Boolean),o=a.length;return e=>{let r=e.split(`/`).filter(Boolean),s=r.length-o;if(s<0||s>0&&i===void 0&&!t)return null;let c={path:o?``:`/`,params:{}},l=e=>n===void 0?void 0:n[e];for(let e=0;e<o;e++){let t=a[e],n=t[0]===`:`,i=n?r[e]:r[e].toLowerCase(),o=n?t.slice(1):t.toLowerCase();if(n&&vt(i,l(o)))c.params[o]=i;else if(n||!vt(i,o))return null;c.path+=`/${i}`}if(i){let e=s?r.slice(-s).join(`/`):``;if(vt(e,l(i)))c.params[i]=e;else return null}return c}}function vt(e,t){let n=t=>t===e;return t===void 0?!0:typeof t==`string`?n(t):typeof t==`function`?t(e):Array.isArray(t)?t.some(n):t instanceof RegExp?t.test(e):!1}function yt(e){let[t,n]=e.pattern.split(`/*`,2),r=t.split(`/`).filter(Boolean);return r.reduce((e,t)=>e+(t.startsWith(`:`)?2:3),r.length-(n===void 0?0:1))}function bt(e){let t=new Map,n=ae();return new Proxy({},{get(r,i){return t.has(i)||oe(n,()=>t.set(i,E(()=>e()[i]))),t.get(i)()},getOwnPropertyDescriptor(){return{enumerable:!0,configurable:!0}},ownKeys(){return Reflect.ownKeys(e())},has(t,n){return n in e()}})}function xt(e){let t=/(\/?\:[^\/]+)\?/.exec(e);if(!t)return[e];let n=e.slice(0,t.index),r=e.slice(t.index+t[0].length),i=[n,n+=t[1]];for(;t=/^(\/\:[^\/]+)\?/.exec(r);)i.push(n+=t[1]),r=r.slice(t[0].length);return xt(r).reduce((e,t)=>[...e,...i.map(e=>e+t)],[])}var St=100;const Ct=A(),wt=A();function Tt(e,t=``){let{component:n,preload:r,load:i,children:a,info:o}=e,s=!a||Array.isArray(a)&&!a.length,c={key:e,component:n,preload:r||i,info:o};return Dt(e.path).reduce((n,r)=>{for(let i of xt(r)){let a=ht(t,i),o=s?a:a.split(`/*`,1)[0];o=o.split(`/`).map(e=>e.startsWith(`:`)||e.startsWith(`*`)?e:encodeURIComponent(e)).join(`/`),n.push({...c,originalPath:r,pattern:o,matcher:_t(o,!s,e.matchFilters)})}return n},[])}function Et(e,t=0){return{routes:e,score:yt(e[e.length-1])*1e4-t,matcher(t){let n=[];for(let r=e.length-1;r>=0;r--){let i=e[r],a=i.matcher(t);if(!a)return null;n.unshift({...a,route:i})}return n}}}function Dt(e){return Array.isArray(e)?e:[e]}function Ot(e,t=``,n=[],r=[]){let i=Dt(e);for(let e=0,a=i.length;e<a;e++){let a=i[e];if(a&&typeof a==`object`){a.hasOwnProperty(`path`)||(a.path=``);let e=Tt(a,t);for(let t of e){n.push(t);let e=Array.isArray(a.children)&&a.children.length===0;if(a.children&&!e)Ot(a.children,t.pattern,n,r);else{let e=Et([...n],r.length);r.push(e)}n.pop()}}}return n.length?r:r.sort((e,t)=>t.score-e.score)}function kt(e,t){for(let n=0,r=e.length;n<r;n++){let r=e[n].matcher(t);if(r)return r}return[]}function At(e,t,n){let r=new URL(ft),i=E(t=>{let n=e();try{return new URL(n,r)}catch{return console.error(`Invalid path ${n}`),t}},r,{equals:(e,t)=>e.href===t.href}),a=E(()=>i().pathname),o=E(()=>i().search,!0),s=E(()=>i().hash),c=()=>``,l=ie(o,()=>gt(i()));return{get pathname(){return a()},get search(){return o()},get hash(){return s()},get state(){return t()},get key(){return c()},query:n?n(l):bt(l)}}var U;function jt(){return U}function Mt(e,t,n,r={}){let{signal:[i,a],utils:o={}}=e,s=o.parsePath||(e=>e),c=o.renderPath||(e=>e),l=o.beforeLeave||at(),u=mt(``,r.base||``);if(u===void 0)throw Error(`${u} is not a valid base path`);u&&!i().value&&a({value:u,replace:!0,scroll:!1});let[d,f]=w(!1),p,m=(e,t)=>{t.value===h()&&t.state===_()||(p===void 0&&f(!0),U=e,p=t,se(()=>{p===t&&(g(p.value),v(p.state),Ge(),x[1](e=>e.filter(e=>e.pending)))}).finally(()=>{p===t&&D(()=>{U=void 0,e===`navigate`&&k(p),f(!1),p=void 0})}))},[h,g]=w(i().value),[_,v]=w(i().state),y=At(h,_,o.queryWrapper),b=[],x=w([]),S=E(()=>typeof r.transformUrl==`function`?kt(t(),r.transformUrl(y.pathname)):kt(t(),y.pathname)),C=()=>{let e=S(),t={};for(let n=0;n<e.length;n++)Object.assign(t,e[n].params);return t},ee=o.paramsWrapper?o.paramsWrapper(C,t):bt(C),te={pattern:u,path:()=>u,outlet:()=>null,resolvePath(e){return mt(u,e)}};return T(ie(i,e=>m(`native`,e),{defer:!0})),{base:te,location:y,params:ee,isRouting:d,renderPath:c,parsePath:s,navigatorFactory:re,matches:S,beforeLeave:l,preloadRoute:ae,singleFlight:r.singleFlight===void 0?!0:r.singleFlight,submissions:x};function ne(e,t,n){O(()=>{if(typeof t==`number`){t&&(o.go?o.go(t):console.warn(`Router integration does not support relative routing`));return}let r=!t||t[0]===`?`,{replace:i,resolve:a,scroll:s,state:c}={replace:!1,resolve:!r,scroll:!0,...n},u=a?e.resolvePath(t):mt(r&&y.pathname||``,t);if(u===void 0)throw Error(`Path '${t}' is not a routable path`);if(b.length>=St)throw Error(`Too many redirects`);let d=h();(u!==d||c!==_())&&l.confirm(u,n)&&(b.push({value:d,replace:i,scroll:s,state:_()}),m(`navigate`,{value:u,state:c}))})}function re(e){return e=e||j(wt)||te,(t,n)=>ne(e,t,n)}function k(e){let t=b[0];t&&(a({...e,replace:t.replace,scroll:t.scroll}),b.length=0)}function ae(e,r){let i=kt(t(),e.pathname),a=U;for(let t in U=`preload`,i){let{route:a,params:o}=i[t];a.component&&a.component.preload&&a.component.preload();let{preload:s}=a;r&&s&&oe(n(),()=>s({params:o,location:{pathname:e.pathname,search:e.search,hash:e.hash,query:gt(e),state:null,key:``},intent:`preload`}))}U=a}}function Nt(e,t,n,r){let{base:i,location:a,params:o}=e,{pattern:s,component:c,preload:l}=r().route,u=E(()=>r().path);c&&c.preload&&c.preload();let d=l?l({params:o,location:a,intent:U||`initial`}):void 0;return{parent:t,pattern:s,path:u,outlet:()=>c?P(c,{params:o,location:a,data:d,get children(){return n()}}):n(),resolvePath(e){return mt(i.path(),e,u())}}}const Pt=e=>t=>{let{base:n}=t,r=de(()=>t.children),i=E(()=>Ot(r(),t.base||``)),a,o=Mt(e,i,()=>a,{base:n,singleFlight:t.singleFlight,transformUrl:t.transformUrl});return e.create&&e.create(o),P(Ct.Provider,{value:o,get children(){return P(Ft,{routerState:o,get root(){return t.root},get preload(){return t.rootPreload||t.rootLoad},get children(){return[Je(()=>(a=ae())&&null),P(It,{routerState:o,get branches(){return i()}})]}})}})};function Ft(e){let t=e.routerState.location,n=e.routerState.params,r=E(()=>e.preload&&O(()=>{e.preload({params:n,location:t,intent:jt()||`initial`})}));return P(F,{get when(){return e.root},keyed:!0,get fallback(){return e.children},children:i=>P(i,{params:n,location:t,get data(){return r()},get children(){return e.children}})})}function It(e){let t=[],n,r=E(ie(e.routerState.matches,(i,a,o)=>{let s=a&&i.length===a.length,c=[];for(let n=0,l=i.length;n<l;n++){let l=a&&a[n],u=i[n];o&&l&&u.route.key===l.route.key?c[n]=o[n]:(s=!1,t[n]&&t[n](),C(i=>{t[n]=i,c[n]=Nt(e.routerState,c[n-1]||e.routerState.base,Lt(()=>r()[n+1]),()=>{let t=e.routerState.matches();return t[n]??t[0]})}))}return t.splice(i.length).forEach(e=>e()),o&&s?o:(n=c[0],c)}));return Lt(()=>r()&&n)()}var Lt=e=>()=>P(F,{get when(){return e()},keyed:!0,children:e=>P(wt.Provider,{value:e,get children(){return e.outlet()}})});const Rt=e=>{let t=de(()=>e.children);return Be(e,{get children(){return t()}})};function zt([e,t],n,r){return[n?()=>n(e()):e,r?e=>t(r(e)):t]}function Bt(t){let n=!1,r=e=>typeof e==`string`?{value:e}:e,i=zt(w(r(t.get()),{equals:(e,t)=>e.value===t.value&&e.state===t.state}),void 0,r=>(!n&&t.set(r),e.registry&&!e.done&&(e.done=!0),r));return t.init&&k(t.init((e=t.get())=>{n=!0,i[1](r(e)),n=!1})),Pt({signal:i,create:t.create,utils:t.utils})}function Vt(e,t,n){return e.addEventListener(t,n),()=>e.removeEventListener(t,n)}function Ht(e,t){let n=e&&document.getElementById(e);n?n.scrollIntoView():t&&window.scrollTo(0,0)}const Ut=new Map;function Wt(e=!0,t=!1,n=`/_server`,r){return i=>{let a=i.base.path(),o=i.navigatorFactory(i.base),s,c;function l(e){return e.namespaceURI===`http://www.w3.org/2000/svg`}function u(e){if(e.defaultPrevented||e.button!==0||e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)return;let n=e.composedPath().find(e=>e instanceof Node&&e.nodeName.toUpperCase()===`A`);if(!n||t&&!n.hasAttribute(`link`))return;let r=l(n),i=r?n.href.baseVal:n.href;if((r?n.target.baseVal:n.target)||!i&&!n.hasAttribute(`state`))return;let o=(n.getAttribute(`rel`)||``).split(/\s+/);if(n.hasAttribute(`download`)||o&&o.includes(`external`))return;let s=r?new URL(i,document.baseURI):new URL(i);if(!(s.origin!==window.location.origin||a&&s.pathname&&!s.pathname.toLowerCase().startsWith(a.toLowerCase())))return[n,s]}function d(e){let t=u(e);if(!t)return;let[n,r]=t,a=i.parsePath(r.pathname+r.search+r.hash),s=n.getAttribute(`state`);e.preventDefault(),o(a,{resolve:!1,replace:n.hasAttribute(`replace`),scroll:!n.hasAttribute(`noscroll`),state:s?JSON.parse(s):void 0})}function f(e){let t=u(e);if(!t)return;let[n,a]=t;r&&(a.pathname=r(a.pathname)),i.preloadRoute(a,n.getAttribute(`preload`)!==`false`)}function p(e){clearTimeout(s);let t=u(e);if(!t)return c=null;let[n,a]=t;c!==n&&(r&&(a.pathname=r(a.pathname)),s=setTimeout(()=>{i.preloadRoute(a,n.getAttribute(`preload`)!==`false`),c=n},20))}function m(e){if(e.defaultPrevented)return;let t=e.submitter&&e.submitter.hasAttribute(`formaction`)?e.submitter.getAttribute(`formaction`):e.target.getAttribute(`action`);if(!t)return;if(!t.startsWith(`https://action/`)){let e=new URL(t,ft);if(t=i.parsePath(e.pathname+e.search),!t.startsWith(n))return}if(e.target.method.toUpperCase()!==`POST`)throw Error(`Only POST forms are supported for Actions`);let r=Ut.get(t);if(r){e.preventDefault();let t=new FormData(e.target,e.submitter);r.call({r:i,f:e.target},e.target.enctype===`multipart/form-data`?t:new URLSearchParams(t))}}Qe([`click`,`submit`]),document.addEventListener(`click`,d),e&&(document.addEventListener(`mousemove`,p,{passive:!0}),document.addEventListener(`focusin`,f,{passive:!0}),document.addEventListener(`touchstart`,f,{passive:!0})),document.addEventListener(`submit`,m),k(()=>{document.removeEventListener(`click`,d),e&&(document.removeEventListener(`mousemove`,p),document.removeEventListener(`focusin`,f),document.removeEventListener(`touchstart`,f)),document.removeEventListener(`submit`,m)})}}function Gt(e){let t=()=>{let e=window.location.pathname.replace(/^\/+/,`/`)+window.location.search,t=window.history.state&&window.history.state._depth&&Object.keys(window.history.state).length===1?void 0:window.history.state;return{value:e+window.location.hash,state:t}},n=at();return Bt({get:t,set({value:e,replace:t,scroll:n,state:r}){t?window.history.replaceState(ct(r),``,e):window.history.pushState(r,``,e),Ht(decodeURIComponent(window.location.hash.slice(1)),n),st()},init:e=>Vt(window,`popstate`,lt(e,e=>{if(e)return!n.confirm(e);{let e=t();return!n.confirm(e.value,{state:e.state})}})),create:Wt(e.preload,e.explicitLinks,e.actionBase,e.transformUrl),utils:{go:e=>window.history.go(e),beforeLeave:n}})(e)}const W=e=>new DOMParser().parseFromString(e,`image/svg+xml`).querySelector(`svg`);function Kt(e){return Object.fromEntries(e)}function qt(e){return e>127?!1:e>=48&&e<=57}function Jt(e){return e>127?!1:e>=65&&e<=90||e>=97&&e<=122}function Yt(e){return Jt(e)||qt(e)}function Xt(e){if(e.constructor.name!==`String`)return!1;let t=e[Symbol.iterator](),n=t.next();for(;!n.done&&Yt(n.value.charCodeAt(0));)n=t.next();return n.done??!1}function Zt(e){if(e.constructor.name!==`String`)return!1;let t=e[Symbol.iterator](),n=t.next();for(;!n.done&&n.value.charCodeAt(0)<=127;)n=t.next();return n.done??!1}function Qt(e){return e===void 0?``:e.constructor.name==`String`?` `+e:` `+e.join(` `)}function $t(){return w({time:0,trigger:!1})}function en(e,t){return(t<=0||t==null||t.constructor.name!==`Number`)&&(t=700),n=>e(e=>{let r=n.timeStamp;return e.time===0?{time:r,trigger:!1}:r-e.time<t?{time:0,trigger:!0}:{time:r,trigger:!1}})}var[tn,nn]=w({name:void 0,email:void 0,access_token:void 0,data:{},configs:{}}),rn=A({user:tn,re_user:nn});function G(){return j(rn)}function an(e){return e.name===``}function on(e){return e.name===void 0}function sn(e){return e.name===void 0?!1:e.name.constructor.name===`String`?e.name.length!==0:!0}var[cn,ln]=w({}),un=A({eph:cn,re_eph:ln});function dn(){return j(un)}var[fn,pn]=w({}),mn=A({colors:fn,re_colors:pn});function hn(){return j(mn)}function gn(e,...t){e(e=>(t.forEach(t=>e[t.name]=t.scheme),structuredClone(e)))}function _n(e){let t=document.documentElement.style;Object.entries(e).forEach(([e,n])=>t.setProperty(`--`+e,n))}var vn={Box:`_8LzwnW_Box`,CheckBox:`_8LzwnW_CheckBox`,Content:`_8LzwnW_Content`,Postman:`_8LzwnW_Postman`,Text:`_8LzwnW_Text`,TickMark:`_8LzwnW_TickMark`},yn=L(`<input data-type=bool type=hidden>`),bn=L(`<span>`),xn=L(`<legend>`),Sn=L(`<div><div style=background:transparent><div>`),Cn={width:.6,height:.6,state:!1,tick:``,accent:`var(--blue)`};const wn=e=>{let t=Be(Cn,e),n=()=>t.state,r=()=>t.accent,i=()=>t.tick,a=()=>t.width,o=()=>t.height,s=()=>t.legend,c=()=>t.name,[l,u]=w(n()),d=()=>u(e=>!l());return(()=>{var e=Sn(),t=e.firstChild,n=t.firstChild;return B(e,`click`,d),H(e,P(F,{get when(){return c()!==void 0},get children(){var e=yn();return T(t=>{var n=vn.Postman,r=c();return n!==t.e&&z(e,t.e=n),r!==t.t&&R(e,`name`,t.t=r),t},{e:void 0,t:void 0}),T(()=>e.value=l()),e}}),t),H(n,P(F,{get when(){return i()!==``},get children(){var e=bn();return H(e,i),T(()=>z(e,vn.TickMark)),e}})),H(e,P(F,{get when(){return s()!==void 0},get children(){var e=xn();return H(e,s),T(t=>{var n=vn.Text,i=r();return n!==t.e&&z(e,t.e=n),i!==t.t&&V(e,`color`,t.t=i),t},{e:void 0,t:void 0}),e}}),null),T(i=>{var s=vn.CheckBox,c=vn.Box,u=`0.11em solid ${r()}`,d=`${a()+.19}em`,f=`${o()+.19}em`,p=l(),m=vn.Content,h=r(),g=`${a()}em`,_=`${o()}em`;return s!==i.e&&z(e,i.e=s),c!==i.t&&z(t,i.t=c),u!==i.a&&V(t,`border`,i.a=u),d!==i.o&&V(t,`width`,i.o=d),f!==i.i&&V(t,`height`,i.i=f),p!==i.n&&R(t,`box-state`,i.n=p),m!==i.s&&z(n,i.s=m),h!==i.h&&V(n,`background`,i.h=h),g!==i.r&&V(n,`width`,i.r=g),_!==i.d&&V(n,`height`,i.d=_),i},{e:void 0,t:void 0,a:void 0,o:void 0,i:void 0,n:void 0,s:void 0,h:void 0,r:void 0,d:void 0}),e})()};var Tn={Actuator:`kgnL6q_Actuator`,Logo:`kgnL6q_Logo`},En=`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!-- Created with Inkscape (http://www.inkscape.org/) -->

<svg
   width="389.60306mm"
   height="172.83472mm"
   viewBox="0 0 389.60305 172.83472"
   version="1.1"
   id="svg1"
   sodipodi:docname="hanabi.svg"
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
     inkscape:zoom="1.7888896"
     inkscape:cx="1189.8443"
     inkscape:cy="491.64577"
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
         style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:18.6667px;line-height:1.3;font-family:carlito;-inkscape-font-specification:carlito;text-align:center;writing-mode:lr-tb;direction:ltr;text-anchor:middle;white-space:pre;shape-inside:url(#rect1);display:inline;fill:#bb9c66;fill-opacity:1;fill-rule:evenodd;stroke-width:15.1181;stroke-linecap:round;stroke-linejoin:bevel;stroke-dasharray:none"
         d="M 1248.2969 424.04348 C 1247.7318 424.04348 1247.2487 424.2136 1246.8477 424.55388 C 1246.4466 424.89416 1246.1094 425.35903 1245.836 425.94844 L 1245.7266 424.63599 C 1245.7144 424.478 1245.6719 424.36552 1245.5989 424.29868 C 1245.5321 424.23184 1245.4136 424.1985 1245.2435 424.1985 L 1244.3229 424.1985 L 1244.3229 433.1125 L 1245.9271 433.1125 L 1245.9271 427.47974 C 1246.0364 427.18199 1246.1549 426.91767 1246.2825 426.68677 C 1246.4101 426.45587 1246.556 426.26134 1246.72 426.10336 C 1246.8902 425.93929 1247.0786 425.81778 1247.2852 425.73879 C 1247.3961 425.6944 1247.5153 425.66159 1247.6428 425.64036 L 1247.63 425.61795 C 1248.1121 425.15375 1248.6298 424.80864 1249.1833 424.58249 C 1249.2035 424.57409 1249.2238 424.5658 1249.2442 424.5577 L 1249.2721 424.29868 C 1249.1384 424.20754 1248.9896 424.14377 1248.8255 424.10731 C 1248.6615 424.06477 1248.4852 424.04348 1248.2969 424.04348 z M 1249.2442 424.5577 L 1249.1446 425.48359 C 1249.1263 425.6355 1249.0413 425.71152 1248.8894 425.71152 C 1248.8043 425.71152 1248.6827 425.69625 1248.5247 425.66587 C 1248.3728 425.62941 1248.2027 425.61124 1248.0143 425.61124 C 1247.8835 425.61124 1247.7597 425.6209 1247.6428 425.64036 L 1247.9157 426.11781 C 1247.9633 426.20113 1248.0257 426.26967 1248.1031 426.32323 C 1248.1805 426.3768 1248.2728 426.40348 1248.3799 426.40348 C 1248.5168 426.40348 1248.6506 426.35587 1248.7815 426.26065 C 1248.9184 426.16543 1249.0792 426.06131 1249.2636 425.94823 C 1249.4481 425.83516 1249.6654 425.73104 1249.9153 425.63582 C 1250.1712 425.5406 1250.4836 425.49298 1250.8526 425.49298 C 1251.406 425.49298 1251.8257 425.66554 1252.1113 426.01072 C 1252.4029 426.34994 1252.5487 426.85882 1252.5487 427.53726 L 1252.5487 428.20671 C 1251.5608 428.23051 1250.7276 428.32281 1250.0492 428.48349 C 1249.3707 428.63823 1248.8203 428.84061 1248.3978 429.09056 C 1247.9752 429.34051 1247.6687 429.62609 1247.4783 429.94746 C 1247.2938 430.26287 1247.2015 430.59323 1247.2015 430.93841 C 1247.2015 431.33119 1247.264 431.67337 1247.3889 431.96499 C 1247.5199 432.25065 1247.6955 432.49164 1247.9157 432.68803 C 1248.1418 432.87847 1248.4007 433.02131 1248.6923 433.11653 C 1248.9899 433.2058 1249.3083 433.25048 1249.6475 433.25048 C 1249.9748 433.25048 1250.2754 433.22066 1250.5491 433.16115 C 1250.8229 433.10759 1251.0788 433.02429 1251.3168 432.91122 C 1251.5549 432.79814 1251.781 432.66127 1251.9952 432.50058 C 1252.2154 432.33395 1252.4386 432.14653 1252.6648 431.93824 L 1252.8611 432.75052 C 1252.8909 432.8993 1252.9475 432.99756 1253.0308 433.04517 C 1253.1141 433.09278 1253.2331 433.11653 1253.3878 433.11653 L 1254.0841 433.11653 L 1254.0841 427.53726 C 1254.0841 427.04331 1254.0157 426.59397 1253.8788 426.18928 C 1253.7479 425.7846 1253.5545 425.43645 1253.2986 425.14484 C 1253.0427 424.85322 1252.7243 424.63002 1252.3434 424.47529 C 1251.9625 424.3146 1251.528 424.23434 1251.04 424.23434 C 1250.3861 424.23434 1249.7876 424.3421 1249.2442 424.5577 z M 1252.5487 429.18867 L 1252.5487 430.9919 C 1252.3761 431.17044 1252.2005 431.3341 1252.022 431.48289 C 1251.8494 431.62572 1251.6649 431.74773 1251.4685 431.8489 C 1251.2721 431.94412 1251.0639 432.01852 1250.8437 432.07208 C 1250.6235 432.12565 1250.3825 432.15243 1250.1206 432.15243 C 1249.9243 432.15243 1249.7398 432.12868 1249.5672 432.08107 C 1249.3946 432.02751 1249.2458 431.95007 1249.1208 431.8489 C 1248.9958 431.74178 1248.8946 431.60794 1248.8173 431.44725 C 1248.7459 431.28062 1248.7102 431.0842 1248.7102 430.85806 C 1248.7102 430.62001 1248.7786 430.4058 1248.9155 430.21536 C 1249.0524 430.01897 1249.2725 429.84934 1249.5761 429.70651 C 1249.8855 429.56368 1250.2842 429.45056 1250.7722 429.36724 C 1251.2602 429.27797 1251.8524 429.21843 1252.5487 429.18867 z "
         transform="matrix(3.1521213,0,0,3.1521213,-3781.5669,-1197.9476)" />
      <text
         xml:space="preserve"
         transform="matrix(0.16667847,0,0,0.16667847,-38.785971,68.694678)"
         id="text4"
         style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:18.6667px;line-height:1.3;font-family:carlito;-inkscape-font-specification:carlito;text-align:center;writing-mode:lr-tb;direction:ltr;white-space:pre;shape-inside:url(#rect4);display:inline;fill:#ab1243;fill-opacity:1;fill-rule:evenodd;stroke-width:15.1181;stroke-linecap:round;stroke-linejoin:bevel;stroke-dasharray:none" />
      <path
         id="path8"
         style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:18.6667px;line-height:1.3;font-family:carlito;-inkscape-font-specification:carlito;text-align:center;writing-mode:lr-tb;direction:ltr;text-anchor:middle;white-space:pre;shape-inside:url(#rect1);display:inline;fill:#649279;fill-opacity:1;fill-rule:evenodd;stroke-width:15.1181;stroke-linecap:round;stroke-linejoin:bevel;stroke-dasharray:none"
         d="M 1248.2969 424.04348 C 1247.7318 424.04348 1247.2487 424.2136 1246.8477 424.55388 C 1246.4466 424.89416 1246.1094 425.35903 1245.836 425.94844 L 1245.7266 424.63599 C 1245.7144 424.478 1245.6719 424.36552 1245.5989 424.29868 C 1245.5321 424.23184 1245.4136 424.1985 1245.2435 424.1985 L 1244.3229 424.1985 L 1244.3229 433.1125 L 1245.9271 433.1125 L 1245.9271 427.47974 C 1246.0364 427.18199 1246.1549 426.91767 1246.2825 426.68677 C 1246.4101 426.45587 1246.556 426.26134 1246.72 426.10336 C 1246.8902 425.93929 1247.0786 425.81778 1247.2852 425.73879 C 1247.3961 425.6944 1247.5153 425.66159 1247.6428 425.64036 L 1247.63 425.61795 C 1248.1121 425.15375 1248.6298 424.80864 1249.1833 424.58249 C 1249.2035 424.57409 1249.2238 424.5658 1249.2442 424.5577 L 1249.2721 424.29868 C 1249.1384 424.20754 1248.9896 424.14377 1248.8255 424.10731 C 1248.6615 424.06477 1248.4852 424.04348 1248.2969 424.04348 z M 1249.2442 424.5577 L 1249.1446 425.48359 C 1249.1263 425.6355 1249.0413 425.71152 1248.8894 425.71152 C 1248.8043 425.71152 1248.6827 425.69625 1248.5247 425.66587 C 1248.3728 425.62941 1248.2027 425.61124 1248.0143 425.61124 C 1247.8835 425.61124 1247.7597 425.6209 1247.6428 425.64036 L 1247.9157 426.11781 C 1247.9633 426.20113 1248.0257 426.26967 1248.1031 426.32323 C 1248.1805 426.3768 1248.2728 426.40348 1248.3799 426.40348 C 1248.5168 426.40348 1248.6506 426.35587 1248.7815 426.26065 C 1248.9184 426.16543 1249.0792 426.06131 1249.2636 425.94823 C 1249.4481 425.83516 1249.6654 425.73104 1249.9153 425.63582 C 1250.1712 425.5406 1250.4836 425.49298 1250.8526 425.49298 C 1251.406 425.49298 1251.8257 425.66554 1252.1113 426.01072 C 1252.4029 426.34994 1252.5487 426.85882 1252.5487 427.53726 L 1252.5487 428.20671 C 1251.5608 428.23051 1250.7276 428.32281 1250.0492 428.48349 C 1249.3707 428.63823 1248.8203 428.84061 1248.3978 429.09056 C 1247.9752 429.34051 1247.6687 429.62609 1247.4783 429.94746 C 1247.2938 430.26287 1247.2015 430.59323 1247.2015 430.93841 C 1247.2015 431.33119 1247.264 431.67337 1247.3889 431.96499 C 1247.5199 432.25065 1247.6955 432.49164 1247.9157 432.68803 C 1248.1418 432.87847 1248.4007 433.02131 1248.6923 433.11653 C 1248.9899 433.2058 1249.3083 433.25048 1249.6475 433.25048 C 1249.9748 433.25048 1250.2754 433.22066 1250.5491 433.16115 C 1250.8229 433.10759 1251.0788 433.02429 1251.3168 432.91122 C 1251.5549 432.79814 1251.781 432.66127 1251.9952 432.50058 C 1252.2154 432.33395 1252.4386 432.14653 1252.6648 431.93824 L 1252.8611 432.75052 C 1252.8909 432.8993 1252.9475 432.99756 1253.0308 433.04517 C 1253.1141 433.09278 1253.2331 433.11653 1253.3878 433.11653 L 1254.0841 433.11653 L 1254.0841 427.53726 C 1254.0841 427.04331 1254.0157 426.59397 1253.8788 426.18928 C 1253.7479 425.7846 1253.5545 425.43645 1253.2986 425.14484 C 1253.0427 424.85322 1252.7243 424.63002 1252.3434 424.47529 C 1251.9625 424.3146 1251.528 424.23434 1251.04 424.23434 C 1250.3861 424.23434 1249.7876 424.3421 1249.2442 424.5577 z M 1252.5487 429.18867 L 1252.5487 430.9919 C 1252.3761 431.17044 1252.2005 431.3341 1252.022 431.48289 C 1251.8494 431.62572 1251.6649 431.74773 1251.4685 431.8489 C 1251.2721 431.94412 1251.0639 432.01852 1250.8437 432.07208 C 1250.6235 432.12565 1250.3825 432.15243 1250.1206 432.15243 C 1249.9243 432.15243 1249.7398 432.12868 1249.5672 432.08107 C 1249.3946 432.02751 1249.2458 431.95007 1249.1208 431.8489 C 1248.9958 431.74178 1248.8946 431.60794 1248.8173 431.44725 C 1248.7459 431.28062 1248.7102 431.0842 1248.7102 430.85806 C 1248.7102 430.62001 1248.7786 430.4058 1248.9155 430.21536 C 1249.0524 430.01897 1249.2725 429.84934 1249.5761 429.70651 C 1249.8855 429.56368 1250.2842 429.45056 1250.7722 429.36724 C 1251.2602 429.27797 1251.8524 429.21843 1252.5487 429.18867 z "
         transform="matrix(3.1521213,0,0,3.1521213,-3781.5669,-1197.9476)" />
    </g>
  </g>
</svg>
`,Dn=L(`<div><a href=/>`);const On=()=>{let e=W(En);return(()=>{var t=Dn(),n=t.firstChild;return H(n,e),T(e=>{var r=Tn.Logo,i=Tn.Actuator;return r!==e.e&&z(t,e.e=r),i!==e.t&&z(n,e.t=i),e},{e:void 0,t:void 0}),t})()};var kn={Splash:`B8ymxa_Splash`},An=L(`<div>`);const jn=()=>{let e=W(En);return(()=>{var t=An();return H(t,e),T(()=>z(t,kn.Splash)),t})()};var Mn={PasswordField:`VqKU0q_PasswordField`,PswSwitch:`VqKU0q_PswSwitch`},Nn={InputField:`eWZJKG_InputField`,InputLegend:`eWZJKG_InputLegend`,TextField:`eWZJKG_TextField`},Pn=L(`<div><legend></legend><input>`);function Fn(e){return async t=>{if(t.length===0)return!0;let n=await fetch(`/auth/field?name=${e()}&value=${t}`);return n.ok?await n.text()!==`false`:!1}}const In=e=>{let t=()=>e.ty??`str`,n=()=>e.name,r=()=>e.type,i=()=>e.mandatory??!1,a=()=>o().blank_mandatory?()=>e.legend+Ln:o().bad_value?()=>e.legend+Rn:()=>e.legend,[o,s]=w({lights_up:!1,blank_mandatory:!1,bad_value:!1}),[c,l]=w(null),[u]=re(c,Fn(n),{initialValue:!0}),d=e=>s(t=>{let n=e.target;if(n.value===c())return t;if(n.value.length===0)return l(``),t;l(n.value);let r=c().length===0;return console.log(u()),{lights_up:!r,blank_mandatory:i()&&r,bad_value:!r&&!u()}}),f=()=>s(e=>({lights_up:!0,blank_mandatory:!1,bad_value:!1})),p=e=>s(t=>{let n=e.target;l(n.value);let r=c().length===0;return{lights_up:!r,blank_mandatory:i()&&r,bad_value:!r&&!u()}}),m=e=>s(t=>(t.light_up||e.target.nextElementSibling.focus(),{lights_up:!0,blank_mandatory:!1,bad_value:!1}));return(()=>{var e=Pn(),s=e.firstChild,c=s.nextSibling;return B(s,`click`,m),H(s,a),B(c,`input`,d),B(c,`blur`,p),B(c,`focus`,f),T(a=>{var l=Nn.TextField,u=o().lights_up,d=o().blank_mandatory,f=o().bad_value,p=Nn.InputLegend,m=r(),h=t(),g=`${Nn.InputField}${i()?` mandatory`:``}`,_=n();return l!==a.e&&z(e,a.e=l),u!==a.t&&R(e,`lights-up`,a.t=u),d!==a.a&&R(e,`blank-mandatory`,a.a=d),f!==a.o&&R(e,`bad-value`,a.o=f),p!==a.i&&z(s,a.i=p),m!==a.n&&R(c,`type`,a.n=m),h!==a.s&&R(c,`data-type`,a.s=h),g!==a.h&&z(c,a.h=g),_!==a.r&&R(c,`name`,a.r=_),a},{e:void 0,t:void 0,a:void 0,o:void 0,i:void 0,n:void 0,s:void 0,h:void 0,r:void 0}),e})()};var Ln=` (this field is mandatory)`,Rn=` (this value is already taken)`,zn=`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
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
`,Bn=`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
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
`,Vn=L(`<div><button type=button>`);const Hn=e=>{let t=()=>e.name,n=()=>e.mandatory,r=W(zn),i=W(Bn),[a,o]=w({type:`password`,svg:i}),s=()=>o(e=>e.type==`password`?{type:`text`,svg:r}:{type:`password`,svg:i}),c=()=>e.legend;return(()=>{var e=Vn(),r=e.firstChild;return H(e,P(In,{get type(){return a().type},get name(){return t()},get legend(){return c()??`Password`},get mandatory(){return n()}}),r),B(r,`click`,s),H(r,()=>a().svg),T(t=>{var n=Mn.PasswordField,i=Mn.PswSwitch;return n!==t.e&&z(e,t.e=n),i!==t.t&&z(r,t.t=i),t},{e:void 0,t:void 0}),e})()};var Un={TextLine:`TfGcMa_TextLine`},Wn=L(`<span>`);const Gn=e=>{let t=()=>e.children,n=()=>e.cls;return(()=>{var e=Wn();return H(e,t),T(()=>z(e,` ${Un.TextLine} ${Qt(n())}`)),e})()};var Kn={Actuator:`FAqbNW_Actuator`,Button:`FAqbNW_Button`},qn=L(`<button>`),Jn=L(`<a>`);const K=e=>{let t=()=>e.children,n=()=>e.link,r=()=>e.class,i=()=>e.call,a=()=>e.extra??{},o=Yn(t(),r(),i(),n());return Xn(o,a()),o};function Yn(e,t,n,r){return r===void 0?(()=>{var r=qn();return B(r,`mousedown`,n),H(r,e),T(()=>z(r,`${Kn.Button} ${Qt(t)}`)),r})():(()=>{var i=Jn();return B(i,`mousedown`,n),R(i,`href`,r),H(i,e),T(()=>z(i,`${Kn.Actuator} ${Qt(t)}`)),i})()}function Xn(e,t){for(let[n,r]of Object.entries(t))e.setAttribute(n,r)}var Zn={Separator:`Mp3E_W_Separator`},Qn=L(`<span>`);const $n=()=>{let[e,t]=w(!1);return document.body.addEventListener(`mousemove`,e=>t(t=>{let n=document.querySelector(`.${Zn.Separator}`);if(n==null)return t;let r=n.parentElement.getBoundingClientRect(),i=e.clientX,a=e.clientY;return i>=r.left&&i<=r.right&&a<=r.bottom&&a>=r.top})),(()=>{var t=Qn();return T(n=>{var r=Zn.Separator,i=e();return r!==n.e&&z(t,n.e=r),i!==n.t&&R(t,`active`,n.t=i),n},{e:void 0,t:void 0}),t})()};var er={WildContent:`M1dyaW_WildContent`,WildText:`M1dyaW_WildText`},tr=L(`<div><span>`);const nr=e=>{let t=()=>e.text,n=()=>e.class;return(()=>{var e=tr(),r=e.firstChild;return H(r,t),T(t=>{var i=`${er.WildText} ${Qt(n())}`,a=er.WildContent;return i!==t.e&&z(e,t.e=i),a!==t.t&&z(r,t.t=a),t},{e:void 0,t:void 0}),e})()},rr=e=>{let t=()=>e.children,{colors:n,re_colors:r}=hn(),i=()=>e.scheme??or()??Object.keys(n())[0];return ir(n(),i())&&(_n(n()[i()]),ar(i())),t()};function ir(e,t){return Object.keys(e).includes(t)}function ar(e){localStorage.setItem(`colorscheme`,e)}function or(){return localStorage.getItem(`colorscheme`)}var sr={};const cr=e=>{let{eph:t,re_eph:n}=dn(),r=()=>e.children,i=()=>e.show,a=()=>e.events===void 0?[]:e.events.constructor.name===`String`?[e.events]:e.events,o=()=>e.hash;return n(e=>(e[o()]={events:a(),show:i()},structuredClone(e))),P(F,{get when(){return t()[o()].show},get children(){return r()}})};function lr(e){let t=`${crypto.randomUUID()}`;for(;Object.hasOwn(e,t);)t=`${crypto.randomUUID()}`;return t}function ur(e,t,n,r){return e[t]={show:r,events:n},e}function dr(e,t){let{eph:n,re_eph:r}=dn(),i=lr(n());return r(ur(n(),i,e,t)),[i,()=>r(e=>(e[i].show=!e[i].show,structuredClone(e)))]}var q={ColorCode:`rHQhQW_ColorCode`,ColorPicker:`rHQhQW_ColorPicker`,ColorSlider:`rHQhQW_ColorSlider`,OpacitySlider:`rHQhQW_OpacitySlider`,Picker:`rHQhQW_Picker`,PickerButton:`rHQhQW_PickerButton`},fr=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M136.5 77.7l37 67L32 285.7 216.4 464l152.4-148.6 54.4-11.4L166.4 48l-29.9 29.7zm184 208H114.9l102.8-102.3 102.8 102.3zM423.3 304s-56.7 61.5-56.7 92.1c0 30.7 25.4 55.5 56.7 55.5 31.3 0 56.7-24.9 56.7-55.5S423.3 304 423.3 304z"/></svg>`,pr=L(`<div>`),mr=L(`<canvas>color palette`),hr=L(`<canvas>color slider`),gr=L(`<canvas>opacity slider`),_r=L(`<div><input type=text>`);const vr=e=>{let t=W(fr),n=()=>e.width??200,r=()=>e.height??200,i=()=>e.show??!1,a=()=>e.events===void 0?[]:e.events.constructor.name===`String`?[e.events]:e.events,[o,s]=dr(a(),i()),c=()=>e.html,l=()=>e.prop;return(()=>{var e=pr();return H(e,P(K,{get class(){return q.PickerButton},call:s,extra:{"ephem-hash":o},children:t}),null),H(e,P(cr,{get events(){return a()},get show(){return i()},hash:o,get children(){return P(yr,{get width(){return n()},get height(){return r()},get html(){return c()},get prop(){return l()}})}}),null),T(()=>z(e,q.Picker)),e})()},yr=e=>{let t=()=>e.width??200,n=()=>e.height??200,r=()=>e.html,i=()=>e.prop,a=new Pr((()=>Mr(r(),e.prop))()).to_rgba();console.log(`;;`,a);let[o,s]=w(a),c=(()=>{var e=mr();return T(r=>{var i=q.Picker,a=t(),o=n(),s=`${t()}px`,c=`${n()}px`;return i!==r.e&&z(e,r.e=i),a!==r.t&&R(e,`width`,r.t=a),o!==r.a&&R(e,`height`,r.a=o),s!==r.o&&V(e,`width`,r.o=s),c!==r.i&&V(e,`height`,r.i=c),r},{e:void 0,t:void 0,a:void 0,o:void 0,i:void 0}),e})();Sr(c,t(),n(),o()),c.addEventListener(`click`,e=>s(a=>{let o=br(e),s=[o[0],o[1],o[2],a[3]];return Dr(u,t(),n(),s),J(r(),i(),Y(s)),s}));let l=(()=>{var e=hr();return T(r=>{var i=q.ColorSlider,a=t(),o=n()/20,s=`${t()}px`,c=`${n()/20}px`;return i!==r.e&&z(e,r.e=i),a!==r.t&&R(e,`width`,r.t=a),o!==r.a&&R(e,`height`,r.a=o),s!==r.o&&V(e,`width`,r.o=s),c!==r.i&&V(e,`height`,r.i=c),r},{e:void 0,t:void 0,a:void 0,o:void 0,i:void 0}),e})();Tr(l,t(),n()),l.addEventListener(`click`,e=>s(a=>{let o=br(e),s=[o[0],o[1],o[2],a[3]];return Sr(c,t(),n(),s),Dr(u,t(),n(),s),J(r(),i(),Y(s)),s}));let u=(()=>{var e=gr();return T(r=>{var i=q.OpacitySlider,a=t(),o=n()/20,s=`${t()}px`,c=`${n()/20}px`;return i!==r.e&&z(e,r.e=i),a!==r.t&&R(e,`width`,r.t=a),o!==r.a&&R(e,`height`,r.a=o),s!==r.o&&V(e,`width`,r.o=s),c!==r.i&&V(e,`height`,r.i=c),r},{e:void 0,t:void 0,a:void 0,o:void 0,i:void 0}),e})();Dr(u,t(),n(),o()),u.addEventListener(`click`,e=>s(t=>{let n=xr(e),a=[t[0],t[1],t[2],n];return J(r(),i(),Y(a)),a}));let[d,f]=w(!1),p=e=>f(t=>!!e.type.includes(`down`)),m=e=>f(e=>!1);[c,l,u].forEach(e=>{e.addEventListener(`mousedown`,p),e.addEventListener(`mouseup`,p),e.addEventListener(`mouseleave`,m)}),c.addEventListener(`mousemove`,e=>s(a=>{if(!d())return a;let o=br(e),s=[o[0],o[1],o[2],a[3]];return Dr(u,t(),n(),s),J(r(),i(),Y(s)),s})),l.addEventListener(`mousemove`,e=>s(a=>{if(!d())return a;let o=br(e),s=[o[0],o[1],o[2],a[3]];return Sr(c,t(),n(),s),Dr(u,t(),n(),s),J(r(),i(),Y(s)),s})),u.addEventListener(`mousemove`,e=>s(t=>{if(!d())return t;let n=xr(e),a=[t[0],t[1],t[2],n];return J(r(),i(),Y(a)),a}));let h=e=>s(a=>{let o=e.target.value;if(Number.isNaN(Number(X+o.slice(1))))return a;let s=Ar(Mr(r(),o));return Sr(c,t(),n(),s),Dr(u,t(),n(),s),J(r(),i(),Y(s)),s});return(()=>{var e=_r(),t=e.firstChild;return H(e,c,t),H(e,l,t),H(e,u,t),B(t,`change`,h),B(t,`click`,kr),T(n=>{var r=q.ColorPicker,i=Y(o()),a=q.ColorCode,s=Y(jr(o())),c=Y(o());return r!==n.e&&z(e,n.e=r),i!==n.t&&R(e,`color-value`,n.t=i),a!==n.a&&z(t,n.a=a),s!==n.o&&V(t,`background`,n.o=s),c!==n.i&&V(t,`color`,n.i=c),n},{e:void 0,t:void 0,a:void 0,o:void 0,i:void 0}),T(()=>t.value=Y(o())),e})()};function br(e){let t=e.target.getContext(`2d`),n=e.offsetX,r=e.offsetY;return t.getImageData(n,r,1,1).data.slice(0,3)}function xr(e){let t=e.target.getContext(`2d`),n=e.offsetX,r=e.offsetY;return t.getImageData(n,r,1,1).data[3]}function Sr(e,t,n,r){let i=e.getContext(`2d`);i.clearRect(0,0,e.width,e.height);let a=255/t,o=255/n;for(let e=0;e<=n;e++)for(let n=0;n<=t;n++)i.fillStyle=wr(n*a,e*o,r),i.fillRect(n,e,1,1)}function Cr(e,t,n){let r=255;return r+=e,r-=t,r-=n,r}function wr(e,t,n){return`rgb(${Cr(n[0],e,t)} ${Cr(n[1],e,t)} ${Cr(n[2],e,t)})`}function Tr(e,t,n){let r=e.getContext(`2d`);r.clearRect(0,0,e.width,e.height);let i=t/5,a=255/i,o=255/t;for(let e=0;e<=n/20;e++)for(let t=0;t<=4;t++){let n=i+i*t;for(let s=0;s<=n;s++)r.fillStyle=Er(t,s*a*o),r.fillRect(i*t+s,e,1,1)}}function Er(e,t){return e<0||e>4?`128 128 128`:e===0?`rgb(255 ${t} 0)`:e===1?`rgb(${255-t} 255 0)`:e===2?`rgb(0 255 ${t})`:e===3?`rgb(0 ${255-t} 255)`:e===4?`rgb(${t} 0 ${255-t})`:`unreachable`}function Dr(e,t,n,r){let i=e.getContext(`2d`);i.clearRect(0,0,e.width,e.height);let a=255/t;for(let e=0;e<=n/20;e++)for(let n=0;n<=t;n++)i.fillStyle=Or(n*a,r),i.fillRect(n,e,1,1)}function Or(e,t){return`rgba(${t[0]}, ${t[1]}, ${t[2]}, ${e/255})`}async function kr(e){let t=e.target.value;await navigator.clipboard.writeText(t)}function J(e,t,n){console.log(`(>_<)`,e,t),!(e===void 0||t===void 0||n===void 0)&&e.style.setProperty(t,n)}function Y(e){let t=e[0].toString(16);t=t.length===1?`0`+t:t;let n=e[1].toString(16);n=n.length===1?`0`+n:n;let r=e[2].toString(16);r=r.length===1?`0`+r:r;let i=e[3]===255?``:e[3].toString(16);return i=i.length===1?`0`+i:i,`#`+t+n+r+i}var X=`0x`;function Ar(e){console.log(e);let t=e[0]===`#`?1:0,n=e.slice(t,t+2),r=e.slice(t+2,t+4),i=e.slice(t+4,t+6),a=e.length>7?e.slice(t+6,t+8):``;return[Number(X+n),Number(X+r),Number(X+i),a.length===0?255:Number(X+a)]}function jr(e){return[255-e[0],255-e[1],255-e[2],e[3]]}function Mr(e,t){return t.startsWith(`--`)?e.style.getPropertyValue(t):t}function Nr(e){return e>=0&&e<=255}var Pr=class e{constructor(t){if(t===void 0)return this;let n=t.constructor.name;if(n!==`String`&&n!==`Array`)throw Error(`expected string or array of number`);return t.constructor.name===`String`?e.from_str(t):t.length===3?e.from_rgb(t):e.from_rgba(t)}red=255;green=255;blue=255;alpha=255;static from_rgb(t){if(t.length!==3)throw Error(`you must provide exactly 3 rgb values`);if(t.some(e=>e>255||e<0))throw Error(`rgb values must be valid u8 values`);let n=new e;return n.red=t[0],n.green=t[1],n.blue=t[2],n.alpha=255,n}static from_rgba(t){if(t.length!==4)throw Error(`you must provide exactly 4 rgba values`);if(t.some(e=>e>255||e<0))throw Error(`rgba values must be valid u8 values`);let n=new e;return n.red=t[0],n.green=t[1],n.blue=t[2],n.alpha=t[3],n}static from_str(t){return t.startsWith(`rgb(`)?e.from_rgb_str(t):t.startsWith(`rgba(`)?e.from_rgba_str(t):e.from_hex_str(t)}static from_hex_str(t){let n=t[0]===`#`?1:0,r=t.slice(n,n+2),i=t.slice(n+2,n+4),a=t.slice(n+4,n+6),o=t.length>7?t.slice(n+6,n+8):``,s=new e;return s.red=Number(X+r),s.green=Number(X+i),s.blue=Number(X+a),s.alpha=o.length===0?255:Number(X+o),s}static from_rgb_str(t){if(!t.startsWith(`rgb(`)||!t.endsWith(`)`))throw Error(`invalid str rgb value`);t=t.slice(4,t.length-1);let n=t.includes(`,`)?`,`:` `,r=t.split(n);if(r.length!==3)throw Error(`invalid str rgb value`);let i=Number(r[0]),a=Number(r[1]),o=Number(r[2]);if([i,a,o].some(e=>Number.isNaN(e)||!Nr(e)))throw Error(`invalid rgb number value`);let s=new e;return s.red=i,s.green=a,s.blue=o,s.alpha=255,s}static from_rgba_str(t){if(!t.startsWith(`rgba(`)||!t.endsWith(`)`))throw Error(`invalid str rgba value`);t=t.slice(5,t.length-1);let n=t.split(`,`);if(n.length!==4)throw Error(`invalid str rgba value`);let r=Number(n[0]),i=Number(n[1]),a=Number(n[2]),o=Number(n[3])*255;if([r,i,a,o].some(e=>Number.isNaN(e)||!Nr(e)))throw Error(`invalid rgba number value`);let s=new e;return s.red=r,s.green=i,s.blue=a,s.alpha=o,s}invert(){this.red=255-this.red,this.green=255-this.green,this.blue=255-this.blue}invert_alpha(){this.alpha=255-this.alpha}to_hex_str(){let e=this.red.toString(16);e=e.length===1?`0`+e:e;let t=this.green.toString(16);t=t.length===1?`0`+t:t;let n=this.blue.toString(16);n=n.length===1?`0`+n:n;let r=this.alpha===255?``:this.alpha.toString(16);return r=r.length===1?`0`+r:r,`#`+e+t+n+r}alpha_scaled(){return this.alpha/255}to_rgba_str(){let e=this.red+`, `+this.green+`, `+this.blue;return this.alpha===255?`rgb(`+e+`)`:`rgba(`+e+`, `+this.alpha_scaled()+`)`}to_rgba(){return[this.red,this.green,this.blue,this.alpha]}clone(){return structuredClone(this)}static inverted(e){return e.invert(),e}},Z={App:`rYAGPW_App`,AppDepict:`rYAGPW_AppDepict`,Apps:`rYAGPW_Apps`,AppText:`rYAGPW_AppText`,AppTitle:`rYAGPW_AppTitle`,Greetings:`rYAGPW_Greetings`,Home:`rYAGPW_Home`,LeftRtt:`rYAGPW_LeftRtt`,RightRtt:`rYAGPW_RightRtt`},Fr=`<svg xmlns="http://www.w3.org/2000/svg" class="ionicon" viewBox="0 0 512 512"><path d="M473 39.05a24 24 0 00-25.5-5.46L47.47 185h-.08a24 24 0 001 45.16l.41.13 137.3 58.63a16 16 0 0015.54-3.59L422 80a7.07 7.07 0 0110 10L226.66 310.26a16 16 0 00-3.59 15.54l58.65 137.38c.06.2.12.38.19.57 3.2 9.27 11.3 15.81 21.09 16.25h1a24.63 24.63 0 0023-15.46L478.39 64.62A24 24 0 00473 39.05z"/></svg>`,Ir=`<svg xmlns="http://www.w3.org/2000/svg" class="ionicon" viewBox="0 0 512 512"><path d="M465.94 119.76l-73.7-73.7A47.68 47.68 0 00358.3 32H96a64 64 0 00-64 64v320a64 64 0 0064 64h320a64 64 0 0064-64V153.7a47.68 47.68 0 00-14.06-33.94zM120 112h176a8 8 0 018 8v48a8 8 0 01-8 8H120a8 8 0 01-8-8v-48a8 8 0 018-8zm139.75 319.91a80 80 0 1176.16-76.16 80.06 80.06 0 01-76.16 76.16z"/><circle cx="256" cy="352" r="48"/></svg>`,Lr=`<svg xmlns="http://www.w3.org/2000/svg" class="ionicon" viewBox="0 0 512 512"><path d="M480 128a64 64 0 00-64-64h-16V48.45c0-8.61-6.62-16-15.23-16.43A16 16 0 00368 48v16H144V48.45c0-8.61-6.62-16-15.23-16.43A16 16 0 00112 48v16H96a64 64 0 00-64 64v12a4 4 0 004 4h440a4 4 0 004-4zM32 416a64 64 0 0064 64h320a64 64 0 0064-64V179a3 3 0 00-3-3H35a3 3 0 00-3 3zm344-208a24 24 0 11-24 24 24 24 0 0124-24zm0 80a24 24 0 11-24 24 24 24 0 0124-24zm-80-80a24 24 0 11-24 24 24 24 0 0124-24zm0 80a24 24 0 11-24 24 24 24 0 0124-24zm0 80a24 24 0 11-24 24 24 24 0 0124-24zm-80-80a24 24 0 11-24 24 24 24 0 0124-24zm0 80a24 24 0 11-24 24 24 24 0 0124-24zm-80-80a24 24 0 11-24 24 24 24 0 0124-24zm0 80a24 24 0 11-24 24 24 24 0 0124-24z"/></svg>`,Rr=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M434 461.5l-26.6-69.1c-2.1-5.1-7-8.4-12.4-8.4-4.5 0-8.6 2.2-11.1 5.9s-3 8.4-1.4 12.5l26 69.1c2.1 5.1 7 8.5 12.5 8.5h.5c4.5 0 8.7-2.2 11.2-5.9 2.5-3.8 3-8.5 1.3-12.6zM117.6 384c-5.5 0-10.4 3.3-12.4 8.4l-26.6 69.1c-1.7 4.2-1.2 8.9 1.3 12.6 2.5 3.7 6.7 5.9 11.2 5.9h.5c5.5 0 10.4-3.3 12.5-8.5l26-69.1c1.7-4.1 1.2-8.8-1.4-12.5-2.4-3.7-6.6-5.9-11.1-5.9zM256.6 384h-1.1c-7.4 0-13.4 6-13.4 13.4v36.1c0 7.4 6 14.4 13.4 14.4h1.1c7.4 0 13.4-7 13.4-14.4v-36.1c0-7.4-6-13.4-13.4-13.4z"/><g><path d="M424 128H88c-4.4 0-8 3.6-8 8v176c0 4.4 3.6 8 8 8h336c4.4 0 8-3.6 8-8V136c0-4.4-3.6-8-8-8z"/><path d="M448 80H63.9C46.3 80 32 94.3 32 111.9v224.2c0 17.6 14.3 31.9 31.9 31.9H448c17.7 0 32-14.3 32-32V112c0-17.7-14.3-32-32-32zm4 244c0 8.8-7.2 16-16 16H76c-8.8 0-16-7.2-16-16V124c0-8.8 7.2-16 16-16h364.6c3 0 5.9 1.2 8 3.3 2.1 2.1 3.3 5 3.3 8V324z"/></g><path d="M256 32c-13.4-.2-24.4 12.2-24.4 25.6h48.7c.1-13.4-10.9-25.8-24.3-25.6z"/></svg>`,zr=L(`<div>`),Br=L(`<div><span><span></span><span>`);const Vr=()=>(()=>{var e=zr();return H(e,P(Ur,{})),T(()=>z(e,Z.Home)),e})();async function Hr(){return[{name:`calendar`,icon:W(Lr),accent:`#00a86b`,depict:`manage your schedule and affairs [not yet avalable]`},{name:`drive`,icon:W(Ir),accent:`#a18369`,depict:`store, share and backup your files [pre-alpha release]`},{name:`comms`,icon:W(Fr),accent:`#1475dc`,depict:`talk with people in text, audio or video format [not yet avalable]`},{name:`vms`,icon:W(Rr),accent:`#ce1f57`,depict:`manage your virtual machines [not yet avalable]`}]}const Ur=()=>{let{user:e,re_user:t}=G(),[n]=re(Hr),[r,i]=w(0);return P(Ue,{get children(){return[P(I,{get when(){return sn(e())},get children(){var e=zr();return H(e,P(He,{get each(){return n()},children:e=>P(Wr,{get icon(){return e.icon},get depict(){return e.depict},get name(){return e.name},get accent(){return e.accent},get rtt(){return r()},re_rtt:i})})),T(()=>z(e,Z.Apps)),e}}),P(I,{when:!0,get children(){return P(nr,{get class(){return Z.Greetings},text:`welcome`})}})]}})},Wr=e=>{let t=()=>e.rtt,n=()=>e.re_rtt,r=()=>e.name,i=()=>e.depict,a=()=>e.icon,o=()=>e.accent,s=()=>n()(e=>Math.abs(1-e));return(()=>{var e=Br(),n=e.firstChild,c=n.firstChild,l=c.nextSibling;return B(e,`mouseenter`,s),H(e,a,n),H(c,r),H(l,i),T(r=>{var i=`${Z.App} ${t()==0?Z.RightRtt:Z.LeftRtt}`,a=o(),s=Z.AppText,u=Z.AppTitle,d=Z.AppDepict;return i!==r.e&&z(e,r.e=i),a!==r.t&&V(e,`--accent`,r.t=a),s!==r.a&&z(n,r.a=s),u!==r.o&&z(c,r.o=u),d!==r.i&&z(l,r.i=d),r},{e:void 0,t:void 0,a:void 0,o:void 0,i:void 0}),e})()};var Gr={Auth:`a-whjW_Auth`},Q={Form:`IO803G_Form`,FormTitle:`IO803G_FormTitle`,Note:`IO803G_Note`,SubmitButton:`IO803G_SubmitButton`,SwapButton:`IO803G_SwapButton`},Kr=L(`<form>`);const qr=e=>{let t=()=>e.action,n=()=>e.method,r=()=>e.children,i=()=>e.target,a=()=>e.submit;return(()=>{var e=Kr();return B(e,`submit`,a()),H(e,r),T(r=>{var a=Q.Form,o=t(),s=n(),c=i()??`_self`;return a!==r.e&&z(e,r.e=a),o!==r.t&&R(e,`action`,r.t=o),s!==r.a&&R(e,`method`,r.a=s),c!==r.o&&R(e,`target`,r.o=c),r},{e:void 0,t:void 0,a:void 0,o:void 0}),e})()};function Jr(e){return new Array(...e.querySelectorAll(`input`)).filter(e=>e.hasAttribute(`name`))}function Yr(e){let t=e.map(e=>e.name);return t.length===new Set(...t).size?Error(`duplicate input field names are not allowed`):null}function Xr(e){return e.some(e=>e.classList.contains(`mandatory`)&&e.value.length===0)?Error(`mandatory field is empty`):null}function Zr(e,t){return e===`bool`?[`true`,`yes`,`1`,`on`].includes(t):[`int`,`uint`,`float`].includes(e)?Number(t):t}function Qr(e){let t=new Map;return e.forEach(e=>{if(e.value.length>0){let n=e.getAttribute(`data-type`)??`str`;t.set(e.name,Zr(n,e.value))}}),t}async function $r(e){e.preventDefault();let t=e.target;if(t.tagName!==`FORM`){let e=Error(`submit event target is not a form`);return window.alert(e),e}let n=t.action,r=Jr(t),i=Yr(r);return i===null?(i=Xr(r),i===null?{map:Qr(r),path:n}:(r.filter(e=>e.classList.contains(`mandatory`)&&e.value.length===0).reverse().forEach(e=>e.focus()),i)):(console.error(i),i)}var ei=L(`<h4>Register`),ti=L(`<span>Already have an account?`),ni=L(`<span>Login.`);function ri(e){let t=Error();if(e.length>24)return t.message=`password too long`,t.cause=`LengthFailure`,console.error(t),t;if(e.length<8)return t.message=`password too short`,t.cause=`LengthFailure`,console.error(t),t;if(Zt(e)){if(Xt(e))return t.message=`password needs to have at least 1 symbol (non-alphanumeric char)`,t.cause=`TooLittleVariation`,console.error(t),t}else return t.message=`password contains non ascii chars`,t.cause=`NonAsciiDetected`,console.error(t),t;return null}function ii(e,t){if(e!==t){let e=Error(`password verification mismatch`);return console.error(e),e}return null}async function ai(e){let t=await $r(e);if(t.constructor.name===`Error`)return t;let{map:n,path:r}=t,i=n.get(`user_pswd`),a=ii(i,n.get(`verify_pswd`));if(a!==null||(a=ri(i),a!==null))return t;let o=JSON.stringify(Kt(n));console.log(o),(await fetch(r,{method:`PUT`,credentials:`include`,headers:{"content-type":`application/json`,"content-length":`${o.length}`},body:o})).ok}const oi=e=>{let t=()=>e.swap_call;return P(qr,{action:`/auth/remembrance`,method:`post`,target:`_blank`,submit:ai,get children(){return[(()=>{var e=ei();return T(()=>z(e,Q.FormTitle)),e})(),P(In,{type:`text`,name:`user_name`,legend:`User Name`,mandatory:!0}),P(In,{type:`email`,name:`user_email`,legend:`Email`}),P(Hn,{name:`user_pswd`,mandatory:!0}),P(Hn,{name:`verify_pswd`,legend:`Verify Password`,mandatory:!0}),P(wn,{name:`auto_login`,legend:`\xA0auto login`}),P(K,{get class(){return Q.SubmitButton},children:`Register`}),P($n,{}),P(Gn,{get children(){return[(()=>{var e=ti();return T(()=>z(e,Q.Note)),e})(),P(K,{get class(){return Q.SwapButton},get call(){return t()},get children(){return ni()}})]}})]}})};var si=L(`<h4>Login`),ci=L(`<span>New to hanabi?`),li=L(`<span>Register.`);async function ui(e){let{user:t,re_user:n}=G(),r=await $r(e);if(r.constructor.name===`Error`)return r;let{map:i,path:a}=r,o=JSON.stringify(Kt(i)),s=await fetch(a,{method:`PATCH`,credentials:`include`,headers:{"content-type":`application/json`,"content-length":`${o.length}`},body:o});if(!s.ok)return;let c=await s.json();c.data=structuredClone(t().data),n(c);let l=()=>n(e=>({name:e.name,email:e.email,data:e.data,access_token:void 0}));await new Promise(e=>setTimeout(l,1200*1e3))}const di=e=>{let t=()=>e.swap_call;return P(qr,{action:`/auth/remembrance`,method:`post`,target:`_blank`,submit:ui,get children(){return[(()=>{var e=si();return T(()=>z(e,Q.FormTitle)),e})(),P(In,{type:`text`,name:`user_name`,legend:`User Name or Email`,mandatory:!0}),P(Hn,{name:`user_pswd`,mandatory:!0}),P(wn,{name:`persist_session`,legend:`\xA0persist session`}),P(K,{type:`submit`,get class(){return Q.SubmitButton},children:`Login`}),P($n,{}),P(Gn,{get children(){return[(()=>{var e=ci();return T(()=>z(e,Q.Note)),e})(),P(K,{get class(){return Q.SwapButton},get call(){return t()},get children(){return li()}})]}})]}})};var fi=L(`<div>`),[pi,mi]=w(0),hi=A({form:pi,set_form:mi});function gi(){return j(hi)}const _i=()=>{let{user:e,re_user:t}=G(),{form:n,set_form:r}=gi(),i=()=>r(e=>Math.abs(1-e));return(()=>{var t=fi();return H(t,P(Ue,{get children(){return[P(I,{get when(){return an(e())},get children(){return P(Ue,{get children(){return[P(I,{get when(){return n()==0},get children(){return P(di,{swap_call:i})}}),P(I,{get when(){return n()==1},get children(){return P(oi,{swap_call:i})}})]}})}}),P(I,{get when(){return sn(e())},get children(){return P(nr,{text:`You are already logged-in.`})}})]}})),T(()=>z(t,Gr.Auth)),t})()};var vi={Initialize:`jAvltG_Initialize`,Negotiate:`jAvltG_Negotiate`},yi=L(`<div>`),bi=L(`<span>negotiating an identity... ok`),xi=L(`<span>negotiating an identity...`);const Si=()=>(()=>{var e=yi();return H(e,P(jn,{}),null),H(e,P(Ci,{}),null),T(()=>z(e,vi.Initialize)),e})(),Ci=()=>{let{user:e,re_user:t}=G(),[n]=re(e(),wi);return te(()=>{on(e())&&n()!==void 0&&t(n())}),P(qe,{get fallback(){return(()=>{var e=xi();return T(()=>z(e,vi.Negotiate)),e})()},get children(){var e=bi();return T(()=>z(e,vi.Negotiate)),e}})};async function wi(e){if(e.name!==void 0)return e;let t=await fetch(`/auth/remembrance`,{method:`POST`,credentials:`include`});if(!t.ok)return e;if(t.headers.get(`content-length`)===`0`)return{name:e.name??``,email:e.email,access_token:e.access_token,data:e.data};let n=await t.json();return{name:n.name,email:n.email,access_token:n.access_token,data:e.data}}var $={ContentItem:`_0AH76q_ContentItem`,Entry:`_0AH76q_Entry`,Menu:`_0AH76q_Menu`,Path:`_0AH76q_Path`},Ti={Entry:`zQn7Kq_Entry`,Sep:`zQn7Kq_Sep`,UserMenu:`zQn7Kq_UserMenu`},Ei=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M220.8 406.1l4.8 14.8c.4 1.2 1.9 1.8 3 1.1l6.8-4.2c2.5-1.6 2.5-5.2 0-6.8l-11.5-7.2c-1.7-1-3.6.5-3.1 2.3zM286.6 421l4.9-15.2c.6-1.8-1.4-3.3-3-2.3l-11.9 7.4a4.02 4.02 0 0 0 0 6.8l7 4.4c1.2.7 2.6.1 3-1.1zM188.6 242.2c-3.9 3.5-9.6 6.4-15.7 8.5-1 .4-1.6 1.5-1.2 2.5l9.3 28.9 3.8 11.8c.4 1.2 1.9 1.8 3 1.1l7-4.3 36.6-22.5c3-1.9 2.3-6.5-1.2-7.3-14.3-3.3-26.5-9.8-36.2-18.5-1.6-1.4-3.9-1.5-5.4-.2zM192.6 310.8l-2 1.2 14.6 45.3c.4 1.2 1.9 1.8 3 1.1l27.2-16.9c2.5-1.6 2.5-5.2 0-6.8l-38.5-23.9c-1.4-.8-3-.8-4.3 0zM258.1 348.9c-1.3-.8-2.9-.8-4.2 0L212 374.5l-.1.1c-1 .8-1 2.4 0 3.2l.7.5 41.3 25.3c1.3.8 2.9.8 4.2 0l41.7-25.5.4-.3c1-.8 1-2.2 0-3l-42.1-25.9zM296.7 296.6l-38.5-23.9c-1.3-.8-2.9-.8-4.2 0l-38.5 23.9a4.02 4.02 0 0 0 0 6.8l38.5 23.9c1.3.8 2.9.8 4.2 0l38.5-23.9c2.5-1.5 2.5-5.2 0-6.8zM318.1 242.3c-9.7 8.7-22 15.1-36.2 18.5-3.5.8-4.2 5.4-1.2 7.3l36.6 22.5 7.4 4.6c1.1.7 2.6.2 3-1.1l4-12.4 9.8-30.3c-6.9-2.1-13.6-5.3-18-9.2-1.6-1.3-3.9-1.2-5.4.1zM232.4 442l1.6 5s7.5 19 22 19c15 0 22.2-19 22.2-19l1.6-4.8c.6-1.7-.1-3.7-1.7-4.6l-20-12.4c-1.3-.8-2.9-.8-4.2 0l-19.8 12.3c-1.6.8-2.3 2.7-1.7 4.5zM276.7 341.5l27.5 17.1c1.1.7 2.6.2 3-1.1l14.2-43.8c.3-.9-.1-1.8-.8-2.3l-1-.6c-1.3-.8-2.9-.8-4.2 0l-38.5 23.9c-2.8 1.6-2.8 5.3-.2 6.8z"/><path d="M376.1 168.2c-6.2 5.4-13.2 8.7-18 10.5-1.8.7-3.5-1.4-2.3-3l4-5.7c6.1-8.7 8.5-19.4 6.8-29.8C357.9 86.8 311.7 46 256 46c-55.7 0-101.9 41.2-110.6 94.7-1.7 10.5.8 21.2 6.9 29.8l4 5.6c1.2 1.6-.5 3.8-2.4 3-5.4-2.1-13.5-6.2-20.1-12.8-1.4-1.4-3.6-1.5-5.2-.4-10.2 7.3-16.8 19.1-16.8 32.5 0 22.1 17.9 40 40 40 11.3 0 28-4.7 36.6-12.3 1.5-1.3 3.8-1.3 5.3.1 15.2 13.4 36.6 20.2 62.1 20.2s47-6.8 62.1-20.2c1.5-1.3 3.8-1.4 5.3-.1 8.5 7.6 25.3 12.3 36.6 12.3 22.1 0 40-18 40-40.1 0-11.9-5.2-22.6-13.5-30-2.7-2.6-7.2-2.7-10.2-.1z"/></svg>`,Di=`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
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
`,Oi=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M480 176H272v.1h-32v-.1H32v48h11l5 21.5C64 313 88.5 336 144 336s96-17.4 96-90.5V224s1.5-16 16-16 16 16 16 16v21.8c0 73 42.1 90.2 97 90.2s79-25 95-90.2l5-21.8h11v-48z"/></svg>`,ki=L(`<span>| profile`),Ai=L(`<span>| configs`),ji=L(`<span>| logout`),Mi=L(`<div>`);function Ni(e){return e}const Pi=()=>{let{user:e,re_user:t}=G(),n=W(Ei),r=W(Di),i=W(Oi),a=async()=>{(await fetch(`/auth/remembrance`,{method:`DELETE`,credentials:`include`,headers:{authorization:`Bearer<${e().access_token}>`}})).ok&&t(e=>({name:``,email:void 0,access_token:void 0,data:Ni(e.data)}))};return(()=>{var e=Mi();return H(e,P(K,{get class(){return Ti.Entry},get children(){return[i,ki()]}}),null),H(e,P(K,{get class(){return Ti.Entry},get children(){return[n,Ai()]}}),null),H(e,P(K,{link:`/`,get class(){return Ti.Entry},call:a,get children(){return[r,ji()]}}),null),T(()=>z(e,Ti.UserMenu)),e})()};var Fi={Contents:`VMpThW_Contents`,Header:`VMpThW_Header`,Headers:`VMpThW_Headers`,Settings:`VMpThW_Settings`,TextlessHeader:`VMpThW_TextlessHeader`},Ii=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M265.6 212.3c-10.5 0-18.5 4.4-24 13.2-5.5 8.8-9.1 22-10.8 39.6-.9 11.7 0 20.5 2.7 26.5s7.1 9 13.1 9c5.5 0 10.3-1.5 14.6-4.4 4.3-2.9 8.1-8.3 11.3-16.2l6.1-66c-2.2-.5-4.4-.9-6.5-1.2-2.3-.4-4.4-.5-6.5-.5z"/><path d="M256 48C141.1 48 48 141.1 48 256s93.1 208 208 208 208-93.1 208-208S370.9 48 256 48zm127.8 201.9c-.9 21.4-7.6 39.9-20 55.6-12.4 15.6-31 23.4-55.6 23.4-8.2 0-15.3-2.2-21.2-6.6-6-4.4-10.2-10.7-12.6-18.8-4.1 8.3-9.4 14.5-15.7 18.6-6.3 4.1-13.7 6.2-22.2 6.2-15.1 0-26.6-5.8-34.6-17.3s-10.9-26.8-8.8-45.9c2.6-24.4 10-44 22.2-58.7 12.2-14.7 27-22 44.4-22 12.2 0 22.1 1.3 29.5 3.8 7.4 2.5 15.6 5.7 24.5 11l-.5-.1h.8l-7.7 83.4c-.5 8.5.1 14.6 1.7 17.8 1.7 3.2 3.9 4.9 6.7 4.9 11.3 0 20.4-5.1 27.2-15.6 6.8-10.5 10.6-23.6 11.4-39.6 1.6-33-5.1-58.7-20.2-77.1-15.1-18.4-38.3-27.7-69.7-27.7-30.5 0-54.8 9.9-72.8 29.8s-27.7 46.9-29.3 81.2c-1.7 33.4 5.6 59.8 21.9 79.1 16.3 19.4 39.7 29.1 70.3 29.1 8.5 0 17.3-.9 26.5-2.7 9.1-1.8 17.1-4.1 23.7-6.8l5.8 24.2c-6.8 4.1-15.4 7.3-25.9 9.6-10.5 2.3-20.7 3.4-30.7 3.4-40.8 0-72.3-12.1-94.3-36.4-22-24.2-32.2-57.4-30.5-99.6 1.8-41.8 14.9-74.9 39.1-99.4 24.3-24.5 56.5-36.7 96.7-36.7 39.5 0 69.8 11.6 90.7 34.7 21.2 23.2 30.8 54.9 29.2 95.2z"/></svg>`,Li=`<svg xmlns="http://www.w3.org/2000/svg" class="ionicon" viewBox="0 0 512 512"><path d="M345.14 480H274a18 18 0 01-18-18v-27.71a31.32 31.32 0 00-9.71-22.77c-7.78-7.59-19.08-11.8-30.89-11.51-21.36.5-39.4 19.3-39.4 41.06V462a18 18 0 01-18 18H87.62A55.62 55.62 0 0132 424.38V354a18 18 0 0118-18h27.71c9.16 0 18.07-3.92 25.09-11a42.06 42.06 0 0012.2-29.92C114.7 273.89 97.26 256 76.91 256H50a18 18 0 01-18-18v-70.38A55.62 55.62 0 0187.62 112h55.24a8 8 0 008-8v-6.48A65.53 65.53 0 01217.54 32c35.49.62 64.36 30.38 64.36 66.33V104a8 8 0 008 8h55.24A54.86 54.86 0 01400 166.86v55.24a8 8 0 008 8h5.66c36.58 0 66.34 29 66.34 64.64 0 36.61-29.39 66.4-65.52 66.4H408a8 8 0 00-8 8v56A54.86 54.86 0 01345.14 480z"/></svg>`,Ri=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 48C141.1 48 48 141.1 48 256s93.1 208 208 208 208-93.1 208-208S370.9 48 256 48zM76 256c0-48.1 18.7-93.3 52.7-127.3S207.9 76 256 76c48.1 0 93.3 18.7 127.3 52.7 32.2 32.2 50.7 74.5 52.6 119.7-8.8-10.3-24.2-24-43.8-24-27.5 0-41.7 25.7-51 42.7-1.4 2.5-2.7 4.9-3.9 7-11.4 19.2-27.3 30-42.5 28.9-13.4-.9-24.8-11.2-32.2-28.8-9.2-22.1-29.1-45.8-52.9-49.2-11.3-1.6-28.1.8-44.7 21.4-3.2 4-6.9 9.4-11.1 15.6-10.4 15.5-26.2 38.8-38.1 40.8-17.3 2.8-30.9-7.5-36.4-12.3-2.2-11.2-3.3-22.8-3.3-34.5z"/></svg>`,zi=L(`<div><div></div><div>`),Bi=L(`<span>`),Vi=L(`<div>`);const Hi=()=>{let e=W(Ii),t=W(Li),n=W(Ri),[r,i]=$t(),a=en(i,700),[o,s]=w(!0),c=e=>s(t=>(a(e),r().trigger?!t:t));return(()=>{var r=zi(),i=r.firstChild,a=i.nextSibling;return B(i,`mousedown`,c),H(i,P(Ui,{text:`| account`,icon:e,get switch(){return o()}}),null),H(i,P(Ui,{text:`| apps`,icon:t,get switch(){return o()}}),null),H(i,P(Ui,{text:`| colorschemes`,icon:n,get switch(){return o()}}),null),H(a,P(Wi,{name:`red`})),T(e=>{var t=Fi.Settings,n=Fi.Headers,o=Fi.Contents;return t!==e.e&&z(r,e.e=t),n!==e.t&&z(i,e.t=n),o!==e.a&&z(a,e.a=o),e},{e:void 0,t:void 0,a:void 0}),r})()},Ui=e=>{let t=()=>e.text,n=()=>e.icon,r=()=>e.switch;return(()=>{var e=Vi();return H(e,n,null),H(e,P(F,{get when(){return r()},get children(){var e=Bi();return H(e,t),T(()=>z(e,Fi.HeaderText)),e}}),null),T(()=>z(e,`${Fi.Header} ${r()?Fi.TextfulHeader:Fi.TextlessHeader}`)),e})()},Wi=e=>(()=>{var e=Vi();return H(e,P(vr,{events:`click`,get html(){return document.documentElement},prop:`--blue`}),null),H(e,P(vr,{events:`click`,get html(){return document.documentElement},prop:`--grad-start`}),null),H(e,P(vr,{events:`click`,get html(){return document.documentElement},prop:`--grad-end`}),null),H(e,P(vr,{events:`click`,get html(){return document.documentElement},prop:`--white`}),null),e})();var Gi=`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
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
`,Ki=`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
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
`,qi=`<svg xmlns="http://www.w3.org/2000/svg" class="ionicon" viewBox="0 0 512 512"><path d="M328.85 156.79a26.69 26.69 0 1018.88 7.81 26.6 26.6 0 00-18.88-7.81z"/><path d="M477.44 50.06a.29.29 0 010-.09 20.4 20.4 0 00-15.13-15.3c-29.8-7.27-76.68.48-128.63 21.28-52.36 21-101.42 52-134.58 85.22A320.7 320.7 0 00169.55 175c-22.33-1-42 2.18-58.57 9.41-57.74 25.41-74.23 90.44-78.62 117.14a25 25 0 0027.19 29h.13l64.32-7.02c.08.82.17 1.57.24 2.26a34.36 34.36 0 009.9 20.72l31.39 31.41a34.27 34.27 0 0020.71 9.91l2.15.23-7 64.24v.13A25 25 0 00206 480a25.25 25.25 0 004.15-.34C237 475.34 302 459.05 327.34 401c7.17-16.46 10.34-36.05 9.45-58.34a314.78 314.78 0 0033.95-29.55c33.43-33.26 64.53-81.92 85.31-133.52 20.69-51.36 28.48-98.59 21.39-129.53zM370.38 224.94a58.77 58.77 0 110-83.07 58.3 58.3 0 010 83.07z"/><path d="M161.93 386.44a16 16 0 00-11 2.67c-6.39 4.37-12.81 8.69-19.29 12.9-13.11 8.52-28.79-6.44-21-20l12.15-21a16 16 0 00-15.16-24.91A61.25 61.25 0 0072 353.56c-3.66 3.67-14.79 14.81-20.78 57.26A357.94 357.94 0 0048 447.59 16 16 0 0064 464h.4a359.87 359.87 0 0036.8-3.2c42.47-6 53.61-17.14 57.27-20.8a60.49 60.49 0 0017.39-35.74 16 16 0 00-13.93-17.82z"/></svg>`,Ji=`<svg xmlns="http://www.w3.org/2000/svg" class="ionicon" viewBox="0 0 512 512"><path d="M261.56 101.28a8 8 0 00-11.06 0L66.4 277.15a8 8 0 00-2.47 5.79L63.9 448a32 32 0 0032 32H192a16 16 0 0016-16V328a8 8 0 018-8h80a8 8 0 018 8v136a16 16 0 0016 16h96.06a32 32 0 0032-32V282.94a8 8 0 00-2.47-5.79z"/><path d="M490.91 244.15l-74.8-71.56V64a16 16 0 00-16-16h-48a16 16 0 00-16 16v32l-57.92-55.38C272.77 35.14 264.71 32 256 32c-8.68 0-16.72 3.14-22.14 8.63l-212.7 203.5c-6.22 6-7 15.87-1.34 22.37A16 16 0 0043 267.56L250.5 69.28a8 8 0 0111.06 0l207.52 198.28a16 16 0 0022.59-.44c6.14-6.36 5.63-16.86-.76-22.97z"/></svg>`,Yi=L(`<div>`),Xi=L(`<span>`),Zi=L(`<div><div>`);const Qi=()=>{let{user:e,re_user:t}=G(),{form:n,set_form:r}=gi(),i=W(Gi);W(Di);let a=W(Ki),o=W(Ri),s=W(qi),c=W(Ji),l=()=>r(1),u=()=>r(0);return(()=>{var t=Yi();return H(t,P(ea,{get class(){return $.ContentItem},icon:o,text:`colors`,get content(){return P(ta,{})}}),null),H(t,P(ea,{get class(){return $.ContentItem},get content(){return P(Hi,{})},icon:s,text:`settings`,show:!1,events:`keypress`}),null),H(t,P(Ue,{get children(){return[P(I,{get when(){return an(e())},get children(){return[P($i,{link:`/auth`,call:u,icon:i,text:`login`}),P($i,{link:`/auth`,call:l,icon:a,text:`register`})]}}),P(I,{get when(){return sn(e())},get children(){return P(ea,{get class(){return $.ContentItem},get content(){return P(Pi,{})},icon:c,get text(){return e().name},show:!1,events:`click`})}})]}}),null),T(()=>z(t,$.Menu)),t})()},$i=e=>{let t=()=>e.icon,n=()=>e.text,r=()=>e.link,i=()=>e.call;return(()=>{var e=Yi();return H(e,P(K,{get link(){return r()},get call(){return i()},get class(){return $.Path},get children(){return[P(F,{get when(){return t()!==void 0},get children(){return t()}}),(()=>{var e=Xi();return H(e,n),e})()]}})),T(()=>z(e,$.Entry)),e})()},ea=e=>{let t=()=>e.icon,n=()=>e.text,r=()=>e.call,i=()=>e.class,a=()=>e.content,o=()=>e.show??!1,s=()=>e.events===void 0?[]:e.events.constructor.name===`String`?[e.events]:e.events,[c,l]=dr(s(),o());return(()=>{var e=Zi(),u=e.firstChild;return B(u,`mousedown`,l),R(u,`ephem-hash`,c),H(u,P(K,{get call(){return r()},get class(){return $.Path},get children(){return[Je(()=>t()),(()=>{var e=Xi();return H(e,n),e})()]}})),H(e,P(cr,{get events(){return s()},get show(){return o()},hash:c,get children(){return a()}}),null),T(t=>{var n=$.ContentItem,r=`${$.Entry}${Qt(i())}`;return n!==t.e&&z(e,t.e=n),r!==t.t&&z(u,t.t=r),t},{e:void 0,t:void 0}),e})()},ta=()=>{let{colors:e,re_colors:t}=hn(),n=Object.keys(e());return(()=>{var e=Yi();return H(e,P(He,{each:n,children:e=>P(na,{title:e})})),T(()=>z(e,Ti.UserMenu)),e})()},na=e=>{let t=()=>e.title,{colors:n,re_colors:r}=hn();return P(K,{call:e=>{let t=e.target.textContent,r=n()[t];r!==void 0&&(ar(t),Object.entries(r).forEach(([e,t])=>document.documentElement.style.setProperty(`--`+e,t)))},get class(){return Ti.Entry},get children(){var e=Xi();return H(e,t),e}})};var ra={Page:`eSJJNa_Page`},ia=L(`<div>`);const aa={red:`#A95525`,green:`#87a187`,blue:`#485d6c`,black:`black`,white:`#f0f8ff`,abstract:`#f0f8ff35`,opaque:`#a0c65578`,"grad-start":`rgb(204, 217, 208)`,"grad-end":`rgb(245, 244, 225)`,"grad-rotate":`328deg`},oa={abstract:`#f0f8ff35`,opaque:`#828E83`,black:`#e3e2e4`,white:`#1f212e`,blue:`#485d6c`,green:`#87a187`,red:`#A95525`,"grad-start":`#01012afc`,"grad-end":`#000000`,"grad-rotate":`328deg`};var{colors:sa,re_colors:ca}=hn();gn(ca,{name:`verdant`,scheme:aa},{name:`black-star`,scheme:oa});const la=e=>{let t=()=>e.children;return P(rr,{get children(){var e=ia();return H(e,P(On,{}),null),H(e,P(Qi,{}),null),H(e,t,null),T(()=>z(e,ra.Page)),e}})};var ua={App:`gPMrEW_App`,AppRoute:`gPMrEW_AppRoute`},da=L(`<div>`);const fa=()=>{let{user:e,re_user:t}=G(),{active:n,up_active:r}=ga(),{eph:i,re_eph:a}=dn();return _a(i,a),(()=>{var t=da();return H(t,P(Ue,{get children(){return[P(I,{get when(){return on(e())},get children(){return P(Si,{})}}),P(I,{get when(){return an(e())||sn(e())},get children(){return P(la,{get children(){return P(Gt,{get children(){return[P(Rt,{path:`/`,component:Vr}),P(Rt,{path:`/auth`,component:_i}),P(Rt,{path:`*`,component:jn})]}})}})}})]}})),T(()=>z(t,ua.App)),t})()};var[pa,ma]=w(document.body);const ha=A({active:pa,up_active:ma});function ga(){return j(ha)}function _a(e,t){document.body.addEventListener(`mouseup`,e=>t(t=>{let n=e.target,r=ba(n,sr.Ephemeral);return new Array(...document.body.querySelectorAll(`[ephem-hash]`)).filter(e=>r==null?!0:e.parentElement!==r.parentElement).map(e=>e.getAttribute(`ephem-hash`)).filter(n=>t[n].events.includes(e.type)).forEach(e=>{t[e].show=!1}),structuredClone(t)})),document.body.addEventListener(`keypress`,e=>t(t=>e.key!==`z`||e.ctrlKey||e.shiftKey?t:(new Array(...document.body.querySelectorAll(`[ephem-hash]`)).map(e=>e.getAttribute(`ephem-hash`)).forEach(n=>{t[n].events.includes(e.type)&&(t[n].show=!1)}),structuredClone(t)))),document.body.addEventListener(`mouseover`,e=>t(t=>{let n=e.target,r=ba(n,sr.Ephemeral);return new Array(...document.body.querySelectorAll(`[ephem-hash]`)).filter(e=>r==null?!0:e.parentElement!==r.parentElement).map(e=>e.getAttribute(`ephem-hash`)).filter(n=>t[n].events.includes(e.type)).forEach(e=>ya(e,t)),structuredClone(t)}))}async function va(){if(!document.hidden)return;let{user:e,re_user:t}=G();if(!sn(e()))return;let n=JSON.stringify({name:e().name,email:e().email,access_token:e().access_token});(await fetch(`auth/cache`,{method:`POST`,credentials:`include`,headers:{"content-type":`application/json`,"content-length":`${n.length}`},keepalive:!0,body:n})).ok}window.addEventListener(`visibilitychange`,va);function ya(e,t){let n=t[e];console.log(n.show,n.data);let r=n.data;r===void 0?r={hover_countdown:0}:r.hover_countdown===void 0?r.hover_countdown=0:r.hover_countdown<4?r.hover_countdown+=1:(r.hover_countdown=0,n.show=!1),n.data=r,t[e]=n}function ba(e,t){let n=new Array(...document.querySelectorAll(`.`+t));for(let t of n){let n=t.nextElementSibling;if(n!==null&&n.contains(e))return n}return null}Ze(()=>P(fa,{}),document.body);