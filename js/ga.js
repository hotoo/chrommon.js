define(function(require, expires, module){var g=void 0,h=!0,j=null,l=!1,aa=encodeURIComponent,ba=Infinity,ca=setTimeout,n=Math,da=decodeURIComponent;function ea(a,b){return a.name=b}
var p="push",fa="test",ia="slice",q="replace",ja="load",ka="floor",la="charAt",ma="value",r="indexOf",na="match",oa="port",pa="createElement",qa="path",s="name",v="host",w="toString",x="length",y="prototype",ra="clientWidth",z="split",sa="stopPropagation",ta="scope",A="location",ua="search",B="protocol",va="clientHeight",wa="href",C="substring",xa="apply",ya="navigator",D="join",E="toLowerCase",F;function za(a,b){switch(b){case 0:return""+a;case 1:return 1*a;case 2:return!!a;case 3:return 1E3*a}return a}function Aa(a){return"function"==typeof a}function Ba(a){return a!=g&&-1<(a.constructor+"")[r]("String")}function G(a,b){return g==a||"-"==a&&!b||""==a}function Ca(a){if(!a||""==a)return"";for(;a&&-1<" \n\r\t"[r](a[la](0));)a=a[C](1);for(;a&&-1<" \n\r\t"[r](a[la](a[x]-1));)a=a[C](0,a[x]-1);return a}function Da(){return n.round(2147483647*n.random())}function Ea(){}
function H(a,b){if(aa instanceof Function)return b?encodeURI(a):aa(a);I(68);return escape(a)}function J(a){a=a[z]("+")[D](" ");if(da instanceof Function)try{return da(a)}catch(b){I(17)}else I(68);return unescape(a)}var Fa=function(a,b,c,d){a.addEventListener?a.addEventListener(b,c,!!d):a.attachEvent&&a.attachEvent("on"+b,c)},Ga=function(a,b,c,d){a.removeEventListener?a.removeEventListener(b,c,!!d):a.detachEvent&&a.detachEvent("on"+b,c)};
function Ha(a,b){if(a){var c=K[pa]("script");c.type="text/javascript";c.async=h;c.src=a;c.id=b;var d=K.getElementsByTagName("script")[0];d.parentNode.insertBefore(c,d);return c}}function L(a){return a&&0<a[x]?a[0]:""}function Ia(a){var b=a?a[x]:0;return 0<b?a[b-1]:""}var Ja=function(){this.prefix="ga.";this.R={}};Ja[y].set=function(a,b){this.R[this.prefix+a]=b};Ja[y].get=function(a){return this.R[this.prefix+a]};Ja[y].contains=function(a){return this.get(a)!==g};function Ka(a){0==a[r]("www.")&&(a=a[C](4));return a[E]()}function La(a,b){var c,d={url:a,protocol:"http",host:"",path:"",d:new Ja,anchor:""};if(!a)return d;c=a[r]("://");0<=c&&(d.protocol=a[C](0,c),a=a[C](c+3));c=a[ua]("/|\\?|#");if(0<=c)d.host=a[C](0,c)[E](),a=a[C](c);else return d.host=a[E](),d;c=a[r]("#");0<=c&&(d.anchor=a[C](c+1),a=a[C](0,c));c=a[r]("?");0<=c&&(Ma(d.d,a[C](c+1)),a=a[C](0,c));d.anchor&&b&&Ma(d.d,d.anchor);a&&"/"==a[la](0)&&(a=a[C](1));d.path=a;return d}
function Oa(a,b){function c(a){var b=(a.hostname||"")[z](":")[0][E](),c=(a[B]||"")[E](),c=1*a[oa]||("http:"==c?80:"https:"==c?443:"");a=a.pathname||"";0==a[r]("/")||(a="/"+a);return[b,""+c,a]}var d=b||K[pa]("a");d.href=K[A][wa];var e=(d[B]||"")[E](),f=c(d),k=d[ua]||"",m=e+"//"+f[0]+(f[1]?":"+f[1]:"");0==a[r]("//")?a=e+a:0==a[r]("/")?a=m+a:!a||0==a[r]("?")?a=m+f[2]+(a||k):0>a[z]("/")[0][r](":")&&(a=m+f[2][C](0,f[2].lastIndexOf("/"))+"/"+a);d.href=a;e=c(d);return{protocol:(d[B]||"")[E](),host:e[0],
port:e[1],path:e[2],Oa:d[ua]||"",url:a||""}}function Ma(a,b){function c(b,c){a.contains(b)||a.set(b,[]);a.get(b)[p](c)}for(var d=Ca(b)[z]("&"),e=0;e<d[x];e++)if(d[e]){var f=d[e][r]("=");0>f?c(d[e],"1"):c(d[e][C](0,f),d[e][C](f+1))}}function Pa(a,b){if(G(a)||"["==a[la](0)&&"]"==a[la](a[x]-1))return"-";var c=K.domain;return a[r](c+(b&&"/"!=b?b:""))==(0==a[r]("http://")?7:0==a[r]("https://")?8:0)?"0":a};var Qa=0;function Ra(a,b,c){!(1<=Qa)&&!(1<=100*n.random())&&(a=["utmt=error","utmerr="+a,"utmwv=5.3.8","utmn="+Da(),"utmsp=1"],b&&a[p]("api="+b),c&&a[p]("msg="+H(c[C](0,100))),M.w&&a[p]("aip=1"),Sa(a[D]("&")),Qa++)};var Ta=0,Ua={};function N(a){return Va("x"+Ta++,a)}function Va(a,b){Ua[a]=!!b;return a}
var Wa=N(),Xa=Va("anonymizeIp"),Ya=N(),$a=N(),ab=N(),bb=N(),O=N(),P=N(),cb=N(),db=N(),eb=N(),fb=N(),gb=N(),hb=N(),ib=N(),jb=N(),kb=N(),lb=N(),nb=N(),ob=N(),pb=N(),qb=N(),rb=N(),sb=N(),tb=N(),ub=N(),vb=N(),wb=N(),xb=N(),yb=N(),zb=N(),Ab=N(),Bb=N(),Cb=N(),Db=N(),Eb=N(),Fb=N(h),Gb=Va("currencyCode"),Hb=Va("page"),Ib=Va("title"),Jb=N(),Kb=N(),Lb=N(),Mb=N(),Nb=N(),Ob=N(),Pb=N(),Qb=N(),Rb=N(),Q=N(h),Sb=N(h),Tb=N(h),Ub=N(h),Vb=N(h),Wb=N(h),Zb=N(h),$b=N(h),ac=N(h),bc=N(h),cc=N(h),R=N(h),dc=N(h),ec=N(h),fc=
N(h),gc=N(h),hc=N(h),ic=N(h),jc=N(h),S=N(h),kc=N(h),lc=N(h),mc=N(h),nc=N(h),oc=N(h),pc=N(h),qc=N(h),rc=Va("campaignParams"),sc=N(),tc=Va("hitCallback"),uc=N();N();var vc=N(),wc=N(),xc=N(),yc=N(),zc=N(),Ac=N(),Bc=N(),Cc=N(),Dc=N(),Ec=N(),Fc=N(),Gc=N(),Hc=N(),Ic=N();N();var Mc=N(),Nc=N(),Oc=N();function Pc(a){var b=this.plugins_;if(b)return b.get(a)}var T=function(a,b,c,d){a[b]=function(){try{return d!=g&&I(d),c[xa](this,arguments)}catch(a){throw Ra("exc",b,a&&a[s]),a;}}},Qc=function(a,b,c,d){U[y][a]=function(){try{return I(c),za(this.a.get(b),d)}catch(e){throw Ra("exc",a,e&&e[s]),e;}}},V=function(a,b,c,d,e){U[y][a]=function(f){try{I(c),e==g?this.a.set(b,za(f,d)):this.a.set(b,e)}catch(k){throw Ra("exc",a,k&&k[s]),k;}}};var Rc=RegExp(/(^|\.)doubleclick\.net$/i),Sc=function(a,b){return Rc[fa](K[A].hostname)?h:"/"!==b?l:(0==a[r]("www.google.")||0==a[r](".google.")||0==a[r]("google."))&&!(-1<a[r]("google.org"))?h:l},Tc=function(a){var b=a.get(bb),c=a.c(P,"/");Sc(b,c)&&a[sa]()};var Zc=function(){var a={},b={},c=new Uc;this.g=function(a,b){c.add(a,b)};var d=new Uc;this.e=function(a,b){d.add(a,b)};var e=l,f=l,k=h;this.T=function(){e=h};this.j=function(a){this[ja]();this.set(sc,a,h);a=new Vc(this);e=l;d.execute(this);e=h;b={};this.n();a.Ja()};this.load=function(){e&&(e=l,this.Ka(),Wc(this),f||(f=h,c.execute(this),Xc(this),Wc(this)),e=h)};this.n=function(){if(e)if(f)e=l,Xc(this),e=h;else this[ja]()};this.get=function(c){Ua[c]&&this[ja]();return b[c]!==g?b[c]:a[c]};this.set=
function(c,d,e){Ua[c]&&this[ja]();e?b[c]=d:a[c]=d;Ua[c]&&this.n()};this.z=function(b){a[b]=this.b(b,0)+1};this.b=function(a,b){var c=this.get(a);return c==g||""===c?b:1*c};this.c=function(a,b){var c=this.get(a);return c==g?b:c+""};this.Ka=function(){if(k){var b=this.c(bb,""),c=this.c(P,"/");Sc(b,c)||(a[O]=a[hb]&&""!=b?Yc(b):1,k=l)}}};Zc[y].stopPropagation=function(){throw"aborted";};
var Vc=function(a){var b=this;this.q=0;var c=a.get(tc);this.Ua=function(){0<b.q&&c&&(b.q--,b.q||c())};this.Ja=function(){!b.q&&c&&ca(c,10)};a.set(uc,b,h)};function $c(a,b){b=b||[];for(var c=0;c<b[x];c++){var d=b[c];if(""+a==d||0==d[r](a+"."))return d}return"-"}
var bd=function(a,b,c){c=c?"":a.c(O,"1");b=b[z](".");if(6!==b[x]||ad(b[0],c))return l;c=1*b[1];var d=1*b[2],e=1*b[3],f=1*b[4];b=1*b[5];if(!(0<=c&&0<d&&0<e&&0<f&&0<=b))return l;a.set(Q,c);a.set(Vb,d);a.set(Wb,e);a.set(Zb,f);a.set($b,b);return h},cd=function(a){var b=a.get(Q),c=a.get(Vb),d=a.get(Wb),e=a.get(Zb),f=a.b($b,1);return[a.b(O,1),b!=g?b:"-",c||"-",d||"-",e||"-",f][D](".")},dd=function(a){return[a.b(O,1),a.b(cc,0),a.b(R,1),a.b(dc,0)][D](".")},ed=function(a,b,c){c=c?"":a.c(O,"1");var d=b[z](".");
if(4!==d[x]||ad(d[0],c))d=j;a.set(cc,d?1*d[1]:0);a.set(R,d?1*d[2]:10);a.set(dc,d?1*d[3]:a.get(ab));return d!=j||!ad(b,c)},fd=function(a,b){var c=H(a.c(Tb,"")),d=[],e=a.get(Fb);if(!b&&e){for(var f=0;f<e[x];f++){var k=e[f];k&&1==k[ta]&&d[p](f+"="+H(k[s])+"="+H(k[ma])+"=1")}0<d[x]&&(c+="|"+d[D]("^"))}return c?a.b(O,1)+"."+c:j},gd=function(a,b,c){c=c?"":a.c(O,"1");b=b[z](".");if(2>b[x]||ad(b[0],c))return l;b=b[ia](1)[D](".")[z]("|");0<b[x]&&a.set(Tb,J(b[0]));if(1>=b[x])return h;b=b[1][z](-1==b[1][r](",")?
"^":",");for(c=0;c<b[x];c++){var d=b[c][z]("=");if(4==d[x]){var e={};ea(e,J(d[1]));e.value=J(d[2]);e.scope=1;a.get(Fb)[d[0]]=e}}return h},hd=function(a){var b;b=function(b,e){if(!G(a.get(b))){var f=a.c(b,""),f=f[z](" ")[D]("%20"),f=f[z]("+")[D]("%20");c[p](e+"="+f)}};var c=[];b(ic,"utmcid");b(nc,"utmcsr");b(S,"utmgclid");b(kc,"utmgclsrc");b(lc,"utmdclid");b(mc,"utmdsid");b(jc,"utmccn");b(oc,"utmcmd");b(pc,"utmctr");b(qc,"utmcct");return(b=c[D]("|"))?[a.b(O,1),a.b(ec,0),a.b(fc,1),a.b(gc,1),b][D]("."):
""},id=function(a,b,c){c=c?"":a.c(O,"1");b=b[z](".");if(5>b[x]||ad(b[0],c))return a.set(ec,g),a.set(fc,g),a.set(gc,g),a.set(ic,g),a.set(jc,g),a.set(nc,g),a.set(oc,g),a.set(pc,g),a.set(qc,g),a.set(S,g),a.set(kc,g),a.set(lc,g),a.set(mc,g),l;a.set(ec,1*b[1]);a.set(fc,1*b[2]);a.set(gc,1*b[3]);var d=b[ia](4)[D](".");b=function(a){return(a=d[na](a+"=(.*?)(?:\\|utm|$)"))&&2==a[x]?a[1]:g};c=function(b,c){c?(c=e?J(c):c[z]("%20")[D](" "),a.set(b,c)):a.set(b,g)};-1==d[r]("=")&&(d=J(d));var e="2"==b("utmcvr");
c(ic,b("utmcid"));c(jc,b("utmccn"));c(nc,b("utmcsr"));c(oc,b("utmcmd"));c(pc,b("utmctr"));c(qc,b("utmcct"));c(S,b("utmgclid"));c(kc,b("utmgclsrc"));c(lc,b("utmdclid"));c(mc,b("utmdsid"));return h},ad=function(a,b){return b?a!=b:!/^\d+$/[fa](a)};var Uc=function(){this.filters=[]};Uc[y].add=function(a,b){this.filters[p]({name:a,s:b})};Uc[y].execute=function(a){try{for(var b=0;b<this.filters[x];b++)this.filters[b].s.call(W,a)}catch(c){}};function jd(a){100!=a.get(vb)&&a.get(Q)%1E4>=100*a.get(vb)&&a[sa]()}function kd(a){ld(a.get(Wa))&&a[sa]()}function md(a){"file:"==K[A][B]&&a[sa]()}function nd(a){a.get(Ib)||a.set(Ib,K.title,h);a.get(Hb)||a.set(Hb,K[A].pathname+K[A][ua],h)};var od=new function(){var a=[];this.set=function(b){a[b]=h};this.Xa=function(){for(var b=[],c=0;c<a[x];c++)a[c]&&(b[n[ka](c/6)]=b[n[ka](c/6)]^1<<c%6);for(c=0;c<b[x];c++)b[c]="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_"[la](b[c]||0);return b[D]("")+"~"}};function I(a){od.set(a)};var W=window,K=document,ld=function(a){var b=W._gaUserPrefs;return b&&b.ioo&&b.ioo()||!!a&&W["ga-disable-"+a]===h},pd=function(a){var b=[],c=K.cookie[z](";");a=RegExp("^\\s*"+a+"=\\s*(.*?)\\s*$");for(var d=0;d<c[x];d++){var e=c[d][na](a);e&&b[p](e[1])}return b},X=function(a,b,c,d,e,f){e=ld(e)?l:Sc(d,c)?l:h;if(e){if(b&&0<=W[ya].userAgent[r]("Firefox")){b=b[q](/\n|\r/g," ");e=0;for(var k=b[x];e<k;++e){var m=b.charCodeAt(e)&255;if(10==m||13==m)b=b[C](0,e)+"?"+b[C](e+1)}}b&&2E3<b[x]&&(b=b[C](0,2E3),I(69));
a=a+"="+b+"; path="+c+"; ";f&&(a+="expires="+(new Date((new Date).getTime()+f)).toGMTString()+"; ");d&&(a+="domain="+d+";");K.cookie=a}};var qd,rd,sd=function(){if(!qd){var a={},b=W[ya],c=W.screen;a.Q=c?c.width+"x"+c.height:"-";a.P=c?c.colorDepth+"-bit":"-";a.language=(b&&(b.language||b.browserLanguage)||"-")[E]();a.javaEnabled=b&&b.javaEnabled()?1:0;a.characterSet=K.characterSet||K.charset||"-";try{var d=K.documentElement,e=K.body,f=e&&e[ra]&&e[va],b=[];d&&(d[ra]&&d[va])&&("CSS1Compat"===K.compatMode||!f)?b=[d[ra],d[va]]:f&&(b=[e[ra],e[va]]);a.Wa=b[D]("x")}catch(k){I(135)}qd=a}},td=function(){sd();for(var a=qd,b=W[ya],a=b.appName+
b.version+a.language+b.platform+b.userAgent+a.javaEnabled+a.Q+a.P+(K.cookie?K.cookie:"")+(K.referrer?K.referrer:""),b=a[x],c=W.history[x];0<c;)a+=c--^b++;return Yc(a)},ud=function(a){sd();var b=qd;a.set(Lb,b.Q);a.set(Mb,b.P);a.set(Pb,b.language);a.set(Qb,b.characterSet);a.set(Nb,b.javaEnabled);a.set(Rb,b.Wa);if(a.get(ib)&&a.get(jb)){if(!(b=rd)){var c,d,e;d="ShockwaveFlash";if((b=(b=W[ya])?b.plugins:g)&&0<b[x])for(c=0;c<b[x]&&!e;c++)d=b[c],-1<d[s][r]("Shockwave Flash")&&(e=d.description[z]("Shockwave Flash ")[1]);
else{d=d+"."+d;try{c=new ActiveXObject(d+".7"),e=c.GetVariable("$version")}catch(f){}if(!e)try{c=new ActiveXObject(d+".6"),e="WIN 6,0,21,0",c.AllowScriptAccess="always",e=c.GetVariable("$version")}catch(k){}if(!e)try{c=new ActiveXObject(d),e=c.GetVariable("$version")}catch(m){}e&&(e=e[z](" ")[1][z](","),e=e[0]+"."+e[1]+" r"+e[2])}b=e?e:"-"}rd=b;a.set(Ob,rd)}else a.set(Ob,"-")};var vd=function(a){if(Aa(a))this.s=a;else{var b=a[0],c=b.lastIndexOf(":"),d=b.lastIndexOf(".");this.h=this.i=this.l="";-1==c&&-1==d?this.h=b:-1==c&&-1!=d?(this.i=b[C](0,d),this.h=b[C](d+1)):-1!=c&&-1==d?(this.l=b[C](0,c),this.h=b[C](c+1)):c>d?(this.i=b[C](0,d),this.l=b[C](d+1,c),this.h=b[C](c+1)):(this.i=b[C](0,d),this.h=b[C](d+1));this.k=a[ia](1);this.Ma=!this.l&&"_require"==this.h;this.J=!this.i&&!this.l&&"_provide"==this.h}},Y=function(){T(Y[y],"push",Y[y][p],5);T(Y[y],"_getPlugin",Pc,121);T(Y[y],
"_createAsyncTracker",Y[y].Sa,33);T(Y[y],"_getAsyncTracker",Y[y].Ta,34);this.I=new Ja;this.p=[]};F=Y[y];F.Na=function(a,b,c){var d=this.I.get(a);if(!Aa(d))return l;b.plugins_=b.plugins_||new Ja;b.plugins_.set(a,new d(b,c||{}));return h};F.push=function(a){var b=Z.Va[xa](this,arguments),b=Z.p.concat(b);for(Z.p=[];0<b[x]&&!Z.O(b[0])&&!(b.shift(),0<Z.p[x]););Z.p=Z.p.concat(b);return 0};F.Va=function(a){for(var b=[],c=0;c<arguments[x];c++)try{var d=new vd(arguments[c]);d.J?this.O(d):b[p](d)}catch(e){}return b};
F.O=function(a){try{if(a.s)a.s[xa](W);else if(a.J)this.I.set(a.k[0],a.k[1]);else{var b="_gat"==a.i?M:"_gaq"==a.i?Z:M.u(a.i);if(a.Ma){if(!this.Na(a.k[0],b,a.k[2])){if(!a.Pa){var c=Oa(""+a.k[1]);var d=c[B],e=K[A][B];var f;if(f="https:"==d||d==e?h:"http:"!=d?l:"http:"==e){var k;a:{var m=Oa(K[A][wa]);if(!(c.Oa||0<=c.url[r]("?")||0<=c[qa][r]("://")||c[v]==m[v]&&c[oa]==m[oa]))for(var t="http:"==c[B]?80:443,u=M.S,b=0;b<u[x];b++)if(c[v]==u[b][0]&&(c[oa]||t)==(u[b][1]||t)&&0==c[qa][r](u[b][2])){k=h;break a}k=
l}f=k&&!ld()}f&&(a.Pa=Ha(c.url))}return h}}else a.l&&(b=b.plugins_.get(a.l)),b[a.h][xa](b,a.k)}}catch(Za){}};F.Sa=function(a,b){return M.r(a,b||"")};F.Ta=function(a){return M.u(a)};var yd=function(){function a(a,b,c,d){g==f[a]&&(f[a]={});g==f[a][b]&&(f[a][b]=[]);f[a][b][c]=d}function b(a,b,c){if(g!=f[a]&&g!=f[a][b])return f[a][b][c]}function c(a,b){if(g!=f[a]&&g!=f[a][b]){f[a][b]=g;var c=h,d;for(d=0;d<k[x];d++)if(g!=f[a][k[d]]){c=l;break}c&&(f[a]=g)}}function d(a){var b="",c=l,d,e;for(d=0;d<k[x];d++)if(e=a[k[d]],g!=e){c&&(b+=k[d]);for(var c=[],f=g,ha=g,ha=0;ha<e[x];ha++)if(g!=e[ha]){f="";ha!=mb&&g==e[ha-1]&&(f+=ha[w]()+Za);for(var Cd=e[ha],Jc="",Yb=g,Kc=g,Lc=g,Yb=0;Yb<Cd[x];Yb++)Kc=
Cd[la](Yb),Lc=Na[Kc],Jc+=g!=Lc?Lc:Kc;f+=Jc;c[p](f)}b+=m+c[D](u)+t;c=l}else c=h;return b}var e=this,f=[],k=["k","v"],m="(",t=")",u="*",Za="!",Na={"'":"'0"};Na[t]="'1";Na[u]="'2";Na[Za]="'3";var mb=1;e.Ra=function(a){return g!=f[a]};e.A=function(){for(var a="",b=0;b<f[x];b++)g!=f[b]&&(a+=b[w]()+d(f[b]));return a};e.Qa=function(a){if(a==g)return e.A();for(var b=a.A(),c=0;c<f[x];c++)g!=f[c]&&!a.Ra(c)&&(b+=c[w]()+d(f[c]));return b};e.f=function(b,c,d){if(!wd(d))return l;a(b,"k",c,d);return h};e.o=function(b,
c,d){if(!xd(d))return l;a(b,"v",c,d[w]());return h};e.getKey=function(a,c){return b(a,"k",c)};e.N=function(a,c){return b(a,"v",c)};e.L=function(a){c(a,"k")};e.M=function(a){c(a,"v")};T(e,"_setKey",e.f,89);T(e,"_setValue",e.o,90);T(e,"_getKey",e.getKey,87);T(e,"_getValue",e.N,88);T(e,"_clearKey",e.L,85);T(e,"_clearValue",e.M,86)};function wd(a){return"string"==typeof a}function xd(a){return"number"!=typeof a&&(g==Number||!(a instanceof Number))||n.round(a)!=a||NaN==a||a==ba?l:h};var zd=function(a){var b=W.gaGlobal;a&&!b&&(W.gaGlobal=b={});return b},Ad=function(){var a=zd(h).hid;a==j&&(a=Da(),zd(h).hid=a);return a},Dd=function(a){a.set(Kb,Ad());var b=zd();if(b&&b.dh==a.get(O)){var c=b.sid;c&&("0"==c&&I(112),a.set(Zb,c),a.get(Sb)&&a.set(Wb,c));b=b.vid;a.get(Sb)&&b&&(b=b[z]("."),1*b[1]||I(112),a.set(Q,1*b[0]),a.set(Vb,1*b[1]))}};var Ed,Fd=function(a,b,c){var d=a.c(bb,""),e=a.c(P,"/"),f=a.b(cb,0);a=a.c(Wa,"");X(b,c,e,d,a,f)},Xc=function(a){var b=a.c(bb,"");a.b(O,1);var c=a.c(P,"/"),d=a.c(Wa,"");X("__utma",cd(a),c,b,d,a.get(cb));X("__utmb",dd(a),c,b,d,a.get(db));X("__utmc",""+a.b(O,1),c,b,d);var e=hd(a,h);e?X("__utmz",e,c,b,d,a.get(eb)):X("__utmz","",c,b,"",-1);(e=fd(a,l))?X("__utmv",e,c,b,d,a.get(cb)):X("__utmv","",c,b,"",-1)},Wc=function(a){var b=a.b(O,1);if(!bd(a,$c(b,pd("__utma"))))return a.set(Ub,h),l;var c=!ed(a,$c(b,
pd("__utmb")));a.set(bc,c);id(a,$c(b,pd("__utmz")));gd(a,$c(b,pd("__utmv")));Ed=!c;return h},Gd=function(a){!Ed&&!(0<pd("__utmb")[x])&&(X("__utmd","1",a.c(P,"/"),a.c(bb,""),a.c(Wa,""),1E4),0==pd("__utmd")[x]&&a[sa]())};var Jd=function(a){a.get(Q)==g?Hd(a):a.get(Ub)&&!a.get(Mc)?Hd(a):a.get(bc)&&Id(a)},Kd=function(a){a.get(hc)&&!a.get(ac)&&(Id(a),a.set(fc,a.get($b)))},Hd=function(a){var b=a.get(ab);a.set(Sb,h);a.set(Q,Da()^td(a)&2147483647);a.set(Tb,"");a.set(Vb,b);a.set(Wb,b);a.set(Zb,b);a.set($b,1);a.set(ac,h);a.set(cc,0);a.set(R,10);a.set(dc,b);a.set(Fb,[]);a.set(Ub,l);a.set(bc,l)},Id=function(a){a.set(Wb,a.get(Zb));a.set(Zb,a.get(ab));a.z($b);a.set(ac,h);a.set(cc,0);a.set(R,10);a.set(dc,a.get(ab));a.set(bc,l)};var Ld="daum:q eniro:search_word naver:query pchome:q images.google:q google:q yahoo:p yahoo:q msn:q bing:q aol:query aol:q lycos:q lycos:query ask:q netscape:query cnn:query about:terms mamma:q voila:rdata virgilio:qs live:q baidu:wd alice:qs yandex:text najdi:q seznam:q rakuten:qt biglobe:q goo.ne:MT wp:szukaj onet:qt yam:k kvasir:q ozu:q terra:query rambler:query conduit:q babylon:q search-results:q avg:q comcast:q incredimail:q startsiden:q go.mail.ru:q search.centrum.cz:q".split(" "),Sd=function(a){if(a.get(kb)&&
!a.get(Mc)){for(var b=!G(a.get(ic))||!G(a.get(nc))||!G(a.get(S))||!G(a.get(lc)),c={},d=0;d<Md[x];d++){var e=Md[d];c[e]=a.get(e)}(d=a.get(rc))?(I(149),e=new Ja,Ma(e,d),d=e):d=La(K[A][wa],a.get(gb)).d;if(!("1"==Ia(d.get(a.get(ub)))&&b)){var f=d,k=function(b,c){c=c||"-";var d=Ia(f.get(a.get(b)));return d&&"-"!=d?J(d):c},d=Ia(f.get(a.get(nb)))||"-",e=Ia(f.get(a.get(qb)))||"-",m=Ia(f.get(a.get(pb)))||"-",t=Ia(f.get("gclsrc"))||"-",u=Ia(f.get("dclid"))||"-",Za=k(ob,"(not set)"),Na=k(rb,"(not set)"),mb=
k(sb),k=k(tb);if(G(d)&&G(m)&&G(u)&&G(e))d=l;else{var Xb=!G(m)&&!G(t),Xb=G(e)&&(!G(u)||Xb),Bd=G(mb);if(Xb||Bd){var ga=Nd(a),ga=La(ga,h);if((ga=Od(a,ga))&&!G(ga[1]&&!ga[2]))Xb&&(e=ga[0]),Bd&&(mb=ga[1])}Pd(a,d,e,m,t,u,Za,Na,mb,k);d=h}d=d||Qd(a);!d&&(!b&&a.get(ac))&&(Pd(a,g,"(direct)",g,g,g,"(direct)","(none)",g,g),d=h);if(d&&(a.set(hc,Rd(a,c)),b="(direct)"==a.get(nc)&&"(direct)"==a.get(jc)&&"(none)"==a.get(oc),a.get(hc)||a.get(ac)&&!b))a.set(ec,a.get(ab)),a.set(fc,a.get($b)),a.z(gc)}}},Qd=function(a){var b=
Nd(a),c=La(b,h);if(!(b!=g&&b!=j&&""!=b&&"0"!=b&&"-"!=b&&0<=b[r]("://"))||c&&-1<c[v][r]("google")&&c.d.contains("q")&&"cse"==c[qa])return l;if((b=Od(a,c))&&!b[2])return Pd(a,g,b[0],g,g,g,"(organic)","organic",b[1],g),h;if(b||!a.get(ac))return l;a:{for(var b=a.get(Bb),d=Ka(c[v]),e=0;e<b[x];++e)if(-1<d[r](b[e])){a=l;break a}Pd(a,g,d,g,g,g,"(referral)","referral",g,"/"+c[qa]);a=h}return a},Od=function(a,b){for(var c=a.get(zb),d=0;d<c[x];++d){var e=c[d][z](":");if(-1<b[v][r](e[0][E]())){var f=b.d.get(e[1]);
if(f&&(f=L(f),!f&&-1<b[v][r]("google.")&&(f="(not provided)"),!e[3]||-1<b.url[r](e[3]))){a:{for(var c=f,d=a.get(Ab),c=J(c)[E](),k=0;k<d[x];++k)if(c==d[k]){c=h;break a}c=l}return[e[2]||e[0],f,c]}}}return j},Pd=function(a,b,c,d,e,f,k,m,t,u){a.set(ic,b);a.set(nc,c);a.set(S,d);a.set(kc,e);a.set(lc,f);a.set(jc,k);a.set(oc,m);a.set(pc,t);a.set(qc,u)},Md=[jc,ic,S,lc,nc,oc,pc,qc],Rd=function(a,b){function c(a){a=(""+a)[z]("+")[D]("%20");return a=a[z](" ")[D]("%20")}function d(c){var d=""+(a.get(c)||"");c=
""+(b[c]||"");return 0<d[x]&&d==c}if(d(S)||d(lc))return I(131),l;for(var e=0;e<Md[x];e++){var f=Md[e],k=b[f]||"-",f=a.get(f)||"-";if(c(k)!=c(f))return h}return l},Td=RegExp(/^https:\/\/(www\.)?google(\.com?)?(\.[a-z]{2}t?)?\/?$/i),Nd=function(a){a=Pa(a.get(Jb),a.get(P));try{if(Td[fa](a))return I(136),a+"?q="}catch(b){I(145)}return a};var Ud,Vd,Wd=function(a){Ud=a.c(S,"");Vd=a.c(kc,"")},Xd=function(a){var b=a.c(S,""),c=a.c(kc,"");b!=Ud&&(-1<c[r]("ds")?a.set(mc,g):!G(Ud)&&-1<Vd[r]("ds")&&a.set(mc,Ud))};var Zd=function(a){Yd(a,K[A][wa])?(a.set(Mc,h),I(12)):a.set(Mc,l)},Yd=function(a,b){if(!a.get(fb))return l;var c=La(b,a.get(gb)),d=L(c.d.get("__utma")),e=L(c.d.get("__utmb")),f=L(c.d.get("__utmc")),k=L(c.d.get("__utmx")),m=L(c.d.get("__utmz")),t=L(c.d.get("__utmv")),c=L(c.d.get("__utmk"));if(Yc(""+d+e+f+k+m+t)!=c){d=J(d);e=J(e);f=J(f);k=J(k);f=$d(d+e+f+k,m,t,c);if(!f)return l;m=f[0];t=f[1]}if(!bd(a,d,h))return l;ed(a,e,h);id(a,m,h);gd(a,t,h);ae(a,k,h);return h},ce=function(a,b,c){var d;d=cd(a)||"-";
var e=dd(a)||"-",f=""+a.b(O,1)||"-",k=be(a)||"-",m=hd(a,l)||"-";a=fd(a,l)||"-";var t=Yc(""+d+e+f+k+m+a),u=[];u[p]("__utma="+d);u[p]("__utmb="+e);u[p]("__utmc="+f);u[p]("__utmx="+k);u[p]("__utmz="+m);u[p]("__utmv="+a);u[p]("__utmk="+t);d=u[D]("&");if(!d)return b;e=b[r]("#");if(c)return 0>e?b+"#"+d:b+"&"+d;c="";f=b[r]("?");0<e&&(c=b[C](e),b=b[C](0,e));return 0>f?b+"?"+d+c:b+"&"+d+c},$d=function(a,b,c,d){for(var e=0;3>e;e++){for(var f=0;3>f;f++){if(d==Yc(a+b+c))return I(127),[b,c];var k=b[q](/ /g,"%20"),
m=c[q](/ /g,"%20");if(d==Yc(a+k+m))return I(128),[k,m];k=k[q](/\+/g,"%20");m=m[q](/\+/g,"%20");if(d==Yc(a+k+m))return I(129),[k,m];try{var t=b[na]("utmctr=(.*?)(?:\\|utm|$)");if(t&&2==t[x]&&(k=b[q](t[1],H(J(t[1]))),d==Yc(a+k+c)))return I(139),[k,c]}catch(u){}b=J(b)}c=J(c)}};var de="|",fe=function(a,b,c,d,e,f,k,m,t){var u=ee(a,b);u||(u={},a.get(Cb)[p](u));u.id_=b;u.affiliation_=c;u.total_=d;u.tax_=e;u.shipping_=f;u.city_=k;u.state_=m;u.country_=t;u.items_=u.items_||[];return u},ge=function(a,b,c,d,e,f,k){a=ee(a,b)||fe(a,b,"",0,0,0,"","","");var m;a:{if(a&&a.items_){m=a.items_;for(var t=0;t<m[x];t++)if(m[t].sku_==c){m=m[t];break a}}m=j}t=m||{};t.transId_=b;t.sku_=c;t.name_=d;t.category_=e;t.price_=f;t.quantity_=k;m||a.items_[p](t);return t},ee=function(a,b){for(var c=
a.get(Cb),d=0;d<c[x];d++)if(c[d].id_==b)return c[d];return j};var he,ie=function(a){if(!he){var b;b=K[A].hash;var c=W[s],d=/^#?gaso=([^&]*)/;if(c=(b=(b=b&&b[na](d)||c&&c[na](d))?b[1]:L(pd("GASO")))&&b[na](/^(?:[|!]([-0-9a-z.]{1,40})[|!])?([-.\w]{10,1200})$/i))Fd(a,"GASO",""+b),M._gasoDomain=a.get(bb),M._gasoCPath=a.get(P),a=c[1],Ha("https://www.google.com/analytics/web/inpage/pub/inpage.js?"+(a?"prefix="+a+"&":"")+Da(),"_gasojs");he=h}};var ae=function(a,b,c){c&&(b=J(b));c=a.b(O,1);b=b[z](".");!(2>b[x])&&/^\d+$/[fa](b[0])&&(b[0]=""+c,Fd(a,"__utmx",b[D](".")))},be=function(a,b){var c=$c(a.get(O),pd("__utmx"));"-"==c&&(c="");return b?H(c):c};var ke=function(a,b){var c=n.min(a.b(Dc,0),100);if(a.b(Q,0)%100>=c)return l;a:{if(c=(c=W.performance||W.webkitPerformance)&&c.timing){var d=c.navigationStart;if(0==d)I(133);else{c=[c.loadEventStart-d,c.domainLookupEnd-c.domainLookupStart,c.connectEnd-c.connectStart,c.responseStart-c.requestStart,c.responseEnd-c.responseStart,c.fetchStart-d,c.domInteractive-d,c.domContentLoadedEventStart-d];break a}}c=g}c||(W.top!=W?c=g:(d=(c=W.external)&&c.onloadT,c&&!c.isValidLoadTime&&(d=g),2147483648<d&&(d=g),
0<d&&c.setPageReadyTime(),c=d==g?g:[d]));if(c==g)return l;d=c[0];if(d==g||d==ba||isNaN(d))return l;if(0<d){a:{for(d=1;d<c[x];d++)if(isNaN(c[d])||c[d]==ba||0>c[d]){d=l;break a}d=h}d?b(je(c)):b(je(c[ia](0,1)))}else Fa(W,"load",function(){ke(a,b)},l);return h},me=function(a,b,c,d){var e=new yd;e.f(14,90,b[C](0,64));e.f(14,91,a[C](0,64));e.f(14,92,""+le(c));d!=g&&e.f(14,93,d[C](0,64));e.o(14,90,c);return e},le=function(a){return isNaN(a)||0>a?0:5E3>a?10*n[ka](a/10):5E4>a?100*n[ka](a/100):41E5>a?1E3*n[ka](a/
1E3):41E5},je=function(a){for(var b=new yd,c=0;c<a[x];c++)b.f(14,c+1,""+le(a[c])),b.o(14,c+1,a[c]);return b};var U=function(a,b,c){function d(a){return function(b){if((b=b.get(Nc)[a])&&b[x])for(var c={type:a,target:e,stopPropagation:function(){throw"aborted";}},d=0;d<b[x];d++)b[d].call(e,c)}}var e=this;this.a=new Zc;this.get=function(a){return this.a.get(a)};this.set=function(a,b,c){this.a.set(a,b,c)};this.set(Wa,b||"UA-XXXXX-X");this.set($a,a||"");this.set(Ya,c||"");this.set(ab,n.round((new Date).getTime()/1E3));this.set(P,"/");this.set(cb,63072E6);this.set(eb,15768E6);this.set(db,18E5);this.set(fb,l);
this.set(yb,50);this.set(gb,l);this.set(hb,h);this.set(ib,h);this.set(jb,h);this.set(kb,h);this.set(lb,h);this.set(ob,"utm_campaign");this.set(nb,"utm_id");this.set(pb,"gclid");this.set(qb,"utm_source");this.set(rb,"utm_medium");this.set(sb,"utm_term");this.set(tb,"utm_content");this.set(ub,"utm_nooverride");this.set(vb,100);this.set(Dc,1);this.set(Ec,l);this.set(wb,"/__utm.gif");this.set(xb,1);this.set(Cb,[]);this.set(Fb,[]);this.set(zb,Ld[ia](0));this.set(Ab,[]);this.set(Bb,[]);this.B("auto");this.set(Jb,
K.referrer);a=this.a;try{var f=La(K[A][wa],l),k=da(Ia(f.d.get("utm_referrer")))||"";k&&a.set(Jb,k);var m=W.gaData&&W.gaData.expId;m||(m=da(L(f.d.get("utm_expid")))||"");m&&a.set(Oc,""+m)}catch(t){I(146)}this.set(Nc,{hit:[],load:[]});this.a.g("0",Zd);this.a.g("1",Wd);this.a.g("2",Jd);this.a.g("3",Sd);this.a.g("4",Xd);this.a.g("5",Kd);this.a.g("6",d("load"));this.a.g("7",ie);this.a.e("A",kd);this.a.e("B",md);this.a.e("C",Jd);this.a.e("D",jd);this.a.e("E",Tc);this.a.e("F",ne);this.a.e("G",Gd);this.a.e("H",
nd);this.a.e("I",ud);this.a.e("J",Dd);this.a.e("K",d("hit"));this.a.e("L",oe);this.a.e("M",pe);0===this.get(ab)&&I(111);this.a.T();this.H=g};F=U[y];F.m=function(){var a=this.get(Db);a||(a=new yd,this.set(Db,a));return a};F.La=function(a){for(var b in a){var c=a[b];a.hasOwnProperty(b)&&this.set(b,c,h)}};F.K=function(a){if(this.get(Ec))return l;var b=this,c=ke(this.a,function(c){b.set(Hb,a,h);b.t(c)});this.set(Ec,c);return c};
F.Fa=function(a){a&&Ba(a)?(I(13),this.set(Hb,a,h)):"object"===typeof a&&a!==j&&this.La(a);this.H=a=this.get(Hb);this.a.j("page");this.K(a)};F.F=function(a,b,c,d,e){if(""==a||(!wd(a)||""==b||!wd(b))||c!=g&&!wd(c)||d!=g&&!xd(d))return l;this.set(wc,a,h);this.set(xc,b,h);this.set(yc,c,h);this.set(zc,d,h);this.set(vc,!!e,h);this.a.j("event");return h};
F.Ha=function(a,b,c,d,e){var f=this.a.b(Dc,0);1*e===e&&(f=e);if(this.a.b(Q,0)%100>=f)return l;c=1*(""+c);if(""==a||(!wd(a)||""==b||!wd(b)||!xd(c)||isNaN(c)||0>c||0>f||100<f)||d!=g&&(""==d||!wd(d)))return l;this.t(me(a,b,c,d));return h};F.Ga=function(a,b,c,d){if(!a||!b)return l;this.set(Ac,a,h);this.set(Bc,b,h);this.set(Cc,c||K[A][wa],h);d&&this.set(Hb,d,h);this.a.j("social");return h};F.Ea=function(){this.set(Dc,10);this.K(this.H)};F.Ia=function(){this.a.j("trans")};
F.t=function(a){this.set(Eb,a,h);this.a.j("event")};F.ia=function(a){this.v();var b=this;return{_trackEvent:function(c,d,e){I(91);b.F(a,c,d,e)}}};F.ma=function(a){return this.get(a)};F.xa=function(a,b){if(a)if(Ba(a))this.set(a,b);else if("object"==typeof a)for(var c in a)a.hasOwnProperty(c)&&this.set(c,a[c])};F.addEventListener=function(a,b){var c=this.get(Nc)[a];c&&c[p](b)};F.removeEventListener=function(a,b){for(var c=this.get(Nc)[a],d=0;c&&d<c[x];d++)if(c[d]==b){c.splice(d,1);break}};F.qa=function(){return"5.3.8"};
F.B=function(a){this.get(hb);a="auto"==a?Ka(K.domain):!a||"-"==a||"none"==a?"":a[E]();this.set(bb,a)};F.va=function(a){this.set(hb,!!a)};F.na=function(a,b){return ce(this.a,a,b)};F.link=function(a,b){if(this.a.get(fb)&&a){var c=ce(this.a,a,b);K[A].href=c}};F.ua=function(a,b){this.a.get(fb)&&(a&&a.action)&&(a.action=ce(this.a,a.action,b))};
F.za=function(){this.v();var a=this.a,b=K.getElementById?K.getElementById("utmtrans"):K.utmform&&K.utmform.utmtrans?K.utmform.utmtrans:j;if(b&&b[ma]){a.set(Cb,[]);for(var b=b[ma][z]("UTM:"),c=0;c<b[x];c++){b[c]=Ca(b[c]);for(var d=b[c][z](de),e=0;e<d[x];e++)d[e]=Ca(d[e]);"T"==d[0]?fe(a,d[1],d[2],d[3],d[4],d[5],d[6],d[7],d[8]):"I"==d[0]&&ge(a,d[1],d[2],d[3],d[4],d[5],d[6])}}};F.$=function(a,b,c,d,e,f,k,m){return fe(this.a,a,b,c,d,e,f,k,m)};F.Y=function(a,b,c,d,e,f){return ge(this.a,a,b,c,d,e,f)};
F.Aa=function(a){de=a||"|"};F.ea=function(){this.set(Cb,[])};F.wa=function(a,b,c,d){var e=this.a;if(0>=a||a>e.get(yb))a=l;else if(!b||!c||128<b[x]+c[x])a=l;else{1!=d&&2!=d&&(d=3);var f={};ea(f,b);f.value=c;f.scope=d;e.get(Fb)[a]=f;a=h}a&&this.a.n();return a};F.ka=function(a){this.a.get(Fb)[a]=g;this.a.n()};F.ra=function(a){return(a=this.a.get(Fb)[a])&&1==a[ta]?a[ma]:g};F.Ca=function(a,b,c){this.m().f(a,b,c)};F.Da=function(a,b,c){this.m().o(a,b,c)};F.sa=function(a,b){return this.m().getKey(a,b)};
F.ta=function(a,b){return this.m().N(a,b)};F.fa=function(a){this.m().L(a)};F.ga=function(a){this.m().M(a)};F.ja=function(){return new yd};F.W=function(a){a&&this.get(Ab)[p](a[E]())};F.ba=function(){this.set(Ab,[])};F.X=function(a){a&&this.get(Bb)[p](a[E]())};F.ca=function(){this.set(Bb,[])};F.Z=function(a,b,c,d,e){if(a&&b){a=[a,b[E]()][D](":");if(d||e)a=[a,d,e][D](":");d=this.get(zb);d.splice(c?0:d[x],0,a)}};F.da=function(){this.set(zb,[])};
F.ha=function(a){this.a[ja]();var b=this.get(P),c=be(this.a);this.set(P,a);this.a.n();ae(this.a,c);this.set(P,b)};F.ya=function(a,b){if(0<a&&5>=a&&Ba(b)&&""!=b){var c=this.get(Fc)||[];c[a]=b;this.set(Fc,c)}};F.V=function(a){a=""+a;if(a[na](/^[A-Za-z0-9]{1,5}$/)){var b=this.get(Ic)||[];b[p](a);this.set(Ic,b)}};F.v=function(){this.a[ja]()};F.Ba=function(a){a&&""!=a&&(this.set(Tb,a),this.a.j("var"))};var ne=function(a){"trans"!==a.get(sc)&&500<=a.b(cc,0)&&a[sa]();if("event"===a.get(sc)){var b=(new Date).getTime(),c=a.b(dc,0),d=a.b(Zb,0),c=n[ka](1*((b-(c!=d?c:1E3*c))/1E3));0<c&&(a.set(dc,b),a.set(R,n.min(10,a.b(R,0)+c)));0>=a.b(R,0)&&a[sa]()}},pe=function(a){"event"===a.get(sc)&&a.set(R,n.max(0,a.b(R,10)-1))};var qe=function(){var a=[];this.add=function(b,c,d){d&&(c=H(""+c));a[p](b+"="+c)};this.toString=function(){return a[D]("&")}},re=function(a,b){(b||2!=a.get(xb))&&a.z(cc)},se=function(a,b){b.add("utmwv","5.3.8");b.add("utms",a.get(cc));b.add("utmn",Da());var c=K[A].hostname;G(c)||b.add("utmhn",c,h);c=a.get(vb);100!=c&&b.add("utmsp",c,h)},te=function(a,b){b.add("utmac",Ca(a.get(Wa)));a.get(Oc)&&b.add("utmxkey",a.get(Oc),h);a.get(vc)&&b.add("utmni",1);var c=a.get(Ic);c&&0<c[x]&&b.add("utmdid",c[D]("."));
var c=function(a,b){b&&d[p](a+"="+b+";")},d=[];c("__utma",cd(a));c("__utmz",hd(a,l));c("__utmv",fd(a,h));c("__utmx",be(a));b.add("utmcc",d[D]("+"),h);a.get(Xa)!==l&&(a.get(Xa)||M.w)&&b.add("aip",1);b.add("utmu",od.Xa())},ue=function(a,b){for(var c=a.get(Fc)||[],d=[],e=1;e<c[x];e++)c[e]&&d[p](e+":"+H(c[e][q](/%/g,"%25")[q](/:/g,"%3A")[q](/,/g,"%2C")));d[x]&&b.add("utmpg",d[D](","))},ve=function(a,b){a.get(ib)&&(b.add("utmcs",a.get(Qb),h),b.add("utmsr",a.get(Lb)),a.get(Rb)&&b.add("utmvp",a.get(Rb)),
b.add("utmsc",a.get(Mb)),b.add("utmul",a.get(Pb)),b.add("utmje",a.get(Nb)),b.add("utmfl",a.get(Ob),h))},we=function(a,b){a.get(lb)&&a.get(Ib)&&b.add("utmdt",a.get(Ib),h);b.add("utmhid",a.get(Kb));b.add("utmr",Pa(a.get(Jb),a.get(P)),h);b.add("utmp",H(a.get(Hb),h),h)},xe=function(a,b){for(var c=a.get(Db),d=a.get(Eb),e=a.get(Fb)||[],f=0;f<e[x];f++){var k=e[f];k&&(c||(c=new yd),c.f(8,f,k[s]),c.f(9,f,k[ma]),3!=k[ta]&&c.f(11,f,""+k[ta]))}!G(a.get(wc))&&!G(a.get(xc),h)&&(c||(c=new yd),c.f(5,1,a.get(wc)),
c.f(5,2,a.get(xc)),e=a.get(yc),e!=g&&c.f(5,3,e),e=a.get(zc),e!=g&&c.o(5,1,e));c?b.add("utme",c.Qa(d),h):d&&b.add("utme",d.A(),h)},ye=function(a,b,c){var d=new qe;re(a,c);se(a,d);d.add("utmt","tran");d.add("utmtid",b.id_,h);d.add("utmtst",b.affiliation_,h);d.add("utmtto",b.total_,h);d.add("utmttx",b.tax_,h);d.add("utmtsp",b.shipping_,h);d.add("utmtci",b.city_,h);d.add("utmtrg",b.state_,h);d.add("utmtco",b.country_,h);xe(a,d);ve(a,d);we(a,d);(b=a.get(Gb))&&d.add("utmcu",b,h);c||(ue(a,d),te(a,d));return d[w]()},
ze=function(a,b,c){var d=new qe;re(a,c);se(a,d);d.add("utmt","item");d.add("utmtid",b.transId_,h);d.add("utmipc",b.sku_,h);d.add("utmipn",b.name_,h);d.add("utmiva",b.category_,h);d.add("utmipr",b.price_,h);d.add("utmiqt",b.quantity_,h);xe(a,d);ve(a,d);we(a,d);(b=a.get(Gb))&&d.add("utmcu",b,h);c||(ue(a,d),te(a,d));return d[w]()},Ae=function(a,b){var c=a.get(sc);if("page"==c)c=new qe,re(a,b),se(a,c),xe(a,c),ve(a,c),we(a,c),b||(ue(a,c),te(a,c)),c=[c[w]()];else if("event"==c)c=new qe,re(a,b),se(a,c),
c.add("utmt","event"),xe(a,c),ve(a,c),we(a,c),b||(ue(a,c),te(a,c)),c=[c[w]()];else if("var"==c)c=new qe,re(a,b),se(a,c),c.add("utmt","var"),!b&&te(a,c),c=[c[w]()];else if("trans"==c)for(var c=[],d=a.get(Cb),e=0;e<d[x];++e){c[p](ye(a,d[e],b));for(var f=d[e].items_,k=0;k<f[x];++k)c[p](ze(a,f[k],b))}else"social"==c?b?c=[]:(c=new qe,re(a,b),se(a,c),c.add("utmt","social"),c.add("utmsn",a.get(Ac),h),c.add("utmsa",a.get(Bc),h),c.add("utmsid",a.get(Cc),h),xe(a,c),ve(a,c),we(a,c),ue(a,c),te(a,c),c=[c[w]()]):
"feedback"==c?b?c=[]:(c=new qe,re(a,b),se(a,c),c.add("utmt","feedback"),c.add("utmfbid",a.get(Gc),h),c.add("utmfbpr",a.get(Hc),h),xe(a,c),ve(a,c),we(a,c),ue(a,c),te(a,c),c=[c[w]()]):c=[];return c},oe=function(a){var b,c=a.get(xb),d=a.get(uc),e=d&&d.Ua,f=0;if(0==c||2==c){var k=a.get(wb)+"?";b=Ae(a,h);for(var m=0,t=b[x];m<t;m++)Sa(b[m],e,k,h),f++}if(1==c||2==c){b=Ae(a);m=0;for(t=b[x];m<t;m++)try{Sa(b[m],e),f++}catch(u){u&&Ra(u[s],g,u.message)}}d&&(d.q=f)};var Be=function(){return"https:"==K[A][B]||M.G?"https://ssl.google-analytics.com":"http://www.google-analytics.com"},Ce=function(a){ea(this,"len");this.message=a+"-8192"},De=function(a){ea(this,"ff2post");this.message=a+"-2036"},Sa=function(a,b,c,d){b=b||Ea;if(d||2036>=a[x]){var e=b;b=c||Be()+"/__utm.gif?";var f=new Image(1,1);f.src=b+a;f.onload=function(){f.onload=j;f.onerror=j;e()};f.onerror=function(){f.onload=j;f.onerror=j;e()}}else if(8192>=a[x]){var k=b;if(0<=W[ya].userAgent[r]("Firefox")&&
![].reduce)throw new De(a[x]);var m;b=Be()+"/p/__utm.gif";if(c=W.XDomainRequest)m=new c,m.open("POST",b);else if(c=W.XMLHttpRequest)c=new c,"withCredentials"in c&&(m=c,m.open("POST",b,h),m.setRequestHeader("Content-Type","text/plain"));m?(m.onreadystatechange=function(){4==m.readyState&&(k(),m=j)},m.send(a),b=h):b=g;b||Ee(a,k)}else throw new Ce(a[x]);},Ee=function(a,b){if(K.body){a=aa(a);try{var c=K[pa]('<iframe name="'+a+'"></iframe>')}catch(d){c=K[pa]("iframe"),ea(c,a)}c.height="0";c.width="0";
c.style.display="none";c.style.visibility="hidden";var e=K[A],e=Be()+"/u/post_iframe.html#"+aa(e[B]+"//"+e[v]+"/favicon.ico"),f=function(){c.src="";c.parentNode&&c.parentNode.removeChild(c)};Fa(W,"beforeunload",f);var k=l,m=0,t=function(){if(!k){try{if(9<m||c.contentWindow[A][v]==K[A][v]){k=h;f();Ga(W,"beforeunload",f);b();return}}catch(a){}m++;ca(t,200)}};Fa(c,"load",t);K.body.appendChild(c);c.src=e}else ca(function(){Ee(a,b)},100)};var $=function(){this.G=this.w=l;this.C={};this.D=[];this.U=0;this.S=[["www.google-analytics.com","","/plugins/"]];this._gasoCPath=this._gasoDomain=g;var a=function(a,c,d){T($[y],a,c,d)};a("_createTracker",$[y].r,55);a("_getTracker",$[y].oa,0);a("_getTrackerByName",$[y].u,51);a("_getTrackers",$[y].pa,130);a("_anonymizeIp",$[y].aa,16);a("_forceSSL",$[y].la,125);a("_getPlugin",Pc,120);a=function(a,c,d){T(U[y],a,c,d)};Qc("_getName",$a,58);Qc("_getAccount",Wa,64);Qc("_visitCode",Q,54);Qc("_getClientInfo",
ib,53,1);Qc("_getDetectTitle",lb,56,1);Qc("_getDetectFlash",jb,65,1);Qc("_getLocalGifPath",wb,57);Qc("_getServiceMode",xb,59);V("_setClientInfo",ib,66,2);V("_setAccount",Wa,3);V("_setNamespace",Ya,48);V("_setAllowLinker",fb,11,2);V("_setDetectFlash",jb,61,2);V("_setDetectTitle",lb,62,2);V("_setLocalGifPath",wb,46,0);V("_setLocalServerMode",xb,92,g,0);V("_setRemoteServerMode",xb,63,g,1);V("_setLocalRemoteServerMode",xb,47,g,2);V("_setSampleRate",vb,45,1);V("_setCampaignTrack",kb,36,2);V("_setAllowAnchor",
gb,7,2);V("_setCampNameKey",ob,41);V("_setCampContentKey",tb,38);V("_setCampIdKey",nb,39);V("_setCampMediumKey",rb,40);V("_setCampNOKey",ub,42);V("_setCampSourceKey",qb,43);V("_setCampTermKey",sb,44);V("_setCampCIdKey",pb,37);V("_setCookiePath",P,9,0);V("_setMaxCustomVariables",yb,0,1);V("_setVisitorCookieTimeout",cb,28,1);V("_setSessionCookieTimeout",db,26,1);V("_setCampaignCookieTimeout",eb,29,1);V("_setReferrerOverride",Jb,49);V("_setSiteSpeedSampleRate",Dc,132);a("_trackPageview",U[y].Fa,1);a("_trackEvent",
U[y].F,4);a("_trackPageLoadTime",U[y].Ea,100);a("_trackSocial",U[y].Ga,104);a("_trackTrans",U[y].Ia,18);a("_sendXEvent",U[y].t,78);a("_createEventTracker",U[y].ia,74);a("_getVersion",U[y].qa,60);a("_setDomainName",U[y].B,6);a("_setAllowHash",U[y].va,8);a("_getLinkerUrl",U[y].na,52);a("_link",U[y].link,101);a("_linkByPost",U[y].ua,102);a("_setTrans",U[y].za,20);a("_addTrans",U[y].$,21);a("_addItem",U[y].Y,19);a("_clearTrans",U[y].ea,105);a("_setTransactionDelim",U[y].Aa,82);a("_setCustomVar",U[y].wa,
10);a("_deleteCustomVar",U[y].ka,35);a("_getVisitorCustomVar",U[y].ra,50);a("_setXKey",U[y].Ca,83);a("_setXValue",U[y].Da,84);a("_getXKey",U[y].sa,76);a("_getXValue",U[y].ta,77);a("_clearXKey",U[y].fa,72);a("_clearXValue",U[y].ga,73);a("_createXObj",U[y].ja,75);a("_addIgnoredOrganic",U[y].W,15);a("_clearIgnoredOrganic",U[y].ba,97);a("_addIgnoredRef",U[y].X,31);a("_clearIgnoredRef",U[y].ca,32);a("_addOrganic",U[y].Z,14);a("_clearOrganic",U[y].da,70);a("_cookiePathCopy",U[y].ha,30);a("_get",U[y].ma,
106);a("_set",U[y].xa,107);a("_addEventListener",U[y].addEventListener,108);a("_removeEventListener",U[y].removeEventListener,109);a("_addDevId",U[y].V);a("_getPlugin",Pc,122);a("_setPageGroup",U[y].ya,126);a("_trackTiming",U[y].Ha,124);a("_initData",U[y].v,2);a("_setVar",U[y].Ba,22);V("_setSessionTimeout",db,27,3);V("_setCookieTimeout",eb,25,3);V("_setCookiePersistence",cb,24,1);a("_setAutoTrackOutbound",Ea,79);a("_setTrackOutboundSubdomains",Ea,81);a("_setHrefExamineLimit",Ea,80)};F=$[y];
F.oa=function(a,b){return this.r(a,g,b)};F.r=function(a,b,c){b&&I(23);c&&I(67);b==g&&(b="~"+M.U++);a=new U(b,a,c);M.C[b]=a;M.D[p](a);return a};F.u=function(a){a=a||"";return M.C[a]||M.r(g,a)};F.pa=function(){return M.D[ia](0)};F.aa=function(){this.w=h};F.la=function(){this.G=h};var Fe=function(a){if("prerender"==K.webkitVisibilityState)return l;a();return h};var M=new $;var Ge=W._gat;Ge&&Aa(Ge._getTracker)?M=Ge:W._gat=M;var Z=new Y;var He=function(){var a=W._gaq,b=l;if(a&&Aa(a[p])&&(b="[object Array]"==Object[y][w].call(Object(a)),!b)){Z=a;return}W._gaq=Z;b&&Z[p][xa](Z,a)};if(!Fe(He)){I(123);var Ie=l,Je=function(){!Ie&&Fe(He)&&(Ie=h,Ga(K,"webkitvisibilitychange",Je))};Fa(K,"webkitvisibilitychange",Je)};function Yc(a){var b=1,c=0,d;if(a){b=0;for(d=a[x]-1;0<=d;d--)c=a.charCodeAt(d),b=(b<<6&268435455)+c+(c<<14),c=b&266338304,b=0!=c?b^c>>21:b}return b};

module.exports = W._gaq;
});
