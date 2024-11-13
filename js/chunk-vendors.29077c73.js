(self["webpackChunktest"]=self["webpackChunktest"]||[]).push([[504],{6743:function(t,e,n){"use strict";n.d(e,{$L:function(){return $},$g:function(){return D},A4:function(){return f},Am:function(){return tt},As:function(){return W},Cv:function(){return q},FA:function(){return j},Fy:function(){return I},Hk:function(){return r},I9:function(){return et},Im:function(){return Q},K3:function(){return c},KA:function(){return h},Ku:function(){return ut},OE:function(){return ht},T9:function(){return x},Uj:function(){return u},XA:function(){return E},ZQ:function(){return S},bD:function(){return J},c1:function(){return O},cY:function(){return C},dI:function(){return ct},eX:function(){return F},g:function(){return V},gR:function(){return G},gz:function(){return it},hp:function(){return nt},jZ:function(){return k},kH:function(){return X},kj:function(){return lt},lT:function(){return N},lV:function(){return P},nr:function(){return M},qc:function(){return K},sr:function(){return R},tD:function(){return st},u:function(){return d},vA:function(){return s},yU:function(){return T},yw:function(){return Y},zW:function(){return L}});
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const i={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"},s=function(t,e){if(!t)throw r(e)},r=function(t){return new Error("Firebase Database ("+i.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)},o=function(t){const e=[];let n=0;for(let i=0;i<t.length;i++){let s=t.charCodeAt(i);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=63&s|128):55296===(64512&s)&&i+1<t.length&&56320===(64512&t.charCodeAt(i+1))?(s=65536+((1023&s)<<10)+(1023&t.charCodeAt(++i)),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=63&s|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=63&s|128)}return e},a=function(t){const e=[];let n=0,i=0;while(n<t.length){const s=t[n++];if(s<128)e[i++]=String.fromCharCode(s);else if(s>191&&s<224){const r=t[n++];e[i++]=String.fromCharCode((31&s)<<6|63&r)}else if(s>239&&s<365){const r=t[n++],o=t[n++],a=t[n++],c=((7&s)<<18|(63&r)<<12|(63&o)<<6|63&a)-65536;e[i++]=String.fromCharCode(55296+(c>>10)),e[i++]=String.fromCharCode(56320+(1023&c))}else{const r=t[n++],o=t[n++];e[i++]=String.fromCharCode((15&s)<<12|(63&r)<<6|63&o)}}return e.join("")},c={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"===typeof atob,encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let s=0;s<t.length;s+=3){const e=t[s],r=s+1<t.length,o=r?t[s+1]:0,a=s+2<t.length,c=a?t[s+2]:0,l=e>>2,h=(3&e)<<4|o>>4;let u=(15&o)<<2|c>>6,d=63&c;a||(d=64,r||(u=64)),i.push(n[l],n[h],n[u],n[d])}return i.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(o(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):a(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let s=0;s<t.length;){const e=n[t.charAt(s++)],r=s<t.length,o=r?n[t.charAt(s)]:0;++s;const a=s<t.length,c=a?n[t.charAt(s)]:64;++s;const h=s<t.length,u=h?n[t.charAt(s)]:64;if(++s,null==e||null==o||null==c||null==u)throw new l;const d=e<<2|o>>4;if(i.push(d),64!==c){const t=o<<4&240|c>>2;if(i.push(t),64!==u){const t=c<<6&192|u;i.push(t)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class l extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const h=function(t){const e=o(t);return c.encodeByteArray(e,!0)},u=function(t){return h(t).replace(/\./g,"")},d=function(t){try{return c.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function f(t){return p(void 0,t)}function p(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:void 0===t&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)e.hasOwnProperty(n)&&g(n)&&(t[n]=p(t[n],e[n]));return t}function g(t){return"__proto__"!==t}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function m(){if("undefined"!==typeof self)return self;if("undefined"!==typeof window)return window;if("undefined"!==typeof n.g)return n.g;throw new Error("Unable to locate global object.")}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const y=()=>m().__FIREBASE_DEFAULTS__,v=()=>{if("undefined"===typeof process)return;const t={NODE_ENV:"production",BASE_URL:"/test/"}.__FIREBASE_DEFAULTS__;return t?JSON.parse(t):void 0},_=()=>{if("undefined"===typeof document)return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(n){return}const e=t&&d(t[1]);return e&&JSON.parse(e)},b=()=>{try{return y()||v()||_()}catch(t){return void console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`)}},w=t=>{var e,n;return null===(n=null===(e=b())||void 0===e?void 0:e.emulatorHosts)||void 0===n?void 0:n[t]},T=t=>{const e=w(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const i=parseInt(e.substring(n+1),10);return"["===e[0]?[e.substring(1,n-1),i]:[e.substring(0,n),i]},x=()=>{var t;return null===(t=b())||void 0===t?void 0:t.config},E=t=>{var e;return null===(e=b())||void 0===e?void 0:e[`_${t}`]};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class C{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise(((t,e)=>{this.resolve=t,this.reject=e}))}wrapCallback(t){return(e,n)=>{e?this.reject(e):this.resolve(n),"function"===typeof t&&(this.promise.catch((()=>{})),1===t.length?t(e):t(e,n))}}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function I(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},i=e||"demo-project",s=t.iat||0,r=t.sub||t.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${i}`,aud:i,iat:s,exp:s+3600,auth_time:s,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[u(JSON.stringify(n)),u(JSON.stringify(o)),a].join(".")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function S(){return"undefined"!==typeof navigator&&"string"===typeof navigator["userAgent"]?navigator["userAgent"]:""}function k(){return"undefined"!==typeof window&&!!(window["cordova"]||window["phonegap"]||window["PhoneGap"])&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(S())}function A(){var t;const e=null===(t=b())||void 0===t?void 0:t.forceEnvironment;if("node"===e)return!0;if("browser"===e)return!1;try{return"[object process]"===Object.prototype.toString.call(n.g.process)}catch(i){return!1}}function O(){return"undefined"!==typeof navigator&&"Cloudflare-Workers"===navigator.userAgent}function R(){const t="object"===typeof chrome?chrome.runtime:"object"===typeof browser?browser.runtime:void 0;return"object"===typeof t&&void 0!==t.id}function P(){return"object"===typeof navigator&&"ReactNative"===navigator["product"]}function N(){const t=S();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function D(){return!0===i.NODE_CLIENT||!0===i.NODE_ADMIN}function M(){return!A()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function L(){try{return"object"===typeof indexedDB}catch(t){return!1}}function F(){return new Promise(((t,e)=>{try{let n=!0;const i="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(i);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(i),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var t;e((null===(t=s.error)||void 0===t?void 0:t.message)||"")}}catch(n){e(n)}}))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const U="FirebaseError";class V extends Error{constructor(t,e,n){super(e),this.code=t,this.customData=n,this.name=U,Object.setPrototypeOf(this,V.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,j.prototype.create)}}class j{constructor(t,e,n){this.service=t,this.serviceName=e,this.errors=n}create(t,...e){const n=e[0]||{},i=`${this.service}/${t}`,s=this.errors[t],r=s?z(s,n):"Error",o=`${this.serviceName}: ${r} (${i}).`,a=new V(i,o,n);return a}}function z(t,e){return t.replace(B,((t,n)=>{const i=e[n];return null!=i?String(i):`<${n}?>`}))}const B=/\{\$([^}]+)}/g;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $(t){return JSON.parse(t)}function W(t){return JSON.stringify(t)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const H=function(t){let e={},n={},i={},s="";try{const r=t.split(".");e=$(d(r[0])||""),n=$(d(r[1])||""),s=r[2],i=n["d"]||{},delete n["d"]}catch(r){}return{header:e,claims:n,data:i,signature:s}},q=function(t){const e=H(t),n=e.claims;return!!n&&"object"===typeof n&&n.hasOwnProperty("iat")},K=function(t){const e=H(t).claims;return"object"===typeof e&&!0===e["admin"]};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function G(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function Y(t,e){return Object.prototype.hasOwnProperty.call(t,e)?t[e]:void 0}function Q(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function X(t,e,n){const i={};for(const s in t)Object.prototype.hasOwnProperty.call(t,s)&&(i[s]=e.call(n,t[s],s,t));return i}function J(t,e){if(t===e)return!0;const n=Object.keys(t),i=Object.keys(e);for(const s of n){if(!i.includes(s))return!1;const n=t[s],r=e[s];if(Z(n)&&Z(r)){if(!J(n,r))return!1}else if(n!==r)return!1}for(const s of i)if(!n.includes(s))return!1;return!0}function Z(t){return null!==t&&"object"===typeof t}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function tt(t){const e=[];for(const[n,i]of Object.entries(t))Array.isArray(i)?i.forEach((t=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(t))})):e.push(encodeURIComponent(n)+"="+encodeURIComponent(i));return e.length?"&"+e.join("&"):""}function et(t){const e={},n=t.replace(/^\?/,"").split("&");return n.forEach((t=>{if(t){const[n,i]=t.split("=");e[decodeURIComponent(n)]=decodeURIComponent(i)}})),e}function nt(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class it{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=64,this.pad_[0]=128;for(let t=1;t<this.blockSize;++t)this.pad_[t]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(t,e){e||(e=0);const n=this.W_;if("string"===typeof t)for(let h=0;h<16;h++)n[h]=t.charCodeAt(e)<<24|t.charCodeAt(e+1)<<16|t.charCodeAt(e+2)<<8|t.charCodeAt(e+3),e+=4;else for(let h=0;h<16;h++)n[h]=t[e]<<24|t[e+1]<<16|t[e+2]<<8|t[e+3],e+=4;for(let h=16;h<80;h++){const t=n[h-3]^n[h-8]^n[h-14]^n[h-16];n[h]=4294967295&(t<<1|t>>>31)}let i,s,r=this.chain_[0],o=this.chain_[1],a=this.chain_[2],c=this.chain_[3],l=this.chain_[4];for(let h=0;h<80;h++){h<40?h<20?(i=c^o&(a^c),s=1518500249):(i=o^a^c,s=1859775393):h<60?(i=o&a|c&(o|a),s=2400959708):(i=o^a^c,s=3395469782);const t=(r<<5|r>>>27)+i+l+s+n[h]&4294967295;l=c,c=a,a=4294967295&(o<<30|o>>>2),o=r,r=t}this.chain_[0]=this.chain_[0]+r&4294967295,this.chain_[1]=this.chain_[1]+o&4294967295,this.chain_[2]=this.chain_[2]+a&4294967295,this.chain_[3]=this.chain_[3]+c&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(t,e){if(null==t)return;void 0===e&&(e=t.length);const n=e-this.blockSize;let i=0;const s=this.buf_;let r=this.inbuf_;while(i<e){if(0===r)while(i<=n)this.compress_(t,i),i+=this.blockSize;if("string"===typeof t){while(i<e)if(s[r]=t.charCodeAt(i),++r,++i,r===this.blockSize){this.compress_(s),r=0;break}}else while(i<e)if(s[r]=t[i],++r,++i,r===this.blockSize){this.compress_(s),r=0;break}}this.inbuf_=r,this.total_+=e}digest(){const t=[];let e=8*this.total_;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=255&e,e/=256;this.compress_(this.buf_);let n=0;for(let i=0;i<5;i++)for(let e=24;e>=0;e-=8)t[n]=this.chain_[i]>>e&255,++n;return t}}function st(t,e){const n=new rt(t,e);return n.subscribe.bind(n)}class rt{constructor(t,e){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=e,this.task.then((()=>{t(this)})).catch((t=>{this.error(t)}))}next(t){this.forEachObserver((e=>{e.next(t)}))}error(t){this.forEachObserver((e=>{e.error(t)})),this.close(t)}complete(){this.forEachObserver((t=>{t.complete()})),this.close()}subscribe(t,e,n){let i;if(void 0===t&&void 0===e&&void 0===n)throw new Error("Missing Observer.");i=ot(t,["next","error","complete"])?t:{next:t,error:e,complete:n},void 0===i.next&&(i.next=at),void 0===i.error&&(i.error=at),void 0===i.complete&&(i.complete=at);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then((()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch(t){}})),this.observers.push(i),s}unsubscribeOne(t){void 0!==this.observers&&void 0!==this.observers[t]&&(delete this.observers[t],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let e=0;e<this.observers.length;e++)this.sendOne(e,t)}sendOne(t,e){this.task.then((()=>{if(void 0!==this.observers&&void 0!==this.observers[t])try{e(this.observers[t])}catch(n){"undefined"!==typeof console&&console.error&&console.error(n)}}))}close(t){this.finalized||(this.finalized=!0,void 0!==t&&(this.finalError=t),this.task.then((()=>{this.observers=void 0,this.onNoObservers=void 0})))}}function ot(t,e){if("object"!==typeof t||null===t)return!1;for(const n of e)if(n in t&&"function"===typeof t[n])return!0;return!1}function at(){}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ct(t,e){return`${t} failed: ${e} argument `}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const lt=function(t){const e=[];let n=0;for(let i=0;i<t.length;i++){let r=t.charCodeAt(i);if(r>=55296&&r<=56319){const e=r-55296;i++,s(i<t.length,"Surrogate pair missing trail surrogate.");const n=t.charCodeAt(i)-56320;r=65536+(e<<10)+n}r<128?e[n++]=r:r<2048?(e[n++]=r>>6|192,e[n++]=63&r|128):r<65536?(e[n++]=r>>12|224,e[n++]=r>>6&63|128,e[n++]=63&r|128):(e[n++]=r>>18|240,e[n++]=r>>12&63|128,e[n++]=r>>6&63|128,e[n++]=63&r|128)}return e},ht=function(t){let e=0;for(let n=0;n<t.length;n++){const i=t.charCodeAt(n);i<128?e++:i<2048?e+=2:i>=55296&&i<=56319?(e+=4,n++):e+=3}return e};
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function ut(t){return t&&t._delegate?t._delegate:t}},953:function(t,e,n){"use strict";n.d(e,{BA:function(){return Yt},C4:function(){return I},EW:function(){return ie},Gc:function(){return Pt},IG:function(){return jt},IJ:function(){return Ht},KR:function(){return Wt},Kh:function(){return Rt},Pr:function(){return Xt},R1:function(){return Gt},X2:function(){return u},bl:function(){return S},fE:function(){return Ft},g8:function(){return Mt},hV:function(){return le},hZ:function(){return U},i9:function(){return $t},jr:function(){return l},ju:function(){return Ut},lJ:function(){return zt},lW:function(){return te},o5:function(){return c},qA:function(){return z},u4:function(){return F},uY:function(){return a},ux:function(){return Vt},wB:function(){return ce},yC:function(){return o}});var i=n(33);
/**
* @vue/reactivity v3.5.11
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let s,r;class o{constructor(t=!1){this.detached=t,this._active=!0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=s,!t&&s&&(this.index=(s.scopes||(s.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){let t,e;if(this._isPaused=!0,this.scopes)for(t=0,e=this.scopes.length;t<e;t++)this.scopes[t].pause();for(t=0,e=this.effects.length;t<e;t++)this.effects[t].pause()}}resume(){if(this._active&&this._isPaused){let t,e;if(this._isPaused=!1,this.scopes)for(t=0,e=this.scopes.length;t<e;t++)this.scopes[t].resume();for(t=0,e=this.effects.length;t<e;t++)this.effects[t].resume()}}run(t){if(this._active){const e=s;try{return s=this,t()}finally{s=e}}else 0}on(){s=this}off(){s=this.parent}stop(t){if(this._active){let e,n;for(e=0,n=this.effects.length;e<n;e++)this.effects[e].stop();for(e=0,n=this.cleanups.length;e<n;e++)this.cleanups[e]();if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].stop(!0);if(!this.detached&&this.parent&&!t){const t=this.parent.scopes.pop();t&&t!==this&&(this.parent.scopes[this.index]=t,t.index=this.index)}this.parent=void 0,this._active=!1}}}function a(t){return new o(t)}function c(){return s}function l(t,e=!1){s&&s.cleanups.push(t)}const h=new WeakSet;class u{constructor(t){this.fn=t,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,s&&s.active&&s.effects.push(this)}pause(){this.flags|=64}resume(){64&this.flags&&(this.flags&=-65,h.has(this)&&(h.delete(this),this.trigger()))}notify(){2&this.flags&&!(32&this.flags)||8&this.flags||g(this)}run(){if(!(1&this.flags))return this.fn();this.flags|=2,k(this),v(this);const t=r,e=E;r=this,E=!0;try{return this.fn()}finally{0,_(this),r=t,E=e,this.flags&=-3}}stop(){if(1&this.flags){for(let t=this.deps;t;t=t.nextDep)T(t);this.deps=this.depsTail=void 0,k(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){64&this.flags?h.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){b(this)&&this.run()}get dirty(){return b(this)}}let d,f,p=0;function g(t,e=!1){if(t.flags|=8,e)return t.next=f,void(f=t);t.next=d,d=t}function m(){p++}function y(){if(--p>0)return;if(f){let t=f;f=void 0;while(t){const e=t.next;t.next=void 0,t.flags&=-9,t=e}}let t;while(d){let n=d;d=void 0;while(n){const i=n.next;if(n.next=void 0,n.flags&=-9,1&n.flags)try{n.trigger()}catch(e){t||(t=e)}n=i}}if(t)throw t}function v(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function _(t){let e,n=t.depsTail,i=n;while(i){const t=i.prevDep;-1===i.version?(i===n&&(n=t),T(i),x(i)):e=i,i.dep.activeLink=i.prevActiveLink,i.prevActiveLink=void 0,i=t}t.deps=e,t.depsTail=n}function b(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(w(e.dep.computed)||e.dep.version!==e.version))return!0;return!!t._dirty}function w(t){if(4&t.flags&&!(16&t.flags))return;if(t.flags&=-17,t.globalVersion===A)return;t.globalVersion=A;const e=t.dep;if(t.flags|=2,e.version>0&&!t.isSSR&&t.deps&&!b(t))return void(t.flags&=-3);const n=r,s=E;r=t,E=!0;try{v(t);const n=t.fn(t._value);(0===e.version||(0,i.$H)(n,t._value))&&(t._value=n,e.version++)}catch(o){throw e.version++,o}finally{r=n,E=s,_(t),t.flags&=-3}}function T(t,e=!1){const{dep:n,prevSub:i,nextSub:s}=t;if(i&&(i.nextSub=s,t.prevSub=void 0),s&&(s.prevSub=i,t.nextSub=void 0),n.subs===t&&(n.subs=i),!n.subs&&n.computed){n.computed.flags&=-5;for(let t=n.computed.deps;t;t=t.nextDep)T(t,!0)}e||--n.sc||!n.map||n.map.delete(n.key)}function x(t){const{prevDep:e,nextDep:n}=t;e&&(e.nextDep=n,t.prevDep=void 0),n&&(n.prevDep=e,t.nextDep=void 0)}let E=!0;const C=[];function I(){C.push(E),E=!1}function S(){const t=C.pop();E=void 0===t||t}function k(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const t=r;r=void 0;try{e()}finally{r=t}}}let A=0;class O{constructor(t,e){this.sub=t,this.dep=e,this.version=e.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class R{constructor(t){this.computed=t,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0}track(t){if(!r||!E||r===this.computed)return;let e=this.activeLink;if(void 0===e||e.sub!==r)e=this.activeLink=new O(r,this),r.deps?(e.prevDep=r.depsTail,r.depsTail.nextDep=e,r.depsTail=e):r.deps=r.depsTail=e,P(e);else if(-1===e.version&&(e.version=this.version,e.nextDep)){const t=e.nextDep;t.prevDep=e.prevDep,e.prevDep&&(e.prevDep.nextDep=t),e.prevDep=r.depsTail,e.nextDep=void 0,r.depsTail.nextDep=e,r.depsTail=e,r.deps===e&&(r.deps=t)}return e}trigger(t){this.version++,A++,this.notify(t)}notify(t){m();try{0;for(let t=this.subs;t;t=t.prevSub)t.sub.notify()&&t.sub.dep.notify()}finally{y()}}}function P(t){if(t.dep.sc++,4&t.sub.flags){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let t=e.deps;t;t=t.nextDep)P(t)}const n=t.dep.subs;n!==t&&(t.prevSub=n,n&&(n.nextSub=t)),t.dep.subs=t}}const N=new WeakMap,D=Symbol(""),M=Symbol(""),L=Symbol("");function F(t,e,n){if(E&&r){let e=N.get(t);e||N.set(t,e=new Map);let i=e.get(n);i||(e.set(n,i=new R),i.map=e,i.key=n),i.track()}}function U(t,e,n,s,r,o){const a=N.get(t);if(!a)return void A++;const c=t=>{t&&t.trigger()};if(m(),"clear"===e)a.forEach(c);else{const r=(0,i.cy)(t),o=r&&(0,i.yI)(n);if(r&&"length"===n){const t=Number(s);a.forEach(((e,n)=>{("length"===n||n===L||!(0,i.Bm)(n)&&n>=t)&&c(e)}))}else switch(void 0!==n&&c(a.get(n)),o&&c(a.get(L)),e){case"add":r?o&&c(a.get("length")):(c(a.get(D)),(0,i.CE)(t)&&c(a.get(M)));break;case"delete":r||(c(a.get(D)),(0,i.CE)(t)&&c(a.get(M)));break;case"set":(0,i.CE)(t)&&c(a.get(D));break}}y()}function V(t,e){const n=N.get(t);return n&&n.get(e)}function j(t){const e=Vt(t);return e===t?e:(F(e,"iterate",L),Ft(t)?e:e.map(zt))}function z(t){return F(t=Vt(t),"iterate",L),t}const B={__proto__:null,[Symbol.iterator](){return $(this,Symbol.iterator,zt)},concat(...t){return j(this).concat(...t.map((t=>(0,i.cy)(t)?j(t):t)))},entries(){return $(this,"entries",(t=>(t[1]=zt(t[1]),t)))},every(t,e){return H(this,"every",t,e,void 0,arguments)},filter(t,e){return H(this,"filter",t,e,(t=>t.map(zt)),arguments)},find(t,e){return H(this,"find",t,e,zt,arguments)},findIndex(t,e){return H(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return H(this,"findLast",t,e,zt,arguments)},findLastIndex(t,e){return H(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return H(this,"forEach",t,e,void 0,arguments)},includes(...t){return K(this,"includes",t)},indexOf(...t){return K(this,"indexOf",t)},join(t){return j(this).join(t)},lastIndexOf(...t){return K(this,"lastIndexOf",t)},map(t,e){return H(this,"map",t,e,void 0,arguments)},pop(){return G(this,"pop")},push(...t){return G(this,"push",t)},reduce(t,...e){return q(this,"reduce",t,e)},reduceRight(t,...e){return q(this,"reduceRight",t,e)},shift(){return G(this,"shift")},some(t,e){return H(this,"some",t,e,void 0,arguments)},splice(...t){return G(this,"splice",t)},toReversed(){return j(this).toReversed()},toSorted(t){return j(this).toSorted(t)},toSpliced(...t){return j(this).toSpliced(...t)},unshift(...t){return G(this,"unshift",t)},values(){return $(this,"values",zt)}};function $(t,e,n){const i=z(t),s=i[e]();return i===t||Ft(t)||(s._next=s.next,s.next=()=>{const t=s._next();return t.value&&(t.value=n(t.value)),t}),s}const W=Array.prototype;function H(t,e,n,i,s,r){const o=z(t),a=o!==t&&!Ft(t),c=o[e];if(c!==W[e]){const e=c.apply(t,r);return a?zt(e):e}let l=n;o!==t&&(a?l=function(e,i){return n.call(this,zt(e),i,t)}:n.length>2&&(l=function(e,i){return n.call(this,e,i,t)}));const h=c.call(o,l,i);return a&&s?s(h):h}function q(t,e,n,i){const s=z(t);let r=n;return s!==t&&(Ft(t)?n.length>3&&(r=function(e,i,s){return n.call(this,e,i,s,t)}):r=function(e,i,s){return n.call(this,e,zt(i),s,t)}),s[e](r,...i)}function K(t,e,n){const i=Vt(t);F(i,"iterate",L);const s=i[e](...n);return-1!==s&&!1!==s||!Ut(n[0])?s:(n[0]=Vt(n[0]),i[e](...n))}function G(t,e,n=[]){I(),m();const i=Vt(t)[e].apply(t,n);return y(),S(),i}const Y=(0,i.pD)("__proto__,__v_isRef,__isVue"),Q=new Set(Object.getOwnPropertyNames(Symbol).filter((t=>"arguments"!==t&&"caller"!==t)).map((t=>Symbol[t])).filter(i.Bm));function X(t){(0,i.Bm)(t)||(t=String(t));const e=Vt(this);return F(e,"has",t),e.hasOwnProperty(t)}class J{constructor(t=!1,e=!1){this._isReadonly=t,this._isShallow=e}get(t,e,n){const s=this._isReadonly,r=this._isShallow;if("__v_isReactive"===e)return!s;if("__v_isReadonly"===e)return s;if("__v_isShallow"===e)return r;if("__v_raw"===e)return n===(s?r?kt:St:r?It:Ct).get(t)||Object.getPrototypeOf(t)===Object.getPrototypeOf(n)?t:void 0;const o=(0,i.cy)(t);if(!s){let t;if(o&&(t=B[e]))return t;if("hasOwnProperty"===e)return X}const a=Reflect.get(t,e,$t(t)?t:n);return((0,i.Bm)(e)?Q.has(e):Y(e))?a:(s||F(t,"get",e),r?a:$t(a)?o&&(0,i.yI)(e)?a:a.value:(0,i.Gv)(a)?s?Nt(a):Rt(a):a)}}class Z extends J{constructor(t=!1){super(!1,t)}set(t,e,n,s){let r=t[e];if(!this._isShallow){const e=Lt(r);if(Ft(n)||Lt(n)||(r=Vt(r),n=Vt(n)),!(0,i.cy)(t)&&$t(r)&&!$t(n))return!e&&(r.value=n,!0)}const o=(0,i.cy)(t)&&(0,i.yI)(e)?Number(e)<t.length:(0,i.$3)(t,e),a=Reflect.set(t,e,n,$t(t)?t:s);return t===Vt(s)&&(o?(0,i.$H)(n,r)&&U(t,"set",e,n,r):U(t,"add",e,n)),a}deleteProperty(t,e){const n=(0,i.$3)(t,e),s=t[e],r=Reflect.deleteProperty(t,e);return r&&n&&U(t,"delete",e,void 0,s),r}has(t,e){const n=Reflect.has(t,e);return(0,i.Bm)(e)&&Q.has(e)||F(t,"has",e),n}ownKeys(t){return F(t,"iterate",(0,i.cy)(t)?"length":D),Reflect.ownKeys(t)}}class tt extends J{constructor(t=!1){super(!0,t)}set(t,e){return!0}deleteProperty(t,e){return!0}}const et=new Z,nt=new tt,it=new Z(!0),st=t=>t,rt=t=>Reflect.getPrototypeOf(t);function ot(t,e,n=!1,s=!1){t=t["__v_raw"];const r=Vt(t),o=Vt(e);n||((0,i.$H)(e,o)&&F(r,"get",e),F(r,"get",o));const{has:a}=rt(r),c=s?st:n?Bt:zt;return a.call(r,e)?c(t.get(e)):a.call(r,o)?c(t.get(o)):void(t!==r&&t.get(e))}function at(t,e=!1){const n=this["__v_raw"],s=Vt(n),r=Vt(t);return e||((0,i.$H)(t,r)&&F(s,"has",t),F(s,"has",r)),t===r?n.has(t):n.has(t)||n.has(r)}function ct(t,e=!1){return t=t["__v_raw"],!e&&F(Vt(t),"iterate",D),Reflect.get(t,"size",t)}function lt(t,e=!1){e||Ft(t)||Lt(t)||(t=Vt(t));const n=Vt(this),i=rt(n),s=i.has.call(n,t);return s||(n.add(t),U(n,"add",t,t)),this}function ht(t,e,n=!1){n||Ft(e)||Lt(e)||(e=Vt(e));const s=Vt(this),{has:r,get:o}=rt(s);let a=r.call(s,t);a||(t=Vt(t),a=r.call(s,t));const c=o.call(s,t);return s.set(t,e),a?(0,i.$H)(e,c)&&U(s,"set",t,e,c):U(s,"add",t,e),this}function ut(t){const e=Vt(this),{has:n,get:i}=rt(e);let s=n.call(e,t);s||(t=Vt(t),s=n.call(e,t));const r=i?i.call(e,t):void 0,o=e.delete(t);return s&&U(e,"delete",t,void 0,r),o}function dt(){const t=Vt(this),e=0!==t.size,n=void 0,i=t.clear();return e&&U(t,"clear",void 0,void 0,n),i}function ft(t,e){return function(n,i){const s=this,r=s["__v_raw"],o=Vt(r),a=e?st:t?Bt:zt;return!t&&F(o,"iterate",D),r.forEach(((t,e)=>n.call(i,a(t),a(e),s)))}}function pt(t,e,n){return function(...s){const r=this["__v_raw"],o=Vt(r),a=(0,i.CE)(o),c="entries"===t||t===Symbol.iterator&&a,l="keys"===t&&a,h=r[t](...s),u=n?st:e?Bt:zt;return!e&&F(o,"iterate",l?M:D),{next(){const{value:t,done:e}=h.next();return e?{value:t,done:e}:{value:c?[u(t[0]),u(t[1])]:u(t),done:e}},[Symbol.iterator](){return this}}}}function gt(t){return function(...e){return"delete"!==t&&("clear"===t?void 0:this)}}function mt(){const t={get(t){return ot(this,t)},get size(){return ct(this)},has:at,add:lt,set:ht,delete:ut,clear:dt,forEach:ft(!1,!1)},e={get(t){return ot(this,t,!1,!0)},get size(){return ct(this)},has:at,add(t){return lt.call(this,t,!0)},set(t,e){return ht.call(this,t,e,!0)},delete:ut,clear:dt,forEach:ft(!1,!0)},n={get(t){return ot(this,t,!0)},get size(){return ct(this,!0)},has(t){return at.call(this,t,!0)},add:gt("add"),set:gt("set"),delete:gt("delete"),clear:gt("clear"),forEach:ft(!0,!1)},i={get(t){return ot(this,t,!0,!0)},get size(){return ct(this,!0)},has(t){return at.call(this,t,!0)},add:gt("add"),set:gt("set"),delete:gt("delete"),clear:gt("clear"),forEach:ft(!0,!0)},s=["keys","values","entries",Symbol.iterator];return s.forEach((s=>{t[s]=pt(s,!1,!1),n[s]=pt(s,!0,!1),e[s]=pt(s,!1,!0),i[s]=pt(s,!0,!0)})),[t,n,e,i]}const[yt,vt,_t,bt]=mt();function wt(t,e){const n=e?t?bt:_t:t?vt:yt;return(e,s,r)=>"__v_isReactive"===s?!t:"__v_isReadonly"===s?t:"__v_raw"===s?e:Reflect.get((0,i.$3)(n,s)&&s in e?n:e,s,r)}const Tt={get:wt(!1,!1)},xt={get:wt(!1,!0)},Et={get:wt(!0,!1)};const Ct=new WeakMap,It=new WeakMap,St=new WeakMap,kt=new WeakMap;function At(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Ot(t){return t["__v_skip"]||!Object.isExtensible(t)?0:At((0,i.Zf)(t))}function Rt(t){return Lt(t)?t:Dt(t,!1,et,Tt,Ct)}function Pt(t){return Dt(t,!1,it,xt,It)}function Nt(t){return Dt(t,!0,nt,Et,St)}function Dt(t,e,n,s,r){if(!(0,i.Gv)(t))return t;if(t["__v_raw"]&&(!e||!t["__v_isReactive"]))return t;const o=r.get(t);if(o)return o;const a=Ot(t);if(0===a)return t;const c=new Proxy(t,2===a?s:n);return r.set(t,c),c}function Mt(t){return Lt(t)?Mt(t["__v_raw"]):!(!t||!t["__v_isReactive"])}function Lt(t){return!(!t||!t["__v_isReadonly"])}function Ft(t){return!(!t||!t["__v_isShallow"])}function Ut(t){return!!t&&!!t["__v_raw"]}function Vt(t){const e=t&&t["__v_raw"];return e?Vt(e):t}function jt(t){return!(0,i.$3)(t,"__v_skip")&&Object.isExtensible(t)&&(0,i.yQ)(t,"__v_skip",!0),t}const zt=t=>(0,i.Gv)(t)?Rt(t):t,Bt=t=>(0,i.Gv)(t)?Nt(t):t;function $t(t){return!!t&&!0===t["__v_isRef"]}function Wt(t){return qt(t,!1)}function Ht(t){return qt(t,!0)}function qt(t,e){return $t(t)?t:new Kt(t,e)}class Kt{constructor(t,e){this.dep=new R,this["__v_isRef"]=!0,this["__v_isShallow"]=!1,this._rawValue=e?t:Vt(t),this._value=e?t:zt(t),this["__v_isShallow"]=e}get value(){return this.dep.track(),this._value}set value(t){const e=this._rawValue,n=this["__v_isShallow"]||Ft(t)||Lt(t);t=n?t:Vt(t),(0,i.$H)(t,e)&&(this._rawValue=t,this._value=n?t:zt(t),this.dep.trigger())}}function Gt(t){return $t(t)?t.value:t}function Yt(t){return(0,i.Tn)(t)?t():Gt(t)}const Qt={get:(t,e,n)=>"__v_raw"===e?t:Gt(Reflect.get(t,e,n)),set:(t,e,n,i)=>{const s=t[e];return $t(s)&&!$t(n)?(s.value=n,!0):Reflect.set(t,e,n,i)}};function Xt(t){return Mt(t)?t:new Proxy(t,Qt)}class Jt{constructor(t,e,n){this._object=t,this._key=e,this._defaultValue=n,this["__v_isRef"]=!0,this._value=void 0}get value(){const t=this._object[this._key];return this._value=void 0===t?this._defaultValue:t}set value(t){this._object[this._key]=t}get dep(){return V(Vt(this._object),this._key)}}class Zt{constructor(t){this._getter=t,this["__v_isRef"]=!0,this["__v_isReadonly"]=!0,this._value=void 0}get value(){return this._value=this._getter()}}function te(t,e,n){return $t(t)?t:(0,i.Tn)(t)?new Zt(t):(0,i.Gv)(t)&&arguments.length>1?ee(t,e,n):Wt(t)}function ee(t,e,n){const i=t[e];return $t(i)?i:new Jt(t,e,n)}class ne{constructor(t,e,n){this.fn=t,this.setter=e,this._value=void 0,this.dep=new R(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=A-1,this.next=void 0,this.effect=this,this["__v_isReadonly"]=!e,this.isSSR=n}notify(){if(this.flags|=16,!(8&this.flags||r===this))return g(this,!0),!0}get value(){const t=this.dep.track();return w(this),t&&(t.version=this.dep.version),this._value}set value(t){this.setter&&this.setter(t)}}function ie(t,e,n=!1){let s,r;(0,i.Tn)(t)?s=t:(s=t.get,r=t.set);const o=new ne(s,r,n);return o}const se={},re=new WeakMap;let oe;function ae(t,e=!1,n=oe){if(n){let e=re.get(n);e||re.set(n,e=[]),e.push(t)}else 0}function ce(t,e,n=i.MZ){const{immediate:s,deep:r,once:o,scheduler:a,augmentJob:l,call:h}=n,d=t=>r?t:Ft(t)||!1===r||0===r?le(t,1):le(t);let f,p,g,m,y=!1,v=!1;if($t(t)?(p=()=>t.value,y=Ft(t)):Mt(t)?(p=()=>d(t),y=!0):(0,i.cy)(t)?(v=!0,y=t.some((t=>Mt(t)||Ft(t))),p=()=>t.map((t=>$t(t)?t.value:Mt(t)?d(t):(0,i.Tn)(t)?h?h(t,2):t():void 0))):p=(0,i.Tn)(t)?e?h?()=>h(t,2):t:()=>{if(g){I();try{g()}finally{S()}}const e=oe;oe=f;try{return h?h(t,3,[m]):t(m)}finally{oe=e}}:i.tE,e&&r){const t=p,e=!0===r?1/0:r;p=()=>le(t(),e)}const _=c(),b=()=>{f.stop(),_&&(0,i.TF)(_.effects,f)};if(o&&e){const t=e;e=(...e)=>{t(...e),b()}}let w=v?new Array(t.length).fill(se):se;const T=t=>{if(1&f.flags&&(f.dirty||t))if(e){const t=f.run();if(r||y||(v?t.some(((t,e)=>(0,i.$H)(t,w[e]))):(0,i.$H)(t,w))){g&&g();const n=oe;oe=f;try{const n=[t,w===se?void 0:v&&w[0]===se?[]:w,m];h?h(e,3,n):e(...n),w=t}finally{oe=n}}}else f.run()};return l&&l(T),f=new u(p),f.scheduler=a?()=>a(T,!1):T,m=t=>ae(t,!1,f),g=f.onStop=()=>{const t=re.get(f);if(t){if(h)h(t,4);else for(const e of t)e();re.delete(f)}},e?s?T(!0):w=f.run():a?a(T.bind(null,!0),!0):f.run(),b.pause=f.pause.bind(f),b.resume=f.resume.bind(f),b.stop=b,b}function le(t,e=1/0,n){if(e<=0||!(0,i.Gv)(t)||t["__v_skip"])return t;if(n=n||new Set,n.has(t))return t;if(n.add(t),e--,$t(t))le(t.value,e,n);else if((0,i.cy)(t))for(let i=0;i<t.length;i++)le(t[i],e,n);else if((0,i.vM)(t)||(0,i.CE)(t))t.forEach((t=>{le(t,e,n)}));else if((0,i.Qd)(t)){for(const i in t)le(t[i],e,n);for(const i of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,i)&&le(t[i],e,n)}return t}},641:function(t,e,n){"use strict";n.d(e,{$u:function(){return rt},CE:function(){return Ge},Df:function(){return z},EW:function(){return Mn},FK:function(){return Fe},Gy:function(){return M},K9:function(){return he},Lk:function(){return tn},MZ:function(){return j},OW:function(){return V},Q3:function(){return an},QP:function(){return F},SS:function(){return ct},WQ:function(){return $t},Wv:function(){return Ye},bF:function(){return en},bo:function(){return A},dY:function(){return m},eW:function(){return on},g2:function(){return ft},h:function(){return Ln},hi:function(){return at},nI:function(){return yn},pI:function(){return yt},pM:function(){return B},qL:function(){return o},rE:function(){return Fn},sV:function(){return it},uX:function(){return $e},wB:function(){return we}});var i=n(953),s=n(33);function r(t,e,n,i){try{return i?t(...i):t()}catch(s){a(s,e,n)}}function o(t,e,n,i){if((0,s.Tn)(t)){const o=r(t,e,n,i);return o&&(0,s.yL)(o)&&o.catch((t=>{a(t,e,n)})),o}if((0,s.cy)(t)){const s=[];for(let r=0;r<t.length;r++)s.push(o(t[r],e,n,i));return s}}function a(t,e,n,o=!0){const a=e?e.vnode:null,{errorHandler:l,throwUnhandledErrorInProduction:h}=e&&e.appContext.config||s.MZ;if(e){let s=e.parent;const o=e.proxy,a=`https://vuejs.org/error-reference/#runtime-${n}`;while(s){const e=s.ec;if(e)for(let n=0;n<e.length;n++)if(!1===e[n](t,o,a))return;s=s.parent}if(l)return(0,i.C4)(),r(l,null,10,[t,o,a]),void(0,i.bl)()}c(t,n,a,o,h)}function c(t,e,n,i=!0,s=!1){if(s)throw t;console.error(t)}const l=[];let h=-1;const u=[];let d=null,f=0;const p=Promise.resolve();let g=null;function m(t){const e=g||p;return t?e.then(this?t.bind(this):t):e}function y(t){let e=h+1,n=l.length;while(e<n){const i=e+n>>>1,s=l[i],r=x(s);r<t||r===t&&2&s.flags?e=i+1:n=i}return e}function v(t){if(!(1&t.flags)){const e=x(t),n=l[l.length-1];!n||!(2&t.flags)&&e>=x(n)?l.push(t):l.splice(y(e),0,t),t.flags|=1,_()}}function _(){g||(g=p.then(E))}function b(t){(0,s.cy)(t)?u.push(...t):d&&-1===t.id?d.splice(f+1,0,t):1&t.flags||(u.push(t),t.flags|=1),_()}function w(t,e,n=h+1){for(0;n<l.length;n++){const e=l[n];if(e&&2&e.flags){if(t&&e.id!==t.uid)continue;0,l.splice(n,1),n--,4&e.flags&&(e.flags&=-2),e(),4&e.flags||(e.flags&=-2)}}}function T(t){if(u.length){const t=[...new Set(u)].sort(((t,e)=>x(t)-x(e)));if(u.length=0,d)return void d.push(...t);for(d=t,f=0;f<d.length;f++){const t=d[f];0,4&t.flags&&(t.flags&=-2),8&t.flags||t(),t.flags&=-2}d=null,f=0}}const x=t=>null==t.id?2&t.flags?-1:1/0:t.id;function E(t){s.tE;try{for(h=0;h<l.length;h++){const t=l[h];!t||8&t.flags||(4&t.flags&&(t.flags&=-2),r(t,t.i,t.i?15:14),4&t.flags||(t.flags&=-2))}}finally{for(;h<l.length;h++){const t=l[h];t&&(t.flags&=-2)}h=-1,l.length=0,T(t),g=null,(l.length||u.length)&&E(t)}}let C=null,I=null;function S(t){const e=C;return C=t,I=t&&t.type.__scopeId||null,e}function k(t,e=C,n){if(!e)return t;if(t._n)return t;const i=(...n)=>{i._d&&qe(-1);const s=S(e);let r;try{r=t(...n)}finally{S(s),i._d&&qe(1)}return r};return i._n=!0,i._c=!0,i._d=!0,i}function A(t,e){if(null===C)return t;const n=Pn(C),r=t.dirs||(t.dirs=[]);for(let o=0;o<e.length;o++){let[t,a,c,l=s.MZ]=e[o];t&&((0,s.Tn)(t)&&(t={mounted:t,updated:t}),t.deep&&(0,i.hV)(a),r.push({dir:t,instance:n,value:a,oldValue:void 0,arg:c,modifiers:l}))}return t}function O(t,e,n,s){const r=t.dirs,a=e&&e.dirs;for(let c=0;c<r.length;c++){const l=r[c];a&&(l.oldValue=a[c].value);let h=l.dir[s];h&&((0,i.C4)(),o(h,n,8,[t.el,l,t,e]),(0,i.bl)())}}const R=Symbol("_vte"),P=t=>t.__isTeleport;const N=Symbol("_leaveCb"),D=Symbol("_enterCb");function M(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return it((()=>{t.isMounted=!0})),ot((()=>{t.isUnmounting=!0})),t}const L=[Function,Array],F={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:L,onEnter:L,onAfterEnter:L,onEnterCancelled:L,onBeforeLeave:L,onLeave:L,onAfterLeave:L,onLeaveCancelled:L,onBeforeAppear:L,onAppear:L,onAfterAppear:L,onAppearCancelled:L};function U(t,e){const{leavingVNodes:n}=t;let i=n.get(e.type);return i||(i=Object.create(null),n.set(e.type,i)),i}function V(t,e,n,i,r){const{appear:a,mode:c,persisted:l=!1,onBeforeEnter:h,onEnter:u,onAfterEnter:d,onEnterCancelled:f,onBeforeLeave:p,onLeave:g,onAfterLeave:m,onLeaveCancelled:y,onBeforeAppear:v,onAppear:_,onAfterAppear:b,onAppearCancelled:w}=e,T=String(t.key),x=U(n,t),E=(t,e)=>{t&&o(t,i,9,e)},C=(t,e)=>{const n=e[1];E(t,e),(0,s.cy)(t)?t.every((t=>t.length<=1))&&n():t.length<=1&&n()},I={mode:c,persisted:l,beforeEnter(e){let i=h;if(!n.isMounted){if(!a)return;i=v||h}e[N]&&e[N](!0);const s=x[T];s&&Xe(t,s)&&s.el[N]&&s.el[N](),E(i,[e])},enter(t){let e=u,i=d,s=f;if(!n.isMounted){if(!a)return;e=_||u,i=b||d,s=w||f}let r=!1;const o=t[D]=e=>{r||(r=!0,E(e?s:i,[t]),I.delayedLeave&&I.delayedLeave(),t[D]=void 0)};e?C(e,[t,o]):o()},leave(e,i){const s=String(t.key);if(e[D]&&e[D](!0),n.isUnmounting)return i();E(p,[e]);let r=!1;const o=e[N]=n=>{r||(r=!0,i(),E(n?y:m,[e]),e[N]=void 0,x[s]===t&&delete x[s])};x[s]=t,g?C(g,[e,o]):o()},clone(t){const s=V(t,e,n,i,r);return r&&r(s),s}};return I}function j(t,e){6&t.shapeFlag&&t.component?(t.transition=e,j(t.component.subTree,e)):128&t.shapeFlag?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function z(t,e=!1,n){let i=[],s=0;for(let r=0;r<t.length;r++){let o=t[r];const a=null==n?o.key:String(n)+String(null!=o.key?o.key:r);o.type===Fe?(128&o.patchFlag&&s++,i=i.concat(z(o.children,e,a))):(e||o.type!==Ve)&&i.push(null!=a?rn(o,{key:a}):o)}if(s>1)for(let r=0;r<i.length;r++)i[r].patchFlag=-2;return i}
/*! #__NO_SIDE_EFFECTS__ */function B(t,e){return(0,s.Tn)(t)?(()=>(0,s.X$)({name:t.name},e,{setup:t}))():t}function $(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}function W(t,e,n,o,a=!1){if((0,s.cy)(t))return void t.forEach(((t,i)=>W(t,e&&((0,s.cy)(e)?e[i]:e),n,o,a)));if(H(o)&&!a)return;const c=4&o.shapeFlag?Pn(o.component):o.el,l=a?null:c,{i:h,r:u}=t;const d=e&&e.r,f=h.refs===s.MZ?h.refs={}:h.refs,p=h.setupState,g=(0,i.ux)(p),m=p===s.MZ?()=>!1:t=>(0,s.$3)(g,t);if(null!=d&&d!==u&&((0,s.Kg)(d)?(f[d]=null,m(d)&&(p[d]=null)):(0,i.i9)(d)&&(d.value=null)),(0,s.Tn)(u))r(u,h,12,[l,f]);else{const e=(0,s.Kg)(u),r=(0,i.i9)(u);if(e||r){const i=()=>{if(t.f){const n=e?m(u)?p[u]:f[u]:u.value;a?(0,s.cy)(n)&&(0,s.TF)(n,c):(0,s.cy)(n)?n.includes(c)||n.push(c):e?(f[u]=[c],m(u)&&(p[u]=f[u])):(u.value=[c],t.k&&(f[t.k]=u.value))}else e?(f[u]=l,m(u)&&(p[u]=l)):r&&(u.value=l,t.k&&(f[t.k]=l))};l?(i.id=-1,le(i,n)):i()}else 0}}const H=t=>!!t.type.__asyncLoader
/*! #__NO_SIDE_EFFECTS__ */;const q=t=>t.type.__isKeepAlive;RegExp,RegExp;function K(t,e){return(0,s.cy)(t)?t.some((t=>K(t,e))):(0,s.Kg)(t)?t.split(",").includes(e):!!(0,s.gd)(t)&&(t.lastIndex=0,t.test(e))}function G(t,e){Q(t,"a",e)}function Y(t,e){Q(t,"da",e)}function Q(t,e,n=mn){const i=t.__wdc||(t.__wdc=()=>{let e=n;while(e){if(e.isDeactivated)return;e=e.parent}return t()});if(tt(e,i,n),n){let t=n.parent;while(t&&t.parent)q(t.parent.vnode)&&X(i,e,n,t),t=t.parent}}function X(t,e,n,i){const r=tt(e,t,i,!0);at((()=>{(0,s.TF)(i[e],r)}),n)}function J(t){t.shapeFlag&=-257,t.shapeFlag&=-513}function Z(t){return 128&t.shapeFlag?t.ssContent:t}function tt(t,e,n=mn,s=!1){if(n){const r=n[t]||(n[t]=[]),a=e.__weh||(e.__weh=(...s)=>{(0,i.C4)();const r=bn(n),a=o(e,n,t,s);return r(),(0,i.bl)(),a});return s?r.unshift(a):r.push(a),a}}const et=t=>(e,n=mn)=>{Cn&&"sp"!==t||tt(t,((...t)=>e(...t)),n)},nt=et("bm"),it=et("m"),st=et("bu"),rt=et("u"),ot=et("bum"),at=et("um"),ct=et("sp"),lt=et("rtg"),ht=et("rtc");function ut(t,e=mn){tt("ec",t,e)}const dt="components";function ft(t,e){return gt(dt,t,!0,e)||t}const pt=Symbol.for("v-ndc");function gt(t,e,n=!0,i=!1){const r=C||mn;if(r){const n=r.type;if(t===dt){const t=Nn(n,!1);if(t&&(t===e||t===(0,s.PT)(e)||t===(0,s.ZH)((0,s.PT)(e))))return n}const o=mt(r[t]||n[t],e)||mt(r.appContext[t],e);return!o&&i?n:o}}function mt(t,e){return t&&(t[e]||t[(0,s.PT)(e)]||t[(0,s.ZH)((0,s.PT)(e))])}function yt(t,e,n,r){let o;const a=n&&n[r],c=(0,s.cy)(t);if(c||(0,s.Kg)(t)){const n=c&&(0,i.g8)(t);let s=!1;n&&(s=!(0,i.fE)(t),t=(0,i.qA)(t)),o=new Array(t.length);for(let r=0,c=t.length;r<c;r++)o[r]=e(s?(0,i.lJ)(t[r]):t[r],r,void 0,a&&a[r])}else if("number"===typeof t){0,o=new Array(t);for(let n=0;n<t;n++)o[n]=e(n+1,n,void 0,a&&a[n])}else if((0,s.Gv)(t))if(t[Symbol.iterator])o=Array.from(t,((t,n)=>e(t,n,void 0,a&&a[n])));else{const n=Object.keys(t);o=new Array(n.length);for(let i=0,s=n.length;i<s;i++){const s=n[i];o[i]=e(t[s],s,i,a&&a[i])}}else o=[];return n&&(n[r]=o),o}const vt=t=>t?Tn(t)?Pn(t):vt(t.parent):null,_t=(0,s.X$)(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>vt(t.parent),$root:t=>vt(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>kt(t),$forceUpdate:t=>t.f||(t.f=()=>{v(t.update)}),$nextTick:t=>t.n||(t.n=m.bind(t.proxy)),$watch:t=>xe.bind(t)}),bt=(t,e)=>t!==s.MZ&&!t.__isScriptSetup&&(0,s.$3)(t,e),wt={get({_:t},e){if("__v_skip"===e)return!0;const{ctx:n,setupState:r,data:o,props:a,accessCache:c,type:l,appContext:h}=t;let u;if("$"!==e[0]){const i=c[e];if(void 0!==i)switch(i){case 1:return r[e];case 2:return o[e];case 4:return n[e];case 3:return a[e]}else{if(bt(r,e))return c[e]=1,r[e];if(o!==s.MZ&&(0,s.$3)(o,e))return c[e]=2,o[e];if((u=t.propsOptions[0])&&(0,s.$3)(u,e))return c[e]=3,a[e];if(n!==s.MZ&&(0,s.$3)(n,e))return c[e]=4,n[e];xt&&(c[e]=0)}}const d=_t[e];let f,p;return d?("$attrs"===e&&(0,i.u4)(t.attrs,"get",""),d(t)):(f=l.__cssModules)&&(f=f[e])?f:n!==s.MZ&&(0,s.$3)(n,e)?(c[e]=4,n[e]):(p=h.config.globalProperties,(0,s.$3)(p,e)?p[e]:void 0)},set({_:t},e,n){const{data:i,setupState:r,ctx:o}=t;return bt(r,e)?(r[e]=n,!0):i!==s.MZ&&(0,s.$3)(i,e)?(i[e]=n,!0):!(0,s.$3)(t.props,e)&&(("$"!==e[0]||!(e.slice(1)in t))&&(o[e]=n,!0))},has({_:{data:t,setupState:e,accessCache:n,ctx:i,appContext:r,propsOptions:o}},a){let c;return!!n[a]||t!==s.MZ&&(0,s.$3)(t,a)||bt(e,a)||(c=o[0])&&(0,s.$3)(c,a)||(0,s.$3)(i,a)||(0,s.$3)(_t,a)||(0,s.$3)(r.config.globalProperties,a)},defineProperty(t,e,n){return null!=n.get?t._.accessCache[e]=0:(0,s.$3)(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function Tt(t){return(0,s.cy)(t)?t.reduce(((t,e)=>(t[e]=null,t)),{}):t}let xt=!0;function Et(t){const e=kt(t),n=t.proxy,r=t.ctx;xt=!1,e.beforeCreate&&It(e.beforeCreate,t,"bc");const{data:o,computed:a,methods:c,watch:l,provide:h,inject:u,created:d,beforeMount:f,mounted:p,beforeUpdate:g,updated:m,activated:y,deactivated:v,beforeDestroy:_,beforeUnmount:b,destroyed:w,unmounted:T,render:x,renderTracked:E,renderTriggered:C,errorCaptured:I,serverPrefetch:S,expose:k,inheritAttrs:A,components:O,directives:R,filters:P}=e,N=null;if(u&&Ct(u,r,N),c)for(const i in c){const t=c[i];(0,s.Tn)(t)&&(r[i]=t.bind(n))}if(o){0;const e=o.call(n,n);0,(0,s.Gv)(e)&&(t.data=(0,i.Kh)(e))}if(xt=!0,a)for(const i in a){const t=a[i],e=(0,s.Tn)(t)?t.bind(n,n):(0,s.Tn)(t.get)?t.get.bind(n,n):s.tE;0;const o=!(0,s.Tn)(t)&&(0,s.Tn)(t.set)?t.set.bind(n):s.tE,c=Mn({get:e,set:o});Object.defineProperty(r,i,{enumerable:!0,configurable:!0,get:()=>c.value,set:t=>c.value=t})}if(l)for(const i in l)St(l[i],r,n,i);if(h){const t=(0,s.Tn)(h)?h.call(n):h;Reflect.ownKeys(t).forEach((e=>{Bt(e,t[e])}))}function D(t,e){(0,s.cy)(e)?e.forEach((e=>t(e.bind(n)))):e&&t(e.bind(n))}if(d&&It(d,t,"c"),D(nt,f),D(it,p),D(st,g),D(rt,m),D(G,y),D(Y,v),D(ut,I),D(ht,E),D(lt,C),D(ot,b),D(at,T),D(ct,S),(0,s.cy)(k))if(k.length){const e=t.exposed||(t.exposed={});k.forEach((t=>{Object.defineProperty(e,t,{get:()=>n[t],set:e=>n[t]=e})}))}else t.exposed||(t.exposed={});x&&t.render===s.tE&&(t.render=x),null!=A&&(t.inheritAttrs=A),O&&(t.components=O),R&&(t.directives=R),S&&$(t)}function Ct(t,e,n=s.tE){(0,s.cy)(t)&&(t=Nt(t));for(const r in t){const n=t[r];let o;o=(0,s.Gv)(n)?"default"in n?$t(n.from||r,n.default,!0):$t(n.from||r):$t(n),(0,i.i9)(o)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>o.value,set:t=>o.value=t}):e[r]=o}}function It(t,e,n){o((0,s.cy)(t)?t.map((t=>t.bind(e.proxy))):t.bind(e.proxy),e,n)}function St(t,e,n,i){let r=i.includes(".")?Ee(n,i):()=>n[i];if((0,s.Kg)(t)){const n=e[t];(0,s.Tn)(n)&&we(r,n)}else if((0,s.Tn)(t))we(r,t.bind(n));else if((0,s.Gv)(t))if((0,s.cy)(t))t.forEach((t=>St(t,e,n,i)));else{const i=(0,s.Tn)(t.handler)?t.handler.bind(n):e[t.handler];(0,s.Tn)(i)&&we(r,i,t)}else 0}function kt(t){const e=t.type,{mixins:n,extends:i}=e,{mixins:r,optionsCache:o,config:{optionMergeStrategies:a}}=t.appContext,c=o.get(e);let l;return c?l=c:r.length||n||i?(l={},r.length&&r.forEach((t=>At(l,t,a,!0))),At(l,e,a)):l=e,(0,s.Gv)(e)&&o.set(e,l),l}function At(t,e,n,i=!1){const{mixins:s,extends:r}=e;r&&At(t,r,n,!0),s&&s.forEach((e=>At(t,e,n,!0)));for(const o in e)if(i&&"expose"===o);else{const i=Ot[o]||n&&n[o];t[o]=i?i(t[o],e[o]):e[o]}return t}const Ot={data:Rt,props:Lt,emits:Lt,methods:Mt,computed:Mt,beforeCreate:Dt,created:Dt,beforeMount:Dt,mounted:Dt,beforeUpdate:Dt,updated:Dt,beforeDestroy:Dt,beforeUnmount:Dt,destroyed:Dt,unmounted:Dt,activated:Dt,deactivated:Dt,errorCaptured:Dt,serverPrefetch:Dt,components:Mt,directives:Mt,watch:Ft,provide:Rt,inject:Pt};function Rt(t,e){return e?t?function(){return(0,s.X$)((0,s.Tn)(t)?t.call(this,this):t,(0,s.Tn)(e)?e.call(this,this):e)}:e:t}function Pt(t,e){return Mt(Nt(t),Nt(e))}function Nt(t){if((0,s.cy)(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function Dt(t,e){return t?[...new Set([].concat(t,e))]:e}function Mt(t,e){return t?(0,s.X$)(Object.create(null),t,e):e}function Lt(t,e){return t?(0,s.cy)(t)&&(0,s.cy)(e)?[...new Set([...t,...e])]:(0,s.X$)(Object.create(null),Tt(t),Tt(null!=e?e:{})):e}function Ft(t,e){if(!t)return e;if(!e)return t;const n=(0,s.X$)(Object.create(null),t);for(const i in e)n[i]=Dt(t[i],e[i]);return n}function Ut(){return{app:null,config:{isNativeTag:s.NO,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Vt=0;function jt(t,e){return function(n,i=null){(0,s.Tn)(n)||(n=(0,s.X$)({},n)),null==i||(0,s.Gv)(i)||(i=null);const r=Ut(),a=new WeakSet,c=[];let l=!1;const h=r.app={_uid:Vt++,_component:n,_props:i,_container:null,_context:r,_instance:null,version:Fn,get config(){return r.config},set config(t){0},use(t,...e){return a.has(t)||(t&&(0,s.Tn)(t.install)?(a.add(t),t.install(h,...e)):(0,s.Tn)(t)&&(a.add(t),t(h,...e))),h},mixin(t){return r.mixins.includes(t)||r.mixins.push(t),h},component(t,e){return e?(r.components[t]=e,h):r.components[t]},directive(t,e){return e?(r.directives[t]=e,h):r.directives[t]},mount(s,o,a){if(!l){0;const c=h._ceVNode||en(n,i);return c.appContext=r,!0===a?a="svg":!1===a&&(a=void 0),o&&e?e(c,s):t(c,s,a),l=!0,h._container=s,s.__vue_app__=h,Pn(c.component)}},onUnmount(t){c.push(t)},unmount(){l&&(o(c,h._instance,16),t(null,h._container),delete h._container.__vue_app__)},provide(t,e){return r.provides[t]=e,h},runWithContext(t){const e=zt;zt=h;try{return t()}finally{zt=e}}};return h}}let zt=null;function Bt(t,e){if(mn){let n=mn.provides;const i=mn.parent&&mn.parent.provides;i===n&&(n=mn.provides=Object.create(i)),n[t]=e}else 0}function $t(t,e,n=!1){const i=mn||C;if(i||zt){const r=zt?zt._context.provides:i?null==i.parent?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:void 0;if(r&&t in r)return r[t];if(arguments.length>1)return n&&(0,s.Tn)(e)?e.call(i&&i.proxy):e}else 0}const Wt={},Ht=()=>Object.create(Wt),qt=t=>Object.getPrototypeOf(t)===Wt;function Kt(t,e,n,s=!1){const r={},o=Ht();t.propsDefaults=Object.create(null),Yt(t,e,r,o);for(const i in t.propsOptions[0])i in r||(r[i]=void 0);n?t.props=s?r:(0,i.Gc)(r):t.type.props?t.props=r:t.props=o,t.attrs=o}function Gt(t,e,n,r){const{props:o,attrs:a,vnode:{patchFlag:c}}=t,l=(0,i.ux)(o),[h]=t.propsOptions;let u=!1;if(!(r||c>0)||16&c){let i;Yt(t,e,o,a)&&(u=!0);for(const r in l)e&&((0,s.$3)(e,r)||(i=(0,s.Tg)(r))!==r&&(0,s.$3)(e,i))||(h?!n||void 0===n[r]&&void 0===n[i]||(o[r]=Qt(h,l,r,void 0,t,!0)):delete o[r]);if(a!==l)for(const t in a)e&&(0,s.$3)(e,t)||(delete a[t],u=!0)}else if(8&c){const n=t.vnode.dynamicProps;for(let i=0;i<n.length;i++){let r=n[i];if(ke(t.emitsOptions,r))continue;const c=e[r];if(h)if((0,s.$3)(a,r))c!==a[r]&&(a[r]=c,u=!0);else{const e=(0,s.PT)(r);o[e]=Qt(h,l,e,c,t,!1)}else c!==a[r]&&(a[r]=c,u=!0)}}u&&(0,i.hZ)(t.attrs,"set","")}function Yt(t,e,n,r){const[o,a]=t.propsOptions;let c,l=!1;if(e)for(let i in e){if((0,s.SU)(i))continue;const h=e[i];let u;o&&(0,s.$3)(o,u=(0,s.PT)(i))?a&&a.includes(u)?(c||(c={}))[u]=h:n[u]=h:ke(t.emitsOptions,i)||i in r&&h===r[i]||(r[i]=h,l=!0)}if(a){const e=(0,i.ux)(n),r=c||s.MZ;for(let i=0;i<a.length;i++){const c=a[i];n[c]=Qt(o,e,c,r[c],t,!(0,s.$3)(r,c))}}return l}function Qt(t,e,n,i,r,o){const a=t[n];if(null!=a){const t=(0,s.$3)(a,"default");if(t&&void 0===i){const t=a.default;if(a.type!==Function&&!a.skipFactory&&(0,s.Tn)(t)){const{propsDefaults:s}=r;if(n in s)i=s[n];else{const o=bn(r);i=s[n]=t.call(null,e),o()}}else i=t;r.ce&&r.ce._setProp(n,i)}a[0]&&(o&&!t?i=!1:!a[1]||""!==i&&i!==(0,s.Tg)(n)||(i=!0))}return i}const Xt=new WeakMap;function Jt(t,e,n=!1){const i=n?Xt:e.propsCache,r=i.get(t);if(r)return r;const o=t.props,a={},c=[];let l=!1;if(!(0,s.Tn)(t)){const i=t=>{l=!0;const[n,i]=Jt(t,e,!0);(0,s.X$)(a,n),i&&c.push(...i)};!n&&e.mixins.length&&e.mixins.forEach(i),t.extends&&i(t.extends),t.mixins&&t.mixins.forEach(i)}if(!o&&!l)return(0,s.Gv)(t)&&i.set(t,s.Oj),s.Oj;if((0,s.cy)(o))for(let u=0;u<o.length;u++){0;const t=(0,s.PT)(o[u]);Zt(t)&&(a[t]=s.MZ)}else if(o){0;for(const t in o){const e=(0,s.PT)(t);if(Zt(e)){const n=o[t],i=a[e]=(0,s.cy)(n)||(0,s.Tn)(n)?{type:n}:(0,s.X$)({},n),r=i.type;let l=!1,h=!0;if((0,s.cy)(r))for(let t=0;t<r.length;++t){const e=r[t],n=(0,s.Tn)(e)&&e.name;if("Boolean"===n){l=!0;break}"String"===n&&(h=!1)}else l=(0,s.Tn)(r)&&"Boolean"===r.name;i[0]=l,i[1]=h,(l||(0,s.$3)(i,"default"))&&c.push(e)}}}const h=[a,c];return(0,s.Gv)(t)&&i.set(t,h),h}function Zt(t){return"$"!==t[0]&&!(0,s.SU)(t)}const te=t=>"_"===t[0]||"$stable"===t,ee=t=>(0,s.cy)(t)?t.map(cn):[cn(t)],ne=(t,e,n)=>{if(e._n)return e;const i=k(((...t)=>ee(e(...t))),n);return i._c=!1,i},ie=(t,e,n)=>{const i=t._ctx;for(const r in t){if(te(r))continue;const n=t[r];if((0,s.Tn)(n))e[r]=ne(r,n,i);else if(null!=n){0;const t=ee(n);e[r]=()=>t}}},se=(t,e)=>{const n=ee(e);t.slots.default=()=>n},re=(t,e,n)=>{for(const i in e)(n||"_"!==i)&&(t[i]=e[i])},oe=(t,e,n)=>{const i=t.slots=Ht();if(32&t.vnode.shapeFlag){const t=e._;t?(re(i,e,n),n&&(0,s.yQ)(i,"_",t,!0)):ie(e,i)}else e&&se(t,e)},ae=(t,e,n)=>{const{vnode:i,slots:r}=t;let o=!0,a=s.MZ;if(32&i.shapeFlag){const t=e._;t?n&&1===t?o=!1:re(r,e,n):(o=!e.$stable,ie(e,r)),a=e}else e&&(se(t,e),a={default:1});if(o)for(const s in r)te(s)||null!=a[s]||delete r[s]};function ce(){"boolean"!==typeof __VUE_PROD_HYDRATION_MISMATCH_DETAILS__&&((0,s.We)().__VUE_PROD_HYDRATION_MISMATCH_DETAILS__=!1)}const le=Le;function he(t){return ue(t)}function ue(t,e){ce();const n=(0,s.We)();n.__VUE__=!0;const{insert:r,remove:o,patchProp:a,createElement:c,createText:l,createComment:h,setText:u,setElementText:d,parentNode:f,nextSibling:p,setScopeId:g=s.tE,insertStaticContent:m}=t,y=(t,e,n,i=null,s=null,r=null,o=void 0,a=null,c=!!e.dynamicChildren)=>{if(t===e)return;t&&!Xe(t,e)&&(i=Z(t),G(t,s,r,!0),t=null),-2===e.patchFlag&&(c=!1,e.dynamicChildren=null);const{type:l,ref:h,shapeFlag:u}=e;switch(l){case Ue:_(t,e,n,i);break;case Ve:b(t,e,n,i);break;case je:null==t&&x(e,n,i,o);break;case Fe:M(t,e,n,i,s,r,o,a,c);break;default:1&u?I(t,e,n,i,s,r,o,a,c):6&u?L(t,e,n,i,s,r,o,a,c):(64&u||128&u)&&l.process(t,e,n,i,s,r,o,a,c,nt)}null!=h&&s&&W(h,t&&t.ref,r,e||t,!e)},_=(t,e,n,i)=>{if(null==t)r(e.el=l(e.children),n,i);else{const n=e.el=t.el;e.children!==t.children&&u(n,e.children)}},b=(t,e,n,i)=>{null==t?r(e.el=h(e.children||""),n,i):e.el=t.el},x=(t,e,n,i)=>{[t.el,t.anchor]=m(t.children,e,n,i,t.el,t.anchor)},E=({el:t,anchor:e},n,i)=>{let s;while(t&&t!==e)s=p(t),r(t,n,i),t=s;r(e,n,i)},C=({el:t,anchor:e})=>{let n;while(t&&t!==e)n=p(t),o(t),t=n;o(e)},I=(t,e,n,i,s,r,o,a,c)=>{"svg"===e.type?o="svg":"math"===e.type&&(o="mathml"),null==t?S(e,n,i,s,r,o,a,c):P(t,e,s,r,o,a,c)},S=(t,e,n,i,o,l,h,u)=>{let f,p;const{props:g,shapeFlag:m,transition:y,dirs:v}=t;if(f=t.el=c(t.type,l,g&&g.is,g),8&m?d(f,t.children):16&m&&A(t.children,f,null,i,o,de(t,l),h,u),v&&O(t,null,i,"created"),k(f,t,t.scopeId,h,i),g){for(const t in g)"value"===t||(0,s.SU)(t)||a(f,t,null,g[t],l,i);"value"in g&&a(f,"value",null,g.value,l),(p=g.onVnodeBeforeMount)&&dn(p,i,t)}v&&O(t,null,i,"beforeMount");const _=pe(o,y);_&&y.beforeEnter(f),r(f,e,n),((p=g&&g.onVnodeMounted)||_||v)&&le((()=>{p&&dn(p,i,t),_&&y.enter(f),v&&O(t,null,i,"mounted")}),o)},k=(t,e,n,i,s)=>{if(n&&g(t,n),i)for(let r=0;r<i.length;r++)g(t,i[r]);if(s){let n=s.subTree;if(e===n||Me(n.type)&&(n.ssContent===e||n.ssFallback===e)){const e=s.vnode;k(t,e,e.scopeId,e.slotScopeIds,s.parent)}}},A=(t,e,n,i,s,r,o,a,c=0)=>{for(let l=c;l<t.length;l++){const c=t[l]=a?ln(t[l]):cn(t[l]);y(null,c,e,n,i,s,r,o,a)}},P=(t,e,n,i,r,o,c)=>{const l=e.el=t.el;let{patchFlag:h,dynamicChildren:u,dirs:f}=e;h|=16&t.patchFlag;const p=t.props||s.MZ,g=e.props||s.MZ;let m;if(n&&fe(n,!1),(m=g.onVnodeBeforeUpdate)&&dn(m,n,e,t),f&&O(e,t,n,"beforeUpdate"),n&&fe(n,!0),(p.innerHTML&&null==g.innerHTML||p.textContent&&null==g.textContent)&&d(l,""),u?N(t.dynamicChildren,u,l,n,i,de(e,r),o):c||z(t,e,l,null,n,i,de(e,r),o,!1),h>0){if(16&h)D(l,p,g,n,r);else if(2&h&&p.class!==g.class&&a(l,"class",null,g.class,r),4&h&&a(l,"style",p.style,g.style,r),8&h){const t=e.dynamicProps;for(let e=0;e<t.length;e++){const i=t[e],s=p[i],o=g[i];o===s&&"value"!==i||a(l,i,s,o,r,n)}}1&h&&t.children!==e.children&&d(l,e.children)}else c||null!=u||D(l,p,g,n,r);((m=g.onVnodeUpdated)||f)&&le((()=>{m&&dn(m,n,e,t),f&&O(e,t,n,"updated")}),i)},N=(t,e,n,i,s,r,o)=>{for(let a=0;a<e.length;a++){const c=t[a],l=e[a],h=c.el&&(c.type===Fe||!Xe(c,l)||70&c.shapeFlag)?f(c.el):n;y(c,l,h,null,i,s,r,o,!0)}},D=(t,e,n,i,r)=>{if(e!==n){if(e!==s.MZ)for(const o in e)(0,s.SU)(o)||o in n||a(t,o,e[o],null,r,i);for(const o in n){if((0,s.SU)(o))continue;const c=n[o],l=e[o];c!==l&&"value"!==o&&a(t,o,l,c,r,i)}"value"in n&&a(t,"value",e.value,n.value,r)}},M=(t,e,n,i,s,o,a,c,h)=>{const u=e.el=t?t.el:l(""),d=e.anchor=t?t.anchor:l("");let{patchFlag:f,dynamicChildren:p,slotScopeIds:g}=e;g&&(c=c?c.concat(g):g),null==t?(r(u,n,i),r(d,n,i),A(e.children||[],n,d,s,o,a,c,h)):f>0&&64&f&&p&&t.dynamicChildren?(N(t.dynamicChildren,p,n,s,o,a,c),(null!=e.key||s&&e===s.subTree)&&ge(t,e,!0)):z(t,e,n,d,s,o,a,c,h)},L=(t,e,n,i,s,r,o,a,c)=>{e.slotScopeIds=a,null==t?512&e.shapeFlag?s.ctx.activate(e,n,i,o,c):F(e,n,i,s,r,o,c):U(t,e,c)},F=(t,e,n,i,s,r,o)=>{const a=t.component=gn(t,i,s);if(q(t)&&(a.ctx.renderer=nt),In(a,!1,o),a.asyncDep){if(s&&s.registerDep(a,V,o),!t.el){const t=a.subTree=en(Ve);b(null,t,e,n)}}else V(a,t,e,n,s,r,o)},U=(t,e,n)=>{const i=e.component=t.component;if(Pe(t,e,n)){if(i.asyncDep&&!i.asyncResolved)return void j(i,e,n);i.next=e,i.update()}else e.el=t.el,i.vnode=e},V=(t,e,n,r,o,a,c)=>{const l=()=>{if(t.isMounted){let{next:e,bu:n,u:i,parent:r,vnode:h}=t;{const n=ye(t);if(n)return e&&(e.el=h.el,j(t,e,c)),void n.asyncDep.then((()=>{t.isUnmounted||l()}))}let u,d=e;0,fe(t,!1),e?(e.el=h.el,j(t,e,c)):e=h,n&&(0,s.DY)(n),(u=e.props&&e.props.onVnodeBeforeUpdate)&&dn(u,r,e,h),fe(t,!0);const p=Ae(t);0;const g=t.subTree;t.subTree=p,y(g,p,f(g.el),Z(g),t,o,a),e.el=p.el,null===d&&De(t,p.el),i&&le(i,o),(u=e.props&&e.props.onVnodeUpdated)&&le((()=>dn(u,r,e,h)),o)}else{let i;const{el:c,props:l}=e,{bm:h,m:u,parent:d,root:f,type:p}=t,g=H(e);if(fe(t,!1),h&&(0,s.DY)(h),!g&&(i=l&&l.onVnodeBeforeMount)&&dn(i,d,e),fe(t,!0),c&&st){const e=()=>{t.subTree=Ae(t),st(c,t.subTree,t,o,null)};g&&p.__asyncHydrate?p.__asyncHydrate(c,t,e):e()}else{f.ce&&f.ce._injectChildStyle(p);const i=t.subTree=Ae(t);0,y(null,i,n,r,t,o,a),e.el=i.el}if(u&&le(u,o),!g&&(i=l&&l.onVnodeMounted)){const t=e;le((()=>dn(i,d,t)),o)}(256&e.shapeFlag||d&&H(d.vnode)&&256&d.vnode.shapeFlag)&&t.a&&le(t.a,o),t.isMounted=!0,e=n=r=null}};t.scope.on();const h=t.effect=new i.X2(l);t.scope.off();const u=t.update=h.run.bind(h),d=t.job=h.runIfDirty.bind(h);d.i=t,d.id=t.uid,h.scheduler=()=>v(d),fe(t,!0),u()},j=(t,e,n)=>{e.component=t;const s=t.vnode.props;t.vnode=e,t.next=null,Gt(t,e.props,s,n),ae(t,e.children,n),(0,i.C4)(),w(t),(0,i.bl)()},z=(t,e,n,i,s,r,o,a,c=!1)=>{const l=t&&t.children,h=t?t.shapeFlag:0,u=e.children,{patchFlag:f,shapeFlag:p}=e;if(f>0){if(128&f)return void $(l,u,n,i,s,r,o,a,c);if(256&f)return void B(l,u,n,i,s,r,o,a,c)}8&p?(16&h&&J(l,s,r),u!==l&&d(n,u)):16&h?16&p?$(l,u,n,i,s,r,o,a,c):J(l,s,r,!0):(8&h&&d(n,""),16&p&&A(u,n,i,s,r,o,a,c))},B=(t,e,n,i,r,o,a,c,l)=>{t=t||s.Oj,e=e||s.Oj;const h=t.length,u=e.length,d=Math.min(h,u);let f;for(f=0;f<d;f++){const i=e[f]=l?ln(e[f]):cn(e[f]);y(t[f],i,n,null,r,o,a,c,l)}h>u?J(t,r,o,!0,!1,d):A(e,n,i,r,o,a,c,l,d)},$=(t,e,n,i,r,o,a,c,l)=>{let h=0;const u=e.length;let d=t.length-1,f=u-1;while(h<=d&&h<=f){const i=t[h],s=e[h]=l?ln(e[h]):cn(e[h]);if(!Xe(i,s))break;y(i,s,n,null,r,o,a,c,l),h++}while(h<=d&&h<=f){const i=t[d],s=e[f]=l?ln(e[f]):cn(e[f]);if(!Xe(i,s))break;y(i,s,n,null,r,o,a,c,l),d--,f--}if(h>d){if(h<=f){const t=f+1,s=t<u?e[t].el:i;while(h<=f)y(null,e[h]=l?ln(e[h]):cn(e[h]),n,s,r,o,a,c,l),h++}}else if(h>f)while(h<=d)G(t[h],r,o,!0),h++;else{const p=h,g=h,m=new Map;for(h=g;h<=f;h++){const t=e[h]=l?ln(e[h]):cn(e[h]);null!=t.key&&m.set(t.key,h)}let v,_=0;const b=f-g+1;let w=!1,T=0;const x=new Array(b);for(h=0;h<b;h++)x[h]=0;for(h=p;h<=d;h++){const i=t[h];if(_>=b){G(i,r,o,!0);continue}let s;if(null!=i.key)s=m.get(i.key);else for(v=g;v<=f;v++)if(0===x[v-g]&&Xe(i,e[v])){s=v;break}void 0===s?G(i,r,o,!0):(x[s-g]=h+1,s>=T?T=s:w=!0,y(i,e[s],n,null,r,o,a,c,l),_++)}const E=w?me(x):s.Oj;for(v=E.length-1,h=b-1;h>=0;h--){const t=g+h,s=e[t],d=t+1<u?e[t+1].el:i;0===x[h]?y(null,s,n,d,r,o,a,c,l):w&&(v<0||h!==E[v]?K(s,n,d,2):v--)}}},K=(t,e,n,i,s=null)=>{const{el:o,type:a,transition:c,children:l,shapeFlag:h}=t;if(6&h)return void K(t.component.subTree,e,n,i);if(128&h)return void t.suspense.move(e,n,i);if(64&h)return void a.move(t,e,n,nt);if(a===Fe){r(o,e,n);for(let t=0;t<l.length;t++)K(l[t],e,n,i);return void r(t.anchor,e,n)}if(a===je)return void E(t,e,n);const u=2!==i&&1&h&&c;if(u)if(0===i)c.beforeEnter(o),r(o,e,n),le((()=>c.enter(o)),s);else{const{leave:t,delayLeave:i,afterLeave:s}=c,a=()=>r(o,e,n),l=()=>{t(o,(()=>{a(),s&&s()}))};i?i(o,a,l):l()}else r(o,e,n)},G=(t,e,n,i=!1,s=!1)=>{const{type:r,props:o,ref:a,children:c,dynamicChildren:l,shapeFlag:h,patchFlag:u,dirs:d,cacheIndex:f}=t;if(-2===u&&(s=!1),null!=a&&W(a,null,n,t,!0),null!=f&&(e.renderCache[f]=void 0),256&h)return void e.ctx.deactivate(t);const p=1&h&&d,g=!H(t);let m;if(g&&(m=o&&o.onVnodeBeforeUnmount)&&dn(m,e,t),6&h)X(t.component,n,i);else{if(128&h)return void t.suspense.unmount(n,i);p&&O(t,null,e,"beforeUnmount"),64&h?t.type.remove(t,e,n,nt,i):l&&!l.hasOnce&&(r!==Fe||u>0&&64&u)?J(l,e,n,!1,!0):(r===Fe&&384&u||!s&&16&h)&&J(c,e,n),i&&Y(t)}(g&&(m=o&&o.onVnodeUnmounted)||p)&&le((()=>{m&&dn(m,e,t),p&&O(t,null,e,"unmounted")}),n)},Y=t=>{const{type:e,el:n,anchor:i,transition:s}=t;if(e===Fe)return void Q(n,i);if(e===je)return void C(t);const r=()=>{o(n),s&&!s.persisted&&s.afterLeave&&s.afterLeave()};if(1&t.shapeFlag&&s&&!s.persisted){const{leave:e,delayLeave:i}=s,o=()=>e(n,r);i?i(t.el,r,o):o()}else r()},Q=(t,e)=>{let n;while(t!==e)n=p(t),o(t),t=n;o(e)},X=(t,e,n)=>{const{bum:i,scope:r,job:o,subTree:a,um:c,m:l,a:h}=t;ve(l),ve(h),i&&(0,s.DY)(i),r.stop(),o&&(o.flags|=8,G(a,t,e,n)),c&&le(c,e),le((()=>{t.isUnmounted=!0}),e),e&&e.pendingBranch&&!e.isUnmounted&&t.asyncDep&&!t.asyncResolved&&t.suspenseId===e.pendingId&&(e.deps--,0===e.deps&&e.resolve())},J=(t,e,n,i=!1,s=!1,r=0)=>{for(let o=r;o<t.length;o++)G(t[o],e,n,i,s)},Z=t=>{if(6&t.shapeFlag)return Z(t.component.subTree);if(128&t.shapeFlag)return t.suspense.next();const e=p(t.anchor||t.el),n=e&&e[R];return n?p(n):e};let tt=!1;const et=(t,e,n)=>{null==t?e._vnode&&G(e._vnode,null,null,!0):y(e._vnode||null,t,e,null,null,null,n),e._vnode=t,tt||(tt=!0,w(),T(),tt=!1)},nt={p:y,um:G,m:K,r:Y,mt:F,mc:A,pc:z,pbc:N,n:Z,o:t};let it,st;return e&&([it,st]=e(nt)),{render:et,hydrate:it,createApp:jt(et,it)}}function de({type:t,props:e},n){return"svg"===n&&"foreignObject"===t||"mathml"===n&&"annotation-xml"===t&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function fe({effect:t,job:e},n){n?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function pe(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function ge(t,e,n=!1){const i=t.children,r=e.children;if((0,s.cy)(i)&&(0,s.cy)(r))for(let s=0;s<i.length;s++){const t=i[s];let e=r[s];1&e.shapeFlag&&!e.dynamicChildren&&((e.patchFlag<=0||32===e.patchFlag)&&(e=r[s]=ln(r[s]),e.el=t.el),n||-2===e.patchFlag||ge(t,e)),e.type===Ue&&(e.el=t.el)}}function me(t){const e=t.slice(),n=[0];let i,s,r,o,a;const c=t.length;for(i=0;i<c;i++){const c=t[i];if(0!==c){if(s=n[n.length-1],t[s]<c){e[i]=s,n.push(i);continue}r=0,o=n.length-1;while(r<o)a=r+o>>1,t[n[a]]<c?r=a+1:o=a;c<t[n[r]]&&(r>0&&(e[i]=n[r-1]),n[r]=i)}}r=n.length,o=n[r-1];while(r-- >0)n[r]=o,o=e[o];return n}function ye(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:ye(e)}function ve(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}const _e=Symbol.for("v-scx"),be=()=>{{const t=$t(_e);return t}};function we(t,e,n){return Te(t,e,n)}function Te(t,e,n=s.MZ){const{immediate:r,deep:a,flush:c,once:l}=n;const h=(0,s.X$)({},n);let u;if(Cn)if("sync"===c){const t=be();u=t.__watcherHandles||(t.__watcherHandles=[])}else{if(e&&!r){const t=()=>{};return t.stop=s.tE,t.resume=s.tE,t.pause=s.tE,t}h.once=!0}const d=mn;h.call=(t,e,n)=>o(t,d,e,n);let f=!1;"post"===c?h.scheduler=t=>{le(t,d&&d.suspense)}:"sync"!==c&&(f=!0,h.scheduler=(t,e)=>{e?t():v(t)}),h.augmentJob=t=>{e&&(t.flags|=4),f&&(t.flags|=2,d&&(t.id=d.uid,t.i=d))};const p=(0,i.wB)(t,e,h);return u&&u.push(p),p}function xe(t,e,n){const i=this.proxy,r=(0,s.Kg)(t)?t.includes(".")?Ee(i,t):()=>i[t]:t.bind(i,i);let o;(0,s.Tn)(e)?o=e:(o=e.handler,n=e);const a=bn(this),c=Te(r,o.bind(i),n);return a(),c}function Ee(t,e){const n=e.split(".");return()=>{let e=t;for(let t=0;t<n.length&&e;t++)e=e[n[t]];return e}}const Ce=(t,e)=>"modelValue"===e||"model-value"===e?t.modelModifiers:t[`${e}Modifiers`]||t[`${(0,s.PT)(e)}Modifiers`]||t[`${(0,s.Tg)(e)}Modifiers`];function Ie(t,e,...n){if(t.isUnmounted)return;const i=t.vnode.props||s.MZ;let r=n;const a=e.startsWith("update:"),c=a&&Ce(i,e.slice(7));let l;c&&(c.trim&&(r=n.map((t=>(0,s.Kg)(t)?t.trim():t))),c.number&&(r=n.map(s.bB)));let h=i[l=(0,s.rU)(e)]||i[l=(0,s.rU)((0,s.PT)(e))];!h&&a&&(h=i[l=(0,s.rU)((0,s.Tg)(e))]),h&&o(h,t,6,r);const u=i[l+"Once"];if(u){if(t.emitted){if(t.emitted[l])return}else t.emitted={};t.emitted[l]=!0,o(u,t,6,r)}}function Se(t,e,n=!1){const i=e.emitsCache,r=i.get(t);if(void 0!==r)return r;const o=t.emits;let a={},c=!1;if(!(0,s.Tn)(t)){const i=t=>{const n=Se(t,e,!0);n&&(c=!0,(0,s.X$)(a,n))};!n&&e.mixins.length&&e.mixins.forEach(i),t.extends&&i(t.extends),t.mixins&&t.mixins.forEach(i)}return o||c?((0,s.cy)(o)?o.forEach((t=>a[t]=null)):(0,s.X$)(a,o),(0,s.Gv)(t)&&i.set(t,a),a):((0,s.Gv)(t)&&i.set(t,null),null)}function ke(t,e){return!(!t||!(0,s.Mp)(e))&&(e=e.slice(2).replace(/Once$/,""),(0,s.$3)(t,e[0].toLowerCase()+e.slice(1))||(0,s.$3)(t,(0,s.Tg)(e))||(0,s.$3)(t,e))}function Ae(t){const{type:e,vnode:n,proxy:i,withProxy:r,propsOptions:[o],slots:c,attrs:l,emit:h,render:u,renderCache:d,props:f,data:p,setupState:g,ctx:m,inheritAttrs:y}=t,v=S(t);let _,b;try{if(4&n.shapeFlag){const t=r||i,e=t;_=cn(u.call(e,t,d,f,g,p,m)),b=l}else{const t=e;0,_=cn(t.length>1?t(f,{attrs:l,slots:c,emit:h}):t(f,null)),b=e.props?l:Oe(l)}}catch(T){ze.length=0,a(T,t,1),_=en(Ve)}let w=_;if(b&&!1!==y){const t=Object.keys(b),{shapeFlag:e}=w;t.length&&7&e&&(o&&t.some(s.CP)&&(b=Re(b,o)),w=rn(w,b,!1,!0))}return n.dirs&&(w=rn(w,null,!1,!0),w.dirs=w.dirs?w.dirs.concat(n.dirs):n.dirs),n.transition&&j(w,n.transition),_=w,S(v),_}const Oe=t=>{let e;for(const n in t)("class"===n||"style"===n||(0,s.Mp)(n))&&((e||(e={}))[n]=t[n]);return e},Re=(t,e)=>{const n={};for(const i in t)(0,s.CP)(i)&&i.slice(9)in e||(n[i]=t[i]);return n};function Pe(t,e,n){const{props:i,children:s,component:r}=t,{props:o,children:a,patchFlag:c}=e,l=r.emitsOptions;if(e.dirs||e.transition)return!0;if(!(n&&c>=0))return!(!s&&!a||a&&a.$stable)||i!==o&&(i?!o||Ne(i,o,l):!!o);if(1024&c)return!0;if(16&c)return i?Ne(i,o,l):!!o;if(8&c){const t=e.dynamicProps;for(let e=0;e<t.length;e++){const n=t[e];if(o[n]!==i[n]&&!ke(l,n))return!0}}return!1}function Ne(t,e,n){const i=Object.keys(e);if(i.length!==Object.keys(t).length)return!0;for(let s=0;s<i.length;s++){const r=i[s];if(e[r]!==t[r]&&!ke(n,r))return!0}return!1}function De({vnode:t,parent:e},n){while(e){const i=e.subTree;if(i.suspense&&i.suspense.activeBranch===t&&(i.el=t.el),i!==t)break;(t=e.vnode).el=n,e=e.parent}}const Me=t=>t.__isSuspense;function Le(t,e){e&&e.pendingBranch?(0,s.cy)(t)?e.effects.push(...t):e.effects.push(t):b(t)}const Fe=Symbol.for("v-fgt"),Ue=Symbol.for("v-txt"),Ve=Symbol.for("v-cmt"),je=Symbol.for("v-stc"),ze=[];let Be=null;function $e(t=!1){ze.push(Be=t?null:[])}function We(){ze.pop(),Be=ze[ze.length-1]||null}let He=1;function qe(t){He+=t,t<0&&Be&&(Be.hasOnce=!0)}function Ke(t){return t.dynamicChildren=He>0?Be||s.Oj:null,We(),He>0&&Be&&Be.push(t),t}function Ge(t,e,n,i,s,r){return Ke(tn(t,e,n,i,s,r,!0))}function Ye(t,e,n,i,s){return Ke(en(t,e,n,i,s,!0))}function Qe(t){return!!t&&!0===t.__v_isVNode}function Xe(t,e){return t.type===e.type&&t.key===e.key}const Je=({key:t})=>null!=t?t:null,Ze=({ref:t,ref_key:e,ref_for:n})=>("number"===typeof t&&(t=""+t),null!=t?(0,s.Kg)(t)||(0,i.i9)(t)||(0,s.Tn)(t)?{i:C,r:t,k:e,f:!!n}:t:null);function tn(t,e=null,n=null,i=0,r=null,o=(t===Fe?0:1),a=!1,c=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Je(e),ref:e&&Ze(e),scopeId:I,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:o,patchFlag:i,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:C};return c?(hn(l,n),128&o&&t.normalize(l)):n&&(l.shapeFlag|=(0,s.Kg)(n)?8:16),He>0&&!a&&Be&&(l.patchFlag>0||6&o)&&32!==l.patchFlag&&Be.push(l),l}const en=nn;function nn(t,e=null,n=null,r=0,o=null,a=!1){if(t&&t!==pt||(t=Ve),Qe(t)){const i=rn(t,e,!0);return n&&hn(i,n),He>0&&!a&&Be&&(6&i.shapeFlag?Be[Be.indexOf(t)]=i:Be.push(i)),i.patchFlag=-2,i}if(Dn(t)&&(t=t.__vccOpts),e){e=sn(e);let{class:t,style:n}=e;t&&!(0,s.Kg)(t)&&(e.class=(0,s.C4)(t)),(0,s.Gv)(n)&&((0,i.ju)(n)&&!(0,s.cy)(n)&&(n=(0,s.X$)({},n)),e.style=(0,s.Tr)(n))}const c=(0,s.Kg)(t)?1:Me(t)?128:P(t)?64:(0,s.Gv)(t)?4:(0,s.Tn)(t)?2:0;return tn(t,e,n,r,o,c,a,!0)}function sn(t){return t?(0,i.ju)(t)||qt(t)?(0,s.X$)({},t):t:null}function rn(t,e,n=!1,i=!1){const{props:r,ref:o,patchFlag:a,children:c,transition:l}=t,h=e?un(r||{},e):r,u={__v_isVNode:!0,__v_skip:!0,type:t.type,props:h,key:h&&Je(h),ref:e&&e.ref?n&&o?(0,s.cy)(o)?o.concat(Ze(e)):[o,Ze(e)]:Ze(e):o,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:c,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Fe?-1===a?16:16|a:a,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:l,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&rn(t.ssContent),ssFallback:t.ssFallback&&rn(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return l&&i&&j(u,l.clone(u)),u}function on(t=" ",e=0){return en(Ue,null,t,e)}function an(t="",e=!1){return e?($e(),Ye(Ve,null,t)):en(Ve,null,t)}function cn(t){return null==t||"boolean"===typeof t?en(Ve):(0,s.cy)(t)?en(Fe,null,t.slice()):Qe(t)?ln(t):en(Ue,null,String(t))}function ln(t){return null===t.el&&-1!==t.patchFlag||t.memo?t:rn(t)}function hn(t,e){let n=0;const{shapeFlag:i}=t;if(null==e)e=null;else if((0,s.cy)(e))n=16;else if("object"===typeof e){if(65&i){const n=e.default;return void(n&&(n._c&&(n._d=!1),hn(t,n()),n._c&&(n._d=!0)))}{n=32;const i=e._;i||qt(e)?3===i&&C&&(1===C.slots._?e._=1:(e._=2,t.patchFlag|=1024)):e._ctx=C}}else(0,s.Tn)(e)?(e={default:e,_ctx:C},n=32):(e=String(e),64&i?(n=16,e=[on(e)]):n=8);t.children=e,t.shapeFlag|=n}function un(...t){const e={};for(let n=0;n<t.length;n++){const i=t[n];for(const t in i)if("class"===t)e.class!==i.class&&(e.class=(0,s.C4)([e.class,i.class]));else if("style"===t)e.style=(0,s.Tr)([e.style,i.style]);else if((0,s.Mp)(t)){const n=e[t],r=i[t];!r||n===r||(0,s.cy)(n)&&n.includes(r)||(e[t]=n?[].concat(n,r):r)}else""!==t&&(e[t]=i[t])}return e}function dn(t,e,n,i=null){o(t,e,7,[n,i])}const fn=Ut();let pn=0;function gn(t,e,n){const r=t.type,o=(e?e.appContext:t.appContext)||fn,a={uid:pn++,vnode:t,type:r,parent:e,appContext:o,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new i.yC(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(o.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Jt(r,o),emitsOptions:Se(r,o),emit:null,emitted:null,propsDefaults:s.MZ,inheritAttrs:r.inheritAttrs,ctx:s.MZ,data:s.MZ,props:s.MZ,attrs:s.MZ,slots:s.MZ,refs:s.MZ,setupState:s.MZ,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return a.ctx={_:a},a.root=e?e.root:a,a.emit=Ie.bind(null,a),t.ce&&t.ce(a),a}let mn=null;const yn=()=>mn||C;let vn,_n;{const t=(0,s.We)(),e=(e,n)=>{let i;return(i=t[e])||(i=t[e]=[]),i.push(n),t=>{i.length>1?i.forEach((e=>e(t))):i[0](t)}};vn=e("__VUE_INSTANCE_SETTERS__",(t=>mn=t)),_n=e("__VUE_SSR_SETTERS__",(t=>Cn=t))}const bn=t=>{const e=mn;return vn(t),t.scope.on(),()=>{t.scope.off(),vn(e)}},wn=()=>{mn&&mn.scope.off(),vn(null)};function Tn(t){return 4&t.vnode.shapeFlag}let xn,En,Cn=!1;function In(t,e=!1,n=!1){e&&_n(e);const{props:i,children:s}=t.vnode,r=Tn(t);Kt(t,i,r,e),oe(t,s,n);const o=r?Sn(t,e):void 0;return e&&_n(!1),o}function Sn(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,wt);const{setup:o}=n;if(o){const n=t.setupContext=o.length>1?Rn(t):null,c=bn(t);(0,i.C4)();const l=r(o,t,0,[t.props,n]);if((0,i.bl)(),c(),(0,s.yL)(l)){if(H(t)||$(t),l.then(wn,wn),e)return l.then((n=>{kn(t,n,e)})).catch((e=>{a(e,t,0)}));t.asyncDep=l}else kn(t,l,e)}else An(t,e)}function kn(t,e,n){(0,s.Tn)(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:(0,s.Gv)(e)&&(t.setupState=(0,i.Pr)(e)),An(t,n)}function An(t,e,n){const r=t.type;if(!t.render){if(!e&&xn&&!r.render){const e=r.template||kt(t).template;if(e){0;const{isCustomElement:n,compilerOptions:i}=t.appContext.config,{delimiters:o,compilerOptions:a}=r,c=(0,s.X$)((0,s.X$)({isCustomElement:n,delimiters:o},i),a);r.render=xn(e,c)}}t.render=r.render||s.tE,En&&En(t)}{const e=bn(t);(0,i.C4)();try{Et(t)}finally{(0,i.bl)(),e()}}}const On={get(t,e){return(0,i.u4)(t,"get",""),t[e]}};function Rn(t){const e=e=>{t.exposed=e||{}};return{attrs:new Proxy(t.attrs,On),slots:t.slots,emit:t.emit,expose:e}}function Pn(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy((0,i.Pr)((0,i.IG)(t.exposed)),{get(e,n){return n in e?e[n]:n in _t?_t[n](t):void 0},has(t,e){return e in t||e in _t}})):t.proxy}function Nn(t,e=!0){return(0,s.Tn)(t)?t.displayName||t.name:t.name||e&&t.__name}function Dn(t){return(0,s.Tn)(t)&&"__vccOpts"in t}const Mn=(t,e)=>{const n=(0,i.EW)(t,e,Cn);return n};function Ln(t,e,n){const i=arguments.length;return 2===i?(0,s.Gv)(e)&&!(0,s.cy)(e)?Qe(e)?en(t,null,[e]):en(t,e):en(t,null,e):(i>3?n=Array.prototype.slice.call(arguments,2):3===i&&Qe(n)&&(n=[n]),en(t,e,n))}const Fn="3.5.11"},3751:function(t,e,n){"use strict";n.d(e,{Ef:function(){return et},Jo:function(){return K},lH:function(){return G}});var i=n(641),s=n(33);n(953);
/**
* @vue/runtime-dom v3.5.11
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let r;const o="undefined"!==typeof window&&window.trustedTypes;if(o)try{r=o.createPolicy("vue",{createHTML:t=>t})}catch(st){}const a=r?t=>r.createHTML(t):t=>t,c="http://www.w3.org/2000/svg",l="http://www.w3.org/1998/Math/MathML",h="undefined"!==typeof document?document:null,u=h&&h.createElement("template"),d={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,i)=>{const s="svg"===e?h.createElementNS(c,t):"mathml"===e?h.createElementNS(l,t):n?h.createElement(t,{is:n}):h.createElement(t);return"select"===t&&i&&null!=i.multiple&&s.setAttribute("multiple",i.multiple),s},createText:t=>h.createTextNode(t),createComment:t=>h.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>h.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,i,s,r){const o=n?n.previousSibling:e.lastChild;if(s&&(s===r||s.nextSibling)){while(1)if(e.insertBefore(s.cloneNode(!0),n),s===r||!(s=s.nextSibling))break}else{u.innerHTML=a("svg"===i?`<svg>${t}</svg>`:"mathml"===i?`<math>${t}</math>`:t);const s=u.content;if("svg"===i||"mathml"===i){const t=s.firstChild;while(t.firstChild)s.appendChild(t.firstChild);s.removeChild(t)}e.insertBefore(s,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},f=Symbol("_vtc"),p={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String};i.QP;function g(t,e,n){const i=t[f];i&&(e=(e?[e,...i]:[...i]).join(" ")),null==e?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const m=Symbol("_vod"),y=Symbol("_vsh");const v=Symbol("");const _=/(^|;)\s*display\s*:/;function b(t,e,n){const i=t.style,r=(0,s.Kg)(n);let o=!1;if(n&&!r){if(e)if((0,s.Kg)(e))for(const t of e.split(";")){const e=t.slice(0,t.indexOf(":")).trim();null==n[e]&&T(i,e,"")}else for(const t in e)null==n[t]&&T(i,t,"");for(const t in n)"display"===t&&(o=!0),T(i,t,n[t])}else if(r){if(e!==n){const t=i[v];t&&(n+=";"+t),i.cssText=n,o=_.test(n)}}else e&&t.removeAttribute("style");m in t&&(t[m]=o?i.display:"",t[y]&&(i.display="none"))}const w=/\s*!important$/;function T(t,e,n){if((0,s.cy)(n))n.forEach((n=>T(t,e,n)));else if(null==n&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const i=C(t,e);w.test(n)?t.setProperty((0,s.Tg)(i),n.replace(w,""),"important"):t[i]=n}}const x=["Webkit","Moz","ms"],E={};function C(t,e){const n=E[e];if(n)return n;let i=(0,s.PT)(e);if("filter"!==i&&i in t)return E[e]=i;i=(0,s.ZH)(i);for(let s=0;s<x.length;s++){const n=x[s]+i;if(n in t)return E[e]=n}return e}const I="http://www.w3.org/1999/xlink";function S(t,e,n,i,r,o=(0,s.J$)(e)){i&&e.startsWith("xlink:")?null==n?t.removeAttributeNS(I,e.slice(6,e.length)):t.setAttributeNS(I,e,n):null==n||o&&!(0,s.Y2)(n)?t.removeAttribute(e):t.setAttribute(e,o?"":(0,s.Bm)(n)?String(n):n)}function k(t,e,n,i){if("innerHTML"===e||"textContent"===e)return void(null!=n&&(t[e]="innerHTML"===e?a(n):n));const r=t.tagName;if("value"===e&&"PROGRESS"!==r&&!r.includes("-")){const i="OPTION"===r?t.getAttribute("value")||"":t.value,s=null==n?"checkbox"===t.type?"on":"":String(n);return i===s&&"_value"in t||(t.value=s),null==n&&t.removeAttribute(e),void(t._value=n)}let o=!1;if(""===n||null==n){const i=typeof t[e];"boolean"===i?n=(0,s.Y2)(n):null==n&&"string"===i?(n="",o=!0):"number"===i&&(n=0,o=!0)}try{t[e]=n}catch(st){0}o&&t.removeAttribute(e)}function A(t,e,n,i){t.addEventListener(e,n,i)}function O(t,e,n,i){t.removeEventListener(e,n,i)}const R=Symbol("_vei");function P(t,e,n,i,s=null){const r=t[R]||(t[R]={}),o=r[e];if(i&&o)o.value=i;else{const[n,a]=D(e);if(i){const o=r[e]=U(i,s);A(t,n,o,a)}else o&&(O(t,n,o,a),r[e]=void 0)}}const N=/(?:Once|Passive|Capture)$/;function D(t){let e;if(N.test(t)){let n;e={};while(n=t.match(N))t=t.slice(0,t.length-n[0].length),e[n[0].toLowerCase()]=!0}const n=":"===t[2]?t.slice(3):(0,s.Tg)(t.slice(2));return[n,e]}let M=0;const L=Promise.resolve(),F=()=>M||(L.then((()=>M=0)),M=Date.now());function U(t,e){const n=t=>{if(t._vts){if(t._vts<=n.attached)return}else t._vts=Date.now();(0,i.qL)(V(t,n.value),e,5,[t])};return n.value=t,n.attached=F(),n}function V(t,e){if((0,s.cy)(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map((t=>e=>!e._stopped&&t&&t(e)))}return e}const j=t=>111===t.charCodeAt(0)&&110===t.charCodeAt(1)&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,z=(t,e,n,i,r,o)=>{const a="svg"===r;"class"===e?g(t,i,a):"style"===e?b(t,n,i):(0,s.Mp)(e)?(0,s.CP)(e)||P(t,e,n,i,o):("."===e[0]?(e=e.slice(1),1):"^"===e[0]?(e=e.slice(1),0):B(t,e,i,a))?(k(t,e,i),t.tagName.includes("-")||"value"!==e&&"checked"!==e&&"selected"!==e||S(t,e,i,a,o,"value"!==e)):!t._isVueCE||!/[A-Z]/.test(e)&&(0,s.Kg)(i)?("true-value"===e?t._trueValue=i:"false-value"===e&&(t._falseValue=i),S(t,e,i,a)):k(t,(0,s.PT)(e),i)};function B(t,e,n,i){if(i)return"innerHTML"===e||"textContent"===e||!!(e in t&&j(e)&&(0,s.Tn)(n));if("spellcheck"===e||"draggable"===e||"translate"===e)return!1;if("form"===e)return!1;if("list"===e&&"INPUT"===t.tagName)return!1;if("type"===e&&"TEXTAREA"===t.tagName)return!1;if("width"===e||"height"===e){const e=t.tagName;if("IMG"===e||"VIDEO"===e||"CANVAS"===e||"SOURCE"===e)return!1}return(!j(e)||!(0,s.Kg)(n))&&e in t}
/*! #__NO_SIDE_EFFECTS__ */
"undefined"!==typeof HTMLElement&&HTMLElement;Symbol("_moveCb"),Symbol("_enterCb");const $=t=>{const e=t.props["onUpdate:modelValue"]||!1;return(0,s.cy)(e)?t=>(0,s.DY)(e,t):e};function W(t){t.target.composing=!0}function H(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const q=Symbol("_assign"),K={created(t,{modifiers:{lazy:e,trim:n,number:i}},r){t[q]=$(r);const o=i||r.props&&"number"===r.props.type;A(t,e?"change":"input",(e=>{if(e.target.composing)return;let i=t.value;n&&(i=i.trim()),o&&(i=(0,s.bB)(i)),t[q](i)})),n&&A(t,"change",(()=>{t.value=t.value.trim()})),e||(A(t,"compositionstart",W),A(t,"compositionend",H),A(t,"change",H))},mounted(t,{value:e}){t.value=null==e?"":e},beforeUpdate(t,{value:e,oldValue:n,modifiers:{lazy:i,trim:r,number:o}},a){if(t[q]=$(a),t.composing)return;const c=!o&&"number"!==t.type||/^0\d/.test(t.value)?t.value:(0,s.bB)(t.value),l=null==e?"":e;if(c!==l){if(document.activeElement===t&&"range"!==t.type){if(i&&e===n)return;if(r&&t.value.trim()===l)return}t.value=l}}},G={deep:!0,created(t,e,n){t[q]=$(n),A(t,"change",(()=>{const e=t._modelValue,n=Q(t),i=t.checked,r=t[q];if((0,s.cy)(e)){const t=(0,s.u3)(e,n),o=-1!==t;if(i&&!o)r(e.concat(n));else if(!i&&o){const n=[...e];n.splice(t,1),r(n)}}else if((0,s.vM)(e)){const t=new Set(e);i?t.add(n):t.delete(n),r(t)}else r(X(t,i))}))},mounted:Y,beforeUpdate(t,e,n){t[q]=$(n),Y(t,e,n)}};function Y(t,{value:e},n){let i;t._modelValue=e,i=(0,s.cy)(e)?(0,s.u3)(e,n.props.value)>-1:(0,s.vM)(e)?e.has(n.props.value):(0,s.BX)(e,X(t,!0)),t.checked!==i&&(t.checked=i)}function Q(t){return"_value"in t?t._value:t.value}function X(t,e){const n=e?"_trueValue":"_falseValue";return n in t?t[n]:e}const J=(0,s.X$)({patchProp:z},d);let Z;function tt(){return Z||(Z=(0,i.K9)(J))}const et=(...t)=>{const e=tt().createApp(...t);const{mount:n}=e;return e.mount=t=>{const i=it(t);if(!i)return;const r=e._component;(0,s.Tn)(r)||r.render||r.template||(r.template=i.innerHTML),1===i.nodeType&&(i.textContent="");const o=n(i,!1,nt(i));return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),o},e};function nt(t){return t instanceof SVGElement?"svg":"function"===typeof MathMLElement&&t instanceof MathMLElement?"mathml":void 0}function it(t){if((0,s.Kg)(t)){const e=document.querySelector(t);return e}return t}},33:function(t,e,n){"use strict";
/**
* @vue/shared v3.5.11
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
/*! #__NO_SIDE_EFFECTS__ */
function i(t){const e=Object.create(null);for(const n of t.split(","))e[n]=1;return t=>t in e}n.d(e,{$3:function(){return f},$H:function(){return F},BH:function(){return H},BX:function(){return nt},Bm:function(){return w},C4:function(){return X},CE:function(){return g},CP:function(){return l},DY:function(){return U},Gv:function(){return T},J$:function(){return Z},Kg:function(){return b},MZ:function(){return s},Mp:function(){return c},NO:function(){return a},Oj:function(){return r},PT:function(){return P},Qd:function(){return S},Ro:function(){return z},SU:function(){return A},TF:function(){return u},Tg:function(){return D},Tn:function(){return _},Tr:function(){return q},We:function(){return $},X$:function(){return h},Y2:function(){return tt},ZH:function(){return M},Zf:function(){return I},bB:function(){return j},cy:function(){return p},gd:function(){return v},pD:function(){return i},rU:function(){return L},tE:function(){return o},u3:function(){return it},vM:function(){return m},v_:function(){return rt},yI:function(){return k},yL:function(){return x},yQ:function(){return V}});const s={},r=[],o=()=>{},a=()=>!1,c=t=>111===t.charCodeAt(0)&&110===t.charCodeAt(1)&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),l=t=>t.startsWith("onUpdate:"),h=Object.assign,u=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},d=Object.prototype.hasOwnProperty,f=(t,e)=>d.call(t,e),p=Array.isArray,g=t=>"[object Map]"===C(t),m=t=>"[object Set]"===C(t),y=t=>"[object Date]"===C(t),v=t=>"[object RegExp]"===C(t),_=t=>"function"===typeof t,b=t=>"string"===typeof t,w=t=>"symbol"===typeof t,T=t=>null!==t&&"object"===typeof t,x=t=>(T(t)||_(t))&&_(t.then)&&_(t.catch),E=Object.prototype.toString,C=t=>E.call(t),I=t=>C(t).slice(8,-1),S=t=>"[object Object]"===C(t),k=t=>b(t)&&"NaN"!==t&&"-"!==t[0]&&""+parseInt(t,10)===t,A=i(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),O=t=>{const e=Object.create(null);return n=>{const i=e[n];return i||(e[n]=t(n))}},R=/-(\w)/g,P=O((t=>t.replace(R,((t,e)=>e?e.toUpperCase():"")))),N=/\B([A-Z])/g,D=O((t=>t.replace(N,"-$1").toLowerCase())),M=O((t=>t.charAt(0).toUpperCase()+t.slice(1))),L=O((t=>{const e=t?`on${M(t)}`:"";return e})),F=(t,e)=>!Object.is(t,e),U=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},V=(t,e,n,i=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:i,value:n})},j=t=>{const e=parseFloat(t);return isNaN(e)?t:e},z=t=>{const e=b(t)?Number(t):NaN;return isNaN(e)?t:e};let B;const $=()=>B||(B="undefined"!==typeof globalThis?globalThis:"undefined"!==typeof self?self:"undefined"!==typeof window?window:"undefined"!==typeof n.g?n.g:{});const W="Infinity,undefined,NaN,isFinite,isNaN,parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,BigInt,console,Error,Symbol",H=i(W);function q(t){if(p(t)){const e={};for(let n=0;n<t.length;n++){const i=t[n],s=b(i)?Q(i):q(i);if(s)for(const t in s)e[t]=s[t]}return e}if(b(t)||T(t))return t}const K=/;(?![^(]*\))/g,G=/:([^]+)/,Y=/\/\*[^]*?\*\//g;function Q(t){const e={};return t.replace(Y,"").split(K).forEach((t=>{if(t){const n=t.split(G);n.length>1&&(e[n[0].trim()]=n[1].trim())}})),e}function X(t){let e="";if(b(t))e=t;else if(p(t))for(let n=0;n<t.length;n++){const i=X(t[n]);i&&(e+=i+" ")}else if(T(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const J="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Z=i(J);function tt(t){return!!t||""===t}function et(t,e){if(t.length!==e.length)return!1;let n=!0;for(let i=0;n&&i<t.length;i++)n=nt(t[i],e[i]);return n}function nt(t,e){if(t===e)return!0;let n=y(t),i=y(e);if(n||i)return!(!n||!i)&&t.getTime()===e.getTime();if(n=w(t),i=w(e),n||i)return t===e;if(n=p(t),i=p(e),n||i)return!(!n||!i)&&et(t,e);if(n=T(t),i=T(e),n||i){if(!n||!i)return!1;const s=Object.keys(t).length,r=Object.keys(e).length;if(s!==r)return!1;for(const n in t){const i=t.hasOwnProperty(n),s=e.hasOwnProperty(n);if(i&&!s||!i&&s||!nt(t[n],e[n]))return!1}}return String(t)===String(e)}function it(t,e){return t.findIndex((t=>nt(t,e)))}const st=t=>!(!t||!0!==t["__v_isRef"]),rt=t=>b(t)?t:null==t?"":p(t)||T(t)&&(t.toString===E||!_(t.toString))?st(t)?rt(t.value):JSON.stringify(t,ot,2):String(t),ot=(t,e)=>st(e)?ot(t,e.value):g(e)?{[`Map(${e.size})`]:[...e.entries()].reduce(((t,[e,n],i)=>(t[at(e,i)+" =>"]=n,t)),{})}:m(e)?{[`Set(${e.size})`]:[...e.values()].map((t=>at(t)))}:w(e)?at(e):!T(e)||p(e)||S(e)?e:String(e),at=(t,e="")=>{var n;return w(t)?`Symbol(${null!=(n=t.description)?n:e})`:t}},3839:function(t,e,n){"use strict";n.d(e,{Ay:function(){return Tt}});var i=n(7168),s=n.n(i),r=n(1014);
/*!
* chartjs-plugin-zoom v2.0.1
* undefined
 * (c) 2016-2023 chartjs-plugin-zoom Contributors
 * Released under the MIT License
 */
const o=t=>t&&t.enabled&&t.modifierKey,a=(t,e)=>t&&e[t+"Key"],c=(t,e)=>t&&!e[t+"Key"];function l(t,e,n){return void 0===t||("string"===typeof t?-1!==t.indexOf(e):"function"===typeof t&&-1!==t({chart:n}).indexOf(e))}function h(t,e){return"function"===typeof t&&(t=t({chart:e})),"string"===typeof t?{x:-1!==t.indexOf("x"),y:-1!==t.indexOf("y")}:{x:!1,y:!1}}function u(t,e){let n;return function(){return clearTimeout(n),n=setTimeout(t,e),e}}function d({x:t,y:e},n){const i=n.scales,s=Object.keys(i);for(let r=0;r<s.length;r++){const n=i[s[r]];if(e>=n.top&&e<=n.bottom&&t>=n.left&&t<=n.right)return n}return null}function f(t,e,n){const{mode:i="xy",scaleMode:s,overScaleMode:o}=t||{},a=d(e,n),c=h(i,n),l=h(s,n);if(o){const t=h(o,n);for(const e of["x","y"])t[e]&&(l[e]=c[e],c[e]=!1)}if(a&&l[a.axis])return[a];const u=[];return(0,r.F)(n.scales,(function(t){c[t.axis]&&u.push(t)})),u}const p=new WeakMap;function g(t){let e=p.get(t);return e||(e={originalScaleLimits:{},updatedScaleLimits:{},handlers:{},panDelta:{}},p.set(t,e)),e}function m(t){p.delete(t)}function y(t,e,n){const i=t.max-t.min,s=i*(e-1),r=t.isHorizontal()?n.x:n.y,o=Math.max(0,Math.min(1,(t.getValueForPixel(r)-t.min)/i||0)),a=1-o;return{min:s*o,max:s*a}}function v(t,e,n,i,s){let o=n[i];if("original"===o){const n=t.originalScaleLimits[e.id][i];o=(0,r.v)(n.options,n.scale)}return(0,r.v)(o,s)}function _(t,e,n){const i=t.getValueForPixel(e),s=t.getValueForPixel(n);return{min:Math.min(i,s),max:Math.max(i,s)}}function b(t,{min:e,max:n},i,s=!1){const r=g(t.chart),{id:o,axis:a,options:c}=t,l=i&&(i[o]||i[a])||{},{minRange:h=0}=l,u=v(r,t,l,"min",-1/0),d=v(r,t,l,"max",1/0),f=s?Math.max(n-e,h):t.max-t.min,p=(f-n+e)/2;return e-=p,n+=p,e<u?(e=u,n=Math.min(u+f,d)):n>d&&(n=d,e=Math.max(d-f,u)),c.min=e,c.max=n,r.updatedScaleLimits[t.id]={min:e,max:n},t.parse(e)!==t.min||t.parse(n)!==t.max}function w(t,e,n,i){const s=y(t,e,n),r={min:t.min+s.min,max:t.max-s.max};return b(t,r,i,!0)}function T(t,e,n,i){b(t,_(t,e,n),i,!0)}const x=t=>0===t||isNaN(t)?0:t<0?Math.min(Math.round(t),-1):Math.max(Math.round(t),1);function E(t){const e=t.getLabels(),n=e.length-1;t.min>0&&(t.min-=1),t.max<n&&(t.max+=1)}function C(t,e,n,i){const s=y(t,e,n);t.min===t.max&&e<1&&E(t);const r={min:t.min+x(s.min),max:t.max-x(s.max)};return b(t,r,i,!0)}function I(t){return t.isHorizontal()?t.width:t.height}function S(t,e,n){const i=t.getLabels(),s=i.length-1;let{min:r,max:o}=t;const a=Math.max(o-r,1),c=Math.round(I(t)/Math.max(a,10)),l=Math.round(Math.abs(e/c));let h;return e<-c?(o=Math.min(o+l,s),r=1===a?o:o-a,h=o===s):e>c&&(r=Math.max(0,r-l),o=1===a?r:r+a,h=0===r),b(t,{min:r,max:o},n)||h}const k={second:500,minute:3e4,hour:18e5,day:432e5,week:3024e5,month:1296e6,quarter:5184e6,year:157248e5};function A(t,e,n,i=!1){const{min:s,max:r,options:o}=t,a=o.time&&o.time.round,c=k[a]||0,l=t.getValueForPixel(t.getPixelForValue(s+c)-e),h=t.getValueForPixel(t.getPixelForValue(r+c)-e),{min:u=-1/0,max:d=1/0}=i&&n&&n[t.axis]||{};return!!(isNaN(l)||isNaN(h)||l<u||h>d)||b(t,{min:l,max:h},n,i)}function O(t,e,n){return A(t,e,n,!0)}const R={category:C,default:w},P={default:T},N={category:S,default:A,logarithmic:O,timeseries:O};function D(t,e,n){const{id:i,options:{min:s,max:r}}=t;if(!e[i]||!n[i])return!0;const o=n[i];return o.min!==s||o.max!==r}function M(t,e){(0,r.F)(t,((n,i)=>{e[i]||delete t[i]}))}function L(t,e){const{scales:n}=t,{originalScaleLimits:i,updatedScaleLimits:s}=e;return(0,r.F)(n,(function(t){D(t,i,s)&&(i[t.id]={min:{scale:t.min,options:t.options.min},max:{scale:t.max,options:t.options.max}})})),M(i,n),M(s,n),i}function F(t,e,n,i){const s=R[t.type]||R.default;(0,r.Q)(s,[t,e,n,i])}function U(t,e,n,i,s){const o=P[t.type]||P.default;(0,r.Q)(o,[t,e,n,i,s])}function V(t){const e=t.chartArea;return{x:(e.left+e.right)/2,y:(e.top+e.bottom)/2}}function j(t,e,n="none"){const{x:i=1,y:s=1,focalPoint:o=V(t)}="number"===typeof e?{x:e,y:e}:e,a=g(t),{options:{limits:c,zoom:l}}=a;L(t,a);const h=1!==i,u=1!==s,d=f(l,o,t);(0,r.F)(d||t.scales,(function(t){t.isHorizontal()&&h?F(t,i,o,c):!t.isHorizontal()&&u&&F(t,s,o,c)})),t.update(n),(0,r.Q)(l.onZoom,[{chart:t}])}function z(t,e,n,i="none"){const s=g(t),{options:{limits:o,zoom:a}}=s,{mode:c="xy"}=a;L(t,s);const h=l(c,"x",t),u=l(c,"y",t);(0,r.F)(t.scales,(function(t){t.isHorizontal()&&h?U(t,e.x,n.x,o):!t.isHorizontal()&&u&&U(t,e.y,n.y,o)})),t.update(i),(0,r.Q)(a.onZoom,[{chart:t}])}function B(t,e,n,i="none"){L(t,g(t));const s=t.scales[e];b(s,n,void 0,!0),t.update(i)}function $(t,e="default"){const n=g(t),i=L(t,n);(0,r.F)(t.scales,(function(t){const e=t.options;i[t.id]?(e.min=i[t.id].min.options,e.max=i[t.id].max.options):(delete e.min,delete e.max)})),t.update(e),(0,r.Q)(n.options.zoom.onZoomComplete,[{chart:t}])}function W(t,e){const n=t.originalScaleLimits[e];if(!n)return;const{min:i,max:s}=n;return(0,r.v)(s.options,s.scale)-(0,r.v)(i.options,i.scale)}function H(t){const e=g(t);let n=1,i=1;return(0,r.F)(t.scales,(function(t){const s=W(e,t.id);if(s){const e=Math.round(s/(t.max-t.min)*100)/100;n=Math.min(n,e),i=Math.max(i,e)}})),n<1?n:i}function q(t,e,n,i){const{panDelta:s}=i,o=s[t.id]||0;(0,r.s)(o)===(0,r.s)(e)&&(e+=o);const a=N[t.type]||N.default;(0,r.Q)(a,[t,e,n])?s[t.id]=0:s[t.id]=e}function K(t,e,n,i="none"){const{x:s=0,y:o=0}="number"===typeof e?{x:e,y:e}:e,a=g(t),{options:{pan:c,limits:l}}=a,{onPan:h}=c||{};L(t,a);const u=0!==s,d=0!==o;(0,r.F)(n||t.scales,(function(t){t.isHorizontal()&&u?q(t,s,l,a):!t.isHorizontal()&&d&&q(t,o,l,a)})),t.update(i),(0,r.Q)(h,[{chart:t}])}function G(t){const e=g(t);L(t,e);const n={};for(const i of Object.keys(t.scales)){const{min:t,max:s}=e.originalScaleLimits[i]||{min:{},max:{}};n[i]={min:t.scale,max:s.scale}}return n}function Y(t){const e=G(t);for(const n of Object.keys(t.scales)){const{min:i,max:s}=e[n];if(void 0!==i&&t.scales[n].min!==i)return!0;if(void 0!==s&&t.scales[n].max!==s)return!0}return!1}function Q(t,e){const{handlers:n}=g(t),i=n[e];i&&i.target&&(i.target.removeEventListener(e,i),delete n[e])}function X(t,e,n,i){const{handlers:s,options:r}=g(t),o=s[n];o&&o.target===e||(Q(t,n),s[n]=e=>i(t,e,r),s[n].target=e,e.addEventListener(n,s[n]))}function J(t,e){const n=g(t);n.dragStart&&(n.dragging=!0,n.dragEnd=e,t.update("none"))}function Z(t,e){const n=g(t);n.dragStart&&"Escape"===e.key&&(Q(t,"keydown"),n.dragging=!1,n.dragStart=n.dragEnd=null,t.update("none"))}function tt(t,e,n){const{onZoomStart:i,onZoomRejected:s}=n;if(i){const n=(0,r.z)(e,t);if(!1===(0,r.Q)(i,[{chart:t,event:e,point:n}]))return(0,r.Q)(s,[{chart:t,event:e}]),!1}}function et(t,e){const n=g(t),{pan:i,zoom:s={}}=n.options;if(0!==e.button||a(o(i),e)||c(o(s.drag),e))return(0,r.Q)(s.onZoomRejected,[{chart:t,event:e}]);!1!==tt(t,e,s)&&(n.dragStart=e,X(t,t.canvas,"mousemove",J),X(t,window.document,"keydown",Z))}function nt(t,e,n,i){const s=l(e,"x",t),o=l(e,"y",t);let{top:a,left:c,right:h,bottom:u,width:d,height:f}=t.chartArea;const p=(0,r.z)(n,t),g=(0,r.z)(i,t);s&&(c=Math.min(p.x,g.x),h=Math.max(p.x,g.x)),o&&(a=Math.min(p.y,g.y),u=Math.max(p.y,g.y));const m=h-c,y=u-a;return{left:c,top:a,right:h,bottom:u,width:m,height:y,zoomX:s&&m?1+(d-m)/d:1,zoomY:o&&y?1+(f-y)/f:1}}function it(t,e){const n=g(t);if(!n.dragStart)return;Q(t,"mousemove");const{mode:i,onZoomComplete:s,drag:{threshold:o=0}}=n.options.zoom,a=nt(t,i,n.dragStart,e),c=l(i,"x",t)?a.width:0,h=l(i,"y",t)?a.height:0,u=Math.sqrt(c*c+h*h);if(n.dragStart=n.dragEnd=null,u<=o)return n.dragging=!1,void t.update("none");z(t,{x:a.left,y:a.top},{x:a.right,y:a.bottom},"zoom"),setTimeout((()=>n.dragging=!1),500),(0,r.Q)(s,[{chart:t}])}function st(t,e,n){if(c(o(n.wheel),e))(0,r.Q)(n.onZoomRejected,[{chart:t,event:e}]);else if(!1!==tt(t,e,n)&&(e.cancelable&&e.preventDefault(),void 0!==e.deltaY))return!0}function rt(t,e){const{handlers:{onZoomComplete:n},options:{zoom:i}}=g(t);if(!st(t,e,i))return;const s=e.target.getBoundingClientRect(),r=1+(e.deltaY>=0?-i.wheel.speed:i.wheel.speed),o={x:r,y:r,focalPoint:{x:e.clientX-s.left,y:e.clientY-s.top}};j(t,o),n&&n()}function ot(t,e,n,i){n&&(g(t).handlers[e]=u((()=>(0,r.Q)(n,[{chart:t}])),i))}function at(t,e){const n=t.canvas,{wheel:i,drag:s,onZoomComplete:r}=e.zoom;i.enabled?(X(t,n,"wheel",rt),ot(t,"onZoomComplete",r,250)):Q(t,"wheel"),s.enabled?(X(t,n,"mousedown",et),X(t,n.ownerDocument,"mouseup",it)):(Q(t,"mousedown"),Q(t,"mousemove"),Q(t,"mouseup"),Q(t,"keydown"))}function ct(t){Q(t,"mousedown"),Q(t,"mousemove"),Q(t,"mouseup"),Q(t,"wheel"),Q(t,"click"),Q(t,"keydown")}function lt(t,e){return function(n,i){const{pan:s,zoom:l={}}=e.options;if(!s||!s.enabled)return!1;const h=i&&i.srcEvent;return!h||(!(!e.panning&&"mouse"===i.pointerType&&(c(o(s),h)||a(o(l.drag),h)))||((0,r.Q)(s.onPanRejected,[{chart:t,event:i}]),!1))}}function ht(t,e){const n=Math.abs(t.clientX-e.clientX),i=Math.abs(t.clientY-e.clientY),s=n/i;let r,o;return s>.3&&s<1.7?r=o=!0:n>i?r=!0:o=!0,{x:r,y:o}}function ut(t,e,n){if(e.scale){const{center:i,pointers:s}=n,r=1/e.scale*n.scale,o=n.target.getBoundingClientRect(),a=ht(s[0],s[1]),c=e.options.zoom.mode,h={x:a.x&&l(c,"x",t)?r:1,y:a.y&&l(c,"y",t)?r:1,focalPoint:{x:i.x-o.left,y:i.y-o.top}};j(t,h),e.scale=n.scale}}function dt(t,e){e.options.zoom.pinch.enabled&&(e.scale=1)}function ft(t,e,n){e.scale&&(ut(t,e,n),e.scale=null,(0,r.Q)(e.options.zoom.onZoomComplete,[{chart:t}]))}function pt(t,e,n){const i=e.delta;i&&(e.panning=!0,K(t,{x:n.deltaX-i.x,y:n.deltaY-i.y},e.panScales),e.delta={x:n.deltaX,y:n.deltaY})}function gt(t,e,n){const{enabled:i,onPanStart:s,onPanRejected:o}=e.options.pan;if(!i)return;const a=n.target.getBoundingClientRect(),c={x:n.center.x-a.left,y:n.center.y-a.top};if(!1===(0,r.Q)(s,[{chart:t,event:n,point:c}]))return(0,r.Q)(o,[{chart:t,event:n}]);e.panScales=f(e.options.pan,c,t),e.delta={x:0,y:0},clearTimeout(e.panEndTimeout),pt(t,e,n)}function mt(t,e){e.delta=null,e.panning&&(e.panEndTimeout=setTimeout((()=>e.panning=!1),500),(0,r.Q)(e.options.pan.onPanComplete,[{chart:t}]))}const yt=new WeakMap;function vt(t,e){const n=g(t),i=t.canvas,{pan:r,zoom:o}=e,a=new(s().Manager)(i);o&&o.pinch.enabled&&(a.add(new(s().Pinch)),a.on("pinchstart",(()=>dt(t,n))),a.on("pinch",(e=>ut(t,n,e))),a.on("pinchend",(e=>ft(t,n,e)))),r&&r.enabled&&(a.add(new(s().Pan)({threshold:r.threshold,enable:lt(t,n)})),a.on("panstart",(e=>gt(t,n,e))),a.on("panmove",(e=>pt(t,n,e))),a.on("panend",(()=>mt(t,n)))),yt.set(t,a)}function _t(t){const e=yt.get(t);e&&(e.remove("pinchstart"),e.remove("pinch"),e.remove("pinchend"),e.remove("panstart"),e.remove("pan"),e.remove("panend"),e.destroy(),yt.delete(t))}var bt="2.0.1";function wt(t,e,n){const i=n.zoom.drag,{dragStart:s,dragEnd:r}=g(t);if(i.drawTime!==e||!r)return;const{left:o,top:a,width:c,height:l}=nt(t,n.zoom.mode,s,r),h=t.ctx;h.save(),h.beginPath(),h.fillStyle=i.backgroundColor||"rgba(225,225,225,0.3)",h.fillRect(o,a,c,l),i.borderWidth>0&&(h.lineWidth=i.borderWidth,h.strokeStyle=i.borderColor||"rgba(225,225,225)",h.strokeRect(o,a,c,l)),h.restore()}var Tt={id:"zoom",version:bt,defaults:{pan:{enabled:!1,mode:"xy",threshold:10,modifierKey:null},zoom:{wheel:{enabled:!1,speed:.1,modifierKey:null},drag:{enabled:!1,drawTime:"beforeDatasetsDraw",modifierKey:null},pinch:{enabled:!1},mode:"xy"}},start:function(t,e,n){const i=g(t);i.options=n,Object.prototype.hasOwnProperty.call(n.zoom,"enabled")&&console.warn("The option `zoom.enabled` is no longer supported. Please use `zoom.wheel.enabled`, `zoom.drag.enabled`, or `zoom.pinch.enabled`."),(Object.prototype.hasOwnProperty.call(n.zoom,"overScaleMode")||Object.prototype.hasOwnProperty.call(n.pan,"overScaleMode"))&&console.warn("The option `overScaleMode` is deprecated. Please use `scaleMode` instead (and update `mode` as desired)."),s()&&vt(t,n),t.pan=(e,n,i)=>K(t,e,n,i),t.zoom=(e,n)=>j(t,e,n),t.zoomRect=(e,n,i)=>z(t,e,n,i),t.zoomScale=(e,n,i)=>B(t,e,n,i),t.resetZoom=e=>$(t,e),t.getZoomLevel=()=>H(t),t.getInitialScaleBounds=()=>G(t),t.isZoomedOrPanned=()=>Y(t)},beforeEvent(t){const e=g(t);if(e.panning||e.dragging)return!1},beforeUpdate:function(t,e,n){const i=g(t);i.options=n,at(t,n)},beforeDatasetsDraw(t,e,n){wt(t,"beforeDatasetsDraw",n)},afterDatasetsDraw(t,e,n){wt(t,"afterDatasetsDraw",n)},beforeDraw(t,e,n){wt(t,"beforeDraw",n)},afterDraw(t,e,n){wt(t,"afterDraw",n)},stop:function(t){ct(t),s()&&_t(t),m(t)},panFunctions:N,zoomFunctions:R,zoomRectFunctions:P}},7168:function(t,e,n){var i;
/*! Hammer.JS - v2.0.7 - 2016-04-22
 * http://hammerjs.github.io/
 *
 * Copyright (c) 2016 Jorik Tangelder;
 * Licensed under the MIT license */(function(s,r,o,a){"use strict";var c,l=["","webkit","Moz","MS","ms","o"],h=r.createElement("div"),u="function",d=Math.round,f=Math.abs,p=Date.now;function g(t,e,n){return setTimeout(T(t,n),e)}function m(t,e,n){return!!Array.isArray(t)&&(y(t,n[e],n),!0)}function y(t,e,n){var i;if(t)if(t.forEach)t.forEach(e,n);else if(t.length!==a){i=0;while(i<t.length)e.call(n,t[i],i,t),i++}else for(i in t)t.hasOwnProperty(i)&&e.call(n,t[i],i,t)}function v(t,e,n){var i="DEPRECATED METHOD: "+e+"\n"+n+" AT \n";return function(){var e=new Error("get-stack-trace"),n=e&&e.stack?e.stack.replace(/^[^\(]+?[\n$]/gm,"").replace(/^\s+at\s+/gm,"").replace(/^Object.<anonymous>\s*\(/gm,"{anonymous}()@"):"Unknown Stack Trace",r=s.console&&(s.console.warn||s.console.log);return r&&r.call(s.console,i,n),t.apply(this,arguments)}}c="function"!==typeof Object.assign?function(t){if(t===a||null===t)throw new TypeError("Cannot convert undefined or null to object");for(var e=Object(t),n=1;n<arguments.length;n++){var i=arguments[n];if(i!==a&&null!==i)for(var s in i)i.hasOwnProperty(s)&&(e[s]=i[s])}return e}:Object.assign;var _=v((function(t,e,n){var i=Object.keys(e),s=0;while(s<i.length)(!n||n&&t[i[s]]===a)&&(t[i[s]]=e[i[s]]),s++;return t}),"extend","Use `assign`."),b=v((function(t,e){return _(t,e,!0)}),"merge","Use `assign`.");function w(t,e,n){var i,s=e.prototype;i=t.prototype=Object.create(s),i.constructor=t,i._super=s,n&&c(i,n)}function T(t,e){return function(){return t.apply(e,arguments)}}function x(t,e){return typeof t==u?t.apply(e&&e[0]||a,e):t}function E(t,e){return t===a?e:t}function C(t,e,n){y(A(e),(function(e){t.addEventListener(e,n,!1)}))}function I(t,e,n){y(A(e),(function(e){t.removeEventListener(e,n,!1)}))}function S(t,e){while(t){if(t==e)return!0;t=t.parentNode}return!1}function k(t,e){return t.indexOf(e)>-1}function A(t){return t.trim().split(/\s+/g)}function O(t,e,n){if(t.indexOf&&!n)return t.indexOf(e);var i=0;while(i<t.length){if(n&&t[i][n]==e||!n&&t[i]===e)return i;i++}return-1}function R(t){return Array.prototype.slice.call(t,0)}function P(t,e,n){var i=[],s=[],r=0;while(r<t.length){var o=e?t[r][e]:t[r];O(s,o)<0&&i.push(t[r]),s[r]=o,r++}return n&&(i=e?i.sort((function(t,n){return t[e]>n[e]})):i.sort()),i}function N(t,e){var n,i,s=e[0].toUpperCase()+e.slice(1),r=0;while(r<l.length){if(n=l[r],i=n?n+s:e,i in t)return i;r++}return a}var D=1;function M(){return D++}function L(t){var e=t.ownerDocument||t;return e.defaultView||e.parentWindow||s}var F=/mobile|tablet|ip(ad|hone|od)|android/i,U="ontouchstart"in s,V=N(s,"PointerEvent")!==a,j=U&&F.test(navigator.userAgent),z="touch",B="pen",$="mouse",W="kinect",H=25,q=1,K=2,G=4,Y=8,Q=1,X=2,J=4,Z=8,tt=16,et=X|J,nt=Z|tt,it=et|nt,st=["x","y"],rt=["clientX","clientY"];function ot(t,e){var n=this;this.manager=t,this.callback=e,this.element=t.element,this.target=t.options.inputTarget,this.domHandler=function(e){x(t.options.enable,[t])&&n.handler(e)},this.init()}function at(t){var e,n=t.options.inputClass;return e=n||(V?kt:j?Lt:U?jt:xt),new e(t,ct)}function ct(t,e,n){var i=n.pointers.length,s=n.changedPointers.length,r=e&q&&i-s===0,o=e&(G|Y)&&i-s===0;n.isFirst=!!r,n.isFinal=!!o,r&&(t.session={}),n.eventType=e,lt(t,n),t.emit("hammer.input",n),t.recognize(n),t.session.prevInput=n}function lt(t,e){var n=t.session,i=e.pointers,s=i.length;n.firstInput||(n.firstInput=dt(e)),s>1&&!n.firstMultiple?n.firstMultiple=dt(e):1===s&&(n.firstMultiple=!1);var r=n.firstInput,o=n.firstMultiple,a=o?o.center:r.center,c=e.center=ft(i);e.timeStamp=p(),e.deltaTime=e.timeStamp-r.timeStamp,e.angle=yt(a,c),e.distance=mt(a,c),ht(n,e),e.offsetDirection=gt(e.deltaX,e.deltaY);var l=pt(e.deltaTime,e.deltaX,e.deltaY);e.overallVelocityX=l.x,e.overallVelocityY=l.y,e.overallVelocity=f(l.x)>f(l.y)?l.x:l.y,e.scale=o?_t(o.pointers,i):1,e.rotation=o?vt(o.pointers,i):0,e.maxPointers=n.prevInput?e.pointers.length>n.prevInput.maxPointers?e.pointers.length:n.prevInput.maxPointers:e.pointers.length,ut(n,e);var h=t.element;S(e.srcEvent.target,h)&&(h=e.srcEvent.target),e.target=h}function ht(t,e){var n=e.center,i=t.offsetDelta||{},s=t.prevDelta||{},r=t.prevInput||{};e.eventType!==q&&r.eventType!==G||(s=t.prevDelta={x:r.deltaX||0,y:r.deltaY||0},i=t.offsetDelta={x:n.x,y:n.y}),e.deltaX=s.x+(n.x-i.x),e.deltaY=s.y+(n.y-i.y)}function ut(t,e){var n,i,s,r,o=t.lastInterval||e,c=e.timeStamp-o.timeStamp;if(e.eventType!=Y&&(c>H||o.velocity===a)){var l=e.deltaX-o.deltaX,h=e.deltaY-o.deltaY,u=pt(c,l,h);i=u.x,s=u.y,n=f(u.x)>f(u.y)?u.x:u.y,r=gt(l,h),t.lastInterval=e}else n=o.velocity,i=o.velocityX,s=o.velocityY,r=o.direction;e.velocity=n,e.velocityX=i,e.velocityY=s,e.direction=r}function dt(t){var e=[],n=0;while(n<t.pointers.length)e[n]={clientX:d(t.pointers[n].clientX),clientY:d(t.pointers[n].clientY)},n++;return{timeStamp:p(),pointers:e,center:ft(e),deltaX:t.deltaX,deltaY:t.deltaY}}function ft(t){var e=t.length;if(1===e)return{x:d(t[0].clientX),y:d(t[0].clientY)};var n=0,i=0,s=0;while(s<e)n+=t[s].clientX,i+=t[s].clientY,s++;return{x:d(n/e),y:d(i/e)}}function pt(t,e,n){return{x:e/t||0,y:n/t||0}}function gt(t,e){return t===e?Q:f(t)>=f(e)?t<0?X:J:e<0?Z:tt}function mt(t,e,n){n||(n=st);var i=e[n[0]]-t[n[0]],s=e[n[1]]-t[n[1]];return Math.sqrt(i*i+s*s)}function yt(t,e,n){n||(n=st);var i=e[n[0]]-t[n[0]],s=e[n[1]]-t[n[1]];return 180*Math.atan2(s,i)/Math.PI}function vt(t,e){return yt(e[1],e[0],rt)+yt(t[1],t[0],rt)}function _t(t,e){return mt(e[0],e[1],rt)/mt(t[0],t[1],rt)}ot.prototype={handler:function(){},init:function(){this.evEl&&C(this.element,this.evEl,this.domHandler),this.evTarget&&C(this.target,this.evTarget,this.domHandler),this.evWin&&C(L(this.element),this.evWin,this.domHandler)},destroy:function(){this.evEl&&I(this.element,this.evEl,this.domHandler),this.evTarget&&I(this.target,this.evTarget,this.domHandler),this.evWin&&I(L(this.element),this.evWin,this.domHandler)}};var bt={mousedown:q,mousemove:K,mouseup:G},wt="mousedown",Tt="mousemove mouseup";function xt(){this.evEl=wt,this.evWin=Tt,this.pressed=!1,ot.apply(this,arguments)}w(xt,ot,{handler:function(t){var e=bt[t.type];e&q&&0===t.button&&(this.pressed=!0),e&K&&1!==t.which&&(e=G),this.pressed&&(e&G&&(this.pressed=!1),this.callback(this.manager,e,{pointers:[t],changedPointers:[t],pointerType:$,srcEvent:t}))}});var Et={pointerdown:q,pointermove:K,pointerup:G,pointercancel:Y,pointerout:Y},Ct={2:z,3:B,4:$,5:W},It="pointerdown",St="pointermove pointerup pointercancel";function kt(){this.evEl=It,this.evWin=St,ot.apply(this,arguments),this.store=this.manager.session.pointerEvents=[]}s.MSPointerEvent&&!s.PointerEvent&&(It="MSPointerDown",St="MSPointerMove MSPointerUp MSPointerCancel"),w(kt,ot,{handler:function(t){var e=this.store,n=!1,i=t.type.toLowerCase().replace("ms",""),s=Et[i],r=Ct[t.pointerType]||t.pointerType,o=r==z,a=O(e,t.pointerId,"pointerId");s&q&&(0===t.button||o)?a<0&&(e.push(t),a=e.length-1):s&(G|Y)&&(n=!0),a<0||(e[a]=t,this.callback(this.manager,s,{pointers:e,changedPointers:[t],pointerType:r,srcEvent:t}),n&&e.splice(a,1))}});var At={touchstart:q,touchmove:K,touchend:G,touchcancel:Y},Ot="touchstart",Rt="touchstart touchmove touchend touchcancel";function Pt(){this.evTarget=Ot,this.evWin=Rt,this.started=!1,ot.apply(this,arguments)}function Nt(t,e){var n=R(t.touches),i=R(t.changedTouches);return e&(G|Y)&&(n=P(n.concat(i),"identifier",!0)),[n,i]}w(Pt,ot,{handler:function(t){var e=At[t.type];if(e===q&&(this.started=!0),this.started){var n=Nt.call(this,t,e);e&(G|Y)&&n[0].length-n[1].length===0&&(this.started=!1),this.callback(this.manager,e,{pointers:n[0],changedPointers:n[1],pointerType:z,srcEvent:t})}}});var Dt={touchstart:q,touchmove:K,touchend:G,touchcancel:Y},Mt="touchstart touchmove touchend touchcancel";function Lt(){this.evTarget=Mt,this.targetIds={},ot.apply(this,arguments)}function Ft(t,e){var n=R(t.touches),i=this.targetIds;if(e&(q|K)&&1===n.length)return i[n[0].identifier]=!0,[n,n];var s,r,o=R(t.changedTouches),a=[],c=this.target;if(r=n.filter((function(t){return S(t.target,c)})),e===q){s=0;while(s<r.length)i[r[s].identifier]=!0,s++}s=0;while(s<o.length)i[o[s].identifier]&&a.push(o[s]),e&(G|Y)&&delete i[o[s].identifier],s++;return a.length?[P(r.concat(a),"identifier",!0),a]:void 0}w(Lt,ot,{handler:function(t){var e=Dt[t.type],n=Ft.call(this,t,e);n&&this.callback(this.manager,e,{pointers:n[0],changedPointers:n[1],pointerType:z,srcEvent:t})}});var Ut=2500,Vt=25;function jt(){ot.apply(this,arguments);var t=T(this.handler,this);this.touch=new Lt(this.manager,t),this.mouse=new xt(this.manager,t),this.primaryTouch=null,this.lastTouches=[]}function zt(t,e){t&q?(this.primaryTouch=e.changedPointers[0].identifier,Bt.call(this,e)):t&(G|Y)&&Bt.call(this,e)}function Bt(t){var e=t.changedPointers[0];if(e.identifier===this.primaryTouch){var n={x:e.clientX,y:e.clientY};this.lastTouches.push(n);var i=this.lastTouches,s=function(){var t=i.indexOf(n);t>-1&&i.splice(t,1)};setTimeout(s,Ut)}}function $t(t){for(var e=t.srcEvent.clientX,n=t.srcEvent.clientY,i=0;i<this.lastTouches.length;i++){var s=this.lastTouches[i],r=Math.abs(e-s.x),o=Math.abs(n-s.y);if(r<=Vt&&o<=Vt)return!0}return!1}w(jt,ot,{handler:function(t,e,n){var i=n.pointerType==z,s=n.pointerType==$;if(!(s&&n.sourceCapabilities&&n.sourceCapabilities.firesTouchEvents)){if(i)zt.call(this,e,n);else if(s&&$t.call(this,n))return;this.callback(t,e,n)}},destroy:function(){this.touch.destroy(),this.mouse.destroy()}});var Wt=N(h.style,"touchAction"),Ht=Wt!==a,qt="compute",Kt="auto",Gt="manipulation",Yt="none",Qt="pan-x",Xt="pan-y",Jt=ee();function Zt(t,e){this.manager=t,this.set(e)}function te(t){if(k(t,Yt))return Yt;var e=k(t,Qt),n=k(t,Xt);return e&&n?Yt:e||n?e?Qt:Xt:k(t,Gt)?Gt:Kt}function ee(){if(!Ht)return!1;var t={},e=s.CSS&&s.CSS.supports;return["auto","manipulation","pan-y","pan-x","pan-x pan-y","none"].forEach((function(n){t[n]=!e||s.CSS.supports("touch-action",n)})),t}Zt.prototype={set:function(t){t==qt&&(t=this.compute()),Ht&&this.manager.element.style&&Jt[t]&&(this.manager.element.style[Wt]=t),this.actions=t.toLowerCase().trim()},update:function(){this.set(this.manager.options.touchAction)},compute:function(){var t=[];return y(this.manager.recognizers,(function(e){x(e.options.enable,[e])&&(t=t.concat(e.getTouchAction()))})),te(t.join(" "))},preventDefaults:function(t){var e=t.srcEvent,n=t.offsetDirection;if(this.manager.session.prevented)e.preventDefault();else{var i=this.actions,s=k(i,Yt)&&!Jt[Yt],r=k(i,Xt)&&!Jt[Xt],o=k(i,Qt)&&!Jt[Qt];if(s){var a=1===t.pointers.length,c=t.distance<2,l=t.deltaTime<250;if(a&&c&&l)return}if(!o||!r)return s||r&&n&et||o&&n&nt?this.preventSrc(e):void 0}},preventSrc:function(t){this.manager.session.prevented=!0,t.preventDefault()}};var ne=1,ie=2,se=4,re=8,oe=re,ae=16,ce=32;function le(t){this.options=c({},this.defaults,t||{}),this.id=M(),this.manager=null,this.options.enable=E(this.options.enable,!0),this.state=ne,this.simultaneous={},this.requireFail=[]}function he(t){return t&ae?"cancel":t&re?"end":t&se?"move":t&ie?"start":""}function ue(t){return t==tt?"down":t==Z?"up":t==X?"left":t==J?"right":""}function de(t,e){var n=e.manager;return n?n.get(t):t}function fe(){le.apply(this,arguments)}function pe(){fe.apply(this,arguments),this.pX=null,this.pY=null}function ge(){fe.apply(this,arguments)}function me(){le.apply(this,arguments),this._timer=null,this._input=null}function ye(){fe.apply(this,arguments)}function ve(){fe.apply(this,arguments)}function _e(){le.apply(this,arguments),this.pTime=!1,this.pCenter=!1,this._timer=null,this._input=null,this.count=0}function be(t,e){return e=e||{},e.recognizers=E(e.recognizers,be.defaults.preset),new xe(t,e)}le.prototype={defaults:{},set:function(t){return c(this.options,t),this.manager&&this.manager.touchAction.update(),this},recognizeWith:function(t){if(m(t,"recognizeWith",this))return this;var e=this.simultaneous;return t=de(t,this),e[t.id]||(e[t.id]=t,t.recognizeWith(this)),this},dropRecognizeWith:function(t){return m(t,"dropRecognizeWith",this)||(t=de(t,this),delete this.simultaneous[t.id]),this},requireFailure:function(t){if(m(t,"requireFailure",this))return this;var e=this.requireFail;return t=de(t,this),-1===O(e,t)&&(e.push(t),t.requireFailure(this)),this},dropRequireFailure:function(t){if(m(t,"dropRequireFailure",this))return this;t=de(t,this);var e=O(this.requireFail,t);return e>-1&&this.requireFail.splice(e,1),this},hasRequireFailures:function(){return this.requireFail.length>0},canRecognizeWith:function(t){return!!this.simultaneous[t.id]},emit:function(t){var e=this,n=this.state;function i(n){e.manager.emit(n,t)}n<re&&i(e.options.event+he(n)),i(e.options.event),t.additionalEvent&&i(t.additionalEvent),n>=re&&i(e.options.event+he(n))},tryEmit:function(t){if(this.canEmit())return this.emit(t);this.state=ce},canEmit:function(){var t=0;while(t<this.requireFail.length){if(!(this.requireFail[t].state&(ce|ne)))return!1;t++}return!0},recognize:function(t){var e=c({},t);if(!x(this.options.enable,[this,e]))return this.reset(),void(this.state=ce);this.state&(oe|ae|ce)&&(this.state=ne),this.state=this.process(e),this.state&(ie|se|re|ae)&&this.tryEmit(e)},process:function(t){},getTouchAction:function(){},reset:function(){}},w(fe,le,{defaults:{pointers:1},attrTest:function(t){var e=this.options.pointers;return 0===e||t.pointers.length===e},process:function(t){var e=this.state,n=t.eventType,i=e&(ie|se),s=this.attrTest(t);return i&&(n&Y||!s)?e|ae:i||s?n&G?e|re:e&ie?e|se:ie:ce}}),w(pe,fe,{defaults:{event:"pan",threshold:10,pointers:1,direction:it},getTouchAction:function(){var t=this.options.direction,e=[];return t&et&&e.push(Xt),t&nt&&e.push(Qt),e},directionTest:function(t){var e=this.options,n=!0,i=t.distance,s=t.direction,r=t.deltaX,o=t.deltaY;return s&e.direction||(e.direction&et?(s=0===r?Q:r<0?X:J,n=r!=this.pX,i=Math.abs(t.deltaX)):(s=0===o?Q:o<0?Z:tt,n=o!=this.pY,i=Math.abs(t.deltaY))),t.direction=s,n&&i>e.threshold&&s&e.direction},attrTest:function(t){return fe.prototype.attrTest.call(this,t)&&(this.state&ie||!(this.state&ie)&&this.directionTest(t))},emit:function(t){this.pX=t.deltaX,this.pY=t.deltaY;var e=ue(t.direction);e&&(t.additionalEvent=this.options.event+e),this._super.emit.call(this,t)}}),w(ge,fe,{defaults:{event:"pinch",threshold:0,pointers:2},getTouchAction:function(){return[Yt]},attrTest:function(t){return this._super.attrTest.call(this,t)&&(Math.abs(t.scale-1)>this.options.threshold||this.state&ie)},emit:function(t){if(1!==t.scale){var e=t.scale<1?"in":"out";t.additionalEvent=this.options.event+e}this._super.emit.call(this,t)}}),w(me,le,{defaults:{event:"press",pointers:1,time:251,threshold:9},getTouchAction:function(){return[Kt]},process:function(t){var e=this.options,n=t.pointers.length===e.pointers,i=t.distance<e.threshold,s=t.deltaTime>e.time;if(this._input=t,!i||!n||t.eventType&(G|Y)&&!s)this.reset();else if(t.eventType&q)this.reset(),this._timer=g((function(){this.state=oe,this.tryEmit()}),e.time,this);else if(t.eventType&G)return oe;return ce},reset:function(){clearTimeout(this._timer)},emit:function(t){this.state===oe&&(t&&t.eventType&G?this.manager.emit(this.options.event+"up",t):(this._input.timeStamp=p(),this.manager.emit(this.options.event,this._input)))}}),w(ye,fe,{defaults:{event:"rotate",threshold:0,pointers:2},getTouchAction:function(){return[Yt]},attrTest:function(t){return this._super.attrTest.call(this,t)&&(Math.abs(t.rotation)>this.options.threshold||this.state&ie)}}),w(ve,fe,{defaults:{event:"swipe",threshold:10,velocity:.3,direction:et|nt,pointers:1},getTouchAction:function(){return pe.prototype.getTouchAction.call(this)},attrTest:function(t){var e,n=this.options.direction;return n&(et|nt)?e=t.overallVelocity:n&et?e=t.overallVelocityX:n&nt&&(e=t.overallVelocityY),this._super.attrTest.call(this,t)&&n&t.offsetDirection&&t.distance>this.options.threshold&&t.maxPointers==this.options.pointers&&f(e)>this.options.velocity&&t.eventType&G},emit:function(t){var e=ue(t.offsetDirection);e&&this.manager.emit(this.options.event+e,t),this.manager.emit(this.options.event,t)}}),w(_e,le,{defaults:{event:"tap",pointers:1,taps:1,interval:300,time:250,threshold:9,posThreshold:10},getTouchAction:function(){return[Gt]},process:function(t){var e=this.options,n=t.pointers.length===e.pointers,i=t.distance<e.threshold,s=t.deltaTime<e.time;if(this.reset(),t.eventType&q&&0===this.count)return this.failTimeout();if(i&&s&&n){if(t.eventType!=G)return this.failTimeout();var r=!this.pTime||t.timeStamp-this.pTime<e.interval,o=!this.pCenter||mt(this.pCenter,t.center)<e.posThreshold;this.pTime=t.timeStamp,this.pCenter=t.center,o&&r?this.count+=1:this.count=1,this._input=t;var a=this.count%e.taps;if(0===a)return this.hasRequireFailures()?(this._timer=g((function(){this.state=oe,this.tryEmit()}),e.interval,this),ie):oe}return ce},failTimeout:function(){return this._timer=g((function(){this.state=ce}),this.options.interval,this),ce},reset:function(){clearTimeout(this._timer)},emit:function(){this.state==oe&&(this._input.tapCount=this.count,this.manager.emit(this.options.event,this._input))}}),be.VERSION="2.0.7",be.defaults={domEvents:!1,touchAction:qt,enable:!0,inputTarget:null,inputClass:null,preset:[[ye,{enable:!1}],[ge,{enable:!1},["rotate"]],[ve,{direction:et}],[pe,{direction:et},["swipe"]],[_e],[_e,{event:"doubletap",taps:2},["tap"]],[me]],cssProps:{userSelect:"none",touchSelect:"none",touchCallout:"none",contentZooming:"none",userDrag:"none",tapHighlightColor:"rgba(0,0,0,0)"}};var we=1,Te=2;function xe(t,e){this.options=c({},be.defaults,e||{}),this.options.inputTarget=this.options.inputTarget||t,this.handlers={},this.session={},this.recognizers=[],this.oldCssProps={},this.element=t,this.input=at(this),this.touchAction=new Zt(this,this.options.touchAction),Ee(this,!0),y(this.options.recognizers,(function(t){var e=this.add(new t[0](t[1]));t[2]&&e.recognizeWith(t[2]),t[3]&&e.requireFailure(t[3])}),this)}function Ee(t,e){var n,i=t.element;i.style&&(y(t.options.cssProps,(function(s,r){n=N(i.style,r),e?(t.oldCssProps[n]=i.style[n],i.style[n]=s):i.style[n]=t.oldCssProps[n]||""})),e||(t.oldCssProps={}))}function Ce(t,e){var n=r.createEvent("Event");n.initEvent(t,!0,!0),n.gesture=e,e.target.dispatchEvent(n)}xe.prototype={set:function(t){return c(this.options,t),t.touchAction&&this.touchAction.update(),t.inputTarget&&(this.input.destroy(),this.input.target=t.inputTarget,this.input.init()),this},stop:function(t){this.session.stopped=t?Te:we},recognize:function(t){var e=this.session;if(!e.stopped){var n;this.touchAction.preventDefaults(t);var i=this.recognizers,s=e.curRecognizer;(!s||s&&s.state&oe)&&(s=e.curRecognizer=null);var r=0;while(r<i.length)n=i[r],e.stopped===Te||s&&n!=s&&!n.canRecognizeWith(s)?n.reset():n.recognize(t),!s&&n.state&(ie|se|re)&&(s=e.curRecognizer=n),r++}},get:function(t){if(t instanceof le)return t;for(var e=this.recognizers,n=0;n<e.length;n++)if(e[n].options.event==t)return e[n];return null},add:function(t){if(m(t,"add",this))return this;var e=this.get(t.options.event);return e&&this.remove(e),this.recognizers.push(t),t.manager=this,this.touchAction.update(),t},remove:function(t){if(m(t,"remove",this))return this;if(t=this.get(t),t){var e=this.recognizers,n=O(e,t);-1!==n&&(e.splice(n,1),this.touchAction.update())}return this},on:function(t,e){if(t!==a&&e!==a){var n=this.handlers;return y(A(t),(function(t){n[t]=n[t]||[],n[t].push(e)})),this}},off:function(t,e){if(t!==a){var n=this.handlers;return y(A(t),(function(t){e?n[t]&&n[t].splice(O(n[t],e),1):delete n[t]})),this}},emit:function(t,e){this.options.domEvents&&Ce(t,e);var n=this.handlers[t]&&this.handlers[t].slice();if(n&&n.length){e.type=t,e.preventDefault=function(){e.srcEvent.preventDefault()};var i=0;while(i<n.length)n[i](e),i++}},destroy:function(){this.element&&Ee(this,!1),this.handlers={},this.session={},this.input.destroy(),this.element=null}},c(be,{INPUT_START:q,INPUT_MOVE:K,INPUT_END:G,INPUT_CANCEL:Y,STATE_POSSIBLE:ne,STATE_BEGAN:ie,STATE_CHANGED:se,STATE_ENDED:re,STATE_RECOGNIZED:oe,STATE_CANCELLED:ae,STATE_FAILED:ce,DIRECTION_NONE:Q,DIRECTION_LEFT:X,DIRECTION_RIGHT:J,DIRECTION_UP:Z,DIRECTION_DOWN:tt,DIRECTION_HORIZONTAL:et,DIRECTION_VERTICAL:nt,DIRECTION_ALL:it,Manager:xe,Input:ot,TouchAction:Zt,TouchInput:Lt,MouseInput:xt,PointerEventInput:kt,TouchMouseInput:jt,SingleTouchInput:Pt,Recognizer:le,AttrRecognizer:fe,Tap:_e,Pan:pe,Swipe:ve,Pinch:ge,Rotate:ye,Press:me,on:C,off:I,each:y,merge:b,extend:_,assign:c,inherit:w,bindFn:T,prefixed:N});var Ie="undefined"!==typeof s?s:"undefined"!==typeof self?self:{};Ie.Hammer=be,i=function(){return be}.call(e,n,e,t),i===a||(t.exports=i)})(window,document)},6262:function(t,e){"use strict";e.A=(t,e)=>{const n=t.__vccOpts||t;for(const[i,s]of e)n[i]=s;return n}},9306:function(t,e,n){"use strict";var i=n(4901),s=n(6823),r=TypeError;t.exports=function(t){if(i(t))return t;throw new r(s(t)+" is not a function")}},8551:function(t,e,n){"use strict";var i=n(34),s=String,r=TypeError;t.exports=function(t){if(i(t))return t;throw new r(s(t)+" is not an object")}},9617:function(t,e,n){"use strict";var i=n(5397),s=n(5610),r=n(6198),o=function(t){return function(e,n,o){var a=i(e),c=r(a);if(0===c)return!t&&-1;var l,h=s(o,c);if(t&&n!==n){while(c>h)if(l=a[h++],l!==l)return!0}else for(;c>h;h++)if((t||h in a)&&a[h]===n)return t||h||0;return!t&&-1}};t.exports={includes:o(!0),indexOf:o(!1)}},4527:function(t,e,n){"use strict";var i=n(3724),s=n(4376),r=TypeError,o=Object.getOwnPropertyDescriptor,a=i&&!function(){if(void 0!==this)return!0;try{Object.defineProperty([],"length",{writable:!1}).length=1}catch(t){return t instanceof TypeError}}();t.exports=a?function(t,e){if(s(t)&&!o(t,"length").writable)throw new r("Cannot set read only .length");return t.length=e}:function(t,e){return t.length=e}},2195:function(t,e,n){"use strict";var i=n(9504),s=i({}.toString),r=i("".slice);t.exports=function(t){return r(s(t),8,-1)}},7740:function(t,e,n){"use strict";var i=n(9297),s=n(5031),r=n(7347),o=n(4913);t.exports=function(t,e,n){for(var a=s(e),c=o.f,l=r.f,h=0;h<a.length;h++){var u=a[h];i(t,u)||n&&i(n,u)||c(t,u,l(e,u))}}},6699:function(t,e,n){"use strict";var i=n(3724),s=n(4913),r=n(6980);t.exports=i?function(t,e,n){return s.f(t,e,r(1,n))}:function(t,e,n){return t[e]=n,t}},6980:function(t){"use strict";t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},6840:function(t,e,n){"use strict";var i=n(4901),s=n(4913),r=n(283),o=n(9433);t.exports=function(t,e,n,a){a||(a={});var c=a.enumerable,l=void 0!==a.name?a.name:e;if(i(n)&&r(n,l,a),a.global)c?t[e]=n:o(e,n);else{try{a.unsafe?t[e]&&(c=!0):delete t[e]}catch(h){}c?t[e]=n:s.f(t,e,{value:n,enumerable:!1,configurable:!a.nonConfigurable,writable:!a.nonWritable})}return t}},9433:function(t,e,n){"use strict";var i=n(4576),s=Object.defineProperty;t.exports=function(t,e){try{s(i,t,{value:e,configurable:!0,writable:!0})}catch(n){i[t]=e}return e}},3724:function(t,e,n){"use strict";var i=n(9039);t.exports=!i((function(){return 7!==Object.defineProperty({},1,{get:function(){return 7}})[1]}))},4055:function(t,e,n){"use strict";var i=n(4576),s=n(34),r=i.document,o=s(r)&&s(r.createElement);t.exports=function(t){return o?r.createElement(t):{}}},6837:function(t){"use strict";var e=TypeError,n=9007199254740991;t.exports=function(t){if(t>n)throw e("Maximum allowed index exceeded");return t}},8727:function(t){"use strict";t.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},2839:function(t,e,n){"use strict";var i=n(4576),s=i.navigator,r=s&&s.userAgent;t.exports=r?String(r):""},9519:function(t,e,n){"use strict";var i,s,r=n(4576),o=n(2839),a=r.process,c=r.Deno,l=a&&a.versions||c&&c.version,h=l&&l.v8;h&&(i=h.split("."),s=i[0]>0&&i[0]<4?1:+(i[0]+i[1])),!s&&o&&(i=o.match(/Edge\/(\d+)/),(!i||i[1]>=74)&&(i=o.match(/Chrome\/(\d+)/),i&&(s=+i[1]))),t.exports=s},6518:function(t,e,n){"use strict";var i=n(4576),s=n(7347).f,r=n(6699),o=n(6840),a=n(9433),c=n(7740),l=n(2796);t.exports=function(t,e){var n,h,u,d,f,p,g=t.target,m=t.global,y=t.stat;if(h=m?i:y?i[g]||a(g,{}):i[g]&&i[g].prototype,h)for(u in e){if(f=e[u],t.dontCallGetSet?(p=s(h,u),d=p&&p.value):d=h[u],n=l(m?u:g+(y?".":"#")+u,t.forced),!n&&void 0!==d){if(typeof f==typeof d)continue;c(f,d)}(t.sham||d&&d.sham)&&r(f,"sham",!0),o(h,u,f,t)}}},9039:function(t){"use strict";t.exports=function(t){try{return!!t()}catch(e){return!0}}},616:function(t,e,n){"use strict";var i=n(9039);t.exports=!i((function(){var t=function(){}.bind();return"function"!=typeof t||t.hasOwnProperty("prototype")}))},9565:function(t,e,n){"use strict";var i=n(616),s=Function.prototype.call;t.exports=i?s.bind(s):function(){return s.apply(s,arguments)}},350:function(t,e,n){"use strict";var i=n(3724),s=n(9297),r=Function.prototype,o=i&&Object.getOwnPropertyDescriptor,a=s(r,"name"),c=a&&"something"===function(){}.name,l=a&&(!i||i&&o(r,"name").configurable);t.exports={EXISTS:a,PROPER:c,CONFIGURABLE:l}},9504:function(t,e,n){"use strict";var i=n(616),s=Function.prototype,r=s.call,o=i&&s.bind.bind(r,r);t.exports=i?o:function(t){return function(){return r.apply(t,arguments)}}},7751:function(t,e,n){"use strict";var i=n(4576),s=n(4901),r=function(t){return s(t)?t:void 0};t.exports=function(t,e){return arguments.length<2?r(i[t]):i[t]&&i[t][e]}},5966:function(t,e,n){"use strict";var i=n(9306),s=n(4117);t.exports=function(t,e){var n=t[e];return s(n)?void 0:i(n)}},4576:function(t,e,n){"use strict";var i=function(t){return t&&t.Math===Math&&t};t.exports=i("object"==typeof globalThis&&globalThis)||i("object"==typeof window&&window)||i("object"==typeof self&&self)||i("object"==typeof n.g&&n.g)||i("object"==typeof this&&this)||function(){return this}()||Function("return this")()},9297:function(t,e,n){"use strict";var i=n(9504),s=n(8981),r=i({}.hasOwnProperty);t.exports=Object.hasOwn||function(t,e){return r(s(t),e)}},421:function(t){"use strict";t.exports={}},5917:function(t,e,n){"use strict";var i=n(3724),s=n(9039),r=n(4055);t.exports=!i&&!s((function(){return 7!==Object.defineProperty(r("div"),"a",{get:function(){return 7}}).a}))},7055:function(t,e,n){"use strict";var i=n(9504),s=n(9039),r=n(2195),o=Object,a=i("".split);t.exports=s((function(){return!o("z").propertyIsEnumerable(0)}))?function(t){return"String"===r(t)?a(t,""):o(t)}:o},3706:function(t,e,n){"use strict";var i=n(9504),s=n(4901),r=n(7629),o=i(Function.toString);s(r.inspectSource)||(r.inspectSource=function(t){return o(t)}),t.exports=r.inspectSource},1181:function(t,e,n){"use strict";var i,s,r,o=n(8622),a=n(4576),c=n(34),l=n(6699),h=n(9297),u=n(7629),d=n(6119),f=n(421),p="Object already initialized",g=a.TypeError,m=a.WeakMap,y=function(t){return r(t)?s(t):i(t,{})},v=function(t){return function(e){var n;if(!c(e)||(n=s(e)).type!==t)throw new g("Incompatible receiver, "+t+" required");return n}};if(o||u.state){var _=u.state||(u.state=new m);_.get=_.get,_.has=_.has,_.set=_.set,i=function(t,e){if(_.has(t))throw new g(p);return e.facade=t,_.set(t,e),e},s=function(t){return _.get(t)||{}},r=function(t){return _.has(t)}}else{var b=d("state");f[b]=!0,i=function(t,e){if(h(t,b))throw new g(p);return e.facade=t,l(t,b,e),e},s=function(t){return h(t,b)?t[b]:{}},r=function(t){return h(t,b)}}t.exports={set:i,get:s,has:r,enforce:y,getterFor:v}},4376:function(t,e,n){"use strict";var i=n(2195);t.exports=Array.isArray||function(t){return"Array"===i(t)}},4901:function(t){"use strict";var e="object"==typeof document&&document.all;t.exports="undefined"==typeof e&&void 0!==e?function(t){return"function"==typeof t||t===e}:function(t){return"function"==typeof t}},2796:function(t,e,n){"use strict";var i=n(9039),s=n(4901),r=/#|\.prototype\./,o=function(t,e){var n=c[a(t)];return n===h||n!==l&&(s(e)?i(e):!!e)},a=o.normalize=function(t){return String(t).replace(r,".").toLowerCase()},c=o.data={},l=o.NATIVE="N",h=o.POLYFILL="P";t.exports=o},4117:function(t){"use strict";t.exports=function(t){return null===t||void 0===t}},34:function(t,e,n){"use strict";var i=n(4901);t.exports=function(t){return"object"==typeof t?null!==t:i(t)}},6395:function(t){"use strict";t.exports=!1},757:function(t,e,n){"use strict";var i=n(7751),s=n(4901),r=n(1625),o=n(7040),a=Object;t.exports=o?function(t){return"symbol"==typeof t}:function(t){var e=i("Symbol");return s(e)&&r(e.prototype,a(t))}},6198:function(t,e,n){"use strict";var i=n(8014);t.exports=function(t){return i(t.length)}},283:function(t,e,n){"use strict";var i=n(9504),s=n(9039),r=n(4901),o=n(9297),a=n(3724),c=n(350).CONFIGURABLE,l=n(3706),h=n(1181),u=h.enforce,d=h.get,f=String,p=Object.defineProperty,g=i("".slice),m=i("".replace),y=i([].join),v=a&&!s((function(){return 8!==p((function(){}),"length",{value:8}).length})),_=String(String).split("String"),b=t.exports=function(t,e,n){"Symbol("===g(f(e),0,7)&&(e="["+m(f(e),/^Symbol\(([^)]*)\).*$/,"$1")+"]"),n&&n.getter&&(e="get "+e),n&&n.setter&&(e="set "+e),(!o(t,"name")||c&&t.name!==e)&&(a?p(t,"name",{value:e,configurable:!0}):t.name=e),v&&n&&o(n,"arity")&&t.length!==n.arity&&p(t,"length",{value:n.arity});try{n&&o(n,"constructor")&&n.constructor?a&&p(t,"prototype",{writable:!1}):t.prototype&&(t.prototype=void 0)}catch(s){}var i=u(t);return o(i,"source")||(i.source=y(_,"string"==typeof e?e:"")),t};Function.prototype.toString=b((function(){return r(this)&&d(this).source||l(this)}),"toString")},741:function(t){"use strict";var e=Math.ceil,n=Math.floor;t.exports=Math.trunc||function(t){var i=+t;return(i>0?n:e)(i)}},4913:function(t,e,n){"use strict";var i=n(3724),s=n(5917),r=n(8686),o=n(8551),a=n(6969),c=TypeError,l=Object.defineProperty,h=Object.getOwnPropertyDescriptor,u="enumerable",d="configurable",f="writable";e.f=i?r?function(t,e,n){if(o(t),e=a(e),o(n),"function"===typeof t&&"prototype"===e&&"value"in n&&f in n&&!n[f]){var i=h(t,e);i&&i[f]&&(t[e]=n.value,n={configurable:d in n?n[d]:i[d],enumerable:u in n?n[u]:i[u],writable:!1})}return l(t,e,n)}:l:function(t,e,n){if(o(t),e=a(e),o(n),s)try{return l(t,e,n)}catch(i){}if("get"in n||"set"in n)throw new c("Accessors not supported");return"value"in n&&(t[e]=n.value),t}},7347:function(t,e,n){"use strict";var i=n(3724),s=n(9565),r=n(8773),o=n(6980),a=n(5397),c=n(6969),l=n(9297),h=n(5917),u=Object.getOwnPropertyDescriptor;e.f=i?u:function(t,e){if(t=a(t),e=c(e),h)try{return u(t,e)}catch(n){}if(l(t,e))return o(!s(r.f,t,e),t[e])}},8480:function(t,e,n){"use strict";var i=n(1828),s=n(8727),r=s.concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return i(t,r)}},3717:function(t,e){"use strict";e.f=Object.getOwnPropertySymbols},1625:function(t,e,n){"use strict";var i=n(9504);t.exports=i({}.isPrototypeOf)},1828:function(t,e,n){"use strict";var i=n(9504),s=n(9297),r=n(5397),o=n(9617).indexOf,a=n(421),c=i([].push);t.exports=function(t,e){var n,i=r(t),l=0,h=[];for(n in i)!s(a,n)&&s(i,n)&&c(h,n);while(e.length>l)s(i,n=e[l++])&&(~o(h,n)||c(h,n));return h}},8773:function(t,e){"use strict";var n={}.propertyIsEnumerable,i=Object.getOwnPropertyDescriptor,s=i&&!n.call({1:2},1);e.f=s?function(t){var e=i(this,t);return!!e&&e.enumerable}:n},4270:function(t,e,n){"use strict";var i=n(9565),s=n(4901),r=n(34),o=TypeError;t.exports=function(t,e){var n,a;if("string"===e&&s(n=t.toString)&&!r(a=i(n,t)))return a;if(s(n=t.valueOf)&&!r(a=i(n,t)))return a;if("string"!==e&&s(n=t.toString)&&!r(a=i(n,t)))return a;throw new o("Can't convert object to primitive value")}},5031:function(t,e,n){"use strict";var i=n(7751),s=n(9504),r=n(8480),o=n(3717),a=n(8551),c=s([].concat);t.exports=i("Reflect","ownKeys")||function(t){var e=r.f(a(t)),n=o.f;return n?c(e,n(t)):e}},7750:function(t,e,n){"use strict";var i=n(4117),s=TypeError;t.exports=function(t){if(i(t))throw new s("Can't call method on "+t);return t}},6119:function(t,e,n){"use strict";var i=n(5745),s=n(3392),r=i("keys");t.exports=function(t){return r[t]||(r[t]=s(t))}},7629:function(t,e,n){"use strict";var i=n(6395),s=n(4576),r=n(9433),o="__core-js_shared__",a=t.exports=s[o]||r(o,{});(a.versions||(a.versions=[])).push({version:"3.38.1",mode:i?"pure":"global",copyright:"© 2014-2024 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.38.1/LICENSE",source:"https://github.com/zloirock/core-js"})},5745:function(t,e,n){"use strict";var i=n(7629);t.exports=function(t,e){return i[t]||(i[t]=e||{})}},4495:function(t,e,n){"use strict";var i=n(9519),s=n(9039),r=n(4576),o=r.String;t.exports=!!Object.getOwnPropertySymbols&&!s((function(){var t=Symbol("symbol detection");return!o(t)||!(Object(t)instanceof Symbol)||!Symbol.sham&&i&&i<41}))},5610:function(t,e,n){"use strict";var i=n(1291),s=Math.max,r=Math.min;t.exports=function(t,e){var n=i(t);return n<0?s(n+e,0):r(n,e)}},5397:function(t,e,n){"use strict";var i=n(7055),s=n(7750);t.exports=function(t){return i(s(t))}},1291:function(t,e,n){"use strict";var i=n(741);t.exports=function(t){var e=+t;return e!==e||0===e?0:i(e)}},8014:function(t,e,n){"use strict";var i=n(1291),s=Math.min;t.exports=function(t){var e=i(t);return e>0?s(e,9007199254740991):0}},8981:function(t,e,n){"use strict";var i=n(7750),s=Object;t.exports=function(t){return s(i(t))}},2777:function(t,e,n){"use strict";var i=n(9565),s=n(34),r=n(757),o=n(5966),a=n(4270),c=n(8227),l=TypeError,h=c("toPrimitive");t.exports=function(t,e){if(!s(t)||r(t))return t;var n,c=o(t,h);if(c){if(void 0===e&&(e="default"),n=i(c,t,e),!s(n)||r(n))return n;throw new l("Can't convert object to primitive value")}return void 0===e&&(e="number"),a(t,e)}},6969:function(t,e,n){"use strict";var i=n(2777),s=n(757);t.exports=function(t){var e=i(t,"string");return s(e)?e:e+""}},6823:function(t){"use strict";var e=String;t.exports=function(t){try{return e(t)}catch(n){return"Object"}}},3392:function(t,e,n){"use strict";var i=n(9504),s=0,r=Math.random(),o=i(1..toString);t.exports=function(t){return"Symbol("+(void 0===t?"":t)+")_"+o(++s+r,36)}},7040:function(t,e,n){"use strict";var i=n(4495);t.exports=i&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},8686:function(t,e,n){"use strict";var i=n(3724),s=n(9039);t.exports=i&&s((function(){return 42!==Object.defineProperty((function(){}),"prototype",{value:42,writable:!1}).prototype}))},8622:function(t,e,n){"use strict";var i=n(4576),s=n(4901),r=i.WeakMap;t.exports=s(r)&&/native code/.test(String(r))},8227:function(t,e,n){"use strict";var i=n(4576),s=n(5745),r=n(9297),o=n(3392),a=n(4495),c=n(7040),l=i.Symbol,h=s("wks"),u=c?l["for"]||l:l&&l.withoutSetter||o;t.exports=function(t){return r(h,t)||(h[t]=a&&r(l,t)?l[t]:u("Symbol."+t)),h[t]}},4114:function(t,e,n){"use strict";var i=n(6518),s=n(8981),r=n(6198),o=n(4527),a=n(6837),c=n(9039),l=c((function(){return 4294967297!==[].push.call({length:4294967296},1)})),h=function(){try{Object.defineProperty([],"length",{writable:!1}).push()}catch(t){return t instanceof TypeError}},u=l||!h();i({target:"Array",proto:!0,arity:1,forced:u},{push:function(t){var e=s(this),n=r(e),i=arguments.length;a(n+i);for(var c=0;c<i;c++)e[n]=arguments[c],n++;return o(e,n),n}})},9928:function(t,e,n){"use strict";n.d(e,{MF:function(){return _t},j6:function(){return pt},xZ:function(){return gt},om:function(){return ft},Sx:function(){return wt},Wp:function(){return bt},KO:function(){return Tt}});var i=n(5125),s=n(3424),r=n(6743);const o=(t,e)=>e.some((e=>t instanceof e));let a,c;function l(){return a||(a=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function h(){return c||(c=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const u=new WeakMap,d=new WeakMap,f=new WeakMap,p=new WeakMap,g=new WeakMap;function m(t){const e=new Promise(((e,n)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",r)},s=()=>{e(T(t.result)),i()},r=()=>{n(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",r)}));return e.then((e=>{e instanceof IDBCursor&&u.set(e,t)})).catch((()=>{})),g.set(e,t),e}function y(t){if(d.has(t))return;const e=new Promise(((e,n)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",r),t.removeEventListener("abort",r)},s=()=>{e(),i()},r=()=>{n(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",r),t.addEventListener("abort",r)}));d.set(t,e)}let v={get(t,e,n){if(t instanceof IDBTransaction){if("done"===e)return d.get(t);if("objectStoreNames"===e)return t.objectStoreNames||f.get(t);if("store"===e)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return T(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&("done"===e||"store"===e)||e in t}};function _(t){v=t(v)}function b(t){return t!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?h().includes(t)?function(...e){return t.apply(x(this),e),T(u.get(this))}:function(...e){return T(t.apply(x(this),e))}:function(e,...n){const i=t.call(x(this),e,...n);return f.set(i,e.sort?e.sort():[e]),T(i)}}function w(t){return"function"===typeof t?b(t):(t instanceof IDBTransaction&&y(t),o(t,l())?new Proxy(t,v):t)}function T(t){if(t instanceof IDBRequest)return m(t);if(p.has(t))return p.get(t);const e=w(t);return e!==t&&(p.set(t,e),g.set(e,t)),e}const x=t=>g.get(t);function E(t,e,{blocked:n,upgrade:i,blocking:s,terminated:r}={}){const o=indexedDB.open(t,e),a=T(o);return i&&o.addEventListener("upgradeneeded",(t=>{i(T(o.result),t.oldVersion,t.newVersion,T(o.transaction),t)})),n&&o.addEventListener("blocked",(t=>n(t.oldVersion,t.newVersion,t))),a.then((t=>{r&&t.addEventListener("close",(()=>r())),s&&t.addEventListener("versionchange",(t=>s(t.oldVersion,t.newVersion,t)))})).catch((()=>{})),a}const C=["get","getKey","getAll","getAllKeys","count"],I=["put","add","delete","clear"],S=new Map;function k(t,e){if(!(t instanceof IDBDatabase)||e in t||"string"!==typeof e)return;if(S.get(e))return S.get(e);const n=e.replace(/FromIndex$/,""),i=e!==n,s=I.includes(n);if(!(n in(i?IDBIndex:IDBObjectStore).prototype)||!s&&!C.includes(n))return;const r=async function(t,...e){const r=this.transaction(t,s?"readwrite":"readonly");let o=r.store;return i&&(o=o.index(e.shift())),(await Promise.all([o[n](...e),s&&r.done]))[0]};return S.set(e,r),r}_((t=>({...t,get:(e,n,i)=>k(e,n)||t.get(e,n,i),has:(e,n)=>!!k(e,n)||t.has(e,n)})));
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class A{constructor(t){this.container=t}getPlatformInfoString(){const t=this.container.getProviders();return t.map((t=>{if(O(t)){const e=t.getImmediate();return`${e.library}/${e.version}`}return null})).filter((t=>t)).join(" ")}}function O(t){const e=t.getComponent();return"VERSION"===(null===e||void 0===e?void 0:e.type)}const R="@firebase/app",P="0.10.15",N=new s.Vy("@firebase/app"),D="@firebase/app-compat",M="@firebase/analytics-compat",L="@firebase/analytics",F="@firebase/app-check-compat",U="@firebase/app-check",V="@firebase/auth",j="@firebase/auth-compat",z="@firebase/database",B="@firebase/data-connect",$="@firebase/database-compat",W="@firebase/functions",H="@firebase/functions-compat",q="@firebase/installations",K="@firebase/installations-compat",G="@firebase/messaging",Y="@firebase/messaging-compat",Q="@firebase/performance",X="@firebase/performance-compat",J="@firebase/remote-config",Z="@firebase/remote-config-compat",tt="@firebase/storage",et="@firebase/storage-compat",nt="@firebase/firestore",it="@firebase/vertexai",st="@firebase/firestore-compat",rt="firebase",ot="11.0.1",at="[DEFAULT]",ct={[R]:"fire-core",[D]:"fire-core-compat",[L]:"fire-analytics",[M]:"fire-analytics-compat",[U]:"fire-app-check",[F]:"fire-app-check-compat",[V]:"fire-auth",[j]:"fire-auth-compat",[z]:"fire-rtdb",[B]:"fire-data-connect",[$]:"fire-rtdb-compat",[W]:"fire-fn",[H]:"fire-fn-compat",[q]:"fire-iid",[K]:"fire-iid-compat",[G]:"fire-fcm",[Y]:"fire-fcm-compat",[Q]:"fire-perf",[X]:"fire-perf-compat",[J]:"fire-rc",[Z]:"fire-rc-compat",[tt]:"fire-gcs",[et]:"fire-gcs-compat",[nt]:"fire-fst",[st]:"fire-fst-compat",[it]:"fire-vertex","fire-js":"fire-js",[rt]:"fire-js-all"},lt=new Map,ht=new Map,ut=new Map;function dt(t,e){try{t.container.addComponent(e)}catch(n){N.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function ft(t){const e=t.name;if(ut.has(e))return N.debug(`There were multiple attempts to register component ${e}.`),!1;ut.set(e,t);for(const n of lt.values())dt(n,t);for(const n of ht.values())dt(n,t);return!0}function pt(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function gt(t){return void 0!==t.settings}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const mt={["no-app"]:"No Firebase App '{$appName}' has been created - call initializeApp() first",["bad-app-name"]:"Illegal App name: '{$appName}'",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["server-app-deleted"]:"Firebase Server App has been deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.",["finalization-registry-not-supported"]:"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.",["invalid-server-app-environment"]:"FirebaseServerApp is not for use in browser environments."},yt=new r.FA("app","Firebase",mt);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class vt{constructor(t,e,n){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},e),this._name=e.name,this._automaticDataCollectionEnabled=e.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new i.uA("app",(()=>this),"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw yt.create("app-deleted",{appName:this._name})}}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const _t=ot;function bt(t,e={}){let n=t;if("object"!==typeof e){const t=e;e={name:t}}const s=Object.assign({name:at,automaticDataCollectionEnabled:!1},e),o=s.name;if("string"!==typeof o||!o)throw yt.create("bad-app-name",{appName:String(o)});if(n||(n=(0,r.T9)()),!n)throw yt.create("no-options");const a=lt.get(o);if(a){if((0,r.bD)(n,a.options)&&(0,r.bD)(s,a.config))return a;throw yt.create("duplicate-app",{appName:o})}const c=new i.h1(o);for(const i of ut.values())c.addComponent(i);const l=new vt(n,s,c);return lt.set(o,l),l}function wt(t=at){const e=lt.get(t);if(!e&&t===at&&(0,r.T9)())return bt();if(!e)throw yt.create("no-app",{appName:t});return e}function Tt(t,e,n){var s;let r=null!==(s=ct[t])&&void 0!==s?s:t;n&&(r+=`-${n}`);const o=r.match(/\s|\//),a=e.match(/\s|\//);if(o||a){const t=[`Unable to register library "${r}" with version "${e}":`];return o&&t.push(`library name "${r}" contains illegal characters (whitespace or "/")`),o&&a&&t.push("and"),a&&t.push(`version name "${e}" contains illegal characters (whitespace or "/")`),void N.warn(t.join(" "))}ft(new i.uA(`${r}-version`,(()=>({library:r,version:e})),"VERSION"))}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const xt="firebase-heartbeat-database",Et=1,Ct="firebase-heartbeat-store";let It=null;function St(){return It||(It=E(xt,Et,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Ct)}catch(n){console.warn(n)}}}}).catch((t=>{throw yt.create("idb-open",{originalErrorMessage:t.message})}))),It}async function kt(t){try{const e=await St(),n=e.transaction(Ct),i=await n.objectStore(Ct).get(Ot(t));return await n.done,i}catch(e){if(e instanceof r.g)N.warn(e.message);else{const t=yt.create("idb-get",{originalErrorMessage:null===e||void 0===e?void 0:e.message});N.warn(t.message)}}}async function At(t,e){try{const n=await St(),i=n.transaction(Ct,"readwrite"),s=i.objectStore(Ct);await s.put(e,Ot(t)),await i.done}catch(n){if(n instanceof r.g)N.warn(n.message);else{const t=yt.create("idb-set",{originalErrorMessage:null===n||void 0===n?void 0:n.message});N.warn(t.message)}}}function Ot(t){return`${t.name}!${t.options.appId}`}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rt=1024,Pt=2592e6;class Nt{constructor(t){this.container=t,this._heartbeatsCache=null;const e=this.container.getProvider("app").getImmediate();this._storage=new Lt(e),this._heartbeatsCachePromise=this._storage.read().then((t=>(this._heartbeatsCache=t,t)))}async triggerHeartbeat(){var t,e;try{const n=this.container.getProvider("platform-logger").getImmediate(),i=n.getPlatformInfoString(),s=Dt();if(null==(null===(t=this._heartbeatsCache)||void 0===t?void 0:t.heartbeats)&&(this._heartbeatsCache=await this._heartbeatsCachePromise,null==(null===(e=this._heartbeatsCache)||void 0===e?void 0:e.heartbeats)))return;if(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some((t=>t.date===s)))return;return this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter((t=>{const e=new Date(t.date).valueOf(),n=Date.now();return n-e<=Pt})),this._storage.overwrite(this._heartbeatsCache)}catch(n){N.warn(n)}}async getHeartbeatsHeader(){var t;try{if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null==(null===(t=this._heartbeatsCache)||void 0===t?void 0:t.heartbeats)||0===this._heartbeatsCache.heartbeats.length)return"";const e=Dt(),{heartbeatsToSend:n,unsentEntries:i}=Mt(this._heartbeatsCache.heartbeats),s=(0,r.Uj)(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(e){return N.warn(e),""}}}function Dt(){const t=new Date;return t.toISOString().substring(0,10)}function Mt(t,e=Rt){const n=[];let i=t.slice();for(const s of t){const t=n.find((t=>t.agent===s.agent));if(t){if(t.dates.push(s.date),Ft(n)>e){t.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),Ft(n)>e){n.pop();break}i=i.slice(1)}return{heartbeatsToSend:n,unsentEntries:i}}class Lt{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return!!(0,r.zW)()&&(0,r.eX)().then((()=>!0)).catch((()=>!1))}async read(){const t=await this._canUseIndexedDBPromise;if(t){const t=await kt(this.app);return(null===t||void 0===t?void 0:t.heartbeats)?t:{heartbeats:[]}}return{heartbeats:[]}}async overwrite(t){var e;const n=await this._canUseIndexedDBPromise;if(n){const n=await this.read();return At(this.app,{lastSentHeartbeatDate:null!==(e=t.lastSentHeartbeatDate)&&void 0!==e?e:n.lastSentHeartbeatDate,heartbeats:t.heartbeats})}}async add(t){var e;const n=await this._canUseIndexedDBPromise;if(n){const n=await this.read();return At(this.app,{lastSentHeartbeatDate:null!==(e=t.lastSentHeartbeatDate)&&void 0!==e?e:n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...t.heartbeats]})}}}function Ft(t){return(0,r.Uj)(JSON.stringify({version:2,heartbeats:t})).length}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ut(t){ft(new i.uA("platform-logger",(t=>new A(t)),"PRIVATE")),ft(new i.uA("heartbeat",(t=>new Nt(t)),"PRIVATE")),Tt(R,P,t),Tt(R,P,"esm2017"),Tt("fire-js","")}Ut("")},5125:function(t,e,n){"use strict";n.d(e,{h1:function(){return l},uA:function(){return s}});var i=n(6743);class s{constructor(t,e,n){this.name=t,this.instanceFactory=e,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const r="[DEFAULT]";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class o{constructor(t,e){this.name=t,this.container=e,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const e=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(e)){const t=new i.cY;if(this.instancesDeferred.set(e,t),this.isInitialized(e)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:e});n&&t.resolve(n)}catch(n){}}return this.instancesDeferred.get(e).promise}getImmediate(t){var e;const n=this.normalizeInstanceIdentifier(null===t||void 0===t?void 0:t.identifier),i=null!==(e=null===t||void 0===t?void 0:t.optional)&&void 0!==e&&e;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(i)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(s){if(i)return null;throw s}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,this.shouldAutoInitialize()){if(c(t))try{this.getOrInitializeService({instanceIdentifier:r})}catch(e){}for(const[t,n]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(t);try{const t=this.getOrInitializeService({instanceIdentifier:i});n.resolve(t)}catch(e){}}}}clearInstance(t=r){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter((t=>"INTERNAL"in t)).map((t=>t.INTERNAL.delete())),...t.filter((t=>"_delete"in t)).map((t=>t._delete()))])}isComponentSet(){return null!=this.component}isInitialized(t=r){return this.instances.has(t)}getOptions(t=r){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:e={}}=t,n=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:n,options:e});for(const[s,r]of this.instancesDeferred.entries()){const t=this.normalizeInstanceIdentifier(s);n===t&&r.resolve(i)}return i}onInit(t,e){var n;const i=this.normalizeInstanceIdentifier(e),s=null!==(n=this.onInitCallbacks.get(i))&&void 0!==n?n:new Set;s.add(t),this.onInitCallbacks.set(i,s);const r=this.instances.get(i);return r&&t(r,i),()=>{s.delete(t)}}invokeOnInitCallbacks(t,e){const n=this.onInitCallbacks.get(e);if(n)for(const s of n)try{s(t,e)}catch(i){}}getOrInitializeService({instanceIdentifier:t,options:e={}}){let n=this.instances.get(t);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:a(t),options:e}),this.instances.set(t,n),this.instancesOptions.set(t,e),this.invokeOnInitCallbacks(n,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,n)}catch(i){}return n||null}normalizeInstanceIdentifier(t=r){return this.component?this.component.multipleInstances?t:r:t}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}function a(t){return t===r?void 0:t}function c(t){return"EAGER"===t.instantiationMode}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class l{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const e=this.getProvider(t.name);if(e.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);e.setComponent(t)}addOrOverwriteComponent(t){const e=this.getProvider(t.name);e.isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const e=new o(t,this);return this.providers.set(t,e),e}getProviders(){return Array.from(this.providers.values())}}},3424:function(t,e,n){"use strict";n.d(e,{$b:function(){return s},Vy:function(){return l}});
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const i=[];var s;(function(t){t[t["DEBUG"]=0]="DEBUG",t[t["VERBOSE"]=1]="VERBOSE",t[t["INFO"]=2]="INFO",t[t["WARN"]=3]="WARN",t[t["ERROR"]=4]="ERROR",t[t["SILENT"]=5]="SILENT"})(s||(s={}));const r={debug:s.DEBUG,verbose:s.VERBOSE,info:s.INFO,warn:s.WARN,error:s.ERROR,silent:s.SILENT},o=s.INFO,a={[s.DEBUG]:"log",[s.VERBOSE]:"log",[s.INFO]:"info",[s.WARN]:"warn",[s.ERROR]:"error"},c=(t,e,...n)=>{if(e<t.logLevel)return;const i=(new Date).toISOString(),s=a[e];if(!s)throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`);console[s](`[${i}]  ${t.name}:`,...n)};class l{constructor(t){this.name=t,this._logLevel=o,this._logHandler=c,this._userLogHandler=null,i.push(this)}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in s))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel="string"===typeof t?r[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if("function"!==typeof t)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,s.DEBUG,...t),this._logHandler(this,s.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,s.VERBOSE,...t),this._logHandler(this,s.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,s.INFO,...t),this._logHandler(this,s.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,s.WARN,...t),this._logHandler(this,s.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,s.ERROR,...t),this._logHandler(this,s.ERROR,...t)}}},6118:function(t,e,n){"use strict";n.d(e,{FN:function(){return rn},No:function(){return nn},PP:function(){return Bn},ZT:function(){return P},hE:function(){return yn},kc:function(){return qn},m_:function(){return Fn},s$:function(){return pn},t1:function(){return Be}});var i=n(1014);
/*!
 * Chart.js v4.4.5
 * https://www.chartjs.org
 * (c) 2024 Chart.js Contributors
 * Released under the MIT License
 */class s{constructor(){this._request=null,this._charts=new Map,this._running=!1,this._lastDate=void 0}_notify(t,e,n,i){const s=e.listeners[i],r=e.duration;s.forEach((i=>i({chart:t,initial:e.initial,numSteps:r,currentStep:Math.min(n-e.start,r)})))}_refresh(){this._request||(this._running=!0,this._request=i.r.call(window,(()=>{this._update(),this._request=null,this._running&&this._refresh()})))}_update(t=Date.now()){let e=0;this._charts.forEach(((n,i)=>{if(!n.running||!n.items.length)return;const s=n.items;let r,o=s.length-1,a=!1;for(;o>=0;--o)r=s[o],r._active?(r._total>n.duration&&(n.duration=r._total),r.tick(t),a=!0):(s[o]=s[s.length-1],s.pop());a&&(i.draw(),this._notify(i,n,t,"progress")),s.length||(n.running=!1,this._notify(i,n,t,"complete"),n.initial=!1),e+=s.length})),this._lastDate=t,0===e&&(this._running=!1)}_getAnims(t){const e=this._charts;let n=e.get(t);return n||(n={running:!1,initial:!0,items:[],listeners:{complete:[],progress:[]}},e.set(t,n)),n}listen(t,e,n){this._getAnims(t).listeners[e].push(n)}add(t,e){e&&e.length&&this._getAnims(t).items.push(...e)}has(t){return this._getAnims(t).items.length>0}start(t){const e=this._charts.get(t);e&&(e.running=!0,e.start=Date.now(),e.duration=e.items.reduce(((t,e)=>Math.max(t,e._duration)),0),this._refresh())}running(t){if(!this._running)return!1;const e=this._charts.get(t);return!!(e&&e.running&&e.items.length)}stop(t){const e=this._charts.get(t);if(!e||!e.items.length)return;const n=e.items;let i=n.length-1;for(;i>=0;--i)n[i].cancel();e.items=[],this._notify(t,e,Date.now(),"complete")}remove(t){return this._charts.delete(t)}}var r=new s;const o="transparent",a={boolean(t,e,n){return n>.5?e:t},color(t,e,n){const s=(0,i.c)(t||o),r=s.valid&&(0,i.c)(e||o);return r&&r.valid?r.mix(s,n).hexString():e},number(t,e,n){return t+(e-t)*n}};class c{constructor(t,e,n,s){const r=e[n];s=(0,i.a)([t.to,s,r,t.from]);const o=(0,i.a)([t.from,r,s]);this._active=!0,this._fn=t.fn||a[t.type||typeof o],this._easing=i.e[t.easing]||i.e.linear,this._start=Math.floor(Date.now()+(t.delay||0)),this._duration=this._total=Math.floor(t.duration),this._loop=!!t.loop,this._target=e,this._prop=n,this._from=o,this._to=s,this._promises=void 0}active(){return this._active}update(t,e,n){if(this._active){this._notify(!1);const s=this._target[this._prop],r=n-this._start,o=this._duration-r;this._start=n,this._duration=Math.floor(Math.max(o,t.duration)),this._total+=r,this._loop=!!t.loop,this._to=(0,i.a)([t.to,e,s,t.from]),this._from=(0,i.a)([t.from,s,e])}}cancel(){this._active&&(this.tick(Date.now()),this._active=!1,this._notify(!1))}tick(t){const e=t-this._start,n=this._duration,i=this._prop,s=this._from,r=this._loop,o=this._to;let a;if(this._active=s!==o&&(r||e<n),!this._active)return this._target[i]=o,void this._notify(!0);e<0?this._target[i]=s:(a=e/n%2,a=r&&a>1?2-a:a,a=this._easing(Math.min(1,Math.max(0,a))),this._target[i]=this._fn(s,o,a))}wait(){const t=this._promises||(this._promises=[]);return new Promise(((e,n)=>{t.push({res:e,rej:n})}))}_notify(t){const e=t?"res":"rej",n=this._promises||[];for(let i=0;i<n.length;i++)n[i][e]()}}class l{constructor(t,e){this._chart=t,this._properties=new Map,this.configure(e)}configure(t){if(!(0,i.i)(t))return;const e=Object.keys(i.d.animation),n=this._properties;Object.getOwnPropertyNames(t).forEach((s=>{const r=t[s];if(!(0,i.i)(r))return;const o={};for(const t of e)o[t]=r[t];((0,i.b)(r.properties)&&r.properties||[s]).forEach((t=>{t!==s&&n.has(t)||n.set(t,o)}))}))}_animateOptions(t,e){const n=e.options,i=u(t,n);if(!i)return[];const s=this._createAnimations(i,n);return n.$shared&&h(t.options.$animations,n).then((()=>{t.options=n}),(()=>{})),s}_createAnimations(t,e){const n=this._properties,i=[],s=t.$animations||(t.$animations={}),r=Object.keys(e),o=Date.now();let a;for(a=r.length-1;a>=0;--a){const l=r[a];if("$"===l.charAt(0))continue;if("options"===l){i.push(...this._animateOptions(t,e));continue}const h=e[l];let u=s[l];const d=n.get(l);if(u){if(d&&u.active()){u.update(d,h,o);continue}u.cancel()}d&&d.duration?(s[l]=u=new c(d,t,l,h),i.push(u)):t[l]=h}return i}update(t,e){if(0===this._properties.size)return void Object.assign(t,e);const n=this._createAnimations(t,e);return n.length?(r.add(this._chart,n),!0):void 0}}function h(t,e){const n=[],i=Object.keys(e);for(let s=0;s<i.length;s++){const e=t[i[s]];e&&e.active()&&n.push(e.wait())}return Promise.all(n)}function u(t,e){if(!e)return;let n=t.options;if(n)return n.$shared&&(t.options=n=Object.assign({},n,{$shared:!1,$animations:{}})),n;t.options=e}function d(t,e){const n=t&&t.options||{},i=n.reverse,s=void 0===n.min?e:0,r=void 0===n.max?e:0;return{start:i?r:s,end:i?s:r}}function f(t,e,n){if(!1===n)return!1;const i=d(t,n),s=d(e,n);return{top:s.end,right:i.end,bottom:s.start,left:i.start}}function p(t){let e,n,s,r;return(0,i.i)(t)?(e=t.top,n=t.right,s=t.bottom,r=t.left):e=n=s=r=t,{top:e,right:n,bottom:s,left:r,disabled:!1===t}}function g(t,e){const n=[],i=t._getSortedDatasetMetas(e);let s,r;for(s=0,r=i.length;s<r;++s)n.push(i[s].index);return n}function m(t,e,n,s={}){const r=t.keys,o="single"===s.mode;let a,c,l,h;if(null!==e){for(a=0,c=r.length;a<c;++a){if(l=+r[a],l===n){if(s.all)continue;break}h=t.values[l],(0,i.g)(h)&&(o||0===e||(0,i.s)(e)===(0,i.s)(h))&&(e+=h)}return e}}function y(t,e){const{iScale:n,vScale:i}=e,s="x"===n.axis?"x":"y",r="x"===i.axis?"x":"y",o=Object.keys(t),a=new Array(o.length);let c,l,h;for(c=0,l=o.length;c<l;++c)h=o[c],a[c]={[s]:h,[r]:t[h]};return a}function v(t,e){const n=t&&t.options.stacked;return n||void 0===n&&void 0!==e.stack}function _(t,e,n){return`${t.id}.${e.id}.${n.stack||n.type}`}function b(t){const{min:e,max:n,minDefined:i,maxDefined:s}=t.getUserBounds();return{min:i?e:Number.NEGATIVE_INFINITY,max:s?n:Number.POSITIVE_INFINITY}}function w(t,e,n){const i=t[e]||(t[e]={});return i[n]||(i[n]={})}function T(t,e,n,i){for(const s of e.getMatchingVisibleMetas(i).reverse()){const e=t[s.index];if(n&&e>0||!n&&e<0)return s.index}return null}function x(t,e){const{chart:n,_cachedMeta:i}=t,s=n._stacks||(n._stacks={}),{iScale:r,vScale:o,index:a}=i,c=r.axis,l=o.axis,h=_(r,o,i),u=e.length;let d;for(let f=0;f<u;++f){const t=e[f],{[c]:n,[l]:r}=t,u=t._stacks||(t._stacks={});d=u[l]=w(s,h,n),d[a]=r,d._top=T(d,o,!0,i.type),d._bottom=T(d,o,!1,i.type);const p=d._visualValues||(d._visualValues={});p[a]=r}}function E(t,e){const n=t.scales;return Object.keys(n).filter((t=>n[t].axis===e)).shift()}function C(t,e){return(0,i.j)(t,{active:!1,dataset:void 0,datasetIndex:e,index:e,mode:"default",type:"dataset"})}function I(t,e,n){return(0,i.j)(t,{active:!1,dataIndex:e,parsed:void 0,raw:void 0,element:n,index:e,mode:"default",type:"data"})}function S(t,e){const n=t.controller.index,i=t.vScale&&t.vScale.axis;if(i){e=e||t._parsed;for(const t of e){const e=t._stacks;if(!e||void 0===e[i]||void 0===e[i][n])return;delete e[i][n],void 0!==e[i]._visualValues&&void 0!==e[i]._visualValues[n]&&delete e[i]._visualValues[n]}}}const k=t=>"reset"===t||"none"===t,A=(t,e)=>e?t:Object.assign({},t),O=(t,e,n)=>t&&!e.hidden&&e._stacked&&{keys:g(n,!0),values:null};class R{static defaults={};static datasetElementType=null;static dataElementType=null;constructor(t,e){this.chart=t,this._ctx=t.ctx,this.index=e,this._cachedDataOpts={},this._cachedMeta=this.getMeta(),this._type=this._cachedMeta.type,this.options=void 0,this._parsing=!1,this._data=void 0,this._objectData=void 0,this._sharedOptions=void 0,this._drawStart=void 0,this._drawCount=void 0,this.enableOptionSharing=!1,this.supportsDecimation=!1,this.$context=void 0,this._syncList=[],this.datasetElementType=new.target.datasetElementType,this.dataElementType=new.target.dataElementType,this.initialize()}initialize(){const t=this._cachedMeta;this.configure(),this.linkScales(),t._stacked=v(t.vScale,t),this.addElements(),this.options.fill&&!this.chart.isPluginEnabled("filler")&&console.warn("Tried to use the 'fill' option without the 'Filler' plugin enabled. Please import and register the 'Filler' plugin and make sure it is not disabled in the options")}updateIndex(t){this.index!==t&&S(this._cachedMeta),this.index=t}linkScales(){const t=this.chart,e=this._cachedMeta,n=this.getDataset(),s=(t,e,n,i)=>"x"===t?e:"r"===t?i:n,r=e.xAxisID=(0,i.v)(n.xAxisID,E(t,"x")),o=e.yAxisID=(0,i.v)(n.yAxisID,E(t,"y")),a=e.rAxisID=(0,i.v)(n.rAxisID,E(t,"r")),c=e.indexAxis,l=e.iAxisID=s(c,r,o,a),h=e.vAxisID=s(c,o,r,a);e.xScale=this.getScaleForId(r),e.yScale=this.getScaleForId(o),e.rScale=this.getScaleForId(a),e.iScale=this.getScaleForId(l),e.vScale=this.getScaleForId(h)}getDataset(){return this.chart.data.datasets[this.index]}getMeta(){return this.chart.getDatasetMeta(this.index)}getScaleForId(t){return this.chart.scales[t]}_getOtherScale(t){const e=this._cachedMeta;return t===e.iScale?e.vScale:e.iScale}reset(){this._update("reset")}_destroy(){const t=this._cachedMeta;this._data&&(0,i.u)(this._data,this),t._stacked&&S(t)}_dataCheck(){const t=this.getDataset(),e=t.data||(t.data=[]),n=this._data;if((0,i.i)(e)){const t=this._cachedMeta;this._data=y(e,t)}else if(n!==e){if(n){(0,i.u)(n,this);const t=this._cachedMeta;S(t),t._parsed=[]}e&&Object.isExtensible(e)&&(0,i.l)(e,this),this._syncList=[],this._data=e}}addElements(){const t=this._cachedMeta;this._dataCheck(),this.datasetElementType&&(t.dataset=new this.datasetElementType)}buildOrUpdateElements(t){const e=this._cachedMeta,n=this.getDataset();let i=!1;this._dataCheck();const s=e._stacked;e._stacked=v(e.vScale,e),e.stack!==n.stack&&(i=!0,S(e),e.stack=n.stack),this._resyncElements(t),(i||s!==e._stacked)&&(x(this,e._parsed),e._stacked=v(e.vScale,e))}configure(){const t=this.chart.config,e=t.datasetScopeKeys(this._type),n=t.getOptionScopes(this.getDataset(),e,!0);this.options=t.createResolver(n,this.getContext()),this._parsing=this.options.parsing,this._cachedDataOpts={}}parse(t,e){const{_cachedMeta:n,_data:s}=this,{iScale:r,_stacked:o}=n,a=r.axis;let c,l,h,u=0===t&&e===s.length||n._sorted,d=t>0&&n._parsed[t-1];if(!1===this._parsing)n._parsed=s,n._sorted=!0,h=s;else{h=(0,i.b)(s[t])?this.parseArrayData(n,s,t,e):(0,i.i)(s[t])?this.parseObjectData(n,s,t,e):this.parsePrimitiveData(n,s,t,e);const r=()=>null===l[a]||d&&l[a]<d[a];for(c=0;c<e;++c)n._parsed[c+t]=l=h[c],u&&(r()&&(u=!1),d=l);n._sorted=u}o&&x(this,h)}parsePrimitiveData(t,e,n,i){const{iScale:s,vScale:r}=t,o=s.axis,a=r.axis,c=s.getLabels(),l=s===r,h=new Array(i);let u,d,f;for(u=0,d=i;u<d;++u)f=u+n,h[u]={[o]:l||s.parse(c[f],f),[a]:r.parse(e[f],f)};return h}parseArrayData(t,e,n,i){const{xScale:s,yScale:r}=t,o=new Array(i);let a,c,l,h;for(a=0,c=i;a<c;++a)l=a+n,h=e[l],o[a]={x:s.parse(h[0],l),y:r.parse(h[1],l)};return o}parseObjectData(t,e,n,s){const{xScale:r,yScale:o}=t,{xAxisKey:a="x",yAxisKey:c="y"}=this._parsing,l=new Array(s);let h,u,d,f;for(h=0,u=s;h<u;++h)d=h+n,f=e[d],l[h]={x:r.parse((0,i.f)(f,a),d),y:o.parse((0,i.f)(f,c),d)};return l}getParsed(t){return this._cachedMeta._parsed[t]}getDataElement(t){return this._cachedMeta.data[t]}applyStack(t,e,n){const i=this.chart,s=this._cachedMeta,r=e[t.axis],o={keys:g(i,!0),values:e._stacks[t.axis]._visualValues};return m(o,r,s.index,{mode:n})}updateRangeFromParsed(t,e,n,i){const s=n[e.axis];let r=null===s?NaN:s;const o=i&&n._stacks[e.axis];i&&o&&(i.values=o,r=m(i,s,this._cachedMeta.index)),t.min=Math.min(t.min,r),t.max=Math.max(t.max,r)}getMinMax(t,e){const n=this._cachedMeta,s=n._parsed,r=n._sorted&&t===n.iScale,o=s.length,a=this._getOtherScale(t),c=O(e,n,this.chart),l={min:Number.POSITIVE_INFINITY,max:Number.NEGATIVE_INFINITY},{min:h,max:u}=b(a);let d,f;function p(){f=s[d];const e=f[a.axis];return!(0,i.g)(f[t.axis])||h>e||u<e}for(d=0;d<o;++d)if(!p()&&(this.updateRangeFromParsed(l,t,f,c),r))break;if(r)for(d=o-1;d>=0;--d)if(!p()){this.updateRangeFromParsed(l,t,f,c);break}return l}getAllParsedValues(t){const e=this._cachedMeta._parsed,n=[];let s,r,o;for(s=0,r=e.length;s<r;++s)o=e[s][t.axis],(0,i.g)(o)&&n.push(o);return n}getMaxOverflow(){return!1}getLabelAndValue(t){const e=this._cachedMeta,n=e.iScale,i=e.vScale,s=this.getParsed(t);return{label:n?""+n.getLabelForValue(s[n.axis]):"",value:i?""+i.getLabelForValue(s[i.axis]):""}}_update(t){const e=this._cachedMeta;this.update(t||"default"),e._clip=p((0,i.v)(this.options.clip,f(e.xScale,e.yScale,this.getMaxOverflow())))}update(t){}draw(){const t=this._ctx,e=this.chart,n=this._cachedMeta,i=n.data||[],s=e.chartArea,r=[],o=this._drawStart||0,a=this._drawCount||i.length-o,c=this.options.drawActiveElementsOnTop;let l;for(n.dataset&&n.dataset.draw(t,s,o,a),l=o;l<o+a;++l){const e=i[l];e.hidden||(e.active&&c?r.push(e):e.draw(t,s))}for(l=0;l<r.length;++l)r[l].draw(t,s)}getStyle(t,e){const n=e?"active":"default";return void 0===t&&this._cachedMeta.dataset?this.resolveDatasetElementOptions(n):this.resolveDataElementOptions(t||0,n)}getContext(t,e,n){const i=this.getDataset();let s;if(t>=0&&t<this._cachedMeta.data.length){const e=this._cachedMeta.data[t];s=e.$context||(e.$context=I(this.getContext(),t,e)),s.parsed=this.getParsed(t),s.raw=i.data[t],s.index=s.dataIndex=t}else s=this.$context||(this.$context=C(this.chart.getContext(),this.index)),s.dataset=i,s.index=s.datasetIndex=this.index;return s.active=!!e,s.mode=n,s}resolveDatasetElementOptions(t){return this._resolveElementOptions(this.datasetElementType.id,t)}resolveDataElementOptions(t,e){return this._resolveElementOptions(this.dataElementType.id,e,t)}_resolveElementOptions(t,e="default",n){const s="active"===e,r=this._cachedDataOpts,o=t+"-"+e,a=r[o],c=this.enableOptionSharing&&(0,i.h)(n);if(a)return A(a,c);const l=this.chart.config,h=l.datasetElementScopeKeys(this._type,t),u=s?[`${t}Hover`,"hover",t,""]:[t,""],d=l.getOptionScopes(this.getDataset(),h),f=Object.keys(i.d.elements[t]),p=()=>this.getContext(n,s,e),g=l.resolveNamedOptions(d,f,p,u);return g.$shared&&(g.$shared=c,r[o]=Object.freeze(A(g,c))),g}_resolveAnimations(t,e,n){const i=this.chart,s=this._cachedDataOpts,r=`animation-${e}`,o=s[r];if(o)return o;let a;if(!1!==i.options.animation){const i=this.chart.config,s=i.datasetAnimationScopeKeys(this._type,e),r=i.getOptionScopes(this.getDataset(),s);a=i.createResolver(r,this.getContext(t,n,e))}const c=new l(i,a&&a.animations);return a&&a._cacheable&&(s[r]=Object.freeze(c)),c}getSharedOptions(t){if(t.$shared)return this._sharedOptions||(this._sharedOptions=Object.assign({},t))}includeOptions(t,e){return!e||k(t)||this.chart._animationsDisabled}_getSharedOptions(t,e){const n=this.resolveDataElementOptions(t,e),i=this._sharedOptions,s=this.getSharedOptions(n),r=this.includeOptions(e,s)||s!==i;return this.updateSharedOptions(s,e,n),{sharedOptions:s,includeOptions:r}}updateElement(t,e,n,i){k(i)?Object.assign(t,n):this._resolveAnimations(e,i).update(t,n)}updateSharedOptions(t,e,n){t&&!k(e)&&this._resolveAnimations(void 0,e).update(t,n)}_setStyle(t,e,n,i){t.active=i;const s=this.getStyle(e,i);this._resolveAnimations(e,n,i).update(t,{options:!i&&this.getSharedOptions(s)||s})}removeHoverStyle(t,e,n){this._setStyle(t,n,"active",!1)}setHoverStyle(t,e,n){this._setStyle(t,n,"active",!0)}_removeDatasetHoverStyle(){const t=this._cachedMeta.dataset;t&&this._setStyle(t,void 0,"active",!1)}_setDatasetHoverStyle(){const t=this._cachedMeta.dataset;t&&this._setStyle(t,void 0,"active",!0)}_resyncElements(t){const e=this._data,n=this._cachedMeta.data;for(const[o,a,c]of this._syncList)this[o](a,c);this._syncList=[];const i=n.length,s=e.length,r=Math.min(s,i);r&&this.parse(0,r),s>i?this._insertElements(i,s-i,t):s<i&&this._removeElements(s,i-s)}_insertElements(t,e,n=!0){const i=this._cachedMeta,s=i.data,r=t+e;let o;const a=t=>{for(t.length+=e,o=t.length-1;o>=r;o--)t[o]=t[o-e]};for(a(s),o=t;o<r;++o)s[o]=new this.dataElementType;this._parsing&&a(i._parsed),this.parse(t,e),n&&this.updateElements(s,t,e,"reset")}updateElements(t,e,n,i){}_removeElements(t,e){const n=this._cachedMeta;if(this._parsing){const i=n._parsed.splice(t,e);n._stacked&&S(n,i)}n.data.splice(t,e)}_sync(t){if(this._parsing)this._syncList.push(t);else{const[e,n,i]=t;this[e](n,i)}this.chart._dataChanges.push([this.index,...t])}_onDataPush(){const t=arguments.length;this._sync(["_insertElements",this.getDataset().data.length-t,t])}_onDataPop(){this._sync(["_removeElements",this._cachedMeta.data.length-1,1])}_onDataShift(){this._sync(["_removeElements",0,1])}_onDataSplice(t,e){e&&this._sync(["_removeElements",t,e]);const n=arguments.length-2;n&&this._sync(["_insertElements",t,n])}_onDataUnshift(){this._sync(["_insertElements",0,arguments.length])}}class P extends R{static id="line";static defaults={datasetElementType:"line",dataElementType:"point",showLine:!0,spanGaps:!1};static overrides={scales:{_index_:{type:"category"},_value_:{type:"linear"}}};initialize(){this.enableOptionSharing=!0,this.supportsDecimation=!0,super.initialize()}update(t){const e=this._cachedMeta,{dataset:n,data:s=[],_dataset:r}=e,o=this.chart._animationsDisabled;let{start:a,count:c}=(0,i.q)(e,s,o);this._drawStart=a,this._drawCount=c,(0,i.w)(e)&&(a=0,c=s.length),n._chart=this.chart,n._datasetIndex=this.index,n._decimated=!!r._decimated,n.points=s;const l=this.resolveDatasetElementOptions(t);this.options.showLine||(l.borderWidth=0),l.segment=this.options.segment,this.updateElement(n,void 0,{animated:!o,options:l},t),this.updateElements(s,a,c,t)}updateElements(t,e,n,s){const r="reset"===s,{iScale:o,vScale:a,_stacked:c,_dataset:l}=this._cachedMeta,{sharedOptions:h,includeOptions:u}=this._getSharedOptions(e,s),d=o.axis,f=a.axis,{spanGaps:p,segment:g}=this.options,m=(0,i.x)(p)?p:Number.POSITIVE_INFINITY,y=this.chart._animationsDisabled||r||"none"===s,v=e+n,_=t.length;let b=e>0&&this.getParsed(e-1);for(let w=0;w<_;++w){const n=t[w],p=y?n:{};if(w<e||w>=v){p.skip=!0;continue}const _=this.getParsed(w),T=(0,i.k)(_[f]),x=p[d]=o.getPixelForValue(_[d],w),E=p[f]=r||T?a.getBasePixel():a.getPixelForValue(c?this.applyStack(a,_,c):_[f],w);p.skip=isNaN(x)||isNaN(E)||T,p.stop=w>0&&Math.abs(_[d]-b[d])>m,g&&(p.parsed=_,p.raw=l.data[w]),u&&(p.options=h||this.resolveDataElementOptions(w,n.active?"active":s)),y||this.updateElement(n,w,p,s),b=_}}getMaxOverflow(){const t=this._cachedMeta,e=t.dataset,n=e.options&&e.options.borderWidth||0,i=t.data||[];if(!i.length)return n;const s=i[0].size(this.resolveDataElementOptions(0)),r=i[i.length-1].size(this.resolveDataElementOptions(i.length-1));return Math.max(n,s,r)/2}draw(){const t=this._cachedMeta;t.dataset.updateControlPoints(this.chart.chartArea,t.iScale.axis),super.draw()}}function N(){throw new Error("This method is not implemented: Check that a complete date adapter is provided.")}class D{static override(t){Object.assign(D.prototype,t)}options;constructor(t){this.options=t||{}}init(){}formats(){return N()}parse(){return N()}format(){return N()}add(){return N()}diff(){return N()}startOf(){return N()}endOf(){return N()}}var M={_date:D};function L(t,e,n,s){const{controller:r,data:o,_sorted:a}=t,c=r._cachedMeta.iScale;if(c&&e===c.axis&&"r"!==e&&a&&o.length){const t=c._reversePixels?i.A:i.B;if(!s)return t(o,e,n);if(r._sharedOptions){const i=o[0],s="function"===typeof i.getRange&&i.getRange(e);if(s){const i=t(o,e,n-s),r=t(o,e,n+s);return{lo:i.lo,hi:r.hi}}}}return{lo:0,hi:o.length-1}}function F(t,e,n,i,s){const r=t.getSortedVisibleDatasetMetas(),o=n[e];for(let a=0,c=r.length;a<c;++a){const{index:t,data:n}=r[a],{lo:c,hi:l}=L(r[a],e,o,s);for(let e=c;e<=l;++e){const s=n[e];s.skip||i(s,t,e)}}}function U(t){const e=-1!==t.indexOf("x"),n=-1!==t.indexOf("y");return function(t,i){const s=e?Math.abs(t.x-i.x):0,r=n?Math.abs(t.y-i.y):0;return Math.sqrt(Math.pow(s,2)+Math.pow(r,2))}}function V(t,e,n,s,r){const o=[];if(!r&&!t.isPointInArea(e))return o;const a=function(n,a,c){(r||(0,i.C)(n,t.chartArea,0))&&n.inRange(e.x,e.y,s)&&o.push({element:n,datasetIndex:a,index:c})};return F(t,n,e,a,!0),o}function j(t,e,n,s){let r=[];function o(t,n,o){const{startAngle:a,endAngle:c}=t.getProps(["startAngle","endAngle"],s),{angle:l}=(0,i.D)(t,{x:e.x,y:e.y});(0,i.p)(l,a,c)&&r.push({element:t,datasetIndex:n,index:o})}return F(t,n,e,o),r}function z(t,e,n,i,s,r){let o=[];const a=U(n);let c=Number.POSITIVE_INFINITY;function l(n,l,h){const u=n.inRange(e.x,e.y,s);if(i&&!u)return;const d=n.getCenterPoint(s),f=!!r||t.isPointInArea(d);if(!f&&!u)return;const p=a(e,d);p<c?(o=[{element:n,datasetIndex:l,index:h}],c=p):p===c&&o.push({element:n,datasetIndex:l,index:h})}return F(t,n,e,l),o}function B(t,e,n,i,s,r){return r||t.isPointInArea(e)?"r"!==n||i?z(t,e,n,i,s,r):j(t,e,n,s):[]}function $(t,e,n,i,s){const r=[],o="x"===n?"inXRange":"inYRange";let a=!1;return F(t,n,e,((t,i,c)=>{t[o]&&t[o](e[n],s)&&(r.push({element:t,datasetIndex:i,index:c}),a=a||t.inRange(e.x,e.y,s))})),i&&!a?[]:r}var W={evaluateInteractionItems:F,modes:{index(t,e,n,s){const r=(0,i.z)(e,t),o=n.axis||"x",a=n.includeInvisible||!1,c=n.intersect?V(t,r,o,s,a):B(t,r,o,!1,s,a),l=[];return c.length?(t.getSortedVisibleDatasetMetas().forEach((t=>{const e=c[0].index,n=t.data[e];n&&!n.skip&&l.push({element:n,datasetIndex:t.index,index:e})})),l):[]},dataset(t,e,n,s){const r=(0,i.z)(e,t),o=n.axis||"xy",a=n.includeInvisible||!1;let c=n.intersect?V(t,r,o,s,a):B(t,r,o,!1,s,a);if(c.length>0){const e=c[0].datasetIndex,n=t.getDatasetMeta(e).data;c=[];for(let t=0;t<n.length;++t)c.push({element:n[t],datasetIndex:e,index:t})}return c},point(t,e,n,s){const r=(0,i.z)(e,t),o=n.axis||"xy",a=n.includeInvisible||!1;return V(t,r,o,s,a)},nearest(t,e,n,s){const r=(0,i.z)(e,t),o=n.axis||"xy",a=n.includeInvisible||!1;return B(t,r,o,n.intersect,s,a)},x(t,e,n,s){const r=(0,i.z)(e,t);return $(t,r,"x",n.intersect,s)},y(t,e,n,s){const r=(0,i.z)(e,t);return $(t,r,"y",n.intersect,s)}}};const H=["left","top","right","bottom"];function q(t,e){return t.filter((t=>t.pos===e))}function K(t,e){return t.filter((t=>-1===H.indexOf(t.pos)&&t.box.axis===e))}function G(t,e){return t.sort(((t,n)=>{const i=e?n:t,s=e?t:n;return i.weight===s.weight?i.index-s.index:i.weight-s.weight}))}function Y(t){const e=[];let n,i,s,r,o,a;for(n=0,i=(t||[]).length;n<i;++n)s=t[n],({position:r,options:{stack:o,stackWeight:a=1}}=s),e.push({index:n,box:s,pos:r,horizontal:s.isHorizontal(),weight:s.weight,stack:o&&r+o,stackWeight:a});return e}function Q(t){const e={};for(const n of t){const{stack:t,pos:i,stackWeight:s}=n;if(!t||!H.includes(i))continue;const r=e[t]||(e[t]={count:0,placed:0,weight:0,size:0});r.count++,r.weight+=s}return e}function X(t,e){const n=Q(t),{vBoxMaxWidth:i,hBoxMaxHeight:s}=e;let r,o,a;for(r=0,o=t.length;r<o;++r){a=t[r];const{fullSize:o}=a.box,c=n[a.stack],l=c&&a.stackWeight/c.weight;a.horizontal?(a.width=l?l*i:o&&e.availableWidth,a.height=s):(a.width=i,a.height=l?l*s:o&&e.availableHeight)}return n}function J(t){const e=Y(t),n=G(e.filter((t=>t.box.fullSize)),!0),i=G(q(e,"left"),!0),s=G(q(e,"right")),r=G(q(e,"top"),!0),o=G(q(e,"bottom")),a=K(e,"x"),c=K(e,"y");return{fullSize:n,leftAndTop:i.concat(r),rightAndBottom:s.concat(c).concat(o).concat(a),chartArea:q(e,"chartArea"),vertical:i.concat(s).concat(c),horizontal:r.concat(o).concat(a)}}function Z(t,e,n,i){return Math.max(t[n],e[n])+Math.max(t[i],e[i])}function tt(t,e){t.top=Math.max(t.top,e.top),t.left=Math.max(t.left,e.left),t.bottom=Math.max(t.bottom,e.bottom),t.right=Math.max(t.right,e.right)}function et(t,e,n,s){const{pos:r,box:o}=n,a=t.maxPadding;if(!(0,i.i)(r)){n.size&&(t[r]-=n.size);const e=s[n.stack]||{size:0,count:1};e.size=Math.max(e.size,n.horizontal?o.height:o.width),n.size=e.size/e.count,t[r]+=n.size}o.getPadding&&tt(a,o.getPadding());const c=Math.max(0,e.outerWidth-Z(a,t,"left","right")),l=Math.max(0,e.outerHeight-Z(a,t,"top","bottom")),h=c!==t.w,u=l!==t.h;return t.w=c,t.h=l,n.horizontal?{same:h,other:u}:{same:u,other:h}}function nt(t){const e=t.maxPadding;function n(n){const i=Math.max(e[n]-t[n],0);return t[n]+=i,i}t.y+=n("top"),t.x+=n("left"),n("right"),n("bottom")}function it(t,e){const n=e.maxPadding;function i(t){const i={left:0,top:0,right:0,bottom:0};return t.forEach((t=>{i[t]=Math.max(e[t],n[t])})),i}return i(t?["left","right"]:["top","bottom"])}function st(t,e,n,i){const s=[];let r,o,a,c,l,h;for(r=0,o=t.length,l=0;r<o;++r){a=t[r],c=a.box,c.update(a.width||e.w,a.height||e.h,it(a.horizontal,e));const{same:o,other:u}=et(e,n,a,i);l|=o&&s.length,h=h||u,c.fullSize||s.push(a)}return l&&st(s,e,n,i)||h}function rt(t,e,n,i,s){t.top=n,t.left=e,t.right=e+i,t.bottom=n+s,t.width=i,t.height=s}function ot(t,e,n,s){const r=n.padding;let{x:o,y:a}=e;for(const c of t){const t=c.box,l=s[c.stack]||{count:1,placed:0,weight:1},h=c.stackWeight/l.weight||1;if(c.horizontal){const s=e.w*h,o=l.size||t.height;(0,i.h)(l.start)&&(a=l.start),t.fullSize?rt(t,r.left,a,n.outerWidth-r.right-r.left,o):rt(t,e.left+l.placed,a,s,o),l.start=a,l.placed+=s,a=t.bottom}else{const s=e.h*h,a=l.size||t.width;(0,i.h)(l.start)&&(o=l.start),t.fullSize?rt(t,o,r.top,a,n.outerHeight-r.bottom-r.top):rt(t,o,e.top+l.placed,a,s),l.start=o,l.placed+=s,o=t.right}}e.x=o,e.y=a}var at={addBox(t,e){t.boxes||(t.boxes=[]),e.fullSize=e.fullSize||!1,e.position=e.position||"top",e.weight=e.weight||0,e._layers=e._layers||function(){return[{z:0,draw(t){e.draw(t)}}]},t.boxes.push(e)},removeBox(t,e){const n=t.boxes?t.boxes.indexOf(e):-1;-1!==n&&t.boxes.splice(n,1)},configure(t,e,n){e.fullSize=n.fullSize,e.position=n.position,e.weight=n.weight},update(t,e,n,s){if(!t)return;const r=(0,i.E)(t.options.layout.padding),o=Math.max(e-r.width,0),a=Math.max(n-r.height,0),c=J(t.boxes),l=c.vertical,h=c.horizontal;(0,i.F)(t.boxes,(t=>{"function"===typeof t.beforeLayout&&t.beforeLayout()}));const u=l.reduce(((t,e)=>e.box.options&&!1===e.box.options.display?t:t+1),0)||1,d=Object.freeze({outerWidth:e,outerHeight:n,padding:r,availableWidth:o,availableHeight:a,vBoxMaxWidth:o/2/u,hBoxMaxHeight:a/2}),f=Object.assign({},r);tt(f,(0,i.E)(s));const p=Object.assign({maxPadding:f,w:o,h:a,x:r.left,y:r.top},r),g=X(l.concat(h),d);st(c.fullSize,p,d,g),st(l,p,d,g),st(h,p,d,g)&&st(l,p,d,g),nt(p),ot(c.leftAndTop,p,d,g),p.x+=p.w,p.y+=p.h,ot(c.rightAndBottom,p,d,g),t.chartArea={left:p.left,top:p.top,right:p.left+p.w,bottom:p.top+p.h,height:p.h,width:p.w},(0,i.F)(c.chartArea,(e=>{const n=e.box;Object.assign(n,t.chartArea),n.update(p.w,p.h,{left:0,top:0,right:0,bottom:0})}))}};class ct{acquireContext(t,e){}releaseContext(t){return!1}addEventListener(t,e,n){}removeEventListener(t,e,n){}getDevicePixelRatio(){return 1}getMaximumSize(t,e,n,i){return e=Math.max(0,e||t.width),n=n||t.height,{width:e,height:Math.max(0,i?Math.floor(e/i):n)}}isAttached(t){return!0}updateConfig(t){}}class lt extends ct{acquireContext(t){return t&&t.getContext&&t.getContext("2d")||null}updateConfig(t){t.options.animation=!1}}const ht="$chartjs",ut={touchstart:"mousedown",touchmove:"mousemove",touchend:"mouseup",pointerenter:"mouseenter",pointerdown:"mousedown",pointermove:"mousemove",pointerup:"mouseup",pointerleave:"mouseout",pointerout:"mouseout"},dt=t=>null===t||""===t;function ft(t,e){const n=t.style,s=t.getAttribute("height"),r=t.getAttribute("width");if(t[ht]={initial:{height:s,width:r,style:{display:n.display,height:n.height,width:n.width}}},n.display=n.display||"block",n.boxSizing=n.boxSizing||"border-box",dt(r)){const e=(0,i.J)(t,"width");void 0!==e&&(t.width=e)}if(dt(s))if(""===t.style.height)t.height=t.width/(e||2);else{const e=(0,i.J)(t,"height");void 0!==e&&(t.height=e)}return t}const pt=!!i.K&&{passive:!0};function gt(t,e,n){t&&t.addEventListener(e,n,pt)}function mt(t,e,n){t&&t.canvas&&t.canvas.removeEventListener(e,n,pt)}function yt(t,e){const n=ut[t.type]||t.type,{x:s,y:r}=(0,i.z)(t,e);return{type:n,chart:e,native:t,x:void 0!==s?s:null,y:void 0!==r?r:null}}function vt(t,e){for(const n of t)if(n===e||n.contains(e))return!0}function _t(t,e,n){const i=t.canvas,s=new MutationObserver((t=>{let e=!1;for(const n of t)e=e||vt(n.addedNodes,i),e=e&&!vt(n.removedNodes,i);e&&n()}));return s.observe(document,{childList:!0,subtree:!0}),s}function bt(t,e,n){const i=t.canvas,s=new MutationObserver((t=>{let e=!1;for(const n of t)e=e||vt(n.removedNodes,i),e=e&&!vt(n.addedNodes,i);e&&n()}));return s.observe(document,{childList:!0,subtree:!0}),s}const wt=new Map;let Tt=0;function xt(){const t=window.devicePixelRatio;t!==Tt&&(Tt=t,wt.forEach(((e,n)=>{n.currentDevicePixelRatio!==t&&e()})))}function Et(t,e){wt.size||window.addEventListener("resize",xt),wt.set(t,e)}function Ct(t){wt.delete(t),wt.size||window.removeEventListener("resize",xt)}function It(t,e,n){const s=t.canvas,r=s&&(0,i.I)(s);if(!r)return;const o=(0,i.L)(((t,e)=>{const i=r.clientWidth;n(t,e),i<r.clientWidth&&n()}),window),a=new ResizeObserver((t=>{const e=t[0],n=e.contentRect.width,i=e.contentRect.height;0===n&&0===i||o(n,i)}));return a.observe(r),Et(t,o),a}function St(t,e,n){n&&n.disconnect(),"resize"===e&&Ct(t)}function kt(t,e,n){const s=t.canvas,r=(0,i.L)((e=>{null!==t.ctx&&n(yt(e,t))}),t);return gt(s,e,r),r}class At extends ct{acquireContext(t,e){const n=t&&t.getContext&&t.getContext("2d");return n&&n.canvas===t?(ft(t,e),n):null}releaseContext(t){const e=t.canvas;if(!e[ht])return!1;const n=e[ht].initial;["height","width"].forEach((t=>{const s=n[t];(0,i.k)(s)?e.removeAttribute(t):e.setAttribute(t,s)}));const s=n.style||{};return Object.keys(s).forEach((t=>{e.style[t]=s[t]})),e.width=e.width,delete e[ht],!0}addEventListener(t,e,n){this.removeEventListener(t,e);const i=t.$proxies||(t.$proxies={}),s={attach:_t,detach:bt,resize:It},r=s[e]||kt;i[e]=r(t,e,n)}removeEventListener(t,e){const n=t.$proxies||(t.$proxies={}),i=n[e];if(!i)return;const s={attach:St,detach:St,resize:St},r=s[e]||mt;r(t,e,i),n[e]=void 0}getDevicePixelRatio(){return window.devicePixelRatio}getMaximumSize(t,e,n,s){return(0,i.G)(t,e,n,s)}isAttached(t){const e=t&&(0,i.I)(t);return!(!e||!e.isConnected)}}function Ot(t){return!(0,i.M)()||"undefined"!==typeof OffscreenCanvas&&t instanceof OffscreenCanvas?lt:At}class Rt{static defaults={};static defaultRoutes=void 0;x;y;active=!1;options;$animations;tooltipPosition(t){const{x:e,y:n}=this.getProps(["x","y"],t);return{x:e,y:n}}hasValue(){return(0,i.x)(this.x)&&(0,i.x)(this.y)}getProps(t,e){const n=this.$animations;if(!e||!n)return this;const i={};return t.forEach((t=>{i[t]=n[t]&&n[t].active()?n[t]._to:this[t]})),i}}function Pt(t,e){const n=t.options.ticks,s=Nt(t),r=Math.min(n.maxTicksLimit||s,s),o=n.major.enabled?Mt(e):[],a=o.length,c=o[0],l=o[a-1],h=[];if(a>r)return Lt(e,h,o,a/r),h;const u=Dt(o,e,r);if(a>0){let t,n;const s=a>1?Math.round((l-c)/(a-1)):null;for(Ft(e,h,u,(0,i.k)(s)?0:c-s,c),t=0,n=a-1;t<n;t++)Ft(e,h,u,o[t],o[t+1]);return Ft(e,h,u,l,(0,i.k)(s)?e.length:l+s),h}return Ft(e,h,u),h}function Nt(t){const e=t.options.offset,n=t._tickSize(),i=t._length/n+(e?0:1),s=t._maxLength/n;return Math.floor(Math.min(i,s))}function Dt(t,e,n){const s=Ut(t),r=e.length/n;if(!s)return Math.max(r,1);const o=(0,i.N)(s);for(let i=0,a=o.length-1;i<a;i++){const t=o[i];if(t>r)return t}return Math.max(r,1)}function Mt(t){const e=[];let n,i;for(n=0,i=t.length;n<i;n++)t[n].major&&e.push(n);return e}function Lt(t,e,n,i){let s,r=0,o=n[0];for(i=Math.ceil(i),s=0;s<t.length;s++)s===o&&(e.push(t[s]),r++,o=n[r*i])}function Ft(t,e,n,s,r){const o=(0,i.v)(s,0),a=Math.min((0,i.v)(r,t.length),t.length);let c,l,h,u=0;n=Math.ceil(n),r&&(c=r-s,n=c/Math.floor(c/n)),h=o;while(h<0)u++,h=Math.round(o+u*n);for(l=Math.max(o,0);l<a;l++)l===h&&(e.push(t[l]),u++,h=Math.round(o+u*n))}function Ut(t){const e=t.length;let n,i;if(e<2)return!1;for(i=t[0],n=1;n<e;++n)if(t[n]-t[n-1]!==i)return!1;return i}const Vt=t=>"left"===t?"right":"right"===t?"left":t,jt=(t,e,n)=>"top"===e||"left"===e?t[e]+n:t[e]-n,zt=(t,e)=>Math.min(e||t,t);function Bt(t,e){const n=[],i=t.length/e,s=t.length;let r=0;for(;r<s;r+=i)n.push(t[Math.floor(r)]);return n}function $t(t,e,n){const i=t.ticks.length,s=Math.min(e,i-1),r=t._startPixel,o=t._endPixel,a=1e-6;let c,l=t.getPixelForTick(s);if(!(n&&(c=1===i?Math.max(l-r,o-l):0===e?(t.getPixelForTick(1)-l)/2:(l-t.getPixelForTick(s-1))/2,l+=s<e?c:-c,l<r-a||l>o+a)))return l}function Wt(t,e){(0,i.F)(t,(t=>{const n=t.gc,i=n.length/2;let s;if(i>e){for(s=0;s<i;++s)delete t.data[n[s]];n.splice(0,i)}}))}function Ht(t){return t.drawTicks?t.tickLength:0}function qt(t,e){if(!t.display)return 0;const n=(0,i.a0)(t.font,e),s=(0,i.E)(t.padding),r=(0,i.b)(t.text)?t.text.length:1;return r*n.lineHeight+s.height}function Kt(t,e){return(0,i.j)(t,{scale:e,type:"scale"})}function Gt(t,e,n){return(0,i.j)(t,{tick:n,index:e,type:"tick"})}function Yt(t,e,n){let s=(0,i.a1)(t);return(n&&"right"!==e||!n&&"right"===e)&&(s=Vt(s)),s}function Qt(t,e,n,s){const{top:r,left:o,bottom:a,right:c,chart:l}=t,{chartArea:h,scales:u}=l;let d,f,p,g=0;const m=a-r,y=c-o;if(t.isHorizontal()){if(f=(0,i.a2)(s,o,c),(0,i.i)(n)){const t=Object.keys(n)[0],i=n[t];p=u[t].getPixelForValue(i)+m-e}else p="center"===n?(h.bottom+h.top)/2+m-e:jt(t,n,e);d=c-o}else{if((0,i.i)(n)){const t=Object.keys(n)[0],i=n[t];f=u[t].getPixelForValue(i)-y+e}else f="center"===n?(h.left+h.right)/2-y+e:jt(t,n,e);p=(0,i.a2)(s,a,r),g="left"===n?-i.H:i.H}return{titleX:f,titleY:p,maxWidth:d,rotation:g}}class Xt extends Rt{constructor(t){super(),this.id=t.id,this.type=t.type,this.options=void 0,this.ctx=t.ctx,this.chart=t.chart,this.top=void 0,this.bottom=void 0,this.left=void 0,this.right=void 0,this.width=void 0,this.height=void 0,this._margins={left:0,right:0,top:0,bottom:0},this.maxWidth=void 0,this.maxHeight=void 0,this.paddingTop=void 0,this.paddingBottom=void 0,this.paddingLeft=void 0,this.paddingRight=void 0,this.axis=void 0,this.labelRotation=void 0,this.min=void 0,this.max=void 0,this._range=void 0,this.ticks=[],this._gridLineItems=null,this._labelItems=null,this._labelSizes=null,this._length=0,this._maxLength=0,this._longestTextCache={},this._startPixel=void 0,this._endPixel=void 0,this._reversePixels=!1,this._userMax=void 0,this._userMin=void 0,this._suggestedMax=void 0,this._suggestedMin=void 0,this._ticksLength=0,this._borderValue=0,this._cache={},this._dataLimitsCached=!1,this.$context=void 0}init(t){this.options=t.setContext(this.getContext()),this.axis=t.axis,this._userMin=this.parse(t.min),this._userMax=this.parse(t.max),this._suggestedMin=this.parse(t.suggestedMin),this._suggestedMax=this.parse(t.suggestedMax)}parse(t,e){return t}getUserBounds(){let{_userMin:t,_userMax:e,_suggestedMin:n,_suggestedMax:s}=this;return t=(0,i.O)(t,Number.POSITIVE_INFINITY),e=(0,i.O)(e,Number.NEGATIVE_INFINITY),n=(0,i.O)(n,Number.POSITIVE_INFINITY),s=(0,i.O)(s,Number.NEGATIVE_INFINITY),{min:(0,i.O)(t,n),max:(0,i.O)(e,s),minDefined:(0,i.g)(t),maxDefined:(0,i.g)(e)}}getMinMax(t){let e,{min:n,max:s,minDefined:r,maxDefined:o}=this.getUserBounds();if(r&&o)return{min:n,max:s};const a=this.getMatchingVisibleMetas();for(let i=0,c=a.length;i<c;++i)e=a[i].controller.getMinMax(this,t),r||(n=Math.min(n,e.min)),o||(s=Math.max(s,e.max));return n=o&&n>s?s:n,s=r&&n>s?n:s,{min:(0,i.O)(n,(0,i.O)(s,n)),max:(0,i.O)(s,(0,i.O)(n,s))}}getPadding(){return{left:this.paddingLeft||0,top:this.paddingTop||0,right:this.paddingRight||0,bottom:this.paddingBottom||0}}getTicks(){return this.ticks}getLabels(){const t=this.chart.data;return this.options.labels||(this.isHorizontal()?t.xLabels:t.yLabels)||t.labels||[]}getLabelItems(t=this.chart.chartArea){const e=this._labelItems||(this._labelItems=this._computeLabelItems(t));return e}beforeLayout(){this._cache={},this._dataLimitsCached=!1}beforeUpdate(){(0,i.Q)(this.options.beforeUpdate,[this])}update(t,e,n){const{beginAtZero:s,grace:r,ticks:o}=this.options,a=o.sampleSize;this.beforeUpdate(),this.maxWidth=t,this.maxHeight=e,this._margins=n=Object.assign({left:0,right:0,top:0,bottom:0},n),this.ticks=null,this._labelSizes=null,this._gridLineItems=null,this._labelItems=null,this.beforeSetDimensions(),this.setDimensions(),this.afterSetDimensions(),this._maxLength=this.isHorizontal()?this.width+n.left+n.right:this.height+n.top+n.bottom,this._dataLimitsCached||(this.beforeDataLimits(),this.determineDataLimits(),this.afterDataLimits(),this._range=(0,i.R)(this,r,s),this._dataLimitsCached=!0),this.beforeBuildTicks(),this.ticks=this.buildTicks()||[],this.afterBuildTicks();const c=a<this.ticks.length;this._convertTicksToLabels(c?Bt(this.ticks,a):this.ticks),this.configure(),this.beforeCalculateLabelRotation(),this.calculateLabelRotation(),this.afterCalculateLabelRotation(),o.display&&(o.autoSkip||"auto"===o.source)&&(this.ticks=Pt(this,this.ticks),this._labelSizes=null,this.afterAutoSkip()),c&&this._convertTicksToLabels(this.ticks),this.beforeFit(),this.fit(),this.afterFit(),this.afterUpdate()}configure(){let t,e,n=this.options.reverse;this.isHorizontal()?(t=this.left,e=this.right):(t=this.top,e=this.bottom,n=!n),this._startPixel=t,this._endPixel=e,this._reversePixels=n,this._length=e-t,this._alignToPixels=this.options.alignToPixels}afterUpdate(){(0,i.Q)(this.options.afterUpdate,[this])}beforeSetDimensions(){(0,i.Q)(this.options.beforeSetDimensions,[this])}setDimensions(){this.isHorizontal()?(this.width=this.maxWidth,this.left=0,this.right=this.width):(this.height=this.maxHeight,this.top=0,this.bottom=this.height),this.paddingLeft=0,this.paddingTop=0,this.paddingRight=0,this.paddingBottom=0}afterSetDimensions(){(0,i.Q)(this.options.afterSetDimensions,[this])}_callHooks(t){this.chart.notifyPlugins(t,this.getContext()),(0,i.Q)(this.options[t],[this])}beforeDataLimits(){this._callHooks("beforeDataLimits")}determineDataLimits(){}afterDataLimits(){this._callHooks("afterDataLimits")}beforeBuildTicks(){this._callHooks("beforeBuildTicks")}buildTicks(){return[]}afterBuildTicks(){this._callHooks("afterBuildTicks")}beforeTickToLabelConversion(){(0,i.Q)(this.options.beforeTickToLabelConversion,[this])}generateTickLabels(t){const e=this.options.ticks;let n,s,r;for(n=0,s=t.length;n<s;n++)r=t[n],r.label=(0,i.Q)(e.callback,[r.value,n,t],this)}afterTickToLabelConversion(){(0,i.Q)(this.options.afterTickToLabelConversion,[this])}beforeCalculateLabelRotation(){(0,i.Q)(this.options.beforeCalculateLabelRotation,[this])}calculateLabelRotation(){const t=this.options,e=t.ticks,n=zt(this.ticks.length,t.ticks.maxTicksLimit),s=e.minRotation||0,r=e.maxRotation;let o,a,c,l=s;if(!this._isVisible()||!e.display||s>=r||n<=1||!this.isHorizontal())return void(this.labelRotation=s);const h=this._getLabelSizes(),u=h.widest.width,d=h.highest.height,f=(0,i.S)(this.chart.width-u,0,this.maxWidth);o=t.offset?this.maxWidth/n:f/(n-1),u+6>o&&(o=f/(n-(t.offset?.5:1)),a=this.maxHeight-Ht(t.grid)-e.padding-qt(t.title,this.chart.options.font),c=Math.sqrt(u*u+d*d),l=(0,i.U)(Math.min(Math.asin((0,i.S)((h.highest.height+6)/o,-1,1)),Math.asin((0,i.S)(a/c,-1,1))-Math.asin((0,i.S)(d/c,-1,1)))),l=Math.max(s,Math.min(r,l))),this.labelRotation=l}afterCalculateLabelRotation(){(0,i.Q)(this.options.afterCalculateLabelRotation,[this])}afterAutoSkip(){}beforeFit(){(0,i.Q)(this.options.beforeFit,[this])}fit(){const t={width:0,height:0},{chart:e,options:{ticks:n,title:s,grid:r}}=this,o=this._isVisible(),a=this.isHorizontal();if(o){const o=qt(s,e.options.font);if(a?(t.width=this.maxWidth,t.height=Ht(r)+o):(t.height=this.maxHeight,t.width=Ht(r)+o),n.display&&this.ticks.length){const{first:e,last:s,widest:r,highest:o}=this._getLabelSizes(),c=2*n.padding,l=(0,i.t)(this.labelRotation),h=Math.cos(l),u=Math.sin(l);if(a){const e=n.mirror?0:u*r.width+h*o.height;t.height=Math.min(this.maxHeight,t.height+e+c)}else{const e=n.mirror?0:h*r.width+u*o.height;t.width=Math.min(this.maxWidth,t.width+e+c)}this._calculatePadding(e,s,u,h)}}this._handleMargins(),a?(this.width=this._length=e.width-this._margins.left-this._margins.right,this.height=t.height):(this.width=t.width,this.height=this._length=e.height-this._margins.top-this._margins.bottom)}_calculatePadding(t,e,n,i){const{ticks:{align:s,padding:r},position:o}=this.options,a=0!==this.labelRotation,c="top"!==o&&"x"===this.axis;if(this.isHorizontal()){const o=this.getPixelForTick(0)-this.left,l=this.right-this.getPixelForTick(this.ticks.length-1);let h=0,u=0;a?c?(h=i*t.width,u=n*e.height):(h=n*t.height,u=i*e.width):"start"===s?u=e.width:"end"===s?h=t.width:"inner"!==s&&(h=t.width/2,u=e.width/2),this.paddingLeft=Math.max((h-o+r)*this.width/(this.width-o),0),this.paddingRight=Math.max((u-l+r)*this.width/(this.width-l),0)}else{let n=e.height/2,i=t.height/2;"start"===s?(n=0,i=t.height):"end"===s&&(n=e.height,i=0),this.paddingTop=n+r,this.paddingBottom=i+r}}_handleMargins(){this._margins&&(this._margins.left=Math.max(this.paddingLeft,this._margins.left),this._margins.top=Math.max(this.paddingTop,this._margins.top),this._margins.right=Math.max(this.paddingRight,this._margins.right),this._margins.bottom=Math.max(this.paddingBottom,this._margins.bottom))}afterFit(){(0,i.Q)(this.options.afterFit,[this])}isHorizontal(){const{axis:t,position:e}=this.options;return"top"===e||"bottom"===e||"x"===t}isFullSize(){return this.options.fullSize}_convertTicksToLabels(t){let e,n;for(this.beforeTickToLabelConversion(),this.generateTickLabels(t),e=0,n=t.length;e<n;e++)(0,i.k)(t[e].label)&&(t.splice(e,1),n--,e--);this.afterTickToLabelConversion()}_getLabelSizes(){let t=this._labelSizes;if(!t){const e=this.options.ticks.sampleSize;let n=this.ticks;e<n.length&&(n=Bt(n,e)),this._labelSizes=t=this._computeLabelSizes(n,n.length,this.options.ticks.maxTicksLimit)}return t}_computeLabelSizes(t,e,n){const{ctx:s,_longestTextCache:r}=this,o=[],a=[],c=Math.floor(e/zt(e,n));let l,h,u,d,f,p,g,m,y,v,_,b=0,w=0;for(l=0;l<e;l+=c){if(d=t[l].label,f=this._resolveTickFontOptions(l),s.font=p=f.string,g=r[p]=r[p]||{data:{},gc:[]},m=f.lineHeight,y=v=0,(0,i.k)(d)||(0,i.b)(d)){if((0,i.b)(d))for(h=0,u=d.length;h<u;++h)_=d[h],(0,i.k)(_)||(0,i.b)(_)||(y=(0,i.V)(s,g.data,g.gc,y,_),v+=m)}else y=(0,i.V)(s,g.data,g.gc,y,d),v=m;o.push(y),a.push(v),b=Math.max(y,b),w=Math.max(v,w)}Wt(r,e);const T=o.indexOf(b),x=a.indexOf(w),E=t=>({width:o[t]||0,height:a[t]||0});return{first:E(0),last:E(e-1),widest:E(T),highest:E(x),widths:o,heights:a}}getLabelForValue(t){return t}getPixelForValue(t,e){return NaN}getValueForPixel(t){}getPixelForTick(t){const e=this.ticks;return t<0||t>e.length-1?null:this.getPixelForValue(e[t].value)}getPixelForDecimal(t){this._reversePixels&&(t=1-t);const e=this._startPixel+t*this._length;return(0,i.W)(this._alignToPixels?(0,i.X)(this.chart,e,0):e)}getDecimalForPixel(t){const e=(t-this._startPixel)/this._length;return this._reversePixels?1-e:e}getBasePixel(){return this.getPixelForValue(this.getBaseValue())}getBaseValue(){const{min:t,max:e}=this;return t<0&&e<0?e:t>0&&e>0?t:0}getContext(t){const e=this.ticks||[];if(t>=0&&t<e.length){const n=e[t];return n.$context||(n.$context=Gt(this.getContext(),t,n))}return this.$context||(this.$context=Kt(this.chart.getContext(),this))}_tickSize(){const t=this.options.ticks,e=(0,i.t)(this.labelRotation),n=Math.abs(Math.cos(e)),s=Math.abs(Math.sin(e)),r=this._getLabelSizes(),o=t.autoSkipPadding||0,a=r?r.widest.width+o:0,c=r?r.highest.height+o:0;return this.isHorizontal()?c*n>a*s?a/n:c/s:c*s<a*n?c/n:a/s}_isVisible(){const t=this.options.display;return"auto"!==t?!!t:this.getMatchingVisibleMetas().length>0}_computeGridLineItems(t){const e=this.axis,n=this.chart,s=this.options,{grid:r,position:o,border:a}=s,c=r.offset,l=this.isHorizontal(),h=this.ticks,u=h.length+(c?1:0),d=Ht(r),f=[],p=a.setContext(this.getContext()),g=p.display?p.width:0,m=g/2,y=function(t){return(0,i.X)(n,t,g)};let v,_,b,w,T,x,E,C,I,S,k,A;if("top"===o)v=y(this.bottom),x=this.bottom-d,C=v-m,S=y(t.top)+m,A=t.bottom;else if("bottom"===o)v=y(this.top),S=t.top,A=y(t.bottom)-m,x=v+m,C=this.top+d;else if("left"===o)v=y(this.right),T=this.right-d,E=v-m,I=y(t.left)+m,k=t.right;else if("right"===o)v=y(this.left),I=t.left,k=y(t.right)-m,T=v+m,E=this.left+d;else if("x"===e){if("center"===o)v=y((t.top+t.bottom)/2+.5);else if((0,i.i)(o)){const t=Object.keys(o)[0],e=o[t];v=y(this.chart.scales[t].getPixelForValue(e))}S=t.top,A=t.bottom,x=v+m,C=x+d}else if("y"===e){if("center"===o)v=y((t.left+t.right)/2);else if((0,i.i)(o)){const t=Object.keys(o)[0],e=o[t];v=y(this.chart.scales[t].getPixelForValue(e))}T=v-m,E=T-d,I=t.left,k=t.right}const O=(0,i.v)(s.ticks.maxTicksLimit,u),R=Math.max(1,Math.ceil(u/O));for(_=0;_<u;_+=R){const t=this.getContext(_),e=r.setContext(t),s=a.setContext(t),o=e.lineWidth,h=e.color,u=s.dash||[],d=s.dashOffset,p=e.tickWidth,g=e.tickColor,m=e.tickBorderDash||[],y=e.tickBorderDashOffset;b=$t(this,_,c),void 0!==b&&(w=(0,i.X)(n,b,o),l?T=E=I=k=w:x=C=S=A=w,f.push({tx1:T,ty1:x,tx2:E,ty2:C,x1:I,y1:S,x2:k,y2:A,width:o,color:h,borderDash:u,borderDashOffset:d,tickWidth:p,tickColor:g,tickBorderDash:m,tickBorderDashOffset:y}))}return this._ticksLength=u,this._borderValue=v,f}_computeLabelItems(t){const e=this.axis,n=this.options,{position:s,ticks:r}=n,o=this.isHorizontal(),a=this.ticks,{align:c,crossAlign:l,padding:h,mirror:u}=r,d=Ht(n.grid),f=d+h,p=u?-h:f,g=-(0,i.t)(this.labelRotation),m=[];let y,v,_,b,w,T,x,E,C,I,S,k,A="middle";if("top"===s)T=this.bottom-p,x=this._getXAxisLabelAlignment();else if("bottom"===s)T=this.top+p,x=this._getXAxisLabelAlignment();else if("left"===s){const t=this._getYAxisLabelAlignment(d);x=t.textAlign,w=t.x}else if("right"===s){const t=this._getYAxisLabelAlignment(d);x=t.textAlign,w=t.x}else if("x"===e){if("center"===s)T=(t.top+t.bottom)/2+f;else if((0,i.i)(s)){const t=Object.keys(s)[0],e=s[t];T=this.chart.scales[t].getPixelForValue(e)+f}x=this._getXAxisLabelAlignment()}else if("y"===e){if("center"===s)w=(t.left+t.right)/2-f;else if((0,i.i)(s)){const t=Object.keys(s)[0],e=s[t];w=this.chart.scales[t].getPixelForValue(e)}x=this._getYAxisLabelAlignment(d).textAlign}"y"===e&&("start"===c?A="top":"end"===c&&(A="bottom"));const O=this._getLabelSizes();for(y=0,v=a.length;y<v;++y){_=a[y],b=_.label;const t=r.setContext(this.getContext(y));E=this.getPixelForTick(y)+r.labelOffset,C=this._resolveTickFontOptions(y),I=C.lineHeight,S=(0,i.b)(b)?b.length:1;const e=S/2,n=t.color,c=t.textStrokeColor,h=t.textStrokeWidth;let d,f=x;if(o?(w=E,"inner"===x&&(f=y===v-1?this.options.reverse?"left":"right":0===y?this.options.reverse?"right":"left":"center"),k="top"===s?"near"===l||0!==g?-S*I+I/2:"center"===l?-O.highest.height/2-e*I+I:-O.highest.height+I/2:"near"===l||0!==g?I/2:"center"===l?O.highest.height/2-e*I:O.highest.height-S*I,u&&(k*=-1),0===g||t.showLabelBackdrop||(w+=I/2*Math.sin(g))):(T=E,k=(1-S)*I/2),t.showLabelBackdrop){const e=(0,i.E)(t.backdropPadding),n=O.heights[y],s=O.widths[y];let r=k-e.top,o=0-e.left;switch(A){case"middle":r-=n/2;break;case"bottom":r-=n;break}switch(x){case"center":o-=s/2;break;case"right":o-=s;break;case"inner":y===v-1?o-=s:y>0&&(o-=s/2);break}d={left:o,top:r,width:s+e.width,height:n+e.height,color:t.backdropColor}}m.push({label:b,font:C,textOffset:k,options:{rotation:g,color:n,strokeColor:c,strokeWidth:h,textAlign:f,textBaseline:A,translation:[w,T],backdrop:d}})}return m}_getXAxisLabelAlignment(){const{position:t,ticks:e}=this.options,n=-(0,i.t)(this.labelRotation);if(n)return"top"===t?"left":"right";let s="center";return"start"===e.align?s="left":"end"===e.align?s="right":"inner"===e.align&&(s="inner"),s}_getYAxisLabelAlignment(t){const{position:e,ticks:{crossAlign:n,mirror:i,padding:s}}=this.options,r=this._getLabelSizes(),o=t+s,a=r.widest.width;let c,l;return"left"===e?i?(l=this.right+s,"near"===n?c="left":"center"===n?(c="center",l+=a/2):(c="right",l+=a)):(l=this.right-o,"near"===n?c="right":"center"===n?(c="center",l-=a/2):(c="left",l=this.left)):"right"===e?i?(l=this.left+s,"near"===n?c="right":"center"===n?(c="center",l-=a/2):(c="left",l-=a)):(l=this.left+o,"near"===n?c="left":"center"===n?(c="center",l+=a/2):(c="right",l=this.right)):c="right",{textAlign:c,x:l}}_computeLabelArea(){if(this.options.ticks.mirror)return;const t=this.chart,e=this.options.position;return"left"===e||"right"===e?{top:0,left:this.left,bottom:t.height,right:this.right}:"top"===e||"bottom"===e?{top:this.top,left:0,bottom:this.bottom,right:t.width}:void 0}drawBackground(){const{ctx:t,options:{backgroundColor:e},left:n,top:i,width:s,height:r}=this;e&&(t.save(),t.fillStyle=e,t.fillRect(n,i,s,r),t.restore())}getLineWidthForValue(t){const e=this.options.grid;if(!this._isVisible()||!e.display)return 0;const n=this.ticks,i=n.findIndex((e=>e.value===t));if(i>=0){const t=e.setContext(this.getContext(i));return t.lineWidth}return 0}drawGrid(t){const e=this.options.grid,n=this.ctx,i=this._gridLineItems||(this._gridLineItems=this._computeGridLineItems(t));let s,r;const o=(t,e,i)=>{i.width&&i.color&&(n.save(),n.lineWidth=i.width,n.strokeStyle=i.color,n.setLineDash(i.borderDash||[]),n.lineDashOffset=i.borderDashOffset,n.beginPath(),n.moveTo(t.x,t.y),n.lineTo(e.x,e.y),n.stroke(),n.restore())};if(e.display)for(s=0,r=i.length;s<r;++s){const t=i[s];e.drawOnChartArea&&o({x:t.x1,y:t.y1},{x:t.x2,y:t.y2},t),e.drawTicks&&o({x:t.tx1,y:t.ty1},{x:t.tx2,y:t.ty2},{color:t.tickColor,width:t.tickWidth,borderDash:t.tickBorderDash,borderDashOffset:t.tickBorderDashOffset})}}drawBorder(){const{chart:t,ctx:e,options:{border:n,grid:s}}=this,r=n.setContext(this.getContext()),o=n.display?r.width:0;if(!o)return;const a=s.setContext(this.getContext(0)).lineWidth,c=this._borderValue;let l,h,u,d;this.isHorizontal()?(l=(0,i.X)(t,this.left,o)-o/2,h=(0,i.X)(t,this.right,a)+a/2,u=d=c):(u=(0,i.X)(t,this.top,o)-o/2,d=(0,i.X)(t,this.bottom,a)+a/2,l=h=c),e.save(),e.lineWidth=r.width,e.strokeStyle=r.color,e.beginPath(),e.moveTo(l,u),e.lineTo(h,d),e.stroke(),e.restore()}drawLabels(t){const e=this.options.ticks;if(!e.display)return;const n=this.ctx,s=this._computeLabelArea();s&&(0,i.Y)(n,s);const r=this.getLabelItems(t);for(const o of r){const t=o.options,e=o.font,s=o.label,r=o.textOffset;(0,i.Z)(n,s,0,r,e,t)}s&&(0,i.$)(n)}drawTitle(){const{ctx:t,options:{position:e,title:n,reverse:s}}=this;if(!n.display)return;const r=(0,i.a0)(n.font),o=(0,i.E)(n.padding),a=n.align;let c=r.lineHeight/2;"bottom"===e||"center"===e||(0,i.i)(e)?(c+=o.bottom,(0,i.b)(n.text)&&(c+=r.lineHeight*(n.text.length-1))):c+=o.top;const{titleX:l,titleY:h,maxWidth:u,rotation:d}=Qt(this,c,e,a);(0,i.Z)(t,n.text,0,0,r,{color:n.color,maxWidth:u,rotation:d,textAlign:Yt(a,e,s),textBaseline:"middle",translation:[l,h]})}draw(t){this._isVisible()&&(this.drawBackground(),this.drawGrid(t),this.drawBorder(),this.drawTitle(),this.drawLabels(t))}_layers(){const t=this.options,e=t.ticks&&t.ticks.z||0,n=(0,i.v)(t.grid&&t.grid.z,-1),s=(0,i.v)(t.border&&t.border.z,0);return this._isVisible()&&this.draw===Xt.prototype.draw?[{z:n,draw:t=>{this.drawBackground(),this.drawGrid(t),this.drawTitle()}},{z:s,draw:()=>{this.drawBorder()}},{z:e,draw:t=>{this.drawLabels(t)}}]:[{z:e,draw:t=>{this.draw(t)}}]}getMatchingVisibleMetas(t){const e=this.chart.getSortedVisibleDatasetMetas(),n=this.axis+"AxisID",i=[];let s,r;for(s=0,r=e.length;s<r;++s){const r=e[s];r[n]!==this.id||t&&r.type!==t||i.push(r)}return i}_resolveTickFontOptions(t){const e=this.options.ticks.setContext(this.getContext(t));return(0,i.a0)(e.font)}_maxDigits(){const t=this._resolveTickFontOptions(0).lineHeight;return(this.isHorizontal()?this.width:this.height)/t}}class Jt{constructor(t,e,n){this.type=t,this.scope=e,this.override=n,this.items=Object.create(null)}isForType(t){return Object.prototype.isPrototypeOf.call(this.type.prototype,t.prototype)}register(t){const e=Object.getPrototypeOf(t);let n;ee(e)&&(n=this.register(e));const s=this.items,r=t.id,o=this.scope+"."+r;if(!r)throw new Error("class does not have id: "+t);return r in s||(s[r]=t,Zt(t,o,n),this.override&&i.d.override(t.id,t.overrides)),o}get(t){return this.items[t]}unregister(t){const e=this.items,n=t.id,s=this.scope;n in e&&delete e[n],s&&n in i.d[s]&&(delete i.d[s][n],this.override&&delete i.a3[n])}}function Zt(t,e,n){const s=(0,i.a4)(Object.create(null),[n?i.d.get(n):{},i.d.get(e),t.defaults]);i.d.set(e,s),t.defaultRoutes&&te(e,t.defaultRoutes),t.descriptors&&i.d.describe(e,t.descriptors)}function te(t,e){Object.keys(e).forEach((n=>{const s=n.split("."),r=s.pop(),o=[t].concat(s).join("."),a=e[n].split("."),c=a.pop(),l=a.join(".");i.d.route(o,r,l,c)}))}function ee(t){return"id"in t&&"defaults"in t}class ne{constructor(){this.controllers=new Jt(R,"datasets",!0),this.elements=new Jt(Rt,"elements"),this.plugins=new Jt(Object,"plugins"),this.scales=new Jt(Xt,"scales"),this._typedRegistries=[this.controllers,this.scales,this.elements]}add(...t){this._each("register",t)}remove(...t){this._each("unregister",t)}addControllers(...t){this._each("register",t,this.controllers)}addElements(...t){this._each("register",t,this.elements)}addPlugins(...t){this._each("register",t,this.plugins)}addScales(...t){this._each("register",t,this.scales)}getController(t){return this._get(t,this.controllers,"controller")}getElement(t){return this._get(t,this.elements,"element")}getPlugin(t){return this._get(t,this.plugins,"plugin")}getScale(t){return this._get(t,this.scales,"scale")}removeControllers(...t){this._each("unregister",t,this.controllers)}removeElements(...t){this._each("unregister",t,this.elements)}removePlugins(...t){this._each("unregister",t,this.plugins)}removeScales(...t){this._each("unregister",t,this.scales)}_each(t,e,n){[...e].forEach((e=>{const s=n||this._getRegistryForType(e);n||s.isForType(e)||s===this.plugins&&e.id?this._exec(t,s,e):(0,i.F)(e,(e=>{const i=n||this._getRegistryForType(e);this._exec(t,i,e)}))}))}_exec(t,e,n){const s=(0,i.a5)(t);(0,i.Q)(n["before"+s],[],n),e[t](n),(0,i.Q)(n["after"+s],[],n)}_getRegistryForType(t){for(let e=0;e<this._typedRegistries.length;e++){const n=this._typedRegistries[e];if(n.isForType(t))return n}return this.plugins}_get(t,e,n){const i=e.get(t);if(void 0===i)throw new Error('"'+t+'" is not a registered '+n+".");return i}}var ie=new ne;class se{constructor(){this._init=[]}notify(t,e,n,i){"beforeInit"===e&&(this._init=this._createDescriptors(t,!0),this._notify(this._init,t,"install"));const s=i?this._descriptors(t).filter(i):this._descriptors(t),r=this._notify(s,t,e,n);return"afterDestroy"===e&&(this._notify(s,t,"stop"),this._notify(this._init,t,"uninstall")),r}_notify(t,e,n,s){s=s||{};for(const r of t){const t=r.plugin,o=t[n],a=[e,s,r.options];if(!1===(0,i.Q)(o,a,t)&&s.cancelable)return!1}return!0}invalidate(){(0,i.k)(this._cache)||(this._oldCache=this._cache,this._cache=void 0)}_descriptors(t){if(this._cache)return this._cache;const e=this._cache=this._createDescriptors(t);return this._notifyStateChanges(t),e}_createDescriptors(t,e){const n=t&&t.config,s=(0,i.v)(n.options&&n.options.plugins,{}),r=re(n);return!1!==s||e?ae(t,r,s,e):[]}_notifyStateChanges(t){const e=this._oldCache||[],n=this._cache,i=(t,e)=>t.filter((t=>!e.some((e=>t.plugin.id===e.plugin.id))));this._notify(i(e,n),t,"stop"),this._notify(i(n,e),t,"start")}}function re(t){const e={},n=[],i=Object.keys(ie.plugins.items);for(let r=0;r<i.length;r++)n.push(ie.getPlugin(i[r]));const s=t.plugins||[];for(let r=0;r<s.length;r++){const t=s[r];-1===n.indexOf(t)&&(n.push(t),e[t.id]=!0)}return{plugins:n,localIds:e}}function oe(t,e){return e||!1!==t?!0===t?{}:t:null}function ae(t,{plugins:e,localIds:n},i,s){const r=[],o=t.getContext();for(const a of e){const e=a.id,c=oe(i[e],s);null!==c&&r.push({plugin:a,options:ce(t.config,{plugin:a,local:n[e]},c,o)})}return r}function ce(t,{plugin:e,local:n},i,s){const r=t.pluginScopeKeys(e),o=t.getOptionScopes(i,r);return n&&e.defaults&&o.push(e.defaults),t.createResolver(o,s,[""],{scriptable:!1,indexable:!1,allKeys:!0})}function le(t,e){const n=i.d.datasets[t]||{},s=(e.datasets||{})[t]||{};return s.indexAxis||e.indexAxis||n.indexAxis||"x"}function he(t,e){let n=t;return"_index_"===t?n=e:"_value_"===t&&(n="x"===e?"y":"x"),n}function ue(t,e){return t===e?"_index_":"_value_"}function de(t){if("x"===t||"y"===t||"r"===t)return t}function fe(t){return"top"===t||"bottom"===t?"x":"left"===t||"right"===t?"y":void 0}function pe(t,...e){if(de(t))return t;for(const n of e){const e=n.axis||fe(n.position)||t.length>1&&de(t[0].toLowerCase());if(e)return e}throw new Error(`Cannot determine type of '${t}' axis. Please provide 'axis' or 'position' option.`)}function ge(t,e,n){if(n[e+"AxisID"]===t)return{axis:e}}function me(t,e){if(e.data&&e.data.datasets){const n=e.data.datasets.filter((e=>e.xAxisID===t||e.yAxisID===t));if(n.length)return ge(t,"x",n[0])||ge(t,"y",n[0])}return{}}function ye(t,e){const n=i.a3[t.type]||{scales:{}},s=e.scales||{},r=le(t.type,e),o=Object.create(null);return Object.keys(s).forEach((e=>{const a=s[e];if(!(0,i.i)(a))return console.error(`Invalid scale configuration for scale: ${e}`);if(a._proxy)return console.warn(`Ignoring resolver passed as options for scale: ${e}`);const c=pe(e,a,me(e,t),i.d.scales[a.type]),l=ue(c,r),h=n.scales||{};o[e]=(0,i.ab)(Object.create(null),[{axis:c},a,h[c],h[l]])})),t.data.datasets.forEach((n=>{const r=n.type||t.type,a=n.indexAxis||le(r,e),c=i.a3[r]||{},l=c.scales||{};Object.keys(l).forEach((t=>{const e=he(t,a),r=n[e+"AxisID"]||e;o[r]=o[r]||Object.create(null),(0,i.ab)(o[r],[{axis:e},s[r],l[t]])}))})),Object.keys(o).forEach((t=>{const e=o[t];(0,i.ab)(e,[i.d.scales[e.type],i.d.scale])})),o}function ve(t){const e=t.options||(t.options={});e.plugins=(0,i.v)(e.plugins,{}),e.scales=ye(t,e)}function _e(t){return t=t||{},t.datasets=t.datasets||[],t.labels=t.labels||[],t}function be(t){return t=t||{},t.data=_e(t.data),ve(t),t}const we=new Map,Te=new Set;function xe(t,e){let n=we.get(t);return n||(n=e(),we.set(t,n),Te.add(n)),n}const Ee=(t,e,n)=>{const s=(0,i.f)(e,n);void 0!==s&&t.add(s)};class Ce{constructor(t){this._config=be(t),this._scopeCache=new Map,this._resolverCache=new Map}get platform(){return this._config.platform}get type(){return this._config.type}set type(t){this._config.type=t}get data(){return this._config.data}set data(t){this._config.data=_e(t)}get options(){return this._config.options}set options(t){this._config.options=t}get plugins(){return this._config.plugins}update(){const t=this._config;this.clearCache(),ve(t)}clearCache(){this._scopeCache.clear(),this._resolverCache.clear()}datasetScopeKeys(t){return xe(t,(()=>[[`datasets.${t}`,""]]))}datasetAnimationScopeKeys(t,e){return xe(`${t}.transition.${e}`,(()=>[[`datasets.${t}.transitions.${e}`,`transitions.${e}`],[`datasets.${t}`,""]]))}datasetElementScopeKeys(t,e){return xe(`${t}-${e}`,(()=>[[`datasets.${t}.elements.${e}`,`datasets.${t}`,`elements.${e}`,""]]))}pluginScopeKeys(t){const e=t.id,n=this.type;return xe(`${n}-plugin-${e}`,(()=>[[`plugins.${e}`,...t.additionalOptionScopes||[]]]))}_cachedScopes(t,e){const n=this._scopeCache;let i=n.get(t);return i&&!e||(i=new Map,n.set(t,i)),i}getOptionScopes(t,e,n){const{options:s,type:r}=this,o=this._cachedScopes(t,n),a=o.get(e);if(a)return a;const c=new Set;e.forEach((e=>{t&&(c.add(t),e.forEach((e=>Ee(c,t,e)))),e.forEach((t=>Ee(c,s,t))),e.forEach((t=>Ee(c,i.a3[r]||{},t))),e.forEach((t=>Ee(c,i.d,t))),e.forEach((t=>Ee(c,i.a6,t)))}));const l=Array.from(c);return 0===l.length&&l.push(Object.create(null)),Te.has(e)&&o.set(e,l),l}chartOptionScopes(){const{options:t,type:e}=this;return[t,i.a3[e]||{},i.d.datasets[e]||{},{type:e},i.d,i.a6]}resolveNamedOptions(t,e,n,s=[""]){const r={$shared:!0},{resolver:o,subPrefixes:a}=Ie(this._resolverCache,t,s);let c=o;if(ke(o,e)){r.$shared=!1,n=(0,i.a7)(n)?n():n;const e=this.createResolver(t,n,a);c=(0,i.a8)(o,n,e)}for(const i of e)r[i]=c[i];return r}createResolver(t,e,n=[""],s){const{resolver:r}=Ie(this._resolverCache,t,n);return(0,i.i)(e)?(0,i.a8)(r,e,void 0,s):r}}function Ie(t,e,n){let s=t.get(e);s||(s=new Map,t.set(e,s));const r=n.join();let o=s.get(r);if(!o){const t=(0,i.a9)(e,n);o={resolver:t,subPrefixes:n.filter((t=>!t.toLowerCase().includes("hover")))},s.set(r,o)}return o}const Se=t=>(0,i.i)(t)&&Object.getOwnPropertyNames(t).some((e=>(0,i.a7)(t[e])));function ke(t,e){const{isScriptable:n,isIndexable:s}=(0,i.aa)(t);for(const r of e){const e=n(r),o=s(r),a=(o||e)&&t[r];if(e&&((0,i.a7)(a)||Se(a))||o&&(0,i.b)(a))return!0}return!1}var Ae="4.4.5";const Oe=["top","bottom","left","right","chartArea"];function Re(t,e){return"top"===t||"bottom"===t||-1===Oe.indexOf(t)&&"x"===e}function Pe(t,e){return function(n,i){return n[t]===i[t]?n[e]-i[e]:n[t]-i[t]}}function Ne(t){const e=t.chart,n=e.options.animation;e.notifyPlugins("afterRender"),(0,i.Q)(n&&n.onComplete,[t],e)}function De(t){const e=t.chart,n=e.options.animation;(0,i.Q)(n&&n.onProgress,[t],e)}function Me(t){return(0,i.M)()&&"string"===typeof t?t=document.getElementById(t):t&&t.length&&(t=t[0]),t&&t.canvas&&(t=t.canvas),t}const Le={},Fe=t=>{const e=Me(t);return Object.values(Le).filter((t=>t.canvas===e)).pop()};function Ue(t,e,n){const i=Object.keys(t);for(const s of i){const i=+s;if(i>=e){const r=t[s];delete t[s],(n>0||i>e)&&(t[i+n]=r)}}}function Ve(t,e,n,i){return n&&"mouseout"!==t.type?i?e:t:null}function je(t,e,n){return t.options.clip?t[n]:e[n]}function ze(t,e){const{xScale:n,yScale:i}=t;return n&&i?{left:je(n,e,"left"),right:je(n,e,"right"),top:je(i,e,"top"),bottom:je(i,e,"bottom")}:e}class Be{static defaults=i.d;static instances=Le;static overrides=i.a3;static registry=ie;static version=Ae;static getChart=Fe;static register(...t){ie.add(...t),$e()}static unregister(...t){ie.remove(...t),$e()}constructor(t,e){const n=this.config=new Ce(e),s=Me(t),o=Fe(s);if(o)throw new Error("Canvas is already in use. Chart with ID '"+o.id+"' must be destroyed before the canvas with ID '"+o.canvas.id+"' can be reused.");const a=n.createResolver(n.chartOptionScopes(),this.getContext());this.platform=new(n.platform||Ot(s)),this.platform.updateConfig(n);const c=this.platform.acquireContext(s,a.aspectRatio),l=c&&c.canvas,h=l&&l.height,u=l&&l.width;this.id=(0,i.ac)(),this.ctx=c,this.canvas=l,this.width=u,this.height=h,this._options=a,this._aspectRatio=this.aspectRatio,this._layers=[],this._metasets=[],this._stacks=void 0,this.boxes=[],this.currentDevicePixelRatio=void 0,this.chartArea=void 0,this._active=[],this._lastEvent=void 0,this._listeners={},this._responsiveListeners=void 0,this._sortedMetasets=[],this.scales={},this._plugins=new se,this.$proxies={},this._hiddenIndices={},this.attached=!1,this._animationsDisabled=void 0,this.$context=void 0,this._doResize=(0,i.ad)((t=>this.update(t)),a.resizeDelay||0),this._dataChanges=[],Le[this.id]=this,c&&l?(r.listen(this,"complete",Ne),r.listen(this,"progress",De),this._initialize(),this.attached&&this.update()):console.error("Failed to create chart: can't acquire context from the given item")}get aspectRatio(){const{options:{aspectRatio:t,maintainAspectRatio:e},width:n,height:s,_aspectRatio:r}=this;return(0,i.k)(t)?e&&r?r:s?n/s:null:t}get data(){return this.config.data}set data(t){this.config.data=t}get options(){return this._options}set options(t){this.config.options=t}get registry(){return ie}_initialize(){return this.notifyPlugins("beforeInit"),this.options.responsive?this.resize():(0,i.ae)(this,this.options.devicePixelRatio),this.bindEvents(),this.notifyPlugins("afterInit"),this}clear(){return(0,i.af)(this.canvas,this.ctx),this}stop(){return r.stop(this),this}resize(t,e){r.running(this)?this._resizeBeforeDraw={width:t,height:e}:this._resize(t,e)}_resize(t,e){const n=this.options,s=this.canvas,r=n.maintainAspectRatio&&this.aspectRatio,o=this.platform.getMaximumSize(s,t,e,r),a=n.devicePixelRatio||this.platform.getDevicePixelRatio(),c=this.width?"resize":"attach";this.width=o.width,this.height=o.height,this._aspectRatio=this.aspectRatio,(0,i.ae)(this,a,!0)&&(this.notifyPlugins("resize",{size:o}),(0,i.Q)(n.onResize,[this,o],this),this.attached&&this._doResize(c)&&this.render())}ensureScalesHaveIDs(){const t=this.options,e=t.scales||{};(0,i.F)(e,((t,e)=>{t.id=e}))}buildOrUpdateScales(){const t=this.options,e=t.scales,n=this.scales,s=Object.keys(n).reduce(((t,e)=>(t[e]=!1,t)),{});let r=[];e&&(r=r.concat(Object.keys(e).map((t=>{const n=e[t],i=pe(t,n),s="r"===i,r="x"===i;return{options:n,dposition:s?"chartArea":r?"bottom":"left",dtype:s?"radialLinear":r?"category":"linear"}})))),(0,i.F)(r,(e=>{const r=e.options,o=r.id,a=pe(o,r),c=(0,i.v)(r.type,e.dtype);void 0!==r.position&&Re(r.position,a)===Re(e.dposition)||(r.position=e.dposition),s[o]=!0;let l=null;if(o in n&&n[o].type===c)l=n[o];else{const t=ie.getScale(c);l=new t({id:o,type:c,ctx:this.ctx,chart:this}),n[l.id]=l}l.init(r,t)})),(0,i.F)(s,((t,e)=>{t||delete n[e]})),(0,i.F)(n,(t=>{at.configure(this,t,t.options),at.addBox(this,t)}))}_updateMetasets(){const t=this._metasets,e=this.data.datasets.length,n=t.length;if(t.sort(((t,e)=>t.index-e.index)),n>e){for(let t=e;t<n;++t)this._destroyDatasetMeta(t);t.splice(e,n-e)}this._sortedMetasets=t.slice(0).sort(Pe("order","index"))}_removeUnreferencedMetasets(){const{_metasets:t,data:{datasets:e}}=this;t.length>e.length&&delete this._stacks,t.forEach(((t,n)=>{0===e.filter((e=>e===t._dataset)).length&&this._destroyDatasetMeta(n)}))}buildOrUpdateControllers(){const t=[],e=this.data.datasets;let n,s;for(this._removeUnreferencedMetasets(),n=0,s=e.length;n<s;n++){const s=e[n];let r=this.getDatasetMeta(n);const o=s.type||this.config.type;if(r.type&&r.type!==o&&(this._destroyDatasetMeta(n),r=this.getDatasetMeta(n)),r.type=o,r.indexAxis=s.indexAxis||le(o,this.options),r.order=s.order||0,r.index=n,r.label=""+s.label,r.visible=this.isDatasetVisible(n),r.controller)r.controller.updateIndex(n),r.controller.linkScales();else{const e=ie.getController(o),{datasetElementType:s,dataElementType:a}=i.d.datasets[o];Object.assign(e,{dataElementType:ie.getElement(a),datasetElementType:s&&ie.getElement(s)}),r.controller=new e(this,n),t.push(r.controller)}}return this._updateMetasets(),t}_resetElements(){(0,i.F)(this.data.datasets,((t,e)=>{this.getDatasetMeta(e).controller.reset()}),this)}reset(){this._resetElements(),this.notifyPlugins("reset")}update(t){const e=this.config;e.update();const n=this._options=e.createResolver(e.chartOptionScopes(),this.getContext()),s=this._animationsDisabled=!n.animation;if(this._updateScales(),this._checkEventBindings(),this._updateHiddenIndices(),this._plugins.invalidate(),!1===this.notifyPlugins("beforeUpdate",{mode:t,cancelable:!0}))return;const r=this.buildOrUpdateControllers();this.notifyPlugins("beforeElementsUpdate");let o=0;for(let i=0,l=this.data.datasets.length;i<l;i++){const{controller:t}=this.getDatasetMeta(i),e=!s&&-1===r.indexOf(t);t.buildOrUpdateElements(e),o=Math.max(+t.getMaxOverflow(),o)}o=this._minPadding=n.layout.autoPadding?o:0,this._updateLayout(o),s||(0,i.F)(r,(t=>{t.reset()})),this._updateDatasets(t),this.notifyPlugins("afterUpdate",{mode:t}),this._layers.sort(Pe("z","_idx"));const{_active:a,_lastEvent:c}=this;c?this._eventHandler(c,!0):a.length&&this._updateHoverStyles(a,a,!0),this.render()}_updateScales(){(0,i.F)(this.scales,(t=>{at.removeBox(this,t)})),this.ensureScalesHaveIDs(),this.buildOrUpdateScales()}_checkEventBindings(){const t=this.options,e=new Set(Object.keys(this._listeners)),n=new Set(t.events);(0,i.ag)(e,n)&&!!this._responsiveListeners===t.responsive||(this.unbindEvents(),this.bindEvents())}_updateHiddenIndices(){const{_hiddenIndices:t}=this,e=this._getUniformDataChanges()||[];for(const{method:n,start:i,count:s}of e){const e="_removeElements"===n?-s:s;Ue(t,i,e)}}_getUniformDataChanges(){const t=this._dataChanges;if(!t||!t.length)return;this._dataChanges=[];const e=this.data.datasets.length,n=e=>new Set(t.filter((t=>t[0]===e)).map(((t,e)=>e+","+t.splice(1).join(",")))),s=n(0);for(let r=1;r<e;r++)if(!(0,i.ag)(s,n(r)))return;return Array.from(s).map((t=>t.split(","))).map((t=>({method:t[1],start:+t[2],count:+t[3]})))}_updateLayout(t){if(!1===this.notifyPlugins("beforeLayout",{cancelable:!0}))return;at.update(this,this.width,this.height,t);const e=this.chartArea,n=e.width<=0||e.height<=0;this._layers=[],(0,i.F)(this.boxes,(t=>{n&&"chartArea"===t.position||(t.configure&&t.configure(),this._layers.push(...t._layers()))}),this),this._layers.forEach(((t,e)=>{t._idx=e})),this.notifyPlugins("afterLayout")}_updateDatasets(t){if(!1!==this.notifyPlugins("beforeDatasetsUpdate",{mode:t,cancelable:!0})){for(let t=0,e=this.data.datasets.length;t<e;++t)this.getDatasetMeta(t).controller.configure();for(let e=0,n=this.data.datasets.length;e<n;++e)this._updateDataset(e,(0,i.a7)(t)?t({datasetIndex:e}):t);this.notifyPlugins("afterDatasetsUpdate",{mode:t})}}_updateDataset(t,e){const n=this.getDatasetMeta(t),i={meta:n,index:t,mode:e,cancelable:!0};!1!==this.notifyPlugins("beforeDatasetUpdate",i)&&(n.controller._update(e),i.cancelable=!1,this.notifyPlugins("afterDatasetUpdate",i))}render(){!1!==this.notifyPlugins("beforeRender",{cancelable:!0})&&(r.has(this)?this.attached&&!r.running(this)&&r.start(this):(this.draw(),Ne({chart:this})))}draw(){let t;if(this._resizeBeforeDraw){const{width:t,height:e}=this._resizeBeforeDraw;this._resizeBeforeDraw=null,this._resize(t,e)}if(this.clear(),this.width<=0||this.height<=0)return;if(!1===this.notifyPlugins("beforeDraw",{cancelable:!0}))return;const e=this._layers;for(t=0;t<e.length&&e[t].z<=0;++t)e[t].draw(this.chartArea);for(this._drawDatasets();t<e.length;++t)e[t].draw(this.chartArea);this.notifyPlugins("afterDraw")}_getSortedDatasetMetas(t){const e=this._sortedMetasets,n=[];let i,s;for(i=0,s=e.length;i<s;++i){const s=e[i];t&&!s.visible||n.push(s)}return n}getSortedVisibleDatasetMetas(){return this._getSortedDatasetMetas(!0)}_drawDatasets(){if(!1===this.notifyPlugins("beforeDatasetsDraw",{cancelable:!0}))return;const t=this.getSortedVisibleDatasetMetas();for(let e=t.length-1;e>=0;--e)this._drawDataset(t[e]);this.notifyPlugins("afterDatasetsDraw")}_drawDataset(t){const e=this.ctx,n=t._clip,s=!n.disabled,r=ze(t,this.chartArea),o={meta:t,index:t.index,cancelable:!0};!1!==this.notifyPlugins("beforeDatasetDraw",o)&&(s&&(0,i.Y)(e,{left:!1===n.left?0:r.left-n.left,right:!1===n.right?this.width:r.right+n.right,top:!1===n.top?0:r.top-n.top,bottom:!1===n.bottom?this.height:r.bottom+n.bottom}),t.controller.draw(),s&&(0,i.$)(e),o.cancelable=!1,this.notifyPlugins("afterDatasetDraw",o))}isPointInArea(t){return(0,i.C)(t,this.chartArea,this._minPadding)}getElementsAtEventForMode(t,e,n,i){const s=W.modes[e];return"function"===typeof s?s(this,t,n,i):[]}getDatasetMeta(t){const e=this.data.datasets[t],n=this._metasets;let i=n.filter((t=>t&&t._dataset===e)).pop();return i||(i={type:null,data:[],dataset:null,controller:null,hidden:null,xAxisID:null,yAxisID:null,order:e&&e.order||0,index:t,_dataset:e,_parsed:[],_sorted:!1},n.push(i)),i}getContext(){return this.$context||(this.$context=(0,i.j)(null,{chart:this,type:"chart"}))}getVisibleDatasetCount(){return this.getSortedVisibleDatasetMetas().length}isDatasetVisible(t){const e=this.data.datasets[t];if(!e)return!1;const n=this.getDatasetMeta(t);return"boolean"===typeof n.hidden?!n.hidden:!e.hidden}setDatasetVisibility(t,e){const n=this.getDatasetMeta(t);n.hidden=!e}toggleDataVisibility(t){this._hiddenIndices[t]=!this._hiddenIndices[t]}getDataVisibility(t){return!this._hiddenIndices[t]}_updateVisibility(t,e,n){const s=n?"show":"hide",r=this.getDatasetMeta(t),o=r.controller._resolveAnimations(void 0,s);(0,i.h)(e)?(r.data[e].hidden=!n,this.update()):(this.setDatasetVisibility(t,n),o.update(r,{visible:n}),this.update((e=>e.datasetIndex===t?s:void 0)))}hide(t,e){this._updateVisibility(t,e,!1)}show(t,e){this._updateVisibility(t,e,!0)}_destroyDatasetMeta(t){const e=this._metasets[t];e&&e.controller&&e.controller._destroy(),delete this._metasets[t]}_stop(){let t,e;for(this.stop(),r.remove(this),t=0,e=this.data.datasets.length;t<e;++t)this._destroyDatasetMeta(t)}destroy(){this.notifyPlugins("beforeDestroy");const{canvas:t,ctx:e}=this;this._stop(),this.config.clearCache(),t&&(this.unbindEvents(),(0,i.af)(t,e),this.platform.releaseContext(e),this.canvas=null,this.ctx=null),delete Le[this.id],this.notifyPlugins("afterDestroy")}toBase64Image(...t){return this.canvas.toDataURL(...t)}bindEvents(){this.bindUserEvents(),this.options.responsive?this.bindResponsiveEvents():this.attached=!0}bindUserEvents(){const t=this._listeners,e=this.platform,n=(n,i)=>{e.addEventListener(this,n,i),t[n]=i},s=(t,e,n)=>{t.offsetX=e,t.offsetY=n,this._eventHandler(t)};(0,i.F)(this.options.events,(t=>n(t,s)))}bindResponsiveEvents(){this._responsiveListeners||(this._responsiveListeners={});const t=this._responsiveListeners,e=this.platform,n=(n,i)=>{e.addEventListener(this,n,i),t[n]=i},i=(n,i)=>{t[n]&&(e.removeEventListener(this,n,i),delete t[n])},s=(t,e)=>{this.canvas&&this.resize(t,e)};let r;const o=()=>{i("attach",o),this.attached=!0,this.resize(),n("resize",s),n("detach",r)};r=()=>{this.attached=!1,i("resize",s),this._stop(),this._resize(0,0),n("attach",o)},e.isAttached(this.canvas)?o():r()}unbindEvents(){(0,i.F)(this._listeners,((t,e)=>{this.platform.removeEventListener(this,e,t)})),this._listeners={},(0,i.F)(this._responsiveListeners,((t,e)=>{this.platform.removeEventListener(this,e,t)})),this._responsiveListeners=void 0}updateHoverStyle(t,e,n){const i=n?"set":"remove";let s,r,o,a;for("dataset"===e&&(s=this.getDatasetMeta(t[0].datasetIndex),s.controller["_"+i+"DatasetHoverStyle"]()),o=0,a=t.length;o<a;++o){r=t[o];const e=r&&this.getDatasetMeta(r.datasetIndex).controller;e&&e[i+"HoverStyle"](r.element,r.datasetIndex,r.index)}}getActiveElements(){return this._active||[]}setActiveElements(t){const e=this._active||[],n=t.map((({datasetIndex:t,index:e})=>{const n=this.getDatasetMeta(t);if(!n)throw new Error("No dataset found at index "+t);return{datasetIndex:t,element:n.data[e],index:e}})),s=!(0,i.ah)(n,e);s&&(this._active=n,this._lastEvent=null,this._updateHoverStyles(n,e))}notifyPlugins(t,e,n){return this._plugins.notify(this,t,e,n)}isPluginEnabled(t){return 1===this._plugins._cache.filter((e=>e.plugin.id===t)).length}_updateHoverStyles(t,e,n){const i=this.options.hover,s=(t,e)=>t.filter((t=>!e.some((e=>t.datasetIndex===e.datasetIndex&&t.index===e.index)))),r=s(e,t),o=n?t:s(t,e);r.length&&this.updateHoverStyle(r,i.mode,!1),o.length&&i.mode&&this.updateHoverStyle(o,i.mode,!0)}_eventHandler(t,e){const n={event:t,replay:e,cancelable:!0,inChartArea:this.isPointInArea(t)},i=e=>(e.options.events||this.options.events).includes(t.native.type);if(!1===this.notifyPlugins("beforeEvent",n,i))return;const s=this._handleEvent(t,e,n.inChartArea);return n.cancelable=!1,this.notifyPlugins("afterEvent",n,i),(s||n.changed)&&this.render(),this}_handleEvent(t,e,n){const{_active:s=[],options:r}=this,o=e,a=this._getActiveElements(t,s,n,o),c=(0,i.ai)(t),l=Ve(t,this._lastEvent,n,c);n&&(this._lastEvent=null,(0,i.Q)(r.onHover,[t,a,this],this),c&&(0,i.Q)(r.onClick,[t,a,this],this));const h=!(0,i.ah)(a,s);return(h||e)&&(this._active=a,this._updateHoverStyles(a,s,e)),this._lastEvent=l,h}_getActiveElements(t,e,n,i){if("mouseout"===t.type)return[];if(!n)return e;const s=this.options.hover;return this.getElementsAtEventForMode(t,s.mode,s,i)}}function $e(){return(0,i.F)(Be.instances,(t=>t._plugins.invalidate()))}function We(t,e,n=e){t.lineCap=(0,i.v)(n.borderCapStyle,e.borderCapStyle),t.setLineDash((0,i.v)(n.borderDash,e.borderDash)),t.lineDashOffset=(0,i.v)(n.borderDashOffset,e.borderDashOffset),t.lineJoin=(0,i.v)(n.borderJoinStyle,e.borderJoinStyle),t.lineWidth=(0,i.v)(n.borderWidth,e.borderWidth),t.strokeStyle=(0,i.v)(n.borderColor,e.borderColor)}function He(t,e,n){t.lineTo(n.x,n.y)}function qe(t){return t.stepped?i.ar:t.tension||"monotone"===t.cubicInterpolationMode?i.as:He}function Ke(t,e,n={}){const i=t.length,{start:s=0,end:r=i-1}=n,{start:o,end:a}=e,c=Math.max(s,o),l=Math.min(r,a),h=s<o&&r<o||s>a&&r>a;return{count:i,start:c,loop:e.loop,ilen:l<c&&!h?i+l-c:l-c}}function Ge(t,e,n,i){const{points:s,options:r}=e,{count:o,start:a,loop:c,ilen:l}=Ke(s,n,i),h=qe(r);let u,d,f,{move:p=!0,reverse:g}=i||{};for(u=0;u<=l;++u)d=s[(a+(g?l-u:u))%o],d.skip||(p?(t.moveTo(d.x,d.y),p=!1):h(t,f,d,g,r.stepped),f=d);return c&&(d=s[(a+(g?l:0))%o],h(t,f,d,g,r.stepped)),!!c}function Ye(t,e,n,i){const s=e.points,{count:r,start:o,ilen:a}=Ke(s,n,i),{move:c=!0,reverse:l}=i||{};let h,u,d,f,p,g,m=0,y=0;const v=t=>(o+(l?a-t:t))%r,_=()=>{f!==p&&(t.lineTo(m,p),t.lineTo(m,f),t.lineTo(m,g))};for(c&&(u=s[v(0)],t.moveTo(u.x,u.y)),h=0;h<=a;++h){if(u=s[v(h)],u.skip)continue;const e=u.x,n=u.y,i=0|e;i===d?(n<f?f=n:n>p&&(p=n),m=(y*m+e)/++y):(_(),t.lineTo(e,n),d=i,y=0,f=p=n),g=n}_()}function Qe(t){const e=t.options,n=e.borderDash&&e.borderDash.length,i=!t._decimated&&!t._loop&&!e.tension&&"monotone"!==e.cubicInterpolationMode&&!e.stepped&&!n;return i?Ye:Ge}function Xe(t){return t.stepped?i.ao:t.tension||"monotone"===t.cubicInterpolationMode?i.ap:i.aq}function Je(t,e,n,i){let s=e._path;s||(s=e._path=new Path2D,e.path(s,n,i)&&s.closePath()),We(t,e.options),t.stroke(s)}function Ze(t,e,n,i){const{segments:s,options:r}=e,o=Qe(e);for(const a of s)We(t,r,a.style),t.beginPath(),o(t,e,a,{start:n,end:n+i-1})&&t.closePath(),t.stroke()}const tn="function"===typeof Path2D;function en(t,e,n,i){tn&&!e.options.segment?Je(t,e,n,i):Ze(t,e,n,i)}class nn extends Rt{static id="line";static defaults={borderCapStyle:"butt",borderDash:[],borderDashOffset:0,borderJoinStyle:"miter",borderWidth:3,capBezierPoints:!0,cubicInterpolationMode:"default",fill:!1,spanGaps:!1,stepped:!1,tension:0};static defaultRoutes={backgroundColor:"backgroundColor",borderColor:"borderColor"};static descriptors={_scriptable:!0,_indexable:t=>"borderDash"!==t&&"fill"!==t};constructor(t){super(),this.animated=!0,this.options=void 0,this._chart=void 0,this._loop=void 0,this._fullLoop=void 0,this._path=void 0,this._points=void 0,this._segments=void 0,this._decimated=!1,this._pointsUpdated=!1,this._datasetIndex=void 0,t&&Object.assign(this,t)}updateControlPoints(t,e){const n=this.options;if((n.tension||"monotone"===n.cubicInterpolationMode)&&!n.stepped&&!this._pointsUpdated){const s=n.spanGaps?this._loop:this._fullLoop;(0,i.al)(this._points,n,t,s,e),this._pointsUpdated=!0}}set points(t){this._points=t,delete this._segments,delete this._path,this._pointsUpdated=!1}get points(){return this._points}get segments(){return this._segments||(this._segments=(0,i.am)(this,this.options.segment))}first(){const t=this.segments,e=this.points;return t.length&&e[t[0].start]}last(){const t=this.segments,e=this.points,n=t.length;return n&&e[t[n-1].end]}interpolate(t,e){const n=this.options,s=t[e],r=this.points,o=(0,i.an)(this,{property:e,start:s,end:s});if(!o.length)return;const a=[],c=Xe(n);let l,h;for(l=0,h=o.length;l<h;++l){const{start:i,end:h}=o[l],u=r[i],d=r[h];if(u===d){a.push(u);continue}const f=Math.abs((s-u[e])/(d[e]-u[e])),p=c(u,d,f,n.stepped);p[e]=t[e],a.push(p)}return 1===a.length?a[0]:a}pathSegment(t,e,n){const i=Qe(this);return i(t,this,e,n)}path(t,e,n){const i=this.segments,s=Qe(this);let r=this._loop;e=e||0,n=n||this.points.length-e;for(const o of i)r&=s(t,this,o,{start:e,end:e+n-1});return!!r}draw(t,e,n,i){const s=this.options||{},r=this.points||[];r.length&&s.borderWidth&&(t.save(),en(t,this,n,i),t.restore()),this.animated&&(this._pointsUpdated=!1,this._path=void 0)}}function sn(t,e,n,i){const s=t.options,{[n]:r}=t.getProps([n],i);return Math.abs(e-r)<s.radius+s.hitRadius}class rn extends Rt{static id="point";parsed;skip;stop;static defaults={borderWidth:1,hitRadius:1,hoverBorderWidth:1,hoverRadius:4,pointStyle:"circle",radius:3,rotation:0};static defaultRoutes={backgroundColor:"backgroundColor",borderColor:"borderColor"};constructor(t){super(),this.options=void 0,this.parsed=void 0,this.skip=void 0,this.stop=void 0,t&&Object.assign(this,t)}inRange(t,e,n){const i=this.options,{x:s,y:r}=this.getProps(["x","y"],n);return Math.pow(t-s,2)+Math.pow(e-r,2)<Math.pow(i.hitRadius+i.radius,2)}inXRange(t,e){return sn(this,t,"x",e)}inYRange(t,e){return sn(this,t,"y",e)}getCenterPoint(t){const{x:e,y:n}=this.getProps(["x","y"],t);return{x:e,y:n}}size(t){t=t||this.options||{};let e=t.radius||0;e=Math.max(e,e&&t.hoverRadius||0);const n=e&&t.borderWidth||0;return 2*(e+n)}draw(t,e){const n=this.options;this.skip||n.radius<.1||!(0,i.C)(this,e,this.size(n)/2)||(t.strokeStyle=n.borderColor,t.lineWidth=n.borderWidth,t.fillStyle=n.backgroundColor,(0,i.at)(t,n,this.x,this.y))}getRange(){const t=this.options||{};return t.radius+t.hitRadius}}const on=(t,e)=>{let{boxHeight:n=e,boxWidth:i=e}=t;return t.usePointStyle&&(n=Math.min(n,e),i=t.pointStyleWidth||Math.min(i,e)),{boxWidth:i,boxHeight:n,itemHeight:Math.max(e,n)}},an=(t,e)=>null!==t&&null!==e&&t.datasetIndex===e.datasetIndex&&t.index===e.index;class cn extends Rt{constructor(t){super(),this._added=!1,this.legendHitBoxes=[],this._hoveredItem=null,this.doughnutMode=!1,this.chart=t.chart,this.options=t.options,this.ctx=t.ctx,this.legendItems=void 0,this.columnSizes=void 0,this.lineWidths=void 0,this.maxHeight=void 0,this.maxWidth=void 0,this.top=void 0,this.bottom=void 0,this.left=void 0,this.right=void 0,this.height=void 0,this.width=void 0,this._margins=void 0,this.position=void 0,this.weight=void 0,this.fullSize=void 0}update(t,e,n){this.maxWidth=t,this.maxHeight=e,this._margins=n,this.setDimensions(),this.buildLabels(),this.fit()}setDimensions(){this.isHorizontal()?(this.width=this.maxWidth,this.left=this._margins.left,this.right=this.width):(this.height=this.maxHeight,this.top=this._margins.top,this.bottom=this.height)}buildLabels(){const t=this.options.labels||{};let e=(0,i.Q)(t.generateLabels,[this.chart],this)||[];t.filter&&(e=e.filter((e=>t.filter(e,this.chart.data)))),t.sort&&(e=e.sort(((e,n)=>t.sort(e,n,this.chart.data)))),this.options.reverse&&e.reverse(),this.legendItems=e}fit(){const{options:t,ctx:e}=this;if(!t.display)return void(this.width=this.height=0);const n=t.labels,s=(0,i.a0)(n.font),r=s.size,o=this._computeTitleHeight(),{boxWidth:a,itemHeight:c}=on(n,r);let l,h;e.font=s.string,this.isHorizontal()?(l=this.maxWidth,h=this._fitRows(o,r,a,c)+10):(h=this.maxHeight,l=this._fitCols(o,s,a,c)+10),this.width=Math.min(l,t.maxWidth||this.maxWidth),this.height=Math.min(h,t.maxHeight||this.maxHeight)}_fitRows(t,e,n,i){const{ctx:s,maxWidth:r,options:{labels:{padding:o}}}=this,a=this.legendHitBoxes=[],c=this.lineWidths=[0],l=i+o;let h=t;s.textAlign="left",s.textBaseline="middle";let u=-1,d=-l;return this.legendItems.forEach(((t,f)=>{const p=n+e/2+s.measureText(t.text).width;(0===f||c[c.length-1]+p+2*o>r)&&(h+=l,c[c.length-(f>0?0:1)]=0,d+=l,u++),a[f]={left:0,top:d,row:u,width:p,height:i},c[c.length-1]+=p+o})),h}_fitCols(t,e,n,i){const{ctx:s,maxHeight:r,options:{labels:{padding:o}}}=this,a=this.legendHitBoxes=[],c=this.columnSizes=[],l=r-t;let h=o,u=0,d=0,f=0,p=0;return this.legendItems.forEach(((t,r)=>{const{itemWidth:g,itemHeight:m}=ln(n,e,s,t,i);r>0&&d+m+2*o>l&&(h+=u+o,c.push({width:u,height:d}),f+=u+o,p++,u=d=0),a[r]={left:f,top:d,col:p,width:g,height:m},u=Math.max(u,g),d+=m+o})),h+=u,c.push({width:u,height:d}),h}adjustHitBoxes(){if(!this.options.display)return;const t=this._computeTitleHeight(),{legendHitBoxes:e,options:{align:n,labels:{padding:s},rtl:r}}=this,o=(0,i.az)(r,this.left,this.width);if(this.isHorizontal()){let r=0,a=(0,i.a2)(n,this.left+s,this.right-this.lineWidths[r]);for(const c of e)r!==c.row&&(r=c.row,a=(0,i.a2)(n,this.left+s,this.right-this.lineWidths[r])),c.top+=this.top+t+s,c.left=o.leftForLtr(o.x(a),c.width),a+=c.width+s}else{let r=0,a=(0,i.a2)(n,this.top+t+s,this.bottom-this.columnSizes[r].height);for(const c of e)c.col!==r&&(r=c.col,a=(0,i.a2)(n,this.top+t+s,this.bottom-this.columnSizes[r].height)),c.top=a,c.left+=this.left+s,c.left=o.leftForLtr(o.x(c.left),c.width),a+=c.height+s}}isHorizontal(){return"top"===this.options.position||"bottom"===this.options.position}draw(){if(this.options.display){const t=this.ctx;(0,i.Y)(t,this),this._draw(),(0,i.$)(t)}}_draw(){const{options:t,columnSizes:e,lineWidths:n,ctx:s}=this,{align:r,labels:o}=t,a=i.d.color,c=(0,i.az)(t.rtl,this.left,this.width),l=(0,i.a0)(o.font),{padding:h}=o,u=l.size,d=u/2;let f;this.drawTitle(),s.textAlign=c.textAlign("left"),s.textBaseline="middle",s.lineWidth=.5,s.font=l.string;const{boxWidth:p,boxHeight:g,itemHeight:m}=on(o,u),y=function(t,e,n){if(isNaN(p)||p<=0||isNaN(g)||g<0)return;s.save();const r=(0,i.v)(n.lineWidth,1);if(s.fillStyle=(0,i.v)(n.fillStyle,a),s.lineCap=(0,i.v)(n.lineCap,"butt"),s.lineDashOffset=(0,i.v)(n.lineDashOffset,0),s.lineJoin=(0,i.v)(n.lineJoin,"miter"),s.lineWidth=r,s.strokeStyle=(0,i.v)(n.strokeStyle,a),s.setLineDash((0,i.v)(n.lineDash,[])),o.usePointStyle){const a={radius:g*Math.SQRT2/2,pointStyle:n.pointStyle,rotation:n.rotation,borderWidth:r},l=c.xPlus(t,p/2),h=e+d;(0,i.aD)(s,a,l,h,o.pointStyleWidth&&p)}else{const o=e+Math.max((u-g)/2,0),a=c.leftForLtr(t,p),l=(0,i.aw)(n.borderRadius);s.beginPath(),Object.values(l).some((t=>0!==t))?(0,i.au)(s,{x:a,y:o,w:p,h:g,radius:l}):s.rect(a,o,p,g),s.fill(),0!==r&&s.stroke()}s.restore()},v=function(t,e,n){(0,i.Z)(s,n.text,t,e+m/2,l,{strikethrough:n.hidden,textAlign:c.textAlign(n.textAlign)})},_=this.isHorizontal(),b=this._computeTitleHeight();f=_?{x:(0,i.a2)(r,this.left+h,this.right-n[0]),y:this.top+h+b,line:0}:{x:this.left+h,y:(0,i.a2)(r,this.top+b+h,this.bottom-e[0].height),line:0},(0,i.aA)(this.ctx,t.textDirection);const w=m+h;this.legendItems.forEach(((a,u)=>{s.strokeStyle=a.fontColor,s.fillStyle=a.fontColor;const g=s.measureText(a.text).width,m=c.textAlign(a.textAlign||(a.textAlign=o.textAlign)),T=p+d+g;let x=f.x,E=f.y;c.setWidth(this.width),_?u>0&&x+T+h>this.right&&(E=f.y+=w,f.line++,x=f.x=(0,i.a2)(r,this.left+h,this.right-n[f.line])):u>0&&E+w>this.bottom&&(x=f.x=x+e[f.line].width+h,f.line++,E=f.y=(0,i.a2)(r,this.top+b+h,this.bottom-e[f.line].height));const C=c.x(x);if(y(C,E,a),x=(0,i.aB)(m,x+p+d,_?x+T:this.right,t.rtl),v(c.x(x),E,a),_)f.x+=T+h;else if("string"!==typeof a.text){const t=l.lineHeight;f.y+=dn(a,t)+h}else f.y+=w})),(0,i.aC)(this.ctx,t.textDirection)}drawTitle(){const t=this.options,e=t.title,n=(0,i.a0)(e.font),s=(0,i.E)(e.padding);if(!e.display)return;const r=(0,i.az)(t.rtl,this.left,this.width),o=this.ctx,a=e.position,c=n.size/2,l=s.top+c;let h,u=this.left,d=this.width;if(this.isHorizontal())d=Math.max(...this.lineWidths),h=this.top+l,u=(0,i.a2)(t.align,u,this.right-d);else{const e=this.columnSizes.reduce(((t,e)=>Math.max(t,e.height)),0);h=l+(0,i.a2)(t.align,this.top,this.bottom-e-t.labels.padding-this._computeTitleHeight())}const f=(0,i.a2)(a,u,u+d);o.textAlign=r.textAlign((0,i.a1)(a)),o.textBaseline="middle",o.strokeStyle=e.color,o.fillStyle=e.color,o.font=n.string,(0,i.Z)(o,e.text,f,h,n)}_computeTitleHeight(){const t=this.options.title,e=(0,i.a0)(t.font),n=(0,i.E)(t.padding);return t.display?e.lineHeight+n.height:0}_getLegendItemAt(t,e){let n,s,r;if((0,i.aj)(t,this.left,this.right)&&(0,i.aj)(e,this.top,this.bottom))for(r=this.legendHitBoxes,n=0;n<r.length;++n)if(s=r[n],(0,i.aj)(t,s.left,s.left+s.width)&&(0,i.aj)(e,s.top,s.top+s.height))return this.legendItems[n];return null}handleEvent(t){const e=this.options;if(!fn(t.type,e))return;const n=this._getLegendItemAt(t.x,t.y);if("mousemove"===t.type||"mouseout"===t.type){const s=this._hoveredItem,r=an(s,n);s&&!r&&(0,i.Q)(e.onLeave,[t,s,this],this),this._hoveredItem=n,n&&!r&&(0,i.Q)(e.onHover,[t,n,this],this)}else n&&(0,i.Q)(e.onClick,[t,n,this],this)}}function ln(t,e,n,i,s){const r=hn(i,t,e,n),o=un(s,i,e.lineHeight);return{itemWidth:r,itemHeight:o}}function hn(t,e,n,i){let s=t.text;return s&&"string"!==typeof s&&(s=s.reduce(((t,e)=>t.length>e.length?t:e))),e+n.size/2+i.measureText(s).width}function un(t,e,n){let i=t;return"string"!==typeof e.text&&(i=dn(e,n)),i}function dn(t,e){const n=t.text?t.text.length:0;return e*n}function fn(t,e){return!("mousemove"!==t&&"mouseout"!==t||!e.onHover&&!e.onLeave)||!(!e.onClick||"click"!==t&&"mouseup"!==t)}var pn={id:"legend",_element:cn,start(t,e,n){const i=t.legend=new cn({ctx:t.ctx,options:n,chart:t});at.configure(t,i,n),at.addBox(t,i)},stop(t){at.removeBox(t,t.legend),delete t.legend},beforeUpdate(t,e,n){const i=t.legend;at.configure(t,i,n),i.options=n},afterUpdate(t){const e=t.legend;e.buildLabels(),e.adjustHitBoxes()},afterEvent(t,e){e.replay||t.legend.handleEvent(e.event)},defaults:{display:!0,position:"top",align:"center",fullSize:!0,reverse:!1,weight:1e3,onClick(t,e,n){const i=e.datasetIndex,s=n.chart;s.isDatasetVisible(i)?(s.hide(i),e.hidden=!0):(s.show(i),e.hidden=!1)},onHover:null,onLeave:null,labels:{color:t=>t.chart.options.color,boxWidth:40,padding:10,generateLabels(t){const e=t.data.datasets,{labels:{usePointStyle:n,pointStyle:s,textAlign:r,color:o,useBorderRadius:a,borderRadius:c}}=t.legend.options;return t._getSortedDatasetMetas().map((t=>{const l=t.controller.getStyle(n?0:void 0),h=(0,i.E)(l.borderWidth);return{text:e[t.index].label,fillStyle:l.backgroundColor,fontColor:o,hidden:!t.visible,lineCap:l.borderCapStyle,lineDash:l.borderDash,lineDashOffset:l.borderDashOffset,lineJoin:l.borderJoinStyle,lineWidth:(h.width+h.height)/4,strokeStyle:l.borderColor,pointStyle:s||l.pointStyle,rotation:l.rotation,textAlign:r||l.textAlign,borderRadius:a&&(c||l.borderRadius),datasetIndex:t.index}}),this)}},title:{color:t=>t.chart.options.color,display:!1,position:"center",text:""}},descriptors:{_scriptable:t=>!t.startsWith("on"),labels:{_scriptable:t=>!["generateLabels","filter","sort"].includes(t)}}};class gn extends Rt{constructor(t){super(),this.chart=t.chart,this.options=t.options,this.ctx=t.ctx,this._padding=void 0,this.top=void 0,this.bottom=void 0,this.left=void 0,this.right=void 0,this.width=void 0,this.height=void 0,this.position=void 0,this.weight=void 0,this.fullSize=void 0}update(t,e){const n=this.options;if(this.left=0,this.top=0,!n.display)return void(this.width=this.height=this.right=this.bottom=0);this.width=this.right=t,this.height=this.bottom=e;const s=(0,i.b)(n.text)?n.text.length:1;this._padding=(0,i.E)(n.padding);const r=s*(0,i.a0)(n.font).lineHeight+this._padding.height;this.isHorizontal()?this.height=r:this.width=r}isHorizontal(){const t=this.options.position;return"top"===t||"bottom"===t}_drawArgs(t){const{top:e,left:n,bottom:s,right:r,options:o}=this,a=o.align;let c,l,h,u=0;return this.isHorizontal()?(l=(0,i.a2)(a,n,r),h=e+t,c=r-n):("left"===o.position?(l=n+t,h=(0,i.a2)(a,s,e),u=-.5*i.P):(l=r-t,h=(0,i.a2)(a,e,s),u=.5*i.P),c=s-e),{titleX:l,titleY:h,maxWidth:c,rotation:u}}draw(){const t=this.ctx,e=this.options;if(!e.display)return;const n=(0,i.a0)(e.font),s=n.lineHeight,r=s/2+this._padding.top,{titleX:o,titleY:a,maxWidth:c,rotation:l}=this._drawArgs(r);(0,i.Z)(t,e.text,0,0,n,{color:e.color,maxWidth:c,rotation:l,textAlign:(0,i.a1)(e.align),textBaseline:"middle",translation:[o,a]})}}function mn(t,e){const n=new gn({ctx:t.ctx,options:e,chart:t});at.configure(t,n,e),at.addBox(t,n),t.titleBlock=n}var yn={id:"title",_element:gn,start(t,e,n){mn(t,n)},stop(t){const e=t.titleBlock;at.removeBox(t,e),delete t.titleBlock},beforeUpdate(t,e,n){const i=t.titleBlock;at.configure(t,i,n),i.options=n},defaults:{align:"center",display:!1,font:{weight:"bold"},fullSize:!0,padding:10,position:"top",text:"",weight:2e3},defaultRoutes:{color:"color"},descriptors:{_scriptable:!0,_indexable:!1}};new WeakMap;const vn={average(t){if(!t.length)return!1;let e,n,i=new Set,s=0,r=0;for(e=0,n=t.length;e<n;++e){const n=t[e].element;if(n&&n.hasValue()){const t=n.tooltipPosition();i.add(t.x),s+=t.y,++r}}if(0===r||0===i.size)return!1;const o=[...i].reduce(((t,e)=>t+e))/i.size;return{x:o,y:s/r}},nearest(t,e){if(!t.length)return!1;let n,s,r,o=e.x,a=e.y,c=Number.POSITIVE_INFINITY;for(n=0,s=t.length;n<s;++n){const s=t[n].element;if(s&&s.hasValue()){const t=s.getCenterPoint(),n=(0,i.aE)(e,t);n<c&&(c=n,r=s)}}if(r){const t=r.tooltipPosition();o=t.x,a=t.y}return{x:o,y:a}}};function _n(t,e){return e&&((0,i.b)(e)?Array.prototype.push.apply(t,e):t.push(e)),t}function bn(t){return("string"===typeof t||t instanceof String)&&t.indexOf("\n")>-1?t.split("\n"):t}function wn(t,e){const{element:n,datasetIndex:i,index:s}=e,r=t.getDatasetMeta(i).controller,{label:o,value:a}=r.getLabelAndValue(s);return{chart:t,label:o,parsed:r.getParsed(s),raw:t.data.datasets[i].data[s],formattedValue:a,dataset:r.getDataset(),dataIndex:s,datasetIndex:i,element:n}}function Tn(t,e){const n=t.chart.ctx,{body:s,footer:r,title:o}=t,{boxWidth:a,boxHeight:c}=e,l=(0,i.a0)(e.bodyFont),h=(0,i.a0)(e.titleFont),u=(0,i.a0)(e.footerFont),d=o.length,f=r.length,p=s.length,g=(0,i.E)(e.padding);let m=g.height,y=0,v=s.reduce(((t,e)=>t+e.before.length+e.lines.length+e.after.length),0);if(v+=t.beforeBody.length+t.afterBody.length,d&&(m+=d*h.lineHeight+(d-1)*e.titleSpacing+e.titleMarginBottom),v){const t=e.displayColors?Math.max(c,l.lineHeight):l.lineHeight;m+=p*t+(v-p)*l.lineHeight+(v-1)*e.bodySpacing}f&&(m+=e.footerMarginTop+f*u.lineHeight+(f-1)*e.footerSpacing);let _=0;const b=function(t){y=Math.max(y,n.measureText(t).width+_)};return n.save(),n.font=h.string,(0,i.F)(t.title,b),n.font=l.string,(0,i.F)(t.beforeBody.concat(t.afterBody),b),_=e.displayColors?a+2+e.boxPadding:0,(0,i.F)(s,(t=>{(0,i.F)(t.before,b),(0,i.F)(t.lines,b),(0,i.F)(t.after,b)})),_=0,n.font=u.string,(0,i.F)(t.footer,b),n.restore(),y+=g.width,{width:y,height:m}}function xn(t,e){const{y:n,height:i}=e;return n<i/2?"top":n>t.height-i/2?"bottom":"center"}function En(t,e,n,i){const{x:s,width:r}=i,o=n.caretSize+n.caretPadding;return"left"===t&&s+r+o>e.width||("right"===t&&s-r-o<0||void 0)}function Cn(t,e,n,i){const{x:s,width:r}=n,{width:o,chartArea:{left:a,right:c}}=t;let l="center";return"center"===i?l=s<=(a+c)/2?"left":"right":s<=r/2?l="left":s>=o-r/2&&(l="right"),En(l,t,e,n)&&(l="center"),l}function In(t,e,n){const i=n.yAlign||e.yAlign||xn(t,n);return{xAlign:n.xAlign||e.xAlign||Cn(t,e,n,i),yAlign:i}}function Sn(t,e){let{x:n,width:i}=t;return"right"===e?n-=i:"center"===e&&(n-=i/2),n}function kn(t,e,n){let{y:i,height:s}=t;return"top"===e?i+=n:i-="bottom"===e?s+n:s/2,i}function An(t,e,n,s){const{caretSize:r,caretPadding:o,cornerRadius:a}=t,{xAlign:c,yAlign:l}=n,h=r+o,{topLeft:u,topRight:d,bottomLeft:f,bottomRight:p}=(0,i.aw)(a);let g=Sn(e,c);const m=kn(e,l,h);return"center"===l?"left"===c?g+=h:"right"===c&&(g-=h):"left"===c?g-=Math.max(u,f)+r:"right"===c&&(g+=Math.max(d,p)+r),{x:(0,i.S)(g,0,s.width-e.width),y:(0,i.S)(m,0,s.height-e.height)}}function On(t,e,n){const s=(0,i.E)(n.padding);return"center"===e?t.x+t.width/2:"right"===e?t.x+t.width-s.right:t.x+s.left}function Rn(t){return _n([],bn(t))}function Pn(t,e,n){return(0,i.j)(t,{tooltip:e,tooltipItems:n,type:"tooltip"})}function Nn(t,e){const n=e&&e.dataset&&e.dataset.tooltip&&e.dataset.tooltip.callbacks;return n?t.override(n):t}const Dn={beforeTitle:i.aF,title(t){if(t.length>0){const e=t[0],n=e.chart.data.labels,i=n?n.length:0;if(this&&this.options&&"dataset"===this.options.mode)return e.dataset.label||"";if(e.label)return e.label;if(i>0&&e.dataIndex<i)return n[e.dataIndex]}return""},afterTitle:i.aF,beforeBody:i.aF,beforeLabel:i.aF,label(t){if(this&&this.options&&"dataset"===this.options.mode)return t.label+": "+t.formattedValue||t.formattedValue;let e=t.dataset.label||"";e&&(e+=": ");const n=t.formattedValue;return(0,i.k)(n)||(e+=n),e},labelColor(t){const e=t.chart.getDatasetMeta(t.datasetIndex),n=e.controller.getStyle(t.dataIndex);return{borderColor:n.borderColor,backgroundColor:n.backgroundColor,borderWidth:n.borderWidth,borderDash:n.borderDash,borderDashOffset:n.borderDashOffset,borderRadius:0}},labelTextColor(){return this.options.bodyColor},labelPointStyle(t){const e=t.chart.getDatasetMeta(t.datasetIndex),n=e.controller.getStyle(t.dataIndex);return{pointStyle:n.pointStyle,rotation:n.rotation}},afterLabel:i.aF,afterBody:i.aF,beforeFooter:i.aF,footer:i.aF,afterFooter:i.aF};function Mn(t,e,n,i){const s=t[e].call(n,i);return"undefined"===typeof s?Dn[e].call(n,i):s}class Ln extends Rt{static positioners=vn;constructor(t){super(),this.opacity=0,this._active=[],this._eventPosition=void 0,this._size=void 0,this._cachedAnimations=void 0,this._tooltipItems=[],this.$animations=void 0,this.$context=void 0,this.chart=t.chart,this.options=t.options,this.dataPoints=void 0,this.title=void 0,this.beforeBody=void 0,this.body=void 0,this.afterBody=void 0,this.footer=void 0,this.xAlign=void 0,this.yAlign=void 0,this.x=void 0,this.y=void 0,this.height=void 0,this.width=void 0,this.caretX=void 0,this.caretY=void 0,this.labelColors=void 0,this.labelPointStyles=void 0,this.labelTextColors=void 0}initialize(t){this.options=t,this._cachedAnimations=void 0,this.$context=void 0}_resolveAnimations(){const t=this._cachedAnimations;if(t)return t;const e=this.chart,n=this.options.setContext(this.getContext()),i=n.enabled&&e.options.animation&&n.animations,s=new l(this.chart,i);return i._cacheable&&(this._cachedAnimations=Object.freeze(s)),s}getContext(){return this.$context||(this.$context=Pn(this.chart.getContext(),this,this._tooltipItems))}getTitle(t,e){const{callbacks:n}=e,i=Mn(n,"beforeTitle",this,t),s=Mn(n,"title",this,t),r=Mn(n,"afterTitle",this,t);let o=[];return o=_n(o,bn(i)),o=_n(o,bn(s)),o=_n(o,bn(r)),o}getBeforeBody(t,e){return Rn(Mn(e.callbacks,"beforeBody",this,t))}getBody(t,e){const{callbacks:n}=e,s=[];return(0,i.F)(t,(t=>{const e={before:[],lines:[],after:[]},i=Nn(n,t);_n(e.before,bn(Mn(i,"beforeLabel",this,t))),_n(e.lines,Mn(i,"label",this,t)),_n(e.after,bn(Mn(i,"afterLabel",this,t))),s.push(e)})),s}getAfterBody(t,e){return Rn(Mn(e.callbacks,"afterBody",this,t))}getFooter(t,e){const{callbacks:n}=e,i=Mn(n,"beforeFooter",this,t),s=Mn(n,"footer",this,t),r=Mn(n,"afterFooter",this,t);let o=[];return o=_n(o,bn(i)),o=_n(o,bn(s)),o=_n(o,bn(r)),o}_createItems(t){const e=this._active,n=this.chart.data,s=[],r=[],o=[];let a,c,l=[];for(a=0,c=e.length;a<c;++a)l.push(wn(this.chart,e[a]));return t.filter&&(l=l.filter(((e,i,s)=>t.filter(e,i,s,n)))),t.itemSort&&(l=l.sort(((e,i)=>t.itemSort(e,i,n)))),(0,i.F)(l,(e=>{const n=Nn(t.callbacks,e);s.push(Mn(n,"labelColor",this,e)),r.push(Mn(n,"labelPointStyle",this,e)),o.push(Mn(n,"labelTextColor",this,e))})),this.labelColors=s,this.labelPointStyles=r,this.labelTextColors=o,this.dataPoints=l,l}update(t,e){const n=this.options.setContext(this.getContext()),i=this._active;let s,r=[];if(i.length){const t=vn[n.position].call(this,i,this._eventPosition);r=this._createItems(n),this.title=this.getTitle(r,n),this.beforeBody=this.getBeforeBody(r,n),this.body=this.getBody(r,n),this.afterBody=this.getAfterBody(r,n),this.footer=this.getFooter(r,n);const e=this._size=Tn(this,n),o=Object.assign({},t,e),a=In(this.chart,n,o),c=An(n,o,a,this.chart);this.xAlign=a.xAlign,this.yAlign=a.yAlign,s={opacity:1,x:c.x,y:c.y,width:e.width,height:e.height,caretX:t.x,caretY:t.y}}else 0!==this.opacity&&(s={opacity:0});this._tooltipItems=r,this.$context=void 0,s&&this._resolveAnimations().update(this,s),t&&n.external&&n.external.call(this,{chart:this.chart,tooltip:this,replay:e})}drawCaret(t,e,n,i){const s=this.getCaretPosition(t,n,i);e.lineTo(s.x1,s.y1),e.lineTo(s.x2,s.y2),e.lineTo(s.x3,s.y3)}getCaretPosition(t,e,n){const{xAlign:s,yAlign:r}=this,{caretSize:o,cornerRadius:a}=n,{topLeft:c,topRight:l,bottomLeft:h,bottomRight:u}=(0,i.aw)(a),{x:d,y:f}=t,{width:p,height:g}=e;let m,y,v,_,b,w;return"center"===r?(b=f+g/2,"left"===s?(m=d,y=m-o,_=b+o,w=b-o):(m=d+p,y=m+o,_=b-o,w=b+o),v=m):(y="left"===s?d+Math.max(c,h)+o:"right"===s?d+p-Math.max(l,u)-o:this.caretX,"top"===r?(_=f,b=_-o,m=y-o,v=y+o):(_=f+g,b=_+o,m=y+o,v=y-o),w=_),{x1:m,x2:y,x3:v,y1:_,y2:b,y3:w}}drawTitle(t,e,n){const s=this.title,r=s.length;let o,a,c;if(r){const l=(0,i.az)(n.rtl,this.x,this.width);for(t.x=On(this,n.titleAlign,n),e.textAlign=l.textAlign(n.titleAlign),e.textBaseline="middle",o=(0,i.a0)(n.titleFont),a=n.titleSpacing,e.fillStyle=n.titleColor,e.font=o.string,c=0;c<r;++c)e.fillText(s[c],l.x(t.x),t.y+o.lineHeight/2),t.y+=o.lineHeight+a,c+1===r&&(t.y+=n.titleMarginBottom-a)}}_drawColorBox(t,e,n,s,r){const o=this.labelColors[n],a=this.labelPointStyles[n],{boxHeight:c,boxWidth:l}=r,h=(0,i.a0)(r.bodyFont),u=On(this,"left",r),d=s.x(u),f=c<h.lineHeight?(h.lineHeight-c)/2:0,p=e.y+f;if(r.usePointStyle){const e={radius:Math.min(l,c)/2,pointStyle:a.pointStyle,rotation:a.rotation,borderWidth:1},n=s.leftForLtr(d,l)+l/2,h=p+c/2;t.strokeStyle=r.multiKeyBackground,t.fillStyle=r.multiKeyBackground,(0,i.at)(t,e,n,h),t.strokeStyle=o.borderColor,t.fillStyle=o.backgroundColor,(0,i.at)(t,e,n,h)}else{t.lineWidth=(0,i.i)(o.borderWidth)?Math.max(...Object.values(o.borderWidth)):o.borderWidth||1,t.strokeStyle=o.borderColor,t.setLineDash(o.borderDash||[]),t.lineDashOffset=o.borderDashOffset||0;const e=s.leftForLtr(d,l),n=s.leftForLtr(s.xPlus(d,1),l-2),a=(0,i.aw)(o.borderRadius);Object.values(a).some((t=>0!==t))?(t.beginPath(),t.fillStyle=r.multiKeyBackground,(0,i.au)(t,{x:e,y:p,w:l,h:c,radius:a}),t.fill(),t.stroke(),t.fillStyle=o.backgroundColor,t.beginPath(),(0,i.au)(t,{x:n,y:p+1,w:l-2,h:c-2,radius:a}),t.fill()):(t.fillStyle=r.multiKeyBackground,t.fillRect(e,p,l,c),t.strokeRect(e,p,l,c),t.fillStyle=o.backgroundColor,t.fillRect(n,p+1,l-2,c-2))}t.fillStyle=this.labelTextColors[n]}drawBody(t,e,n){const{body:s}=this,{bodySpacing:r,bodyAlign:o,displayColors:a,boxHeight:c,boxWidth:l,boxPadding:h}=n,u=(0,i.a0)(n.bodyFont);let d=u.lineHeight,f=0;const p=(0,i.az)(n.rtl,this.x,this.width),g=function(n){e.fillText(n,p.x(t.x+f),t.y+d/2),t.y+=d+r},m=p.textAlign(o);let y,v,_,b,w,T,x;for(e.textAlign=o,e.textBaseline="middle",e.font=u.string,t.x=On(this,m,n),e.fillStyle=n.bodyColor,(0,i.F)(this.beforeBody,g),f=a&&"right"!==m?"center"===o?l/2+h:l+2+h:0,b=0,T=s.length;b<T;++b){for(y=s[b],v=this.labelTextColors[b],e.fillStyle=v,(0,i.F)(y.before,g),_=y.lines,a&&_.length&&(this._drawColorBox(e,t,b,p,n),d=Math.max(u.lineHeight,c)),w=0,x=_.length;w<x;++w)g(_[w]),d=u.lineHeight;(0,i.F)(y.after,g)}f=0,d=u.lineHeight,(0,i.F)(this.afterBody,g),t.y-=r}drawFooter(t,e,n){const s=this.footer,r=s.length;let o,a;if(r){const c=(0,i.az)(n.rtl,this.x,this.width);for(t.x=On(this,n.footerAlign,n),t.y+=n.footerMarginTop,e.textAlign=c.textAlign(n.footerAlign),e.textBaseline="middle",o=(0,i.a0)(n.footerFont),e.fillStyle=n.footerColor,e.font=o.string,a=0;a<r;++a)e.fillText(s[a],c.x(t.x),t.y+o.lineHeight/2),t.y+=o.lineHeight+n.footerSpacing}}drawBackground(t,e,n,s){const{xAlign:r,yAlign:o}=this,{x:a,y:c}=t,{width:l,height:h}=n,{topLeft:u,topRight:d,bottomLeft:f,bottomRight:p}=(0,i.aw)(s.cornerRadius);e.fillStyle=s.backgroundColor,e.strokeStyle=s.borderColor,e.lineWidth=s.borderWidth,e.beginPath(),e.moveTo(a+u,c),"top"===o&&this.drawCaret(t,e,n,s),e.lineTo(a+l-d,c),e.quadraticCurveTo(a+l,c,a+l,c+d),"center"===o&&"right"===r&&this.drawCaret(t,e,n,s),e.lineTo(a+l,c+h-p),e.quadraticCurveTo(a+l,c+h,a+l-p,c+h),"bottom"===o&&this.drawCaret(t,e,n,s),e.lineTo(a+f,c+h),e.quadraticCurveTo(a,c+h,a,c+h-f),"center"===o&&"left"===r&&this.drawCaret(t,e,n,s),e.lineTo(a,c+u),e.quadraticCurveTo(a,c,a+u,c),e.closePath(),e.fill(),s.borderWidth>0&&e.stroke()}_updateAnimationTarget(t){const e=this.chart,n=this.$animations,i=n&&n.x,s=n&&n.y;if(i||s){const n=vn[t.position].call(this,this._active,this._eventPosition);if(!n)return;const r=this._size=Tn(this,t),o=Object.assign({},n,this._size),a=In(e,t,o),c=An(t,o,a,e);i._to===c.x&&s._to===c.y||(this.xAlign=a.xAlign,this.yAlign=a.yAlign,this.width=r.width,this.height=r.height,this.caretX=n.x,this.caretY=n.y,this._resolveAnimations().update(this,c))}}_willRender(){return!!this.opacity}draw(t){const e=this.options.setContext(this.getContext());let n=this.opacity;if(!n)return;this._updateAnimationTarget(e);const s={width:this.width,height:this.height},r={x:this.x,y:this.y};n=Math.abs(n)<.001?0:n;const o=(0,i.E)(e.padding),a=this.title.length||this.beforeBody.length||this.body.length||this.afterBody.length||this.footer.length;e.enabled&&a&&(t.save(),t.globalAlpha=n,this.drawBackground(r,t,s,e),(0,i.aA)(t,e.textDirection),r.y+=o.top,this.drawTitle(r,t,e),this.drawBody(r,t,e),this.drawFooter(r,t,e),(0,i.aC)(t,e.textDirection),t.restore())}getActiveElements(){return this._active||[]}setActiveElements(t,e){const n=this._active,s=t.map((({datasetIndex:t,index:e})=>{const n=this.chart.getDatasetMeta(t);if(!n)throw new Error("Cannot find a dataset at index "+t);return{datasetIndex:t,element:n.data[e],index:e}})),r=!(0,i.ah)(n,s),o=this._positionChanged(s,e);(r||o)&&(this._active=s,this._eventPosition=e,this._ignoreReplayEvents=!0,this.update(!0))}handleEvent(t,e,n=!0){if(e&&this._ignoreReplayEvents)return!1;this._ignoreReplayEvents=!1;const s=this.options,r=this._active||[],o=this._getActiveElements(t,r,e,n),a=this._positionChanged(o,t),c=e||!(0,i.ah)(o,r)||a;return c&&(this._active=o,(s.enabled||s.external)&&(this._eventPosition={x:t.x,y:t.y},this.update(!0,e))),c}_getActiveElements(t,e,n,i){const s=this.options;if("mouseout"===t.type)return[];if(!i)return e.filter((t=>this.chart.data.datasets[t.datasetIndex]&&void 0!==this.chart.getDatasetMeta(t.datasetIndex).controller.getParsed(t.index)));const r=this.chart.getElementsAtEventForMode(t,s.mode,s,n);return s.reverse&&r.reverse(),r}_positionChanged(t,e){const{caretX:n,caretY:i,options:s}=this,r=vn[s.position].call(this,t,e);return!1!==r&&(n!==r.x||i!==r.y)}}var Fn={id:"tooltip",_element:Ln,positioners:vn,afterInit(t,e,n){n&&(t.tooltip=new Ln({chart:t,options:n}))},beforeUpdate(t,e,n){t.tooltip&&t.tooltip.initialize(n)},reset(t,e,n){t.tooltip&&t.tooltip.initialize(n)},afterDraw(t){const e=t.tooltip;if(e&&e._willRender()){const n={tooltip:e};if(!1===t.notifyPlugins("beforeTooltipDraw",{...n,cancelable:!0}))return;e.draw(t.ctx),t.notifyPlugins("afterTooltipDraw",n)}},afterEvent(t,e){if(t.tooltip){const n=e.replay;t.tooltip.handleEvent(e.event,n,e.inChartArea)&&(e.changed=!0)}},defaults:{enabled:!0,external:null,position:"average",backgroundColor:"rgba(0,0,0,0.8)",titleColor:"#fff",titleFont:{weight:"bold"},titleSpacing:2,titleMarginBottom:6,titleAlign:"left",bodyColor:"#fff",bodySpacing:2,bodyFont:{},bodyAlign:"left",footerColor:"#fff",footerSpacing:2,footerMarginTop:6,footerFont:{weight:"bold"},footerAlign:"left",padding:6,caretPadding:2,caretSize:5,cornerRadius:6,boxHeight:(t,e)=>e.bodyFont.size,boxWidth:(t,e)=>e.bodyFont.size,multiKeyBackground:"#fff",displayColors:!0,boxPadding:0,borderColor:"rgba(0,0,0,0)",borderWidth:0,animation:{duration:400,easing:"easeOutQuart"},animations:{numbers:{type:"number",properties:["x","y","width","height","caretX","caretY"]},opacity:{easing:"linear",duration:200}},callbacks:Dn},defaultRoutes:{bodyFont:"font",footerFont:"font",titleFont:"font"},descriptors:{_scriptable:t=>"filter"!==t&&"itemSort"!==t&&"external"!==t,_indexable:!1,callbacks:{_scriptable:!1,_indexable:!1},animation:{_fallback:!1},animations:{_fallback:"animation"}},additionalOptionScopes:["interaction"]};const Un=(t,e,n,i)=>("string"===typeof e?(n=t.push(e)-1,i.unshift({index:n,label:e})):isNaN(e)&&(n=null),n);function Vn(t,e,n,i){const s=t.indexOf(e);if(-1===s)return Un(t,e,n,i);const r=t.lastIndexOf(e);return s!==r?n:s}const jn=(t,e)=>null===t?null:(0,i.S)(Math.round(t),0,e);function zn(t){const e=this.getLabels();return t>=0&&t<e.length?e[t]:t}class Bn extends Xt{static id="category";static defaults={ticks:{callback:zn}};constructor(t){super(t),this._startValue=void 0,this._valueRange=0,this._addedLabels=[]}init(t){const e=this._addedLabels;if(e.length){const t=this.getLabels();for(const{index:n,label:i}of e)t[n]===i&&t.splice(n,1);this._addedLabels=[]}super.init(t)}parse(t,e){if((0,i.k)(t))return null;const n=this.getLabels();return e=isFinite(e)&&n[e]===t?e:Vn(n,t,(0,i.v)(e,t),this._addedLabels),jn(e,n.length-1)}determineDataLimits(){const{minDefined:t,maxDefined:e}=this.getUserBounds();let{min:n,max:i}=this.getMinMax(!0);"ticks"===this.options.bounds&&(t||(n=0),e||(i=this.getLabels().length-1)),this.min=n,this.max=i}buildTicks(){const t=this.min,e=this.max,n=this.options.offset,i=[];let s=this.getLabels();s=0===t&&e===s.length-1?s:s.slice(t,e+1),this._valueRange=Math.max(s.length-(n?0:1),1),this._startValue=this.min-(n?.5:0);for(let r=t;r<=e;r++)i.push({value:r});return i}getLabelForValue(t){return zn.call(this,t)}configure(){super.configure(),this.isHorizontal()||(this._reversePixels=!this._reversePixels)}getPixelForValue(t){return"number"!==typeof t&&(t=this.parse(t)),null===t?NaN:this.getPixelForDecimal((t-this._startValue)/this._valueRange)}getPixelForTick(t){const e=this.ticks;return t<0||t>e.length-1?null:this.getPixelForValue(e[t].value)}getValueForPixel(t){return Math.round(this._startValue+this.getDecimalForPixel(t)*this._valueRange)}getBasePixel(){return this.bottom}}function $n(t,e){const n=[],s=1e-14,{bounds:r,step:o,min:a,max:c,precision:l,count:h,maxTicks:u,maxDigits:d,includeBounds:f}=t,p=o||1,g=u-1,{min:m,max:y}=e,v=!(0,i.k)(a),_=!(0,i.k)(c),b=!(0,i.k)(h),w=(y-m)/(d+1);let T,x,E,C,I=(0,i.aH)((y-m)/g/p)*p;if(I<s&&!v&&!_)return[{value:m},{value:y}];C=Math.ceil(y/I)-Math.floor(m/I),C>g&&(I=(0,i.aH)(C*I/g/p)*p),(0,i.k)(l)||(T=Math.pow(10,l),I=Math.ceil(I*T)/T),"ticks"===r?(x=Math.floor(m/I)*I,E=Math.ceil(y/I)*I):(x=m,E=y),v&&_&&o&&(0,i.aI)((c-a)/o,I/1e3)?(C=Math.round(Math.min((c-a)/I,u)),I=(c-a)/C,x=a,E=c):b?(x=v?a:x,E=_?c:E,C=h-1,I=(E-x)/C):(C=(E-x)/I,C=(0,i.aJ)(C,Math.round(C),I/1e3)?Math.round(C):Math.ceil(C));const S=Math.max((0,i.aK)(I),(0,i.aK)(x));T=Math.pow(10,(0,i.k)(l)?S:l),x=Math.round(x*T)/T,E=Math.round(E*T)/T;let k=0;for(v&&(f&&x!==a?(n.push({value:a}),x<a&&k++,(0,i.aJ)(Math.round((x+k*I)*T)/T,a,Wn(a,w,t))&&k++):x<a&&k++);k<C;++k){const t=Math.round((x+k*I)*T)/T;if(_&&t>c)break;n.push({value:t})}return _&&f&&E!==c?n.length&&(0,i.aJ)(n[n.length-1].value,c,Wn(c,w,t))?n[n.length-1].value=c:n.push({value:c}):_&&E!==c||n.push({value:E}),n}function Wn(t,e,{horizontal:n,minRotation:s}){const r=(0,i.t)(s),o=(n?Math.sin(r):Math.cos(r))||.001,a=.75*e*(""+t).length;return Math.min(e/o,a)}class Hn extends Xt{constructor(t){super(t),this.start=void 0,this.end=void 0,this._startValue=void 0,this._endValue=void 0,this._valueRange=0}parse(t,e){return(0,i.k)(t)||("number"===typeof t||t instanceof Number)&&!isFinite(+t)?null:+t}handleTickRangeOptions(){const{beginAtZero:t}=this.options,{minDefined:e,maxDefined:n}=this.getUserBounds();let{min:s,max:r}=this;const o=t=>s=e?s:t,a=t=>r=n?r:t;if(t){const t=(0,i.s)(s),e=(0,i.s)(r);t<0&&e<0?a(0):t>0&&e>0&&o(0)}if(s===r){let e=0===r?1:Math.abs(.05*r);a(r+e),t||o(s-e)}this.min=s,this.max=r}getTickLimit(){const t=this.options.ticks;let e,{maxTicksLimit:n,stepSize:i}=t;return i?(e=Math.ceil(this.max/i)-Math.floor(this.min/i)+1,e>1e3&&(console.warn(`scales.${this.id}.ticks.stepSize: ${i} would result generating up to ${e} ticks. Limiting to 1000.`),e=1e3)):(e=this.computeTickLimit(),n=n||11),n&&(e=Math.min(n,e)),e}computeTickLimit(){return Number.POSITIVE_INFINITY}buildTicks(){const t=this.options,e=t.ticks;let n=this.getTickLimit();n=Math.max(2,n);const s={maxTicks:n,bounds:t.bounds,min:t.min,max:t.max,precision:e.precision,step:e.stepSize,count:e.count,maxDigits:this._maxDigits(),horizontal:this.isHorizontal(),minRotation:e.minRotation||0,includeBounds:!1!==e.includeBounds},r=this._range||this,o=$n(s,r);return"ticks"===t.bounds&&(0,i.aG)(o,this,"value"),t.reverse?(o.reverse(),this.start=this.max,this.end=this.min):(this.start=this.min,this.end=this.max),o}configure(){const t=this.ticks;let e=this.min,n=this.max;if(super.configure(),this.options.offset&&t.length){const i=(n-e)/Math.max(t.length-1,1)/2;e-=i,n+=i}this._startValue=e,this._endValue=n,this._valueRange=n-e}getLabelForValue(t){return(0,i.o)(t,this.chart.options.locale,this.options.ticks.format)}}class qn extends Hn{static id="linear";static defaults={ticks:{callback:i.aL.formatters.numeric}};determineDataLimits(){const{min:t,max:e}=this.getMinMax(!0);this.min=(0,i.g)(t)?t:0,this.max=(0,i.g)(e)?e:1,this.handleTickRangeOptions()}computeTickLimit(){const t=this.isHorizontal(),e=t?this.width:this.height,n=(0,i.t)(this.options.ticks.minRotation),s=(t?Math.sin(n):Math.cos(n))||.001,r=this._resolveTickFontOptions(0);return Math.ceil(e/Math.min(40,r.lineHeight/s))}getPixelForValue(t){return null===t?NaN:this.getPixelForDecimal((t-this._startValue)/this._valueRange)}getValueForPixel(t){return this._startValue+this.getDecimalForPixel(t)*this._valueRange}}i.aL.formatters.logarithmic;i.aL.formatters.numeric;const Kn={millisecond:{common:!0,size:1,steps:1e3},second:{common:!0,size:1e3,steps:60},minute:{common:!0,size:6e4,steps:60},hour:{common:!0,size:36e5,steps:24},day:{common:!0,size:864e5,steps:30},week:{common:!1,size:6048e5,steps:4},month:{common:!0,size:2628e6,steps:12},quarter:{common:!1,size:7884e6,steps:4},year:{common:!0,size:3154e7}},Gn=Object.keys(Kn);function Yn(t,e){return t-e}function Qn(t,e){if((0,i.k)(e))return null;const n=t._adapter,{parser:s,round:r,isoWeekday:o}=t._parseOpts;let a=e;return"function"===typeof s&&(a=s(a)),(0,i.g)(a)||(a="string"===typeof s?n.parse(a,s):n.parse(a)),null===a?null:(r&&(a="week"!==r||!(0,i.x)(o)&&!0!==o?n.startOf(a,r):n.startOf(a,"isoWeek",o)),+a)}function Xn(t,e,n,i){const s=Gn.length;for(let r=Gn.indexOf(t);r<s-1;++r){const t=Kn[Gn[r]],s=t.steps?t.steps:Number.MAX_SAFE_INTEGER;if(t.common&&Math.ceil((n-e)/(s*t.size))<=i)return Gn[r]}return Gn[s-1]}function Jn(t,e,n,i,s){for(let r=Gn.length-1;r>=Gn.indexOf(n);r--){const n=Gn[r];if(Kn[n].common&&t._adapter.diff(s,i,n)>=e-1)return n}return Gn[n?Gn.indexOf(n):0]}function Zn(t){for(let e=Gn.indexOf(t)+1,n=Gn.length;e<n;++e)if(Kn[Gn[e]].common)return Gn[e]}function ti(t,e,n){if(n){if(n.length){const{lo:s,hi:r}=(0,i.aP)(n,e),o=n[s]>=e?n[s]:n[r];t[o]=!0}}else t[e]=!0}function ei(t,e,n,i){const s=t._adapter,r=+s.startOf(e[0].value,i),o=e[e.length-1].value;let a,c;for(a=r;a<=o;a=+s.add(a,1,i))c=n[a],c>=0&&(e[c].major=!0);return e}function ni(t,e,n){const i=[],s={},r=e.length;let o,a;for(o=0;o<r;++o)a=e[o],s[a]=o,i.push({value:a,major:!1});return 0!==r&&n?ei(t,i,s,n):i}class ii extends Xt{static id="time";static defaults={bounds:"data",adapters:{},time:{parser:!1,unit:!1,round:!1,isoWeekday:!1,minUnit:"millisecond",displayFormats:{}},ticks:{source:"auto",callback:!1,major:{enabled:!1}}};constructor(t){super(t),this._cache={data:[],labels:[],all:[]},this._unit="day",this._majorUnit=void 0,this._offsets={},this._normalized=!1,this._parseOpts=void 0}init(t,e={}){const n=t.time||(t.time={}),s=this._adapter=new M._date(t.adapters.date);s.init(e),(0,i.ab)(n.displayFormats,s.formats()),this._parseOpts={parser:n.parser,round:n.round,isoWeekday:n.isoWeekday},super.init(t),this._normalized=e.normalized}parse(t,e){return void 0===t?null:Qn(this,t)}beforeLayout(){super.beforeLayout(),this._cache={data:[],labels:[],all:[]}}determineDataLimits(){const t=this.options,e=this._adapter,n=t.time.unit||"day";let{min:s,max:r,minDefined:o,maxDefined:a}=this.getUserBounds();function c(t){o||isNaN(t.min)||(s=Math.min(s,t.min)),a||isNaN(t.max)||(r=Math.max(r,t.max))}o&&a||(c(this._getLabelBounds()),"ticks"===t.bounds&&"labels"===t.ticks.source||c(this.getMinMax(!1))),s=(0,i.g)(s)&&!isNaN(s)?s:+e.startOf(Date.now(),n),r=(0,i.g)(r)&&!isNaN(r)?r:+e.endOf(Date.now(),n)+1,this.min=Math.min(s,r-1),this.max=Math.max(s+1,r)}_getLabelBounds(){const t=this.getLabelTimestamps();let e=Number.POSITIVE_INFINITY,n=Number.NEGATIVE_INFINITY;return t.length&&(e=t[0],n=t[t.length-1]),{min:e,max:n}}buildTicks(){const t=this.options,e=t.time,n=t.ticks,s="labels"===n.source?this.getLabelTimestamps():this._generate();"ticks"===t.bounds&&s.length&&(this.min=this._userMin||s[0],this.max=this._userMax||s[s.length-1]);const r=this.min,o=this.max,a=(0,i.aO)(s,r,o);return this._unit=e.unit||(n.autoSkip?Xn(e.minUnit,this.min,this.max,this._getLabelCapacity(r)):Jn(this,a.length,e.minUnit,this.min,this.max)),this._majorUnit=n.major.enabled&&"year"!==this._unit?Zn(this._unit):void 0,this.initOffsets(s),t.reverse&&a.reverse(),ni(this,a,this._majorUnit)}afterAutoSkip(){this.options.offsetAfterAutoskip&&this.initOffsets(this.ticks.map((t=>+t.value)))}initOffsets(t=[]){let e,n,s=0,r=0;this.options.offset&&t.length&&(e=this.getDecimalForValue(t[0]),s=1===t.length?1-e:(this.getDecimalForValue(t[1])-e)/2,n=this.getDecimalForValue(t[t.length-1]),r=1===t.length?n:(n-this.getDecimalForValue(t[t.length-2]))/2);const o=t.length<3?.5:.25;s=(0,i.S)(s,0,o),r=(0,i.S)(r,0,o),this._offsets={start:s,end:r,factor:1/(s+1+r)}}_generate(){const t=this._adapter,e=this.min,n=this.max,s=this.options,r=s.time,o=r.unit||Xn(r.minUnit,e,n,this._getLabelCapacity(e)),a=(0,i.v)(s.ticks.stepSize,1),c="week"===o&&r.isoWeekday,l=(0,i.x)(c)||!0===c,h={};let u,d,f=e;if(l&&(f=+t.startOf(f,"isoWeek",c)),f=+t.startOf(f,l?"day":o),t.diff(n,e,o)>1e5*a)throw new Error(e+" and "+n+" are too far apart with stepSize of "+a+" "+o);const p="data"===s.ticks.source&&this.getDataTimestamps();for(u=f,d=0;u<n;u=+t.add(u,a,o),d++)ti(h,u,p);return u!==n&&"ticks"!==s.bounds&&1!==d||ti(h,u,p),Object.keys(h).sort(Yn).map((t=>+t))}getLabelForValue(t){const e=this._adapter,n=this.options.time;return n.tooltipFormat?e.format(t,n.tooltipFormat):e.format(t,n.displayFormats.datetime)}format(t,e){const n=this.options,i=n.time.displayFormats,s=this._unit,r=e||i[s];return this._adapter.format(t,r)}_tickFormatFunction(t,e,n,s){const r=this.options,o=r.ticks.callback;if(o)return(0,i.Q)(o,[t,e,n],this);const a=r.time.displayFormats,c=this._unit,l=this._majorUnit,h=c&&a[c],u=l&&a[l],d=n[e],f=l&&u&&d&&d.major;return this._adapter.format(t,s||(f?u:h))}generateTickLabels(t){let e,n,i;for(e=0,n=t.length;e<n;++e)i=t[e],i.label=this._tickFormatFunction(i.value,e,t)}getDecimalForValue(t){return null===t?NaN:(t-this.min)/(this.max-this.min)}getPixelForValue(t){const e=this._offsets,n=this.getDecimalForValue(t);return this.getPixelForDecimal((e.start+n)*e.factor)}getValueForPixel(t){const e=this._offsets,n=this.getDecimalForPixel(t)/e.factor-e.end;return this.min+n*(this.max-this.min)}_getLabelSize(t){const e=this.options.ticks,n=this.ctx.measureText(t).width,s=(0,i.t)(this.isHorizontal()?e.maxRotation:e.minRotation),r=Math.cos(s),o=Math.sin(s),a=this._resolveTickFontOptions(0).size;return{w:n*r+a*o,h:n*o+a*r}}_getLabelCapacity(t){const e=this.options.time,n=e.displayFormats,i=n[e.unit]||n.millisecond,s=this._tickFormatFunction(t,0,ni(this,[t],this._majorUnit),i),r=this._getLabelSize(s),o=Math.floor(this.isHorizontal()?this.width/r.w:this.height/r.h)-1;return o>0?o:1}getDataTimestamps(){let t,e,n=this._cache.data||[];if(n.length)return n;const i=this.getMatchingVisibleMetas();if(this._normalized&&i.length)return this._cache.data=i[0].controller.getAllParsedValues(this);for(t=0,e=i.length;t<e;++t)n=n.concat(i[t].controller.getAllParsedValues(this));return this._cache.data=this.normalize(n)}getLabelTimestamps(){const t=this._cache.labels||[];let e,n;if(t.length)return t;const i=this.getLabels();for(e=0,n=i.length;e<n;++e)t.push(Qn(this,i[e]));return this._cache.labels=this._normalized?t:this.normalize(t)}normalize(t){return(0,i._)(t.sort(Yn))}}ii.defaults},1014:function(t,e,n){"use strict";
/*!
 * @kurkle/color v0.3.2
 * https://github.com/kurkle/color#readme
 * (c) 2023 Jukka Kurkela
 * Released under the MIT License
 */
function i(t){return t+.5|0}n.d(e,{$:function(){return We},A:function(){return Xt},B:function(){return Qt},C:function(){return Be},D:function(){return zt},E:function(){return on},F:function(){return rt},G:function(){return Zn},H:function(){return St},I:function(){return Bn},J:function(){return ni},K:function(){return ei},L:function(){return se},M:function(){return zn},N:function(){return Dt},O:function(){return tt},P:function(){return Tt},Q:function(){return st},R:function(){return ln},S:function(){return qt},T:function(){return xt},U:function(){return Vt},V:function(){return Le},W:function(){return Kt},X:function(){return Ue},Y:function(){return $e},Z:function(){return Qe},_:function(){return ne},a:function(){return cn},a0:function(){return an},a1:function(){return oe},a2:function(){return ae},a3:function(){return Ae},a4:function(){return ht},a5:function(){return yt},a6:function(){return Oe},a7:function(){return _t},a8:function(){return dn},a9:function(){return un},aA:function(){return li},aB:function(){return ce},aC:function(){return hi},aD:function(){return ze},aE:function(){return Bt},aF:function(){return G},aG:function(){return Ft},aH:function(){return Nt},aI:function(){return Lt},aJ:function(){return Pt},aK:function(){return jt},aL:function(){return Se},aM:function(){return Ot},aN:function(){return Fe},aO:function(){return Jt},aP:function(){return Yt},aa:function(){return fn},ab:function(){return ut},ac:function(){return Y},ad:function(){return re},ae:function(){return ti},af:function(){return Ve},ag:function(){return bt},ah:function(){return ot},ai:function(){return wt},aj:function(){return Gt},ak:function(){return nn},al:function(){return jn},am:function(){return vi},an:function(){return gi},ao:function(){return si},ap:function(){return ri},aq:function(){return ii},ar:function(){return He},as:function(){return qe},at:function(){return je},au:function(){return Xe},av:function(){return sn},aw:function(){return rn},ax:function(){return pi},ay:function(){return Wt},az:function(){return ci},b:function(){return X},c:function(){return me},d:function(){return De},e:function(){return pe},f:function(){return mt},g:function(){return Z},h:function(){return vt},i:function(){return J},j:function(){return hn},k:function(){return Q},l:function(){return te},m:function(){return nt},n:function(){return it},o:function(){return Ee},p:function(){return Ht},q:function(){return le},r:function(){return ie},s:function(){return Rt},t:function(){return Ut},u:function(){return ee},v:function(){return et},w:function(){return he},x:function(){return Mt},y:function(){return On},z:function(){return Qn}});const s=(t,e,n)=>Math.max(Math.min(t,n),e);function r(t){return s(i(2.55*t),0,255)}function o(t){return s(i(255*t),0,255)}function a(t){return s(i(t/2.55)/100,0,1)}function c(t){return s(i(100*t),0,100)}const l={0:0,1:1,2:2,3:3,4:4,5:5,6:6,7:7,8:8,9:9,A:10,B:11,C:12,D:13,E:14,F:15,a:10,b:11,c:12,d:13,e:14,f:15},h=[..."0123456789ABCDEF"],u=t=>h[15&t],d=t=>h[(240&t)>>4]+h[15&t],f=t=>(240&t)>>4===(15&t),p=t=>f(t.r)&&f(t.g)&&f(t.b)&&f(t.a);function g(t){var e,n=t.length;return"#"===t[0]&&(4===n||5===n?e={r:255&17*l[t[1]],g:255&17*l[t[2]],b:255&17*l[t[3]],a:5===n?17*l[t[4]]:255}:7!==n&&9!==n||(e={r:l[t[1]]<<4|l[t[2]],g:l[t[3]]<<4|l[t[4]],b:l[t[5]]<<4|l[t[6]],a:9===n?l[t[7]]<<4|l[t[8]]:255})),e}const m=(t,e)=>t<255?e(t):"";function y(t){var e=p(t)?u:d;return t?"#"+e(t.r)+e(t.g)+e(t.b)+m(t.a,e):void 0}const v=/^(hsla?|hwb|hsv)\(\s*([-+.e\d]+)(?:deg)?[\s,]+([-+.e\d]+)%[\s,]+([-+.e\d]+)%(?:[\s,]+([-+.e\d]+)(%)?)?\s*\)$/;function _(t,e,n){const i=e*Math.min(n,1-n),s=(e,s=(e+t/30)%12)=>n-i*Math.max(Math.min(s-3,9-s,1),-1);return[s(0),s(8),s(4)]}function b(t,e,n){const i=(i,s=(i+t/60)%6)=>n-n*e*Math.max(Math.min(s,4-s,1),0);return[i(5),i(3),i(1)]}function w(t,e,n){const i=_(t,1,.5);let s;for(e+n>1&&(s=1/(e+n),e*=s,n*=s),s=0;s<3;s++)i[s]*=1-e-n,i[s]+=e;return i}function T(t,e,n,i,s){return t===s?(e-n)/i+(e<n?6:0):e===s?(n-t)/i+2:(t-e)/i+4}function x(t){const e=255,n=t.r/e,i=t.g/e,s=t.b/e,r=Math.max(n,i,s),o=Math.min(n,i,s),a=(r+o)/2;let c,l,h;return r!==o&&(h=r-o,l=a>.5?h/(2-r-o):h/(r+o),c=T(n,i,s,h,r),c=60*c+.5),[0|c,l||0,a]}function E(t,e,n,i){return(Array.isArray(e)?t(e[0],e[1],e[2]):t(e,n,i)).map(o)}function C(t,e,n){return E(_,t,e,n)}function I(t,e,n){return E(w,t,e,n)}function S(t,e,n){return E(b,t,e,n)}function k(t){return(t%360+360)%360}function A(t){const e=v.exec(t);let n,i=255;if(!e)return;e[5]!==n&&(i=e[6]?r(+e[5]):o(+e[5]));const s=k(+e[2]),a=+e[3]/100,c=+e[4]/100;return n="hwb"===e[1]?I(s,a,c):"hsv"===e[1]?S(s,a,c):C(s,a,c),{r:n[0],g:n[1],b:n[2],a:i}}function O(t,e){var n=x(t);n[0]=k(n[0]+e),n=C(n),t.r=n[0],t.g=n[1],t.b=n[2]}function R(t){if(!t)return;const e=x(t),n=e[0],i=c(e[1]),s=c(e[2]);return t.a<255?`hsla(${n}, ${i}%, ${s}%, ${a(t.a)})`:`hsl(${n}, ${i}%, ${s}%)`}const P={x:"dark",Z:"light",Y:"re",X:"blu",W:"gr",V:"medium",U:"slate",A:"ee",T:"ol",S:"or",B:"ra",C:"lateg",D:"ights",R:"in",Q:"turquois",E:"hi",P:"ro",O:"al",N:"le",M:"de",L:"yello",F:"en",K:"ch",G:"arks",H:"ea",I:"ightg",J:"wh"},N={OiceXe:"f0f8ff",antiquewEte:"faebd7",aqua:"ffff",aquamarRe:"7fffd4",azuY:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"0",blanKedOmond:"ffebcd",Xe:"ff",XeviTet:"8a2be2",bPwn:"a52a2a",burlywood:"deb887",caMtXe:"5f9ea0",KartYuse:"7fff00",KocTate:"d2691e",cSO:"ff7f50",cSnflowerXe:"6495ed",cSnsilk:"fff8dc",crimson:"dc143c",cyan:"ffff",xXe:"8b",xcyan:"8b8b",xgTMnPd:"b8860b",xWay:"a9a9a9",xgYF:"6400",xgYy:"a9a9a9",xkhaki:"bdb76b",xmagFta:"8b008b",xTivegYF:"556b2f",xSange:"ff8c00",xScEd:"9932cc",xYd:"8b0000",xsOmon:"e9967a",xsHgYF:"8fbc8f",xUXe:"483d8b",xUWay:"2f4f4f",xUgYy:"2f4f4f",xQe:"ced1",xviTet:"9400d3",dAppRk:"ff1493",dApskyXe:"bfff",dimWay:"696969",dimgYy:"696969",dodgerXe:"1e90ff",fiYbrick:"b22222",flSOwEte:"fffaf0",foYstWAn:"228b22",fuKsia:"ff00ff",gaRsbSo:"dcdcdc",ghostwEte:"f8f8ff",gTd:"ffd700",gTMnPd:"daa520",Way:"808080",gYF:"8000",gYFLw:"adff2f",gYy:"808080",honeyMw:"f0fff0",hotpRk:"ff69b4",RdianYd:"cd5c5c",Rdigo:"4b0082",ivSy:"fffff0",khaki:"f0e68c",lavFMr:"e6e6fa",lavFMrXsh:"fff0f5",lawngYF:"7cfc00",NmoncEffon:"fffacd",ZXe:"add8e6",ZcSO:"f08080",Zcyan:"e0ffff",ZgTMnPdLw:"fafad2",ZWay:"d3d3d3",ZgYF:"90ee90",ZgYy:"d3d3d3",ZpRk:"ffb6c1",ZsOmon:"ffa07a",ZsHgYF:"20b2aa",ZskyXe:"87cefa",ZUWay:"778899",ZUgYy:"778899",ZstAlXe:"b0c4de",ZLw:"ffffe0",lime:"ff00",limegYF:"32cd32",lRF:"faf0e6",magFta:"ff00ff",maPon:"800000",VaquamarRe:"66cdaa",VXe:"cd",VScEd:"ba55d3",VpurpN:"9370db",VsHgYF:"3cb371",VUXe:"7b68ee",VsprRggYF:"fa9a",VQe:"48d1cc",VviTetYd:"c71585",midnightXe:"191970",mRtcYam:"f5fffa",mistyPse:"ffe4e1",moccasR:"ffe4b5",navajowEte:"ffdead",navy:"80",Tdlace:"fdf5e6",Tive:"808000",TivedBb:"6b8e23",Sange:"ffa500",SangeYd:"ff4500",ScEd:"da70d6",pOegTMnPd:"eee8aa",pOegYF:"98fb98",pOeQe:"afeeee",pOeviTetYd:"db7093",papayawEp:"ffefd5",pHKpuff:"ffdab9",peru:"cd853f",pRk:"ffc0cb",plum:"dda0dd",powMrXe:"b0e0e6",purpN:"800080",YbeccapurpN:"663399",Yd:"ff0000",Psybrown:"bc8f8f",PyOXe:"4169e1",saddNbPwn:"8b4513",sOmon:"fa8072",sandybPwn:"f4a460",sHgYF:"2e8b57",sHshell:"fff5ee",siFna:"a0522d",silver:"c0c0c0",skyXe:"87ceeb",UXe:"6a5acd",UWay:"708090",UgYy:"708090",snow:"fffafa",sprRggYF:"ff7f",stAlXe:"4682b4",tan:"d2b48c",teO:"8080",tEstN:"d8bfd8",tomato:"ff6347",Qe:"40e0d0",viTet:"ee82ee",JHt:"f5deb3",wEte:"ffffff",wEtesmoke:"f5f5f5",Lw:"ffff00",LwgYF:"9acd32"};function D(){const t={},e=Object.keys(N),n=Object.keys(P);let i,s,r,o,a;for(i=0;i<e.length;i++){for(o=a=e[i],s=0;s<n.length;s++)r=n[s],a=a.replace(r,P[r]);r=parseInt(N[o],16),t[a]=[r>>16&255,r>>8&255,255&r]}return t}let M;function L(t){M||(M=D(),M.transparent=[0,0,0,0]);const e=M[t.toLowerCase()];return e&&{r:e[0],g:e[1],b:e[2],a:4===e.length?e[3]:255}}const F=/^rgba?\(\s*([-+.\d]+)(%)?[\s,]+([-+.e\d]+)(%)?[\s,]+([-+.e\d]+)(%)?(?:[\s,/]+([-+.e\d]+)(%)?)?\s*\)$/;function U(t){const e=F.exec(t);let n,i,o,a=255;if(e){if(e[7]!==n){const t=+e[7];a=e[8]?r(t):s(255*t,0,255)}return n=+e[1],i=+e[3],o=+e[5],n=255&(e[2]?r(n):s(n,0,255)),i=255&(e[4]?r(i):s(i,0,255)),o=255&(e[6]?r(o):s(o,0,255)),{r:n,g:i,b:o,a:a}}}function V(t){return t&&(t.a<255?`rgba(${t.r}, ${t.g}, ${t.b}, ${a(t.a)})`:`rgb(${t.r}, ${t.g}, ${t.b})`)}const j=t=>t<=.0031308?12.92*t:1.055*Math.pow(t,1/2.4)-.055,z=t=>t<=.04045?t/12.92:Math.pow((t+.055)/1.055,2.4);function B(t,e,n){const i=z(a(t.r)),s=z(a(t.g)),r=z(a(t.b));return{r:o(j(i+n*(z(a(e.r))-i))),g:o(j(s+n*(z(a(e.g))-s))),b:o(j(r+n*(z(a(e.b))-r))),a:t.a+n*(e.a-t.a)}}function $(t,e,n){if(t){let i=x(t);i[e]=Math.max(0,Math.min(i[e]+i[e]*n,0===e?360:1)),i=C(i),t.r=i[0],t.g=i[1],t.b=i[2]}}function W(t,e){return t?Object.assign(e||{},t):t}function H(t){var e={r:0,g:0,b:0,a:255};return Array.isArray(t)?t.length>=3&&(e={r:t[0],g:t[1],b:t[2],a:255},t.length>3&&(e.a=o(t[3]))):(e=W(t,{r:0,g:0,b:0,a:1}),e.a=o(e.a)),e}function q(t){return"r"===t.charAt(0)?U(t):A(t)}class K{constructor(t){if(t instanceof K)return t;const e=typeof t;let n;"object"===e?n=H(t):"string"===e&&(n=g(t)||L(t)||q(t)),this._rgb=n,this._valid=!!n}get valid(){return this._valid}get rgb(){var t=W(this._rgb);return t&&(t.a=a(t.a)),t}set rgb(t){this._rgb=H(t)}rgbString(){return this._valid?V(this._rgb):void 0}hexString(){return this._valid?y(this._rgb):void 0}hslString(){return this._valid?R(this._rgb):void 0}mix(t,e){if(t){const n=this.rgb,i=t.rgb;let s;const r=e===s?.5:e,o=2*r-1,a=n.a-i.a,c=((o*a===-1?o:(o+a)/(1+o*a))+1)/2;s=1-c,n.r=255&c*n.r+s*i.r+.5,n.g=255&c*n.g+s*i.g+.5,n.b=255&c*n.b+s*i.b+.5,n.a=r*n.a+(1-r)*i.a,this.rgb=n}return this}interpolate(t,e){return t&&(this._rgb=B(this._rgb,t._rgb,e)),this}clone(){return new K(this.rgb)}alpha(t){return this._rgb.a=o(t),this}clearer(t){const e=this._rgb;return e.a*=1-t,this}greyscale(){const t=this._rgb,e=i(.3*t.r+.59*t.g+.11*t.b);return t.r=t.g=t.b=e,this}opaquer(t){const e=this._rgb;return e.a*=1+t,this}negate(){const t=this._rgb;return t.r=255-t.r,t.g=255-t.g,t.b=255-t.b,this}lighten(t){return $(this._rgb,2,t),this}darken(t){return $(this._rgb,2,-t),this}saturate(t){return $(this._rgb,1,t),this}desaturate(t){return $(this._rgb,1,-t),this}rotate(t){return O(this._rgb,t),this}}
/*!
 * Chart.js v4.4.5
 * https://www.chartjs.org
 * (c) 2024 Chart.js Contributors
 * Released under the MIT License
 */
function G(){}const Y=(()=>{let t=0;return()=>t++})();function Q(t){return null===t||"undefined"===typeof t}function X(t){if(Array.isArray&&Array.isArray(t))return!0;const e=Object.prototype.toString.call(t);return"[object"===e.slice(0,7)&&"Array]"===e.slice(-6)}function J(t){return null!==t&&"[object Object]"===Object.prototype.toString.call(t)}function Z(t){return("number"===typeof t||t instanceof Number)&&isFinite(+t)}function tt(t,e){return Z(t)?t:e}function et(t,e){return"undefined"===typeof t?e:t}const nt=(t,e)=>"string"===typeof t&&t.endsWith("%")?parseFloat(t)/100:+t/e,it=(t,e)=>"string"===typeof t&&t.endsWith("%")?parseFloat(t)/100*e:+t;function st(t,e,n){if(t&&"function"===typeof t.call)return t.apply(n,e)}function rt(t,e,n,i){let s,r,o;if(X(t))if(r=t.length,i)for(s=r-1;s>=0;s--)e.call(n,t[s],s);else for(s=0;s<r;s++)e.call(n,t[s],s);else if(J(t))for(o=Object.keys(t),r=o.length,s=0;s<r;s++)e.call(n,t[o[s]],o[s])}function ot(t,e){let n,i,s,r;if(!t||!e||t.length!==e.length)return!1;for(n=0,i=t.length;n<i;++n)if(s=t[n],r=e[n],s.datasetIndex!==r.datasetIndex||s.index!==r.index)return!1;return!0}function at(t){if(X(t))return t.map(at);if(J(t)){const e=Object.create(null),n=Object.keys(t),i=n.length;let s=0;for(;s<i;++s)e[n[s]]=at(t[n[s]]);return e}return t}function ct(t){return-1===["__proto__","prototype","constructor"].indexOf(t)}function lt(t,e,n,i){if(!ct(t))return;const s=e[t],r=n[t];J(s)&&J(r)?ht(s,r,i):e[t]=at(r)}function ht(t,e,n){const i=X(e)?e:[e],s=i.length;if(!J(t))return t;n=n||{};const r=n.merger||lt;let o;for(let a=0;a<s;++a){if(o=i[a],!J(o))continue;const e=Object.keys(o);for(let i=0,s=e.length;i<s;++i)r(e[i],t,o,n)}return t}function ut(t,e){return ht(t,e,{merger:dt})}function dt(t,e,n){if(!ct(t))return;const i=e[t],s=n[t];J(i)&&J(s)?ut(i,s):Object.prototype.hasOwnProperty.call(e,t)||(e[t]=at(s))}const ft={"":t=>t,x:t=>t.x,y:t=>t.y};function pt(t){const e=t.split("."),n=[];let i="";for(const s of e)i+=s,i.endsWith("\\")?i=i.slice(0,-1)+".":(n.push(i),i="");return n}function gt(t){const e=pt(t);return t=>{for(const n of e){if(""===n)break;t=t&&t[n]}return t}}function mt(t,e){const n=ft[e]||(ft[e]=gt(e));return n(t)}function yt(t){return t.charAt(0).toUpperCase()+t.slice(1)}const vt=t=>"undefined"!==typeof t,_t=t=>"function"===typeof t,bt=(t,e)=>{if(t.size!==e.size)return!1;for(const n of t)if(!e.has(n))return!1;return!0};function wt(t){return"mouseup"===t.type||"click"===t.type||"contextmenu"===t.type}const Tt=Math.PI,xt=2*Tt,Et=xt+Tt,Ct=Number.POSITIVE_INFINITY,It=Tt/180,St=Tt/2,kt=Tt/4,At=2*Tt/3,Ot=Math.log10,Rt=Math.sign;function Pt(t,e,n){return Math.abs(t-e)<n}function Nt(t){const e=Math.round(t);t=Pt(t,e,t/1e3)?e:t;const n=Math.pow(10,Math.floor(Ot(t))),i=t/n,s=i<=1?1:i<=2?2:i<=5?5:10;return s*n}function Dt(t){const e=[],n=Math.sqrt(t);let i;for(i=1;i<n;i++)t%i===0&&(e.push(i),e.push(t/i));return n===(0|n)&&e.push(n),e.sort(((t,e)=>t-e)).pop(),e}function Mt(t){return!isNaN(parseFloat(t))&&isFinite(t)}function Lt(t,e){const n=Math.round(t);return n-e<=t&&n+e>=t}function Ft(t,e,n){let i,s,r;for(i=0,s=t.length;i<s;i++)r=t[i][n],isNaN(r)||(e.min=Math.min(e.min,r),e.max=Math.max(e.max,r))}function Ut(t){return t*(Tt/180)}function Vt(t){return t*(180/Tt)}function jt(t){if(!Z(t))return;let e=1,n=0;while(Math.round(t*e)/e!==t)e*=10,n++;return n}function zt(t,e){const n=e.x-t.x,i=e.y-t.y,s=Math.sqrt(n*n+i*i);let r=Math.atan2(i,n);return r<-.5*Tt&&(r+=xt),{angle:r,distance:s}}function Bt(t,e){return Math.sqrt(Math.pow(e.x-t.x,2)+Math.pow(e.y-t.y,2))}function $t(t,e){return(t-e+Et)%xt-Tt}function Wt(t){return(t%xt+xt)%xt}function Ht(t,e,n,i){const s=Wt(t),r=Wt(e),o=Wt(n),a=Wt(r-s),c=Wt(o-s),l=Wt(s-r),h=Wt(s-o);return s===r||s===o||i&&r===o||a>c&&l<h}function qt(t,e,n){return Math.max(e,Math.min(n,t))}function Kt(t){return qt(t,-32768,32767)}function Gt(t,e,n,i=1e-6){return t>=Math.min(e,n)-i&&t<=Math.max(e,n)+i}function Yt(t,e,n){n=n||(n=>t[n]<e);let i,s=t.length-1,r=0;while(s-r>1)i=r+s>>1,n(i)?r=i:s=i;return{lo:r,hi:s}}const Qt=(t,e,n,i)=>Yt(t,n,i?i=>{const s=t[i][e];return s<n||s===n&&t[i+1][e]===n}:i=>t[i][e]<n),Xt=(t,e,n)=>Yt(t,n,(i=>t[i][e]>=n));function Jt(t,e,n){let i=0,s=t.length;while(i<s&&t[i]<e)i++;while(s>i&&t[s-1]>n)s--;return i>0||s<t.length?t.slice(i,s):t}const Zt=["push","pop","shift","splice","unshift"];function te(t,e){t._chartjs?t._chartjs.listeners.push(e):(Object.defineProperty(t,"_chartjs",{configurable:!0,enumerable:!1,value:{listeners:[e]}}),Zt.forEach((e=>{const n="_onData"+yt(e),i=t[e];Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value(...e){const s=i.apply(this,e);return t._chartjs.listeners.forEach((t=>{"function"===typeof t[n]&&t[n](...e)})),s}})})))}function ee(t,e){const n=t._chartjs;if(!n)return;const i=n.listeners,s=i.indexOf(e);-1!==s&&i.splice(s,1),i.length>0||(Zt.forEach((e=>{delete t[e]})),delete t._chartjs)}function ne(t){const e=new Set(t);return e.size===t.length?t:Array.from(e)}const ie=function(){return"undefined"===typeof window?function(t){return t()}:window.requestAnimationFrame}();function se(t,e){let n=[],i=!1;return function(...s){n=s,i||(i=!0,ie.call(window,(()=>{i=!1,t.apply(e,n)})))}}function re(t,e){let n;return function(...i){return e?(clearTimeout(n),n=setTimeout(t,e,i)):t.apply(this,i),e}}const oe=t=>"start"===t?"left":"end"===t?"right":"center",ae=(t,e,n)=>"start"===t?e:"end"===t?n:(e+n)/2,ce=(t,e,n,i)=>{const s=i?"left":"right";return t===s?n:"center"===t?(e+n)/2:e};function le(t,e,n){const i=e.length;let s=0,r=i;if(t._sorted){const{iScale:o,_parsed:a}=t,c=o.axis,{min:l,max:h,minDefined:u,maxDefined:d}=o.getUserBounds();u&&(s=qt(Math.min(Qt(a,c,l).lo,n?i:Qt(e,c,o.getPixelForValue(l)).lo),0,i-1)),r=d?qt(Math.max(Qt(a,o.axis,h,!0).hi+1,n?0:Qt(e,c,o.getPixelForValue(h),!0).hi+1),s,i)-s:i-s}return{start:s,count:r}}function he(t){const{xScale:e,yScale:n,_scaleRanges:i}=t,s={xmin:e.min,xmax:e.max,ymin:n.min,ymax:n.max};if(!i)return t._scaleRanges=s,!0;const r=i.xmin!==e.min||i.xmax!==e.max||i.ymin!==n.min||i.ymax!==n.max;return Object.assign(i,s),r}const ue=t=>0===t||1===t,de=(t,e,n)=>-Math.pow(2,10*(t-=1))*Math.sin((t-e)*xt/n),fe=(t,e,n)=>Math.pow(2,-10*t)*Math.sin((t-e)*xt/n)+1,pe={linear:t=>t,easeInQuad:t=>t*t,easeOutQuad:t=>-t*(t-2),easeInOutQuad:t=>(t/=.5)<1?.5*t*t:-.5*(--t*(t-2)-1),easeInCubic:t=>t*t*t,easeOutCubic:t=>(t-=1)*t*t+1,easeInOutCubic:t=>(t/=.5)<1?.5*t*t*t:.5*((t-=2)*t*t+2),easeInQuart:t=>t*t*t*t,easeOutQuart:t=>-((t-=1)*t*t*t-1),easeInOutQuart:t=>(t/=.5)<1?.5*t*t*t*t:-.5*((t-=2)*t*t*t-2),easeInQuint:t=>t*t*t*t*t,easeOutQuint:t=>(t-=1)*t*t*t*t+1,easeInOutQuint:t=>(t/=.5)<1?.5*t*t*t*t*t:.5*((t-=2)*t*t*t*t+2),easeInSine:t=>1-Math.cos(t*St),easeOutSine:t=>Math.sin(t*St),easeInOutSine:t=>-.5*(Math.cos(Tt*t)-1),easeInExpo:t=>0===t?0:Math.pow(2,10*(t-1)),easeOutExpo:t=>1===t?1:1-Math.pow(2,-10*t),easeInOutExpo:t=>ue(t)?t:t<.5?.5*Math.pow(2,10*(2*t-1)):.5*(2-Math.pow(2,-10*(2*t-1))),easeInCirc:t=>t>=1?t:-(Math.sqrt(1-t*t)-1),easeOutCirc:t=>Math.sqrt(1-(t-=1)*t),easeInOutCirc:t=>(t/=.5)<1?-.5*(Math.sqrt(1-t*t)-1):.5*(Math.sqrt(1-(t-=2)*t)+1),easeInElastic:t=>ue(t)?t:de(t,.075,.3),easeOutElastic:t=>ue(t)?t:fe(t,.075,.3),easeInOutElastic(t){const e=.1125,n=.45;return ue(t)?t:t<.5?.5*de(2*t,e,n):.5+.5*fe(2*t-1,e,n)},easeInBack(t){const e=1.70158;return t*t*((e+1)*t-e)},easeOutBack(t){const e=1.70158;return(t-=1)*t*((e+1)*t+e)+1},easeInOutBack(t){let e=1.70158;return(t/=.5)<1?t*t*((1+(e*=1.525))*t-e)*.5:.5*((t-=2)*t*((1+(e*=1.525))*t+e)+2)},easeInBounce:t=>1-pe.easeOutBounce(1-t),easeOutBounce(t){const e=7.5625,n=2.75;return t<1/n?e*t*t:t<2/n?e*(t-=1.5/n)*t+.75:t<2.5/n?e*(t-=2.25/n)*t+.9375:e*(t-=2.625/n)*t+.984375},easeInOutBounce:t=>t<.5?.5*pe.easeInBounce(2*t):.5*pe.easeOutBounce(2*t-1)+.5};function ge(t){if(t&&"object"===typeof t){const e=t.toString();return"[object CanvasPattern]"===e||"[object CanvasGradient]"===e}return!1}function me(t){return ge(t)?t:new K(t)}function ye(t){return ge(t)?t:new K(t).saturate(.5).darken(.1).hexString()}const ve=["x","y","borderWidth","radius","tension"],_e=["color","borderColor","backgroundColor"];function be(t){t.set("animation",{delay:void 0,duration:1e3,easing:"easeOutQuart",fn:void 0,from:void 0,loop:void 0,to:void 0,type:void 0}),t.describe("animation",{_fallback:!1,_indexable:!1,_scriptable:t=>"onProgress"!==t&&"onComplete"!==t&&"fn"!==t}),t.set("animations",{colors:{type:"color",properties:_e},numbers:{type:"number",properties:ve}}),t.describe("animations",{_fallback:"animation"}),t.set("transitions",{active:{animation:{duration:400}},resize:{animation:{duration:0}},show:{animations:{colors:{from:"transparent"},visible:{type:"boolean",duration:0}}},hide:{animations:{colors:{to:"transparent"},visible:{type:"boolean",easing:"linear",fn:t=>0|t}}}})}function we(t){t.set("layout",{autoPadding:!0,padding:{top:0,right:0,bottom:0,left:0}})}const Te=new Map;function xe(t,e){e=e||{};const n=t+JSON.stringify(e);let i=Te.get(n);return i||(i=new Intl.NumberFormat(t,e),Te.set(n,i)),i}function Ee(t,e,n){return xe(e,n).format(t)}const Ce={values(t){return X(t)?t:""+t},numeric(t,e,n){if(0===t)return"0";const i=this.chart.options.locale;let s,r=t;if(n.length>1){const e=Math.max(Math.abs(n[0].value),Math.abs(n[n.length-1].value));(e<1e-4||e>1e15)&&(s="scientific"),r=Ie(t,n)}const o=Ot(Math.abs(r)),a=isNaN(o)?1:Math.max(Math.min(-1*Math.floor(o),20),0),c={notation:s,minimumFractionDigits:a,maximumFractionDigits:a};return Object.assign(c,this.options.ticks.format),Ee(t,i,c)},logarithmic(t,e,n){if(0===t)return"0";const i=n[e].significand||t/Math.pow(10,Math.floor(Ot(t)));return[1,2,3,5,10,15].includes(i)||e>.8*n.length?Ce.numeric.call(this,t,e,n):""}};function Ie(t,e){let n=e.length>3?e[2].value-e[1].value:e[1].value-e[0].value;return Math.abs(n)>=1&&t!==Math.floor(t)&&(n=t-Math.floor(t)),n}var Se={formatters:Ce};function ke(t){t.set("scale",{display:!0,offset:!1,reverse:!1,beginAtZero:!1,bounds:"ticks",clip:!0,grace:0,grid:{display:!0,lineWidth:1,drawOnChartArea:!0,drawTicks:!0,tickLength:8,tickWidth:(t,e)=>e.lineWidth,tickColor:(t,e)=>e.color,offset:!1},border:{display:!0,dash:[],dashOffset:0,width:1},title:{display:!1,text:"",padding:{top:4,bottom:4}},ticks:{minRotation:0,maxRotation:50,mirror:!1,textStrokeWidth:0,textStrokeColor:"",padding:3,display:!0,autoSkip:!0,autoSkipPadding:3,labelOffset:0,callback:Se.formatters.values,minor:{},major:{},align:"center",crossAlign:"near",showLabelBackdrop:!1,backdropColor:"rgba(255, 255, 255, 0.75)",backdropPadding:2}}),t.route("scale.ticks","color","","color"),t.route("scale.grid","color","","borderColor"),t.route("scale.border","color","","borderColor"),t.route("scale.title","color","","color"),t.describe("scale",{_fallback:!1,_scriptable:t=>!t.startsWith("before")&&!t.startsWith("after")&&"callback"!==t&&"parser"!==t,_indexable:t=>"borderDash"!==t&&"tickBorderDash"!==t&&"dash"!==t}),t.describe("scales",{_fallback:"scale"}),t.describe("scale.ticks",{_scriptable:t=>"backdropPadding"!==t&&"callback"!==t,_indexable:t=>"backdropPadding"!==t})}const Ae=Object.create(null),Oe=Object.create(null);function Re(t,e){if(!e)return t;const n=e.split(".");for(let i=0,s=n.length;i<s;++i){const e=n[i];t=t[e]||(t[e]=Object.create(null))}return t}function Pe(t,e,n){return"string"===typeof e?ht(Re(t,e),n):ht(Re(t,""),e)}class Ne{constructor(t,e){this.animation=void 0,this.backgroundColor="rgba(0,0,0,0.1)",this.borderColor="rgba(0,0,0,0.1)",this.color="#666",this.datasets={},this.devicePixelRatio=t=>t.chart.platform.getDevicePixelRatio(),this.elements={},this.events=["mousemove","mouseout","click","touchstart","touchmove"],this.font={family:"'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",size:12,style:"normal",lineHeight:1.2,weight:null},this.hover={},this.hoverBackgroundColor=(t,e)=>ye(e.backgroundColor),this.hoverBorderColor=(t,e)=>ye(e.borderColor),this.hoverColor=(t,e)=>ye(e.color),this.indexAxis="x",this.interaction={mode:"nearest",intersect:!0,includeInvisible:!1},this.maintainAspectRatio=!0,this.onHover=null,this.onClick=null,this.parsing=!0,this.plugins={},this.responsive=!0,this.scale=void 0,this.scales={},this.showLine=!0,this.drawActiveElementsOnTop=!0,this.describe(t),this.apply(e)}set(t,e){return Pe(this,t,e)}get(t){return Re(this,t)}describe(t,e){return Pe(Oe,t,e)}override(t,e){return Pe(Ae,t,e)}route(t,e,n,i){const s=Re(this,t),r=Re(this,n),o="_"+e;Object.defineProperties(s,{[o]:{value:s[e],writable:!0},[e]:{enumerable:!0,get(){const t=this[o],e=r[i];return J(t)?Object.assign({},e,t):et(t,e)},set(t){this[o]=t}}})}apply(t){t.forEach((t=>t(this)))}}var De=new Ne({_scriptable:t=>!t.startsWith("on"),_indexable:t=>"events"!==t,hover:{_fallback:"interaction"},interaction:{_scriptable:!1,_indexable:!1}},[be,we,ke]);function Me(t){return!t||Q(t.size)||Q(t.family)?null:(t.style?t.style+" ":"")+(t.weight?t.weight+" ":"")+t.size+"px "+t.family}function Le(t,e,n,i,s){let r=e[s];return r||(r=e[s]=t.measureText(s).width,n.push(s)),r>i&&(i=r),i}function Fe(t,e,n,i){i=i||{};let s=i.data=i.data||{},r=i.garbageCollect=i.garbageCollect||[];i.font!==e&&(s=i.data={},r=i.garbageCollect=[],i.font=e),t.save(),t.font=e;let o=0;const a=n.length;let c,l,h,u,d;for(c=0;c<a;c++)if(u=n[c],void 0===u||null===u||X(u)){if(X(u))for(l=0,h=u.length;l<h;l++)d=u[l],void 0===d||null===d||X(d)||(o=Le(t,s,r,o,d))}else o=Le(t,s,r,o,u);t.restore();const f=r.length/2;if(f>n.length){for(c=0;c<f;c++)delete s[r[c]];r.splice(0,f)}return o}function Ue(t,e,n){const i=t.currentDevicePixelRatio,s=0!==n?Math.max(n/2,.5):0;return Math.round((e-s)*i)/i+s}function Ve(t,e){(e||t)&&(e=e||t.getContext("2d"),e.save(),e.resetTransform(),e.clearRect(0,0,t.width,t.height),e.restore())}function je(t,e,n,i){ze(t,e,n,i,null)}function ze(t,e,n,i,s){let r,o,a,c,l,h,u,d;const f=e.pointStyle,p=e.rotation,g=e.radius;let m=(p||0)*It;if(f&&"object"===typeof f&&(r=f.toString(),"[object HTMLImageElement]"===r||"[object HTMLCanvasElement]"===r))return t.save(),t.translate(n,i),t.rotate(m),t.drawImage(f,-f.width/2,-f.height/2,f.width,f.height),void t.restore();if(!(isNaN(g)||g<=0)){switch(t.beginPath(),f){default:s?t.ellipse(n,i,s/2,g,0,0,xt):t.arc(n,i,g,0,xt),t.closePath();break;case"triangle":h=s?s/2:g,t.moveTo(n+Math.sin(m)*h,i-Math.cos(m)*g),m+=At,t.lineTo(n+Math.sin(m)*h,i-Math.cos(m)*g),m+=At,t.lineTo(n+Math.sin(m)*h,i-Math.cos(m)*g),t.closePath();break;case"rectRounded":l=.516*g,c=g-l,o=Math.cos(m+kt)*c,u=Math.cos(m+kt)*(s?s/2-l:c),a=Math.sin(m+kt)*c,d=Math.sin(m+kt)*(s?s/2-l:c),t.arc(n-u,i-a,l,m-Tt,m-St),t.arc(n+d,i-o,l,m-St,m),t.arc(n+u,i+a,l,m,m+St),t.arc(n-d,i+o,l,m+St,m+Tt),t.closePath();break;case"rect":if(!p){c=Math.SQRT1_2*g,h=s?s/2:c,t.rect(n-h,i-c,2*h,2*c);break}m+=kt;case"rectRot":u=Math.cos(m)*(s?s/2:g),o=Math.cos(m)*g,a=Math.sin(m)*g,d=Math.sin(m)*(s?s/2:g),t.moveTo(n-u,i-a),t.lineTo(n+d,i-o),t.lineTo(n+u,i+a),t.lineTo(n-d,i+o),t.closePath();break;case"crossRot":m+=kt;case"cross":u=Math.cos(m)*(s?s/2:g),o=Math.cos(m)*g,a=Math.sin(m)*g,d=Math.sin(m)*(s?s/2:g),t.moveTo(n-u,i-a),t.lineTo(n+u,i+a),t.moveTo(n+d,i-o),t.lineTo(n-d,i+o);break;case"star":u=Math.cos(m)*(s?s/2:g),o=Math.cos(m)*g,a=Math.sin(m)*g,d=Math.sin(m)*(s?s/2:g),t.moveTo(n-u,i-a),t.lineTo(n+u,i+a),t.moveTo(n+d,i-o),t.lineTo(n-d,i+o),m+=kt,u=Math.cos(m)*(s?s/2:g),o=Math.cos(m)*g,a=Math.sin(m)*g,d=Math.sin(m)*(s?s/2:g),t.moveTo(n-u,i-a),t.lineTo(n+u,i+a),t.moveTo(n+d,i-o),t.lineTo(n-d,i+o);break;case"line":o=s?s/2:Math.cos(m)*g,a=Math.sin(m)*g,t.moveTo(n-o,i-a),t.lineTo(n+o,i+a);break;case"dash":t.moveTo(n,i),t.lineTo(n+Math.cos(m)*(s?s/2:g),i+Math.sin(m)*g);break;case!1:t.closePath();break}t.fill(),e.borderWidth>0&&t.stroke()}}function Be(t,e,n){return n=n||.5,!e||t&&t.x>e.left-n&&t.x<e.right+n&&t.y>e.top-n&&t.y<e.bottom+n}function $e(t,e){t.save(),t.beginPath(),t.rect(e.left,e.top,e.right-e.left,e.bottom-e.top),t.clip()}function We(t){t.restore()}function He(t,e,n,i,s){if(!e)return t.lineTo(n.x,n.y);if("middle"===s){const i=(e.x+n.x)/2;t.lineTo(i,e.y),t.lineTo(i,n.y)}else"after"===s!==!!i?t.lineTo(e.x,n.y):t.lineTo(n.x,e.y);t.lineTo(n.x,n.y)}function qe(t,e,n,i){if(!e)return t.lineTo(n.x,n.y);t.bezierCurveTo(i?e.cp1x:e.cp2x,i?e.cp1y:e.cp2y,i?n.cp2x:n.cp1x,i?n.cp2y:n.cp1y,n.x,n.y)}function Ke(t,e){e.translation&&t.translate(e.translation[0],e.translation[1]),Q(e.rotation)||t.rotate(e.rotation),e.color&&(t.fillStyle=e.color),e.textAlign&&(t.textAlign=e.textAlign),e.textBaseline&&(t.textBaseline=e.textBaseline)}function Ge(t,e,n,i,s){if(s.strikethrough||s.underline){const r=t.measureText(i),o=e-r.actualBoundingBoxLeft,a=e+r.actualBoundingBoxRight,c=n-r.actualBoundingBoxAscent,l=n+r.actualBoundingBoxDescent,h=s.strikethrough?(c+l)/2:l;t.strokeStyle=t.fillStyle,t.beginPath(),t.lineWidth=s.decorationWidth||2,t.moveTo(o,h),t.lineTo(a,h),t.stroke()}}function Ye(t,e){const n=t.fillStyle;t.fillStyle=e.color,t.fillRect(e.left,e.top,e.width,e.height),t.fillStyle=n}function Qe(t,e,n,i,s,r={}){const o=X(e)?e:[e],a=r.strokeWidth>0&&""!==r.strokeColor;let c,l;for(t.save(),t.font=s.string,Ke(t,r),c=0;c<o.length;++c)l=o[c],r.backdrop&&Ye(t,r.backdrop),a&&(r.strokeColor&&(t.strokeStyle=r.strokeColor),Q(r.strokeWidth)||(t.lineWidth=r.strokeWidth),t.strokeText(l,n,i,r.maxWidth)),t.fillText(l,n,i,r.maxWidth),Ge(t,n,i,l,r),i+=Number(s.lineHeight);t.restore()}function Xe(t,e){const{x:n,y:i,w:s,h:r,radius:o}=e;t.arc(n+o.topLeft,i+o.topLeft,o.topLeft,1.5*Tt,Tt,!0),t.lineTo(n,i+r-o.bottomLeft),t.arc(n+o.bottomLeft,i+r-o.bottomLeft,o.bottomLeft,Tt,St,!0),t.lineTo(n+s-o.bottomRight,i+r),t.arc(n+s-o.bottomRight,i+r-o.bottomRight,o.bottomRight,St,0,!0),t.lineTo(n+s,i+o.topRight),t.arc(n+s-o.topRight,i+o.topRight,o.topRight,0,-St,!0),t.lineTo(n+o.topLeft,i)}const Je=/^(normal|(\d+(?:\.\d+)?)(px|em|%)?)$/,Ze=/^(normal|italic|initial|inherit|unset|(oblique( -?[0-9]?[0-9]deg)?))$/;function tn(t,e){const n=(""+t).match(Je);if(!n||"normal"===n[1])return 1.2*e;switch(t=+n[2],n[3]){case"px":return t;case"%":t/=100;break}return e*t}const en=t=>+t||0;function nn(t,e){const n={},i=J(e),s=i?Object.keys(e):e,r=J(t)?i?n=>et(t[n],t[e[n]]):e=>t[e]:()=>t;for(const o of s)n[o]=en(r(o));return n}function sn(t){return nn(t,{top:"y",right:"x",bottom:"y",left:"x"})}function rn(t){return nn(t,["topLeft","topRight","bottomLeft","bottomRight"])}function on(t){const e=sn(t);return e.width=e.left+e.right,e.height=e.top+e.bottom,e}function an(t,e){t=t||{},e=e||De.font;let n=et(t.size,e.size);"string"===typeof n&&(n=parseInt(n,10));let i=et(t.style,e.style);i&&!(""+i).match(Ze)&&(console.warn('Invalid font style specified: "'+i+'"'),i=void 0);const s={family:et(t.family,e.family),lineHeight:tn(et(t.lineHeight,e.lineHeight),n),size:n,style:i,weight:et(t.weight,e.weight),string:""};return s.string=Me(s),s}function cn(t,e,n,i){let s,r,o,a=!0;for(s=0,r=t.length;s<r;++s)if(o=t[s],void 0!==o&&(void 0!==e&&"function"===typeof o&&(o=o(e),a=!1),void 0!==n&&X(o)&&(o=o[n%o.length],a=!1),void 0!==o))return i&&!a&&(i.cacheable=!1),o}function ln(t,e,n){const{min:i,max:s}=t,r=it(e,(s-i)/2),o=(t,e)=>n&&0===t?0:t+e;return{min:o(i,-Math.abs(r)),max:o(s,r)}}function hn(t,e){return Object.assign(Object.create(t),e)}function un(t,e=[""],n,i,s=()=>t[0]){const r=n||t;"undefined"===typeof i&&(i=Sn("_fallback",t));const o={[Symbol.toStringTag]:"Object",_cacheable:!0,_scopes:t,_rootScopes:r,_fallback:i,_getTarget:s,override:n=>un([n,...t],e,r,i)};return new Proxy(o,{deleteProperty(e,n){return delete e[n],delete e._keys,delete t[0][n],!0},get(n,i){return mn(n,i,(()=>In(i,e,t,n)))},getOwnPropertyDescriptor(t,e){return Reflect.getOwnPropertyDescriptor(t._scopes[0],e)},getPrototypeOf(){return Reflect.getPrototypeOf(t[0])},has(t,e){return kn(t).includes(e)},ownKeys(t){return kn(t)},set(t,e,n){const i=t._storage||(t._storage=s());return t[e]=i[e]=n,delete t._keys,!0}})}function dn(t,e,n,i){const s={_cacheable:!1,_proxy:t,_context:e,_subProxy:n,_stack:new Set,_descriptors:fn(t,i),setContext:e=>dn(t,e,n,i),override:s=>dn(t.override(s),e,n,i)};return new Proxy(s,{deleteProperty(e,n){return delete e[n],delete t[n],!0},get(t,e,n){return mn(t,e,(()=>yn(t,e,n)))},getOwnPropertyDescriptor(e,n){return e._descriptors.allKeys?Reflect.has(t,n)?{enumerable:!0,configurable:!0}:void 0:Reflect.getOwnPropertyDescriptor(t,n)},getPrototypeOf(){return Reflect.getPrototypeOf(t)},has(e,n){return Reflect.has(t,n)},ownKeys(){return Reflect.ownKeys(t)},set(e,n,i){return t[n]=i,delete e[n],!0}})}function fn(t,e={scriptable:!0,indexable:!0}){const{_scriptable:n=e.scriptable,_indexable:i=e.indexable,_allKeys:s=e.allKeys}=t;return{allKeys:s,scriptable:n,indexable:i,isScriptable:_t(n)?n:()=>n,isIndexable:_t(i)?i:()=>i}}const pn=(t,e)=>t?t+yt(e):e,gn=(t,e)=>J(e)&&"adapters"!==t&&(null===Object.getPrototypeOf(e)||e.constructor===Object);function mn(t,e,n){if(Object.prototype.hasOwnProperty.call(t,e)||"constructor"===e)return t[e];const i=n();return t[e]=i,i}function yn(t,e,n){const{_proxy:i,_context:s,_subProxy:r,_descriptors:o}=t;let a=i[e];return _t(a)&&o.isScriptable(e)&&(a=vn(e,a,t,n)),X(a)&&a.length&&(a=_n(e,a,t,o.isIndexable)),gn(e,a)&&(a=dn(a,s,r&&r[e],o)),a}function vn(t,e,n,i){const{_proxy:s,_context:r,_subProxy:o,_stack:a}=n;if(a.has(t))throw new Error("Recursion detected: "+Array.from(a).join("->")+"->"+t);a.add(t);let c=e(r,o||i);return a.delete(t),gn(t,c)&&(c=xn(s._scopes,s,t,c)),c}function _n(t,e,n,i){const{_proxy:s,_context:r,_subProxy:o,_descriptors:a}=n;if("undefined"!==typeof r.index&&i(t))return e[r.index%e.length];if(J(e[0])){const n=e,i=s._scopes.filter((t=>t!==n));e=[];for(const c of n){const n=xn(i,s,t,c);e.push(dn(n,r,o&&o[t],a))}}return e}function bn(t,e,n){return _t(t)?t(e,n):t}const wn=(t,e)=>!0===t?e:"string"===typeof t?mt(e,t):void 0;function Tn(t,e,n,i,s){for(const r of e){const e=wn(n,r);if(e){t.add(e);const r=bn(e._fallback,n,s);if("undefined"!==typeof r&&r!==n&&r!==i)return r}else if(!1===e&&"undefined"!==typeof i&&n!==i)return null}return!1}function xn(t,e,n,i){const s=e._rootScopes,r=bn(e._fallback,n,i),o=[...t,...s],a=new Set;a.add(i);let c=En(a,o,n,r||n,i);return null!==c&&(("undefined"===typeof r||r===n||(c=En(a,o,r,c,i),null!==c))&&un(Array.from(a),[""],s,r,(()=>Cn(e,n,i))))}function En(t,e,n,i,s){while(n)n=Tn(t,e,n,i,s);return n}function Cn(t,e,n){const i=t._getTarget();e in i||(i[e]={});const s=i[e];return X(s)&&J(n)?n:s||{}}function In(t,e,n,i){let s;for(const r of e)if(s=Sn(pn(r,t),n),"undefined"!==typeof s)return gn(t,s)?xn(n,i,t,s):s}function Sn(t,e){for(const n of e){if(!n)continue;const e=n[t];if("undefined"!==typeof e)return e}}function kn(t){let e=t._keys;return e||(e=t._keys=An(t._scopes)),e}function An(t){const e=new Set;for(const n of t)for(const t of Object.keys(n).filter((t=>!t.startsWith("_"))))e.add(t);return Array.from(e)}function On(t,e,n,i){const{iScale:s}=t,{key:r="r"}=this._parsing,o=new Array(i);let a,c,l,h;for(a=0,c=i;a<c;++a)l=a+n,h=e[l],o[a]={r:s.parse(mt(h,r),l)};return o}const Rn=Number.EPSILON||1e-14,Pn=(t,e)=>e<t.length&&!t[e].skip&&t[e],Nn=t=>"x"===t?"y":"x";function Dn(t,e,n,i){const s=t.skip?e:t,r=e,o=n.skip?e:n,a=Bt(r,s),c=Bt(o,r);let l=a/(a+c),h=c/(a+c);l=isNaN(l)?0:l,h=isNaN(h)?0:h;const u=i*l,d=i*h;return{previous:{x:r.x-u*(o.x-s.x),y:r.y-u*(o.y-s.y)},next:{x:r.x+d*(o.x-s.x),y:r.y+d*(o.y-s.y)}}}function Mn(t,e,n){const i=t.length;let s,r,o,a,c,l=Pn(t,0);for(let h=0;h<i-1;++h)c=l,l=Pn(t,h+1),c&&l&&(Pt(e[h],0,Rn)?n[h]=n[h+1]=0:(s=n[h]/e[h],r=n[h+1]/e[h],a=Math.pow(s,2)+Math.pow(r,2),a<=9||(o=3/Math.sqrt(a),n[h]=s*o*e[h],n[h+1]=r*o*e[h])))}function Ln(t,e,n="x"){const i=Nn(n),s=t.length;let r,o,a,c=Pn(t,0);for(let l=0;l<s;++l){if(o=a,a=c,c=Pn(t,l+1),!a)continue;const s=a[n],h=a[i];o&&(r=(s-o[n])/3,a[`cp1${n}`]=s-r,a[`cp1${i}`]=h-r*e[l]),c&&(r=(c[n]-s)/3,a[`cp2${n}`]=s+r,a[`cp2${i}`]=h+r*e[l])}}function Fn(t,e="x"){const n=Nn(e),i=t.length,s=Array(i).fill(0),r=Array(i);let o,a,c,l=Pn(t,0);for(o=0;o<i;++o)if(a=c,c=l,l=Pn(t,o+1),c){if(l){const t=l[e]-c[e];s[o]=0!==t?(l[n]-c[n])/t:0}r[o]=a?l?Rt(s[o-1])!==Rt(s[o])?0:(s[o-1]+s[o])/2:s[o-1]:s[o]}Mn(t,s,r),Ln(t,r,e)}function Un(t,e,n){return Math.max(Math.min(t,n),e)}function Vn(t,e){let n,i,s,r,o,a=Be(t[0],e);for(n=0,i=t.length;n<i;++n)o=r,r=a,a=n<i-1&&Be(t[n+1],e),r&&(s=t[n],o&&(s.cp1x=Un(s.cp1x,e.left,e.right),s.cp1y=Un(s.cp1y,e.top,e.bottom)),a&&(s.cp2x=Un(s.cp2x,e.left,e.right),s.cp2y=Un(s.cp2y,e.top,e.bottom)))}function jn(t,e,n,i,s){let r,o,a,c;if(e.spanGaps&&(t=t.filter((t=>!t.skip))),"monotone"===e.cubicInterpolationMode)Fn(t,s);else{let n=i?t[t.length-1]:t[0];for(r=0,o=t.length;r<o;++r)a=t[r],c=Dn(n,a,t[Math.min(r+1,o-(i?0:1))%o],e.tension),a.cp1x=c.previous.x,a.cp1y=c.previous.y,a.cp2x=c.next.x,a.cp2y=c.next.y,n=a}e.capBezierPoints&&Vn(t,n)}function zn(){return"undefined"!==typeof window&&"undefined"!==typeof document}function Bn(t){let e=t.parentNode;return e&&"[object ShadowRoot]"===e.toString()&&(e=e.host),e}function $n(t,e,n){let i;return"string"===typeof t?(i=parseInt(t,10),-1!==t.indexOf("%")&&(i=i/100*e.parentNode[n])):i=t,i}const Wn=t=>t.ownerDocument.defaultView.getComputedStyle(t,null);function Hn(t,e){return Wn(t).getPropertyValue(e)}const qn=["top","right","bottom","left"];function Kn(t,e,n){const i={};n=n?"-"+n:"";for(let s=0;s<4;s++){const r=qn[s];i[r]=parseFloat(t[e+"-"+r+n])||0}return i.width=i.left+i.right,i.height=i.top+i.bottom,i}const Gn=(t,e,n)=>(t>0||e>0)&&(!n||!n.shadowRoot);function Yn(t,e){const n=t.touches,i=n&&n.length?n[0]:t,{offsetX:s,offsetY:r}=i;let o,a,c=!1;if(Gn(s,r,t.target))o=s,a=r;else{const t=e.getBoundingClientRect();o=i.clientX-t.left,a=i.clientY-t.top,c=!0}return{x:o,y:a,box:c}}function Qn(t,e){if("native"in t)return t;const{canvas:n,currentDevicePixelRatio:i}=e,s=Wn(n),r="border-box"===s.boxSizing,o=Kn(s,"padding"),a=Kn(s,"border","width"),{x:c,y:l,box:h}=Yn(t,n),u=o.left+(h&&a.left),d=o.top+(h&&a.top);let{width:f,height:p}=e;return r&&(f-=o.width+a.width,p-=o.height+a.height),{x:Math.round((c-u)/f*n.width/i),y:Math.round((l-d)/p*n.height/i)}}function Xn(t,e,n){let i,s;if(void 0===e||void 0===n){const r=t&&Bn(t);if(r){const t=r.getBoundingClientRect(),o=Wn(r),a=Kn(o,"border","width"),c=Kn(o,"padding");e=t.width-c.width-a.width,n=t.height-c.height-a.height,i=$n(o.maxWidth,r,"clientWidth"),s=$n(o.maxHeight,r,"clientHeight")}else e=t.clientWidth,n=t.clientHeight}return{width:e,height:n,maxWidth:i||Ct,maxHeight:s||Ct}}const Jn=t=>Math.round(10*t)/10;function Zn(t,e,n,i){const s=Wn(t),r=Kn(s,"margin"),o=$n(s.maxWidth,t,"clientWidth")||Ct,a=$n(s.maxHeight,t,"clientHeight")||Ct,c=Xn(t,e,n);let{width:l,height:h}=c;if("content-box"===s.boxSizing){const t=Kn(s,"border","width"),e=Kn(s,"padding");l-=e.width+t.width,h-=e.height+t.height}l=Math.max(0,l-r.width),h=Math.max(0,i?l/i:h-r.height),l=Jn(Math.min(l,o,c.maxWidth)),h=Jn(Math.min(h,a,c.maxHeight)),l&&!h&&(h=Jn(l/2));const u=void 0!==e||void 0!==n;return u&&i&&c.height&&h>c.height&&(h=c.height,l=Jn(Math.floor(h*i))),{width:l,height:h}}function ti(t,e,n){const i=e||1,s=Math.floor(t.height*i),r=Math.floor(t.width*i);t.height=Math.floor(t.height),t.width=Math.floor(t.width);const o=t.canvas;return o.style&&(n||!o.style.height&&!o.style.width)&&(o.style.height=`${t.height}px`,o.style.width=`${t.width}px`),(t.currentDevicePixelRatio!==i||o.height!==s||o.width!==r)&&(t.currentDevicePixelRatio=i,o.height=s,o.width=r,t.ctx.setTransform(i,0,0,i,0,0),!0)}const ei=function(){let t=!1;try{const e={get passive(){return t=!0,!1}};zn()&&(window.addEventListener("test",null,e),window.removeEventListener("test",null,e))}catch(e){}return t}();function ni(t,e){const n=Hn(t,e),i=n&&n.match(/^(\d+)(\.\d+)?px$/);return i?+i[1]:void 0}function ii(t,e,n,i){return{x:t.x+n*(e.x-t.x),y:t.y+n*(e.y-t.y)}}function si(t,e,n,i){return{x:t.x+n*(e.x-t.x),y:"middle"===i?n<.5?t.y:e.y:"after"===i?n<1?t.y:e.y:n>0?e.y:t.y}}function ri(t,e,n,i){const s={x:t.cp2x,y:t.cp2y},r={x:e.cp1x,y:e.cp1y},o=ii(t,s,n),a=ii(s,r,n),c=ii(r,e,n),l=ii(o,a,n),h=ii(a,c,n);return ii(l,h,n)}const oi=function(t,e){return{x(n){return t+t+e-n},setWidth(t){e=t},textAlign(t){return"center"===t?t:"right"===t?"left":"right"},xPlus(t,e){return t-e},leftForLtr(t,e){return t-e}}},ai=function(){return{x(t){return t},setWidth(t){},textAlign(t){return t},xPlus(t,e){return t+e},leftForLtr(t,e){return t}}};function ci(t,e,n){return t?oi(e,n):ai()}function li(t,e){let n,i;"ltr"!==e&&"rtl"!==e||(n=t.canvas.style,i=[n.getPropertyValue("direction"),n.getPropertyPriority("direction")],n.setProperty("direction",e,"important"),t.prevTextDirection=i)}function hi(t,e){void 0!==e&&(delete t.prevTextDirection,t.canvas.style.setProperty("direction",e[0],e[1]))}function ui(t){return"angle"===t?{between:Ht,compare:$t,normalize:Wt}:{between:Gt,compare:(t,e)=>t-e,normalize:t=>t}}function di({start:t,end:e,count:n,loop:i,style:s}){return{start:t%n,end:e%n,loop:i&&(e-t+1)%n===0,style:s}}function fi(t,e,n){const{property:i,start:s,end:r}=n,{between:o,normalize:a}=ui(i),c=e.length;let l,h,{start:u,end:d,loop:f}=t;if(f){for(u+=c,d+=c,l=0,h=c;l<h;++l){if(!o(a(e[u%c][i]),s,r))break;u--,d--}u%=c,d%=c}return d<u&&(d+=c),{start:u,end:d,loop:f,style:t.style}}function pi(t,e,n){if(!n)return[t];const{property:i,start:s,end:r}=n,o=e.length,{compare:a,between:c,normalize:l}=ui(i),{start:h,end:u,loop:d,style:f}=fi(t,e,n),p=[];let g,m,y,v=!1,_=null;const b=()=>c(s,y,g)&&0!==a(s,y),w=()=>0===a(r,g)||c(r,y,g),T=()=>v||b(),x=()=>!v||w();for(let E=h,C=h;E<=u;++E)m=e[E%o],m.skip||(g=l(m[i]),g!==y&&(v=c(g,s,r),null===_&&T()&&(_=0===a(g,s)?E:C),null!==_&&x()&&(p.push(di({start:_,end:E,loop:d,count:o,style:f})),_=null),C=E,y=g));return null!==_&&p.push(di({start:_,end:u,loop:d,count:o,style:f})),p}function gi(t,e){const n=[],i=t.segments;for(let s=0;s<i.length;s++){const r=pi(i[s],t.points,e);r.length&&n.push(...r)}return n}function mi(t,e,n,i){let s=0,r=e-1;if(n&&!i)while(s<e&&!t[s].skip)s++;while(s<e&&t[s].skip)s++;s%=e,n&&(r+=s);while(r>s&&t[r%e].skip)r--;return r%=e,{start:s,end:r}}function yi(t,e,n,i){const s=t.length,r=[];let o,a=e,c=t[e];for(o=e+1;o<=n;++o){const n=t[o%s];n.skip||n.stop?c.skip||(i=!1,r.push({start:e%s,end:(o-1)%s,loop:i}),e=a=n.stop?o:null):(a=o,c.skip&&(e=o)),c=n}return null!==a&&r.push({start:e%s,end:a%s,loop:i}),r}function vi(t,e){const n=t.points,i=t.options.spanGaps,s=n.length;if(!s)return[];const r=!!t._loop,{start:o,end:a}=mi(n,s,r,i);if(!0===i)return _i(t,[{start:o,end:a,loop:r}],n,e);const c=a<o?a+s:a,l=!!t._fullLoop&&0===o&&a===s-1;return _i(t,yi(n,o,c,l),n,e)}function _i(t,e,n,i){return i&&i.setContext&&n?bi(t,e,n,i):e}function bi(t,e,n,i){const s=t._chart.getContext(),r=wi(t.options),{_datasetIndex:o,options:{spanGaps:a}}=t,c=n.length,l=[];let h=r,u=e[0].start,d=u;function f(t,e,i,s){const r=a?-1:1;if(t!==e){t+=c;while(n[t%c].skip)t-=r;while(n[e%c].skip)e+=r;t%c!==e%c&&(l.push({start:t%c,end:e%c,loop:i,style:s}),h=s,u=e%c)}}for(const p of e){u=a?u:p.start;let t,e=n[u%c];for(d=u+1;d<=p.end;d++){const r=n[d%c];t=wi(i.setContext(hn(s,{type:"segment",p0:e,p1:r,p0DataIndex:(d-1)%c,p1DataIndex:d%c,datasetIndex:o}))),Ti(t,h)&&f(u,d-1,p.loop,h),e=r,h=t}u<d-1&&f(u,d-1,p.loop,h)}return l}function wi(t){return{backgroundColor:t.backgroundColor,borderCapStyle:t.borderCapStyle,borderDash:t.borderDash,borderDashOffset:t.borderDashOffset,borderJoinStyle:t.borderJoinStyle,borderWidth:t.borderWidth,borderColor:t.borderColor}}function Ti(t,e){if(!e)return!1;const n=[],i=function(t,e){return ge(e)?(n.includes(e)||n.push(e),n.indexOf(e)):e};return JSON.stringify(t,i)!==JSON.stringify(e,i)}},223:function(t,e,n){"use strict";n.d(e,{Sx:function(){return i.Sx},Wp:function(){return i.Wp}});var i=n(9928),s="firebase",r="11.0.1";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
(0,i.KO)(s,r,"app")},1884:function(t,e,n){"use strict";n.d(e,{Ci:function(){return fa},Dc:function(){return G},rJ:function(){return na},H9:function(){return ia},x7:function(){return Ba},GG:function(){return Wa},aU:function(){return aa},aQ:function(){return qa},BN:function(){return Ha}});var i,s,r=n(9928),o=n(5125),a=n(3424),c=n(6743),l="undefined"!==typeof globalThis?globalThis:"undefined"!==typeof window?window:"undefined"!==typeof global?global:"undefined"!==typeof self?self:{},h={};(function(){var t;
/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(t,e){function n(){}n.prototype=e.prototype,t.D=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.C=function(t,n,i){for(var s=Array(arguments.length-2),r=2;r<arguments.length;r++)s[r-2]=arguments[r];return e.prototype[n].apply(t,s)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}function o(t,e,n){n||(n=0);var i=Array(16);if("string"===typeof e)for(var s=0;16>s;++s)i[s]=e.charCodeAt(n++)|e.charCodeAt(n++)<<8|e.charCodeAt(n++)<<16|e.charCodeAt(n++)<<24;else for(s=0;16>s;++s)i[s]=e[n++]|e[n++]<<8|e[n++]<<16|e[n++]<<24;e=t.g[0],n=t.g[1],s=t.g[2];var r=t.g[3],o=e+(r^n&(s^r))+i[0]+3614090360&4294967295;e=n+(o<<7&4294967295|o>>>25),o=r+(s^e&(n^s))+i[1]+3905402710&4294967295,r=e+(o<<12&4294967295|o>>>20),o=s+(n^r&(e^n))+i[2]+606105819&4294967295,s=r+(o<<17&4294967295|o>>>15),o=n+(e^s&(r^e))+i[3]+3250441966&4294967295,n=s+(o<<22&4294967295|o>>>10),o=e+(r^n&(s^r))+i[4]+4118548399&4294967295,e=n+(o<<7&4294967295|o>>>25),o=r+(s^e&(n^s))+i[5]+1200080426&4294967295,r=e+(o<<12&4294967295|o>>>20),o=s+(n^r&(e^n))+i[6]+2821735955&4294967295,s=r+(o<<17&4294967295|o>>>15),o=n+(e^s&(r^e))+i[7]+4249261313&4294967295,n=s+(o<<22&4294967295|o>>>10),o=e+(r^n&(s^r))+i[8]+1770035416&4294967295,e=n+(o<<7&4294967295|o>>>25),o=r+(s^e&(n^s))+i[9]+2336552879&4294967295,r=e+(o<<12&4294967295|o>>>20),o=s+(n^r&(e^n))+i[10]+4294925233&4294967295,s=r+(o<<17&4294967295|o>>>15),o=n+(e^s&(r^e))+i[11]+2304563134&4294967295,n=s+(o<<22&4294967295|o>>>10),o=e+(r^n&(s^r))+i[12]+1804603682&4294967295,e=n+(o<<7&4294967295|o>>>25),o=r+(s^e&(n^s))+i[13]+4254626195&4294967295,r=e+(o<<12&4294967295|o>>>20),o=s+(n^r&(e^n))+i[14]+2792965006&4294967295,s=r+(o<<17&4294967295|o>>>15),o=n+(e^s&(r^e))+i[15]+1236535329&4294967295,n=s+(o<<22&4294967295|o>>>10),o=e+(s^r&(n^s))+i[1]+4129170786&4294967295,e=n+(o<<5&4294967295|o>>>27),o=r+(n^s&(e^n))+i[6]+3225465664&4294967295,r=e+(o<<9&4294967295|o>>>23),o=s+(e^n&(r^e))+i[11]+643717713&4294967295,s=r+(o<<14&4294967295|o>>>18),o=n+(r^e&(s^r))+i[0]+3921069994&4294967295,n=s+(o<<20&4294967295|o>>>12),o=e+(s^r&(n^s))+i[5]+3593408605&4294967295,e=n+(o<<5&4294967295|o>>>27),o=r+(n^s&(e^n))+i[10]+38016083&4294967295,r=e+(o<<9&4294967295|o>>>23),o=s+(e^n&(r^e))+i[15]+3634488961&4294967295,s=r+(o<<14&4294967295|o>>>18),o=n+(r^e&(s^r))+i[4]+3889429448&4294967295,n=s+(o<<20&4294967295|o>>>12),o=e+(s^r&(n^s))+i[9]+568446438&4294967295,e=n+(o<<5&4294967295|o>>>27),o=r+(n^s&(e^n))+i[14]+3275163606&4294967295,r=e+(o<<9&4294967295|o>>>23),o=s+(e^n&(r^e))+i[3]+4107603335&4294967295,s=r+(o<<14&4294967295|o>>>18),o=n+(r^e&(s^r))+i[8]+1163531501&4294967295,n=s+(o<<20&4294967295|o>>>12),o=e+(s^r&(n^s))+i[13]+2850285829&4294967295,e=n+(o<<5&4294967295|o>>>27),o=r+(n^s&(e^n))+i[2]+4243563512&4294967295,r=e+(o<<9&4294967295|o>>>23),o=s+(e^n&(r^e))+i[7]+1735328473&4294967295,s=r+(o<<14&4294967295|o>>>18),o=n+(r^e&(s^r))+i[12]+2368359562&4294967295,n=s+(o<<20&4294967295|o>>>12),o=e+(n^s^r)+i[5]+4294588738&4294967295,e=n+(o<<4&4294967295|o>>>28),o=r+(e^n^s)+i[8]+2272392833&4294967295,r=e+(o<<11&4294967295|o>>>21),o=s+(r^e^n)+i[11]+1839030562&4294967295,s=r+(o<<16&4294967295|o>>>16),o=n+(s^r^e)+i[14]+4259657740&4294967295,n=s+(o<<23&4294967295|o>>>9),o=e+(n^s^r)+i[1]+2763975236&4294967295,e=n+(o<<4&4294967295|o>>>28),o=r+(e^n^s)+i[4]+1272893353&4294967295,r=e+(o<<11&4294967295|o>>>21),o=s+(r^e^n)+i[7]+4139469664&4294967295,s=r+(o<<16&4294967295|o>>>16),o=n+(s^r^e)+i[10]+3200236656&4294967295,n=s+(o<<23&4294967295|o>>>9),o=e+(n^s^r)+i[13]+681279174&4294967295,e=n+(o<<4&4294967295|o>>>28),o=r+(e^n^s)+i[0]+3936430074&4294967295,r=e+(o<<11&4294967295|o>>>21),o=s+(r^e^n)+i[3]+3572445317&4294967295,s=r+(o<<16&4294967295|o>>>16),o=n+(s^r^e)+i[6]+76029189&4294967295,n=s+(o<<23&4294967295|o>>>9),o=e+(n^s^r)+i[9]+3654602809&4294967295,e=n+(o<<4&4294967295|o>>>28),o=r+(e^n^s)+i[12]+3873151461&4294967295,r=e+(o<<11&4294967295|o>>>21),o=s+(r^e^n)+i[15]+530742520&4294967295,s=r+(o<<16&4294967295|o>>>16),o=n+(s^r^e)+i[2]+3299628645&4294967295,n=s+(o<<23&4294967295|o>>>9),o=e+(s^(n|~r))+i[0]+4096336452&4294967295,e=n+(o<<6&4294967295|o>>>26),o=r+(n^(e|~s))+i[7]+1126891415&4294967295,r=e+(o<<10&4294967295|o>>>22),o=s+(e^(r|~n))+i[14]+2878612391&4294967295,s=r+(o<<15&4294967295|o>>>17),o=n+(r^(s|~e))+i[5]+4237533241&4294967295,n=s+(o<<21&4294967295|o>>>11),o=e+(s^(n|~r))+i[12]+1700485571&4294967295,e=n+(o<<6&4294967295|o>>>26),o=r+(n^(e|~s))+i[3]+2399980690&4294967295,r=e+(o<<10&4294967295|o>>>22),o=s+(e^(r|~n))+i[10]+4293915773&4294967295,s=r+(o<<15&4294967295|o>>>17),o=n+(r^(s|~e))+i[1]+2240044497&4294967295,n=s+(o<<21&4294967295|o>>>11),o=e+(s^(n|~r))+i[8]+1873313359&4294967295,e=n+(o<<6&4294967295|o>>>26),o=r+(n^(e|~s))+i[15]+4264355552&4294967295,r=e+(o<<10&4294967295|o>>>22),o=s+(e^(r|~n))+i[6]+2734768916&4294967295,s=r+(o<<15&4294967295|o>>>17),o=n+(r^(s|~e))+i[13]+1309151649&4294967295,n=s+(o<<21&4294967295|o>>>11),o=e+(s^(n|~r))+i[4]+4149444226&4294967295,e=n+(o<<6&4294967295|o>>>26),o=r+(n^(e|~s))+i[11]+3174756917&4294967295,r=e+(o<<10&4294967295|o>>>22),o=s+(e^(r|~n))+i[2]+718787259&4294967295,s=r+(o<<15&4294967295|o>>>17),o=n+(r^(s|~e))+i[9]+3951481745&4294967295,t.g[0]=t.g[0]+e&4294967295,t.g[1]=t.g[1]+(s+(o<<21&4294967295|o>>>11))&4294967295,t.g[2]=t.g[2]+s&4294967295,t.g[3]=t.g[3]+r&4294967295}function a(t,e){var n=l;return Object.prototype.hasOwnProperty.call(n,t)?n[t]:n[t]=e(t)}function c(t,e){this.h=e;for(var n=[],i=!0,s=t.length-1;0<=s;s--){var r=0|t[s];i&&r==e||(n[s]=r,i=!1)}this.g=n}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0},r.prototype.u=function(t,e){void 0===e&&(e=t.length);for(var n=e-this.blockSize,i=this.B,s=this.h,r=0;r<e;){if(0==s)for(;r<=n;)o(this,t,r),r+=this.blockSize;if("string"===typeof t){for(;r<e;)if(i[s++]=t.charCodeAt(r++),s==this.blockSize){o(this,i),s=0;break}}else for(;r<e;)if(i[s++]=t[r++],s==this.blockSize){o(this,i),s=0;break}}this.h=s,this.o+=e},r.prototype.v=function(){var t=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);t[0]=128;for(var e=1;e<t.length-8;++e)t[e]=0;var n=8*this.o;for(e=t.length-8;e<t.length;++e)t[e]=255&n,n/=256;for(this.u(t),t=Array(16),e=n=0;4>e;++e)for(var i=0;32>i;i+=8)t[n++]=this.g[e]>>>i&255;return t};var l={};function u(t){return-128<=t&&128>t?a(t,(function(t){return new c([0|t],0>t?-1:0)})):new c([0|t],0>t?-1:0)}function d(t){if(isNaN(t)||!isFinite(t))return p;if(0>t)return _(d(-t));for(var e=[],n=1,i=0;t>=n;i++)e[i]=t/n|0,n*=4294967296;return new c(e,0)}function f(t,e){if(0==t.length)throw Error("number format error: empty string");if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if("-"==t.charAt(0))return _(f(t.substring(1),e));if(0<=t.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=d(Math.pow(e,8)),i=p,s=0;s<t.length;s+=8){var r=Math.min(8,t.length-s),o=parseInt(t.substring(s,s+r),e);8>r?(r=d(Math.pow(e,r)),i=i.j(r).add(d(o))):(i=i.j(n),i=i.add(d(o)))}return i}var p=u(0),g=u(1),m=u(16777216);function y(t){if(0!=t.h)return!1;for(var e=0;e<t.g.length;e++)if(0!=t.g[e])return!1;return!0}function v(t){return-1==t.h}function _(t){for(var e=t.g.length,n=[],i=0;i<e;i++)n[i]=~t.g[i];return new c(n,~t.h).add(g)}function b(t,e){return t.add(_(e))}function w(t,e){for(;(65535&t[e])!=t[e];)t[e+1]+=t[e]>>>16,t[e]&=65535,e++}function T(t,e){this.g=t,this.h=e}function x(t,e){if(y(e))throw Error("division by zero");if(y(t))return new T(p,p);if(v(t))return e=x(_(t),e),new T(_(e.g),_(e.h));if(v(e))return e=x(t,_(e)),new T(_(e.g),e.h);if(30<t.g.length){if(v(t)||v(e))throw Error("slowDivide_ only works with positive integers.");for(var n=g,i=e;0>=i.l(t);)n=E(n),i=E(i);var s=C(n,1),r=C(i,1);for(i=C(i,2),n=C(n,2);!y(i);){var o=r.add(i);0>=o.l(t)&&(s=s.add(n),r=o),i=C(i,1),n=C(n,1)}return e=b(t,s.j(e)),new T(s,e)}for(s=p;0<=t.l(e);){for(n=Math.max(1,Math.floor(t.m()/e.m())),i=Math.ceil(Math.log(n)/Math.LN2),i=48>=i?1:Math.pow(2,i-48),r=d(n),o=r.j(e);v(o)||0<o.l(t);)n-=i,r=d(n),o=r.j(e);y(r)&&(r=g),s=s.add(r),t=b(t,o)}return new T(s,t)}function E(t){for(var e=t.g.length+1,n=[],i=0;i<e;i++)n[i]=t.i(i)<<1|t.i(i-1)>>>31;return new c(n,t.h)}function C(t,e){var n=e>>5;e%=32;for(var i=t.g.length-n,s=[],r=0;r<i;r++)s[r]=0<e?t.i(r+n)>>>e|t.i(r+n+1)<<32-e:t.i(r+n);return new c(s,t.h)}t=c.prototype,t.m=function(){if(v(this))return-_(this).m();for(var t=0,e=1,n=0;n<this.g.length;n++){var i=this.i(n);t+=(0<=i?i:4294967296+i)*e,e*=4294967296}return t},t.toString=function(t){if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if(y(this))return"0";if(v(this))return"-"+_(this).toString(t);for(var e=d(Math.pow(t,6)),n=this,i="";;){var s=x(n,e).g;n=b(n,s.j(e));var r=((0<n.g.length?n.g[0]:n.h)>>>0).toString(t);if(n=s,y(n))return r+i;for(;6>r.length;)r="0"+r;i=r+i}},t.i=function(t){return 0>t?0:t<this.g.length?this.g[t]:this.h},t.l=function(t){return t=b(this,t),v(t)?-1:y(t)?0:1},t.abs=function(){return v(this)?_(this):this},t.add=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],i=0,s=0;s<=e;s++){var r=i+(65535&this.i(s))+(65535&t.i(s)),o=(r>>>16)+(this.i(s)>>>16)+(t.i(s)>>>16);i=o>>>16,r&=65535,o&=65535,n[s]=o<<16|r}return new c(n,-2147483648&n[n.length-1]?-1:0)},t.j=function(t){if(y(this)||y(t))return p;if(v(this))return v(t)?_(this).j(_(t)):_(_(this).j(t));if(v(t))return _(this.j(_(t)));if(0>this.l(m)&&0>t.l(m))return d(this.m()*t.m());for(var e=this.g.length+t.g.length,n=[],i=0;i<2*e;i++)n[i]=0;for(i=0;i<this.g.length;i++)for(var s=0;s<t.g.length;s++){var r=this.i(i)>>>16,o=65535&this.i(i),a=t.i(s)>>>16,l=65535&t.i(s);n[2*i+2*s]+=o*l,w(n,2*i+2*s),n[2*i+2*s+1]+=r*l,w(n,2*i+2*s+1),n[2*i+2*s+1]+=o*a,w(n,2*i+2*s+1),n[2*i+2*s+2]+=r*a,w(n,2*i+2*s+2)}for(i=0;i<e;i++)n[i]=n[2*i+1]<<16|n[2*i];for(i=e;i<2*e;i++)n[i]=0;return new c(n,0)},t.A=function(t){return x(this,t).h},t.and=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],i=0;i<e;i++)n[i]=this.i(i)&t.i(i);return new c(n,this.h&t.h)},t.or=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],i=0;i<e;i++)n[i]=this.i(i)|t.i(i);return new c(n,this.h|t.h)},t.xor=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],i=0;i<e;i++)n[i]=this.i(i)^t.i(i);return new c(n,this.h^t.h)},r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,s=h.Md5=r,c.prototype.add=c.prototype.add,c.prototype.multiply=c.prototype.j,c.prototype.modulo=c.prototype.A,c.prototype.compare=c.prototype.l,c.prototype.toNumber=c.prototype.m,c.prototype.toString=c.prototype.toString,c.prototype.getBits=c.prototype.i,c.fromNumber=d,c.fromString=f,i=h.Integer=c}).apply("undefined"!==typeof l?l:"undefined"!==typeof self?self:"undefined"!==typeof window?window:{});var u,d,f,p,g,m,y,v,_="undefined"!==typeof globalThis?globalThis:"undefined"!==typeof window?window:"undefined"!==typeof global?global:"undefined"!==typeof self?self:{},b={};(function(){var t,e="function"==typeof Object.defineProperties?Object.defineProperty:function(t,e,n){return t==Array.prototype||t==Object.prototype||(t[e]=n.value),t};function n(t){t=["object"==typeof globalThis&&globalThis,t,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof _&&_];for(var e=0;e<t.length;++e){var n=t[e];if(n&&n.Math==Math)return n}throw Error("Cannot find global object")}var i=n(this);function s(t,n){if(n)t:{var s=i;t=t.split(".");for(var r=0;r<t.length-1;r++){var o=t[r];if(!(o in s))break t;s=s[o]}t=t[t.length-1],r=s[t],n=n(r),n!=r&&null!=n&&e(s,t,{configurable:!0,writable:!0,value:n})}}function r(t,e){t instanceof String&&(t+="");var n=0,i=!1,s={next:function(){if(!i&&n<t.length){var s=n++;return{value:e(s,t[s]),done:!1}}return i=!0,{done:!0,value:void 0}}};return s[Symbol.iterator]=function(){return s},s}s("Array.prototype.values",(function(t){return t||function(){return r(this,(function(t,e){return e}))}}));
/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
var o=o||{},a=this||self;function c(t){var e=typeof t;return e="object"!=e?e:t?Array.isArray(t)?"array":e:"null","array"==e||"object"==e&&"number"==typeof t.length}function l(t){var e=typeof t;return"object"==e&&null!=t||"function"==e}function h(t,e,n){return t.call.apply(t.bind,arguments)}function T(t,e,n){if(!t)throw Error();if(2<arguments.length){var i=Array.prototype.slice.call(arguments,2);return function(){var n=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(n,i),t.apply(e,n)}}return function(){return t.apply(e,arguments)}}function x(t,e,n){return x=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?h:T,x.apply(null,arguments)}function C(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var e=n.slice();return e.push.apply(e,arguments),t.apply(this,e)}}function I(t,e){function n(){}n.prototype=e.prototype,t.aa=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Qb=function(t,n,i){for(var s=Array(arguments.length-2),r=2;r<arguments.length;r++)s[r-2]=arguments[r];return e.prototype[n].apply(t,s)}}function S(t){const e=t.length;if(0<e){const n=Array(e);for(let i=0;i<e;i++)n[i]=t[i];return n}return[]}function k(t,e){for(let n=1;n<arguments.length;n++){const e=arguments[n];if(c(e)){const n=t.length||0,i=e.length||0;t.length=n+i;for(let s=0;s<i;s++)t[n+s]=e[s]}else t.push(e)}}class A{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}function O(t){return/^[\s\xa0]*$/.test(t)}function R(){var t=a.navigator;return t&&(t=t.userAgent)?t:""}function P(t){return P[" "](t),t}P[" "]=function(){};var N=-1!=R().indexOf("Gecko")&&!(-1!=R().toLowerCase().indexOf("webkit")&&-1==R().indexOf("Edge"))&&!(-1!=R().indexOf("Trident")||-1!=R().indexOf("MSIE"))&&-1==R().indexOf("Edge");function D(t,e,n){for(const i in t)e.call(n,t[i],i,t)}function M(t,e){for(const n in t)e.call(void 0,t[n],n,t)}function L(t){const e={};for(const n in t)e[n]=t[n];return e}const F="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function U(t,e){let n,i;for(let s=1;s<arguments.length;s++){for(n in i=arguments[s],i)t[n]=i[n];for(let e=0;e<F.length;e++)n=F[e],Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n])}}function V(t){var e=1;t=t.split(":");const n=[];for(;0<e&&t.length;)n.push(t.shift()),e--;return t.length&&n.push(t.join(":")),n}function j(t){a.setTimeout((()=>{throw t}),0)}function z(){var t=K;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class B{constructor(){this.h=this.g=null}add(t,e){const n=$.get();n.set(t,e),this.h?this.h.next=n:this.g=n,this.h=n}}var $=new A((()=>new W),(t=>t.reset()));class W{constructor(){this.next=this.g=this.h=null}set(t,e){this.h=t,this.g=e,this.next=null}reset(){this.next=this.g=this.h=null}}let H,q=!1,K=new B,G=()=>{const t=a.Promise.resolve(void 0);H=()=>{t.then(Y)}};var Y=()=>{for(var t;t=z();){try{t.h.call(t.g)}catch(n){j(n)}var e=$;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}q=!1};function Q(){this.s=this.s,this.C=this.C}function X(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}Q.prototype.s=!1,Q.prototype.ma=function(){this.s||(this.s=!0,this.N())},Q.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()},X.prototype.h=function(){this.defaultPrevented=!0};var J=function(){if(!a.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{const t=()=>{};a.addEventListener("test",t,e),a.removeEventListener("test",t,e)}catch(n){}return t}();function Z(t,e){if(X.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,i=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(N){t:{try{P(e.nodeName);var s=!0;break t}catch(r){}s=!1}s||(e=null)}}else"mouseover"==n?e=t.fromElement:"mouseout"==n&&(e=t.toElement);this.relatedTarget=e,i?(this.clientX=void 0!==i.clientX?i.clientX:i.pageX,this.clientY=void 0!==i.clientY?i.clientY:i.pageY,this.screenX=i.screenX||0,this.screenY=i.screenY||0):(this.clientX=void 0!==t.clientX?t.clientX:t.pageX,this.clientY=void 0!==t.clientY?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType="string"===typeof t.pointerType?t.pointerType:tt[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&Z.aa.h.call(this)}}I(Z,X);var tt={2:"touch",3:"pen",4:"mouse"};Z.prototype.h=function(){Z.aa.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var et="closure_listenable_"+(1e6*Math.random()|0),nt=0;function it(t,e,n,i,s){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!i,this.ha=s,this.key=++nt,this.da=this.fa=!1}function st(t){t.da=!0,t.listener=null,t.proxy=null,t.src=null,t.ha=null}function rt(t){this.src=t,this.g={},this.h=0}function ot(t,e){var n=e.type;if(n in t.g){var i,s=t.g[n],r=Array.prototype.indexOf.call(s,e,void 0);(i=0<=r)&&Array.prototype.splice.call(s,r,1),i&&(st(e),0==t.g[n].length&&(delete t.g[n],t.h--))}}function at(t,e,n,i){for(var s=0;s<t.length;++s){var r=t[s];if(!r.da&&r.listener==e&&r.capture==!!n&&r.ha==i)return s}return-1}rt.prototype.add=function(t,e,n,i,s){var r=t.toString();t=this.g[r],t||(t=this.g[r]=[],this.h++);var o=at(t,e,i,s);return-1<o?(e=t[o],n||(e.fa=!1)):(e=new it(e,this.src,r,!!i,s),e.fa=n,t.push(e)),e};var ct="closure_lm_"+(1e6*Math.random()|0),lt={};function ht(t,e,n,i,s){if(i&&i.once)return ft(t,e,n,i,s);if(Array.isArray(e)){for(var r=0;r<e.length;r++)ht(t,e[r],n,i,s);return null}return n=bt(n),t&&t[et]?t.K(e,n,l(i)?!!i.capture:!!i,s):ut(t,e,n,!1,i,s)}function ut(t,e,n,i,s,r){if(!e)throw Error("Invalid event type");var o=l(s)?!!s.capture:!!s,a=vt(t);if(a||(t[ct]=a=new rt(t)),n=a.add(e,n,i,o,r),n.proxy)return n;if(i=dt(),n.proxy=i,i.src=t,i.listener=n,t.addEventListener)J||(s=o),void 0===s&&(s=!1),t.addEventListener(e.toString(),i,s);else if(t.attachEvent)t.attachEvent(mt(e.toString()),i);else{if(!t.addListener||!t.removeListener)throw Error("addEventListener and attachEvent are unavailable.");t.addListener(i)}return n}function dt(){function t(n){return e.call(t.src,t.listener,n)}const e=yt;return t}function ft(t,e,n,i,s){if(Array.isArray(e)){for(var r=0;r<e.length;r++)ft(t,e[r],n,i,s);return null}return n=bt(n),t&&t[et]?t.L(e,n,l(i)?!!i.capture:!!i,s):ut(t,e,n,!0,i,s)}function pt(t,e,n,i,s){if(Array.isArray(e))for(var r=0;r<e.length;r++)pt(t,e[r],n,i,s);else i=l(i)?!!i.capture:!!i,n=bt(n),t&&t[et]?(t=t.i,e=String(e).toString(),e in t.g&&(r=t.g[e],n=at(r,n,i,s),-1<n&&(st(r[n]),Array.prototype.splice.call(r,n,1),0==r.length&&(delete t.g[e],t.h--)))):t&&(t=vt(t))&&(e=t.g[e.toString()],t=-1,e&&(t=at(e,n,i,s)),(n=-1<t?e[t]:null)&&gt(n))}function gt(t){if("number"!==typeof t&&t&&!t.da){var e=t.src;if(e&&e[et])ot(e.i,t);else{var n=t.type,i=t.proxy;e.removeEventListener?e.removeEventListener(n,i,t.capture):e.detachEvent?e.detachEvent(mt(n),i):e.addListener&&e.removeListener&&e.removeListener(i),(n=vt(e))?(ot(n,t),0==n.h&&(n.src=null,e[ct]=null)):st(t)}}}function mt(t){return t in lt?lt[t]:lt[t]="on"+t}function yt(t,e){if(t.da)t=!0;else{e=new Z(e,this);var n=t.listener,i=t.ha||t.src;t.fa&&gt(t),t=n.call(i,e)}return t}function vt(t){return t=t[ct],t instanceof rt?t:null}var _t="__closure_events_fn_"+(1e9*Math.random()>>>0);function bt(t){return"function"===typeof t?t:(t[_t]||(t[_t]=function(e){return t.handleEvent(e)}),t[_t])}function wt(){Q.call(this),this.i=new rt(this),this.M=this,this.F=null}function Tt(t,e){var n,i=t.F;if(i)for(n=[];i;i=i.F)n.push(i);if(t=t.M,i=e.type||e,"string"===typeof e)e=new X(e,t);else if(e instanceof X)e.target=e.target||t;else{var s=e;e=new X(i,t),U(e,s)}if(s=!0,n)for(var r=n.length-1;0<=r;r--){var o=e.g=n[r];s=xt(o,i,!0,e)&&s}if(o=e.g=t,s=xt(o,i,!0,e)&&s,s=xt(o,i,!1,e)&&s,n)for(r=0;r<n.length;r++)o=e.g=n[r],s=xt(o,i,!1,e)&&s}function xt(t,e,n,i){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var s=!0,r=0;r<e.length;++r){var o=e[r];if(o&&!o.da&&o.capture==n){var a=o.listener,c=o.ha||o.src;o.fa&&ot(t.i,o),s=!1!==a.call(c,i)&&s}}return s&&!i.defaultPrevented}function Et(t,e,n){if("function"===typeof t)n&&(t=x(t,n));else{if(!t||"function"!=typeof t.handleEvent)throw Error("Invalid listener argument");t=x(t.handleEvent,t)}return 2147483647<Number(e)?-1:a.setTimeout(t,e||0)}function Ct(t){t.g=Et((()=>{t.g=null,t.i&&(t.i=!1,Ct(t))}),t.l);const e=t.h;t.h=null,t.m.apply(null,e)}I(wt,Q),wt.prototype[et]=!0,wt.prototype.removeEventListener=function(t,e,n,i){pt(this,t,e,n,i)},wt.prototype.N=function(){if(wt.aa.N.call(this),this.i){var t,e=this.i;for(t in e.g){for(var n=e.g[t],i=0;i<n.length;i++)st(n[i]);delete e.g[t],e.h--}}this.F=null},wt.prototype.K=function(t,e,n,i){return this.i.add(String(t),e,!1,n,i)},wt.prototype.L=function(t,e,n,i){return this.i.add(String(t),e,!0,n,i)};class It extends Q{constructor(t,e){super(),this.m=t,this.l=e,this.h=null,this.i=!1,this.g=null}j(t){this.h=arguments,this.g?this.i=!0:Ct(this)}N(){super.N(),this.g&&(a.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function St(t){Q.call(this),this.h=t,this.g={}}I(St,Q);var kt=[];function At(t){D(t.g,(function(t,e){this.g.hasOwnProperty(e)&&gt(t)}),t),t.g={}}St.prototype.N=function(){St.aa.N.call(this),At(this)},St.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Ot=a.JSON.stringify,Rt=a.JSON.parse,Pt=class{stringify(t){return a.JSON.stringify(t,void 0)}parse(t){return a.JSON.parse(t,void 0)}};function Nt(){}function Dt(t){return t.h||(t.h=t.i())}function Mt(){}Nt.prototype.h=null;var Lt={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Ft(){X.call(this,"d")}function Ut(){X.call(this,"c")}I(Ft,X),I(Ut,X);var Vt={},jt=null;function zt(){return jt=jt||new wt}function Bt(t){X.call(this,Vt.La,t)}function $t(t){const e=zt();Tt(e,new Bt(e))}function Wt(t,e){X.call(this,Vt.STAT_EVENT,t),this.stat=e}function Ht(t){const e=zt();Tt(e,new Wt(e,t))}function qt(t,e){X.call(this,Vt.Ma,t),this.size=e}function Kt(t,e){if("function"!==typeof t)throw Error("Fn must not be null and must be a function");return a.setTimeout((function(){t()}),e)}function Gt(){this.g=!0}function Yt(t,e,n,i,s,r){t.info((function(){if(t.g)if(r)for(var o="",a=r.split("&"),c=0;c<a.length;c++){var l=a[c].split("=");if(1<l.length){var h=l[0];l=l[1];var u=h.split("_");o=2<=u.length&&"type"==u[1]?o+(h+"=")+l+"&":o+(h+"=redacted&")}}else o=null;else o=r;return"XMLHTTP REQ ("+i+") [attempt "+s+"]: "+e+"\n"+n+"\n"+o}))}function Qt(t,e,n,i,s,r,o){t.info((function(){return"XMLHTTP RESP ("+i+") [ attempt "+s+"]: "+e+"\n"+n+"\n"+r+" "+o}))}function Xt(t,e,n,i){t.info((function(){return"XMLHTTP TEXT ("+e+"): "+Zt(t,n)+(i?" "+i:"")}))}function Jt(t,e){t.info((function(){return"TIMEOUT: "+e}))}function Zt(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n)for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var i=n[t];if(!(2>i.length)){var s=i[1];if(Array.isArray(s)&&!(1>s.length)){var r=s[0];if("noop"!=r&&"stop"!=r&&"close"!=r)for(var o=1;o<s.length;o++)s[o]=""}}}return Ot(n)}catch(a){return e}}Vt.La="serverreachability",I(Bt,X),Vt.STAT_EVENT="statevent",I(Wt,X),Vt.Ma="timingevent",I(qt,X),Gt.prototype.xa=function(){this.g=!1},Gt.prototype.info=function(){};var te,ee={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},ne={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"};function ie(){}function se(t,e,n,i){this.j=t,this.i=e,this.l=n,this.R=i||1,this.U=new St(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new re}function re(){this.i=null,this.g="",this.h=!1}I(ie,Nt),ie.prototype.g=function(){return new XMLHttpRequest},ie.prototype.i=function(){return{}},te=new ie;var oe={},ae={};function ce(t,e,n){t.L=1,t.v=Fe(Pe(e)),t.m=n,t.P=!0,le(t,null)}function le(t,e){t.F=Date.now(),de(t),t.A=Pe(t.v);var n=t.A,i=t.R;Array.isArray(i)||(i=[String(i)]),Qe(n.i,"t",i),t.C=0,n=t.j.J,t.h=new re,t.g=$n(t.j,n?e:null,!t.m),0<t.O&&(t.M=new It(x(t.Y,t,t.g),t.O)),e=t.U,n=t.g,i=t.ca;var s="readystatechange";Array.isArray(s)||(s&&(kt[0]=s.toString()),s=kt);for(var r=0;r<s.length;r++){var o=ht(n,s[r],i||e.handleEvent,!1,e.h||e);if(!o)break;e.g[o.key]=o}e=t.H?L(t.H):{},t.m?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ea(t.A,t.u,t.m,e)):(t.u="GET",t.g.ea(t.A,t.u,null,e)),$t(),Yt(t.i,t.u,t.A,t.l,t.R,t.m)}function he(t){return!!t.g&&("GET"==t.u&&2!=t.L&&t.j.Ca)}function ue(t,e){var n=t.C,i=e.indexOf("\n",n);return-1==i?ae:(n=Number(e.substring(n,i)),isNaN(n)?oe:(i+=1,i+n>e.length?ae:(e=e.slice(i,i+n),t.C=i+n,e)))}function de(t){t.S=Date.now()+t.I,fe(t,t.I)}function fe(t,e){if(null!=t.B)throw Error("WatchDog timer not null");t.B=Kt(x(t.ba,t),e)}function pe(t){t.B&&(a.clearTimeout(t.B),t.B=null)}function ge(t){0==t.j.G||t.J||Un(t.j,t)}function me(t){pe(t);var e=t.M;e&&"function"==typeof e.ma&&e.ma(),t.M=null,At(t.U),t.g&&(e=t.g,t.g=null,e.abort(),e.ma())}function ye(t,e){try{var n=t.j;if(0!=n.G&&(n.g==t||Te(n.h,t)))if(!t.K&&Te(n.h,t)&&3==n.G){try{var i=n.Da.g.parse(e)}catch(l){i=null}if(Array.isArray(i)&&3==i.length){var s=i;if(0==s[0]){t:if(!n.u){if(n.g){if(!(n.g.F+3e3<t.F))break t;Fn(n),In(n)}Dn(n),Ht(18)}}else n.za=s[1],0<n.za-n.T&&37500>s[2]&&n.F&&0==n.v&&!n.C&&(n.C=Kt(x(n.Za,n),6e3));if(1>=we(n.h)&&n.ca){try{n.ca()}catch(l){}n.ca=void 0}}else jn(n,11)}else if((t.K||n.g==t)&&Fn(n),!O(e))for(s=n.Da.g.parse(e),e=0;e<s.length;e++){let l=s[e];if(n.T=l[0],l=l[1],2==n.G)if("c"==l[0]){n.K=l[1],n.ia=l[2];const e=l[3];null!=e&&(n.la=e,n.j.info("VER="+n.la));const s=l[4];null!=s&&(n.Aa=s,n.j.info("SVER="+n.Aa));const h=l[5];null!=h&&"number"===typeof h&&0<h&&(i=1.5*h,n.L=i,n.j.info("backChannelRequestTimeoutMs_="+i)),i=n;const u=t.g;if(u){const t=u.g?u.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(t){var r=i.h;r.g||-1==t.indexOf("spdy")&&-1==t.indexOf("quic")&&-1==t.indexOf("h2")||(r.j=r.l,r.g=new Set,r.h&&(xe(r,r.h),r.h=null))}if(i.D){const t=u.g?u.g.getResponseHeader("X-HTTP-Session-Id"):null;t&&(i.ya=t,Le(i.I,i.D,t))}}n.G=3,n.l&&n.l.ua(),n.ba&&(n.R=Date.now()-t.F,n.j.info("Handshake RTT: "+n.R+"ms")),i=n;var o=t;if(i.qa=Bn(i,i.J?i.ia:null,i.W),o.K){Ee(i.h,o);var a=o,c=i.L;c&&(a.I=c),a.B&&(pe(a),de(a)),i.g=o}else Nn(i);0<n.i.length&&kn(n)}else"stop"!=l[0]&&"close"!=l[0]||jn(n,7);else 3==n.G&&("stop"==l[0]||"close"==l[0]?"stop"==l[0]?jn(n,7):Cn(n):"noop"!=l[0]&&n.l&&n.l.ta(l),n.v=0)}$t(4)}catch(l){}}se.prototype.ca=function(t){t=t.target;const e=this.M;e&&3==bn(t)?e.j():this.Y(t)},se.prototype.Y=function(t){try{if(t==this.g)t:{const d=bn(this.g);var e=this.g.Ba();const f=this.g.Z();if(!(3>d)&&(3!=d||this.g&&(this.h.h||this.g.oa()||wn(this.g)))){this.J||4!=d||7==e||$t(8==e||0>=f?3:2),pe(this);var n=this.g.Z();this.X=n;e:if(he(this)){var i=wn(this.g);t="";var s=i.length,r=4==bn(this.g);if(!this.h.i){if("undefined"===typeof TextDecoder){me(this),ge(this);var o="";break e}this.h.i=new a.TextDecoder}for(e=0;e<s;e++)this.h.h=!0,t+=this.h.i.decode(i[e],{stream:!(r&&e==s-1)});i.length=0,this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.oa();if(this.o=200==n,Qt(this.i,this.u,this.A,this.l,this.R,d,n),this.o){if(this.T&&!this.K){e:{if(this.g){var c,l=this.g;if((c=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!O(c)){var h=c;break e}}h=null}if(!(n=h)){this.o=!1,this.s=3,Ht(12),me(this),ge(this);break t}Xt(this.i,this.l,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,ye(this,n)}if(this.P){let t;for(n=!0;!this.J&&this.C<o.length;){if(t=ue(this,o),t==ae){4==d&&(this.s=4,Ht(14),n=!1),Xt(this.i,this.l,null,"[Incomplete Response]");break}if(t==oe){this.s=4,Ht(15),Xt(this.i,this.l,o,"[Invalid Chunk]"),n=!1;break}Xt(this.i,this.l,t,null),ye(this,t)}if(he(this)&&0!=this.C&&(this.h.g=this.h.g.slice(this.C),this.C=0),4!=d||0!=o.length||this.h.h||(this.s=1,Ht(16),n=!1),this.o=this.o&&n,n){if(0<o.length&&!this.W){this.W=!0;var u=this.j;u.g==this&&u.ba&&!u.M&&(u.j.info("Great, no buffering proxy detected. Bytes received: "+o.length),Mn(u),u.M=!0,Ht(11))}}else Xt(this.i,this.l,o,"[Invalid Chunked Response]"),me(this),ge(this)}else Xt(this.i,this.l,o,null),ye(this,o);4==d&&me(this),this.o&&!this.J&&(4==d?Un(this.j,this):(this.o=!1,de(this)))}else Tn(this.g),400==n&&0<o.indexOf("Unknown SID")?(this.s=3,Ht(12)):(this.s=0,Ht(13)),me(this),ge(this)}}}catch(w){}},se.prototype.cancel=function(){this.J=!0,me(this)},se.prototype.ba=function(){this.B=null;const t=Date.now();0<=t-this.S?(Jt(this.i,this.A),2!=this.L&&($t(),Ht(17)),me(this),this.s=2,ge(this)):fe(this,this.S-t)};var ve=class{constructor(t,e){this.g=t,this.map=e}};function _e(t){this.l=t||10,a.PerformanceNavigationTiming?(t=a.performance.getEntriesByType("navigation"),t=0<t.length&&("hq"==t[0].nextHopProtocol||"h2"==t[0].nextHopProtocol)):t=!!(a.chrome&&a.chrome.loadTimes&&a.chrome.loadTimes()&&a.chrome.loadTimes().wasFetchedViaSpdy),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function be(t){return!!t.h||!!t.g&&t.g.size>=t.j}function we(t){return t.h?1:t.g?t.g.size:0}function Te(t,e){return t.h?t.h==e:!!t.g&&t.g.has(e)}function xe(t,e){t.g?t.g.add(e):t.h=e}function Ee(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}function Ce(t){if(null!=t.h)return t.i.concat(t.h.D);if(null!=t.g&&0!==t.g.size){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return S(t.i)}function Ie(t){if(t.V&&"function"==typeof t.V)return t.V();if("undefined"!==typeof Map&&t instanceof Map||"undefined"!==typeof Set&&t instanceof Set)return Array.from(t.values());if("string"===typeof t)return t.split("");if(c(t)){for(var e=[],n=t.length,i=0;i<n;i++)e.push(t[i]);return e}for(i in e=[],n=0,t)e[n++]=t[i];return e}function Se(t){if(t.na&&"function"==typeof t.na)return t.na();if(!t.V||"function"!=typeof t.V){if("undefined"!==typeof Map&&t instanceof Map)return Array.from(t.keys());if(!("undefined"!==typeof Set&&t instanceof Set)){if(c(t)||"string"===typeof t){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const i in t)e[n++]=i;return e}}}function ke(t,e){if(t.forEach&&"function"==typeof t.forEach)t.forEach(e,void 0);else if(c(t)||"string"===typeof t)Array.prototype.forEach.call(t,e,void 0);else for(var n=Se(t),i=Ie(t),s=i.length,r=0;r<s;r++)e.call(void 0,i[r],n&&n[r],t)}_e.prototype.cancel=function(){if(this.i=Ce(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&0!==this.g.size){for(const t of this.g.values())t.cancel();this.g.clear()}};var Ae=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Oe(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var i=t[n].indexOf("="),s=null;if(0<=i){var r=t[n].substring(0,i);s=t[n].substring(i+1)}else r=t[n];e(r,s?decodeURIComponent(s.replace(/\+/g," ")):"")}}}function Re(t){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,t instanceof Re){this.h=t.h,Ne(this,t.j),this.o=t.o,this.g=t.g,De(this,t.s),this.l=t.l;var e=t.i,n=new qe;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),Me(this,n),this.m=t.m}else t&&(e=String(t).match(Ae))?(this.h=!1,Ne(this,e[1]||"",!0),this.o=Ue(e[2]||""),this.g=Ue(e[3]||"",!0),De(this,e[4]),this.l=Ue(e[5]||"",!0),Me(this,e[6]||"",!0),this.m=Ue(e[7]||"")):(this.h=!1,this.i=new qe(null,this.h))}function Pe(t){return new Re(t)}function Ne(t,e,n){t.j=n?Ue(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function De(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.s=e}else t.s=null}function Me(t,e,n){e instanceof qe?(t.i=e,Je(t.i,t.h)):(n||(e=Ve(e,We)),t.i=new qe(e,t.h))}function Le(t,e,n){t.i.set(e,n)}function Fe(t){return Le(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function Ue(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function Ve(t,e,n){return"string"===typeof t?(t=encodeURI(t).replace(e,je),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function je(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(15&t).toString(16)}Re.prototype.toString=function(){var t=[],e=this.j;e&&t.push(Ve(e,ze,!0),":");var n=this.g;return(n||"file"==e)&&(t.push("//"),(e=this.o)&&t.push(Ve(e,ze,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.s,null!=n&&t.push(":",String(n))),(n=this.l)&&(this.g&&"/"!=n.charAt(0)&&t.push("/"),t.push(Ve(n,"/"==n.charAt(0)?$e:Be,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.m)&&t.push("#",Ve(n,He)),t.join("")};var ze=/[#\/\?@]/g,Be=/[#\?:]/g,$e=/[#\?]/g,We=/[#\?@]/g,He=/#/g;function qe(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function Ke(t){t.g||(t.g=new Map,t.h=0,t.i&&Oe(t.i,(function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)})))}function Ge(t,e){Ke(t),e=Xe(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function Ye(t,e){return Ke(t),e=Xe(t,e),t.g.has(e)}function Qe(t,e,n){Ge(t,e),0<n.length&&(t.i=null,t.g.set(Xe(t,e),S(n)),t.h+=n.length)}function Xe(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function Je(t,e){e&&!t.j&&(Ke(t),t.i=null,t.g.forEach((function(t,e){var n=e.toLowerCase();e!=n&&(Ge(this,e),Qe(this,n,t))}),t)),t.j=e}function Ze(t,e){const n=new Gt;if(a.Image){const i=new Image;i.onload=C(en,n,"TestLoadImage: loaded",!0,e,i),i.onerror=C(en,n,"TestLoadImage: error",!1,e,i),i.onabort=C(en,n,"TestLoadImage: abort",!1,e,i),i.ontimeout=C(en,n,"TestLoadImage: timeout",!1,e,i),a.setTimeout((function(){i.ontimeout&&i.ontimeout()}),1e4),i.src=t}else e(!1)}function tn(t,e){const n=new Gt,i=new AbortController,s=setTimeout((()=>{i.abort(),en(n,"TestPingServer: timeout",!1,e)}),1e4);fetch(t,{signal:i.signal}).then((t=>{clearTimeout(s),t.ok?en(n,"TestPingServer: ok",!0,e):en(n,"TestPingServer: server error",!1,e)})).catch((()=>{clearTimeout(s),en(n,"TestPingServer: error",!1,e)}))}function en(t,e,n,i,s){try{s&&(s.onload=null,s.onerror=null,s.onabort=null,s.ontimeout=null),i(n)}catch(r){}}function nn(){this.g=new Pt}function sn(t,e,n){const i=n||"";try{ke(t,(function(t,n){let s=t;l(t)&&(s=Ot(t)),e.push(i+n+"="+encodeURIComponent(s))}))}catch(s){throw e.push(i+"type="+encodeURIComponent("_badmap")),s}}function rn(t){this.l=t.Ub||null,this.j=t.eb||!1}function on(t,e){wt.call(this),this.D=t,this.o=e,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}function an(t){t.j.read().then(t.Pa.bind(t)).catch(t.ga.bind(t))}function cn(t){t.readyState=4,t.l=null,t.j=null,t.v=null,ln(t)}function ln(t){t.onreadystatechange&&t.onreadystatechange.call(t)}function hn(t){let e="";return D(t,(function(t,n){e+=n,e+=":",e+=t,e+="\r\n"})),e}function un(t,e,n){t:{for(i in n){var i=!1;break t}i=!0}i||(n=hn(n),"string"===typeof t?null!=n&&encodeURIComponent(String(n)):Le(t,e,n))}function dn(t){wt.call(this),this.headers=new Map,this.o=t||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}t=qe.prototype,t.add=function(t,e){Ke(this),this.i=null,t=Xe(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this},t.forEach=function(t,e){Ke(this),this.g.forEach((function(n,i){n.forEach((function(n){t.call(e,n,i,this)}),this)}),this)},t.na=function(){Ke(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let i=0;i<e.length;i++){const s=t[i];for(let t=0;t<s.length;t++)n.push(e[i])}return n},t.V=function(t){Ke(this);let e=[];if("string"===typeof t)Ye(this,t)&&(e=e.concat(this.g.get(Xe(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e},t.set=function(t,e){return Ke(this),this.i=null,t=Xe(this,t),Ye(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this},t.get=function(t,e){return t?(t=this.V(t),0<t.length?String(t[0]):e):e},t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var i=e[n];const r=encodeURIComponent(String(i)),o=this.V(i);for(i=0;i<o.length;i++){var s=r;""!==o[i]&&(s+="="+encodeURIComponent(String(o[i]))),t.push(s)}}return this.i=t.join("&")},I(rn,Nt),rn.prototype.g=function(){return new on(this.l,this.j)},rn.prototype.i=function(t){return function(){return t}}({}),I(on,wt),t=on.prototype,t.open=function(t,e){if(0!=this.readyState)throw this.abort(),Error("Error reopening a connection");this.B=t,this.A=e,this.readyState=1,ln(this)},t.send=function(t){if(1!=this.readyState)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.u,method:this.B,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||a).fetch(new Request(this.A,e)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch((()=>{})),1<=this.readyState&&this.g&&4!=this.readyState&&(this.g=!1,cn(this)),this.readyState=0},t.Sa=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,ln(this)),this.g&&(this.readyState=3,ln(this),this.g)))if("arraybuffer"===this.responseType)t.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if("undefined"!==typeof a.ReadableStream&&"body"in t){if(this.j=t.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;an(this)}else t.text().then(this.Ra.bind(this),this.ga.bind(this))},t.Pa=function(t){if(this.g){if(this.o&&t.value)this.response.push(t.value);else if(!this.o){var e=t.value?t.value:new Uint8Array(0);(e=this.v.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?cn(this):ln(this),3==this.readyState&&an(this)}},t.Ra=function(t){this.g&&(this.response=this.responseText=t,cn(this))},t.Qa=function(t){this.g&&(this.response=t,cn(this))},t.ga=function(){this.g&&cn(this)},t.setRequestHeader=function(t,e){this.u.append(t,e)},t.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join("\r\n")},Object.defineProperty(on.prototype,"withCredentials",{get:function(){return"include"===this.m},set:function(t){this.m=t?"include":"same-origin"}}),I(dn,wt);var fn=/^https?$/i,pn=["POST","PUT"];function gn(t,e){t.h=!1,t.g&&(t.j=!0,t.g.abort(),t.j=!1),t.l=e,t.m=5,mn(t),vn(t)}function mn(t){t.A||(t.A=!0,Tt(t,"complete"),Tt(t,"error"))}function yn(t){if(t.h&&"undefined"!=typeof o&&(!t.v[1]||4!=bn(t)||2!=t.Z()))if(t.u&&4==bn(t))Et(t.Ea,0,t);else if(Tt(t,"readystatechange"),4==bn(t)){t.h=!1;try{const o=t.Z();t:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break t;default:e=!1}var n;if(!(n=e)){var i;if(i=0===o){var s=String(t.D).match(Ae)[1]||null;!s&&a.self&&a.self.location&&(s=a.self.location.protocol.slice(0,-1)),i=!fn.test(s?s.toLowerCase():"")}n=i}if(n)Tt(t,"complete"),Tt(t,"success");else{t.m=6;try{var r=2<bn(t)?t.g.statusText:""}catch(c){r=""}t.l=r+" ["+t.Z()+"]",mn(t)}}finally{vn(t)}}}function vn(t,e){if(t.g){_n(t);const i=t.g,s=t.v[0]?()=>{}:null;t.g=null,t.v=null,e||Tt(t,"ready");try{i.onreadystatechange=s}catch(n){}}}function _n(t){t.I&&(a.clearTimeout(t.I),t.I=null)}function bn(t){return t.g?t.g.readyState:0}function wn(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.H){case"":case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch(E){return null}}function Tn(t){const e={};t=(t.g&&2<=bn(t)&&t.g.getAllResponseHeaders()||"").split("\r\n");for(let i=0;i<t.length;i++){if(O(t[i]))continue;var n=V(t[i]);const s=n[0];if(n=n[1],"string"!==typeof n)continue;n=n.trim();const r=e[s]||[];e[s]=r,r.push(n)}M(e,(function(t){return t.join(", ")}))}function xn(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function En(t){this.Aa=0,this.i=[],this.j=new Gt,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=xn("failFast",!1,t),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=xn("baseRetryDelayMs",5e3,t),this.cb=xn("retryDelaySeedMs",1e4,t),this.Wa=xn("forwardChannelMaxRetries",2,t),this.wa=xn("forwardChannelRequestTimeoutMs",2e4,t),this.pa=t&&t.xmlHttpFactory||void 0,this.Xa=t&&t.Tb||void 0,this.Ca=t&&t.useFetchStreams||!1,this.L=void 0,this.J=t&&t.supportsCrossDomainXhr||!1,this.K="",this.h=new _e(t&&t.concurrentRequestLimit),this.Da=new nn,this.P=t&&t.fastHandshake||!1,this.O=t&&t.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=t&&t.Rb||!1,t&&t.xa&&this.j.xa(),t&&t.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&t&&t.detectBufferingProxy||!1,this.ja=void 0,t&&t.longPollingTimeout&&0<t.longPollingTimeout&&(this.ja=t.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}function Cn(t){if(Sn(t),3==t.G){var e=t.U++,n=Pe(t.I);if(Le(n,"SID",t.K),Le(n,"RID",e),Le(n,"TYPE","terminate"),Rn(t,n),e=new se(t,t.j,e),e.L=2,e.v=Fe(Pe(n)),n=!1,a.navigator&&a.navigator.sendBeacon)try{n=a.navigator.sendBeacon(e.v.toString(),"")}catch(i){}!n&&a.Image&&((new Image).src=e.v,n=!0),n||(e.g=$n(e.j,null),e.g.ea(e.v)),e.F=Date.now(),de(e)}zn(t)}function In(t){t.g&&(Mn(t),t.g.cancel(),t.g=null)}function Sn(t){In(t),t.u&&(a.clearTimeout(t.u),t.u=null),Fn(t),t.h.cancel(),t.s&&("number"===typeof t.s&&a.clearTimeout(t.s),t.s=null)}function kn(t){if(!be(t.h)&&!t.s){t.s=!0;var e=t.Ga;H||G(),q||(H(),q=!0),K.add(e,t),t.B=0}}function An(t,e){return!(we(t.h)>=t.h.j-(t.s?1:0))&&(t.s?(t.i=e.D.concat(t.i),!0):!(1==t.G||2==t.G||t.B>=(t.Va?0:t.Wa))&&(t.s=Kt(x(t.Ga,t,e),Vn(t,t.B)),t.B++,!0))}function On(t,e){var n;n=e?e.l:t.U++;const i=Pe(t.I);Le(i,"SID",t.K),Le(i,"RID",n),Le(i,"AID",t.T),Rn(t,i),t.m&&t.o&&un(i,t.m,t.o),n=new se(t,t.j,n,t.B+1),null===t.m&&(n.H=t.o),e&&(t.i=e.D.concat(t.i)),e=Pn(t,n,1e3),n.I=Math.round(.5*t.wa)+Math.round(.5*t.wa*Math.random()),xe(t.h,n),ce(n,i,e)}function Rn(t,e){t.H&&D(t.H,(function(t,n){Le(e,n,t)})),t.l&&ke({},(function(t,n){Le(e,n,t)}))}function Pn(t,e,n){n=Math.min(t.i.length,n);var i=t.l?x(t.l.Na,t.l,t):null;t:{var s=t.i;let e=-1;for(;;){const t=["count="+n];-1==e?0<n?(e=s[0].g,t.push("ofs="+e)):e=0:t.push("ofs="+e);let r=!0;for(let o=0;o<n;o++){let n=s[o].g;const a=s[o].map;if(n-=e,0>n)e=Math.max(0,s[o].g-100),r=!1;else try{sn(a,t,"req"+n+"_")}catch(w){i&&i(a)}}if(r){i=t.join("&");break t}}}return t=t.i.splice(0,n),e.D=t,i}function Nn(t){if(!t.g&&!t.u){t.Y=1;var e=t.Fa;H||G(),q||(H(),q=!0),K.add(e,t),t.v=0}}function Dn(t){return!(t.g||t.u||3<=t.v)&&(t.Y++,t.u=Kt(x(t.Fa,t),Vn(t,t.v)),t.v++,!0)}function Mn(t){null!=t.A&&(a.clearTimeout(t.A),t.A=null)}function Ln(t){t.g=new se(t,t.j,"rpc",t.Y),null===t.m&&(t.g.H=t.o),t.g.O=0;var e=Pe(t.qa);Le(e,"RID","rpc"),Le(e,"SID",t.K),Le(e,"AID",t.T),Le(e,"CI",t.F?"0":"1"),!t.F&&t.ja&&Le(e,"TO",t.ja),Le(e,"TYPE","xmlhttp"),Rn(t,e),t.m&&t.o&&un(e,t.m,t.o),t.L&&(t.g.I=t.L);var n=t.g;t=t.ia,n.L=1,n.v=Fe(Pe(e)),n.m=null,n.P=!0,le(n,t)}function Fn(t){null!=t.C&&(a.clearTimeout(t.C),t.C=null)}function Un(t,e){var n=null;if(t.g==e){Fn(t),Mn(t),t.g=null;var i=2}else{if(!Te(t.h,e))return;n=e.D,Ee(t.h,e),i=1}if(0!=t.G)if(e.o)if(1==i){n=e.m?e.m.length:0,e=Date.now()-e.F;var s=t.B;i=zt(),Tt(i,new qt(i,n)),kn(t)}else Nn(t);else if(s=e.s,3==s||0==s&&0<e.X||!(1==i&&An(t,e)||2==i&&Dn(t)))switch(n&&0<n.length&&(e=t.h,e.i=e.i.concat(n)),s){case 1:jn(t,5);break;case 4:jn(t,10);break;case 3:jn(t,6);break;default:jn(t,2)}}function Vn(t,e){let n=t.Ta+Math.floor(Math.random()*t.cb);return t.isActive()||(n*=2),n*e}function jn(t,e){if(t.j.info("Error code "+e),2==e){var n=x(t.fb,t),i=t.Xa;const e=!i;i=new Re(i||"//www.google.com/images/cleardot.gif"),a.location&&"http"==a.location.protocol||Ne(i,"https"),Fe(i),e?Ze(i.toString(),n):tn(i.toString(),n)}else Ht(2);t.G=0,t.l&&t.l.sa(e),zn(t),Sn(t)}function zn(t){if(t.G=0,t.ka=[],t.l){const e=Ce(t.h);0==e.length&&0==t.i.length||(k(t.ka,e),k(t.ka,t.i),t.h.i.length=0,S(t.i),t.i.length=0),t.l.ra()}}function Bn(t,e,n){var i=n instanceof Re?Pe(n):new Re(n);if(""!=i.g)e&&(i.g=e+"."+i.g),De(i,i.s);else{var s=a.location;i=s.protocol,e=e?e+"."+s.hostname:s.hostname,s=+s.port;var r=new Re(null);i&&Ne(r,i),e&&(r.g=e),s&&De(r,s),n&&(r.l=n),i=r}return n=t.D,e=t.ya,n&&e&&Le(i,n,e),Le(i,"VER",t.la),Rn(t,i),i}function $n(t,e,n){if(e&&!t.J)throw Error("Can't create secondary domain capable XhrIo object.");return e=t.Ca&&!t.pa?new dn(new rn({eb:n})):new dn(t.pa),e.Ha(t.J),e}function Wn(){}function Hn(){}function qn(t,e){wt.call(this),this.g=new En(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.o=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.va&&(t?t["X-WebChannel-Client-Profile"]=e.va:t={"X-WebChannel-Client-Profile":e.va}),this.g.S=t,(t=e&&e.Sb)&&!O(t)&&(this.g.m=t),this.v=e&&e.supportsCrossDomainXhr||!1,this.u=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!O(e)&&(this.g.D=e,t=this.h,null!==t&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new Yn(this)}function Kn(t){Ft.call(this),t.__headers__&&(this.headers=t.__headers__,this.statusCode=t.__status__,delete t.__headers__,delete t.__status__);var e=t.__sm__;if(e){t:{for(const n in e){t=n;break t}t=void 0}(this.i=t)&&(t=this.i,e=null!==e&&t in e?e[t]:void 0),this.data=e}else this.data=t}function Gn(){Ut.call(this),this.status=1}function Yn(t){this.g=t}t=dn.prototype,t.Ha=function(t){this.J=t},t.ea=function(t,e,n,i){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+t);e=e?e.toUpperCase():"GET",this.D=t,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():te.g(),this.v=this.o?Dt(this.o):Dt(te),this.g.onreadystatechange=x(this.Ea,this);try{this.B=!0,this.g.open(e,String(t),!0),this.B=!1}catch(r){return void gn(this,r)}if(t=n||"",n=new Map(this.headers),i)if(Object.getPrototypeOf(i)===Object.prototype)for(var s in i)n.set(s,i[s]);else{if("function"!==typeof i.keys||"function"!==typeof i.get)throw Error("Unknown input type for opt_headers: "+String(i));for(const t of i.keys())n.set(t,i.get(t))}i=Array.from(n.keys()).find((t=>"content-type"==t.toLowerCase())),s=a.FormData&&t instanceof a.FormData,!(0<=Array.prototype.indexOf.call(pn,e,void 0))||i||s||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[o,a]of n)this.g.setRequestHeader(o,a);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{_n(this),this.u=!0,this.g.send(t),this.u=!1}catch(r){gn(this,r)}},t.abort=function(t){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=t||7,Tt(this,"complete"),Tt(this,"abort"),vn(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),vn(this,!0)),dn.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?yn(this):this.bb())},t.bb=function(){yn(this)},t.isActive=function(){return!!this.g},t.Z=function(){try{return 2<bn(this)?this.g.status:-1}catch(t){return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch(t){return""}},t.Oa=function(t){if(this.g){var e=this.g.responseText;return t&&0==e.indexOf(t)&&(e=e.substring(t.length)),Rt(e)}},t.Ba=function(){return this.m},t.Ka=function(){return"string"===typeof this.l?this.l:String(this.l)},t=En.prototype,t.la=8,t.G=1,t.connect=function(t,e,n,i){Ht(0),this.W=t,this.H=e||{},n&&void 0!==i&&(this.H.OSID=n,this.H.OAID=i),this.F=this.X,this.I=Bn(this,null,this.W),kn(this)},t.Ga=function(t){if(this.s)if(this.s=null,1==this.G){if(!t){this.U=Math.floor(1e5*Math.random()),t=this.U++;const s=new se(this,this.j,t);let r=this.o;if(this.S&&(r?(r=L(r),U(r,this.S)):r=this.S),null!==this.m||this.O||(s.H=r,r=null),this.P)t:{for(var e=0,n=0;n<this.i.length;n++){var i=this.i[n];if(i="__data__"in i.map&&(i=i.map.__data__,"string"===typeof i)?i.length:void 0,void 0===i)break;if(e+=i,4096<e){e=n;break t}if(4096===e||n===this.i.length-1){e=n+1;break t}}e=1e3}else e=1e3;e=Pn(this,s,e),n=Pe(this.I),Le(n,"RID",t),Le(n,"CVER",22),this.D&&Le(n,"X-HTTP-Session-Id",this.D),Rn(this,n),r&&(this.O?e="headers="+encodeURIComponent(String(hn(r)))+"&"+e:this.m&&un(n,this.m,r)),xe(this.h,s),this.Ua&&Le(n,"TYPE","init"),this.P?(Le(n,"$req",e),Le(n,"SID","null"),s.T=!0,ce(s,n,null)):ce(s,n,e),this.G=2}}else 3==this.G&&(t?On(this,t):0==this.i.length||be(this.h)||On(this))},t.Fa=function(){if(this.u=null,Ln(this),this.ba&&!(this.M||null==this.g||0>=this.R)){var t=2*this.R;this.j.info("BP detection timer enabled: "+t),this.A=Kt(x(this.ab,this),t)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,Ht(10),In(this),Ln(this))},t.Za=function(){null!=this.C&&(this.C=null,In(this),Dn(this),Ht(19))},t.fb=function(t){t?(this.j.info("Successfully pinged google.com"),Ht(2)):(this.j.info("Failed to ping google.com"),Ht(1))},t.isActive=function(){return!!this.l&&this.l.isActive(this)},t=Wn.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){},Hn.prototype.g=function(t,e){return new qn(t,e)},I(qn,wt),qn.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},qn.prototype.close=function(){Cn(this.g)},qn.prototype.o=function(t){var e=this.g;if("string"===typeof t){var n={};n.__data__=t,t=n}else this.u&&(n={},n.__data__=Ot(t),t=n);e.i.push(new ve(e.Ya++,t)),3==e.G&&kn(e)},qn.prototype.N=function(){this.g.l=null,delete this.j,Cn(this.g),delete this.g,qn.aa.N.call(this)},I(Kn,Ft),I(Gn,Ut),I(Yn,Wn),Yn.prototype.ua=function(){Tt(this.g,"a")},Yn.prototype.ta=function(t){Tt(this.g,new Kn(t))},Yn.prototype.sa=function(t){Tt(this.g,new Gn)},Yn.prototype.ra=function(){Tt(this.g,"b")},Hn.prototype.createWebChannel=Hn.prototype.g,qn.prototype.send=qn.prototype.o,qn.prototype.open=qn.prototype.m,qn.prototype.close=qn.prototype.close,v=b.createWebChannelTransport=function(){return new Hn},y=b.getStatEventTarget=function(){return zt()},m=b.Event=Vt,g=b.Stat={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},ee.NO_ERROR=0,ee.TIMEOUT=8,ee.HTTP_ERROR=6,p=b.ErrorCode=ee,ne.COMPLETE="complete",f=b.EventType=ne,Mt.EventType=Lt,Lt.OPEN="a",Lt.CLOSE="b",Lt.ERROR="c",Lt.MESSAGE="d",wt.prototype.listen=wt.prototype.K,d=b.WebChannel=Mt,b.FetchXmlHttpFactory=rn,dn.prototype.listenOnce=dn.prototype.L,dn.prototype.getLastError=dn.prototype.Ka,dn.prototype.getLastErrorCode=dn.prototype.Ba,dn.prototype.getStatus=dn.prototype.Z,dn.prototype.getResponseJson=dn.prototype.Oa,dn.prototype.getResponseText=dn.prototype.oa,dn.prototype.send=dn.prototype.ea,dn.prototype.setWithCredentials=dn.prototype.Ha,u=b.XhrIo=dn}).apply("undefined"!==typeof _?_:"undefined"!==typeof self?self:"undefined"!==typeof window?window:{});const w="@firebase/firestore";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class T{constructor(t){this.uid=t}isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}T.UNAUTHENTICATED=new T(null),T.GOOGLE_CREDENTIALS=new T("google-credentials-uid"),T.FIRST_PARTY=new T("first-party-uid"),T.MOCK_USER=new T("mock-user");
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
let x="11.0.0";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const E=new a.Vy("@firebase/firestore");function C(){return E.logLevel}function I(t,...e){if(E.logLevel<=a.$b.DEBUG){const n=e.map(A);E.debug(`Firestore (${x}): ${t}`,...n)}}function S(t,...e){if(E.logLevel<=a.$b.ERROR){const n=e.map(A);E.error(`Firestore (${x}): ${t}`,...n)}}function k(t,...e){if(E.logLevel<=a.$b.WARN){const n=e.map(A);E.warn(`Firestore (${x}): ${t}`,...n)}}function A(t){if("string"==typeof t)return t;try{
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
return function(t){return JSON.stringify(t)}(t)}catch(e){return t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function O(t="Unexpected state"){const e=`FIRESTORE (${x}) INTERNAL ASSERTION FAILED: `+t;throw S(e),new Error(e)}function R(t,e){t||O()}function P(t,e){return t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const N={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class D extends c.g{constructor(t,e){super(t,e),this.code=t,this.message=e,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M{constructor(){this.promise=new Promise(((t,e)=>{this.resolve=t,this.reject=e}))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class F{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable((()=>e(T.UNAUTHENTICATED)))}shutdown(){}}class U{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,e){this.changeListener=e,t.enqueueRetryable((()=>e(this.token.user)))}shutdown(){this.changeListener=null}}class V{constructor(t){this.t=t,this.currentUser=T.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,e){R(void 0===this.o);let n=this.i;const i=t=>this.i!==n?(n=this.i,e(t)):Promise.resolve();let s=new M;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new M,t.enqueueRetryable((()=>i(this.currentUser)))};const r=()=>{const e=s;t.enqueueRetryable((async()=>{await e.promise,await i(this.currentUser)}))},o=t=>{I("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=t,this.o&&(this.auth.addAuthTokenListener(this.o),r())};this.t.onInit((t=>o(t))),setTimeout((()=>{if(!this.auth){const t=this.t.getImmediate({optional:!0});t?o(t):(I("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new M)}}),0),r()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then((e=>this.i!==t?(I("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):e?(R("string"==typeof e.accessToken),new L(e.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const t=this.auth&&this.auth.getUid();return R(null===t||"string"==typeof t),new T(t)}}class j{constructor(t,e,n){this.l=t,this.h=e,this.P=n,this.type="FirstParty",this.user=T.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const t=this.T();return t&&this.I.set("Authorization",t),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class z{constructor(t,e,n){this.l=t,this.h=e,this.P=n}getToken(){return Promise.resolve(new j(this.l,this.h,this.P))}start(t,e){t.enqueueRetryable((()=>e(T.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class B{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class ${constructor(t){this.A=t,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(t,e){R(void 0===this.o);const n=t=>{null!=t.error&&I("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${t.error.message}`);const n=t.token!==this.R;return this.R=t.token,I("FirebaseAppCheckTokenProvider",`Received ${n?"new":"existing"} token.`),n?e(t.token):Promise.resolve()};this.o=e=>{t.enqueueRetryable((()=>n(e)))};const i=t=>{I("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=t,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit((t=>i(t))),setTimeout((()=>{if(!this.appCheck){const t=this.A.getImmediate({optional:!0});t?i(t):I("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then((t=>t?(R("string"==typeof t.token),this.R=t.token,new B(t.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function W(t){const e="undefined"!=typeof self&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&"function"==typeof e.getRandomValues)e.getRandomValues(n);else for(let i=0;i<t;i++)n[i]=Math.floor(256*Math.random());return n}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class H{static newId(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=Math.floor(256/t.length)*t.length;let n="";for(;n.length<20;){const i=W(40);for(let s=0;s<i.length;++s)n.length<20&&i[s]<e&&(n+=t.charAt(i[s]%t.length))}return n}}function q(t,e){return t<e?-1:t>e?1:0}function K(t,e,n){return t.length===e.length&&t.every(((t,i)=>n(t,e[i])))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class G{constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new D(N.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new D(N.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<-62135596800)throw new D(N.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new D(N.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}static now(){return G.fromMillis(Date.now())}static fromDate(t){return G.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),n=Math.floor(1e6*(t-1e3*e));return new G(e,n)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?q(this.nanoseconds,t.nanoseconds):q(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y{constructor(t){this.timestamp=t}static fromTimestamp(t){return new Y(t)}static min(){return new Y(new G(0,0))}static max(){return new Y(new G(253402300799,999999999))}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Q{constructor(t,e,n){void 0===e?e=0:e>t.length&&O(),void 0===n?n=t.length-e:n>t.length-e&&O(),this.segments=t,this.offset=e,this.len=n}get length(){return this.len}isEqual(t){return 0===Q.comparator(this,t)}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof Q?t.forEach((t=>{e.push(t)})):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=void 0===t?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return 0===this.length}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,n=this.limit();e<n;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const n=Math.min(t.length,e.length);for(let i=0;i<n;i++){const n=t.get(i),s=e.get(i);if(n<s)return-1;if(n>s)return 1}return t.length<e.length?-1:t.length>e.length?1:0}}class X extends Q{construct(t,e,n){return new X(t,e,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...t){const e=[];for(const n of t){if(n.indexOf("//")>=0)throw new D(N.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);e.push(...n.split("/").filter((t=>t.length>0)))}return new X(e)}static emptyPath(){return new X([])}}const J=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Z extends Q{construct(t,e,n){return new Z(t,e,n)}static isValidIdentifier(t){return J.test(t)}canonicalString(){return this.toArray().map((t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Z.isValidIdentifier(t)||(t="`"+t+"`"),t))).join(".")}toString(){return this.canonicalString()}isKeyField(){return 1===this.length&&"__name__"===this.get(0)}static keyField(){return new Z(["__name__"])}static fromServerFormat(t){const e=[];let n="",i=0;const s=()=>{if(0===n.length)throw new D(N.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(n),n=""};let r=!1;for(;i<t.length;){const e=t[i];if("\\"===e){if(i+1===t.length)throw new D(N.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const e=t[i+1];if("\\"!==e&&"."!==e&&"`"!==e)throw new D(N.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);n+=e,i+=2}else"`"===e?(r=!r,i++):"."!==e||r?(n+=e,i++):(s(),i++)}if(s(),r)throw new D(N.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new Z(e)}static emptyPath(){return new Z([])}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tt{constructor(t){this.path=t}static fromPath(t){return new tt(X.fromString(t))}static fromName(t){return new tt(X.fromString(t).popFirst(5))}static empty(){return new tt(X.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return null!==t&&0===X.comparator(this.path,t.path)}toString(){return this.path.toString()}static comparator(t,e){return X.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new tt(new X(t.slice()))}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class et{constructor(t,e,n,i){this.indexId=t,this.collectionGroup=e,this.fields=n,this.indexState=i}}et.UNKNOWN_ID=-1;function nt(t,e){const n=t.toTimestamp().seconds,i=t.toTimestamp().nanoseconds+1,s=Y.fromTimestamp(1e9===i?new G(n+1,0):new G(n,i));return new st(s,tt.empty(),e)}function it(t){return new st(t.readTime,t.key,-1)}class st{constructor(t,e,n){this.readTime=t,this.documentKey=e,this.largestBatchId=n}static min(){return new st(Y.min(),tt.empty(),-1)}static max(){return new st(Y.max(),tt.empty(),-1)}}function rt(t,e){let n=t.readTime.compareTo(e.readTime);return 0!==n?n:(n=tt.comparator(t.documentKey,e.documentKey),0!==n?n:q(t.largestBatchId,e.largestBatchId)
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */)}const ot="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class at{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((t=>t()))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ct(t){if(t.code!==N.FAILED_PRECONDITION||t.message!==ot)throw t;I("LocalStore","Unexpectedly lost primary lease")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lt{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t((t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)}),(t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)}))}catch(t){return this.next(void 0,t)}next(t,e){return this.callbackAttached&&O(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(e,this.error):this.wrapSuccess(t,this.result):new lt(((n,i)=>{this.nextCallback=e=>{this.wrapSuccess(t,e).next(n,i)},this.catchCallback=t=>{this.wrapFailure(e,t).next(n,i)}}))}toPromise(){return new Promise(((t,e)=>{this.next(t,e)}))}wrapUserFunction(t){try{const e=t();return e instanceof lt?e:lt.resolve(e)}catch(t){return lt.reject(t)}}wrapSuccess(t,e){return t?this.wrapUserFunction((()=>t(e))):lt.resolve(e)}wrapFailure(t,e){return t?this.wrapUserFunction((()=>t(e))):lt.reject(e)}static resolve(t){return new lt(((e,n)=>{e(t)}))}static reject(t){return new lt(((e,n)=>{n(t)}))}static waitFor(t){return new lt(((e,n)=>{let i=0,s=0,r=!1;t.forEach((t=>{++i,t.next((()=>{++s,r&&s===i&&e()}),(t=>n(t)))})),r=!0,s===i&&e()}))}static or(t){let e=lt.resolve(!1);for(const n of t)e=e.next((t=>t?lt.resolve(t):n()));return e}static forEach(t,e){const n=[];return t.forEach(((t,i)=>{n.push(e.call(this,t,i))})),this.waitFor(n)}static mapArray(t,e){return new lt(((n,i)=>{const s=t.length,r=new Array(s);let o=0;for(let a=0;a<s;a++){const c=a;e(t[c]).next((t=>{r[c]=t,++o,o===s&&n(r)}),(t=>i(t)))}}))}static doWhile(t,e){return new lt(((n,i)=>{const s=()=>{!0===t()?e().next((()=>{s()}),i):n()};s()}))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ht(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function ut(t){return"IndexedDbTransactionError"===t.name}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class dt{constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=t=>this.ie(t),this.se=t=>e.writeSequenceNumber(t))}ie(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.se&&this.se(t),t}}function ft(t){return null==t}function pt(t){return 0===t&&1/t==-1/0}function gt(t){return"number"==typeof t&&Number.isInteger(t)&&!pt(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mt(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=vt(e)),e=yt(t.get(n),e);return vt(e)}function yt(t,e){let n=e;const i=t.length;for(let s=0;s<i;s++){const e=t.charAt(s);switch(e){case"\0":n+="";break;case"":n+="";break;default:n+=e}}return n}function vt(t){return t+""}dt.oe=-1;const _t=["mutationQueues","mutations","documentMutations","remoteDocuments","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries"],bt=["mutationQueues","mutations","documentMutations","remoteDocumentsV14","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries","documentOverlays"],wt=bt,Tt=[...wt,"indexConfiguration","indexState","indexEntries"];
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function xt(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Et(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function Ct(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class It{constructor(t,e){this.comparator=t,this.root=e||kt.EMPTY}insert(t,e){return new It(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,kt.BLACK,null,null))}remove(t){return new It(this.comparator,this.root.remove(t,this.comparator).copy(null,null,kt.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const n=this.comparator(t,e.key);if(0===n)return e.value;n<0?e=e.left:n>0&&(e=e.right)}return null}indexOf(t){let e=0,n=this.root;for(;!n.isEmpty();){const i=this.comparator(t,n.key);if(0===i)return e+n.left.size;i<0?n=n.left:(e+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal(((e,n)=>(t(e,n),!1)))}toString(){const t=[];return this.inorderTraversal(((e,n)=>(t.push(`${e}:${n}`),!1))),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new St(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new St(this.root,t,this.comparator,!1)}getReverseIterator(){return new St(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new St(this.root,t,this.comparator,!0)}}class St{constructor(t,e,n,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!t.isEmpty();)if(s=e?n(t.key,e):1,e&&i&&(s*=-1),s<0)t=this.isReverse?t.left:t.right;else{if(0===s){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class kt{constructor(t,e,n,i,s){this.key=t,this.value=e,this.color=null!=n?n:kt.RED,this.left=null!=i?i:kt.EMPTY,this.right=null!=s?s:kt.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,n,i,s){return new kt(null!=t?t:this.key,null!=e?e:this.value,null!=n?n:this.color,null!=i?i:this.left,null!=s?s:this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,n){let i=this;const s=n(t,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(t,e,n),null):0===s?i.copy(null,e,null,null,null):i.copy(null,null,null,null,i.right.insert(t,e,n)),i.fixUp()}removeMin(){if(this.left.isEmpty())return kt.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let n,i=this;if(e(t,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(t,e),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),0===e(t,i.key)){if(i.right.isEmpty())return kt.EMPTY;n=i.right.min(),i=i.copy(n.key,n.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(t,e))}return i.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,kt.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,kt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw O();if(this.right.isRed())throw O();const t=this.left.check();if(t!==this.right.check())throw O();return t+(this.isRed()?0:1)}}kt.EMPTY=null,kt.RED=!0,kt.BLACK=!1,kt.EMPTY=new class{constructor(){this.size=0}get key(){throw O()}get value(){throw O()}get color(){throw O()}get left(){throw O()}get right(){throw O()}copy(t,e,n,i,s){return this}insert(t,e,n){return new kt(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class At{constructor(t){this.comparator=t,this.data=new It(this.comparator)}has(t){return null!==this.data.get(t)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal(((e,n)=>(t(e),!1)))}forEachInRange(t,e){const n=this.data.getIteratorFrom(t[0]);for(;n.hasNext();){const i=n.getNext();if(this.comparator(i.key,t[1])>=0)return;e(i.key)}}forEachWhile(t,e){let n;for(n=void 0!==e?this.data.getIteratorFrom(e):this.data.getIterator();n.hasNext();)if(!t(n.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new Ot(this.data.getIterator())}getIteratorFrom(t){return new Ot(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach((t=>{e=e.add(t)})),e}isEqual(t){if(!(t instanceof At))return!1;if(this.size!==t.size)return!1;const e=this.data.getIterator(),n=t.data.getIterator();for(;e.hasNext();){const t=e.getNext().key,i=n.getNext().key;if(0!==this.comparator(t,i))return!1}return!0}toArray(){const t=[];return this.forEach((e=>{t.push(e)})),t}toString(){const t=[];return this.forEach((e=>t.push(e))),"SortedSet("+t.toString()+")"}copy(t){const e=new At(this.comparator);return e.data=t,e}}class Ot{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Rt{constructor(t){this.fields=t,t.sort(Z.comparator)}static empty(){return new Rt([])}unionWith(t){let e=new At(Z.comparator);for(const n of this.fields)e=e.add(n);for(const n of t)e=e.add(n);return new Rt(e.toArray())}covers(t){for(const e of this.fields)if(e.isPrefixOf(t))return!0;return!1}isEqual(t){return K(this.fields,t.fields,((t,e)=>t.isEqual(e)))}}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pt extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Nt{constructor(t){this.binaryString=t}static fromBase64String(t){const e=function(t){try{return atob(t)}catch(t){throw"undefined"!=typeof DOMException&&t instanceof DOMException?new Pt("Invalid base64 string: "+t):t}}(t);return new Nt(e)}static fromUint8Array(t){const e=function(t){let e="";for(let n=0;n<t.length;++n)e+=String.fromCharCode(t[n]);return e}(t);return new Nt(e)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const e=new Uint8Array(t.length);for(let n=0;n<t.length;n++)e[n]=t.charCodeAt(n);return e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return q(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}Nt.EMPTY_BYTE_STRING=new Nt("");const Dt=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Mt(t){if(R(!!t),"string"==typeof t){let e=0;const n=Dt.exec(t);if(R(!!n),n[1]){let t=n[1];t=(t+"000000000").substr(0,9),e=Number(t)}const i=new Date(t);return{seconds:Math.floor(i.getTime()/1e3),nanos:e}}return{seconds:Lt(t.seconds),nanos:Lt(t.nanos)}}function Lt(t){return"number"==typeof t?t:"string"==typeof t?Number(t):0}function Ft(t){return"string"==typeof t?Nt.fromBase64String(t):Nt.fromUint8Array(t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ut(t){var e,n;return"server_timestamp"===(null===(n=((null===(e=null==t?void 0:t.mapValue)||void 0===e?void 0:e.fields)||{}).__type__)||void 0===n?void 0:n.stringValue)}function Vt(t){const e=t.mapValue.fields.__previous_value__;return Ut(e)?Vt(e):e}function jt(t){const e=Mt(t.mapValue.fields.__local_write_time__.timestampValue);return new G(e.seconds,e.nanos)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zt{constructor(t,e,n,i,s,r,o,a,c){this.databaseId=t,this.appId=e,this.persistenceKey=n,this.host=i,this.ssl=s,this.forceLongPolling=r,this.autoDetectLongPolling=o,this.longPollingOptions=a,this.useFetchStreams=c}}class Bt{constructor(t,e){this.projectId=t,this.database=e||"(default)"}static empty(){return new Bt("","")}get isDefaultDatabase(){return"(default)"===this.database}isEqual(t){return t instanceof Bt&&t.projectId===this.projectId&&t.database===this.database}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $t={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Wt(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Ut(t)?4:oe(t)?9007199254740991:se(t)?10:11:O()}function Ht(t,e){if(t===e)return!0;const n=Wt(t);if(n!==Wt(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return jt(t).isEqual(jt(e));case 3:return function(t,e){if("string"==typeof t.timestampValue&&"string"==typeof e.timestampValue&&t.timestampValue.length===e.timestampValue.length)return t.timestampValue===e.timestampValue;const n=Mt(t.timestampValue),i=Mt(e.timestampValue);return n.seconds===i.seconds&&n.nanos===i.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(t,e){return Ft(t.bytesValue).isEqual(Ft(e.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(t,e){return Lt(t.geoPointValue.latitude)===Lt(e.geoPointValue.latitude)&&Lt(t.geoPointValue.longitude)===Lt(e.geoPointValue.longitude)}(t,e);case 2:return function(t,e){if("integerValue"in t&&"integerValue"in e)return Lt(t.integerValue)===Lt(e.integerValue);if("doubleValue"in t&&"doubleValue"in e){const n=Lt(t.doubleValue),i=Lt(e.doubleValue);return n===i?pt(n)===pt(i):isNaN(n)&&isNaN(i)}return!1}(t,e);case 9:return K(t.arrayValue.values||[],e.arrayValue.values||[],Ht);case 10:case 11:return function(t,e){const n=t.mapValue.fields||{},i=e.mapValue.fields||{};if(xt(n)!==xt(i))return!1;for(const s in n)if(n.hasOwnProperty(s)&&(void 0===i[s]||!Ht(n[s],i[s])))return!1;return!0}(t,e);default:return O()}}function qt(t,e){return void 0!==(t.values||[]).find((t=>Ht(t,e)))}function Kt(t,e){if(t===e)return 0;const n=Wt(t),i=Wt(e);if(n!==i)return q(n,i);switch(n){case 0:case 9007199254740991:return 0;case 1:return q(t.booleanValue,e.booleanValue);case 2:return function(t,e){const n=Lt(t.integerValue||t.doubleValue),i=Lt(e.integerValue||e.doubleValue);return n<i?-1:n>i?1:n===i?0:isNaN(n)?isNaN(i)?0:-1:1}(t,e);case 3:return Gt(t.timestampValue,e.timestampValue);case 4:return Gt(jt(t),jt(e));case 5:return q(t.stringValue,e.stringValue);case 6:return function(t,e){const n=Ft(t),i=Ft(e);return n.compareTo(i)}(t.bytesValue,e.bytesValue);case 7:return function(t,e){const n=t.split("/"),i=e.split("/");for(let s=0;s<n.length&&s<i.length;s++){const t=q(n[s],i[s]);if(0!==t)return t}return q(n.length,i.length)}(t.referenceValue,e.referenceValue);case 8:return function(t,e){const n=q(Lt(t.latitude),Lt(e.latitude));return 0!==n?n:q(Lt(t.longitude),Lt(e.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return Yt(t.arrayValue,e.arrayValue);case 10:return function(t,e){var n,i,s,r;const o=t.fields||{},a=e.fields||{},c=null===(n=o.value)||void 0===n?void 0:n.arrayValue,l=null===(i=a.value)||void 0===i?void 0:i.arrayValue,h=q((null===(s=null==c?void 0:c.values)||void 0===s?void 0:s.length)||0,(null===(r=null==l?void 0:l.values)||void 0===r?void 0:r.length)||0);return 0!==h?h:Yt(c,l)}(t.mapValue,e.mapValue);case 11:return function(t,e){if(t===$t.mapValue&&e===$t.mapValue)return 0;if(t===$t.mapValue)return 1;if(e===$t.mapValue)return-1;const n=t.fields||{},i=Object.keys(n),s=e.fields||{},r=Object.keys(s);i.sort(),r.sort();for(let o=0;o<i.length&&o<r.length;++o){const t=q(i[o],r[o]);if(0!==t)return t;const e=Kt(n[i[o]],s[r[o]]);if(0!==e)return e}return q(i.length,r.length)}(t.mapValue,e.mapValue);default:throw O()}}function Gt(t,e){if("string"==typeof t&&"string"==typeof e&&t.length===e.length)return q(t,e);const n=Mt(t),i=Mt(e),s=q(n.seconds,i.seconds);return 0!==s?s:q(n.nanos,i.nanos)}function Yt(t,e){const n=t.values||[],i=e.values||[];for(let s=0;s<n.length&&s<i.length;++s){const t=Kt(n[s],i[s]);if(t)return t}return q(n.length,i.length)}function Qt(t){return Xt(t)}function Xt(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(t){const e=Mt(t);return`time(${e.seconds},${e.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(t){return Ft(t).toBase64()}(t.bytesValue):"referenceValue"in t?function(t){return tt.fromName(t).toString()}(t.referenceValue):"geoPointValue"in t?function(t){return`geo(${t.latitude},${t.longitude})`}(t.geoPointValue):"arrayValue"in t?function(t){let e="[",n=!0;for(const i of t.values||[])n?n=!1:e+=",",e+=Xt(i);return e+"]"}(t.arrayValue):"mapValue"in t?function(t){const e=Object.keys(t.fields||{}).sort();let n="{",i=!0;for(const s of e)i?i=!1:n+=",",n+=`${s}:${Xt(t.fields[s])}`;return n+"}"}(t.mapValue):O()}function Jt(t){switch(Wt(t)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Vt(t);return e?16+Jt(e):16;case 5:return 2*t.stringValue.length;case 6:return Ft(t.bytesValue).approximateByteSize();case 7:return t.referenceValue.length;case 9:return function(t){return(t.values||[]).reduce(((t,e)=>t+Jt(e)),0)}(t.arrayValue);case 10:case 11:return function(t){let e=0;return Et(t.fields,((t,n)=>{e+=t.length+Jt(n)})),e}(t.mapValue);default:throw O()}}function Zt(t){return!!t&&"integerValue"in t}function te(t){return!!t&&"arrayValue"in t}function ee(t){return!!t&&"nullValue"in t}function ne(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function ie(t){return!!t&&"mapValue"in t}function se(t){var e,n;return"__vector__"===(null===(n=((null===(e=null==t?void 0:t.mapValue)||void 0===e?void 0:e.fields)||{}).__type__)||void 0===n?void 0:n.stringValue)}function re(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&"object"==typeof t.timestampValue)return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Et(t.mapValue.fields,((t,n)=>e.mapValue.fields[t]=re(n))),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=re(t.arrayValue.values[n]);return e}return Object.assign({},t)}function oe(t){return"__max__"===(((t.mapValue||{}).fields||{}).__type__||{}).stringValue}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ae{constructor(t){this.value=t}static empty(){return new ae({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let n=0;n<t.length-1;++n)if(e=(e.mapValue.fields||{})[t.get(n)],!ie(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=re(e)}setAll(t){let e=Z.emptyPath(),n={},i=[];t.forEach(((t,s)=>{if(!e.isImmediateParentOf(s)){const t=this.getFieldsMap(e);this.applyChanges(t,n,i),n={},i=[],e=s.popLast()}t?n[s.lastSegment()]=re(t):i.push(s.lastSegment())}));const s=this.getFieldsMap(e);this.applyChanges(s,n,i)}delete(t){const e=this.field(t.popLast());ie(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return Ht(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let n=0;n<t.length;++n){let i=e.mapValue.fields[t.get(n)];ie(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},e.mapValue.fields[t.get(n)]=i),e=i}return e.mapValue.fields}applyChanges(t,e,n){Et(e,((e,n)=>t[e]=n));for(const i of n)delete t[i]}clone(){return new ae(re(this.value))}}function ce(t){const e=[];return Et(t.fields,((t,n)=>{const i=new Z([t]);if(ie(n)){const t=ce(n.mapValue).fields;if(0===t.length)e.push(i);else for(const n of t)e.push(i.child(n))}else e.push(i)})),new Rt(e)
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class le{constructor(t,e,n,i,s,r,o){this.key=t,this.documentType=e,this.version=n,this.readTime=i,this.createTime=s,this.data=r,this.documentState=o}static newInvalidDocument(t){return new le(t,0,Y.min(),Y.min(),Y.min(),ae.empty(),0)}static newFoundDocument(t,e,n,i){return new le(t,1,e,Y.min(),n,i,0)}static newNoDocument(t,e){return new le(t,2,e,Y.min(),Y.min(),ae.empty(),0)}static newUnknownDocument(t,e){return new le(t,3,e,Y.min(),Y.min(),ae.empty(),2)}convertToFoundDocument(t,e){return!this.createTime.isEqual(Y.min())||2!==this.documentType&&0!==this.documentType||(this.createTime=t),this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=ae.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=ae.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Y.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return 1===this.documentState}get hasCommittedMutations(){return 2===this.documentState}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return 0!==this.documentType}isFoundDocument(){return 1===this.documentType}isNoDocument(){return 2===this.documentType}isUnknownDocument(){return 3===this.documentType}isEqual(t){return t instanceof le&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new le(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class he{constructor(t,e){this.position=t,this.inclusive=e}}function ue(t,e,n){let i=0;for(let s=0;s<t.position.length;s++){const r=e[s],o=t.position[s];if(i=r.field.isKeyField()?tt.comparator(tt.fromName(o.referenceValue),n.key):Kt(o,n.data.field(r.field)),"desc"===r.dir&&(i*=-1),0!==i)break}return i}function de(t,e){if(null===t)return null===e;if(null===e)return!1;if(t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Ht(t.position[n],e.position[n]))return!1;return!0}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fe{constructor(t,e="asc"){this.field=t,this.dir=e}}function pe(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ge{}class me extends ge{constructor(t,e,n){super(),this.field=t,this.op=e,this.value=n}static create(t,e,n){return t.isKeyField()?"in"===e||"not-in"===e?this.createKeyFieldInFilter(t,e,n):new Ee(t,e,n):"array-contains"===e?new ke(t,n):"in"===e?new Ae(t,n):"not-in"===e?new Oe(t,n):"array-contains-any"===e?new Re(t,n):new me(t,e,n)}static createKeyFieldInFilter(t,e,n){return"in"===e?new Ce(t,n):new Ie(t,n)}matches(t){const e=t.data.field(this.field);return"!="===this.op?null!==e&&this.matchesComparison(Kt(e,this.value)):null!==e&&Wt(this.value)===Wt(e)&&this.matchesComparison(Kt(e,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return 0===t;case"!=":return 0!==t;case">":return t>0;case">=":return t>=0;default:return O()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class ye extends ge{constructor(t,e){super(),this.filters=t,this.op=e,this.ae=null}static create(t,e){return new ye(t,e)}matches(t){return ve(this)?void 0===this.filters.find((e=>!e.matches(t))):void 0!==this.filters.find((e=>e.matches(t)))}getFlattenedFilters(){return null!==this.ae||(this.ae=this.filters.reduce(((t,e)=>t.concat(e.getFlattenedFilters())),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function ve(t){return"and"===t.op}function _e(t){return be(t)&&ve(t)}function be(t){for(const e of t.filters)if(e instanceof ye)return!1;return!0}function we(t){if(t instanceof me)return t.field.canonicalString()+t.op.toString()+Qt(t.value);if(_e(t))return t.filters.map((t=>we(t))).join(",");{const e=t.filters.map((t=>we(t))).join(",");return`${t.op}(${e})`}}function Te(t,e){return t instanceof me?function(t,e){return e instanceof me&&t.op===e.op&&t.field.isEqual(e.field)&&Ht(t.value,e.value)}(t,e):t instanceof ye?function(t,e){return e instanceof ye&&t.op===e.op&&t.filters.length===e.filters.length&&t.filters.reduce(((t,n,i)=>t&&Te(n,e.filters[i])),!0)}(t,e):void O()}function xe(t){return t instanceof me?function(t){return`${t.field.canonicalString()} ${t.op} ${Qt(t.value)}`}(t):t instanceof ye?function(t){return t.op.toString()+" {"+t.getFilters().map(xe).join(" ,")+"}"}(t):"Filter"}class Ee extends me{constructor(t,e,n){super(t,e,n),this.key=tt.fromName(n.referenceValue)}matches(t){const e=tt.comparator(t.key,this.key);return this.matchesComparison(e)}}class Ce extends me{constructor(t,e){super(t,"in",e),this.keys=Se("in",e)}matches(t){return this.keys.some((e=>e.isEqual(t.key)))}}class Ie extends me{constructor(t,e){super(t,"not-in",e),this.keys=Se("not-in",e)}matches(t){return!this.keys.some((e=>e.isEqual(t.key)))}}function Se(t,e){var n;return((null===(n=e.arrayValue)||void 0===n?void 0:n.values)||[]).map((t=>tt.fromName(t.referenceValue)))}class ke extends me{constructor(t,e){super(t,"array-contains",e)}matches(t){const e=t.data.field(this.field);return te(e)&&qt(e.arrayValue,this.value)}}class Ae extends me{constructor(t,e){super(t,"in",e)}matches(t){const e=t.data.field(this.field);return null!==e&&qt(this.value.arrayValue,e)}}class Oe extends me{constructor(t,e){super(t,"not-in",e)}matches(t){if(qt(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return null!==e&&!qt(this.value.arrayValue,e)}}class Re extends me{constructor(t,e){super(t,"array-contains-any",e)}matches(t){const e=t.data.field(this.field);return!(!te(e)||!e.arrayValue.values)&&e.arrayValue.values.some((t=>qt(this.value.arrayValue,t)))}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pe{constructor(t,e=null,n=[],i=[],s=null,r=null,o=null){this.path=t,this.collectionGroup=e,this.orderBy=n,this.filters=i,this.limit=s,this.startAt=r,this.endAt=o,this.ue=null}}function Ne(t,e=null,n=[],i=[],s=null,r=null,o=null){return new Pe(t,e,n,i,s,r,o)}function De(t){const e=P(t);if(null===e.ue){let t=e.path.canonicalString();null!==e.collectionGroup&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map((t=>we(t))).join(","),t+="|ob:",t+=e.orderBy.map((t=>function(t){return t.field.canonicalString()+t.dir}(t))).join(","),ft(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((t=>Qt(t))).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((t=>Qt(t))).join(",")),e.ue=t}return e.ue}function Me(t,e){if(t.limit!==e.limit)return!1;if(t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!pe(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!Te(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!de(t.startAt,e.startAt)&&de(t.endAt,e.endAt)}function Le(t){return tt.isDocumentKey(t.path)&&null===t.collectionGroup&&0===t.filters.length}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Fe{constructor(t,e=null,n=[],i=[],s=null,r="F",o=null,a=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=n,this.filters=i,this.limit=s,this.limitType=r,this.startAt=o,this.endAt=a,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function Ue(t,e,n,i,s,r,o,a){return new Fe(t,e,n,i,s,r,o,a)}function Ve(t){return new Fe(t)}function je(t){return 0===t.filters.length&&null===t.limit&&null==t.startAt&&null==t.endAt&&(0===t.explicitOrderBy.length||1===t.explicitOrderBy.length&&t.explicitOrderBy[0].field.isKeyField())}function ze(t){return null!==t.collectionGroup}function Be(t){const e=P(t);if(null===e.ce){e.ce=[];const t=new Set;for(const s of e.explicitOrderBy)e.ce.push(s),t.add(s.field.canonicalString());const n=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc",i=function(t){let e=new At(Z.comparator);return t.filters.forEach((t=>{t.getFlattenedFilters().forEach((t=>{t.isInequality()&&(e=e.add(t.field))}))})),e}(e);i.forEach((i=>{t.has(i.canonicalString())||i.isKeyField()||e.ce.push(new fe(i,n))})),t.has(Z.keyField().canonicalString())||e.ce.push(new fe(Z.keyField(),n))}return e.ce}function $e(t){const e=P(t);return e.le||(e.le=We(e,Be(t))),e.le}function We(t,e){if("F"===t.limitType)return Ne(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map((t=>{const e="desc"===t.dir?"asc":"desc";return new fe(t.field,e)}));const n=t.endAt?new he(t.endAt.position,t.endAt.inclusive):null,i=t.startAt?new he(t.startAt.position,t.startAt.inclusive):null;return Ne(t.path,t.collectionGroup,e,t.filters,t.limit,n,i)}}function He(t,e,n){return new Fe(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function qe(t,e){return Me($e(t),$e(e))&&t.limitType===e.limitType}function Ke(t){return`${De($e(t))}|lt:${t.limitType}`}function Ge(t){return`Query(target=${function(t){let e=t.path.canonicalString();return null!==t.collectionGroup&&(e+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(e+=`, filters: [${t.filters.map((t=>xe(t))).join(", ")}]`),ft(t.limit)||(e+=", limit: "+t.limit),t.orderBy.length>0&&(e+=`, orderBy: [${t.orderBy.map((t=>function(t){return`${t.field.canonicalString()} (${t.dir})`}(t))).join(", ")}]`),t.startAt&&(e+=", startAt: ",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map((t=>Qt(t))).join(",")),t.endAt&&(e+=", endAt: ",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map((t=>Qt(t))).join(",")),`Target(${e})`}($e(t))}; limitType=${t.limitType})`}function Ye(t,e){return e.isFoundDocument()&&function(t,e){const n=e.key.path;return null!==t.collectionGroup?e.key.hasCollectionId(t.collectionGroup)&&t.path.isPrefixOf(n):tt.isDocumentKey(t.path)?t.path.isEqual(n):t.path.isImmediateParentOf(n)}(t,e)&&function(t,e){for(const n of Be(t))if(!n.field.isKeyField()&&null===e.data.field(n.field))return!1;return!0}(t,e)&&function(t,e){for(const n of t.filters)if(!n.matches(e))return!1;return!0}(t,e)&&function(t,e){return!(t.startAt&&!function(t,e,n){const i=ue(t,e,n);return t.inclusive?i<=0:i<0}(t.startAt,Be(t),e))&&!(t.endAt&&!function(t,e,n){const i=ue(t,e,n);return t.inclusive?i>=0:i>0}(t.endAt,Be(t),e))}(t,e)}function Qe(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function Xe(t){return(e,n)=>{let i=!1;for(const s of Be(t)){const t=Je(s,e,n);if(0!==t)return t;i=i||s.field.isKeyField()}return 0}}function Je(t,e,n){const i=t.field.isKeyField()?tt.comparator(e.key,n.key):function(t,e,n){const i=e.data.field(t),s=n.data.field(t);return null!==i&&null!==s?Kt(i,s):O()}(t.field,e,n);switch(t.dir){case"asc":return i;case"desc":return-1*i;default:return O()}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ze{constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={},this.innerSize=0}get(t){const e=this.mapKeyFn(t),n=this.inner[e];if(void 0!==n)for(const[i,s]of n)if(this.equalsFn(i,t))return s}has(t){return void 0!==this.get(t)}set(t,e){const n=this.mapKeyFn(t),i=this.inner[n];if(void 0===i)return this.inner[n]=[[t,e]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],t))return void(i[s]=[t,e]);i.push([t,e]),this.innerSize++}delete(t){const e=this.mapKeyFn(t),n=this.inner[e];if(void 0===n)return!1;for(let i=0;i<n.length;i++)if(this.equalsFn(n[i][0],t))return 1===n.length?delete this.inner[e]:n.splice(i,1),this.innerSize--,!0;return!1}forEach(t){Et(this.inner,((e,n)=>{for(const[i,s]of n)t(i,s)}))}isEmpty(){return Ct(this.inner)}size(){return this.innerSize}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tn=new It(tt.comparator);function en(){return tn}const nn=new It(tt.comparator);function sn(...t){let e=nn;for(const n of t)e=e.insert(n.key,n);return e}function rn(t){let e=nn;return t.forEach(((t,n)=>e=e.insert(t,n.overlayedDocument))),e}function on(){return cn()}function an(){return cn()}function cn(){return new Ze((t=>t.toString()),((t,e)=>t.isEqual(e)))}const ln=new It(tt.comparator),hn=new At(tt.comparator);function un(...t){let e=hn;for(const n of t)e=e.add(n);return e}const dn=new At(q);function fn(){return dn}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pn(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:pt(e)?"-0":e}}function gn(t){return{integerValue:""+t}}function mn(t,e){return gt(e)?gn(e):pn(t,e)}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yn{constructor(){this._=void 0}}function vn(t,e,n){return t instanceof wn?function(t,e){const n={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:t.seconds,nanos:t.nanoseconds}}}};return e&&Ut(e)&&(e=Vt(e)),e&&(n.fields.__previous_value__=e),{mapValue:n}}(n,e):t instanceof Tn?xn(t,e):t instanceof En?Cn(t,e):function(t,e){const n=bn(t,e),i=Sn(n)+Sn(t.Pe);return Zt(n)&&Zt(t.Pe)?gn(i):pn(t.serializer,i)}(t,e)}function _n(t,e,n){return t instanceof Tn?xn(t,e):t instanceof En?Cn(t,e):n}function bn(t,e){return t instanceof In?function(t){return Zt(t)||function(t){return!!t&&"doubleValue"in t}(t)}(e)?e:{integerValue:0}:null}class wn extends yn{}class Tn extends yn{constructor(t){super(),this.elements=t}}function xn(t,e){const n=kn(e);for(const i of t.elements)n.some((t=>Ht(t,i)))||n.push(i);return{arrayValue:{values:n}}}class En extends yn{constructor(t){super(),this.elements=t}}function Cn(t,e){let n=kn(e);for(const i of t.elements)n=n.filter((t=>!Ht(t,i)));return{arrayValue:{values:n}}}class In extends yn{constructor(t,e){super(),this.serializer=t,this.Pe=e}}function Sn(t){return Lt(t.integerValue||t.doubleValue)}function kn(t){return te(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function An(t,e){return t.field.isEqual(e.field)&&function(t,e){return t instanceof Tn&&e instanceof Tn||t instanceof En&&e instanceof En?K(t.elements,e.elements,Ht):t instanceof In&&e instanceof In?Ht(t.Pe,e.Pe):t instanceof wn&&e instanceof wn}(t.transform,e.transform)}class On{constructor(t,e){this.version=t,this.transformResults=e}}class Rn{constructor(t,e){this.updateTime=t,this.exists=e}static none(){return new Rn}static exists(t){return new Rn(void 0,t)}static updateTime(t){return new Rn(t)}get isNone(){return void 0===this.updateTime&&void 0===this.exists}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function Pn(t,e){return void 0!==t.updateTime?e.isFoundDocument()&&e.version.isEqual(t.updateTime):void 0===t.exists||t.exists===e.isFoundDocument()}class Nn{}function Dn(t,e){if(!t.hasLocalMutations||e&&0===e.fields.length)return null;if(null===e)return t.isNoDocument()?new Wn(t.key,Rn.none()):new Vn(t.key,t.data,Rn.none());{const n=t.data,i=ae.empty();let s=new At(Z.comparator);for(let t of e.fields)if(!s.has(t)){let e=n.field(t);null===e&&t.length>1&&(t=t.popLast(),e=n.field(t)),null===e?i.delete(t):i.set(t,e),s=s.add(t)}return new jn(t.key,i,new Rt(s.toArray()),Rn.none())}}function Mn(t,e,n){t instanceof Vn?function(t,e,n){const i=t.value.clone(),s=Bn(t.fieldTransforms,e,n.transformResults);i.setAll(s),e.convertToFoundDocument(n.version,i).setHasCommittedMutations()}(t,e,n):t instanceof jn?function(t,e,n){if(!Pn(t.precondition,e))return void e.convertToUnknownDocument(n.version);const i=Bn(t.fieldTransforms,e,n.transformResults),s=e.data;s.setAll(zn(t)),s.setAll(i),e.convertToFoundDocument(n.version,s).setHasCommittedMutations()}(t,e,n):function(t,e,n){e.convertToNoDocument(n.version).setHasCommittedMutations()}(0,e,n)}function Ln(t,e,n,i){return t instanceof Vn?function(t,e,n,i){if(!Pn(t.precondition,e))return n;const s=t.value.clone(),r=$n(t.fieldTransforms,i,e);return s.setAll(r),e.convertToFoundDocument(e.version,s).setHasLocalMutations(),null}(t,e,n,i):t instanceof jn?function(t,e,n,i){if(!Pn(t.precondition,e))return n;const s=$n(t.fieldTransforms,i,e),r=e.data;return r.setAll(zn(t)),r.setAll(s),e.convertToFoundDocument(e.version,r).setHasLocalMutations(),null===n?null:n.unionWith(t.fieldMask.fields).unionWith(t.fieldTransforms.map((t=>t.field)))}(t,e,n,i):function(t,e,n){return Pn(t.precondition,e)?(e.convertToNoDocument(e.version).setHasLocalMutations(),null):n}(t,e,n)}function Fn(t,e){let n=null;for(const i of t.fieldTransforms){const t=e.data.field(i.field),s=bn(i.transform,t||null);null!=s&&(null===n&&(n=ae.empty()),n.set(i.field,s))}return n||null}function Un(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(t,e){return void 0===t&&void 0===e||!(!t||!e)&&K(t,e,((t,e)=>An(t,e)))}(t.fieldTransforms,e.fieldTransforms)&&(0===t.type?t.value.isEqual(e.value):1!==t.type||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Vn extends Nn{constructor(t,e,n,i=[]){super(),this.key=t,this.value=e,this.precondition=n,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class jn extends Nn{constructor(t,e,n,i,s=[]){super(),this.key=t,this.data=e,this.fieldMask=n,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function zn(t){const e=new Map;return t.fieldMask.fields.forEach((n=>{if(!n.isEmpty()){const i=t.data.field(n);e.set(n,i)}})),e}function Bn(t,e,n){const i=new Map;R(t.length===n.length);for(let s=0;s<n.length;s++){const r=t[s],o=r.transform,a=e.data.field(r.field);i.set(r.field,_n(o,a,n[s]))}return i}function $n(t,e,n){const i=new Map;for(const s of t){const t=s.transform,r=n.data.field(s.field);i.set(s.field,vn(t,r,e))}return i}class Wn extends Nn{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Hn extends Nn{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qn{constructor(t,e,n,i){this.batchId=t,this.localWriteTime=e,this.baseMutations=n,this.mutations=i}applyToRemoteDocument(t,e){const n=e.mutationResults;for(let i=0;i<this.mutations.length;i++){const e=this.mutations[i];e.key.isEqual(t.key)&&Mn(e,t,n[i])}}applyToLocalView(t,e){for(const n of this.baseMutations)n.key.isEqual(t.key)&&(e=Ln(n,t,e,this.localWriteTime));for(const n of this.mutations)n.key.isEqual(t.key)&&(e=Ln(n,t,e,this.localWriteTime));return e}applyToLocalDocumentSet(t,e){const n=an();return this.mutations.forEach((i=>{const s=t.get(i.key),r=s.overlayedDocument;let o=this.applyToLocalView(r,s.mutatedFields);o=e.has(i.key)?null:o;const a=Dn(r,o);null!==a&&n.set(i.key,a),r.isValidDocument()||r.convertToNoDocument(Y.min())})),n}keys(){return this.mutations.reduce(((t,e)=>t.add(e.key)),un())}isEqual(t){return this.batchId===t.batchId&&K(this.mutations,t.mutations,((t,e)=>Un(t,e)))&&K(this.baseMutations,t.baseMutations,((t,e)=>Un(t,e)))}}class Kn{constructor(t,e,n,i){this.batch=t,this.commitVersion=e,this.mutationResults=n,this.docVersions=i}static from(t,e,n){R(t.mutations.length===n.length);let i=function(){return ln}();const s=t.mutations;for(let r=0;r<s.length;r++)i=i.insert(s[r].key,n[r].version);return new Kn(t,e,n,i)}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gn{constructor(t,e){this.largestBatchId=t,this.mutation=e}getKey(){return this.mutation.key}isEqual(t){return null!==t&&this.mutation===t.mutation}toString(){return`Overlay{\n      largestBatchId: ${this.largestBatchId},\n      mutation: ${this.mutation.toString()}\n    }`}}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Yn{constructor(t,e){this.count=t,this.unchangedNames=e}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Qn,Xn;function Jn(t){switch(t){default:return O();case N.CANCELLED:case N.UNKNOWN:case N.DEADLINE_EXCEEDED:case N.RESOURCE_EXHAUSTED:case N.INTERNAL:case N.UNAVAILABLE:case N.UNAUTHENTICATED:return!1;case N.INVALID_ARGUMENT:case N.NOT_FOUND:case N.ALREADY_EXISTS:case N.PERMISSION_DENIED:case N.FAILED_PRECONDITION:case N.ABORTED:case N.OUT_OF_RANGE:case N.UNIMPLEMENTED:case N.DATA_LOSS:return!0}}function Zn(t){if(void 0===t)return S("GRPC error has no .code"),N.UNKNOWN;switch(t){case Qn.OK:return N.OK;case Qn.CANCELLED:return N.CANCELLED;case Qn.UNKNOWN:return N.UNKNOWN;case Qn.DEADLINE_EXCEEDED:return N.DEADLINE_EXCEEDED;case Qn.RESOURCE_EXHAUSTED:return N.RESOURCE_EXHAUSTED;case Qn.INTERNAL:return N.INTERNAL;case Qn.UNAVAILABLE:return N.UNAVAILABLE;case Qn.UNAUTHENTICATED:return N.UNAUTHENTICATED;case Qn.INVALID_ARGUMENT:return N.INVALID_ARGUMENT;case Qn.NOT_FOUND:return N.NOT_FOUND;case Qn.ALREADY_EXISTS:return N.ALREADY_EXISTS;case Qn.PERMISSION_DENIED:return N.PERMISSION_DENIED;case Qn.FAILED_PRECONDITION:return N.FAILED_PRECONDITION;case Qn.ABORTED:return N.ABORTED;case Qn.OUT_OF_RANGE:return N.OUT_OF_RANGE;case Qn.UNIMPLEMENTED:return N.UNIMPLEMENTED;case Qn.DATA_LOSS:return N.DATA_LOSS;default:return O()}}(Xn=Qn||(Qn={}))[Xn.OK=0]="OK",Xn[Xn.CANCELLED=1]="CANCELLED",Xn[Xn.UNKNOWN=2]="UNKNOWN",Xn[Xn.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Xn[Xn.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Xn[Xn.NOT_FOUND=5]="NOT_FOUND",Xn[Xn.ALREADY_EXISTS=6]="ALREADY_EXISTS",Xn[Xn.PERMISSION_DENIED=7]="PERMISSION_DENIED",Xn[Xn.UNAUTHENTICATED=16]="UNAUTHENTICATED",Xn[Xn.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Xn[Xn.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Xn[Xn.ABORTED=10]="ABORTED",Xn[Xn.OUT_OF_RANGE=11]="OUT_OF_RANGE",Xn[Xn.UNIMPLEMENTED=12]="UNIMPLEMENTED",Xn[Xn.INTERNAL=13]="INTERNAL",Xn[Xn.UNAVAILABLE=14]="UNAVAILABLE",Xn[Xn.DATA_LOSS=15]="DATA_LOSS";
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
let ti=null;
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ei(){return new TextEncoder}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ni=new i([4294967295,4294967295],0);function ii(t){const e=ei().encode(t),n=new s;return n.update(e),new Uint8Array(n.digest())}function si(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),s=e.getUint32(4,!0),r=e.getUint32(8,!0),o=e.getUint32(12,!0);return[new i([n,s],0),new i([r,o],0)]}class ri{constructor(t,e,n){if(this.bitmap=t,this.padding=e,this.hashCount=n,e<0||e>=8)throw new oi(`Invalid padding: ${e}`);if(n<0)throw new oi(`Invalid hash count: ${n}`);if(t.length>0&&0===this.hashCount)throw new oi(`Invalid hash count: ${n}`);if(0===t.length&&0!==e)throw new oi(`Invalid padding when bitmap length is 0: ${e}`);this.Ie=8*t.length-e,this.Te=i.fromNumber(this.Ie)}Ee(t,e,n){let s=t.add(e.multiply(i.fromNumber(n)));return 1===s.compare(ni)&&(s=new i([s.getBits(0),s.getBits(1)],0)),s.modulo(this.Te).toNumber()}de(t){return 0!=(this.bitmap[Math.floor(t/8)]&1<<t%8)}mightContain(t){if(0===this.Ie)return!1;const e=ii(t),[n,i]=si(e);for(let s=0;s<this.hashCount;s++){const t=this.Ee(n,i,s);if(!this.de(t))return!1}return!0}static create(t,e,n){const i=t%8==0?0:8-t%8,s=new Uint8Array(Math.ceil(t/8)),r=new ri(s,i,e);return n.forEach((t=>r.insert(t))),r}insert(t){if(0===this.Ie)return;const e=ii(t),[n,i]=si(e);for(let s=0;s<this.hashCount;s++){const t=this.Ee(n,i,s);this.Ae(t)}}Ae(t){const e=Math.floor(t/8),n=t%8;this.bitmap[e]|=1<<n}}class oi extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ai{constructor(t,e,n,i,s){this.snapshotVersion=t,this.targetChanges=e,this.targetMismatches=n,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(t,e,n){const i=new Map;return i.set(t,ci.createSynthesizedTargetChangeForCurrentChange(t,e,n)),new ai(Y.min(),i,new It(q),en(),un())}}class ci{constructor(t,e,n,i,s){this.resumeToken=t,this.current=e,this.addedDocuments=n,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(t,e,n){return new ci(n,e,un(),un(),un())}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class li{constructor(t,e,n,i){this.Re=t,this.removedTargetIds=e,this.key=n,this.Ve=i}}class hi{constructor(t,e){this.targetId=t,this.me=e}}class ui{constructor(t,e,n=Nt.EMPTY_BYTE_STRING,i=null){this.state=t,this.targetIds=e,this.resumeToken=n,this.cause=i}}class di{constructor(){this.fe=0,this.ge=gi(),this.pe=Nt.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return 0!==this.fe}get be(){return this.we}De(t){t.approximateByteSize()>0&&(this.we=!0,this.pe=t)}ve(){let t=un(),e=un(),n=un();return this.ge.forEach(((i,s)=>{switch(s){case 0:t=t.add(i);break;case 2:e=e.add(i);break;case 1:n=n.add(i);break;default:O()}})),new ci(this.pe,this.ye,t,e,n)}Ce(){this.we=!1,this.ge=gi()}Fe(t,e){this.we=!0,this.ge=this.ge.insert(t,e)}Me(t){this.we=!0,this.ge=this.ge.remove(t)}xe(){this.fe+=1}Oe(){this.fe-=1,R(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class fi{constructor(t){this.Le=t,this.Be=new Map,this.ke=en(),this.qe=pi(),this.Qe=new It(q)}Ke(t){for(const e of t.Re)t.Ve&&t.Ve.isFoundDocument()?this.$e(e,t.Ve):this.Ue(e,t.key,t.Ve);for(const e of t.removedTargetIds)this.Ue(e,t.key,t.Ve)}We(t){this.forEachTarget(t,(e=>{const n=this.Ge(e);switch(t.state){case 0:this.ze(e)&&n.De(t.resumeToken);break;case 1:n.Oe(),n.Se||n.Ce(),n.De(t.resumeToken);break;case 2:n.Oe(),n.Se||this.removeTarget(e);break;case 3:this.ze(e)&&(n.Ne(),n.De(t.resumeToken));break;case 4:this.ze(e)&&(this.je(e),n.De(t.resumeToken));break;default:O()}}))}forEachTarget(t,e){t.targetIds.length>0?t.targetIds.forEach(e):this.Be.forEach(((t,n)=>{this.ze(n)&&e(n)}))}He(t){const e=t.targetId,n=t.me.count,i=this.Je(e);if(i){const s=i.target;if(Le(s))if(0===n){const t=new tt(s.path);this.Ue(e,t,le.newNoDocument(t,Y.min()))}else R(1===n);else{const i=this.Ye(e);if(i!==n){const n=this.Ze(t),s=n?this.Xe(n,t,i):1;if(0!==s){this.je(e);const t=2===s?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(e,t)}null==ti||ti.et(function(t,e,n,i,s){var r,o,a,c,l,h;const u={localCacheCount:t,existenceFilterCount:e.count,databaseId:n.database,projectId:n.projectId},d=e.unchangedNames;return d&&(u.bloomFilter={applied:0===s,hashCount:null!==(r=null==d?void 0:d.hashCount)&&void 0!==r?r:0,bitmapLength:null!==(c=null===(a=null===(o=null==d?void 0:d.bits)||void 0===o?void 0:o.bitmap)||void 0===a?void 0:a.length)&&void 0!==c?c:0,padding:null!==(h=null===(l=null==d?void 0:d.bits)||void 0===l?void 0:l.padding)&&void 0!==h?h:0,mightContain:t=>{var e;return null!==(e=null==i?void 0:i.mightContain(t))&&void 0!==e&&e}}),u}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(i,t.me,this.Le.tt(),n,s))}}}}Ze(t){const e=t.me.unchangedNames;if(!e||!e.bits)return null;const{bits:{bitmap:n="",padding:i=0},hashCount:s=0}=e;let r,o;try{r=Ft(n).toUint8Array()}catch(t){if(t instanceof Pt)return k("Decoding the base64 bloom filter in existence filter failed ("+t.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw t}try{o=new ri(r,i,s)}catch(t){return k(t instanceof oi?"BloomFilter error: ":"Applying bloom filter failed: ",t),null}return 0===o.Ie?null:o}Xe(t,e,n){return e.me.count===n-this.nt(t,e.targetId)?0:2}nt(t,e){const n=this.Le.getRemoteKeysForTarget(e);let i=0;return n.forEach((n=>{const s=this.Le.tt(),r=`projects/${s.projectId}/databases/${s.database}/documents/${n.path.canonicalString()}`;t.mightContain(r)||(this.Ue(e,n,null),i++)})),i}rt(t){const e=new Map;this.Be.forEach(((n,i)=>{const s=this.Je(i);if(s){if(n.current&&Le(s.target)){const e=new tt(s.target.path);null!==this.ke.get(e)||this.it(i,e)||this.Ue(i,e,le.newNoDocument(e,t))}n.be&&(e.set(i,n.ve()),n.Ce())}}));let n=un();this.qe.forEach(((t,e)=>{let i=!0;e.forEachWhile((t=>{const e=this.Je(t);return!e||"TargetPurposeLimboResolution"===e.purpose||(i=!1,!1)})),i&&(n=n.add(t))})),this.ke.forEach(((e,n)=>n.setReadTime(t)));const i=new ai(t,e,this.Qe,this.ke,n);return this.ke=en(),this.qe=pi(),this.Qe=new It(q),i}$e(t,e){if(!this.ze(t))return;const n=this.it(t,e.key)?2:0;this.Ge(t).Fe(e.key,n),this.ke=this.ke.insert(e.key,e),this.qe=this.qe.insert(e.key,this.st(e.key).add(t))}Ue(t,e,n){if(!this.ze(t))return;const i=this.Ge(t);this.it(t,e)?i.Fe(e,1):i.Me(e),this.qe=this.qe.insert(e,this.st(e).delete(t)),n&&(this.ke=this.ke.insert(e,n))}removeTarget(t){this.Be.delete(t)}Ye(t){const e=this.Ge(t).ve();return this.Le.getRemoteKeysForTarget(t).size+e.addedDocuments.size-e.removedDocuments.size}xe(t){this.Ge(t).xe()}Ge(t){let e=this.Be.get(t);return e||(e=new di,this.Be.set(t,e)),e}st(t){let e=this.qe.get(t);return e||(e=new At(q),this.qe=this.qe.insert(t,e)),e}ze(t){const e=null!==this.Je(t);return e||I("WatchChangeAggregator","Detected inactive target",t),e}Je(t){const e=this.Be.get(t);return e&&e.Se?null:this.Le.ot(t)}je(t){this.Be.set(t,new di),this.Le.getRemoteKeysForTarget(t).forEach((e=>{this.Ue(t,e,null)}))}it(t,e){return this.Le.getRemoteKeysForTarget(t).has(e)}}function pi(){return new It(tt.comparator)}function gi(){return new It(tt.comparator)}const mi=(()=>{const t={asc:"ASCENDING",desc:"DESCENDING"};return t})(),yi=(()=>{const t={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"};return t})(),vi=(()=>{const t={and:"AND",or:"OR"};return t})();class _i{constructor(t,e){this.databaseId=t,this.useProto3Json=e}}function bi(t,e){return t.useProto3Json||ft(e)?e:{value:e}}function wi(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Ti(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function xi(t,e){return wi(t,e.toTimestamp())}function Ei(t){return R(!!t),Y.fromTimestamp(function(t){const e=Mt(t);return new G(e.seconds,e.nanos)}(t))}function Ci(t,e){return Ii(t,e).canonicalString()}function Ii(t,e){const n=function(t){return new X(["projects",t.projectId,"databases",t.database])}(t).child("documents");return void 0===e?n:n.child(e)}function Si(t){const e=X.fromString(t);return R(Qi(e)),e}function ki(t,e){return Ci(t.databaseId,e.path)}function Ai(t,e){const n=Si(e);if(n.get(1)!==t.databaseId.projectId)throw new D(N.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new D(N.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new tt(Ni(n))}function Oi(t,e){return Ci(t.databaseId,e)}function Ri(t){const e=Si(t);return 4===e.length?X.emptyPath():Ni(e)}function Pi(t){return new X(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function Ni(t){return R(t.length>4&&"documents"===t.get(4)),t.popFirst(5)}function Di(t,e,n){return{name:ki(t,e),fields:n.value.mapValue.fields}}function Mi(t,e){let n;if("targetChange"in e){e.targetChange;const i=function(t){return"NO_CHANGE"===t?0:"ADD"===t?1:"REMOVE"===t?2:"CURRENT"===t?3:"RESET"===t?4:O()}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],r=function(t,e){return t.useProto3Json?(R(void 0===e||"string"==typeof e),Nt.fromBase64String(e||"")):(R(void 0===e||e instanceof Buffer||e instanceof Uint8Array),Nt.fromUint8Array(e||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(t){const e=void 0===t.code?N.UNKNOWN:Zn(t.code);return new D(e,t.message||"")}(o);n=new ui(i,s,r,a||null)}else if("documentChange"in e){e.documentChange;const i=e.documentChange;i.document,i.document.name,i.document.updateTime;const s=Ai(t,i.document.name),r=Ei(i.document.updateTime),o=i.document.createTime?Ei(i.document.createTime):Y.min(),a=new ae({mapValue:{fields:i.document.fields}}),c=le.newFoundDocument(s,r,o,a),l=i.targetIds||[],h=i.removedTargetIds||[];n=new li(l,h,c.key,c)}else if("documentDelete"in e){e.documentDelete;const i=e.documentDelete;i.document;const s=Ai(t,i.document),r=i.readTime?Ei(i.readTime):Y.min(),o=le.newNoDocument(s,r),a=i.removedTargetIds||[];n=new li([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const i=e.documentRemove;i.document;const s=Ai(t,i.document),r=i.removedTargetIds||[];n=new li([],r,s,null)}else{if(!("filter"in e))return O();{e.filter;const t=e.filter;t.targetId;const{count:i=0,unchangedNames:s}=t,r=new Yn(i,s),o=t.targetId;n=new hi(o,r)}}return n}function Li(t,e){let n;if(e instanceof Vn)n={update:Di(t,e.key,e.value)};else if(e instanceof Wn)n={delete:ki(t,e.key)};else if(e instanceof jn)n={update:Di(t,e.key,e.data),updateMask:Yi(e.fieldMask)};else{if(!(e instanceof Hn))return O();n={verify:ki(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map((t=>function(t,e){const n=e.transform;if(n instanceof wn)return{fieldPath:e.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(n instanceof Tn)return{fieldPath:e.field.canonicalString(),appendMissingElements:{values:n.elements}};if(n instanceof En)return{fieldPath:e.field.canonicalString(),removeAllFromArray:{values:n.elements}};if(n instanceof In)return{fieldPath:e.field.canonicalString(),increment:n.Pe};throw O()}(0,t)))),e.precondition.isNone||(n.currentDocument=function(t,e){return void 0!==e.updateTime?{updateTime:xi(t,e.updateTime)}:void 0!==e.exists?{exists:e.exists}:O()}(t,e.precondition)),n}function Fi(t,e){return t&&t.length>0?(R(void 0!==e),t.map((t=>function(t,e){let n=t.updateTime?Ei(t.updateTime):Ei(e);return n.isEqual(Y.min())&&(n=Ei(e)),new On(n,t.transformResults||[])}(t,e)))):[]}function Ui(t,e){return{documents:[Oi(t,e.path)]}}function Vi(t,e){const n={structuredQuery:{}},i=e.path;let s;null!==e.collectionGroup?(s=i,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=i.popLast(),n.structuredQuery.from=[{collectionId:i.lastSegment()}]),n.parent=Oi(t,s);const r=function(t){if(0!==t.length)return Gi(ye.create(t,"and"))}(e.filters);r&&(n.structuredQuery.where=r);const o=function(t){if(0!==t.length)return t.map((t=>function(t){return{field:qi(t.field),direction:$i(t.dir)}}(t)))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const a=bi(t,e.limit);return null!==a&&(n.structuredQuery.limit=a),e.startAt&&(n.structuredQuery.startAt=function(t){return{before:t.inclusive,values:t.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(t){return{before:!t.inclusive,values:t.position}}(e.endAt)),{_t:n,parent:s}}function ji(t){let e=Ri(t.parent);const n=t.structuredQuery,i=n.from?n.from.length:0;let s=null;if(i>0){R(1===i);const t=n.from[0];t.allDescendants?s=t.collectionId:e=e.child(t.collectionId)}let r=[];n.where&&(r=function(t){const e=Bi(t);return e instanceof ye&&_e(e)?e.getFilters():[e]}(n.where));let o=[];n.orderBy&&(o=function(t){return t.map((t=>function(t){return new fe(Ki(t.field),function(t){switch(t){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(t.direction))}(t)))}(n.orderBy));let a=null;n.limit&&(a=function(t){let e;return e="object"==typeof t?t.value:t,ft(e)?null:e}(n.limit));let c=null;n.startAt&&(c=function(t){const e=!!t.before,n=t.values||[];return new he(n,e)}(n.startAt));let l=null;return n.endAt&&(l=function(t){const e=!t.before,n=t.values||[];return new he(n,e)}(n.endAt)),Ue(e,s,o,r,a,"F",c,l)}function zi(t,e){const n=function(t){switch(t){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return O()}}(e.purpose);return null==n?null:{"goog-listen-tags":n}}function Bi(t){return void 0!==t.unaryFilter?function(t){switch(t.unaryFilter.op){case"IS_NAN":const e=Ki(t.unaryFilter.field);return me.create(e,"==",{doubleValue:NaN});case"IS_NULL":const n=Ki(t.unaryFilter.field);return me.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Ki(t.unaryFilter.field);return me.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const s=Ki(t.unaryFilter.field);return me.create(s,"!=",{nullValue:"NULL_VALUE"});default:return O()}}(t):void 0!==t.fieldFilter?function(t){return me.create(Ki(t.fieldFilter.field),function(t){switch(t){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return O()}}(t.fieldFilter.op),t.fieldFilter.value)}(t):void 0!==t.compositeFilter?function(t){return ye.create(t.compositeFilter.filters.map((t=>Bi(t))),function(t){switch(t){case"AND":return"and";case"OR":return"or";default:return O()}}(t.compositeFilter.op))}(t):O()}function $i(t){return mi[t]}function Wi(t){return yi[t]}function Hi(t){return vi[t]}function qi(t){return{fieldPath:t.canonicalString()}}function Ki(t){return Z.fromServerFormat(t.fieldPath)}function Gi(t){return t instanceof me?function(t){if("=="===t.op){if(ne(t.value))return{unaryFilter:{field:qi(t.field),op:"IS_NAN"}};if(ee(t.value))return{unaryFilter:{field:qi(t.field),op:"IS_NULL"}}}else if("!="===t.op){if(ne(t.value))return{unaryFilter:{field:qi(t.field),op:"IS_NOT_NAN"}};if(ee(t.value))return{unaryFilter:{field:qi(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:qi(t.field),op:Wi(t.op),value:t.value}}}(t):t instanceof ye?function(t){const e=t.getFilters().map((t=>Gi(t)));return 1===e.length?e[0]:{compositeFilter:{op:Hi(t.op),filters:e}}}(t):O()}function Yi(t){const e=[];return t.fields.forEach((t=>e.push(t.canonicalString()))),{fieldPaths:e}}function Qi(t){return t.length>=4&&"projects"===t.get(0)&&"databases"===t.get(2)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xi{constructor(t,e,n,i,s=Y.min(),r=Y.min(),o=Nt.EMPTY_BYTE_STRING,a=null){this.target=t,this.targetId=e,this.purpose=n,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=r,this.resumeToken=o,this.expectedCount=a}withSequenceNumber(t){return new Xi(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(t,e){return new Xi(this.target,this.targetId,this.purpose,this.sequenceNumber,e,this.lastLimboFreeSnapshotVersion,t,null)}withExpectedCount(t){return new Xi(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,t)}withLastLimboFreeSnapshotVersion(t){return new Xi(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken,this.expectedCount)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ji{constructor(t){this.ct=t}}function Zi(t){const e=ji({parent:t.parent,structuredQuery:t.structuredQuery});return"LAST"===t.limitType?He(e,e.limit,"L"):e}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ts{constructor(){}It(t,e){this.Tt(t,e),e.Et()}Tt(t,e){if("nullValue"in t)this.dt(e,5);else if("booleanValue"in t)this.dt(e,10),e.At(t.booleanValue?1:0);else if("integerValue"in t)this.dt(e,15),e.At(Lt(t.integerValue));else if("doubleValue"in t){const n=Lt(t.doubleValue);isNaN(n)?this.dt(e,13):(this.dt(e,15),pt(n)?e.At(0):e.At(n))}else if("timestampValue"in t){let n=t.timestampValue;this.dt(e,20),"string"==typeof n&&(n=Mt(n)),e.Rt(`${n.seconds||""}`),e.At(n.nanos||0)}else if("stringValue"in t)this.Vt(t.stringValue,e),this.ft(e);else if("bytesValue"in t)this.dt(e,30),e.gt(Ft(t.bytesValue)),this.ft(e);else if("referenceValue"in t)this.yt(t.referenceValue,e);else if("geoPointValue"in t){const n=t.geoPointValue;this.dt(e,45),e.At(n.latitude||0),e.At(n.longitude||0)}else"mapValue"in t?oe(t)?this.dt(e,Number.MAX_SAFE_INTEGER):se(t)?this.wt(t.mapValue,e):(this.St(t.mapValue,e),this.ft(e)):"arrayValue"in t?(this.bt(t.arrayValue,e),this.ft(e)):O()}Vt(t,e){this.dt(e,25),this.Dt(t,e)}Dt(t,e){e.Rt(t)}St(t,e){const n=t.fields||{};this.dt(e,55);for(const i of Object.keys(n))this.Vt(i,e),this.Tt(n[i],e)}wt(t,e){var n,i;const s=t.fields||{};this.dt(e,53);const r="value",o=(null===(i=null===(n=s[r].arrayValue)||void 0===n?void 0:n.values)||void 0===i?void 0:i.length)||0;this.dt(e,15),e.At(Lt(o)),this.Vt(r,e),this.Tt(s[r],e)}bt(t,e){const n=t.values||[];this.dt(e,50);for(const i of n)this.Tt(i,e)}yt(t,e){this.dt(e,37),tt.fromName(t).path.forEach((t=>{this.dt(e,60),this.Dt(t,e)}))}dt(t,e){t.At(e)}ft(t){t.At(2)}}ts.vt=new ts;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class es{constructor(){this.un=new ns}addToCollectionParentIndex(t,e){return this.un.add(e),lt.resolve()}getCollectionParents(t,e){return lt.resolve(this.un.getEntries(e))}addFieldIndex(t,e){return lt.resolve()}deleteFieldIndex(t,e){return lt.resolve()}deleteAllFieldIndexes(t){return lt.resolve()}createTargetIndexes(t,e){return lt.resolve()}getDocumentsMatchingTarget(t,e){return lt.resolve(null)}getIndexType(t,e){return lt.resolve(0)}getFieldIndexes(t,e){return lt.resolve([])}getNextCollectionGroupToUpdate(t){return lt.resolve(null)}getMinOffset(t,e){return lt.resolve(st.min())}getMinOffsetFromCollectionGroup(t,e){return lt.resolve(st.min())}updateCollectionGroup(t,e,n){return lt.resolve()}updateIndexEntries(t,e){return lt.resolve()}}class ns{constructor(){this.index={}}add(t){const e=t.lastSegment(),n=t.popLast(),i=this.index[e]||new At(X.comparator),s=!i.has(n);return this.index[e]=i.add(n),s}has(t){const e=t.lastSegment(),n=t.popLast(),i=this.index[e];return i&&i.has(n)}getEntries(t){return(this.index[t]||new At(X.comparator)).toArray()}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */new Uint8Array(0);
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const is={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0};class ss{constructor(t,e,n){this.cacheSizeCollectionThreshold=t,this.percentileToCollect=e,this.maximumSequenceNumbersToCollect=n}static withCacheSize(t){return new ss(t,ss.DEFAULT_COLLECTION_PERCENTILE,ss.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ss.DEFAULT_COLLECTION_PERCENTILE=10,ss.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,ss.DEFAULT=new ss(41943040,ss.DEFAULT_COLLECTION_PERCENTILE,ss.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),ss.DISABLED=new ss(-1,0,0);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class rs{constructor(t){this.Ln=t}next(){return this.Ln+=2,this.Ln}static Bn(){return new rs(0)}static kn(){return new rs(-1)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function os([t,e],[n,i]){const s=q(t,n);return 0===s?q(e,i):s}class as{constructor(t){this.Un=t,this.buffer=new At(os),this.Wn=0}Gn(){return++this.Wn}zn(t){const e=[t,this.Gn()];if(this.buffer.size<this.Un)this.buffer=this.buffer.add(e);else{const t=this.buffer.last();os(e,t)<0&&(this.buffer=this.buffer.delete(t).add(e))}}get maxValue(){return this.buffer.last()[0]}}class cs{constructor(t,e,n){this.garbageCollector=t,this.asyncQueue=e,this.localStore=n,this.jn=null}start(){-1!==this.garbageCollector.params.cacheSizeCollectionThreshold&&this.Hn(6e4)}stop(){this.jn&&(this.jn.cancel(),this.jn=null)}get started(){return null!==this.jn}Hn(t){I("LruGarbageCollector",`Garbage collection scheduled in ${t}ms`),this.jn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",t,(async()=>{this.jn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){ut(t)?I("LruGarbageCollector","Ignoring IndexedDB error during garbage collection: ",t):await ct(t)}await this.Hn(3e5)}))}}class ls{constructor(t,e){this.Jn=t,this.params=e}calculateTargetCount(t,e){return this.Jn.Yn(t).next((t=>Math.floor(e/100*t)))}nthSequenceNumber(t,e){if(0===e)return lt.resolve(dt.oe);const n=new as(e);return this.Jn.forEachTarget(t,(t=>n.zn(t.sequenceNumber))).next((()=>this.Jn.Zn(t,(t=>n.zn(t))))).next((()=>n.maxValue))}removeTargets(t,e,n){return this.Jn.removeTargets(t,e,n)}removeOrphanedDocuments(t,e){return this.Jn.removeOrphanedDocuments(t,e)}collect(t,e){return-1===this.params.cacheSizeCollectionThreshold?(I("LruGarbageCollector","Garbage collection skipped; disabled"),lt.resolve(is)):this.getCacheSize(t).next((n=>n<this.params.cacheSizeCollectionThreshold?(I("LruGarbageCollector",`Garbage collection skipped; Cache size ${n} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),is):this.Xn(t,e)))}getCacheSize(t){return this.Jn.getCacheSize(t)}Xn(t,e){let n,i,s,r,o,c,l;const h=Date.now();return this.calculateTargetCount(t,this.params.percentileToCollect).next((e=>(e>this.params.maximumSequenceNumbersToCollect?(I("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${e}`),i=this.params.maximumSequenceNumbersToCollect):i=e,r=Date.now(),this.nthSequenceNumber(t,i)))).next((i=>(n=i,o=Date.now(),this.removeTargets(t,n,e)))).next((e=>(s=e,c=Date.now(),this.removeOrphanedDocuments(t,n)))).next((t=>(l=Date.now(),C()<=a.$b.DEBUG&&I("LruGarbageCollector",`LRU Garbage Collection\n\tCounted targets in ${r-h}ms\n\tDetermined least recently used ${i} in `+(o-r)+"ms\n"+`\tRemoved ${s} targets in `+(c-o)+"ms\n"+`\tRemoved ${t} documents in `+(l-c)+"ms\n"+`Total Duration: ${l-h}ms`),lt.resolve({didRun:!0,sequenceNumbersCollected:i,targetsRemoved:s,documentsRemoved:t}))))}}function hs(t,e){return new ls(t,e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class us{constructor(){this.changes=new Ze((t=>t.toString()),((t,e)=>t.isEqual(e))),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,e){this.assertNotApplied(),this.changes.set(t,le.newInvalidDocument(t).setReadTime(e))}getEntry(t,e){this.assertNotApplied();const n=this.changes.get(e);return void 0!==n?lt.resolve(n):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ds{constructor(t,e){this.overlayedDocument=t,this.mutatedFields=e}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fs{constructor(t,e,n,i){this.remoteDocumentCache=t,this.mutationQueue=e,this.documentOverlayCache=n,this.indexManager=i}getDocument(t,e){let n=null;return this.documentOverlayCache.getOverlay(t,e).next((i=>(n=i,this.remoteDocumentCache.getEntry(t,e)))).next((t=>(null!==n&&Ln(n.mutation,t,Rt.empty(),G.now()),t)))}getDocuments(t,e){return this.remoteDocumentCache.getEntries(t,e).next((e=>this.getLocalViewOfDocuments(t,e,un()).next((()=>e))))}getLocalViewOfDocuments(t,e,n=un()){const i=on();return this.populateOverlays(t,i,e).next((()=>this.computeViews(t,e,i,n).next((t=>{let e=sn();return t.forEach(((t,n)=>{e=e.insert(t,n.overlayedDocument)})),e}))))}getOverlayedDocuments(t,e){const n=on();return this.populateOverlays(t,n,e).next((()=>this.computeViews(t,e,n,un())))}populateOverlays(t,e,n){const i=[];return n.forEach((t=>{e.has(t)||i.push(t)})),this.documentOverlayCache.getOverlays(t,i).next((t=>{t.forEach(((t,n)=>{e.set(t,n)}))}))}computeViews(t,e,n,i){let s=en();const r=cn(),o=function(){return cn()}();return e.forEach(((t,e)=>{const o=n.get(e.key);i.has(e.key)&&(void 0===o||o.mutation instanceof jn)?s=s.insert(e.key,e):void 0!==o?(r.set(e.key,o.mutation.getFieldMask()),Ln(o.mutation,e,o.mutation.getFieldMask(),G.now())):r.set(e.key,Rt.empty())})),this.recalculateAndSaveOverlays(t,s).next((t=>(t.forEach(((t,e)=>r.set(t,e))),e.forEach(((t,e)=>{var n;return o.set(t,new ds(e,null!==(n=r.get(t))&&void 0!==n?n:null))})),o)))}recalculateAndSaveOverlays(t,e){const n=cn();let i=new It(((t,e)=>t-e)),s=un();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,e).next((t=>{for(const s of t)s.keys().forEach((t=>{const r=e.get(t);if(null===r)return;let o=n.get(t)||Rt.empty();o=s.applyToLocalView(r,o),n.set(t,o);const a=(i.get(s.batchId)||un()).add(t);i=i.insert(s.batchId,a)}))})).next((()=>{const r=[],o=i.getReverseIterator();for(;o.hasNext();){const i=o.getNext(),a=i.key,c=i.value,l=an();c.forEach((t=>{if(!s.has(t)){const i=Dn(e.get(t),n.get(t));null!==i&&l.set(t,i),s=s.add(t)}})),r.push(this.documentOverlayCache.saveOverlays(t,a,l))}return lt.waitFor(r)})).next((()=>n))}recalculateAndSaveOverlaysForDocumentKeys(t,e){return this.remoteDocumentCache.getEntries(t,e).next((e=>this.recalculateAndSaveOverlays(t,e)))}getDocumentsMatchingQuery(t,e,n,i){return function(t){return tt.isDocumentKey(t.path)&&null===t.collectionGroup&&0===t.filters.length}(e)?this.getDocumentsMatchingDocumentQuery(t,e.path):ze(e)?this.getDocumentsMatchingCollectionGroupQuery(t,e,n,i):this.getDocumentsMatchingCollectionQuery(t,e,n,i)}getNextDocuments(t,e,n,i){return this.remoteDocumentCache.getAllFromCollectionGroup(t,e,n,i).next((s=>{const r=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,e,n.largestBatchId,i-s.size):lt.resolve(on());let o=-1,a=s;return r.next((e=>lt.forEach(e,((e,n)=>(o<n.largestBatchId&&(o=n.largestBatchId),s.get(e)?lt.resolve():this.remoteDocumentCache.getEntry(t,e).next((t=>{a=a.insert(e,t)}))))).next((()=>this.populateOverlays(t,e,s))).next((()=>this.computeViews(t,a,e,un()))).next((t=>({batchId:o,changes:rn(t)})))))}))}getDocumentsMatchingDocumentQuery(t,e){return this.getDocument(t,new tt(e)).next((t=>{let e=sn();return t.isFoundDocument()&&(e=e.insert(t.key,t)),e}))}getDocumentsMatchingCollectionGroupQuery(t,e,n,i){const s=e.collectionGroup;let r=sn();return this.indexManager.getCollectionParents(t,s).next((o=>lt.forEach(o,(o=>{const a=function(t,e){return new Fe(e,null,t.explicitOrderBy.slice(),t.filters.slice(),t.limit,t.limitType,t.startAt,t.endAt)}(e,o.child(s));return this.getDocumentsMatchingCollectionQuery(t,a,n,i).next((t=>{t.forEach(((t,e)=>{r=r.insert(t,e)}))}))})).next((()=>r))))}getDocumentsMatchingCollectionQuery(t,e,n,i){let s;return this.documentOverlayCache.getOverlaysForCollection(t,e.path,n.largestBatchId).next((r=>(s=r,this.remoteDocumentCache.getDocumentsMatchingQuery(t,e,n,s,i)))).next((t=>{s.forEach(((e,n)=>{const i=n.getKey();null===t.get(i)&&(t=t.insert(i,le.newInvalidDocument(i)))}));let n=sn();return t.forEach(((t,i)=>{const r=s.get(t);void 0!==r&&Ln(r.mutation,i,Rt.empty(),G.now()),Ye(e,i)&&(n=n.insert(t,i))})),n}))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ps{constructor(t){this.serializer=t,this.hr=new Map,this.Pr=new Map}getBundleMetadata(t,e){return lt.resolve(this.hr.get(e))}saveBundleMetadata(t,e){return this.hr.set(e.id,function(t){return{id:t.id,version:t.version,createTime:Ei(t.createTime)}}(e)),lt.resolve()}getNamedQuery(t,e){return lt.resolve(this.Pr.get(e))}saveNamedQuery(t,e){return this.Pr.set(e.name,function(t){return{name:t.name,query:Zi(t.bundledQuery),readTime:Ei(t.readTime)}}(e)),lt.resolve()}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gs{constructor(){this.overlays=new It(tt.comparator),this.Ir=new Map}getOverlay(t,e){return lt.resolve(this.overlays.get(e))}getOverlays(t,e){const n=on();return lt.forEach(e,(e=>this.getOverlay(t,e).next((t=>{null!==t&&n.set(e,t)})))).next((()=>n))}saveOverlays(t,e,n){return n.forEach(((n,i)=>{this.ht(t,e,i)})),lt.resolve()}removeOverlaysForBatchId(t,e,n){const i=this.Ir.get(n);return void 0!==i&&(i.forEach((t=>this.overlays=this.overlays.remove(t))),this.Ir.delete(n)),lt.resolve()}getOverlaysForCollection(t,e,n){const i=on(),s=e.length+1,r=new tt(e.child("")),o=this.overlays.getIteratorFrom(r);for(;o.hasNext();){const t=o.getNext().value,r=t.getKey();if(!e.isPrefixOf(r.path))break;r.path.length===s&&t.largestBatchId>n&&i.set(t.getKey(),t)}return lt.resolve(i)}getOverlaysForCollectionGroup(t,e,n,i){let s=new It(((t,e)=>t-e));const r=this.overlays.getIterator();for(;r.hasNext();){const t=r.getNext().value;if(t.getKey().getCollectionGroup()===e&&t.largestBatchId>n){let e=s.get(t.largestBatchId);null===e&&(e=on(),s=s.insert(t.largestBatchId,e)),e.set(t.getKey(),t)}}const o=on(),a=s.getIterator();for(;a.hasNext();)if(a.getNext().value.forEach(((t,e)=>o.set(t,e))),o.size()>=i)break;return lt.resolve(o)}ht(t,e,n){const i=this.overlays.get(n.key);if(null!==i){const t=this.Ir.get(i.largestBatchId).delete(n.key);this.Ir.set(i.largestBatchId,t)}this.overlays=this.overlays.insert(n.key,new Gn(e,n));let s=this.Ir.get(e);void 0===s&&(s=un(),this.Ir.set(e,s)),this.Ir.set(e,s.add(n.key))}}
/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ms{constructor(){this.sessionToken=Nt.EMPTY_BYTE_STRING}getSessionToken(t){return lt.resolve(this.sessionToken)}setSessionToken(t,e){return this.sessionToken=e,lt.resolve()}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ys{constructor(){this.Tr=new At(vs.Er),this.dr=new At(vs.Ar)}isEmpty(){return this.Tr.isEmpty()}addReference(t,e){const n=new vs(t,e);this.Tr=this.Tr.add(n),this.dr=this.dr.add(n)}Rr(t,e){t.forEach((t=>this.addReference(t,e)))}removeReference(t,e){this.Vr(new vs(t,e))}mr(t,e){t.forEach((t=>this.removeReference(t,e)))}gr(t){const e=new tt(new X([])),n=new vs(e,t),i=new vs(e,t+1),s=[];return this.dr.forEachInRange([n,i],(t=>{this.Vr(t),s.push(t.key)})),s}pr(){this.Tr.forEach((t=>this.Vr(t)))}Vr(t){this.Tr=this.Tr.delete(t),this.dr=this.dr.delete(t)}yr(t){const e=new tt(new X([])),n=new vs(e,t),i=new vs(e,t+1);let s=un();return this.dr.forEachInRange([n,i],(t=>{s=s.add(t.key)})),s}containsKey(t){const e=new vs(t,0),n=this.Tr.firstAfterOrEqual(e);return null!==n&&t.isEqual(n.key)}}class vs{constructor(t,e){this.key=t,this.wr=e}static Er(t,e){return tt.comparator(t.key,e.key)||q(t.wr,e.wr)}static Ar(t,e){return q(t.wr,e.wr)||tt.comparator(t.key,e.key)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _s{constructor(t,e){this.indexManager=t,this.referenceDelegate=e,this.mutationQueue=[],this.Sr=1,this.br=new At(vs.Er)}checkEmpty(t){return lt.resolve(0===this.mutationQueue.length)}addMutationBatch(t,e,n,i){const s=this.Sr;this.Sr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const r=new qn(s,e,n,i);this.mutationQueue.push(r);for(const o of i)this.br=this.br.add(new vs(o.key,s)),this.indexManager.addToCollectionParentIndex(t,o.key.path.popLast());return lt.resolve(r)}lookupMutationBatch(t,e){return lt.resolve(this.Dr(e))}getNextMutationBatchAfterBatchId(t,e){const n=e+1,i=this.vr(n),s=i<0?0:i;return lt.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return lt.resolve(0===this.mutationQueue.length?-1:this.Sr-1)}getAllMutationBatches(t){return lt.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){const n=new vs(e,0),i=new vs(e,Number.POSITIVE_INFINITY),s=[];return this.br.forEachInRange([n,i],(t=>{const e=this.Dr(t.wr);s.push(e)})),lt.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(t,e){let n=new At(q);return e.forEach((t=>{const e=new vs(t,0),i=new vs(t,Number.POSITIVE_INFINITY);this.br.forEachInRange([e,i],(t=>{n=n.add(t.wr)}))})),lt.resolve(this.Cr(n))}getAllMutationBatchesAffectingQuery(t,e){const n=e.path,i=n.length+1;let s=n;tt.isDocumentKey(s)||(s=s.child(""));const r=new vs(new tt(s),0);let o=new At(q);return this.br.forEachWhile((t=>{const e=t.key.path;return!!n.isPrefixOf(e)&&(e.length===i&&(o=o.add(t.wr)),!0)}),r),lt.resolve(this.Cr(o))}Cr(t){const e=[];return t.forEach((t=>{const n=this.Dr(t);null!==n&&e.push(n)})),e}removeMutationBatch(t,e){R(0===this.Fr(e.batchId,"removed")),this.mutationQueue.shift();let n=this.br;return lt.forEach(e.mutations,(i=>{const s=new vs(i.key,e.batchId);return n=n.delete(s),this.referenceDelegate.markPotentiallyOrphaned(t,i.key)})).next((()=>{this.br=n}))}On(t){}containsKey(t,e){const n=new vs(e,0),i=this.br.firstAfterOrEqual(n);return lt.resolve(e.isEqual(i&&i.key))}performConsistencyCheck(t){return this.mutationQueue.length,lt.resolve()}Fr(t,e){return this.vr(t)}vr(t){return 0===this.mutationQueue.length?0:t-this.mutationQueue[0].batchId}Dr(t){const e=this.vr(t);return e<0||e>=this.mutationQueue.length?null:this.mutationQueue[e]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bs{constructor(t){this.Mr=t,this.docs=function(){return new It(tt.comparator)}(),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,e){const n=e.key,i=this.docs.get(n),s=i?i.size:0,r=this.Mr(e);return this.docs=this.docs.insert(n,{document:e.mutableCopy(),size:r}),this.size+=r-s,this.indexManager.addToCollectionParentIndex(t,n.path.popLast())}removeEntry(t){const e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){const n=this.docs.get(e);return lt.resolve(n?n.document.mutableCopy():le.newInvalidDocument(e))}getEntries(t,e){let n=en();return e.forEach((t=>{const e=this.docs.get(t);n=n.insert(t,e?e.document.mutableCopy():le.newInvalidDocument(t))})),lt.resolve(n)}getDocumentsMatchingQuery(t,e,n,i){let s=en();const r=e.path,o=new tt(r.child("")),a=this.docs.getIteratorFrom(o);for(;a.hasNext();){const{key:t,value:{document:o}}=a.getNext();if(!r.isPrefixOf(t.path))break;t.path.length>r.length+1||rt(it(o),n)<=0||(i.has(o.key)||Ye(e,o))&&(s=s.insert(o.key,o.mutableCopy()))}return lt.resolve(s)}getAllFromCollectionGroup(t,e,n,i){O()}Or(t,e){return lt.forEach(this.docs,(t=>e(t)))}newChangeBuffer(t){return new ws(this)}getSize(t){return lt.resolve(this.size)}}class ws extends us{constructor(t){super(),this.cr=t}applyChanges(t){const e=[];return this.changes.forEach(((n,i)=>{i.isValidDocument()?e.push(this.cr.addEntry(t,i)):this.cr.removeEntry(n)})),lt.waitFor(e)}getFromCache(t,e){return this.cr.getEntry(t,e)}getAllFromCache(t,e){return this.cr.getEntries(t,e)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ts{constructor(t){this.persistence=t,this.Nr=new Ze((t=>De(t)),Me),this.lastRemoteSnapshotVersion=Y.min(),this.highestTargetId=0,this.Lr=0,this.Br=new ys,this.targetCount=0,this.kr=rs.Bn()}forEachTarget(t,e){return this.Nr.forEach(((t,n)=>e(n))),lt.resolve()}getLastRemoteSnapshotVersion(t){return lt.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return lt.resolve(this.Lr)}allocateTargetId(t){return this.highestTargetId=this.kr.next(),lt.resolve(this.highestTargetId)}setTargetsMetadata(t,e,n){return n&&(this.lastRemoteSnapshotVersion=n),e>this.Lr&&(this.Lr=e),lt.resolve()}Kn(t){this.Nr.set(t.target,t);const e=t.targetId;e>this.highestTargetId&&(this.kr=new rs(e),this.highestTargetId=e),t.sequenceNumber>this.Lr&&(this.Lr=t.sequenceNumber)}addTargetData(t,e){return this.Kn(e),this.targetCount+=1,lt.resolve()}updateTargetData(t,e){return this.Kn(e),lt.resolve()}removeTargetData(t,e){return this.Nr.delete(e.target),this.Br.gr(e.targetId),this.targetCount-=1,lt.resolve()}removeTargets(t,e,n){let i=0;const s=[];return this.Nr.forEach(((r,o)=>{o.sequenceNumber<=e&&null===n.get(o.targetId)&&(this.Nr.delete(r),s.push(this.removeMatchingKeysForTargetId(t,o.targetId)),i++)})),lt.waitFor(s).next((()=>i))}getTargetCount(t){return lt.resolve(this.targetCount)}getTargetData(t,e){const n=this.Nr.get(e)||null;return lt.resolve(n)}addMatchingKeys(t,e,n){return this.Br.Rr(e,n),lt.resolve()}removeMatchingKeys(t,e,n){this.Br.mr(e,n);const i=this.persistence.referenceDelegate,s=[];return i&&e.forEach((e=>{s.push(i.markPotentiallyOrphaned(t,e))})),lt.waitFor(s)}removeMatchingKeysForTargetId(t,e){return this.Br.gr(e),lt.resolve()}getMatchingKeysForTargetId(t,e){const n=this.Br.yr(e);return lt.resolve(n)}containsKey(t,e){return lt.resolve(this.Br.containsKey(e))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xs{constructor(t,e){this.qr={},this.overlays={},this.Qr=new dt(0),this.Kr=!1,this.Kr=!0,this.$r=new ms,this.referenceDelegate=t(this),this.Ur=new Ts(this),this.indexManager=new es,this.remoteDocumentCache=function(t){return new bs(t)}((t=>this.referenceDelegate.Wr(t))),this.serializer=new Ji(e),this.Gr=new ps(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Kr=!1,Promise.resolve()}get started(){return this.Kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let e=this.overlays[t.toKey()];return e||(e=new gs,this.overlays[t.toKey()]=e),e}getMutationQueue(t,e){let n=this.qr[t.toKey()];return n||(n=new _s(e,this.referenceDelegate),this.qr[t.toKey()]=n),n}getGlobalsCache(){return this.$r}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Gr}runTransaction(t,e,n){I("MemoryPersistence","Starting transaction:",t);const i=new Es(this.Qr.next());return this.referenceDelegate.zr(),n(i).next((t=>this.referenceDelegate.jr(i).next((()=>t)))).toPromise().then((t=>(i.raiseOnCommittedEvent(),t)))}Hr(t,e){return lt.or(Object.values(this.qr).map((n=>()=>n.containsKey(t,e))))}}class Es extends at{constructor(t){super(),this.currentSequenceNumber=t}}class Cs{constructor(t){this.persistence=t,this.Jr=new ys,this.Yr=null}static Zr(t){return new Cs(t)}get Xr(){if(this.Yr)return this.Yr;throw O()}addReference(t,e,n){return this.Jr.addReference(n,e),this.Xr.delete(n.toString()),lt.resolve()}removeReference(t,e,n){return this.Jr.removeReference(n,e),this.Xr.add(n.toString()),lt.resolve()}markPotentiallyOrphaned(t,e){return this.Xr.add(e.toString()),lt.resolve()}removeTarget(t,e){this.Jr.gr(e.targetId).forEach((t=>this.Xr.add(t.toString())));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(t,e.targetId).next((t=>{t.forEach((t=>this.Xr.add(t.toString())))})).next((()=>n.removeTargetData(t,e)))}zr(){this.Yr=new Set}jr(t){const e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return lt.forEach(this.Xr,(n=>{const i=tt.fromPath(n);return this.ei(t,i).next((t=>{t||e.removeEntry(i,Y.min())}))})).next((()=>(this.Yr=null,e.apply(t))))}updateLimboDocument(t,e){return this.ei(t,e).next((t=>{t?this.Xr.delete(e.toString()):this.Xr.add(e.toString())}))}Wr(t){return 0}ei(t,e){return lt.or([()=>lt.resolve(this.Jr.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.Hr(t,e)])}}class Is{constructor(t,e){this.persistence=t,this.ti=new Ze((t=>mt(t.path)),((t,e)=>t.isEqual(e))),this.garbageCollector=hs(this,e)}static Zr(t,e){return new Is(t,e)}zr(){}jr(t){return lt.resolve()}forEachTarget(t,e){return this.persistence.getTargetCache().forEachTarget(t,e)}Yn(t){const e=this.er(t);return this.persistence.getTargetCache().getTargetCount(t).next((t=>e.next((e=>t+e))))}er(t){let e=0;return this.Zn(t,(t=>{e++})).next((()=>e))}Zn(t,e){return lt.forEach(this.ti,((n,i)=>this.nr(t,n,i).next((t=>t?lt.resolve():e(i)))))}removeTargets(t,e,n){return this.persistence.getTargetCache().removeTargets(t,e,n)}removeOrphanedDocuments(t,e){let n=0;const i=this.persistence.getRemoteDocumentCache(),s=i.newChangeBuffer();return i.Or(t,(i=>this.nr(t,i,e).next((t=>{t||(n++,s.removeEntry(i,Y.min()))})))).next((()=>s.apply(t))).next((()=>n))}markPotentiallyOrphaned(t,e){return this.ti.set(e,t.currentSequenceNumber),lt.resolve()}removeTarget(t,e){const n=e.withSequenceNumber(t.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(t,n)}addReference(t,e,n){return this.ti.set(n,t.currentSequenceNumber),lt.resolve()}removeReference(t,e,n){return this.ti.set(n,t.currentSequenceNumber),lt.resolve()}updateLimboDocument(t,e){return this.ti.set(e,t.currentSequenceNumber),lt.resolve()}Wr(t){let e=t.key.toString().length;return t.isFoundDocument()&&(e+=Jt(t.data.value)),e}nr(t,e,n){return lt.or([()=>this.persistence.Hr(t,e),()=>this.persistence.getTargetCache().containsKey(t,e),()=>{const t=this.ti.get(e);return lt.resolve(void 0!==t&&t>n)}])}getCacheSize(t){return this.persistence.getRemoteDocumentCache().getSize(t)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ss{constructor(t,e,n,i){this.targetId=t,this.fromCache=e,this.$i=n,this.Ui=i}static Wi(t,e){let n=un(),i=un();for(const s of e.docChanges)switch(s.type){case 0:n=n.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new Ss(t,e.fromCache,n,i)}}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ks{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(t){this._documentReadCount+=t}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class As{constructor(){this.Gi=!1,this.zi=!1,this.ji=100,this.Hi=function(){return(0,c.nr)()?8:ht((0,c.ZQ)())>0?6:4}()}initialize(t,e){this.Ji=t,this.indexManager=e,this.Gi=!0}getDocumentsMatchingQuery(t,e,n,i){const s={result:null};return this.Yi(t,e).next((t=>{s.result=t})).next((()=>{if(!s.result)return this.Zi(t,e,i,n).next((t=>{s.result=t}))})).next((()=>{if(s.result)return;const n=new ks;return this.Xi(t,e,n).next((i=>{if(s.result=i,this.zi)return this.es(t,e,n,i.size)}))})).next((()=>s.result))}es(t,e,n,i){return n.documentReadCount<this.ji?(C()<=a.$b.DEBUG&&I("QueryEngine","SDK will not create cache indexes for query:",Ge(e),"since it only creates cache indexes for collection contains","more than or equal to",this.ji,"documents"),lt.resolve()):(C()<=a.$b.DEBUG&&I("QueryEngine","Query:",Ge(e),"scans",n.documentReadCount,"local documents and returns",i,"documents as results."),n.documentReadCount>this.Hi*i?(C()<=a.$b.DEBUG&&I("QueryEngine","The SDK decides to create cache indexes for query:",Ge(e),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(t,$e(e))):lt.resolve())}Yi(t,e){if(je(e))return lt.resolve(null);let n=$e(e);return this.indexManager.getIndexType(t,n).next((i=>0===i?null:(null!==e.limit&&1===i&&(e=He(e,null,"F"),n=$e(e)),this.indexManager.getDocumentsMatchingTarget(t,n).next((i=>{const s=un(...i);return this.Ji.getDocuments(t,s).next((i=>this.indexManager.getMinOffset(t,n).next((n=>{const r=this.ts(e,i);return this.ns(e,r,s,n.readTime)?this.Yi(t,He(e,null,"F")):this.rs(t,r,e,n)}))))})))))}Zi(t,e,n,i){return je(e)||i.isEqual(Y.min())?lt.resolve(null):this.Ji.getDocuments(t,n).next((s=>{const r=this.ts(e,s);return this.ns(e,r,n,i)?lt.resolve(null):(C()<=a.$b.DEBUG&&I("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Ge(e)),this.rs(t,r,e,nt(i,-1)).next((t=>t)))}))}ts(t,e){let n=new At(Xe(t));return e.forEach(((e,i)=>{Ye(t,i)&&(n=n.add(i))})),n}ns(t,e,n,i){if(null===t.limit)return!1;if(n.size!==e.size)return!0;const s="F"===t.limitType?e.last():e.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Xi(t,e,n){return C()<=a.$b.DEBUG&&I("QueryEngine","Using full collection scan to execute query:",Ge(e)),this.Ji.getDocumentsMatchingQuery(t,e,st.min(),n)}rs(t,e,n,i){return this.Ji.getDocumentsMatchingQuery(t,n,i).next((t=>(e.forEach((e=>{t=t.insert(e.key,e)})),t)))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Os{constructor(t,e,n,i){this.persistence=t,this.ss=e,this.serializer=i,this.os=new It(q),this._s=new Ze((t=>De(t)),Me),this.us=new Map,this.cs=t.getRemoteDocumentCache(),this.Ur=t.getTargetCache(),this.Gr=t.getBundleCache(),this.ls(n)}ls(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new fs(this.cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.cs.setIndexManager(this.indexManager),this.ss.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(e=>t.collect(e,this.os)))}}function Rs(t,e,n,i){return new Os(t,e,n,i)}async function Ps(t,e){const n=P(t);return await n.persistence.runTransaction("Handle user change","readonly",(t=>{let i;return n.mutationQueue.getAllMutationBatches(t).next((s=>(i=s,n.ls(e),n.mutationQueue.getAllMutationBatches(t)))).next((e=>{const s=[],r=[];let o=un();for(const t of i){s.push(t.batchId);for(const e of t.mutations)o=o.add(e.key)}for(const t of e){r.push(t.batchId);for(const e of t.mutations)o=o.add(e.key)}return n.localDocuments.getDocuments(t,o).next((t=>({hs:t,removedBatchIds:s,addedBatchIds:r})))}))}))}function Ns(t,e){const n=P(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",(t=>{const i=e.batch.keys(),s=n.cs.newChangeBuffer({trackRemovals:!0});return function(t,e,n,i){const s=n.batch,r=s.keys();let o=lt.resolve();return r.forEach((t=>{o=o.next((()=>i.getEntry(e,t))).next((e=>{const r=n.docVersions.get(t);R(null!==r),e.version.compareTo(r)<0&&(s.applyToRemoteDocument(e,n),e.isValidDocument()&&(e.setReadTime(n.commitVersion),i.addEntry(e)))}))})),o.next((()=>t.mutationQueue.removeMutationBatch(e,s)))}(n,t,e,s).next((()=>s.apply(t))).next((()=>n.mutationQueue.performConsistencyCheck(t))).next((()=>n.documentOverlayCache.removeOverlaysForBatchId(t,i,e.batch.batchId))).next((()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(t,function(t){let e=un();for(let n=0;n<t.mutationResults.length;++n)t.mutationResults[n].transformResults.length>0&&(e=e.add(t.batch.mutations[n].key));return e}(e)))).next((()=>n.localDocuments.getDocuments(t,i)))}))}function Ds(t){const e=P(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(t=>e.Ur.getLastRemoteSnapshotVersion(t)))}function Ms(t,e){const n=P(t),i=e.snapshotVersion;let s=n.os;return n.persistence.runTransaction("Apply remote event","readwrite-primary",(t=>{const r=n.cs.newChangeBuffer({trackRemovals:!0});s=n.os;const o=[];e.targetChanges.forEach(((r,a)=>{const c=s.get(a);if(!c)return;o.push(n.Ur.removeMatchingKeys(t,r.removedDocuments,a).next((()=>n.Ur.addMatchingKeys(t,r.addedDocuments,a))));let l=c.withSequenceNumber(t.currentSequenceNumber);null!==e.targetMismatches.get(a)?l=l.withResumeToken(Nt.EMPTY_BYTE_STRING,Y.min()).withLastLimboFreeSnapshotVersion(Y.min()):r.resumeToken.approximateByteSize()>0&&(l=l.withResumeToken(r.resumeToken,i)),s=s.insert(a,l),function(t,e,n){return 0===t.resumeToken.approximateByteSize()||(e.snapshotVersion.toMicroseconds()-t.snapshotVersion.toMicroseconds()>=3e8||n.addedDocuments.size+n.modifiedDocuments.size+n.removedDocuments.size>0)}(c,l,r)&&o.push(n.Ur.updateTargetData(t,l))}));let a=en(),c=un();if(e.documentUpdates.forEach((i=>{e.resolvedLimboDocuments.has(i)&&o.push(n.persistence.referenceDelegate.updateLimboDocument(t,i))})),o.push(Ls(t,r,e.documentUpdates).next((t=>{a=t.Ps,c=t.Is}))),!i.isEqual(Y.min())){const e=n.Ur.getLastRemoteSnapshotVersion(t).next((e=>n.Ur.setTargetsMetadata(t,t.currentSequenceNumber,i)));o.push(e)}return lt.waitFor(o).next((()=>r.apply(t))).next((()=>n.localDocuments.getLocalViewOfDocuments(t,a,c))).next((()=>a))})).then((t=>(n.os=s,t)))}function Ls(t,e,n){let i=un(),s=un();return n.forEach((t=>i=i.add(t))),e.getEntries(t,i).next((t=>{let i=en();return n.forEach(((n,r)=>{const o=t.get(n);r.isFoundDocument()!==o.isFoundDocument()&&(s=s.add(n)),r.isNoDocument()&&r.version.isEqual(Y.min())?(e.removeEntry(n,r.readTime),i=i.insert(n,r)):!o.isValidDocument()||r.version.compareTo(o.version)>0||0===r.version.compareTo(o.version)&&o.hasPendingWrites?(e.addEntry(r),i=i.insert(n,r)):I("LocalStore","Ignoring outdated watch update for ",n,". Current version:",o.version," Watch version:",r.version)})),{Ps:i,Is:s}}))}function Fs(t,e){const n=P(t);return n.persistence.runTransaction("Get next mutation batch","readonly",(t=>(void 0===e&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(t,e))))}function Us(t,e){const n=P(t);return n.persistence.runTransaction("Allocate target","readwrite",(t=>{let i;return n.Ur.getTargetData(t,e).next((s=>s?(i=s,lt.resolve(i)):n.Ur.allocateTargetId(t).next((s=>(i=new Xi(e,s,"TargetPurposeListen",t.currentSequenceNumber),n.Ur.addTargetData(t,i).next((()=>i)))))))})).then((t=>{const i=n.os.get(t.targetId);return(null===i||t.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.os=n.os.insert(t.targetId,t),n._s.set(e,t.targetId)),t}))}async function Vs(t,e,n){const i=P(t),s=i.os.get(e),r=n?"readwrite":"readwrite-primary";try{n||await i.persistence.runTransaction("Release target",r,(t=>i.persistence.referenceDelegate.removeTarget(t,s)))}catch(t){if(!ut(t))throw t;I("LocalStore",`Failed to update sequence numbers for target ${e}: ${t}`)}i.os=i.os.remove(e),i._s.delete(s.target)}function js(t,e,n){const i=P(t);let s=Y.min(),r=un();return i.persistence.runTransaction("Execute query","readwrite",(t=>function(t,e,n){const i=P(t),s=i._s.get(n);return void 0!==s?lt.resolve(i.os.get(s)):i.Ur.getTargetData(e,n)}(i,t,$e(e)).next((e=>{if(e)return s=e.lastLimboFreeSnapshotVersion,i.Ur.getMatchingKeysForTargetId(t,e.targetId).next((t=>{r=t}))})).next((()=>i.ss.getDocumentsMatchingQuery(t,e,n?s:Y.min(),n?r:un()))).next((t=>(zs(i,Qe(e),t),{documents:t,Ts:r})))))}function zs(t,e,n){let i=t.us.get(e)||Y.min();n.forEach(((t,e)=>{e.readTime.compareTo(i)>0&&(i=e.readTime)})),t.us.set(e,i)}class Bs{constructor(){this.activeTargetIds=fn()}fs(t){this.activeTargetIds=this.activeTargetIds.add(t)}gs(t){this.activeTargetIds=this.activeTargetIds.delete(t)}Vs(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class $s{constructor(){this.so=new Bs,this.oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,e,n){}addLocalQueryTarget(t,e=!0){return e&&this.so.fs(t),this.oo[t]||"not-current"}updateQueryState(t,e,n){this.oo[t]=e}removeLocalQueryTarget(t){this.so.gs(t)}isLocalQueryTarget(t){return this.so.activeTargetIds.has(t)}clearQueryState(t){delete this.oo[t]}getAllActiveQueryTargets(){return this.so.activeTargetIds}isActiveQueryTarget(t){return this.so.activeTargetIds.has(t)}start(){return this.so=new Bs,Promise.resolve()}handleUserChange(t,e,n){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ws{_o(t){}shutdown(){}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hs{constructor(){this.ao=()=>this.uo(),this.co=()=>this.lo(),this.ho=[],this.Po()}_o(t){this.ho.push(t)}shutdown(){window.removeEventListener("online",this.ao),window.removeEventListener("offline",this.co)}Po(){window.addEventListener("online",this.ao),window.addEventListener("offline",this.co)}uo(){I("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const t of this.ho)t(0)}lo(){I("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const t of this.ho)t(1)}static D(){return"undefined"!=typeof window&&void 0!==window.addEventListener&&void 0!==window.removeEventListener}}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let qs=null;function Ks(){return null===qs?qs=function(){return 268435456+Math.round(2147483648*Math.random())}():qs++,"0x"+qs.toString(16)
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}const Gs={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ys{constructor(t){this.Io=t.Io,this.To=t.To}Eo(t){this.Ao=t}Ro(t){this.Vo=t}mo(t){this.fo=t}onMessage(t){this.po=t}close(){this.To()}send(t){this.Io(t)}yo(){this.Ao()}wo(){this.Vo()}So(t){this.fo(t)}bo(t){this.po(t)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qs="WebChannelConnection";class Xs extends class{constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const e=t.ssl?"https":"http",n=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.Do=e+"://"+t.host,this.vo=`projects/${n}/databases/${i}`,this.Co="(default)"===this.databaseId.database?`project_id=${n}`:`project_id=${n}&database_id=${i}`}get Fo(){return!1}Mo(t,e,n,i,s){const r=Ks(),o=this.xo(t,e.toUriEncodedString());I("RestConnection",`Sending RPC '${t}' ${r}:`,o,n);const a={"google-cloud-resource-prefix":this.vo,"x-goog-request-params":this.Co};return this.Oo(a,i,s),this.No(t,o,a,n).then((e=>(I("RestConnection",`Received RPC '${t}' ${r}: `,e),e)),(e=>{throw k("RestConnection",`RPC '${t}' ${r} failed with error: `,e,"url: ",o,"request:",n),e}))}Lo(t,e,n,i,s,r){return this.Mo(t,e,n,i,s)}Oo(t,e,n){t["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+x}(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),e&&e.headers.forEach(((e,n)=>t[n]=e)),n&&n.headers.forEach(((e,n)=>t[n]=e))}xo(t,e){const n=Gs[t];return`${this.Do}/v1/${e}:${n}`}terminate(){}}{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}No(t,e,n,i){const s=Ks();return new Promise(((r,o)=>{const a=new u;a.setWithCredentials(!0),a.listenOnce(f.COMPLETE,(()=>{try{switch(a.getLastErrorCode()){case p.NO_ERROR:const e=a.getResponseJson();I(Qs,`XHR for RPC '${t}' ${s} received:`,JSON.stringify(e)),r(e);break;case p.TIMEOUT:I(Qs,`RPC '${t}' ${s} timed out`),o(new D(N.DEADLINE_EXCEEDED,"Request time out"));break;case p.HTTP_ERROR:const n=a.getStatus();if(I(Qs,`RPC '${t}' ${s} failed with status:`,n,"response text:",a.getResponseText()),n>0){let t=a.getResponseJson();Array.isArray(t)&&(t=t[0]);const e=null==t?void 0:t.error;if(e&&e.status&&e.message){const t=function(t){const e=t.toLowerCase().replace(/_/g,"-");return Object.values(N).indexOf(e)>=0?e:N.UNKNOWN}(e.status);o(new D(t,e.message))}else o(new D(N.UNKNOWN,"Server responded with status "+a.getStatus()))}else o(new D(N.UNAVAILABLE,"Connection failed."));break;default:O()}}finally{I(Qs,`RPC '${t}' ${s} completed.`)}}));const c=JSON.stringify(i);I(Qs,`RPC '${t}' ${s} sending request:`,i),a.send(e,"POST",c,n,15)}))}Bo(t,e,n){const i=Ks(),s=[this.Do,"/","google.firestore.v1.Firestore","/",t,"/channel"],r=v(),o=y(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},c=this.longPollingOptions.timeoutSeconds;void 0!==c&&(a.longPollingTimeout=Math.round(1e3*c)),this.useFetchStreams&&(a.useFetchStreams=!0),this.Oo(a.initMessageHeaders,e,n),a.encodeInitMessageHeaders=!0;const l=s.join("");I(Qs,`Creating RPC '${t}' stream ${i}: ${l}`,a);const h=r.createWebChannel(l,a);let u=!1,f=!1;const p=new Ys({Io:e=>{f?I(Qs,`Not sending because RPC '${t}' stream ${i} is closed:`,e):(u||(I(Qs,`Opening RPC '${t}' stream ${i} transport.`),h.open(),u=!0),I(Qs,`RPC '${t}' stream ${i} sending:`,e),h.send(e))},To:()=>h.close()}),_=(t,e,n)=>{t.listen(e,(t=>{try{n(t)}catch(t){setTimeout((()=>{throw t}),0)}}))};return _(h,d.EventType.OPEN,(()=>{f||(I(Qs,`RPC '${t}' stream ${i} transport opened.`),p.yo())})),_(h,d.EventType.CLOSE,(()=>{f||(f=!0,I(Qs,`RPC '${t}' stream ${i} transport closed`),p.So())})),_(h,d.EventType.ERROR,(e=>{f||(f=!0,k(Qs,`RPC '${t}' stream ${i} transport errored:`,e),p.So(new D(N.UNAVAILABLE,"The operation could not be completed")))})),_(h,d.EventType.MESSAGE,(e=>{var n;if(!f){const s=e.data[0];R(!!s);const r=s,o=r.error||(null===(n=r[0])||void 0===n?void 0:n.error);if(o){I(Qs,`RPC '${t}' stream ${i} received error:`,o);const e=o.status;let n=function(t){const e=Qn[t];if(void 0!==e)return Zn(e)}(e),s=o.message;void 0===n&&(n=N.INTERNAL,s="Unknown error status: "+e+" with message "+o.message),f=!0,p.So(new D(n,s)),h.close()}else I(Qs,`RPC '${t}' stream ${i} received:`,s),p.bo(s)}})),_(o,m.STAT_EVENT,(e=>{e.stat===g.PROXY?I(Qs,`RPC '${t}' stream ${i} detected buffering proxy`):e.stat===g.NOPROXY&&I(Qs,`RPC '${t}' stream ${i} detected no buffering proxy`)})),setTimeout((()=>{p.wo()}),0),p}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Js(){return"undefined"!=typeof document?document:null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zs(t){return new _i(t,!0)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tr{constructor(t,e,n=1e3,i=1.5,s=6e4){this.ui=t,this.timerId=e,this.ko=n,this.qo=i,this.Qo=s,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(t){this.cancel();const e=Math.floor(this.Ko+this.zo()),n=Math.max(0,Date.now()-this.Uo),i=Math.max(0,e-n);i>0&&I("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Ko} ms, delay with jitter: ${e} ms, last attempt: ${n} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,i,(()=>(this.Uo=Date.now(),t()))),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){null!==this.$o&&(this.$o.skipDelay(),this.$o=null)}cancel(){null!==this.$o&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class er{constructor(t,e,n,i,s,r,o,a){this.ui=t,this.Ho=n,this.Jo=i,this.connection=s,this.authCredentialsProvider=r,this.appCheckCredentialsProvider=o,this.listener=a,this.state=0,this.Yo=0,this.Zo=null,this.Xo=null,this.stream=null,this.e_=0,this.t_=new tr(t,e)}n_(){return 1===this.state||5===this.state||this.r_()}r_(){return 2===this.state||3===this.state}start(){this.e_=0,4!==this.state?this.auth():this.i_()}async stop(){this.n_()&&await this.close(0)}s_(){this.state=0,this.t_.reset()}o_(){this.r_()&&null===this.Zo&&(this.Zo=this.ui.enqueueAfterDelay(this.Ho,6e4,(()=>this.__())))}a_(t){this.u_(),this.stream.send(t)}async __(){if(this.r_())return this.close(0)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}c_(){this.Xo&&(this.Xo.cancel(),this.Xo=null)}async close(t,e){this.u_(),this.c_(),this.t_.cancel(),this.Yo++,4!==t?this.t_.reset():e&&e.code===N.RESOURCE_EXHAUSTED?(S(e.toString()),S("Using maximum backoff delay to prevent overloading the backend."),this.t_.Wo()):e&&e.code===N.UNAUTHENTICATED&&3!==this.state&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),null!==this.stream&&(this.l_(),this.stream.close(),this.stream=null),this.state=t,await this.listener.mo(e)}l_(){}auth(){this.state=1;const t=this.h_(this.Yo),e=this.Yo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([t,n])=>{this.Yo===e&&this.P_(t,n)}),(e=>{t((()=>{const t=new D(N.UNKNOWN,"Fetching auth token failed: "+e.message);return this.I_(t)}))}))}P_(t,e){const n=this.h_(this.Yo);this.stream=this.T_(t,e),this.stream.Eo((()=>{n((()=>this.listener.Eo()))})),this.stream.Ro((()=>{n((()=>(this.state=2,this.Xo=this.ui.enqueueAfterDelay(this.Jo,1e4,(()=>(this.r_()&&(this.state=3),Promise.resolve()))),this.listener.Ro())))})),this.stream.mo((t=>{n((()=>this.I_(t)))})),this.stream.onMessage((t=>{n((()=>1==++this.e_?this.E_(t):this.onNext(t)))}))}i_(){this.state=5,this.t_.Go((async()=>{this.state=0,this.start()}))}I_(t){return I("PersistentStream",`close with error: ${t}`),this.stream=null,this.close(4,t)}h_(t){return e=>{this.ui.enqueueAndForget((()=>this.Yo===t?e():(I("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class nr extends er{constructor(t,e,n,i,s,r){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",e,n,i,r),this.serializer=s}T_(t,e){return this.connection.Bo("Listen",t,e)}E_(t){return this.onNext(t)}onNext(t){this.t_.reset();const e=Mi(this.serializer,t),n=function(t){if(!("targetChange"in t))return Y.min();const e=t.targetChange;return e.targetIds&&e.targetIds.length?Y.min():e.readTime?Ei(e.readTime):Y.min()}(t);return this.listener.d_(e,n)}A_(t){const e={};e.database=Pi(this.serializer),e.addTarget=function(t,e){let n;const i=e.target;if(n=Le(i)?{documents:Ui(t,i)}:{query:Vi(t,i)._t},n.targetId=e.targetId,e.resumeToken.approximateByteSize()>0){n.resumeToken=Ti(t,e.resumeToken);const i=bi(t,e.expectedCount);null!==i&&(n.expectedCount=i)}else if(e.snapshotVersion.compareTo(Y.min())>0){n.readTime=wi(t,e.snapshotVersion.toTimestamp());const i=bi(t,e.expectedCount);null!==i&&(n.expectedCount=i)}return n}(this.serializer,t);const n=zi(this.serializer,t);n&&(e.labels=n),this.a_(e)}R_(t){const e={};e.database=Pi(this.serializer),e.removeTarget=t,this.a_(e)}}class ir extends er{constructor(t,e,n,i,s,r){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",e,n,i,r),this.serializer=s}get V_(){return this.e_>0}start(){this.lastStreamToken=void 0,super.start()}l_(){this.V_&&this.m_([])}T_(t,e){return this.connection.Bo("Write",t,e)}E_(t){return R(!!t.streamToken),this.lastStreamToken=t.streamToken,R(!t.writeResults||0===t.writeResults.length),this.listener.f_()}onNext(t){R(!!t.streamToken),this.lastStreamToken=t.streamToken,this.t_.reset();const e=Fi(t.writeResults,t.commitTime),n=Ei(t.commitTime);return this.listener.g_(n,e)}p_(){const t={};t.database=Pi(this.serializer),this.a_(t)}m_(t){const e={streamToken:this.lastStreamToken,writes:t.map((t=>Li(this.serializer,t)))};this.a_(e)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sr extends class{}{constructor(t,e,n,i){super(),this.authCredentials=t,this.appCheckCredentials=e,this.connection=n,this.serializer=i,this.y_=!1}w_(){if(this.y_)throw new D(N.FAILED_PRECONDITION,"The client has already been terminated.")}Mo(t,e,n,i){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([s,r])=>this.connection.Mo(t,Ii(e,n),i,s,r))).catch((t=>{throw"FirebaseError"===t.name?(t.code===N.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),t):new D(N.UNKNOWN,t.toString())}))}Lo(t,e,n,i,s){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([r,o])=>this.connection.Lo(t,Ii(e,n),i,r,o,s))).catch((t=>{throw"FirebaseError"===t.name?(t.code===N.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),t):new D(N.UNKNOWN,t.toString())}))}terminate(){this.y_=!0,this.connection.terminate()}}class rr{constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this.S_=0,this.b_=null,this.D_=!0}v_(){0===this.S_&&(this.C_("Unknown"),this.b_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this.b_=null,this.F_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve()))))}M_(t){"Online"===this.state?this.C_("Unknown"):(this.S_++,this.S_>=1&&(this.x_(),this.F_(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.C_("Offline")))}set(t){this.x_(),this.S_=0,"Online"===t&&(this.D_=!1),this.C_(t)}C_(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}F_(t){const e=`Could not reach Cloud Firestore backend. ${t}\nThis typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.D_?(S(e),this.D_=!1):I("OnlineStateTracker",e)}x_(){null!==this.b_&&(this.b_.cancel(),this.b_=null)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class or{constructor(t,e,n,i,s){this.localStore=t,this.datastore=e,this.asyncQueue=n,this.remoteSyncer={},this.O_=[],this.N_=new Map,this.L_=new Set,this.B_=[],this.k_=s,this.k_._o((t=>{n.enqueueAndForget((async()=>{gr(this)&&(I("RemoteStore","Restarting streams for network reachability change."),await async function(t){const e=P(t);e.L_.add(4),await cr(e),e.q_.set("Unknown"),e.L_.delete(4),await ar(e)}(this))}))})),this.q_=new rr(n,i)}}async function ar(t){if(gr(t))for(const e of t.B_)await e(!0)}async function cr(t){for(const e of t.B_)await e(!1)}function lr(t,e){const n=P(t);n.N_.has(e.targetId)||(n.N_.set(e.targetId,e),pr(n)?fr(n):Dr(n).r_()&&ur(n,e))}function hr(t,e){const n=P(t),i=Dr(n);n.N_.delete(e),i.r_()&&dr(n,e),0===n.N_.size&&(i.r_()?i.o_():gr(n)&&n.q_.set("Unknown"))}function ur(t,e){if(t.Q_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(Y.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}Dr(t).A_(e)}function dr(t,e){t.Q_.xe(e),Dr(t).R_(e)}function fr(t){t.Q_=new fi({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ot:e=>t.N_.get(e)||null,tt:()=>t.datastore.serializer.databaseId}),Dr(t).start(),t.q_.v_()}function pr(t){return gr(t)&&!Dr(t).n_()&&t.N_.size>0}function gr(t){return 0===P(t).L_.size}function mr(t){t.Q_=void 0}async function yr(t){t.q_.set("Online")}async function vr(t){t.N_.forEach(((e,n)=>{ur(t,e)}))}async function _r(t,e){mr(t),pr(t)?(t.q_.M_(e),fr(t)):t.q_.set("Unknown")}async function br(t,e,n){if(t.q_.set("Online"),e instanceof ui&&2===e.state&&e.cause)try{await async function(t,e){const n=e.cause;for(const i of e.targetIds)t.N_.has(i)&&(await t.remoteSyncer.rejectListen(i,n),t.N_.delete(i),t.Q_.removeTarget(i))}(t,e)}catch(n){I("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),n),await wr(t,n)}else if(e instanceof li?t.Q_.Ke(e):e instanceof hi?t.Q_.He(e):t.Q_.We(e),!n.isEqual(Y.min()))try{const e=await Ds(t.localStore);n.compareTo(e)>=0&&await function(t,e){const n=t.Q_.rt(e);return n.targetChanges.forEach(((n,i)=>{if(n.resumeToken.approximateByteSize()>0){const s=t.N_.get(i);s&&t.N_.set(i,s.withResumeToken(n.resumeToken,e))}})),n.targetMismatches.forEach(((e,n)=>{const i=t.N_.get(e);if(!i)return;t.N_.set(e,i.withResumeToken(Nt.EMPTY_BYTE_STRING,i.snapshotVersion)),dr(t,e);const s=new Xi(i.target,e,n,i.sequenceNumber);ur(t,s)})),t.remoteSyncer.applyRemoteEvent(n)}(t,n)}catch(e){I("RemoteStore","Failed to raise snapshot:",e),await wr(t,e)}}async function wr(t,e,n){if(!ut(e))throw e;t.L_.add(1),await cr(t),t.q_.set("Offline"),n||(n=()=>Ds(t.localStore)),t.asyncQueue.enqueueRetryable((async()=>{I("RemoteStore","Retrying IndexedDB access"),await n(),t.L_.delete(1),await ar(t)}))}function Tr(t,e){return e().catch((n=>wr(t,n,e)))}async function xr(t){const e=P(t),n=Mr(e);let i=e.O_.length>0?e.O_[e.O_.length-1].batchId:-1;for(;Er(e);)try{const t=await Fs(e.localStore,i);if(null===t){0===e.O_.length&&n.o_();break}i=t.batchId,Cr(e,t)}catch(t){await wr(e,t)}Ir(e)&&Sr(e)}function Er(t){return gr(t)&&t.O_.length<10}function Cr(t,e){t.O_.push(e);const n=Mr(t);n.r_()&&n.V_&&n.m_(e.mutations)}function Ir(t){return gr(t)&&!Mr(t).n_()&&t.O_.length>0}function Sr(t){Mr(t).start()}async function kr(t){Mr(t).p_()}async function Ar(t){const e=Mr(t);for(const n of t.O_)e.m_(n.mutations)}async function Or(t,e,n){const i=t.O_.shift(),s=Kn.from(i,e,n);await Tr(t,(()=>t.remoteSyncer.applySuccessfulWrite(s))),await xr(t)}async function Rr(t,e){e&&Mr(t).V_&&await async function(t,e){if(function(t){return Jn(t)&&t!==N.ABORTED}(e.code)){const n=t.O_.shift();Mr(t).s_(),await Tr(t,(()=>t.remoteSyncer.rejectFailedWrite(n.batchId,e))),await xr(t)}}(t,e),Ir(t)&&Sr(t)}async function Pr(t,e){const n=P(t);n.asyncQueue.verifyOperationInProgress(),I("RemoteStore","RemoteStore received new credentials");const i=gr(n);n.L_.add(3),await cr(n),i&&n.q_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.L_.delete(3),await ar(n)}async function Nr(t,e){const n=P(t);e?(n.L_.delete(2),await ar(n)):e||(n.L_.add(2),await cr(n),n.q_.set("Unknown"))}function Dr(t){return t.K_||(t.K_=function(t,e,n){const i=P(t);return i.w_(),new nr(e,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,n)
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}(t.datastore,t.asyncQueue,{Eo:yr.bind(null,t),Ro:vr.bind(null,t),mo:_r.bind(null,t),d_:br.bind(null,t)}),t.B_.push((async e=>{e?(t.K_.s_(),pr(t)?fr(t):t.q_.set("Unknown")):(await t.K_.stop(),mr(t))}))),t.K_}function Mr(t){return t.U_||(t.U_=function(t,e,n){const i=P(t);return i.w_(),new ir(e,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,n)}(t.datastore,t.asyncQueue,{Eo:()=>Promise.resolve(),Ro:kr.bind(null,t),mo:Rr.bind(null,t),f_:Ar.bind(null,t),g_:Or.bind(null,t)}),t.B_.push((async e=>{e?(t.U_.s_(),await xr(t)):(await t.U_.stop(),t.O_.length>0&&(I("RemoteStore",`Stopping write stream with ${t.O_.length} pending writes`),t.O_=[]))}))),t.U_
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class Lr{constructor(t,e,n,i,s){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=n,this.op=i,this.removalCallback=s,this.deferred=new M,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((t=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(t,e,n,i,s){const r=Date.now()+n,o=new Lr(t,e,r,i,s);return o.start(n),o}start(t){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new D(N.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>null!==this.timerHandle?(this.clearTimeout(),this.op().then((t=>this.deferred.resolve(t)))):Promise.resolve()))}clearTimeout(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Fr(t,e){if(S("AsyncQueue",`${e}: ${t}`),ut(t))return new D(N.UNAVAILABLE,`${e}: ${t}`);throw t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ur{constructor(t){this.comparator=t?(e,n)=>t(e,n)||tt.comparator(e.key,n.key):(t,e)=>tt.comparator(t.key,e.key),this.keyedMap=sn(),this.sortedSet=new It(this.comparator)}static emptySet(t){return new Ur(t.comparator)}has(t){return null!=this.keyedMap.get(t)}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const e=this.keyedMap.get(t);return e?this.sortedSet.indexOf(e):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal(((e,n)=>(t(e),!1)))}add(t){const e=this.delete(t.key);return e.copy(e.keyedMap.insert(t.key,t),e.sortedSet.insert(t,null))}delete(t){const e=this.get(t);return e?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(e)):this}isEqual(t){if(!(t instanceof Ur))return!1;if(this.size!==t.size)return!1;const e=this.sortedSet.getIterator(),n=t.sortedSet.getIterator();for(;e.hasNext();){const t=e.getNext().key,i=n.getNext().key;if(!t.isEqual(i))return!1}return!0}toString(){const t=[];return this.forEach((e=>{t.push(e.toString())})),0===t.length?"DocumentSet ()":"DocumentSet (\n  "+t.join("  \n")+"\n)"}copy(t,e){const n=new Ur;return n.comparator=this.comparator,n.keyedMap=t,n.sortedSet=e,n}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vr{constructor(){this.W_=new It(tt.comparator)}track(t){const e=t.doc.key,n=this.W_.get(e);n?0!==t.type&&3===n.type?this.W_=this.W_.insert(e,t):3===t.type&&1!==n.type?this.W_=this.W_.insert(e,{type:n.type,doc:t.doc}):2===t.type&&2===n.type?this.W_=this.W_.insert(e,{type:2,doc:t.doc}):2===t.type&&0===n.type?this.W_=this.W_.insert(e,{type:0,doc:t.doc}):1===t.type&&0===n.type?this.W_=this.W_.remove(e):1===t.type&&2===n.type?this.W_=this.W_.insert(e,{type:1,doc:n.doc}):0===t.type&&1===n.type?this.W_=this.W_.insert(e,{type:2,doc:t.doc}):O():this.W_=this.W_.insert(e,t)}G_(){const t=[];return this.W_.inorderTraversal(((e,n)=>{t.push(n)})),t}}class jr{constructor(t,e,n,i,s,r,o,a,c){this.query=t,this.docs=e,this.oldDocs=n,this.docChanges=i,this.mutatedKeys=s,this.fromCache=r,this.syncStateChanged=o,this.excludesMetadataChanges=a,this.hasCachedResults=c}static fromInitialDocuments(t,e,n,i,s){const r=[];return e.forEach((t=>{r.push({type:0,doc:t})})),new jr(t,e,Ur.emptySet(e),r,n,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&qe(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const e=this.docChanges,n=t.docChanges;if(e.length!==n.length)return!1;for(let i=0;i<e.length;i++)if(e[i].type!==n[i].type||!e[i].doc.isEqual(n[i].doc))return!1;return!0}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zr{constructor(){this.z_=void 0,this.j_=[]}H_(){return this.j_.some((t=>t.J_()))}}class Br{constructor(){this.queries=$r(),this.onlineState="Unknown",this.Y_=new Set}terminate(){!function(t,e){const n=P(t),i=n.queries;n.queries=$r(),i.forEach(((t,n)=>{for(const i of n.j_)i.onError(e)}))}(this,new D(N.ABORTED,"Firestore shutting down"))}}function $r(){return new Ze((t=>Ke(t)),qe)}async function Wr(t,e){const n=P(t);let i=3;const s=e.query;let r=n.queries.get(s);r?!r.H_()&&e.J_()&&(i=2):(r=new zr,i=e.J_()?0:1);try{switch(i){case 0:r.z_=await n.onListen(s,!0);break;case 1:r.z_=await n.onListen(s,!1);break;case 2:await n.onFirstRemoteStoreListen(s)}}catch(t){const n=Fr(t,`Initialization of query '${Ge(e.query)}' failed`);return void e.onError(n)}n.queries.set(s,r),r.j_.push(e),e.Z_(n.onlineState),r.z_&&e.X_(r.z_)&&Gr(n)}async function Hr(t,e){const n=P(t),i=e.query;let s=3;const r=n.queries.get(i);if(r){const t=r.j_.indexOf(e);t>=0&&(r.j_.splice(t,1),0===r.j_.length?s=e.J_()?0:1:!r.H_()&&e.J_()&&(s=2))}switch(s){case 0:return n.queries.delete(i),n.onUnlisten(i,!0);case 1:return n.queries.delete(i),n.onUnlisten(i,!1);case 2:return n.onLastRemoteStoreUnlisten(i);default:return}}function qr(t,e){const n=P(t);let i=!1;for(const s of e){const t=s.query,e=n.queries.get(t);if(e){for(const t of e.j_)t.X_(s)&&(i=!0);e.z_=s}}i&&Gr(n)}function Kr(t,e,n){const i=P(t),s=i.queries.get(e);if(s)for(const r of s.j_)r.onError(n);i.queries.delete(e)}function Gr(t){t.Y_.forEach((t=>{t.next()}))}var Yr,Qr;(Qr=Yr||(Yr={})).ea="default",Qr.Cache="cache";class Xr{constructor(t,e,n){this.query=t,this.ta=e,this.na=!1,this.ra=null,this.onlineState="Unknown",this.options=n||{}}X_(t){if(!this.options.includeMetadataChanges){const e=[];for(const n of t.docChanges)3!==n.type&&e.push(n);t=new jr(t.query,t.docs,t.oldDocs,e,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let e=!1;return this.na?this.ia(t)&&(this.ta.next(t),e=!0):this.sa(t,this.onlineState)&&(this.oa(t),e=!0),this.ra=t,e}onError(t){this.ta.error(t)}Z_(t){this.onlineState=t;let e=!1;return this.ra&&!this.na&&this.sa(this.ra,t)&&(this.oa(this.ra),e=!0),e}sa(t,e){if(!t.fromCache)return!0;if(!this.J_())return!0;const n="Offline"!==e;return(!this.options._a||!n)&&(!t.docs.isEmpty()||t.hasCachedResults||"Offline"===e)}ia(t){if(t.docChanges.length>0)return!0;const e=this.ra&&this.ra.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!e)&&!0===this.options.includeMetadataChanges}oa(t){t=jr.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.na=!0,this.ta.next(t)}J_(){return this.options.source!==Yr.Cache}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Jr{constructor(t){this.key=t}}class Zr{constructor(t){this.key=t}}class to{constructor(t,e){this.query=t,this.Ta=e,this.Ea=null,this.hasCachedResults=!1,this.current=!1,this.da=un(),this.mutatedKeys=un(),this.Aa=Xe(t),this.Ra=new Ur(this.Aa)}get Va(){return this.Ta}ma(t,e){const n=e?e.fa:new Vr,i=e?e.Ra:this.Ra;let s=e?e.mutatedKeys:this.mutatedKeys,r=i,o=!1;const a="F"===this.query.limitType&&i.size===this.query.limit?i.last():null,c="L"===this.query.limitType&&i.size===this.query.limit?i.first():null;if(t.inorderTraversal(((t,e)=>{const l=i.get(t),h=Ye(this.query,e)?e:null,u=!!l&&this.mutatedKeys.has(l.key),d=!!h&&(h.hasLocalMutations||this.mutatedKeys.has(h.key)&&h.hasCommittedMutations);let f=!1;l&&h?l.data.isEqual(h.data)?u!==d&&(n.track({type:3,doc:h}),f=!0):this.ga(l,h)||(n.track({type:2,doc:h}),f=!0,(a&&this.Aa(h,a)>0||c&&this.Aa(h,c)<0)&&(o=!0)):!l&&h?(n.track({type:0,doc:h}),f=!0):l&&!h&&(n.track({type:1,doc:l}),f=!0,(a||c)&&(o=!0)),f&&(h?(r=r.add(h),s=d?s.add(t):s.delete(t)):(r=r.delete(t),s=s.delete(t)))})),null!==this.query.limit)for(;r.size>this.query.limit;){const t="F"===this.query.limitType?r.last():r.first();r=r.delete(t.key),s=s.delete(t.key),n.track({type:1,doc:t})}return{Ra:r,fa:n,ns:o,mutatedKeys:s}}ga(t,e){return t.hasLocalMutations&&e.hasCommittedMutations&&!e.hasLocalMutations}applyChanges(t,e,n,i){const s=this.Ra;this.Ra=t.Ra,this.mutatedKeys=t.mutatedKeys;const r=t.fa.G_();r.sort(((t,e)=>function(t,e){const n=t=>{switch(t){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return O()}};return n(t)-n(e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t.type,e.type)||this.Aa(t.doc,e.doc))),this.pa(n),i=null!=i&&i;const o=e&&!i?this.ya():[],a=0===this.da.size&&this.current&&!i?1:0,c=a!==this.Ea;return this.Ea=a,0!==r.length||c?{snapshot:new jr(this.query,t.Ra,s,r,t.mutatedKeys,0===a,c,!1,!!n&&n.resumeToken.approximateByteSize()>0),wa:o}:{wa:o}}Z_(t){return this.current&&"Offline"===t?(this.current=!1,this.applyChanges({Ra:this.Ra,fa:new Vr,mutatedKeys:this.mutatedKeys,ns:!1},!1)):{wa:[]}}Sa(t){return!this.Ta.has(t)&&!!this.Ra.has(t)&&!this.Ra.get(t).hasLocalMutations}pa(t){t&&(t.addedDocuments.forEach((t=>this.Ta=this.Ta.add(t))),t.modifiedDocuments.forEach((t=>{})),t.removedDocuments.forEach((t=>this.Ta=this.Ta.delete(t))),this.current=t.current)}ya(){if(!this.current)return[];const t=this.da;this.da=un(),this.Ra.forEach((t=>{this.Sa(t.key)&&(this.da=this.da.add(t.key))}));const e=[];return t.forEach((t=>{this.da.has(t)||e.push(new Zr(t))})),this.da.forEach((n=>{t.has(n)||e.push(new Jr(n))})),e}ba(t){this.Ta=t.Ts,this.da=un();const e=this.ma(t.documents);return this.applyChanges(e,!0)}Da(){return jr.fromInitialDocuments(this.query,this.Ra,this.mutatedKeys,0===this.Ea,this.hasCachedResults)}}class eo{constructor(t,e,n){this.query=t,this.targetId=e,this.view=n}}class no{constructor(t){this.key=t,this.va=!1}}class io{constructor(t,e,n,i,s,r){this.localStore=t,this.remoteStore=e,this.eventManager=n,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=r,this.Ca={},this.Fa=new Ze((t=>Ke(t)),qe),this.Ma=new Map,this.xa=new Set,this.Oa=new It(tt.comparator),this.Na=new Map,this.La=new ys,this.Ba={},this.ka=new Map,this.qa=rs.kn(),this.onlineState="Unknown",this.Qa=void 0}get isPrimaryClient(){return!0===this.Qa}}async function so(t,e,n=!0){const i=So(t);let s;const r=i.Fa.get(e);return r?(i.sharedClientState.addLocalQueryTarget(r.targetId),s=r.view.Da()):s=await oo(i,e,n,!0),s}async function ro(t,e){const n=So(t);await oo(n,e,!0,!1)}async function oo(t,e,n,i){const s=await Us(t.localStore,$e(e)),r=s.targetId,o=t.sharedClientState.addLocalQueryTarget(r,n);let a;return i&&(a=await ao(t,e,r,"current"===o,s.resumeToken)),t.isPrimaryClient&&n&&lr(t.remoteStore,s),a}async function ao(t,e,n,i,s){t.Ka=(e,n,i)=>async function(t,e,n,i){let s=e.view.ma(n);s.ns&&(s=await js(t.localStore,e.query,!1).then((({documents:t})=>e.view.ma(t,s))));const r=i&&i.targetChanges.get(e.targetId),o=i&&null!=i.targetMismatches.get(e.targetId),a=e.view.applyChanges(s,t.isPrimaryClient,r,o);return wo(t,e.targetId,a.wa),a.snapshot}(t,e,n,i);const r=await js(t.localStore,e,!0),o=new to(e,r.Ts),a=o.ma(r.documents),c=ci.createSynthesizedTargetChangeForCurrentChange(n,i&&"Offline"!==t.onlineState,s),l=o.applyChanges(a,t.isPrimaryClient,c);wo(t,n,l.wa);const h=new eo(e,n,o);return t.Fa.set(e,h),t.Ma.has(n)?t.Ma.get(n).push(e):t.Ma.set(n,[e]),l.snapshot}async function co(t,e,n){const i=P(t),s=i.Fa.get(e),r=i.Ma.get(s.targetId);if(r.length>1)return i.Ma.set(s.targetId,r.filter((t=>!qe(t,e)))),void i.Fa.delete(e);i.isPrimaryClient?(i.sharedClientState.removeLocalQueryTarget(s.targetId),i.sharedClientState.isActiveQueryTarget(s.targetId)||await Vs(i.localStore,s.targetId,!1).then((()=>{i.sharedClientState.clearQueryState(s.targetId),n&&hr(i.remoteStore,s.targetId),_o(i,s.targetId)})).catch(ct)):(_o(i,s.targetId),await Vs(i.localStore,s.targetId,!0))}async function lo(t,e){const n=P(t),i=n.Fa.get(e),s=n.Ma.get(i.targetId);n.isPrimaryClient&&1===s.length&&(n.sharedClientState.removeLocalQueryTarget(i.targetId),hr(n.remoteStore,i.targetId))}async function ho(t,e,n){const i=ko(t);try{const t=await function(t,e){const n=P(t),i=G.now(),s=e.reduce(((t,e)=>t.add(e.key)),un());let r,o;return n.persistence.runTransaction("Locally write mutations","readwrite",(t=>{let a=en(),c=un();return n.cs.getEntries(t,s).next((t=>{a=t,a.forEach(((t,e)=>{e.isValidDocument()||(c=c.add(t))}))})).next((()=>n.localDocuments.getOverlayedDocuments(t,a))).next((s=>{r=s;const o=[];for(const t of e){const e=Fn(t,r.get(t.key).overlayedDocument);null!=e&&o.push(new jn(t.key,e,ce(e.value.mapValue),Rn.exists(!0)))}return n.mutationQueue.addMutationBatch(t,i,o,e)})).next((e=>{o=e;const i=e.applyToLocalDocumentSet(r,c);return n.documentOverlayCache.saveOverlays(t,e.batchId,i)}))})).then((()=>({batchId:o.batchId,changes:rn(r)})))}(i.localStore,e);i.sharedClientState.addPendingMutation(t.batchId),function(t,e,n){let i=t.Ba[t.currentUser.toKey()];i||(i=new It(q)),i=i.insert(e,n),t.Ba[t.currentUser.toKey()]=i}(i,t.batchId,n),await Eo(i,t.changes),await xr(i.remoteStore)}catch(t){const e=Fr(t,"Failed to persist write");n.reject(e)}}async function uo(t,e){const n=P(t);try{const t=await Ms(n.localStore,e);e.targetChanges.forEach(((t,e)=>{const i=n.Na.get(e);i&&(R(t.addedDocuments.size+t.modifiedDocuments.size+t.removedDocuments.size<=1),t.addedDocuments.size>0?i.va=!0:t.modifiedDocuments.size>0?R(i.va):t.removedDocuments.size>0&&(R(i.va),i.va=!1))})),await Eo(n,t,e)}catch(t){await ct(t)}}function fo(t,e,n){const i=P(t);if(i.isPrimaryClient&&0===n||!i.isPrimaryClient&&1===n){const t=[];i.Fa.forEach(((n,i)=>{const s=i.view.Z_(e);s.snapshot&&t.push(s.snapshot)})),function(t,e){const n=P(t);n.onlineState=e;let i=!1;n.queries.forEach(((t,n)=>{for(const s of n.j_)s.Z_(e)&&(i=!0)})),i&&Gr(n)}(i.eventManager,e),t.length&&i.Ca.d_(t),i.onlineState=e,i.isPrimaryClient&&i.sharedClientState.setOnlineState(e)}}async function po(t,e,n){const i=P(t);i.sharedClientState.updateQueryState(e,"rejected",n);const s=i.Na.get(e),r=s&&s.key;if(r){let t=new It(tt.comparator);t=t.insert(r,le.newNoDocument(r,Y.min()));const n=un().add(r),s=new ai(Y.min(),new Map,new It(q),t,n);await uo(i,s),i.Oa=i.Oa.remove(r),i.Na.delete(e),xo(i)}else await Vs(i.localStore,e,!1).then((()=>_o(i,e,n))).catch(ct)}async function go(t,e){const n=P(t),i=e.batch.batchId;try{const t=await Ns(n.localStore,e);vo(n,i,null),yo(n,i),n.sharedClientState.updateMutationState(i,"acknowledged"),await Eo(n,t)}catch(t){await ct(t)}}async function mo(t,e,n){const i=P(t);try{const t=await function(t,e){const n=P(t);return n.persistence.runTransaction("Reject batch","readwrite-primary",(t=>{let i;return n.mutationQueue.lookupMutationBatch(t,e).next((e=>(R(null!==e),i=e.keys(),n.mutationQueue.removeMutationBatch(t,e)))).next((()=>n.mutationQueue.performConsistencyCheck(t))).next((()=>n.documentOverlayCache.removeOverlaysForBatchId(t,i,e))).next((()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(t,i))).next((()=>n.localDocuments.getDocuments(t,i)))}))}(i.localStore,e);vo(i,e,n),yo(i,e),i.sharedClientState.updateMutationState(e,"rejected",n),await Eo(i,t)}catch(n){await ct(n)}}function yo(t,e){(t.ka.get(e)||[]).forEach((t=>{t.resolve()})),t.ka.delete(e)}function vo(t,e,n){const i=P(t);let s=i.Ba[i.currentUser.toKey()];if(s){const t=s.get(e);t&&(n?t.reject(n):t.resolve(),s=s.remove(e)),i.Ba[i.currentUser.toKey()]=s}}function _o(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const i of t.Ma.get(e))t.Fa.delete(i),n&&t.Ca.$a(i,n);t.Ma.delete(e),t.isPrimaryClient&&t.La.gr(e).forEach((e=>{t.La.containsKey(e)||bo(t,e)}))}function bo(t,e){t.xa.delete(e.path.canonicalString());const n=t.Oa.get(e);null!==n&&(hr(t.remoteStore,n),t.Oa=t.Oa.remove(e),t.Na.delete(n),xo(t))}function wo(t,e,n){for(const i of n)i instanceof Jr?(t.La.addReference(i.key,e),To(t,i)):i instanceof Zr?(I("SyncEngine","Document no longer in limbo: "+i.key),t.La.removeReference(i.key,e),t.La.containsKey(i.key)||bo(t,i.key)):O()}function To(t,e){const n=e.key,i=n.path.canonicalString();t.Oa.get(n)||t.xa.has(i)||(I("SyncEngine","New document in limbo: "+n),t.xa.add(i),xo(t))}function xo(t){for(;t.xa.size>0&&t.Oa.size<t.maxConcurrentLimboResolutions;){const e=t.xa.values().next().value;t.xa.delete(e);const n=new tt(X.fromString(e)),i=t.qa.next();t.Na.set(i,new no(n)),t.Oa=t.Oa.insert(n,i),lr(t.remoteStore,new Xi($e(Ve(n.path)),i,"TargetPurposeLimboResolution",dt.oe))}}async function Eo(t,e,n){const i=P(t),s=[],r=[],o=[];i.Fa.isEmpty()||(i.Fa.forEach(((t,a)=>{o.push(i.Ka(a,e,n).then((t=>{var e;if((t||n)&&i.isPrimaryClient){const s=t?!t.fromCache:null===(e=null==n?void 0:n.targetChanges.get(a.targetId))||void 0===e?void 0:e.current;i.sharedClientState.updateQueryState(a.targetId,s?"current":"not-current")}if(t){s.push(t);const e=Ss.Wi(a.targetId,t);r.push(e)}})))})),await Promise.all(o),i.Ca.d_(s),await async function(t,e){const n=P(t);try{await n.persistence.runTransaction("notifyLocalViewChanges","readwrite",(t=>lt.forEach(e,(e=>lt.forEach(e.$i,(i=>n.persistence.referenceDelegate.addReference(t,e.targetId,i))).next((()=>lt.forEach(e.Ui,(i=>n.persistence.referenceDelegate.removeReference(t,e.targetId,i)))))))))}catch(t){if(!ut(t))throw t;I("LocalStore","Failed to update sequence numbers: "+t)}for(const i of e){const t=i.targetId;if(!i.fromCache){const e=n.os.get(t),i=e.snapshotVersion,s=e.withLastLimboFreeSnapshotVersion(i);n.os=n.os.insert(t,s)}}}(i.localStore,r))}async function Co(t,e){const n=P(t);if(!n.currentUser.isEqual(e)){I("SyncEngine","User change. New user:",e.toKey());const t=await Ps(n.localStore,e);n.currentUser=e,function(t,e){t.ka.forEach((t=>{t.forEach((t=>{t.reject(new D(N.CANCELLED,e))}))})),t.ka.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,t.removedBatchIds,t.addedBatchIds),await Eo(n,t.hs)}}function Io(t,e){const n=P(t),i=n.Na.get(e);if(i&&i.va)return un().add(i.key);{let t=un();const i=n.Ma.get(e);if(!i)return t;for(const e of i){const i=n.Fa.get(e);t=t.unionWith(i.view.Va)}return t}}function So(t){const e=P(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=uo.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=Io.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=po.bind(null,e),e.Ca.d_=qr.bind(null,e.eventManager),e.Ca.$a=Kr.bind(null,e.eventManager),e}function ko(t){const e=P(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=go.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=mo.bind(null,e),e}class Ao{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(t){this.serializer=Zs(t.databaseInfo.databaseId),this.sharedClientState=this.Wa(t),this.persistence=this.Ga(t),await this.persistence.start(),this.localStore=this.za(t),this.gcScheduler=this.ja(t,this.localStore),this.indexBackfillerScheduler=this.Ha(t,this.localStore)}ja(t,e){return null}Ha(t,e){return null}za(t){return Rs(this.persistence,new As,t.initialUser,this.serializer)}Ga(t){return new xs(Cs.Zr,this.serializer)}Wa(t){return new $s}async terminate(){var t,e;null===(t=this.gcScheduler)||void 0===t||t.stop(),null===(e=this.indexBackfillerScheduler)||void 0===e||e.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Ao.provider={build:()=>new Ao};class Oo extends Ao{constructor(t){super(),this.cacheSizeBytes=t}ja(t,e){R(this.persistence.referenceDelegate instanceof Is);const n=this.persistence.referenceDelegate.garbageCollector;return new cs(n,t.asyncQueue,e)}Ga(t){const e=void 0!==this.cacheSizeBytes?ss.withCacheSize(this.cacheSizeBytes):ss.DEFAULT;return new xs((t=>Is.Zr(t,e)),this.serializer)}}class Ro{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=t=>fo(this.syncEngine,t,1),this.remoteStore.remoteSyncer.handleCredentialChange=Co.bind(null,this.syncEngine),await Nr(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return function(){return new Br}()}createDatastore(t){const e=Zs(t.databaseInfo.databaseId),n=function(t){return new Xs(t)}(t.databaseInfo);return function(t,e,n,i){return new sr(t,e,n,i)}(t.authCredentials,t.appCheckCredentials,n,e)}createRemoteStore(t){return function(t,e,n,i,s){return new or(t,e,n,i,s)}(this.localStore,this.datastore,t.asyncQueue,(t=>fo(this.syncEngine,t,0)),function(){return Hs.D()?new Hs:new Ws}())}createSyncEngine(t,e){return function(t,e,n,i,s,r,o){const a=new io(t,e,n,i,s,r);return o&&(a.Qa=!0),a}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}async terminate(){var t,e;await async function(t){const e=P(t);I("RemoteStore","RemoteStore shutting down."),e.L_.add(5),await cr(e),e.k_.shutdown(),e.q_.set("Unknown")}(this.remoteStore),null===(t=this.datastore)||void 0===t||t.terminate(),null===(e=this.eventManager)||void 0===e||e.terminate()}}Ro.provider={build:()=>new Ro};
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Po{constructor(t){this.observer=t,this.muted=!1}next(t){this.muted||this.observer.next&&this.Ya(this.observer.next,t)}error(t){this.muted||(this.observer.error?this.Ya(this.observer.error,t):S("Uncaught Error in snapshot listener:",t.toString()))}Za(){this.muted=!0}Ya(t,e){setTimeout((()=>{this.muted||t(e)}),0)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class No{constructor(t,e,n,i,s){this.authCredentials=t,this.appCheckCredentials=e,this.asyncQueue=n,this.databaseInfo=i,this.user=T.UNAUTHENTICATED,this.clientId=H.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=s,this.authCredentials.start(n,(async t=>{I("FirestoreClient","Received user=",t.uid),await this.authCredentialListener(t),this.user=t})),this.appCheckCredentials.start(n,(t=>(I("FirestoreClient","Received new app check token=",t),this.appCheckCredentialListener(t,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}terminate(){this.asyncQueue.enterRestrictedMode();const t=new M;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(e){const n=Fr(e,"Failed to shutdown persistence");t.reject(n)}})),t.promise}}async function Do(t,e){t.asyncQueue.verifyOperationInProgress(),I("FirestoreClient","Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let i=n.initialUser;t.setCredentialChangeListener((async t=>{i.isEqual(t)||(await Ps(e.localStore,t),i=t)})),e.persistence.setDatabaseDeletedListener((()=>t.terminate())),t._offlineComponents=e}async function Mo(t,e){t.asyncQueue.verifyOperationInProgress();const n=await Lo(t);I("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener((t=>Pr(e.remoteStore,t))),t.setAppCheckTokenChangeListener(((t,n)=>Pr(e.remoteStore,n))),t._onlineComponents=e}async function Lo(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){I("FirestoreClient","Using user provided OfflineComponentProvider");try{await Do(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(t){return"FirebaseError"===t.name?t.code===N.FAILED_PRECONDITION||t.code===N.UNIMPLEMENTED:!("undefined"!=typeof DOMException&&t instanceof DOMException)||22===t.code||20===t.code||11===t.code}(n))throw n;k("Error using user provided cache. Falling back to memory cache: "+n),await Do(t,new Ao)}}else I("FirestoreClient","Using default OfflineComponentProvider"),await Do(t,new Oo(void 0));return t._offlineComponents}async function Fo(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(I("FirestoreClient","Using user provided OnlineComponentProvider"),await Mo(t,t._uninitializedComponentsProvider._online)):(I("FirestoreClient","Using default OnlineComponentProvider"),await Mo(t,new Ro))),t._onlineComponents}function Uo(t){return Fo(t).then((t=>t.syncEngine))}async function Vo(t){const e=await Fo(t),n=e.eventManager;return n.onListen=so.bind(null,e.syncEngine),n.onUnlisten=co.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=ro.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=lo.bind(null,e.syncEngine),n}function jo(t,e,n={}){const i=new M;return t.asyncQueue.enqueueAndForget((async()=>function(t,e,n,i,s){const r=new Po({next:a=>{r.Za(),e.enqueueAndForget((()=>Hr(t,o)));const c=a.docs.has(n);!c&&a.fromCache?s.reject(new D(N.UNAVAILABLE,"Failed to get document because the client is offline.")):c&&a.fromCache&&i&&"server"===i.source?s.reject(new D(N.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):s.resolve(a)},error:t=>s.reject(t)}),o=new Xr(Ve(n.path),r,{includeMetadataChanges:!0,_a:!0});return Wr(t,o)}(await Vo(t),t.asyncQueue,e,n,i))),i.promise}function zo(t,e,n={}){const i=new M;return t.asyncQueue.enqueueAndForget((async()=>function(t,e,n,i,s){const r=new Po({next:n=>{r.Za(),e.enqueueAndForget((()=>Hr(t,o))),n.fromCache&&"server"===i.source?s.reject(new D(N.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):s.resolve(n)},error:t=>s.reject(t)}),o=new Xr(n,r,{includeMetadataChanges:!0,_a:!0});return Wr(t,o)}(await Vo(t),t.asyncQueue,e,n,i))),i.promise}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Bo(t){const e={};return void 0!==t.timeoutSeconds&&(e.timeoutSeconds=t.timeoutSeconds),e
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}const $o=new Map;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wo(t,e,n){if(!n)throw new D(N.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function Ho(t,e,n,i){if(!0===e&&!0===i)throw new D(N.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function qo(t){if(!tt.isDocumentKey(t))throw new D(N.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Ko(t){if(tt.isDocumentKey(t))throw new D(N.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Go(t){if(void 0===t)return"undefined";if(null===t)return"null";if("string"==typeof t)return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if("number"==typeof t||"boolean"==typeof t)return""+t;if("object"==typeof t){if(t instanceof Array)return"an array";{const e=function(t){return t.constructor?t.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return"function"==typeof t?"a function":O()}function Yo(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new D(N.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Go(t);throw new D(N.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Qo{constructor(t){var e,n;if(void 0===t.host){if(void 0!==t.ssl)throw new D(N.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=null===(e=t.ssl)||void 0===e||e;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,void 0===t.cacheSizeBytes)this.cacheSizeBytes=41943040;else{if(-1!==t.cacheSizeBytes&&t.cacheSizeBytes<1048576)throw new D(N.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}Ho("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:void 0===t.experimentalAutoDetectLongPolling?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Bo(null!==(n=t.experimentalLongPollingOptions)&&void 0!==n?n:{}),function(t){if(void 0!==t.timeoutSeconds){if(isNaN(t.timeoutSeconds))throw new D(N.INVALID_ARGUMENT,`invalid long polling timeout: ${t.timeoutSeconds} (must not be NaN)`);if(t.timeoutSeconds<5)throw new D(N.INVALID_ARGUMENT,`invalid long polling timeout: ${t.timeoutSeconds} (minimum allowed value is 5)`);if(t.timeoutSeconds>30)throw new D(N.INVALID_ARGUMENT,`invalid long polling timeout: ${t.timeoutSeconds} (maximum allowed value is 30)`)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&function(t,e){return t.timeoutSeconds===e.timeoutSeconds}(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class Xo{constructor(t,e,n,i){this._authCredentials=t,this._appCheckCredentials=e,this._databaseId=n,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Qo({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new D(N.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return"notTerminated"!==this._terminateTask}_setSettings(t){if(this._settingsFrozen)throw new D(N.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Qo(t),void 0!==t.credentials&&(this._authCredentials=function(t){if(!t)return new F;switch(t.type){case"firstParty":return new z(t.sessionIndex||"0",t.iamToken||null,t.authTokenFactory||null);case"provider":return t.client;default:throw new D(N.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return"notTerminated"===this._terminateTask&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){"notTerminated"===this._terminateTask?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const e=$o.get(t);e&&(I("ComponentProvider","Removing Datastore"),$o.delete(t),e.terminate())}(this),Promise.resolve()}}function Jo(t,e,n,i={}){var s;const r=(t=Yo(t,Xo))._getSettings(),o=`${e}:${n}`;if("firestore.googleapis.com"!==r.host&&r.host!==o&&k("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},r),{host:o,ssl:!1})),i.mockUserToken){let e,n;if("string"==typeof i.mockUserToken)e=i.mockUserToken,n=T.MOCK_USER;else{e=(0,c.Fy)(i.mockUserToken,null===(s=t._app)||void 0===s?void 0:s.options.projectId);const r=i.mockUserToken.sub||i.mockUserToken.user_id;if(!r)throw new D(N.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");n=new T(r)}t._authCredentials=new U(new L(e,n))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zo{constructor(t,e,n){this.converter=e,this._query=n,this.type="query",this.firestore=t}withConverter(t){return new Zo(this.firestore,t,this._query)}}class ta{constructor(t,e,n){this.converter=e,this._key=n,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new ea(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new ta(this.firestore,t,this._key)}}class ea extends Zo{constructor(t,e,n){super(t,e,Ve(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new ta(this.firestore,null,new tt(t))}withConverter(t){return new ea(this.firestore,t,this._path)}}function na(t,e,...n){if(t=(0,c.Ku)(t),Wo("collection","path",e),t instanceof Xo){const i=X.fromString(e,...n);return Ko(i),new ea(t,null,i)}{if(!(t instanceof ta||t instanceof ea))throw new D(N.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=t._path.child(X.fromString(e,...n));return Ko(i),new ea(t.firestore,null,i)}}function ia(t,e,...n){if(t=(0,c.Ku)(t),1===arguments.length&&(e=H.newId()),Wo("doc","path",e),t instanceof Xo){const i=X.fromString(e,...n);return qo(i),new ta(t,null,new tt(i))}{if(!(t instanceof ta||t instanceof ea))throw new D(N.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=t._path.child(X.fromString(e,...n));return qo(i),new ta(t.firestore,t instanceof ea?t.converter:null,new tt(i))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class sa{constructor(t=Promise.resolve()){this.Pu=[],this.Iu=!1,this.Tu=[],this.Eu=null,this.du=!1,this.Au=!1,this.Ru=[],this.t_=new tr(this,"async_queue_retry"),this.Vu=()=>{const t=Js();t&&I("AsyncQueue","Visibility state changed to "+t.visibilityState),this.t_.jo()},this.mu=t;const e=Js();e&&"function"==typeof e.addEventListener&&e.addEventListener("visibilitychange",this.Vu)}get isShuttingDown(){return this.Iu}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.fu(),this.gu(t)}enterRestrictedMode(t){if(!this.Iu){this.Iu=!0,this.Au=t||!1;const e=Js();e&&"function"==typeof e.removeEventListener&&e.removeEventListener("visibilitychange",this.Vu)}}enqueue(t){if(this.fu(),this.Iu)return new Promise((()=>{}));const e=new M;return this.gu((()=>this.Iu&&this.Au?Promise.resolve():(t().then(e.resolve,e.reject),e.promise))).then((()=>e.promise))}enqueueRetryable(t){this.enqueueAndForget((()=>(this.Pu.push(t),this.pu())))}async pu(){if(0!==this.Pu.length){try{await this.Pu[0](),this.Pu.shift(),this.t_.reset()}catch(t){if(!ut(t))throw t;I("AsyncQueue","Operation failed with retryable error: "+t)}this.Pu.length>0&&this.t_.Go((()=>this.pu()))}}gu(t){const e=this.mu.then((()=>(this.du=!0,t().catch((t=>{this.Eu=t,this.du=!1;const e=function(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+"\n"+t.stack),e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t);throw S("INTERNAL UNHANDLED ERROR: ",e),t})).then((t=>(this.du=!1,t))))));return this.mu=e,e}enqueueAfterDelay(t,e,n){this.fu(),this.Ru.indexOf(t)>-1&&(e=0);const i=Lr.createAndSchedule(this,t,e,n,(t=>this.yu(t)));return this.Tu.push(i),i}fu(){this.Eu&&O()}verifyOperationInProgress(){}async wu(){let t;do{t=this.mu,await t}while(t!==this.mu)}Su(t){for(const e of this.Tu)if(e.timerId===t)return!0;return!1}bu(t){return this.wu().then((()=>{this.Tu.sort(((t,e)=>t.targetTimeMs-e.targetTimeMs));for(const e of this.Tu)if(e.skipDelay(),"all"!==t&&e.timerId===t)break;return this.wu()}))}Du(t){this.Ru.push(t)}yu(t){const e=this.Tu.indexOf(t);this.Tu.splice(e,1)}}function ra(t){return function(t,e){if("object"!=typeof t||null===t)return!1;const n=t;for(const i of e)if(i in n&&"function"==typeof n[i])return!0;return!1}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t,["next","error","complete"])}class oa extends Xo{constructor(t,e,n,i){super(t,e,n,i),this.type="firestore",this._queue=new sa,this._persistenceKey=(null==i?void 0:i.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const t=this._firestoreClient.terminate();this._queue=new sa(t),this._firestoreClient=void 0,await t}}}function aa(t,e){const n="object"==typeof t?t:(0,r.Sx)(),i="string"==typeof t?t:e||"(default)",s=(0,r.j6)(n,"firestore").getImmediate({identifier:i});if(!s._initialized){const t=(0,c.yU)("firestore");t&&Jo(s,...t)}return s}function ca(t){if(t._terminated)throw new D(N.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||la(t),t._firestoreClient}function la(t){var e,n,i;const s=t._freezeSettings(),r=function(t,e,n,i){return new zt(t,e,n,i.host,i.ssl,i.experimentalForceLongPolling,i.experimentalAutoDetectLongPolling,Bo(i.experimentalLongPollingOptions),i.useFetchStreams)}(t._databaseId,(null===(e=t._app)||void 0===e?void 0:e.options.appId)||"",t._persistenceKey,s);t._componentsProvider||(null===(n=s.localCache)||void 0===n?void 0:n._offlineComponentProvider)&&(null===(i=s.localCache)||void 0===i?void 0:i._onlineComponentProvider)&&(t._componentsProvider={_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider}),t._firestoreClient=new No(t._authCredentials,t._appCheckCredentials,t._queue,r,t._componentsProvider&&function(t){const e=null==t?void 0:t._online.build();return{_offline:null==t?void 0:t._offline.build(e),_online:e}}(t._componentsProvider))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ha{constructor(t){this._byteString=t}static fromBase64String(t){try{return new ha(Nt.fromBase64String(t))}catch(t){throw new D(N.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(t){return new ha(Nt.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ua{constructor(...t){for(let e=0;e<t.length;++e)if(0===t[e].length)throw new D(N.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Z(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class da{constructor(t){this._methodName=t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fa{constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new D(N.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new D(N.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return q(this._lat,t._lat)||q(this._long,t._long)}}
/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pa{constructor(t){this._values=(t||[]).map((t=>t))}toArray(){return this._values.map((t=>t))}isEqual(t){return function(t,e){if(t.length!==e.length)return!1;for(let n=0;n<t.length;++n)if(t[n]!==e[n])return!1;return!0}(this._values,t._values)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ga=/^__.*__$/;class ma{constructor(t,e,n){this.data=t,this.fieldMask=e,this.fieldTransforms=n}toMutation(t,e){return null!==this.fieldMask?new jn(t,this.data,this.fieldMask,e,this.fieldTransforms):new Vn(t,this.data,e,this.fieldTransforms)}}function ya(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw O()}}class va{constructor(t,e,n,i,s,r){this.settings=t,this.databaseId=e,this.serializer=n,this.ignoreUndefinedProperties=i,void 0===s&&this.vu(),this.fieldTransforms=s||[],this.fieldMask=r||[]}get path(){return this.settings.path}get Cu(){return this.settings.Cu}Fu(t){return new va(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Mu(t){var e;const n=null===(e=this.path)||void 0===e?void 0:e.child(t),i=this.Fu({path:n,xu:!1});return i.Ou(t),i}Nu(t){var e;const n=null===(e=this.path)||void 0===e?void 0:e.child(t),i=this.Fu({path:n,xu:!1});return i.vu(),i}Lu(t){return this.Fu({path:void 0,xu:!0})}Bu(t){return Aa(t,this.settings.methodName,this.settings.ku||!1,this.path,this.settings.qu)}contains(t){return void 0!==this.fieldMask.find((e=>t.isPrefixOf(e)))||void 0!==this.fieldTransforms.find((e=>t.isPrefixOf(e.field)))}vu(){if(this.path)for(let t=0;t<this.path.length;t++)this.Ou(this.path.get(t))}Ou(t){if(0===t.length)throw this.Bu("Document fields must not be empty");if(ya(this.Cu)&&ga.test(t))throw this.Bu('Document fields cannot begin and end with "__"')}}class _a{constructor(t,e,n){this.databaseId=t,this.ignoreUndefinedProperties=e,this.serializer=n||Zs(t)}Qu(t,e,n,i=!1){return new va({Cu:t,methodName:e,qu:n,path:Z.emptyPath(),xu:!1,ku:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function ba(t){const e=t._freezeSettings(),n=Zs(t._databaseId);return new _a(t._databaseId,!!e.ignoreUndefinedProperties,n)}function wa(t,e,n,i,s,r={}){const o=t.Qu(r.merge||r.mergeFields?2:0,e,n,s);Ca("Data must be an object, but it was:",o,i);const a=xa(i,o);let c,l;if(r.merge)c=new Rt(o.fieldMask),l=o.fieldTransforms;else if(r.mergeFields){const t=[];for(const i of r.mergeFields){const s=Ia(e,i,n);if(!o.contains(s))throw new D(N.INVALID_ARGUMENT,`Field '${s}' is specified in your field mask but missing from your input data.`);Oa(t,s)||t.push(s)}c=new Rt(t),l=o.fieldTransforms.filter((t=>c.covers(t.field)))}else c=null,l=o.fieldTransforms;return new ma(new ae(a),c,l)}function Ta(t,e){if(Ea(t=(0,c.Ku)(t)))return Ca("Unsupported field value:",e,t),xa(t,e);if(t instanceof da)return function(t,e){if(!ya(e.Cu))throw e.Bu(`${t._methodName}() can only be used with update() and set()`);if(!e.path)throw e.Bu(`${t._methodName}() is not currently supported inside arrays`);const n=t._toFieldTransform(e);n&&e.fieldTransforms.push(n)}(t,e),null;if(void 0===t&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.xu&&4!==e.Cu)throw e.Bu("Nested arrays are not supported");return function(t,e){const n=[];let i=0;for(const s of t){let t=Ta(s,e.Lu(i));null==t&&(t={nullValue:"NULL_VALUE"}),n.push(t),i++}return{arrayValue:{values:n}}}(t,e)}return function(t,e){if(null===(t=(0,c.Ku)(t)))return{nullValue:"NULL_VALUE"};if("number"==typeof t)return mn(e.serializer,t);if("boolean"==typeof t)return{booleanValue:t};if("string"==typeof t)return{stringValue:t};if(t instanceof Date){const n=G.fromDate(t);return{timestampValue:wi(e.serializer,n)}}if(t instanceof G){const n=new G(t.seconds,1e3*Math.floor(t.nanoseconds/1e3));return{timestampValue:wi(e.serializer,n)}}if(t instanceof fa)return{geoPointValue:{latitude:t.latitude,longitude:t.longitude}};if(t instanceof ha)return{bytesValue:Ti(e.serializer,t._byteString)};if(t instanceof ta){const n=e.databaseId,i=t.firestore._databaseId;if(!i.isEqual(n))throw e.Bu(`Document reference is for database ${i.projectId}/${i.database} but should be for database ${n.projectId}/${n.database}`);return{referenceValue:Ci(t.firestore._databaseId||e.databaseId,t._key.path)}}if(t instanceof pa)return function(t,e){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:t.toArray().map((t=>{if("number"!=typeof t)throw e.Bu("VectorValues must only contain numeric values.");return pn(e.serializer,t)}))}}}}}}(t,e);throw e.Bu(`Unsupported field value: ${Go(t)}`)}(t,e)}function xa(t,e){const n={};return Ct(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Et(t,((t,i)=>{const s=Ta(i,e.Mu(t));null!=s&&(n[t]=s)})),{mapValue:{fields:n}}}function Ea(t){return!("object"!=typeof t||null===t||t instanceof Array||t instanceof Date||t instanceof G||t instanceof fa||t instanceof ha||t instanceof ta||t instanceof da||t instanceof pa)}function Ca(t,e,n){if(!Ea(n)||!function(t){return"object"==typeof t&&null!==t&&(Object.getPrototypeOf(t)===Object.prototype||null===Object.getPrototypeOf(t))}(n)){const i=Go(n);throw"an object"===i?e.Bu(t+" a custom object"):e.Bu(t+" "+i)}}function Ia(t,e,n){if((e=(0,c.Ku)(e))instanceof ua)return e._internalPath;if("string"==typeof e)return ka(t,e);throw Aa("Field path arguments must be of type string or ",t,!1,void 0,n)}const Sa=new RegExp("[~\\*/\\[\\]]");function ka(t,e,n){if(e.search(Sa)>=0)throw Aa(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new ua(...e.split("."))._internalPath}catch(i){throw Aa(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Aa(t,e,n,i,s){const r=i&&!i.isEmpty(),o=void 0!==s;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(r||o)&&(c+=" (found",r&&(c+=` in field ${i}`),o&&(c+=` in document ${s}`),c+=")"),new D(N.INVALID_ARGUMENT,a+t+c)}function Oa(t,e){return t.some((t=>t.isEqual(e)))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ra{constructor(t,e,n,i,s){this._firestore=t,this._userDataWriter=e,this._key=n,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new ta(this._firestore,this._converter,this._key)}exists(){return null!==this._document}data(){if(this._document){if(this._converter){const t=new Pa(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const e=this._document.data.field(Na("DocumentSnapshot.get",t));if(null!==e)return this._userDataWriter.convertValue(e)}}}class Pa extends Ra{data(){return super.data()}}function Na(t,e){return"string"==typeof e?ka(t,e):e instanceof ua?e._internalPath:e._delegate._internalPath}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Da(t){if("L"===t.limitType&&0===t.explicitOrderBy.length)throw new D(N.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Ma{convertValue(t,e="none"){switch(Wt(t)){case 0:return null;case 1:return t.booleanValue;case 2:return Lt(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,e);case 5:return t.stringValue;case 6:return this.convertBytes(Ft(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,e);case 11:return this.convertObject(t.mapValue,e);case 10:return this.convertVectorValue(t.mapValue);default:throw O()}}convertObject(t,e){return this.convertObjectMap(t.fields,e)}convertObjectMap(t,e="none"){const n={};return Et(t,((t,i)=>{n[t]=this.convertValue(i,e)})),n}convertVectorValue(t){var e,n,i;const s=null===(i=null===(n=null===(e=t.fields)||void 0===e?void 0:e.value.arrayValue)||void 0===n?void 0:n.values)||void 0===i?void 0:i.map((t=>Lt(t.doubleValue)));return new pa(s)}convertGeoPoint(t){return new fa(Lt(t.latitude),Lt(t.longitude))}convertArray(t,e){return(t.values||[]).map((t=>this.convertValue(t,e)))}convertServerTimestamp(t,e){switch(e){case"previous":const n=Vt(t);return null==n?null:this.convertValue(n,e);case"estimate":return this.convertTimestamp(jt(t));default:return null}}convertTimestamp(t){const e=Mt(t);return new G(e.seconds,e.nanos)}convertDocumentKey(t,e){const n=X.fromString(t);R(Qi(n));const i=new Bt(n.get(1),n.get(3)),s=new tt(n.popFirst(5));return i.isEqual(e)||S(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${e.projectId}/${e.database}) instead.`),s}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function La(t,e,n){let i;return i=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,i}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Fa{constructor(t,e){this.hasPendingWrites=t,this.fromCache=e}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class Ua extends Ra{constructor(t,e,n,i,s,r){super(t,e,n,i,r),this._firestore=t,this._firestoreImpl=t,this.metadata=s}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const e=new Va(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(e,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,e={}){if(this._document){const n=this._document.data.field(Na("DocumentSnapshot.get",t));if(null!==n)return this._userDataWriter.convertValue(n,e.serverTimestamps)}}}class Va extends Ua{data(t={}){return super.data(t)}}class ja{constructor(t,e,n,i){this._firestore=t,this._userDataWriter=e,this._snapshot=i,this.metadata=new Fa(i.hasPendingWrites,i.fromCache),this.query=n}get docs(){const t=[];return this.forEach((e=>t.push(e))),t}get size(){return this._snapshot.docs.size}get empty(){return 0===this.size}forEach(t,e){this._snapshot.docs.forEach((n=>{t.call(e,new Va(this._firestore,this._userDataWriter,n.key,n,new Fa(this._snapshot.mutatedKeys.has(n.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(t={}){const e=!!t.includeMetadataChanges;if(e&&this._snapshot.excludesMetadataChanges)throw new D(N.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===e||(this._cachedChanges=function(t,e){if(t._snapshot.oldDocs.isEmpty()){let e=0;return t._snapshot.docChanges.map((n=>{const i=new Va(t._firestore,t._userDataWriter,n.doc.key,n.doc,new Fa(t._snapshot.mutatedKeys.has(n.doc.key),t._snapshot.fromCache),t.query.converter);return n.doc,{type:"added",doc:i,oldIndex:-1,newIndex:e++}}))}{let n=t._snapshot.oldDocs;return t._snapshot.docChanges.filter((t=>e||3!==t.type)).map((e=>{const i=new Va(t._firestore,t._userDataWriter,e.doc.key,e.doc,new Fa(t._snapshot.mutatedKeys.has(e.doc.key),t._snapshot.fromCache),t.query.converter);let s=-1,r=-1;return 0!==e.type&&(s=n.indexOf(e.doc.key),n=n.delete(e.doc.key)),1!==e.type&&(n=n.add(e.doc),r=n.indexOf(e.doc.key)),{type:za(e.type),doc:i,oldIndex:s,newIndex:r}}))}}(this,e),this._cachedChangesIncludeMetadataChanges=e),this._cachedChanges}}function za(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return O()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Ba(t){t=Yo(t,ta);const e=Yo(t.firestore,oa);return jo(ca(e),t._key).then((n=>Ga(e,t,n)))}class $a extends Ma{constructor(t){super(),this.firestore=t}convertBytes(t){return new ha(t)}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return new ta(this.firestore,null,e)}}function Wa(t){t=Yo(t,Zo);const e=Yo(t.firestore,oa),n=ca(e),i=new $a(e);return Da(t._query),zo(n,t._query).then((n=>new ja(e,i,t,n)))}function Ha(t,e,n){t=Yo(t,ta);const i=Yo(t.firestore,oa),s=La(t.converter,e,n);return Ka(i,[wa(ba(i),"setDoc",t._key,s,null!==t.converter,n).toMutation(t._key,Rn.none())])}function qa(t,...e){var n,i,s;t=(0,c.Ku)(t);let r={includeMetadataChanges:!1,source:"default"},o=0;"object"!=typeof e[o]||ra(e[o])||(r=e[o],o++);const a={includeMetadataChanges:r.includeMetadataChanges,source:r.source};if(ra(e[o])){const t=e[o];e[o]=null===(n=t.next)||void 0===n?void 0:n.bind(t),e[o+1]=null===(i=t.error)||void 0===i?void 0:i.bind(t),e[o+2]=null===(s=t.complete)||void 0===s?void 0:s.bind(t)}let l,h,u;if(t instanceof ta)h=Yo(t.firestore,oa),u=Ve(t._key.path),l={next:n=>{e[o]&&e[o](Ga(h,t,n))},error:e[o+1],complete:e[o+2]};else{const n=Yo(t,Zo);h=Yo(n.firestore,oa),u=n._query;const i=new $a(h);l={next:t=>{e[o]&&e[o](new ja(h,i,n,t))},error:e[o+1],complete:e[o+2]},Da(t._query)}return function(t,e,n,i){const s=new Po(i),r=new Xr(e,s,n);return t.asyncQueue.enqueueAndForget((async()=>Wr(await Vo(t),r))),()=>{s.Za(),t.asyncQueue.enqueueAndForget((async()=>Hr(await Vo(t),r)))}}(ca(h),u,a,l)}function Ka(t,e){return function(t,e){const n=new M;return t.asyncQueue.enqueueAndForget((async()=>ho(await Uo(t),e,n))),n.promise}(ca(t),e)}function Ga(t,e,n){const i=n.docs.get(e._key),s=new $a(t);return new Ua(t,s,e._key,i,new Fa(n.hasPendingWrites,n.fromCache),e.converter)}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */new WeakMap;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */!function(t,e=!0){!function(t){x=t}(r.MF),(0,r.om)(new o.uA("firestore",((t,{instanceIdentifier:n,options:i})=>{const s=t.getProvider("app").getImmediate(),r=new oa(new V(t.getProvider("auth-internal")),new $(t.getProvider("app-check-internal")),function(t,e){if(!Object.prototype.hasOwnProperty.apply(t.options,["projectId"]))throw new D(N.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Bt(t.options.projectId,e)}(s,n),s);return i=Object.assign({useFetchStreams:e},i),r._setSettings(i),r}),"PUBLIC").setMultipleInstances(!0)),(0,r.KO)(w,"4.7.4",t),(0,r.KO)(w,"4.7.4","esm2017")}()},6908:function(t,e,n){"use strict";n.d(e,{N1:function(){return v}});var i=n(6118),s=n(641),r=n(953);const o={data:{type:Object,required:!0},options:{type:Object,default:()=>({})},plugins:{type:Array,default:()=>[]},datasetIdKey:{type:String,default:"label"},updateMode:{type:String,default:void 0}},a={ariaLabel:{type:String},ariaDescribedby:{type:String}},c={type:{type:String,required:!0},destroyDelay:{type:Number,default:0},...o,...a},l="2"===s.rE[0]?(t,e)=>Object.assign(t,{attrs:e}):(t,e)=>Object.assign(t,e);function h(t){return(0,r.ju)(t)?(0,r.ux)(t):t}function u(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:t;return(0,r.ju)(e)?new Proxy(t,{}):t}function d(t,e){const n=t.options;n&&e&&Object.assign(n,e)}function f(t,e){t.labels=e}function p(t,e,n){const i=[];t.datasets=e.map((e=>{const s=t.datasets.find((t=>t[n]===e[n]));return s&&e.data&&!i.includes(s)?(i.push(s),Object.assign(s,e),s):{...e}}))}function g(t,e){const n={labels:[],datasets:[]};return f(n,t.labels),p(n,t.datasets,e),n}const m=(0,s.pM)({props:c,setup(t,e){let{expose:n,slots:o}=e;const a=(0,r.KR)(null),c=(0,r.IJ)(null);n({chart:c});const l=()=>{if(!a.value)return;const{type:e,data:n,options:s,plugins:r,datasetIdKey:o}=t,l=g(n,o),h=u(l,n);c.value=new i.t1(a.value,{type:e,data:h,options:{...s},plugins:r})},m=()=>{const e=(0,r.ux)(c.value);e&&(t.destroyDelay>0?setTimeout((()=>{e.destroy(),c.value=null}),t.destroyDelay):(e.destroy(),c.value=null))},y=e=>{e.update(t.updateMode)};return(0,s.sV)(l),(0,s.hi)(m),(0,s.wB)([()=>t.options,()=>t.data],((e,n)=>{let[i,o]=e,[a,l]=n;const u=(0,r.ux)(c.value);if(!u)return;let g=!1;if(i){const t=h(i),e=h(a);t&&t!==e&&(d(u,t),g=!0)}if(o){const e=h(o.labels),n=h(l.labels),i=h(o.datasets),s=h(l.datasets);e!==n&&(f(u.config.data,e),g=!0),i&&i!==s&&(p(u.config.data,i,t.datasetIdKey),g=!0)}g&&(0,s.dY)((()=>{y(u)}))}),{deep:!0}),()=>(0,s.h)("canvas",{role:"img",ariaLabel:t.ariaLabel,ariaDescribedby:t.ariaDescribedby,ref:a},[(0,s.h)("p",{},[o.default?o.default():""])])}});function y(t,e){return i.t1.register(e),(0,s.pM)({props:o,setup(e,n){let{expose:i}=n;const o=(0,r.IJ)(null),a=t=>{o.value=t?.chart};return i({chart:o}),()=>(0,s.h)(m,l({ref:a},{type:t,...e}))}})}const v=y("line",i.ZT)},3890:function(t,e,n){"use strict";n.d(e,{Nz:function(){return Ku},qp:function(){return qu},Ge:function(){return zu}});var i=n(9928),s=n(6743),r=n(3424);function o(t,e){var n={};for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&e.indexOf(i)<0&&(n[i]=t[i]);if(null!=t&&"function"===typeof Object.getOwnPropertySymbols){var s=0;for(i=Object.getOwnPropertySymbols(t);s<i.length;s++)e.indexOf(i[s])<0&&Object.prototype.propertyIsEnumerable.call(t,i[s])&&(n[i[s]]=t[i[s]])}return n}Object.create;Object.create;"function"===typeof SuppressedError&&SuppressedError;var a=n(5125);function c(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const l=c,h=new s.FA("auth","Firebase",c()),u=new r.Vy("@firebase/auth");function d(t,...e){u.logLevel<=r.$b.WARN&&u.warn(`Auth (${i.MF}): ${t}`,...e)}function f(t,...e){u.logLevel<=r.$b.ERROR&&u.error(`Auth (${i.MF}): ${t}`,...e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function p(t,...e){throw v(t,...e)}function g(t,...e){return v(t,...e)}function m(t,e,n){const i=Object.assign(Object.assign({},l()),{[e]:n}),r=new s.FA("auth","Firebase",i);return r.create(e,{appName:t.name})}function y(t){return m(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function v(t,...e){if("string"!==typeof t){const n=e[0],i=[...e.slice(1)];return i[0]&&(i[0].appName=t.name),t._errorFactory.create(n,...i)}return h.create(t,...e)}function _(t,e,...n){if(!t)throw v(e,...n)}function b(t){const e="INTERNAL ASSERTION FAILED: "+t;throw f(e),new Error(e)}function w(t,e){t||b(e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function T(){return"http:"===x()||"https:"===x()}function x(){var t;return"undefined"!==typeof self&&(null===(t=self.location)||void 0===t?void 0:t.protocol)||null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function E(){return!("undefined"!==typeof navigator&&navigator&&"onLine"in navigator&&"boolean"===typeof navigator.onLine&&(T()||(0,s.sr)()||"connection"in navigator))||navigator.onLine}function C(){if("undefined"===typeof navigator)return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class I{constructor(t,e){this.shortDelay=t,this.longDelay=e,w(e>t,"Short delay should be less than long delay!"),this.isMobile=(0,s.jZ)()||(0,s.lV)()}get(){return E()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function S(t,e){w(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class k{static initialize(t,e,n){this.fetchImpl=t,e&&(this.headersImpl=e),n&&(this.responseImpl=n)}static fetch(){return this.fetchImpl?this.fetchImpl:"undefined"!==typeof self&&"fetch"in self?self.fetch:"undefined"!==typeof globalThis&&globalThis.fetch?globalThis.fetch:"undefined"!==typeof fetch?fetch:void b("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){return this.headersImpl?this.headersImpl:"undefined"!==typeof self&&"Headers"in self?self.Headers:"undefined"!==typeof globalThis&&globalThis.Headers?globalThis.Headers:"undefined"!==typeof Headers?Headers:void b("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){return this.responseImpl?this.responseImpl:"undefined"!==typeof self&&"Response"in self?self.Response:"undefined"!==typeof globalThis&&globalThis.Response?globalThis.Response:"undefined"!==typeof Response?Response:void b("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const A={["CREDENTIAL_MISMATCH"]:"custom-token-mismatch",["MISSING_CUSTOM_TOKEN"]:"internal-error",["INVALID_IDENTIFIER"]:"invalid-email",["MISSING_CONTINUE_URI"]:"internal-error",["INVALID_PASSWORD"]:"wrong-password",["MISSING_PASSWORD"]:"missing-password",["INVALID_LOGIN_CREDENTIALS"]:"invalid-credential",["EMAIL_EXISTS"]:"email-already-in-use",["PASSWORD_LOGIN_DISABLED"]:"operation-not-allowed",["INVALID_IDP_RESPONSE"]:"invalid-credential",["INVALID_PENDING_TOKEN"]:"invalid-credential",["FEDERATED_USER_ID_ALREADY_LINKED"]:"credential-already-in-use",["MISSING_REQ_TYPE"]:"internal-error",["EMAIL_NOT_FOUND"]:"user-not-found",["RESET_PASSWORD_EXCEED_LIMIT"]:"too-many-requests",["EXPIRED_OOB_CODE"]:"expired-action-code",["INVALID_OOB_CODE"]:"invalid-action-code",["MISSING_OOB_CODE"]:"internal-error",["CREDENTIAL_TOO_OLD_LOGIN_AGAIN"]:"requires-recent-login",["INVALID_ID_TOKEN"]:"invalid-user-token",["TOKEN_EXPIRED"]:"user-token-expired",["USER_NOT_FOUND"]:"user-token-expired",["TOO_MANY_ATTEMPTS_TRY_LATER"]:"too-many-requests",["PASSWORD_DOES_NOT_MEET_REQUIREMENTS"]:"password-does-not-meet-requirements",["INVALID_CODE"]:"invalid-verification-code",["INVALID_SESSION_INFO"]:"invalid-verification-id",["INVALID_TEMPORARY_PROOF"]:"invalid-credential",["MISSING_SESSION_INFO"]:"missing-verification-id",["SESSION_EXPIRED"]:"code-expired",["MISSING_ANDROID_PACKAGE_NAME"]:"missing-android-pkg-name",["UNAUTHORIZED_DOMAIN"]:"unauthorized-continue-uri",["INVALID_OAUTH_CLIENT_ID"]:"invalid-oauth-client-id",["ADMIN_ONLY_OPERATION"]:"admin-restricted-operation",["INVALID_MFA_PENDING_CREDENTIAL"]:"invalid-multi-factor-session",["MFA_ENROLLMENT_NOT_FOUND"]:"multi-factor-info-not-found",["MISSING_MFA_ENROLLMENT_ID"]:"missing-multi-factor-info",["MISSING_MFA_PENDING_CREDENTIAL"]:"missing-multi-factor-session",["SECOND_FACTOR_EXISTS"]:"second-factor-already-in-use",["SECOND_FACTOR_LIMIT_EXCEEDED"]:"maximum-second-factor-count-exceeded",["BLOCKING_FUNCTION_ERROR_RESPONSE"]:"internal-error",["RECAPTCHA_NOT_ENABLED"]:"recaptcha-not-enabled",["MISSING_RECAPTCHA_TOKEN"]:"missing-recaptcha-token",["INVALID_RECAPTCHA_TOKEN"]:"invalid-recaptcha-token",["INVALID_RECAPTCHA_ACTION"]:"invalid-recaptcha-action",["MISSING_CLIENT_TYPE"]:"missing-client-type",["MISSING_RECAPTCHA_VERSION"]:"missing-recaptcha-version",["INVALID_RECAPTCHA_VERSION"]:"invalid-recaptcha-version",["INVALID_REQ_TYPE"]:"invalid-req-type"},O=new I(3e4,6e4);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function R(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function P(t,e,n,i,r={}){return N(t,r,(async()=>{let r={},o={};i&&("GET"===e?o=i:r={body:JSON.stringify(i)});const a=(0,s.Am)(Object.assign({key:t.config.apiKey},o)).slice(1),c=await t._getAdditionalHeaders();c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode);const l=Object.assign({method:e,headers:c},r);return(0,s.c1)()||(l.referrerPolicy="no-referrer"),k.fetch()(M(t,t.config.apiHost,n,a),l)}))}async function N(t,e,n){t._canInitEmulator=!1;const i=Object.assign(Object.assign({},A),e);try{const e=new F(t),s=await Promise.race([n(),e.promise]);e.clearNetworkTimeout();const r=await s.json();if("needConfirmation"in r)throw U(t,"account-exists-with-different-credential",r);if(s.ok&&!("errorMessage"in r))return r;{const e=s.ok?r.errorMessage:r.error.message,[n,o]=e.split(" : ");if("FEDERATED_USER_ID_ALREADY_LINKED"===n)throw U(t,"credential-already-in-use",r);if("EMAIL_EXISTS"===n)throw U(t,"email-already-in-use",r);if("USER_DISABLED"===n)throw U(t,"user-disabled",r);const a=i[n]||n.toLowerCase().replace(/[_\s]+/g,"-");if(o)throw m(t,a,o);p(t,a)}}catch(r){if(r instanceof s.g)throw r;p(t,"network-request-failed",{message:String(r)})}}async function D(t,e,n,i,s={}){const r=await P(t,e,n,i,s);return"mfaPendingCredential"in r&&p(t,"multi-factor-auth-required",{_serverResponse:r}),r}function M(t,e,n,i){const s=`${e}${n}?${i}`;return t.config.emulator?S(t.config,s):`${t.config.apiScheme}://${s}`}function L(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class F{constructor(t){this.auth=t,this.timer=null,this.promise=new Promise(((t,e)=>{this.timer=setTimeout((()=>e(g(this.auth,"network-request-failed"))),O.get())}))}clearNetworkTimeout(){clearTimeout(this.timer)}}function U(t,e,n){const i={appName:t.name};n.email&&(i.email=n.email),n.phoneNumber&&(i.phoneNumber=n.phoneNumber);const s=g(t,e,i);return s.customData._tokenResponse=n,s}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function V(t){return void 0!==t&&void 0!==t.enterprise}class j{constructor(t){if(this.siteKey="",this.recaptchaEnforcementState=[],void 0===t.recaptchaKey)throw new Error("recaptchaKey undefined");this.siteKey=t.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=t.recaptchaEnforcementState}getProviderEnforcementState(t){if(!this.recaptchaEnforcementState||0===this.recaptchaEnforcementState.length)return null;for(const e of this.recaptchaEnforcementState)if(e.provider&&e.provider===t)return L(e.enforcementState);return null}isProviderEnabled(t){return"ENFORCE"===this.getProviderEnforcementState(t)||"AUDIT"===this.getProviderEnforcementState(t)}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function z(t,e){return P(t,"GET","/v2/recaptchaConfig",R(t,e))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function B(t,e){return P(t,"POST","/v1/accounts:delete",e)}async function $(t,e){return P(t,"POST","/v1/accounts:lookup",e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function W(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch(e){}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function H(t,e=!1){const n=(0,s.Ku)(t),i=await n.getIdToken(e),r=K(i);_(r&&r.exp&&r.auth_time&&r.iat,n.auth,"internal-error");const o="object"===typeof r.firebase?r.firebase:void 0,a=null===o||void 0===o?void 0:o["sign_in_provider"];return{claims:r,token:i,authTime:W(q(r.auth_time)),issuedAtTime:W(q(r.iat)),expirationTime:W(q(r.exp)),signInProvider:a||null,signInSecondFactor:(null===o||void 0===o?void 0:o["sign_in_second_factor"])||null}}function q(t){return 1e3*Number(t)}function K(t){const[e,n,i]=t.split(".");if(void 0===e||void 0===n||void 0===i)return f("JWT malformed, contained fewer than 3 sections"),null;try{const t=(0,s.u)(n);return t?JSON.parse(t):(f("Failed to decode base64 JWT payload"),null)}catch(r){return f("Caught error parsing JWT payload as JSON",null===r||void 0===r?void 0:r.toString()),null}}function G(t){const e=K(t);return _(e,"internal-error"),_("undefined"!==typeof e.exp,"internal-error"),_("undefined"!==typeof e.iat,"internal-error"),Number(e.exp)-Number(e.iat)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Y(t,e,n=!1){if(n)return e;try{return await e}catch(i){throw i instanceof s.g&&Q(i)&&t.auth.currentUser===t&&await t.auth.signOut(),i}}function Q({code:t}){return"auth/user-disabled"===t||"auth/user-token-expired"===t}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X{constructor(t){this.user=t,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}getInterval(t){var e;if(t){const t=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),t}{this.errorBackoff=3e4;const t=null!==(e=this.user.stsTokenManager.expirationTime)&&void 0!==e?e:0,n=t-Date.now()-3e5;return Math.max(0,n)}}schedule(t=!1){if(!this.isRunning)return;const e=this.getInterval(t);this.timerId=setTimeout((async()=>{await this.iteration()}),e)}async iteration(){try{await this.user.getIdToken(!0)}catch(t){return void("auth/network-request-failed"===(null===t||void 0===t?void 0:t.code)&&this.schedule(!0))}this.schedule()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J{constructor(t,e){this.createdAt=t,this.lastLoginAt=e,this._initializeTime()}_initializeTime(){this.lastSignInTime=W(this.lastLoginAt),this.creationTime=W(this.createdAt)}_copy(t){this.createdAt=t.createdAt,this.lastLoginAt=t.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Z(t){var e;const n=t.auth,i=await t.getIdToken(),s=await Y(t,$(n,{idToken:i}));_(null===s||void 0===s?void 0:s.users.length,n,"internal-error");const r=s.users[0];t._notifyReloadListener(r);const o=(null===(e=r.providerUserInfo)||void 0===e?void 0:e.length)?nt(r.providerUserInfo):[],a=et(t.providerData,o),c=t.isAnonymous,l=!(t.email&&r.passwordHash)&&!(null===a||void 0===a?void 0:a.length),h=!!c&&l,u={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:a,metadata:new J(r.createdAt,r.lastLoginAt),isAnonymous:h};Object.assign(t,u)}async function tt(t){const e=(0,s.Ku)(t);await Z(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function et(t,e){const n=t.filter((t=>!e.some((e=>e.providerId===t.providerId))));return[...n,...e]}function nt(t){return t.map((t=>{var{providerId:e}=t,n=o(t,["providerId"]);return{providerId:e,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}}))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function it(t,e){const n=await N(t,{},(async()=>{const n=(0,s.Am)({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:r}=t.config,o=M(t,i,"/v1/token",`key=${r}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",k.fetch()(o,{method:"POST",headers:a,body:n})}));return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function st(t,e){return P(t,"POST","/v2/accounts:revokeToken",R(t,e))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rt{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(t){_(t.idToken,"internal-error"),_("undefined"!==typeof t.idToken,"internal-error"),_("undefined"!==typeof t.refreshToken,"internal-error");const e="expiresIn"in t&&"undefined"!==typeof t.expiresIn?Number(t.expiresIn):G(t.idToken);this.updateTokensAndExpiration(t.idToken,t.refreshToken,e)}updateFromIdToken(t){_(0!==t.length,"internal-error");const e=G(t);this.updateTokensAndExpiration(t,null,e)}async getToken(t,e=!1){return e||!this.accessToken||this.isExpired?(_(this.refreshToken,t,"user-token-expired"),this.refreshToken?(await this.refresh(t,this.refreshToken),this.accessToken):null):this.accessToken}clearRefreshToken(){this.refreshToken=null}async refresh(t,e){const{accessToken:n,refreshToken:i,expiresIn:s}=await it(t,e);this.updateTokensAndExpiration(n,i,Number(s))}updateTokensAndExpiration(t,e,n){this.refreshToken=e||null,this.accessToken=t||null,this.expirationTime=Date.now()+1e3*n}static fromJSON(t,e){const{refreshToken:n,accessToken:i,expirationTime:s}=e,r=new rt;return n&&(_("string"===typeof n,"internal-error",{appName:t}),r.refreshToken=n),i&&(_("string"===typeof i,"internal-error",{appName:t}),r.accessToken=i),s&&(_("number"===typeof s,"internal-error",{appName:t}),r.expirationTime=s),r}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(t){this.accessToken=t.accessToken,this.refreshToken=t.refreshToken,this.expirationTime=t.expirationTime}_clone(){return Object.assign(new rt,this.toJSON())}_performRefresh(){return b("not implemented")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ot(t,e){_("string"===typeof t||"undefined"===typeof t,"internal-error",{appName:e})}class at{constructor(t){var{uid:e,auth:n,stsTokenManager:i}=t,s=o(t,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new X(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=n,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new J(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(t){const e=await Y(this,this.stsTokenManager.getToken(this.auth,t));return _(e,this.auth,"internal-error"),this.accessToken!==e&&(this.accessToken=e,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),e}getIdTokenResult(t){return H(this,t)}reload(){return tt(this)}_assign(t){this!==t&&(_(this.uid===t.uid,this.auth,"internal-error"),this.displayName=t.displayName,this.photoURL=t.photoURL,this.email=t.email,this.emailVerified=t.emailVerified,this.phoneNumber=t.phoneNumber,this.isAnonymous=t.isAnonymous,this.tenantId=t.tenantId,this.providerData=t.providerData.map((t=>Object.assign({},t))),this.metadata._copy(t.metadata),this.stsTokenManager._assign(t.stsTokenManager))}_clone(t){const e=new at(Object.assign(Object.assign({},this),{auth:t,stsTokenManager:this.stsTokenManager._clone()}));return e.metadata._copy(this.metadata),e}_onReload(t){_(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=t,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(t){this.reloadListener?this.reloadListener(t):this.reloadUserInfo=t}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(t,e=!1){let n=!1;t.idToken&&t.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(t),n=!0),e&&await Z(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){if((0,i.xZ)(this.auth.app))return Promise.reject(y(this.auth));const t=await this.getIdToken();return await Y(this,B(this.auth,{idToken:t})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map((t=>Object.assign({},t))),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(t,e){var n,i,s,r,o,a,c,l;const h=null!==(n=e.displayName)&&void 0!==n?n:void 0,u=null!==(i=e.email)&&void 0!==i?i:void 0,d=null!==(s=e.phoneNumber)&&void 0!==s?s:void 0,f=null!==(r=e.photoURL)&&void 0!==r?r:void 0,p=null!==(o=e.tenantId)&&void 0!==o?o:void 0,g=null!==(a=e._redirectEventId)&&void 0!==a?a:void 0,m=null!==(c=e.createdAt)&&void 0!==c?c:void 0,y=null!==(l=e.lastLoginAt)&&void 0!==l?l:void 0,{uid:v,emailVerified:b,isAnonymous:w,providerData:T,stsTokenManager:x}=e;_(v&&x,t,"internal-error");const E=rt.fromJSON(this.name,x);_("string"===typeof v,t,"internal-error"),ot(h,t.name),ot(u,t.name),_("boolean"===typeof b,t,"internal-error"),_("boolean"===typeof w,t,"internal-error"),ot(d,t.name),ot(f,t.name),ot(p,t.name),ot(g,t.name),ot(m,t.name),ot(y,t.name);const C=new at({uid:v,auth:t,email:u,emailVerified:b,displayName:h,isAnonymous:w,photoURL:f,phoneNumber:d,tenantId:p,stsTokenManager:E,createdAt:m,lastLoginAt:y});return T&&Array.isArray(T)&&(C.providerData=T.map((t=>Object.assign({},t)))),g&&(C._redirectEventId=g),C}static async _fromIdTokenResponse(t,e,n=!1){const i=new rt;i.updateFromServerResponse(e);const s=new at({uid:e.localId,auth:t,stsTokenManager:i,isAnonymous:n});return await Z(s),s}static async _fromGetAccountInfoResponse(t,e,n){const i=e.users[0];_(void 0!==i.localId,"internal-error");const s=void 0!==i.providerUserInfo?nt(i.providerUserInfo):[],r=!(i.email&&i.passwordHash)&&!(null===s||void 0===s?void 0:s.length),o=new rt;o.updateFromIdToken(n);const a=new at({uid:i.localId,auth:t,stsTokenManager:o,isAnonymous:r}),c={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new J(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(null===s||void 0===s?void 0:s.length)};return Object.assign(a,c),a}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ct=new Map;function lt(t){w(t instanceof Function,"Expected a class definition");let e=ct.get(t);return e?(w(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,ct.set(t,e),e)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ht{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(t,e){this.storage[t]=e}async _get(t){const e=this.storage[t];return void 0===e?null:e}async _remove(t){delete this.storage[t]}_addListener(t,e){}_removeListener(t,e){}}ht.type="NONE";const ut=ht;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dt(t,e,n){return`firebase:${t}:${e}:${n}`}class ft{constructor(t,e,n){this.persistence=t,this.auth=e,this.userKey=n;const{config:i,name:s}=this.auth;this.fullUserKey=dt(this.userKey,i.apiKey,s),this.fullPersistenceKey=dt("persistence",i.apiKey,s),this.boundEventHandler=e._onStorageEvent.bind(e),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(t){return this.persistence._set(this.fullUserKey,t.toJSON())}async getCurrentUser(){const t=await this.persistence._get(this.fullUserKey);return t?at._fromJSON(this.auth,t):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(t){if(this.persistence===t)return;const e=await this.getCurrentUser();return await this.removeCurrentUser(),this.persistence=t,e?this.setCurrentUser(e):void 0}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(t,e,n="authUser"){if(!e.length)return new ft(lt(ut),t,n);const i=(await Promise.all(e.map((async t=>{if(await t._isAvailable())return t})))).filter((t=>t));let s=i[0]||lt(ut);const r=dt(n,t.config.apiKey,t.name);let o=null;for(const l of e)try{const e=await l._get(r);if(e){const n=at._fromJSON(t,e);l!==s&&(o=n),s=l;break}}catch(c){}const a=i.filter((t=>t._shouldAllowMigration));return s._shouldAllowMigration&&a.length?(s=a[0],o&&await s._set(r,o.toJSON()),await Promise.all(e.map((async t=>{if(t!==s)try{await t._remove(r)}catch(c){}}))),new ft(s,t,n)):new ft(s,t,n)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pt(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(vt(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(gt(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(bt(e))return"Blackberry";if(wt(e))return"Webos";if(mt(e))return"Safari";if((e.includes("chrome/")||yt(e))&&!e.includes("edge/"))return"Chrome";if(_t(e))return"Android";{const e=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,n=t.match(e);if(2===(null===n||void 0===n?void 0:n.length))return n[1]}return"Other"}function gt(t=(0,s.ZQ)()){return/firefox\//i.test(t)}function mt(t=(0,s.ZQ)()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function yt(t=(0,s.ZQ)()){return/crios\//i.test(t)}function vt(t=(0,s.ZQ)()){return/iemobile/i.test(t)}function _t(t=(0,s.ZQ)()){return/android/i.test(t)}function bt(t=(0,s.ZQ)()){return/blackberry/i.test(t)}function wt(t=(0,s.ZQ)()){return/webos/i.test(t)}function Tt(t=(0,s.ZQ)()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function xt(){return(0,s.lT)()&&10===document.documentMode}function Et(t=(0,s.ZQ)()){return Tt(t)||_t(t)||wt(t)||bt(t)||/windows phone/i.test(t)||vt(t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ct(t,e=[]){let n;switch(t){case"Browser":n=pt((0,s.ZQ)());break;case"Worker":n=`${pt((0,s.ZQ)())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${i.MF}/${r}`}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class It{constructor(t){this.auth=t,this.queue=[]}pushCallback(t,e){const n=e=>new Promise(((n,i)=>{try{const i=t(e);n(i)}catch(s){i(s)}}));n.onAbort=e,this.queue.push(n);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(t){if(this.auth.currentUser===t)return;const e=[];try{for(const n of this.queue)await n(t),n.onAbort&&e.push(n.onAbort)}catch(n){e.reverse();for(const t of e)try{t()}catch(i){}throw this.auth._errorFactory.create("login-blocked",{originalMessage:null===n||void 0===n?void 0:n.message})}}}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function St(t,e={}){return P(t,"GET","/v2/passwordPolicy",R(t,e))}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kt=6;class At{constructor(t){var e,n,i,s;const r=t.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=null!==(e=r.minPasswordLength)&&void 0!==e?e:kt,r.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=r.maxPasswordLength),void 0!==r.containsLowercaseCharacter&&(this.customStrengthOptions.containsLowercaseLetter=r.containsLowercaseCharacter),void 0!==r.containsUppercaseCharacter&&(this.customStrengthOptions.containsUppercaseLetter=r.containsUppercaseCharacter),void 0!==r.containsNumericCharacter&&(this.customStrengthOptions.containsNumericCharacter=r.containsNumericCharacter),void 0!==r.containsNonAlphanumericCharacter&&(this.customStrengthOptions.containsNonAlphanumericCharacter=r.containsNonAlphanumericCharacter),this.enforcementState=t.enforcementState,"ENFORCEMENT_STATE_UNSPECIFIED"===this.enforcementState&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=null!==(i=null===(n=t.allowedNonAlphanumericCharacters)||void 0===n?void 0:n.join(""))&&void 0!==i?i:"",this.forceUpgradeOnSignin=null!==(s=t.forceUpgradeOnSignin)&&void 0!==s&&s,this.schemaVersion=t.schemaVersion}validatePassword(t){var e,n,i,s,r,o;const a={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(t,a),this.validatePasswordCharacterOptions(t,a),a.isValid&&(a.isValid=null===(e=a.meetsMinPasswordLength)||void 0===e||e),a.isValid&&(a.isValid=null===(n=a.meetsMaxPasswordLength)||void 0===n||n),a.isValid&&(a.isValid=null===(i=a.containsLowercaseLetter)||void 0===i||i),a.isValid&&(a.isValid=null===(s=a.containsUppercaseLetter)||void 0===s||s),a.isValid&&(a.isValid=null===(r=a.containsNumericCharacter)||void 0===r||r),a.isValid&&(a.isValid=null===(o=a.containsNonAlphanumericCharacter)||void 0===o||o),a}validatePasswordLengthOptions(t,e){const n=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;n&&(e.meetsMinPasswordLength=t.length>=n),i&&(e.meetsMaxPasswordLength=t.length<=i)}validatePasswordCharacterOptions(t,e){let n;this.updatePasswordCharacterOptionsStatuses(e,!1,!1,!1,!1);for(let i=0;i<t.length;i++)n=t.charAt(i),this.updatePasswordCharacterOptionsStatuses(e,n>="a"&&n<="z",n>="A"&&n<="Z",n>="0"&&n<="9",this.allowedNonAlphanumericCharacters.includes(n))}updatePasswordCharacterOptionsStatuses(t,e,n,i,s){this.customStrengthOptions.containsLowercaseLetter&&(t.containsLowercaseLetter||(t.containsLowercaseLetter=e)),this.customStrengthOptions.containsUppercaseLetter&&(t.containsUppercaseLetter||(t.containsUppercaseLetter=n)),this.customStrengthOptions.containsNumericCharacter&&(t.containsNumericCharacter||(t.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(t.containsNonAlphanumericCharacter||(t.containsNonAlphanumericCharacter=s))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ot{constructor(t,e,n,i){this.app=t,this.heartbeatServiceProvider=e,this.appCheckServiceProvider=n,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Pt(this),this.idTokenSubscription=new Pt(this),this.beforeStateQueue=new It(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=h,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=t.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(t,e){return e&&(this._popupRedirectResolver=lt(e)),this._initializationPromise=this.queue((async()=>{var n,i;if(!this._deleted&&(this.persistenceManager=await ft.create(this,t),!this._deleted)){if(null===(n=this._popupRedirectResolver)||void 0===n?void 0:n._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch(s){}await this.initializeCurrentUser(e),this.lastNotifiedUid=(null===(i=this.currentUser)||void 0===i?void 0:i.uid)||null,this._deleted||(this._isInitialized=!0)}})),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const t=await this.assertedPersistence.getCurrentUser();return this.currentUser||t?this.currentUser&&t&&this.currentUser.uid===t.uid?(this._currentUser._assign(t),void await this.currentUser.getIdToken()):void await this._updateCurrentUser(t,!0):void 0}async initializeCurrentUserFromIdToken(t){try{const e=await $(this,{idToken:t}),n=await at._fromGetAccountInfoResponse(this,e,t);await this.directlySetCurrentUser(n)}catch(e){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",e),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(t){var e;if((0,i.xZ)(this.app)){const t=this.app.settings.authIdToken;return t?new Promise((e=>{setTimeout((()=>this.initializeCurrentUserFromIdToken(t).then(e,e)))})):this.directlySetCurrentUser(null)}const n=await this.assertedPersistence.getCurrentUser();let s=n,r=!1;if(t&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const n=null===(e=this.redirectUser)||void 0===e?void 0:e._redirectEventId,i=null===s||void 0===s?void 0:s._redirectEventId,o=await this.tryRedirectSignIn(t);n&&n!==i||!(null===o||void 0===o?void 0:o.user)||(s=o.user,r=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(r)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=n,this._popupRedirectResolver._overrideRedirectResult(this,(()=>Promise.reject(o)))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return _(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(t){let e=null;try{e=await this._popupRedirectResolver._completeRedirectFn(this,t,!0)}catch(n){await this._setRedirectUser(null)}return e}async reloadAndSetCurrentUserOrClear(t){try{await Z(t)}catch(e){if("auth/network-request-failed"!==(null===e||void 0===e?void 0:e.code))return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(t)}useDeviceLanguage(){this.languageCode=C()}async _delete(){this._deleted=!0}async updateCurrentUser(t){if((0,i.xZ)(this.app))return Promise.reject(y(this));const e=t?(0,s.Ku)(t):null;return e&&_(e.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(e&&e._clone(this))}async _updateCurrentUser(t,e=!1){if(!this._deleted)return t&&_(this.tenantId===t.tenantId,this,"tenant-id-mismatch"),e||await this.beforeStateQueue.runMiddleware(t),this.queue((async()=>{await this.directlySetCurrentUser(t),this.notifyAuthListeners()}))}async signOut(){return(0,i.xZ)(this.app)?Promise.reject(y(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(t){return(0,i.xZ)(this.app)?Promise.reject(y(this)):this.queue((async()=>{await this.assertedPersistence.setPersistence(lt(t))}))}_getRecaptchaConfig(){return null==this.tenantId?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(t){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const e=this._getPasswordPolicyInternal();return e.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):e.validatePassword(t)}_getPasswordPolicyInternal(){return null===this.tenantId?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const t=await St(this),e=new At(t);null===this.tenantId?this._projectPasswordPolicy=e:this._tenantPasswordPolicies[this.tenantId]=e}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(t){this._errorFactory=new s.FA("auth","Firebase",t())}onAuthStateChanged(t,e,n){return this.registerStateListener(this.authStateSubscription,t,e,n)}beforeAuthStateChanged(t,e){return this.beforeStateQueue.pushCallback(t,e)}onIdTokenChanged(t,e,n){return this.registerStateListener(this.idTokenSubscription,t,e,n)}authStateReady(){return new Promise(((t,e)=>{if(this.currentUser)t();else{const n=this.onAuthStateChanged((()=>{n(),t()}),e)}}))}async revokeAccessToken(t){if(this.currentUser){const e=await this.currentUser.getIdToken(),n={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:t,idToken:e};null!=this.tenantId&&(n.tenantId=this.tenantId),await st(this,n)}}toJSON(){var t;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:null===(t=this._currentUser)||void 0===t?void 0:t.toJSON()}}async _setRedirectUser(t,e){const n=await this.getOrInitRedirectPersistenceManager(e);return null===t?n.removeCurrentUser():n.setCurrentUser(t)}async getOrInitRedirectPersistenceManager(t){if(!this.redirectPersistenceManager){const e=t&&lt(t)||this._popupRedirectResolver;_(e,this,"argument-error"),this.redirectPersistenceManager=await ft.create(this,[lt(e._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(t){var e,n;return this._isInitialized&&await this.queue((async()=>{})),(null===(e=this._currentUser)||void 0===e?void 0:e._redirectEventId)===t?this._currentUser:(null===(n=this.redirectUser)||void 0===n?void 0:n._redirectEventId)===t?this.redirectUser:null}async _persistUserIfCurrent(t){if(t===this.currentUser)return this.queue((async()=>this.directlySetCurrentUser(t)))}_notifyListenersIfCurrent(t){t===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t,e;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const n=null!==(e=null===(t=this.currentUser)||void 0===t?void 0:t.uid)&&void 0!==e?e:null;this.lastNotifiedUid!==n&&(this.lastNotifiedUid=n,this.authStateSubscription.next(this.currentUser))}registerStateListener(t,e,n,i){if(this._deleted)return()=>{};const s="function"===typeof e?e:e.next.bind(e);let r=!1;const o=this._isInitialized?Promise.resolve():this._initializationPromise;if(_(o,this,"internal-error"),o.then((()=>{r||s(this.currentUser)})),"function"===typeof e){const s=t.addObserver(e,n,i);return()=>{r=!0,s()}}{const n=t.addObserver(e);return()=>{r=!0,n()}}}async directlySetCurrentUser(t){this.currentUser&&this.currentUser!==t&&this._currentUser._stopProactiveRefresh(),t&&this.isProactiveRefreshEnabled&&t._startProactiveRefresh(),this.currentUser=t,t?await this.assertedPersistence.setCurrentUser(t):await this.assertedPersistence.removeCurrentUser()}queue(t){return this.operations=this.operations.then(t,t),this.operations}get assertedPersistence(){return _(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(t){t&&!this.frameworks.includes(t)&&(this.frameworks.push(t),this.frameworks.sort(),this.clientVersion=Ct(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var t;const e={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const n=await(null===(t=this.heartbeatServiceProvider.getImmediate({optional:!0}))||void 0===t?void 0:t.getHeartbeatsHeader());n&&(e["X-Firebase-Client"]=n);const i=await this._getAppCheckToken();return i&&(e["X-Firebase-AppCheck"]=i),e}async _getAppCheckToken(){var t;const e=await(null===(t=this.appCheckServiceProvider.getImmediate({optional:!0}))||void 0===t?void 0:t.getToken());return(null===e||void 0===e?void 0:e.error)&&d(`Error while retrieving App Check token: ${e.error}`),null===e||void 0===e?void 0:e.token}}function Rt(t){return(0,s.Ku)(t)}class Pt{constructor(t){this.auth=t,this.observer=null,this.addObserver=(0,s.tD)((t=>this.observer=t))}get next(){return _(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Nt={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function Dt(t){Nt=t}function Mt(t){return Nt.loadJS(t)}function Lt(){return Nt.recaptchaEnterpriseScript}function Ft(t){return`__${t}${Math.floor(1e6*Math.random())}`}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ut{constructor(){this.enterprise=new Vt}ready(t){t()}execute(t,e){return Promise.resolve("token")}render(t,e){return""}}class Vt{ready(t){t()}execute(t,e){return Promise.resolve("token")}render(t,e){return""}}const jt="recaptcha-enterprise",zt="NO_RECAPTCHA";class Bt{constructor(t){this.type=jt,this.auth=Rt(t)}async verify(t="verify",e=!1){async function n(t){if(!e){if(null==t.tenantId&&null!=t._agentRecaptchaConfig)return t._agentRecaptchaConfig.siteKey;if(null!=t.tenantId&&void 0!==t._tenantRecaptchaConfigs[t.tenantId])return t._tenantRecaptchaConfigs[t.tenantId].siteKey}return new Promise((async(e,n)=>{z(t,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then((i=>{if(void 0!==i.recaptchaKey){const n=new j(i);return null==t.tenantId?t._agentRecaptchaConfig=n:t._tenantRecaptchaConfigs[t.tenantId]=n,e(n.siteKey)}n(new Error("recaptcha Enterprise site key undefined"))})).catch((t=>{n(t)}))}))}function i(e,n,i){const s=window.grecaptcha;V(s)?s.enterprise.ready((()=>{s.enterprise.execute(e,{action:t}).then((t=>{n(t)})).catch((()=>{n(zt)}))})):i(Error("No reCAPTCHA enterprise script loaded."))}if(this.auth.settings.appVerificationDisabledForTesting){const t=new Ut;return t.execute("siteKey",{action:"verify"})}return new Promise(((t,s)=>{n(this.auth).then((n=>{if(!e&&V(window.grecaptcha))i(n,t,s);else{if("undefined"===typeof window)return void s(new Error("RecaptchaVerifier is only supported in browser"));let e=Lt();0!==e.length&&(e+=n),Mt(e).then((()=>{i(n,t,s)})).catch((t=>{s(t)}))}})).catch((t=>{s(t)}))}))}}async function $t(t,e,n,i=!1,s=!1){const r=new Bt(t);let o;if(s)o=zt;else try{o=await r.verify(n)}catch(fs){o=await r.verify(n,!0)}const a=Object.assign({},e);if("mfaSmsEnrollment"===n||"mfaSmsSignIn"===n){if("phoneEnrollmentInfo"in a){const t=a.phoneEnrollmentInfo.phoneNumber,e=a.phoneEnrollmentInfo.recaptchaToken;Object.assign(a,{phoneEnrollmentInfo:{phoneNumber:t,recaptchaToken:e,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in a){const t=a.phoneSignInInfo.recaptchaToken;Object.assign(a,{phoneSignInInfo:{recaptchaToken:t,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return a}return i?Object.assign(a,{captchaResp:o}):Object.assign(a,{captchaResponse:o}),Object.assign(a,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(a,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),a}async function Wt(t,e,n,i,s){var r,o;if("EMAIL_PASSWORD_PROVIDER"===s){if(null===(r=t._getRecaptchaConfig())||void 0===r?void 0:r.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const s=await $t(t,e,n,"getOobCode"===n);return i(t,s)}return i(t,e).catch((async s=>{if("auth/missing-recaptcha-token"===s.code){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const s=await $t(t,e,n,"getOobCode"===n);return i(t,s)}return Promise.reject(s)}))}if("PHONE_PROVIDER"===s){if(null===(o=t._getRecaptchaConfig())||void 0===o?void 0:o.isProviderEnabled("PHONE_PROVIDER")){const s=await $t(t,e,n);return i(t,s).catch((async s=>{var r;if("AUDIT"===(null===(r=t._getRecaptchaConfig())||void 0===r?void 0:r.getProviderEnforcementState("PHONE_PROVIDER"))&&("auth/missing-recaptcha-token"===s.code||"auth/invalid-app-credential"===s.code)){console.log(`Failed to verify with reCAPTCHA Enterprise. Automatically triggering the reCAPTCHA v2 flow to complete the ${n} flow.`);const s=await $t(t,e,n,!1,!0);return i(t,s)}return Promise.reject(s)}))}{const s=await $t(t,e,n,!1,!0);return i(t,s)}}return Promise.reject(s+" provider is not supported.")}async function Ht(t){const e=Rt(t),n=await z(e,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),i=new j(n);if(null==e.tenantId?e._agentRecaptchaConfig=i:e._tenantRecaptchaConfigs[e.tenantId]=i,i.isAnyProviderEnabled()){const t=new Bt(e);t.verify()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qt(t,e){const n=(null===e||void 0===e?void 0:e.persistence)||[],i=(Array.isArray(n)?n:[n]).map(lt);(null===e||void 0===e?void 0:e.errorMap)&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(i,null===e||void 0===e?void 0:e.popupRedirectResolver)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Kt{constructor(t,e){this.providerId=t,this.signInMethod=e}toJSON(){return b("not implemented")}_getIdTokenResponse(t){return b("not implemented")}_linkToIdToken(t,e){return b("not implemented")}_getReauthenticationResolver(t){return b("not implemented")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Gt(t,e){return P(t,"POST","/v1/accounts:signUp",e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function Yt(t,e){return D(t,"POST","/v1/accounts:signInWithPassword",R(t,e))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function Qt(t,e){return D(t,"POST","/v1/accounts:signInWithEmailLink",R(t,e))}async function Xt(t,e){return D(t,"POST","/v1/accounts:signInWithEmailLink",R(t,e))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jt extends Kt{constructor(t,e,n,i=null){super("password",n),this._email=t,this._password=e,this._tenantId=i}static _fromEmailAndPassword(t,e){return new Jt(t,e,"password")}static _fromEmailAndCode(t,e,n=null){return new Jt(t,e,"emailLink",n)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(t){const e="string"===typeof t?JSON.parse(t):t;if((null===e||void 0===e?void 0:e.email)&&(null===e||void 0===e?void 0:e.password)){if("password"===e.signInMethod)return this._fromEmailAndPassword(e.email,e.password);if("emailLink"===e.signInMethod)return this._fromEmailAndCode(e.email,e.password,e.tenantId)}return null}async _getIdTokenResponse(t){switch(this.signInMethod){case"password":const e={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Wt(t,e,"signInWithPassword",Yt,"EMAIL_PASSWORD_PROVIDER");case"emailLink":return Qt(t,{email:this._email,oobCode:this._password});default:p(t,"internal-error")}}async _linkToIdToken(t,e){switch(this.signInMethod){case"password":const n={idToken:e,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Wt(t,n,"signUpPassword",Gt,"EMAIL_PASSWORD_PROVIDER");case"emailLink":return Xt(t,{idToken:e,email:this._email,oobCode:this._password});default:p(t,"internal-error")}}_getReauthenticationResolver(t){return this._getIdTokenResponse(t)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Zt(t,e){return D(t,"POST","/v1/accounts:signInWithIdp",R(t,e))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const te="http://localhost";class ee extends Kt{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(t){const e=new ee(t.providerId,t.signInMethod);return t.idToken||t.accessToken?(t.idToken&&(e.idToken=t.idToken),t.accessToken&&(e.accessToken=t.accessToken),t.nonce&&!t.pendingToken&&(e.nonce=t.nonce),t.pendingToken&&(e.pendingToken=t.pendingToken)):t.oauthToken&&t.oauthTokenSecret?(e.accessToken=t.oauthToken,e.secret=t.oauthTokenSecret):p("argument-error"),e}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(t){const e="string"===typeof t?JSON.parse(t):t,{providerId:n,signInMethod:i}=e,s=o(e,["providerId","signInMethod"]);if(!n||!i)return null;const r=new ee(n,i);return r.idToken=s.idToken||void 0,r.accessToken=s.accessToken||void 0,r.secret=s.secret,r.nonce=s.nonce,r.pendingToken=s.pendingToken||null,r}_getIdTokenResponse(t){const e=this.buildRequest();return Zt(t,e)}_linkToIdToken(t,e){const n=this.buildRequest();return n.idToken=e,Zt(t,n)}_getReauthenticationResolver(t){const e=this.buildRequest();return e.autoCreate=!1,Zt(t,e)}buildRequest(){const t={requestUri:te,returnSecureToken:!0};if(this.pendingToken)t.pendingToken=this.pendingToken;else{const e={};this.idToken&&(e["id_token"]=this.idToken),this.accessToken&&(e["access_token"]=this.accessToken),this.secret&&(e["oauth_token_secret"]=this.secret),e["providerId"]=this.providerId,this.nonce&&!this.pendingToken&&(e["nonce"]=this.nonce),t.postBody=(0,s.Am)(e)}return t}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ne(t,e){return P(t,"POST","/v1/accounts:sendVerificationCode",R(t,e))}async function ie(t,e){return D(t,"POST","/v1/accounts:signInWithPhoneNumber",R(t,e))}async function se(t,e){const n=await D(t,"POST","/v1/accounts:signInWithPhoneNumber",R(t,e));if(n.temporaryProof)throw U(t,"account-exists-with-different-credential",n);return n}const re={["USER_NOT_FOUND"]:"user-not-found"};async function oe(t,e){const n=Object.assign(Object.assign({},e),{operation:"REAUTH"});return D(t,"POST","/v1/accounts:signInWithPhoneNumber",R(t,n),re)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ae extends Kt{constructor(t){super("phone","phone"),this.params=t}static _fromVerification(t,e){return new ae({verificationId:t,verificationCode:e})}static _fromTokenResponse(t,e){return new ae({phoneNumber:t,temporaryProof:e})}_getIdTokenResponse(t){return ie(t,this._makeVerificationRequest())}_linkToIdToken(t,e){return se(t,Object.assign({idToken:e},this._makeVerificationRequest()))}_getReauthenticationResolver(t){return oe(t,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:t,phoneNumber:e,verificationId:n,verificationCode:i}=this.params;return t&&e?{temporaryProof:t,phoneNumber:e}:{sessionInfo:n,code:i}}toJSON(){const t={providerId:this.providerId};return this.params.phoneNumber&&(t.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(t.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(t.verificationCode=this.params.verificationCode),this.params.verificationId&&(t.verificationId=this.params.verificationId),t}static fromJSON(t){"string"===typeof t&&(t=JSON.parse(t));const{verificationId:e,verificationCode:n,phoneNumber:i,temporaryProof:s}=t;return n||e||i||s?new ae({verificationId:e,verificationCode:n,phoneNumber:i,temporaryProof:s}):null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ce(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function le(t){const e=(0,s.I9)((0,s.hp)(t))["link"],n=e?(0,s.I9)((0,s.hp)(e))["deep_link_id"]:null,i=(0,s.I9)((0,s.hp)(t))["deep_link_id"],r=i?(0,s.I9)((0,s.hp)(i))["link"]:null;return r||i||n||e||t}class he{constructor(t){var e,n,i,r,o,a;const c=(0,s.I9)((0,s.hp)(t)),l=null!==(e=c["apiKey"])&&void 0!==e?e:null,h=null!==(n=c["oobCode"])&&void 0!==n?n:null,u=ce(null!==(i=c["mode"])&&void 0!==i?i:null);_(l&&h&&u,"argument-error"),this.apiKey=l,this.operation=u,this.code=h,this.continueUrl=null!==(r=c["continueUrl"])&&void 0!==r?r:null,this.languageCode=null!==(o=c["languageCode"])&&void 0!==o?o:null,this.tenantId=null!==(a=c["tenantId"])&&void 0!==a?a:null}static parseLink(t){const e=le(t);try{return new he(e)}catch(n){return null}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ue{constructor(){this.providerId=ue.PROVIDER_ID}static credential(t,e){return Jt._fromEmailAndPassword(t,e)}static credentialWithLink(t,e){const n=he.parseLink(e);return _(n,"argument-error"),Jt._fromEmailAndCode(t,n.code,n.tenantId)}}ue.PROVIDER_ID="password",ue.EMAIL_PASSWORD_SIGN_IN_METHOD="password",ue.EMAIL_LINK_SIGN_IN_METHOD="emailLink";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class de{constructor(t){this.providerId=t,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(t){this.defaultLanguageCode=t}setCustomParameters(t){return this.customParameters=t,this}getCustomParameters(){return this.customParameters}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fe extends de{constructor(){super(...arguments),this.scopes=[]}addScope(t){return this.scopes.includes(t)||this.scopes.push(t),this}getScopes(){return[...this.scopes]}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class pe extends fe{constructor(){super("facebook.com")}static credential(t){return ee._fromParams({providerId:pe.PROVIDER_ID,signInMethod:pe.FACEBOOK_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return pe.credentialFromTaggedObject(t)}static credentialFromError(t){return pe.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t))return null;if(!t.oauthAccessToken)return null;try{return pe.credential(t.oauthAccessToken)}catch(e){return null}}}pe.FACEBOOK_SIGN_IN_METHOD="facebook.com",pe.PROVIDER_ID="facebook.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ge extends fe{constructor(){super("google.com"),this.addScope("profile")}static credential(t,e){return ee._fromParams({providerId:ge.PROVIDER_ID,signInMethod:ge.GOOGLE_SIGN_IN_METHOD,idToken:t,accessToken:e})}static credentialFromResult(t){return ge.credentialFromTaggedObject(t)}static credentialFromError(t){return ge.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthIdToken:e,oauthAccessToken:n}=t;if(!e&&!n)return null;try{return ge.credential(e,n)}catch(i){return null}}}ge.GOOGLE_SIGN_IN_METHOD="google.com",ge.PROVIDER_ID="google.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class me extends fe{constructor(){super("github.com")}static credential(t){return ee._fromParams({providerId:me.PROVIDER_ID,signInMethod:me.GITHUB_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return me.credentialFromTaggedObject(t)}static credentialFromError(t){return me.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t))return null;if(!t.oauthAccessToken)return null;try{return me.credential(t.oauthAccessToken)}catch(e){return null}}}me.GITHUB_SIGN_IN_METHOD="github.com",me.PROVIDER_ID="github.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ye extends fe{constructor(){super("twitter.com")}static credential(t,e){return ee._fromParams({providerId:ye.PROVIDER_ID,signInMethod:ye.TWITTER_SIGN_IN_METHOD,oauthToken:t,oauthTokenSecret:e})}static credentialFromResult(t){return ye.credentialFromTaggedObject(t)}static credentialFromError(t){return ye.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthAccessToken:e,oauthTokenSecret:n}=t;if(!e||!n)return null;try{return ye.credential(e,n)}catch(i){return null}}}ye.TWITTER_SIGN_IN_METHOD="twitter.com",ye.PROVIDER_ID="twitter.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ve{constructor(t){this.user=t.user,this.providerId=t.providerId,this._tokenResponse=t._tokenResponse,this.operationType=t.operationType}static async _fromIdTokenResponse(t,e,n,i=!1){const s=await at._fromIdTokenResponse(t,n,i),r=_e(n),o=new ve({user:s,providerId:r,_tokenResponse:n,operationType:e});return o}static async _forOperation(t,e,n){await t._updateTokensIfNecessary(n,!0);const i=_e(n);return new ve({user:t,providerId:i,_tokenResponse:n,operationType:e})}}function _e(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class be extends s.g{constructor(t,e,n,i){var s;super(e.code,e.message),this.operationType=n,this.user=i,Object.setPrototypeOf(this,be.prototype),this.customData={appName:t.name,tenantId:null!==(s=t.tenantId)&&void 0!==s?s:void 0,_serverResponse:e.customData._serverResponse,operationType:n}}static _fromErrorAndOperation(t,e,n,i){return new be(t,e,n,i)}}function we(t,e,n,i){const s="reauthenticate"===e?n._getReauthenticationResolver(t):n._getIdTokenResponse(t);return s.catch((n=>{if("auth/multi-factor-auth-required"===n.code)throw be._fromErrorAndOperation(t,n,e,i);throw n}))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Te(t,e,n=!1){const i=await Y(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return ve._forOperation(t,"link",i)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function xe(t,e,n=!1){const{auth:s}=t;if((0,i.xZ)(s.app))return Promise.reject(y(s));const r="reauthenticate";try{const i=await Y(t,we(s,r,e,t),n);_(i.idToken,s,"internal-error");const o=K(i.idToken);_(o,s,"internal-error");const{sub:a}=o;return _(t.uid===a,s,"user-mismatch"),ve._forOperation(t,r,i)}catch(o){throw"auth/user-not-found"===(null===o||void 0===o?void 0:o.code)&&p(s,"user-mismatch"),o}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ee(t,e,n=!1){if((0,i.xZ)(t.app))return Promise.reject(y(t));const s="signIn",r=await we(t,s,e),o=await ve._fromIdTokenResponse(t,s,r);return n||await t._updateCurrentUser(o.user),o}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Ce(t,e){return P(t,"POST","/v2/accounts/mfaEnrollment:start",R(t,e))}function Ie(t,e){return P(t,"POST","/v2/accounts/mfaEnrollment:finalize",R(t,e))}function Se(t,e){return P(t,"POST","/v2/accounts/mfaEnrollment:start",R(t,e))}function ke(t,e){return P(t,"POST","/v2/accounts/mfaEnrollment:finalize",R(t,e))}new WeakMap;const Ae="__sak";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oe{constructor(t,e){this.storageRetriever=t,this.type=e}_isAvailable(){try{return this.storage?(this.storage.setItem(Ae,"1"),this.storage.removeItem(Ae),Promise.resolve(!0)):Promise.resolve(!1)}catch(t){return Promise.resolve(!1)}}_set(t,e){return this.storage.setItem(t,JSON.stringify(e)),Promise.resolve()}_get(t){const e=this.storage.getItem(t);return Promise.resolve(e?JSON.parse(e):null)}_remove(t){return this.storage.removeItem(t),Promise.resolve()}get storage(){return this.storageRetriever()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Re=1e3,Pe=10;class Ne extends Oe{constructor(){super((()=>window.localStorage),"LOCAL"),this.boundEventHandler=(t,e)=>this.onStorageEvent(t,e),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Et(),this._shouldAllowMigration=!0}forAllChangedKeys(t){for(const e of Object.keys(this.listeners)){const n=this.storage.getItem(e),i=this.localCache[e];n!==i&&t(e,i,n)}}onStorageEvent(t,e=!1){if(!t.key)return void this.forAllChangedKeys(((t,e,n)=>{this.notifyListeners(t,n)}));const n=t.key;e?this.detachListener():this.stopPolling();const i=()=>{const t=this.storage.getItem(n);(e||this.localCache[n]!==t)&&this.notifyListeners(n,t)},s=this.storage.getItem(n);xt()&&s!==t.newValue&&t.newValue!==t.oldValue?setTimeout(i,Pe):i()}notifyListeners(t,e){this.localCache[t]=e;const n=this.listeners[t];if(n)for(const i of Array.from(n))i(e?JSON.parse(e):e)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((()=>{this.forAllChangedKeys(((t,e,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:t,oldValue:e,newValue:n}),!0)}))}),Re)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(t,e){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[t]||(this.listeners[t]=new Set,this.localCache[t]=this.storage.getItem(t)),this.listeners[t].add(e)}_removeListener(t,e){this.listeners[t]&&(this.listeners[t].delete(e),0===this.listeners[t].size&&delete this.listeners[t]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}async _set(t,e){await super._set(t,e),this.localCache[t]=JSON.stringify(e)}async _get(t){const e=await super._get(t);return this.localCache[t]=JSON.stringify(e),e}async _remove(t){await super._remove(t),delete this.localCache[t]}}Ne.type="LOCAL";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class De extends Oe{constructor(){super((()=>window.sessionStorage),"SESSION")}_addListener(t,e){}_removeListener(t,e){}}De.type="SESSION";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Me(t){return Promise.all(t.map((async t=>{try{const e=await t;return{fulfilled:!0,value:e}}catch(e){return{fulfilled:!1,reason:e}}})))}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Le{constructor(t){this.eventTarget=t,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(t){const e=this.receivers.find((e=>e.isListeningto(t)));if(e)return e;const n=new Le(t);return this.receivers.push(n),n}isListeningto(t){return this.eventTarget===t}async handleEvent(t){const e=t,{eventId:n,eventType:i,data:s}=e.data,r=this.handlersMap[i];if(!(null===r||void 0===r?void 0:r.size))return;e.ports[0].postMessage({status:"ack",eventId:n,eventType:i});const o=Array.from(r).map((async t=>t(e.origin,s))),a=await Me(o);e.ports[0].postMessage({status:"done",eventId:n,eventType:i,response:a})}_subscribe(t,e){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[t]||(this.handlersMap[t]=new Set),this.handlersMap[t].add(e)}_unsubscribe(t,e){this.handlersMap[t]&&e&&this.handlersMap[t].delete(e),e&&0!==this.handlersMap[t].size||delete this.handlersMap[t],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Fe(t="",e=10){let n="";for(let i=0;i<e;i++)n+=Math.floor(10*Math.random());return t+n}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Le.receivers=[];class Ue{constructor(t){this.target=t,this.handlers=new Set}removeMessageHandler(t){t.messageChannel&&(t.messageChannel.port1.removeEventListener("message",t.onMessage),t.messageChannel.port1.close()),this.handlers.delete(t)}async _send(t,e,n=50){const i="undefined"!==typeof MessageChannel?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,r;return new Promise(((o,a)=>{const c=Fe("",20);i.port1.start();const l=setTimeout((()=>{a(new Error("unsupported_event"))}),n);r={messageChannel:i,onMessage(t){const e=t;if(e.data.eventId===c)switch(e.data.status){case"ack":clearTimeout(l),s=setTimeout((()=>{a(new Error("timeout"))}),3e3);break;case"done":clearTimeout(s),o(e.data.response);break;default:clearTimeout(l),clearTimeout(s),a(new Error("invalid_response"));break}}},this.handlers.add(r),i.port1.addEventListener("message",r.onMessage),this.target.postMessage({eventType:t,eventId:c,data:e},[i.port2])})).finally((()=>{r&&this.removeMessageHandler(r)}))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ve(){return window}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function je(){return"undefined"!==typeof Ve()["WorkerGlobalScope"]&&"function"===typeof Ve()["importScripts"]}async function ze(){if(!(null===navigator||void 0===navigator?void 0:navigator.serviceWorker))return null;try{const t=await navigator.serviceWorker.ready;return t.active}catch(t){return null}}function Be(){var t;return(null===(t=null===navigator||void 0===navigator?void 0:navigator.serviceWorker)||void 0===t?void 0:t.controller)||null}function $e(){return je()?self:null}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const We="firebaseLocalStorageDb",He=1,qe="firebaseLocalStorage",Ke="fbase_key";class Ge{constructor(t){this.request=t}toPromise(){return new Promise(((t,e)=>{this.request.addEventListener("success",(()=>{t(this.request.result)})),this.request.addEventListener("error",(()=>{e(this.request.error)}))}))}}function Ye(t,e){return t.transaction([qe],e?"readwrite":"readonly").objectStore(qe)}function Qe(){const t=indexedDB.deleteDatabase(We);return new Ge(t).toPromise()}function Xe(){const t=indexedDB.open(We,He);return new Promise(((e,n)=>{t.addEventListener("error",(()=>{n(t.error)})),t.addEventListener("upgradeneeded",(()=>{const e=t.result;try{e.createObjectStore(qe,{keyPath:Ke})}catch(i){n(i)}})),t.addEventListener("success",(async()=>{const n=t.result;n.objectStoreNames.contains(qe)?e(n):(n.close(),await Qe(),e(await Xe()))}))}))}async function Je(t,e,n){const i=Ye(t,!0).put({[Ke]:e,value:n});return new Ge(i).toPromise()}async function Ze(t,e){const n=Ye(t,!1).get(e),i=await new Ge(n).toPromise();return void 0===i?null:i.value}function tn(t,e){const n=Ye(t,!0).delete(e);return new Ge(n).toPromise()}const en=800,nn=3;class sn{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then((()=>{}),(()=>{}))}async _openDb(){return this.db||(this.db=await Xe()),this.db}async _withRetries(t){let e=0;while(1)try{const e=await this._openDb();return await t(e)}catch(n){if(e++>nn)throw n;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return je()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Le._getInstance($e()),this.receiver._subscribe("keyChanged",(async(t,e)=>{const n=await this._poll();return{keyProcessed:n.includes(e.key)}})),this.receiver._subscribe("ping",(async(t,e)=>["keyChanged"]))}async initializeSender(){var t,e;if(this.activeServiceWorker=await ze(),!this.activeServiceWorker)return;this.sender=new Ue(this.activeServiceWorker);const n=await this.sender._send("ping",{},800);n&&(null===(t=n[0])||void 0===t?void 0:t.fulfilled)&&(null===(e=n[0])||void 0===e?void 0:e.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(t){if(this.sender&&this.activeServiceWorker&&Be()===this.activeServiceWorker)try{await this.sender._send("keyChanged",{key:t},this.serviceWorkerReceiverAvailable?800:50)}catch(e){}}async _isAvailable(){try{if(!indexedDB)return!1;const t=await Xe();return await Je(t,Ae,"1"),await tn(t,Ae),!0}catch(t){}return!1}async _withPendingWrite(t){this.pendingWrites++;try{await t()}finally{this.pendingWrites--}}async _set(t,e){return this._withPendingWrite((async()=>(await this._withRetries((n=>Je(n,t,e))),this.localCache[t]=e,this.notifyServiceWorker(t))))}async _get(t){const e=await this._withRetries((e=>Ze(e,t)));return this.localCache[t]=e,e}async _remove(t){return this._withPendingWrite((async()=>(await this._withRetries((e=>tn(e,t))),delete this.localCache[t],this.notifyServiceWorker(t))))}async _poll(){const t=await this._withRetries((t=>{const e=Ye(t,!1).getAll();return new Ge(e).toPromise()}));if(!t)return[];if(0!==this.pendingWrites)return[];const e=[],n=new Set;if(0!==t.length)for(const{fbase_key:i,value:s}of t)n.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),e.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!n.has(i)&&(this.notifyListeners(i,null),e.push(i));return e}notifyListeners(t,e){this.localCache[t]=e;const n=this.listeners[t];if(n)for(const i of Array.from(n))i(e)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((async()=>this._poll()),en)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(t,e){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[t]||(this.listeners[t]=new Set,this._get(t)),this.listeners[t].add(e)}_removeListener(t,e){this.listeners[t]&&(this.listeners[t].delete(e),0===this.listeners[t].size&&delete this.listeners[t]),0===Object.keys(this.listeners).length&&this.stopPolling()}}sn.type="LOCAL";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function rn(t,e){return P(t,"POST","/v2/accounts/mfaSignIn:start",R(t,e))}function on(t,e){return P(t,"POST","/v2/accounts/mfaSignIn:finalize",R(t,e))}function an(t,e){return P(t,"POST","/v2/accounts/mfaSignIn:finalize",R(t,e))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ft("rcb"),new I(3e4,6e4);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const cn="recaptcha";async function ln(t,e,n){var i;if(!t._getRecaptchaConfig())try{await Ht(t)}catch(fs){console.log("Failed to initialize reCAPTCHA Enterprise config. Triggering the reCAPTCHA v2 verification.")}try{let s;if(s="string"===typeof e?{phoneNumber:e}:e,"session"in s){const e=s.session;if("phoneNumber"in s){_("enroll"===e.type,t,"internal-error");const i={idToken:e.credential,phoneEnrollmentInfo:{phoneNumber:s.phoneNumber,clientType:"CLIENT_TYPE_WEB"}},r=async(t,e)=>{if(e.phoneEnrollmentInfo.captchaResponse===zt){_((null===n||void 0===n?void 0:n.type)===cn,t,"argument-error");const i=await hn(t,e,n);return Ce(t,i)}return Ce(t,e)},o=Wt(t,i,"mfaSmsEnrollment",r,"PHONE_PROVIDER"),a=await o.catch((t=>Promise.reject(t)));return a.phoneSessionInfo.sessionInfo}{_("signin"===e.type,t,"internal-error");const r=(null===(i=s.multiFactorHint)||void 0===i?void 0:i.uid)||s.multiFactorUid;_(r,t,"missing-multi-factor-info");const o={mfaPendingCredential:e.credential,mfaEnrollmentId:r,phoneSignInInfo:{clientType:"CLIENT_TYPE_WEB"}},a=async(t,e)=>{if(e.phoneSignInInfo.captchaResponse===zt){_((null===n||void 0===n?void 0:n.type)===cn,t,"argument-error");const i=await hn(t,e,n);return rn(t,i)}return rn(t,e)},c=Wt(t,o,"mfaSmsSignIn",a,"PHONE_PROVIDER"),l=await c.catch((t=>Promise.reject(t)));return l.phoneResponseInfo.sessionInfo}}{const e={phoneNumber:s.phoneNumber,clientType:"CLIENT_TYPE_WEB"},i=async(t,e)=>{if(e.captchaResponse===zt){_((null===n||void 0===n?void 0:n.type)===cn,t,"argument-error");const i=await hn(t,e,n);return ne(t,i)}return ne(t,e)},r=Wt(t,e,"sendVerificationCode",i,"PHONE_PROVIDER"),o=await r.catch((t=>Promise.reject(t)));return o.sessionInfo}}finally{null===n||void 0===n||n._reset()}}async function hn(t,e,n){_(n.type===cn,t,"argument-error");const i=await n.verify();_("string"===typeof i,t,"argument-error");const s=Object.assign({},e);if("phoneEnrollmentInfo"in s){const t=s.phoneEnrollmentInfo.phoneNumber,e=s.phoneEnrollmentInfo.captchaResponse,n=s.phoneEnrollmentInfo.clientType,r=s.phoneEnrollmentInfo.recaptchaVersion;return Object.assign(s,{phoneEnrollmentInfo:{phoneNumber:t,recaptchaToken:i,captchaResponse:e,clientType:n,recaptchaVersion:r}}),s}if("phoneSignInInfo"in s){const t=s.phoneSignInInfo.captchaResponse,e=s.phoneSignInInfo.clientType,n=s.phoneSignInInfo.recaptchaVersion;return Object.assign(s,{phoneSignInInfo:{recaptchaToken:i,captchaResponse:t,clientType:e,recaptchaVersion:n}}),s}return Object.assign(s,{recaptchaToken:i}),s}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class un{constructor(t){this.providerId=un.PROVIDER_ID,this.auth=Rt(t)}verifyPhoneNumber(t,e){return ln(this.auth,t,(0,s.Ku)(e))}static credential(t,e){return ae._fromVerification(t,e)}static credentialFromResult(t){const e=t;return un.credentialFromTaggedObject(e)}static credentialFromError(t){return un.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{phoneNumber:e,temporaryProof:n}=t;return e&&n?ae._fromTokenResponse(e,n):null}}un.PROVIDER_ID="phone",un.PHONE_SIGN_IN_METHOD="phone";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class dn extends Kt{constructor(t){super("custom","custom"),this.params=t}_getIdTokenResponse(t){return Zt(t,this._buildIdpRequest())}_linkToIdToken(t,e){return Zt(t,this._buildIdpRequest(e))}_getReauthenticationResolver(t){return Zt(t,this._buildIdpRequest())}_buildIdpRequest(t){const e={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return t&&(e.idToken=t),e}}function fn(t){return Ee(t.auth,new dn(t),t.bypassAuthState)}function pn(t){const{auth:e,user:n}=t;return _(n,e,"internal-error"),xe(n,new dn(t),t.bypassAuthState)}async function gn(t){const{auth:e,user:n}=t;return _(n,e,"internal-error"),Te(n,new dn(t),t.bypassAuthState)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mn{constructor(t,e,n,i,s=!1){this.auth=t,this.resolver=n,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(e)?e:[e]}execute(){return new Promise((async(t,e)=>{this.pendingPromise={resolve:t,reject:e};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(n){this.reject(n)}}))}async onAuthEvent(t){const{urlResponse:e,sessionId:n,postBody:i,tenantId:s,error:r,type:o}=t;if(r)return void this.reject(r);const a={auth:this.auth,requestUri:e,sessionId:n,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(o)(a))}catch(c){this.reject(c)}}onError(t){this.reject(t)}getIdpTask(t){switch(t){case"signInViaPopup":case"signInViaRedirect":return fn;case"linkViaPopup":case"linkViaRedirect":return gn;case"reauthViaPopup":case"reauthViaRedirect":return pn;default:p(this.auth,"internal-error")}}resolve(t){w(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(t),this.unregisterAndCleanUp()}reject(t){w(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(t),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yn=new I(2e3,1e4);class vn extends mn{constructor(t,e,n,i,s){super(t,e,i,s),this.provider=n,this.authWindow=null,this.pollId=null,vn.currentPopupAction&&vn.currentPopupAction.cancel(),vn.currentPopupAction=this}async executeNotNull(){const t=await this.execute();return _(t,this.auth,"internal-error"),t}async onExecution(){w(1===this.filter.length,"Popup operations only handle one event");const t=Fe();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],t),this.authWindow.associatedEvent=t,this.resolver._originValidation(this.auth).catch((t=>{this.reject(t)})),this.resolver._isIframeWebStorageSupported(this.auth,(t=>{t||this.reject(g(this.auth,"web-storage-unsupported"))})),this.pollUserCancellation()}get eventId(){var t;return(null===(t=this.authWindow)||void 0===t?void 0:t.associatedEvent)||null}cancel(){this.reject(g(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,vn.currentPopupAction=null}pollUserCancellation(){const t=()=>{var e,n;(null===(n=null===(e=this.authWindow)||void 0===e?void 0:e.window)||void 0===n?void 0:n.closed)?this.pollId=window.setTimeout((()=>{this.pollId=null,this.reject(g(this.auth,"popup-closed-by-user"))}),8e3):this.pollId=window.setTimeout(t,yn.get())};t()}}vn.currentPopupAction=null;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
new Map;
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
new I(3e4,6e4);
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
new I(5e3,15e3),new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
encodeURIComponent("fac");class _n{constructor(t){this.factorId=t}_process(t,e,n){switch(e.type){case"enroll":return this._finalizeEnroll(t,e.credential,n);case"signin":return this._finalizeSignIn(t,e.credential);default:return b("unexpected MultiFactorSessionType")}}}class bn extends _n{constructor(t){super("phone"),this.credential=t}static _fromCredential(t){return new bn(t)}_finalizeEnroll(t,e,n){return Ie(t,{idToken:e,displayName:n,phoneVerificationInfo:this.credential._makeVerificationRequest()})}_finalizeSignIn(t,e){return on(t,{mfaPendingCredential:e,phoneVerificationInfo:this.credential._makeVerificationRequest()})}}class wn{constructor(){}static assertion(t){return bn._fromCredential(t)}}wn.FACTOR_ID="phone";class Tn{static assertionForEnrollment(t,e){return xn._fromSecret(t,e)}static assertionForSignIn(t,e){return xn._fromEnrollmentId(t,e)}static async generateSecret(t){var e;const n=t;_("undefined"!==typeof(null===(e=n.user)||void 0===e?void 0:e.auth),"internal-error");const i=await Se(n.user.auth,{idToken:n.credential,totpEnrollmentInfo:{}});return En._fromStartTotpMfaEnrollmentResponse(i,n.user.auth)}}Tn.FACTOR_ID="totp";class xn extends _n{constructor(t,e,n){super("totp"),this.otp=t,this.enrollmentId=e,this.secret=n}static _fromSecret(t,e){return new xn(e,void 0,t)}static _fromEnrollmentId(t,e){return new xn(e,t)}async _finalizeEnroll(t,e,n){return _("undefined"!==typeof this.secret,t,"argument-error"),ke(t,{idToken:e,displayName:n,totpVerificationInfo:this.secret._makeTotpVerificationInfo(this.otp)})}async _finalizeSignIn(t,e){_(void 0!==this.enrollmentId&&void 0!==this.otp,t,"argument-error");const n={verificationCode:this.otp};return an(t,{mfaPendingCredential:e,mfaEnrollmentId:this.enrollmentId,totpVerificationInfo:n})}}class En{constructor(t,e,n,i,s,r,o){this.sessionInfo=r,this.auth=o,this.secretKey=t,this.hashingAlgorithm=e,this.codeLength=n,this.codeIntervalSeconds=i,this.enrollmentCompletionDeadline=s}static _fromStartTotpMfaEnrollmentResponse(t,e){return new En(t.totpSessionInfo.sharedSecretKey,t.totpSessionInfo.hashingAlgorithm,t.totpSessionInfo.verificationCodeLength,t.totpSessionInfo.periodSec,new Date(t.totpSessionInfo.finalizeEnrollmentTime).toUTCString(),t.totpSessionInfo.sessionInfo,e)}_makeTotpVerificationInfo(t){return{sessionInfo:this.sessionInfo,verificationCode:t}}generateQrCodeUrl(t,e){var n;let i=!1;return(Cn(t)||Cn(e))&&(i=!0),i&&(Cn(t)&&(t=(null===(n=this.auth.currentUser)||void 0===n?void 0:n.email)||"unknownuser"),Cn(e)&&(e=this.auth.name)),`otpauth://totp/${e}:${t}?secret=${this.secretKey}&issuer=${e}&algorithm=${this.hashingAlgorithm}&digits=${this.codeLength}`}}function Cn(t){return"undefined"===typeof t||0===(null===t||void 0===t?void 0:t.length)}var In="@firebase/auth",Sn="1.8.0";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class kn{constructor(t){this.auth=t,this.internalListeners=new Map}getUid(){var t;return this.assertAuthConfigured(),(null===(t=this.auth.currentUser)||void 0===t?void 0:t.uid)||null}async getToken(t){if(this.assertAuthConfigured(),await this.auth._initializationPromise,!this.auth.currentUser)return null;const e=await this.auth.currentUser.getIdToken(t);return{accessToken:e}}addAuthTokenListener(t){if(this.assertAuthConfigured(),this.internalListeners.has(t))return;const e=this.auth.onIdTokenChanged((e=>{t((null===e||void 0===e?void 0:e.stsTokenManager.accessToken)||null)}));this.internalListeners.set(t,e),this.updateProactiveRefresh()}removeAuthTokenListener(t){this.assertAuthConfigured();const e=this.internalListeners.get(t);e&&(this.internalListeners.delete(t),e(),this.updateProactiveRefresh())}assertAuthConfigured(){_(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function An(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function On(t){(0,i.om)(new a.uA("auth",((e,{options:n})=>{const i=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),r=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=i.options;_(o&&!o.includes(":"),"invalid-api-key",{appName:i.name});const c={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Ct(t)},l=new Ot(i,s,r,c);return qt(l,n),l}),"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback(((t,e,n)=>{const i=t.getProvider("auth-internal");i.initialize()}))),(0,i.om)(new a.uA("auth-internal",(t=>{const e=Rt(t.getProvider("auth").getImmediate());return(t=>new kn(t))(e)}),"PRIVATE").setInstantiationMode("EXPLICIT")),(0,i.KO)(In,Sn,An(t)),(0,i.KO)(In,Sn,"esm2017")}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rn=300;(0,s.XA)("authIdTokenMaxAge");function Pn(){var t,e;return null!==(e=null===(t=document.getElementsByTagName("head"))||void 0===t?void 0:t[0])&&void 0!==e?e:document}Dt({loadJS(t){return new Promise(((e,n)=>{const i=document.createElement("script");i.setAttribute("src",t),i.onload=e,i.onerror=t=>{const e=g("internal-error");e.customData=t,n(e)},i.type="text/javascript",i.charset="UTF-8",Pn().appendChild(i)}))},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="}),On("Browser");var Nn=n(641),Dn=!1,Mn=!0;var Ln=n(953);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Fn=new Map,Un={activated:!1,tokenObservers:[]},Vn={initialized:!1,enabled:!1};function jn(t){return Fn.get(t)||Object.assign({},Un)}function zn(){return Vn}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bn="https://content-firebaseappcheck.googleapis.com/v1",$n="exchangeDebugToken",Wn={OFFSET_DURATION:3e5,RETRIAL_MIN_WAIT:3e4,RETRIAL_MAX_WAIT:96e4};
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Hn{constructor(t,e,n,i,s){if(this.operation=t,this.retryPolicy=e,this.getWaitDuration=n,this.lowerBound=i,this.upperBound=s,this.pending=null,this.nextErrorWaitInterval=i,i>s)throw new Error("Proactive refresh lower bound greater than upper bound!")}start(){this.nextErrorWaitInterval=this.lowerBound,this.process(!0).catch((()=>{}))}stop(){this.pending&&(this.pending.reject("cancelled"),this.pending=null)}isRunning(){return!!this.pending}async process(t){this.stop();try{this.pending=new s.cY,this.pending.promise.catch((t=>{})),await qn(this.getNextRun(t)),this.pending.resolve(),await this.pending.promise,this.pending=new s.cY,this.pending.promise.catch((t=>{})),await this.operation(),this.pending.resolve(),await this.pending.promise,this.process(!0).catch((()=>{}))}catch(fs){this.retryPolicy(fs)?this.process(!1).catch((()=>{})):this.stop()}}getNextRun(t){if(t)return this.nextErrorWaitInterval=this.lowerBound,this.getWaitDuration();{const t=this.nextErrorWaitInterval;return this.nextErrorWaitInterval*=2,this.nextErrorWaitInterval>this.upperBound&&(this.nextErrorWaitInterval=this.upperBound),t}}}function qn(t){return new Promise((e=>{setTimeout(e,t)}))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kn={["already-initialized"]:"You have already called initializeAppCheck() for FirebaseApp {$appName} with different options. To avoid this error, call initializeAppCheck() with the same options as when it was originally called. This will return the already initialized instance.",["use-before-activation"]:"App Check is being used before initializeAppCheck() is called for FirebaseApp {$appName}. Call initializeAppCheck() before instantiating other Firebase services.",["fetch-network-error"]:"Fetch failed to connect to a network. Check Internet connection. Original error: {$originalErrorMessage}.",["fetch-parse-error"]:"Fetch client could not parse response. Original error: {$originalErrorMessage}.",["fetch-status-error"]:"Fetch server returned an HTTP error status. HTTP status: {$httpStatus}.",["storage-open"]:"Error thrown when opening storage. Original error: {$originalErrorMessage}.",["storage-get"]:"Error thrown when reading from storage. Original error: {$originalErrorMessage}.",["storage-set"]:"Error thrown when writing to storage. Original error: {$originalErrorMessage}.",["recaptcha-error"]:"ReCAPTCHA error.",["throttled"]:"Requests throttled due to {$httpStatus} error. Attempts allowed again after {$time}"},Gn=new s.FA("appCheck","AppCheck",Kn);function Yn(t){if(!jn(t).activated)throw Gn.create("use-before-activation",{appName:t.name})}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function Qn({url:t,body:e},n){const i={"Content-Type":"application/json"},s=n.getImmediate({optional:!0});if(s){const t=await s.getHeartbeatsHeader();t&&(i["X-Firebase-Client"]=t)}const r={method:"POST",body:JSON.stringify(e),headers:i};let o,a;try{o=await fetch(t,r)}catch(u){throw Gn.create("fetch-network-error",{originalErrorMessage:null===u||void 0===u?void 0:u.message})}if(200!==o.status)throw Gn.create("fetch-status-error",{httpStatus:o.status});try{a=await o.json()}catch(u){throw Gn.create("fetch-parse-error",{originalErrorMessage:null===u||void 0===u?void 0:u.message})}const c=a.ttl.match(/^([\d.]+)(s)$/);if(!c||!c[2]||isNaN(Number(c[1])))throw Gn.create("fetch-parse-error",{originalErrorMessage:`ttl field (timeToLive) is not in standard Protobuf Duration format: ${a.ttl}`});const l=1e3*Number(c[1]),h=Date.now();return{token:a.token,expireTimeMillis:h+l,issuedAtTimeMillis:h}}function Xn(t,e){const{projectId:n,appId:i,apiKey:s}=t.options;return{url:`${Bn}/projects/${n}/apps/${i}:${$n}?key=${s}`,body:{debug_token:e}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jn="firebase-app-check-database",Zn=1,ti="firebase-app-check-store";let ei=null;function ni(){return ei||(ei=new Promise(((t,e)=>{try{const n=indexedDB.open(Jn,Zn);n.onsuccess=e=>{t(e.target.result)},n.onerror=t=>{var n;e(Gn.create("storage-open",{originalErrorMessage:null===(n=t.target.error)||void 0===n?void 0:n.message}))},n.onupgradeneeded=t=>{const e=t.target.result;switch(t.oldVersion){case 0:e.createObjectStore(ti,{keyPath:"compositeKey"})}}}catch(n){e(Gn.create("storage-open",{originalErrorMessage:null===n||void 0===n?void 0:n.message}))}})),ei)}function ii(t,e){return si(ri(t),e)}async function si(t,e){const n=await ni(),i=n.transaction(ti,"readwrite"),s=i.objectStore(ti),r=s.put({compositeKey:t,value:e});return new Promise(((t,e)=>{r.onsuccess=e=>{t()},i.onerror=t=>{var n;e(Gn.create("storage-set",{originalErrorMessage:null===(n=t.target.error)||void 0===n?void 0:n.message}))}}))}function ri(t){return`${t.options.appId}-${t.name}`}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oi=new r.Vy("@firebase/app-check");
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ai(t,e){return(0,s.zW)()?ii(t,e).catch((t=>{oi.warn(`Failed to write token to IndexedDB. Error: ${t}`)})):Promise.resolve()}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function ci(){const t=zn();return t.enabled}async function li(){const t=zn();if(t.enabled&&t.token)return t.token.promise;throw Error("\n            Can't get debug token in production mode.\n        ")}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const hi={error:"UNKNOWN_ERROR"};function ui(t){return s.K3.encodeString(JSON.stringify(t),!1)}async function di(t,e=!1){const n=t.app;Yn(n);const i=jn(n);let s,r=i.token;if(r&&!_i(r)&&(i.token=void 0,r=void 0),!r){const t=await i.cachedTokenPromise;t&&(_i(t)?r=t:await ai(n,void 0))}if(!e&&r&&_i(r))return{token:r.token};let o,a=!1;if(ci()){i.exchangeTokenPromise||(i.exchangeTokenPromise=Qn(Xn(n,await li()),t.heartbeatServiceProvider).finally((()=>{i.exchangeTokenPromise=void 0})),a=!0);const e=await i.exchangeTokenPromise;return await ai(n,e),i.token=e,{token:e.token}}try{i.exchangeTokenPromise||(i.exchangeTokenPromise=i.provider.getToken().finally((()=>{i.exchangeTokenPromise=void 0})),a=!0),r=await jn(n).exchangeTokenPromise}catch(c){"appCheck/throttled"===c.code?oi.warn(c.message):oi.error(c),s=c}return r?s?o=_i(r)?{token:r.token,internalError:s}:bi(s):(o={token:r.token},i.token=r,await ai(n,r)):o=bi(s),a&&vi(n,o),o}async function fi(t){const e=t.app;Yn(e);const{provider:n}=jn(e);if(ci()){const n=await li(),{token:i}=await Qn(Xn(e,n),t.heartbeatServiceProvider);return{token:i}}{const{token:t}=await n.getToken();return{token:t}}}function pi(t,e,n,i){const{app:s}=t,r=jn(s),o={next:n,error:i,type:e};if(r.tokenObservers=[...r.tokenObservers,o],r.token&&_i(r.token)){const e=r.token;Promise.resolve().then((()=>{n({token:e.token}),mi(t)})).catch((()=>{}))}r.cachedTokenPromise.then((()=>mi(t)))}function gi(t,e){const n=jn(t),i=n.tokenObservers.filter((t=>t.next!==e));0===i.length&&n.tokenRefresher&&n.tokenRefresher.isRunning()&&n.tokenRefresher.stop(),n.tokenObservers=i}function mi(t){const{app:e}=t,n=jn(e);let i=n.tokenRefresher;i||(i=yi(t),n.tokenRefresher=i),!i.isRunning()&&n.isTokenAutoRefreshEnabled&&i.start()}function yi(t){const{app:e}=t;return new Hn((async()=>{const n=jn(e);let i;if(i=n.token?await di(t,!0):await di(t),i.error)throw i.error;if(i.internalError)throw i.internalError}),(()=>!0),(()=>{const t=jn(e);if(t.token){let e=t.token.issuedAtTimeMillis+.5*(t.token.expireTimeMillis-t.token.issuedAtTimeMillis)+3e5;const n=t.token.expireTimeMillis-3e5;return e=Math.min(e,n),Math.max(0,e-Date.now())}return 0}),Wn.RETRIAL_MIN_WAIT,Wn.RETRIAL_MAX_WAIT)}function vi(t,e){const n=jn(t).tokenObservers;for(const s of n)try{"EXTERNAL"===s.type&&null!=e.error?s.error(e.error):s.next(e)}catch(i){}}function _i(t){return t.expireTimeMillis-Date.now()>0}function bi(t){return{token:ui(hi),error:t}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wi{constructor(t,e){this.app=t,this.heartbeatServiceProvider=e}_delete(){const{tokenObservers:t}=jn(this.app);for(const e of t)gi(this.app,e.next);return Promise.resolve()}}function Ti(t,e){return new wi(t,e)}function xi(t){return{getToken:e=>di(t,e),getLimitedUseToken:()=>fi(t),addTokenListener:e=>pi(t,"INTERNAL",e),removeTokenListener:e=>gi(t.app,e)}}const Ei="@firebase/app-check",Ci="0.8.9";const Ii="app-check",Si="app-check-internal";function ki(){(0,i.om)(new a.uA(Ii,(t=>{const e=t.getProvider("app").getImmediate(),n=t.getProvider("heartbeat");return Ti(e,n)}),"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback(((t,e,n)=>{t.getProvider(Si).initialize()}))),(0,i.om)(new a.uA(Si,(t=>{const e=t.getProvider("app-check").getImmediate();return xi(e)}),"PUBLIC").setInstantiationMode("EXPLICIT")),(0,i.KO)(Ei,Ci)}ki();var Ai=n(223);const Oi=Symbol("firebaseApp");function Ri(t){return(0,Nn.nI)()&&(0,Nn.WQ)(Oi,null)||(0,Ai.Sx)(t)}const Pi=()=>{};function Ni(t,e){return e.split(".").reduce(((t,e)=>t&&t[e]),t)}function Di(t,e,n){const i=(""+e).split("."),s=i.pop(),r=i.reduce(((t,e)=>t&&t[e]),t);if(null!=r)return Array.isArray(r)?r.splice(Number(s),1,n):r[s]=n}function Mi(t){return!!t&&"object"===typeof t}const Li=Object.prototype;function Fi(t){return Mi(t)&&Object.getPrototypeOf(t)===Li}function Ui(t){return Mi(t)&&"document"===t.type}function Vi(t){return Mi(t)&&"collection"===t.type}function ji(t){return Ui(t)||Vi(t)}function zi(t){return Mi(t)&&"query"===t.type}function Bi(t){return Mi(t)&&"ref"in t}function $i(t){return Mi(t)&&"string"===typeof t.bucket}function Wi(t,e){let n;return()=>{if(!n)return n=!0,t(e())}}const Hi=Symbol.for("v-scx");function qi(){const t=(0,Nn.nI)();return!!(Dn?t&&t.proxy.$isServer:(0,Nn.WQ)(Hi,0))}const Ki=new WeakMap;function Gi(t,e){if(!Ki.has(t)){const n=(0,Ln.uY)(!0);Ki.set(t,n);const{unmount:i}=e;e.unmount=()=>{i.call(e),n.stop(),Ki.delete(t)}}return Ki.get(t)}Symbol("app-check-token");const Yi="@firebase/database",Qi="1.0.9";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
let Xi="";function Ji(t){Xi=t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zi{constructor(t){this.domStorage_=t,this.prefix_="firebase:"}set(t,e){null==e?this.domStorage_.removeItem(this.prefixedName_(t)):this.domStorage_.setItem(this.prefixedName_(t),(0,s.As)(e))}get(t){const e=this.domStorage_.getItem(this.prefixedName_(t));return null==e?null:(0,s.$L)(e)}remove(t){this.domStorage_.removeItem(this.prefixedName_(t))}prefixedName_(t){return this.prefix_+t}toString(){return this.domStorage_.toString()}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ts{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(t,e){null==e?delete this.cache_[t]:this.cache_[t]=e}get(t){return(0,s.gR)(this.cache_,t)?this.cache_[t]:null}remove(t){delete this.cache_[t]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const es=function(t){try{if("undefined"!==typeof window&&"undefined"!==typeof window[t]){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new Zi(e)}}catch(e){}return new ts},ns=es("localStorage"),is=es("sessionStorage"),ss=new r.Vy("@firebase/database"),rs=function(){let t=1;return function(){return t++}}(),os=function(t){const e=(0,s.kj)(t),n=new s.gz;n.update(e);const i=n.digest();return s.K3.encodeByteArray(i)},as=function(...t){let e="";for(let n=0;n<t.length;n++){const i=t[n];Array.isArray(i)||i&&"object"===typeof i&&"number"===typeof i.length?e+=as.apply(null,i):e+="object"===typeof i?(0,s.As)(i):i,e+=" "}return e};let cs=null,ls=!0;const hs=function(t,e){(0,s.vA)(!e||!0===t||!1===t,"Can't turn on custom loggers persistently."),!0===t?(ss.logLevel=r.$b.VERBOSE,cs=ss.log.bind(ss),e&&is.set("logging_enabled",!0)):"function"===typeof t?cs=t:(cs=null,is.remove("logging_enabled"))},us=function(...t){if(!0===ls&&(ls=!1,null===cs&&!0===is.get("logging_enabled")&&hs(!0)),cs){const e=as.apply(null,t);cs(e)}},ds=function(t){return function(...e){us(t,...e)}},fs=function(...t){const e="FIREBASE INTERNAL ERROR: "+as(...t);ss.error(e)},ps=function(...t){const e=`FIREBASE FATAL ERROR: ${as(...t)}`;throw ss.error(e),new Error(e)},gs=function(...t){const e="FIREBASE WARNING: "+as(...t);ss.warn(e)},ms=function(){"undefined"!==typeof window&&window.location&&window.location.protocol&&-1!==window.location.protocol.indexOf("https:")&&gs("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},ys=function(t){return"number"===typeof t&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},vs=function(t){if((0,s.$g)()||"complete"===document.readyState)t();else{let e=!1;const n=function(){document.body?e||(e=!0,t()):setTimeout(n,Math.floor(10))};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",(()=>{"complete"===document.readyState&&n()})),window.attachEvent("onload",n))}},_s="[MIN_NAME]",bs="[MAX_NAME]",ws=function(t,e){if(t===e)return 0;if(t===_s||e===bs)return-1;if(e===_s||t===bs)return 1;{const n=Ns(t),i=Ns(e);return null!==n?null!==i?n-i===0?t.length-e.length:n-i:-1:null!==i?1:t<e?-1:1}},Ts=function(t,e){return t===e?0:t<e?-1:1},xs=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+(0,s.As)(e))},Es=function(t){if("object"!==typeof t||null===t)return(0,s.As)(t);const e=[];for(const i in t)e.push(i);e.sort();let n="{";for(let i=0;i<e.length;i++)0!==i&&(n+=","),n+=(0,s.As)(e[i]),n+=":",n+=Es(t[e[i]]);return n+="}",n},Cs=function(t,e){const n=t.length;if(n<=e)return[t];const i=[];for(let s=0;s<n;s+=e)s+e>n?i.push(t.substring(s,n)):i.push(t.substring(s,s+e));return i};function Is(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const Ss=function(t){(0,s.vA)(!ys(t),"Invalid JSON number");const e=11,n=52,i=(1<<e-1)-1;let r,o,a,c,l;0===t?(o=0,a=0,r=1/t===-1/0?1:0):(r=t<0,t=Math.abs(t),t>=Math.pow(2,1-i)?(c=Math.min(Math.floor(Math.log(t)/Math.LN2),i),o=c+i,a=Math.round(t*Math.pow(2,n-c)-Math.pow(2,n))):(o=0,a=Math.round(t/Math.pow(2,1-i-n))));const h=[];for(l=n;l;l-=1)h.push(a%2?1:0),a=Math.floor(a/2);for(l=e;l;l-=1)h.push(o%2?1:0),o=Math.floor(o/2);h.push(r?1:0),h.reverse();const u=h.join("");let d="";for(l=0;l<64;l+=8){let t=parseInt(u.substr(l,8),2).toString(16);1===t.length&&(t="0"+t),d+=t}return d.toLowerCase()},ks=function(){return!("object"!==typeof window||!window["chrome"]||!window["chrome"]["extension"]||/^chrome/.test(window.location.href))},As=function(){return"object"===typeof Windows&&"object"===typeof Windows.UI};const Os=new RegExp("^-?(0*)\\d{1,10}$"),Rs=-2147483648,Ps=2147483647,Ns=function(t){if(Os.test(t)){const e=Number(t);if(e>=Rs&&e<=Ps)return e}return null},Ds=function(t){try{t()}catch(e){setTimeout((()=>{const t=e.stack||"";throw gs("Exception was thrown by user callback.",t),e}),Math.floor(0))}},Ms=function(){const t="object"===typeof window&&window["navigator"]&&window["navigator"]["userAgent"]||"";return t.search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Ls=function(t,e){const n=setTimeout(t,e);return"number"===typeof n&&"undefined"!==typeof Deno&&Deno["unrefTimer"]?Deno.unrefTimer(n):"object"===typeof n&&n["unref"]&&n["unref"](),n};
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Fs{constructor(t,e){this.appName_=t,this.appCheckProvider=e,this.appCheck=null===e||void 0===e?void 0:e.getImmediate({optional:!0}),this.appCheck||null===e||void 0===e||e.get().then((t=>this.appCheck=t))}getToken(t){return this.appCheck?this.appCheck.getToken(t):new Promise(((e,n)=>{setTimeout((()=>{this.appCheck?this.getToken(t).then(e,n):e(null)}),0)}))}addTokenChangeListener(t){var e;null===(e=this.appCheckProvider)||void 0===e||e.get().then((e=>e.addTokenListener(t)))}notifyForInvalidToken(){gs(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Us{constructor(t,e,n){this.appName_=t,this.firebaseOptions_=e,this.authProvider_=n,this.auth_=null,this.auth_=n.getImmediate({optional:!0}),this.auth_||n.onInit((t=>this.auth_=t))}getToken(t){return this.auth_?this.auth_.getToken(t).catch((t=>t&&"auth/token-not-initialized"===t.code?(us("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(t))):new Promise(((e,n)=>{setTimeout((()=>{this.auth_?this.getToken(t).then(e,n):e(null)}),0)}))}addTokenChangeListener(t){this.auth_?this.auth_.addAuthTokenListener(t):this.authProvider_.get().then((e=>e.addAuthTokenListener(t)))}removeTokenChangeListener(t){this.authProvider_.get().then((e=>e.removeAuthTokenListener(t)))}notifyForInvalidToken(){let t='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?t+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?t+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':t+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',gs(t)}}class Vs{constructor(t){this.accessToken=t}getToken(t){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(t){t(this.accessToken)}removeTokenChangeListener(t){}notifyForInvalidToken(){}}Vs.OWNER="owner";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const js="5",zs="v",Bs="s",$s="r",Ws="f",Hs=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,qs="ls",Ks="p",Gs="ac",Ys="websocket",Qs="long_polling";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Xs{constructor(t,e,n,i,s=!1,r="",o=!1,a=!1){this.secure=e,this.namespace=n,this.webSocketOnly=i,this.nodeAdmin=s,this.persistenceKey=r,this.includeNamespaceInQueryParams=o,this.isUsingEmulator=a,this._host=t.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=ns.get("host:"+t)||this._host}isCacheableHost(){return"s-"===this.internalHost.substr(0,2)}isCustomHost(){return"firebaseio.com"!==this._domain&&"firebaseio-demo.com"!==this._domain}get host(){return this._host}set host(t){t!==this.internalHost&&(this.internalHost=t,this.isCacheableHost()&&ns.set("host:"+this._host,this.internalHost))}toString(){let t=this.toURLString();return this.persistenceKey&&(t+="<"+this.persistenceKey+">"),t}toURLString(){const t=this.secure?"https://":"http://",e=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${t}${this.host}/${e}`}}function Js(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function Zs(t,e,n){let i;if((0,s.vA)("string"===typeof e,"typeof type must == string"),(0,s.vA)("object"===typeof n,"typeof params must == object"),e===Ys)i=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else{if(e!==Qs)throw new Error("Unknown connection type: "+e);i=(t.secure?"https://":"http://")+t.internalHost+"/.lp?"}Js(t)&&(n["ns"]=t.namespace);const r=[];return Is(n,((t,e)=>{r.push(t+"="+e)})),i+r.join("&")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tr{constructor(){this.counters_={}}incrementCounter(t,e=1){(0,s.gR)(this.counters_,t)||(this.counters_[t]=0),this.counters_[t]+=e}get(){return(0,s.A4)(this.counters_)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const er={},nr={};function ir(t){const e=t.toString();return er[e]||(er[e]=new tr),er[e]}function sr(t,e){const n=t.toString();return nr[n]||(nr[n]=e()),nr[n]}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rr{constructor(t){this.onMessage_=t,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(t,e){this.closeAfterResponse=t,this.onClose=e,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(t,e){this.pendingResponses[t]=e;while(this.pendingResponses[this.currentResponseNum]){const t=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let e=0;e<t.length;++e)t[e]&&Ds((()=>{this.onMessage_(t[e])}));if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const or="start",ar="close",cr="pLPCommand",lr="pRTLPCB",hr="id",ur="pw",dr="ser",fr="cb",pr="seg",gr="ts",mr="d",yr="dframe",vr=1870,_r=30,br=vr-_r,wr=25e3,Tr=3e4;class xr{constructor(t,e,n,i,s,r,o){this.connId=t,this.repoInfo=e,this.applicationId=n,this.appCheckToken=i,this.authToken=s,this.transportSessionId=r,this.lastSessionId=o,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=ds(t),this.stats_=ir(e),this.urlFn=t=>(this.appCheckToken&&(t[Gs]=this.appCheckToken),Zs(e,Qs,t))}open(t,e){this.curSegmentNum=0,this.onDisconnect_=e,this.myPacketOrderer=new rr(t),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout((()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null}),Math.floor(Tr)),vs((()=>{if(this.isClosed_)return;this.scriptTagHolder=new Er(((...t)=>{const[e,n,i,s,r]=t;if(this.incrementIncomingBytes_(t),this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,e===or)this.id=n,this.password=i;else{if(e!==ar)throw new Error("Unrecognized command received: "+e);n?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(n,(()=>{this.onClosed_()}))):this.onClosed_()}}),((...t)=>{const[e,n]=t;this.incrementIncomingBytes_(t),this.myPacketOrderer.handleResponse(e,n)}),(()=>{this.onClosed_()}),this.urlFn);const t={};t[or]="t",t[dr]=Math.floor(1e8*Math.random()),this.scriptTagHolder.uniqueCallbackIdentifier&&(t[fr]=this.scriptTagHolder.uniqueCallbackIdentifier),t[zs]=js,this.transportSessionId&&(t[Bs]=this.transportSessionId),this.lastSessionId&&(t[qs]=this.lastSessionId),this.applicationId&&(t[Ks]=this.applicationId),this.appCheckToken&&(t[Gs]=this.appCheckToken),"undefined"!==typeof location&&location.hostname&&Hs.test(location.hostname)&&(t[$s]=Ws);const e=this.urlFn(t);this.log_("Connecting via long-poll to "+e),this.scriptTagHolder.addTag(e,(()=>{}))}))}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){xr.forceAllow_=!0}static forceDisallow(){xr.forceDisallow_=!0}static isAvailable(){return!(0,s.$g)()&&(!!xr.forceAllow_||!xr.forceDisallow_&&"undefined"!==typeof document&&null!=document.createElement&&!ks()&&!As())}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(t){const e=(0,s.As)(t);this.bytesSent+=e.length,this.stats_.incrementCounter("bytes_sent",e.length);const n=(0,s.KA)(e),i=Cs(n,br);for(let s=0;s<i.length;s++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[s]),this.curSegmentNum++}addDisconnectPingFrame(t,e){if((0,s.$g)())return;this.myDisconnFrame=document.createElement("iframe");const n={};n[yr]="t",n[hr]=t,n[ur]=e,this.myDisconnFrame.src=this.urlFn(n),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(t){const e=(0,s.As)(t).length;this.bytesReceived+=e,this.stats_.incrementCounter("bytes_received",e)}}class Er{constructor(t,e,n,i){if(this.onDisconnect=n,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(1e8*Math.random()),this.sendNewPolls=!0,(0,s.$g)())this.commandCB=t,this.onMessageCB=e;else{this.uniqueCallbackIdentifier=rs(),window[cr+this.uniqueCallbackIdentifier]=t,window[lr+this.uniqueCallbackIdentifier]=e,this.myIFrame=Er.createIFrame_();let n="";if(this.myIFrame.src&&"javascript:"===this.myIFrame.src.substr(0,11)){const t=document.domain;n='<script>document.domain="'+t+'";<\/script>'}const i="<html><body>"+n+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(i),this.myIFrame.doc.close()}catch(r){us("frame writing exception"),r.stack&&us(r.stack),us(r)}}}static createIFrame_(){const t=document.createElement("iframe");if(t.style.display="none",!document.body)throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";document.body.appendChild(t);try{const e=t.contentWindow.document;e||us("No IE domain setting required")}catch(e){const n=document.domain;t.src="javascript:void((function(){document.open();document.domain='"+n+"';document.close();})())"}return t.contentDocument?t.doc=t.contentDocument:t.contentWindow?t.doc=t.contentWindow.document:t.document&&(t.doc=t.document),t}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout((()=>{null!==this.myIFrame&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)}),Math.floor(0)));const t=this.onDisconnect;t&&(this.onDisconnect=null,t())}startLongPoll(t,e){this.myID=t,this.myPW=e,this.alive=!0;while(this.newRequest_());}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const t={};t[hr]=this.myID,t[ur]=this.myPW,t[dr]=this.currentSerial;let e=this.urlFn(t),n="",i=0;while(this.pendingSegs.length>0){const t=this.pendingSegs[0];if(!(t.d.length+_r+n.length<=vr))break;{const t=this.pendingSegs.shift();n=n+"&"+pr+i+"="+t.seg+"&"+gr+i+"="+t.ts+"&"+mr+i+"="+t.d,i++}}return e+=n,this.addLongPollTag_(e,this.currentSerial),!0}return!1}enqueueSegment(t,e,n){this.pendingSegs.push({seg:t,ts:e,d:n}),this.alive&&this.newRequest_()}addLongPollTag_(t,e){this.outstandingRequests.add(e);const n=()=>{this.outstandingRequests.delete(e),this.newRequest_()},i=setTimeout(n,Math.floor(wr)),s=()=>{clearTimeout(i),n()};this.addTag(t,s)}addTag(t,e){(0,s.$g)()?this.doNodeLongPoll(t,e):setTimeout((()=>{try{if(!this.sendNewPolls)return;const n=this.myIFrame.doc.createElement("script");n.type="text/javascript",n.async=!0,n.src=t,n.onload=n.onreadystatechange=function(){const t=n.readyState;t&&"loaded"!==t&&"complete"!==t||(n.onload=n.onreadystatechange=null,n.parentNode&&n.parentNode.removeChild(n),e())},n.onerror=()=>{us("Long-poll script failed to load: "+t),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(n)}catch(n){}}),Math.floor(1))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cr=16384,Ir=45e3;let Sr=null;"undefined"!==typeof MozWebSocket?Sr=MozWebSocket:"undefined"!==typeof WebSocket&&(Sr=WebSocket);class kr{constructor(t,e,n,i,s,r,o){this.connId=t,this.applicationId=n,this.appCheckToken=i,this.authToken=s,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=ds(this.connId),this.stats_=ir(e),this.connURL=kr.connectionURL_(e,r,o,i,n),this.nodeAdmin=e.nodeAdmin}static connectionURL_(t,e,n,i,r){const o={};return o[zs]=js,!(0,s.$g)()&&"undefined"!==typeof location&&location.hostname&&Hs.test(location.hostname)&&(o[$s]=Ws),e&&(o[Bs]=e),n&&(o[qs]=n),i&&(o[Gs]=i),r&&(o[Ks]=r),Zs(t,Ys,o)}open(t,e){this.onDisconnect=e,this.onMessage=t,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,ns.set("previous_websocket_failure",!0);try{let t;if((0,s.$g)()){const e=this.nodeAdmin?"AdminNode":"Node";t={headers:{"User-Agent":`Firebase/${js}/${Xi}/${process.platform}/${e}`,"X-Firebase-GMPID":this.applicationId||""}},this.authToken&&(t.headers["Authorization"]=`Bearer ${this.authToken}`),this.appCheckToken&&(t.headers["X-Firebase-AppCheck"]=this.appCheckToken);const n={NODE_ENV:"production",BASE_URL:"/test/"},i=0===this.connURL.indexOf("wss://")?n["HTTPS_PROXY"]||n["https_proxy"]:n["HTTP_PROXY"]||n["http_proxy"];i&&(t["proxy"]={origin:i})}this.mySock=new Sr(this.connURL,[],t)}catch(n){this.log_("Error instantiating WebSocket.");const t=n.message||n.data;return t&&this.log_(t),void this.onClosed_()}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=t=>{this.handleIncomingFrame(t)},this.mySock.onerror=t=>{this.log_("WebSocket error.  Closing connection.");const e=t.message||t.data;e&&this.log_(e),this.onClosed_()}}start(){}static forceDisallow(){kr.forceDisallow_=!0}static isAvailable(){let t=!1;if("undefined"!==typeof navigator&&navigator.userAgent){const e=/Android ([0-9]{0,}\.[0-9]{0,})/,n=navigator.userAgent.match(e);n&&n.length>1&&parseFloat(n[1])<4.4&&(t=!0)}return!t&&null!==Sr&&!kr.forceDisallow_}static previouslyFailed(){return ns.isInMemoryStorage||!0===ns.get("previous_websocket_failure")}markConnectionHealthy(){ns.remove("previous_websocket_failure")}appendFrame_(t){if(this.frames.push(t),this.frames.length===this.totalFrames){const t=this.frames.join("");this.frames=null;const e=(0,s.$L)(t);this.onMessage(e)}}handleNewFrameCount_(t){this.totalFrames=t,this.frames=[]}extractFrameCount_(t){if((0,s.vA)(null===this.frames,"We already have a frame buffer"),t.length<=6){const e=Number(t);if(!isNaN(e))return this.handleNewFrameCount_(e),null}return this.handleNewFrameCount_(1),t}handleIncomingFrame(t){if(null===this.mySock)return;const e=t["data"];if(this.bytesReceived+=e.length,this.stats_.incrementCounter("bytes_received",e.length),this.resetKeepAlive(),null!==this.frames)this.appendFrame_(e);else{const t=this.extractFrameCount_(e);null!==t&&this.appendFrame_(t)}}send(t){this.resetKeepAlive();const e=(0,s.As)(t);this.bytesSent+=e.length,this.stats_.incrementCounter("bytes_sent",e.length);const n=Cs(e,Cr);n.length>1&&this.sendString_(String(n.length));for(let i=0;i<n.length;i++)this.sendString_(n[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval((()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()}),Math.floor(Ir))}sendString_(t){try{this.mySock.send(t)}catch(e){this.log_("Exception thrown from WebSocket.send():",e.message||e.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}kr.responsesRequiredToBeHealthy=2,kr.healthyTimeout=3e4;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ar{constructor(t){this.initTransports_(t)}static get ALL_TRANSPORTS(){return[xr,kr]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(t){const e=kr&&kr["isAvailable"]();let n=e&&!kr.previouslyFailed();if(t.webSocketOnly&&(e||gs("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),n=!0),n)this.transports_=[kr];else{const t=this.transports_=[];for(const e of Ar.ALL_TRANSPORTS)e&&e["isAvailable"]()&&t.push(e);Ar.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}Ar.globalTransportInitialized_=!1;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Or=6e4,Rr=5e3,Pr=10240,Nr=102400,Dr="t",Mr="d",Lr="s",Fr="r",Ur="e",Vr="o",jr="a",zr="n",Br="p",$r="h";class Wr{constructor(t,e,n,i,s,r,o,a,c,l){this.id=t,this.repoInfo_=e,this.applicationId_=n,this.appCheckToken_=i,this.authToken_=s,this.onMessage_=r,this.onReady_=o,this.onDisconnect_=a,this.onKill_=c,this.lastSessionId=l,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=ds("c:"+this.id+":"),this.transportManager_=new Ar(e),this.log_("Connection created"),this.start_()}start_(){const t=this.transportManager_.initialTransport();this.conn_=new t(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=t["responsesRequiredToBeHealthy"]||0;const e=this.connReceiver_(this.conn_),n=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout((()=>{this.conn_&&this.conn_.open(e,n)}),Math.floor(0));const i=t["healthyTimeout"]||0;i>0&&(this.healthyTimeout_=Ls((()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>Nr?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>Pr?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))}),Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(t){return e=>{t===this.conn_?this.onConnectionLost_(e):t===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(t){return e=>{2!==this.state_&&(t===this.rx_?this.onPrimaryMessageReceived_(e):t===this.secondaryConn_?this.onSecondaryMessageReceived_(e):this.log_("message on old connection"))}}sendRequest(t){const e={t:"d",d:t};this.sendData_(e)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(t){if(Dr in t){const e=t[Dr];e===jr?this.upgradeIfSecondaryHealthy_():e===Fr?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),this.tx_!==this.secondaryConn_&&this.rx_!==this.secondaryConn_||this.close()):e===Vr&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(t){const e=xs("t",t),n=xs("d",t);if("c"===e)this.onSecondaryControl_(n);else{if("d"!==e)throw new Error("Unknown protocol layer: "+e);this.pendingDataMessages.push(n)}}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:Br,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:jr,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:zr,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(t){const e=xs("t",t),n=xs("d",t);"c"===e?this.onControl_(n):"d"===e&&this.onDataMessage_(n)}onDataMessage_(t){this.onPrimaryResponse_(),this.onMessage_(t)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(t){const e=xs(Dr,t);if(Mr in t){const n=t[Mr];if(e===$r){const t=Object.assign({},n);this.repoInfo_.isUsingEmulator&&(t.h=this.repoInfo_.host),this.onHandshake_(t)}else if(e===zr){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let t=0;t<this.pendingDataMessages.length;++t)this.onDataMessage_(this.pendingDataMessages[t]);this.pendingDataMessages=[],this.tryCleanupConnection()}else e===Lr?this.onConnectionShutdown_(n):e===Fr?this.onReset_(n):e===Ur?fs("Server Error: "+n):e===Vr?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):fs("Unknown control packet command: "+e)}}onHandshake_(t){const e=t.ts,n=t.v,i=t.h;this.sessionId=t.s,this.repoInfo_.host=i,0===this.state_&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,e),js!==n&&gs("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const t=this.transportManager_.upgradeTransport();t&&this.startUpgrade_(t)}startUpgrade_(t){this.secondaryConn_=new t(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=t["responsesRequiredToBeHealthy"]||0;const e=this.connReceiver_(this.secondaryConn_),n=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(e,n),Ls((()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())}),Math.floor(Or))}onReset_(t){this.log_("Reset packet received.  New host: "+t),this.repoInfo_.host=t,1===this.state_?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(t,e){this.log_("Realtime connection established."),this.conn_=t,this.state_=1,this.onReady_&&(this.onReady_(e,this.sessionId),this.onReady_=null),0===this.primaryResponsesRequired_?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Ls((()=>{this.sendPingOnPrimaryIfNecessary_()}),Math.floor(Rr))}sendPingOnPrimaryIfNecessary_(){this.isHealthy_||1!==this.state_||(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:Br,d:{}}}))}onSecondaryConnectionLost_(){const t=this.secondaryConn_;this.secondaryConn_=null,this.tx_!==t&&this.rx_!==t||this.close()}onConnectionLost_(t){this.conn_=null,t||0!==this.state_?1===this.state_&&this.log_("Realtime connection lost."):(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(ns.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)),this.close()}onConnectionShutdown_(t){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(t),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(t){if(1!==this.state_)throw"Connection is not connected";this.tx_.send(t)}close(){2!==this.state_&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hr{put(t,e,n,i){}merge(t,e,n,i){}refreshAuthToken(t){}refreshAppCheckToken(t){}onDisconnectPut(t,e,n){}onDisconnectMerge(t,e,n){}onDisconnectCancel(t,e){}reportStats(t){}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qr{constructor(t){this.allowedEvents_=t,this.listeners_={},(0,s.vA)(Array.isArray(t)&&t.length>0,"Requires a non-empty array")}trigger(t,...e){if(Array.isArray(this.listeners_[t])){const n=[...this.listeners_[t]];for(let t=0;t<n.length;t++)n[t].callback.apply(n[t].context,e)}}on(t,e,n){this.validateEventType_(t),this.listeners_[t]=this.listeners_[t]||[],this.listeners_[t].push({callback:e,context:n});const i=this.getInitialEvent(t);i&&e.apply(n,i)}off(t,e,n){this.validateEventType_(t);const i=this.listeners_[t]||[];for(let s=0;s<i.length;s++)if(i[s].callback===e&&(!n||n===i[s].context))return void i.splice(s,1)}validateEventType_(t){(0,s.vA)(this.allowedEvents_.find((e=>e===t)),"Unknown event: "+t)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kr extends qr{constructor(){super(["online"]),this.online_=!0,"undefined"===typeof window||"undefined"===typeof window.addEventListener||(0,s.jZ)()||(window.addEventListener("online",(()=>{this.online_||(this.online_=!0,this.trigger("online",!0))}),!1),window.addEventListener("offline",(()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))}),!1))}static getInstance(){return new Kr}getInitialEvent(t){return(0,s.vA)("online"===t,"Unknown event type: "+t),[this.online_]}currentlyOnline(){return this.online_}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gr=32,Yr=768;class Qr{constructor(t,e){if(void 0===e){this.pieces_=t.split("/");let e=0;for(let t=0;t<this.pieces_.length;t++)this.pieces_[t].length>0&&(this.pieces_[e]=this.pieces_[t],e++);this.pieces_.length=e,this.pieceNum_=0}else this.pieces_=t,this.pieceNum_=e}toString(){let t="";for(let e=this.pieceNum_;e<this.pieces_.length;e++)""!==this.pieces_[e]&&(t+="/"+this.pieces_[e]);return t||"/"}}function Xr(){return new Qr("")}function Jr(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function Zr(t){return t.pieces_.length-t.pieceNum_}function to(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new Qr(t.pieces_,e)}function eo(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function no(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)""!==t.pieces_[n]&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function io(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function so(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new Qr(e,0)}function ro(t,e){const n=[];for(let i=t.pieceNum_;i<t.pieces_.length;i++)n.push(t.pieces_[i]);if(e instanceof Qr)for(let i=e.pieceNum_;i<e.pieces_.length;i++)n.push(e.pieces_[i]);else{const t=e.split("/");for(let e=0;e<t.length;e++)t[e].length>0&&n.push(t[e])}return new Qr(n,0)}function oo(t){return t.pieceNum_>=t.pieces_.length}function ao(t,e){const n=Jr(t),i=Jr(e);if(null===n)return e;if(n===i)return ao(to(t),to(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function co(t,e){if(Zr(t)!==Zr(e))return!1;for(let n=t.pieceNum_,i=e.pieceNum_;n<=t.pieces_.length;n++,i++)if(t.pieces_[n]!==e.pieces_[i])return!1;return!0}function lo(t,e){let n=t.pieceNum_,i=e.pieceNum_;if(Zr(t)>Zr(e))return!1;while(n<t.pieces_.length){if(t.pieces_[n]!==e.pieces_[i])return!1;++n,++i}return!0}class ho{constructor(t,e){this.errorPrefix_=e,this.parts_=io(t,0),this.byteLength_=Math.max(1,this.parts_.length);for(let n=0;n<this.parts_.length;n++)this.byteLength_+=(0,s.OE)(this.parts_[n]);po(this)}}function uo(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=(0,s.OE)(e),po(t)}function fo(t){const e=t.parts_.pop();t.byteLength_-=(0,s.OE)(e),t.parts_.length>0&&(t.byteLength_-=1)}function po(t){if(t.byteLength_>Yr)throw new Error(t.errorPrefix_+"has a key path longer than "+Yr+" bytes ("+t.byteLength_+").");if(t.parts_.length>Gr)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+Gr+") or object contains a cycle "+go(t))}function go(t){return 0===t.parts_.length?"":"in property '"+t.parts_.join(".")+"'"}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mo extends qr{constructor(){let t,e;super(["visible"]),"undefined"!==typeof document&&"undefined"!==typeof document.addEventListener&&("undefined"!==typeof document["hidden"]?(e="visibilitychange",t="hidden"):"undefined"!==typeof document["mozHidden"]?(e="mozvisibilitychange",t="mozHidden"):"undefined"!==typeof document["msHidden"]?(e="msvisibilitychange",t="msHidden"):"undefined"!==typeof document["webkitHidden"]&&(e="webkitvisibilitychange",t="webkitHidden")),this.visible_=!0,e&&document.addEventListener(e,(()=>{const e=!document[t];e!==this.visible_&&(this.visible_=e,this.trigger("visible",e))}),!1)}static getInstance(){return new mo}getInitialEvent(t){return(0,s.vA)("visible"===t,"Unknown event type: "+t),[this.visible_]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yo=1e3,vo=3e5,_o=3e4,bo=1.3,wo=3e4,To="server_kill",xo=3;class Eo extends Hr{constructor(t,e,n,i,r,o,a,c){if(super(),this.repoInfo_=t,this.applicationId_=e,this.onDataUpdate_=n,this.onConnectStatus_=i,this.onServerInfoUpdate_=r,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=c,this.id=Eo.nextPersistentConnectionId_++,this.log_=ds("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=yo,this.maxReconnectDelay_=vo,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,c&&!(0,s.$g)())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");mo.getInstance().on("visible",this.onVisible_,this),-1===t.host.indexOf("fblocal")&&Kr.getInstance().on("online",this.onOnline_,this)}sendRequest(t,e,n){const i=++this.requestNumber_,r={r:i,a:t,b:e};this.log_((0,s.As)(r)),(0,s.vA)(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(r),n&&(this.requestCBHash_[i]=n)}get(t){this.initConnection_();const e=new s.cY,n={p:t._path.toString(),q:t._queryObject},i={action:"g",request:n,onComplete:t=>{const n=t["d"];"ok"===t["s"]?e.resolve(n):e.reject(n)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const r=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(r),e.promise}listen(t,e,n,i){this.initConnection_();const r=t._queryIdentifier,o=t._path.toString();this.log_("Listen called for "+o+" "+r),this.listens.has(o)||this.listens.set(o,new Map),(0,s.vA)(t._queryParams.isDefault()||!t._queryParams.loadsAllData(),"listen() called for non-default but complete query"),(0,s.vA)(!this.listens.get(o).has(r),"listen() called twice for same path/queryId.");const a={onComplete:i,hashFn:e,query:t,tag:n};this.listens.get(o).set(r,a),this.connected_&&this.sendListen_(a)}sendGet_(t){const e=this.outstandingGets_[t];this.sendRequest("g",e.request,(n=>{delete this.outstandingGets_[t],this.outstandingGetCount_--,0===this.outstandingGetCount_&&(this.outstandingGets_=[]),e.onComplete&&e.onComplete(n)}))}sendListen_(t){const e=t.query,n=e._path.toString(),i=e._queryIdentifier;this.log_("Listen on "+n+" for "+i);const s={p:n},r="q";t.tag&&(s["q"]=e._queryObject,s["t"]=t.tag),s["h"]=t.hashFn(),this.sendRequest(r,s,(s=>{const r=s["d"],o=s["s"];Eo.warnOnListenWarnings_(r,e);const a=this.listens.get(n)&&this.listens.get(n).get(i);a===t&&(this.log_("listen response",s),"ok"!==o&&this.removeListen_(n,i),t.onComplete&&t.onComplete(o,r))}))}static warnOnListenWarnings_(t,e){if(t&&"object"===typeof t&&(0,s.gR)(t,"w")){const n=(0,s.yw)(t,"w");if(Array.isArray(n)&&~n.indexOf("no_index")){const t='".indexOn": "'+e._queryParams.getIndex().toString()+'"',n=e._path.toString();gs(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${t} at ${n} to your security rules for better performance.`)}}}refreshAuthToken(t){this.authToken_=t,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},(()=>{})),this.reduceReconnectDelayIfAdminCredential_(t)}reduceReconnectDelayIfAdminCredential_(t){const e=t&&40===t.length;(e||(0,s.qc)(t))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=_o)}refreshAppCheckToken(t){this.appCheckToken_=t,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},(()=>{}))}tryAuth(){if(this.connected_&&this.authToken_){const t=this.authToken_,e=(0,s.Cv)(t)?"auth":"gauth",n={cred:t};null===this.authOverride_?n["noauth"]=!0:"object"===typeof this.authOverride_&&(n["authvar"]=this.authOverride_),this.sendRequest(e,n,(e=>{const n=e["s"],i=e["d"]||"error";this.authToken_===t&&("ok"===n?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(n,i))}))}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},(t=>{const e=t["s"],n=t["d"]||"error";"ok"===e?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(e,n)}))}unlisten(t,e){const n=t._path.toString(),i=t._queryIdentifier;this.log_("Unlisten called for "+n+" "+i),(0,s.vA)(t._queryParams.isDefault()||!t._queryParams.loadsAllData(),"unlisten() called for non-default but complete query");const r=this.removeListen_(n,i);r&&this.connected_&&this.sendUnlisten_(n,i,t._queryObject,e)}sendUnlisten_(t,e,n,i){this.log_("Unlisten on "+t+" for "+e);const s={p:t},r="n";i&&(s["q"]=n,s["t"]=i),this.sendRequest(r,s)}onDisconnectPut(t,e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",t,e,n):this.onDisconnectRequestQueue_.push({pathString:t,action:"o",data:e,onComplete:n})}onDisconnectMerge(t,e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",t,e,n):this.onDisconnectRequestQueue_.push({pathString:t,action:"om",data:e,onComplete:n})}onDisconnectCancel(t,e){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",t,null,e):this.onDisconnectRequestQueue_.push({pathString:t,action:"oc",data:null,onComplete:e})}sendOnDisconnect_(t,e,n,i){const s={p:e,d:n};this.log_("onDisconnect "+t,s),this.sendRequest(t,s,(t=>{i&&setTimeout((()=>{i(t["s"],t["d"])}),Math.floor(0))}))}put(t,e,n,i){this.putInternal("p",t,e,n,i)}merge(t,e,n,i){this.putInternal("m",t,e,n,i)}putInternal(t,e,n,i,s){this.initConnection_();const r={p:e,d:n};void 0!==s&&(r["h"]=s),this.outstandingPuts_.push({action:t,request:r,onComplete:i}),this.outstandingPutCount_++;const o=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(o):this.log_("Buffering put: "+e)}sendPut_(t){const e=this.outstandingPuts_[t].action,n=this.outstandingPuts_[t].request,i=this.outstandingPuts_[t].onComplete;this.outstandingPuts_[t].queued=this.connected_,this.sendRequest(e,n,(n=>{this.log_(e+" response",n),delete this.outstandingPuts_[t],this.outstandingPutCount_--,0===this.outstandingPutCount_&&(this.outstandingPuts_=[]),i&&i(n["s"],n["d"])}))}reportStats(t){if(this.connected_){const e={c:t};this.log_("reportStats",e),this.sendRequest("s",e,(t=>{const e=t["s"];if("ok"!==e){const e=t["d"];this.log_("reportStats","Error sending stats: "+e)}}))}}onDataMessage_(t){if("r"in t){this.log_("from server: "+(0,s.As)(t));const e=t["r"],n=this.requestCBHash_[e];n&&(delete this.requestCBHash_[e],n(t["b"]))}else{if("error"in t)throw"A server-side error has occurred: "+t["error"];"a"in t&&this.onDataPush_(t["a"],t["b"])}}onDataPush_(t,e){this.log_("handleServerMessage",t,e),"d"===t?this.onDataUpdate_(e["p"],e["d"],!1,e["t"]):"m"===t?this.onDataUpdate_(e["p"],e["d"],!0,e["t"]):"c"===t?this.onListenRevoked_(e["p"],e["q"]):"ac"===t?this.onAuthRevoked_(e["s"],e["d"]):"apc"===t?this.onAppCheckRevoked_(e["s"],e["d"]):"sd"===t?this.onSecurityDebugPacket_(e):fs("Unrecognized action received from server: "+(0,s.As)(t)+"\nAre you using the latest client?")}onReady_(t,e){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=(new Date).getTime(),this.handleTimestamp_(t),this.lastSessionId=e,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(t){(0,s.vA)(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout((()=>{this.establishConnectionTimer_=null,this.establishConnection_()}),Math.floor(t))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(t){t&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=yo,this.realtime_||this.scheduleConnect_(0)),this.visible_=t}onOnline_(t){t?(this.log_("Browser went online."),this.reconnectDelay_=yo,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){if(this.visible_){if(this.lastConnectionEstablishedTime_){const t=(new Date).getTime()-this.lastConnectionEstablishedTime_;t>wo&&(this.reconnectDelay_=yo),this.lastConnectionEstablishedTime_=null}}else this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=(new Date).getTime();const t=(new Date).getTime()-this.lastConnectionAttemptTime_;let e=Math.max(0,this.reconnectDelay_-t);e=Math.random()*e,this.log_("Trying to reconnect in "+e+"ms"),this.scheduleConnect_(e),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*bo)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=(new Date).getTime(),this.lastConnectionEstablishedTime_=null;const t=this.onDataMessage_.bind(this),e=this.onReady_.bind(this),n=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+Eo.nextConnectionId_++,r=this.lastSessionId;let o=!1,a=null;const c=function(){a?a.close():(o=!0,n())},l=function(t){(0,s.vA)(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(t)};this.realtime_={close:c,sendRequest:l};const h=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[s,c]=await Promise.all([this.authTokenProvider_.getToken(h),this.appCheckTokenProvider_.getToken(h)]);o?us("getToken() completed but was canceled"):(us("getToken() completed. Creating connection."),this.authToken_=s&&s.accessToken,this.appCheckToken_=c&&c.token,a=new Wr(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,t,e,n,(t=>{gs(t+" ("+this.repoInfo_.toString()+")"),this.interrupt(To)}),r))}catch(fs){this.log_("Failed to get token: "+fs),o||(this.repoInfo_.nodeAdmin&&gs(fs),c())}}}interrupt(t){us("Interrupting connection for reason: "+t),this.interruptReasons_[t]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(t){us("Resuming connection for reason: "+t),delete this.interruptReasons_[t],(0,s.Im)(this.interruptReasons_)&&(this.reconnectDelay_=yo,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(t){const e=t-(new Date).getTime();this.onServerInfoUpdate_({serverTimeOffset:e})}cancelSentTransactions_(){for(let t=0;t<this.outstandingPuts_.length;t++){const e=this.outstandingPuts_[t];e&&"h"in e.request&&e.queued&&(e.onComplete&&e.onComplete("disconnect"),delete this.outstandingPuts_[t],this.outstandingPutCount_--)}0===this.outstandingPutCount_&&(this.outstandingPuts_=[])}onListenRevoked_(t,e){let n;n=e?e.map((t=>Es(t))).join("$"):"default";const i=this.removeListen_(t,n);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(t,e){const n=new Qr(t).toString();let i;if(this.listens.has(n)){const t=this.listens.get(n);i=t.get(e),t.delete(e),0===t.size&&this.listens.delete(n)}else i=void 0;return i}onAuthRevoked_(t,e){us("Auth token revoked: "+t+"/"+e),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),"invalid_token"!==t&&"permission_denied"!==t||(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=xo&&(this.reconnectDelay_=_o,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(t,e){us("App check token revoked: "+t+"/"+e),this.appCheckToken_=null,this.forceTokenRefresh_=!0,"invalid_token"!==t&&"permission_denied"!==t||(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=xo&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(t){this.securityDebugCallback_?this.securityDebugCallback_(t):"msg"in t&&console.log("FIREBASE: "+t["msg"].replace("\n","\nFIREBASE: "))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const t of this.listens.values())for(const e of t.values())this.sendListen_(e);for(let t=0;t<this.outstandingPuts_.length;t++)this.outstandingPuts_[t]&&this.sendPut_(t);while(this.onDisconnectRequestQueue_.length){const t=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(t.action,t.pathString,t.data,t.onComplete)}for(let t=0;t<this.outstandingGets_.length;t++)this.outstandingGets_[t]&&this.sendGet_(t)}sendConnectStats_(){const t={};let e="js";(0,s.$g)()&&(e=this.repoInfo_.nodeAdmin?"admin_node":"node"),t["sdk."+e+"."+Xi.replace(/\./g,"-")]=1,(0,s.jZ)()?t["framework.cordova"]=1:(0,s.lV)()&&(t["framework.reactnative"]=1),this.reportStats(t)}shouldReconnect_(){const t=Kr.getInstance().currentlyOnline();return(0,s.Im)(this.interruptReasons_)&&t}}Eo.nextPersistentConnectionId_=0,Eo.nextConnectionId_=0;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Co{constructor(t,e){this.name=t,this.node=e}static Wrap(t,e){return new Co(t,e)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Io{getCompare(){return this.compare.bind(this)}indexedValueChanged(t,e){const n=new Co(_s,t),i=new Co(_s,e);return 0!==this.compare(n,i)}minPost(){return Co.MIN}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let So;class ko extends Io{static get __EMPTY_NODE(){return So}static set __EMPTY_NODE(t){So=t}compare(t,e){return ws(t.name,e.name)}isDefinedOn(t){throw(0,s.Hk)("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(t,e){return!1}minPost(){return Co.MIN}maxPost(){return new Co(bs,So)}makePost(t,e){return(0,s.vA)("string"===typeof t,"KeyIndex indexValue must always be a string."),new Co(t,So)}toString(){return".key"}}const Ao=new ko;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oo{constructor(t,e,n,i,s=null){this.isReverse_=i,this.resultGenerator_=s,this.nodeStack_=[];let r=1;while(!t.isEmpty())if(r=e?n(t.key,e):1,i&&(r*=-1),r<0)t=this.isReverse_?t.left:t.right;else{if(0===r){this.nodeStack_.push(t);break}this.nodeStack_.push(t),t=this.isReverse_?t.right:t.left}}getNext(){if(0===this.nodeStack_.length)return null;let t,e=this.nodeStack_.pop();if(t=this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value},this.isReverse_){e=e.left;while(!e.isEmpty())this.nodeStack_.push(e),e=e.right}else{e=e.right;while(!e.isEmpty())this.nodeStack_.push(e),e=e.left}return t}hasNext(){return this.nodeStack_.length>0}peek(){if(0===this.nodeStack_.length)return null;const t=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(t.key,t.value):{key:t.key,value:t.value}}}class Ro{constructor(t,e,n,i,s){this.key=t,this.value=e,this.color=null!=n?n:Ro.RED,this.left=null!=i?i:No.EMPTY_NODE,this.right=null!=s?s:No.EMPTY_NODE}copy(t,e,n,i,s){return new Ro(null!=t?t:this.key,null!=e?e:this.value,null!=n?n:this.color,null!=i?i:this.left,null!=s?s:this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||!!t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,n){let i=this;const s=n(t,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(t,e,n),null):0===s?i.copy(null,e,null,null,null):i.copy(null,null,null,null,i.right.insert(t,e,n)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return No.EMPTY_NODE;let t=this;return t.left.isRed_()||t.left.left.isRed_()||(t=t.moveRedLeft_()),t=t.copy(null,null,null,t.left.removeMin_(),null),t.fixUp_()}remove(t,e){let n,i;if(n=this,e(t,n.key)<0)n.left.isEmpty()||n.left.isRed_()||n.left.left.isRed_()||(n=n.moveRedLeft_()),n=n.copy(null,null,null,n.left.remove(t,e),null);else{if(n.left.isRed_()&&(n=n.rotateRight_()),n.right.isEmpty()||n.right.isRed_()||n.right.left.isRed_()||(n=n.moveRedRight_()),0===e(t,n.key)){if(n.right.isEmpty())return No.EMPTY_NODE;i=n.right.min_(),n=n.copy(i.key,i.value,null,null,n.right.removeMin_())}n=n.copy(null,null,null,null,n.right.remove(t,e))}return n.fixUp_()}isRed_(){return this.color}fixUp_(){let t=this;return t.right.isRed_()&&!t.left.isRed_()&&(t=t.rotateLeft_()),t.left.isRed_()&&t.left.left.isRed_()&&(t=t.rotateRight_()),t.left.isRed_()&&t.right.isRed_()&&(t=t.colorFlip_()),t}moveRedLeft_(){let t=this.colorFlip_();return t.right.left.isRed_()&&(t=t.copy(null,null,null,null,t.right.rotateRight_()),t=t.rotateLeft_(),t=t.colorFlip_()),t}moveRedRight_(){let t=this.colorFlip_();return t.left.left.isRed_()&&(t=t.rotateRight_(),t=t.colorFlip_()),t}rotateLeft_(){const t=this.copy(null,null,Ro.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight_(){const t=this.copy(null,null,Ro.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip_(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth_(){const t=this.check_();return Math.pow(2,t)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const t=this.left.check_();if(t!==this.right.check_())throw new Error("Black depths differ");return t+(this.isRed_()?0:1)}}Ro.RED=!0,Ro.BLACK=!1;class Po{copy(t,e,n,i,s){return this}insert(t,e,n){return new Ro(t,e,null)}remove(t,e){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class No{constructor(t,e=No.EMPTY_NODE){this.comparator_=t,this.root_=e}insert(t,e){return new No(this.comparator_,this.root_.insert(t,e,this.comparator_).copy(null,null,Ro.BLACK,null,null))}remove(t){return new No(this.comparator_,this.root_.remove(t,this.comparator_).copy(null,null,Ro.BLACK,null,null))}get(t){let e,n=this.root_;while(!n.isEmpty()){if(e=this.comparator_(t,n.key),0===e)return n.value;e<0?n=n.left:e>0&&(n=n.right)}return null}getPredecessorKey(t){let e,n=this.root_,i=null;while(!n.isEmpty()){if(e=this.comparator_(t,n.key),0===e){if(n.left.isEmpty())return i?i.key:null;n=n.left;while(!n.right.isEmpty())n=n.right;return n.key}e<0?n=n.left:e>0&&(i=n,n=n.right)}throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(t){return this.root_.inorderTraversal(t)}reverseTraversal(t){return this.root_.reverseTraversal(t)}getIterator(t){return new Oo(this.root_,null,this.comparator_,!1,t)}getIteratorFrom(t,e){return new Oo(this.root_,t,this.comparator_,!1,e)}getReverseIteratorFrom(t,e){return new Oo(this.root_,t,this.comparator_,!0,e)}getReverseIterator(t){return new Oo(this.root_,null,this.comparator_,!0,t)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Do(t,e){return ws(t.name,e.name)}function Mo(t,e){return ws(t,e)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Lo;function Fo(t){Lo=t}No.EMPTY_NODE=new Po;const Uo=function(t){return"number"===typeof t?"number:"+Ss(t):"string:"+t},Vo=function(t){if(t.isLeafNode()){const e=t.val();(0,s.vA)("string"===typeof e||"number"===typeof e||"object"===typeof e&&(0,s.gR)(e,".sv"),"Priority must be a string or number.")}else(0,s.vA)(t===Lo||t.isEmpty(),"priority of unexpected type.");(0,s.vA)(t===Lo||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
let jo,zo,Bo;class $o{constructor(t,e=$o.__childrenNodeConstructor.EMPTY_NODE){this.value_=t,this.priorityNode_=e,this.lazyHash_=null,(0,s.vA)(void 0!==this.value_&&null!==this.value_,"LeafNode shouldn't be created with null/undefined value."),Vo(this.priorityNode_)}static set __childrenNodeConstructor(t){jo=t}static get __childrenNodeConstructor(){return jo}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(t){return new $o(this.value_,t)}getImmediateChild(t){return".priority"===t?this.priorityNode_:$o.__childrenNodeConstructor.EMPTY_NODE}getChild(t){return oo(t)?this:".priority"===Jr(t)?this.priorityNode_:$o.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(t,e){return null}updateImmediateChild(t,e){return".priority"===t?this.updatePriority(e):e.isEmpty()&&".priority"!==t?this:$o.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(t,e).updatePriority(this.priorityNode_)}updateChild(t,e){const n=Jr(t);return null===n?e:e.isEmpty()&&".priority"!==n?this:((0,s.vA)(".priority"!==n||1===Zr(t),".priority must be the last token in a path"),this.updateImmediateChild(n,$o.__childrenNodeConstructor.EMPTY_NODE.updateChild(to(t),e)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(t,e){return!1}val(t){return t&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(null===this.lazyHash_){let t="";this.priorityNode_.isEmpty()||(t+="priority:"+Uo(this.priorityNode_.val())+":");const e=typeof this.value_;t+=e+":",t+="number"===e?Ss(this.value_):this.value_,this.lazyHash_=os(t)}return this.lazyHash_}getValue(){return this.value_}compareTo(t){return t===$o.__childrenNodeConstructor.EMPTY_NODE?1:t instanceof $o.__childrenNodeConstructor?-1:((0,s.vA)(t.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(t))}compareToLeafNode_(t){const e=typeof t.value_,n=typeof this.value_,i=$o.VALUE_TYPE_ORDER.indexOf(e),r=$o.VALUE_TYPE_ORDER.indexOf(n);return(0,s.vA)(i>=0,"Unknown leaf type: "+e),(0,s.vA)(r>=0,"Unknown leaf type: "+n),i===r?"object"===n?0:this.value_<t.value_?-1:this.value_===t.value_?0:1:r-i}withIndex(){return this}isIndexed(){return!0}equals(t){if(t===this)return!0;if(t.isLeafNode()){const e=t;return this.value_===e.value_&&this.priorityNode_.equals(e.priorityNode_)}return!1}}function Wo(t){zo=t}function Ho(t){Bo=t}$o.VALUE_TYPE_ORDER=["object","boolean","number","string"];class qo extends Io{compare(t,e){const n=t.node.getPriority(),i=e.node.getPriority(),s=n.compareTo(i);return 0===s?ws(t.name,e.name):s}isDefinedOn(t){return!t.getPriority().isEmpty()}indexedValueChanged(t,e){return!t.getPriority().equals(e.getPriority())}minPost(){return Co.MIN}maxPost(){return new Co(bs,new $o("[PRIORITY-POST]",Bo))}makePost(t,e){const n=zo(t);return new Co(e,new $o("[PRIORITY-POST]",n))}toString(){return".priority"}}const Ko=new qo,Go=Math.log(2);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yo{constructor(t){const e=t=>parseInt(Math.log(t)/Go,10),n=t=>parseInt(Array(t+1).join("1"),2);this.count=e(t+1),this.current_=this.count-1;const i=n(this.count);this.bits_=t+1&i}nextBitIsOne(){const t=!(this.bits_&1<<this.current_);return this.current_--,t}}const Qo=function(t,e,n,i){t.sort(e);const s=function(e,i){const r=i-e;let o,a;if(0===r)return null;if(1===r)return o=t[e],a=n?n(o):o,new Ro(a,o.node,Ro.BLACK,null,null);{const c=parseInt(r/2,10)+e,l=s(e,c),h=s(c+1,i);return o=t[c],a=n?n(o):o,new Ro(a,o.node,Ro.BLACK,l,h)}},r=function(e){let i=null,r=null,o=t.length;const a=function(e,i){const r=o-e,a=o;o-=e;const l=s(r+1,a),h=t[r],u=n?n(h):h;c(new Ro(u,h.node,i,null,l))},c=function(t){i?(i.left=t,i=t):(r=t,i=t)};for(let t=0;t<e.count;++t){const n=e.nextBitIsOne(),i=Math.pow(2,e.count-(t+1));n?a(i,Ro.BLACK):(a(i,Ro.BLACK),a(i,Ro.RED))}return r},o=new Yo(t.length),a=r(o);return new No(i||e,a)};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Xo;const Jo={};class Zo{constructor(t,e){this.indexes_=t,this.indexSet_=e}static get Default(){return(0,s.vA)(Jo&&Ko,"ChildrenNode.ts has not been loaded"),Xo=Xo||new Zo({".priority":Jo},{".priority":Ko}),Xo}get(t){const e=(0,s.yw)(this.indexes_,t);if(!e)throw new Error("No index defined for "+t);return e instanceof No?e:null}hasIndex(t){return(0,s.gR)(this.indexSet_,t.toString())}addIndex(t,e){(0,s.vA)(t!==Ao,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const n=[];let i=!1;const r=e.getIterator(Co.Wrap);let o,a=r.getNext();while(a)i=i||t.isDefinedOn(a.node),n.push(a),a=r.getNext();o=i?Qo(n,t.getCompare()):Jo;const c=t.toString(),l=Object.assign({},this.indexSet_);l[c]=t;const h=Object.assign({},this.indexes_);return h[c]=o,new Zo(h,l)}addToIndexes(t,e){const n=(0,s.kH)(this.indexes_,((n,i)=>{const r=(0,s.yw)(this.indexSet_,i);if((0,s.vA)(r,"Missing index implementation for "+i),n===Jo){if(r.isDefinedOn(t.node)){const n=[],i=e.getIterator(Co.Wrap);let s=i.getNext();while(s)s.name!==t.name&&n.push(s),s=i.getNext();return n.push(t),Qo(n,r.getCompare())}return Jo}{const i=e.get(t.name);let s=n;return i&&(s=s.remove(new Co(t.name,i))),s.insert(t,t.node)}}));return new Zo(n,this.indexSet_)}removeFromIndexes(t,e){const n=(0,s.kH)(this.indexes_,(n=>{if(n===Jo)return n;{const i=e.get(t.name);return i?n.remove(new Co(t.name,i)):n}}));return new Zo(n,this.indexSet_)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ta;class ea{constructor(t,e,n){this.children_=t,this.priorityNode_=e,this.indexMap_=n,this.lazyHash_=null,this.priorityNode_&&Vo(this.priorityNode_),this.children_.isEmpty()&&(0,s.vA)(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return ta||(ta=new ea(new No(Mo),null,Zo.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||ta}updatePriority(t){return this.children_.isEmpty()?this:new ea(this.children_,t,this.indexMap_)}getImmediateChild(t){if(".priority"===t)return this.getPriority();{const e=this.children_.get(t);return null===e?ta:e}}getChild(t){const e=Jr(t);return null===e?this:this.getImmediateChild(e).getChild(to(t))}hasChild(t){return null!==this.children_.get(t)}updateImmediateChild(t,e){if((0,s.vA)(e,"We should always be passing snapshot nodes"),".priority"===t)return this.updatePriority(e);{const n=new Co(t,e);let i,s;e.isEmpty()?(i=this.children_.remove(t),s=this.indexMap_.removeFromIndexes(n,this.children_)):(i=this.children_.insert(t,e),s=this.indexMap_.addToIndexes(n,this.children_));const r=i.isEmpty()?ta:this.priorityNode_;return new ea(i,r,s)}}updateChild(t,e){const n=Jr(t);if(null===n)return e;{(0,s.vA)(".priority"!==Jr(t)||1===Zr(t),".priority must be the last token in a path");const i=this.getImmediateChild(n).updateChild(to(t),e);return this.updateImmediateChild(n,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(t){if(this.isEmpty())return null;const e={};let n=0,i=0,s=!0;if(this.forEachChild(Ko,((r,o)=>{e[r]=o.val(t),n++,s&&ea.INTEGER_REGEXP_.test(r)?i=Math.max(i,Number(r)):s=!1})),!t&&s&&i<2*n){const t=[];for(const n in e)t[n]=e[n];return t}return t&&!this.getPriority().isEmpty()&&(e[".priority"]=this.getPriority().val()),e}hash(){if(null===this.lazyHash_){let t="";this.getPriority().isEmpty()||(t+="priority:"+Uo(this.getPriority().val())+":"),this.forEachChild(Ko,((e,n)=>{const i=n.hash();""!==i&&(t+=":"+e+":"+i)})),this.lazyHash_=""===t?"":os(t)}return this.lazyHash_}getPredecessorChildName(t,e,n){const i=this.resolveIndex_(n);if(i){const n=i.getPredecessorKey(new Co(t,e));return n?n.name:null}return this.children_.getPredecessorKey(t)}getFirstChildName(t){const e=this.resolveIndex_(t);if(e){const t=e.minKey();return t&&t.name}return this.children_.minKey()}getFirstChild(t){const e=this.getFirstChildName(t);return e?new Co(e,this.children_.get(e)):null}getLastChildName(t){const e=this.resolveIndex_(t);if(e){const t=e.maxKey();return t&&t.name}return this.children_.maxKey()}getLastChild(t){const e=this.getLastChildName(t);return e?new Co(e,this.children_.get(e)):null}forEachChild(t,e){const n=this.resolveIndex_(t);return n?n.inorderTraversal((t=>e(t.name,t.node))):this.children_.inorderTraversal(e)}getIterator(t){return this.getIteratorFrom(t.minPost(),t)}getIteratorFrom(t,e){const n=this.resolveIndex_(e);if(n)return n.getIteratorFrom(t,(t=>t));{const n=this.children_.getIteratorFrom(t.name,Co.Wrap);let i=n.peek();while(null!=i&&e.compare(i,t)<0)n.getNext(),i=n.peek();return n}}getReverseIterator(t){return this.getReverseIteratorFrom(t.maxPost(),t)}getReverseIteratorFrom(t,e){const n=this.resolveIndex_(e);if(n)return n.getReverseIteratorFrom(t,(t=>t));{const n=this.children_.getReverseIteratorFrom(t.name,Co.Wrap);let i=n.peek();while(null!=i&&e.compare(i,t)>0)n.getNext(),i=n.peek();return n}}compareTo(t){return this.isEmpty()?t.isEmpty()?0:-1:t.isLeafNode()||t.isEmpty()?1:t===ia?-1:0}withIndex(t){if(t===Ao||this.indexMap_.hasIndex(t))return this;{const e=this.indexMap_.addIndex(t,this.children_);return new ea(this.children_,this.priorityNode_,e)}}isIndexed(t){return t===Ao||this.indexMap_.hasIndex(t)}equals(t){if(t===this)return!0;if(t.isLeafNode())return!1;{const e=t;if(this.getPriority().equals(e.getPriority())){if(this.children_.count()===e.children_.count()){const t=this.getIterator(Ko),n=e.getIterator(Ko);let i=t.getNext(),s=n.getNext();while(i&&s){if(i.name!==s.name||!i.node.equals(s.node))return!1;i=t.getNext(),s=n.getNext()}return null===i&&null===s}return!1}return!1}}resolveIndex_(t){return t===Ao?null:this.indexMap_.get(t.toString())}}ea.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class na extends ea{constructor(){super(new No(Mo),ea.EMPTY_NODE,Zo.Default)}compareTo(t){return t===this?0:1}equals(t){return t===this}getPriority(){return this}getImmediateChild(t){return ea.EMPTY_NODE}isEmpty(){return!1}}const ia=new na;Object.defineProperties(Co,{MIN:{value:new Co(_s,ea.EMPTY_NODE)},MAX:{value:new Co(bs,ia)}}),ko.__EMPTY_NODE=ea.EMPTY_NODE,$o.__childrenNodeConstructor=ea,Fo(ia),Ho(ia);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const sa=!0;function ra(t,e=null){if(null===t)return ea.EMPTY_NODE;if("object"===typeof t&&".priority"in t&&(e=t[".priority"]),(0,s.vA)(null===e||"string"===typeof e||"number"===typeof e||"object"===typeof e&&".sv"in e,"Invalid priority type found: "+typeof e),"object"===typeof t&&".value"in t&&null!==t[".value"]&&(t=t[".value"]),"object"!==typeof t||".sv"in t){const n=t;return new $o(n,ra(e))}if(t instanceof Array||!sa){let n=ea.EMPTY_NODE;return Is(t,((e,i)=>{if((0,s.gR)(t,e)&&"."!==e.substring(0,1)){const t=ra(i);!t.isLeafNode()&&t.isEmpty()||(n=n.updateImmediateChild(e,t))}})),n.updatePriority(ra(e))}{const n=[];let i=!1;const s=t;if(Is(s,((t,e)=>{if("."!==t.substring(0,1)){const s=ra(e);s.isEmpty()||(i=i||!s.getPriority().isEmpty(),n.push(new Co(t,s)))}})),0===n.length)return ea.EMPTY_NODE;const r=Qo(n,Do,(t=>t.name),Mo);if(i){const t=Qo(n,Ko.getCompare());return new ea(r,ra(e),new Zo({".priority":t},{".priority":Ko}))}return new ea(r,ra(e),Zo.Default)}}Wo(ra);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class oa extends Io{constructor(t){super(),this.indexPath_=t,(0,s.vA)(!oo(t)&&".priority"!==Jr(t),"Can't create PathIndex with empty path or .priority key")}extractChild(t){return t.getChild(this.indexPath_)}isDefinedOn(t){return!t.getChild(this.indexPath_).isEmpty()}compare(t,e){const n=this.extractChild(t.node),i=this.extractChild(e.node),s=n.compareTo(i);return 0===s?ws(t.name,e.name):s}makePost(t,e){const n=ra(t),i=ea.EMPTY_NODE.updateChild(this.indexPath_,n);return new Co(e,i)}maxPost(){const t=ea.EMPTY_NODE.updateChild(this.indexPath_,ia);return new Co(bs,t)}toString(){return io(this.indexPath_,0).join("/")}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aa extends Io{compare(t,e){const n=t.node.compareTo(e.node);return 0===n?ws(t.name,e.name):n}isDefinedOn(t){return!0}indexedValueChanged(t,e){return!t.equals(e)}minPost(){return Co.MIN}maxPost(){return Co.MAX}makePost(t,e){const n=ra(t);return new Co(e,n)}toString(){return".value"}}const ca=new aa;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function la(t){return{type:"value",snapshotNode:t}}function ha(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function ua(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function da(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function fa(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class pa{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=Ko}hasStart(){return this.startSet_}isViewFromLeft(){return""===this.viewFrom_?this.startSet_:"l"===this.viewFrom_}getIndexStartValue(){return(0,s.vA)(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return(0,s.vA)(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:_s}hasEnd(){return this.endSet_}getIndexEndValue(){return(0,s.vA)(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return(0,s.vA)(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:bs}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&""!==this.viewFrom_}getLimit(){return(0,s.vA)(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===Ko}copy(){const t=new pa;return t.limitSet_=this.limitSet_,t.limit_=this.limit_,t.startSet_=this.startSet_,t.startAfterSet_=this.startAfterSet_,t.indexStartValue_=this.indexStartValue_,t.startNameSet_=this.startNameSet_,t.indexStartName_=this.indexStartName_,t.endSet_=this.endSet_,t.endBeforeSet_=this.endBeforeSet_,t.indexEndValue_=this.indexEndValue_,t.endNameSet_=this.endNameSet_,t.indexEndName_=this.indexEndName_,t.index_=this.index_,t.viewFrom_=this.viewFrom_,t}}function ga(t){const e={};if(t.isDefault())return e;let n;if(t.index_===Ko?n="$priority":t.index_===ca?n="$value":t.index_===Ao?n="$key":((0,s.vA)(t.index_ instanceof oa,"Unrecognized index type!"),n=t.index_.toString()),e["orderBy"]=(0,s.As)(n),t.startSet_){const n=t.startAfterSet_?"startAfter":"startAt";e[n]=(0,s.As)(t.indexStartValue_),t.startNameSet_&&(e[n]+=","+(0,s.As)(t.indexStartName_))}if(t.endSet_){const n=t.endBeforeSet_?"endBefore":"endAt";e[n]=(0,s.As)(t.indexEndValue_),t.endNameSet_&&(e[n]+=","+(0,s.As)(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e["limitToFirst"]=t.limit_:e["limitToLast"]=t.limit_),e}function ma(t){const e={};if(t.startSet_&&(e["sp"]=t.indexStartValue_,t.startNameSet_&&(e["sn"]=t.indexStartName_),e["sin"]=!t.startAfterSet_),t.endSet_&&(e["ep"]=t.indexEndValue_,t.endNameSet_&&(e["en"]=t.indexEndName_),e["ein"]=!t.endBeforeSet_),t.limitSet_){e["l"]=t.limit_;let n=t.viewFrom_;""===n&&(n=t.isViewFromLeft()?"l":"r"),e["vf"]=n}return t.index_!==Ko&&(e["i"]=t.index_.toString()),e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ya extends Hr{constructor(t,e,n,i){super(),this.repoInfo_=t,this.onDataUpdate_=e,this.authTokenProvider_=n,this.appCheckTokenProvider_=i,this.log_=ds("p:rest:"),this.listens_={}}reportStats(t){throw new Error("Method not implemented.")}static getListenId_(t,e){return void 0!==e?"tag$"+e:((0,s.vA)(t._queryParams.isDefault(),"should have a tag if it's not a default query."),t._path.toString())}listen(t,e,n,i){const r=t._path.toString();this.log_("Listen called for "+r+" "+t._queryIdentifier);const o=ya.getListenId_(t,n),a={};this.listens_[o]=a;const c=ga(t._queryParams);this.restRequest_(r+".json",c,((t,e)=>{let c=e;if(404===t&&(c=null,t=null),null===t&&this.onDataUpdate_(r,c,!1,n),(0,s.yw)(this.listens_,o)===a){let e;e=t?401===t?"permission_denied":"rest_error:"+t:"ok",i(e,null)}}))}unlisten(t,e){const n=ya.getListenId_(t,e);delete this.listens_[n]}get(t){const e=ga(t._queryParams),n=t._path.toString(),i=new s.cY;return this.restRequest_(n+".json",e,((t,e)=>{let s=e;404===t&&(s=null,t=null),null===t?(this.onDataUpdate_(n,s,!1,null),i.resolve(s)):i.reject(new Error(s))})),i.promise}refreshAuthToken(t){}restRequest_(t,e={},n){return e["format"]="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then((([i,r])=>{i&&i.accessToken&&(e["auth"]=i.accessToken),r&&r.token&&(e["ac"]=r.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+t+"?ns="+this.repoInfo_.namespace+(0,s.Am)(e);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(n&&4===a.readyState){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let e=null;if(a.status>=200&&a.status<300){try{e=(0,s.$L)(a.responseText)}catch(t){gs("Failed to parse JSON response for "+o+": "+a.responseText)}n(null,e)}else 401!==a.status&&404!==a.status&&gs("Got unsuccessful REST response for "+o+" Status: "+a.status),n(a.status);n=null}},a.open("GET",o,!0),a.send()}))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class va{constructor(){this.rootNode_=ea.EMPTY_NODE}getNode(t){return this.rootNode_.getChild(t)}updateSnapshot(t,e){this.rootNode_=this.rootNode_.updateChild(t,e)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _a(){return{value:null,children:new Map}}function ba(t,e,n){if(oo(e))t.value=n,t.children.clear();else if(null!==t.value)t.value=t.value.updateChild(e,n);else{const i=Jr(e);t.children.has(i)||t.children.set(i,_a());const s=t.children.get(i);e=to(e),ba(s,e,n)}}function wa(t,e,n){null!==t.value?n(e,t.value):Ta(t,((t,i)=>{const s=new Qr(e.toString()+"/"+t);wa(i,s,n)}))}function Ta(t,e){t.children.forEach(((t,n)=>{e(n,t)}))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xa{constructor(t){this.collection_=t,this.last_=null}get(){const t=this.collection_.get(),e=Object.assign({},t);return this.last_&&Is(this.last_,((t,n)=>{e[t]=e[t]-n})),this.last_=t,e}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ea=1e4,Ca=3e4,Ia=3e5;class Sa{constructor(t,e){this.server_=e,this.statsToReport_={},this.statsListener_=new xa(t);const n=Ea+(Ca-Ea)*Math.random();Ls(this.reportStats_.bind(this),Math.floor(n))}reportStats_(){const t=this.statsListener_.get(),e={};let n=!1;Is(t,((t,i)=>{i>0&&(0,s.gR)(this.statsToReport_,t)&&(e[t]=i,n=!0)})),n&&this.server_.reportStats(e),Ls(this.reportStats_.bind(this),Math.floor(2*Math.random()*Ia))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ka;function Aa(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function Oa(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function Ra(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(function(t){t[t["OVERWRITE"]=0]="OVERWRITE",t[t["MERGE"]=1]="MERGE",t[t["ACK_USER_WRITE"]=2]="ACK_USER_WRITE",t[t["LISTEN_COMPLETE"]=3]="LISTEN_COMPLETE"})(ka||(ka={}));class Pa{constructor(t,e,n){this.path=t,this.affectedTree=e,this.revert=n,this.type=ka.ACK_USER_WRITE,this.source=Aa()}operationForChild(t){if(oo(this.path)){if(null!=this.affectedTree.value)return(0,s.vA)(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const e=this.affectedTree.subtree(new Qr(t));return new Pa(Xr(),e,this.revert)}}return(0,s.vA)(Jr(this.path)===t,"operationForChild called for unrelated child."),new Pa(to(this.path),this.affectedTree,this.revert)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Na{constructor(t,e,n){this.source=t,this.path=e,this.snap=n,this.type=ka.OVERWRITE}operationForChild(t){return oo(this.path)?new Na(this.source,Xr(),this.snap.getImmediateChild(t)):new Na(this.source,to(this.path),this.snap)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Da{constructor(t,e,n){this.source=t,this.path=e,this.children=n,this.type=ka.MERGE}operationForChild(t){if(oo(this.path)){const e=this.children.subtree(new Qr(t));return e.isEmpty()?null:e.value?new Na(this.source,Xr(),e.value):new Da(this.source,Xr(),e)}return(0,s.vA)(Jr(this.path)===t,"Can't get a merge for a child not on the path of the operation"),new Da(this.source,to(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ma{constructor(t,e,n){this.node_=t,this.fullyInitialized_=e,this.filtered_=n}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(t){if(oo(t))return this.isFullyInitialized()&&!this.filtered_;const e=Jr(t);return this.isCompleteForChild(e)}isCompleteForChild(t){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(t)}getNode(){return this.node_}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function La(t,e,n,i){const s=[],r=[];return e.forEach((e=>{"child_changed"===e.type&&t.index_.indexedValueChanged(e.oldSnap,e.snapshotNode)&&r.push(fa(e.childName,e.snapshotNode))})),Fa(t,s,"child_removed",e,i,n),Fa(t,s,"child_added",e,i,n),Fa(t,s,"child_moved",r,i,n),Fa(t,s,"child_changed",e,i,n),Fa(t,s,"value",e,i,n),s}function Fa(t,e,n,i,s,r){const o=i.filter((t=>t.type===n));o.sort(((e,n)=>Va(t,e,n))),o.forEach((n=>{const i=Ua(t,n,r);s.forEach((s=>{s.respondsTo(n.type)&&e.push(s.createEvent(i,t.query_))}))}))}function Ua(t,e,n){return"value"===e.type||"child_removed"===e.type||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function Va(t,e,n){if(null==e.childName||null==n.childName)throw(0,s.Hk)("Should only compare child_ events.");const i=new Co(e.childName,e.snapshotNode),r=new Co(n.childName,n.snapshotNode);return t.index_.compare(i,r)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ja(t,e){return{eventCache:t,serverCache:e}}function za(t,e,n,i){return ja(new Ma(e,n,i),t.serverCache)}function Ba(t,e,n,i){return ja(t.eventCache,new Ma(e,n,i))}function $a(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function Wa(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ha;const qa=()=>(Ha||(Ha=new No(Ts)),Ha);class Ka{constructor(t,e=qa()){this.value=t,this.children=e}static fromObject(t){let e=new Ka(null);return Is(t,((t,n)=>{e=e.set(new Qr(t),n)})),e}isEmpty(){return null===this.value&&this.children.isEmpty()}findRootMostMatchingPathAndValue(t,e){if(null!=this.value&&e(this.value))return{path:Xr(),value:this.value};if(oo(t))return null;{const n=Jr(t),i=this.children.get(n);if(null!==i){const s=i.findRootMostMatchingPathAndValue(to(t),e);if(null!=s){const t=ro(new Qr(n),s.path);return{path:t,value:s.value}}return null}return null}}findRootMostValueAndPath(t){return this.findRootMostMatchingPathAndValue(t,(()=>!0))}subtree(t){if(oo(t))return this;{const e=Jr(t),n=this.children.get(e);return null!==n?n.subtree(to(t)):new Ka(null)}}set(t,e){if(oo(t))return new Ka(e,this.children);{const n=Jr(t),i=this.children.get(n)||new Ka(null),s=i.set(to(t),e),r=this.children.insert(n,s);return new Ka(this.value,r)}}remove(t){if(oo(t))return this.children.isEmpty()?new Ka(null):new Ka(null,this.children);{const e=Jr(t),n=this.children.get(e);if(n){const i=n.remove(to(t));let s;return s=i.isEmpty()?this.children.remove(e):this.children.insert(e,i),null===this.value&&s.isEmpty()?new Ka(null):new Ka(this.value,s)}return this}}get(t){if(oo(t))return this.value;{const e=Jr(t),n=this.children.get(e);return n?n.get(to(t)):null}}setTree(t,e){if(oo(t))return e;{const n=Jr(t),i=this.children.get(n)||new Ka(null),s=i.setTree(to(t),e);let r;return r=s.isEmpty()?this.children.remove(n):this.children.insert(n,s),new Ka(this.value,r)}}fold(t){return this.fold_(Xr(),t)}fold_(t,e){const n={};return this.children.inorderTraversal(((i,s)=>{n[i]=s.fold_(ro(t,i),e)})),e(t,this.value,n)}findOnPath(t,e){return this.findOnPath_(t,Xr(),e)}findOnPath_(t,e,n){const i=!!this.value&&n(e,this.value);if(i)return i;if(oo(t))return null;{const i=Jr(t),s=this.children.get(i);return s?s.findOnPath_(to(t),ro(e,i),n):null}}foreachOnPath(t,e){return this.foreachOnPath_(t,Xr(),e)}foreachOnPath_(t,e,n){if(oo(t))return this;{this.value&&n(e,this.value);const i=Jr(t),s=this.children.get(i);return s?s.foreachOnPath_(to(t),ro(e,i),n):new Ka(null)}}foreach(t){this.foreach_(Xr(),t)}foreach_(t,e){this.children.inorderTraversal(((n,i)=>{i.foreach_(ro(t,n),e)})),this.value&&e(t,this.value)}foreachChild(t){this.children.inorderTraversal(((e,n)=>{n.value&&t(e,n.value)}))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ga{constructor(t){this.writeTree_=t}static empty(){return new Ga(new Ka(null))}}function Ya(t,e,n){if(oo(e))return new Ga(new Ka(n));{const i=t.writeTree_.findRootMostValueAndPath(e);if(null!=i){const s=i.path;let r=i.value;const o=ao(s,e);return r=r.updateChild(o,n),new Ga(t.writeTree_.set(s,r))}{const i=new Ka(n),s=t.writeTree_.setTree(e,i);return new Ga(s)}}}function Qa(t,e,n){let i=t;return Is(n,((t,n)=>{i=Ya(i,ro(e,t),n)})),i}function Xa(t,e){if(oo(e))return Ga.empty();{const n=t.writeTree_.setTree(e,new Ka(null));return new Ga(n)}}function Ja(t,e){return null!=Za(t,e)}function Za(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return null!=n?t.writeTree_.get(n.path).getChild(ao(n.path,e)):null}function tc(t){const e=[],n=t.writeTree_.value;return null!=n?n.isLeafNode()||n.forEachChild(Ko,((t,n)=>{e.push(new Co(t,n))})):t.writeTree_.children.inorderTraversal(((t,n)=>{null!=n.value&&e.push(new Co(t,n.value))})),e}function ec(t,e){if(oo(e))return t;{const n=Za(t,e);return new Ga(null!=n?new Ka(n):t.writeTree_.subtree(e))}}function nc(t){return t.writeTree_.isEmpty()}function ic(t,e){return sc(Xr(),t.writeTree_,e)}function sc(t,e,n){if(null!=e.value)return n.updateChild(t,e.value);{let i=null;return e.children.inorderTraversal(((e,r)=>{".priority"===e?((0,s.vA)(null!==r.value,"Priority writes must always be leaf nodes"),i=r.value):n=sc(ro(t,e),r,n)})),n.getChild(t).isEmpty()||null===i||(n=n.updateChild(ro(t,".priority"),i)),n}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rc(t,e){return Sc(e,t)}function oc(t,e,n,i,r){(0,s.vA)(i>t.lastWriteId,"Stacking an older write on top of newer ones"),void 0===r&&(r=!0),t.allWrites.push({path:e,snap:n,writeId:i,visible:r}),r&&(t.visibleWrites=Ya(t.visibleWrites,e,n)),t.lastWriteId=i}function ac(t,e){for(let n=0;n<t.allWrites.length;n++){const i=t.allWrites[n];if(i.writeId===e)return i}return null}function cc(t,e){const n=t.allWrites.findIndex((t=>t.writeId===e));(0,s.vA)(n>=0,"removeWrite called with nonexistent writeId.");const i=t.allWrites[n];t.allWrites.splice(n,1);let r=i.visible,o=!1,a=t.allWrites.length-1;while(r&&a>=0){const e=t.allWrites[a];e.visible&&(a>=n&&lc(e,i.path)?r=!1:lo(i.path,e.path)&&(o=!0)),a--}if(r){if(o)return hc(t),!0;if(i.snap)t.visibleWrites=Xa(t.visibleWrites,i.path);else{const e=i.children;Is(e,(e=>{t.visibleWrites=Xa(t.visibleWrites,ro(i.path,e))}))}return!0}return!1}function lc(t,e){if(t.snap)return lo(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&lo(ro(t.path,n),e))return!0;return!1}function hc(t){t.visibleWrites=dc(t.allWrites,uc,Xr()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function uc(t){return t.visible}function dc(t,e,n){let i=Ga.empty();for(let r=0;r<t.length;++r){const o=t[r];if(e(o)){const t=o.path;let e;if(o.snap)lo(n,t)?(e=ao(n,t),i=Ya(i,e,o.snap)):lo(t,n)&&(e=ao(t,n),i=Ya(i,Xr(),o.snap.getChild(e)));else{if(!o.children)throw(0,s.Hk)("WriteRecord should have .snap or .children");if(lo(n,t))e=ao(n,t),i=Qa(i,e,o.children);else if(lo(t,n))if(e=ao(t,n),oo(e))i=Qa(i,Xr(),o.children);else{const t=(0,s.yw)(o.children,Jr(e));if(t){const n=t.getChild(to(e));i=Ya(i,Xr(),n)}}}}}return i}function fc(t,e,n,i,s){if(i||s){const r=ec(t.visibleWrites,e);if(!s&&nc(r))return n;if(s||null!=n||Ja(r,Xr())){const r=function(t){return(t.visible||s)&&(!i||!~i.indexOf(t.writeId))&&(lo(t.path,e)||lo(e,t.path))},o=dc(t.allWrites,r,e),a=n||ea.EMPTY_NODE;return ic(o,a)}return null}{const i=Za(t.visibleWrites,e);if(null!=i)return i;{const i=ec(t.visibleWrites,e);if(nc(i))return n;if(null!=n||Ja(i,Xr())){const t=n||ea.EMPTY_NODE;return ic(i,t)}return null}}}function pc(t,e,n){let i=ea.EMPTY_NODE;const s=Za(t.visibleWrites,e);if(s)return s.isLeafNode()||s.forEachChild(Ko,((t,e)=>{i=i.updateImmediateChild(t,e)})),i;if(n){const s=ec(t.visibleWrites,e);return n.forEachChild(Ko,((t,e)=>{const n=ic(ec(s,new Qr(t)),e);i=i.updateImmediateChild(t,n)})),tc(s).forEach((t=>{i=i.updateImmediateChild(t.name,t.node)})),i}{const n=ec(t.visibleWrites,e);return tc(n).forEach((t=>{i=i.updateImmediateChild(t.name,t.node)})),i}}function gc(t,e,n,i,r){(0,s.vA)(i||r,"Either existingEventSnap or existingServerSnap must exist");const o=ro(e,n);if(Ja(t.visibleWrites,o))return null;{const e=ec(t.visibleWrites,o);return nc(e)?r.getChild(n):ic(e,r.getChild(n))}}function mc(t,e,n,i){const s=ro(e,n),r=Za(t.visibleWrites,s);if(null!=r)return r;if(i.isCompleteForChild(n)){const e=ec(t.visibleWrites,s);return ic(e,i.getNode().getImmediateChild(n))}return null}function yc(t,e){return Za(t.visibleWrites,e)}function vc(t,e,n,i,s,r,o){let a;const c=ec(t.visibleWrites,e),l=Za(c,Xr());if(null!=l)a=l;else{if(null==n)return[];a=ic(c,n)}if(a=a.withIndex(o),a.isEmpty()||a.isLeafNode())return[];{const t=[],e=o.getCompare(),n=r?a.getReverseIteratorFrom(i,o):a.getIteratorFrom(i,o);let c=n.getNext();while(c&&t.length<s)0!==e(c,i)&&t.push(c),c=n.getNext();return t}}function _c(){return{visibleWrites:Ga.empty(),allWrites:[],lastWriteId:-1}}function bc(t,e,n,i){return fc(t.writeTree,t.treePath,e,n,i)}function wc(t,e){return pc(t.writeTree,t.treePath,e)}function Tc(t,e,n,i){return gc(t.writeTree,t.treePath,e,n,i)}function xc(t,e){return yc(t.writeTree,ro(t.treePath,e))}function Ec(t,e,n,i,s,r){return vc(t.writeTree,t.treePath,e,n,i,s,r)}function Cc(t,e,n){return mc(t.writeTree,t.treePath,e,n)}function Ic(t,e){return Sc(ro(t.treePath,e),t.writeTree)}function Sc(t,e){return{treePath:t,writeTree:e}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kc{constructor(){this.changeMap=new Map}trackChildChange(t){const e=t.type,n=t.childName;(0,s.vA)("child_added"===e||"child_changed"===e||"child_removed"===e,"Only child changes supported for tracking"),(0,s.vA)(".priority"!==n,"Only non-priority child changes can be tracked.");const i=this.changeMap.get(n);if(i){const r=i.type;if("child_added"===e&&"child_removed"===r)this.changeMap.set(n,da(n,t.snapshotNode,i.snapshotNode));else if("child_removed"===e&&"child_added"===r)this.changeMap.delete(n);else if("child_removed"===e&&"child_changed"===r)this.changeMap.set(n,ua(n,i.oldSnap));else if("child_changed"===e&&"child_added"===r)this.changeMap.set(n,ha(n,t.snapshotNode));else{if("child_changed"!==e||"child_changed"!==r)throw(0,s.Hk)("Illegal combination of changes: "+t+" occurred after "+i);this.changeMap.set(n,da(n,t.snapshotNode,i.oldSnap))}}else this.changeMap.set(n,t)}getChanges(){return Array.from(this.changeMap.values())}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ac{getCompleteChild(t){return null}getChildAfterChild(t,e,n){return null}}const Oc=new Ac;class Rc{constructor(t,e,n=null){this.writes_=t,this.viewCache_=e,this.optCompleteServerCache_=n}getCompleteChild(t){const e=this.viewCache_.eventCache;if(e.isCompleteForChild(t))return e.getNode().getImmediateChild(t);{const e=null!=this.optCompleteServerCache_?new Ma(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Cc(this.writes_,t,e)}}getChildAfterChild(t,e,n){const i=null!=this.optCompleteServerCache_?this.optCompleteServerCache_:Wa(this.viewCache_),s=Ec(this.writes_,i,e,1,n,t);return 0===s.length?null:s[0]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pc(t,e){(0,s.vA)(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),(0,s.vA)(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function Nc(t,e,n,i,r){const o=new kc;let a,c;if(n.type===ka.OVERWRITE){const l=n;l.source.fromUser?a=Fc(t,e,l.path,l.snap,i,r,o):((0,s.vA)(l.source.fromServer,"Unknown source."),c=l.source.tagged||e.serverCache.isFiltered()&&!oo(l.path),a=Lc(t,e,l.path,l.snap,i,r,c,o))}else if(n.type===ka.MERGE){const l=n;l.source.fromUser?a=Vc(t,e,l.path,l.children,i,r,o):((0,s.vA)(l.source.fromServer,"Unknown source."),c=l.source.tagged||e.serverCache.isFiltered(),a=zc(t,e,l.path,l.children,i,r,c,o))}else if(n.type===ka.ACK_USER_WRITE){const s=n;a=s.revert?Wc(t,e,s.path,i,r,o):Bc(t,e,s.path,s.affectedTree,i,r,o)}else{if(n.type!==ka.LISTEN_COMPLETE)throw(0,s.Hk)("Unknown operation type: "+n.type);a=$c(t,e,n.path,i,o)}const l=o.getChanges();return Dc(e,a,l),{viewCache:a,changes:l}}function Dc(t,e,n){const i=e.eventCache;if(i.isFullyInitialized()){const s=i.getNode().isLeafNode()||i.getNode().isEmpty(),r=$a(t);(n.length>0||!t.eventCache.isFullyInitialized()||s&&!i.getNode().equals(r)||!i.getNode().getPriority().equals(r.getPriority()))&&n.push(la($a(e)))}}function Mc(t,e,n,i,r,o){const a=e.eventCache;if(null!=xc(i,n))return e;{let c,l;if(oo(n))if((0,s.vA)(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const n=Wa(e),s=n instanceof ea?n:ea.EMPTY_NODE,r=wc(i,s);c=t.filter.updateFullNode(e.eventCache.getNode(),r,o)}else{const n=bc(i,Wa(e));c=t.filter.updateFullNode(e.eventCache.getNode(),n,o)}else{const h=Jr(n);if(".priority"===h){(0,s.vA)(1===Zr(n),"Can't have a priority with additional path components");const r=a.getNode();l=e.serverCache.getNode();const o=Tc(i,n,r,l);c=null!=o?t.filter.updatePriority(r,o):a.getNode()}else{const s=to(n);let u;if(a.isCompleteForChild(h)){l=e.serverCache.getNode();const t=Tc(i,n,a.getNode(),l);u=null!=t?a.getNode().getImmediateChild(h).updateChild(s,t):a.getNode().getImmediateChild(h)}else u=Cc(i,h,e.serverCache);c=null!=u?t.filter.updateChild(a.getNode(),h,u,s,r,o):a.getNode()}}return za(e,c,a.isFullyInitialized()||oo(n),t.filter.filtersNodes())}}function Lc(t,e,n,i,s,r,o,a){const c=e.serverCache;let l;const h=o?t.filter:t.filter.getIndexedFilter();if(oo(n))l=h.updateFullNode(c.getNode(),i,null);else if(h.filtersNodes()&&!c.isFiltered()){const t=c.getNode().updateChild(n,i);l=h.updateFullNode(c.getNode(),t,null)}else{const t=Jr(n);if(!c.isCompleteForPath(n)&&Zr(n)>1)return e;const s=to(n),r=c.getNode().getImmediateChild(t),o=r.updateChild(s,i);l=".priority"===t?h.updatePriority(c.getNode(),o):h.updateChild(c.getNode(),t,o,s,Oc,null)}const u=Ba(e,l,c.isFullyInitialized()||oo(n),h.filtersNodes()),d=new Rc(s,u,r);return Mc(t,u,n,s,d,a)}function Fc(t,e,n,i,s,r,o){const a=e.eventCache;let c,l;const h=new Rc(s,e,r);if(oo(n))l=t.filter.updateFullNode(e.eventCache.getNode(),i,o),c=za(e,l,!0,t.filter.filtersNodes());else{const s=Jr(n);if(".priority"===s)l=t.filter.updatePriority(e.eventCache.getNode(),i),c=za(e,l,a.isFullyInitialized(),a.isFiltered());else{const r=to(n),l=a.getNode().getImmediateChild(s);let u;if(oo(r))u=i;else{const t=h.getCompleteChild(s);u=null!=t?".priority"===eo(r)&&t.getChild(so(r)).isEmpty()?t:t.updateChild(r,i):ea.EMPTY_NODE}if(l.equals(u))c=e;else{const n=t.filter.updateChild(a.getNode(),s,u,r,h,o);c=za(e,n,a.isFullyInitialized(),t.filter.filtersNodes())}}}return c}function Uc(t,e){return t.eventCache.isCompleteForChild(e)}function Vc(t,e,n,i,s,r,o){let a=e;return i.foreach(((i,c)=>{const l=ro(n,i);Uc(e,Jr(l))&&(a=Fc(t,a,l,c,s,r,o))})),i.foreach(((i,c)=>{const l=ro(n,i);Uc(e,Jr(l))||(a=Fc(t,a,l,c,s,r,o))})),a}function jc(t,e,n){return n.foreach(((t,n)=>{e=e.updateChild(t,n)})),e}function zc(t,e,n,i,s,r,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let c,l=e;c=oo(n)?i:new Ka(null).setTree(n,i);const h=e.serverCache.getNode();return c.children.inorderTraversal(((n,i)=>{if(h.hasChild(n)){const c=e.serverCache.getNode().getImmediateChild(n),h=jc(t,c,i);l=Lc(t,l,new Qr(n),h,s,r,o,a)}})),c.children.inorderTraversal(((n,i)=>{const c=!e.serverCache.isCompleteForChild(n)&&null===i.value;if(!h.hasChild(n)&&!c){const c=e.serverCache.getNode().getImmediateChild(n),h=jc(t,c,i);l=Lc(t,l,new Qr(n),h,s,r,o,a)}})),l}function Bc(t,e,n,i,s,r,o){if(null!=xc(s,n))return e;const a=e.serverCache.isFiltered(),c=e.serverCache;if(null!=i.value){if(oo(n)&&c.isFullyInitialized()||c.isCompleteForPath(n))return Lc(t,e,n,c.getNode().getChild(n),s,r,a,o);if(oo(n)){let i=new Ka(null);return c.getNode().forEachChild(Ao,((t,e)=>{i=i.set(new Qr(t),e)})),zc(t,e,n,i,s,r,a,o)}return e}{let l=new Ka(null);return i.foreach(((t,e)=>{const i=ro(n,t);c.isCompleteForPath(i)&&(l=l.set(t,c.getNode().getChild(i)))})),zc(t,e,n,l,s,r,a,o)}}function $c(t,e,n,i,s){const r=e.serverCache,o=Ba(e,r.getNode(),r.isFullyInitialized()||oo(n),r.isFiltered());return Mc(t,o,n,i,Oc,s)}function Wc(t,e,n,i,r,o){let a;if(null!=xc(i,n))return e;{const c=new Rc(i,e,r),l=e.eventCache.getNode();let h;if(oo(n)||".priority"===Jr(n)){let n;if(e.serverCache.isFullyInitialized())n=bc(i,Wa(e));else{const t=e.serverCache.getNode();(0,s.vA)(t instanceof ea,"serverChildren would be complete if leaf node"),n=wc(i,t)}h=t.filter.updateFullNode(l,n,o)}else{const s=Jr(n);let r=Cc(i,s,e.serverCache);null==r&&e.serverCache.isCompleteForChild(s)&&(r=l.getImmediateChild(s)),h=null!=r?t.filter.updateChild(l,s,r,to(n),c,o):e.eventCache.getNode().hasChild(s)?t.filter.updateChild(l,s,ea.EMPTY_NODE,to(n),c,o):l,h.isEmpty()&&e.serverCache.isFullyInitialized()&&(a=bc(i,Wa(e)),a.isLeafNode()&&(h=t.filter.updateFullNode(h,a,o)))}return a=e.serverCache.isFullyInitialized()||null!=xc(i,Xr()),za(e,h,a,t.filter.filtersNodes())}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hc(t,e){const n=Wa(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!oo(e)&&!n.getImmediateChild(Jr(e)).isEmpty())?n.getChild(e):null}function qc(t,e,n,i){e.type===ka.MERGE&&null!==e.source.queryId&&((0,s.vA)(Wa(t.viewCache_),"We should always have a full cache before handling merges"),(0,s.vA)($a(t.viewCache_),"Missing event cache, even though we have a server cache"));const r=t.viewCache_,o=Nc(t.processor_,r,e,n,i);return Pc(t.processor_,o.viewCache),(0,s.vA)(o.viewCache.serverCache.isFullyInitialized()||!r.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=o.viewCache,Kc(t,o.changes,o.viewCache.eventCache.getNode(),null)}function Kc(t,e,n,i){const s=i?[i]:t.eventRegistrations_;return La(t.eventGenerator_,e,n,s)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Gc,Yc;function Qc(t){(0,s.vA)(!Gc,"__referenceConstructor has already been defined"),Gc=t}function Xc(t,e,n,i){const r=e.source.queryId;if(null!==r){const o=t.views.get(r);return(0,s.vA)(null!=o,"SyncTree gave us an op for an invalid query."),qc(o,e,n,i)}{let s=[];for(const r of t.views.values())s=s.concat(qc(r,e,n,i));return s}}function Jc(t,e){let n=null;for(const i of t.views.values())n=n||Hc(i,e);return n}function Zc(t){(0,s.vA)(!Yc,"__referenceConstructor has already been defined"),Yc=t}class tl{constructor(t){this.listenProvider_=t,this.syncPointTree_=new Ka(null),this.pendingWriteTree_=_c(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function el(t,e,n,i,s){return oc(t.pendingWriteTree_,e,n,i,s),s?cl(t,new Na(Aa(),e,n)):[]}function nl(t,e,n=!1){const i=ac(t.pendingWriteTree_,e),s=cc(t.pendingWriteTree_,e);if(s){let e=new Ka(null);return null!=i.snap?e=e.set(Xr(),!0):Is(i.children,(t=>{e=e.set(new Qr(t),!0)})),cl(t,new Pa(i.path,e,n))}return[]}function il(t,e,n){return cl(t,new Na(Oa(),e,n))}function sl(t,e,n){const i=Ka.fromObject(n);return cl(t,new Da(Oa(),e,i))}function rl(t,e,n,i){const s=ul(t,i);if(null!=s){const i=dl(s),r=i.path,o=i.queryId,a=ao(r,e),c=new Na(Ra(o),a,n);return fl(t,r,c)}return[]}function ol(t,e,n,i){const s=ul(t,i);if(s){const i=dl(s),r=i.path,o=i.queryId,a=ao(r,e),c=Ka.fromObject(n),l=new Da(Ra(o),a,c);return fl(t,r,l)}return[]}function al(t,e,n){const i=!0,s=t.pendingWriteTree_,r=t.syncPointTree_.findOnPath(e,((t,n)=>{const i=ao(t,e),s=Jc(n,i);if(s)return s}));return fc(s,e,r,n,i)}function cl(t,e){return ll(e,t.syncPointTree_,null,rc(t.pendingWriteTree_,Xr()))}function ll(t,e,n,i){if(oo(t.path))return hl(t,e,n,i);{const s=e.get(Xr());null==n&&null!=s&&(n=Jc(s,Xr()));let r=[];const o=Jr(t.path),a=t.operationForChild(o),c=e.children.get(o);if(c&&a){const t=n?n.getImmediateChild(o):null,e=Ic(i,o);r=r.concat(ll(a,c,t,e))}return s&&(r=r.concat(Xc(s,t,i,n))),r}}function hl(t,e,n,i){const s=e.get(Xr());null==n&&null!=s&&(n=Jc(s,Xr()));let r=[];return e.children.inorderTraversal(((e,s)=>{const o=n?n.getImmediateChild(e):null,a=Ic(i,e),c=t.operationForChild(e);c&&(r=r.concat(hl(c,s,o,a)))})),s&&(r=r.concat(Xc(s,t,i,n))),r}function ul(t,e){return t.tagToQueryMap.get(e)}function dl(t){const e=t.indexOf("$");return(0,s.vA)(-1!==e&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new Qr(t.substr(0,e))}}function fl(t,e,n){const i=t.syncPointTree_.get(e);(0,s.vA)(i,"Missing sync point for query tag that we're tracking");const r=rc(t.pendingWriteTree_,e);return Xc(i,n,r,null)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class pl{constructor(t){this.node_=t}getImmediateChild(t){const e=this.node_.getImmediateChild(t);return new pl(e)}node(){return this.node_}}class gl{constructor(t,e){this.syncTree_=t,this.path_=e}getImmediateChild(t){const e=ro(this.path_,t);return new gl(this.syncTree_,e)}node(){return al(this.syncTree_,this.path_)}}const ml=function(t){return t=t||{},t["timestamp"]=t["timestamp"]||(new Date).getTime(),t},yl=function(t,e,n){return t&&"object"===typeof t?((0,s.vA)(".sv"in t,"Unexpected leaf node or priority contents"),"string"===typeof t[".sv"]?vl(t[".sv"],e,n):"object"===typeof t[".sv"]?_l(t[".sv"],e):void(0,s.vA)(!1,"Unexpected server value: "+JSON.stringify(t,null,2))):t},vl=function(t,e,n){switch(t){case"timestamp":return n["timestamp"];default:(0,s.vA)(!1,"Unexpected server value: "+t)}},_l=function(t,e,n){t.hasOwnProperty("increment")||(0,s.vA)(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const i=t["increment"];"number"!==typeof i&&(0,s.vA)(!1,"Unexpected increment value: "+i);const r=e.node();if((0,s.vA)(null!==r&&"undefined"!==typeof r,"Expected ChildrenNode.EMPTY_NODE for nulls"),!r.isLeafNode())return i;const o=r,a=o.getValue();return"number"!==typeof a?i:a+i},bl=function(t,e,n,i){return Tl(e,new gl(n,t),i)},wl=function(t,e,n){return Tl(t,new pl(e),n)};function Tl(t,e,n){const i=t.getPriority().val(),s=yl(i,e.getImmediateChild(".priority"),n);let r;if(t.isLeafNode()){const i=t,r=yl(i.getValue(),e,n);return r!==i.getValue()||s!==i.getPriority().val()?new $o(r,ra(s)):t}{const i=t;return r=i,s!==i.getPriority().val()&&(r=r.updatePriority(new $o(s))),i.forEachChild(Ko,((t,i)=>{const s=Tl(i,e.getImmediateChild(t),n);s!==i&&(r=r.updateImmediateChild(t,s))})),r}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xl{constructor(t="",e=null,n={children:{},childCount:0}){this.name=t,this.parent=e,this.node=n}}function El(t,e){let n=e instanceof Qr?e:new Qr(e),i=t,r=Jr(n);while(null!==r){const t=(0,s.yw)(i.node.children,r)||{children:{},childCount:0};i=new xl(r,i,t),n=to(n),r=Jr(n)}return i}function Cl(t){return t.node.value}function Il(t,e){t.node.value=e,Nl(t)}function Sl(t){return t.node.childCount>0}function kl(t){return void 0===Cl(t)&&!Sl(t)}function Al(t,e){Is(t.node.children,((n,i)=>{e(new xl(n,t,i))}))}function Ol(t,e,n,i){n&&!i&&e(t),Al(t,(t=>{Ol(t,e,!0,i)})),n&&i&&e(t)}function Rl(t,e,n){let i=n?t:t.parent;while(null!==i){if(e(i))return!0;i=i.parent}return!1}function Pl(t){return new Qr(null===t.parent?t.name:Pl(t.parent)+"/"+t.name)}function Nl(t){null!==t.parent&&Dl(t.parent,t.name,t)}function Dl(t,e,n){const i=kl(n),r=(0,s.gR)(t.node.children,e);i&&r?(delete t.node.children[e],t.node.childCount--,Nl(t)):i||r||(t.node.children[e]=n.node,t.node.childCount++,Nl(t))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ml=/[\[\].#$\/\u0000-\u001F\u007F]/,Ll=/[\[\].#$\u0000-\u001F\u007F]/,Fl=10485760,Ul=function(t){return"string"===typeof t&&0!==t.length&&!Ml.test(t)},Vl=function(t){return"string"===typeof t&&0!==t.length&&!Ll.test(t)},jl=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),Vl(t)},zl=function(t,e,n){const i=n instanceof Qr?new ho(n,t):n;if(void 0===e)throw new Error(t+"contains undefined "+go(i));if("function"===typeof e)throw new Error(t+"contains a function "+go(i)+" with contents = "+e.toString());if(ys(e))throw new Error(t+"contains "+e.toString()+" "+go(i));if("string"===typeof e&&e.length>Fl/3&&(0,s.OE)(e)>Fl)throw new Error(t+"contains a string greater than "+Fl+" utf8 bytes "+go(i)+" ('"+e.substring(0,50)+"...')");if(e&&"object"===typeof e){let n=!1,s=!1;if(Is(e,((e,r)=>{if(".value"===e)n=!0;else if(".priority"!==e&&".sv"!==e&&(s=!0,!Ul(e)))throw new Error(t+" contains an invalid key ("+e+") "+go(i)+'.  Keys must be non-empty strings and can\'t contain ".", "#", "$", "/", "[", or "]"');uo(i,e),zl(t,r,i),fo(i)})),n&&s)throw new Error(t+' contains ".value" child '+go(i)+" in addition to actual children.")}},Bl=function(t,e){const n=e.path.toString();if("string"!==typeof e.repoInfo.host||0===e.repoInfo.host.length||!Ul(e.repoInfo.namespace)&&"localhost"!==e.repoInfo.host.split(":")[0]||0!==n.length&&!jl(n))throw new Error((0,s.dI)(t,"url")+'must be a valid firebase URL and the path can\'t contain ".", "#", "$", "[", or "]".')};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class $l{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function Wl(t,e){let n=null;for(let i=0;i<e.length;i++){const s=e[i],r=s.getPath();null===n||co(r,n.path)||(t.eventLists_.push(n),n=null),null===n&&(n={events:[],path:r}),n.events.push(s)}n&&t.eventLists_.push(n)}function Hl(t,e,n){Wl(t,n),ql(t,(t=>lo(t,e)||lo(e,t)))}function ql(t,e){t.recursionDepth_++;let n=!0;for(let i=0;i<t.eventLists_.length;i++){const s=t.eventLists_[i];if(s){const r=s.path;e(r)?(Kl(t.eventLists_[i]),t.eventLists_[i]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function Kl(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(null!==n){t.events[e]=null;const i=n.getEventRunner();cs&&us("event: "+n.toString()),Ds(i)}}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gl="repo_interrupt",Yl=25;class Ql{constructor(t,e,n,i){this.repoInfo_=t,this.forceRestClient_=e,this.authTokenProvider_=n,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new $l,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=_a(),this.transactionQueueTree_=new xl,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function Xl(t,e,n){if(t.stats_=ir(t.repoInfo_),t.forceRestClient_||Ms())t.server_=new ya(t.repoInfo_,((e,n,i,s)=>{th(t,e,n,i,s)}),t.authTokenProvider_,t.appCheckProvider_),setTimeout((()=>eh(t,!0)),0);else{if("undefined"!==typeof n&&null!==n){if("object"!==typeof n)throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{(0,s.As)(n)}catch(i){throw new Error("Invalid authOverride provided: "+i)}}t.persistentConnection_=new Eo(t.repoInfo_,e,((e,n,i,s)=>{th(t,e,n,i,s)}),(e=>{eh(t,e)}),(e=>{nh(t,e)}),t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener((e=>{t.server_.refreshAuthToken(e)})),t.appCheckProvider_.addTokenChangeListener((e=>{t.server_.refreshAppCheckToken(e.token)})),t.statsReporter_=sr(t.repoInfo_,(()=>new Sa(t.stats_,t.server_))),t.infoData_=new va,t.infoSyncTree_=new tl({startListening:(e,n,i,s)=>{let r=[];const o=t.infoData_.getNode(e._path);return o.isEmpty()||(r=il(t.infoSyncTree_,e._path,o),setTimeout((()=>{s("ok")}),0)),r},stopListening:()=>{}}),ih(t,"connected",!1),t.serverSyncTree_=new tl({startListening:(e,n,i,s)=>(t.server_.listen(e,i,n,((n,i)=>{const r=s(n,i);Hl(t.eventQueue_,e._path,r)})),[]),stopListening:(e,n)=>{t.server_.unlisten(e,n)}})}function Jl(t){const e=t.infoData_.getNode(new Qr(".info/serverTimeOffset")),n=e.val()||0;return(new Date).getTime()+n}function Zl(t){return ml({timestamp:Jl(t)})}function th(t,e,n,i,r){t.dataUpdateCount++;const o=new Qr(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let a=[];if(r)if(i){const e=(0,s.kH)(n,(t=>ra(t)));a=ol(t.serverSyncTree_,o,e,r)}else{const e=ra(n);a=rl(t.serverSyncTree_,o,e,r)}else if(i){const e=(0,s.kH)(n,(t=>ra(t)));a=sl(t.serverSyncTree_,o,e)}else{const e=ra(n);a=il(t.serverSyncTree_,o,e)}let c=o;a.length>0&&(c=uh(t,o)),Hl(t.eventQueue_,c,a)}function eh(t,e){ih(t,"connected",e),!1===e&&rh(t)}function nh(t,e){Is(e,((e,n)=>{ih(t,e,n)}))}function ih(t,e,n){const i=new Qr("/.info/"+e),s=ra(n);t.infoData_.updateSnapshot(i,s);const r=il(t.infoSyncTree_,i,s);Hl(t.eventQueue_,i,r)}function sh(t){return t.nextWriteId_++}function rh(t){ah(t,"onDisconnectEvents");const e=Zl(t),n=_a();wa(t.onDisconnect_,Xr(),((i,s)=>{const r=bl(i,s,t.serverSyncTree_,e);ba(n,i,r)}));let i=[];wa(n,Xr(),((e,n)=>{i=i.concat(il(t.serverSyncTree_,e,n));const s=yh(t,e);uh(t,s)})),t.onDisconnect_=_a(),Hl(t.eventQueue_,Xr(),i)}function oh(t){t.persistentConnection_&&t.persistentConnection_.interrupt(Gl)}function ah(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),us(n,...e)}function ch(t,e,n){return al(t.serverSyncTree_,e,n)||ea.EMPTY_NODE}function lh(t,e=t.transactionQueueTree_){if(e||mh(t,e),Cl(e)){const n=ph(t,e);(0,s.vA)(n.length>0,"Sending zero length transaction queue");const i=n.every((t=>0===t.status));i&&hh(t,Pl(e),n)}else Sl(e)&&Al(e,(e=>{lh(t,e)}))}function hh(t,e,n){const i=n.map((t=>t.currentWriteId)),r=ch(t,e,i);let o=r;const a=r.hash();for(let h=0;h<n.length;h++){const t=n[h];(0,s.vA)(0===t.status,"tryToSendTransactionQueue_: items in queue should all be run."),t.status=1,t.retryCount++;const i=ao(e,t.path);o=o.updateChild(i,t.currentOutputSnapshotRaw)}const c=o.val(!0),l=e;t.server_.put(l.toString(),c,(i=>{ah(t,"transaction put response",{path:l.toString(),status:i});let s=[];if("ok"===i){const i=[];for(let e=0;e<n.length;e++)n[e].status=2,s=s.concat(nl(t.serverSyncTree_,n[e].currentWriteId)),n[e].onComplete&&i.push((()=>n[e].onComplete(null,!0,n[e].currentOutputSnapshotResolved))),n[e].unwatcher();mh(t,El(t.transactionQueueTree_,e)),lh(t,t.transactionQueueTree_),Hl(t.eventQueue_,e,s);for(let t=0;t<i.length;t++)Ds(i[t])}else{if("datastale"===i)for(let t=0;t<n.length;t++)3===n[t].status?n[t].status=4:n[t].status=0;else{gs("transaction at "+l.toString()+" failed: "+i);for(let t=0;t<n.length;t++)n[t].status=4,n[t].abortReason=i}uh(t,e)}}),a)}function uh(t,e){const n=fh(t,e),i=Pl(n),s=ph(t,n);return dh(t,s,i),i}function dh(t,e,n){if(0===e.length)return;const i=[];let r=[];const o=e.filter((t=>0===t.status)),a=o.map((t=>t.currentWriteId));for(let c=0;c<e.length;c++){const o=e[c],l=ao(n,o.path);let h,u=!1;if((0,s.vA)(null!==l,"rerunTransactionsUnderNode_: relativePath should not be null."),4===o.status)u=!0,h=o.abortReason,r=r.concat(nl(t.serverSyncTree_,o.currentWriteId,!0));else if(0===o.status)if(o.retryCount>=Yl)u=!0,h="maxretry",r=r.concat(nl(t.serverSyncTree_,o.currentWriteId,!0));else{const n=ch(t,o.path,a);o.currentInputSnapshot=n;const i=e[c].update(n.val());if(void 0!==i){zl("transaction failed: Data returned ",i,o.path);let e=ra(i);const c="object"===typeof i&&null!=i&&(0,s.gR)(i,".priority");c||(e=e.updatePriority(n.getPriority()));const l=o.currentWriteId,h=Zl(t),u=wl(e,n,h);o.currentOutputSnapshotRaw=e,o.currentOutputSnapshotResolved=u,o.currentWriteId=sh(t),a.splice(a.indexOf(l),1),r=r.concat(el(t.serverSyncTree_,o.path,u,o.currentWriteId,o.applyLocally)),r=r.concat(nl(t.serverSyncTree_,l,!0))}else u=!0,h="nodata",r=r.concat(nl(t.serverSyncTree_,o.currentWriteId,!0))}Hl(t.eventQueue_,n,r),r=[],u&&(e[c].status=2,function(t){setTimeout(t,Math.floor(0))}(e[c].unwatcher),e[c].onComplete&&("nodata"===h?i.push((()=>e[c].onComplete(null,!1,e[c].currentInputSnapshot))):i.push((()=>e[c].onComplete(new Error(h),!1,null)))))}mh(t,t.transactionQueueTree_);for(let s=0;s<i.length;s++)Ds(i[s]);lh(t,t.transactionQueueTree_)}function fh(t,e){let n,i=t.transactionQueueTree_;n=Jr(e);while(null!==n&&void 0===Cl(i))i=El(i,n),e=to(e),n=Jr(e);return i}function ph(t,e){const n=[];return gh(t,e,n),n.sort(((t,e)=>t.order-e.order)),n}function gh(t,e,n){const i=Cl(e);if(i)for(let s=0;s<i.length;s++)n.push(i[s]);Al(e,(e=>{gh(t,e,n)}))}function mh(t,e){const n=Cl(e);if(n){let t=0;for(let e=0;e<n.length;e++)2!==n[e].status&&(n[t]=n[e],t++);n.length=t,Il(e,n.length>0?n:void 0)}Al(e,(e=>{mh(t,e)}))}function yh(t,e){const n=Pl(fh(t,e)),i=El(t.transactionQueueTree_,e);return Rl(i,(e=>{vh(t,e)})),vh(t,i),Ol(i,(e=>{vh(t,e)})),n}function vh(t,e){const n=Cl(e);if(n){const i=[];let r=[],o=-1;for(let e=0;e<n.length;e++)3===n[e].status||(1===n[e].status?((0,s.vA)(o===e-1,"All SENT items should be at beginning of queue."),o=e,n[e].status=3,n[e].abortReason="set"):((0,s.vA)(0===n[e].status,"Unexpected transaction status in abort"),n[e].unwatcher(),r=r.concat(nl(t.serverSyncTree_,n[e].currentWriteId,!0)),n[e].onComplete&&i.push(n[e].onComplete.bind(null,new Error("set"),!1,null))));-1===o?Il(e,void 0):n.length=o+1,Hl(t.eventQueue_,Pl(e),r);for(let t=0;t<i.length;t++)Ds(i[t])}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _h(t){let e="";const n=t.split("/");for(let s=0;s<n.length;s++)if(n[s].length>0){let t=n[s];try{t=decodeURIComponent(t.replace(/\+/g," "))}catch(i){}e+="/"+t}return e}function bh(t){const e={};"?"===t.charAt(0)&&(t=t.substring(1));for(const n of t.split("&")){if(0===n.length)continue;const i=n.split("=");2===i.length?e[decodeURIComponent(i[0])]=decodeURIComponent(i[1]):gs(`Invalid query segment '${n}' in query '${t}'`)}return e}const wh=function(t,e){const n=Th(t),i=n.namespace;"firebase.com"===n.domain&&ps(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),i&&"undefined"!==i||"localhost"===n.domain||ps("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||ms();const s="ws"===n.scheme||"wss"===n.scheme;return{repoInfo:new Xs(n.host,n.secure,i,s,e,"",i!==n.subdomain),path:new Qr(n.pathString)}},Th=function(t){let e="",n="",i="",s="",r="",o=!0,a="https",c=443;if("string"===typeof t){let l=t.indexOf("//");l>=0&&(a=t.substring(0,l-1),t=t.substring(l+2));let h=t.indexOf("/");-1===h&&(h=t.length);let u=t.indexOf("?");-1===u&&(u=t.length),e=t.substring(0,Math.min(h,u)),h<u&&(s=_h(t.substring(h,u)));const d=bh(t.substring(Math.min(t.length,u)));l=e.indexOf(":"),l>=0?(o="https"===a||"wss"===a,c=parseInt(e.substring(l+1),10)):l=e.length;const f=e.slice(0,l);if("localhost"===f.toLowerCase())n="localhost";else if(f.split(".").length<=2)n=f;else{const t=e.indexOf(".");i=e.substring(0,t).toLowerCase(),n=e.substring(t+1),r=i}"ns"in d&&(r=d["ns"])}return{host:e,port:c,domain:n,subdomain:i,secure:o,scheme:a,pathString:s,namespace:r}},xh="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz";(function(){let t=0;const e=[]})();
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Eh{constructor(t,e,n,i){this._repo=t,this._path=e,this._queryParams=n,this._orderByCalled=i}get key(){return oo(this._path)?null:eo(this._path)}get ref(){return new Ch(this._repo,this._path)}get _queryIdentifier(){const t=ma(this._queryParams),e=Es(t);return"{}"===e?"default":e}get _queryObject(){return ma(this._queryParams)}isEqual(t){if(t=(0,s.Ku)(t),!(t instanceof Eh))return!1;const e=this._repo===t._repo,n=co(this._path,t._path),i=this._queryIdentifier===t._queryIdentifier;return e&&n&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+no(this._path)}}class Ch extends Eh{constructor(t,e){super(t,e,new pa,!1)}get parent(){const t=so(this._path);return null===t?null:new Ch(this._repo,t)}get root(){let t=this;while(null!==t.parent)t=t.parent;return t}}Qc(Ch),Zc(Ch);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Ih="FIREBASE_DATABASE_EMULATOR_HOST",Sh={};let kh=!1;function Ah(t,e,n,i,s){let r=i||t.options.databaseURL;void 0===r&&(t.options.projectId||ps("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),us("Using default host for project ",t.options.projectId),r=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o,a,c=wh(r,s),l=c.repoInfo;"undefined"!==typeof process&&(a={NODE_ENV:"production",BASE_URL:"/test/"}[Ih]),a?(o=!0,r=`http://${a}?ns=${l.namespace}`,c=wh(r,s),l=c.repoInfo):o=!c.repoInfo.secure;const h=s&&o?new Vs(Vs.OWNER):new Us(t.name,t.options,e);Bl("Invalid Firebase Database URL",c),oo(c.path)||ps("Database URL must point to the root of a Firebase Database (not including a child path).");const u=Rh(l,t,h,new Fs(t.name,n));return new Ph(u,t)}function Oh(t,e){const n=Sh[e];n&&n[t.key]===t||ps(`Database ${e}(${t.repoInfo_}) has already been deleted.`),oh(t),delete n[t.key]}function Rh(t,e,n,i){let s=Sh[e.name];s||(s={},Sh[e.name]=s);let r=s[t.toURLString()];return r&&ps("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),r=new Ql(t,kh,n,i),s[t.toURLString()]=r,r}class Ph{constructor(t,e){this._repoInternal=t,this.app=e,this["type"]="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(Xl(this._repoInternal,this.app.options.appId,this.app.options["databaseAuthVariableOverride"]),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Ch(this._repo,Xr())),this._rootInternal}_delete(){return null!==this._rootInternal&&(Oh(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(t){null===this._rootInternal&&ps("Cannot call "+t+" on a deleted database.")}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Nh(t){Ji(i.MF),(0,i.om)(new a.uA("database",((t,{instanceIdentifier:e})=>{const n=t.getProvider("app").getImmediate(),i=t.getProvider("auth-internal"),s=t.getProvider("app-check-internal");return Ah(n,i,s,e)}),"PUBLIC").setMultipleInstances(!0)),(0,i.KO)(Yi,Qi,t),(0,i.KO)(Yi,Qi,"esm2017")}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Eo.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)},Eo.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};Nh();var Dh=n(1884);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Mh="firebasestorage.googleapis.com",Lh="storageBucket",Fh=12e4,Uh=6e5;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Vh extends s.g{constructor(t,e,n=0){super(Bh(t),`Firebase Storage: ${e} (${Bh(t)})`),this.status_=n,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,Vh.prototype)}get status(){return this.status_}set status(t){this.status_=t}_codeEquals(t){return Bh(t)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(t){this.customData.serverResponse=t,this.customData.serverResponse?this.message=`${this._baseMessage}\n${this.customData.serverResponse}`:this.message=this._baseMessage}}var jh,zh;function Bh(t){return"storage/"+t}function $h(){const t="An unknown error occurred, please check the error payload for server response.";return new Vh(jh.UNKNOWN,t)}function Wh(){return new Vh(jh.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function Hh(){return new Vh(jh.CANCELED,"User canceled the upload/download.")}function qh(t){return new Vh(jh.INVALID_URL,"Invalid URL '"+t+"'.")}function Kh(t){return new Vh(jh.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function Gh(t){return new Vh(jh.INVALID_ARGUMENT,t)}function Yh(){return new Vh(jh.APP_DELETED,"The Firebase app was deleted.")}function Qh(t){return new Vh(jh.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}(function(t){t["UNKNOWN"]="unknown",t["OBJECT_NOT_FOUND"]="object-not-found",t["BUCKET_NOT_FOUND"]="bucket-not-found",t["PROJECT_NOT_FOUND"]="project-not-found",t["QUOTA_EXCEEDED"]="quota-exceeded",t["UNAUTHENTICATED"]="unauthenticated",t["UNAUTHORIZED"]="unauthorized",t["UNAUTHORIZED_APP"]="unauthorized-app",t["RETRY_LIMIT_EXCEEDED"]="retry-limit-exceeded",t["INVALID_CHECKSUM"]="invalid-checksum",t["CANCELED"]="canceled",t["INVALID_EVENT_NAME"]="invalid-event-name",t["INVALID_URL"]="invalid-url",t["INVALID_DEFAULT_BUCKET"]="invalid-default-bucket",t["NO_DEFAULT_BUCKET"]="no-default-bucket",t["CANNOT_SLICE_BLOB"]="cannot-slice-blob",t["SERVER_FILE_WRONG_SIZE"]="server-file-wrong-size",t["NO_DOWNLOAD_URL"]="no-download-url",t["INVALID_ARGUMENT"]="invalid-argument",t["INVALID_ARGUMENT_COUNT"]="invalid-argument-count",t["APP_DELETED"]="app-deleted",t["INVALID_ROOT_OPERATION"]="invalid-root-operation",t["INVALID_FORMAT"]="invalid-format",t["INTERNAL_ERROR"]="internal-error",t["UNSUPPORTED_ENVIRONMENT"]="unsupported-environment"})(jh||(jh={}));
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Xh{constructor(t,e){this.bucket=t,this.path_=e}get path(){return this.path_}get isRoot(){return 0===this.path.length}fullServerUrl(){const t=encodeURIComponent;return"/b/"+t(this.bucket)+"/o/"+t(this.path)}bucketOnlyServerUrl(){const t=encodeURIComponent;return"/b/"+t(this.bucket)+"/o"}static makeFromBucketSpec(t,e){let n;try{n=Xh.makeFromUrl(t,e)}catch(i){return new Xh(t,"")}if(""===n.path)return n;throw Kh(t)}static makeFromUrl(t,e){let n=null;const i="([A-Za-z0-9.\\-_]+)";function s(t){"/"===t.path.charAt(t.path.length-1)&&(t.path_=t.path_.slice(0,-1))}const r="(/(.*))?$",o=new RegExp("^gs://"+i+r,"i"),a={bucket:1,path:3};function c(t){t.path_=decodeURIComponent(t.path)}const l="v[A-Za-z0-9_]+",h=e.replace(/[.]/g,"\\."),u="(/([^?#]*).*)?$",d=new RegExp(`^https?://${h}/${l}/b/${i}/o${u}`,"i"),f={bucket:1,path:3},p=e===Mh?"(?:storage.googleapis.com|storage.cloud.google.com)":e,g="([^?#]*)",m=new RegExp(`^https?://${p}/${i}/${g}`,"i"),y={bucket:1,path:2},v=[{regex:o,indices:a,postModify:s},{regex:d,indices:f,postModify:c},{regex:m,indices:y,postModify:c}];for(let _=0;_<v.length;_++){const e=v[_],i=e.regex.exec(t);if(i){const t=i[e.indices.bucket];let s=i[e.indices.path];s||(s=""),n=new Xh(t,s),e.postModify(n);break}}if(null==n)throw qh(t);return n}}class Jh{constructor(t){this.promise_=Promise.reject(t)}getPromise(){return this.promise_}cancel(t=!1){}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zh(t,e,n){let i=1,s=null,r=null,o=!1,a=0;function c(){return 2===a}let l=!1;function h(...t){l||(l=!0,e.apply(null,t))}function u(e){s=setTimeout((()=>{s=null,t(f,c())}),e)}function d(){r&&clearTimeout(r)}function f(t,...e){if(l)return void d();if(t)return d(),void h.call(null,t,...e);const n=c()||o;if(n)return d(),void h.call(null,t,...e);let s;i<64&&(i*=2),1===a?(a=2,s=0):s=1e3*(i+Math.random()),u(s)}let p=!1;function g(t){p||(p=!0,d(),l||(null!==s?(t||(a=2),clearTimeout(s),u(0)):t||(a=1)))}return u(0),r=setTimeout((()=>{o=!0,g(!0)}),n),g}function tu(t){t(!1)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eu(t){return void 0!==t}function nu(t,e,n,i){if(i<e)throw Gh(`Invalid value for '${t}'. Expected ${e} or greater.`);if(i>n)throw Gh(`Invalid value for '${t}'. Expected ${n} or less.`)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iu(t){const e=encodeURIComponent;let n="?";for(const i in t)if(t.hasOwnProperty(i)){const s=e(i)+"="+e(t[i]);n=n+s+"&"}return n=n.slice(0,-1),n}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function su(t,e){const n=t>=500&&t<600,i=[408,429],s=-1!==i.indexOf(t),r=-1!==e.indexOf(t);return n||s||r}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(function(t){t[t["NO_ERROR"]=0]="NO_ERROR",t[t["NETWORK_ERROR"]=1]="NETWORK_ERROR",t[t["ABORT"]=2]="ABORT"})(zh||(zh={}));class ru{constructor(t,e,n,i,s,r,o,a,c,l,h,u=!0){this.url_=t,this.method_=e,this.headers_=n,this.body_=i,this.successCodes_=s,this.additionalRetryCodes_=r,this.callback_=o,this.errorCallback_=a,this.timeout_=c,this.progressCallback_=l,this.connectionFactory_=h,this.retry=u,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise(((t,e)=>{this.resolve_=t,this.reject_=e,this.start_()}))}start_(){const t=(t,e)=>{if(e)return void t(!1,new ou(!1,null,!0));const n=this.connectionFactory_();this.pendingConnection_=n;const i=t=>{const e=t.loaded,n=t.lengthComputable?t.total:-1;null!==this.progressCallback_&&this.progressCallback_(e,n)};null!==this.progressCallback_&&n.addUploadProgressListener(i),n.send(this.url_,this.method_,this.body_,this.headers_).then((()=>{null!==this.progressCallback_&&n.removeUploadProgressListener(i),this.pendingConnection_=null;const e=n.getErrorCode()===zh.NO_ERROR,s=n.getStatus();if(!e||su(s,this.additionalRetryCodes_)&&this.retry){const e=n.getErrorCode()===zh.ABORT;return void t(!1,new ou(!1,null,e))}const r=-1!==this.successCodes_.indexOf(s);t(!0,new ou(r,n))}))},e=(t,e)=>{const n=this.resolve_,i=this.reject_,s=e.connection;if(e.wasSuccessCode)try{const t=this.callback_(s,s.getResponse());eu(t)?n(t):n()}catch(r){i(r)}else if(null!==s){const t=$h();t.serverResponse=s.getErrorText(),this.errorCallback_?i(this.errorCallback_(s,t)):i(t)}else if(e.canceled){const t=this.appDelete_?Yh():Hh();i(t)}else{const t=Wh();i(t)}};this.canceled_?e(!1,new ou(!1,null,!0)):this.backoffId_=Zh(t,e,this.timeout_)}getPromise(){return this.promise_}cancel(t){this.canceled_=!0,this.appDelete_=t||!1,null!==this.backoffId_&&tu(this.backoffId_),null!==this.pendingConnection_&&this.pendingConnection_.abort()}}class ou{constructor(t,e,n){this.wasSuccessCode=t,this.connection=e,this.canceled=!!n}}function au(t,e){null!==e&&e.length>0&&(t["Authorization"]="Firebase "+e)}function cu(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(null!==e&&void 0!==e?e:"AppManager")}function lu(t,e){e&&(t["X-Firebase-GMPID"]=e)}function hu(t,e){null!==e&&(t["X-Firebase-AppCheck"]=e)}function uu(t,e,n,i,s,r,o=!0){const a=iu(t.urlParams),c=t.url+a,l=Object.assign({},t.headers);return lu(l,e),au(l,n),cu(l,r),hu(l,i),new ru(c,t.method,l,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,s,o)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function du(t){if(0===t.length)return null;const e=t.lastIndexOf("/");if(-1===e)return"";const n=t.slice(0,e);return n}function fu(t){const e=t.lastIndexOf("/",t.length-2);return-1===e?t:t.slice(e+1)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class pu{constructor(t,e){this._service=t,this._location=e instanceof Xh?e:Xh.makeFromUrl(e,t.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(t,e){return new pu(t,e)}get root(){const t=new Xh(this._location.bucket,"");return this._newRef(this._service,t)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return fu(this._location.path)}get storage(){return this._service}get parent(){const t=du(this._location.path);if(null===t)return null;const e=new Xh(this._location.bucket,t);return new pu(this._service,e)}_throwIfRoot(t){if(""===this._location.path)throw Qh(t)}}function gu(t,e){const n=null===e||void 0===e?void 0:e[Lh];return null==n?null:Xh.makeFromBucketSpec(n,t)}class mu{constructor(t,e,n,i,s){this.app=t,this._authProvider=e,this._appCheckProvider=n,this._url=i,this._firebaseVersion=s,this._bucket=null,this._host=Mh,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=Fh,this._maxUploadRetryTime=Uh,this._requests=new Set,this._bucket=null!=i?Xh.makeFromBucketSpec(i,this._host):gu(this._host,this.app.options)}get host(){return this._host}set host(t){this._host=t,null!=this._url?this._bucket=Xh.makeFromBucketSpec(this._url,t):this._bucket=gu(t,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(t){nu("time",0,Number.POSITIVE_INFINITY,t),this._maxUploadRetryTime=t}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(t){nu("time",0,Number.POSITIVE_INFINITY,t),this._maxOperationRetryTime=t}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const t=this._authProvider.getImmediate({optional:!0});if(t){const e=await t.getToken();if(null!==e)return e.accessToken}return null}async _getAppCheckToken(){const t=this._appCheckProvider.getImmediate({optional:!0});if(t){const e=await t.getToken();return e.token}return null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach((t=>t.cancel())),this._requests.clear()),Promise.resolve()}_makeStorageReference(t){return new pu(this,t)}_makeRequest(t,e,n,i,s=!0){if(this._deleted)return new Jh(Yh());{const r=uu(t,this._appId,n,i,e,this._firebaseVersion,s);return this._requests.add(r),r.getPromise().then((()=>this._requests.delete(r)),(()=>this._requests.delete(r))),r}}async makeRequestWithTokens(t,e){const[n,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(t,e,n,i).getPromise()}}const yu="@firebase/storage",vu="0.13.3",_u="storage";function bu(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),s=t.getProvider("auth-internal"),r=t.getProvider("app-check-internal");return new mu(n,s,r,e,i.MF)}function wu(){(0,i.om)(new a.uA(_u,bu,"PUBLIC").setMultipleInstances(!0)),(0,i.KO)(yu,vu,""),(0,i.KO)(yu,vu,"esm2017")}wu();const Tu=new WeakMap;function xu(t,e){return Tu.has(e)||Tu.set(e,t||{f:{},r:{},s:{},u:{}}),Tu.get(e)}function Eu(t,e,n,i){if(!t)return n;const[s,r]=Iu(t);if(!s)return n;const o=xu(void 0,i)[s]||{},a=e||r;return a&&a in o?o[a]:n}function Cu(t,e,n,i){if(!t)return;const[s,r]=Iu(t);if(!s)return;const o=xu(void 0,i)[s],a=e||r;return a?(n.then((t=>{o[a]=t})).catch(Pi),a):void 0}function Iu(t){return ji(t)||zi(t)?["f",t.path]:Bi(t)?["r",t.toString()]:$i(t)?["s",t.toString()]:[]}const Su=new WeakMap;function ku(t,e,n){const i=Ri();Su.has(i)||Su.set(i,new Map);const s=Su.get(i),r=Cu(e,n,t,i);return r&&s.set(r,t),r?()=>s.delete(r):Pi}const Au={toFirestore(t){return t},fromFirestore(t,e){return t.exists()?Object.defineProperties(t.data(e),{id:{value:t.id}}):null}};function Ou(t,e,n,i){if(!Fi(t))return[t,{}];const s=[{},{}],r=Object.keys(n).reduce(((t,e)=>{const i=n[e];return t[i.path]=i.data(),t}),{});function o(t,e,s,a){e=e||{};const[c,l]=a;Object.getOwnPropertyNames(t).forEach((e=>{const n=Object.getOwnPropertyDescriptor(t,e);n&&!n.enumerable&&Object.defineProperty(c,e,n)}));for(const h in t){const a=t[h];if(null==a||a instanceof Date||a instanceof Dh.Dc||a instanceof Dh.Ci)c[h]=a;else if(Ui(a)){const t=s+h;c[h]=t in n?e[h]:a.path,l[t]=a.converter?a:a.withConverter(i.converter)}else if(Array.isArray(a)){c[h]=Array(a.length);for(let t=0;t<a.length;t++){const e=a[t];e&&e.path in r&&(c[h][t]=r[e.path])}o(a,e[h]||c[h],s+h+".",[c[h],l])}else Mi(a)?(c[h]={},o(a,e[h],s+h+".",[c[h],l])):c[h]=a}}return o(t,e,"",s),s}const Ru={reset:!1,wait:!0,maxRefDepth:2,converter:Au,snapshotOptions:{serverTimestamps:"estimate"}};function Pu(t){for(const e in t)t[e].unsub()}function Nu(t,e,n,i,s,r,o,a,c){const[l,h]=Ou(i.data(t.snapshotOptions),Ni(e,n),s,t);r.set(e,n,l),Mu(t,e,n,s,h,r,o,a,c)}function Du({ref:t,target:e,path:n,depth:i,resolve:s,reject:r,ops:o},a){const c=Object.create(null);let l=Pi;return a.once?(0,Dh.x7)(t).then((t=>{t.exists()?Nu(a,e,n,t,c,o,i,s,r):(o.set(e,n,null),s())})).catch(r):l=(0,Dh.aQ)(t,(t=>{t.exists()?Nu(a,e,n,t,c,o,i,s,r):(o.set(e,n,null),s())}),r),()=>{l(),Pu(c)}}function Mu(t,e,n,i,s,r,o,a,c){const l=Object.keys(s),h=Object.keys(i).filter((t=>l.indexOf(t)<0));if(h.forEach((t=>{i[t].unsub(),delete i[t]})),!l.length||++o>t.maxRefDepth)return a(n);let u=0;const d=l.length,f=Object.create(null);function p(t){t in f&&++u>=d&&a(n)}l.forEach((a=>{const l=i[a],h=s[a],u=`${n}.${a}`;if(f[u]=!0,l){if(l.path===h.path)return;l.unsub()}i[a]={data:()=>Ni(e,u),unsub:Du({ref:h,target:e,path:u,depth:o,ops:r,resolve:p.bind(null,u),reject:c},t),path:h.path}}))}function Lu(t,e,n,i,s,r){const o=Object.assign({},Ru,r),{snapshotListenOptions:a,snapshotOptions:c,wait:l,once:h}=o,u="value";let d=(0,Ln.KR)(l?[]:t.value);l||n.set(t,u,[]);const f=i;let p,g=Pi;const m=[],y={added:({newIndex:t,doc:e})=>{m.splice(t,0,Object.create(null));const r=m[t],[a,l]=Ou(e.data(c),void 0,r,o);n.add((0,Ln.BA)(d),t,a),Mu(o,d,`${u}.${t}`,r,l,n,0,i.bind(null,e),s)},modified:({oldIndex:t,newIndex:e,doc:r})=>{const a=(0,Ln.BA)(d),l=m[t],h=a[t],[f,p]=Ou(r.data(c),h,l,o);m.splice(e,0,l),n.remove(a,t),n.add(a,e,f),Mu(o,d,`${u}.${e}`,l,p,n,0,i,s)},removed:({oldIndex:t})=>{const e=(0,Ln.BA)(d);n.remove(e,t),Pu(m.splice(t,1)[0])}};function v(e){const s=e.docChanges(a);if(!p&&s.length){p=!0;let e=0;const r=s.length,o=Object.create(null);for(let t=0;t<r;t++)o[s[t].doc.id]=!0;i=s=>{s&&s.id in o&&++e>=r&&(l&&(n.set(t,u,(0,Ln.BA)(d)),d=t),f((0,Ln.BA)(d)),i=Pi)}}s.forEach((t=>{y[t.type](t)})),s.length||(l&&(n.set(t,u,(0,Ln.BA)(d)),d=t),i((0,Ln.BA)(d)))}return h?(0,Dh.GG)(e).then(v).catch(s):g=(0,Dh.aQ)(e,v,s),e=>{if(g(),e){const i="function"===typeof e?e():[];n.set(t,u,i)}m.forEach(Pu)}}function Fu(t,e,n,i,s,r){const o=Object.assign({},Ru,r),a="value",c=Object.create(null);i=Wi(i,(()=>Ni(t,a)));let l=Pi;function h(e){e.exists()?Nu(o,t,a,e,c,n,0,i,s):(n.set(t,a,null),i(null))}return o.once?(0,Dh.x7)(e).then(h).catch(s):l=(0,Dh.aQ)(e,h,s),e=>{if(l(),e){const i="function"===typeof e?e():null;n.set(t,a,i)}Pu(c)}}const Uu=Symbol();function Vu(t,e){let n=Pi;const i=Object.assign({},Ru,e),s=(0,Ln.BA)(t),r=i.target||(0,Ln.KR)();qi()&&(i.once=!0);const o=Eu(s,i.ssrKey,Uu,Ri()),a=o!==Uu;a&&(r.value=o);let c=!a;const l=(0,Ln.KR)(!1),h=(0,Ln.KR)(),u=(0,Ln.IJ)(),d=(0,Ln.o5)();let f=Pi;function p(){let e=(0,Ln.BA)(t);const s=new Promise(((t,s)=>{if(n(i.reset),!e)return n=Pi,t(null);l.value=c,c=!0,e.converter||(e=e.withConverter(i.converter)),n=(Ui(e)?Fu:Lu)(r,e,ju,t,s,i)})).catch((t=>(u.value===s&&(h.value=t),Promise.reject(t)))).finally((()=>{u.value===s&&(l.value=!1)}));u.value=s}let g=Pi;function m(t=i.reset){g(),f(),n(t)}return((0,Ln.i9)(t)||"function"===typeof t)&&(g=(0,Nn.wB)(t,p)),p(),s&&(f=ku(u.value,s,i.ssrKey)),(0,Nn.nI)()&&(0,Nn.SS)((()=>u.value)),d&&(0,Ln.jr)(m),Object.defineProperties(r,{error:{get:()=>h},data:{get:()=>r},pending:{get:()=>l},promise:{get:()=>u},stop:{get:()=>m}})}const ju={set:(t,e,n)=>Di(t,e,n),add:(t,e,n)=>t.splice(e,0,n),remove:(t,e)=>t.splice(e,1)};function zu(t,e){return Vu(t,{target:(0,Ln.KR)([]),...e})}const Bu=new WeakMap;function $u(t,e,n){e&&e[t]&&(e[t](n),delete e[t])}const Wu={bindName:"$firestoreBind",unbindName:"$firestoreUnbind"},Hu=function(t,e,n){const i=Object.assign({},Wu,e),{bindName:s,unbindName:r}=i,o=Mn?t.config.globalProperties:t.prototype;o[r]=function(t,e){$u(t,Bu.get(this),e),delete this.$firestoreRefs[t]},o[s]=function(e,s,r){const o=Object.assign({},i,r),a=(0,Ln.lW)(this.$data,e);Bu.has(this)||Bu.set(this,{});const c=Bu.get(this);c[e]&&c[e](o.reset);const l=Gi(n||Ri(),t).run((()=>(0,Ln.uY)())),{promise:h,stop:u}=t.runWithContext((()=>l.run((()=>Vu(s,{target:a,...o}))))),d=t=>{u(t),l.stop()};return c[e]=d,this.$firestoreRefs[e]=s,h.value},t.mixin({beforeCreate(){this.$firestoreRefs=Object.create(null)},created(){const{firestore:t}=this.$options,e="function"===typeof t?t.call(this):t;if(e)for(const n in e)this[s](n,e[n],i)},beforeUnmount(){const t=Bu.get(this);if(t)for(const e in t)t[e]();this.$firestoreRefs=null}})};function qu(t){return(e,n)=>Hu(n,t,e)}Symbol("VueFireAuth");function Ku(t,{firebaseApp:e,modules:n=[]}){t.provide(Oi,e);for(const i of n)i(e,t)}}}]);
//# sourceMappingURL=chunk-vendors.29077c73.js.map