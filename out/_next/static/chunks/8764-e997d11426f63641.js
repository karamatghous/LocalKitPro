(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8764],{79742:function(t,$){"use strict";$.byteLength=function(t){var $=u(t),r=$[0],e=$[1];return(r+e)*3/4-e},$.toByteArray=function(t){var $,r,i,f,o=u(t),s=o[0],h=o[1],a=new n((i=s,f=h,(i+f)*3/4-f)),c=0,l=h>0?s-4:s;for(r=0;r<l;r+=4)$=e[t.charCodeAt(r)]<<18|e[t.charCodeAt(r+1)]<<12|e[t.charCodeAt(r+2)]<<6|e[t.charCodeAt(r+3)],a[c++]=$>>16&255,a[c++]=$>>8&255,a[c++]=255&$;return 2===h&&($=e[t.charCodeAt(r)]<<2|e[t.charCodeAt(r+1)]>>4,a[c++]=255&$),1===h&&($=e[t.charCodeAt(r)]<<10|e[t.charCodeAt(r+1)]<<4|e[t.charCodeAt(r+2)]>>2,a[c++]=$>>8&255,a[c++]=255&$),a},$.fromByteArray=function(t){for(var $,e=t.length,n=e%3,i=[],f=0,o=e-n;f<o;f+=16383)i.push(h(t,f,f+16383>o?o:f+16383));return 1===n?i.push(r[($=t[e-1])>>2]+r[$<<4&63]+"=="):2===n&&i.push(r[($=(t[e-2]<<8)+t[e-1])>>10]+r[$>>4&63]+r[$<<2&63]+"="),i.join("")};for(var r=[],e=[],n="undefined"!=typeof Uint8Array?Uint8Array:Array,i="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",f=0,o=i.length;f<o;++f)r[f]=i[f],e[i.charCodeAt(f)]=f;function u(t){var $=t.length;if($%4>0)throw Error("Invalid string. Length must be a multiple of 4");var r=t.indexOf("=");-1===r&&(r=$);var e=r===$?0:4-r%4;return[r,e]}function s(t){return r[t>>18&63]+r[t>>12&63]+r[t>>6&63]+r[63&t]}function h(t,$,r){for(var e,n=[],i=$;i<r;i+=3)n.push(s(e=(t[i]<<16&16711680)+(t[i+1]<<8&65280)+(255&t[i+2])));return n.join("")}e["-".charCodeAt(0)]=62,e["_".charCodeAt(0)]=63},48764:function(t,$,r){"use strict";/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <http://feross.org>
 * @license  MIT
 */ var e=r(79742),n=r(80645),i=r(5826);function f(){return u.TYPED_ARRAY_SUPPORT?2147483647:1073741823}function o(t,$){if(f()<$)throw RangeError("Invalid typed array length");return u.TYPED_ARRAY_SUPPORT?(t=new Uint8Array($)).__proto__=u.prototype:(null===t&&(t=new u($)),t.length=$),t}function u(t,$,r){if(!u.TYPED_ARRAY_SUPPORT&&!(this instanceof u))return new u(t,$,r);if("number"==typeof t){if("string"==typeof $)throw Error("If encoding is specified then the first argument must be a string");return a(this,t)}return s(this,t,$,r)}function s(t,$,r,e){if("number"==typeof $)throw TypeError('"value" argument must not be a number');return"undefined"!=typeof ArrayBuffer&&$ instanceof ArrayBuffer?function(t,$,r,e){if($.byteLength,r<0||$.byteLength<r)throw RangeError("'offset' is out of bounds");if($.byteLength<r+(e||0))throw RangeError("'length' is out of bounds");return $=void 0===r&&void 0===e?new Uint8Array($):void 0===e?new Uint8Array($,r):new Uint8Array($,r,e),u.TYPED_ARRAY_SUPPORT?(t=$).__proto__=u.prototype:t=c(t,$),t}(t,$,r,e):"string"==typeof $?function(t,$,r){if(("string"!=typeof r||""===r)&&(r="utf8"),!u.isEncoding(r))throw TypeError('"encoding" must be a valid string encoding');var e=0|_($,r),n=(t=o(t,e)).write($,r);return n!==e&&(t=t.slice(0,n)),t}(t,$,r):function(t,$){if(u.isBuffer($)){var r=0|l($.length);return 0===(t=o(t,r)).length||$.copy(t,0,0,r),t}if($){if("undefined"!=typeof ArrayBuffer&&$.buffer instanceof ArrayBuffer||"length"in $)return"number"!=typeof $.length||function(t){return t!=t}($.length)?o(t,0):c(t,$);if("Buffer"===$.type&&i($.data))return c(t,$.data)}throw TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.")}(t,$)}function h(t){if("number"!=typeof t)throw TypeError('"size" argument must be a number');if(t<0)throw RangeError('"size" argument must not be negative')}function a(t,$){if(h($),t=o(t,$<0?0:0|l($)),!u.TYPED_ARRAY_SUPPORT)for(var r=0;r<$;++r)t[r]=0;return t}function c(t,$){var r=$.length<0?0:0|l($.length);t=o(t,r);for(var e=0;e<r;e+=1)t[e]=255&$[e];return t}function l(t){if(t>=f())throw RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+f().toString(16)+" bytes");return 0|t}function _(t,$){if(u.isBuffer(t))return t.length;if("undefined"!=typeof ArrayBuffer&&"function"==typeof ArrayBuffer.isView&&(ArrayBuffer.isView(t)||t instanceof ArrayBuffer))return t.byteLength;"string"!=typeof t&&(t=""+t);var r=t.length;if(0===r)return 0;for(var e=!1;;)switch($){case"ascii":case"latin1":case"binary":return r;case"utf8":case"utf-8":case void 0:return k(t).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return 2*r;case"hex":return r>>>1;case"base64":return z(t).length;default:if(e)return k(t).length;$=(""+$).toLowerCase(),e=!0}}function p(t,$,r){var e=!1;if((void 0===$||$<0)&&($=0),$>this.length||((void 0===r||r>this.length)&&(r=this.length),r<=0||(r>>>=0)<=($>>>=0)))return"";for(t||(t="utf8");;)switch(t){case"hex":return R(this,$,r);case"utf8":case"utf-8":return m(this,$,r);case"ascii":return E(this,$,r);case"latin1":case"binary":return P(this,$,r);case"base64":return A(this,$,r);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return B(this,$,r);default:if(e)throw TypeError("Unknown encoding: "+t);t=(t+"").toLowerCase(),e=!0}}function g(t,$,r){var e=t[$];t[$]=t[r],t[r]=e}function x(t,$,r,e,n){if(0===t.length)return -1;if("string"==typeof r?(e=r,r=0):r>2147483647?r=2147483647:r<-2147483648&&(r=-2147483648),isNaN(r=+r)&&(r=n?0:t.length-1),r<0&&(r=t.length+r),r>=t.length){if(n)return -1;r=t.length-1}else if(r<0){if(!n)return -1;r=0}if("string"==typeof $&&($=u.from($,e)),u.isBuffer($))return 0===$.length?-1:y(t,$,r,e,n);if("number"==typeof $)return($&=255,u.TYPED_ARRAY_SUPPORT&&"function"==typeof Uint8Array.prototype.indexOf)?n?Uint8Array.prototype.indexOf.call(t,$,r):Uint8Array.prototype.lastIndexOf.call(t,$,r):y(t,[$],r,e,n);throw TypeError("val must be string, number or Buffer")}function y(t,$,r,e,n){var i,f=1,o=t.length,u=$.length;if(void 0!==e&&("ucs2"===(e=String(e).toLowerCase())||"ucs-2"===e||"utf16le"===e||"utf-16le"===e)){if(t.length<2||$.length<2)return -1;f=2,o/=2,u/=2,r/=2}function s(t,$){return 1===f?t[$]:t.readUInt16BE($*f)}if(n){var h=-1;for(i=r;i<o;i++)if(s(t,i)===s($,-1===h?0:i-h)){if(-1===h&&(h=i),i-h+1===u)return h*f}else -1!==h&&(i-=i-h),h=-1}else for(r+u>o&&(r=o-u),i=r;i>=0;i--){for(var a=!0,c=0;c<u;c++)if(s(t,i+c)!==s($,c)){a=!1;break}if(a)return i}return -1}function d(t,$,r,e){r=Number(r)||0;var n=t.length-r;e?(e=Number(e))>n&&(e=n):e=n;var i=$.length;if(i%2!=0)throw TypeError("Invalid hex string");e>i/2&&(e=i/2);for(var f=0;f<e;++f){var o=parseInt($.substr(2*f,2),16);if(isNaN(o))break;t[r+f]=o}return f}function v(t,$,r,e){return N(k($,t.length-r),t,r,e)}function w(t,$,r,e){return N(function(t){for(var $=[],r=0;r<t.length;++r)$.push(255&t.charCodeAt(r));return $}($),t,r,e)}function F(t,$,r,e){return N(z($),t,r,e)}function b(t,$,r,e){return N(function(t,$){for(var r,e,n,i=[],f=0;f<t.length&&!(($-=2)<0);++f)e=(r=t.charCodeAt(f))>>8,n=r%256,i.push(n),i.push(e);return i}($,t.length-r),t,r,e)}function A(t,$,r){return 0===$&&r===t.length?e.fromByteArray(t):e.fromByteArray(t.slice($,r))}function m(t,$,r){r=Math.min(t.length,r);for(var e=[],n=$;n<r;){var i,f,o,u,s=t[n],h=null,a=s>239?4:s>223?3:s>191?2:1;if(n+a<=r)switch(a){case 1:s<128&&(h=s);break;case 2:(192&(i=t[n+1]))==128&&(u=(31&s)<<6|63&i)>127&&(h=u);break;case 3:i=t[n+1],f=t[n+2],(192&i)==128&&(192&f)==128&&(u=(15&s)<<12|(63&i)<<6|63&f)>2047&&(u<55296||u>57343)&&(h=u);break;case 4:i=t[n+1],f=t[n+2],o=t[n+3],(192&i)==128&&(192&f)==128&&(192&o)==128&&(u=(15&s)<<18|(63&i)<<12|(63&f)<<6|63&o)>65535&&u<1114112&&(h=u)}null===h?(h=65533,a=1):h>65535&&(h-=65536,e.push(h>>>10&1023|55296),h=56320|1023&h),e.push(h),n+=a}return function(t){var $=t.length;if($<=4096)return String.fromCharCode.apply(String,t);for(var r="",e=0;e<$;)r+=String.fromCharCode.apply(String,t.slice(e,e+=4096));return r}(e)}function E(t,$,r){var e="";r=Math.min(t.length,r);for(var n=$;n<r;++n)e+=String.fromCharCode(127&t[n]);return e}function P(t,$,r){var e="";r=Math.min(t.length,r);for(var n=$;n<r;++n)e+=String.fromCharCode(t[n]);return e}function R(t,$,r){var e=t.length;(!$||$<0)&&($=0),(!r||r<0||r>e)&&(r=e);for(var n="",i=$;i<r;++i)n+=O(t[i]);return n}function B(t,$,r){for(var e=t.slice($,r),n="",i=0;i<e.length;i+=2)n+=String.fromCharCode(e[i]+256*e[i+1]);return n}function C(t,$,r){if(t%1!=0||t<0)throw RangeError("offset is not uint");if(t+$>r)throw RangeError("Trying to access beyond buffer length")}function T(t,$,r,e,n,i){if(!u.isBuffer(t))throw TypeError('"buffer" argument must be a Buffer instance');if($>n||$<i)throw RangeError('"value" argument is out of bounds');if(r+e>t.length)throw RangeError("Index out of range")}function Y(t,$,r,e){$<0&&($=65535+$+1);for(var n=0,i=Math.min(t.length-r,2);n<i;++n)t[r+n]=($&255<<8*(e?n:1-n))>>>(e?n:1-n)*8}function U(t,$,r,e){$<0&&($=4294967295+$+1);for(var n=0,i=Math.min(t.length-r,4);n<i;++n)t[r+n]=$>>>(e?n:3-n)*8&255}function D(t,$,r,e,n,i){if(r+e>t.length||r<0)throw RangeError("Index out of range")}function I(t,$,r,e,i){return i||D(t,$,r,4,34028234663852886e22,-34028234663852886e22),n.write(t,$,r,e,23,4),r+4}function S(t,$,r,e,i){return i||D(t,$,r,8,17976931348623157e292,-17976931348623157e292),n.write(t,$,r,e,52,8),r+8}$.Buffer=u,$.SlowBuffer=function(t){return+t!=t&&(t=0),u.alloc(+t)},$.INSPECT_MAX_BYTES=50,u.TYPED_ARRAY_SUPPORT=void 0!==r.g.TYPED_ARRAY_SUPPORT?r.g.TYPED_ARRAY_SUPPORT:function(){try{var t=new Uint8Array(1);return t.__proto__={__proto__:Uint8Array.prototype,foo:function(){return 42}},42===t.foo()&&"function"==typeof t.subarray&&0===t.subarray(1,1).byteLength}catch($){return!1}}(),$.kMaxLength=f(),u.poolSize=8192,u._augment=function(t){return t.__proto__=u.prototype,t},u.from=function(t,$,r){return s(null,t,$,r)},u.TYPED_ARRAY_SUPPORT&&(u.prototype.__proto__=Uint8Array.prototype,u.__proto__=Uint8Array,"undefined"!=typeof Symbol&&Symbol.species&&u[Symbol.species]===u&&Object.defineProperty(u,Symbol.species,{value:null,configurable:!0})),u.alloc=function(t,$,r){var e,n,i;return e=t,n=$,i=r,(h(e),e<=0)?o(null,e):void 0!==n?"string"==typeof i?o(null,e).fill(n,i):o(null,e).fill(n):o(null,e)},u.allocUnsafe=function(t){return a(null,t)},u.allocUnsafeSlow=function(t){return a(null,t)},u.isBuffer=function(t){return!!(null!=t&&t._isBuffer)},u.compare=function(t,$){if(!u.isBuffer(t)||!u.isBuffer($))throw TypeError("Arguments must be Buffers");if(t===$)return 0;for(var r=t.length,e=$.length,n=0,i=Math.min(r,e);n<i;++n)if(t[n]!==$[n]){r=t[n],e=$[n];break}return r<e?-1:e<r?1:0},u.isEncoding=function(t){switch(String(t).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},u.concat=function(t,$){if(!i(t))throw TypeError('"list" argument must be an Array of Buffers');if(0===t.length)return u.alloc(0);if(void 0===$)for(r=0,$=0;r<t.length;++r)$+=t[r].length;var r,e=u.allocUnsafe($),n=0;for(r=0;r<t.length;++r){var f=t[r];if(!u.isBuffer(f))throw TypeError('"list" argument must be an Array of Buffers');f.copy(e,n),n+=f.length}return e},u.byteLength=_,u.prototype._isBuffer=!0,u.prototype.swap16=function(){var t=this.length;if(t%2!=0)throw RangeError("Buffer size must be a multiple of 16-bits");for(var $=0;$<t;$+=2)g(this,$,$+1);return this},u.prototype.swap32=function(){var t=this.length;if(t%4!=0)throw RangeError("Buffer size must be a multiple of 32-bits");for(var $=0;$<t;$+=4)g(this,$,$+3),g(this,$+1,$+2);return this},u.prototype.swap64=function(){var t=this.length;if(t%8!=0)throw RangeError("Buffer size must be a multiple of 64-bits");for(var $=0;$<t;$+=8)g(this,$,$+7),g(this,$+1,$+6),g(this,$+2,$+5),g(this,$+3,$+4);return this},u.prototype.toString=function(){var t=0|this.length;return 0===t?"":0===arguments.length?m(this,0,t):p.apply(this,arguments)},u.prototype.equals=function(t){if(!u.isBuffer(t))throw TypeError("Argument must be a Buffer");return this===t||0===u.compare(this,t)},u.prototype.inspect=function(){var t="",r=$.INSPECT_MAX_BYTES;return this.length>0&&(t=this.toString("hex",0,r).match(/.{2}/g).join(" "),this.length>r&&(t+=" ... ")),"<Buffer "+t+">"},u.prototype.compare=function(t,$,r,e,n){if(!u.isBuffer(t))throw TypeError("Argument must be a Buffer");if(void 0===$&&($=0),void 0===r&&(r=t?t.length:0),void 0===e&&(e=0),void 0===n&&(n=this.length),$<0||r>t.length||e<0||n>this.length)throw RangeError("out of range index");if(e>=n&&$>=r)return 0;if(e>=n)return -1;if($>=r)return 1;if($>>>=0,r>>>=0,e>>>=0,n>>>=0,this===t)return 0;for(var i=n-e,f=r-$,o=Math.min(i,f),s=this.slice(e,n),h=t.slice($,r),a=0;a<o;++a)if(s[a]!==h[a]){i=s[a],f=h[a];break}return i<f?-1:f<i?1:0},u.prototype.includes=function(t,$,r){return -1!==this.indexOf(t,$,r)},u.prototype.indexOf=function(t,$,r){return x(this,t,$,r,!0)},u.prototype.lastIndexOf=function(t,$,r){return x(this,t,$,r,!1)},u.prototype.write=function(t,$,r,e){if(void 0===$)e="utf8",r=this.length,$=0;else if(void 0===r&&"string"==typeof $)e=$,r=this.length,$=0;else if(isFinite($))$|=0,isFinite(r)?(r|=0,void 0===e&&(e="utf8")):(e=r,r=void 0);else throw Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");var n,i,f,o,u=this.length-$;if((void 0===r||r>u)&&(r=u),t.length>0&&(r<0||$<0)||$>this.length)throw RangeError("Attempt to write outside buffer bounds");e||(e="utf8");for(var s=!1;;)switch(e){case"hex":return d(this,t,$,r);case"utf8":case"utf-8":return v(this,t,$,r);case"ascii":return w(this,t,$,r);case"latin1":case"binary":return n=this,i=t,f=$,w(n,i,f,o=r);case"base64":return F(this,t,$,r);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return b(this,t,$,r);default:if(s)throw TypeError("Unknown encoding: "+e);e=(""+e).toLowerCase(),s=!0}},u.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}},u.prototype.slice=function(t,$){var r,e=this.length;if(t=~~t,$=void 0===$?e:~~$,t<0?(t+=e)<0&&(t=0):t>e&&(t=e),$<0?($+=e)<0&&($=0):$>e&&($=e),$<t&&($=t),u.TYPED_ARRAY_SUPPORT)(r=this.subarray(t,$)).__proto__=u.prototype;else{var n=$-t;r=new u(n,void 0);for(var i=0;i<n;++i)r[i]=this[i+t]}return r},u.prototype.readUIntLE=function(t,$,r){t|=0,$|=0,r||C(t,$,this.length);for(var e=this[t],n=1,i=0;++i<$&&(n*=256);)e+=this[t+i]*n;return e},u.prototype.readUIntBE=function(t,$,r){t|=0,$|=0,r||C(t,$,this.length);for(var e=this[t+--$],n=1;$>0&&(n*=256);)e+=this[t+--$]*n;return e},u.prototype.readUInt8=function(t,$){return $||C(t,1,this.length),this[t]},u.prototype.readUInt16LE=function(t,$){return $||C(t,2,this.length),this[t]|this[t+1]<<8},u.prototype.readUInt16BE=function(t,$){return $||C(t,2,this.length),this[t]<<8|this[t+1]},u.prototype.readUInt32LE=function(t,$){return $||C(t,4,this.length),(this[t]|this[t+1]<<8|this[t+2]<<16)+16777216*this[t+3]},u.prototype.readUInt32BE=function(t,$){return $||C(t,4,this.length),16777216*this[t]+(this[t+1]<<16|this[t+2]<<8|this[t+3])},u.prototype.readIntLE=function(t,$,r){t|=0,$|=0,r||C(t,$,this.length);for(var e=this[t],n=1,i=0;++i<$&&(n*=256);)e+=this[t+i]*n;return e>=(n*=128)&&(e-=Math.pow(2,8*$)),e},u.prototype.readIntBE=function(t,$,r){t|=0,$|=0,r||C(t,$,this.length);for(var e=$,n=1,i=this[t+--e];e>0&&(n*=256);)i+=this[t+--e]*n;return i>=(n*=128)&&(i-=Math.pow(2,8*$)),i},u.prototype.readInt8=function(t,$){return($||C(t,1,this.length),128&this[t])?-((255-this[t]+1)*1):this[t]},u.prototype.readInt16LE=function(t,$){$||C(t,2,this.length);var r=this[t]|this[t+1]<<8;return 32768&r?4294901760|r:r},u.prototype.readInt16BE=function(t,$){$||C(t,2,this.length);var r=this[t+1]|this[t]<<8;return 32768&r?4294901760|r:r},u.prototype.readInt32LE=function(t,$){return $||C(t,4,this.length),this[t]|this[t+1]<<8|this[t+2]<<16|this[t+3]<<24},u.prototype.readInt32BE=function(t,$){return $||C(t,4,this.length),this[t]<<24|this[t+1]<<16|this[t+2]<<8|this[t+3]},u.prototype.readFloatLE=function(t,$){return $||C(t,4,this.length),n.read(this,t,!0,23,4)},u.prototype.readFloatBE=function(t,$){return $||C(t,4,this.length),n.read(this,t,!1,23,4)},u.prototype.readDoubleLE=function(t,$){return $||C(t,8,this.length),n.read(this,t,!0,52,8)},u.prototype.readDoubleBE=function(t,$){return $||C(t,8,this.length),n.read(this,t,!1,52,8)},u.prototype.writeUIntLE=function(t,$,r,e){if(t=+t,$|=0,r|=0,!e){var n=Math.pow(2,8*r)-1;T(this,t,$,r,n,0)}var i=1,f=0;for(this[$]=255&t;++f<r&&(i*=256);)this[$+f]=t/i&255;return $+r},u.prototype.writeUIntBE=function(t,$,r,e){if(t=+t,$|=0,r|=0,!e){var n=Math.pow(2,8*r)-1;T(this,t,$,r,n,0)}var i=r-1,f=1;for(this[$+i]=255&t;--i>=0&&(f*=256);)this[$+i]=t/f&255;return $+r},u.prototype.writeUInt8=function(t,$,r){return t=+t,$|=0,r||T(this,t,$,1,255,0),u.TYPED_ARRAY_SUPPORT||(t=Math.floor(t)),this[$]=255&t,$+1},u.prototype.writeUInt16LE=function(t,$,r){return t=+t,$|=0,r||T(this,t,$,2,65535,0),u.TYPED_ARRAY_SUPPORT?(this[$]=255&t,this[$+1]=t>>>8):Y(this,t,$,!0),$+2},u.prototype.writeUInt16BE=function(t,$,r){return t=+t,$|=0,r||T(this,t,$,2,65535,0),u.TYPED_ARRAY_SUPPORT?(this[$]=t>>>8,this[$+1]=255&t):Y(this,t,$,!1),$+2},u.prototype.writeUInt32LE=function(t,$,r){return t=+t,$|=0,r||T(this,t,$,4,4294967295,0),u.TYPED_ARRAY_SUPPORT?(this[$+3]=t>>>24,this[$+2]=t>>>16,this[$+1]=t>>>8,this[$]=255&t):U(this,t,$,!0),$+4},u.prototype.writeUInt32BE=function(t,$,r){return t=+t,$|=0,r||T(this,t,$,4,4294967295,0),u.TYPED_ARRAY_SUPPORT?(this[$]=t>>>24,this[$+1]=t>>>16,this[$+2]=t>>>8,this[$+3]=255&t):U(this,t,$,!1),$+4},u.prototype.writeIntLE=function(t,$,r,e){if(t=+t,$|=0,!e){var n=Math.pow(2,8*r-1);T(this,t,$,r,n-1,-n)}var i=0,f=1,o=0;for(this[$]=255&t;++i<r&&(f*=256);)t<0&&0===o&&0!==this[$+i-1]&&(o=1),this[$+i]=(t/f>>0)-o&255;return $+r},u.prototype.writeIntBE=function(t,$,r,e){if(t=+t,$|=0,!e){var n=Math.pow(2,8*r-1);T(this,t,$,r,n-1,-n)}var i=r-1,f=1,o=0;for(this[$+i]=255&t;--i>=0&&(f*=256);)t<0&&0===o&&0!==this[$+i+1]&&(o=1),this[$+i]=(t/f>>0)-o&255;return $+r},u.prototype.writeInt8=function(t,$,r){return t=+t,$|=0,r||T(this,t,$,1,127,-128),u.TYPED_ARRAY_SUPPORT||(t=Math.floor(t)),t<0&&(t=255+t+1),this[$]=255&t,$+1},u.prototype.writeInt16LE=function(t,$,r){return t=+t,$|=0,r||T(this,t,$,2,32767,-32768),u.TYPED_ARRAY_SUPPORT?(this[$]=255&t,this[$+1]=t>>>8):Y(this,t,$,!0),$+2},u.prototype.writeInt16BE=function(t,$,r){return t=+t,$|=0,r||T(this,t,$,2,32767,-32768),u.TYPED_ARRAY_SUPPORT?(this[$]=t>>>8,this[$+1]=255&t):Y(this,t,$,!1),$+2},u.prototype.writeInt32LE=function(t,$,r){return t=+t,$|=0,r||T(this,t,$,4,2147483647,-2147483648),u.TYPED_ARRAY_SUPPORT?(this[$]=255&t,this[$+1]=t>>>8,this[$+2]=t>>>16,this[$+3]=t>>>24):U(this,t,$,!0),$+4},u.prototype.writeInt32BE=function(t,$,r){return t=+t,$|=0,r||T(this,t,$,4,2147483647,-2147483648),t<0&&(t=4294967295+t+1),u.TYPED_ARRAY_SUPPORT?(this[$]=t>>>24,this[$+1]=t>>>16,this[$+2]=t>>>8,this[$+3]=255&t):U(this,t,$,!1),$+4},u.prototype.writeFloatLE=function(t,$,r){return I(this,t,$,!0,r)},u.prototype.writeFloatBE=function(t,$,r){return I(this,t,$,!1,r)},u.prototype.writeDoubleLE=function(t,$,r){return S(this,t,$,!0,r)},u.prototype.writeDoubleBE=function(t,$,r){return S(this,t,$,!1,r)},u.prototype.copy=function(t,$,r,e){if(r||(r=0),e||0===e||(e=this.length),$>=t.length&&($=t.length),$||($=0),e>0&&e<r&&(e=r),e===r||0===t.length||0===this.length)return 0;if($<0)throw RangeError("targetStart out of bounds");if(r<0||r>=this.length)throw RangeError("sourceStart out of bounds");if(e<0)throw RangeError("sourceEnd out of bounds");e>this.length&&(e=this.length),t.length-$<e-r&&(e=t.length-$+r);var n,i=e-r;if(this===t&&r<$&&$<e)for(n=i-1;n>=0;--n)t[n+$]=this[n+r];else if(i<1e3||!u.TYPED_ARRAY_SUPPORT)for(n=0;n<i;++n)t[n+$]=this[n+r];else Uint8Array.prototype.set.call(t,this.subarray(r,r+i),$);return i},u.prototype.fill=function(t,$,r,e){if("string"==typeof t){if("string"==typeof $?(e=$,$=0,r=this.length):"string"==typeof r&&(e=r,r=this.length),1===t.length){var n,i=t.charCodeAt(0);i<256&&(t=i)}if(void 0!==e&&"string"!=typeof e)throw TypeError("encoding must be a string");if("string"==typeof e&&!u.isEncoding(e))throw TypeError("Unknown encoding: "+e)}else"number"==typeof t&&(t&=255);if($<0||this.length<$||this.length<r)throw RangeError("Out of range index");if(r<=$)return this;if($>>>=0,r=void 0===r?this.length:r>>>0,t||(t=0),"number"==typeof t)for(n=$;n<r;++n)this[n]=t;else{var f=u.isBuffer(t)?t:k(new u(t,e).toString()),o=f.length;for(n=0;n<r-$;++n)this[n+$]=f[n%o]}return this};var L=/[^+\/0-9A-Za-z-_]/g;function O(t){return t<16?"0"+t.toString(16):t.toString(16)}function k(t,$){$=$||1/0;for(var r,e=t.length,n=null,i=[],f=0;f<e;++f){if((r=t.charCodeAt(f))>55295&&r<57344){if(!n){if(r>56319||f+1===e){($-=3)>-1&&i.push(239,191,189);continue}n=r;continue}if(r<56320){($-=3)>-1&&i.push(239,191,189),n=r;continue}r=(n-55296<<10|r-56320)+65536}else n&&($-=3)>-1&&i.push(239,191,189);if(n=null,r<128){if(($-=1)<0)break;i.push(r)}else if(r<2048){if(($-=2)<0)break;i.push(r>>6|192,63&r|128)}else if(r<65536){if(($-=3)<0)break;i.push(r>>12|224,r>>6&63|128,63&r|128)}else if(r<1114112){if(($-=4)<0)break;i.push(r>>18|240,r>>12&63|128,r>>6&63|128,63&r|128)}else throw Error("Invalid code point")}return i}function z(t){return e.toByteArray(function(t){var $;if((t=($=t,$.trim?$.trim():$.replace(/^\s+|\s+$/g,"")).replace(L,"")).length<2)return"";for(;t.length%4!=0;)t+="=";return t}(t))}function N(t,$,r,e){for(var n=0;n<e&&!(n+r>=$.length)&&!(n>=t.length);++n)$[n+r]=t[n];return n}function j(t){return t!=t}},80645:function(t,$){/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */ $.read=function(t,$,r,e,n){var i,f,o=8*n-e-1,u=(1<<o)-1,s=u>>1,h=-7,a=r?n-1:0,c=r?-1:1,l=t[$+a];for(a+=c,i=l&(1<<-h)-1,l>>=-h,h+=o;h>0;i=256*i+t[$+a],a+=c,h-=8);for(f=i&(1<<-h)-1,i>>=-h,h+=e;h>0;f=256*f+t[$+a],a+=c,h-=8);if(0===i)i=1-s;else{if(i===u)return f?NaN:(l?-1:1)*(1/0);f+=Math.pow(2,e),i-=s}return(l?-1:1)*f*Math.pow(2,i-e)},$.write=function(t,$,r,e,n,i){var f,o,u,s=8*i-n-1,h=(1<<s)-1,a=h>>1,c=23===n?5960464477539062e-23:0,l=e?0:i-1,_=e?1:-1,p=$<0||0===$&&1/$<0?1:0;for(isNaN($=Math.abs($))||$===1/0?(o=isNaN($)?1:0,f=h):(f=Math.floor(Math.log($)/Math.LN2),$*(u=Math.pow(2,-f))<1&&(f--,u*=2),f+a>=1?$+=c/u:$+=c*Math.pow(2,1-a),$*u>=2&&(f++,u/=2),f+a>=h?(o=0,f=h):f+a>=1?(o=($*u-1)*Math.pow(2,n),f+=a):(o=$*Math.pow(2,a-1)*Math.pow(2,n),f=0));n>=8;t[r+l]=255&o,l+=_,o/=256,n-=8);for(f=f<<n|o,s+=n;s>0;t[r+l]=255&f,l+=_,f/=256,s-=8);t[r+l-_]|=128*p}},5826:function(t){var $={}.toString;t.exports=Array.isArray||function(t){return"[object Array]"==$.call(t)}}}]);