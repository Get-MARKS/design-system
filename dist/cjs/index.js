'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z$b = "@import url(\"https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap\");\n:root {\n  --round-xs: 2px;\n  --round-s: 4px;\n  --round-m: 8px;\n  --round-l: 12px;\n  --round-xl: 16px;\n  --round-xxl: 20px;\n  --padding-xxs: 2px;\n  --padding-xs: 4px;\n  --padding-s: 8px;\n  --padding-m: 12px;\n  --padding-l: 16px;\n  --padding-xl: 20px;\n  --padding-xxl: 24px;\n  --shadow-xs: 0px 1px 2px 0px rgba(0, 0, 0, 0.0509803922);\n  --shadow-sm: 0px 1px 3px 0px rgba(0, 0, 0, 0.0784313725);\n  --shadow-m: 0px 1.5px 4px -1px rgba(0, 0, 0, 0.1215686275);\n  --shadow-lg: 0px 4px 6px -2px rgba(0, 0, 0, 0.1019607843), 0px 10px 15px -3px rgba(0, 0, 0, 0.0509803922);\n  --shadow-xl: 0px 10px 10px -5px rgba(0, 0, 0, 0.1019607843), 0px 20px 25px -5px rgba(0, 0, 0, 0.0392156863);\n  --shadow-2xl: 0px 25px 50px -12px rgba(0, 0, 0, 0.2509803922);\n  --shadow-flat: 0px 1px 0px #e4e4e7;\n  --shadow-in: inset 0px 2px 4px #525252;\n  --base-00: #ffffff;\n  --base-50: rgba(26, 26, 26, 0.0509803922);\n  --base-100: rgba(26, 26, 26, 0.1019607843);\n  --base-200: rgba(26, 26, 26, 0.2);\n  --base-300: rgba(26, 26, 26, 0.3019607843);\n  --base-400: rgba(26, 26, 26, 0.4);\n  --base-500: rgba(26, 26, 26, 0.5019607843);\n  --base-600: rgba(26, 26, 26, 0.6);\n  --base-700: rgba(26, 26, 26, 0.7019607843);\n  --base-800: rgba(26, 26, 26, 0.8);\n  --base-900: #1a1a1a;\n  --primary-50: #f2f7ff;\n  --primary-100: #dcebfe;\n  --primary-200: #bedbfe;\n  --primary-300: #91c3fd;\n  --primary-400: #61a6fa;\n  --primary-500: #3479e9;\n  --primary-600: #2463eb;\n  --primary-700: #1d4fd7;\n  --primary-800: #1e3fae;\n  --primary-900: #1e3b8a;\n  --secondary-50: #faf5ff;\n  --secondary-100: #f2e5ff;\n  --secondary-200: #ead6ff;\n  --secondary-300: #d8b4fe;\n  --secondary-400: #bf83fc;\n  --secondary-500: #a855f7;\n  --secondary-600: #9234ea;\n  --secondary-700: #7e22ce;\n  --secondary-800: #6a21a6;\n  --secondary-900: #591c87;\n  --tertiary-50: #fdfdfd;\n  --tertiary-100: #f4f4f5;\n  --tertiary-200: #e4e4e7;\n  --tertiary-300: #d4d4d8;\n  --tertiary-400: #a1a1aa;\n  --tertiary-500: #71717a;\n  --tertiary-600: #52525b;\n  --tertiary-700: #3f3f46;\n  --tertiary-800: #27272a;\n  --tertiary-900: #18181b;\n  --success-50: #f2fdf5;\n  --success-100: #defce9;\n  --success-200: #bbf7d0;\n  --success-300: #85efac;\n  --success-400: #4ade80;\n  --success-500: #1ac057;\n  --success-600: #16a249;\n  --success-700: #157f3c;\n  --success-800: #1c713c;\n  --success-900: #114c29;\n  --warning-50: #fef1f1;\n  --warning-100: #fee1e1;\n  --warning-200: #fec8c8;\n  --warning-300: #fca6a6;\n  --warning-400: #fd6b6b;\n  --warning-500: #ef4343;\n  --warning-600: #dc2828;\n  --warning-700: #ba1c1c;\n  --warning-800: #981b1b;\n  --warning-900: #811d1d;\n  --highlight-50: #fefce7;\n  --highlight-100: #fef9c3;\n  --highlight-200: #fef08b;\n  --highlight-300: #fddf49;\n  --highlight-400: #facc14;\n  --highlight-500: #e7b008;\n  --highlight-600: #c88a04;\n  --highlight-700: #a26107;\n  --highlight-800: #864e0e;\n  --highlight-900: #733f12;\n  --blue-gray-50: #f8fafc;\n  --blue-gray-100: #f1f5f9;\n  --blue-gray-200: #e1e7ef;\n  --blue-gray-300: #cbd5e1;\n  --blue-gray-400: #94a3b8;\n  --blue-gray-500: #65758b;\n  --blue-gray-600: #48566a;\n  --blue-gray-700: #344256;\n  --blue-gray-800: #1d283a;\n  --blue-gray-900: #0f1729;\n  --bronze-50: #fafaf9;\n  --bronze-100: #f5f5f4;\n  --bronze-200: #e7e5e4;\n  --bronze-300: #d6d3d1;\n  --bronze-400: #a8a29f;\n  --bronze-500: #78726d;\n  --bronze-600: #56524e;\n  --bronze-700: #44403c;\n  --bronze-800: #292524;\n  --bronze-900: #1c1917;\n  --cyan-50: #ebfeff;\n  --cyan-100: #cdfafe;\n  --cyan-200: #a6f3fc;\n  --cyan-300: #67e8f9;\n  --cyan-400: #20d3ee;\n  --cyan-500: #07b6d5;\n  --cyan-600: #088eaf;\n  --cyan-700: #0e7490;\n  --cyan-800: #155f75;\n  --cyan-900: #164f64;\n  --emerald-50: #edfdf5;\n  --emerald-100: #d1fae5;\n  --emerald-200: #a5f3cf;\n  --emerald-300: #6ee7b7;\n  --emerald-400: #36d399;\n  --emerald-500: #10b77f;\n  --emerald-600: #059467;\n  --emerald-700: #047656;\n  --emerald-800: #066046;\n  --emerald-900: #064b39;\n  --fuchsia-50: #fdf5ff;\n  --fuchsia-100: #f9e5ff;\n  --fuchsia-200: #f5d2fe;\n  --fuchsia-300: #f0abfc;\n  --fuchsia-400: #e87bf9;\n  --fuchsia-500: #d948ef;\n  --fuchsia-600: #bf27d3;\n  --fuchsia-700: #a31daf;\n  --fuchsia-800: #85198f;\n  --fuchsia-900: #711a75;\n  --indigo-50: #f0f3ff;\n  --indigo-100: #e0e8ff;\n  --indigo-200: #c8d3fe;\n  --indigo-300: #a6b4fc;\n  --indigo-400: #828df8;\n  --indigo-500: #6467f2;\n  --indigo-600: #5048e5;\n  --indigo-700: #463acb;\n  --indigo-800: #372fa2;\n  --indigo-900: #312e7f;\n  --light-blue-50: #f0f9ff;\n  --light-blue-100: #e1f3fe;\n  --light-blue-200: #bae5fd;\n  --light-blue-300: #7ed4fc;\n  --light-blue-400: #3abff8;\n  --light-blue-500: #0da2e7;\n  --light-blue-600: #0284c5;\n  --light-blue-700: #0369a0;\n  --light-blue-800: #075783;\n  --light-blue-900: #0c4a6e;\n  --lime-50: #f7fee7;\n  --lime-100: #ebfcca;\n  --lime-200: #d9f99f;\n  --lime-300: #bef263;\n  --lime-400: #a1e633;\n  --lime-500: #82cb15;\n  --lime-600: #66a50d;\n  --lime-700: #4c7b0f;\n  --lime-800: #406312;\n  --lime-900: #355214;\n  --metal-50: #f9fafb;\n  --metal-100: #f3f4f6;\n  --metal-200: #e5e7eb;\n  --metal-300: #d1d5db;\n  --metal-400: #9ca3b0;\n  --metal-500: #6b7280;\n  --metal-600: #4b5563;\n  --metal-700: #384252;\n  --metal-800: #1f2937;\n  --metal-900: #111827;\n  --orange-50: #fff6eb;\n  --orange-200: #fed6a9;\n  --orange-400: #fb923c;\n  --pink-50: #fdf2f8;\n  --pink-100: #fce8f4;\n  --pink-200: #fbd0e8;\n  --pink-300: #f9a9d5;\n  --pink-400: #f471b5;\n  --pink-500: #ec4699;\n  --pink-600: #db2979;\n  --pink-700: #bf185d;\n  --pink-800: #9b174c;\n  --pink-900: #811842;\n  --rose-50: #fff0f1;\n  --rose-100: #ffe5e7;\n  --rose-200: #fecdd3;\n  --rose-300: #fda5af;\n  --rose-400: #fb6f84;\n  --rose-500: #f43e5c;\n  --rose-600: #e21d48;\n  --rose-700: #bf123d;\n  --rose-800: #a1123a;\n  --rose-900: #861336;\n  --teal-50: #f2fdfa;\n  --teal-100: #cbfbf0;\n  --teal-200: #98f6e3;\n  --teal-300: #5dead5;\n  --teal-400: #2bd4bd;\n  --teal-500: #14b8a5;\n  --teal-600: #0d968b;\n  --teal-700: #0f756d;\n  --teal-800: #115f5a;\n  --teal-900: #134e4a;\n  --violet-50: #f6f5ff;\n  --violet-100: #ebe7fe;\n  --violet-200: #ded7fe;\n  --violet-300: #c3b4fd;\n  --violet-400: #a689fa;\n  --violet-500: #895af6;\n  --violet-600: #7c3bed;\n  --violet-700: #6b26d9;\n  --violet-800: #5a21b5;\n  --violet-900: #4d1d95;\n}\n\n@media (prefers-color-scheme: dark) {\n  :root {\n    --shadow-xs: 0px 0.5px 0px #525252;\n    --shadow-sm: 0px 1px 1px rgba(18, 18, 18, 0.3019607843);\n    --shadow-m: 0px 2.5px 4px rgba(18, 18, 18, 0.6509803922);\n    --shadow-lg: 0px 3px 5px rgba(18, 18, 18, 0.8);\n    --shadow-xl: 0px 2.5px 8px #121212;\n    --shadow-2xl: 0px 4px 12px #121212;\n    --shadow-flat: 0px 1px 0px #434343;\n    --shadow-in: inset 0px 1px 2px rgba(255, 255, 255, 0.24);\n    --base-00: #141414;\n    --base-50: rgba(255, 255, 255, 0.0509803922);\n    --base-100: rgba(255, 255, 255, 0.1019607843);\n    --base-200: rgba(255, 255, 255, 0.2);\n    --base-300: rgba(255, 255, 255, 0.3019607843);\n    --base-400: rgba(255, 255, 255, 0.4);\n    --base-500: rgba(255, 255, 255, 0.5019607843);\n    --base-600: rgba(255, 255, 255, 0.6);\n    --base-700: rgba(255, 255, 255, 0.7019607843);\n    --base-800: rgba(255, 255, 255, 0.8);\n    --base-900: #ffffff;\n    --primary-50: #1d223f;\n    --primary-100: #0a318c;\n    --primary-200: #1347cc;\n    --primary-300: #1055ea;\n    --primary-400: #357aea;\n    --primary-500: #2e88f6;\n    --primary-600: #50a1ff;\n    --primary-700: #7ab7ff;\n    --primary-800: #dcebfe;\n    --primary-900: #f0f6ff;\n    --secondary-50: #35194a;\n    --secondary-100: #4e1d72;\n    --secondary-200: #7e22ce;\n    --secondary-300: #9c40ec;\n    --secondary-400: #ab57ff;\n    --secondary-500: #d07fff;\n    --secondary-600: #e9a0ff;\n    --secondary-700: #ffbcff;\n    --secondary-800: #ffd6ff;\n    --secondary-900: #ffefff;\n    --tertiary-50: #272727;\n    --tertiary-100: #333333;\n    --tertiary-200: #434343;\n    --tertiary-300: #5f5f5f;\n    --tertiary-400: #747474;\n    --tertiary-500: #878787;\n    --tertiary-600: #9b9b9b;\n    --tertiary-700: #b9b9b9;\n    --tertiary-800: #d7d7d7;\n    --tertiary-900: #efefef;\n    --success-50: #0e3619;\n    --success-100: #14522d;\n    --success-200: #166434;\n    --success-300: #119541;\n    --success-400: #21c45d;\n    --success-500: #4ade80;\n    --success-600: #85efac;\n    --success-700: #bbf7d0;\n    --success-800: #defce9;\n    --success-900: #f2fdf5;\n    --warning-50: #5d2323;\n    --warning-100: #781f1f;\n    --warning-200: #ae4040;\n    --warning-300: #dc3d3d;\n    --warning-400: #f64d4d;\n    --warning-500: #ff6262;\n    --warning-600: #ff9393;\n    --warning-700: #ffa7a7;\n    --warning-800: #ffbbbb;\n    --warning-900: #fed0d0;\n    --highlight-50: #413d17;\n    --highlight-100: #864e0e;\n    --highlight-200: #a26107;\n    --highlight-300: #c88a04;\n    --highlight-400: #e7b008;\n    --highlight-500: #facc14;\n    --highlight-600: #fddf49;\n    --highlight-700: #fef08b;\n    --highlight-800: #fefacb;\n    --highlight-900: #fefce6;\n    --blue-gray-50: #0f1729;\n    --blue-gray-100: #1d283a;\n    --blue-gray-200: #344256;\n    --blue-gray-300: #48566a;\n    --blue-gray-400: #65758b;\n    --blue-gray-500: #94a3b8;\n    --blue-gray-600: #cbd5e1;\n    --blue-gray-700: #e1e7ef;\n    --blue-gray-800: #f1f5f9;\n    --blue-gray-900: #f8fafc;\n    --bronze-50: #1c1917;\n    --bronze-100: #292524;\n    --bronze-200: #44403c;\n    --bronze-300: #56524e;\n    --bronze-400: #78726d;\n    --bronze-500: #a8a29f;\n    --bronze-600: #d6d3d1;\n    --bronze-700: #e7e5e4;\n    --bronze-800: #f5f5f4;\n    --bronze-900: #fafaf9;\n    --cyan-50: #164f64;\n    --cyan-100: #155f75;\n    --cyan-200: #0e7490;\n    --cyan-300: #088eaf;\n    --cyan-400: #07b6d5;\n    --cyan-500: #20d3ee;\n    --cyan-600: #20d3ee;\n    --cyan-700: #67e8f9;\n    --cyan-800: #cdfafe;\n    --cyan-900: #ebfeff;\n    --emerald-50: #064c39;\n    --emerald-100: #066046;\n    --emerald-200: #047756;\n    --emerald-300: #059467;\n    --emerald-400: #10b77f;\n    --emerald-500: #36d399;\n    --emerald-600: #6ee7b7;\n    --emerald-700: #a5f3cf;\n    --emerald-800: #d1fae5;\n    --emerald-900: #edfdf5;\n    --fuchsia-50: #701076;\n    --fuchsia-100: #85198f;\n    --fuchsia-200: #a31daf;\n    --fuchsia-300: #bf27d3;\n    --fuchsia-400: #d948ef;\n    --fuchsia-500: #e87bf9;\n    --fuchsia-600: #f0abfc;\n    --fuchsia-700: #f5d2fe;\n    --fuchsia-800: #f9e5ff;\n    --fuchsia-900: #fdf5ff;\n    --indigo-50: #312e7f;\n    --indigo-100: #372fa2;\n    --indigo-200: #463acb;\n    --indigo-300: #5048e5;\n    --indigo-400: #6467f2;\n    --indigo-500: #828df8;\n    --indigo-600: #a6b4fc;\n    --indigo-700: #c8d3fe;\n    --indigo-800: #e0e8ff;\n    --indigo-900: #f0f3ff;\n    --light-blue-50: #0c4a6e;\n    --light-blue-100: #075783;\n    --light-blue-200: #0369a0;\n    --light-blue-300: #0284c5;\n    --light-blue-400: #0da2e7;\n    --light-blue-500: #3abff8;\n    --light-blue-600: #7ed4fc;\n    --light-blue-700: #bae5fd;\n    --light-blue-800: #e1f3fe;\n    --light-blue-900: #f0f9ff;\n    --lime-50: #355214;\n    --lime-100: #406312;\n    --lime-200: #4c7b0f;\n    --lime-300: #66a50d;\n    --lime-400: #82cb15;\n    --lime-500: #a1e633;\n    --lime-600: #bef263;\n    --lime-700: #d9f99f;\n    --lime-800: #ebfcca;\n    --lime-900: #f7fee7;\n    --metal-100: #1f2937;\n    --metal-200: #384252;\n    --metal-300: #4b5563;\n    --metal-400: #6b7280;\n    --metal-500: #9ca3b0;\n    --metal-600: #d1d5db;\n    --metal-700: #e5e7eb;\n    --metal-800: #f3f4f6;\n    --metal-900: #f9fafb;\n    --orange-50: #582817;\n    --orange-100: #9b3412;\n    --orange-200: #af4d2c;\n    --orange-300: #e05f03;\n    --orange-400: #f97415;\n    --orange-500: #fb923c;\n    --orange-600: #fdba72;\n    --orange-700: #fed6a9;\n    --orange-800: #ffedd6;\n    --orange-900: #fff6eb;\n    --pink-50: #811842;\n    --pink-100: #9b174c;\n    --pink-200: #bf185d;\n    --pink-300: #db2979;\n    --pink-400: #ec4699;\n    --pink-500: #f471b5;\n    --pink-600: #f9a9d5;\n    --pink-700: #fbd0e8;\n    --pink-800: #fce8f4;\n    --pink-900: #fdf2f8;\n    --rose-50: #861336;\n    --rose-100: #a1123a;\n    --rose-200: #bf123d;\n    --rose-300: #e21d48;\n    --rose-400: #f43e5c;\n    --rose-500: #fb6f84;\n    --rose-600: #fda5af;\n    --rose-700: #fecdd3;\n    --rose-800: #ffe5e7;\n    --rose-900: #fff0f1;\n    --teal-50: #134e4a;\n    --teal-100: #115f5a;\n    --teal-200: #0f756d;\n    --teal-300: #0f756d;\n    --teal-400: #14b8a4;\n    --teal-500: #2bd4bd;\n    --teal-600: #5dead5;\n    --teal-700: #98f6e3;\n    --teal-800: #cbfbf0;\n    --teal-900: #f2fdfa;\n    --violet-50: #282056;\n    --violet-100: #4d1d95;\n    --violet-200: #533dab;\n    --violet-300: #7c3bed;\n    --violet-400: #895af6;\n    --violet-500: #a689fa;\n    --violet-600: #c3b4fd;\n    --violet-700: #ded7fe;\n    --violet-800: #ebe7fe;\n    --violet-900: #f6f5ff;\n  }\n}\n* {\n  box-sizing: border-box;\n  outline: none;\n  padding: 0;\n  margin: 0;\n}\n\n@media (prefers-color-scheme: dark) {\n  html {\n    color-scheme: dark;\n  }\n}";
styleInject(css_248z$b);

var react = {exports: {}};

var react_production_min = {};

/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var l=Symbol.for("react.element"),n=Symbol.for("react.portal"),p=Symbol.for("react.fragment"),q=Symbol.for("react.strict_mode"),r=Symbol.for("react.profiler"),t=Symbol.for("react.provider"),u=Symbol.for("react.context"),v=Symbol.for("react.forward_ref"),w=Symbol.for("react.suspense"),x=Symbol.for("react.memo"),y=Symbol.for("react.lazy"),z=Symbol.iterator;function A(a){if(null===a||"object"!==typeof a)return null;a=z&&a[z]||a["@@iterator"];return "function"===typeof a?a:null}
var B={isMounted:function(){return !1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},C=Object.assign,D={};function E(a,b,e){this.props=a;this.context=b;this.refs=D;this.updater=e||B;}E.prototype.isReactComponent={};
E.prototype.setState=function(a,b){if("object"!==typeof a&&"function"!==typeof a&&null!=a)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,a,b,"setState");};E.prototype.forceUpdate=function(a){this.updater.enqueueForceUpdate(this,a,"forceUpdate");};function F(){}F.prototype=E.prototype;function G(a,b,e){this.props=a;this.context=b;this.refs=D;this.updater=e||B;}var H=G.prototype=new F;
H.constructor=G;C(H,E.prototype);H.isPureReactComponent=!0;var I=Array.isArray,J=Object.prototype.hasOwnProperty,K={current:null},L={key:!0,ref:!0,__self:!0,__source:!0};
function M(a,b,e){var d,c={},k=null,h=null;if(null!=b)for(d in void 0!==b.ref&&(h=b.ref),void 0!==b.key&&(k=""+b.key),b)J.call(b,d)&&!L.hasOwnProperty(d)&&(c[d]=b[d]);var g=arguments.length-2;if(1===g)c.children=e;else if(1<g){for(var f=Array(g),m=0;m<g;m++)f[m]=arguments[m+2];c.children=f;}if(a&&a.defaultProps)for(d in g=a.defaultProps,g)void 0===c[d]&&(c[d]=g[d]);return {$$typeof:l,type:a,key:k,ref:h,props:c,_owner:K.current}}
function N(a,b){return {$$typeof:l,type:a.type,key:b,ref:a.ref,props:a.props,_owner:a._owner}}function O(a){return "object"===typeof a&&null!==a&&a.$$typeof===l}function escape(a){var b={"=":"=0",":":"=2"};return "$"+a.replace(/[=:]/g,function(a){return b[a]})}var P=/\/+/g;function Q(a,b){return "object"===typeof a&&null!==a&&null!=a.key?escape(""+a.key):b.toString(36)}
function R(a,b,e,d,c){var k=typeof a;if("undefined"===k||"boolean"===k)a=null;var h=!1;if(null===a)h=!0;else switch(k){case "string":case "number":h=!0;break;case "object":switch(a.$$typeof){case l:case n:h=!0;}}if(h)return h=a,c=c(h),a=""===d?"."+Q(h,0):d,I(c)?(e="",null!=a&&(e=a.replace(P,"$&/")+"/"),R(c,b,e,"",function(a){return a})):null!=c&&(O(c)&&(c=N(c,e+(!c.key||h&&h.key===c.key?"":(""+c.key).replace(P,"$&/")+"/")+a)),b.push(c)),1;h=0;d=""===d?".":d+":";if(I(a))for(var g=0;g<a.length;g++){k=
a[g];var f=d+Q(k,g);h+=R(k,b,e,f,c);}else if(f=A(a),"function"===typeof f)for(a=f.call(a),g=0;!(k=a.next()).done;)k=k.value,f=d+Q(k,g++),h+=R(k,b,e,f,c);else if("object"===k)throw b=String(a),Error("Objects are not valid as a React child (found: "+("[object Object]"===b?"object with keys {"+Object.keys(a).join(", ")+"}":b)+"). If you meant to render a collection of children, use an array instead.");return h}
function S(a,b,e){if(null==a)return a;var d=[],c=0;R(a,d,"","",function(a){return b.call(e,a,c++)});return d}function T(a){if(-1===a._status){var b=a._result;b=b();b.then(function(b){if(0===a._status||-1===a._status)a._status=1,a._result=b;},function(b){if(0===a._status||-1===a._status)a._status=2,a._result=b;});-1===a._status&&(a._status=0,a._result=b);}if(1===a._status)return a._result.default;throw a._result;}
var U={current:null},V={transition:null},W={ReactCurrentDispatcher:U,ReactCurrentBatchConfig:V,ReactCurrentOwner:K};react_production_min.Children={map:S,forEach:function(a,b,e){S(a,function(){b.apply(this,arguments);},e);},count:function(a){var b=0;S(a,function(){b++;});return b},toArray:function(a){return S(a,function(a){return a})||[]},only:function(a){if(!O(a))throw Error("React.Children.only expected to receive a single React element child.");return a}};react_production_min.Component=E;react_production_min.Fragment=p;
react_production_min.Profiler=r;react_production_min.PureComponent=G;react_production_min.StrictMode=q;react_production_min.Suspense=w;react_production_min.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=W;
react_production_min.cloneElement=function(a,b,e){if(null===a||void 0===a)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+a+".");var d=C({},a.props),c=a.key,k=a.ref,h=a._owner;if(null!=b){void 0!==b.ref&&(k=b.ref,h=K.current);void 0!==b.key&&(c=""+b.key);if(a.type&&a.type.defaultProps)var g=a.type.defaultProps;for(f in b)J.call(b,f)&&!L.hasOwnProperty(f)&&(d[f]=void 0===b[f]&&void 0!==g?g[f]:b[f]);}var f=arguments.length-2;if(1===f)d.children=e;else if(1<f){g=Array(f);
for(var m=0;m<f;m++)g[m]=arguments[m+2];d.children=g;}return {$$typeof:l,type:a.type,key:c,ref:k,props:d,_owner:h}};react_production_min.createContext=function(a){a={$$typeof:u,_currentValue:a,_currentValue2:a,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null};a.Provider={$$typeof:t,_context:a};return a.Consumer=a};react_production_min.createElement=M;react_production_min.createFactory=function(a){var b=M.bind(null,a);b.type=a;return b};react_production_min.createRef=function(){return {current:null}};
react_production_min.forwardRef=function(a){return {$$typeof:v,render:a}};react_production_min.isValidElement=O;react_production_min.lazy=function(a){return {$$typeof:y,_payload:{_status:-1,_result:a},_init:T}};react_production_min.memo=function(a,b){return {$$typeof:x,type:a,compare:void 0===b?null:b}};react_production_min.startTransition=function(a){var b=V.transition;V.transition={};try{a();}finally{V.transition=b;}};react_production_min.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.");};
react_production_min.useCallback=function(a,b){return U.current.useCallback(a,b)};react_production_min.useContext=function(a){return U.current.useContext(a)};react_production_min.useDebugValue=function(){};react_production_min.useDeferredValue=function(a){return U.current.useDeferredValue(a)};react_production_min.useEffect=function(a,b){return U.current.useEffect(a,b)};react_production_min.useId=function(){return U.current.useId()};react_production_min.useImperativeHandle=function(a,b,e){return U.current.useImperativeHandle(a,b,e)};
react_production_min.useInsertionEffect=function(a,b){return U.current.useInsertionEffect(a,b)};react_production_min.useLayoutEffect=function(a,b){return U.current.useLayoutEffect(a,b)};react_production_min.useMemo=function(a,b){return U.current.useMemo(a,b)};react_production_min.useReducer=function(a,b,e){return U.current.useReducer(a,b,e)};react_production_min.useRef=function(a){return U.current.useRef(a)};react_production_min.useState=function(a){return U.current.useState(a)};react_production_min.useSyncExternalStore=function(a,b,e){return U.current.useSyncExternalStore(a,b,e)};
react_production_min.useTransition=function(){return U.current.useTransition()};react_production_min.version="18.2.0";

var react_development = {exports: {}};

/**
 * @license React
 * react.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

(function (module, exports) {

if (process.env.NODE_ENV !== "production") {
  (function() {

/* global __REACT_DEVTOOLS_GLOBAL_HOOK__ */
if (
  typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ !== 'undefined' &&
  typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart ===
    'function'
) {
  __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
}
          var ReactVersion = '18.2.0';

// ATTENTION
// When adding new symbols to this file,
// Please consider also adding to 'react-devtools-shared/src/backend/ReactSymbols'
// The Symbol used to tag the ReactElement-like types.
var REACT_ELEMENT_TYPE = Symbol.for('react.element');
var REACT_PORTAL_TYPE = Symbol.for('react.portal');
var REACT_FRAGMENT_TYPE = Symbol.for('react.fragment');
var REACT_STRICT_MODE_TYPE = Symbol.for('react.strict_mode');
var REACT_PROFILER_TYPE = Symbol.for('react.profiler');
var REACT_PROVIDER_TYPE = Symbol.for('react.provider');
var REACT_CONTEXT_TYPE = Symbol.for('react.context');
var REACT_FORWARD_REF_TYPE = Symbol.for('react.forward_ref');
var REACT_SUSPENSE_TYPE = Symbol.for('react.suspense');
var REACT_SUSPENSE_LIST_TYPE = Symbol.for('react.suspense_list');
var REACT_MEMO_TYPE = Symbol.for('react.memo');
var REACT_LAZY_TYPE = Symbol.for('react.lazy');
var REACT_OFFSCREEN_TYPE = Symbol.for('react.offscreen');
var MAYBE_ITERATOR_SYMBOL = Symbol.iterator;
var FAUX_ITERATOR_SYMBOL = '@@iterator';
function getIteratorFn(maybeIterable) {
  if (maybeIterable === null || typeof maybeIterable !== 'object') {
    return null;
  }

  var maybeIterator = MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL];

  if (typeof maybeIterator === 'function') {
    return maybeIterator;
  }

  return null;
}

/**
 * Keeps track of the current dispatcher.
 */
var ReactCurrentDispatcher = {
  /**
   * @internal
   * @type {ReactComponent}
   */
  current: null
};

/**
 * Keeps track of the current batch's configuration such as how long an update
 * should suspend for if it needs to.
 */
var ReactCurrentBatchConfig = {
  transition: null
};

var ReactCurrentActQueue = {
  current: null,
  // Used to reproduce behavior of `batchedUpdates` in legacy mode.
  isBatchingLegacy: false,
  didScheduleLegacyUpdate: false
};

/**
 * Keeps track of the current owner.
 *
 * The current owner is the component who should own any components that are
 * currently being constructed.
 */
var ReactCurrentOwner = {
  /**
   * @internal
   * @type {ReactComponent}
   */
  current: null
};

var ReactDebugCurrentFrame = {};
var currentExtraStackFrame = null;
function setExtraStackFrame(stack) {
  {
    currentExtraStackFrame = stack;
  }
}

{
  ReactDebugCurrentFrame.setExtraStackFrame = function (stack) {
    {
      currentExtraStackFrame = stack;
    }
  }; // Stack implementation injected by the current renderer.


  ReactDebugCurrentFrame.getCurrentStack = null;

  ReactDebugCurrentFrame.getStackAddendum = function () {
    var stack = ''; // Add an extra top frame while an element is being validated

    if (currentExtraStackFrame) {
      stack += currentExtraStackFrame;
    } // Delegate to the injected renderer-specific implementation


    var impl = ReactDebugCurrentFrame.getCurrentStack;

    if (impl) {
      stack += impl() || '';
    }

    return stack;
  };
}

// -----------------------------------------------------------------------------

var enableScopeAPI = false; // Experimental Create Event Handle API.
var enableCacheElement = false;
var enableTransitionTracing = false; // No known bugs, but needs performance testing

var enableLegacyHidden = false; // Enables unstable_avoidThisFallback feature in Fiber
// stuff. Intended to enable React core members to more easily debug scheduling
// issues in DEV builds.

var enableDebugTracing = false; // Track which Fiber(s) schedule render work.

var ReactSharedInternals = {
  ReactCurrentDispatcher: ReactCurrentDispatcher,
  ReactCurrentBatchConfig: ReactCurrentBatchConfig,
  ReactCurrentOwner: ReactCurrentOwner
};

{
  ReactSharedInternals.ReactDebugCurrentFrame = ReactDebugCurrentFrame;
  ReactSharedInternals.ReactCurrentActQueue = ReactCurrentActQueue;
}

// by calls to these methods by a Babel plugin.
//
// In PROD (or in packages without access to React internals),
// they are left as they are instead.

function warn(format) {
  {
    {
      for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }

      printWarning('warn', format, args);
    }
  }
}
function error(format) {
  {
    {
      for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
        args[_key2 - 1] = arguments[_key2];
      }

      printWarning('error', format, args);
    }
  }
}

function printWarning(level, format, args) {
  // When changing this logic, you might want to also
  // update consoleWithStackDev.www.js as well.
  {
    var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;
    var stack = ReactDebugCurrentFrame.getStackAddendum();

    if (stack !== '') {
      format += '%s';
      args = args.concat([stack]);
    } // eslint-disable-next-line react-internal/safe-string-coercion


    var argsWithFormat = args.map(function (item) {
      return String(item);
    }); // Careful: RN currently depends on this prefix

    argsWithFormat.unshift('Warning: ' + format); // We intentionally don't use spread (or .apply) directly because it
    // breaks IE9: https://github.com/facebook/react/issues/13610
    // eslint-disable-next-line react-internal/no-production-logging

    Function.prototype.apply.call(console[level], console, argsWithFormat);
  }
}

var didWarnStateUpdateForUnmountedComponent = {};

function warnNoop(publicInstance, callerName) {
  {
    var _constructor = publicInstance.constructor;
    var componentName = _constructor && (_constructor.displayName || _constructor.name) || 'ReactClass';
    var warningKey = componentName + "." + callerName;

    if (didWarnStateUpdateForUnmountedComponent[warningKey]) {
      return;
    }

    error("Can't call %s on a component that is not yet mounted. " + 'This is a no-op, but it might indicate a bug in your application. ' + 'Instead, assign to `this.state` directly or define a `state = {};` ' + 'class property with the desired state in the %s component.', callerName, componentName);

    didWarnStateUpdateForUnmountedComponent[warningKey] = true;
  }
}
/**
 * This is the abstract API for an update queue.
 */


var ReactNoopUpdateQueue = {
  /**
   * Checks whether or not this composite component is mounted.
   * @param {ReactClass} publicInstance The instance we want to test.
   * @return {boolean} True if mounted, false otherwise.
   * @protected
   * @final
   */
  isMounted: function (publicInstance) {
    return false;
  },

  /**
   * Forces an update. This should only be invoked when it is known with
   * certainty that we are **not** in a DOM transaction.
   *
   * You may want to call this when you know that some deeper aspect of the
   * component's state has changed but `setState` was not called.
   *
   * This will not invoke `shouldComponentUpdate`, but it will invoke
   * `componentWillUpdate` and `componentDidUpdate`.
   *
   * @param {ReactClass} publicInstance The instance that should rerender.
   * @param {?function} callback Called after component is updated.
   * @param {?string} callerName name of the calling function in the public API.
   * @internal
   */
  enqueueForceUpdate: function (publicInstance, callback, callerName) {
    warnNoop(publicInstance, 'forceUpdate');
  },

  /**
   * Replaces all of the state. Always use this or `setState` to mutate state.
   * You should treat `this.state` as immutable.
   *
   * There is no guarantee that `this.state` will be immediately updated, so
   * accessing `this.state` after calling this method may return the old value.
   *
   * @param {ReactClass} publicInstance The instance that should rerender.
   * @param {object} completeState Next state.
   * @param {?function} callback Called after component is updated.
   * @param {?string} callerName name of the calling function in the public API.
   * @internal
   */
  enqueueReplaceState: function (publicInstance, completeState, callback, callerName) {
    warnNoop(publicInstance, 'replaceState');
  },

  /**
   * Sets a subset of the state. This only exists because _pendingState is
   * internal. This provides a merging strategy that is not available to deep
   * properties which is confusing. TODO: Expose pendingState or don't use it
   * during the merge.
   *
   * @param {ReactClass} publicInstance The instance that should rerender.
   * @param {object} partialState Next partial state to be merged with state.
   * @param {?function} callback Called after component is updated.
   * @param {?string} Name of the calling function in the public API.
   * @internal
   */
  enqueueSetState: function (publicInstance, partialState, callback, callerName) {
    warnNoop(publicInstance, 'setState');
  }
};

var assign = Object.assign;

var emptyObject = {};

{
  Object.freeze(emptyObject);
}
/**
 * Base class helpers for the updating state of a component.
 */


function Component(props, context, updater) {
  this.props = props;
  this.context = context; // If a component has string refs, we will assign a different object later.

  this.refs = emptyObject; // We initialize the default updater but the real one gets injected by the
  // renderer.

  this.updater = updater || ReactNoopUpdateQueue;
}

Component.prototype.isReactComponent = {};
/**
 * Sets a subset of the state. Always use this to mutate
 * state. You should treat `this.state` as immutable.
 *
 * There is no guarantee that `this.state` will be immediately updated, so
 * accessing `this.state` after calling this method may return the old value.
 *
 * There is no guarantee that calls to `setState` will run synchronously,
 * as they may eventually be batched together.  You can provide an optional
 * callback that will be executed when the call to setState is actually
 * completed.
 *
 * When a function is provided to setState, it will be called at some point in
 * the future (not synchronously). It will be called with the up to date
 * component arguments (state, props, context). These values can be different
 * from this.* because your function may be called after receiveProps but before
 * shouldComponentUpdate, and this new state, props, and context will not yet be
 * assigned to this.
 *
 * @param {object|function} partialState Next partial state or function to
 *        produce next partial state to be merged with current state.
 * @param {?function} callback Called after state is updated.
 * @final
 * @protected
 */

Component.prototype.setState = function (partialState, callback) {
  if (typeof partialState !== 'object' && typeof partialState !== 'function' && partialState != null) {
    throw new Error('setState(...): takes an object of state variables to update or a ' + 'function which returns an object of state variables.');
  }

  this.updater.enqueueSetState(this, partialState, callback, 'setState');
};
/**
 * Forces an update. This should only be invoked when it is known with
 * certainty that we are **not** in a DOM transaction.
 *
 * You may want to call this when you know that some deeper aspect of the
 * component's state has changed but `setState` was not called.
 *
 * This will not invoke `shouldComponentUpdate`, but it will invoke
 * `componentWillUpdate` and `componentDidUpdate`.
 *
 * @param {?function} callback Called after update is complete.
 * @final
 * @protected
 */


Component.prototype.forceUpdate = function (callback) {
  this.updater.enqueueForceUpdate(this, callback, 'forceUpdate');
};
/**
 * Deprecated APIs. These APIs used to exist on classic React classes but since
 * we would like to deprecate them, we're not going to move them over to this
 * modern base class. Instead, we define a getter that warns if it's accessed.
 */


{
  var deprecatedAPIs = {
    isMounted: ['isMounted', 'Instead, make sure to clean up subscriptions and pending requests in ' + 'componentWillUnmount to prevent memory leaks.'],
    replaceState: ['replaceState', 'Refactor your code to use setState instead (see ' + 'https://github.com/facebook/react/issues/3236).']
  };

  var defineDeprecationWarning = function (methodName, info) {
    Object.defineProperty(Component.prototype, methodName, {
      get: function () {
        warn('%s(...) is deprecated in plain JavaScript React classes. %s', info[0], info[1]);

        return undefined;
      }
    });
  };

  for (var fnName in deprecatedAPIs) {
    if (deprecatedAPIs.hasOwnProperty(fnName)) {
      defineDeprecationWarning(fnName, deprecatedAPIs[fnName]);
    }
  }
}

function ComponentDummy() {}

ComponentDummy.prototype = Component.prototype;
/**
 * Convenience component with default shallow equality check for sCU.
 */

function PureComponent(props, context, updater) {
  this.props = props;
  this.context = context; // If a component has string refs, we will assign a different object later.

  this.refs = emptyObject;
  this.updater = updater || ReactNoopUpdateQueue;
}

var pureComponentPrototype = PureComponent.prototype = new ComponentDummy();
pureComponentPrototype.constructor = PureComponent; // Avoid an extra prototype jump for these methods.

assign(pureComponentPrototype, Component.prototype);
pureComponentPrototype.isPureReactComponent = true;

// an immutable object with a single mutable value
function createRef() {
  var refObject = {
    current: null
  };

  {
    Object.seal(refObject);
  }

  return refObject;
}

var isArrayImpl = Array.isArray; // eslint-disable-next-line no-redeclare

function isArray(a) {
  return isArrayImpl(a);
}

/*
 * The `'' + value` pattern (used in in perf-sensitive code) throws for Symbol
 * and Temporal.* types. See https://github.com/facebook/react/pull/22064.
 *
 * The functions in this module will throw an easier-to-understand,
 * easier-to-debug exception with a clear errors message message explaining the
 * problem. (Instead of a confusing exception thrown inside the implementation
 * of the `value` object).
 */
// $FlowFixMe only called in DEV, so void return is not possible.
function typeName(value) {
  {
    // toStringTag is needed for namespaced types like Temporal.Instant
    var hasToStringTag = typeof Symbol === 'function' && Symbol.toStringTag;
    var type = hasToStringTag && value[Symbol.toStringTag] || value.constructor.name || 'Object';
    return type;
  }
} // $FlowFixMe only called in DEV, so void return is not possible.


function willCoercionThrow(value) {
  {
    try {
      testStringCoercion(value);
      return false;
    } catch (e) {
      return true;
    }
  }
}

function testStringCoercion(value) {
  // If you ended up here by following an exception call stack, here's what's
  // happened: you supplied an object or symbol value to React (as a prop, key,
  // DOM attribute, CSS property, string ref, etc.) and when React tried to
  // coerce it to a string using `'' + value`, an exception was thrown.
  //
  // The most common types that will cause this exception are `Symbol` instances
  // and Temporal objects like `Temporal.Instant`. But any object that has a
  // `valueOf` or `[Symbol.toPrimitive]` method that throws will also cause this
  // exception. (Library authors do this to prevent users from using built-in
  // numeric operators like `+` or comparison operators like `>=` because custom
  // methods are needed to perform accurate arithmetic or comparison.)
  //
  // To fix the problem, coerce this object or symbol value to a string before
  // passing it to React. The most reliable way is usually `String(value)`.
  //
  // To find which value is throwing, check the browser or debugger console.
  // Before this exception was thrown, there should be `console.error` output
  // that shows the type (Symbol, Temporal.PlainDate, etc.) that caused the
  // problem and how that type was used: key, atrribute, input value prop, etc.
  // In most cases, this console output also shows the component and its
  // ancestor components where the exception happened.
  //
  // eslint-disable-next-line react-internal/safe-string-coercion
  return '' + value;
}
function checkKeyStringCoercion(value) {
  {
    if (willCoercionThrow(value)) {
      error('The provided key is an unsupported type %s.' + ' This value must be coerced to a string before before using it here.', typeName(value));

      return testStringCoercion(value); // throw (to help callers find troubleshooting comments)
    }
  }
}

function getWrappedName(outerType, innerType, wrapperName) {
  var displayName = outerType.displayName;

  if (displayName) {
    return displayName;
  }

  var functionName = innerType.displayName || innerType.name || '';
  return functionName !== '' ? wrapperName + "(" + functionName + ")" : wrapperName;
} // Keep in sync with react-reconciler/getComponentNameFromFiber


function getContextName(type) {
  return type.displayName || 'Context';
} // Note that the reconciler package should generally prefer to use getComponentNameFromFiber() instead.


function getComponentNameFromType(type) {
  if (type == null) {
    // Host root, text node or just invalid type.
    return null;
  }

  {
    if (typeof type.tag === 'number') {
      error('Received an unexpected object in getComponentNameFromType(). ' + 'This is likely a bug in React. Please file an issue.');
    }
  }

  if (typeof type === 'function') {
    return type.displayName || type.name || null;
  }

  if (typeof type === 'string') {
    return type;
  }

  switch (type) {
    case REACT_FRAGMENT_TYPE:
      return 'Fragment';

    case REACT_PORTAL_TYPE:
      return 'Portal';

    case REACT_PROFILER_TYPE:
      return 'Profiler';

    case REACT_STRICT_MODE_TYPE:
      return 'StrictMode';

    case REACT_SUSPENSE_TYPE:
      return 'Suspense';

    case REACT_SUSPENSE_LIST_TYPE:
      return 'SuspenseList';

  }

  if (typeof type === 'object') {
    switch (type.$$typeof) {
      case REACT_CONTEXT_TYPE:
        var context = type;
        return getContextName(context) + '.Consumer';

      case REACT_PROVIDER_TYPE:
        var provider = type;
        return getContextName(provider._context) + '.Provider';

      case REACT_FORWARD_REF_TYPE:
        return getWrappedName(type, type.render, 'ForwardRef');

      case REACT_MEMO_TYPE:
        var outerName = type.displayName || null;

        if (outerName !== null) {
          return outerName;
        }

        return getComponentNameFromType(type.type) || 'Memo';

      case REACT_LAZY_TYPE:
        {
          var lazyComponent = type;
          var payload = lazyComponent._payload;
          var init = lazyComponent._init;

          try {
            return getComponentNameFromType(init(payload));
          } catch (x) {
            return null;
          }
        }

      // eslint-disable-next-line no-fallthrough
    }
  }

  return null;
}

var hasOwnProperty = Object.prototype.hasOwnProperty;

var RESERVED_PROPS = {
  key: true,
  ref: true,
  __self: true,
  __source: true
};
var specialPropKeyWarningShown, specialPropRefWarningShown, didWarnAboutStringRefs;

{
  didWarnAboutStringRefs = {};
}

function hasValidRef(config) {
  {
    if (hasOwnProperty.call(config, 'ref')) {
      var getter = Object.getOwnPropertyDescriptor(config, 'ref').get;

      if (getter && getter.isReactWarning) {
        return false;
      }
    }
  }

  return config.ref !== undefined;
}

function hasValidKey(config) {
  {
    if (hasOwnProperty.call(config, 'key')) {
      var getter = Object.getOwnPropertyDescriptor(config, 'key').get;

      if (getter && getter.isReactWarning) {
        return false;
      }
    }
  }

  return config.key !== undefined;
}

function defineKeyPropWarningGetter(props, displayName) {
  var warnAboutAccessingKey = function () {
    {
      if (!specialPropKeyWarningShown) {
        specialPropKeyWarningShown = true;

        error('%s: `key` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://reactjs.org/link/special-props)', displayName);
      }
    }
  };

  warnAboutAccessingKey.isReactWarning = true;
  Object.defineProperty(props, 'key', {
    get: warnAboutAccessingKey,
    configurable: true
  });
}

function defineRefPropWarningGetter(props, displayName) {
  var warnAboutAccessingRef = function () {
    {
      if (!specialPropRefWarningShown) {
        specialPropRefWarningShown = true;

        error('%s: `ref` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://reactjs.org/link/special-props)', displayName);
      }
    }
  };

  warnAboutAccessingRef.isReactWarning = true;
  Object.defineProperty(props, 'ref', {
    get: warnAboutAccessingRef,
    configurable: true
  });
}

function warnIfStringRefCannotBeAutoConverted(config) {
  {
    if (typeof config.ref === 'string' && ReactCurrentOwner.current && config.__self && ReactCurrentOwner.current.stateNode !== config.__self) {
      var componentName = getComponentNameFromType(ReactCurrentOwner.current.type);

      if (!didWarnAboutStringRefs[componentName]) {
        error('Component "%s" contains the string ref "%s". ' + 'Support for string refs will be removed in a future major release. ' + 'This case cannot be automatically converted to an arrow function. ' + 'We ask you to manually fix this case by using useRef() or createRef() instead. ' + 'Learn more about using refs safely here: ' + 'https://reactjs.org/link/strict-mode-string-ref', componentName, config.ref);

        didWarnAboutStringRefs[componentName] = true;
      }
    }
  }
}
/**
 * Factory method to create a new React element. This no longer adheres to
 * the class pattern, so do not use new to call it. Also, instanceof check
 * will not work. Instead test $$typeof field against Symbol.for('react.element') to check
 * if something is a React Element.
 *
 * @param {*} type
 * @param {*} props
 * @param {*} key
 * @param {string|object} ref
 * @param {*} owner
 * @param {*} self A *temporary* helper to detect places where `this` is
 * different from the `owner` when React.createElement is called, so that we
 * can warn. We want to get rid of owner and replace string `ref`s with arrow
 * functions, and as long as `this` and owner are the same, there will be no
 * change in behavior.
 * @param {*} source An annotation object (added by a transpiler or otherwise)
 * indicating filename, line number, and/or other information.
 * @internal
 */


var ReactElement = function (type, key, ref, self, source, owner, props) {
  var element = {
    // This tag allows us to uniquely identify this as a React Element
    $$typeof: REACT_ELEMENT_TYPE,
    // Built-in properties that belong on the element
    type: type,
    key: key,
    ref: ref,
    props: props,
    // Record the component responsible for creating this element.
    _owner: owner
  };

  {
    // The validation flag is currently mutative. We put it on
    // an external backing store so that we can freeze the whole object.
    // This can be replaced with a WeakMap once they are implemented in
    // commonly used development environments.
    element._store = {}; // To make comparing ReactElements easier for testing purposes, we make
    // the validation flag non-enumerable (where possible, which should
    // include every environment we run tests in), so the test framework
    // ignores it.

    Object.defineProperty(element._store, 'validated', {
      configurable: false,
      enumerable: false,
      writable: true,
      value: false
    }); // self and source are DEV only properties.

    Object.defineProperty(element, '_self', {
      configurable: false,
      enumerable: false,
      writable: false,
      value: self
    }); // Two elements created in two different places should be considered
    // equal for testing purposes and therefore we hide it from enumeration.

    Object.defineProperty(element, '_source', {
      configurable: false,
      enumerable: false,
      writable: false,
      value: source
    });

    if (Object.freeze) {
      Object.freeze(element.props);
      Object.freeze(element);
    }
  }

  return element;
};
/**
 * Create and return a new ReactElement of the given type.
 * See https://reactjs.org/docs/react-api.html#createelement
 */

function createElement(type, config, children) {
  var propName; // Reserved names are extracted

  var props = {};
  var key = null;
  var ref = null;
  var self = null;
  var source = null;

  if (config != null) {
    if (hasValidRef(config)) {
      ref = config.ref;

      {
        warnIfStringRefCannotBeAutoConverted(config);
      }
    }

    if (hasValidKey(config)) {
      {
        checkKeyStringCoercion(config.key);
      }

      key = '' + config.key;
    }

    self = config.__self === undefined ? null : config.__self;
    source = config.__source === undefined ? null : config.__source; // Remaining properties are added to a new props object

    for (propName in config) {
      if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
        props[propName] = config[propName];
      }
    }
  } // Children can be more than one argument, and those are transferred onto
  // the newly allocated props object.


  var childrenLength = arguments.length - 2;

  if (childrenLength === 1) {
    props.children = children;
  } else if (childrenLength > 1) {
    var childArray = Array(childrenLength);

    for (var i = 0; i < childrenLength; i++) {
      childArray[i] = arguments[i + 2];
    }

    {
      if (Object.freeze) {
        Object.freeze(childArray);
      }
    }

    props.children = childArray;
  } // Resolve default props


  if (type && type.defaultProps) {
    var defaultProps = type.defaultProps;

    for (propName in defaultProps) {
      if (props[propName] === undefined) {
        props[propName] = defaultProps[propName];
      }
    }
  }

  {
    if (key || ref) {
      var displayName = typeof type === 'function' ? type.displayName || type.name || 'Unknown' : type;

      if (key) {
        defineKeyPropWarningGetter(props, displayName);
      }

      if (ref) {
        defineRefPropWarningGetter(props, displayName);
      }
    }
  }

  return ReactElement(type, key, ref, self, source, ReactCurrentOwner.current, props);
}
function cloneAndReplaceKey(oldElement, newKey) {
  var newElement = ReactElement(oldElement.type, newKey, oldElement.ref, oldElement._self, oldElement._source, oldElement._owner, oldElement.props);
  return newElement;
}
/**
 * Clone and return a new ReactElement using element as the starting point.
 * See https://reactjs.org/docs/react-api.html#cloneelement
 */

function cloneElement(element, config, children) {
  if (element === null || element === undefined) {
    throw new Error("React.cloneElement(...): The argument must be a React element, but you passed " + element + ".");
  }

  var propName; // Original props are copied

  var props = assign({}, element.props); // Reserved names are extracted

  var key = element.key;
  var ref = element.ref; // Self is preserved since the owner is preserved.

  var self = element._self; // Source is preserved since cloneElement is unlikely to be targeted by a
  // transpiler, and the original source is probably a better indicator of the
  // true owner.

  var source = element._source; // Owner will be preserved, unless ref is overridden

  var owner = element._owner;

  if (config != null) {
    if (hasValidRef(config)) {
      // Silently steal the ref from the parent.
      ref = config.ref;
      owner = ReactCurrentOwner.current;
    }

    if (hasValidKey(config)) {
      {
        checkKeyStringCoercion(config.key);
      }

      key = '' + config.key;
    } // Remaining properties override existing props


    var defaultProps;

    if (element.type && element.type.defaultProps) {
      defaultProps = element.type.defaultProps;
    }

    for (propName in config) {
      if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
        if (config[propName] === undefined && defaultProps !== undefined) {
          // Resolve default props
          props[propName] = defaultProps[propName];
        } else {
          props[propName] = config[propName];
        }
      }
    }
  } // Children can be more than one argument, and those are transferred onto
  // the newly allocated props object.


  var childrenLength = arguments.length - 2;

  if (childrenLength === 1) {
    props.children = children;
  } else if (childrenLength > 1) {
    var childArray = Array(childrenLength);

    for (var i = 0; i < childrenLength; i++) {
      childArray[i] = arguments[i + 2];
    }

    props.children = childArray;
  }

  return ReactElement(element.type, key, ref, self, source, owner, props);
}
/**
 * Verifies the object is a ReactElement.
 * See https://reactjs.org/docs/react-api.html#isvalidelement
 * @param {?object} object
 * @return {boolean} True if `object` is a ReactElement.
 * @final
 */

function isValidElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}

var SEPARATOR = '.';
var SUBSEPARATOR = ':';
/**
 * Escape and wrap key so it is safe to use as a reactid
 *
 * @param {string} key to be escaped.
 * @return {string} the escaped key.
 */

function escape(key) {
  var escapeRegex = /[=:]/g;
  var escaperLookup = {
    '=': '=0',
    ':': '=2'
  };
  var escapedString = key.replace(escapeRegex, function (match) {
    return escaperLookup[match];
  });
  return '$' + escapedString;
}
/**
 * TODO: Test that a single child and an array with one item have the same key
 * pattern.
 */


var didWarnAboutMaps = false;
var userProvidedKeyEscapeRegex = /\/+/g;

function escapeUserProvidedKey(text) {
  return text.replace(userProvidedKeyEscapeRegex, '$&/');
}
/**
 * Generate a key string that identifies a element within a set.
 *
 * @param {*} element A element that could contain a manual key.
 * @param {number} index Index that is used if a manual key is not provided.
 * @return {string}
 */


function getElementKey(element, index) {
  // Do some typechecking here since we call this blindly. We want to ensure
  // that we don't block potential future ES APIs.
  if (typeof element === 'object' && element !== null && element.key != null) {
    // Explicit key
    {
      checkKeyStringCoercion(element.key);
    }

    return escape('' + element.key);
  } // Implicit key determined by the index in the set


  return index.toString(36);
}

function mapIntoArray(children, array, escapedPrefix, nameSoFar, callback) {
  var type = typeof children;

  if (type === 'undefined' || type === 'boolean') {
    // All of the above are perceived as null.
    children = null;
  }

  var invokeCallback = false;

  if (children === null) {
    invokeCallback = true;
  } else {
    switch (type) {
      case 'string':
      case 'number':
        invokeCallback = true;
        break;

      case 'object':
        switch (children.$$typeof) {
          case REACT_ELEMENT_TYPE:
          case REACT_PORTAL_TYPE:
            invokeCallback = true;
        }

    }
  }

  if (invokeCallback) {
    var _child = children;
    var mappedChild = callback(_child); // If it's the only child, treat the name as if it was wrapped in an array
    // so that it's consistent if the number of children grows:

    var childKey = nameSoFar === '' ? SEPARATOR + getElementKey(_child, 0) : nameSoFar;

    if (isArray(mappedChild)) {
      var escapedChildKey = '';

      if (childKey != null) {
        escapedChildKey = escapeUserProvidedKey(childKey) + '/';
      }

      mapIntoArray(mappedChild, array, escapedChildKey, '', function (c) {
        return c;
      });
    } else if (mappedChild != null) {
      if (isValidElement(mappedChild)) {
        {
          // The `if` statement here prevents auto-disabling of the safe
          // coercion ESLint rule, so we must manually disable it below.
          // $FlowFixMe Flow incorrectly thinks React.Portal doesn't have a key
          if (mappedChild.key && (!_child || _child.key !== mappedChild.key)) {
            checkKeyStringCoercion(mappedChild.key);
          }
        }

        mappedChild = cloneAndReplaceKey(mappedChild, // Keep both the (mapped) and old keys if they differ, just as
        // traverseAllChildren used to do for objects as children
        escapedPrefix + ( // $FlowFixMe Flow incorrectly thinks React.Portal doesn't have a key
        mappedChild.key && (!_child || _child.key !== mappedChild.key) ? // $FlowFixMe Flow incorrectly thinks existing element's key can be a number
        // eslint-disable-next-line react-internal/safe-string-coercion
        escapeUserProvidedKey('' + mappedChild.key) + '/' : '') + childKey);
      }

      array.push(mappedChild);
    }

    return 1;
  }

  var child;
  var nextName;
  var subtreeCount = 0; // Count of children found in the current subtree.

  var nextNamePrefix = nameSoFar === '' ? SEPARATOR : nameSoFar + SUBSEPARATOR;

  if (isArray(children)) {
    for (var i = 0; i < children.length; i++) {
      child = children[i];
      nextName = nextNamePrefix + getElementKey(child, i);
      subtreeCount += mapIntoArray(child, array, escapedPrefix, nextName, callback);
    }
  } else {
    var iteratorFn = getIteratorFn(children);

    if (typeof iteratorFn === 'function') {
      var iterableChildren = children;

      {
        // Warn about using Maps as children
        if (iteratorFn === iterableChildren.entries) {
          if (!didWarnAboutMaps) {
            warn('Using Maps as children is not supported. ' + 'Use an array of keyed ReactElements instead.');
          }

          didWarnAboutMaps = true;
        }
      }

      var iterator = iteratorFn.call(iterableChildren);
      var step;
      var ii = 0;

      while (!(step = iterator.next()).done) {
        child = step.value;
        nextName = nextNamePrefix + getElementKey(child, ii++);
        subtreeCount += mapIntoArray(child, array, escapedPrefix, nextName, callback);
      }
    } else if (type === 'object') {
      // eslint-disable-next-line react-internal/safe-string-coercion
      var childrenString = String(children);
      throw new Error("Objects are not valid as a React child (found: " + (childrenString === '[object Object]' ? 'object with keys {' + Object.keys(children).join(', ') + '}' : childrenString) + "). " + 'If you meant to render a collection of children, use an array ' + 'instead.');
    }
  }

  return subtreeCount;
}

/**
 * Maps children that are typically specified as `props.children`.
 *
 * See https://reactjs.org/docs/react-api.html#reactchildrenmap
 *
 * The provided mapFunction(child, index) will be called for each
 * leaf child.
 *
 * @param {?*} children Children tree container.
 * @param {function(*, int)} func The map function.
 * @param {*} context Context for mapFunction.
 * @return {object} Object containing the ordered map of results.
 */
function mapChildren(children, func, context) {
  if (children == null) {
    return children;
  }

  var result = [];
  var count = 0;
  mapIntoArray(children, result, '', '', function (child) {
    return func.call(context, child, count++);
  });
  return result;
}
/**
 * Count the number of children that are typically specified as
 * `props.children`.
 *
 * See https://reactjs.org/docs/react-api.html#reactchildrencount
 *
 * @param {?*} children Children tree container.
 * @return {number} The number of children.
 */


function countChildren(children) {
  var n = 0;
  mapChildren(children, function () {
    n++; // Don't return anything
  });
  return n;
}

/**
 * Iterates through children that are typically specified as `props.children`.
 *
 * See https://reactjs.org/docs/react-api.html#reactchildrenforeach
 *
 * The provided forEachFunc(child, index) will be called for each
 * leaf child.
 *
 * @param {?*} children Children tree container.
 * @param {function(*, int)} forEachFunc
 * @param {*} forEachContext Context for forEachContext.
 */
function forEachChildren(children, forEachFunc, forEachContext) {
  mapChildren(children, function () {
    forEachFunc.apply(this, arguments); // Don't return anything.
  }, forEachContext);
}
/**
 * Flatten a children object (typically specified as `props.children`) and
 * return an array with appropriately re-keyed children.
 *
 * See https://reactjs.org/docs/react-api.html#reactchildrentoarray
 */


function toArray(children) {
  return mapChildren(children, function (child) {
    return child;
  }) || [];
}
/**
 * Returns the first child in a collection of children and verifies that there
 * is only one child in the collection.
 *
 * See https://reactjs.org/docs/react-api.html#reactchildrenonly
 *
 * The current implementation of this function assumes that a single child gets
 * passed without a wrapper, but the purpose of this helper function is to
 * abstract away the particular structure of children.
 *
 * @param {?object} children Child collection structure.
 * @return {ReactElement} The first and only `ReactElement` contained in the
 * structure.
 */


function onlyChild(children) {
  if (!isValidElement(children)) {
    throw new Error('React.Children.only expected to receive a single React element child.');
  }

  return children;
}

function createContext(defaultValue) {
  // TODO: Second argument used to be an optional `calculateChangedBits`
  // function. Warn to reserve for future use?
  var context = {
    $$typeof: REACT_CONTEXT_TYPE,
    // As a workaround to support multiple concurrent renderers, we categorize
    // some renderers as primary and others as secondary. We only expect
    // there to be two concurrent renderers at most: React Native (primary) and
    // Fabric (secondary); React DOM (primary) and React ART (secondary).
    // Secondary renderers store their context values on separate fields.
    _currentValue: defaultValue,
    _currentValue2: defaultValue,
    // Used to track how many concurrent renderers this context currently
    // supports within in a single renderer. Such as parallel server rendering.
    _threadCount: 0,
    // These are circular
    Provider: null,
    Consumer: null,
    // Add these to use same hidden class in VM as ServerContext
    _defaultValue: null,
    _globalName: null
  };
  context.Provider = {
    $$typeof: REACT_PROVIDER_TYPE,
    _context: context
  };
  var hasWarnedAboutUsingNestedContextConsumers = false;
  var hasWarnedAboutUsingConsumerProvider = false;
  var hasWarnedAboutDisplayNameOnConsumer = false;

  {
    // A separate object, but proxies back to the original context object for
    // backwards compatibility. It has a different $$typeof, so we can properly
    // warn for the incorrect usage of Context as a Consumer.
    var Consumer = {
      $$typeof: REACT_CONTEXT_TYPE,
      _context: context
    }; // $FlowFixMe: Flow complains about not setting a value, which is intentional here

    Object.defineProperties(Consumer, {
      Provider: {
        get: function () {
          if (!hasWarnedAboutUsingConsumerProvider) {
            hasWarnedAboutUsingConsumerProvider = true;

            error('Rendering <Context.Consumer.Provider> is not supported and will be removed in ' + 'a future major release. Did you mean to render <Context.Provider> instead?');
          }

          return context.Provider;
        },
        set: function (_Provider) {
          context.Provider = _Provider;
        }
      },
      _currentValue: {
        get: function () {
          return context._currentValue;
        },
        set: function (_currentValue) {
          context._currentValue = _currentValue;
        }
      },
      _currentValue2: {
        get: function () {
          return context._currentValue2;
        },
        set: function (_currentValue2) {
          context._currentValue2 = _currentValue2;
        }
      },
      _threadCount: {
        get: function () {
          return context._threadCount;
        },
        set: function (_threadCount) {
          context._threadCount = _threadCount;
        }
      },
      Consumer: {
        get: function () {
          if (!hasWarnedAboutUsingNestedContextConsumers) {
            hasWarnedAboutUsingNestedContextConsumers = true;

            error('Rendering <Context.Consumer.Consumer> is not supported and will be removed in ' + 'a future major release. Did you mean to render <Context.Consumer> instead?');
          }

          return context.Consumer;
        }
      },
      displayName: {
        get: function () {
          return context.displayName;
        },
        set: function (displayName) {
          if (!hasWarnedAboutDisplayNameOnConsumer) {
            warn('Setting `displayName` on Context.Consumer has no effect. ' + "You should set it directly on the context with Context.displayName = '%s'.", displayName);

            hasWarnedAboutDisplayNameOnConsumer = true;
          }
        }
      }
    }); // $FlowFixMe: Flow complains about missing properties because it doesn't understand defineProperty

    context.Consumer = Consumer;
  }

  {
    context._currentRenderer = null;
    context._currentRenderer2 = null;
  }

  return context;
}

var Uninitialized = -1;
var Pending = 0;
var Resolved = 1;
var Rejected = 2;

function lazyInitializer(payload) {
  if (payload._status === Uninitialized) {
    var ctor = payload._result;
    var thenable = ctor(); // Transition to the next state.
    // This might throw either because it's missing or throws. If so, we treat it
    // as still uninitialized and try again next time. Which is the same as what
    // happens if the ctor or any wrappers processing the ctor throws. This might
    // end up fixing it if the resolution was a concurrency bug.

    thenable.then(function (moduleObject) {
      if (payload._status === Pending || payload._status === Uninitialized) {
        // Transition to the next state.
        var resolved = payload;
        resolved._status = Resolved;
        resolved._result = moduleObject;
      }
    }, function (error) {
      if (payload._status === Pending || payload._status === Uninitialized) {
        // Transition to the next state.
        var rejected = payload;
        rejected._status = Rejected;
        rejected._result = error;
      }
    });

    if (payload._status === Uninitialized) {
      // In case, we're still uninitialized, then we're waiting for the thenable
      // to resolve. Set it as pending in the meantime.
      var pending = payload;
      pending._status = Pending;
      pending._result = thenable;
    }
  }

  if (payload._status === Resolved) {
    var moduleObject = payload._result;

    {
      if (moduleObject === undefined) {
        error('lazy: Expected the result of a dynamic imp' + 'ort() call. ' + 'Instead received: %s\n\nYour code should look like: \n  ' + // Break up imports to avoid accidentally parsing them as dependencies.
        'const MyComponent = lazy(() => imp' + "ort('./MyComponent'))\n\n" + 'Did you accidentally put curly braces around the import?', moduleObject);
      }
    }

    {
      if (!('default' in moduleObject)) {
        error('lazy: Expected the result of a dynamic imp' + 'ort() call. ' + 'Instead received: %s\n\nYour code should look like: \n  ' + // Break up imports to avoid accidentally parsing them as dependencies.
        'const MyComponent = lazy(() => imp' + "ort('./MyComponent'))", moduleObject);
      }
    }

    return moduleObject.default;
  } else {
    throw payload._result;
  }
}

function lazy(ctor) {
  var payload = {
    // We use these fields to store the result.
    _status: Uninitialized,
    _result: ctor
  };
  var lazyType = {
    $$typeof: REACT_LAZY_TYPE,
    _payload: payload,
    _init: lazyInitializer
  };

  {
    // In production, this would just set it on the object.
    var defaultProps;
    var propTypes; // $FlowFixMe

    Object.defineProperties(lazyType, {
      defaultProps: {
        configurable: true,
        get: function () {
          return defaultProps;
        },
        set: function (newDefaultProps) {
          error('React.lazy(...): It is not supported to assign `defaultProps` to ' + 'a lazy component import. Either specify them where the component ' + 'is defined, or create a wrapping component around it.');

          defaultProps = newDefaultProps; // Match production behavior more closely:
          // $FlowFixMe

          Object.defineProperty(lazyType, 'defaultProps', {
            enumerable: true
          });
        }
      },
      propTypes: {
        configurable: true,
        get: function () {
          return propTypes;
        },
        set: function (newPropTypes) {
          error('React.lazy(...): It is not supported to assign `propTypes` to ' + 'a lazy component import. Either specify them where the component ' + 'is defined, or create a wrapping component around it.');

          propTypes = newPropTypes; // Match production behavior more closely:
          // $FlowFixMe

          Object.defineProperty(lazyType, 'propTypes', {
            enumerable: true
          });
        }
      }
    });
  }

  return lazyType;
}

function forwardRef(render) {
  {
    if (render != null && render.$$typeof === REACT_MEMO_TYPE) {
      error('forwardRef requires a render function but received a `memo` ' + 'component. Instead of forwardRef(memo(...)), use ' + 'memo(forwardRef(...)).');
    } else if (typeof render !== 'function') {
      error('forwardRef requires a render function but was given %s.', render === null ? 'null' : typeof render);
    } else {
      if (render.length !== 0 && render.length !== 2) {
        error('forwardRef render functions accept exactly two parameters: props and ref. %s', render.length === 1 ? 'Did you forget to use the ref parameter?' : 'Any additional parameter will be undefined.');
      }
    }

    if (render != null) {
      if (render.defaultProps != null || render.propTypes != null) {
        error('forwardRef render functions do not support propTypes or defaultProps. ' + 'Did you accidentally pass a React component?');
      }
    }
  }

  var elementType = {
    $$typeof: REACT_FORWARD_REF_TYPE,
    render: render
  };

  {
    var ownName;
    Object.defineProperty(elementType, 'displayName', {
      enumerable: false,
      configurable: true,
      get: function () {
        return ownName;
      },
      set: function (name) {
        ownName = name; // The inner component shouldn't inherit this display name in most cases,
        // because the component may be used elsewhere.
        // But it's nice for anonymous functions to inherit the name,
        // so that our component-stack generation logic will display their frames.
        // An anonymous function generally suggests a pattern like:
        //   React.forwardRef((props, ref) => {...});
        // This kind of inner function is not used elsewhere so the side effect is okay.

        if (!render.name && !render.displayName) {
          render.displayName = name;
        }
      }
    });
  }

  return elementType;
}

var REACT_MODULE_REFERENCE;

{
  REACT_MODULE_REFERENCE = Symbol.for('react.module.reference');
}

function isValidElementType(type) {
  if (typeof type === 'string' || typeof type === 'function') {
    return true;
  } // Note: typeof might be other than 'symbol' or 'number' (e.g. if it's a polyfill).


  if (type === REACT_FRAGMENT_TYPE || type === REACT_PROFILER_TYPE || enableDebugTracing  || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || enableLegacyHidden  || type === REACT_OFFSCREEN_TYPE || enableScopeAPI  || enableCacheElement  || enableTransitionTracing ) {
    return true;
  }

  if (typeof type === 'object' && type !== null) {
    if (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || // This needs to include all possible module reference object
    // types supported by any Flight configuration anywhere since
    // we don't know which Flight build this will end up being used
    // with.
    type.$$typeof === REACT_MODULE_REFERENCE || type.getModuleId !== undefined) {
      return true;
    }
  }

  return false;
}

function memo(type, compare) {
  {
    if (!isValidElementType(type)) {
      error('memo: The first argument must be a component. Instead ' + 'received: %s', type === null ? 'null' : typeof type);
    }
  }

  var elementType = {
    $$typeof: REACT_MEMO_TYPE,
    type: type,
    compare: compare === undefined ? null : compare
  };

  {
    var ownName;
    Object.defineProperty(elementType, 'displayName', {
      enumerable: false,
      configurable: true,
      get: function () {
        return ownName;
      },
      set: function (name) {
        ownName = name; // The inner component shouldn't inherit this display name in most cases,
        // because the component may be used elsewhere.
        // But it's nice for anonymous functions to inherit the name,
        // so that our component-stack generation logic will display their frames.
        // An anonymous function generally suggests a pattern like:
        //   React.memo((props) => {...});
        // This kind of inner function is not used elsewhere so the side effect is okay.

        if (!type.name && !type.displayName) {
          type.displayName = name;
        }
      }
    });
  }

  return elementType;
}

function resolveDispatcher() {
  var dispatcher = ReactCurrentDispatcher.current;

  {
    if (dispatcher === null) {
      error('Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for' + ' one of the following reasons:\n' + '1. You might have mismatching versions of React and the renderer (such as React DOM)\n' + '2. You might be breaking the Rules of Hooks\n' + '3. You might have more than one copy of React in the same app\n' + 'See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.');
    }
  } // Will result in a null access error if accessed outside render phase. We
  // intentionally don't throw our own error because this is in a hot path.
  // Also helps ensure this is inlined.


  return dispatcher;
}
function useContext(Context) {
  var dispatcher = resolveDispatcher();

  {
    // TODO: add a more generic warning for invalid values.
    if (Context._context !== undefined) {
      var realContext = Context._context; // Don't deduplicate because this legitimately causes bugs
      // and nobody should be using this in existing code.

      if (realContext.Consumer === Context) {
        error('Calling useContext(Context.Consumer) is not supported, may cause bugs, and will be ' + 'removed in a future major release. Did you mean to call useContext(Context) instead?');
      } else if (realContext.Provider === Context) {
        error('Calling useContext(Context.Provider) is not supported. ' + 'Did you mean to call useContext(Context) instead?');
      }
    }
  }

  return dispatcher.useContext(Context);
}
function useState(initialState) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useState(initialState);
}
function useReducer(reducer, initialArg, init) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useReducer(reducer, initialArg, init);
}
function useRef(initialValue) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useRef(initialValue);
}
function useEffect(create, deps) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useEffect(create, deps);
}
function useInsertionEffect(create, deps) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useInsertionEffect(create, deps);
}
function useLayoutEffect(create, deps) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useLayoutEffect(create, deps);
}
function useCallback(callback, deps) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useCallback(callback, deps);
}
function useMemo(create, deps) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useMemo(create, deps);
}
function useImperativeHandle(ref, create, deps) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useImperativeHandle(ref, create, deps);
}
function useDebugValue(value, formatterFn) {
  {
    var dispatcher = resolveDispatcher();
    return dispatcher.useDebugValue(value, formatterFn);
  }
}
function useTransition() {
  var dispatcher = resolveDispatcher();
  return dispatcher.useTransition();
}
function useDeferredValue(value) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useDeferredValue(value);
}
function useId() {
  var dispatcher = resolveDispatcher();
  return dispatcher.useId();
}
function useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}

// Helpers to patch console.logs to avoid logging during side-effect free
// replaying on render function. This currently only patches the object
// lazily which won't cover if the log function was extracted eagerly.
// We could also eagerly patch the method.
var disabledDepth = 0;
var prevLog;
var prevInfo;
var prevWarn;
var prevError;
var prevGroup;
var prevGroupCollapsed;
var prevGroupEnd;

function disabledLog() {}

disabledLog.__reactDisabledLog = true;
function disableLogs() {
  {
    if (disabledDepth === 0) {
      /* eslint-disable react-internal/no-production-logging */
      prevLog = console.log;
      prevInfo = console.info;
      prevWarn = console.warn;
      prevError = console.error;
      prevGroup = console.group;
      prevGroupCollapsed = console.groupCollapsed;
      prevGroupEnd = console.groupEnd; // https://github.com/facebook/react/issues/19099

      var props = {
        configurable: true,
        enumerable: true,
        value: disabledLog,
        writable: true
      }; // $FlowFixMe Flow thinks console is immutable.

      Object.defineProperties(console, {
        info: props,
        log: props,
        warn: props,
        error: props,
        group: props,
        groupCollapsed: props,
        groupEnd: props
      });
      /* eslint-enable react-internal/no-production-logging */
    }

    disabledDepth++;
  }
}
function reenableLogs() {
  {
    disabledDepth--;

    if (disabledDepth === 0) {
      /* eslint-disable react-internal/no-production-logging */
      var props = {
        configurable: true,
        enumerable: true,
        writable: true
      }; // $FlowFixMe Flow thinks console is immutable.

      Object.defineProperties(console, {
        log: assign({}, props, {
          value: prevLog
        }),
        info: assign({}, props, {
          value: prevInfo
        }),
        warn: assign({}, props, {
          value: prevWarn
        }),
        error: assign({}, props, {
          value: prevError
        }),
        group: assign({}, props, {
          value: prevGroup
        }),
        groupCollapsed: assign({}, props, {
          value: prevGroupCollapsed
        }),
        groupEnd: assign({}, props, {
          value: prevGroupEnd
        })
      });
      /* eslint-enable react-internal/no-production-logging */
    }

    if (disabledDepth < 0) {
      error('disabledDepth fell below zero. ' + 'This is a bug in React. Please file an issue.');
    }
  }
}

var ReactCurrentDispatcher$1 = ReactSharedInternals.ReactCurrentDispatcher;
var prefix;
function describeBuiltInComponentFrame(name, source, ownerFn) {
  {
    if (prefix === undefined) {
      // Extract the VM specific prefix used by each line.
      try {
        throw Error();
      } catch (x) {
        var match = x.stack.trim().match(/\n( *(at )?)/);
        prefix = match && match[1] || '';
      }
    } // We use the prefix to ensure our stacks line up with native stack frames.


    return '\n' + prefix + name;
  }
}
var reentry = false;
var componentFrameCache;

{
  var PossiblyWeakMap = typeof WeakMap === 'function' ? WeakMap : Map;
  componentFrameCache = new PossiblyWeakMap();
}

function describeNativeComponentFrame(fn, construct) {
  // If something asked for a stack inside a fake render, it should get ignored.
  if ( !fn || reentry) {
    return '';
  }

  {
    var frame = componentFrameCache.get(fn);

    if (frame !== undefined) {
      return frame;
    }
  }

  var control;
  reentry = true;
  var previousPrepareStackTrace = Error.prepareStackTrace; // $FlowFixMe It does accept undefined.

  Error.prepareStackTrace = undefined;
  var previousDispatcher;

  {
    previousDispatcher = ReactCurrentDispatcher$1.current; // Set the dispatcher in DEV because this might be call in the render function
    // for warnings.

    ReactCurrentDispatcher$1.current = null;
    disableLogs();
  }

  try {
    // This should throw.
    if (construct) {
      // Something should be setting the props in the constructor.
      var Fake = function () {
        throw Error();
      }; // $FlowFixMe


      Object.defineProperty(Fake.prototype, 'props', {
        set: function () {
          // We use a throwing setter instead of frozen or non-writable props
          // because that won't throw in a non-strict mode function.
          throw Error();
        }
      });

      if (typeof Reflect === 'object' && Reflect.construct) {
        // We construct a different control for this case to include any extra
        // frames added by the construct call.
        try {
          Reflect.construct(Fake, []);
        } catch (x) {
          control = x;
        }

        Reflect.construct(fn, [], Fake);
      } else {
        try {
          Fake.call();
        } catch (x) {
          control = x;
        }

        fn.call(Fake.prototype);
      }
    } else {
      try {
        throw Error();
      } catch (x) {
        control = x;
      }

      fn();
    }
  } catch (sample) {
    // This is inlined manually because closure doesn't do it for us.
    if (sample && control && typeof sample.stack === 'string') {
      // This extracts the first frame from the sample that isn't also in the control.
      // Skipping one frame that we assume is the frame that calls the two.
      var sampleLines = sample.stack.split('\n');
      var controlLines = control.stack.split('\n');
      var s = sampleLines.length - 1;
      var c = controlLines.length - 1;

      while (s >= 1 && c >= 0 && sampleLines[s] !== controlLines[c]) {
        // We expect at least one stack frame to be shared.
        // Typically this will be the root most one. However, stack frames may be
        // cut off due to maximum stack limits. In this case, one maybe cut off
        // earlier than the other. We assume that the sample is longer or the same
        // and there for cut off earlier. So we should find the root most frame in
        // the sample somewhere in the control.
        c--;
      }

      for (; s >= 1 && c >= 0; s--, c--) {
        // Next we find the first one that isn't the same which should be the
        // frame that called our sample function and the control.
        if (sampleLines[s] !== controlLines[c]) {
          // In V8, the first line is describing the message but other VMs don't.
          // If we're about to return the first line, and the control is also on the same
          // line, that's a pretty good indicator that our sample threw at same line as
          // the control. I.e. before we entered the sample frame. So we ignore this result.
          // This can happen if you passed a class to function component, or non-function.
          if (s !== 1 || c !== 1) {
            do {
              s--;
              c--; // We may still have similar intermediate frames from the construct call.
              // The next one that isn't the same should be our match though.

              if (c < 0 || sampleLines[s] !== controlLines[c]) {
                // V8 adds a "new" prefix for native classes. Let's remove it to make it prettier.
                var _frame = '\n' + sampleLines[s].replace(' at new ', ' at '); // If our component frame is labeled "<anonymous>"
                // but we have a user-provided "displayName"
                // splice it in to make the stack more readable.


                if (fn.displayName && _frame.includes('<anonymous>')) {
                  _frame = _frame.replace('<anonymous>', fn.displayName);
                }

                {
                  if (typeof fn === 'function') {
                    componentFrameCache.set(fn, _frame);
                  }
                } // Return the line we found.


                return _frame;
              }
            } while (s >= 1 && c >= 0);
          }

          break;
        }
      }
    }
  } finally {
    reentry = false;

    {
      ReactCurrentDispatcher$1.current = previousDispatcher;
      reenableLogs();
    }

    Error.prepareStackTrace = previousPrepareStackTrace;
  } // Fallback to just using the name if we couldn't make it throw.


  var name = fn ? fn.displayName || fn.name : '';
  var syntheticFrame = name ? describeBuiltInComponentFrame(name) : '';

  {
    if (typeof fn === 'function') {
      componentFrameCache.set(fn, syntheticFrame);
    }
  }

  return syntheticFrame;
}
function describeFunctionComponentFrame(fn, source, ownerFn) {
  {
    return describeNativeComponentFrame(fn, false);
  }
}

function shouldConstruct(Component) {
  var prototype = Component.prototype;
  return !!(prototype && prototype.isReactComponent);
}

function describeUnknownElementTypeFrameInDEV(type, source, ownerFn) {

  if (type == null) {
    return '';
  }

  if (typeof type === 'function') {
    {
      return describeNativeComponentFrame(type, shouldConstruct(type));
    }
  }

  if (typeof type === 'string') {
    return describeBuiltInComponentFrame(type);
  }

  switch (type) {
    case REACT_SUSPENSE_TYPE:
      return describeBuiltInComponentFrame('Suspense');

    case REACT_SUSPENSE_LIST_TYPE:
      return describeBuiltInComponentFrame('SuspenseList');
  }

  if (typeof type === 'object') {
    switch (type.$$typeof) {
      case REACT_FORWARD_REF_TYPE:
        return describeFunctionComponentFrame(type.render);

      case REACT_MEMO_TYPE:
        // Memo may contain any component type so we recursively resolve it.
        return describeUnknownElementTypeFrameInDEV(type.type, source, ownerFn);

      case REACT_LAZY_TYPE:
        {
          var lazyComponent = type;
          var payload = lazyComponent._payload;
          var init = lazyComponent._init;

          try {
            // Lazy may contain any component type so we recursively resolve it.
            return describeUnknownElementTypeFrameInDEV(init(payload), source, ownerFn);
          } catch (x) {}
        }
    }
  }

  return '';
}

var loggedTypeFailures = {};
var ReactDebugCurrentFrame$1 = ReactSharedInternals.ReactDebugCurrentFrame;

function setCurrentlyValidatingElement(element) {
  {
    if (element) {
      var owner = element._owner;
      var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
      ReactDebugCurrentFrame$1.setExtraStackFrame(stack);
    } else {
      ReactDebugCurrentFrame$1.setExtraStackFrame(null);
    }
  }
}

function checkPropTypes(typeSpecs, values, location, componentName, element) {
  {
    // $FlowFixMe This is okay but Flow doesn't know it.
    var has = Function.call.bind(hasOwnProperty);

    for (var typeSpecName in typeSpecs) {
      if (has(typeSpecs, typeSpecName)) {
        var error$1 = void 0; // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.

        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          if (typeof typeSpecs[typeSpecName] !== 'function') {
            // eslint-disable-next-line react-internal/prod-error-codes
            var err = Error((componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' + 'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.' + 'This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.');
            err.name = 'Invariant Violation';
            throw err;
          }

          error$1 = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED');
        } catch (ex) {
          error$1 = ex;
        }

        if (error$1 && !(error$1 instanceof Error)) {
          setCurrentlyValidatingElement(element);

          error('%s: type specification of %s' + ' `%s` is invalid; the type checker ' + 'function must return `null` or an `Error` but returned a %s. ' + 'You may have forgotten to pass an argument to the type checker ' + 'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' + 'shape all require an argument).', componentName || 'React class', location, typeSpecName, typeof error$1);

          setCurrentlyValidatingElement(null);
        }

        if (error$1 instanceof Error && !(error$1.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error$1.message] = true;
          setCurrentlyValidatingElement(element);

          error('Failed %s type: %s', location, error$1.message);

          setCurrentlyValidatingElement(null);
        }
      }
    }
  }
}

function setCurrentlyValidatingElement$1(element) {
  {
    if (element) {
      var owner = element._owner;
      var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
      setExtraStackFrame(stack);
    } else {
      setExtraStackFrame(null);
    }
  }
}

var propTypesMisspellWarningShown;

{
  propTypesMisspellWarningShown = false;
}

function getDeclarationErrorAddendum() {
  if (ReactCurrentOwner.current) {
    var name = getComponentNameFromType(ReactCurrentOwner.current.type);

    if (name) {
      return '\n\nCheck the render method of `' + name + '`.';
    }
  }

  return '';
}

function getSourceInfoErrorAddendum(source) {
  if (source !== undefined) {
    var fileName = source.fileName.replace(/^.*[\\\/]/, '');
    var lineNumber = source.lineNumber;
    return '\n\nCheck your code at ' + fileName + ':' + lineNumber + '.';
  }

  return '';
}

function getSourceInfoErrorAddendumForProps(elementProps) {
  if (elementProps !== null && elementProps !== undefined) {
    return getSourceInfoErrorAddendum(elementProps.__source);
  }

  return '';
}
/**
 * Warn if there's no key explicitly set on dynamic arrays of children or
 * object keys are not valid. This allows us to keep track of children between
 * updates.
 */


var ownerHasKeyUseWarning = {};

function getCurrentComponentErrorInfo(parentType) {
  var info = getDeclarationErrorAddendum();

  if (!info) {
    var parentName = typeof parentType === 'string' ? parentType : parentType.displayName || parentType.name;

    if (parentName) {
      info = "\n\nCheck the top-level render call using <" + parentName + ">.";
    }
  }

  return info;
}
/**
 * Warn if the element doesn't have an explicit key assigned to it.
 * This element is in an array. The array could grow and shrink or be
 * reordered. All children that haven't already been validated are required to
 * have a "key" property assigned to it. Error statuses are cached so a warning
 * will only be shown once.
 *
 * @internal
 * @param {ReactElement} element Element that requires a key.
 * @param {*} parentType element's parent's type.
 */


function validateExplicitKey(element, parentType) {
  if (!element._store || element._store.validated || element.key != null) {
    return;
  }

  element._store.validated = true;
  var currentComponentErrorInfo = getCurrentComponentErrorInfo(parentType);

  if (ownerHasKeyUseWarning[currentComponentErrorInfo]) {
    return;
  }

  ownerHasKeyUseWarning[currentComponentErrorInfo] = true; // Usually the current owner is the offender, but if it accepts children as a
  // property, it may be the creator of the child that's responsible for
  // assigning it a key.

  var childOwner = '';

  if (element && element._owner && element._owner !== ReactCurrentOwner.current) {
    // Give the component that originally created this child.
    childOwner = " It was passed a child from " + getComponentNameFromType(element._owner.type) + ".";
  }

  {
    setCurrentlyValidatingElement$1(element);

    error('Each child in a list should have a unique "key" prop.' + '%s%s See https://reactjs.org/link/warning-keys for more information.', currentComponentErrorInfo, childOwner);

    setCurrentlyValidatingElement$1(null);
  }
}
/**
 * Ensure that every element either is passed in a static location, in an
 * array with an explicit keys property defined, or in an object literal
 * with valid key property.
 *
 * @internal
 * @param {ReactNode} node Statically passed child of any type.
 * @param {*} parentType node's parent's type.
 */


function validateChildKeys(node, parentType) {
  if (typeof node !== 'object') {
    return;
  }

  if (isArray(node)) {
    for (var i = 0; i < node.length; i++) {
      var child = node[i];

      if (isValidElement(child)) {
        validateExplicitKey(child, parentType);
      }
    }
  } else if (isValidElement(node)) {
    // This element was passed in a valid location.
    if (node._store) {
      node._store.validated = true;
    }
  } else if (node) {
    var iteratorFn = getIteratorFn(node);

    if (typeof iteratorFn === 'function') {
      // Entry iterators used to provide implicit keys,
      // but now we print a separate warning for them later.
      if (iteratorFn !== node.entries) {
        var iterator = iteratorFn.call(node);
        var step;

        while (!(step = iterator.next()).done) {
          if (isValidElement(step.value)) {
            validateExplicitKey(step.value, parentType);
          }
        }
      }
    }
  }
}
/**
 * Given an element, validate that its props follow the propTypes definition,
 * provided by the type.
 *
 * @param {ReactElement} element
 */


function validatePropTypes(element) {
  {
    var type = element.type;

    if (type === null || type === undefined || typeof type === 'string') {
      return;
    }

    var propTypes;

    if (typeof type === 'function') {
      propTypes = type.propTypes;
    } else if (typeof type === 'object' && (type.$$typeof === REACT_FORWARD_REF_TYPE || // Note: Memo only checks outer props here.
    // Inner props are checked in the reconciler.
    type.$$typeof === REACT_MEMO_TYPE)) {
      propTypes = type.propTypes;
    } else {
      return;
    }

    if (propTypes) {
      // Intentionally inside to avoid triggering lazy initializers:
      var name = getComponentNameFromType(type);
      checkPropTypes(propTypes, element.props, 'prop', name, element);
    } else if (type.PropTypes !== undefined && !propTypesMisspellWarningShown) {
      propTypesMisspellWarningShown = true; // Intentionally inside to avoid triggering lazy initializers:

      var _name = getComponentNameFromType(type);

      error('Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?', _name || 'Unknown');
    }

    if (typeof type.getDefaultProps === 'function' && !type.getDefaultProps.isReactClassApproved) {
      error('getDefaultProps is only used on classic React.createClass ' + 'definitions. Use a static property named `defaultProps` instead.');
    }
  }
}
/**
 * Given a fragment, validate that it can only be provided with fragment props
 * @param {ReactElement} fragment
 */


function validateFragmentProps(fragment) {
  {
    var keys = Object.keys(fragment.props);

    for (var i = 0; i < keys.length; i++) {
      var key = keys[i];

      if (key !== 'children' && key !== 'key') {
        setCurrentlyValidatingElement$1(fragment);

        error('Invalid prop `%s` supplied to `React.Fragment`. ' + 'React.Fragment can only have `key` and `children` props.', key);

        setCurrentlyValidatingElement$1(null);
        break;
      }
    }

    if (fragment.ref !== null) {
      setCurrentlyValidatingElement$1(fragment);

      error('Invalid attribute `ref` supplied to `React.Fragment`.');

      setCurrentlyValidatingElement$1(null);
    }
  }
}
function createElementWithValidation(type, props, children) {
  var validType = isValidElementType(type); // We warn in this case but don't throw. We expect the element creation to
  // succeed and there will likely be errors in render.

  if (!validType) {
    var info = '';

    if (type === undefined || typeof type === 'object' && type !== null && Object.keys(type).length === 0) {
      info += ' You likely forgot to export your component from the file ' + "it's defined in, or you might have mixed up default and named imports.";
    }

    var sourceInfo = getSourceInfoErrorAddendumForProps(props);

    if (sourceInfo) {
      info += sourceInfo;
    } else {
      info += getDeclarationErrorAddendum();
    }

    var typeString;

    if (type === null) {
      typeString = 'null';
    } else if (isArray(type)) {
      typeString = 'array';
    } else if (type !== undefined && type.$$typeof === REACT_ELEMENT_TYPE) {
      typeString = "<" + (getComponentNameFromType(type.type) || 'Unknown') + " />";
      info = ' Did you accidentally export a JSX literal instead of a component?';
    } else {
      typeString = typeof type;
    }

    {
      error('React.createElement: type is invalid -- expected a string (for ' + 'built-in components) or a class/function (for composite ' + 'components) but got: %s.%s', typeString, info);
    }
  }

  var element = createElement.apply(this, arguments); // The result can be nullish if a mock or a custom function is used.
  // TODO: Drop this when these are no longer allowed as the type argument.

  if (element == null) {
    return element;
  } // Skip key warning if the type isn't valid since our key validation logic
  // doesn't expect a non-string/function type and can throw confusing errors.
  // We don't want exception behavior to differ between dev and prod.
  // (Rendering will throw with a helpful message and as soon as the type is
  // fixed, the key warnings will appear.)


  if (validType) {
    for (var i = 2; i < arguments.length; i++) {
      validateChildKeys(arguments[i], type);
    }
  }

  if (type === REACT_FRAGMENT_TYPE) {
    validateFragmentProps(element);
  } else {
    validatePropTypes(element);
  }

  return element;
}
var didWarnAboutDeprecatedCreateFactory = false;
function createFactoryWithValidation(type) {
  var validatedFactory = createElementWithValidation.bind(null, type);
  validatedFactory.type = type;

  {
    if (!didWarnAboutDeprecatedCreateFactory) {
      didWarnAboutDeprecatedCreateFactory = true;

      warn('React.createFactory() is deprecated and will be removed in ' + 'a future major release. Consider using JSX ' + 'or use React.createElement() directly instead.');
    } // Legacy hook: remove it


    Object.defineProperty(validatedFactory, 'type', {
      enumerable: false,
      get: function () {
        warn('Factory.type is deprecated. Access the class directly ' + 'before passing it to createFactory.');

        Object.defineProperty(this, 'type', {
          value: type
        });
        return type;
      }
    });
  }

  return validatedFactory;
}
function cloneElementWithValidation(element, props, children) {
  var newElement = cloneElement.apply(this, arguments);

  for (var i = 2; i < arguments.length; i++) {
    validateChildKeys(arguments[i], newElement.type);
  }

  validatePropTypes(newElement);
  return newElement;
}

function startTransition(scope, options) {
  var prevTransition = ReactCurrentBatchConfig.transition;
  ReactCurrentBatchConfig.transition = {};
  var currentTransition = ReactCurrentBatchConfig.transition;

  {
    ReactCurrentBatchConfig.transition._updatedFibers = new Set();
  }

  try {
    scope();
  } finally {
    ReactCurrentBatchConfig.transition = prevTransition;

    {
      if (prevTransition === null && currentTransition._updatedFibers) {
        var updatedFibersCount = currentTransition._updatedFibers.size;

        if (updatedFibersCount > 10) {
          warn('Detected a large number of updates inside startTransition. ' + 'If this is due to a subscription please re-write it to use React provided hooks. ' + 'Otherwise concurrent mode guarantees are off the table.');
        }

        currentTransition._updatedFibers.clear();
      }
    }
  }
}

var didWarnAboutMessageChannel = false;
var enqueueTaskImpl = null;
function enqueueTask(task) {
  if (enqueueTaskImpl === null) {
    try {
      // read require off the module object to get around the bundlers.
      // we don't want them to detect a require and bundle a Node polyfill.
      var requireString = ('require' + Math.random()).slice(0, 7);
      var nodeRequire = module && module[requireString]; // assuming we're in node, let's try to get node's
      // version of setImmediate, bypassing fake timers if any.

      enqueueTaskImpl = nodeRequire.call(module, 'timers').setImmediate;
    } catch (_err) {
      // we're in a browser
      // we can't use regular timers because they may still be faked
      // so we try MessageChannel+postMessage instead
      enqueueTaskImpl = function (callback) {
        {
          if (didWarnAboutMessageChannel === false) {
            didWarnAboutMessageChannel = true;

            if (typeof MessageChannel === 'undefined') {
              error('This browser does not have a MessageChannel implementation, ' + 'so enqueuing tasks via await act(async () => ...) will fail. ' + 'Please file an issue at https://github.com/facebook/react/issues ' + 'if you encounter this warning.');
            }
          }
        }

        var channel = new MessageChannel();
        channel.port1.onmessage = callback;
        channel.port2.postMessage(undefined);
      };
    }
  }

  return enqueueTaskImpl(task);
}

var actScopeDepth = 0;
var didWarnNoAwaitAct = false;
function act(callback) {
  {
    // `act` calls can be nested, so we track the depth. This represents the
    // number of `act` scopes on the stack.
    var prevActScopeDepth = actScopeDepth;
    actScopeDepth++;

    if (ReactCurrentActQueue.current === null) {
      // This is the outermost `act` scope. Initialize the queue. The reconciler
      // will detect the queue and use it instead of Scheduler.
      ReactCurrentActQueue.current = [];
    }

    var prevIsBatchingLegacy = ReactCurrentActQueue.isBatchingLegacy;
    var result;

    try {
      // Used to reproduce behavior of `batchedUpdates` in legacy mode. Only
      // set to `true` while the given callback is executed, not for updates
      // triggered during an async event, because this is how the legacy
      // implementation of `act` behaved.
      ReactCurrentActQueue.isBatchingLegacy = true;
      result = callback(); // Replicate behavior of original `act` implementation in legacy mode,
      // which flushed updates immediately after the scope function exits, even
      // if it's an async function.

      if (!prevIsBatchingLegacy && ReactCurrentActQueue.didScheduleLegacyUpdate) {
        var queue = ReactCurrentActQueue.current;

        if (queue !== null) {
          ReactCurrentActQueue.didScheduleLegacyUpdate = false;
          flushActQueue(queue);
        }
      }
    } catch (error) {
      popActScope(prevActScopeDepth);
      throw error;
    } finally {
      ReactCurrentActQueue.isBatchingLegacy = prevIsBatchingLegacy;
    }

    if (result !== null && typeof result === 'object' && typeof result.then === 'function') {
      var thenableResult = result; // The callback is an async function (i.e. returned a promise). Wait
      // for it to resolve before exiting the current scope.

      var wasAwaited = false;
      var thenable = {
        then: function (resolve, reject) {
          wasAwaited = true;
          thenableResult.then(function (returnValue) {
            popActScope(prevActScopeDepth);

            if (actScopeDepth === 0) {
              // We've exited the outermost act scope. Recursively flush the
              // queue until there's no remaining work.
              recursivelyFlushAsyncActWork(returnValue, resolve, reject);
            } else {
              resolve(returnValue);
            }
          }, function (error) {
            // The callback threw an error.
            popActScope(prevActScopeDepth);
            reject(error);
          });
        }
      };

      {
        if (!didWarnNoAwaitAct && typeof Promise !== 'undefined') {
          // eslint-disable-next-line no-undef
          Promise.resolve().then(function () {}).then(function () {
            if (!wasAwaited) {
              didWarnNoAwaitAct = true;

              error('You called act(async () => ...) without await. ' + 'This could lead to unexpected testing behaviour, ' + 'interleaving multiple act calls and mixing their ' + 'scopes. ' + 'You should - await act(async () => ...);');
            }
          });
        }
      }

      return thenable;
    } else {
      var returnValue = result; // The callback is not an async function. Exit the current scope
      // immediately, without awaiting.

      popActScope(prevActScopeDepth);

      if (actScopeDepth === 0) {
        // Exiting the outermost act scope. Flush the queue.
        var _queue = ReactCurrentActQueue.current;

        if (_queue !== null) {
          flushActQueue(_queue);
          ReactCurrentActQueue.current = null;
        } // Return a thenable. If the user awaits it, we'll flush again in
        // case additional work was scheduled by a microtask.


        var _thenable = {
          then: function (resolve, reject) {
            // Confirm we haven't re-entered another `act` scope, in case
            // the user does something weird like await the thenable
            // multiple times.
            if (ReactCurrentActQueue.current === null) {
              // Recursively flush the queue until there's no remaining work.
              ReactCurrentActQueue.current = [];
              recursivelyFlushAsyncActWork(returnValue, resolve, reject);
            } else {
              resolve(returnValue);
            }
          }
        };
        return _thenable;
      } else {
        // Since we're inside a nested `act` scope, the returned thenable
        // immediately resolves. The outer scope will flush the queue.
        var _thenable2 = {
          then: function (resolve, reject) {
            resolve(returnValue);
          }
        };
        return _thenable2;
      }
    }
  }
}

function popActScope(prevActScopeDepth) {
  {
    if (prevActScopeDepth !== actScopeDepth - 1) {
      error('You seem to have overlapping act() calls, this is not supported. ' + 'Be sure to await previous act() calls before making a new one. ');
    }

    actScopeDepth = prevActScopeDepth;
  }
}

function recursivelyFlushAsyncActWork(returnValue, resolve, reject) {
  {
    var queue = ReactCurrentActQueue.current;

    if (queue !== null) {
      try {
        flushActQueue(queue);
        enqueueTask(function () {
          if (queue.length === 0) {
            // No additional work was scheduled. Finish.
            ReactCurrentActQueue.current = null;
            resolve(returnValue);
          } else {
            // Keep flushing work until there's none left.
            recursivelyFlushAsyncActWork(returnValue, resolve, reject);
          }
        });
      } catch (error) {
        reject(error);
      }
    } else {
      resolve(returnValue);
    }
  }
}

var isFlushing = false;

function flushActQueue(queue) {
  {
    if (!isFlushing) {
      // Prevent re-entrance.
      isFlushing = true;
      var i = 0;

      try {
        for (; i < queue.length; i++) {
          var callback = queue[i];

          do {
            callback = callback(true);
          } while (callback !== null);
        }

        queue.length = 0;
      } catch (error) {
        // If something throws, leave the remaining callbacks on the queue.
        queue = queue.slice(i + 1);
        throw error;
      } finally {
        isFlushing = false;
      }
    }
  }
}

var createElement$1 =  createElementWithValidation ;
var cloneElement$1 =  cloneElementWithValidation ;
var createFactory =  createFactoryWithValidation ;
var Children = {
  map: mapChildren,
  forEach: forEachChildren,
  count: countChildren,
  toArray: toArray,
  only: onlyChild
};

exports.Children = Children;
exports.Component = Component;
exports.Fragment = REACT_FRAGMENT_TYPE;
exports.Profiler = REACT_PROFILER_TYPE;
exports.PureComponent = PureComponent;
exports.StrictMode = REACT_STRICT_MODE_TYPE;
exports.Suspense = REACT_SUSPENSE_TYPE;
exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ReactSharedInternals;
exports.cloneElement = cloneElement$1;
exports.createContext = createContext;
exports.createElement = createElement$1;
exports.createFactory = createFactory;
exports.createRef = createRef;
exports.forwardRef = forwardRef;
exports.isValidElement = isValidElement;
exports.lazy = lazy;
exports.memo = memo;
exports.startTransition = startTransition;
exports.unstable_act = act;
exports.useCallback = useCallback;
exports.useContext = useContext;
exports.useDebugValue = useDebugValue;
exports.useDeferredValue = useDeferredValue;
exports.useEffect = useEffect;
exports.useId = useId;
exports.useImperativeHandle = useImperativeHandle;
exports.useInsertionEffect = useInsertionEffect;
exports.useLayoutEffect = useLayoutEffect;
exports.useMemo = useMemo;
exports.useReducer = useReducer;
exports.useRef = useRef;
exports.useState = useState;
exports.useSyncExternalStore = useSyncExternalStore;
exports.useTransition = useTransition;
exports.version = ReactVersion;
          /* global __REACT_DEVTOOLS_GLOBAL_HOOK__ */
if (
  typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ !== 'undefined' &&
  typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop ===
    'function'
) {
  __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
}
        
  })();
}
}(react_development, react_development.exports));

if (process.env.NODE_ENV === 'production') {
  react.exports = react_production_min;
} else {
  react.exports = react_development.exports;
}

var React = react.exports;

var css_248z$a = "@import url(\"https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap\");\n:root {\n  --round-xs: 2px;\n  --round-s: 4px;\n  --round-m: 8px;\n  --round-l: 12px;\n  --round-xl: 16px;\n  --round-xxl: 20px;\n  --padding-xxs: 2px;\n  --padding-xs: 4px;\n  --padding-s: 8px;\n  --padding-m: 12px;\n  --padding-l: 16px;\n  --padding-xl: 20px;\n  --padding-xxl: 24px;\n  --shadow-xs: 0px 1px 2px 0px rgba(0, 0, 0, 0.0509803922);\n  --shadow-sm: 0px 1px 3px 0px rgba(0, 0, 0, 0.0784313725);\n  --shadow-m: 0px 1.5px 4px -1px rgba(0, 0, 0, 0.1215686275);\n  --shadow-lg: 0px 4px 6px -2px rgba(0, 0, 0, 0.1019607843), 0px 10px 15px -3px rgba(0, 0, 0, 0.0509803922);\n  --shadow-xl: 0px 10px 10px -5px rgba(0, 0, 0, 0.1019607843), 0px 20px 25px -5px rgba(0, 0, 0, 0.0392156863);\n  --shadow-2xl: 0px 25px 50px -12px rgba(0, 0, 0, 0.2509803922);\n  --shadow-flat: 0px 1px 0px #e4e4e7;\n  --shadow-in: inset 0px 2px 4px #525252;\n  --base-00: #ffffff;\n  --base-50: rgba(26, 26, 26, 0.0509803922);\n  --base-100: rgba(26, 26, 26, 0.1019607843);\n  --base-200: rgba(26, 26, 26, 0.2);\n  --base-300: rgba(26, 26, 26, 0.3019607843);\n  --base-400: rgba(26, 26, 26, 0.4);\n  --base-500: rgba(26, 26, 26, 0.5019607843);\n  --base-600: rgba(26, 26, 26, 0.6);\n  --base-700: rgba(26, 26, 26, 0.7019607843);\n  --base-800: rgba(26, 26, 26, 0.8);\n  --base-900: #1a1a1a;\n  --primary-50: #f2f7ff;\n  --primary-100: #dcebfe;\n  --primary-200: #bedbfe;\n  --primary-300: #91c3fd;\n  --primary-400: #61a6fa;\n  --primary-500: #3479e9;\n  --primary-600: #2463eb;\n  --primary-700: #1d4fd7;\n  --primary-800: #1e3fae;\n  --primary-900: #1e3b8a;\n  --secondary-50: #faf5ff;\n  --secondary-100: #f2e5ff;\n  --secondary-200: #ead6ff;\n  --secondary-300: #d8b4fe;\n  --secondary-400: #bf83fc;\n  --secondary-500: #a855f7;\n  --secondary-600: #9234ea;\n  --secondary-700: #7e22ce;\n  --secondary-800: #6a21a6;\n  --secondary-900: #591c87;\n  --tertiary-50: #fdfdfd;\n  --tertiary-100: #f4f4f5;\n  --tertiary-200: #e4e4e7;\n  --tertiary-300: #d4d4d8;\n  --tertiary-400: #a1a1aa;\n  --tertiary-500: #71717a;\n  --tertiary-600: #52525b;\n  --tertiary-700: #3f3f46;\n  --tertiary-800: #27272a;\n  --tertiary-900: #18181b;\n  --success-50: #f2fdf5;\n  --success-100: #defce9;\n  --success-200: #bbf7d0;\n  --success-300: #85efac;\n  --success-400: #4ade80;\n  --success-500: #1ac057;\n  --success-600: #16a249;\n  --success-700: #157f3c;\n  --success-800: #1c713c;\n  --success-900: #114c29;\n  --warning-50: #fef1f1;\n  --warning-100: #fee1e1;\n  --warning-200: #fec8c8;\n  --warning-300: #fca6a6;\n  --warning-400: #fd6b6b;\n  --warning-500: #ef4343;\n  --warning-600: #dc2828;\n  --warning-700: #ba1c1c;\n  --warning-800: #981b1b;\n  --warning-900: #811d1d;\n  --highlight-50: #fefce7;\n  --highlight-100: #fef9c3;\n  --highlight-200: #fef08b;\n  --highlight-300: #fddf49;\n  --highlight-400: #facc14;\n  --highlight-500: #e7b008;\n  --highlight-600: #c88a04;\n  --highlight-700: #a26107;\n  --highlight-800: #864e0e;\n  --highlight-900: #733f12;\n  --blue-gray-50: #f8fafc;\n  --blue-gray-100: #f1f5f9;\n  --blue-gray-200: #e1e7ef;\n  --blue-gray-300: #cbd5e1;\n  --blue-gray-400: #94a3b8;\n  --blue-gray-500: #65758b;\n  --blue-gray-600: #48566a;\n  --blue-gray-700: #344256;\n  --blue-gray-800: #1d283a;\n  --blue-gray-900: #0f1729;\n  --bronze-50: #fafaf9;\n  --bronze-100: #f5f5f4;\n  --bronze-200: #e7e5e4;\n  --bronze-300: #d6d3d1;\n  --bronze-400: #a8a29f;\n  --bronze-500: #78726d;\n  --bronze-600: #56524e;\n  --bronze-700: #44403c;\n  --bronze-800: #292524;\n  --bronze-900: #1c1917;\n  --cyan-50: #ebfeff;\n  --cyan-100: #cdfafe;\n  --cyan-200: #a6f3fc;\n  --cyan-300: #67e8f9;\n  --cyan-400: #20d3ee;\n  --cyan-500: #07b6d5;\n  --cyan-600: #088eaf;\n  --cyan-700: #0e7490;\n  --cyan-800: #155f75;\n  --cyan-900: #164f64;\n  --emerald-50: #edfdf5;\n  --emerald-100: #d1fae5;\n  --emerald-200: #a5f3cf;\n  --emerald-300: #6ee7b7;\n  --emerald-400: #36d399;\n  --emerald-500: #10b77f;\n  --emerald-600: #059467;\n  --emerald-700: #047656;\n  --emerald-800: #066046;\n  --emerald-900: #064b39;\n  --fuchsia-50: #fdf5ff;\n  --fuchsia-100: #f9e5ff;\n  --fuchsia-200: #f5d2fe;\n  --fuchsia-300: #f0abfc;\n  --fuchsia-400: #e87bf9;\n  --fuchsia-500: #d948ef;\n  --fuchsia-600: #bf27d3;\n  --fuchsia-700: #a31daf;\n  --fuchsia-800: #85198f;\n  --fuchsia-900: #711a75;\n  --indigo-50: #f0f3ff;\n  --indigo-100: #e0e8ff;\n  --indigo-200: #c8d3fe;\n  --indigo-300: #a6b4fc;\n  --indigo-400: #828df8;\n  --indigo-500: #6467f2;\n  --indigo-600: #5048e5;\n  --indigo-700: #463acb;\n  --indigo-800: #372fa2;\n  --indigo-900: #312e7f;\n  --light-blue-50: #f0f9ff;\n  --light-blue-100: #e1f3fe;\n  --light-blue-200: #bae5fd;\n  --light-blue-300: #7ed4fc;\n  --light-blue-400: #3abff8;\n  --light-blue-500: #0da2e7;\n  --light-blue-600: #0284c5;\n  --light-blue-700: #0369a0;\n  --light-blue-800: #075783;\n  --light-blue-900: #0c4a6e;\n  --lime-50: #f7fee7;\n  --lime-100: #ebfcca;\n  --lime-200: #d9f99f;\n  --lime-300: #bef263;\n  --lime-400: #a1e633;\n  --lime-500: #82cb15;\n  --lime-600: #66a50d;\n  --lime-700: #4c7b0f;\n  --lime-800: #406312;\n  --lime-900: #355214;\n  --metal-50: #f9fafb;\n  --metal-100: #f3f4f6;\n  --metal-200: #e5e7eb;\n  --metal-300: #d1d5db;\n  --metal-400: #9ca3b0;\n  --metal-500: #6b7280;\n  --metal-600: #4b5563;\n  --metal-700: #384252;\n  --metal-800: #1f2937;\n  --metal-900: #111827;\n  --orange-50: #fff6eb;\n  --orange-200: #fed6a9;\n  --orange-400: #fb923c;\n  --pink-50: #fdf2f8;\n  --pink-100: #fce8f4;\n  --pink-200: #fbd0e8;\n  --pink-300: #f9a9d5;\n  --pink-400: #f471b5;\n  --pink-500: #ec4699;\n  --pink-600: #db2979;\n  --pink-700: #bf185d;\n  --pink-800: #9b174c;\n  --pink-900: #811842;\n  --rose-50: #fff0f1;\n  --rose-100: #ffe5e7;\n  --rose-200: #fecdd3;\n  --rose-300: #fda5af;\n  --rose-400: #fb6f84;\n  --rose-500: #f43e5c;\n  --rose-600: #e21d48;\n  --rose-700: #bf123d;\n  --rose-800: #a1123a;\n  --rose-900: #861336;\n  --teal-50: #f2fdfa;\n  --teal-100: #cbfbf0;\n  --teal-200: #98f6e3;\n  --teal-300: #5dead5;\n  --teal-400: #2bd4bd;\n  --teal-500: #14b8a5;\n  --teal-600: #0d968b;\n  --teal-700: #0f756d;\n  --teal-800: #115f5a;\n  --teal-900: #134e4a;\n  --violet-50: #f6f5ff;\n  --violet-100: #ebe7fe;\n  --violet-200: #ded7fe;\n  --violet-300: #c3b4fd;\n  --violet-400: #a689fa;\n  --violet-500: #895af6;\n  --violet-600: #7c3bed;\n  --violet-700: #6b26d9;\n  --violet-800: #5a21b5;\n  --violet-900: #4d1d95;\n}\n\n@media (prefers-color-scheme: dark) {\n  :root {\n    --shadow-xs: 0px 0.5px 0px #525252;\n    --shadow-sm: 0px 1px 1px rgba(18, 18, 18, 0.3019607843);\n    --shadow-m: 0px 2.5px 4px rgba(18, 18, 18, 0.6509803922);\n    --shadow-lg: 0px 3px 5px rgba(18, 18, 18, 0.8);\n    --shadow-xl: 0px 2.5px 8px #121212;\n    --shadow-2xl: 0px 4px 12px #121212;\n    --shadow-flat: 0px 1px 0px #434343;\n    --shadow-in: inset 0px 1px 2px rgba(255, 255, 255, 0.24);\n    --base-00: #141414;\n    --base-50: rgba(255, 255, 255, 0.0509803922);\n    --base-100: rgba(255, 255, 255, 0.1019607843);\n    --base-200: rgba(255, 255, 255, 0.2);\n    --base-300: rgba(255, 255, 255, 0.3019607843);\n    --base-400: rgba(255, 255, 255, 0.4);\n    --base-500: rgba(255, 255, 255, 0.5019607843);\n    --base-600: rgba(255, 255, 255, 0.6);\n    --base-700: rgba(255, 255, 255, 0.7019607843);\n    --base-800: rgba(255, 255, 255, 0.8);\n    --base-900: #ffffff;\n    --primary-50: #1d223f;\n    --primary-100: #0a318c;\n    --primary-200: #1347cc;\n    --primary-300: #1055ea;\n    --primary-400: #357aea;\n    --primary-500: #2e88f6;\n    --primary-600: #50a1ff;\n    --primary-700: #7ab7ff;\n    --primary-800: #dcebfe;\n    --primary-900: #f0f6ff;\n    --secondary-50: #35194a;\n    --secondary-100: #4e1d72;\n    --secondary-200: #7e22ce;\n    --secondary-300: #9c40ec;\n    --secondary-400: #ab57ff;\n    --secondary-500: #d07fff;\n    --secondary-600: #e9a0ff;\n    --secondary-700: #ffbcff;\n    --secondary-800: #ffd6ff;\n    --secondary-900: #ffefff;\n    --tertiary-50: #272727;\n    --tertiary-100: #333333;\n    --tertiary-200: #434343;\n    --tertiary-300: #5f5f5f;\n    --tertiary-400: #747474;\n    --tertiary-500: #878787;\n    --tertiary-600: #9b9b9b;\n    --tertiary-700: #b9b9b9;\n    --tertiary-800: #d7d7d7;\n    --tertiary-900: #efefef;\n    --success-50: #0e3619;\n    --success-100: #14522d;\n    --success-200: #166434;\n    --success-300: #119541;\n    --success-400: #21c45d;\n    --success-500: #4ade80;\n    --success-600: #85efac;\n    --success-700: #bbf7d0;\n    --success-800: #defce9;\n    --success-900: #f2fdf5;\n    --warning-50: #5d2323;\n    --warning-100: #781f1f;\n    --warning-200: #ae4040;\n    --warning-300: #dc3d3d;\n    --warning-400: #f64d4d;\n    --warning-500: #ff6262;\n    --warning-600: #ff9393;\n    --warning-700: #ffa7a7;\n    --warning-800: #ffbbbb;\n    --warning-900: #fed0d0;\n    --highlight-50: #413d17;\n    --highlight-100: #864e0e;\n    --highlight-200: #a26107;\n    --highlight-300: #c88a04;\n    --highlight-400: #e7b008;\n    --highlight-500: #facc14;\n    --highlight-600: #fddf49;\n    --highlight-700: #fef08b;\n    --highlight-800: #fefacb;\n    --highlight-900: #fefce6;\n    --blue-gray-50: #0f1729;\n    --blue-gray-100: #1d283a;\n    --blue-gray-200: #344256;\n    --blue-gray-300: #48566a;\n    --blue-gray-400: #65758b;\n    --blue-gray-500: #94a3b8;\n    --blue-gray-600: #cbd5e1;\n    --blue-gray-700: #e1e7ef;\n    --blue-gray-800: #f1f5f9;\n    --blue-gray-900: #f8fafc;\n    --bronze-50: #1c1917;\n    --bronze-100: #292524;\n    --bronze-200: #44403c;\n    --bronze-300: #56524e;\n    --bronze-400: #78726d;\n    --bronze-500: #a8a29f;\n    --bronze-600: #d6d3d1;\n    --bronze-700: #e7e5e4;\n    --bronze-800: #f5f5f4;\n    --bronze-900: #fafaf9;\n    --cyan-50: #164f64;\n    --cyan-100: #155f75;\n    --cyan-200: #0e7490;\n    --cyan-300: #088eaf;\n    --cyan-400: #07b6d5;\n    --cyan-500: #20d3ee;\n    --cyan-600: #20d3ee;\n    --cyan-700: #67e8f9;\n    --cyan-800: #cdfafe;\n    --cyan-900: #ebfeff;\n    --emerald-50: #064c39;\n    --emerald-100: #066046;\n    --emerald-200: #047756;\n    --emerald-300: #059467;\n    --emerald-400: #10b77f;\n    --emerald-500: #36d399;\n    --emerald-600: #6ee7b7;\n    --emerald-700: #a5f3cf;\n    --emerald-800: #d1fae5;\n    --emerald-900: #edfdf5;\n    --fuchsia-50: #701076;\n    --fuchsia-100: #85198f;\n    --fuchsia-200: #a31daf;\n    --fuchsia-300: #bf27d3;\n    --fuchsia-400: #d948ef;\n    --fuchsia-500: #e87bf9;\n    --fuchsia-600: #f0abfc;\n    --fuchsia-700: #f5d2fe;\n    --fuchsia-800: #f9e5ff;\n    --fuchsia-900: #fdf5ff;\n    --indigo-50: #312e7f;\n    --indigo-100: #372fa2;\n    --indigo-200: #463acb;\n    --indigo-300: #5048e5;\n    --indigo-400: #6467f2;\n    --indigo-500: #828df8;\n    --indigo-600: #a6b4fc;\n    --indigo-700: #c8d3fe;\n    --indigo-800: #e0e8ff;\n    --indigo-900: #f0f3ff;\n    --light-blue-50: #0c4a6e;\n    --light-blue-100: #075783;\n    --light-blue-200: #0369a0;\n    --light-blue-300: #0284c5;\n    --light-blue-400: #0da2e7;\n    --light-blue-500: #3abff8;\n    --light-blue-600: #7ed4fc;\n    --light-blue-700: #bae5fd;\n    --light-blue-800: #e1f3fe;\n    --light-blue-900: #f0f9ff;\n    --lime-50: #355214;\n    --lime-100: #406312;\n    --lime-200: #4c7b0f;\n    --lime-300: #66a50d;\n    --lime-400: #82cb15;\n    --lime-500: #a1e633;\n    --lime-600: #bef263;\n    --lime-700: #d9f99f;\n    --lime-800: #ebfcca;\n    --lime-900: #f7fee7;\n    --metal-100: #1f2937;\n    --metal-200: #384252;\n    --metal-300: #4b5563;\n    --metal-400: #6b7280;\n    --metal-500: #9ca3b0;\n    --metal-600: #d1d5db;\n    --metal-700: #e5e7eb;\n    --metal-800: #f3f4f6;\n    --metal-900: #f9fafb;\n    --orange-50: #582817;\n    --orange-100: #9b3412;\n    --orange-200: #af4d2c;\n    --orange-300: #e05f03;\n    --orange-400: #f97415;\n    --orange-500: #fb923c;\n    --orange-600: #fdba72;\n    --orange-700: #fed6a9;\n    --orange-800: #ffedd6;\n    --orange-900: #fff6eb;\n    --pink-50: #811842;\n    --pink-100: #9b174c;\n    --pink-200: #bf185d;\n    --pink-300: #db2979;\n    --pink-400: #ec4699;\n    --pink-500: #f471b5;\n    --pink-600: #f9a9d5;\n    --pink-700: #fbd0e8;\n    --pink-800: #fce8f4;\n    --pink-900: #fdf2f8;\n    --rose-50: #861336;\n    --rose-100: #a1123a;\n    --rose-200: #bf123d;\n    --rose-300: #e21d48;\n    --rose-400: #f43e5c;\n    --rose-500: #fb6f84;\n    --rose-600: #fda5af;\n    --rose-700: #fecdd3;\n    --rose-800: #ffe5e7;\n    --rose-900: #fff0f1;\n    --teal-50: #134e4a;\n    --teal-100: #115f5a;\n    --teal-200: #0f756d;\n    --teal-300: #0f756d;\n    --teal-400: #14b8a4;\n    --teal-500: #2bd4bd;\n    --teal-600: #5dead5;\n    --teal-700: #98f6e3;\n    --teal-800: #cbfbf0;\n    --teal-900: #f2fdfa;\n    --violet-50: #282056;\n    --violet-100: #4d1d95;\n    --violet-200: #533dab;\n    --violet-300: #7c3bed;\n    --violet-400: #895af6;\n    --violet-500: #a689fa;\n    --violet-600: #c3b4fd;\n    --violet-700: #ded7fe;\n    --violet-800: #ebe7fe;\n    --violet-900: #f6f5ff;\n  }\n}\n* {\n  box-sizing: border-box;\n  outline: none;\n  padding: 0;\n  margin: 0;\n}\n\n@media (prefers-color-scheme: dark) {\n  html {\n    color-scheme: dark;\n  }\n}\n.ds__Button {\n  border: none;\n  position: relative;\n  width: max-content;\n  height: min-content;\n  white-space: nowrap;\n  border-radius: var(--round-m);\n}\n.ds__Button[data-type=primary] {\n  color: #ffffff;\n  background: #2463eb;\n}\n.ds__Button[data-type=primary]:hover {\n  background: #1d4fd7;\n}\n.ds__Button[data-type=primary]:active {\n  background: #3479e9;\n}\n.ds__Button[data-type=primary]:focus {\n  box-shadow: 0 0 0 2px var(--base-00), 0 0 0 4px #2463eb;\n}\n.ds__Button[data-type=primary]:disabled {\n  background: #e1e7ef;\n  pointer-events: none;\n  cursor: not-allowed;\n  opacity: 50%;\n}\n.ds__Button[data-type=secondary] {\n  color: var(--base-900);\n  background: var(--tertiary-50);\n  border: 2px solid var(--tertiary-200);\n}\n.ds__Button[data-type=secondary]:hover {\n  background: var(--base-50);\n}\n.ds__Button[data-type=secondary]:active {\n  background: var(--base-100);\n  border-color: var(--tertiary-300);\n}\n.ds__Button[data-type=secondary]:focus {\n  box-shadow: 0 0 0 2px var(--base-00), 0 0 0 4px #2463eb;\n}\n.ds__Button[data-type=secondary]:disabled {\n  background: #e1e7ef;\n  pointer-events: none;\n  cursor: not-allowed;\n  opacity: 50%;\n}\n.ds__Button[data-type=ghost] {\n  color: #2463eb;\n  background: var(--base-00);\n  border: 2px solid #2463eb;\n}\n.ds__Button[data-type=ghost]:hover {\n  box-shadow: 0 0 0 1px #2463eb;\n}\n.ds__Button[data-type=ghost]:active {\n  border-color: #61a6fa;\n}\n.ds__Button[data-type=ghost]:focus {\n  box-shadow: 0 0 0 2px var(--base-00), 0 0 0 4px #2463eb;\n}\n.ds__Button[data-type=ghost]:disabled {\n  background: #e1e7ef;\n  pointer-events: none;\n  cursor: not-allowed;\n  border: none;\n  opacity: 50%;\n}\n.ds__Button[data-type=danger] {\n  color: #ffffff;\n  background: #ef4343;\n}\n.ds__Button[data-type=danger]:hover {\n  background: #dc2828;\n}\n.ds__Button[data-type=danger]:active {\n  background: #ba1c1c;\n}\n.ds__Button[data-type=danger]:focus {\n  background: #fd6b6b;\n  box-shadow: 0 0 0 2px var(--primary-bg), 0 0 0 4px #fd6b6b;\n}\n.ds__Button[data-type=danger]:disabled {\n  pointer-events: none;\n  cursor: not-allowed;\n  border: none;\n  opacity: 50%;\n}\n.ds__Button[data-size=small] {\n  padding: var(--padding-xs) var(--padding-m);\n  font-family: \"Inter\", sans-serif;\n  margin: 0;\n  font-style: normal;\n  letter-spacing: 0%;\n  text-align: left;\n  font-weight: 500;\n  text-transform: none;\n  text-decoration: none;\n  font-size: 16px;\n  line-height: 24px;\n  line-height: 22px;\n}\n.ds__Button[data-size=default] {\n  padding: var(--padding-s) var(--padding-l);\n  font-family: \"Inter\", sans-serif;\n  margin: 0;\n  font-style: normal;\n  letter-spacing: 0%;\n  text-align: left;\n  font-weight: 500;\n  text-transform: none;\n  text-decoration: none;\n  font-size: 18px;\n  line-height: 30px;\n  line-height: 24px;\n}\n.ds__Button[data-size=medium] {\n  padding: var(--padding-m) var(--padding-xl);\n  font-family: \"Inter\", sans-serif;\n  margin: 0;\n  font-style: normal;\n  letter-spacing: 0%;\n  text-align: left;\n  font-weight: 600;\n  text-transform: none;\n  text-decoration: none;\n  font-size: 20px;\n  line-height: 32px;\n  line-height: 26px;\n}\n.ds__Button[data-size=large] {\n  padding: var(--padding-l) var(--padding-xxl);\n  font-family: \"Inter\", sans-serif;\n  margin: 0;\n  font-style: normal;\n  letter-spacing: 0%;\n  text-align: left;\n  font-weight: 600;\n  text-transform: none;\n  text-decoration: none;\n  font-size: 24px;\n  line-height: 34px;\n  line-height: 28px;\n}";
styleInject(css_248z$a);

// Generated with util/createComponent.js
var Button = function (props, ref) {
    var onClick = props.onClick, disabled = props.disabled, _a = props.className, className = _a === void 0 ? "" : _a, _b = props.label, label = _b === void 0 ? "label" : _b, _c = props.type, type = _c === void 0 ? "primary" : _c, _d = props.size, size = _d === void 0 ? "default" : _d, _e = props.loading, loading = _e === void 0 ? false : _e;
    return (React.createElement("button", { type: "button", "data-type": type, "data-size": size, onClick: onClick, disabled: disabled, "data-loading": loading, className: "ds__Button ".concat(className), ref: ref }, label));
};
var Button$1 = React.forwardRef(Button);

var css_248z$9 = "@import url(\"https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap\");\n:root {\n  --round-xs: 2px;\n  --round-s: 4px;\n  --round-m: 8px;\n  --round-l: 12px;\n  --round-xl: 16px;\n  --round-xxl: 20px;\n  --padding-xxs: 2px;\n  --padding-xs: 4px;\n  --padding-s: 8px;\n  --padding-m: 12px;\n  --padding-l: 16px;\n  --padding-xl: 20px;\n  --padding-xxl: 24px;\n  --shadow-xs: 0px 1px 2px 0px rgba(0, 0, 0, 0.0509803922);\n  --shadow-sm: 0px 1px 3px 0px rgba(0, 0, 0, 0.0784313725);\n  --shadow-m: 0px 1.5px 4px -1px rgba(0, 0, 0, 0.1215686275);\n  --shadow-lg: 0px 4px 6px -2px rgba(0, 0, 0, 0.1019607843), 0px 10px 15px -3px rgba(0, 0, 0, 0.0509803922);\n  --shadow-xl: 0px 10px 10px -5px rgba(0, 0, 0, 0.1019607843), 0px 20px 25px -5px rgba(0, 0, 0, 0.0392156863);\n  --shadow-2xl: 0px 25px 50px -12px rgba(0, 0, 0, 0.2509803922);\n  --shadow-flat: 0px 1px 0px #e4e4e7;\n  --shadow-in: inset 0px 2px 4px #525252;\n  --base-00: #ffffff;\n  --base-50: rgba(26, 26, 26, 0.0509803922);\n  --base-100: rgba(26, 26, 26, 0.1019607843);\n  --base-200: rgba(26, 26, 26, 0.2);\n  --base-300: rgba(26, 26, 26, 0.3019607843);\n  --base-400: rgba(26, 26, 26, 0.4);\n  --base-500: rgba(26, 26, 26, 0.5019607843);\n  --base-600: rgba(26, 26, 26, 0.6);\n  --base-700: rgba(26, 26, 26, 0.7019607843);\n  --base-800: rgba(26, 26, 26, 0.8);\n  --base-900: #1a1a1a;\n  --primary-50: #f2f7ff;\n  --primary-100: #dcebfe;\n  --primary-200: #bedbfe;\n  --primary-300: #91c3fd;\n  --primary-400: #61a6fa;\n  --primary-500: #3479e9;\n  --primary-600: #2463eb;\n  --primary-700: #1d4fd7;\n  --primary-800: #1e3fae;\n  --primary-900: #1e3b8a;\n  --secondary-50: #faf5ff;\n  --secondary-100: #f2e5ff;\n  --secondary-200: #ead6ff;\n  --secondary-300: #d8b4fe;\n  --secondary-400: #bf83fc;\n  --secondary-500: #a855f7;\n  --secondary-600: #9234ea;\n  --secondary-700: #7e22ce;\n  --secondary-800: #6a21a6;\n  --secondary-900: #591c87;\n  --tertiary-50: #fdfdfd;\n  --tertiary-100: #f4f4f5;\n  --tertiary-200: #e4e4e7;\n  --tertiary-300: #d4d4d8;\n  --tertiary-400: #a1a1aa;\n  --tertiary-500: #71717a;\n  --tertiary-600: #52525b;\n  --tertiary-700: #3f3f46;\n  --tertiary-800: #27272a;\n  --tertiary-900: #18181b;\n  --success-50: #f2fdf5;\n  --success-100: #defce9;\n  --success-200: #bbf7d0;\n  --success-300: #85efac;\n  --success-400: #4ade80;\n  --success-500: #1ac057;\n  --success-600: #16a249;\n  --success-700: #157f3c;\n  --success-800: #1c713c;\n  --success-900: #114c29;\n  --warning-50: #fef1f1;\n  --warning-100: #fee1e1;\n  --warning-200: #fec8c8;\n  --warning-300: #fca6a6;\n  --warning-400: #fd6b6b;\n  --warning-500: #ef4343;\n  --warning-600: #dc2828;\n  --warning-700: #ba1c1c;\n  --warning-800: #981b1b;\n  --warning-900: #811d1d;\n  --highlight-50: #fefce7;\n  --highlight-100: #fef9c3;\n  --highlight-200: #fef08b;\n  --highlight-300: #fddf49;\n  --highlight-400: #facc14;\n  --highlight-500: #e7b008;\n  --highlight-600: #c88a04;\n  --highlight-700: #a26107;\n  --highlight-800: #864e0e;\n  --highlight-900: #733f12;\n  --blue-gray-50: #f8fafc;\n  --blue-gray-100: #f1f5f9;\n  --blue-gray-200: #e1e7ef;\n  --blue-gray-300: #cbd5e1;\n  --blue-gray-400: #94a3b8;\n  --blue-gray-500: #65758b;\n  --blue-gray-600: #48566a;\n  --blue-gray-700: #344256;\n  --blue-gray-800: #1d283a;\n  --blue-gray-900: #0f1729;\n  --bronze-50: #fafaf9;\n  --bronze-100: #f5f5f4;\n  --bronze-200: #e7e5e4;\n  --bronze-300: #d6d3d1;\n  --bronze-400: #a8a29f;\n  --bronze-500: #78726d;\n  --bronze-600: #56524e;\n  --bronze-700: #44403c;\n  --bronze-800: #292524;\n  --bronze-900: #1c1917;\n  --cyan-50: #ebfeff;\n  --cyan-100: #cdfafe;\n  --cyan-200: #a6f3fc;\n  --cyan-300: #67e8f9;\n  --cyan-400: #20d3ee;\n  --cyan-500: #07b6d5;\n  --cyan-600: #088eaf;\n  --cyan-700: #0e7490;\n  --cyan-800: #155f75;\n  --cyan-900: #164f64;\n  --emerald-50: #edfdf5;\n  --emerald-100: #d1fae5;\n  --emerald-200: #a5f3cf;\n  --emerald-300: #6ee7b7;\n  --emerald-400: #36d399;\n  --emerald-500: #10b77f;\n  --emerald-600: #059467;\n  --emerald-700: #047656;\n  --emerald-800: #066046;\n  --emerald-900: #064b39;\n  --fuchsia-50: #fdf5ff;\n  --fuchsia-100: #f9e5ff;\n  --fuchsia-200: #f5d2fe;\n  --fuchsia-300: #f0abfc;\n  --fuchsia-400: #e87bf9;\n  --fuchsia-500: #d948ef;\n  --fuchsia-600: #bf27d3;\n  --fuchsia-700: #a31daf;\n  --fuchsia-800: #85198f;\n  --fuchsia-900: #711a75;\n  --indigo-50: #f0f3ff;\n  --indigo-100: #e0e8ff;\n  --indigo-200: #c8d3fe;\n  --indigo-300: #a6b4fc;\n  --indigo-400: #828df8;\n  --indigo-500: #6467f2;\n  --indigo-600: #5048e5;\n  --indigo-700: #463acb;\n  --indigo-800: #372fa2;\n  --indigo-900: #312e7f;\n  --light-blue-50: #f0f9ff;\n  --light-blue-100: #e1f3fe;\n  --light-blue-200: #bae5fd;\n  --light-blue-300: #7ed4fc;\n  --light-blue-400: #3abff8;\n  --light-blue-500: #0da2e7;\n  --light-blue-600: #0284c5;\n  --light-blue-700: #0369a0;\n  --light-blue-800: #075783;\n  --light-blue-900: #0c4a6e;\n  --lime-50: #f7fee7;\n  --lime-100: #ebfcca;\n  --lime-200: #d9f99f;\n  --lime-300: #bef263;\n  --lime-400: #a1e633;\n  --lime-500: #82cb15;\n  --lime-600: #66a50d;\n  --lime-700: #4c7b0f;\n  --lime-800: #406312;\n  --lime-900: #355214;\n  --metal-50: #f9fafb;\n  --metal-100: #f3f4f6;\n  --metal-200: #e5e7eb;\n  --metal-300: #d1d5db;\n  --metal-400: #9ca3b0;\n  --metal-500: #6b7280;\n  --metal-600: #4b5563;\n  --metal-700: #384252;\n  --metal-800: #1f2937;\n  --metal-900: #111827;\n  --orange-50: #fff6eb;\n  --orange-200: #fed6a9;\n  --orange-400: #fb923c;\n  --pink-50: #fdf2f8;\n  --pink-100: #fce8f4;\n  --pink-200: #fbd0e8;\n  --pink-300: #f9a9d5;\n  --pink-400: #f471b5;\n  --pink-500: #ec4699;\n  --pink-600: #db2979;\n  --pink-700: #bf185d;\n  --pink-800: #9b174c;\n  --pink-900: #811842;\n  --rose-50: #fff0f1;\n  --rose-100: #ffe5e7;\n  --rose-200: #fecdd3;\n  --rose-300: #fda5af;\n  --rose-400: #fb6f84;\n  --rose-500: #f43e5c;\n  --rose-600: #e21d48;\n  --rose-700: #bf123d;\n  --rose-800: #a1123a;\n  --rose-900: #861336;\n  --teal-50: #f2fdfa;\n  --teal-100: #cbfbf0;\n  --teal-200: #98f6e3;\n  --teal-300: #5dead5;\n  --teal-400: #2bd4bd;\n  --teal-500: #14b8a5;\n  --teal-600: #0d968b;\n  --teal-700: #0f756d;\n  --teal-800: #115f5a;\n  --teal-900: #134e4a;\n  --violet-50: #f6f5ff;\n  --violet-100: #ebe7fe;\n  --violet-200: #ded7fe;\n  --violet-300: #c3b4fd;\n  --violet-400: #a689fa;\n  --violet-500: #895af6;\n  --violet-600: #7c3bed;\n  --violet-700: #6b26d9;\n  --violet-800: #5a21b5;\n  --violet-900: #4d1d95;\n}\n\n@media (prefers-color-scheme: dark) {\n  :root {\n    --shadow-xs: 0px 0.5px 0px #525252;\n    --shadow-sm: 0px 1px 1px rgba(18, 18, 18, 0.3019607843);\n    --shadow-m: 0px 2.5px 4px rgba(18, 18, 18, 0.6509803922);\n    --shadow-lg: 0px 3px 5px rgba(18, 18, 18, 0.8);\n    --shadow-xl: 0px 2.5px 8px #121212;\n    --shadow-2xl: 0px 4px 12px #121212;\n    --shadow-flat: 0px 1px 0px #434343;\n    --shadow-in: inset 0px 1px 2px rgba(255, 255, 255, 0.24);\n    --base-00: #141414;\n    --base-50: rgba(255, 255, 255, 0.0509803922);\n    --base-100: rgba(255, 255, 255, 0.1019607843);\n    --base-200: rgba(255, 255, 255, 0.2);\n    --base-300: rgba(255, 255, 255, 0.3019607843);\n    --base-400: rgba(255, 255, 255, 0.4);\n    --base-500: rgba(255, 255, 255, 0.5019607843);\n    --base-600: rgba(255, 255, 255, 0.6);\n    --base-700: rgba(255, 255, 255, 0.7019607843);\n    --base-800: rgba(255, 255, 255, 0.8);\n    --base-900: #ffffff;\n    --primary-50: #1d223f;\n    --primary-100: #0a318c;\n    --primary-200: #1347cc;\n    --primary-300: #1055ea;\n    --primary-400: #357aea;\n    --primary-500: #2e88f6;\n    --primary-600: #50a1ff;\n    --primary-700: #7ab7ff;\n    --primary-800: #dcebfe;\n    --primary-900: #f0f6ff;\n    --secondary-50: #35194a;\n    --secondary-100: #4e1d72;\n    --secondary-200: #7e22ce;\n    --secondary-300: #9c40ec;\n    --secondary-400: #ab57ff;\n    --secondary-500: #d07fff;\n    --secondary-600: #e9a0ff;\n    --secondary-700: #ffbcff;\n    --secondary-800: #ffd6ff;\n    --secondary-900: #ffefff;\n    --tertiary-50: #272727;\n    --tertiary-100: #333333;\n    --tertiary-200: #434343;\n    --tertiary-300: #5f5f5f;\n    --tertiary-400: #747474;\n    --tertiary-500: #878787;\n    --tertiary-600: #9b9b9b;\n    --tertiary-700: #b9b9b9;\n    --tertiary-800: #d7d7d7;\n    --tertiary-900: #efefef;\n    --success-50: #0e3619;\n    --success-100: #14522d;\n    --success-200: #166434;\n    --success-300: #119541;\n    --success-400: #21c45d;\n    --success-500: #4ade80;\n    --success-600: #85efac;\n    --success-700: #bbf7d0;\n    --success-800: #defce9;\n    --success-900: #f2fdf5;\n    --warning-50: #5d2323;\n    --warning-100: #781f1f;\n    --warning-200: #ae4040;\n    --warning-300: #dc3d3d;\n    --warning-400: #f64d4d;\n    --warning-500: #ff6262;\n    --warning-600: #ff9393;\n    --warning-700: #ffa7a7;\n    --warning-800: #ffbbbb;\n    --warning-900: #fed0d0;\n    --highlight-50: #413d17;\n    --highlight-100: #864e0e;\n    --highlight-200: #a26107;\n    --highlight-300: #c88a04;\n    --highlight-400: #e7b008;\n    --highlight-500: #facc14;\n    --highlight-600: #fddf49;\n    --highlight-700: #fef08b;\n    --highlight-800: #fefacb;\n    --highlight-900: #fefce6;\n    --blue-gray-50: #0f1729;\n    --blue-gray-100: #1d283a;\n    --blue-gray-200: #344256;\n    --blue-gray-300: #48566a;\n    --blue-gray-400: #65758b;\n    --blue-gray-500: #94a3b8;\n    --blue-gray-600: #cbd5e1;\n    --blue-gray-700: #e1e7ef;\n    --blue-gray-800: #f1f5f9;\n    --blue-gray-900: #f8fafc;\n    --bronze-50: #1c1917;\n    --bronze-100: #292524;\n    --bronze-200: #44403c;\n    --bronze-300: #56524e;\n    --bronze-400: #78726d;\n    --bronze-500: #a8a29f;\n    --bronze-600: #d6d3d1;\n    --bronze-700: #e7e5e4;\n    --bronze-800: #f5f5f4;\n    --bronze-900: #fafaf9;\n    --cyan-50: #164f64;\n    --cyan-100: #155f75;\n    --cyan-200: #0e7490;\n    --cyan-300: #088eaf;\n    --cyan-400: #07b6d5;\n    --cyan-500: #20d3ee;\n    --cyan-600: #20d3ee;\n    --cyan-700: #67e8f9;\n    --cyan-800: #cdfafe;\n    --cyan-900: #ebfeff;\n    --emerald-50: #064c39;\n    --emerald-100: #066046;\n    --emerald-200: #047756;\n    --emerald-300: #059467;\n    --emerald-400: #10b77f;\n    --emerald-500: #36d399;\n    --emerald-600: #6ee7b7;\n    --emerald-700: #a5f3cf;\n    --emerald-800: #d1fae5;\n    --emerald-900: #edfdf5;\n    --fuchsia-50: #701076;\n    --fuchsia-100: #85198f;\n    --fuchsia-200: #a31daf;\n    --fuchsia-300: #bf27d3;\n    --fuchsia-400: #d948ef;\n    --fuchsia-500: #e87bf9;\n    --fuchsia-600: #f0abfc;\n    --fuchsia-700: #f5d2fe;\n    --fuchsia-800: #f9e5ff;\n    --fuchsia-900: #fdf5ff;\n    --indigo-50: #312e7f;\n    --indigo-100: #372fa2;\n    --indigo-200: #463acb;\n    --indigo-300: #5048e5;\n    --indigo-400: #6467f2;\n    --indigo-500: #828df8;\n    --indigo-600: #a6b4fc;\n    --indigo-700: #c8d3fe;\n    --indigo-800: #e0e8ff;\n    --indigo-900: #f0f3ff;\n    --light-blue-50: #0c4a6e;\n    --light-blue-100: #075783;\n    --light-blue-200: #0369a0;\n    --light-blue-300: #0284c5;\n    --light-blue-400: #0da2e7;\n    --light-blue-500: #3abff8;\n    --light-blue-600: #7ed4fc;\n    --light-blue-700: #bae5fd;\n    --light-blue-800: #e1f3fe;\n    --light-blue-900: #f0f9ff;\n    --lime-50: #355214;\n    --lime-100: #406312;\n    --lime-200: #4c7b0f;\n    --lime-300: #66a50d;\n    --lime-400: #82cb15;\n    --lime-500: #a1e633;\n    --lime-600: #bef263;\n    --lime-700: #d9f99f;\n    --lime-800: #ebfcca;\n    --lime-900: #f7fee7;\n    --metal-100: #1f2937;\n    --metal-200: #384252;\n    --metal-300: #4b5563;\n    --metal-400: #6b7280;\n    --metal-500: #9ca3b0;\n    --metal-600: #d1d5db;\n    --metal-700: #e5e7eb;\n    --metal-800: #f3f4f6;\n    --metal-900: #f9fafb;\n    --orange-50: #582817;\n    --orange-100: #9b3412;\n    --orange-200: #af4d2c;\n    --orange-300: #e05f03;\n    --orange-400: #f97415;\n    --orange-500: #fb923c;\n    --orange-600: #fdba72;\n    --orange-700: #fed6a9;\n    --orange-800: #ffedd6;\n    --orange-900: #fff6eb;\n    --pink-50: #811842;\n    --pink-100: #9b174c;\n    --pink-200: #bf185d;\n    --pink-300: #db2979;\n    --pink-400: #ec4699;\n    --pink-500: #f471b5;\n    --pink-600: #f9a9d5;\n    --pink-700: #fbd0e8;\n    --pink-800: #fce8f4;\n    --pink-900: #fdf2f8;\n    --rose-50: #861336;\n    --rose-100: #a1123a;\n    --rose-200: #bf123d;\n    --rose-300: #e21d48;\n    --rose-400: #f43e5c;\n    --rose-500: #fb6f84;\n    --rose-600: #fda5af;\n    --rose-700: #fecdd3;\n    --rose-800: #ffe5e7;\n    --rose-900: #fff0f1;\n    --teal-50: #134e4a;\n    --teal-100: #115f5a;\n    --teal-200: #0f756d;\n    --teal-300: #0f756d;\n    --teal-400: #14b8a4;\n    --teal-500: #2bd4bd;\n    --teal-600: #5dead5;\n    --teal-700: #98f6e3;\n    --teal-800: #cbfbf0;\n    --teal-900: #f2fdfa;\n    --violet-50: #282056;\n    --violet-100: #4d1d95;\n    --violet-200: #533dab;\n    --violet-300: #7c3bed;\n    --violet-400: #895af6;\n    --violet-500: #a689fa;\n    --violet-600: #c3b4fd;\n    --violet-700: #ded7fe;\n    --violet-800: #ebe7fe;\n    --violet-900: #f6f5ff;\n  }\n}\n* {\n  box-sizing: border-box;\n  outline: none;\n  padding: 0;\n  margin: 0;\n}\n\n@media (prefers-color-scheme: dark) {\n  html {\n    color-scheme: dark;\n  }\n}\n.ds__Checkbox {\n  border: none;\n  display: flex;\n  position: relative;\n  width: max-content;\n  height: max-content;\n  align-items: center;\n  box-sizing: border-box;\n  border-radius: var(--round-m);\n  background: transparent;\n  padding: var(--padding-m) var(--padding-l);\n  gap: 10px;\n}\n.ds__Checkbox[data-type=fill] {\n  background: var(--tertiary-50);\n  border: 1px solid var(--tertiary-200);\n}\n.ds__Checkbox[data-type=line] {\n  border-radius: 0;\n  border-bottom: 2px solid #2463eb;\n}\n.ds__Checkbox[data-align=left] {\n  flex-direction: row-reverse;\n}\n.ds__Checkbox .ds__Checkbox__label {\n  font-family: \"Inter\", sans-serif;\n  margin: 0;\n  font-style: normal;\n  letter-spacing: 0%;\n  text-align: left;\n  font-weight: 600;\n  text-transform: none;\n  text-decoration: none;\n  font-size: 16px;\n  line-height: 24px;\n  color: var(--base-900);\n}\n.ds__Checkbox .ds__Checkbox__input {\n  width: 18px;\n  height: 18px;\n  accent-color: #2463eb;\n}\n.ds__Checkbox .ds__Checkbox__input:disabled + .ds__Checkbox__label {\n  color: var(--tertiary-500);\n}\n.ds__Checkbox[data-size=small] {\n  gap: 8px;\n  padding: var(--padding-s) var(--padding-m);\n}\n.ds__Checkbox[data-size=small] .ds__Checkbox__label {\n  font-family: \"Inter\", sans-serif;\n  margin: 0;\n  font-style: normal;\n  letter-spacing: 0%;\n  text-align: left;\n  font-weight: 500;\n  text-transform: none;\n  text-decoration: none;\n  font-size: 14px;\n  line-height: 20px;\n}\n.ds__Checkbox[data-size=small] .ds__Checkbox__input {\n  width: 16px;\n  height: 16px;\n}\n.ds__Checkbox[data-size=large] {\n  gap: 14px;\n  padding: var(--padding-m) var(--padding-xl);\n}\n.ds__Checkbox[data-size=large] .ds__Checkbox__label {\n  font-family: \"Inter\", sans-serif;\n  margin: 0;\n  font-style: normal;\n  letter-spacing: 0%;\n  text-align: left;\n  font-weight: 600;\n  text-transform: none;\n  text-decoration: none;\n  font-size: 18px;\n  line-height: 30px;\n}\n.ds__Checkbox[data-size=large] .ds__Checkbox__input {\n  width: 20px;\n  height: 20px;\n}";
styleInject(css_248z$9);

// Generated with util/createComponent.js
var Checkbox = function (props, ref) {
    var label = props.label, name = props.name, title = props.title, value = props.value, disabled = props.disabled, onChange = props.onChange, _a = props.type, type = _a === void 0 ? "empty" : _a, _b = props.size, size = _b === void 0 ? "default" : _b, _c = props.labelAlign, labelAlign = _c === void 0 ? "right" : _c;
    return (React.createElement("div", { "data-type": type, "data-size": size, "data-testid": "Checkbox", "data-align": labelAlign, className: "ds__Checkbox" },
        React.createElement("input", { id: name, name: "name", title: title, value: value, type: "checkbox", onChange: onChange, disabled: disabled, className: "ds__Checkbox__input", ref: ref }),
        label && (React.createElement("label", { htmlFor: name, className: "ds__Checkbox__label" }, label))));
};
var Checkbox$1 = React.forwardRef(Checkbox);

var css_248z$8 = "@import url(\"https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap\");\n:root {\n  --round-xs: 2px;\n  --round-s: 4px;\n  --round-m: 8px;\n  --round-l: 12px;\n  --round-xl: 16px;\n  --round-xxl: 20px;\n  --padding-xxs: 2px;\n  --padding-xs: 4px;\n  --padding-s: 8px;\n  --padding-m: 12px;\n  --padding-l: 16px;\n  --padding-xl: 20px;\n  --padding-xxl: 24px;\n  --shadow-xs: 0px 1px 2px 0px rgba(0, 0, 0, 0.0509803922);\n  --shadow-sm: 0px 1px 3px 0px rgba(0, 0, 0, 0.0784313725);\n  --shadow-m: 0px 1.5px 4px -1px rgba(0, 0, 0, 0.1215686275);\n  --shadow-lg: 0px 4px 6px -2px rgba(0, 0, 0, 0.1019607843), 0px 10px 15px -3px rgba(0, 0, 0, 0.0509803922);\n  --shadow-xl: 0px 10px 10px -5px rgba(0, 0, 0, 0.1019607843), 0px 20px 25px -5px rgba(0, 0, 0, 0.0392156863);\n  --shadow-2xl: 0px 25px 50px -12px rgba(0, 0, 0, 0.2509803922);\n  --shadow-flat: 0px 1px 0px #e4e4e7;\n  --shadow-in: inset 0px 2px 4px #525252;\n  --base-00: #ffffff;\n  --base-50: rgba(26, 26, 26, 0.0509803922);\n  --base-100: rgba(26, 26, 26, 0.1019607843);\n  --base-200: rgba(26, 26, 26, 0.2);\n  --base-300: rgba(26, 26, 26, 0.3019607843);\n  --base-400: rgba(26, 26, 26, 0.4);\n  --base-500: rgba(26, 26, 26, 0.5019607843);\n  --base-600: rgba(26, 26, 26, 0.6);\n  --base-700: rgba(26, 26, 26, 0.7019607843);\n  --base-800: rgba(26, 26, 26, 0.8);\n  --base-900: #1a1a1a;\n  --primary-50: #f2f7ff;\n  --primary-100: #dcebfe;\n  --primary-200: #bedbfe;\n  --primary-300: #91c3fd;\n  --primary-400: #61a6fa;\n  --primary-500: #3479e9;\n  --primary-600: #2463eb;\n  --primary-700: #1d4fd7;\n  --primary-800: #1e3fae;\n  --primary-900: #1e3b8a;\n  --secondary-50: #faf5ff;\n  --secondary-100: #f2e5ff;\n  --secondary-200: #ead6ff;\n  --secondary-300: #d8b4fe;\n  --secondary-400: #bf83fc;\n  --secondary-500: #a855f7;\n  --secondary-600: #9234ea;\n  --secondary-700: #7e22ce;\n  --secondary-800: #6a21a6;\n  --secondary-900: #591c87;\n  --tertiary-50: #fdfdfd;\n  --tertiary-100: #f4f4f5;\n  --tertiary-200: #e4e4e7;\n  --tertiary-300: #d4d4d8;\n  --tertiary-400: #a1a1aa;\n  --tertiary-500: #71717a;\n  --tertiary-600: #52525b;\n  --tertiary-700: #3f3f46;\n  --tertiary-800: #27272a;\n  --tertiary-900: #18181b;\n  --success-50: #f2fdf5;\n  --success-100: #defce9;\n  --success-200: #bbf7d0;\n  --success-300: #85efac;\n  --success-400: #4ade80;\n  --success-500: #1ac057;\n  --success-600: #16a249;\n  --success-700: #157f3c;\n  --success-800: #1c713c;\n  --success-900: #114c29;\n  --warning-50: #fef1f1;\n  --warning-100: #fee1e1;\n  --warning-200: #fec8c8;\n  --warning-300: #fca6a6;\n  --warning-400: #fd6b6b;\n  --warning-500: #ef4343;\n  --warning-600: #dc2828;\n  --warning-700: #ba1c1c;\n  --warning-800: #981b1b;\n  --warning-900: #811d1d;\n  --highlight-50: #fefce7;\n  --highlight-100: #fef9c3;\n  --highlight-200: #fef08b;\n  --highlight-300: #fddf49;\n  --highlight-400: #facc14;\n  --highlight-500: #e7b008;\n  --highlight-600: #c88a04;\n  --highlight-700: #a26107;\n  --highlight-800: #864e0e;\n  --highlight-900: #733f12;\n  --blue-gray-50: #f8fafc;\n  --blue-gray-100: #f1f5f9;\n  --blue-gray-200: #e1e7ef;\n  --blue-gray-300: #cbd5e1;\n  --blue-gray-400: #94a3b8;\n  --blue-gray-500: #65758b;\n  --blue-gray-600: #48566a;\n  --blue-gray-700: #344256;\n  --blue-gray-800: #1d283a;\n  --blue-gray-900: #0f1729;\n  --bronze-50: #fafaf9;\n  --bronze-100: #f5f5f4;\n  --bronze-200: #e7e5e4;\n  --bronze-300: #d6d3d1;\n  --bronze-400: #a8a29f;\n  --bronze-500: #78726d;\n  --bronze-600: #56524e;\n  --bronze-700: #44403c;\n  --bronze-800: #292524;\n  --bronze-900: #1c1917;\n  --cyan-50: #ebfeff;\n  --cyan-100: #cdfafe;\n  --cyan-200: #a6f3fc;\n  --cyan-300: #67e8f9;\n  --cyan-400: #20d3ee;\n  --cyan-500: #07b6d5;\n  --cyan-600: #088eaf;\n  --cyan-700: #0e7490;\n  --cyan-800: #155f75;\n  --cyan-900: #164f64;\n  --emerald-50: #edfdf5;\n  --emerald-100: #d1fae5;\n  --emerald-200: #a5f3cf;\n  --emerald-300: #6ee7b7;\n  --emerald-400: #36d399;\n  --emerald-500: #10b77f;\n  --emerald-600: #059467;\n  --emerald-700: #047656;\n  --emerald-800: #066046;\n  --emerald-900: #064b39;\n  --fuchsia-50: #fdf5ff;\n  --fuchsia-100: #f9e5ff;\n  --fuchsia-200: #f5d2fe;\n  --fuchsia-300: #f0abfc;\n  --fuchsia-400: #e87bf9;\n  --fuchsia-500: #d948ef;\n  --fuchsia-600: #bf27d3;\n  --fuchsia-700: #a31daf;\n  --fuchsia-800: #85198f;\n  --fuchsia-900: #711a75;\n  --indigo-50: #f0f3ff;\n  --indigo-100: #e0e8ff;\n  --indigo-200: #c8d3fe;\n  --indigo-300: #a6b4fc;\n  --indigo-400: #828df8;\n  --indigo-500: #6467f2;\n  --indigo-600: #5048e5;\n  --indigo-700: #463acb;\n  --indigo-800: #372fa2;\n  --indigo-900: #312e7f;\n  --light-blue-50: #f0f9ff;\n  --light-blue-100: #e1f3fe;\n  --light-blue-200: #bae5fd;\n  --light-blue-300: #7ed4fc;\n  --light-blue-400: #3abff8;\n  --light-blue-500: #0da2e7;\n  --light-blue-600: #0284c5;\n  --light-blue-700: #0369a0;\n  --light-blue-800: #075783;\n  --light-blue-900: #0c4a6e;\n  --lime-50: #f7fee7;\n  --lime-100: #ebfcca;\n  --lime-200: #d9f99f;\n  --lime-300: #bef263;\n  --lime-400: #a1e633;\n  --lime-500: #82cb15;\n  --lime-600: #66a50d;\n  --lime-700: #4c7b0f;\n  --lime-800: #406312;\n  --lime-900: #355214;\n  --metal-50: #f9fafb;\n  --metal-100: #f3f4f6;\n  --metal-200: #e5e7eb;\n  --metal-300: #d1d5db;\n  --metal-400: #9ca3b0;\n  --metal-500: #6b7280;\n  --metal-600: #4b5563;\n  --metal-700: #384252;\n  --metal-800: #1f2937;\n  --metal-900: #111827;\n  --orange-50: #fff6eb;\n  --orange-200: #fed6a9;\n  --orange-400: #fb923c;\n  --pink-50: #fdf2f8;\n  --pink-100: #fce8f4;\n  --pink-200: #fbd0e8;\n  --pink-300: #f9a9d5;\n  --pink-400: #f471b5;\n  --pink-500: #ec4699;\n  --pink-600: #db2979;\n  --pink-700: #bf185d;\n  --pink-800: #9b174c;\n  --pink-900: #811842;\n  --rose-50: #fff0f1;\n  --rose-100: #ffe5e7;\n  --rose-200: #fecdd3;\n  --rose-300: #fda5af;\n  --rose-400: #fb6f84;\n  --rose-500: #f43e5c;\n  --rose-600: #e21d48;\n  --rose-700: #bf123d;\n  --rose-800: #a1123a;\n  --rose-900: #861336;\n  --teal-50: #f2fdfa;\n  --teal-100: #cbfbf0;\n  --teal-200: #98f6e3;\n  --teal-300: #5dead5;\n  --teal-400: #2bd4bd;\n  --teal-500: #14b8a5;\n  --teal-600: #0d968b;\n  --teal-700: #0f756d;\n  --teal-800: #115f5a;\n  --teal-900: #134e4a;\n  --violet-50: #f6f5ff;\n  --violet-100: #ebe7fe;\n  --violet-200: #ded7fe;\n  --violet-300: #c3b4fd;\n  --violet-400: #a689fa;\n  --violet-500: #895af6;\n  --violet-600: #7c3bed;\n  --violet-700: #6b26d9;\n  --violet-800: #5a21b5;\n  --violet-900: #4d1d95;\n}\n\n@media (prefers-color-scheme: dark) {\n  :root {\n    --shadow-xs: 0px 0.5px 0px #525252;\n    --shadow-sm: 0px 1px 1px rgba(18, 18, 18, 0.3019607843);\n    --shadow-m: 0px 2.5px 4px rgba(18, 18, 18, 0.6509803922);\n    --shadow-lg: 0px 3px 5px rgba(18, 18, 18, 0.8);\n    --shadow-xl: 0px 2.5px 8px #121212;\n    --shadow-2xl: 0px 4px 12px #121212;\n    --shadow-flat: 0px 1px 0px #434343;\n    --shadow-in: inset 0px 1px 2px rgba(255, 255, 255, 0.24);\n    --base-00: #141414;\n    --base-50: rgba(255, 255, 255, 0.0509803922);\n    --base-100: rgba(255, 255, 255, 0.1019607843);\n    --base-200: rgba(255, 255, 255, 0.2);\n    --base-300: rgba(255, 255, 255, 0.3019607843);\n    --base-400: rgba(255, 255, 255, 0.4);\n    --base-500: rgba(255, 255, 255, 0.5019607843);\n    --base-600: rgba(255, 255, 255, 0.6);\n    --base-700: rgba(255, 255, 255, 0.7019607843);\n    --base-800: rgba(255, 255, 255, 0.8);\n    --base-900: #ffffff;\n    --primary-50: #1d223f;\n    --primary-100: #0a318c;\n    --primary-200: #1347cc;\n    --primary-300: #1055ea;\n    --primary-400: #357aea;\n    --primary-500: #2e88f6;\n    --primary-600: #50a1ff;\n    --primary-700: #7ab7ff;\n    --primary-800: #dcebfe;\n    --primary-900: #f0f6ff;\n    --secondary-50: #35194a;\n    --secondary-100: #4e1d72;\n    --secondary-200: #7e22ce;\n    --secondary-300: #9c40ec;\n    --secondary-400: #ab57ff;\n    --secondary-500: #d07fff;\n    --secondary-600: #e9a0ff;\n    --secondary-700: #ffbcff;\n    --secondary-800: #ffd6ff;\n    --secondary-900: #ffefff;\n    --tertiary-50: #272727;\n    --tertiary-100: #333333;\n    --tertiary-200: #434343;\n    --tertiary-300: #5f5f5f;\n    --tertiary-400: #747474;\n    --tertiary-500: #878787;\n    --tertiary-600: #9b9b9b;\n    --tertiary-700: #b9b9b9;\n    --tertiary-800: #d7d7d7;\n    --tertiary-900: #efefef;\n    --success-50: #0e3619;\n    --success-100: #14522d;\n    --success-200: #166434;\n    --success-300: #119541;\n    --success-400: #21c45d;\n    --success-500: #4ade80;\n    --success-600: #85efac;\n    --success-700: #bbf7d0;\n    --success-800: #defce9;\n    --success-900: #f2fdf5;\n    --warning-50: #5d2323;\n    --warning-100: #781f1f;\n    --warning-200: #ae4040;\n    --warning-300: #dc3d3d;\n    --warning-400: #f64d4d;\n    --warning-500: #ff6262;\n    --warning-600: #ff9393;\n    --warning-700: #ffa7a7;\n    --warning-800: #ffbbbb;\n    --warning-900: #fed0d0;\n    --highlight-50: #413d17;\n    --highlight-100: #864e0e;\n    --highlight-200: #a26107;\n    --highlight-300: #c88a04;\n    --highlight-400: #e7b008;\n    --highlight-500: #facc14;\n    --highlight-600: #fddf49;\n    --highlight-700: #fef08b;\n    --highlight-800: #fefacb;\n    --highlight-900: #fefce6;\n    --blue-gray-50: #0f1729;\n    --blue-gray-100: #1d283a;\n    --blue-gray-200: #344256;\n    --blue-gray-300: #48566a;\n    --blue-gray-400: #65758b;\n    --blue-gray-500: #94a3b8;\n    --blue-gray-600: #cbd5e1;\n    --blue-gray-700: #e1e7ef;\n    --blue-gray-800: #f1f5f9;\n    --blue-gray-900: #f8fafc;\n    --bronze-50: #1c1917;\n    --bronze-100: #292524;\n    --bronze-200: #44403c;\n    --bronze-300: #56524e;\n    --bronze-400: #78726d;\n    --bronze-500: #a8a29f;\n    --bronze-600: #d6d3d1;\n    --bronze-700: #e7e5e4;\n    --bronze-800: #f5f5f4;\n    --bronze-900: #fafaf9;\n    --cyan-50: #164f64;\n    --cyan-100: #155f75;\n    --cyan-200: #0e7490;\n    --cyan-300: #088eaf;\n    --cyan-400: #07b6d5;\n    --cyan-500: #20d3ee;\n    --cyan-600: #20d3ee;\n    --cyan-700: #67e8f9;\n    --cyan-800: #cdfafe;\n    --cyan-900: #ebfeff;\n    --emerald-50: #064c39;\n    --emerald-100: #066046;\n    --emerald-200: #047756;\n    --emerald-300: #059467;\n    --emerald-400: #10b77f;\n    --emerald-500: #36d399;\n    --emerald-600: #6ee7b7;\n    --emerald-700: #a5f3cf;\n    --emerald-800: #d1fae5;\n    --emerald-900: #edfdf5;\n    --fuchsia-50: #701076;\n    --fuchsia-100: #85198f;\n    --fuchsia-200: #a31daf;\n    --fuchsia-300: #bf27d3;\n    --fuchsia-400: #d948ef;\n    --fuchsia-500: #e87bf9;\n    --fuchsia-600: #f0abfc;\n    --fuchsia-700: #f5d2fe;\n    --fuchsia-800: #f9e5ff;\n    --fuchsia-900: #fdf5ff;\n    --indigo-50: #312e7f;\n    --indigo-100: #372fa2;\n    --indigo-200: #463acb;\n    --indigo-300: #5048e5;\n    --indigo-400: #6467f2;\n    --indigo-500: #828df8;\n    --indigo-600: #a6b4fc;\n    --indigo-700: #c8d3fe;\n    --indigo-800: #e0e8ff;\n    --indigo-900: #f0f3ff;\n    --light-blue-50: #0c4a6e;\n    --light-blue-100: #075783;\n    --light-blue-200: #0369a0;\n    --light-blue-300: #0284c5;\n    --light-blue-400: #0da2e7;\n    --light-blue-500: #3abff8;\n    --light-blue-600: #7ed4fc;\n    --light-blue-700: #bae5fd;\n    --light-blue-800: #e1f3fe;\n    --light-blue-900: #f0f9ff;\n    --lime-50: #355214;\n    --lime-100: #406312;\n    --lime-200: #4c7b0f;\n    --lime-300: #66a50d;\n    --lime-400: #82cb15;\n    --lime-500: #a1e633;\n    --lime-600: #bef263;\n    --lime-700: #d9f99f;\n    --lime-800: #ebfcca;\n    --lime-900: #f7fee7;\n    --metal-100: #1f2937;\n    --metal-200: #384252;\n    --metal-300: #4b5563;\n    --metal-400: #6b7280;\n    --metal-500: #9ca3b0;\n    --metal-600: #d1d5db;\n    --metal-700: #e5e7eb;\n    --metal-800: #f3f4f6;\n    --metal-900: #f9fafb;\n    --orange-50: #582817;\n    --orange-100: #9b3412;\n    --orange-200: #af4d2c;\n    --orange-300: #e05f03;\n    --orange-400: #f97415;\n    --orange-500: #fb923c;\n    --orange-600: #fdba72;\n    --orange-700: #fed6a9;\n    --orange-800: #ffedd6;\n    --orange-900: #fff6eb;\n    --pink-50: #811842;\n    --pink-100: #9b174c;\n    --pink-200: #bf185d;\n    --pink-300: #db2979;\n    --pink-400: #ec4699;\n    --pink-500: #f471b5;\n    --pink-600: #f9a9d5;\n    --pink-700: #fbd0e8;\n    --pink-800: #fce8f4;\n    --pink-900: #fdf2f8;\n    --rose-50: #861336;\n    --rose-100: #a1123a;\n    --rose-200: #bf123d;\n    --rose-300: #e21d48;\n    --rose-400: #f43e5c;\n    --rose-500: #fb6f84;\n    --rose-600: #fda5af;\n    --rose-700: #fecdd3;\n    --rose-800: #ffe5e7;\n    --rose-900: #fff0f1;\n    --teal-50: #134e4a;\n    --teal-100: #115f5a;\n    --teal-200: #0f756d;\n    --teal-300: #0f756d;\n    --teal-400: #14b8a4;\n    --teal-500: #2bd4bd;\n    --teal-600: #5dead5;\n    --teal-700: #98f6e3;\n    --teal-800: #cbfbf0;\n    --teal-900: #f2fdfa;\n    --violet-50: #282056;\n    --violet-100: #4d1d95;\n    --violet-200: #533dab;\n    --violet-300: #7c3bed;\n    --violet-400: #895af6;\n    --violet-500: #a689fa;\n    --violet-600: #c3b4fd;\n    --violet-700: #ded7fe;\n    --violet-800: #ebe7fe;\n    --violet-900: #f6f5ff;\n  }\n}\n* {\n  box-sizing: border-box;\n  outline: none;\n  padding: 0;\n  margin: 0;\n}\n\n@media (prefers-color-scheme: dark) {\n  html {\n    color-scheme: dark;\n  }\n}\n.ds__ToggleSwitch {\n  width: max-content;\n  height: max-content;\n  align-items: center;\n  box-sizing: border-box;\n  background: transparent;\n  position: relative;\n  cursor: pointer;\n  display: flex;\n  border: none;\n  gap: 10px;\n}\n.ds__ToggleSwitch[data-align=left] {\n  flex-direction: row-reverse;\n}\n.ds__ToggleSwitch .ds__ToggleSwitch__label {\n  font-family: \"Inter\", sans-serif;\n  margin: 0;\n  font-style: normal;\n  letter-spacing: 0%;\n  text-align: left;\n  font-weight: 600;\n  text-transform: none;\n  text-decoration: none;\n  font-size: 16px;\n  line-height: 24px;\n  color: var(--base-900);\n}\n.ds__ToggleSwitch .ds__ToggleSwitch__input {\n  display: inline-block;\n  position: relative;\n  height: 24px;\n  width: 48px;\n}\n.ds__ToggleSwitch .ds__ToggleSwitch__input .ds__ToggleSwitch__slider {\n  position: absolute;\n  cursor: pointer;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  border-radius: 34px;\n  background-color: var(--tertiary-200);\n  -webkit-transition: 0.4s;\n  transition: 0.4s;\n}\n.ds__ToggleSwitch .ds__ToggleSwitch__input .ds__ToggleSwitch__slider::before {\n  position: absolute;\n  content: \"\";\n  left: 2px;\n  top: 2px;\n  width: 20px;\n  height: 20px;\n  border-radius: 50%;\n  background-color: white;\n  -webkit-transition: 0.4s;\n  transition: 0.4s;\n  box-shadow: 0px 1.5px 4px -1px rgba(0, 0, 0, 0.1215686275);\n}\n.ds__ToggleSwitch .ds__ToggleSwitch__input input {\n  opacity: 0;\n  width: 0;\n  height: 0;\n}\n.ds__ToggleSwitch .ds__ToggleSwitch__input input:checked + .ds__ToggleSwitch__slider {\n  background-color: #2463eb;\n}\n.ds__ToggleSwitch .ds__ToggleSwitch__input input:checked + .ds__ToggleSwitch__slider::before {\n  -webkit-transform: translateX(24px);\n  -ms-transform: translateX(24px);\n  transform: translateX(24px);\n}\n.ds__ToggleSwitch .ds__ToggleSwitch__input input:focus + .ds__ToggleSwitch__slider {\n  box-shadow: 0 0 1px #2463eb;\n}\n.ds__ToggleSwitch .ds__ToggleSwitch__input input:disabled + .ds__ToggleSwitch__slider {\n  background-color: var(--tertiary-200);\n}\n.ds__ToggleSwitch .ds__ToggleSwitch__input input:disabled + .ds__ToggleSwitch__slider::before {\n  background-color: var(--tertiary-500);\n}\n.ds__ToggleSwitch[data-size=small] {\n  gap: 8px;\n}\n.ds__ToggleSwitch[data-size=small] .ds__ToggleSwitch__label {\n  font-family: \"Inter\", sans-serif;\n  margin: 0;\n  font-style: normal;\n  letter-spacing: 0%;\n  text-align: left;\n  font-weight: 500;\n  text-transform: none;\n  text-decoration: none;\n  font-size: 14px;\n  line-height: 20px;\n}\n.ds__ToggleSwitch[data-size=small] .ds__ToggleSwitch__input {\n  width: 40px;\n  height: 18px;\n}\n.ds__ToggleSwitch[data-size=small] .ds__ToggleSwitch__input .ds__ToggleSwitch__slider::before {\n  border-radius: 17px;\n  height: 12px;\n  width: 18px;\n  top: 3px;\n  left: 3px;\n}\n.ds__ToggleSwitch[data-size=small] .ds__ToggleSwitch__input input:checked + .ds__ToggleSwitch__slider::before {\n  -webkit-transform: translateX(16px);\n  -ms-transform: translateX(16px);\n  transform: translateX(16px);\n}\n.ds__ToggleSwitch[data-size=large] {\n  gap: 14px;\n}\n.ds__ToggleSwitch[data-size=large] .ds__ToggleSwitch__label {\n  font-family: \"Inter\", sans-serif;\n  margin: 0;\n  font-style: normal;\n  letter-spacing: 0%;\n  text-align: left;\n  font-weight: 600;\n  text-transform: none;\n  text-decoration: none;\n  font-size: 18px;\n  line-height: 30px;\n}\n.ds__ToggleSwitch[data-size=large] .ds__ToggleSwitch__input {\n  width: 56px;\n  height: 32px;\n}\n.ds__ToggleSwitch[data-size=large] .ds__ToggleSwitch__input .ds__ToggleSwitch__slider::before {\n  height: 24px;\n  width: 24px;\n  left: 4px;\n  top: 4px;\n}\n.ds__ToggleSwitch[data-size=large] .ds__ToggleSwitch__input input:checked + .ds__ToggleSwitch__slider::before {\n  -webkit-transform: translateX(24px);\n  -ms-transform: translateX(24px);\n  transform: translateX(24px);\n}";
styleInject(css_248z$8);

// Generated with util/createComponent.js
var ToggleSwitch = function (props, ref) {
    var label = props.label, name = props.name, title = props.title, value = props.value, checked = props.checked, disabled = props.disabled, onChange = props.onChange, _a = props.size, size = _a === void 0 ? "default" : _a, _b = props.labelAlign, labelAlign = _b === void 0 ? "right" : _b;
    return (React.createElement("div", { "data-size": size, "data-align": labelAlign, "data-testid": "ToggleSwitch", className: "ds__ToggleSwitch", ref: ref },
        React.createElement("label", { htmlFor: name, className: "ds__ToggleSwitch__input" },
            React.createElement("input", { id: name, name: "name", title: title, value: value, type: "checkbox", checked: checked, onChange: onChange, disabled: disabled }),
            React.createElement("span", { className: "ds__ToggleSwitch__slider" })),
        label && (React.createElement("label", { htmlFor: name, className: "ds__ToggleSwitch__label" }, label))));
};
var ToggleSwitch$1 = React.forwardRef(ToggleSwitch);

var css_248z$7 = "@import url(\"https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap\");\n:root {\n  --round-xs: 2px;\n  --round-s: 4px;\n  --round-m: 8px;\n  --round-l: 12px;\n  --round-xl: 16px;\n  --round-xxl: 20px;\n  --padding-xxs: 2px;\n  --padding-xs: 4px;\n  --padding-s: 8px;\n  --padding-m: 12px;\n  --padding-l: 16px;\n  --padding-xl: 20px;\n  --padding-xxl: 24px;\n  --shadow-xs: 0px 1px 2px 0px rgba(0, 0, 0, 0.0509803922);\n  --shadow-sm: 0px 1px 3px 0px rgba(0, 0, 0, 0.0784313725);\n  --shadow-m: 0px 1.5px 4px -1px rgba(0, 0, 0, 0.1215686275);\n  --shadow-lg: 0px 4px 6px -2px rgba(0, 0, 0, 0.1019607843), 0px 10px 15px -3px rgba(0, 0, 0, 0.0509803922);\n  --shadow-xl: 0px 10px 10px -5px rgba(0, 0, 0, 0.1019607843), 0px 20px 25px -5px rgba(0, 0, 0, 0.0392156863);\n  --shadow-2xl: 0px 25px 50px -12px rgba(0, 0, 0, 0.2509803922);\n  --shadow-flat: 0px 1px 0px #e4e4e7;\n  --shadow-in: inset 0px 2px 4px #525252;\n  --base-00: #ffffff;\n  --base-50: rgba(26, 26, 26, 0.0509803922);\n  --base-100: rgba(26, 26, 26, 0.1019607843);\n  --base-200: rgba(26, 26, 26, 0.2);\n  --base-300: rgba(26, 26, 26, 0.3019607843);\n  --base-400: rgba(26, 26, 26, 0.4);\n  --base-500: rgba(26, 26, 26, 0.5019607843);\n  --base-600: rgba(26, 26, 26, 0.6);\n  --base-700: rgba(26, 26, 26, 0.7019607843);\n  --base-800: rgba(26, 26, 26, 0.8);\n  --base-900: #1a1a1a;\n  --primary-50: #f2f7ff;\n  --primary-100: #dcebfe;\n  --primary-200: #bedbfe;\n  --primary-300: #91c3fd;\n  --primary-400: #61a6fa;\n  --primary-500: #3479e9;\n  --primary-600: #2463eb;\n  --primary-700: #1d4fd7;\n  --primary-800: #1e3fae;\n  --primary-900: #1e3b8a;\n  --secondary-50: #faf5ff;\n  --secondary-100: #f2e5ff;\n  --secondary-200: #ead6ff;\n  --secondary-300: #d8b4fe;\n  --secondary-400: #bf83fc;\n  --secondary-500: #a855f7;\n  --secondary-600: #9234ea;\n  --secondary-700: #7e22ce;\n  --secondary-800: #6a21a6;\n  --secondary-900: #591c87;\n  --tertiary-50: #fdfdfd;\n  --tertiary-100: #f4f4f5;\n  --tertiary-200: #e4e4e7;\n  --tertiary-300: #d4d4d8;\n  --tertiary-400: #a1a1aa;\n  --tertiary-500: #71717a;\n  --tertiary-600: #52525b;\n  --tertiary-700: #3f3f46;\n  --tertiary-800: #27272a;\n  --tertiary-900: #18181b;\n  --success-50: #f2fdf5;\n  --success-100: #defce9;\n  --success-200: #bbf7d0;\n  --success-300: #85efac;\n  --success-400: #4ade80;\n  --success-500: #1ac057;\n  --success-600: #16a249;\n  --success-700: #157f3c;\n  --success-800: #1c713c;\n  --success-900: #114c29;\n  --warning-50: #fef1f1;\n  --warning-100: #fee1e1;\n  --warning-200: #fec8c8;\n  --warning-300: #fca6a6;\n  --warning-400: #fd6b6b;\n  --warning-500: #ef4343;\n  --warning-600: #dc2828;\n  --warning-700: #ba1c1c;\n  --warning-800: #981b1b;\n  --warning-900: #811d1d;\n  --highlight-50: #fefce7;\n  --highlight-100: #fef9c3;\n  --highlight-200: #fef08b;\n  --highlight-300: #fddf49;\n  --highlight-400: #facc14;\n  --highlight-500: #e7b008;\n  --highlight-600: #c88a04;\n  --highlight-700: #a26107;\n  --highlight-800: #864e0e;\n  --highlight-900: #733f12;\n  --blue-gray-50: #f8fafc;\n  --blue-gray-100: #f1f5f9;\n  --blue-gray-200: #e1e7ef;\n  --blue-gray-300: #cbd5e1;\n  --blue-gray-400: #94a3b8;\n  --blue-gray-500: #65758b;\n  --blue-gray-600: #48566a;\n  --blue-gray-700: #344256;\n  --blue-gray-800: #1d283a;\n  --blue-gray-900: #0f1729;\n  --bronze-50: #fafaf9;\n  --bronze-100: #f5f5f4;\n  --bronze-200: #e7e5e4;\n  --bronze-300: #d6d3d1;\n  --bronze-400: #a8a29f;\n  --bronze-500: #78726d;\n  --bronze-600: #56524e;\n  --bronze-700: #44403c;\n  --bronze-800: #292524;\n  --bronze-900: #1c1917;\n  --cyan-50: #ebfeff;\n  --cyan-100: #cdfafe;\n  --cyan-200: #a6f3fc;\n  --cyan-300: #67e8f9;\n  --cyan-400: #20d3ee;\n  --cyan-500: #07b6d5;\n  --cyan-600: #088eaf;\n  --cyan-700: #0e7490;\n  --cyan-800: #155f75;\n  --cyan-900: #164f64;\n  --emerald-50: #edfdf5;\n  --emerald-100: #d1fae5;\n  --emerald-200: #a5f3cf;\n  --emerald-300: #6ee7b7;\n  --emerald-400: #36d399;\n  --emerald-500: #10b77f;\n  --emerald-600: #059467;\n  --emerald-700: #047656;\n  --emerald-800: #066046;\n  --emerald-900: #064b39;\n  --fuchsia-50: #fdf5ff;\n  --fuchsia-100: #f9e5ff;\n  --fuchsia-200: #f5d2fe;\n  --fuchsia-300: #f0abfc;\n  --fuchsia-400: #e87bf9;\n  --fuchsia-500: #d948ef;\n  --fuchsia-600: #bf27d3;\n  --fuchsia-700: #a31daf;\n  --fuchsia-800: #85198f;\n  --fuchsia-900: #711a75;\n  --indigo-50: #f0f3ff;\n  --indigo-100: #e0e8ff;\n  --indigo-200: #c8d3fe;\n  --indigo-300: #a6b4fc;\n  --indigo-400: #828df8;\n  --indigo-500: #6467f2;\n  --indigo-600: #5048e5;\n  --indigo-700: #463acb;\n  --indigo-800: #372fa2;\n  --indigo-900: #312e7f;\n  --light-blue-50: #f0f9ff;\n  --light-blue-100: #e1f3fe;\n  --light-blue-200: #bae5fd;\n  --light-blue-300: #7ed4fc;\n  --light-blue-400: #3abff8;\n  --light-blue-500: #0da2e7;\n  --light-blue-600: #0284c5;\n  --light-blue-700: #0369a0;\n  --light-blue-800: #075783;\n  --light-blue-900: #0c4a6e;\n  --lime-50: #f7fee7;\n  --lime-100: #ebfcca;\n  --lime-200: #d9f99f;\n  --lime-300: #bef263;\n  --lime-400: #a1e633;\n  --lime-500: #82cb15;\n  --lime-600: #66a50d;\n  --lime-700: #4c7b0f;\n  --lime-800: #406312;\n  --lime-900: #355214;\n  --metal-50: #f9fafb;\n  --metal-100: #f3f4f6;\n  --metal-200: #e5e7eb;\n  --metal-300: #d1d5db;\n  --metal-400: #9ca3b0;\n  --metal-500: #6b7280;\n  --metal-600: #4b5563;\n  --metal-700: #384252;\n  --metal-800: #1f2937;\n  --metal-900: #111827;\n  --orange-50: #fff6eb;\n  --orange-200: #fed6a9;\n  --orange-400: #fb923c;\n  --pink-50: #fdf2f8;\n  --pink-100: #fce8f4;\n  --pink-200: #fbd0e8;\n  --pink-300: #f9a9d5;\n  --pink-400: #f471b5;\n  --pink-500: #ec4699;\n  --pink-600: #db2979;\n  --pink-700: #bf185d;\n  --pink-800: #9b174c;\n  --pink-900: #811842;\n  --rose-50: #fff0f1;\n  --rose-100: #ffe5e7;\n  --rose-200: #fecdd3;\n  --rose-300: #fda5af;\n  --rose-400: #fb6f84;\n  --rose-500: #f43e5c;\n  --rose-600: #e21d48;\n  --rose-700: #bf123d;\n  --rose-800: #a1123a;\n  --rose-900: #861336;\n  --teal-50: #f2fdfa;\n  --teal-100: #cbfbf0;\n  --teal-200: #98f6e3;\n  --teal-300: #5dead5;\n  --teal-400: #2bd4bd;\n  --teal-500: #14b8a5;\n  --teal-600: #0d968b;\n  --teal-700: #0f756d;\n  --teal-800: #115f5a;\n  --teal-900: #134e4a;\n  --violet-50: #f6f5ff;\n  --violet-100: #ebe7fe;\n  --violet-200: #ded7fe;\n  --violet-300: #c3b4fd;\n  --violet-400: #a689fa;\n  --violet-500: #895af6;\n  --violet-600: #7c3bed;\n  --violet-700: #6b26d9;\n  --violet-800: #5a21b5;\n  --violet-900: #4d1d95;\n}\n\n@media (prefers-color-scheme: dark) {\n  :root {\n    --shadow-xs: 0px 0.5px 0px #525252;\n    --shadow-sm: 0px 1px 1px rgba(18, 18, 18, 0.3019607843);\n    --shadow-m: 0px 2.5px 4px rgba(18, 18, 18, 0.6509803922);\n    --shadow-lg: 0px 3px 5px rgba(18, 18, 18, 0.8);\n    --shadow-xl: 0px 2.5px 8px #121212;\n    --shadow-2xl: 0px 4px 12px #121212;\n    --shadow-flat: 0px 1px 0px #434343;\n    --shadow-in: inset 0px 1px 2px rgba(255, 255, 255, 0.24);\n    --base-00: #141414;\n    --base-50: rgba(255, 255, 255, 0.0509803922);\n    --base-100: rgba(255, 255, 255, 0.1019607843);\n    --base-200: rgba(255, 255, 255, 0.2);\n    --base-300: rgba(255, 255, 255, 0.3019607843);\n    --base-400: rgba(255, 255, 255, 0.4);\n    --base-500: rgba(255, 255, 255, 0.5019607843);\n    --base-600: rgba(255, 255, 255, 0.6);\n    --base-700: rgba(255, 255, 255, 0.7019607843);\n    --base-800: rgba(255, 255, 255, 0.8);\n    --base-900: #ffffff;\n    --primary-50: #1d223f;\n    --primary-100: #0a318c;\n    --primary-200: #1347cc;\n    --primary-300: #1055ea;\n    --primary-400: #357aea;\n    --primary-500: #2e88f6;\n    --primary-600: #50a1ff;\n    --primary-700: #7ab7ff;\n    --primary-800: #dcebfe;\n    --primary-900: #f0f6ff;\n    --secondary-50: #35194a;\n    --secondary-100: #4e1d72;\n    --secondary-200: #7e22ce;\n    --secondary-300: #9c40ec;\n    --secondary-400: #ab57ff;\n    --secondary-500: #d07fff;\n    --secondary-600: #e9a0ff;\n    --secondary-700: #ffbcff;\n    --secondary-800: #ffd6ff;\n    --secondary-900: #ffefff;\n    --tertiary-50: #272727;\n    --tertiary-100: #333333;\n    --tertiary-200: #434343;\n    --tertiary-300: #5f5f5f;\n    --tertiary-400: #747474;\n    --tertiary-500: #878787;\n    --tertiary-600: #9b9b9b;\n    --tertiary-700: #b9b9b9;\n    --tertiary-800: #d7d7d7;\n    --tertiary-900: #efefef;\n    --success-50: #0e3619;\n    --success-100: #14522d;\n    --success-200: #166434;\n    --success-300: #119541;\n    --success-400: #21c45d;\n    --success-500: #4ade80;\n    --success-600: #85efac;\n    --success-700: #bbf7d0;\n    --success-800: #defce9;\n    --success-900: #f2fdf5;\n    --warning-50: #5d2323;\n    --warning-100: #781f1f;\n    --warning-200: #ae4040;\n    --warning-300: #dc3d3d;\n    --warning-400: #f64d4d;\n    --warning-500: #ff6262;\n    --warning-600: #ff9393;\n    --warning-700: #ffa7a7;\n    --warning-800: #ffbbbb;\n    --warning-900: #fed0d0;\n    --highlight-50: #413d17;\n    --highlight-100: #864e0e;\n    --highlight-200: #a26107;\n    --highlight-300: #c88a04;\n    --highlight-400: #e7b008;\n    --highlight-500: #facc14;\n    --highlight-600: #fddf49;\n    --highlight-700: #fef08b;\n    --highlight-800: #fefacb;\n    --highlight-900: #fefce6;\n    --blue-gray-50: #0f1729;\n    --blue-gray-100: #1d283a;\n    --blue-gray-200: #344256;\n    --blue-gray-300: #48566a;\n    --blue-gray-400: #65758b;\n    --blue-gray-500: #94a3b8;\n    --blue-gray-600: #cbd5e1;\n    --blue-gray-700: #e1e7ef;\n    --blue-gray-800: #f1f5f9;\n    --blue-gray-900: #f8fafc;\n    --bronze-50: #1c1917;\n    --bronze-100: #292524;\n    --bronze-200: #44403c;\n    --bronze-300: #56524e;\n    --bronze-400: #78726d;\n    --bronze-500: #a8a29f;\n    --bronze-600: #d6d3d1;\n    --bronze-700: #e7e5e4;\n    --bronze-800: #f5f5f4;\n    --bronze-900: #fafaf9;\n    --cyan-50: #164f64;\n    --cyan-100: #155f75;\n    --cyan-200: #0e7490;\n    --cyan-300: #088eaf;\n    --cyan-400: #07b6d5;\n    --cyan-500: #20d3ee;\n    --cyan-600: #20d3ee;\n    --cyan-700: #67e8f9;\n    --cyan-800: #cdfafe;\n    --cyan-900: #ebfeff;\n    --emerald-50: #064c39;\n    --emerald-100: #066046;\n    --emerald-200: #047756;\n    --emerald-300: #059467;\n    --emerald-400: #10b77f;\n    --emerald-500: #36d399;\n    --emerald-600: #6ee7b7;\n    --emerald-700: #a5f3cf;\n    --emerald-800: #d1fae5;\n    --emerald-900: #edfdf5;\n    --fuchsia-50: #701076;\n    --fuchsia-100: #85198f;\n    --fuchsia-200: #a31daf;\n    --fuchsia-300: #bf27d3;\n    --fuchsia-400: #d948ef;\n    --fuchsia-500: #e87bf9;\n    --fuchsia-600: #f0abfc;\n    --fuchsia-700: #f5d2fe;\n    --fuchsia-800: #f9e5ff;\n    --fuchsia-900: #fdf5ff;\n    --indigo-50: #312e7f;\n    --indigo-100: #372fa2;\n    --indigo-200: #463acb;\n    --indigo-300: #5048e5;\n    --indigo-400: #6467f2;\n    --indigo-500: #828df8;\n    --indigo-600: #a6b4fc;\n    --indigo-700: #c8d3fe;\n    --indigo-800: #e0e8ff;\n    --indigo-900: #f0f3ff;\n    --light-blue-50: #0c4a6e;\n    --light-blue-100: #075783;\n    --light-blue-200: #0369a0;\n    --light-blue-300: #0284c5;\n    --light-blue-400: #0da2e7;\n    --light-blue-500: #3abff8;\n    --light-blue-600: #7ed4fc;\n    --light-blue-700: #bae5fd;\n    --light-blue-800: #e1f3fe;\n    --light-blue-900: #f0f9ff;\n    --lime-50: #355214;\n    --lime-100: #406312;\n    --lime-200: #4c7b0f;\n    --lime-300: #66a50d;\n    --lime-400: #82cb15;\n    --lime-500: #a1e633;\n    --lime-600: #bef263;\n    --lime-700: #d9f99f;\n    --lime-800: #ebfcca;\n    --lime-900: #f7fee7;\n    --metal-100: #1f2937;\n    --metal-200: #384252;\n    --metal-300: #4b5563;\n    --metal-400: #6b7280;\n    --metal-500: #9ca3b0;\n    --metal-600: #d1d5db;\n    --metal-700: #e5e7eb;\n    --metal-800: #f3f4f6;\n    --metal-900: #f9fafb;\n    --orange-50: #582817;\n    --orange-100: #9b3412;\n    --orange-200: #af4d2c;\n    --orange-300: #e05f03;\n    --orange-400: #f97415;\n    --orange-500: #fb923c;\n    --orange-600: #fdba72;\n    --orange-700: #fed6a9;\n    --orange-800: #ffedd6;\n    --orange-900: #fff6eb;\n    --pink-50: #811842;\n    --pink-100: #9b174c;\n    --pink-200: #bf185d;\n    --pink-300: #db2979;\n    --pink-400: #ec4699;\n    --pink-500: #f471b5;\n    --pink-600: #f9a9d5;\n    --pink-700: #fbd0e8;\n    --pink-800: #fce8f4;\n    --pink-900: #fdf2f8;\n    --rose-50: #861336;\n    --rose-100: #a1123a;\n    --rose-200: #bf123d;\n    --rose-300: #e21d48;\n    --rose-400: #f43e5c;\n    --rose-500: #fb6f84;\n    --rose-600: #fda5af;\n    --rose-700: #fecdd3;\n    --rose-800: #ffe5e7;\n    --rose-900: #fff0f1;\n    --teal-50: #134e4a;\n    --teal-100: #115f5a;\n    --teal-200: #0f756d;\n    --teal-300: #0f756d;\n    --teal-400: #14b8a4;\n    --teal-500: #2bd4bd;\n    --teal-600: #5dead5;\n    --teal-700: #98f6e3;\n    --teal-800: #cbfbf0;\n    --teal-900: #f2fdfa;\n    --violet-50: #282056;\n    --violet-100: #4d1d95;\n    --violet-200: #533dab;\n    --violet-300: #7c3bed;\n    --violet-400: #895af6;\n    --violet-500: #a689fa;\n    --violet-600: #c3b4fd;\n    --violet-700: #ded7fe;\n    --violet-800: #ebe7fe;\n    --violet-900: #f6f5ff;\n  }\n}\n* {\n  box-sizing: border-box;\n  outline: none;\n  padding: 0;\n  margin: 0;\n}\n\n@media (prefers-color-scheme: dark) {\n  html {\n    color-scheme: dark;\n  }\n}\n.ds__Tooltip {\n  font-family: \"Inter\", sans-serif;\n  margin: 0;\n  font-style: normal;\n  letter-spacing: 0%;\n  text-align: left;\n  font-weight: 400;\n  text-transform: none;\n  text-decoration: none;\n  font-size: 16px;\n  line-height: 24px;\n  width: max-content;\n  position: relative;\n  color: var(--base-900);\n  padding: var(--padding-s) var(--padding-l);\n  border: 1px solid var(--tertiary-300);\n  background-color: var(--tertiary-50);\n  border-radius: var(--round-m);\n}\n.ds__Tooltip[data-direction=top]::before {\n  top: -7.5px;\n  left: 50%;\n  width: 0;\n  height: 0;\n  content: \"\";\n  position: absolute;\n  transform: translateX(-50%);\n  border-left: 7px solid transparent;\n  border-right: 7px solid transparent;\n  border-bottom: 7px solid var(--tertiary-300);\n}\n.ds__Tooltip[data-direction=top]::after {\n  top: -6px;\n  left: 50%;\n  width: 0;\n  height: 0;\n  content: \"\";\n  position: absolute;\n  transform: translateX(-50%);\n  border-left: 7px solid transparent;\n  border-right: 7px solid transparent;\n  border-bottom: 7px solid var(--tertiary-50);\n}\n.ds__Tooltip[data-direction=bottom]::before {\n  bottom: -7.5px;\n  left: 50%;\n  width: 0;\n  height: 0;\n  content: \"\";\n  position: absolute;\n  transform: translateX(-50%);\n  border-left: 7px solid transparent;\n  border-right: 7px solid transparent;\n  border-top: 7px solid var(--tertiary-300);\n}\n.ds__Tooltip[data-direction=bottom]::after {\n  bottom: -6px;\n  left: 50%;\n  width: 0;\n  height: 0;\n  content: \"\";\n  position: absolute;\n  transform: translateX(-50%);\n  border-left: 7px solid transparent;\n  border-right: 7px solid transparent;\n  border-top: 7px solid var(--tertiary-50);\n}\n.ds__Tooltip[data-direction=left]::before {\n  top: 50%;\n  left: -7.5px;\n  width: 0;\n  height: 0;\n  content: \"\";\n  position: absolute;\n  transform: translateY(-50%);\n  border-top: 7px solid transparent;\n  border-bottom: 7px solid transparent;\n  border-right: 7px solid var(--tertiary-300);\n}\n.ds__Tooltip[data-direction=left]::after {\n  top: 50%;\n  left: -6px;\n  width: 0;\n  height: 0;\n  content: \"\";\n  position: absolute;\n  transform: translateY(-50%);\n  border-top: 7px solid transparent;\n  border-bottom: 7px solid transparent;\n  border-right: 7px solid var(--tertiary-50);\n}\n.ds__Tooltip[data-direction=right]::before {\n  top: 50%;\n  right: -7.5px;\n  width: 0;\n  height: 0;\n  content: \"\";\n  position: absolute;\n  transform: translateY(-50%);\n  border-top: 7px solid transparent;\n  border-bottom: 7px solid transparent;\n  border-left: 7px solid var(--tertiary-300);\n}\n.ds__Tooltip[data-direction=right]::after {\n  top: 50%;\n  right: -6px;\n  width: 0;\n  height: 0;\n  content: \"\";\n  position: absolute;\n  transform: translateY(-50%);\n  border-top: 7px solid transparent;\n  border-bottom: 7px solid transparent;\n  border-left: 7px solid var(--tertiary-50);\n}\n.ds__Tooltip[data-direction=top][data-placement=left]::after, .ds__Tooltip[data-direction=top][data-placement=left]::before, .ds__Tooltip[data-direction=bottom][data-placement=left]::after, .ds__Tooltip[data-direction=bottom][data-placement=left]::before {\n  right: auto;\n  left: 24px;\n}\n.ds__Tooltip[data-direction=top][data-placement=right]::after, .ds__Tooltip[data-direction=top][data-placement=right]::before, .ds__Tooltip[data-direction=bottom][data-placement=right]::after, .ds__Tooltip[data-direction=bottom][data-placement=right]::before {\n  left: auto;\n  right: 7px;\n}";
styleInject(css_248z$7);

// Generated with util/createComponent.js
var Tooltip = function (props, ref) {
    var content = props.content, className = props.className, direction = props.direction, _a = props.placement, placement = _a === void 0 ? "center" : _a;
    return (React.createElement("div", { ref: ref, "data-testid": "Tooltip ".concat(className), "data-direction": direction, "data-placement": placement, className: "ds__Tooltip" }, content));
};
var Tooltip$1 = React.forwardRef(Tooltip);

var css_248z$6 = "@import url(\"https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap\");\n:root {\n  --round-xs: 2px;\n  --round-s: 4px;\n  --round-m: 8px;\n  --round-l: 12px;\n  --round-xl: 16px;\n  --round-xxl: 20px;\n  --padding-xxs: 2px;\n  --padding-xs: 4px;\n  --padding-s: 8px;\n  --padding-m: 12px;\n  --padding-l: 16px;\n  --padding-xl: 20px;\n  --padding-xxl: 24px;\n  --shadow-xs: 0px 1px 2px 0px rgba(0, 0, 0, 0.0509803922);\n  --shadow-sm: 0px 1px 3px 0px rgba(0, 0, 0, 0.0784313725);\n  --shadow-m: 0px 1.5px 4px -1px rgba(0, 0, 0, 0.1215686275);\n  --shadow-lg: 0px 4px 6px -2px rgba(0, 0, 0, 0.1019607843), 0px 10px 15px -3px rgba(0, 0, 0, 0.0509803922);\n  --shadow-xl: 0px 10px 10px -5px rgba(0, 0, 0, 0.1019607843), 0px 20px 25px -5px rgba(0, 0, 0, 0.0392156863);\n  --shadow-2xl: 0px 25px 50px -12px rgba(0, 0, 0, 0.2509803922);\n  --shadow-flat: 0px 1px 0px #e4e4e7;\n  --shadow-in: inset 0px 2px 4px #525252;\n  --base-00: #ffffff;\n  --base-50: rgba(26, 26, 26, 0.0509803922);\n  --base-100: rgba(26, 26, 26, 0.1019607843);\n  --base-200: rgba(26, 26, 26, 0.2);\n  --base-300: rgba(26, 26, 26, 0.3019607843);\n  --base-400: rgba(26, 26, 26, 0.4);\n  --base-500: rgba(26, 26, 26, 0.5019607843);\n  --base-600: rgba(26, 26, 26, 0.6);\n  --base-700: rgba(26, 26, 26, 0.7019607843);\n  --base-800: rgba(26, 26, 26, 0.8);\n  --base-900: #1a1a1a;\n  --primary-50: #f2f7ff;\n  --primary-100: #dcebfe;\n  --primary-200: #bedbfe;\n  --primary-300: #91c3fd;\n  --primary-400: #61a6fa;\n  --primary-500: #3479e9;\n  --primary-600: #2463eb;\n  --primary-700: #1d4fd7;\n  --primary-800: #1e3fae;\n  --primary-900: #1e3b8a;\n  --secondary-50: #faf5ff;\n  --secondary-100: #f2e5ff;\n  --secondary-200: #ead6ff;\n  --secondary-300: #d8b4fe;\n  --secondary-400: #bf83fc;\n  --secondary-500: #a855f7;\n  --secondary-600: #9234ea;\n  --secondary-700: #7e22ce;\n  --secondary-800: #6a21a6;\n  --secondary-900: #591c87;\n  --tertiary-50: #fdfdfd;\n  --tertiary-100: #f4f4f5;\n  --tertiary-200: #e4e4e7;\n  --tertiary-300: #d4d4d8;\n  --tertiary-400: #a1a1aa;\n  --tertiary-500: #71717a;\n  --tertiary-600: #52525b;\n  --tertiary-700: #3f3f46;\n  --tertiary-800: #27272a;\n  --tertiary-900: #18181b;\n  --success-50: #f2fdf5;\n  --success-100: #defce9;\n  --success-200: #bbf7d0;\n  --success-300: #85efac;\n  --success-400: #4ade80;\n  --success-500: #1ac057;\n  --success-600: #16a249;\n  --success-700: #157f3c;\n  --success-800: #1c713c;\n  --success-900: #114c29;\n  --warning-50: #fef1f1;\n  --warning-100: #fee1e1;\n  --warning-200: #fec8c8;\n  --warning-300: #fca6a6;\n  --warning-400: #fd6b6b;\n  --warning-500: #ef4343;\n  --warning-600: #dc2828;\n  --warning-700: #ba1c1c;\n  --warning-800: #981b1b;\n  --warning-900: #811d1d;\n  --highlight-50: #fefce7;\n  --highlight-100: #fef9c3;\n  --highlight-200: #fef08b;\n  --highlight-300: #fddf49;\n  --highlight-400: #facc14;\n  --highlight-500: #e7b008;\n  --highlight-600: #c88a04;\n  --highlight-700: #a26107;\n  --highlight-800: #864e0e;\n  --highlight-900: #733f12;\n  --blue-gray-50: #f8fafc;\n  --blue-gray-100: #f1f5f9;\n  --blue-gray-200: #e1e7ef;\n  --blue-gray-300: #cbd5e1;\n  --blue-gray-400: #94a3b8;\n  --blue-gray-500: #65758b;\n  --blue-gray-600: #48566a;\n  --blue-gray-700: #344256;\n  --blue-gray-800: #1d283a;\n  --blue-gray-900: #0f1729;\n  --bronze-50: #fafaf9;\n  --bronze-100: #f5f5f4;\n  --bronze-200: #e7e5e4;\n  --bronze-300: #d6d3d1;\n  --bronze-400: #a8a29f;\n  --bronze-500: #78726d;\n  --bronze-600: #56524e;\n  --bronze-700: #44403c;\n  --bronze-800: #292524;\n  --bronze-900: #1c1917;\n  --cyan-50: #ebfeff;\n  --cyan-100: #cdfafe;\n  --cyan-200: #a6f3fc;\n  --cyan-300: #67e8f9;\n  --cyan-400: #20d3ee;\n  --cyan-500: #07b6d5;\n  --cyan-600: #088eaf;\n  --cyan-700: #0e7490;\n  --cyan-800: #155f75;\n  --cyan-900: #164f64;\n  --emerald-50: #edfdf5;\n  --emerald-100: #d1fae5;\n  --emerald-200: #a5f3cf;\n  --emerald-300: #6ee7b7;\n  --emerald-400: #36d399;\n  --emerald-500: #10b77f;\n  --emerald-600: #059467;\n  --emerald-700: #047656;\n  --emerald-800: #066046;\n  --emerald-900: #064b39;\n  --fuchsia-50: #fdf5ff;\n  --fuchsia-100: #f9e5ff;\n  --fuchsia-200: #f5d2fe;\n  --fuchsia-300: #f0abfc;\n  --fuchsia-400: #e87bf9;\n  --fuchsia-500: #d948ef;\n  --fuchsia-600: #bf27d3;\n  --fuchsia-700: #a31daf;\n  --fuchsia-800: #85198f;\n  --fuchsia-900: #711a75;\n  --indigo-50: #f0f3ff;\n  --indigo-100: #e0e8ff;\n  --indigo-200: #c8d3fe;\n  --indigo-300: #a6b4fc;\n  --indigo-400: #828df8;\n  --indigo-500: #6467f2;\n  --indigo-600: #5048e5;\n  --indigo-700: #463acb;\n  --indigo-800: #372fa2;\n  --indigo-900: #312e7f;\n  --light-blue-50: #f0f9ff;\n  --light-blue-100: #e1f3fe;\n  --light-blue-200: #bae5fd;\n  --light-blue-300: #7ed4fc;\n  --light-blue-400: #3abff8;\n  --light-blue-500: #0da2e7;\n  --light-blue-600: #0284c5;\n  --light-blue-700: #0369a0;\n  --light-blue-800: #075783;\n  --light-blue-900: #0c4a6e;\n  --lime-50: #f7fee7;\n  --lime-100: #ebfcca;\n  --lime-200: #d9f99f;\n  --lime-300: #bef263;\n  --lime-400: #a1e633;\n  --lime-500: #82cb15;\n  --lime-600: #66a50d;\n  --lime-700: #4c7b0f;\n  --lime-800: #406312;\n  --lime-900: #355214;\n  --metal-50: #f9fafb;\n  --metal-100: #f3f4f6;\n  --metal-200: #e5e7eb;\n  --metal-300: #d1d5db;\n  --metal-400: #9ca3b0;\n  --metal-500: #6b7280;\n  --metal-600: #4b5563;\n  --metal-700: #384252;\n  --metal-800: #1f2937;\n  --metal-900: #111827;\n  --orange-50: #fff6eb;\n  --orange-200: #fed6a9;\n  --orange-400: #fb923c;\n  --pink-50: #fdf2f8;\n  --pink-100: #fce8f4;\n  --pink-200: #fbd0e8;\n  --pink-300: #f9a9d5;\n  --pink-400: #f471b5;\n  --pink-500: #ec4699;\n  --pink-600: #db2979;\n  --pink-700: #bf185d;\n  --pink-800: #9b174c;\n  --pink-900: #811842;\n  --rose-50: #fff0f1;\n  --rose-100: #ffe5e7;\n  --rose-200: #fecdd3;\n  --rose-300: #fda5af;\n  --rose-400: #fb6f84;\n  --rose-500: #f43e5c;\n  --rose-600: #e21d48;\n  --rose-700: #bf123d;\n  --rose-800: #a1123a;\n  --rose-900: #861336;\n  --teal-50: #f2fdfa;\n  --teal-100: #cbfbf0;\n  --teal-200: #98f6e3;\n  --teal-300: #5dead5;\n  --teal-400: #2bd4bd;\n  --teal-500: #14b8a5;\n  --teal-600: #0d968b;\n  --teal-700: #0f756d;\n  --teal-800: #115f5a;\n  --teal-900: #134e4a;\n  --violet-50: #f6f5ff;\n  --violet-100: #ebe7fe;\n  --violet-200: #ded7fe;\n  --violet-300: #c3b4fd;\n  --violet-400: #a689fa;\n  --violet-500: #895af6;\n  --violet-600: #7c3bed;\n  --violet-700: #6b26d9;\n  --violet-800: #5a21b5;\n  --violet-900: #4d1d95;\n}\n\n@media (prefers-color-scheme: dark) {\n  :root {\n    --shadow-xs: 0px 0.5px 0px #525252;\n    --shadow-sm: 0px 1px 1px rgba(18, 18, 18, 0.3019607843);\n    --shadow-m: 0px 2.5px 4px rgba(18, 18, 18, 0.6509803922);\n    --shadow-lg: 0px 3px 5px rgba(18, 18, 18, 0.8);\n    --shadow-xl: 0px 2.5px 8px #121212;\n    --shadow-2xl: 0px 4px 12px #121212;\n    --shadow-flat: 0px 1px 0px #434343;\n    --shadow-in: inset 0px 1px 2px rgba(255, 255, 255, 0.24);\n    --base-00: #141414;\n    --base-50: rgba(255, 255, 255, 0.0509803922);\n    --base-100: rgba(255, 255, 255, 0.1019607843);\n    --base-200: rgba(255, 255, 255, 0.2);\n    --base-300: rgba(255, 255, 255, 0.3019607843);\n    --base-400: rgba(255, 255, 255, 0.4);\n    --base-500: rgba(255, 255, 255, 0.5019607843);\n    --base-600: rgba(255, 255, 255, 0.6);\n    --base-700: rgba(255, 255, 255, 0.7019607843);\n    --base-800: rgba(255, 255, 255, 0.8);\n    --base-900: #ffffff;\n    --primary-50: #1d223f;\n    --primary-100: #0a318c;\n    --primary-200: #1347cc;\n    --primary-300: #1055ea;\n    --primary-400: #357aea;\n    --primary-500: #2e88f6;\n    --primary-600: #50a1ff;\n    --primary-700: #7ab7ff;\n    --primary-800: #dcebfe;\n    --primary-900: #f0f6ff;\n    --secondary-50: #35194a;\n    --secondary-100: #4e1d72;\n    --secondary-200: #7e22ce;\n    --secondary-300: #9c40ec;\n    --secondary-400: #ab57ff;\n    --secondary-500: #d07fff;\n    --secondary-600: #e9a0ff;\n    --secondary-700: #ffbcff;\n    --secondary-800: #ffd6ff;\n    --secondary-900: #ffefff;\n    --tertiary-50: #272727;\n    --tertiary-100: #333333;\n    --tertiary-200: #434343;\n    --tertiary-300: #5f5f5f;\n    --tertiary-400: #747474;\n    --tertiary-500: #878787;\n    --tertiary-600: #9b9b9b;\n    --tertiary-700: #b9b9b9;\n    --tertiary-800: #d7d7d7;\n    --tertiary-900: #efefef;\n    --success-50: #0e3619;\n    --success-100: #14522d;\n    --success-200: #166434;\n    --success-300: #119541;\n    --success-400: #21c45d;\n    --success-500: #4ade80;\n    --success-600: #85efac;\n    --success-700: #bbf7d0;\n    --success-800: #defce9;\n    --success-900: #f2fdf5;\n    --warning-50: #5d2323;\n    --warning-100: #781f1f;\n    --warning-200: #ae4040;\n    --warning-300: #dc3d3d;\n    --warning-400: #f64d4d;\n    --warning-500: #ff6262;\n    --warning-600: #ff9393;\n    --warning-700: #ffa7a7;\n    --warning-800: #ffbbbb;\n    --warning-900: #fed0d0;\n    --highlight-50: #413d17;\n    --highlight-100: #864e0e;\n    --highlight-200: #a26107;\n    --highlight-300: #c88a04;\n    --highlight-400: #e7b008;\n    --highlight-500: #facc14;\n    --highlight-600: #fddf49;\n    --highlight-700: #fef08b;\n    --highlight-800: #fefacb;\n    --highlight-900: #fefce6;\n    --blue-gray-50: #0f1729;\n    --blue-gray-100: #1d283a;\n    --blue-gray-200: #344256;\n    --blue-gray-300: #48566a;\n    --blue-gray-400: #65758b;\n    --blue-gray-500: #94a3b8;\n    --blue-gray-600: #cbd5e1;\n    --blue-gray-700: #e1e7ef;\n    --blue-gray-800: #f1f5f9;\n    --blue-gray-900: #f8fafc;\n    --bronze-50: #1c1917;\n    --bronze-100: #292524;\n    --bronze-200: #44403c;\n    --bronze-300: #56524e;\n    --bronze-400: #78726d;\n    --bronze-500: #a8a29f;\n    --bronze-600: #d6d3d1;\n    --bronze-700: #e7e5e4;\n    --bronze-800: #f5f5f4;\n    --bronze-900: #fafaf9;\n    --cyan-50: #164f64;\n    --cyan-100: #155f75;\n    --cyan-200: #0e7490;\n    --cyan-300: #088eaf;\n    --cyan-400: #07b6d5;\n    --cyan-500: #20d3ee;\n    --cyan-600: #20d3ee;\n    --cyan-700: #67e8f9;\n    --cyan-800: #cdfafe;\n    --cyan-900: #ebfeff;\n    --emerald-50: #064c39;\n    --emerald-100: #066046;\n    --emerald-200: #047756;\n    --emerald-300: #059467;\n    --emerald-400: #10b77f;\n    --emerald-500: #36d399;\n    --emerald-600: #6ee7b7;\n    --emerald-700: #a5f3cf;\n    --emerald-800: #d1fae5;\n    --emerald-900: #edfdf5;\n    --fuchsia-50: #701076;\n    --fuchsia-100: #85198f;\n    --fuchsia-200: #a31daf;\n    --fuchsia-300: #bf27d3;\n    --fuchsia-400: #d948ef;\n    --fuchsia-500: #e87bf9;\n    --fuchsia-600: #f0abfc;\n    --fuchsia-700: #f5d2fe;\n    --fuchsia-800: #f9e5ff;\n    --fuchsia-900: #fdf5ff;\n    --indigo-50: #312e7f;\n    --indigo-100: #372fa2;\n    --indigo-200: #463acb;\n    --indigo-300: #5048e5;\n    --indigo-400: #6467f2;\n    --indigo-500: #828df8;\n    --indigo-600: #a6b4fc;\n    --indigo-700: #c8d3fe;\n    --indigo-800: #e0e8ff;\n    --indigo-900: #f0f3ff;\n    --light-blue-50: #0c4a6e;\n    --light-blue-100: #075783;\n    --light-blue-200: #0369a0;\n    --light-blue-300: #0284c5;\n    --light-blue-400: #0da2e7;\n    --light-blue-500: #3abff8;\n    --light-blue-600: #7ed4fc;\n    --light-blue-700: #bae5fd;\n    --light-blue-800: #e1f3fe;\n    --light-blue-900: #f0f9ff;\n    --lime-50: #355214;\n    --lime-100: #406312;\n    --lime-200: #4c7b0f;\n    --lime-300: #66a50d;\n    --lime-400: #82cb15;\n    --lime-500: #a1e633;\n    --lime-600: #bef263;\n    --lime-700: #d9f99f;\n    --lime-800: #ebfcca;\n    --lime-900: #f7fee7;\n    --metal-100: #1f2937;\n    --metal-200: #384252;\n    --metal-300: #4b5563;\n    --metal-400: #6b7280;\n    --metal-500: #9ca3b0;\n    --metal-600: #d1d5db;\n    --metal-700: #e5e7eb;\n    --metal-800: #f3f4f6;\n    --metal-900: #f9fafb;\n    --orange-50: #582817;\n    --orange-100: #9b3412;\n    --orange-200: #af4d2c;\n    --orange-300: #e05f03;\n    --orange-400: #f97415;\n    --orange-500: #fb923c;\n    --orange-600: #fdba72;\n    --orange-700: #fed6a9;\n    --orange-800: #ffedd6;\n    --orange-900: #fff6eb;\n    --pink-50: #811842;\n    --pink-100: #9b174c;\n    --pink-200: #bf185d;\n    --pink-300: #db2979;\n    --pink-400: #ec4699;\n    --pink-500: #f471b5;\n    --pink-600: #f9a9d5;\n    --pink-700: #fbd0e8;\n    --pink-800: #fce8f4;\n    --pink-900: #fdf2f8;\n    --rose-50: #861336;\n    --rose-100: #a1123a;\n    --rose-200: #bf123d;\n    --rose-300: #e21d48;\n    --rose-400: #f43e5c;\n    --rose-500: #fb6f84;\n    --rose-600: #fda5af;\n    --rose-700: #fecdd3;\n    --rose-800: #ffe5e7;\n    --rose-900: #fff0f1;\n    --teal-50: #134e4a;\n    --teal-100: #115f5a;\n    --teal-200: #0f756d;\n    --teal-300: #0f756d;\n    --teal-400: #14b8a4;\n    --teal-500: #2bd4bd;\n    --teal-600: #5dead5;\n    --teal-700: #98f6e3;\n    --teal-800: #cbfbf0;\n    --teal-900: #f2fdfa;\n    --violet-50: #282056;\n    --violet-100: #4d1d95;\n    --violet-200: #533dab;\n    --violet-300: #7c3bed;\n    --violet-400: #895af6;\n    --violet-500: #a689fa;\n    --violet-600: #c3b4fd;\n    --violet-700: #ded7fe;\n    --violet-800: #ebe7fe;\n    --violet-900: #f6f5ff;\n  }\n}\n* {\n  box-sizing: border-box;\n  outline: none;\n  padding: 0;\n  margin: 0;\n}\n\n@media (prefers-color-scheme: dark) {\n  html {\n    color-scheme: dark;\n  }\n}\n.ds__Radio {\n  width: max-content;\n  height: max-content;\n  align-items: center;\n  box-sizing: border-box;\n  background: transparent;\n  position: relative;\n  cursor: pointer;\n  display: flex;\n  border: none;\n  gap: 10px;\n}\n.ds__Radio[data-align=left] {\n  flex-direction: row-reverse;\n}\n.ds__Radio .ds__Radio__label {\n  font-family: \"Inter\", sans-serif;\n  margin: 0;\n  font-style: normal;\n  letter-spacing: 0%;\n  text-align: left;\n  font-weight: 600;\n  text-transform: none;\n  text-decoration: none;\n  font-size: 16px;\n  line-height: 24px;\n  color: var(--base-900);\n  cursor: pointer;\n}\n.ds__Radio .ds__Radio__input {\n  display: inline-block;\n  position: relative;\n  height: 24px;\n  width: 24px;\n}\n.ds__Radio .ds__Radio__input .ds__Radio__pointer {\n  position: absolute;\n  cursor: pointer;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  border-radius: 34px;\n  background-color: var(--base-50);\n  border: 2px solid var(--base-200);\n}\n.ds__Radio .ds__Radio__input input {\n  opacity: 0;\n  width: 0;\n  height: 0;\n}\n.ds__Radio .ds__Radio__input input:checked + .ds__Radio__pointer {\n  background-color: #2463eb;\n  border: none;\n}\n.ds__Radio .ds__Radio__input input:checked + .ds__Radio__pointer::before {\n  top: 50%;\n  left: 50%;\n  content: \"\";\n  width: 12px;\n  height: 12px;\n  position: absolute;\n  border-radius: 50%;\n  background-color: white;\n  box-shadow: 0px 1.5px 4px -1px rgba(0, 0, 0, 0.1215686275);\n  transform: translate(-50%, -50%);\n}\n.ds__Radio .ds__Radio__input input:disabled + .ds__Radio__pointer {\n  background-color: var(--tertiary-200);\n  border: none;\n}\n.ds__Radio .ds__Radio__input input:disabled + .ds__Radio__pointer::before {\n  background-color: var(--tertiary-500);\n}\n.ds__Radio[data-size=small] {\n  gap: 8px;\n}\n.ds__Radio[data-size=small] .ds__Radio__label {\n  font-family: \"Inter\", sans-serif;\n  margin: 0;\n  font-style: normal;\n  letter-spacing: 0%;\n  text-align: left;\n  font-weight: 500;\n  text-transform: none;\n  text-decoration: none;\n  font-size: 14px;\n  line-height: 20px;\n}\n.ds__Radio[data-size=small] .ds__Radio__input {\n  width: 18px;\n  height: 18px;\n}\n.ds__Radio[data-size=small] .ds__Radio__input input:checked + .ds__Radio__pointer::before {\n  height: 10px;\n  width: 10px;\n}\n.ds__Radio[data-size=large] {\n  gap: 14px;\n}\n.ds__Radio[data-size=large] .ds__Radio__label {\n  font-family: \"Inter\", sans-serif;\n  margin: 0;\n  font-style: normal;\n  letter-spacing: 0%;\n  text-align: left;\n  font-weight: 600;\n  text-transform: none;\n  text-decoration: none;\n  font-size: 18px;\n  line-height: 30px;\n}\n.ds__Radio[data-size=large] .ds__Radio__input {\n  width: 32px;\n  height: 32px;\n}\n.ds__Radio[data-size=large] .ds__Radio__input input:checked + .ds__Radio__pointer::before {\n  height: 16px;\n  width: 16px;\n}";
styleInject(css_248z$6);

// Generated with util/createComponent.js
var Radio = function (props, ref) {
    var name = props.name, title = props.title, label = props.label, value = props.value, checked = props.checked, disabled = props.disabled, onChange = props.onChange, labelAlign = props.labelAlign, _a = props.size, size = _a === void 0 ? "default" : _a;
    return (React.createElement("div", { ref: ref, "data-align": labelAlign, className: "ds__Radio", "data-testid": "Radio", "data-size": size },
        React.createElement("label", { htmlFor: name, className: "ds__Radio__input" },
            React.createElement("input", { id: name, type: "radio", title: title, value: value, checked: checked, onChange: onChange, disabled: disabled }),
            React.createElement("span", { className: "ds__Radio__pointer" })),
        label && (React.createElement("label", { htmlFor: name, className: "ds__Radio__label" }, label))));
};
var Radio$1 = React.forwardRef(Radio);

var css_248z$5 = "@import url(\"https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap\");\n:root {\n  --round-xs: 2px;\n  --round-s: 4px;\n  --round-m: 8px;\n  --round-l: 12px;\n  --round-xl: 16px;\n  --round-xxl: 20px;\n  --padding-xxs: 2px;\n  --padding-xs: 4px;\n  --padding-s: 8px;\n  --padding-m: 12px;\n  --padding-l: 16px;\n  --padding-xl: 20px;\n  --padding-xxl: 24px;\n  --shadow-xs: 0px 1px 2px 0px rgba(0, 0, 0, 0.0509803922);\n  --shadow-sm: 0px 1px 3px 0px rgba(0, 0, 0, 0.0784313725);\n  --shadow-m: 0px 1.5px 4px -1px rgba(0, 0, 0, 0.1215686275);\n  --shadow-lg: 0px 4px 6px -2px rgba(0, 0, 0, 0.1019607843), 0px 10px 15px -3px rgba(0, 0, 0, 0.0509803922);\n  --shadow-xl: 0px 10px 10px -5px rgba(0, 0, 0, 0.1019607843), 0px 20px 25px -5px rgba(0, 0, 0, 0.0392156863);\n  --shadow-2xl: 0px 25px 50px -12px rgba(0, 0, 0, 0.2509803922);\n  --shadow-flat: 0px 1px 0px #e4e4e7;\n  --shadow-in: inset 0px 2px 4px #525252;\n  --base-00: #ffffff;\n  --base-50: rgba(26, 26, 26, 0.0509803922);\n  --base-100: rgba(26, 26, 26, 0.1019607843);\n  --base-200: rgba(26, 26, 26, 0.2);\n  --base-300: rgba(26, 26, 26, 0.3019607843);\n  --base-400: rgba(26, 26, 26, 0.4);\n  --base-500: rgba(26, 26, 26, 0.5019607843);\n  --base-600: rgba(26, 26, 26, 0.6);\n  --base-700: rgba(26, 26, 26, 0.7019607843);\n  --base-800: rgba(26, 26, 26, 0.8);\n  --base-900: #1a1a1a;\n  --primary-50: #f2f7ff;\n  --primary-100: #dcebfe;\n  --primary-200: #bedbfe;\n  --primary-300: #91c3fd;\n  --primary-400: #61a6fa;\n  --primary-500: #3479e9;\n  --primary-600: #2463eb;\n  --primary-700: #1d4fd7;\n  --primary-800: #1e3fae;\n  --primary-900: #1e3b8a;\n  --secondary-50: #faf5ff;\n  --secondary-100: #f2e5ff;\n  --secondary-200: #ead6ff;\n  --secondary-300: #d8b4fe;\n  --secondary-400: #bf83fc;\n  --secondary-500: #a855f7;\n  --secondary-600: #9234ea;\n  --secondary-700: #7e22ce;\n  --secondary-800: #6a21a6;\n  --secondary-900: #591c87;\n  --tertiary-50: #fdfdfd;\n  --tertiary-100: #f4f4f5;\n  --tertiary-200: #e4e4e7;\n  --tertiary-300: #d4d4d8;\n  --tertiary-400: #a1a1aa;\n  --tertiary-500: #71717a;\n  --tertiary-600: #52525b;\n  --tertiary-700: #3f3f46;\n  --tertiary-800: #27272a;\n  --tertiary-900: #18181b;\n  --success-50: #f2fdf5;\n  --success-100: #defce9;\n  --success-200: #bbf7d0;\n  --success-300: #85efac;\n  --success-400: #4ade80;\n  --success-500: #1ac057;\n  --success-600: #16a249;\n  --success-700: #157f3c;\n  --success-800: #1c713c;\n  --success-900: #114c29;\n  --warning-50: #fef1f1;\n  --warning-100: #fee1e1;\n  --warning-200: #fec8c8;\n  --warning-300: #fca6a6;\n  --warning-400: #fd6b6b;\n  --warning-500: #ef4343;\n  --warning-600: #dc2828;\n  --warning-700: #ba1c1c;\n  --warning-800: #981b1b;\n  --warning-900: #811d1d;\n  --highlight-50: #fefce7;\n  --highlight-100: #fef9c3;\n  --highlight-200: #fef08b;\n  --highlight-300: #fddf49;\n  --highlight-400: #facc14;\n  --highlight-500: #e7b008;\n  --highlight-600: #c88a04;\n  --highlight-700: #a26107;\n  --highlight-800: #864e0e;\n  --highlight-900: #733f12;\n  --blue-gray-50: #f8fafc;\n  --blue-gray-100: #f1f5f9;\n  --blue-gray-200: #e1e7ef;\n  --blue-gray-300: #cbd5e1;\n  --blue-gray-400: #94a3b8;\n  --blue-gray-500: #65758b;\n  --blue-gray-600: #48566a;\n  --blue-gray-700: #344256;\n  --blue-gray-800: #1d283a;\n  --blue-gray-900: #0f1729;\n  --bronze-50: #fafaf9;\n  --bronze-100: #f5f5f4;\n  --bronze-200: #e7e5e4;\n  --bronze-300: #d6d3d1;\n  --bronze-400: #a8a29f;\n  --bronze-500: #78726d;\n  --bronze-600: #56524e;\n  --bronze-700: #44403c;\n  --bronze-800: #292524;\n  --bronze-900: #1c1917;\n  --cyan-50: #ebfeff;\n  --cyan-100: #cdfafe;\n  --cyan-200: #a6f3fc;\n  --cyan-300: #67e8f9;\n  --cyan-400: #20d3ee;\n  --cyan-500: #07b6d5;\n  --cyan-600: #088eaf;\n  --cyan-700: #0e7490;\n  --cyan-800: #155f75;\n  --cyan-900: #164f64;\n  --emerald-50: #edfdf5;\n  --emerald-100: #d1fae5;\n  --emerald-200: #a5f3cf;\n  --emerald-300: #6ee7b7;\n  --emerald-400: #36d399;\n  --emerald-500: #10b77f;\n  --emerald-600: #059467;\n  --emerald-700: #047656;\n  --emerald-800: #066046;\n  --emerald-900: #064b39;\n  --fuchsia-50: #fdf5ff;\n  --fuchsia-100: #f9e5ff;\n  --fuchsia-200: #f5d2fe;\n  --fuchsia-300: #f0abfc;\n  --fuchsia-400: #e87bf9;\n  --fuchsia-500: #d948ef;\n  --fuchsia-600: #bf27d3;\n  --fuchsia-700: #a31daf;\n  --fuchsia-800: #85198f;\n  --fuchsia-900: #711a75;\n  --indigo-50: #f0f3ff;\n  --indigo-100: #e0e8ff;\n  --indigo-200: #c8d3fe;\n  --indigo-300: #a6b4fc;\n  --indigo-400: #828df8;\n  --indigo-500: #6467f2;\n  --indigo-600: #5048e5;\n  --indigo-700: #463acb;\n  --indigo-800: #372fa2;\n  --indigo-900: #312e7f;\n  --light-blue-50: #f0f9ff;\n  --light-blue-100: #e1f3fe;\n  --light-blue-200: #bae5fd;\n  --light-blue-300: #7ed4fc;\n  --light-blue-400: #3abff8;\n  --light-blue-500: #0da2e7;\n  --light-blue-600: #0284c5;\n  --light-blue-700: #0369a0;\n  --light-blue-800: #075783;\n  --light-blue-900: #0c4a6e;\n  --lime-50: #f7fee7;\n  --lime-100: #ebfcca;\n  --lime-200: #d9f99f;\n  --lime-300: #bef263;\n  --lime-400: #a1e633;\n  --lime-500: #82cb15;\n  --lime-600: #66a50d;\n  --lime-700: #4c7b0f;\n  --lime-800: #406312;\n  --lime-900: #355214;\n  --metal-50: #f9fafb;\n  --metal-100: #f3f4f6;\n  --metal-200: #e5e7eb;\n  --metal-300: #d1d5db;\n  --metal-400: #9ca3b0;\n  --metal-500: #6b7280;\n  --metal-600: #4b5563;\n  --metal-700: #384252;\n  --metal-800: #1f2937;\n  --metal-900: #111827;\n  --orange-50: #fff6eb;\n  --orange-200: #fed6a9;\n  --orange-400: #fb923c;\n  --pink-50: #fdf2f8;\n  --pink-100: #fce8f4;\n  --pink-200: #fbd0e8;\n  --pink-300: #f9a9d5;\n  --pink-400: #f471b5;\n  --pink-500: #ec4699;\n  --pink-600: #db2979;\n  --pink-700: #bf185d;\n  --pink-800: #9b174c;\n  --pink-900: #811842;\n  --rose-50: #fff0f1;\n  --rose-100: #ffe5e7;\n  --rose-200: #fecdd3;\n  --rose-300: #fda5af;\n  --rose-400: #fb6f84;\n  --rose-500: #f43e5c;\n  --rose-600: #e21d48;\n  --rose-700: #bf123d;\n  --rose-800: #a1123a;\n  --rose-900: #861336;\n  --teal-50: #f2fdfa;\n  --teal-100: #cbfbf0;\n  --teal-200: #98f6e3;\n  --teal-300: #5dead5;\n  --teal-400: #2bd4bd;\n  --teal-500: #14b8a5;\n  --teal-600: #0d968b;\n  --teal-700: #0f756d;\n  --teal-800: #115f5a;\n  --teal-900: #134e4a;\n  --violet-50: #f6f5ff;\n  --violet-100: #ebe7fe;\n  --violet-200: #ded7fe;\n  --violet-300: #c3b4fd;\n  --violet-400: #a689fa;\n  --violet-500: #895af6;\n  --violet-600: #7c3bed;\n  --violet-700: #6b26d9;\n  --violet-800: #5a21b5;\n  --violet-900: #4d1d95;\n}\n\n@media (prefers-color-scheme: dark) {\n  :root {\n    --shadow-xs: 0px 0.5px 0px #525252;\n    --shadow-sm: 0px 1px 1px rgba(18, 18, 18, 0.3019607843);\n    --shadow-m: 0px 2.5px 4px rgba(18, 18, 18, 0.6509803922);\n    --shadow-lg: 0px 3px 5px rgba(18, 18, 18, 0.8);\n    --shadow-xl: 0px 2.5px 8px #121212;\n    --shadow-2xl: 0px 4px 12px #121212;\n    --shadow-flat: 0px 1px 0px #434343;\n    --shadow-in: inset 0px 1px 2px rgba(255, 255, 255, 0.24);\n    --base-00: #141414;\n    --base-50: rgba(255, 255, 255, 0.0509803922);\n    --base-100: rgba(255, 255, 255, 0.1019607843);\n    --base-200: rgba(255, 255, 255, 0.2);\n    --base-300: rgba(255, 255, 255, 0.3019607843);\n    --base-400: rgba(255, 255, 255, 0.4);\n    --base-500: rgba(255, 255, 255, 0.5019607843);\n    --base-600: rgba(255, 255, 255, 0.6);\n    --base-700: rgba(255, 255, 255, 0.7019607843);\n    --base-800: rgba(255, 255, 255, 0.8);\n    --base-900: #ffffff;\n    --primary-50: #1d223f;\n    --primary-100: #0a318c;\n    --primary-200: #1347cc;\n    --primary-300: #1055ea;\n    --primary-400: #357aea;\n    --primary-500: #2e88f6;\n    --primary-600: #50a1ff;\n    --primary-700: #7ab7ff;\n    --primary-800: #dcebfe;\n    --primary-900: #f0f6ff;\n    --secondary-50: #35194a;\n    --secondary-100: #4e1d72;\n    --secondary-200: #7e22ce;\n    --secondary-300: #9c40ec;\n    --secondary-400: #ab57ff;\n    --secondary-500: #d07fff;\n    --secondary-600: #e9a0ff;\n    --secondary-700: #ffbcff;\n    --secondary-800: #ffd6ff;\n    --secondary-900: #ffefff;\n    --tertiary-50: #272727;\n    --tertiary-100: #333333;\n    --tertiary-200: #434343;\n    --tertiary-300: #5f5f5f;\n    --tertiary-400: #747474;\n    --tertiary-500: #878787;\n    --tertiary-600: #9b9b9b;\n    --tertiary-700: #b9b9b9;\n    --tertiary-800: #d7d7d7;\n    --tertiary-900: #efefef;\n    --success-50: #0e3619;\n    --success-100: #14522d;\n    --success-200: #166434;\n    --success-300: #119541;\n    --success-400: #21c45d;\n    --success-500: #4ade80;\n    --success-600: #85efac;\n    --success-700: #bbf7d0;\n    --success-800: #defce9;\n    --success-900: #f2fdf5;\n    --warning-50: #5d2323;\n    --warning-100: #781f1f;\n    --warning-200: #ae4040;\n    --warning-300: #dc3d3d;\n    --warning-400: #f64d4d;\n    --warning-500: #ff6262;\n    --warning-600: #ff9393;\n    --warning-700: #ffa7a7;\n    --warning-800: #ffbbbb;\n    --warning-900: #fed0d0;\n    --highlight-50: #413d17;\n    --highlight-100: #864e0e;\n    --highlight-200: #a26107;\n    --highlight-300: #c88a04;\n    --highlight-400: #e7b008;\n    --highlight-500: #facc14;\n    --highlight-600: #fddf49;\n    --highlight-700: #fef08b;\n    --highlight-800: #fefacb;\n    --highlight-900: #fefce6;\n    --blue-gray-50: #0f1729;\n    --blue-gray-100: #1d283a;\n    --blue-gray-200: #344256;\n    --blue-gray-300: #48566a;\n    --blue-gray-400: #65758b;\n    --blue-gray-500: #94a3b8;\n    --blue-gray-600: #cbd5e1;\n    --blue-gray-700: #e1e7ef;\n    --blue-gray-800: #f1f5f9;\n    --blue-gray-900: #f8fafc;\n    --bronze-50: #1c1917;\n    --bronze-100: #292524;\n    --bronze-200: #44403c;\n    --bronze-300: #56524e;\n    --bronze-400: #78726d;\n    --bronze-500: #a8a29f;\n    --bronze-600: #d6d3d1;\n    --bronze-700: #e7e5e4;\n    --bronze-800: #f5f5f4;\n    --bronze-900: #fafaf9;\n    --cyan-50: #164f64;\n    --cyan-100: #155f75;\n    --cyan-200: #0e7490;\n    --cyan-300: #088eaf;\n    --cyan-400: #07b6d5;\n    --cyan-500: #20d3ee;\n    --cyan-600: #20d3ee;\n    --cyan-700: #67e8f9;\n    --cyan-800: #cdfafe;\n    --cyan-900: #ebfeff;\n    --emerald-50: #064c39;\n    --emerald-100: #066046;\n    --emerald-200: #047756;\n    --emerald-300: #059467;\n    --emerald-400: #10b77f;\n    --emerald-500: #36d399;\n    --emerald-600: #6ee7b7;\n    --emerald-700: #a5f3cf;\n    --emerald-800: #d1fae5;\n    --emerald-900: #edfdf5;\n    --fuchsia-50: #701076;\n    --fuchsia-100: #85198f;\n    --fuchsia-200: #a31daf;\n    --fuchsia-300: #bf27d3;\n    --fuchsia-400: #d948ef;\n    --fuchsia-500: #e87bf9;\n    --fuchsia-600: #f0abfc;\n    --fuchsia-700: #f5d2fe;\n    --fuchsia-800: #f9e5ff;\n    --fuchsia-900: #fdf5ff;\n    --indigo-50: #312e7f;\n    --indigo-100: #372fa2;\n    --indigo-200: #463acb;\n    --indigo-300: #5048e5;\n    --indigo-400: #6467f2;\n    --indigo-500: #828df8;\n    --indigo-600: #a6b4fc;\n    --indigo-700: #c8d3fe;\n    --indigo-800: #e0e8ff;\n    --indigo-900: #f0f3ff;\n    --light-blue-50: #0c4a6e;\n    --light-blue-100: #075783;\n    --light-blue-200: #0369a0;\n    --light-blue-300: #0284c5;\n    --light-blue-400: #0da2e7;\n    --light-blue-500: #3abff8;\n    --light-blue-600: #7ed4fc;\n    --light-blue-700: #bae5fd;\n    --light-blue-800: #e1f3fe;\n    --light-blue-900: #f0f9ff;\n    --lime-50: #355214;\n    --lime-100: #406312;\n    --lime-200: #4c7b0f;\n    --lime-300: #66a50d;\n    --lime-400: #82cb15;\n    --lime-500: #a1e633;\n    --lime-600: #bef263;\n    --lime-700: #d9f99f;\n    --lime-800: #ebfcca;\n    --lime-900: #f7fee7;\n    --metal-100: #1f2937;\n    --metal-200: #384252;\n    --metal-300: #4b5563;\n    --metal-400: #6b7280;\n    --metal-500: #9ca3b0;\n    --metal-600: #d1d5db;\n    --metal-700: #e5e7eb;\n    --metal-800: #f3f4f6;\n    --metal-900: #f9fafb;\n    --orange-50: #582817;\n    --orange-100: #9b3412;\n    --orange-200: #af4d2c;\n    --orange-300: #e05f03;\n    --orange-400: #f97415;\n    --orange-500: #fb923c;\n    --orange-600: #fdba72;\n    --orange-700: #fed6a9;\n    --orange-800: #ffedd6;\n    --orange-900: #fff6eb;\n    --pink-50: #811842;\n    --pink-100: #9b174c;\n    --pink-200: #bf185d;\n    --pink-300: #db2979;\n    --pink-400: #ec4699;\n    --pink-500: #f471b5;\n    --pink-600: #f9a9d5;\n    --pink-700: #fbd0e8;\n    --pink-800: #fce8f4;\n    --pink-900: #fdf2f8;\n    --rose-50: #861336;\n    --rose-100: #a1123a;\n    --rose-200: #bf123d;\n    --rose-300: #e21d48;\n    --rose-400: #f43e5c;\n    --rose-500: #fb6f84;\n    --rose-600: #fda5af;\n    --rose-700: #fecdd3;\n    --rose-800: #ffe5e7;\n    --rose-900: #fff0f1;\n    --teal-50: #134e4a;\n    --teal-100: #115f5a;\n    --teal-200: #0f756d;\n    --teal-300: #0f756d;\n    --teal-400: #14b8a4;\n    --teal-500: #2bd4bd;\n    --teal-600: #5dead5;\n    --teal-700: #98f6e3;\n    --teal-800: #cbfbf0;\n    --teal-900: #f2fdfa;\n    --violet-50: #282056;\n    --violet-100: #4d1d95;\n    --violet-200: #533dab;\n    --violet-300: #7c3bed;\n    --violet-400: #895af6;\n    --violet-500: #a689fa;\n    --violet-600: #c3b4fd;\n    --violet-700: #ded7fe;\n    --violet-800: #ebe7fe;\n    --violet-900: #f6f5ff;\n  }\n}\n* {\n  box-sizing: border-box;\n  outline: none;\n  padding: 0;\n  margin: 0;\n}\n\n@media (prefers-color-scheme: dark) {\n  html {\n    color-scheme: dark;\n  }\n}\n.ds__ProgressBar {\n  width: 100%;\n  display: flex;\n  position: relative;\n  align-items: center;\n  gap: 10px;\n}\n.ds__ProgressBar .ds__ProgressBar__bar {\n  flex: 1;\n  height: 6px;\n  overflow: hidden;\n  border-radius: 8px;\n  background-color: var(--base-50);\n}\n.ds__ProgressBar .ds__ProgressBar__bar span {\n  height: 100%;\n  display: block;\n  background-color: var(--primary-600);\n}\n.ds__ProgressBar .ds__ProgressBar__label {\n  font-family: \"Inter\", sans-serif;\n  margin: 0;\n  font-style: normal;\n  letter-spacing: 0%;\n  text-align: left;\n  font-weight: 600;\n  text-transform: none;\n  text-decoration: none;\n  font-size: 16px;\n  line-height: 24px;\n  color: var(--blue-grey-700);\n}\n.ds__ProgressBar[data-size=small] {\n  gap: 8px;\n}\n.ds__ProgressBar[data-size=small] .ds__ProgressBar__bar {\n  height: 4px;\n}\n.ds__ProgressBar[data-size=small] .ds__ProgressBar__label {\n  font-family: \"Inter\", sans-serif;\n  margin: 0;\n  font-style: normal;\n  letter-spacing: 0%;\n  text-align: left;\n  font-weight: 500;\n  text-transform: none;\n  text-decoration: none;\n  font-size: 12px;\n  line-height: 16px;\n}\n.ds__ProgressBar[data-size=large] {\n  gap: 12px;\n}\n.ds__ProgressBar[data-size=large] .ds__ProgressBar__bar {\n  height: 8px;\n}\n.ds__ProgressBar[data-size=large] .ds__ProgressBar__label {\n  font-family: \"Inter\", sans-serif;\n  margin: 0;\n  font-style: normal;\n  letter-spacing: 0%;\n  text-align: left;\n  font-weight: 600;\n  text-transform: none;\n  text-decoration: none;\n  font-size: 18px;\n  line-height: 30px;\n}";
styleInject(css_248z$5);

// Generated with util/createComponent.js
var ProgressBar = function (props, ref) {
    var _a = props.percentage, percentage = _a === void 0 ? 0 : _a, _b = props.size, size = _b === void 0 ? "default" : _b;
    return (React.createElement("div", { ref: ref, "data-testid": "ProgressBar", className: "ds__ProgressBar", "data-size": size },
        React.createElement("div", { className: "ds__ProgressBar__bar" },
            React.createElement("span", { style: { width: Number(percentage).toFixed(0) + "%" } })),
        React.createElement("p", { className: "ds__ProgressBar__label" },
            Number(percentage).toFixed(0),
            React.createElement("span", null, "%"))));
};
var ProgressBar$1 = React.forwardRef(ProgressBar);

var css_248z$4 = "@import url(\"https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap\");\n:root {\n  --round-xs: 2px;\n  --round-s: 4px;\n  --round-m: 8px;\n  --round-l: 12px;\n  --round-xl: 16px;\n  --round-xxl: 20px;\n  --padding-xxs: 2px;\n  --padding-xs: 4px;\n  --padding-s: 8px;\n  --padding-m: 12px;\n  --padding-l: 16px;\n  --padding-xl: 20px;\n  --padding-xxl: 24px;\n  --shadow-xs: 0px 1px 2px 0px rgba(0, 0, 0, 0.0509803922);\n  --shadow-sm: 0px 1px 3px 0px rgba(0, 0, 0, 0.0784313725);\n  --shadow-m: 0px 1.5px 4px -1px rgba(0, 0, 0, 0.1215686275);\n  --shadow-lg: 0px 4px 6px -2px rgba(0, 0, 0, 0.1019607843), 0px 10px 15px -3px rgba(0, 0, 0, 0.0509803922);\n  --shadow-xl: 0px 10px 10px -5px rgba(0, 0, 0, 0.1019607843), 0px 20px 25px -5px rgba(0, 0, 0, 0.0392156863);\n  --shadow-2xl: 0px 25px 50px -12px rgba(0, 0, 0, 0.2509803922);\n  --shadow-flat: 0px 1px 0px #e4e4e7;\n  --shadow-in: inset 0px 2px 4px #525252;\n  --base-00: #ffffff;\n  --base-50: rgba(26, 26, 26, 0.0509803922);\n  --base-100: rgba(26, 26, 26, 0.1019607843);\n  --base-200: rgba(26, 26, 26, 0.2);\n  --base-300: rgba(26, 26, 26, 0.3019607843);\n  --base-400: rgba(26, 26, 26, 0.4);\n  --base-500: rgba(26, 26, 26, 0.5019607843);\n  --base-600: rgba(26, 26, 26, 0.6);\n  --base-700: rgba(26, 26, 26, 0.7019607843);\n  --base-800: rgba(26, 26, 26, 0.8);\n  --base-900: #1a1a1a;\n  --primary-50: #f2f7ff;\n  --primary-100: #dcebfe;\n  --primary-200: #bedbfe;\n  --primary-300: #91c3fd;\n  --primary-400: #61a6fa;\n  --primary-500: #3479e9;\n  --primary-600: #2463eb;\n  --primary-700: #1d4fd7;\n  --primary-800: #1e3fae;\n  --primary-900: #1e3b8a;\n  --secondary-50: #faf5ff;\n  --secondary-100: #f2e5ff;\n  --secondary-200: #ead6ff;\n  --secondary-300: #d8b4fe;\n  --secondary-400: #bf83fc;\n  --secondary-500: #a855f7;\n  --secondary-600: #9234ea;\n  --secondary-700: #7e22ce;\n  --secondary-800: #6a21a6;\n  --secondary-900: #591c87;\n  --tertiary-50: #fdfdfd;\n  --tertiary-100: #f4f4f5;\n  --tertiary-200: #e4e4e7;\n  --tertiary-300: #d4d4d8;\n  --tertiary-400: #a1a1aa;\n  --tertiary-500: #71717a;\n  --tertiary-600: #52525b;\n  --tertiary-700: #3f3f46;\n  --tertiary-800: #27272a;\n  --tertiary-900: #18181b;\n  --success-50: #f2fdf5;\n  --success-100: #defce9;\n  --success-200: #bbf7d0;\n  --success-300: #85efac;\n  --success-400: #4ade80;\n  --success-500: #1ac057;\n  --success-600: #16a249;\n  --success-700: #157f3c;\n  --success-800: #1c713c;\n  --success-900: #114c29;\n  --warning-50: #fef1f1;\n  --warning-100: #fee1e1;\n  --warning-200: #fec8c8;\n  --warning-300: #fca6a6;\n  --warning-400: #fd6b6b;\n  --warning-500: #ef4343;\n  --warning-600: #dc2828;\n  --warning-700: #ba1c1c;\n  --warning-800: #981b1b;\n  --warning-900: #811d1d;\n  --highlight-50: #fefce7;\n  --highlight-100: #fef9c3;\n  --highlight-200: #fef08b;\n  --highlight-300: #fddf49;\n  --highlight-400: #facc14;\n  --highlight-500: #e7b008;\n  --highlight-600: #c88a04;\n  --highlight-700: #a26107;\n  --highlight-800: #864e0e;\n  --highlight-900: #733f12;\n  --blue-gray-50: #f8fafc;\n  --blue-gray-100: #f1f5f9;\n  --blue-gray-200: #e1e7ef;\n  --blue-gray-300: #cbd5e1;\n  --blue-gray-400: #94a3b8;\n  --blue-gray-500: #65758b;\n  --blue-gray-600: #48566a;\n  --blue-gray-700: #344256;\n  --blue-gray-800: #1d283a;\n  --blue-gray-900: #0f1729;\n  --bronze-50: #fafaf9;\n  --bronze-100: #f5f5f4;\n  --bronze-200: #e7e5e4;\n  --bronze-300: #d6d3d1;\n  --bronze-400: #a8a29f;\n  --bronze-500: #78726d;\n  --bronze-600: #56524e;\n  --bronze-700: #44403c;\n  --bronze-800: #292524;\n  --bronze-900: #1c1917;\n  --cyan-50: #ebfeff;\n  --cyan-100: #cdfafe;\n  --cyan-200: #a6f3fc;\n  --cyan-300: #67e8f9;\n  --cyan-400: #20d3ee;\n  --cyan-500: #07b6d5;\n  --cyan-600: #088eaf;\n  --cyan-700: #0e7490;\n  --cyan-800: #155f75;\n  --cyan-900: #164f64;\n  --emerald-50: #edfdf5;\n  --emerald-100: #d1fae5;\n  --emerald-200: #a5f3cf;\n  --emerald-300: #6ee7b7;\n  --emerald-400: #36d399;\n  --emerald-500: #10b77f;\n  --emerald-600: #059467;\n  --emerald-700: #047656;\n  --emerald-800: #066046;\n  --emerald-900: #064b39;\n  --fuchsia-50: #fdf5ff;\n  --fuchsia-100: #f9e5ff;\n  --fuchsia-200: #f5d2fe;\n  --fuchsia-300: #f0abfc;\n  --fuchsia-400: #e87bf9;\n  --fuchsia-500: #d948ef;\n  --fuchsia-600: #bf27d3;\n  --fuchsia-700: #a31daf;\n  --fuchsia-800: #85198f;\n  --fuchsia-900: #711a75;\n  --indigo-50: #f0f3ff;\n  --indigo-100: #e0e8ff;\n  --indigo-200: #c8d3fe;\n  --indigo-300: #a6b4fc;\n  --indigo-400: #828df8;\n  --indigo-500: #6467f2;\n  --indigo-600: #5048e5;\n  --indigo-700: #463acb;\n  --indigo-800: #372fa2;\n  --indigo-900: #312e7f;\n  --light-blue-50: #f0f9ff;\n  --light-blue-100: #e1f3fe;\n  --light-blue-200: #bae5fd;\n  --light-blue-300: #7ed4fc;\n  --light-blue-400: #3abff8;\n  --light-blue-500: #0da2e7;\n  --light-blue-600: #0284c5;\n  --light-blue-700: #0369a0;\n  --light-blue-800: #075783;\n  --light-blue-900: #0c4a6e;\n  --lime-50: #f7fee7;\n  --lime-100: #ebfcca;\n  --lime-200: #d9f99f;\n  --lime-300: #bef263;\n  --lime-400: #a1e633;\n  --lime-500: #82cb15;\n  --lime-600: #66a50d;\n  --lime-700: #4c7b0f;\n  --lime-800: #406312;\n  --lime-900: #355214;\n  --metal-50: #f9fafb;\n  --metal-100: #f3f4f6;\n  --metal-200: #e5e7eb;\n  --metal-300: #d1d5db;\n  --metal-400: #9ca3b0;\n  --metal-500: #6b7280;\n  --metal-600: #4b5563;\n  --metal-700: #384252;\n  --metal-800: #1f2937;\n  --metal-900: #111827;\n  --orange-50: #fff6eb;\n  --orange-200: #fed6a9;\n  --orange-400: #fb923c;\n  --pink-50: #fdf2f8;\n  --pink-100: #fce8f4;\n  --pink-200: #fbd0e8;\n  --pink-300: #f9a9d5;\n  --pink-400: #f471b5;\n  --pink-500: #ec4699;\n  --pink-600: #db2979;\n  --pink-700: #bf185d;\n  --pink-800: #9b174c;\n  --pink-900: #811842;\n  --rose-50: #fff0f1;\n  --rose-100: #ffe5e7;\n  --rose-200: #fecdd3;\n  --rose-300: #fda5af;\n  --rose-400: #fb6f84;\n  --rose-500: #f43e5c;\n  --rose-600: #e21d48;\n  --rose-700: #bf123d;\n  --rose-800: #a1123a;\n  --rose-900: #861336;\n  --teal-50: #f2fdfa;\n  --teal-100: #cbfbf0;\n  --teal-200: #98f6e3;\n  --teal-300: #5dead5;\n  --teal-400: #2bd4bd;\n  --teal-500: #14b8a5;\n  --teal-600: #0d968b;\n  --teal-700: #0f756d;\n  --teal-800: #115f5a;\n  --teal-900: #134e4a;\n  --violet-50: #f6f5ff;\n  --violet-100: #ebe7fe;\n  --violet-200: #ded7fe;\n  --violet-300: #c3b4fd;\n  --violet-400: #a689fa;\n  --violet-500: #895af6;\n  --violet-600: #7c3bed;\n  --violet-700: #6b26d9;\n  --violet-800: #5a21b5;\n  --violet-900: #4d1d95;\n}\n\n@media (prefers-color-scheme: dark) {\n  :root {\n    --shadow-xs: 0px 0.5px 0px #525252;\n    --shadow-sm: 0px 1px 1px rgba(18, 18, 18, 0.3019607843);\n    --shadow-m: 0px 2.5px 4px rgba(18, 18, 18, 0.6509803922);\n    --shadow-lg: 0px 3px 5px rgba(18, 18, 18, 0.8);\n    --shadow-xl: 0px 2.5px 8px #121212;\n    --shadow-2xl: 0px 4px 12px #121212;\n    --shadow-flat: 0px 1px 0px #434343;\n    --shadow-in: inset 0px 1px 2px rgba(255, 255, 255, 0.24);\n    --base-00: #141414;\n    --base-50: rgba(255, 255, 255, 0.0509803922);\n    --base-100: rgba(255, 255, 255, 0.1019607843);\n    --base-200: rgba(255, 255, 255, 0.2);\n    --base-300: rgba(255, 255, 255, 0.3019607843);\n    --base-400: rgba(255, 255, 255, 0.4);\n    --base-500: rgba(255, 255, 255, 0.5019607843);\n    --base-600: rgba(255, 255, 255, 0.6);\n    --base-700: rgba(255, 255, 255, 0.7019607843);\n    --base-800: rgba(255, 255, 255, 0.8);\n    --base-900: #ffffff;\n    --primary-50: #1d223f;\n    --primary-100: #0a318c;\n    --primary-200: #1347cc;\n    --primary-300: #1055ea;\n    --primary-400: #357aea;\n    --primary-500: #2e88f6;\n    --primary-600: #50a1ff;\n    --primary-700: #7ab7ff;\n    --primary-800: #dcebfe;\n    --primary-900: #f0f6ff;\n    --secondary-50: #35194a;\n    --secondary-100: #4e1d72;\n    --secondary-200: #7e22ce;\n    --secondary-300: #9c40ec;\n    --secondary-400: #ab57ff;\n    --secondary-500: #d07fff;\n    --secondary-600: #e9a0ff;\n    --secondary-700: #ffbcff;\n    --secondary-800: #ffd6ff;\n    --secondary-900: #ffefff;\n    --tertiary-50: #272727;\n    --tertiary-100: #333333;\n    --tertiary-200: #434343;\n    --tertiary-300: #5f5f5f;\n    --tertiary-400: #747474;\n    --tertiary-500: #878787;\n    --tertiary-600: #9b9b9b;\n    --tertiary-700: #b9b9b9;\n    --tertiary-800: #d7d7d7;\n    --tertiary-900: #efefef;\n    --success-50: #0e3619;\n    --success-100: #14522d;\n    --success-200: #166434;\n    --success-300: #119541;\n    --success-400: #21c45d;\n    --success-500: #4ade80;\n    --success-600: #85efac;\n    --success-700: #bbf7d0;\n    --success-800: #defce9;\n    --success-900: #f2fdf5;\n    --warning-50: #5d2323;\n    --warning-100: #781f1f;\n    --warning-200: #ae4040;\n    --warning-300: #dc3d3d;\n    --warning-400: #f64d4d;\n    --warning-500: #ff6262;\n    --warning-600: #ff9393;\n    --warning-700: #ffa7a7;\n    --warning-800: #ffbbbb;\n    --warning-900: #fed0d0;\n    --highlight-50: #413d17;\n    --highlight-100: #864e0e;\n    --highlight-200: #a26107;\n    --highlight-300: #c88a04;\n    --highlight-400: #e7b008;\n    --highlight-500: #facc14;\n    --highlight-600: #fddf49;\n    --highlight-700: #fef08b;\n    --highlight-800: #fefacb;\n    --highlight-900: #fefce6;\n    --blue-gray-50: #0f1729;\n    --blue-gray-100: #1d283a;\n    --blue-gray-200: #344256;\n    --blue-gray-300: #48566a;\n    --blue-gray-400: #65758b;\n    --blue-gray-500: #94a3b8;\n    --blue-gray-600: #cbd5e1;\n    --blue-gray-700: #e1e7ef;\n    --blue-gray-800: #f1f5f9;\n    --blue-gray-900: #f8fafc;\n    --bronze-50: #1c1917;\n    --bronze-100: #292524;\n    --bronze-200: #44403c;\n    --bronze-300: #56524e;\n    --bronze-400: #78726d;\n    --bronze-500: #a8a29f;\n    --bronze-600: #d6d3d1;\n    --bronze-700: #e7e5e4;\n    --bronze-800: #f5f5f4;\n    --bronze-900: #fafaf9;\n    --cyan-50: #164f64;\n    --cyan-100: #155f75;\n    --cyan-200: #0e7490;\n    --cyan-300: #088eaf;\n    --cyan-400: #07b6d5;\n    --cyan-500: #20d3ee;\n    --cyan-600: #20d3ee;\n    --cyan-700: #67e8f9;\n    --cyan-800: #cdfafe;\n    --cyan-900: #ebfeff;\n    --emerald-50: #064c39;\n    --emerald-100: #066046;\n    --emerald-200: #047756;\n    --emerald-300: #059467;\n    --emerald-400: #10b77f;\n    --emerald-500: #36d399;\n    --emerald-600: #6ee7b7;\n    --emerald-700: #a5f3cf;\n    --emerald-800: #d1fae5;\n    --emerald-900: #edfdf5;\n    --fuchsia-50: #701076;\n    --fuchsia-100: #85198f;\n    --fuchsia-200: #a31daf;\n    --fuchsia-300: #bf27d3;\n    --fuchsia-400: #d948ef;\n    --fuchsia-500: #e87bf9;\n    --fuchsia-600: #f0abfc;\n    --fuchsia-700: #f5d2fe;\n    --fuchsia-800: #f9e5ff;\n    --fuchsia-900: #fdf5ff;\n    --indigo-50: #312e7f;\n    --indigo-100: #372fa2;\n    --indigo-200: #463acb;\n    --indigo-300: #5048e5;\n    --indigo-400: #6467f2;\n    --indigo-500: #828df8;\n    --indigo-600: #a6b4fc;\n    --indigo-700: #c8d3fe;\n    --indigo-800: #e0e8ff;\n    --indigo-900: #f0f3ff;\n    --light-blue-50: #0c4a6e;\n    --light-blue-100: #075783;\n    --light-blue-200: #0369a0;\n    --light-blue-300: #0284c5;\n    --light-blue-400: #0da2e7;\n    --light-blue-500: #3abff8;\n    --light-blue-600: #7ed4fc;\n    --light-blue-700: #bae5fd;\n    --light-blue-800: #e1f3fe;\n    --light-blue-900: #f0f9ff;\n    --lime-50: #355214;\n    --lime-100: #406312;\n    --lime-200: #4c7b0f;\n    --lime-300: #66a50d;\n    --lime-400: #82cb15;\n    --lime-500: #a1e633;\n    --lime-600: #bef263;\n    --lime-700: #d9f99f;\n    --lime-800: #ebfcca;\n    --lime-900: #f7fee7;\n    --metal-100: #1f2937;\n    --metal-200: #384252;\n    --metal-300: #4b5563;\n    --metal-400: #6b7280;\n    --metal-500: #9ca3b0;\n    --metal-600: #d1d5db;\n    --metal-700: #e5e7eb;\n    --metal-800: #f3f4f6;\n    --metal-900: #f9fafb;\n    --orange-50: #582817;\n    --orange-100: #9b3412;\n    --orange-200: #af4d2c;\n    --orange-300: #e05f03;\n    --orange-400: #f97415;\n    --orange-500: #fb923c;\n    --orange-600: #fdba72;\n    --orange-700: #fed6a9;\n    --orange-800: #ffedd6;\n    --orange-900: #fff6eb;\n    --pink-50: #811842;\n    --pink-100: #9b174c;\n    --pink-200: #bf185d;\n    --pink-300: #db2979;\n    --pink-400: #ec4699;\n    --pink-500: #f471b5;\n    --pink-600: #f9a9d5;\n    --pink-700: #fbd0e8;\n    --pink-800: #fce8f4;\n    --pink-900: #fdf2f8;\n    --rose-50: #861336;\n    --rose-100: #a1123a;\n    --rose-200: #bf123d;\n    --rose-300: #e21d48;\n    --rose-400: #f43e5c;\n    --rose-500: #fb6f84;\n    --rose-600: #fda5af;\n    --rose-700: #fecdd3;\n    --rose-800: #ffe5e7;\n    --rose-900: #fff0f1;\n    --teal-50: #134e4a;\n    --teal-100: #115f5a;\n    --teal-200: #0f756d;\n    --teal-300: #0f756d;\n    --teal-400: #14b8a4;\n    --teal-500: #2bd4bd;\n    --teal-600: #5dead5;\n    --teal-700: #98f6e3;\n    --teal-800: #cbfbf0;\n    --teal-900: #f2fdfa;\n    --violet-50: #282056;\n    --violet-100: #4d1d95;\n    --violet-200: #533dab;\n    --violet-300: #7c3bed;\n    --violet-400: #895af6;\n    --violet-500: #a689fa;\n    --violet-600: #c3b4fd;\n    --violet-700: #ded7fe;\n    --violet-800: #ebe7fe;\n    --violet-900: #f6f5ff;\n  }\n}\n* {\n  box-sizing: border-box;\n  outline: none;\n  padding: 0;\n  margin: 0;\n}\n\n@media (prefers-color-scheme: dark) {\n  html {\n    color-scheme: dark;\n  }\n}\n.ds__ProgressRadial {\n  position: relative;\n  height: 100px;\n  width: 100px;\n}\n.ds__ProgressRadial .ds__ProgressRadial__ring {\n  width: 100%;\n  height: 100%;\n}\n.ds__ProgressRadial .ds__ProgressRadial__ring .fg {\n  stroke-width: 12px;\n  stroke: var(--primary-600);\n}\n.ds__ProgressRadial .ds__ProgressRadial__ring .bg {\n  stroke-width: 12px;\n  stroke: var(--base-50);\n}\n.ds__ProgressRadial .ds__ProgressRadial__info {\n  top: 50%;\n  left: 50%;\n  display: grid;\n  display: flex;\n  position: absolute;\n  align-items: center;\n  flex-direction: column;\n  justify-content: center;\n  transform: translate(-50%, -50%);\n}\n.ds__ProgressRadial .ds__ProgressRadial__info .icon {\n  width: 24px;\n  height: 24px;\n}\n.ds__ProgressRadial .ds__ProgressRadial__info .icon path {\n  fill: var(--base-50);\n}\n.ds__ProgressRadial .ds__ProgressRadial__info .label {\n  font-family: \"Inter\", sans-serif;\n  margin: 0;\n  font-style: normal;\n  letter-spacing: 0%;\n  text-align: left;\n  font-weight: 500;\n  text-transform: none;\n  text-decoration: none;\n  font-size: 12px;\n  line-height: 16px;\n}\n.ds__ProgressRadial .ds__ProgressRadial__info .progress {\n  font-family: \"Inter\", sans-serif;\n  margin: 0;\n  font-style: normal;\n  letter-spacing: 0%;\n  text-align: left;\n  font-weight: 500;\n  text-transform: none;\n  text-decoration: none;\n  font-size: 14px;\n  line-height: 20px;\n}\n.ds__ProgressRadial[data-status=success] .ds__ProgressRadial__ring .fg {\n  stroke: var(--success-500);\n}\n.ds__ProgressRadial[data-status=success] .ds__ProgressRadial__info .icon path {\n  fill: var(--success-500);\n}\n.ds__ProgressRadial[data-status=success] .ds__ProgressRadial__info .label {\n  color: var(--success-500);\n}\n.ds__ProgressRadial[data-status=error] .ds__ProgressRadial__ring .fg {\n  stroke: var(--warning-500);\n}\n.ds__ProgressRadial[data-status=error] .ds__ProgressRadial__info .icon path {\n  fill: var(--warning-500);\n}\n.ds__ProgressRadial[data-status=error] .ds__ProgressRadial__info .label {\n  color: var(--warning-500);\n}\n.ds__ProgressRadial[data-size=small] {\n  width: 80px;\n  height: 80px;\n}\n.ds__ProgressRadial[data-size=small] .ds__ProgressRadial__info .icon {\n  width: 20px;\n  height: 20px;\n}\n.ds__ProgressRadial[data-size=small] .ds__ProgressRadial__info .label {\n  font-family: \"Inter\", sans-serif;\n  margin: 0;\n  font-style: normal;\n  letter-spacing: 0%;\n  text-align: left;\n  font-weight: 500;\n  text-transform: none;\n  text-decoration: none;\n  font-size: 12px;\n  line-height: 16px;\n}\n.ds__ProgressRadial[data-size=small] .ds__ProgressRadial__info .progress {\n  font-family: \"Inter\", sans-serif;\n  margin: 0;\n  font-style: normal;\n  letter-spacing: 0%;\n  text-align: left;\n  font-weight: 500;\n  text-transform: none;\n  text-decoration: none;\n  font-size: 14px;\n  line-height: 20px;\n}\n.ds__ProgressRadial[data-size=large] {\n  width: 120px;\n  height: 120px;\n}\n.ds__ProgressRadial[data-size=large] .ds__ProgressRadial__info .icon {\n  width: 28px;\n  height: 28px;\n}\n.ds__ProgressRadial[data-size=large] .ds__ProgressRadial__info .label {\n  font-family: \"Inter\", sans-serif;\n  margin: 0;\n  font-style: normal;\n  letter-spacing: 0%;\n  text-align: left;\n  font-weight: 500;\n  text-transform: none;\n  text-decoration: none;\n  font-size: 14px;\n  line-height: 20px;\n}\n.ds__ProgressRadial[data-size=large] .ds__ProgressRadial__info .progress {\n  font-family: \"Inter\", sans-serif;\n  margin: 0;\n  font-style: normal;\n  letter-spacing: 0%;\n  text-align: left;\n  font-weight: 500;\n  text-transform: none;\n  text-decoration: none;\n  font-size: 18px;\n  line-height: 30px;\n}";
styleInject(css_248z$4);

// Generated with util/createComponent.js
var ProgressRadial = function (props, ref) {
    var _a = props.status, status = _a === void 0 ? "default" : _a, _b = props.percentage, percentage = _b === void 0 ? 0 : _b, _c = props.size, size = _c === void 0 ? "default" : _c;
    var polarToCartesian = function (centerX, centerY, radius, angleInDegrees) {
        var angleInRadians = ((angleInDegrees - 90) * Math.PI) / 180.0;
        return {
            x: centerX + radius * Math.cos(angleInRadians),
            y: centerY + radius * Math.sin(angleInRadians),
        };
    };
    var describeArc = function (percentage) {
        var x = 100;
        var y = 100;
        var radius = 90;
        var startAngle = 0;
        var endAngle = (percentage / 100) * 359;
        var start = polarToCartesian(x, y, radius, endAngle);
        var end = polarToCartesian(x, y, radius, startAngle);
        var largeArcFlag = endAngle - startAngle <= 180 ? "0" : "1";
        var d = ["M", start.x, start.y, "A", radius, radius, 0, largeArcFlag, 0, end.x, end.y].join(" ");
        return d;
    };
    return (React.createElement("div", { ref: ref, className: "ds__ProgressRadial", "data-testid": "ProgressRadial", "data-status": status, "data-size": size },
        React.createElement("svg", { fill: "none", width: "200", height: "200", viewBox: "0 0 200 200", xmlns: "http://www.w3.org/2000/svg", className: "ds__ProgressRadial__ring" },
            React.createElement("path", { fill: "none", stroke: "gray", className: "bg", strokeLinecap: "round", d: describeArc(100) }),
            React.createElement("path", { fill: "none", stroke: "gray", className: "fg", strokeLinecap: "round", d: describeArc(Number(percentage)) })),
        React.createElement("div", { className: "ds__ProgressRadial__info" }, status === "success" ? (React.createElement(react.exports.Fragment, null,
            React.createElement(CheckSVG$1, { className: "icon" }),
            React.createElement("p", { className: "label" }, "Success!"))) : status === "error" ? (React.createElement(react.exports.Fragment, null,
            React.createElement(CrossSVG, { className: "icon" }),
            React.createElement("p", { className: "label" }, "Error"))) : (React.createElement("p", { className: "progress" },
            Number(percentage).toFixed(0),
            React.createElement("span", null, "%"))))));
};
var ProgressRadial$1 = React.forwardRef(ProgressRadial);
var CheckSVG$1 = function (props) { return (React.createElement("svg", { width: "24", height: "24", fill: "none", viewBox: "0 0 24 24", className: props.className, xmlns: "http://www.w3.org/2000/svg" },
    React.createElement("path", { d: "M9.39739 16.0237L19.8077 5.54269C20.1947 5.15247 20.8222 5.15246 21.2094 5.54253C21.5967 5.93278 21.5969 6.56588 21.2098 6.95627L10.107 18.1355C9.71588 18.5293 9.07892 18.5293 8.68786 18.1355L2.79027 12.1964C2.40324 11.8061 2.40324 11.1735 2.79027 10.7832C3.17729 10.393 3.80478 10.393 4.1918 10.7832L9.39739 16.0237Z", fill: "#1AC057" }))); };
var CrossSVG = function (props) { return (React.createElement("svg", { width: "24", height: "24", fill: "none", viewBox: "0 0 24 24", className: props.className, xmlns: "http://www.w3.org/2000/svg" },
    React.createElement("path", { d: "M12 10.5857L17.243 5.34274C17.6335 4.95228 18.2665 4.95228 18.657 5.34274C19.0475 5.73321 19.0475 6.36628 18.657 6.75674L13.414 11.9997L18.657 17.2427C19.0475 17.6332 19.0475 18.2663 18.657 18.6567C18.2665 19.0472 17.6335 19.0472 17.243 18.6567L12 13.4137L6.75699 18.6567C6.36652 19.0472 5.73345 19.0472 5.34299 18.6567C4.95252 18.2663 4.95252 17.6332 5.34299 17.2427L10.586 11.9997L5.34299 6.75674C4.95252 6.36628 4.95252 5.73321 5.34299 5.34274C5.73345 4.95228 6.36652 4.95228 6.75699 5.34274L12 10.5857Z", fill: "#EF4343" }))); };

var css_248z$3 = "@import url(\"https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap\");\n:root {\n  --round-xs: 2px;\n  --round-s: 4px;\n  --round-m: 8px;\n  --round-l: 12px;\n  --round-xl: 16px;\n  --round-xxl: 20px;\n  --padding-xxs: 2px;\n  --padding-xs: 4px;\n  --padding-s: 8px;\n  --padding-m: 12px;\n  --padding-l: 16px;\n  --padding-xl: 20px;\n  --padding-xxl: 24px;\n  --shadow-xs: 0px 1px 2px 0px rgba(0, 0, 0, 0.0509803922);\n  --shadow-sm: 0px 1px 3px 0px rgba(0, 0, 0, 0.0784313725);\n  --shadow-m: 0px 1.5px 4px -1px rgba(0, 0, 0, 0.1215686275);\n  --shadow-lg: 0px 4px 6px -2px rgba(0, 0, 0, 0.1019607843), 0px 10px 15px -3px rgba(0, 0, 0, 0.0509803922);\n  --shadow-xl: 0px 10px 10px -5px rgba(0, 0, 0, 0.1019607843), 0px 20px 25px -5px rgba(0, 0, 0, 0.0392156863);\n  --shadow-2xl: 0px 25px 50px -12px rgba(0, 0, 0, 0.2509803922);\n  --shadow-flat: 0px 1px 0px #e4e4e7;\n  --shadow-in: inset 0px 2px 4px #525252;\n  --base-00: #ffffff;\n  --base-50: rgba(26, 26, 26, 0.0509803922);\n  --base-100: rgba(26, 26, 26, 0.1019607843);\n  --base-200: rgba(26, 26, 26, 0.2);\n  --base-300: rgba(26, 26, 26, 0.3019607843);\n  --base-400: rgba(26, 26, 26, 0.4);\n  --base-500: rgba(26, 26, 26, 0.5019607843);\n  --base-600: rgba(26, 26, 26, 0.6);\n  --base-700: rgba(26, 26, 26, 0.7019607843);\n  --base-800: rgba(26, 26, 26, 0.8);\n  --base-900: #1a1a1a;\n  --primary-50: #f2f7ff;\n  --primary-100: #dcebfe;\n  --primary-200: #bedbfe;\n  --primary-300: #91c3fd;\n  --primary-400: #61a6fa;\n  --primary-500: #3479e9;\n  --primary-600: #2463eb;\n  --primary-700: #1d4fd7;\n  --primary-800: #1e3fae;\n  --primary-900: #1e3b8a;\n  --secondary-50: #faf5ff;\n  --secondary-100: #f2e5ff;\n  --secondary-200: #ead6ff;\n  --secondary-300: #d8b4fe;\n  --secondary-400: #bf83fc;\n  --secondary-500: #a855f7;\n  --secondary-600: #9234ea;\n  --secondary-700: #7e22ce;\n  --secondary-800: #6a21a6;\n  --secondary-900: #591c87;\n  --tertiary-50: #fdfdfd;\n  --tertiary-100: #f4f4f5;\n  --tertiary-200: #e4e4e7;\n  --tertiary-300: #d4d4d8;\n  --tertiary-400: #a1a1aa;\n  --tertiary-500: #71717a;\n  --tertiary-600: #52525b;\n  --tertiary-700: #3f3f46;\n  --tertiary-800: #27272a;\n  --tertiary-900: #18181b;\n  --success-50: #f2fdf5;\n  --success-100: #defce9;\n  --success-200: #bbf7d0;\n  --success-300: #85efac;\n  --success-400: #4ade80;\n  --success-500: #1ac057;\n  --success-600: #16a249;\n  --success-700: #157f3c;\n  --success-800: #1c713c;\n  --success-900: #114c29;\n  --warning-50: #fef1f1;\n  --warning-100: #fee1e1;\n  --warning-200: #fec8c8;\n  --warning-300: #fca6a6;\n  --warning-400: #fd6b6b;\n  --warning-500: #ef4343;\n  --warning-600: #dc2828;\n  --warning-700: #ba1c1c;\n  --warning-800: #981b1b;\n  --warning-900: #811d1d;\n  --highlight-50: #fefce7;\n  --highlight-100: #fef9c3;\n  --highlight-200: #fef08b;\n  --highlight-300: #fddf49;\n  --highlight-400: #facc14;\n  --highlight-500: #e7b008;\n  --highlight-600: #c88a04;\n  --highlight-700: #a26107;\n  --highlight-800: #864e0e;\n  --highlight-900: #733f12;\n  --blue-gray-50: #f8fafc;\n  --blue-gray-100: #f1f5f9;\n  --blue-gray-200: #e1e7ef;\n  --blue-gray-300: #cbd5e1;\n  --blue-gray-400: #94a3b8;\n  --blue-gray-500: #65758b;\n  --blue-gray-600: #48566a;\n  --blue-gray-700: #344256;\n  --blue-gray-800: #1d283a;\n  --blue-gray-900: #0f1729;\n  --bronze-50: #fafaf9;\n  --bronze-100: #f5f5f4;\n  --bronze-200: #e7e5e4;\n  --bronze-300: #d6d3d1;\n  --bronze-400: #a8a29f;\n  --bronze-500: #78726d;\n  --bronze-600: #56524e;\n  --bronze-700: #44403c;\n  --bronze-800: #292524;\n  --bronze-900: #1c1917;\n  --cyan-50: #ebfeff;\n  --cyan-100: #cdfafe;\n  --cyan-200: #a6f3fc;\n  --cyan-300: #67e8f9;\n  --cyan-400: #20d3ee;\n  --cyan-500: #07b6d5;\n  --cyan-600: #088eaf;\n  --cyan-700: #0e7490;\n  --cyan-800: #155f75;\n  --cyan-900: #164f64;\n  --emerald-50: #edfdf5;\n  --emerald-100: #d1fae5;\n  --emerald-200: #a5f3cf;\n  --emerald-300: #6ee7b7;\n  --emerald-400: #36d399;\n  --emerald-500: #10b77f;\n  --emerald-600: #059467;\n  --emerald-700: #047656;\n  --emerald-800: #066046;\n  --emerald-900: #064b39;\n  --fuchsia-50: #fdf5ff;\n  --fuchsia-100: #f9e5ff;\n  --fuchsia-200: #f5d2fe;\n  --fuchsia-300: #f0abfc;\n  --fuchsia-400: #e87bf9;\n  --fuchsia-500: #d948ef;\n  --fuchsia-600: #bf27d3;\n  --fuchsia-700: #a31daf;\n  --fuchsia-800: #85198f;\n  --fuchsia-900: #711a75;\n  --indigo-50: #f0f3ff;\n  --indigo-100: #e0e8ff;\n  --indigo-200: #c8d3fe;\n  --indigo-300: #a6b4fc;\n  --indigo-400: #828df8;\n  --indigo-500: #6467f2;\n  --indigo-600: #5048e5;\n  --indigo-700: #463acb;\n  --indigo-800: #372fa2;\n  --indigo-900: #312e7f;\n  --light-blue-50: #f0f9ff;\n  --light-blue-100: #e1f3fe;\n  --light-blue-200: #bae5fd;\n  --light-blue-300: #7ed4fc;\n  --light-blue-400: #3abff8;\n  --light-blue-500: #0da2e7;\n  --light-blue-600: #0284c5;\n  --light-blue-700: #0369a0;\n  --light-blue-800: #075783;\n  --light-blue-900: #0c4a6e;\n  --lime-50: #f7fee7;\n  --lime-100: #ebfcca;\n  --lime-200: #d9f99f;\n  --lime-300: #bef263;\n  --lime-400: #a1e633;\n  --lime-500: #82cb15;\n  --lime-600: #66a50d;\n  --lime-700: #4c7b0f;\n  --lime-800: #406312;\n  --lime-900: #355214;\n  --metal-50: #f9fafb;\n  --metal-100: #f3f4f6;\n  --metal-200: #e5e7eb;\n  --metal-300: #d1d5db;\n  --metal-400: #9ca3b0;\n  --metal-500: #6b7280;\n  --metal-600: #4b5563;\n  --metal-700: #384252;\n  --metal-800: #1f2937;\n  --metal-900: #111827;\n  --orange-50: #fff6eb;\n  --orange-200: #fed6a9;\n  --orange-400: #fb923c;\n  --pink-50: #fdf2f8;\n  --pink-100: #fce8f4;\n  --pink-200: #fbd0e8;\n  --pink-300: #f9a9d5;\n  --pink-400: #f471b5;\n  --pink-500: #ec4699;\n  --pink-600: #db2979;\n  --pink-700: #bf185d;\n  --pink-800: #9b174c;\n  --pink-900: #811842;\n  --rose-50: #fff0f1;\n  --rose-100: #ffe5e7;\n  --rose-200: #fecdd3;\n  --rose-300: #fda5af;\n  --rose-400: #fb6f84;\n  --rose-500: #f43e5c;\n  --rose-600: #e21d48;\n  --rose-700: #bf123d;\n  --rose-800: #a1123a;\n  --rose-900: #861336;\n  --teal-50: #f2fdfa;\n  --teal-100: #cbfbf0;\n  --teal-200: #98f6e3;\n  --teal-300: #5dead5;\n  --teal-400: #2bd4bd;\n  --teal-500: #14b8a5;\n  --teal-600: #0d968b;\n  --teal-700: #0f756d;\n  --teal-800: #115f5a;\n  --teal-900: #134e4a;\n  --violet-50: #f6f5ff;\n  --violet-100: #ebe7fe;\n  --violet-200: #ded7fe;\n  --violet-300: #c3b4fd;\n  --violet-400: #a689fa;\n  --violet-500: #895af6;\n  --violet-600: #7c3bed;\n  --violet-700: #6b26d9;\n  --violet-800: #5a21b5;\n  --violet-900: #4d1d95;\n}\n\n@media (prefers-color-scheme: dark) {\n  :root {\n    --shadow-xs: 0px 0.5px 0px #525252;\n    --shadow-sm: 0px 1px 1px rgba(18, 18, 18, 0.3019607843);\n    --shadow-m: 0px 2.5px 4px rgba(18, 18, 18, 0.6509803922);\n    --shadow-lg: 0px 3px 5px rgba(18, 18, 18, 0.8);\n    --shadow-xl: 0px 2.5px 8px #121212;\n    --shadow-2xl: 0px 4px 12px #121212;\n    --shadow-flat: 0px 1px 0px #434343;\n    --shadow-in: inset 0px 1px 2px rgba(255, 255, 255, 0.24);\n    --base-00: #141414;\n    --base-50: rgba(255, 255, 255, 0.0509803922);\n    --base-100: rgba(255, 255, 255, 0.1019607843);\n    --base-200: rgba(255, 255, 255, 0.2);\n    --base-300: rgba(255, 255, 255, 0.3019607843);\n    --base-400: rgba(255, 255, 255, 0.4);\n    --base-500: rgba(255, 255, 255, 0.5019607843);\n    --base-600: rgba(255, 255, 255, 0.6);\n    --base-700: rgba(255, 255, 255, 0.7019607843);\n    --base-800: rgba(255, 255, 255, 0.8);\n    --base-900: #ffffff;\n    --primary-50: #1d223f;\n    --primary-100: #0a318c;\n    --primary-200: #1347cc;\n    --primary-300: #1055ea;\n    --primary-400: #357aea;\n    --primary-500: #2e88f6;\n    --primary-600: #50a1ff;\n    --primary-700: #7ab7ff;\n    --primary-800: #dcebfe;\n    --primary-900: #f0f6ff;\n    --secondary-50: #35194a;\n    --secondary-100: #4e1d72;\n    --secondary-200: #7e22ce;\n    --secondary-300: #9c40ec;\n    --secondary-400: #ab57ff;\n    --secondary-500: #d07fff;\n    --secondary-600: #e9a0ff;\n    --secondary-700: #ffbcff;\n    --secondary-800: #ffd6ff;\n    --secondary-900: #ffefff;\n    --tertiary-50: #272727;\n    --tertiary-100: #333333;\n    --tertiary-200: #434343;\n    --tertiary-300: #5f5f5f;\n    --tertiary-400: #747474;\n    --tertiary-500: #878787;\n    --tertiary-600: #9b9b9b;\n    --tertiary-700: #b9b9b9;\n    --tertiary-800: #d7d7d7;\n    --tertiary-900: #efefef;\n    --success-50: #0e3619;\n    --success-100: #14522d;\n    --success-200: #166434;\n    --success-300: #119541;\n    --success-400: #21c45d;\n    --success-500: #4ade80;\n    --success-600: #85efac;\n    --success-700: #bbf7d0;\n    --success-800: #defce9;\n    --success-900: #f2fdf5;\n    --warning-50: #5d2323;\n    --warning-100: #781f1f;\n    --warning-200: #ae4040;\n    --warning-300: #dc3d3d;\n    --warning-400: #f64d4d;\n    --warning-500: #ff6262;\n    --warning-600: #ff9393;\n    --warning-700: #ffa7a7;\n    --warning-800: #ffbbbb;\n    --warning-900: #fed0d0;\n    --highlight-50: #413d17;\n    --highlight-100: #864e0e;\n    --highlight-200: #a26107;\n    --highlight-300: #c88a04;\n    --highlight-400: #e7b008;\n    --highlight-500: #facc14;\n    --highlight-600: #fddf49;\n    --highlight-700: #fef08b;\n    --highlight-800: #fefacb;\n    --highlight-900: #fefce6;\n    --blue-gray-50: #0f1729;\n    --blue-gray-100: #1d283a;\n    --blue-gray-200: #344256;\n    --blue-gray-300: #48566a;\n    --blue-gray-400: #65758b;\n    --blue-gray-500: #94a3b8;\n    --blue-gray-600: #cbd5e1;\n    --blue-gray-700: #e1e7ef;\n    --blue-gray-800: #f1f5f9;\n    --blue-gray-900: #f8fafc;\n    --bronze-50: #1c1917;\n    --bronze-100: #292524;\n    --bronze-200: #44403c;\n    --bronze-300: #56524e;\n    --bronze-400: #78726d;\n    --bronze-500: #a8a29f;\n    --bronze-600: #d6d3d1;\n    --bronze-700: #e7e5e4;\n    --bronze-800: #f5f5f4;\n    --bronze-900: #fafaf9;\n    --cyan-50: #164f64;\n    --cyan-100: #155f75;\n    --cyan-200: #0e7490;\n    --cyan-300: #088eaf;\n    --cyan-400: #07b6d5;\n    --cyan-500: #20d3ee;\n    --cyan-600: #20d3ee;\n    --cyan-700: #67e8f9;\n    --cyan-800: #cdfafe;\n    --cyan-900: #ebfeff;\n    --emerald-50: #064c39;\n    --emerald-100: #066046;\n    --emerald-200: #047756;\n    --emerald-300: #059467;\n    --emerald-400: #10b77f;\n    --emerald-500: #36d399;\n    --emerald-600: #6ee7b7;\n    --emerald-700: #a5f3cf;\n    --emerald-800: #d1fae5;\n    --emerald-900: #edfdf5;\n    --fuchsia-50: #701076;\n    --fuchsia-100: #85198f;\n    --fuchsia-200: #a31daf;\n    --fuchsia-300: #bf27d3;\n    --fuchsia-400: #d948ef;\n    --fuchsia-500: #e87bf9;\n    --fuchsia-600: #f0abfc;\n    --fuchsia-700: #f5d2fe;\n    --fuchsia-800: #f9e5ff;\n    --fuchsia-900: #fdf5ff;\n    --indigo-50: #312e7f;\n    --indigo-100: #372fa2;\n    --indigo-200: #463acb;\n    --indigo-300: #5048e5;\n    --indigo-400: #6467f2;\n    --indigo-500: #828df8;\n    --indigo-600: #a6b4fc;\n    --indigo-700: #c8d3fe;\n    --indigo-800: #e0e8ff;\n    --indigo-900: #f0f3ff;\n    --light-blue-50: #0c4a6e;\n    --light-blue-100: #075783;\n    --light-blue-200: #0369a0;\n    --light-blue-300: #0284c5;\n    --light-blue-400: #0da2e7;\n    --light-blue-500: #3abff8;\n    --light-blue-600: #7ed4fc;\n    --light-blue-700: #bae5fd;\n    --light-blue-800: #e1f3fe;\n    --light-blue-900: #f0f9ff;\n    --lime-50: #355214;\n    --lime-100: #406312;\n    --lime-200: #4c7b0f;\n    --lime-300: #66a50d;\n    --lime-400: #82cb15;\n    --lime-500: #a1e633;\n    --lime-600: #bef263;\n    --lime-700: #d9f99f;\n    --lime-800: #ebfcca;\n    --lime-900: #f7fee7;\n    --metal-100: #1f2937;\n    --metal-200: #384252;\n    --metal-300: #4b5563;\n    --metal-400: #6b7280;\n    --metal-500: #9ca3b0;\n    --metal-600: #d1d5db;\n    --metal-700: #e5e7eb;\n    --metal-800: #f3f4f6;\n    --metal-900: #f9fafb;\n    --orange-50: #582817;\n    --orange-100: #9b3412;\n    --orange-200: #af4d2c;\n    --orange-300: #e05f03;\n    --orange-400: #f97415;\n    --orange-500: #fb923c;\n    --orange-600: #fdba72;\n    --orange-700: #fed6a9;\n    --orange-800: #ffedd6;\n    --orange-900: #fff6eb;\n    --pink-50: #811842;\n    --pink-100: #9b174c;\n    --pink-200: #bf185d;\n    --pink-300: #db2979;\n    --pink-400: #ec4699;\n    --pink-500: #f471b5;\n    --pink-600: #f9a9d5;\n    --pink-700: #fbd0e8;\n    --pink-800: #fce8f4;\n    --pink-900: #fdf2f8;\n    --rose-50: #861336;\n    --rose-100: #a1123a;\n    --rose-200: #bf123d;\n    --rose-300: #e21d48;\n    --rose-400: #f43e5c;\n    --rose-500: #fb6f84;\n    --rose-600: #fda5af;\n    --rose-700: #fecdd3;\n    --rose-800: #ffe5e7;\n    --rose-900: #fff0f1;\n    --teal-50: #134e4a;\n    --teal-100: #115f5a;\n    --teal-200: #0f756d;\n    --teal-300: #0f756d;\n    --teal-400: #14b8a4;\n    --teal-500: #2bd4bd;\n    --teal-600: #5dead5;\n    --teal-700: #98f6e3;\n    --teal-800: #cbfbf0;\n    --teal-900: #f2fdfa;\n    --violet-50: #282056;\n    --violet-100: #4d1d95;\n    --violet-200: #533dab;\n    --violet-300: #7c3bed;\n    --violet-400: #895af6;\n    --violet-500: #a689fa;\n    --violet-600: #c3b4fd;\n    --violet-700: #ded7fe;\n    --violet-800: #ebe7fe;\n    --violet-900: #f6f5ff;\n  }\n}\n* {\n  box-sizing: border-box;\n  outline: none;\n  padding: 0;\n  margin: 0;\n}\n\n@media (prefers-color-scheme: dark) {\n  html {\n    color-scheme: dark;\n  }\n}\n.ds__Stepper {\n  position: relative;\n  display: flex;\n  gap: 8px;\n  align-items: center;\n  height: max-content;\n  width: max-content;\n}\n.ds__Stepper .ds__Stepper__base {\n  width: 26px;\n  height: 26px;\n  display: flex;\n  border-radius: 50%;\n  align-items: center;\n  justify-content: center;\n  background-color: var(--tertiary-300);\n}\n.ds__Stepper .ds__Stepper__base .ring {\n  width: 12px;\n  height: 12px;\n  display: block;\n  border-radius: 50%;\n  background-color: transparent;\n  border: 2px solid var(--base-500);\n}\n.ds__Stepper .ds__Stepper__info {\n  color: var(--base-500);\n  flex-direction: column;\n  display: flex;\n}\n.ds__Stepper .ds__Stepper__info .ds__Stepper__label {\n  font-family: \"Inter\", sans-serif;\n  margin: 0;\n  font-style: normal;\n  letter-spacing: 0%;\n  text-align: left;\n  font-weight: 500;\n  text-transform: none;\n  text-decoration: none;\n  font-size: 18px;\n  line-height: 30px;\n}\n.ds__Stepper .ds__Stepper__info .ds__Stepper__caption {\n  font-family: \"Inter\", sans-serif;\n  margin: 0;\n  font-style: normal;\n  letter-spacing: 0%;\n  text-align: left;\n  font-weight: 500;\n  text-transform: none;\n  text-decoration: none;\n  font-size: 14px;\n  line-height: 20px;\n}\n.ds__Stepper[data-status=complete] .ds__Stepper__base {\n  background-color: var(--primary-600);\n}\n.ds__Stepper[data-status=complete] .ds__Stepper__base .icon {\n  width: 20px;\n  height: 20px;\n}\n.ds__Stepper[data-status=complete] .ds__Stepper__base .icon path {\n  fill: white;\n}\n.ds__Stepper .ds__Stepper__info {\n  color: var(--base-700);\n}\n.ds__Stepper[data-status=current] .ds__Stepper__base {\n  background-color: var(--primary-600);\n}\n.ds__Stepper[data-status=current] .ds__Stepper__base .circle {\n  width: 12px;\n  height: 12px;\n  display: block;\n  border-radius: 50%;\n  background-color: white;\n}\n.ds__Stepper .ds__Stepper__info {\n  color: var(--base-700);\n}\n.ds__Stepper[data-dir=top] {\n  flex-direction: column-reverse;\n}\n.ds__Stepper[data-dir=top] .ds__Stepper__info {\n  align-items: center;\n}\n.ds__Stepper[data-dir=left] {\n  flex-direction: row-reverse;\n}\n.ds__Stepper[data-dir=left] .ds__Stepper__label,\n.ds__Stepper[data-dir=left] .ds__Stepper__caption {\n  text-align: end;\n}\n.ds__Stepper[data-dir=bottom] {\n  flex-direction: column;\n}\n.ds__Stepper[data-dir=bottom] .ds__Stepper__info {\n  align-items: center;\n}";
styleInject(css_248z$3);

// Generated with util/createComponent.js
var Stepper = function (props, ref) {
    var _a = props.status, status = _a === void 0 ? "incomplete" : _a, label = props.label, caption = props.caption, _b = props.direction, direction = _b === void 0 ? "right" : _b;
    return (React.createElement("div", { ref: ref, className: "ds__Stepper", "data-testid": "Stepper", "data-status": status, "data-dir": direction },
        React.createElement("div", { className: "ds__Stepper__base" }, status === "complete" ? (React.createElement(CheckSVG, { className: "icon" })) : status === "current" ? (React.createElement("span", { className: "circle" })) : (React.createElement("span", { className: "ring" }))),
        label && (React.createElement("div", { className: "ds__Stepper__info" },
            React.createElement("p", { className: "ds__Stepper__label" }, label),
            caption && React.createElement("p", { className: "ds__Stepper__caption" }, caption)))));
};
var Stepper$1 = React.forwardRef(Stepper);
var CheckSVG = function (props) { return (React.createElement("svg", { width: "24", height: "24", fill: "none", viewBox: "0 0 24 24", className: props.className, xmlns: "http://www.w3.org/2000/svg" },
    React.createElement("path", { d: "M9.39739 16.0237L19.8077 5.54269C20.1947 5.15247 20.8222 5.15246 21.2094 5.54253C21.5967 5.93278 21.5969 6.56588 21.2098 6.95627L10.107 18.1355C9.71588 18.5293 9.07892 18.5293 8.68786 18.1355L2.79027 12.1964C2.40324 11.8061 2.40324 11.1735 2.79027 10.7832C3.17729 10.393 3.80478 10.393 4.1918 10.7832L9.39739 16.0237Z", fill: "#1AC057" }))); };

var css_248z$2 = "@import url(\"https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap\");\n:root {\n  --round-xs: 2px;\n  --round-s: 4px;\n  --round-m: 8px;\n  --round-l: 12px;\n  --round-xl: 16px;\n  --round-xxl: 20px;\n  --padding-xxs: 2px;\n  --padding-xs: 4px;\n  --padding-s: 8px;\n  --padding-m: 12px;\n  --padding-l: 16px;\n  --padding-xl: 20px;\n  --padding-xxl: 24px;\n  --shadow-xs: 0px 1px 2px 0px rgba(0, 0, 0, 0.0509803922);\n  --shadow-sm: 0px 1px 3px 0px rgba(0, 0, 0, 0.0784313725);\n  --shadow-m: 0px 1.5px 4px -1px rgba(0, 0, 0, 0.1215686275);\n  --shadow-lg: 0px 4px 6px -2px rgba(0, 0, 0, 0.1019607843), 0px 10px 15px -3px rgba(0, 0, 0, 0.0509803922);\n  --shadow-xl: 0px 10px 10px -5px rgba(0, 0, 0, 0.1019607843), 0px 20px 25px -5px rgba(0, 0, 0, 0.0392156863);\n  --shadow-2xl: 0px 25px 50px -12px rgba(0, 0, 0, 0.2509803922);\n  --shadow-flat: 0px 1px 0px #e4e4e7;\n  --shadow-in: inset 0px 2px 4px #525252;\n  --base-00: #ffffff;\n  --base-50: rgba(26, 26, 26, 0.0509803922);\n  --base-100: rgba(26, 26, 26, 0.1019607843);\n  --base-200: rgba(26, 26, 26, 0.2);\n  --base-300: rgba(26, 26, 26, 0.3019607843);\n  --base-400: rgba(26, 26, 26, 0.4);\n  --base-500: rgba(26, 26, 26, 0.5019607843);\n  --base-600: rgba(26, 26, 26, 0.6);\n  --base-700: rgba(26, 26, 26, 0.7019607843);\n  --base-800: rgba(26, 26, 26, 0.8);\n  --base-900: #1a1a1a;\n  --primary-50: #f2f7ff;\n  --primary-100: #dcebfe;\n  --primary-200: #bedbfe;\n  --primary-300: #91c3fd;\n  --primary-400: #61a6fa;\n  --primary-500: #3479e9;\n  --primary-600: #2463eb;\n  --primary-700: #1d4fd7;\n  --primary-800: #1e3fae;\n  --primary-900: #1e3b8a;\n  --secondary-50: #faf5ff;\n  --secondary-100: #f2e5ff;\n  --secondary-200: #ead6ff;\n  --secondary-300: #d8b4fe;\n  --secondary-400: #bf83fc;\n  --secondary-500: #a855f7;\n  --secondary-600: #9234ea;\n  --secondary-700: #7e22ce;\n  --secondary-800: #6a21a6;\n  --secondary-900: #591c87;\n  --tertiary-50: #fdfdfd;\n  --tertiary-100: #f4f4f5;\n  --tertiary-200: #e4e4e7;\n  --tertiary-300: #d4d4d8;\n  --tertiary-400: #a1a1aa;\n  --tertiary-500: #71717a;\n  --tertiary-600: #52525b;\n  --tertiary-700: #3f3f46;\n  --tertiary-800: #27272a;\n  --tertiary-900: #18181b;\n  --success-50: #f2fdf5;\n  --success-100: #defce9;\n  --success-200: #bbf7d0;\n  --success-300: #85efac;\n  --success-400: #4ade80;\n  --success-500: #1ac057;\n  --success-600: #16a249;\n  --success-700: #157f3c;\n  --success-800: #1c713c;\n  --success-900: #114c29;\n  --warning-50: #fef1f1;\n  --warning-100: #fee1e1;\n  --warning-200: #fec8c8;\n  --warning-300: #fca6a6;\n  --warning-400: #fd6b6b;\n  --warning-500: #ef4343;\n  --warning-600: #dc2828;\n  --warning-700: #ba1c1c;\n  --warning-800: #981b1b;\n  --warning-900: #811d1d;\n  --highlight-50: #fefce7;\n  --highlight-100: #fef9c3;\n  --highlight-200: #fef08b;\n  --highlight-300: #fddf49;\n  --highlight-400: #facc14;\n  --highlight-500: #e7b008;\n  --highlight-600: #c88a04;\n  --highlight-700: #a26107;\n  --highlight-800: #864e0e;\n  --highlight-900: #733f12;\n  --blue-gray-50: #f8fafc;\n  --blue-gray-100: #f1f5f9;\n  --blue-gray-200: #e1e7ef;\n  --blue-gray-300: #cbd5e1;\n  --blue-gray-400: #94a3b8;\n  --blue-gray-500: #65758b;\n  --blue-gray-600: #48566a;\n  --blue-gray-700: #344256;\n  --blue-gray-800: #1d283a;\n  --blue-gray-900: #0f1729;\n  --bronze-50: #fafaf9;\n  --bronze-100: #f5f5f4;\n  --bronze-200: #e7e5e4;\n  --bronze-300: #d6d3d1;\n  --bronze-400: #a8a29f;\n  --bronze-500: #78726d;\n  --bronze-600: #56524e;\n  --bronze-700: #44403c;\n  --bronze-800: #292524;\n  --bronze-900: #1c1917;\n  --cyan-50: #ebfeff;\n  --cyan-100: #cdfafe;\n  --cyan-200: #a6f3fc;\n  --cyan-300: #67e8f9;\n  --cyan-400: #20d3ee;\n  --cyan-500: #07b6d5;\n  --cyan-600: #088eaf;\n  --cyan-700: #0e7490;\n  --cyan-800: #155f75;\n  --cyan-900: #164f64;\n  --emerald-50: #edfdf5;\n  --emerald-100: #d1fae5;\n  --emerald-200: #a5f3cf;\n  --emerald-300: #6ee7b7;\n  --emerald-400: #36d399;\n  --emerald-500: #10b77f;\n  --emerald-600: #059467;\n  --emerald-700: #047656;\n  --emerald-800: #066046;\n  --emerald-900: #064b39;\n  --fuchsia-50: #fdf5ff;\n  --fuchsia-100: #f9e5ff;\n  --fuchsia-200: #f5d2fe;\n  --fuchsia-300: #f0abfc;\n  --fuchsia-400: #e87bf9;\n  --fuchsia-500: #d948ef;\n  --fuchsia-600: #bf27d3;\n  --fuchsia-700: #a31daf;\n  --fuchsia-800: #85198f;\n  --fuchsia-900: #711a75;\n  --indigo-50: #f0f3ff;\n  --indigo-100: #e0e8ff;\n  --indigo-200: #c8d3fe;\n  --indigo-300: #a6b4fc;\n  --indigo-400: #828df8;\n  --indigo-500: #6467f2;\n  --indigo-600: #5048e5;\n  --indigo-700: #463acb;\n  --indigo-800: #372fa2;\n  --indigo-900: #312e7f;\n  --light-blue-50: #f0f9ff;\n  --light-blue-100: #e1f3fe;\n  --light-blue-200: #bae5fd;\n  --light-blue-300: #7ed4fc;\n  --light-blue-400: #3abff8;\n  --light-blue-500: #0da2e7;\n  --light-blue-600: #0284c5;\n  --light-blue-700: #0369a0;\n  --light-blue-800: #075783;\n  --light-blue-900: #0c4a6e;\n  --lime-50: #f7fee7;\n  --lime-100: #ebfcca;\n  --lime-200: #d9f99f;\n  --lime-300: #bef263;\n  --lime-400: #a1e633;\n  --lime-500: #82cb15;\n  --lime-600: #66a50d;\n  --lime-700: #4c7b0f;\n  --lime-800: #406312;\n  --lime-900: #355214;\n  --metal-50: #f9fafb;\n  --metal-100: #f3f4f6;\n  --metal-200: #e5e7eb;\n  --metal-300: #d1d5db;\n  --metal-400: #9ca3b0;\n  --metal-500: #6b7280;\n  --metal-600: #4b5563;\n  --metal-700: #384252;\n  --metal-800: #1f2937;\n  --metal-900: #111827;\n  --orange-50: #fff6eb;\n  --orange-200: #fed6a9;\n  --orange-400: #fb923c;\n  --pink-50: #fdf2f8;\n  --pink-100: #fce8f4;\n  --pink-200: #fbd0e8;\n  --pink-300: #f9a9d5;\n  --pink-400: #f471b5;\n  --pink-500: #ec4699;\n  --pink-600: #db2979;\n  --pink-700: #bf185d;\n  --pink-800: #9b174c;\n  --pink-900: #811842;\n  --rose-50: #fff0f1;\n  --rose-100: #ffe5e7;\n  --rose-200: #fecdd3;\n  --rose-300: #fda5af;\n  --rose-400: #fb6f84;\n  --rose-500: #f43e5c;\n  --rose-600: #e21d48;\n  --rose-700: #bf123d;\n  --rose-800: #a1123a;\n  --rose-900: #861336;\n  --teal-50: #f2fdfa;\n  --teal-100: #cbfbf0;\n  --teal-200: #98f6e3;\n  --teal-300: #5dead5;\n  --teal-400: #2bd4bd;\n  --teal-500: #14b8a5;\n  --teal-600: #0d968b;\n  --teal-700: #0f756d;\n  --teal-800: #115f5a;\n  --teal-900: #134e4a;\n  --violet-50: #f6f5ff;\n  --violet-100: #ebe7fe;\n  --violet-200: #ded7fe;\n  --violet-300: #c3b4fd;\n  --violet-400: #a689fa;\n  --violet-500: #895af6;\n  --violet-600: #7c3bed;\n  --violet-700: #6b26d9;\n  --violet-800: #5a21b5;\n  --violet-900: #4d1d95;\n}\n\n@media (prefers-color-scheme: dark) {\n  :root {\n    --shadow-xs: 0px 0.5px 0px #525252;\n    --shadow-sm: 0px 1px 1px rgba(18, 18, 18, 0.3019607843);\n    --shadow-m: 0px 2.5px 4px rgba(18, 18, 18, 0.6509803922);\n    --shadow-lg: 0px 3px 5px rgba(18, 18, 18, 0.8);\n    --shadow-xl: 0px 2.5px 8px #121212;\n    --shadow-2xl: 0px 4px 12px #121212;\n    --shadow-flat: 0px 1px 0px #434343;\n    --shadow-in: inset 0px 1px 2px rgba(255, 255, 255, 0.24);\n    --base-00: #141414;\n    --base-50: rgba(255, 255, 255, 0.0509803922);\n    --base-100: rgba(255, 255, 255, 0.1019607843);\n    --base-200: rgba(255, 255, 255, 0.2);\n    --base-300: rgba(255, 255, 255, 0.3019607843);\n    --base-400: rgba(255, 255, 255, 0.4);\n    --base-500: rgba(255, 255, 255, 0.5019607843);\n    --base-600: rgba(255, 255, 255, 0.6);\n    --base-700: rgba(255, 255, 255, 0.7019607843);\n    --base-800: rgba(255, 255, 255, 0.8);\n    --base-900: #ffffff;\n    --primary-50: #1d223f;\n    --primary-100: #0a318c;\n    --primary-200: #1347cc;\n    --primary-300: #1055ea;\n    --primary-400: #357aea;\n    --primary-500: #2e88f6;\n    --primary-600: #50a1ff;\n    --primary-700: #7ab7ff;\n    --primary-800: #dcebfe;\n    --primary-900: #f0f6ff;\n    --secondary-50: #35194a;\n    --secondary-100: #4e1d72;\n    --secondary-200: #7e22ce;\n    --secondary-300: #9c40ec;\n    --secondary-400: #ab57ff;\n    --secondary-500: #d07fff;\n    --secondary-600: #e9a0ff;\n    --secondary-700: #ffbcff;\n    --secondary-800: #ffd6ff;\n    --secondary-900: #ffefff;\n    --tertiary-50: #272727;\n    --tertiary-100: #333333;\n    --tertiary-200: #434343;\n    --tertiary-300: #5f5f5f;\n    --tertiary-400: #747474;\n    --tertiary-500: #878787;\n    --tertiary-600: #9b9b9b;\n    --tertiary-700: #b9b9b9;\n    --tertiary-800: #d7d7d7;\n    --tertiary-900: #efefef;\n    --success-50: #0e3619;\n    --success-100: #14522d;\n    --success-200: #166434;\n    --success-300: #119541;\n    --success-400: #21c45d;\n    --success-500: #4ade80;\n    --success-600: #85efac;\n    --success-700: #bbf7d0;\n    --success-800: #defce9;\n    --success-900: #f2fdf5;\n    --warning-50: #5d2323;\n    --warning-100: #781f1f;\n    --warning-200: #ae4040;\n    --warning-300: #dc3d3d;\n    --warning-400: #f64d4d;\n    --warning-500: #ff6262;\n    --warning-600: #ff9393;\n    --warning-700: #ffa7a7;\n    --warning-800: #ffbbbb;\n    --warning-900: #fed0d0;\n    --highlight-50: #413d17;\n    --highlight-100: #864e0e;\n    --highlight-200: #a26107;\n    --highlight-300: #c88a04;\n    --highlight-400: #e7b008;\n    --highlight-500: #facc14;\n    --highlight-600: #fddf49;\n    --highlight-700: #fef08b;\n    --highlight-800: #fefacb;\n    --highlight-900: #fefce6;\n    --blue-gray-50: #0f1729;\n    --blue-gray-100: #1d283a;\n    --blue-gray-200: #344256;\n    --blue-gray-300: #48566a;\n    --blue-gray-400: #65758b;\n    --blue-gray-500: #94a3b8;\n    --blue-gray-600: #cbd5e1;\n    --blue-gray-700: #e1e7ef;\n    --blue-gray-800: #f1f5f9;\n    --blue-gray-900: #f8fafc;\n    --bronze-50: #1c1917;\n    --bronze-100: #292524;\n    --bronze-200: #44403c;\n    --bronze-300: #56524e;\n    --bronze-400: #78726d;\n    --bronze-500: #a8a29f;\n    --bronze-600: #d6d3d1;\n    --bronze-700: #e7e5e4;\n    --bronze-800: #f5f5f4;\n    --bronze-900: #fafaf9;\n    --cyan-50: #164f64;\n    --cyan-100: #155f75;\n    --cyan-200: #0e7490;\n    --cyan-300: #088eaf;\n    --cyan-400: #07b6d5;\n    --cyan-500: #20d3ee;\n    --cyan-600: #20d3ee;\n    --cyan-700: #67e8f9;\n    --cyan-800: #cdfafe;\n    --cyan-900: #ebfeff;\n    --emerald-50: #064c39;\n    --emerald-100: #066046;\n    --emerald-200: #047756;\n    --emerald-300: #059467;\n    --emerald-400: #10b77f;\n    --emerald-500: #36d399;\n    --emerald-600: #6ee7b7;\n    --emerald-700: #a5f3cf;\n    --emerald-800: #d1fae5;\n    --emerald-900: #edfdf5;\n    --fuchsia-50: #701076;\n    --fuchsia-100: #85198f;\n    --fuchsia-200: #a31daf;\n    --fuchsia-300: #bf27d3;\n    --fuchsia-400: #d948ef;\n    --fuchsia-500: #e87bf9;\n    --fuchsia-600: #f0abfc;\n    --fuchsia-700: #f5d2fe;\n    --fuchsia-800: #f9e5ff;\n    --fuchsia-900: #fdf5ff;\n    --indigo-50: #312e7f;\n    --indigo-100: #372fa2;\n    --indigo-200: #463acb;\n    --indigo-300: #5048e5;\n    --indigo-400: #6467f2;\n    --indigo-500: #828df8;\n    --indigo-600: #a6b4fc;\n    --indigo-700: #c8d3fe;\n    --indigo-800: #e0e8ff;\n    --indigo-900: #f0f3ff;\n    --light-blue-50: #0c4a6e;\n    --light-blue-100: #075783;\n    --light-blue-200: #0369a0;\n    --light-blue-300: #0284c5;\n    --light-blue-400: #0da2e7;\n    --light-blue-500: #3abff8;\n    --light-blue-600: #7ed4fc;\n    --light-blue-700: #bae5fd;\n    --light-blue-800: #e1f3fe;\n    --light-blue-900: #f0f9ff;\n    --lime-50: #355214;\n    --lime-100: #406312;\n    --lime-200: #4c7b0f;\n    --lime-300: #66a50d;\n    --lime-400: #82cb15;\n    --lime-500: #a1e633;\n    --lime-600: #bef263;\n    --lime-700: #d9f99f;\n    --lime-800: #ebfcca;\n    --lime-900: #f7fee7;\n    --metal-100: #1f2937;\n    --metal-200: #384252;\n    --metal-300: #4b5563;\n    --metal-400: #6b7280;\n    --metal-500: #9ca3b0;\n    --metal-600: #d1d5db;\n    --metal-700: #e5e7eb;\n    --metal-800: #f3f4f6;\n    --metal-900: #f9fafb;\n    --orange-50: #582817;\n    --orange-100: #9b3412;\n    --orange-200: #af4d2c;\n    --orange-300: #e05f03;\n    --orange-400: #f97415;\n    --orange-500: #fb923c;\n    --orange-600: #fdba72;\n    --orange-700: #fed6a9;\n    --orange-800: #ffedd6;\n    --orange-900: #fff6eb;\n    --pink-50: #811842;\n    --pink-100: #9b174c;\n    --pink-200: #bf185d;\n    --pink-300: #db2979;\n    --pink-400: #ec4699;\n    --pink-500: #f471b5;\n    --pink-600: #f9a9d5;\n    --pink-700: #fbd0e8;\n    --pink-800: #fce8f4;\n    --pink-900: #fdf2f8;\n    --rose-50: #861336;\n    --rose-100: #a1123a;\n    --rose-200: #bf123d;\n    --rose-300: #e21d48;\n    --rose-400: #f43e5c;\n    --rose-500: #fb6f84;\n    --rose-600: #fda5af;\n    --rose-700: #fecdd3;\n    --rose-800: #ffe5e7;\n    --rose-900: #fff0f1;\n    --teal-50: #134e4a;\n    --teal-100: #115f5a;\n    --teal-200: #0f756d;\n    --teal-300: #0f756d;\n    --teal-400: #14b8a4;\n    --teal-500: #2bd4bd;\n    --teal-600: #5dead5;\n    --teal-700: #98f6e3;\n    --teal-800: #cbfbf0;\n    --teal-900: #f2fdfa;\n    --violet-50: #282056;\n    --violet-100: #4d1d95;\n    --violet-200: #533dab;\n    --violet-300: #7c3bed;\n    --violet-400: #895af6;\n    --violet-500: #a689fa;\n    --violet-600: #c3b4fd;\n    --violet-700: #ded7fe;\n    --violet-800: #ebe7fe;\n    --violet-900: #f6f5ff;\n  }\n}\n* {\n  box-sizing: border-box;\n  outline: none;\n  padding: 0;\n  margin: 0;\n}\n\n@media (prefers-color-scheme: dark) {\n  html {\n    color-scheme: dark;\n  }\n}\n.ds__Scollbar {\n  width: 6px;\n  height: 100%;\n  position: relative;\n  background: transparent;\n}\n.ds__Scollbar .ds__Scollbar_bar {\n  width: 100%;\n  display: block;\n  border-radius: 6px;\n  background: var(--base-100);\n}\n.ds__Scollbar[data-dir=horizontal] {\n  width: 100%;\n  height: 6px;\n}\n.ds__Scollbar[data-dir=horizontal] .ds__Scollbar_bar {\n  height: 100%;\n}";
styleInject(css_248z$2);

// Generated with util/createComponent.js
var Scollbar = function (props, ref) {
    var _a = props.direction, direction = _a === void 0 ? "horizontal" : _a, _b = props.size, size = _b === void 0 ? 0 : _b;
    return (React.createElement("div", { ref: ref, className: "ds__Scollbar", "data-testid": "Scollbar", "data-dir": direction },
        React.createElement("span", { className: "ds__Scollbar_bar", style: direction === "horizontal"
                ? { width: Number(size).toFixed(1) + "%" }
                : { height: Number(size).toFixed(1) + "%" } })));
};
var Scollbar$1 = React.forwardRef(Scollbar);

var css_248z$1 = "@import url(\"https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap\");\n:root {\n  --round-xs: 2px;\n  --round-s: 4px;\n  --round-m: 8px;\n  --round-l: 12px;\n  --round-xl: 16px;\n  --round-xxl: 20px;\n  --padding-xxs: 2px;\n  --padding-xs: 4px;\n  --padding-s: 8px;\n  --padding-m: 12px;\n  --padding-l: 16px;\n  --padding-xl: 20px;\n  --padding-xxl: 24px;\n  --shadow-xs: 0px 1px 2px 0px rgba(0, 0, 0, 0.0509803922);\n  --shadow-sm: 0px 1px 3px 0px rgba(0, 0, 0, 0.0784313725);\n  --shadow-m: 0px 1.5px 4px -1px rgba(0, 0, 0, 0.1215686275);\n  --shadow-lg: 0px 4px 6px -2px rgba(0, 0, 0, 0.1019607843), 0px 10px 15px -3px rgba(0, 0, 0, 0.0509803922);\n  --shadow-xl: 0px 10px 10px -5px rgba(0, 0, 0, 0.1019607843), 0px 20px 25px -5px rgba(0, 0, 0, 0.0392156863);\n  --shadow-2xl: 0px 25px 50px -12px rgba(0, 0, 0, 0.2509803922);\n  --shadow-flat: 0px 1px 0px #e4e4e7;\n  --shadow-in: inset 0px 2px 4px #525252;\n  --base-00: #ffffff;\n  --base-50: rgba(26, 26, 26, 0.0509803922);\n  --base-100: rgba(26, 26, 26, 0.1019607843);\n  --base-200: rgba(26, 26, 26, 0.2);\n  --base-300: rgba(26, 26, 26, 0.3019607843);\n  --base-400: rgba(26, 26, 26, 0.4);\n  --base-500: rgba(26, 26, 26, 0.5019607843);\n  --base-600: rgba(26, 26, 26, 0.6);\n  --base-700: rgba(26, 26, 26, 0.7019607843);\n  --base-800: rgba(26, 26, 26, 0.8);\n  --base-900: #1a1a1a;\n  --primary-50: #f2f7ff;\n  --primary-100: #dcebfe;\n  --primary-200: #bedbfe;\n  --primary-300: #91c3fd;\n  --primary-400: #61a6fa;\n  --primary-500: #3479e9;\n  --primary-600: #2463eb;\n  --primary-700: #1d4fd7;\n  --primary-800: #1e3fae;\n  --primary-900: #1e3b8a;\n  --secondary-50: #faf5ff;\n  --secondary-100: #f2e5ff;\n  --secondary-200: #ead6ff;\n  --secondary-300: #d8b4fe;\n  --secondary-400: #bf83fc;\n  --secondary-500: #a855f7;\n  --secondary-600: #9234ea;\n  --secondary-700: #7e22ce;\n  --secondary-800: #6a21a6;\n  --secondary-900: #591c87;\n  --tertiary-50: #fdfdfd;\n  --tertiary-100: #f4f4f5;\n  --tertiary-200: #e4e4e7;\n  --tertiary-300: #d4d4d8;\n  --tertiary-400: #a1a1aa;\n  --tertiary-500: #71717a;\n  --tertiary-600: #52525b;\n  --tertiary-700: #3f3f46;\n  --tertiary-800: #27272a;\n  --tertiary-900: #18181b;\n  --success-50: #f2fdf5;\n  --success-100: #defce9;\n  --success-200: #bbf7d0;\n  --success-300: #85efac;\n  --success-400: #4ade80;\n  --success-500: #1ac057;\n  --success-600: #16a249;\n  --success-700: #157f3c;\n  --success-800: #1c713c;\n  --success-900: #114c29;\n  --warning-50: #fef1f1;\n  --warning-100: #fee1e1;\n  --warning-200: #fec8c8;\n  --warning-300: #fca6a6;\n  --warning-400: #fd6b6b;\n  --warning-500: #ef4343;\n  --warning-600: #dc2828;\n  --warning-700: #ba1c1c;\n  --warning-800: #981b1b;\n  --warning-900: #811d1d;\n  --highlight-50: #fefce7;\n  --highlight-100: #fef9c3;\n  --highlight-200: #fef08b;\n  --highlight-300: #fddf49;\n  --highlight-400: #facc14;\n  --highlight-500: #e7b008;\n  --highlight-600: #c88a04;\n  --highlight-700: #a26107;\n  --highlight-800: #864e0e;\n  --highlight-900: #733f12;\n  --blue-gray-50: #f8fafc;\n  --blue-gray-100: #f1f5f9;\n  --blue-gray-200: #e1e7ef;\n  --blue-gray-300: #cbd5e1;\n  --blue-gray-400: #94a3b8;\n  --blue-gray-500: #65758b;\n  --blue-gray-600: #48566a;\n  --blue-gray-700: #344256;\n  --blue-gray-800: #1d283a;\n  --blue-gray-900: #0f1729;\n  --bronze-50: #fafaf9;\n  --bronze-100: #f5f5f4;\n  --bronze-200: #e7e5e4;\n  --bronze-300: #d6d3d1;\n  --bronze-400: #a8a29f;\n  --bronze-500: #78726d;\n  --bronze-600: #56524e;\n  --bronze-700: #44403c;\n  --bronze-800: #292524;\n  --bronze-900: #1c1917;\n  --cyan-50: #ebfeff;\n  --cyan-100: #cdfafe;\n  --cyan-200: #a6f3fc;\n  --cyan-300: #67e8f9;\n  --cyan-400: #20d3ee;\n  --cyan-500: #07b6d5;\n  --cyan-600: #088eaf;\n  --cyan-700: #0e7490;\n  --cyan-800: #155f75;\n  --cyan-900: #164f64;\n  --emerald-50: #edfdf5;\n  --emerald-100: #d1fae5;\n  --emerald-200: #a5f3cf;\n  --emerald-300: #6ee7b7;\n  --emerald-400: #36d399;\n  --emerald-500: #10b77f;\n  --emerald-600: #059467;\n  --emerald-700: #047656;\n  --emerald-800: #066046;\n  --emerald-900: #064b39;\n  --fuchsia-50: #fdf5ff;\n  --fuchsia-100: #f9e5ff;\n  --fuchsia-200: #f5d2fe;\n  --fuchsia-300: #f0abfc;\n  --fuchsia-400: #e87bf9;\n  --fuchsia-500: #d948ef;\n  --fuchsia-600: #bf27d3;\n  --fuchsia-700: #a31daf;\n  --fuchsia-800: #85198f;\n  --fuchsia-900: #711a75;\n  --indigo-50: #f0f3ff;\n  --indigo-100: #e0e8ff;\n  --indigo-200: #c8d3fe;\n  --indigo-300: #a6b4fc;\n  --indigo-400: #828df8;\n  --indigo-500: #6467f2;\n  --indigo-600: #5048e5;\n  --indigo-700: #463acb;\n  --indigo-800: #372fa2;\n  --indigo-900: #312e7f;\n  --light-blue-50: #f0f9ff;\n  --light-blue-100: #e1f3fe;\n  --light-blue-200: #bae5fd;\n  --light-blue-300: #7ed4fc;\n  --light-blue-400: #3abff8;\n  --light-blue-500: #0da2e7;\n  --light-blue-600: #0284c5;\n  --light-blue-700: #0369a0;\n  --light-blue-800: #075783;\n  --light-blue-900: #0c4a6e;\n  --lime-50: #f7fee7;\n  --lime-100: #ebfcca;\n  --lime-200: #d9f99f;\n  --lime-300: #bef263;\n  --lime-400: #a1e633;\n  --lime-500: #82cb15;\n  --lime-600: #66a50d;\n  --lime-700: #4c7b0f;\n  --lime-800: #406312;\n  --lime-900: #355214;\n  --metal-50: #f9fafb;\n  --metal-100: #f3f4f6;\n  --metal-200: #e5e7eb;\n  --metal-300: #d1d5db;\n  --metal-400: #9ca3b0;\n  --metal-500: #6b7280;\n  --metal-600: #4b5563;\n  --metal-700: #384252;\n  --metal-800: #1f2937;\n  --metal-900: #111827;\n  --orange-50: #fff6eb;\n  --orange-200: #fed6a9;\n  --orange-400: #fb923c;\n  --pink-50: #fdf2f8;\n  --pink-100: #fce8f4;\n  --pink-200: #fbd0e8;\n  --pink-300: #f9a9d5;\n  --pink-400: #f471b5;\n  --pink-500: #ec4699;\n  --pink-600: #db2979;\n  --pink-700: #bf185d;\n  --pink-800: #9b174c;\n  --pink-900: #811842;\n  --rose-50: #fff0f1;\n  --rose-100: #ffe5e7;\n  --rose-200: #fecdd3;\n  --rose-300: #fda5af;\n  --rose-400: #fb6f84;\n  --rose-500: #f43e5c;\n  --rose-600: #e21d48;\n  --rose-700: #bf123d;\n  --rose-800: #a1123a;\n  --rose-900: #861336;\n  --teal-50: #f2fdfa;\n  --teal-100: #cbfbf0;\n  --teal-200: #98f6e3;\n  --teal-300: #5dead5;\n  --teal-400: #2bd4bd;\n  --teal-500: #14b8a5;\n  --teal-600: #0d968b;\n  --teal-700: #0f756d;\n  --teal-800: #115f5a;\n  --teal-900: #134e4a;\n  --violet-50: #f6f5ff;\n  --violet-100: #ebe7fe;\n  --violet-200: #ded7fe;\n  --violet-300: #c3b4fd;\n  --violet-400: #a689fa;\n  --violet-500: #895af6;\n  --violet-600: #7c3bed;\n  --violet-700: #6b26d9;\n  --violet-800: #5a21b5;\n  --violet-900: #4d1d95;\n}\n\n@media (prefers-color-scheme: dark) {\n  :root {\n    --shadow-xs: 0px 0.5px 0px #525252;\n    --shadow-sm: 0px 1px 1px rgba(18, 18, 18, 0.3019607843);\n    --shadow-m: 0px 2.5px 4px rgba(18, 18, 18, 0.6509803922);\n    --shadow-lg: 0px 3px 5px rgba(18, 18, 18, 0.8);\n    --shadow-xl: 0px 2.5px 8px #121212;\n    --shadow-2xl: 0px 4px 12px #121212;\n    --shadow-flat: 0px 1px 0px #434343;\n    --shadow-in: inset 0px 1px 2px rgba(255, 255, 255, 0.24);\n    --base-00: #141414;\n    --base-50: rgba(255, 255, 255, 0.0509803922);\n    --base-100: rgba(255, 255, 255, 0.1019607843);\n    --base-200: rgba(255, 255, 255, 0.2);\n    --base-300: rgba(255, 255, 255, 0.3019607843);\n    --base-400: rgba(255, 255, 255, 0.4);\n    --base-500: rgba(255, 255, 255, 0.5019607843);\n    --base-600: rgba(255, 255, 255, 0.6);\n    --base-700: rgba(255, 255, 255, 0.7019607843);\n    --base-800: rgba(255, 255, 255, 0.8);\n    --base-900: #ffffff;\n    --primary-50: #1d223f;\n    --primary-100: #0a318c;\n    --primary-200: #1347cc;\n    --primary-300: #1055ea;\n    --primary-400: #357aea;\n    --primary-500: #2e88f6;\n    --primary-600: #50a1ff;\n    --primary-700: #7ab7ff;\n    --primary-800: #dcebfe;\n    --primary-900: #f0f6ff;\n    --secondary-50: #35194a;\n    --secondary-100: #4e1d72;\n    --secondary-200: #7e22ce;\n    --secondary-300: #9c40ec;\n    --secondary-400: #ab57ff;\n    --secondary-500: #d07fff;\n    --secondary-600: #e9a0ff;\n    --secondary-700: #ffbcff;\n    --secondary-800: #ffd6ff;\n    --secondary-900: #ffefff;\n    --tertiary-50: #272727;\n    --tertiary-100: #333333;\n    --tertiary-200: #434343;\n    --tertiary-300: #5f5f5f;\n    --tertiary-400: #747474;\n    --tertiary-500: #878787;\n    --tertiary-600: #9b9b9b;\n    --tertiary-700: #b9b9b9;\n    --tertiary-800: #d7d7d7;\n    --tertiary-900: #efefef;\n    --success-50: #0e3619;\n    --success-100: #14522d;\n    --success-200: #166434;\n    --success-300: #119541;\n    --success-400: #21c45d;\n    --success-500: #4ade80;\n    --success-600: #85efac;\n    --success-700: #bbf7d0;\n    --success-800: #defce9;\n    --success-900: #f2fdf5;\n    --warning-50: #5d2323;\n    --warning-100: #781f1f;\n    --warning-200: #ae4040;\n    --warning-300: #dc3d3d;\n    --warning-400: #f64d4d;\n    --warning-500: #ff6262;\n    --warning-600: #ff9393;\n    --warning-700: #ffa7a7;\n    --warning-800: #ffbbbb;\n    --warning-900: #fed0d0;\n    --highlight-50: #413d17;\n    --highlight-100: #864e0e;\n    --highlight-200: #a26107;\n    --highlight-300: #c88a04;\n    --highlight-400: #e7b008;\n    --highlight-500: #facc14;\n    --highlight-600: #fddf49;\n    --highlight-700: #fef08b;\n    --highlight-800: #fefacb;\n    --highlight-900: #fefce6;\n    --blue-gray-50: #0f1729;\n    --blue-gray-100: #1d283a;\n    --blue-gray-200: #344256;\n    --blue-gray-300: #48566a;\n    --blue-gray-400: #65758b;\n    --blue-gray-500: #94a3b8;\n    --blue-gray-600: #cbd5e1;\n    --blue-gray-700: #e1e7ef;\n    --blue-gray-800: #f1f5f9;\n    --blue-gray-900: #f8fafc;\n    --bronze-50: #1c1917;\n    --bronze-100: #292524;\n    --bronze-200: #44403c;\n    --bronze-300: #56524e;\n    --bronze-400: #78726d;\n    --bronze-500: #a8a29f;\n    --bronze-600: #d6d3d1;\n    --bronze-700: #e7e5e4;\n    --bronze-800: #f5f5f4;\n    --bronze-900: #fafaf9;\n    --cyan-50: #164f64;\n    --cyan-100: #155f75;\n    --cyan-200: #0e7490;\n    --cyan-300: #088eaf;\n    --cyan-400: #07b6d5;\n    --cyan-500: #20d3ee;\n    --cyan-600: #20d3ee;\n    --cyan-700: #67e8f9;\n    --cyan-800: #cdfafe;\n    --cyan-900: #ebfeff;\n    --emerald-50: #064c39;\n    --emerald-100: #066046;\n    --emerald-200: #047756;\n    --emerald-300: #059467;\n    --emerald-400: #10b77f;\n    --emerald-500: #36d399;\n    --emerald-600: #6ee7b7;\n    --emerald-700: #a5f3cf;\n    --emerald-800: #d1fae5;\n    --emerald-900: #edfdf5;\n    --fuchsia-50: #701076;\n    --fuchsia-100: #85198f;\n    --fuchsia-200: #a31daf;\n    --fuchsia-300: #bf27d3;\n    --fuchsia-400: #d948ef;\n    --fuchsia-500: #e87bf9;\n    --fuchsia-600: #f0abfc;\n    --fuchsia-700: #f5d2fe;\n    --fuchsia-800: #f9e5ff;\n    --fuchsia-900: #fdf5ff;\n    --indigo-50: #312e7f;\n    --indigo-100: #372fa2;\n    --indigo-200: #463acb;\n    --indigo-300: #5048e5;\n    --indigo-400: #6467f2;\n    --indigo-500: #828df8;\n    --indigo-600: #a6b4fc;\n    --indigo-700: #c8d3fe;\n    --indigo-800: #e0e8ff;\n    --indigo-900: #f0f3ff;\n    --light-blue-50: #0c4a6e;\n    --light-blue-100: #075783;\n    --light-blue-200: #0369a0;\n    --light-blue-300: #0284c5;\n    --light-blue-400: #0da2e7;\n    --light-blue-500: #3abff8;\n    --light-blue-600: #7ed4fc;\n    --light-blue-700: #bae5fd;\n    --light-blue-800: #e1f3fe;\n    --light-blue-900: #f0f9ff;\n    --lime-50: #355214;\n    --lime-100: #406312;\n    --lime-200: #4c7b0f;\n    --lime-300: #66a50d;\n    --lime-400: #82cb15;\n    --lime-500: #a1e633;\n    --lime-600: #bef263;\n    --lime-700: #d9f99f;\n    --lime-800: #ebfcca;\n    --lime-900: #f7fee7;\n    --metal-100: #1f2937;\n    --metal-200: #384252;\n    --metal-300: #4b5563;\n    --metal-400: #6b7280;\n    --metal-500: #9ca3b0;\n    --metal-600: #d1d5db;\n    --metal-700: #e5e7eb;\n    --metal-800: #f3f4f6;\n    --metal-900: #f9fafb;\n    --orange-50: #582817;\n    --orange-100: #9b3412;\n    --orange-200: #af4d2c;\n    --orange-300: #e05f03;\n    --orange-400: #f97415;\n    --orange-500: #fb923c;\n    --orange-600: #fdba72;\n    --orange-700: #fed6a9;\n    --orange-800: #ffedd6;\n    --orange-900: #fff6eb;\n    --pink-50: #811842;\n    --pink-100: #9b174c;\n    --pink-200: #bf185d;\n    --pink-300: #db2979;\n    --pink-400: #ec4699;\n    --pink-500: #f471b5;\n    --pink-600: #f9a9d5;\n    --pink-700: #fbd0e8;\n    --pink-800: #fce8f4;\n    --pink-900: #fdf2f8;\n    --rose-50: #861336;\n    --rose-100: #a1123a;\n    --rose-200: #bf123d;\n    --rose-300: #e21d48;\n    --rose-400: #f43e5c;\n    --rose-500: #fb6f84;\n    --rose-600: #fda5af;\n    --rose-700: #fecdd3;\n    --rose-800: #ffe5e7;\n    --rose-900: #fff0f1;\n    --teal-50: #134e4a;\n    --teal-100: #115f5a;\n    --teal-200: #0f756d;\n    --teal-300: #0f756d;\n    --teal-400: #14b8a4;\n    --teal-500: #2bd4bd;\n    --teal-600: #5dead5;\n    --teal-700: #98f6e3;\n    --teal-800: #cbfbf0;\n    --teal-900: #f2fdfa;\n    --violet-50: #282056;\n    --violet-100: #4d1d95;\n    --violet-200: #533dab;\n    --violet-300: #7c3bed;\n    --violet-400: #895af6;\n    --violet-500: #a689fa;\n    --violet-600: #c3b4fd;\n    --violet-700: #ded7fe;\n    --violet-800: #ebe7fe;\n    --violet-900: #f6f5ff;\n  }\n}\n* {\n  box-sizing: border-box;\n  outline: none;\n  padding: 0;\n  margin: 0;\n}\n\n@media (prefers-color-scheme: dark) {\n  html {\n    color-scheme: dark;\n  }\n}\n.ds__Dropdown {\n  list-style: none;\n  position: relative;\n  background: var(--base-00);\n  padding-top: var(--padding-m);\n  padding-bottom: var(--padding-m);\n  border: 1px solid var(--base-100);\n  border-radius: var(--round-m);\n  box-shadow: var(--shadow-m);\n  width: max-content;\n  min-width: 250px;\n  display: grid;\n}\n.ds__Dropdown .ds__Dropdown__item {\n  gap: 12px;\n  display: flex;\n  align-items: center;\n  padding: var(--padding-m) var(--padding-l);\n}\n.ds__Dropdown .ds__Dropdown__item .icon,\n.ds__Dropdown .ds__Dropdown__item .img {\n  width: 20px;\n  height: 20px;\n}\n.ds__Dropdown .ds__Dropdown__item .icon svg,\n.ds__Dropdown .ds__Dropdown__item .img svg {\n  width: 100%;\n  height: 100%;\n}\n.ds__Dropdown .ds__Dropdown__item .ds__Dropdown__label {\n  flex: 1;\n  color: var(--base-900);\n  font-family: \"Inter\", sans-serif;\n  margin: 0;\n  font-style: normal;\n  letter-spacing: 0%;\n  text-align: left;\n  font-weight: 500;\n  text-transform: none;\n  text-decoration: none;\n  font-size: 14px;\n  line-height: 20px;\n}";
styleInject(css_248z$1);

// Generated with util/createComponent.js
var Dropdown = function (props, ref) {
    var options = props.options, className = props.className;
    return (React.createElement("ul", { ref: ref, className: "ds__Dropdown ".concat(className), "data-testid": "Dropdown" }, options === null || options === void 0 ? void 0 : options.map(function (option, idx) { return (React.createElement("li", { key: idx, tabIndex: idx, onClick: option === null || option === void 0 ? void 0 : option.onClick, className: "ds__Dropdown__item" },
        (option === null || option === void 0 ? void 0 : option.icon) ? (React.createElement("span", { className: "icon" }, option === null || option === void 0 ? void 0 : option.icon)) : (option === null || option === void 0 ? void 0 : option.iconLoc) ? (React.createElement("img", { className: "img", src: option.iconLoc, alt: option === null || option === void 0 ? void 0 : option.label })) : null,
        React.createElement("p", { className: "ds__Dropdown__label" }, option.label))); })));
};
var Dropdown$1 = React.forwardRef(Dropdown);

var css_248z = "@import url(\"https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap\");\n:root {\n  --round-xs: 2px;\n  --round-s: 4px;\n  --round-m: 8px;\n  --round-l: 12px;\n  --round-xl: 16px;\n  --round-xxl: 20px;\n  --padding-xxs: 2px;\n  --padding-xs: 4px;\n  --padding-s: 8px;\n  --padding-m: 12px;\n  --padding-l: 16px;\n  --padding-xl: 20px;\n  --padding-xxl: 24px;\n  --shadow-xs: 0px 1px 2px 0px rgba(0, 0, 0, 0.0509803922);\n  --shadow-sm: 0px 1px 3px 0px rgba(0, 0, 0, 0.0784313725);\n  --shadow-m: 0px 1.5px 4px -1px rgba(0, 0, 0, 0.1215686275);\n  --shadow-lg: 0px 4px 6px -2px rgba(0, 0, 0, 0.1019607843), 0px 10px 15px -3px rgba(0, 0, 0, 0.0509803922);\n  --shadow-xl: 0px 10px 10px -5px rgba(0, 0, 0, 0.1019607843), 0px 20px 25px -5px rgba(0, 0, 0, 0.0392156863);\n  --shadow-2xl: 0px 25px 50px -12px rgba(0, 0, 0, 0.2509803922);\n  --shadow-flat: 0px 1px 0px #e4e4e7;\n  --shadow-in: inset 0px 2px 4px #525252;\n  --base-00: #ffffff;\n  --base-50: rgba(26, 26, 26, 0.0509803922);\n  --base-100: rgba(26, 26, 26, 0.1019607843);\n  --base-200: rgba(26, 26, 26, 0.2);\n  --base-300: rgba(26, 26, 26, 0.3019607843);\n  --base-400: rgba(26, 26, 26, 0.4);\n  --base-500: rgba(26, 26, 26, 0.5019607843);\n  --base-600: rgba(26, 26, 26, 0.6);\n  --base-700: rgba(26, 26, 26, 0.7019607843);\n  --base-800: rgba(26, 26, 26, 0.8);\n  --base-900: #1a1a1a;\n  --primary-50: #f2f7ff;\n  --primary-100: #dcebfe;\n  --primary-200: #bedbfe;\n  --primary-300: #91c3fd;\n  --primary-400: #61a6fa;\n  --primary-500: #3479e9;\n  --primary-600: #2463eb;\n  --primary-700: #1d4fd7;\n  --primary-800: #1e3fae;\n  --primary-900: #1e3b8a;\n  --secondary-50: #faf5ff;\n  --secondary-100: #f2e5ff;\n  --secondary-200: #ead6ff;\n  --secondary-300: #d8b4fe;\n  --secondary-400: #bf83fc;\n  --secondary-500: #a855f7;\n  --secondary-600: #9234ea;\n  --secondary-700: #7e22ce;\n  --secondary-800: #6a21a6;\n  --secondary-900: #591c87;\n  --tertiary-50: #fdfdfd;\n  --tertiary-100: #f4f4f5;\n  --tertiary-200: #e4e4e7;\n  --tertiary-300: #d4d4d8;\n  --tertiary-400: #a1a1aa;\n  --tertiary-500: #71717a;\n  --tertiary-600: #52525b;\n  --tertiary-700: #3f3f46;\n  --tertiary-800: #27272a;\n  --tertiary-900: #18181b;\n  --success-50: #f2fdf5;\n  --success-100: #defce9;\n  --success-200: #bbf7d0;\n  --success-300: #85efac;\n  --success-400: #4ade80;\n  --success-500: #1ac057;\n  --success-600: #16a249;\n  --success-700: #157f3c;\n  --success-800: #1c713c;\n  --success-900: #114c29;\n  --warning-50: #fef1f1;\n  --warning-100: #fee1e1;\n  --warning-200: #fec8c8;\n  --warning-300: #fca6a6;\n  --warning-400: #fd6b6b;\n  --warning-500: #ef4343;\n  --warning-600: #dc2828;\n  --warning-700: #ba1c1c;\n  --warning-800: #981b1b;\n  --warning-900: #811d1d;\n  --highlight-50: #fefce7;\n  --highlight-100: #fef9c3;\n  --highlight-200: #fef08b;\n  --highlight-300: #fddf49;\n  --highlight-400: #facc14;\n  --highlight-500: #e7b008;\n  --highlight-600: #c88a04;\n  --highlight-700: #a26107;\n  --highlight-800: #864e0e;\n  --highlight-900: #733f12;\n  --blue-gray-50: #f8fafc;\n  --blue-gray-100: #f1f5f9;\n  --blue-gray-200: #e1e7ef;\n  --blue-gray-300: #cbd5e1;\n  --blue-gray-400: #94a3b8;\n  --blue-gray-500: #65758b;\n  --blue-gray-600: #48566a;\n  --blue-gray-700: #344256;\n  --blue-gray-800: #1d283a;\n  --blue-gray-900: #0f1729;\n  --bronze-50: #fafaf9;\n  --bronze-100: #f5f5f4;\n  --bronze-200: #e7e5e4;\n  --bronze-300: #d6d3d1;\n  --bronze-400: #a8a29f;\n  --bronze-500: #78726d;\n  --bronze-600: #56524e;\n  --bronze-700: #44403c;\n  --bronze-800: #292524;\n  --bronze-900: #1c1917;\n  --cyan-50: #ebfeff;\n  --cyan-100: #cdfafe;\n  --cyan-200: #a6f3fc;\n  --cyan-300: #67e8f9;\n  --cyan-400: #20d3ee;\n  --cyan-500: #07b6d5;\n  --cyan-600: #088eaf;\n  --cyan-700: #0e7490;\n  --cyan-800: #155f75;\n  --cyan-900: #164f64;\n  --emerald-50: #edfdf5;\n  --emerald-100: #d1fae5;\n  --emerald-200: #a5f3cf;\n  --emerald-300: #6ee7b7;\n  --emerald-400: #36d399;\n  --emerald-500: #10b77f;\n  --emerald-600: #059467;\n  --emerald-700: #047656;\n  --emerald-800: #066046;\n  --emerald-900: #064b39;\n  --fuchsia-50: #fdf5ff;\n  --fuchsia-100: #f9e5ff;\n  --fuchsia-200: #f5d2fe;\n  --fuchsia-300: #f0abfc;\n  --fuchsia-400: #e87bf9;\n  --fuchsia-500: #d948ef;\n  --fuchsia-600: #bf27d3;\n  --fuchsia-700: #a31daf;\n  --fuchsia-800: #85198f;\n  --fuchsia-900: #711a75;\n  --indigo-50: #f0f3ff;\n  --indigo-100: #e0e8ff;\n  --indigo-200: #c8d3fe;\n  --indigo-300: #a6b4fc;\n  --indigo-400: #828df8;\n  --indigo-500: #6467f2;\n  --indigo-600: #5048e5;\n  --indigo-700: #463acb;\n  --indigo-800: #372fa2;\n  --indigo-900: #312e7f;\n  --light-blue-50: #f0f9ff;\n  --light-blue-100: #e1f3fe;\n  --light-blue-200: #bae5fd;\n  --light-blue-300: #7ed4fc;\n  --light-blue-400: #3abff8;\n  --light-blue-500: #0da2e7;\n  --light-blue-600: #0284c5;\n  --light-blue-700: #0369a0;\n  --light-blue-800: #075783;\n  --light-blue-900: #0c4a6e;\n  --lime-50: #f7fee7;\n  --lime-100: #ebfcca;\n  --lime-200: #d9f99f;\n  --lime-300: #bef263;\n  --lime-400: #a1e633;\n  --lime-500: #82cb15;\n  --lime-600: #66a50d;\n  --lime-700: #4c7b0f;\n  --lime-800: #406312;\n  --lime-900: #355214;\n  --metal-50: #f9fafb;\n  --metal-100: #f3f4f6;\n  --metal-200: #e5e7eb;\n  --metal-300: #d1d5db;\n  --metal-400: #9ca3b0;\n  --metal-500: #6b7280;\n  --metal-600: #4b5563;\n  --metal-700: #384252;\n  --metal-800: #1f2937;\n  --metal-900: #111827;\n  --orange-50: #fff6eb;\n  --orange-200: #fed6a9;\n  --orange-400: #fb923c;\n  --pink-50: #fdf2f8;\n  --pink-100: #fce8f4;\n  --pink-200: #fbd0e8;\n  --pink-300: #f9a9d5;\n  --pink-400: #f471b5;\n  --pink-500: #ec4699;\n  --pink-600: #db2979;\n  --pink-700: #bf185d;\n  --pink-800: #9b174c;\n  --pink-900: #811842;\n  --rose-50: #fff0f1;\n  --rose-100: #ffe5e7;\n  --rose-200: #fecdd3;\n  --rose-300: #fda5af;\n  --rose-400: #fb6f84;\n  --rose-500: #f43e5c;\n  --rose-600: #e21d48;\n  --rose-700: #bf123d;\n  --rose-800: #a1123a;\n  --rose-900: #861336;\n  --teal-50: #f2fdfa;\n  --teal-100: #cbfbf0;\n  --teal-200: #98f6e3;\n  --teal-300: #5dead5;\n  --teal-400: #2bd4bd;\n  --teal-500: #14b8a5;\n  --teal-600: #0d968b;\n  --teal-700: #0f756d;\n  --teal-800: #115f5a;\n  --teal-900: #134e4a;\n  --violet-50: #f6f5ff;\n  --violet-100: #ebe7fe;\n  --violet-200: #ded7fe;\n  --violet-300: #c3b4fd;\n  --violet-400: #a689fa;\n  --violet-500: #895af6;\n  --violet-600: #7c3bed;\n  --violet-700: #6b26d9;\n  --violet-800: #5a21b5;\n  --violet-900: #4d1d95;\n}\n\n@media (prefers-color-scheme: dark) {\n  :root {\n    --shadow-xs: 0px 0.5px 0px #525252;\n    --shadow-sm: 0px 1px 1px rgba(18, 18, 18, 0.3019607843);\n    --shadow-m: 0px 2.5px 4px rgba(18, 18, 18, 0.6509803922);\n    --shadow-lg: 0px 3px 5px rgba(18, 18, 18, 0.8);\n    --shadow-xl: 0px 2.5px 8px #121212;\n    --shadow-2xl: 0px 4px 12px #121212;\n    --shadow-flat: 0px 1px 0px #434343;\n    --shadow-in: inset 0px 1px 2px rgba(255, 255, 255, 0.24);\n    --base-00: #141414;\n    --base-50: rgba(255, 255, 255, 0.0509803922);\n    --base-100: rgba(255, 255, 255, 0.1019607843);\n    --base-200: rgba(255, 255, 255, 0.2);\n    --base-300: rgba(255, 255, 255, 0.3019607843);\n    --base-400: rgba(255, 255, 255, 0.4);\n    --base-500: rgba(255, 255, 255, 0.5019607843);\n    --base-600: rgba(255, 255, 255, 0.6);\n    --base-700: rgba(255, 255, 255, 0.7019607843);\n    --base-800: rgba(255, 255, 255, 0.8);\n    --base-900: #ffffff;\n    --primary-50: #1d223f;\n    --primary-100: #0a318c;\n    --primary-200: #1347cc;\n    --primary-300: #1055ea;\n    --primary-400: #357aea;\n    --primary-500: #2e88f6;\n    --primary-600: #50a1ff;\n    --primary-700: #7ab7ff;\n    --primary-800: #dcebfe;\n    --primary-900: #f0f6ff;\n    --secondary-50: #35194a;\n    --secondary-100: #4e1d72;\n    --secondary-200: #7e22ce;\n    --secondary-300: #9c40ec;\n    --secondary-400: #ab57ff;\n    --secondary-500: #d07fff;\n    --secondary-600: #e9a0ff;\n    --secondary-700: #ffbcff;\n    --secondary-800: #ffd6ff;\n    --secondary-900: #ffefff;\n    --tertiary-50: #272727;\n    --tertiary-100: #333333;\n    --tertiary-200: #434343;\n    --tertiary-300: #5f5f5f;\n    --tertiary-400: #747474;\n    --tertiary-500: #878787;\n    --tertiary-600: #9b9b9b;\n    --tertiary-700: #b9b9b9;\n    --tertiary-800: #d7d7d7;\n    --tertiary-900: #efefef;\n    --success-50: #0e3619;\n    --success-100: #14522d;\n    --success-200: #166434;\n    --success-300: #119541;\n    --success-400: #21c45d;\n    --success-500: #4ade80;\n    --success-600: #85efac;\n    --success-700: #bbf7d0;\n    --success-800: #defce9;\n    --success-900: #f2fdf5;\n    --warning-50: #5d2323;\n    --warning-100: #781f1f;\n    --warning-200: #ae4040;\n    --warning-300: #dc3d3d;\n    --warning-400: #f64d4d;\n    --warning-500: #ff6262;\n    --warning-600: #ff9393;\n    --warning-700: #ffa7a7;\n    --warning-800: #ffbbbb;\n    --warning-900: #fed0d0;\n    --highlight-50: #413d17;\n    --highlight-100: #864e0e;\n    --highlight-200: #a26107;\n    --highlight-300: #c88a04;\n    --highlight-400: #e7b008;\n    --highlight-500: #facc14;\n    --highlight-600: #fddf49;\n    --highlight-700: #fef08b;\n    --highlight-800: #fefacb;\n    --highlight-900: #fefce6;\n    --blue-gray-50: #0f1729;\n    --blue-gray-100: #1d283a;\n    --blue-gray-200: #344256;\n    --blue-gray-300: #48566a;\n    --blue-gray-400: #65758b;\n    --blue-gray-500: #94a3b8;\n    --blue-gray-600: #cbd5e1;\n    --blue-gray-700: #e1e7ef;\n    --blue-gray-800: #f1f5f9;\n    --blue-gray-900: #f8fafc;\n    --bronze-50: #1c1917;\n    --bronze-100: #292524;\n    --bronze-200: #44403c;\n    --bronze-300: #56524e;\n    --bronze-400: #78726d;\n    --bronze-500: #a8a29f;\n    --bronze-600: #d6d3d1;\n    --bronze-700: #e7e5e4;\n    --bronze-800: #f5f5f4;\n    --bronze-900: #fafaf9;\n    --cyan-50: #164f64;\n    --cyan-100: #155f75;\n    --cyan-200: #0e7490;\n    --cyan-300: #088eaf;\n    --cyan-400: #07b6d5;\n    --cyan-500: #20d3ee;\n    --cyan-600: #20d3ee;\n    --cyan-700: #67e8f9;\n    --cyan-800: #cdfafe;\n    --cyan-900: #ebfeff;\n    --emerald-50: #064c39;\n    --emerald-100: #066046;\n    --emerald-200: #047756;\n    --emerald-300: #059467;\n    --emerald-400: #10b77f;\n    --emerald-500: #36d399;\n    --emerald-600: #6ee7b7;\n    --emerald-700: #a5f3cf;\n    --emerald-800: #d1fae5;\n    --emerald-900: #edfdf5;\n    --fuchsia-50: #701076;\n    --fuchsia-100: #85198f;\n    --fuchsia-200: #a31daf;\n    --fuchsia-300: #bf27d3;\n    --fuchsia-400: #d948ef;\n    --fuchsia-500: #e87bf9;\n    --fuchsia-600: #f0abfc;\n    --fuchsia-700: #f5d2fe;\n    --fuchsia-800: #f9e5ff;\n    --fuchsia-900: #fdf5ff;\n    --indigo-50: #312e7f;\n    --indigo-100: #372fa2;\n    --indigo-200: #463acb;\n    --indigo-300: #5048e5;\n    --indigo-400: #6467f2;\n    --indigo-500: #828df8;\n    --indigo-600: #a6b4fc;\n    --indigo-700: #c8d3fe;\n    --indigo-800: #e0e8ff;\n    --indigo-900: #f0f3ff;\n    --light-blue-50: #0c4a6e;\n    --light-blue-100: #075783;\n    --light-blue-200: #0369a0;\n    --light-blue-300: #0284c5;\n    --light-blue-400: #0da2e7;\n    --light-blue-500: #3abff8;\n    --light-blue-600: #7ed4fc;\n    --light-blue-700: #bae5fd;\n    --light-blue-800: #e1f3fe;\n    --light-blue-900: #f0f9ff;\n    --lime-50: #355214;\n    --lime-100: #406312;\n    --lime-200: #4c7b0f;\n    --lime-300: #66a50d;\n    --lime-400: #82cb15;\n    --lime-500: #a1e633;\n    --lime-600: #bef263;\n    --lime-700: #d9f99f;\n    --lime-800: #ebfcca;\n    --lime-900: #f7fee7;\n    --metal-100: #1f2937;\n    --metal-200: #384252;\n    --metal-300: #4b5563;\n    --metal-400: #6b7280;\n    --metal-500: #9ca3b0;\n    --metal-600: #d1d5db;\n    --metal-700: #e5e7eb;\n    --metal-800: #f3f4f6;\n    --metal-900: #f9fafb;\n    --orange-50: #582817;\n    --orange-100: #9b3412;\n    --orange-200: #af4d2c;\n    --orange-300: #e05f03;\n    --orange-400: #f97415;\n    --orange-500: #fb923c;\n    --orange-600: #fdba72;\n    --orange-700: #fed6a9;\n    --orange-800: #ffedd6;\n    --orange-900: #fff6eb;\n    --pink-50: #811842;\n    --pink-100: #9b174c;\n    --pink-200: #bf185d;\n    --pink-300: #db2979;\n    --pink-400: #ec4699;\n    --pink-500: #f471b5;\n    --pink-600: #f9a9d5;\n    --pink-700: #fbd0e8;\n    --pink-800: #fce8f4;\n    --pink-900: #fdf2f8;\n    --rose-50: #861336;\n    --rose-100: #a1123a;\n    --rose-200: #bf123d;\n    --rose-300: #e21d48;\n    --rose-400: #f43e5c;\n    --rose-500: #fb6f84;\n    --rose-600: #fda5af;\n    --rose-700: #fecdd3;\n    --rose-800: #ffe5e7;\n    --rose-900: #fff0f1;\n    --teal-50: #134e4a;\n    --teal-100: #115f5a;\n    --teal-200: #0f756d;\n    --teal-300: #0f756d;\n    --teal-400: #14b8a4;\n    --teal-500: #2bd4bd;\n    --teal-600: #5dead5;\n    --teal-700: #98f6e3;\n    --teal-800: #cbfbf0;\n    --teal-900: #f2fdfa;\n    --violet-50: #282056;\n    --violet-100: #4d1d95;\n    --violet-200: #533dab;\n    --violet-300: #7c3bed;\n    --violet-400: #895af6;\n    --violet-500: #a689fa;\n    --violet-600: #c3b4fd;\n    --violet-700: #ded7fe;\n    --violet-800: #ebe7fe;\n    --violet-900: #f6f5ff;\n  }\n}\n* {\n  box-sizing: border-box;\n  outline: none;\n  padding: 0;\n  margin: 0;\n}\n\n@media (prefers-color-scheme: dark) {\n  html {\n    color-scheme: dark;\n  }\n}\n.ds__Chip {\n  gap: 8px;\n  display: flex;\n  width: max-content;\n  position: relative;\n  align-items: center;\n  border-radius: 100px;\n  background-color: var(--base-00);\n  border: 1px solid var(--tertiary-200);\n  padding: var(--padding-s) var(--padding-m);\n  box-shadow: var(--shadow-sm);\n}\n.ds__Chip:hover {\n  background-color: var(--tertiary-100);\n}\n.ds__Chip:focus {\n  border-color: var(--base-500);\n  box-shadow: 0px 0px 0px 2px var(--base-00), 0px 0px 0px 4px var(--primary-600);\n}\n.ds__Chip .ds__Chip__avatar {\n  width: 20px;\n  height: 20px;\n  overflow: hidden;\n  border-radius: 50%;\n}\n.ds__Chip .ds__Chip__avatar img {\n  width: 100%;\n  height: 100%;\n  display: block;\n}\n.ds__Chip .ds__Chip__label {\n  font-family: \"Inter\", sans-serif;\n  margin: 0;\n  font-style: normal;\n  letter-spacing: 0%;\n  text-align: left;\n  font-weight: 500;\n  text-transform: none;\n  text-decoration: none;\n  font-size: 14px;\n  line-height: 20px;\n  color: var(--blue-gray-700);\n}\n.ds__Chip .ds__Chip__close {\n  width: 20px;\n  height: 20px;\n  cursor: pointer;\n}\n.ds__Chip .ds__Chip__close svg {\n  width: 100%;\n  height: 100%;\n}\n.ds__Chip .ds__Chip__close svg path {\n  fill: var(--tertiary-400);\n}\n.ds__Chip[data-active=true] {\n  background-color: var(--primary-600);\n}\n.ds__Chip[data-active=true] .ds__Chip__label {\n  color: var(--base-00);\n}\n.ds__Chip[data-active=true] .ds__Chip__close svg path {\n  fill: var(--base-00);\n}\n.ds__Chip[data-avatar-align=right] {\n  flex-direction: row-reverse;\n  padding-left: var(--padding-m);\n}";
styleInject(css_248z);

// Generated with util/createComponent.js
var Chip = function (props, ref) {
    var _a = props.avatar, avatar = _a === void 0 ? null : _a, label = props.label, active = props.active, _b = props.closable, closable = _b === void 0 ? false : _b, onClick = props.onClick, _c = props.avatarAlign, avatarAlign = _c === void 0 ? "left" : _c;
    return (React.createElement("label", { ref: ref, "data-avatar-align": avatarAlign, "data-active": active, className: "ds__Chip", "data-testid": "Chip" },
        avatar && (React.createElement("span", { className: "ds__Chip__avatar" },
            React.createElement("img", { src: avatar, alt: "avatar" }))),
        React.createElement("span", { className: "ds__Chip__label" }, label),
        closable && avatarAlign !== "right" && (React.createElement("span", { className: "ds__Chip__close", onClick: onClick },
            React.createElement(CloseIcon, null)))));
};
var Chip$1 = React.forwardRef(Chip);
var CloseIcon = function (props) {
    return (React.createElement("svg", { width: "24", height: "24", fill: "none", viewBox: "0 0 24 24", className: props.className, xmlns: "http://www.w3.org/2000/svg" },
        React.createElement("path", { d: "M12 10.5857L17.243 5.34274C17.6335 4.95228 18.2665 4.95228 18.657 5.34274C19.0475 5.73321 19.0475 6.36628 18.657 6.75674L13.414 11.9997L18.657 17.2427C19.0475 17.6332 19.0475 18.2663 18.657 18.6567C18.2665 19.0472 17.6335 19.0472 17.243 18.6567L12 13.4137L6.75699 18.6567C6.36652 19.0472 5.73345 19.0472 5.34299 18.6567C4.95252 18.2663 4.95252 17.6332 5.34299 17.2427L10.586 11.9997L5.34299 6.75674C4.95252 6.36628 4.95252 5.73321 5.34299 5.34274C5.73345 4.95228 6.36652 4.95228 6.75699 5.34274L12 10.5857Z", fill: "#A1A1AA" })));
};

exports.Button = Button$1;
exports.Checkbox = Checkbox$1;
exports.Chip = Chip$1;
exports.Dropdown = Dropdown$1;
exports.ProgressBar = ProgressBar$1;
exports.ProgressRadial = ProgressRadial$1;
exports.Radio = Radio$1;
exports.Scollbar = Scollbar$1;
exports.Stepper = Stepper$1;
exports.ToggleSwitch = ToggleSwitch$1;
exports.Tooltip = Tooltip$1;
//# sourceMappingURL=index.js.map
