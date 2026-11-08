(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();const Za="187",Oi={ROTATE:0,DOLLY:1,PAN:2},Fi={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},sh=0,Fo=1,rh=2,os=1,ah=2,rs=3,di=0,qe=1,xn=2,Bi=0,ls=1,Oo=2,Bo=3,zo=4,oh=5,Ni=100,lh=101,ch=102,hh=103,uh=104,dh=200,fh=201,ph=202,mh=203,$l=204,Jl=205,_h=206,gh=207,xh=208,vh=209,Sh=210,Mh=211,yh=212,Eh=213,bh=214,ia=0,sa=1,ra=2,hs=3,aa=4,oa=5,la=6,ca=7,$a=0,Th=1,Ah=2,Un=0,Ql=1,jl=2,tc=3,ec=4,nc=5,ic=6,sc=7,rc=300,ki=301,us=302,Er=303,br=304,ha=1e3,Nn=1001,ua=1002,Pe=1003,wh=1004,Ss=1005,Ve=1006,Tr=1007,Kn=1008,$e=1009,ac=1010,oc=1011,ds=1012,Ja=1013,yn=1014,vn=1015,En=1016,Qa=1017,ja=1018,Gi=1020,lc=35902,cc=35899,hc=1021,uc=1022,Sn=1023,Qn=1026,Zn=1027,dc=1028,to=1029,fi=1030,eo=1031,no=1033,Zs=33776,$s=33777,Js=33778,Qs=33779,da=35840,fa=35841,pa=35842,ma=35843,_a=36196,ga=37492,xa=37496,va=37488,Sa=37489,ir=37490,Ma=37491,ya=37808,Ea=37809,ba=37810,Ta=37811,Aa=37812,wa=37813,Ra=37814,Ca=37815,Pa=37816,La=37817,Da=37818,Ia=37819,Na=37820,Ua=37821,Fa=36492,Oa=36494,Ba=36495,za=36283,ka=36284,sr=36285,Ga=36286,Rh=3200,Ha=0,Ch=1,qn="",Ne="srgb",rr="srgb-linear",ar="linear",ie="srgb",Ar=7680,Ph=519,Lh=512,Dh=513,Ih=514,fc=515,Nh=516,Uh=517,pc=518,mc=519,_c=35044,ko="300 es",dn=2e3,fs=2001;function Fh(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function or(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Oh(){const n=or("canvas");return n.style.display="block",n}const Go={};function lr(...n){const t="THREE."+n.shift();console.log(t,...n)}function gc(n){const t=n[0];if(typeof t=="string"&&t.startsWith("TSL:")){const e=n[1];e&&e.isStackTrace?n[0]+=" "+e.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function Bt(...n){n=gc(n);const t="THREE."+n.shift();{const e=n[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...n)}}function jt(...n){n=gc(n);const t="THREE."+n.shift();{const e=n[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...n)}}function js(...n){const t=n.join(" ");t in Go||(Go[t]=!0,Bt(...n))}function Bh(n,t,e){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(t,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:i()}}setTimeout(r,e)})}const zh={[ia]:ia,[ra]:la,[aa]:aa,[hs]:oa,[sa]:sa,[la]:ra,[ca]:ca,[oa]:hs};class ei{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){const i=this._listeners;return i===void 0?!1:i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){const i=this._listeners;if(i===void 0)return;const s=i[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const i=e[t.type];if(i!==void 0){t.target=this;const s=i.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}}const Oe=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],tr=Math.PI/180,Va=180/Math.PI;function _i(){const n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Oe[n&255]+Oe[n>>8&255]+Oe[n>>16&255]+Oe[n>>24&255]+"-"+Oe[t&255]+Oe[t>>8&255]+"-"+Oe[t>>16&15|64]+Oe[t>>24&255]+"-"+Oe[e&63|128]+Oe[e>>8&255]+"-"+Oe[e>>16&255]+Oe[e>>24&255]+Oe[i&255]+Oe[i>>8&255]+Oe[i>>16&255]+Oe[i>>24&255]).toLowerCase()}function Yt(n,t,e){return Math.max(t,Math.min(e,n))}function kh(n,t){return(n%t+t)%t}function wr(n,t,e){return(1-e)*n+e*t}function Gh(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function mr(n){switch(n.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function xc(n,t){if(t.constructor===Float32Array)return n;const e=mr(t);if(e===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(n/e,-1)}function vc(n,t){if(t.constructor===Float32Array)return n;const e=mr(t);if(e===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(n*e)}const Hh={DEG2RAD:tr},Mo=class Mo{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,i=this.y,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6],this.y=s[1]*e+s[4]*i+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Yt(this.x,t.x,e.x),this.y=Yt(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Yt(this.x,t,e),this.y=Yt(this.y,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Yt(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(Yt(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const i=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*i-a*s+t.x,this.y=r*s+a*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Mo.prototype.isVector2=!0;let Ct=Mo;class jn{constructor(t=0,e=0,i=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=s}static slerpFlat(t,e,i,s,r,a,o){let l=i[s+0],c=i[s+1],d=i[s+2],m=i[s+3],h=r[a+0],p=r[a+1],v=r[a+2],E=r[a+3];if(m!==E||l!==h||c!==p||d!==v){let f=l*h+c*p+d*v+m*E;f<0&&(h=-h,p=-p,v=-v,E=-E,f=-f);let u=1-o;if(f<.9995){const S=Math.acos(f),A=Math.sin(S);u=Math.sin(u*S)/A,o=Math.sin(o*S)/A,l=l*u+h*o,c=c*u+p*o,d=d*u+v*o,m=m*u+E*o}else{l=l*u+h*o,c=c*u+p*o,d=d*u+v*o,m=m*u+E*o;const S=1/Math.sqrt(l*l+c*c+d*d+m*m);l*=S,c*=S,d*=S,m*=S}}t[e]=l,t[e+1]=c,t[e+2]=d,t[e+3]=m}static multiplyQuaternionsFlat(t,e,i,s,r,a){const o=i[s],l=i[s+1],c=i[s+2],d=i[s+3],m=r[a],h=r[a+1],p=r[a+2],v=r[a+3];return t[e]=o*v+d*m+l*p-c*h,t[e+1]=l*v+d*h+c*m-o*p,t[e+2]=c*v+d*p+o*h-l*m,t[e+3]=d*v-o*m-l*h-c*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,s){return this._x=t,this._y=e,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const i=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(i/2),d=o(s/2),m=o(r/2),h=l(i/2),p=l(s/2),v=l(r/2);switch(a){case"XYZ":this._x=h*d*m+c*p*v,this._y=c*p*m-h*d*v,this._z=c*d*v+h*p*m,this._w=c*d*m-h*p*v;break;case"YXZ":this._x=h*d*m+c*p*v,this._y=c*p*m-h*d*v,this._z=c*d*v-h*p*m,this._w=c*d*m+h*p*v;break;case"ZXY":this._x=h*d*m-c*p*v,this._y=c*p*m+h*d*v,this._z=c*d*v+h*p*m,this._w=c*d*m-h*p*v;break;case"ZYX":this._x=h*d*m-c*p*v,this._y=c*p*m+h*d*v,this._z=c*d*v-h*p*m,this._w=c*d*m+h*p*v;break;case"YZX":this._x=h*d*m+c*p*v,this._y=c*p*m+h*d*v,this._z=c*d*v-h*p*m,this._w=c*d*m-h*p*v;break;case"XZY":this._x=h*d*m-c*p*v,this._y=c*p*m-h*d*v,this._z=c*d*v+h*p*m,this._w=c*d*m+h*p*v;break;default:Bt("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const i=e/2,s=Math.sin(i);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,i=e[0],s=e[4],r=e[8],a=e[1],o=e[5],l=e[9],c=e[2],d=e[6],m=e[10],h=i+o+m;if(h>0){const p=.5/Math.sqrt(h+1);this._w=.25/p,this._x=(d-l)*p,this._y=(r-c)*p,this._z=(a-s)*p}else if(i>o&&i>m){const p=2*Math.sqrt(1+i-o-m);this._w=(d-l)/p,this._x=.25*p,this._y=(s+a)/p,this._z=(r+c)/p}else if(o>m){const p=2*Math.sqrt(1+o-i-m);this._w=(r-c)/p,this._x=(s+a)/p,this._y=.25*p,this._z=(l+d)/p}else{const p=2*Math.sqrt(1+m-i-o);this._w=(a-s)/p,this._x=(r+c)/p,this._y=(l+d)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<1e-8?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Yt(this.dot(t),-1,1)))}rotateTowards(t,e){const i=this.angleTo(t);if(i===0)return this;const s=Math.min(1,e/i);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const i=t._x,s=t._y,r=t._z,a=t._w,o=e._x,l=e._y,c=e._z,d=e._w;return this._x=i*d+a*o+s*c-r*l,this._y=s*d+a*l+r*o-i*c,this._z=r*d+a*c+i*l-s*o,this._w=a*d-i*o-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){let i=t._x,s=t._y,r=t._z,a=t._w,o=this.dot(t);o<0&&(i=-i,s=-s,r=-r,a=-a,o=-o);let l=1-e;if(o<.9995){const c=Math.acos(o),d=Math.sin(c);l=Math.sin(l*c)/d,e=Math.sin(e*c)/d,this._x=this._x*l+i*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+a*e,this._onChangeCallback()}else this._x=this._x*l+i*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+a*e,this.normalize();return this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const yo=class yo{constructor(t=0,e=0,i=0){this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Ho.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Ho.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6]*s,this.y=r[1]*e+r[4]*i+r[7]*s,this.z=r[2]*e+r[5]*i+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,i=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*i+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*i+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*i+r[10]*s+r[14])*a,this}applyQuaternion(t){const e=this.x,i=this.y,s=this.z,r=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*s-o*i),d=2*(o*e-r*s),m=2*(r*i-a*e);return this.x=e+l*c+a*m-o*d,this.y=i+l*d+o*c-r*m,this.z=s+l*m+r*d-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*i+r[8]*s,this.y=r[1]*e+r[5]*i+r[9]*s,this.z=r[2]*e+r[6]*i+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Yt(this.x,t.x,e.x),this.y=Yt(this.y,t.y,e.y),this.z=Yt(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Yt(this.x,t,e),this.y=Yt(this.y,t,e),this.z=Yt(this.z,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Yt(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const i=t.x,s=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=s*l-r*o,this.y=r*a-i*l,this.z=i*o-s*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return Rr.copy(this).projectOnVector(t),this.sub(Rr)}reflect(t){return this.sub(Rr.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(Yt(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y,s=this.z-t.z;return e*e+i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){const s=Math.sin(e)*t;return this.x=s*Math.sin(i),this.y=Math.cos(e)*t,this.z=s*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};yo.prototype.isVector3=!0;let U=yo;const Rr=new U,Ho=new jn,Eo=class Eo{constructor(t,e,i,s,r,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,a,o,l,c)}set(t,e,i,s,r,a,o,l,c){const d=this.elements;return d[0]=t,d[1]=s,d[2]=o,d[3]=e,d[4]=r,d[5]=l,d[6]=i,d[7]=a,d[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,s=e.elements,r=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],d=i[4],m=i[7],h=i[2],p=i[5],v=i[8],E=s[0],f=s[3],u=s[6],S=s[1],A=s[4],y=s[7],w=s[2],b=s[5],_=s[8];return r[0]=a*E+o*S+l*w,r[3]=a*f+o*A+l*b,r[6]=a*u+o*y+l*_,r[1]=c*E+d*S+m*w,r[4]=c*f+d*A+m*b,r[7]=c*u+d*y+m*_,r[2]=h*E+p*S+v*w,r[5]=h*f+p*A+v*b,r[8]=h*u+p*y+v*_,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],d=t[8];return e*a*d-e*o*c-i*r*d+i*o*l+s*r*c-s*a*l}invert(){const t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],d=t[8],m=d*a-o*c,h=o*l-d*r,p=c*r-a*l,v=e*m+i*h+s*p;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const E=1/v;return t[0]=m*E,t[1]=(s*c-d*i)*E,t[2]=(o*i-s*a)*E,t[3]=h*E,t[4]=(d*e-s*l)*E,t[5]=(s*r-o*e)*E,t[6]=p*E,t[7]=(i*l-c*e)*E,t[8]=(a*e-i*r)*E,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,s,r,a,o){const l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*a+c*o)+a+t,-s*c,s*l,-s*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return js("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Cr.makeScale(t,e)),this}rotate(t){return js("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Cr.makeRotation(-t)),this}translate(t,e){return js("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Cr.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,i=t.elements;for(let s=0;s<9;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}};Eo.prototype.isMatrix3=!0;let Gt=Eo;const Cr=new Gt,Vo=new Gt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Wo=new Gt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Vh(){const n={enabled:!0,workingColorSpace:rr,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===ie&&(s.r=Fn(s.r),s.g=Fn(s.g),s.b=Fn(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===ie&&(s.r=zi(s.r),s.g=zi(s.g),s.b=zi(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===qn?ar:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[a].fromXYZ).multiply(this.spaces[r].toXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[rr]:{primaries:t,whitePoint:i,transfer:ar,toXYZ:Vo,fromXYZ:Wo,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Ne},outputColorSpaceConfig:{drawingBufferColorSpace:Ne}},[Ne]:{primaries:t,whitePoint:i,transfer:ie,toXYZ:Vo,fromXYZ:Wo,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Ne}}}),n}const Jt=Vh();function Fn(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function zi(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let gi;class Wh{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let i;if(t instanceof HTMLCanvasElement)i=t;else{gi===void 0&&(gi=or("canvas")),gi.width=t.width,gi.height=t.height;const s=gi.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),i=gi}return i.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=or("canvas");e.width=t.width,e.height=t.height;const i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);const s=i.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Fn(r[a]/255)*255;return i.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(Fn(e[i]/255)*255):e[i]=Fn(e[i]);return{data:e,width:t.width,height:t.height}}else return Bt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Xh=0;class io{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Xh++}),this.uuid=_i(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width||0,e.height||0,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Pr(s[a].image)):r.push(Pr(s[a]))}else r=Pr(s);i.url=r}return e||(t.images[this.uuid]=i),i}}function Pr(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Wh.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(Bt("Texture: Unable to serialize Texture."),{})}let Yh=0;const Lr=new U;class ze extends ei{constructor(t=ze.DEFAULT_IMAGE,e=ze.DEFAULT_MAPPING,i=Nn,s=Nn,r=Ve,a=Kn,o=Sn,l=$e,c=ze.DEFAULT_ANISOTROPY,d=qn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Yh++}),this.uuid=_i(),this.name="",this.source=new io(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Ct(0,0),this.repeat=new Ct(1,1),this.center=new Ct(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Gt,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(Lr).x}get height(){return this.source.getSize(Lr).y}get depth(){return this.source.getSize(Lr).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.mipmapsAutoUpdate=t.mipmapsAutoUpdate,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isPMREMTexture=t.isPMREMTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const e in t){const i=t[e];if(i===void 0){Bt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){Bt(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==rc)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case ha:t.x=t.x-Math.floor(t.x);break;case Nn:t.x=t.x<0?0:1;break;case ua:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case ha:t.y=t.y-Math.floor(t.y);break;case Nn:t.y=t.y<0?0:1;break;case ua:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}ze.DEFAULT_IMAGE=null;ze.DEFAULT_MAPPING=rc;ze.DEFAULT_ANISOTROPY=1;const bo=class bo{constructor(t=0,e=0,i=0,s=1){this.x=t,this.y=e,this.z=i,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,s){return this.x=t,this.y=e,this.z=i,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,i=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*i+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*i+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*i+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*i+a[11]*s+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,s,r;const l=t.elements,c=l[0],d=l[4],m=l[8],h=l[1],p=l[5],v=l[9],E=l[2],f=l[6],u=l[10];if(Math.abs(d-h)<.01&&Math.abs(m-E)<.01&&Math.abs(v-f)<.01){if(Math.abs(d+h)<.1&&Math.abs(m+E)<.1&&Math.abs(v+f)<.1&&Math.abs(c+p+u-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const A=(c+1)/2,y=(p+1)/2,w=(u+1)/2,b=(d+h)/4,_=(m+E)/4,M=(v+f)/4;return A>y&&A>w?A<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(A),s=b/i,r=_/i):y>w?y<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(y),i=b/s,r=M/s):w<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(w),i=_/r,s=M/r),this.set(i,s,r,e),this}let S=Math.sqrt((f-v)*(f-v)+(m-E)*(m-E)+(h-d)*(h-d));return Math.abs(S)<.001&&(S=1),this.x=(f-v)/S,this.y=(m-E)/S,this.z=(h-d)/S,this.w=Math.acos((c+p+u-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Yt(this.x,t.x,e.x),this.y=Yt(this.y,t.y,e.y),this.z=Yt(this.z,t.z,e.z),this.w=Yt(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Yt(this.x,t,e),this.y=Yt(this.y,t,e),this.z=Yt(this.z,t,e),this.w=Yt(this.w,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Yt(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};bo.prototype.isVector4=!0;let ge=bo;class qh extends ei{constructor(t=1,e=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ve,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=i.depth,this.scissor=new ge(0,0,t,e),this.scissorTest=!1,this.viewport=new ge(0,0,t,e),this.textures=[];const s=i.count;for(let r=0;r<s;r++)this.textures[r]=new ze({width:t,height:e,depth:i.depth}),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(t={}){const e={minFilter:Ve,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.mipmapsAutoUpdate!==void 0&&(e.mipmapsAutoUpdate=t.mipmapsAutoUpdate),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=i,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,i=t.textures.length;e<i;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const s=Object.assign({},t.textures[e].image);this.textures[e].source=new io(s)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){const e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;else this.depthTexture=null;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Mn extends qh{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}}class Sc extends ze{constructor(t=null,e=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=Pe,this.minFilter=Pe,this.wrapR=Nn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Kh extends ze{constructor(t=null,e=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=Pe,this.minFilter=Pe,this.wrapR=Nn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}}const pr=class pr{constructor(t,e,i,s,r,a,o,l,c,d,m,h,p,v,E,f){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,a,o,l,c,d,m,h,p,v,E,f)}set(t,e,i,s,r,a,o,l,c,d,m,h,p,v,E,f){const u=this.elements;return u[0]=t,u[4]=e,u[8]=i,u[12]=s,u[1]=r,u[5]=a,u[9]=o,u[13]=l,u[2]=c,u[6]=d,u[10]=m,u[14]=h,u[3]=p,u[7]=v,u[11]=E,u[15]=f,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new pr().fromArray(this.elements)}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){const e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),i.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();const e=this.elements,i=t.elements,s=1/xi.setFromMatrixColumn(t,0).length(),r=1/xi.setFromMatrixColumn(t,1).length(),a=1/xi.setFromMatrixColumn(t,2).length();return e[0]=i[0]*s,e[1]=i[1]*s,e[2]=i[2]*s,e[3]=0,e[4]=i[4]*r,e[5]=i[5]*r,e[6]=i[6]*r,e[7]=0,e[8]=i[8]*a,e[9]=i[9]*a,e[10]=i[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,i=t.x,s=t.y,r=t.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(s),c=Math.sin(s),d=Math.cos(r),m=Math.sin(r);if(t.order==="XYZ"){const h=a*d,p=a*m,v=o*d,E=o*m;e[0]=l*d,e[4]=-l*m,e[8]=c,e[1]=p+v*c,e[5]=h-E*c,e[9]=-o*l,e[2]=E-h*c,e[6]=v+p*c,e[10]=a*l}else if(t.order==="YXZ"){const h=l*d,p=l*m,v=c*d,E=c*m;e[0]=h+E*o,e[4]=v*o-p,e[8]=a*c,e[1]=a*m,e[5]=a*d,e[9]=-o,e[2]=p*o-v,e[6]=E+h*o,e[10]=a*l}else if(t.order==="ZXY"){const h=l*d,p=l*m,v=c*d,E=c*m;e[0]=h-E*o,e[4]=-a*m,e[8]=v+p*o,e[1]=p+v*o,e[5]=a*d,e[9]=E-h*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){const h=a*d,p=a*m,v=o*d,E=o*m;e[0]=l*d,e[4]=v*c-p,e[8]=h*c+E,e[1]=l*m,e[5]=E*c+h,e[9]=p*c-v,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){const h=a*l,p=a*c,v=o*l,E=o*c;e[0]=l*d,e[4]=E-h*m,e[8]=v*m+p,e[1]=m,e[5]=a*d,e[9]=-o*d,e[2]=-c*d,e[6]=p*m+v,e[10]=h-E*m}else if(t.order==="XZY"){const h=a*l,p=a*c,v=o*l,E=o*c;e[0]=l*d,e[4]=-m,e[8]=c*d,e[1]=h*m+E,e[5]=a*d,e[9]=p*m-v,e[2]=v*m-p,e[6]=o*d,e[10]=E*m+h}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Zh,t,$h)}lookAt(t,e,i){const s=this.elements;return Ke.subVectors(t,e),Ke.lengthSq()===0&&(Ke.z=1),Ke.normalize(),kn.crossVectors(i,Ke),kn.lengthSq()===0&&(Math.abs(i.z)===1?Ke.x+=1e-4:Ke.z+=1e-4,Ke.normalize(),kn.crossVectors(i,Ke)),kn.normalize(),Ms.crossVectors(Ke,kn),s[0]=kn.x,s[4]=Ms.x,s[8]=Ke.x,s[1]=kn.y,s[5]=Ms.y,s[9]=Ke.y,s[2]=kn.z,s[6]=Ms.z,s[10]=Ke.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,s=e.elements,r=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],d=i[1],m=i[5],h=i[9],p=i[13],v=i[2],E=i[6],f=i[10],u=i[14],S=i[3],A=i[7],y=i[11],w=i[15],b=s[0],_=s[4],M=s[8],D=s[12],C=s[1],N=s[5],F=s[9],W=s[13],P=s[2],H=s[6],q=s[10],V=s[14],et=s[3],X=s[7],j=s[11],tt=s[15];return r[0]=a*b+o*C+l*P+c*et,r[4]=a*_+o*N+l*H+c*X,r[8]=a*M+o*F+l*q+c*j,r[12]=a*D+o*W+l*V+c*tt,r[1]=d*b+m*C+h*P+p*et,r[5]=d*_+m*N+h*H+p*X,r[9]=d*M+m*F+h*q+p*j,r[13]=d*D+m*W+h*V+p*tt,r[2]=v*b+E*C+f*P+u*et,r[6]=v*_+E*N+f*H+u*X,r[10]=v*M+E*F+f*q+u*j,r[14]=v*D+E*W+f*V+u*tt,r[3]=S*b+A*C+y*P+w*et,r[7]=S*_+A*N+y*H+w*X,r[11]=S*M+A*F+y*q+w*j,r[15]=S*D+A*W+y*V+w*tt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[4],s=t[8],r=t[12],a=t[1],o=t[5],l=t[9],c=t[13],d=t[2],m=t[6],h=t[10],p=t[14],v=t[3],E=t[7],f=t[11],u=t[15],S=l*p-c*h,A=o*p-c*m,y=o*h-l*m,w=a*p-c*d,b=a*h-l*d,_=a*m-o*d;return e*(E*S-f*A+u*y)-i*(v*S-f*w+u*b)+s*(v*A-E*w+u*_)-r*(v*y-E*b+f*_)}determinantAffine(){const t=this.elements,e=t[0],i=t[4],s=t[8],r=t[1],a=t[5],o=t[9],l=t[2],c=t[6],d=t[10];return e*(a*d-o*c)-i*(r*d-o*l)+s*(r*c-a*l)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=i),this}invert(){const t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],d=t[8],m=t[9],h=t[10],p=t[11],v=t[12],E=t[13],f=t[14],u=t[15],S=e*o-i*a,A=e*l-s*a,y=e*c-r*a,w=i*l-s*o,b=i*c-r*o,_=s*c-r*l,M=d*E-m*v,D=d*f-h*v,C=d*u-p*v,N=m*f-h*E,F=m*u-p*E,W=h*u-p*f,P=S*W-A*F+y*N+w*C-b*D+_*M;if(P===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const H=1/P;return t[0]=(o*W-l*F+c*N)*H,t[1]=(s*F-i*W-r*N)*H,t[2]=(E*_-f*b+u*w)*H,t[3]=(h*b-m*_-p*w)*H,t[4]=(l*C-a*W-c*D)*H,t[5]=(e*W-s*C+r*D)*H,t[6]=(f*y-v*_-u*A)*H,t[7]=(d*_-h*y+p*A)*H,t[8]=(a*F-o*C+c*M)*H,t[9]=(i*C-e*F-r*M)*H,t[10]=(v*b-E*y+u*S)*H,t[11]=(m*y-d*b-p*S)*H,t[12]=(o*D-a*N-l*M)*H,t[13]=(e*N-i*D+s*M)*H,t[14]=(E*A-v*w-f*S)*H,t[15]=(d*w-m*A+h*S)*H,this}scale(t){const e=this.elements,i=t.x,s=t.y,r=t.z;return e[0]*=i,e[4]*=s,e[8]*=r,e[1]*=i,e[5]*=s,e[9]*=r,e[2]*=i,e[6]*=s,e[10]*=r,e[3]*=i,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,s))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const i=Math.cos(e),s=Math.sin(e),r=1-i,a=t.x,o=t.y,l=t.z,c=r*a,d=r*o;return this.set(c*a+i,c*o-s*l,c*l+s*o,0,c*o+s*l,d*o+i,d*l-s*a,0,c*l-s*o,d*l+s*a,r*l*l+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,s,r,a){return this.set(1,i,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,i){const s=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,c=r+r,d=a+a,m=o+o,h=r*c,p=r*d,v=r*m,E=a*d,f=a*m,u=o*m,S=l*c,A=l*d,y=l*m,w=i.x,b=i.y,_=i.z;return s[0]=(1-(E+u))*w,s[1]=(p+y)*w,s[2]=(v-A)*w,s[3]=0,s[4]=(p-y)*b,s[5]=(1-(h+u))*b,s[6]=(f+S)*b,s[7]=0,s[8]=(v+A)*_,s[9]=(f-S)*_,s[10]=(1-(h+E))*_,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,i){const s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];const r=this.determinantAffine();if(r===0)return i.set(1,1,1),e.identity(),this;let a=xi.set(s[0],s[1],s[2]).length();const o=xi.set(s[4],s[5],s[6]).length(),l=xi.set(s[8],s[9],s[10]).length();r<0&&(a=-a),ln.copy(this);const c=1/a,d=1/o,m=1/l;return ln.elements[0]*=c,ln.elements[1]*=c,ln.elements[2]*=c,ln.elements[4]*=d,ln.elements[5]*=d,ln.elements[6]*=d,ln.elements[8]*=m,ln.elements[9]*=m,ln.elements[10]*=m,e.setFromRotationMatrix(ln),i.x=a,i.y=o,i.z=l,this}makePerspective(t,e,i,s,r,a,o=dn,l=!1){const c=this.elements,d=2*r/(e-t),m=2*r/(i-s),h=(e+t)/(e-t),p=(i+s)/(i-s);let v,E;if(l)v=r/(a-r),E=a*r/(a-r);else if(o===dn)v=-(a+r)/(a-r),E=-2*a*r/(a-r);else if(o===fs)v=-a/(a-r),E=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=d,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=m,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=v,c[14]=E,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,i,s,r,a,o=dn,l=!1){const c=this.elements,d=2/(e-t),m=2/(i-s),h=-(e+t)/(e-t),p=-(i+s)/(i-s);let v,E;if(l)v=1/(a-r),E=a/(a-r);else if(o===dn)v=-2/(a-r),E=-(a+r)/(a-r);else if(o===fs)v=-1/(a-r),E=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=d,c[4]=0,c[8]=0,c[12]=h,c[1]=0,c[5]=m,c[9]=0,c[13]=p,c[2]=0,c[6]=0,c[10]=v,c[14]=E,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,i=t.elements;for(let s=0;s<16;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}};pr.prototype.isMatrix4=!0;let he=pr;const xi=new U,ln=new he,Zh=new U(0,0,0),$h=new U(1,1,1),kn=new U,Ms=new U,Ke=new U,Xo=new he,Yo=new jn;class ti{constructor(t=0,e=0,i=0,s=ti.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,s=this._order){return this._x=t,this._y=e,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){const s=t.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],d=s[9],m=s[2],h=s[6],p=s[10];switch(e){case"XYZ":this._y=Math.asin(Yt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-d,p),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Yt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-m,r),this._z=0);break;case"ZXY":this._x=Math.asin(Yt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-m,p),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Yt(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(h,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Yt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-d,c),this._y=Math.atan2(-m,r)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-Yt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-d,p),this._y=0);break;default:Bt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return Xo.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Xo,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Yo.setFromEuler(this),this.setFromQuaternion(Yo,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ti.DEFAULT_ORDER="XYZ";class so{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Jh=0;const qo=new U,vi=new jn,Tn=new he,ys=new U,$i=new U,Qh=new U,jh=new jn,Ko=new U(1,0,0),Zo=new U(0,1,0),$o=new U(0,0,1),Jo={type:"added"},tu={type:"removed"},Si={type:"childadded",child:null},Dr={type:"childremoved",child:null};class Le extends ei{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Jh++}),this.uuid=_i(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Le.DEFAULT_UP.clone();const t=new U,e=new ti,i=new jn,s=new U(1,1,1);function r(){i.setFromEuler(e,!1)}function a(){e.setFromQuaternion(i,void 0,!1)}e._onChange(r),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new he},normalMatrix:{value:new Gt}}),this.matrix=new he,this.matrixWorld=new he,this.matrixAutoUpdate=Le.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Le.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new so,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return vi.setFromAxisAngle(t,e),this.quaternion.multiply(vi),this}rotateOnWorldAxis(t,e){return vi.setFromAxisAngle(t,e),this.quaternion.premultiply(vi),this}rotateX(t){return this.rotateOnAxis(Ko,t)}rotateY(t){return this.rotateOnAxis(Zo,t)}rotateZ(t){return this.rotateOnAxis($o,t)}translateOnAxis(t,e){return qo.copy(t).applyQuaternion(this.quaternion),this.position.add(qo.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Ko,t)}translateY(t){return this.translateOnAxis(Zo,t)}translateZ(t){return this.translateOnAxis($o,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Tn.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?ys.copy(t):ys.set(t,e,i);const s=this.parent;this.updateWorldMatrix(!0,!1),$i.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Tn.lookAt($i,ys,this.up):Tn.lookAt(ys,$i,this.up),this.quaternion.setFromRotationMatrix(Tn),s&&(Tn.extractRotation(s.matrixWorld),vi.setFromRotationMatrix(Tn),this.quaternion.premultiply(vi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(jt("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Jo),Si.child=t,this.dispatchEvent(Si),Si.child=null):jt("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(tu),Dr.child=t,this.dispatchEvent(Dr),Dr.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Tn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Tn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Tn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Jo),Si.child=t,this.dispatchEvent(Si),Si.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,s=this.children.length;i<s;i++){const a=this.children[i].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose($i,t,Qh),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose($i,jh,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(t){t(this);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const t=this.pivot;if(t!==null){const e=t.x,i=t.y,s=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*i-r[8]*s,r[13]+=i-r[1]*e-r[5]*i-r[9]*s,r[14]+=s-r[2]*e-r[6]*i-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e,i=!1){const s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),e===!0){const r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,i)}}toJSON(t){const e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,d=l.length;c<d;c++){const m=l[c];r(t.shapes,m)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(t.materials,this.material[l]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];s.animations.push(r(t.animations,l))}}if(e){const o=a(t.geometries),l=a(t.materials),c=a(t.textures),d=a(t.images),m=a(t.shapes),h=a(t.skeletons),p=a(t.animations),v=a(t.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),d.length>0&&(i.images=d),m.length>0&&(i.shapes=m),h.length>0&&(i.skeletons=h),p.length>0&&(i.animations=p),v.length>0&&(i.nodes=v)}return i.object=s,i;function a(o){const l=[];for(const c in o){const d=o[c];delete d.metadata,l.push(d)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){const s=t.children[i];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}Le.DEFAULT_UP=new U(0,1,0);Le.DEFAULT_MATRIX_AUTO_UPDATE=!0;Le.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class pe extends Le{constructor(){super(),this.isGroup=!0,this.type="Group"}}const eu={type:"move"};class Ir{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new pe,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new pe,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new U,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new U),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new pe,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new U,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new U,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let s=null,r=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(const E of t.hand.values()){const f=e.getJointPose(E,i),u=this._getHandJoint(c,E);f!==null&&(u.matrix.fromArray(f.transform.matrix),u.matrix.decompose(u.position,u.quaternion,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=f.radius),u.visible=f!==null}const d=c.joints["index-finger-tip"],m=c.joints["thumb-tip"],h=d.position.distanceTo(m.position),p=.02,v=.005;c.inputState.pinching&&h>p+v?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&h<=p-v&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.quaternion,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));o!==null&&(s=e.getPose(t.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(eu)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const i=new pe;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}}const Mc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Gn={h:0,s:0,l:0},Es={h:0,s:0,l:0};function Nr(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}class Zt{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Ne){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Jt.colorSpaceToWorking(this,e),this}setRGB(t,e,i,s=Jt.workingColorSpace){return this.r=t,this.g=e,this.b=i,Jt.colorSpaceToWorking(this,s),this}setHSL(t,e,i,s=Jt.workingColorSpace){if(t=kh(t,1),e=Yt(e,0,1),i=Yt(i,0,1),e===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+e):i+e-i*e,a=2*i-r;this.r=Nr(a,r,t+1/3),this.g=Nr(a,r,t),this.b=Nr(a,r,t-1/3)}return Jt.colorSpaceToWorking(this,s),this}setStyle(t,e=Ne){function i(r){r!==void 0&&parseFloat(r)<1&&Bt("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(100,parseFloat(r[1]))/100,Math.min(100,parseFloat(r[2]))/100,Math.min(100,parseFloat(r[3]))/100,e);break;case"hsl":case"hsla":if(r=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:Bt("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);Bt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Ne){const i=Mc[t.toLowerCase()];return i!==void 0?this.setHex(i,e):Bt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Fn(t.r),this.g=Fn(t.g),this.b=Fn(t.b),this}copyLinearToSRGB(t){return this.r=zi(t.r),this.g=zi(t.g),this.b=zi(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ne){return Jt.workingToColorSpace(Be.copy(this),t),Math.round(Yt(Be.r*255,0,255))*65536+Math.round(Yt(Be.g*255,0,255))*256+Math.round(Yt(Be.b*255,0,255))}getHexString(t=Ne){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Jt.workingColorSpace){Jt.workingToColorSpace(Be.copy(this),e);const i=Be.r,s=Be.g,r=Be.b,a=Math.max(i,s,r),o=Math.min(i,s,r);let l,c;const d=(o+a)/2;if(o===a)l=0,c=0;else{const m=a-o;switch(c=d<=.5?m/(a+o):m/(2-a-o),a){case i:l=(s-r)/m+(s<r?6:0);break;case s:l=(r-i)/m+2;break;case r:l=(i-s)/m+4;break}l/=6}return t.h=l,t.s=c,t.l=d,t}getRGB(t,e=Jt.workingColorSpace){return Jt.workingToColorSpace(Be.copy(this),e),t.r=Be.r,t.g=Be.g,t.b=Be.b,t}getStyle(t=Ne){Jt.workingToColorSpace(Be.copy(this),t);const e=Be.r,i=Be.g,s=Be.b;return t!==Ne?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(t,e,i){return this.getHSL(Gn),this.setHSL(Gn.h+t,Gn.s+e,Gn.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(Gn),t.getHSL(Es);const i=wr(Gn.h,Es.h,e),s=wr(Gn.s,Es.s,e),r=wr(Gn.l,Es.l,e);return this.setHSL(i,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,i=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*i+r[6]*s,this.g=r[1]*e+r[4]*i+r[7]*s,this.b=r[2]*e+r[5]*i+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Be=new Zt;Zt.NAMES=Mc;class nu extends Le{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ti,this.environmentIntensity=1,this.environmentRotation=new ti,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),this.background=t.background!==null?t.background.clone():null,this.environment=t.environment!==null?t.environment.clone():null,this.fog=t.fog!==null?t.fog.clone():null,this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),this.overrideMaterial=t.overrideMaterial!==null?t.overrideMaterial.clone():null,this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}}const cn=new U,An=new U,Ur=new U,wn=new U,Mi=new U,yi=new U,Qo=new U,Fr=new U,Or=new U,Br=new U,zr=new ge,kr=new ge,Gr=new ge;class rn{constructor(t=new U,e=new U,i=new U){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,s){s.subVectors(i,e),cn.subVectors(t,e),s.cross(cn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,i,s,r){cn.subVectors(s,e),An.subVectors(i,e),Ur.subVectors(t,e);const a=cn.dot(cn),o=cn.dot(An),l=cn.dot(Ur),c=An.dot(An),d=An.dot(Ur),m=a*c-o*o;if(m===0)return r.set(0,0,0),null;const h=1/m,p=(c*l-o*d)*h,v=(a*d-o*l)*h;return r.set(1-p-v,v,p)}static containsPoint(t,e,i,s){return this.getBarycoord(t,e,i,s,wn)===null?!1:wn.x>=0&&wn.y>=0&&wn.x+wn.y<=1}static getInterpolation(t,e,i,s,r,a,o,l){return this.getBarycoord(t,e,i,s,wn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,wn.x),l.addScaledVector(a,wn.y),l.addScaledVector(o,wn.z),l)}static getInterpolatedAttribute(t,e,i,s,r,a){return zr.setScalar(0),kr.setScalar(0),Gr.setScalar(0),zr.fromBufferAttribute(t,e),kr.fromBufferAttribute(t,i),Gr.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(zr,r.x),a.addScaledVector(kr,r.y),a.addScaledVector(Gr,r.z),a}static isFrontFacing(t,e,i,s){return cn.subVectors(i,e),An.subVectors(t,e),cn.cross(An).dot(s)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,s){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,i,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return cn.subVectors(this.c,this.b),An.subVectors(this.a,this.b),cn.cross(An).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return rn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return rn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,s,r){return rn.getInterpolation(t,this.a,this.b,this.c,e,i,s,r)}containsPoint(t){return rn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return rn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const i=this.a,s=this.b,r=this.c;let a,o;Mi.subVectors(s,i),yi.subVectors(r,i),Fr.subVectors(t,i);const l=Mi.dot(Fr),c=yi.dot(Fr);if(l<=0&&c<=0)return e.copy(i);Or.subVectors(t,s);const d=Mi.dot(Or),m=yi.dot(Or);if(d>=0&&m<=d)return e.copy(s);const h=l*m-d*c;if(h<=0&&l>=0&&d<=0&&l-d>0)return a=l/(l-d),e.copy(i).addScaledVector(Mi,a);Br.subVectors(t,r);const p=Mi.dot(Br),v=yi.dot(Br);if(v>=0&&p<=v)return e.copy(r);const E=p*c-l*v;if(E<=0&&c>=0&&v<=0)return o=c/(c-v),e.copy(i).addScaledVector(yi,o);const f=d*v-p*m;if(f<=0&&m-d>=0&&p-v>=0)return Qo.subVectors(r,s),o=(m-d)/(m-d+(p-v)),e.copy(s).addScaledVector(Qo,o);const u=1/(f+E+h);return a=E*u,o=h*u,e.copy(i).addScaledVector(Mi,a).addScaledVector(yi,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}class ms{constructor(t=new U(1/0,1/0,1/0),e=new U(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(hn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(hn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const i=hn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const i=t.geometry;if(i!==void 0){const r=i.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0&&t.isBatchedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,hn):hn.fromBufferAttribute(r,a),hn.applyMatrix4(t.matrixWorld),this.expandByPoint(hn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),bs.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),bs.copy(i.boundingBox)),bs.applyMatrix4(t.matrixWorld),this.union(bs)}const s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,hn),hn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Ji),Ts.subVectors(this.max,Ji),Ei.subVectors(t.a,Ji),bi.subVectors(t.b,Ji),Ti.subVectors(t.c,Ji),Hn.subVectors(bi,Ei),Vn.subVectors(Ti,bi),ai.subVectors(Ei,Ti);let e=[0,-Hn.z,Hn.y,0,-Vn.z,Vn.y,0,-ai.z,ai.y,Hn.z,0,-Hn.x,Vn.z,0,-Vn.x,ai.z,0,-ai.x,-Hn.y,Hn.x,0,-Vn.y,Vn.x,0,-ai.y,ai.x,0];return!Hr(e,Ei,bi,Ti,Ts)||(e=[1,0,0,0,1,0,0,0,1],!Hr(e,Ei,bi,Ti,Ts))?!1:(As.crossVectors(Hn,Vn),e=[As.x,As.y,As.z],Hr(e,Ei,bi,Ti,Ts))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,hn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(hn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Rn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Rn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Rn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Rn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Rn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Rn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Rn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Rn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Rn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const Rn=[new U,new U,new U,new U,new U,new U,new U,new U],hn=new U,bs=new ms,Ei=new U,bi=new U,Ti=new U,Hn=new U,Vn=new U,ai=new U,Ji=new U,Ts=new U,As=new U,oi=new U;function Hr(n,t,e,i,s){for(let r=0,a=n.length-3;r<=a;r+=3){oi.fromArray(n,r);const o=s.x*Math.abs(oi.x)+s.y*Math.abs(oi.y)+s.z*Math.abs(oi.z),l=t.dot(oi),c=e.dot(oi),d=i.dot(oi);if(Math.max(-Math.max(l,c,d),Math.min(l,c,d))>o)return!1}return!0}const Se=new U,ws=new Ct;let iu=0;class $n extends ei{constructor(t,e,i=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:iu++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=_c,this.updateRanges=[],this.gpuType=vn,this.version=0,this._normalizationScale=t!==void 0?mr(t):void 0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this._normalizationScale=t._normalizationScale,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[i+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)ws.fromBufferAttribute(this,e),ws.applyMatrix3(t),this.setXY(e,ws.x,ws.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)Se.fromBufferAttribute(this,e),Se.applyMatrix3(t),this.setXYZ(e,Se.x,Se.y,Se.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)Se.fromBufferAttribute(this,e),Se.applyMatrix4(t),this.setXYZ(e,Se.x,Se.y,Se.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)Se.fromBufferAttribute(this,e),Se.applyNormalMatrix(t),this.setXYZ(e,Se.x,Se.y,Se.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)Se.fromBufferAttribute(this,e),Se.transformDirection(t),this.setXYZ(e,Se.x,Se.y,Se.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=this._denormalize(i)),i}setComponent(t,e,i){return this.normalized&&(i=this._normalize(i)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=this._denormalize(e)),e}setX(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=this._denormalize(e)),e}setY(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=this._denormalize(e)),e}setZ(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=this._denormalize(e)),e}setW(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),i=this._normalize(i)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,s){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),i=this._normalize(i),s=this._normalize(s)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),i=this._normalize(i),s=this._normalize(s),r=this._normalize(r)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(t){const e=this._normalizationScale;return e!==void 0?Math.max(t/e,-1):xc(t,this.array)}_normalize(t){const e=this._normalizationScale;return e!==void 0?Math.round(t*e):vc(t,this.array)}}class yc extends $n{constructor(t,e,i){super(new Uint16Array(t),e,i)}}class Ec extends $n{constructor(t,e,i){super(new Uint32Array(t),e,i)}}class xe extends $n{constructor(t,e,i){super(new Float32Array(t),e,i)}}const su=new ms,Qi=new U,Vr=new U;class ro{constructor(t=new U,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const i=this.center;e!==void 0?i.copy(e):su.setFromPoints(t).getCenter(i);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,i.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Qi.subVectors(t,this.center);const e=Qi.lengthSq();if(e>this.radius*this.radius){const i=Math.sqrt(e),s=(i-this.radius)*.5;this.center.addScaledVector(Qi,s/i),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Vr.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Qi.copy(t.center).add(Vr)),this.expandByPoint(Qi.copy(t.center).sub(Vr))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}let ru=0;const en=new he,Wr=new Le,Ai=new U,Ze=new ms,ji=new ms,Ce=new U;class an extends ei{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:ru++}),this.uuid=_i(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Fh(t)?Ec:yc)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new Gt().getNormalMatrix(t);i.applyNormalMatrix(r),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return en.makeRotationFromQuaternion(t),this.applyMatrix4(en),this}rotateX(t){return en.makeRotationX(t),this.applyMatrix4(en),this}rotateY(t){return en.makeRotationY(t),this.applyMatrix4(en),this}rotateZ(t){return en.makeRotationZ(t),this.applyMatrix4(en),this}translate(t,e,i){return en.makeTranslation(t,e,i),this.applyMatrix4(en),this}scale(t,e,i){return en.makeScale(t,e,i),this.applyMatrix4(en),this}lookAt(t){return Wr.lookAt(t),Wr.updateMatrix(),this.applyMatrix4(Wr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ai).negate(),this.translate(Ai.x,Ai.y,Ai.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const i=[];for(let s=0,r=t.length;s<r;s++){const a=t[s];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new xe(i,3))}else{const i=Math.min(t.length,e.count);for(let s=0;s<i;s++){const r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&Bt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ms);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){jt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new U(-1/0,-1/0,-1/0),new U(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,s=e.length;i<s;i++){const r=e[i];Ze.setFromBufferAttribute(r),this.morphTargetsRelative?(Ce.addVectors(this.boundingBox.min,Ze.min),this.boundingBox.expandByPoint(Ce),Ce.addVectors(this.boundingBox.max,Ze.max),this.boundingBox.expandByPoint(Ce)):(this.boundingBox.expandByPoint(Ze.min),this.boundingBox.expandByPoint(Ze.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&jt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ro);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){jt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new U,1/0);return}if(t){const i=this.boundingSphere.center;if(Ze.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){const o=e[r];ji.setFromBufferAttribute(o),this.morphTargetsRelative?(Ce.addVectors(Ze.min,ji.min),Ze.expandByPoint(Ce),Ce.addVectors(Ze.max,ji.max),Ze.expandByPoint(Ce)):(Ze.expandByPoint(ji.min),Ze.expandByPoint(ji.max))}Ze.getCenter(i);let s=0;for(let r=0,a=t.count;r<a;r++)Ce.fromBufferAttribute(t,r),s=Math.max(s,i.distanceToSquared(Ce));if(e)for(let r=0,a=e.length;r<a;r++){const o=e[r],l=this.morphTargetsRelative;for(let c=0,d=o.count;c<d;c++)Ce.fromBufferAttribute(o,c),l&&(Ai.fromBufferAttribute(t,c),Ce.add(Ai)),s=Math.max(s,i.distanceToSquared(Ce))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&jt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){jt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.position,s=e.normal,r=e.uv;let a=this.getAttribute("tangent");(a===void 0||a.count!==i.count)&&(a=new $n(new Float32Array(4*i.count),4),this.setAttribute("tangent",a));const o=[],l=[],c=new Uint8Array(i.count);for(let D=0;D<i.count;D++)o[D]=new U,l[D]=new U;const d=new U,m=new U,h=new U,p=new Ct,v=new Ct,E=new Ct,f=new U,u=new U;function S(D,C,N){c[D]=c[C]=c[N]=1,d.fromBufferAttribute(i,D),m.fromBufferAttribute(i,C),h.fromBufferAttribute(i,N),p.fromBufferAttribute(r,D),v.fromBufferAttribute(r,C),E.fromBufferAttribute(r,N),m.sub(d),h.sub(d),v.sub(p),E.sub(p);const F=1/(v.x*E.y-E.x*v.y);isFinite(F)&&(f.copy(m).multiplyScalar(E.y).addScaledVector(h,-v.y).multiplyScalar(F),u.copy(h).multiplyScalar(v.x).addScaledVector(m,-E.x).multiplyScalar(F),o[D].add(f),o[C].add(f),o[N].add(f),l[D].add(u),l[C].add(u),l[N].add(u))}let A=this.groups;A.length===0&&(A=[{start:0,count:t.count}]);for(let D=0,C=A.length;D<C;++D){const N=A[D],F=N.start,W=N.count;for(let P=F,H=F+W;P<H;P+=3)S(t.getX(P+0),t.getX(P+1),t.getX(P+2))}const y=new U,w=new U,b=new U,_=new U;function M(D){b.fromBufferAttribute(s,D),_.copy(b);const C=o[D];y.copy(C),y.sub(b.multiplyScalar(b.dot(C))).normalize(),w.crossVectors(_,C);const F=w.dot(l[D])<0?-1:1;a.setXYZW(D,y.x,y.y,y.z,F)}for(let D=0,C=i.count;D<C;++D)c[D]&&M(D);this._transformed=!0}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==e.count)i=new $n(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let h=0,p=i.count;h<p;h++)i.setXYZ(h,0,0,0);const s=new U,r=new U,a=new U,o=new U,l=new U,c=new U,d=new U,m=new U;if(t)for(let h=0,p=t.count;h<p;h+=3){const v=t.getX(h+0),E=t.getX(h+1),f=t.getX(h+2);s.fromBufferAttribute(e,v),r.fromBufferAttribute(e,E),a.fromBufferAttribute(e,f),d.subVectors(a,r),m.subVectors(s,r),d.cross(m),o.fromBufferAttribute(i,v),l.fromBufferAttribute(i,E),c.fromBufferAttribute(i,f),o.add(d),l.add(d),c.add(d),i.setXYZ(v,o.x,o.y,o.z),i.setXYZ(E,l.x,l.y,l.z),i.setXYZ(f,c.x,c.y,c.z)}else for(let h=0,p=e.count;h<p;h+=3)s.fromBufferAttribute(e,h+0),r.fromBufferAttribute(e,h+1),a.fromBufferAttribute(e,h+2),d.subVectors(a,r),m.subVectors(s,r),d.cross(m),i.setXYZ(h+0,d.x,d.y,d.z),i.setXYZ(h+1,d.x,d.y,d.z),i.setXYZ(h+2,d.x,d.y,d.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)Ce.fromBufferAttribute(t,e),Ce.normalize(),t.setXYZ(e,Ce.x,Ce.y,Ce.z)}toNonIndexed(){function t(o,l){const c=o.array,d=o.itemSize,m=o.normalized,h=new c.constructor(l.length*d);let p=0,v=0;for(let E=0,f=l.length;E<f;E++){o.isInterleavedBufferAttribute?p=l[E]*o.data.stride+o.offset:p=l[E]*d;for(let u=0;u<d;u++)h[v++]=c[p++]}return new $n(h,d,m)}if(this.index===null)return Bt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new an,i=this.index.array,s=this.attributes;for(const o in s){const l=s[o],c=t(l,i);e.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const l=[],c=r[o];for(let d=0,m=c.length;d<m;d++){const h=c[d],p=t(h,i);l.push(p)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const i=this.attributes;for(const l in i){const c=i[l];t.data.attributes[l]=c.toJSON(t.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],d=[];for(let m=0,h=c.length;m<h;m++){const p=c[m];d.push(p.toJSON(t.data))}d.length>0&&(s[l]=d,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const i=t.index;i!==null&&this.setIndex(i.clone());const s=t.attributes;for(const c in s){const d=s[c];this.setAttribute(c,d.clone(e))}const r=t.morphAttributes;for(const c in r){const d=[],m=r[c];for(let h=0,p=m.length;h<p;h++)d.push(m[h].clone(e));this.morphAttributes[c]=d}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let c=0,d=a.length;c<d;c++){const m=a[c];this.addGroup(m.start,m.count,m.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}class au{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=_c,this.updateRanges=[],this.version=0,this.uuid=_i()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,i){t*=this.stride,i*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[i+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={});const e=jo(this.array);t.arrayBuffers[e]===void 0&&(t.arrayBuffers[e]=this.array.slice(0).buffer);const i=new this.array.constructor(t.arrayBuffers[e]),s=new this.constructor(i,this.stride);return s.setUsage(this.usage),s}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){t.arrayBuffers===void 0&&(t.arrayBuffers={});const e=jo(this.array);t.arrayBuffers[e]===void 0&&(t.arrayBuffers[e]=Array.from(new Uint32Array(this.array.slice(0).buffer)));const i={uuid:this.uuid,buffer:e,type:this.array.constructor.name,stride:this.stride};return i.usage=this.usage,i}}function jo(n){return n.buffer._uuid===void 0&&(n.buffer._uuid=_i()),n.byteOffset===0&&n.byteLength===n.buffer.byteLength?n.buffer._uuid:n.buffer._uuid+":"+n.byteOffset+":"+n.byteLength}const Ge=new U;class cr{constructor(t,e,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=i,this.normalized=s,this._normalizationScale=t!==void 0?mr(t.array):void 0}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,i=this.data.count;e<i;e++)Ge.fromBufferAttribute(this,e),Ge.applyMatrix4(t),this.setXYZ(e,Ge.x,Ge.y,Ge.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)Ge.fromBufferAttribute(this,e),Ge.applyNormalMatrix(t),this.setXYZ(e,Ge.x,Ge.y,Ge.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)Ge.fromBufferAttribute(this,e),Ge.transformDirection(t),this.setXYZ(e,Ge.x,Ge.y,Ge.z);return this}getComponent(t,e){let i=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(i=this._denormalize(i)),i}setComponent(t,e,i){return this.normalized&&(i=this._normalize(i)),this.data.array[t*this.data.stride+this.offset+e]=i,this}setX(t,e){return this.normalized&&(e=this._normalize(e)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=this._normalize(e)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=this._normalize(e)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=this._normalize(e)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=this._denormalize(e)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=this._denormalize(e)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=this._denormalize(e)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=this._denormalize(e)),e}setXY(t,e,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=this._normalize(e),i=this._normalize(i)),this.data.array[t+0]=e,this.data.array[t+1]=i,this}setXYZ(t,e,i,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=this._normalize(e),i=this._normalize(i),s=this._normalize(s)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=this._normalize(e),i=this._normalize(i),s=this._normalize(s),r=this._normalize(r)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){lr("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let i=0;i<this.count;i++){const s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new $n(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new cr(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){lr("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let i=0;i<this.count;i++){const s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}_denormalize(t){const e=this._normalizationScale;return e!==void 0?Math.max(t/e,-1):xc(t,this.data.array)}_normalize(t){const e=this._normalizationScale;return e!==void 0?Math.round(t*e):vc(t,this.data.array)}}const Xr=new U,ou=new U,lu=new Gt;class Ln{constructor(t=new U(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,s){return this.normal.set(t,e,i),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){const s=Xr.subVectors(i,e).cross(ou.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,i=!0){const s=t.delta(Xr),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const a=-(t.start.dot(this.normal)+this.constant)/r;return i===!0&&(a<0||a>1)?null:e.copy(t.start).addScaledVector(s,a)}intersectsLine(t){const e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const i=e||lu.getNormalMatrix(t),s=this.coplanarPoint(Xr).applyMatrix4(t),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}}let cu=0;class Yi extends ei{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:cu++}),this.uuid=_i(),this.name="",this.type="Material",this.blending=ls,this.side=di,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=$l,this.blendDst=Jl,this.blendEquation=Ni,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Zt(0,0,0),this.blendAlpha=0,this.depthFunc=hs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ph,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ar,this.stencilZFail=Ar,this.stencilZPass=Ar,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const i=t[e];if(i===void 0){Bt(`Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){Bt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector2&&i&&i.isVector2||s&&s.isEuler&&i&&i.isEuler||s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(i.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(i.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(t).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(i.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(i.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){const a=[];for(const o in r){const l=r[o];delete l.metadata,a.push(l)}return a}if(e){const r=s(t.textures),a=s(t.images);r.length>0&&(i.textures=r),a.length>0&&(i.images=a)}return i}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new Zt().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.diffuseRoughness!==void 0&&(this.diffuseRoughness=t.diffuseRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=t.iridescenceThicknessMinimum),t.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=t.iridescenceThicknessMaximum),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=t.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=t.iridescenceThicknessRange[1]),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(i=>new Ln().fromJSON(i))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let i=t.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new Ct().fromArray(i)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Ct().fromArray(t.clearcoatNormalScale)),t.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=e[t.diffuseRoughnessMap]||null),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let i=null;if(e!==null){const s=e.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=e[r].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class ao extends Yi{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Zt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let wi;const ts=new U,Ri=new U,Ci=new U,Pi=new Ct,es=new Ct,bc=new he,Rs=new U,ns=new U,Cs=new U,tl=new Ct,Yr=new Ct,el=new Ct;class Tc extends Le{constructor(t=new ao){if(super(),this.isSprite=!0,this.type="Sprite",wi===void 0){wi=new an;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new au(e,5);wi.setIndex([0,1,2,0,2,3]),wi.setAttribute("position",new cr(i,3,0,!1)),wi.setAttribute("uv",new cr(i,2,3,!1))}this.geometry=wi,this.material=t,this.center=new Ct(.5,.5),this.count=1}intersectsFrustum(t){return t.intersectsSprite(this)}raycast(t,e){t.camera===null&&jt('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Ri.setFromMatrixScale(this.matrixWorld),bc.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Ci.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Ri.multiplyScalar(-Ci.z);const i=this.material.rotation;let s,r;i!==0&&(r=Math.cos(i),s=Math.sin(i));const a=this.center;Ps(Rs.set(-.5,-.5,0),Ci,a,Ri,s,r),Ps(ns.set(.5,-.5,0),Ci,a,Ri,s,r),Ps(Cs.set(.5,.5,0),Ci,a,Ri,s,r),tl.set(0,0),Yr.set(1,0),el.set(1,1);let o=t.ray.intersectTriangle(Rs,ns,Cs,!1,ts);if(o===null&&(Ps(ns.set(-.5,.5,0),Ci,a,Ri,s,r),Yr.set(0,1),o=t.ray.intersectTriangle(Rs,Cs,ns,!1,ts),o===null))return;const l=t.ray.origin.distanceTo(ts);l<t.near||l>t.far||e.push({distance:l,point:ts.clone(),uv:rn.getInterpolation(ts,Rs,ns,Cs,tl,Yr,el,new Ct),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}toJSON(t){const e=super.toJSON(t);return e.object.center=this.center.toArray(),e}}function Ps(n,t,e,i,s,r){Pi.subVectors(n,e).addScalar(.5).multiply(i),s!==void 0?(es.x=r*Pi.x-s*Pi.y,es.y=s*Pi.x+r*Pi.y):es.copy(Pi),n.copy(t),n.x+=es.x,n.y+=es.y,n.applyMatrix4(bc)}const Cn=new U,qr=new U,Ls=new U,Ds=new U;class oo{constructor(t=new U,e=new U(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Cn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Cn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Cn.copy(this.origin).addScaledVector(this.direction,e),Cn.distanceToSquared(t))}distanceSqToSegment(t,e,i,s){qr.copy(t).add(e).multiplyScalar(.5),Ls.copy(e).sub(t).normalize(),Ds.copy(this.origin).sub(qr);const r=t.distanceTo(e)*.5,a=-this.direction.dot(Ls),o=Ds.dot(this.direction),l=-Ds.dot(Ls),c=Ds.lengthSq(),d=Math.abs(1-a*a);let m,h,p,v;if(d>0)if(m=a*l-o,h=a*o-l,v=r*d,m>=0)if(h>=-v)if(h<=v){const E=1/d;m*=E,h*=E,p=m*(m+a*h+2*o)+h*(a*m+h+2*l)+c}else h=r,m=Math.max(0,-(a*h+o)),p=-m*m+h*(h+2*l)+c;else h=-r,m=Math.max(0,-(a*h+o)),p=-m*m+h*(h+2*l)+c;else h<=-v?(m=Math.max(0,-(-a*r+o)),h=m>0?-r:Math.min(Math.max(-r,-l),r),p=-m*m+h*(h+2*l)+c):h<=v?(m=0,h=Math.min(Math.max(-r,-l),r),p=h*(h+2*l)+c):(m=Math.max(0,-(a*r+o)),h=m>0?r:Math.min(Math.max(-r,-l),r),p=-m*m+h*(h+2*l)+c);else h=a>0?-r:r,m=Math.max(0,-(a*h+o)),p=-m*m+h*(h+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,m),s&&s.copy(qr).addScaledVector(Ls,h),p}intersectSphere(t,e){if(t.radius<0)return null;Cn.subVectors(t.center,this.origin);const i=Cn.dot(this.direction),s=Cn.dot(Cn)-i*i,r=t.radius*t.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){const i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,s,r,a,o,l;const c=1/this.direction.x,d=1/this.direction.y,m=1/this.direction.z,h=this.origin;return c>=0?(i=(t.min.x-h.x)*c,s=(t.max.x-h.x)*c):(i=(t.max.x-h.x)*c,s=(t.min.x-h.x)*c),d>=0?(r=(t.min.y-h.y)*d,a=(t.max.y-h.y)*d):(r=(t.max.y-h.y)*d,a=(t.min.y-h.y)*d),i>a||r>s||((r>i||isNaN(i))&&(i=r),(a<s||isNaN(s))&&(s=a),m>=0?(o=(t.min.z-h.z)*m,l=(t.max.z-h.z)*m):(o=(t.max.z-h.z)*m,l=(t.min.z-h.z)*m),i>l||o>s)||((o>i||i!==i)&&(i=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,e)}intersectsBox(t){return this.intersectBox(t,Cn)!==null}intersectTriangle(t,e,i,s,r){const a=this.origin,o=this.direction,l=o.x,c=o.y,d=o.z,m=t.x-a.x,h=t.y-a.y,p=t.z-a.z,v=e.x-a.x,E=e.y-a.y,f=e.z-a.z,u=i.x-a.x,S=i.y-a.y,A=i.z-a.z,y=Math.abs(l),w=Math.abs(c),b=Math.abs(d);let _,M,D,C,N,F,W,P,H,q,V,et;if(y>=w&&y>=b?(D=l,F=m,H=v,et=u,l>=0?(_=c,M=d,C=h,N=p,W=E,P=f,q=S,V=A):(_=d,M=c,C=p,N=h,W=f,P=E,q=A,V=S)):w>=b?(D=c,F=h,H=E,et=S,c>=0?(_=d,M=l,C=p,N=m,W=f,P=v,q=A,V=u):(_=l,M=d,C=m,N=p,W=v,P=f,q=u,V=A)):(D=d,F=p,H=f,et=A,d>=0?(_=l,M=c,C=m,N=h,W=v,P=E,q=u,V=S):(_=c,M=l,C=h,N=m,W=E,P=v,q=S,V=u)),D===0)return null;const X=_/D,j=M/D,tt=1/D,wt=C-X*F,Ft=N-j*F,Z=W-X*H,mt=P-j*H,Et=q-X*et,It=V-j*et,xt=Et*mt-It*Z,zt=wt*It-Ft*Et,ue=Z*Ft-mt*wt;if(s){if(xt<0||zt<0||ue<0)return null}else if((xt<0||zt<0||ue<0)&&(xt>0||zt>0||ue>0))return null;const G=xt+zt+ue;if(G===0)return null;const at=tt*(xt*F+zt*H+ue*et);return(G>0?at<0:at>0)?null:this.at(at/G,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class qi extends Yi{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Zt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ti,this.combine=$a,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const nl=new he,li=new oo,Is=new ro,il=new U,Ns=new U,Us=new U,Fs=new U,Kr=new U,Os=new U,sl=new U,Bs=new U;class _e extends Le{constructor(t=new an,e=new qi){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0?this.morphTargetInfluences=t.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,t.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){const i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,a=i.morphTargetsRelative;e.fromBufferAttribute(s,t);const o=this.morphTargetInfluences;if(r&&o){Os.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const d=o[l],m=r[l];d!==0&&(Kr.fromBufferAttribute(m,t),a?Os.addScaledVector(Kr,d):Os.addScaledVector(Kr.sub(e),d))}e.add(Os)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){const i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Is.copy(i.boundingSphere),Is.applyMatrix4(r),li.copy(t.ray).recast(t.near),!(Is.containsPoint(li.origin)===!1&&(li.intersectSphere(Is,il)===null||li.origin.distanceToSquared(il)>(t.far-t.near)**2))&&(nl.copy(r).invert(),li.copy(t.ray).applyMatrix4(nl),!(i.boundingBox!==null&&li.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,li)))}_computeIntersections(t,e,i){let s;const r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,d=r.attributes.uv1,m=r.attributes.normal,h=r.groups,p=r.drawRange;if(o!==null)if(Array.isArray(a))for(let v=0,E=h.length;v<E;v++){const f=h[v],u=a[f.materialIndex],S=Math.max(f.start,p.start),A=Math.min(o.count,Math.min(f.start+f.count,p.start+p.count));for(let y=S,w=A;y<w;y+=3){const b=o.getX(y),_=o.getX(y+1),M=o.getX(y+2);s=zs(this,u,t,i,c,d,m,b,_,M),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=f.materialIndex,e.push(s))}}else{const v=Math.max(0,p.start),E=Math.min(o.count,p.start+p.count);for(let f=v,u=E;f<u;f+=3){const S=o.getX(f),A=o.getX(f+1),y=o.getX(f+2);s=zs(this,a,t,i,c,d,m,S,A,y),s&&(s.faceIndex=Math.floor(f/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let v=0,E=h.length;v<E;v++){const f=h[v],u=a[f.materialIndex],S=Math.max(f.start,p.start),A=Math.min(l.count,Math.min(f.start+f.count,p.start+p.count));for(let y=S,w=A;y<w;y+=3){const b=y,_=y+1,M=y+2;s=zs(this,u,t,i,c,d,m,b,_,M),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=f.materialIndex,e.push(s))}}else{const v=Math.max(0,p.start),E=Math.min(l.count,p.start+p.count);for(let f=v,u=E;f<u;f+=3){const S=f,A=f+1,y=f+2;s=zs(this,a,t,i,c,d,m,S,A,y),s&&(s.faceIndex=Math.floor(f/3),e.push(s))}}}}function hu(n,t,e,i,s,r,a,o){let l;if(t.side===qe?l=i.intersectTriangle(a,r,s,!0,o):l=i.intersectTriangle(s,r,a,t.side===di,o),l===null)return null;Bs.copy(o),Bs.applyMatrix4(n.matrixWorld);const c=e.ray.origin.distanceTo(Bs);return c<e.near||c>e.far?null:{distance:c,point:Bs.clone(),object:n}}function zs(n,t,e,i,s,r,a,o,l,c){n.getVertexPosition(o,Ns),n.getVertexPosition(l,Us),n.getVertexPosition(c,Fs);const d=hu(n,t,e,i,Ns,Us,Fs,sl);if(d){const m=new U;rn.getBarycoord(sl,Ns,Us,Fs,m),s&&(d.uv=rn.getInterpolatedAttribute(s,o,l,c,m,new Ct)),r&&(d.uv1=rn.getInterpolatedAttribute(r,o,l,c,m,new Ct)),a&&(d.normal=rn.getInterpolatedAttribute(a,o,l,c,m,new U),d.normal.dot(i.direction)>0&&d.normal.multiplyScalar(-1));const h={a:o,b:l,c,normal:new U,materialIndex:0};rn.getNormal(Ns,Us,Fs,h.normal),d.face=h,d.barycoord=m}return d}class uu extends ze{constructor(t=null,e=1,i=1,s,r,a,o,l,c=Pe,d=Pe,m,h){super(null,a,o,l,c,d,s,r,m,h),this.isDataTexture=!0,this.image={data:t,width:e,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const ci=new ro,du=new Ct(.5,.5),ks=new U;class Hi{constructor(t=new Ln,e=new Ln,i=new Ln,s=new Ln,r=new Ln,a=new Ln){this.planes=[t,e,i,s,r,a]}set(t,e,i,s,r,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(i),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){const e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=dn,i=!1){const s=this.planes,r=t.elements,a=r[0],o=r[1],l=r[2],c=r[3],d=r[4],m=r[5],h=r[6],p=r[7],v=r[8],E=r[9],f=r[10],u=r[11],S=r[12],A=r[13],y=r[14],w=r[15];if(s[0].setComponents(c-a,p-d,u-v,w-S).normalize(),s[1].setComponents(c+a,p+d,u+v,w+S).normalize(),s[2].setComponents(c+o,p+m,u+E,w+A).normalize(),s[3].setComponents(c-o,p-m,u-E,w-A).normalize(),i)s[4].setComponents(l,h,f,y).normalize(),s[5].setComponents(c-l,p-h,u-f,w-y).normalize();else if(s[4].setComponents(c-l,p-h,u-f,w-y).normalize(),e===dn)s[5].setComponents(c+l,p+h,u+f,w+y).normalize();else if(e===fs)s[5].setComponents(l,h,f,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),ci.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),ci.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(ci)}intersectsSprite(t){ci.center.set(0,0,0);const e=du.distanceTo(t.center);return ci.radius=.7071067811865476+e,ci.applyMatrix4(t.matrixWorld),this.intersectsSphere(ci)}intersectsSphere(t){const e=this.planes,i=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let i=0;i<6;i++){const s=e[i];if(ks.x=s.normal.x>0?t.max.x:t.min.x,ks.y=s.normal.y>0?t.max.y:t.min.y,ks.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(ks)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}const rl=new he;class lo{constructor(){this.coordinateSystem=dn,this._frustums=[],this._count=0}setFromArrayCamera(t){const e=t.cameras,i=this._frustums;for(let s=0;s<e.length;s++){const r=e[s];rl.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),i[s]===void 0&&(i[s]=new Hi),i[s].setFromProjectionMatrix(rl,r.coordinateSystem,r.reversedDepth)}return this._count=e.length,this}getFrustum(t){return this._frustums[t]}intersectsObject(t){const e=this._frustums;for(let i=0;i<this._count;i++)if(e[i].intersectsObject(t))return!0;return!1}intersectsSprite(t){const e=this._frustums;for(let i=0;i<this._count;i++)if(e[i].intersectsSprite(t))return!0;return!1}intersectsSphere(t){const e=this._frustums;for(let i=0;i<this._count;i++)if(e[i].intersectsSphere(t))return!0;return!1}intersectsBox(t){const e=this._frustums;for(let i=0;i<this._count;i++)if(e[i].intersectsBox(t))return!0;return!1}containsPoint(t){const e=this._frustums;for(let i=0;i<this._count;i++)if(e[i].containsPoint(t))return!0;return!1}copy(t){this.coordinateSystem=t.coordinateSystem;const e=this._frustums,i=t._frustums;for(let s=0;s<t._count;s++)e[s]===void 0&&(e[s]=new Hi),e[s].copy(i[s]);return this._count=t._count,this}clone(){return new lo().copy(this)}}class Ac extends ze{constructor(t=[],e=ki,i,s,r,a,o,l,c,d){super(t,e,i,s,r,a,o,l,c,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class _r extends ze{constructor(t,e,i,s,r,a,o,l,c){super(t,e,i,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Vi extends ze{constructor(t,e,i=yn,s,r,a,o=Pe,l=Pe,c,d=Qn,m=1){if(d!==Qn&&d!==Zn)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const h={width:t,height:e,depth:m};super(h,s,r,a,o,l,d,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new io(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}}class wc extends Vi{constructor(t,e=yn,i=ki,s,r,a=Pe,o=Pe,l,c=Qn){const d={width:t,height:t,depth:1},m=[d,d,d,d,d,d];super(t,t,e,i,s,r,a,o,l,c),this.image=m,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}}class Rc extends ze{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class oe extends an{constructor(t=1,e=1,i=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const l=[],c=[],d=[],m=[];let h=0,p=0;v("z","y","x",-1,-1,i,e,t,a,r,0),v("z","y","x",1,-1,i,e,-t,a,r,1),v("x","z","y",1,1,t,i,e,s,a,2),v("x","z","y",1,-1,t,i,-e,s,a,3),v("x","y","z",1,-1,t,e,i,s,r,4),v("x","y","z",-1,-1,t,e,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new xe(c,3)),this.setAttribute("normal",new xe(d,3)),this.setAttribute("uv",new xe(m,2));function v(E,f,u,S,A,y,w,b,_,M,D){const C=y/_,N=w/M,F=y/2,W=w/2,P=b/2,H=_+1,q=M+1;let V=0,et=0;const X=new U;for(let j=0;j<q;j++){const tt=j*N-W;for(let wt=0;wt<H;wt++){const Ft=wt*C-F;X[E]=Ft*S,X[f]=tt*A,X[u]=P,c.push(X.x,X.y,X.z),X[E]=0,X[f]=0,X[u]=b>0?1:-1,d.push(X.x,X.y,X.z),m.push(wt/_),m.push(1-j/M),V+=1}}for(let j=0;j<M;j++)for(let tt=0;tt<_;tt++){const wt=h+tt+H*j,Ft=h+tt+H*(j+1),Z=h+(tt+1)+H*(j+1),mt=h+(tt+1)+H*j;l.push(wt,Ft,mt),l.push(Ft,Z,mt),et+=6}o.addGroup(p,et,D),p+=et,h+=V}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new oe(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}class Dn extends an{constructor(t=1,e=1,i=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:i,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};const c=this;s=Math.floor(s),r=Math.floor(r);const d=[],m=[],h=[],p=[];let v=0;const E=[],f=i/2;let u=0;S(),a===!1&&(t>0&&A(!0),e>0&&A(!1)),this.setIndex(d),this.setAttribute("position",new xe(m,3)),this.setAttribute("normal",new xe(h,3)),this.setAttribute("uv",new xe(p,2));function S(){const y=new U,w=new U;let b=0;const _=(e-t)/i;for(let M=0;M<=r;M++){const D=[],C=M/r,N=C*(e-t)+t;for(let F=0;F<=s;F++){const W=F/s,P=W*l+o,H=Math.sin(P),q=Math.cos(P);w.x=N*H,w.y=-C*i+f,w.z=N*q,m.push(w.x,w.y,w.z),y.set(H,_,q).normalize(),h.push(y.x,y.y,y.z),p.push(W,1-C),D.push(v++)}E.push(D)}for(let M=0;M<s;M++)for(let D=0;D<r;D++){const C=E[D][M],N=E[D+1][M],F=E[D+1][M+1],W=E[D][M+1];(t>0||D!==0)&&(d.push(C,N,W),b+=3),(e>0||D!==r-1)&&(d.push(N,F,W),b+=3)}c.addGroup(u,b,0),u+=b}function A(y){const w=v,b=new Ct,_=new U;let M=0;const D=y===!0?t:e,C=y===!0?1:-1;for(let F=1;F<=s;F++)m.push(0,f*C,0),h.push(0,C,0),p.push(.5,.5),v++;const N=v;for(let F=0;F<=s;F++){const P=F/s*l+o,H=Math.cos(P),q=Math.sin(P);_.x=D*q,_.y=f*C,_.z=D*H,m.push(_.x,_.y,_.z),h.push(0,C,0),b.x=H*.5+.5,b.y=q*.5*C+.5,p.push(b.x,b.y),v++}for(let F=0;F<s;F++){const W=w+F,P=N+F;y===!0?d.push(P,P+1,W):d.push(P+1,P,W),M+=3}c.addGroup(u,M,y===!0?1:2),u+=M}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Dn(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class co extends an{constructor(t=[],e=[],i=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:i,detail:s};const r=[],a=[];o(s),c(i),d(),this.setAttribute("position",new xe(r,3)),this.setAttribute("normal",new xe(r.slice(),3)),this.setAttribute("uv",new xe(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(S){const A=new U,y=new U,w=new U;for(let b=0;b<e.length;b+=3)p(e[b+0],A),p(e[b+1],y),p(e[b+2],w),l(A,y,w,S)}function l(S,A,y,w){const b=w+1,_=[];for(let M=0;M<=b;M++){_[M]=[];const D=S.clone().lerp(y,M/b),C=A.clone().lerp(y,M/b),N=b-M;for(let F=0;F<=N;F++)F===0&&M===b?_[M][F]=D:_[M][F]=D.clone().lerp(C,F/N)}for(let M=0;M<b;M++)for(let D=0;D<2*(b-M)-1;D++){const C=Math.floor(D/2);D%2===0?(h(_[M][C+1]),h(_[M+1][C]),h(_[M][C])):(h(_[M][C+1]),h(_[M+1][C+1]),h(_[M+1][C]))}}function c(S){const A=new U;for(let y=0;y<r.length;y+=3)A.x=r[y+0],A.y=r[y+1],A.z=r[y+2],A.normalize().multiplyScalar(S),r[y+0]=A.x,r[y+1]=A.y,r[y+2]=A.z}function d(){const S=new U;for(let A=0;A<r.length;A+=3){S.x=r[A+0],S.y=r[A+1],S.z=r[A+2];const y=f(S)/2/Math.PI+.5,w=u(S)/Math.PI+.5;a.push(y,1-w)}v(),m()}function m(){for(let S=0;S<a.length;S+=6){const A=a[S+0],y=a[S+2],w=a[S+4],b=Math.max(A,y,w),_=Math.min(A,y,w);b>.9&&_<.1&&(A<.2&&(a[S+0]+=1),y<.2&&(a[S+2]+=1),w<.2&&(a[S+4]+=1))}}function h(S){r.push(S.x,S.y,S.z)}function p(S,A){const y=S*3;A.x=t[y+0],A.y=t[y+1],A.z=t[y+2]}function v(){const S=new U,A=new U,y=new U,w=new U,b=new Ct,_=new Ct,M=new Ct;for(let D=0,C=0;D<r.length;D+=9,C+=6){S.set(r[D+0],r[D+1],r[D+2]),A.set(r[D+3],r[D+4],r[D+5]),y.set(r[D+6],r[D+7],r[D+8]),b.set(a[C+0],a[C+1]),_.set(a[C+2],a[C+3]),M.set(a[C+4],a[C+5]),w.copy(S).add(A).add(y).divideScalar(3);const N=f(w);E(b,C+0,S,N),E(_,C+2,A,N),E(M,C+4,y,N)}}function E(S,A,y,w){w<0&&S.x===1&&(a[A]=S.x-1),y.x===0&&y.z===0&&(a[A]=w/2/Math.PI+.5)}function f(S){return Math.atan2(S.z,-S.x)}function u(S){return Math.atan2(-S.y,Math.sqrt(S.x*S.x+S.z*S.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new co(t.vertices,t.indices,t.radius,t.detail)}}class Jn extends co{constructor(t=1,e=0){const i=(1+Math.sqrt(5))/2,s=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Jn(t.radius,t.detail)}}class _s extends an{constructor(t=1,e=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:s};const r=t/2,a=e/2,o=Math.floor(i),l=Math.floor(s),c=o+1,d=l+1,m=t/o,h=e/l,p=[],v=[],E=[],f=[];for(let u=0;u<d;u++){const S=u*h-a;for(let A=0;A<c;A++){const y=A*m-r;v.push(y,-S,0),E.push(0,0,1),f.push(A/o),f.push(1-u/l)}}for(let u=0;u<l;u++)for(let S=0;S<o;S++){const A=S+c*u,y=S+c*(u+1),w=S+1+c*(u+1),b=S+1+c*u;p.push(A,y,b),p.push(y,w,b)}this.setIndex(p),this.setAttribute("position",new xe(v,3)),this.setAttribute("normal",new xe(E,3)),this.setAttribute("uv",new xe(f,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new _s(t.width,t.height,t.widthSegments,t.heightSegments)}}class ho extends an{constructor(t=.5,e=1,i=32,s=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:i,phiSegments:s,thetaStart:r,thetaLength:a},i=Math.max(3,i),s=Math.max(1,s);const o=[],l=[],c=[],d=[];let m=t;const h=(e-t)/s,p=new U,v=new Ct;for(let E=0;E<=s;E++){for(let f=0;f<=i;f++){const u=r+f/i*a;p.x=m*Math.cos(u),p.y=m*Math.sin(u),l.push(p.x,p.y,p.z),c.push(0,0,1),v.x=(p.x/e+1)/2,v.y=(p.y/e+1)/2,d.push(v.x,v.y)}m+=h}for(let E=0;E<s;E++){const f=E*(i+1);for(let u=0;u<i;u++){const S=u+f,A=S,y=S+i+1,w=S+i+2,b=S+1;o.push(A,y,b),o.push(y,w,b)}}this.setIndex(o),this.setAttribute("position",new xe(l,3)),this.setAttribute("normal",new xe(c,3)),this.setAttribute("uv",new xe(d,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ho(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class uo extends an{constructor(t=1,e=.4,i=12,s=48,r=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:i,tubularSegments:s,arc:r,thetaStart:a,thetaLength:o},i=Math.floor(i),s=Math.floor(s);const l=[],c=[],d=[],m=[],h=new U,p=new U,v=new U;for(let E=0;E<=i;E++){const f=a+E/i*o;for(let u=0;u<=s;u++){const S=u/s*r;p.x=(t+e*Math.cos(f))*Math.cos(S),p.y=(t+e*Math.cos(f))*Math.sin(S),p.z=e*Math.sin(f),c.push(p.x,p.y,p.z),h.x=t*Math.cos(S),h.y=t*Math.sin(S),v.subVectors(p,h).normalize(),d.push(v.x,v.y,v.z),m.push(u/s),m.push(E/i)}}for(let E=1;E<=i;E++)for(let f=1;f<=s;f++){const u=(s+1)*E+f-1,S=(s+1)*(E-1)+f-1,A=(s+1)*(E-1)+f,y=(s+1)*E+f;l.push(u,S,y),l.push(S,A,y)}this.setIndex(l),this.setAttribute("position",new xe(c,3)),this.setAttribute("normal",new xe(d,3)),this.setAttribute("uv",new xe(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new uo(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc,t.thetaStart,t.thetaLength)}}function Wi(n){const t={};for(const e in n){t[e]={};for(const i in n[e]){const s=n[e][i];if(al(s))s.isRenderTargetTexture?(Bt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=s.clone();else if(Array.isArray(s))if(al(s[0])){const r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();t[e][i]=r}else t[e][i]=s.slice();else t[e][i]=s}}return t}function He(n){const t={};for(let e=0;e<n.length;e++){const i=Wi(n[e]);for(const s in i)t[s]=i[s]}return t}function al(n){return n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)}function fu(n){const t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function Cc(n){const t=n.getRenderTarget();return t===null?n.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Jt.workingColorSpace}const pu={clone:Wi,merge:He};var mu=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,_u=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class pi extends Yi{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=mu,this.fragmentShader=_u,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Wi(t.uniforms),this.uniformsGroups=fu(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(const i in t.uniforms){const s=t.uniforms[i];switch(this.uniforms[i]={},s.type){case"t":this.uniforms[i].value=e[s.value]||null;break;case"c":this.uniforms[i].value=new Zt().setHex(s.value);break;case"v2":this.uniforms[i].value=new Ct().fromArray(s.value);break;case"v3":this.uniforms[i].value=new U().fromArray(s.value);break;case"v4":this.uniforms[i].value=new ge().fromArray(s.value);break;case"m3":this.uniforms[i].value=new Gt().fromArray(s.value);break;case"m4":this.uniforms[i].value=new he().fromArray(s.value);break;default:this.uniforms[i].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(const i in t.extensions)this.extensions[i]=t.extensions[i];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}}class gu extends pi{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class fo extends Yi{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Zt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Zt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ha,this.normalScale=new Ct(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ti,this.combine=$a,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class xu extends Yi{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Rh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class vu extends Yi{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class po extends Le{static registerNode(t){this.prototype._lightNode=t}constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Zt(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}}class Su extends po{constructor(t,e,i){super(t,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Le.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Zt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){const e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}}const Zr=new he,ol=new U,ll=new U;class Mu{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ct(512,512),this.mapType=$e,this.map=null,this.mapPass=null,this.matrix=new he,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Hi,this._frameExtents=new Ct(1,1),this._viewportCount=1,this._viewports=[new ge(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera;ol.setFromMatrixPosition(t.matrixWorld),e.position.copy(ol),ll.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(ll),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,i,s){Zr.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),i.setFromProjectionMatrix(Zr,t.coordinateSystem,t.reversedDepth);const r=this._frameExtents,a=s?s.z/r.x:1,o=s?s.w/r.y:1,l=s?s.x/r.x:0,c=s?s.y/r.y:0;t.coordinateSystem===fs||t.reversedDepth?e.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):e.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),e.multiply(Zr)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.mapType=t.mapType,this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.mapType=this.mapType,t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const Gs=new U,Hs=new jn,pn=new U;class Pc extends Le{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new he,this.projectionMatrix=new he,this.projectionMatrixInverse=new he,this.coordinateSystem=dn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(Gs,Hs,pn),pn.x===1&&pn.y===1&&pn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Gs,Hs,pn.set(1,1,1)).invert()}updateWorldMatrix(t,e,i=!1){super.updateWorldMatrix(t,e,i),this.matrixWorld.decompose(Gs,Hs,pn),pn.x===1&&pn.y===1&&pn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Gs,Hs,pn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Wn=new U,cl=new Ct,hl=new Ct;class un extends Pc{constructor(t=50,e=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Va*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(tr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Va*2*Math.atan(Math.tan(tr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){Wn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Wn.x,Wn.y).multiplyScalar(-t/Wn.z),Wn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Wn.x,Wn.y).multiplyScalar(-t/Wn.z)}getViewSize(t,e){return this.getViewBounds(t,cl,hl),e.subVectors(hl,cl)}setViewOffset(t,e,i,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(tr*.5*this.fov)/this.zoom,i=2*e,s=this.aspect*i,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,e-=a.offsetY*i/c,s*=a.width/l,i*=a.height/c}const o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-i,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}class Lc extends Pc{constructor(t=-1,e=1,i=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=i-t,a=i+t,o=s+e,l=s-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=d*this.view.offsetY,l=o-d*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class yu extends Mu{constructor(){super(new Lc(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Eu extends po{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Le.DEFAULT_UP),this.updateMatrix(),this.target=new Le,this.shadow=new yu}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){const e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}}class bu extends po{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}const Li=-90,Di=1;class Wa extends Le{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new un(Li,Di,t,e);s.layers=this.layers,this.add(s);const r=new un(Li,Di,t,e);r.layers=this.layers,this.add(r);const a=new un(Li,Di,t,e);a.layers=this.layers,this.add(a);const o=new un(Li,Di,t,e);o.layers=this.layers,this.add(o);const l=new un(Li,Di,t,e);l.layers=this.layers,this.add(l);const c=new un(Li,Di,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[i,s,r,a,o,l]=e;for(const c of e)this.remove(c);if(t===dn)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===fs)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,l,c,d]=this.children,m=t.getRenderTarget(),h=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),v=t.xr.enabled;t.xr.enabled=!1;const E=i.texture.mipmapsAutoUpdate;i.texture.mipmapsAutoUpdate=!1;let f=!1;t.isWebGLRenderer===!0?f=t.state.buffers.depth.getReversed():f=t.reversedDepthBuffer,t.setRenderTarget(i,0,s),f&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(i,1,s),f&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(i,2,s),f&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(i,3,s),f&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(i,4,s),f&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),i.texture.mipmapsAutoUpdate=E,t.setRenderTarget(i,5,s),f&&t.autoClear===!1&&t.clearDepth(),t.render(e,d),t.setRenderTarget(m,h,p),t.xr.enabled=v,i.texture.needsPMREMUpdate=!0}}class Tu extends un{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t,this.perCameraFrustumCulled=!1}}class Au{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(t){this._document=t,t.hidden!==void 0&&(this._pageVisibilityHandler=wu.bind(this),t.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(t){return this._timescale=t,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(t){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(t!==void 0?t:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}}function wu(){this._document.hidden===!1&&this.reset()}const ul=new he;class Ru{constructor(t,e,i=0,s=1/0){this.ray=new oo(t,e),this.near=i,this.far=s,this.camera=null,this.layers=new so,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,e.projectionMatrix.elements[14]).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):jt("Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return ul.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(ul),this}intersectObject(t,e=!0,i=[]){return Xa(t,this,i,e),i.sort(dl),i}intersectObjects(t,e=!0,i=[]){for(let s=0,r=t.length;s<r;s++)Xa(t[s],this,i,e);return i.sort(dl),i}}function dl(n,t){return n.distance-t.distance}function Xa(n,t,e,i){let s=!0;if(n.layers.test(t.layers)&&n.raycast(t,e)===!1&&(s=!1),s===!0&&i===!0){const r=n.children;for(let a=0,o=r.length;a<o;a++)Xa(r[a],t,e,!0)}}class fl{constructor(t=1,e=0,i=0){this.radius=t,this.phi=e,this.theta=i}set(t,e,i){return this.radius=t,this.phi=e,this.theta=i,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Yt(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,i){return this.radius=Math.sqrt(t*t+e*e+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,i),this.phi=Math.acos(Yt(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class Cu extends ei{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(t){this.domElement!==null&&this.disconnect(),this.domElement=t}disconnect(){}dispose(){}update(){}}function pl(n,t,e,i){const s=Pu(i);switch(e){case hc:return n*t;case dc:return n*t/s.components*s.byteLength;case to:return n*t/s.components*s.byteLength;case fi:return n*t*2/s.components*s.byteLength;case eo:return n*t*2/s.components*s.byteLength;case uc:return n*t*3/s.components*s.byteLength;case Sn:return n*t*4/s.components*s.byteLength;case no:return n*t*4/s.components*s.byteLength;case Zs:case $s:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case Js:case Qs:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case fa:case ma:return Math.max(n,16)*Math.max(t,8)/4;case da:case pa:return Math.max(n,8)*Math.max(t,8)/2;case _a:case ga:case va:case Sa:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case xa:case ir:case Ma:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case ya:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Ea:return Math.floor((n+4)/5)*Math.floor((t+3)/4)*16;case ba:return Math.floor((n+4)/5)*Math.floor((t+4)/5)*16;case Ta:return Math.floor((n+5)/6)*Math.floor((t+4)/5)*16;case Aa:return Math.floor((n+5)/6)*Math.floor((t+5)/6)*16;case wa:return Math.floor((n+7)/8)*Math.floor((t+4)/5)*16;case Ra:return Math.floor((n+7)/8)*Math.floor((t+5)/6)*16;case Ca:return Math.floor((n+7)/8)*Math.floor((t+7)/8)*16;case Pa:return Math.floor((n+9)/10)*Math.floor((t+4)/5)*16;case La:return Math.floor((n+9)/10)*Math.floor((t+5)/6)*16;case Da:return Math.floor((n+9)/10)*Math.floor((t+7)/8)*16;case Ia:return Math.floor((n+9)/10)*Math.floor((t+9)/10)*16;case Na:return Math.floor((n+11)/12)*Math.floor((t+9)/10)*16;case Ua:return Math.floor((n+11)/12)*Math.floor((t+11)/12)*16;case Fa:case Oa:case Ba:return Math.ceil(n/4)*Math.ceil(t/4)*16;case za:case ka:return Math.ceil(n/4)*Math.ceil(t/4)*8;case sr:case Ga:return Math.ceil(n/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Pu(n){switch(n){case $e:case ac:return{byteLength:1,components:1};case ds:case oc:case En:return{byteLength:2,components:1};case Qa:case ja:return{byteLength:2,components:4};case yn:case Ja:case vn:return{byteLength:4,components:1};case lc:case cc:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Za}}));typeof window<"u"&&(window.__THREE__?Bt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Za);function Dc(){let n=null,t=!1,e=null,i=null;function s(r,a){i=n.requestAnimationFrame(s),e(r,a)}return{start:function(){t!==!0&&e!==null&&n!==null&&(i=n.requestAnimationFrame(s),t=!0)},stop:function(){n!==null&&n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){n=r}}}function Lu(n){const t=new WeakMap;function e(o,l){const c=o.array,d=o.usage,m=c.byteLength,h=n.createBuffer();n.bindBuffer(l,h),n.bufferData(l,c,d),o.onUploadCallback();let p;if(c instanceof Float32Array)p=n.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)p=n.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?p=n.HALF_FLOAT:p=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=n.SHORT;else if(c instanceof Uint32Array)p=n.UNSIGNED_INT;else if(c instanceof Int32Array)p=n.INT;else if(c instanceof Int8Array)p=n.BYTE;else if(c instanceof Uint8Array)p=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:m}}function i(o,l,c){const d=l.array,m=l.updateRanges;if(n.bindBuffer(c,o),m.length===0)n.bufferSubData(c,0,d);else{m.sort((p,v)=>p.start-v.start);let h=0;for(let p=1;p<m.length;p++){const v=m[h],E=m[p];E.start<=v.start+v.count+1?v.count=Math.max(v.count,E.start+E.count-v.start):(++h,m[h]=E)}m.length=h+1;for(let p=0,v=m.length;p<v;p++){const E=m[p];n.bufferSubData(c,E.start*d.BYTES_PER_ELEMENT,d,E.start,E.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=t.get(o);l&&(n.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const d=t.get(o);(!d||d.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var Du=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Iu=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Nu=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Uu=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Fu=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Ou=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Bu=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,zu=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,ku=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,Gu=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Hu=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Vu=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Wu=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Xu=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Yu=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,qu=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Ku=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Zu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,$u=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Ju=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Qu=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,ju=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,td=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,ed=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,nd=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,id=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,sd=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,rd=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,ad=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,od="gl_FragColor = linearToOutputTexel( gl_FragColor );",ld=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,cd=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,hd=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,ud=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,dd=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,fd=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,pd=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,md=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,_d=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,gd=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,xd=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,vd=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Sd=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Md=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,yd=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,Ed=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * worldNormal, ENVMAP_MAX_LOD );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * reflectVec, roughnessToMip( roughness ) );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureLod( envMap, envMapRotation * retroVec, roughnessToMip( roughness ) );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_PMREM
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,bd=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Td=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Ad=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,wd=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Rd=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.045 );
material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef USE_DIFFUSE_ROUGHNESS
	float diffuseRoughnessFactor = diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		diffuseRoughnessFactor *= texture2D( diffuseRoughnessMap, vDiffuseRoughnessMapUv ).r;
	#endif
	material.diffuseRoughness = saturate( diffuseRoughnessFactor );
#endif
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.045 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Cd=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float diffuseRoughness;
	#endif
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
#ifdef USE_DIFFUSE_ROUGHNESS
	const float EON_EPSILON = 1e-7;
	float FON_DirectionalAlbedo( const in float mu, const in float roughness, const in float A ) {
		float muComp = 1.0 - mu;
		float gOverPi = muComp * ( 0.0571085289 + muComp * ( 0.491881867 + muComp * ( - 0.332181442 + muComp * 0.0714429953 ) ) );
		return A * ( 1.0 + roughness * gOverPi );
	}
	vec3 BRDF_EON( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 diffuseColor, const in float roughness ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return BRDF_Lambert( rho );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float s = dot( lightDir, viewDir ) - dotNL * dotNV;
		float sOverT = ( s > 0.0 ) ? s / max( max( dotNL, dotNV ), EON_EPSILON ) : s;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		vec3 singleScatter = rho * RECIPROCAL_PI * A * ( 1.0 + roughness * sOverT );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		float albedoV = FON_DirectionalAlbedo( dotNV, roughness, A );
		float albedoL = FON_DirectionalAlbedo( dotNL, roughness, A );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		vec3 multiScatter = rhoMultiScatter * RECIPROCAL_PI
			* max( EON_EPSILON, 1.0 - albedoV )
			* max( EON_EPSILON, 1.0 - albedoL )
			/ max( EON_EPSILON, 1.0 - averageAlbedo );
		return singleScatter + multiScatter;
	}
	vec3 EON_DirectionalAlbedo( const in vec3 diffuseColor, const in float roughness, const in float dotNV ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return rho;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		float directionalAlbedo = FON_DirectionalAlbedo( dotNV, roughness, A );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		return rho * directionalAlbedo + rhoMultiScatter * ( 1.0 - directionalAlbedo );
	}
#endif
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = max( material.clearcoatRoughness, 0.045 );
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = max( material.roughness, 0.045 );
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float alphaT = max( material.alphaT, alpha );
		float V = V_GGX_SmithCorrelated_Anisotropic( alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		vec3 diffuseBRDF = BRDF_EON( directLight.direction, geometryViewDir, geometryNormal, material.diffuseColor, material.diffuseRoughness ) * ( 1.0 - material.metalness );
	#else
		vec3 diffuseBRDF = BRDF_Lambert( material.diffuseContribution );
	#endif
	reflectedLight.directDiffuse += irradiance * diffuseBRDF * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuseAlbedo = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness );
		vec3 diffuse = irradiance * RECIPROCAL_PI * diffuseAlbedo * ( 1.0 - singleScattering - multiScattering );
	#else
		vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#endif
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuse = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness ) * ( 1.0 - totalScatteringDielectric );
	#else
		vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	#endif
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Pd=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_LIGHT_PROBE_GRIDS > 0
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		int probeGrid = - 1;
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( isInsideLightProbeGrid( probeWorldPos, probeWorldNormal, probesMin[ i ], probesMax[ i ], probesResolution[ i ] ) ) probeGrid = UNROLLED_LOOP_INDEX;
		}
		#pragma unroll_loop_end
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( probeGrid == UNROLLED_LOOP_INDEX ) irradiance += getLightProbeGridIrradiance( probesSH[ i ], probesMin[ i ], probesMax[ i ], probesResolution[ i ], probeWorldPos, probeWorldNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Ld=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_PMREM )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Dd=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Id=`#if NUM_LIGHT_PROBE_GRIDS > 0
uniform highp sampler3D probesSH[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMin[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMax[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesResolution[ NUM_LIGHT_PROBE_GRIDS ];
bool isInsideLightProbeGrid( vec3 worldPos, vec3 worldNormal, vec3 probesMin, vec3 probesMax, vec3 probesResolution ) {
	vec3 spacing = ( probesMax - probesMin ) / probesResolution;
	vec3 samplePos = worldPos + worldNormal * spacing * 0.5;
	vec3 margin = spacing * 0.01;
	return all( greaterThanEqual( samplePos, probesMin - margin ) ) && all( lessThanEqual( samplePos, probesMax + margin ) );
}
vec3 getLightProbeGridIrradiance( highp sampler3D probesSH, vec3 probesMin, vec3 probesMax, vec3 probesResolution, vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 probeSpacing = gridRange / res;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.5 / res, 1.0 - 0.5 / res );
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,Nd=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Ud=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Fd=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Od=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Bd=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,zd=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,kd=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Gd=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Hd=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Vd=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Wd=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Xd=`#if defined( USE_MORPHCOLORS )
	#if defined( USE_COLOR_ALPHA )
		vColor *= morphTargetBaseInfluence;
	#elif defined( USE_COLOR )
		vColor.rgb *= morphTargetBaseInfluence;
	#endif
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor.rgb += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Yd=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,qd=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Kd=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Zd=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,$d=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Jd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Qd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,jd=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,tf=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,ef=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,nf=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,sf=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,rf=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,af=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,of=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,lf=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,cf=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,hf=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,uf=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,df=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,ff=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,pf=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				vec2 radius = shadowRadius * texelSize;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float lightDistance = length( lightToPosition );
			float depthRange = shadowCameraFar - shadowCameraNear;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float depthA = - shadowCameraNear / depthRange - shadowBias;
				float depthB = shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#else
				float depthA = shadowCameraFar / depthRange + shadowBias;
				float depthB = - shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			shadow = 0.0;
			for ( int i = 0; i < 5; i ++ ) {
				vec2 offset = vogelDiskSample( i, 5, phi );
				vec3 direction = bd3D + ( tangent * offset.x + bitangent * offset.y ) * texelSize;
				vec3 absDirection = abs( direction );
				float dp = depthA + depthB / max( max( absDirection.x, absDirection.y ), absDirection.z );
				shadow += texture( shadowMap, vec4( direction, dp ) );
			}
			shadow *= 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,mf=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,_f=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,gf=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,xf=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,vf=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Sf=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Mf=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,yf=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Ef=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,bf=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Tf=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Af=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,wf=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Rf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Cf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	uniform mat3 diffuseRoughnessMapTransform;
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Pf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	vDiffuseRoughnessMapUv = ( diffuseRoughnessMapTransform * vec3( DIFFUSE_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Lf=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Df=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,If=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Nf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Uf=`uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <envmap_common_pars_fragment>
void main() {
	#ifdef ENVMAP_TYPE_PMREM
		vec4 texColor = textureLod( envMap, backgroundRotation * vWorldDirection, roughnessToMip( backgroundBlurriness ) );
	#else
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ff=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Of=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Bf=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,zf=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,kf=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Gf=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,Hf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Vf=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Wf=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Xf=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Yf=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,qf=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Kf=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Zf=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,$f=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Jf=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Qf=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,jf=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,tp=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ep=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,np=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,ip=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DIFFUSE_ROUGHNESS
	uniform float diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		uniform sampler2D diffuseRoughnessMap;
	#endif
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,sp=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,rp=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ap=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,op=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,lp=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,cp=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,hp=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,up=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Xt={alphahash_fragment:Du,alphahash_pars_fragment:Iu,alphamap_fragment:Nu,alphamap_pars_fragment:Uu,alphatest_fragment:Fu,alphatest_pars_fragment:Ou,aomap_fragment:Bu,aomap_pars_fragment:zu,batching_pars_vertex:ku,batching_vertex:Gu,begin_vertex:Hu,beginnormal_vertex:Vu,bsdfs:Wu,iridescence_fragment:Xu,bumpmap_pars_fragment:Yu,clipping_planes_fragment:qu,clipping_planes_pars_fragment:Ku,clipping_planes_pars_vertex:Zu,clipping_planes_vertex:$u,color_fragment:Ju,color_pars_fragment:Qu,color_pars_vertex:ju,color_vertex:td,common:ed,defaultnormal_vertex:nd,displacementmap_pars_vertex:id,displacementmap_vertex:sd,emissivemap_fragment:rd,emissivemap_pars_fragment:ad,colorspace_fragment:od,colorspace_pars_fragment:ld,envmap_fragment:cd,envmap_common_pars_fragment:hd,envmap_pars_fragment:ud,envmap_pars_vertex:dd,envmap_physical_pars_fragment:Ed,envmap_vertex:fd,fog_vertex:pd,fog_pars_vertex:md,fog_fragment:_d,fog_pars_fragment:gd,gradientmap_pars_fragment:xd,lightmap_pars_fragment:vd,lights_lambert_fragment:Sd,lights_lambert_pars_fragment:Md,lights_pars_begin:yd,lights_toon_fragment:bd,lights_toon_pars_fragment:Td,lights_phong_fragment:Ad,lights_phong_pars_fragment:wd,lights_physical_fragment:Rd,lights_physical_pars_fragment:Cd,lights_fragment_begin:Pd,lights_fragment_maps:Ld,lights_fragment_end:Dd,lightprobes_pars_fragment:Id,logdepthbuf_fragment:Nd,logdepthbuf_pars_fragment:Ud,logdepthbuf_pars_vertex:Fd,logdepthbuf_vertex:Od,map_fragment:Bd,map_pars_fragment:zd,map_particle_fragment:kd,map_particle_pars_fragment:Gd,metalnessmap_fragment:Hd,metalnessmap_pars_fragment:Vd,morphinstance_vertex:Wd,morphcolor_vertex:Xd,morphnormal_vertex:Yd,morphtarget_pars_vertex:qd,morphtarget_vertex:Kd,normal_fragment_begin:Zd,normal_fragment_maps:$d,normal_pars_fragment:Jd,normal_pars_vertex:Qd,normal_vertex:jd,normalmap_pars_fragment:tf,clearcoat_normal_fragment_begin:ef,clearcoat_normal_fragment_maps:nf,clearcoat_pars_fragment:sf,iridescence_pars_fragment:rf,opaque_fragment:af,packing:of,premultiplied_alpha_fragment:lf,project_vertex:cf,dithering_fragment:hf,dithering_pars_fragment:uf,roughnessmap_fragment:df,roughnessmap_pars_fragment:ff,shadowmap_pars_fragment:pf,shadowmap_pars_vertex:mf,shadowmap_vertex:_f,shadowmask_pars_fragment:gf,skinbase_vertex:xf,skinning_pars_vertex:vf,skinning_vertex:Sf,skinnormal_vertex:Mf,specularmap_fragment:yf,specularmap_pars_fragment:Ef,tonemapping_fragment:bf,tonemapping_pars_fragment:Tf,transmission_fragment:Af,transmission_pars_fragment:wf,uv_pars_fragment:Rf,uv_pars_vertex:Cf,uv_vertex:Pf,worldpos_vertex:Lf,background_vert:Df,background_frag:If,backgroundCube_vert:Nf,backgroundCube_frag:Uf,cube_vert:Ff,cube_frag:Of,depth_vert:Bf,depth_frag:zf,distance_vert:kf,distance_frag:Gf,equirect_vert:Hf,equirect_frag:Vf,linedashed_vert:Wf,linedashed_frag:Xf,meshbasic_vert:Yf,meshbasic_frag:qf,meshlambert_vert:Kf,meshlambert_frag:Zf,meshmatcap_vert:$f,meshmatcap_frag:Jf,meshnormal_vert:Qf,meshnormal_frag:jf,meshphong_vert:tp,meshphong_frag:ep,meshphysical_vert:np,meshphysical_frag:ip,meshtoon_vert:sp,meshtoon_frag:rp,points_vert:ap,points_frag:op,shadow_vert:lp,shadow_frag:cp,sprite_vert:hp,sprite_frag:up},St={common:{diffuse:{value:new Zt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Gt},alphaMap:{value:null},alphaMapTransform:{value:new Gt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Gt}},envmap:{envMap:{value:null},envMapRotation:{value:new Gt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Gt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Gt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Gt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Gt},normalScale:{value:new Ct(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Gt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Gt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Gt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Gt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Zt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new Zt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Gt},alphaTest:{value:0},uvTransform:{value:new Gt}},sprite:{diffuse:{value:new Zt(16777215)},opacity:{value:1},center:{value:new Ct(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Gt},alphaMap:{value:null},alphaMapTransform:{value:new Gt},alphaTest:{value:0}}},gn={basic:{uniforms:He([St.common,St.specularmap,St.envmap,St.aomap,St.lightmap,St.fog]),vertexShader:Xt.meshbasic_vert,fragmentShader:Xt.meshbasic_frag},lambert:{uniforms:He([St.common,St.specularmap,St.envmap,St.aomap,St.lightmap,St.emissivemap,St.bumpmap,St.normalmap,St.displacementmap,St.fog,St.lights,{emissive:{value:new Zt(0)},envMapIntensity:{value:1}}]),vertexShader:Xt.meshlambert_vert,fragmentShader:Xt.meshlambert_frag},phong:{uniforms:He([St.common,St.specularmap,St.envmap,St.aomap,St.lightmap,St.emissivemap,St.bumpmap,St.normalmap,St.displacementmap,St.fog,St.lights,{emissive:{value:new Zt(0)},specular:{value:new Zt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Xt.meshphong_vert,fragmentShader:Xt.meshphong_frag},standard:{uniforms:He([St.common,St.envmap,St.aomap,St.lightmap,St.emissivemap,St.bumpmap,St.normalmap,St.displacementmap,St.roughnessmap,St.metalnessmap,St.fog,St.lights,{emissive:{value:new Zt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Xt.meshphysical_vert,fragmentShader:Xt.meshphysical_frag},toon:{uniforms:He([St.common,St.aomap,St.lightmap,St.emissivemap,St.bumpmap,St.normalmap,St.displacementmap,St.gradientmap,St.fog,St.lights,{emissive:{value:new Zt(0)}}]),vertexShader:Xt.meshtoon_vert,fragmentShader:Xt.meshtoon_frag},matcap:{uniforms:He([St.common,St.bumpmap,St.normalmap,St.displacementmap,St.fog,{matcap:{value:null}}]),vertexShader:Xt.meshmatcap_vert,fragmentShader:Xt.meshmatcap_frag},points:{uniforms:He([St.points,St.fog]),vertexShader:Xt.points_vert,fragmentShader:Xt.points_frag},dashed:{uniforms:He([St.common,St.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Xt.linedashed_vert,fragmentShader:Xt.linedashed_frag},depth:{uniforms:He([St.common,St.displacementmap]),vertexShader:Xt.depth_vert,fragmentShader:Xt.depth_frag},normal:{uniforms:He([St.common,St.bumpmap,St.normalmap,St.displacementmap,{opacity:{value:1}}]),vertexShader:Xt.meshnormal_vert,fragmentShader:Xt.meshnormal_frag},sprite:{uniforms:He([St.sprite,St.fog]),vertexShader:Xt.sprite_vert,fragmentShader:Xt.sprite_frag},background:{uniforms:{uvTransform:{value:new Gt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Xt.background_vert,fragmentShader:Xt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Gt}},vertexShader:Xt.backgroundCube_vert,fragmentShader:Xt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Xt.cube_vert,fragmentShader:Xt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Xt.equirect_vert,fragmentShader:Xt.equirect_frag},distance:{uniforms:He([St.common,St.displacementmap,{referencePosition:{value:new U},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Xt.distance_vert,fragmentShader:Xt.distance_frag},shadow:{uniforms:He([St.lights,St.fog,{color:{value:new Zt(0)},opacity:{value:1}}]),vertexShader:Xt.shadow_vert,fragmentShader:Xt.shadow_frag}};gn.physical={uniforms:He([gn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Gt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Gt},clearcoatNormalScale:{value:new Ct(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Gt},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new Gt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Gt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Gt},sheen:{value:0},sheenColor:{value:new Zt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Gt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Gt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Gt},transmissionSamplerSize:{value:new Ct},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Gt},attenuationDistance:{value:0},attenuationColor:{value:new Zt(0)},specularColor:{value:new Zt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Gt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Gt},anisotropyVector:{value:new Ct},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Gt}}]),vertexShader:Xt.meshphysical_vert,fragmentShader:Xt.meshphysical_frag};const Vs={r:0,b:0,g:0},dp=new he,Ic=new Gt;Ic.set(-1,0,0,0,1,0,0,0,1);function fp(n,t,e,i,s,r){const a=new Zt(0);let o=s===!0?0:1,l,c,d=null,m=0,h=null;function p(S){let A=S.isScene===!0?S.background:null;if(A&&A.isTexture){const y=S.backgroundBlurriness>0;A=t.get(A,y)}return A}function v(S){let A=!1;const y=p(S);y===null?f(a,o):y&&y.isColor&&(f(y,1),A=!0);const w=n.xr.getEnvironmentBlendMode();w==="additive"?e.buffers.color.setClear(0,0,0,1,r):w==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(n.autoClear||A)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function E(S,A){const y=p(A);y&&y.isCubeTexture?(c===void 0&&(c=new _e(new oe(1,1,1),new pi({name:"BackgroundCubeMaterial",uniforms:Wi(gn.backgroundCube.uniforms),vertexShader:gn.backgroundCube.vertexShader,fragmentShader:gn.backgroundCube.fragmentShader,side:qe,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(w,b,_){this.matrixWorld.copyPosition(_.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=y,c.material.uniforms.backgroundBlurriness.value=A.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(dp.makeRotationFromEuler(A.backgroundRotation)).transpose(),y.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Ic),c.material.toneMapped=Jt.getTransfer(y.colorSpace)!==ie,(d!==y||m!==y.version||h!==n.toneMapping)&&(c.material.needsUpdate=!0,d=y,m=y.version,h=n.toneMapping),c.layers.enableAll(),S.unshift(c,c.geometry,c.material,0,0,null)):y&&y.isTexture&&(l===void 0&&(l=new _e(new _s(2,2),new pi({name:"BackgroundMaterial",uniforms:Wi(gn.background.uniforms),vertexShader:gn.background.vertexShader,fragmentShader:gn.background.fragmentShader,side:di,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=y,l.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,l.material.toneMapped=Jt.getTransfer(y.colorSpace)!==ie,y.matrixAutoUpdate===!0&&y.updateMatrix(),l.material.uniforms.uvTransform.value.copy(y.matrix),(d!==y||m!==y.version||h!==n.toneMapping)&&(l.material.needsUpdate=!0,d=y,m=y.version,h=n.toneMapping),l.layers.enableAll(),S.unshift(l,l.geometry,l.material,0,0,null))}function f(S,A){S.getRGB(Vs,Cc(n)),e.buffers.color.setClear(Vs.r,Vs.g,Vs.b,A,r)}function u(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(S,A=1){a.set(S),o=A,f(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(S){o=S,f(a,o)},render:v,addToRenderList:E,dispose:u}}function pp(n,t){const e=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=h(null);let r=s,a=!1;function o(N,F,W,P,H){let q=!1;const V=m(N,P,W,F);r!==V&&(r=V,c(r.object)),q=p(N,P,W,H),q&&v(N,P,W,H),H!==null&&t.update(H,n.ELEMENT_ARRAY_BUFFER),(q||a)&&(a=!1,y(N,F,W,P),H!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(H).buffer))}function l(){return n.createVertexArray()}function c(N){return n.bindVertexArray(N)}function d(N){return n.deleteVertexArray(N)}function m(N,F,W,P){const H=P.wireframe===!0;let q=i[F.id];q===void 0&&(q={},i[F.id]=q);const V=N.isInstancedMesh===!0?N.id:0;let et=q[V];et===void 0&&(et={},q[V]=et);let X=et[W.id];X===void 0&&(X={},et[W.id]=X);let j=X[H];return j===void 0&&(j=h(l()),X[H]=j),j}function h(N){const F=[],W=[],P=[];for(let H=0;H<e;H++)F[H]=0,W[H]=0,P[H]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:F,enabledAttributes:W,attributeDivisors:P,object:N,attributes:{},index:null}}function p(N,F,W,P){const H=r.attributes,q=F.attributes;let V=0;const et=W.getAttributes();for(const X in et)if(et[X].location>=0){const tt=H[X];let wt=q[X];if(wt===void 0&&(X==="instanceMatrix"&&N.instanceMatrix&&(wt=N.instanceMatrix),X==="instanceColor"&&N.instanceColor&&(wt=N.instanceColor)),tt===void 0||tt.attribute!==wt||wt&&tt.data!==wt.data)return!0;V++}return r.attributesNum!==V||r.index!==P}function v(N,F,W,P){const H={},q=F.attributes;let V=0;const et=W.getAttributes();for(const X in et)if(et[X].location>=0){let tt=q[X];tt===void 0&&(X==="instanceMatrix"&&N.instanceMatrix&&(tt=N.instanceMatrix),X==="instanceColor"&&N.instanceColor&&(tt=N.instanceColor));const wt={};wt.attribute=tt,tt&&tt.data&&(wt.data=tt.data),H[X]=wt,V++}r.attributes=H,r.attributesNum=V,r.index=P}function E(){const N=r.newAttributes;for(let F=0,W=N.length;F<W;F++)N[F]=0}function f(N){u(N,0)}function u(N,F){const W=r.newAttributes,P=r.enabledAttributes,H=r.attributeDivisors;W[N]=1,P[N]===0&&(n.enableVertexAttribArray(N),P[N]=1),H[N]!==F&&(n.vertexAttribDivisor(N,F),H[N]=F)}function S(){const N=r.newAttributes,F=r.enabledAttributes;for(let W=0,P=F.length;W<P;W++)F[W]!==N[W]&&(n.disableVertexAttribArray(W),F[W]=0)}function A(N,F,W,P,H,q,V){V===!0?n.vertexAttribIPointer(N,F,W,H,q):n.vertexAttribPointer(N,F,W,P,H,q)}function y(N,F,W,P){E();const H=P.attributes,q=W.getAttributes(),V=F.defaultAttributeValues;for(const et in q){const X=q[et];if(X.location>=0){let j=H[et];if(j===void 0&&(et==="instanceMatrix"&&N.instanceMatrix&&(j=N.instanceMatrix),et==="instanceColor"&&N.instanceColor&&(j=N.instanceColor)),j!==void 0){const tt=j.normalized,wt=j.itemSize,Ft=t.get(j);if(Ft===void 0)continue;const Z=Ft.buffer,mt=Ft.type,Et=Ft.bytesPerElement,It=mt===n.INT||mt===n.UNSIGNED_INT||j.gpuType===Ja;if(j.isInterleavedBufferAttribute){const xt=j.data,zt=xt.isInterleavedBuffer===!0?xt.stride:xt.itemSize,ue=j.offset;if(xt.isInstancedInterleavedBuffer||xt.isInstancedBufferAttribute){for(let G=0;G<X.locationSize;G++)u(X.location+G,xt.meshPerAttribute);N.isInstancedMesh!==!0&&P._maxInstanceCount===void 0&&(P._maxInstanceCount=xt.meshPerAttribute*xt.count)}else for(let G=0;G<X.locationSize;G++)f(X.location+G);n.bindBuffer(n.ARRAY_BUFFER,Z);for(let G=0;G<X.locationSize;G++)A(X.location+G,wt/X.locationSize,mt,tt,zt*Et,(ue+wt/X.locationSize*G)*Et,It)}else{if(j.isInstancedBufferAttribute){for(let xt=0;xt<X.locationSize;xt++)u(X.location+xt,j.meshPerAttribute);N.isInstancedMesh!==!0&&P._maxInstanceCount===void 0&&(P._maxInstanceCount=j.meshPerAttribute*j.count)}else for(let xt=0;xt<X.locationSize;xt++)f(X.location+xt);n.bindBuffer(n.ARRAY_BUFFER,Z);for(let xt=0;xt<X.locationSize;xt++)A(X.location+xt,wt/X.locationSize,mt,tt,wt*Et,wt/X.locationSize*xt*Et,It)}}else if(V!==void 0){const tt=V[et];if(tt!==void 0)switch(tt.length){case 2:n.vertexAttrib2fv(X.location,tt);break;case 3:n.vertexAttrib3fv(X.location,tt);break;case 4:n.vertexAttrib4fv(X.location,tt);break;default:n.vertexAttrib1fv(X.location,tt)}}}}S()}function w(){D();for(const N in i){const F=i[N];for(const W in F){const P=F[W];for(const H in P){const q=P[H];for(const V in q)d(q[V].object),delete q[V];delete P[H]}}delete i[N]}}function b(N){if(i[N.id]===void 0)return;const F=i[N.id];for(const W in F){const P=F[W];for(const H in P){const q=P[H];for(const V in q)d(q[V].object),delete q[V];delete P[H]}}delete i[N.id]}function _(N){for(const F in i){const W=i[F];for(const P in W){const H=W[P];if(H[N.id]===void 0)continue;const q=H[N.id];for(const V in q)d(q[V].object),delete q[V];delete H[N.id]}}}function M(N){for(const F in i){const W=i[F],P=N.isInstancedMesh===!0?N.id:0,H=W[P];if(H!==void 0){for(const q in H){const V=H[q];for(const et in V)d(V[et].object),delete V[et];delete H[q]}delete W[P],Object.keys(W).length===0&&delete i[F]}}}function D(){C(),a=!0,r!==s&&(r=s,c(r.object))}function C(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:D,resetDefaultState:C,dispose:w,releaseStatesOfGeometry:b,releaseStatesOfObject:M,releaseStatesOfProgram:_,initAttributes:E,enableAttribute:f,disableUnusedAttributes:S}}function mp(n,t,e){let i;function s(l){i=l}function r(l,c){n.drawArrays(i,l,c),e.update(c,i,1)}function a(l,c,d){d!==0&&(n.drawArraysInstanced(i,l,c,d),e.update(c,i,d))}function o(l,c,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,c,0,d);let h=0;for(let p=0;p<d;p++)h+=c[p];e.update(h,i,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function _p(n,t,e,i){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const _=t.get("EXT_texture_filter_anisotropic");s=n.getParameter(_.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(_){return!(_!==Sn&&i.convert(_)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(_){const M=_===En&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(_!==$e&&_!==vn&&!M&&i.convert(_)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE))}function l(_){if(_==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";_="mediump"}return _==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const d=l(c);d!==c&&(Bt("WebGLRenderer:",c,"not supported, using",d,"instead."),c=d);const m=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),h=e.logarithmicDepthBuffer===!0&&m===!1;e.reversedDepthBuffer===!0&&m===!1&&Bt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),e.logarithmicDepthBuffer===!0&&m===!0&&Bt("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");const p=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),v=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),E=n.getParameter(n.MAX_TEXTURE_SIZE),f=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),u=n.getParameter(n.MAX_VERTEX_ATTRIBS),S=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),A=n.getParameter(n.MAX_VARYING_VECTORS),y=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),w=n.getParameter(n.MAX_SAMPLES),b=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:h,reversedDepthBuffer:m,maxTextures:p,maxVertexTextures:v,maxTextureSize:E,maxCubemapSize:f,maxAttributes:u,maxVertexUniforms:S,maxVaryings:A,maxFragmentUniforms:y,maxSamples:w,samples:b}}function gp(n){const t=this;let e=null,i=0,s=!1,r=!1;const a=new Ln,o=new Gt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(m,h){const p=m.length!==0||h||i!==0||s;return s=h,i=m.length,p},this.beginShadows=function(){r=!0,d(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(m,h){e=d(m,h,0)},this.setState=function(m,h,p){const v=m.clippingPlanes,E=m.clipIntersection,f=m.clipShadows,u=n.get(m);if(!s||v===null||v.length===0||r&&!f)r?d(null):c();else{const S=r?0:i,A=S*4;let y=u.clippingState||null;l.value=y,y=d(v,h,A,p);for(let w=0;w!==A;++w)y[w]=e[w];u.clippingState=y,this.numIntersection=E?this.numPlanes:0,this.numPlanes+=S}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function d(m,h,p,v){const E=m!==null?m.length:0;let f=null;if(E!==0){if(f=l.value,v!==!0||f===null){const u=p+E*4,S=h.matrixWorldInverse;o.getNormalMatrix(S),(f===null||f.length<u)&&(f=new Float32Array(u));for(let A=0,y=p;A!==E;++A,y+=4)a.copy(m[A]).applyMatrix4(S,o),a.normal.toArray(f,y),f[y+3]=a.constant}l.value=f,l.needsUpdate=!0}return t.numPlanes=E,t.numIntersection=0,f}}class mo extends Mn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const i={width:t,height:t,depth:1},s=[i,i,i,i,i,i];this.texture=new Ac(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new oe(5,5,5),r=new pi({name:"CubemapFromEquirect",uniforms:Wi(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:qe,blending:Bi});r.uniforms.tEquirect.value=e;const a=new _e(s,r),o=e.minFilter;return e.minFilter===Kn&&(e.minFilter=Ve),new Wa(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e=!0,i=!0,s=!0){const r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,i,s);t.setRenderTarget(r)}}const ml=256,xp=3,vp=20,Nc=256,Uc=16,Sp=3,Mp=new U,yp=new Zt;class hr{constructor(t){this._renderer=t,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new Wa(1,10,null),this._boxMesh=new _e(new oe(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(t,e=0,i=.1,s=100,r={}){const{size:a=256,position:o=Mp}=r,l=this._renderer;this._setSize(a);const c=this._allocateTarget(),d=this._getSourceTarget(!0);e>0&&(d.texture.mipmapsAutoUpdate=!1);const m=l.autoClear,h=l.autoClearColor,p=l.autoClearDepth,v=l.autoClearStencil,E=t.background;l.autoClear=!0,l.autoClearColor=!0,l.autoClearDepth=!0,l.autoClearStencil=!0,E===null&&(t.background=l.getClearColor(yp));const f=new Wa(i,s,d);return f.position.copy(o),f.update(l,t),l.autoClear=m,l.autoClearColor=h,l.autoClearDepth=p,l.autoClearStencil=v,t.background=E,e>0&&(d.texture.mipmapsAutoUpdate=!0,this._blur(c,e)),this._applyPMREM(c),c}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=xl(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=gl(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(t,e){return e>0?1-Math.sqrt(1-t/e):0}_setSize(t){this._cubeSize=Math.max(ml,Gh(t))}_fromTexture(t,e){t.mapping===ki||t.mapping===us?this._setSize(t.image.length===0?ml:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4);const i=e||this._allocateTarget();return this._textureToCubemap(t),this._applyPMREM(i),i}_allocateTarget(){const t=this._cubeSize,e=_l(t,!1,!1),i=Math.log2(t)-xp;for(let s=0;s<=i;s++)e.texture.mipmaps.push({width:t>>s,height:t>>s});return e.texture.name="PMREM",e.texture.isPMREMTexture=!0,e}_getSourceTarget(t=!1){const e=this._cubeSize,i=this._sourceTarget;return(i===null||i.width!==e||t&&i.depthBuffer===!1)&&(i!==null&&i.dispose(),this._sourceTarget=_l(e,!0,t)),this._sourceTarget}_compileMaterial(t){this._boxMesh.material=t,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(t,e,i){const s=this._boxMesh,r=this._cubeCamera;s.material=i,r.renderTarget=t,r.activeMipmapLevel=e;const a=t.width>>e;t.viewport.set(0,0,a,a),r.update(this._renderer,s),t.viewport.set(0,0,t.width,t.height)}_textureToCubemap(t){let e;t.mapping===ki||t.mapping===us?(this._cubemapMaterial===null&&(this._cubemapMaterial=xl()),e=this._cubemapMaterial,e.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=gl()),e=this._equirectMaterial),e.uniforms.envMap.value=t,this._renderCube(this._getSourceTarget(),0,e)}_applyPMREM(t){this._ggxMaterial===null&&(this._ggxMaterial=Ep(),this._integrationMaterial=bp());const e=this._cubeSize,i=t.texture.mipmaps.length-1,s=this._ggxMaterial.uniforms;s.envMap.value=this._sourceTarget.texture;const r=this._integrationMaterial.uniforms;r.envMap.value=this._sourceTarget.texture,r.sourceLod.value=Math.log2(e/Uc);for(let a=0;a<=i;a++){const o=hr.lodToRoughness(a,i);if(a>i-Sp)r.roughness.value=o,this._renderCube(t,a,this._integrationMaterial);else{const l=o>0?Math.log2(e)+.5*Math.log2(6/(Nc*Math.pow(o,4)))+.5:0;s.roughness.value=o,s.lodBias.value=l,this._renderCube(t,a,this._ggxMaterial)}}}_blur(t,e){this._blurMaterial===null&&(this._blurMaterial=Tp());const i=this._blurMaterial,s=i.uniforms,r=this._sourceTarget;s.sigma.value=Math.min(e,Math.PI)/Math.SQRT2,s.envMap.value=r.texture,this._renderCube(t,0,i),s.envMap.value=t.texture,this._renderCube(r,0,i)}}function _l(n,t,e){return new mo(n,{minFilter:Kn,generateMipmaps:t,type:En,colorSpace:rr,depthBuffer:e})}function gs(n,t,e){return new pi({name:n,uniforms:t,vertexShader:Xt.cube_vert,fragmentShader:e,side:qe,blending:Bi,depthTest:!1,depthWrite:!1})}function Ep(){return gs("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${Nc}u

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float lodBias;

		#include <common>

		// Van der Corput radical inverse
		float radicalInverse_VdC( uint bits ) {

			bits = ( bits << 16u ) | ( bits >> 16u );
			bits = ( ( bits & 0x55555555u ) << 1u ) | ( ( bits & 0xAAAAAAAAu ) >> 1u );
			bits = ( ( bits & 0x33333333u ) << 2u ) | ( ( bits & 0xCCCCCCCCu ) >> 2u );
			bits = ( ( bits & 0x0F0F0F0Fu ) << 4u ) | ( ( bits & 0xF0F0F0F0u ) >> 4u );
			bits = ( ( bits & 0x00FF00FFu ) << 8u ) | ( ( bits & 0xFF00FF00u ) >> 8u );
			return float( bits ) * 2.3283064365386963e-10; // / 0x100000000

		}

		// Hammersley sequence
		vec2 hammersley( uint i, uint N ) {

			return vec2( float( i ) / float( N ), radicalInverse_VdC( i ) );

		}

		void main() {

			vec3 N = normalize( vWorldDirection );

			// For very low roughness, just sample the environment directly
			if ( roughness < 0.001 ) {

				gl_FragColor = vec4( textureLod( envMap, N, 0.0 ).rgb, 1.0 );
				return;

			}

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			// Tangent space basis for VNDF sampling
			vec3 up = abs( N.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, N ) );
			vec3 bitangent = cross( N, tangent );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			for ( uint i = 0u; i < GGX_SAMPLES; i ++ ) {

				vec2 Xi = hammersley( i, GGX_SAMPLES );

				// With V = N, sample the reflected direction directly.
				float invQ = 1.0 / ( 1.0 - Xi.x + alpha2 * Xi.x );
				float NdotL = ( 1.0 - Xi.x - alpha2 * Xi.x ) * invQ;

				if ( NdotL > 0.0 ) {

					float phi = 2.0 * PI * Xi.y;
					float sinTheta = 2.0 * alpha * sqrt( Xi.x * ( 1.0 - Xi.x ) ) * invQ;
					vec3 L = N * NdotL + ( tangent * cos( phi ) + bitangent * sin( phi ) ) * sinTheta;

					// Match the source mip to the sample's solid angle. The terms
					// independent of the sample are precomputed in lodBias.
					float d = alpha2 * invQ;
					float lod = max( log2( d ) + lodBias, 0.0 );

					// Weight by NdotL for the split-sum approximation
					prefilteredColor += textureLod( envMap, L, lod ).rgb * NdotL;
					totalWeight += NdotL;

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function bp(){return gs("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:Uc}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float sourceLod;
		uniform int sourceSize;

		void main() {

			vec3 N = normalize( vWorldDirection );

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			float texelSize = 2.0 / float( sourceSize );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			// Pair opposite texels: only the one in N's hemisphere contributes.
			for ( int face = 0; face < 3; face ++ ) {

				for ( int y = 0; y < sourceSize; y ++ ) {

					for ( int x = 0; x < sourceSize; x ++ ) {

						vec2 uv = ( vec2( x, y ) + 0.5 ) * texelSize - 1.0;
						vec3 texelDirection = face == 0 ? vec3( 1.0, uv ) : ( face == 1 ? vec3( uv.x, 1.0, uv.y ) : vec3( uv, 1.0 ) );

						float invDistance = inversesqrt( 1.0 + dot( uv, uv ) );
						float NdotL = dot( N, texelDirection );
						texelDirection *= NdotL < 0.0 ? - 1.0 : 1.0;
						NdotL = abs( NdotL ) * invDistance;

						// With V = N, NdotH squared is ( 1 + NdotL ) / 2. Common factors
						// in the GGX distribution and texel solid angle cancel when normalized.
						float d = 1.0 + alpha2 + ( alpha2 - 1.0 ) * NdotL;
						float weight = NdotL * invDistance * invDistance * invDistance / ( d * d );

						prefilteredColor += textureLod( envMap, texelDirection, sourceLod ).rgb * weight;
						totalWeight += weight;

					}

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function Tp(){return gs("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${vp}
		#define GOLDEN_ANGLE 2.39996322973

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float sigma;

		#include <common>

		void main() {

			vec3 outputDirection = normalize( vWorldDirection );

			vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, outputDirection ) );
			vec3 bitangent = cross( outputDirection, tangent );

			// Truncate the kernel at three standard deviations or at the antipode.
			float thetaMax = min( 3.0 * sigma, PI );
			float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

			vec3 accumColor = vec3( 0.0 );
			float accumWeight = 0.0;

			for ( int i = 0; i < SAMPLES; i ++ ) {

				// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
				float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
				float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
				float phi = float( i ) * GOLDEN_ANGLE;

				vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
				vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

				// Correct the planar sample density to solid angle.
				float weight = sin( theta ) / theta;

				accumColor += weight * textureLod( envMap, sampleDirection, 0.0 ).rgb;
				accumWeight += weight;

			}

			gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

		}
	`)}function gl(){return gs("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

		varying vec3 vWorldDirection;

		uniform sampler2D envMap;

		#include <common>

		void main() {

			// Average four subpixel samples to preserve small, bright features.
			vec3 direction = normalize( vWorldDirection );
			vec3 dx = dFdx( direction ) * 0.25;
			vec3 dy = dFdy( direction ) * 0.25;

			vec3 color = textureLod( envMap, equirectUv( normalize( direction - dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction - dx + dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx + dy ) ), 0.0 ).rgb;
			gl_FragColor = vec4( color * 0.25, 1.0 );

		}
	`)}function xl(){return gs("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function Ap(n){let t=new WeakMap,e=new WeakMap,i=null;function s(h,p=!1){return h==null?null:p?a(h):r(h)}function r(h){if(h&&h.isTexture){const p=h.mapping;if(p===Er||p===br)if(t.has(h)){const v=t.get(h).texture;return o(v,h.mapping)}else{const v=h.image;if(v&&v.height>0){const E=new mo(v.height);return E.fromEquirectangularTexture(n,h),t.set(h,E),h.addEventListener("dispose",c),o(E.texture,h.mapping)}else return null}}return h}function a(h){if(h&&h.isTexture&&h.isPMREMTexture!==!0){const p=h.mapping,v=p===Er||p===br,E=p===ki||p===us;if(v||E){let f=e.get(h);const u=f!==void 0?f.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==u)return i===null&&(i=new hr(n)),f=v?i.fromEquirectangular(h,f):i.fromCubemap(h,f),f.texture.pmremVersion=h.pmremVersion,e.set(h,f),f.texture;if(f!==void 0)return f.texture;{const S=h.image;return v&&S&&S.height>0||E&&S&&l(S)?(i===null&&(i=new hr(n)),f=v?i.fromEquirectangular(h):i.fromCubemap(h),f.texture.pmremVersion=h.pmremVersion,e.set(h,f),h.addEventListener("dispose",d),f.texture):null}}}return h}function o(h,p){return p===Er?h.mapping=ki:p===br&&(h.mapping=us),h}function l(h){let p=0;const v=6;for(let E=0;E<v;E++)h[E]!==void 0&&p++;return p===v}function c(h){const p=h.target;p.removeEventListener("dispose",c);const v=t.get(p);v!==void 0&&(t.delete(p),v.dispose())}function d(h){const p=h.target;p.removeEventListener("dispose",d);const v=e.get(p);v!==void 0&&(e.delete(p),v.dispose())}function m(){t=new WeakMap,e=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:m}}function wp(n){const t={};function e(i){if(t[i]!==void 0)return t[i];const s=n.getExtension(i);return t[i]=s,s}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){const s=e(i);return s===null&&js("WebGLRenderer: "+i+" extension not supported."),s}}}function Rp(n,t,e,i){const s={},r=new WeakMap,a=new FinalizationRegistry(v=>delete s[v]);function o(v){l(v.target)}function l(v){v.index!==null&&t.remove(v.index);for(const f in v.attributes)t.remove(v.attributes[f]);v.removeEventListener("dispose",o),delete s[v.id],a.unregister(v);const E=r.get(v);E&&(t.remove(E),r.delete(v)),i.releaseStatesOfGeometry(v),v.isInstancedBufferGeometry===!0&&delete v._maxInstanceCount,e.memory.geometries--}function c(v,E){return s[E.id]!==void 0||(E.addEventListener("dispose",o),s[E.id]=new WeakRef(E),a.register(E,E.id,E),e.memory.geometries++),E}function d(v){const E=v.attributes;for(const f in E)t.update(E[f],n.ARRAY_BUFFER)}function m(v){const E=v.index,f=v.attributes.position;let u=0;if(f===void 0)return;const S=E!==null?E.array.length:f.array.length/3-1,A=f.count>=65535?Ec:yc,y=new A(Math.ceil(S/3)*6,1),w=y.array;if(E!==null){const _=E.array;u=E.version;for(let M=0,D=0;M<S;M+=3){const C=_[M+0],N=_[M+1],F=_[M+2];w[D++]=C,w[D++]=N,w[D++]=N,w[D++]=F,w[D++]=F,w[D++]=C}}else{u=f.version;for(let _=0,M=0;_<S;_+=3){const D=_+0,C=_+1,N=_+2;w[M++]=D,w[M++]=C,w[M++]=C,w[M++]=N,w[M++]=N,w[M++]=D}}y.version=u;const b=r.get(v);b&&t.remove(b),r.set(v,y)}function h(v){const E=r.get(v);if(E){const f=v.index;f!==null&&E.version<f.version&&m(v)}else m(v);return r.get(v)}function p(){for(const v in s){const E=s[v].deref();E!==void 0&&l(E)}}return{get:c,update:d,getWireframeAttribute:h,dispose:p}}function Cp(n,t,e){let i;function s(m){i=m}let r,a;function o(m){r=m.type,a=m.bytesPerElement}function l(m,h){n.drawElements(i,h,r,m*a),e.update(h,i,1)}function c(m,h,p){p!==0&&(n.drawElementsInstanced(i,h,r,m*a,p),e.update(h,i,p))}function d(m,h,p){if(p===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,h,0,r,m,0,p);let E=0;for(let f=0;f<p;f++)E+=h[f];e.update(E,i,1)}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=d}function Pp(n){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,a,o){switch(e.calls++,a){case n.TRIANGLES:e.triangles+=o*(r/3);break;case n.LINES:e.lines+=o*(r/2);break;case n.LINE_STRIP:e.lines+=o*(r-1);break;case n.LINE_LOOP:e.lines+=o*r;break;case n.POINTS:e.points+=o*r;break;default:jt("WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:i}}function Lp(n,t,e){const i=new WeakMap,s=new ge;function r(a,o,l){const c=a.morphTargetInfluences,d=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,m=d!==void 0?d.length:0;let h=i.get(o);if(h===void 0||h.count!==m){let D=function(){_.dispose(),i.delete(o),o.removeEventListener("dispose",D)};h!==void 0&&h.texture.dispose();const p=o.morphAttributes.position!==void 0,v=o.morphAttributes.normal!==void 0,E=o.morphAttributes.color!==void 0,f=o.morphAttributes.position||[],u=o.morphAttributes.normal||[],S=o.morphAttributes.color||[];let A=0;p===!0&&(A=1),v===!0&&(A=2),E===!0&&(A=3);let y=o.attributes.position.count*A,w=1;y>t.maxTextureSize&&(w=Math.ceil(y/t.maxTextureSize),y=t.maxTextureSize);const b=new Float32Array(y*w*4*m),_=new Sc(b,y,w,m);_.type=vn,_.needsUpdate=!0;const M=A*4;for(let C=0;C<m;C++){const N=f[C],F=u[C],W=S[C],P=y*w*4*C;for(let H=0;H<N.count;H++){const q=H*M;p===!0&&(s.fromBufferAttribute(N,H),b[P+q+0]=s.x,b[P+q+1]=s.y,b[P+q+2]=s.z,b[P+q+3]=0),v===!0&&(s.fromBufferAttribute(F,H),b[P+q+4]=s.x,b[P+q+5]=s.y,b[P+q+6]=s.z,b[P+q+7]=0),E===!0&&(s.fromBufferAttribute(W,H),b[P+q+8]=s.x,b[P+q+9]=s.y,b[P+q+10]=s.z,b[P+q+11]=W.itemSize===4?s.w:1)}}h={count:m,texture:_,size:new Ct(y,w)},i.set(o,h),o.addEventListener("dispose",D)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",a.morphTexture,e);else{let p=0;for(let E=0;E<c.length;E++)p+=c[E];const v=o.morphTargetsRelative?1:1-p;l.getUniforms().setValue(n,"morphTargetBaseInfluence",v),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",h.texture,e),l.getUniforms().setValue(n,"morphTargetsTextureSize",h.size)}return{update:r}}function Dp(n,t,e,i,s){let r=new WeakMap;function a(c){const d=s.render.frame,m=c.geometry,h=t.get(c,m);if(r.get(h)!==d&&(t.update(h),r.set(h,d)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==d&&(e.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,n.ARRAY_BUFFER),r.set(c,d))),c.isSkinnedMesh){const p=c.skeleton;r.get(p)!==d&&(p.update(),r.set(p,d))}return h}function o(){r=new WeakMap}function l(c){const d=c.target;d.removeEventListener("dispose",l),i.releaseStatesOfObject(d),e.remove(d.instanceMatrix),d.instanceColor!==null&&e.remove(d.instanceColor)}return{update:a,dispose:o}}const Ip={[Ql]:"LINEAR_TONE_MAPPING",[jl]:"REINHARD_TONE_MAPPING",[tc]:"CINEON_TONE_MAPPING",[ec]:"ACES_FILMIC_TONE_MAPPING",[ic]:"AGX_TONE_MAPPING",[sc]:"NEUTRAL_TONE_MAPPING",[nc]:"CUSTOM_TONE_MAPPING"};function Np(n,t,e,i,s,r){const a=new Mn(t,e,{type:n,depthBuffer:s,stencilBuffer:r,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let o=null,l=null,c=null;const d=new an;d.setAttribute("position",new xe([-1,3,0,-1,-1,0,3,-1,0],3)),d.setAttribute("uv",new xe([0,2,0,0,2,0],2));const m=new gu({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),h=new _e(d,m),p=new Lc(-1,1,1,-1,0,1);let v=null,E=null,f=!1,u,S=null,A=[],y=!1;this.setSize=function(w,b){a.setSize(w,b),o!==null&&o.setSize(w,b),l!==null&&l.setSize(w,b);for(let _=0;_<A.length;_++){const M=A[_];M.setSize&&M.setSize(w,b)}},this.setEffects=function(w){A=w,y=A.length>0&&A[0].isRenderPass===!0;const b=a.width,_=a.height;A.length>0&&o===null&&(o=new Mn(b,_,{type:En,depthBuffer:!1,stencilBuffer:!1}),l=new Mn(b,_,{type:En,depthBuffer:!1,stencilBuffer:!1}));const M=s===!0&&A.some(D=>D.needsDepthTexture===!0);M!==(a.depthTexture!==null)&&(M===!0&&c===null&&(c=new Vi(b,_),r===!0&&(c.format=Zn,c.type=Gi)),a.dispose(),a.depthTexture=M?c:null,a.resolveDepthBuffer=M,a.storeMultisampledDepthBuffer=M);for(let D=0;D<A.length;D++){const C=A[D];C.setSize&&C.setSize(b,_),M&&C.needsDepthTexture===!0&&C.setDepthTexture&&C.setDepthTexture(c)}},this.begin=function(w,b){if(f||w.toneMapping===Un&&A.length===0)return!1;if(S=b,b!==null){const _=b.width,M=b.height;(a.width!==_||a.height!==M)&&this.setSize(_,M)}return y===!1&&w.setRenderTarget(a),u=w.toneMapping,w.toneMapping=Un,!0},this.hasRenderPass=function(){return y},this.end=function(w,b){w.toneMapping=u,f=!0;let _=a,M=o;for(let D=0;D<A.length;D++){const C=A[D];C.enabled!==!1&&(C.render(w,M,_,b),C.needsSwap!==!1&&(_=M,M=M===o?l:o))}if(v!==w.outputColorSpace||E!==w.toneMapping){v=w.outputColorSpace,E=w.toneMapping,m.defines={},Jt.getTransfer(v)===ie&&(m.defines.SRGB_TRANSFER="");const D=Ip[E];D&&(m.defines[D]=""),m.needsUpdate=!0}m.uniforms.tDiffuse.value=_.texture,w.setRenderTarget(S),w.render(h,p),S=null,f=!1},this.isCompositing=function(){return f},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),d.dispose(),m.dispose()}}const Fc=new ze,Oc=new Vi(1,1),Bc=new wc(1),zc=new Sc,kc=new Kh,Gc=new Ac,vl=[],Sl=[],Ml=new Float32Array(16),yl=new Float32Array(9),El=new Float32Array(4);function Ki(n,t,e){const i=n[0];if(i<=0||i>0)return n;const s=t*e;let r=vl[s];if(r===void 0&&(r=new Float32Array(s),vl[s]=r),t!==0){i.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,n[a].toArray(r,o)}return r}function be(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function Te(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function gr(n,t){let e=Sl[t];e===void 0&&(e=new Int32Array(t),Sl[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function Up(n,t){const e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function Fp(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(be(e,t))return;n.uniform2fv(this.addr,t),Te(e,t)}}function Op(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(be(e,t))return;n.uniform3fv(this.addr,t),Te(e,t)}}function Bp(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(be(e,t))return;n.uniform4fv(this.addr,t),Te(e,t)}}function zp(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(be(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),Te(e,t)}else{if(be(e,i))return;El.set(i),n.uniformMatrix2fv(this.addr,!1,El),Te(e,i)}}function kp(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(be(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),Te(e,t)}else{if(be(e,i))return;yl.set(i),n.uniformMatrix3fv(this.addr,!1,yl),Te(e,i)}}function Gp(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(be(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),Te(e,t)}else{if(be(e,i))return;Ml.set(i),n.uniformMatrix4fv(this.addr,!1,Ml),Te(e,i)}}function Hp(n,t){const e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function Vp(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(be(e,t))return;n.uniform2iv(this.addr,t),Te(e,t)}}function Wp(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(be(e,t))return;n.uniform3iv(this.addr,t),Te(e,t)}}function Xp(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(be(e,t))return;n.uniform4iv(this.addr,t),Te(e,t)}}function Yp(n,t){const e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function qp(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(be(e,t))return;n.uniform2uiv(this.addr,t),Te(e,t)}}function Kp(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(be(e,t))return;n.uniform3uiv(this.addr,t),Te(e,t)}}function Zp(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(be(e,t))return;n.uniform4uiv(this.addr,t),Te(e,t)}}function xr(n){return n.version===0&&(n.compareFunction=mc,n.needsUpdate=!0),n}function $p(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?r=xr(Oc):r=Fc,e.setTexture2D(t||r,s)}function Jp(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture3D(t||kc,s)}function Qp(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_CUBE_SHADOW?r=xr(Bc):r=Gc,e.setTextureCube(t||r,s)}function jp(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture2DArray(t||zc,s)}function tm(n){switch(n){case 5126:return Up;case 35664:return Fp;case 35665:return Op;case 35666:return Bp;case 35674:return zp;case 35675:return kp;case 35676:return Gp;case 5124:case 35670:return Hp;case 35667:case 35671:return Vp;case 35668:case 35672:return Wp;case 35669:case 35673:return Xp;case 5125:return Yp;case 36294:return qp;case 36295:return Kp;case 36296:return Zp;case 35678:case 36198:case 36298:case 36306:case 35682:return $p;case 35679:case 36299:case 36307:return Jp;case 35680:case 36300:case 36308:case 36293:return Qp;case 36289:case 36303:case 36311:case 36292:return jp}}function em(n,t){n.uniform1fv(this.addr,t)}function nm(n,t){const e=Ki(t,this.size,2);n.uniform2fv(this.addr,e)}function im(n,t){const e=Ki(t,this.size,3);n.uniform3fv(this.addr,e)}function sm(n,t){const e=Ki(t,this.size,4);n.uniform4fv(this.addr,e)}function rm(n,t){const e=Ki(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function am(n,t){const e=Ki(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function om(n,t){const e=Ki(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function lm(n,t){n.uniform1iv(this.addr,t)}function cm(n,t){n.uniform2iv(this.addr,t)}function hm(n,t){n.uniform3iv(this.addr,t)}function um(n,t){n.uniform4iv(this.addr,t)}function dm(n,t){n.uniform1uiv(this.addr,t)}function fm(n,t){n.uniform2uiv(this.addr,t)}function pm(n,t){n.uniform3uiv(this.addr,t)}function mm(n,t){n.uniform4uiv(this.addr,t)}function _m(n,t,e){const i=this.cache,s=t.length,r=gr(e,s);be(i,r)||(n.uniform1iv(this.addr,r),Te(i,r));let a;this.type===n.SAMPLER_2D_SHADOW?a=xr(Oc):a=Fc;for(let o=0;o!==s;++o)e.setTexture2D(t[o]||a,r[o])}function gm(n,t,e){const i=this.cache,s=t.length,r=gr(e,s);be(i,r)||(n.uniform1iv(this.addr,r),Te(i,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||kc,r[a])}function xm(n,t,e){const i=this.cache,s=t.length,r=gr(e,s);be(i,r)||(n.uniform1iv(this.addr,r),Te(i,r));let a;this.type===n.SAMPLER_CUBE_SHADOW?a=xr(Bc):a=Gc;for(let o=0;o!==s;++o)e.setTextureCube(t[o]||a,r[o])}function vm(n,t,e){const i=this.cache,s=t.length,r=gr(e,s);be(i,r)||(n.uniform1iv(this.addr,r),Te(i,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||zc,r[a])}function Sm(n){switch(n){case 5126:return em;case 35664:return nm;case 35665:return im;case 35666:return sm;case 35674:return rm;case 35675:return am;case 35676:return om;case 5124:case 35670:return lm;case 35667:case 35671:return cm;case 35668:case 35672:return hm;case 35669:case 35673:return um;case 5125:return dm;case 36294:return fm;case 36295:return pm;case 36296:return mm;case 35678:case 36198:case 36298:case 36306:case 35682:return _m;case 35679:case 36299:case 36307:return gm;case 35680:case 36300:case 36308:case 36293:return xm;case 36289:case 36303:case 36311:case 36292:return vm}}class Mm{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=tm(e.type)}}class ym{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Sm(e.type)}}class Em{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(t,e[o.id],i)}}}const $r=/(\w+)(\])?(\[|\.)?/g;function bl(n,t){n.seq.push(t),n.map[t.id]=t}function bm(n,t,e){const i=n.name,s=i.length;for($r.lastIndex=0;;){const r=$r.exec(i),a=$r.lastIndex;let o=r[1];const l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){bl(e,c===void 0?new Mm(o,n,t):new ym(o,n,t));break}else{let m=e.map[o];m===void 0&&(m=new Em(o),bl(e,m)),e=m}}}class er{constructor(t,e){this.seq=[],this.map={};const i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){const o=t.getActiveUniform(e,a),l=t.getUniformLocation(e,o.name);bm(o,l,this)}const s=[],r=[];for(const a of this.seq)a.type===t.SAMPLER_2D_SHADOW||a.type===t.SAMPLER_CUBE_SHADOW||a.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(t,e,i,s){const r=this.map[e];r!==void 0&&r.setValue(t,i,s)}setOptional(t,e,i){const s=e[i];s!==void 0&&this.setValue(t,i,s)}static upload(t,e,i,s){for(let r=0,a=e.length;r!==a;++r){const o=e[r],l=i[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,s)}}static seqWithValue(t,e){const i=[];for(let s=0,r=t.length;s!==r;++s){const a=t[s];a.id in e&&i.push(a)}return i}}function Tl(n,t,e){const i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}const Tm=37297;let Am=0;function wm(n,t){const e=n.split(`
`),i=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){const o=a+1;i.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return i.join(`
`)}const Al=new Gt;function Rm(n){Jt._getMatrix(Al,Jt.workingColorSpace,n);const t=`mat3( ${Al.elements.map(e=>e.toFixed(4))} )`;switch(Jt.getTransfer(n)){case ar:return[t,"LinearTransferOETF"];case ie:return[t,"sRGBTransferOETF"];default:return Bt("WebGLProgram: Unsupported color space: ",n),[t,"LinearTransferOETF"]}}function wl(n,t,e){const i=n.getShaderParameter(t,n.COMPILE_STATUS),r=(n.getShaderInfoLog(t)||"").trim();if(i&&r==="")return"";const a=/ERROR: 0:(\d+)/.exec(r);if(a){const o=parseInt(a[1]);return e.toUpperCase()+`

`+r+`

`+wm(n.getShaderSource(t),o)}else return r}function Cm(n,t){const e=Rm(t);return[`vec4 ${n}( vec4 value ) {`,`	return ${e[1]}( vec4( ${e[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}const Pm={[Ql]:"Linear",[jl]:"Reinhard",[tc]:"Cineon",[ec]:"ACESFilmic",[ic]:"AgX",[sc]:"Neutral",[nc]:"Custom"};function Lm(n,t){const e=Pm[t];return e===void 0?(Bt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Ws=new U;function Dm(){Jt.getLuminanceCoefficients(Ws);const n=Ws.x.toFixed(4),t=Ws.y.toFixed(4),e=Ws.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Im(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(as).join(`
`)}function Nm(n){const t=[];for(const e in n){const i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function Um(n,t){const e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const r=n.getActiveAttrib(t,s),a=r.name;let o=1;r.type===n.FLOAT_MAT2&&(o=2),r.type===n.FLOAT_MAT3&&(o=3),r.type===n.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:n.getAttribLocation(t,a),locationSize:o}}return e}function as(n){return n!==""}function Rl(n,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,t.numLightProbeGrids)}function Cl(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Fm=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ya(n){return n.replace(Fm,Om)}function Om(n,t){const e=Xt[t];if(e===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">");return Ya(e)}const Bm=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Pl(n){return n.replace(Bm,zm)}function zm(n,t,e,i){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Ll(n){let t=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?t+=`
#define HIGH_PRECISION`:n.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}const km={[os]:"SHADOWMAP_TYPE_PCF",[rs]:"SHADOWMAP_TYPE_VSM"};function Gm(n){return km[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const Hm={[us]:"ENVMAP_MODE_REFRACTION"};function Vm(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":Hm[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}const Wm={[$a]:"ENVMAP_BLENDING_MULTIPLY",[Th]:"ENVMAP_BLENDING_MIX",[Ah]:"ENVMAP_BLENDING_ADD"};function Xm(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":Wm[n.combine]||"ENVMAP_BLENDING_NONE"}function Ym(n,t,e,i){const s=n.getContext(),r=e.defines;let a=e.vertexShader,o=e.fragmentShader;const l=Gm(e),c=e.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",d=Vm(e),m=Xm(e),h=Im(e),p=Nm(r),v=s.createProgram();let E,f,u=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(E=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p].filter(as).join(`
`),E.length>0&&(E+=`
`),f=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p].filter(as).join(`
`),f.length>0&&(f+=`
`)):(E=[Ll(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+d:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+e.diffuseRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(as).join(`
`),f=[Ll(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+d:"",e.envMap?"#define "+m:"",e.envMapPMREM?"#define ENVMAP_MAX_LOD "+e.envMapMaxLod+".0":"",e.envMapPMREM?"#define ENVMAP_SIZE "+e.envMapSize+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",e.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Un?"#define TONE_MAPPING":"",e.toneMapping!==Un?Xt.tonemapping_pars_fragment:"",e.toneMapping!==Un?Lm("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Xt.colorspace_pars_fragment,Cm("linearToOutputTexel",e.outputColorSpace),Dm(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(as).join(`
`)),a=Ya(a),a=Rl(a,e),a=Cl(a,e),o=Ya(o),o=Rl(o,e),o=Cl(o,e),a=Pl(a),o=Pl(o),e.isRawShaderMaterial!==!0&&(u=`#version 300 es
`,E=[h,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+E,f=["#define varying in",e.glslVersion===ko?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===ko?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const S=u+E+a,A=u+f+o,y=Tl(s,s.VERTEX_SHADER,S),w=Tl(s,s.FRAGMENT_SHADER,A);s.attachShader(v,y),s.attachShader(v,w),e.index0AttributeName!==void 0?s.bindAttribLocation(v,0,e.index0AttributeName):e.hasPositionAttribute===!0&&s.bindAttribLocation(v,0,"position"),s.linkProgram(v);function b(C){if(n.debug.checkShaderErrors){const N=s.getProgramInfoLog(v)||"",F=s.getShaderInfoLog(y)||"",W=s.getShaderInfoLog(w)||"",P=N.trim(),H=F.trim(),q=W.trim();let V=!0,et=!0;if(s.getProgramParameter(v,s.LINK_STATUS)===!1)if(V=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,v,y,w);else{const X=wl(s,y,"vertex"),j=wl(s,w,"fragment");jt("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(v,s.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+P+`
`+X+`
`+j)}else P!==""?Bt("WebGLProgram: Program Info Log:",P):(H===""||q==="")&&(et=!1);et&&(C.diagnostics={runnable:V,programLog:P,vertexShader:{log:H,prefix:E},fragmentShader:{log:q,prefix:f}})}s.deleteShader(y),s.deleteShader(w),_=new er(s,v),M=Um(s,v)}let _;this.getUniforms=function(){return _===void 0&&b(this),_};let M;this.getAttributes=function(){return M===void 0&&b(this),M};let D=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return D===!1&&(D=s.getProgramParameter(v,Tm)),D},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(v),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Am++,this.cacheKey=t,this.usedTimes=1,this.program=v,this.vertexShader=y,this.fragmentShader=w,this}let qm=0;class Km{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,i){const s=this._getShaderCacheForMaterial(t);return s.has(e)===!1&&(s.add(e),e.usedTimes++),s.has(i)===!1&&(s.add(i),i.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){const e=this.shaderCache;let i=e.get(t);return i===void 0&&(i=new Zm(t),e.set(t,i)),i}}class Zm{constructor(t){this.id=qm++,this.code=t,this.usedTimes=0}}function $m(n){return n===fi||n===ir||n===sr}function Jm(n,t,e,i,s,r){const a=new so,o=new Km,l=new Set,c=[],d=new Map,m=i.logarithmicDepthBuffer,h={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(_){return l.add(_),_===0?"uv":`uv${_}`}function v(_,M,D,C,N,F){const W=C.fog,P=N.geometry,H=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?C.environment:null,q=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap,V=t.get(_.envMap||H,q),et=h[_.type];let X=i.precision;_.precision!==null&&(X=i.getMaxPrecision(_.precision),X!==_.precision&&Bt("WebGLProgram.getParameters:",_.precision,"not supported, using",X,"instead."));const j=P.morphAttributes.position||P.morphAttributes.normal||P.morphAttributes.color,tt=j!==void 0?j.length:0;let wt=0;P.morphAttributes.position!==void 0&&(wt=1),P.morphAttributes.normal!==void 0&&(wt=2),P.morphAttributes.color!==void 0&&(wt=3);let Ft,Z,mt,Et;if(et){const vt=gn[et];Ft=vt.vertexShader,Z=vt.fragmentShader}else{Ft=_.vertexShader,Z=_.fragmentShader;const vt=o.getVertexShaderStage(_),ne=o.getFragmentShaderStage(_);o.update(_,vt,ne),mt=vt.id,Et=ne.id}const It=n.getRenderTarget(),xt=n.state.buffers.depth.getReversed(),zt=N.isInstancedMesh===!0,ue=N.isBatchedMesh===!0,G=!!_.map,at=!!_.matcap,nt=!!V,dt=nt&&V.isPMREMTexture===!0,gt=!!_.aoMap,Dt=!!_.lightMap,Ot=!!_.bumpMap&&_.wireframe===!1,$t=!!_.normalMap,le=!!_.displacementMap,se=!!_.emissiveMap,re=!!_.metalnessMap,Ae=!!_.roughnessMap,Me=_.anisotropy>0,I=_.clearcoat>0,tn=_.diffuseRoughness>0,de=_.dispersion>0,fe=_.retroreflectivity>0,_t=_.iridescence>0,ye=_.sheen>0,Ut=_.transmission>0,kt=Me&&!!_.anisotropyMap,T=I&&!!_.clearcoatMap,g=I&&!!_.clearcoatNormalMap,B=I&&!!_.clearcoatRoughnessMap,it=tn&&!!_.diffuseRoughnessMap,Q=_t&&!!_.iridescenceMap,ot=_t&&!!_.iridescenceThicknessMap,ft=ye&&!!_.sheenColorMap,K=ye&&!!_.sheenRoughnessMap,$=!!_.specularMap,ct=!!_.specularColorMap,R=!!_.specularIntensityMap,J=Ut&&!!_.transmissionMap,Y=Ut&&!!_.thicknessMap,ht=!!_.gradientMap,rt=!!_.alphaMap,lt=_.alphaTest>0,Pt=!!_.alphaHash,Wt=!!_.extensions;let st=Un;_.toneMapped&&(It===null||It.isXRRenderTarget===!0)&&(st=n.toneMapping);const Nt=dt?V.isCompressedCubeTexture?V.image[0].mipmaps:V.mipmaps:null,Vt={shaderID:et,shaderType:_.type,shaderName:_.name,vertexShader:Ft,fragmentShader:Z,defines:_.defines,customVertexShaderID:mt,customFragmentShaderID:Et,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:X,batching:ue,batchingColor:ue&&N._colorsTexture!==null,instancing:zt,instancingColor:zt&&N.instanceColor!==null,instancingMorph:zt&&N.morphTexture!==null,outputColorSpace:It===null?n.outputColorSpace:It.isXRRenderTarget===!0?It.texture.colorSpace:Jt.workingColorSpace,alphaToCoverage:!!_.alphaToCoverage,map:G,matcap:at,envMap:nt,envMapMode:nt&&V.mapping,envMapPMREM:dt,envMapMaxLod:dt?Nt.length-1:null,envMapSize:dt?Nt[0].width:null,aoMap:gt,lightMap:Dt,bumpMap:Ot,normalMap:$t,displacementMap:le,emissiveMap:se,normalMapObjectSpace:$t&&_.normalMapType===Ch,normalMapTangentSpace:$t&&_.normalMapType===Ha,packedNormalMap:$t&&_.normalMapType===Ha&&$m(_.normalMap.format),metalnessMap:re,roughnessMap:Ae,anisotropy:Me,anisotropyMap:kt,clearcoat:I,clearcoatMap:T,clearcoatNormalMap:g,clearcoatRoughnessMap:B,diffuseRoughness:tn,diffuseRoughnessMap:it,dispersion:de,retroreflection:fe,iridescence:_t,iridescenceMap:Q,iridescenceThicknessMap:ot,sheen:ye,sheenColorMap:ft,sheenRoughnessMap:K,specularMap:$,specularColorMap:ct,specularIntensityMap:R,transmission:Ut,transmissionMap:J,thicknessMap:Y,gradientMap:ht,opaque:_.transparent===!1&&_.blending===ls&&_.alphaToCoverage===!1,alphaMap:rt,alphaTest:lt,alphaHash:Pt,combine:_.combine,mapUv:G&&p(_.map.channel),aoMapUv:gt&&p(_.aoMap.channel),lightMapUv:Dt&&p(_.lightMap.channel),bumpMapUv:Ot&&p(_.bumpMap.channel),normalMapUv:$t&&p(_.normalMap.channel),displacementMapUv:le&&p(_.displacementMap.channel),emissiveMapUv:se&&p(_.emissiveMap.channel),metalnessMapUv:re&&p(_.metalnessMap.channel),roughnessMapUv:Ae&&p(_.roughnessMap.channel),anisotropyMapUv:kt&&p(_.anisotropyMap.channel),clearcoatMapUv:T&&p(_.clearcoatMap.channel),clearcoatNormalMapUv:g&&p(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:B&&p(_.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:it&&p(_.diffuseRoughnessMap.channel),iridescenceMapUv:Q&&p(_.iridescenceMap.channel),iridescenceThicknessMapUv:ot&&p(_.iridescenceThicknessMap.channel),sheenColorMapUv:ft&&p(_.sheenColorMap.channel),sheenRoughnessMapUv:K&&p(_.sheenRoughnessMap.channel),specularMapUv:$&&p(_.specularMap.channel),specularColorMapUv:ct&&p(_.specularColorMap.channel),specularIntensityMapUv:R&&p(_.specularIntensityMap.channel),transmissionMapUv:J&&p(_.transmissionMap.channel),thicknessMapUv:Y&&p(_.thicknessMap.channel),alphaMapUv:rt&&p(_.alphaMap.channel),vertexTangents:!!P.attributes.tangent&&($t||Me),vertexNormals:!!P.attributes.normal,vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!P.attributes.color&&P.attributes.color.itemSize===4,pointsUvs:N.isPoints===!0&&!!P.attributes.uv&&(G||rt),fog:!!W,useFog:_.fog===!0,fogExp2:!!W&&W.isFogExp2,flatShading:_.wireframe===!1&&(_.flatShading===!0||P.attributes.normal===void 0&&$t===!1&&(_.isMeshLambertMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isMeshPhysicalMaterial)),sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:m,reversedDepthBuffer:xt,skinning:N.isSkinnedMesh===!0,hasPositionAttribute:P.attributes.position!==void 0,morphTargets:P.morphAttributes.position!==void 0,morphNormals:P.morphAttributes.normal!==void 0,morphColors:P.morphAttributes.color!==void 0,morphTargetsCount:tt,morphTextureStride:wt,numSunLights:M.sun.length,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numSunLightShadows:M.sunShadowMap.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numLightProbeGrids:F.filter(vt=>vt.texture!==null).length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:_.dithering,shadowMapEnabled:n.shadowMap.enabled&&D.length>0,shadowMapType:n.shadowMap.type,toneMapping:st,decodeVideoTexture:G&&_.map.isVideoTexture===!0&&Jt.getTransfer(_.map.colorSpace)===ie,decodeVideoTextureEmissive:se&&_.emissiveMap.isVideoTexture===!0&&Jt.getTransfer(_.emissiveMap.colorSpace)===ie,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===xn,flipSided:_.side===qe,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:Wt&&_.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Wt&&_.extensions.multiDraw===!0||ue)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return Vt.vertexUv1s=l.has(1),Vt.vertexUv2s=l.has(2),Vt.vertexUv3s=l.has(3),l.clear(),Vt}function E(_){const M=[];if(_.shaderID?M.push(_.shaderID):(M.push(_.customVertexShaderID),M.push(_.customFragmentShaderID)),_.defines!==void 0)for(const D in _.defines)M.push(D),M.push(_.defines[D]);return _.isRawShaderMaterial===!1&&(f(M,_),u(M,_),M.push(n.outputColorSpace)),M.push(_.customProgramCacheKey),M.join()}function f(_,M){_.push(M.precision),_.push(M.outputColorSpace),_.push(M.envMapMode),_.push(M.envMapPMREM),_.push(M.envMapMaxLod),_.push(M.envMapSize),_.push(M.mapUv),_.push(M.alphaMapUv),_.push(M.lightMapUv),_.push(M.aoMapUv),_.push(M.bumpMapUv),_.push(M.normalMapUv),_.push(M.displacementMapUv),_.push(M.emissiveMapUv),_.push(M.metalnessMapUv),_.push(M.roughnessMapUv),_.push(M.anisotropyMapUv),_.push(M.clearcoatMapUv),_.push(M.clearcoatNormalMapUv),_.push(M.clearcoatRoughnessMapUv),_.push(M.diffuseRoughnessMapUv),_.push(M.iridescenceMapUv),_.push(M.iridescenceThicknessMapUv),_.push(M.sheenColorMapUv),_.push(M.sheenRoughnessMapUv),_.push(M.specularMapUv),_.push(M.specularColorMapUv),_.push(M.specularIntensityMapUv),_.push(M.transmissionMapUv),_.push(M.thicknessMapUv),_.push(M.combine),_.push(M.fogExp2),_.push(M.sizeAttenuation),_.push(M.morphTargetsCount),_.push(M.numSunLights),_.push(M.numDirLights),_.push(M.numPointLights),_.push(M.numSpotLights),_.push(M.numSpotLightMaps),_.push(M.numHemiLights),_.push(M.numRectAreaLights),_.push(M.numSunLightShadows),_.push(M.numDirLightShadows),_.push(M.numPointLightShadows),_.push(M.numSpotLightShadows),_.push(M.numSpotLightShadowsWithMaps),_.push(M.numLightProbes),_.push(M.numLightProbeGrids),_.push(M.shadowMapType),_.push(M.toneMapping),_.push(M.numClippingPlanes),_.push(M.numClipIntersection),_.push(M.depthPacking)}function u(_,M){a.disableAll(),M.instancing&&a.enable(0),M.instancingColor&&a.enable(1),M.instancingMorph&&a.enable(2),M.matcap&&a.enable(3),M.envMap&&a.enable(4),M.normalMapObjectSpace&&a.enable(5),M.normalMapTangentSpace&&a.enable(6),M.clearcoat&&a.enable(7),M.iridescence&&a.enable(8),M.alphaTest&&a.enable(9),M.vertexColors&&a.enable(10),M.vertexAlphas&&a.enable(11),M.vertexUv1s&&a.enable(12),M.vertexUv2s&&a.enable(13),M.vertexUv3s&&a.enable(14),M.vertexTangents&&a.enable(15),M.anisotropy&&a.enable(16),M.alphaHash&&a.enable(17),M.batching&&a.enable(18),M.dispersion&&a.enable(19),M.retroreflection&&a.enable(24),M.diffuseRoughness&&a.enable(25),M.batchingColor&&a.enable(20),M.gradientMap&&a.enable(21),M.packedNormalMap&&a.enable(22),M.vertexNormals&&a.enable(23),_.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.reversedDepthBuffer&&a.enable(4),M.skinning&&a.enable(5),M.morphTargets&&a.enable(6),M.morphNormals&&a.enable(7),M.morphColors&&a.enable(8),M.premultipliedAlpha&&a.enable(9),M.shadowMapEnabled&&a.enable(10),M.doubleSided&&a.enable(11),M.flipSided&&a.enable(12),M.useDepthPacking&&a.enable(13),M.dithering&&a.enable(14),M.transmission&&a.enable(15),M.sheen&&a.enable(16),M.opaque&&a.enable(17),M.pointsUvs&&a.enable(18),M.decodeVideoTexture&&a.enable(19),M.decodeVideoTextureEmissive&&a.enable(20),M.alphaToCoverage&&a.enable(21),M.numLightProbeGrids>0&&a.enable(22),M.hasPositionAttribute&&a.enable(23),_.push(a.mask)}function S(_){const M=h[_.type];let D;if(M){const C=gn[M];D=pu.clone(C.uniforms)}else D=_.uniforms;return D}function A(_,M){let D=d.get(M);return D!==void 0?++D.usedTimes:(D=new Ym(n,M,_,s),c.push(D),d.set(M,D)),D}function y(_){if(--_.usedTimes===0){const M=c.indexOf(_);c[M]=c[c.length-1],c.pop(),d.delete(_.cacheKey),_.destroy()}}function w(_){o.remove(_)}function b(){o.dispose()}return{getParameters:v,getProgramCacheKey:E,getUniforms:S,acquireProgram:A,releaseProgram:y,releaseShaderCache:w,programs:c,dispose:b}}function Qm(){let n=new WeakMap;function t(a){return n.has(a)}function e(a){let o=n.get(a);return o===void 0&&(o={},n.set(a,o)),o}function i(a){n.delete(a)}function s(a,o,l){n.get(a)[o]=l}function r(){n=new WeakMap}return{has:t,get:e,remove:i,update:s,dispose:r}}function jm(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.materialVariant!==t.materialVariant?n.materialVariant-t.materialVariant:n.z!==t.z?n.z-t.z:n.id-t.id}function Dl(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function Il(){const n=[];let t=0;const e=[],i=[],s=[];function r(){t=0,e.length=0,i.length=0,s.length=0}function a(h){let p=0;return h.isInstancedMesh&&(p+=2),h.isSkinnedMesh&&(p+=1),p}function o(h,p,v,E,f,u){let S=n[t];return S===void 0?(S={id:h.id,object:h,geometry:p,material:v,materialVariant:a(h),groupOrder:E,renderOrder:h.renderOrder,z:f,group:u},n[t]=S):(S.id=h.id,S.object=h,S.geometry=p,S.material=v,S.materialVariant=a(h),S.groupOrder=E,S.renderOrder=h.renderOrder,S.z=f,S.group=u),t++,S}function l(h,p,v,E,f,u,S){S.reversedDepth===!0&&(f=-f);const A=o(h,p,v,E,f,u);v.transmission>0?i.push(A):v.transparent===!0?s.push(A):e.push(A)}function c(h,p,v,E,f,u){const S=o(h,p,v,E,f,u);v.transmission>0?i.unshift(S):v.transparent===!0?s.unshift(S):e.unshift(S)}function d(h,p){e.length>1&&e.sort(h||jm),i.length>1&&i.sort(p||Dl),s.length>1&&s.sort(p||Dl)}function m(){for(let h=t,p=n.length;h<p;h++){const v=n[h];if(v.id===null)break;v.id=null,v.object=null,v.geometry=null,v.material=null,v.group=null}}return{opaque:e,transmissive:i,transparent:s,init:r,push:l,unshift:c,finish:m,sort:d}}function t0(){let n=new WeakMap;function t(i,s){const r=n.get(i);let a;return r===void 0?(a=new Il,n.set(i,[a])):s>=r.length?(a=new Il,r.push(a)):a=r[s],a}function e(){n=new WeakMap}return{get:t,dispose:e}}function e0(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new U,color:new Zt};break;case"SpotLight":e={position:new U,direction:new U,color:new Zt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new U,color:new Zt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new U,skyColor:new Zt,groundColor:new Zt};break;case"RectAreaLight":e={color:new Zt,position:new U,halfWidth:new U,halfHeight:new U};break}return n[t.id]=e,e}}}function n0(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ct};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ct};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ct,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}let i0=0;function s0(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function r0(n){const t=new e0,e=n0(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new U);const s=new U,r=new he,a=new he;function o(c){let d=0,m=0,h=0;for(let F=0;F<9;F++)i.probe[F].set(0,0,0);let p=0,v=0,E=0,f=0,u=0,S=0,A=0,y=0,w=0,b=0,_=0,M=0,D=0,C=0;c.sort(s0);for(let F=0,W=c.length;F<W;F++){const P=c[F],H=P.color,q=P.intensity,V=P.distance;let et=null;if(P.shadow&&P.shadow.map&&(P.shadow.map.texture.format===fi?et=P.shadow.map.texture:et=P.shadow.map.depthTexture||P.shadow.map.texture),P.isAmbientLight)d+=H.r*q,m+=H.g*q,h+=H.b*q;else if(P.isLightProbe){for(let X=0;X<9;X++)i.probe[X].addScaledVector(P.sh.coefficients[X],q);C++}else if(P.isSunLight){const X=t.get(P);if(X.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const j=P.shadow,tt=e.get(P);tt.shadowIntensity=j.intensity,tt.shadowBias=j.bias,tt.shadowNormalBias=j.normalBias,tt.shadowRadius=j.radius,tt.shadowMapSize.copy(j.mapSize).multiply(j.getFrameExtents()),i.sunShadow[v]=tt,i.sunShadowMap[v]=et;const wt=j.getViewportCount();for(let Ft=0;Ft<wt;Ft++)i.sunShadowMatrix[E+Ft]=j.getMatrix(Ft),i.sunShadowCascade[E+Ft]=j._cascadeData[Ft];E+=wt,v++}i.sun[p]=X,p++}else if(P.isDirectionalLight){const X=t.get(P);if(X.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const j=P.shadow,tt=e.get(P);tt.shadowIntensity=j.intensity,tt.shadowBias=j.bias,tt.shadowNormalBias=j.normalBias,tt.shadowRadius=j.radius,tt.shadowMapSize=j.mapSize,i.directionalShadow[f]=tt,i.directionalShadowMap[f]=et,i.directionalShadowMatrix[f]=P.shadow.matrix,w++}i.directional[f]=X,f++}else if(P.isSpotLight){const X=t.get(P);X.position.setFromMatrixPosition(P.matrixWorld),X.color.copy(H).multiplyScalar(q),X.distance=V,X.coneCos=Math.cos(P.angle),X.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),X.decay=P.decay,i.spot[S]=X;const j=P.shadow;if(P.map&&(i.spotLightMap[M]=P.map,M++,j.updateMatrices(P),P.castShadow&&D++),i.spotLightMatrix[S]=j.matrix,P.castShadow){const tt=e.get(P);tt.shadowIntensity=j.intensity,tt.shadowBias=j.bias,tt.shadowNormalBias=j.normalBias,tt.shadowRadius=j.radius,tt.shadowMapSize=j.mapSize,i.spotShadow[S]=tt,i.spotShadowMap[S]=et,_++}S++}else if(P.isRectAreaLight){const X=t.get(P);X.color.copy(H).multiplyScalar(q),X.halfWidth.set(P.width*.5,0,0),X.halfHeight.set(0,P.height*.5,0),i.rectArea[A]=X,A++}else if(P.isPointLight){const X=t.get(P);if(X.color.copy(P.color).multiplyScalar(P.intensity),X.distance=P.distance,X.decay=P.decay,P.castShadow){const j=P.shadow,tt=e.get(P);tt.shadowIntensity=j.intensity,tt.shadowBias=j.bias,tt.shadowNormalBias=j.normalBias,tt.shadowRadius=j.radius,tt.shadowMapSize=j.mapSize,tt.shadowCameraNear=j.camera.near,tt.shadowCameraFar=j.camera.far,i.pointShadow[u]=tt,i.pointShadowMap[u]=et,i.pointShadowMatrix[u]=P.shadow.matrix,b++}i.point[u]=X,u++}else if(P.isHemisphereLight){const X=t.get(P);X.skyColor.copy(P.color).multiplyScalar(q),X.groundColor.copy(P.groundColor).multiplyScalar(q),i.hemi[y]=X,y++}}A>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=St.LTC_FLOAT_1,i.rectAreaLTC2=St.LTC_FLOAT_2):(i.rectAreaLTC1=St.LTC_HALF_1,i.rectAreaLTC2=St.LTC_HALF_2)),i.ambient[0]=d,i.ambient[1]=m,i.ambient[2]=h;const N=i.hash;(N.sunLength!==p||N.directionalLength!==f||N.pointLength!==u||N.spotLength!==S||N.rectAreaLength!==A||N.hemiLength!==y||N.numSunShadows!==v||N.numDirectionalShadows!==w||N.numPointShadows!==b||N.numSpotShadows!==_||N.numSpotMaps!==M||N.numLightProbes!==C)&&(i.sun.length=p,i.directional.length=f,i.spot.length=S,i.rectArea.length=A,i.point.length=u,i.hemi.length=y,i.sunShadow.length=v,i.sunShadowMap.length=v,i.sunShadowMatrix.length=E,i.sunShadowCascade.length=E,i.directionalShadow.length=w,i.directionalShadowMap.length=w,i.directionalShadowMatrix.length=w,i.pointShadow.length=b,i.pointShadowMap.length=b,i.pointShadowMatrix.length=b,i.spotShadow.length=_,i.spotShadowMap.length=_,i.spotLightMatrix.length=_+M-D,i.spotLightMap.length=M,i.numSpotLightShadowsWithMaps=D,i.numLightProbes=C,N.sunLength=p,N.directionalLength=f,N.pointLength=u,N.spotLength=S,N.rectAreaLength=A,N.hemiLength=y,N.numSunShadows=v,N.numDirectionalShadows=w,N.numPointShadows=b,N.numSpotShadows=_,N.numSpotMaps=M,N.numLightProbes=C,i.version=i0++)}function l(c,d){let m=0,h=0,p=0,v=0,E=0,f=0;const u=d.matrixWorldInverse;for(let S=0,A=c.length;S<A;S++){const y=c[S];if(y.isSunLight){const w=i.sun[m];w.direction.setFromMatrixPosition(y.matrixWorld),w.direction.transformDirection(u),m++}else if(y.isDirectionalLight){const w=i.directional[h];w.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(u),h++}else if(y.isSpotLight){const w=i.spot[v];w.position.setFromMatrixPosition(y.matrixWorld),w.position.applyMatrix4(u),w.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(u),v++}else if(y.isRectAreaLight){const w=i.rectArea[E];w.position.setFromMatrixPosition(y.matrixWorld),w.position.applyMatrix4(u),a.identity(),r.copy(y.matrixWorld),r.premultiply(u),a.extractRotation(r),w.halfWidth.set(y.width*.5,0,0),w.halfHeight.set(0,y.height*.5,0),w.halfWidth.applyMatrix4(a),w.halfHeight.applyMatrix4(a),E++}else if(y.isPointLight){const w=i.point[p];w.position.setFromMatrixPosition(y.matrixWorld),w.position.applyMatrix4(u),p++}else if(y.isHemisphereLight){const w=i.hemi[f];w.direction.setFromMatrixPosition(y.matrixWorld),w.direction.transformDirection(u),f++}}}return{setup:o,setupView:l,state:i}}function Nl(n){const t=new r0(n),e=[],i=[],s=[];function r(m){d.camera=m,e.length=0,i.length=0,s.length=0}function a(m){m.isLightProbeGrid?s.push(m):e.push(m)}function o(m){i.push(m)}function l(){t.setup(e),s.sort((m,h)=>m.priority-h.priority||m.id-h.id)}function c(m){t.setupView(e,m)}const d={lightsArray:e,shadowsArray:i,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:d,setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function a0(n){let t=new WeakMap;function e(s,r=0){const a=t.get(s);let o;return a===void 0?(o=new Nl(n),t.set(s,[o])):r>=a.length?(o=new Nl(n),a.push(o)):o=a[r],o}function i(){t=new WeakMap}return{get:e,dispose:i}}const o0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,l0=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,c0=[new U(1,0,0),new U(-1,0,0),new U(0,1,0),new U(0,-1,0),new U(0,0,1),new U(0,0,-1)],h0=[new U(0,-1,0),new U(0,-1,0),new U(0,0,1),new U(0,0,-1),new U(0,-1,0),new U(0,-1,0)],Ul=new he,is=new U,Jr=new U;function u0(n,t,e){let i=new Hi;const s=new Ct,r=new Ct,a=new ge,o=new xu,l=new vu,c={},d=e.maxTextureSize,m={[di]:qe,[qe]:di,[xn]:xn},h=new pi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ct},radius:{value:4}},vertexShader:o0,fragmentShader:l0}),p=h.clone();p.defines.HORIZONTAL_PASS=1;const v=new an;v.setAttribute("position",new $n(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const E=new _e(v,h),f=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=os;let u=this.type;this.render=function(b,_,M){if(f.enabled===!1||f.autoUpdate===!1&&f.needsUpdate===!1||b.length===0)return;this.type===ah&&(Bt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=os);const D=n.getRenderTarget(),C=n.getActiveCubeFace(),N=n.getActiveMipmapLevel(),F=n.state;F.setBlending(Bi),F.buffers.depth.getReversed()===!0?F.buffers.color.setClear(0,0,0,0):F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);const W=u!==this.type;W&&_.traverse(function(P){P.material&&(Array.isArray(P.material)?P.material.forEach(H=>H.needsUpdate=!0):P.material.needsUpdate=!0)});for(let P=0,H=b.length;P<H;P++){const q=b[P],V=q.shadow;if(V===void 0){Bt("WebGLShadowMap:",q,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;s.copy(V.mapSize);const et=V.getFrameExtents();s.multiply(et),r.copy(V.mapSize),(s.x>d||s.y>d)&&(s.x>d&&(r.x=Math.floor(d/et.x),s.x=r.x*et.x,V.mapSize.x=r.x),s.y>d&&(r.y=Math.floor(d/et.y),s.y=r.y*et.y,V.mapSize.y=r.y));const X=n.state.buffers.depth.getReversed();if(V.camera._reversedDepth=X,V.map===null||W===!0){if(V.map!==null&&(V.map.depthTexture!==null&&(V.map.depthTexture.dispose(),V.map.depthTexture=null),V.map.dispose()),this.type===rs){if(q.isPointLight){Bt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}V.map=new Mn(s.x,s.y,{format:fi,type:En,minFilter:Ve,magFilter:Ve,generateMipmaps:!1}),V.map.texture.name=q.name+".shadowMap",V.map.depthTexture=new Vi(s.x,s.y,vn),V.map.depthTexture.name=q.name+".shadowMapDepth",V.map.depthTexture.format=Qn,V.map.depthTexture.compareFunction=null,V.map.depthTexture.minFilter=Pe,V.map.depthTexture.magFilter=Pe}else q.isPointLight?(V.map=new mo(s.x),V.map.depthTexture=new wc(s.x,yn)):(V.map=new Mn(s.x,s.y),V.map.depthTexture=new Vi(s.x,s.y,yn)),V.map.depthTexture.name=q.name+".shadowMap",V.map.depthTexture.format=Qn,this.type===os?(V.map.depthTexture.compareFunction=X?pc:fc,V.map.depthTexture.minFilter=Ve,V.map.depthTexture.magFilter=Ve):(V.map.depthTexture.compareFunction=null,V.map.depthTexture.minFilter=Pe,V.map.depthTexture.magFilter=Pe);V.camera.updateProjectionMatrix()}V.map.isWebGLCubeRenderTarget!==!0&&(V.map.width!==s.x||V.map.height!==s.y)&&V.map.setSize(s.x,s.y);const j=V.map.isWebGLCubeRenderTarget?6:V.getViewportCount();q.isPointLight!==!0&&V.updateMatrices(q,M);const tt=(V.camera.layers.mask&4294967294)!==0?V.camera.layers:M.layers;for(let wt=0;wt<j;wt++){const Ft=V.getCamera(wt);if(q.isPointLight){const Z=V.camera,mt=V.matrix,Et=q.distance||Z.far;Et!==Z.far&&(Z.far=Et,Z.updateProjectionMatrix()),is.setFromMatrixPosition(q.matrixWorld),Z.position.copy(is),Jr.copy(Z.position),Jr.add(c0[wt]),Z.up.copy(h0[wt]),Z.lookAt(Jr),Z.updateMatrixWorld(),mt.makeTranslation(-is.x,-is.y,-is.z),Ul.multiplyMatrices(Z.projectionMatrix,Z.matrixWorldInverse),V._frustum.setFromProjectionMatrix(Ul,Z.coordinateSystem,Z.reversedDepth)}if(V.map.isWebGLCubeRenderTarget)n.setRenderTarget(V.map,wt),n.clear();else{wt===0&&(n.setRenderTarget(V.map),n.clear());const Z=V.getViewport(wt);a.set(r.x*Z.x,r.y*Z.y,r.x*Z.z,r.y*Z.w),F.viewport(a)}i=V.getFrustum(wt),y(_,M,Ft,q,tt,this.type)}V.isPointLightShadow!==!0&&this.type===rs&&S(V,M),V.needsUpdate=!1}u=this.type,f.needsUpdate=!1,n.setRenderTarget(D,C,N)};function S(b,_){const M=t.update(E);h.defines.VSM_SAMPLES!==b.blurSamples&&(h.defines.VSM_SAMPLES=b.blurSamples,p.defines.VSM_SAMPLES=b.blurSamples,h.needsUpdate=!0,p.needsUpdate=!0),b.mapPass===null?b.mapPass=new Mn(s.x,s.y,{format:fi,type:En}):(b.mapPass.width!==b.map.width||b.mapPass.height!==b.map.height)&&b.mapPass.setSize(b.map.width,b.map.height),h.uniforms.shadow_pass.value=b.map.depthTexture,h.uniforms.resolution.value.set(b.map.width,b.map.height),h.uniforms.radius.value=b.radius,n.setRenderTarget(b.mapPass),n.clear(),n.renderBufferDirect(_,null,M,h,E,null),p.uniforms.shadow_pass.value=b.mapPass.texture,p.uniforms.resolution.value.set(b.map.width,b.map.height),p.uniforms.radius.value=b.radius,n.setRenderTarget(b.map),n.clear(),n.renderBufferDirect(_,null,M,p,E,null)}function A(b,_,M,D){let C=null;const N=M.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(N!==void 0)C=N;else if(C=M.isPointLight===!0?l:o,n.localClippingEnabled&&_.clipShadows===!0&&Array.isArray(_.clippingPlanes)&&_.clippingPlanes.length!==0||_.displacementMap&&_.displacementScale!==0||_.alphaMap&&_.alphaTest>0||_.map&&_.alphaTest>0||_.alphaToCoverage===!0){const F=C.uuid,W=_.uuid;let P=c[F];P===void 0&&(P={},c[F]=P);let H=P[W];H===void 0&&(H=C.clone(),P[W]=H,_.addEventListener("dispose",w)),C=H}if(C.visible=_.visible,C.wireframe=_.wireframe,D===rs?C.side=_.shadowSide!==null?_.shadowSide:_.side:C.side=_.shadowSide!==null?_.shadowSide:m[_.side],C.alphaMap=_.alphaMap,C.alphaTest=_.alphaToCoverage===!0?.5:_.alphaTest,C.map=_.map,C.clipShadows=_.clipShadows,C.clippingPlanes=_.clippingPlanes,C.clipIntersection=_.clipIntersection,C.displacementMap=_.displacementMap,C.displacementScale=_.displacementScale,C.displacementBias=_.displacementBias,C.wireframeLinewidth=_.wireframeLinewidth,C.linewidth=_.linewidth,M.isPointLight===!0&&C.isMeshDistanceMaterial===!0){const F=n.properties.get(C);F.light=M}return C}function y(b,_,M,D,C,N){if(b.visible===!1)return;if(b.layers.test(C)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&N===rs)&&(!b.frustumCulled||b.intersectsFrustum(i))){b.modelViewMatrix.multiplyMatrices(M.matrixWorldInverse,b.matrixWorld);const P=t.update(b),H=b.material;if(Array.isArray(H)){const q=P.groups;for(let V=0,et=q.length;V<et;V++){const X=q[V],j=H[X.materialIndex];if(j&&j.visible){const tt=A(b,j,D,N);b.onBeforeShadow(n,b,_,M,P,tt,X),n.renderBufferDirect(M,null,P,tt,b,X),b.onAfterShadow(n,b,_,M,P,tt,X)}}}else if(H.visible){const q=A(b,H,D,N);b.onBeforeShadow(n,b,_,M,P,q,null),n.renderBufferDirect(M,null,P,q,b,null),b.onAfterShadow(n,b,_,M,P,q,null)}}const W=b.children;for(let P=0,H=W.length;P<H;P++)y(W[P],_,M,D,C,N)}function w(b){b.target.removeEventListener("dispose",w);for(const M in c){const D=c[M],C=b.target.uuid;C in D&&(D[C].dispose(),delete D[C])}}}function d0(n,t){function e(){let R=!1;const J=new ge;let Y=null;const ht=new ge(0,0,0,0);return{setMask:function(rt){Y!==rt&&!R&&(n.colorMask(rt,rt,rt,rt),Y=rt)},setLocked:function(rt){R=rt},setClear:function(rt,lt,Pt,Wt,st){st===!0&&(rt*=Wt,lt*=Wt,Pt*=Wt),J.set(rt,lt,Pt,Wt),ht.equals(J)===!1&&(n.clearColor(rt,lt,Pt,Wt),ht.copy(J))},reset:function(){R=!1,Y=null,ht.set(-1,0,0,0)}}}function i(){let R=!1,J=!1,Y=null,ht=null,rt=null;return{setReversed:function(lt){if(J!==lt){const Pt=t.get("EXT_clip_control");lt?Pt.clipControlEXT(Pt.LOWER_LEFT_EXT,Pt.ZERO_TO_ONE_EXT):Pt.clipControlEXT(Pt.LOWER_LEFT_EXT,Pt.NEGATIVE_ONE_TO_ONE_EXT),J=lt;const Wt=rt;rt=null,this.setClear(Wt)}},getReversed:function(){return J},setTest:function(lt){lt?xt(n.DEPTH_TEST):zt(n.DEPTH_TEST)},setMask:function(lt){Y!==lt&&!R&&(n.depthMask(lt),Y=lt)},setFunc:function(lt){if(J&&(lt=zh[lt]),ht!==lt){switch(lt){case ia:n.depthFunc(n.NEVER);break;case sa:n.depthFunc(n.ALWAYS);break;case ra:n.depthFunc(n.LESS);break;case hs:n.depthFunc(n.LEQUAL);break;case aa:n.depthFunc(n.EQUAL);break;case oa:n.depthFunc(n.GEQUAL);break;case la:n.depthFunc(n.GREATER);break;case ca:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}ht=lt}},setLocked:function(lt){R=lt},setClear:function(lt){rt!==lt&&(rt=lt,J&&(lt=1-lt),n.clearDepth(lt))},reset:function(){R=!1,Y=null,ht=null,rt=null,J=!1}}}function s(){let R=!1,J=null,Y=null,ht=null,rt=null,lt=null,Pt=null,Wt=null,st=null;return{setTest:function(Nt){R||(Nt?xt(n.STENCIL_TEST):zt(n.STENCIL_TEST))},setMask:function(Nt){J!==Nt&&!R&&(n.stencilMask(Nt),J=Nt)},setFunc:function(Nt,Vt,vt){(Y!==Nt||ht!==Vt||rt!==vt)&&(n.stencilFunc(Nt,Vt,vt),Y=Nt,ht=Vt,rt=vt)},setOp:function(Nt,Vt,vt){(lt!==Nt||Pt!==Vt||Wt!==vt)&&(n.stencilOp(Nt,Vt,vt),lt=Nt,Pt=Vt,Wt=vt)},setLocked:function(Nt){R=Nt},setClear:function(Nt){st!==Nt&&(n.clearStencil(Nt),st=Nt)},reset:function(){R=!1,J=null,Y=null,ht=null,rt=null,lt=null,Pt=null,Wt=null,st=null}}}const r=new e,a=new i,o=new s;let l={};const c=new WeakMap;let d={},m={},h={},p=new WeakMap,v=[],E=null,f=!1,u=null,S=null,A=null,y=null,w=null,b=null,_=null,M=new Zt(0,0,0),D=0,C=!1,N=null,F=null,W=null,P=null,H=null;const q=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let V=!1,et=0;const X=n.getParameter(n.VERSION);X.indexOf("WebGL")!==-1?(et=parseFloat(/^WebGL (\d)/.exec(X)[1]),V=et>=1):X.indexOf("OpenGL ES")!==-1&&(et=parseFloat(/^OpenGL ES (\d)/.exec(X)[1]),V=et>=2);let j=null,tt={};const wt=n.getParameter(n.SCISSOR_BOX),Ft=n.getParameter(n.VIEWPORT),Z=new ge().fromArray(wt),mt=new ge().fromArray(Ft);function Et(R,J,Y,ht){const rt=new Uint8Array(4),lt=n.createTexture();n.bindTexture(R,lt),n.texParameteri(R,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(R,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Pt=0;Pt<Y;Pt++)R===n.TEXTURE_3D||R===n.TEXTURE_2D_ARRAY?n.texImage3D(J,0,n.RGBA,1,1,ht,0,n.RGBA,n.UNSIGNED_BYTE,rt):n.texImage2D(J+Pt,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,rt);return lt}const It={};It[n.TEXTURE_2D]=Et(n.TEXTURE_2D,n.TEXTURE_2D,1),It[n.TEXTURE_CUBE_MAP]=Et(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),It[n.TEXTURE_2D_ARRAY]=Et(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),It[n.TEXTURE_3D]=Et(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),xt(n.DEPTH_TEST),a.setFunc(hs),Ot(!1),$t(Fo),xt(n.CULL_FACE),gt(Bi);function xt(R){d[R]!==!0&&(n.enable(R),d[R]=!0)}function zt(R){d[R]!==!1&&(n.disable(R),d[R]=!1)}function ue(R,J){return h[R]!==J?(n.bindFramebuffer(R,J),h[R]=J,R===n.DRAW_FRAMEBUFFER&&(h[n.FRAMEBUFFER]=J),R===n.FRAMEBUFFER&&(h[n.DRAW_FRAMEBUFFER]=J),!0):!1}function G(R,J){let Y=v,ht=!1;if(R){Y=p.get(J),Y===void 0&&(Y=[],p.set(J,Y));const rt=R.textures;if(Y.length!==rt.length||Y[0]!==n.COLOR_ATTACHMENT0){for(let lt=0,Pt=rt.length;lt<Pt;lt++)Y[lt]=n.COLOR_ATTACHMENT0+lt;Y.length=rt.length,ht=!0}}else Y[0]!==n.BACK&&(Y[0]=n.BACK,ht=!0);ht&&n.drawBuffers(Y)}function at(R){return E!==R?(n.useProgram(R),E=R,!0):!1}const nt={[Ni]:n.FUNC_ADD,[lh]:n.FUNC_SUBTRACT,[ch]:n.FUNC_REVERSE_SUBTRACT};nt[hh]=n.MIN,nt[uh]=n.MAX;const dt={[dh]:n.ZERO,[fh]:n.ONE,[ph]:n.SRC_COLOR,[$l]:n.SRC_ALPHA,[Sh]:n.SRC_ALPHA_SATURATE,[xh]:n.DST_COLOR,[_h]:n.DST_ALPHA,[mh]:n.ONE_MINUS_SRC_COLOR,[Jl]:n.ONE_MINUS_SRC_ALPHA,[vh]:n.ONE_MINUS_DST_COLOR,[gh]:n.ONE_MINUS_DST_ALPHA,[Mh]:n.CONSTANT_COLOR,[yh]:n.ONE_MINUS_CONSTANT_COLOR,[Eh]:n.CONSTANT_ALPHA,[bh]:n.ONE_MINUS_CONSTANT_ALPHA};function gt(R,J,Y,ht,rt,lt,Pt,Wt,st,Nt){if(R===Bi){f===!0&&(zt(n.BLEND),f=!1);return}if(f===!1&&(xt(n.BLEND),f=!0),R!==oh){if(R!==u||Nt!==C){if((S!==Ni||w!==Ni)&&(n.blendEquation(n.FUNC_ADD),S=Ni,w=Ni),Nt)switch(R){case ls:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Oo:n.blendFunc(n.ONE,n.ONE);break;case Bo:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case zo:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:jt("WebGLState: Invalid blending: ",R);break}else switch(R){case ls:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Oo:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case Bo:jt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case zo:jt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:jt("WebGLState: Invalid blending: ",R);break}A=null,y=null,b=null,_=null,M.set(0,0,0),D=0,u=R,C=Nt}return}rt=rt||J,lt=lt||Y,Pt=Pt||ht,(J!==S||rt!==w)&&(n.blendEquationSeparate(nt[J],nt[rt]),S=J,w=rt),(Y!==A||ht!==y||lt!==b||Pt!==_)&&(n.blendFuncSeparate(dt[Y],dt[ht],dt[lt],dt[Pt]),A=Y,y=ht,b=lt,_=Pt),(Wt.equals(M)===!1||st!==D)&&(n.blendColor(Wt.r,Wt.g,Wt.b,st),M.copy(Wt),D=st),u=R,C=!1}function Dt(R,J){R.side===xn?zt(n.CULL_FACE):xt(n.CULL_FACE);let Y=R.side===qe;J&&(Y=!Y),Ot(Y),R.blending===ls&&R.transparent===!1?gt(Bi):gt(R.blending,R.blendEquation,R.blendSrc,R.blendDst,R.blendEquationAlpha,R.blendSrcAlpha,R.blendDstAlpha,R.blendColor,R.blendAlpha,R.premultipliedAlpha),a.setFunc(R.depthFunc),a.setTest(R.depthTest),a.setMask(R.depthWrite),r.setMask(R.colorWrite);const ht=R.stencilWrite;o.setTest(ht),ht&&(o.setMask(R.stencilWriteMask),o.setFunc(R.stencilFunc,R.stencilRef,R.stencilFuncMask),o.setOp(R.stencilFail,R.stencilZFail,R.stencilZPass)),se(R.polygonOffset,R.polygonOffsetFactor,R.polygonOffsetUnits),R.alphaToCoverage===!0?xt(n.SAMPLE_ALPHA_TO_COVERAGE):zt(n.SAMPLE_ALPHA_TO_COVERAGE)}function Ot(R){N!==R&&(R?n.frontFace(n.CW):n.frontFace(n.CCW),N=R)}function $t(R){R!==sh?(xt(n.CULL_FACE),R!==F&&(R===Fo?n.cullFace(n.BACK):R===rh?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):zt(n.CULL_FACE),F=R}function le(R){R!==W&&(V&&n.lineWidth(R),W=R)}function se(R,J,Y){R?(xt(n.POLYGON_OFFSET_FILL),(P!==J||H!==Y)&&(P=J,H=Y,a.getReversed()&&(J=-J,Y=-Y),n.polygonOffset(J,Y))):zt(n.POLYGON_OFFSET_FILL)}function re(R){R?xt(n.SCISSOR_TEST):zt(n.SCISSOR_TEST)}function Ae(R){R===void 0&&(R=n.TEXTURE0+q-1),j!==R&&(n.activeTexture(R),j=R)}function Me(R,J,Y){Y===void 0&&(j===null?Y=n.TEXTURE0+q-1:Y=j);let ht=tt[Y];ht===void 0&&(ht={type:void 0,texture:void 0},tt[Y]=ht),(ht.type!==R||ht.texture!==J)&&(j!==Y&&(n.activeTexture(Y),j=Y),n.bindTexture(R,J||It[R]),ht.type=R,ht.texture=J)}function I(){const R=tt[j];R!==void 0&&R.type!==void 0&&(n.bindTexture(R.type,null),R.type=void 0,R.texture=void 0)}function tn(){try{n.compressedTexImage2D(...arguments)}catch(R){jt("WebGLState:",R)}}function de(){try{n.compressedTexImage3D(...arguments)}catch(R){jt("WebGLState:",R)}}function fe(){try{n.texSubImage2D(...arguments)}catch(R){jt("WebGLState:",R)}}function _t(){try{n.texSubImage3D(...arguments)}catch(R){jt("WebGLState:",R)}}function ye(){try{n.compressedTexSubImage2D(...arguments)}catch(R){jt("WebGLState:",R)}}function Ut(){try{n.compressedTexSubImage3D(...arguments)}catch(R){jt("WebGLState:",R)}}function kt(){try{n.texStorage2D(...arguments)}catch(R){jt("WebGLState:",R)}}function T(){try{n.texStorage3D(...arguments)}catch(R){jt("WebGLState:",R)}}function g(){try{n.texImage2D(...arguments)}catch(R){jt("WebGLState:",R)}}function B(){try{n.texImage3D(...arguments)}catch(R){jt("WebGLState:",R)}}function it(R){return m[R]!==void 0?m[R]:n.getParameter(R)}function Q(R,J){m[R]!==J&&(n.pixelStorei(R,J),m[R]=J)}function ot(R){Z.equals(R)===!1&&(n.scissor(R.x,R.y,R.z,R.w),Z.copy(R))}function ft(R){mt.equals(R)===!1&&(n.viewport(R.x,R.y,R.z,R.w),mt.copy(R))}function K(R,J){let Y=c.get(J);Y===void 0&&(Y=new WeakMap,c.set(J,Y));let ht=Y.get(R);ht===void 0&&(ht=n.getUniformBlockIndex(J,R.name),n.uniformBlockBinding(J,ht,ht),Y.set(R,ht))}function $(R,J,Y){const rt=c.get(J).get(R);l[rt]!==Y&&(n.bindBufferBase(n.UNIFORM_BUFFER,rt,Y),l[rt]=Y)}function ct(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),a.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),n.pixelStorei(n.PACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.BROWSER_DEFAULT_WEBGL),n.pixelStorei(n.PACK_ROW_LENGTH,0),n.pixelStorei(n.PACK_SKIP_PIXELS,0),n.pixelStorei(n.PACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_ROW_LENGTH,0),n.pixelStorei(n.UNPACK_IMAGE_HEIGHT,0),n.pixelStorei(n.UNPACK_SKIP_PIXELS,0),n.pixelStorei(n.UNPACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_SKIP_IMAGES,0),d={},m={},j=null,tt={},h={},l={},p=new WeakMap,v=[],E=null,f=!1,u=null,S=null,A=null,y=null,w=null,b=null,_=null,M=new Zt(0,0,0),D=0,C=!1,N=null,F=null,W=null,P=null,H=null,Z.set(0,0,n.canvas.width,n.canvas.height),mt.set(0,0,n.canvas.width,n.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:xt,disable:zt,bindFramebuffer:ue,drawBuffers:G,useProgram:at,setBlending:gt,setMaterial:Dt,setFlipSided:Ot,setCullFace:$t,setLineWidth:le,setPolygonOffset:se,setScissorTest:re,activeTexture:Ae,bindTexture:Me,unbindTexture:I,compressedTexImage2D:tn,compressedTexImage3D:de,texImage2D:g,texImage3D:B,pixelStorei:Q,getParameter:it,updateUBOMapping:K,uniformBlockBinding:$,texStorage2D:kt,texStorage3D:T,texSubImage2D:fe,texSubImage3D:_t,compressedTexSubImage2D:ye,compressedTexSubImage3D:Ut,scissor:ot,viewport:ft,reset:ct}}function f0(n,t,e,i,s,r,a){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Ct,d=new WeakMap,m=new Set;let h;const p=new WeakMap,v=new Set,E=new FinalizationRegistry(T=>v.delete(T));let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function u(T,g){return f?new OffscreenCanvas(T,g):or("canvas")}function S(T,g,B){let it=1;const Q=kt(T);if((Q.width>B||Q.height>B)&&(it=B/Math.max(Q.width,Q.height)),it<1)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap||typeof VideoFrame<"u"&&T instanceof VideoFrame){const ot=Math.floor(it*Q.width),ft=Math.floor(it*Q.height);h===void 0&&(h=u(ot,ft));const K=g?u(ot,ft):h;return K.width=ot,K.height=ft,K.getContext("2d").drawImage(T,0,0,ot,ft),Bt("WebGLRenderer: Texture has been resized from ("+Q.width+"x"+Q.height+") to ("+ot+"x"+ft+")."),K}else return"data"in T&&Bt("WebGLRenderer: Image in DataTexture is too big ("+Q.width+"x"+Q.height+")."),T;return T}function A(T){return T.generateMipmaps}function y(T){n.generateMipmap(T)}function w(T){return T.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:T.isWebGL3DRenderTarget?n.TEXTURE_3D:T.isWebGLArrayRenderTarget||T.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function b(T,g,B,it,Q,ot=!1){if(T!==null){if(n[T]!==void 0)return n[T];Bt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let ft;it&&(ft=t.get("EXT_texture_norm16"),ft||Bt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let K=g;if(g===n.RED&&(B===n.FLOAT&&(K=n.R32F),B===n.HALF_FLOAT&&(K=n.R16F),B===n.UNSIGNED_BYTE&&(K=n.R8),B===n.UNSIGNED_SHORT&&ft&&(K=ft.R16_EXT),B===n.SHORT&&ft&&(K=ft.R16_SNORM_EXT)),g===n.RED_INTEGER&&(B===n.UNSIGNED_BYTE&&(K=n.R8UI),B===n.UNSIGNED_SHORT&&(K=n.R16UI),B===n.UNSIGNED_INT&&(K=n.R32UI),B===n.BYTE&&(K=n.R8I),B===n.SHORT&&(K=n.R16I),B===n.INT&&(K=n.R32I)),g===n.RG&&(B===n.FLOAT&&(K=n.RG32F),B===n.HALF_FLOAT&&(K=n.RG16F),B===n.UNSIGNED_BYTE&&(K=n.RG8),B===n.UNSIGNED_SHORT&&ft&&(K=ft.RG16_EXT),B===n.SHORT&&ft&&(K=ft.RG16_SNORM_EXT)),g===n.RG_INTEGER&&(B===n.UNSIGNED_BYTE&&(K=n.RG8UI),B===n.UNSIGNED_SHORT&&(K=n.RG16UI),B===n.UNSIGNED_INT&&(K=n.RG32UI),B===n.BYTE&&(K=n.RG8I),B===n.SHORT&&(K=n.RG16I),B===n.INT&&(K=n.RG32I)),g===n.RGB_INTEGER&&(B===n.UNSIGNED_BYTE&&(K=n.RGB8UI),B===n.UNSIGNED_SHORT&&(K=n.RGB16UI),B===n.UNSIGNED_INT&&(K=n.RGB32UI),B===n.BYTE&&(K=n.RGB8I),B===n.SHORT&&(K=n.RGB16I),B===n.INT&&(K=n.RGB32I)),g===n.RGBA_INTEGER&&(B===n.UNSIGNED_BYTE&&(K=n.RGBA8UI),B===n.UNSIGNED_SHORT&&(K=n.RGBA16UI),B===n.UNSIGNED_INT&&(K=n.RGBA32UI),B===n.BYTE&&(K=n.RGBA8I),B===n.SHORT&&(K=n.RGBA16I),B===n.INT&&(K=n.RGBA32I)),g===n.RGB&&(B===n.UNSIGNED_SHORT&&ft&&(K=ft.RGB16_EXT),B===n.SHORT&&ft&&(K=ft.RGB16_SNORM_EXT),B===n.UNSIGNED_INT_5_9_9_9_REV&&(K=n.RGB9_E5),B===n.UNSIGNED_INT_10F_11F_11F_REV&&(K=n.R11F_G11F_B10F)),g===n.RGBA){const $=ot?ar:Jt.getTransfer(Q);B===n.FLOAT&&(K=n.RGBA32F),B===n.HALF_FLOAT&&(K=n.RGBA16F),B===n.UNSIGNED_BYTE&&(K=$===ie?n.SRGB8_ALPHA8:n.RGBA8),B===n.UNSIGNED_SHORT&&ft&&(K=ft.RGBA16_EXT),B===n.SHORT&&ft&&(K=ft.RGBA16_SNORM_EXT),B===n.UNSIGNED_SHORT_4_4_4_4&&(K=n.RGBA4),B===n.UNSIGNED_SHORT_5_5_5_1&&(K=n.RGB5_A1)}return(K===n.R16F||K===n.R32F||K===n.RG16F||K===n.RG32F||K===n.RGBA16F||K===n.RGBA32F)&&t.get("EXT_color_buffer_float"),K}function _(T,g){let B;return T?g===null||g===yn||g===Gi?B=n.DEPTH24_STENCIL8:g===vn?B=n.DEPTH32F_STENCIL8:g===ds&&(B=n.DEPTH24_STENCIL8,Bt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):g===null||g===yn||g===Gi?B=n.DEPTH_COMPONENT24:g===vn?B=n.DEPTH_COMPONENT32F:g===ds&&(B=n.DEPTH_COMPONENT16),B}function M(T,g){return A(T)===!0||T.isFramebufferTexture&&T.minFilter!==Pe&&T.minFilter!==Ve?Math.log2(Math.max(g.width,g.height))+1:T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?g.mipmaps.length:1}function D(T){const g=new WeakRef(T);i.get(T).__ref=g,v.add(g),E.register(T,g,g)}function C(T){const g=i.get(T).__ref;g!==void 0&&(v.delete(g),E.unregister(g))}function N(T){W(T.target)}function F(T){P(T.target)}function W(T){T.removeEventListener("dispose",N),C(T),q(T),T.isVideoTexture&&d.delete(T),T.isHTMLTexture&&m.delete(T)}function P(T){T.removeEventListener("dispose",F),C(T),et(T)}function H(){for(const T of v){const g=T.deref();g!==void 0&&(g.isRenderTarget===!0?P(g):W(g))}v.clear(),m.clear()}function q(T){const g=i.get(T);if(g.__webglInit===void 0)return;const B=T.source,it=p.get(B);if(it){const Q=it[g.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&V(T),Object.keys(it).length===0&&p.delete(B)}i.remove(T)}function V(T){const g=i.get(T);n.deleteTexture(g.__webglTexture);const B=T.source,it=p.get(B);delete it[g.__cacheKey],a.memory.textures--}function et(T){const g=i.get(T);g.__depthDisposeCallback&&g.__depthDisposeCallback();const B=T.depthTexture;if(B&&B.renderTarget===T&&W(B),T.isWebGLCubeRenderTarget)for(let Q=0;Q<6;Q++){if(Array.isArray(g.__webglFramebuffer[Q]))for(let ot=0;ot<g.__webglFramebuffer[Q].length;ot++)n.deleteFramebuffer(g.__webglFramebuffer[Q][ot]);else n.deleteFramebuffer(g.__webglFramebuffer[Q]);g.__webglDepthbuffer&&n.deleteRenderbuffer(g.__webglDepthbuffer[Q])}else{if(Array.isArray(g.__webglFramebuffer))for(let Q=0;Q<g.__webglFramebuffer.length;Q++)n.deleteFramebuffer(g.__webglFramebuffer[Q]);else n.deleteFramebuffer(g.__webglFramebuffer);if(g.__webglDepthbuffer&&n.deleteRenderbuffer(g.__webglDepthbuffer),g.__webglMultisampledFramebuffer&&n.deleteFramebuffer(g.__webglMultisampledFramebuffer),g.__webglColorRenderbuffer)for(let Q=0;Q<g.__webglColorRenderbuffer.length;Q++)g.__webglColorRenderbuffer[Q]&&n.deleteRenderbuffer(g.__webglColorRenderbuffer[Q]);g.__webglDepthRenderbuffer&&n.deleteRenderbuffer(g.__webglDepthRenderbuffer)}const it=T.textures;for(let Q=0,ot=it.length;Q<ot;Q++){const ft=i.get(it[Q]);ft.__webglTexture&&(n.deleteTexture(ft.__webglTexture),a.memory.textures--),i.remove(it[Q])}i.remove(T)}let X=0;function j(){X=0}function tt(){return X}function wt(T){X=T}function Ft(){const T=X;return T>=s.maxTextures&&Bt("WebGLTextures: Trying to use "+(T+1)+" texture units while this GPU supports only "+s.maxTextures),X+=1,T}function Z(T){const g=[];return g.push(T.wrapS),g.push(T.wrapT),g.push(T.wrapR||0),g.push(T.magFilter),g.push(T.minFilter),g.push(T.anisotropy),g.push(T.internalFormat),g.push(T.format),g.push(T.type),g.push(T.generateMipmaps),g.push(T.mipmapsAutoUpdate),g.push(T.premultiplyAlpha),g.push(T.flipY),g.push(T.unpackAlignment),g.push(T.colorSpace),g.join()}function mt(T,g){const B=i.get(T);if(T.isVideoTexture&&ye(T),T.isRenderTargetTexture===!1&&T.isExternalTexture!==!0&&T.version>0&&B.__version!==T.version){const it=T.image;if(it===null)Bt("WebGLRenderer: Texture marked for update but no image data found.");else if(it.complete===!1)Bt("WebGLRenderer: Texture marked for update but image is incomplete");else{Dt(B,T,g);return}}else T.isExternalTexture&&(B.__webglTexture=T.sourceTexture?T.sourceTexture:null);e.bindTexture(n.TEXTURE_2D,B.__webglTexture,n.TEXTURE0+g)}function Et(T,g){const B=i.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&B.__version!==T.version){Dt(B,T,g);return}else T.isExternalTexture&&(B.__webglTexture=T.sourceTexture?T.sourceTexture:null);e.bindTexture(n.TEXTURE_2D_ARRAY,B.__webglTexture,n.TEXTURE0+g)}function It(T,g){const B=i.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&B.__version!==T.version){Dt(B,T,g);return}e.bindTexture(n.TEXTURE_3D,B.__webglTexture,n.TEXTURE0+g)}function xt(T,g){const B=i.get(T);if(T.version>0&&B.__version!==T.version){Ot(B,T,g);return}e.bindTexture(n.TEXTURE_CUBE_MAP,B.__webglTexture,n.TEXTURE0+g)}const zt={[ha]:n.REPEAT,[Nn]:n.CLAMP_TO_EDGE,[ua]:n.MIRRORED_REPEAT},ue={[Pe]:n.NEAREST,[wh]:n.NEAREST_MIPMAP_NEAREST,[Ss]:n.NEAREST_MIPMAP_LINEAR,[Ve]:n.LINEAR,[Tr]:n.LINEAR_MIPMAP_NEAREST,[Kn]:n.LINEAR_MIPMAP_LINEAR},G={[Lh]:n.NEVER,[mc]:n.ALWAYS,[Dh]:n.LESS,[fc]:n.LEQUAL,[Ih]:n.EQUAL,[pc]:n.GEQUAL,[Nh]:n.GREATER,[Uh]:n.NOTEQUAL};function at(T,g){if(g.type===vn&&t.has("OES_texture_float_linear")===!1&&(g.magFilter===Ve||g.magFilter===Tr||g.magFilter===Ss||g.magFilter===Kn||g.minFilter===Ve||g.minFilter===Tr||g.minFilter===Ss||g.minFilter===Kn)&&Bt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(T,n.TEXTURE_WRAP_S,zt[g.wrapS]),n.texParameteri(T,n.TEXTURE_WRAP_T,zt[g.wrapT]),(T===n.TEXTURE_3D||T===n.TEXTURE_2D_ARRAY)&&n.texParameteri(T,n.TEXTURE_WRAP_R,zt[g.wrapR]),n.texParameteri(T,n.TEXTURE_MAG_FILTER,ue[g.magFilter]),n.texParameteri(T,n.TEXTURE_MIN_FILTER,ue[g.minFilter]),g.compareFunction&&(n.texParameteri(T,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(T,n.TEXTURE_COMPARE_FUNC,G[g.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(g.magFilter===Pe||g.minFilter!==Ss&&g.minFilter!==Kn||g.type===vn&&t.has("OES_texture_float_linear")===!1)return;if(g.anisotropy>1||i.get(g).__currentAnisotropy){const B=t.get("EXT_texture_filter_anisotropic");n.texParameterf(T,B.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(g.anisotropy,s.getMaxAnisotropy())),i.get(g).__currentAnisotropy=g.anisotropy}}}function nt(T,g){let B=!1;T.__webglInit===void 0&&(T.__webglInit=!0,g.addEventListener("dispose",N),D(g));const it=g.source;let Q=p.get(it);Q===void 0&&(Q={},p.set(it,Q));const ot=Z(g);if(ot!==T.__cacheKey){Q[ot]===void 0&&(Q[ot]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,B=!0),Q[ot].usedTimes++;const ft=Q[T.__cacheKey];ft!==void 0&&(Q[T.__cacheKey].usedTimes--,ft.usedTimes===0&&V(g)),T.__cacheKey=ot,T.__webglTexture=Q[ot].texture}return B}function dt(T,g,B){return Math.floor(Math.floor(T/B)/g)}function gt(T,g,B,it){const ot=T.updateRanges;if(ot.length===0)e.texSubImage2D(n.TEXTURE_2D,0,0,0,g.width,g.height,B,it,g.data);else{ot.sort((R,J)=>R.start-J.start);let ft=0;for(let R=1;R<ot.length;R++){const J=ot[ft],Y=ot[R],ht=J.start+J.count,rt=dt(Y.start,g.width,4),lt=dt(J.start,g.width,4);Y.start<=ht+1&&rt===lt&&dt(Y.start+Y.count-1,g.width,4)===rt?J.count=Math.max(J.count,Y.start+Y.count-J.start):(++ft,ot[ft]=Y)}ot.length=ft+1;const K=e.getParameter(n.UNPACK_ROW_LENGTH),$=e.getParameter(n.UNPACK_SKIP_PIXELS),ct=e.getParameter(n.UNPACK_SKIP_ROWS);e.pixelStorei(n.UNPACK_ROW_LENGTH,g.width);for(let R=0,J=ot.length;R<J;R++){const Y=ot[R],ht=Math.floor(Y.start/4),rt=Math.ceil(Y.count/4),lt=ht%g.width,Pt=Math.floor(ht/g.width),Wt=rt,st=1;e.pixelStorei(n.UNPACK_SKIP_PIXELS,lt),e.pixelStorei(n.UNPACK_SKIP_ROWS,Pt),e.texSubImage2D(n.TEXTURE_2D,0,lt,Pt,Wt,st,B,it,g.data)}T.clearUpdateRanges(),e.pixelStorei(n.UNPACK_ROW_LENGTH,K),e.pixelStorei(n.UNPACK_SKIP_PIXELS,$),e.pixelStorei(n.UNPACK_SKIP_ROWS,ct)}}function Dt(T,g,B){let it=n.TEXTURE_2D;(g.isDataArrayTexture||g.isCompressedArrayTexture)&&(it=n.TEXTURE_2D_ARRAY),g.isData3DTexture&&(it=n.TEXTURE_3D);const Q=nt(T,g),ot=g.source;e.bindTexture(it,T.__webglTexture,n.TEXTURE0+B);const ft=i.get(ot);if(ot.version!==ft.__version||Q===!0){if(e.activeTexture(n.TEXTURE0+B),(typeof ImageBitmap<"u"&&g.image instanceof ImageBitmap)===!1){const st=Jt.getPrimaries(Jt.workingColorSpace),Nt=g.colorSpace===qn?null:Jt.getPrimaries(g.colorSpace),Vt=g.colorSpace===qn||st===Nt?n.NONE:n.BROWSER_DEFAULT_WEBGL;e.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,g.flipY),e.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),e.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Vt)}e.pixelStorei(n.UNPACK_ALIGNMENT,g.unpackAlignment);let $=S(g.image,!1,s.maxTextureSize);$=Ut(g,$);const ct=r.convert(g.format,g.colorSpace),R=r.convert(g.type);let J=b(g.internalFormat,ct,R,g.normalized,g.colorSpace,g.isVideoTexture);at(it,g);let Y;const ht=g.mipmaps,rt=g.isVideoTexture!==!0,lt=ft.__version===void 0||Q===!0,Pt=ot.dataReady,Wt=M(g,$);if(g.isDepthTexture)J=_(g.format===Zn,g.type),lt&&(rt?e.texStorage2D(n.TEXTURE_2D,1,J,$.width,$.height):e.texImage2D(n.TEXTURE_2D,0,J,$.width,$.height,0,ct,R,null));else if(g.isDataTexture)if(ht.length>0){rt&&lt&&e.texStorage2D(n.TEXTURE_2D,Wt,J,ht[0].width,ht[0].height);for(let st=0,Nt=ht.length;st<Nt;st++)Y=ht[st],rt?Pt&&e.texSubImage2D(n.TEXTURE_2D,st,0,0,Y.width,Y.height,ct,R,Y.data):e.texImage2D(n.TEXTURE_2D,st,J,Y.width,Y.height,0,ct,R,Y.data);g.generateMipmaps=!1}else rt?(lt&&e.texStorage2D(n.TEXTURE_2D,Wt,J,$.width,$.height),Pt&&gt(g,$,ct,R)):e.texImage2D(n.TEXTURE_2D,0,J,$.width,$.height,0,ct,R,$.data);else if(g.isCompressedTexture)if(g.isCompressedArrayTexture){rt&&lt&&e.texStorage3D(n.TEXTURE_2D_ARRAY,Wt,J,ht[0].width,ht[0].height,$.depth);for(let st=0,Nt=ht.length;st<Nt;st++)if(Y=ht[st],g.format!==Sn)if(ct!==null)if(rt){if(Pt)if(g.layerUpdates.size>0){const Vt=pl(Y.width,Y.height,g.format,g.type);for(const vt of g.layerUpdates){const ne=Y.data.subarray(vt*Vt/Y.data.BYTES_PER_ELEMENT,(vt+1)*Vt/Y.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,st,0,0,vt,Y.width,Y.height,1,ct,ne)}}else e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,st,0,0,0,Y.width,Y.height,$.depth,ct,Y.data)}else e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,st,J,Y.width,Y.height,$.depth,0,Y.data,0,0);else Bt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else rt?Pt&&e.texSubImage3D(n.TEXTURE_2D_ARRAY,st,0,0,0,Y.width,Y.height,$.depth,ct,R,Y.data):e.texImage3D(n.TEXTURE_2D_ARRAY,st,J,Y.width,Y.height,$.depth,0,ct,R,Y.data);g.layerUpdates.size>0&&g.clearLayerUpdates()}else{rt&&lt&&e.texStorage2D(n.TEXTURE_2D,Wt,J,ht[0].width,ht[0].height);for(let st=0,Nt=ht.length;st<Nt;st++)Y=ht[st],g.format!==Sn?ct!==null?rt?Pt&&e.compressedTexSubImage2D(n.TEXTURE_2D,st,0,0,Y.width,Y.height,ct,Y.data):e.compressedTexImage2D(n.TEXTURE_2D,st,J,Y.width,Y.height,0,Y.data):Bt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):rt?Pt&&e.texSubImage2D(n.TEXTURE_2D,st,0,0,Y.width,Y.height,ct,R,Y.data):e.texImage2D(n.TEXTURE_2D,st,J,Y.width,Y.height,0,ct,R,Y.data)}else if(g.isDataArrayTexture)if(rt){if(lt&&e.texStorage3D(n.TEXTURE_2D_ARRAY,Wt,J,$.width,$.height,$.depth),Pt)if(g.layerUpdates.size>0){const st=pl($.width,$.height,g.format,g.type);for(const Nt of g.layerUpdates){const Vt=$.data.subarray(Nt*st/$.data.BYTES_PER_ELEMENT,(Nt+1)*st/$.data.BYTES_PER_ELEMENT);e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,Nt,$.width,$.height,1,ct,R,Vt)}g.clearLayerUpdates()}else e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,$.width,$.height,$.depth,ct,R,$.data)}else e.texImage3D(n.TEXTURE_2D_ARRAY,0,J,$.width,$.height,$.depth,0,ct,R,$.data);else if(g.isData3DTexture)rt?(lt&&e.texStorage3D(n.TEXTURE_3D,Wt,J,$.width,$.height,$.depth),Pt&&e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,$.width,$.height,$.depth,ct,R,$.data)):e.texImage3D(n.TEXTURE_3D,0,J,$.width,$.height,$.depth,0,ct,R,$.data);else if(g.isFramebufferTexture){if(lt)if(rt)e.texStorage2D(n.TEXTURE_2D,Wt,J,$.width,$.height);else{let st=$.width,Nt=$.height;for(let Vt=0;Vt<Wt;Vt++)e.texImage2D(n.TEXTURE_2D,Vt,J,st,Nt,0,ct,R,null),st>>=1,Nt>>=1}}else if(g.isHTMLTexture){if("texElementImage2D"in n){const st=n.canvas;if(st.hasAttribute("layoutsubtree")||st.setAttribute("layoutsubtree","true"),$.parentNode!==st){st.appendChild($),m.add(g),st.onpaint=Nt=>{const Vt=Nt.changedElements;for(const vt of m)Vt.includes(vt.image)&&(vt.needsUpdate=!0)},st.requestPaint();return}if(n.texElementImage2D.length===3)n.texElementImage2D(n.TEXTURE_2D,n.RGBA8,$);else{const Vt=n.RGBA,vt=n.RGBA,ne=n.UNSIGNED_BYTE;n.texElementImage2D(n.TEXTURE_2D,0,Vt,vt,ne,$)}n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)}}else if(ht.length>0){if(rt&&lt){const st=kt(ht[0]);e.texStorage2D(n.TEXTURE_2D,Wt,J,st.width,st.height)}for(let st=0,Nt=ht.length;st<Nt;st++)Y=ht[st],rt?Pt&&e.texSubImage2D(n.TEXTURE_2D,st,0,0,ct,R,Y):e.texImage2D(n.TEXTURE_2D,st,J,ct,R,Y);g.generateMipmaps=!1}else if(rt){if(lt){const st=kt($);e.texStorage2D(n.TEXTURE_2D,Wt,J,st.width,st.height)}Pt&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,ct,R,$)}else e.texImage2D(n.TEXTURE_2D,0,J,ct,R,$);A(g)&&g.mipmapsAutoUpdate===!0&&y(it),ft.__version=ot.version,g.onUpdate&&g.onUpdate(g)}T.__version=g.version}function Ot(T,g,B){if(g.image.length!==6)return;const it=nt(T,g),Q=g.source;e.bindTexture(n.TEXTURE_CUBE_MAP,T.__webglTexture,n.TEXTURE0+B);const ot=i.get(Q);if(Q.version!==ot.__version||it===!0){e.activeTexture(n.TEXTURE0+B);const ft=Jt.getPrimaries(Jt.workingColorSpace),K=g.colorSpace===qn?null:Jt.getPrimaries(g.colorSpace),$=g.colorSpace===qn||ft===K?n.NONE:n.BROWSER_DEFAULT_WEBGL;e.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,g.flipY),e.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),e.pixelStorei(n.UNPACK_ALIGNMENT,g.unpackAlignment),e.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,$);const ct=g.isCompressedTexture||g.image[0].isCompressedTexture,R=g.image[0]&&g.image[0].isDataTexture,J=[];for(let vt=0;vt<6;vt++)!ct&&!R?J[vt]=S(g.image[vt],!0,s.maxCubemapSize):J[vt]=R?g.image[vt].image:g.image[vt],J[vt]=Ut(g,J[vt]);const Y=J[0],ht=r.convert(g.format,g.colorSpace),rt=r.convert(g.type);let lt=b(g.internalFormat,ht,rt,g.normalized,g.colorSpace);const Pt=g.isVideoTexture!==!0,Wt=ot.__version===void 0||it===!0,st=Q.dataReady;let Nt=M(g,Y);at(n.TEXTURE_CUBE_MAP,g);let Vt;if(g.isDepthTexture){if(lt=_(g.format===Zn,g.type),Wt)if(Pt)e.texStorage2D(n.TEXTURE_CUBE_MAP,1,lt,Y.width,Y.height);else for(let vt=0;vt<6;vt++)e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0,lt,Y.width,Y.height,0,ht,rt,null)}else if(ct){Pt&&Wt&&e.texStorage2D(n.TEXTURE_CUBE_MAP,Nt,lt,Y.width,Y.height);for(let vt=0;vt<6;vt++){Vt=J[vt].mipmaps;for(let ne=0;ne<Vt.length;ne++){const we=Vt[ne];g.format!==Sn?ht!==null?Pt?st&&e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+vt,ne,0,0,we.width,we.height,ht,we.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+vt,ne,lt,we.width,we.height,0,we.data):Bt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Pt?st&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+vt,ne,0,0,we.width,we.height,ht,rt,we.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+vt,ne,lt,we.width,we.height,0,ht,rt,we.data)}}}else{if(Vt=g.mipmaps,Pt&&Wt){Vt.length>0&&Nt++;const vt=kt(J[0]);e.texStorage2D(n.TEXTURE_CUBE_MAP,Nt,lt,vt.width,vt.height)}for(let vt=0;vt<6;vt++)if(R){Pt?st&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0,0,0,J[vt].width,J[vt].height,ht,rt,J[vt].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0,lt,J[vt].width,J[vt].height,0,ht,rt,J[vt].data);for(let ne=0;ne<Vt.length;ne++){const Bn=Vt[ne].image[vt].image;Pt?st&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+vt,ne+1,0,0,Bn.width,Bn.height,ht,rt,Bn.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+vt,ne+1,lt,Bn.width,Bn.height,0,ht,rt,Bn.data)}}else{Pt?st&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0,0,0,ht,rt,J[vt]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0,lt,ht,rt,J[vt]);for(let ne=0;ne<Vt.length;ne++){const we=Vt[ne];Pt?st&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+vt,ne+1,0,0,ht,rt,we.image[vt]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+vt,ne+1,lt,ht,rt,we.image[vt])}}}A(g)&&g.mipmapsAutoUpdate===!0&&y(n.TEXTURE_CUBE_MAP),ot.__version=Q.version,g.onUpdate&&g.onUpdate(g)}T.__version=g.version}function $t(T,g,B,it,Q,ot){const ft=r.convert(B.format,B.colorSpace),K=r.convert(B.type),$=b(B.internalFormat,ft,K,B.normalized,B.colorSpace),ct=i.get(g),R=i.get(B);if(R.__renderTarget=g,!ct.__hasExternalTextures){const J=Math.max(1,g.width>>ot),Y=Math.max(1,g.height>>ot);Q===n.TEXTURE_3D||Q===n.TEXTURE_2D_ARRAY?e.texImage3D(Q,ot,$,J,Y,g.depth,0,ft,K,null):e.texImage2D(Q,ot,$,J,Y,0,ft,K,null)}e.bindFramebuffer(n.FRAMEBUFFER,T),_t(g)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,it,Q,R.__webglTexture,0,fe(g)):(Q===n.TEXTURE_2D||Q>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&Q<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,it,Q,R.__webglTexture,ot),e.bindFramebuffer(n.FRAMEBUFFER,null)}function le(T,g,B){if(n.bindRenderbuffer(n.RENDERBUFFER,T),g.depthBuffer){const it=g.depthTexture,Q=it&&it.isDepthTexture?it.type:null,ot=_(g.stencilBuffer,Q),ft=g.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;_t(g)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,fe(g),ot,g.width,g.height):B?n.renderbufferStorageMultisample(n.RENDERBUFFER,fe(g),ot,g.width,g.height):n.renderbufferStorage(n.RENDERBUFFER,ot,g.width,g.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,ft,n.RENDERBUFFER,T)}else{const it=g.textures;for(let Q=0;Q<it.length;Q++){const ot=it[Q],ft=r.convert(ot.format,ot.colorSpace),K=r.convert(ot.type),$=b(ot.internalFormat,ft,K,ot.normalized,ot.colorSpace);_t(g)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,fe(g),$,g.width,g.height):B?n.renderbufferStorageMultisample(n.RENDERBUFFER,fe(g),$,g.width,g.height):n.renderbufferStorage(n.RENDERBUFFER,$,g.width,g.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function se(T,g,B){const it=g.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(n.FRAMEBUFFER,T),!(g.depthTexture&&g.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const Q=i.get(g.depthTexture);Q.__renderTarget=g;const ot=it?g.depthTexture.image[0]:g.depthTexture.image;(!Q.__webglTexture||ot.width!==g.width||ot.height!==g.height)&&(ot.width=g.width,ot.height=g.height,g.depthTexture.needsUpdate=!0),it?xt(g.depthTexture,0):mt(g.depthTexture,0);const ft=Q.__webglTexture,K=fe(g),$=it?n.TEXTURE_CUBE_MAP_POSITIVE_X+B:n.TEXTURE_2D,ct=g.depthTexture.format===Zn?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(g.depthTexture.format===Qn)_t(g)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ct,$,ft,0,K):n.framebufferTexture2D(n.FRAMEBUFFER,ct,$,ft,0);else if(g.depthTexture.format===Zn)_t(g)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ct,$,ft,0,K):n.framebufferTexture2D(n.FRAMEBUFFER,ct,$,ft,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function re(T){const g=i.get(T),B=T.isWebGLCubeRenderTarget===!0;if(g.__boundDepthTexture!==T.depthTexture){const it=T.depthTexture;if(g.__depthDisposeCallback&&g.__depthDisposeCallback(),it){const Q=()=>{delete g.__boundDepthTexture,delete g.__depthDisposeCallback,it.removeEventListener("dispose",Q)};it.addEventListener("dispose",Q),g.__depthDisposeCallback=Q}g.__boundDepthTexture=it}if(T.depthTexture&&!g.__autoAllocateDepthBuffer)if(B)for(let it=0;it<6;it++)se(g.__webglFramebuffer[it],T,it);else T.texture.mipmaps.length>0?se(g.__webglFramebuffer[0],T,0):se(g.__webglFramebuffer,T,0);else if(B){g.__webglDepthbuffer=[];for(let it=0;it<6;it++)if(e.bindFramebuffer(n.FRAMEBUFFER,g.__webglFramebuffer[it]),g.__webglDepthbuffer[it]===void 0)g.__webglDepthbuffer[it]=n.createRenderbuffer(),le(g.__webglDepthbuffer[it],T,!1);else{const Q=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ot=g.__webglDepthbuffer[it];n.bindRenderbuffer(n.RENDERBUFFER,ot),n.framebufferRenderbuffer(n.FRAMEBUFFER,Q,n.RENDERBUFFER,ot)}}else if(T.texture.mipmaps.length>0?e.bindFramebuffer(n.FRAMEBUFFER,g.__webglFramebuffer[0]):e.bindFramebuffer(n.FRAMEBUFFER,g.__webglFramebuffer),g.__webglDepthbuffer===void 0)g.__webglDepthbuffer=n.createRenderbuffer(),le(g.__webglDepthbuffer,T,!1);else{const Q=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ot=g.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,ot),n.framebufferRenderbuffer(n.FRAMEBUFFER,Q,n.RENDERBUFFER,ot)}e.bindFramebuffer(n.FRAMEBUFFER,null)}function Ae(T,g,B){const it=i.get(T);g!==void 0&&$t(it.__webglFramebuffer,T,T.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),B!==void 0&&re(T)}function Me(T){const g=T.texture,B=i.get(T),it=i.get(g);T.addEventListener("dispose",F),D(T);const Q=T.textures,ot=T.isWebGLCubeRenderTarget===!0,ft=Q.length>1;if(ft||(it.__webglTexture===void 0&&(it.__webglTexture=n.createTexture()),it.__version=g.version,a.memory.textures++),ot){B.__webglFramebuffer=[];for(let K=0;K<6;K++)if(g.mipmaps.length>0){B.__webglFramebuffer[K]=[];for(let $=0;$<g.mipmaps.length;$++)B.__webglFramebuffer[K][$]=n.createFramebuffer()}else B.__webglFramebuffer[K]=n.createFramebuffer()}else{if(g.mipmaps.length>0){B.__webglFramebuffer=[];for(let K=0;K<g.mipmaps.length;K++)B.__webglFramebuffer[K]=n.createFramebuffer()}else B.__webglFramebuffer=n.createFramebuffer();if(ft)for(let K=0,$=Q.length;K<$;K++){const ct=i.get(Q[K]);ct.__webglTexture===void 0&&(ct.__webglTexture=n.createTexture(),a.memory.textures++)}if(T.samples>0&&_t(T)===!1){B.__webglMultisampledFramebuffer=n.createFramebuffer(),B.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let K=0;K<Q.length;K++){const $=Q[K];B.__webglColorRenderbuffer[K]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,B.__webglColorRenderbuffer[K]);const ct=r.convert($.format,$.colorSpace),R=r.convert($.type),J=b($.internalFormat,ct,R,$.normalized,$.colorSpace,T.isXRRenderTarget===!0),Y=fe(T);n.renderbufferStorageMultisample(n.RENDERBUFFER,Y,J,T.width,T.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+K,n.RENDERBUFFER,B.__webglColorRenderbuffer[K])}n.bindRenderbuffer(n.RENDERBUFFER,null),T.depthBuffer&&(B.__webglDepthRenderbuffer=n.createRenderbuffer(),le(B.__webglDepthRenderbuffer,T,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(ot){e.bindTexture(n.TEXTURE_CUBE_MAP,it.__webglTexture),at(n.TEXTURE_CUBE_MAP,g);for(let K=0;K<6;K++)if(g.mipmaps.length>0)for(let $=0;$<g.mipmaps.length;$++)$t(B.__webglFramebuffer[K][$],T,g,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+K,$);else $t(B.__webglFramebuffer[K],T,g,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+K,0);A(g)?y(n.TEXTURE_CUBE_MAP):g.mipmaps.length>0&&n.texParameteri(n.TEXTURE_CUBE_MAP,n.TEXTURE_MAX_LEVEL,g.mipmaps.length-1),e.unbindTexture()}else if(ft){for(let K=0,$=Q.length;K<$;K++){const ct=Q[K],R=i.get(ct);let J=n.TEXTURE_2D;(T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(J=T.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(J,R.__webglTexture),at(J,ct),$t(B.__webglFramebuffer,T,ct,n.COLOR_ATTACHMENT0+K,J,0),A(ct)&&y(J)}e.unbindTexture()}else{let K=n.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(K=T.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(K,it.__webglTexture),at(K,g),g.mipmaps.length>0)for(let $=0;$<g.mipmaps.length;$++)$t(B.__webglFramebuffer[$],T,g,n.COLOR_ATTACHMENT0,K,$);else $t(B.__webglFramebuffer,T,g,n.COLOR_ATTACHMENT0,K,0);A(g)?y(K):g.mipmaps.length>0&&n.texParameteri(K,n.TEXTURE_MAX_LEVEL,g.mipmaps.length-1),e.unbindTexture()}T.depthBuffer&&re(T)}function I(T){const g=T.textures;for(let B=0,it=g.length;B<it;B++){const Q=g[B];if(A(Q)&&Q.mipmapsAutoUpdate===!0){const ot=w(T),ft=i.get(Q).__webglTexture;e.bindTexture(ot,ft),y(ot),e.unbindTexture()}}}const tn=[];function de(T){if(T.samples>0){if(_t(T)===!1){const g=T.textures,B=T.width,it=T.height;let Q=n.COLOR_BUFFER_BIT;const ot=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ft=i.get(T),K=g.length>1;if(K)for(let ct=0;ct<g.length;ct++)e.bindFramebuffer(n.FRAMEBUFFER,ft.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ct,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,ft.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ct,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,ft.__webglMultisampledFramebuffer),T.texture.mipmaps.length>0?e.bindFramebuffer(n.DRAW_FRAMEBUFFER,ft.__webglFramebuffer[0]):e.bindFramebuffer(n.DRAW_FRAMEBUFFER,ft.__webglFramebuffer);for(let ct=0;ct<g.length;ct++){if(T.resolveDepthBuffer&&(T.depthBuffer&&(Q|=n.DEPTH_BUFFER_BIT),T.stencilBuffer&&T.resolveStencilBuffer&&(Q|=n.STENCIL_BUFFER_BIT)),K){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,ft.__webglColorRenderbuffer[ct]);const R=i.get(g[ct]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,R,0)}n.blitFramebuffer(0,0,B,it,0,0,B,it,Q,n.NEAREST),l===!0&&(tn.length=0,tn.push(n.COLOR_ATTACHMENT0+ct),T.depthBuffer&&T.storeMultisampledDepthBuffer===!1&&tn.push(ot),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,tn))}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),K)for(let ct=0;ct<g.length;ct++){e.bindFramebuffer(n.FRAMEBUFFER,ft.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ct,n.RENDERBUFFER,ft.__webglColorRenderbuffer[ct]);const R=i.get(g[ct]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,ft.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ct,n.TEXTURE_2D,R,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,ft.__webglMultisampledFramebuffer)}else if(T.depthBuffer&&T.storeMultisampledDepthBuffer===!1&&l){const g=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[g])}}}function fe(T){return Math.min(s.maxSamples,T.samples)}function _t(T){const g=i.get(T);return T.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&g.__useRenderToTexture!==!1}function ye(T){const g=a.render.frame;d.get(T)!==g&&(d.set(T,g),T.update())}function Ut(T,g){const B=T.colorSpace,it=T.format,Q=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||B!==rr&&B!==qn&&(Jt.getTransfer(B)===ie?(it!==Sn||Q!==$e)&&Bt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):jt("WebGLTextures: Unsupported texture color space:",B)),g}function kt(T){return typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement?(c.width=T.naturalWidth||T.width,c.height=T.naturalHeight||T.height):typeof VideoFrame<"u"&&T instanceof VideoFrame?(c.width=T.displayWidth,c.height=T.displayHeight):(c.width=T.width,c.height=T.height),c}this.allocateTextureUnit=Ft,this.resetTextureUnits=j,this.getTextureUnits=tt,this.setTextureUnits=wt,this.setTexture2D=mt,this.setTexture2DArray=Et,this.setTexture3D=It,this.setTextureCube=xt,this.rebindTextures=Ae,this.setupRenderTarget=Me,this.updateRenderTargetMipmap=I,this.updateMultisampleRenderTarget=de,this.setupDepthRenderbuffer=re,this.setupFrameBufferTexture=$t,this.useMultisampledRTT=_t,this.dispose=H}function p0(n,t){function e(i,s=qn){let r;const a=Jt.getTransfer(s);if(i===$e)return n.UNSIGNED_BYTE;if(i===Qa)return n.UNSIGNED_SHORT_4_4_4_4;if(i===ja)return n.UNSIGNED_SHORT_5_5_5_1;if(i===lc)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===cc)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===ac)return n.BYTE;if(i===oc)return n.SHORT;if(i===ds)return n.UNSIGNED_SHORT;if(i===Ja)return n.INT;if(i===yn)return n.UNSIGNED_INT;if(i===vn)return n.FLOAT;if(i===En)return n.HALF_FLOAT;if(i===hc)return n.ALPHA;if(i===uc)return n.RGB;if(i===Sn)return n.RGBA;if(i===Qn)return n.DEPTH_COMPONENT;if(i===Zn)return n.DEPTH_STENCIL;if(i===dc)return n.RED;if(i===to)return n.RED_INTEGER;if(i===fi)return n.RG;if(i===eo)return n.RG_INTEGER;if(i===no)return n.RGBA_INTEGER;if(i===Zs||i===$s||i===Js||i===Qs)if(a===ie)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===Zs)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===$s)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Js)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Qs)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===Zs)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===$s)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Js)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Qs)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===da||i===fa||i===pa||i===ma)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===da)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===fa)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===pa)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===ma)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===_a||i===ga||i===xa||i===va||i===Sa||i===ir||i===Ma)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(i===_a||i===ga)return a===ie?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===xa)return a===ie?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(i===va)return r.COMPRESSED_R11_EAC;if(i===Sa)return r.COMPRESSED_SIGNED_R11_EAC;if(i===ir)return r.COMPRESSED_RG11_EAC;if(i===Ma)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===ya||i===Ea||i===ba||i===Ta||i===Aa||i===wa||i===Ra||i===Ca||i===Pa||i===La||i===Da||i===Ia||i===Na||i===Ua)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(i===ya)return a===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Ea)return a===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===ba)return a===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Ta)return a===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Aa)return a===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===wa)return a===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Ra)return a===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Ca)return a===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Pa)return a===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===La)return a===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Da)return a===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Ia)return a===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Na)return a===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Ua)return a===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Fa||i===Oa||i===Ba)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(i===Fa)return a===ie?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Oa)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Ba)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===za||i===ka||i===sr||i===Ga)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(i===za)return r.COMPRESSED_RED_RGTC1_EXT;if(i===ka)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===sr)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Ga)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Gi?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:e}}const m0=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,_0=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class g0{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){const i=new Rc(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,i=new pi({vertexShader:m0,fragmentShader:_0,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new _e(new _s(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class x0 extends ei{constructor(t,e){super();const i=this;let s=null,r=1,a=null,o="local-floor",l=1,c=null,d=null,m=null,h=null,p=null,v=null;const E=typeof XRWebGLBinding<"u",f=new g0,u={},S=e.getContextAttributes();let A=null,y=null;const w=[],b=[],_=new Ct;let M=null,D=null;const C=new un;C.viewport=new ge;const N=new un;N.viewport=new ge;const F=[C,N],W=new Tu;let P=null,H=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let mt=w[Z];return mt===void 0&&(mt=new Ir,w[Z]=mt),mt.getTargetRaySpace()},this.getControllerGrip=function(Z){let mt=w[Z];return mt===void 0&&(mt=new Ir,w[Z]=mt),mt.getGripSpace()},this.getHand=function(Z){let mt=w[Z];return mt===void 0&&(mt=new Ir,w[Z]=mt),mt.getHandSpace()};function q(Z){const mt=b.indexOf(Z.inputSource);if(mt===-1)return;const Et=w[mt];Et!==void 0&&(Et.update(Z.inputSource,Z.frame,c||a),Et.dispatchEvent({type:Z.type,data:Z.inputSource}))}function V(){s.removeEventListener("select",q),s.removeEventListener("selectstart",q),s.removeEventListener("selectend",q),s.removeEventListener("squeeze",q),s.removeEventListener("squeezestart",q),s.removeEventListener("squeezeend",q),s.removeEventListener("end",V),s.removeEventListener("inputsourceschange",et);for(let Z=0;Z<w.length;Z++){const mt=b[Z];mt!==null&&(b[Z]=null,w[Z].disconnect(mt))}P=null,H=null,f.reset();for(const Z in u)delete u[Z];if(t.setRenderTarget(A),p=null,h=null,m=null,s=null,y=null,Ft.stop(),i.isPresenting=!1,t.setPixelRatio(M),t.setSize(_.width,_.height,!1),D!==null){const Z=D.camera;Z.fov=D.fov,Z.zoom=D.zoom,Z.updateProjectionMatrix(),D=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){r=Z,i.isPresenting===!0&&Bt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){o=Z,i.isPresenting===!0&&Bt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(Z){c=Z},this.getBaseLayer=function(){return h!==null?h:p},this.getBinding=function(){return m===null&&E&&(m=new XRWebGLBinding(s,e)),m},this.getFrame=function(){return v},this.getSession=function(){return s},this.setSession=async function(Z){if(s=Z,s!==null){if(A=t.getRenderTarget(),s.addEventListener("select",q),s.addEventListener("selectstart",q),s.addEventListener("selectend",q),s.addEventListener("squeeze",q),s.addEventListener("squeezestart",q),s.addEventListener("squeezeend",q),s.addEventListener("end",V),s.addEventListener("inputsourceschange",et),S.xrCompatible!==!0&&await e.makeXRCompatible(),M=t.getPixelRatio(),t.getSize(_),E&&"createProjectionLayer"in XRWebGLBinding.prototype){let Et=null,It=null,xt=null;S.depth&&(xt=S.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,Et=S.stencil?Zn:Qn,It=S.stencil?Gi:yn);const zt={colorFormat:e.RGBA8,depthFormat:xt,scaleFactor:r};m=this.getBinding(),h=m.createProjectionLayer(zt),s.updateRenderState({layers:[h]}),t.setPixelRatio(1),t.setSize(h.textureWidth,h.textureHeight,!1),y=new Mn(h.textureWidth,h.textureHeight,{format:Sn,type:$e,depthTexture:new Vi(h.textureWidth,h.textureHeight,It,void 0,void 0,void 0,void 0,void 0,void 0,Et),stencilBuffer:S.stencil,colorSpace:t.outputColorSpace,samples:S.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1,storeMultisampledDepthBuffer:h.ignoreDepthValues===!1,storeMultisampledStencilBuffer:h.ignoreDepthValues===!1})}else{const Et={antialias:S.antialias,alpha:!0,depth:S.depth,stencil:S.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,e,Et),s.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),y=new Mn(p.framebufferWidth,p.framebufferHeight,{format:Sn,type:$e,colorSpace:t.outputColorSpace,stencilBuffer:S.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1,storeMultisampledDepthBuffer:p.ignoreDepthValues===!1,storeMultisampledStencilBuffer:p.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),Ft.setContext(s),Ft.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return f.getDepthTexture()};function et(Z){for(let mt=0;mt<Z.removed.length;mt++){const Et=Z.removed[mt],It=b.indexOf(Et);It>=0&&(b[It]=null,w[It].disconnect(Et))}for(let mt=0;mt<Z.added.length;mt++){const Et=Z.added[mt];let It=b.indexOf(Et);if(It===-1){for(let zt=0;zt<w.length;zt++)if(zt>=b.length){b.push(Et),It=zt;break}else if(b[zt]===null){b[zt]=Et,It=zt;break}if(It===-1)break}const xt=w[It];xt&&xt.connect(Et)}}function X(Z,mt){mt===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(mt.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(s===null)return;let mt=Z.near,Et=Z.far;f.texture!==null&&(f.depthNear>0&&(mt=f.depthNear),f.depthFar>0&&(Et=f.depthFar)),W.near=N.near=C.near=mt,W.far=N.far=C.far=Et,(P!==W.near||H!==W.far)&&(s.updateRenderState({depthNear:W.near,depthFar:W.far}),P=W.near,H=W.far),W.layers.mask=Z.layers.mask|6,C.layers.mask=W.layers.mask&-5,N.layers.mask=W.layers.mask&-3;const It=Z.parent,xt=W.cameras;X(W,It);for(let zt=0;zt<xt.length;zt++)X(xt[zt],It);W.projectionMatrix.copy(C.projectionMatrix),W.projectionMatrixInverse.copy(C.projectionMatrixInverse),D===null&&Z.isPerspectiveCamera&&(D={camera:Z,fov:Z.fov,zoom:Z.zoom}),j(Z,W,It)};function j(Z,mt,Et){Et===null?Z.matrix.copy(mt.matrixWorld):(Z.matrix.copy(Et.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(mt.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(mt.projectionMatrix),Z.projectionMatrixInverse.copy(mt.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=Va*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return W},this.getFoveation=function(){if(!(h===null&&p===null))return l},this.setFoveation=function(Z){l=Z,h!==null&&(h.fixedFoveation=Z),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=Z)},this.hasDepthSensing=function(){return f.texture!==null},this.getDepthSensingMesh=function(){return f.getMesh(W)},this.getCameraTexture=function(Z){return u[Z]};let tt=null;function wt(Z,mt){if(d=mt.getViewerPose(c||a),v=mt,d!==null){const Et=d.views;p!==null&&(t.setRenderTargetFramebuffer(y,p.framebuffer),t.setRenderTarget(y));let It=!1;Et.length!==W.cameras.length&&(W.cameras.length=0,It=!0);for(let G=0;G<Et.length;G++){const at=Et[G];let nt=null;if(p!==null)nt=p.getViewport(at);else{const gt=m.getViewSubImage(h,at);nt=gt.viewport,G===0&&(t.setRenderTargetTextures(y,gt.colorTexture,gt.depthStencilTexture),t.setRenderTarget(y))}let dt=F[G];dt===void 0&&(dt=new un,dt.layers.enable(G),dt.viewport=new ge,F[G]=dt),dt.matrix.fromArray(at.transform.matrix),dt.matrix.decompose(dt.position,dt.quaternion,dt.scale),dt.projectionMatrix.fromArray(at.projectionMatrix),dt.projectionMatrixInverse.copy(dt.projectionMatrix).invert(),dt.viewport.set(nt.x,nt.y,nt.width,nt.height),G===0&&(W.matrix.copy(dt.matrix),W.matrix.decompose(W.position,W.quaternion,W.scale)),It===!0&&W.cameras.push(dt)}const xt=s.enabledFeatures;if(xt&&xt.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&E){m=i.getBinding();const G=m.getDepthInformation(Et[0]);G&&G.isValid&&G.texture&&f.init(G,s.renderState)}if(xt&&xt.includes("camera-access")&&E){t.state.unbindTexture(),m=i.getBinding();for(let G=0;G<Et.length;G++){const at=Et[G].camera;if(at){let nt=u[at];nt||(nt=new Rc,u[at]=nt);const dt=m.getCameraImage(at);nt.sourceTexture=dt}}}}for(let Et=0;Et<w.length;Et++){const It=b[Et],xt=w[Et];It!==null&&xt!==void 0&&xt.update(It,mt,c||a)}tt&&tt(Z,mt),mt.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:mt}),v=null}const Ft=new Dc;Ft.setAnimationLoop(wt),this.setAnimationLoop=function(Z){tt=Z},this.dispose=function(){}}}const v0=new he,Hc=new Gt;Hc.set(-1,0,0,0,1,0,0,0,1);function S0(n,t){function e(f,u){f.matrixAutoUpdate===!0&&f.updateMatrix(),u.value.copy(f.matrix)}function i(f,u){u.color.getRGB(f.fogColor.value,Cc(n)),u.isFog?(f.fogNear.value=u.near,f.fogFar.value=u.far):u.isFogExp2&&(f.fogDensity.value=u.density)}function s(f,u,S,A,y){u.isNodeMaterial?u.uniformsNeedUpdate=!1:u.isMeshBasicMaterial?r(f,u):u.isMeshLambertMaterial?(r(f,u),u.envMap&&(f.envMapIntensity.value=u.envMapIntensity)):u.isMeshToonMaterial?(r(f,u),m(f,u)):u.isMeshPhongMaterial?(r(f,u),d(f,u),u.envMap&&(f.envMapIntensity.value=u.envMapIntensity)):u.isMeshStandardMaterial?(r(f,u),h(f,u),u.isMeshPhysicalMaterial&&p(f,u,y)):u.isMeshMatcapMaterial?(r(f,u),v(f,u)):u.isMeshDepthMaterial?r(f,u):u.isMeshDistanceMaterial?(r(f,u),E(f,u)):u.isMeshNormalMaterial?r(f,u):u.isLineBasicMaterial?(a(f,u),u.isLineDashedMaterial&&o(f,u)):u.isPointsMaterial?l(f,u,S,A):u.isSpriteMaterial?c(f,u):u.isShadowMaterial?(f.color.value.copy(u.color),f.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function r(f,u){f.opacity.value=u.opacity,u.color&&f.diffuse.value.copy(u.color),u.emissive&&f.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(f.map.value=u.map,e(u.map,f.mapTransform)),u.alphaMap&&(f.alphaMap.value=u.alphaMap,e(u.alphaMap,f.alphaMapTransform)),u.bumpMap&&(f.bumpMap.value=u.bumpMap,e(u.bumpMap,f.bumpMapTransform),f.bumpScale.value=u.bumpScale,u.side===qe&&(f.bumpScale.value*=-1)),u.normalMap&&(f.normalMap.value=u.normalMap,e(u.normalMap,f.normalMapTransform),f.normalScale.value.copy(u.normalScale),u.side===qe&&f.normalScale.value.negate()),u.displacementMap&&(f.displacementMap.value=u.displacementMap,e(u.displacementMap,f.displacementMapTransform),f.displacementScale.value=u.displacementScale,f.displacementBias.value=u.displacementBias),u.emissiveMap&&(f.emissiveMap.value=u.emissiveMap,e(u.emissiveMap,f.emissiveMapTransform)),u.specularMap&&(f.specularMap.value=u.specularMap,e(u.specularMap,f.specularMapTransform)),u.alphaTest>0&&(f.alphaTest.value=u.alphaTest);const S=t.get(u),A=S.envMap,y=S.envMapRotation;A&&(f.envMap.value=A,f.envMapRotation.value.setFromMatrix4(v0.makeRotationFromEuler(y)).transpose(),A.isCubeTexture&&A.isRenderTargetTexture===!1&&f.envMapRotation.value.premultiply(Hc),f.reflectivity.value=u.reflectivity,f.ior.value=u.ior,f.refractionRatio.value=u.refractionRatio),u.lightMap&&(f.lightMap.value=u.lightMap,f.lightMapIntensity.value=u.lightMapIntensity,e(u.lightMap,f.lightMapTransform)),u.aoMap&&(f.aoMap.value=u.aoMap,f.aoMapIntensity.value=u.aoMapIntensity,e(u.aoMap,f.aoMapTransform))}function a(f,u){f.diffuse.value.copy(u.color),f.opacity.value=u.opacity,u.map&&(f.map.value=u.map,e(u.map,f.mapTransform))}function o(f,u){f.dashSize.value=u.dashSize,f.totalSize.value=u.dashSize+u.gapSize,f.scale.value=u.scale}function l(f,u,S,A){f.diffuse.value.copy(u.color),f.opacity.value=u.opacity,f.size.value=u.size*S,f.scale.value=A*.5,u.map&&(f.map.value=u.map,e(u.map,f.uvTransform)),u.alphaMap&&(f.alphaMap.value=u.alphaMap,e(u.alphaMap,f.alphaMapTransform)),u.alphaTest>0&&(f.alphaTest.value=u.alphaTest)}function c(f,u){f.diffuse.value.copy(u.color),f.opacity.value=u.opacity,f.rotation.value=u.rotation,u.map&&(f.map.value=u.map,e(u.map,f.mapTransform)),u.alphaMap&&(f.alphaMap.value=u.alphaMap,e(u.alphaMap,f.alphaMapTransform)),u.alphaTest>0&&(f.alphaTest.value=u.alphaTest)}function d(f,u){f.specular.value.copy(u.specular),f.shininess.value=Math.max(u.shininess,1e-4)}function m(f,u){u.gradientMap&&(f.gradientMap.value=u.gradientMap)}function h(f,u){f.metalness.value=u.metalness,u.metalnessMap&&(f.metalnessMap.value=u.metalnessMap,e(u.metalnessMap,f.metalnessMapTransform)),f.roughness.value=u.roughness,u.roughnessMap&&(f.roughnessMap.value=u.roughnessMap,e(u.roughnessMap,f.roughnessMapTransform)),u.envMap&&(f.envMapIntensity.value=u.envMapIntensity)}function p(f,u,S){f.ior.value=u.ior,u.diffuseRoughness>0&&(f.diffuseRoughness.value=u.diffuseRoughness,u.diffuseRoughnessMap&&(f.diffuseRoughnessMap.value=u.diffuseRoughnessMap,e(u.diffuseRoughnessMap,f.diffuseRoughnessMapTransform))),u.sheen>0&&(f.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),f.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(f.sheenColorMap.value=u.sheenColorMap,e(u.sheenColorMap,f.sheenColorMapTransform)),u.sheenRoughnessMap&&(f.sheenRoughnessMap.value=u.sheenRoughnessMap,e(u.sheenRoughnessMap,f.sheenRoughnessMapTransform))),u.clearcoat>0&&(f.clearcoat.value=u.clearcoat,f.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(f.clearcoatMap.value=u.clearcoatMap,e(u.clearcoatMap,f.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(f.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,e(u.clearcoatRoughnessMap,f.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(f.clearcoatNormalMap.value=u.clearcoatNormalMap,e(u.clearcoatNormalMap,f.clearcoatNormalMapTransform),f.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===qe&&f.clearcoatNormalScale.value.negate())),u.dispersion>0&&(f.dispersion.value=u.dispersion),u.retroreflectivity>0&&(f.retroreflectivity.value=u.retroreflectivity),u.iridescence>0&&(f.iridescence.value=u.iridescence,f.iridescenceIOR.value=u.iridescenceIOR,f.iridescenceThicknessMinimum.value=u.iridescenceThicknessMinimum,f.iridescenceThicknessMaximum.value=u.iridescenceThicknessMaximum,u.iridescenceMap&&(f.iridescenceMap.value=u.iridescenceMap,e(u.iridescenceMap,f.iridescenceMapTransform)),u.iridescenceThicknessMap&&(f.iridescenceThicknessMap.value=u.iridescenceThicknessMap,e(u.iridescenceThicknessMap,f.iridescenceThicknessMapTransform))),u.transmission>0&&(f.transmission.value=u.transmission,f.transmissionSamplerMap.value=S.texture,f.transmissionSamplerSize.value.set(S.width,S.height),u.transmissionMap&&(f.transmissionMap.value=u.transmissionMap,e(u.transmissionMap,f.transmissionMapTransform)),f.thickness.value=u.thickness,u.thicknessMap&&(f.thicknessMap.value=u.thicknessMap,e(u.thicknessMap,f.thicknessMapTransform)),f.attenuationDistance.value=u.attenuationDistance,f.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(f.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(f.anisotropyMap.value=u.anisotropyMap,e(u.anisotropyMap,f.anisotropyMapTransform))),f.specularIntensity.value=u.specularIntensity,f.specularColor.value.copy(u.specularColor),u.specularColorMap&&(f.specularColorMap.value=u.specularColorMap,e(u.specularColorMap,f.specularColorMapTransform)),u.specularIntensityMap&&(f.specularIntensityMap.value=u.specularIntensityMap,e(u.specularIntensityMap,f.specularIntensityMapTransform))}function v(f,u){u.matcap&&(f.matcap.value=u.matcap)}function E(f,u){const S=t.get(u).light;f.referencePosition.value.setFromMatrixPosition(S.matrixWorld),f.nearDistance.value=S.shadow.camera.near,f.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function M0(n,t,e,i){let s={},r={};function a(S,A){const y=A.program;i.uniformBlockBinding(S,y,s[S.id])}function o(S,A){let y=s[S.id];y===void 0&&(v(S),y=l(S),s[S.id]=y,S.addEventListener("dispose",f));const w=A.program;i.updateUBOMapping(S,w);const b=t.render.frame;r[S.id]!==b&&(c(S),r[S.id]=b)}function l(S){const A=n.createBuffer(),y=S.__size,w=S.usage;return n.bindBuffer(n.UNIFORM_BUFFER,A),n.bufferData(n.UNIFORM_BUFFER,y,w),n.bindBuffer(n.UNIFORM_BUFFER,null),A}function c(S){const A=s[S.id],y=S.uniforms,w=S.__cache;n.bindBuffer(n.UNIFORM_BUFFER,A);for(let b=0,_=y.length;b<_;b++){const M=y[b];if(Array.isArray(M))for(let D=0,C=M.length;D<C;D++)d(M[D],b,D,w);else d(M,b,0,w)}n.bindBuffer(n.UNIFORM_BUFFER,null)}function d(S,A,y,w){if(h(S,A,y,w)===!0){const b=S.__offset,_=S.value;if(Array.isArray(_)){let M=0;for(let D=0;D<_.length;D++){const C=_[D],N=E(C,!0);m(C,S.__data,M),M+=N.storage/Float32Array.BYTES_PER_ELEMENT}}else m(_,S.__data,0);n.bufferSubData(n.UNIFORM_BUFFER,b,S.__data)}}function m(S,A,y){typeof S=="number"||typeof S=="boolean"?A[y]=S:S.isMatrix3?(A[y]=S.elements[0],A[y+1]=S.elements[1],A[y+2]=S.elements[2],A[y+3]=0,A[y+4]=S.elements[3],A[y+5]=S.elements[4],A[y+6]=S.elements[5],A[y+7]=0,A[y+8]=S.elements[6],A[y+9]=S.elements[7],A[y+10]=S.elements[8],A[y+11]=0):ArrayBuffer.isView(S)?A.set(S.subarray(0,A.length-y),y):S.toArray(A,y)}function h(S,A,y,w){const b=S.value,_=A+"_"+y;if(Array.isArray(b)){w[_]===void 0&&(w[_]=[]);const M=w[_];let D=!1;for(let C=0;C<b.length;C++)p(b[C],M,C)===!0&&(D=!0);return D}return p(b,w,_)}function p(S,A,y){if(A[y]===void 0)return typeof S=="number"||typeof S=="boolean"?A[y]=S:ArrayBuffer.isView(S)?A[y]=S.slice():A[y]=S.clone(),!0;{const w=A[y];if(typeof S=="number"||typeof S=="boolean"){if(w!==S)return A[y]=S,!0}else{if(ArrayBuffer.isView(S))return!0;if(w.equals(S)===!1)return w.copy(S),!0}}return!1}function v(S){const A=S.uniforms;let y=0;const w=16;for(let _=0,M=A.length;_<M;_++){const D=Array.isArray(A[_])?A[_]:[A[_]];for(let C=0,N=D.length;C<N;C++){const F=D[C],W=Array.isArray(F.value)?F.value:[F.value],P=Array.isArray(A[_])||Array.isArray(F.value);let H=y;for(let V=0,et=W.length;V<et;V++){const X=W[V],j=E(X,P),tt=y%w,wt=tt%j.boundary,Ft=tt+wt;y+=wt,Ft!==0&&w-Ft<j.storage&&(y+=w-Ft),V===0&&(H=y),y+=j.storage}const q=F.type==="int"?Int32Array:F.type==="uint"?Uint32Array:Float32Array;F.__data=new q((y-H)/Float32Array.BYTES_PER_ELEMENT),F.__offset=H}}const b=y%w;return b>0&&(y+=w-b),S.__size=y,S.__cache={},this}function E(S,A){const y={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(y.boundary=4,y.storage=4):S.isVector2?(y.boundary=8,y.storage=8):S.isVector3||S.isColor?(y.boundary=16,y.storage=12):S.isVector4?(y.boundary=16,y.storage=16):S.isMatrix3?(y.boundary=16,y.storage=48):S.isMatrix4?(y.boundary=16,y.storage=64):S.isTexture?Bt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(S)?(y.boundary=16,y.storage=S.byteLength):Bt("WebGLRenderer: Unsupported uniform value type.",S),A===!0&&(y.boundary=16,y.storage=Math.ceil(y.storage/16)*16),y}function f(S){const A=S.target;A.removeEventListener("dispose",f),n.deleteBuffer(s[A.id]),delete s[A.id],delete r[A.id]}function u(){for(const S in s)n.deleteBuffer(s[S]);s={},r={}}return{bind:a,update:o,dispose:u}}const y0=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let mn=null;function E0(){return mn===null&&(mn=new uu(y0,16,16,fi,En),mn.name="DFG_LUT",mn.minFilter=Ve,mn.magFilter=Ve,mn.wrapS=Nn,mn.wrapT=Nn,mn.generateMipmaps=!1,mn.needsUpdate=!0),mn}class b0{constructor(t={}){const{canvas:e=Oh(),context:i=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:m=!1,reversedDepthBuffer:h=!1,outputBufferType:p=$e}=t;this.isWebGLRenderer=!0;let v;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");v=i.getContextAttributes().alpha}else v=a;const E=p,f=new Set([no,eo,to]),u=new Set([$e,yn,ds,Gi,Qa,ja]),S=new Uint32Array(4),A=new Int32Array(4),y={textures:[],min:[],max:[],resolution:[]};let w=null,b=null;const _=[],M=[];let D=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Un,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const C=this;let N=!1,F=null,W=null,P=null,H=null;this._outputColorSpace=Ne;let q=0,V=0,et=null,X=-1,j=null;const tt=new ge,wt=new ge;let Ft=null;const Z=new Zt(0);let mt=0,Et=e.width,It=e.height,xt=1,zt=null,ue=null;const G=new ge(0,0,Et,It),at=new ge(0,0,Et,It);let nt=!1;const dt=new Hi,gt=new lo;let Dt=!1,Ot=!1;const $t=new he,le=new U,se=new ge,re={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ae=!1;function Me(){return et===null?xt:1}let I=i;function tn(x,L){return e.getContext(x,L)}let de,fe,_t,ye,Ut,kt,T,g,B,it,Q,ot,ft,K,$,ct,R,J,Y,ht,rt,lt,Pt;try{const x={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:d,failIfMajorPerformanceCaveat:m};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Za}`),e.addEventListener("webglcontextlost",Nt,!1),e.addEventListener("webglcontextrestored",Vt,!1),e.addEventListener("webglcontextcreationerror",vt,!1),I===null){const L="webgl2";if(I=tn(L,x),I===null)throw tn(L)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Wt()}catch(x){throw e.removeEventListener("webglcontextlost",Nt,!1),e.removeEventListener("webglcontextrestored",Vt,!1),e.removeEventListener("webglcontextcreationerror",vt,!1),jt("WebGLRenderer: "+x.message),x}function Wt(){de=new wp(I),de.init(),rt=new p0(I,de),fe=new _p(I,de,t,rt),_t=new d0(I,de),fe.reversedDepthBuffer&&h&&_t.buffers.depth.setReversed(!0),W=I.createFramebuffer(),P=I.createFramebuffer(),H=I.createFramebuffer(),ye=new Pp(I),Ut=new Qm,kt=new f0(I,de,_t,Ut,fe,rt,ye),T=new Ap(C),g=new Lu(I),lt=new pp(I,g),B=new Rp(I,g,ye,lt),it=new Dp(I,B,g,lt,ye),J=new Lp(I,fe,kt),$=new gp(Ut),Q=new Jm(C,T,de,fe,lt,$),ot=new S0(C,Ut),ft=new t0,K=new a0(de),R=new fp(C,T,_t,it,v,l),ct=new u0(C,it,fe),Pt=new M0(I,ye,fe,_t),Y=new mp(I,de,ye),ht=new Cp(I,de,ye),ye.programs=Q.programs,C.capabilities=fe,C.extensions=de,C.properties=Ut,C.renderLists=ft,C.shadowMap=ct,C.state=_t,C.info=ye}E!==$e&&(D=new Np(E,e.width,e.height,o,s,r));const st=new x0(C,I);this.xr=st,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){const x=de.get("WEBGL_lose_context");x&&x.loseContext()},this.forceContextRestore=function(){const x=de.get("WEBGL_lose_context");x&&x.restoreContext()},this.getPixelRatio=function(){return xt},this.setPixelRatio=function(x){x!==void 0&&(xt=x,this.setSize(Et,It,!1))},this.getSize=function(x){return x.set(Et,It)},this.setSize=function(x,L,k=!0){if(st.isPresenting){Bt("WebGLRenderer: Can't change size while VR device is presenting.");return}Et=x,It=L,e.width=Math.floor(x*xt),e.height=Math.floor(L*xt),k===!0&&(e.style.width=x+"px",e.style.height=L+"px"),D!==null&&D.setSize(e.width,e.height),this.setViewport(0,0,x,L)},this.getDrawingBufferSize=function(x){return x.set(Et*xt,It*xt).floor()},this.setDrawingBufferSize=function(x,L,k){Et=x,It=L,xt=k,e.width=Math.floor(x*k),e.height=Math.floor(L*k),this.setViewport(0,0,x,L)},this.setEffects=function(x){if(E===$e){jt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(x){for(let L=0;L<x.length;L++)if(x[L].isOutputPass===!0){Bt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}D.setEffects(x||[])},this.getCurrentViewport=function(x){return x.copy(tt)},this.getViewport=function(x){return x.copy(G)},this.setViewport=function(x,L,k,O){x.isVector4?G.set(x.x,x.y,x.z,x.w):G.set(x,L,k,O),_t.viewport(tt.copy(G).multiplyScalar(Me()).round())},this.getScissor=function(x){return x.copy(at)},this.setScissor=function(x,L,k,O){x.isVector4?at.set(x.x,x.y,x.z,x.w):at.set(x,L,k,O),_t.scissor(wt.copy(at).multiplyScalar(Me()).round())},this.getScissorTest=function(){return nt},this.setScissorTest=function(x){_t.setScissorTest(nt=x)},this.setOpaqueSort=function(x){zt=x},this.setTransparentSort=function(x){ue=x},this.getClearColor=function(x){return x.copy(R.getClearColor())},this.setClearColor=function(){R.setClearColor(...arguments)},this.getClearAlpha=function(){return R.getClearAlpha()},this.setClearAlpha=function(){R.setClearAlpha(...arguments)},this.clear=function(x=!0,L=!0,k=!0){let O=0;if(x){let z=!1;if(et!==null){const pt=et.texture.format;z=f.has(pt)}if(z){const pt=et.texture.type,bt=u.has(pt),ut=R.getClearColor(),Mt=R.getClearAlpha(),Rt=ut.r,Ht=ut.g,qt=ut.b;bt?(S[0]=Rt,S[1]=Ht,S[2]=qt,S[3]=Mt,I.clearBufferuiv(I.COLOR,0,S)):(A[0]=Rt,A[1]=Ht,A[2]=qt,A[3]=Mt,I.clearBufferiv(I.COLOR,0,A))}else O|=I.COLOR_BUFFER_BIT}L&&(O|=I.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),k&&(O|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),O!==0&&I.clear(O)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(x){x.setRenderer(this),F=x},this.dispose=function(){e.removeEventListener("webglcontextlost",Nt,!1),e.removeEventListener("webglcontextrestored",Vt,!1),e.removeEventListener("webglcontextcreationerror",vt,!1),R.dispose(),ft.dispose(),K.dispose(),kt.dispose(),Ut.dispose(),T.dispose(),it.dispose(),B.dispose(),lt.dispose(),Pt.dispose(),Q.dispose(),st.dispose(),st.removeEventListener("sessionstart",Ao),st.removeEventListener("sessionend",wo),ii.stop()};function Nt(x){x.preventDefault(),lr("WebGLRenderer: Context Lost."),N=!0}function Vt(){lr("WebGLRenderer: Context Restored."),N=!1;const x=ye.autoReset,L=ct.enabled,k=ct.autoUpdate,O=ct.needsUpdate,z=ct.type;Wt(),ye.autoReset=x,ct.enabled=L,ct.autoUpdate=k,ct.needsUpdate=O,ct.type=z}function vt(x){jt("WebGLRenderer: A WebGL context could not be created. Reason: ",x.statusMessage)}function ne(x){const L=x.target;L.removeEventListener("dispose",ne),we(L)}function we(x){Bn(x),Ut.remove(x)}function Bn(x){const L=Ut.get(x).programs;L!==void 0&&(L.forEach(function(k){Q.releaseProgram(k)}),x.isShaderMaterial&&Q.releaseShaderCache(x))}this.renderBufferDirect=function(x,L,k,O,z,pt){L===null&&(L=re);const bt=z.isMesh&&z.matrixWorld.determinantAffine()<0,ut=eh(x,L,k,O,z);_t.setMaterial(O,bt);let Mt=k.index,Rt=1;if(O.wireframe===!0){if(Mt=B.getWireframeAttribute(k),Mt===void 0)return;Rt=2}const Ht=k.drawRange,qt=k.attributes.position;let Tt=Ht.start*Rt,Kt=(Ht.start+Ht.count)*Rt;pt!==null&&(Tt=Math.max(Tt,pt.start*Rt),Kt=Math.min(Kt,(pt.start+pt.count)*Rt)),Mt!==null?(Tt=Math.max(Tt,0),Kt=Math.min(Kt,Mt.count)):qt!=null&&(Tt=Math.max(Tt,0),Kt=Math.min(Kt,qt.count));const ve=Kt-Tt;if(ve<0||ve===1/0)return;lt.setup(z,O,ut,k,Mt);let ce,ae=Y;if(Mt!==null&&(ce=g.get(Mt),ae=ht,ae.setIndex(ce)),z.isMesh)O.wireframe===!0?(_t.setLineWidth(O.wireframeLinewidth*Me()),ae.setMode(I.LINES)):ae.setMode(I.TRIANGLES);else if(z.isLine){let Ue=O.linewidth;Ue===void 0&&(Ue=1),_t.setLineWidth(Ue*Me()),z.isLineSegments?ae.setMode(I.LINES):z.isLineLoop?ae.setMode(I.LINE_LOOP):ae.setMode(I.LINE_STRIP)}else z.isPoints?ae.setMode(I.POINTS):z.isSprite&&ae.setMode(I.TRIANGLES);if(z.isBatchedMesh)if(de.get("WEBGL_multi_draw"))ae.renderMultiDraw(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount);else{const Ue=z._multiDrawStarts,At=z._multiDrawCounts,ke=z._multiDrawCount,te=Mt?g.get(Mt).bytesPerElement:1,si=Ut.get(O).currentProgram.getUniforms();for(let Fe=0;Fe<ke;Fe++)si.setValue(I,"_gl_DrawID",Fe),ae.render(Ue[Fe]/te,At[Fe])}else if(z.isInstancedMesh)ae.renderInstances(Tt,ve,z.count);else if(k.isInstancedBufferGeometry){const Ue=k._maxInstanceCount!==void 0?k._maxInstanceCount:1/0,At=Math.min(k.instanceCount,Ue);ae.renderInstances(Tt,ve,At)}else ae.render(Tt,ve)};function To(x,L,k,O){F!==null&&x.isNodeMaterial&&F.setObject(O,x),Dt===!0&&$.setState(x,k,!1),x.transparent===!0&&x.side===xn&&x.forceSinglePass===!1?(x.side=qe,x.needsUpdate=!0,Zi(x,L,O),x.side=di,x.needsUpdate=!0,Zi(x,L,O),x.side=xn):Zi(x,L,O)}this.compile=function(x,L,k=null){k===null&&(k=x),F!==null&&F.renderStart(x,L,k),b=K.get(k),b.init(L),M.push(b),k.traverseVisible(function(z){z.isLight&&z.layers.test(L.layers)&&(b.pushLight(z),z.castShadow&&b.pushShadow(z))}),x!==k&&x.traverseVisible(function(z){z.isLight&&z.layers.test(L.layers)&&(b.pushLight(z),z.castShadow&&b.pushShadow(z))}),b.setupLights(),F!==null&&F.updateLights(b.state.lightsArray),Ot=this.localClippingEnabled,Dt=$.init(this.clippingPlanes,Ot),Dt===!0&&$.setGlobalState(this.clippingPlanes,L),F!==null&&ct.render(b.state.shadowsArray,k,L);const O=new Set;return x.traverse(function(z){if(!(z.isMesh||z.isPoints||z.isLine||z.isSprite))return;const pt=z.material;if(pt)if(Array.isArray(pt))for(let bt=0;bt<pt.length;bt++){const ut=pt[bt];To(ut,k,L,z),O.add(ut)}else To(pt,k,L,z),O.add(pt)}),b=M.pop(),F!==null&&F.renderEnd(),O},this.compileAsync=function(x,L,k=null){const O=this.compile(x,L,k);return new Promise(z=>{function pt(){if(O.forEach(function(bt){const Mt=Ut.get(bt).currentProgram;(Mt===void 0||Mt.isReady())&&O.delete(bt)}),O.size===0){z(x);return}setTimeout(pt,10)}de.get("KHR_parallel_shader_compile")!==null?pt():setTimeout(pt,10)})};let Mr=null;function jc(x){Mr&&Mr(x)}function Ao(){ii.stop()}function wo(){ii.start()}const ii=new Dc;ii.setAnimationLoop(jc),typeof self<"u"&&ii.setContext(self),this.setAnimationLoop=function(x){Mr=x,st.setAnimationLoop(x),x===null?ii.stop():ii.start()},st.addEventListener("sessionstart",Ao),st.addEventListener("sessionend",wo),this.render=function(x,L){if(L!==void 0&&L.isCamera!==!0){jt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(N===!0)return;F!==null&&F.renderStart(x,L);const k=st.enabled===!0&&st.isPresenting===!0,O=D!==null&&(et===null||k)&&D.begin(C,et);if(x.matrixWorldAutoUpdate===!0&&x.updateMatrixWorld(),L.parent===null&&L.matrixWorldAutoUpdate===!0&&L.updateMatrixWorld(),st.enabled===!0&&st.isPresenting===!0&&(D===null||D.isCompositing()===!1)&&(st.cameraAutoUpdate===!0&&st.updateCamera(L),L=st.getCamera()),x.isScene===!0&&x.onBeforeRender(C,x,L,et),b=K.get(x,M.length),b.init(L),b.state.textureUnits=kt.getTextureUnits(),M.push(b),$t.multiplyMatrices(L.projectionMatrix,L.matrixWorldInverse),L.isArrayCamera?gt.setFromArrayCamera(L):dt.setFromProjectionMatrix($t,dn,L.reversedDepth),Ot=this.localClippingEnabled,Dt=$.init(this.clippingPlanes,Ot),w=ft.get(x,_.length),w.init(),_.push(w),this.info.render.frame++,st.enabled===!0&&st.isPresenting===!0){const bt=C.xr.getDepthSensingMesh();bt!==null&&yr(bt,L,-1/0,C.sortObjects)}yr(x,L,0,C.sortObjects),w.finish(),F!==null&&F.updateLights(b.state.lightsArray),C.sortObjects===!0&&w.sort(zt,ue),Ae=st.enabled===!1||st.isPresenting===!1||st.hasDepthSensing()===!1,Ae&&R.addToRenderList(w,x),this.info.autoReset===!0&&this.info.reset(),Dt===!0&&$.beginShadows();const z=b.state.shadowsArray;if(ct.render(z,x,L),Dt===!0&&$.endShadows(),(O&&D.hasRenderPass())===!1){const bt=w.opaque,ut=w.transmissive;if(b.setupLights(),L.isArrayCamera){const Mt=L.cameras;if(ut.length>0)for(let Rt=0,Ht=Mt.length;Rt<Ht;Rt++){const qt=Mt[Rt];Co(bt,ut,x,qt)}Ae&&R.render(x);for(let Rt=0,Ht=Mt.length;Rt<Ht;Rt++){const qt=Mt[Rt];Ro(w,x,qt,qt.viewport)}}else ut.length>0&&Co(bt,ut,x,L),Ae&&R.render(x),Ro(w,x,L)}et!==null&&V===0&&(kt.updateMultisampleRenderTarget(et),kt.updateRenderTargetMipmap(et)),O&&D.end(C),x.isScene===!0&&x.onAfterRender(C,x,L),lt.resetDefaultState(),X=-1,j=null,M.pop(),M.length>0?(b=M[M.length-1],kt.setTextureUnits(b.state.textureUnits),Dt===!0&&$.setGlobalState(C.clippingPlanes,b.state.camera)):b=null,_.pop(),_.length>0?w=_[_.length-1]:w=null,F!==null&&F.renderEnd()};function yr(x,L,k,O){if(x.visible===!1)return;if(x.layers.test(L.layers)){if(x.isGroup)k=x.renderOrder;else if(x.isLOD)x.autoUpdate===!0&&x.update(L);else if(x.isLight)b.pushLight(x),x.castShadow&&b.pushShadow(x);else if(x.isSprite){const bt=L.isArrayCamera?gt:dt;if(!x.frustumCulled||x.intersectsFrustum(bt)){O&&se.setFromMatrixPosition(x.matrixWorld).applyMatrix4($t);const ut=it.update(x),Mt=x.material;Mt.visible&&w.push(x,ut,Mt,k,se.z,null,L)}}else if(x.isMesh||x.isLine||x.isPoints){const bt=L.isArrayCamera?gt:dt;if(!x.frustumCulled||x.intersectsFrustum(bt)){const ut=it.update(x),Mt=x.material;if(O&&(x.boundingSphere!==void 0?(x.boundingSphere===null&&x.computeBoundingSphere(),se.copy(x.boundingSphere.center)):(ut.boundingSphere===null&&ut.computeBoundingSphere(),se.copy(ut.boundingSphere.center)),se.applyMatrix4(x.matrixWorld).applyMatrix4($t)),Array.isArray(Mt)){const Rt=ut.groups;for(let Ht=0,qt=Rt.length;Ht<qt;Ht++){const Tt=Rt[Ht],Kt=Mt[Tt.materialIndex];Kt&&Kt.visible&&w.push(x,ut,Kt,k,se.z,Tt,L)}}else Mt.visible&&w.push(x,ut,Mt,k,se.z,null,L)}}}const pt=x.children;for(let bt=0,ut=pt.length;bt<ut;bt++)yr(pt[bt],L,k,O)}function Ro(x,L,k,O){const{opaque:z,transmissive:pt,transparent:bt}=x;b.setupLightsView(k),Dt===!0&&$.setGlobalState(C.clippingPlanes,k),O&&_t.viewport(tt.copy(O)),z.length>0&&xs(z,L,k),pt.length>0&&xs(pt,L,k),bt.length>0&&xs(bt,L,k),_t.buffers.depth.setTest(!0),_t.buffers.depth.setMask(!0),_t.buffers.color.setMask(!0),_t.setPolygonOffset(!1)}function Co(x,L,k,O){if((k.isScene===!0?k.overrideMaterial:null)!==null)return;if(b.state.transmissionRenderTarget[O.id]===void 0){const Tt=de.has("EXT_color_buffer_half_float")||de.has("EXT_color_buffer_float");b.state.transmissionRenderTarget[O.id]=new Mn(1,1,{generateMipmaps:!0,type:Tt?En:$e,minFilter:Kn,samples:Math.max(4,fe.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Jt.workingColorSpace})}const pt=b.state.transmissionRenderTarget[O.id],bt=O.viewport||tt;pt.setSize(bt.z*C.transmissionResolutionScale,bt.w*C.transmissionResolutionScale);const ut=C.getRenderTarget(),Mt=C.getActiveCubeFace(),Rt=C.getActiveMipmapLevel();C.setRenderTarget(pt),C.getClearColor(Z),mt=C.getClearAlpha(),mt<1&&C.setClearColor(16777215,.5),C.clear(),Ae&&R.render(k);const Ht=C.toneMapping;C.toneMapping=Un;const qt=O.viewport;if(O.viewport!==void 0&&(O.viewport=void 0),b.setupLightsView(O),Dt===!0&&$.setGlobalState(C.clippingPlanes,O),xs(x,k,O),kt.updateMultisampleRenderTarget(pt),kt.updateRenderTargetMipmap(pt),de.has("WEBGL_multisampled_render_to_texture")===!1){let Tt=!1;for(let Kt=0,ve=L.length;Kt<ve;Kt++){const ce=L[Kt],{object:ae,geometry:Ue,material:At,group:ke}=ce;if(At.side===xn&&ae.layers.test(O.layers)){const te=At.side;At.side=qe,At.needsUpdate=!0,Po(ae,k,O,Ue,At,ke),At.side=te,At.needsUpdate=!0,Tt=!0}}Tt===!0&&(kt.updateMultisampleRenderTarget(pt),kt.updateRenderTargetMipmap(pt))}C.setRenderTarget(ut,Mt,Rt),C.setClearColor(Z,mt),qt!==void 0&&(O.viewport=qt),C.toneMapping=Ht}function xs(x,L,k){const O=L.isScene===!0?L.overrideMaterial:null;for(let z=0,pt=x.length;z<pt;z++){const bt=x[z],{object:ut,geometry:Mt,group:Rt}=bt;let Ht=bt.material;Ht.allowOverride===!0&&O!==null&&(Ht=O),ut.layers.test(k.layers)&&Po(ut,L,k,Mt,Ht,Rt)}}function Po(x,L,k,O,z,pt){F!==null&&z.isNodeMaterial&&F.setObject(x,z),x.onBeforeRender(C,L,k,O,z,pt),x.modelViewMatrix.multiplyMatrices(k.matrixWorldInverse,x.matrixWorld),x.normalMatrix.getNormalMatrix(x.modelViewMatrix),z.onBeforeRender(C,L,k,O,x,pt),z.transparent===!0&&z.side===xn&&z.forceSinglePass===!1?(z.side=qe,z.needsUpdate=!0,C.renderBufferDirect(k,L,O,z,x,pt),z.side=di,z.needsUpdate=!0,C.renderBufferDirect(k,L,O,z,x,pt),z.side=xn):C.renderBufferDirect(k,L,O,z,x,pt),x.onAfterRender(C,L,k,O,z,pt)}function Lo(x){let L=0;for(const k of x)k.texture!==null&&L++;return L}function Zi(x,L,k){L.isScene!==!0&&(L=re);const O=Ut.get(x),z=b.state.lights,pt=b.state.shadowsArray,bt=z.state.version,ut=Q.getParameters(x,z.state,pt,L,k,b.state.lightProbeGridArray),Mt=Q.getProgramCacheKey(ut);let Rt=O.programs;O.environment=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?L.environment:null,O.fog=L.fog;const Ht=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap;O.envMap=T.get(x.envMap||O.environment,Ht),O.envMapRotation=O.environment!==null&&x.envMap===null?L.environmentRotation:x.envMapRotation,Rt===void 0&&(x.addEventListener("dispose",ne),Rt=new Map,O.programs=Rt,O.programVariants=new Map);let qt=Rt.get(Mt);if(qt!==void 0){if(O.currentProgram===qt&&O.lightsStateVersion===bt)return Io(x,ut),qt}else ut.uniforms=Q.getUniforms(x),F!==null&&x.isNodeMaterial&&F.build(x,k,ut),x.onBeforeCompile(ut,C),qt=Q.acquireProgram(ut,Mt),Rt.set(Mt,qt),O.uniforms=ut.uniforms;const Tt=O.uniforms;return(!x.isShaderMaterial&&!x.isRawShaderMaterial||x.clipping===!0)&&(Tt.clippingPlanes=$.uniform),Io(x,ut),O.needsLights=ih(x),O.lightsStateVersion=bt,O.needsLights&&(Tt.ambientLightColor.value=z.state.ambient,Tt.lightProbe.value=z.state.probe,Tt.sunLights.value=z.state.sun,Tt.sunLightShadows.value=z.state.sunShadow,Tt.directionalLights.value=z.state.directional,Tt.directionalLightShadows.value=z.state.directionalShadow,Tt.spotLights.value=z.state.spot,Tt.spotLightShadows.value=z.state.spotShadow,Tt.rectAreaLights.value=z.state.rectArea,Tt.ltc_1.value=z.state.rectAreaLTC1,Tt.ltc_2.value=z.state.rectAreaLTC2,Tt.pointLights.value=z.state.point,Tt.pointLightShadows.value=z.state.pointShadow,Tt.hemisphereLights.value=z.state.hemi,Tt.sunShadowMatrix.value=z.state.sunShadowMatrix,Tt.sunShadowCascade.value=z.state.sunShadowCascade,Tt.directionalShadowMatrix.value=z.state.directionalShadowMatrix,Tt.spotLightMatrix.value=z.state.spotLightMatrix,Tt.spotLightMap.value=z.state.spotLightMap,Tt.pointShadowMatrix.value=z.state.pointShadowMatrix),O.numLightProbeGrids=Lo(b.state.lightProbeGridArray),O.currentProgram=qt,O.uniformsList=null,qt}function th(x,L,k,O,z){const pt=Ut.get(x),bt=pt.currentProgram.id+","+O+","+z;let ut=pt.programVariants.get(bt);return ut===void 0?(ut=Zi(x,L,k),pt.programVariants.set(bt,ut)):(pt.currentProgram=ut,pt.uniformsList=null,pt.outputColorSpace=O,pt.toneMapping=z),ut}function Do(x){if(x.uniformsList===null){const L=x.currentProgram.getUniforms();x.uniformsList=er.seqWithValue(L.seq,x.uniforms)}return x.uniformsList}function Io(x,L){const k=Ut.get(x);k.outputColorSpace=L.outputColorSpace,k.batching=L.batching,k.batchingColor=L.batchingColor,k.instancing=L.instancing,k.instancingColor=L.instancingColor,k.instancingMorph=L.instancingMorph,k.skinning=L.skinning,k.morphTargets=L.morphTargets,k.morphNormals=L.morphNormals,k.morphColors=L.morphColors,k.morphTargetsCount=L.morphTargetsCount,k.numClippingPlanes=L.numClippingPlanes,k.numIntersection=L.numClipIntersection,k.vertexAlphas=L.vertexAlphas,k.vertexTangents=L.vertexTangents,k.toneMapping=L.toneMapping}function eh(x,L,k,O,z){L.isScene!==!0&&(L=re),kt.resetTextureUnits();const pt=L.fog,bt=O.isMeshStandardMaterial||O.isMeshLambertMaterial||O.isMeshPhongMaterial?L.environment:null,ut=et===null?C.outputColorSpace:et.isXRRenderTarget===!0?et.texture.colorSpace:Jt.workingColorSpace,Mt=O.isMeshStandardMaterial||O.isMeshLambertMaterial&&!O.envMap||O.isMeshPhongMaterial&&!O.envMap,Rt=T.get(O.envMap||bt,Mt),Ht=O.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,qt=!!k.attributes.tangent&&(!!O.normalMap||O.anisotropy>0),Tt=!!k.morphAttributes.position,Kt=!!k.morphAttributes.normal,ve=!!k.morphAttributes.color;let ce=Un;O.toneMapped&&(et===null||et.isXRRenderTarget===!0)&&(ce=C.toneMapping);const ae=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,Ue=ae!==void 0?ae.length:0,At=Ut.get(O),ke=b.state.lights;if(Dt===!0&&(Ot===!0||x!==j)){const me=x===j&&O.id===X;$.setState(O,x,me)}let te=!1,si=!1;O.version===At.__version?At.needsLights&&At.lightsStateVersion!==ke.state.version||z.isBatchedMesh&&At.batching===!1||!z.isBatchedMesh&&At.batching===!0||z.isBatchedMesh&&At.batchingColor===!0&&z._colorsTexture===null||z.isBatchedMesh&&At.batchingColor===!1&&z._colorsTexture!==null||z.isInstancedMesh&&At.instancing===!1||!z.isInstancedMesh&&At.instancing===!0||z.isSkinnedMesh&&At.skinning===!1||!z.isSkinnedMesh&&At.skinning===!0||z.isInstancedMesh&&At.instancingColor===!0&&z.instanceColor===null||z.isInstancedMesh&&At.instancingColor===!1&&z.instanceColor!==null||z.isInstancedMesh&&At.instancingMorph===!0&&z.morphTexture===null||z.isInstancedMesh&&At.instancingMorph===!1&&z.morphTexture!==null||At.envMap!==Rt||O.fog===!0&&At.fog!==pt||At.numClippingPlanes!==void 0&&(At.numClippingPlanes!==$.numPlanes||At.numIntersection!==$.numIntersection)||At.vertexAlphas!==Ht||At.vertexTangents!==qt||At.morphTargets!==Tt||At.morphNormals!==Kt||At.morphColors!==ve||At.morphTargetsCount!==Ue||At.numLightProbeGrids!==Lo(b.state.lightProbeGridArray)?te=!0:(At.outputColorSpace!==ut||At.toneMapping!==ce)&&(si=!0):(te=!0,At.__version=O.version);let Fe=At.currentProgram;(te===!0||si===!0)&&(Fe=si===!0?th(O,L,z,ut,ce):Zi(O,L,z),F&&O.isNodeMaterial&&F.onUpdateProgram(O,Fe,At));let vs=!1,zn=!1,ri=!1;const Qt=Fe.getUniforms(),De=At.uniforms;if(_t.useProgram(Fe.program)&&(vs=!0,zn=!0,ri=!0),O.id!==X&&(X=O.id,zn=!0),vs||j!==x){_t.buffers.depth.getReversed()&&x.reversedDepth!==!0&&(x._reversedDepth=!0,x.updateProjectionMatrix()),Qt.setValue(I,"projectionMatrix",x.projectionMatrix),Qt.setValue(I,"viewMatrix",x.matrixWorldInverse);const Re=Qt.map.cameraPosition;Re!==void 0&&Re.setValue(I,le.setFromMatrixPosition(x.matrixWorld)),fe.logarithmicDepthBuffer&&Qt.setValue(I,"logDepthBufFC",2/(Math.log(x.far+1)/Math.LN2)),(O.isMeshPhongMaterial||O.isMeshToonMaterial||O.isMeshLambertMaterial||O.isMeshBasicMaterial||O.isMeshStandardMaterial||O.isShaderMaterial)&&Qt.setValue(I,"isOrthographic",x.isOrthographicCamera===!0),j!==x&&(j=x,zn=!0,ri=!0)}if(At.needsLights&&(ke.state.sunShadowMap.length>0&&Qt.setValue(I,"sunShadowMap",ke.state.sunShadowMap,kt),ke.state.directionalShadowMap.length>0&&Qt.setValue(I,"directionalShadowMap",ke.state.directionalShadowMap,kt),ke.state.spotShadowMap.length>0&&Qt.setValue(I,"spotShadowMap",ke.state.spotShadowMap,kt),ke.state.pointShadowMap.length>0&&Qt.setValue(I,"pointShadowMap",ke.state.pointShadowMap,kt)),z.isSkinnedMesh){Qt.setOptional(I,z,"bindMatrix"),Qt.setOptional(I,z,"bindMatrixInverse");const me=z.skeleton;me&&(me.boneTexture===null&&me.computeBoneTexture(),Qt.setValue(I,"boneTexture",me.boneTexture,kt))}z.isBatchedMesh&&(Qt.setOptional(I,z,"batchingTexture"),Qt.setValue(I,"batchingTexture",z._matricesTexture,kt),Qt.setOptional(I,z,"batchingIdTexture"),Qt.setValue(I,"batchingIdTexture",z._indirectTexture,kt),Qt.setOptional(I,z,"batchingColorTexture"),z._colorsTexture!==null&&Qt.setValue(I,"batchingColorTexture",z._colorsTexture,kt));const on=k.morphAttributes;if((on.position!==void 0||on.normal!==void 0||on.color!==void 0)&&J.update(z,k,Fe),(zn||At.receiveShadow!==z.receiveShadow)&&(At.receiveShadow=z.receiveShadow,Qt.setValue(I,"receiveShadow",z.receiveShadow)),(O.isMeshStandardMaterial||O.isMeshLambertMaterial||O.isMeshPhongMaterial)&&O.envMap===null&&L.environment!==null&&(De.envMapIntensity.value=L.environmentIntensity),De.dfgLUT!==void 0&&(De.dfgLUT.value=E0()),zn){if(Qt.setValue(I,"toneMappingExposure",C.toneMappingExposure),At.needsLights&&nh(De,ri),pt&&O.fog===!0&&ot.refreshFogUniforms(De,pt),ot.refreshMaterialUniforms(De,O,xt,It,b.state.transmissionRenderTarget[x.id]),At.needsLights&&At.numLightProbeGrids>0){const me=y;let Re=0;for(const bn of b.state.lightProbeGridArray)bn.texture!==null&&(me.textures[Re]=bn.texture,me.min[Re]=bn.boundingBox.min,me.max[Re]=bn.boundingBox.max,me.resolution[Re]=bn.resolution,Re++);for(const bn in me)me[bn].length=Re;De.probesSH.value=me.textures,De.probesMin.value=me.min,De.probesMax.value=me.max,De.probesResolution.value=me.resolution}er.upload(I,Do(At),De,kt)}if(O.isShaderMaterial&&O.uniformsNeedUpdate===!0&&(er.upload(I,Do(At),De,kt),O.uniformsNeedUpdate=!1),O.isSpriteMaterial&&Qt.setValue(I,"center",z.center),Qt.setValue(I,"modelViewMatrix",z.modelViewMatrix),Qt.setValue(I,"normalMatrix",z.normalMatrix),Qt.setValue(I,"modelMatrix",z.matrixWorld),O.uniformsGroups!==void 0){const me=O.uniformsGroups;for(let Re=0,bn=me.length;Re<bn;Re++){const Uo=me[Re];Pt.update(Uo,Fe),Pt.bind(Uo,Fe)}}return Fe}function nh(x,L){x.ambientLightColor.needsUpdate=L,x.lightProbe.needsUpdate=L,x.sunLights.needsUpdate=L,x.sunLightShadows.needsUpdate=L,x.directionalLights.needsUpdate=L,x.directionalLightShadows.needsUpdate=L,x.pointLights.needsUpdate=L,x.pointLightShadows.needsUpdate=L,x.spotLights.needsUpdate=L,x.spotLightShadows.needsUpdate=L,x.rectAreaLights.needsUpdate=L,x.hemisphereLights.needsUpdate=L}function ih(x){return x.isMeshLambertMaterial||x.isMeshToonMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isShadowMaterial||x.isShaderMaterial&&x.lights===!0}this.getActiveCubeFace=function(){return q},this.getActiveMipmapLevel=function(){return V},this.getRenderTarget=function(){return et},this.setRenderTargetTextures=function(x,L,k){const O=Ut.get(x);O.__autoAllocateDepthBuffer=x.resolveDepthBuffer===!1,O.__autoAllocateDepthBuffer===!1&&(O.__useRenderToTexture=!1),Ut.get(x.texture).__webglTexture=L,Ut.get(x.depthTexture).__webglTexture=O.__autoAllocateDepthBuffer?void 0:k,O.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(x,L){const k=Ut.get(x);k.__webglFramebuffer=L,k.__useDefaultFramebuffer=L===void 0},this.setRenderTarget=function(x,L=0,k=0){et=x,q=L,V=k;let O=null,z=!1,pt=!1;if(x){const ut=Ut.get(x);if(ut.__useDefaultFramebuffer!==void 0){_t.bindFramebuffer(I.FRAMEBUFFER,ut.__webglFramebuffer),tt.copy(x.viewport),wt.copy(x.scissor),Ft=x.scissorTest,_t.viewport(tt),_t.scissor(wt),_t.setScissorTest(Ft),X=-1;return}else if(ut.__webglFramebuffer===void 0)kt.setupRenderTarget(x);else if(ut.__hasExternalTextures)kt.rebindTextures(x,Ut.get(x.texture).__webglTexture,Ut.get(x.depthTexture).__webglTexture);else if(x.depthBuffer){const Ht=x.depthTexture;if(ut.__boundDepthTexture!==Ht){if(Ht!==null&&Ut.has(Ht)&&(x.width!==Ht.image.width||x.height!==Ht.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");kt.setupDepthRenderbuffer(x)}}const Mt=x.texture;(Mt.isData3DTexture||Mt.isDataArrayTexture||Mt.isCompressedArrayTexture)&&(pt=!0);const Rt=Ut.get(x).__webglFramebuffer;x.isWebGLCubeRenderTarget?(Array.isArray(Rt[L])?O=Rt[L][k]:O=Rt[L],z=!0):x.samples>0&&kt.useMultisampledRTT(x)===!1?O=Ut.get(x).__webglMultisampledFramebuffer:Array.isArray(Rt)?O=Rt[k]:O=Rt,tt.copy(x.viewport),wt.copy(x.scissor),Ft=x.scissorTest}else tt.copy(G).multiplyScalar(xt).floor(),wt.copy(at).multiplyScalar(xt).floor(),Ft=nt;if(k!==0&&(O=W),_t.bindFramebuffer(I.FRAMEBUFFER,O)&&_t.drawBuffers(x,O),_t.viewport(tt),_t.scissor(wt),_t.setScissorTest(Ft),z){const ut=Ut.get(x.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+L,ut.__webglTexture,k)}else if(pt){const ut=L;for(let Mt=0;Mt<x.textures.length;Mt++){const Rt=Ut.get(x.textures[Mt]);I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0+Mt,Rt.__webglTexture,k,ut)}}else if(x!==null&&k!==0){const ut=Ut.get(x.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,ut.__webglTexture,k)}X=-1};function No(x){const L=Ut.get(x);return(L.__readFormat!==x.format||L.__readType!==x.type)&&(L.__readFormat=x.format,L.__readType=x.type,L.__formatReadable=fe.textureFormatReadable(x.format),L.__typeReadable=fe.textureTypeReadable(x.type)),L}this.readRenderTargetPixels=function(x,L,k,O,z,pt,bt,ut=0){if(!(x&&x.isWebGLRenderTarget)){jt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Mt=Ut.get(x).__webglFramebuffer;if(x.isWebGLCubeRenderTarget&&bt!==void 0&&(Mt=Mt[bt],Array.isArray(Mt)&&(Mt=Mt[0])),Mt){_t.bindFramebuffer(I.FRAMEBUFFER,Mt);try{const Rt=x.textures[ut],Ht=Rt.format,qt=Rt.type;x.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+ut);const Tt=No(Rt);if(Tt.__formatReadable===!1){jt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Tt.__typeReadable===!1){jt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}L>=0&&L<=x.width-O&&k>=0&&k<=x.height-z&&I.readPixels(L,k,O,z,rt.convert(Ht),rt.convert(qt),pt)}finally{const Rt=et!==null?Ut.get(et).__webglFramebuffer:null;_t.bindFramebuffer(I.FRAMEBUFFER,Rt)}}},this.readRenderTargetPixelsAsync=async function(x,L,k,O,z,pt,bt,ut=0){if(!(x&&x.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Mt=Ut.get(x).__webglFramebuffer;if(x.isWebGLCubeRenderTarget&&bt!==void 0&&(Mt=Mt[bt],Array.isArray(Mt)&&(Mt=Mt[0])),Mt)if(L>=0&&L<=x.width-O&&k>=0&&k<=x.height-z){_t.bindFramebuffer(I.FRAMEBUFFER,Mt);const Rt=x.textures[ut],Ht=Rt.format,qt=Rt.type;x.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+ut);const Tt=No(Rt);if(Tt.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Tt.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Kt=I.createBuffer();I.bindBuffer(I.PIXEL_PACK_BUFFER,Kt),I.bufferData(I.PIXEL_PACK_BUFFER,pt.byteLength,I.STREAM_READ),I.readPixels(L,k,O,z,rt.convert(Ht),rt.convert(qt),0),I.bindBuffer(I.PIXEL_PACK_BUFFER,null);const ve=et!==null?Ut.get(et).__webglFramebuffer:null;_t.bindFramebuffer(I.FRAMEBUFFER,ve);const ce=I.fenceSync(I.SYNC_GPU_COMMANDS_COMPLETE,0);return I.flush(),await Bh(I,ce,4),I.bindBuffer(I.PIXEL_PACK_BUFFER,Kt),I.getBufferSubData(I.PIXEL_PACK_BUFFER,0,pt),I.bindBuffer(I.PIXEL_PACK_BUFFER,null),I.deleteBuffer(Kt),I.deleteSync(ce),pt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(x,L=null,k=0){const O=Math.pow(2,-k),z=Math.floor(x.image.width*O),pt=Math.floor(x.image.height*O),bt=L!==null?L.x:0,ut=L!==null?L.y:0;kt.setTexture2D(x,0),I.copyTexSubImage2D(I.TEXTURE_2D,k,0,0,bt,ut,z,pt),_t.unbindTexture()},this.copyTextureToTexture=function(x,L,k=null,O=null,z=0,pt=0){let bt,ut,Mt,Rt,Ht,qt,Tt,Kt,ve;const ce=x.isCompressedTexture?x.mipmaps[pt]:x.image;if(k!==null)bt=k.max.x-k.min.x,ut=k.max.y-k.min.y,Mt=k.isBox3?k.max.z-k.min.z:1,Rt=k.min.x,Ht=k.min.y,qt=k.isBox3?k.min.z:0;else{const Qt=Math.pow(2,-z);bt=Math.floor(ce.width*Qt),ut=Math.floor(ce.height*Qt),x.isDataArrayTexture?Mt=ce.depth:x.isData3DTexture?Mt=Math.floor(ce.depth*Qt):Mt=1,Rt=0,Ht=0,qt=0}O!==null?(Tt=O.x,Kt=O.y,ve=O.z):(Tt=0,Kt=0,ve=0);const ae=rt.convert(L.format),Ue=rt.convert(L.type);let At;L.isData3DTexture?(kt.setTexture3D(L,0),At=I.TEXTURE_3D):L.isDataArrayTexture||L.isCompressedArrayTexture?(kt.setTexture2DArray(L,0),At=I.TEXTURE_2D_ARRAY):(kt.setTexture2D(L,0),At=I.TEXTURE_2D),_t.activeTexture(I.TEXTURE0),_t.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,L.flipY),_t.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,L.premultiplyAlpha),_t.pixelStorei(I.UNPACK_ALIGNMENT,L.unpackAlignment);const ke=_t.getParameter(I.UNPACK_ROW_LENGTH),te=_t.getParameter(I.UNPACK_IMAGE_HEIGHT),si=_t.getParameter(I.UNPACK_SKIP_PIXELS),Fe=_t.getParameter(I.UNPACK_SKIP_ROWS),vs=_t.getParameter(I.UNPACK_SKIP_IMAGES);_t.pixelStorei(I.UNPACK_ROW_LENGTH,ce.width),_t.pixelStorei(I.UNPACK_IMAGE_HEIGHT,ce.height),_t.pixelStorei(I.UNPACK_SKIP_PIXELS,Rt),_t.pixelStorei(I.UNPACK_SKIP_ROWS,Ht),_t.pixelStorei(I.UNPACK_SKIP_IMAGES,qt);const zn=x.isDataArrayTexture||x.isData3DTexture,ri=L.isDataArrayTexture||L.isData3DTexture;if(x.isDepthTexture){const Qt=Ut.get(x),De=Ut.get(L),on=Ut.get(Qt.__renderTarget),me=Ut.get(De.__renderTarget);_t.bindFramebuffer(I.READ_FRAMEBUFFER,on.__webglFramebuffer),_t.bindFramebuffer(I.DRAW_FRAMEBUFFER,me.__webglFramebuffer);for(let Re=0;Re<Mt;Re++)zn&&(I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,Ut.get(x).__webglTexture,z,qt+Re),I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,Ut.get(L).__webglTexture,pt,ve+Re)),I.blitFramebuffer(Rt,Ht,Rt+bt,Ht+ut,Tt,Kt,Tt+bt,Kt+ut,I.DEPTH_BUFFER_BIT,I.NEAREST);_t.bindFramebuffer(I.READ_FRAMEBUFFER,null),_t.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else if(z!==0||x.isRenderTargetTexture||Ut.has(x)){const Qt=Ut.get(x),De=Ut.get(L);_t.bindFramebuffer(I.READ_FRAMEBUFFER,P),_t.bindFramebuffer(I.DRAW_FRAMEBUFFER,H);for(let on=0;on<Mt;on++)zn?I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,Qt.__webglTexture,z,qt+on):I.framebufferTexture2D(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,Qt.__webglTexture,z),ri?I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,De.__webglTexture,pt,ve+on):I.framebufferTexture2D(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,De.__webglTexture,pt),z!==0?I.blitFramebuffer(Rt,Ht,Rt+bt,Ht+ut,Tt,Kt,Tt+bt,Kt+ut,I.COLOR_BUFFER_BIT,I.NEAREST):ri?I.copyTexSubImage3D(At,pt,Tt,Kt,ve+on,Rt,Ht,bt,ut):I.copyTexSubImage2D(At,pt,Tt,Kt,Rt,Ht,bt,ut);_t.bindFramebuffer(I.READ_FRAMEBUFFER,null),_t.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else ri?x.isDataTexture||x.isData3DTexture?I.texSubImage3D(At,pt,Tt,Kt,ve,bt,ut,Mt,ae,Ue,ce.data):L.isCompressedArrayTexture?I.compressedTexSubImage3D(At,pt,Tt,Kt,ve,bt,ut,Mt,ae,ce.data):I.texSubImage3D(At,pt,Tt,Kt,ve,bt,ut,Mt,ae,Ue,ce):x.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,pt,Tt,Kt,bt,ut,ae,Ue,ce.data):x.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,pt,Tt,Kt,ce.width,ce.height,ae,ce.data):I.texSubImage2D(I.TEXTURE_2D,pt,Tt,Kt,bt,ut,ae,Ue,ce);_t.pixelStorei(I.UNPACK_ROW_LENGTH,ke),_t.pixelStorei(I.UNPACK_IMAGE_HEIGHT,te),_t.pixelStorei(I.UNPACK_SKIP_PIXELS,si),_t.pixelStorei(I.UNPACK_SKIP_ROWS,Fe),_t.pixelStorei(I.UNPACK_SKIP_IMAGES,vs),pt===0&&L.generateMipmaps===!0&&L.mipmapsAutoUpdate===!0&&I.generateMipmap(At),_t.unbindTexture()},this.initRenderTarget=function(x){Ut.get(x).__webglFramebuffer===void 0&&kt.setupRenderTarget(x)},this.initTexture=function(x){x.isCubeTexture?kt.setTextureCube(x,0):x.isData3DTexture?kt.setTexture3D(x,0):x.isDataArrayTexture||x.isCompressedArrayTexture?kt.setTexture2DArray(x,0):kt.setTexture2D(x,0),_t.unbindTexture()},this.resetState=function(){q=0,V=0,et=null,_t.reset(),lt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return dn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=Jt._getDrawingBufferColorSpace(t),e.unpackColorSpace=Jt._getUnpackColorSpace()}}const Fl={type:"change"},_o={type:"start"},Vc={type:"end"},Xs=new oo,Ol=new Ln,T0=Math.cos(70*Hh.DEG2RAD),Ee=new U,Xe=2*Math.PI,ee={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Qr=1e-6;class A0 extends Cu{constructor(t,e=null){super(t,e),this.state=ee.NONE,this.target=new U,this.cursor=new U,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Oi.ROTATE,MIDDLE:Oi.DOLLY,RIGHT:Oi.PAN},this.touches={ONE:Fi.ROTATE,TWO:Fi.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new U,this._lastQuaternion=new jn,this._lastTargetPosition=new U,this._quat=new jn().setFromUnitVectors(t.up,new U(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new fl,this._sphericalDelta=new fl,this._scale=1,this._panOffset=new U,this._rotateStart=new Ct,this._rotateEnd=new Ct,this._rotateDelta=new Ct,this._panStart=new Ct,this._panEnd=new Ct,this._panDelta=new Ct,this._dollyStart=new Ct,this._dollyEnd=new Ct,this._dollyDelta=new Ct,this._dollyDirection=new U,this._mouse=new Ct,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=R0.bind(this),this._onPointerDown=w0.bind(this),this._onPointerUp=C0.bind(this),this._onContextMenu=F0.bind(this),this._onMouseWheel=D0.bind(this),this._onKeyDown=I0.bind(this),this._onTouchStart=N0.bind(this),this._onTouchMove=U0.bind(this),this._onMouseDown=P0.bind(this),this._onMouseMove=L0.bind(this),this._interceptControlDown=O0.bind(this),this._interceptControlUp=B0.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(t){this._cursorStyle=t,t==="grab"?this.domElement.style.cursor="grab":this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(t){super.connect(t),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.ownerDocument.addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.state=ee.NONE,this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.ownerDocument.removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.ownerDocument.removeEventListener("keyup",this._interceptControlUp,{capture:!0}),this._controlActive=!1,this._pointers.length=0,this._pointerPositions={},this.domElement.style.touchAction="",this.domElement.style.cursor="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Fl),this.update(),this.state=ee.NONE}pan(t,e){this._pan(t,e),this.update()}dollyIn(t){this._dollyIn(t),this.update()}dollyOut(t){this._dollyOut(t),this.update()}rotateLeft(t){this._rotateLeft(t),this.update()}rotateUp(t){this._rotateUp(t),this.update()}update(t=null){const e=this.object.position;Ee.copy(e).sub(this.target),Ee.applyQuaternion(this._quat),this._spherical.setFromVector3(Ee),this.autoRotate&&this.state===ee.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(i)&&isFinite(s)&&(i<-Math.PI?i+=Xe:i>Math.PI&&(i-=Xe),s<-Math.PI?s+=Xe:s>Math.PI&&(s-=Xe),i<=s?this._spherical.theta=Math.max(i,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+s)/2?Math.max(i,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const a=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=a!=this._spherical.radius}if(Ee.setFromSpherical(this._spherical),Ee.applyQuaternion(this._quatInverse),e.copy(this.target).add(Ee),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let a=null;if(this.object.isPerspectiveCamera){const o=Ee.length();a=this._clampDistance(o*this._scale);const l=o-a;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){const o=new U(this._mouse.x,this._mouse.y,0);o.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;const c=new U(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(o),this.object.updateMatrixWorld(),a=Ee.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;a!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(a).add(this.object.position):(Xs.origin.copy(this.object.position),Xs.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Xs.direction))<T0?this.object.lookAt(this.target):(Ol.setFromNormalAndCoplanarPoint(this.object.up,this.target),Xs.intersectPlane(Ol,this.target))))}else if(this.object.isOrthographicCamera){const a=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),a!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>Qr||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Qr||this._lastTargetPosition.distanceToSquared(this.target)>Qr?(this.dispatchEvent(Fl),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?Xe/60*this.autoRotateSpeed*t:Xe/60/60*this.autoRotateSpeed}_getZoomScale(t){const e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){Ee.setFromMatrixColumn(e,0),Ee.multiplyScalar(-t),this._panOffset.add(Ee)}_panUp(t,e){this.screenSpacePanning===!0?Ee.setFromMatrixColumn(e,1):(Ee.setFromMatrixColumn(e,0),Ee.crossVectors(this.object.up,Ee)),Ee.multiplyScalar(t),this._panOffset.add(Ee)}_pan(t,e){const i=this.domElement;if(this.object.isPerspectiveCamera){const s=this.object.position;Ee.copy(s).sub(this.target);let r=Ee.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*r/i.clientHeight,this.object.matrix),this._panUp(2*e*r/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const i=this.domElement.getBoundingClientRect(),s=t-i.left,r=e-i.top,a=i.width,o=i.height;this._mouse.x=s/a*2-1,this._mouse.y=-(r/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientY),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(Xe*this._rotateDelta.x/e.clientHeight),this._rotateUp(Xe*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.zoomToCursor&&(this._performCursorZoom=!0,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(Xe*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(-Xe*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(Xe*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(-Xe*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._rotateStart.set(i,s)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panStart.set(i,s)}}_handleTouchStartDolly(t){const e=this._getSecondPointerPosition(t),i=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(i*i+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const i=this._getSecondPointerPosition(t),s=.5*(t.pageX+i.x),r=.5*(t.pageY+i.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(Xe*this._rotateDelta.x/e.clientHeight),this._rotateUp(Xe*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panEnd.set(i,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const e=this._getSecondPointerPosition(t),i=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(i*i+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const a=(t.pageX+e.x)*.5,o=(t.pageY+e.y)*.5;this._updateZoomParameters(a,o)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new Ct,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){const e=t.deltaMode,i={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}}function w0(n){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(n.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(n)&&(this._addPointer(n),n.pointerType==="touch"?this._onTouchStart(n):this._onMouseDown(n),this._cursorStyle==="grab"&&(this.domElement.style.cursor="grabbing")))}function R0(n){this.enabled!==!1&&(n.pointerType==="touch"?this._onTouchMove(n):this._onMouseMove(n))}function C0(n){switch(this._removePointer(n),this._pointers.length){case 0:this.domElement.releasePointerCapture(n.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Vc),this.state=ee.NONE,this._cursorStyle==="grab"&&(this.domElement.style.cursor="grab");break;case 1:const t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function P0(n){let t;switch(n.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case Oi.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(n),this.state=ee.DOLLY;break;case Oi.ROTATE:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=ee.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=ee.ROTATE}break;case Oi.PAN:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=ee.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=ee.PAN}break;default:this.state=ee.NONE}this.state!==ee.NONE&&this.dispatchEvent(_o)}function L0(n){switch(this.state){case ee.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(n);break;case ee.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(n);break;case ee.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(n);break}}function D0(n){this.enabled===!1||this.enableZoom===!1||this.state!==ee.NONE||(n.preventDefault(),this.dispatchEvent(_o),this._handleMouseWheel(this._customWheelEvent(n)),this.dispatchEvent(Vc))}function I0(n){this.enabled!==!1&&this._handleKeyDown(n)}function N0(n){switch(this._trackPointer(n),this._pointers.length){case 1:switch(this.touches.ONE){case Fi.ROTATE:if(this.enableRotate===!1){this.state=ee.NONE;break}this._handleTouchStartRotate(n),this.state=ee.TOUCH_ROTATE;break;case Fi.PAN:if(this.enablePan===!1){this.state=ee.NONE;break}this._handleTouchStartPan(n),this.state=ee.TOUCH_PAN;break;default:this.state=ee.NONE}break;case 2:switch(this.touches.TWO){case Fi.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(n),this.state=ee.TOUCH_DOLLY_PAN;break;case Fi.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(n),this.state=ee.TOUCH_DOLLY_ROTATE;break;default:this.state=ee.NONE}break;default:this.state=ee.NONE}this.state!==ee.NONE&&this.dispatchEvent(_o)}function U0(n){switch(this._trackPointer(n),this.state){case ee.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(n),this.update();break;case ee.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(n),this.update();break;case ee.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(n),this.update();break;case ee.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(n),this.update();break;default:this.state=ee.NONE}}function F0(n){this.enabled!==!1&&n.preventDefault()}function O0(n){n.key==="Control"&&(this._controlActive=!0,this.domElement.ownerDocument.addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function B0(n){n.key==="Control"&&(this._controlActive=!1,this.domElement.ownerDocument.removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const cs={sonny:{name:"Sonny",role:"製作人／老闆",label:"製作人 Sonny"},grok:{name:"Grok Bot",role:"專案經理",label:"專案經理 Grok"},claude:{name:"Claude",role:"工程＋劇本",label:"工程 Claude"},chatgpt:{name:"ChatGPT",role:"美術",label:"美術 GPT"}},ur=["sonny","grok","claude","chatgpt"],Wc={sonny:12887412,grok:8361640,claude:8232587,chatgpt:12880774},Xn={sonny:{x:-4.5,z:-4.2,w:2.6,d:1.1},grok:{x:4.2,z:-4.05,w:2.3,d:1},claude:{x:-4.5,z:2.28,w:2.1,d:.94},chatgpt:{x:4.45,z:2.4,w:2,d:.94}};function Ys(n){return{x:n.x,z:n.z+n.d/2+.2,yaw:Math.PI}}const Pn={sonny:{desk:Xn.sonny,home:Ys(Xn.sonny),coffee:{x:1.28,z:.98,yaw:-2.5},rest:"desk",workPose:"type",screens:"overview",accessory:"watch"},grok:{desk:Xn.grok,home:Ys(Xn.grok),coffee:{x:2.55,z:.98,yaw:-2.35},rest:"desk",workPose:"type",screens:"triple",accessory:"headset"},claude:{desk:Xn.claude,home:Ys(Xn.claude),coffee:{x:1.85,z:1.22,yaw:-2.2},sofa:{x:-2.2,z:.02,yaw:0},rest:"sofa",workPose:"type",screens:"dual",accessory:"band"},chatgpt:{desk:Xn.chatgpt,home:Ys(Xn.chatgpt),coffee:{x:2.15,z:1.18,yaw:-2.15},rest:"desk",workPose:"draw",screens:"tablet",accessory:"pencil"}},Yn=[{x:.4,z:1.85,yaw:Math.PI,pause:1.1},{x:.4,z:-1.58,yaw:Math.PI,pause:2.5},{x:3.15,z:-1.58,yaw:-1.35,pause:2.1},{x:3.15,z:1.85,yaw:.35,pause:1.8},{x:.4,z:1.85,yaw:.15,pause:1.2},{x:.4,z:3.55,yaw:Math.PI,pause:2.3}],z0={x:.15,z:1.62},_n={x:-2.2,z:.02,w:1.9,d:.74},Ii={x:2.05,z:-.2,w:1.75,d:.64};function Ie(n){return new fo({color:n,flatShading:!0})}function k0(){return{wall:Ie(16185078),floor:Ie(13816530),zoneA:Ie(15000804),zoneB:Ie(14277081),zoneC:Ie(14606046),zoneD:Ie(15329769),break:Ie(15987699),desk:Ie(16250871),trim:Ie(13290186),metal:Ie(11908533),dark:Ie(9079434),bezel:Ie(13684944),pot:Ie(14935011),plant:Ie(11779764),body:Ie(16053492),limb:Ie(15000804),glass:new fo({color:13951464,flatShading:!0,transparent:!0,opacity:.34,depthWrite:!1})}}function Je(n,t,e,i){const s=new _e(n,t);return s.position.y=e,s.castShadow=!0,s.receiveShadow=!1,i.add(s),s}function Bl(n,t,e,i){const s=new pe;s.position.set(n*.32,.4,.02);const r=Je(new oe(.1,.28,.1),t.limb,-.14,s);r.position.x=0;const a=new pe;a.position.y=-.28,s.add(a),Je(new oe(.09,.26,.09),t.body,-.13,a);const o=Je(new oe(.1,.16,.02),t.dark,-.3,a);return o.rotation.x=-.4,o.visible=!1,o.castShadow=!1,i==="watch"&&n<0&&Je(new oe(.08,.045,.09),e,-.24,a),i==="band"&&n>0&&Je(new oe(.1,.035,.1),e,-.22,a),{shoulder:s,elbow:a,phone:o}}function zl(n,t){const e=new pe;e.position.set(n*.11,0,0),Je(new oe(.13,.36,.13),t.limb,-.18,e);const i=new pe;i.position.y=-.36,e.add(i),Je(new oe(.12,.34,.12),t.body,-.17,i);const s=Je(new oe(.12,.06,.2),t.limb,-.34,i);return s.position.z=.04,{hip:e,knee:i}}function jr(n,t,e,i,s,r){const a=Math.min(r,i/2,s/2);n.beginPath(),n.moveTo(t+a,e),n.arcTo(t+i,e,t+i,e+s,a),n.arcTo(t+i,e+s,t,e+s,a),n.arcTo(t,e+s,t,e,a),n.arcTo(t,e,t+i,e,a),n.closePath()}function ta({text:n,accent:t,width:e,height:i,worldW:s,worldH:r,kind:a}){const o=document.createElement("canvas");o.width=e,o.height=i;const l=o.getContext("2d"),c=new _r(o);c.colorSpace=Ne;const d=new ao({map:c,transparent:!0,depthWrite:!1}),m=new Tc(d);m.scale.set(s,r,1),m.center.set(.5,0);function h(p,v=!1){l.clearRect(0,0,e,i),l.fillStyle="rgba(255,255,255,0.95)",jr(l,6,8,e-12,i-18,(i-18)/2),l.fill(),a==="name"&&(l.fillStyle=t,jr(l,22,22,10,i-46,5),l.fill()),l.fillStyle=a==="zzz"?"#8d8d8d":"#3a3a3a",l.font=a==="zzz"?'700 42px Georgia, "Times New Roman", serif':`600 ${a==="name"?34:32}px "WenQuanYi Micro Hei", "PingFang TC", "Noto Sans TC", "Microsoft JhengHei", sans-serif`,l.textAlign="center",l.textBaseline="middle",l.fillText(p,e/2+(a==="name"?8:0),i/2-2),v&&(l.strokeStyle="rgba(60,60,60,0.45)",l.lineWidth=6,jr(l,6,8,e-12,i-18,(i-18)/2),l.stroke()),c.needsUpdate=!0}return h(n,!1),m.userData.draw=h,m}function G0({id:n,mats:t,accentHex:e,accessory:i,name:s}){const r=Ie(e),a=new pe;a.name=n;const o=new pe;a.add(o);const l=new pe;l.position.y=.74,o.add(l);const c=Je(new oe(.48,.5,.26),t.body,.28,l),d=new pe;d.position.y=.5,l.add(d),Je(new oe(.12,.1,.12),t.limb,.02,d);const m=Je(new Jn(.18,1),t.body,.2,d);if(m.rotation.set(.2,.35,.1),i==="headset"){const b=new _e(new uo(.2,.018,5,10),r);b.rotation.x=Math.PI/2,b.position.y=.04,b.castShadow=!0,m.add(b);const _=new oe(.06,.1,.07),M=new _e(_,r);M.position.set(-.18,-.02,0),M.castShadow=!0;const D=new _e(_,r);D.position.set(.18,-.02,0),D.castShadow=!0,m.add(M,D)}if(i==="pencil"){const b=Je(new oe(.028,.24,.028),r,.18,m);b.position.x=.14,b.rotation.z=-.45;const _=Je(new oe(.02,.04,.02),t.dark,.13,b);_.castShadow=!1}const h=H0(t,r);a.add(h);const p=Bl(-1,t,r,i),v=Bl(1,t,r,i);l.add(p.shoulder,v.shoulder);const E=zl(-1,t),f=zl(1,t);l.add(E.hip,f.hip);const u=new _e(new oe(.78,1.75,.7),new qi({visible:!1}));u.position.y=.9,u.userData.id=n,a.add(u),a.traverse(b=>{b.userData.id=n});const S=`#${e.toString(16).padStart(6,"0")}`,A=ta({text:s,accent:S,width:384,height:96,worldW:1.05,worldH:.26,kind:"name"});A.position.set(0,1.78,0);const y=ta({text:"…",accent:S,width:256,height:80,worldW:.62,worldH:.2,kind:"bubble"});y.position.set(0,2.08,0);const w=ta({text:"Zzz",accent:S,width:160,height:80,worldW:.38,worldH:.2,kind:"zzz"});return w.position.set(.34,2.32,0),w.visible=!1,a.add(A,y,w),a.traverse(b=>{b.userData.id=n}),{anchor:a,rig:{pivot:o,hips:l,torso:c,head:d,armL:p,armR:v,legL:E,legR:f,phoneL:p.phone,phoneR:v.phone,sleeper:h,bubble:y,zzz:w,nameplate:A,nameText:s,bubbleText:""}}}function H0(n,t){const e=new pe;e.position.y=.58,e.visible=!1;const i=new _e(new oe(.58,.2,.32),n.body);i.position.set(-.02,0,0),i.castShadow=!0,e.add(i);const s=new _e(new Jn(.16,1),n.body);s.position.set(-.48,.03,0),s.rotation.set(.3,.5,.1),s.castShadow=!0,e.add(s);for(const[l,c]of[[.08,.18],[-.08,.32]]){const d=new _e(new oe(.34,.11,.11),n.limb);d.position.set(.42,-.02,l),d.rotation.z=c,d.castShadow=!0;const m=new _e(new oe(.3,.1,.1),n.body);m.position.set(.74,-.05,l),m.rotation.z=c*.45,m.castShadow=!0,e.add(d,m)}const r=new _e(new oe(.36,.08,.09),n.limb);r.position.set(-.02,.05,.16),r.castShadow=!0;const a=new _e(new oe(.34,.08,.09),n.body);a.position.set(.04,.1,.08),a.rotation.z=-.15,a.castShadow=!0,e.add(r,a);const o=new _e(new oe(.08,.05,.1),t);return o.position.set(.12,.12,.14),o.castShadow=!0,e.add(o),e}function V0(n){n.armL.shoulder.rotation.set(.08,0,.12),n.armR.shoulder.rotation.set(.08,0,-.12),n.armL.elbow.rotation.set(0,0,0),n.armR.elbow.rotation.set(0,0,0)}function kl(n){n.hips.position.y=.5,n.legL.hip.rotation.x=-Math.PI/2,n.legR.hip.rotation.x=-Math.PI/2,n.legL.knee.rotation.x=Math.PI/2*.92,n.legR.knee.rotation.x=Math.PI/2*.92}function nn(n,t,e,i){n.shoulder.rotation.x=t,n.shoulder.rotation.z=i,n.elbow.rotation.x=e}function W0(n,t,e){n.pivot.rotation.set(0,0,0),n.pivot.position.set(0,0,0),n.hips.position.set(0,.74,0),n.hips.rotation.set(0,0,0),n.torso.rotation.set(0,0,0),n.head.rotation.set(0,0,0),n.legL.hip.rotation.set(0,0,0),n.legR.hip.rotation.set(0,0,0),n.legL.knee.rotation.set(0,0,0),n.legR.knee.rotation.set(0,0,0),n.phoneL.visible=!1,n.phoneR.visible=!1,n.pivot.visible=!0,n.sleeper&&(n.sleeper.visible=!1),V0(n);const i=Math.sin(e*1.7)*.008;if(t==="walk"){const s=Math.sin(e*8);n.legL.hip.rotation.x=s*.6,n.legR.hip.rotation.x=-s*.6,n.legL.knee.rotation.x=Math.max(0,-s)*1.05,n.legR.knee.rotation.x=Math.max(0,s)*1.05,n.armL.shoulder.rotation.x=-s*.5,n.armR.shoulder.rotation.x=s*.5,n.torso.rotation.y=s*.06,n.hips.position.y=.74+Math.abs(s)*.02;return}if(t==="play"){kl(n);const s=e%8;if(s>6.35){const c=Math.sin((s-6.35)/1.65*Math.PI);n.hips.position.y=.5+c*.06,n.torso.rotation.x=.08,n.head.rotation.x=-.25,nn(n.armL,-.45,-.35,.35),nn(n.armR,-.25,-.2,-.95);return}const a=Math.sin(e*2.6)*.014;n.hips.position.y=.5+a,n.torso.rotation.x=.34+Math.sin(e*1.4)*.025,n.head.rotation.x=.38;const o=Math.sin(e*16),l=Math.sin(e*11+.6);nn(n.armL,-1.28,-.72+o*.28,.32),nn(n.armR,-1.05,-.4+l*.1,-.82);return}if((t==="type"||t==="sit"||t==="draw"||t==="phone-sit"||t==="sleep-desk")&&(kl(n),n.hips.position.y=.5+i),t==="type"||t==="sit"){n.torso.rotation.x=.18,n.head.rotation.x=.18;const s=Math.sin(e*14),r=Math.sin(e*14+2),a=t==="type";nn(n.armL,-1.2,a?-.75+s*.34:-.6,.55),nn(n.armR,-1.2,a?-.75+r*.34:-.6,-.55);return}if(t==="draw"){n.torso.rotation.x=.28,n.head.rotation.x=.4;const s=Math.sin(e*2.4);nn(n.armL,-.95,-.8,.35),nn(n.armR,-1.35+s*.12,-.35,-.45),n.armR.shoulder.rotation.y=s*.25;return}if(t==="phone-sit"||t==="phone-stand"){t==="phone-stand"&&(n.hips.position.y=.74+i),n.head.rotation.x=.42,nn(n.armL,-.25,-.2,.18),nn(n.armR,-1.75,-1.15,-.15),n.phoneR.visible=!0;return}if(t==="sleep-desk"){n.torso.rotation.x=1.02,n.head.rotation.x=.4,nn(n.armL,-1.35,-.15,.2),nn(n.armR,-1.35,-.15,-.2);return}if(t==="sleep-sofa"){n.pivot.visible=!1,n.sleeper.visible=!0;return}n.hips.position.y=.74+i,n.torso.rotation.y=Math.sin(e*.8)*.03}const qs=-1.58;function X0(n,t){const e=[],i=o=>{const l=e.length?e[e.length-1]:n;Math.hypot(o.x-l.x,o.z-l.z)>.08&&e.push({x:o.x,z:o.z})};let s={x:n.x,z:n.z};n.z<-2.05&&(i({x:n.x,z:qs}),s={x:n.x,z:qs});const r=t.z<-2.05?{x:t.x,z:qs}:{x:t.x,z:t.z};return(Math.abs(r.x-s.x)>.85||Math.abs(r.z-s.z)>2.2)&&i(z0),t.z<-2.05&&i({x:t.x,z:qs}),i({x:t.x,z:t.z}),e}function Gl(n,t,e){let i=t-n;for(;i>Math.PI;)i-=Math.PI*2;for(;i<-Math.PI;)i+=Math.PI*2;const s=1-Math.exp(-8*e);return n+i*s}class Y0{constructor({id:t,anchor:e,rig:i,chair:s,layout:r}){this.id=t,this.anchor=e,this.rig=i,this.chair=s,this.layout=r,this.official="",this.task="",this.updatedAt="",this.activity="stand",this.pose="stand",this.simSlack=!1,this.path=[],this.pending=null,this.pos={x:r.home.x,z:r.home.z},this.yaw=r.home.yaw,this.displayYaw=r.home.yaw,this.spin=0,this.timer=0,this.phase=Math.random()*6,this.strollIndex=0,this.bob=0,this.arrived=!0,this.ready=!1}placeInitial(t){if(this.official=t.state||"",this.task=t.task||"",this.updatedAt=t.updatedAt||"",this.progress=Number.isFinite(t.progress)?t.progress:null,this.done=Array.isArray(t.done)?t.done.map(String):[],this.next=t.next?String(t.next):"",this.simSlack=!1,t.state==="視察中"){const e=Yn[0],i=Yn[1];this.pos={x:e.x,z:e.z},this.yaw=Math.atan2(i.x-e.x,i.z-e.z),this.displayYaw=this.yaw,this.strollIndex=1,this.pending={activity:"stroll",point:i,stroll:!0},this.path=[{x:i.x,z:i.z}],this.activity="walk",this.pose="walk",this.arrived=!1}else t.state==="工作"?(this.snap(this.layout.home,"work",this.layout.workPose),this.timer=18+Math.random()*8):t.state==="偷懶"?this.snap(this.layout.home,"play","play"):t.state==="休息"?this.layout.rest==="sofa"?this.snap(this.layout.sofa,"sofa","sleep-sofa"):this.snap(this.layout.home,"desk-sleep","sleep-desk"):this.snap(this.layout.home,"stand","stand");this.ready=!0,this.applyTransform(0)}applyStatus(t){const e=t.state||"",i=e!==this.official;this.task=t.task||"",this.updatedAt=t.updatedAt||"",this.progress=Number.isFinite(t.progress)?t.progress:null,this.done=Array.isArray(t.done)?t.done.map(String):[],this.next=t.next?String(t.next):"",i&&(this.official=e,this.simSlack=!1,this.begin(this.planOfficial()))}planOfficial(){return this.official==="工作"?{activity:"work",pose:this.layout.workPose,point:this.layout.home,timer:20+Math.random()*12}:this.official==="偷懶"?{activity:"play",pose:"play",point:this.layout.home,timer:0}:this.official==="休息"?this.layout.rest==="sofa"?{activity:"sofa",pose:"sleep-sofa",point:this.layout.sofa,timer:0}:{activity:"desk-sleep",pose:"sleep-desk",point:this.layout.home,timer:0}:this.official==="視察中"?{activity:"stroll",point:Yn[this.strollIndex%Yn.length],stroll:!0}:{activity:"stand",pose:"stand",point:this.layout.home,timer:0}}planSlack(t){const e=Math.random();return e<.46?{activity:"coffee",pose:"phone-stand",point:this.layout.coffee,timer:t}:e<.74?{activity:"phone",pose:"phone-sit",point:this.layout.home,timer:t}:{activity:"spin",pose:"sit",point:this.layout.home,timer:t}}begin(t){this.pending=t;const e=t.point;if(Math.hypot(e.x-this.pos.x,e.z-this.pos.z)<.12){this.finish();return}this.path=t.stroll?[{x:e.x,z:e.z}]:X0(this.pos,e),this.activity="walk",this.pose="walk",this.arrived=!1}snap(t,e,i){this.pos={x:t.x,z:t.z},this.yaw=t.yaw??this.yaw,this.displayYaw=this.yaw,this.path=[],this.activity=e,this.pose=i,this.arrived=!0,this.spin=0,this.bob=0}finish(){const t=this.pending;if(t){if(this.pos={x:t.point.x,z:t.point.z},this.path=[],this.arrived=!0,this.bob=0,t.stroll){const e=Yn[this.strollIndex%Yn.length];this.activity="stroll",this.pose="stand",this.yaw=e.yaw,this.timer=e.pause;return}this.activity=t.activity,this.pose=t.pose,this.yaw=t.point.yaw??this.yaw,this.timer=t.timer||0,t.activity!=="spin"&&(this.spin=0)}}update(t){this.phase+=t,this.arrived?this.stepStay(t):this.stepWalk(t),this.activity==="spin"?this.displayYaw=this.layout.home.yaw+this.spin:this.displayYaw=Gl(this.displayYaw,this.yaw,t),this.applyTransform(t)}stepWalk(t){const e=this.path[0];if(!e){this.finish();return}const i=e.x-this.pos.x,s=e.z-this.pos.z,r=Math.hypot(i,s);if(r<.045){this.pos.x=e.x,this.pos.z=e.z,this.path.shift(),this.path.length||this.finish();return}const a=Math.min(1.55*t,r);this.pos.x+=i/r*a,this.pos.z+=s/r*a,this.yaw=Math.atan2(i,s),this.bob=Math.abs(Math.sin(this.phase*8))*.03}stepStay(t){if(this.bob=0,this.activity==="spin"&&(this.spin+=t*1.35),this.activity==="work"&&this.official==="工作"){this.timer-=t,this.timer<=0&&(this.simSlack=!0,this.begin(this.planSlack(6+Math.random()*4)));return}if((this.activity==="coffee"||this.activity==="phone"||this.activity==="spin")&&this.simSlack){if(this.timer-=t,this.timer>0)return;if(this.simSlack){this.simSlack=!1,this.begin(this.planOfficial());return}let i=this.planSlack(8+Math.random()*5),s=0;for(;i.activity===this.activity&&s<4;)i=this.planSlack(8+Math.random()*5),s+=1;this.begin(i);return}if(this.activity==="stroll"&&(this.timer-=t,this.timer<=0)){this.strollIndex=(this.strollIndex+1)%Yn.length;const i=Yn[this.strollIndex];this.begin({activity:"stroll",point:i,stroll:!0})}}applyTransform(t){if(this.anchor.position.set(this.pos.x,this.bob,this.pos.z),this.anchor.rotation.y=this.displayYaw,this.chair){const s=this.activity==="spin"?this.layout.home.yaw+this.spin:this.layout.home.yaw;this.chair.rotation.y=Gl(this.chair.rotation.y,s,t||1)}W0(this.rig,this.pose,this.phase);const e=this.simSlack?"離席一下":this.official||"…";e!==this.rig.bubbleText&&(this.rig.bubbleText=e,this.rig.bubble.userData.draw(e));const i=this.pose==="sleep-sofa"||this.pose==="sleep-desk";this.rig.zzz.visible=i,i&&(this.rig.zzz.position.y=2.32+Math.sin(this.phase*2)*.05),!!this.selected!==this.rig.selectedDrawn&&(this.rig.selectedDrawn=!!this.selected,this.rig.nameplate.userData.draw(this.rig.nameText,this.rig.selectedDrawn))}}const sn=160,q0=78,K0=420,Z0=175;function $0(n=0){return{seed:n,t:0,run:n*37,y:0,vy:0,grounded:!0,score:0,popped:0,acc:0,taken:new Set}}function qa(n){const t=Math.floor(n/sn),e=n-t*sn,i=(t%4+4)%4;return i===2&&e>48&&e<96?null:i===1&&e>46&&e<108?28:0}function Xc(n){const t=Math.floor(n/sn),e=[];for(let i=t-1;i<=t+6;i+=1){const s=(i%4+4)%4;s!==0&&s!==3||e.push({id:i,x:i*sn+(s===0?70:36),h:22})}return e}function J0(n,t){n.t+=t,n.run+=q0*t;const e=n.run+108,i=qa(e),s=qa(e+34);i!==null&&n.y<=i+.8&&n.vy<=0&&(n.y=i,n.vy=0,n.grounded=!0);const r=s===null||i!==null&&s!==null&&s>i+12;n.grounded&&r&&(n.vy=Z0,n.grounded=!1),n.grounded||(n.vy-=K0*t,n.y+=n.vy*t),i!==null&&n.y<i&&(n.y=i,n.vy=0,n.grounded=!0),n.y<-36&&(n.y=0,n.vy=0,n.grounded=!0);for(const a of Xc(e))n.taken.has(a.id)||Math.abs(a.x-e)<18&&n.y+36>a.h&&n.y<a.h+8&&(n.taken.add(a.id),n.score+=1,n.popped=.45);if(n.popped>0&&(n.popped-=t),n.taken.size>24){const a=[...n.taken].slice(-12);n.taken=new Set(a)}}function Q0(n,t){n.acc+=Math.min(t,.12);let e=0;for(;n.acc>=1/60&&e<5;)J0(n,1/60),n.acc-=1/60,e+=1}function j0(n,t,e,i,s,r){const a=Math.min(r,i/2,s/2);n.beginPath(),n.moveTo(t+a,e),n.arcTo(t+i,e,t+i,e+s,a),n.arcTo(t+i,e+s,t,e+s,a),n.arcTo(t,e+s,t,e,a),n.arcTo(t,e,t+i,e,a),n.closePath()}function t_(n,t){const e=n.canvas.width,i=n.canvas.height,s=e/320,r=i/180,a=132;n.fillStyle="#2b3036",n.fillRect(0,0,e,i),n.fillStyle="#3a4148";for(let f=0;f<5;f+=1){const u=((f*90-t.run*.25)%(e/s+80)+e/s+80)%(e/s+80)-20;n.beginPath(),n.arc(u*s,58*r,(18+f%3*6)*s,Math.PI,0),n.fill()}const o=Math.floor((t.run-40)/sn)*sn;for(let f=o;f<t.run+360;f+=sn){const S=(Math.floor(f/sn)%4+4)%4,A=(f-t.run)*s;n.fillStyle="#d7d7d7",S===2?(n.fillRect(A,a*r,48*s,(180-a)*r),n.fillRect(A+96*s,a*r,(sn-96)*s,(180-a)*r),n.fillStyle="#b9b9b9",n.fillRect(A,a*r,48*s,4*r),n.fillRect(A+96*s,a*r,(sn-96)*s,4*r)):(n.fillStyle="#e4e4e4",n.fillRect(A,a*r,(sn-6)*s,(180-a)*r),n.fillStyle="#b9b9b9",n.fillRect(A,a*r,(sn-6)*s,4*r),S===1&&(n.fillStyle="#cfcfcf",n.fillRect(A+46*s,(a-28)*r,62*s,28*r)))}for(const f of Xc(t.run)){if(t.taken.has(f.id))continue;const u=(f.x-t.run)*s;if(u<-20||u>e+20)continue;const S=(a-f.h)*r,A=.45+Math.abs(Math.sin(t.t*4+f.id))*.55;n.fillStyle="#e3d3ae",n.beginPath(),n.ellipse(u,S,7*s*A,7*r,0,0,Math.PI*2),n.fill()}const l=108*s,c=t.run+108,d=qa(c),m=d===null?0:d,h=(a-Math.max(t.y,m))*r,p=t.grounded?Math.abs(Math.sin(t.t*10)):0,v=t.grounded?Math.sin(t.t*10)*5:2;n.fillStyle="#f7f7f7",n.fillRect(l-5*s,h-(26+p)*r,7*s,(12+v)*r),n.fillRect(l+6*s,h-(26+p)*r,7*s,(12-v)*r),j0(n,l-14*s,h-(50+p)*r,32*s,26*r,4*s),n.fill(),n.fillStyle="#ececec",n.beginPath(),n.arc(l+3*s,h-(62+p)*r,12*s,0,Math.PI*2),n.fill(),n.fillStyle="#c4a574",n.fillRect(l-3*s,h-(58+p)*r,14*s,4*r);const E=t.score+Math.floor(t.run/90);n.fillStyle="#f4f4f4",n.font=`600 ${Math.max(22,Math.floor(i*.14))}px "WenQuanYi Micro Hei", "PingFang TC", sans-serif`,n.textBaseline="top",n.fillText("小跳",16,12),n.textAlign="right",n.fillText(`分數 ${E}`,e-16,12),n.textAlign="left",t.popped>0&&(n.globalAlpha=Math.max(0,t.popped/.45),n.fillText("+1",l,h-62*r),n.globalAlpha=1)}const mi='"WenQuanYi Micro Hei", "PingFang TC", "Noto Sans TC", "Microsoft JhengHei", sans-serif',Ks=["// 開放式辦公室","const team = [","  'sonny',","  'grok',","  'claude',","  'chatgpt',","]","","function tick(dt) {","  for (const id of team) {","    const person = staff(id)",'    if (person.state === "工作") work(person, dt)','    else if (person.state === "休息") rest(person)',"  }","}","","function work(person, dt) {","  person.focus += dt","  if (person.focus > person.span) {","    stepAway(person)","  }","}"];function go(n,t,e,i,s,r){const a=Math.min(r,i/2,s/2);n.beginPath(),n.moveTo(t+a,e),n.arcTo(t+i,e,t+i,e+s,a),n.arcTo(t+i,e+s,t,e+s,a),n.arcTo(t,e+s,t,e,a),n.arcTo(t,e,t+i,e,a),n.closePath(),n.fill()}function e_(n,t,e,i){const{width:s,height:r}=n.canvas;n.clearRect(0,0,s,r),n.fillStyle=e?"#32363b":"#3c4146",n.fillRect(0,0,s,r),n.font=`27px ${mi}`,n.textBaseline="top";const a=e?Math.floor(t*1.15+i)%Ks.length:i%Ks.length;for(let o=0;o<8;o+=1){const l=Ks[(a+o)%Ks.length];n.fillStyle=l.startsWith("//")?"#a9b8ae":"#e7e7e7",e||(n.fillStyle="#b5b5b5"),n.fillText(l,28,24+o*32)}if(e){const o=Math.floor(t*2.2+i)%8;n.fillStyle="#d7c4a2",n.fillRect(28,50+o*32,16,4)}}function n_(n,t,e){const{width:i,height:s}=n.canvas;n.clearRect(0,0,i,s),n.fillStyle="#f5f5f5",n.fillRect(0,0,i,s);const r=[["待辦",["試玩紀錄","第 2 章"]],["進行",["AI 辦公室"]],["完成",["戰鬥 v2","第 1 章"]]],a=i/3;r.forEach((o,l)=>{n.fillStyle="#ececec",n.fillRect(l*a+14,16,a-28,s-32),n.fillStyle="#5e5e5e",n.font=`28px ${mi}`,n.textBaseline="top",n.fillText(o[0],l*a+28,30),o[1].forEach((c,d)=>{const m=e&&l===1?Math.sin(t*2.2)*4:0,h=78+d*70+m;n.fillStyle="#ffffff",go(n,l*a+28,h,a-56,52,8),n.fillStyle="#3f3f3f",n.font=`24px ${mi}`,n.fillText(c,l*a+42,h+14)})})}function i_(n,t,e){const{width:i,height:s}=n.canvas;n.clearRect(0,0,i,s),n.fillStyle="#f3f3f3",n.fillRect(0,0,i,s),n.textBaseline="top",n.fillStyle="#4a4a4a",n.font=`40px ${mi}`,n.fillText("亂世小英雄",36,36),n.font=`28px ${mi}`,n.fillStyle="#6d6d6d",n.fillText("第 1 章試玩",36,108),n.fillText("已進主線",36,148),n.fillStyle="#8a8a8a",n.fillText("目前：暫停",36,210),n.fillStyle=e?"#c4a574":"#cfcfcf";const r=90+(e?(Math.sin(t*1.4)*.5+.5)*70:24);go(n,36,s-48,r,10,5)}function Hl(n,t,e){const{width:i,height:s}=n.canvas;n.clearRect(0,0,i,s),n.fillStyle="#f7f7f7",n.fillRect(0,0,i,s),n.strokeStyle="#d0d0d0",n.lineWidth=8,n.strokeRect(18,18,i-36,s-36),n.fillStyle="#dddddd";const r=e?2+Math.floor(t*.35%3):3;for(let a=0;a<r;a+=1)n.beginPath(),n.arc(i*.38,s*.46,18+a*16,0,Math.PI*2),n.fill();if(n.fillStyle="#c48b86",n.beginPath(),n.moveTo(i*.58,s*.72),n.lineTo(i*.8,s*.3),n.lineTo(i*.5,s*.28),n.closePath(),n.fill(),e){n.strokeStyle="#7f96a8",n.lineWidth=5,n.beginPath();const a=t*.15%1;n.moveTo(i*.22,s*.78),n.lineTo(i*(.22+a*.35),s*(.78-a*.18)),n.stroke()}}function s_(n,t,e){const{width:i,height:s}=n.canvas;n.clearRect(0,0,i,s),n.fillStyle=e?"#f4f4f4":"#ececec",n.fillRect(0,0,i,s),n.fillStyle="#5a5a5a",n.font=`28px ${mi}`,n.textBaseline="top",n.fillText("今天",28,24);const r=["對狀態檔","看第 1 章","寫任務單","等 Sonny"];r.forEach((a,o)=>{const l=78+o*48;n.fillStyle="#ffffff",go(n,24,l,i-48,38,8),n.fillStyle=o===Math.floor(t)%r.length&&e?"#7f96a8":"#d5d5d5",n.beginPath(),n.arc(48,l+19,6,0,Math.PI*2),n.fill(),n.fillStyle="#444",n.font=`24px ${mi}`,n.fillText(a,66,l+8)})}const r_={code:e_,kanban:n_,overview:i_,art:Hl,tasks:s_,tablet:Hl};function dr(n,t,e,i=0){const s=document.createElement("canvas"),r=e==="art";s.width=r?384:512,s.height=r?480:320;const a=s.getContext("2d"),o=new _r(s);o.colorSpace=Ne;const l=new qi({map:o});return{mesh:new _e(new _s(n,t),l),ctx:a,tex:o,kind:e,seed:i,draw:r_[e],last:-10,owner:null,playable:!1,game:null}}const a_=1/18;function Vl(n,t){const e=t?Pe:Ve;n.tex.magFilter!==e&&(n.tex.magFilter=e,n.tex.minFilter=e,n.tex.generateMipmaps=!t,n.tex.needsUpdate=!0)}function o_(n,t,{isOn:e,isPlaying:i,isVisible:s}){for(const r of n){if(i(r)){if(!s(r)||t-r.last<a_)continue;const o=Math.min(.1,Math.max(.016,t-r.last));r.last=t,r.game||(r.game=$0(r.seed||0)),Q0(r.game,o),t_(r.ctx,r.game),Vl(r,!0),r.tex.needsUpdate=!0;continue}t-r.last<.12||(r.last=t,Vl(r,!1),r.draw(r.ctx,t,e(r),r.seed),r.tex.needsUpdate=!0)}}function yt(n,t,e,i,s,r,a={}){const o=new _e(t,e);return o.position.set(i,s,r),a.rx&&(o.rotation.x=a.rx),a.ry&&(o.rotation.y=a.ry),a.rz&&(o.rotation.z=a.rz),o.castShadow=a.cast!==!1,o.receiveShadow=!!a.receive,n.add(o),o}function Lt(n,t,e){return new oe(n,t,e)}function l_(){const n=document.createElement("canvas");n.width=8,n.height=64;const t=n.getContext("2d"),e=t.createLinearGradient(0,0,0,64);e.addColorStop(0,"#f7f7f5"),e.addColorStop(.45,"#e6eef2"),e.addColorStop(1,"#d7ded8"),t.fillStyle=e,t.fillRect(0,0,8,64);const i=new _r(n);return i.colorSpace=Ne,new qi({map:i})}function hi(n,t,e,i){const s=new pe;s.position.set(i.x,i.y,i.z),s.rotation.y=i.ry||0,n.add(s),yt(s,Lt(i.w+.06,i.h+.06,.045),t.bezel,0,0,0);const r=dr(i.w*.92,i.h*.9,i.kind,i.seed||0);r.mesh.position.z=.028,r.owner=i.owner,r.playable=!!i.play,s.add(r.mesh),e.push(r),i.flat||(yt(s,Lt(.05,.18,.05),t.metal,0,-i.h/2-.09,0),yt(s,Lt(.26,.025,.14),t.metal,0,-i.h/2-.18,.02))}function c_(n,t,e,i,s){const{desk:r}=i,a=new pe;a.position.set(r.x,0,r.z),n.add(a),yt(a,Lt(r.w,.06,r.d),t.desk,0,.74,0,{receive:!0});const o=r.w/2-.09,l=r.d/2-.09;for(const d of[-1,1])for(const m of[-1,1])yt(a,Lt(.07,.71,.07),t.trim,d*o,.355,m*l);yt(a,Lt(.38,.02,.14),t.dark,0,.78,r.d/2-.2,{cast:!0});const c=-r.d/2+.08;if(i.screens==="overview")hi(a,t,e,{x:0,y:1.22,z:c,w:.98,h:.56,owner:s,kind:"overview",play:!0});else if(i.screens==="triple")hi(a,t,e,{x:-.72,y:1.12,z:c+.04,w:.52,h:.36,ry:.42,owner:s,kind:"tasks",seed:1}),hi(a,t,e,{x:0,y:1.2,z:c,w:.7,h:.44,owner:s,kind:"kanban",play:!0}),hi(a,t,e,{x:.72,y:1.12,z:c+.04,w:.52,h:.36,ry:-.42,owner:s,kind:"tasks",seed:2});else if(i.screens==="dual")hi(a,t,e,{x:-.4,y:1.16,z:c,w:.62,h:.4,ry:.18,owner:s,kind:"code",seed:0,play:!0}),hi(a,t,e,{x:.4,y:1.16,z:c,w:.62,h:.4,ry:-.18,owner:s,kind:"code",seed:5,play:!0});else{hi(a,t,e,{x:.05,y:.79,z:.05,w:.62,h:.42,owner:s,kind:"tablet",flat:!0,play:!0});const d=e[e.length-1];d.mesh.parent.rotation.x=-Math.PI/2}return a}function h_(n,t,e){const i=new pe;i.position.set(e.x,0,e.z),i.rotation.y=e.yaw,n.add(i),yt(i,Lt(.5,.07,.48),t.desk,0,.5,0,{receive:!0}),yt(i,Lt(.46,.36,.06),t.desk,0,.7,-.2),yt(i,new Dn(.04,.045,.34,6),t.metal,0,.28,0);for(let s=0;s<5;s+=1){const r=s/5*Math.PI*2,a=yt(i,Lt(.045,.035,.34),t.metal,Math.sin(r)*.16,.07,Math.cos(r)*.16);a.rotation.y=r}return i}function ui(n,t,e,i,s){const r=new pe;r.position.set(e,0,i),n.add(r),yt(r,new Dn(.16*s,.12*s,.18*s,6),t.pot,0,.09*s,0),yt(r,new Jn(.22*s,0),t.plant,0,.38*s,0),yt(r,new Jn(.15*s,0),t.plant,.12*s,.5*s,.04*s),yt(r,new Jn(.12*s,0),t.plant,-.1*s,.46*s,-.05*s)}function ss(n,t,e,i,s,r){const a=new pe;a.position.set(e,0,i),a.rotation.y=r,n.add(a),yt(a,Lt(s,.04,.34),t.desk,0,.4,0,{receive:!0}),yt(a,Lt(s,.04,.34),t.desk,0,.76,0,{receive:!0}),yt(a,Lt(.05,.78,.32),t.trim,-s/2+.04,.39,0),yt(a,Lt(.05,.78,.32),t.trim,s/2-.04,.39,0);const o=[t.trim,t.metal,t.bezel,t.limb,t.dark];let l=-s/2+.2;for(let d=0;d<4;d+=1){const m=.16+d%3*.035;yt(a,Lt(.055,m,.2),o[d%o.length],l,.42+m/2,0),l+=.11}ui(a,t,s/2-.28,0,.7);const c=a.children[a.children.length-1];c.position.y=.78}function ea(n,t,e,i,s,r){const a=new pe;a.position.set(i,s,r),a.rotation.y=Math.PI/2,n.add(a),yt(a,Lt(.78,.98,.04),t.desk,0,0,0,{cast:!1,receive:!0});const o=dr(.64,.82,"art",0);o.mesh.position.z=.03,o.owner="chatgpt",a.add(o.mesh),e.push(o)}function u_(n,t){const e=[],i={};yt(n,Lt(16.6,.12,12.6),t.floor,0,-.06,0,{cast:!1,receive:!0}),yt(n,Lt(7.3,.02,5.5),t.zoneA,-4.15,.01,-3.05,{cast:!1,receive:!0}),yt(n,Lt(7.3,.02,5.5),t.zoneB,4.15,.01,-3.05,{cast:!1,receive:!0}),yt(n,Lt(7.3,.02,5.5),t.zoneC,-4.15,.01,3.05,{cast:!1,receive:!0}),yt(n,Lt(7.3,.02,5.5),t.zoneD,4.15,.01,3.05,{cast:!1,receive:!0}),yt(n,Lt(5.6,.02,3.15),t.break,.05,.02,.12,{cast:!1,receive:!0});const s=3.05,r=.12;yt(n,Lt(16.2,s,r),t.wall,0,s/2,6.06,{cast:!1,receive:!0}),yt(n,Lt(r,s,12.2),t.wall,-8.06,s/2,0,{cast:!1,receive:!0}),yt(n,Lt(r,s,12.2),t.wall,8.06,s/2,0,{cast:!1,receive:!0}),yt(n,Lt(16.2,.62,r),t.wall,0,.31,-6.06,{cast:!1,receive:!0}),yt(n,Lt(16.2,.5,r),t.wall,0,2.8,-6.06,{cast:!1,receive:!0}),yt(n,Lt(1.35,1.92,r),t.wall,-7.35,1.55,-6.06,{cast:!1,receive:!0}),yt(n,Lt(1.35,1.92,r),t.wall,7.35,1.55,-6.06,{cast:!1,receive:!0});for(const E of[-3.4,.1,3.5])yt(n,Lt(.06,1.92,.08),t.trim,E,1.55,-6.02,{cast:!1});yt(n,Lt(12.6,1.88,.02),t.glass,.05,1.55,-6.08,{cast:!1}),yt(n,Lt(20,7,.08),l_(),0,2.4,-7.15,{cast:!1}),yt(n,Lt(18,.08,2.4),t.floor,0,-.02,-7.4,{cast:!1,receive:!0}),yt(n,Lt(15.6,.08,.04),t.trim,0,.04,5.96,{cast:!1}),yt(n,Lt(.04,.08,11.6),t.trim,-7.96,.04,0,{cast:!1}),yt(n,Lt(.04,.08,11.6),t.trim,7.96,.04,0,{cast:!1});for(const E of Object.keys(Pn))c_(n,t,e,Pn[E],E),i[E]=h_(n,t,Pn[E].home);const a=new pe;a.position.set(6.55,0,-2.15),a.rotation.y=Math.PI/2,n.add(a),yt(a,Lt(1.7,1.15,.06),t.desk,0,1.45,0,{receive:!0}),yt(a,Lt(.08,1.55,.08),t.trim,-.78,.78,0),yt(a,Lt(.08,1.55,.08),t.trim,.78,.78,0);const o=dr(1.52,.96,"kanban",0);o.mesh.position.set(0,1.45,.04),o.owner="grok",a.add(o.mesh),e.push(o);const l=new pe;l.position.set(_n.x,0,_n.z),n.add(l),yt(l,Lt(_n.w,.28,_n.d),t.desk,0,.36,0,{receive:!0}),yt(l,Lt(_n.w,.4,.1),t.desk,0,.64,-.74/2+.05),yt(l,Lt(.1,.32,_n.d),t.trim,-1.9/2+.05,.5,0),yt(l,Lt(.1,.32,_n.d),t.trim,_n.w/2-.05,.5,0);for(const E of[-1,1])for(const f of[-1,1])yt(l,Lt(.06,.16,.06),t.metal,E*(_n.w/2-.12),.08,f*(_n.d/2-.1));const c=new pe;c.position.set(Ii.x,0,Ii.z),n.add(c),yt(c,Lt(Ii.w,.92,Ii.d-.08),t.trim,0,.46,0),yt(c,Lt(Ii.w,.07,Ii.d),t.desk,0,.95,0,{receive:!0}),yt(c,Lt(.36,.38,.28),t.metal,-.42,1.18,0),yt(c,Lt(.12,.08,.06),t.dark,-.42,1.02,.16),yt(c,new Dn(.055,.045,.09,6),t.desk,.18,1.03,.08),yt(c,new Dn(.05,.04,.08,6),t.body,.38,1.03,.02),yt(n,new Dn(.22,.22,.4,8),t.desk,-.95,.2,.35,{receive:!0}),yt(n,new Dn(.05,.04,.08,6),t.body,-.95,.44,.35);const d=yt(n,new Jn(.46,1),t.desk,-6.45,.28,4.7,{receive:!0});d.scale.y=.72;const m=new pe;m.position.set(6.45,0,4.45),m.rotation.y=-.5,n.add(m),yt(m,Lt(.06,1.45,.06),t.trim,-.28,.72,0),yt(m,Lt(.06,1.45,.06),t.trim,.28,.72,0),yt(m,Lt(.7,.06,.06),t.trim,0,1.35,0);const h=dr(.7,.9,"art",1);h.mesh.position.set(0,.95,.04),h.owner="chatgpt",m.add(h.mesh),e.push(h),yt(m,Lt(.62,.04,.08),t.metal,0,.42,.04),ea(n,t,e,7.9,1.55,2.35),ea(n,t,e,7.9,1.55,3.4),ea(n,t,e,7.9,1.55,4.45),ss(n,t,-1.55,-5.25,2.1,0),ss(n,t,2.35,-5.25,1.8,0),ss(n,t,.15,5.25,2.4,0),ss(n,t,-6.85,.1,1.5,Math.PI/2),ss(n,t,6.85,-.15,1.35,Math.PI/2),ui(n,t,-7.15,-5.15,1.15),ui(n,t,7.15,-5.15,1),ui(n,t,-7.2,5.15,1.05),ui(n,t,7.25,4.9,.9),ui(n,t,-4.5,-5.35,.85),ui(n,t,4.9,5.2,.8),yt(n,new Dn(.045,.04,.16,6),t.desk,Pn.sonny.desk.x+.85,.86,Pn.sonny.desk.z+.2);const p=yt(n,Lt(.18,.02,.02),m_(12887412),Pn.sonny.desk.x+.55,.79,Pn.sonny.desk.z+.15);p.rotation.y=.6;const v=p_(n,t);return{chairs:i,screens:e,cabinet:v}}function d_(n){n.traverse(t=>{t.userData.cabinet=!0})}function f_(){const n=document.createElement("canvas");n.width=384,n.height=96;const t=n.getContext("2d");t.fillStyle="rgba(255,255,255,0.95)",t.beginPath(),t.roundRect(8,16,368,64,32),t.fill(),t.fillStyle="#3a3a3a",t.font='600 36px "WenQuanYi Micro Hei", "PingFang TC", "Noto Sans TC", sans-serif',t.textAlign="center",t.textBaseline="middle",t.fillText("專案檔案櫃",192,48);const e=new _r(n);e.colorSpace=Ne;const i=new Tc(new ao({map:e,transparent:!0,depthWrite:!1}));return i.scale.set(1.2,.3,1),i.position.set(0,1.48,0),i.center.set(.5,0),i}function p_(n,t){const e=new pe;e.position.set(-5.45,0,.55),e.rotation.y=Math.PI/2,n.add(e),yt(e,Lt(.78,1.12,.42),t.desk,0,.62,0,{receive:!0}),yt(e,Lt(.82,.06,.46),t.wall,0,1.2,0,{receive:!0});const i=[.96,.66,.36];for(const r of i)yt(e,Lt(.68,.24,.03),t.trim,0,r,.22),yt(e,Lt(.12,.035,.03),t.dark,0,r,.245,{cast:!0});for(const r of[-1,1])for(const a of[-1,1])yt(e,Lt(.06,.08,.06),t.metal,r*.32,.04,a*.16);const s=new _e(new oe(.9,1.4,.7),new qi({visible:!1}));return s.position.y=.7,e.add(s),e.add(f_()),d_(e),e}function m_(n){return new fo({color:n,flatShading:!0})}async function __(){const n=new URL("./office/status.json",window.location.href),t=await fetch(n,{cache:"no-store"});if(!t.ok)throw new Error(`status ${t.status}`);return t.json()}const Yc="ai-office.hud",qc="(max-width: 720px), (max-height: 520px)";function Wl(n){const t=new Date(n);return Number.isNaN(t.getTime())?n||"":new Intl.DateTimeFormat("zh-Hant",{timeZone:"Asia/Taipei",year:"numeric",month:"numeric",day:"numeric",hour:"2-digit",minute:"2-digit",hourCycle:"h23"}).format(t)}function g_(n){return n==="視察中"?"視察":n||"…"}function Xl(){try{const n=localStorage.getItem(Yc);if(n==="1"||n==="0")return n==="1"}catch{}return null}function x_(n){try{localStorage.setItem(Yc,n?"1":"0")}catch{}}function Yl(){return window.matchMedia(qc).matches}function v_(n,{onSelect:t,onClear:e}){n.innerHTML=`
    <div class="bar" id="bar">
      <button type="button" class="bar-toggle" id="bar-toggle" aria-expanded="true" aria-controls="stack">
        <span class="chev" aria-hidden="true"></span>
        <span class="pill-title">AI 辦公室</span>
        <span class="mini" id="mini"></span>
      </button>
      <button type="button" class="file-btn" id="file-btn" aria-label="專案檔案櫃">📁</button>
    </div>
    <p id="banner" class="banner" hidden></p>
    <div class="stack" id="stack">
      <section class="card roster-card" aria-label="辦公室的人">
        <p class="hint">拖曳旋轉 · 滾輪或雙指縮放</p>
        <div class="roster-tools">
          <button type="button" class="file-btn file-wide" aria-label="專案檔案櫃">📁 專案檔案</button>
        </div>
        <div id="roster"></div>
      </section>
      <section class="card detail" id="detail" hidden></section>
    </div>
  `;const i=document.createElement("section");i.id="files",i.hidden=!0,i.setAttribute("aria-label","專案檔案櫃");const s=document.createElement("section");s.id="talk",s.hidden=!0,document.querySelector("#app").append(i,s);const r=n.querySelector("#bar-toggle"),a=n.querySelector(".chev"),o=n.querySelector("#mini"),l=n.querySelector("#roster"),c=n.querySelector("#detail"),d=n.querySelector("#banner"),m=new Map,h=window.matchMedia(qc);for(const G of ur){const at=cs[G],nt=document.createElement("button");nt.type="button",nt.className="row",nt.dataset.id=G;const dt=`#${Wc[G].toString(16).padStart(6,"0")}`;nt.innerHTML=`
      <i class="dot" style="background:${dt}"></i>
      <span class="who"><b></b><small></small></span>
      <span class="state"></span>
    `,nt.querySelector("b").textContent=at.name,nt.querySelector("small").textContent=at.role,nt.addEventListener("click",()=>t(G)),l.append(nt),m.set(G,nt);const gt=document.createElement("span");gt.className="chip",gt.innerHTML=`<i class="dot" style="background:${dt}"></i><b></b>`,o.append(gt),m.set(`${G}:chip`,gt)}let p=Xl()??Yl();function v(){return h.matches?p?"▲":"▼":p?"▼":"▲"}function E(){n.classList.toggle("collapsed",p),r.setAttribute("aria-expanded",p?"false":"true"),r.setAttribute("aria-label",p?"展開名單":"收合名單"),a.textContent=v()}function f(G,at){p=G,E(),at&&x_(p)}r.addEventListener("click",()=>f(!p,!0)),n.querySelectorAll(".file-btn").forEach(G=>{G.addEventListener("click",at=>{at.stopPropagation(),ue()})}),h.addEventListener("change",()=>{Xl()===null?f(Yl(),!1):E()}),E(),c.addEventListener("click",G=>{G.target.closest(".close")&&e()});function u(G){H=G,d.hidden=!G.error,d.textContent=G.error||"",n.classList.toggle("has-detail",!1);for(const at of ur){const nt=G.people.find(Ot=>Ot.id===at),dt=m.get(at),gt=m.get(`${at}:chip`),Dt=nt?.state||"…";dt.classList.toggle("on",G.selected===at),dt.querySelector(".state").textContent=Dt,gt.querySelector("b").textContent=g_(Dt)}c.hidden=!0,W&&xt()}const S=["全部","暫停","閒置","上線"];let A="全部",y=null,w="",b=!1;function _(G){return A==="暫停"?G.status==="暫停":A==="閒置"?G.status==="閒置":A==="上線"?!!G.playUrl:!0}function M(){i.replaceChildren();const G=document.createElement("div");G.className="files-head";const at=document.createElement("h2");at.textContent="專案檔案櫃";const nt=document.createElement("button");nt.type="button",nt.className="close",nt.setAttribute("aria-label","關閉"),nt.textContent="×",nt.addEventListener("click",()=>{b=!1,i.hidden=!0}),G.append(at,nt);const dt=document.createElement("div");dt.className="file-tabs";for(const Dt of S){const Ot=document.createElement("button");Ot.type="button",Ot.className="file-tab",Ot.textContent=Dt,Ot.classList.toggle("on",Dt===A),Ot.addEventListener("click",()=>{A=Dt,M()}),dt.append(Ot)}const gt=document.createElement("div");if(gt.className="files-body",w){const Dt=document.createElement("p");Dt.className="empty",Dt.textContent=w,gt.append(Dt)}else if(y){const Dt=y.filter(_);if(!Dt.length){const Ot=document.createElement("p");Ot.className="empty",Ot.textContent="這個分類沒有專案。",gt.append(Ot)}for(const Ot of Dt)gt.append(D(Ot))}else{const Dt=document.createElement("p");Dt.className="empty",Dt.textContent="讀取中…",gt.append(Dt)}i.append(G,dt,gt)}function D(G){const at=document.createElement("article");at.className="file-card";const nt=document.createElement("div");nt.className="file-top";const dt=document.createElement("h3");dt.textContent=G.name||G.id||"未命名";const gt=document.createElement("span");gt.className=`badge badge-${G.status||"unknown"}`,gt.textContent=G.status||"待確認",nt.append(dt,gt),at.append(nt);const Dt=[["",G.summary||""],["停在哪",G.stoppedAt||"待確認"],["下一步",G.next||"待確認"],["更新",G.updatedAt||""]];for(const[Ot,$t]of Dt){if(!$t)continue;const le=document.createElement("p");if(Ot){const se=document.createElement("span");se.className="k",se.textContent=Ot,le.append(se,document.createTextNode(` ${$t}`))}else le.textContent=$t;at.append(le)}if(G.playUrl&&String(G.playUrl).startsWith("https://")){const Ot=document.createElement("a");Ot.href=G.playUrl,Ot.target="_blank",Ot.rel="noopener noreferrer",Ot.textContent="打開試玩",at.append(Ot)}return at}const C="ai-office.ideas",N="https://github.com/a413207-ui/Ai-agent-/issues/new",F={sonny:{name:"Sonny",label:"for-grok"},grok:{name:"Grok Bot",label:"for-grok"},claude:{name:"Claude",label:"for-claude"},chatgpt:{name:"ChatGPT",label:"for-chatgpt"}};let W=!1,P=null,H={people:[]};function q(){try{const G=JSON.parse(localStorage.getItem(C)||"{}");return{draft:typeof G.draft=="string"?G.draft:"",items:Array.isArray(G.items)?G.items.filter(at=>at&&typeof at.text=="string"):[]}}catch{return{draft:"",items:[]}}}function V(G){try{localStorage.setItem(C,JSON.stringify({draft:G.draft||"",items:G.items||[]}))}catch{}}function et(){return new Intl.DateTimeFormat("zh-Hant",{timeZone:"Asia/Taipei",year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",hourCycle:"h23"}).format(new Date)}function X({title:G,body:at,labels:nt}){const dt=String(at||"").slice(0,6e3),gt=`${N}?title=${encodeURIComponent(G)}&body=${encodeURIComponent(dt)}&labels=${encodeURIComponent(nt.join(","))}`;gt.startsWith(N)&&window.open(gt,"_blank","noopener,noreferrer")}function j(G,at){const nt=String(at||"").split(`
`).map(gt=>gt.trim()).find(Boolean)||"未命名",dt=nt.length>72?`${nt.slice(0,72)}…`:nt;return`${G}${dt}`}function tt(){W=!1,P=null,s.hidden=!0}function wt(){b=!1,i.hidden=!0}function Ft(G,at){const nt=document.createElement("div");nt.className="files-head";const dt=document.createElement("h2");dt.textContent=G;const gt=document.createElement("button");return gt.type="button",gt.className="close",gt.setAttribute("aria-label","關閉"),gt.textContent="×",gt.addEventListener("click",at),nt.append(dt,gt),nt}function Z(){const G=document.createElement("p");return G.className="send-hint",G.textContent="會打開 GitHub，按 Submit 就送出",G}function mt(){s.replaceChildren(),s.setAttribute("aria-label","Sonny 的想法");const G=q(),at=document.createElement("div");at.className="files-body";const nt=document.createElement("textarea");nt.className="idea-box",nt.rows=4,nt.placeholder="寫一個想法…",nt.value=G.draft,nt.addEventListener("input",()=>{const gt=q();gt.draft=nt.value,V(gt)});const dt=document.createElement("button");if(dt.type="button",dt.className="send-btn",dt.textContent="存成一則",dt.addEventListener("click",()=>{const gt=nt.value.trim();if(!gt)return;const Dt=q();Dt.items.unshift({id:`${Date.now()}`,text:gt,createdAt:new Date().toISOString()}),Dt.draft="",V(Dt),mt()}),at.append(nt,dt),!G.items.length){const gt=document.createElement("p");gt.className="empty",gt.textContent="還沒有存下來的想法。",at.append(gt)}for(const gt of G.items){const Dt=document.createElement("article");Dt.className="file-card";const Ot=document.createElement("p");Ot.textContent=gt.text;const $t=document.createElement("p");$t.className="time",$t.textContent=gt.createdAt?Wl(gt.createdAt):"";const le=document.createElement("button");le.type="button",le.className="send-btn",le.textContent="送出給 Grok",le.addEventListener("click",()=>{X({title:j("[想法] ",gt.text),body:`給：Grok Bot
時間：${et()}

${gt.text}`,labels:["idea","for-grok"]})}),Dt.append(Ot,$t,le,Z()),at.append(Dt)}s.append(Ft("Sonny 的想法",tt),at)}function Et(G,at){if(Number.isFinite(G.progress)){const nt=document.createElement("p"),dt=document.createElement("span");dt.className="k",dt.textContent="進度",nt.append(dt,document.createTextNode(` ${Math.round(G.progress)}%`));const gt=document.createElement("span");gt.className="meter";const Dt=document.createElement("i");Dt.style.width=`${Math.max(0,Math.min(100,G.progress))}%`,gt.append(Dt),nt.append(gt),at.append(nt)}if(Array.isArray(G.done)&&G.done.length){const nt=document.createElement("p"),dt=document.createElement("span");dt.className="k",dt.textContent="最近做完",nt.append(dt),at.append(nt);const gt=document.createElement("ul");gt.className="done-list";for(const Dt of G.done){const Ot=document.createElement("li");Ot.textContent=String(Dt),gt.append(Ot)}at.append(gt)}if(G.next){const nt=document.createElement("p"),dt=document.createElement("span");dt.className="k",dt.textContent="下一步",nt.append(dt,document.createTextNode(` ${G.next}`)),at.append(nt)}}function It(G){s.replaceChildren();const at=F[G.id]||{name:G.name,label:"task"};s.setAttribute("aria-label",at.name);const nt=document.createElement("div");nt.className="files-body";const dt=document.createElement("p");dt.className="role",dt.textContent=G.role||"";const gt=document.createElement("p"),Dt=document.createElement("span");Dt.className="k",Dt.textContent="狀態",gt.append(Dt,document.createTextNode(` ${G.state||"…"}`));const Ot=document.createElement("p"),$t=document.createElement("span");if($t.className="k",$t.textContent="正在做",Ot.append($t,document.createTextNode(` ${G.task||"待確認"}`)),nt.append(dt,gt,Ot),G.away){const re=document.createElement("p");re.className="away",re.textContent="人暫時離席，等一下會回來工作。",nt.append(re)}if(Et(G,nt),G.updatedAt){const re=document.createElement("p");re.className="time",re.textContent=`更新 ${Wl(G.updatedAt)}`,nt.append(re)}if(G.id==="grok"){const re=document.createElement("p");if(y){const Me={進行中:0,暫停:0,閒置:0,已上線:0};for(const I of y)Me[I.status]!==void 0&&(Me[I.status]+=1);re.textContent=`整體：進行中 ${Me.進行中}、暫停 ${Me.暫停}、閒置 ${Me.閒置}、已上線 ${Me.已上線}。`}else re.textContent="整體專案進度在檔案櫃。";const Ae=document.createElement("button");Ae.type="button",Ae.className="send-btn",Ae.textContent="打開專案檔案櫃",Ae.addEventListener("click",()=>ue()),nt.append(re,Ae)}const le=document.createElement("textarea");le.className="idea-box",le.rows=4,le.placeholder="要派的工作…";const se=document.createElement("button");se.type="button",se.className="send-btn",se.textContent=`派給${at.name}`,se.addEventListener("click",()=>{const re=le.value.trim();re&&X({title:j(`[派工給 ${at.name}] `,re),body:`給：${at.name}
時間：${et()}

${re}`,labels:["task",at.label]})}),nt.append(le,se,Z()),s.append(Ft(at.name,tt),nt)}function xt(){if(!W||!P)return;if(P==="sonny"){mt();return}const G=(H.people||[]).find(gt=>gt.id===P);if(!G)return;const at=s.querySelector(".idea-box"),nt=at?at.value:"";It(G);const dt=s.querySelector(".idea-box");dt&&nt&&(dt.value=nt)}function zt(G){if(wt(),W=!0,P=G,s.hidden=!1,H=H||{people:[]},G==="sonny")mt();else{const at=(H.people||[]).find(nt=>nt.id===G)||{id:G,name:cs[G]?.name||G,role:cs[G]?.role||"",state:"…",task:""};It(at)}}async function ue(){if(tt(),b=!0,i.hidden=!1,w="",M(),!y){try{const G=new URL("./office/projects.json",window.location.href),at=await fetch(G,{cache:"no-store"});if(!at.ok)throw new Error(String(at.status));const nt=await at.json();y=Array.isArray(nt?.projects)?nt.projects:[]}catch{w="讀不到 office/projects.json",y=[]}b&&M()}}return{render:u,openCabinet:ue,openPerson:zt}}const Xi=document.querySelector("#view"),ni=new b0({canvas:Xi,antialias:!0});ni.setPixelRatio(Math.min(window.devicePixelRatio||1,1.75));ni.setSize(window.innerWidth,window.innerHeight);ni.shadowMap.enabled=!0;ni.shadowMap.type=os;ni.outputColorSpace=Ne;ni.setClearColor(14606046);Xi.style.touchAction="none";const On=new nu;On.background=new Zt(14606046);const fn=new un(42,1,.1,80);fn.position.set(7.4,5.5,8.6);const Qe=new A0(fn,Xi);Qe.target.set(.2,.85,-.15);Qe.enableDamping=!0;Qe.dampingFactor=.08;Qe.maxPolarAngle=Math.PI/2-.05;Qe.minDistance=3.4;Qe.maxDistance=18;Qe.update();On.add(new bu(16777215,1.45));On.add(new Su(16777215,13619151,.45));const We=new Eu(16775926,2.55);We.position.set(-7.2,8.2,6.4);We.castShadow=!0;We.shadow.mapSize.set(window.innerWidth<800?1024:2048,window.innerWidth<800?1024:2048);We.shadow.camera.near=.5;We.shadow.camera.far=36;const vr=12;We.shadow.camera.left=-vr;We.shadow.camera.right=vr;We.shadow.camera.top=vr;We.shadow.camera.bottom=-vr;We.shadow.bias=-2e-4;We.shadow.normalBias=.035;We.shadow.radius=3;We.target.position.set(0,.2,-.4);On.add(We);On.add(We.target);const Kc=k0(),Sr=u_(On,Kc),je={},xo=[];for(const n of ur){const t=G0({id:n,mats:Kc,accentHex:Wc[n],accessory:Pn[n].accessory,name:cs[n].label});On.add(t.anchor),xo.push(t.anchor),je[n]=new Y0({id:n,anchor:t.anchor,rig:t.rig,chair:Sr.chairs[n],layout:Pn[n]})}const In=new _e(new ho(.42,.52,6),new qi({color:16777215,side:xn,transparent:!0,opacity:.85}));In.rotation.x=-Math.PI/2;In.position.y=.03;In.visible=!1;On.add(In);xo.push(Sr.cabinet);const vo=v_(document.querySelector("#hud"),{onSelect:n=>So(n),onClear:()=>S_()});let Ye=null,ps=null,Ka="",fr="";function S_(){Ye&&(Ye.selected=!1),Ye=null,ps=null,fr=""}function So(n){je[n]&&(Ye&&Ye!==je[n]&&(Ye.selected=!1),Ye=je[n],Ye.selected=!0,ps=new U(Ye.pos.x,.9,Ye.pos.z),fr="",vo.openPerson(n))}const ql=new Ru,na=new Ct;let Ui=null;Xi.addEventListener("pointerdown",n=>{Ui={x:n.clientX,y:n.clientY,id:n.pointerId}});Xi.addEventListener("pointerup",n=>{if(!Ui||Ui.id!==n.pointerId)return;const t=Math.hypot(n.clientX-Ui.x,n.clientY-Ui.y);if(Ui=null,t>8)return;const e=Xi.getBoundingClientRect();na.x=(n.clientX-e.left)/e.width*2-1,na.y=-((n.clientY-e.top)/e.height)*2+1,ql.setFromCamera(na,fn);const s=ql.intersectObjects(xo,!0)[0]?.object;if(s){if(s.userData.cabinet){vo.openCabinet();return}s.userData.id&&So(s.userData.id)}});Qe.addEventListener("start",()=>{ps=null});function Zc(){const n=window.innerWidth,t=window.innerHeight;fn.aspect=n/Math.max(t,1),fn.fov=t<520?46:40,fn.updateProjectionMatrix(),ni.setSize(n,t)}window.addEventListener("resize",Zc);Zc();function M_(){return{error:Ka,selected:Ye?.id||null,people:ur.map(n=>{const t=je[n],e=cs[n];return{id:n,name:e.name,role:e.role,state:t.official||"…",task:t.task,updatedAt:t.updatedAt,away:t.simSlack,progress:t.progress,done:t.done||[],next:t.next||""}})}}function $c(){const n=M_(),t=JSON.stringify(n);t!==fr&&(fr=t,vo.render(n))}async function Jc(){try{const n=await __();Ka="";const t=Array.isArray(n?.people)?n.people:[];for(const e of t){const i=je[e.id];i&&(i.ready?i.applyStatus(e):i.placeInitial(e))}}catch{Ka="讀不到 office/status.json。請用這個專案的開發伺服器或建置後的預覽打開。";for(const n of Object.values(je))n.ready||n.placeInitial({state:"",task:"",updatedAt:""})}$c()}await Jc();setInterval(Jc,1e4);document.fonts?.ready&&document.fonts.ready.then(()=>{for(const n of Sr.screens)n.last=-10});const nr=new Au;nr.connect(document);const Kl=new he,Zl=new Hi;function Qc(n){nr.update(n);const t=Math.min(nr.getDelta(),.05);for(const e of Object.values(je))e.update(t);ps&&Qe.target.lerp(ps,.08),Qe.update(),Ye?(In.visible=!0,In.position.x=Ye.pos.x,In.position.z=Ye.pos.z,In.rotation.z+=t*.4):In.visible=!1,Kl.multiplyMatrices(fn.projectionMatrix,fn.matrixWorldInverse),Zl.setFromProjectionMatrix(Kl),o_(Sr.screens,nr.getElapsed(),{isOn(e){const i=je[e.owner];return i?i.activity==="work"||e.kind==="overview":!1},isPlaying(e){const i=je[e.owner];return!!(e.playable&&i&&i.activity==="play")},isVisible(e){return e.mesh.updateWorldMatrix(!0,!1),Zl.intersectsObject(e.mesh)}}),ni.render(On,fn),$c(),requestAnimationFrame(Qc)}requestAnimationFrame(Qc);const y_=new URLSearchParams(window.location.search).has("debug");y_&&(window.__office={ready:!0,agents:je,camera:fn,controls:Qe,select:So,look(n,t,e,i,s,r){fn.position.set(n,t,e),Qe.target.set(i,s,r),Qe.update()},setState(n,t,e){const i=je[n];i.applyStatus({state:t,task:e??i.task,updatedAt:new Date().toISOString()})},snapshot(){return Object.fromEntries(Object.values(je).map(n=>[n.id,{state:n.official,activity:n.activity,pose:n.pose,x:Number(n.pos.x.toFixed(3)),z:Number(n.pos.z.toFixed(3)),simSlack:n.simSlack,task:n.task}]))}});
