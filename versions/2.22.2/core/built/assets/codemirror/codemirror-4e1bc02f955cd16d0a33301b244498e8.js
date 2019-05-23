!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):e.CodeMirror=t()}(this,function(){"use strict"
var e=navigator.userAgent,t=navigator.platform,r=/gecko\/\d/i.test(e),n=/MSIE \d/.test(e),i=/Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(e),o=/Edge\/(\d+)/.exec(e),a=n||i||o,l=a&&(n?document.documentMode||6:+(o||i)[1]),s=!o&&/WebKit\//.test(e),u=s&&/Qt\/\d+\.\d+/.test(e),c=!o&&/Chrome\//.test(e),d=/Opera\//.test(e),f=/Apple Computer/.test(navigator.vendor),h=/Mac OS X 1\d\D([8-9]|\d\d)\D/.test(e),p=/PhantomJS/.test(e),g=!o&&/AppleWebKit/.test(e)&&/Mobile\/\w+/.test(e),m=/Android/.test(e),v=g||m||/webOS|BlackBerry|Opera Mini|Opera Mobi|IEMobile/i.test(e),y=g||/Mac/.test(t),b=/\bCrOS\b/.test(e),w=/win/i.test(t),x=d&&e.match(/Version\/(\d*\.\d*)/)
x&&(x=Number(x[1])),x&&x>=15&&(d=!1,s=!0)
var k=y&&(u||d&&(null==x||x<12.11)),C=r||a&&l>=9
function S(e){return new RegExp("(^|\\s)"+e+"(?:$|\\s)\\s*")}var L,T=function(e,t){var r=e.className,n=S(t).exec(r)
if(n){var i=r.slice(n.index+n[0].length)
e.className=r.slice(0,n.index)+(i?n[1]+i:"")}}
function M(e){for(var t=e.childNodes.length;t>0;--t)e.removeChild(e.firstChild)
return e}function N(e,t){return M(e).appendChild(t)}function A(e,t,r,n){var i=document.createElement(e)
if(r&&(i.className=r),n&&(i.style.cssText=n),"string"==typeof t)i.appendChild(document.createTextNode(t))
else if(t)for(var o=0;o<t.length;++o)i.appendChild(t[o])
return i}function O(e,t,r,n){var i=A(e,t,r,n)
return i.setAttribute("role","presentation"),i}function W(e,t){if(3==t.nodeType&&(t=t.parentNode),e.contains)return e.contains(t)
do{if(11==t.nodeType&&(t=t.host),t==e)return!0}while(t=t.parentNode)}function D(){var e
try{e=document.activeElement}catch(t){e=document.body||null}for(;e&&e.shadowRoot&&e.shadowRoot.activeElement;)e=e.shadowRoot.activeElement
return e}function z(e,t){var r=e.className
S(t).test(r)||(e.className+=(r?" ":"")+t)}function P(e,t){for(var r=e.split(" "),n=0;n<r.length;n++)r[n]&&!S(r[n]).test(t)&&(t+=" "+r[n])
return t}L=document.createRange?function(e,t,r,n){var i=document.createRange()
return i.setEnd(n||e,r),i.setStart(e,t),i}:function(e,t,r){var n=document.body.createTextRange()
try{n.moveToElementText(e.parentNode)}catch(e){return n}return n.collapse(!0),n.moveEnd("character",r),n.moveStart("character",t),n}
var H=function(e){e.select()}
function I(e){var t=Array.prototype.slice.call(arguments,1)
return function(){return e.apply(null,t)}}function E(e,t,r){for(var n in t||(t={}),e)!e.hasOwnProperty(n)||!1===r&&t.hasOwnProperty(n)||(t[n]=e[n])
return t}function F(e,t,r,n,i){null==t&&-1==(t=e.search(/[^\s\u00a0]/))&&(t=e.length)
for(var o=n||0,a=i||0;;){var l=e.indexOf("\t",o)
if(l<0||l>=t)return a+(t-o)
a+=l-o,a+=r-a%r,o=l+1}}g?H=function(e){e.selectionStart=0,e.selectionEnd=e.value.length}:a&&(H=function(e){try{e.select()}catch(e){}})
var R=function(){this.id=null}
function B(e,t){for(var r=0;r<e.length;++r)if(e[r]==t)return r
return-1}R.prototype.set=function(e,t){clearTimeout(this.id),this.id=setTimeout(t,e)}
var j=30,V={toString:function(){return"CodeMirror.Pass"}},K={scroll:!1},G={origin:"*mouse"},U={origin:"+move"}
function q(e,t,r){for(var n=0,i=0;;){var o=e.indexOf("\t",n);-1==o&&(o=e.length)
var a=o-n
if(o==e.length||i+a>=t)return n+Math.min(a,t-i)
if(i+=o-n,n=o+1,(i+=r-i%r)>=t)return n}}var $=[""]
function _(e){for(;$.length<=e;)$.push(X($)+" ")
return $[e]}function X(e){return e[e.length-1]}function Y(e,t){for(var r=[],n=0;n<e.length;n++)r[n]=t(e[n],n)
return r}function Z(){}function Q(e,t){var r
return Object.create?r=Object.create(e):(Z.prototype=e,r=new Z),t&&E(t,r),r}var J=/[\u00df\u0587\u0590-\u05f4\u0600-\u06ff\u3040-\u309f\u30a0-\u30ff\u3400-\u4db5\u4e00-\u9fcc\uac00-\ud7af]/
function ee(e){return/\w/.test(e)||e>""&&(e.toUpperCase()!=e.toLowerCase()||J.test(e))}function te(e,t){return t?!!(t.source.indexOf("\\w")>-1&&ee(e))||t.test(e):ee(e)}function re(e){for(var t in e)if(e.hasOwnProperty(t)&&e[t])return!1
return!0}var ne=/[\u0300-\u036f\u0483-\u0489\u0591-\u05bd\u05bf\u05c1\u05c2\u05c4\u05c5\u05c7\u0610-\u061a\u064b-\u065e\u0670\u06d6-\u06dc\u06de-\u06e4\u06e7\u06e8\u06ea-\u06ed\u0711\u0730-\u074a\u07a6-\u07b0\u07eb-\u07f3\u0816-\u0819\u081b-\u0823\u0825-\u0827\u0829-\u082d\u0900-\u0902\u093c\u0941-\u0948\u094d\u0951-\u0955\u0962\u0963\u0981\u09bc\u09be\u09c1-\u09c4\u09cd\u09d7\u09e2\u09e3\u0a01\u0a02\u0a3c\u0a41\u0a42\u0a47\u0a48\u0a4b-\u0a4d\u0a51\u0a70\u0a71\u0a75\u0a81\u0a82\u0abc\u0ac1-\u0ac5\u0ac7\u0ac8\u0acd\u0ae2\u0ae3\u0b01\u0b3c\u0b3e\u0b3f\u0b41-\u0b44\u0b4d\u0b56\u0b57\u0b62\u0b63\u0b82\u0bbe\u0bc0\u0bcd\u0bd7\u0c3e-\u0c40\u0c46-\u0c48\u0c4a-\u0c4d\u0c55\u0c56\u0c62\u0c63\u0cbc\u0cbf\u0cc2\u0cc6\u0ccc\u0ccd\u0cd5\u0cd6\u0ce2\u0ce3\u0d3e\u0d41-\u0d44\u0d4d\u0d57\u0d62\u0d63\u0dca\u0dcf\u0dd2-\u0dd4\u0dd6\u0ddf\u0e31\u0e34-\u0e3a\u0e47-\u0e4e\u0eb1\u0eb4-\u0eb9\u0ebb\u0ebc\u0ec8-\u0ecd\u0f18\u0f19\u0f35\u0f37\u0f39\u0f71-\u0f7e\u0f80-\u0f84\u0f86\u0f87\u0f90-\u0f97\u0f99-\u0fbc\u0fc6\u102d-\u1030\u1032-\u1037\u1039\u103a\u103d\u103e\u1058\u1059\u105e-\u1060\u1071-\u1074\u1082\u1085\u1086\u108d\u109d\u135f\u1712-\u1714\u1732-\u1734\u1752\u1753\u1772\u1773\u17b7-\u17bd\u17c6\u17c9-\u17d3\u17dd\u180b-\u180d\u18a9\u1920-\u1922\u1927\u1928\u1932\u1939-\u193b\u1a17\u1a18\u1a56\u1a58-\u1a5e\u1a60\u1a62\u1a65-\u1a6c\u1a73-\u1a7c\u1a7f\u1b00-\u1b03\u1b34\u1b36-\u1b3a\u1b3c\u1b42\u1b6b-\u1b73\u1b80\u1b81\u1ba2-\u1ba5\u1ba8\u1ba9\u1c2c-\u1c33\u1c36\u1c37\u1cd0-\u1cd2\u1cd4-\u1ce0\u1ce2-\u1ce8\u1ced\u1dc0-\u1de6\u1dfd-\u1dff\u200c\u200d\u20d0-\u20f0\u2cef-\u2cf1\u2de0-\u2dff\u302a-\u302f\u3099\u309a\ua66f-\ua672\ua67c\ua67d\ua6f0\ua6f1\ua802\ua806\ua80b\ua825\ua826\ua8c4\ua8e0-\ua8f1\ua926-\ua92d\ua947-\ua951\ua980-\ua982\ua9b3\ua9b6-\ua9b9\ua9bc\uaa29-\uaa2e\uaa31\uaa32\uaa35\uaa36\uaa43\uaa4c\uaab0\uaab2-\uaab4\uaab7\uaab8\uaabe\uaabf\uaac1\uabe5\uabe8\uabed\udc00-\udfff\ufb1e\ufe00-\ufe0f\ufe20-\ufe26\uff9e\uff9f]/
function ie(e){return e.charCodeAt(0)>=768&&ne.test(e)}function oe(e,t,r){for(;(r<0?t>0:t<e.length)&&ie(e.charAt(t));)t+=r
return t}function ae(e,t,r){for(var n=t>r?-1:1;;){if(t==r)return t
var i=(t+r)/2,o=n<0?Math.ceil(i):Math.floor(i)
if(o==t)return e(o)?t:r
e(o)?r=o:t=o+n}}var le=null
function se(e,t,r){var n
le=null
for(var i=0;i<e.length;++i){var o=e[i]
if(o.from<t&&o.to>t)return i
o.to==t&&(o.from!=o.to&&"before"==r?n=i:le=i),o.from==t&&(o.from!=o.to&&"before"!=r?n=i:le=i)}return null!=n?n:le}var ue=function(){var e=/[\u0590-\u05f4\u0600-\u06ff\u0700-\u08ac]/,t=/[stwN]/,r=/[LRr]/,n=/[Lb1n]/,i=/[1n]/
function o(e,t,r){this.level=e,this.from=t,this.to=r}return function(a,l){var s="ltr"==l?"L":"R"
if(0==a.length||"ltr"==l&&!e.test(a))return!1
for(var u,c=a.length,d=[],f=0;f<c;++f)d.push((u=a.charCodeAt(f))<=247?"bbbbbbbbbtstwsbbbbbbbbbbbbbbssstwNN%%%NNNNNN,N,N1111111111NNNNNNNLLLLLLLLLLLLLLLLLLLLLLLLLLNNNNNNLLLLLLLLLLLLLLLLLLLLLLLLLLNNNNbbbbbbsbbbbbbbbbbbbbbbbbbbbbbbbbb,N%%%%NNNNLNNNNN%%11NLNNN1LNNNNNLLLLLLLLLLLLLLLLLLLLLLLNLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLN".charAt(u):1424<=u&&u<=1524?"R":1536<=u&&u<=1785?"nnnnnnNNr%%r,rNNmmmmmmmmmmmrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrmmmmmmmmmmmmmmmmmmmmmnnnnnnnnnn%nnrrrmrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrmmmmmmmnNmmmmmmrrmmNmmmmrr1111111111".charAt(u-1536):1774<=u&&u<=2220?"r":8192<=u&&u<=8203?"w":8204==u?"b":"L")
for(var h=0,p=s;h<c;++h){var g=d[h]
"m"==g?d[h]=p:p=g}for(var m=0,v=s;m<c;++m){var y=d[m]
"1"==y&&"r"==v?d[m]="n":r.test(y)&&(v=y,"r"==y&&(d[m]="R"))}for(var b=1,w=d[0];b<c-1;++b){var x=d[b]
"+"==x&&"1"==w&&"1"==d[b+1]?d[b]="1":","!=x||w!=d[b+1]||"1"!=w&&"n"!=w||(d[b]=w),w=x}for(var k=0;k<c;++k){var C=d[k]
if(","==C)d[k]="N"
else if("%"==C){var S=void 0
for(S=k+1;S<c&&"%"==d[S];++S);for(var L=k&&"!"==d[k-1]||S<c&&"1"==d[S]?"1":"N",T=k;T<S;++T)d[T]=L
k=S-1}}for(var M=0,N=s;M<c;++M){var A=d[M]
"L"==N&&"1"==A?d[M]="L":r.test(A)&&(N=A)}for(var O=0;O<c;++O)if(t.test(d[O])){var W=void 0
for(W=O+1;W<c&&t.test(d[W]);++W);for(var D="L"==(O?d[O-1]:s),z=D==("L"==(W<c?d[W]:s))?D?"L":"R":s,P=O;P<W;++P)d[P]=z
O=W-1}for(var H,I=[],E=0;E<c;)if(n.test(d[E])){var F=E
for(++E;E<c&&n.test(d[E]);++E);I.push(new o(0,F,E))}else{var R=E,B=I.length
for(++E;E<c&&"L"!=d[E];++E);for(var j=R;j<E;)if(i.test(d[j])){R<j&&I.splice(B,0,new o(1,R,j))
var V=j
for(++j;j<E&&i.test(d[j]);++j);I.splice(B,0,new o(2,V,j)),R=j}else++j
R<E&&I.splice(B,0,new o(1,R,E))}return"ltr"==l&&(1==I[0].level&&(H=a.match(/^\s+/))&&(I[0].from=H[0].length,I.unshift(new o(0,0,H[0].length))),1==X(I).level&&(H=a.match(/\s+$/))&&(X(I).to-=H[0].length,I.push(new o(0,c-H[0].length,c)))),"rtl"==l?I.reverse():I}}()
function ce(e,t){var r=e.order
return null==r&&(r=e.order=ue(e.text,t)),r}var de=[],fe=function(e,t,r){if(e.addEventListener)e.addEventListener(t,r,!1)
else if(e.attachEvent)e.attachEvent("on"+t,r)
else{var n=e._handlers||(e._handlers={})
n[t]=(n[t]||de).concat(r)}}
function he(e,t){return e._handlers&&e._handlers[t]||de}function pe(e,t,r){if(e.removeEventListener)e.removeEventListener(t,r,!1)
else if(e.detachEvent)e.detachEvent("on"+t,r)
else{var n=e._handlers,i=n&&n[t]
if(i){var o=B(i,r)
o>-1&&(n[t]=i.slice(0,o).concat(i.slice(o+1)))}}}function ge(e,t){var r=he(e,t)
if(r.length)for(var n=Array.prototype.slice.call(arguments,2),i=0;i<r.length;++i)r[i].apply(null,n)}function me(e,t,r){return"string"==typeof t&&(t={type:t,preventDefault:function(){this.defaultPrevented=!0}}),ge(e,r||t.type,e,t),ke(t)||t.codemirrorIgnore}function ve(e){var t=e._handlers&&e._handlers.cursorActivity
if(t)for(var r=e.curOp.cursorActivityHandlers||(e.curOp.cursorActivityHandlers=[]),n=0;n<t.length;++n)-1==B(r,t[n])&&r.push(t[n])}function ye(e,t){return he(e,t).length>0}function be(e){e.prototype.on=function(e,t){fe(this,e,t)},e.prototype.off=function(e,t){pe(this,e,t)}}function we(e){e.preventDefault?e.preventDefault():e.returnValue=!1}function xe(e){e.stopPropagation?e.stopPropagation():e.cancelBubble=!0}function ke(e){return null!=e.defaultPrevented?e.defaultPrevented:0==e.returnValue}function Ce(e){we(e),xe(e)}function Se(e){return e.target||e.srcElement}function Le(e){var t=e.which
return null==t&&(1&e.button?t=1:2&e.button?t=3:4&e.button&&(t=2)),y&&e.ctrlKey&&1==t&&(t=3),t}var Te,Me,Ne=function(){if(a&&l<9)return!1
var e=A("div")
return"draggable"in e||"dragDrop"in e}()
function Ae(e){if(null==Te){var t=A("span","​")
N(e,A("span",[t,document.createTextNode("x")])),0!=e.firstChild.offsetHeight&&(Te=t.offsetWidth<=1&&t.offsetHeight>2&&!(a&&l<8))}var r=Te?A("span","​"):A("span"," ",null,"display: inline-block; width: 1px; margin-right: -1px")
return r.setAttribute("cm-text",""),r}function Oe(e){if(null!=Me)return Me
var t=N(e,document.createTextNode("AخA")),r=L(t,0,1).getBoundingClientRect(),n=L(t,1,2).getBoundingClientRect()
return M(e),!(!r||r.left==r.right)&&(Me=n.right-r.right<3)}var We,De=3!="\n\nb".split(/\n/).length?function(e){for(var t=0,r=[],n=e.length;t<=n;){var i=e.indexOf("\n",t);-1==i&&(i=e.length)
var o=e.slice(t,"\r"==e.charAt(i-1)?i-1:i),a=o.indexOf("\r");-1!=a?(r.push(o.slice(0,a)),t+=a+1):(r.push(o),t=i+1)}return r}:function(e){return e.split(/\r\n?|\n/)},ze=window.getSelection?function(e){try{return e.selectionStart!=e.selectionEnd}catch(e){return!1}}:function(e){var t
try{t=e.ownerDocument.selection.createRange()}catch(e){}return!(!t||t.parentElement()!=e)&&0!=t.compareEndPoints("StartToEnd",t)},Pe="oncopy"in(We=A("div"))||(We.setAttribute("oncopy","return;"),"function"==typeof We.oncopy),He=null,Ie={},Ee={}
function Fe(e){if("string"==typeof e&&Ee.hasOwnProperty(e))e=Ee[e]
else if(e&&"string"==typeof e.name&&Ee.hasOwnProperty(e.name)){var t=Ee[e.name]
"string"==typeof t&&(t={name:t}),(e=Q(t,e)).name=t.name}else{if("string"==typeof e&&/^[\w\-]+\/[\w\-]+\+xml$/.test(e))return Fe("application/xml")
if("string"==typeof e&&/^[\w\-]+\/[\w\-]+\+json$/.test(e))return Fe("application/json")}return"string"==typeof e?{name:e}:e||{name:"null"}}function Re(e,t){t=Fe(t)
var r=Ie[t.name]
if(!r)return Re(e,"text/plain")
var n=r(e,t)
if(Be.hasOwnProperty(t.name)){var i=Be[t.name]
for(var o in i)i.hasOwnProperty(o)&&(n.hasOwnProperty(o)&&(n["_"+o]=n[o]),n[o]=i[o])}if(n.name=t.name,t.helperType&&(n.helperType=t.helperType),t.modeProps)for(var a in t.modeProps)n[a]=t.modeProps[a]
return n}var Be={}
function je(e,t){E(t,Be.hasOwnProperty(e)?Be[e]:Be[e]={})}function Ve(e,t){if(!0===t)return t
if(e.copyState)return e.copyState(t)
var r={}
for(var n in t){var i=t[n]
i instanceof Array&&(i=i.concat([])),r[n]=i}return r}function Ke(e,t){for(var r;e.innerMode&&(r=e.innerMode(t))&&r.mode!=e;)t=r.state,e=r.mode
return r||{mode:e,state:t}}function Ge(e,t,r){return!e.startState||e.startState(t,r)}var Ue=function(e,t,r){this.pos=this.start=0,this.string=e,this.tabSize=t||8,this.lastColumnPos=this.lastColumnValue=0,this.lineStart=0,this.lineOracle=r}
function qe(e,t){if((t-=e.first)<0||t>=e.size)throw new Error("There is no line "+(t+e.first)+" in the document.")
for(var r=e;!r.lines;)for(var n=0;;++n){var i=r.children[n],o=i.chunkSize()
if(t<o){r=i
break}t-=o}return r.lines[t]}function $e(e,t,r){var n=[],i=t.line
return e.iter(t.line,r.line+1,function(e){var o=e.text
i==r.line&&(o=o.slice(0,r.ch)),i==t.line&&(o=o.slice(t.ch)),n.push(o),++i}),n}function _e(e,t,r){var n=[]
return e.iter(t,r,function(e){n.push(e.text)}),n}function Xe(e,t){var r=t-e.height
if(r)for(var n=e;n;n=n.parent)n.height+=r}function Ye(e){if(null==e.parent)return null
for(var t=e.parent,r=B(t.lines,e),n=t.parent;n;t=n,n=n.parent)for(var i=0;n.children[i]!=t;++i)r+=n.children[i].chunkSize()
return r+t.first}function Ze(e,t){var r=e.first
e:do{for(var n=0;n<e.children.length;++n){var i=e.children[n],o=i.height
if(t<o){e=i
continue e}t-=o,r+=i.chunkSize()}return r}while(!e.lines)
for(var a=0;a<e.lines.length;++a){var l=e.lines[a].height
if(t<l)break
t-=l}return r+a}function Qe(e,t){return t>=e.first&&t<e.first+e.size}function Je(e,t){return String(e.lineNumberFormatter(t+e.firstLineNumber))}function et(e,t,r){if(void 0===r&&(r=null),!(this instanceof et))return new et(e,t,r)
this.line=e,this.ch=t,this.sticky=r}function tt(e,t){return e.line-t.line||e.ch-t.ch}function rt(e,t){return e.sticky==t.sticky&&0==tt(e,t)}function nt(e){return et(e.line,e.ch)}function it(e,t){return tt(e,t)<0?t:e}function ot(e,t){return tt(e,t)<0?e:t}function at(e,t){return Math.max(e.first,Math.min(t,e.first+e.size-1))}function lt(e,t){if(t.line<e.first)return et(e.first,0)
var r=e.first+e.size-1
return t.line>r?et(r,qe(e,r).text.length):function(e,t){var r=e.ch
return null==r||r>t?et(e.line,t):r<0?et(e.line,0):e}(t,qe(e,t.line).text.length)}function st(e,t){for(var r=[],n=0;n<t.length;n++)r[n]=lt(e,t[n])
return r}Ue.prototype.eol=function(){return this.pos>=this.string.length},Ue.prototype.sol=function(){return this.pos==this.lineStart},Ue.prototype.peek=function(){return this.string.charAt(this.pos)||void 0},Ue.prototype.next=function(){if(this.pos<this.string.length)return this.string.charAt(this.pos++)},Ue.prototype.eat=function(e){var t=this.string.charAt(this.pos)
if("string"==typeof e?t==e:t&&(e.test?e.test(t):e(t)))return++this.pos,t},Ue.prototype.eatWhile=function(e){for(var t=this.pos;this.eat(e););return this.pos>t},Ue.prototype.eatSpace=function(){for(var e=this.pos;/[\s\u00a0]/.test(this.string.charAt(this.pos));)++this.pos
return this.pos>e},Ue.prototype.skipToEnd=function(){this.pos=this.string.length},Ue.prototype.skipTo=function(e){var t=this.string.indexOf(e,this.pos)
if(t>-1)return this.pos=t,!0},Ue.prototype.backUp=function(e){this.pos-=e},Ue.prototype.column=function(){return this.lastColumnPos<this.start&&(this.lastColumnValue=F(this.string,this.start,this.tabSize,this.lastColumnPos,this.lastColumnValue),this.lastColumnPos=this.start),this.lastColumnValue-(this.lineStart?F(this.string,this.lineStart,this.tabSize):0)},Ue.prototype.indentation=function(){return F(this.string,null,this.tabSize)-(this.lineStart?F(this.string,this.lineStart,this.tabSize):0)},Ue.prototype.match=function(e,t,r){if("string"!=typeof e){var n=this.string.slice(this.pos).match(e)
return n&&n.index>0?null:(n&&!1!==t&&(this.pos+=n[0].length),n)}var i=function(e){return r?e.toLowerCase():e}
if(i(this.string.substr(this.pos,e.length))==i(e))return!1!==t&&(this.pos+=e.length),!0},Ue.prototype.current=function(){return this.string.slice(this.start,this.pos)},Ue.prototype.hideFirstChars=function(e,t){this.lineStart+=e
try{return t()}finally{this.lineStart-=e}},Ue.prototype.lookAhead=function(e){var t=this.lineOracle
return t&&t.lookAhead(e)},Ue.prototype.baseToken=function(){var e=this.lineOracle
return e&&e.baseToken(this.pos)}
var ut=function(e,t){this.state=e,this.lookAhead=t},ct=function(e,t,r,n){this.state=t,this.doc=e,this.line=r,this.maxLookAhead=n||0,this.baseTokens=null,this.baseTokenPos=1}
function dt(e,t,r,n){var i=[e.state.modeGen],o={}
wt(e,t.text,e.doc.mode,r,function(e,t){return i.push(e,t)},o,n)
for(var a=r.state,l=function(n){r.baseTokens=i
var l=e.state.overlays[n],s=1,u=0
r.state=!0,wt(e,t.text,l.mode,r,function(e,t){for(var r=s;u<e;){var n=i[s]
n>e&&i.splice(s,1,e,i[s+1],n),s+=2,u=Math.min(e,n)}if(t)if(l.opaque)i.splice(r,s-r,e,"overlay "+t),s=r+2
else for(;r<s;r+=2){var o=i[r+1]
i[r+1]=(o?o+" ":"")+"overlay "+t}},o),r.state=a,r.baseTokens=null,r.baseTokenPos=1},s=0;s<e.state.overlays.length;++s)l(s)
return{styles:i,classes:o.bgClass||o.textClass?o:null}}function ft(e,t,r){if(!t.styles||t.styles[0]!=e.state.modeGen){var n=ht(e,Ye(t)),i=t.text.length>e.options.maxHighlightLength&&Ve(e.doc.mode,n.state),o=dt(e,t,n)
i&&(n.state=i),t.stateAfter=n.save(!i),t.styles=o.styles,o.classes?t.styleClasses=o.classes:t.styleClasses&&(t.styleClasses=null),r===e.doc.highlightFrontier&&(e.doc.modeFrontier=Math.max(e.doc.modeFrontier,++e.doc.highlightFrontier))}return t.styles}function ht(e,t,r){var n=e.doc,i=e.display
if(!n.mode.startState)return new ct(n,!0,t)
var o=function(e,t,r){for(var n,i,o=e.doc,a=r?-1:t-(e.doc.mode.innerMode?1e3:100),l=t;l>a;--l){if(l<=o.first)return o.first
var s=qe(o,l-1),u=s.stateAfter
if(u&&(!r||l+(u instanceof ut?u.lookAhead:0)<=o.modeFrontier))return l
var c=F(s.text,null,e.options.tabSize);(null==i||n>c)&&(i=l-1,n=c)}return i}(e,t,r),a=o>n.first&&qe(n,o-1).stateAfter,l=a?ct.fromSaved(n,a,o):new ct(n,Ge(n.mode),o)
return n.iter(o,t,function(r){pt(e,r.text,l)
var n=l.line
r.stateAfter=n==t-1||n%5==0||n>=i.viewFrom&&n<i.viewTo?l.save():null,l.nextLine()}),r&&(n.modeFrontier=l.line),l}function pt(e,t,r,n){var i=e.doc.mode,o=new Ue(t,e.options.tabSize,r)
for(o.start=o.pos=n||0,""==t&&gt(i,r.state);!o.eol();)mt(i,o,r.state),o.start=o.pos}function gt(e,t){if(e.blankLine)return e.blankLine(t)
if(e.innerMode){var r=Ke(e,t)
return r.mode.blankLine?r.mode.blankLine(r.state):void 0}}function mt(e,t,r,n){for(var i=0;i<10;i++){n&&(n[0]=Ke(e,r).mode)
var o=e.token(t,r)
if(t.pos>t.start)return o}throw new Error("Mode "+e.name+" failed to advance stream.")}ct.prototype.lookAhead=function(e){var t=this.doc.getLine(this.line+e)
return null!=t&&e>this.maxLookAhead&&(this.maxLookAhead=e),t},ct.prototype.baseToken=function(e){if(!this.baseTokens)return null
for(;this.baseTokens[this.baseTokenPos]<=e;)this.baseTokenPos+=2
var t=this.baseTokens[this.baseTokenPos+1]
return{type:t&&t.replace(/( |^)overlay .*/,""),size:this.baseTokens[this.baseTokenPos]-e}},ct.prototype.nextLine=function(){this.line++,this.maxLookAhead>0&&this.maxLookAhead--},ct.fromSaved=function(e,t,r){return t instanceof ut?new ct(e,Ve(e.mode,t.state),r,t.lookAhead):new ct(e,Ve(e.mode,t),r)},ct.prototype.save=function(e){var t=!1!==e?Ve(this.doc.mode,this.state):this.state
return this.maxLookAhead>0?new ut(t,this.maxLookAhead):t}
var vt=function(e,t,r){this.start=e.start,this.end=e.pos,this.string=e.current(),this.type=t||null,this.state=r}
function yt(e,t,r,n){var i,o,a=e.doc,l=a.mode,s=qe(a,(t=lt(a,t)).line),u=ht(e,t.line,r),c=new Ue(s.text,e.options.tabSize,u)
for(n&&(o=[]);(n||c.pos<t.ch)&&!c.eol();)c.start=c.pos,i=mt(l,c,u.state),n&&o.push(new vt(c,i,Ve(a.mode,u.state)))
return n?o:new vt(c,i,u.state)}function bt(e,t){if(e)for(;;){var r=e.match(/(?:^|\s+)line-(background-)?(\S+)/)
if(!r)break
e=e.slice(0,r.index)+e.slice(r.index+r[0].length)
var n=r[1]?"bgClass":"textClass"
null==t[n]?t[n]=r[2]:new RegExp("(?:^|s)"+r[2]+"(?:$|s)").test(t[n])||(t[n]+=" "+r[2])}return e}function wt(e,t,r,n,i,o,a){var l=r.flattenSpans
null==l&&(l=e.options.flattenSpans)
var s,u=0,c=null,d=new Ue(t,e.options.tabSize,n),f=e.options.addModeClass&&[null]
for(""==t&&bt(gt(r,n.state),o);!d.eol();){if(d.pos>e.options.maxHighlightLength?(l=!1,a&&pt(e,t,n,d.pos),d.pos=t.length,s=null):s=bt(mt(r,d,n.state,f),o),f){var h=f[0].name
h&&(s="m-"+(s?h+" "+s:h))}if(!l||c!=s){for(;u<d.start;)i(u=Math.min(d.start,u+5e3),c)
c=s}d.start=d.pos}for(;u<d.pos;){var p=Math.min(d.pos,u+5e3)
i(p,c),u=p}}var xt=!1,kt=!1
function Ct(e,t,r){this.marker=e,this.from=t,this.to=r}function St(e,t){if(e)for(var r=0;r<e.length;++r){var n=e[r]
if(n.marker==t)return n}}function Lt(e,t){for(var r,n=0;n<e.length;++n)e[n]!=t&&(r||(r=[])).push(e[n])
return r}function Tt(e,t){if(t.full)return null
var r=Qe(e,t.from.line)&&qe(e,t.from.line).markedSpans,n=Qe(e,t.to.line)&&qe(e,t.to.line).markedSpans
if(!r&&!n)return null
var i=t.from.ch,o=t.to.ch,a=0==tt(t.from,t.to),l=function(e,t,r){var n
if(e)for(var i=0;i<e.length;++i){var o=e[i],a=o.marker
if(null==o.from||(a.inclusiveLeft?o.from<=t:o.from<t)||o.from==t&&"bookmark"==a.type&&(!r||!o.marker.insertLeft)){var l=null==o.to||(a.inclusiveRight?o.to>=t:o.to>t);(n||(n=[])).push(new Ct(a,o.from,l?null:o.to))}}return n}(r,i,a),s=function(e,t,r){var n
if(e)for(var i=0;i<e.length;++i){var o=e[i],a=o.marker
if(null==o.to||(a.inclusiveRight?o.to>=t:o.to>t)||o.from==t&&"bookmark"==a.type&&(!r||o.marker.insertLeft)){var l=null==o.from||(a.inclusiveLeft?o.from<=t:o.from<t);(n||(n=[])).push(new Ct(a,l?null:o.from-t,null==o.to?null:o.to-t))}}return n}(n,o,a),u=1==t.text.length,c=X(t.text).length+(u?i:0)
if(l)for(var d=0;d<l.length;++d){var f=l[d]
if(null==f.to){var h=St(s,f.marker)
h?u&&(f.to=null==h.to?null:h.to+c):f.to=i}}if(s)for(var p=0;p<s.length;++p){var g=s[p]
null!=g.to&&(g.to+=c),null==g.from?St(l,g.marker)||(g.from=c,u&&(l||(l=[])).push(g)):(g.from+=c,u&&(l||(l=[])).push(g))}l&&(l=Mt(l)),s&&s!=l&&(s=Mt(s))
var m=[l]
if(!u){var v,y=t.text.length-2
if(y>0&&l)for(var b=0;b<l.length;++b)null==l[b].to&&(v||(v=[])).push(new Ct(l[b].marker,null,null))
for(var w=0;w<y;++w)m.push(v)
m.push(s)}return m}function Mt(e){for(var t=0;t<e.length;++t){var r=e[t]
null!=r.from&&r.from==r.to&&!1!==r.marker.clearWhenEmpty&&e.splice(t--,1)}return e.length?e:null}function Nt(e){var t=e.markedSpans
if(t){for(var r=0;r<t.length;++r)t[r].marker.detachLine(e)
e.markedSpans=null}}function At(e,t){if(t){for(var r=0;r<t.length;++r)t[r].marker.attachLine(e)
e.markedSpans=t}}function Ot(e){return e.inclusiveLeft?-1:0}function Wt(e){return e.inclusiveRight?1:0}function Dt(e,t){var r=e.lines.length-t.lines.length
if(0!=r)return r
var n=e.find(),i=t.find(),o=tt(n.from,i.from)||Ot(e)-Ot(t)
return o?-o:tt(n.to,i.to)||Wt(e)-Wt(t)||t.id-e.id}function zt(e,t){var r,n=kt&&e.markedSpans
if(n)for(var i=void 0,o=0;o<n.length;++o)(i=n[o]).marker.collapsed&&null==(t?i.from:i.to)&&(!r||Dt(r,i.marker)<0)&&(r=i.marker)
return r}function Pt(e){return zt(e,!0)}function Ht(e){return zt(e,!1)}function It(e,t){var r,n=kt&&e.markedSpans
if(n)for(var i=0;i<n.length;++i){var o=n[i]
o.marker.collapsed&&(null==o.from||o.from<t)&&(null==o.to||o.to>t)&&(!r||Dt(r,o.marker)<0)&&(r=o.marker)}return r}function Et(e,t,r,n,i){var o=qe(e,t),a=kt&&o.markedSpans
if(a)for(var l=0;l<a.length;++l){var s=a[l]
if(s.marker.collapsed){var u=s.marker.find(0),c=tt(u.from,r)||Ot(s.marker)-Ot(i),d=tt(u.to,n)||Wt(s.marker)-Wt(i)
if(!(c>=0&&d<=0||c<=0&&d>=0)&&(c<=0&&(s.marker.inclusiveRight&&i.inclusiveLeft?tt(u.to,r)>=0:tt(u.to,r)>0)||c>=0&&(s.marker.inclusiveRight&&i.inclusiveLeft?tt(u.from,n)<=0:tt(u.from,n)<0)))return!0}}}function Ft(e){for(var t;t=Pt(e);)e=t.find(-1,!0).line
return e}function Rt(e,t){var r=qe(e,t),n=Ft(r)
return r==n?t:Ye(n)}function Bt(e,t){if(t>e.lastLine())return t
var r,n=qe(e,t)
if(!jt(e,n))return t
for(;r=Ht(n);)n=r.find(1,!0).line
return Ye(n)+1}function jt(e,t){var r=kt&&t.markedSpans
if(r)for(var n=void 0,i=0;i<r.length;++i)if((n=r[i]).marker.collapsed){if(null==n.from)return!0
if(!n.marker.widgetNode&&0==n.from&&n.marker.inclusiveLeft&&Vt(e,t,n))return!0}}function Vt(e,t,r){if(null==r.to){var n=r.marker.find(1,!0)
return Vt(e,n.line,St(n.line.markedSpans,r.marker))}if(r.marker.inclusiveRight&&r.to==t.text.length)return!0
for(var i=void 0,o=0;o<t.markedSpans.length;++o)if((i=t.markedSpans[o]).marker.collapsed&&!i.marker.widgetNode&&i.from==r.to&&(null==i.to||i.to!=r.from)&&(i.marker.inclusiveLeft||r.marker.inclusiveRight)&&Vt(e,t,i))return!0}function Kt(e){for(var t=0,r=(e=Ft(e)).parent,n=0;n<r.lines.length;++n){var i=r.lines[n]
if(i==e)break
t+=i.height}for(var o=r.parent;o;o=(r=o).parent)for(var a=0;a<o.children.length;++a){var l=o.children[a]
if(l==r)break
t+=l.height}return t}function Gt(e){if(0==e.height)return 0
for(var t,r=e.text.length,n=e;t=Pt(n);){var i=t.find(0,!0)
n=i.from.line,r+=i.from.ch-i.to.ch}for(n=e;t=Ht(n);){var o=t.find(0,!0)
r-=n.text.length-o.from.ch,r+=(n=o.to.line).text.length-o.to.ch}return r}function Ut(e){var t=e.display,r=e.doc
t.maxLine=qe(r,r.first),t.maxLineLength=Gt(t.maxLine),t.maxLineChanged=!0,r.iter(function(e){var r=Gt(e)
r>t.maxLineLength&&(t.maxLineLength=r,t.maxLine=e)})}var qt=function(e,t,r){this.text=e,At(this,t),this.height=r?r(this):1}
function $t(e){e.parent=null,Nt(e)}qt.prototype.lineNo=function(){return Ye(this)},be(qt)
var _t={},Xt={}
function Yt(e,t){if(!e||/^\s*$/.test(e))return null
var r=t.addModeClass?Xt:_t
return r[e]||(r[e]=e.replace(/\S+/g,"cm-$&"))}function Zt(e,t){var r=O("span",null,null,s?"padding-right: .1px":null),n={pre:O("pre",[r],"CodeMirror-line"),content:r,col:0,pos:0,cm:e,trailingSpace:!1,splitSpaces:e.getOption("lineWrapping")}
t.measure={}
for(var i=0;i<=(t.rest?t.rest.length:0);i++){var o=i?t.rest[i-1]:t.line,a=void 0
n.pos=0,n.addToken=Jt,Oe(e.display.measure)&&(a=ce(o,e.doc.direction))&&(n.addToken=er(n.addToken,a)),n.map=[],rr(o,n,ft(e,o,t!=e.display.externalMeasured&&Ye(o))),o.styleClasses&&(o.styleClasses.bgClass&&(n.bgClass=P(o.styleClasses.bgClass,n.bgClass||"")),o.styleClasses.textClass&&(n.textClass=P(o.styleClasses.textClass,n.textClass||""))),0==n.map.length&&n.map.push(0,0,n.content.appendChild(Ae(e.display.measure))),0==i?(t.measure.map=n.map,t.measure.cache={}):((t.measure.maps||(t.measure.maps=[])).push(n.map),(t.measure.caches||(t.measure.caches=[])).push({}))}if(s){var l=n.content.lastChild;(/\bcm-tab\b/.test(l.className)||l.querySelector&&l.querySelector(".cm-tab"))&&(n.content.className="cm-tab-wrap-hack")}return ge(e,"renderLine",e,t.line,n.pre),n.pre.className&&(n.textClass=P(n.pre.className,n.textClass||"")),n}function Qt(e){var t=A("span","•","cm-invalidchar")
return t.title="\\u"+e.charCodeAt(0).toString(16),t.setAttribute("aria-label",t.title),t}function Jt(e,t,r,n,i,o,s){if(t){var u,c=e.splitSpaces?function(e,t){if(e.length>1&&!/  /.test(e))return e
for(var r=t,n="",i=0;i<e.length;i++){var o=e.charAt(i)
" "!=o||!r||i!=e.length-1&&32!=e.charCodeAt(i+1)||(o=" "),n+=o,r=" "==o}return n}(t,e.trailingSpace):t,d=e.cm.state.specialChars,f=!1
if(d.test(t)){u=document.createDocumentFragment()
for(var h=0;;){d.lastIndex=h
var p=d.exec(t),g=p?p.index-h:t.length-h
if(g){var m=document.createTextNode(c.slice(h,h+g))
a&&l<9?u.appendChild(A("span",[m])):u.appendChild(m),e.map.push(e.pos,e.pos+g,m),e.col+=g,e.pos+=g}if(!p)break
h+=g+1
var v=void 0
if("\t"==p[0]){var y=e.cm.options.tabSize,b=y-e.col%y;(v=u.appendChild(A("span",_(b),"cm-tab"))).setAttribute("role","presentation"),v.setAttribute("cm-text","\t"),e.col+=b}else"\r"==p[0]||"\n"==p[0]?((v=u.appendChild(A("span","\r"==p[0]?"␍":"␤","cm-invalidchar"))).setAttribute("cm-text",p[0]),e.col+=1):((v=e.cm.options.specialCharPlaceholder(p[0])).setAttribute("cm-text",p[0]),a&&l<9?u.appendChild(A("span",[v])):u.appendChild(v),e.col+=1)
e.map.push(e.pos,e.pos+1,v),e.pos++}}else e.col+=t.length,u=document.createTextNode(c),e.map.push(e.pos,e.pos+t.length,u),a&&l<9&&(f=!0),e.pos+=t.length
if(e.trailingSpace=32==c.charCodeAt(t.length-1),r||n||i||f||o){var w=r||""
n&&(w+=n),i&&(w+=i)
var x=A("span",[u],w,o)
if(s)for(var k in s)s.hasOwnProperty(k)&&"style"!=k&&"class"!=k&&x.setAttribute(k,s[k])
return e.content.appendChild(x)}e.content.appendChild(u)}}function er(e,t){return function(r,n,i,o,a,l,s){i=i?i+" cm-force-border":"cm-force-border"
for(var u=r.pos,c=u+n.length;;){for(var d=void 0,f=0;f<t.length&&!((d=t[f]).to>u&&d.from<=u);f++);if(d.to>=c)return e(r,n,i,o,a,l,s)
e(r,n.slice(0,d.to-u),i,o,null,l,s),o=null,n=n.slice(d.to-u),u=d.to}}}function tr(e,t,r,n){var i=!n&&r.widgetNode
i&&e.map.push(e.pos,e.pos+t,i),!n&&e.cm.display.input.needsContentAttribute&&(i||(i=e.content.appendChild(document.createElement("span"))),i.setAttribute("cm-marker",r.id)),i&&(e.cm.display.input.setUneditable(i),e.content.appendChild(i)),e.pos+=t,e.trailingSpace=!1}function rr(e,t,r){var n=e.markedSpans,i=e.text,o=0
if(n)for(var a,l,s,u,c,d,f,h=i.length,p=0,g=1,m="",v=0;;){if(v==p){s=u=c=l="",f=null,d=null,v=1/0
for(var y=[],b=void 0,w=0;w<n.length;++w){var x=n[w],k=x.marker
if("bookmark"==k.type&&x.from==p&&k.widgetNode)y.push(k)
else if(x.from<=p&&(null==x.to||x.to>p||k.collapsed&&x.to==p&&x.from==p)){if(null!=x.to&&x.to!=p&&v>x.to&&(v=x.to,u=""),k.className&&(s+=" "+k.className),k.css&&(l=(l?l+";":"")+k.css),k.startStyle&&x.from==p&&(c+=" "+k.startStyle),k.endStyle&&x.to==v&&(b||(b=[])).push(k.endStyle,x.to),k.title&&((f||(f={})).title=k.title),k.attributes)for(var C in k.attributes)(f||(f={}))[C]=k.attributes[C]
k.collapsed&&(!d||Dt(d.marker,k)<0)&&(d=x)}else x.from>p&&v>x.from&&(v=x.from)}if(b)for(var S=0;S<b.length;S+=2)b[S+1]==v&&(u+=" "+b[S])
if(!d||d.from==p)for(var L=0;L<y.length;++L)tr(t,0,y[L])
if(d&&(d.from||0)==p){if(tr(t,(null==d.to?h+1:d.to)-p,d.marker,null==d.from),null==d.to)return
d.to==p&&(d=!1)}}if(p>=h)break
for(var T=Math.min(h,v);;){if(m){var M=p+m.length
if(!d){var N=M>T?m.slice(0,T-p):m
t.addToken(t,N,a?a+s:s,c,p+N.length==v?u:"",l,f)}if(M>=T){m=m.slice(T-p),p=T
break}p=M,c=""}m=i.slice(o,o=r[g++]),a=Yt(r[g++],t.cm.options)}}else for(var A=1;A<r.length;A+=2)t.addToken(t,i.slice(o,o=r[A]),Yt(r[A+1],t.cm.options))}function nr(e,t,r){this.line=t,this.rest=function(e){for(var t,r;t=Ht(e);)e=t.find(1,!0).line,(r||(r=[])).push(e)
return r}(t),this.size=this.rest?Ye(X(this.rest))-r+1:1,this.node=this.text=null,this.hidden=jt(e,t)}function ir(e,t,r){for(var n,i=[],o=t;o<r;o=n){var a=new nr(e.doc,qe(e.doc,o),o)
n=o+a.size,i.push(a)}return i}var or=null,ar=null
function lr(e,t){var r=he(e,t)
if(r.length){var n,i=Array.prototype.slice.call(arguments,2)
or?n=or.delayedCallbacks:ar?n=ar:(n=ar=[],setTimeout(sr,0))
for(var o=function(e){n.push(function(){return r[e].apply(null,i)})},a=0;a<r.length;++a)o(a)}}function sr(){var e=ar
ar=null
for(var t=0;t<e.length;++t)e[t]()}function ur(e,t,r,n){for(var i=0;i<t.changes.length;i++){var o=t.changes[i]
"text"==o?fr(e,t):"gutter"==o?pr(e,t,r,n):"class"==o?hr(e,t):"widget"==o&&gr(e,t,n)}t.changes=null}function cr(e){return e.node==e.text&&(e.node=A("div",null,null,"position: relative"),e.text.parentNode&&e.text.parentNode.replaceChild(e.node,e.text),e.node.appendChild(e.text),a&&l<8&&(e.node.style.zIndex=2)),e.node}function dr(e,t){var r=e.display.externalMeasured
return r&&r.line==t.line?(e.display.externalMeasured=null,t.measure=r.measure,r.built):Zt(e,t)}function fr(e,t){var r=t.text.className,n=dr(e,t)
t.text==t.node&&(t.node=n.pre),t.text.parentNode.replaceChild(n.pre,t.text),t.text=n.pre,n.bgClass!=t.bgClass||n.textClass!=t.textClass?(t.bgClass=n.bgClass,t.textClass=n.textClass,hr(e,t)):r&&(t.text.className=r)}function hr(e,t){!function(e,t){var r=t.bgClass?t.bgClass+" "+(t.line.bgClass||""):t.line.bgClass
if(r&&(r+=" CodeMirror-linebackground"),t.background)r?t.background.className=r:(t.background.parentNode.removeChild(t.background),t.background=null)
else if(r){var n=cr(t)
t.background=n.insertBefore(A("div",null,r),n.firstChild),e.display.input.setUneditable(t.background)}}(e,t),t.line.wrapClass?cr(t).className=t.line.wrapClass:t.node!=t.text&&(t.node.className="")
var r=t.textClass?t.textClass+" "+(t.line.textClass||""):t.line.textClass
t.text.className=r||""}function pr(e,t,r,n){if(t.gutter&&(t.node.removeChild(t.gutter),t.gutter=null),t.gutterBackground&&(t.node.removeChild(t.gutterBackground),t.gutterBackground=null),t.line.gutterClass){var i=cr(t)
t.gutterBackground=A("div",null,"CodeMirror-gutter-background "+t.line.gutterClass,"left: "+(e.options.fixedGutter?n.fixedPos:-n.gutterTotalWidth)+"px; width: "+n.gutterTotalWidth+"px"),e.display.input.setUneditable(t.gutterBackground),i.insertBefore(t.gutterBackground,t.text)}var o=t.line.gutterMarkers
if(e.options.lineNumbers||o){var a=cr(t),l=t.gutter=A("div",null,"CodeMirror-gutter-wrapper","left: "+(e.options.fixedGutter?n.fixedPos:-n.gutterTotalWidth)+"px")
if(e.display.input.setUneditable(l),a.insertBefore(l,t.text),t.line.gutterClass&&(l.className+=" "+t.line.gutterClass),!e.options.lineNumbers||o&&o["CodeMirror-linenumbers"]||(t.lineNumber=l.appendChild(A("div",Je(e.options,r),"CodeMirror-linenumber CodeMirror-gutter-elt","left: "+n.gutterLeft["CodeMirror-linenumbers"]+"px; width: "+e.display.lineNumInnerWidth+"px"))),o)for(var s=0;s<e.display.gutterSpecs.length;++s){var u=e.display.gutterSpecs[s].className,c=o.hasOwnProperty(u)&&o[u]
c&&l.appendChild(A("div",[c],"CodeMirror-gutter-elt","left: "+n.gutterLeft[u]+"px; width: "+n.gutterWidth[u]+"px"))}}}function gr(e,t,r){t.alignable&&(t.alignable=null)
for(var n=t.node.firstChild,i=void 0;n;n=i)i=n.nextSibling,"CodeMirror-linewidget"==n.className&&t.node.removeChild(n)
vr(e,t,r)}function mr(e,t,r,n){var i=dr(e,t)
return t.text=t.node=i.pre,i.bgClass&&(t.bgClass=i.bgClass),i.textClass&&(t.textClass=i.textClass),hr(e,t),pr(e,t,r,n),vr(e,t,n),t.node}function vr(e,t,r){if(yr(e,t.line,t,r,!0),t.rest)for(var n=0;n<t.rest.length;n++)yr(e,t.rest[n],t,r,!1)}function yr(e,t,r,n,i){if(t.widgets)for(var o=cr(r),a=0,l=t.widgets;a<l.length;++a){var s=l[a],u=A("div",[s.node],"CodeMirror-linewidget")
s.handleMouseEvents||u.setAttribute("cm-ignore-events","true"),br(s,u,r,n),e.display.input.setUneditable(u),i&&s.above?o.insertBefore(u,r.gutter||r.text):o.appendChild(u),lr(s,"redraw")}}function br(e,t,r,n){if(e.noHScroll){(r.alignable||(r.alignable=[])).push(t)
var i=n.wrapperWidth
t.style.left=n.fixedPos+"px",e.coverGutter||(i-=n.gutterTotalWidth,t.style.paddingLeft=n.gutterTotalWidth+"px"),t.style.width=i+"px"}e.coverGutter&&(t.style.zIndex=5,t.style.position="relative",e.noHScroll||(t.style.marginLeft=-n.gutterTotalWidth+"px"))}function wr(e){if(null!=e.height)return e.height
var t=e.doc.cm
if(!t)return 0
if(!W(document.body,e.node)){var r="position: relative;"
e.coverGutter&&(r+="margin-left: -"+t.display.gutters.offsetWidth+"px;"),e.noHScroll&&(r+="width: "+t.display.wrapper.clientWidth+"px;"),N(t.display.measure,A("div",[e.node],null,r))}return e.height=e.node.parentNode.offsetHeight}function xr(e,t){for(var r=Se(t);r!=e.wrapper;r=r.parentNode)if(!r||1==r.nodeType&&"true"==r.getAttribute("cm-ignore-events")||r.parentNode==e.sizer&&r!=e.mover)return!0}function kr(e){return e.lineSpace.offsetTop}function Cr(e){return e.mover.offsetHeight-e.lineSpace.offsetHeight}function Sr(e){if(e.cachedPaddingH)return e.cachedPaddingH
var t=N(e.measure,A("pre","x")),r=window.getComputedStyle?window.getComputedStyle(t):t.currentStyle,n={left:parseInt(r.paddingLeft),right:parseInt(r.paddingRight)}
return isNaN(n.left)||isNaN(n.right)||(e.cachedPaddingH=n),n}function Lr(e){return j-e.display.nativeBarWidth}function Tr(e){return e.display.scroller.clientWidth-Lr(e)-e.display.barWidth}function Mr(e){return e.display.scroller.clientHeight-Lr(e)-e.display.barHeight}function Nr(e,t,r){if(e.line==t)return{map:e.measure.map,cache:e.measure.cache}
for(var n=0;n<e.rest.length;n++)if(e.rest[n]==t)return{map:e.measure.maps[n],cache:e.measure.caches[n]}
for(var i=0;i<e.rest.length;i++)if(Ye(e.rest[i])>r)return{map:e.measure.maps[i],cache:e.measure.caches[i],before:!0}}function Ar(e,t,r,n){return Dr(e,Wr(e,t),r,n)}function Or(e,t){if(t>=e.display.viewFrom&&t<e.display.viewTo)return e.display.view[sn(e,t)]
var r=e.display.externalMeasured
return r&&t>=r.lineN&&t<r.lineN+r.size?r:void 0}function Wr(e,t){var r=Ye(t),n=Or(e,r)
n&&!n.text?n=null:n&&n.changes&&(ur(e,n,r,rn(e)),e.curOp.forceUpdate=!0),n||(n=function(e,t){var r=Ye(t=Ft(t)),n=e.display.externalMeasured=new nr(e.doc,t,r)
n.lineN=r
var i=n.built=Zt(e,n)
return n.text=i.pre,N(e.display.lineMeasure,i.pre),n}(e,t))
var i=Nr(n,t,r)
return{line:t,view:n,rect:null,map:i.map,cache:i.cache,before:i.before,hasHeights:!1}}function Dr(e,t,r,n,i){t.before&&(r=-1)
var o,s=r+(n||"")
return t.cache.hasOwnProperty(s)?o=t.cache[s]:(t.rect||(t.rect=t.view.text.getBoundingClientRect()),t.hasHeights||(function(e,t,r){var n=e.options.lineWrapping,i=n&&Tr(e)
if(!t.measure.heights||n&&t.measure.width!=i){var o=t.measure.heights=[]
if(n){t.measure.width=i
for(var a=t.text.firstChild.getClientRects(),l=0;l<a.length-1;l++){var s=a[l],u=a[l+1]
Math.abs(s.bottom-u.bottom)>2&&o.push((s.bottom+u.top)/2-r.top)}}o.push(r.bottom-r.top)}}(e,t.view,t.rect),t.hasHeights=!0),(o=function(e,t,r,n){var i,o=Hr(t.map,r,n),s=o.node,u=o.start,c=o.end,d=o.collapse
if(3==s.nodeType){for(var f=0;f<4;f++){for(;u&&ie(t.line.text.charAt(o.coverStart+u));)--u
for(;o.coverStart+c<o.coverEnd&&ie(t.line.text.charAt(o.coverStart+c));)++c
if((i=a&&l<9&&0==u&&c==o.coverEnd-o.coverStart?s.parentNode.getBoundingClientRect():Ir(L(s,u,c).getClientRects(),n)).left||i.right||0==u)break
c=u,u-=1,d="right"}a&&l<11&&(i=function(e,t){if(!window.screen||null==screen.logicalXDPI||screen.logicalXDPI==screen.deviceXDPI||!function(e){if(null!=He)return He
var t=N(e,A("span","x")),r=t.getBoundingClientRect(),n=L(t,0,1).getBoundingClientRect()
return He=Math.abs(r.left-n.left)>1}(e))return t
var r=screen.logicalXDPI/screen.deviceXDPI,n=screen.logicalYDPI/screen.deviceYDPI
return{left:t.left*r,right:t.right*r,top:t.top*n,bottom:t.bottom*n}}(e.display.measure,i))}else{var h
u>0&&(d=n="right"),i=e.options.lineWrapping&&(h=s.getClientRects()).length>1?h["right"==n?h.length-1:0]:s.getBoundingClientRect()}if(a&&l<9&&!u&&(!i||!i.left&&!i.right)){var p=s.parentNode.getClientRects()[0]
i=p?{left:p.left,right:p.left+tn(e.display),top:p.top,bottom:p.bottom}:Pr}for(var g=i.top-t.rect.top,m=i.bottom-t.rect.top,v=(g+m)/2,y=t.view.measure.heights,b=0;b<y.length-1&&!(v<y[b]);b++);var w=b?y[b-1]:0,x=y[b],k={left:("right"==d?i.right:i.left)-t.rect.left,right:("left"==d?i.left:i.right)-t.rect.left,top:w,bottom:x}
return i.left||i.right||(k.bogus=!0),e.options.singleCursorHeightPerLine||(k.rtop=g,k.rbottom=m),k}(e,t,r,n)).bogus||(t.cache[s]=o)),{left:o.left,right:o.right,top:i?o.rtop:o.top,bottom:i?o.rbottom:o.bottom}}var zr,Pr={left:0,right:0,top:0,bottom:0}
function Hr(e,t,r){for(var n,i,o,a,l,s,u=0;u<e.length;u+=3)if(l=e[u],s=e[u+1],t<l?(i=0,o=1,a="left"):t<s?o=1+(i=t-l):(u==e.length-3||t==s&&e[u+3]>t)&&(i=(o=s-l)-1,t>=s&&(a="right")),null!=i){if(n=e[u+2],l==s&&r==(n.insertLeft?"left":"right")&&(a=r),"left"==r&&0==i)for(;u&&e[u-2]==e[u-3]&&e[u-1].insertLeft;)n=e[2+(u-=3)],a="left"
if("right"==r&&i==s-l)for(;u<e.length-3&&e[u+3]==e[u+4]&&!e[u+5].insertLeft;)n=e[(u+=3)+2],a="right"
break}return{node:n,start:i,end:o,collapse:a,coverStart:l,coverEnd:s}}function Ir(e,t){var r=Pr
if("left"==t)for(var n=0;n<e.length&&(r=e[n]).left==r.right;n++);else for(var i=e.length-1;i>=0&&(r=e[i]).left==r.right;i--);return r}function Er(e){if(e.measure&&(e.measure.cache={},e.measure.heights=null,e.rest))for(var t=0;t<e.rest.length;t++)e.measure.caches[t]={}}function Fr(e){e.display.externalMeasure=null,M(e.display.lineMeasure)
for(var t=0;t<e.display.view.length;t++)Er(e.display.view[t])}function Rr(e){Fr(e),e.display.cachedCharWidth=e.display.cachedTextHeight=e.display.cachedPaddingH=null,e.options.lineWrapping||(e.display.maxLineChanged=!0),e.display.lineNumChars=null}function Br(){return c&&m?-(document.body.getBoundingClientRect().left-parseInt(getComputedStyle(document.body).marginLeft)):window.pageXOffset||(document.documentElement||document.body).scrollLeft}function jr(){return c&&m?-(document.body.getBoundingClientRect().top-parseInt(getComputedStyle(document.body).marginTop)):window.pageYOffset||(document.documentElement||document.body).scrollTop}function Vr(e){var t=0
if(e.widgets)for(var r=0;r<e.widgets.length;++r)e.widgets[r].above&&(t+=wr(e.widgets[r]))
return t}function Kr(e,t,r,n,i){if(!i){var o=Vr(t)
r.top+=o,r.bottom+=o}if("line"==n)return r
n||(n="local")
var a=Kt(t)
if("local"==n?a+=kr(e.display):a-=e.display.viewOffset,"page"==n||"window"==n){var l=e.display.lineSpace.getBoundingClientRect()
a+=l.top+("window"==n?0:jr())
var s=l.left+("window"==n?0:Br())
r.left+=s,r.right+=s}return r.top+=a,r.bottom+=a,r}function Gr(e,t,r){if("div"==r)return t
var n=t.left,i=t.top
if("page"==r)n-=Br(),i-=jr()
else if("local"==r||!r){var o=e.display.sizer.getBoundingClientRect()
n+=o.left,i+=o.top}var a=e.display.lineSpace.getBoundingClientRect()
return{left:n-a.left,top:i-a.top}}function Ur(e,t,r,n,i){return n||(n=qe(e.doc,t.line)),Kr(e,n,Ar(e,n,t.ch,i),r)}function qr(e,t,r,n,i,o){function a(t,a){var l=Dr(e,i,t,a?"right":"left",o)
return a?l.left=l.right:l.right=l.left,Kr(e,n,l,r)}n=n||qe(e.doc,t.line),i||(i=Wr(e,n))
var l=ce(n,e.doc.direction),s=t.ch,u=t.sticky
if(s>=n.text.length?(s=n.text.length,u="before"):s<=0&&(s=0,u="after"),!l)return a("before"==u?s-1:s,"before"==u)
function c(e,t,r){return a(r?e-1:e,1==l[t].level!=r)}var d=se(l,s,u),f=le,h=c(s,d,"before"==u)
return null!=f&&(h.other=c(s,f,"before"!=u)),h}function $r(e,t){var r=0
t=lt(e.doc,t),e.options.lineWrapping||(r=tn(e.display)*t.ch)
var n=qe(e.doc,t.line),i=Kt(n)+kr(e.display)
return{left:r,right:r,top:i,bottom:i+n.height}}function _r(e,t,r,n,i){var o=et(e,t,r)
return o.xRel=i,n&&(o.outside=!0),o}function Xr(e,t,r){var n=e.doc
if((r+=e.display.viewOffset)<0)return _r(n.first,0,null,!0,-1)
var i=Ze(n,r),o=n.first+n.size-1
if(i>o)return _r(n.first+n.size-1,qe(n,o).text.length,null,!0,1)
t<0&&(t=0)
for(var a=qe(n,i);;){var l=Jr(e,a,i,t,r),s=It(a,l.ch+(l.xRel>0?1:0))
if(!s)return l
var u=s.find(1)
if(u.line==i)return u
a=qe(n,i=u.line)}}function Yr(e,t,r,n){n-=Vr(t)
var i=t.text.length,o=ae(function(t){return Dr(e,r,t-1).bottom<=n},i,0)
return{begin:o,end:i=ae(function(t){return Dr(e,r,t).top>n},o,i)}}function Zr(e,t,r,n){return r||(r=Wr(e,t)),Yr(e,t,r,Kr(e,t,Dr(e,r,n),"line").top)}function Qr(e,t,r,n){return!(e.bottom<=r)&&(e.top>r||(n?e.left:e.right)>t)}function Jr(e,t,r,n,i){i-=Kt(t)
var o=Wr(e,t),a=Vr(t),l=0,s=t.text.length,u=!0,c=ce(t,e.doc.direction)
if(c){var d=(e.options.lineWrapping?function(e,t,r,n,i,o,a){var l=Yr(e,t,n,a),s=l.begin,u=l.end;/\s/.test(t.text.charAt(u-1))&&u--
for(var c=null,d=null,f=0;f<i.length;f++){var h=i[f]
if(!(h.from>=u||h.to<=s)){var p=Dr(e,n,1!=h.level?Math.min(u,h.to)-1:Math.max(s,h.from)).right,g=p<o?o-p+1e9:p-o;(!c||d>g)&&(c=h,d=g)}}return c||(c=i[i.length-1]),c.from<s&&(c={from:s,to:c.to,level:c.level}),c.to>u&&(c={from:c.from,to:u,level:c.level}),c}:function(e,t,r,n,i,o,a){var l=ae(function(l){var s=i[l],u=1!=s.level
return Qr(qr(e,et(r,u?s.to:s.from,u?"before":"after"),"line",t,n),o,a,!0)},0,i.length-1),s=i[l]
if(l>0){var u=1!=s.level,c=qr(e,et(r,u?s.from:s.to,u?"after":"before"),"line",t,n)
Qr(c,o,a,!0)&&c.top>a&&(s=i[l-1])}return s})(e,t,r,o,c,n,i)
l=(u=1!=d.level)?d.from:d.to-1,s=u?d.to:d.from-1}var f,h,p=null,g=null,m=ae(function(t){var r=Dr(e,o,t)
return r.top+=a,r.bottom+=a,!!Qr(r,n,i,!1)&&(r.top<=i&&r.left<=n&&(p=t,g=r),!0)},l,s),v=!1
if(g){var y=n-g.left<g.right-n,b=y==u
m=p+(b?0:1),h=b?"after":"before",f=y?g.left:g.right}else{u||m!=s&&m!=l||m++,h=0==m?"after":m==t.text.length?"before":Dr(e,o,m-(u?1:0)).bottom+a<=i==u?"after":"before"
var w=qr(e,et(r,m,h),"line",t,o)
f=w.left,v=i<w.top||i>=w.bottom}return _r(r,m=oe(t.text,m,1),h,v,n-f)}function en(e){if(null!=e.cachedTextHeight)return e.cachedTextHeight
if(null==zr){zr=A("pre")
for(var t=0;t<49;++t)zr.appendChild(document.createTextNode("x")),zr.appendChild(A("br"))
zr.appendChild(document.createTextNode("x"))}N(e.measure,zr)
var r=zr.offsetHeight/50
return r>3&&(e.cachedTextHeight=r),M(e.measure),r||1}function tn(e){if(null!=e.cachedCharWidth)return e.cachedCharWidth
var t=A("span","xxxxxxxxxx"),r=A("pre",[t])
N(e.measure,r)
var n=t.getBoundingClientRect(),i=(n.right-n.left)/10
return i>2&&(e.cachedCharWidth=i),i||10}function rn(e){for(var t=e.display,r={},n={},i=t.gutters.clientLeft,o=t.gutters.firstChild,a=0;o;o=o.nextSibling,++a){var l=e.display.gutterSpecs[a].className
r[l]=o.offsetLeft+o.clientLeft+i,n[l]=o.clientWidth}return{fixedPos:nn(t),gutterTotalWidth:t.gutters.offsetWidth,gutterLeft:r,gutterWidth:n,wrapperWidth:t.wrapper.clientWidth}}function nn(e){return e.scroller.getBoundingClientRect().left-e.sizer.getBoundingClientRect().left}function on(e){var t=en(e.display),r=e.options.lineWrapping,n=r&&Math.max(5,e.display.scroller.clientWidth/tn(e.display)-3)
return function(i){if(jt(e.doc,i))return 0
var o=0
if(i.widgets)for(var a=0;a<i.widgets.length;a++)i.widgets[a].height&&(o+=i.widgets[a].height)
return r?o+(Math.ceil(i.text.length/n)||1)*t:o+t}}function an(e){var t=e.doc,r=on(e)
t.iter(function(e){var t=r(e)
t!=e.height&&Xe(e,t)})}function ln(e,t,r,n){var i=e.display
if(!r&&"true"==Se(t).getAttribute("cm-not-content"))return null
var o,a,l=i.lineSpace.getBoundingClientRect()
try{o=t.clientX-l.left,a=t.clientY-l.top}catch(t){return null}var s,u=Xr(e,o,a)
if(n&&1==u.xRel&&(s=qe(e.doc,u.line).text).length==u.ch){var c=F(s,s.length,e.options.tabSize)-s.length
u=et(u.line,Math.max(0,Math.round((o-Sr(e.display).left)/tn(e.display))-c))}return u}function sn(e,t){if(t>=e.display.viewTo)return null
if((t-=e.display.viewFrom)<0)return null
for(var r=e.display.view,n=0;n<r.length;n++)if((t-=r[n].size)<0)return n}function un(e,t,r,n){null==t&&(t=e.doc.first),null==r&&(r=e.doc.first+e.doc.size),n||(n=0)
var i=e.display
if(n&&r<i.viewTo&&(null==i.updateLineNumbers||i.updateLineNumbers>t)&&(i.updateLineNumbers=t),e.curOp.viewChanged=!0,t>=i.viewTo)kt&&Rt(e.doc,t)<i.viewTo&&dn(e)
else if(r<=i.viewFrom)kt&&Bt(e.doc,r+n)>i.viewFrom?dn(e):(i.viewFrom+=n,i.viewTo+=n)
else if(t<=i.viewFrom&&r>=i.viewTo)dn(e)
else if(t<=i.viewFrom){var o=fn(e,r,r+n,1)
o?(i.view=i.view.slice(o.index),i.viewFrom=o.lineN,i.viewTo+=n):dn(e)}else if(r>=i.viewTo){var a=fn(e,t,t,-1)
a?(i.view=i.view.slice(0,a.index),i.viewTo=a.lineN):dn(e)}else{var l=fn(e,t,t,-1),s=fn(e,r,r+n,1)
l&&s?(i.view=i.view.slice(0,l.index).concat(ir(e,l.lineN,s.lineN)).concat(i.view.slice(s.index)),i.viewTo+=n):dn(e)}var u=i.externalMeasured
u&&(r<u.lineN?u.lineN+=n:t<u.lineN+u.size&&(i.externalMeasured=null))}function cn(e,t,r){e.curOp.viewChanged=!0
var n=e.display,i=e.display.externalMeasured
if(i&&t>=i.lineN&&t<i.lineN+i.size&&(n.externalMeasured=null),!(t<n.viewFrom||t>=n.viewTo)){var o=n.view[sn(e,t)]
if(null!=o.node){var a=o.changes||(o.changes=[]);-1==B(a,r)&&a.push(r)}}}function dn(e){e.display.viewFrom=e.display.viewTo=e.doc.first,e.display.view=[],e.display.viewOffset=0}function fn(e,t,r,n){var i,o=sn(e,t),a=e.display.view
if(!kt||r==e.doc.first+e.doc.size)return{index:o,lineN:r}
for(var l=e.display.viewFrom,s=0;s<o;s++)l+=a[s].size
if(l!=t){if(n>0){if(o==a.length-1)return null
i=l+a[o].size-t,o++}else i=l-t
t+=i,r+=i}for(;Rt(e.doc,r)!=r;){if(o==(n<0?0:a.length-1))return null
r+=n*a[o-(n<0?1:0)].size,o+=n}return{index:o,lineN:r}}function hn(e){for(var t=e.display.view,r=0,n=0;n<t.length;n++){var i=t[n]
i.hidden||i.node&&!i.changes||++r}return r}function pn(e){e.display.input.showSelection(e.display.input.prepareSelection())}function gn(e,t){void 0===t&&(t=!0)
for(var r=e.doc,n={},i=n.cursors=document.createDocumentFragment(),o=n.selection=document.createDocumentFragment(),a=0;a<r.sel.ranges.length;a++)if(t||a!=r.sel.primIndex){var l=r.sel.ranges[a]
if(!(l.from().line>=e.display.viewTo||l.to().line<e.display.viewFrom)){var s=l.empty();(s||e.options.showCursorWhenSelecting)&&mn(e,l.head,i),s||yn(e,l,o)}}return n}function mn(e,t,r){var n=qr(e,t,"div",null,null,!e.options.singleCursorHeightPerLine),i=r.appendChild(A("div"," ","CodeMirror-cursor"))
if(i.style.left=n.left+"px",i.style.top=n.top+"px",i.style.height=Math.max(0,n.bottom-n.top)*e.options.cursorHeight+"px",n.other){var o=r.appendChild(A("div"," ","CodeMirror-cursor CodeMirror-secondarycursor"))
o.style.display="",o.style.left=n.other.left+"px",o.style.top=n.other.top+"px",o.style.height=.85*(n.other.bottom-n.other.top)+"px"}}function vn(e,t){return e.top-t.top||e.left-t.left}function yn(e,t,r){var n=e.display,i=e.doc,o=document.createDocumentFragment(),a=Sr(e.display),l=a.left,s=Math.max(n.sizerWidth,Tr(e)-n.sizer.offsetLeft)-a.right,u="ltr"==i.direction
function c(e,t,r,n){t<0&&(t=0),t=Math.round(t),n=Math.round(n),o.appendChild(A("div",null,"CodeMirror-selected","position: absolute; left: "+e+"px;\n                             top: "+t+"px; width: "+(null==r?s-e:r)+"px;\n                             height: "+(n-t)+"px"))}function d(t,r,n){var o,a,d=qe(i,t),f=d.text.length
function h(r,n){return Ur(e,et(t,r),"div",d,n)}function p(t,r,n){var i=Zr(e,d,null,t),o="ltr"==r==("after"==n)?"left":"right"
return h("after"==n?i.begin:i.end-(/\s/.test(d.text.charAt(i.end-1))?2:1),o)[o]}var g=ce(d,i.direction)
return function(e,t,r,n){if(!e)return n(t,r,"ltr",0)
for(var i=!1,o=0;o<e.length;++o){var a=e[o];(a.from<r&&a.to>t||t==r&&a.to==t)&&(n(Math.max(a.from,t),Math.min(a.to,r),1==a.level?"rtl":"ltr",o),i=!0)}i||n(t,r,"ltr")}(g,r||0,null==n?f:n,function(e,t,i,d){var m="ltr"==i,v=h(e,m?"left":"right"),y=h(t-1,m?"right":"left"),b=null==r&&0==e,w=null==n&&t==f,x=0==d,k=!g||d==g.length-1
if(y.top-v.top<=3){var C=(u?w:b)&&k,S=(u?b:w)&&x?l:(m?v:y).left,L=C?s:(m?y:v).right
c(S,v.top,L-S,v.bottom)}else{var T,M,N,A
m?(T=u&&b&&x?l:v.left,M=u?s:p(e,i,"before"),N=u?l:p(t,i,"after"),A=u&&w&&k?s:y.right):(T=u?p(e,i,"before"):l,M=!u&&b&&x?s:v.right,N=!u&&w&&k?l:y.left,A=u?p(t,i,"after"):s),c(T,v.top,M-T,v.bottom),v.bottom<y.top&&c(l,v.bottom,null,y.top),c(N,y.top,A-N,y.bottom)}(!o||vn(v,o)<0)&&(o=v),vn(y,o)<0&&(o=y),(!a||vn(v,a)<0)&&(a=v),vn(y,a)<0&&(a=y)}),{start:o,end:a}}var f=t.from(),h=t.to()
if(f.line==h.line)d(f.line,f.ch,h.ch)
else{var p=qe(i,f.line),g=qe(i,h.line),m=Ft(p)==Ft(g),v=d(f.line,f.ch,m?p.text.length+1:null).end,y=d(h.line,m?0:null,h.ch).start
m&&(v.top<y.top-2?(c(v.right,v.top,null,v.bottom),c(l,y.top,y.left,y.bottom)):c(v.right,v.top,y.left-v.right,v.bottom)),v.bottom<y.top&&c(l,v.bottom,null,y.top)}r.appendChild(o)}function bn(e){if(e.state.focused){var t=e.display
clearInterval(t.blinker)
var r=!0
t.cursorDiv.style.visibility="",e.options.cursorBlinkRate>0?t.blinker=setInterval(function(){return t.cursorDiv.style.visibility=(r=!r)?"":"hidden"},e.options.cursorBlinkRate):e.options.cursorBlinkRate<0&&(t.cursorDiv.style.visibility="hidden")}}function wn(e){e.state.focused||(e.display.input.focus(),kn(e))}function xn(e){e.state.delayingBlurEvent=!0,setTimeout(function(){e.state.delayingBlurEvent&&(e.state.delayingBlurEvent=!1,Cn(e))},100)}function kn(e,t){e.state.delayingBlurEvent&&(e.state.delayingBlurEvent=!1),"nocursor"!=e.options.readOnly&&(e.state.focused||(ge(e,"focus",e,t),e.state.focused=!0,z(e.display.wrapper,"CodeMirror-focused"),e.curOp||e.display.selForContextMenu==e.doc.sel||(e.display.input.reset(),s&&setTimeout(function(){return e.display.input.reset(!0)},20)),e.display.input.receivedFocus()),bn(e))}function Cn(e,t){e.state.delayingBlurEvent||(e.state.focused&&(ge(e,"blur",e,t),e.state.focused=!1,T(e.display.wrapper,"CodeMirror-focused")),clearInterval(e.display.blinker),setTimeout(function(){e.state.focused||(e.display.shift=!1)},150))}function Sn(e){for(var t=e.display,r=t.lineDiv.offsetTop,n=0;n<t.view.length;n++){var i=t.view[n],o=e.options.lineWrapping,s=void 0,u=0
if(!i.hidden){if(a&&l<8){var c=i.node.offsetTop+i.node.offsetHeight
s=c-r,r=c}else{var d=i.node.getBoundingClientRect()
s=d.bottom-d.top,!o&&i.text.firstChild&&(u=i.text.firstChild.getBoundingClientRect().right-d.left-1)}var f=i.line.height-s
if((f>.005||f<-.005)&&(Xe(i.line,s),Ln(i.line),i.rest))for(var h=0;h<i.rest.length;h++)Ln(i.rest[h])
if(u>e.display.sizerWidth){var p=Math.ceil(u/tn(e.display))
p>e.display.maxLineLength&&(e.display.maxLineLength=p,e.display.maxLine=i.line,e.display.maxLineChanged=!0)}}}}function Ln(e){if(e.widgets)for(var t=0;t<e.widgets.length;++t){var r=e.widgets[t],n=r.node.parentNode
n&&(r.height=n.offsetHeight)}}function Tn(e,t,r){var n=r&&null!=r.top?Math.max(0,r.top):e.scroller.scrollTop
n=Math.floor(n-kr(e))
var i=r&&null!=r.bottom?r.bottom:n+e.wrapper.clientHeight,o=Ze(t,n),a=Ze(t,i)
if(r&&r.ensure){var l=r.ensure.from.line,s=r.ensure.to.line
l<o?(o=l,a=Ze(t,Kt(qe(t,l))+e.wrapper.clientHeight)):Math.min(s,t.lastLine())>=a&&(o=Ze(t,Kt(qe(t,s))-e.wrapper.clientHeight),a=s)}return{from:o,to:Math.max(a,o+1)}}function Mn(e,t){var r=e.display,n=en(e.display)
t.top<0&&(t.top=0)
var i=e.curOp&&null!=e.curOp.scrollTop?e.curOp.scrollTop:r.scroller.scrollTop,o=Mr(e),a={}
t.bottom-t.top>o&&(t.bottom=t.top+o)
var l=e.doc.height+Cr(r),s=t.top<n,u=t.bottom>l-n
if(t.top<i)a.scrollTop=s?0:t.top
else if(t.bottom>i+o){var c=Math.min(t.top,(u?l:t.bottom)-o)
c!=i&&(a.scrollTop=c)}var d=e.curOp&&null!=e.curOp.scrollLeft?e.curOp.scrollLeft:r.scroller.scrollLeft,f=Tr(e)-(e.options.fixedGutter?r.gutters.offsetWidth:0),h=t.right-t.left>f
return h&&(t.right=t.left+f),t.left<10?a.scrollLeft=0:t.left<d?a.scrollLeft=Math.max(0,t.left-(h?0:10)):t.right>f+d-3&&(a.scrollLeft=t.right+(h?0:10)-f),a}function Nn(e,t){null!=t&&(Wn(e),e.curOp.scrollTop=(null==e.curOp.scrollTop?e.doc.scrollTop:e.curOp.scrollTop)+t)}function An(e){Wn(e)
var t=e.getCursor()
e.curOp.scrollToPos={from:t,to:t,margin:e.options.cursorScrollMargin}}function On(e,t,r){null==t&&null==r||Wn(e),null!=t&&(e.curOp.scrollLeft=t),null!=r&&(e.curOp.scrollTop=r)}function Wn(e){var t=e.curOp.scrollToPos
t&&(e.curOp.scrollToPos=null,Dn(e,$r(e,t.from),$r(e,t.to),t.margin))}function Dn(e,t,r,n){var i=Mn(e,{left:Math.min(t.left,r.left),top:Math.min(t.top,r.top)-n,right:Math.max(t.right,r.right),bottom:Math.max(t.bottom,r.bottom)+n})
On(e,i.scrollLeft,i.scrollTop)}function zn(e,t){Math.abs(e.doc.scrollTop-t)<2||(r||oi(e,{top:t}),Pn(e,t,!0),r&&oi(e),ei(e,100))}function Pn(e,t,r){t=Math.min(e.display.scroller.scrollHeight-e.display.scroller.clientHeight,t),(e.display.scroller.scrollTop!=t||r)&&(e.doc.scrollTop=t,e.display.scrollbars.setScrollTop(t),e.display.scroller.scrollTop!=t&&(e.display.scroller.scrollTop=t))}function Hn(e,t,r,n){t=Math.min(t,e.display.scroller.scrollWidth-e.display.scroller.clientWidth),(r?t==e.doc.scrollLeft:Math.abs(e.doc.scrollLeft-t)<2)&&!n||(e.doc.scrollLeft=t,si(e),e.display.scroller.scrollLeft!=t&&(e.display.scroller.scrollLeft=t),e.display.scrollbars.setScrollLeft(t))}function In(e){var t=e.display,r=t.gutters.offsetWidth,n=Math.round(e.doc.height+Cr(e.display))
return{clientHeight:t.scroller.clientHeight,viewHeight:t.wrapper.clientHeight,scrollWidth:t.scroller.scrollWidth,clientWidth:t.scroller.clientWidth,viewWidth:t.wrapper.clientWidth,barLeft:e.options.fixedGutter?r:0,docHeight:n,scrollHeight:n+Lr(e)+t.barHeight,nativeBarWidth:t.nativeBarWidth,gutterWidth:r}}var En=function(e,t,r){this.cm=r
var n=this.vert=A("div",[A("div",null,null,"min-width: 1px")],"CodeMirror-vscrollbar"),i=this.horiz=A("div",[A("div",null,null,"height: 100%; min-height: 1px")],"CodeMirror-hscrollbar")
n.tabIndex=i.tabIndex=-1,e(n),e(i),fe(n,"scroll",function(){n.clientHeight&&t(n.scrollTop,"vertical")}),fe(i,"scroll",function(){i.clientWidth&&t(i.scrollLeft,"horizontal")}),this.checkedZeroWidth=!1,a&&l<8&&(this.horiz.style.minHeight=this.vert.style.minWidth="18px")}
En.prototype.update=function(e){var t=e.scrollWidth>e.clientWidth+1,r=e.scrollHeight>e.clientHeight+1,n=e.nativeBarWidth
if(r){this.vert.style.display="block",this.vert.style.bottom=t?n+"px":"0"
var i=e.viewHeight-(t?n:0)
this.vert.firstChild.style.height=Math.max(0,e.scrollHeight-e.clientHeight+i)+"px"}else this.vert.style.display="",this.vert.firstChild.style.height="0"
if(t){this.horiz.style.display="block",this.horiz.style.right=r?n+"px":"0",this.horiz.style.left=e.barLeft+"px"
var o=e.viewWidth-e.barLeft-(r?n:0)
this.horiz.firstChild.style.width=Math.max(0,e.scrollWidth-e.clientWidth+o)+"px"}else this.horiz.style.display="",this.horiz.firstChild.style.width="0"
return!this.checkedZeroWidth&&e.clientHeight>0&&(0==n&&this.zeroWidthHack(),this.checkedZeroWidth=!0),{right:r?n:0,bottom:t?n:0}},En.prototype.setScrollLeft=function(e){this.horiz.scrollLeft!=e&&(this.horiz.scrollLeft=e),this.disableHoriz&&this.enableZeroWidthBar(this.horiz,this.disableHoriz,"horiz")},En.prototype.setScrollTop=function(e){this.vert.scrollTop!=e&&(this.vert.scrollTop=e),this.disableVert&&this.enableZeroWidthBar(this.vert,this.disableVert,"vert")},En.prototype.zeroWidthHack=function(){var e=y&&!h?"12px":"18px"
this.horiz.style.height=this.vert.style.width=e,this.horiz.style.pointerEvents=this.vert.style.pointerEvents="none",this.disableHoriz=new R,this.disableVert=new R},En.prototype.enableZeroWidthBar=function(e,t,r){e.style.pointerEvents="auto",t.set(1e3,function n(){var i=e.getBoundingClientRect();("vert"==r?document.elementFromPoint(i.right-1,(i.top+i.bottom)/2):document.elementFromPoint((i.right+i.left)/2,i.bottom-1))!=e?e.style.pointerEvents="none":t.set(1e3,n)})},En.prototype.clear=function(){var e=this.horiz.parentNode
e.removeChild(this.horiz),e.removeChild(this.vert)}
var Fn=function(){}
function Rn(e,t){t||(t=In(e))
var r=e.display.barWidth,n=e.display.barHeight
Bn(e,t)
for(var i=0;i<4&&r!=e.display.barWidth||n!=e.display.barHeight;i++)r!=e.display.barWidth&&e.options.lineWrapping&&Sn(e),Bn(e,In(e)),r=e.display.barWidth,n=e.display.barHeight}function Bn(e,t){var r=e.display,n=r.scrollbars.update(t)
r.sizer.style.paddingRight=(r.barWidth=n.right)+"px",r.sizer.style.paddingBottom=(r.barHeight=n.bottom)+"px",r.heightForcer.style.borderBottom=n.bottom+"px solid transparent",n.right&&n.bottom?(r.scrollbarFiller.style.display="block",r.scrollbarFiller.style.height=n.bottom+"px",r.scrollbarFiller.style.width=n.right+"px"):r.scrollbarFiller.style.display="",n.bottom&&e.options.coverGutterNextToScrollbar&&e.options.fixedGutter?(r.gutterFiller.style.display="block",r.gutterFiller.style.height=n.bottom+"px",r.gutterFiller.style.width=t.gutterWidth+"px"):r.gutterFiller.style.display=""}Fn.prototype.update=function(){return{bottom:0,right:0}},Fn.prototype.setScrollLeft=function(){},Fn.prototype.setScrollTop=function(){},Fn.prototype.clear=function(){}
var jn={native:En,null:Fn}
function Vn(e){e.display.scrollbars&&(e.display.scrollbars.clear(),e.display.scrollbars.addClass&&T(e.display.wrapper,e.display.scrollbars.addClass)),e.display.scrollbars=new jn[e.options.scrollbarStyle](function(t){e.display.wrapper.insertBefore(t,e.display.scrollbarFiller),fe(t,"mousedown",function(){e.state.focused&&setTimeout(function(){return e.display.input.focus()},0)}),t.setAttribute("cm-not-content","true")},function(t,r){"horizontal"==r?Hn(e,t):zn(e,t)},e),e.display.scrollbars.addClass&&z(e.display.wrapper,e.display.scrollbars.addClass)}var Kn=0
function Gn(e){var t
e.curOp={cm:e,viewChanged:!1,startHeight:e.doc.height,forceUpdate:!1,updateInput:0,typing:!1,changeObjs:null,cursorActivityHandlers:null,cursorActivityCalled:0,selectionChanged:!1,updateMaxLine:!1,scrollLeft:null,scrollTop:null,scrollToPos:null,focus:!1,id:++Kn},t=e.curOp,or?or.ops.push(t):t.ownsGroup=or={ops:[t],delayedCallbacks:[]}}function Un(e){var t=e.curOp
t&&function(e,t){var r=e.ownsGroup
if(r)try{!function(e){var t=e.delayedCallbacks,r=0
do{for(;r<t.length;r++)t[r].call(null)
for(var n=0;n<e.ops.length;n++){var i=e.ops[n]
if(i.cursorActivityHandlers)for(;i.cursorActivityCalled<i.cursorActivityHandlers.length;)i.cursorActivityHandlers[i.cursorActivityCalled++].call(null,i.cm)}}while(r<t.length)}(r)}finally{or=null,function(e){for(var t=0;t<e.ops.length;t++)e.ops[t].cm.curOp=null
!function(e){for(var t=e.ops,r=0;r<t.length;r++)qn(t[r])
for(var n=0;n<t.length;n++)(i=t[n]).updatedDisplay=i.mustUpdate&&ni(i.cm,i.update)
for(var i,o=0;o<t.length;o++)$n(t[o])
for(var a=0;a<t.length;a++)_n(t[a])
for(var l=0;l<t.length;l++)Xn(t[l])}(e)}(r)}}(t)}function qn(e){var t=e.cm,r=t.display
!function(e){var t=e.display
!t.scrollbarsClipped&&t.scroller.offsetWidth&&(t.nativeBarWidth=t.scroller.offsetWidth-t.scroller.clientWidth,t.heightForcer.style.height=Lr(e)+"px",t.sizer.style.marginBottom=-t.nativeBarWidth+"px",t.sizer.style.borderRightWidth=Lr(e)+"px",t.scrollbarsClipped=!0)}(t),e.updateMaxLine&&Ut(t),e.mustUpdate=e.viewChanged||e.forceUpdate||null!=e.scrollTop||e.scrollToPos&&(e.scrollToPos.from.line<r.viewFrom||e.scrollToPos.to.line>=r.viewTo)||r.maxLineChanged&&t.options.lineWrapping,e.update=e.mustUpdate&&new ri(t,e.mustUpdate&&{top:e.scrollTop,ensure:e.scrollToPos},e.forceUpdate)}function $n(e){var t=e.cm,r=t.display
e.updatedDisplay&&Sn(t),e.barMeasure=In(t),r.maxLineChanged&&!t.options.lineWrapping&&(e.adjustWidthTo=Ar(t,r.maxLine,r.maxLine.text.length).left+3,t.display.sizerWidth=e.adjustWidthTo,e.barMeasure.scrollWidth=Math.max(r.scroller.clientWidth,r.sizer.offsetLeft+e.adjustWidthTo+Lr(t)+t.display.barWidth),e.maxScrollLeft=Math.max(0,r.sizer.offsetLeft+e.adjustWidthTo-Tr(t))),(e.updatedDisplay||e.selectionChanged)&&(e.preparedSelection=r.input.prepareSelection())}function _n(e){var t=e.cm
null!=e.adjustWidthTo&&(t.display.sizer.style.minWidth=e.adjustWidthTo+"px",e.maxScrollLeft<t.doc.scrollLeft&&Hn(t,Math.min(t.display.scroller.scrollLeft,e.maxScrollLeft),!0),t.display.maxLineChanged=!1)
var r=e.focus&&e.focus==D()
e.preparedSelection&&t.display.input.showSelection(e.preparedSelection,r),(e.updatedDisplay||e.startHeight!=t.doc.height)&&Rn(t,e.barMeasure),e.updatedDisplay&&li(t,e.barMeasure),e.selectionChanged&&bn(t),t.state.focused&&e.updateInput&&t.display.input.reset(e.typing),r&&wn(e.cm)}function Xn(e){var t=e.cm,r=t.display,n=t.doc
e.updatedDisplay&&ii(t,e.update),null==r.wheelStartX||null==e.scrollTop&&null==e.scrollLeft&&!e.scrollToPos||(r.wheelStartX=r.wheelStartY=null),null!=e.scrollTop&&Pn(t,e.scrollTop,e.forceScroll),null!=e.scrollLeft&&Hn(t,e.scrollLeft,!0,!0),e.scrollToPos&&function(e,t){if(!me(e,"scrollCursorIntoView")){var r=e.display,n=r.sizer.getBoundingClientRect(),i=null
if(t.top+n.top<0?i=!0:t.bottom+n.top>(window.innerHeight||document.documentElement.clientHeight)&&(i=!1),null!=i&&!p){var o=A("div","​",null,"position: absolute;\n                         top: "+(t.top-r.viewOffset-kr(e.display))+"px;\n                         height: "+(t.bottom-t.top+Lr(e)+r.barHeight)+"px;\n                         left: "+t.left+"px; width: "+Math.max(2,t.right-t.left)+"px;")
e.display.lineSpace.appendChild(o),o.scrollIntoView(i),e.display.lineSpace.removeChild(o)}}}(t,function(e,t,r,n){var i
null==n&&(n=0),e.options.lineWrapping||t!=r||(r="before"==(t=t.ch?et(t.line,"before"==t.sticky?t.ch-1:t.ch,"after"):t).sticky?et(t.line,t.ch+1,"before"):t)
for(var o=0;o<5;o++){var a=!1,l=qr(e,t),s=r&&r!=t?qr(e,r):l,u=Mn(e,i={left:Math.min(l.left,s.left),top:Math.min(l.top,s.top)-n,right:Math.max(l.left,s.left),bottom:Math.max(l.bottom,s.bottom)+n}),c=e.doc.scrollTop,d=e.doc.scrollLeft
if(null!=u.scrollTop&&(zn(e,u.scrollTop),Math.abs(e.doc.scrollTop-c)>1&&(a=!0)),null!=u.scrollLeft&&(Hn(e,u.scrollLeft),Math.abs(e.doc.scrollLeft-d)>1&&(a=!0)),!a)break}return i}(t,lt(n,e.scrollToPos.from),lt(n,e.scrollToPos.to),e.scrollToPos.margin))
var i=e.maybeHiddenMarkers,o=e.maybeUnhiddenMarkers
if(i)for(var a=0;a<i.length;++a)i[a].lines.length||ge(i[a],"hide")
if(o)for(var l=0;l<o.length;++l)o[l].lines.length&&ge(o[l],"unhide")
r.wrapper.offsetHeight&&(n.scrollTop=t.display.scroller.scrollTop),e.changeObjs&&ge(t,"changes",t,e.changeObjs),e.update&&e.update.finish()}function Yn(e,t){if(e.curOp)return t()
Gn(e)
try{return t()}finally{Un(e)}}function Zn(e,t){return function(){if(e.curOp)return t.apply(e,arguments)
Gn(e)
try{return t.apply(e,arguments)}finally{Un(e)}}}function Qn(e){return function(){if(this.curOp)return e.apply(this,arguments)
Gn(this)
try{return e.apply(this,arguments)}finally{Un(this)}}}function Jn(e){return function(){var t=this.cm
if(!t||t.curOp)return e.apply(this,arguments)
Gn(t)
try{return e.apply(this,arguments)}finally{Un(t)}}}function ei(e,t){e.doc.highlightFrontier<e.display.viewTo&&e.state.highlight.set(t,I(ti,e))}function ti(e){var t=e.doc
if(!(t.highlightFrontier>=e.display.viewTo)){var r=+new Date+e.options.workTime,n=ht(e,t.highlightFrontier),i=[]
t.iter(n.line,Math.min(t.first+t.size,e.display.viewTo+500),function(o){if(n.line>=e.display.viewFrom){var a=o.styles,l=o.text.length>e.options.maxHighlightLength?Ve(t.mode,n.state):null,s=dt(e,o,n,!0)
l&&(n.state=l),o.styles=s.styles
var u=o.styleClasses,c=s.classes
c?o.styleClasses=c:u&&(o.styleClasses=null)
for(var d=!a||a.length!=o.styles.length||u!=c&&(!u||!c||u.bgClass!=c.bgClass||u.textClass!=c.textClass),f=0;!d&&f<a.length;++f)d=a[f]!=o.styles[f]
d&&i.push(n.line),o.stateAfter=n.save(),n.nextLine()}else o.text.length<=e.options.maxHighlightLength&&pt(e,o.text,n),o.stateAfter=n.line%5==0?n.save():null,n.nextLine()
if(+new Date>r)return ei(e,e.options.workDelay),!0}),t.highlightFrontier=n.line,t.modeFrontier=Math.max(t.modeFrontier,n.line),i.length&&Yn(e,function(){for(var t=0;t<i.length;t++)cn(e,i[t],"text")})}}var ri=function(e,t,r){var n=e.display
this.viewport=t,this.visible=Tn(n,e.doc,t),this.editorIsHidden=!n.wrapper.offsetWidth,this.wrapperHeight=n.wrapper.clientHeight,this.wrapperWidth=n.wrapper.clientWidth,this.oldDisplayWidth=Tr(e),this.force=r,this.dims=rn(e),this.events=[]}
function ni(e,t){var r=e.display,n=e.doc
if(t.editorIsHidden)return dn(e),!1
if(!t.force&&t.visible.from>=r.viewFrom&&t.visible.to<=r.viewTo&&(null==r.updateLineNumbers||r.updateLineNumbers>=r.viewTo)&&r.renderedView==r.view&&0==hn(e))return!1
ui(e)&&(dn(e),t.dims=rn(e))
var i=n.first+n.size,o=Math.max(t.visible.from-e.options.viewportMargin,n.first),a=Math.min(i,t.visible.to+e.options.viewportMargin)
r.viewFrom<o&&o-r.viewFrom<20&&(o=Math.max(n.first,r.viewFrom)),r.viewTo>a&&r.viewTo-a<20&&(a=Math.min(i,r.viewTo)),kt&&(o=Rt(e.doc,o),a=Bt(e.doc,a))
var l=o!=r.viewFrom||a!=r.viewTo||r.lastWrapHeight!=t.wrapperHeight||r.lastWrapWidth!=t.wrapperWidth
!function(e,t,r){var n=e.display
0==n.view.length||t>=n.viewTo||r<=n.viewFrom?(n.view=ir(e,t,r),n.viewFrom=t):(n.viewFrom>t?n.view=ir(e,t,n.viewFrom).concat(n.view):n.viewFrom<t&&(n.view=n.view.slice(sn(e,t))),n.viewFrom=t,n.viewTo<r?n.view=n.view.concat(ir(e,n.viewTo,r)):n.viewTo>r&&(n.view=n.view.slice(0,sn(e,r)))),n.viewTo=r}(e,o,a),r.viewOffset=Kt(qe(e.doc,r.viewFrom)),e.display.mover.style.top=r.viewOffset+"px"
var u=hn(e)
if(!l&&0==u&&!t.force&&r.renderedView==r.view&&(null==r.updateLineNumbers||r.updateLineNumbers>=r.viewTo))return!1
var c=function(e){if(e.hasFocus())return null
var t=D()
if(!t||!W(e.display.lineDiv,t))return null
var r={activeElt:t}
if(window.getSelection){var n=window.getSelection()
n.anchorNode&&n.extend&&W(e.display.lineDiv,n.anchorNode)&&(r.anchorNode=n.anchorNode,r.anchorOffset=n.anchorOffset,r.focusNode=n.focusNode,r.focusOffset=n.focusOffset)}return r}(e)
return u>4&&(r.lineDiv.style.display="none"),function(e,t,r){var n=e.display,i=e.options.lineNumbers,o=n.lineDiv,a=o.firstChild
function l(t){var r=t.nextSibling
return s&&y&&e.display.currentWheelTarget==t?t.style.display="none":t.parentNode.removeChild(t),r}for(var u=n.view,c=n.viewFrom,d=0;d<u.length;d++){var f=u[d]
if(f.hidden);else if(f.node&&f.node.parentNode==o){for(;a!=f.node;)a=l(a)
var h=i&&null!=t&&t<=c&&f.lineNumber
f.changes&&(B(f.changes,"gutter")>-1&&(h=!1),ur(e,f,c,r)),h&&(M(f.lineNumber),f.lineNumber.appendChild(document.createTextNode(Je(e.options,c)))),a=f.node.nextSibling}else{var p=mr(e,f,c,r)
o.insertBefore(p,a)}c+=f.size}for(;a;)a=l(a)}(e,r.updateLineNumbers,t.dims),u>4&&(r.lineDiv.style.display=""),r.renderedView=r.view,function(e){if(e&&e.activeElt&&e.activeElt!=D()&&(e.activeElt.focus(),e.anchorNode&&W(document.body,e.anchorNode)&&W(document.body,e.focusNode))){var t=window.getSelection(),r=document.createRange()
r.setEnd(e.anchorNode,e.anchorOffset),r.collapse(!1),t.removeAllRanges(),t.addRange(r),t.extend(e.focusNode,e.focusOffset)}}(c),M(r.cursorDiv),M(r.selectionDiv),r.gutters.style.height=r.sizer.style.minHeight=0,l&&(r.lastWrapHeight=t.wrapperHeight,r.lastWrapWidth=t.wrapperWidth,ei(e,400)),r.updateLineNumbers=null,!0}function ii(e,t){for(var r=t.viewport,n=!0;(n&&e.options.lineWrapping&&t.oldDisplayWidth!=Tr(e)||(r&&null!=r.top&&(r={top:Math.min(e.doc.height+Cr(e.display)-Mr(e),r.top)}),t.visible=Tn(e.display,e.doc,r),!(t.visible.from>=e.display.viewFrom&&t.visible.to<=e.display.viewTo)))&&ni(e,t);n=!1){Sn(e)
var i=In(e)
pn(e),Rn(e,i),li(e,i),t.force=!1}t.signal(e,"update",e),e.display.viewFrom==e.display.reportedViewFrom&&e.display.viewTo==e.display.reportedViewTo||(t.signal(e,"viewportChange",e,e.display.viewFrom,e.display.viewTo),e.display.reportedViewFrom=e.display.viewFrom,e.display.reportedViewTo=e.display.viewTo)}function oi(e,t){var r=new ri(e,t)
if(ni(e,r)){Sn(e),ii(e,r)
var n=In(e)
pn(e),Rn(e,n),li(e,n),r.finish()}}function ai(e){var t=e.gutters.offsetWidth
e.sizer.style.marginLeft=t+"px"}function li(e,t){e.display.sizer.style.minHeight=t.docHeight+"px",e.display.heightForcer.style.top=t.docHeight+"px",e.display.gutters.style.height=t.docHeight+e.display.barHeight+Lr(e)+"px"}function si(e){var t=e.display,r=t.view
if(t.alignWidgets||t.gutters.firstChild&&e.options.fixedGutter){for(var n=nn(t)-t.scroller.scrollLeft+e.doc.scrollLeft,i=t.gutters.offsetWidth,o=n+"px",a=0;a<r.length;a++)if(!r[a].hidden){e.options.fixedGutter&&(r[a].gutter&&(r[a].gutter.style.left=o),r[a].gutterBackground&&(r[a].gutterBackground.style.left=o))
var l=r[a].alignable
if(l)for(var s=0;s<l.length;s++)l[s].style.left=o}e.options.fixedGutter&&(t.gutters.style.left=n+i+"px")}}function ui(e){if(!e.options.lineNumbers)return!1
var t=e.doc,r=Je(e.options,t.first+t.size-1),n=e.display
if(r.length!=n.lineNumChars){var i=n.measure.appendChild(A("div",[A("div",r)],"CodeMirror-linenumber CodeMirror-gutter-elt")),o=i.firstChild.offsetWidth,a=i.offsetWidth-o
return n.lineGutter.style.width="",n.lineNumInnerWidth=Math.max(o,n.lineGutter.offsetWidth-a)+1,n.lineNumWidth=n.lineNumInnerWidth+a,n.lineNumChars=n.lineNumInnerWidth?r.length:-1,n.lineGutter.style.width=n.lineNumWidth+"px",ai(e.display),!0}return!1}function ci(e,t){for(var r=[],n=!1,i=0;i<e.length;i++){var o=e[i],a=null
if("string"!=typeof o&&(a=o.style,o=o.className),"CodeMirror-linenumbers"==o){if(!t)continue
n=!0}r.push({className:o,style:a})}return t&&!n&&r.push({className:"CodeMirror-linenumbers",style:null}),r}function di(e){var t=e.gutters,r=e.gutterSpecs
M(t),e.lineGutter=null
for(var n=0;n<r.length;++n){var i=r[n],o=i.className,a=i.style,l=t.appendChild(A("div",null,"CodeMirror-gutter "+o))
a&&(l.style.cssText=a),"CodeMirror-linenumbers"==o&&(e.lineGutter=l,l.style.width=(e.lineNumWidth||1)+"px")}t.style.display=r.length?"":"none",ai(e)}function fi(e){di(e.display),un(e),si(e)}function hi(e,t,n,i){var o=this
this.input=n,o.scrollbarFiller=A("div",null,"CodeMirror-scrollbar-filler"),o.scrollbarFiller.setAttribute("cm-not-content","true"),o.gutterFiller=A("div",null,"CodeMirror-gutter-filler"),o.gutterFiller.setAttribute("cm-not-content","true"),o.lineDiv=O("div",null,"CodeMirror-code"),o.selectionDiv=A("div",null,null,"position: relative; z-index: 1"),o.cursorDiv=A("div",null,"CodeMirror-cursors"),o.measure=A("div",null,"CodeMirror-measure"),o.lineMeasure=A("div",null,"CodeMirror-measure"),o.lineSpace=O("div",[o.measure,o.lineMeasure,o.selectionDiv,o.cursorDiv,o.lineDiv],null,"position: relative; outline: none")
var u=O("div",[o.lineSpace],"CodeMirror-lines")
o.mover=A("div",[u],null,"position: relative"),o.sizer=A("div",[o.mover],"CodeMirror-sizer"),o.sizerWidth=null,o.heightForcer=A("div",null,null,"position: absolute; height: "+j+"px; width: 1px;"),o.gutters=A("div",null,"CodeMirror-gutters"),o.lineGutter=null,o.scroller=A("div",[o.sizer,o.heightForcer,o.gutters],"CodeMirror-scroll"),o.scroller.setAttribute("tabIndex","-1"),o.wrapper=A("div",[o.scrollbarFiller,o.gutterFiller,o.scroller],"CodeMirror"),a&&l<8&&(o.gutters.style.zIndex=-1,o.scroller.style.paddingRight=0),s||r&&v||(o.scroller.draggable=!0),e&&(e.appendChild?e.appendChild(o.wrapper):e(o.wrapper)),o.viewFrom=o.viewTo=t.first,o.reportedViewFrom=o.reportedViewTo=t.first,o.view=[],o.renderedView=null,o.externalMeasured=null,o.viewOffset=0,o.lastWrapHeight=o.lastWrapWidth=0,o.updateLineNumbers=null,o.nativeBarWidth=o.barHeight=o.barWidth=0,o.scrollbarsClipped=!1,o.lineNumWidth=o.lineNumInnerWidth=o.lineNumChars=null,o.alignWidgets=!1,o.cachedCharWidth=o.cachedTextHeight=o.cachedPaddingH=null,o.maxLine=null,o.maxLineLength=0,o.maxLineChanged=!1,o.wheelDX=o.wheelDY=o.wheelStartX=o.wheelStartY=null,o.shift=!1,o.selForContextMenu=null,o.activeTouch=null,o.gutterSpecs=ci(i.gutters,i.lineNumbers),di(o),n.init(o)}ri.prototype.signal=function(e,t){ye(e,t)&&this.events.push(arguments)},ri.prototype.finish=function(){for(var e=0;e<this.events.length;e++)ge.apply(null,this.events[e])}
var pi=0,gi=null
function mi(e){var t=e.wheelDeltaX,r=e.wheelDeltaY
return null==t&&e.detail&&e.axis==e.HORIZONTAL_AXIS&&(t=e.detail),null==r&&e.detail&&e.axis==e.VERTICAL_AXIS?r=e.detail:null==r&&(r=e.wheelDelta),{x:t,y:r}}function vi(e){var t=mi(e)
return t.x*=gi,t.y*=gi,t}function yi(e,t){var n=mi(t),i=n.x,o=n.y,a=e.display,l=a.scroller,u=l.scrollWidth>l.clientWidth,c=l.scrollHeight>l.clientHeight
if(i&&u||o&&c){if(o&&y&&s)e:for(var f=t.target,h=a.view;f!=l;f=f.parentNode)for(var p=0;p<h.length;p++)if(h[p].node==f){e.display.currentWheelTarget=f
break e}if(i&&!r&&!d&&null!=gi)return o&&c&&zn(e,Math.max(0,l.scrollTop+o*gi)),Hn(e,Math.max(0,l.scrollLeft+i*gi)),(!o||o&&c)&&we(t),void(a.wheelStartX=null)
if(o&&null!=gi){var g=o*gi,m=e.doc.scrollTop,v=m+a.wrapper.clientHeight
g<0?m=Math.max(0,m+g-50):v=Math.min(e.doc.height,v+g+50),oi(e,{top:m,bottom:v})}pi<20&&(null==a.wheelStartX?(a.wheelStartX=l.scrollLeft,a.wheelStartY=l.scrollTop,a.wheelDX=i,a.wheelDY=o,setTimeout(function(){if(null!=a.wheelStartX){var e=l.scrollLeft-a.wheelStartX,t=l.scrollTop-a.wheelStartY,r=t&&a.wheelDY&&t/a.wheelDY||e&&a.wheelDX&&e/a.wheelDX
a.wheelStartX=a.wheelStartY=null,r&&(gi=(gi*pi+r)/(pi+1),++pi)}},200)):(a.wheelDX+=i,a.wheelDY+=o))}}a?gi=-.53:r?gi=15:c?gi=-.7:f&&(gi=-1/3)
var bi=function(e,t){this.ranges=e,this.primIndex=t}
bi.prototype.primary=function(){return this.ranges[this.primIndex]},bi.prototype.equals=function(e){if(e==this)return!0
if(e.primIndex!=this.primIndex||e.ranges.length!=this.ranges.length)return!1
for(var t=0;t<this.ranges.length;t++){var r=this.ranges[t],n=e.ranges[t]
if(!rt(r.anchor,n.anchor)||!rt(r.head,n.head))return!1}return!0},bi.prototype.deepCopy=function(){for(var e=[],t=0;t<this.ranges.length;t++)e[t]=new wi(nt(this.ranges[t].anchor),nt(this.ranges[t].head))
return new bi(e,this.primIndex)},bi.prototype.somethingSelected=function(){for(var e=0;e<this.ranges.length;e++)if(!this.ranges[e].empty())return!0
return!1},bi.prototype.contains=function(e,t){t||(t=e)
for(var r=0;r<this.ranges.length;r++){var n=this.ranges[r]
if(tt(t,n.from())>=0&&tt(e,n.to())<=0)return r}return-1}
var wi=function(e,t){this.anchor=e,this.head=t}
function xi(e,t,r){var n=e&&e.options.selectionsMayTouch,i=t[r]
t.sort(function(e,t){return tt(e.from(),t.from())}),r=B(t,i)
for(var o=1;o<t.length;o++){var a=t[o],l=t[o-1],s=tt(l.to(),a.from())
if(n&&!a.empty()?s>0:s>=0){var u=ot(l.from(),a.from()),c=it(l.to(),a.to()),d=l.empty()?a.from()==a.head:l.from()==l.head
o<=r&&--r,t.splice(--o,2,new wi(d?c:u,d?u:c))}}return new bi(t,r)}function ki(e,t){return new bi([new wi(e,t||e)],0)}function Ci(e){return e.text?et(e.from.line+e.text.length-1,X(e.text).length+(1==e.text.length?e.from.ch:0)):e.to}function Si(e,t){if(tt(e,t.from)<0)return e
if(tt(e,t.to)<=0)return Ci(t)
var r=e.line+t.text.length-(t.to.line-t.from.line)-1,n=e.ch
return e.line==t.to.line&&(n+=Ci(t).ch-t.to.ch),et(r,n)}function Li(e,t){for(var r=[],n=0;n<e.sel.ranges.length;n++){var i=e.sel.ranges[n]
r.push(new wi(Si(i.anchor,t),Si(i.head,t)))}return xi(e.cm,r,e.sel.primIndex)}function Ti(e,t,r){return e.line==t.line?et(r.line,e.ch-t.ch+r.ch):et(r.line+(e.line-t.line),e.ch)}function Mi(e){e.doc.mode=Re(e.options,e.doc.modeOption),Ni(e)}function Ni(e){e.doc.iter(function(e){e.stateAfter&&(e.stateAfter=null),e.styles&&(e.styles=null)}),e.doc.modeFrontier=e.doc.highlightFrontier=e.doc.first,ei(e,100),e.state.modeGen++,e.curOp&&un(e)}function Ai(e,t){return 0==t.from.ch&&0==t.to.ch&&""==X(t.text)&&(!e.cm||e.cm.options.wholeLineUpdateBefore)}function Oi(e,t,r,n){function i(e){return r?r[e]:null}function o(e,r,i){!function(e,t,r,n){e.text=t,e.stateAfter&&(e.stateAfter=null),e.styles&&(e.styles=null),null!=e.order&&(e.order=null),Nt(e),At(e,r)
var i=n?n(e):1
i!=e.height&&Xe(e,i)}(e,r,i,n),lr(e,"change",e,t)}function a(e,t){for(var r=[],o=e;o<t;++o)r.push(new qt(u[o],i(o),n))
return r}var l=t.from,s=t.to,u=t.text,c=qe(e,l.line),d=qe(e,s.line),f=X(u),h=i(u.length-1),p=s.line-l.line
if(t.full)e.insert(0,a(0,u.length)),e.remove(u.length,e.size-u.length)
else if(Ai(e,t)){var g=a(0,u.length-1)
o(d,d.text,h),p&&e.remove(l.line,p),g.length&&e.insert(l.line,g)}else if(c==d)if(1==u.length)o(c,c.text.slice(0,l.ch)+f+c.text.slice(s.ch),h)
else{var m=a(1,u.length-1)
m.push(new qt(f+c.text.slice(s.ch),h,n)),o(c,c.text.slice(0,l.ch)+u[0],i(0)),e.insert(l.line+1,m)}else if(1==u.length)o(c,c.text.slice(0,l.ch)+u[0]+d.text.slice(s.ch),i(0)),e.remove(l.line+1,p)
else{o(c,c.text.slice(0,l.ch)+u[0],i(0)),o(d,f+d.text.slice(s.ch),h)
var v=a(1,u.length-1)
p>1&&e.remove(l.line+1,p-1),e.insert(l.line+1,v)}lr(e,"change",e,t)}function Wi(e,t,r){!function e(n,i,o){if(n.linked)for(var a=0;a<n.linked.length;++a){var l=n.linked[a]
if(l.doc!=i){var s=o&&l.sharedHist
r&&!s||(t(l.doc,s),e(l.doc,n,s))}}}(e,null,!0)}function Di(e,t){if(t.cm)throw new Error("This document is already in use.")
e.doc=t,t.cm=e,an(e),Mi(e),zi(e),e.options.lineWrapping||Ut(e),e.options.mode=t.modeOption,un(e)}function zi(e){("rtl"==e.doc.direction?z:T)(e.display.lineDiv,"CodeMirror-rtl")}function Pi(e){this.done=[],this.undone=[],this.undoDepth=1/0,this.lastModTime=this.lastSelTime=0,this.lastOp=this.lastSelOp=null,this.lastOrigin=this.lastSelOrigin=null,this.generation=this.maxGeneration=e||1}function Hi(e,t){var r={from:nt(t.from),to:Ci(t),text:$e(e,t.from,t.to)}
return Ri(e,r,t.from.line,t.to.line+1),Wi(e,function(e){return Ri(e,r,t.from.line,t.to.line+1)},!0),r}function Ii(e){for(;e.length&&X(e).ranges;)e.pop()}function Ei(e,t,r,n){var i=e.history
i.undone.length=0
var o,a,l=+new Date
if((i.lastOp==n||i.lastOrigin==t.origin&&t.origin&&("+"==t.origin.charAt(0)&&i.lastModTime>l-(e.cm?e.cm.options.historyEventDelay:500)||"*"==t.origin.charAt(0)))&&(o=function(e,t){return i.lastOp==n?(Ii(e.done),X(e.done)):e.done.length&&!X(e.done).ranges?X(e.done):e.done.length>1&&!e.done[e.done.length-2].ranges?(e.done.pop(),X(e.done)):void 0}(i)))a=X(o.changes),0==tt(t.from,t.to)&&0==tt(t.from,a.to)?a.to=Ci(t):o.changes.push(Hi(e,t))
else{var s=X(i.done)
for(s&&s.ranges||Fi(e.sel,i.done),o={changes:[Hi(e,t)],generation:i.generation},i.done.push(o);i.done.length>i.undoDepth;)i.done.shift(),i.done[0].ranges||i.done.shift()}i.done.push(r),i.generation=++i.maxGeneration,i.lastModTime=i.lastSelTime=l,i.lastOp=i.lastSelOp=n,i.lastOrigin=i.lastSelOrigin=t.origin,a||ge(e,"historyAdded")}function Fi(e,t){var r=X(t)
r&&r.ranges&&r.equals(e)||t.push(e)}function Ri(e,t,r,n){var i=t["spans_"+e.id],o=0
e.iter(Math.max(e.first,r),Math.min(e.first+e.size,n),function(r){r.markedSpans&&((i||(i=t["spans_"+e.id]={}))[o]=r.markedSpans),++o})}function Bi(e){if(!e)return null
for(var t,r=0;r<e.length;++r)e[r].marker.explicitlyCleared?t||(t=e.slice(0,r)):t&&t.push(e[r])
return t?t.length?t:null:e}function ji(e,t){var r=function(e,t){var r=t["spans_"+e.id]
if(!r)return null
for(var n=[],i=0;i<t.text.length;++i)n.push(Bi(r[i]))
return n}(e,t),n=Tt(e,t)
if(!r)return n
if(!n)return r
for(var i=0;i<r.length;++i){var o=r[i],a=n[i]
if(o&&a)e:for(var l=0;l<a.length;++l){for(var s=a[l],u=0;u<o.length;++u)if(o[u].marker==s.marker)continue e
o.push(s)}else a&&(r[i]=a)}return r}function Vi(e,t,r){for(var n=[],i=0;i<e.length;++i){var o=e[i]
if(o.ranges)n.push(r?bi.prototype.deepCopy.call(o):o)
else{var a=o.changes,l=[]
n.push({changes:l})
for(var s=0;s<a.length;++s){var u=a[s],c=void 0
if(l.push({from:u.from,to:u.to,text:u.text}),t)for(var d in u)(c=d.match(/^spans_(\d+)$/))&&B(t,Number(c[1]))>-1&&(X(l)[d]=u[d],delete u[d])}}}return n}function Ki(e,t,r,n){if(n){var i=e.anchor
if(r){var o=tt(t,i)<0
o!=tt(r,i)<0?(i=t,t=r):o!=tt(t,r)<0&&(t=r)}return new wi(i,t)}return new wi(r||t,t)}function Gi(e,t,r,n,i){null==i&&(i=e.cm&&(e.cm.display.shift||e.extend)),Xi(e,new bi([Ki(e.sel.primary(),t,r,i)],0),n)}function Ui(e,t,r){for(var n=[],i=e.cm&&(e.cm.display.shift||e.extend),o=0;o<e.sel.ranges.length;o++)n[o]=Ki(e.sel.ranges[o],t[o],null,i)
Xi(e,xi(e.cm,n,e.sel.primIndex),r)}function qi(e,t,r,n){var i=e.sel.ranges.slice(0)
i[t]=r,Xi(e,xi(e.cm,i,e.sel.primIndex),n)}function $i(e,t,r,n){Xi(e,ki(t,r),n)}function _i(e,t,r){var n=e.history.done,i=X(n)
i&&i.ranges?(n[n.length-1]=t,Yi(e,t,r)):Xi(e,t,r)}function Xi(e,t,r){Yi(e,t,r),function(e,t,r,n){var i=e.history,o=n&&n.origin
r==i.lastSelOp||o&&i.lastSelOrigin==o&&(i.lastModTime==i.lastSelTime&&i.lastOrigin==o||function(e,t,r,n){var i=t.charAt(0)
return"*"==i||"+"==i&&r.ranges.length==n.ranges.length&&r.somethingSelected()==n.somethingSelected()&&new Date-e.history.lastSelTime<=(e.cm?e.cm.options.historyEventDelay:500)}(e,o,X(i.done),t))?i.done[i.done.length-1]=t:Fi(t,i.done),i.lastSelTime=+new Date,i.lastSelOrigin=o,i.lastSelOp=r,n&&!1!==n.clearRedo&&Ii(i.undone)}(e,e.sel,e.cm?e.cm.curOp.id:NaN,r)}function Yi(e,t,r){(ye(e,"beforeSelectionChange")||e.cm&&ye(e.cm,"beforeSelectionChange"))&&(t=function(e,t,r){var n={ranges:t.ranges,update:function(t){this.ranges=[]
for(var r=0;r<t.length;r++)this.ranges[r]=new wi(lt(e,t[r].anchor),lt(e,t[r].head))},origin:r&&r.origin}
return ge(e,"beforeSelectionChange",e,n),e.cm&&ge(e.cm,"beforeSelectionChange",e.cm,n),n.ranges!=t.ranges?xi(e.cm,n.ranges,n.ranges.length-1):t}(e,t,r))
var n=r&&r.bias||(tt(t.primary().head,e.sel.primary().head)<0?-1:1)
Zi(e,Ji(e,t,n,!0)),r&&!1===r.scroll||!e.cm||An(e.cm)}function Zi(e,t){t.equals(e.sel)||(e.sel=t,e.cm&&(e.cm.curOp.updateInput=1,e.cm.curOp.selectionChanged=!0,ve(e.cm)),lr(e,"cursorActivity",e))}function Qi(e){Zi(e,Ji(e,e.sel,null,!1))}function Ji(e,t,r,n){for(var i,o=0;o<t.ranges.length;o++){var a=t.ranges[o],l=t.ranges.length==e.sel.ranges.length&&e.sel.ranges[o],s=to(e,a.anchor,l&&l.anchor,r,n),u=to(e,a.head,l&&l.head,r,n);(i||s!=a.anchor||u!=a.head)&&(i||(i=t.ranges.slice(0,o)),i[o]=new wi(s,u))}return i?xi(e.cm,i,t.primIndex):t}function eo(e,t,r,n,i){var o=qe(e,t.line)
if(o.markedSpans)for(var a=0;a<o.markedSpans.length;++a){var l=o.markedSpans[a],s=l.marker
if((null==l.from||(s.inclusiveLeft?l.from<=t.ch:l.from<t.ch))&&(null==l.to||(s.inclusiveRight?l.to>=t.ch:l.to>t.ch))){if(i&&(ge(s,"beforeCursorEnter"),s.explicitlyCleared)){if(o.markedSpans){--a
continue}break}if(!s.atomic)continue
if(r){var u=s.find(n<0?1:-1),c=void 0
if((n<0?s.inclusiveRight:s.inclusiveLeft)&&(u=ro(e,u,-n,u&&u.line==t.line?o:null)),u&&u.line==t.line&&(c=tt(u,r))&&(n<0?c<0:c>0))return eo(e,u,t,n,i)}var d=s.find(n<0?-1:1)
return(n<0?s.inclusiveLeft:s.inclusiveRight)&&(d=ro(e,d,n,d.line==t.line?o:null)),d?eo(e,d,t,n,i):null}}return t}function to(e,t,r,n,i){var o=n||1
return eo(e,t,r,o,i)||!i&&eo(e,t,r,o,!0)||eo(e,t,r,-o,i)||!i&&eo(e,t,r,-o,!0)||(e.cantEdit=!0,et(e.first,0))}function ro(e,t,r,n){return r<0&&0==t.ch?t.line>e.first?lt(e,et(t.line-1)):null:r>0&&t.ch==(n||qe(e,t.line)).text.length?t.line<e.first+e.size-1?et(t.line+1,0):null:new et(t.line,t.ch+r)}function no(e){e.setSelection(et(e.firstLine(),0),et(e.lastLine()),K)}function io(e,t,r){var n={canceled:!1,from:t.from,to:t.to,text:t.text,origin:t.origin,cancel:function(){return n.canceled=!0}}
return r&&(n.update=function(t,r,i,o){t&&(n.from=lt(e,t)),r&&(n.to=lt(e,r)),i&&(n.text=i),void 0!==o&&(n.origin=o)}),ge(e,"beforeChange",e,n),e.cm&&ge(e.cm,"beforeChange",e.cm,n),n.canceled?(e.cm&&(e.cm.curOp.updateInput=2),null):{from:n.from,to:n.to,text:n.text,origin:n.origin}}function oo(e,t,r){if(e.cm){if(!e.cm.curOp)return Zn(e.cm,oo)(e,t,r)
if(e.cm.state.suppressEdits)return}if(!(ye(e,"beforeChange")||e.cm&&ye(e.cm,"beforeChange"))||(t=io(e,t,!0))){var n=xt&&!r&&function(e,t,r){var n=null
if(e.iter(t.line,r.line+1,function(e){if(e.markedSpans)for(var t=0;t<e.markedSpans.length;++t){var r=e.markedSpans[t].marker
!r.readOnly||n&&-1!=B(n,r)||(n||(n=[])).push(r)}}),!n)return null
for(var i=[{from:t,to:r}],o=0;o<n.length;++o)for(var a=n[o],l=a.find(0),s=0;s<i.length;++s){var u=i[s]
if(!(tt(u.to,l.from)<0||tt(u.from,l.to)>0)){var c=[s,1],d=tt(u.from,l.from),f=tt(u.to,l.to);(d<0||!a.inclusiveLeft&&!d)&&c.push({from:u.from,to:l.from}),(f>0||!a.inclusiveRight&&!f)&&c.push({from:l.to,to:u.to}),i.splice.apply(i,c),s+=c.length-3}}return i}(e,t.from,t.to)
if(n)for(var i=n.length-1;i>=0;--i)ao(e,{from:n[i].from,to:n[i].to,text:i?[""]:t.text,origin:t.origin})
else ao(e,t)}}function ao(e,t){if(1!=t.text.length||""!=t.text[0]||0!=tt(t.from,t.to)){var r=Li(e,t)
Ei(e,t,r,e.cm?e.cm.curOp.id:NaN),uo(e,t,r,Tt(e,t))
var n=[]
Wi(e,function(e,r){r||-1!=B(n,e.history)||(po(e.history,t),n.push(e.history)),uo(e,t,null,Tt(e,t))})}}function lo(e,t,r){var n=e.cm&&e.cm.state.suppressEdits
if(!n||r){for(var i,o=e.history,a=e.sel,l="undo"==t?o.done:o.undone,s="undo"==t?o.undone:o.done,u=0;u<l.length&&(i=l[u],r?!i.ranges||i.equals(e.sel):i.ranges);u++);if(u!=l.length){for(o.lastOrigin=o.lastSelOrigin=null;;){if(!(i=l.pop()).ranges){if(n)return void l.push(i)
break}if(Fi(i,s),r&&!i.equals(e.sel))return void Xi(e,i,{clearRedo:!1})
a=i}var c=[]
Fi(a,s),s.push({changes:c,generation:o.generation}),o.generation=i.generation||++o.maxGeneration
for(var d=ye(e,"beforeChange")||e.cm&&ye(e.cm,"beforeChange"),f=function(r){var n=i.changes[r]
if(n.origin=t,d&&!io(e,n,!1))return l.length=0,{}
c.push(Hi(e,n))
var o=r?Li(e,n):X(l)
uo(e,n,o,ji(e,n)),!r&&e.cm&&e.cm.scrollIntoView({from:n.from,to:Ci(n)})
var a=[]
Wi(e,function(e,t){t||-1!=B(a,e.history)||(po(e.history,n),a.push(e.history)),uo(e,n,null,ji(e,n))})},h=i.changes.length-1;h>=0;--h){var p=f(h)
if(p)return p.v}}}}function so(e,t){if(0!=t&&(e.first+=t,e.sel=new bi(Y(e.sel.ranges,function(e){return new wi(et(e.anchor.line+t,e.anchor.ch),et(e.head.line+t,e.head.ch))}),e.sel.primIndex),e.cm)){un(e.cm,e.first,e.first-t,t)
for(var r=e.cm.display,n=r.viewFrom;n<r.viewTo;n++)cn(e.cm,n,"gutter")}}function uo(e,t,r,n){if(e.cm&&!e.cm.curOp)return Zn(e.cm,uo)(e,t,r,n)
if(t.to.line<e.first)so(e,t.text.length-1-(t.to.line-t.from.line))
else if(!(t.from.line>e.lastLine())){if(t.from.line<e.first){var i=t.text.length-1-(e.first-t.from.line)
so(e,i),t={from:et(e.first,0),to:et(t.to.line+i,t.to.ch),text:[X(t.text)],origin:t.origin}}var o=e.lastLine()
t.to.line>o&&(t={from:t.from,to:et(o,qe(e,o).text.length),text:[t.text[0]],origin:t.origin}),t.removed=$e(e,t.from,t.to),r||(r=Li(e,t)),e.cm?function(e,t,r){var n=e.doc,i=e.display,o=t.from,a=t.to,l=!1,s=o.line
e.options.lineWrapping||(s=Ye(Ft(qe(n,o.line))),n.iter(s,a.line+1,function(e){if(e==i.maxLine)return l=!0,!0})),n.sel.contains(t.from,t.to)>-1&&ve(e),Oi(n,t,r,on(e)),e.options.lineWrapping||(n.iter(s,o.line+t.text.length,function(e){var t=Gt(e)
t>i.maxLineLength&&(i.maxLine=e,i.maxLineLength=t,i.maxLineChanged=!0,l=!1)}),l&&(e.curOp.updateMaxLine=!0)),function(e,t){if(e.modeFrontier=Math.min(e.modeFrontier,t),!(e.highlightFrontier<t-10)){for(var r=e.first,n=t-1;n>r;n--){var i=qe(e,n).stateAfter
if(i&&(!(i instanceof ut)||n+i.lookAhead<t)){r=n+1
break}}e.highlightFrontier=Math.min(e.highlightFrontier,r)}}(n,o.line),ei(e,400)
var u=t.text.length-(a.line-o.line)-1
t.full?un(e):o.line!=a.line||1!=t.text.length||Ai(e.doc,t)?un(e,o.line,a.line+1,u):cn(e,o.line,"text")
var c=ye(e,"changes"),d=ye(e,"change")
if(d||c){var f={from:o,to:a,text:t.text,removed:t.removed,origin:t.origin}
d&&lr(e,"change",e,f),c&&(e.curOp.changeObjs||(e.curOp.changeObjs=[])).push(f)}e.display.selForContextMenu=null}(e.cm,t,n):Oi(e,t,n),Yi(e,r,K)}}function co(e,t,r,n,i){var o
n||(n=r),tt(n,r)<0&&(r=(o=[n,r])[0],n=o[1]),"string"==typeof t&&(t=e.splitLines(t)),oo(e,{from:r,to:n,text:t,origin:i})}function fo(e,t,r,n){r<e.line?e.line+=n:t<e.line&&(e.line=t,e.ch=0)}function ho(e,t,r,n){for(var i=0;i<e.length;++i){var o=e[i],a=!0
if(o.ranges){o.copied||((o=e[i]=o.deepCopy()).copied=!0)
for(var l=0;l<o.ranges.length;l++)fo(o.ranges[l].anchor,t,r,n),fo(o.ranges[l].head,t,r,n)}else{for(var s=0;s<o.changes.length;++s){var u=o.changes[s]
if(r<u.from.line)u.from=et(u.from.line+n,u.from.ch),u.to=et(u.to.line+n,u.to.ch)
else if(t<=u.to.line){a=!1
break}}a||(e.splice(0,i+1),i=0)}}}function po(e,t){var r=t.from.line,n=t.to.line,i=t.text.length-(n-r)-1
ho(e.done,r,n,i),ho(e.undone,r,n,i)}function go(e,t,r,n){var i=t,o=t
return"number"==typeof t?o=qe(e,at(e,t)):i=Ye(t),null==i?null:(n(o,i)&&e.cm&&cn(e.cm,i,r),o)}function mo(e){this.lines=e,this.parent=null
for(var t=0,r=0;r<e.length;++r)e[r].parent=this,t+=e[r].height
this.height=t}function vo(e){this.children=e
for(var t=0,r=0,n=0;n<e.length;++n){var i=e[n]
t+=i.chunkSize(),r+=i.height,i.parent=this}this.size=t,this.height=r,this.parent=null}wi.prototype.from=function(){return ot(this.anchor,this.head)},wi.prototype.to=function(){return it(this.anchor,this.head)},wi.prototype.empty=function(){return this.head.line==this.anchor.line&&this.head.ch==this.anchor.ch},mo.prototype={chunkSize:function(){return this.lines.length},removeInner:function(e,t){for(var r=e,n=e+t;r<n;++r){var i=this.lines[r]
this.height-=i.height,$t(i),lr(i,"delete")}this.lines.splice(e,t)},collapse:function(e){e.push.apply(e,this.lines)},insertInner:function(e,t,r){this.height+=r,this.lines=this.lines.slice(0,e).concat(t).concat(this.lines.slice(e))
for(var n=0;n<t.length;++n)t[n].parent=this},iterN:function(e,t,r){for(var n=e+t;e<n;++e)if(r(this.lines[e]))return!0}},vo.prototype={chunkSize:function(){return this.size},removeInner:function(e,t){this.size-=t
for(var r=0;r<this.children.length;++r){var n=this.children[r],i=n.chunkSize()
if(e<i){var o=Math.min(t,i-e),a=n.height
if(n.removeInner(e,o),this.height-=a-n.height,i==o&&(this.children.splice(r--,1),n.parent=null),0==(t-=o))break
e=0}else e-=i}if(this.size-t<25&&(this.children.length>1||!(this.children[0]instanceof mo))){var l=[]
this.collapse(l),this.children=[new mo(l)],this.children[0].parent=this}},collapse:function(e){for(var t=0;t<this.children.length;++t)this.children[t].collapse(e)},insertInner:function(e,t,r){this.size+=t.length,this.height+=r
for(var n=0;n<this.children.length;++n){var i=this.children[n],o=i.chunkSize()
if(e<=o){if(i.insertInner(e,t,r),i.lines&&i.lines.length>50){for(var a=i.lines.length%25+25,l=a;l<i.lines.length;){var s=new mo(i.lines.slice(l,l+=25))
i.height-=s.height,this.children.splice(++n,0,s),s.parent=this}i.lines=i.lines.slice(0,a),this.maybeSpill()}break}e-=o}},maybeSpill:function(){if(!(this.children.length<=10)){var e=this
do{var t=new vo(e.children.splice(e.children.length-5,5))
if(e.parent){e.size-=t.size,e.height-=t.height
var r=B(e.parent.children,e)
e.parent.children.splice(r+1,0,t)}else{var n=new vo(e.children)
n.parent=e,e.children=[n,t],e=n}t.parent=e.parent}while(e.children.length>10)
e.parent.maybeSpill()}},iterN:function(e,t,r){for(var n=0;n<this.children.length;++n){var i=this.children[n],o=i.chunkSize()
if(e<o){var a=Math.min(t,o-e)
if(i.iterN(e,a,r))return!0
if(0==(t-=a))break
e=0}else e-=o}}}
var yo=function(e,t,r){if(r)for(var n in r)r.hasOwnProperty(n)&&(this[n]=r[n])
this.doc=e,this.node=t}
function bo(e,t,r){Kt(t)<(e.curOp&&e.curOp.scrollTop||e.doc.scrollTop)&&Nn(e,r)}yo.prototype.clear=function(){var e=this.doc.cm,t=this.line.widgets,r=this.line,n=Ye(r)
if(null!=n&&t){for(var i=0;i<t.length;++i)t[i]==this&&t.splice(i--,1)
t.length||(r.widgets=null)
var o=wr(this)
Xe(r,Math.max(0,r.height-o)),e&&(Yn(e,function(){bo(e,r,-o),cn(e,n,"widget")}),lr(e,"lineWidgetCleared",e,this,n))}},yo.prototype.changed=function(){var e=this,t=this.height,r=this.doc.cm,n=this.line
this.height=null
var i=wr(this)-t
i&&(jt(this.doc,n)||Xe(n,n.height+i),r&&Yn(r,function(){r.curOp.forceUpdate=!0,bo(r,n,i),lr(r,"lineWidgetChanged",r,e,Ye(n))}))},be(yo)
var wo=0,xo=function(e,t){this.lines=[],this.type=t,this.doc=e,this.id=++wo}
function ko(e,t,r,n,i){if(n&&n.shared)return function(e,t,r,n,i){(n=E(n)).shared=!1
var o=[ko(e,t,r,n,i)],a=o[0],l=n.widgetNode
return Wi(e,function(e){l&&(n.widgetNode=l.cloneNode(!0)),o.push(ko(e,lt(e,t),lt(e,r),n,i))
for(var s=0;s<e.linked.length;++s)if(e.linked[s].isParent)return
a=X(o)}),new Co(o,a)}(e,t,r,n,i)
if(e.cm&&!e.cm.curOp)return Zn(e.cm,ko)(e,t,r,n,i)
var o=new xo(e,i),a=tt(t,r)
if(n&&E(n,o,!1),a>0||0==a&&!1!==o.clearWhenEmpty)return o
if(o.replacedWith&&(o.collapsed=!0,o.widgetNode=O("span",[o.replacedWith],"CodeMirror-widget"),n.handleMouseEvents||o.widgetNode.setAttribute("cm-ignore-events","true"),n.insertLeft&&(o.widgetNode.insertLeft=!0)),o.collapsed){if(Et(e,t.line,t,r,o)||t.line!=r.line&&Et(e,r.line,t,r,o))throw new Error("Inserting collapsed marker partially overlapping an existing one")
kt=!0}o.addToHistory&&Ei(e,{from:t,to:r,origin:"markText"},e.sel,NaN)
var l,s=t.line,u=e.cm
if(e.iter(s,r.line+1,function(e){u&&o.collapsed&&!u.options.lineWrapping&&Ft(e)==u.display.maxLine&&(l=!0),o.collapsed&&s!=t.line&&Xe(e,0),function(e,t){e.markedSpans=e.markedSpans?e.markedSpans.concat([t]):[t],t.marker.attachLine(e)}(e,new Ct(o,s==t.line?t.ch:null,s==r.line?r.ch:null)),++s}),o.collapsed&&e.iter(t.line,r.line+1,function(t){jt(e,t)&&Xe(t,0)}),o.clearOnEnter&&fe(o,"beforeCursorEnter",function(){return o.clear()}),o.readOnly&&(xt=!0,(e.history.done.length||e.history.undone.length)&&e.clearHistory()),o.collapsed&&(o.id=++wo,o.atomic=!0),u){if(l&&(u.curOp.updateMaxLine=!0),o.collapsed)un(u,t.line,r.line+1)
else if(o.className||o.startStyle||o.endStyle||o.css||o.attributes||o.title)for(var c=t.line;c<=r.line;c++)cn(u,c,"text")
o.atomic&&Qi(u.doc),lr(u,"markerAdded",u,o)}return o}xo.prototype.clear=function(){if(!this.explicitlyCleared){var e=this.doc.cm,t=e&&!e.curOp
if(t&&Gn(e),ye(this,"clear")){var r=this.find()
r&&lr(this,"clear",r.from,r.to)}for(var n=null,i=null,o=0;o<this.lines.length;++o){var a=this.lines[o],l=St(a.markedSpans,this)
e&&!this.collapsed?cn(e,Ye(a),"text"):e&&(null!=l.to&&(i=Ye(a)),null!=l.from&&(n=Ye(a))),a.markedSpans=Lt(a.markedSpans,l),null==l.from&&this.collapsed&&!jt(this.doc,a)&&e&&Xe(a,en(e.display))}if(e&&this.collapsed&&!e.options.lineWrapping)for(var s=0;s<this.lines.length;++s){var u=Ft(this.lines[s]),c=Gt(u)
c>e.display.maxLineLength&&(e.display.maxLine=u,e.display.maxLineLength=c,e.display.maxLineChanged=!0)}null!=n&&e&&this.collapsed&&un(e,n,i+1),this.lines.length=0,this.explicitlyCleared=!0,this.atomic&&this.doc.cantEdit&&(this.doc.cantEdit=!1,e&&Qi(e.doc)),e&&lr(e,"markerCleared",e,this,n,i),t&&Un(e),this.parent&&this.parent.clear()}},xo.prototype.find=function(e,t){var r,n
null==e&&"bookmark"==this.type&&(e=1)
for(var i=0;i<this.lines.length;++i){var o=this.lines[i],a=St(o.markedSpans,this)
if(null!=a.from&&(r=et(t?o:Ye(o),a.from),-1==e))return r
if(null!=a.to&&(n=et(t?o:Ye(o),a.to),1==e))return n}return r&&{from:r,to:n}},xo.prototype.changed=function(){var e=this,t=this.find(-1,!0),r=this,n=this.doc.cm
t&&n&&Yn(n,function(){var i=t.line,o=Ye(t.line),a=Or(n,o)
if(a&&(Er(a),n.curOp.selectionChanged=n.curOp.forceUpdate=!0),n.curOp.updateMaxLine=!0,!jt(r.doc,i)&&null!=r.height){var l=r.height
r.height=null
var s=wr(r)-l
s&&Xe(i,i.height+s)}lr(n,"markerChanged",n,e)})},xo.prototype.attachLine=function(e){if(!this.lines.length&&this.doc.cm){var t=this.doc.cm.curOp
t.maybeHiddenMarkers&&-1!=B(t.maybeHiddenMarkers,this)||(t.maybeUnhiddenMarkers||(t.maybeUnhiddenMarkers=[])).push(this)}this.lines.push(e)},xo.prototype.detachLine=function(e){if(this.lines.splice(B(this.lines,e),1),!this.lines.length&&this.doc.cm){var t=this.doc.cm.curOp;(t.maybeHiddenMarkers||(t.maybeHiddenMarkers=[])).push(this)}},be(xo)
var Co=function(e,t){this.markers=e,this.primary=t
for(var r=0;r<e.length;++r)e[r].parent=this}
function So(e){return e.findMarks(et(e.first,0),e.clipPos(et(e.lastLine())),function(e){return e.parent})}function Lo(e){for(var t=function(t){var r=e[t],n=[r.primary.doc]
Wi(r.primary.doc,function(e){return n.push(e)})
for(var i=0;i<r.markers.length;i++){var o=r.markers[i];-1==B(n,o.doc)&&(o.parent=null,r.markers.splice(i--,1))}},r=0;r<e.length;r++)t(r)}Co.prototype.clear=function(){if(!this.explicitlyCleared){this.explicitlyCleared=!0
for(var e=0;e<this.markers.length;++e)this.markers[e].clear()
lr(this,"clear")}},Co.prototype.find=function(e,t){return this.primary.find(e,t)},be(Co)
var To=0,Mo=function(e,t,r,n,i){if(!(this instanceof Mo))return new Mo(e,t,r,n,i)
null==r&&(r=0),vo.call(this,[new mo([new qt("",null)])]),this.first=r,this.scrollTop=this.scrollLeft=0,this.cantEdit=!1,this.cleanGeneration=1,this.modeFrontier=this.highlightFrontier=r
var o=et(r,0)
this.sel=ki(o),this.history=new Pi(null),this.id=++To,this.modeOption=t,this.lineSep=n,this.direction="rtl"==i?"rtl":"ltr",this.extend=!1,"string"==typeof e&&(e=this.splitLines(e)),Oi(this,{from:o,to:o,text:e}),Xi(this,ki(o),K)}
Mo.prototype=Q(vo.prototype,{constructor:Mo,iter:function(e,t,r){r?this.iterN(e-this.first,t-e,r):this.iterN(this.first,this.first+this.size,e)},insert:function(e,t){for(var r=0,n=0;n<t.length;++n)r+=t[n].height
this.insertInner(e-this.first,t,r)},remove:function(e,t){this.removeInner(e-this.first,t)},getValue:function(e){var t=_e(this,this.first,this.first+this.size)
return!1===e?t:t.join(e||this.lineSeparator())},setValue:Jn(function(e){var t=et(this.first,0),r=this.first+this.size-1
oo(this,{from:t,to:et(r,qe(this,r).text.length),text:this.splitLines(e),origin:"setValue",full:!0},!0),this.cm&&On(this.cm,0,0),Xi(this,ki(t),K)}),replaceRange:function(e,t,r,n){co(this,e,t=lt(this,t),r=r?lt(this,r):t,n)},getRange:function(e,t,r){var n=$e(this,lt(this,e),lt(this,t))
return!1===r?n:n.join(r||this.lineSeparator())},getLine:function(e){var t=this.getLineHandle(e)
return t&&t.text},getLineHandle:function(e){if(Qe(this,e))return qe(this,e)},getLineNumber:function(e){return Ye(e)},getLineHandleVisualStart:function(e){return"number"==typeof e&&(e=qe(this,e)),Ft(e)},lineCount:function(){return this.size},firstLine:function(){return this.first},lastLine:function(){return this.first+this.size-1},clipPos:function(e){return lt(this,e)},getCursor:function(e){var t=this.sel.primary()
return null==e||"head"==e?t.head:"anchor"==e?t.anchor:"end"==e||"to"==e||!1===e?t.to():t.from()},listSelections:function(){return this.sel.ranges},somethingSelected:function(){return this.sel.somethingSelected()},setCursor:Jn(function(e,t,r){$i(this,lt(this,"number"==typeof e?et(e,t||0):e),null,r)}),setSelection:Jn(function(e,t,r){$i(this,lt(this,e),lt(this,t||e),r)}),extendSelection:Jn(function(e,t,r){Gi(this,lt(this,e),t&&lt(this,t),r)}),extendSelections:Jn(function(e,t){Ui(this,st(this,e),t)}),extendSelectionsBy:Jn(function(e,t){Ui(this,st(this,Y(this.sel.ranges,e)),t)}),setSelections:Jn(function(e,t,r){if(e.length){for(var n=[],i=0;i<e.length;i++)n[i]=new wi(lt(this,e[i].anchor),lt(this,e[i].head))
null==t&&(t=Math.min(e.length-1,this.sel.primIndex)),Xi(this,xi(this.cm,n,t),r)}}),addSelection:Jn(function(e,t,r){var n=this.sel.ranges.slice(0)
n.push(new wi(lt(this,e),lt(this,t||e))),Xi(this,xi(this.cm,n,n.length-1),r)}),getSelection:function(e){for(var t,r=this.sel.ranges,n=0;n<r.length;n++){var i=$e(this,r[n].from(),r[n].to())
t=t?t.concat(i):i}return!1===e?t:t.join(e||this.lineSeparator())},getSelections:function(e){for(var t=[],r=this.sel.ranges,n=0;n<r.length;n++){var i=$e(this,r[n].from(),r[n].to())
!1!==e&&(i=i.join(e||this.lineSeparator())),t[n]=i}return t},replaceSelection:function(e,t,r){for(var n=[],i=0;i<this.sel.ranges.length;i++)n[i]=e
this.replaceSelections(n,t,r||"+input")},replaceSelections:Jn(function(e,t,r){for(var n=[],i=this.sel,o=0;o<i.ranges.length;o++){var a=i.ranges[o]
n[o]={from:a.from(),to:a.to(),text:this.splitLines(e[o]),origin:r}}for(var l=t&&"end"!=t&&function(e,t,r){for(var n=[],i=et(e.first,0),o=i,a=0;a<t.length;a++){var l=t[a],s=Ti(l.from,i,o),u=Ti(Ci(l),i,o)
if(i=l.to,o=u,"around"==r){var c=e.sel.ranges[a],d=tt(c.head,c.anchor)<0
n[a]=new wi(d?u:s,d?s:u)}else n[a]=new wi(s,s)}return new bi(n,e.sel.primIndex)}(this,n,t),s=n.length-1;s>=0;s--)oo(this,n[s])
l?_i(this,l):this.cm&&An(this.cm)}),undo:Jn(function(){lo(this,"undo")}),redo:Jn(function(){lo(this,"redo")}),undoSelection:Jn(function(){lo(this,"undo",!0)}),redoSelection:Jn(function(){lo(this,"redo",!0)}),setExtending:function(e){this.extend=e},getExtending:function(){return this.extend},historySize:function(){for(var e=this.history,t=0,r=0,n=0;n<e.done.length;n++)e.done[n].ranges||++t
for(var i=0;i<e.undone.length;i++)e.undone[i].ranges||++r
return{undo:t,redo:r}},clearHistory:function(){this.history=new Pi(this.history.maxGeneration)},markClean:function(){this.cleanGeneration=this.changeGeneration(!0)},changeGeneration:function(e){return e&&(this.history.lastOp=this.history.lastSelOp=this.history.lastOrigin=null),this.history.generation},isClean:function(e){return this.history.generation==(e||this.cleanGeneration)},getHistory:function(){return{done:Vi(this.history.done),undone:Vi(this.history.undone)}},setHistory:function(e){var t=this.history=new Pi(this.history.maxGeneration)
t.done=Vi(e.done.slice(0),null,!0),t.undone=Vi(e.undone.slice(0),null,!0)},setGutterMarker:Jn(function(e,t,r){return go(this,e,"gutter",function(e){var n=e.gutterMarkers||(e.gutterMarkers={})
return n[t]=r,!r&&re(n)&&(e.gutterMarkers=null),!0})}),clearGutter:Jn(function(e){var t=this
this.iter(function(r){r.gutterMarkers&&r.gutterMarkers[e]&&go(t,r,"gutter",function(){return r.gutterMarkers[e]=null,re(r.gutterMarkers)&&(r.gutterMarkers=null),!0})})}),lineInfo:function(e){var t
if("number"==typeof e){if(!Qe(this,e))return null
if(t=e,!(e=qe(this,e)))return null}else if(null==(t=Ye(e)))return null
return{line:t,handle:e,text:e.text,gutterMarkers:e.gutterMarkers,textClass:e.textClass,bgClass:e.bgClass,wrapClass:e.wrapClass,widgets:e.widgets}},addLineClass:Jn(function(e,t,r){return go(this,e,"gutter"==t?"gutter":"class",function(e){var n="text"==t?"textClass":"background"==t?"bgClass":"gutter"==t?"gutterClass":"wrapClass"
if(e[n]){if(S(r).test(e[n]))return!1
e[n]+=" "+r}else e[n]=r
return!0})}),removeLineClass:Jn(function(e,t,r){return go(this,e,"gutter"==t?"gutter":"class",function(e){var n="text"==t?"textClass":"background"==t?"bgClass":"gutter"==t?"gutterClass":"wrapClass",i=e[n]
if(!i)return!1
if(null==r)e[n]=null
else{var o=i.match(S(r))
if(!o)return!1
var a=o.index+o[0].length
e[n]=i.slice(0,o.index)+(o.index&&a!=i.length?" ":"")+i.slice(a)||null}return!0})}),addLineWidget:Jn(function(e,t,r){return function(e,t,r,n){var i=new yo(e,r,n),o=e.cm
return o&&i.noHScroll&&(o.display.alignWidgets=!0),go(e,t,"widget",function(t){var r=t.widgets||(t.widgets=[])
if(null==i.insertAt?r.push(i):r.splice(Math.min(r.length-1,Math.max(0,i.insertAt)),0,i),i.line=t,o&&!jt(e,t)){var n=Kt(t)<e.scrollTop
Xe(t,t.height+wr(i)),n&&Nn(o,i.height),o.curOp.forceUpdate=!0}return!0}),o&&lr(o,"lineWidgetAdded",o,i,"number"==typeof t?t:Ye(t)),i}(this,e,t,r)}),removeLineWidget:function(e){e.clear()},markText:function(e,t,r){return ko(this,lt(this,e),lt(this,t),r,r&&r.type||"range")},setBookmark:function(e,t){var r={replacedWith:t&&(null==t.nodeType?t.widget:t),insertLeft:t&&t.insertLeft,clearWhenEmpty:!1,shared:t&&t.shared,handleMouseEvents:t&&t.handleMouseEvents}
return ko(this,e=lt(this,e),e,r,"bookmark")},findMarksAt:function(e){var t=[],r=qe(this,(e=lt(this,e)).line).markedSpans
if(r)for(var n=0;n<r.length;++n){var i=r[n];(null==i.from||i.from<=e.ch)&&(null==i.to||i.to>=e.ch)&&t.push(i.marker.parent||i.marker)}return t},findMarks:function(e,t,r){e=lt(this,e),t=lt(this,t)
var n=[],i=e.line
return this.iter(e.line,t.line+1,function(o){var a=o.markedSpans
if(a)for(var l=0;l<a.length;l++){var s=a[l]
null!=s.to&&i==e.line&&e.ch>=s.to||null==s.from&&i!=e.line||null!=s.from&&i==t.line&&s.from>=t.ch||r&&!r(s.marker)||n.push(s.marker.parent||s.marker)}++i}),n},getAllMarks:function(){var e=[]
return this.iter(function(t){var r=t.markedSpans
if(r)for(var n=0;n<r.length;++n)null!=r[n].from&&e.push(r[n].marker)}),e},posFromIndex:function(e){var t,r=this.first,n=this.lineSeparator().length
return this.iter(function(i){var o=i.text.length+n
if(o>e)return t=e,!0
e-=o,++r}),lt(this,et(r,t))},indexFromPos:function(e){var t=(e=lt(this,e)).ch
if(e.line<this.first||e.ch<0)return 0
var r=this.lineSeparator().length
return this.iter(this.first,e.line,function(e){t+=e.text.length+r}),t},copy:function(e){var t=new Mo(_e(this,this.first,this.first+this.size),this.modeOption,this.first,this.lineSep,this.direction)
return t.scrollTop=this.scrollTop,t.scrollLeft=this.scrollLeft,t.sel=this.sel,t.extend=!1,e&&(t.history.undoDepth=this.history.undoDepth,t.setHistory(this.getHistory())),t},linkedDoc:function(e){e||(e={})
var t=this.first,r=this.first+this.size
null!=e.from&&e.from>t&&(t=e.from),null!=e.to&&e.to<r&&(r=e.to)
var n=new Mo(_e(this,t,r),e.mode||this.modeOption,t,this.lineSep,this.direction)
return e.sharedHist&&(n.history=this.history),(this.linked||(this.linked=[])).push({doc:n,sharedHist:e.sharedHist}),n.linked=[{doc:this,isParent:!0,sharedHist:e.sharedHist}],function(e,t){for(var r=0;r<t.length;r++){var n=t[r],i=n.find(),o=e.clipPos(i.from),a=e.clipPos(i.to)
if(tt(o,a)){var l=ko(e,o,a,n.primary,n.primary.type)
n.markers.push(l),l.parent=n}}}(n,So(this)),n},unlinkDoc:function(e){if(e instanceof xa&&(e=e.doc),this.linked)for(var t=0;t<this.linked.length;++t)if(this.linked[t].doc==e){this.linked.splice(t,1),e.unlinkDoc(this),Lo(So(this))
break}if(e.history==this.history){var r=[e.id]
Wi(e,function(e){return r.push(e.id)},!0),e.history=new Pi(null),e.history.done=Vi(this.history.done,r),e.history.undone=Vi(this.history.undone,r)}},iterLinkedDocs:function(e){Wi(this,e)},getMode:function(){return this.mode},getEditor:function(){return this.cm},splitLines:function(e){return this.lineSep?e.split(this.lineSep):De(e)},lineSeparator:function(){return this.lineSep||"\n"},setDirection:Jn(function(e){var t
"rtl"!=e&&(e="ltr"),e!=this.direction&&(this.direction=e,this.iter(function(e){return e.order=null}),this.cm&&Yn(t=this.cm,function(){zi(t),un(t)}))})}),Mo.prototype.eachLine=Mo.prototype.iter
var No=0
function Ao(e){var t=this
if(Oo(t),!me(t,e)&&!xr(t.display,e)){we(e),a&&(No=+new Date)
var r=ln(t,e,!0),n=e.dataTransfer.files
if(r&&!t.isReadOnly())if(n&&n.length&&window.FileReader&&window.File)for(var i=n.length,o=Array(i),l=0,s=function(e,n){if(!t.options.allowDropFileTypes||-1!=B(t.options.allowDropFileTypes,e.type)){var a=new FileReader
a.onload=Zn(t,function(){var e=a.result
if(/[\x00-\x08\x0e-\x1f]{2}/.test(e)&&(e=""),o[n]=e,++l==i){var s={from:r=lt(t.doc,r),to:r,text:t.doc.splitLines(o.join(t.doc.lineSeparator())),origin:"paste"}
oo(t.doc,s),_i(t.doc,ki(r,Ci(s)))}}),a.readAsText(e)}},u=0;u<i;++u)s(n[u],u)
else{if(t.state.draggingText&&t.doc.sel.contains(r)>-1)return t.state.draggingText(e),void setTimeout(function(){return t.display.input.focus()},20)
try{var c=e.dataTransfer.getData("Text")
if(c){var d
if(t.state.draggingText&&!t.state.draggingText.copy&&(d=t.listSelections()),Yi(t.doc,ki(r,r)),d)for(var f=0;f<d.length;++f)co(t.doc,"",d[f].anchor,d[f].head,"drag")
t.replaceSelection(c,"around","paste"),t.display.input.focus()}}catch(e){}}}}function Oo(e){e.display.dragCursor&&(e.display.lineSpace.removeChild(e.display.dragCursor),e.display.dragCursor=null)}function Wo(e){if(document.getElementsByClassName){for(var t=document.getElementsByClassName("CodeMirror"),r=[],n=0;n<t.length;n++){var i=t[n].CodeMirror
i&&r.push(i)}r.length&&r[0].operation(function(){for(var t=0;t<r.length;t++)e(r[t])})}}var Do=!1
function zo(e){var t=e.display
t.cachedCharWidth=t.cachedTextHeight=t.cachedPaddingH=null,t.scrollbarsClipped=!1,e.setSize()}for(var Po={3:"Pause",8:"Backspace",9:"Tab",13:"Enter",16:"Shift",17:"Ctrl",18:"Alt",19:"Pause",20:"CapsLock",27:"Esc",32:"Space",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"Left",38:"Up",39:"Right",40:"Down",44:"PrintScrn",45:"Insert",46:"Delete",59:";",61:"=",91:"Mod",92:"Mod",93:"Mod",106:"*",107:"=",109:"-",110:".",111:"/",145:"ScrollLock",173:"-",186:";",187:"=",188:",",189:"-",190:".",191:"/",192:"`",219:"[",220:"\\",221:"]",222:"'",63232:"Up",63233:"Down",63234:"Left",63235:"Right",63272:"Delete",63273:"Home",63275:"End",63276:"PageUp",63277:"PageDown",63302:"Insert"},Ho=0;Ho<10;Ho++)Po[Ho+48]=Po[Ho+96]=String(Ho)
for(var Io=65;Io<=90;Io++)Po[Io]=String.fromCharCode(Io)
for(var Eo=1;Eo<=12;Eo++)Po[Eo+111]=Po[Eo+63235]="F"+Eo
var Fo={}
function Ro(e){var t,r,n,i,o=e.split(/-(?!$)/)
e=o[o.length-1]
for(var a=0;a<o.length-1;a++){var l=o[a]
if(/^(cmd|meta|m)$/i.test(l))i=!0
else if(/^a(lt)?$/i.test(l))t=!0
else if(/^(c|ctrl|control)$/i.test(l))r=!0
else{if(!/^s(hift)?$/i.test(l))throw new Error("Unrecognized modifier name: "+l)
n=!0}}return t&&(e="Alt-"+e),r&&(e="Ctrl-"+e),i&&(e="Cmd-"+e),n&&(e="Shift-"+e),e}function Bo(e){var t={}
for(var r in e)if(e.hasOwnProperty(r)){var n=e[r]
if(/^(name|fallthrough|(de|at)tach)$/.test(r))continue
if("..."==n){delete e[r]
continue}for(var i=Y(r.split(" "),Ro),o=0;o<i.length;o++){var a=void 0,l=void 0
o==i.length-1?(l=i.join(" "),a=n):(l=i.slice(0,o+1).join(" "),a="...")
var s=t[l]
if(s){if(s!=a)throw new Error("Inconsistent bindings for "+l)}else t[l]=a}delete e[r]}for(var u in t)e[u]=t[u]
return e}function jo(e,t,r,n){var i=(t=Uo(t)).call?t.call(e,n):t[e]
if(!1===i)return"nothing"
if("..."===i)return"multi"
if(null!=i&&r(i))return"handled"
if(t.fallthrough){if("[object Array]"!=Object.prototype.toString.call(t.fallthrough))return jo(e,t.fallthrough,r,n)
for(var o=0;o<t.fallthrough.length;o++){var a=jo(e,t.fallthrough[o],r,n)
if(a)return a}}}function Vo(e){var t="string"==typeof e?e:Po[e.keyCode]
return"Ctrl"==t||"Alt"==t||"Shift"==t||"Mod"==t}function Ko(e,t,r){var n=e
return t.altKey&&"Alt"!=n&&(e="Alt-"+e),(k?t.metaKey:t.ctrlKey)&&"Ctrl"!=n&&(e="Ctrl-"+e),(k?t.ctrlKey:t.metaKey)&&"Cmd"!=n&&(e="Cmd-"+e),!r&&t.shiftKey&&"Shift"!=n&&(e="Shift-"+e),e}function Go(e,t){if(d&&34==e.keyCode&&e.char)return!1
var r=Po[e.keyCode]
return null!=r&&!e.altGraphKey&&(3==e.keyCode&&e.code&&(r=e.code),Ko(r,e,t))}function Uo(e){return"string"==typeof e?Fo[e]:e}function qo(e,t){for(var r=e.doc.sel.ranges,n=[],i=0;i<r.length;i++){for(var o=t(r[i]);n.length&&tt(o.from,X(n).to)<=0;){var a=n.pop()
if(tt(a.from,o.from)<0){o.from=a.from
break}}n.push(o)}Yn(e,function(){for(var t=n.length-1;t>=0;t--)co(e.doc,"",n[t].from,n[t].to,"+delete")
An(e)})}function $o(e,t,r){var n=oe(e.text,t+r,r)
return n<0||n>e.text.length?null:n}function _o(e,t,r){var n=$o(e,t.ch,r)
return null==n?null:new et(t.line,n,r<0?"after":"before")}function Xo(e,t,r,n,i){if(e){var o=ce(r,t.doc.direction)
if(o){var a,l=i<0?X(o):o[0],s=i<0==(1==l.level)?"after":"before"
if(l.level>0||"rtl"==t.doc.direction){var u=Wr(t,r)
a=i<0?r.text.length-1:0
var c=Dr(t,u,a).top
a=ae(function(e){return Dr(t,u,e).top==c},i<0==(1==l.level)?l.from:l.to-1,a),"before"==s&&(a=$o(r,a,1))}else a=i<0?l.to:l.from
return new et(n,a,s)}}return new et(n,i<0?r.text.length:0,i<0?"before":"after")}Fo.basic={Left:"goCharLeft",Right:"goCharRight",Up:"goLineUp",Down:"goLineDown",End:"goLineEnd",Home:"goLineStartSmart",PageUp:"goPageUp",PageDown:"goPageDown",Delete:"delCharAfter",Backspace:"delCharBefore","Shift-Backspace":"delCharBefore",Tab:"defaultTab","Shift-Tab":"indentAuto",Enter:"newlineAndIndent",Insert:"toggleOverwrite",Esc:"singleSelection"},Fo.pcDefault={"Ctrl-A":"selectAll","Ctrl-D":"deleteLine","Ctrl-Z":"undo","Shift-Ctrl-Z":"redo","Ctrl-Y":"redo","Ctrl-Home":"goDocStart","Ctrl-End":"goDocEnd","Ctrl-Up":"goLineUp","Ctrl-Down":"goLineDown","Ctrl-Left":"goGroupLeft","Ctrl-Right":"goGroupRight","Alt-Left":"goLineStart","Alt-Right":"goLineEnd","Ctrl-Backspace":"delGroupBefore","Ctrl-Delete":"delGroupAfter","Ctrl-S":"save","Ctrl-F":"find","Ctrl-G":"findNext","Shift-Ctrl-G":"findPrev","Shift-Ctrl-F":"replace","Shift-Ctrl-R":"replaceAll","Ctrl-[":"indentLess","Ctrl-]":"indentMore","Ctrl-U":"undoSelection","Shift-Ctrl-U":"redoSelection","Alt-U":"redoSelection",fallthrough:"basic"},Fo.emacsy={"Ctrl-F":"goCharRight","Ctrl-B":"goCharLeft","Ctrl-P":"goLineUp","Ctrl-N":"goLineDown","Alt-F":"goWordRight","Alt-B":"goWordLeft","Ctrl-A":"goLineStart","Ctrl-E":"goLineEnd","Ctrl-V":"goPageDown","Shift-Ctrl-V":"goPageUp","Ctrl-D":"delCharAfter","Ctrl-H":"delCharBefore","Alt-D":"delWordAfter","Alt-Backspace":"delWordBefore","Ctrl-K":"killLine","Ctrl-T":"transposeChars","Ctrl-O":"openLine"},Fo.macDefault={"Cmd-A":"selectAll","Cmd-D":"deleteLine","Cmd-Z":"undo","Shift-Cmd-Z":"redo","Cmd-Y":"redo","Cmd-Home":"goDocStart","Cmd-Up":"goDocStart","Cmd-End":"goDocEnd","Cmd-Down":"goDocEnd","Alt-Left":"goGroupLeft","Alt-Right":"goGroupRight","Cmd-Left":"goLineLeft","Cmd-Right":"goLineRight","Alt-Backspace":"delGroupBefore","Ctrl-Alt-Backspace":"delGroupAfter","Alt-Delete":"delGroupAfter","Cmd-S":"save","Cmd-F":"find","Cmd-G":"findNext","Shift-Cmd-G":"findPrev","Cmd-Alt-F":"replace","Shift-Cmd-Alt-F":"replaceAll","Cmd-[":"indentLess","Cmd-]":"indentMore","Cmd-Backspace":"delWrappedLineLeft","Cmd-Delete":"delWrappedLineRight","Cmd-U":"undoSelection","Shift-Cmd-U":"redoSelection","Ctrl-Up":"goDocStart","Ctrl-Down":"goDocEnd",fallthrough:["basic","emacsy"]},Fo.default=y?Fo.macDefault:Fo.pcDefault
var Yo={selectAll:no,singleSelection:function(e){return e.setSelection(e.getCursor("anchor"),e.getCursor("head"),K)},killLine:function(e){return qo(e,function(t){if(t.empty()){var r=qe(e.doc,t.head.line).text.length
return t.head.ch==r&&t.head.line<e.lastLine()?{from:t.head,to:et(t.head.line+1,0)}:{from:t.head,to:et(t.head.line,r)}}return{from:t.from(),to:t.to()}})},deleteLine:function(e){return qo(e,function(t){return{from:et(t.from().line,0),to:lt(e.doc,et(t.to().line+1,0))}})},delLineLeft:function(e){return qo(e,function(e){return{from:et(e.from().line,0),to:e.from()}})},delWrappedLineLeft:function(e){return qo(e,function(t){var r=e.charCoords(t.head,"div").top+5
return{from:e.coordsChar({left:0,top:r},"div"),to:t.from()}})},delWrappedLineRight:function(e){return qo(e,function(t){var r=e.charCoords(t.head,"div").top+5,n=e.coordsChar({left:e.display.lineDiv.offsetWidth+100,top:r},"div")
return{from:t.from(),to:n}})},undo:function(e){return e.undo()},redo:function(e){return e.redo()},undoSelection:function(e){return e.undoSelection()},redoSelection:function(e){return e.redoSelection()},goDocStart:function(e){return e.extendSelection(et(e.firstLine(),0))},goDocEnd:function(e){return e.extendSelection(et(e.lastLine()))},goLineStart:function(e){return e.extendSelectionsBy(function(t){return Zo(e,t.head.line)},{origin:"+move",bias:1})},goLineStartSmart:function(e){return e.extendSelectionsBy(function(t){return Qo(e,t.head)},{origin:"+move",bias:1})},goLineEnd:function(e){return e.extendSelectionsBy(function(t){return function(e,t){var r=qe(e.doc,t),n=function(e){for(var t;t=Ht(e);)e=t.find(1,!0).line
return e}(r)
return n!=r&&(t=Ye(n)),Xo(!0,e,r,t,-1)}(e,t.head.line)},{origin:"+move",bias:-1})},goLineRight:function(e){return e.extendSelectionsBy(function(t){var r=e.cursorCoords(t.head,"div").top+5
return e.coordsChar({left:e.display.lineDiv.offsetWidth+100,top:r},"div")},U)},goLineLeft:function(e){return e.extendSelectionsBy(function(t){var r=e.cursorCoords(t.head,"div").top+5
return e.coordsChar({left:0,top:r},"div")},U)},goLineLeftSmart:function(e){return e.extendSelectionsBy(function(t){var r=e.cursorCoords(t.head,"div").top+5,n=e.coordsChar({left:0,top:r},"div")
return n.ch<e.getLine(n.line).search(/\S/)?Qo(e,t.head):n},U)},goLineUp:function(e){return e.moveV(-1,"line")},goLineDown:function(e){return e.moveV(1,"line")},goPageUp:function(e){return e.moveV(-1,"page")},goPageDown:function(e){return e.moveV(1,"page")},goCharLeft:function(e){return e.moveH(-1,"char")},goCharRight:function(e){return e.moveH(1,"char")},goColumnLeft:function(e){return e.moveH(-1,"column")},goColumnRight:function(e){return e.moveH(1,"column")},goWordLeft:function(e){return e.moveH(-1,"word")},goGroupRight:function(e){return e.moveH(1,"group")},goGroupLeft:function(e){return e.moveH(-1,"group")},goWordRight:function(e){return e.moveH(1,"word")},delCharBefore:function(e){return e.deleteH(-1,"char")},delCharAfter:function(e){return e.deleteH(1,"char")},delWordBefore:function(e){return e.deleteH(-1,"word")},delWordAfter:function(e){return e.deleteH(1,"word")},delGroupBefore:function(e){return e.deleteH(-1,"group")},delGroupAfter:function(e){return e.deleteH(1,"group")},indentAuto:function(e){return e.indentSelection("smart")},indentMore:function(e){return e.indentSelection("add")},indentLess:function(e){return e.indentSelection("subtract")},insertTab:function(e){return e.replaceSelection("\t")},insertSoftTab:function(e){for(var t=[],r=e.listSelections(),n=e.options.tabSize,i=0;i<r.length;i++){var o=r[i].from(),a=F(e.getLine(o.line),o.ch,n)
t.push(_(n-a%n))}e.replaceSelections(t)},defaultTab:function(e){e.somethingSelected()?e.indentSelection("add"):e.execCommand("insertTab")},transposeChars:function(e){return Yn(e,function(){for(var t=e.listSelections(),r=[],n=0;n<t.length;n++)if(t[n].empty()){var i=t[n].head,o=qe(e.doc,i.line).text
if(o)if(i.ch==o.length&&(i=new et(i.line,i.ch-1)),i.ch>0)i=new et(i.line,i.ch+1),e.replaceRange(o.charAt(i.ch-1)+o.charAt(i.ch-2),et(i.line,i.ch-2),i,"+transpose")
else if(i.line>e.doc.first){var a=qe(e.doc,i.line-1).text
a&&(i=new et(i.line,1),e.replaceRange(o.charAt(0)+e.doc.lineSeparator()+a.charAt(a.length-1),et(i.line-1,a.length-1),i,"+transpose"))}r.push(new wi(i,i))}e.setSelections(r)})},newlineAndIndent:function(e){return Yn(e,function(){for(var t=e.listSelections(),r=t.length-1;r>=0;r--)e.replaceRange(e.doc.lineSeparator(),t[r].anchor,t[r].head,"+input")
t=e.listSelections()
for(var n=0;n<t.length;n++)e.indentLine(t[n].from().line,null,!0)
An(e)})},openLine:function(e){return e.replaceSelection("\n","start")},toggleOverwrite:function(e){return e.toggleOverwrite()}}
function Zo(e,t){var r=qe(e.doc,t),n=Ft(r)
return n!=r&&(t=Ye(n)),Xo(!0,e,n,t,1)}function Qo(e,t){var r=Zo(e,t.line),n=qe(e.doc,r.line),i=ce(n,e.doc.direction)
if(!i||0==i[0].level){var o=Math.max(0,n.text.search(/\S/)),a=t.line==r.line&&t.ch<=o&&t.ch
return et(r.line,a?0:o,r.sticky)}return r}function Jo(e,t,r){if("string"==typeof t&&!(t=Yo[t]))return!1
e.display.input.ensurePolled()
var n=e.display.shift,i=!1
try{e.isReadOnly()&&(e.state.suppressEdits=!0),r&&(e.display.shift=!1),i=t(e)!=V}finally{e.display.shift=n,e.state.suppressEdits=!1}return i}var ea=new R
function ta(e,t,r,n){var i=e.state.keySeq
if(i){if(Vo(t))return"handled"
if(/\'$/.test(t)?e.state.keySeq=null:ea.set(50,function(){e.state.keySeq==i&&(e.state.keySeq=null,e.display.input.reset())}),ra(e,i+" "+t,r,n))return!0}return ra(e,t,r,n)}function ra(e,t,r,n){var i=function(e,t,r){for(var n=0;n<e.state.keyMaps.length;n++){var i=jo(t,e.state.keyMaps[n],r,e)
if(i)return i}return e.options.extraKeys&&jo(t,e.options.extraKeys,r,e)||jo(t,e.options.keyMap,r,e)}(e,t,n)
return"multi"==i&&(e.state.keySeq=t),"handled"==i&&lr(e,"keyHandled",e,t,r),"handled"!=i&&"multi"!=i||(we(r),bn(e)),!!i}function na(e,t){var r=Go(t,!0)
return!!r&&(t.shiftKey&&!e.state.keySeq?ta(e,"Shift-"+r,t,function(t){return Jo(e,t,!0)})||ta(e,r,t,function(t){if("string"==typeof t?/^go[A-Z]/.test(t):t.motion)return Jo(e,t)}):ta(e,r,t,function(t){return Jo(e,t)}))}var ia=null
function oa(e){var t=this
if(t.curOp.focus=D(),!me(t,e)){a&&l<11&&27==e.keyCode&&(e.returnValue=!1)
var r=e.keyCode
t.display.shift=16==r||e.shiftKey
var n=na(t,e)
d&&(ia=n?r:null,!n&&88==r&&!Pe&&(y?e.metaKey:e.ctrlKey)&&t.replaceSelection("",null,"cut")),18!=r||/\bCodeMirror-crosshair\b/.test(t.display.lineDiv.className)||function(e){var t=e.display.lineDiv
function r(e){18!=e.keyCode&&e.altKey||(T(t,"CodeMirror-crosshair"),pe(document,"keyup",r),pe(document,"mouseover",r))}z(t,"CodeMirror-crosshair"),fe(document,"keyup",r),fe(document,"mouseover",r)}(t)}}function aa(e){16==e.keyCode&&(this.doc.sel.shift=!1),me(this,e)}function la(e){var t=this
if(!(xr(t.display,e)||me(t,e)||e.ctrlKey&&!e.altKey||y&&e.metaKey)){var r=e.keyCode,n=e.charCode
if(d&&r==ia)return ia=null,void we(e)
if(!d||e.which&&!(e.which<10)||!na(t,e)){var i=String.fromCharCode(null==n?r:n)
"\b"!=i&&(function(e,t,r){return ta(e,"'"+i+"'",t,function(t){return Jo(e,t,!0)})}(t,e)||t.display.input.onKeyPress(e))}}}var sa,ua,ca=function(e,t,r){this.time=e,this.pos=t,this.button=r}
function da(e){var t=this,r=t.display
if(!(me(t,e)||r.activeTouch&&r.input.supportsTouch()))if(r.input.ensurePolled(),r.shift=e.shiftKey,xr(r,e))s||(r.scroller.draggable=!1,setTimeout(function(){return r.scroller.draggable=!0},100))
else if(!pa(t,e)){var n=ln(t,e),i=Le(e),o=n?function(e,t){var r=+new Date
return ua&&ua.compare(r,e,t)?(sa=ua=null,"triple"):sa&&sa.compare(r,e,t)?(ua=new ca(r,e,t),sa=null,"double"):(sa=new ca(r,e,t),ua=null,"single")}(n,i):"single"
window.focus(),1==i&&t.state.selectingText&&t.state.selectingText(e),n&&function(e,t,r,n,i){var o="Click"
return"double"==n?o="Double"+o:"triple"==n&&(o="Triple"+o),ta(e,Ko(o=(1==t?"Left":2==t?"Middle":"Right")+o,i),i,function(t){if("string"==typeof t&&(t=Yo[t]),!t)return!1
var n=!1
try{e.isReadOnly()&&(e.state.suppressEdits=!0),n=t(e,r)!=V}finally{e.state.suppressEdits=!1}return n})}(t,i,n,o,e)||(1==i?n?function(e,t,r,n){a?setTimeout(I(wn,e),0):e.curOp.focus=D()
var i,o=function(e,t,r){var n=e.getOption("configureMouse"),i=n?n(e,t,r):{}
if(null==i.unit){var o=b?r.shiftKey&&r.metaKey:r.altKey
i.unit=o?"rectangle":"single"==t?"char":"double"==t?"word":"line"}return(null==i.extend||e.doc.extend)&&(i.extend=e.doc.extend||r.shiftKey),null==i.addNew&&(i.addNew=y?r.metaKey:r.ctrlKey),null==i.moveOnDrag&&(i.moveOnDrag=!(y?r.altKey:r.ctrlKey)),i}(e,r,n),u=e.doc.sel
e.options.dragDrop&&Ne&&!e.isReadOnly()&&"single"==r&&(i=u.contains(t))>-1&&(tt((i=u.ranges[i]).from(),t)<0||t.xRel>0)&&(tt(i.to(),t)>0||t.xRel<0)?function(e,t,r,n){var i=e.display,o=!1,u=Zn(e,function(t){s&&(i.scroller.draggable=!1),e.state.draggingText=!1,pe(i.wrapper.ownerDocument,"mouseup",u),pe(i.wrapper.ownerDocument,"mousemove",c),pe(i.scroller,"dragstart",d),pe(i.scroller,"drop",u),o||(we(t),n.addNew||Gi(e.doc,r,null,null,n.extend),s||a&&9==l?setTimeout(function(){i.wrapper.ownerDocument.body.focus(),i.input.focus()},20):i.input.focus())}),c=function(e){o=o||Math.abs(t.clientX-e.clientX)+Math.abs(t.clientY-e.clientY)>=10},d=function(){return o=!0}
s&&(i.scroller.draggable=!0),e.state.draggingText=u,u.copy=!n.moveOnDrag,i.scroller.dragDrop&&i.scroller.dragDrop(),fe(i.wrapper.ownerDocument,"mouseup",u),fe(i.wrapper.ownerDocument,"mousemove",c),fe(i.scroller,"dragstart",d),fe(i.scroller,"drop",u),xn(e),setTimeout(function(){return i.input.focus()},20)}(e,n,t,o):function(e,t,r,n){var i=e.display,o=e.doc
we(t)
var a,l,s=o.sel,u=s.ranges
if(n.addNew&&!n.extend?(l=o.sel.contains(r),a=l>-1?u[l]:new wi(r,r)):(a=o.sel.primary(),l=o.sel.primIndex),"rectangle"==n.unit)n.addNew||(a=new wi(r,r)),r=ln(e,t,!0,!0),l=-1
else{var c=fa(e,r,n.unit)
a=n.extend?Ki(a,c.anchor,c.head,n.extend):c}n.addNew?-1==l?(l=u.length,Xi(o,xi(e,u.concat([a]),l),{scroll:!1,origin:"*mouse"})):u.length>1&&u[l].empty()&&"char"==n.unit&&!n.extend?(Xi(o,xi(e,u.slice(0,l).concat(u.slice(l+1)),0),{scroll:!1,origin:"*mouse"}),s=o.sel):qi(o,l,a,G):(l=0,Xi(o,new bi([a],0),G),s=o.sel)
var d=r
function f(t){if(0!=tt(d,t))if(d=t,"rectangle"==n.unit){for(var i=[],u=e.options.tabSize,c=F(qe(o,r.line).text,r.ch,u),f=F(qe(o,t.line).text,t.ch,u),h=Math.min(c,f),p=Math.max(c,f),g=Math.min(r.line,t.line),m=Math.min(e.lastLine(),Math.max(r.line,t.line));g<=m;g++){var v=qe(o,g).text,y=q(v,h,u)
h==p?i.push(new wi(et(g,y),et(g,y))):v.length>y&&i.push(new wi(et(g,y),et(g,q(v,p,u))))}i.length||i.push(new wi(r,r)),Xi(o,xi(e,s.ranges.slice(0,l).concat(i),l),{origin:"*mouse",scroll:!1}),e.scrollIntoView(t)}else{var b,w=a,x=fa(e,t,n.unit),k=w.anchor
tt(x.anchor,k)>0?(b=x.head,k=ot(w.from(),x.anchor)):(b=x.anchor,k=it(w.to(),x.head))
var C=s.ranges.slice(0)
C[l]=function(e,t){var r=t.anchor,n=t.head,i=qe(e.doc,r.line)
if(0==tt(r,n)&&r.sticky==n.sticky)return t
var o=ce(i)
if(!o)return t
var a=se(o,r.ch,r.sticky),l=o[a]
if(l.from!=r.ch&&l.to!=r.ch)return t
var s,u=a+(l.from==r.ch==(1!=l.level)?0:1)
if(0==u||u==o.length)return t
if(n.line!=r.line)s=(n.line-r.line)*("ltr"==e.doc.direction?1:-1)>0
else{var c=se(o,n.ch,n.sticky),d=c-a||(n.ch-r.ch)*(1==l.level?-1:1)
s=c==u-1||c==u?d<0:d>0}var f=o[u+(s?-1:0)],h=s==(1==f.level),p=h?f.from:f.to,g=h?"after":"before"
return r.ch==p&&r.sticky==g?t:new wi(new et(r.line,p,g),n)}(e,new wi(lt(o,k),b)),Xi(o,xi(e,C,l),G)}}var h=i.wrapper.getBoundingClientRect(),p=0
function g(t){e.state.selectingText=!1,p=1/0,t&&(we(t),i.input.focus()),pe(i.wrapper.ownerDocument,"mousemove",m),pe(i.wrapper.ownerDocument,"mouseup",v),o.history.lastSelOrigin=null}var m=Zn(e,function(t){0!==t.buttons&&Le(t)?function t(r){var a=++p,l=ln(e,r,!0,"rectangle"==n.unit)
if(l)if(0!=tt(l,d)){e.curOp.focus=D(),f(l)
var s=Tn(i,o);(l.line>=s.to||l.line<s.from)&&setTimeout(Zn(e,function(){p==a&&t(r)}),150)}else{var u=r.clientY<h.top?-20:r.clientY>h.bottom?20:0
u&&setTimeout(Zn(e,function(){p==a&&(i.scroller.scrollTop+=u,t(r))}),50)}}(t):g(t)}),v=Zn(e,g)
e.state.selectingText=v,fe(i.wrapper.ownerDocument,"mousemove",m),fe(i.wrapper.ownerDocument,"mouseup",v)}(e,n,t,o)}(t,n,o,e):Se(e)==r.scroller&&we(e):2==i?(n&&Gi(t.doc,n),setTimeout(function(){return r.input.focus()},20)):3==i&&(C?t.display.input.onContextMenu(e):xn(t)))}}function fa(e,t,r){if("char"==r)return new wi(t,t)
if("word"==r)return e.findWordAt(t)
if("line"==r)return new wi(et(t.line,0),lt(e.doc,et(t.line+1,0)))
var n=r(e,t)
return new wi(n.from,n.to)}function ha(e,t,r,n){var i,o
if(t.touches)i=t.touches[0].clientX,o=t.touches[0].clientY
else try{i=t.clientX,o=t.clientY}catch(t){return!1}if(i>=Math.floor(e.display.gutters.getBoundingClientRect().right))return!1
n&&we(t)
var a=e.display,l=a.lineDiv.getBoundingClientRect()
if(o>l.bottom||!ye(e,r))return ke(t)
o-=l.top-a.viewOffset
for(var s=0;s<e.display.gutterSpecs.length;++s){var u=a.gutters.childNodes[s]
if(u&&u.getBoundingClientRect().right>=i)return ge(e,r,e,Ze(e.doc,o),e.display.gutterSpecs[s].className,t),ke(t)}}function pa(e,t){return ha(e,t,"gutterClick",!0)}function ga(e){e.display.wrapper.className=e.display.wrapper.className.replace(/\s*cm-s-\S+/g,"")+e.options.theme.replace(/(^|\s)\s*/g," cm-s-"),Rr(e)}ca.prototype.compare=function(e,t,r){return this.time+400>e&&0==tt(t,this.pos)&&r==this.button}
var ma={toString:function(){return"CodeMirror.Init"}},va={},ya={}
function ba(e,t,r){if(!t!=!(r&&r!=ma)){var n=e.display.dragFunctions,i=t?fe:pe
i(e.display.scroller,"dragstart",n.start),i(e.display.scroller,"dragenter",n.enter),i(e.display.scroller,"dragover",n.over),i(e.display.scroller,"dragleave",n.leave),i(e.display.scroller,"drop",n.drop)}}function wa(e){e.options.lineWrapping?(z(e.display.wrapper,"CodeMirror-wrap"),e.display.sizer.style.minWidth="",e.display.sizerWidth=null):(T(e.display.wrapper,"CodeMirror-wrap"),Ut(e)),an(e),un(e),Rr(e),setTimeout(function(){return Rn(e)},100)}function xa(e,t){var r=this
if(!(this instanceof xa))return new xa(e,t)
this.options=t=t?E(t):{},E(va,t,!1)
var n=t.value
"string"==typeof n?n=new Mo(n,t.mode,null,t.lineSeparator,t.direction):t.mode&&(n.modeOption=t.mode),this.doc=n
var i=new xa.inputStyles[t.inputStyle](this),o=this.display=new hi(e,n,i,t)
for(var u in o.wrapper.CodeMirror=this,ga(this),t.lineWrapping&&(this.display.wrapper.className+=" CodeMirror-wrap"),Vn(this),this.state={keyMaps:[],overlays:[],modeGen:0,overwrite:!1,delayingBlurEvent:!1,focused:!1,suppressEdits:!1,pasteIncoming:-1,cutIncoming:-1,selectingText:!1,draggingText:!1,highlight:new R,keySeq:null,specialChars:null},t.autofocus&&!v&&o.input.focus(),a&&l<11&&setTimeout(function(){return r.display.input.reset(!0)},20),function(e){var t=e.display
fe(t.scroller,"mousedown",Zn(e,da)),fe(t.scroller,"dblclick",a&&l<11?Zn(e,function(t){if(!me(e,t)){var r=ln(e,t)
if(r&&!pa(e,t)&&!xr(e.display,t)){we(t)
var n=e.findWordAt(r)
Gi(e.doc,n.anchor,n.head)}}}):function(t){return me(e,t)||we(t)}),fe(t.scroller,"contextmenu",function(t){return function(e,t){xr(e.display,t)||function(e,t){return!!ye(e,"gutterContextMenu")&&ha(e,t,"gutterContextMenu",!1)}(e,t)||me(e,t,"contextmenu")||C||e.display.input.onContextMenu(t)}(e,t)})
var r,n={end:0}
function i(){t.activeTouch&&(r=setTimeout(function(){return t.activeTouch=null},1e3),(n=t.activeTouch).end=+new Date)}function o(e,t){if(null==t.left)return!0
var r=t.left-e.left,n=t.top-e.top
return r*r+n*n>400}fe(t.scroller,"touchstart",function(i){if(!me(e,i)&&!function(e){if(1!=e.touches.length)return!1
var t=e.touches[0]
return t.radiusX<=1&&t.radiusY<=1}(i)&&!pa(e,i)){t.input.ensurePolled(),clearTimeout(r)
var o=+new Date
t.activeTouch={start:o,moved:!1,prev:o-n.end<=300?n:null},1==i.touches.length&&(t.activeTouch.left=i.touches[0].pageX,t.activeTouch.top=i.touches[0].pageY)}}),fe(t.scroller,"touchmove",function(){t.activeTouch&&(t.activeTouch.moved=!0)}),fe(t.scroller,"touchend",function(r){var n=t.activeTouch
if(n&&!xr(t,r)&&null!=n.left&&!n.moved&&new Date-n.start<300){var a,l=e.coordsChar(t.activeTouch,"page")
a=!n.prev||o(n,n.prev)?new wi(l,l):!n.prev.prev||o(n,n.prev.prev)?e.findWordAt(l):new wi(et(l.line,0),lt(e.doc,et(l.line+1,0))),e.setSelection(a.anchor,a.head),e.focus(),we(r)}i()}),fe(t.scroller,"touchcancel",i),fe(t.scroller,"scroll",function(){t.scroller.clientHeight&&(zn(e,t.scroller.scrollTop),Hn(e,t.scroller.scrollLeft,!0),ge(e,"scroll",e))}),fe(t.scroller,"mousewheel",function(t){return yi(e,t)}),fe(t.scroller,"DOMMouseScroll",function(t){return yi(e,t)}),fe(t.wrapper,"scroll",function(){return t.wrapper.scrollTop=t.wrapper.scrollLeft=0}),t.dragFunctions={enter:function(t){me(e,t)||Ce(t)},over:function(t){me(e,t)||(function(e,t){var r=ln(e,t)
if(r){var n=document.createDocumentFragment()
mn(e,r,n),e.display.dragCursor||(e.display.dragCursor=A("div",null,"CodeMirror-cursors CodeMirror-dragcursors"),e.display.lineSpace.insertBefore(e.display.dragCursor,e.display.cursorDiv)),N(e.display.dragCursor,n)}}(e,t),Ce(t))},start:function(t){return function(e,t){if(a&&(!e.state.draggingText||+new Date-No<100))Ce(t)
else if(!me(e,t)&&!xr(e.display,t)&&(t.dataTransfer.setData("Text",e.getSelection()),t.dataTransfer.effectAllowed="copyMove",t.dataTransfer.setDragImage&&!f)){var r=A("img",null,null,"position: fixed; left: 0; top: 0;")
r.src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==",d&&(r.width=r.height=1,e.display.wrapper.appendChild(r),r._top=r.offsetTop),t.dataTransfer.setDragImage(r,0,0),d&&r.parentNode.removeChild(r)}}(e,t)},drop:Zn(e,Ao),leave:function(t){me(e,t)||Oo(e)}}
var s=t.input.getField()
fe(s,"keyup",function(t){return aa.call(e,t)}),fe(s,"keydown",Zn(e,oa)),fe(s,"keypress",Zn(e,la)),fe(s,"focus",function(t){return kn(e,t)}),fe(s,"blur",function(t){return Cn(e,t)})}(this),function(){var e
Do||(fe(window,"resize",function(){null==e&&(e=setTimeout(function(){e=null,Wo(zo)},100))}),fe(window,"blur",function(){return Wo(Cn)}),Do=!0)}(),Gn(this),this.curOp.forceUpdate=!0,Di(this,n),t.autofocus&&!v||this.hasFocus()?setTimeout(I(kn,this),20):Cn(this),ya)ya.hasOwnProperty(u)&&ya[u](r,t[u],ma)
ui(this),t.finishInit&&t.finishInit(this)
for(var c=0;c<ka.length;++c)ka[c](r)
Un(this),s&&t.lineWrapping&&"optimizelegibility"==getComputedStyle(o.lineDiv).textRendering&&(o.lineDiv.style.textRendering="auto")}xa.defaults=va,xa.optionHandlers=ya
var ka=[]
function Ca(e,t,r,n){var i,o=e.doc
null==r&&(r="add"),"smart"==r&&(o.mode.indent?i=ht(e,t).state:r="prev")
var a=e.options.tabSize,l=qe(o,t),s=F(l.text,null,a)
l.stateAfter&&(l.stateAfter=null)
var u,c=l.text.match(/^\s*/)[0]
if(n||/\S/.test(l.text)){if("smart"==r&&((u=o.mode.indent(i,l.text.slice(c.length),l.text))==V||u>150)){if(!n)return
r="prev"}}else u=0,r="not"
"prev"==r?u=t>o.first?F(qe(o,t-1).text,null,a):0:"add"==r?u=s+e.options.indentUnit:"subtract"==r?u=s-e.options.indentUnit:"number"==typeof r&&(u=s+r),u=Math.max(0,u)
var d="",f=0
if(e.options.indentWithTabs)for(var h=Math.floor(u/a);h;--h)f+=a,d+="\t"
if(f<u&&(d+=_(u-f)),d!=c)return co(o,d,et(t,0),et(t,c.length),"+input"),l.stateAfter=null,!0
for(var p=0;p<o.sel.ranges.length;p++){var g=o.sel.ranges[p]
if(g.head.line==t&&g.head.ch<c.length){var m=et(t,c.length)
qi(o,p,new wi(m,m))
break}}}xa.defineInitHook=function(e){return ka.push(e)}
var Sa=null
function La(e){Sa=e}function Ta(e,t,r,n,i){var o=e.doc
e.display.shift=!1,n||(n=o.sel)
var a=+new Date-200,l="paste"==i||e.state.pasteIncoming>a,s=De(t),u=null
if(l&&n.ranges.length>1)if(Sa&&Sa.text.join("\n")==t){if(n.ranges.length%Sa.text.length==0){u=[]
for(var c=0;c<Sa.text.length;c++)u.push(o.splitLines(Sa.text[c]))}}else s.length==n.ranges.length&&e.options.pasteLinesPerSelection&&(u=Y(s,function(e){return[e]}))
for(var d=e.curOp.updateInput,f=n.ranges.length-1;f>=0;f--){var h=n.ranges[f],p=h.from(),g=h.to()
h.empty()&&(r&&r>0?p=et(p.line,p.ch-r):e.state.overwrite&&!l?g=et(g.line,Math.min(qe(o,g.line).text.length,g.ch+X(s).length)):l&&Sa&&Sa.lineWise&&Sa.text.join("\n")==t&&(p=g=et(p.line,0)))
var m={from:p,to:g,text:u?u[f%u.length]:s,origin:i||(l?"paste":e.state.cutIncoming>a?"cut":"+input")}
oo(e.doc,m),lr(e,"inputRead",e,m)}t&&!l&&Na(e,t),An(e),e.curOp.updateInput<2&&(e.curOp.updateInput=d),e.curOp.typing=!0,e.state.pasteIncoming=e.state.cutIncoming=-1}function Ma(e,t){var r=e.clipboardData&&e.clipboardData.getData("Text")
if(r)return e.preventDefault(),t.isReadOnly()||t.options.disableInput||Yn(t,function(){return Ta(t,r,0,null,"paste")}),!0}function Na(e,t){if(e.options.electricChars&&e.options.smartIndent)for(var r=e.doc.sel,n=r.ranges.length-1;n>=0;n--){var i=r.ranges[n]
if(!(i.head.ch>100||n&&r.ranges[n-1].head.line==i.head.line)){var o=e.getModeAt(i.head),a=!1
if(o.electricChars){for(var l=0;l<o.electricChars.length;l++)if(t.indexOf(o.electricChars.charAt(l))>-1){a=Ca(e,i.head.line,"smart")
break}}else o.electricInput&&o.electricInput.test(qe(e.doc,i.head.line).text.slice(0,i.head.ch))&&(a=Ca(e,i.head.line,"smart"))
a&&lr(e,"electricInput",e,i.head.line)}}}function Aa(e){for(var t=[],r=[],n=0;n<e.doc.sel.ranges.length;n++){var i=e.doc.sel.ranges[n].head.line,o={anchor:et(i,0),head:et(i+1,0)}
r.push(o),t.push(e.getRange(o.anchor,o.head))}return{text:t,ranges:r}}function Oa(e,t,r,n){e.setAttribute("autocorrect",r?"":"off"),e.setAttribute("autocapitalize",n?"":"off"),e.setAttribute("spellcheck",!!t)}function Wa(){var e=A("textarea",null,null,"position: absolute; bottom: -1em; padding: 0; width: 1px; height: 1em; outline: none"),t=A("div",[e],null,"overflow: hidden; position: relative; width: 3px; height: 0px;")
return s?e.style.width="1000px":e.setAttribute("wrap","off"),g&&(e.style.border="1px solid black"),Oa(e),t}function Da(e,t,r,n,i){var o=t,a=r,l=qe(e,t.line)
function s(n){var o,a
if(null==(o=i?function(e,t,r,n){var i=ce(t,e.doc.direction)
if(!i)return _o(t,r,n)
r.ch>=t.text.length?(r.ch=t.text.length,r.sticky="before"):r.ch<=0&&(r.ch=0,r.sticky="after")
var o=se(i,r.ch,r.sticky),a=i[o]
if("ltr"==e.doc.direction&&a.level%2==0&&(n>0?a.to>r.ch:a.from<r.ch))return _o(t,r,n)
var l,s=function(e,r){return $o(t,e instanceof et?e.ch:e,r)},u=function(r){return e.options.lineWrapping?(l=l||Wr(e,t),Zr(e,t,l,r)):{begin:0,end:t.text.length}},c=u("before"==r.sticky?s(r,-1):r.ch)
if("rtl"==e.doc.direction||1==a.level){var d=1==a.level==n<0,f=s(r,d?1:-1)
if(null!=f&&(d?f<=a.to&&f<=c.end:f>=a.from&&f>=c.begin)){var h=d?"before":"after"
return new et(r.line,f,h)}}var p=function(e,t,n){for(var o=function(e,t){return t?new et(r.line,s(e,1),"before"):new et(r.line,e,"after")};e>=0&&e<i.length;e+=t){var a=i[e],l=t>0==(1!=a.level),u=l?n.begin:s(n.end,-1)
if(a.from<=u&&u<a.to)return o(u,l)
if(u=l?a.from:s(a.to,-1),n.begin<=u&&u<n.end)return o(u,l)}},g=p(o+n,n,c)
if(g)return g
var m=n>0?c.end:s(c.begin,-1)
return null==m||n>0&&m==t.text.length||!(g=p(n>0?0:i.length-1,n,u(m)))?null:g}(e.cm,l,t,r):_o(l,t,r))){if(n||(a=t.line+r)<e.first||a>=e.first+e.size||(t=new et(a,t.ch,t.sticky),!(l=qe(e,a))))return!1
t=Xo(i,e.cm,l,t.line,r)}else t=o
return!0}if("char"==n)s()
else if("column"==n)s(!0)
else if("word"==n||"group"==n)for(var u=null,c="group"==n,d=e.cm&&e.cm.getHelper(t,"wordChars"),f=!0;!(r<0)||s(!f);f=!1){var h=l.text.charAt(t.ch)||"\n",p=te(h,d)?"w":c&&"\n"==h?"n":!c||/\s/.test(h)?null:"p"
if(!c||f||p||(p="s"),u&&u!=p){r<0&&(r=1,s(),t.sticky="after")
break}if(p&&(u=p),r>0&&!s(!f))break}var g=to(e,t,o,a,!0)
return rt(o,g)&&(g.hitSide=!0),g}function za(e,t,r,n){var i,o,a=e.doc,l=t.left
if("page"==n){var s=Math.min(e.display.wrapper.clientHeight,window.innerHeight||document.documentElement.clientHeight),u=Math.max(s-.5*en(e.display),3)
i=(r>0?t.bottom:t.top)+r*u}else"line"==n&&(i=r>0?t.bottom+3:t.top-3)
for(;(o=Xr(e,l,i)).outside;){if(r<0?i<=0:i>=a.height){o.hitSide=!0
break}i+=5*r}return o}var Pa=function(e){this.cm=e,this.lastAnchorNode=this.lastAnchorOffset=this.lastFocusNode=this.lastFocusOffset=null,this.polling=new R,this.composing=null,this.gracePeriod=!1,this.readDOMTimeout=null}
function Ha(e,t){var r=Or(e,t.line)
if(!r||r.hidden)return null
var n=qe(e.doc,t.line),i=Nr(r,n,t.line),o=ce(n,e.doc.direction),a="left"
o&&(a=se(o,t.ch)%2?"right":"left")
var l=Hr(i.map,t.ch,a)
return l.offset="right"==l.collapse?l.end:l.start,l}function Ia(e,t){return t&&(e.bad=!0),e}function Ea(e,t,r){var n
if(t==e.display.lineDiv){if(!(n=e.display.lineDiv.childNodes[r]))return Ia(e.clipPos(et(e.display.viewTo-1)),!0)
t=null,r=0}else for(n=t;;n=n.parentNode){if(!n||n==e.display.lineDiv)return null
if(n.parentNode&&n.parentNode==e.display.lineDiv)break}for(var i=0;i<e.display.view.length;i++){var o=e.display.view[i]
if(o.node==n)return Fa(o,t,r)}}function Fa(e,t,r){var n=e.text.firstChild,i=!1
if(!t||!W(n,t))return Ia(et(Ye(e.line),0),!0)
if(t==n&&(i=!0,t=n.childNodes[r],r=0,!t)){var o=e.rest?X(e.rest):e.line
return Ia(et(Ye(o),o.text.length),i)}var a=3==t.nodeType?t:null,l=t
for(a||1!=t.childNodes.length||3!=t.firstChild.nodeType||(a=t.firstChild,r&&(r=a.nodeValue.length));l.parentNode!=n;)l=l.parentNode
var s=e.measure,u=s.maps
function c(t,r,n){for(var i=-1;i<(u?u.length:0);i++)for(var o=i<0?s.map:u[i],a=0;a<o.length;a+=3){var l=o[a+2]
if(l==t||l==r){var c=Ye(i<0?e.line:e.rest[i]),d=o[a]+n
return(n<0||l!=t)&&(d=o[a+(n?1:0)]),et(c,d)}}}var d=c(a,l,r)
if(d)return Ia(d,i)
for(var f=l.nextSibling,h=a?a.nodeValue.length-r:0;f;f=f.nextSibling){if(d=c(f,f.firstChild,0))return Ia(et(d.line,d.ch-h),i)
h+=f.textContent.length}for(var p=l.previousSibling,g=r;p;p=p.previousSibling){if(d=c(p,p.firstChild,-1))return Ia(et(d.line,d.ch+g),i)
g+=p.textContent.length}}Pa.prototype.init=function(e){var t=this,r=this,n=r.cm,i=r.div=e.lineDiv
function o(e){if(!me(n,e)){if(n.somethingSelected())La({lineWise:!1,text:n.getSelections()}),"cut"==e.type&&n.replaceSelection("",null,"cut")
else{if(!n.options.lineWiseCopyCut)return
var t=Aa(n)
La({lineWise:!0,text:t.text}),"cut"==e.type&&n.operation(function(){n.setSelections(t.ranges,0,K),n.replaceSelection("",null,"cut")})}if(e.clipboardData){e.clipboardData.clearData()
var o=Sa.text.join("\n")
if(e.clipboardData.setData("Text",o),e.clipboardData.getData("Text")==o)return void e.preventDefault()}var a=Wa(),l=a.firstChild
n.display.lineSpace.insertBefore(a,n.display.lineSpace.firstChild),l.value=Sa.text.join("\n")
var s=document.activeElement
H(l),setTimeout(function(){n.display.lineSpace.removeChild(a),s.focus(),s==i&&r.showPrimarySelection()},50)}}Oa(i,n.options.spellcheck,n.options.autocorrect,n.options.autocapitalize),fe(i,"paste",function(e){me(n,e)||Ma(e,n)||l<=11&&setTimeout(Zn(n,function(){return t.updateFromDOM()}),20)}),fe(i,"compositionstart",function(e){t.composing={data:e.data,done:!1}}),fe(i,"compositionupdate",function(e){t.composing||(t.composing={data:e.data,done:!1})}),fe(i,"compositionend",function(e){t.composing&&(e.data!=t.composing.data&&t.readFromDOMSoon(),t.composing.done=!0)}),fe(i,"touchstart",function(){return r.forceCompositionEnd()}),fe(i,"input",function(){t.composing||t.readFromDOMSoon()}),fe(i,"copy",o),fe(i,"cut",o)},Pa.prototype.prepareSelection=function(){var e=gn(this.cm,!1)
return e.focus=this.cm.state.focused,e},Pa.prototype.showSelection=function(e,t){e&&this.cm.display.view.length&&((e.focus||t)&&this.showPrimarySelection(),this.showMultipleSelections(e))},Pa.prototype.getSelection=function(){return this.cm.display.wrapper.ownerDocument.getSelection()},Pa.prototype.showPrimarySelection=function(){var e=this.getSelection(),t=this.cm,n=t.doc.sel.primary(),i=n.from(),o=n.to()
if(t.display.viewTo==t.display.viewFrom||i.line>=t.display.viewTo||o.line<t.display.viewFrom)e.removeAllRanges()
else{var a=Ea(t,e.anchorNode,e.anchorOffset),l=Ea(t,e.focusNode,e.focusOffset)
if(!a||a.bad||!l||l.bad||0!=tt(ot(a,l),i)||0!=tt(it(a,l),o)){var s=t.display.view,u=i.line>=t.display.viewFrom&&Ha(t,i)||{node:s[0].measure.map[2],offset:0},c=o.line<t.display.viewTo&&Ha(t,o)
if(!c){var d=s[s.length-1].measure,f=d.maps?d.maps[d.maps.length-1]:d.map
c={node:f[f.length-1],offset:f[f.length-2]-f[f.length-3]}}if(u&&c){var h,p=e.rangeCount&&e.getRangeAt(0)
try{h=L(u.node,u.offset,c.offset,c.node)}catch(e){}h&&(!r&&t.state.focused?(e.collapse(u.node,u.offset),h.collapsed||(e.removeAllRanges(),e.addRange(h))):(e.removeAllRanges(),e.addRange(h)),p&&null==e.anchorNode?e.addRange(p):r&&this.startGracePeriod()),this.rememberSelection()}else e.removeAllRanges()}}},Pa.prototype.startGracePeriod=function(){var e=this
clearTimeout(this.gracePeriod),this.gracePeriod=setTimeout(function(){e.gracePeriod=!1,e.selectionChanged()&&e.cm.operation(function(){return e.cm.curOp.selectionChanged=!0})},20)},Pa.prototype.showMultipleSelections=function(e){N(this.cm.display.cursorDiv,e.cursors),N(this.cm.display.selectionDiv,e.selection)},Pa.prototype.rememberSelection=function(){var e=this.getSelection()
this.lastAnchorNode=e.anchorNode,this.lastAnchorOffset=e.anchorOffset,this.lastFocusNode=e.focusNode,this.lastFocusOffset=e.focusOffset},Pa.prototype.selectionInEditor=function(){var e=this.getSelection()
if(!e.rangeCount)return!1
var t=e.getRangeAt(0).commonAncestorContainer
return W(this.div,t)},Pa.prototype.focus=function(){"nocursor"!=this.cm.options.readOnly&&(this.selectionInEditor()||this.showSelection(this.prepareSelection(),!0),this.div.focus())},Pa.prototype.blur=function(){this.div.blur()},Pa.prototype.getField=function(){return this.div},Pa.prototype.supportsTouch=function(){return!0},Pa.prototype.receivedFocus=function(){var e=this
this.selectionInEditor()?this.pollSelection():Yn(this.cm,function(){return e.cm.curOp.selectionChanged=!0}),this.polling.set(this.cm.options.pollInterval,function t(){e.cm.state.focused&&(e.pollSelection(),e.polling.set(e.cm.options.pollInterval,t))})},Pa.prototype.selectionChanged=function(){var e=this.getSelection()
return e.anchorNode!=this.lastAnchorNode||e.anchorOffset!=this.lastAnchorOffset||e.focusNode!=this.lastFocusNode||e.focusOffset!=this.lastFocusOffset},Pa.prototype.pollSelection=function(){if(null==this.readDOMTimeout&&!this.gracePeriod&&this.selectionChanged()){var e=this.getSelection(),t=this.cm
if(m&&c&&this.cm.display.gutterSpecs.length&&function(e){for(var t=e;t;t=t.parentNode)if(/CodeMirror-gutter-wrapper/.test(t.className))return!0
return!1}(e.anchorNode))return this.cm.triggerOnKeyDown({type:"keydown",keyCode:8,preventDefault:Math.abs}),this.blur(),void this.focus()
if(!this.composing){this.rememberSelection()
var r=Ea(t,e.anchorNode,e.anchorOffset),n=Ea(t,e.focusNode,e.focusOffset)
r&&n&&Yn(t,function(){Xi(t.doc,ki(r,n),K),(r.bad||n.bad)&&(t.curOp.selectionChanged=!0)})}}},Pa.prototype.pollContent=function(){null!=this.readDOMTimeout&&(clearTimeout(this.readDOMTimeout),this.readDOMTimeout=null)
var e,t,r,n=this.cm,i=n.display,o=n.doc.sel.primary(),a=o.from(),l=o.to()
if(0==a.ch&&a.line>n.firstLine()&&(a=et(a.line-1,qe(n.doc,a.line-1).length)),l.ch==qe(n.doc,l.line).text.length&&l.line<n.lastLine()&&(l=et(l.line+1,0)),a.line<i.viewFrom||l.line>i.viewTo-1)return!1
a.line==i.viewFrom||0==(e=sn(n,a.line))?(t=Ye(i.view[0].line),r=i.view[0].node):(t=Ye(i.view[e].line),r=i.view[e-1].node.nextSibling)
var s,u,c=sn(n,l.line)
if(c==i.view.length-1?(s=i.viewTo-1,u=i.lineDiv.lastChild):(s=Ye(i.view[c+1].line)-1,u=i.view[c+1].node.previousSibling),!r)return!1
for(var d=n.doc.splitLines(function(e,t,r,n,i){var o="",a=!1,l=e.doc.lineSeparator(),s=!1
function u(){a&&(o+=l,s&&(o+=l),a=s=!1)}function c(e){e&&(u(),o+=e)}function d(t){if(1==t.nodeType){var r=t.getAttribute("cm-text")
if(r)return void c(r)
var o,f=t.getAttribute("cm-marker")
if(f){var h=e.findMarks(et(n,0),et(i+1,0),(m=+f,function(e){return e.id==m}))
return void(h.length&&(o=h[0].find(0))&&c($e(e.doc,o.from,o.to).join(l)))}if("false"==t.getAttribute("contenteditable"))return
var p=/^(pre|div|p|li|table|br)$/i.test(t.nodeName)
if(!/^br$/i.test(t.nodeName)&&0==t.textContent.length)return
p&&u()
for(var g=0;g<t.childNodes.length;g++)d(t.childNodes[g]);/^(pre|p)$/i.test(t.nodeName)&&(s=!0),p&&(a=!0)}else 3==t.nodeType&&c(t.nodeValue.replace(/\u200b/g,"").replace(/\u00a0/g," "))
var m}for(;d(t),t!=r;)t=t.nextSibling,s=!1
return o}(n,r,u,t,s)),f=$e(n.doc,et(t,0),et(s,qe(n.doc,s).text.length));d.length>1&&f.length>1;)if(X(d)==X(f))d.pop(),f.pop(),s--
else{if(d[0]!=f[0])break
d.shift(),f.shift(),t++}for(var h=0,p=0,g=d[0],m=f[0],v=Math.min(g.length,m.length);h<v&&g.charCodeAt(h)==m.charCodeAt(h);)++h
for(var y=X(d),b=X(f),w=Math.min(y.length-(1==d.length?h:0),b.length-(1==f.length?h:0));p<w&&y.charCodeAt(y.length-p-1)==b.charCodeAt(b.length-p-1);)++p
if(1==d.length&&1==f.length&&t==a.line)for(;h&&h>a.ch&&y.charCodeAt(y.length-p-1)==b.charCodeAt(b.length-p-1);)h--,p++
d[d.length-1]=y.slice(0,y.length-p).replace(/^\u200b+/,""),d[0]=d[0].slice(h).replace(/\u200b+$/,"")
var x=et(t,h),k=et(s,f.length?X(f).length-p:0)
return d.length>1||d[0]||tt(x,k)?(co(n.doc,d,x,k,"+input"),!0):void 0},Pa.prototype.ensurePolled=function(){this.forceCompositionEnd()},Pa.prototype.reset=function(){this.forceCompositionEnd()},Pa.prototype.forceCompositionEnd=function(){this.composing&&(clearTimeout(this.readDOMTimeout),this.composing=null,this.updateFromDOM(),this.div.blur(),this.div.focus())},Pa.prototype.readFromDOMSoon=function(){var e=this
null==this.readDOMTimeout&&(this.readDOMTimeout=setTimeout(function(){if(e.readDOMTimeout=null,e.composing){if(!e.composing.done)return
e.composing=null}e.updateFromDOM()},80))},Pa.prototype.updateFromDOM=function(){var e=this
!this.cm.isReadOnly()&&this.pollContent()||Yn(this.cm,function(){return un(e.cm)})},Pa.prototype.setUneditable=function(e){e.contentEditable="false"},Pa.prototype.onKeyPress=function(e){0==e.charCode||this.composing||(e.preventDefault(),this.cm.isReadOnly()||Zn(this.cm,Ta)(this.cm,String.fromCharCode(null==e.charCode?e.keyCode:e.charCode),0))},Pa.prototype.readOnlyChanged=function(e){this.div.contentEditable=String("nocursor"!=e)},Pa.prototype.onContextMenu=function(){},Pa.prototype.resetPosition=function(){},Pa.prototype.needsContentAttribute=!0
var Ra=function(e){this.cm=e,this.prevInput="",this.pollingFast=!1,this.polling=new R,this.hasSelection=!1,this.composing=null}
Ra.prototype.init=function(e){var t=this,r=this,n=this.cm
this.createField(e)
var i=this.textarea
function o(e){if(!me(n,e)){if(n.somethingSelected())La({lineWise:!1,text:n.getSelections()})
else{if(!n.options.lineWiseCopyCut)return
var t=Aa(n)
La({lineWise:!0,text:t.text}),"cut"==e.type?n.setSelections(t.ranges,null,K):(r.prevInput="",i.value=t.text.join("\n"),H(i))}"cut"==e.type&&(n.state.cutIncoming=+new Date)}}e.wrapper.insertBefore(this.wrapper,e.wrapper.firstChild),g&&(i.style.width="0px"),fe(i,"input",function(){a&&l>=9&&t.hasSelection&&(t.hasSelection=null),r.poll()}),fe(i,"paste",function(e){me(n,e)||Ma(e,n)||(n.state.pasteIncoming=+new Date,r.fastPoll())}),fe(i,"cut",o),fe(i,"copy",o),fe(e.scroller,"paste",function(t){if(!xr(e,t)&&!me(n,t)){if(!i.dispatchEvent)return n.state.pasteIncoming=+new Date,void r.focus()
var o=new Event("paste")
o.clipboardData=t.clipboardData,i.dispatchEvent(o)}}),fe(e.lineSpace,"selectstart",function(t){xr(e,t)||we(t)}),fe(i,"compositionstart",function(){var e=n.getCursor("from")
r.composing&&r.composing.range.clear(),r.composing={start:e,range:n.markText(e,n.getCursor("to"),{className:"CodeMirror-composing"})}}),fe(i,"compositionend",function(){r.composing&&(r.poll(),r.composing.range.clear(),r.composing=null)})},Ra.prototype.createField=function(e){this.wrapper=Wa(),this.textarea=this.wrapper.firstChild},Ra.prototype.prepareSelection=function(){var e=this.cm,t=e.display,r=e.doc,n=gn(e)
if(e.options.moveInputWithCursor){var i=qr(e,r.sel.primary().head,"div"),o=t.wrapper.getBoundingClientRect(),a=t.lineDiv.getBoundingClientRect()
n.teTop=Math.max(0,Math.min(t.wrapper.clientHeight-10,i.top+a.top-o.top)),n.teLeft=Math.max(0,Math.min(t.wrapper.clientWidth-10,i.left+a.left-o.left))}return n},Ra.prototype.showSelection=function(e){var t=this.cm.display
N(t.cursorDiv,e.cursors),N(t.selectionDiv,e.selection),null!=e.teTop&&(this.wrapper.style.top=e.teTop+"px",this.wrapper.style.left=e.teLeft+"px")},Ra.prototype.reset=function(e){if(!this.contextMenuPending&&!this.composing){var t=this.cm
if(t.somethingSelected()){this.prevInput=""
var r=t.getSelection()
this.textarea.value=r,t.state.focused&&H(this.textarea),a&&l>=9&&(this.hasSelection=r)}else e||(this.prevInput=this.textarea.value="",a&&l>=9&&(this.hasSelection=null))}},Ra.prototype.getField=function(){return this.textarea},Ra.prototype.supportsTouch=function(){return!1},Ra.prototype.focus=function(){if("nocursor"!=this.cm.options.readOnly&&(!v||D()!=this.textarea))try{this.textarea.focus()}catch(e){}},Ra.prototype.blur=function(){this.textarea.blur()},Ra.prototype.resetPosition=function(){this.wrapper.style.top=this.wrapper.style.left=0},Ra.prototype.receivedFocus=function(){this.slowPoll()},Ra.prototype.slowPoll=function(){var e=this
this.pollingFast||this.polling.set(this.cm.options.pollInterval,function(){e.poll(),e.cm.state.focused&&e.slowPoll()})},Ra.prototype.fastPoll=function(){var e=!1,t=this
t.pollingFast=!0,t.polling.set(20,function r(){t.poll()||e?(t.pollingFast=!1,t.slowPoll()):(e=!0,t.polling.set(60,r))})},Ra.prototype.poll=function(){var e=this,t=this.cm,r=this.textarea,n=this.prevInput
if(this.contextMenuPending||!t.state.focused||ze(r)&&!n&&!this.composing||t.isReadOnly()||t.options.disableInput||t.state.keySeq)return!1
var i=r.value
if(i==n&&!t.somethingSelected())return!1
if(a&&l>=9&&this.hasSelection===i||y&&/[\uf700-\uf7ff]/.test(i))return t.display.input.reset(),!1
if(t.doc.sel==t.display.selForContextMenu){var o=i.charCodeAt(0)
if(8203!=o||n||(n="​"),8666==o)return this.reset(),this.cm.execCommand("undo")}for(var s=0,u=Math.min(n.length,i.length);s<u&&n.charCodeAt(s)==i.charCodeAt(s);)++s
return Yn(t,function(){Ta(t,i.slice(s),n.length-s,null,e.composing?"*compose":null),i.length>1e3||i.indexOf("\n")>-1?r.value=e.prevInput="":e.prevInput=i,e.composing&&(e.composing.range.clear(),e.composing.range=t.markText(e.composing.start,t.getCursor("to"),{className:"CodeMirror-composing"}))}),!0},Ra.prototype.ensurePolled=function(){this.pollingFast&&this.poll()&&(this.pollingFast=!1)},Ra.prototype.onKeyPress=function(){a&&l>=9&&(this.hasSelection=null),this.fastPoll()},Ra.prototype.onContextMenu=function(e){var t=this,r=t.cm,n=r.display,i=t.textarea
t.contextMenuPending&&t.contextMenuPending()
var o=ln(r,e),u=n.scroller.scrollTop
if(o&&!d){r.options.resetSelectionOnContextMenu&&-1==r.doc.sel.contains(o)&&Zn(r,Xi)(r.doc,ki(o),K)
var c,f=i.style.cssText,h=t.wrapper.style.cssText,p=t.wrapper.offsetParent.getBoundingClientRect()
if(t.wrapper.style.cssText="position: static",i.style.cssText="position: absolute; width: 30px; height: 30px;\n      top: "+(e.clientY-p.top-5)+"px; left: "+(e.clientX-p.left-5)+"px;\n      z-index: 1000; background: "+(a?"rgba(255, 255, 255, .05)":"transparent")+";\n      outline: none; border-width: 0; outline: none; overflow: hidden; opacity: .05; filter: alpha(opacity=5);",s&&(c=window.scrollY),n.input.focus(),s&&window.scrollTo(null,c),n.input.reset(),r.somethingSelected()||(i.value=t.prevInput=" "),t.contextMenuPending=v,n.selForContextMenu=r.doc.sel,clearTimeout(n.detectingSelectAll),a&&l>=9&&m(),C){Ce(e)
var g=function(){pe(window,"mouseup",g),setTimeout(v,20)}
fe(window,"mouseup",g)}else setTimeout(v,50)}function m(){if(null!=i.selectionStart){var e=r.somethingSelected(),o="​"+(e?i.value:"")
i.value="⇚",i.value=o,t.prevInput=e?"":"​",i.selectionStart=1,i.selectionEnd=o.length,n.selForContextMenu=r.doc.sel}}function v(){if(t.contextMenuPending==v&&(t.contextMenuPending=!1,t.wrapper.style.cssText=h,i.style.cssText=f,a&&l<9&&n.scrollbars.setScrollTop(n.scroller.scrollTop=u),null!=i.selectionStart)){(!a||a&&l<9)&&m()
var e=0,o=function(){n.selForContextMenu==r.doc.sel&&0==i.selectionStart&&i.selectionEnd>0&&"​"==t.prevInput?Zn(r,no)(r):e++<10?n.detectingSelectAll=setTimeout(o,500):(n.selForContextMenu=null,n.input.reset())}
n.detectingSelectAll=setTimeout(o,200)}}},Ra.prototype.readOnlyChanged=function(e){e||this.reset(),this.textarea.disabled="nocursor"==e},Ra.prototype.setUneditable=function(){},Ra.prototype.needsContentAttribute=!1,function(e){var t=e.optionHandlers
function r(r,n,i,o){e.defaults[r]=n,i&&(t[r]=o?function(e,t,r){r!=ma&&i(e,t,r)}:i)}e.defineOption=r,e.Init=ma,r("value","",function(e,t){return e.setValue(t)},!0),r("mode",null,function(e,t){e.doc.modeOption=t,Mi(e)},!0),r("indentUnit",2,Mi,!0),r("indentWithTabs",!1),r("smartIndent",!0),r("tabSize",4,function(e){Ni(e),Rr(e),un(e)},!0),r("lineSeparator",null,function(e,t){if(e.doc.lineSep=t,t){var r=[],n=e.doc.first
e.doc.iter(function(e){for(var i=0;;){var o=e.text.indexOf(t,i)
if(-1==o)break
i=o+t.length,r.push(et(n,o))}n++})
for(var i=r.length-1;i>=0;i--)co(e.doc,t,r[i],et(r[i].line,r[i].ch+t.length))}}),r("specialChars",/[\u0000-\u001f\u007f-\u009f\u00ad\u061c\u200b-\u200f\u2028\u2029\ufeff]/g,function(e,t,r){e.state.specialChars=new RegExp(t.source+(t.test("\t")?"":"|\t"),"g"),r!=ma&&e.refresh()}),r("specialCharPlaceholder",Qt,function(e){return e.refresh()},!0),r("electricChars",!0),r("inputStyle",v?"contenteditable":"textarea",function(){throw new Error("inputStyle can not (yet) be changed in a running editor")},!0),r("spellcheck",!1,function(e,t){return e.getInputField().spellcheck=t},!0),r("autocorrect",!1,function(e,t){return e.getInputField().autocorrect=t},!0),r("autocapitalize",!1,function(e,t){return e.getInputField().autocapitalize=t},!0),r("rtlMoveVisually",!w),r("wholeLineUpdateBefore",!0),r("theme","default",function(e){ga(e),fi(e)},!0),r("keyMap","default",function(e,t,r){var n=Uo(t),i=r!=ma&&Uo(r)
i&&i.detach&&i.detach(e,n),n.attach&&n.attach(e,i||null)}),r("extraKeys",null),r("configureMouse",null),r("lineWrapping",!1,wa,!0),r("gutters",[],function(e,t){e.display.gutterSpecs=ci(t,e.options.lineNumbers),fi(e)},!0),r("fixedGutter",!0,function(e,t){e.display.gutters.style.left=t?nn(e.display)+"px":"0",e.refresh()},!0),r("coverGutterNextToScrollbar",!1,function(e){return Rn(e)},!0),r("scrollbarStyle","native",function(e){Vn(e),Rn(e),e.display.scrollbars.setScrollTop(e.doc.scrollTop),e.display.scrollbars.setScrollLeft(e.doc.scrollLeft)},!0),r("lineNumbers",!1,function(e,t){e.display.gutterSpecs=ci(e.options.gutters,t),fi(e)},!0),r("firstLineNumber",1,fi,!0),r("lineNumberFormatter",function(e){return e},fi,!0),r("showCursorWhenSelecting",!1,pn,!0),r("resetSelectionOnContextMenu",!0),r("lineWiseCopyCut",!0),r("pasteLinesPerSelection",!0),r("selectionsMayTouch",!1),r("readOnly",!1,function(e,t){"nocursor"==t&&(Cn(e),e.display.input.blur()),e.display.input.readOnlyChanged(t)}),r("disableInput",!1,function(e,t){t||e.display.input.reset()},!0),r("dragDrop",!0,ba),r("allowDropFileTypes",null),r("cursorBlinkRate",530),r("cursorScrollMargin",0),r("cursorHeight",1,pn,!0),r("singleCursorHeightPerLine",!0,pn,!0),r("workTime",100),r("workDelay",100),r("flattenSpans",!0,Ni,!0),r("addModeClass",!1,Ni,!0),r("pollInterval",100),r("undoDepth",200,function(e,t){return e.doc.history.undoDepth=t}),r("historyEventDelay",1250),r("viewportMargin",10,function(e){return e.refresh()},!0),r("maxHighlightLength",1e4,Ni,!0),r("moveInputWithCursor",!0,function(e,t){t||e.display.input.resetPosition()}),r("tabindex",null,function(e,t){return e.display.input.getField().tabIndex=t||""}),r("autofocus",null),r("direction","ltr",function(e,t){return e.doc.setDirection(t)},!0),r("phrases",null)}(xa),function(e){var t=e.optionHandlers,r=e.helpers={}
e.prototype={constructor:e,focus:function(){window.focus(),this.display.input.focus()},setOption:function(e,r){var n=this.options,i=n[e]
n[e]==r&&"mode"!=e||(n[e]=r,t.hasOwnProperty(e)&&Zn(this,t[e])(this,r,i),ge(this,"optionChange",this,e))},getOption:function(e){return this.options[e]},getDoc:function(){return this.doc},addKeyMap:function(e,t){this.state.keyMaps[t?"push":"unshift"](Uo(e))},removeKeyMap:function(e){for(var t=this.state.keyMaps,r=0;r<t.length;++r)if(t[r]==e||t[r].name==e)return t.splice(r,1),!0},addOverlay:Qn(function(t,r){var n=t.token?t:e.getMode(this.options,t)
if(n.startState)throw new Error("Overlays may not be stateful.")
!function(e,t,r){for(var n=0,i=r(t);n<e.length&&r(e[n])<=i;)n++
e.splice(n,0,t)}(this.state.overlays,{mode:n,modeSpec:t,opaque:r&&r.opaque,priority:r&&r.priority||0},function(e){return e.priority}),this.state.modeGen++,un(this)}),removeOverlay:Qn(function(e){for(var t=this.state.overlays,r=0;r<t.length;++r){var n=t[r].modeSpec
if(n==e||"string"==typeof e&&n.name==e)return t.splice(r,1),this.state.modeGen++,void un(this)}}),indentLine:Qn(function(e,t,r){"string"!=typeof t&&"number"!=typeof t&&(t=null==t?this.options.smartIndent?"smart":"prev":t?"add":"subtract"),Qe(this.doc,e)&&Ca(this,e,t,r)}),indentSelection:Qn(function(e){for(var t=this.doc.sel.ranges,r=-1,n=0;n<t.length;n++){var i=t[n]
if(i.empty())i.head.line>r&&(Ca(this,i.head.line,e,!0),r=i.head.line,n==this.doc.sel.primIndex&&An(this))
else{var o=i.from(),a=i.to(),l=Math.max(r,o.line)
r=Math.min(this.lastLine(),a.line-(a.ch?0:1))+1
for(var s=l;s<r;++s)Ca(this,s,e)
var u=this.doc.sel.ranges
0==o.ch&&t.length==u.length&&u[n].from().ch>0&&qi(this.doc,n,new wi(o,u[n].to()),K)}}}),getTokenAt:function(e,t){return yt(this,e,t)},getLineTokens:function(e,t){return yt(this,et(e),t,!0)},getTokenTypeAt:function(e){e=lt(this.doc,e)
var t,r=ft(this,qe(this.doc,e.line)),n=0,i=(r.length-1)/2,o=e.ch
if(0==o)t=r[2]
else for(;;){var a=n+i>>1
if((a?r[2*a-1]:0)>=o)i=a
else{if(!(r[2*a+1]<o)){t=r[2*a+2]
break}n=a+1}}var l=t?t.indexOf("overlay "):-1
return l<0?t:0==l?null:t.slice(0,l-1)},getModeAt:function(t){var r=this.doc.mode
return r.innerMode?e.innerMode(r,this.getTokenAt(t).state).mode:r},getHelper:function(e,t){return this.getHelpers(e,t)[0]},getHelpers:function(e,t){var n=[]
if(!r.hasOwnProperty(t))return n
var i=r[t],o=this.getModeAt(e)
if("string"==typeof o[t])i[o[t]]&&n.push(i[o[t]])
else if(o[t])for(var a=0;a<o[t].length;a++){var l=i[o[t][a]]
l&&n.push(l)}else o.helperType&&i[o.helperType]?n.push(i[o.helperType]):i[o.name]&&n.push(i[o.name])
for(var s=0;s<i._global.length;s++){var u=i._global[s]
u.pred(o,this)&&-1==B(n,u.val)&&n.push(u.val)}return n},getStateAfter:function(e,t){var r=this.doc
return ht(this,(e=at(r,null==e?r.first+r.size-1:e))+1,t).state},cursorCoords:function(e,t){var r=this.doc.sel.primary()
return qr(this,null==e?r.head:"object"==typeof e?lt(this.doc,e):e?r.from():r.to(),t||"page")},charCoords:function(e,t){return Ur(this,lt(this.doc,e),t||"page")},coordsChar:function(e,t){return Xr(this,(e=Gr(this,e,t||"page")).left,e.top)},lineAtHeight:function(e,t){return e=Gr(this,{top:e,left:0},t||"page").top,Ze(this.doc,e+this.display.viewOffset)},heightAtLine:function(e,t,r){var n,i=!1
if("number"==typeof e){var o=this.doc.first+this.doc.size-1
e<this.doc.first?e=this.doc.first:e>o&&(e=o,i=!0),n=qe(this.doc,e)}else n=e
return Kr(this,n,{top:0,left:0},t||"page",r||i).top+(i?this.doc.height-Kt(n):0)},defaultTextHeight:function(){return en(this.display)},defaultCharWidth:function(){return tn(this.display)},getViewport:function(){return{from:this.display.viewFrom,to:this.display.viewTo}},addWidget:function(e,t,r,n,i){var o,a,l=this.display,s=(e=qr(this,lt(this.doc,e))).bottom,u=e.left
if(t.style.position="absolute",t.setAttribute("cm-ignore-events","true"),this.display.input.setUneditable(t),l.sizer.appendChild(t),"over"==n)s=e.top
else if("above"==n||"near"==n){var c=Math.max(l.wrapper.clientHeight,this.doc.height),d=Math.max(l.sizer.clientWidth,l.lineSpace.clientWidth);("above"==n||e.bottom+t.offsetHeight>c)&&e.top>t.offsetHeight?s=e.top-t.offsetHeight:e.bottom+t.offsetHeight<=c&&(s=e.bottom),u+t.offsetWidth>d&&(u=d-t.offsetWidth)}t.style.top=s+"px",t.style.left=t.style.right="","right"==i?(u=l.sizer.clientWidth-t.offsetWidth,t.style.right="0px"):("left"==i?u=0:"middle"==i&&(u=(l.sizer.clientWidth-t.offsetWidth)/2),t.style.left=u+"px"),r&&(null!=(a=Mn(o=this,{left:u,top:s,right:u+t.offsetWidth,bottom:s+t.offsetHeight})).scrollTop&&zn(o,a.scrollTop),null!=a.scrollLeft&&Hn(o,a.scrollLeft))},triggerOnKeyDown:Qn(oa),triggerOnKeyPress:Qn(la),triggerOnKeyUp:aa,triggerOnMouseDown:Qn(da),execCommand:function(e){if(Yo.hasOwnProperty(e))return Yo[e].call(null,this)},triggerElectric:Qn(function(e){Na(this,e)}),findPosH:function(e,t,r,n){var i=1
t<0&&(i=-1,t=-t)
for(var o=lt(this.doc,e),a=0;a<t&&!(o=Da(this.doc,o,i,r,n)).hitSide;++a);return o},moveH:Qn(function(e,t){var r=this
this.extendSelectionsBy(function(n){return r.display.shift||r.doc.extend||n.empty()?Da(r.doc,n.head,e,t,r.options.rtlMoveVisually):e<0?n.from():n.to()},U)}),deleteH:Qn(function(e,t){var r=this.doc.sel,n=this.doc
r.somethingSelected()?n.replaceSelection("",null,"+delete"):qo(this,function(r){var i=Da(n,r.head,e,t,!1)
return e<0?{from:i,to:r.head}:{from:r.head,to:i}})}),findPosV:function(e,t,r,n){var i=1,o=n
t<0&&(i=-1,t=-t)
for(var a=lt(this.doc,e),l=0;l<t;++l){var s=qr(this,a,"div")
if(null==o?o=s.left:s.left=o,(a=za(this,s,i,r)).hitSide)break}return a},moveV:Qn(function(e,t){var r=this,n=this.doc,i=[],o=!this.display.shift&&!n.extend&&n.sel.somethingSelected()
if(n.extendSelectionsBy(function(a){if(o)return e<0?a.from():a.to()
var l=qr(r,a.head,"div")
null!=a.goalColumn&&(l.left=a.goalColumn),i.push(l.left)
var s=za(r,l,e,t)
return"page"==t&&a==n.sel.primary()&&Nn(r,Ur(r,s,"div").top-l.top),s},U),i.length)for(var a=0;a<n.sel.ranges.length;a++)n.sel.ranges[a].goalColumn=i[a]}),findWordAt:function(e){var t=qe(this.doc,e.line).text,r=e.ch,n=e.ch
if(t){var i=this.getHelper(e,"wordChars")
"before"!=e.sticky&&n!=t.length||!r?++n:--r
for(var o=t.charAt(r),a=te(o,i)?function(e){return te(e,i)}:/\s/.test(o)?function(e){return/\s/.test(e)}:function(e){return!/\s/.test(e)&&!te(e)};r>0&&a(t.charAt(r-1));)--r
for(;n<t.length&&a(t.charAt(n));)++n}return new wi(et(e.line,r),et(e.line,n))},toggleOverwrite:function(e){null!=e&&e==this.state.overwrite||((this.state.overwrite=!this.state.overwrite)?z(this.display.cursorDiv,"CodeMirror-overwrite"):T(this.display.cursorDiv,"CodeMirror-overwrite"),ge(this,"overwriteToggle",this,this.state.overwrite))},hasFocus:function(){return this.display.input.getField()==D()},isReadOnly:function(){return!(!this.options.readOnly&&!this.doc.cantEdit)},scrollTo:Qn(function(e,t){On(this,e,t)}),getScrollInfo:function(){var e=this.display.scroller
return{left:e.scrollLeft,top:e.scrollTop,height:e.scrollHeight-Lr(this)-this.display.barHeight,width:e.scrollWidth-Lr(this)-this.display.barWidth,clientHeight:Mr(this),clientWidth:Tr(this)}},scrollIntoView:Qn(function(e,t){null==e?(e={from:this.doc.sel.primary().head,to:null},null==t&&(t=this.options.cursorScrollMargin)):"number"==typeof e?e={from:et(e,0),to:null}:null==e.from&&(e={from:e,to:null}),e.to||(e.to=e.from),e.margin=t||0,null!=e.from.line?function(e,t){Wn(e),e.curOp.scrollToPos=t}(this,e):Dn(this,e.from,e.to,e.margin)}),setSize:Qn(function(e,t){var r=this,n=function(e){return"number"==typeof e||/^\d+$/.test(String(e))?e+"px":e}
null!=e&&(this.display.wrapper.style.width=n(e)),null!=t&&(this.display.wrapper.style.height=n(t)),this.options.lineWrapping&&Fr(this)
var i=this.display.viewFrom
this.doc.iter(i,this.display.viewTo,function(e){if(e.widgets)for(var t=0;t<e.widgets.length;t++)if(e.widgets[t].noHScroll){cn(r,i,"widget")
break}++i}),this.curOp.forceUpdate=!0,ge(this,"refresh",this)}),operation:function(e){return Yn(this,e)},startOperation:function(){return Gn(this)},endOperation:function(){return Un(this)},refresh:Qn(function(){var e=this.display.cachedTextHeight
un(this),this.curOp.forceUpdate=!0,Rr(this),On(this,this.doc.scrollLeft,this.doc.scrollTop),ai(this.display),(null==e||Math.abs(e-en(this.display))>.5)&&an(this),ge(this,"refresh",this)}),swapDoc:Qn(function(e){var t=this.doc
return t.cm=null,this.state.selectingText&&this.state.selectingText(),Di(this,e),Rr(this),this.display.input.reset(),On(this,e.scrollLeft,e.scrollTop),this.curOp.forceScroll=!0,lr(this,"swapDoc",this,t),t}),phrase:function(e){var t=this.options.phrases
return t&&Object.prototype.hasOwnProperty.call(t,e)?t[e]:e},getInputField:function(){return this.display.input.getField()},getWrapperElement:function(){return this.display.wrapper},getScrollerElement:function(){return this.display.scroller},getGutterElement:function(){return this.display.gutters}},be(e),e.registerHelper=function(t,n,i){r.hasOwnProperty(t)||(r[t]=e[t]={_global:[]}),r[t][n]=i},e.registerGlobalHelper=function(t,n,i,o){e.registerHelper(t,n,o),r[t]._global.push({pred:i,val:o})}}(xa)
var Ba="iter insert remove copy getEditor constructor".split(" ")
for(var ja in Mo.prototype)Mo.prototype.hasOwnProperty(ja)&&B(Ba,ja)<0&&(xa.prototype[ja]=function(e){return function(){return e.apply(this.doc,arguments)}}(Mo.prototype[ja]))
return be(Mo),xa.inputStyles={textarea:Ra,contenteditable:Pa},xa.defineMode=function(e){xa.defaults.mode||"null"==e||(xa.defaults.mode=e),function(e,t){arguments.length>2&&(t.dependencies=Array.prototype.slice.call(arguments,2)),Ie[e]=t}.apply(this,arguments)},xa.defineMIME=function(e,t){Ee[e]=t},xa.defineMode("null",function(){return{token:function(e){return e.skipToEnd()}}}),xa.defineMIME("text/plain","null"),xa.defineExtension=function(e,t){xa.prototype[e]=t},xa.defineDocExtension=function(e,t){Mo.prototype[e]=t},xa.fromTextArea=function(e,t){if((t=t?E(t):{}).value=e.value,!t.tabindex&&e.tabIndex&&(t.tabindex=e.tabIndex),!t.placeholder&&e.placeholder&&(t.placeholder=e.placeholder),null==t.autofocus){var r=D()
t.autofocus=r==e||null!=e.getAttribute("autofocus")&&r==document.body}function n(){e.value=l.getValue()}var i
if(e.form&&(fe(e.form,"submit",n),!t.leaveSubmitMethodAlone)){var o=e.form
i=o.submit
try{var a=o.submit=function(){n(),o.submit=i,o.submit(),o.submit=a}}catch(e){}}t.finishInit=function(t){t.save=n,t.getTextArea=function(){return e},t.toTextArea=function(){t.toTextArea=isNaN,n(),e.parentNode.removeChild(t.getWrapperElement()),e.style.display="",e.form&&(pe(e.form,"submit",n),"function"==typeof e.form.submit&&(e.form.submit=i))}},e.style.display="none"
var l=xa(function(t){return e.parentNode.insertBefore(t,e.nextSibling)},t)
return l},function(e){e.off=pe,e.on=fe,e.wheelEventPixels=vi,e.Doc=Mo,e.splitLines=De,e.countColumn=F,e.findColumn=q,e.isWordChar=ee,e.Pass=V,e.signal=ge,e.Line=qt,e.changeEnd=Ci,e.scrollbarModel=jn,e.Pos=et,e.cmpPos=tt,e.modes=Ie,e.mimeModes=Ee,e.resolveMode=Fe,e.getMode=Re,e.modeExtensions=Be,e.extendMode=je,e.copyState=Ve,e.startState=Ge,e.innerMode=Ke,e.commands=Yo,e.keyMap=Fo,e.keyName=Go,e.isModifierKey=Vo,e.lookupKey=jo,e.normalizeKeyMap=Bo,e.StringStream=Ue,e.SharedTextMarker=Co,e.TextMarker=xo,e.LineWidget=yo,e.e_preventDefault=we,e.e_stopPropagation=xe,e.e_stop=Ce,e.addClass=z,e.contains=W,e.rmClass=T,e.keyNames=Po}(xa),xa.version="5.46.0",xa}),function(e){"object"==typeof exports&&"object"==typeof module?e(require("../../lib/codemirror")):"function"==typeof define&&define.amd?define(["../../lib/codemirror"],e):e(CodeMirror)}(function(e){"use strict"
function t(e){for(var t={},r=0;r<e.length;++r)t[e[r].toLowerCase()]=!0
return t}e.defineMode("css",function(t,r){var n=r.inline
r.propertyKeywords||(r=e.resolveMode("text/css"))
var i,o,a=t.indentUnit,l=r.tokenHooks,s=r.documentTypes||{},u=r.mediaTypes||{},c=r.mediaFeatures||{},d=r.mediaValueKeywords||{},f=r.propertyKeywords||{},h=r.nonStandardPropertyKeywords||{},p=r.fontProperties||{},g=r.counterDescriptors||{},m=r.colorKeywords||{},v=r.valueKeywords||{},y=r.allowNested,b=r.lineComment,w=!0===r.supportsAtComponent
function x(e,t){return i=t,e}function k(e){return function(t,r){for(var n,i=!1;null!=(n=t.next());){if(n==e&&!i){")"==e&&t.backUp(1)
break}i=!i&&"\\"==n}return(n==e||!i&&")"!=e)&&(r.tokenize=null),x("string","string")}}function C(e,t){return e.next(),e.match(/\s*[\"\')]/,!1)?t.tokenize=null:t.tokenize=k(")"),x(null,"(")}function S(e,t,r){this.type=e,this.indent=t,this.prev=r}function L(e,t,r,n){return e.context=new S(r,t.indentation()+(!1===n?0:a),e.context),r}function T(e){return e.context.prev&&(e.context=e.context.prev),e.context.type}function M(e,t,r){return O[r.context.type](e,t,r)}function N(e,t,r,n){for(var i=n||1;i>0;i--)r.context=r.context.prev
return M(e,t,r)}function A(e){var t=e.current().toLowerCase()
o=v.hasOwnProperty(t)?"atom":m.hasOwnProperty(t)?"keyword":"variable"}var O={top:function(e,t,r){if("{"==e)return L(r,t,"block")
if("}"==e&&r.context.prev)return T(r)
if(w&&/@component/i.test(e))return L(r,t,"atComponentBlock")
if(/^@(-moz-)?document$/i.test(e))return L(r,t,"documentTypes")
if(/^@(media|supports|(-moz-)?document|import)$/i.test(e))return L(r,t,"atBlock")
if(/^@(font-face|counter-style)/i.test(e))return r.stateArg=e,"restricted_atBlock_before"
if(/^@(-(moz|ms|o|webkit)-)?keyframes$/i.test(e))return"keyframes"
if(e&&"@"==e.charAt(0))return L(r,t,"at")
if("hash"==e)o="builtin"
else if("word"==e)o="tag"
else{if("variable-definition"==e)return"maybeprop"
if("interpolation"==e)return L(r,t,"interpolation")
if(":"==e)return"pseudo"
if(y&&"("==e)return L(r,t,"parens")}return r.context.type},block:function(e,t,r){if("word"==e){var n=t.current().toLowerCase()
return f.hasOwnProperty(n)?(o="property","maybeprop"):h.hasOwnProperty(n)?(o="string-2","maybeprop"):y?(o=t.match(/^\s*:(?:\s|$)/,!1)?"property":"tag","block"):(o+=" error","maybeprop")}return"meta"==e?"block":y||"hash"!=e&&"qualifier"!=e?O.top(e,t,r):(o="error","block")},maybeprop:function(e,t,r){return":"==e?L(r,t,"prop"):M(e,t,r)},prop:function(e,t,r){if(";"==e)return T(r)
if("{"==e&&y)return L(r,t,"propBlock")
if("}"==e||"{"==e)return N(e,t,r)
if("("==e)return L(r,t,"parens")
if("hash"!=e||/^#([0-9a-fA-f]{3,4}|[0-9a-fA-f]{6}|[0-9a-fA-f]{8})$/.test(t.current())){if("word"==e)A(t)
else if("interpolation"==e)return L(r,t,"interpolation")}else o+=" error"
return"prop"},propBlock:function(e,t,r){return"}"==e?T(r):"word"==e?(o="property","maybeprop"):r.context.type},parens:function(e,t,r){return"{"==e||"}"==e?N(e,t,r):")"==e?T(r):"("==e?L(r,t,"parens"):"interpolation"==e?L(r,t,"interpolation"):("word"==e&&A(t),"parens")},pseudo:function(e,t,r){return"meta"==e?"pseudo":"word"==e?(o="variable-3",r.context.type):M(e,t,r)},documentTypes:function(e,t,r){return"word"==e&&s.hasOwnProperty(t.current())?(o="tag",r.context.type):O.atBlock(e,t,r)},atBlock:function(e,t,r){if("("==e)return L(r,t,"atBlock_parens")
if("}"==e||";"==e)return N(e,t,r)
if("{"==e)return T(r)&&L(r,t,y?"block":"top")
if("interpolation"==e)return L(r,t,"interpolation")
if("word"==e){var n=t.current().toLowerCase()
o="only"==n||"not"==n||"and"==n||"or"==n?"keyword":u.hasOwnProperty(n)?"attribute":c.hasOwnProperty(n)?"property":d.hasOwnProperty(n)?"keyword":f.hasOwnProperty(n)?"property":h.hasOwnProperty(n)?"string-2":v.hasOwnProperty(n)?"atom":m.hasOwnProperty(n)?"keyword":"error"}return r.context.type},atComponentBlock:function(e,t,r){return"}"==e?N(e,t,r):"{"==e?T(r)&&L(r,t,y?"block":"top",!1):("word"==e&&(o="error"),r.context.type)},atBlock_parens:function(e,t,r){return")"==e?T(r):"{"==e||"}"==e?N(e,t,r,2):O.atBlock(e,t,r)},restricted_atBlock_before:function(e,t,r){return"{"==e?L(r,t,"restricted_atBlock"):"word"==e&&"@counter-style"==r.stateArg?(o="variable","restricted_atBlock_before"):M(e,t,r)},restricted_atBlock:function(e,t,r){return"}"==e?(r.stateArg=null,T(r)):"word"==e?(o="@font-face"==r.stateArg&&!p.hasOwnProperty(t.current().toLowerCase())||"@counter-style"==r.stateArg&&!g.hasOwnProperty(t.current().toLowerCase())?"error":"property","maybeprop"):"restricted_atBlock"},keyframes:function(e,t,r){return"word"==e?(o="variable","keyframes"):"{"==e?L(r,t,"top"):M(e,t,r)},at:function(e,t,r){return";"==e?T(r):"{"==e||"}"==e?N(e,t,r):("word"==e?o="tag":"hash"==e&&(o="builtin"),"at")},interpolation:function(e,t,r){return"}"==e?T(r):"{"==e||";"==e?N(e,t,r):("word"==e?o="variable":"variable"!=e&&"("!=e&&")"!=e&&(o="error"),"interpolation")}}
return{startState:function(e){return{tokenize:null,state:n?"block":"top",stateArg:null,context:new S(n?"block":"top",e||0,null)}},token:function(e,t){if(!t.tokenize&&e.eatSpace())return null
var r=(t.tokenize||function(e,t){var r=e.next()
if(l[r]){var n=l[r](e,t)
if(!1!==n)return n}return"@"==r?(e.eatWhile(/[\w\\\-]/),x("def",e.current())):"="==r||("~"==r||"|"==r)&&e.eat("=")?x(null,"compare"):'"'==r||"'"==r?(t.tokenize=k(r),t.tokenize(e,t)):"#"==r?(e.eatWhile(/[\w\\\-]/),x("atom","hash")):"!"==r?(e.match(/^\s*\w*/),x("keyword","important")):/\d/.test(r)||"."==r&&e.eat(/\d/)?(e.eatWhile(/[\w.%]/),x("number","unit")):"-"!==r?/[,+>*\/]/.test(r)?x(null,"select-op"):"."==r&&e.match(/^-?[_a-z][_a-z0-9-]*/i)?x("qualifier","qualifier"):/[:;{}\[\]\(\)]/.test(r)?x(null,r):e.match(/[\w-.]+(?=\()/)?(/^(url(-prefix)?|domain|regexp)$/.test(e.current().toLowerCase())&&(t.tokenize=C),x("variable callee","variable")):/[\w\\\-]/.test(r)?(e.eatWhile(/[\w\\\-]/),x("property","word")):x(null,null):/[\d.]/.test(e.peek())?(e.eatWhile(/[\w.%]/),x("number","unit")):e.match(/^-[\w\\\-]*/)?(e.eatWhile(/[\w\\\-]/),e.match(/^\s*:/,!1)?x("variable-2","variable-definition"):x("variable-2","variable")):e.match(/^\w+-/)?x("meta","meta"):void 0})(e,t)
return r&&"object"==typeof r&&(i=r[1],r=r[0]),o=r,"comment"!=i&&(t.state=O[t.state](i,e,t)),o},indent:function(e,t){var r=e.context,n=t&&t.charAt(0),i=r.indent
return"prop"!=r.type||"}"!=n&&")"!=n||(r=r.prev),r.prev&&("}"!=n||"block"!=r.type&&"top"!=r.type&&"interpolation"!=r.type&&"restricted_atBlock"!=r.type?(")"!=n||"parens"!=r.type&&"atBlock_parens"!=r.type)&&("{"!=n||"at"!=r.type&&"atBlock"!=r.type)||(i=Math.max(0,r.indent-a)):i=(r=r.prev).indent),i},electricChars:"}",blockCommentStart:"/*",blockCommentEnd:"*/",blockCommentContinue:" * ",lineComment:b,fold:"brace"}})
var r=["domain","regexp","url","url-prefix"],n=t(r),i=["all","aural","braille","handheld","print","projection","screen","tty","tv","embossed"],o=t(i),a=["width","min-width","max-width","height","min-height","max-height","device-width","min-device-width","max-device-width","device-height","min-device-height","max-device-height","aspect-ratio","min-aspect-ratio","max-aspect-ratio","device-aspect-ratio","min-device-aspect-ratio","max-device-aspect-ratio","color","min-color","max-color","color-index","min-color-index","max-color-index","monochrome","min-monochrome","max-monochrome","resolution","min-resolution","max-resolution","scan","grid","orientation","device-pixel-ratio","min-device-pixel-ratio","max-device-pixel-ratio","pointer","any-pointer","hover","any-hover"],l=t(a),s=["landscape","portrait","none","coarse","fine","on-demand","hover","interlace","progressive"],u=t(s),c=["align-content","align-items","align-self","alignment-adjust","alignment-baseline","anchor-point","animation","animation-delay","animation-direction","animation-duration","animation-fill-mode","animation-iteration-count","animation-name","animation-play-state","animation-timing-function","appearance","azimuth","backface-visibility","background","background-attachment","background-blend-mode","background-clip","background-color","background-image","background-origin","background-position","background-repeat","background-size","baseline-shift","binding","bleed","bookmark-label","bookmark-level","bookmark-state","bookmark-target","border","border-bottom","border-bottom-color","border-bottom-left-radius","border-bottom-right-radius","border-bottom-style","border-bottom-width","border-collapse","border-color","border-image","border-image-outset","border-image-repeat","border-image-slice","border-image-source","border-image-width","border-left","border-left-color","border-left-style","border-left-width","border-radius","border-right","border-right-color","border-right-style","border-right-width","border-spacing","border-style","border-top","border-top-color","border-top-left-radius","border-top-right-radius","border-top-style","border-top-width","border-width","bottom","box-decoration-break","box-shadow","box-sizing","break-after","break-before","break-inside","caption-side","caret-color","clear","clip","color","color-profile","column-count","column-fill","column-gap","column-rule","column-rule-color","column-rule-style","column-rule-width","column-span","column-width","columns","content","counter-increment","counter-reset","crop","cue","cue-after","cue-before","cursor","direction","display","dominant-baseline","drop-initial-after-adjust","drop-initial-after-align","drop-initial-before-adjust","drop-initial-before-align","drop-initial-size","drop-initial-value","elevation","empty-cells","fit","fit-position","flex","flex-basis","flex-direction","flex-flow","flex-grow","flex-shrink","flex-wrap","float","float-offset","flow-from","flow-into","font","font-feature-settings","font-family","font-kerning","font-language-override","font-size","font-size-adjust","font-stretch","font-style","font-synthesis","font-variant","font-variant-alternates","font-variant-caps","font-variant-east-asian","font-variant-ligatures","font-variant-numeric","font-variant-position","font-weight","grid","grid-area","grid-auto-columns","grid-auto-flow","grid-auto-rows","grid-column","grid-column-end","grid-column-gap","grid-column-start","grid-gap","grid-row","grid-row-end","grid-row-gap","grid-row-start","grid-template","grid-template-areas","grid-template-columns","grid-template-rows","hanging-punctuation","height","hyphens","icon","image-orientation","image-rendering","image-resolution","inline-box-align","justify-content","justify-items","justify-self","left","letter-spacing","line-break","line-height","line-stacking","line-stacking-ruby","line-stacking-shift","line-stacking-strategy","list-style","list-style-image","list-style-position","list-style-type","margin","margin-bottom","margin-left","margin-right","margin-top","marks","marquee-direction","marquee-loop","marquee-play-count","marquee-speed","marquee-style","max-height","max-width","min-height","min-width","mix-blend-mode","move-to","nav-down","nav-index","nav-left","nav-right","nav-up","object-fit","object-position","opacity","order","orphans","outline","outline-color","outline-offset","outline-style","outline-width","overflow","overflow-style","overflow-wrap","overflow-x","overflow-y","padding","padding-bottom","padding-left","padding-right","padding-top","page","page-break-after","page-break-before","page-break-inside","page-policy","pause","pause-after","pause-before","perspective","perspective-origin","pitch","pitch-range","place-content","place-items","place-self","play-during","position","presentation-level","punctuation-trim","quotes","region-break-after","region-break-before","region-break-inside","region-fragment","rendering-intent","resize","rest","rest-after","rest-before","richness","right","rotation","rotation-point","ruby-align","ruby-overhang","ruby-position","ruby-span","shape-image-threshold","shape-inside","shape-margin","shape-outside","size","speak","speak-as","speak-header","speak-numeral","speak-punctuation","speech-rate","stress","string-set","tab-size","table-layout","target","target-name","target-new","target-position","text-align","text-align-last","text-decoration","text-decoration-color","text-decoration-line","text-decoration-skip","text-decoration-style","text-emphasis","text-emphasis-color","text-emphasis-position","text-emphasis-style","text-height","text-indent","text-justify","text-outline","text-overflow","text-shadow","text-size-adjust","text-space-collapse","text-transform","text-underline-position","text-wrap","top","transform","transform-origin","transform-style","transition","transition-delay","transition-duration","transition-property","transition-timing-function","unicode-bidi","user-select","vertical-align","visibility","voice-balance","voice-duration","voice-family","voice-pitch","voice-range","voice-rate","voice-stress","voice-volume","volume","white-space","widows","width","will-change","word-break","word-spacing","word-wrap","z-index","clip-path","clip-rule","mask","enable-background","filter","flood-color","flood-opacity","lighting-color","stop-color","stop-opacity","pointer-events","color-interpolation","color-interpolation-filters","color-rendering","fill","fill-opacity","fill-rule","image-rendering","marker","marker-end","marker-mid","marker-start","shape-rendering","stroke","stroke-dasharray","stroke-dashoffset","stroke-linecap","stroke-linejoin","stroke-miterlimit","stroke-opacity","stroke-width","text-rendering","baseline-shift","dominant-baseline","glyph-orientation-horizontal","glyph-orientation-vertical","text-anchor","writing-mode"],d=t(c),f=["scrollbar-arrow-color","scrollbar-base-color","scrollbar-dark-shadow-color","scrollbar-face-color","scrollbar-highlight-color","scrollbar-shadow-color","scrollbar-3d-light-color","scrollbar-track-color","shape-inside","searchfield-cancel-button","searchfield-decoration","searchfield-results-button","searchfield-results-decoration","zoom"],h=t(f),p=t(["font-family","src","unicode-range","font-variant","font-feature-settings","font-stretch","font-weight","font-style"]),g=t(["additive-symbols","fallback","negative","pad","prefix","range","speak-as","suffix","symbols","system"]),m=["aliceblue","antiquewhite","aqua","aquamarine","azure","beige","bisque","black","blanchedalmond","blue","blueviolet","brown","burlywood","cadetblue","chartreuse","chocolate","coral","cornflowerblue","cornsilk","crimson","cyan","darkblue","darkcyan","darkgoldenrod","darkgray","darkgreen","darkkhaki","darkmagenta","darkolivegreen","darkorange","darkorchid","darkred","darksalmon","darkseagreen","darkslateblue","darkslategray","darkturquoise","darkviolet","deeppink","deepskyblue","dimgray","dodgerblue","firebrick","floralwhite","forestgreen","fuchsia","gainsboro","ghostwhite","gold","goldenrod","gray","grey","green","greenyellow","honeydew","hotpink","indianred","indigo","ivory","khaki","lavender","lavenderblush","lawngreen","lemonchiffon","lightblue","lightcoral","lightcyan","lightgoldenrodyellow","lightgray","lightgreen","lightpink","lightsalmon","lightseagreen","lightskyblue","lightslategray","lightsteelblue","lightyellow","lime","limegreen","linen","magenta","maroon","mediumaquamarine","mediumblue","mediumorchid","mediumpurple","mediumseagreen","mediumslateblue","mediumspringgreen","mediumturquoise","mediumvioletred","midnightblue","mintcream","mistyrose","moccasin","navajowhite","navy","oldlace","olive","olivedrab","orange","orangered","orchid","palegoldenrod","palegreen","paleturquoise","palevioletred","papayawhip","peachpuff","peru","pink","plum","powderblue","purple","rebeccapurple","red","rosybrown","royalblue","saddlebrown","salmon","sandybrown","seagreen","seashell","sienna","silver","skyblue","slateblue","slategray","snow","springgreen","steelblue","tan","teal","thistle","tomato","turquoise","violet","wheat","white","whitesmoke","yellow","yellowgreen"],v=t(m),y=["above","absolute","activeborder","additive","activecaption","afar","after-white-space","ahead","alias","all","all-scroll","alphabetic","alternate","always","amharic","amharic-abegede","antialiased","appworkspace","arabic-indic","armenian","asterisks","attr","auto","auto-flow","avoid","avoid-column","avoid-page","avoid-region","background","backwards","baseline","below","bidi-override","binary","bengali","blink","block","block-axis","bold","bolder","border","border-box","both","bottom","break","break-all","break-word","bullets","button","button-bevel","buttonface","buttonhighlight","buttonshadow","buttontext","calc","cambodian","capitalize","caps-lock-indicator","caption","captiontext","caret","cell","center","checkbox","circle","cjk-decimal","cjk-earthly-branch","cjk-heavenly-stem","cjk-ideographic","clear","clip","close-quote","col-resize","collapse","color","color-burn","color-dodge","column","column-reverse","compact","condensed","contain","content","contents","content-box","context-menu","continuous","copy","counter","counters","cover","crop","cross","crosshair","currentcolor","cursive","cyclic","darken","dashed","decimal","decimal-leading-zero","default","default-button","dense","destination-atop","destination-in","destination-out","destination-over","devanagari","difference","disc","discard","disclosure-closed","disclosure-open","document","dot-dash","dot-dot-dash","dotted","double","down","e-resize","ease","ease-in","ease-in-out","ease-out","element","ellipse","ellipsis","embed","end","ethiopic","ethiopic-abegede","ethiopic-abegede-am-et","ethiopic-abegede-gez","ethiopic-abegede-ti-er","ethiopic-abegede-ti-et","ethiopic-halehame-aa-er","ethiopic-halehame-aa-et","ethiopic-halehame-am-et","ethiopic-halehame-gez","ethiopic-halehame-om-et","ethiopic-halehame-sid-et","ethiopic-halehame-so-et","ethiopic-halehame-ti-er","ethiopic-halehame-ti-et","ethiopic-halehame-tig","ethiopic-numeric","ew-resize","exclusion","expanded","extends","extra-condensed","extra-expanded","fantasy","fast","fill","fixed","flat","flex","flex-end","flex-start","footnotes","forwards","from","geometricPrecision","georgian","graytext","grid","groove","gujarati","gurmukhi","hand","hangul","hangul-consonant","hard-light","hebrew","help","hidden","hide","higher","highlight","highlighttext","hiragana","hiragana-iroha","horizontal","hsl","hsla","hue","icon","ignore","inactiveborder","inactivecaption","inactivecaptiontext","infinite","infobackground","infotext","inherit","initial","inline","inline-axis","inline-block","inline-flex","inline-grid","inline-table","inset","inside","intrinsic","invert","italic","japanese-formal","japanese-informal","justify","kannada","katakana","katakana-iroha","keep-all","khmer","korean-hangul-formal","korean-hanja-formal","korean-hanja-informal","landscape","lao","large","larger","left","level","lighter","lighten","line-through","linear","linear-gradient","lines","list-item","listbox","listitem","local","logical","loud","lower","lower-alpha","lower-armenian","lower-greek","lower-hexadecimal","lower-latin","lower-norwegian","lower-roman","lowercase","ltr","luminosity","malayalam","match","matrix","matrix3d","media-controls-background","media-current-time-display","media-fullscreen-button","media-mute-button","media-play-button","media-return-to-realtime-button","media-rewind-button","media-seek-back-button","media-seek-forward-button","media-slider","media-sliderthumb","media-time-remaining-display","media-volume-slider","media-volume-slider-container","media-volume-sliderthumb","medium","menu","menulist","menulist-button","menulist-text","menulist-textfield","menutext","message-box","middle","min-intrinsic","mix","mongolian","monospace","move","multiple","multiply","myanmar","n-resize","narrower","ne-resize","nesw-resize","no-close-quote","no-drop","no-open-quote","no-repeat","none","normal","not-allowed","nowrap","ns-resize","numbers","numeric","nw-resize","nwse-resize","oblique","octal","opacity","open-quote","optimizeLegibility","optimizeSpeed","oriya","oromo","outset","outside","outside-shape","overlay","overline","padding","padding-box","painted","page","paused","persian","perspective","plus-darker","plus-lighter","pointer","polygon","portrait","pre","pre-line","pre-wrap","preserve-3d","progress","push-button","radial-gradient","radio","read-only","read-write","read-write-plaintext-only","rectangle","region","relative","repeat","repeating-linear-gradient","repeating-radial-gradient","repeat-x","repeat-y","reset","reverse","rgb","rgba","ridge","right","rotate","rotate3d","rotateX","rotateY","rotateZ","round","row","row-resize","row-reverse","rtl","run-in","running","s-resize","sans-serif","saturation","scale","scale3d","scaleX","scaleY","scaleZ","screen","scroll","scrollbar","scroll-position","se-resize","searchfield","searchfield-cancel-button","searchfield-decoration","searchfield-results-button","searchfield-results-decoration","self-start","self-end","semi-condensed","semi-expanded","separate","serif","show","sidama","simp-chinese-formal","simp-chinese-informal","single","skew","skewX","skewY","skip-white-space","slide","slider-horizontal","slider-vertical","sliderthumb-horizontal","sliderthumb-vertical","slow","small","small-caps","small-caption","smaller","soft-light","solid","somali","source-atop","source-in","source-out","source-over","space","space-around","space-between","space-evenly","spell-out","square","square-button","start","static","status-bar","stretch","stroke","sub","subpixel-antialiased","super","sw-resize","symbolic","symbols","system-ui","table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row","table-row-group","tamil","telugu","text","text-bottom","text-top","textarea","textfield","thai","thick","thin","threeddarkshadow","threedface","threedhighlight","threedlightshadow","threedshadow","tibetan","tigre","tigrinya-er","tigrinya-er-abegede","tigrinya-et","tigrinya-et-abegede","to","top","trad-chinese-formal","trad-chinese-informal","transform","translate","translate3d","translateX","translateY","translateZ","transparent","ultra-condensed","ultra-expanded","underline","unset","up","upper-alpha","upper-armenian","upper-greek","upper-hexadecimal","upper-latin","upper-norwegian","upper-roman","uppercase","urdu","url","var","vertical","vertical-text","visible","visibleFill","visiblePainted","visibleStroke","visual","w-resize","wait","wave","wider","window","windowframe","windowtext","words","wrap","wrap-reverse","x-large","x-small","xor","xx-large","xx-small"],b=t(y),w=r.concat(i).concat(a).concat(s).concat(c).concat(f).concat(m).concat(y)
function x(e,t){for(var r,n=!1;null!=(r=e.next());){if(n&&"/"==r){t.tokenize=null
break}n="*"==r}return["comment","comment"]}e.registerHelper("hintWords","css",w),e.defineMIME("text/css",{documentTypes:n,mediaTypes:o,mediaFeatures:l,mediaValueKeywords:u,propertyKeywords:d,nonStandardPropertyKeywords:h,fontProperties:p,counterDescriptors:g,colorKeywords:v,valueKeywords:b,tokenHooks:{"/":function(e,t){return!!e.eat("*")&&(t.tokenize=x,x(e,t))}},name:"css"}),e.defineMIME("text/x-scss",{mediaTypes:o,mediaFeatures:l,mediaValueKeywords:u,propertyKeywords:d,nonStandardPropertyKeywords:h,colorKeywords:v,valueKeywords:b,fontProperties:p,allowNested:!0,lineComment:"//",tokenHooks:{"/":function(e,t){return e.eat("/")?(e.skipToEnd(),["comment","comment"]):e.eat("*")?(t.tokenize=x,x(e,t)):["operator","operator"]},":":function(e){return!!e.match(/\s*\{/,!1)&&[null,null]},$:function(e){return e.match(/^[\w-]+/),e.match(/^\s*:/,!1)?["variable-2","variable-definition"]:["variable-2","variable"]},"#":function(e){return!!e.eat("{")&&[null,"interpolation"]}},name:"css",helperType:"scss"}),e.defineMIME("text/x-less",{mediaTypes:o,mediaFeatures:l,mediaValueKeywords:u,propertyKeywords:d,nonStandardPropertyKeywords:h,colorKeywords:v,valueKeywords:b,fontProperties:p,allowNested:!0,lineComment:"//",tokenHooks:{"/":function(e,t){return e.eat("/")?(e.skipToEnd(),["comment","comment"]):e.eat("*")?(t.tokenize=x,x(e,t)):["operator","operator"]},"@":function(e){return e.eat("{")?[null,"interpolation"]:!e.match(/^(charset|document|font-face|import|(-(moz|ms|o|webkit)-)?keyframes|media|namespace|page|supports)\b/i,!1)&&(e.eatWhile(/[\w\\\-]/),e.match(/^\s*:/,!1)?["variable-2","variable-definition"]:["variable-2","variable"])},"&":function(){return["atom","atom"]}},name:"css",helperType:"less"}),e.defineMIME("text/x-gss",{documentTypes:n,mediaTypes:o,mediaFeatures:l,propertyKeywords:d,nonStandardPropertyKeywords:h,fontProperties:p,counterDescriptors:g,colorKeywords:v,valueKeywords:b,supportsAtComponent:!0,tokenHooks:{"/":function(e,t){return!!e.eat("*")&&(t.tokenize=x,x(e,t))}},name:"css",helperType:"gss"})}),function(e){"object"==typeof exports&&"object"==typeof module?e(require("../../lib/codemirror"),require("../xml/xml"),require("../javascript/javascript"),require("../css/css")):"function"==typeof define&&define.amd?define(["../../lib/codemirror","../xml/xml","../javascript/javascript","../css/css"],e):e(CodeMirror)}(function(e){"use strict"
var t={script:[["lang",/(javascript|babel)/i,"javascript"],["type",/^(?:text|application)\/(?:x-)?(?:java|ecma)script$|^module$|^$/i,"javascript"],["type",/./,"text/plain"],[null,null,"javascript"]],style:[["lang",/^css$/i,"css"],["type",/^(text\/)?(x-)?(stylesheet|css)$/i,"css"],["type",/./,"text/plain"],[null,null,"css"]]},r={}
function n(e,t){var n=e.match(function(e){return r[e]||(r[e]=new RegExp("\\s+"+e+"\\s*=\\s*('|\")?([^'\"]+)('|\")?\\s*"))}(t))
return n?/^\s*(.*?)\s*$/.exec(n[2])[1]:""}function i(e,t){return new RegExp((t?"^":"")+"</s*"+e+"s*>","i")}function o(e,t){for(var r in e)for(var n=t[r]||(t[r]=[]),i=e[r],o=i.length-1;o>=0;o--)n.unshift(i[o])}e.defineMode("htmlmixed",function(r,a){var l=e.getMode(r,{name:"xml",htmlMode:!0,multilineTagIndentFactor:a.multilineTagIndentFactor,multilineTagIndentPastTag:a.multilineTagIndentPastTag}),s={},u=a&&a.tags,c=a&&a.scriptTypes
if(o(t,s),u&&o(u,s),c)for(var d=c.length-1;d>=0;d--)s.script.unshift(["type",c[d].matches,c[d].mode])
function f(t,o){var a,u=l.token(t,o.htmlState),c=/\btag\b/.test(u)
if(c&&!/[<>\s\/]/.test(t.current())&&(a=o.htmlState.tagName&&o.htmlState.tagName.toLowerCase())&&s.hasOwnProperty(a))o.inTag=a+" "
else if(o.inTag&&c&&/>$/.test(t.current())){var d=/^([\S]+) (.*)/.exec(o.inTag)
o.inTag=null
var h=">"==t.current()&&function(e,t){for(var r=0;r<e.length;r++){var i=e[r]
if(!i[0]||i[1].test(n(t,i[0])))return i[2]}}(s[d[1]],d[2]),p=e.getMode(r,h),g=i(d[1],!0),m=i(d[1],!1)
o.token=function(e,t){return e.match(g,!1)?(t.token=f,t.localState=t.localMode=null,null):function(e,t,r){var n=e.current(),i=n.search(t)
return i>-1?e.backUp(n.length-i):n.match(/<\/?$/)&&(e.backUp(n.length),e.match(t,!1)||e.match(n)),r}(e,m,t.localMode.token(e,t.localState))},o.localMode=p,o.localState=e.startState(p,l.indent(o.htmlState,"",""))}else o.inTag&&(o.inTag+=t.current(),t.eol()&&(o.inTag+=" "))
return u}return{startState:function(){return{token:f,inTag:null,localMode:null,localState:null,htmlState:e.startState(l)}},copyState:function(t){var r
return t.localState&&(r=e.copyState(t.localMode,t.localState)),{token:t.token,inTag:t.inTag,localMode:t.localMode,localState:r,htmlState:e.copyState(l,t.htmlState)}},token:function(e,t){return t.token(e,t)},indent:function(t,r,n){return!t.localMode||/^\s*<\//.test(r)?l.indent(t.htmlState,r,n):t.localMode.indent?t.localMode.indent(t.localState,r,n):e.Pass},innerMode:function(e){return{state:e.localState||e.htmlState,mode:e.localMode||l}}}},"xml","javascript","css"),e.defineMIME("text/html","htmlmixed")}),function(e){"object"==typeof exports&&"object"==typeof module?e(require("../../lib/codemirror")):"function"==typeof define&&define.amd?define(["../../lib/codemirror"],e):e(CodeMirror)}(function(e){"use strict"
e.defineMode("javascript",function(t,r){var n,i,o=t.indentUnit,a=r.statementIndent,l=r.jsonld,s=r.json||l,u=r.typescript,c=r.wordCharacters||/[\w$\xa1-\uffff]/,d=function(){function e(e){return{type:e,style:"keyword"}}var t=e("keyword a"),r=e("keyword b"),n=e("keyword c"),i=e("keyword d"),o=e("operator"),a={type:"atom",style:"atom"}
return{if:e("if"),while:t,with:t,else:r,do:r,try:r,finally:r,return:i,break:i,continue:i,new:e("new"),delete:n,void:n,throw:n,debugger:e("debugger"),var:e("var"),const:e("var"),let:e("var"),function:e("function"),catch:e("catch"),for:e("for"),switch:e("switch"),case:e("case"),default:e("default"),in:o,typeof:o,instanceof:o,true:a,false:a,null:a,undefined:a,NaN:a,Infinity:a,this:e("this"),class:e("class"),super:e("atom"),yield:n,export:e("export"),import:e("import"),extends:n,await:n}}(),f=/[+\-*&%=<>!?|~^@]/,h=/^@(context|id|value|language|type|container|list|set|reverse|index|base|vocab|graph)"/
function p(e,t,r){return n=e,i=r,t}function g(e,t){var r,n=e.next()
if('"'==n||"'"==n)return t.tokenize=(r=n,function(e,t){var n,i=!1
if(l&&"@"==e.peek()&&e.match(h))return t.tokenize=g,p("jsonld-keyword","meta")
for(;null!=(n=e.next())&&(n!=r||i);)i=!i&&"\\"==n
return i||(t.tokenize=g),p("string","string")}),t.tokenize(e,t)
if("."==n&&e.match(/^\d+(?:[eE][+\-]?\d+)?/))return p("number","number")
if("."==n&&e.match(".."))return p("spread","meta")
if(/[\[\]{}\(\),;\:\.]/.test(n))return p(n)
if("="==n&&e.eat(">"))return p("=>","operator")
if("0"==n&&e.match(/^(?:x[\da-f]+|o[0-7]+|b[01]+)n?/i))return p("number","number")
if(/\d/.test(n))return e.match(/^\d*(?:n|(?:\.\d*)?(?:[eE][+\-]?\d+)?)?/),p("number","number")
if("/"==n)return e.eat("*")?(t.tokenize=m,m(e,t)):e.eat("/")?(e.skipToEnd(),p("comment","comment")):$e(e,t,1)?(function(e){for(var t,r=!1,n=!1;null!=(t=e.next());){if(!r){if("/"==t&&!n)return
"["==t?n=!0:n&&"]"==t&&(n=!1)}r=!r&&"\\"==t}}(e),e.match(/^\b(([gimyus])(?![gimyus]*\2))+\b/),p("regexp","string-2")):(e.eat("="),p("operator","operator",e.current()))
if("`"==n)return t.tokenize=v,v(e,t)
if("#"==n)return e.skipToEnd(),p("error","error")
if(f.test(n))return">"==n&&t.lexical&&">"==t.lexical.type||(e.eat("=")?"!"!=n&&"="!=n||e.eat("="):/[<>*+\-]/.test(n)&&(e.eat(n),">"==n&&e.eat(n))),p("operator","operator",e.current())
if(c.test(n)){e.eatWhile(c)
var i=e.current()
if("."!=t.lastType){if(d.propertyIsEnumerable(i)){var o=d[i]
return p(o.type,o.style,i)}if("async"==i&&e.match(/^(\s|\/\*.*?\*\/)*[\[\(\w]/,!1))return p("async","keyword",i)}return p("variable","variable",i)}}function m(e,t){for(var r,n=!1;r=e.next();){if("/"==r&&n){t.tokenize=g
break}n="*"==r}return p("comment","comment")}function v(e,t){for(var r,n=!1;null!=(r=e.next());){if(!n&&("`"==r||"$"==r&&e.eat("{"))){t.tokenize=g
break}n=!n&&"\\"==r}return p("quasi","string-2",e.current())}var y="([{}])"
function b(e,t){t.fatArrowAt&&(t.fatArrowAt=null)
var r=e.string.indexOf("=>",e.start)
if(!(r<0)){if(u){var n=/:\s*(?:\w+(?:<[^>]*>|\[\])?|\{[^}]*\})\s*$/.exec(e.string.slice(e.start,r))
n&&(r=n.index)}for(var i=0,o=!1,a=r-1;a>=0;--a){var l=e.string.charAt(a),s=y.indexOf(l)
if(s>=0&&s<3){if(!i){++a
break}if(0==--i){"("==l&&(o=!0)
break}}else if(s>=3&&s<6)++i
else if(c.test(l))o=!0
else{if(/["'\/]/.test(l))return
if(o&&!i){++a
break}}}o&&!i&&(t.fatArrowAt=a)}}var w={atom:!0,number:!0,variable:!0,string:!0,regexp:!0,this:!0,"jsonld-keyword":!0}
function x(e,t,r,n,i,o){this.indented=e,this.column=t,this.type=r,this.prev=i,this.info=o,null!=n&&(this.align=n)}function k(e,t){for(var r=e.localVars;r;r=r.next)if(r.name==t)return!0
for(var n=e.context;n;n=n.prev)for(r=n.vars;r;r=r.next)if(r.name==t)return!0}var C={state:null,column:null,marked:null,cc:null}
function S(){for(var e=arguments.length-1;e>=0;e--)C.cc.push(arguments[e])}function L(){return S.apply(null,arguments),!0}function T(e,t){for(var r=t;r;r=r.next)if(r.name==e)return!0
return!1}function M(e){var t=C.state
if(C.marked="def",t.context)if("var"==t.lexical.info&&t.context&&t.context.block){var n=function e(t,r){if(r){if(r.block){var n=e(t,r.prev)
return n?n==r.prev?r:new A(n,r.vars,!0):null}return T(t,r.vars)?r:new A(r.prev,new O(t,r.vars),!1)}return null}(e,t.context)
if(null!=n)return void(t.context=n)}else if(!T(e,t.localVars))return void(t.localVars=new O(e,t.localVars))
r.globalVars&&!T(e,t.globalVars)&&(t.globalVars=new O(e,t.globalVars))}function N(e){return"public"==e||"private"==e||"protected"==e||"abstract"==e||"readonly"==e}function A(e,t,r){this.prev=e,this.vars=t,this.block=r}function O(e,t){this.name=e,this.next=t}var W=new O("this",new O("arguments",null))
function D(){C.state.context=new A(C.state.context,C.state.localVars,!1),C.state.localVars=W}function z(){C.state.context=new A(C.state.context,C.state.localVars,!0),C.state.localVars=null}function P(){C.state.localVars=C.state.context.vars,C.state.context=C.state.context.prev}function H(e,t){var r=function(){var r=C.state,n=r.indented
if("stat"==r.lexical.type)n=r.lexical.indented
else for(var i=r.lexical;i&&")"==i.type&&i.align;i=i.prev)n=i.indented
r.lexical=new x(n,C.stream.column(),e,null,r.lexical,t)}
return r.lex=!0,r}function I(){var e=C.state
e.lexical.prev&&(")"==e.lexical.type&&(e.indented=e.lexical.indented),e.lexical=e.lexical.prev)}function E(e){return function t(r){return r==e?L():";"==e||"}"==r||")"==r||"]"==r?S():L(t)}}function F(e,t){return"var"==e?L(H("vardef",t),ye,E(";"),I):"keyword a"==e?L(H("form"),V,F,I):"keyword b"==e?L(H("form"),F,I):"keyword d"==e?C.stream.match(/^\s*$/,!1)?L():L(H("stat"),G,E(";"),I):"debugger"==e?L(E(";")):"{"==e?L(H("}"),z,ae,I,P):";"==e?L():"if"==e?("else"==C.state.lexical.info&&C.state.cc[C.state.cc.length-1]==I&&C.state.cc.pop()(),L(H("form"),V,F,I,Se)):"function"==e?L(Ne):"for"==e?L(H("form"),Le,F,I):"class"==e||u&&"interface"==t?(C.marked="keyword",L(H("form","class"==e?e:t),ze,I)):"variable"==e?u&&"declare"==t?(C.marked="keyword",L(F)):u&&("module"==t||"enum"==t||"type"==t)&&C.stream.match(/^\s*\w/,!1)?(C.marked="keyword","enum"==t?L(Ue):"type"==t?L(Oe,E("operator"),ce,E(";")):L(H("form"),be,E("{"),H("}"),ae,I,I)):u&&"namespace"==t?(C.marked="keyword",L(H("form"),B,F,I)):u&&"abstract"==t?(C.marked="keyword",L(F)):L(H("stat"),J):"switch"==e?L(H("form"),V,E("{"),H("}","switch"),z,ae,I,I,P):"case"==e?L(B,E(":")):"default"==e?L(E(":")):"catch"==e?L(H("form"),D,R,F,I,P):"export"==e?L(H("stat"),Ee,I):"import"==e?L(H("stat"),Re,I):"async"==e?L(F):"@"==t?L(B,F):S(H("stat"),B,E(";"),I)}function R(e){if("("==e)return L(We,E(")"))}function B(e,t){return K(e,t,!1)}function j(e,t){return K(e,t,!0)}function V(e){return"("!=e?S():L(H(")"),B,E(")"),I)}function K(e,t,r){if(C.state.fatArrowAt==C.stream.start){var n=r?Y:X
if("("==e)return L(D,H(")"),ie(We,")"),I,E("=>"),n,P)
if("variable"==e)return S(D,be,E("=>"),n,P)}var i=r?q:U
return w.hasOwnProperty(e)?L(i):"function"==e?L(Ne,i):"class"==e||u&&"interface"==t?(C.marked="keyword",L(H("form"),De,I)):"keyword c"==e||"async"==e?L(r?j:B):"("==e?L(H(")"),G,E(")"),I,i):"operator"==e||"spread"==e?L(r?j:B):"["==e?L(H("]"),Ge,I,i):"{"==e?oe(te,"}",null,i):"quasi"==e?S($,i):"new"==e?L(function(e){return function(t){return"."==t?L(e?Q:Z):"variable"==t&&u?L(ge,e?q:U):S(e?j:B)}}(r)):"import"==e?L(B):L()}function G(e){return e.match(/[;\}\)\],]/)?S():S(B)}function U(e,t){return","==e?L(B):q(e,t,!1)}function q(e,t,r){var n=0==r?U:q,i=0==r?B:j
return"=>"==e?L(D,r?Y:X,P):"operator"==e?/\+\+|--/.test(t)||u&&"!"==t?L(n):u&&"<"==t&&C.stream.match(/^([^>]|<.*?>)*>\s*\(/,!1)?L(H(">"),ie(ce,">"),I,n):"?"==t?L(B,E(":"),i):L(i):"quasi"==e?S($,n):";"!=e?"("==e?oe(j,")","call",n):"."==e?L(ee,n):"["==e?L(H("]"),G,E("]"),I,n):u&&"as"==t?(C.marked="keyword",L(ce,n)):"regexp"==e?(C.state.lastType=C.marked="operator",C.stream.backUp(C.stream.pos-C.stream.start-1),L(i)):void 0:void 0}function $(e,t){return"quasi"!=e?S():"${"!=t.slice(t.length-2)?L($):L(B,_)}function _(e){if("}"==e)return C.marked="string-2",C.state.tokenize=v,L($)}function X(e){return b(C.stream,C.state),S("{"==e?F:B)}function Y(e){return b(C.stream,C.state),S("{"==e?F:j)}function Z(e,t){if("target"==t)return C.marked="keyword",L(U)}function Q(e,t){if("target"==t)return C.marked="keyword",L(q)}function J(e){return":"==e?L(I,F):S(U,E(";"),I)}function ee(e){if("variable"==e)return C.marked="property",L()}function te(e,t){return"async"==e?(C.marked="property",L(te)):"variable"==e||"keyword"==C.style?(C.marked="property","get"==t||"set"==t?L(re):(u&&C.state.fatArrowAt==C.stream.start&&(r=C.stream.match(/^\s*:\s*/,!1))&&(C.state.fatArrowAt=C.stream.pos+r[0].length),L(ne))):"number"==e||"string"==e?(C.marked=l?"property":C.style+" property",L(ne)):"jsonld-keyword"==e?L(ne):u&&N(t)?(C.marked="keyword",L(te)):"["==e?L(B,le,E("]"),ne):"spread"==e?L(j,ne):"*"==t?(C.marked="keyword",L(te)):":"==e?S(ne):void 0
var r}function re(e){return"variable"!=e?S(ne):(C.marked="property",L(Ne))}function ne(e){return":"==e?L(j):"("==e?S(Ne):void 0}function ie(e,t,r){function n(i,o){if(r?r.indexOf(i)>-1:","==i){var a=C.state.lexical
return"call"==a.info&&(a.pos=(a.pos||0)+1),L(function(r,n){return r==t||n==t?S():S(e)},n)}return i==t||o==t?L():r&&r.indexOf(";")>-1?S(e):L(E(t))}return function(r,i){return r==t||i==t?L():S(e,n)}}function oe(e,t,r){for(var n=3;n<arguments.length;n++)C.cc.push(arguments[n])
return L(H(t,r),ie(e,t),I)}function ae(e){return"}"==e?L():S(F,ae)}function le(e,t){if(u){if(":"==e||"in"==t)return L(ce)
if("?"==t)return L(le)}}function se(e){if(u&&":"==e)return C.stream.match(/^\s*\w+\s+is\b/,!1)?L(B,ue,ce):L(ce)}function ue(e,t){if("is"==t)return C.marked="keyword",L()}function ce(e,t){return"keyof"==t||"typeof"==t||"infer"==t?(C.marked="keyword",L("typeof"==t?j:ce)):"variable"==e||"void"==t?(C.marked="type",L(pe)):"|"==t||"&"==t?L(ce):"string"==e||"number"==e||"atom"==e?L(pe):"["==e?L(H("]"),ie(ce,"]",","),I,pe):"{"==e?L(H("}"),ie(fe,"}",",;"),I,pe):"("==e?L(ie(he,")"),de,pe):"<"==e?L(ie(ce,">"),ce):void 0}function de(e){if("=>"==e)return L(ce)}function fe(e,t){return"variable"==e||"keyword"==C.style?(C.marked="property",L(fe)):"?"==t||"number"==e||"string"==e?L(fe):":"==e?L(ce):"["==e?L(E("variable"),le,E("]"),fe):"("==e?S(Ae,fe):void 0}function he(e,t){return"variable"==e&&C.stream.match(/^\s*[?:]/,!1)||"?"==t?L(he):":"==e?L(ce):"spread"==e?L(he):S(ce)}function pe(e,t){return"<"==t?L(H(">"),ie(ce,">"),I,pe):"|"==t||"."==e||"&"==t?L(ce):"["==e?L(ce,E("]"),pe):"extends"==t||"implements"==t?(C.marked="keyword",L(ce)):"?"==t?L(ce,E(":"),ce):void 0}function ge(e,t){if("<"==t)return L(H(">"),ie(ce,">"),I,pe)}function me(){return S(ce,ve)}function ve(e,t){if("="==t)return L(ce)}function ye(e,t){return"enum"==t?(C.marked="keyword",L(Ue)):S(be,le,ke,Ce)}function be(e,t){return u&&N(t)?(C.marked="keyword",L(be)):"variable"==e?(M(t),L()):"spread"==e?L(be):"["==e?oe(xe,"]"):"{"==e?oe(we,"}"):void 0}function we(e,t){return"variable"!=e||C.stream.match(/^\s*:/,!1)?("variable"==e&&(C.marked="property"),"spread"==e?L(be):"}"==e?S():"["==e?L(B,E("]"),E(":"),we):L(E(":"),be,ke)):(M(t),L(ke))}function xe(){return S(be,ke)}function ke(e,t){if("="==t)return L(j)}function Ce(e){if(","==e)return L(ye)}function Se(e,t){if("keyword b"==e&&"else"==t)return L(H("form","else"),F,I)}function Le(e,t){return"await"==t?L(Le):"("==e?L(H(")"),Te,I):void 0}function Te(e){return"var"==e?L(ye,Me):"variable"==e?L(Me):S(Me)}function Me(e,t){return")"==e?L():";"==e?L(Me):"in"==t||"of"==t?(C.marked="keyword",L(B,Me)):S(B,Me)}function Ne(e,t){return"*"==t?(C.marked="keyword",L(Ne)):"variable"==e?(M(t),L(Ne)):"("==e?L(D,H(")"),ie(We,")"),I,se,F,P):u&&"<"==t?L(H(">"),ie(me,">"),I,Ne):void 0}function Ae(e,t){return"*"==t?(C.marked="keyword",L(Ae)):"variable"==e?(M(t),L(Ae)):"("==e?L(D,H(")"),ie(We,")"),I,se,P):u&&"<"==t?L(H(">"),ie(me,">"),I,Ae):void 0}function Oe(e,t){return"keyword"==e||"variable"==e?(C.marked="type",L(Oe)):"<"==t?L(H(">"),ie(me,">"),I):void 0}function We(e,t){return"@"==t&&L(B,We),"spread"==e?L(We):u&&N(t)?(C.marked="keyword",L(We)):u&&"this"==e?L(le,ke):S(be,le,ke)}function De(e,t){return"variable"==e?ze(e,t):Pe(e,t)}function ze(e,t){if("variable"==e)return M(t),L(Pe)}function Pe(e,t){return"<"==t?L(H(">"),ie(me,">"),I,Pe):"extends"==t||"implements"==t||u&&","==e?("implements"==t&&(C.marked="keyword"),L(u?ce:B,Pe)):"{"==e?L(H("}"),He,I):void 0}function He(e,t){return"async"==e||"variable"==e&&("static"==t||"get"==t||"set"==t||u&&N(t))&&C.stream.match(/^\s+[\w$\xa1-\uffff]/,!1)?(C.marked="keyword",L(He)):"variable"==e||"keyword"==C.style?(C.marked="property",L(u?Ie:Ne,He)):"number"==e||"string"==e?L(u?Ie:Ne,He):"["==e?L(B,le,E("]"),u?Ie:Ne,He):"*"==t?(C.marked="keyword",L(He)):u&&"("==e?S(Ae,He):";"==e||","==e?L(He):"}"==e?L():"@"==t?L(B,He):void 0}function Ie(e,t){if("?"==t)return L(Ie)
if(":"==e)return L(ce,ke)
if("="==t)return L(j)
var r=C.state.lexical.prev
return S(r&&"interface"==r.info?Ae:Ne)}function Ee(e,t){return"*"==t?(C.marked="keyword",L(Ke,E(";"))):"default"==t?(C.marked="keyword",L(B,E(";"))):"{"==e?L(ie(Fe,"}"),Ke,E(";")):S(F)}function Fe(e,t){return"as"==t?(C.marked="keyword",L(E("variable"))):"variable"==e?S(j,Fe):void 0}function Re(e){return"string"==e?L():"("==e?S(B):S(Be,je,Ke)}function Be(e,t){return"{"==e?oe(Be,"}"):("variable"==e&&M(t),"*"==t&&(C.marked="keyword"),L(Ve))}function je(e){if(","==e)return L(Be,je)}function Ve(e,t){if("as"==t)return C.marked="keyword",L(Be)}function Ke(e,t){if("from"==t)return C.marked="keyword",L(B)}function Ge(e){return"]"==e?L():S(ie(j,"]"))}function Ue(){return S(H("form"),be,E("{"),H("}"),ie(qe,"}"),I,I)}function qe(){return S(be,ke)}function $e(e,t,r){return t.tokenize==g&&/^(?:operator|sof|keyword [bcd]|case|new|export|default|spread|[\[{}\(,;:]|=>)$/.test(t.lastType)||"quasi"==t.lastType&&/\{\s*$/.test(e.string.slice(0,e.pos-(r||0)))}return P.lex=!0,I.lex=!0,{startState:function(e){var t={tokenize:g,lastType:"sof",cc:[],lexical:new x((e||0)-o,0,"block",!1),localVars:r.localVars,context:r.localVars&&new A(null,null,!1),indented:e||0}
return r.globalVars&&"object"==typeof r.globalVars&&(t.globalVars=r.globalVars),t},token:function(e,t){if(e.sol()&&(t.lexical.hasOwnProperty("align")||(t.lexical.align=!1),t.indented=e.indentation(),b(e,t)),t.tokenize!=m&&e.eatSpace())return null
var r=t.tokenize(e,t)
return"comment"==n?r:(t.lastType="operator"!=n||"++"!=i&&"--"!=i?n:"incdec",function(e,t,r,n,i){var o=e.cc
for(C.state=e,C.stream=i,C.marked=null,C.cc=o,C.style=t,e.lexical.hasOwnProperty("align")||(e.lexical.align=!0);;)if((o.length?o.pop():s?B:F)(r,n)){for(;o.length&&o[o.length-1].lex;)o.pop()()
return C.marked?C.marked:"variable"==r&&k(e,n)?"variable-2":t}}(t,r,n,i,e))},indent:function(t,n){if(t.tokenize==m)return e.Pass
if(t.tokenize!=g)return 0
var i,l=n&&n.charAt(0),s=t.lexical
if(!/^\s*else\b/.test(n))for(var u=t.cc.length-1;u>=0;--u){var c=t.cc[u]
if(c==I)s=s.prev
else if(c!=Se)break}for(;("stat"==s.type||"form"==s.type)&&("}"==l||(i=t.cc[t.cc.length-1])&&(i==U||i==q)&&!/^[,\.=+\-*:?[\(]/.test(n));)s=s.prev
a&&")"==s.type&&"stat"==s.prev.type&&(s=s.prev)
var d=s.type,h=l==d
return"vardef"==d?s.indented+("operator"==t.lastType||","==t.lastType?s.info.length+1:0):"form"==d&&"{"==l?s.indented:"form"==d?s.indented+o:"stat"==d?s.indented+(function(e,t){return"operator"==e.lastType||","==e.lastType||f.test(t.charAt(0))||/[,.]/.test(t.charAt(0))}(t,n)?a||o:0):"switch"!=s.info||h||0==r.doubleIndentSwitch?s.align?s.column+(h?0:1):s.indented+(h?0:o):s.indented+(/^(?:case|default)\b/.test(n)?o:2*o)},electricInput:/^\s*(?:case .*?:|default:|\{|\})$/,blockCommentStart:s?null:"/*",blockCommentEnd:s?null:"*/",blockCommentContinue:s?null:" * ",lineComment:s?null:"//",fold:"brace",closeBrackets:"()[]{}''\"\"``",helperType:s?"json":"javascript",jsonldMode:l,jsonMode:s,expressionAllowed:$e,skipExpression:function(e){var t=e.cc[e.cc.length-1]
t!=B&&t!=j||e.cc.pop()}}}),e.registerHelper("wordChars","javascript",/[\w$]/),e.defineMIME("text/javascript","javascript"),e.defineMIME("text/ecmascript","javascript"),e.defineMIME("application/javascript","javascript"),e.defineMIME("application/x-javascript","javascript"),e.defineMIME("application/ecmascript","javascript"),e.defineMIME("application/json",{name:"javascript",json:!0}),e.defineMIME("application/x-json",{name:"javascript",json:!0}),e.defineMIME("application/ld+json",{name:"javascript",jsonld:!0}),e.defineMIME("text/typescript",{name:"javascript",typescript:!0}),e.defineMIME("application/typescript",{name:"javascript",typescript:!0})}),function(e){"object"==typeof exports&&"object"==typeof module?e(require("../../lib/codemirror")):"function"==typeof define&&define.amd?define(["../../lib/codemirror"],e):e(CodeMirror)}(function(e){"use strict"
var t={autoSelfClosers:{area:!0,base:!0,br:!0,col:!0,command:!0,embed:!0,frame:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0,menuitem:!0},implicitlyClosed:{dd:!0,li:!0,optgroup:!0,option:!0,p:!0,rp:!0,rt:!0,tbody:!0,td:!0,tfoot:!0,th:!0,tr:!0},contextGrabbers:{dd:{dd:!0,dt:!0},dt:{dd:!0,dt:!0},li:{li:!0},option:{option:!0,optgroup:!0},optgroup:{optgroup:!0},p:{address:!0,article:!0,aside:!0,blockquote:!0,dir:!0,div:!0,dl:!0,fieldset:!0,footer:!0,form:!0,h1:!0,h2:!0,h3:!0,h4:!0,h5:!0,h6:!0,header:!0,hgroup:!0,hr:!0,menu:!0,nav:!0,ol:!0,p:!0,pre:!0,section:!0,table:!0,ul:!0},rp:{rp:!0,rt:!0},rt:{rp:!0,rt:!0},tbody:{tbody:!0,tfoot:!0},td:{td:!0,th:!0},tfoot:{tbody:!0},th:{td:!0,th:!0},thead:{tbody:!0,tfoot:!0},tr:{tr:!0}},doNotIndent:{pre:!0},allowUnquoted:!0,allowMissing:!0,caseFold:!0},r={autoSelfClosers:{},implicitlyClosed:{},contextGrabbers:{},doNotIndent:{},allowUnquoted:!1,allowMissing:!1,allowMissingTagName:!1,caseFold:!1}
e.defineMode("xml",function(n,i){var o,a,l=n.indentUnit,s={},u=i.htmlMode?t:r
for(var c in u)s[c]=u[c]
for(var c in i)s[c]=i[c]
function d(e,t){function r(r){return t.tokenize=r,r(e,t)}var n=e.next()
return"<"==n?e.eat("!")?e.eat("[")?e.match("CDATA[")?r(h("atom","]]>")):null:e.match("--")?r(h("comment","--\x3e")):e.match("DOCTYPE",!0,!0)?(e.eatWhile(/[\w\._\-]/),r(function e(t){return function(r,n){for(var i;null!=(i=r.next());){if("<"==i)return n.tokenize=e(t+1),n.tokenize(r,n)
if(">"==i){if(1==t){n.tokenize=d
break}return n.tokenize=e(t-1),n.tokenize(r,n)}}return"meta"}}(1))):null:e.eat("?")?(e.eatWhile(/[\w\._\-]/),t.tokenize=h("meta","?>"),"meta"):(o=e.eat("/")?"closeTag":"openTag",t.tokenize=f,"tag bracket"):"&"==n?(e.eat("#")?e.eat("x")?e.eatWhile(/[a-fA-F\d]/)&&e.eat(";"):e.eatWhile(/[\d]/)&&e.eat(";"):e.eatWhile(/[\w\.\-:]/)&&e.eat(";"))?"atom":"error":(e.eatWhile(/[^&<]/),null)}function f(e,t){var r,n,i=e.next()
if(">"==i||"/"==i&&e.eat(">"))return t.tokenize=d,o=">"==i?"endTag":"selfcloseTag","tag bracket"
if("="==i)return o="equals",null
if("<"==i){t.tokenize=d,t.state=v,t.tagName=t.tagStart=null
var a=t.tokenize(e,t)
return a?a+" tag error":"tag error"}return/[\'\"]/.test(i)?(t.tokenize=(r=i,(n=function(e,t){for(;!e.eol();)if(e.next()==r){t.tokenize=f
break}return"string"}).isInAttribute=!0,n),t.stringStartCol=e.column(),t.tokenize(e,t)):(e.match(/^[^\s\u00a0=<>\"\']*[^\s\u00a0=<>\"\'\/]/),"word")}function h(e,t){return function(r,n){for(;!r.eol();){if(r.match(t)){n.tokenize=d
break}r.next()}return e}}function p(e,t,r){this.prev=e.context,this.tagName=t,this.indent=e.indented,this.startOfLine=r,(s.doNotIndent.hasOwnProperty(t)||e.context&&e.context.noIndent)&&(this.noIndent=!0)}function g(e){e.context&&(e.context=e.context.prev)}function m(e,t){for(var r;;){if(!e.context)return
if(r=e.context.tagName,!s.contextGrabbers.hasOwnProperty(r)||!s.contextGrabbers[r].hasOwnProperty(t))return
g(e)}}function v(e,t,r){return"openTag"==e?(r.tagStart=t.column(),y):"closeTag"==e?b:v}function y(e,t,r){return"word"==e?(r.tagName=t.current(),a="tag",k):s.allowMissingTagName&&"endTag"==e?(a="tag bracket",k(e,t,r)):(a="error",y)}function b(e,t,r){if("word"==e){var n=t.current()
return r.context&&r.context.tagName!=n&&s.implicitlyClosed.hasOwnProperty(r.context.tagName)&&g(r),r.context&&r.context.tagName==n||!1===s.matchClosing?(a="tag",w):(a="tag error",x)}return s.allowMissingTagName&&"endTag"==e?(a="tag bracket",w(e,t,r)):(a="error",x)}function w(e,t,r){return"endTag"!=e?(a="error",w):(g(r),v)}function x(e,t,r){return a="error",w(e,0,r)}function k(e,t,r){if("word"==e)return a="attribute",C
if("endTag"==e||"selfcloseTag"==e){var n=r.tagName,i=r.tagStart
return r.tagName=r.tagStart=null,"selfcloseTag"==e||s.autoSelfClosers.hasOwnProperty(n)?m(r,n):(m(r,n),r.context=new p(r,n,i==r.indented)),v}return a="error",k}function C(e,t,r){return"equals"==e?S:(s.allowMissing||(a="error"),k(e,0,r))}function S(e,t,r){return"string"==e?L:"word"==e&&s.allowUnquoted?(a="string",k):(a="error",k(e,0,r))}function L(e,t,r){return"string"==e?L:k(e,0,r)}return d.isInText=!0,{startState:function(e){var t={tokenize:d,state:v,indented:e||0,tagName:null,tagStart:null,context:null}
return null!=e&&(t.baseIndent=e),t},token:function(e,t){if(!t.tagName&&e.sol()&&(t.indented=e.indentation()),e.eatSpace())return null
o=null
var r=t.tokenize(e,t)
return(r||o)&&"comment"!=r&&(a=null,t.state=t.state(o||r,e,t),a&&(r="error"==a?r+" error":a)),r},indent:function(t,r,n){var i=t.context
if(t.tokenize.isInAttribute)return t.tagStart==t.indented?t.stringStartCol+1:t.indented+l
if(i&&i.noIndent)return e.Pass
if(t.tokenize!=f&&t.tokenize!=d)return n?n.match(/^(\s*)/)[0].length:0
if(t.tagName)return!1!==s.multilineTagIndentPastTag?t.tagStart+t.tagName.length+2:t.tagStart+l*(s.multilineTagIndentFactor||1)
if(s.alignCDATA&&/<!\[CDATA\[/.test(r))return 0
var o=r&&/^<(\/)?([\w_:\.-]*)/.exec(r)
if(o&&o[1])for(;i;){if(i.tagName==o[2]){i=i.prev
break}if(!s.implicitlyClosed.hasOwnProperty(i.tagName))break
i=i.prev}else if(o)for(;i;){var a=s.contextGrabbers[i.tagName]
if(!a||!a.hasOwnProperty(o[2]))break
i=i.prev}for(;i&&i.prev&&!i.startOfLine;)i=i.prev
return i?i.indent+l:t.baseIndent||0},electricInput:/<\/[\s\w:]+>$/,blockCommentStart:"\x3c!--",blockCommentEnd:"--\x3e",configuration:s.htmlMode?"html":"xml",helperType:s.htmlMode?"html":"xml",skipAttribute:function(e){e.state==S&&(e.state=k)}}}),e.defineMIME("text/xml","xml"),e.defineMIME("application/xml","xml"),e.mimeModes.hasOwnProperty("text/html")||e.defineMIME("text/html",{name:"xml",htmlMode:!0})})
