//;(function() {//匿名函数，防止污染
    /**************************** BEGIN ****************************/
    /*! jQuery v1.11.3 | (c) 2005, 2015 jQuery Foundation, Inc. | jquery.org/license */
    ;!function(a,b){"object"==typeof module&&"object"==typeof module.exports?module.exports=a.document?b(a,!0):function(a){if(!a.document)throw new Error("jQuery requires a window with a document");return b(a)}:b(a)}("undefined"!=typeof window?window:this,function(a,b){var c=[],d=c.slice,e=c.concat,f=c.push,g=c.indexOf,h={},i=h.toString,j=h.hasOwnProperty,k={},l="1.11.3",m=function(a,b){return new m.fn.init(a,b)},n=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,o=/^-ms-/,p=/-([\da-z])/gi,q=function(a,b){return b.toUpperCase()};m.fn=m.prototype={jquery:l,constructor:m,selector:"",length:0,toArray:function(){return d.call(this)},get:function(a){return null!=a?0>a?this[a+this.length]:this[a]:d.call(this)},pushStack:function(a){var b=m.merge(this.constructor(),a);return b.prevObject=this,b.context=this.context,b},each:function(a,b){return m.each(this,a,b)},map:function(a){return this.pushStack(m.map(this,function(b,c){return a.call(b,c,b)}))},slice:function(){return this.pushStack(d.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(a){var b=this.length,c=+a+(0>a?b:0);return this.pushStack(c>=0&&b>c?[this[c]]:[])},end:function(){return this.prevObject||this.constructor(null)},push:f,sort:c.sort,splice:c.splice},m.extend=m.fn.extend=function(){var a,b,c,d,e,f,g=arguments[0]||{},h=1,i=arguments.length,j=!1;for("boolean"==typeof g&&(j=g,g=arguments[h]||{},h++),"object"==typeof g||m.isFunction(g)||(g={}),h===i&&(g=this,h--);i>h;h++)if(null!=(e=arguments[h]))for(d in e)a=g[d],c=e[d],g!==c&&(j&&c&&(m.isPlainObject(c)||(b=m.isArray(c)))?(b?(b=!1,f=a&&m.isArray(a)?a:[]):f=a&&m.isPlainObject(a)?a:{},g[d]=m.extend(j,f,c)):void 0!==c&&(g[d]=c));return g},m.extend({expando:"jQuery"+(l+Math.random()).replace(/\D/g,""),isReady:!0,error:function(a){throw new Error(a)},noop:function(){},isFunction:function(a){return"function"===m.type(a)},isArray:Array.isArray||function(a){return"array"===m.type(a)},isWindow:function(a){return null!=a&&a==a.window},isNumeric:function(a){return!m.isArray(a)&&a-parseFloat(a)+1>=0},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},isPlainObject:function(a){var b;if(!a||"object"!==m.type(a)||a.nodeType||m.isWindow(a))return!1;try{if(a.constructor&&!j.call(a,"constructor")&&!j.call(a.constructor.prototype,"isPrototypeOf"))return!1}catch(c){return!1}if(k.ownLast)for(b in a)return j.call(a,b);for(b in a);return void 0===b||j.call(a,b)},type:function(a){return null==a?a+"":"object"==typeof a||"function"==typeof a?h[i.call(a)]||"object":typeof a},globalEval:function(b){b&&m.trim(b)&&(a.execScript||function(b){a.eval.call(a,b)})(b)},camelCase:function(a){return a.replace(o,"ms-").replace(p,q)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()},each:function(a,b,c){var d,e=0,f=a.length,g=r(a);if(c){if(g){for(;f>e;e++)if(d=b.apply(a[e],c),d===!1)break}else for(e in a)if(d=b.apply(a[e],c),d===!1)break}else if(g){for(;f>e;e++)if(d=b.call(a[e],e,a[e]),d===!1)break}else for(e in a)if(d=b.call(a[e],e,a[e]),d===!1)break;return a},trim:function(a){return null==a?"":(a+"").replace(n,"")},makeArray:function(a,b){var c=b||[];return null!=a&&(r(Object(a))?m.merge(c,"string"==typeof a?[a]:a):f.call(c,a)),c},inArray:function(a,b,c){var d;if(b){if(g)return g.call(b,a,c);for(d=b.length,c=c?0>c?Math.max(0,d+c):c:0;d>c;c++)if(c in b&&b[c]===a)return c}return-1},merge:function(a,b){var c=+b.length,d=0,e=a.length;while(c>d)a[e++]=b[d++];if(c!==c)while(void 0!==b[d])a[e++]=b[d++];return a.length=e,a},grep:function(a,b,c){for(var d,e=[],f=0,g=a.length,h=!c;g>f;f++)d=!b(a[f],f),d!==h&&e.push(a[f]);return e},map:function(a,b,c){var d,f=0,g=a.length,h=r(a),i=[];if(h)for(;g>f;f++)d=b(a[f],f,c),null!=d&&i.push(d);else for(f in a)d=b(a[f],f,c),null!=d&&i.push(d);return e.apply([],i)},guid:1,proxy:function(a,b){var c,e,f;return"string"==typeof b&&(f=a[b],b=a,a=f),m.isFunction(a)?(c=d.call(arguments,2),e=function(){return a.apply(b||this,c.concat(d.call(arguments)))},e.guid=a.guid=a.guid||m.guid++,e):void 0},now:function(){return+new Date},support:k}),m.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(a,b){h["[object "+b+"]"]=b.toLowerCase()});function r(a){var b="length"in a&&a.length,c=m.type(a);return"function"===c||m.isWindow(a)?!1:1===a.nodeType&&b?!0:"array"===c||0===b||"number"==typeof b&&b>0&&b-1 in a}var s=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u="sizzle"+1*new Date,v=a.document,w=0,x=0,y=ha(),z=ha(),A=ha(),B=function(a,b){return a===b&&(l=!0),0},C=1<<31,D={}.hasOwnProperty,E=[],F=E.pop,G=E.push,H=E.push,I=E.slice,J=function(a,b){for(var c=0,d=a.length;d>c;c++)if(a[c]===b)return c;return-1},K="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",L="[\\x20\\t\\r\\n\\f]",M="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",N=M.replace("w","w#"),O="\\["+L+"*("+M+")(?:"+L+"*([*^$|!~]?=)"+L+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+N+"))|)"+L+"*\\]",P=":("+M+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+O+")*)|.*)\\)|)",Q=new RegExp(L+"+","g"),R=new RegExp("^"+L+"+|((?:^|[^\\\\])(?:\\\\.)*)"+L+"+$","g"),S=new RegExp("^"+L+"*,"+L+"*"),T=new RegExp("^"+L+"*([>+~]|"+L+")"+L+"*"),U=new RegExp("="+L+"*([^\\]'\"]*?)"+L+"*\\]","g"),V=new RegExp(P),W=new RegExp("^"+N+"$"),X={ID:new RegExp("^#("+M+")"),CLASS:new RegExp("^\\.("+M+")"),TAG:new RegExp("^("+M.replace("w","w*")+")"),ATTR:new RegExp("^"+O),PSEUDO:new RegExp("^"+P),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+L+"*(even|odd|(([+-]|)(\\d*)n|)"+L+"*(?:([+-]|)"+L+"*(\\d+)|))"+L+"*\\)|)","i"),bool:new RegExp("^(?:"+K+")$","i"),needsContext:new RegExp("^"+L+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+L+"*((?:-\\d)?\\d*)"+L+"*\\)|)(?=[^-]|$)","i")},Y=/^(?:input|select|textarea|button)$/i,Z=/^h\d$/i,$=/^[^{]+\{\s*\[native \w/,_=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,aa=/[+~]/,ba=/'|\\/g,ca=new RegExp("\\\\([\\da-f]{1,6}"+L+"?|("+L+")|.)","ig"),da=function(a,b,c){var d="0x"+b-65536;return d!==d||c?b:0>d?String.fromCharCode(d+65536):String.fromCharCode(d>>10|55296,1023&d|56320)},ea=function(){m()};try{H.apply(E=I.call(v.childNodes),v.childNodes),E[v.childNodes.length].nodeType}catch(fa){H={apply:E.length?function(a,b){G.apply(a,I.call(b))}:function(a,b){var c=a.length,d=0;while(a[c++]=b[d++]);a.length=c-1}}}function ga(a,b,d,e){var f,h,j,k,l,o,r,s,w,x;if((b?b.ownerDocument||b:v)!==n&&m(b),b=b||n,d=d||[],k=b.nodeType,"string"!=typeof a||!a||1!==k&&9!==k&&11!==k)return d;if(!e&&p){if(11!==k&&(f=_.exec(a)))if(j=f[1]){if(9===k){if(h=b.getElementById(j),!h||!h.parentNode)return d;if(h.id===j)return d.push(h),d}else if(b.ownerDocument&&(h=b.ownerDocument.getElementById(j))&&t(b,h)&&h.id===j)return d.push(h),d}else{if(f[2])return H.apply(d,b.getElementsByTagName(a)),d;if((j=f[3])&&c.getElementsByClassName)return H.apply(d,b.getElementsByClassName(j)),d}if(c.qsa&&(!q||!q.test(a))){if(s=r=u,w=b,x=1!==k&&a,1===k&&"object"!==b.nodeName.toLowerCase()){o=g(a),(r=b.getAttribute("id"))?s=r.replace(ba,"\\$&"):b.setAttribute("id",s),s="[id='"+s+"'] ",l=o.length;while(l--)o[l]=s+ra(o[l]);w=aa.test(a)&&pa(b.parentNode)||b,x=o.join(",")}if(x)try{return H.apply(d,w.querySelectorAll(x)),d}catch(y){}finally{r||b.removeAttribute("id")}}}return i(a.replace(R,"$1"),b,d,e)}function ha(){var a=[];function b(c,e){return a.push(c+" ")>d.cacheLength&&delete b[a.shift()],b[c+" "]=e}return b}function ia(a){return a[u]=!0,a}function ja(a){var b=n.createElement("div");try{return!!a(b)}catch(c){return!1}finally{b.parentNode&&b.parentNode.removeChild(b),b=null}}function ka(a,b){var c=a.split("|"),e=a.length;while(e--)d.attrHandle[c[e]]=b}function la(a,b){var c=b&&a,d=c&&1===a.nodeType&&1===b.nodeType&&(~b.sourceIndex||C)-(~a.sourceIndex||C);if(d)return d;if(c)while(c=c.nextSibling)if(c===b)return-1;return a?1:-1}function ma(a){return function(b){var c=b.nodeName.toLowerCase();return"input"===c&&b.type===a}}function na(a){return function(b){var c=b.nodeName.toLowerCase();return("input"===c||"button"===c)&&b.type===a}}function oa(a){return ia(function(b){return b=+b,ia(function(c,d){var e,f=a([],c.length,b),g=f.length;while(g--)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}function pa(a){return a&&"undefined"!=typeof a.getElementsByTagName&&a}c=ga.support={},f=ga.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return b?"HTML"!==b.nodeName:!1},m=ga.setDocument=function(a){var b,e,g=a?a.ownerDocument||a:v;return g!==n&&9===g.nodeType&&g.documentElement?(n=g,o=g.documentElement,e=g.defaultView,e&&e!==e.top&&(e.addEventListener?e.addEventListener("unload",ea,!1):e.attachEvent&&e.attachEvent("onunload",ea)),p=!f(g),c.attributes=ja(function(a){return a.className="i",!a.getAttribute("className")}),c.getElementsByTagName=ja(function(a){return a.appendChild(g.createComment("")),!a.getElementsByTagName("*").length}),c.getElementsByClassName=$.test(g.getElementsByClassName),c.getById=ja(function(a){return o.appendChild(a).id=u,!g.getElementsByName||!g.getElementsByName(u).length}),c.getById?(d.find.ID=function(a,b){if("undefined"!=typeof b.getElementById&&p){var c=b.getElementById(a);return c&&c.parentNode?[c]:[]}},d.filter.ID=function(a){var b=a.replace(ca,da);return function(a){return a.getAttribute("id")===b}}):(delete d.find.ID,d.filter.ID=function(a){var b=a.replace(ca,da);return function(a){var c="undefined"!=typeof a.getAttributeNode&&a.getAttributeNode("id");return c&&c.value===b}}),d.find.TAG=c.getElementsByTagName?function(a,b){return"undefined"!=typeof b.getElementsByTagName?b.getElementsByTagName(a):c.qsa?b.querySelectorAll(a):void 0}:function(a,b){var c,d=[],e=0,f=b.getElementsByTagName(a);if("*"===a){while(c=f[e++])1===c.nodeType&&d.push(c);return d}return f},d.find.CLASS=c.getElementsByClassName&&function(a,b){return p?b.getElementsByClassName(a):void 0},r=[],q=[],(c.qsa=$.test(g.querySelectorAll))&&(ja(function(a){o.appendChild(a).innerHTML="<a id='"+u+"'></a><select id='"+u+"-\f]' msallowcapture=''><option selected=''></option></select>",a.querySelectorAll("[msallowcapture^='']").length&&q.push("[*^$]="+L+"*(?:''|\"\")"),a.querySelectorAll("[selected]").length||q.push("\\["+L+"*(?:value|"+K+")"),a.querySelectorAll("[id~="+u+"-]").length||q.push("~="),a.querySelectorAll(":checked").length||q.push(":checked"),a.querySelectorAll("a#"+u+"+*").length||q.push(".#.+[+~]")}),ja(function(a){var b=g.createElement("input");b.setAttribute("type","hidden"),a.appendChild(b).setAttribute("name","D"),a.querySelectorAll("[name=d]").length&&q.push("name"+L+"*[*^$|!~]?="),a.querySelectorAll(":enabled").length||q.push(":enabled",":disabled"),a.querySelectorAll("*,:x"),q.push(",.*:")})),(c.matchesSelector=$.test(s=o.matches||o.webkitMatchesSelector||o.mozMatchesSelector||o.oMatchesSelector||o.msMatchesSelector))&&ja(function(a){c.disconnectedMatch=s.call(a,"div"),s.call(a,"[s!='']:x"),r.push("!=",P)}),q=q.length&&new RegExp(q.join("|")),r=r.length&&new RegExp(r.join("|")),b=$.test(o.compareDocumentPosition),t=b||$.test(o.contains)?function(a,b){var c=9===a.nodeType?a.documentElement:a,d=b&&b.parentNode;return a===d||!(!d||1!==d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition&&16&a.compareDocumentPosition(d)))}:function(a,b){if(b)while(b=b.parentNode)if(b===a)return!0;return!1},B=b?function(a,b){if(a===b)return l=!0,0;var d=!a.compareDocumentPosition-!b.compareDocumentPosition;return d?d:(d=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1,1&d||!c.sortDetached&&b.compareDocumentPosition(a)===d?a===g||a.ownerDocument===v&&t(v,a)?-1:b===g||b.ownerDocument===v&&t(v,b)?1:k?J(k,a)-J(k,b):0:4&d?-1:1)}:function(a,b){if(a===b)return l=!0,0;var c,d=0,e=a.parentNode,f=b.parentNode,h=[a],i=[b];if(!e||!f)return a===g?-1:b===g?1:e?-1:f?1:k?J(k,a)-J(k,b):0;if(e===f)return la(a,b);c=a;while(c=c.parentNode)h.unshift(c);c=b;while(c=c.parentNode)i.unshift(c);while(h[d]===i[d])d++;return d?la(h[d],i[d]):h[d]===v?-1:i[d]===v?1:0},g):n},ga.matches=function(a,b){return ga(a,null,null,b)},ga.matchesSelector=function(a,b){if((a.ownerDocument||a)!==n&&m(a),b=b.replace(U,"='$1']"),!(!c.matchesSelector||!p||r&&r.test(b)||q&&q.test(b)))try{var d=s.call(a,b);if(d||c.disconnectedMatch||a.document&&11!==a.document.nodeType)return d}catch(e){}return ga(b,n,null,[a]).length>0},ga.contains=function(a,b){return(a.ownerDocument||a)!==n&&m(a),t(a,b)},ga.attr=function(a,b){(a.ownerDocument||a)!==n&&m(a);var e=d.attrHandle[b.toLowerCase()],f=e&&D.call(d.attrHandle,b.toLowerCase())?e(a,b,!p):void 0;return void 0!==f?f:c.attributes||!p?a.getAttribute(b):(f=a.getAttributeNode(b))&&f.specified?f.value:null},ga.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},ga.uniqueSort=function(a){var b,d=[],e=0,f=0;if(l=!c.detectDuplicates,k=!c.sortStable&&a.slice(0),a.sort(B),l){while(b=a[f++])b===a[f]&&(e=d.push(f));while(e--)a.splice(d[e],1)}return k=null,a},e=ga.getText=function(a){var b,c="",d=0,f=a.nodeType;if(f){if(1===f||9===f||11===f){if("string"==typeof a.textContent)return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=e(a)}else if(3===f||4===f)return a.nodeValue}else while(b=a[d++])c+=e(b);return c},d=ga.selectors={cacheLength:50,createPseudo:ia,match:X,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(ca,da),a[3]=(a[3]||a[4]||a[5]||"").replace(ca,da),"~="===a[2]&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),"nth"===a[1].slice(0,3)?(a[3]||ga.error(a[0]),a[4]=+(a[4]?a[5]+(a[6]||1):2*("even"===a[3]||"odd"===a[3])),a[5]=+(a[7]+a[8]||"odd"===a[3])):a[3]&&ga.error(a[0]),a},PSEUDO:function(a){var b,c=!a[6]&&a[2];return X.CHILD.test(a[0])?null:(a[3]?a[2]=a[4]||a[5]||"":c&&V.test(c)&&(b=g(c,!0))&&(b=c.indexOf(")",c.length-b)-c.length)&&(a[0]=a[0].slice(0,b),a[2]=c.slice(0,b)),a.slice(0,3))}},filter:{TAG:function(a){var b=a.replace(ca,da).toLowerCase();return"*"===a?function(){return!0}:function(a){return a.nodeName&&a.nodeName.toLowerCase()===b}},CLASS:function(a){var b=y[a+" "];return b||(b=new RegExp("(^|"+L+")"+a+"("+L+"|$)"))&&y(a,function(a){return b.test("string"==typeof a.className&&a.className||"undefined"!=typeof a.getAttribute&&a.getAttribute("class")||"")})},ATTR:function(a,b,c){return function(d){var e=ga.attr(d,a);return null==e?"!="===b:b?(e+="","="===b?e===c:"!="===b?e!==c:"^="===b?c&&0===e.indexOf(c):"*="===b?c&&e.indexOf(c)>-1:"$="===b?c&&e.slice(-c.length)===c:"~="===b?(" "+e.replace(Q," ")+" ").indexOf(c)>-1:"|="===b?e===c||e.slice(0,c.length+1)===c+"-":!1):!0}},CHILD:function(a,b,c,d,e){var f="nth"!==a.slice(0,3),g="last"!==a.slice(-4),h="of-type"===b;return 1===d&&0===e?function(a){return!!a.parentNode}:function(b,c,i){var j,k,l,m,n,o,p=f!==g?"nextSibling":"previousSibling",q=b.parentNode,r=h&&b.nodeName.toLowerCase(),s=!i&&!h;if(q){if(f){while(p){l=b;while(l=l[p])if(h?l.nodeName.toLowerCase()===r:1===l.nodeType)return!1;o=p="only"===a&&!o&&"nextSibling"}return!0}if(o=[g?q.firstChild:q.lastChild],g&&s){k=q[u]||(q[u]={}),j=k[a]||[],n=j[0]===w&&j[1],m=j[0]===w&&j[2],l=n&&q.childNodes[n];while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if(1===l.nodeType&&++m&&l===b){k[a]=[w,n,m];break}}else if(s&&(j=(b[u]||(b[u]={}))[a])&&j[0]===w)m=j[1];else while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if((h?l.nodeName.toLowerCase()===r:1===l.nodeType)&&++m&&(s&&((l[u]||(l[u]={}))[a]=[w,m]),l===b))break;return m-=e,m===d||m%d===0&&m/d>=0}}},PSEUDO:function(a,b){var c,e=d.pseudos[a]||d.setFilters[a.toLowerCase()]||ga.error("unsupported pseudo: "+a);return e[u]?e(b):e.length>1?(c=[a,a,"",b],d.setFilters.hasOwnProperty(a.toLowerCase())?ia(function(a,c){var d,f=e(a,b),g=f.length;while(g--)d=J(a,f[g]),a[d]=!(c[d]=f[g])}):function(a){return e(a,0,c)}):e}},pseudos:{not:ia(function(a){var b=[],c=[],d=h(a.replace(R,"$1"));return d[u]?ia(function(a,b,c,e){var f,g=d(a,null,e,[]),h=a.length;while(h--)(f=g[h])&&(a[h]=!(b[h]=f))}):function(a,e,f){return b[0]=a,d(b,null,f,c),b[0]=null,!c.pop()}}),has:ia(function(a){return function(b){return ga(a,b).length>0}}),contains:ia(function(a){return a=a.replace(ca,da),function(b){return(b.textContent||b.innerText||e(b)).indexOf(a)>-1}}),lang:ia(function(a){return W.test(a||"")||ga.error("unsupported lang: "+a),a=a.replace(ca,da).toLowerCase(),function(b){var c;do if(c=p?b.lang:b.getAttribute("xml:lang")||b.getAttribute("lang"))return c=c.toLowerCase(),c===a||0===c.indexOf(a+"-");while((b=b.parentNode)&&1===b.nodeType);return!1}}),target:function(b){var c=a.location&&a.location.hash;return c&&c.slice(1)===b.id},root:function(a){return a===o},focus:function(a){return a===n.activeElement&&(!n.hasFocus||n.hasFocus())&&!!(a.type||a.href||~a.tabIndex)},enabled:function(a){return a.disabled===!1},disabled:function(a){return a.disabled===!0},checked:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&!!a.checked||"option"===b&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},empty:function(a){for(a=a.firstChild;a;a=a.nextSibling)if(a.nodeType<6)return!1;return!0},parent:function(a){return!d.pseudos.empty(a)},header:function(a){return Z.test(a.nodeName)},input:function(a){return Y.test(a.nodeName)},button:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&"button"===a.type||"button"===b},text:function(a){var b;return"input"===a.nodeName.toLowerCase()&&"text"===a.type&&(null==(b=a.getAttribute("type"))||"text"===b.toLowerCase())},first:oa(function(){return[0]}),last:oa(function(a,b){return[b-1]}),eq:oa(function(a,b,c){return[0>c?c+b:c]}),even:oa(function(a,b){for(var c=0;b>c;c+=2)a.push(c);return a}),odd:oa(function(a,b){for(var c=1;b>c;c+=2)a.push(c);return a}),lt:oa(function(a,b,c){for(var d=0>c?c+b:c;--d>=0;)a.push(d);return a}),gt:oa(function(a,b,c){for(var d=0>c?c+b:c;++d<b;)a.push(d);return a})}},d.pseudos.nth=d.pseudos.eq;for(b in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})d.pseudos[b]=ma(b);for(b in{submit:!0,reset:!0})d.pseudos[b]=na(b);function qa(){}qa.prototype=d.filters=d.pseudos,d.setFilters=new qa,g=ga.tokenize=function(a,b){var c,e,f,g,h,i,j,k=z[a+" "];if(k)return b?0:k.slice(0);h=a,i=[],j=d.preFilter;while(h){(!c||(e=S.exec(h)))&&(e&&(h=h.slice(e[0].length)||h),i.push(f=[])),c=!1,(e=T.exec(h))&&(c=e.shift(),f.push({value:c,type:e[0].replace(R," ")}),h=h.slice(c.length));for(g in d.filter)!(e=X[g].exec(h))||j[g]&&!(e=j[g](e))||(c=e.shift(),f.push({value:c,type:g,matches:e}),h=h.slice(c.length));if(!c)break}return b?h.length:h?ga.error(a):z(a,i).slice(0)};function ra(a){for(var b=0,c=a.length,d="";c>b;b++)d+=a[b].value;return d}function sa(a,b,c){var d=b.dir,e=c&&"parentNode"===d,f=x++;return b.first?function(b,c,f){while(b=b[d])if(1===b.nodeType||e)return a(b,c,f)}:function(b,c,g){var h,i,j=[w,f];if(g){while(b=b[d])if((1===b.nodeType||e)&&a(b,c,g))return!0}else while(b=b[d])if(1===b.nodeType||e){if(i=b[u]||(b[u]={}),(h=i[d])&&h[0]===w&&h[1]===f)return j[2]=h[2];if(i[d]=j,j[2]=a(b,c,g))return!0}}}function ta(a){return a.length>1?function(b,c,d){var e=a.length;while(e--)if(!a[e](b,c,d))return!1;return!0}:a[0]}function ua(a,b,c){for(var d=0,e=b.length;e>d;d++)ga(a,b[d],c);return c}function va(a,b,c,d,e){for(var f,g=[],h=0,i=a.length,j=null!=b;i>h;h++)(f=a[h])&&(!c||c(f,d,e))&&(g.push(f),j&&b.push(h));return g}function wa(a,b,c,d,e,f){return d&&!d[u]&&(d=wa(d)),e&&!e[u]&&(e=wa(e,f)),ia(function(f,g,h,i){var j,k,l,m=[],n=[],o=g.length,p=f||ua(b||"*",h.nodeType?[h]:h,[]),q=!a||!f&&b?p:va(p,m,a,h,i),r=c?e||(f?a:o||d)?[]:g:q;if(c&&c(q,r,h,i),d){j=va(r,n),d(j,[],h,i),k=j.length;while(k--)(l=j[k])&&(r[n[k]]=!(q[n[k]]=l))}if(f){if(e||a){if(e){j=[],k=r.length;while(k--)(l=r[k])&&j.push(q[k]=l);e(null,r=[],j,i)}k=r.length;while(k--)(l=r[k])&&(j=e?J(f,l):m[k])>-1&&(f[j]=!(g[j]=l))}}else r=va(r===g?r.splice(o,r.length):r),e?e(null,g,r,i):H.apply(g,r)})}function xa(a){for(var b,c,e,f=a.length,g=d.relative[a[0].type],h=g||d.relative[" "],i=g?1:0,k=sa(function(a){return a===b},h,!0),l=sa(function(a){return J(b,a)>-1},h,!0),m=[function(a,c,d){var e=!g&&(d||c!==j)||((b=c).nodeType?k(a,c,d):l(a,c,d));return b=null,e}];f>i;i++)if(c=d.relative[a[i].type])m=[sa(ta(m),c)];else{if(c=d.filter[a[i].type].apply(null,a[i].matches),c[u]){for(e=++i;f>e;e++)if(d.relative[a[e].type])break;return wa(i>1&&ta(m),i>1&&ra(a.slice(0,i-1).concat({value:" "===a[i-2].type?"*":""})).replace(R,"$1"),c,e>i&&xa(a.slice(i,e)),f>e&&xa(a=a.slice(e)),f>e&&ra(a))}m.push(c)}return ta(m)}function ya(a,b){var c=b.length>0,e=a.length>0,f=function(f,g,h,i,k){var l,m,o,p=0,q="0",r=f&&[],s=[],t=j,u=f||e&&d.find.TAG("*",k),v=w+=null==t?1:Math.random()||.1,x=u.length;for(k&&(j=g!==n&&g);q!==x&&null!=(l=u[q]);q++){if(e&&l){m=0;while(o=a[m++])if(o(l,g,h)){i.push(l);break}k&&(w=v)}c&&((l=!o&&l)&&p--,f&&r.push(l))}if(p+=q,c&&q!==p){m=0;while(o=b[m++])o(r,s,g,h);if(f){if(p>0)while(q--)r[q]||s[q]||(s[q]=F.call(i));s=va(s)}H.apply(i,s),k&&!f&&s.length>0&&p+b.length>1&&ga.uniqueSort(i)}return k&&(w=v,j=t),r};return c?ia(f):f}return h=ga.compile=function(a,b){var c,d=[],e=[],f=A[a+" "];if(!f){b||(b=g(a)),c=b.length;while(c--)f=xa(b[c]),f[u]?d.push(f):e.push(f);f=A(a,ya(e,d)),f.selector=a}return f},i=ga.select=function(a,b,e,f){var i,j,k,l,m,n="function"==typeof a&&a,o=!f&&g(a=n.selector||a);if(e=e||[],1===o.length){if(j=o[0]=o[0].slice(0),j.length>2&&"ID"===(k=j[0]).type&&c.getById&&9===b.nodeType&&p&&d.relative[j[1].type]){if(b=(d.find.ID(k.matches[0].replace(ca,da),b)||[])[0],!b)return e;n&&(b=b.parentNode),a=a.slice(j.shift().value.length)}i=X.needsContext.test(a)?0:j.length;while(i--){if(k=j[i],d.relative[l=k.type])break;if((m=d.find[l])&&(f=m(k.matches[0].replace(ca,da),aa.test(j[0].type)&&pa(b.parentNode)||b))){if(j.splice(i,1),a=f.length&&ra(j),!a)return H.apply(e,f),e;break}}}return(n||h(a,o))(f,b,!p,e,aa.test(a)&&pa(b.parentNode)||b),e},c.sortStable=u.split("").sort(B).join("")===u,c.detectDuplicates=!!l,m(),c.sortDetached=ja(function(a){return 1&a.compareDocumentPosition(n.createElement("div"))}),ja(function(a){return a.innerHTML="<a href='#'></a>","#"===a.firstChild.getAttribute("href")})||ka("type|href|height|width",function(a,b,c){return c?void 0:a.getAttribute(b,"type"===b.toLowerCase()?1:2)}),c.attributes&&ja(function(a){return a.innerHTML="<input/>",a.firstChild.setAttribute("value",""),""===a.firstChild.getAttribute("value")})||ka("value",function(a,b,c){return c||"input"!==a.nodeName.toLowerCase()?void 0:a.defaultValue}),ja(function(a){return null==a.getAttribute("disabled")})||ka(K,function(a,b,c){var d;return c?void 0:a[b]===!0?b.toLowerCase():(d=a.getAttributeNode(b))&&d.specified?d.value:null}),ga}(a);m.find=s,m.expr=s.selectors,m.expr[":"]=m.expr.pseudos,m.unique=s.uniqueSort,m.text=s.getText,m.isXMLDoc=s.isXML,m.contains=s.contains;var t=m.expr.match.needsContext,u=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,v=/^.[^:#\[\.,]*$/;function w(a,b,c){if(m.isFunction(b))return m.grep(a,function(a,d){return!!b.call(a,d,a)!==c});if(b.nodeType)return m.grep(a,function(a){return a===b!==c});if("string"==typeof b){if(v.test(b))return m.filter(b,a,c);b=m.filter(b,a)}return m.grep(a,function(a){return m.inArray(a,b)>=0!==c})}m.filter=function(a,b,c){var d=b[0];return c&&(a=":not("+a+")"),1===b.length&&1===d.nodeType?m.find.matchesSelector(d,a)?[d]:[]:m.find.matches(a,m.grep(b,function(a){return 1===a.nodeType}))},m.fn.extend({find:function(a){var b,c=[],d=this,e=d.length;if("string"!=typeof a)return this.pushStack(m(a).filter(function(){for(b=0;e>b;b++)if(m.contains(d[b],this))return!0}));for(b=0;e>b;b++)m.find(a,d[b],c);return c=this.pushStack(e>1?m.unique(c):c),c.selector=this.selector?this.selector+" "+a:a,c},filter:function(a){return this.pushStack(w(this,a||[],!1))},not:function(a){return this.pushStack(w(this,a||[],!0))},is:function(a){return!!w(this,"string"==typeof a&&t.test(a)?m(a):a||[],!1).length}});var x,y=a.document,z=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,A=m.fn.init=function(a,b){var c,d;if(!a)return this;if("string"==typeof a){if(c="<"===a.charAt(0)&&">"===a.charAt(a.length-1)&&a.length>=3?[null,a,null]:z.exec(a),!c||!c[1]&&b)return!b||b.jquery?(b||x).find(a):this.constructor(b).find(a);if(c[1]){if(b=b instanceof m?b[0]:b,m.merge(this,m.parseHTML(c[1],b&&b.nodeType?b.ownerDocument||b:y,!0)),u.test(c[1])&&m.isPlainObject(b))for(c in b)m.isFunction(this[c])?this[c](b[c]):this.attr(c,b[c]);return this}if(d=y.getElementById(c[2]),d&&d.parentNode){if(d.id!==c[2])return x.find(a);this.length=1,this[0]=d}return this.context=y,this.selector=a,this}return a.nodeType?(this.context=this[0]=a,this.length=1,this):m.isFunction(a)?"undefined"!=typeof x.ready?x.ready(a):a(m):(void 0!==a.selector&&(this.selector=a.selector,this.context=a.context),m.makeArray(a,this))};A.prototype=m.fn,x=m(y);var B=/^(?:parents|prev(?:Until|All))/,C={children:!0,contents:!0,next:!0,prev:!0};m.extend({dir:function(a,b,c){var d=[],e=a[b];while(e&&9!==e.nodeType&&(void 0===c||1!==e.nodeType||!m(e).is(c)))1===e.nodeType&&d.push(e),e=e[b];return d},sibling:function(a,b){for(var c=[];a;a=a.nextSibling)1===a.nodeType&&a!==b&&c.push(a);return c}}),m.fn.extend({has:function(a){var b,c=m(a,this),d=c.length;return this.filter(function(){for(b=0;d>b;b++)if(m.contains(this,c[b]))return!0})},closest:function(a,b){for(var c,d=0,e=this.length,f=[],g=t.test(a)||"string"!=typeof a?m(a,b||this.context):0;e>d;d++)for(c=this[d];c&&c!==b;c=c.parentNode)if(c.nodeType<11&&(g?g.index(c)>-1:1===c.nodeType&&m.find.matchesSelector(c,a))){f.push(c);break}return this.pushStack(f.length>1?m.unique(f):f)},index:function(a){return a?"string"==typeof a?m.inArray(this[0],m(a)):m.inArray(a.jquery?a[0]:a,this):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(a,b){return this.pushStack(m.unique(m.merge(this.get(),m(a,b))))},addBack:function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}});function D(a,b){do a=a[b];while(a&&1!==a.nodeType);return a}m.each({parent:function(a){var b=a.parentNode;return b&&11!==b.nodeType?b:null},parents:function(a){return m.dir(a,"parentNode")},parentsUntil:function(a,b,c){return m.dir(a,"parentNode",c)},next:function(a){return D(a,"nextSibling")},prev:function(a){return D(a,"previousSibling")},nextAll:function(a){return m.dir(a,"nextSibling")},prevAll:function(a){return m.dir(a,"previousSibling")},nextUntil:function(a,b,c){return m.dir(a,"nextSibling",c)},prevUntil:function(a,b,c){return m.dir(a,"previousSibling",c)},siblings:function(a){return m.sibling((a.parentNode||{}).firstChild,a)},children:function(a){return m.sibling(a.firstChild)},contents:function(a){return m.nodeName(a,"iframe")?a.contentDocument||a.contentWindow.document:m.merge([],a.childNodes)}},function(a,b){m.fn[a]=function(c,d){var e=m.map(this,b,c);return"Until"!==a.slice(-5)&&(d=c),d&&"string"==typeof d&&(e=m.filter(d,e)),this.length>1&&(C[a]||(e=m.unique(e)),B.test(a)&&(e=e.reverse())),this.pushStack(e)}});var E=/\S+/g,F={};function G(a){var b=F[a]={};return m.each(a.match(E)||[],function(a,c){b[c]=!0}),b}m.Callbacks=function(a){a="string"==typeof a?F[a]||G(a):m.extend({},a);var b,c,d,e,f,g,h=[],i=!a.once&&[],j=function(l){for(c=a.memory&&l,d=!0,f=g||0,g=0,e=h.length,b=!0;h&&e>f;f++)if(h[f].apply(l[0],l[1])===!1&&a.stopOnFalse){c=!1;break}b=!1,h&&(i?i.length&&j(i.shift()):c?h=[]:k.disable())},k={add:function(){if(h){var d=h.length;!function f(b){m.each(b,function(b,c){var d=m.type(c);"function"===d?a.unique&&k.has(c)||h.push(c):c&&c.length&&"string"!==d&&f(c)})}(arguments),b?e=h.length:c&&(g=d,j(c))}return this},remove:function(){return h&&m.each(arguments,function(a,c){var d;while((d=m.inArray(c,h,d))>-1)h.splice(d,1),b&&(e>=d&&e--,f>=d&&f--)}),this},has:function(a){return a?m.inArray(a,h)>-1:!(!h||!h.length)},empty:function(){return h=[],e=0,this},disable:function(){return h=i=c=void 0,this},disabled:function(){return!h},lock:function(){return i=void 0,c||k.disable(),this},locked:function(){return!i},fireWith:function(a,c){return!h||d&&!i||(c=c||[],c=[a,c.slice?c.slice():c],b?i.push(c):j(c)),this},fire:function(){return k.fireWith(this,arguments),this},fired:function(){return!!d}};return k},m.extend({Deferred:function(a){var b=[["resolve","done",m.Callbacks("once memory"),"resolved"],["reject","fail",m.Callbacks("once memory"),"rejected"],["notify","progress",m.Callbacks("memory")]],c="pending",d={state:function(){return c},always:function(){return e.done(arguments).fail(arguments),this},then:function(){var a=arguments;return m.Deferred(function(c){m.each(b,function(b,f){var g=m.isFunction(a[b])&&a[b];e[f[1]](function(){var a=g&&g.apply(this,arguments);a&&m.isFunction(a.promise)?a.promise().done(c.resolve).fail(c.reject).progress(c.notify):c[f[0]+"With"](this===d?c.promise():this,g?[a]:arguments)})}),a=null}).promise()},promise:function(a){return null!=a?m.extend(a,d):d}},e={};return d.pipe=d.then,m.each(b,function(a,f){var g=f[2],h=f[3];d[f[1]]=g.add,h&&g.add(function(){c=h},b[1^a][2].disable,b[2][2].lock),e[f[0]]=function(){return e[f[0]+"With"](this===e?d:this,arguments),this},e[f[0]+"With"]=g.fireWith}),d.promise(e),a&&a.call(e,e),e},when:function(a){var b=0,c=d.call(arguments),e=c.length,f=1!==e||a&&m.isFunction(a.promise)?e:0,g=1===f?a:m.Deferred(),h=function(a,b,c){return function(e){b[a]=this,c[a]=arguments.length>1?d.call(arguments):e,c===i?g.notifyWith(b,c):--f||g.resolveWith(b,c)}},i,j,k;if(e>1)for(i=new Array(e),j=new Array(e),k=new Array(e);e>b;b++)c[b]&&m.isFunction(c[b].promise)?c[b].promise().done(h(b,k,c)).fail(g.reject).progress(h(b,j,i)):--f;return f||g.resolveWith(k,c),g.promise()}});var H;m.fn.ready=function(a){return m.ready.promise().done(a),this},m.extend({isReady:!1,readyWait:1,holdReady:function(a){a?m.readyWait++:m.ready(!0)},ready:function(a){if(a===!0?!--m.readyWait:!m.isReady){if(!y.body)return setTimeout(m.ready);m.isReady=!0,a!==!0&&--m.readyWait>0||(H.resolveWith(y,[m]),m.fn.triggerHandler&&(m(y).triggerHandler("ready"),m(y).off("ready")))}}});function I(){y.addEventListener?(y.removeEventListener("DOMContentLoaded",J,!1),a.removeEventListener("load",J,!1)):(y.detachEvent("onreadystatechange",J),a.detachEvent("onload",J))}function J(){(y.addEventListener||"load"===event.type||"complete"===y.readyState)&&(I(),m.ready())}m.ready.promise=function(b){if(!H)if(H=m.Deferred(),"complete"===y.readyState)setTimeout(m.ready);else if(y.addEventListener)y.addEventListener("DOMContentLoaded",J,!1),a.addEventListener("load",J,!1);else{y.attachEvent("onreadystatechange",J),a.attachEvent("onload",J);var c=!1;try{c=null==a.frameElement&&y.documentElement}catch(d){}c&&c.doScroll&&!function e(){if(!m.isReady){try{c.doScroll("left")}catch(a){return setTimeout(e,50)}I(),m.ready()}}()}return H.promise(b)};var K="undefined",L;for(L in m(k))break;k.ownLast="0"!==L,k.inlineBlockNeedsLayout=!1,m(function(){var a,b,c,d;c=y.getElementsByTagName("body")[0],c&&c.style&&(b=y.createElement("div"),d=y.createElement("div"),d.style.cssText="position:absolute;border:0;width:0;height:0;top:0;left:-9999px",c.appendChild(d).appendChild(b),typeof b.style.zoom!==K&&(b.style.cssText="display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1",k.inlineBlockNeedsLayout=a=3===b.offsetWidth,a&&(c.style.zoom=1)),c.removeChild(d))}),function(){var a=y.createElement("div");if(null==k.deleteExpando){k.deleteExpando=!0;try{delete a.test}catch(b){k.deleteExpando=!1}}a=null}(),m.acceptData=function(a){var b=m.noData[(a.nodeName+" ").toLowerCase()],c=+a.nodeType||1;return 1!==c&&9!==c?!1:!b||b!==!0&&a.getAttribute("classid")===b};var M=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,N=/([A-Z])/g;function O(a,b,c){if(void 0===c&&1===a.nodeType){var d="data-"+b.replace(N,"-$1").toLowerCase();if(c=a.getAttribute(d),"string"==typeof c){try{c="true"===c?!0:"false"===c?!1:"null"===c?null:+c+""===c?+c:M.test(c)?m.parseJSON(c):c}catch(e){}m.data(a,b,c)}else c=void 0}return c}function P(a){var b;for(b in a)if(("data"!==b||!m.isEmptyObject(a[b]))&&"toJSON"!==b)return!1;
    ;return!0}function Q(a,b,d,e){if(m.acceptData(a)){var f,g,h=m.expando,i=a.nodeType,j=i?m.cache:a,k=i?a[h]:a[h]&&h;if(k&&j[k]&&(e||j[k].data)||void 0!==d||"string"!=typeof b)return k||(k=i?a[h]=c.pop()||m.guid++:h),j[k]||(j[k]=i?{}:{toJSON:m.noop}),("object"==typeof b||"function"==typeof b)&&(e?j[k]=m.extend(j[k],b):j[k].data=m.extend(j[k].data,b)),g=j[k],e||(g.data||(g.data={}),g=g.data),void 0!==d&&(g[m.camelCase(b)]=d),"string"==typeof b?(f=g[b],null==f&&(f=g[m.camelCase(b)])):f=g,f}}function R(a,b,c){if(m.acceptData(a)){var d,e,f=a.nodeType,g=f?m.cache:a,h=f?a[m.expando]:m.expando;if(g[h]){if(b&&(d=c?g[h]:g[h].data)){m.isArray(b)?b=b.concat(m.map(b,m.camelCase)):b in d?b=[b]:(b=m.camelCase(b),b=b in d?[b]:b.split(" ")),e=b.length;while(e--)delete d[b[e]];if(c?!P(d):!m.isEmptyObject(d))return}(c||(delete g[h].data,P(g[h])))&&(f?m.cleanData([a],!0):k.deleteExpando||g!=g.window?delete g[h]:g[h]=null)}}}m.extend({cache:{},noData:{"applet ":!0,"embed ":!0,"object ":"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"},hasData:function(a){return a=a.nodeType?m.cache[a[m.expando]]:a[m.expando],!!a&&!P(a)},data:function(a,b,c){return Q(a,b,c)},removeData:function(a,b){return R(a,b)},_data:function(a,b,c){return Q(a,b,c,!0)},_removeData:function(a,b){return R(a,b,!0)}}),m.fn.extend({data:function(a,b){var c,d,e,f=this[0],g=f&&f.attributes;if(void 0===a){if(this.length&&(e=m.data(f),1===f.nodeType&&!m._data(f,"parsedAttrs"))){c=g.length;while(c--)g[c]&&(d=g[c].name,0===d.indexOf("data-")&&(d=m.camelCase(d.slice(5)),O(f,d,e[d])));m._data(f,"parsedAttrs",!0)}return e}return"object"==typeof a?this.each(function(){m.data(this,a)}):arguments.length>1?this.each(function(){m.data(this,a,b)}):f?O(f,a,m.data(f,a)):void 0},removeData:function(a){return this.each(function(){m.removeData(this,a)})}}),m.extend({queue:function(a,b,c){var d;return a?(b=(b||"fx")+"queue",d=m._data(a,b),c&&(!d||m.isArray(c)?d=m._data(a,b,m.makeArray(c)):d.push(c)),d||[]):void 0},dequeue:function(a,b){b=b||"fx";var c=m.queue(a,b),d=c.length,e=c.shift(),f=m._queueHooks(a,b),g=function(){m.dequeue(a,b)};"inprogress"===e&&(e=c.shift(),d--),e&&("fx"===b&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},_queueHooks:function(a,b){var c=b+"queueHooks";return m._data(a,c)||m._data(a,c,{empty:m.Callbacks("once memory").add(function(){m._removeData(a,b+"queue"),m._removeData(a,c)})})}}),m.fn.extend({queue:function(a,b){var c=2;return"string"!=typeof a&&(b=a,a="fx",c--),arguments.length<c?m.queue(this[0],a):void 0===b?this:this.each(function(){var c=m.queue(this,a,b);m._queueHooks(this,a),"fx"===a&&"inprogress"!==c[0]&&m.dequeue(this,a)})},dequeue:function(a){return this.each(function(){m.dequeue(this,a)})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,b){var c,d=1,e=m.Deferred(),f=this,g=this.length,h=function(){--d||e.resolveWith(f,[f])};"string"!=typeof a&&(b=a,a=void 0),a=a||"fx";while(g--)c=m._data(f[g],a+"queueHooks"),c&&c.empty&&(d++,c.empty.add(h));return h(),e.promise(b)}});var S=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,T=["Top","Right","Bottom","Left"],U=function(a,b){return a=b||a,"none"===m.css(a,"display")||!m.contains(a.ownerDocument,a)},V=m.access=function(a,b,c,d,e,f,g){var h=0,i=a.length,j=null==c;if("object"===m.type(c)){e=!0;for(h in c)m.access(a,b,h,c[h],!0,f,g)}else if(void 0!==d&&(e=!0,m.isFunction(d)||(g=!0),j&&(g?(b.call(a,d),b=null):(j=b,b=function(a,b,c){return j.call(m(a),c)})),b))for(;i>h;h++)b(a[h],c,g?d:d.call(a[h],h,b(a[h],c)));return e?a:j?b.call(a):i?b(a[0],c):f},W=/^(?:checkbox|radio)$/i;!function(){var a=y.createElement("input"),b=y.createElement("div"),c=y.createDocumentFragment();if(b.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",k.leadingWhitespace=3===b.firstChild.nodeType,k.tbody=!b.getElementsByTagName("tbody").length,k.htmlSerialize=!!b.getElementsByTagName("link").length,k.html5Clone="<:nav></:nav>"!==y.createElement("nav").cloneNode(!0).outerHTML,a.type="checkbox",a.checked=!0,c.appendChild(a),k.appendChecked=a.checked,b.innerHTML="<textarea>x</textarea>",k.noCloneChecked=!!b.cloneNode(!0).lastChild.defaultValue,c.appendChild(b),b.innerHTML="<input type='radio' checked='checked' name='t'/>",k.checkClone=b.cloneNode(!0).cloneNode(!0).lastChild.checked,k.noCloneEvent=!0,b.attachEvent&&(b.attachEvent("onclick",function(){k.noCloneEvent=!1}),b.cloneNode(!0).click()),null==k.deleteExpando){k.deleteExpando=!0;try{delete b.test}catch(d){k.deleteExpando=!1}}}(),function(){var b,c,d=y.createElement("div");for(b in{submit:!0,change:!0,focusin:!0})c="on"+b,(k[b+"Bubbles"]=c in a)||(d.setAttribute(c,"t"),k[b+"Bubbles"]=d.attributes[c].expando===!1);d=null}();var X=/^(?:input|select|textarea)$/i,Y=/^key/,Z=/^(?:mouse|pointer|contextmenu)|click/,$=/^(?:focusinfocus|focusoutblur)$/,_=/^([^.]*)(?:\.(.+)|)$/;function aa(){return!0}function ba(){return!1}function ca(){try{return y.activeElement}catch(a){}}m.event={global:{},add:function(a,b,c,d,e){var f,g,h,i,j,k,l,n,o,p,q,r=m._data(a);if(r){c.handler&&(i=c,c=i.handler,e=i.selector),c.guid||(c.guid=m.guid++),(g=r.events)||(g=r.events={}),(k=r.handle)||(k=r.handle=function(a){return typeof m===K||a&&m.event.triggered===a.type?void 0:m.event.dispatch.apply(k.elem,arguments)},k.elem=a),b=(b||"").match(E)||[""],h=b.length;while(h--)f=_.exec(b[h])||[],o=q=f[1],p=(f[2]||"").split(".").sort(),o&&(j=m.event.special[o]||{},o=(e?j.delegateType:j.bindType)||o,j=m.event.special[o]||{},l=m.extend({type:o,origType:q,data:d,handler:c,guid:c.guid,selector:e,needsContext:e&&m.expr.match.needsContext.test(e),namespace:p.join(".")},i),(n=g[o])||(n=g[o]=[],n.delegateCount=0,j.setup&&j.setup.call(a,d,p,k)!==!1||(a.addEventListener?a.addEventListener(o,k,!1):a.attachEvent&&a.attachEvent("on"+o,k))),j.add&&(j.add.call(a,l),l.handler.guid||(l.handler.guid=c.guid)),e?n.splice(n.delegateCount++,0,l):n.push(l),m.event.global[o]=!0);a=null}},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,n,o,p,q,r=m.hasData(a)&&m._data(a);if(r&&(k=r.events)){b=(b||"").match(E)||[""],j=b.length;while(j--)if(h=_.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o){l=m.event.special[o]||{},o=(d?l.delegateType:l.bindType)||o,n=k[o]||[],h=h[2]&&new RegExp("(^|\\.)"+p.join("\\.(?:.*\\.|)")+"(\\.|$)"),i=f=n.length;while(f--)g=n[f],!e&&q!==g.origType||c&&c.guid!==g.guid||h&&!h.test(g.namespace)||d&&d!==g.selector&&("**"!==d||!g.selector)||(n.splice(f,1),g.selector&&n.delegateCount--,l.remove&&l.remove.call(a,g));i&&!n.length&&(l.teardown&&l.teardown.call(a,p,r.handle)!==!1||m.removeEvent(a,o,r.handle),delete k[o])}else for(o in k)m.event.remove(a,o+b[j],c,d,!0);m.isEmptyObject(k)&&(delete r.handle,m._removeData(a,"events"))}},trigger:function(b,c,d,e){var f,g,h,i,k,l,n,o=[d||y],p=j.call(b,"type")?b.type:b,q=j.call(b,"namespace")?b.namespace.split("."):[];if(h=l=d=d||y,3!==d.nodeType&&8!==d.nodeType&&!$.test(p+m.event.triggered)&&(p.indexOf(".")>=0&&(q=p.split("."),p=q.shift(),q.sort()),g=p.indexOf(":")<0&&"on"+p,b=b[m.expando]?b:new m.Event(p,"object"==typeof b&&b),b.isTrigger=e?2:3,b.namespace=q.join("."),b.namespace_re=b.namespace?new RegExp("(^|\\.)"+q.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,b.result=void 0,b.target||(b.target=d),c=null==c?[b]:m.makeArray(c,[b]),k=m.event.special[p]||{},e||!k.trigger||k.trigger.apply(d,c)!==!1)){if(!e&&!k.noBubble&&!m.isWindow(d)){for(i=k.delegateType||p,$.test(i+p)||(h=h.parentNode);h;h=h.parentNode)o.push(h),l=h;l===(d.ownerDocument||y)&&o.push(l.defaultView||l.parentWindow||a)}n=0;while((h=o[n++])&&!b.isPropagationStopped())b.type=n>1?i:k.bindType||p,f=(m._data(h,"events")||{})[b.type]&&m._data(h,"handle"),f&&f.apply(h,c),f=g&&h[g],f&&f.apply&&m.acceptData(h)&&(b.result=f.apply(h,c),b.result===!1&&b.preventDefault());if(b.type=p,!e&&!b.isDefaultPrevented()&&(!k._default||k._default.apply(o.pop(),c)===!1)&&m.acceptData(d)&&g&&d[p]&&!m.isWindow(d)){l=d[g],l&&(d[g]=null),m.event.triggered=p;try{d[p]()}catch(r){}m.event.triggered=void 0,l&&(d[g]=l)}return b.result}},dispatch:function(a){a=m.event.fix(a);var b,c,e,f,g,h=[],i=d.call(arguments),j=(m._data(this,"events")||{})[a.type]||[],k=m.event.special[a.type]||{};if(i[0]=a,a.delegateTarget=this,!k.preDispatch||k.preDispatch.call(this,a)!==!1){h=m.event.handlers.call(this,a,j),b=0;while((f=h[b++])&&!a.isPropagationStopped()){a.currentTarget=f.elem,g=0;while((e=f.handlers[g++])&&!a.isImmediatePropagationStopped())(!a.namespace_re||a.namespace_re.test(e.namespace))&&(a.handleObj=e,a.data=e.data,c=((m.event.special[e.origType]||{}).handle||e.handler).apply(f.elem,i),void 0!==c&&(a.result=c)===!1&&(a.preventDefault(),a.stopPropagation()))}return k.postDispatch&&k.postDispatch.call(this,a),a.result}},handlers:function(a,b){var c,d,e,f,g=[],h=b.delegateCount,i=a.target;if(h&&i.nodeType&&(!a.button||"click"!==a.type))for(;i!=this;i=i.parentNode||this)if(1===i.nodeType&&(i.disabled!==!0||"click"!==a.type)){for(e=[],f=0;h>f;f++)d=b[f],c=d.selector+" ",void 0===e[c]&&(e[c]=d.needsContext?m(c,this).index(i)>=0:m.find(c,this,null,[i]).length),e[c]&&e.push(d);e.length&&g.push({elem:i,handlers:e})}return h<b.length&&g.push({elem:this,handlers:b.slice(h)}),g},fix:function(a){if(a[m.expando])return a;var b,c,d,e=a.type,f=a,g=this.fixHooks[e];g||(this.fixHooks[e]=g=Z.test(e)?this.mouseHooks:Y.test(e)?this.keyHooks:{}),d=g.props?this.props.concat(g.props):this.props,a=new m.Event(f),b=d.length;while(b--)c=d[b],a[c]=f[c];return a.target||(a.target=f.srcElement||y),3===a.target.nodeType&&(a.target=a.target.parentNode),a.metaKey=!!a.metaKey,g.filter?g.filter(a,f):a},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(a,b){return null==a.which&&(a.which=null!=b.charCode?b.charCode:b.keyCode),a}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(a,b){var c,d,e,f=b.button,g=b.fromElement;return null==a.pageX&&null!=b.clientX&&(d=a.target.ownerDocument||y,e=d.documentElement,c=d.body,a.pageX=b.clientX+(e&&e.scrollLeft||c&&c.scrollLeft||0)-(e&&e.clientLeft||c&&c.clientLeft||0),a.pageY=b.clientY+(e&&e.scrollTop||c&&c.scrollTop||0)-(e&&e.clientTop||c&&c.clientTop||0)),!a.relatedTarget&&g&&(a.relatedTarget=g===a.target?b.toElement:g),a.which||void 0===f||(a.which=1&f?1:2&f?3:4&f?2:0),a}},special:{load:{noBubble:!0},focus:{trigger:function(){if(this!==ca()&&this.focus)try{return this.focus(),!1}catch(a){}},delegateType:"focusin"},blur:{trigger:function(){return this===ca()&&this.blur?(this.blur(),!1):void 0},delegateType:"focusout"},click:{trigger:function(){return m.nodeName(this,"input")&&"checkbox"===this.type&&this.click?(this.click(),!1):void 0},_default:function(a){return m.nodeName(a.target,"a")}},beforeunload:{postDispatch:function(a){void 0!==a.result&&a.originalEvent&&(a.originalEvent.returnValue=a.result)}}},simulate:function(a,b,c,d){var e=m.extend(new m.Event,c,{type:a,isSimulated:!0,originalEvent:{}});d?m.event.trigger(e,null,b):m.event.dispatch.call(b,e),e.isDefaultPrevented()&&c.preventDefault()}},m.removeEvent=y.removeEventListener?function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c,!1)}:function(a,b,c){var d="on"+b;a.detachEvent&&(typeof a[d]===K&&(a[d]=null),a.detachEvent(d,c))},m.Event=function(a,b){return this instanceof m.Event?(a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||void 0===a.defaultPrevented&&a.returnValue===!1?aa:ba):this.type=a,b&&m.extend(this,b),this.timeStamp=a&&a.timeStamp||m.now(),void(this[m.expando]=!0)):new m.Event(a,b)},m.Event.prototype={isDefaultPrevented:ba,isPropagationStopped:ba,isImmediatePropagationStopped:ba,preventDefault:function(){var a=this.originalEvent;this.isDefaultPrevented=aa,a&&(a.preventDefault?a.preventDefault():a.returnValue=!1)},stopPropagation:function(){var a=this.originalEvent;this.isPropagationStopped=aa,a&&(a.stopPropagation&&a.stopPropagation(),a.cancelBubble=!0)},stopImmediatePropagation:function(){var a=this.originalEvent;this.isImmediatePropagationStopped=aa,a&&a.stopImmediatePropagation&&a.stopImmediatePropagation(),this.stopPropagation()}},m.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(a,b){m.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj;return(!e||e!==d&&!m.contains(d,e))&&(a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b),c}}}),k.submitBubbles||(m.event.special.submit={setup:function(){return m.nodeName(this,"form")?!1:void m.event.add(this,"click._submit keypress._submit",function(a){var b=a.target,c=m.nodeName(b,"input")||m.nodeName(b,"button")?b.form:void 0;c&&!m._data(c,"submitBubbles")&&(m.event.add(c,"submit._submit",function(a){a._submit_bubble=!0}),m._data(c,"submitBubbles",!0))})},postDispatch:function(a){a._submit_bubble&&(delete a._submit_bubble,this.parentNode&&!a.isTrigger&&m.event.simulate("submit",this.parentNode,a,!0))},teardown:function(){return m.nodeName(this,"form")?!1:void m.event.remove(this,"._submit")}}),k.changeBubbles||(m.event.special.change={setup:function(){return X.test(this.nodeName)?(("checkbox"===this.type||"radio"===this.type)&&(m.event.add(this,"propertychange._change",function(a){"checked"===a.originalEvent.propertyName&&(this._just_changed=!0)}),m.event.add(this,"click._change",function(a){this._just_changed&&!a.isTrigger&&(this._just_changed=!1),m.event.simulate("change",this,a,!0)})),!1):void m.event.add(this,"beforeactivate._change",function(a){var b=a.target;X.test(b.nodeName)&&!m._data(b,"changeBubbles")&&(m.event.add(b,"change._change",function(a){!this.parentNode||a.isSimulated||a.isTrigger||m.event.simulate("change",this.parentNode,a,!0)}),m._data(b,"changeBubbles",!0))})},handle:function(a){var b=a.target;return this!==b||a.isSimulated||a.isTrigger||"radio"!==b.type&&"checkbox"!==b.type?a.handleObj.handler.apply(this,arguments):void 0},teardown:function(){return m.event.remove(this,"._change"),!X.test(this.nodeName)}}),k.focusinBubbles||m.each({focus:"focusin",blur:"focusout"},function(a,b){var c=function(a){m.event.simulate(b,a.target,m.event.fix(a),!0)};m.event.special[b]={setup:function(){var d=this.ownerDocument||this,e=m._data(d,b);e||d.addEventListener(a,c,!0),m._data(d,b,(e||0)+1)},teardown:function(){var d=this.ownerDocument||this,e=m._data(d,b)-1;e?m._data(d,b,e):(d.removeEventListener(a,c,!0),m._removeData(d,b))}}}),m.fn.extend({on:function(a,b,c,d,e){var f,g;if("object"==typeof a){"string"!=typeof b&&(c=c||b,b=void 0);for(f in a)this.on(f,b,c,a[f],e);return this}if(null==c&&null==d?(d=b,c=b=void 0):null==d&&("string"==typeof b?(d=c,c=void 0):(d=c,c=b,b=void 0)),d===!1)d=ba;else if(!d)return this;return 1===e&&(g=d,d=function(a){return m().off(a),g.apply(this,arguments)},d.guid=g.guid||(g.guid=m.guid++)),this.each(function(){m.event.add(this,a,d,c,b)})},one:function(a,b,c,d){return this.on(a,b,c,d,1)},off:function(a,b,c){var d,e;if(a&&a.preventDefault&&a.handleObj)return d=a.handleObj,m(a.delegateTarget).off(d.namespace?d.origType+"."+d.namespace:d.origType,d.selector,d.handler),this;if("object"==typeof a){for(e in a)this.off(e,b,a[e]);return this}return(b===!1||"function"==typeof b)&&(c=b,b=void 0),c===!1&&(c=ba),this.each(function(){m.event.remove(this,a,c,b)})},trigger:function(a,b){return this.each(function(){m.event.trigger(a,b,this)})},triggerHandler:function(a,b){var c=this[0];return c?m.event.trigger(a,b,c,!0):void 0}});function da(a){var b=ea.split("|"),c=a.createDocumentFragment();if(c.createElement)while(b.length)c.createElement(b.pop());return c}var ea="abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",fa=/ jQuery\d+="(?:null|\d+)"/g,ga=new RegExp("<(?:"+ea+")[\\s/>]","i"),ha=/^\s+/,ia=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,ja=/<([\w:]+)/,ka=/<tbody/i,la=/<|&#?\w+;/,ma=/<(?:script|style|link)/i,na=/checked\s*(?:[^=]|=\s*.checked.)/i,oa=/^$|\/(?:java|ecma)script/i,pa=/^true\/(.*)/,qa=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,ra={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],area:[1,"<map>","</map>"],param:[1,"<object>","</object>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:k.htmlSerialize?[0,"",""]:[1,"X<div>","</div>"]},sa=da(y),ta=sa.appendChild(y.createElement("div"));ra.optgroup=ra.option,ra.tbody=ra.tfoot=ra.colgroup=ra.caption=ra.thead,ra.th=ra.td;function ua(a,b){var c,d,e=0,f=typeof a.getElementsByTagName!==K?a.getElementsByTagName(b||"*"):typeof a.querySelectorAll!==K?a.querySelectorAll(b||"*"):void 0;if(!f)for(f=[],c=a.childNodes||a;null!=(d=c[e]);e++)!b||m.nodeName(d,b)?f.push(d):m.merge(f,ua(d,b));return void 0===b||b&&m.nodeName(a,b)?m.merge([a],f):f}function va(a){W.test(a.type)&&(a.defaultChecked=a.checked)}function wa(a,b){return m.nodeName(a,"table")&&m.nodeName(11!==b.nodeType?b:b.firstChild,"tr")?a.getElementsByTagName("tbody")[0]||a.appendChild(a.ownerDocument.createElement("tbody")):a}function xa(a){return a.type=(null!==m.find.attr(a,"type"))+"/"+a.type,a}function ya(a){var b=pa.exec(a.type);return b?a.type=b[1]:a.removeAttribute("type"),a}function za(a,b){for(var c,d=0;null!=(c=a[d]);d++)m._data(c,"globalEval",!b||m._data(b[d],"globalEval"))}function Aa(a,b){if(1===b.nodeType&&m.hasData(a)){var c,d,e,f=m._data(a),g=m._data(b,f),h=f.events;if(h){delete g.handle,g.events={};for(c in h)for(d=0,e=h[c].length;e>d;d++)m.event.add(b,c,h[c][d])}g.data&&(g.data=m.extend({},g.data))}}function Ba(a,b){var c,d,e;if(1===b.nodeType){if(c=b.nodeName.toLowerCase(),!k.noCloneEvent&&b[m.expando]){e=m._data(b);for(d in e.events)m.removeEvent(b,d,e.handle);b.removeAttribute(m.expando)}"script"===c&&b.text!==a.text?(xa(b).text=a.text,ya(b)):"object"===c?(b.parentNode&&(b.outerHTML=a.outerHTML),k.html5Clone&&a.innerHTML&&!m.trim(b.innerHTML)&&(b.innerHTML=a.innerHTML)):"input"===c&&W.test(a.type)?(b.defaultChecked=b.checked=a.checked,b.value!==a.value&&(b.value=a.value)):"option"===c?b.defaultSelected=b.selected=a.defaultSelected:("input"===c||"textarea"===c)&&(b.defaultValue=a.defaultValue)}}m.extend({clone:function(a,b,c){var d,e,f,g,h,i=m.contains(a.ownerDocument,a);if(k.html5Clone||m.isXMLDoc(a)||!ga.test("<"+a.nodeName+">")?f=a.cloneNode(!0):(ta.innerHTML=a.outerHTML,ta.removeChild(f=ta.firstChild)),!(k.noCloneEvent&&k.noCloneChecked||1!==a.nodeType&&11!==a.nodeType||m.isXMLDoc(a)))for(d=ua(f),h=ua(a),g=0;null!=(e=h[g]);++g)d[g]&&Ba(e,d[g]);if(b)if(c)for(h=h||ua(a),d=d||ua(f),g=0;null!=(e=h[g]);g++)Aa(e,d[g]);else Aa(a,f);return d=ua(f,"script"),d.length>0&&za(d,!i&&ua(a,"script")),d=h=e=null,f},buildFragment:function(a,b,c,d){for(var e,f,g,h,i,j,l,n=a.length,o=da(b),p=[],q=0;n>q;q++)if(f=a[q],f||0===f)if("object"===m.type(f))m.merge(p,f.nodeType?[f]:f);else if(la.test(f)){h=h||o.appendChild(b.createElement("div")),i=(ja.exec(f)||["",""])[1].toLowerCase(),l=ra[i]||ra._default,h.innerHTML=l[1]+f.replace(ia,"<$1></$2>")+l[2],e=l[0];while(e--)h=h.lastChild;if(!k.leadingWhitespace&&ha.test(f)&&p.push(b.createTextNode(ha.exec(f)[0])),!k.tbody){f="table"!==i||ka.test(f)?"<table>"!==l[1]||ka.test(f)?0:h:h.firstChild,e=f&&f.childNodes.length;while(e--)m.nodeName(j=f.childNodes[e],"tbody")&&!j.childNodes.length&&f.removeChild(j)}m.merge(p,h.childNodes),h.textContent="";while(h.firstChild)h.removeChild(h.firstChild);h=o.lastChild}else p.push(b.createTextNode(f));h&&o.removeChild(h),k.appendChecked||m.grep(ua(p,"input"),va),q=0;while(f=p[q++])if((!d||-1===m.inArray(f,d))&&(g=m.contains(f.ownerDocument,f),h=ua(o.appendChild(f),"script"),g&&za(h),c)){e=0;while(f=h[e++])oa.test(f.type||"")&&c.push(f)}return h=null,o},cleanData:function(a,b){for(var d,e,f,g,h=0,i=m.expando,j=m.cache,l=k.deleteExpando,n=m.event.special;null!=(d=a[h]);h++)if((b||m.acceptData(d))&&(f=d[i],g=f&&j[f])){if(g.events)for(e in g.events)n[e]?m.event.remove(d,e):m.removeEvent(d,e,g.handle);j[f]&&(delete j[f],l?delete d[i]:typeof d.removeAttribute!==K?d.removeAttribute(i):d[i]=null,c.push(f))}}}),m.fn.extend({text:function(a){return V(this,function(a){return void 0===a?m.text(this):this.empty().append((this[0]&&this[0].ownerDocument||y).createTextNode(a))},null,a,arguments.length)},append:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=wa(this,a);b.appendChild(a)}})},prepend:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=wa(this,a);b.insertBefore(a,b.firstChild)}})},before:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this)})},after:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this.nextSibling)})},remove:function(a,b){for(var c,d=a?m.filter(a,this):this,e=0;null!=(c=d[e]);e++)b||1!==c.nodeType||m.cleanData(ua(c)),c.parentNode&&(b&&m.contains(c.ownerDocument,c)&&za(ua(c,"script")),c.parentNode.removeChild(c));return this},empty:function(){for(var a,b=0;null!=(a=this[b]);b++){1===a.nodeType&&m.cleanData(ua(a,!1));while(a.firstChild)a.removeChild(a.firstChild);a.options&&m.nodeName(a,"select")&&(a.options.length=0)}return this},clone:function(a,b){return a=null==a?!1:a,b=null==b?a:b,this.map(function(){return m.clone(this,a,b)})},html:function(a){return V(this,function(a){var b=this[0]||{},c=0,d=this.length;if(void 0===a)return 1===b.nodeType?b.innerHTML.replace(fa,""):void 0;if(!("string"!=typeof a||ma.test(a)||!k.htmlSerialize&&ga.test(a)||!k.leadingWhitespace&&ha.test(a)||ra[(ja.exec(a)||["",""])[1].toLowerCase()])){a=a.replace(ia,"<$1></$2>");try{for(;d>c;c++)b=this[c]||{},1===b.nodeType&&(m.cleanData(ua(b,!1)),b.innerHTML=a);b=0}catch(e){}}b&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(){var a=arguments[0];return this.domManip(arguments,function(b){a=this.parentNode,m.cleanData(ua(this)),a&&a.replaceChild(b,this)}),a&&(a.length||a.nodeType)?this:this.remove()},detach:function(a){return this.remove(a,!0)},domManip:function(a,b){a=e.apply([],a);var c,d,f,g,h,i,j=0,l=this.length,n=this,o=l-1,p=a[0],q=m.isFunction(p);if(q||l>1&&"string"==typeof p&&!k.checkClone&&na.test(p))return this.each(function(c){var d=n.eq(c);q&&(a[0]=p.call(this,c,d.html())),d.domManip(a,b)});if(l&&(i=m.buildFragment(a,this[0].ownerDocument,!1,this),c=i.firstChild,1===i.childNodes.length&&(i=c),c)){for(g=m.map(ua(i,"script"),xa),f=g.length;l>j;j++)d=i,j!==o&&(d=m.clone(d,!0,!0),f&&m.merge(g,ua(d,"script"))),b.call(this[j],d,j);if(f)for(h=g[g.length-1].ownerDocument,m.map(g,ya),j=0;f>j;j++)d=g[j],oa.test(d.type||"")&&!m._data(d,"globalEval")&&m.contains(h,d)&&(d.src?m._evalUrl&&m._evalUrl(d.src):m.globalEval((d.text||d.textContent||d.innerHTML||"").replace(qa,"")));i=c=null}return this}}),m.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){m.fn[a]=function(a){for(var c,d=0,e=[],g=m(a),h=g.length-1;h>=d;d++)c=d===h?this:this.clone(!0),m(g[d])[b](c),f.apply(e,c.get());return this.pushStack(e)}});var Ca,Da={};function Ea(b,c){var d,e=m(c.createElement(b)).appendTo(c.body),f=a.getDefaultComputedStyle&&(d=a.getDefaultComputedStyle(e[0]))?d.display:m.css(e[0],"display");return e.detach(),f}function Fa(a){var b=y,c=Da[a];return c||(c=Ea(a,b),"none"!==c&&c||(Ca=(Ca||m("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement),b=(Ca[0].contentWindow||Ca[0].contentDocument).document,b.write(),b.close(),c=Ea(a,b),Ca.detach()),Da[a]=c),c}!function(){var a;k.shrinkWrapBlocks=function(){if(null!=a)return a;a=!1;var b,c,d;return c=y.getElementsByTagName("body")[0],c&&c.style?(b=y.createElement("div"),d=y.createElement("div"),d.style.cssText="position:absolute;border:0;width:0;height:0;top:0;left:-9999px",c.appendChild(d).appendChild(b),typeof b.style.zoom!==K&&(b.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1",b.appendChild(y.createElement("div")).style.width="5px",a=3!==b.offsetWidth),c.removeChild(d),a):void 0}}();var Ga=/^margin/,Ha=new RegExp("^("+S+")(?!px)[a-z%]+$","i"),Ia,Ja,Ka=/^(top|right|bottom|left)$/;a.getComputedStyle?(Ia=function(b){return b.ownerDocument.defaultView.opener?b.ownerDocument.defaultView.getComputedStyle(b,null):a.getComputedStyle(b,null)},Ja=function(a,b,c){var d,e,f,g,h=a.style;return c=c||Ia(a),g=c?c.getPropertyValue(b)||c[b]:void 0,c&&(""!==g||m.contains(a.ownerDocument,a)||(g=m.style(a,b)),Ha.test(g)&&Ga.test(b)&&(d=h.width,e=h.minWidth,f=h.maxWidth,h.minWidth=h.maxWidth=h.width=g,g=c.width,h.width=d,h.minWidth=e,h.maxWidth=f)),void 0===g?g:g+""}):y.documentElement.currentStyle&&(Ia=function(a){return a.currentStyle},Ja=function(a,b,c){var d,e,f,g,h=a.style;return c=c||Ia(a),g=c?c[b]:void 0,null==g&&h&&h[b]&&(g=h[b]),Ha.test(g)&&!Ka.test(b)&&(d=h.left,e=a.runtimeStyle,f=e&&e.left,f&&(e.left=a.currentStyle.left),h.left="fontSize"===b?"1em":g,g=h.pixelLeft+"px",h.left=d,f&&(e.left=f)),void 0===g?g:g+""||"auto"});function La(a,b){return{get:function(){var c=a();if(null!=c)return c?void delete this.get:(this.get=b).apply(this,arguments)}}}!function(){var b,c,d,e,f,g,h;if(b=y.createElement("div"),b.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",d=b.getElementsByTagName("a")[0],c=d&&d.style){c.cssText="float:left;opacity:.5",k.opacity="0.5"===c.opacity,k.cssFloat=!!c.cssFloat,b.style.backgroundClip="content-box",b.cloneNode(!0).style.backgroundClip="",k.clearCloneStyle="content-box"===b.style.backgroundClip,k.boxSizing=""===c.boxSizing||""===c.MozBoxSizing||""===c.WebkitBoxSizing,m.extend(k,{reliableHiddenOffsets:function(){return null==g&&i(),g},boxSizingReliable:function(){return null==f&&i(),f},pixelPosition:function(){return null==e&&i(),e},reliableMarginRight:function(){return null==h&&i(),h}});function i(){var b,c,d,i;c=y.getElementsByTagName("body")[0],c&&c.style&&(b=y.createElement("div"),d=y.createElement("div"),d.style.cssText="position:absolute;border:0;width:0;height:0;top:0;left:-9999px",c.appendChild(d).appendChild(b),b.style.cssText="-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute",e=f=!1,h=!0,a.getComputedStyle&&(e="1%"!==(a.getComputedStyle(b,null)||{}).top,f="4px"===(a.getComputedStyle(b,null)||{width:"4px"}).width,i=b.appendChild(y.createElement("div")),i.style.cssText=b.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",i.style.marginRight=i.style.width="0",b.style.width="1px",h=!parseFloat((a.getComputedStyle(i,null)||{}).marginRight),b.removeChild(i)),b.innerHTML="<table><tr><td></td><td>t</td></tr></table>",i=b.getElementsByTagName("td"),i[0].style.cssText="margin:0;border:0;padding:0;display:none",g=0===i[0].offsetHeight,g&&(i[0].style.display="",i[1].style.display="none",g=0===i[0].offsetHeight),c.removeChild(d))}}}(),m.swap=function(a,b,c,d){var e,f,g={};for(f in b)g[f]=a.style[f],a.style[f]=b[f];e=c.apply(a,d||[]);for(f in b)a.style[f]=g[f];return e};var Ma=/alpha\([^)]*\)/i,Na=/opacity\s*=\s*([^)]*)/,Oa=/^(none|table(?!-c[ea]).+)/,Pa=new RegExp("^("+S+")(.*)$","i"),Qa=new RegExp("^([+-])=("+S+")","i"),Ra={position:"absolute",visibility:"hidden",display:"block"},Sa={letterSpacing:"0",fontWeight:"400"},Ta=["Webkit","O","Moz","ms"];function Ua(a,b){if(b in a)return b;var c=b.charAt(0).toUpperCase()+b.slice(1),d=b,e=Ta.length;while(e--)if(b=Ta[e]+c,b in a)return b;return d}function Va(a,b){for(var c,d,e,f=[],g=0,h=a.length;h>g;g++)d=a[g],d.style&&(f[g]=m._data(d,"olddisplay"),c=d.style.display,b?(f[g]||"none"!==c||(d.style.display=""),""===d.style.display&&U(d)&&(f[g]=m._data(d,"olddisplay",Fa(d.nodeName)))):(e=U(d),(c&&"none"!==c||!e)&&m._data(d,"olddisplay",e?c:m.css(d,"display"))));for(g=0;h>g;g++)d=a[g],d.style&&(b&&"none"!==d.style.display&&""!==d.style.display||(d.style.display=b?f[g]||"":"none"));return a}function Wa(a,b,c){var d=Pa.exec(b);return d?Math.max(0,d[1]-(c||0))+(d[2]||"px"):b}function Xa(a,b,c,d,e){for(var f=c===(d?"border":"content")?4:"width"===b?1:0,g=0;4>f;f+=2)"margin"===c&&(g+=m.css(a,c+T[f],!0,e)),d?("content"===c&&(g-=m.css(a,"padding"+T[f],!0,e)),"margin"!==c&&(g-=m.css(a,"border"+T[f]+"Width",!0,e))):(g+=m.css(a,"padding"+T[f],!0,e),"padding"!==c&&(g+=m.css(a,"border"+T[f]+"Width",!0,e)));return g}function Ya(a,b,c){var d=!0,e="width"===b?a.offsetWidth:a.offsetHeight,f=Ia(a),g=k.boxSizing&&"border-box"===m.css(a,"boxSizing",!1,f);if(0>=e||null==e){if(e=Ja(a,b,f),(0>e||null==e)&&(e=a.style[b]),Ha.test(e))return e;d=g&&(k.boxSizingReliable()||e===a.style[b]),e=parseFloat(e)||0}return e+Xa(a,b,c||(g?"border":"content"),d,f)+"px"}m.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=Ja(a,"opacity");return""===c?"1":c}}}},cssNumber:{columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":k.cssFloat?"cssFloat":"styleFloat"},style:function(a,b,c,d){if(a&&3!==a.nodeType&&8!==a.nodeType&&a.style){var e,f,g,h=m.camelCase(b),i=a.style;if(b=m.cssProps[h]||(m.cssProps[h]=Ua(i,h)),g=m.cssHooks[b]||m.cssHooks[h],void 0===c)return g&&"get"in g&&void 0!==(e=g.get(a,!1,d))?e:i[b];if(f=typeof c,"string"===f&&(e=Qa.exec(c))&&(c=(e[1]+1)*e[2]+parseFloat(m.css(a,b)),f="number"),null!=c&&c===c&&("number"!==f||m.cssNumber[h]||(c+="px"),k.clearCloneStyle||""!==c||0!==b.indexOf("background")||(i[b]="inherit"),!(g&&"set"in g&&void 0===(c=g.set(a,c,d)))))try{i[b]=c}catch(j){}}},css:function(a,b,c,d){var e,f,g,h=m.camelCase(b);return b=m.cssProps[h]||(m.cssProps[h]=Ua(a.style,h)),g=m.cssHooks[b]||m.cssHooks[h],g&&"get"in g&&(f=g.get(a,!0,c)),void 0===f&&(f=Ja(a,b,d)),"normal"===f&&b in Sa&&(f=Sa[b]),""===c||c?(e=parseFloat(f),c===!0||m.isNumeric(e)?e||0:f):f}}),m.each(["height","width"],function(a,b){m.cssHooks[b]={get:function(a,c,d){return c?Oa.test(m.css(a,"display"))&&0===a.offsetWidth?m.swap(a,Ra,function(){return Ya(a,b,d)}):Ya(a,b,d):void 0},set:function(a,c,d){var e=d&&Ia(a);return Wa(a,c,d?Xa(a,b,d,k.boxSizing&&"border-box"===m.css(a,"boxSizing",!1,e),e):0)}}}),k.opacity||(m.cssHooks.opacity={get:function(a,b){return Na.test((b&&a.currentStyle?a.currentStyle.filter:a.style.filter)||"")?.01*parseFloat(RegExp.$1)+"":b?"1":""},set:function(a,b){var c=a.style,d=a.currentStyle,e=m.isNumeric(b)?"alpha(opacity="+100*b+")":"",f=d&&d.filter||c.filter||"";c.zoom=1,(b>=1||""===b)&&""===m.trim(f.replace(Ma,""))&&c.removeAttribute&&(c.removeAttribute("filter"),""===b||d&&!d.filter)||(c.filter=Ma.test(f)?f.replace(Ma,e):f+" "+e)}}),m.cssHooks.marginRight=La(k.reliableMarginRight,function(a,b){return b?m.swap(a,{display:"inline-block"},Ja,[a,"marginRight"]):void 0}),m.each({margin:"",padding:"",border:"Width"},function(a,b){m.cssHooks[a+b]={expand:function(c){for(var d=0,e={},f="string"==typeof c?c.split(" "):[c];4>d;d++)e[a+T[d]+b]=f[d]||f[d-2]||f[0];return e}},Ga.test(a)||(m.cssHooks[a+b].set=Wa)}),m.fn.extend({css:function(a,b){return V(this,function(a,b,c){var d,e,f={},g=0;if(m.isArray(b)){for(d=Ia(a),e=b.length;e>g;g++)f[b[g]]=m.css(a,b[g],!1,d);return f}return void 0!==c?m.style(a,b,c):m.css(a,b)},a,b,arguments.length>1)},show:function(){return Va(this,!0)},hide:function(){return Va(this)},toggle:function(a){return"boolean"==typeof a?a?this.show():this.hide():this.each(function(){U(this)?m(this).show():m(this).hide()})}});function Za(a,b,c,d,e){
    ;return new Za.prototype.init(a,b,c,d,e)}m.Tween=Za,Za.prototype={constructor:Za,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||"swing",this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(m.cssNumber[c]?"":"px")},cur:function(){var a=Za.propHooks[this.prop];return a&&a.get?a.get(this):Za.propHooks._default.get(this)},run:function(a){var b,c=Za.propHooks[this.prop];return this.options.duration?this.pos=b=m.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):this.pos=b=a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):Za.propHooks._default.set(this),this}},Za.prototype.init.prototype=Za.prototype,Za.propHooks={_default:{get:function(a){var b;return null==a.elem[a.prop]||a.elem.style&&null!=a.elem.style[a.prop]?(b=m.css(a.elem,a.prop,""),b&&"auto"!==b?b:0):a.elem[a.prop]},set:function(a){m.fx.step[a.prop]?m.fx.step[a.prop](a):a.elem.style&&(null!=a.elem.style[m.cssProps[a.prop]]||m.cssHooks[a.prop])?m.style(a.elem,a.prop,a.now+a.unit):a.elem[a.prop]=a.now}}},Za.propHooks.scrollTop=Za.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},m.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2}},m.fx=Za.prototype.init,m.fx.step={};var $a,_a,ab=/^(?:toggle|show|hide)$/,bb=new RegExp("^(?:([+-])=|)("+S+")([a-z%]*)$","i"),cb=/queueHooks$/,db=[ib],eb={"*":[function(a,b){var c=this.createTween(a,b),d=c.cur(),e=bb.exec(b),f=e&&e[3]||(m.cssNumber[a]?"":"px"),g=(m.cssNumber[a]||"px"!==f&&+d)&&bb.exec(m.css(c.elem,a)),h=1,i=20;if(g&&g[3]!==f){f=f||g[3],e=e||[],g=+d||1;do h=h||".5",g/=h,m.style(c.elem,a,g+f);while(h!==(h=c.cur()/d)&&1!==h&&--i)}return e&&(g=c.start=+g||+d||0,c.unit=f,c.end=e[1]?g+(e[1]+1)*e[2]:+e[2]),c}]};function fb(){return setTimeout(function(){$a=void 0}),$a=m.now()}function gb(a,b){var c,d={height:a},e=0;for(b=b?1:0;4>e;e+=2-b)c=T[e],d["margin"+c]=d["padding"+c]=a;return b&&(d.opacity=d.width=a),d}function hb(a,b,c){for(var d,e=(eb[b]||[]).concat(eb["*"]),f=0,g=e.length;g>f;f++)if(d=e[f].call(c,b,a))return d}function ib(a,b,c){var d,e,f,g,h,i,j,l,n=this,o={},p=a.style,q=a.nodeType&&U(a),r=m._data(a,"fxshow");c.queue||(h=m._queueHooks(a,"fx"),null==h.unqueued&&(h.unqueued=0,i=h.empty.fire,h.empty.fire=function(){h.unqueued||i()}),h.unqueued++,n.always(function(){n.always(function(){h.unqueued--,m.queue(a,"fx").length||h.empty.fire()})})),1===a.nodeType&&("height"in b||"width"in b)&&(c.overflow=[p.overflow,p.overflowX,p.overflowY],j=m.css(a,"display"),l="none"===j?m._data(a,"olddisplay")||Fa(a.nodeName):j,"inline"===l&&"none"===m.css(a,"float")&&(k.inlineBlockNeedsLayout&&"inline"!==Fa(a.nodeName)?p.zoom=1:p.display="inline-block")),c.overflow&&(p.overflow="hidden",k.shrinkWrapBlocks()||n.always(function(){p.overflow=c.overflow[0],p.overflowX=c.overflow[1],p.overflowY=c.overflow[2]}));for(d in b)if(e=b[d],ab.exec(e)){if(delete b[d],f=f||"toggle"===e,e===(q?"hide":"show")){if("show"!==e||!r||void 0===r[d])continue;q=!0}o[d]=r&&r[d]||m.style(a,d)}else j=void 0;if(m.isEmptyObject(o))"inline"===("none"===j?Fa(a.nodeName):j)&&(p.display=j);else{r?"hidden"in r&&(q=r.hidden):r=m._data(a,"fxshow",{}),f&&(r.hidden=!q),q?m(a).show():n.done(function(){m(a).hide()}),n.done(function(){var b;m._removeData(a,"fxshow");for(b in o)m.style(a,b,o[b])});for(d in o)g=hb(q?r[d]:0,d,n),d in r||(r[d]=g.start,q&&(g.end=g.start,g.start="width"===d||"height"===d?1:0))}}function jb(a,b){var c,d,e,f,g;for(c in a)if(d=m.camelCase(c),e=b[d],f=a[c],m.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=m.cssHooks[d],g&&"expand"in g){f=g.expand(f),delete a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}function kb(a,b,c){var d,e,f=0,g=db.length,h=m.Deferred().always(function(){delete i.elem}),i=function(){if(e)return!1;for(var b=$a||fb(),c=Math.max(0,j.startTime+j.duration-b),d=c/j.duration||0,f=1-d,g=0,i=j.tweens.length;i>g;g++)j.tweens[g].run(f);return h.notifyWith(a,[j,f,c]),1>f&&i?c:(h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:m.extend({},b),opts:m.extend(!0,{specialEasing:{}},c),originalProperties:b,originalOptions:c,startTime:$a||fb(),duration:c.duration,tweens:[],createTween:function(b,c){var d=m.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(d),d},stop:function(b){var c=0,d=b?j.tweens.length:0;if(e)return this;for(e=!0;d>c;c++)j.tweens[c].run(1);return b?h.resolveWith(a,[j,b]):h.rejectWith(a,[j,b]),this}}),k=j.props;for(jb(k,j.opts.specialEasing);g>f;f++)if(d=db[f].call(j,a,k,j.opts))return d;return m.map(k,hb,j),m.isFunction(j.opts.start)&&j.opts.start.call(a,j),m.fx.timer(m.extend(i,{elem:a,anim:j,queue:j.opts.queue})),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always)}m.Animation=m.extend(kb,{tweener:function(a,b){m.isFunction(a)?(b=a,a=["*"]):a=a.split(" ");for(var c,d=0,e=a.length;e>d;d++)c=a[d],eb[c]=eb[c]||[],eb[c].unshift(b)},prefilter:function(a,b){b?db.unshift(a):db.push(a)}}),m.speed=function(a,b,c){var d=a&&"object"==typeof a?m.extend({},a):{complete:c||!c&&b||m.isFunction(a)&&a,duration:a,easing:c&&b||b&&!m.isFunction(b)&&b};return d.duration=m.fx.off?0:"number"==typeof d.duration?d.duration:d.duration in m.fx.speeds?m.fx.speeds[d.duration]:m.fx.speeds._default,(null==d.queue||d.queue===!0)&&(d.queue="fx"),d.old=d.complete,d.complete=function(){m.isFunction(d.old)&&d.old.call(this),d.queue&&m.dequeue(this,d.queue)},d},m.fn.extend({fadeTo:function(a,b,c,d){return this.filter(U).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=m.isEmptyObject(a),f=m.speed(b,c,d),g=function(){var b=kb(this,m.extend({},a),f);(e||m._data(this,"finish"))&&b.stop(!0)};return g.finish=g,e||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(a,b,c){var d=function(a){var b=a.stop;delete a.stop,b(c)};return"string"!=typeof a&&(c=b,b=a,a=void 0),b&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,e=null!=a&&a+"queueHooks",f=m.timers,g=m._data(this);if(e)g[e]&&g[e].stop&&d(g[e]);else for(e in g)g[e]&&g[e].stop&&cb.test(e)&&d(g[e]);for(e=f.length;e--;)f[e].elem!==this||null!=a&&f[e].queue!==a||(f[e].anim.stop(c),b=!1,f.splice(e,1));(b||!c)&&m.dequeue(this,a)})},finish:function(a){return a!==!1&&(a=a||"fx"),this.each(function(){var b,c=m._data(this),d=c[a+"queue"],e=c[a+"queueHooks"],f=m.timers,g=d?d.length:0;for(c.finish=!0,m.queue(this,a,[]),e&&e.stop&&e.stop.call(this,!0),b=f.length;b--;)f[b].elem===this&&f[b].queue===a&&(f[b].anim.stop(!0),f.splice(b,1));for(b=0;g>b;b++)d[b]&&d[b].finish&&d[b].finish.call(this);delete c.finish})}}),m.each(["toggle","show","hide"],function(a,b){var c=m.fn[b];m.fn[b]=function(a,d,e){return null==a||"boolean"==typeof a?c.apply(this,arguments):this.animate(gb(b,!0),a,d,e)}}),m.each({slideDown:gb("show"),slideUp:gb("hide"),slideToggle:gb("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){m.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),m.timers=[],m.fx.tick=function(){var a,b=m.timers,c=0;for($a=m.now();c<b.length;c++)a=b[c],a()||b[c]!==a||b.splice(c--,1);b.length||m.fx.stop(),$a=void 0},m.fx.timer=function(a){m.timers.push(a),a()?m.fx.start():m.timers.pop()},m.fx.interval=13,m.fx.start=function(){_a||(_a=setInterval(m.fx.tick,m.fx.interval))},m.fx.stop=function(){clearInterval(_a),_a=null},m.fx.speeds={slow:600,fast:200,_default:400},m.fn.delay=function(a,b){return a=m.fx?m.fx.speeds[a]||a:a,b=b||"fx",this.queue(b,function(b,c){var d=setTimeout(b,a);c.stop=function(){clearTimeout(d)}})},function(){var a,b,c,d,e;b=y.createElement("div"),b.setAttribute("className","t"),b.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",d=b.getElementsByTagName("a")[0],c=y.createElement("select"),e=c.appendChild(y.createElement("option")),a=b.getElementsByTagName("input")[0],d.style.cssText="top:1px",k.getSetAttribute="t"!==b.className,k.style=/top/.test(d.getAttribute("style")),k.hrefNormalized="/a"===d.getAttribute("href"),k.checkOn=!!a.value,k.optSelected=e.selected,k.enctype=!!y.createElement("form").enctype,c.disabled=!0,k.optDisabled=!e.disabled,a=y.createElement("input"),a.setAttribute("value",""),k.input=""===a.getAttribute("value"),a.value="t",a.setAttribute("type","radio"),k.radioValue="t"===a.value}();var lb=/\r/g;m.fn.extend({val:function(a){var b,c,d,e=this[0];{if(arguments.length)return d=m.isFunction(a),this.each(function(c){var e;1===this.nodeType&&(e=d?a.call(this,c,m(this).val()):a,null==e?e="":"number"==typeof e?e+="":m.isArray(e)&&(e=m.map(e,function(a){return null==a?"":a+""})),b=m.valHooks[this.type]||m.valHooks[this.nodeName.toLowerCase()],b&&"set"in b&&void 0!==b.set(this,e,"value")||(this.value=e))});if(e)return b=m.valHooks[e.type]||m.valHooks[e.nodeName.toLowerCase()],b&&"get"in b&&void 0!==(c=b.get(e,"value"))?c:(c=e.value,"string"==typeof c?c.replace(lb,""):null==c?"":c)}}}),m.extend({valHooks:{option:{get:function(a){var b=m.find.attr(a,"value");return null!=b?b:m.trim(m.text(a))}},select:{get:function(a){for(var b,c,d=a.options,e=a.selectedIndex,f="select-one"===a.type||0>e,g=f?null:[],h=f?e+1:d.length,i=0>e?h:f?e:0;h>i;i++)if(c=d[i],!(!c.selected&&i!==e||(k.optDisabled?c.disabled:null!==c.getAttribute("disabled"))||c.parentNode.disabled&&m.nodeName(c.parentNode,"optgroup"))){if(b=m(c).val(),f)return b;g.push(b)}return g},set:function(a,b){var c,d,e=a.options,f=m.makeArray(b),g=e.length;while(g--)if(d=e[g],m.inArray(m.valHooks.option.get(d),f)>=0)try{d.selected=c=!0}catch(h){d.scrollHeight}else d.selected=!1;return c||(a.selectedIndex=-1),e}}}}),m.each(["radio","checkbox"],function(){m.valHooks[this]={set:function(a,b){return m.isArray(b)?a.checked=m.inArray(m(a).val(),b)>=0:void 0}},k.checkOn||(m.valHooks[this].get=function(a){return null===a.getAttribute("value")?"on":a.value})});var mb,nb,ob=m.expr.attrHandle,pb=/^(?:checked|selected)$/i,qb=k.getSetAttribute,rb=k.input;m.fn.extend({attr:function(a,b){return V(this,m.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){m.removeAttr(this,a)})}}),m.extend({attr:function(a,b,c){var d,e,f=a.nodeType;if(a&&3!==f&&8!==f&&2!==f)return typeof a.getAttribute===K?m.prop(a,b,c):(1===f&&m.isXMLDoc(a)||(b=b.toLowerCase(),d=m.attrHooks[b]||(m.expr.match.bool.test(b)?nb:mb)),void 0===c?d&&"get"in d&&null!==(e=d.get(a,b))?e:(e=m.find.attr(a,b),null==e?void 0:e):null!==c?d&&"set"in d&&void 0!==(e=d.set(a,c,b))?e:(a.setAttribute(b,c+""),c):void m.removeAttr(a,b))},removeAttr:function(a,b){var c,d,e=0,f=b&&b.match(E);if(f&&1===a.nodeType)while(c=f[e++])d=m.propFix[c]||c,m.expr.match.bool.test(c)?rb&&qb||!pb.test(c)?a[d]=!1:a[m.camelCase("default-"+c)]=a[d]=!1:m.attr(a,c,""),a.removeAttribute(qb?c:d)},attrHooks:{type:{set:function(a,b){if(!k.radioValue&&"radio"===b&&m.nodeName(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}}}}),nb={set:function(a,b,c){return b===!1?m.removeAttr(a,c):rb&&qb||!pb.test(c)?a.setAttribute(!qb&&m.propFix[c]||c,c):a[m.camelCase("default-"+c)]=a[c]=!0,c}},m.each(m.expr.match.bool.source.match(/\w+/g),function(a,b){var c=ob[b]||m.find.attr;ob[b]=rb&&qb||!pb.test(b)?function(a,b,d){var e,f;return d||(f=ob[b],ob[b]=e,e=null!=c(a,b,d)?b.toLowerCase():null,ob[b]=f),e}:function(a,b,c){return c?void 0:a[m.camelCase("default-"+b)]?b.toLowerCase():null}}),rb&&qb||(m.attrHooks.value={set:function(a,b,c){return m.nodeName(a,"input")?void(a.defaultValue=b):mb&&mb.set(a,b,c)}}),qb||(mb={set:function(a,b,c){var d=a.getAttributeNode(c);return d||a.setAttributeNode(d=a.ownerDocument.createAttribute(c)),d.value=b+="","value"===c||b===a.getAttribute(c)?b:void 0}},ob.id=ob.name=ob.coords=function(a,b,c){var d;return c?void 0:(d=a.getAttributeNode(b))&&""!==d.value?d.value:null},m.valHooks.button={get:function(a,b){var c=a.getAttributeNode(b);return c&&c.specified?c.value:void 0},set:mb.set},m.attrHooks.contenteditable={set:function(a,b,c){mb.set(a,""===b?!1:b,c)}},m.each(["width","height"],function(a,b){m.attrHooks[b]={set:function(a,c){return""===c?(a.setAttribute(b,"auto"),c):void 0}}})),k.style||(m.attrHooks.style={get:function(a){return a.style.cssText||void 0},set:function(a,b){return a.style.cssText=b+""}});var sb=/^(?:input|select|textarea|button|object)$/i,tb=/^(?:a|area)$/i;m.fn.extend({prop:function(a,b){return V(this,m.prop,a,b,arguments.length>1)},removeProp:function(a){return a=m.propFix[a]||a,this.each(function(){try{this[a]=void 0,delete this[a]}catch(b){}})}}),m.extend({propFix:{"for":"htmlFor","class":"className"},prop:function(a,b,c){var d,e,f,g=a.nodeType;if(a&&3!==g&&8!==g&&2!==g)return f=1!==g||!m.isXMLDoc(a),f&&(b=m.propFix[b]||b,e=m.propHooks[b]),void 0!==c?e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:a[b]=c:e&&"get"in e&&null!==(d=e.get(a,b))?d:a[b]},propHooks:{tabIndex:{get:function(a){var b=m.find.attr(a,"tabindex");return b?parseInt(b,10):sb.test(a.nodeName)||tb.test(a.nodeName)&&a.href?0:-1}}}}),k.hrefNormalized||m.each(["href","src"],function(a,b){m.propHooks[b]={get:function(a){return a.getAttribute(b,4)}}}),k.optSelected||(m.propHooks.selected={get:function(a){var b=a.parentNode;return b&&(b.selectedIndex,b.parentNode&&b.parentNode.selectedIndex),null}}),m.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){m.propFix[this.toLowerCase()]=this}),k.enctype||(m.propFix.enctype="encoding");var ub=/[\t\r\n\f]/g;m.fn.extend({addClass:function(a){var b,c,d,e,f,g,h=0,i=this.length,j="string"==typeof a&&a;if(m.isFunction(a))return this.each(function(b){m(this).addClass(a.call(this,b,this.className))});if(j)for(b=(a||"").match(E)||[];i>h;h++)if(c=this[h],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(ub," "):" ")){f=0;while(e=b[f++])d.indexOf(" "+e+" ")<0&&(d+=e+" ");g=m.trim(d),c.className!==g&&(c.className=g)}return this},removeClass:function(a){var b,c,d,e,f,g,h=0,i=this.length,j=0===arguments.length||"string"==typeof a&&a;if(m.isFunction(a))return this.each(function(b){m(this).removeClass(a.call(this,b,this.className))});if(j)for(b=(a||"").match(E)||[];i>h;h++)if(c=this[h],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(ub," "):"")){f=0;while(e=b[f++])while(d.indexOf(" "+e+" ")>=0)d=d.replace(" "+e+" "," ");g=a?m.trim(d):"",c.className!==g&&(c.className=g)}return this},toggleClass:function(a,b){var c=typeof a;return"boolean"==typeof b&&"string"===c?b?this.addClass(a):this.removeClass(a):this.each(m.isFunction(a)?function(c){m(this).toggleClass(a.call(this,c,this.className,b),b)}:function(){if("string"===c){var b,d=0,e=m(this),f=a.match(E)||[];while(b=f[d++])e.hasClass(b)?e.removeClass(b):e.addClass(b)}else(c===K||"boolean"===c)&&(this.className&&m._data(this,"__className__",this.className),this.className=this.className||a===!1?"":m._data(this,"__className__")||"")})},hasClass:function(a){for(var b=" "+a+" ",c=0,d=this.length;d>c;c++)if(1===this[c].nodeType&&(" "+this[c].className+" ").replace(ub," ").indexOf(b)>=0)return!0;return!1}}),m.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(a,b){m.fn[b]=function(a,c){return arguments.length>0?this.on(b,null,a,c):this.trigger(b)}}),m.fn.extend({hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)},bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return 1===arguments.length?this.off(a,"**"):this.off(b,a||"**",c)}});var vb=m.now(),wb=/\?/,xb=/(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;m.parseJSON=function(b){if(a.JSON&&a.JSON.parse)return a.JSON.parse(b+"");var c,d=null,e=m.trim(b+"");return e&&!m.trim(e.replace(xb,function(a,b,e,f){return c&&b&&(d=0),0===d?a:(c=e||b,d+=!f-!e,"")}))?Function("return "+e)():m.error("Invalid JSON: "+b)},m.parseXML=function(b){var c,d;if(!b||"string"!=typeof b)return null;try{a.DOMParser?(d=new DOMParser,c=d.parseFromString(b,"text/xml")):(c=new ActiveXObject("Microsoft.XMLDOM"),c.async="false",c.loadXML(b))}catch(e){c=void 0}return c&&c.documentElement&&!c.getElementsByTagName("parsererror").length||m.error("Invalid XML: "+b),c};var yb,zb,Ab=/#.*$/,Bb=/([?&])_=[^&]*/,Cb=/^(.*?):[ \t]*([^\r\n]*)\r?$/gm,Db=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Eb=/^(?:GET|HEAD)$/,Fb=/^\/\//,Gb=/^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,Hb={},Ib={},Jb="*/".concat("*");try{zb=location.href}catch(Kb){zb=y.createElement("a"),zb.href="",zb=zb.href}yb=Gb.exec(zb.toLowerCase())||[];function Lb(a){return function(b,c){"string"!=typeof b&&(c=b,b="*");var d,e=0,f=b.toLowerCase().match(E)||[];if(m.isFunction(c))while(d=f[e++])"+"===d.charAt(0)?(d=d.slice(1)||"*",(a[d]=a[d]||[]).unshift(c)):(a[d]=a[d]||[]).push(c)}}function Mb(a,b,c,d){var e={},f=a===Ib;function g(h){var i;return e[h]=!0,m.each(a[h]||[],function(a,h){var j=h(b,c,d);return"string"!=typeof j||f||e[j]?f?!(i=j):void 0:(b.dataTypes.unshift(j),g(j),!1)}),i}return g(b.dataTypes[0])||!e["*"]&&g("*")}function Nb(a,b){var c,d,e=m.ajaxSettings.flatOptions||{};for(d in b)void 0!==b[d]&&((e[d]?a:c||(c={}))[d]=b[d]);return c&&m.extend(!0,a,c),a}function Ob(a,b,c){var d,e,f,g,h=a.contents,i=a.dataTypes;while("*"===i[0])i.shift(),void 0===e&&(e=a.mimeType||b.getResponseHeader("Content-Type"));if(e)for(g in h)if(h[g]&&h[g].test(e)){i.unshift(g);break}if(i[0]in c)f=i[0];else{for(g in c){if(!i[0]||a.converters[g+" "+i[0]]){f=g;break}d||(d=g)}f=f||d}return f?(f!==i[0]&&i.unshift(f),c[f]):void 0}function Pb(a,b,c,d){var e,f,g,h,i,j={},k=a.dataTypes.slice();if(k[1])for(g in a.converters)j[g.toLowerCase()]=a.converters[g];f=k.shift();while(f)if(a.responseFields[f]&&(c[a.responseFields[f]]=b),!i&&d&&a.dataFilter&&(b=a.dataFilter(b,a.dataType)),i=f,f=k.shift())if("*"===f)f=i;else if("*"!==i&&i!==f){if(g=j[i+" "+f]||j["* "+f],!g)for(e in j)if(h=e.split(" "),h[1]===f&&(g=j[i+" "+h[0]]||j["* "+h[0]])){g===!0?g=j[e]:j[e]!==!0&&(f=h[0],k.unshift(h[1]));break}if(g!==!0)if(g&&a["throws"])b=g(b);else try{b=g(b)}catch(l){return{state:"parsererror",error:g?l:"No conversion from "+i+" to "+f}}}return{state:"success",data:b}}m.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:zb,type:"GET",isLocal:Db.test(yb[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Jb,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":m.parseJSON,"text xml":m.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(a,b){return b?Nb(Nb(a,m.ajaxSettings),b):Nb(m.ajaxSettings,a)},ajaxPrefilter:Lb(Hb),ajaxTransport:Lb(Ib),ajax:function(a,b){"object"==typeof a&&(b=a,a=void 0),b=b||{};var c,d,e,f,g,h,i,j,k=m.ajaxSetup({},b),l=k.context||k,n=k.context&&(l.nodeType||l.jquery)?m(l):m.event,o=m.Deferred(),p=m.Callbacks("once memory"),q=k.statusCode||{},r={},s={},t=0,u="canceled",v={readyState:0,getResponseHeader:function(a){var b;if(2===t){if(!j){j={};while(b=Cb.exec(f))j[b[1].toLowerCase()]=b[2]}b=j[a.toLowerCase()]}return null==b?null:b},getAllResponseHeaders:function(){return 2===t?f:null},setRequestHeader:function(a,b){var c=a.toLowerCase();return t||(a=s[c]=s[c]||a,r[a]=b),this},overrideMimeType:function(a){return t||(k.mimeType=a),this},statusCode:function(a){var b;if(a)if(2>t)for(b in a)q[b]=[q[b],a[b]];else v.always(a[v.status]);return this},abort:function(a){var b=a||u;return i&&i.abort(b),x(0,b),this}};if(o.promise(v).complete=p.add,v.success=v.done,v.error=v.fail,k.url=((a||k.url||zb)+"").replace(Ab,"").replace(Fb,yb[1]+"//"),k.type=b.method||b.type||k.method||k.type,k.dataTypes=m.trim(k.dataType||"*").toLowerCase().match(E)||[""],null==k.crossDomain&&(c=Gb.exec(k.url.toLowerCase()),k.crossDomain=!(!c||c[1]===yb[1]&&c[2]===yb[2]&&(c[3]||("http:"===c[1]?"80":"443"))===(yb[3]||("http:"===yb[1]?"80":"443")))),k.data&&k.processData&&"string"!=typeof k.data&&(k.data=m.param(k.data,k.traditional)),Mb(Hb,k,b,v),2===t)return v;h=m.event&&k.global,h&&0===m.active++&&m.event.trigger("ajaxStart"),k.type=k.type.toUpperCase(),k.hasContent=!Eb.test(k.type),e=k.url,k.hasContent||(k.data&&(e=k.url+=(wb.test(e)?"&":"?")+k.data,delete k.data),k.cache===!1&&(k.url=Bb.test(e)?e.replace(Bb,"$1_="+vb++):e+(wb.test(e)?"&":"?")+"_="+vb++)),k.ifModified&&(m.lastModified[e]&&v.setRequestHeader("If-Modified-Since",m.lastModified[e]),m.etag[e]&&v.setRequestHeader("If-None-Match",m.etag[e])),(k.data&&k.hasContent&&k.contentType!==!1||b.contentType)&&v.setRequestHeader("Content-Type",k.contentType),v.setRequestHeader("Accept",k.dataTypes[0]&&k.accepts[k.dataTypes[0]]?k.accepts[k.dataTypes[0]]+("*"!==k.dataTypes[0]?", "+Jb+"; q=0.01":""):k.accepts["*"]);for(d in k.headers)v.setRequestHeader(d,k.headers[d]);if(k.beforeSend&&(k.beforeSend.call(l,v,k)===!1||2===t))return v.abort();u="abort";for(d in{success:1,error:1,complete:1})v[d](k[d]);if(i=Mb(Ib,k,b,v)){v.readyState=1,h&&n.trigger("ajaxSend",[v,k]),k.async&&k.timeout>0&&(g=setTimeout(function(){v.abort("timeout")},k.timeout));try{t=1,i.send(r,x)}catch(w){if(!(2>t))throw w;x(-1,w)}}else x(-1,"No Transport");function x(a,b,c,d){var j,r,s,u,w,x=b;2!==t&&(t=2,g&&clearTimeout(g),i=void 0,f=d||"",v.readyState=a>0?4:0,j=a>=200&&300>a||304===a,c&&(u=Ob(k,v,c)),u=Pb(k,u,v,j),j?(k.ifModified&&(w=v.getResponseHeader("Last-Modified"),w&&(m.lastModified[e]=w),w=v.getResponseHeader("etag"),w&&(m.etag[e]=w)),204===a||"HEAD"===k.type?x="nocontent":304===a?x="notmodified":(x=u.state,r=u.data,s=u.error,j=!s)):(s=x,(a||!x)&&(x="error",0>a&&(a=0))),v.status=a,v.statusText=(b||x)+"",j?o.resolveWith(l,[r,x,v]):o.rejectWith(l,[v,x,s]),v.statusCode(q),q=void 0,h&&n.trigger(j?"ajaxSuccess":"ajaxError",[v,k,j?r:s]),p.fireWith(l,[v,x]),h&&(n.trigger("ajaxComplete",[v,k]),--m.active||m.event.trigger("ajaxStop")))}return v},getJSON:function(a,b,c){return m.get(a,b,c,"json")},getScript:function(a,b){return m.get(a,void 0,b,"script")}}),m.each(["get","post"],function(a,b){m[b]=function(a,c,d,e){return m.isFunction(c)&&(e=e||d,d=c,c=void 0),m.ajax({url:a,type:b,dataType:e,data:c,success:d})}}),m._evalUrl=function(a){return m.ajax({url:a,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0})},m.fn.extend({wrapAll:function(a){if(m.isFunction(a))return this.each(function(b){m(this).wrapAll(a.call(this,b))});if(this[0]){var b=m(a,this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstChild&&1===a.firstChild.nodeType)a=a.firstChild;return a}).append(this)}return this},wrapInner:function(a){return this.each(m.isFunction(a)?function(b){m(this).wrapInner(a.call(this,b))}:function(){var b=m(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=m.isFunction(a);return this.each(function(c){m(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(){return this.parent().each(function(){m.nodeName(this,"body")||m(this).replaceWith(this.childNodes)}).end()}}),m.expr.filters.hidden=function(a){return a.offsetWidth<=0&&a.offsetHeight<=0||!k.reliableHiddenOffsets()&&"none"===(a.style&&a.style.display||m.css(a,"display"))},m.expr.filters.visible=function(a){return!m.expr.filters.hidden(a)};var Qb=/%20/g,Rb=/\[\]$/,Sb=/\r?\n/g,Tb=/^(?:submit|button|image|reset|file)$/i,Ub=/^(?:input|select|textarea|keygen)/i;function Vb(a,b,c,d){var e;if(m.isArray(b))m.each(b,function(b,e){c||Rb.test(a)?d(a,e):Vb(a+"["+("object"==typeof e?b:"")+"]",e,c,d)});else if(c||"object"!==m.type(b))d(a,b);else for(e in b)Vb(a+"["+e+"]",b[e],c,d)}m.param=function(a,b){var c,d=[],e=function(a,b){b=m.isFunction(b)?b():null==b?"":b,d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};if(void 0===b&&(b=m.ajaxSettings&&m.ajaxSettings.traditional),m.isArray(a)||a.jquery&&!m.isPlainObject(a))m.each(a,function(){e(this.name,this.value)});else for(c in a)Vb(c,a[c],b,e);return d.join("&").replace(Qb,"+")},m.fn.extend({serialize:function(){return m.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var a=m.prop(this,"elements");return a?m.makeArray(a):this}).filter(function(){var a=this.type;return this.name&&!m(this).is(":disabled")&&Ub.test(this.nodeName)&&!Tb.test(a)&&(this.checked||!W.test(a))}).map(function(a,b){var c=m(this).val();return null==c?null:m.isArray(c)?m.map(c,function(a){return{name:b.name,value:a.replace(Sb,"\r\n")}}):{name:b.name,value:c.replace(Sb,"\r\n")}}).get()}}),m.ajaxSettings.xhr=void 0!==a.ActiveXObject?function(){return!this.isLocal&&/^(get|post|head|put|delete|options)$/i.test(this.type)&&Zb()||$b()}:Zb;var Wb=0,Xb={},Yb=m.ajaxSettings.xhr();a.attachEvent&&a.attachEvent("onunload",function(){for(var a in Xb)Xb[a](void 0,!0)}),k.cors=!!Yb&&"withCredentials"in Yb,Yb=k.ajax=!!Yb,Yb&&m.ajaxTransport(function(a){if(!a.crossDomain||k.cors){var b;return{send:function(c,d){var e,f=a.xhr(),g=++Wb;if(f.open(a.type,a.url,a.async,a.username,a.password),a.xhrFields)for(e in a.xhrFields)f[e]=a.xhrFields[e];a.mimeType&&f.overrideMimeType&&f.overrideMimeType(a.mimeType),a.crossDomain||c["X-Requested-With"]||(c["X-Requested-With"]="XMLHttpRequest");for(e in c)void 0!==c[e]&&f.setRequestHeader(e,c[e]+"");f.send(a.hasContent&&a.data||null),b=function(c,e){var h,i,j;if(b&&(e||4===f.readyState))if(delete Xb[g],b=void 0,f.onreadystatechange=m.noop,e)4!==f.readyState&&f.abort();else{j={},h=f.status,"string"==typeof f.responseText&&(j.text=f.responseText);try{i=f.statusText}catch(k){i=""}h||!a.isLocal||a.crossDomain?1223===h&&(h=204):h=j.text?200:404}j&&d(h,i,j,f.getAllResponseHeaders())},a.async?4===f.readyState?setTimeout(b):f.onreadystatechange=Xb[g]=b:b()},abort:function(){b&&b(void 0,!0)}}}});function Zb(){try{return new a.XMLHttpRequest}catch(b){}}function $b(){try{return new a.ActiveXObject("Microsoft.XMLHTTP")}catch(b){}}m.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script":function(a){return m.globalEval(a),a}}}),m.ajaxPrefilter("script",function(a){void 0===a.cache&&(a.cache=!1),a.crossDomain&&(a.type="GET",a.global=!1)}),m.ajaxTransport("script",function(a){if(a.crossDomain){var b,c=y.head||m("head")[0]||y.documentElement;return{send:function(d,e){b=y.createElement("script"),b.async=!0,a.scriptCharset&&(b.charset=a.scriptCharset),b.src=a.url,b.onload=b.onreadystatechange=function(a,c){(c||!b.readyState||/loaded|complete/.test(b.readyState))&&(b.onload=b.onreadystatechange=null,b.parentNode&&b.parentNode.removeChild(b),b=null,c||e(200,"success"))},c.insertBefore(b,c.firstChild)},abort:function(){b&&b.onload(void 0,!0)}}}});var _b=[],ac=/(=)\?(?=&|$)|\?\?/;m.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=_b.pop()||m.expando+"_"+vb++;return this[a]=!0,a}}),m.ajaxPrefilter("json jsonp",function(b,c,d){var e,f,g,h=b.jsonp!==!1&&(ac.test(b.url)?"url":"string"==typeof b.data&&!(b.contentType||"").indexOf("application/x-www-form-urlencoded")&&ac.test(b.data)&&"data");return h||"jsonp"===b.dataTypes[0]?(e=b.jsonpCallback=m.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,h?b[h]=b[h].replace(ac,"$1"+e):b.jsonp!==!1&&(b.url+=(wb.test(b.url)?"&":"?")+b.jsonp+"="+e),b.converters["script json"]=function(){return g||m.error(e+" was not called"),g[0]},b.dataTypes[0]="json",f=a[e],a[e]=function(){g=arguments},d.always(function(){a[e]=f,b[e]&&(b.jsonpCallback=c.jsonpCallback,_b.push(e)),g&&m.isFunction(f)&&f(g[0]),g=f=void 0}),"script"):void 0}),m.parseHTML=function(a,b,c){if(!a||"string"!=typeof a)return null;"boolean"==typeof b&&(c=b,b=!1),b=b||y;var d=u.exec(a),e=!c&&[];return d?[b.createElement(d[1])]:(d=m.buildFragment([a],b,e),e&&e.length&&m(e).remove(),m.merge([],d.childNodes))};var bc=m.fn.load;m.fn.load=function(a,b,c){if("string"!=typeof a&&bc)return bc.apply(this,arguments);var d,e,f,g=this,h=a.indexOf(" ");return h>=0&&(d=m.trim(a.slice(h,a.length)),a=a.slice(0,h)),m.isFunction(b)?(c=b,b=void 0):b&&"object"==typeof b&&(f="POST"),g.length>0&&m.ajax({url:a,type:f,dataType:"html",data:b}).done(function(a){e=arguments,g.html(d?m("<div>").append(m.parseHTML(a)).find(d):a)}).complete(c&&function(a,b){g.each(c,e||[a.responseText,b,a])}),this},m.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(a,b){m.fn[b]=function(a){return this.on(b,a)}}),m.expr.filters.animated=function(a){return m.grep(m.timers,function(b){return a===b.elem}).length};var cc=a.document.documentElement;function dc(a){return m.isWindow(a)?a:9===a.nodeType?a.defaultView||a.parentWindow:!1}m.offset={setOffset:function(a,b,c){var d,e,f,g,h,i,j,k=m.css(a,"position"),l=m(a),n={};"static"===k&&(a.style.position="relative"),h=l.offset(),f=m.css(a,"top"),i=m.css(a,"left"),j=("absolute"===k||"fixed"===k)&&m.inArray("auto",[f,i])>-1,j?(d=l.position(),g=d.top,e=d.left):(g=parseFloat(f)||0,e=parseFloat(i)||0),m.isFunction(b)&&(b=b.call(a,c,h)),null!=b.top&&(n.top=b.top-h.top+g),null!=b.left&&(n.left=b.left-h.left+e),"using"in b?b.using.call(a,n):l.css(n)}},m.fn.extend({offset:function(a){if(arguments.length)return void 0===a?this:this.each(function(b){m.offset.setOffset(this,a,b)});var b,c,d={top:0,left:0},e=this[0],f=e&&e.ownerDocument;if(f)return b=f.documentElement,m.contains(b,e)?(typeof e.getBoundingClientRect!==K&&(d=e.getBoundingClientRect()),c=dc(f),{top:d.top+(c.pageYOffset||b.scrollTop)-(b.clientTop||0),left:d.left+(c.pageXOffset||b.scrollLeft)-(b.clientLeft||0)}):d},position:function(){if(this[0]){var a,b,c={top:0,left:0},d=this[0];return"fixed"===m.css(d,"position")?b=d.getBoundingClientRect():(a=this.offsetParent(),b=this.offset(),m.nodeName(a[0],"html")||(c=a.offset()),c.top+=m.css(a[0],"borderTopWidth",!0),c.left+=m.css(a[0],"borderLeftWidth",!0)),{top:b.top-c.top-m.css(d,"marginTop",!0),left:b.left-c.left-m.css(d,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var a=this.offsetParent||cc;while(a&&!m.nodeName(a,"html")&&"static"===m.css(a,"position"))a=a.offsetParent;return a||cc})}}),m.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(a,b){var c=/Y/.test(b);m.fn[a]=function(d){return V(this,function(a,d,e){var f=dc(a);return void 0===e?f?b in f?f[b]:f.document.documentElement[d]:a[d]:void(f?f.scrollTo(c?m(f).scrollLeft():e,c?e:m(f).scrollTop()):a[d]=e)},a,d,arguments.length,null)}}),m.each(["top","left"],function(a,b){m.cssHooks[b]=La(k.pixelPosition,function(a,c){return c?(c=Ja(a,b),Ha.test(c)?m(a).position()[b]+"px":c):void 0})}),m.each({Height:"height",Width:"width"},function(a,b){m.each({padding:"inner"+a,content:b,"":"outer"+a},function(c,d){m.fn[d]=function(d,e){var f=arguments.length&&(c||"boolean"!=typeof d),g=c||(d===!0||e===!0?"margin":"border");return V(this,function(b,c,d){var e;return m.isWindow(b)?b.document.documentElement["client"+a]:9===b.nodeType?(e=b.documentElement,Math.max(b.body["scroll"+a],e["scroll"+a],b.body["offset"+a],e["offset"+a],e["client"+a])):void 0===d?m.css(b,c,g):m.style(b,c,d,g)},b,f?d:void 0,f,null)}})}),m.fn.size=function(){return this.length},m.fn.andSelf=m.fn.addBack,"function"==typeof define&&define.amd&&define("jquery",[],function(){return m});var ec=a.jQuery,fc=a.$;return m.noConflict=function(b){return a.$===m&&(a.$=fc),b&&a.jQuery===m&&(a.jQuery=ec),m},typeof b===K&&(a.jQuery=a.$=m),m});
    /**************************** END ****************************/

    var MN = jQuery.noConflict();//避免jQuery版本冲突
    var $ = jQuery.noConflict();//重新定义$

    /**************************** BEGIN ****************************/
    /*!
     * xss
     *
     */
	(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){var FilterCSS=require("cssfilter").FilterCSS;var getDefaultCSSWhiteList=require("cssfilter").getDefaultWhiteList;var _=require("./util");function getDefaultWhiteList(){return{a:["target","href","title"],abbr:["title"],address:[],area:["shape","coords","href","alt"],article:[],aside:[],audio:["autoplay","controls","loop","preload","src"],b:[],bdi:["dir"],bdo:["dir"],big:[],blockquote:["cite"],br:[],caption:[],center:[],cite:[],code:[],col:["align","valign","span","width"],colgroup:["align","valign","span","width"],dd:[],del:["datetime"],details:["open"],div:[],dl:[],dt:[],em:[],font:["color","size","face"],footer:[],h1:[],h2:[],h3:[],h4:[],h5:[],h6:[],header:[],hr:[],i:[],img:["src","alt","title","width","height"],ins:["datetime"],li:[],mark:[],nav:[],ol:[],p:[],pre:[],s:[],section:[],small:[],span:[],sub:[],sup:[],strong:[],table:["width","border","align","valign"],tbody:["align","valign"],td:["width","rowspan","colspan","align","valign"],tfoot:["align","valign"],th:["width","rowspan","colspan","align","valign"],thead:["align","valign"],tr:["rowspan","align","valign"],tt:[],u:[],ul:[],video:["autoplay","controls","loop","preload","src","height","width"]}}var defaultCSSFilter=new FilterCSS;function onTag(tag,html,options){}function onIgnoreTag(tag,html,options){}function onTagAttr(tag,name,value){}function onIgnoreTagAttr(tag,name,value){}function escapeHtml(html){return html.replace(REGEXP_LT,"&lt;").replace(REGEXP_GT,"&gt;")}function safeAttrValue(tag,name,value,cssFilter){value=friendlyAttrValue(value);if(name==="href"||name==="src"){value=_.trim(value);if(value==="#")return"#";if(!(value.substr(0,7)==="http://"||value.substr(0,8)==="https://"||value.substr(0,7)==="mailto:"||value[0]==="#"||value[0]==="/")){return""}}else if(name==="background"){REGEXP_DEFAULT_ON_TAG_ATTR_4.lastIndex=0;if(REGEXP_DEFAULT_ON_TAG_ATTR_4.test(value)){return""}}else if(name==="style"){REGEXP_DEFAULT_ON_TAG_ATTR_7.lastIndex=0;if(REGEXP_DEFAULT_ON_TAG_ATTR_7.test(value)){return""}REGEXP_DEFAULT_ON_TAG_ATTR_8.lastIndex=0;if(REGEXP_DEFAULT_ON_TAG_ATTR_8.test(value)){REGEXP_DEFAULT_ON_TAG_ATTR_4.lastIndex=0;if(REGEXP_DEFAULT_ON_TAG_ATTR_4.test(value)){return""}}if(cssFilter!==false){cssFilter=cssFilter||defaultCSSFilter;value=cssFilter.process(value)}}value=escapeAttrValue(value);return value}var REGEXP_LT=/</g;var REGEXP_GT=/>/g;var REGEXP_QUOTE=/"/g;var REGEXP_QUOTE_2=/&quot;/g;var REGEXP_ATTR_VALUE_1=/&#([a-zA-Z0-9]*);?/gim;var REGEXP_ATTR_VALUE_COLON=/&colon;?/gim;var REGEXP_ATTR_VALUE_NEWLINE=/&newline;?/gim;var REGEXP_DEFAULT_ON_TAG_ATTR_3=/\/\*|\*\//gm;var REGEXP_DEFAULT_ON_TAG_ATTR_4=/((j\s*a\s*v\s*a|v\s*b|l\s*i\s*v\s*e)\s*s\s*c\s*r\s*i\s*p\s*t\s*|m\s*o\s*c\s*h\s*a)\:/gi;var REGEXP_DEFAULT_ON_TAG_ATTR_5=/^[\s"'`]*(d\s*a\s*t\s*a\s*)\:/gi;var REGEXP_DEFAULT_ON_TAG_ATTR_6=/^[\s"'`]*(d\s*a\s*t\s*a\s*)\:\s*image\//gi;var REGEXP_DEFAULT_ON_TAG_ATTR_7=/e\s*x\s*p\s*r\s*e\s*s\s*s\s*i\s*o\s*n\s*\(.*/gi;var REGEXP_DEFAULT_ON_TAG_ATTR_8=/u\s*r\s*l\s*\(.*/gi;function escapeQuote(str){return str.replace(REGEXP_QUOTE,"&quot;")}function unescapeQuote(str){return str.replace(REGEXP_QUOTE_2,'"')}function escapeHtmlEntities(str){return str.replace(REGEXP_ATTR_VALUE_1,function replaceUnicode(str,code){return code[0]==="x"||code[0]==="X"?String.fromCharCode(parseInt(code.substr(1),16)):String.fromCharCode(parseInt(code,10))})}function escapeDangerHtml5Entities(str){return str.replace(REGEXP_ATTR_VALUE_COLON,":").replace(REGEXP_ATTR_VALUE_NEWLINE," ")}function clearNonPrintableCharacter(str){var str2="";for(var i=0,len=str.length;i<len;i++){str2+=str.charCodeAt(i)<32?" ":str.charAt(i)}return _.trim(str2)}function friendlyAttrValue(str){str=unescapeQuote(str);str=escapeHtmlEntities(str);str=escapeDangerHtml5Entities(str);str=clearNonPrintableCharacter(str);return str}function escapeAttrValue(str){str=escapeQuote(str);str=escapeHtml(str);return str}function onIgnoreTagStripAll(){return""}function StripTagBody(tags,next){if(typeof next!=="function"){next=function(){}}var isRemoveAllTag=!Array.isArray(tags);function isRemoveTag(tag){if(isRemoveAllTag)return true;return _.indexOf(tags,tag)!==-1}var removeList=[];var posStart=false;return{onIgnoreTag:function(tag,html,options){if(isRemoveTag(tag)){if(options.isClosing){var ret="[/removed]";var end=options.position+ret.length;removeList.push([posStart!==false?posStart:options.position,end]);posStart=false;return ret}else{if(!posStart){posStart=options.position}return"[removed]"}}else{return next(tag,html,options)}},remove:function(html){var rethtml="";var lastPos=0;_.forEach(removeList,function(pos){rethtml+=html.slice(lastPos,pos[0]);lastPos=pos[1]});rethtml+=html.slice(lastPos);return rethtml}}}function stripCommentTag(html){return html.replace(STRIP_COMMENT_TAG_REGEXP,"")}var STRIP_COMMENT_TAG_REGEXP=/<!--[\s\S]*?-->/g;function stripBlankChar(html){var chars=html.split("");chars=chars.filter(function(char){var c=char.charCodeAt(0);if(c===127)return false;if(c<=31){if(c===10||c===13)return true;return false}return true});return chars.join("")}exports.whiteList=getDefaultWhiteList();exports.getDefaultWhiteList=getDefaultWhiteList;exports.onTag=onTag;exports.onIgnoreTag=onIgnoreTag;exports.onTagAttr=onTagAttr;exports.onIgnoreTagAttr=onIgnoreTagAttr;exports.safeAttrValue=safeAttrValue;exports.escapeHtml=escapeHtml;exports.escapeQuote=escapeQuote;exports.unescapeQuote=unescapeQuote;exports.escapeHtmlEntities=escapeHtmlEntities;exports.escapeDangerHtml5Entities=escapeDangerHtml5Entities;exports.clearNonPrintableCharacter=clearNonPrintableCharacter;exports.friendlyAttrValue=friendlyAttrValue;exports.escapeAttrValue=escapeAttrValue;exports.onIgnoreTagStripAll=onIgnoreTagStripAll;exports.StripTagBody=StripTagBody;exports.stripCommentTag=stripCommentTag;exports.stripBlankChar=stripBlankChar;exports.cssFilter=defaultCSSFilter;exports.getDefaultCSSWhiteList=getDefaultCSSWhiteList},{"./util":4,cssfilter:8}],2:[function(require,module,exports){var DEFAULT=require("./default");var parser=require("./parser");var FilterXSS=require("./xss");function filterXSS(html,options){var xss=new FilterXSS(options);return xss.process(html)}exports=module.exports=filterXSS;exports.FilterXSS=FilterXSS;for(var i in DEFAULT)exports[i]=DEFAULT[i];for(var i in parser)exports[i]=parser[i];if(typeof window!=="undefined"){window.filterXSS=module.exports}},{"./default":1,"./parser":3,"./xss":5}],3:[function(require,module,exports){var _=require("./util");function getTagName(html){var i=html.indexOf(" ");if(i===-1){var tagName=html.slice(1,-1)}else{var tagName=html.slice(1,i+1)}tagName=_.trim(tagName).toLowerCase();if(tagName.slice(0,1)==="/")tagName=tagName.slice(1);if(tagName.slice(-1)==="/")tagName=tagName.slice(0,-1);return tagName}function isClosing(html){return html.slice(0,2)==="</"}function parseTag(html,onTag,escapeHtml){"user strict";var rethtml="";var lastPos=0;var tagStart=false;var quoteStart=false;var currentPos=0;var len=html.length;var currentHtml="";var currentTagName="";for(currentPos=0;currentPos<len;currentPos++){var c=html.charAt(currentPos);if(tagStart===false){if(c==="<"){tagStart=currentPos;continue}}else{if(quoteStart===false){if(c==="<"){rethtml+=escapeHtml(html.slice(lastPos,currentPos));tagStart=currentPos;lastPos=currentPos;continue}if(c===">"){rethtml+=escapeHtml(html.slice(lastPos,tagStart));currentHtml=html.slice(tagStart,currentPos+1);currentTagName=getTagName(currentHtml);rethtml+=onTag(tagStart,rethtml.length,currentTagName,currentHtml,isClosing(currentHtml));lastPos=currentPos+1;tagStart=false;continue}if((c==='"'||c==="'")&&html.charAt(currentPos-1)==="="){quoteStart=c;continue}}else{if(c===quoteStart){quoteStart=false;continue}}}}if(lastPos<html.length){rethtml+=escapeHtml(html.substr(lastPos))}return rethtml}var REGEXP_ATTR_NAME=/[^a-zA-Z0-9_:\.\-]/gim;function parseAttr(html,onAttr){"user strict";var lastPos=0;var retAttrs=[];var tmpName=false;var len=html.length;function addAttr(name,value){name=_.trim(name);name=name.replace(REGEXP_ATTR_NAME,"").toLowerCase();if(name.length<1)return;var ret=onAttr(name,value||"");if(ret)retAttrs.push(ret)}for(var i=0;i<len;i++){var c=html.charAt(i);var v,j;if(tmpName===false&&c==="="){tmpName=html.slice(lastPos,i);lastPos=i+1;continue}if(tmpName!==false){if(i===lastPos&&(c==='"'||c==="'")&&html.charAt(i-1)==="="){j=html.indexOf(c,i+1);if(j===-1){break}else{v=_.trim(html.slice(lastPos+1,j));addAttr(tmpName,v);tmpName=false;i=j;lastPos=i+1;continue}}}if(c===" "){if(tmpName===false){j=findNextEqual(html,i);if(j===-1){v=_.trim(html.slice(lastPos,i));addAttr(v);tmpName=false;lastPos=i+1;continue}else{i=j-1;continue}}else{j=findBeforeEqual(html,i-1);if(j===-1){v=_.trim(html.slice(lastPos,i));v=stripQuoteWrap(v);addAttr(tmpName,v);tmpName=false;lastPos=i+1;continue}else{continue}}}}if(lastPos<html.length){if(tmpName===false){addAttr(html.slice(lastPos))}else{addAttr(tmpName,stripQuoteWrap(_.trim(html.slice(lastPos))))}}return _.trim(retAttrs.join(" "))}function findNextEqual(str,i){for(;i<str.length;i++){var c=str[i];if(c===" ")continue;if(c==="=")return i;return-1}}function findBeforeEqual(str,i){for(;i>0;i--){var c=str[i];if(c===" ")continue;if(c==="=")return i;return-1}}function isQuoteWrapString(text){if(text[0]==='"'&&text[text.length-1]==='"'||text[0]==="'"&&text[text.length-1]==="'"){return true}else{return false}}function stripQuoteWrap(text){if(isQuoteWrapString(text)){return text.substr(1,text.length-2)}else{return text}}exports.parseTag=parseTag;exports.parseAttr=parseAttr},{"./util":4}],4:[function(require,module,exports){module.exports={indexOf:function(arr,item){var i,j;if(Array.prototype.indexOf){return arr.indexOf(item)}for(i=0,j=arr.length;i<j;i++){if(arr[i]===item){return i}}return-1},forEach:function(arr,fn,scope){var i,j;if(Array.prototype.forEach){return arr.forEach(fn,scope)}for(i=0,j=arr.length;i<j;i++){fn.call(scope,arr[i],i,arr)}},trim:function(str){if(String.prototype.trim){return str.trim()}return str.replace(/(^\s*)|(\s*$)/g,"")}}},{}],5:[function(require,module,exports){var FilterCSS=require("cssfilter").FilterCSS;var DEFAULT=require("./default");var parser=require("./parser");var parseTag=parser.parseTag;var parseAttr=parser.parseAttr;var _=require("./util");function isNull(obj){return obj===undefined||obj===null}function getAttrs(html){var i=html.indexOf(" ");if(i===-1){return{html:"",closing:html[html.length-2]==="/"}}html=_.trim(html.slice(i+1,-1));var isClosing=html[html.length-1]==="/";if(isClosing)html=_.trim(html.slice(0,-1));return{html:html,closing:isClosing}}function FilterXSS(options){options=options||{};if(options.stripIgnoreTag){if(options.onIgnoreTag){console.error('Notes: cannot use these two options "stripIgnoreTag" and "onIgnoreTag" at the same time')}options.onIgnoreTag=DEFAULT.onIgnoreTagStripAll}options.whiteList=options.whiteList||DEFAULT.whiteList;options.onTag=options.onTag||DEFAULT.onTag;options.onTagAttr=options.onTagAttr||DEFAULT.onTagAttr;options.onIgnoreTag=options.onIgnoreTag||DEFAULT.onIgnoreTag;options.onIgnoreTagAttr=options.onIgnoreTagAttr||DEFAULT.onIgnoreTagAttr;options.safeAttrValue=options.safeAttrValue||DEFAULT.safeAttrValue;options.escapeHtml=options.escapeHtml||DEFAULT.escapeHtml;this.options=options;if(options.css===false){this.cssFilter=false}else{options.css=options.css||{};this.cssFilter=new FilterCSS(options.css)}}FilterXSS.prototype.process=function(html){html=html||"";html=html.toString();if(!html)return"";var me=this;var options=me.options;var whiteList=options.whiteList;var onTag=options.onTag;var onIgnoreTag=options.onIgnoreTag;var onTagAttr=options.onTagAttr;var onIgnoreTagAttr=options.onIgnoreTagAttr;var safeAttrValue=options.safeAttrValue;var escapeHtml=options.escapeHtml;var cssFilter=me.cssFilter;if(options.stripBlankChar){html=DEFAULT.stripBlankChar(html)}if(!options.allowCommentTag){html=DEFAULT.stripCommentTag(html)}var stripIgnoreTagBody=false;if(options.stripIgnoreTagBody){var stripIgnoreTagBody=DEFAULT.StripTagBody(options.stripIgnoreTagBody,onIgnoreTag);onIgnoreTag=stripIgnoreTagBody.onIgnoreTag}var retHtml=parseTag(html,function(sourcePosition,position,tag,html,isClosing){var info={sourcePosition:sourcePosition,position:position,isClosing:isClosing,isWhite:tag in whiteList};var ret=onTag(tag,html,info);if(!isNull(ret))return ret;if(info.isWhite){if(info.isClosing){return"</"+tag+">"}var attrs=getAttrs(html);var whiteAttrList=whiteList[tag];var attrsHtml=parseAttr(attrs.html,function(name,value){var isWhiteAttr=_.indexOf(whiteAttrList,name)!==-1;var ret=onTagAttr(tag,name,value,isWhiteAttr);if(!isNull(ret))return ret;if(isWhiteAttr){value=safeAttrValue(tag,name,value,cssFilter);if(value){return name+'="'+value+'"'}else{return name}}else{var ret=onIgnoreTagAttr(tag,name,value,isWhiteAttr);if(!isNull(ret))return ret;return}});var html="<"+tag;if(attrsHtml)html+=" "+attrsHtml;if(attrs.closing)html+=" /";html+=">";return html}else{var ret=onIgnoreTag(tag,html,info);if(!isNull(ret))return ret;return escapeHtml(html)}},escapeHtml);if(stripIgnoreTagBody){retHtml=stripIgnoreTagBody.remove(retHtml)}return retHtml};module.exports=FilterXSS},{"./default":1,"./parser":3,"./util":4,cssfilter:8}],6:[function(require,module,exports){var DEFAULT=require("./default");var parseStyle=require("./parser");var _=require("./util");function isNull(obj){return obj===undefined||obj===null}function FilterCSS(options){options=options||{};options.whiteList=options.whiteList||DEFAULT.whiteList;options.onAttr=options.onAttr||DEFAULT.onAttr;options.onIgnoreAttr=options.onIgnoreAttr||DEFAULT.onIgnoreAttr;this.options=options}FilterCSS.prototype.process=function(css){css=css||"";css=css.toString();if(!css)return"";var me=this;var options=me.options;var whiteList=options.whiteList;var onAttr=options.onAttr;var onIgnoreAttr=options.onIgnoreAttr;var retCSS=parseStyle(css,function(sourcePosition,position,name,value,source){var check=whiteList[name];var isWhite=false;if(check===true)isWhite=check;else if(typeof check==="function")isWhite=check(value);else if(check instanceof RegExp)isWhite=check.test(value);if(isWhite!==true)isWhite=false;var opts={position:position,sourcePosition:sourcePosition,source:source,isWhite:isWhite};if(isWhite){var ret=onAttr(name,value,opts);if(isNull(ret)){return name+":"+value}else{return ret}}else{var ret=onIgnoreAttr(name,value,opts);if(!isNull(ret)){return ret}}});return retCSS};module.exports=FilterCSS},{"./default":7,"./parser":9,"./util":10}],7:[function(require,module,exports){function getDefaultWhiteList(){var whiteList={};whiteList["align-content"]=false;whiteList["align-items"]=false;whiteList["align-self"]=false;whiteList["alignment-adjust"]=false;whiteList["alignment-baseline"]=false;whiteList["all"]=false;whiteList["anchor-point"]=false;whiteList["animation"]=false;whiteList["animation-delay"]=false;whiteList["animation-direction"]=false;whiteList["animation-duration"]=false;whiteList["animation-fill-mode"]=false;whiteList["animation-iteration-count"]=false;whiteList["animation-name"]=false;whiteList["animation-play-state"]=false;whiteList["animation-timing-function"]=false;whiteList["azimuth"]=false;whiteList["backface-visibility"]=false;whiteList["background"]=true;whiteList["background-attachment"]=true;whiteList["background-clip"]=true;whiteList["background-color"]=true;whiteList["background-image"]=true;whiteList["background-origin"]=true;whiteList["background-position"]=true;whiteList["background-repeat"]=true;whiteList["background-size"]=true;whiteList["baseline-shift"]=false;whiteList["binding"]=false;whiteList["bleed"]=false;whiteList["bookmark-label"]=false;whiteList["bookmark-level"]=false;whiteList["bookmark-state"]=false;whiteList["border"]=true;whiteList["border-bottom"]=true;whiteList["border-bottom-color"]=true;whiteList["border-bottom-left-radius"]=true;whiteList["border-bottom-right-radius"]=true;whiteList["border-bottom-style"]=true;whiteList["border-bottom-width"]=true;whiteList["border-collapse"]=true;whiteList["border-color"]=true;whiteList["border-image"]=true;whiteList["border-image-outset"]=true;whiteList["border-image-repeat"]=true;whiteList["border-image-slice"]=true;whiteList["border-image-source"]=true;whiteList["border-image-width"]=true;whiteList["border-left"]=true;whiteList["border-left-color"]=true;whiteList["border-left-style"]=true;whiteList["border-left-width"]=true;whiteList["border-radius"]=true;whiteList["border-right"]=true;whiteList["border-right-color"]=true;whiteList["border-right-style"]=true;whiteList["border-right-width"]=true;whiteList["border-spacing"]=true;whiteList["border-style"]=true;whiteList["border-top"]=true;whiteList["border-top-color"]=true;whiteList["border-top-left-radius"]=true;whiteList["border-top-right-radius"]=true;whiteList["border-top-style"]=true;whiteList["border-top-width"]=true;whiteList["border-width"]=true;whiteList["bottom"]=false;whiteList["box-decoration-break"]=true;whiteList["box-shadow"]=true;whiteList["box-sizing"]=true;whiteList["box-snap"]=true;whiteList["box-suppress"]=true;whiteList["break-after"]=true;whiteList["break-before"]=true;whiteList["break-inside"]=true;whiteList["caption-side"]=false;whiteList["chains"]=false;whiteList["clear"]=true;whiteList["clip"]=false;whiteList["clip-path"]=false;whiteList["clip-rule"]=false;whiteList["color"]=true;whiteList["color-interpolation-filters"]=true;whiteList["column-count"]=false;whiteList["column-fill"]=false;whiteList["column-gap"]=false;whiteList["column-rule"]=false;whiteList["column-rule-color"]=false;whiteList["column-rule-style"]=false;whiteList["column-rule-width"]=false;whiteList["column-span"]=false;whiteList["column-width"]=false;whiteList["columns"]=false;whiteList["contain"]=false;whiteList["content"]=false;whiteList["counter-increment"]=false;whiteList["counter-reset"]=false;whiteList["counter-set"]=false;whiteList["crop"]=false;whiteList["cue"]=false;whiteList["cue-after"]=false;whiteList["cue-before"]=false;whiteList["cursor"]=false;whiteList["direction"]=false;whiteList["display"]=true;whiteList["display-inside"]=true;whiteList["display-list"]=true;whiteList["display-outside"]=true;whiteList["dominant-baseline"]=false;whiteList["elevation"]=false;whiteList["empty-cells"]=false;whiteList["filter"]=false;whiteList["flex"]=false;whiteList["flex-basis"]=false;whiteList["flex-direction"]=false;whiteList["flex-flow"]=false;whiteList["flex-grow"]=false;whiteList["flex-shrink"]=false;whiteList["flex-wrap"]=false;whiteList["float"]=false;whiteList["float-offset"]=false;whiteList["flood-color"]=false;whiteList["flood-opacity"]=false;whiteList["flow-from"]=false;whiteList["flow-into"]=false;whiteList["font"]=true;whiteList["font-family"]=true;whiteList["font-feature-settings"]=true;whiteList["font-kerning"]=true;whiteList["font-language-override"]=true;whiteList["font-size"]=true;whiteList["font-size-adjust"]=true;whiteList["font-stretch"]=true;whiteList["font-style"]=true;whiteList["font-synthesis"]=true;whiteList["font-variant"]=true;whiteList["font-variant-alternates"]=true;whiteList["font-variant-caps"]=true;whiteList["font-variant-east-asian"]=true;whiteList["font-variant-ligatures"]=true;whiteList["font-variant-numeric"]=true;whiteList["font-variant-position"]=true;whiteList["font-weight"]=true;whiteList["grid"]=false;whiteList["grid-area"]=false;whiteList["grid-auto-columns"]=false;whiteList["grid-auto-flow"]=false;whiteList["grid-auto-rows"]=false;whiteList["grid-column"]=false;whiteList["grid-column-end"]=false;whiteList["grid-column-start"]=false;whiteList["grid-row"]=false;whiteList["grid-row-end"]=false;whiteList["grid-row-start"]=false;whiteList["grid-template"]=false;whiteList["grid-template-areas"]=false;whiteList["grid-template-columns"]=false;whiteList["grid-template-rows"]=false;whiteList["hanging-punctuation"]=false;whiteList["height"]=true;whiteList["hyphens"]=false;whiteList["icon"]=false;whiteList["image-orientation"]=false;whiteList["image-resolution"]=false;whiteList["ime-mode"]=false;whiteList["initial-letters"]=false;whiteList["inline-box-align"]=false;whiteList["justify-content"]=false;whiteList["justify-items"]=false;whiteList["justify-self"]=false;whiteList["left"]=false;whiteList["letter-spacing"]=true;whiteList["lighting-color"]=true;whiteList["line-box-contain"]=false;whiteList["line-break"]=false;whiteList["line-grid"]=false;whiteList["line-height"]=false;whiteList["line-snap"]=false;whiteList["line-stacking"]=false;whiteList["line-stacking-ruby"]=false;whiteList["line-stacking-shift"]=false;whiteList["line-stacking-strategy"]=false;whiteList["list-style"]=true;whiteList["list-style-image"]=true;whiteList["list-style-position"]=true;whiteList["list-style-type"]=true;whiteList["margin"]=true;whiteList["margin-bottom"]=true;whiteList["margin-left"]=true;whiteList["margin-right"]=true;whiteList["margin-top"]=true;whiteList["marker-offset"]=false;whiteList["marker-side"]=false;whiteList["marks"]=false;whiteList["mask"]=false;whiteList["mask-box"]=false;whiteList["mask-box-outset"]=false;whiteList["mask-box-repeat"]=false;whiteList["mask-box-slice"]=false;whiteList["mask-box-source"]=false;whiteList["mask-box-width"]=false;whiteList["mask-clip"]=false;whiteList["mask-image"]=false;whiteList["mask-origin"]=false;whiteList["mask-position"]=false;whiteList["mask-repeat"]=false;whiteList["mask-size"]=false;whiteList["mask-source-type"]=false;whiteList["mask-type"]=false;whiteList["max-height"]=true;whiteList["max-lines"]=false;whiteList["max-width"]=true;whiteList["min-height"]=true;whiteList["min-width"]=true;whiteList["move-to"]=false;whiteList["nav-down"]=false;whiteList["nav-index"]=false;whiteList["nav-left"]=false;whiteList["nav-right"]=false;whiteList["nav-up"]=false;whiteList["object-fit"]=false;whiteList["object-position"]=false;whiteList["opacity"]=false;whiteList["order"]=false;whiteList["orphans"]=false;whiteList["outline"]=false;whiteList["outline-color"]=false;whiteList["outline-offset"]=false;whiteList["outline-style"]=false;whiteList["outline-width"]=false;whiteList["overflow"]=false;whiteList["overflow-wrap"]=false;whiteList["overflow-x"]=false;whiteList["overflow-y"]=false;whiteList["padding"]=true;whiteList["padding-bottom"]=true;whiteList["padding-left"]=true;whiteList["padding-right"]=true;whiteList["padding-top"]=true;whiteList["page"]=false;whiteList["page-break-after"]=false;whiteList["page-break-before"]=false;whiteList["page-break-inside"]=false;whiteList["page-policy"]=false;whiteList["pause"]=false;whiteList["pause-after"]=false;whiteList["pause-before"]=false;whiteList["perspective"]=false;whiteList["perspective-origin"]=false;whiteList["pitch"]=false;whiteList["pitch-range"]=false;whiteList["play-during"]=false;whiteList["position"]=false;whiteList["presentation-level"]=false;whiteList["quotes"]=false;whiteList["region-fragment"]=false;whiteList["resize"]=false;whiteList["rest"]=false;whiteList["rest-after"]=false;whiteList["rest-before"]=false;whiteList["richness"]=false;whiteList["right"]=false;whiteList["rotation"]=false;whiteList["rotation-point"]=false;whiteList["ruby-align"]=false;whiteList["ruby-merge"]=false;whiteList["ruby-position"]=false;whiteList["shape-image-threshold"]=false;whiteList["shape-outside"]=false;whiteList["shape-margin"]=false;whiteList["size"]=false;whiteList["speak"]=false;whiteList["speak-as"]=false;whiteList["speak-header"]=false;whiteList["speak-numeral"]=false;whiteList["speak-punctuation"]=false;whiteList["speech-rate"]=false;whiteList["stress"]=false;whiteList["string-set"]=false;whiteList["tab-size"]=false;whiteList["table-layout"]=false;whiteList["text-align"]=true;whiteList["text-align-last"]=true;whiteList["text-combine-upright"]=true;whiteList["text-decoration"]=true;whiteList["text-decoration-color"]=true;whiteList["text-decoration-line"]=true;whiteList["text-decoration-skip"]=true;whiteList["text-decoration-style"]=true;whiteList["text-emphasis"]=true;whiteList["text-emphasis-color"]=true;whiteList["text-emphasis-position"]=true;whiteList["text-emphasis-style"]=true;whiteList["text-height"]=true;whiteList["text-indent"]=true;whiteList["text-justify"]=true;whiteList["text-orientation"]=true;whiteList["text-overflow"]=true;whiteList["text-shadow"]=true;whiteList["text-space-collapse"]=true;whiteList["text-transform"]=true;whiteList["text-underline-position"]=true;whiteList["text-wrap"]=true;whiteList["top"]=false;whiteList["transform"]=false;whiteList["transform-origin"]=false;whiteList["transform-style"]=false;whiteList["transition"]=false;whiteList["transition-delay"]=false;whiteList["transition-duration"]=false;whiteList["transition-property"]=false;whiteList["transition-timing-function"]=false;whiteList["unicode-bidi"]=false;whiteList["vertical-align"]=false;whiteList["visibility"]=false;whiteList["voice-balance"]=false;whiteList["voice-duration"]=false;whiteList["voice-family"]=false;whiteList["voice-pitch"]=false;whiteList["voice-range"]=false;whiteList["voice-rate"]=false;whiteList["voice-stress"]=false;whiteList["voice-volume"]=false;whiteList["volume"]=false;whiteList["white-space"]=false;whiteList["widows"]=false;whiteList["width"]=true;whiteList["will-change"]=false;whiteList["word-break"]=true;whiteList["word-spacing"]=true;whiteList["word-wrap"]=true;whiteList["wrap-flow"]=false;whiteList["wrap-through"]=false;whiteList["writing-mode"]=false;whiteList["z-index"]=false;return whiteList}function onAttr(name,value,options){}function onIgnoreAttr(name,value,options){}exports.whiteList=getDefaultWhiteList();exports.getDefaultWhiteList=getDefaultWhiteList;exports.onAttr=onAttr;exports.onIgnoreAttr=onIgnoreAttr},{}],8:[function(require,module,exports){var DEFAULT=require("./default");var FilterCSS=require("./css");function filterCSS(html,options){var xss=new FilterCSS(options);return xss.process(html)}exports=module.exports=filterCSS;exports.FilterCSS=FilterCSS;for(var i in DEFAULT)exports[i]=DEFAULT[i];if(typeof window!=="undefined"){window.filterCSS=module.exports}},{"./css":6,"./default":7}],9:[function(require,module,exports){var _=require("./util");function parseStyle(css,onAttr){css=_.trimRight(css);if(css[css.length-1]!==";")css+=";";var cssLength=css.length;var isParenthesisOpen=false;var lastPos=0;var i=0;var retCSS="";function addNewAttr(){if(!isParenthesisOpen){var source=_.trim(css.slice(lastPos,i));var j=source.indexOf(":");if(j!==-1){var name=_.trim(source.slice(0,j));var value=_.trim(source.slice(j+1));if(name){var ret=onAttr(lastPos,retCSS.length,name,value,source);if(ret)retCSS+=ret+"; "}}}lastPos=i+1}for(;i<cssLength;i++){var c=css[i];if(c==="/"&&css[i+1]==="*"){var j=css.indexOf("*/",i+2);if(j===-1)break;i=j+1;lastPos=i+1;isParenthesisOpen=false}else if(c==="("){isParenthesisOpen=true}else if(c===")"){isParenthesisOpen=false}else if(c===";"){if(isParenthesisOpen){}else{addNewAttr()}}else if(c==="\n"){addNewAttr()}}return _.trim(retCSS)}module.exports=parseStyle},{"./util":10}],10:[function(require,module,exports){module.exports={indexOf:function(arr,item){var i,j;if(Array.prototype.indexOf){return arr.indexOf(item)}for(i=0,j=arr.length;i<j;i++){if(arr[i]===item){return i}}return-1},forEach:function(arr,fn,scope){var i,j;if(Array.prototype.forEach){return arr.forEach(fn,scope)}for(i=0,j=arr.length;i<j;i++){fn.call(scope,arr[i],i,arr)}},trim:function(str){if(String.prototype.trim){return str.trim()}return str.replace(/(^\s*)|(\s*$)/g,"")},trimRight:function(str){if(String.prototype.trimRight){return str.trimRight()}return str.replace(/(\s*$)/g,"")}}},{}]},{},[2]);
    /**************************** END ****************************/

    /**************************** BEGIN ****************************/
    /*!
     * fastclick
     *
     */
    ;(function(){'use strict';function FastClick(layer,options){var oldOnClick;options=options||{};this.trackingClick=false;this.trackingClickStart=0;this.targetElement=null;this.touchStartX=0;this.touchStartY=0;this.lastTouchIdentifier=0;this.touchBoundary=options.touchBoundary||10;this.layer=layer;this.tapDelay=options.tapDelay||200;this.tapTimeout=options.tapTimeout||700;if(FastClick.notNeeded(layer)){return}function bind(method,context){return function(){return method.apply(context,arguments)}}var methods=['onMouse','onClick','onTouchStart','onTouchMove','onTouchEnd','onTouchCancel'];var context=this;for(var i=0,l=methods.length;i<l;i++){context[methods[i]]=bind(context[methods[i]],context)}if(deviceIsAndroid){layer.addEventListener('mouseover',this.onMouse,true);layer.addEventListener('mousedown',this.onMouse,true);layer.addEventListener('mouseup',this.onMouse,true)}layer.addEventListener('click',this.onClick,true);layer.addEventListener('touchstart',this.onTouchStart,false);layer.addEventListener('touchmove',this.onTouchMove,false);layer.addEventListener('touchend',this.onTouchEnd,false);layer.addEventListener('touchcancel',this.onTouchCancel,false);if(!Event.prototype.stopImmediatePropagation){layer.removeEventListener=function(type,callback,capture){var rmv=Node.prototype.removeEventListener;if(type==='click'){rmv.call(layer,type,callback.hijacked||callback,capture)}else{rmv.call(layer,type,callback,capture)}};layer.addEventListener=function(type,callback,capture){var adv=Node.prototype.addEventListener;if(type==='click'){adv.call(layer,type,callback.hijacked||(callback.hijacked=function(event){if(!event.propagationStopped){callback(event)}}),capture)}else{adv.call(layer,type,callback,capture)}}}if(typeof layer.onclick==='function'){oldOnClick=layer.onclick;layer.addEventListener('click',function(event){oldOnClick(event)},false);layer.onclick=null}}var deviceIsWindowsPhone=navigator.userAgent.indexOf("Windows Phone")>=0;var deviceIsAndroid=navigator.userAgent.indexOf('Android')>0&&!deviceIsWindowsPhone;var deviceIsIOS=/iP(ad|hone|od)/.test(navigator.userAgent)&&!deviceIsWindowsPhone;var deviceIsIOS4=deviceIsIOS&&(/OS 4_\d(_\d)?/).test(navigator.userAgent);var deviceIsIOSWithBadTarget=deviceIsIOS&&(/OS [6-7]_\d/).test(navigator.userAgent);var deviceIsBlackBerry10=navigator.userAgent.indexOf('BB10')>0;FastClick.prototype.needsClick=function(target){switch(target.nodeName.toLowerCase()){case'button':case'select':case'textarea':if(target.disabled){return true}break;case'input':if((deviceIsIOS&&target.type==='file')||target.disabled){return true}break;case'label':case'iframe':case'video':return true}return(/\bneedsclick\b/).test(target.className)};FastClick.prototype.needsFocus=function(target){switch(target.nodeName.toLowerCase()){case'textarea':return true;case'select':return!deviceIsAndroid;case'input':switch(target.type){case'button':case'checkbox':case'file':case'image':case'radio':case'submit':return false}return!target.disabled&&!target.readOnly;default:return(/\bneedsfocus\b/).test(target.className)}};FastClick.prototype.sendClick=function(targetElement,event){var clickEvent,touch;if(document.activeElement&&document.activeElement!==targetElement){document.activeElement.blur()}touch=event.changedTouches[0];clickEvent=document.createEvent('MouseEvents');clickEvent.initMouseEvent(this.determineEventType(targetElement),true,true,window,1,touch.screenX,touch.screenY,touch.clientX,touch.clientY,false,false,false,false,0,null);clickEvent.forwardedTouchEvent=true;targetElement.dispatchEvent(clickEvent)};FastClick.prototype.determineEventType=function(targetElement){if(deviceIsAndroid&&targetElement.tagName.toLowerCase()==='select'){return'mousedown'}return'click'};FastClick.prototype.focus=function(targetElement){var length;if(deviceIsIOS&&targetElement.setSelectionRange&&targetElement.type.indexOf('date')!==0&&targetElement.type!=='time'&&targetElement.type!=='month'){length=targetElement.value.length;targetElement.setSelectionRange(length,length)}else{targetElement.focus()}};FastClick.prototype.updateScrollParent=function(targetElement){var scrollParent,parentElement;scrollParent=targetElement.fastClickScrollParent;if(!scrollParent||!scrollParent.contains(targetElement)){parentElement=targetElement;do{if(parentElement.scrollHeight>parentElement.offsetHeight){scrollParent=parentElement;targetElement.fastClickScrollParent=parentElement;break}parentElement=parentElement.parentElement}while(parentElement)}if(scrollParent){scrollParent.fastClickLastScrollTop=scrollParent.scrollTop}};FastClick.prototype.getTargetElementFromEventTarget=function(eventTarget){if(eventTarget.nodeType===Node.TEXT_NODE){return eventTarget.parentNode}return eventTarget};FastClick.prototype.onTouchStart=function(event){var targetElement,touch,selection;if(event.targetTouches.length>1){return true}targetElement=this.getTargetElementFromEventTarget(event.target);touch=event.targetTouches[0];if(deviceIsIOS){selection=window.getSelection();if(selection.rangeCount&&!selection.isCollapsed){return true}if(!deviceIsIOS4){if(touch.identifier&&touch.identifier===this.lastTouchIdentifier){event.preventDefault();return false}this.lastTouchIdentifier=touch.identifier;this.updateScrollParent(targetElement)}}this.trackingClick=true;this.trackingClickStart=event.timeStamp;this.targetElement=targetElement;this.touchStartX=touch.pageX;this.touchStartY=touch.pageY;if((event.timeStamp-this.lastClickTime)<this.tapDelay){event.preventDefault()}return true};FastClick.prototype.touchHasMoved=function(event){var touch=event.changedTouches[0],boundary=this.touchBoundary;if(Math.abs(touch.pageX-this.touchStartX)>boundary||Math.abs(touch.pageY-this.touchStartY)>boundary){return true}return false};FastClick.prototype.onTouchMove=function(event){if(!this.trackingClick){return true}if(this.targetElement!==this.getTargetElementFromEventTarget(event.target)||this.touchHasMoved(event)){this.trackingClick=false;this.targetElement=null}return true};FastClick.prototype.findControl=function(labelElement){if(labelElement.control!==undefined){return labelElement.control}if(labelElement.htmlFor){return document.getElementById(labelElement.htmlFor)}return labelElement.querySelector('button, input:not([type=hidden]), keygen, meter, output, progress, select, textarea')};FastClick.prototype.onTouchEnd=function(event){var forElement,trackingClickStart,targetTagName,scrollParent,touch,targetElement=this.targetElement;if(!this.trackingClick){return true}if((event.timeStamp-this.lastClickTime)<this.tapDelay){this.cancelNextClick=true;return true}if((event.timeStamp-this.trackingClickStart)>this.tapTimeout){return true}this.cancelNextClick=false;this.lastClickTime=event.timeStamp;trackingClickStart=this.trackingClickStart;this.trackingClick=false;this.trackingClickStart=0;if(deviceIsIOSWithBadTarget){touch=event.changedTouches[0];targetElement=document.elementFromPoint(touch.pageX-window.pageXOffset,touch.pageY-window.pageYOffset)||targetElement;targetElement.fastClickScrollParent=this.targetElement.fastClickScrollParent}targetTagName=targetElement.tagName.toLowerCase();if(targetTagName==='label'){forElement=this.findControl(targetElement);if(forElement){this.focus(targetElement);if(deviceIsAndroid){return false}targetElement=forElement}}else if(this.needsFocus(targetElement)){if((event.timeStamp-trackingClickStart)>100||(deviceIsIOS&&window.top!==window&&targetTagName==='input')){this.targetElement=null;return false}this.focus(targetElement);this.sendClick(targetElement,event);if(!deviceIsIOS||targetTagName!=='select'){this.targetElement=null;event.preventDefault()}return false}if(deviceIsIOS&&!deviceIsIOS4){scrollParent=targetElement.fastClickScrollParent;if(scrollParent&&scrollParent.fastClickLastScrollTop!==scrollParent.scrollTop){return true}}if(!this.needsClick(targetElement)){event.preventDefault();this.sendClick(targetElement,event)}return false};FastClick.prototype.onTouchCancel=function(){this.trackingClick=false;this.targetElement=null};FastClick.prototype.onMouse=function(event){if(!this.targetElement){return true}if(event.forwardedTouchEvent){return true}if(!event.cancelable){return true}if(!this.needsClick(this.targetElement)||this.cancelNextClick){if(event.stopImmediatePropagation){event.stopImmediatePropagation()}else{event.propagationStopped=true}event.stopPropagation();event.preventDefault();return false}return true};FastClick.prototype.onClick=function(event){var permitted;if(this.trackingClick){this.targetElement=null;this.trackingClick=false;return true}if(event.target.type==='submit'&&event.detail===0){return true}permitted=this.onMouse(event);if(!permitted){this.targetElement=null}return permitted};FastClick.prototype.destroy=function(){var layer=this.layer;if(deviceIsAndroid){layer.removeEventListener('mouseover',this.onMouse,true);layer.removeEventListener('mousedown',this.onMouse,true);layer.removeEventListener('mouseup',this.onMouse,true)}layer.removeEventListener('click',this.onClick,true);layer.removeEventListener('touchstart',this.onTouchStart,false);layer.removeEventListener('touchmove',this.onTouchMove,false);layer.removeEventListener('touchend',this.onTouchEnd,false);layer.removeEventListener('touchcancel',this.onTouchCancel,false)};FastClick.notNeeded=function(layer){var metaViewport;var chromeVersion;var blackberryVersion;var firefoxVersion;if(typeof window.ontouchstart==='undefined'){return true}chromeVersion=+(/Chrome\/([0-9]+)/.exec(navigator.userAgent)||[,0])[1];if(chromeVersion){if(deviceIsAndroid){metaViewport=document.querySelector('meta[name=viewport]');if(metaViewport){if(metaViewport.content.indexOf('user-scalable=no')!==-1){return true}if(chromeVersion>31&&document.documentElement.scrollWidth<=window.outerWidth){return true}}}else{return true}}if(deviceIsBlackBerry10){blackberryVersion=navigator.userAgent.match(/Version\/([0-9]*)\.([0-9]*)/);if(blackberryVersion[1]>=10&&blackberryVersion[2]>=3){metaViewport=document.querySelector('meta[name=viewport]');if(metaViewport){if(metaViewport.content.indexOf('user-scalable=no')!==-1){return true}if(document.documentElement.scrollWidth<=window.outerWidth){return true}}}}if(layer.style.msTouchAction==='none'||layer.style.touchAction==='manipulation'){return true}firefoxVersion=+(/Firefox\/([0-9]+)/.exec(navigator.userAgent)||[,0])[1];if(firefoxVersion>=27){metaViewport=document.querySelector('meta[name=viewport]');if(metaViewport&&(metaViewport.content.indexOf('user-scalable=no')!==-1||document.documentElement.scrollWidth<=window.outerWidth)){return true}}if(layer.style.touchAction==='none'||layer.style.touchAction==='manipulation'){return true}return false};FastClick.attach=function(layer,options){return new FastClick(layer,options)};if(typeof define==='function'&&typeof define.amd==='object'&&define.amd){define(function(){return FastClick})}else if(typeof module!=='undefined'&&module.exports){module.exports=FastClick.attach;module.exports.FastClick=FastClick}else{window.FastClick=FastClick}}());
    /**************************** END ****************************/

    /**************************** BEGIN ****************************/
    /*
     * @fileOverview TouchSwipe - jQuery Plugin
     * @version 1.6.15
     *
     * @author Matt Bryson http://www.github.com/mattbryson
     * @see https://github.com/mattbryson/TouchSwipe-Jquery-Plugin
     * @see http://labs.rampinteractive.co.uk/touchSwipe/
     * @see http://plugins.jquery.com/project/touchSwipe
     *
     * Copyright (c) 2010-2015 Matt Bryson
     * Dual licensed under the MIT or GPL Version 2 licenses.
     *
     */
	(function(a){if(typeof define==="function"&&define.amd&&define.amd.jQuery){define(["jquery"],a)}else{if(typeof module!=="undefined"&&module.exports){a(require("jquery"))}else{a(jQuery)}}}(function(f){var y="1.6.15",p="left",o="right",e="up",x="down",c="in",A="out",m="none",s="auto",l="swipe",t="pinch",B="tap",j="doubletap",b="longtap",z="hold",E="horizontal",u="vertical",i="all",r=10,g="start",k="move",h="end",q="cancel",a="ontouchstart" in window,v=window.navigator.msPointerEnabled&&!window.navigator.pointerEnabled&&!a,d=(window.navigator.pointerEnabled||window.navigator.msPointerEnabled)&&!a,C="TouchSwipe";var n={fingers:1,threshold:75,cancelThreshold:null,pinchThreshold:20,maxTimeThreshold:null,fingerReleaseThreshold:250,longTapThreshold:500,doubleTapThreshold:200,swipe:null,swipeLeft:null,swipeRight:null,swipeUp:null,swipeDown:null,swipeStatus:null,pinchIn:null,pinchOut:null,pinchStatus:null,click:null,tap:null,doubleTap:null,longTap:null,hold:null,triggerOnTouchEnd:true,triggerOnTouchLeave:false,allowPageScroll:"auto",fallbackToMouseEvents:true,excludedElements:"label, button, input, select, textarea, a, .noSwipe",preventDefaultEvents:true};f.fn.swipe=function(H){var G=f(this),F=G.data(C);if(F&&typeof H==="string"){if(F[H]){return F[H].apply(this,Array.prototype.slice.call(arguments,1))}else{f.error("Method "+H+" does not exist on jQuery.swipe")}}else{if(F&&typeof H==="object"){F.option.apply(this,arguments)}else{if(!F&&(typeof H==="object"||!H)){return w.apply(this,arguments)}}}return G};f.fn.swipe.version=y;f.fn.swipe.defaults=n;f.fn.swipe.phases={PHASE_START:g,PHASE_MOVE:k,PHASE_END:h,PHASE_CANCEL:q};f.fn.swipe.directions={LEFT:p,RIGHT:o,UP:e,DOWN:x,IN:c,OUT:A};f.fn.swipe.pageScroll={NONE:m,HORIZONTAL:E,VERTICAL:u,AUTO:s};f.fn.swipe.fingers={ONE:1,TWO:2,THREE:3,FOUR:4,FIVE:5,ALL:i};function w(F){if(F&&(F.allowPageScroll===undefined&&(F.swipe!==undefined||F.swipeStatus!==undefined))){F.allowPageScroll=m}if(F.click!==undefined&&F.tap===undefined){F.tap=F.click}if(!F){F={}}F=f.extend({},f.fn.swipe.defaults,F);return this.each(function(){var H=f(this);var G=H.data(C);if(!G){G=new D(this,F);H.data(C,G)}})}function D(a5,au){var au=f.extend({},au);var az=(a||d||!au.fallbackToMouseEvents),K=az?(d?(v?"MSPointerDown":"pointerdown"):"touchstart"):"mousedown",ax=az?(d?(v?"MSPointerMove":"pointermove"):"touchmove"):"mousemove",V=az?(d?(v?"MSPointerUp":"pointerup"):"touchend"):"mouseup",T=az?(d?"mouseleave":null):"mouseleave",aD=(d?(v?"MSPointerCancel":"pointercancel"):"touchcancel");var ag=0,aP=null,a2=null,ac=0,a1=0,aZ=0,H=1,ap=0,aJ=0,N=null;var aR=f(a5);var aa="start";var X=0;var aQ={};var U=0,a3=0,a6=0,ay=0,O=0;var aW=null,af=null;try{aR.bind(K,aN);aR.bind(aD,ba)}catch(aj){f.error("events not supported "+K+","+aD+" on jQuery.swipe")}this.enable=function(){aR.bind(K,aN);aR.bind(aD,ba);return aR};this.disable=function(){aK();return aR};this.destroy=function(){aK();aR.data(C,null);aR=null};this.option=function(bd,bc){if(typeof bd==="object"){au=f.extend(au,bd)}else{if(au[bd]!==undefined){if(bc===undefined){return au[bd]}else{au[bd]=bc}}else{if(!bd){return au}else{f.error("Option "+bd+" does not exist on jQuery.swipe.options")}}}return null};function aN(be){if(aB()){return}if(f(be.target).closest(au.excludedElements,aR).length>0){return}var bf=be.originalEvent?be.originalEvent:be;var bd,bg=bf.touches,bc=bg?bg[0]:bf;aa=g;if(bg){X=bg.length}else{if(au.preventDefaultEvents!==false){be.preventDefault()}}ag=0;aP=null;a2=null;aJ=null;ac=0;a1=0;aZ=0;H=1;ap=0;N=ab();S();ai(0,bc);if(!bg||(X===au.fingers||au.fingers===i)||aX()){U=ar();if(X==2){ai(1,bg[1]);a1=aZ=at(aQ[0].start,aQ[1].start)}if(au.swipeStatus||au.pinchStatus){bd=P(bf,aa)}}else{bd=false}if(bd===false){aa=q;P(bf,aa);return bd}else{if(au.hold){af=setTimeout(f.proxy(function(){aR.trigger("hold",[bf.target]);if(au.hold){bd=au.hold.call(aR,bf,bf.target)}},this),au.longTapThreshold)}an(true)}return null}function a4(bf){var bi=bf.originalEvent?bf.originalEvent:bf;if(aa===h||aa===q||al()){return}var be,bj=bi.touches,bd=bj?bj[0]:bi;var bg=aH(bd);a3=ar();if(bj){X=bj.length}if(au.hold){clearTimeout(af)}aa=k;if(X==2){if(a1==0){ai(1,bj[1]);a1=aZ=at(aQ[0].start,aQ[1].start)}else{aH(bj[1]);aZ=at(aQ[0].end,aQ[1].end);aJ=aq(aQ[0].end,aQ[1].end)}H=a8(a1,aZ);ap=Math.abs(a1-aZ)}if((X===au.fingers||au.fingers===i)||!bj||aX()){aP=aL(bg.start,bg.end);a2=aL(bg.last,bg.end);ak(bf,a2);ag=aS(bg.start,bg.end);ac=aM();aI(aP,ag);be=P(bi,aa);if(!au.triggerOnTouchEnd||au.triggerOnTouchLeave){var bc=true;if(au.triggerOnTouchLeave){var bh=aY(this);bc=F(bg.end,bh)}if(!au.triggerOnTouchEnd&&bc){aa=aC(k)}else{if(au.triggerOnTouchLeave&&!bc){aa=aC(h)}}if(aa==q||aa==h){P(bi,aa)}}}else{aa=q;P(bi,aa)}if(be===false){aa=q;P(bi,aa)}}function M(bc){var bd=bc.originalEvent?bc.originalEvent:bc,be=bd.touches;if(be){if(be.length&&!al()){G(bd);return true}else{if(be.length&&al()){return true}}}if(al()){X=ay}a3=ar();ac=aM();if(bb()||!am()){aa=q;P(bd,aa)}else{if(au.triggerOnTouchEnd||(au.triggerOnTouchEnd==false&&aa===k)){if(au.preventDefaultEvents!==false){bc.preventDefault()}aa=h;P(bd,aa)}else{if(!au.triggerOnTouchEnd&&a7()){aa=h;aF(bd,aa,B)}else{if(aa===k){aa=q;P(bd,aa)}}}}an(false);return null}function ba(){X=0;a3=0;U=0;a1=0;aZ=0;H=1;S();an(false)}function L(bc){var bd=bc.originalEvent?bc.originalEvent:bc;if(au.triggerOnTouchLeave){aa=aC(h);P(bd,aa)}}function aK(){aR.unbind(K,aN);aR.unbind(aD,ba);aR.unbind(ax,a4);aR.unbind(V,M);if(T){aR.unbind(T,L)}an(false)}function aC(bg){var bf=bg;var be=aA();var bd=am();var bc=bb();if(!be||bc){bf=q}else{if(bd&&bg==k&&(!au.triggerOnTouchEnd||au.triggerOnTouchLeave)){bf=h}else{if(!bd&&bg==h&&au.triggerOnTouchLeave){bf=q}}}return bf}function P(be,bc){var bd,bf=be.touches;if(J()||W()){bd=aF(be,bc,l)}if((Q()||aX())&&bd!==false){bd=aF(be,bc,t)}if(aG()&&bd!==false){bd=aF(be,bc,j)}else{if(ao()&&bd!==false){bd=aF(be,bc,b)}else{if(ah()&&bd!==false){bd=aF(be,bc,B)}}}if(bc===q){if(W()){bd=aF(be,bc,l)}if(aX()){bd=aF(be,bc,t)}ba(be)}if(bc===h){if(bf){if(!bf.length){ba(be)}}else{ba(be)}}return bd}function aF(bf,bc,be){var bd;if(be==l){aR.trigger("swipeStatus",[bc,aP||null,ag||0,ac||0,X,aQ,a2]);if(au.swipeStatus){bd=au.swipeStatus.call(aR,bf,bc,aP||null,ag||0,ac||0,X,aQ,a2);if(bd===false){return false}}if(bc==h&&aV()){clearTimeout(aW);clearTimeout(af);aR.trigger("swipe",[aP,ag,ac,X,aQ,a2]);if(au.swipe){bd=au.swipe.call(aR,bf,aP,ag,ac,X,aQ,a2);if(bd===false){return false}}switch(aP){case p:aR.trigger("swipeLeft",[aP,ag,ac,X,aQ,a2]);if(au.swipeLeft){bd=au.swipeLeft.call(aR,bf,aP,ag,ac,X,aQ,a2)}break;case o:aR.trigger("swipeRight",[aP,ag,ac,X,aQ,a2]);if(au.swipeRight){bd=au.swipeRight.call(aR,bf,aP,ag,ac,X,aQ,a2)}break;case e:aR.trigger("swipeUp",[aP,ag,ac,X,aQ,a2]);if(au.swipeUp){bd=au.swipeUp.call(aR,bf,aP,ag,ac,X,aQ,a2)}break;case x:aR.trigger("swipeDown",[aP,ag,ac,X,aQ,a2]);if(au.swipeDown){bd=au.swipeDown.call(aR,bf,aP,ag,ac,X,aQ,a2)}break}}}if(be==t){aR.trigger("pinchStatus",[bc,aJ||null,ap||0,ac||0,X,H,aQ]);if(au.pinchStatus){bd=au.pinchStatus.call(aR,bf,bc,aJ||null,ap||0,ac||0,X,H,aQ);if(bd===false){return false}}if(bc==h&&a9()){switch(aJ){case c:aR.trigger("pinchIn",[aJ||null,ap||0,ac||0,X,H,aQ]);if(au.pinchIn){bd=au.pinchIn.call(aR,bf,aJ||null,ap||0,ac||0,X,H,aQ)}break;case A:aR.trigger("pinchOut",[aJ||null,ap||0,ac||0,X,H,aQ]);if(au.pinchOut){bd=au.pinchOut.call(aR,bf,aJ||null,ap||0,ac||0,X,H,aQ)}break}}}if(be==B){if(bc===q||bc===h){clearTimeout(aW);clearTimeout(af);if(Z()&&!I()){O=ar();aW=setTimeout(f.proxy(function(){O=null;aR.trigger("tap",[bf.target]);if(au.tap){bd=au.tap.call(aR,bf,bf.target)}},this),au.doubleTapThreshold)}else{O=null;aR.trigger("tap",[bf.target]);if(au.tap){bd=au.tap.call(aR,bf,bf.target)}}}}else{if(be==j){if(bc===q||bc===h){clearTimeout(aW);clearTimeout(af);O=null;aR.trigger("doubletap",[bf.target]);if(au.doubleTap){bd=au.doubleTap.call(aR,bf,bf.target)}}}else{if(be==b){if(bc===q||bc===h){clearTimeout(aW);O=null;aR.trigger("longtap",[bf.target]);if(au.longTap){bd=au.longTap.call(aR,bf,bf.target)}}}}}return bd}function am(){var bc=true;if(au.threshold!==null){bc=ag>=au.threshold}return bc}function bb(){var bc=false;if(au.cancelThreshold!==null&&aP!==null){bc=(aT(aP)-ag)>=au.cancelThreshold}return bc}function ae(){if(au.pinchThreshold!==null){return ap>=au.pinchThreshold}return true}function aA(){var bc;if(au.maxTimeThreshold){if(ac>=au.maxTimeThreshold){bc=false}else{bc=true}}else{bc=true}return bc}function ak(bc,bd){if(au.preventDefaultEvents===false){return}if(au.allowPageScroll===m){bc.preventDefault()}else{var be=au.allowPageScroll===s;switch(bd){case p:if((au.swipeLeft&&be)||(!be&&au.allowPageScroll!=E)){bc.preventDefault()}break;case o:if((au.swipeRight&&be)||(!be&&au.allowPageScroll!=E)){bc.preventDefault()}break;case e:if((au.swipeUp&&be)||(!be&&au.allowPageScroll!=u)){bc.preventDefault()}break;case x:if((au.swipeDown&&be)||(!be&&au.allowPageScroll!=u)){bc.preventDefault()}break}}}function a9(){var bd=aO();var bc=Y();var be=ae();return bd&&bc&&be}function aX(){return !!(au.pinchStatus||au.pinchIn||au.pinchOut)}function Q(){return !!(a9()&&aX())}function aV(){var bf=aA();var bh=am();var be=aO();var bc=Y();var bd=bb();var bg=!bd&&bc&&be&&bh&&bf;return bg}function W(){return !!(au.swipe||au.swipeStatus||au.swipeLeft||au.swipeRight||au.swipeUp||au.swipeDown)}function J(){return !!(aV()&&W())}function aO(){return((X===au.fingers||au.fingers===i)||!a)}function Y(){return aQ[0].end.x!==0}function a7(){return !!(au.tap)}function Z(){return !!(au.doubleTap)}function aU(){return !!(au.longTap)}function R(){if(O==null){return false}var bc=ar();return(Z()&&((bc-O)<=au.doubleTapThreshold))}function I(){return R()}function aw(){return((X===1||!a)&&(isNaN(ag)||ag<au.threshold))}function a0(){return((ac>au.longTapThreshold)&&(ag<r))}function ah(){return !!(aw()&&a7())}function aG(){return !!(R()&&Z())}function ao(){return !!(a0()&&aU())}function G(bc){a6=ar();ay=bc.touches.length+1}function S(){a6=0;ay=0}function al(){var bc=false;if(a6){var bd=ar()-a6;if(bd<=au.fingerReleaseThreshold){bc=true}}return bc}function aB(){return !!(aR.data(C+"_intouch")===true)}function an(bc){if(!aR){return}if(bc===true){aR.bind(ax,a4);aR.bind(V,M);if(T){aR.bind(T,L)}}else{aR.unbind(ax,a4,false);aR.unbind(V,M,false);if(T){aR.unbind(T,L,false)}}aR.data(C+"_intouch",bc===true)}function ai(be,bc){var bd={start:{x:0,y:0},last:{x:0,y:0},end:{x:0,y:0}};bd.start.x=bd.last.x=bd.end.x=bc.pageX||bc.clientX;bd.start.y=bd.last.y=bd.end.y=bc.pageY||bc.clientY;aQ[be]=bd;return bd}function aH(bc){var be=bc.identifier!==undefined?bc.identifier:0;var bd=ad(be);if(bd===null){bd=ai(be,bc)}bd.last.x=bd.end.x;bd.last.y=bd.end.y;bd.end.x=bc.pageX||bc.clientX;bd.end.y=bc.pageY||bc.clientY;return bd}function ad(bc){return aQ[bc]||null}function aI(bc,bd){bd=Math.max(bd,aT(bc));N[bc].distance=bd}function aT(bc){if(N[bc]){return N[bc].distance}return undefined}function ab(){var bc={};bc[p]=av(p);bc[o]=av(o);bc[e]=av(e);bc[x]=av(x);return bc}function av(bc){return{direction:bc,distance:0}}function aM(){return a3-U}function at(bf,be){var bd=Math.abs(bf.x-be.x);var bc=Math.abs(bf.y-be.y);return Math.round(Math.sqrt(bd*bd+bc*bc))}function a8(bc,bd){var be=(bd/bc)*1;return be.toFixed(2)}function aq(){if(H<1){return A}else{return c}}function aS(bd,bc){return Math.round(Math.sqrt(Math.pow(bc.x-bd.x,2)+Math.pow(bc.y-bd.y,2)))}function aE(bf,bd){var bc=bf.x-bd.x;var bh=bd.y-bf.y;var be=Math.atan2(bh,bc);var bg=Math.round(be*180/Math.PI);if(bg<0){bg=360-Math.abs(bg)}return bg}function aL(bd,bc){var be=aE(bd,bc);if((be<=45)&&(be>=0)){return p}else{if((be<=360)&&(be>=315)){return p}else{if((be>=135)&&(be<=225)){return o}else{if((be>45)&&(be<135)){return x}else{return e}}}}}function ar(){var bc=new Date();return bc.getTime()}function aY(bc){bc=f(bc);var be=bc.offset();var bd={left:be.left,right:be.left+bc.outerWidth(),top:be.top,bottom:be.top+bc.outerHeight()};return bd}function F(bc,bd){return(bc.x>bd.left&&bc.x<bd.right&&bc.y>bd.top&&bc.y<bd.bottom)}}}));
    /**************************** END ****************************/

    /**************************** BEGIN ****************************/
    /*!
     * jQuery Mousewheel 3.1.13
     *
     * Copyright 2015 jQuery Foundation and other contributors
     * Released under the MIT license.
     * http://jquery.org/license
     */
    ;!function(a){"function"==typeof define&&define.amd?define(["jquery"],a):"object"==typeof exports?module.exports=a:a(jQuery)}(function(a){function b(b){var g=b||window.event,h=i.call(arguments,1),j=0,l=0,m=0,n=0,o=0,p=0;if(b=a.event.fix(g),b.type="mousewheel","detail"in g&&(m=-1*g.detail),"wheelDelta"in g&&(m=g.wheelDelta),"wheelDeltaY"in g&&(m=g.wheelDeltaY),"wheelDeltaX"in g&&(l=-1*g.wheelDeltaX),"axis"in g&&g.axis===g.HORIZONTAL_AXIS&&(l=-1*m,m=0),j=0===m?l:m,"deltaY"in g&&(m=-1*g.deltaY,j=m),"deltaX"in g&&(l=g.deltaX,0===m&&(j=-1*l)),0!==m||0!==l){if(1===g.deltaMode){var q=a.data(this,"mousewheel-line-height");j*=q,m*=q,l*=q}else if(2===g.deltaMode){var r=a.data(this,"mousewheel-page-height");j*=r,m*=r,l*=r}if(n=Math.max(Math.abs(m),Math.abs(l)),(!f||f>n)&&(f=n,d(g,n)&&(f/=40)),d(g,n)&&(j/=40,l/=40,m/=40),j=Math[j>=1?"floor":"ceil"](j/f),l=Math[l>=1?"floor":"ceil"](l/f),m=Math[m>=1?"floor":"ceil"](m/f),k.settings.normalizeOffset&&this.getBoundingClientRect){var s=this.getBoundingClientRect();o=b.clientX-s.left,p=b.clientY-s.top}return b.deltaX=l,b.deltaY=m,b.deltaFactor=f,b.offsetX=o,b.offsetY=p,b.deltaMode=0,h.unshift(b,j,l,m),e&&clearTimeout(e),e=setTimeout(c,200),(a.event.dispatch||a.event.handle).apply(this,h)}}function c(){f=null}function d(a,b){return k.settings.adjustOldDeltas&&"mousewheel"===a.type&&b%120===0}var e,f,g=["wheel","mousewheel","DOMMouseScroll","MozMousePixelScroll"],h="onwheel"in document||document.documentMode>=9?["wheel"]:["mousewheel","DomMouseScroll","MozMousePixelScroll"],i=Array.prototype.slice;if(a.event.fixHooks)for(var j=g.length;j;)a.event.fixHooks[g[--j]]=a.event.mouseHooks;var k=a.event.special.mousewheel={version:"3.1.12",setup:function(){if(this.addEventListener)for(var c=h.length;c;)this.addEventListener(h[--c],b,!1);else this.onmousewheel=b;a.data(this,"mousewheel-line-height",k.getLineHeight(this)),a.data(this,"mousewheel-page-height",k.getPageHeight(this))},teardown:function(){if(this.removeEventListener)for(var c=h.length;c;)this.removeEventListener(h[--c],b,!1);else this.onmousewheel=null;a.removeData(this,"mousewheel-line-height"),a.removeData(this,"mousewheel-page-height")},getLineHeight:function(b){var c=a(b),d=c["offsetParent"in a.fn?"offsetParent":"parent"]();return d.length||(d=a("body")),parseInt(d.css("fontSize"),10)||parseInt(c.css("fontSize"),10)||16},getPageHeight:function(b){return a(b).height()},settings:{adjustOldDeltas:!0,normalizeOffset:!0}};a.fn.extend({mousewheel:function(a){return a?this.bind("mousewheel",a):this.trigger("mousewheel")},unmousewheel:function(a){return this.unbind("mousewheel",a)}})});
    /**************************** END ****************************/

    /**************************** BEGIN ****************************/
    /*! layer-v2.1 弹层组件 License LGPL  http://layer.layui.com/ By 贤心 */
	;!function(a,b){"use strict";var c,d,e={getPath:function(){var a=document.scripts,b=a[a.length-1],c=b.src;if(!b.getAttribute("merge"))return c.substring(0,c.lastIndexOf("/")+1)}(),enter:function(a){13===a.keyCode&&a.preventDefault()},config:{},end:{},btn:["&#x786E;&#x5B9A;","&#x53D6;&#x6D88;"],type:["dialog","page","iframe","loading","tips"]},f={v:"2.1",ie6:!!a.ActiveXObject&&!a.XMLHttpRequest,index:0,path:e.getPath,config:function(a,b){var d=0;return a=a||{},f.cache=e.config=c.extend(e.config,a),f.path=e.config.path||f.path,"string"==typeof a.extend&&(a.extend=[a.extend]),f.use("skin/layer.css",a.extend&&a.extend.length>0?function g(){var c=a.extend;f.use(c[c[d]?d:d-1],d<c.length?function(){return++d,g}():b)}():b),this},use:function(a,b,d){var e=c("head")[0],a=a.replace(/\s/g,""),g=/\.css$/.test(a),h=document.createElement(g?"link":"script"),i="layui_layer_"+a.replace(/\.|\//g,"");return f.path?(g&&(h.rel="stylesheet"),h[g?"href":"src"]=/^http:\/\//.test(a)?a:f.path+a,h.id=i,c("#"+i)[0]||e.appendChild(h),function j(){(g?1989===parseInt(c("#"+i).css("width")):f[d||i])?function(){b&&b();try{g||e.removeChild(h)}catch(a){}}():setTimeout(j,100)}(),this):void 0},ready:function(a,b){var d="function"==typeof a;return d&&(b=a),f.config(c.extend(e.config,function(){return d?{}:{path:a}}()),b),this},alert:function(a,b,d){var e="function"==typeof b;return e&&(d=b),f.open(c.extend({content:a,yes:d},e?{}:b))},confirm:function(a,b,d,g){var h="function"==typeof b;return h&&(g=d,d=b),f.open(c.extend({content:a,btn:e.btn,yes:d,cancel:g},h?{}:b))},msg:function(a,d,g){var i="function"==typeof d,j=e.config.skin,k=(j?j+" "+j+"-msg":"")||"layui-layer-msg",l=h.anim.length-1;return i&&(g=d),f.open(c.extend({content:a,time:3e3,shade:!1,skin:k,title:!1,closeBtn:!1,btn:!1,end:g},i&&!e.config.skin?{skin:k+" layui-layer-hui",shift:l}:function(){return d=d||{},(-1===d.icon||d.icon===b&&!e.config.skin)&&(d.skin=k+" "+(d.skin||"layui-layer-hui")),d}()))},load:function(a,b){return f.open(c.extend({type:3,icon:a||0,shade:.01},b))},tips:function(a,b,d){return f.open(c.extend({type:4,content:[a,b],closeBtn:!1,time:3e3,maxWidth:210},d))}},g=function(a){var b=this;b.index=++f.index,b.config=c.extend({},b.config,e.config,a),b.creat()};g.pt=g.prototype;var h=["layui-layer",".layui-layer-title",".layui-layer-main",".layui-layer-dialog","layui-layer-iframe","layui-layer-content","layui-layer-btn","layui-layer-close"];h.anim=["layui-anim","layui-anim-01","layui-anim-02","layui-anim-03","layui-anim-04","layui-anim-05","layui-anim-06"],g.pt.config={type:0,shade:.3,fix:!0,move:h[1],title:"&#x4FE1;&#x606F;",offset:"auto",area:"auto",closeBtn:1,time:0,zIndex:19891014,maxWidth:360,shift:0,icon:-1,scrollbar:!0,tips:2},g.pt.vessel=function(a,b){var c=this,d=c.index,f=c.config,g=f.zIndex+d,i="object"==typeof f.title,j=f.maxmin&&(1===f.type||2===f.type),k=f.title?'<div class="layui-layer-title" style="'+(i?f.title[1]:"")+'">'+(i?f.title[0]:f.title)+"</div>":"";return f.zIndex=g,b([f.shade?'<div class="layui-layer-shade" id="layui-layer-shade'+d+'" times="'+d+'" style="'+("z-index:"+(g-1)+"; background-color:"+(f.shade[1]||"#000")+"; opacity:"+(f.shade[0]||f.shade)+"; filter:alpha(opacity="+(100*f.shade[0]||100*f.shade)+");")+'"></div>':"",'<div class="'+h[0]+" "+(h.anim[f.shift]||"")+(" layui-layer-"+e.type[f.type])+(0!=f.type&&2!=f.type||f.shade?"":" layui-layer-border")+" "+(f.skin||"")+'" id="'+h[0]+d+'" type="'+e.type[f.type]+'" times="'+d+'" showtime="'+f.time+'" conType="'+(a?"object":"string")+'" style="z-index: '+g+"; width:"+f.area[0]+";height:"+f.area[1]+(f.fix?"":";position:absolute;")+'">'+(a&&2!=f.type?"":k)+'<div class="layui-layer-content'+(0==f.type&&-1!==f.icon?" layui-layer-padding":"")+(3==f.type?" layui-layer-loading"+f.icon:"")+'">'+(0==f.type&&-1!==f.icon?'<i class="layui-layer-ico layui-layer-ico'+f.icon+'"></i>':"")+(1==f.type&&a?"":f.content||"")+'</div><span class="layui-layer-setwin">'+function(){var a=j?'<a class="layui-layer-min" href="javascript:;"><cite></cite></a><a class="layui-layer-ico layui-layer-max" href="javascript:;"></a>':"";return f.closeBtn&&(a+='<a class="layui-layer-ico '+h[7]+" "+h[7]+(f.title?f.closeBtn:4==f.type?"1":"2")+'" href="javascript:;"></a>'),a}()+"</span>"+(f.btn?function(){var a="";"string"==typeof f.btn&&(f.btn=[f.btn]);for(var b=0,c=f.btn.length;c>b;b++)a+='<a class="'+h[6]+b+'">'+f.btn[b]+"</a>";return'<div class="'+h[6]+'">'+a+"</div>"}():"")+"</div>"],k),c},g.pt.creat=function(){var a=this,b=a.config,g=a.index,i=b.content,j="object"==typeof i;switch("string"==typeof b.area&&(b.area="auto"===b.area?["",""]:[b.area,""]),b.type){case 0:b.btn="btn"in b?b.btn:e.btn[0],f.closeAll("dialog");break;case 2:var i=b.content=j?b.content:[b.content||"http://layer.layui.com","auto"];b.content='<iframe scrolling="'+(b.content[1]||"auto")+'" allowtransparency="true" id="'+h[4]+g+'" name="'+h[4]+g+'" onload="this.className=\'\';" class="layui-layer-load" frameborder="0" src="'+b.content[0]+'"></iframe>';break;case 3:b.title=!1,b.closeBtn=!1,-1===b.icon&&0===b.icon,f.closeAll("loading");break;case 4:j||(b.content=[b.content,"body"]),b.follow=b.content[1],b.content=b.content[0]+'<i class="layui-layer-TipsG"></i>',b.title=!1,b.shade=!1,b.fix=!1,b.tips="object"==typeof b.tips?b.tips:[b.tips,!0],b.tipsMore||f.closeAll("tips")}a.vessel(j,function(d,e){c("body").append(d[0]),j?function(){2==b.type||4==b.type?function(){c("body").append(d[1])}():function(){i.parents("."+h[0])[0]||(i.show().addClass("layui-layer-wrap").wrap(d[1]),c("#"+h[0]+g).find("."+h[5]).before(e))}()}():c("body").append(d[1]),a.layero=c("#"+h[0]+g),b.scrollbar||h.html.css("overflow","hidden").attr("layer-full",g)}).auto(g),2==b.type&&f.ie6&&a.layero.find("iframe").attr("src",i[0]),c(document).off("keydown",e.enter).on("keydown",e.enter),a.layero.on("keydown",function(a){c(document).off("keydown",e.enter)}),4==b.type?a.tips():a.offset(),b.fix&&d.on("resize",function(){a.offset(),(/^\d+%$/.test(b.area[0])||/^\d+%$/.test(b.area[1]))&&a.auto(g),4==b.type&&a.tips()}),b.time<=0||setTimeout(function(){f.close(a.index)},b.time),a.move().callback()},g.pt.auto=function(a){function b(a){a=g.find(a),a.height(i[1]-j-k-2*(0|parseFloat(a.css("padding"))))}var e=this,f=e.config,g=c("#"+h[0]+a);""===f.area[0]&&f.maxWidth>0&&(/MSIE 7/.test(navigator.userAgent)&&f.btn&&g.width(g.innerWidth()),g.outerWidth()>f.maxWidth&&g.width(f.maxWidth));var i=[g.innerWidth(),g.innerHeight()],j=g.find(h[1]).outerHeight()||0,k=g.find("."+h[6]).outerHeight()||0;switch(f.type){case 2:b("iframe");break;default:""===f.area[1]?f.fix&&i[1]>=d.height()&&(i[1]=d.height(),b("."+h[5])):b("."+h[5])}return e},g.pt.offset=function(){var a=this,b=a.config,c=a.layero,e=[c.outerWidth(),c.outerHeight()],f="object"==typeof b.offset;a.offsetTop=(d.height()-e[1])/2,a.offsetLeft=(d.width()-e[0])/2,f?(a.offsetTop=b.offset[0],a.offsetLeft=b.offset[1]||a.offsetLeft):"auto"!==b.offset&&(a.offsetTop=b.offset,"rb"===b.offset&&(a.offsetTop=d.height()-e[1],a.offsetLeft=d.width()-e[0])),b.fix||(a.offsetTop=/%$/.test(a.offsetTop)?d.height()*parseFloat(a.offsetTop)/100:parseFloat(a.offsetTop),a.offsetLeft=/%$/.test(a.offsetLeft)?d.width()*parseFloat(a.offsetLeft)/100:parseFloat(a.offsetLeft),a.offsetTop+=d.scrollTop(),a.offsetLeft+=d.scrollLeft()),c.css({top:a.offsetTop,left:a.offsetLeft})},g.pt.tips=function(){var a=this,b=a.config,e=a.layero,f=[e.outerWidth(),e.outerHeight()],g=c(b.follow);g[0]||(g=c("body"));var i={width:g.outerWidth(),height:g.outerHeight(),top:g.offset().top,left:g.offset().left},j=e.find(".layui-layer-TipsG"),k=b.tips[0];b.tips[1]||j.remove(),i.autoLeft=function(){i.left+f[0]-d.width()>0?(i.tipLeft=i.left+i.width-f[0],j.css({right:12,left:"auto"})):i.tipLeft=i.left},i.where=[function(){i.autoLeft(),i.tipTop=i.top-f[1]-10,j.removeClass("layui-layer-TipsB").addClass("layui-layer-TipsT").css("border-right-color",b.tips[1])},function(){i.tipLeft=i.left+i.width+10,i.tipTop=i.top,j.removeClass("layui-layer-TipsL").addClass("layui-layer-TipsR").css("border-bottom-color",b.tips[1])},function(){i.autoLeft(),i.tipTop=i.top+i.height+10,j.removeClass("layui-layer-TipsT").addClass("layui-layer-TipsB").css("border-right-color",b.tips[1])},function(){i.tipLeft=i.left-f[0]-10,i.tipTop=i.top,j.removeClass("layui-layer-TipsR").addClass("layui-layer-TipsL").css("border-bottom-color",b.tips[1])}],i.where[k-1](),1===k?i.top-(d.scrollTop()+f[1]+16)<0&&i.where[2]():2===k?d.width()-(i.left+i.width+f[0]+16)>0||i.where[3]():3===k?i.top-d.scrollTop()+i.height+f[1]+16-d.height()>0&&i.where[0]():4===k&&f[0]+16-i.left>0&&i.where[1](),e.find("."+h[5]).css({"background-color":b.tips[1],"padding-right":b.closeBtn?"30px":""}),e.css({left:i.tipLeft,top:i.tipTop})},g.pt.move=function(){var a=this,b=a.config,e={setY:0,moveLayer:function(){var a=e.layero,b=parseInt(a.css("margin-left")),c=parseInt(e.move.css("left"));0===b||(c-=b),"fixed"!==a.css("position")&&(c-=a.parent().offset().left,e.setY=0),a.css({left:c,top:parseInt(e.move.css("top"))-e.setY})}},f=a.layero.find(b.move);return b.move&&f.attr("move","ok"),f.css({cursor:b.move?"move":"auto"}),c(b.move).on("mousedown",function(a){if(a.preventDefault(),"ok"===c(this).attr("move")){e.ismove=!0,e.layero=c(this).parents("."+h[0]);var f=e.layero.offset().left,g=e.layero.offset().top,i=e.layero.outerWidth()-6,j=e.layero.outerHeight()-6;c("#layui-layer-moves")[0]||c("body").append('<div id="layui-layer-moves" class="layui-layer-moves" style="left:'+f+"px; top:"+g+"px; width:"+i+"px; height:"+j+'px; z-index:2147483584"></div>'),e.move=c("#layui-layer-moves"),b.moveType&&e.move.css({visibility:"hidden"}),e.moveX=a.pageX-e.move.position().left,e.moveY=a.pageY-e.move.position().top,"fixed"!==e.layero.css("position")||(e.setY=d.scrollTop())}}),c(document).mousemove(function(a){if(e.ismove){var c=a.pageX-e.moveX,f=a.pageY-e.moveY;if(a.preventDefault(),!b.moveOut){e.setY=d.scrollTop();var g=d.width()-e.move.outerWidth(),h=e.setY;0>c&&(c=0),c>g&&(c=g),h>f&&(f=h),f>d.height()-e.move.outerHeight()+e.setY&&(f=d.height()-e.move.outerHeight()+e.setY)}e.move.css({left:c,top:f}),b.moveType&&e.moveLayer(),c=f=g=h=null}}).mouseup(function(){try{e.ismove&&(e.moveLayer(),e.move.remove(),b.moveEnd&&b.moveEnd()),e.ismove=!1}catch(a){e.ismove=!1}}),a},g.pt.callback=function(){function a(){var a=g.cancel&&g.cancel(b.index);a===!1||f.close(b.index)}var b=this,d=b.layero,g=b.config;b.openLayer(),g.success&&(2==g.type?d.find("iframe").on("load",function(){g.success(d,b.index)}):g.success(d,b.index)),f.ie6&&b.IE6(d),d.find("."+h[6]).children("a").on("click",function(){var e=c(this).index();g["btn"+(e+1)]&&g["btn"+(e+1)](b.index,d),0===e?g.yes?g.yes(b.index,d):f.close(b.index):1===e?a():g["btn"+(e+1)]||f.close(b.index)}),d.find("."+h[7]).on("click",a),g.shadeClose&&c("#layui-layer-shade"+b.index).on("click",function(){f.close(b.index)}),d.find(".layui-layer-min").on("click",function(){f.min(b.index,g),g.min&&g.min(d)}),d.find(".layui-layer-max").on("click",function(){c(this).hasClass("layui-layer-maxmin")?(f.restore(b.index),g.restore&&g.restore(d)):(f.full(b.index,g),g.full&&g.full(d))}),g.end&&(e.end[b.index]=g.end)},e.reselect=function(){c.each(c("select"),function(a,b){var d=c(this);d.parents("."+h[0])[0]||1==d.attr("layer")&&c("."+h[0]).length<1&&d.removeAttr("layer").show(),d=null})},g.pt.IE6=function(a){function b(){a.css({top:f+(e.config.fix?d.scrollTop():0)})}var e=this,f=a.offset().top;b(),d.scroll(b),c("select").each(function(a,b){var d=c(this);d.parents("."+h[0])[0]||"none"===d.css("display")||d.attr({layer:"1"}).hide(),d=null})},g.pt.openLayer=function(){var a=this;f.zIndex=a.config.zIndex,f.setTop=function(a){var b=function(){f.zIndex++,a.css("z-index",f.zIndex+1)};return f.zIndex=parseInt(a[0].style.zIndex),a.on("mousedown",b),f.zIndex}},e.record=function(a){var b=[a.outerWidth(),a.outerHeight(),a.position().top,a.position().left+parseFloat(a.css("margin-left"))];a.find(".layui-layer-max").addClass("layui-layer-maxmin"),a.attr({area:b})},e.rescollbar=function(a){h.html.attr("layer-full")==a&&(h.html[0].style.removeProperty?h.html[0].style.removeProperty("overflow"):h.html[0].style.removeAttribute("overflow"),h.html.removeAttr("layer-full"))},a.layer=f,f.getChildFrame=function(a,b){return b=b||c("."+h[4]).attr("times"),c("#"+h[0]+b).find("iframe").contents().find(a)},f.getFrameIndex=function(a){return c("#"+a).parents("."+h[4]).attr("times")},f.iframeAuto=function(a){if(a){var b=f.getChildFrame("html",a).outerHeight(),d=c("#"+h[0]+a),e=d.find(h[1]).outerHeight()||0,g=d.find("."+h[6]).outerHeight()||0;d.css({height:b+e+g}),d.find("iframe").css({height:b})}},f.iframeSrc=function(a,b){c("#"+h[0]+a).find("iframe").attr("src",b)},f.style=function(a,b){var d=c("#"+h[0]+a),f=d.attr("type"),g=d.find(h[1]).outerHeight()||0,i=d.find("."+h[6]).outerHeight()||0;(f===e.type[1]||f===e.type[2])&&(d.css(b),f===e.type[2]&&d.find("iframe").css({height:parseFloat(b.height)-g-i}))},f.min=function(a,b){var d=c("#"+h[0]+a),g=d.find(h[1]).outerHeight()||0;e.record(d),f.style(a,{width:180,height:g,overflow:"hidden"}),d.find(".layui-layer-min").hide(),"page"===d.attr("type")&&d.find(h[4]).hide(),e.rescollbar(a)},f.restore=function(a){var b=c("#"+h[0]+a),d=b.attr("area").split(",");b.attr("type");f.style(a,{width:parseFloat(d[0]),height:parseFloat(d[1]),top:parseFloat(d[2]),left:parseFloat(d[3]),overflow:"visible"}),b.find(".layui-layer-max").removeClass("layui-layer-maxmin"),b.find(".layui-layer-min").show(),"page"===b.attr("type")&&b.find(h[4]).show(),e.rescollbar(a)},f.full=function(a){var b,g=c("#"+h[0]+a);e.record(g),h.html.attr("layer-full")||h.html.css("overflow","hidden").attr("layer-full",a),clearTimeout(b),b=setTimeout(function(){var b="fixed"===g.css("position");f.style(a,{top:b?0:d.scrollTop(),left:b?0:d.scrollLeft(),width:d.width(),height:d.height()}),g.find(".layui-layer-min").hide()},100)},f.title=function(a,b){var d=c("#"+h[0]+(b||f.index)).find(h[1]);d.html(a)},f.close=function(a){var b=c("#"+h[0]+a),d=b.attr("type");if(b[0]){if(d===e.type[1]&&"object"===b.attr("conType")){b.children(":not(."+h[5]+")").remove();for(var g=0;2>g;g++)b.find(".layui-layer-wrap").unwrap().hide()}else{if(d===e.type[2])try{var i=c("#"+h[4]+a)[0];i.contentWindow.document.write(""),i.contentWindow.close(),b.find("."+h[5])[0].removeChild(i)}catch(j){}b[0].innerHTML="",b.remove()}c("#layui-layer-moves, #layui-layer-shade"+a).remove(),f.ie6&&e.reselect(),e.rescollbar(a),c(document).off("keydown",e.enter),"function"==typeof e.end[a]&&e.end[a](),delete e.end[a]}},f.closeAll=function(a){c.each(c("."+h[0]),function(){var b=c(this),d=a?b.attr("type")===a:1;d&&f.close(b.attr("times")),d=null})},e.run=function(){c=jQuery,d=c(a),h.html=c("html"),f.open=function(a){var b=new g(a);return b.index}},"function"==typeof define?define(function(){return e.run(),f}):function(){e.run()}()}(window);
    /**************************** END ****************************/

    /**************************** BEGIN ****************************/
    /*! iCheck v1.0.2 by Damir Sultanov, http://git.io/arlzeA, MIT Licensed */
    (function(f){function A(a,b,d){var c=a[0],g=/er/.test(d)?_indeterminate:/bl/.test(d)?n:k,e=d==_update?{checked:c[k],disabled:c[n],indeterminate:"true"==a.attr(_indeterminate)||"false"==a.attr(_determinate)}:c[g];if(/^(ch|di|in)/.test(d)&&!e)x(a,g);else if(/^(un|en|de)/.test(d)&&e)q(a,g);else if(d==_update)for(var f in e)e[f]?x(a,f,!0):q(a,f,!0);else if(!b||"toggle"==d){if(!b)a[_callback]("ifClicked");e?c[_type]!==r&&q(a,g):x(a,g)}}function x(a,b,d){var c=a[0],g=a.parent(),e=b==k,u=b==_indeterminate,
    v=b==n,s=u?_determinate:e?y:"enabled",F=l(a,s+t(c[_type])),B=l(a,b+t(c[_type]));if(!0!==c[b]){if(!d&&b==k&&c[_type]==r&&c.name){var w=a.closest("form"),p='input[name="'+c.name+'"]',p=w.length?w.find(p):f(p);p.each(function(){this!==c&&f(this).data(m)&&q(f(this),b)})}u?(c[b]=!0,c[k]&&q(a,k,"force")):(d||(c[b]=!0),e&&c[_indeterminate]&&q(a,_indeterminate,!1));D(a,e,b,d)}c[n]&&l(a,_cursor,!0)&&g.find("."+C).css(_cursor,"default");g[_add](B||l(a,b)||"");g.attr("role")&&!u&&g.attr("aria-"+(v?n:k),"true");
    g[_remove](F||l(a,s)||"")}function q(a,b,d){var c=a[0],g=a.parent(),e=b==k,f=b==_indeterminate,m=b==n,s=f?_determinate:e?y:"enabled",q=l(a,s+t(c[_type])),r=l(a,b+t(c[_type]));if(!1!==c[b]){if(f||!d||"force"==d)c[b]=!1;D(a,e,s,d)}!c[n]&&l(a,_cursor,!0)&&g.find("."+C).css(_cursor,"pointer");g[_remove](r||l(a,b)||"");g.attr("role")&&!f&&g.attr("aria-"+(m?n:k),"false");g[_add](q||l(a,s)||"")}function E(a,b){if(a.data(m)){a.parent().html(a.attr("style",a.data(m).s||""));if(b)a[_callback](b);a.off(".i").unwrap();
    f(_label+'[for="'+a[0].id+'"]').add(a.closest(_label)).off(".i")}}function l(a,b,f){if(a.data(m))return a.data(m).o[b+(f?"":"Class")]}function t(a){return a.charAt(0).toUpperCase()+a.slice(1)}function D(a,b,f,c){if(!c){if(b)a[_callback]("ifToggled");a[_callback]("ifChanged")[_callback]("if"+t(f))}}var m="iCheck",C=m+"-helper",r="radio",k="checked",y="un"+k,n="disabled";_determinate="determinate";_indeterminate="in"+_determinate;_update="update";_type="type";_click="click";_touch="touchbegin.i touchend.i";
    _add="addClass";_remove="removeClass";_callback="trigger";_label="label";_cursor="cursor";_mobile=/ipad|iphone|ipod|android|blackberry|windows phone|opera mini|silk/i.test(navigator.userAgent);f.fn[m]=function(a,b){var d='input[type="checkbox"], input[type="'+r+'"]',c=f(),g=function(a){a.each(function(){var a=f(this);c=a.is(d)?c.add(a):c.add(a.find(d))})};if(/^(check|uncheck|toggle|indeterminate|determinate|disable|enable|update|destroy)$/i.test(a))return a=a.toLowerCase(),g(this),c.each(function(){var c=
    f(this);"destroy"==a?E(c,"ifDestroyed"):A(c,!0,a);f.isFunction(b)&&b()});if("object"!=typeof a&&a)return this;var e=f.extend({checkedClass:k,disabledClass:n,indeterminateClass:_indeterminate,labelHover:!0},a),l=e.handle,v=e.hoverClass||"hover",s=e.focusClass||"focus",t=e.activeClass||"active",B=!!e.labelHover,w=e.labelHoverClass||"hover",p=(""+e.increaseArea).replace("%","")|0;if("checkbox"==l||l==r)d='input[type="'+l+'"]';-50>p&&(p=-50);g(this);return c.each(function(){var a=f(this);E(a);var c=this,
    b=c.id,g=-p+"%",d=100+2*p+"%",d={position:"absolute",top:g,left:g,display:"block",width:d,height:d,margin:0,padding:0,background:"#fff",border:0,opacity:0},g=_mobile?{position:"absolute",visibility:"hidden"}:p?d:{position:"absolute",opacity:0},l="checkbox"==c[_type]?e.checkboxClass||"icheckbox":e.radioClass||"i"+r,z=f(_label+'[for="'+b+'"]').add(a.closest(_label)),u=!!e.aria,y=m+"-"+Math.random().toString(36).substr(2,6),h='<div class="'+l+'" '+(u?'role="'+c[_type]+'" ':"");u&&z.each(function(){h+=
    'aria-labelledby="';this.id?h+=this.id:(this.id=y,h+=y);h+='"'});h=a.wrap(h+"/>")[_callback]("ifCreated").parent().append(e.insert);d=f('<ins class="'+C+'"/>').css(d).appendTo(h);a.data(m,{o:e,s:a.attr("style")}).css(g);e.inheritClass&&h[_add](c.className||"");e.inheritID&&b&&h.attr("id",m+"-"+b);"static"==h.css("position")&&h.css("position","relative");A(a,!0,_update);if(z.length)z.on(_click+".i mouseover.i mouseout.i "+_touch,function(b){var d=b[_type],e=f(this);if(!c[n]){if(d==_click){if(f(b.target).is("a"))return;
    A(a,!1,!0)}else B&&(/ut|nd/.test(d)?(h[_remove](v),e[_remove](w)):(h[_add](v),e[_add](w)));if(_mobile)b.stopPropagation();else return!1}});a.on(_click+".i focus.i blur.i keyup.i keydown.i keypress.i",function(b){var d=b[_type];b=b.keyCode;if(d==_click)return!1;if("keydown"==d&&32==b)return c[_type]==r&&c[k]||(c[k]?q(a,k):x(a,k)),!1;if("keyup"==d&&c[_type]==r)!c[k]&&x(a,k);else if(/us|ur/.test(d))h["blur"==d?_remove:_add](s)});d.on(_click+" mousedown mouseup mouseover mouseout "+_touch,function(b){var d=
    b[_type],e=/wn|up/.test(d)?t:v;if(!c[n]){if(d==_click)A(a,!1,!0);else{if(/wn|er|in/.test(d))h[_add](e);else h[_remove](e+" "+t);if(z.length&&B&&e==v)z[/ut|nd/.test(d)?_remove:_add](w)}if(_mobile)b.stopPropagation();else return!1}})})}})(window.jQuery||window.Zepto);
    /**************************** END ****************************/

    /**************************** BEGIN ****************************/
    /**
    * base.js v-1.2.0
    * 
    * Copyright (c) 2016/3/3 Han Wenbo
    *
    * Here are some common public methods!
    *
    **/

    ;(function($, window, document, undefined) {
        function Base() {
        }

        Base.prototype = {
            init: function() {
            },
            //请求->所有的请求都需要经过(特殊的除外)
            /*Base.request({
                url: '...',
                params: {
                },
                callback: function(data) {
                },
            });*/
            request: function(options) {
                var This = this,
                    params = {//必须参数
                        //
                    },
                    defaults = {
                        prefix: '../../',//接口路径前缀(不能写根路径)
                        $formObj: $(),//被序列化的form表单
                        dataObj: {},
                        callback: function(){}//回调函数
                    };

                options = $.extend({}, defaults, options);
                var formData = $.extend({}, This.formatSeriData(decodeURIComponent((options.$formObj.serialize()))), options.dataObj);//中文乱码,使用decodeURIComponent解码即可
                $.ajax({
                    url: encodeURI(options.prefix + (options.url || '...')),//...为基础地址
                    type: 'get',
                    dataType: options.dataType || 'json',
                    data: $.extend({}, params, options.params, formData),
                    cache: false,//IE下有用
                    success: function(data) {
                        if(data) {
                            options.callback(data);
                        }
                    }
                });
            },
            //格式化被序列化后的数据->http://xxx.com?a=1&b=2化为{a:1, b:2}
            formatSeriData: function(data) {
                if(!data) {
                    return;
                }
                var obj = '',
                    dot = ',',      
                    arr = data.match(/[^?^#^&]+=[^?^#^&]*/g);

                for(var i=0; i<arr.length; i++) {
                    var str = arr[i].match(/([^=]+)=([^=]*)/);
                    if(i==arr.length - 1) {
                        dot = '';
                    }
                    obj += '"'+ str[1] +'"' +":"+ '"'+ str[2] +'"'+ dot;
                }
                return JSON.parse('{'+ obj +'}');
            },
            //判断手机还是pc->true是pc 参数bool为true时，返回具体型号
            /*if(Base.isPC()) {
                return;
            }*/
            isPC: function (bool) {
                var userAgentInfo = navigator.userAgent;
                var Agents = ["android", "iphone",
                            "symbianos", "windows phone",
                            "ipad", "ipod"];
                var flag = true;
                for (var v = 0; v < Agents.length; v++) {
                    if (userAgentInfo.toLowerCase().indexOf(Agents[v]) > 0) {
                        if(bool) {
                            return Agents[v];
                        }
                        flag = false;
                        break;
                    }
                }
                return flag;
            },
            //判断浏览器类型  
            myBrowser: function(){  
                var userAgent = navigator.userAgent,  
                    isOpera = userAgent.indexOf("Opera") > -1;  

                if (isOpera) {  
                    return "Opera";  
                };  
                if (userAgent.indexOf("Firefox") > -1) {  
                    return "FF";  
                }  
                if (userAgent.indexOf("Chrome") > -1){  
                    return "Chrome";  
                }  
                if (userAgent.indexOf("Safari") > -1) {  
                    return "Safari";  
                }  
                if (userAgent.indexOf("compatible") > -1 && userAgent.indexOf("MSIE") > -1 && !isOpera) {  
                    return "IE";  
                };  
            },
            //判断IE的版本(非ie返回undefined)
            ieVersion: function(){  
                var browser = navigator.appName;
                var b_version = navigator.appVersion;
                var version = b_version.split(";");
                var trim_Version = "";
                if(!version[1]) return;
                trim_Version = version[1].replace(/[ ]/g, "");
                if (browser == "Microsoft Internet Explorer" && trim_Version == "MSIE6.0") {
                    return 6;
                } else if (browser == "Microsoft Internet Explorer" && trim_Version == "MSIE7.0") {
                    return 7;
                } else if (browser == "Microsoft Internet Explorer" && trim_Version == "MSIE8.0") {
                    return 8;
                } else if (browser == "Microsoft Internet Explorer" && trim_Version == "MSIE9.0") {
                    return 9;
                }
            },
            //获取光标位置
            getCursortPos: function(obj) {
                var CaretPos = 0;   // IE Support
                if(document.selection) {
                obj.focus();
                    var Sel = document.selection.createRange();
                    Sel.moveStart('character', -obj.value.length);
                    CaretPos = Sel.text.length;
                }
                // Firefox support
                else if(obj.selectionStart || obj.selectionStart == '0')
                    CaretPos = obj.selectionStart;
                return CaretPos;
            },
            //设置光标位置
            setCaretPos: function(obj, pos) {
                if(obj.setSelectionRange) {
                    obj.focus();
                    obj.setSelectionRange(pos, pos);
                }else if(obj.createTextRange) {
                    var range = obj.createTextRange();
                    range.collapse(true);
                    range.moveEnd('character', pos);
                    range.moveStart('character', pos);
                    range.select();
                }
            },
            //禁用菜单
            banCtxMenu: function() {
                $(document).on("contextmenu",function(e){
                    return false;
                });
            },
            //获取格式化时间
            getFormatDate: function() {
                var today = new Date(),
                    year = today.getFullYear(),
                    month = this.addZero(today.getMonth() + 1),
                    date = this.addZero(today.getDate()),
                    hour = this.addZero(today.getHours()),
                    minute = this.addZero(today.getMinutes()),
                    second = this.addZero(today.getSeconds());

                return year + "-" + month + "-" + date + ' ' + hour + ":" + minute + ":" + second;
            },
            //格式化秒数->7203秒化为02时00分03秒
            formatSecond: function(num) {
                var second = this.addZero(parseInt(num%60)) +'秒',
                    minute = this.addZero(parseInt(num/60%60)) +'分',
                    hour = this.addZero(parseInt(num/60/60%60)) +'时';

                if(hour == '00时') {
                    hour = '';
                    if(minute == '00分') {
                        minute = '';
                    }
                    
                }
                return hour + minute + second;
            },
            //格式化毫秒数->7203毫秒化为00分07秒20(原203，最后一位省略)毫秒
            /*//设置倒计时
            var t = 900000,//15分钟
                timer = setInterval(function() {
                $('.time').text(Base.formatMillisecond(t));
                if(t <= 0) {
                    Base.layerMsg('中奖用户已揭晓，确认并跳转查看', function() {
                        this.location.href = '';
                    });
                    clearInterval(timer);
                }
                t -= 25;
            }, 25);*/
            formatMillisecond: function(num) {
                var millisecond = num%1000,
                    second = this.addZero(parseInt(num/1000%60)) +':',
                    minute = this.addZero(parseInt(num/1000/60%60)) +':';

                millisecond = millisecond>99 ? (millisecond+'').substring(0, (millisecond+'').length-1) : millisecond;
                millisecond = this.addZero(parseInt(millisecond));

                return minute + second + millisecond;
            },
            //个位数前面加0(num必须为int)
            addZero: function(num) {
                return num<10 ? "0" + num : num;
            },
            //多余字数加省略号
            addDots: function(str, num, type) {
                if(type) {//true 中文算两个字符
                   var result = '',
                       len = 0;

                   for(var i=0; i<str.length; i++) {
                       if(len < num) {
                           if(str[i].match(/[^\x00-\xff]+/)) {//匹配双字节字符(包括汉字)  [\u4e00-\u9fa5]能匹配中文字符
                               len += 1;
                           }else {
                               len += .5;
                           }
                           result += str[i];
                       }else {
                           result += '...';
                           break;
                       }
                   }
                   return result; 
                }else {
                str += '';
                if(str.length > num) {
                    str = str.substr(0, num) +'...';
                }
                return str;
               }
            },
            //不重复获取1-maxRandom的数字，可设置允许出现的最大数
            getRandomNum: function(maxRandom, maxNum) {
                var arrA = [];
                var arrX = [];
                var arr = [];
                for(var m=0; m<maxRandom; m++) {
                    var res = false;
                    var ran = Math.ceil(Math.random()*maxRandom);

                    while(!res) {
                        var x = 1;

                        for(var i=0; i<arrA.length; i++) {
                            if(ran != arrA[i]) {
                                arrX[i] = 1;
                            }else {
                                arrX[i] = 0;
                            }
                        }

                        for(var j=0; j<arrX.length; j++) {
                            x *= arrX[j];
                        }
                        if(x) {
                            res = true;
                            arrA.push(ran);
                        }else {
                            ran = Math.ceil(Math.random()*maxRandom);

                        }

                    }
                }
                for(var i=0; i<arrA.length; i++) {
                    if(maxNum < arrA[i]) {
                        arrA[i] = arrA[i]%maxNum ? arrA[i]%maxNum  : maxNum;
                    }
                }

                return arrA;
            },
            //弹出提示框 (应用layer.js)
            /*Base.layerMsg(data.message);*/
            layerMsg: function(msg, callback) {
                var index = layer.open({
                    title: false,
                    shadeClose: true,
                    content: msg,
                    closeBtn: 0,
                    area: ['270px'],
                    end: function() {
                        if(callback) {
                            callback();
                        }else {
                            layer.close(index);
                        }
                    }
                });
            },
            // 判断类型 array number string date function regexp object boolean null undefined  
            isType: function(obj, type) {
            	return Object.prototype.toString.call(obj).toLowerCase() === '[object ' + type + ']';
            },
            // 获取图片真实宽高
            getNaturalSize: function(img, fn) {  
                /*if (img.naturalWidth) { //这属性很怪异(时而有效)      
                    fn(img.naturalWidth, img.naturalHeight);  
                } else {}*/
                var pic = new Image();  

                pic.onload = function() { //加载完毕后(建议)      
                    fn(pic.width, pic.height);  
                }  
                pic.src = img.src; //这句放在onload后面(兼容ie8)
            }, 
            /*
            * This.imageLoad('<img src="http://a.jpg"><img src="https://b.png"><a href="http://c.gif"></a>')
            */
            // 匹配html中所有图片资源，加载完毕执行
            imageLoad: function(str, callback) {
                var imgArr = str.match(/https?[^>]*?\.(png|jpg|bmp|jpeg|gif)/g),
                imgPromiseArr = [];

                try {// 防止ie8报错
                    for(var i=0; i<imgArr.length; i++) {
                        var imgPromise = new Promise(function(resolve, reject) {
                            var pic = new Image();

                            pic.onload = function() { //加载完毕后(建议)  
                                resolve(pic.src +'加载完毕');
                            }
                            pic.src = imgArr[i]; //这句放在onload后面(兼容ie8) 
                        });
                        imgPromiseArr.push(imgPromise);
                    }

                    Promise.all(imgPromiseArr)
                    .then(function(data) {
                        console && console.log(data);
                        callback && callback();
                    });
                }catch(e) {}
            },
            // 获取纯文本
            getPlainText: function(str) {
                return (str+'').replace(/<[^>]*>|/g, '');
            }, 
	        //获取链接中某个参数    
	        getParam: function(param, origin, callback) {  
	            var reg = new RegExp(param + '=(\d*[a-zA-Z]*[^?|^#|^&]*)'),  
	                str = (origin||location.href).match(reg);  
	            if (str) {  
	                str = str[1];  
	                callback && callback();  
	                return str;  
	            }  
	        }

        };

        window.MN_Base = new Base();



    })(MN, window, document);

    /**************************** END ****************************/


    /**************************** BEGIN ****************************/
    /**
    * jquery.scrollbar.js
    * 
    * Copyright (c) 2016/5/25 Han Wenbo
    *
    **/

    ;(function($, window, document, undefined) {
    	var plugName = "scrollbar",
    		defaults = {
    			backClass: 'SC_backClass',
    			frontClass: 'SC_frontClass',
    			autoBottom: true,//内容改变，是否自动滚动到底部
    			moveCallback: function(top, direction) {},//运动时事件回调
    			stopCallback: function(top, direction) {}//停止时事件回调
    		};
    	
    	function Scrollbar($el, options) {
    		this.plugName = plugName;
    		this.$el = $el;
    		this.prop = {};
    		this.child = {};
    		this.el = {};
    		this.defaults = defaults;
    		this.options = $.extend({}, defaults, options);
    		this.init();
    	}

    	Scrollbar.prototype = {
    		init: function() {
    			this.variable();//声明变量
    			this.baseEl();//生成滚动条的背景栏和拖动按钮
    			this.event();//绑定事件
    		},
    		//声明变量
    		variable: function() {
    			this.winW = $(window).width();
    			this.winH = $(window).height();

    			this.el.width = this.$el.width();
    			this.el.height = this.$el.height();
    			this.el.outerWidth = this.$el.outerWidth();
    			this.el.outerHeight = this.$el.outerHeight();
    			this.el.pos = this.$el.position();
    			this.el.position = this.$el.position();
    			this.el.borderWidth = parseInt(this.$el.css('borderTopWidth'));

    			this.$child = this.$el.children(':not(script):eq(0)');
    			this.child.width = this.$child.width();
    			this.child.height = this.$child.height();
    			this.child.outerWidth = this.$child.outerWidth();
    			this.child.outerHeight = this.$child.outerHeight();
    			if(this.child.outerHeight<this.el.outerHeight) {//限制最小高度
    				this.child.outerHeight = this.el.outerHeight;
    			}
    			this.child.pos = this.$child.position();
    			this.child.position = this.$child.position();
    			this.child.borderWidth = parseInt(this.$child.css('borderTopWidth'));

    			this.maxScroll = this.child.outerHeight-this.el.height;//div最大滚动距离
    			this.delta = 1;//
    			this.deltaFactor = 40;//滚动一次移动的距离
    			this.curPos = 0;
    		},
    		//生成滚动条的背景栏和拖动块
    		baseEl: function() {
    			var style = 
    				'.SC_outer {'+
    					'overflow: hidden;'+
    				'}'+
    				'.SC_inner {'+
    					'position: absolute;'+
    					'top: 0;'+
    					'left: 0;'+
    				'}'+
    				'.SC_backCtn {'+
    				    'height: 100%;'+
    				    'position: absolute;'+
    				    'top: 0;'+
    				    'right: 2px;'+
    				'}'+
    				'.SC_backClass {/*可配置*/'+
    				    'background: #000;'+
    				    'background: rgba(0, 0, 0, 0.4);'+
    				    'width: 2px;'+
    				    'border-radius: 20px;'+
    				'}'+
    				'.SC_frontCtn {'+
    				    'position: absolute;'+
    				    'top: 0;'+
    				    'cursor: pointer;'+
    				'}'+
    				'.SC_frontClass {/*可配置*/'+
    				    'background: #fff;'+
    				    'background: rgba(255, 255, 255, 0.75);'+
    				    'width: 4px;'+
    				    'height: 30px;'+
    				    'border-radius: 5px;'+
    				'}'+
    				'.SC_frontClass:hover {/*可配置*/'+
    				    'background: rgba(255, 255, 255, 1);';+
    				'}'+
    				'.SC_select_no {'+
    				    '-moz-user-select: none;/*火狐*/'+
    				    '-webkit-user-select: none;/*webkit浏览器*/'+
    				    '-ms-user-select: none;/*IE10*/'+
    				    '-khtml-user-select: none;/*早期浏览器*/'+
    				    'user-select: none;'+
    				'}';
    			$('head').append('<style>'+ style +'</style>');
    			if(this.$el.css('position')=='static') {
    				this.$el.css('position', 'relative');
    			}
    			this.$el.addClass('SC_outer');
    			this.$child.addClass('SC_inner');
    			//背景栏
    			this.$SC_backCtn = $('<div class="SC_backCtn"></div>').addClass(this.options.backClass).hide().appendTo(this.$el);

    			//拖动块
    			this.$SC_frontCtn = $('<div class="SC_frontCtn"></div>').addClass(this.options.frontClass).appendTo(this.$SC_backCtn);

    			this.frontLeft = (parseInt(this.$SC_backCtn.width())-parseInt(this.$SC_frontCtn.width()))/2;

    			this.$SC_frontCtn.css({
    				left: this.frontLeft
    			});
    			this.maxTop = this.el.height-this.$SC_frontCtn.height();//拖动块最大top
    			this.ratio = this.maxScroll/this.maxTop;//比率
    		},
    		//绑定事件
    		event: function() {
    			var This = this,
    				oldX = 0,  
    				oldY = 0,
    				diffX = 0,
    				diffY = 0,
    				touchTimer = null;

    			if(document.addEventListener) {//手机端(防止IE8-报错)
    				This.$el[0].addEventListener('touchstart', function(e) {  
    					var targetTouches = e.targetTouches[0];  
    					oldX = targetTouches.pageX;  
    					oldY = targetTouches.pageY;  
    				});

    				This.$el[0].addEventListener('touchmove', function(e) {
    					clearInterval(touchTimer);
    					This.$SC_backCtn.add(This.$SC_frontCtn).fadeIn();
    					e.preventDefault();//阻止页面滚动  
    							  
    					var targetTouches = e.targetTouches[0];  

    					var newX = targetTouches.pageX,  
    						newY = targetTouches.pageY; 

    					diffX = newX - oldX;
    					diffY = newY - oldY;  

    					var childTop = This.$child.position().top,
    						elH = This.$el.outerHeight(),
    						childH = This.$child.outerHeight();

    					if(childTop<0 && childH>elH-childTop) {
    						This.$child.css({'top': '+='+ diffY});
    						This.$SC_frontCtn.css({'top': -(This.$child.position().top)/This.ratio});
    					}else {
    						This.$child.css({'top': '+='+ diffY/3});
    					}

    					oldX = newX;  
    					oldY = newY;  
    				});

    				This.$el[0].addEventListener('touchend', function(e) { 
    					var targetTouches = e.targetTouches[0];  

    					var childTop = This.$child.position().top,
    						elH = This.$el.outerHeight(),
    						childH = This.$child.outerHeight();

    					if(childTop>=0) {//上出现空白
    						This.$child.stop().animate({'top': '0'}, 300, function() {
    							This.$SC_backCtn.add(This.$SC_frontCtn).fadeOut();
    						});
    						This.options.stopCallback(parseInt(This.$child.css('top')), -1);
    					}else if(childH<=elH-childTop) {
    						if(childH < elH) {//下出现空白
    							This.$child.stop().animate({'top': '0'}, 300, function() {
    								This.$SC_backCtn.add(This.$SC_frontCtn).fadeOut();
    							});
    						}else {
    							This.$child.stop().animate({'top': elH-childH}, 300, function() {
    								This.$SC_backCtn.add(This.$SC_frontCtn).fadeOut();
    							});
    						}
    						This.options.stopCallback(parseInt(This.$child.css('top')), 1);
    					}else {//缓动停止
    						clearInterval(touchTimer);
    						touchTimer = setInterval(function() {
    							childTop = This.$child.position().top;//更新childTop

    							if(childTop>=0) {//上出现空白
    								This.$child.css({'top': '0'});
    								clearInterval(touchTimer);
    								This.options.stopCallback(parseInt(This.$child.css('top')), -1);
    							}else if(childH<=elH-childTop) {//下出现空白
    								This.$child.css({'top': elH-childH});
    								clearInterval(touchTimer);
    								This.options.stopCallback(parseInt(This.$child.css('top')), 1);
    							}else {//运动中
    								if(Math.abs(diffY)>1) {
    									This.$child.css({'top': '+='+ diffY});
    									This.$SC_frontCtn.css({'top': -(This.$child.position().top)/This.ratio});
    									diffY *= .95;
    								}else {
    									This.$SC_backCtn.add(This.$SC_frontCtn).fadeOut();
    									clearInterval(touchTimer);
    								}
    								This.options.moveCallback(parseInt(This.$child.css('top')), -diffY<0?-1:1);
    							}
    						}, 20);
    					}
    					
    				});
    			}

    			//鼠标滚动(手机端无滚轮)
    			This.$el.add(This.$SC_backCtn).add(This.$SC_frontCtn).on('mousewheel.SC', function(event, delta) {
    				This.delta = -delta;//

    				if(This.delta<0) {//向上滚
    					var top = Math.abs(parseInt(This.$child.css('top'))),
    						once = Math.abs(This.delta*This.deltaFactor);

    					if(top<once) {
    						once = top;
    					}
    					This.curPos += once;
    					This.$child.css({
    						top: This.curPos
    					});

    					This.$SC_frontCtn.css({
    						top: -This.curPos/This.ratio
    					});
    				}

    				if(This.delta>0) {//向下滚
    					var top = Math.abs(parseInt(This.$child.css('top'))),
    						bottom = Math.abs(parseInt(This.maxScroll-top)),
    						once = Math.abs(This.delta*This.deltaFactor);

    					if(bottom<once) {
    						once = bottom;
    					}
    					This.curPos += -once;
    					This.$child.css({
    						top: This.curPos
    					});

    					This.$SC_frontCtn.css({
    						top: -This.curPos/This.ratio
    					});
    				}
    				This.options.moveCallback(parseInt(This.$child.css('top')), This.delta);
    				return false;
    			});

    			//鼠标按下拖动
    			This.$SC_frontCtn.on('mousedown.SC', function(e) {
    				$(document).on('selectstart.SC', function() {//禁选文字(兼容ie低版本)
    					return false;
    				});
    				$('body').addClass('SC_select_no');//禁选文字(兼容火狐)

    				var clientY = e.clientY,
    					top = parseInt($(this).css('top'));//开始的top

    				var oldClientY = e.clientY;

    				$(document).on('mousemove.SC', function(e) {
    					var newClientY = e.clientY,
    						endTop = top+newClientY-clientY;//最终的top

    					var diffClientY = newClientY-oldClientY;//判断拖动的方向
    					oldClientY = e.clientY;

    					if(endTop <= 0) {
    						endTop = 0;
    					}
    					if(endTop >= This.maxTop) {//
    						endTop = This.maxTop;
    					}

    					This.$SC_frontCtn.css({//拖动按钮滚动
    						top: endTop
    					});

    					This.$child.css({//div滚动
    						top: -endTop*This.ratio
    					});
    					This.options.moveCallback(parseInt(This.$child.css('top')), diffClientY<0?-1:1);
    				});
    			});

    			//取消拖动
    			$(document).on('mouseup.SC', function() {
    				$(this).off('mousemove.SC');
    				$(document).off('selectstart.SC');
    				$('body').removeClass('SC_select_no');
    			});

    			//监听内容变化(兼容性不好)
    			/*This.$child.on('DOMNodeInserted.SC', function() {
    				This.update();//更新
    			});*/

    			This.text = This.$el.text();

    			This.timer = setInterval(function() {
    				var newtext = This.$el.text();

    				if(This.text != newtext) {
    					This.update();
    					This.text = This.$el.text();
    					if(This.options.autoBottom) {
    						This.scrollTo('bottom');
    					}
    				}
    			}, 100);

    			//浏览器缩放
    			$(window).on('resize.SC', function() {
    				This.update();//更新
    			});

    			//渐隐渐显
    			This.$el.hover(function() {
    				This.$SC_backCtn.stop().fadeIn();
    			}, function() {
    				This.$SC_backCtn.stop().fadeOut();
    			});
    		},
    		//更新
    		update: function() {
    			this.el.height = this.$el.height();
    			this.el.outerHeight = this.$el.outerHeight();
    			this.child.outerHeight = this.$child.outerHeight();

    			if(this.child.outerHeight<this.el.outerHeight) {//限制最小高度
    				this.child.outerHeight = this.el.outerHeight;
    			}

    			this.maxScroll = this.child.outerHeight-this.el.height;//div最大滚动距离

    			this.maxTop = this.el.height-this.$SC_frontCtn.height();//拖动块最大top
    			this.ratio = this.maxScroll/this.maxTop;//比率

    			if(this.maxTop <= -this.curPos/this.ratio) {//继续往下拖防止出现空白
    				this.scrollTo('bottom');
    			}else {
    				this.$SC_frontCtn.css({
    					top: -this.curPos/this.ratio
    				});
    			}
    		},
    		//滚动至 ['top'] ['bottom'] [int]
    		scrollTo: function(pos, bool) {
    			if(pos == 'top') {
    				this.curPos = 0;
    			}
    			if(pos == 'bottom') {
    				this.curPos = -this.maxScroll;
    			}
    			if(/\d+/.test(pos)) {
    				this.curPos = -pos;
    			}

    			if(bool) {// css
    				this.$child.stop().css({
    					top: this.curPos
    				}, 300);

    				this.$SC_frontCtn.stop().css({
    					top: -this.curPos/this.ratio
    				}, 300);
    			}else {// animate
    				this.$child.stop().animate({
    					top: this.curPos
    				}, 300);

    				this.$SC_frontCtn.stop().animate({
    					top: -this.curPos/this.ratio
    				}, 300);
    			}
    		}
    		
    	}

    	$.fn.extend({
    		scrollbar: function(options) {
    			return new Scrollbar($(this), options);
    		}
    	})
    })(jQuery, window, document);
    /**************************** END ****************************/

    /**************************** BEGIN ****************************/
    /**
    * jquery.dragMove.js plugin
    *
    * Copyright (c) 2016/5/27 Han Wenbo
    *
    */
    ;(function($, window, document, undefined) {
        var plugName = "dragMove",
            defaults = {

            };

        function Drag($this, $that) {
            this.name = plugName;
            this.$this = $this;//拖动的
            this.$that = $that;//跟随的
            this.init();
        }

        Drag.prototype = {
            init: function() {
                var This = this,
                    $this = This.$this,
                    $that = This.$that;

                $this.on('mousedown.DR', function(e) {
                    var offX = e.offsetX,//点击的inner的位置
                        offY = e.offsetY,
                        offLeft = $this.position().left,//inner在outer里面的位置
                        offTop = $this.position().top;

                    $(document).on('mousemove.DR', function(e) {
                    	$(document).on('selectstart.DR', function() {//禁选文字(兼容ie低版本)
                    		return false;
                    	});
                    	$('body').addClass('SC_select_no');//禁选文字(兼容火狐)

                        var diffX = e.clientX - offX - offLeft,
                            diffY = e.clientY - offY - offTop,
                            winW = $(window).width(),
                            winH = $(window).height();

                        if(diffX <= 0) {
                            diffX = 0;
                        }
                        if(diffX+320 >= winW) {
                            diffX = winW-320;
                        }
                        if(diffY <= 0) {
                            diffY = 0;
                        }
                        if(diffY+480 >= winH) {
                            diffY = winH-480;
                        }
                        $that.css({
                        	'left': diffX, 
                        	'top': diffY,
                        	'right': 'auto',
                        	'bottom': 'auto'
                        });
                    });


                });

                $(document).on('mouseup.DR', function() {
                    $(document).off('mousemove.DR');
                    $(document).off('selectstart.DR');
                    $('body').removeClass('SC_select_no');//禁选文字(兼容火狐)
                });

            },
            destroy: function() {
            	this.$this.off('mousedown.DR')
            	$(document).off('mousemove.DR');
            	$(document).off('mouseup.DR');
            }

        }

        $.fn.extend({
            dragMove: function($that) {
                return new Drag($(this), $that);
	        }
	    })
    })(MN, window, document);
    /**************************** END ****************************/

    /**************************** BEGIN ****************************/
    /**
    * jquery.autocomplete.js
    * 
    * Copyright (c) 2016/5/20 Han Wenbo
    *
    **/

    ;(function($, window, document, undefined) {
        var plugName = "autocomplete",
            defaults = {
                prefix: '../../',//接口路径前缀(不能写根路径)
            	url: '',//[string]
                jsonp: false,//是否跨域
            	targetEl: null,//参照物(用于appendTo和定位)
            	posAttr: ['0px', '0px'],//外边框的定位[left bottom] 要写单位
            	itemNum: 0,//[int] 默认全部显示
            	keyupDelay: 5,//[int] 默认keyup之后，延时500ms后发送请求
            	callback: function(data) {}//获取文本后的回调函数
            };
        
        function Autocomplete($el, options) {
            this.plugName = plugName;
            this.$el = $el;
            this.prop = {};
            this.obj = {};
            this.$obj = {};
            this.defaults = defaults;
            this.options = $.extend({}, defaults, options);
            this.init();
        }

        Autocomplete.prototype = {
            init: function() {
            	this.baseProp();//$el的基础属性
            	this.baseEl();//生成外边框
            	this.event();//绑定事件
            },
            //基础属性
            baseProp: function() {
            	this.prop.winW = $(window).width();
            	this.prop.winH = $(window).height();

            	this.prop.outerWidth = this.$el.outerWidth();
            	this.prop.outerHeight = this.$el.outerHeight();
            	this.prop.position = this.$el.position();
            	this.prop.offset = this.$el.offset();
            	
            	this.prop.bottom = this.prop.winH - this.prop.offset.top;
            	this.prop.boxSizing = this.$el.css('boxSizing');

            	//是否rem
            	this.prop.baseRem = parseInt($('html').css('fontSize'));
            },
            //生成外边框
            baseEl: function() {
            	//rem
            	if(this.options.posAttr.join(',').indexOf('rem') != -1) {//rem
            		for(var i=0; i<this.options.posAttr.length; i++) {
            			this.options.posAttr[i] = parseFloat(this.options.posAttr[i]) * this.prop.baseRem;
            		}
            	}

            	this.$obj.$AU_outerCtn = $('<div class="AU_outerCtn"></div>').css({
            		left: this.options.posAttr[0],
            		bottom: this.options.posAttr[1],
            		boxSizing: this.prop.boxSizing
            	}).hide().appendTo(this.options.targetEl);
            },
            //绑定事件
            event: function() {
            	var This = this;

            	/*This.eventType = 'click';
            	if(!MN_Base.isPC()) {// hack ios 点击document不失去焦点
            	    This.eventType = 'touchend';
            	}*/

            	This.obj.curIndex = 0;//当前选中的div

            	//文本改变(兼容ie9删除文本)
            	This.$el.on('input.AU, propertychange.AU, keyup.AU', function(e) {
            		if(e.type=='keyup') {
            			if(e.keyCode==8 && MN_Base.ieVersion==9) {//ie9下退格键
            				This.outerCtnEvent();
            			}
            			if(e.keyCode==38) {//上移
            				if(This.obj.curIndex == 0.5) {
            					This.obj.curIndex = This.obj.maxIndex;
            				}else {
            					if(This.obj.curIndex > 0) {
            						This.obj.curIndex--;
            					}else {
            						This.obj.curIndex = This.obj.maxIndex;
            					}
            				}
            				$('.AU_innerCtn').eq(This.obj.curIndex).addClass('AU_innerCtn_focus').siblings().removeClass('AU_innerCtn_focus');
            			}
            			if(e.keyCode==40) {//下移
            				if(This.obj.curIndex == 0.5) {
            					This.obj.curIndex = 0;
            				}else {
            					This.obj.curIndex = parseInt(This.obj.curIndex);
            					if(This.obj.curIndex < This.obj.maxIndex) {
            						This.obj.curIndex++;
            					}else {
            						This.obj.curIndex = 0;
            					}
            				}
            				$('.AU_innerCtn').eq(This.obj.curIndex).addClass('AU_innerCtn_focus').siblings().removeClass('AU_innerCtn_focus');
            			}
            			if(e.keyCode==27) {//取消
            				This.$obj.$AU_outerCtn.empty().hide();
            			}
            			if(e.keyCode==108 || e.keyCode== 13) {//确定
            				$('.AU_txt').eq(This.obj.curIndex).trigger('click');
            				This.$obj.$AU_outerCtn.empty().hide();
            			}
            		}else {
            			This.outerCtnEvent();
            		}
            	});

            	//选定
            	$(document).on('mouseover.AU', '.AU_innerCtn', function(e) {
            		if(e.type == 'mouseover') {
            			$(this).addClass('AU_innerCtn_focus').siblings().removeClass('AU_innerCtn_focus');

            			This.getCurIndex();
            		}
            	});

            	//取消
            	$(document).on('click.AU', function(e) {
            		if(e.target != This.$el[0]) {//输入框
            			if($(e.target).is('.AU_txt')) {//选项
            				var data = $(e.target).text().match(/^\d+\. (.+)/)[1];

	            			This.$el.val(data);
	            			This.options.callback(data);
	            		}
            			This.$obj.$AU_outerCtn.empty().hide();
            		}
            	});

            },
            //外框事件
            outerCtnEvent: function() {
            	var This = this;

        		This.obj.timerIndex = 0;
        		clearInterval(This.obj.timer);
        		This.obj.timer = setInterval(function() {
        			This.obj.timerIndex++;
        			if(This.obj.timerIndex == This.options.keyupDelay) {
        				var pattern = new RegExp(This.$el.val(), 'g');
        				MN_Base.request({
                        	prefix: This.options.prefix,//接口路径前缀(不能写根路径)
        					url: This.options.url,
        					params: {
        						q: This.$el.val()
        					},
            				dataType: This.options.jsonp ? 'jsonp' : 'json',//默认json
        					callback: function(data) {
        						if(data.status) {//1
									layer.msg(data.message, {
										shift: 0,
										area: This.getSuitSize()
									});
        						}else {//0
        							var html = '';
        							if(data.list) {
	        							if(data.list[0]) {
	        								var len = This.options.itemNum ? (This.options.itemNum>data.list.length?data.list.length:This.options.itemNum) : data.list.length;
	        								for(var i=0; i<len; i++) {
	        									html += '<div class="AU_innerCtn"><div class="AU_txt">'+ (i+1) +'. '+ data.list[i].question.replace(pattern, '<span class="AU_replaceTip">'+ This.$el.val() +'</span>') +'</div></div>';

	        								}
											This.obj.curIndex = 0.5;//恢复0
	            							This.obj.maxIndex = len-1;//最大index
	        								This.$obj.$AU_outerCtn.empty().append(html).show();
	            							$('.AU_innerCtn').eq(Math.floor(This.obj.curIndex)).addClass('AU_innerCtn_focus').siblings().removeClass('AU_innerCtn_focus');
	        							}else {
	        								This.$obj.$AU_outerCtn.empty().hide();
	        							}
        							}
        						}
        					}
        				});
        				clearInterval(This.obj.timer);
        			}
        		}, 100);
            },
            //获取当前选中的div
            getCurIndex: function() {
            	var This = this;
            	
            	$('.AU_innerCtn').each(function(key, val) {
            		if($(val).is('.AU_innerCtn_focus')) {
            			This.obj.curIndex = key;
            		}
            	});
            },
            // 获取提示框合适的大小
            getSuitSize: function() {
            	return MN_Base.isPC()?'400px':'0.8rem';
            }
        }

        $.fn.extend({
            autocomplete: function(options) {
                return this.each(function() {
                    new Autocomplete($(this), options);
                })
            }
        })
    })(MN, window, document);
    /**************************** END ****************************/


    /**************************** BEGIN ****************************/
    /**
    * jquery.face.js
    * 
    * Copyright (c) 2016/5/24 Han Wenbo
    *
    **/

    ;(function($, window, document, undefined) {
        var plugName = "face",
            defaults = {
            	open: true,//默认开启功能
    			src: 'src/yun/',//表情路径
            	rowNum: 5,//每行最多显示数量，此属性不适用于常用语
            	btnAttr: ['0px', '5px', '20px', '20px'],//[left bottom width height] 触发按钮相对targetEl的位置和宽高  要写单位
            	ctnAttr: ['0px', '30px', '40px', '40px'],//[left bottom width height] 表情框相对targetEl位置和里面的表情格子宽高  要写单位
            	triggerEl: null,//触发按钮(不存在则自己生成，不要由a包裹)
            	targetEl: null,//父级参照物(用于appendTo和定位)
            	hideAdv: false,//是否隐藏广告
            	advClass: 'FA_advCtn',//广告样式
            	callback: function(data) {}//获取表情符后的回调函数
            };
        
        function Face($el, options) {
            this.plugName = plugName;
            this.$el = $el;
            this.prop = {};
            this.obj = {};
            this.$obj = {};
            this.defaults = defaults;
            this.options = $.extend({}, defaults, options);
            this.init();
        }

        Face.prototype = {
            init: function() {
            	this.variable();//声明变量
            	if(this.options.open) {
            		this.baseProp();//$el的基础属性
            		this.baseEl();//生成外边框
            		this.event();//绑定事件
            	}
            },
            //声明变量
            variable: function() {
            	this.obj.face = {//表情包
            		'旺旺表情': [
            			['[微笑]', '/::)'],
			            ['[撇嘴]', '/::~'],
			            ['[色]', '/::B'],
			            ['[发呆]', '/::|'],
			            ['[得意]', '/:8-)'],
			            ['[流泪]', '/::<'],
			            ['[害羞]', '/::$'],
			            ['[闭嘴]', '/::X'],
			            ['[尴尬]', '/::-|'],
			            ['[发怒]', '/::@'],//10
			            ['[调皮]', '/::P'],
			            ['[呲牙]', '/::D'],
			            ['[惊讶]', '/::O'],
			            ['[难过]', '/::('],
			            ['[酷]', '/::+'],
			            ['[吐]', '/::T'],
			            ['[偷笑]', '/:,@P'],
			            ['[愉快]', '/:,@-D'],
			            ['[困]', '/:|-)'],
			            ['[惊恐]', '/::!'],//10
			            ['[流汗]', '/::L'],
			            ['[憨笑]', '/::>'],
			            ['[奋斗]', '/:,@f'],
			            ['[疑问]', '/:?'],
			            ['[嘘]', '/:,@x'],
			            ['[晕]', '/:,@@'],
			            ['[衰]', '/:,@!'],
			            ['[骷髅]', '/:!!!'],
			            ['[再见]', '/:bye'],
			            ['[糗大了]', '/:&-('],//10
			            ['[坏笑]', '/:B-)'],
			            ['[鄙视]', '/:>-|'],
			            ['[委屈]', '/:P-('],
			            ['[亲亲]', '/::*'],
			            ['[可怜]', '/:8*'],
			            ['[玫瑰]', '/:rose'],
			            ['[凋谢]', '/:fade'],
			            ['[嘴唇]', '/:showlove'],
			            ['[爱心]', '/:heart'],
			            ['[心碎]', '/:break']//10
            		],
            		'当当表情': [
            			['[微笑]', '/::)'],
			            ['[撇嘴]', '/::~'],
			            ['[色]', '/::B'],
			            ['[发呆]', '/::|'],
			            ['[得意]', '/:8-)'],
			            ['[流泪]', '/::<'],
			            ['[害羞]', '/::$'],
			            ['[调皮]', '/::P'],
			            ['[呲牙]', '/::D'],
			            ['[惊讶]', '/::O'],//10
			            ['[难过]', '/::('],
			            ['[酷]', '/::+'],
			            ['[偷笑]', '/:,@P'],
			            ['[流汗]', '/::L'],
			            ['[憨笑]', '/::>'],
			            ['[奋斗]', '/:,@f'],
			            ['[疑问]', '/:?'],
			            ['[嘘]', '/:,@x'],
			            ['[晕]', '/:,@@'],
			            ['[再见]', '/:bye'],//10
			            ['[坏笑]', '/:B-)'],
			            ['[委屈]', '/:P-('],
			            ['[亲亲]', '/::*'],
						['[鼓掌]', '/:handclap'],
						['[冷汗]', '/:wipe'],
						['[大笑]', '/:X-)'],
						['[睡觉]', '/::Z'],
						['[抓狂]', '/::8'],
						['[左哼哼]', '/:@>'],
						['[右哼哼]', '/:<@']//10
            		],
            		'云问表情': [
            			['[微笑]', '/::)'],
			            ['[色]', '/::B'],
			            ['[得意]', '/:8-)'],
			            ['[流泪]', '/::<'],
			            ['[害羞]', '/::$'],
			            ['[闭嘴]', '/::X'],
			            ['[发怒]', '/::@'],
			            ['[呲牙]', '/::D'],
			            ['[惊讶]', '/::O'],
			            ['[难过]', '/::('],
			            ['[酷]', '/::+'],
			            ['[愉快]', '/:,@-D'],
			            ['[流汗]', '/::L'],
			            ['[奋斗]', '/:,@f'],
			            ['[疑问]', '/:?'],
			            ['[晕]', '/:,@@'],
			            ['[委屈]', '/:P-(']
            		],
            		'微信表情': [
            			["[微笑]", "/::)"],
            			["[撇嘴]", "/::~"],
            			["[色]", "/::B"],
            			["[发呆]", "/::|"],
            			["[得意]", "/:8-)"],
            			["[流泪]", "/::<"],
            			["[害羞]", "/::$"],
            			["[闭嘴]", "/::X"],
            			["[睡]", "/::Z"],
            			["[大哭]", "/::'("],//10
            			["[尴尬]", "/::-|"],
            			["[发怒]", "/::@"],
            			["[调皮]", "/::P"],
            			["[呲牙]", "/::D"],
            			["[惊讶]", "/::O"],
            			["[难过]", "/::("],
            			["[酷]", "/::+"],
            			["[冷汗]", "/:--b"],
            			["[抓狂]", "/::Q"],
            			["[吐]", "/::T"],//10
            			["[偷笑]", "/:,@P"],
            			["[愉快]", "/:,@-D"],
            			["[白眼]", "/::d"],
            			["[傲慢]", "/:,@o"],
            			["[饥饿]", "/::g"],
            			["[困]", "/:|-)"],
            			["[惊恐]", "/::!"],
            			["[流汗]", "/::L"],
            			["[憨笑]", "/::>"],
            			["[悠闲]", "/::,@"],//10
            			["[奋斗]", "/:,@f"],
            			["[咒骂]", "/::-S"],
            			["[疑问]", "/:?"],
            			["[嘘]", "/:,@x"],
            			["[晕]", "/:,@@"],
            			["[疯了]", "/::8"],
            			["[哀]", "/:,@!"],
            			["[骷髅]", "/:!!!"],
            			["[敲打]", "/:xx"],
            			["[再见]", "/:bye"],//10
            			["[擦汗]", "/:wipe"],
            			["[抠鼻]", "/:dig"],
            			["[鼓掌]", "/:handclap"],
            			["[糗大了]", "/:&-("],
            			["[坏笑]", "/:B-)"],
            			["[左哼哼]", "/:<@"],
            			["[右哼哼]", "/:@>"],
            			["[哈欠]", "/::-O"],
            			["[鄙视]", "/:>-|"],
            			["[委屈]", "/:P-("],//10
            			["[快哭了]", "/::'|"],
            			["[阴险]", "/:X-)"],
            			["[亲亲]", "/::*"],
            			["[吓]", "/:@x"],
            			["[可怜]", "/:8*"],
            			["[菜刀]", "/:pd"],
            			["[西瓜]", "/:<W>"],
            			["[啤酒]", "/:beer"],
            			["[篮球]", "/:basketb"],
            			["[乒乓]", "/:oo"],//10
            			["[咖啡]", "/:coffee"],
            			["[饭]", "/:eat"],
            			["[猪头]", "/:pig"],
            			["[玫瑰]", "/:rose"],
            			["[凋谢]", "/:fade"],
            			["[嘴唇]", "/:showlove"],
            			["[爱心]", "/:heart"],
            			["[心碎]", "/:break"],
            			["[蛋糕]", "/:cake"],
            			["[闪电]", "/:li"],//10
            			["[炸弹]", "/:bome"],
            			["[刀]", "/:kn"],
            			["[足球]", "/:footb"],
            			["[瓢虫]", "/:ladybug"],
            			["[便便]", "/:shit"],
            			["[月亮]", "/:moon"],
            			["[太阳]", "/:sun"],
            			["[礼物]", "/:gift"],
            			["[拥抱]", "/:hug"],
            			["[强]", "/:strong"],//10
            			["[弱]", "/:weak"],
            			["[握手]", "/:share"],
            			["[胜利]", "/:v"],
            			["[抱拳]", "/:@)"],
            			["[勾引]", "/:jj"],
            			["[拳头]", "/:@@"],
            			["[差劲]", "/:bad"],
            			["[爱你]", "/:lvu"],
            			["[NO]", "/:no"],
            			["[OK]", "/:ok"],//10
            			["[爱情]", "/:love"],
            			["[飞吻]", "/:<L>"],
            			["[跳跳]", "/:jump"],
            			["[发抖]", "/:shake"],
            			["[怄火]", "/:<O>"],
            			["[转圈]", "/:circle"],
            			["[磕头]", "/:kotow"],
            			["[回头]", "/:turn"],
            			["[跳绳]", "/:skip"],
            			["[投降]", "/:oY"],//10
            			["[激动]", "/:#-0"],
            			["[乱舞]", "/:hiphot"],
            			["[献吻]", "/:kiss"],
            			["[左太极]", "/:<&"],
            			["[右太极]", "/:&>"]
            		]
            	}
            	this.obj.faceType = [];
            	if(this.options.src.indexOf('wang')+1) {//旺旺表情
            		this.obj.faceType[0] = '旺旺表情';
            		this.obj.faceType[1] = 'bmp';
            		this.obj.faceType[2] = 'gif';
            	}
            	if(this.options.src.indexOf('dang')+1) {//当当表情
            		this.obj.faceType[0] = '当当表情';
            		this.obj.faceType[1] = 'png';
            		this.obj.faceType[2] = 'png';
            	}
            	if(this.options.src.indexOf('yun')+1) {//云问表情
            		this.obj.faceType[0] = '云问表情';
            		this.obj.faceType[1] = 'png';
            		this.obj.faceType[2] = 'png';
            	}
            	if(this.options.src.indexOf('wx')+1) {//微信表情
            		this.obj.faceType[0] = '微信表情';
            		this.obj.faceType[1] = 'png';
            		this.obj.faceType[2] = 'gif';
            	}
            	this.obj.maxNum_y = Math.ceil(this.obj.face[this.obj.faceType[0]].length/this.options.rowNum);//云问表情最大行数

            	this.obj.showTip = false;//是否显示提示框
            	this.obj.lastStrLen = 1;//
            },
            //基础属性
            baseProp: function() {
            	this.prop.winW = $(window).width();
            	this.prop.winH = $(window).height();

            	this.prop.width = this.$el.width();
            	this.prop.height = this.$el.height();
            	this.prop.outerWidth = this.$el.outerWidth();
            	this.prop.outerHeight = this.$el.outerHeight();

            	this.prop.zIndex = this.$el.css('zIndex');

            	this.prop.paddingLeft = parseInt(this.$el.css('paddingLeft'));
            	this.prop.paddingTop = parseInt(this.$el.css('paddingTop'));
            	this.prop.borderWidth = parseInt(this.$el.css('borderTopWidth'));

            	this.prop.position = this.$el.position();
            	this.prop.offset = this.$el.offset();

            	this.prop.bottom = this.prop.winH - this.prop.offset.top;

            	//是否rem
            	this.prop.baseRem = parseInt($('html').css('fontSize'));
            },
            //生成触发按钮和表情框
            baseEl: function() {
            	var This = this,
            		isRem = false;

            	//rem
            	if(This.options.ctnAttr.join(',').indexOf('rem') != -1) {//rem
            		isRem = true;
            		
            		for(var i=0; i<This.options.ctnAttr.length; i++) {
            			This.options.ctnAttr[i] = parseInt(parseFloat(This.options.ctnAttr[i]) * This.prop.baseRem);

            		}
            	}

            	//触发按钮(可配置)
            	if(this.options.triggerEl) {
            		this.$obj.$FA_triBtn = this.options.triggerEl;
            	}else {
            		this.$obj.$FA_triBtn = $('<div class="FA_triBtn"></div>').css({
            			width: this.options.btnAttr[2],
            			height: this.options.btnAttr[3]
            		}).appendTo(this.options.targetEl);

            		//触发按钮定位
            		this.$obj.$FA_triBtn.css({
            			left: this.options.btnAttr[0],
            			bottom: this.options.btnAttr[1]
            		});
            	}

            	//背景框
            	this.$obj.$FA_backCtn = $('<div class="FA_backCtn"></div>').hide().css({
            	}).appendTo(this.options.targetEl);

            	//滚动框
            	this.$obj.$FA_ScrollCtn = $('<div class="FA_ScrollCtn"></div>').css({
            		width: parseFloat(this.options.ctnAttr[2])*this.options.rowNum,
            		height: parseFloat(this.options.ctnAttr[3])*4
            	}).appendTo(this.$obj.$FA_backCtn);

            	//rem
            	if(isRem) {//rem
            		//背景框padding
            		This.$obj.$FA_backCtn.css({
            			padding: (This.prop.baseRem - This.$obj.$FA_ScrollCtn.outerWidth())/2
            		});
            	}

            	//表情框
            	this.$obj.$FA_faceCtn = $('<div class="FA_faceCtn"></div>').appendTo(this.$obj.$FA_ScrollCtn);

            	//广告框
            	this.$obj.$FA_advCtn = $('<div></div>').addClass(this.options.advClass).insertBefore(this.$obj.$FA_ScrollCtn);

            	//关闭广告框
            	this.$obj.$FA_closeAdvCtn = $('<div class="FA_closeAdvCtn" title="不再显示">×</div>').appendTo(this.$obj.$FA_advCtn);

            	if(this.options.hideAdv) {//隐藏广告
            		this.$obj.$FA_advCtn.hide();
            	}

            	this.obj.moodIndex = 0;
            	for(var key in this.obj.face) {
            		this.obj.moodIndex++;
            		if(key == this.obj.faceType[0]) {//选择表情
            			var mood = this.obj.face[key],
            				html = '';
            			for(var i=0; i<this.options.rowNum*this.obj.maxNum_y; i++) {
            				var srcHtml = '',
            					title = '',
            					mark = '';

            				if(i < mood.length) {
            					srcHtml = '<img FA-src="'+ this.options.src + i +'.'+ this.obj.faceType[1] +'">';
            					title = mood[i][0];
            					mark = mood[i][1];
            				}

            				html += '<div class="FA_moodCtn" title="'+ title +'" mark="'+ title +'" group="'+ key +'"><div class="FA_srcCtn" style="width: '+ parseInt(this.options.ctnAttr[2]) +'px; height: '+ parseInt(this.options.ctnAttr[3]) +'px">'+ srcHtml +'</div></div>';
            			}
            			this.$obj.$FA_faceCtn.append(html);
            		}
            	}

            	//背景框定位
            	this.$obj.$FA_backCtn.css({
            		left: this.options.ctnAttr[0],
            		bottom: this.options.ctnAttr[1]
            	});

            	//提示表情滚动框
            	this.$obj.$FA_tipScrollCtn = $('<div class="FA_tipScrollCtn"></div>').css({
            		width: this.options.ctnAttr[2]+50,
            		height: this.options.ctnAttr[3]*4
            	}).appendTo('body');

            	var $allMood = $('.FA_moodCtn[group=云问表情]').clone();

            	$allMood.each(function() {
            		var mark = $(this).attr('mark');

            		$(this).find('.FA_srcCtn').css({
            			textIndent: 5,
            			textAlign: 'left',
            			width: This.options.ctnAttr[2]+50
            		}).find('img').after('<span>'+ mark +'</span>');
            	});

            	//提示表情框
            	this.$obj.$FA_tipMoodCtn = $('<div class="FA_tipMoodCtn"></div>').append($allMood).appendTo(this.$obj.$FA_tipScrollCtn);

            	//计算文字框
            	this.$obj.$FA_countLenCtn = $('<div class="FA_countLenCtn"></div>').css({
            		width: this.prop.width,
            		height: this.prop.height,
            		left: this.prop.offset.left+15,
            		bottom: this.prop.bottom-this.prop.outerHeight-30,
            		padding: this.prop.paddingTop +'px '+ this.prop.paddingLeft +'px',
            		border: this.prop.borderWidth +'px solid blue',
            		opacity: 0,
            		zIndex: -999
            	}).hide().appendTo('body');

            	//计算文字标识符
            	this.$obj.$FA_markPos = $('<span class="FA_markPos"></span>').css({
            	}).appendTo(this.$obj.$FA_countLenCtn);

            },
            //绑定事件
            event: function() {
            	var This = this;

				//调用滚动插件(表情框)
            	This.obj.scrollbar = This.$obj.$FA_ScrollCtn.scrollbar({
            	});
            	This.$obj.$FA_tipScrollCtn.hide();//调用滚动插件后才能隐藏

            	//选择表情
            	This.options.targetEl.on('click.FA', '.FA_moodCtn', function() {
            		var val = This.$el.val(),
            			cursortPos = MN_Base.getCursortPos(This.$el[0]),
            			fromVal = val.substr(0, cursortPos),
            			toVal = val.substr(cursortPos, val.length-1),
            			mark = $(this).attr('mark');

            		This.$el.val(fromVal + mark + toVal);
            		MN_Base.setCaretPos(This.$el[0], cursortPos+mark.length);
            		This.options.callback(This.$el.val());
            		This.$obj.$FA_backCtn.hide();
            	});
            	
            	//初始化切换按钮状态
            	$('.FA_switchBtn').eq(0).addClass('FA_switchBtn_focus').siblings().removeClass('FA_switchBtn_focus');

            	//点击切换
            	$('body').on('click.FA', '.FA_switchBtn', function() {
            		$(this).addClass('FA_switchBtn_focus').siblings().removeClass('FA_switchBtn_focus');
            		if($(this).is('.FA_switchBtn_1')) {//云问表情
            			This.obj.scrollbar.scrollTo(This.obj.top1);
            		}
            	});

        		//显隐
        		$(document).on('click.FA', function(e) {
        			if(e.target == This.$obj.$FA_triBtn[0]) {
        				$('[FA-src]').each(function() {//避免首次加载表情文件
        					$(this).attr('src', $(this).attr('FA-src')).removeAttr('FA-src');
        				});

        				This.$obj.$FA_backCtn.stop().show();

        				This.obj.scrollbar.update();
        				This.obj.scrollbar.scrollTo('top');

        				//显示后才能获取top
        				This.obj.top1 = 0;
        			}else if($(e.target).is(This.$obj.$FA_backCtn) || $(e.target).parents('.FA_backCtn')[0]) {
        				return false;
        			}else {
        				This.$obj.$FA_backCtn.stop().hide();
        			}
        		});

            	//关闭广告
            	This.$obj.$FA_closeAdvCtn.on('click.FA', function() {
            		This.$obj.$FA_advCtn.stop().fadeOut();
            	});

            	This.$el.on('keydown.FA', function(e) {
            		if(e.keyCode == 8) {
            			This.obj.bindInput = false;
            		}else {
            			This.obj.bindInput = true;
            		}
            	});
            },
            update: function() {
            	this.obj.scrollbar.update();
            }
        }

        $.fn.extend({
            face: function(options) {
                return new Face($(this), options);
            }
        })
    })(MN, window, document);
    /**************************** END ****************************/
    
    /**************************** BEGIN ****************************/
    /*  
    * 多图预览上传组件  
    * Copyright (c) 2016/8/5 Han Wenbo  
    *  
    * 调用示例：  
    * H5_upload('../../servlet/AQ?s=uf', $('.file'), '', function(data) {  
    *    console.log(data);  
    * });  
    */  
    //;(function($, window, document, undefined) {
	    //样式  
	    $('head').append('<style>.upFileCtn{width:70%;background:#3d3f40;padding:10px;border-radius:5px;margin:10px auto;position:relative;text-align:center}.upFileItem{display:inline-block;padding:0 5px}.upFileImg{border:0;max-height:50px}.upFileName{color:#fff;font-size:12px;text-align:center;margin-bottom:5px}.upFileAbort{position:absolute;right:0;top:-10px;background:#3d3f40;color:#fff;border-radius:100px;font-size:12px;padding:4px;cursor:pointer}.upFileOuter{height:5px;background:#1a1a1a;position:relative;border-radius:5px;overflow:hidden}.upFileInner{display:inline-block;height:100%;background:#5e90d6;position:absolute;top:0;left:0}</style>');  
	    //无法预览base64  
	    var base64 = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABYCAYAAABiQnDAAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDIxIDc5LjE1NTc3MiwgMjAxNC8wMS8xMy0xOTo0NDowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTQgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkI1Q0NBQjg1NUExNzExRTY5RTEzREZFNTRENzc4RkFGIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkI1Q0NBQjg2NUExNzExRTY5RTEzREZFNTRENzc4RkFGIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6QjVDQ0FCODM1QTE3MTFFNjlFMTNERkU1NEQ3NzhGQUYiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6QjVDQ0FCODQ1QTE3MTFFNjlFMTNERkU1NEQ3NzhGQUYiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4+S+GgAAAGC0lEQVR42uyc2ys9WxzAZ7vnkvs1xAsKDxIexAOhlGd/zvmdP8eLlFI8SHlAEuUSItcQQrnk7vRZne8+s8dmX2ZfHPv7rdWePbPWrLU+63ub2TPbc3Jy8mEllngiebIkK/Hkr0ieLEU2ysvLfzW109NT2fzz7+ffqoHhy59IaWKiAowYxEQGGBGIiQ7QNUQF6BKiAnQJUQG6hKgAXUJUgC4hKkCXEBWgS4gK0CVEBegSogJ0CVEBuoSoAF1CVIAuISYMwLS0tGhA/EgYgLm5udGA+N9vIr9dUlJSrMLCwoidT35jiZsGPj4+um7/8RH/X2TjApCJ39zcWO/v72G1px3tf4LEBeDr66uBeH9/H1Z72tGe8yQkwKenJ1dmLO3lM6EA2jXv7e0tbA22a2JCAXTj+36iL4wYwLu7u2+1gWPX19c+ZktqEW5KYo/GnDdQ34wvKulRJE3z/PzcysrKsjIyMswkxdHjqzA3p+alp6eH1RftXl5efCAG6jszM/NnA2TwDPT29taUQOLxeEwbN33ZtY7F+apvN33FzISTkpKsvLy8oOtTlzY/va+YBhHMJz8/36z4d5pHHer+X/qK6bUwgy0pKTEmhm/CDzER/BK+C1OKlDbEsq+Y3kxg0Dk5OaZEPY2IYV8/5krkN4kCVIAKUAEqQBUFGC+J+49KJMDPz88mCeb+INe39iJXFPaSnJxskmV+ZYvmVYZqYCJoIBoUby1SDVSAClABqihABagAFaCKAlSAClABqihABagAFaBKMOKZn5//UAyqgXET7y396upqpRGCHB4eqgaqCSvAX+QDYyEPDw/mafqamppPx2ZnZ63S0lKrrq7OZz9P4zvfBUlNTTX7v3pVjGei/T1DfXFxYR0fH1stLS1me3Nz02ptbXX1BH/IALe3t63l5eWg6gKDwYrs7e1Za2tr1sbGhtXW1mYVFxd7j52cnFjZ2dmfzgG86enpT/uLioqsy8tLv/3SpwCU8Q4PD5v3SfjOcUDSZ0FBgVkQkdraWp/vEQfIQ9t2KAgDZEJVVVWf6tqlsbHRPNO8uLhotIfCYx0iV1dXZoLSFsCUgYEBrwajqfRv19SxsTHzH7AdHR1Bz+Pg4MA8R80nY5CXsQEYVQ2USTkBAs9pfl+1HxwcNNsTExM+73WgUaJVnEv62dra8r7gjPlzDBO0a+b+/r4pCNr2nVCPF3BYmNXVVbOvq6srPj4QrQi23tLSktXQ0OAFIyCRkZGRTyYvgmaJKaIt9reUmpqavCaHiQrE74R6LARm3tzcbE1OTlrr6+vGQqIKEJ+BCfkTJufPN4q5ibmiNV+BCsbnMobR0VHjMhBxCZgwZu8EWFlZaXwrGgt4nuZnH9vsE60Oxe+FDZBo5Zz40dGR1+y+84NoXW9vrwHChPwFI/aJD0SGhoYMIDTQHgBoV1ZW9mUQcY6ZgGHvy19QCvcPKUIC6C89AKBERCJaID/IccyZFZfF2NnZMb7Qbo6SrgDA2SfOH7ChCgsiPpWFlXOMj4/HJ5HGBADn1LpAMjMzYzQKmJgT8DAjfBATYz/Fn1mhve3t7T777FE0kDZS0GT6l+9xuRLBh+B70IavQj+O2RlkGDzAxLTRBgRnLjmf3Yz9WUFFRYWByycgiKicD4jsCyboEdXFB8YcIPDm5+cNCLTBn6ZQh6QZ/2MfPEk0k8QnAkz8GucQAPirQG+iA5KrCMwfF7K7u2sK+5yCqZKm0P/c3JxZdMYOfKSnp8eqr68PKoK7TmPoZGVlxaw6zt2+4vZEWC6z7Mk0ORftmCSAMWUEqM6AQl3JzcTk7AshVzVE1e7ubu/5pqamrP7+fq9pUpeCryaDoD7H8XuMUbSQBVtYWAhKi8MGKJ0wiM7OTp+EWqKjPTKKptl9FYFCJsc/CTFg/BpvVkqRqMnEqSuRHj/Jd2CdnZ2ZPuXSi9LX12csg36oR3uAsmiMhQUROPhYZ9RHk0OBh3hv6Qd7QxWIobzs7M+0A+Vc1KFE4jV9ifjh5nmBbqiGbMJu4ElqEkydSE04Wv+VoPcDFaAC/F13pMUpqqgGxlT+EWAAIaBk3UBJfHwAAAAASUVORK5CYII=';  
	    var fileData = [];//fileData 为数组  
	      
	    //上传方法  
		function H5_upload(url, maxNum, $trigger, $ctn, startcall, callback, type, typecall) {//url-上传接口 maxNum-单次最大上传数量 $trigger-触发上传的input $ctn-上传进度的显示框 startcall-开始上传时的回调 callback-上传结束后的回调  type-允许上传的文件格式，如：gif|jpeg|bmp|jpg|png typecall-不符合文件类型时的回调
	        //自动上传    
	        $trigger.on('change', function() {    
	            fileData = [];  
	            try {
	            	var len = maxNum ? (maxNum>$trigger[0].files.length?$trigger[0].files.length:maxNum) : $trigger[0].files.length;
	                for(var i=0; i<len; i++) {//IE9-不支持files    
	                    fileData[i] = $trigger[0].files[i];  
	                }  
	                autoUpload(url, $trigger, $ctn, startcall, callback, type, typecall);
	            }catch(e) {}
	              
	        });    
	    }  
	      
	    //自动上传  
	    function autoUpload(url, $trigger, $ctn, startcall, callback, type, typecall) {   
	        if(!fileData[0]) {    
	            return;    
	        }    

	        uploadFile({    
	            url: url,   
	            data: {    
	                file: fileData//fileData 为数组  
	            },    
	            beforeload: function(formData) {
	                var noSuit = [];// 不符合类型的文件

	                typeReg = new RegExp('\.'+ type, 'i');
	                for(var key in formData) {  
	                    var val = formData[key];  
	                    if(val instanceof Array) {//hack数组对象 

	                        for(var i=0,len=val.length; i<len; i++) { 
	                            if(typeReg.test(val[i].name)) {// 文件类型允许
	                            }else {// 文件类型禁止
	                                noSuit.push(val[i]);
	                                val[i] = [];
	                            }
	                        }  
	                    }
	                }
	                typecall && typecall(noSuit);  
	                return formData;
	            },
	            loadstart: function(e, ran, xhr) {   
	                startcall && startcall(ran);//开始时的回调

	                var $upFileCtn = $('<div class="'+ ran +' upFileCtn"></div>'),  
	                    $upFileAbort = $('<span class="upFileAbort">x</span>'),  
	                    $upFileOuter = $('<div class="upFileOuter"></div>'),  
	                    $upFileInner = $('<em class="upFileInner"></em>');  
	            
	                for(var i=0,len=fileData.length; i<len; i++) { 
	                    if(!(fileData[i] instanceof Array)) {
	                        var $upFileItem = $('<div class="upFileItem" size="'+ fileData[i].size +'"></div>'),  
	                            $upFileName = $('<p class="upFileName" size="'+ fileData[i].size +'" hasRead="0">'+ fileData[i].name +'</p>');  
	            
	                        $upFileName.appendTo($upFileItem);  
	                        $upFileItem.appendTo($upFileCtn);  
	            
	                        try {  
	                            var reader = new FileReader();//IE9-不支持FileReader  
	                            if(fileData[i].type.indexOf('image')+1) {//可预览  
	                                reader.readAsDataURL(fileData[i]);  
	                                reader.onload = function(e) {  
	                                    var $upFileImg = $('<img class="upFileImg" src="'+ e.target.result +'">');  
	                                    var $upFileName = $('.upFileName');  
	                                    for(var j=0,len=$upFileName.length; j<len; j++) {  
	                                        var $cur_upFileName = $upFileName.eq(j);  
	                                        if((e.total==$cur_upFileName.attr('size')) && !parseInt($cur_upFileName.attr('hasRead'))) {  
	                                            $cur_upFileName.attr('hasRead', '1').before($upFileImg);  
	                                            break;  
	                                        }  
	                                    }  
	                                }  
	                            }else {  
	                                var $upFileImg = $('<img class="upFileImg" src="'+ base64 +'">');  
	                                $upFileImg.insertBefore($upFileName);  
	                            }  
	                        }catch(e) {}  
	                    }
	                }  
	                   
	                $upFileCtn.append($upFileAbort);    
	                $upFileCtn.append($upFileOuter);    
	                $upFileOuter.append($upFileInner);    
	                ($ctn || $('body')).append($upFileCtn);  
	            
	                //取消上传    
	                $upFileAbort.on('click', function() {  
	                    xhr.abort();    
	                    $upFileCtn.remove();  
	                    $('.FA_'+ ran).parents('.MN_ask').remove();
	                });  
	                $trigger[0].value = null;//清空文件路径    
	            },    
	            progress: function(e, ran, xhr) { 
	                if (e.lengthComputable) {    
	                    var $upFileInner = $('.'+ ran +' em');    
	      
	                    $upFileInner.width(e.loaded/e.total*100 +'%');  
	                }    
	            },    
	            load: function(e, ran) {    
	                var $upFileCtn = $('.'+ ran).remove();  
	                callback && callback(JSON.parse(e.currentTarget.response), ran);  
	            }    
	        });    
	    }  
	      
	    //上传文件    
	    function uploadFile(options) {    
	        var form = new FormData(),//FormData 对象    
	            ran = ('ran'+ Math.random()).replace(/\./, ''),//唯一标识符   
	            formData = options.data;// 表单数据载体数组
	      
	        formData = options.beforeload(formData);

	        var formLen = false;
	        for(var key in formData) {  
	            var val = formData[key];  
	            if(val instanceof Array) {//hack数组对象  
	                for(var i=0,len=val.length; i<len; i++) {  
	            		if(!(val[i] instanceof Array)) {
	                    	form.append(key, val[i]);//增加表单数据   
	        				formLen = true;
	            		}
	                }  
	            }
	        }
	        if(formLen) {// 符合文件类型
	        	//创建 - 非IE6 - 第一步    
	        	if (window.XMLHttpRequest) {    
	        	    var xhr = new XMLHttpRequest();    
	        	} else { //IE6及其以下版本浏览器    
	        	    var xhr = new ActiveXObject('Microsoft.XMLHTTP');    
	        	}    
	        	
	        	xhr.open("post", options.url, true);    
	        	
	        	//开始传输    
	        	xhr.addEventListener("loadstart", function(e) {  
	        	    options.loadstart(e, ran, xhr);//xhr用于取消上传    
	        	});    
	        	//传输中    
	        	xhr.upload.addEventListener("progress", function(e) {    
	        	    options.progress(e, ran, xhr);    
	        	});    
	        	//传输成功    
	        	xhr.addEventListener("load", function(e) {    
	        	    options.load(e, ran);    
	        	});    
	        	
	        	xhr.send(form);
	        }
	    }
    //})(MN, window, document);
    /**************************** END ****************************/

    /**************************** BEGIN ****************************/
    /**
    * jquery.faqrobot.js plugin 1.2.0
    *
    * Copyright (c) 2016/3/20 Han Wenbo
    *
    *   %aId% <=> aId -> 答案编号
    *   %cluid% <=> cluid -> 上下文编号
    *   %kfPic% <=> this.robot.kfPic -> 客服图片
    *   %khPic% <=> this.robot.khPic -> 客户图片
    *   %robotName% <=> this.robot.robotName -> 机器人姓名
    *   %helloWord% <=> data.webConfig.helloWord -> 欢迎语
    *   %formatDate% <=> this.getFormatDate() -> 格式时间
    *   %ansCon% <=> data.robotAnswer[0].ansCon -> 机器人答案
    *   %gusListHtml% <=> gusListHtml -> 推荐问题结构
    *   %relateListHtml% <=> relateListHtml -> 相关问题结构
    *   %commentHtml% <=> commentHtml -> 问题满意结构 
    *
    **/

    ;(function($, window, document, undefined) {
        
        var plugName = "faqrobot",
            defaults = {
    			sysNum: 1000000,//客户唯一标识
                jid: 0,//自定义客服客户图标
    			robotName: 'FaqRobot',//机器人名称
    			logoUrl: '',//logo地址
    			logoId: 'logoId',//logo地址
    			webNameId: 'webNameId',//公司名称Id
    			intelTitleChange: false,// 智能聊天是否修改标题
    			intelTitle: '智能机器人',// 智能聊天时的标题
    			artiTitleChange: false,// 人工时是否修改标题
    			artiTitle: '人工客服',// 人工时的标题
        		titleInsteadId: 'title',// 代替标题Id
    			webName: '云问科技',//公司名称
    			webInfoId: 'webInfoId',//公司简介Id
    			webInfo: '唯一的不同是处处不同',//公司简介
                userInfoId: 'userInfoId',//用户信息Id
                kfPic: '',  //客服图标
                khPic: '', //客户图标
                kfHtml: [
                    '<div class="MN_answer_welcome MN_answer"><div class="MN_kftime">%formatDate%</div><div class="MN_kfName">%robotName%</div><div class="MN_kfCtn"><img class="MN_kfImg" src="%kfPic%"><i class="MN_kfTriangle1 MN_triangle"></i><i class="MN_kfTriangle2 MN_triangle"></i>%helloWord%</div></div>',//欢迎语组合
                    '<div class="MN_helpful"><span class="MN_reasonSend">提交</span><span class="MN_yes">满意</span><span class="MN_no">不满意</span></div>',//是否满意组合
                    '<div class="MN_answer" aId="%aId%" cluid="%cluid%"><div class="MN_kftime">%formatDate%</div><div class="MN_kfName">%robotName%</div><div class="MN_kfCtn"><img class="MN_kfImg" src="%kfPic%"><i class="MN_kfTriangle1 MN_triangle"></i><i class="MN_kfTriangle2 MN_triangle"></i>%ansCon%%gusListHtml%%relateListHtml%%commentHtml%</div></div>'//回答组合
                ],//客服结构(所有的属性和%xxx%都必须存在)
                khHtml: '<div class="MN_ask"><div class="MN_khtime">%formatDate%</div><div class="MN_khName">我</div><div class="MN_khCtn"><img class="MN_khImg" src="%khPic%"><i class="MN_khTriangle1 MN_triangle"></i><i class="MN_khTriangle2 MN_triangle"></i>%askWord%</div></div>',//客户结构
                formatDate: '%hour%:%minute%:%second% %year%-%month%-%date%',//配置时间格式(默认10:42:52 2016-06-24)
                topQueId: 'topQueId',//热门、常见问题Id
                newQueId: 'newQueId',//新增问题Id
                recommendQueId: 'recommendQueId',//推荐问题Id
                quickServId: 'quickServId',//快捷服务Id
                recommendLinkId: 'recommendLinkId',//推荐咨询Id
                maxQueNum: 100,//最多展示问题条数
                maxQueLen: 100,//最多展示问题字数
    			showMsgId: 'showMsgId',//展示信息Id
    			chatCtnId: 'chatCtnId',//聊天展示Id
    			inputCtnId: 'inputCtnId',//输入框Id
    			sendBtnId: 'sendBtnId',//发送按钮Id
                tipWordId: 'tipWordId',//输入框提示语Id
                tipWord: '请输入您要咨询的问题',//输入框提示语
                remainWordId: 'remainWordId',
                remainWordNum: '100',
                commentFormId: 'commentFormId',//评论框formId
                commentInputCtnId: 'commentInputCtnId',//评论输入框Id
                commentSendBtnId: 'commentSendBtnId',//评论发送按钮Id
                commentTipWordId: 'commentTipWordId',//评论输入框提示语Id
                commentTipWord: '输入您的意见，以便我们提升服务水平和质量！',//评论输入框提示语
        		artiSearchId: 'artiSearch',//智能搜索
            	artiSearchCallback: function(data) {},//智能搜索的回调
                leaveMsgFormId: 'leaveMsgFormId',//留言框formId
                leaveMsgInputCtnId: 'leaveMsgInputCtnId',//留言输入框Id
                leaveMsgSendBtnId: 'leaveMsgSendBtnId',//留言发送按钮Id
                leaveMsgTipWordId: 'leaveMsgTipWordId',//留言输入框提示语Id
                leaveMsgTipWord: '输入您的建议，我们会尽快为您处理！',//留言输入框提示语
                cosFontId: 'cosFontId',//选择字体Id(待完善)
                clearBtnId: 'clearBtnId',//清除按钮Id
                closeBtnId: 'closeBtnId',//关闭聊天页面
                poweredCtnId: 'poweredCtnId',//技术支持Id
                thirdUrl: '',//未登录第三方账户，跳转至此链接
    			sourceId: 0,//客户来源
    			ajaxType: 'get',//请求类型
    			jsonp: false,//是否跨域
            	prefix: '../../',//地址前缀(可能是绝对路径)
            	jPlayer: 'false',//是否使用高级媒体播放器
            	entranceWords: ['wd', 'q'],// 各搜索引擎的关键字段 百度-wd，360、360极速、chrome-q
            	leaveQue: {// 未知问题已回复
            		open: false//是否启用功能

            	},
            	autoSkip: {//手机不能访问pc页面
            		open: false,//是否启用功能
            		chatUrl: 'h5chat'// 默认跳转的页面
            	},
            	upFileModule: {//上传文件模块
            		open: false,//是否启用功能
            		maxNum: 0,//最大上传数量，0为不限制
            		triggerId: 'triggerId',//触发上传按钮
            		startcall: function() {},//上传文件前的回调
            		callback: function() {}//上传文件后的回调
            	},
            	faceModule: {//表情模块
    				open: false,//是否启用功能
    				faceObj: {}//表情插件实例
            	},
            	starModule: {//星座模块
    				open: false,//是否启用功能
            		triggerId: 'triggerId'//触发星座按钮
            	},
            	weatherModule: {//天气模块
    				open: false,//是否启用功能
            		triggerId: 'triggerId'//触发天气按钮
            	},
            	helpfulModule: {//答案满意度模块
            	    open: true,//是否启用功能
            	    yesCallback: function($obj, msg) {//满意的回调
                		$obj.text(msg || '感谢您的评价！');
            	    },
            	    noCallback: function($obj, msg) {//不满意的回调
            	    	if(window.uselessReasonItems) {
            	    	    if(window.uselessReasonItems[0]) {
            	    	        $('.MN_reasonSend', $obj).css('display', 'inline-block').siblings().hide();

            	    	        var html = '';
            	    	        for(var i=0; i<window.uselessReasonItems.length; i++) {
            	    	            var checked = '';
            	    	            if(!i) {
            	    	                checked = 'checked';
            	    	            }
            	    	            html += '<div class="MN_reasonItem"><input id="MN_reason'+ i +'" type="radio" value="'+ window.uselessReasonItems[i].tId +'" name="reasonType" '+ checked +'><label for="MN_reason'+ i +'">'+ window.uselessReasonItems[i].reason +'</label></div>';
            	    	        }
            	    	        $obj.before('<form class="MN_reasonForm"><div class="MN_reasonCtn"><p class="MN_reasonTitle">非常抱歉没能解决您的问题，请反馈未解决原因，我们会根据您的反馈进行优化与完善！</p>'+ html +'<div class="MN_reasonContent"><textarea name="content" placeholder="您的意见"></textarea></div></div></form>');
            	    	    }else {
            	    	        $obj.text(msg || '感谢您的评价！');
            	    	    }
            	    	}else {
            	    	    $obj.text(msg || '感谢您的评价！');
            	    	}
            	    }
            	},
            	configModule: {//配置模块
            	    open: false,//是否启用功能
            	    block1: '.block1',//块1-头部
            	    block2: '.block2',//块2-聊天显示框
            	    block3: '.block3',//块3-输入框
            	    block4: '.block4',//块4-功能框
            	    bannerCtn: '.bannerCtn',//导航元素
            	    customCtn: '.customCtn'//自定义元素
            	},
            	historyModule: {//历史记录模块
            	    open: true//是否启用功能
            	},
            	autoOffline: true,//是否会自动下线
            	autoOnline: true,//是否会自动上线
        		noView: ['.MN_kfImg', '.MN_khImg', '.FA_upFileNoImg', '.msg-item-wrapper img'],//图片放大预览 all/全不能预览 或者 指定不能预览的class['.MN_kfImg', '.MN_khImg', '.FA_upFileNoImg']
            	initCallback: function(data) {//初始化基本信息的回调
            		window.uselessReasonItems = data.uselessReasonItems;
            	},
            	sendCallback: function(question) {},//点击发送按钮的回调
            	getCallback: function(answer, data) {},//获取到答案后的回调 answer-文本答案 data-全部数据
            	commentCallback: function() {},//评论后的回调
            	leaveMsgCallback: function() {}//留言后的回调
            };

        window.Faqrobot = Faqrobot;

        function Faqrobot(options) {
            this.name = plugName;
            this.defaults = defaults;
            this._options = options;
            this.options = $.extend({}, defaults, options);
            this.robot = {};//机器人基本信息
            this.$obj = {};//元素集合
            this.isOffline = false;//当前是否下线
            this.init();
        }

        Faqrobot.prototype = {
            init: function() {
                this.getHrefInfo();//获取网址->网址有jid或sysNum，则相应配置参数失效
                this.initOffline();//关闭、刷新网页前请求下线->s=offline
                if(!this.options.jsonp) {//不跨域
                	this.initBaseInfo();//初始化基本信息->s=p->logo
                }
                this.initInput();//输入框准备->剩余字数/提示语
                this.needPerson();//转人工->s=needperson
                this.askFlwQue();//回答引导问题->s=aq
                this.askGuideQue();//回答引导问题->s=aq
                if(this.options.upFileModule.open) {
                	this.upFile();//上传文件->s=uf
                }
                this.queComment();//问题满意度评价->s=addulc
                this.initComment();//服务满意评价度准备->提示语
                this.initLeaveMsg();//留言准备->提示语
                this.timeRequest();//定时请求->s=kl
                this.scrollbar();//调用滚动条插件
                this.clearRecord();//清除聊天记录
                this.closeWeb();//关闭网页
                if(this.options.starModule.open) {
                	this.star();//星座模块
                }
                if(this.options.weatherModule.open) {
                	this.weather();//天气模块
                }
                this.preview();
                if(!MN_Base.isPC()) {// 手机端可以复制
                	this.longTap();
            	}
				    //调整功能宽度(防止某些功能隐藏)
				this.kuaijie();
            },
			//计算h5下面的快捷服务
			kuaijie:function(){
				var showNum = 0;
				for(var i=0,len=$('.editCtn_com').length; i<len; i++) {
					if($('.editCtn_com').eq(i).css('display') != 'none') {
						showNum++;
					}
				}
				$('.editCtn_com').width(100/showNum +'%');
			},
            // 配置窗口
            configWin: function(data) {
            	if(data.chatLink) {// 存在jid
            		if(data.chatLink.chatConfig) {// 选择配置窗口
            			if(data.chatLink.chatConfig.id) {// 不使用默认皮肤
            				this.bgColor(data);// 展示背景颜色
            				this.listBanner(data);// 导航链接
            				this.listChannel(data);// 自定义频道
            			}
            		}
            	}
            },
            // 展示城市和天气
            showPlay: function(data) {
            	var html = '';
            	if(!data.chatLink.chatConfig.showCity) {// 0-显示
            		html += '<span class="intro">南京市</span>';
            	}
            	if(!data.chatLink.chatConfig.showWeather) {// 0-显示
            		html += '<span class="intro">今天天气很好！</span>';
            	}
            	return html;
            },
            // 展示背景颜色
            bgColor: function(data) {
            	if(data.chatLink.chatConfig) {
            		if(data.chatLink.chatConfig.bgColor) {
            			var bgColor = JSON.parse(data.chatLink.chatConfig.bgColor);
		            	if(bgColor) {
		            		for(var i=0; i<4; i++) {
			            		if(bgColor[i]) {
			            			for(var j=0; j<JSON.parse(bgColor[i])[1].length; j++) {
			            				$(this.options.configModule['block'+ (i+1)]).css('background', JSON.parse(bgColor[i])[1][j]);
			            			}
			            		}
		            		}
		            	}
            		}
            	}
            },
            // 导航链接
            listBanner: function(data) {
            	var html = '';
            	if(data.chatLink.chatConfig.listBanner) {
            		if(data.chatLink.chatConfig.listBanner[0]) {
            			for(var i=0; i<data.chatLink.chatConfig.listBanner.length; i++) {
            				html += '<a class="MN_bannerCtn" href="'+ data.chatLink.chatConfig.listBanner[i].link +'" target="_blank">'+ (data.chatLink.chatConfig.listBanner[i].pic?'<img class="MN_bannerImg" src="'+ data.chatLink.chatConfig.listBanner[i].pic +'">':'') +'<p class="MN_bannerDesc" '+ (data.chatLink.chatConfig.listBanner[i].pic?'':'style="width: 60px; height: 78px; line-height: 78px;"') +'>'+ data.chatLink.chatConfig.listBanner[i].text +'</p></a>';
            			}
            		}
            	}
            	$(this.options.configModule.bannerCtn).empty().append(html);
            },
            // 自定义频道
            listChannel: function(data) {
            	var html = '';
            	if(data.chatLink.chatConfig.listChannel) {
            		if(data.chatLink.chatConfig.listChannel[0]) {
            			if(data.chatLink.chatConfig.channelShowType) {// 1-纵向
            				var _html = '';
            				for(var i=0; i<data.chatLink.chatConfig.listChannel.length; i++) {
            					_html += '<div class="itemHead1 itemHead"><p>'+ data.chatLink.chatConfig.listChannel[i].channelName +'</p></div>';
            					if(data.chatLink.chatConfig.listChannel[i].contentShowType) {// 1-纵向
            						var __html = '';
            						if(data.chatLink.chatConfig.listChannel[i].values[0]) {
            							for(var j=0; j<data.chatLink.chatConfig.listChannel[i].values.length; j++) {
            								if(data.chatLink.chatConfig.listChannel[i].values[j].valueType==3) {// 富文本
												__html += '<div class="" style="padding: 15px 20px;">'+ data.chatLink.chatConfig.listChannel[i].values[j].text +'</div>';
            								}else {
												__html += '<div class="MN_queList">'+ (data.chatLink.chatConfig.listChannel[i].values[j].pic?'<img class="MN_queListImg" src="'+ data.chatLink.chatConfig.listChannel[i].values[j].pic +'" style="margin-right: 10px;">':'<span class="MN_queListIndex">'+ (j+1) +' </span>') +'<span class="MN_guideQue" sid="0" title="'+ data.chatLink.chatConfig.listChannel[i].values[j].text +'">'+ data.chatLink.chatConfig.listChannel[i].values[j].text +'</span></div>';
											}
            							}
            						}
            						_html += '<div class="itemCtx">'+ __html +'</div>';
            					}else {// 0-横向
            						var __html = '';
            						if(data.chatLink.chatConfig.listChannel[i].values[0]) {
            							for(var j=0; j<data.chatLink.chatConfig.listChannel[i].values.length; j++) {
											__html += '<div class="MN_quickLink MN_queList" style="padding: 0;">'+ (data.chatLink.chatConfig.listChannel[i].values[j].pic?'<img class="MN_queListImg" src="'+ data.chatLink.chatConfig.listChannel[i].values[j].pic +'">':'') +'<p class="MN_guideQue" title="'+ data.chatLink.chatConfig.listChannel[i].values[j].text +'">'+ data.chatLink.chatConfig.listChannel[i].values[j].text +'</p></div>';
            							}
            						}
            						_html += '<div class="itemCtx">'+ __html +'</div>';
            					}
            				}
            			}else {// 0-横向
            				var _html = '',
            					html_ = '';
            				for(var i=0; i<data.chatLink.chatConfig.listChannel.length; i++) {
            					_html += '<div class="itemHead1 itemHead" ran="'+ i +'" style="width: '+ 100/data.chatLink.chatConfig.listChannel.length +'%; float: left; cursor: pointer;"><p>'+ data.chatLink.chatConfig.listChannel[i].channelName +'</p></div>';

            					if(data.chatLink.chatConfig.listChannel[i].contentShowType) {// 1-纵向
            						var __html = '';
            						if(data.chatLink.chatConfig.listChannel[i].values[0]) {
            							for(var j=0; j<data.chatLink.chatConfig.listChannel[i].values.length; j++) {
            								if(data.chatLink.chatConfig.listChannel[i].values[j].valueType==3) {// 富文本
												__html += '<div class="" style="padding: 15px 20px;">'+ data.chatLink.chatConfig.listChannel[i].values[j].text +'</div>';
            								}else {
												__html += '<div class="MN_queList">'+ (data.chatLink.chatConfig.listChannel[i].values[j].pic?'<img class="MN_queListImg" src="'+ data.chatLink.chatConfig.listChannel[i].values[j].pic +'" style="margin-right: 10px;">':'<span class="MN_queListIndex">'+ (j+1) +' </span>') +'<span class="MN_guideQue" sid="0" title="'+ data.chatLink.chatConfig.listChannel[i].values[j].text +'">'+ data.chatLink.chatConfig.listChannel[i].values[j].text +'</span></div>';
            								}

            							}
            						}
            						html_ += '<div class="itemCtx" ran="'+ i +'" '+ (i&&'style="display: none;"') +'>'+ __html +'</div>';
            					}else {// 0-横向
            						var __html = '';
            						if(data.chatLink.chatConfig.listChannel[i].values[0]) {
            							for(var j=0; j<data.chatLink.chatConfig.listChannel[i].values.length; j++) {
											__html += '<div class="MN_quickLink MN_queList" style="padding: 0;">'+ (data.chatLink.chatConfig.listChannel[i].values[j].pic?'<img class="MN_queListImg" src="'+ data.chatLink.chatConfig.listChannel[i].values[j].pic +'">':'') +'<p class="MN_guideQue" title="'+ data.chatLink.chatConfig.listChannel[i].values[j].text +'">'+ data.chatLink.chatConfig.listChannel[i].values[j].text +'</p></div>';
            							}
            						}
            						html_ += '<div class="itemCtx" ran="'+ i +'" '+ (i&&'style="display: none;"') +'>'+ __html +'</div>';
            					}
            				}
            				$('body').on('click', '.itemHead', function() {
            					$('.itemCtx[ran='+ $(this).attr('ran') +']').show().siblings('.itemCtx').hide();
            				});
            			}
            		}
            	}
            	$(this.options.configModule.customCtn).empty().append((_html || '') + (html_ || ''));
            },
            //获取网址->网址有jid或sysNum，则相应配置参数失效
            getHrefInfo: function() {
                var This = this,
                	search = window.location.search,
                    sysNum = search.match(/sysNum=(\d*[a-zA-Z]*[^?|^#|^&]*)/),
                    jid = search.match(/jid=(\d+)/),
                    sourceId = search.match(/sourceId=(\d+)/),
                    element_id = search.match(/element_id=(\d+)/);
                    
                if(sysNum) {
                    This.options.sysNum = sysNum[1];
                }
                if(jid) {
                    This.options.jid = jid[1];
                }
                if(sourceId) {
                    This.options.sourceId = sourceId[1];
                }
                if(element_id) {
                    This.options.element_id = element_id[1];
                }
                
            	//手机不能访问pc页面
            	if(This.options.autoSkip.open) {
            		if(!sourceId && !MN_Base.isPC()) {
            			This.showMsg('3s后将跳转至手机聊天页面', function() {
            				location.href = location.href.replace(/\/[^\.\/]+\.html/, '\/'+ This.options.autoSkip.chatUrl +'\.html');
            			})
            		}
            	}
            },
            //初始化基本信息->s=p->logo/欢迎语/快捷服务/热门问题/用户信息
            initBaseInfo: function() {
            	var This = this;
            	$('#'+ This.options.inputCtnId).attr('readonly', 'readonly');
            	This.request({
            		params: {
                        s: 'p',
                        jid: This.options.jid,
            			sourceId: This.options.sourceId//0->网页 1->微信 3->h5
            		},
            		callback: function(data) {
                		This.timerGo = true;//控制定时请求
            			This.options.initCallback(data);
            			$('#'+ This.options.inputCtnId).removeAttr('readonly');
            			This.setLogo(data);//设置logo->客服图标/客户图标
            			This.sayHello(data);//欢迎语
                        This.quickService(data);//快捷服务
                        This.recommendLink(data);//推荐资讯
                        This.topQue(data);//热门、常见问题
                        This.newQue(data);//新增问题
                        This.userInfo(data);//用户信息
                        This.poweredBy(data);//技术支持
                        if(This.options.configModule.open) {
                			This.configWin(data);// 配置窗口
                        }
                        if(This.options.leaveQue.open) {
                			This.leaveQue(data);// 未知问题已回复
                        }
                        if(This.options.historyModule.open) {
                			This.historyRecord();// 历史记录
                			This.recordEvent();// 历史记录
                        }
            		}
            	});
            },
            // 未知问题已回复
            leaveQue: function(data) {
            	if(data.leaveQue) {
            		if(data.leaveQue[0]) {
            			$('.MN_answer_welcome .MN_kfCtn').append('<div class="MN_leaveQueCtn"><div class="MN_leaveQueTop"><span>这里有您的留言，</span><span class="MN_lookLeaveQue">点击查看</span></div><div class="MN_leaveQueBottom"></div></div>')

            			var html = '';
            			for(var i=0; i<data.leaveQue.length; i++) {
            				html += '<div class="MN_leaveQueItem"><div class="MN_leaveQueItemQue">问题'+ (data.leaveQue.length==1?'':i+1) +'：'+ data.leaveQue[i].question +'</div><div class="MN_leaveQueItemAns">答案：'+ data.leaveQue[i].answer +'</div></div>';
            			}
            			$('.MN_leaveQueBottom').append(html).hide();
            		}
            	}

    	    	var This = this;
    	    	$('#'+ This.options.chatCtnId).on('click.FA', '.MN_lookLeaveQue', function() {
    	    		if($(this).text().indexOf('查看')+1) {
    	    			$('.MN_leaveQueBottom').show();
    	    			$(this).text('点击关闭');
    	    		}else {
    	    			$('.MN_leaveQueBottom').hide();
    	    			$(this).text('点击查看');
    	    		}
    	    	});
            },
            // 历史记录
            historyRecord: function() {
            	var This = this;
            	This.recordIndex = This.recordIndex ? ++This.recordIndex : 1;

        		This.request({
        			params: {
        	            s: 'hl',
        	            index: This.recordIndex
        			},
        			callback: function(data) {
        	    		if(data.status) {
        	    		}else {
        	    			if(data.list) {
        	    				if(data.list[0]) {
        	    					var html = '',
        	    						recordData = '';
        	    					This.scrollbar.options.autoBottom = false;// 防止自动滚动到底部
        	    					$('.MN_record').remove();// 防抖动
        	    					$('#'+ This.options.chatCtnId).prepend('<div class="MN_record">查看更多消息</div>');
        	    					for(var i=data.list.length-1; i>=0; i--) {
        	    						var _data = JSON.parse('{"robotAnswer":[{"ansCon":"'+ (data.list[i].reply || '').replace(/"/g, '\'').replace(/\n+/g, '').replace(/[\r\n]/g,'') +'", "time": "'+ data.list[i].dateTime +'"}]}');

        	    						recordData += (data.list[i].question?This.customHtml(This.replaceFace(data.list[i].question), data.list[i].dateTime):'') + ((data.list[i].reply || '')?This.robotHtml(_data):'');
        	    					}
        	    					$('.MN_record').data('recordData', recordData.replace(/"/g, '\'').replace(/\n+/g, '').replace(/(href=)(['"])([\S]+)(['""])(\s)/g, '$1'+ '\"' +'$3'+ '\"' +'$5'));// 防止字符串里含有带引号的链接
        	    				}else {
        	    					This.scrollbar.options.autoBottom = false;// 防止自动滚动到底部
        	    					$('.MN_record').remove();// 防抖动
        	    				}
        	    			}else {
        	    				This.scrollbar.options.autoBottom = false;// 防止自动滚动到底部
        	    				$('.MN_record').remove();// 防抖动
        	    			}
        	    		}
        			}
        		});
            },
            // 查看历史记录
            recordEvent: function() {
            	var This = this;
            	$('#'+ This.options.chatCtnId).on('click.FA', '.MN_record', function() {
            		This.historyRecord();
            		var oldH = This.$obj.$chatCtnId.outerHeight();
        	    	This.$obj.$chatCtnId.prepend($(this).data('recordData'));
            		var newH = This.$obj.$chatCtnId.outerHeight();
            		This.scrollbar.scrollTo(newH-oldH, true);// css 方式滚动
            	});
            },
            //设置logo->客服图标/客户图标
            setLogo: function(data) {
            	var $logoId = this.$obj.$logoId = $('#'+ this.options.logoId),
            		$webNameId = this.$obj.$webNameId = $('#'+ this.options.webNameId),
            		$webInfoId = this.$obj.$webInfoId = $('#'+ this.options.webInfoId);

                this.robot.kfPic = data.skinConfig ? data.skinConfig.kfPic : this.options.prefix+this.options.kfPic,//客服图标
                this.robot.khPic = data.skinConfig ? data.skinConfig.khPic : this.options.prefix+this.options.khPic;//客户图标
            	$logoId.attr({'src': data.webConfig.logoUrl || this.options.prefix+this.options.logoUrl});
        		$webNameId.text(data.webConfig.webName || this.options.webName);
        		$webInfoId.text(MN_Base.addDots($.trim(MN_Base.getPlainText(data.webConfig.info || this.options.webInfo)), 20));

        		this.intelTitle = this.options.intelTitle || data.webConfig.webName || this.options.webName;// 智能标题
        		this.artiTitle = this.options.artiTitle;// 人工标题

        		if(this.options.intelTitleChange) {// 是否修改标题
        			this.titleChange(this.intelTitle);
        		}
            },
            // 改变标题
            titleChange: function(title) {
            	if(!this.options.jsonp) {// 非跨域
            		if($('#'+ this.options.titleInsteadId)[0]) {
            			$('#'+ this.options.titleInsteadId).text(title);
            		}else {
            			document.title = title;
            		}
            	}
            	if(!MN_Base.isPC()) {
	            	//hack在微信等webview中无法修改document.title的情况
	            	var $iframe = $('<iframe src="'+ (this.options.prefix+this.options.logoUrl) +'"></iframe>').hide();
	            	$iframe.on('load',function() {
	            	    setTimeout(function() {
	            	        $iframe.off('load').remove();
	            	    }, 0);
	            	}).appendTo('body');
            	}
            },
            //欢迎语
            sayHello: function(data) {
                this.$obj.$chatCtnId.empty().append(this.robotHtml(data));
            },
            scrollbarUpdate: function() {
            	this.scrollbar.scrollTo('bottom');
            },
            //机器人结构
            robotHtml: function(data, index) {
            	index = index || 0;//默认渲染机器人的第一句话
                var html = '',
                    baseRobotHtml = '',
                    gusListHtml = '',
                    relateListHtml = '',
                    commentHtml = '',
                    aId = data.robotAnswer&&data.robotAnswer[index] ? data.robotAnswer[index].aId : 0,//
                    cluid = data.robotAnswer&&data.robotAnswer[index] ? data.robotAnswer[index].cluid : 0;//查询问题上下文

                //机器人整体结构
                if(data.webConfig) {//欢迎语结构
                    this.robot.robotName = data.webConfig.robotName;//机器人名字
                    //%%
                    var helloWord = data.webConfig.helloWord;
                    if(data.chatLink) {
                    	if(data.chatLink.helloWord) {
                    		helloWord = data.chatLink.helloWord;
                    	}
                    }
                    html = this.options.kfHtml[0].replace(/%aId%/g, aId).replace(/%cluid%/g, cluid).replace(/%kfPic%/g, this.robot.kfPic).replace(/%robotName%/g, this.robot.robotName).replace(/%helloWord%/g, helloWord).replace(/%formatDate%/g, this.getFormatDate());
                }else if(data.robotAnswer) {//机器人答案
                	if(data.robotAnswer[index]) {
                		this.artiSearch(data.robotAnswer[index]);//智能搜索
	                    //智能推荐相关问题结构->.MN_guideQue必须存在，搜索#.MN_guideQue查看原因
	                    var has_ydWords = false;//是否已有上提示
	                    if(data.robotAnswer[index].gusList) {
    	                    if(!data.robotAnswer[index].relateList[0] && data.robotAnswer[index].gusList[0]) {
	                    		this.robot.guide = true;
    	                        var gusList = data.robotAnswer[index].gusList;
    	                        if(gusList.length>0){
    								gusListHtml= data.robotAnswer[index].gusWords?(data.robotAnswer[index].gusWords.ydWords||'<p>您是否要咨询以下问题？</p>'):'<p>您是否要咨询以下问题？</p>';
    	                        	has_ydWords = true;
    							}
    							for(var i=0; i<gusList.length; i++) {
    	                            gusListHtml += '<div class="MN_gusList"><span>'+ (i+1) +'. </span><span class="MN_guideQue" sId="'+ gusList[i].solutionId +'" title="'+ gusList[i].seedQuestion.question +'">'+ gusList[i].seedQuestion.question +'</span></div>';
    	                        }
    	                    }
	                    }

	                    var gusWords = '';

	                    //智能推荐相关问题的上下提示
	                    if(data.robotAnswer[index].gusWords) {
		                    if(!data.robotAnswer[index].relateList[0] && data.robotAnswer[index].gusWords) {
		                        var ydWords = '';
		                        gusWords = data.robotAnswer[index].gusWords;

		                        if(!has_ydWords) {
		                        	ydWords = '<p>'+ (gusWords.ydWords || '您是否要咨询以下问题？') +'</p>';
		                        }
		                        gusListHtml = ydWords + gusListHtml +'<p>'+ (gusWords.afterWords || '') +'</p>';
		                    }
	                	}

	                    //手动设置相关问题结构->.MN_guideQue必须存在，搜索#.MN_guideQue查看原因
	                    if(data.robotAnswer[index].relateList) {
	                    	if(data.robotAnswer[index].relateList[0]) {
	                    		this.robot.guide = true;
	                    	    var relateList = data.robotAnswer[index].relateList,
	                    	    	ydWords = '';

	                    	    if(!has_ydWords) {
	                    	    	ydWords = '<p>'+ (gusWords.ydWords || '您是否要咨询以下问题？') +'</p>';
	                    	    }
	                    	    for(var i=0; i<relateList.length; i++) {
	                    	        relateListHtml += '<div class="MN_relateList"><span>'+ (i+1) +'. </span><span class="MN_guideQue" sId="'+ relateList[i].solutionId +'" title="'+ relateList[i].question +'">'+ relateList[i].question +'</span></div>';
	                    	    }
		                        relateListHtml = ydWords + relateListHtml +'<p>'+ (gusWords.afterWords || '') +'</p>';
	                    	}
	                    }

	                    //是否满意结构
	                    if(data.robotAnswer[index].aId>1000) {//aId!=0->需要评价
	                        //%%
	                        commentHtml = this.options.kfHtml[1];
	                    }
	                    var ansCon = data.robotAnswer[index].ansCon;
                    	//%%
                    	html = this.options.kfHtml[2].replace(/%kfPic%/g, this.robot.kfPic).replace(/%robotName%/g, this.robot.robotName).replace(/%ansCon%/g, this.replaceFace(ansCon)).replace(/%formatDate%/g, data.robotAnswer[index].time?this.getFormatDate(data.robotAnswer[index].time):this.getFormatDate()).replace(/%gusListHtml%/g, gusListHtml).replace(/%relateListHtml%/g, relateListHtml).replace(/%commentHtml%/g, commentHtml).replace(/%aId%/g, aId).replace(/%cluid%/g, cluid);
                	}
                }else {//彻底下线
                    this.showMsg(data.message);//请重新刷新访问
                }

                return html;
            },
            //客户结构
            customHtml: function(word, time) {
                var html = '';

                html = this.options.khHtml.replace(/%khPic%/g, this.robot.khPic).replace(/%askWord%/g, word).replace(/%formatDate%/g, time?this.getFormatDate(time):this.getFormatDate());
                return html;
            },
            //快捷服务
            quickService: function(data) {
                if(!this._options.quickServId) {//不配置直接返回
                    return;
                }

                var $quickServId = this.$obj.$quickServId = $('#'+ this.options.quickServId),//快捷服务Id
                    quickLink = data.quickLink,
                    str = '';
                    
                //快捷服务结构
                if(quickLink && quickLink[0]) {
                    for(var i=0; i<quickLink.length; i++) {
                        str += '<a class="MN_quickLink" href="'+ quickLink[i].linkUrl +'" target="_blank"><img src="'+ quickLink[i].imageUrl +'"><p>'+ quickLink[i].name +'</p></a>';
                    }
                    $quickServId.empty().append(str);
                }else{
					$quickServId.empty().append('服务正在建设中~').css({'padding-top':'10px','text-align':'center'});
				}
                
            },
            //推荐资讯
            recommendLink: function(data) {
                if(!this._options.recommendLinkId) {//不配置直接返回
                    return;
                }
                var $recommendLinkId = this.$obj.$recommendLinkId = $('#'+ this.options.recommendLinkId),//推荐资讯Id
                    chatFormSugLink = data.chatFormSugLink,
                    str = '';
                    
                //推荐资讯结构
                if(chatFormSugLink[0]) {
                    for(var i=0; i<chatFormSugLink.length; i++) {
                        if(chatFormSugLink[i].type) {//1->图片
                            str += '<a class="MN_imgRecommendLink" href="'+ chatFormSugLink[i].linkurl +'" target="_blank"><img src="'+ chatFormSugLink[i].content +'"></a>';
                        }else {//0->文字
                            str += '<a class="MN_wordRecommendLink" href="'+ chatFormSugLink[i].linkurl +'" target="_blank"><p>'+ chatFormSugLink[i].content +'</p></a>';
                        }
                    }
                    $recommendLinkId.empty().append(str);
                }
                
            },
            //问题结构->热门、常见/新增/推荐
            queHtml: function(queList) {
                var str = '';

                //问题结构->.MN_guideQue必须存在，搜索#.MN_guideQue查看原因
                if(queList[0]) {
                    for(var i=0; i<queList.length; i++) {
                        if(i+1 > this.options.maxQueNum) {//限制条数
                            break;
                        }
                        var question = queList[i].question,
                            maxQueLen = this._options.maxQueLen;

                        if(maxQueLen && maxQueLen<question.length) {//限制字数
                            question = question.substr(0, this.options.maxQueLen) +'...';
                        }

                        str += '<div class="MN_queList"><span class="MN_queListIndex">'+ (i+1) +' </span><span class="MN_guideQue" sId="'+ (queList[i].solutionId+1) +'" title="'+ queList[i].question +'">'+ question +'</span></div>';
                    }
                }else{
					str += '<div class="MN_queList">知识正在建设中，感谢您的光临~</div>';
				}
                return str;
            },
            //热门、常见问题
            topQue: function(data) {
                if(!this._options.topQueId) {//不配置直接返回
                    return;
                }

                var $topQueId = this.$obj.$topQueId = $('#'+ this.options.topQueId),//热门问题Id
                    topAsk = data.topAsk;

                this.queHtml(topAsk) && $topQueId.empty().append(this.queHtml(topAsk));
            },
            //新增问题
            newQue: function(data) {
                if(!this._options.newQueId) {//不配置直接返回
                    return;
                }

                var $newQueId = this.$obj.$newQueId = $('#'+ this.options.newQueId),//新增问题Id
                    newAdd = data.newAdd;

                this.queHtml(newAdd) && $newQueId.empty().append(this.queHtml(newAdd));
            },
            //推荐问题
            recommendQue: function(data, index) {
            	index = index ? index : 0;//默认渲染机器人的第一句话
                if(!this._options.recommendQueId) {//不配置直接返回
                    return;
                }

                var $recommendQueId = this.$obj.$recommendQueId = $('#'+ this.options.recommendQueId),//推荐问题Id
                    relateLessList = data.robotAnswer[index].relateLessList;

                this.queHtml(relateLessList) && $recommendQueId.empty().append(this.queHtml(relateLessList));
            },
            //用户信息
            userInfo: function (data) {
                if(!this._options.userInfoId) {//不配置直接返回
                    return;
                }

                var $userInfoId = this.$obj.$userInfoId = $('#'+ this.options.userInfoId),//用户信息Id
                    str = '';

                var info = data.webConfig.info || (data.company?data.company.info:''),//简介
                	webName = data.webConfig.webName || (data.company?data.company.webName:''),//名称
                	serviceQq = data.webConfig.serviceQq || (data.company?data.company.qq:''),//QQ
                	serviceTel = data.webConfig.serviceTel || (data.company?data.company.tel:''),//电话
                	webSite = data.webConfig.webSite || (data.company?data.company.webSite:''),//网址
                	address = (data.company?data.company.address:''),//地址
                	notice = (data.company?data.company.notice:''),//通知
                	openTime = (data.company?data.company.openTime:'');//工作时间

                if(info) {
                    str += '<div class="MN_info MN_userInfo"><span>简介：'+ info +'</span></div>';
                }
                if(webName) {
                    str += '<div class="MN_webName MN_userInfo"><span>名称：'+ webName +'</span></div>';
                }
                if(serviceQq) {
                    str += '<div class="MN_serviceQq MN_userInfo"><span>QQ：'+ serviceQq +'</span></div>';
                }
                if(serviceTel) {
                    str += '<div class="MN_serviceTel MN_userInfo"><span>电话：'+ serviceTel +'</span></div>';
                }
                if(webSite) {
                    str += '<div class="MN_webSite MN_userInfo"><span>网址：'+ webSite +'</span></div>';
                }
                if(address) {
                    str += '<div class="MN_address MN_userInfo"><span>地址：'+ address +'</span></div>';
                }
                if(notice) {
                    str += '<div class="MN_notice MN_userInfo"><span>通知：'+ notice +'</span></div>';
                }
                if(openTime) {
                    str += '<div class="MN_openTime MN_userInfo"><span>工作时间：'+ openTime +'</span></div>';
                }

                $userInfoId.empty().append(str);

            },
            //调用滚动条插件
            scrollbar: function() {
            	this.scrollbar = this.$obj.$chatCtnId.parent().scrollbar({
            		// autoBottom: true,//内容改变，是否自动滚动到底部
    				stopCallback: function(top, direction) {//停止时事件回调
    					if(top && direction<0) {
    						$('.MN_record').trigger('click.FA');
    					}
    				}
            	});
            },
            //发送问题->s=aq
            askQue: function() {
                var This = this,
                    question = This.robot._html || This.$obj.$inputCtnId.val().replace(/\n+/g, '');//// 当 This.robot._html 不为空时，走模拟问题

        	    This.scrollbar.options.autoBottom = true;// 恢复自动滚动到底部
                if(question) {//问题不为空
                    This.options.sendCallback(question);//点击发送按钮的回调
                    if(question.indexOf('%我要发文件%')+1) {//发文件
                    	This.$obj.$chatCtnId.append(This.customHtml('<div class="FA_'+ question.match(/ran\d+/) +' FA_upFileCtn">loading...</div>'));//添加我的话
                    }else {//问问题
                    	This.$obj.$chatCtnId.append(This.customHtml(This.replaceFace(This.xssWhiteList(filterXSS(question)))));//添加我的话
                    	var $MN_ask = $('.MN_ask:last'),
                    		$MN_guideQues = $MN_ask.prevAll('.MN_answer').find('.MN_guideQue'),
                    		$lastGuide = $MN_guideQues.eq(-1);
                    	if($lastGuide[0]) {
                    		if(/^\d+$/.test(question)) {// 如果是数字，可能是上下文
                    			var $curGuide = $lastGuide.parents('.MN_answer').find('.MN_guideQue:eq('+ (+question-1) +')');
                    			if(This.robot.guide && $curGuide[0]) {// 处于上下文逻辑中且有这个选项
                    				//question = $curGuide.text();
                    			}
                    		}else {
	                    		This.robot.guide = false;// 退出引导
                    		}
                    	}

                    	if(This.robot.html) {// 当 This.robot.html 不为空时，走模拟答案
                    		data = JSON.parse('{"robotAnswer":[{"ansCon":"'+ (This.robot.html).replace(/"/g, '\'').replace(/\s/g, '') +'"}]}');
                    		This.$obj.$chatCtnId.append(This.robotHtml(data));//添加机器人的话
                    		This.options.getCallback(This.getCurrectWords(This.robotHtml(data)), data);//获取到答案后的回调
                    		This.recommendQue(data);//推荐问题
                    	}else {
                    		This.request({
                    		    params: {
                    		        s: 'aq',
                    		        question: This.replaceFace(question, true)
                    		    },
                    		    callback: function(data) {
                    		    	This.askQueBack(data);// 获取发送的回调
                    		    }
                    		});
                    	}
                    }
                    This.robot.html = This.robot._html = '';
                    This.$obj.$inputCtnId.val('');//清空输入框
                    $(document).trigger('keyup');
                }
            },
            // 语义表情转字符表情
            wordToFace: function(data) {

            },
            // 获取发送的回调
            askQueBack: function(data) {
                var This = this,
                	robotHtml = This.robotHtml(data),
                	hasCtn = false;// 是否有内容

		    	if(data.robotAnswer) {
		    		if(data.robotAnswer[0]) {
		    			if(data.robotAnswer[0].ansCon) {
	    					hasCtn = true;
		    			}
	    				if(data.robotAnswer[0].gusList) {
		    				if(data.robotAnswer[0].gusList[0]) {
		    					hasCtn = true;
		    				}
	    				}
	    				if(data.robotAnswer[0].relateLessList) {
		    				if(data.robotAnswer[0].relateLessList[0]) {
		    					hasCtn = true;
		    				}
	    				}
	    				if(data.robotAnswer[0].relateList) {
		    				if(data.robotAnswer[0].relateList[0]) {
		    					hasCtn = true;
		    				}
	    				}
		    		}
		    	}
		    	if(hasCtn) {
	    			This.$obj.$chatCtnId.append(robotHtml);//添加机器人的话
					This.options.getCallback(This.getCurrectWords(robotHtml), data);//获取到答案后的回调
		    	}
	    		This.recommendQue(data);//推荐问题
	    		MN_Base.imageLoad(robotHtml, function() {// 匹配html中所有图片资源，加载完毕执行
	    			This.scrollbar.update();
	    			This.scrollbarUpdate();
	    		});
            },
            // 获取正确的语音文本
            getCurrectWords: function(html) {
            	var $html = $(html);
            	$html.find('.MN_kfName, .MN_helpful, .MN_kftime').remove();
            	return MN_Base.getPlainText($html[0]?$html[0].outerHTML:'');
            },
            // 智能搜索
            artiSearch: function(data) {// data == data.robotAnswer[index]
            	this.options.artiSearchCallback(data);// 智能搜索的回调
            	if(data.fullTextSearch) {
            		var html = '';
            		// 文档
        			html += '<p class="MN_titleSearch">站内搜索</p>';
            		if(data.document) {
            			if(data.document[0]) {
            				for(var i=0; i<data.document.length; i++) {
            					html += '<a href="'+ data.document[i].url +'" target="_blank" title="'+ data.document[i].title +'"><div class="MN_innerSearchCtn"><span class="MN_innerSearch">'+ MN_Base.addDots(data.document[i].title, 15) +'</span><span class="MN_classifySearch">'+ MN_Base.addDots(data.document[i].classify, 5) +'</span></div></a>';
            				}
            			}else {
            				html += '<p class="MN_noSearch">无结果</p>';
            			}
            		}else {
        				html += '<p class="MN_noSearch">无搜索结果</p>';
        			}
            		// 文章
        			html += '<p class="MN_titleSearch">网络搜索</p>';
            		if(data.crawlers) {
            			if(data.crawlers[0]) {
            				for(var i=0; i<data.crawlers.length; i++) {
            					html += '<a href="'+ data.crawlers[i].url +'" target="_blank"><p class="MN_outerSearchName MN_outerSearch" title="'+ data.crawlers[i].webName +'">'+ MN_Base.addDots(data.crawlers[i].webName, 15) +'</p><p class="MN_authorSearch" title="'+ data.crawlers[i].author +'">'+ MN_Base.addDots(data.crawlers[i].author, 15) +'</p><p class="MN_outerSearchSummary MN_outerSearch" title="'+ data.crawlers[i].summary +'">'+ MN_Base.addDots(data.crawlers[i].summary, 40) +'</p></a>';
            				}
            			}else {
            				html += '<p class="MN_noSearch">无结果</p>';
            			}
            		}else {
        				html += '<p class="MN_noSearch">无搜索结果</p>';
        			}
    		    	$('#'+ this.options.artiSearchId).empty().append(html);
            	}
            },
            //防止<>被xss过滤
            xssWhiteList: function(data) {
            	var whiteArr = [
            		["流泪", "/::<"],
        			["憨笑", "/::>"],
        			["左哼哼", "/:<@"],
        			["右哼哼", "/:@>"],
        			["鄙视", "/:>-|"],
        			["西瓜", "/:<W>"],
        			["飞吻", "/:<L>"],
        			["怄火", "/:<O>"],
        			["左太极", "/:<&"],
        			["右太极", "/:&>"]
        		],
        			_whiteArr = JSON.parse(JSON.stringify(whiteArr).replace(/</g, '&lt;').replace(/>/g, '&gt;'));
        			
        		for(var i in _whiteArr) {
        			while(data.indexOf(_whiteArr[i][1])+1) {
        				data = data.replace(_whiteArr[i][1], whiteArr[i][1]);
        			}
        		}
            	return data;
            },
            //转义表情
            replaceFace: function(data, bool) {
				if(this.options.faceModule.open) {
					var src = this.options.faceModule.faceObj.options.src,
						faceType = this.options.faceModule.faceObj.obj.faceType,
						face = this.options.faceModule.faceObj.obj.face;

					for(var i in face) {
						if(i == faceType[0]) {
							for(var j=0; j<face[i].length; j++) {//考虑到含有特殊字符，不用正则
								while(data.indexOf(face[i][j][0])+1) {
									var index = data.indexOf(face[i][j][0]),
										len = face[i][j][0].length,
										str1 = data.substr(0, index),
										str2 = data.substr(index+len);
									data = str1 + (bool?face[i][j][1]:('<img src="'+ src + j +'.'+ faceType[2] +'">')) + str2;
								}
								if(!bool) {
									while(data.indexOf(face[i][j][1])+1) {
										var index = data.indexOf(face[i][j][1]),
											len = face[i][j][1].length,
											str1 = data.substr(0, index),
											str2 = data.substr(index+len);
										data = str1 +'<img src="'+ src + j +'.'+ faceType[2] +'">'+ str2;
									}
								}
							}
						}
					}
				}
            	return data;
            },
            //转人工->s=needperson
            needPerson: function() {
                var This = this;

                $('body').on('click.FA', '.faqevent', function() {//.faqevent是后台约定，无法改变
                    var $This = $(this);

                    This.$obj.$chatCtnId.append(This.customHtml('转人工'));//添加我的话
                    This.request({
                        params: {
                            s: 'needperson'
                        },
                        callback: function(data) {
                            This.$obj.$chatCtnId.append(This.robotHtml(data));//添加机器人的话
                        }
                    });
                    return false;
                });
            },
            //回答流程问题->s=getflw
            askFlwQue: function() {
                var This = this;

                $('body').on('click.FA', '.wflink', function() {//.wflink是后台约定，无法改变
                    var $This = $(this);

                    This.$obj.$chatCtnId.append(This.customHtml($This.text()));//添加我的话
                    This.request({
                        params: {
                            s: 'getflw',
                            fid: $This.attr('rel'),
                            question: $This.text()
                        },
                        callback: function(data) {
                            This.$obj.$chatCtnId.append(This.robotHtml(data));//添加机器人的话
                        }
                    });
                });
            },
            //回答引导问题->s=aq
            askGuideQue: function() {
                var This = this;

                $('body').on('click.FA', '.MN_queList, .MN_gusList, .MN_gusList, .MN_relateList', function() {//#.MN_guideQue的父级是必不可少的
                	This.robot.guide = false;// 退出引导
                	This.scrollbar.options.autoBottom = true;// 恢复自动滚动到底部
                    var $This = $(this).find('.MN_guideQue');

                    This.$obj.$chatCtnId.append(This.customHtml($This.attr('title')));//添加我的话
                    This.request({
                        params: {
                            s: 'aq',
                            sId: $This.attr('sId'),
                            question: $This.attr('title')
                        },
                        callback: function(data) {
                            This.$obj.$chatCtnId.append(This.robotHtml(data));//添加机器人的话
                    		This.options.getCallback(This.getCurrectWords(This.robotHtml(data)), data);//获取到答案后的回调
                        }
                    });
                });
            },
            //问题满意度评价->s=addulc
            queComment: function() {
                var This = this;

                This.$obj.$chatCtnId.on('click.FA', '.MN_yes, .MN_no', function() {
                    var $This = $(this),
                        s = 'addufc';//满意

                    if($This.is('.MN_no')) {
                        s = 'addulc';//不满意
                    }

                    This.request({
                        params: {
                            s: s,
                            aId: $This.parents('.MN_answer').attr('aId'),
                            cluid: $This.parents('.MN_answer').attr('cluid')
                        },
                        callback: function(data) {
                        	window[s +'Tip'] = data.message;
                        	if(This.options.helpfulModule.open) {
                        		var $helpful = $This.parents('.MN_helpful');
                        		if(s=='addufc') {
                        			This.options.helpfulModule.yesCallback($helpful, data.message);
                        		}else {
                        			This.options.helpfulModule.noCallback($helpful, data.message);
                        		}
                        	}else {
                            	$This.parents('.MN_helpful').text(data.message || '感谢您的评价！');
                        	}
                        }
                    });
                });

                // 答案不满意原因
                This.$obj.$chatCtnId.on('click.FA', '.MN_reasonSend', function() {
                    var $This = $(this),
                    	$form = $This.parents('.MN_helpful').prev('.MN_reasonForm');
                    This.request({
                        params: {
                        	s: 'ulreason',
                        	aId: $This.parents('.MN_answer').attr('aId'),
                        	cluid: $This.parents('.MN_answer').attr('cluid')
                        },
                        $formObj: $form,
                        callback: function(data) {
                        	if(!data.status) {
                        		$form.remove();
                            	$This.parents('.MN_helpful').text(window.addulcTip || '感谢您的评价！');
                        	}
                        }
                    });
                });
                
            },
            //上传文件->s=uf
            upFile: function() {
            	var This = this;
            	var $file = $('<input type="file" class="FA_file" multiple="multiple">').css({
            		'padding': 100,
            		'opacity': 0
            	}).appendTo($('#'+ this.options.upFileModule.triggerId));

            	H5_upload('../../servlet/AQ?s=uf', this.options.upFileModule.maxNum, $file, this.$obj.$chatCtnId, function(ran) {
    		    	$('#'+ This.options.inputCtnId).val('%我要发文件%'+ ran);
        			$('#'+ This.options.sendBtnId).trigger('click.FA');
        			This.options.upFileModule.startcall && This.options.upFileModule.startcall();
            	}, function(data, ran) {  
                    This.askQueBack(data);// 获取发送的回调
            		if(data.status) {
            			This.showMsg(data.message);
            			$('.FA_'+ ran).parents('.MN_ask').remove();
            		}else {
            			var html = '';
            			for(var i=0,len=data.sendUrlMsg.length; i<len; i++) {
            				switch(data.sendUrlMsg[i].type){
            					case 0://非图片
            						html += '<div class="FA_upFileItem"><a href="'+ data.sendUrlMsg[i].url +'" target="_blank"><img class="FA_upFileImg FA_upFileNoImg" src="'+ base64 +'"><p class="FA_upFileName">'+ data.sendUrlMsg[i].name +'</p></a></div>';
            						break;
            					case 1://图片，不加a，防止跳转
            						html += '<div class="FA_upFileItem"><img class="FA_upFileImg" src="'+ data.sendUrlMsg[i].url +'"><p class="FA_upFileName">'+ data.sendUrlMsg[i].name +'</p></div>';
            						break;
            				}
            			}
            			$('.FA_'+ ran).empty().append(html);
            		}
            	}, 'gif|jpeg|bmp|jpg|png', function(noSuit) {
            		if(noSuit[0]) {
	                	This.showMsg(noSuit.length +'个文件不符合图片类型');
            		}
            	});
            },
            //星座模块
            star: function() {
            	var This = this;

            	$('head').append('<link rel="stylesheet" href="images/star.css?t='+ new Date() +'">');
            	$('#'+ This.options.starModule.triggerId).on('click.FA', function() {
            		This.robot.html = '';
	                This.$obj.$inputCtnId.val('星座分析');
	                var starArr = ['白羊座', '金牛座', '双子座', '巨蟹座', '狮子座', '处女座', '天秤座', '天蝎座', '射手座', '摩羯座', '水瓶座', '双鱼座' ];

	                for(var i=0; i<12; i++) {
	                	This.robot.html += '<span class="FA_starCtn" title="'+ starArr[i] +'"><i class="FA_icon-star icon-star'+ (i+1) +'"></i><p class="FA_star">'+ starArr[i] +'</p></span>';
	                }
	                This.$obj.$sendBtnId.trigger('click.FA');
            	});

            	This.$obj.$chatCtnId.on('click', '.FA_starCtn', function() {
            		var $This = $(this);
            		This.$obj.$inputCtnId.val($This.attr('title'));
	                This.request({
	                	prefix: 'http://webchat.faqrobot.org/servlet/api/apiservice',
	            		dataType: 'jsonp',
	                    params: {
	                        key: 'jiandanwentichaxun',
	                        state: 'constellation',
	                        consName: $This.attr('title'),
	                        type: 'today'
	                    },
	                    callback: function(data) {
	                    	if(data.result == 200) {//y
    		            		This.robot.html = '<div class="FA_starCtn_float">'+ $This[0].outerHTML +'<span class="FA_starCtn_down">'+ data.response+ '</span></div>';
    			                This.$obj.$sendBtnId.trigger('click.FA');
	                    	}
	                    }
	                });
            	});
            },
            //天气模块
            weather: function() {
            	var This = this;
            	$('#'+ This.options.weatherModule.triggerId).on('click.FA', function() {
            		if(This.robot.ip) {
            			This.getWeather(This.robot.ip);
            		}else {
            			This.request({//获取ip
            				prefix: 'http://chaxun.1616.net/s.php',
            				dataType: 'jsonp',
            			    params: {
            			        type: 'ip',
            			        output: 'json'
            			    },
            			    callback: function(data) {
            			    	This.robot.ip = data.Ip;
            			    	This.getWeather(This.robot.ip);
            			    }
            			});
            		}
	                
            	});

            	$(This.$obj.$chatCtnId, '.FA_star').on('click', function() {
            		
            	});
            },
            getWeather: function(ip) {
            	var This = this;
                This.$obj.$inputCtnId.val('今天天气怎么样？');
                This.request({
                	prefix: 'http://webchat.faqrobot.org/servlet/api/apiservice',
            		dataType: 'jsonp',
                    params: {
                        key: 'jiandanwentichaxun',
                        state: 'weather',
                        ip: This.robot.ip,
                        type: 'json'
                    },
                    callback: function(data) {
	                    if(data.result == 100) {//y
	                    	if(data.list[0]) {
	                    		var picUrl = data.list[0].dayPictureUrl;
	                    		if(This.isNight() == 'night') {//黑夜
	                    			picUrl = data.list[0].nightPictureUrl;
	                    		}
    		            		This.robot.html = '<div class="FA_weather"><img src="'+ picUrl +'"><p>'+ data.city +' '+ data.list[0].weather + data.list[0].temperature +'</p><p>'+ data.sug +'</p></div>';

    			                //点击发送
    			                This.$obj.$sendBtnId.trigger('click.FA');
	                    	}
                    	}
                    }
                });
            },
            //技术支持
            poweredBy: function(data) {
                var $poweredCtnId = this.$obj.$poweredCtnId = $('#'+ this.options.poweredCtnId);//技术支持框

                if(data.webConfig.level >= 3) {
                    $poweredCtnId.remove();
                }
            },
            //输入框准备->剩余字数/提示语
            initInput: function() {
                var This = this,
                    $inputCtnId = This.$obj.$inputCtnId = $('#'+ This.options.inputCtnId),//输入框
                    $tipWordId = This.$obj.$tipWordId = $('#'+ This.options.tipWordId),//提示语
                    $remainWordId = This.$obj.$remainWordId = $('#'+ This.options.remainWordId),//剩余字数
                    $sendBtnId = This.$obj.$sendBtnId = $('#'+ This.options.sendBtnId),//发送按钮
                    $chatCtnId = This.$obj.$chatCtnId = $('#'+ This.options.chatCtnId);//聊天显示框

                //预处理
                $tipWordId.text(This.options.tipWord);
                $remainWordId.text(This.options.remainWordNum);

                //判断浏览器类型
                var isIE = false,
                    browser = This.myBrowser();

                if (browser == "IE") {
                    isIE = true;
                    $tipWordId.show();
                }else {
                    isIE = false;
                	$inputCtnId.attr({'placeholder': This.options.tipWord});
                    $tipWordId.hide();
                }

                //键盘事件
                $(document).on('keyup.FA', function(e) {
                    This.remainWord($inputCtnId, $tipWordId, $remainWordId);
                    var isInputCtn = $(document.activeElement).is('#'+ This.options.inputCtnId);

                    if(e.keyCode==13 && isInputCtn) {//Enter键发送
                        This.askQue();
                    }
                });

                //文本框改变事件
                $inputCtnId.on('input.FA, propertychange.FA', function(e) {
                    $(document).trigger('keyup');
                    $tipWordId.hide();
                });
				// 快捷发送欢迎语(防止键盘拉起)
				$('body').on('click.FA', '.welcomeWords', function() {
					This.robot._html = $(this).text();
					This.askQue();
				});	

                //鼠标事件
                $inputCtnId.on('focus.FA, blur.FA', function(e) {
                    if(isIE) {
                        if(e.type == 'focus') {
                        	if($(this).val()) {
	                            $(document).trigger('keyup');
	                            $tipWordId.hide();
                        	}
                        }else {
                        	if(!$(this).val()) {
                            	$tipWordId.show();
                        	}
                        }
                    }
                });
                $tipWordId.on('click.FA', function(e) {
                    $inputCtnId.trigger('focus');
                });

        		//点击发送
                $sendBtnId.on('click.FA', function() {
                    This.askQue();
                	setTimeout(function(){
                		$inputCtnId.focus();
                	}, 50);
                });
            },
            //服务满意评价度准备->提示语
            initComment: function() {
                var This = this,
                    $commentFormId = This.$obj.$commentFormId = $('#'+ This.options.commentFormId),//评论框
                    $commentInputCtnId = This.$obj.$commentInputCtnId = $('#'+ This.options.commentInputCtnId),//评论输入框
                    $commentTipWordId = This.$obj.$commentTipWordId = $('#'+ This.options.commentTipWordId),//评论输入框提示语
                    $commentSendBtnId = This.$obj.$commentSendBtnId = $('#'+ This.options.commentSendBtnId);//评论发送按钮

                //预处理
                $commentTipWordId.text(This.options.commentTipWord);

                //判断浏览器类型
                var isIE = false,
                    browser = This.myBrowser();

                if (browser == "IE") {
                    isIE = true;
                    $commentTipWordId.show();
                }else {
                    isIE = false;
                	$commentInputCtnId.attr({'placeholder': This.options.commentTipWord});
                    $commentTipWordId.hide();
                }

                
                $commentInputCtnId.on('input.FA, propertychange.FA', function(e) {
                    $(document).trigger('keyup');
                    $commentTipWordId.hide();
                });

                //鼠标事件
                $commentInputCtnId.on('focus.FA, blur.FA', function(e) {
                    if(isIE) {
                        if(e.type == 'focus') {
                        	if($(this).val()) {
	                            $(document).trigger('keyup');
	                            $commentTipWordId.hide();
                        	}
                        }else {
                        	if(!$(this).val()) {
                            	$commentTipWordId.show();
                        	}
                        }
                    }
                });
                $commentTipWordId.on('click.FA', function(e) {
                    $commentInputCtnId.trigger('focus');
                });

                //点击发送
                $commentSendBtnId.on('click.FA', function() {
                    This.servComment();
                    window.uuid = '';
                });
            },
            //服务满意度评价->s=fadeback
            servComment: function() {
                var This = this,
                    sub = '',
                    $inputs = $('input[type=checkbox]', This.$obj.$commentFormId);

                for(var i=0; i<$inputs.length; i++) {
                    var $input = $inputs.eq(i);

                    if($input.prop('checked')) {
                        sub += $input.val() + ',';
                    }
                }

                var options = {
                    callback: function(data) {
                        if(data.status) {
                        	This.showMsg(data.message);
                        }else {
                        	This.options.commentCallback(data);

                        	if(MN_Base.isPC()) {
	                        	//询问框
	                        	layer.msg(data.message +'您是否还有其他问题？', {
									time: 20000, //20s后自动关闭
									btn: ['继续问答', '关闭'],
	    							area: This.getSuitSize(),
									cancel: function() {// 关闭当前页面
	                        			This.closeWebPage();
									}
	                        	});
            	            }else {
	                        	layer.msg(data.message);
            	            }
                        }
                    }
                }

                if(window.uuid) {// 客服要求客户评价
                	options = $.extend(true, options, {
                		url: 'Comment/CommentSatisfaction',
                		params: {
                			uuid: window.uuid,
                			status: $('[name=level]', This.$obj.$commentFormId).val(),
                			reason: $('[name=content]', This.$obj.$commentFormId).val()
                		}
                	})
                }else {
                	options = $.extend(true, options, {
                		params: {
                		    s: 'fadeback',
                		    sub: sub//多个原因集合(必需参数)
                		},
                    	$formObj: $('#'+ This.options.commentFormId)//被序列化的form表单
                	})
                }

                This.request(options);
            },
            //留言准备->提示语
            initLeaveMsg: function() {
                var This = this,
                    $leaveMsgFormId = This.$obj.$leaveMsgFormId = $('#'+ This.options.leaveMsgFormId),//评论框
                    $leaveMsgInputCtnId = This.$obj.$leaveMsgInputCtnId = $('#'+ This.options.leaveMsgInputCtnId),//评论输入框
                    $leaveMsgTipWordId = This.$obj.$leaveMsgTipWordId = $('#'+ This.options.leaveMsgTipWordId),//评论输入框提示语
                    $leaveMsgSendBtnId = This.$obj.$leaveMsgSendBtnId = $('#'+ This.options.leaveMsgSendBtnId);//评论发送按钮

                //预处理
                $leaveMsgTipWordId.text(This.options.leaveMsgTipWord);

                //判断浏览器类型
                var isIE = false,
                    browser = This.myBrowser();

                if (browser == "IE") {
                    isIE = true;
                    $leaveMsgTipWordId.show();
                }else {
                    isIE = false;
                	$leaveMsgInputCtnId.attr({'placeholder': This.options.leaveMsgTipWord});
                    $leaveMsgTipWordId.hide();
                }

                //鼠标事件
                $leaveMsgInputCtnId.on('focus.FA, blur.FA', function(e) {
                    if(isIE) {
                        if(e.type == 'focus') {
                        	if($(this).val()) {
	                            $(document).trigger('keyup');
	                            $leaveMsgTipWordId.hide();
                        	}
                        }else {
                        	if(!$(this).val()) {
                            	$leaveMsgTipWordId.show();
                        	}
                        }
                    }
                });
                $leaveMsgTipWordId.on('click.FA', function(e) {
                    $leaveMsgInputCtnId.trigger('focus');
                });

                //点击发送
                $leaveMsgSendBtnId.on('click.FA', function() {
                    This.servLeaveMsg();
                });
            },
            //留言->s=leavemsg
            servLeaveMsg: function() {
                var This = this;

                This.request({
                    params: {
                        s: 'leavemsg'
                    },
                    $formObj: $('#'+ This.options.leaveMsgFormId),//被序列化的form表单
                    callback: function(data) {
                        This.showMsg(data.message);
                        if(!data.status) {
                        	This.options.leaveMsgCallback();
                        }
                    }
                });
            },
            //是否开始计时
            beginCount: function(bool) {
                this.timerGo = bool;

            	if(bool) {//开始定时请求
        			this.initBaseInfo();//初始化基本信息->s=p->logo
            	}else {
                    this.offline();
            	}
            },
            //定时请求->s=kl
            timeRequest: function() {
                var This = this,
					timer = null,
					isArti = _isArti = false,
					isOnly = true;

                This.tspan = 2000;//请求间隔
				This.mouseIsOn = true;
				var oldX = '';
                $(document).on('mousemove.FA touchstart.FA', function(e) {
                	/*var newX = e.clientX;
                	if(oldX == newX) {
                	}else {// 移动了*/
	            		if(!This.mouseIsOn) {
							This.mouseIsOn = true;
	                		resetTimer();
	            		}
                	/*}
					oldX = newX;*/
                });

                resetTimer();
                function resetTimer() {
                	clearInterval(timer);
                    timer = setInterval(function() {
                    	if(This.timerGo) {//阻塞请求
                    		if(This.mouseIsOn) {
                    			if(This.tspan >= 2000*1000) {
                    				if(isOnly) {
		        		    			This.request({
		        		    				params: {
		        		    		            s: 'p',
		        		    		            jid: This.options.jid,
		        		    					sourceId: This.options.sourceId//0->网页 1->微信 3->h5
		        		    				},
				    						callback: function(data) {
                    							isOnly = true;
		        								This.tspan = 2000;//请求间隔
		        		            			resetTimer();
				    						}
		        		    			});
                    				}
                    				isOnly = false;
                    			}else {
		                    		This.request({
		                    		    params: {
		                    		        s: 'kl'
		                    		    },
		                    		    callback: function(data) {
		                    		    	if(data.nowState==3 || data.nowState==5) {// 人工聊天
												isArti = true;
                		    					if(This.options.intelTitleChange) {// 是否修改标题
                		    						if(This.options.artiTitleChange) {// 人工时是否修改标题
														if(isArti != _isArti) {
															This.titleChange(This.artiTitle);
															_isArti = isArti;
														}
                		    							
                		    						}
                		    					}
												$('.sendPicCtn').show();
												This.kuaijie();
		                    		    	}else {// 智能聊天
												isArti = false;
	                    		    			if(This.options.intelTitleChange) {// 是否修改标题
													if(isArti != _isArti) {
														This.titleChange(This.intelTitle);
														_isArti = isArti;
													}
	                    		    			}
												$('.sendPicCtn').hide();
												This.kuaijie();
		                    		    	}
											
											if(data.robotAnswer) {
		                    		    		if(data.robotAnswer[0]) {
		                    		    			for(var i=0,len=data.robotAnswer.length; i<len; i++) {
		                    		    				if(data.robotAnswer[i].ansCon) {
			                		    	        		This.$obj.$chatCtnId.append(This.robotHtml(data, i));//添加机器人的话
                    										This.options.getCallback(This.getCurrectWords(This.robotHtml(data, i)), data);//获取到答案后的回调
			            		    	        			This.recommendQue(data, i);//推荐问题
		                    		    				}
		                    		    			}
		                    		    		}
											}

		                    		        clearInterval(timer);
		                    		        if(data.status == -1) {// 接口返回状态错误时，重新上线

		                    		        }else if(data.tspan < 2000) {
		                    		        	This.tspan = data.tspan*1000;
		                    		            resetTimer();
		                    		            This.timerGo = true;
		                    		            return;
		                    		        }// else 
		                    		        This.mouseIsOn = false;
		                    		        This.tspan = data.tspan*1000;
                    						This.offline();// 先下线才能再次上线
		                    		    }
		                    		});
                    			}
                    		}
                    	}
                    }, This.tspan==2000*1000?100:This.tspan);
                }
            },
            //图片放大预览
            preview: function() {
            	var This = this;
            	$('<div class="FA_previewCtn"><span  class="FA_previewClose">×</span><i  class="FA_previewMask"></i><div class="FA_previewImgCtn"></div></div>').hide().appendTo('body');
            	$('.FA_previewImgCtn, .FA_previewClose').on('click.FA', function(e) {
	            		if(e.target.className != 'FA_previewImg') {
	            			$('.FA_previewCtn').hide().find('img').remove();
	            		}
            		});
            	if(This.options.noView != 'all') {
            		This.$obj.$chatCtnId.on('click.FA', 'img', function(e) {
            			var noViewArr = [];
            			for(var i=0; i<This.options.noView.length; i++) {
            				noViewArr[i] = 1;
            				if($(e.target).is(This.options.noView[i])) {
            					noViewArr[i] = 0;
            				}
            			}
            			if(!(noViewArr.join('').indexOf('0')+1)) {
	            			MN_Base.getNaturalSize(e.target, function(w, h) {
	            				var $img = $('<img class="FA_previewImg" src="'+ e.target.src +'">').css({
	            					width: w,
	            					height: h,
	            					marginTop: -h/2,
	            					marginLeft: -w/2,
	            					maxWidth: 'none'
	            				}).appendTo($('.FA_previewImgCtn'));
	            				$('.FA_previewCtn').show();
	            				if(w > $(window).width()) {
	            					$img.css({
	            						marginLeft: 0,
	            						left: 0
	            					});
	            				}
	            				if(h > $(window).height()) {
	            					$img.css({
	            						marginTop: 0,
	            						top: 0
	            					});
	            				}
	            			})
            			}
            		});
            	}
            },
            // 长按事件
            longTap: function() {
            	$('body').swipe({
            		longTap: function(event, target) {
            			var parent = ($(target).is('.MN_khCtn')?target:$(target).parents('.MN_khCtn')[0]) || ($(target).is('.MN_kfCtn')?target:$(target).parents('.MN_kfCtn')[0]);
            			if(parent) {
            				var html = '';
            				if($(parent).is('.MN_khCtn')) {// 客户
            					html += '<div class="MN_tip MN_khTip"><i class="MN_khTriangle3 MN_triangle"></i><div class="MN_tipCtn"><span class="MN_tipCopy MN_tipBtn">复制</span><span class="MN_tipDel MN_tipBtn">删除</span></div></div>'
            				}else {// 客服
            					html += '<div class="MN_tip MN_kfTip"><i class="MN_kfTriangle4 MN_triangle"></i><div class="MN_tipCtn"><span class="MN_tipCopy MN_tipBtn">复制</span><span class="MN_tipDel MN_tipBtn">删除</span></div></div>'
            				}
            				$(parent).select().append(html);
            				$('.MN_tipBtn:last', parent).addClass('MN_tipLast');
            			}
            		}
            	})

            	// 操作
            	$('body').on('click.FA', function(e) {
            		// 复制
            		if($(e.target).is('.MN_tipCopy')) {

            		}
            		$('.MN_tip').remove();
            	})
            },
            //关闭网页
            closeWeb: function() {
                if(!this._options.closeBtnId) {//不配置直接返回
                    return;
                }

                var This = this,
                    $closeBtnId = this.$obj.$closeBtnId = $('#'+ this.options.closeBtnId);//关闭按钮

                $closeBtnId.on('click.FA', function() {
                    if(confirm('确定要退出吗？')) {
                        This.closeWebPage();
                    }
                });
            },
            //关闭浏览器兼容
            closeWebPage: function() {
                if (navigator.userAgent.indexOf("MSIE") > 0) {
                    if (navigator.userAgent.indexOf("MSIE 6.0") > 0) {
                        window.opener = null;
                        window.close();
                    } else {
                        window.open('', '_top');
                        window.top.close();
                    }
                } else if (navigator.userAgent.indexOf("Firefox") > 0) {
                    window.location.href = 'about:blank ';
                } else {
                    window.opener = null;
                    window.open('', '_self', '');
                    window.close();
                }
            },
            //关闭、刷新网页前请求下线->s=offline
            initOffline: function() {
                var This = this;

                $(window).on('beforeunload.FA, unload.FA', function() {
                    This.offline();
                });
            },
            //下线请求->s=offline
            offline: function() {
                this.request({
                    params: {
                        s: 'offline'
                    }
                });
            },
            //剩余字数统计
            remainWord: function($input, $tip, $word) {
                var nowNum = 0,
                    maxNum = this.options.remainWordNum,
                    word = $input.val(),
                    len = word.toString().length;

                if(len > maxNum) {
                    word = word.substr(0, maxNum);
                    $input.val(word);
                    len = word.toString().length;
                }
                $word.text(maxNum - len);
            },
            //判断浏览器类型
            myBrowser: function() {
                var userAgent = navigator.userAgent,
                    isOpera = userAgent.indexOf("Opera") > -1;

                if (isOpera) {
                    return "Opera";
                };
                if (userAgent.indexOf("Firefox") > -1) {
                    return "FF";
                }
                if (userAgent.indexOf("Chrome") > -1){
                    return "Chrome";
                }
                if (userAgent.indexOf("Safari") > -1) {
                    return "Safari";
                }
                if (userAgent.indexOf("compatible") > -1 && userAgent.indexOf("MSIE") > -1 && !isOpera) {
                    return "IE";
                };
            },
            //清除聊天记录
            clearRecord: function() {
                var This = this,
                    $clearBtnId = this.$obj.$clearBtnId = $('#'+ this.options.clearBtnId);

                $clearBtnId.on('click.FA', function() {
                    This.$obj.$chatCtnId.find('.MN_answer_welcome').siblings().remove();
                });
            },
            //请求->所有的请求都需要经过(特殊的除外)
    		request: function(options) {
    			var This = this;

    			// 收集来源的关键词
    			var entranceWords = '';
    			for(var i=0; i<This.options.entranceWords.length; i++) {
    				entranceWords += (MN_Base.getParam(This.options.entranceWords[i], document.referrer) || '') +',';
    			}

    			var params = {//必须参数
    			    	sysNum: This.options.sysNum,
    			    	sourceId: This.options.sourceId,
    			    	element_id: This.options.element_id,
    			    	entrance: document.referrer,
    			    	entranceWords: entranceWords
    			    },
    			    defaults = {
    			        $formObj: $(),//被序列化的form表单
    			        dataObj: {},
    			        callback: function(){}//回调函数(callback)
    			    };
    			options = $.extend({}, defaults, options);
    			var formData = $.extend({}, This.formatSeriData(decodeURIComponent(location.href)), This.formatSeriData(decodeURIComponent((options.$formObj.serialize()))), options.dataObj);

    			if(This.options.jsonp) {//jsonp 需要配置绝对地址
    				if(!This.options.prefix.match(/^http/)) {
    					layer.msg('开发者提醒：当前跨域，请配置绝对地址');
    				}
    			}else {

    			}


    			$.ajax({
    			    url: encodeURI(options.prefix || (This.options.prefix + (options.url || 'servlet/AQ'))),//...为基础地址
    			    type: This.options.ajaxType,//默认get
    			    dataType: options.dataType || (This.options.jsonp?'jsonp':'json'),//默认json
    			    data: $.extend({}, params, options.params, formData),
    			    cache: false,//IE下有用
    			    success: function(data) {
    			        if(data) {
    			        	if(data.status) {//x
    			        		if(data.status == -1) {//站点不存在/长时间离开
    			        			if(data.message == '您长时间没有交互信息，请重新刷新访问.') {
    			        				if(!This.options.autoOnline) {
    			        		    		This.showMsg(data.message);
    			        				}
    			        			}else {
    			        		    	This.showMsg(data.message);
    			        			}
    			        		    return;
    			        		}else if(data.status == -2) {//未登录第三方账户
    			        			This.showMsg(data.message, function() {
    			        			    window.location.href = This.options.thirdUrl;
    			        			});
    			        			return;
    			        		}else {
    			            		options.callback(data);
    			        		}
    			        	}else {//y
    			            	options.callback(data);
    			        	}
    			            
    			        }
    			    }
    			});
    		},
            //格式化被序列化后的数据->http://xxx.com?a=1&b=2化为{a:1, b:2}
            formatSeriData: function(data) {
                if(!data) {
                    return;
                }
                var obj = '',
                    dot = ',',      
                    arr = data.match(/[^?^#^&]+=[^?^#^&]*/g);

                for(var i=0; i<arr.length; i++) {
                    var str = arr[i].match(/([^=]+)=([^=]*)/);
                    if(i==arr.length - 1) {
                        dot = '';
                    }
                    obj += '"'+ str[1] +'"' +":"+ '"'+ str[2] +'"'+ dot;
                }
                return JSON.parse('{'+ obj +'}');
            },
    		//信息提示
    		showMsg: function(message, callback) {
    			layer.msg(message, {
    				shift: 0,
    				area: this.getSuitSize()
    			}, function() {
    				if(callback) {
    				    callback();
    				}
    			});
    			$(window).trigger('resize');
    		},
    		// 获取提示框合适的大小
    		getSuitSize: function() {
    			return MN_Base.isPC()?'400px':'0.8rem';
    		},
            //获取格式化时间
            getFormatDate: function(time) {// 2016-11-21 09:36:43
                time = time ? time.match(/(\d+)-(\d+)-(\d+)\s(\d+):(\d+):(\d+)/) : [];
                var today = new Date(),
                    year = time[1] || today.getFullYear(),
                    month = time[2] || this.addZero(today.getMonth() + 1),
                    date = time[3] || this.addZero(today.getDate()),
                    hour = time[4] || this.addZero(today.getHours()),
                    minute = time[5] || this.addZero(today.getMinutes()),
                    second = time[6] || this.addZero(today.getSeconds());

                var result = this.options.formatDate.replace(/%hour%/g, hour).replace(/%minute%/g, minute).replace(/%second%/g, second).replace(/%year%/g, year).replace(/%month%/g, month).replace(/%date%/g, date);

                return result;
            },
            //是否是黑夜 7/8-18/19-day 20/21-6/7-night
            isNight: function() {
            	var today = new Date(),
            	    hour = this.addZero(today.getHours());
            	if(hour>=7 && hour <=19) {
            		return 'day';
            	}else {
            		return 'night';
            	}
            },
            //个位数前面加0
            addZero: function(num) {
                return num<10 ? "0" + num : num;
            }
        }

    })(MN, window, document);
    /**************************** END ****************************/




//})();
