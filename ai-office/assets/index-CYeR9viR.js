(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();const io="187",Xi={ROTATE:0,DOLLY:1,PAN:2},Wi={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},dh=0,Vo=1,fh=2,fs=1,ph=2,us=3,Si=0,je=1,En=2,Yi=0,ps=1,Wo=2,Xo=3,Yo=4,mh=5,Hi=100,_h=101,gh=102,xh=103,vh=104,Sh=200,Mh=201,yh=202,Eh=203,sc=204,rc=205,bh=206,Th=207,wh=208,Ah=209,Rh=210,Ch=211,Ph=212,Lh=213,Dh=214,ha=0,ua=1,da=2,_s=3,fa=4,pa=5,ma=6,_a=7,so=0,Ih=1,Nh=2,zn=0,ac=1,oc=2,lc=3,cc=4,hc=5,uc=6,dc=7,fc=300,Ki=301,gs=302,Cr=303,Pr=304,ga=1e3,Bn=1001,xa=1002,Ie=1003,Uh=1004,Ts=1005,Ke=1006,Lr=1007,Qn=1008,sn=1009,pc=1010,mc=1011,xs=1012,ro=1013,An=1014,bn=1015,Rn=1016,ao=1017,oo=1018,Zi=1020,_c=35902,gc=35899,xc=1021,vc=1022,Tn=1023,ii=1026,jn=1027,Sc=1028,lo=1029,Mi=1030,co=1031,ho=1033,er=33776,nr=33777,ir=33778,sr=33779,va=35840,Sa=35841,Ma=35842,ya=35843,Ea=36196,ba=37492,Ta=37496,wa=37488,Aa=37489,cr=37490,Ra=37491,Ca=37808,Pa=37809,La=37810,Da=37811,Ia=37812,Na=37813,Ua=37814,Fa=37815,Oa=37816,Ba=37817,za=37818,ka=37819,Ga=37820,Ha=37821,Va=36492,Wa=36494,Xa=36495,Ya=36283,qa=36284,hr=36285,Ka=36286,Fh=3200,Za=0,Oh=1,Jn="",Oe="srgb",ur="srgb-linear",dr="linear",le="srgb",Dr=7680,Bh=519,zh=512,kh=513,Gh=514,Mc=515,Hh=516,Vh=517,yc=518,Ec=519,bc=35044,qo="300 es",xn=2e3,vs=2001;function Wh(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function fr(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Xh(){const n=fr("canvas");return n.style.display="block",n}const Ko={};function pr(...n){const t="THREE."+n.shift();console.log(t,...n)}function Tc(n){const t=n[0];if(typeof t=="string"&&t.startsWith("TSL:")){const e=n[1];e&&e.isStackTrace?n[0]+=" "+e.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function kt(...n){n=Tc(n);const t="THREE."+n.shift();{const e=n[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...n)}}function ne(...n){n=Tc(n);const t="THREE."+n.shift();{const e=n[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...n)}}function rr(...n){const t=n.join(" ");t in Ko||(Ko[t]=!0,kt(...n))}function Yh(n,t,e){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(t,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:i()}}setTimeout(r,e)})}const qh={[ha]:ha,[da]:ma,[fa]:fa,[_s]:pa,[ua]:ua,[ma]:da,[_a]:_a,[pa]:_s};class li{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){const i=this._listeners;return i===void 0?!1:i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){const i=this._listeners;if(i===void 0)return;const s=i[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const i=e[t.type];if(i!==void 0){t.target=this;const s=i.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}}const Ge=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],ar=Math.PI/180,$a=180/Math.PI;function bi(){const n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Ge[n&255]+Ge[n>>8&255]+Ge[n>>16&255]+Ge[n>>24&255]+"-"+Ge[t&255]+Ge[t>>8&255]+"-"+Ge[t>>16&15|64]+Ge[t>>24&255]+"-"+Ge[e&63|128]+Ge[e>>8&255]+"-"+Ge[e>>16&255]+Ge[e>>24&255]+Ge[i&255]+Ge[i>>8&255]+Ge[i>>16&255]+Ge[i>>24&255]).toLowerCase()}function $t(n,t,e){return Math.max(t,Math.min(e,n))}function Kh(n,t){return(n%t+t)%t}function Ir(n,t,e){return(1-e)*n+e*t}function Zh(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function Mr(n){switch(n.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function wc(n,t){if(t.constructor===Float32Array)return n;const e=Mr(t);if(e===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(n/e,-1)}function Ac(n,t){if(t.constructor===Float32Array)return n;const e=Mr(t);if(e===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(n*e)}const $h={DEG2RAD:ar},Ro=class Ro{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,i=this.y,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6],this.y=s[1]*e+s[4]*i+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=$t(this.x,t.x,e.x),this.y=$t(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=$t(this.x,t,e),this.y=$t(this.y,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar($t(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos($t(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const i=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*i-a*s+t.x,this.y=r*s+a*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Ro.prototype.isVector2=!0;let Dt=Ro;class si{constructor(t=0,e=0,i=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=s}static slerpFlat(t,e,i,s,r,a,o){let l=i[s+0],c=i[s+1],f=i[s+2],m=i[s+3],h=r[a+0],p=r[a+1],x=r[a+2],E=r[a+3];if(m!==E||l!==h||c!==p||f!==x){let d=l*h+c*p+f*x+m*E;d<0&&(h=-h,p=-p,x=-x,E=-E,d=-d);let u=1-o;if(d<.9995){const S=Math.acos(d),w=Math.sin(S);u=Math.sin(u*S)/w,o=Math.sin(o*S)/w,l=l*u+h*o,c=c*u+p*o,f=f*u+x*o,m=m*u+E*o}else{l=l*u+h*o,c=c*u+p*o,f=f*u+x*o,m=m*u+E*o;const S=1/Math.sqrt(l*l+c*c+f*f+m*m);l*=S,c*=S,f*=S,m*=S}}t[e]=l,t[e+1]=c,t[e+2]=f,t[e+3]=m}static multiplyQuaternionsFlat(t,e,i,s,r,a){const o=i[s],l=i[s+1],c=i[s+2],f=i[s+3],m=r[a],h=r[a+1],p=r[a+2],x=r[a+3];return t[e]=o*x+f*m+l*p-c*h,t[e+1]=l*x+f*h+c*m-o*p,t[e+2]=c*x+f*p+o*h-l*m,t[e+3]=f*x-o*m-l*h-c*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,s){return this._x=t,this._y=e,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const i=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(i/2),f=o(s/2),m=o(r/2),h=l(i/2),p=l(s/2),x=l(r/2);switch(a){case"XYZ":this._x=h*f*m+c*p*x,this._y=c*p*m-h*f*x,this._z=c*f*x+h*p*m,this._w=c*f*m-h*p*x;break;case"YXZ":this._x=h*f*m+c*p*x,this._y=c*p*m-h*f*x,this._z=c*f*x-h*p*m,this._w=c*f*m+h*p*x;break;case"ZXY":this._x=h*f*m-c*p*x,this._y=c*p*m+h*f*x,this._z=c*f*x+h*p*m,this._w=c*f*m-h*p*x;break;case"ZYX":this._x=h*f*m-c*p*x,this._y=c*p*m+h*f*x,this._z=c*f*x-h*p*m,this._w=c*f*m+h*p*x;break;case"YZX":this._x=h*f*m+c*p*x,this._y=c*p*m+h*f*x,this._z=c*f*x-h*p*m,this._w=c*f*m-h*p*x;break;case"XZY":this._x=h*f*m-c*p*x,this._y=c*p*m-h*f*x,this._z=c*f*x+h*p*m,this._w=c*f*m+h*p*x;break;default:kt("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const i=e/2,s=Math.sin(i);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,i=e[0],s=e[4],r=e[8],a=e[1],o=e[5],l=e[9],c=e[2],f=e[6],m=e[10],h=i+o+m;if(h>0){const p=.5/Math.sqrt(h+1);this._w=.25/p,this._x=(f-l)*p,this._y=(r-c)*p,this._z=(a-s)*p}else if(i>o&&i>m){const p=2*Math.sqrt(1+i-o-m);this._w=(f-l)/p,this._x=.25*p,this._y=(s+a)/p,this._z=(r+c)/p}else if(o>m){const p=2*Math.sqrt(1+o-i-m);this._w=(r-c)/p,this._x=(s+a)/p,this._y=.25*p,this._z=(l+f)/p}else{const p=2*Math.sqrt(1+m-i-o);this._w=(a-s)/p,this._x=(r+c)/p,this._y=(l+f)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<1e-8?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs($t(this.dot(t),-1,1)))}rotateTowards(t,e){const i=this.angleTo(t);if(i===0)return this;const s=Math.min(1,e/i);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const i=t._x,s=t._y,r=t._z,a=t._w,o=e._x,l=e._y,c=e._z,f=e._w;return this._x=i*f+a*o+s*c-r*l,this._y=s*f+a*l+r*o-i*c,this._z=r*f+a*c+i*l-s*o,this._w=a*f-i*o-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){let i=t._x,s=t._y,r=t._z,a=t._w,o=this.dot(t);o<0&&(i=-i,s=-s,r=-r,a=-a,o=-o);let l=1-e;if(o<.9995){const c=Math.acos(o),f=Math.sin(c);l=Math.sin(l*c)/f,e=Math.sin(e*c)/f,this._x=this._x*l+i*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+a*e,this._onChangeCallback()}else this._x=this._x*l+i*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+a*e,this.normalize();return this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const Co=class Co{constructor(t=0,e=0,i=0){this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Zo.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Zo.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6]*s,this.y=r[1]*e+r[4]*i+r[7]*s,this.z=r[2]*e+r[5]*i+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,i=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*i+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*i+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*i+r[10]*s+r[14])*a,this}applyQuaternion(t){const e=this.x,i=this.y,s=this.z,r=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*s-o*i),f=2*(o*e-r*s),m=2*(r*i-a*e);return this.x=e+l*c+a*m-o*f,this.y=i+l*f+o*c-r*m,this.z=s+l*m+r*f-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*i+r[8]*s,this.y=r[1]*e+r[5]*i+r[9]*s,this.z=r[2]*e+r[6]*i+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=$t(this.x,t.x,e.x),this.y=$t(this.y,t.y,e.y),this.z=$t(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=$t(this.x,t,e),this.y=$t(this.y,t,e),this.z=$t(this.z,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar($t(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const i=t.x,s=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=s*l-r*o,this.y=r*a-i*l,this.z=i*o-s*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return Nr.copy(this).projectOnVector(t),this.sub(Nr)}reflect(t){return this.sub(Nr.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos($t(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y,s=this.z-t.z;return e*e+i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){const s=Math.sin(e)*t;return this.x=s*Math.sin(i),this.y=Math.cos(e)*t,this.z=s*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Co.prototype.isVector3=!0;let F=Co;const Nr=new F,Zo=new si,Po=class Po{constructor(t,e,i,s,r,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,a,o,l,c)}set(t,e,i,s,r,a,o,l,c){const f=this.elements;return f[0]=t,f[1]=s,f[2]=o,f[3]=e,f[4]=r,f[5]=l,f[6]=i,f[7]=a,f[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,s=e.elements,r=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],f=i[4],m=i[7],h=i[2],p=i[5],x=i[8],E=s[0],d=s[3],u=s[6],S=s[1],w=s[4],y=s[7],A=s[2],b=s[5],_=s[8];return r[0]=a*E+o*S+l*A,r[3]=a*d+o*w+l*b,r[6]=a*u+o*y+l*_,r[1]=c*E+f*S+m*A,r[4]=c*d+f*w+m*b,r[7]=c*u+f*y+m*_,r[2]=h*E+p*S+x*A,r[5]=h*d+p*w+x*b,r[8]=h*u+p*y+x*_,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],f=t[8];return e*a*f-e*o*c-i*r*f+i*o*l+s*r*c-s*a*l}invert(){const t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],f=t[8],m=f*a-o*c,h=o*l-f*r,p=c*r-a*l,x=e*m+i*h+s*p;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);const E=1/x;return t[0]=m*E,t[1]=(s*c-f*i)*E,t[2]=(o*i-s*a)*E,t[3]=h*E,t[4]=(f*e-s*l)*E,t[5]=(s*r-o*e)*E,t[6]=p*E,t[7]=(i*l-c*e)*E,t[8]=(a*e-i*r)*E,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,s,r,a,o){const l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*a+c*o)+a+t,-s*c,s*l,-s*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return rr("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Ur.makeScale(t,e)),this}rotate(t){return rr("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Ur.makeRotation(-t)),this}translate(t,e){return rr("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Ur.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,i=t.elements;for(let s=0;s<9;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}};Po.prototype.isMatrix3=!0;let Gt=Po;const Ur=new Gt,$o=new Gt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Jo=new Gt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Jh(){const n={enabled:!0,workingColorSpace:ur,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===le&&(s.r=kn(s.r),s.g=kn(s.g),s.b=kn(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===le&&(s.r=qi(s.r),s.g=qi(s.g),s.b=qi(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Jn?dr:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[a].fromXYZ).multiply(this.spaces[r].toXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[ur]:{primaries:t,whitePoint:i,transfer:dr,toXYZ:$o,fromXYZ:Jo,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Oe},outputColorSpaceConfig:{drawingBufferColorSpace:Oe}},[Oe]:{primaries:t,whitePoint:i,transfer:le,toXYZ:$o,fromXYZ:Jo,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Oe}}}),n}const te=Jh();function kn(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function qi(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let wi;class Qh{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let i;if(t instanceof HTMLCanvasElement)i=t;else{wi===void 0&&(wi=fr("canvas")),wi.width=t.width,wi.height=t.height;const s=wi.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),i=wi}return i.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=fr("canvas");e.width=t.width,e.height=t.height;const i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);const s=i.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=kn(r[a]/255)*255;return i.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(kn(e[i]/255)*255):e[i]=kn(e[i]);return{data:e,width:t.width,height:t.height}}else return kt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let jh=0;class uo{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:jh++}),this.uuid=bi(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width||0,e.height||0,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Fr(s[a].image)):r.push(Fr(s[a]))}else r=Fr(s);i.url=r}return e||(t.images[this.uuid]=i),i}}function Fr(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Qh.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(kt("Texture: Unable to serialize Texture."),{})}let tu=0;const Or=new F;class Ve extends li{constructor(t=Ve.DEFAULT_IMAGE,e=Ve.DEFAULT_MAPPING,i=Bn,s=Bn,r=Ke,a=Qn,o=Tn,l=sn,c=Ve.DEFAULT_ANISOTROPY,f=Jn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:tu++}),this.uuid=bi(),this.name="",this.source=new uo(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Dt(0,0),this.repeat=new Dt(1,1),this.center=new Dt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Gt,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=f,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(Or).x}get height(){return this.source.getSize(Or).y}get depth(){return this.source.getSize(Or).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.mipmapsAutoUpdate=t.mipmapsAutoUpdate,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isPMREMTexture=t.isPMREMTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const e in t){const i=t[e];if(i===void 0){kt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){kt(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==fc)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case ga:t.x=t.x-Math.floor(t.x);break;case Bn:t.x=t.x<0?0:1;break;case xa:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case ga:t.y=t.y-Math.floor(t.y);break;case Bn:t.y=t.y<0?0:1;break;case xa:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Ve.DEFAULT_IMAGE=null;Ve.DEFAULT_MAPPING=fc;Ve.DEFAULT_ANISOTROPY=1;const Lo=class Lo{constructor(t=0,e=0,i=0,s=1){this.x=t,this.y=e,this.z=i,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,s){return this.x=t,this.y=e,this.z=i,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,i=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*i+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*i+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*i+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*i+a[11]*s+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,s,r;const l=t.elements,c=l[0],f=l[4],m=l[8],h=l[1],p=l[5],x=l[9],E=l[2],d=l[6],u=l[10];if(Math.abs(f-h)<.01&&Math.abs(m-E)<.01&&Math.abs(x-d)<.01){if(Math.abs(f+h)<.1&&Math.abs(m+E)<.1&&Math.abs(x+d)<.1&&Math.abs(c+p+u-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const w=(c+1)/2,y=(p+1)/2,A=(u+1)/2,b=(f+h)/4,_=(m+E)/4,M=(x+d)/4;return w>y&&w>A?w<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(w),s=b/i,r=_/i):y>A?y<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(y),i=b/s,r=M/s):A<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(A),i=_/r,s=M/r),this.set(i,s,r,e),this}let S=Math.sqrt((d-x)*(d-x)+(m-E)*(m-E)+(h-f)*(h-f));return Math.abs(S)<.001&&(S=1),this.x=(d-x)/S,this.y=(m-E)/S,this.z=(h-f)/S,this.w=Math.acos((c+p+u-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=$t(this.x,t.x,e.x),this.y=$t(this.y,t.y,e.y),this.z=$t(this.z,t.z,e.z),this.w=$t(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=$t(this.x,t,e),this.y=$t(this.y,t,e),this.z=$t(this.z,t,e),this.w=$t(this.w,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar($t(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Lo.prototype.isVector4=!0;let ve=Lo;class eu extends li{constructor(t=1,e=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ke,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=i.depth,this.scissor=new ve(0,0,t,e),this.scissorTest=!1,this.viewport=new ve(0,0,t,e),this.textures=[];const s=i.count;for(let r=0;r<s;r++)this.textures[r]=new Ve({width:t,height:e,depth:i.depth}),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(t={}){const e={minFilter:Ke,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.mipmapsAutoUpdate!==void 0&&(e.mipmapsAutoUpdate=t.mipmapsAutoUpdate),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=i,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,i=t.textures.length;e<i;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const s=Object.assign({},t.textures[e].image);this.textures[e].source=new uo(s)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){const e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;else this.depthTexture=null;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class wn extends eu{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}}class Rc extends Ve{constructor(t=null,e=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=Ie,this.minFilter=Ie,this.wrapR=Bn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class nu extends Ve{constructor(t=null,e=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=Ie,this.minFilter=Ie,this.wrapR=Bn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}}const Sr=class Sr{constructor(t,e,i,s,r,a,o,l,c,f,m,h,p,x,E,d){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,a,o,l,c,f,m,h,p,x,E,d)}set(t,e,i,s,r,a,o,l,c,f,m,h,p,x,E,d){const u=this.elements;return u[0]=t,u[4]=e,u[8]=i,u[12]=s,u[1]=r,u[5]=a,u[9]=o,u[13]=l,u[2]=c,u[6]=f,u[10]=m,u[14]=h,u[3]=p,u[7]=x,u[11]=E,u[15]=d,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Sr().fromArray(this.elements)}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){const e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),i.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();const e=this.elements,i=t.elements,s=1/Ai.setFromMatrixColumn(t,0).length(),r=1/Ai.setFromMatrixColumn(t,1).length(),a=1/Ai.setFromMatrixColumn(t,2).length();return e[0]=i[0]*s,e[1]=i[1]*s,e[2]=i[2]*s,e[3]=0,e[4]=i[4]*r,e[5]=i[5]*r,e[6]=i[6]*r,e[7]=0,e[8]=i[8]*a,e[9]=i[9]*a,e[10]=i[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,i=t.x,s=t.y,r=t.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(s),c=Math.sin(s),f=Math.cos(r),m=Math.sin(r);if(t.order==="XYZ"){const h=a*f,p=a*m,x=o*f,E=o*m;e[0]=l*f,e[4]=-l*m,e[8]=c,e[1]=p+x*c,e[5]=h-E*c,e[9]=-o*l,e[2]=E-h*c,e[6]=x+p*c,e[10]=a*l}else if(t.order==="YXZ"){const h=l*f,p=l*m,x=c*f,E=c*m;e[0]=h+E*o,e[4]=x*o-p,e[8]=a*c,e[1]=a*m,e[5]=a*f,e[9]=-o,e[2]=p*o-x,e[6]=E+h*o,e[10]=a*l}else if(t.order==="ZXY"){const h=l*f,p=l*m,x=c*f,E=c*m;e[0]=h-E*o,e[4]=-a*m,e[8]=x+p*o,e[1]=p+x*o,e[5]=a*f,e[9]=E-h*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){const h=a*f,p=a*m,x=o*f,E=o*m;e[0]=l*f,e[4]=x*c-p,e[8]=h*c+E,e[1]=l*m,e[5]=E*c+h,e[9]=p*c-x,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){const h=a*l,p=a*c,x=o*l,E=o*c;e[0]=l*f,e[4]=E-h*m,e[8]=x*m+p,e[1]=m,e[5]=a*f,e[9]=-o*f,e[2]=-c*f,e[6]=p*m+x,e[10]=h-E*m}else if(t.order==="XZY"){const h=a*l,p=a*c,x=o*l,E=o*c;e[0]=l*f,e[4]=-m,e[8]=c*f,e[1]=h*m+E,e[5]=a*f,e[9]=p*m-x,e[2]=x*m-p,e[6]=o*f,e[10]=E*m+h}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(iu,t,su)}lookAt(t,e,i){const s=this.elements;return tn.subVectors(t,e),tn.lengthSq()===0&&(tn.z=1),tn.normalize(),Wn.crossVectors(i,tn),Wn.lengthSq()===0&&(Math.abs(i.z)===1?tn.x+=1e-4:tn.z+=1e-4,tn.normalize(),Wn.crossVectors(i,tn)),Wn.normalize(),ws.crossVectors(tn,Wn),s[0]=Wn.x,s[4]=ws.x,s[8]=tn.x,s[1]=Wn.y,s[5]=ws.y,s[9]=tn.y,s[2]=Wn.z,s[6]=ws.z,s[10]=tn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,s=e.elements,r=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],f=i[1],m=i[5],h=i[9],p=i[13],x=i[2],E=i[6],d=i[10],u=i[14],S=i[3],w=i[7],y=i[11],A=i[15],b=s[0],_=s[4],M=s[8],D=s[12],R=s[1],N=s[5],U=s[9],V=s[13],P=s[2],H=s[6],X=s[10],G=s[14],et=s[3],Y=s[7],O=s[11],$=s[15];return r[0]=a*b+o*R+l*P+c*et,r[4]=a*_+o*N+l*H+c*Y,r[8]=a*M+o*U+l*X+c*O,r[12]=a*D+o*V+l*G+c*$,r[1]=f*b+m*R+h*P+p*et,r[5]=f*_+m*N+h*H+p*Y,r[9]=f*M+m*U+h*X+p*O,r[13]=f*D+m*V+h*G+p*$,r[2]=x*b+E*R+d*P+u*et,r[6]=x*_+E*N+d*H+u*Y,r[10]=x*M+E*U+d*X+u*O,r[14]=x*D+E*V+d*G+u*$,r[3]=S*b+w*R+y*P+A*et,r[7]=S*_+w*N+y*H+A*Y,r[11]=S*M+w*U+y*X+A*O,r[15]=S*D+w*V+y*G+A*$,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[4],s=t[8],r=t[12],a=t[1],o=t[5],l=t[9],c=t[13],f=t[2],m=t[6],h=t[10],p=t[14],x=t[3],E=t[7],d=t[11],u=t[15],S=l*p-c*h,w=o*p-c*m,y=o*h-l*m,A=a*p-c*f,b=a*h-l*f,_=a*m-o*f;return e*(E*S-d*w+u*y)-i*(x*S-d*A+u*b)+s*(x*w-E*A+u*_)-r*(x*y-E*b+d*_)}determinantAffine(){const t=this.elements,e=t[0],i=t[4],s=t[8],r=t[1],a=t[5],o=t[9],l=t[2],c=t[6],f=t[10];return e*(a*f-o*c)-i*(r*f-o*l)+s*(r*c-a*l)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=i),this}invert(){const t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],f=t[8],m=t[9],h=t[10],p=t[11],x=t[12],E=t[13],d=t[14],u=t[15],S=e*o-i*a,w=e*l-s*a,y=e*c-r*a,A=i*l-s*o,b=i*c-r*o,_=s*c-r*l,M=f*E-m*x,D=f*d-h*x,R=f*u-p*x,N=m*d-h*E,U=m*u-p*E,V=h*u-p*d,P=S*V-w*U+y*N+A*R-b*D+_*M;if(P===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const H=1/P;return t[0]=(o*V-l*U+c*N)*H,t[1]=(s*U-i*V-r*N)*H,t[2]=(E*_-d*b+u*A)*H,t[3]=(h*b-m*_-p*A)*H,t[4]=(l*R-a*V-c*D)*H,t[5]=(e*V-s*R+r*D)*H,t[6]=(d*y-x*_-u*w)*H,t[7]=(f*_-h*y+p*w)*H,t[8]=(a*U-o*R+c*M)*H,t[9]=(i*R-e*U-r*M)*H,t[10]=(x*b-E*y+u*S)*H,t[11]=(m*y-f*b-p*S)*H,t[12]=(o*D-a*N-l*M)*H,t[13]=(e*N-i*D+s*M)*H,t[14]=(E*w-x*A-d*S)*H,t[15]=(f*A-m*w+h*S)*H,this}scale(t){const e=this.elements,i=t.x,s=t.y,r=t.z;return e[0]*=i,e[4]*=s,e[8]*=r,e[1]*=i,e[5]*=s,e[9]*=r,e[2]*=i,e[6]*=s,e[10]*=r,e[3]*=i,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,s))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const i=Math.cos(e),s=Math.sin(e),r=1-i,a=t.x,o=t.y,l=t.z,c=r*a,f=r*o;return this.set(c*a+i,c*o-s*l,c*l+s*o,0,c*o+s*l,f*o+i,f*l-s*a,0,c*l-s*o,f*l+s*a,r*l*l+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,s,r,a){return this.set(1,i,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,i){const s=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,c=r+r,f=a+a,m=o+o,h=r*c,p=r*f,x=r*m,E=a*f,d=a*m,u=o*m,S=l*c,w=l*f,y=l*m,A=i.x,b=i.y,_=i.z;return s[0]=(1-(E+u))*A,s[1]=(p+y)*A,s[2]=(x-w)*A,s[3]=0,s[4]=(p-y)*b,s[5]=(1-(h+u))*b,s[6]=(d+S)*b,s[7]=0,s[8]=(x+w)*_,s[9]=(d-S)*_,s[10]=(1-(h+E))*_,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,i){const s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];const r=this.determinantAffine();if(r===0)return i.set(1,1,1),e.identity(),this;let a=Ai.set(s[0],s[1],s[2]).length();const o=Ai.set(s[4],s[5],s[6]).length(),l=Ai.set(s[8],s[9],s[10]).length();r<0&&(a=-a),pn.copy(this);const c=1/a,f=1/o,m=1/l;return pn.elements[0]*=c,pn.elements[1]*=c,pn.elements[2]*=c,pn.elements[4]*=f,pn.elements[5]*=f,pn.elements[6]*=f,pn.elements[8]*=m,pn.elements[9]*=m,pn.elements[10]*=m,e.setFromRotationMatrix(pn),i.x=a,i.y=o,i.z=l,this}makePerspective(t,e,i,s,r,a,o=xn,l=!1){const c=this.elements,f=2*r/(e-t),m=2*r/(i-s),h=(e+t)/(e-t),p=(i+s)/(i-s);let x,E;if(l)x=r/(a-r),E=a*r/(a-r);else if(o===xn)x=-(a+r)/(a-r),E=-2*a*r/(a-r);else if(o===vs)x=-a/(a-r),E=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=f,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=m,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=x,c[14]=E,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,i,s,r,a,o=xn,l=!1){const c=this.elements,f=2/(e-t),m=2/(i-s),h=-(e+t)/(e-t),p=-(i+s)/(i-s);let x,E;if(l)x=1/(a-r),E=a/(a-r);else if(o===xn)x=-2/(a-r),E=-(a+r)/(a-r);else if(o===vs)x=-1/(a-r),E=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=f,c[4]=0,c[8]=0,c[12]=h,c[1]=0,c[5]=m,c[9]=0,c[13]=p,c[2]=0,c[6]=0,c[10]=x,c[14]=E,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,i=t.elements;for(let s=0;s<16;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}};Sr.prototype.isMatrix4=!0;let me=Sr;const Ai=new F,pn=new me,iu=new F(0,0,0),su=new F(1,1,1),Wn=new F,ws=new F,tn=new F,Qo=new me,jo=new si;class ri{constructor(t=0,e=0,i=0,s=ri.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,s=this._order){return this._x=t,this._y=e,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){const s=t.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],f=s[9],m=s[2],h=s[6],p=s[10];switch(e){case"XYZ":this._y=Math.asin($t(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-f,p),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-$t(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-m,r),this._z=0);break;case"ZXY":this._x=Math.asin($t(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-m,p),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-$t(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(h,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin($t(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-f,c),this._y=Math.atan2(-m,r)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-$t(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-f,p),this._y=0);break;default:kt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return Qo.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Qo,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return jo.setFromEuler(this),this.setFromQuaternion(jo,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ri.DEFAULT_ORDER="XYZ";class fo{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let ru=0;const tl=new F,Ri=new si,Pn=new me,As=new F,ns=new F,au=new F,ou=new si,el=new F(1,0,0),nl=new F(0,1,0),il=new F(0,0,1),sl={type:"added"},lu={type:"removed"},Ci={type:"childadded",child:null},Br={type:"childremoved",child:null};class Ne extends li{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:ru++}),this.uuid=bi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ne.DEFAULT_UP.clone();const t=new F,e=new ri,i=new si,s=new F(1,1,1);function r(){i.setFromEuler(e,!1)}function a(){e.setFromQuaternion(i,void 0,!1)}e._onChange(r),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new me},normalMatrix:{value:new Gt}}),this.matrix=new me,this.matrixWorld=new me,this.matrixAutoUpdate=Ne.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ne.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new fo,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Ri.setFromAxisAngle(t,e),this.quaternion.multiply(Ri),this}rotateOnWorldAxis(t,e){return Ri.setFromAxisAngle(t,e),this.quaternion.premultiply(Ri),this}rotateX(t){return this.rotateOnAxis(el,t)}rotateY(t){return this.rotateOnAxis(nl,t)}rotateZ(t){return this.rotateOnAxis(il,t)}translateOnAxis(t,e){return tl.copy(t).applyQuaternion(this.quaternion),this.position.add(tl.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(el,t)}translateY(t){return this.translateOnAxis(nl,t)}translateZ(t){return this.translateOnAxis(il,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Pn.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?As.copy(t):As.set(t,e,i);const s=this.parent;this.updateWorldMatrix(!0,!1),ns.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Pn.lookAt(ns,As,this.up):Pn.lookAt(As,ns,this.up),this.quaternion.setFromRotationMatrix(Pn),s&&(Pn.extractRotation(s.matrixWorld),Ri.setFromRotationMatrix(Pn),this.quaternion.premultiply(Ri.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(ne("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(sl),Ci.child=t,this.dispatchEvent(Ci),Ci.child=null):ne("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(lu),Br.child=t,this.dispatchEvent(Br),Br.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Pn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Pn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Pn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(sl),Ci.child=t,this.dispatchEvent(Ci),Ci.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,s=this.children.length;i<s;i++){const a=this.children[i].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ns,t,au),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ns,ou,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(t){t(this);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const t=this.pivot;if(t!==null){const e=t.x,i=t.y,s=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*i-r[8]*s,r[13]+=i-r[1]*e-r[5]*i-r[9]*s,r[14]+=s-r[2]*e-r[6]*i-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e,i=!1){const s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),e===!0){const r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,i)}}toJSON(t){const e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,f=l.length;c<f;c++){const m=l[c];r(t.shapes,m)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(t.materials,this.material[l]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];s.animations.push(r(t.animations,l))}}if(e){const o=a(t.geometries),l=a(t.materials),c=a(t.textures),f=a(t.images),m=a(t.shapes),h=a(t.skeletons),p=a(t.animations),x=a(t.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),f.length>0&&(i.images=f),m.length>0&&(i.shapes=m),h.length>0&&(i.skeletons=h),p.length>0&&(i.animations=p),x.length>0&&(i.nodes=x)}return i.object=s,i;function a(o){const l=[];for(const c in o){const f=o[c];delete f.metadata,l.push(f)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){const s=t.children[i];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}Ne.DEFAULT_UP=new F(0,1,0);Ne.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ne.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class ge extends Ne{constructor(){super(),this.isGroup=!0,this.type="Group"}}const cu={type:"move"};class zr{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ge,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ge,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new F,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new F),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ge,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new F,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new F,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let s=null,r=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(const E of t.hand.values()){const d=e.getJointPose(E,i),u=this._getHandJoint(c,E);d!==null&&(u.matrix.fromArray(d.transform.matrix),u.matrix.decompose(u.position,u.quaternion,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=d.radius),u.visible=d!==null}const f=c.joints["index-finger-tip"],m=c.joints["thumb-tip"],h=f.position.distanceTo(m.position),p=.02,x=.005;c.inputState.pinching&&h>p+x?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&h<=p-x&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.quaternion,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));o!==null&&(s=e.getPose(t.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(cu)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const i=new ge;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}}const Cc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Xn={h:0,s:0,l:0},Rs={h:0,s:0,l:0};function kr(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}class jt{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Oe){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,te.colorSpaceToWorking(this,e),this}setRGB(t,e,i,s=te.workingColorSpace){return this.r=t,this.g=e,this.b=i,te.colorSpaceToWorking(this,s),this}setHSL(t,e,i,s=te.workingColorSpace){if(t=Kh(t,1),e=$t(e,0,1),i=$t(i,0,1),e===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+e):i+e-i*e,a=2*i-r;this.r=kr(a,r,t+1/3),this.g=kr(a,r,t),this.b=kr(a,r,t-1/3)}return te.colorSpaceToWorking(this,s),this}setStyle(t,e=Oe){function i(r){r!==void 0&&parseFloat(r)<1&&kt("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(100,parseFloat(r[1]))/100,Math.min(100,parseFloat(r[2]))/100,Math.min(100,parseFloat(r[3]))/100,e);break;case"hsl":case"hsla":if(r=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:kt("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);kt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Oe){const i=Cc[t.toLowerCase()];return i!==void 0?this.setHex(i,e):kt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=kn(t.r),this.g=kn(t.g),this.b=kn(t.b),this}copyLinearToSRGB(t){return this.r=qi(t.r),this.g=qi(t.g),this.b=qi(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Oe){return te.workingToColorSpace(He.copy(this),t),Math.round($t(He.r*255,0,255))*65536+Math.round($t(He.g*255,0,255))*256+Math.round($t(He.b*255,0,255))}getHexString(t=Oe){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=te.workingColorSpace){te.workingToColorSpace(He.copy(this),e);const i=He.r,s=He.g,r=He.b,a=Math.max(i,s,r),o=Math.min(i,s,r);let l,c;const f=(o+a)/2;if(o===a)l=0,c=0;else{const m=a-o;switch(c=f<=.5?m/(a+o):m/(2-a-o),a){case i:l=(s-r)/m+(s<r?6:0);break;case s:l=(r-i)/m+2;break;case r:l=(i-s)/m+4;break}l/=6}return t.h=l,t.s=c,t.l=f,t}getRGB(t,e=te.workingColorSpace){return te.workingToColorSpace(He.copy(this),e),t.r=He.r,t.g=He.g,t.b=He.b,t}getStyle(t=Oe){te.workingToColorSpace(He.copy(this),t);const e=He.r,i=He.g,s=He.b;return t!==Oe?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(t,e,i){return this.getHSL(Xn),this.setHSL(Xn.h+t,Xn.s+e,Xn.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(Xn),t.getHSL(Rs);const i=Ir(Xn.h,Rs.h,e),s=Ir(Xn.s,Rs.s,e),r=Ir(Xn.l,Rs.l,e);return this.setHSL(i,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,i=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*i+r[6]*s,this.g=r[1]*e+r[4]*i+r[7]*s,this.b=r[2]*e+r[5]*i+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const He=new jt;jt.NAMES=Cc;class hu extends Ne{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ri,this.environmentIntensity=1,this.environmentRotation=new ri,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),this.background=t.background!==null?t.background.clone():null,this.environment=t.environment!==null?t.environment.clone():null,this.fog=t.fog!==null?t.fog.clone():null,this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),this.overrideMaterial=t.overrideMaterial!==null?t.overrideMaterial.clone():null,this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}}const mn=new F,Ln=new F,Gr=new F,Dn=new F,Pi=new F,Li=new F,rl=new F,Hr=new F,Vr=new F,Wr=new F,Xr=new ve,Yr=new ve,qr=new ve;class hn{constructor(t=new F,e=new F,i=new F){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,s){s.subVectors(i,e),mn.subVectors(t,e),s.cross(mn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,i,s,r){mn.subVectors(s,e),Ln.subVectors(i,e),Gr.subVectors(t,e);const a=mn.dot(mn),o=mn.dot(Ln),l=mn.dot(Gr),c=Ln.dot(Ln),f=Ln.dot(Gr),m=a*c-o*o;if(m===0)return r.set(0,0,0),null;const h=1/m,p=(c*l-o*f)*h,x=(a*f-o*l)*h;return r.set(1-p-x,x,p)}static containsPoint(t,e,i,s){return this.getBarycoord(t,e,i,s,Dn)===null?!1:Dn.x>=0&&Dn.y>=0&&Dn.x+Dn.y<=1}static getInterpolation(t,e,i,s,r,a,o,l){return this.getBarycoord(t,e,i,s,Dn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Dn.x),l.addScaledVector(a,Dn.y),l.addScaledVector(o,Dn.z),l)}static getInterpolatedAttribute(t,e,i,s,r,a){return Xr.setScalar(0),Yr.setScalar(0),qr.setScalar(0),Xr.fromBufferAttribute(t,e),Yr.fromBufferAttribute(t,i),qr.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(Xr,r.x),a.addScaledVector(Yr,r.y),a.addScaledVector(qr,r.z),a}static isFrontFacing(t,e,i,s){return mn.subVectors(i,e),Ln.subVectors(t,e),mn.cross(Ln).dot(s)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,s){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,i,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return mn.subVectors(this.c,this.b),Ln.subVectors(this.a,this.b),mn.cross(Ln).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return hn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return hn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,s,r){return hn.getInterpolation(t,this.a,this.b,this.c,e,i,s,r)}containsPoint(t){return hn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return hn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const i=this.a,s=this.b,r=this.c;let a,o;Pi.subVectors(s,i),Li.subVectors(r,i),Hr.subVectors(t,i);const l=Pi.dot(Hr),c=Li.dot(Hr);if(l<=0&&c<=0)return e.copy(i);Vr.subVectors(t,s);const f=Pi.dot(Vr),m=Li.dot(Vr);if(f>=0&&m<=f)return e.copy(s);const h=l*m-f*c;if(h<=0&&l>=0&&f<=0&&l-f>0)return a=l/(l-f),e.copy(i).addScaledVector(Pi,a);Wr.subVectors(t,r);const p=Pi.dot(Wr),x=Li.dot(Wr);if(x>=0&&p<=x)return e.copy(r);const E=p*c-l*x;if(E<=0&&c>=0&&x<=0)return o=c/(c-x),e.copy(i).addScaledVector(Li,o);const d=f*x-p*m;if(d<=0&&m-f>=0&&p-x>=0)return rl.subVectors(r,s),o=(m-f)/(m-f+(p-x)),e.copy(s).addScaledVector(rl,o);const u=1/(d+E+h);return a=E*u,o=h*u,e.copy(i).addScaledVector(Pi,a).addScaledVector(Li,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}class Ss{constructor(t=new F(1/0,1/0,1/0),e=new F(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(_n.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(_n.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const i=_n.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const i=t.geometry;if(i!==void 0){const r=i.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0&&t.isBatchedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,_n):_n.fromBufferAttribute(r,a),_n.applyMatrix4(t.matrixWorld),this.expandByPoint(_n);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Cs.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Cs.copy(i.boundingBox)),Cs.applyMatrix4(t.matrixWorld),this.union(Cs)}const s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,_n),_n.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(is),Ps.subVectors(this.max,is),Di.subVectors(t.a,is),Ii.subVectors(t.b,is),Ni.subVectors(t.c,is),Yn.subVectors(Ii,Di),qn.subVectors(Ni,Ii),pi.subVectors(Di,Ni);let e=[0,-Yn.z,Yn.y,0,-qn.z,qn.y,0,-pi.z,pi.y,Yn.z,0,-Yn.x,qn.z,0,-qn.x,pi.z,0,-pi.x,-Yn.y,Yn.x,0,-qn.y,qn.x,0,-pi.y,pi.x,0];return!Kr(e,Di,Ii,Ni,Ps)||(e=[1,0,0,0,1,0,0,0,1],!Kr(e,Di,Ii,Ni,Ps))?!1:(Ls.crossVectors(Yn,qn),e=[Ls.x,Ls.y,Ls.z],Kr(e,Di,Ii,Ni,Ps))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,_n).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(_n).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(In[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),In[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),In[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),In[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),In[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),In[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),In[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),In[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(In),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const In=[new F,new F,new F,new F,new F,new F,new F,new F],_n=new F,Cs=new Ss,Di=new F,Ii=new F,Ni=new F,Yn=new F,qn=new F,pi=new F,is=new F,Ps=new F,Ls=new F,mi=new F;function Kr(n,t,e,i,s){for(let r=0,a=n.length-3;r<=a;r+=3){mi.fromArray(n,r);const o=s.x*Math.abs(mi.x)+s.y*Math.abs(mi.y)+s.z*Math.abs(mi.z),l=t.dot(mi),c=e.dot(mi),f=i.dot(mi);if(Math.max(-Math.max(l,c,f),Math.min(l,c,f))>o)return!1}return!0}const we=new F,Ds=new Dt;let uu=0;class ti extends li{constructor(t,e,i=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:uu++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=bc,this.updateRanges=[],this.gpuType=bn,this.version=0,this._normalizationScale=t!==void 0?Mr(t):void 0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this._normalizationScale=t._normalizationScale,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[i+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)Ds.fromBufferAttribute(this,e),Ds.applyMatrix3(t),this.setXY(e,Ds.x,Ds.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)we.fromBufferAttribute(this,e),we.applyMatrix3(t),this.setXYZ(e,we.x,we.y,we.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)we.fromBufferAttribute(this,e),we.applyMatrix4(t),this.setXYZ(e,we.x,we.y,we.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)we.fromBufferAttribute(this,e),we.applyNormalMatrix(t),this.setXYZ(e,we.x,we.y,we.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)we.fromBufferAttribute(this,e),we.transformDirection(t),this.setXYZ(e,we.x,we.y,we.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=this._denormalize(i)),i}setComponent(t,e,i){return this.normalized&&(i=this._normalize(i)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=this._denormalize(e)),e}setX(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=this._denormalize(e)),e}setY(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=this._denormalize(e)),e}setZ(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=this._denormalize(e)),e}setW(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),i=this._normalize(i)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,s){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),i=this._normalize(i),s=this._normalize(s)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),i=this._normalize(i),s=this._normalize(s),r=this._normalize(r)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(t){const e=this._normalizationScale;return e!==void 0?Math.max(t/e,-1):wc(t,this.array)}_normalize(t){const e=this._normalizationScale;return e!==void 0?Math.round(t*e):Ac(t,this.array)}}class Pc extends ti{constructor(t,e,i){super(new Uint16Array(t),e,i)}}class Lc extends ti{constructor(t,e,i){super(new Uint32Array(t),e,i)}}class be extends ti{constructor(t,e,i){super(new Float32Array(t),e,i)}}const du=new Ss,ss=new F,Zr=new F;class po{constructor(t=new F,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const i=this.center;e!==void 0?i.copy(e):du.setFromPoints(t).getCenter(i);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,i.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;ss.subVectors(t,this.center);const e=ss.lengthSq();if(e>this.radius*this.radius){const i=Math.sqrt(e),s=(i-this.radius)*.5;this.center.addScaledVector(ss,s/i),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Zr.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(ss.copy(t.center).add(Zr)),this.expandByPoint(ss.copy(t.center).sub(Zr))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}let fu=0;const on=new me,$r=new Ne,Ui=new F,en=new Ss,rs=new Ss,De=new F;class dn extends li{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:fu++}),this.uuid=bi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Wh(t)?Lc:Pc)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new Gt().getNormalMatrix(t);i.applyNormalMatrix(r),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return on.makeRotationFromQuaternion(t),this.applyMatrix4(on),this}rotateX(t){return on.makeRotationX(t),this.applyMatrix4(on),this}rotateY(t){return on.makeRotationY(t),this.applyMatrix4(on),this}rotateZ(t){return on.makeRotationZ(t),this.applyMatrix4(on),this}translate(t,e,i){return on.makeTranslation(t,e,i),this.applyMatrix4(on),this}scale(t,e,i){return on.makeScale(t,e,i),this.applyMatrix4(on),this}lookAt(t){return $r.lookAt(t),$r.updateMatrix(),this.applyMatrix4($r.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ui).negate(),this.translate(Ui.x,Ui.y,Ui.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const i=[];for(let s=0,r=t.length;s<r;s++){const a=t[s];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new be(i,3))}else{const i=Math.min(t.length,e.count);for(let s=0;s<i;s++){const r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&kt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ss);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){ne("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new F(-1/0,-1/0,-1/0),new F(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,s=e.length;i<s;i++){const r=e[i];en.setFromBufferAttribute(r),this.morphTargetsRelative?(De.addVectors(this.boundingBox.min,en.min),this.boundingBox.expandByPoint(De),De.addVectors(this.boundingBox.max,en.max),this.boundingBox.expandByPoint(De)):(this.boundingBox.expandByPoint(en.min),this.boundingBox.expandByPoint(en.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&ne('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new po);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){ne("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new F,1/0);return}if(t){const i=this.boundingSphere.center;if(en.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){const o=e[r];rs.setFromBufferAttribute(o),this.morphTargetsRelative?(De.addVectors(en.min,rs.min),en.expandByPoint(De),De.addVectors(en.max,rs.max),en.expandByPoint(De)):(en.expandByPoint(rs.min),en.expandByPoint(rs.max))}en.getCenter(i);let s=0;for(let r=0,a=t.count;r<a;r++)De.fromBufferAttribute(t,r),s=Math.max(s,i.distanceToSquared(De));if(e)for(let r=0,a=e.length;r<a;r++){const o=e[r],l=this.morphTargetsRelative;for(let c=0,f=o.count;c<f;c++)De.fromBufferAttribute(o,c),l&&(Ui.fromBufferAttribute(t,c),De.add(Ui)),s=Math.max(s,i.distanceToSquared(De))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&ne('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){ne("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.position,s=e.normal,r=e.uv;let a=this.getAttribute("tangent");(a===void 0||a.count!==i.count)&&(a=new ti(new Float32Array(4*i.count),4),this.setAttribute("tangent",a));const o=[],l=[],c=new Uint8Array(i.count);for(let D=0;D<i.count;D++)o[D]=new F,l[D]=new F;const f=new F,m=new F,h=new F,p=new Dt,x=new Dt,E=new Dt,d=new F,u=new F;function S(D,R,N){c[D]=c[R]=c[N]=1,f.fromBufferAttribute(i,D),m.fromBufferAttribute(i,R),h.fromBufferAttribute(i,N),p.fromBufferAttribute(r,D),x.fromBufferAttribute(r,R),E.fromBufferAttribute(r,N),m.sub(f),h.sub(f),x.sub(p),E.sub(p);const U=1/(x.x*E.y-E.x*x.y);isFinite(U)&&(d.copy(m).multiplyScalar(E.y).addScaledVector(h,-x.y).multiplyScalar(U),u.copy(h).multiplyScalar(x.x).addScaledVector(m,-E.x).multiplyScalar(U),o[D].add(d),o[R].add(d),o[N].add(d),l[D].add(u),l[R].add(u),l[N].add(u))}let w=this.groups;w.length===0&&(w=[{start:0,count:t.count}]);for(let D=0,R=w.length;D<R;++D){const N=w[D],U=N.start,V=N.count;for(let P=U,H=U+V;P<H;P+=3)S(t.getX(P+0),t.getX(P+1),t.getX(P+2))}const y=new F,A=new F,b=new F,_=new F;function M(D){b.fromBufferAttribute(s,D),_.copy(b);const R=o[D];y.copy(R),y.sub(b.multiplyScalar(b.dot(R))).normalize(),A.crossVectors(_,R);const U=A.dot(l[D])<0?-1:1;a.setXYZW(D,y.x,y.y,y.z,U)}for(let D=0,R=i.count;D<R;++D)c[D]&&M(D);this._transformed=!0}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==e.count)i=new ti(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let h=0,p=i.count;h<p;h++)i.setXYZ(h,0,0,0);const s=new F,r=new F,a=new F,o=new F,l=new F,c=new F,f=new F,m=new F;if(t)for(let h=0,p=t.count;h<p;h+=3){const x=t.getX(h+0),E=t.getX(h+1),d=t.getX(h+2);s.fromBufferAttribute(e,x),r.fromBufferAttribute(e,E),a.fromBufferAttribute(e,d),f.subVectors(a,r),m.subVectors(s,r),f.cross(m),o.fromBufferAttribute(i,x),l.fromBufferAttribute(i,E),c.fromBufferAttribute(i,d),o.add(f),l.add(f),c.add(f),i.setXYZ(x,o.x,o.y,o.z),i.setXYZ(E,l.x,l.y,l.z),i.setXYZ(d,c.x,c.y,c.z)}else for(let h=0,p=e.count;h<p;h+=3)s.fromBufferAttribute(e,h+0),r.fromBufferAttribute(e,h+1),a.fromBufferAttribute(e,h+2),f.subVectors(a,r),m.subVectors(s,r),f.cross(m),i.setXYZ(h+0,f.x,f.y,f.z),i.setXYZ(h+1,f.x,f.y,f.z),i.setXYZ(h+2,f.x,f.y,f.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)De.fromBufferAttribute(t,e),De.normalize(),t.setXYZ(e,De.x,De.y,De.z)}toNonIndexed(){function t(o,l){const c=o.array,f=o.itemSize,m=o.normalized,h=new c.constructor(l.length*f);let p=0,x=0;for(let E=0,d=l.length;E<d;E++){o.isInterleavedBufferAttribute?p=l[E]*o.data.stride+o.offset:p=l[E]*f;for(let u=0;u<f;u++)h[x++]=c[p++]}return new ti(h,f,m)}if(this.index===null)return kt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new dn,i=this.index.array,s=this.attributes;for(const o in s){const l=s[o],c=t(l,i);e.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const l=[],c=r[o];for(let f=0,m=c.length;f<m;f++){const h=c[f],p=t(h,i);l.push(p)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const i=this.attributes;for(const l in i){const c=i[l];t.data.attributes[l]=c.toJSON(t.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],f=[];for(let m=0,h=c.length;m<h;m++){const p=c[m];f.push(p.toJSON(t.data))}f.length>0&&(s[l]=f,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const i=t.index;i!==null&&this.setIndex(i.clone());const s=t.attributes;for(const c in s){const f=s[c];this.setAttribute(c,f.clone(e))}const r=t.morphAttributes;for(const c in r){const f=[],m=r[c];for(let h=0,p=m.length;h<p;h++)f.push(m[h].clone(e));this.morphAttributes[c]=f}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let c=0,f=a.length;c<f;c++){const m=a[c];this.addGroup(m.start,m.count,m.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}class pu{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=bc,this.updateRanges=[],this.version=0,this.uuid=bi()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,i){t*=this.stride,i*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[i+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={});const e=al(this.array);t.arrayBuffers[e]===void 0&&(t.arrayBuffers[e]=this.array.slice(0).buffer);const i=new this.array.constructor(t.arrayBuffers[e]),s=new this.constructor(i,this.stride);return s.setUsage(this.usage),s}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){t.arrayBuffers===void 0&&(t.arrayBuffers={});const e=al(this.array);t.arrayBuffers[e]===void 0&&(t.arrayBuffers[e]=Array.from(new Uint32Array(this.array.slice(0).buffer)));const i={uuid:this.uuid,buffer:e,type:this.array.constructor.name,stride:this.stride};return i.usage=this.usage,i}}function al(n){return n.buffer._uuid===void 0&&(n.buffer._uuid=bi()),n.byteOffset===0&&n.byteLength===n.buffer.byteLength?n.buffer._uuid:n.buffer._uuid+":"+n.byteOffset+":"+n.byteLength}const Xe=new F;class mr{constructor(t,e,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=i,this.normalized=s,this._normalizationScale=t!==void 0?Mr(t.array):void 0}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,i=this.data.count;e<i;e++)Xe.fromBufferAttribute(this,e),Xe.applyMatrix4(t),this.setXYZ(e,Xe.x,Xe.y,Xe.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)Xe.fromBufferAttribute(this,e),Xe.applyNormalMatrix(t),this.setXYZ(e,Xe.x,Xe.y,Xe.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)Xe.fromBufferAttribute(this,e),Xe.transformDirection(t),this.setXYZ(e,Xe.x,Xe.y,Xe.z);return this}getComponent(t,e){let i=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(i=this._denormalize(i)),i}setComponent(t,e,i){return this.normalized&&(i=this._normalize(i)),this.data.array[t*this.data.stride+this.offset+e]=i,this}setX(t,e){return this.normalized&&(e=this._normalize(e)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=this._normalize(e)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=this._normalize(e)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=this._normalize(e)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=this._denormalize(e)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=this._denormalize(e)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=this._denormalize(e)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=this._denormalize(e)),e}setXY(t,e,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=this._normalize(e),i=this._normalize(i)),this.data.array[t+0]=e,this.data.array[t+1]=i,this}setXYZ(t,e,i,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=this._normalize(e),i=this._normalize(i),s=this._normalize(s)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=this._normalize(e),i=this._normalize(i),s=this._normalize(s),r=this._normalize(r)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){pr("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let i=0;i<this.count;i++){const s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new ti(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new mr(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){pr("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let i=0;i<this.count;i++){const s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}_denormalize(t){const e=this._normalizationScale;return e!==void 0?Math.max(t/e,-1):wc(t,this.data.array)}_normalize(t){const e=this._normalizationScale;return e!==void 0?Math.round(t*e):Ac(t,this.data.array)}}const Jr=new F,mu=new F,_u=new Gt;class Un{constructor(t=new F(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,s){return this.normal.set(t,e,i),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){const s=Jr.subVectors(i,e).cross(mu.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,i=!0){const s=t.delta(Jr),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const a=-(t.start.dot(this.normal)+this.constant)/r;return i===!0&&(a<0||a>1)?null:e.copy(t.start).addScaledVector(s,a)}intersectsLine(t){const e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const i=e||_u.getNormalMatrix(t),s=this.coplanarPoint(Jr).applyMatrix4(t),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}}let gu=0;class ji extends li{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:gu++}),this.uuid=bi(),this.name="",this.type="Material",this.blending=ps,this.side=Si,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=sc,this.blendDst=rc,this.blendEquation=Hi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new jt(0,0,0),this.blendAlpha=0,this.depthFunc=_s,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Bh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Dr,this.stencilZFail=Dr,this.stencilZPass=Dr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const i=t[e];if(i===void 0){kt(`Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){kt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector2&&i&&i.isVector2||s&&s.isEuler&&i&&i.isEuler||s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(i.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(i.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(t).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(i.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(i.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){const a=[];for(const o in r){const l=r[o];delete l.metadata,a.push(l)}return a}if(e){const r=s(t.textures),a=s(t.images);r.length>0&&(i.textures=r),a.length>0&&(i.images=a)}return i}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new jt().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.diffuseRoughness!==void 0&&(this.diffuseRoughness=t.diffuseRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=t.iridescenceThicknessMinimum),t.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=t.iridescenceThicknessMaximum),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=t.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=t.iridescenceThicknessRange[1]),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(i=>new Un().fromJSON(i))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let i=t.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new Dt().fromArray(i)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Dt().fromArray(t.clearcoatNormalScale)),t.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=e[t.diffuseRoughnessMap]||null),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let i=null;if(e!==null){const s=e.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=e[r].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class mo extends ji{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new jt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let Fi;const as=new F,Oi=new F,Bi=new F,zi=new Dt,os=new Dt,Dc=new me,Is=new F,ls=new F,Ns=new F,ol=new Dt,Qr=new Dt,ll=new Dt;class Ic extends Ne{constructor(t=new mo){if(super(),this.isSprite=!0,this.type="Sprite",Fi===void 0){Fi=new dn;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new pu(e,5);Fi.setIndex([0,1,2,0,2,3]),Fi.setAttribute("position",new mr(i,3,0,!1)),Fi.setAttribute("uv",new mr(i,2,3,!1))}this.geometry=Fi,this.material=t,this.center=new Dt(.5,.5),this.count=1}intersectsFrustum(t){return t.intersectsSprite(this)}raycast(t,e){t.camera===null&&ne('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Oi.setFromMatrixScale(this.matrixWorld),Dc.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Bi.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Oi.multiplyScalar(-Bi.z);const i=this.material.rotation;let s,r;i!==0&&(r=Math.cos(i),s=Math.sin(i));const a=this.center;Us(Is.set(-.5,-.5,0),Bi,a,Oi,s,r),Us(ls.set(.5,-.5,0),Bi,a,Oi,s,r),Us(Ns.set(.5,.5,0),Bi,a,Oi,s,r),ol.set(0,0),Qr.set(1,0),ll.set(1,1);let o=t.ray.intersectTriangle(Is,ls,Ns,!1,as);if(o===null&&(Us(ls.set(-.5,.5,0),Bi,a,Oi,s,r),Qr.set(0,1),o=t.ray.intersectTriangle(Is,Ns,ls,!1,as),o===null))return;const l=t.ray.origin.distanceTo(as);l<t.near||l>t.far||e.push({distance:l,point:as.clone(),uv:hn.getInterpolation(as,Is,ls,Ns,ol,Qr,ll,new Dt),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}toJSON(t){const e=super.toJSON(t);return e.object.center=this.center.toArray(),e}}function Us(n,t,e,i,s,r){zi.subVectors(n,e).addScalar(.5).multiply(i),s!==void 0?(os.x=r*zi.x-s*zi.y,os.y=s*zi.x+r*zi.y):os.copy(zi),n.copy(t),n.x+=os.x,n.y+=os.y,n.applyMatrix4(Dc)}const Nn=new F,jr=new F,Fs=new F,Os=new F;class _o{constructor(t=new F,e=new F(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Nn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Nn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Nn.copy(this.origin).addScaledVector(this.direction,e),Nn.distanceToSquared(t))}distanceSqToSegment(t,e,i,s){jr.copy(t).add(e).multiplyScalar(.5),Fs.copy(e).sub(t).normalize(),Os.copy(this.origin).sub(jr);const r=t.distanceTo(e)*.5,a=-this.direction.dot(Fs),o=Os.dot(this.direction),l=-Os.dot(Fs),c=Os.lengthSq(),f=Math.abs(1-a*a);let m,h,p,x;if(f>0)if(m=a*l-o,h=a*o-l,x=r*f,m>=0)if(h>=-x)if(h<=x){const E=1/f;m*=E,h*=E,p=m*(m+a*h+2*o)+h*(a*m+h+2*l)+c}else h=r,m=Math.max(0,-(a*h+o)),p=-m*m+h*(h+2*l)+c;else h=-r,m=Math.max(0,-(a*h+o)),p=-m*m+h*(h+2*l)+c;else h<=-x?(m=Math.max(0,-(-a*r+o)),h=m>0?-r:Math.min(Math.max(-r,-l),r),p=-m*m+h*(h+2*l)+c):h<=x?(m=0,h=Math.min(Math.max(-r,-l),r),p=h*(h+2*l)+c):(m=Math.max(0,-(a*r+o)),h=m>0?r:Math.min(Math.max(-r,-l),r),p=-m*m+h*(h+2*l)+c);else h=a>0?-r:r,m=Math.max(0,-(a*h+o)),p=-m*m+h*(h+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,m),s&&s.copy(jr).addScaledVector(Fs,h),p}intersectSphere(t,e){if(t.radius<0)return null;Nn.subVectors(t.center,this.origin);const i=Nn.dot(this.direction),s=Nn.dot(Nn)-i*i,r=t.radius*t.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){const i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,s,r,a,o,l;const c=1/this.direction.x,f=1/this.direction.y,m=1/this.direction.z,h=this.origin;return c>=0?(i=(t.min.x-h.x)*c,s=(t.max.x-h.x)*c):(i=(t.max.x-h.x)*c,s=(t.min.x-h.x)*c),f>=0?(r=(t.min.y-h.y)*f,a=(t.max.y-h.y)*f):(r=(t.max.y-h.y)*f,a=(t.min.y-h.y)*f),i>a||r>s||((r>i||isNaN(i))&&(i=r),(a<s||isNaN(s))&&(s=a),m>=0?(o=(t.min.z-h.z)*m,l=(t.max.z-h.z)*m):(o=(t.max.z-h.z)*m,l=(t.min.z-h.z)*m),i>l||o>s)||((o>i||i!==i)&&(i=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,e)}intersectsBox(t){return this.intersectBox(t,Nn)!==null}intersectTriangle(t,e,i,s,r){const a=this.origin,o=this.direction,l=o.x,c=o.y,f=o.z,m=t.x-a.x,h=t.y-a.y,p=t.z-a.z,x=e.x-a.x,E=e.y-a.y,d=e.z-a.z,u=i.x-a.x,S=i.y-a.y,w=i.z-a.z,y=Math.abs(l),A=Math.abs(c),b=Math.abs(f);let _,M,D,R,N,U,V,P,H,X,G,et;if(y>=A&&y>=b?(D=l,U=m,H=x,et=u,l>=0?(_=c,M=f,R=h,N=p,V=E,P=d,X=S,G=w):(_=f,M=c,R=p,N=h,V=d,P=E,X=w,G=S)):A>=b?(D=c,U=h,H=E,et=S,c>=0?(_=f,M=l,R=p,N=m,V=d,P=x,X=w,G=u):(_=l,M=f,R=m,N=p,V=x,P=d,X=u,G=w)):(D=f,U=p,H=d,et=w,f>=0?(_=l,M=c,R=m,N=h,V=x,P=E,X=u,G=S):(_=c,M=l,R=h,N=m,V=E,P=x,X=S,G=u)),D===0)return null;const Y=_/D,O=M/D,$=1/D,at=R-Y*U,Et=N-O*U,q=V-Y*H,ot=P-O*H,xt=X-Y*et,Tt=G-O*et,ct=xt*ot-Tt*q,zt=at*Tt-Et*xt,Se=q*Et-ot*at;if(s){if(ct<0||zt<0||Se<0)return null}else if((ct<0||zt<0||Se<0)&&(ct>0||zt>0||Se>0))return null;const Ft=ct+zt+Se;if(Ft===0)return null;const Zt=$*(ct*U+zt*H+Se*et);return(Ft>0?Zt<0:Zt>0)?null:this.at(Zt/Ft,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ti extends ji{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new jt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ri,this.combine=so,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const cl=new me,_i=new _o,Bs=new po,hl=new F,zs=new F,ks=new F,Gs=new F,ta=new F,Hs=new F,ul=new F,Vs=new F;class _e extends Ne{constructor(t=new dn,e=new Ti){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0?this.morphTargetInfluences=t.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,t.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){const i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,a=i.morphTargetsRelative;e.fromBufferAttribute(s,t);const o=this.morphTargetInfluences;if(r&&o){Hs.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const f=o[l],m=r[l];f!==0&&(ta.fromBufferAttribute(m,t),a?Hs.addScaledVector(ta,f):Hs.addScaledVector(ta.sub(e),f))}e.add(Hs)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){const i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Bs.copy(i.boundingSphere),Bs.applyMatrix4(r),_i.copy(t.ray).recast(t.near),!(Bs.containsPoint(_i.origin)===!1&&(_i.intersectSphere(Bs,hl)===null||_i.origin.distanceToSquared(hl)>(t.far-t.near)**2))&&(cl.copy(r).invert(),_i.copy(t.ray).applyMatrix4(cl),!(i.boundingBox!==null&&_i.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,_i)))}_computeIntersections(t,e,i){let s;const r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,f=r.attributes.uv1,m=r.attributes.normal,h=r.groups,p=r.drawRange;if(o!==null)if(Array.isArray(a))for(let x=0,E=h.length;x<E;x++){const d=h[x],u=a[d.materialIndex],S=Math.max(d.start,p.start),w=Math.min(o.count,Math.min(d.start+d.count,p.start+p.count));for(let y=S,A=w;y<A;y+=3){const b=o.getX(y),_=o.getX(y+1),M=o.getX(y+2);s=Ws(this,u,t,i,c,f,m,b,_,M),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=d.materialIndex,e.push(s))}}else{const x=Math.max(0,p.start),E=Math.min(o.count,p.start+p.count);for(let d=x,u=E;d<u;d+=3){const S=o.getX(d),w=o.getX(d+1),y=o.getX(d+2);s=Ws(this,a,t,i,c,f,m,S,w,y),s&&(s.faceIndex=Math.floor(d/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let x=0,E=h.length;x<E;x++){const d=h[x],u=a[d.materialIndex],S=Math.max(d.start,p.start),w=Math.min(l.count,Math.min(d.start+d.count,p.start+p.count));for(let y=S,A=w;y<A;y+=3){const b=y,_=y+1,M=y+2;s=Ws(this,u,t,i,c,f,m,b,_,M),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=d.materialIndex,e.push(s))}}else{const x=Math.max(0,p.start),E=Math.min(l.count,p.start+p.count);for(let d=x,u=E;d<u;d+=3){const S=d,w=d+1,y=d+2;s=Ws(this,a,t,i,c,f,m,S,w,y),s&&(s.faceIndex=Math.floor(d/3),e.push(s))}}}}function xu(n,t,e,i,s,r,a,o){let l;if(t.side===je?l=i.intersectTriangle(a,r,s,!0,o):l=i.intersectTriangle(s,r,a,t.side===Si,o),l===null)return null;Vs.copy(o),Vs.applyMatrix4(n.matrixWorld);const c=e.ray.origin.distanceTo(Vs);return c<e.near||c>e.far?null:{distance:c,point:Vs.clone(),object:n}}function Ws(n,t,e,i,s,r,a,o,l,c){n.getVertexPosition(o,zs),n.getVertexPosition(l,ks),n.getVertexPosition(c,Gs);const f=xu(n,t,e,i,zs,ks,Gs,ul);if(f){const m=new F;hn.getBarycoord(ul,zs,ks,Gs,m),s&&(f.uv=hn.getInterpolatedAttribute(s,o,l,c,m,new Dt)),r&&(f.uv1=hn.getInterpolatedAttribute(r,o,l,c,m,new Dt)),a&&(f.normal=hn.getInterpolatedAttribute(a,o,l,c,m,new F),f.normal.dot(i.direction)>0&&f.normal.multiplyScalar(-1));const h={a:o,b:l,c,normal:new F,materialIndex:0};hn.getNormal(zs,ks,Gs,h.normal),f.face=h,f.barycoord=m}return f}class vu extends Ve{constructor(t=null,e=1,i=1,s,r,a,o,l,c=Ie,f=Ie,m,h){super(null,a,o,l,c,f,s,r,m,h),this.isDataTexture=!0,this.image={data:t,width:e,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const gi=new po,Su=new Dt(.5,.5),Xs=new F;class $i{constructor(t=new Un,e=new Un,i=new Un,s=new Un,r=new Un,a=new Un){this.planes=[t,e,i,s,r,a]}set(t,e,i,s,r,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(i),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){const e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=xn,i=!1){const s=this.planes,r=t.elements,a=r[0],o=r[1],l=r[2],c=r[3],f=r[4],m=r[5],h=r[6],p=r[7],x=r[8],E=r[9],d=r[10],u=r[11],S=r[12],w=r[13],y=r[14],A=r[15];if(s[0].setComponents(c-a,p-f,u-x,A-S).normalize(),s[1].setComponents(c+a,p+f,u+x,A+S).normalize(),s[2].setComponents(c+o,p+m,u+E,A+w).normalize(),s[3].setComponents(c-o,p-m,u-E,A-w).normalize(),i)s[4].setComponents(l,h,d,y).normalize(),s[5].setComponents(c-l,p-h,u-d,A-y).normalize();else if(s[4].setComponents(c-l,p-h,u-d,A-y).normalize(),e===xn)s[5].setComponents(c+l,p+h,u+d,A+y).normalize();else if(e===vs)s[5].setComponents(l,h,d,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),gi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),gi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(gi)}intersectsSprite(t){gi.center.set(0,0,0);const e=Su.distanceTo(t.center);return gi.radius=.7071067811865476+e,gi.applyMatrix4(t.matrixWorld),this.intersectsSphere(gi)}intersectsSphere(t){const e=this.planes,i=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let i=0;i<6;i++){const s=e[i];if(Xs.x=s.normal.x>0?t.max.x:t.min.x,Xs.y=s.normal.y>0?t.max.y:t.min.y,Xs.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Xs)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}const dl=new me;class go{constructor(){this.coordinateSystem=xn,this._frustums=[],this._count=0}setFromArrayCamera(t){const e=t.cameras,i=this._frustums;for(let s=0;s<e.length;s++){const r=e[s];dl.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),i[s]===void 0&&(i[s]=new $i),i[s].setFromProjectionMatrix(dl,r.coordinateSystem,r.reversedDepth)}return this._count=e.length,this}getFrustum(t){return this._frustums[t]}intersectsObject(t){const e=this._frustums;for(let i=0;i<this._count;i++)if(e[i].intersectsObject(t))return!0;return!1}intersectsSprite(t){const e=this._frustums;for(let i=0;i<this._count;i++)if(e[i].intersectsSprite(t))return!0;return!1}intersectsSphere(t){const e=this._frustums;for(let i=0;i<this._count;i++)if(e[i].intersectsSphere(t))return!0;return!1}intersectsBox(t){const e=this._frustums;for(let i=0;i<this._count;i++)if(e[i].intersectsBox(t))return!0;return!1}containsPoint(t){const e=this._frustums;for(let i=0;i<this._count;i++)if(e[i].containsPoint(t))return!0;return!1}copy(t){this.coordinateSystem=t.coordinateSystem;const e=this._frustums,i=t._frustums;for(let s=0;s<t._count;s++)e[s]===void 0&&(e[s]=new $i),e[s].copy(i[s]);return this._count=t._count,this}clone(){return new go().copy(this)}}class Nc extends Ve{constructor(t=[],e=Ki,i,s,r,a,o,l,c,f){super(t,e,i,s,r,a,o,l,c,f),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class yr extends Ve{constructor(t,e,i,s,r,a,o,l,c){super(t,e,i,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Ji extends Ve{constructor(t,e,i=An,s,r,a,o=Ie,l=Ie,c,f=ii,m=1){if(f!==ii&&f!==jn)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const h={width:t,height:e,depth:m};super(h,s,r,a,o,l,f,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new uo(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}}class Uc extends Ji{constructor(t,e=An,i=Ki,s,r,a=Ie,o=Ie,l,c=ii){const f={width:t,height:t,depth:1},m=[f,f,f,f,f,f];super(t,t,e,i,s,r,a,o,l,c),this.image=m,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}}class Fc extends Ve{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class he extends dn{constructor(t=1,e=1,i=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const l=[],c=[],f=[],m=[];let h=0,p=0;x("z","y","x",-1,-1,i,e,t,a,r,0),x("z","y","x",1,-1,i,e,-t,a,r,1),x("x","z","y",1,1,t,i,e,s,a,2),x("x","z","y",1,-1,t,i,-e,s,a,3),x("x","y","z",1,-1,t,e,i,s,r,4),x("x","y","z",-1,-1,t,e,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new be(c,3)),this.setAttribute("normal",new be(f,3)),this.setAttribute("uv",new be(m,2));function x(E,d,u,S,w,y,A,b,_,M,D){const R=y/_,N=A/M,U=y/2,V=A/2,P=b/2,H=_+1,X=M+1;let G=0,et=0;const Y=new F;for(let O=0;O<X;O++){const $=O*N-V;for(let at=0;at<H;at++){const Et=at*R-U;Y[E]=Et*S,Y[d]=$*w,Y[u]=P,c.push(Y.x,Y.y,Y.z),Y[E]=0,Y[d]=0,Y[u]=b>0?1:-1,f.push(Y.x,Y.y,Y.z),m.push(at/_),m.push(1-O/M),G+=1}}for(let O=0;O<M;O++)for(let $=0;$<_;$++){const at=h+$+H*O,Et=h+$+H*(O+1),q=h+($+1)+H*(O+1),ot=h+($+1)+H*O;l.push(at,Et,ot),l.push(Et,q,ot),et+=6}o.addGroup(p,et,D),p+=et,h+=G}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new he(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}class Fn extends dn{constructor(t=1,e=1,i=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:i,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};const c=this;s=Math.floor(s),r=Math.floor(r);const f=[],m=[],h=[],p=[];let x=0;const E=[],d=i/2;let u=0;S(),a===!1&&(t>0&&w(!0),e>0&&w(!1)),this.setIndex(f),this.setAttribute("position",new be(m,3)),this.setAttribute("normal",new be(h,3)),this.setAttribute("uv",new be(p,2));function S(){const y=new F,A=new F;let b=0;const _=(e-t)/i;for(let M=0;M<=r;M++){const D=[],R=M/r,N=R*(e-t)+t;for(let U=0;U<=s;U++){const V=U/s,P=V*l+o,H=Math.sin(P),X=Math.cos(P);A.x=N*H,A.y=-R*i+d,A.z=N*X,m.push(A.x,A.y,A.z),y.set(H,_,X).normalize(),h.push(y.x,y.y,y.z),p.push(V,1-R),D.push(x++)}E.push(D)}for(let M=0;M<s;M++)for(let D=0;D<r;D++){const R=E[D][M],N=E[D+1][M],U=E[D+1][M+1],V=E[D][M+1];(t>0||D!==0)&&(f.push(R,N,V),b+=3),(e>0||D!==r-1)&&(f.push(N,U,V),b+=3)}c.addGroup(u,b,0),u+=b}function w(y){const A=x,b=new Dt,_=new F;let M=0;const D=y===!0?t:e,R=y===!0?1:-1;for(let U=1;U<=s;U++)m.push(0,d*R,0),h.push(0,R,0),p.push(.5,.5),x++;const N=x;for(let U=0;U<=s;U++){const P=U/s*l+o,H=Math.cos(P),X=Math.sin(P);_.x=D*X,_.y=d*R,_.z=D*H,m.push(_.x,_.y,_.z),h.push(0,R,0),b.x=H*.5+.5,b.y=X*.5*R+.5,p.push(b.x,b.y),x++}for(let U=0;U<s;U++){const V=A+U,P=N+U;y===!0?f.push(P,P+1,V):f.push(P+1,P,V),M+=3}c.addGroup(u,M,y===!0?1:2),u+=M}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Fn(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class xo extends dn{constructor(t=[],e=[],i=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:i,detail:s};const r=[],a=[];o(s),c(i),f(),this.setAttribute("position",new be(r,3)),this.setAttribute("normal",new be(r.slice(),3)),this.setAttribute("uv",new be(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(S){const w=new F,y=new F,A=new F;for(let b=0;b<e.length;b+=3)p(e[b+0],w),p(e[b+1],y),p(e[b+2],A),l(w,y,A,S)}function l(S,w,y,A){const b=A+1,_=[];for(let M=0;M<=b;M++){_[M]=[];const D=S.clone().lerp(y,M/b),R=w.clone().lerp(y,M/b),N=b-M;for(let U=0;U<=N;U++)U===0&&M===b?_[M][U]=D:_[M][U]=D.clone().lerp(R,U/N)}for(let M=0;M<b;M++)for(let D=0;D<2*(b-M)-1;D++){const R=Math.floor(D/2);D%2===0?(h(_[M][R+1]),h(_[M+1][R]),h(_[M][R])):(h(_[M][R+1]),h(_[M+1][R+1]),h(_[M+1][R]))}}function c(S){const w=new F;for(let y=0;y<r.length;y+=3)w.x=r[y+0],w.y=r[y+1],w.z=r[y+2],w.normalize().multiplyScalar(S),r[y+0]=w.x,r[y+1]=w.y,r[y+2]=w.z}function f(){const S=new F;for(let w=0;w<r.length;w+=3){S.x=r[w+0],S.y=r[w+1],S.z=r[w+2];const y=d(S)/2/Math.PI+.5,A=u(S)/Math.PI+.5;a.push(y,1-A)}x(),m()}function m(){for(let S=0;S<a.length;S+=6){const w=a[S+0],y=a[S+2],A=a[S+4],b=Math.max(w,y,A),_=Math.min(w,y,A);b>.9&&_<.1&&(w<.2&&(a[S+0]+=1),y<.2&&(a[S+2]+=1),A<.2&&(a[S+4]+=1))}}function h(S){r.push(S.x,S.y,S.z)}function p(S,w){const y=S*3;w.x=t[y+0],w.y=t[y+1],w.z=t[y+2]}function x(){const S=new F,w=new F,y=new F,A=new F,b=new Dt,_=new Dt,M=new Dt;for(let D=0,R=0;D<r.length;D+=9,R+=6){S.set(r[D+0],r[D+1],r[D+2]),w.set(r[D+3],r[D+4],r[D+5]),y.set(r[D+6],r[D+7],r[D+8]),b.set(a[R+0],a[R+1]),_.set(a[R+2],a[R+3]),M.set(a[R+4],a[R+5]),A.copy(S).add(w).add(y).divideScalar(3);const N=d(A);E(b,R+0,S,N),E(_,R+2,w,N),E(M,R+4,y,N)}}function E(S,w,y,A){A<0&&S.x===1&&(a[w]=S.x-1),y.x===0&&y.z===0&&(a[w]=A/2/Math.PI+.5)}function d(S){return Math.atan2(S.z,-S.x)}function u(S){return Math.atan2(-S.y,Math.sqrt(S.x*S.x+S.z*S.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new xo(t.vertices,t.indices,t.radius,t.detail)}}class ei extends xo{constructor(t=1,e=0){const i=(1+Math.sqrt(5))/2,s=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new ei(t.radius,t.detail)}}class Ms extends dn{constructor(t=1,e=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:s};const r=t/2,a=e/2,o=Math.floor(i),l=Math.floor(s),c=o+1,f=l+1,m=t/o,h=e/l,p=[],x=[],E=[],d=[];for(let u=0;u<f;u++){const S=u*h-a;for(let w=0;w<c;w++){const y=w*m-r;x.push(y,-S,0),E.push(0,0,1),d.push(w/o),d.push(1-u/l)}}for(let u=0;u<l;u++)for(let S=0;S<o;S++){const w=S+c*u,y=S+c*(u+1),A=S+1+c*(u+1),b=S+1+c*u;p.push(w,y,b),p.push(y,A,b)}this.setIndex(p),this.setAttribute("position",new be(x,3)),this.setAttribute("normal",new be(E,3)),this.setAttribute("uv",new be(d,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ms(t.width,t.height,t.widthSegments,t.heightSegments)}}class vo extends dn{constructor(t=.5,e=1,i=32,s=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:i,phiSegments:s,thetaStart:r,thetaLength:a},i=Math.max(3,i),s=Math.max(1,s);const o=[],l=[],c=[],f=[];let m=t;const h=(e-t)/s,p=new F,x=new Dt;for(let E=0;E<=s;E++){for(let d=0;d<=i;d++){const u=r+d/i*a;p.x=m*Math.cos(u),p.y=m*Math.sin(u),l.push(p.x,p.y,p.z),c.push(0,0,1),x.x=(p.x/e+1)/2,x.y=(p.y/e+1)/2,f.push(x.x,x.y)}m+=h}for(let E=0;E<s;E++){const d=E*(i+1);for(let u=0;u<i;u++){const S=u+d,w=S,y=S+i+1,A=S+i+2,b=S+1;o.push(w,y,b),o.push(y,A,b)}}this.setIndex(o),this.setAttribute("position",new be(l,3)),this.setAttribute("normal",new be(c,3)),this.setAttribute("uv",new be(f,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new vo(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class So extends dn{constructor(t=1,e=.4,i=12,s=48,r=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:i,tubularSegments:s,arc:r,thetaStart:a,thetaLength:o},i=Math.floor(i),s=Math.floor(s);const l=[],c=[],f=[],m=[],h=new F,p=new F,x=new F;for(let E=0;E<=i;E++){const d=a+E/i*o;for(let u=0;u<=s;u++){const S=u/s*r;p.x=(t+e*Math.cos(d))*Math.cos(S),p.y=(t+e*Math.cos(d))*Math.sin(S),p.z=e*Math.sin(d),c.push(p.x,p.y,p.z),h.x=t*Math.cos(S),h.y=t*Math.sin(S),x.subVectors(p,h).normalize(),f.push(x.x,x.y,x.z),m.push(u/s),m.push(E/i)}}for(let E=1;E<=i;E++)for(let d=1;d<=s;d++){const u=(s+1)*E+d-1,S=(s+1)*(E-1)+d-1,w=(s+1)*(E-1)+d,y=(s+1)*E+d;l.push(u,S,y),l.push(S,w,y)}this.setIndex(l),this.setAttribute("position",new be(c,3)),this.setAttribute("normal",new be(f,3)),this.setAttribute("uv",new be(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new So(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc,t.thetaStart,t.thetaLength)}}function Qi(n){const t={};for(const e in n){t[e]={};for(const i in n[e]){const s=n[e][i];if(fl(s))s.isRenderTargetTexture?(kt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=s.clone();else if(Array.isArray(s))if(fl(s[0])){const r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();t[e][i]=r}else t[e][i]=s.slice();else t[e][i]=s}}return t}function Ye(n){const t={};for(let e=0;e<n.length;e++){const i=Qi(n[e]);for(const s in i)t[s]=i[s]}return t}function fl(n){return n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)}function Mu(n){const t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function Oc(n){const t=n.getRenderTarget();return t===null?n.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:te.workingColorSpace}const yu={clone:Qi,merge:Ye};var Eu=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,bu=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class yi extends ji{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Eu,this.fragmentShader=bu,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Qi(t.uniforms),this.uniformsGroups=Mu(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(const i in t.uniforms){const s=t.uniforms[i];switch(this.uniforms[i]={},s.type){case"t":this.uniforms[i].value=e[s.value]||null;break;case"c":this.uniforms[i].value=new jt().setHex(s.value);break;case"v2":this.uniforms[i].value=new Dt().fromArray(s.value);break;case"v3":this.uniforms[i].value=new F().fromArray(s.value);break;case"v4":this.uniforms[i].value=new ve().fromArray(s.value);break;case"m3":this.uniforms[i].value=new Gt().fromArray(s.value);break;case"m4":this.uniforms[i].value=new me().fromArray(s.value);break;default:this.uniforms[i].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(const i in t.extensions)this.extensions[i]=t.extensions[i];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}}class Tu extends yi{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Mo extends ji{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new jt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new jt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Za,this.normalScale=new Dt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ri,this.combine=so,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class wu extends ji{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Fh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Au extends ji{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class yo extends Ne{static registerNode(t){this.prototype._lightNode=t}constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new jt(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}}class Ru extends yo{constructor(t,e,i){super(t,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ne.DEFAULT_UP),this.updateMatrix(),this.groundColor=new jt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){const e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}}const ea=new me,pl=new F,ml=new F;class Cu{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Dt(512,512),this.mapType=sn,this.map=null,this.mapPass=null,this.matrix=new me,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new $i,this._frameExtents=new Dt(1,1),this._viewportCount=1,this._viewports=[new ve(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera;pl.setFromMatrixPosition(t.matrixWorld),e.position.copy(pl),ml.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(ml),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,i,s){ea.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),i.setFromProjectionMatrix(ea,t.coordinateSystem,t.reversedDepth);const r=this._frameExtents,a=s?s.z/r.x:1,o=s?s.w/r.y:1,l=s?s.x/r.x:0,c=s?s.y/r.y:0;t.coordinateSystem===vs||t.reversedDepth?e.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):e.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),e.multiply(ea)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.mapType=t.mapType,this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.mapType=this.mapType,t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const Ys=new F,qs=new si,vn=new F;class Bc extends Ne{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new me,this.projectionMatrix=new me,this.projectionMatrixInverse=new me,this.coordinateSystem=xn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(Ys,qs,vn),vn.x===1&&vn.y===1&&vn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ys,qs,vn.set(1,1,1)).invert()}updateWorldMatrix(t,e,i=!1){super.updateWorldMatrix(t,e,i),this.matrixWorld.decompose(Ys,qs,vn),vn.x===1&&vn.y===1&&vn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ys,qs,vn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Kn=new F,_l=new Dt,gl=new Dt;class gn extends Bc{constructor(t=50,e=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=$a*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(ar*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return $a*2*Math.atan(Math.tan(ar*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){Kn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Kn.x,Kn.y).multiplyScalar(-t/Kn.z),Kn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Kn.x,Kn.y).multiplyScalar(-t/Kn.z)}getViewSize(t,e){return this.getViewBounds(t,_l,gl),e.subVectors(gl,_l)}setViewOffset(t,e,i,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(ar*.5*this.fov)/this.zoom,i=2*e,s=this.aspect*i,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,e-=a.offsetY*i/c,s*=a.width/l,i*=a.height/c}const o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-i,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}class zc extends Bc{constructor(t=-1,e=1,i=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=i-t,a=i+t,o=s+e,l=s-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,f=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=f*this.view.offsetY,l=o-f*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class Pu extends Cu{constructor(){super(new zc(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Lu extends yo{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ne.DEFAULT_UP),this.updateMatrix(),this.target=new Ne,this.shadow=new Pu}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){const e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}}class Du extends yo{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}const ki=-90,Gi=1;class Ja extends Ne{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new gn(ki,Gi,t,e);s.layers=this.layers,this.add(s);const r=new gn(ki,Gi,t,e);r.layers=this.layers,this.add(r);const a=new gn(ki,Gi,t,e);a.layers=this.layers,this.add(a);const o=new gn(ki,Gi,t,e);o.layers=this.layers,this.add(o);const l=new gn(ki,Gi,t,e);l.layers=this.layers,this.add(l);const c=new gn(ki,Gi,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[i,s,r,a,o,l]=e;for(const c of e)this.remove(c);if(t===xn)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===vs)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,l,c,f]=this.children,m=t.getRenderTarget(),h=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),x=t.xr.enabled;t.xr.enabled=!1;const E=i.texture.mipmapsAutoUpdate;i.texture.mipmapsAutoUpdate=!1;let d=!1;t.isWebGLRenderer===!0?d=t.state.buffers.depth.getReversed():d=t.reversedDepthBuffer,t.setRenderTarget(i,0,s),d&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(i,1,s),d&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(i,2,s),d&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(i,3,s),d&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(i,4,s),d&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),i.texture.mipmapsAutoUpdate=E,t.setRenderTarget(i,5,s),d&&t.autoClear===!1&&t.clearDepth(),t.render(e,f),t.setRenderTarget(m,h,p),t.xr.enabled=x,i.texture.needsPMREMUpdate=!0}}class Iu extends gn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t,this.perCameraFrustumCulled=!1}}class Nu{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(t){this._document=t,t.hidden!==void 0&&(this._pageVisibilityHandler=Uu.bind(this),t.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(t){return this._timescale=t,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(t){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(t!==void 0?t:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}}function Uu(){this._document.hidden===!1&&this.reset()}const xl=new me;class Fu{constructor(t,e,i=0,s=1/0){this.ray=new _o(t,e),this.near=i,this.far=s,this.camera=null,this.layers=new fo,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,e.projectionMatrix.elements[14]).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):ne("Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return xl.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(xl),this}intersectObject(t,e=!0,i=[]){return Qa(t,this,i,e),i.sort(vl),i}intersectObjects(t,e=!0,i=[]){for(let s=0,r=t.length;s<r;s++)Qa(t[s],this,i,e);return i.sort(vl),i}}function vl(n,t){return n.distance-t.distance}function Qa(n,t,e,i){let s=!0;if(n.layers.test(t.layers)&&n.raycast(t,e)===!1&&(s=!1),s===!0&&i===!0){const r=n.children;for(let a=0,o=r.length;a<o;a++)Qa(r[a],t,e,!0)}}class Sl{constructor(t=1,e=0,i=0){this.radius=t,this.phi=e,this.theta=i}set(t,e,i){return this.radius=t,this.phi=e,this.theta=i,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=$t(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,i){return this.radius=Math.sqrt(t*t+e*e+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,i),this.phi=Math.acos($t(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class Ou extends li{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(t){this.domElement!==null&&this.disconnect(),this.domElement=t}disconnect(){}dispose(){}update(){}}function Ml(n,t,e,i){const s=Bu(i);switch(e){case xc:return n*t;case Sc:return n*t/s.components*s.byteLength;case lo:return n*t/s.components*s.byteLength;case Mi:return n*t*2/s.components*s.byteLength;case co:return n*t*2/s.components*s.byteLength;case vc:return n*t*3/s.components*s.byteLength;case Tn:return n*t*4/s.components*s.byteLength;case ho:return n*t*4/s.components*s.byteLength;case er:case nr:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case ir:case sr:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Sa:case ya:return Math.max(n,16)*Math.max(t,8)/4;case va:case Ma:return Math.max(n,8)*Math.max(t,8)/2;case Ea:case ba:case wa:case Aa:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case Ta:case cr:case Ra:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Ca:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Pa:return Math.floor((n+4)/5)*Math.floor((t+3)/4)*16;case La:return Math.floor((n+4)/5)*Math.floor((t+4)/5)*16;case Da:return Math.floor((n+5)/6)*Math.floor((t+4)/5)*16;case Ia:return Math.floor((n+5)/6)*Math.floor((t+5)/6)*16;case Na:return Math.floor((n+7)/8)*Math.floor((t+4)/5)*16;case Ua:return Math.floor((n+7)/8)*Math.floor((t+5)/6)*16;case Fa:return Math.floor((n+7)/8)*Math.floor((t+7)/8)*16;case Oa:return Math.floor((n+9)/10)*Math.floor((t+4)/5)*16;case Ba:return Math.floor((n+9)/10)*Math.floor((t+5)/6)*16;case za:return Math.floor((n+9)/10)*Math.floor((t+7)/8)*16;case ka:return Math.floor((n+9)/10)*Math.floor((t+9)/10)*16;case Ga:return Math.floor((n+11)/12)*Math.floor((t+9)/10)*16;case Ha:return Math.floor((n+11)/12)*Math.floor((t+11)/12)*16;case Va:case Wa:case Xa:return Math.ceil(n/4)*Math.ceil(t/4)*16;case Ya:case qa:return Math.ceil(n/4)*Math.ceil(t/4)*8;case hr:case Ka:return Math.ceil(n/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Bu(n){switch(n){case sn:case pc:return{byteLength:1,components:1};case xs:case mc:case Rn:return{byteLength:2,components:1};case ao:case oo:return{byteLength:2,components:4};case An:case ro:case bn:return{byteLength:4,components:1};case _c:case gc:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:io}}));typeof window<"u"&&(window.__THREE__?kt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=io);function kc(){let n=null,t=!1,e=null,i=null;function s(r,a){i=n.requestAnimationFrame(s),e(r,a)}return{start:function(){t!==!0&&e!==null&&n!==null&&(i=n.requestAnimationFrame(s),t=!0)},stop:function(){n!==null&&n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){n=r}}}function zu(n){const t=new WeakMap;function e(o,l){const c=o.array,f=o.usage,m=c.byteLength,h=n.createBuffer();n.bindBuffer(l,h),n.bufferData(l,c,f),o.onUploadCallback();let p;if(c instanceof Float32Array)p=n.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)p=n.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?p=n.HALF_FLOAT:p=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=n.SHORT;else if(c instanceof Uint32Array)p=n.UNSIGNED_INT;else if(c instanceof Int32Array)p=n.INT;else if(c instanceof Int8Array)p=n.BYTE;else if(c instanceof Uint8Array)p=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:m}}function i(o,l,c){const f=l.array,m=l.updateRanges;if(n.bindBuffer(c,o),m.length===0)n.bufferSubData(c,0,f);else{m.sort((p,x)=>p.start-x.start);let h=0;for(let p=1;p<m.length;p++){const x=m[h],E=m[p];E.start<=x.start+x.count+1?x.count=Math.max(x.count,E.start+E.count-x.start):(++h,m[h]=E)}m.length=h+1;for(let p=0,x=m.length;p<x;p++){const E=m[p];n.bufferSubData(c,E.start*f.BYTES_PER_ELEMENT,f,E.start,E.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=t.get(o);l&&(n.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const f=t.get(o);(!f||f.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var ku=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Gu=`#ifdef USE_ALPHAHASH
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
#endif`,Hu=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Vu=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Wu=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Xu=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Yu=`#ifdef USE_AOMAP
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
#endif`,qu=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Ku=`#ifdef USE_BATCHING
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
#endif`,Zu=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,$u=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Ju=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Qu=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,ju=`#ifdef USE_IRIDESCENCE
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
#endif`,td=`#ifdef USE_BUMPMAP
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
#endif`,ed=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,nd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,id=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,sd=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,rd=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,ad=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,od=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,ld=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,cd=`#define PI 3.141592653589793
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
} // validated`,hd=`vec3 transformedNormal = objectNormal;
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
#endif`,ud=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,dd=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,fd=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,pd=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,md="gl_FragColor = linearToOutputTexel( gl_FragColor );",_d=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,gd=`#ifdef USE_ENVMAP
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
#endif`,xd=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,vd=`#ifdef USE_ENVMAP
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
#endif`,Sd=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Md=`#ifdef USE_ENVMAP
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
#endif`,yd=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Ed=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,bd=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Td=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,wd=`#ifdef USE_GRADIENTMAP
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
}`,Ad=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Rd=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Cd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Pd=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,Ld=`#ifdef USE_ENVMAP
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
#endif`,Dd=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Id=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Nd=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Ud=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Fd=`PhysicalMaterial material;
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
#endif`,Od=`uniform sampler2D dfgLUT;
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
}`,Bd=`
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
#endif`,zd=`#if defined( RE_IndirectDiffuse )
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
#endif`,kd=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Gd=`#if NUM_LIGHT_PROBE_GRIDS > 0
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
#endif`,Hd=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Vd=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Wd=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Xd=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Yd=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,qd=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Kd=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Zd=`#if defined( USE_POINTS_UV )
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
#endif`,$d=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Jd=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Qd=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,jd=`#if defined( USE_MORPHCOLORS )
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
#endif`,tf=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ef=`#ifdef USE_MORPHTARGETS
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
#endif`,nf=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,sf=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,rf=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,af=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,of=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,lf=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,cf=`#ifdef USE_NORMALMAP
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
#endif`,hf=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,uf=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,df=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,ff=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,pf=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,mf=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,_f=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,gf=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,xf=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,vf=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Sf=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Mf=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,yf=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Ef=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,bf=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Tf=`float getShadowMask() {
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
}`,wf=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Af=`#ifdef USE_SKINNING
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
#endif`,Rf=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Cf=`#ifdef USE_SKINNING
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
#endif`,Pf=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Lf=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Df=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,If=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Nf=`#ifdef USE_TRANSMISSION
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
#endif`,Uf=`#ifdef USE_TRANSMISSION
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
#endif`,Ff=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Of=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Bf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,zf=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const kf=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Gf=`uniform sampler2D t2D;
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
}`,Hf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Vf=`uniform float backgroundBlurriness;
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
}`,Wf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Xf=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Yf=`#include <common>
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
}`,qf=`#if DEPTH_PACKING == 3200
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
}`,Kf=`#define DISTANCE
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
}`,Zf=`#define DISTANCE
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
}`,$f=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Jf=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Qf=`uniform float scale;
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
}`,jf=`uniform vec3 diffuse;
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
}`,tp=`#include <common>
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
}`,ep=`uniform vec3 diffuse;
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
}`,np=`#define LAMBERT
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
}`,ip=`#define LAMBERT
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
}`,sp=`#define MATCAP
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
}`,rp=`#define MATCAP
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
}`,ap=`#define NORMAL
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
}`,op=`#define NORMAL
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
}`,lp=`#define PHONG
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
}`,cp=`#define PHONG
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
}`,hp=`#define STANDARD
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
}`,up=`#define STANDARD
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
}`,dp=`#define TOON
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
}`,fp=`#define TOON
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
}`,pp=`uniform float size;
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
}`,mp=`uniform vec3 diffuse;
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
}`,_p=`#include <common>
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
}`,gp=`uniform vec3 color;
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
}`,xp=`uniform float rotation;
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
}`,vp=`uniform vec3 diffuse;
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
}`,qt={alphahash_fragment:ku,alphahash_pars_fragment:Gu,alphamap_fragment:Hu,alphamap_pars_fragment:Vu,alphatest_fragment:Wu,alphatest_pars_fragment:Xu,aomap_fragment:Yu,aomap_pars_fragment:qu,batching_pars_vertex:Ku,batching_vertex:Zu,begin_vertex:$u,beginnormal_vertex:Ju,bsdfs:Qu,iridescence_fragment:ju,bumpmap_pars_fragment:td,clipping_planes_fragment:ed,clipping_planes_pars_fragment:nd,clipping_planes_pars_vertex:id,clipping_planes_vertex:sd,color_fragment:rd,color_pars_fragment:ad,color_pars_vertex:od,color_vertex:ld,common:cd,defaultnormal_vertex:hd,displacementmap_pars_vertex:ud,displacementmap_vertex:dd,emissivemap_fragment:fd,emissivemap_pars_fragment:pd,colorspace_fragment:md,colorspace_pars_fragment:_d,envmap_fragment:gd,envmap_common_pars_fragment:xd,envmap_pars_fragment:vd,envmap_pars_vertex:Sd,envmap_physical_pars_fragment:Ld,envmap_vertex:Md,fog_vertex:yd,fog_pars_vertex:Ed,fog_fragment:bd,fog_pars_fragment:Td,gradientmap_pars_fragment:wd,lightmap_pars_fragment:Ad,lights_lambert_fragment:Rd,lights_lambert_pars_fragment:Cd,lights_pars_begin:Pd,lights_toon_fragment:Dd,lights_toon_pars_fragment:Id,lights_phong_fragment:Nd,lights_phong_pars_fragment:Ud,lights_physical_fragment:Fd,lights_physical_pars_fragment:Od,lights_fragment_begin:Bd,lights_fragment_maps:zd,lights_fragment_end:kd,lightprobes_pars_fragment:Gd,logdepthbuf_fragment:Hd,logdepthbuf_pars_fragment:Vd,logdepthbuf_pars_vertex:Wd,logdepthbuf_vertex:Xd,map_fragment:Yd,map_pars_fragment:qd,map_particle_fragment:Kd,map_particle_pars_fragment:Zd,metalnessmap_fragment:$d,metalnessmap_pars_fragment:Jd,morphinstance_vertex:Qd,morphcolor_vertex:jd,morphnormal_vertex:tf,morphtarget_pars_vertex:ef,morphtarget_vertex:nf,normal_fragment_begin:sf,normal_fragment_maps:rf,normal_pars_fragment:af,normal_pars_vertex:of,normal_vertex:lf,normalmap_pars_fragment:cf,clearcoat_normal_fragment_begin:hf,clearcoat_normal_fragment_maps:uf,clearcoat_pars_fragment:df,iridescence_pars_fragment:ff,opaque_fragment:pf,packing:mf,premultiplied_alpha_fragment:_f,project_vertex:gf,dithering_fragment:xf,dithering_pars_fragment:vf,roughnessmap_fragment:Sf,roughnessmap_pars_fragment:Mf,shadowmap_pars_fragment:yf,shadowmap_pars_vertex:Ef,shadowmap_vertex:bf,shadowmask_pars_fragment:Tf,skinbase_vertex:wf,skinning_pars_vertex:Af,skinning_vertex:Rf,skinnormal_vertex:Cf,specularmap_fragment:Pf,specularmap_pars_fragment:Lf,tonemapping_fragment:Df,tonemapping_pars_fragment:If,transmission_fragment:Nf,transmission_pars_fragment:Uf,uv_pars_fragment:Ff,uv_pars_vertex:Of,uv_vertex:Bf,worldpos_vertex:zf,background_vert:kf,background_frag:Gf,backgroundCube_vert:Hf,backgroundCube_frag:Vf,cube_vert:Wf,cube_frag:Xf,depth_vert:Yf,depth_frag:qf,distance_vert:Kf,distance_frag:Zf,equirect_vert:$f,equirect_frag:Jf,linedashed_vert:Qf,linedashed_frag:jf,meshbasic_vert:tp,meshbasic_frag:ep,meshlambert_vert:np,meshlambert_frag:ip,meshmatcap_vert:sp,meshmatcap_frag:rp,meshnormal_vert:ap,meshnormal_frag:op,meshphong_vert:lp,meshphong_frag:cp,meshphysical_vert:hp,meshphysical_frag:up,meshtoon_vert:dp,meshtoon_frag:fp,points_vert:pp,points_frag:mp,shadow_vert:_p,shadow_frag:gp,sprite_vert:xp,sprite_frag:vp},Mt={common:{diffuse:{value:new jt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Gt},alphaMap:{value:null},alphaMapTransform:{value:new Gt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Gt}},envmap:{envMap:{value:null},envMapRotation:{value:new Gt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Gt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Gt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Gt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Gt},normalScale:{value:new Dt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Gt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Gt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Gt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Gt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new jt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new jt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Gt},alphaTest:{value:0},uvTransform:{value:new Gt}},sprite:{diffuse:{value:new jt(16777215)},opacity:{value:1},center:{value:new Dt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Gt},alphaMap:{value:null},alphaMapTransform:{value:new Gt},alphaTest:{value:0}}},Mn={basic:{uniforms:Ye([Mt.common,Mt.specularmap,Mt.envmap,Mt.aomap,Mt.lightmap,Mt.fog]),vertexShader:qt.meshbasic_vert,fragmentShader:qt.meshbasic_frag},lambert:{uniforms:Ye([Mt.common,Mt.specularmap,Mt.envmap,Mt.aomap,Mt.lightmap,Mt.emissivemap,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,Mt.fog,Mt.lights,{emissive:{value:new jt(0)},envMapIntensity:{value:1}}]),vertexShader:qt.meshlambert_vert,fragmentShader:qt.meshlambert_frag},phong:{uniforms:Ye([Mt.common,Mt.specularmap,Mt.envmap,Mt.aomap,Mt.lightmap,Mt.emissivemap,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,Mt.fog,Mt.lights,{emissive:{value:new jt(0)},specular:{value:new jt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:qt.meshphong_vert,fragmentShader:qt.meshphong_frag},standard:{uniforms:Ye([Mt.common,Mt.envmap,Mt.aomap,Mt.lightmap,Mt.emissivemap,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,Mt.roughnessmap,Mt.metalnessmap,Mt.fog,Mt.lights,{emissive:{value:new jt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:qt.meshphysical_vert,fragmentShader:qt.meshphysical_frag},toon:{uniforms:Ye([Mt.common,Mt.aomap,Mt.lightmap,Mt.emissivemap,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,Mt.gradientmap,Mt.fog,Mt.lights,{emissive:{value:new jt(0)}}]),vertexShader:qt.meshtoon_vert,fragmentShader:qt.meshtoon_frag},matcap:{uniforms:Ye([Mt.common,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,Mt.fog,{matcap:{value:null}}]),vertexShader:qt.meshmatcap_vert,fragmentShader:qt.meshmatcap_frag},points:{uniforms:Ye([Mt.points,Mt.fog]),vertexShader:qt.points_vert,fragmentShader:qt.points_frag},dashed:{uniforms:Ye([Mt.common,Mt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:qt.linedashed_vert,fragmentShader:qt.linedashed_frag},depth:{uniforms:Ye([Mt.common,Mt.displacementmap]),vertexShader:qt.depth_vert,fragmentShader:qt.depth_frag},normal:{uniforms:Ye([Mt.common,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,{opacity:{value:1}}]),vertexShader:qt.meshnormal_vert,fragmentShader:qt.meshnormal_frag},sprite:{uniforms:Ye([Mt.sprite,Mt.fog]),vertexShader:qt.sprite_vert,fragmentShader:qt.sprite_frag},background:{uniforms:{uvTransform:{value:new Gt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:qt.background_vert,fragmentShader:qt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Gt}},vertexShader:qt.backgroundCube_vert,fragmentShader:qt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:qt.cube_vert,fragmentShader:qt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:qt.equirect_vert,fragmentShader:qt.equirect_frag},distance:{uniforms:Ye([Mt.common,Mt.displacementmap,{referencePosition:{value:new F},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:qt.distance_vert,fragmentShader:qt.distance_frag},shadow:{uniforms:Ye([Mt.lights,Mt.fog,{color:{value:new jt(0)},opacity:{value:1}}]),vertexShader:qt.shadow_vert,fragmentShader:qt.shadow_frag}};Mn.physical={uniforms:Ye([Mn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Gt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Gt},clearcoatNormalScale:{value:new Dt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Gt},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new Gt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Gt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Gt},sheen:{value:0},sheenColor:{value:new jt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Gt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Gt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Gt},transmissionSamplerSize:{value:new Dt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Gt},attenuationDistance:{value:0},attenuationColor:{value:new jt(0)},specularColor:{value:new jt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Gt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Gt},anisotropyVector:{value:new Dt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Gt}}]),vertexShader:qt.meshphysical_vert,fragmentShader:qt.meshphysical_frag};const Ks={r:0,b:0,g:0},Sp=new me,Gc=new Gt;Gc.set(-1,0,0,0,1,0,0,0,1);function Mp(n,t,e,i,s,r){const a=new jt(0);let o=s===!0?0:1,l,c,f=null,m=0,h=null;function p(S){let w=S.isScene===!0?S.background:null;if(w&&w.isTexture){const y=S.backgroundBlurriness>0;w=t.get(w,y)}return w}function x(S){let w=!1;const y=p(S);y===null?d(a,o):y&&y.isColor&&(d(y,1),w=!0);const A=n.xr.getEnvironmentBlendMode();A==="additive"?e.buffers.color.setClear(0,0,0,1,r):A==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(n.autoClear||w)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function E(S,w){const y=p(w);y&&y.isCubeTexture?(c===void 0&&(c=new _e(new he(1,1,1),new yi({name:"BackgroundCubeMaterial",uniforms:Qi(Mn.backgroundCube.uniforms),vertexShader:Mn.backgroundCube.vertexShader,fragmentShader:Mn.backgroundCube.fragmentShader,side:je,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(A,b,_){this.matrixWorld.copyPosition(_.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=y,c.material.uniforms.backgroundBlurriness.value=w.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(Sp.makeRotationFromEuler(w.backgroundRotation)).transpose(),y.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Gc),c.material.toneMapped=te.getTransfer(y.colorSpace)!==le,(f!==y||m!==y.version||h!==n.toneMapping)&&(c.material.needsUpdate=!0,f=y,m=y.version,h=n.toneMapping),c.layers.enableAll(),S.unshift(c,c.geometry,c.material,0,0,null)):y&&y.isTexture&&(l===void 0&&(l=new _e(new Ms(2,2),new yi({name:"BackgroundMaterial",uniforms:Qi(Mn.background.uniforms),vertexShader:Mn.background.vertexShader,fragmentShader:Mn.background.fragmentShader,side:Si,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=y,l.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,l.material.toneMapped=te.getTransfer(y.colorSpace)!==le,y.matrixAutoUpdate===!0&&y.updateMatrix(),l.material.uniforms.uvTransform.value.copy(y.matrix),(f!==y||m!==y.version||h!==n.toneMapping)&&(l.material.needsUpdate=!0,f=y,m=y.version,h=n.toneMapping),l.layers.enableAll(),S.unshift(l,l.geometry,l.material,0,0,null))}function d(S,w){S.getRGB(Ks,Oc(n)),e.buffers.color.setClear(Ks.r,Ks.g,Ks.b,w,r)}function u(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(S,w=1){a.set(S),o=w,d(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(S){o=S,d(a,o)},render:x,addToRenderList:E,dispose:u}}function yp(n,t){const e=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=h(null);let r=s,a=!1;function o(N,U,V,P,H){let X=!1;const G=m(N,P,V,U);r!==G&&(r=G,c(r.object)),X=p(N,P,V,H),X&&x(N,P,V,H),H!==null&&t.update(H,n.ELEMENT_ARRAY_BUFFER),(X||a)&&(a=!1,y(N,U,V,P),H!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(H).buffer))}function l(){return n.createVertexArray()}function c(N){return n.bindVertexArray(N)}function f(N){return n.deleteVertexArray(N)}function m(N,U,V,P){const H=P.wireframe===!0;let X=i[U.id];X===void 0&&(X={},i[U.id]=X);const G=N.isInstancedMesh===!0?N.id:0;let et=X[G];et===void 0&&(et={},X[G]=et);let Y=et[V.id];Y===void 0&&(Y={},et[V.id]=Y);let O=Y[H];return O===void 0&&(O=h(l()),Y[H]=O),O}function h(N){const U=[],V=[],P=[];for(let H=0;H<e;H++)U[H]=0,V[H]=0,P[H]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:U,enabledAttributes:V,attributeDivisors:P,object:N,attributes:{},index:null}}function p(N,U,V,P){const H=r.attributes,X=U.attributes;let G=0;const et=V.getAttributes();for(const Y in et)if(et[Y].location>=0){const $=H[Y];let at=X[Y];if(at===void 0&&(Y==="instanceMatrix"&&N.instanceMatrix&&(at=N.instanceMatrix),Y==="instanceColor"&&N.instanceColor&&(at=N.instanceColor)),$===void 0||$.attribute!==at||at&&$.data!==at.data)return!0;G++}return r.attributesNum!==G||r.index!==P}function x(N,U,V,P){const H={},X=U.attributes;let G=0;const et=V.getAttributes();for(const Y in et)if(et[Y].location>=0){let $=X[Y];$===void 0&&(Y==="instanceMatrix"&&N.instanceMatrix&&($=N.instanceMatrix),Y==="instanceColor"&&N.instanceColor&&($=N.instanceColor));const at={};at.attribute=$,$&&$.data&&(at.data=$.data),H[Y]=at,G++}r.attributes=H,r.attributesNum=G,r.index=P}function E(){const N=r.newAttributes;for(let U=0,V=N.length;U<V;U++)N[U]=0}function d(N){u(N,0)}function u(N,U){const V=r.newAttributes,P=r.enabledAttributes,H=r.attributeDivisors;V[N]=1,P[N]===0&&(n.enableVertexAttribArray(N),P[N]=1),H[N]!==U&&(n.vertexAttribDivisor(N,U),H[N]=U)}function S(){const N=r.newAttributes,U=r.enabledAttributes;for(let V=0,P=U.length;V<P;V++)U[V]!==N[V]&&(n.disableVertexAttribArray(V),U[V]=0)}function w(N,U,V,P,H,X,G){G===!0?n.vertexAttribIPointer(N,U,V,H,X):n.vertexAttribPointer(N,U,V,P,H,X)}function y(N,U,V,P){E();const H=P.attributes,X=V.getAttributes(),G=U.defaultAttributeValues;for(const et in X){const Y=X[et];if(Y.location>=0){let O=H[et];if(O===void 0&&(et==="instanceMatrix"&&N.instanceMatrix&&(O=N.instanceMatrix),et==="instanceColor"&&N.instanceColor&&(O=N.instanceColor)),O!==void 0){const $=O.normalized,at=O.itemSize,Et=t.get(O);if(Et===void 0)continue;const q=Et.buffer,ot=Et.type,xt=Et.bytesPerElement,Tt=ot===n.INT||ot===n.UNSIGNED_INT||O.gpuType===ro;if(O.isInterleavedBufferAttribute){const ct=O.data,zt=ct.isInterleavedBuffer===!0?ct.stride:ct.itemSize,Se=O.offset;if(ct.isInstancedInterleavedBuffer||ct.isInstancedBufferAttribute){for(let Ft=0;Ft<Y.locationSize;Ft++)u(Y.location+Ft,ct.meshPerAttribute);N.isInstancedMesh!==!0&&P._maxInstanceCount===void 0&&(P._maxInstanceCount=ct.meshPerAttribute*ct.count)}else for(let Ft=0;Ft<Y.locationSize;Ft++)d(Y.location+Ft);n.bindBuffer(n.ARRAY_BUFFER,q);for(let Ft=0;Ft<Y.locationSize;Ft++)w(Y.location+Ft,at/Y.locationSize,ot,$,zt*xt,(Se+at/Y.locationSize*Ft)*xt,Tt)}else{if(O.isInstancedBufferAttribute){for(let ct=0;ct<Y.locationSize;ct++)u(Y.location+ct,O.meshPerAttribute);N.isInstancedMesh!==!0&&P._maxInstanceCount===void 0&&(P._maxInstanceCount=O.meshPerAttribute*O.count)}else for(let ct=0;ct<Y.locationSize;ct++)d(Y.location+ct);n.bindBuffer(n.ARRAY_BUFFER,q);for(let ct=0;ct<Y.locationSize;ct++)w(Y.location+ct,at/Y.locationSize,ot,$,at*xt,at/Y.locationSize*ct*xt,Tt)}}else if(G!==void 0){const $=G[et];if($!==void 0)switch($.length){case 2:n.vertexAttrib2fv(Y.location,$);break;case 3:n.vertexAttrib3fv(Y.location,$);break;case 4:n.vertexAttrib4fv(Y.location,$);break;default:n.vertexAttrib1fv(Y.location,$)}}}}S()}function A(){D();for(const N in i){const U=i[N];for(const V in U){const P=U[V];for(const H in P){const X=P[H];for(const G in X)f(X[G].object),delete X[G];delete P[H]}}delete i[N]}}function b(N){if(i[N.id]===void 0)return;const U=i[N.id];for(const V in U){const P=U[V];for(const H in P){const X=P[H];for(const G in X)f(X[G].object),delete X[G];delete P[H]}}delete i[N.id]}function _(N){for(const U in i){const V=i[U];for(const P in V){const H=V[P];if(H[N.id]===void 0)continue;const X=H[N.id];for(const G in X)f(X[G].object),delete X[G];delete H[N.id]}}}function M(N){for(const U in i){const V=i[U],P=N.isInstancedMesh===!0?N.id:0,H=V[P];if(H!==void 0){for(const X in H){const G=H[X];for(const et in G)f(G[et].object),delete G[et];delete H[X]}delete V[P],Object.keys(V).length===0&&delete i[U]}}}function D(){R(),a=!0,r!==s&&(r=s,c(r.object))}function R(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:D,resetDefaultState:R,dispose:A,releaseStatesOfGeometry:b,releaseStatesOfObject:M,releaseStatesOfProgram:_,initAttributes:E,enableAttribute:d,disableUnusedAttributes:S}}function Ep(n,t,e){let i;function s(l){i=l}function r(l,c){n.drawArrays(i,l,c),e.update(c,i,1)}function a(l,c,f){f!==0&&(n.drawArraysInstanced(i,l,c,f),e.update(c,i,f))}function o(l,c,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,c,0,f);let h=0;for(let p=0;p<f;p++)h+=c[p];e.update(h,i,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function bp(n,t,e,i){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const _=t.get("EXT_texture_filter_anisotropic");s=n.getParameter(_.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(_){return!(_!==Tn&&i.convert(_)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(_){const M=_===Rn&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(_!==sn&&_!==bn&&!M&&i.convert(_)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE))}function l(_){if(_==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";_="mediump"}return _==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const f=l(c);f!==c&&(kt("WebGLRenderer:",c,"not supported, using",f,"instead."),c=f);const m=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),h=e.logarithmicDepthBuffer===!0&&m===!1;e.reversedDepthBuffer===!0&&m===!1&&kt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),e.logarithmicDepthBuffer===!0&&m===!0&&kt("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");const p=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),x=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),E=n.getParameter(n.MAX_TEXTURE_SIZE),d=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),u=n.getParameter(n.MAX_VERTEX_ATTRIBS),S=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),w=n.getParameter(n.MAX_VARYING_VECTORS),y=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),A=n.getParameter(n.MAX_SAMPLES),b=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:h,reversedDepthBuffer:m,maxTextures:p,maxVertexTextures:x,maxTextureSize:E,maxCubemapSize:d,maxAttributes:u,maxVertexUniforms:S,maxVaryings:w,maxFragmentUniforms:y,maxSamples:A,samples:b}}function Tp(n){const t=this;let e=null,i=0,s=!1,r=!1;const a=new Un,o=new Gt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(m,h){const p=m.length!==0||h||i!==0||s;return s=h,i=m.length,p},this.beginShadows=function(){r=!0,f(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(m,h){e=f(m,h,0)},this.setState=function(m,h,p){const x=m.clippingPlanes,E=m.clipIntersection,d=m.clipShadows,u=n.get(m);if(!s||x===null||x.length===0||r&&!d)r?f(null):c();else{const S=r?0:i,w=S*4;let y=u.clippingState||null;l.value=y,y=f(x,h,w,p);for(let A=0;A!==w;++A)y[A]=e[A];u.clippingState=y,this.numIntersection=E?this.numPlanes:0,this.numPlanes+=S}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function f(m,h,p,x){const E=m!==null?m.length:0;let d=null;if(E!==0){if(d=l.value,x!==!0||d===null){const u=p+E*4,S=h.matrixWorldInverse;o.getNormalMatrix(S),(d===null||d.length<u)&&(d=new Float32Array(u));for(let w=0,y=p;w!==E;++w,y+=4)a.copy(m[w]).applyMatrix4(S,o),a.normal.toArray(d,y),d[y+3]=a.constant}l.value=d,l.needsUpdate=!0}return t.numPlanes=E,t.numIntersection=0,d}}class Eo extends wn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const i={width:t,height:t,depth:1},s=[i,i,i,i,i,i];this.texture=new Nc(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new he(5,5,5),r=new yi({name:"CubemapFromEquirect",uniforms:Qi(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:je,blending:Yi});r.uniforms.tEquirect.value=e;const a=new _e(s,r),o=e.minFilter;return e.minFilter===Qn&&(e.minFilter=Ke),new Ja(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e=!0,i=!0,s=!0){const r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,i,s);t.setRenderTarget(r)}}const yl=256,wp=3,Ap=20,Hc=256,Vc=16,Rp=3,Cp=new F,Pp=new jt;class _r{constructor(t){this._renderer=t,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new Ja(1,10,null),this._boxMesh=new _e(new he(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(t,e=0,i=.1,s=100,r={}){const{size:a=256,position:o=Cp}=r,l=this._renderer;this._setSize(a);const c=this._allocateTarget(),f=this._getSourceTarget(!0);e>0&&(f.texture.mipmapsAutoUpdate=!1);const m=l.autoClear,h=l.autoClearColor,p=l.autoClearDepth,x=l.autoClearStencil,E=t.background;l.autoClear=!0,l.autoClearColor=!0,l.autoClearDepth=!0,l.autoClearStencil=!0,E===null&&(t.background=l.getClearColor(Pp));const d=new Ja(i,s,f);return d.position.copy(o),d.update(l,t),l.autoClear=m,l.autoClearColor=h,l.autoClearDepth=p,l.autoClearStencil=x,t.background=E,e>0&&(f.texture.mipmapsAutoUpdate=!0,this._blur(c,e)),this._applyPMREM(c),c}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Tl(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=bl(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(t,e){return e>0?1-Math.sqrt(1-t/e):0}_setSize(t){this._cubeSize=Math.max(yl,Zh(t))}_fromTexture(t,e){t.mapping===Ki||t.mapping===gs?this._setSize(t.image.length===0?yl:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4);const i=e||this._allocateTarget();return this._textureToCubemap(t),this._applyPMREM(i),i}_allocateTarget(){const t=this._cubeSize,e=El(t,!1,!1),i=Math.log2(t)-wp;for(let s=0;s<=i;s++)e.texture.mipmaps.push({width:t>>s,height:t>>s});return e.texture.name="PMREM",e.texture.isPMREMTexture=!0,e}_getSourceTarget(t=!1){const e=this._cubeSize,i=this._sourceTarget;return(i===null||i.width!==e||t&&i.depthBuffer===!1)&&(i!==null&&i.dispose(),this._sourceTarget=El(e,!0,t)),this._sourceTarget}_compileMaterial(t){this._boxMesh.material=t,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(t,e,i){const s=this._boxMesh,r=this._cubeCamera;s.material=i,r.renderTarget=t,r.activeMipmapLevel=e;const a=t.width>>e;t.viewport.set(0,0,a,a),r.update(this._renderer,s),t.viewport.set(0,0,t.width,t.height)}_textureToCubemap(t){let e;t.mapping===Ki||t.mapping===gs?(this._cubemapMaterial===null&&(this._cubemapMaterial=Tl()),e=this._cubemapMaterial,e.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=bl()),e=this._equirectMaterial),e.uniforms.envMap.value=t,this._renderCube(this._getSourceTarget(),0,e)}_applyPMREM(t){this._ggxMaterial===null&&(this._ggxMaterial=Lp(),this._integrationMaterial=Dp());const e=this._cubeSize,i=t.texture.mipmaps.length-1,s=this._ggxMaterial.uniforms;s.envMap.value=this._sourceTarget.texture;const r=this._integrationMaterial.uniforms;r.envMap.value=this._sourceTarget.texture,r.sourceLod.value=Math.log2(e/Vc);for(let a=0;a<=i;a++){const o=_r.lodToRoughness(a,i);if(a>i-Rp)r.roughness.value=o,this._renderCube(t,a,this._integrationMaterial);else{const l=o>0?Math.log2(e)+.5*Math.log2(6/(Hc*Math.pow(o,4)))+.5:0;s.roughness.value=o,s.lodBias.value=l,this._renderCube(t,a,this._ggxMaterial)}}}_blur(t,e){this._blurMaterial===null&&(this._blurMaterial=Ip());const i=this._blurMaterial,s=i.uniforms,r=this._sourceTarget;s.sigma.value=Math.min(e,Math.PI)/Math.SQRT2,s.envMap.value=r.texture,this._renderCube(t,0,i),s.envMap.value=t.texture,this._renderCube(r,0,i)}}function El(n,t,e){return new Eo(n,{minFilter:Qn,generateMipmaps:t,type:Rn,colorSpace:ur,depthBuffer:e})}function ys(n,t,e){return new yi({name:n,uniforms:t,vertexShader:qt.cube_vert,fragmentShader:e,side:je,blending:Yi,depthTest:!1,depthWrite:!1})}function Lp(){return ys("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${Hc}u

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
	`)}function Dp(){return ys("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:Vc}},`

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
	`)}function Ip(){return ys("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${Ap}
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
	`)}function bl(){return ys("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

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
	`)}function Tl(){return ys("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function Np(n){let t=new WeakMap,e=new WeakMap,i=null;function s(h,p=!1){return h==null?null:p?a(h):r(h)}function r(h){if(h&&h.isTexture){const p=h.mapping;if(p===Cr||p===Pr)if(t.has(h)){const x=t.get(h).texture;return o(x,h.mapping)}else{const x=h.image;if(x&&x.height>0){const E=new Eo(x.height);return E.fromEquirectangularTexture(n,h),t.set(h,E),h.addEventListener("dispose",c),o(E.texture,h.mapping)}else return null}}return h}function a(h){if(h&&h.isTexture&&h.isPMREMTexture!==!0){const p=h.mapping,x=p===Cr||p===Pr,E=p===Ki||p===gs;if(x||E){let d=e.get(h);const u=d!==void 0?d.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==u)return i===null&&(i=new _r(n)),d=x?i.fromEquirectangular(h,d):i.fromCubemap(h,d),d.texture.pmremVersion=h.pmremVersion,e.set(h,d),d.texture;if(d!==void 0)return d.texture;{const S=h.image;return x&&S&&S.height>0||E&&S&&l(S)?(i===null&&(i=new _r(n)),d=x?i.fromEquirectangular(h):i.fromCubemap(h),d.texture.pmremVersion=h.pmremVersion,e.set(h,d),h.addEventListener("dispose",f),d.texture):null}}}return h}function o(h,p){return p===Cr?h.mapping=Ki:p===Pr&&(h.mapping=gs),h}function l(h){let p=0;const x=6;for(let E=0;E<x;E++)h[E]!==void 0&&p++;return p===x}function c(h){const p=h.target;p.removeEventListener("dispose",c);const x=t.get(p);x!==void 0&&(t.delete(p),x.dispose())}function f(h){const p=h.target;p.removeEventListener("dispose",f);const x=e.get(p);x!==void 0&&(e.delete(p),x.dispose())}function m(){t=new WeakMap,e=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:m}}function Up(n){const t={};function e(i){if(t[i]!==void 0)return t[i];const s=n.getExtension(i);return t[i]=s,s}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){const s=e(i);return s===null&&rr("WebGLRenderer: "+i+" extension not supported."),s}}}function Fp(n,t,e,i){const s={},r=new WeakMap,a=new FinalizationRegistry(x=>delete s[x]);function o(x){l(x.target)}function l(x){x.index!==null&&t.remove(x.index);for(const d in x.attributes)t.remove(x.attributes[d]);x.removeEventListener("dispose",o),delete s[x.id],a.unregister(x);const E=r.get(x);E&&(t.remove(E),r.delete(x)),i.releaseStatesOfGeometry(x),x.isInstancedBufferGeometry===!0&&delete x._maxInstanceCount,e.memory.geometries--}function c(x,E){return s[E.id]!==void 0||(E.addEventListener("dispose",o),s[E.id]=new WeakRef(E),a.register(E,E.id,E),e.memory.geometries++),E}function f(x){const E=x.attributes;for(const d in E)t.update(E[d],n.ARRAY_BUFFER)}function m(x){const E=x.index,d=x.attributes.position;let u=0;if(d===void 0)return;const S=E!==null?E.array.length:d.array.length/3-1,w=d.count>=65535?Lc:Pc,y=new w(Math.ceil(S/3)*6,1),A=y.array;if(E!==null){const _=E.array;u=E.version;for(let M=0,D=0;M<S;M+=3){const R=_[M+0],N=_[M+1],U=_[M+2];A[D++]=R,A[D++]=N,A[D++]=N,A[D++]=U,A[D++]=U,A[D++]=R}}else{u=d.version;for(let _=0,M=0;_<S;_+=3){const D=_+0,R=_+1,N=_+2;A[M++]=D,A[M++]=R,A[M++]=R,A[M++]=N,A[M++]=N,A[M++]=D}}y.version=u;const b=r.get(x);b&&t.remove(b),r.set(x,y)}function h(x){const E=r.get(x);if(E){const d=x.index;d!==null&&E.version<d.version&&m(x)}else m(x);return r.get(x)}function p(){for(const x in s){const E=s[x].deref();E!==void 0&&l(E)}}return{get:c,update:f,getWireframeAttribute:h,dispose:p}}function Op(n,t,e){let i;function s(m){i=m}let r,a;function o(m){r=m.type,a=m.bytesPerElement}function l(m,h){n.drawElements(i,h,r,m*a),e.update(h,i,1)}function c(m,h,p){p!==0&&(n.drawElementsInstanced(i,h,r,m*a,p),e.update(h,i,p))}function f(m,h,p){if(p===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,h,0,r,m,0,p);let E=0;for(let d=0;d<p;d++)E+=h[d];e.update(E,i,1)}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=f}function Bp(n){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,a,o){switch(e.calls++,a){case n.TRIANGLES:e.triangles+=o*(r/3);break;case n.LINES:e.lines+=o*(r/2);break;case n.LINE_STRIP:e.lines+=o*(r-1);break;case n.LINE_LOOP:e.lines+=o*r;break;case n.POINTS:e.points+=o*r;break;default:ne("WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:i}}function zp(n,t,e){const i=new WeakMap,s=new ve;function r(a,o,l){const c=a.morphTargetInfluences,f=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,m=f!==void 0?f.length:0;let h=i.get(o);if(h===void 0||h.count!==m){let D=function(){_.dispose(),i.delete(o),o.removeEventListener("dispose",D)};h!==void 0&&h.texture.dispose();const p=o.morphAttributes.position!==void 0,x=o.morphAttributes.normal!==void 0,E=o.morphAttributes.color!==void 0,d=o.morphAttributes.position||[],u=o.morphAttributes.normal||[],S=o.morphAttributes.color||[];let w=0;p===!0&&(w=1),x===!0&&(w=2),E===!0&&(w=3);let y=o.attributes.position.count*w,A=1;y>t.maxTextureSize&&(A=Math.ceil(y/t.maxTextureSize),y=t.maxTextureSize);const b=new Float32Array(y*A*4*m),_=new Rc(b,y,A,m);_.type=bn,_.needsUpdate=!0;const M=w*4;for(let R=0;R<m;R++){const N=d[R],U=u[R],V=S[R],P=y*A*4*R;for(let H=0;H<N.count;H++){const X=H*M;p===!0&&(s.fromBufferAttribute(N,H),b[P+X+0]=s.x,b[P+X+1]=s.y,b[P+X+2]=s.z,b[P+X+3]=0),x===!0&&(s.fromBufferAttribute(U,H),b[P+X+4]=s.x,b[P+X+5]=s.y,b[P+X+6]=s.z,b[P+X+7]=0),E===!0&&(s.fromBufferAttribute(V,H),b[P+X+8]=s.x,b[P+X+9]=s.y,b[P+X+10]=s.z,b[P+X+11]=V.itemSize===4?s.w:1)}}h={count:m,texture:_,size:new Dt(y,A)},i.set(o,h),o.addEventListener("dispose",D)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",a.morphTexture,e);else{let p=0;for(let E=0;E<c.length;E++)p+=c[E];const x=o.morphTargetsRelative?1:1-p;l.getUniforms().setValue(n,"morphTargetBaseInfluence",x),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",h.texture,e),l.getUniforms().setValue(n,"morphTargetsTextureSize",h.size)}return{update:r}}function kp(n,t,e,i,s){let r=new WeakMap;function a(c){const f=s.render.frame,m=c.geometry,h=t.get(c,m);if(r.get(h)!==f&&(t.update(h),r.set(h,f)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==f&&(e.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,n.ARRAY_BUFFER),r.set(c,f))),c.isSkinnedMesh){const p=c.skeleton;r.get(p)!==f&&(p.update(),r.set(p,f))}return h}function o(){r=new WeakMap}function l(c){const f=c.target;f.removeEventListener("dispose",l),i.releaseStatesOfObject(f),e.remove(f.instanceMatrix),f.instanceColor!==null&&e.remove(f.instanceColor)}return{update:a,dispose:o}}const Gp={[ac]:"LINEAR_TONE_MAPPING",[oc]:"REINHARD_TONE_MAPPING",[lc]:"CINEON_TONE_MAPPING",[cc]:"ACES_FILMIC_TONE_MAPPING",[uc]:"AGX_TONE_MAPPING",[dc]:"NEUTRAL_TONE_MAPPING",[hc]:"CUSTOM_TONE_MAPPING"};function Hp(n,t,e,i,s,r){const a=new wn(t,e,{type:n,depthBuffer:s,stencilBuffer:r,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let o=null,l=null,c=null;const f=new dn;f.setAttribute("position",new be([-1,3,0,-1,-1,0,3,-1,0],3)),f.setAttribute("uv",new be([0,2,0,0,2,0],2));const m=new Tu({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),h=new _e(f,m),p=new zc(-1,1,1,-1,0,1);let x=null,E=null,d=!1,u,S=null,w=[],y=!1;this.setSize=function(A,b){a.setSize(A,b),o!==null&&o.setSize(A,b),l!==null&&l.setSize(A,b);for(let _=0;_<w.length;_++){const M=w[_];M.setSize&&M.setSize(A,b)}},this.setEffects=function(A){w=A,y=w.length>0&&w[0].isRenderPass===!0;const b=a.width,_=a.height;w.length>0&&o===null&&(o=new wn(b,_,{type:Rn,depthBuffer:!1,stencilBuffer:!1}),l=new wn(b,_,{type:Rn,depthBuffer:!1,stencilBuffer:!1}));const M=s===!0&&w.some(D=>D.needsDepthTexture===!0);M!==(a.depthTexture!==null)&&(M===!0&&c===null&&(c=new Ji(b,_),r===!0&&(c.format=jn,c.type=Zi)),a.dispose(),a.depthTexture=M?c:null,a.resolveDepthBuffer=M,a.storeMultisampledDepthBuffer=M);for(let D=0;D<w.length;D++){const R=w[D];R.setSize&&R.setSize(b,_),M&&R.needsDepthTexture===!0&&R.setDepthTexture&&R.setDepthTexture(c)}},this.begin=function(A,b){if(d||A.toneMapping===zn&&w.length===0)return!1;if(S=b,b!==null){const _=b.width,M=b.height;(a.width!==_||a.height!==M)&&this.setSize(_,M)}return y===!1&&A.setRenderTarget(a),u=A.toneMapping,A.toneMapping=zn,!0},this.hasRenderPass=function(){return y},this.end=function(A,b){A.toneMapping=u,d=!0;let _=a,M=o;for(let D=0;D<w.length;D++){const R=w[D];R.enabled!==!1&&(R.render(A,M,_,b),R.needsSwap!==!1&&(_=M,M=M===o?l:o))}if(x!==A.outputColorSpace||E!==A.toneMapping){x=A.outputColorSpace,E=A.toneMapping,m.defines={},te.getTransfer(x)===le&&(m.defines.SRGB_TRANSFER="");const D=Gp[E];D&&(m.defines[D]=""),m.needsUpdate=!0}m.uniforms.tDiffuse.value=_.texture,A.setRenderTarget(S),A.render(h,p),S=null,d=!1},this.isCompositing=function(){return d},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),f.dispose(),m.dispose()}}const Wc=new Ve,Xc=new Ji(1,1),Yc=new Uc(1),qc=new Rc,Kc=new nu,Zc=new Nc,wl=[],Al=[],Rl=new Float32Array(16),Cl=new Float32Array(9),Pl=new Float32Array(4);function ts(n,t,e){const i=n[0];if(i<=0||i>0)return n;const s=t*e;let r=wl[s];if(r===void 0&&(r=new Float32Array(s),wl[s]=r),t!==0){i.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,n[a].toArray(r,o)}return r}function Re(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function Ce(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function Er(n,t){let e=Al[t];e===void 0&&(e=new Int32Array(t),Al[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function Vp(n,t){const e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function Wp(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Re(e,t))return;n.uniform2fv(this.addr,t),Ce(e,t)}}function Xp(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Re(e,t))return;n.uniform3fv(this.addr,t),Ce(e,t)}}function Yp(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Re(e,t))return;n.uniform4fv(this.addr,t),Ce(e,t)}}function qp(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(Re(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),Ce(e,t)}else{if(Re(e,i))return;Pl.set(i),n.uniformMatrix2fv(this.addr,!1,Pl),Ce(e,i)}}function Kp(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(Re(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),Ce(e,t)}else{if(Re(e,i))return;Cl.set(i),n.uniformMatrix3fv(this.addr,!1,Cl),Ce(e,i)}}function Zp(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(Re(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),Ce(e,t)}else{if(Re(e,i))return;Rl.set(i),n.uniformMatrix4fv(this.addr,!1,Rl),Ce(e,i)}}function $p(n,t){const e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function Jp(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Re(e,t))return;n.uniform2iv(this.addr,t),Ce(e,t)}}function Qp(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Re(e,t))return;n.uniform3iv(this.addr,t),Ce(e,t)}}function jp(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Re(e,t))return;n.uniform4iv(this.addr,t),Ce(e,t)}}function tm(n,t){const e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function em(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Re(e,t))return;n.uniform2uiv(this.addr,t),Ce(e,t)}}function nm(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Re(e,t))return;n.uniform3uiv(this.addr,t),Ce(e,t)}}function im(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Re(e,t))return;n.uniform4uiv(this.addr,t),Ce(e,t)}}function br(n){return n.version===0&&(n.compareFunction=Ec,n.needsUpdate=!0),n}function sm(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?r=br(Xc):r=Wc,e.setTexture2D(t||r,s)}function rm(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture3D(t||Kc,s)}function am(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_CUBE_SHADOW?r=br(Yc):r=Zc,e.setTextureCube(t||r,s)}function om(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture2DArray(t||qc,s)}function lm(n){switch(n){case 5126:return Vp;case 35664:return Wp;case 35665:return Xp;case 35666:return Yp;case 35674:return qp;case 35675:return Kp;case 35676:return Zp;case 5124:case 35670:return $p;case 35667:case 35671:return Jp;case 35668:case 35672:return Qp;case 35669:case 35673:return jp;case 5125:return tm;case 36294:return em;case 36295:return nm;case 36296:return im;case 35678:case 36198:case 36298:case 36306:case 35682:return sm;case 35679:case 36299:case 36307:return rm;case 35680:case 36300:case 36308:case 36293:return am;case 36289:case 36303:case 36311:case 36292:return om}}function cm(n,t){n.uniform1fv(this.addr,t)}function hm(n,t){const e=ts(t,this.size,2);n.uniform2fv(this.addr,e)}function um(n,t){const e=ts(t,this.size,3);n.uniform3fv(this.addr,e)}function dm(n,t){const e=ts(t,this.size,4);n.uniform4fv(this.addr,e)}function fm(n,t){const e=ts(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function pm(n,t){const e=ts(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function mm(n,t){const e=ts(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function _m(n,t){n.uniform1iv(this.addr,t)}function gm(n,t){n.uniform2iv(this.addr,t)}function xm(n,t){n.uniform3iv(this.addr,t)}function vm(n,t){n.uniform4iv(this.addr,t)}function Sm(n,t){n.uniform1uiv(this.addr,t)}function Mm(n,t){n.uniform2uiv(this.addr,t)}function ym(n,t){n.uniform3uiv(this.addr,t)}function Em(n,t){n.uniform4uiv(this.addr,t)}function bm(n,t,e){const i=this.cache,s=t.length,r=Er(e,s);Re(i,r)||(n.uniform1iv(this.addr,r),Ce(i,r));let a;this.type===n.SAMPLER_2D_SHADOW?a=br(Xc):a=Wc;for(let o=0;o!==s;++o)e.setTexture2D(t[o]||a,r[o])}function Tm(n,t,e){const i=this.cache,s=t.length,r=Er(e,s);Re(i,r)||(n.uniform1iv(this.addr,r),Ce(i,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||Kc,r[a])}function wm(n,t,e){const i=this.cache,s=t.length,r=Er(e,s);Re(i,r)||(n.uniform1iv(this.addr,r),Ce(i,r));let a;this.type===n.SAMPLER_CUBE_SHADOW?a=br(Yc):a=Zc;for(let o=0;o!==s;++o)e.setTextureCube(t[o]||a,r[o])}function Am(n,t,e){const i=this.cache,s=t.length,r=Er(e,s);Re(i,r)||(n.uniform1iv(this.addr,r),Ce(i,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||qc,r[a])}function Rm(n){switch(n){case 5126:return cm;case 35664:return hm;case 35665:return um;case 35666:return dm;case 35674:return fm;case 35675:return pm;case 35676:return mm;case 5124:case 35670:return _m;case 35667:case 35671:return gm;case 35668:case 35672:return xm;case 35669:case 35673:return vm;case 5125:return Sm;case 36294:return Mm;case 36295:return ym;case 36296:return Em;case 35678:case 36198:case 36298:case 36306:case 35682:return bm;case 35679:case 36299:case 36307:return Tm;case 35680:case 36300:case 36308:case 36293:return wm;case 36289:case 36303:case 36311:case 36292:return Am}}class Cm{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=lm(e.type)}}class Pm{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Rm(e.type)}}class Lm{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(t,e[o.id],i)}}}const na=/(\w+)(\])?(\[|\.)?/g;function Ll(n,t){n.seq.push(t),n.map[t.id]=t}function Dm(n,t,e){const i=n.name,s=i.length;for(na.lastIndex=0;;){const r=na.exec(i),a=na.lastIndex;let o=r[1];const l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){Ll(e,c===void 0?new Cm(o,n,t):new Pm(o,n,t));break}else{let m=e.map[o];m===void 0&&(m=new Lm(o),Ll(e,m)),e=m}}}class or{constructor(t,e){this.seq=[],this.map={};const i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){const o=t.getActiveUniform(e,a),l=t.getUniformLocation(e,o.name);Dm(o,l,this)}const s=[],r=[];for(const a of this.seq)a.type===t.SAMPLER_2D_SHADOW||a.type===t.SAMPLER_CUBE_SHADOW||a.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(t,e,i,s){const r=this.map[e];r!==void 0&&r.setValue(t,i,s)}setOptional(t,e,i){const s=e[i];s!==void 0&&this.setValue(t,i,s)}static upload(t,e,i,s){for(let r=0,a=e.length;r!==a;++r){const o=e[r],l=i[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,s)}}static seqWithValue(t,e){const i=[];for(let s=0,r=t.length;s!==r;++s){const a=t[s];a.id in e&&i.push(a)}return i}}function Dl(n,t,e){const i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}const Im=37297;let Nm=0;function Um(n,t){const e=n.split(`
`),i=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){const o=a+1;i.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return i.join(`
`)}const Il=new Gt;function Fm(n){te._getMatrix(Il,te.workingColorSpace,n);const t=`mat3( ${Il.elements.map(e=>e.toFixed(4))} )`;switch(te.getTransfer(n)){case dr:return[t,"LinearTransferOETF"];case le:return[t,"sRGBTransferOETF"];default:return kt("WebGLProgram: Unsupported color space: ",n),[t,"LinearTransferOETF"]}}function Nl(n,t,e){const i=n.getShaderParameter(t,n.COMPILE_STATUS),r=(n.getShaderInfoLog(t)||"").trim();if(i&&r==="")return"";const a=/ERROR: 0:(\d+)/.exec(r);if(a){const o=parseInt(a[1]);return e.toUpperCase()+`

`+r+`

`+Um(n.getShaderSource(t),o)}else return r}function Om(n,t){const e=Fm(t);return[`vec4 ${n}( vec4 value ) {`,`	return ${e[1]}( vec4( ${e[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}const Bm={[ac]:"Linear",[oc]:"Reinhard",[lc]:"Cineon",[cc]:"ACESFilmic",[uc]:"AgX",[dc]:"Neutral",[hc]:"Custom"};function zm(n,t){const e=Bm[t];return e===void 0?(kt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Zs=new F;function km(){te.getLuminanceCoefficients(Zs);const n=Zs.x.toFixed(4),t=Zs.y.toFixed(4),e=Zs.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Gm(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ds).join(`
`)}function Hm(n){const t=[];for(const e in n){const i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function Vm(n,t){const e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const r=n.getActiveAttrib(t,s),a=r.name;let o=1;r.type===n.FLOAT_MAT2&&(o=2),r.type===n.FLOAT_MAT3&&(o=3),r.type===n.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:n.getAttribLocation(t,a),locationSize:o}}return e}function ds(n){return n!==""}function Ul(n,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,t.numLightProbeGrids)}function Fl(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Wm=/^[ \t]*#include +<([\w\d./]+)>/gm;function ja(n){return n.replace(Wm,Xm)}function Xm(n,t){const e=qt[t];if(e===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">");return ja(e)}const Ym=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ol(n){return n.replace(Ym,qm)}function qm(n,t,e,i){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Bl(n){let t=`precision ${n.precision} float;
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
#define LOW_PRECISION`),t}const Km={[fs]:"SHADOWMAP_TYPE_PCF",[us]:"SHADOWMAP_TYPE_VSM"};function Zm(n){return Km[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const $m={[gs]:"ENVMAP_MODE_REFRACTION"};function Jm(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":$m[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}const Qm={[so]:"ENVMAP_BLENDING_MULTIPLY",[Ih]:"ENVMAP_BLENDING_MIX",[Nh]:"ENVMAP_BLENDING_ADD"};function jm(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":Qm[n.combine]||"ENVMAP_BLENDING_NONE"}function t0(n,t,e,i){const s=n.getContext(),r=e.defines;let a=e.vertexShader,o=e.fragmentShader;const l=Zm(e),c=e.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",f=Jm(e),m=jm(e),h=Gm(e),p=Hm(r),x=s.createProgram();let E,d,u=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(E=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p].filter(ds).join(`
`),E.length>0&&(E+=`
`),d=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p].filter(ds).join(`
`),d.length>0&&(d+=`
`)):(E=[Bl(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+f:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+e.diffuseRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ds).join(`
`),d=[Bl(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+f:"",e.envMap?"#define "+m:"",e.envMapPMREM?"#define ENVMAP_MAX_LOD "+e.envMapMaxLod+".0":"",e.envMapPMREM?"#define ENVMAP_SIZE "+e.envMapSize+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",e.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==zn?"#define TONE_MAPPING":"",e.toneMapping!==zn?qt.tonemapping_pars_fragment:"",e.toneMapping!==zn?zm("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",qt.colorspace_pars_fragment,Om("linearToOutputTexel",e.outputColorSpace),km(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(ds).join(`
`)),a=ja(a),a=Ul(a,e),a=Fl(a,e),o=ja(o),o=Ul(o,e),o=Fl(o,e),a=Ol(a),o=Ol(o),e.isRawShaderMaterial!==!0&&(u=`#version 300 es
`,E=[h,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+E,d=["#define varying in",e.glslVersion===qo?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===qo?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);const S=u+E+a,w=u+d+o,y=Dl(s,s.VERTEX_SHADER,S),A=Dl(s,s.FRAGMENT_SHADER,w);s.attachShader(x,y),s.attachShader(x,A),e.index0AttributeName!==void 0?s.bindAttribLocation(x,0,e.index0AttributeName):e.hasPositionAttribute===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function b(R){if(n.debug.checkShaderErrors){const N=s.getProgramInfoLog(x)||"",U=s.getShaderInfoLog(y)||"",V=s.getShaderInfoLog(A)||"",P=N.trim(),H=U.trim(),X=V.trim();let G=!0,et=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if(G=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,x,y,A);else{const Y=Nl(s,y,"vertex"),O=Nl(s,A,"fragment");ne("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+P+`
`+Y+`
`+O)}else P!==""?kt("WebGLProgram: Program Info Log:",P):(H===""||X==="")&&(et=!1);et&&(R.diagnostics={runnable:G,programLog:P,vertexShader:{log:H,prefix:E},fragmentShader:{log:X,prefix:d}})}s.deleteShader(y),s.deleteShader(A),_=new or(s,x),M=Vm(s,x)}let _;this.getUniforms=function(){return _===void 0&&b(this),_};let M;this.getAttributes=function(){return M===void 0&&b(this),M};let D=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return D===!1&&(D=s.getProgramParameter(x,Im)),D},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Nm++,this.cacheKey=t,this.usedTimes=1,this.program=x,this.vertexShader=y,this.fragmentShader=A,this}let e0=0;class n0{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,i){const s=this._getShaderCacheForMaterial(t);return s.has(e)===!1&&(s.add(e),e.usedTimes++),s.has(i)===!1&&(s.add(i),i.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){const e=this.shaderCache;let i=e.get(t);return i===void 0&&(i=new i0(t),e.set(t,i)),i}}class i0{constructor(t){this.id=e0++,this.code=t,this.usedTimes=0}}function s0(n){return n===Mi||n===cr||n===hr}function r0(n,t,e,i,s,r){const a=new fo,o=new n0,l=new Set,c=[],f=new Map,m=i.logarithmicDepthBuffer,h={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(_){return l.add(_),_===0?"uv":`uv${_}`}function x(_,M,D,R,N,U){const V=R.fog,P=N.geometry,H=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?R.environment:null,X=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap,G=t.get(_.envMap||H,X),et=h[_.type];let Y=i.precision;_.precision!==null&&(Y=i.getMaxPrecision(_.precision),Y!==_.precision&&kt("WebGLProgram.getParameters:",_.precision,"not supported, using",Y,"instead."));const O=P.morphAttributes.position||P.morphAttributes.normal||P.morphAttributes.color,$=O!==void 0?O.length:0;let at=0;P.morphAttributes.position!==void 0&&(at=1),P.morphAttributes.normal!==void 0&&(at=2),P.morphAttributes.color!==void 0&&(at=3);let Et,q,ot,xt;if(et){const St=Mn[et];Et=St.vertexShader,q=St.fragmentShader}else{Et=_.vertexShader,q=_.fragmentShader;const St=o.getVertexShaderStage(_),oe=o.getFragmentShaderStage(_);o.update(_,St,oe),ot=St.id,xt=oe.id}const Tt=n.getRenderTarget(),ct=n.state.buffers.depth.getReversed(),zt=N.isInstancedMesh===!0,Se=N.isBatchedMesh===!0,Ft=!!_.map,Zt=!!_.matcap,ie=!!G,Wt=ie&&G.isPMREMTexture===!0,Me=!!_.aoMap,ye=!!_.lightMap,Be=!!_.bumpMap&&_.wireframe===!1,Z=!!_.normalMap,ht=!!_.displacementMap,st=!!_.emissiveMap,wt=!!_.metalnessMap,vt=!!_.roughnessMap,Ot=_.anisotropy>0,L=_.clearcoat>0,ue=_.diffuseRoughness>0,Vt=_.dispersion>0,Kt=_.retroreflectivity>0,nt=_.iridescence>0,ae=_.sheen>0,Pt=_.transmission>0,Bt=Ot&&!!_.anisotropyMap,T=L&&!!_.clearcoatMap,g=L&&!!_.clearcoatNormalMap,B=L&&!!_.clearcoatRoughnessMap,it=ue&&!!_.diffuseRoughnessMap,tt=nt&&!!_.iridescenceMap,ut=nt&&!!_.iridescenceThicknessMap,_t=ae&&!!_.sheenColorMap,J=ae&&!!_.sheenRoughnessMap,Q=!!_.specularMap,ft=!!_.specularColorMap,C=!!_.specularIntensityMap,j=Pt&&!!_.transmissionMap,K=Pt&&!!_.thicknessMap,pt=!!_.gradientMap,lt=!!_.alphaMap,dt=_.alphaTest>0,It=!!_.alphaHash,Yt=!!_.extensions;let rt=zn;_.toneMapped&&(Tt===null||Tt.isXRRenderTarget===!0)&&(rt=n.toneMapping);const Ut=Wt?G.isCompressedCubeTexture?G.image[0].mipmaps:G.mipmaps:null,Xt={shaderID:et,shaderType:_.type,shaderName:_.name,vertexShader:Et,fragmentShader:q,defines:_.defines,customVertexShaderID:ot,customFragmentShaderID:xt,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:Y,batching:Se,batchingColor:Se&&N._colorsTexture!==null,instancing:zt,instancingColor:zt&&N.instanceColor!==null,instancingMorph:zt&&N.morphTexture!==null,outputColorSpace:Tt===null?n.outputColorSpace:Tt.isXRRenderTarget===!0?Tt.texture.colorSpace:te.workingColorSpace,alphaToCoverage:!!_.alphaToCoverage,map:Ft,matcap:Zt,envMap:ie,envMapMode:ie&&G.mapping,envMapPMREM:Wt,envMapMaxLod:Wt?Ut.length-1:null,envMapSize:Wt?Ut[0].width:null,aoMap:Me,lightMap:ye,bumpMap:Be,normalMap:Z,displacementMap:ht,emissiveMap:st,normalMapObjectSpace:Z&&_.normalMapType===Oh,normalMapTangentSpace:Z&&_.normalMapType===Za,packedNormalMap:Z&&_.normalMapType===Za&&s0(_.normalMap.format),metalnessMap:wt,roughnessMap:vt,anisotropy:Ot,anisotropyMap:Bt,clearcoat:L,clearcoatMap:T,clearcoatNormalMap:g,clearcoatRoughnessMap:B,diffuseRoughness:ue,diffuseRoughnessMap:it,dispersion:Vt,retroreflection:Kt,iridescence:nt,iridescenceMap:tt,iridescenceThicknessMap:ut,sheen:ae,sheenColorMap:_t,sheenRoughnessMap:J,specularMap:Q,specularColorMap:ft,specularIntensityMap:C,transmission:Pt,transmissionMap:j,thicknessMap:K,gradientMap:pt,opaque:_.transparent===!1&&_.blending===ps&&_.alphaToCoverage===!1,alphaMap:lt,alphaTest:dt,alphaHash:It,combine:_.combine,mapUv:Ft&&p(_.map.channel),aoMapUv:Me&&p(_.aoMap.channel),lightMapUv:ye&&p(_.lightMap.channel),bumpMapUv:Be&&p(_.bumpMap.channel),normalMapUv:Z&&p(_.normalMap.channel),displacementMapUv:ht&&p(_.displacementMap.channel),emissiveMapUv:st&&p(_.emissiveMap.channel),metalnessMapUv:wt&&p(_.metalnessMap.channel),roughnessMapUv:vt&&p(_.roughnessMap.channel),anisotropyMapUv:Bt&&p(_.anisotropyMap.channel),clearcoatMapUv:T&&p(_.clearcoatMap.channel),clearcoatNormalMapUv:g&&p(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:B&&p(_.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:it&&p(_.diffuseRoughnessMap.channel),iridescenceMapUv:tt&&p(_.iridescenceMap.channel),iridescenceThicknessMapUv:ut&&p(_.iridescenceThicknessMap.channel),sheenColorMapUv:_t&&p(_.sheenColorMap.channel),sheenRoughnessMapUv:J&&p(_.sheenRoughnessMap.channel),specularMapUv:Q&&p(_.specularMap.channel),specularColorMapUv:ft&&p(_.specularColorMap.channel),specularIntensityMapUv:C&&p(_.specularIntensityMap.channel),transmissionMapUv:j&&p(_.transmissionMap.channel),thicknessMapUv:K&&p(_.thicknessMap.channel),alphaMapUv:lt&&p(_.alphaMap.channel),vertexTangents:!!P.attributes.tangent&&(Z||Ot),vertexNormals:!!P.attributes.normal,vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!P.attributes.color&&P.attributes.color.itemSize===4,pointsUvs:N.isPoints===!0&&!!P.attributes.uv&&(Ft||lt),fog:!!V,useFog:_.fog===!0,fogExp2:!!V&&V.isFogExp2,flatShading:_.wireframe===!1&&(_.flatShading===!0||P.attributes.normal===void 0&&Z===!1&&(_.isMeshLambertMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isMeshPhysicalMaterial)),sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:m,reversedDepthBuffer:ct,skinning:N.isSkinnedMesh===!0,hasPositionAttribute:P.attributes.position!==void 0,morphTargets:P.morphAttributes.position!==void 0,morphNormals:P.morphAttributes.normal!==void 0,morphColors:P.morphAttributes.color!==void 0,morphTargetsCount:$,morphTextureStride:at,numSunLights:M.sun.length,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numSunLightShadows:M.sunShadowMap.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numLightProbeGrids:U.filter(St=>St.texture!==null).length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:_.dithering,shadowMapEnabled:n.shadowMap.enabled&&D.length>0,shadowMapType:n.shadowMap.type,toneMapping:rt,decodeVideoTexture:Ft&&_.map.isVideoTexture===!0&&te.getTransfer(_.map.colorSpace)===le,decodeVideoTextureEmissive:st&&_.emissiveMap.isVideoTexture===!0&&te.getTransfer(_.emissiveMap.colorSpace)===le,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===En,flipSided:_.side===je,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:Yt&&_.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Yt&&_.extensions.multiDraw===!0||Se)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return Xt.vertexUv1s=l.has(1),Xt.vertexUv2s=l.has(2),Xt.vertexUv3s=l.has(3),l.clear(),Xt}function E(_){const M=[];if(_.shaderID?M.push(_.shaderID):(M.push(_.customVertexShaderID),M.push(_.customFragmentShaderID)),_.defines!==void 0)for(const D in _.defines)M.push(D),M.push(_.defines[D]);return _.isRawShaderMaterial===!1&&(d(M,_),u(M,_),M.push(n.outputColorSpace)),M.push(_.customProgramCacheKey),M.join()}function d(_,M){_.push(M.precision),_.push(M.outputColorSpace),_.push(M.envMapMode),_.push(M.envMapPMREM),_.push(M.envMapMaxLod),_.push(M.envMapSize),_.push(M.mapUv),_.push(M.alphaMapUv),_.push(M.lightMapUv),_.push(M.aoMapUv),_.push(M.bumpMapUv),_.push(M.normalMapUv),_.push(M.displacementMapUv),_.push(M.emissiveMapUv),_.push(M.metalnessMapUv),_.push(M.roughnessMapUv),_.push(M.anisotropyMapUv),_.push(M.clearcoatMapUv),_.push(M.clearcoatNormalMapUv),_.push(M.clearcoatRoughnessMapUv),_.push(M.diffuseRoughnessMapUv),_.push(M.iridescenceMapUv),_.push(M.iridescenceThicknessMapUv),_.push(M.sheenColorMapUv),_.push(M.sheenRoughnessMapUv),_.push(M.specularMapUv),_.push(M.specularColorMapUv),_.push(M.specularIntensityMapUv),_.push(M.transmissionMapUv),_.push(M.thicknessMapUv),_.push(M.combine),_.push(M.fogExp2),_.push(M.sizeAttenuation),_.push(M.morphTargetsCount),_.push(M.numSunLights),_.push(M.numDirLights),_.push(M.numPointLights),_.push(M.numSpotLights),_.push(M.numSpotLightMaps),_.push(M.numHemiLights),_.push(M.numRectAreaLights),_.push(M.numSunLightShadows),_.push(M.numDirLightShadows),_.push(M.numPointLightShadows),_.push(M.numSpotLightShadows),_.push(M.numSpotLightShadowsWithMaps),_.push(M.numLightProbes),_.push(M.numLightProbeGrids),_.push(M.shadowMapType),_.push(M.toneMapping),_.push(M.numClippingPlanes),_.push(M.numClipIntersection),_.push(M.depthPacking)}function u(_,M){a.disableAll(),M.instancing&&a.enable(0),M.instancingColor&&a.enable(1),M.instancingMorph&&a.enable(2),M.matcap&&a.enable(3),M.envMap&&a.enable(4),M.normalMapObjectSpace&&a.enable(5),M.normalMapTangentSpace&&a.enable(6),M.clearcoat&&a.enable(7),M.iridescence&&a.enable(8),M.alphaTest&&a.enable(9),M.vertexColors&&a.enable(10),M.vertexAlphas&&a.enable(11),M.vertexUv1s&&a.enable(12),M.vertexUv2s&&a.enable(13),M.vertexUv3s&&a.enable(14),M.vertexTangents&&a.enable(15),M.anisotropy&&a.enable(16),M.alphaHash&&a.enable(17),M.batching&&a.enable(18),M.dispersion&&a.enable(19),M.retroreflection&&a.enable(24),M.diffuseRoughness&&a.enable(25),M.batchingColor&&a.enable(20),M.gradientMap&&a.enable(21),M.packedNormalMap&&a.enable(22),M.vertexNormals&&a.enable(23),_.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.reversedDepthBuffer&&a.enable(4),M.skinning&&a.enable(5),M.morphTargets&&a.enable(6),M.morphNormals&&a.enable(7),M.morphColors&&a.enable(8),M.premultipliedAlpha&&a.enable(9),M.shadowMapEnabled&&a.enable(10),M.doubleSided&&a.enable(11),M.flipSided&&a.enable(12),M.useDepthPacking&&a.enable(13),M.dithering&&a.enable(14),M.transmission&&a.enable(15),M.sheen&&a.enable(16),M.opaque&&a.enable(17),M.pointsUvs&&a.enable(18),M.decodeVideoTexture&&a.enable(19),M.decodeVideoTextureEmissive&&a.enable(20),M.alphaToCoverage&&a.enable(21),M.numLightProbeGrids>0&&a.enable(22),M.hasPositionAttribute&&a.enable(23),_.push(a.mask)}function S(_){const M=h[_.type];let D;if(M){const R=Mn[M];D=yu.clone(R.uniforms)}else D=_.uniforms;return D}function w(_,M){let D=f.get(M);return D!==void 0?++D.usedTimes:(D=new t0(n,M,_,s),c.push(D),f.set(M,D)),D}function y(_){if(--_.usedTimes===0){const M=c.indexOf(_);c[M]=c[c.length-1],c.pop(),f.delete(_.cacheKey),_.destroy()}}function A(_){o.remove(_)}function b(){o.dispose()}return{getParameters:x,getProgramCacheKey:E,getUniforms:S,acquireProgram:w,releaseProgram:y,releaseShaderCache:A,programs:c,dispose:b}}function a0(){let n=new WeakMap;function t(a){return n.has(a)}function e(a){let o=n.get(a);return o===void 0&&(o={},n.set(a,o)),o}function i(a){n.delete(a)}function s(a,o,l){n.get(a)[o]=l}function r(){n=new WeakMap}return{has:t,get:e,remove:i,update:s,dispose:r}}function o0(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.materialVariant!==t.materialVariant?n.materialVariant-t.materialVariant:n.z!==t.z?n.z-t.z:n.id-t.id}function zl(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function kl(){const n=[];let t=0;const e=[],i=[],s=[];function r(){t=0,e.length=0,i.length=0,s.length=0}function a(h){let p=0;return h.isInstancedMesh&&(p+=2),h.isSkinnedMesh&&(p+=1),p}function o(h,p,x,E,d,u){let S=n[t];return S===void 0?(S={id:h.id,object:h,geometry:p,material:x,materialVariant:a(h),groupOrder:E,renderOrder:h.renderOrder,z:d,group:u},n[t]=S):(S.id=h.id,S.object=h,S.geometry=p,S.material=x,S.materialVariant=a(h),S.groupOrder=E,S.renderOrder=h.renderOrder,S.z=d,S.group=u),t++,S}function l(h,p,x,E,d,u,S){S.reversedDepth===!0&&(d=-d);const w=o(h,p,x,E,d,u);x.transmission>0?i.push(w):x.transparent===!0?s.push(w):e.push(w)}function c(h,p,x,E,d,u){const S=o(h,p,x,E,d,u);x.transmission>0?i.unshift(S):x.transparent===!0?s.unshift(S):e.unshift(S)}function f(h,p){e.length>1&&e.sort(h||o0),i.length>1&&i.sort(p||zl),s.length>1&&s.sort(p||zl)}function m(){for(let h=t,p=n.length;h<p;h++){const x=n[h];if(x.id===null)break;x.id=null,x.object=null,x.geometry=null,x.material=null,x.group=null}}return{opaque:e,transmissive:i,transparent:s,init:r,push:l,unshift:c,finish:m,sort:f}}function l0(){let n=new WeakMap;function t(i,s){const r=n.get(i);let a;return r===void 0?(a=new kl,n.set(i,[a])):s>=r.length?(a=new kl,r.push(a)):a=r[s],a}function e(){n=new WeakMap}return{get:t,dispose:e}}function c0(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new F,color:new jt};break;case"SpotLight":e={position:new F,direction:new F,color:new jt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new F,color:new jt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new F,skyColor:new jt,groundColor:new jt};break;case"RectAreaLight":e={color:new jt,position:new F,halfWidth:new F,halfHeight:new F};break}return n[t.id]=e,e}}}function h0(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Dt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Dt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Dt,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}let u0=0;function d0(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function f0(n){const t=new c0,e=h0(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new F);const s=new F,r=new me,a=new me;function o(c){let f=0,m=0,h=0;for(let U=0;U<9;U++)i.probe[U].set(0,0,0);let p=0,x=0,E=0,d=0,u=0,S=0,w=0,y=0,A=0,b=0,_=0,M=0,D=0,R=0;c.sort(d0);for(let U=0,V=c.length;U<V;U++){const P=c[U],H=P.color,X=P.intensity,G=P.distance;let et=null;if(P.shadow&&P.shadow.map&&(P.shadow.map.texture.format===Mi?et=P.shadow.map.texture:et=P.shadow.map.depthTexture||P.shadow.map.texture),P.isAmbientLight)f+=H.r*X,m+=H.g*X,h+=H.b*X;else if(P.isLightProbe){for(let Y=0;Y<9;Y++)i.probe[Y].addScaledVector(P.sh.coefficients[Y],X);R++}else if(P.isSunLight){const Y=t.get(P);if(Y.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const O=P.shadow,$=e.get(P);$.shadowIntensity=O.intensity,$.shadowBias=O.bias,$.shadowNormalBias=O.normalBias,$.shadowRadius=O.radius,$.shadowMapSize.copy(O.mapSize).multiply(O.getFrameExtents()),i.sunShadow[x]=$,i.sunShadowMap[x]=et;const at=O.getViewportCount();for(let Et=0;Et<at;Et++)i.sunShadowMatrix[E+Et]=O.getMatrix(Et),i.sunShadowCascade[E+Et]=O._cascadeData[Et];E+=at,x++}i.sun[p]=Y,p++}else if(P.isDirectionalLight){const Y=t.get(P);if(Y.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const O=P.shadow,$=e.get(P);$.shadowIntensity=O.intensity,$.shadowBias=O.bias,$.shadowNormalBias=O.normalBias,$.shadowRadius=O.radius,$.shadowMapSize=O.mapSize,i.directionalShadow[d]=$,i.directionalShadowMap[d]=et,i.directionalShadowMatrix[d]=P.shadow.matrix,A++}i.directional[d]=Y,d++}else if(P.isSpotLight){const Y=t.get(P);Y.position.setFromMatrixPosition(P.matrixWorld),Y.color.copy(H).multiplyScalar(X),Y.distance=G,Y.coneCos=Math.cos(P.angle),Y.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),Y.decay=P.decay,i.spot[S]=Y;const O=P.shadow;if(P.map&&(i.spotLightMap[M]=P.map,M++,O.updateMatrices(P),P.castShadow&&D++),i.spotLightMatrix[S]=O.matrix,P.castShadow){const $=e.get(P);$.shadowIntensity=O.intensity,$.shadowBias=O.bias,$.shadowNormalBias=O.normalBias,$.shadowRadius=O.radius,$.shadowMapSize=O.mapSize,i.spotShadow[S]=$,i.spotShadowMap[S]=et,_++}S++}else if(P.isRectAreaLight){const Y=t.get(P);Y.color.copy(H).multiplyScalar(X),Y.halfWidth.set(P.width*.5,0,0),Y.halfHeight.set(0,P.height*.5,0),i.rectArea[w]=Y,w++}else if(P.isPointLight){const Y=t.get(P);if(Y.color.copy(P.color).multiplyScalar(P.intensity),Y.distance=P.distance,Y.decay=P.decay,P.castShadow){const O=P.shadow,$=e.get(P);$.shadowIntensity=O.intensity,$.shadowBias=O.bias,$.shadowNormalBias=O.normalBias,$.shadowRadius=O.radius,$.shadowMapSize=O.mapSize,$.shadowCameraNear=O.camera.near,$.shadowCameraFar=O.camera.far,i.pointShadow[u]=$,i.pointShadowMap[u]=et,i.pointShadowMatrix[u]=P.shadow.matrix,b++}i.point[u]=Y,u++}else if(P.isHemisphereLight){const Y=t.get(P);Y.skyColor.copy(P.color).multiplyScalar(X),Y.groundColor.copy(P.groundColor).multiplyScalar(X),i.hemi[y]=Y,y++}}w>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Mt.LTC_FLOAT_1,i.rectAreaLTC2=Mt.LTC_FLOAT_2):(i.rectAreaLTC1=Mt.LTC_HALF_1,i.rectAreaLTC2=Mt.LTC_HALF_2)),i.ambient[0]=f,i.ambient[1]=m,i.ambient[2]=h;const N=i.hash;(N.sunLength!==p||N.directionalLength!==d||N.pointLength!==u||N.spotLength!==S||N.rectAreaLength!==w||N.hemiLength!==y||N.numSunShadows!==x||N.numDirectionalShadows!==A||N.numPointShadows!==b||N.numSpotShadows!==_||N.numSpotMaps!==M||N.numLightProbes!==R)&&(i.sun.length=p,i.directional.length=d,i.spot.length=S,i.rectArea.length=w,i.point.length=u,i.hemi.length=y,i.sunShadow.length=x,i.sunShadowMap.length=x,i.sunShadowMatrix.length=E,i.sunShadowCascade.length=E,i.directionalShadow.length=A,i.directionalShadowMap.length=A,i.directionalShadowMatrix.length=A,i.pointShadow.length=b,i.pointShadowMap.length=b,i.pointShadowMatrix.length=b,i.spotShadow.length=_,i.spotShadowMap.length=_,i.spotLightMatrix.length=_+M-D,i.spotLightMap.length=M,i.numSpotLightShadowsWithMaps=D,i.numLightProbes=R,N.sunLength=p,N.directionalLength=d,N.pointLength=u,N.spotLength=S,N.rectAreaLength=w,N.hemiLength=y,N.numSunShadows=x,N.numDirectionalShadows=A,N.numPointShadows=b,N.numSpotShadows=_,N.numSpotMaps=M,N.numLightProbes=R,i.version=u0++)}function l(c,f){let m=0,h=0,p=0,x=0,E=0,d=0;const u=f.matrixWorldInverse;for(let S=0,w=c.length;S<w;S++){const y=c[S];if(y.isSunLight){const A=i.sun[m];A.direction.setFromMatrixPosition(y.matrixWorld),A.direction.transformDirection(u),m++}else if(y.isDirectionalLight){const A=i.directional[h];A.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),A.direction.sub(s),A.direction.transformDirection(u),h++}else if(y.isSpotLight){const A=i.spot[x];A.position.setFromMatrixPosition(y.matrixWorld),A.position.applyMatrix4(u),A.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),A.direction.sub(s),A.direction.transformDirection(u),x++}else if(y.isRectAreaLight){const A=i.rectArea[E];A.position.setFromMatrixPosition(y.matrixWorld),A.position.applyMatrix4(u),a.identity(),r.copy(y.matrixWorld),r.premultiply(u),a.extractRotation(r),A.halfWidth.set(y.width*.5,0,0),A.halfHeight.set(0,y.height*.5,0),A.halfWidth.applyMatrix4(a),A.halfHeight.applyMatrix4(a),E++}else if(y.isPointLight){const A=i.point[p];A.position.setFromMatrixPosition(y.matrixWorld),A.position.applyMatrix4(u),p++}else if(y.isHemisphereLight){const A=i.hemi[d];A.direction.setFromMatrixPosition(y.matrixWorld),A.direction.transformDirection(u),d++}}}return{setup:o,setupView:l,state:i}}function Gl(n){const t=new f0(n),e=[],i=[],s=[];function r(m){f.camera=m,e.length=0,i.length=0,s.length=0}function a(m){m.isLightProbeGrid?s.push(m):e.push(m)}function o(m){i.push(m)}function l(){t.setup(e),s.sort((m,h)=>m.priority-h.priority||m.id-h.id)}function c(m){t.setupView(e,m)}const f={lightsArray:e,shadowsArray:i,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:f,setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function p0(n){let t=new WeakMap;function e(s,r=0){const a=t.get(s);let o;return a===void 0?(o=new Gl(n),t.set(s,[o])):r>=a.length?(o=new Gl(n),a.push(o)):o=a[r],o}function i(){t=new WeakMap}return{get:e,dispose:i}}const m0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,_0=`uniform sampler2D shadow_pass;
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
}`,g0=[new F(1,0,0),new F(-1,0,0),new F(0,1,0),new F(0,-1,0),new F(0,0,1),new F(0,0,-1)],x0=[new F(0,-1,0),new F(0,-1,0),new F(0,0,1),new F(0,0,-1),new F(0,-1,0),new F(0,-1,0)],Hl=new me,cs=new F,ia=new F;function v0(n,t,e){let i=new $i;const s=new Dt,r=new Dt,a=new ve,o=new wu,l=new Au,c={},f=e.maxTextureSize,m={[Si]:je,[je]:Si,[En]:En},h=new yi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Dt},radius:{value:4}},vertexShader:m0,fragmentShader:_0}),p=h.clone();p.defines.HORIZONTAL_PASS=1;const x=new dn;x.setAttribute("position",new ti(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const E=new _e(x,h),d=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=fs;let u=this.type;this.render=function(b,_,M){if(d.enabled===!1||d.autoUpdate===!1&&d.needsUpdate===!1||b.length===0)return;this.type===ph&&(kt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=fs);const D=n.getRenderTarget(),R=n.getActiveCubeFace(),N=n.getActiveMipmapLevel(),U=n.state;U.setBlending(Yi),U.buffers.depth.getReversed()===!0?U.buffers.color.setClear(0,0,0,0):U.buffers.color.setClear(1,1,1,1),U.buffers.depth.setTest(!0),U.setScissorTest(!1);const V=u!==this.type;V&&_.traverse(function(P){P.material&&(Array.isArray(P.material)?P.material.forEach(H=>H.needsUpdate=!0):P.material.needsUpdate=!0)});for(let P=0,H=b.length;P<H;P++){const X=b[P],G=X.shadow;if(G===void 0){kt("WebGLShadowMap:",X,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;s.copy(G.mapSize);const et=G.getFrameExtents();s.multiply(et),r.copy(G.mapSize),(s.x>f||s.y>f)&&(s.x>f&&(r.x=Math.floor(f/et.x),s.x=r.x*et.x,G.mapSize.x=r.x),s.y>f&&(r.y=Math.floor(f/et.y),s.y=r.y*et.y,G.mapSize.y=r.y));const Y=n.state.buffers.depth.getReversed();if(G.camera._reversedDepth=Y,G.map===null||V===!0){if(G.map!==null&&(G.map.depthTexture!==null&&(G.map.depthTexture.dispose(),G.map.depthTexture=null),G.map.dispose()),this.type===us){if(X.isPointLight){kt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}G.map=new wn(s.x,s.y,{format:Mi,type:Rn,minFilter:Ke,magFilter:Ke,generateMipmaps:!1}),G.map.texture.name=X.name+".shadowMap",G.map.depthTexture=new Ji(s.x,s.y,bn),G.map.depthTexture.name=X.name+".shadowMapDepth",G.map.depthTexture.format=ii,G.map.depthTexture.compareFunction=null,G.map.depthTexture.minFilter=Ie,G.map.depthTexture.magFilter=Ie}else X.isPointLight?(G.map=new Eo(s.x),G.map.depthTexture=new Uc(s.x,An)):(G.map=new wn(s.x,s.y),G.map.depthTexture=new Ji(s.x,s.y,An)),G.map.depthTexture.name=X.name+".shadowMap",G.map.depthTexture.format=ii,this.type===fs?(G.map.depthTexture.compareFunction=Y?yc:Mc,G.map.depthTexture.minFilter=Ke,G.map.depthTexture.magFilter=Ke):(G.map.depthTexture.compareFunction=null,G.map.depthTexture.minFilter=Ie,G.map.depthTexture.magFilter=Ie);G.camera.updateProjectionMatrix()}G.map.isWebGLCubeRenderTarget!==!0&&(G.map.width!==s.x||G.map.height!==s.y)&&G.map.setSize(s.x,s.y);const O=G.map.isWebGLCubeRenderTarget?6:G.getViewportCount();X.isPointLight!==!0&&G.updateMatrices(X,M);const $=(G.camera.layers.mask&4294967294)!==0?G.camera.layers:M.layers;for(let at=0;at<O;at++){const Et=G.getCamera(at);if(X.isPointLight){const q=G.camera,ot=G.matrix,xt=X.distance||q.far;xt!==q.far&&(q.far=xt,q.updateProjectionMatrix()),cs.setFromMatrixPosition(X.matrixWorld),q.position.copy(cs),ia.copy(q.position),ia.add(g0[at]),q.up.copy(x0[at]),q.lookAt(ia),q.updateMatrixWorld(),ot.makeTranslation(-cs.x,-cs.y,-cs.z),Hl.multiplyMatrices(q.projectionMatrix,q.matrixWorldInverse),G._frustum.setFromProjectionMatrix(Hl,q.coordinateSystem,q.reversedDepth)}if(G.map.isWebGLCubeRenderTarget)n.setRenderTarget(G.map,at),n.clear();else{at===0&&(n.setRenderTarget(G.map),n.clear());const q=G.getViewport(at);a.set(r.x*q.x,r.y*q.y,r.x*q.z,r.y*q.w),U.viewport(a)}i=G.getFrustum(at),y(_,M,Et,X,$,this.type)}G.isPointLightShadow!==!0&&this.type===us&&S(G,M),G.needsUpdate=!1}u=this.type,d.needsUpdate=!1,n.setRenderTarget(D,R,N)};function S(b,_){const M=t.update(E);h.defines.VSM_SAMPLES!==b.blurSamples&&(h.defines.VSM_SAMPLES=b.blurSamples,p.defines.VSM_SAMPLES=b.blurSamples,h.needsUpdate=!0,p.needsUpdate=!0),b.mapPass===null?b.mapPass=new wn(s.x,s.y,{format:Mi,type:Rn}):(b.mapPass.width!==b.map.width||b.mapPass.height!==b.map.height)&&b.mapPass.setSize(b.map.width,b.map.height),h.uniforms.shadow_pass.value=b.map.depthTexture,h.uniforms.resolution.value.set(b.map.width,b.map.height),h.uniforms.radius.value=b.radius,n.setRenderTarget(b.mapPass),n.clear(),n.renderBufferDirect(_,null,M,h,E,null),p.uniforms.shadow_pass.value=b.mapPass.texture,p.uniforms.resolution.value.set(b.map.width,b.map.height),p.uniforms.radius.value=b.radius,n.setRenderTarget(b.map),n.clear(),n.renderBufferDirect(_,null,M,p,E,null)}function w(b,_,M,D){let R=null;const N=M.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(N!==void 0)R=N;else if(R=M.isPointLight===!0?l:o,n.localClippingEnabled&&_.clipShadows===!0&&Array.isArray(_.clippingPlanes)&&_.clippingPlanes.length!==0||_.displacementMap&&_.displacementScale!==0||_.alphaMap&&_.alphaTest>0||_.map&&_.alphaTest>0||_.alphaToCoverage===!0){const U=R.uuid,V=_.uuid;let P=c[U];P===void 0&&(P={},c[U]=P);let H=P[V];H===void 0&&(H=R.clone(),P[V]=H,_.addEventListener("dispose",A)),R=H}if(R.visible=_.visible,R.wireframe=_.wireframe,D===us?R.side=_.shadowSide!==null?_.shadowSide:_.side:R.side=_.shadowSide!==null?_.shadowSide:m[_.side],R.alphaMap=_.alphaMap,R.alphaTest=_.alphaToCoverage===!0?.5:_.alphaTest,R.map=_.map,R.clipShadows=_.clipShadows,R.clippingPlanes=_.clippingPlanes,R.clipIntersection=_.clipIntersection,R.displacementMap=_.displacementMap,R.displacementScale=_.displacementScale,R.displacementBias=_.displacementBias,R.wireframeLinewidth=_.wireframeLinewidth,R.linewidth=_.linewidth,M.isPointLight===!0&&R.isMeshDistanceMaterial===!0){const U=n.properties.get(R);U.light=M}return R}function y(b,_,M,D,R,N){if(b.visible===!1)return;if(b.layers.test(R)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&N===us)&&(!b.frustumCulled||b.intersectsFrustum(i))){b.modelViewMatrix.multiplyMatrices(M.matrixWorldInverse,b.matrixWorld);const P=t.update(b),H=b.material;if(Array.isArray(H)){const X=P.groups;for(let G=0,et=X.length;G<et;G++){const Y=X[G],O=H[Y.materialIndex];if(O&&O.visible){const $=w(b,O,D,N);b.onBeforeShadow(n,b,_,M,P,$,Y),n.renderBufferDirect(M,null,P,$,b,Y),b.onAfterShadow(n,b,_,M,P,$,Y)}}}else if(H.visible){const X=w(b,H,D,N);b.onBeforeShadow(n,b,_,M,P,X,null),n.renderBufferDirect(M,null,P,X,b,null),b.onAfterShadow(n,b,_,M,P,X,null)}}const V=b.children;for(let P=0,H=V.length;P<H;P++)y(V[P],_,M,D,R,N)}function A(b){b.target.removeEventListener("dispose",A);for(const M in c){const D=c[M],R=b.target.uuid;R in D&&(D[R].dispose(),delete D[R])}}}function S0(n,t){function e(){let C=!1;const j=new ve;let K=null;const pt=new ve(0,0,0,0);return{setMask:function(lt){K!==lt&&!C&&(n.colorMask(lt,lt,lt,lt),K=lt)},setLocked:function(lt){C=lt},setClear:function(lt,dt,It,Yt,rt){rt===!0&&(lt*=Yt,dt*=Yt,It*=Yt),j.set(lt,dt,It,Yt),pt.equals(j)===!1&&(n.clearColor(lt,dt,It,Yt),pt.copy(j))},reset:function(){C=!1,K=null,pt.set(-1,0,0,0)}}}function i(){let C=!1,j=!1,K=null,pt=null,lt=null;return{setReversed:function(dt){if(j!==dt){const It=t.get("EXT_clip_control");dt?It.clipControlEXT(It.LOWER_LEFT_EXT,It.ZERO_TO_ONE_EXT):It.clipControlEXT(It.LOWER_LEFT_EXT,It.NEGATIVE_ONE_TO_ONE_EXT),j=dt;const Yt=lt;lt=null,this.setClear(Yt)}},getReversed:function(){return j},setTest:function(dt){dt?ct(n.DEPTH_TEST):zt(n.DEPTH_TEST)},setMask:function(dt){K!==dt&&!C&&(n.depthMask(dt),K=dt)},setFunc:function(dt){if(j&&(dt=qh[dt]),pt!==dt){switch(dt){case ha:n.depthFunc(n.NEVER);break;case ua:n.depthFunc(n.ALWAYS);break;case da:n.depthFunc(n.LESS);break;case _s:n.depthFunc(n.LEQUAL);break;case fa:n.depthFunc(n.EQUAL);break;case pa:n.depthFunc(n.GEQUAL);break;case ma:n.depthFunc(n.GREATER);break;case _a:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}pt=dt}},setLocked:function(dt){C=dt},setClear:function(dt){lt!==dt&&(lt=dt,j&&(dt=1-dt),n.clearDepth(dt))},reset:function(){C=!1,K=null,pt=null,lt=null,j=!1}}}function s(){let C=!1,j=null,K=null,pt=null,lt=null,dt=null,It=null,Yt=null,rt=null;return{setTest:function(Ut){C||(Ut?ct(n.STENCIL_TEST):zt(n.STENCIL_TEST))},setMask:function(Ut){j!==Ut&&!C&&(n.stencilMask(Ut),j=Ut)},setFunc:function(Ut,Xt,St){(K!==Ut||pt!==Xt||lt!==St)&&(n.stencilFunc(Ut,Xt,St),K=Ut,pt=Xt,lt=St)},setOp:function(Ut,Xt,St){(dt!==Ut||It!==Xt||Yt!==St)&&(n.stencilOp(Ut,Xt,St),dt=Ut,It=Xt,Yt=St)},setLocked:function(Ut){C=Ut},setClear:function(Ut){rt!==Ut&&(n.clearStencil(Ut),rt=Ut)},reset:function(){C=!1,j=null,K=null,pt=null,lt=null,dt=null,It=null,Yt=null,rt=null}}}const r=new e,a=new i,o=new s;let l={};const c=new WeakMap;let f={},m={},h={},p=new WeakMap,x=[],E=null,d=!1,u=null,S=null,w=null,y=null,A=null,b=null,_=null,M=new jt(0,0,0),D=0,R=!1,N=null,U=null,V=null,P=null,H=null;const X=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let G=!1,et=0;const Y=n.getParameter(n.VERSION);Y.indexOf("WebGL")!==-1?(et=parseFloat(/^WebGL (\d)/.exec(Y)[1]),G=et>=1):Y.indexOf("OpenGL ES")!==-1&&(et=parseFloat(/^OpenGL ES (\d)/.exec(Y)[1]),G=et>=2);let O=null,$={};const at=n.getParameter(n.SCISSOR_BOX),Et=n.getParameter(n.VIEWPORT),q=new ve().fromArray(at),ot=new ve().fromArray(Et);function xt(C,j,K,pt){const lt=new Uint8Array(4),dt=n.createTexture();n.bindTexture(C,dt),n.texParameteri(C,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(C,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let It=0;It<K;It++)C===n.TEXTURE_3D||C===n.TEXTURE_2D_ARRAY?n.texImage3D(j,0,n.RGBA,1,1,pt,0,n.RGBA,n.UNSIGNED_BYTE,lt):n.texImage2D(j+It,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,lt);return dt}const Tt={};Tt[n.TEXTURE_2D]=xt(n.TEXTURE_2D,n.TEXTURE_2D,1),Tt[n.TEXTURE_CUBE_MAP]=xt(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),Tt[n.TEXTURE_2D_ARRAY]=xt(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Tt[n.TEXTURE_3D]=xt(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),ct(n.DEPTH_TEST),a.setFunc(_s),Be(!1),Z(Vo),ct(n.CULL_FACE),Me(Yi);function ct(C){f[C]!==!0&&(n.enable(C),f[C]=!0)}function zt(C){f[C]!==!1&&(n.disable(C),f[C]=!1)}function Se(C,j){return h[C]!==j?(n.bindFramebuffer(C,j),h[C]=j,C===n.DRAW_FRAMEBUFFER&&(h[n.FRAMEBUFFER]=j),C===n.FRAMEBUFFER&&(h[n.DRAW_FRAMEBUFFER]=j),!0):!1}function Ft(C,j){let K=x,pt=!1;if(C){K=p.get(j),K===void 0&&(K=[],p.set(j,K));const lt=C.textures;if(K.length!==lt.length||K[0]!==n.COLOR_ATTACHMENT0){for(let dt=0,It=lt.length;dt<It;dt++)K[dt]=n.COLOR_ATTACHMENT0+dt;K.length=lt.length,pt=!0}}else K[0]!==n.BACK&&(K[0]=n.BACK,pt=!0);pt&&n.drawBuffers(K)}function Zt(C){return E!==C?(n.useProgram(C),E=C,!0):!1}const ie={[Hi]:n.FUNC_ADD,[_h]:n.FUNC_SUBTRACT,[gh]:n.FUNC_REVERSE_SUBTRACT};ie[xh]=n.MIN,ie[vh]=n.MAX;const Wt={[Sh]:n.ZERO,[Mh]:n.ONE,[yh]:n.SRC_COLOR,[sc]:n.SRC_ALPHA,[Rh]:n.SRC_ALPHA_SATURATE,[wh]:n.DST_COLOR,[bh]:n.DST_ALPHA,[Eh]:n.ONE_MINUS_SRC_COLOR,[rc]:n.ONE_MINUS_SRC_ALPHA,[Ah]:n.ONE_MINUS_DST_COLOR,[Th]:n.ONE_MINUS_DST_ALPHA,[Ch]:n.CONSTANT_COLOR,[Ph]:n.ONE_MINUS_CONSTANT_COLOR,[Lh]:n.CONSTANT_ALPHA,[Dh]:n.ONE_MINUS_CONSTANT_ALPHA};function Me(C,j,K,pt,lt,dt,It,Yt,rt,Ut){if(C===Yi){d===!0&&(zt(n.BLEND),d=!1);return}if(d===!1&&(ct(n.BLEND),d=!0),C!==mh){if(C!==u||Ut!==R){if((S!==Hi||A!==Hi)&&(n.blendEquation(n.FUNC_ADD),S=Hi,A=Hi),Ut)switch(C){case ps:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Wo:n.blendFunc(n.ONE,n.ONE);break;case Xo:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Yo:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:ne("WebGLState: Invalid blending: ",C);break}else switch(C){case ps:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Wo:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case Xo:ne("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Yo:ne("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:ne("WebGLState: Invalid blending: ",C);break}w=null,y=null,b=null,_=null,M.set(0,0,0),D=0,u=C,R=Ut}return}lt=lt||j,dt=dt||K,It=It||pt,(j!==S||lt!==A)&&(n.blendEquationSeparate(ie[j],ie[lt]),S=j,A=lt),(K!==w||pt!==y||dt!==b||It!==_)&&(n.blendFuncSeparate(Wt[K],Wt[pt],Wt[dt],Wt[It]),w=K,y=pt,b=dt,_=It),(Yt.equals(M)===!1||rt!==D)&&(n.blendColor(Yt.r,Yt.g,Yt.b,rt),M.copy(Yt),D=rt),u=C,R=!1}function ye(C,j){C.side===En?zt(n.CULL_FACE):ct(n.CULL_FACE);let K=C.side===je;j&&(K=!K),Be(K),C.blending===ps&&C.transparent===!1?Me(Yi):Me(C.blending,C.blendEquation,C.blendSrc,C.blendDst,C.blendEquationAlpha,C.blendSrcAlpha,C.blendDstAlpha,C.blendColor,C.blendAlpha,C.premultipliedAlpha),a.setFunc(C.depthFunc),a.setTest(C.depthTest),a.setMask(C.depthWrite),r.setMask(C.colorWrite);const pt=C.stencilWrite;o.setTest(pt),pt&&(o.setMask(C.stencilWriteMask),o.setFunc(C.stencilFunc,C.stencilRef,C.stencilFuncMask),o.setOp(C.stencilFail,C.stencilZFail,C.stencilZPass)),st(C.polygonOffset,C.polygonOffsetFactor,C.polygonOffsetUnits),C.alphaToCoverage===!0?ct(n.SAMPLE_ALPHA_TO_COVERAGE):zt(n.SAMPLE_ALPHA_TO_COVERAGE)}function Be(C){N!==C&&(C?n.frontFace(n.CW):n.frontFace(n.CCW),N=C)}function Z(C){C!==dh?(ct(n.CULL_FACE),C!==U&&(C===Vo?n.cullFace(n.BACK):C===fh?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):zt(n.CULL_FACE),U=C}function ht(C){C!==V&&(G&&n.lineWidth(C),V=C)}function st(C,j,K){C?(ct(n.POLYGON_OFFSET_FILL),(P!==j||H!==K)&&(P=j,H=K,a.getReversed()&&(j=-j,K=-K),n.polygonOffset(j,K))):zt(n.POLYGON_OFFSET_FILL)}function wt(C){C?ct(n.SCISSOR_TEST):zt(n.SCISSOR_TEST)}function vt(C){C===void 0&&(C=n.TEXTURE0+X-1),O!==C&&(n.activeTexture(C),O=C)}function Ot(C,j,K){K===void 0&&(O===null?K=n.TEXTURE0+X-1:K=O);let pt=$[K];pt===void 0&&(pt={type:void 0,texture:void 0},$[K]=pt),(pt.type!==C||pt.texture!==j)&&(O!==K&&(n.activeTexture(K),O=K),n.bindTexture(C,j||Tt[C]),pt.type=C,pt.texture=j)}function L(){const C=$[O];C!==void 0&&C.type!==void 0&&(n.bindTexture(C.type,null),C.type=void 0,C.texture=void 0)}function ue(){try{n.compressedTexImage2D(...arguments)}catch(C){ne("WebGLState:",C)}}function Vt(){try{n.compressedTexImage3D(...arguments)}catch(C){ne("WebGLState:",C)}}function Kt(){try{n.texSubImage2D(...arguments)}catch(C){ne("WebGLState:",C)}}function nt(){try{n.texSubImage3D(...arguments)}catch(C){ne("WebGLState:",C)}}function ae(){try{n.compressedTexSubImage2D(...arguments)}catch(C){ne("WebGLState:",C)}}function Pt(){try{n.compressedTexSubImage3D(...arguments)}catch(C){ne("WebGLState:",C)}}function Bt(){try{n.texStorage2D(...arguments)}catch(C){ne("WebGLState:",C)}}function T(){try{n.texStorage3D(...arguments)}catch(C){ne("WebGLState:",C)}}function g(){try{n.texImage2D(...arguments)}catch(C){ne("WebGLState:",C)}}function B(){try{n.texImage3D(...arguments)}catch(C){ne("WebGLState:",C)}}function it(C){return m[C]!==void 0?m[C]:n.getParameter(C)}function tt(C,j){m[C]!==j&&(n.pixelStorei(C,j),m[C]=j)}function ut(C){q.equals(C)===!1&&(n.scissor(C.x,C.y,C.z,C.w),q.copy(C))}function _t(C){ot.equals(C)===!1&&(n.viewport(C.x,C.y,C.z,C.w),ot.copy(C))}function J(C,j){let K=c.get(j);K===void 0&&(K=new WeakMap,c.set(j,K));let pt=K.get(C);pt===void 0&&(pt=n.getUniformBlockIndex(j,C.name),n.uniformBlockBinding(j,pt,pt),K.set(C,pt))}function Q(C,j,K){const lt=c.get(j).get(C);l[lt]!==K&&(n.bindBufferBase(n.UNIFORM_BUFFER,lt,K),l[lt]=K)}function ft(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),a.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),n.pixelStorei(n.PACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.BROWSER_DEFAULT_WEBGL),n.pixelStorei(n.PACK_ROW_LENGTH,0),n.pixelStorei(n.PACK_SKIP_PIXELS,0),n.pixelStorei(n.PACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_ROW_LENGTH,0),n.pixelStorei(n.UNPACK_IMAGE_HEIGHT,0),n.pixelStorei(n.UNPACK_SKIP_PIXELS,0),n.pixelStorei(n.UNPACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_SKIP_IMAGES,0),f={},m={},O=null,$={},h={},l={},p=new WeakMap,x=[],E=null,d=!1,u=null,S=null,w=null,y=null,A=null,b=null,_=null,M=new jt(0,0,0),D=0,R=!1,N=null,U=null,V=null,P=null,H=null,q.set(0,0,n.canvas.width,n.canvas.height),ot.set(0,0,n.canvas.width,n.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:ct,disable:zt,bindFramebuffer:Se,drawBuffers:Ft,useProgram:Zt,setBlending:Me,setMaterial:ye,setFlipSided:Be,setCullFace:Z,setLineWidth:ht,setPolygonOffset:st,setScissorTest:wt,activeTexture:vt,bindTexture:Ot,unbindTexture:L,compressedTexImage2D:ue,compressedTexImage3D:Vt,texImage2D:g,texImage3D:B,pixelStorei:tt,getParameter:it,updateUBOMapping:J,uniformBlockBinding:Q,texStorage2D:Bt,texStorage3D:T,texSubImage2D:Kt,texSubImage3D:nt,compressedTexSubImage2D:ae,compressedTexSubImage3D:Pt,scissor:ut,viewport:_t,reset:ft}}function M0(n,t,e,i,s,r,a){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Dt,f=new WeakMap,m=new Set;let h;const p=new WeakMap,x=new Set,E=new FinalizationRegistry(T=>x.delete(T));let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function u(T,g){return d?new OffscreenCanvas(T,g):fr("canvas")}function S(T,g,B){let it=1;const tt=Bt(T);if((tt.width>B||tt.height>B)&&(it=B/Math.max(tt.width,tt.height)),it<1)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap||typeof VideoFrame<"u"&&T instanceof VideoFrame){const ut=Math.floor(it*tt.width),_t=Math.floor(it*tt.height);h===void 0&&(h=u(ut,_t));const J=g?u(ut,_t):h;return J.width=ut,J.height=_t,J.getContext("2d").drawImage(T,0,0,ut,_t),kt("WebGLRenderer: Texture has been resized from ("+tt.width+"x"+tt.height+") to ("+ut+"x"+_t+")."),J}else return"data"in T&&kt("WebGLRenderer: Image in DataTexture is too big ("+tt.width+"x"+tt.height+")."),T;return T}function w(T){return T.generateMipmaps}function y(T){n.generateMipmap(T)}function A(T){return T.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:T.isWebGL3DRenderTarget?n.TEXTURE_3D:T.isWebGLArrayRenderTarget||T.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function b(T,g,B,it,tt,ut=!1){if(T!==null){if(n[T]!==void 0)return n[T];kt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let _t;it&&(_t=t.get("EXT_texture_norm16"),_t||kt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let J=g;if(g===n.RED&&(B===n.FLOAT&&(J=n.R32F),B===n.HALF_FLOAT&&(J=n.R16F),B===n.UNSIGNED_BYTE&&(J=n.R8),B===n.UNSIGNED_SHORT&&_t&&(J=_t.R16_EXT),B===n.SHORT&&_t&&(J=_t.R16_SNORM_EXT)),g===n.RED_INTEGER&&(B===n.UNSIGNED_BYTE&&(J=n.R8UI),B===n.UNSIGNED_SHORT&&(J=n.R16UI),B===n.UNSIGNED_INT&&(J=n.R32UI),B===n.BYTE&&(J=n.R8I),B===n.SHORT&&(J=n.R16I),B===n.INT&&(J=n.R32I)),g===n.RG&&(B===n.FLOAT&&(J=n.RG32F),B===n.HALF_FLOAT&&(J=n.RG16F),B===n.UNSIGNED_BYTE&&(J=n.RG8),B===n.UNSIGNED_SHORT&&_t&&(J=_t.RG16_EXT),B===n.SHORT&&_t&&(J=_t.RG16_SNORM_EXT)),g===n.RG_INTEGER&&(B===n.UNSIGNED_BYTE&&(J=n.RG8UI),B===n.UNSIGNED_SHORT&&(J=n.RG16UI),B===n.UNSIGNED_INT&&(J=n.RG32UI),B===n.BYTE&&(J=n.RG8I),B===n.SHORT&&(J=n.RG16I),B===n.INT&&(J=n.RG32I)),g===n.RGB_INTEGER&&(B===n.UNSIGNED_BYTE&&(J=n.RGB8UI),B===n.UNSIGNED_SHORT&&(J=n.RGB16UI),B===n.UNSIGNED_INT&&(J=n.RGB32UI),B===n.BYTE&&(J=n.RGB8I),B===n.SHORT&&(J=n.RGB16I),B===n.INT&&(J=n.RGB32I)),g===n.RGBA_INTEGER&&(B===n.UNSIGNED_BYTE&&(J=n.RGBA8UI),B===n.UNSIGNED_SHORT&&(J=n.RGBA16UI),B===n.UNSIGNED_INT&&(J=n.RGBA32UI),B===n.BYTE&&(J=n.RGBA8I),B===n.SHORT&&(J=n.RGBA16I),B===n.INT&&(J=n.RGBA32I)),g===n.RGB&&(B===n.UNSIGNED_SHORT&&_t&&(J=_t.RGB16_EXT),B===n.SHORT&&_t&&(J=_t.RGB16_SNORM_EXT),B===n.UNSIGNED_INT_5_9_9_9_REV&&(J=n.RGB9_E5),B===n.UNSIGNED_INT_10F_11F_11F_REV&&(J=n.R11F_G11F_B10F)),g===n.RGBA){const Q=ut?dr:te.getTransfer(tt);B===n.FLOAT&&(J=n.RGBA32F),B===n.HALF_FLOAT&&(J=n.RGBA16F),B===n.UNSIGNED_BYTE&&(J=Q===le?n.SRGB8_ALPHA8:n.RGBA8),B===n.UNSIGNED_SHORT&&_t&&(J=_t.RGBA16_EXT),B===n.SHORT&&_t&&(J=_t.RGBA16_SNORM_EXT),B===n.UNSIGNED_SHORT_4_4_4_4&&(J=n.RGBA4),B===n.UNSIGNED_SHORT_5_5_5_1&&(J=n.RGB5_A1)}return(J===n.R16F||J===n.R32F||J===n.RG16F||J===n.RG32F||J===n.RGBA16F||J===n.RGBA32F)&&t.get("EXT_color_buffer_float"),J}function _(T,g){let B;return T?g===null||g===An||g===Zi?B=n.DEPTH24_STENCIL8:g===bn?B=n.DEPTH32F_STENCIL8:g===xs&&(B=n.DEPTH24_STENCIL8,kt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):g===null||g===An||g===Zi?B=n.DEPTH_COMPONENT24:g===bn?B=n.DEPTH_COMPONENT32F:g===xs&&(B=n.DEPTH_COMPONENT16),B}function M(T,g){return w(T)===!0||T.isFramebufferTexture&&T.minFilter!==Ie&&T.minFilter!==Ke?Math.log2(Math.max(g.width,g.height))+1:T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?g.mipmaps.length:1}function D(T){const g=new WeakRef(T);i.get(T).__ref=g,x.add(g),E.register(T,g,g)}function R(T){const g=i.get(T).__ref;g!==void 0&&(x.delete(g),E.unregister(g))}function N(T){V(T.target)}function U(T){P(T.target)}function V(T){T.removeEventListener("dispose",N),R(T),X(T),T.isVideoTexture&&f.delete(T),T.isHTMLTexture&&m.delete(T)}function P(T){T.removeEventListener("dispose",U),R(T),et(T)}function H(){for(const T of x){const g=T.deref();g!==void 0&&(g.isRenderTarget===!0?P(g):V(g))}x.clear(),m.clear()}function X(T){const g=i.get(T);if(g.__webglInit===void 0)return;const B=T.source,it=p.get(B);if(it){const tt=it[g.__cacheKey];tt.usedTimes--,tt.usedTimes===0&&G(T),Object.keys(it).length===0&&p.delete(B)}i.remove(T)}function G(T){const g=i.get(T);n.deleteTexture(g.__webglTexture);const B=T.source,it=p.get(B);delete it[g.__cacheKey],a.memory.textures--}function et(T){const g=i.get(T);g.__depthDisposeCallback&&g.__depthDisposeCallback();const B=T.depthTexture;if(B&&B.renderTarget===T&&V(B),T.isWebGLCubeRenderTarget)for(let tt=0;tt<6;tt++){if(Array.isArray(g.__webglFramebuffer[tt]))for(let ut=0;ut<g.__webglFramebuffer[tt].length;ut++)n.deleteFramebuffer(g.__webglFramebuffer[tt][ut]);else n.deleteFramebuffer(g.__webglFramebuffer[tt]);g.__webglDepthbuffer&&n.deleteRenderbuffer(g.__webglDepthbuffer[tt])}else{if(Array.isArray(g.__webglFramebuffer))for(let tt=0;tt<g.__webglFramebuffer.length;tt++)n.deleteFramebuffer(g.__webglFramebuffer[tt]);else n.deleteFramebuffer(g.__webglFramebuffer);if(g.__webglDepthbuffer&&n.deleteRenderbuffer(g.__webglDepthbuffer),g.__webglMultisampledFramebuffer&&n.deleteFramebuffer(g.__webglMultisampledFramebuffer),g.__webglColorRenderbuffer)for(let tt=0;tt<g.__webglColorRenderbuffer.length;tt++)g.__webglColorRenderbuffer[tt]&&n.deleteRenderbuffer(g.__webglColorRenderbuffer[tt]);g.__webglDepthRenderbuffer&&n.deleteRenderbuffer(g.__webglDepthRenderbuffer)}const it=T.textures;for(let tt=0,ut=it.length;tt<ut;tt++){const _t=i.get(it[tt]);_t.__webglTexture&&(n.deleteTexture(_t.__webglTexture),a.memory.textures--),i.remove(it[tt])}i.remove(T)}let Y=0;function O(){Y=0}function $(){return Y}function at(T){Y=T}function Et(){const T=Y;return T>=s.maxTextures&&kt("WebGLTextures: Trying to use "+(T+1)+" texture units while this GPU supports only "+s.maxTextures),Y+=1,T}function q(T){const g=[];return g.push(T.wrapS),g.push(T.wrapT),g.push(T.wrapR||0),g.push(T.magFilter),g.push(T.minFilter),g.push(T.anisotropy),g.push(T.internalFormat),g.push(T.format),g.push(T.type),g.push(T.generateMipmaps),g.push(T.mipmapsAutoUpdate),g.push(T.premultiplyAlpha),g.push(T.flipY),g.push(T.unpackAlignment),g.push(T.colorSpace),g.join()}function ot(T,g){const B=i.get(T);if(T.isVideoTexture&&ae(T),T.isRenderTargetTexture===!1&&T.isExternalTexture!==!0&&T.version>0&&B.__version!==T.version){const it=T.image;if(it===null)kt("WebGLRenderer: Texture marked for update but no image data found.");else if(it.complete===!1)kt("WebGLRenderer: Texture marked for update but image is incomplete");else{ye(B,T,g);return}}else T.isExternalTexture&&(B.__webglTexture=T.sourceTexture?T.sourceTexture:null);e.bindTexture(n.TEXTURE_2D,B.__webglTexture,n.TEXTURE0+g)}function xt(T,g){const B=i.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&B.__version!==T.version){ye(B,T,g);return}else T.isExternalTexture&&(B.__webglTexture=T.sourceTexture?T.sourceTexture:null);e.bindTexture(n.TEXTURE_2D_ARRAY,B.__webglTexture,n.TEXTURE0+g)}function Tt(T,g){const B=i.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&B.__version!==T.version){ye(B,T,g);return}e.bindTexture(n.TEXTURE_3D,B.__webglTexture,n.TEXTURE0+g)}function ct(T,g){const B=i.get(T);if(T.version>0&&B.__version!==T.version){Be(B,T,g);return}e.bindTexture(n.TEXTURE_CUBE_MAP,B.__webglTexture,n.TEXTURE0+g)}const zt={[ga]:n.REPEAT,[Bn]:n.CLAMP_TO_EDGE,[xa]:n.MIRRORED_REPEAT},Se={[Ie]:n.NEAREST,[Uh]:n.NEAREST_MIPMAP_NEAREST,[Ts]:n.NEAREST_MIPMAP_LINEAR,[Ke]:n.LINEAR,[Lr]:n.LINEAR_MIPMAP_NEAREST,[Qn]:n.LINEAR_MIPMAP_LINEAR},Ft={[zh]:n.NEVER,[Ec]:n.ALWAYS,[kh]:n.LESS,[Mc]:n.LEQUAL,[Gh]:n.EQUAL,[yc]:n.GEQUAL,[Hh]:n.GREATER,[Vh]:n.NOTEQUAL};function Zt(T,g){if(g.type===bn&&t.has("OES_texture_float_linear")===!1&&(g.magFilter===Ke||g.magFilter===Lr||g.magFilter===Ts||g.magFilter===Qn||g.minFilter===Ke||g.minFilter===Lr||g.minFilter===Ts||g.minFilter===Qn)&&kt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(T,n.TEXTURE_WRAP_S,zt[g.wrapS]),n.texParameteri(T,n.TEXTURE_WRAP_T,zt[g.wrapT]),(T===n.TEXTURE_3D||T===n.TEXTURE_2D_ARRAY)&&n.texParameteri(T,n.TEXTURE_WRAP_R,zt[g.wrapR]),n.texParameteri(T,n.TEXTURE_MAG_FILTER,Se[g.magFilter]),n.texParameteri(T,n.TEXTURE_MIN_FILTER,Se[g.minFilter]),g.compareFunction&&(n.texParameteri(T,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(T,n.TEXTURE_COMPARE_FUNC,Ft[g.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(g.magFilter===Ie||g.minFilter!==Ts&&g.minFilter!==Qn||g.type===bn&&t.has("OES_texture_float_linear")===!1)return;if(g.anisotropy>1||i.get(g).__currentAnisotropy){const B=t.get("EXT_texture_filter_anisotropic");n.texParameterf(T,B.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(g.anisotropy,s.getMaxAnisotropy())),i.get(g).__currentAnisotropy=g.anisotropy}}}function ie(T,g){let B=!1;T.__webglInit===void 0&&(T.__webglInit=!0,g.addEventListener("dispose",N),D(g));const it=g.source;let tt=p.get(it);tt===void 0&&(tt={},p.set(it,tt));const ut=q(g);if(ut!==T.__cacheKey){tt[ut]===void 0&&(tt[ut]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,B=!0),tt[ut].usedTimes++;const _t=tt[T.__cacheKey];_t!==void 0&&(tt[T.__cacheKey].usedTimes--,_t.usedTimes===0&&G(g)),T.__cacheKey=ut,T.__webglTexture=tt[ut].texture}return B}function Wt(T,g,B){return Math.floor(Math.floor(T/B)/g)}function Me(T,g,B,it){const ut=T.updateRanges;if(ut.length===0)e.texSubImage2D(n.TEXTURE_2D,0,0,0,g.width,g.height,B,it,g.data);else{ut.sort((C,j)=>C.start-j.start);let _t=0;for(let C=1;C<ut.length;C++){const j=ut[_t],K=ut[C],pt=j.start+j.count,lt=Wt(K.start,g.width,4),dt=Wt(j.start,g.width,4);K.start<=pt+1&&lt===dt&&Wt(K.start+K.count-1,g.width,4)===lt?j.count=Math.max(j.count,K.start+K.count-j.start):(++_t,ut[_t]=K)}ut.length=_t+1;const J=e.getParameter(n.UNPACK_ROW_LENGTH),Q=e.getParameter(n.UNPACK_SKIP_PIXELS),ft=e.getParameter(n.UNPACK_SKIP_ROWS);e.pixelStorei(n.UNPACK_ROW_LENGTH,g.width);for(let C=0,j=ut.length;C<j;C++){const K=ut[C],pt=Math.floor(K.start/4),lt=Math.ceil(K.count/4),dt=pt%g.width,It=Math.floor(pt/g.width),Yt=lt,rt=1;e.pixelStorei(n.UNPACK_SKIP_PIXELS,dt),e.pixelStorei(n.UNPACK_SKIP_ROWS,It),e.texSubImage2D(n.TEXTURE_2D,0,dt,It,Yt,rt,B,it,g.data)}T.clearUpdateRanges(),e.pixelStorei(n.UNPACK_ROW_LENGTH,J),e.pixelStorei(n.UNPACK_SKIP_PIXELS,Q),e.pixelStorei(n.UNPACK_SKIP_ROWS,ft)}}function ye(T,g,B){let it=n.TEXTURE_2D;(g.isDataArrayTexture||g.isCompressedArrayTexture)&&(it=n.TEXTURE_2D_ARRAY),g.isData3DTexture&&(it=n.TEXTURE_3D);const tt=ie(T,g),ut=g.source;e.bindTexture(it,T.__webglTexture,n.TEXTURE0+B);const _t=i.get(ut);if(ut.version!==_t.__version||tt===!0){if(e.activeTexture(n.TEXTURE0+B),(typeof ImageBitmap<"u"&&g.image instanceof ImageBitmap)===!1){const rt=te.getPrimaries(te.workingColorSpace),Ut=g.colorSpace===Jn?null:te.getPrimaries(g.colorSpace),Xt=g.colorSpace===Jn||rt===Ut?n.NONE:n.BROWSER_DEFAULT_WEBGL;e.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,g.flipY),e.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),e.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Xt)}e.pixelStorei(n.UNPACK_ALIGNMENT,g.unpackAlignment);let Q=S(g.image,!1,s.maxTextureSize);Q=Pt(g,Q);const ft=r.convert(g.format,g.colorSpace),C=r.convert(g.type);let j=b(g.internalFormat,ft,C,g.normalized,g.colorSpace,g.isVideoTexture);Zt(it,g);let K;const pt=g.mipmaps,lt=g.isVideoTexture!==!0,dt=_t.__version===void 0||tt===!0,It=ut.dataReady,Yt=M(g,Q);if(g.isDepthTexture)j=_(g.format===jn,g.type),dt&&(lt?e.texStorage2D(n.TEXTURE_2D,1,j,Q.width,Q.height):e.texImage2D(n.TEXTURE_2D,0,j,Q.width,Q.height,0,ft,C,null));else if(g.isDataTexture)if(pt.length>0){lt&&dt&&e.texStorage2D(n.TEXTURE_2D,Yt,j,pt[0].width,pt[0].height);for(let rt=0,Ut=pt.length;rt<Ut;rt++)K=pt[rt],lt?It&&e.texSubImage2D(n.TEXTURE_2D,rt,0,0,K.width,K.height,ft,C,K.data):e.texImage2D(n.TEXTURE_2D,rt,j,K.width,K.height,0,ft,C,K.data);g.generateMipmaps=!1}else lt?(dt&&e.texStorage2D(n.TEXTURE_2D,Yt,j,Q.width,Q.height),It&&Me(g,Q,ft,C)):e.texImage2D(n.TEXTURE_2D,0,j,Q.width,Q.height,0,ft,C,Q.data);else if(g.isCompressedTexture)if(g.isCompressedArrayTexture){lt&&dt&&e.texStorage3D(n.TEXTURE_2D_ARRAY,Yt,j,pt[0].width,pt[0].height,Q.depth);for(let rt=0,Ut=pt.length;rt<Ut;rt++)if(K=pt[rt],g.format!==Tn)if(ft!==null)if(lt){if(It)if(g.layerUpdates.size>0){const Xt=Ml(K.width,K.height,g.format,g.type);for(const St of g.layerUpdates){const oe=K.data.subarray(St*Xt/K.data.BYTES_PER_ELEMENT,(St+1)*Xt/K.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,rt,0,0,St,K.width,K.height,1,ft,oe)}}else e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,rt,0,0,0,K.width,K.height,Q.depth,ft,K.data)}else e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,rt,j,K.width,K.height,Q.depth,0,K.data,0,0);else kt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else lt?It&&e.texSubImage3D(n.TEXTURE_2D_ARRAY,rt,0,0,0,K.width,K.height,Q.depth,ft,C,K.data):e.texImage3D(n.TEXTURE_2D_ARRAY,rt,j,K.width,K.height,Q.depth,0,ft,C,K.data);g.layerUpdates.size>0&&g.clearLayerUpdates()}else{lt&&dt&&e.texStorage2D(n.TEXTURE_2D,Yt,j,pt[0].width,pt[0].height);for(let rt=0,Ut=pt.length;rt<Ut;rt++)K=pt[rt],g.format!==Tn?ft!==null?lt?It&&e.compressedTexSubImage2D(n.TEXTURE_2D,rt,0,0,K.width,K.height,ft,K.data):e.compressedTexImage2D(n.TEXTURE_2D,rt,j,K.width,K.height,0,K.data):kt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):lt?It&&e.texSubImage2D(n.TEXTURE_2D,rt,0,0,K.width,K.height,ft,C,K.data):e.texImage2D(n.TEXTURE_2D,rt,j,K.width,K.height,0,ft,C,K.data)}else if(g.isDataArrayTexture)if(lt){if(dt&&e.texStorage3D(n.TEXTURE_2D_ARRAY,Yt,j,Q.width,Q.height,Q.depth),It)if(g.layerUpdates.size>0){const rt=Ml(Q.width,Q.height,g.format,g.type);for(const Ut of g.layerUpdates){const Xt=Q.data.subarray(Ut*rt/Q.data.BYTES_PER_ELEMENT,(Ut+1)*rt/Q.data.BYTES_PER_ELEMENT);e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,Ut,Q.width,Q.height,1,ft,C,Xt)}g.clearLayerUpdates()}else e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,Q.width,Q.height,Q.depth,ft,C,Q.data)}else e.texImage3D(n.TEXTURE_2D_ARRAY,0,j,Q.width,Q.height,Q.depth,0,ft,C,Q.data);else if(g.isData3DTexture)lt?(dt&&e.texStorage3D(n.TEXTURE_3D,Yt,j,Q.width,Q.height,Q.depth),It&&e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,Q.width,Q.height,Q.depth,ft,C,Q.data)):e.texImage3D(n.TEXTURE_3D,0,j,Q.width,Q.height,Q.depth,0,ft,C,Q.data);else if(g.isFramebufferTexture){if(dt)if(lt)e.texStorage2D(n.TEXTURE_2D,Yt,j,Q.width,Q.height);else{let rt=Q.width,Ut=Q.height;for(let Xt=0;Xt<Yt;Xt++)e.texImage2D(n.TEXTURE_2D,Xt,j,rt,Ut,0,ft,C,null),rt>>=1,Ut>>=1}}else if(g.isHTMLTexture){if("texElementImage2D"in n){const rt=n.canvas;if(rt.hasAttribute("layoutsubtree")||rt.setAttribute("layoutsubtree","true"),Q.parentNode!==rt){rt.appendChild(Q),m.add(g),rt.onpaint=Ut=>{const Xt=Ut.changedElements;for(const St of m)Xt.includes(St.image)&&(St.needsUpdate=!0)},rt.requestPaint();return}if(n.texElementImage2D.length===3)n.texElementImage2D(n.TEXTURE_2D,n.RGBA8,Q);else{const Xt=n.RGBA,St=n.RGBA,oe=n.UNSIGNED_BYTE;n.texElementImage2D(n.TEXTURE_2D,0,Xt,St,oe,Q)}n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)}}else if(pt.length>0){if(lt&&dt){const rt=Bt(pt[0]);e.texStorage2D(n.TEXTURE_2D,Yt,j,rt.width,rt.height)}for(let rt=0,Ut=pt.length;rt<Ut;rt++)K=pt[rt],lt?It&&e.texSubImage2D(n.TEXTURE_2D,rt,0,0,ft,C,K):e.texImage2D(n.TEXTURE_2D,rt,j,ft,C,K);g.generateMipmaps=!1}else if(lt){if(dt){const rt=Bt(Q);e.texStorage2D(n.TEXTURE_2D,Yt,j,rt.width,rt.height)}It&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,ft,C,Q)}else e.texImage2D(n.TEXTURE_2D,0,j,ft,C,Q);w(g)&&g.mipmapsAutoUpdate===!0&&y(it),_t.__version=ut.version,g.onUpdate&&g.onUpdate(g)}T.__version=g.version}function Be(T,g,B){if(g.image.length!==6)return;const it=ie(T,g),tt=g.source;e.bindTexture(n.TEXTURE_CUBE_MAP,T.__webglTexture,n.TEXTURE0+B);const ut=i.get(tt);if(tt.version!==ut.__version||it===!0){e.activeTexture(n.TEXTURE0+B);const _t=te.getPrimaries(te.workingColorSpace),J=g.colorSpace===Jn?null:te.getPrimaries(g.colorSpace),Q=g.colorSpace===Jn||_t===J?n.NONE:n.BROWSER_DEFAULT_WEBGL;e.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,g.flipY),e.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),e.pixelStorei(n.UNPACK_ALIGNMENT,g.unpackAlignment),e.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Q);const ft=g.isCompressedTexture||g.image[0].isCompressedTexture,C=g.image[0]&&g.image[0].isDataTexture,j=[];for(let St=0;St<6;St++)!ft&&!C?j[St]=S(g.image[St],!0,s.maxCubemapSize):j[St]=C?g.image[St].image:g.image[St],j[St]=Pt(g,j[St]);const K=j[0],pt=r.convert(g.format,g.colorSpace),lt=r.convert(g.type);let dt=b(g.internalFormat,pt,lt,g.normalized,g.colorSpace);const It=g.isVideoTexture!==!0,Yt=ut.__version===void 0||it===!0,rt=tt.dataReady;let Ut=M(g,K);Zt(n.TEXTURE_CUBE_MAP,g);let Xt;if(g.isDepthTexture){if(dt=_(g.format===jn,g.type),Yt)if(It)e.texStorage2D(n.TEXTURE_CUBE_MAP,1,dt,K.width,K.height);else for(let St=0;St<6;St++)e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+St,0,dt,K.width,K.height,0,pt,lt,null)}else if(ft){It&&Yt&&e.texStorage2D(n.TEXTURE_CUBE_MAP,Ut,dt,K.width,K.height);for(let St=0;St<6;St++){Xt=j[St].mipmaps;for(let oe=0;oe<Xt.length;oe++){const Pe=Xt[oe];g.format!==Tn?pt!==null?It?rt&&e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+St,oe,0,0,Pe.width,Pe.height,pt,Pe.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+St,oe,dt,Pe.width,Pe.height,0,Pe.data):kt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):It?rt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+St,oe,0,0,Pe.width,Pe.height,pt,lt,Pe.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+St,oe,dt,Pe.width,Pe.height,0,pt,lt,Pe.data)}}}else{if(Xt=g.mipmaps,It&&Yt){Xt.length>0&&Ut++;const St=Bt(j[0]);e.texStorage2D(n.TEXTURE_CUBE_MAP,Ut,dt,St.width,St.height)}for(let St=0;St<6;St++)if(C){It?rt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+St,0,0,0,j[St].width,j[St].height,pt,lt,j[St].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+St,0,dt,j[St].width,j[St].height,0,pt,lt,j[St].data);for(let oe=0;oe<Xt.length;oe++){const Hn=Xt[oe].image[St].image;It?rt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+St,oe+1,0,0,Hn.width,Hn.height,pt,lt,Hn.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+St,oe+1,dt,Hn.width,Hn.height,0,pt,lt,Hn.data)}}else{It?rt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+St,0,0,0,pt,lt,j[St]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+St,0,dt,pt,lt,j[St]);for(let oe=0;oe<Xt.length;oe++){const Pe=Xt[oe];It?rt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+St,oe+1,0,0,pt,lt,Pe.image[St]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+St,oe+1,dt,pt,lt,Pe.image[St])}}}w(g)&&g.mipmapsAutoUpdate===!0&&y(n.TEXTURE_CUBE_MAP),ut.__version=tt.version,g.onUpdate&&g.onUpdate(g)}T.__version=g.version}function Z(T,g,B,it,tt,ut){const _t=r.convert(B.format,B.colorSpace),J=r.convert(B.type),Q=b(B.internalFormat,_t,J,B.normalized,B.colorSpace),ft=i.get(g),C=i.get(B);if(C.__renderTarget=g,!ft.__hasExternalTextures){const j=Math.max(1,g.width>>ut),K=Math.max(1,g.height>>ut);tt===n.TEXTURE_3D||tt===n.TEXTURE_2D_ARRAY?e.texImage3D(tt,ut,Q,j,K,g.depth,0,_t,J,null):e.texImage2D(tt,ut,Q,j,K,0,_t,J,null)}e.bindFramebuffer(n.FRAMEBUFFER,T),nt(g)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,it,tt,C.__webglTexture,0,Kt(g)):(tt===n.TEXTURE_2D||tt>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&tt<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,it,tt,C.__webglTexture,ut),e.bindFramebuffer(n.FRAMEBUFFER,null)}function ht(T,g,B){if(n.bindRenderbuffer(n.RENDERBUFFER,T),g.depthBuffer){const it=g.depthTexture,tt=it&&it.isDepthTexture?it.type:null,ut=_(g.stencilBuffer,tt),_t=g.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;nt(g)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Kt(g),ut,g.width,g.height):B?n.renderbufferStorageMultisample(n.RENDERBUFFER,Kt(g),ut,g.width,g.height):n.renderbufferStorage(n.RENDERBUFFER,ut,g.width,g.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,_t,n.RENDERBUFFER,T)}else{const it=g.textures;for(let tt=0;tt<it.length;tt++){const ut=it[tt],_t=r.convert(ut.format,ut.colorSpace),J=r.convert(ut.type),Q=b(ut.internalFormat,_t,J,ut.normalized,ut.colorSpace);nt(g)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Kt(g),Q,g.width,g.height):B?n.renderbufferStorageMultisample(n.RENDERBUFFER,Kt(g),Q,g.width,g.height):n.renderbufferStorage(n.RENDERBUFFER,Q,g.width,g.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function st(T,g,B){const it=g.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(n.FRAMEBUFFER,T),!(g.depthTexture&&g.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const tt=i.get(g.depthTexture);tt.__renderTarget=g;const ut=it?g.depthTexture.image[0]:g.depthTexture.image;(!tt.__webglTexture||ut.width!==g.width||ut.height!==g.height)&&(ut.width=g.width,ut.height=g.height,g.depthTexture.needsUpdate=!0),it?ct(g.depthTexture,0):ot(g.depthTexture,0);const _t=tt.__webglTexture,J=Kt(g),Q=it?n.TEXTURE_CUBE_MAP_POSITIVE_X+B:n.TEXTURE_2D,ft=g.depthTexture.format===jn?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(g.depthTexture.format===ii)nt(g)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ft,Q,_t,0,J):n.framebufferTexture2D(n.FRAMEBUFFER,ft,Q,_t,0);else if(g.depthTexture.format===jn)nt(g)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ft,Q,_t,0,J):n.framebufferTexture2D(n.FRAMEBUFFER,ft,Q,_t,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function wt(T){const g=i.get(T),B=T.isWebGLCubeRenderTarget===!0;if(g.__boundDepthTexture!==T.depthTexture){const it=T.depthTexture;if(g.__depthDisposeCallback&&g.__depthDisposeCallback(),it){const tt=()=>{delete g.__boundDepthTexture,delete g.__depthDisposeCallback,it.removeEventListener("dispose",tt)};it.addEventListener("dispose",tt),g.__depthDisposeCallback=tt}g.__boundDepthTexture=it}if(T.depthTexture&&!g.__autoAllocateDepthBuffer)if(B)for(let it=0;it<6;it++)st(g.__webglFramebuffer[it],T,it);else T.texture.mipmaps.length>0?st(g.__webglFramebuffer[0],T,0):st(g.__webglFramebuffer,T,0);else if(B){g.__webglDepthbuffer=[];for(let it=0;it<6;it++)if(e.bindFramebuffer(n.FRAMEBUFFER,g.__webglFramebuffer[it]),g.__webglDepthbuffer[it]===void 0)g.__webglDepthbuffer[it]=n.createRenderbuffer(),ht(g.__webglDepthbuffer[it],T,!1);else{const tt=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ut=g.__webglDepthbuffer[it];n.bindRenderbuffer(n.RENDERBUFFER,ut),n.framebufferRenderbuffer(n.FRAMEBUFFER,tt,n.RENDERBUFFER,ut)}}else if(T.texture.mipmaps.length>0?e.bindFramebuffer(n.FRAMEBUFFER,g.__webglFramebuffer[0]):e.bindFramebuffer(n.FRAMEBUFFER,g.__webglFramebuffer),g.__webglDepthbuffer===void 0)g.__webglDepthbuffer=n.createRenderbuffer(),ht(g.__webglDepthbuffer,T,!1);else{const tt=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ut=g.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,ut),n.framebufferRenderbuffer(n.FRAMEBUFFER,tt,n.RENDERBUFFER,ut)}e.bindFramebuffer(n.FRAMEBUFFER,null)}function vt(T,g,B){const it=i.get(T);g!==void 0&&Z(it.__webglFramebuffer,T,T.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),B!==void 0&&wt(T)}function Ot(T){const g=T.texture,B=i.get(T),it=i.get(g);T.addEventListener("dispose",U),D(T);const tt=T.textures,ut=T.isWebGLCubeRenderTarget===!0,_t=tt.length>1;if(_t||(it.__webglTexture===void 0&&(it.__webglTexture=n.createTexture()),it.__version=g.version,a.memory.textures++),ut){B.__webglFramebuffer=[];for(let J=0;J<6;J++)if(g.mipmaps.length>0){B.__webglFramebuffer[J]=[];for(let Q=0;Q<g.mipmaps.length;Q++)B.__webglFramebuffer[J][Q]=n.createFramebuffer()}else B.__webglFramebuffer[J]=n.createFramebuffer()}else{if(g.mipmaps.length>0){B.__webglFramebuffer=[];for(let J=0;J<g.mipmaps.length;J++)B.__webglFramebuffer[J]=n.createFramebuffer()}else B.__webglFramebuffer=n.createFramebuffer();if(_t)for(let J=0,Q=tt.length;J<Q;J++){const ft=i.get(tt[J]);ft.__webglTexture===void 0&&(ft.__webglTexture=n.createTexture(),a.memory.textures++)}if(T.samples>0&&nt(T)===!1){B.__webglMultisampledFramebuffer=n.createFramebuffer(),B.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let J=0;J<tt.length;J++){const Q=tt[J];B.__webglColorRenderbuffer[J]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,B.__webglColorRenderbuffer[J]);const ft=r.convert(Q.format,Q.colorSpace),C=r.convert(Q.type),j=b(Q.internalFormat,ft,C,Q.normalized,Q.colorSpace,T.isXRRenderTarget===!0),K=Kt(T);n.renderbufferStorageMultisample(n.RENDERBUFFER,K,j,T.width,T.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+J,n.RENDERBUFFER,B.__webglColorRenderbuffer[J])}n.bindRenderbuffer(n.RENDERBUFFER,null),T.depthBuffer&&(B.__webglDepthRenderbuffer=n.createRenderbuffer(),ht(B.__webglDepthRenderbuffer,T,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(ut){e.bindTexture(n.TEXTURE_CUBE_MAP,it.__webglTexture),Zt(n.TEXTURE_CUBE_MAP,g);for(let J=0;J<6;J++)if(g.mipmaps.length>0)for(let Q=0;Q<g.mipmaps.length;Q++)Z(B.__webglFramebuffer[J][Q],T,g,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+J,Q);else Z(B.__webglFramebuffer[J],T,g,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+J,0);w(g)?y(n.TEXTURE_CUBE_MAP):g.mipmaps.length>0&&n.texParameteri(n.TEXTURE_CUBE_MAP,n.TEXTURE_MAX_LEVEL,g.mipmaps.length-1),e.unbindTexture()}else if(_t){for(let J=0,Q=tt.length;J<Q;J++){const ft=tt[J],C=i.get(ft);let j=n.TEXTURE_2D;(T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(j=T.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(j,C.__webglTexture),Zt(j,ft),Z(B.__webglFramebuffer,T,ft,n.COLOR_ATTACHMENT0+J,j,0),w(ft)&&y(j)}e.unbindTexture()}else{let J=n.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(J=T.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(J,it.__webglTexture),Zt(J,g),g.mipmaps.length>0)for(let Q=0;Q<g.mipmaps.length;Q++)Z(B.__webglFramebuffer[Q],T,g,n.COLOR_ATTACHMENT0,J,Q);else Z(B.__webglFramebuffer,T,g,n.COLOR_ATTACHMENT0,J,0);w(g)?y(J):g.mipmaps.length>0&&n.texParameteri(J,n.TEXTURE_MAX_LEVEL,g.mipmaps.length-1),e.unbindTexture()}T.depthBuffer&&wt(T)}function L(T){const g=T.textures;for(let B=0,it=g.length;B<it;B++){const tt=g[B];if(w(tt)&&tt.mipmapsAutoUpdate===!0){const ut=A(T),_t=i.get(tt).__webglTexture;e.bindTexture(ut,_t),y(ut),e.unbindTexture()}}}const ue=[];function Vt(T){if(T.samples>0){if(nt(T)===!1){const g=T.textures,B=T.width,it=T.height;let tt=n.COLOR_BUFFER_BIT;const ut=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,_t=i.get(T),J=g.length>1;if(J)for(let ft=0;ft<g.length;ft++)e.bindFramebuffer(n.FRAMEBUFFER,_t.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ft,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,_t.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ft,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,_t.__webglMultisampledFramebuffer),T.texture.mipmaps.length>0?e.bindFramebuffer(n.DRAW_FRAMEBUFFER,_t.__webglFramebuffer[0]):e.bindFramebuffer(n.DRAW_FRAMEBUFFER,_t.__webglFramebuffer);for(let ft=0;ft<g.length;ft++){if(T.resolveDepthBuffer&&(T.depthBuffer&&(tt|=n.DEPTH_BUFFER_BIT),T.stencilBuffer&&T.resolveStencilBuffer&&(tt|=n.STENCIL_BUFFER_BIT)),J){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,_t.__webglColorRenderbuffer[ft]);const C=i.get(g[ft]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,C,0)}n.blitFramebuffer(0,0,B,it,0,0,B,it,tt,n.NEAREST),l===!0&&(ue.length=0,ue.push(n.COLOR_ATTACHMENT0+ft),T.depthBuffer&&T.storeMultisampledDepthBuffer===!1&&ue.push(ut),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,ue))}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),J)for(let ft=0;ft<g.length;ft++){e.bindFramebuffer(n.FRAMEBUFFER,_t.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ft,n.RENDERBUFFER,_t.__webglColorRenderbuffer[ft]);const C=i.get(g[ft]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,_t.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ft,n.TEXTURE_2D,C,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,_t.__webglMultisampledFramebuffer)}else if(T.depthBuffer&&T.storeMultisampledDepthBuffer===!1&&l){const g=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[g])}}}function Kt(T){return Math.min(s.maxSamples,T.samples)}function nt(T){const g=i.get(T);return T.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&g.__useRenderToTexture!==!1}function ae(T){const g=a.render.frame;f.get(T)!==g&&(f.set(T,g),T.update())}function Pt(T,g){const B=T.colorSpace,it=T.format,tt=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||B!==ur&&B!==Jn&&(te.getTransfer(B)===le?(it!==Tn||tt!==sn)&&kt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):ne("WebGLTextures: Unsupported texture color space:",B)),g}function Bt(T){return typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement?(c.width=T.naturalWidth||T.width,c.height=T.naturalHeight||T.height):typeof VideoFrame<"u"&&T instanceof VideoFrame?(c.width=T.displayWidth,c.height=T.displayHeight):(c.width=T.width,c.height=T.height),c}this.allocateTextureUnit=Et,this.resetTextureUnits=O,this.getTextureUnits=$,this.setTextureUnits=at,this.setTexture2D=ot,this.setTexture2DArray=xt,this.setTexture3D=Tt,this.setTextureCube=ct,this.rebindTextures=vt,this.setupRenderTarget=Ot,this.updateRenderTargetMipmap=L,this.updateMultisampleRenderTarget=Vt,this.setupDepthRenderbuffer=wt,this.setupFrameBufferTexture=Z,this.useMultisampledRTT=nt,this.dispose=H}function y0(n,t){function e(i,s=Jn){let r;const a=te.getTransfer(s);if(i===sn)return n.UNSIGNED_BYTE;if(i===ao)return n.UNSIGNED_SHORT_4_4_4_4;if(i===oo)return n.UNSIGNED_SHORT_5_5_5_1;if(i===_c)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===gc)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===pc)return n.BYTE;if(i===mc)return n.SHORT;if(i===xs)return n.UNSIGNED_SHORT;if(i===ro)return n.INT;if(i===An)return n.UNSIGNED_INT;if(i===bn)return n.FLOAT;if(i===Rn)return n.HALF_FLOAT;if(i===xc)return n.ALPHA;if(i===vc)return n.RGB;if(i===Tn)return n.RGBA;if(i===ii)return n.DEPTH_COMPONENT;if(i===jn)return n.DEPTH_STENCIL;if(i===Sc)return n.RED;if(i===lo)return n.RED_INTEGER;if(i===Mi)return n.RG;if(i===co)return n.RG_INTEGER;if(i===ho)return n.RGBA_INTEGER;if(i===er||i===nr||i===ir||i===sr)if(a===le)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===er)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===nr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===ir)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===sr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===er)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===nr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===ir)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===sr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===va||i===Sa||i===Ma||i===ya)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===va)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Sa)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Ma)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===ya)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Ea||i===ba||i===Ta||i===wa||i===Aa||i===cr||i===Ra)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(i===Ea||i===ba)return a===le?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===Ta)return a===le?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(i===wa)return r.COMPRESSED_R11_EAC;if(i===Aa)return r.COMPRESSED_SIGNED_R11_EAC;if(i===cr)return r.COMPRESSED_RG11_EAC;if(i===Ra)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===Ca||i===Pa||i===La||i===Da||i===Ia||i===Na||i===Ua||i===Fa||i===Oa||i===Ba||i===za||i===ka||i===Ga||i===Ha)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(i===Ca)return a===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Pa)return a===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===La)return a===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Da)return a===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Ia)return a===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Na)return a===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Ua)return a===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Fa)return a===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Oa)return a===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Ba)return a===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===za)return a===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===ka)return a===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Ga)return a===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Ha)return a===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Va||i===Wa||i===Xa)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(i===Va)return a===le?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Wa)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Xa)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Ya||i===qa||i===hr||i===Ka)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(i===Ya)return r.COMPRESSED_RED_RGTC1_EXT;if(i===qa)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===hr)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Ka)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Zi?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:e}}const E0=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,b0=`
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

}`;class T0{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){const i=new Fc(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,i=new yi({vertexShader:E0,fragmentShader:b0,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new _e(new Ms(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class w0 extends li{constructor(t,e){super();const i=this;let s=null,r=1,a=null,o="local-floor",l=1,c=null,f=null,m=null,h=null,p=null,x=null;const E=typeof XRWebGLBinding<"u",d=new T0,u={},S=e.getContextAttributes();let w=null,y=null;const A=[],b=[],_=new Dt;let M=null,D=null;const R=new gn;R.viewport=new ve;const N=new gn;N.viewport=new ve;const U=[R,N],V=new Iu;let P=null,H=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let ot=A[q];return ot===void 0&&(ot=new zr,A[q]=ot),ot.getTargetRaySpace()},this.getControllerGrip=function(q){let ot=A[q];return ot===void 0&&(ot=new zr,A[q]=ot),ot.getGripSpace()},this.getHand=function(q){let ot=A[q];return ot===void 0&&(ot=new zr,A[q]=ot),ot.getHandSpace()};function X(q){const ot=b.indexOf(q.inputSource);if(ot===-1)return;const xt=A[ot];xt!==void 0&&(xt.update(q.inputSource,q.frame,c||a),xt.dispatchEvent({type:q.type,data:q.inputSource}))}function G(){s.removeEventListener("select",X),s.removeEventListener("selectstart",X),s.removeEventListener("selectend",X),s.removeEventListener("squeeze",X),s.removeEventListener("squeezestart",X),s.removeEventListener("squeezeend",X),s.removeEventListener("end",G),s.removeEventListener("inputsourceschange",et);for(let q=0;q<A.length;q++){const ot=b[q];ot!==null&&(b[q]=null,A[q].disconnect(ot))}P=null,H=null,d.reset();for(const q in u)delete u[q];if(t.setRenderTarget(w),p=null,h=null,m=null,s=null,y=null,Et.stop(),i.isPresenting=!1,t.setPixelRatio(M),t.setSize(_.width,_.height,!1),D!==null){const q=D.camera;q.fov=D.fov,q.zoom=D.zoom,q.updateProjectionMatrix(),D=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){r=q,i.isPresenting===!0&&kt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){o=q,i.isPresenting===!0&&kt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(q){c=q},this.getBaseLayer=function(){return h!==null?h:p},this.getBinding=function(){return m===null&&E&&(m=new XRWebGLBinding(s,e)),m},this.getFrame=function(){return x},this.getSession=function(){return s},this.setSession=async function(q){if(s=q,s!==null){if(w=t.getRenderTarget(),s.addEventListener("select",X),s.addEventListener("selectstart",X),s.addEventListener("selectend",X),s.addEventListener("squeeze",X),s.addEventListener("squeezestart",X),s.addEventListener("squeezeend",X),s.addEventListener("end",G),s.addEventListener("inputsourceschange",et),S.xrCompatible!==!0&&await e.makeXRCompatible(),M=t.getPixelRatio(),t.getSize(_),E&&"createProjectionLayer"in XRWebGLBinding.prototype){let xt=null,Tt=null,ct=null;S.depth&&(ct=S.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,xt=S.stencil?jn:ii,Tt=S.stencil?Zi:An);const zt={colorFormat:e.RGBA8,depthFormat:ct,scaleFactor:r};m=this.getBinding(),h=m.createProjectionLayer(zt),s.updateRenderState({layers:[h]}),t.setPixelRatio(1),t.setSize(h.textureWidth,h.textureHeight,!1),y=new wn(h.textureWidth,h.textureHeight,{format:Tn,type:sn,depthTexture:new Ji(h.textureWidth,h.textureHeight,Tt,void 0,void 0,void 0,void 0,void 0,void 0,xt),stencilBuffer:S.stencil,colorSpace:t.outputColorSpace,samples:S.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1,storeMultisampledDepthBuffer:h.ignoreDepthValues===!1,storeMultisampledStencilBuffer:h.ignoreDepthValues===!1})}else{const xt={antialias:S.antialias,alpha:!0,depth:S.depth,stencil:S.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,e,xt),s.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),y=new wn(p.framebufferWidth,p.framebufferHeight,{format:Tn,type:sn,colorSpace:t.outputColorSpace,stencilBuffer:S.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1,storeMultisampledDepthBuffer:p.ignoreDepthValues===!1,storeMultisampledStencilBuffer:p.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),Et.setContext(s),Et.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return d.getDepthTexture()};function et(q){for(let ot=0;ot<q.removed.length;ot++){const xt=q.removed[ot],Tt=b.indexOf(xt);Tt>=0&&(b[Tt]=null,A[Tt].disconnect(xt))}for(let ot=0;ot<q.added.length;ot++){const xt=q.added[ot];let Tt=b.indexOf(xt);if(Tt===-1){for(let zt=0;zt<A.length;zt++)if(zt>=b.length){b.push(xt),Tt=zt;break}else if(b[zt]===null){b[zt]=xt,Tt=zt;break}if(Tt===-1)break}const ct=A[Tt];ct&&ct.connect(xt)}}function Y(q,ot){ot===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(ot.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(s===null)return;let ot=q.near,xt=q.far;d.texture!==null&&(d.depthNear>0&&(ot=d.depthNear),d.depthFar>0&&(xt=d.depthFar)),V.near=N.near=R.near=ot,V.far=N.far=R.far=xt,(P!==V.near||H!==V.far)&&(s.updateRenderState({depthNear:V.near,depthFar:V.far}),P=V.near,H=V.far),V.layers.mask=q.layers.mask|6,R.layers.mask=V.layers.mask&-5,N.layers.mask=V.layers.mask&-3;const Tt=q.parent,ct=V.cameras;Y(V,Tt);for(let zt=0;zt<ct.length;zt++)Y(ct[zt],Tt);V.projectionMatrix.copy(R.projectionMatrix),V.projectionMatrixInverse.copy(R.projectionMatrixInverse),D===null&&q.isPerspectiveCamera&&(D={camera:q,fov:q.fov,zoom:q.zoom}),O(q,V,Tt)};function O(q,ot,xt){xt===null?q.matrix.copy(ot.matrixWorld):(q.matrix.copy(xt.matrixWorld),q.matrix.invert(),q.matrix.multiply(ot.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(ot.projectionMatrix),q.projectionMatrixInverse.copy(ot.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=$a*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return V},this.getFoveation=function(){if(!(h===null&&p===null))return l},this.setFoveation=function(q){l=q,h!==null&&(h.fixedFoveation=q),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=q)},this.hasDepthSensing=function(){return d.texture!==null},this.getDepthSensingMesh=function(){return d.getMesh(V)},this.getCameraTexture=function(q){return u[q]};let $=null;function at(q,ot){if(f=ot.getViewerPose(c||a),x=ot,f!==null){const xt=f.views;p!==null&&(t.setRenderTargetFramebuffer(y,p.framebuffer),t.setRenderTarget(y));let Tt=!1;xt.length!==V.cameras.length&&(V.cameras.length=0,Tt=!0);for(let Ft=0;Ft<xt.length;Ft++){const Zt=xt[Ft];let ie=null;if(p!==null)ie=p.getViewport(Zt);else{const Me=m.getViewSubImage(h,Zt);ie=Me.viewport,Ft===0&&(t.setRenderTargetTextures(y,Me.colorTexture,Me.depthStencilTexture),t.setRenderTarget(y))}let Wt=U[Ft];Wt===void 0&&(Wt=new gn,Wt.layers.enable(Ft),Wt.viewport=new ve,U[Ft]=Wt),Wt.matrix.fromArray(Zt.transform.matrix),Wt.matrix.decompose(Wt.position,Wt.quaternion,Wt.scale),Wt.projectionMatrix.fromArray(Zt.projectionMatrix),Wt.projectionMatrixInverse.copy(Wt.projectionMatrix).invert(),Wt.viewport.set(ie.x,ie.y,ie.width,ie.height),Ft===0&&(V.matrix.copy(Wt.matrix),V.matrix.decompose(V.position,V.quaternion,V.scale)),Tt===!0&&V.cameras.push(Wt)}const ct=s.enabledFeatures;if(ct&&ct.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&E){m=i.getBinding();const Ft=m.getDepthInformation(xt[0]);Ft&&Ft.isValid&&Ft.texture&&d.init(Ft,s.renderState)}if(ct&&ct.includes("camera-access")&&E){t.state.unbindTexture(),m=i.getBinding();for(let Ft=0;Ft<xt.length;Ft++){const Zt=xt[Ft].camera;if(Zt){let ie=u[Zt];ie||(ie=new Fc,u[Zt]=ie);const Wt=m.getCameraImage(Zt);ie.sourceTexture=Wt}}}}for(let xt=0;xt<A.length;xt++){const Tt=b[xt],ct=A[xt];Tt!==null&&ct!==void 0&&ct.update(Tt,ot,c||a)}$&&$(q,ot),ot.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ot}),x=null}const Et=new kc;Et.setAnimationLoop(at),this.setAnimationLoop=function(q){$=q},this.dispose=function(){}}}const A0=new me,$c=new Gt;$c.set(-1,0,0,0,1,0,0,0,1);function R0(n,t){function e(d,u){d.matrixAutoUpdate===!0&&d.updateMatrix(),u.value.copy(d.matrix)}function i(d,u){u.color.getRGB(d.fogColor.value,Oc(n)),u.isFog?(d.fogNear.value=u.near,d.fogFar.value=u.far):u.isFogExp2&&(d.fogDensity.value=u.density)}function s(d,u,S,w,y){u.isNodeMaterial?u.uniformsNeedUpdate=!1:u.isMeshBasicMaterial?r(d,u):u.isMeshLambertMaterial?(r(d,u),u.envMap&&(d.envMapIntensity.value=u.envMapIntensity)):u.isMeshToonMaterial?(r(d,u),m(d,u)):u.isMeshPhongMaterial?(r(d,u),f(d,u),u.envMap&&(d.envMapIntensity.value=u.envMapIntensity)):u.isMeshStandardMaterial?(r(d,u),h(d,u),u.isMeshPhysicalMaterial&&p(d,u,y)):u.isMeshMatcapMaterial?(r(d,u),x(d,u)):u.isMeshDepthMaterial?r(d,u):u.isMeshDistanceMaterial?(r(d,u),E(d,u)):u.isMeshNormalMaterial?r(d,u):u.isLineBasicMaterial?(a(d,u),u.isLineDashedMaterial&&o(d,u)):u.isPointsMaterial?l(d,u,S,w):u.isSpriteMaterial?c(d,u):u.isShadowMaterial?(d.color.value.copy(u.color),d.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function r(d,u){d.opacity.value=u.opacity,u.color&&d.diffuse.value.copy(u.color),u.emissive&&d.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(d.map.value=u.map,e(u.map,d.mapTransform)),u.alphaMap&&(d.alphaMap.value=u.alphaMap,e(u.alphaMap,d.alphaMapTransform)),u.bumpMap&&(d.bumpMap.value=u.bumpMap,e(u.bumpMap,d.bumpMapTransform),d.bumpScale.value=u.bumpScale,u.side===je&&(d.bumpScale.value*=-1)),u.normalMap&&(d.normalMap.value=u.normalMap,e(u.normalMap,d.normalMapTransform),d.normalScale.value.copy(u.normalScale),u.side===je&&d.normalScale.value.negate()),u.displacementMap&&(d.displacementMap.value=u.displacementMap,e(u.displacementMap,d.displacementMapTransform),d.displacementScale.value=u.displacementScale,d.displacementBias.value=u.displacementBias),u.emissiveMap&&(d.emissiveMap.value=u.emissiveMap,e(u.emissiveMap,d.emissiveMapTransform)),u.specularMap&&(d.specularMap.value=u.specularMap,e(u.specularMap,d.specularMapTransform)),u.alphaTest>0&&(d.alphaTest.value=u.alphaTest);const S=t.get(u),w=S.envMap,y=S.envMapRotation;w&&(d.envMap.value=w,d.envMapRotation.value.setFromMatrix4(A0.makeRotationFromEuler(y)).transpose(),w.isCubeTexture&&w.isRenderTargetTexture===!1&&d.envMapRotation.value.premultiply($c),d.reflectivity.value=u.reflectivity,d.ior.value=u.ior,d.refractionRatio.value=u.refractionRatio),u.lightMap&&(d.lightMap.value=u.lightMap,d.lightMapIntensity.value=u.lightMapIntensity,e(u.lightMap,d.lightMapTransform)),u.aoMap&&(d.aoMap.value=u.aoMap,d.aoMapIntensity.value=u.aoMapIntensity,e(u.aoMap,d.aoMapTransform))}function a(d,u){d.diffuse.value.copy(u.color),d.opacity.value=u.opacity,u.map&&(d.map.value=u.map,e(u.map,d.mapTransform))}function o(d,u){d.dashSize.value=u.dashSize,d.totalSize.value=u.dashSize+u.gapSize,d.scale.value=u.scale}function l(d,u,S,w){d.diffuse.value.copy(u.color),d.opacity.value=u.opacity,d.size.value=u.size*S,d.scale.value=w*.5,u.map&&(d.map.value=u.map,e(u.map,d.uvTransform)),u.alphaMap&&(d.alphaMap.value=u.alphaMap,e(u.alphaMap,d.alphaMapTransform)),u.alphaTest>0&&(d.alphaTest.value=u.alphaTest)}function c(d,u){d.diffuse.value.copy(u.color),d.opacity.value=u.opacity,d.rotation.value=u.rotation,u.map&&(d.map.value=u.map,e(u.map,d.mapTransform)),u.alphaMap&&(d.alphaMap.value=u.alphaMap,e(u.alphaMap,d.alphaMapTransform)),u.alphaTest>0&&(d.alphaTest.value=u.alphaTest)}function f(d,u){d.specular.value.copy(u.specular),d.shininess.value=Math.max(u.shininess,1e-4)}function m(d,u){u.gradientMap&&(d.gradientMap.value=u.gradientMap)}function h(d,u){d.metalness.value=u.metalness,u.metalnessMap&&(d.metalnessMap.value=u.metalnessMap,e(u.metalnessMap,d.metalnessMapTransform)),d.roughness.value=u.roughness,u.roughnessMap&&(d.roughnessMap.value=u.roughnessMap,e(u.roughnessMap,d.roughnessMapTransform)),u.envMap&&(d.envMapIntensity.value=u.envMapIntensity)}function p(d,u,S){d.ior.value=u.ior,u.diffuseRoughness>0&&(d.diffuseRoughness.value=u.diffuseRoughness,u.diffuseRoughnessMap&&(d.diffuseRoughnessMap.value=u.diffuseRoughnessMap,e(u.diffuseRoughnessMap,d.diffuseRoughnessMapTransform))),u.sheen>0&&(d.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),d.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(d.sheenColorMap.value=u.sheenColorMap,e(u.sheenColorMap,d.sheenColorMapTransform)),u.sheenRoughnessMap&&(d.sheenRoughnessMap.value=u.sheenRoughnessMap,e(u.sheenRoughnessMap,d.sheenRoughnessMapTransform))),u.clearcoat>0&&(d.clearcoat.value=u.clearcoat,d.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(d.clearcoatMap.value=u.clearcoatMap,e(u.clearcoatMap,d.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(d.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,e(u.clearcoatRoughnessMap,d.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(d.clearcoatNormalMap.value=u.clearcoatNormalMap,e(u.clearcoatNormalMap,d.clearcoatNormalMapTransform),d.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===je&&d.clearcoatNormalScale.value.negate())),u.dispersion>0&&(d.dispersion.value=u.dispersion),u.retroreflectivity>0&&(d.retroreflectivity.value=u.retroreflectivity),u.iridescence>0&&(d.iridescence.value=u.iridescence,d.iridescenceIOR.value=u.iridescenceIOR,d.iridescenceThicknessMinimum.value=u.iridescenceThicknessMinimum,d.iridescenceThicknessMaximum.value=u.iridescenceThicknessMaximum,u.iridescenceMap&&(d.iridescenceMap.value=u.iridescenceMap,e(u.iridescenceMap,d.iridescenceMapTransform)),u.iridescenceThicknessMap&&(d.iridescenceThicknessMap.value=u.iridescenceThicknessMap,e(u.iridescenceThicknessMap,d.iridescenceThicknessMapTransform))),u.transmission>0&&(d.transmission.value=u.transmission,d.transmissionSamplerMap.value=S.texture,d.transmissionSamplerSize.value.set(S.width,S.height),u.transmissionMap&&(d.transmissionMap.value=u.transmissionMap,e(u.transmissionMap,d.transmissionMapTransform)),d.thickness.value=u.thickness,u.thicknessMap&&(d.thicknessMap.value=u.thicknessMap,e(u.thicknessMap,d.thicknessMapTransform)),d.attenuationDistance.value=u.attenuationDistance,d.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(d.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(d.anisotropyMap.value=u.anisotropyMap,e(u.anisotropyMap,d.anisotropyMapTransform))),d.specularIntensity.value=u.specularIntensity,d.specularColor.value.copy(u.specularColor),u.specularColorMap&&(d.specularColorMap.value=u.specularColorMap,e(u.specularColorMap,d.specularColorMapTransform)),u.specularIntensityMap&&(d.specularIntensityMap.value=u.specularIntensityMap,e(u.specularIntensityMap,d.specularIntensityMapTransform))}function x(d,u){u.matcap&&(d.matcap.value=u.matcap)}function E(d,u){const S=t.get(u).light;d.referencePosition.value.setFromMatrixPosition(S.matrixWorld),d.nearDistance.value=S.shadow.camera.near,d.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function C0(n,t,e,i){let s={},r={};function a(S,w){const y=w.program;i.uniformBlockBinding(S,y,s[S.id])}function o(S,w){let y=s[S.id];y===void 0&&(x(S),y=l(S),s[S.id]=y,S.addEventListener("dispose",d));const A=w.program;i.updateUBOMapping(S,A);const b=t.render.frame;r[S.id]!==b&&(c(S),r[S.id]=b)}function l(S){const w=n.createBuffer(),y=S.__size,A=S.usage;return n.bindBuffer(n.UNIFORM_BUFFER,w),n.bufferData(n.UNIFORM_BUFFER,y,A),n.bindBuffer(n.UNIFORM_BUFFER,null),w}function c(S){const w=s[S.id],y=S.uniforms,A=S.__cache;n.bindBuffer(n.UNIFORM_BUFFER,w);for(let b=0,_=y.length;b<_;b++){const M=y[b];if(Array.isArray(M))for(let D=0,R=M.length;D<R;D++)f(M[D],b,D,A);else f(M,b,0,A)}n.bindBuffer(n.UNIFORM_BUFFER,null)}function f(S,w,y,A){if(h(S,w,y,A)===!0){const b=S.__offset,_=S.value;if(Array.isArray(_)){let M=0;for(let D=0;D<_.length;D++){const R=_[D],N=E(R,!0);m(R,S.__data,M),M+=N.storage/Float32Array.BYTES_PER_ELEMENT}}else m(_,S.__data,0);n.bufferSubData(n.UNIFORM_BUFFER,b,S.__data)}}function m(S,w,y){typeof S=="number"||typeof S=="boolean"?w[y]=S:S.isMatrix3?(w[y]=S.elements[0],w[y+1]=S.elements[1],w[y+2]=S.elements[2],w[y+3]=0,w[y+4]=S.elements[3],w[y+5]=S.elements[4],w[y+6]=S.elements[5],w[y+7]=0,w[y+8]=S.elements[6],w[y+9]=S.elements[7],w[y+10]=S.elements[8],w[y+11]=0):ArrayBuffer.isView(S)?w.set(S.subarray(0,w.length-y),y):S.toArray(w,y)}function h(S,w,y,A){const b=S.value,_=w+"_"+y;if(Array.isArray(b)){A[_]===void 0&&(A[_]=[]);const M=A[_];let D=!1;for(let R=0;R<b.length;R++)p(b[R],M,R)===!0&&(D=!0);return D}return p(b,A,_)}function p(S,w,y){if(w[y]===void 0)return typeof S=="number"||typeof S=="boolean"?w[y]=S:ArrayBuffer.isView(S)?w[y]=S.slice():w[y]=S.clone(),!0;{const A=w[y];if(typeof S=="number"||typeof S=="boolean"){if(A!==S)return w[y]=S,!0}else{if(ArrayBuffer.isView(S))return!0;if(A.equals(S)===!1)return A.copy(S),!0}}return!1}function x(S){const w=S.uniforms;let y=0;const A=16;for(let _=0,M=w.length;_<M;_++){const D=Array.isArray(w[_])?w[_]:[w[_]];for(let R=0,N=D.length;R<N;R++){const U=D[R],V=Array.isArray(U.value)?U.value:[U.value],P=Array.isArray(w[_])||Array.isArray(U.value);let H=y;for(let G=0,et=V.length;G<et;G++){const Y=V[G],O=E(Y,P),$=y%A,at=$%O.boundary,Et=$+at;y+=at,Et!==0&&A-Et<O.storage&&(y+=A-Et),G===0&&(H=y),y+=O.storage}const X=U.type==="int"?Int32Array:U.type==="uint"?Uint32Array:Float32Array;U.__data=new X((y-H)/Float32Array.BYTES_PER_ELEMENT),U.__offset=H}}const b=y%A;return b>0&&(y+=A-b),S.__size=y,S.__cache={},this}function E(S,w){const y={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(y.boundary=4,y.storage=4):S.isVector2?(y.boundary=8,y.storage=8):S.isVector3||S.isColor?(y.boundary=16,y.storage=12):S.isVector4?(y.boundary=16,y.storage=16):S.isMatrix3?(y.boundary=16,y.storage=48):S.isMatrix4?(y.boundary=16,y.storage=64):S.isTexture?kt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(S)?(y.boundary=16,y.storage=S.byteLength):kt("WebGLRenderer: Unsupported uniform value type.",S),w===!0&&(y.boundary=16,y.storage=Math.ceil(y.storage/16)*16),y}function d(S){const w=S.target;w.removeEventListener("dispose",d),n.deleteBuffer(s[w.id]),delete s[w.id],delete r[w.id]}function u(){for(const S in s)n.deleteBuffer(s[S]);s={},r={}}return{bind:a,update:o,dispose:u}}const P0=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Sn=null;function L0(){return Sn===null&&(Sn=new vu(P0,16,16,Mi,Rn),Sn.name="DFG_LUT",Sn.minFilter=Ke,Sn.magFilter=Ke,Sn.wrapS=Bn,Sn.wrapT=Bn,Sn.generateMipmaps=!1,Sn.needsUpdate=!0),Sn}class D0{constructor(t={}){const{canvas:e=Xh(),context:i=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:f="default",failIfMajorPerformanceCaveat:m=!1,reversedDepthBuffer:h=!1,outputBufferType:p=sn}=t;this.isWebGLRenderer=!0;let x;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");x=i.getContextAttributes().alpha}else x=a;const E=p,d=new Set([ho,co,lo]),u=new Set([sn,An,xs,Zi,ao,oo]),S=new Uint32Array(4),w=new Int32Array(4),y={textures:[],min:[],max:[],resolution:[]};let A=null,b=null;const _=[],M=[];let D=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=zn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const R=this;let N=!1,U=null,V=null,P=null,H=null;this._outputColorSpace=Oe;let X=0,G=0,et=null,Y=-1,O=null;const $=new ve,at=new ve;let Et=null;const q=new jt(0);let ot=0,xt=e.width,Tt=e.height,ct=1,zt=null,Se=null;const Ft=new ve(0,0,xt,Tt),Zt=new ve(0,0,xt,Tt);let ie=!1;const Wt=new $i,Me=new go;let ye=!1,Be=!1;const Z=new me,ht=new F,st=new ve,wt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let vt=!1;function Ot(){return et===null?ct:1}let L=i;function ue(v,I){return e.getContext(v,I)}let Vt,Kt,nt,ae,Pt,Bt,T,g,B,it,tt,ut,_t,J,Q,ft,C,j,K,pt,lt,dt,It;try{const v={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:f,failIfMajorPerformanceCaveat:m};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${io}`),e.addEventListener("webglcontextlost",Ut,!1),e.addEventListener("webglcontextrestored",Xt,!1),e.addEventListener("webglcontextcreationerror",St,!1),L===null){const I="webgl2";if(L=ue(I,v),L===null)throw ue(I)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Yt()}catch(v){throw e.removeEventListener("webglcontextlost",Ut,!1),e.removeEventListener("webglcontextrestored",Xt,!1),e.removeEventListener("webglcontextcreationerror",St,!1),ne("WebGLRenderer: "+v.message),v}function Yt(){Vt=new Up(L),Vt.init(),lt=new y0(L,Vt),Kt=new bp(L,Vt,t,lt),nt=new S0(L,Vt),Kt.reversedDepthBuffer&&h&&nt.buffers.depth.setReversed(!0),V=L.createFramebuffer(),P=L.createFramebuffer(),H=L.createFramebuffer(),ae=new Bp(L),Pt=new a0,Bt=new M0(L,Vt,nt,Pt,Kt,lt,ae),T=new Np(R),g=new zu(L),dt=new yp(L,g),B=new Fp(L,g,ae,dt),it=new kp(L,B,g,dt,ae),j=new zp(L,Kt,Bt),Q=new Tp(Pt),tt=new r0(R,T,Vt,Kt,dt,Q),ut=new R0(R,Pt),_t=new l0,J=new p0(Vt),C=new Mp(R,T,nt,it,x,l),ft=new v0(R,it,Kt),It=new C0(L,ae,Kt,nt),K=new Ep(L,Vt,ae),pt=new Op(L,Vt,ae),ae.programs=tt.programs,R.capabilities=Kt,R.extensions=Vt,R.properties=Pt,R.renderLists=_t,R.shadowMap=ft,R.state=nt,R.info=ae}E!==sn&&(D=new Hp(E,e.width,e.height,o,s,r));const rt=new w0(R,L);this.xr=rt,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){const v=Vt.get("WEBGL_lose_context");v&&v.loseContext()},this.forceContextRestore=function(){const v=Vt.get("WEBGL_lose_context");v&&v.restoreContext()},this.getPixelRatio=function(){return ct},this.setPixelRatio=function(v){v!==void 0&&(ct=v,this.setSize(xt,Tt,!1))},this.getSize=function(v){return v.set(xt,Tt)},this.setSize=function(v,I,W=!0){if(rt.isPresenting){kt("WebGLRenderer: Can't change size while VR device is presenting.");return}xt=v,Tt=I,e.width=Math.floor(v*ct),e.height=Math.floor(I*ct),W===!0&&(e.style.width=v+"px",e.style.height=I+"px"),D!==null&&D.setSize(e.width,e.height),this.setViewport(0,0,v,I)},this.getDrawingBufferSize=function(v){return v.set(xt*ct,Tt*ct).floor()},this.setDrawingBufferSize=function(v,I,W){xt=v,Tt=I,ct=W,e.width=Math.floor(v*W),e.height=Math.floor(I*W),this.setViewport(0,0,v,I)},this.setEffects=function(v){if(E===sn){ne("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(v){for(let I=0;I<v.length;I++)if(v[I].isOutputPass===!0){kt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}D.setEffects(v||[])},this.getCurrentViewport=function(v){return v.copy($)},this.getViewport=function(v){return v.copy(Ft)},this.setViewport=function(v,I,W,z){v.isVector4?Ft.set(v.x,v.y,v.z,v.w):Ft.set(v,I,W,z),nt.viewport($.copy(Ft).multiplyScalar(Ot()).round())},this.getScissor=function(v){return v.copy(Zt)},this.setScissor=function(v,I,W,z){v.isVector4?Zt.set(v.x,v.y,v.z,v.w):Zt.set(v,I,W,z),nt.scissor(at.copy(Zt).multiplyScalar(Ot()).round())},this.getScissorTest=function(){return ie},this.setScissorTest=function(v){nt.setScissorTest(ie=v)},this.setOpaqueSort=function(v){zt=v},this.setTransparentSort=function(v){Se=v},this.getClearColor=function(v){return v.copy(C.getClearColor())},this.setClearColor=function(){C.setClearColor(...arguments)},this.getClearAlpha=function(){return C.getClearAlpha()},this.setClearAlpha=function(){C.setClearAlpha(...arguments)},this.clear=function(v=!0,I=!0,W=!0){let z=0;if(v){let k=!1;if(et!==null){const gt=et.texture.format;k=d.has(gt)}if(k){const gt=et.texture.type,bt=u.has(gt),mt=C.getClearColor(),yt=C.getClearAlpha(),Lt=mt.r,Ht=mt.g,Jt=mt.b;bt?(S[0]=Lt,S[1]=Ht,S[2]=Jt,S[3]=yt,L.clearBufferuiv(L.COLOR,0,S)):(w[0]=Lt,w[1]=Ht,w[2]=Jt,w[3]=yt,L.clearBufferiv(L.COLOR,0,w))}else z|=L.COLOR_BUFFER_BIT}I&&(z|=L.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),W&&(z|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),z!==0&&L.clear(z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(v){v.setRenderer(this),U=v},this.dispose=function(){e.removeEventListener("webglcontextlost",Ut,!1),e.removeEventListener("webglcontextrestored",Xt,!1),e.removeEventListener("webglcontextcreationerror",St,!1),C.dispose(),_t.dispose(),J.dispose(),Bt.dispose(),Pt.dispose(),T.dispose(),it.dispose(),B.dispose(),dt.dispose(),It.dispose(),tt.dispose(),rt.dispose(),rt.removeEventListener("sessionstart",Io),rt.removeEventListener("sessionend",No),ui.stop()};function Ut(v){v.preventDefault(),pr("WebGLRenderer: Context Lost."),N=!0}function Xt(){pr("WebGLRenderer: Context Restored."),N=!1;const v=ae.autoReset,I=ft.enabled,W=ft.autoUpdate,z=ft.needsUpdate,k=ft.type;Yt(),ae.autoReset=v,ft.enabled=I,ft.autoUpdate=W,ft.needsUpdate=z,ft.type=k}function St(v){ne("WebGLRenderer: A WebGL context could not be created. Reason: ",v.statusMessage)}function oe(v){const I=v.target;I.removeEventListener("dispose",oe),Pe(I)}function Pe(v){Hn(v),Pt.remove(v)}function Hn(v){const I=Pt.get(v).programs;I!==void 0&&(I.forEach(function(W){tt.releaseProgram(W)}),v.isShaderMaterial&&tt.releaseShaderCache(v))}this.renderBufferDirect=function(v,I,W,z,k,gt){I===null&&(I=wt);const bt=k.isMesh&&k.matrixWorld.determinantAffine()<0,mt=ch(v,I,W,z,k);nt.setMaterial(z,bt);let yt=W.index,Lt=1;if(z.wireframe===!0){if(yt=B.getWireframeAttribute(W),yt===void 0)return;Lt=2}const Ht=W.drawRange,Jt=W.attributes.position;let At=Ht.start*Lt,Qt=(Ht.start+Ht.count)*Lt;gt!==null&&(At=Math.max(At,gt.start*Lt),Qt=Math.min(Qt,(gt.start+gt.count)*Lt)),yt!==null?(At=Math.max(At,0),Qt=Math.min(Qt,yt.count)):Jt!=null&&(At=Math.max(At,0),Qt=Math.min(Qt,Jt.count));const Te=Qt-At;if(Te<0||Te===1/0)return;dt.setup(k,z,mt,W,yt);let pe,de=K;if(yt!==null&&(pe=g.get(yt),de=pt,de.setIndex(pe)),k.isMesh)z.wireframe===!0?(nt.setLineWidth(z.wireframeLinewidth*Ot()),de.setMode(L.LINES)):de.setMode(L.TRIANGLES);else if(k.isLine){let ze=z.linewidth;ze===void 0&&(ze=1),nt.setLineWidth(ze*Ot()),k.isLineSegments?de.setMode(L.LINES):k.isLineLoop?de.setMode(L.LINE_LOOP):de.setMode(L.LINE_STRIP)}else k.isPoints?de.setMode(L.POINTS):k.isSprite&&de.setMode(L.TRIANGLES);if(k.isBatchedMesh)if(Vt.get("WEBGL_multi_draw"))de.renderMultiDraw(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount);else{const ze=k._multiDrawStarts,Rt=k._multiDrawCounts,We=k._multiDrawCount,se=yt?g.get(yt).bytesPerElement:1,di=Pt.get(z).currentProgram.getUniforms();for(let ke=0;ke<We;ke++)di.setValue(L,"_gl_DrawID",ke),de.render(ze[ke]/se,Rt[ke])}else if(k.isInstancedMesh)de.renderInstances(At,Te,k.count);else if(W.isInstancedBufferGeometry){const ze=W._maxInstanceCount!==void 0?W._maxInstanceCount:1/0,Rt=Math.min(W.instanceCount,ze);de.renderInstances(At,Te,Rt)}else de.render(At,Te)};function Do(v,I,W,z){U!==null&&v.isNodeMaterial&&U.setObject(z,v),ye===!0&&Q.setState(v,W,!1),v.transparent===!0&&v.side===En&&v.forceSinglePass===!1?(v.side=je,v.needsUpdate=!0,es(v,I,z),v.side=Si,v.needsUpdate=!0,es(v,I,z),v.side=En):es(v,I,z)}this.compile=function(v,I,W=null){W===null&&(W=v),U!==null&&U.renderStart(v,I,W),b=J.get(W),b.init(I),M.push(b),W.traverseVisible(function(k){k.isLight&&k.layers.test(I.layers)&&(b.pushLight(k),k.castShadow&&b.pushShadow(k))}),v!==W&&v.traverseVisible(function(k){k.isLight&&k.layers.test(I.layers)&&(b.pushLight(k),k.castShadow&&b.pushShadow(k))}),b.setupLights(),U!==null&&U.updateLights(b.state.lightsArray),Be=this.localClippingEnabled,ye=Q.init(this.clippingPlanes,Be),ye===!0&&Q.setGlobalState(this.clippingPlanes,I),U!==null&&ft.render(b.state.shadowsArray,W,I);const z=new Set;return v.traverse(function(k){if(!(k.isMesh||k.isPoints||k.isLine||k.isSprite))return;const gt=k.material;if(gt)if(Array.isArray(gt))for(let bt=0;bt<gt.length;bt++){const mt=gt[bt];Do(mt,W,I,k),z.add(mt)}else Do(gt,W,I,k),z.add(gt)}),b=M.pop(),U!==null&&U.renderEnd(),z},this.compileAsync=function(v,I,W=null){const z=this.compile(v,I,W);return new Promise(k=>{function gt(){if(z.forEach(function(bt){const yt=Pt.get(bt).currentProgram;(yt===void 0||yt.isReady())&&z.delete(bt)}),z.size===0){k(v);return}setTimeout(gt,10)}Vt.get("KHR_parallel_shader_compile")!==null?gt():setTimeout(gt,10)})};let Ar=null;function oh(v){Ar&&Ar(v)}function Io(){ui.stop()}function No(){ui.start()}const ui=new kc;ui.setAnimationLoop(oh),typeof self<"u"&&ui.setContext(self),this.setAnimationLoop=function(v){Ar=v,rt.setAnimationLoop(v),v===null?ui.stop():ui.start()},rt.addEventListener("sessionstart",Io),rt.addEventListener("sessionend",No),this.render=function(v,I){if(I!==void 0&&I.isCamera!==!0){ne("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(N===!0)return;U!==null&&U.renderStart(v,I);const W=rt.enabled===!0&&rt.isPresenting===!0,z=D!==null&&(et===null||W)&&D.begin(R,et);if(v.matrixWorldAutoUpdate===!0&&v.updateMatrixWorld(),I.parent===null&&I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),rt.enabled===!0&&rt.isPresenting===!0&&(D===null||D.isCompositing()===!1)&&(rt.cameraAutoUpdate===!0&&rt.updateCamera(I),I=rt.getCamera()),v.isScene===!0&&v.onBeforeRender(R,v,I,et),b=J.get(v,M.length),b.init(I),b.state.textureUnits=Bt.getTextureUnits(),M.push(b),Z.multiplyMatrices(I.projectionMatrix,I.matrixWorldInverse),I.isArrayCamera?Me.setFromArrayCamera(I):Wt.setFromProjectionMatrix(Z,xn,I.reversedDepth),Be=this.localClippingEnabled,ye=Q.init(this.clippingPlanes,Be),A=_t.get(v,_.length),A.init(),_.push(A),this.info.render.frame++,rt.enabled===!0&&rt.isPresenting===!0){const bt=R.xr.getDepthSensingMesh();bt!==null&&Rr(bt,I,-1/0,R.sortObjects)}Rr(v,I,0,R.sortObjects),A.finish(),U!==null&&U.updateLights(b.state.lightsArray),R.sortObjects===!0&&A.sort(zt,Se),vt=rt.enabled===!1||rt.isPresenting===!1||rt.hasDepthSensing()===!1,vt&&C.addToRenderList(A,v),this.info.autoReset===!0&&this.info.reset(),ye===!0&&Q.beginShadows();const k=b.state.shadowsArray;if(ft.render(k,v,I),ye===!0&&Q.endShadows(),(z&&D.hasRenderPass())===!1){const bt=A.opaque,mt=A.transmissive;if(b.setupLights(),I.isArrayCamera){const yt=I.cameras;if(mt.length>0)for(let Lt=0,Ht=yt.length;Lt<Ht;Lt++){const Jt=yt[Lt];Fo(bt,mt,v,Jt)}vt&&C.render(v);for(let Lt=0,Ht=yt.length;Lt<Ht;Lt++){const Jt=yt[Lt];Uo(A,v,Jt,Jt.viewport)}}else mt.length>0&&Fo(bt,mt,v,I),vt&&C.render(v),Uo(A,v,I)}et!==null&&G===0&&(Bt.updateMultisampleRenderTarget(et),Bt.updateRenderTargetMipmap(et)),z&&D.end(R),v.isScene===!0&&v.onAfterRender(R,v,I),dt.resetDefaultState(),Y=-1,O=null,M.pop(),M.length>0?(b=M[M.length-1],Bt.setTextureUnits(b.state.textureUnits),ye===!0&&Q.setGlobalState(R.clippingPlanes,b.state.camera)):b=null,_.pop(),_.length>0?A=_[_.length-1]:A=null,U!==null&&U.renderEnd()};function Rr(v,I,W,z){if(v.visible===!1)return;if(v.layers.test(I.layers)){if(v.isGroup)W=v.renderOrder;else if(v.isLOD)v.autoUpdate===!0&&v.update(I);else if(v.isLight)b.pushLight(v),v.castShadow&&b.pushShadow(v);else if(v.isSprite){const bt=I.isArrayCamera?Me:Wt;if(!v.frustumCulled||v.intersectsFrustum(bt)){z&&st.setFromMatrixPosition(v.matrixWorld).applyMatrix4(Z);const mt=it.update(v),yt=v.material;yt.visible&&A.push(v,mt,yt,W,st.z,null,I)}}else if(v.isMesh||v.isLine||v.isPoints){const bt=I.isArrayCamera?Me:Wt;if(!v.frustumCulled||v.intersectsFrustum(bt)){const mt=it.update(v),yt=v.material;if(z&&(v.boundingSphere!==void 0?(v.boundingSphere===null&&v.computeBoundingSphere(),st.copy(v.boundingSphere.center)):(mt.boundingSphere===null&&mt.computeBoundingSphere(),st.copy(mt.boundingSphere.center)),st.applyMatrix4(v.matrixWorld).applyMatrix4(Z)),Array.isArray(yt)){const Lt=mt.groups;for(let Ht=0,Jt=Lt.length;Ht<Jt;Ht++){const At=Lt[Ht],Qt=yt[At.materialIndex];Qt&&Qt.visible&&A.push(v,mt,Qt,W,st.z,At,I)}}else yt.visible&&A.push(v,mt,yt,W,st.z,null,I)}}}const gt=v.children;for(let bt=0,mt=gt.length;bt<mt;bt++)Rr(gt[bt],I,W,z)}function Uo(v,I,W,z){const{opaque:k,transmissive:gt,transparent:bt}=v;b.setupLightsView(W),ye===!0&&Q.setGlobalState(R.clippingPlanes,W),z&&nt.viewport($.copy(z)),k.length>0&&Es(k,I,W),gt.length>0&&Es(gt,I,W),bt.length>0&&Es(bt,I,W),nt.buffers.depth.setTest(!0),nt.buffers.depth.setMask(!0),nt.buffers.color.setMask(!0),nt.setPolygonOffset(!1)}function Fo(v,I,W,z){if((W.isScene===!0?W.overrideMaterial:null)!==null)return;if(b.state.transmissionRenderTarget[z.id]===void 0){const At=Vt.has("EXT_color_buffer_half_float")||Vt.has("EXT_color_buffer_float");b.state.transmissionRenderTarget[z.id]=new wn(1,1,{generateMipmaps:!0,type:At?Rn:sn,minFilter:Qn,samples:Math.max(4,Kt.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:te.workingColorSpace})}const gt=b.state.transmissionRenderTarget[z.id],bt=z.viewport||$;gt.setSize(bt.z*R.transmissionResolutionScale,bt.w*R.transmissionResolutionScale);const mt=R.getRenderTarget(),yt=R.getActiveCubeFace(),Lt=R.getActiveMipmapLevel();R.setRenderTarget(gt),R.getClearColor(q),ot=R.getClearAlpha(),ot<1&&R.setClearColor(16777215,.5),R.clear(),vt&&C.render(W);const Ht=R.toneMapping;R.toneMapping=zn;const Jt=z.viewport;if(z.viewport!==void 0&&(z.viewport=void 0),b.setupLightsView(z),ye===!0&&Q.setGlobalState(R.clippingPlanes,z),Es(v,W,z),Bt.updateMultisampleRenderTarget(gt),Bt.updateRenderTargetMipmap(gt),Vt.has("WEBGL_multisampled_render_to_texture")===!1){let At=!1;for(let Qt=0,Te=I.length;Qt<Te;Qt++){const pe=I[Qt],{object:de,geometry:ze,material:Rt,group:We}=pe;if(Rt.side===En&&de.layers.test(z.layers)){const se=Rt.side;Rt.side=je,Rt.needsUpdate=!0,Oo(de,W,z,ze,Rt,We),Rt.side=se,Rt.needsUpdate=!0,At=!0}}At===!0&&(Bt.updateMultisampleRenderTarget(gt),Bt.updateRenderTargetMipmap(gt))}R.setRenderTarget(mt,yt,Lt),R.setClearColor(q,ot),Jt!==void 0&&(z.viewport=Jt),R.toneMapping=Ht}function Es(v,I,W){const z=I.isScene===!0?I.overrideMaterial:null;for(let k=0,gt=v.length;k<gt;k++){const bt=v[k],{object:mt,geometry:yt,group:Lt}=bt;let Ht=bt.material;Ht.allowOverride===!0&&z!==null&&(Ht=z),mt.layers.test(W.layers)&&Oo(mt,I,W,yt,Ht,Lt)}}function Oo(v,I,W,z,k,gt){U!==null&&k.isNodeMaterial&&U.setObject(v,k),v.onBeforeRender(R,I,W,z,k,gt),v.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,v.matrixWorld),v.normalMatrix.getNormalMatrix(v.modelViewMatrix),k.onBeforeRender(R,I,W,z,v,gt),k.transparent===!0&&k.side===En&&k.forceSinglePass===!1?(k.side=je,k.needsUpdate=!0,R.renderBufferDirect(W,I,z,k,v,gt),k.side=Si,k.needsUpdate=!0,R.renderBufferDirect(W,I,z,k,v,gt),k.side=En):R.renderBufferDirect(W,I,z,k,v,gt),v.onAfterRender(R,I,W,z,k,gt)}function Bo(v){let I=0;for(const W of v)W.texture!==null&&I++;return I}function es(v,I,W){I.isScene!==!0&&(I=wt);const z=Pt.get(v),k=b.state.lights,gt=b.state.shadowsArray,bt=k.state.version,mt=tt.getParameters(v,k.state,gt,I,W,b.state.lightProbeGridArray),yt=tt.getProgramCacheKey(mt);let Lt=z.programs;z.environment=v.isMeshStandardMaterial||v.isMeshLambertMaterial||v.isMeshPhongMaterial?I.environment:null,z.fog=I.fog;const Ht=v.isMeshStandardMaterial||v.isMeshLambertMaterial&&!v.envMap||v.isMeshPhongMaterial&&!v.envMap;z.envMap=T.get(v.envMap||z.environment,Ht),z.envMapRotation=z.environment!==null&&v.envMap===null?I.environmentRotation:v.envMapRotation,Lt===void 0&&(v.addEventListener("dispose",oe),Lt=new Map,z.programs=Lt,z.programVariants=new Map);let Jt=Lt.get(yt);if(Jt!==void 0){if(z.currentProgram===Jt&&z.lightsStateVersion===bt)return ko(v,mt),Jt}else mt.uniforms=tt.getUniforms(v),U!==null&&v.isNodeMaterial&&U.build(v,W,mt),v.onBeforeCompile(mt,R),Jt=tt.acquireProgram(mt,yt),Lt.set(yt,Jt),z.uniforms=mt.uniforms;const At=z.uniforms;return(!v.isShaderMaterial&&!v.isRawShaderMaterial||v.clipping===!0)&&(At.clippingPlanes=Q.uniform),ko(v,mt),z.needsLights=uh(v),z.lightsStateVersion=bt,z.needsLights&&(At.ambientLightColor.value=k.state.ambient,At.lightProbe.value=k.state.probe,At.sunLights.value=k.state.sun,At.sunLightShadows.value=k.state.sunShadow,At.directionalLights.value=k.state.directional,At.directionalLightShadows.value=k.state.directionalShadow,At.spotLights.value=k.state.spot,At.spotLightShadows.value=k.state.spotShadow,At.rectAreaLights.value=k.state.rectArea,At.ltc_1.value=k.state.rectAreaLTC1,At.ltc_2.value=k.state.rectAreaLTC2,At.pointLights.value=k.state.point,At.pointLightShadows.value=k.state.pointShadow,At.hemisphereLights.value=k.state.hemi,At.sunShadowMatrix.value=k.state.sunShadowMatrix,At.sunShadowCascade.value=k.state.sunShadowCascade,At.directionalShadowMatrix.value=k.state.directionalShadowMatrix,At.spotLightMatrix.value=k.state.spotLightMatrix,At.spotLightMap.value=k.state.spotLightMap,At.pointShadowMatrix.value=k.state.pointShadowMatrix),z.numLightProbeGrids=Bo(b.state.lightProbeGridArray),z.currentProgram=Jt,z.uniformsList=null,Jt}function lh(v,I,W,z,k){const gt=Pt.get(v),bt=gt.currentProgram.id+","+z+","+k;let mt=gt.programVariants.get(bt);return mt===void 0?(mt=es(v,I,W),gt.programVariants.set(bt,mt)):(gt.currentProgram=mt,gt.uniformsList=null,gt.outputColorSpace=z,gt.toneMapping=k),mt}function zo(v){if(v.uniformsList===null){const I=v.currentProgram.getUniforms();v.uniformsList=or.seqWithValue(I.seq,v.uniforms)}return v.uniformsList}function ko(v,I){const W=Pt.get(v);W.outputColorSpace=I.outputColorSpace,W.batching=I.batching,W.batchingColor=I.batchingColor,W.instancing=I.instancing,W.instancingColor=I.instancingColor,W.instancingMorph=I.instancingMorph,W.skinning=I.skinning,W.morphTargets=I.morphTargets,W.morphNormals=I.morphNormals,W.morphColors=I.morphColors,W.morphTargetsCount=I.morphTargetsCount,W.numClippingPlanes=I.numClippingPlanes,W.numIntersection=I.numClipIntersection,W.vertexAlphas=I.vertexAlphas,W.vertexTangents=I.vertexTangents,W.toneMapping=I.toneMapping}function ch(v,I,W,z,k){I.isScene!==!0&&(I=wt),Bt.resetTextureUnits();const gt=I.fog,bt=z.isMeshStandardMaterial||z.isMeshLambertMaterial||z.isMeshPhongMaterial?I.environment:null,mt=et===null?R.outputColorSpace:et.isXRRenderTarget===!0?et.texture.colorSpace:te.workingColorSpace,yt=z.isMeshStandardMaterial||z.isMeshLambertMaterial&&!z.envMap||z.isMeshPhongMaterial&&!z.envMap,Lt=T.get(z.envMap||bt,yt),Ht=z.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,Jt=!!W.attributes.tangent&&(!!z.normalMap||z.anisotropy>0),At=!!W.morphAttributes.position,Qt=!!W.morphAttributes.normal,Te=!!W.morphAttributes.color;let pe=zn;z.toneMapped&&(et===null||et.isXRRenderTarget===!0)&&(pe=R.toneMapping);const de=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,ze=de!==void 0?de.length:0,Rt=Pt.get(z),We=b.state.lights;if(ye===!0&&(Be===!0||v!==O)){const xe=v===O&&z.id===Y;Q.setState(z,v,xe)}let se=!1,di=!1;z.version===Rt.__version?Rt.needsLights&&Rt.lightsStateVersion!==We.state.version||k.isBatchedMesh&&Rt.batching===!1||!k.isBatchedMesh&&Rt.batching===!0||k.isBatchedMesh&&Rt.batchingColor===!0&&k._colorsTexture===null||k.isBatchedMesh&&Rt.batchingColor===!1&&k._colorsTexture!==null||k.isInstancedMesh&&Rt.instancing===!1||!k.isInstancedMesh&&Rt.instancing===!0||k.isSkinnedMesh&&Rt.skinning===!1||!k.isSkinnedMesh&&Rt.skinning===!0||k.isInstancedMesh&&Rt.instancingColor===!0&&k.instanceColor===null||k.isInstancedMesh&&Rt.instancingColor===!1&&k.instanceColor!==null||k.isInstancedMesh&&Rt.instancingMorph===!0&&k.morphTexture===null||k.isInstancedMesh&&Rt.instancingMorph===!1&&k.morphTexture!==null||Rt.envMap!==Lt||z.fog===!0&&Rt.fog!==gt||Rt.numClippingPlanes!==void 0&&(Rt.numClippingPlanes!==Q.numPlanes||Rt.numIntersection!==Q.numIntersection)||Rt.vertexAlphas!==Ht||Rt.vertexTangents!==Jt||Rt.morphTargets!==At||Rt.morphNormals!==Qt||Rt.morphColors!==Te||Rt.morphTargetsCount!==ze||Rt.numLightProbeGrids!==Bo(b.state.lightProbeGridArray)?se=!0:(Rt.outputColorSpace!==mt||Rt.toneMapping!==pe)&&(di=!0):(se=!0,Rt.__version=z.version);let ke=Rt.currentProgram;(se===!0||di===!0)&&(ke=di===!0?lh(z,I,k,mt,pe):es(z,I,k),U&&z.isNodeMaterial&&U.onUpdateProgram(z,ke,Rt));let bs=!1,Vn=!1,fi=!1;const ee=ke.getUniforms(),Ue=Rt.uniforms;if(nt.useProgram(ke.program)&&(bs=!0,Vn=!0,fi=!0),z.id!==Y&&(Y=z.id,Vn=!0),bs||O!==v){nt.buffers.depth.getReversed()&&v.reversedDepth!==!0&&(v._reversedDepth=!0,v.updateProjectionMatrix()),ee.setValue(L,"projectionMatrix",v.projectionMatrix),ee.setValue(L,"viewMatrix",v.matrixWorldInverse);const Le=ee.map.cameraPosition;Le!==void 0&&Le.setValue(L,ht.setFromMatrixPosition(v.matrixWorld)),Kt.logarithmicDepthBuffer&&ee.setValue(L,"logDepthBufFC",2/(Math.log(v.far+1)/Math.LN2)),(z.isMeshPhongMaterial||z.isMeshToonMaterial||z.isMeshLambertMaterial||z.isMeshBasicMaterial||z.isMeshStandardMaterial||z.isShaderMaterial)&&ee.setValue(L,"isOrthographic",v.isOrthographicCamera===!0),O!==v&&(O=v,Vn=!0,fi=!0)}if(Rt.needsLights&&(We.state.sunShadowMap.length>0&&ee.setValue(L,"sunShadowMap",We.state.sunShadowMap,Bt),We.state.directionalShadowMap.length>0&&ee.setValue(L,"directionalShadowMap",We.state.directionalShadowMap,Bt),We.state.spotShadowMap.length>0&&ee.setValue(L,"spotShadowMap",We.state.spotShadowMap,Bt),We.state.pointShadowMap.length>0&&ee.setValue(L,"pointShadowMap",We.state.pointShadowMap,Bt)),k.isSkinnedMesh){ee.setOptional(L,k,"bindMatrix"),ee.setOptional(L,k,"bindMatrixInverse");const xe=k.skeleton;xe&&(xe.boneTexture===null&&xe.computeBoneTexture(),ee.setValue(L,"boneTexture",xe.boneTexture,Bt))}k.isBatchedMesh&&(ee.setOptional(L,k,"batchingTexture"),ee.setValue(L,"batchingTexture",k._matricesTexture,Bt),ee.setOptional(L,k,"batchingIdTexture"),ee.setValue(L,"batchingIdTexture",k._indirectTexture,Bt),ee.setOptional(L,k,"batchingColorTexture"),k._colorsTexture!==null&&ee.setValue(L,"batchingColorTexture",k._colorsTexture,Bt));const fn=W.morphAttributes;if((fn.position!==void 0||fn.normal!==void 0||fn.color!==void 0)&&j.update(k,W,ke),(Vn||Rt.receiveShadow!==k.receiveShadow)&&(Rt.receiveShadow=k.receiveShadow,ee.setValue(L,"receiveShadow",k.receiveShadow)),(z.isMeshStandardMaterial||z.isMeshLambertMaterial||z.isMeshPhongMaterial)&&z.envMap===null&&I.environment!==null&&(Ue.envMapIntensity.value=I.environmentIntensity),Ue.dfgLUT!==void 0&&(Ue.dfgLUT.value=L0()),Vn){if(ee.setValue(L,"toneMappingExposure",R.toneMappingExposure),Rt.needsLights&&hh(Ue,fi),gt&&z.fog===!0&&ut.refreshFogUniforms(Ue,gt),ut.refreshMaterialUniforms(Ue,z,ct,Tt,b.state.transmissionRenderTarget[v.id]),Rt.needsLights&&Rt.numLightProbeGrids>0){const xe=y;let Le=0;for(const Cn of b.state.lightProbeGridArray)Cn.texture!==null&&(xe.textures[Le]=Cn.texture,xe.min[Le]=Cn.boundingBox.min,xe.max[Le]=Cn.boundingBox.max,xe.resolution[Le]=Cn.resolution,Le++);for(const Cn in xe)xe[Cn].length=Le;Ue.probesSH.value=xe.textures,Ue.probesMin.value=xe.min,Ue.probesMax.value=xe.max,Ue.probesResolution.value=xe.resolution}or.upload(L,zo(Rt),Ue,Bt)}if(z.isShaderMaterial&&z.uniformsNeedUpdate===!0&&(or.upload(L,zo(Rt),Ue,Bt),z.uniformsNeedUpdate=!1),z.isSpriteMaterial&&ee.setValue(L,"center",k.center),ee.setValue(L,"modelViewMatrix",k.modelViewMatrix),ee.setValue(L,"normalMatrix",k.normalMatrix),ee.setValue(L,"modelMatrix",k.matrixWorld),z.uniformsGroups!==void 0){const xe=z.uniformsGroups;for(let Le=0,Cn=xe.length;Le<Cn;Le++){const Ho=xe[Le];It.update(Ho,ke),It.bind(Ho,ke)}}return ke}function hh(v,I){v.ambientLightColor.needsUpdate=I,v.lightProbe.needsUpdate=I,v.sunLights.needsUpdate=I,v.sunLightShadows.needsUpdate=I,v.directionalLights.needsUpdate=I,v.directionalLightShadows.needsUpdate=I,v.pointLights.needsUpdate=I,v.pointLightShadows.needsUpdate=I,v.spotLights.needsUpdate=I,v.spotLightShadows.needsUpdate=I,v.rectAreaLights.needsUpdate=I,v.hemisphereLights.needsUpdate=I}function uh(v){return v.isMeshLambertMaterial||v.isMeshToonMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isShadowMaterial||v.isShaderMaterial&&v.lights===!0}this.getActiveCubeFace=function(){return X},this.getActiveMipmapLevel=function(){return G},this.getRenderTarget=function(){return et},this.setRenderTargetTextures=function(v,I,W){const z=Pt.get(v);z.__autoAllocateDepthBuffer=v.resolveDepthBuffer===!1,z.__autoAllocateDepthBuffer===!1&&(z.__useRenderToTexture=!1),Pt.get(v.texture).__webglTexture=I,Pt.get(v.depthTexture).__webglTexture=z.__autoAllocateDepthBuffer?void 0:W,z.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(v,I){const W=Pt.get(v);W.__webglFramebuffer=I,W.__useDefaultFramebuffer=I===void 0},this.setRenderTarget=function(v,I=0,W=0){et=v,X=I,G=W;let z=null,k=!1,gt=!1;if(v){const mt=Pt.get(v);if(mt.__useDefaultFramebuffer!==void 0){nt.bindFramebuffer(L.FRAMEBUFFER,mt.__webglFramebuffer),$.copy(v.viewport),at.copy(v.scissor),Et=v.scissorTest,nt.viewport($),nt.scissor(at),nt.setScissorTest(Et),Y=-1;return}else if(mt.__webglFramebuffer===void 0)Bt.setupRenderTarget(v);else if(mt.__hasExternalTextures)Bt.rebindTextures(v,Pt.get(v.texture).__webglTexture,Pt.get(v.depthTexture).__webglTexture);else if(v.depthBuffer){const Ht=v.depthTexture;if(mt.__boundDepthTexture!==Ht){if(Ht!==null&&Pt.has(Ht)&&(v.width!==Ht.image.width||v.height!==Ht.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Bt.setupDepthRenderbuffer(v)}}const yt=v.texture;(yt.isData3DTexture||yt.isDataArrayTexture||yt.isCompressedArrayTexture)&&(gt=!0);const Lt=Pt.get(v).__webglFramebuffer;v.isWebGLCubeRenderTarget?(Array.isArray(Lt[I])?z=Lt[I][W]:z=Lt[I],k=!0):v.samples>0&&Bt.useMultisampledRTT(v)===!1?z=Pt.get(v).__webglMultisampledFramebuffer:Array.isArray(Lt)?z=Lt[W]:z=Lt,$.copy(v.viewport),at.copy(v.scissor),Et=v.scissorTest}else $.copy(Ft).multiplyScalar(ct).floor(),at.copy(Zt).multiplyScalar(ct).floor(),Et=ie;if(W!==0&&(z=V),nt.bindFramebuffer(L.FRAMEBUFFER,z)&&nt.drawBuffers(v,z),nt.viewport($),nt.scissor(at),nt.setScissorTest(Et),k){const mt=Pt.get(v.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+I,mt.__webglTexture,W)}else if(gt){const mt=I;for(let yt=0;yt<v.textures.length;yt++){const Lt=Pt.get(v.textures[yt]);L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0+yt,Lt.__webglTexture,W,mt)}}else if(v!==null&&W!==0){const mt=Pt.get(v.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,mt.__webglTexture,W)}Y=-1};function Go(v){const I=Pt.get(v);return(I.__readFormat!==v.format||I.__readType!==v.type)&&(I.__readFormat=v.format,I.__readType=v.type,I.__formatReadable=Kt.textureFormatReadable(v.format),I.__typeReadable=Kt.textureTypeReadable(v.type)),I}this.readRenderTargetPixels=function(v,I,W,z,k,gt,bt,mt=0){if(!(v&&v.isWebGLRenderTarget)){ne("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let yt=Pt.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&bt!==void 0&&(yt=yt[bt],Array.isArray(yt)&&(yt=yt[0])),yt){nt.bindFramebuffer(L.FRAMEBUFFER,yt);try{const Lt=v.textures[mt],Ht=Lt.format,Jt=Lt.type;v.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+mt);const At=Go(Lt);if(At.__formatReadable===!1){ne("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(At.__typeReadable===!1){ne("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}I>=0&&I<=v.width-z&&W>=0&&W<=v.height-k&&L.readPixels(I,W,z,k,lt.convert(Ht),lt.convert(Jt),gt)}finally{const Lt=et!==null?Pt.get(et).__webglFramebuffer:null;nt.bindFramebuffer(L.FRAMEBUFFER,Lt)}}},this.readRenderTargetPixelsAsync=async function(v,I,W,z,k,gt,bt,mt=0){if(!(v&&v.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let yt=Pt.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&bt!==void 0&&(yt=yt[bt],Array.isArray(yt)&&(yt=yt[0])),yt)if(I>=0&&I<=v.width-z&&W>=0&&W<=v.height-k){nt.bindFramebuffer(L.FRAMEBUFFER,yt);const Lt=v.textures[mt],Ht=Lt.format,Jt=Lt.type;v.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+mt);const At=Go(Lt);if(At.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(At.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Qt=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,Qt),L.bufferData(L.PIXEL_PACK_BUFFER,gt.byteLength,L.STREAM_READ),L.readPixels(I,W,z,k,lt.convert(Ht),lt.convert(Jt),0),L.bindBuffer(L.PIXEL_PACK_BUFFER,null);const Te=et!==null?Pt.get(et).__webglFramebuffer:null;nt.bindFramebuffer(L.FRAMEBUFFER,Te);const pe=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);return L.flush(),await Yh(L,pe,4),L.bindBuffer(L.PIXEL_PACK_BUFFER,Qt),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,gt),L.bindBuffer(L.PIXEL_PACK_BUFFER,null),L.deleteBuffer(Qt),L.deleteSync(pe),gt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(v,I=null,W=0){const z=Math.pow(2,-W),k=Math.floor(v.image.width*z),gt=Math.floor(v.image.height*z),bt=I!==null?I.x:0,mt=I!==null?I.y:0;Bt.setTexture2D(v,0),L.copyTexSubImage2D(L.TEXTURE_2D,W,0,0,bt,mt,k,gt),nt.unbindTexture()},this.copyTextureToTexture=function(v,I,W=null,z=null,k=0,gt=0){let bt,mt,yt,Lt,Ht,Jt,At,Qt,Te;const pe=v.isCompressedTexture?v.mipmaps[gt]:v.image;if(W!==null)bt=W.max.x-W.min.x,mt=W.max.y-W.min.y,yt=W.isBox3?W.max.z-W.min.z:1,Lt=W.min.x,Ht=W.min.y,Jt=W.isBox3?W.min.z:0;else{const ee=Math.pow(2,-k);bt=Math.floor(pe.width*ee),mt=Math.floor(pe.height*ee),v.isDataArrayTexture?yt=pe.depth:v.isData3DTexture?yt=Math.floor(pe.depth*ee):yt=1,Lt=0,Ht=0,Jt=0}z!==null?(At=z.x,Qt=z.y,Te=z.z):(At=0,Qt=0,Te=0);const de=lt.convert(I.format),ze=lt.convert(I.type);let Rt;I.isData3DTexture?(Bt.setTexture3D(I,0),Rt=L.TEXTURE_3D):I.isDataArrayTexture||I.isCompressedArrayTexture?(Bt.setTexture2DArray(I,0),Rt=L.TEXTURE_2D_ARRAY):(Bt.setTexture2D(I,0),Rt=L.TEXTURE_2D),nt.activeTexture(L.TEXTURE0),nt.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,I.flipY),nt.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,I.premultiplyAlpha),nt.pixelStorei(L.UNPACK_ALIGNMENT,I.unpackAlignment);const We=nt.getParameter(L.UNPACK_ROW_LENGTH),se=nt.getParameter(L.UNPACK_IMAGE_HEIGHT),di=nt.getParameter(L.UNPACK_SKIP_PIXELS),ke=nt.getParameter(L.UNPACK_SKIP_ROWS),bs=nt.getParameter(L.UNPACK_SKIP_IMAGES);nt.pixelStorei(L.UNPACK_ROW_LENGTH,pe.width),nt.pixelStorei(L.UNPACK_IMAGE_HEIGHT,pe.height),nt.pixelStorei(L.UNPACK_SKIP_PIXELS,Lt),nt.pixelStorei(L.UNPACK_SKIP_ROWS,Ht),nt.pixelStorei(L.UNPACK_SKIP_IMAGES,Jt);const Vn=v.isDataArrayTexture||v.isData3DTexture,fi=I.isDataArrayTexture||I.isData3DTexture;if(v.isDepthTexture){const ee=Pt.get(v),Ue=Pt.get(I),fn=Pt.get(ee.__renderTarget),xe=Pt.get(Ue.__renderTarget);nt.bindFramebuffer(L.READ_FRAMEBUFFER,fn.__webglFramebuffer),nt.bindFramebuffer(L.DRAW_FRAMEBUFFER,xe.__webglFramebuffer);for(let Le=0;Le<yt;Le++)Vn&&(L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Pt.get(v).__webglTexture,k,Jt+Le),L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Pt.get(I).__webglTexture,gt,Te+Le)),L.blitFramebuffer(Lt,Ht,Lt+bt,Ht+mt,At,Qt,At+bt,Qt+mt,L.DEPTH_BUFFER_BIT,L.NEAREST);nt.bindFramebuffer(L.READ_FRAMEBUFFER,null),nt.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else if(k!==0||v.isRenderTargetTexture||Pt.has(v)){const ee=Pt.get(v),Ue=Pt.get(I);nt.bindFramebuffer(L.READ_FRAMEBUFFER,P),nt.bindFramebuffer(L.DRAW_FRAMEBUFFER,H);for(let fn=0;fn<yt;fn++)Vn?L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,ee.__webglTexture,k,Jt+fn):L.framebufferTexture2D(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,ee.__webglTexture,k),fi?L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Ue.__webglTexture,gt,Te+fn):L.framebufferTexture2D(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,Ue.__webglTexture,gt),k!==0?L.blitFramebuffer(Lt,Ht,Lt+bt,Ht+mt,At,Qt,At+bt,Qt+mt,L.COLOR_BUFFER_BIT,L.NEAREST):fi?L.copyTexSubImage3D(Rt,gt,At,Qt,Te+fn,Lt,Ht,bt,mt):L.copyTexSubImage2D(Rt,gt,At,Qt,Lt,Ht,bt,mt);nt.bindFramebuffer(L.READ_FRAMEBUFFER,null),nt.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else fi?v.isDataTexture||v.isData3DTexture?L.texSubImage3D(Rt,gt,At,Qt,Te,bt,mt,yt,de,ze,pe.data):I.isCompressedArrayTexture?L.compressedTexSubImage3D(Rt,gt,At,Qt,Te,bt,mt,yt,de,pe.data):L.texSubImage3D(Rt,gt,At,Qt,Te,bt,mt,yt,de,ze,pe):v.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,gt,At,Qt,bt,mt,de,ze,pe.data):v.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,gt,At,Qt,pe.width,pe.height,de,pe.data):L.texSubImage2D(L.TEXTURE_2D,gt,At,Qt,bt,mt,de,ze,pe);nt.pixelStorei(L.UNPACK_ROW_LENGTH,We),nt.pixelStorei(L.UNPACK_IMAGE_HEIGHT,se),nt.pixelStorei(L.UNPACK_SKIP_PIXELS,di),nt.pixelStorei(L.UNPACK_SKIP_ROWS,ke),nt.pixelStorei(L.UNPACK_SKIP_IMAGES,bs),gt===0&&I.generateMipmaps===!0&&I.mipmapsAutoUpdate===!0&&L.generateMipmap(Rt),nt.unbindTexture()},this.initRenderTarget=function(v){Pt.get(v).__webglFramebuffer===void 0&&Bt.setupRenderTarget(v)},this.initTexture=function(v){v.isCubeTexture?Bt.setTextureCube(v,0):v.isData3DTexture?Bt.setTexture3D(v,0):v.isDataArrayTexture||v.isCompressedArrayTexture?Bt.setTexture2DArray(v,0):Bt.setTexture2D(v,0),nt.unbindTexture()},this.resetState=function(){X=0,G=0,et=null,nt.reset(),dt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return xn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=te._getDrawingBufferColorSpace(t),e.unpackColorSpace=te._getUnpackColorSpace()}}const Vl={type:"change"},bo={type:"start"},Jc={type:"end"},$s=new _o,Wl=new Un,I0=Math.cos(70*$h.DEG2RAD),Ae=new F,$e=2*Math.PI,re={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},sa=1e-6;class N0 extends Ou{constructor(t,e=null){super(t,e),this.state=re.NONE,this.target=new F,this.cursor=new F,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Xi.ROTATE,MIDDLE:Xi.DOLLY,RIGHT:Xi.PAN},this.touches={ONE:Wi.ROTATE,TWO:Wi.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new F,this._lastQuaternion=new si,this._lastTargetPosition=new F,this._quat=new si().setFromUnitVectors(t.up,new F(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Sl,this._sphericalDelta=new Sl,this._scale=1,this._panOffset=new F,this._rotateStart=new Dt,this._rotateEnd=new Dt,this._rotateDelta=new Dt,this._panStart=new Dt,this._panEnd=new Dt,this._panDelta=new Dt,this._dollyStart=new Dt,this._dollyEnd=new Dt,this._dollyDelta=new Dt,this._dollyDirection=new F,this._mouse=new Dt,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=F0.bind(this),this._onPointerDown=U0.bind(this),this._onPointerUp=O0.bind(this),this._onContextMenu=W0.bind(this),this._onMouseWheel=k0.bind(this),this._onKeyDown=G0.bind(this),this._onTouchStart=H0.bind(this),this._onTouchMove=V0.bind(this),this._onMouseDown=B0.bind(this),this._onMouseMove=z0.bind(this),this._interceptControlDown=X0.bind(this),this._interceptControlUp=Y0.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(t){this._cursorStyle=t,t==="grab"?this.domElement.style.cursor="grab":this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(t){super.connect(t),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.ownerDocument.addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.state=re.NONE,this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.ownerDocument.removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.ownerDocument.removeEventListener("keyup",this._interceptControlUp,{capture:!0}),this._controlActive=!1,this._pointers.length=0,this._pointerPositions={},this.domElement.style.touchAction="",this.domElement.style.cursor="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Vl),this.update(),this.state=re.NONE}pan(t,e){this._pan(t,e),this.update()}dollyIn(t){this._dollyIn(t),this.update()}dollyOut(t){this._dollyOut(t),this.update()}rotateLeft(t){this._rotateLeft(t),this.update()}rotateUp(t){this._rotateUp(t),this.update()}update(t=null){const e=this.object.position;Ae.copy(e).sub(this.target),Ae.applyQuaternion(this._quat),this._spherical.setFromVector3(Ae),this.autoRotate&&this.state===re.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(i)&&isFinite(s)&&(i<-Math.PI?i+=$e:i>Math.PI&&(i-=$e),s<-Math.PI?s+=$e:s>Math.PI&&(s-=$e),i<=s?this._spherical.theta=Math.max(i,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+s)/2?Math.max(i,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const a=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=a!=this._spherical.radius}if(Ae.setFromSpherical(this._spherical),Ae.applyQuaternion(this._quatInverse),e.copy(this.target).add(Ae),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let a=null;if(this.object.isPerspectiveCamera){const o=Ae.length();a=this._clampDistance(o*this._scale);const l=o-a;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){const o=new F(this._mouse.x,this._mouse.y,0);o.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;const c=new F(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(o),this.object.updateMatrixWorld(),a=Ae.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;a!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(a).add(this.object.position):($s.origin.copy(this.object.position),$s.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot($s.direction))<I0?this.object.lookAt(this.target):(Wl.setFromNormalAndCoplanarPoint(this.object.up,this.target),$s.intersectPlane(Wl,this.target))))}else if(this.object.isOrthographicCamera){const a=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),a!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>sa||8*(1-this._lastQuaternion.dot(this.object.quaternion))>sa||this._lastTargetPosition.distanceToSquared(this.target)>sa?(this.dispatchEvent(Vl),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?$e/60*this.autoRotateSpeed*t:$e/60/60*this.autoRotateSpeed}_getZoomScale(t){const e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){Ae.setFromMatrixColumn(e,0),Ae.multiplyScalar(-t),this._panOffset.add(Ae)}_panUp(t,e){this.screenSpacePanning===!0?Ae.setFromMatrixColumn(e,1):(Ae.setFromMatrixColumn(e,0),Ae.crossVectors(this.object.up,Ae)),Ae.multiplyScalar(t),this._panOffset.add(Ae)}_pan(t,e){const i=this.domElement;if(this.object.isPerspectiveCamera){const s=this.object.position;Ae.copy(s).sub(this.target);let r=Ae.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*r/i.clientHeight,this.object.matrix),this._panUp(2*e*r/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const i=this.domElement.getBoundingClientRect(),s=t-i.left,r=e-i.top,a=i.width,o=i.height;this._mouse.x=s/a*2-1,this._mouse.y=-(r/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientY),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft($e*this._rotateDelta.x/e.clientHeight),this._rotateUp($e*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.zoomToCursor&&(this._performCursorZoom=!0,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp($e*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(-$e*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft($e*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(-$e*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._rotateStart.set(i,s)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panStart.set(i,s)}}_handleTouchStartDolly(t){const e=this._getSecondPointerPosition(t),i=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(i*i+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const i=this._getSecondPointerPosition(t),s=.5*(t.pageX+i.x),r=.5*(t.pageY+i.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft($e*this._rotateDelta.x/e.clientHeight),this._rotateUp($e*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panEnd.set(i,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const e=this._getSecondPointerPosition(t),i=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(i*i+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const a=(t.pageX+e.x)*.5,o=(t.pageY+e.y)*.5;this._updateZoomParameters(a,o)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new Dt,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){const e=t.deltaMode,i={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}}function U0(n){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(n.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(n)&&(this._addPointer(n),n.pointerType==="touch"?this._onTouchStart(n):this._onMouseDown(n),this._cursorStyle==="grab"&&(this.domElement.style.cursor="grabbing")))}function F0(n){this.enabled!==!1&&(n.pointerType==="touch"?this._onTouchMove(n):this._onMouseMove(n))}function O0(n){switch(this._removePointer(n),this._pointers.length){case 0:this.domElement.releasePointerCapture(n.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Jc),this.state=re.NONE,this._cursorStyle==="grab"&&(this.domElement.style.cursor="grab");break;case 1:const t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function B0(n){let t;switch(n.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case Xi.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(n),this.state=re.DOLLY;break;case Xi.ROTATE:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=re.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=re.ROTATE}break;case Xi.PAN:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=re.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=re.PAN}break;default:this.state=re.NONE}this.state!==re.NONE&&this.dispatchEvent(bo)}function z0(n){switch(this.state){case re.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(n);break;case re.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(n);break;case re.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(n);break}}function k0(n){this.enabled===!1||this.enableZoom===!1||this.state!==re.NONE||(n.preventDefault(),this.dispatchEvent(bo),this._handleMouseWheel(this._customWheelEvent(n)),this.dispatchEvent(Jc))}function G0(n){this.enabled!==!1&&this._handleKeyDown(n)}function H0(n){switch(this._trackPointer(n),this._pointers.length){case 1:switch(this.touches.ONE){case Wi.ROTATE:if(this.enableRotate===!1){this.state=re.NONE;break}this._handleTouchStartRotate(n),this.state=re.TOUCH_ROTATE;break;case Wi.PAN:if(this.enablePan===!1){this.state=re.NONE;break}this._handleTouchStartPan(n),this.state=re.TOUCH_PAN;break;default:this.state=re.NONE}break;case 2:switch(this.touches.TWO){case Wi.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(n),this.state=re.TOUCH_DOLLY_PAN;break;case Wi.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(n),this.state=re.TOUCH_DOLLY_ROTATE;break;default:this.state=re.NONE}break;default:this.state=re.NONE}this.state!==re.NONE&&this.dispatchEvent(bo)}function V0(n){switch(this._trackPointer(n),this.state){case re.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(n),this.update();break;case re.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(n),this.update();break;case re.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(n),this.update();break;case re.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(n),this.update();break;default:this.state=re.NONE}}function W0(n){this.enabled!==!1&&n.preventDefault()}function X0(n){n.key==="Control"&&(this._controlActive=!0,this.domElement.ownerDocument.addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function Y0(n){n.key==="Control"&&(this._controlActive=!1,this.domElement.ownerDocument.removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const ms={sonny:{name:"Sonny",role:"製作人／老闆",label:"製作人 Sonny"},grok:{name:"Grok Bot",role:"專案經理",label:"專案經理 Grok"},claude:{name:"Claude",role:"工程＋劇本",label:"工程 Claude"},chatgpt:{name:"ChatGPT",role:"美術",label:"美術 GPT"}},gr=["sonny","grok","claude","chatgpt"],Qc={sonny:12887412,grok:8361640,claude:8232587,chatgpt:12880774},Zn={sonny:{x:-4.5,z:-4.2,w:2.6,d:1.1},grok:{x:4.2,z:-4.05,w:2.3,d:1},claude:{x:-4.5,z:2.28,w:2.1,d:.94},chatgpt:{x:4.45,z:2.4,w:2,d:.94}};function Js(n){return{x:n.x,z:n.z+n.d/2+.2,yaw:Math.PI}}const fe={sonny:{desk:Zn.sonny,home:Js(Zn.sonny),coffee:{x:1.28,z:.98,yaw:-2.5},rest:"desk",workPose:"type",screens:"overview",accessory:"watch"},grok:{desk:Zn.grok,home:Js(Zn.grok),coffee:{x:2.55,z:.98,yaw:-2.35},rest:"desk",workPose:"type",screens:"triple",accessory:"headset"},claude:{desk:Zn.claude,home:Js(Zn.claude),coffee:{x:1.85,z:1.22,yaw:-2.2},sofa:{x:-2.2,z:.02,yaw:0},rest:"sofa",workPose:"type",screens:"dual",accessory:"band"},chatgpt:{desk:Zn.chatgpt,home:Js(Zn.chatgpt),coffee:{x:2.15,z:1.18,yaw:-2.15},rest:"desk",workPose:"draw",screens:"tablet",accessory:"pencil"}},$n=[{x:.4,z:1.85,yaw:Math.PI,pause:1.1},{x:.4,z:-1.58,yaw:Math.PI,pause:2.5},{x:3.15,z:-1.58,yaw:-1.35,pause:2.1},{x:3.15,z:1.85,yaw:.35,pause:1.8},{x:.4,z:1.85,yaw:.15,pause:1.2},{x:.4,z:3.55,yaw:Math.PI,pause:2.3}],q0={x:.15,z:1.62},Je={x:-2.2,z:.02,w:1.9,d:.74},yn={x:2.05,z:-.2,w:1.75,d:.64};function Fe(n){return new Mo({color:n,flatShading:!0})}function K0(){return{wall:Fe(16185078),floor:Fe(13816530),zoneA:Fe(15000804),zoneB:Fe(14277081),zoneC:Fe(14606046),zoneD:Fe(15329769),break:Fe(15987699),desk:Fe(16250871),trim:Fe(13290186),metal:Fe(11908533),dark:Fe(9079434),bezel:Fe(13684944),pot:Fe(14935011),plant:Fe(11779764),body:Fe(16053492),limb:Fe(15000804),glass:new Mo({color:13951464,flatShading:!0,transparent:!0,opacity:.34,depthWrite:!1})}}function rn(n,t,e,i){const s=new _e(n,t);return s.position.y=e,s.castShadow=!0,s.receiveShadow=!1,i.add(s),s}function Xl(n,t,e,i){const s=new ge;s.position.set(n*.32,.4,.02);const r=rn(new he(.1,.28,.1),t.limb,-.14,s);r.position.x=0;const a=new ge;a.position.y=-.28,s.add(a),rn(new he(.09,.26,.09),t.body,-.13,a);const o=rn(new he(.1,.16,.02),t.dark,-.3,a);return o.rotation.x=-.4,o.visible=!1,o.castShadow=!1,i==="watch"&&n<0&&rn(new he(.08,.045,.09),e,-.24,a),i==="band"&&n>0&&rn(new he(.1,.035,.1),e,-.22,a),{shoulder:s,elbow:a,phone:o}}function Yl(n,t){const e=new ge;e.position.set(n*.11,0,0),rn(new he(.13,.36,.13),t.limb,-.18,e);const i=new ge;i.position.y=-.36,e.add(i),rn(new he(.12,.34,.12),t.body,-.17,i);const s=rn(new he(.12,.06,.2),t.limb,-.34,i);return s.position.z=.04,{hip:e,knee:i}}function ra(n,t,e,i,s,r){const a=Math.min(r,i/2,s/2);n.beginPath(),n.moveTo(t+a,e),n.arcTo(t+i,e,t+i,e+s,a),n.arcTo(t+i,e+s,t,e+s,a),n.arcTo(t,e+s,t,e,a),n.arcTo(t,e,t+i,e,a),n.closePath()}function aa({text:n,accent:t,width:e,height:i,worldW:s,worldH:r,kind:a}){const o=document.createElement("canvas");o.width=e,o.height=i;const l=o.getContext("2d"),c=new yr(o);c.colorSpace=Oe;const f=new mo({map:c,transparent:!0,depthWrite:!1}),m=new Ic(f);m.scale.set(s,r,1),m.center.set(.5,0);function h(p,x=!1){l.clearRect(0,0,e,i),l.fillStyle="rgba(255,255,255,0.95)",ra(l,6,8,e-12,i-18,(i-18)/2),l.fill(),a==="name"&&(l.fillStyle=t,ra(l,22,22,10,i-46,5),l.fill()),l.fillStyle=a==="zzz"?"#8d8d8d":"#3a3a3a",l.font=a==="zzz"?'700 42px Georgia, "Times New Roman", serif':`600 ${a==="name"?34:32}px "WenQuanYi Micro Hei", "PingFang TC", "Noto Sans TC", "Microsoft JhengHei", sans-serif`,l.textAlign="center",l.textBaseline="middle",l.fillText(p,e/2+(a==="name"?8:0),i/2-2),x&&(l.strokeStyle="rgba(60,60,60,0.45)",l.lineWidth=6,ra(l,6,8,e-12,i-18,(i-18)/2),l.stroke()),c.needsUpdate=!0}return h(n,!1),m.userData.draw=h,m}function Z0({id:n,mats:t,accentHex:e,accessory:i,name:s}){const r=Fe(e),a=new ge;a.name=n;const o=new ge;a.add(o);const l=new ge;l.position.y=.74,o.add(l);const c=rn(new he(.48,.5,.26),t.body,.28,l),f=new ge;f.position.y=.5,l.add(f),rn(new he(.12,.1,.12),t.limb,.02,f);const m=rn(new ei(.18,1),t.body,.2,f);if(m.rotation.set(.2,.35,.1),i==="headset"){const b=new _e(new So(.2,.018,5,10),r);b.rotation.x=Math.PI/2,b.position.y=.04,b.castShadow=!0,m.add(b);const _=new he(.06,.1,.07),M=new _e(_,r);M.position.set(-.18,-.02,0),M.castShadow=!0;const D=new _e(_,r);D.position.set(.18,-.02,0),D.castShadow=!0,m.add(M,D)}if(i==="pencil"){const b=rn(new he(.028,.24,.028),r,.18,m);b.position.x=.14,b.rotation.z=-.45;const _=rn(new he(.02,.04,.02),t.dark,.13,b);_.castShadow=!1}const h=$0(t,r);a.add(h);const p=Xl(-1,t,r,i),x=Xl(1,t,r,i);l.add(p.shoulder,x.shoulder);const E=Yl(-1,t),d=Yl(1,t);l.add(E.hip,d.hip);const u=new _e(new he(.78,1.75,.7),new Ti({visible:!1}));u.position.y=.9,u.userData.id=n,a.add(u),a.traverse(b=>{b.userData.id=n});const S=`#${e.toString(16).padStart(6,"0")}`,w=aa({text:s,accent:S,width:384,height:96,worldW:1.05,worldH:.26,kind:"name"});w.position.set(0,1.78,0);const y=aa({text:"…",accent:S,width:256,height:80,worldW:.62,worldH:.2,kind:"bubble"});y.position.set(0,2.08,0);const A=aa({text:"Zzz",accent:S,width:160,height:80,worldW:.38,worldH:.2,kind:"zzz"});return A.position.set(.34,2.32,0),A.visible=!1,a.add(w,y,A),a.traverse(b=>{b.userData.id=n}),{anchor:a,rig:{pivot:o,hips:l,torso:c,head:f,armL:p,armR:x,legL:E,legR:d,phoneL:p.phone,phoneR:x.phone,sleeper:h,bubble:y,zzz:A,nameplate:w,nameText:s,bubbleText:""}}}function $0(n,t){const e=new ge;e.position.y=.58,e.visible=!1;const i=new _e(new he(.58,.2,.32),n.body);i.position.set(-.02,0,0),i.castShadow=!0,e.add(i);const s=new _e(new ei(.16,1),n.body);s.position.set(-.48,.03,0),s.rotation.set(.3,.5,.1),s.castShadow=!0,e.add(s);for(const[l,c]of[[.08,.18],[-.08,.32]]){const f=new _e(new he(.34,.11,.11),n.limb);f.position.set(.42,-.02,l),f.rotation.z=c,f.castShadow=!0;const m=new _e(new he(.3,.1,.1),n.body);m.position.set(.74,-.05,l),m.rotation.z=c*.45,m.castShadow=!0,e.add(f,m)}const r=new _e(new he(.36,.08,.09),n.limb);r.position.set(-.02,.05,.16),r.castShadow=!0;const a=new _e(new he(.34,.08,.09),n.body);a.position.set(.04,.1,.08),a.rotation.z=-.15,a.castShadow=!0,e.add(r,a);const o=new _e(new he(.08,.05,.1),t);return o.position.set(.12,.12,.14),o.castShadow=!0,e.add(o),e}function J0(n){n.armL.shoulder.rotation.set(.08,0,.12),n.armR.shoulder.rotation.set(.08,0,-.12),n.armL.elbow.rotation.set(0,0,0),n.armR.elbow.rotation.set(0,0,0)}function ql(n){n.hips.position.y=.5,n.legL.hip.rotation.x=-Math.PI/2,n.legR.hip.rotation.x=-Math.PI/2,n.legL.knee.rotation.x=Math.PI/2*.92,n.legR.knee.rotation.x=Math.PI/2*.92}function ln(n,t,e,i){n.shoulder.rotation.x=t,n.shoulder.rotation.z=i,n.elbow.rotation.x=e}function Q0(n,t,e){n.pivot.rotation.set(0,0,0),n.pivot.position.set(0,0,0),n.hips.position.set(0,.74,0),n.hips.rotation.set(0,0,0),n.torso.rotation.set(0,0,0),n.head.rotation.set(0,0,0),n.legL.hip.rotation.set(0,0,0),n.legR.hip.rotation.set(0,0,0),n.legL.knee.rotation.set(0,0,0),n.legR.knee.rotation.set(0,0,0),n.phoneL.visible=!1,n.phoneR.visible=!1,n.pivot.visible=!0,n.sleeper&&(n.sleeper.visible=!1),J0(n);const i=Math.sin(e*1.7)*.008;if(t==="walk"){const s=Math.sin(e*8);n.legL.hip.rotation.x=s*.6,n.legR.hip.rotation.x=-s*.6,n.legL.knee.rotation.x=Math.max(0,-s)*1.05,n.legR.knee.rotation.x=Math.max(0,s)*1.05,n.armL.shoulder.rotation.x=-s*.5,n.armR.shoulder.rotation.x=s*.5,n.torso.rotation.y=s*.06,n.hips.position.y=.74+Math.abs(s)*.02;return}if(t==="play"){ql(n);const s=e%8;if(s>6.35){const c=Math.sin((s-6.35)/1.65*Math.PI);n.hips.position.y=.5+c*.06,n.torso.rotation.x=.08,n.head.rotation.x=-.25,ln(n.armL,-.45,-.35,.35),ln(n.armR,-.25,-.2,-.95);return}const a=Math.sin(e*2.6)*.014;n.hips.position.y=.5+a,n.torso.rotation.x=.34+Math.sin(e*1.4)*.025,n.head.rotation.x=.38;const o=Math.sin(e*16),l=Math.sin(e*11+.6);ln(n.armL,-1.28,-.72+o*.28,.32),ln(n.armR,-1.05,-.4+l*.1,-.82);return}if((t==="type"||t==="sit"||t==="draw"||t==="phone-sit"||t==="sleep-desk")&&(ql(n),n.hips.position.y=.5+i),t==="type"||t==="sit"){n.torso.rotation.x=.18,n.head.rotation.x=.18;const s=Math.sin(e*14),r=Math.sin(e*14+2),a=t==="type";ln(n.armL,-1.2,a?-.75+s*.34:-.6,.55),ln(n.armR,-1.2,a?-.75+r*.34:-.6,-.55);return}if(t==="draw"){n.torso.rotation.x=.28,n.head.rotation.x=.4;const s=Math.sin(e*2.4);ln(n.armL,-.95,-.8,.35),ln(n.armR,-1.35+s*.12,-.35,-.45),n.armR.shoulder.rotation.y=s*.25;return}if(t==="phone-sit"||t==="phone-stand"){t==="phone-stand"&&(n.hips.position.y=.74+i),n.head.rotation.x=.42,ln(n.armL,-.25,-.2,.18),ln(n.armR,-1.75,-1.15,-.15),n.phoneR.visible=!0;return}if(t==="sleep-desk"){n.torso.rotation.x=1.02,n.head.rotation.x=.4,ln(n.armL,-1.35,-.15,.2),ln(n.armR,-1.35,-.15,-.2);return}if(t==="sleep-sofa"){n.pivot.visible=!1,n.sleeper.visible=!0;return}n.hips.position.y=.74+i,n.torso.rotation.y=Math.sin(e*.8)*.03}const Qs=-1.58;function j0(n,t){const e=[],i=o=>{const l=e.length?e[e.length-1]:n;Math.hypot(o.x-l.x,o.z-l.z)>.08&&e.push({x:o.x,z:o.z})};let s={x:n.x,z:n.z};n.z<-2.05&&(i({x:n.x,z:Qs}),s={x:n.x,z:Qs});const r=t.z<-2.05?{x:t.x,z:Qs}:{x:t.x,z:t.z};return(Math.abs(r.x-s.x)>.85||Math.abs(r.z-s.z)>2.2)&&i(q0),t.z<-2.05&&i({x:t.x,z:Qs}),i({x:t.x,z:t.z}),e}function Kl(n,t,e){let i=t-n;for(;i>Math.PI;)i-=Math.PI*2;for(;i<-Math.PI;)i+=Math.PI*2;const s=1-Math.exp(-8*e);return n+i*s}class t_{constructor({id:t,anchor:e,rig:i,chair:s,layout:r}){this.id=t,this.anchor=e,this.rig=i,this.chair=s,this.layout=r,this.official="",this.task="",this.updatedAt="",this.activity="stand",this.pose="stand",this.simSlack=!1,this.path=[],this.pending=null,this.pos={x:r.home.x,z:r.home.z},this.yaw=r.home.yaw,this.displayYaw=r.home.yaw,this.spin=0,this.timer=0,this.phase=Math.random()*6,this.strollIndex=0,this.bob=0,this.arrived=!0,this.ready=!1}placeInitial(t){if(this.official=t.state||"",this.task=t.task||"",this.updatedAt=t.updatedAt||"",this.progress=Number.isFinite(t.progress)?t.progress:null,this.done=Array.isArray(t.done)?t.done.map(String):[],this.next=t.next?String(t.next):"",this.simSlack=!1,t.state==="視察中"){const e=$n[0],i=$n[1];this.pos={x:e.x,z:e.z},this.yaw=Math.atan2(i.x-e.x,i.z-e.z),this.displayYaw=this.yaw,this.strollIndex=1,this.pending={activity:"stroll",point:i,stroll:!0},this.path=[{x:i.x,z:i.z}],this.activity="walk",this.pose="walk",this.arrived=!1}else t.state==="工作"?(this.snap(this.layout.home,"work",this.layout.workPose),this.timer=18+Math.random()*8):t.state==="偷懶"?this.snap(this.layout.home,"play","play"):t.state==="休息"?this.layout.rest==="sofa"?this.snap(this.layout.sofa,"sofa","sleep-sofa"):this.snap(this.layout.home,"desk-sleep","sleep-desk"):this.snap(this.layout.home,"stand","stand");this.ready=!0,this.applyTransform(0)}applyStatus(t){const e=t.state||"",i=e!==this.official;this.task=t.task||"",this.updatedAt=t.updatedAt||"",this.progress=Number.isFinite(t.progress)?t.progress:null,this.done=Array.isArray(t.done)?t.done.map(String):[],this.next=t.next?String(t.next):"",i&&(this.official=e,this.simSlack=!1,this.begin(this.planOfficial()))}planOfficial(){return this.official==="工作"?{activity:"work",pose:this.layout.workPose,point:this.layout.home,timer:20+Math.random()*12}:this.official==="偷懶"?{activity:"play",pose:"play",point:this.layout.home,timer:0}:this.official==="休息"?this.layout.rest==="sofa"?{activity:"sofa",pose:"sleep-sofa",point:this.layout.sofa,timer:0}:{activity:"desk-sleep",pose:"sleep-desk",point:this.layout.home,timer:0}:this.official==="視察中"?{activity:"stroll",point:$n[this.strollIndex%$n.length],stroll:!0}:{activity:"stand",pose:"stand",point:this.layout.home,timer:0}}planSlack(t){const e=Math.random();return e<.46?{activity:"coffee",pose:"phone-stand",point:this.layout.coffee,timer:t}:e<.74?{activity:"phone",pose:"phone-sit",point:this.layout.home,timer:t}:{activity:"spin",pose:"sit",point:this.layout.home,timer:t}}begin(t){this.pending=t;const e=t.point;if(Math.hypot(e.x-this.pos.x,e.z-this.pos.z)<.12){this.finish();return}this.path=t.stroll?[{x:e.x,z:e.z}]:j0(this.pos,e),this.activity="walk",this.pose="walk",this.arrived=!1}snap(t,e,i){this.pos={x:t.x,z:t.z},this.yaw=t.yaw??this.yaw,this.displayYaw=this.yaw,this.path=[],this.activity=e,this.pose=i,this.arrived=!0,this.spin=0,this.bob=0}finish(){const t=this.pending;if(t){if(this.pos={x:t.point.x,z:t.point.z},this.path=[],this.arrived=!0,this.bob=0,t.stroll){const e=$n[this.strollIndex%$n.length];this.activity="stroll",this.pose="stand",this.yaw=e.yaw,this.timer=e.pause;return}this.activity=t.activity,this.pose=t.pose,this.yaw=t.point.yaw??this.yaw,this.timer=t.timer||0,t.activity!=="spin"&&(this.spin=0)}}update(t){if(this.phase+=t,this.suspended){this.bob=this.pose==="walk"?Math.abs(Math.sin(this.phase*8))*.03:0,this.displayYaw=this.yaw,this.applyTransform(t);return}this.arrived?this.stepStay(t):this.stepWalk(t),this.activity==="spin"?this.displayYaw=this.layout.home.yaw+this.spin:this.displayYaw=Kl(this.displayYaw,this.yaw,t),this.applyTransform(t)}stepWalk(t){const e=this.path[0];if(!e){this.finish();return}const i=e.x-this.pos.x,s=e.z-this.pos.z,r=Math.hypot(i,s);if(r<.045){this.pos.x=e.x,this.pos.z=e.z,this.path.shift(),this.path.length||this.finish();return}const a=Math.min(1.55*t,r);this.pos.x+=i/r*a,this.pos.z+=s/r*a,this.yaw=Math.atan2(i,s),this.bob=Math.abs(Math.sin(this.phase*8))*.03}stepStay(t){if(this.bob=0,this.activity==="spin"&&(this.spin+=t*1.35),this.activity==="work"&&this.official==="工作"){this.timer-=t,this.timer<=0&&(this.simSlack=!0,this.begin(this.planSlack(6+Math.random()*4)));return}if((this.activity==="coffee"||this.activity==="phone"||this.activity==="spin")&&this.simSlack){if(this.timer-=t,this.timer>0)return;if(this.simSlack){this.simSlack=!1,this.begin(this.planOfficial());return}let i=this.planSlack(8+Math.random()*5),s=0;for(;i.activity===this.activity&&s<4;)i=this.planSlack(8+Math.random()*5),s+=1;this.begin(i);return}if(this.activity==="stroll"&&(this.timer-=t,this.timer<=0)){this.strollIndex=(this.strollIndex+1)%$n.length;const i=$n[this.strollIndex];this.begin({activity:"stroll",point:i,stroll:!0})}}applyTransform(t){if(this.anchor.position.set(this.pos.x,this.bob,this.pos.z),this.anchor.rotation.y=this.displayYaw,this.chair){const s=this.activity==="spin"?this.layout.home.yaw+this.spin:this.layout.home.yaw;this.chair.rotation.y=Kl(this.chair.rotation.y,s,t||1)}Q0(this.rig,this.pose,this.phase);const e=this.simSlack?"離席一下":this.official||"…";e!==this.rig.bubbleText&&(this.rig.bubbleText=e,this.rig.bubble.userData.draw(e));const i=this.pose==="sleep-sofa"||this.pose==="sleep-desk";this.rig.zzz.visible=i,i&&(this.rig.zzz.position.y=2.32+Math.sin(this.phase*2)*.05),!!this.selected!==this.rig.selectedDrawn&&(this.rig.selectedDrawn=!!this.selected,this.rig.nameplate.userData.draw(this.rig.nameText,this.rig.selectedDrawn))}}const cn=160,e_=78,n_=420,i_=175;function s_(n=0){return{seed:n,t:0,run:n*37,y:0,vy:0,grounded:!0,score:0,popped:0,acc:0,taken:new Set}}function to(n){const t=Math.floor(n/cn),e=n-t*cn,i=(t%4+4)%4;return i===2&&e>48&&e<96?null:i===1&&e>46&&e<108?28:0}function jc(n){const t=Math.floor(n/cn),e=[];for(let i=t-1;i<=t+6;i+=1){const s=(i%4+4)%4;s!==0&&s!==3||e.push({id:i,x:i*cn+(s===0?70:36),h:22})}return e}function r_(n,t){n.t+=t,n.run+=e_*t;const e=n.run+108,i=to(e),s=to(e+34);i!==null&&n.y<=i+.8&&n.vy<=0&&(n.y=i,n.vy=0,n.grounded=!0);const r=s===null||i!==null&&s!==null&&s>i+12;n.grounded&&r&&(n.vy=i_,n.grounded=!1),n.grounded||(n.vy-=n_*t,n.y+=n.vy*t),i!==null&&n.y<i&&(n.y=i,n.vy=0,n.grounded=!0),n.y<-36&&(n.y=0,n.vy=0,n.grounded=!0);for(const a of jc(e))n.taken.has(a.id)||Math.abs(a.x-e)<18&&n.y+36>a.h&&n.y<a.h+8&&(n.taken.add(a.id),n.score+=1,n.popped=.45);if(n.popped>0&&(n.popped-=t),n.taken.size>24){const a=[...n.taken].slice(-12);n.taken=new Set(a)}}function a_(n,t){n.acc+=Math.min(t,.12);let e=0;for(;n.acc>=1/60&&e<5;)r_(n,1/60),n.acc-=1/60,e+=1}function o_(n,t,e,i,s,r){const a=Math.min(r,i/2,s/2);n.beginPath(),n.moveTo(t+a,e),n.arcTo(t+i,e,t+i,e+s,a),n.arcTo(t+i,e+s,t,e+s,a),n.arcTo(t,e+s,t,e,a),n.arcTo(t,e,t+i,e,a),n.closePath()}function l_(n,t){const e=n.canvas.width,i=n.canvas.height,s=e/320,r=i/180,a=132;n.fillStyle="#2b3036",n.fillRect(0,0,e,i),n.fillStyle="#3a4148";for(let d=0;d<5;d+=1){const u=((d*90-t.run*.25)%(e/s+80)+e/s+80)%(e/s+80)-20;n.beginPath(),n.arc(u*s,58*r,(18+d%3*6)*s,Math.PI,0),n.fill()}const o=Math.floor((t.run-40)/cn)*cn;for(let d=o;d<t.run+360;d+=cn){const S=(Math.floor(d/cn)%4+4)%4,w=(d-t.run)*s;n.fillStyle="#d7d7d7",S===2?(n.fillRect(w,a*r,48*s,(180-a)*r),n.fillRect(w+96*s,a*r,(cn-96)*s,(180-a)*r),n.fillStyle="#b9b9b9",n.fillRect(w,a*r,48*s,4*r),n.fillRect(w+96*s,a*r,(cn-96)*s,4*r)):(n.fillStyle="#e4e4e4",n.fillRect(w,a*r,(cn-6)*s,(180-a)*r),n.fillStyle="#b9b9b9",n.fillRect(w,a*r,(cn-6)*s,4*r),S===1&&(n.fillStyle="#cfcfcf",n.fillRect(w+46*s,(a-28)*r,62*s,28*r)))}for(const d of jc(t.run)){if(t.taken.has(d.id))continue;const u=(d.x-t.run)*s;if(u<-20||u>e+20)continue;const S=(a-d.h)*r,w=.45+Math.abs(Math.sin(t.t*4+d.id))*.55;n.fillStyle="#e3d3ae",n.beginPath(),n.ellipse(u,S,7*s*w,7*r,0,0,Math.PI*2),n.fill()}const l=108*s,c=t.run+108,f=to(c),m=f===null?0:f,h=(a-Math.max(t.y,m))*r,p=t.grounded?Math.abs(Math.sin(t.t*10)):0,x=t.grounded?Math.sin(t.t*10)*5:2;n.fillStyle="#f7f7f7",n.fillRect(l-5*s,h-(26+p)*r,7*s,(12+x)*r),n.fillRect(l+6*s,h-(26+p)*r,7*s,(12-x)*r),o_(n,l-14*s,h-(50+p)*r,32*s,26*r,4*s),n.fill(),n.fillStyle="#ececec",n.beginPath(),n.arc(l+3*s,h-(62+p)*r,12*s,0,Math.PI*2),n.fill(),n.fillStyle="#c4a574",n.fillRect(l-3*s,h-(58+p)*r,14*s,4*r);const E=t.score+Math.floor(t.run/90);n.fillStyle="#f4f4f4",n.font=`600 ${Math.max(22,Math.floor(i*.14))}px "WenQuanYi Micro Hei", "PingFang TC", sans-serif`,n.textBaseline="top",n.fillText("小跳",16,12),n.textAlign="right",n.fillText(`分數 ${E}`,e-16,12),n.textAlign="left",t.popped>0&&(n.globalAlpha=Math.max(0,t.popped/.45),n.fillText("+1",l,h-62*r),n.globalAlpha=1)}const un='"WenQuanYi Micro Hei", "PingFang TC", "Noto Sans TC", "Microsoft JhengHei", sans-serif',js=["// 開放式辦公室","const team = [","  'sonny',","  'grok',","  'claude',","  'chatgpt',","]","","function tick(dt) {","  for (const id of team) {","    const person = staff(id)",'    if (person.state === "工作") work(person, dt)','    else if (person.state === "休息") rest(person)',"  }","}","","function work(person, dt) {","  person.focus += dt","  if (person.focus > person.span) {","    stepAway(person)","  }","}"];function To(n,t,e,i,s,r){const a=Math.min(r,i/2,s/2);n.beginPath(),n.moveTo(t+a,e),n.arcTo(t+i,e,t+i,e+s,a),n.arcTo(t+i,e+s,t,e+s,a),n.arcTo(t,e+s,t,e,a),n.arcTo(t,e,t+i,e,a),n.closePath(),n.fill()}function c_(n,t,e,i){const{width:s,height:r}=n.canvas;n.clearRect(0,0,s,r),n.fillStyle=e?"#32363b":"#3c4146",n.fillRect(0,0,s,r),n.font=`27px ${un}`,n.textBaseline="top";const a=e?Math.floor(t*1.15+i)%js.length:i%js.length;for(let o=0;o<8;o+=1){const l=js[(a+o)%js.length];n.fillStyle=l.startsWith("//")?"#a9b8ae":"#e7e7e7",e||(n.fillStyle="#b5b5b5"),n.fillText(l,28,24+o*32)}if(e){const o=Math.floor(t*2.2+i)%8;n.fillStyle="#d7c4a2",n.fillRect(28,50+o*32,16,4)}}function h_(n,t,e){const{width:i,height:s}=n.canvas;n.clearRect(0,0,i,s),n.fillStyle="#f5f5f5",n.fillRect(0,0,i,s);const r=[["待辦",["試玩紀錄","第 2 章"]],["進行",["AI 辦公室"]],["完成",["戰鬥 v2","第 1 章"]]],a=i/3;r.forEach((o,l)=>{n.fillStyle="#ececec",n.fillRect(l*a+14,16,a-28,s-32),n.fillStyle="#5e5e5e",n.font=`28px ${un}`,n.textBaseline="top",n.fillText(o[0],l*a+28,30),o[1].forEach((c,f)=>{const m=e&&l===1?Math.sin(t*2.2)*4:0,h=78+f*70+m;n.fillStyle="#ffffff",To(n,l*a+28,h,a-56,52,8),n.fillStyle="#3f3f3f",n.font=`24px ${un}`,n.fillText(c,l*a+42,h+14)})})}function u_(n,t,e){const{width:i,height:s}=n.canvas;n.clearRect(0,0,i,s),n.fillStyle="#f3f3f3",n.fillRect(0,0,i,s),n.textBaseline="top",n.fillStyle="#4a4a4a",n.font=`40px ${un}`,n.fillText("亂世小英雄",36,36),n.font=`28px ${un}`,n.fillStyle="#6d6d6d",n.fillText("第 1 章試玩",36,108),n.fillText("已進主線",36,148),n.fillStyle="#8a8a8a",n.fillText("目前：暫停",36,210),n.fillStyle=e?"#c4a574":"#cfcfcf";const r=90+(e?(Math.sin(t*1.4)*.5+.5)*70:24);To(n,36,s-48,r,10,5)}function Zl(n,t,e){const{width:i,height:s}=n.canvas;n.clearRect(0,0,i,s),n.fillStyle="#f7f7f7",n.fillRect(0,0,i,s),n.strokeStyle="#d0d0d0",n.lineWidth=8,n.strokeRect(18,18,i-36,s-36),n.fillStyle="#dddddd";const r=e?2+Math.floor(t*.35%3):3;for(let a=0;a<r;a+=1)n.beginPath(),n.arc(i*.38,s*.46,18+a*16,0,Math.PI*2),n.fill();if(n.fillStyle="#c48b86",n.beginPath(),n.moveTo(i*.58,s*.72),n.lineTo(i*.8,s*.3),n.lineTo(i*.5,s*.28),n.closePath(),n.fill(),e){n.strokeStyle="#7f96a8",n.lineWidth=5,n.beginPath();const a=t*.15%1;n.moveTo(i*.22,s*.78),n.lineTo(i*(.22+a*.35),s*(.78-a*.18)),n.stroke()}}function d_(n,t,e){const{width:i,height:s}=n.canvas;n.clearRect(0,0,i,s),n.fillStyle=e?"#f4f4f4":"#ececec",n.fillRect(0,0,i,s),n.fillStyle="#5a5a5a",n.font=`28px ${un}`,n.textBaseline="top",n.fillText("今天",28,24);const r=["對狀態檔","看第 1 章","寫任務單","等 Sonny"];r.forEach((a,o)=>{const l=78+o*48;n.fillStyle="#ffffff",To(n,24,l,i-48,38,8),n.fillStyle=o===Math.floor(t)%r.length&&e?"#7f96a8":"#d5d5d5",n.beginPath(),n.arc(48,l+19,6,0,Math.PI*2),n.fill(),n.fillStyle="#444",n.font=`24px ${un}`,n.fillText(a,66,l+8)})}const f_={進行中:"#7f96a8",暫停:"#c4a574",閒置:"#b5b5b5",已上線:"#8eae9b"};function p_(n,t){const e=n.canvas.width,i=n.canvas.height;n.clearRect(0,0,e,i),n.fillStyle="#f7f7f7",n.fillRect(0,0,e,i),n.fillStyle="#3a3a3a",n.textBaseline="top",n.font=`700 54px ${un}`,n.fillText(t?.title||"本週進度",36,28),n.fillStyle="#6f6f6f",n.font=`500 28px ${un}`,n.fillText(t?.week||"",36,96);const s=Array.isArray(t?.items)?t.items:[],r=Math.min(120,Math.floor((i-160)/Math.max(s.length,1)));s.forEach((a,o)=>{const l=150+o*r,c=f_[a.status]||"#b5b5b5";n.fillStyle=c,n.fillRect(36,l+8,10,r-28),n.fillStyle="#3a3a3a",n.font=`650 32px ${un}`,n.fillText(`${a.project||""}  ${a.owner||""}`,60,l),n.fillStyle="#6a6a6a",n.font=`500 24px ${un}`;const f=Array.isArray(a.done)&&a.done.length?a.done.join("、"):a.next||"";n.fillText(f.slice(0,42),60,l+40);const m=Math.max(0,Math.min(100,Number(a.percent)||0));n.fillStyle="#e4e4e4",n.fillRect(e-280,l+18,200,14),n.fillStyle=c,n.fillRect(e-280,l+18,200*(m/100),14),n.fillStyle="#5c5c5c",n.font=`600 22px ${un}`,n.fillText(`${a.status||""} ${m}%`,e-280,l+40)})}const m_={code:c_,kanban:h_,overview:u_,art:Zl,tasks:d_,tablet:Zl};function xr(n,t,e,i=0){const s=document.createElement("canvas"),r=e==="art";s.width=e==="weekly"?1280:r?384:512,s.height=e==="weekly"?800:r?480:320;const a=s.getContext("2d"),o=new yr(s);o.colorSpace=Oe,e==="weekly"&&(o.anisotropy=8);const l=new Ti({map:o});return{mesh:new _e(new Ms(n,t),l),ctx:a,tex:o,kind:e,seed:i,draw:m_[e],last:-10,owner:null,playable:!1,game:null,weekly:null,dirty:!0}}const __=1/18;function oa(n,t){const e=t?Ie:Ke;n.tex.magFilter!==e&&(n.tex.magFilter=e,n.tex.minFilter=e,n.tex.generateMipmaps=!t,n.tex.needsUpdate=!0)}function g_(n,t,{isOn:e,isPlaying:i,isVisible:s}){for(const r of n){if(r.kind==="weekly"){if(!r.dirty)continue;p_(r.ctx,r.weekly),r.dirty=!1,oa(r,!1),r.tex.needsUpdate=!0;continue}if(i(r)){if(!s(r)||t-r.last<__)continue;const o=Math.min(.1,Math.max(.016,t-r.last));r.last=t,r.game||(r.game=s_(r.seed||0)),a_(r.game,o),l_(r.ctx,r.game),oa(r,!0),r.tex.needsUpdate=!0;continue}t-r.last<.12||(r.last=t,oa(r,!1),r.draw(r.ctx,t,e(r),r.seed),r.tex.needsUpdate=!0)}}function Ct(n,t,e,i,s,r,a={}){const o=new _e(t,e);return o.position.set(i,s,r),a.rx&&(o.rotation.x=a.rx),a.ry&&(o.rotation.y=a.ry),a.rz&&(o.rotation.z=a.rz),o.castShadow=a.cast!==!1,o.receiveShadow=!!a.receive,n.add(o),o}function Nt(n,t,e){return new he(n,t,e)}function x_(){const n=document.createElement("canvas");n.width=8,n.height=64;const t=n.getContext("2d"),e=t.createLinearGradient(0,0,0,64);e.addColorStop(0,"#f7f7f5"),e.addColorStop(.45,"#e6eef2"),e.addColorStop(1,"#d7ded8"),t.fillStyle=e,t.fillRect(0,0,8,64);const i=new yr(n);return i.colorSpace=Oe,new Ti({map:i})}function xi(n,t,e,i){const s=new ge;s.position.set(i.x,i.y,i.z),s.rotation.y=i.ry||0,n.add(s),Ct(s,Nt(i.w+.06,i.h+.06,.045),t.bezel,0,0,0);const r=xr(i.w*.92,i.h*.9,i.kind,i.seed||0);r.mesh.position.z=.028,r.owner=i.owner,r.playable=!!i.play,s.add(r.mesh),e.push(r),i.flat||(Ct(s,Nt(.05,.18,.05),t.metal,0,-i.h/2-.09,0),Ct(s,Nt(.26,.025,.14),t.metal,0,-i.h/2-.18,.02))}function v_(n,t,e,i,s){const{desk:r}=i,a=new ge;a.position.set(r.x,0,r.z),n.add(a),Ct(a,Nt(r.w,.06,r.d),t.desk,0,.74,0,{receive:!0});const o=r.w/2-.09,l=r.d/2-.09;for(const f of[-1,1])for(const m of[-1,1])Ct(a,Nt(.07,.71,.07),t.trim,f*o,.355,m*l);Ct(a,Nt(.38,.02,.14),t.dark,0,.78,r.d/2-.2,{cast:!0});const c=-r.d/2+.08;if(i.screens==="overview")xi(a,t,e,{x:0,y:1.22,z:c,w:.98,h:.56,owner:s,kind:"overview",play:!0});else if(i.screens==="triple")xi(a,t,e,{x:-.72,y:1.12,z:c+.04,w:.52,h:.36,ry:.42,owner:s,kind:"tasks",seed:1}),xi(a,t,e,{x:0,y:1.2,z:c,w:.7,h:.44,owner:s,kind:"kanban",play:!0}),xi(a,t,e,{x:.72,y:1.12,z:c+.04,w:.52,h:.36,ry:-.42,owner:s,kind:"tasks",seed:2});else if(i.screens==="dual")xi(a,t,e,{x:-.4,y:1.16,z:c,w:.62,h:.4,ry:.18,owner:s,kind:"code",seed:0,play:!0}),xi(a,t,e,{x:.4,y:1.16,z:c,w:.62,h:.4,ry:-.18,owner:s,kind:"code",seed:5,play:!0});else{xi(a,t,e,{x:.05,y:.79,z:.05,w:.62,h:.42,owner:s,kind:"tablet",flat:!0,play:!0});const f=e[e.length-1];f.mesh.parent.rotation.x=-Math.PI/2}return a}function S_(n,t,e){const i=new ge;i.position.set(e.x,0,e.z),i.rotation.y=e.yaw,n.add(i),Ct(i,Nt(.5,.07,.48),t.desk,0,.5,0,{receive:!0}),Ct(i,Nt(.46,.36,.06),t.desk,0,.7,-.2),Ct(i,new Fn(.04,.045,.34,6),t.metal,0,.28,0);for(let s=0;s<5;s+=1){const r=s/5*Math.PI*2,a=Ct(i,Nt(.045,.035,.34),t.metal,Math.sin(r)*.16,.07,Math.cos(r)*.16);a.rotation.y=r}return i}function vi(n,t,e,i,s){const r=new ge;r.position.set(e,0,i),n.add(r),Ct(r,new Fn(.16*s,.12*s,.18*s,6),t.pot,0,.09*s,0),Ct(r,new ei(.22*s,0),t.plant,0,.38*s,0),Ct(r,new ei(.15*s,0),t.plant,.12*s,.5*s,.04*s),Ct(r,new ei(.12*s,0),t.plant,-.1*s,.46*s,-.05*s)}function hs(n,t,e,i,s,r){const a=new ge;a.position.set(e,0,i),a.rotation.y=r,n.add(a),Ct(a,Nt(s,.04,.34),t.desk,0,.4,0,{receive:!0}),Ct(a,Nt(s,.04,.34),t.desk,0,.76,0,{receive:!0}),Ct(a,Nt(.05,.78,.32),t.trim,-s/2+.04,.39,0),Ct(a,Nt(.05,.78,.32),t.trim,s/2-.04,.39,0);const o=[t.trim,t.metal,t.bezel,t.limb,t.dark];let l=-s/2+.2;for(let f=0;f<4;f+=1){const m=.16+f%3*.035;Ct(a,Nt(.055,m,.2),o[f%o.length],l,.42+m/2,0),l+=.11}vi(a,t,s/2-.28,0,.7);const c=a.children[a.children.length-1];c.position.y=.78}function la(n,t,e,i,s,r){const a=new ge;a.position.set(i,s,r),a.rotation.y=Math.PI/2,n.add(a),Ct(a,Nt(.78,.98,.04),t.desk,0,0,0,{cast:!1,receive:!0});const o=xr(.64,.82,"art",0);o.mesh.position.z=.03,o.owner="chatgpt",a.add(o.mesh),e.push(o)}function M_(n,t){const e=[],i={};Ct(n,Nt(16.6,.12,12.6),t.floor,0,-.06,0,{cast:!1,receive:!0}),Ct(n,Nt(7.3,.02,5.5),t.zoneA,-4.15,.01,-3.05,{cast:!1,receive:!0}),Ct(n,Nt(7.3,.02,5.5),t.zoneB,4.15,.01,-3.05,{cast:!1,receive:!0}),Ct(n,Nt(7.3,.02,5.5),t.zoneC,-4.15,.01,3.05,{cast:!1,receive:!0}),Ct(n,Nt(7.3,.02,5.5),t.zoneD,4.15,.01,3.05,{cast:!1,receive:!0}),Ct(n,Nt(5.6,.02,3.15),t.break,.05,.02,.12,{cast:!1,receive:!0});const s=3.05,r=.12,a=[];function o(){const M=t.wall.clone();return M.opacity=1,M.depthWrite=!0,M}function l(M,D,R,N,U,V){Ct(n,M,D,R,N,U,{cast:!1,receive:!0}),a.some(P=>P.mat===D)||a.push({mat:D,plane:V})}const c=o(),f=o(),m=o(),h=o();l(Nt(16.2,s,r),c,0,s/2,6.06,{axis:"z",at:6.06,outside:1}),l(Nt(r,s,12.2),f,-8.06,s/2,0,{axis:"x",at:-8.06,outside:-1}),l(Nt(r,s,12.2),m,8.06,s/2,0,{axis:"x",at:8.06,outside:1}),l(Nt(16.2,.62,r),h,0,.31,-6.06,{axis:"z",at:-6.06,outside:-1}),l(Nt(16.2,.5,r),h,0,2.8,-6.06,{axis:"z",at:-6.06,outside:-1}),l(Nt(1.35,1.92,r),h,-7.35,1.55,-6.06,{axis:"z",at:-6.06,outside:-1}),l(Nt(1.35,1.92,r),h,7.35,1.55,-6.06,{axis:"z",at:-6.06,outside:-1});for(const M of[-3.4,.1,3.5])Ct(n,Nt(.06,1.92,.08),t.trim,M,1.55,-6.02,{cast:!1});Ct(n,Nt(12.6,1.88,.02),t.glass,.05,1.55,-6.08,{cast:!1}),Ct(n,Nt(20,7,.08),x_(),0,2.4,-7.15,{cast:!1}),Ct(n,Nt(18,.08,2.4),t.floor,0,-.02,-7.4,{cast:!1,receive:!0}),Ct(n,Nt(15.6,.08,.04),t.trim,0,.04,5.96,{cast:!1}),Ct(n,Nt(.04,.08,11.6),t.trim,-7.96,.04,0,{cast:!1}),Ct(n,Nt(.04,.08,11.6),t.trim,7.96,.04,0,{cast:!1});for(const M of Object.keys(fe))v_(n,t,e,fe[M],M),i[M]=S_(n,t,fe[M].home);const p=new ge;p.position.set(6.55,0,-2.15),p.rotation.y=0,n.add(p),Ct(p,Nt(1.7,1.15,.06),t.desk,0,1.45,0,{receive:!0}),Ct(p,Nt(.08,1.55,.08),t.trim,-.78,.78,0),Ct(p,Nt(.08,1.55,.08),t.trim,.78,.78,0);const x=xr(1.52,.96,"weekly",0);x.mesh.position.set(0,1.45,.04),x.owner="grok",p.add(x.mesh);const E=new _e(new he(1.8,1.7,.4),new Ti({visible:!1}));E.position.y=1.2,p.add(E),p.traverse(M=>{M.userData.board=!0}),e.push(x);const d=new ge;d.position.set(Je.x,0,Je.z),n.add(d),Ct(d,Nt(Je.w,.28,Je.d),t.desk,0,.36,0,{receive:!0}),Ct(d,Nt(Je.w,.4,.1),t.desk,0,.64,-.74/2+.05),Ct(d,Nt(.1,.32,Je.d),t.trim,-1.9/2+.05,.5,0),Ct(d,Nt(.1,.32,Je.d),t.trim,Je.w/2-.05,.5,0);for(const M of[-1,1])for(const D of[-1,1])Ct(d,Nt(.06,.16,.06),t.metal,M*(Je.w/2-.12),.08,D*(Je.d/2-.1));const u=new ge;u.position.set(yn.x,0,yn.z),n.add(u),Ct(u,Nt(yn.w,.92,yn.d-.08),t.trim,0,.46,0),Ct(u,Nt(yn.w,.07,yn.d),t.desk,0,.95,0,{receive:!0}),Ct(u,Nt(.36,.38,.28),t.metal,-.42,1.18,0),Ct(u,Nt(.12,.08,.06),t.dark,-.42,1.02,.16),Ct(u,new Fn(.055,.045,.09,6),t.desk,.18,1.03,.08),Ct(u,new Fn(.05,.04,.08,6),t.body,.38,1.03,.02),Ct(n,new Fn(.22,.22,.4,8),t.desk,-.95,.2,.35,{receive:!0}),Ct(n,new Fn(.05,.04,.08,6),t.body,-.95,.44,.35);const S=Ct(n,new ei(.46,1),t.desk,-6.45,.28,4.7,{receive:!0});S.scale.y=.72;const w=new ge;w.position.set(6.45,0,4.45),w.rotation.y=-.5,n.add(w),Ct(w,Nt(.06,1.45,.06),t.trim,-.28,.72,0),Ct(w,Nt(.06,1.45,.06),t.trim,.28,.72,0),Ct(w,Nt(.7,.06,.06),t.trim,0,1.35,0);const y=xr(.7,.9,"art",1);y.mesh.position.set(0,.95,.04),y.owner="chatgpt",w.add(y.mesh),e.push(y),Ct(w,Nt(.62,.04,.08),t.metal,0,.42,.04),la(n,t,e,7.9,1.55,2.35),la(n,t,e,7.9,1.55,3.4),la(n,t,e,7.9,1.55,4.45),hs(n,t,-1.55,-5.25,2.1,0),hs(n,t,2.35,-5.25,1.8,0),hs(n,t,.15,5.25,2.4,0),hs(n,t,-6.85,.1,1.5,Math.PI/2),hs(n,t,6.85,-.15,1.35,Math.PI/2),vi(n,t,-7.15,-5.15,1.15),vi(n,t,7.15,-5.15,1),vi(n,t,-7.2,5.15,1.05),vi(n,t,7.25,4.9,.9),vi(n,t,-4.5,-5.35,.85),vi(n,t,4.9,5.2,.8),Ct(n,new Fn(.045,.04,.16,6),t.desk,fe.sonny.desk.x+.85,.86,fe.sonny.desk.z+.2);const A=Ct(n,Nt(.18,.02,.02),T_(12887412),fe.sonny.desk.x+.55,.79,fe.sonny.desk.z+.15);A.rotation.y=.6;const b=b_(n,t);function _(M,D){for(const R of a){let N=1;if(M&&D){const P=R.plane.axis==="x"?M.position.x:M.position.z,H=R.plane.axis==="x"?D.x:D.z,X=(P-R.plane.at)*R.plane.outside,G=(H-R.plane.at)*R.plane.outside;X>.02&&G<-.02&&(N=.07)}const U=M?R.mat.opacity+(N-R.mat.opacity)*.35:1;R.mat.opacity=U;const V=U<.98;R.mat.transparent!==V&&(R.mat.transparent=V,R.mat.needsUpdate=!0),R.mat.depthWrite=!V}}return{chairs:i,screens:e,cabinet:b,board:p,boardScreen:x,fadeWalls:_}}function y_(n){n.traverse(t=>{t.userData.cabinet=!0})}function E_(){const n=document.createElement("canvas");n.width=384,n.height=96;const t=n.getContext("2d");t.fillStyle="rgba(255,255,255,0.95)",t.beginPath(),t.roundRect(8,16,368,64,32),t.fill(),t.fillStyle="#3a3a3a",t.font='600 36px "WenQuanYi Micro Hei", "PingFang TC", "Noto Sans TC", sans-serif',t.textAlign="center",t.textBaseline="middle",t.fillText("專案檔案櫃",192,48);const e=new yr(n);e.colorSpace=Oe;const i=new Ic(new mo({map:e,transparent:!0,depthWrite:!1}));return i.scale.set(1.2,.3,1),i.position.set(0,1.48,0),i.center.set(.5,0),i}function b_(n,t){const e=new ge;e.position.set(-5.45,0,.55),e.rotation.y=Math.PI/2,n.add(e),Ct(e,Nt(.78,1.12,.42),t.desk,0,.62,0,{receive:!0}),Ct(e,Nt(.82,.06,.46),t.wall,0,1.2,0,{receive:!0});const i=[.96,.66,.36];for(const r of i)Ct(e,Nt(.68,.24,.03),t.trim,0,r,.22),Ct(e,Nt(.12,.035,.03),t.dark,0,r,.245,{cast:!0});for(const r of[-1,1])for(const a of[-1,1])Ct(e,Nt(.06,.08,.06),t.metal,r*.32,.04,a*.16);const s=new _e(new he(.9,1.4,.7),new Ti({visible:!1}));return s.position.y=.7,e.add(s),e.add(E_()),y_(e),e}function T_(n){return new Mo({color:n,flatShading:!0})}async function w_(){const n=new URL("./office/status.json",window.location.href),t=await fetch(n,{cache:"no-store"});if(!t.ok)throw new Error(`status ${t.status}`);return t.json()}const tr=.34,$l=.88,A_=3.2,R_=4.6,Jl=60*Math.PI/180;function nn(n,t,e,i,s=.05){return{minX:n-e/2-s,maxX:n+e/2+s,minZ:t-i/2-s,maxZ:t+i/2+s}}const C_=[nn(fe.sonny.desk.x,fe.sonny.desk.z,fe.sonny.desk.w,fe.sonny.desk.d,.15),nn(fe.grok.desk.x,fe.grok.desk.z,fe.grok.desk.w,fe.grok.desk.d,.15),nn(fe.claude.desk.x,fe.claude.desk.z,fe.claude.desk.w,fe.claude.desk.d,.15),nn(fe.chatgpt.desk.x,fe.chatgpt.desk.z,fe.chatgpt.desk.w,fe.chatgpt.desk.d,.15),nn(Je.x,Je.z,Je.w,Je.d,.1),nn(yn.x,yn.z,yn.w,yn.d,.12),nn(-5.45,.55,.7,1.05,.08),nn(6.55,-2.15,1.85,.4,.05),nn(-1.55,-5.25,2.1,.4,.05),nn(2.35,-5.25,1.8,.4,.05),nn(.15,5.25,2.4,.4,.05),nn(-6.85,.1,.4,1.5,.05),nn(6.85,-.15,.4,1.35,.05)];function eo(n,t){if(n<-7.25||n>7.25||t<-5.35||t>5.25)return!0;for(const e of C_)if(n>e.minX-tr&&n<e.maxX+tr&&t>e.minZ-tr&&t<e.maxZ+tr)return!0;return!1}function P_(n,t,e,i){let s=n+e,r=t;return eo(s,t)&&(s=n),eo(s,t+i)?r=t:r=t+i,{x:s,z:r}}function L_({camera:n,sonny:t,onInteract:e}){const i=document.createElement("div");i.id="play-ui",i.hidden=!0,i.innerHTML=`
    <div id="joy" aria-hidden="true"><div class="joy-knob"></div></div>
    <p id="prompt" hidden></p>
    <button type="button" id="interact">互動</button>
  `,document.querySelector("#app").append(i);const s=i.querySelector("#joy"),r=i.querySelector(".joy-knob"),a=i.querySelector("#prompt"),o=i.querySelector("#interact");let l=!1,c=0,f=0,m=0,h=0,p=Math.PI,x=0,E=0,d=!1,u=null,S=null;function w(O,$){const at=s.getBoundingClientRect(),Et=at.left+at.width/2,q=at.top+at.height/2,ot=at.width*.36;let xt=O-Et,Tt=$-q;const ct=Math.hypot(xt,Tt)||1,zt=Math.min(ot,ct);xt=xt/ct*zt,Tt=Tt/ct*zt,r.style.transform=`translate(${xt}px, ${Tt}px)`,c=xt/ot,f=-Tt/ot}function y(){u=null,c=0,f=0,r.style.transform="translate(0, 0)"}s.addEventListener("pointerdown",O=>{u=O.pointerId,s.setPointerCapture(O.pointerId),w(O.clientX,O.clientY),O.preventDefault()}),s.addEventListener("pointermove",O=>{O.pointerId===u&&w(O.clientX,O.clientY)});const A=O=>{if(O.pointerId===u){try{s.releasePointerCapture(O.pointerId)}catch{}y()}};s.addEventListener("pointerup",A),s.addEventListener("pointercancel",A);const b=new Set;function _(O){const $=O.target?.tagName;return $==="TEXTAREA"||$==="INPUT"||O.target?.isContentEditable}window.addEventListener("keydown",O=>{!l||_(O)||(["KeyW","KeyA","KeyS","KeyD","ArrowUp","ArrowDown","ArrowLeft","ArrowRight","KeyE"].includes(O.code)&&O.preventDefault(),O.code==="KeyE"&&!O.repeat&&N(),b.add(O.code))}),window.addEventListener("keyup",O=>{b.delete(O.code)}),window.addEventListener("blur",()=>{b.clear(),y()});function M(){let O=c,$=f;(b.has("KeyA")||b.has("ArrowLeft"))&&(O-=1),(b.has("KeyD")||b.has("ArrowRight"))&&(O+=1),(b.has("KeyW")||b.has("ArrowUp"))&&($+=1),(b.has("KeyS")||b.has("ArrowDown"))&&($-=1);const at=Math.hypot(O,$);return at>1&&(O/=at,$/=at),{x:O,y:$}}function D(){const O=[{kind:"person",id:"grok",x:R("grok").x,z:R("grok").z,label:"和 Grok 說話"},{kind:"person",id:"claude",x:R("claude").x,z:R("claude").z,label:"和 Claude 說話"},{kind:"person",id:"chatgpt",x:R("chatgpt").x,z:R("chatgpt").z,label:"和 ChatGPT 說話"},{kind:"cabinet",id:"cabinet",x:-5.45,z:.55,label:"看專案檔案櫃"},{kind:"board",id:"board",x:6.55,z:-2.15,label:"看公布欄"},{kind:"desk",id:"sonny",x:fe.sonny.desk.x,z:fe.sonny.desk.z,label:"在自己的桌子寫想法"}];let $=null,at=1.9;for(const Et of O){const q=Math.hypot(Et.x-t.pos.x,Et.z-t.pos.z);q<at&&($=Et,at=q)}return $}function R(O){return e.position(O)}function N(){S&&e.use(S)}o.addEventListener("click",N);function U(){const O=n.aspect||1;return O<.8?{dist:12.4,fov:58}:O<1.25?{dist:9.2,fov:42}:{dist:8.8,fov:36}}function V(O){const{dist:$,fov:at}=U(),Et=$*Math.cos(Jl),q=$*Math.sin(Jl),ot=t.pos.x,xt=t.pos.z-.45;if(!d||!O)x=ot,E=xt,d=!0;else{const Tt=1-Math.exp(-5.5*O);x+=(ot-x)*Tt,E+=(xt-E)*Tt}n.position.set(x,.9+q,E+Et),Math.abs(n.fov-at)>.05&&(n.fov=at,n.updateProjectionMatrix()),n.lookAt(x,.9,E)}function P(){V(0)}function H(){l=!0,i.hidden=!1,document.body.classList.add("player"),m=0,h=0,p=t.displayYaw??t.yaw??Math.PI,d=!1,eo(t.pos.x,t.pos.z)&&(t.pos.x=.4,t.pos.z=1.2),t.suspended=!0,t.pose="stand",t.activity="stand",t.yaw=p,t.displayYaw=p,P()}function X(){l=!1,i.hidden=!0,document.body.classList.remove("player"),y(),b.clear(),m=0,h=0,S=null,a.hidden=!0,d=!1,n.fov=window.innerHeight<520?46:40,n.updateProjectionMatrix(),t.suspended=!1,typeof t.resume=="function"&&t.resume()}function G(O,$,at){const Et=$-O;return Math.abs(Et)<=at?$:O+Math.sign(Et)*at}function et(O,$,at){let Et=$-O;for(;Et>Math.PI;)Et-=Math.PI*2;for(;Et<-Math.PI;)Et+=Math.PI*2;return O+Et*(1-Math.exp(-8*at))}function Y(O){if(!l)return;const $=M(),at=$.x,Et=-$.y,ot=Math.hypot(at,Et)>.08,xt=ot?A_:R_;if(m=G(m,ot?at*$l:0,xt*O),h=G(h,ot?Et*$l:0,xt*O),Math.hypot(m,h)>.02){const ct=P_(t.pos.x,t.pos.z,m*O,h*O);Math.abs(ct.x-t.pos.x)<Math.abs(m*O)*.45&&(m=0),Math.abs(ct.z-t.pos.z)<Math.abs(h*O)*.45&&(h=0),t.pos.x=ct.x,t.pos.z=ct.z;const zt=Math.hypot(m,h);t.pose=zt>.14?"walk":"stand",t.activity=t.pose,zt>.08&&(p=et(p,Math.atan2(m,h),O))}else m=0,h=0,t.pose="stand",t.activity="stand";t.yaw=p,t.displayYaw=p,V(O),S=D(),a.hidden=!S,a.textContent=S?S.label:"",o.classList.toggle("ready",!!S)}return{get active(){return l},enter:H,exit:X,update:Y,follow:P}}const th="ai-office.hud",eh="(max-width: 720px), (max-height: 520px)";function Ql(n){const t=new Date(n);return Number.isNaN(t.getTime())?n||"":new Intl.DateTimeFormat("zh-Hant",{timeZone:"Asia/Taipei",year:"numeric",month:"numeric",day:"numeric",hour:"2-digit",minute:"2-digit",hourCycle:"h23"}).format(t)}function D_(n){return n==="視察中"?"視察":n||"…"}function jl(){try{const n=localStorage.getItem(th);if(n==="1"||n==="0")return n==="1"}catch{}return null}function I_(n){try{localStorage.setItem(th,n?"1":"0")}catch{}}function tc(){return window.matchMedia(eh).matches}function N_(n,{onSelect:t,onClear:e}){n.innerHTML=`
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
  `;const i=document.createElement("section");i.id="files",i.hidden=!0,i.setAttribute("aria-label","專案檔案櫃");const s=document.createElement("section");s.id="talk",s.hidden=!0;const r=document.createElement("section");r.id="weekly",r.hidden=!0,r.setAttribute("aria-label","本週進度"),document.querySelector("#app").append(i,s,r);const a=n.querySelector("#bar-toggle"),o=n.querySelector(".chev"),l=n.querySelector("#mini"),c=n.querySelector("#roster"),f=n.querySelector("#detail"),m=n.querySelector("#banner"),h=new Map,p=window.matchMedia(eh);for(const Z of gr){const ht=ms[Z],st=document.createElement("button");st.type="button",st.className="row",st.dataset.id=Z;const wt=`#${Qc[Z].toString(16).padStart(6,"0")}`;st.innerHTML=`
      <i class="dot" style="background:${wt}"></i>
      <span class="who"><b></b><small></small></span>
      <span class="state"></span>
    `,st.querySelector("b").textContent=ht.name,st.querySelector("small").textContent=ht.role,st.addEventListener("click",()=>t(Z)),c.append(st),h.set(Z,st);const vt=document.createElement("span");vt.className="chip",vt.innerHTML=`<i class="dot" style="background:${wt}"></i><b></b>`,l.append(vt),h.set(`${Z}:chip`,vt)}let x=jl()??tc();function E(){return p.matches?x?"▲":"▼":x?"▼":"▲"}function d(){n.classList.toggle("collapsed",x),a.setAttribute("aria-expanded",x?"false":"true"),a.setAttribute("aria-label",x?"展開名單":"收合名單"),o.textContent=E()}function u(Z,ht){x=Z,d(),ht&&I_(x)}a.addEventListener("click",()=>u(!x,!0)),n.querySelectorAll(".file-btn").forEach(Z=>{Z.addEventListener("click",ht=>{ht.stopPropagation(),Ft()})}),p.addEventListener("change",()=>{jl()===null?u(tc(),!1):d()}),d(),f.addEventListener("click",Z=>{Z.target.closest(".close")&&e()});function S(Z){X=Z,m.hidden=!Z.error,m.textContent=Z.error||"",n.classList.toggle("has-detail",!1);for(const ht of gr){const st=Z.people.find(L=>L.id===ht),wt=h.get(ht),vt=h.get(`${ht}:chip`),Ot=st?.state||"…";wt.classList.toggle("on",Z.selected===ht),wt.querySelector(".state").textContent=Ot,vt.querySelector("b").textContent=D_(Ot)}f.hidden=!0,P&&zt()}const w=["全部","暫停","閒置","上線"];let y="全部",A=null,b="",_=!1;function M(Z){return y==="暫停"?Z.status==="暫停":y==="閒置"?Z.status==="閒置":y==="上線"?!!Z.playUrl:!0}function D(){i.replaceChildren();const Z=document.createElement("div");Z.className="files-head";const ht=document.createElement("h2");ht.textContent="專案檔案櫃";const st=document.createElement("button");st.type="button",st.className="close",st.setAttribute("aria-label","關閉"),st.textContent="×",st.addEventListener("click",()=>{_=!1,i.hidden=!0}),Z.append(ht,st);const wt=document.createElement("div");wt.className="file-tabs";for(const Ot of w){const L=document.createElement("button");L.type="button",L.className="file-tab",L.textContent=Ot,L.classList.toggle("on",Ot===y),L.addEventListener("click",()=>{y=Ot,D()}),wt.append(L)}const vt=document.createElement("div");if(vt.className="files-body",b){const Ot=document.createElement("p");Ot.className="empty",Ot.textContent=b,vt.append(Ot)}else if(A){const Ot=A.filter(M);if(!Ot.length){const L=document.createElement("p");L.className="empty",L.textContent="這個分類沒有專案。",vt.append(L)}for(const L of Ot)vt.append(R(L))}else{const Ot=document.createElement("p");Ot.className="empty",Ot.textContent="讀取中…",vt.append(Ot)}i.append(Z,wt,vt)}function R(Z){const ht=document.createElement("article");ht.className="file-card";const st=document.createElement("div");st.className="file-top";const wt=document.createElement("h3");wt.textContent=Z.name||Z.id||"未命名";const vt=document.createElement("span");vt.className=`badge badge-${Z.status||"unknown"}`,vt.textContent=Z.status||"待確認",st.append(wt,vt),ht.append(st);const Ot=[["",Z.summary||""],["停在哪",Z.stoppedAt||"待確認"],["下一步",Z.next||"待確認"],["更新",Z.updatedAt||""]];for(const[L,ue]of Ot){if(!ue)continue;const Vt=document.createElement("p");if(L){const Kt=document.createElement("span");Kt.className="k",Kt.textContent=L,Vt.append(Kt,document.createTextNode(` ${ue}`))}else Vt.textContent=ue;ht.append(Vt)}if(Z.playUrl&&String(Z.playUrl).startsWith("https://")){const L=document.createElement("a");L.href=Z.playUrl,L.target="_blank",L.rel="noopener noreferrer",L.textContent="打開試玩",ht.append(L)}return ht}const N="ai-office.ideas",U="https://github.com/a413207-ui/Ai-agent-/issues/new",V={sonny:{name:"Sonny",label:"for-grok"},grok:{name:"Grok Bot",label:"for-grok"},claude:{name:"Claude",label:"for-claude"},chatgpt:{name:"ChatGPT",label:"for-chatgpt"}};let P=!1,H=null,X={people:[]};function G(){try{const Z=JSON.parse(localStorage.getItem(N)||"{}");return{draft:typeof Z.draft=="string"?Z.draft:"",items:Array.isArray(Z.items)?Z.items.filter(ht=>ht&&typeof ht.text=="string"):[]}}catch{return{draft:"",items:[]}}}function et(Z){try{localStorage.setItem(N,JSON.stringify({draft:Z.draft||"",items:Z.items||[]}))}catch{}}function Y(){return new Intl.DateTimeFormat("zh-Hant",{timeZone:"Asia/Taipei",year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",hourCycle:"h23"}).format(new Date)}function O({title:Z,body:ht,labels:st}){const wt=String(ht||"").slice(0,6e3),vt=`${U}?title=${encodeURIComponent(Z)}&body=${encodeURIComponent(wt)}&labels=${encodeURIComponent(st.join(","))}`;vt.startsWith(U)&&window.open(vt,"_blank","noopener,noreferrer")}function $(Z,ht){const st=String(ht||"").split(`
`).map(vt=>vt.trim()).find(Boolean)||"未命名",wt=st.length>72?`${st.slice(0,72)}…`:st;return`${Z}${wt}`}function at(){P=!1,H=null,s.hidden=!0}function Et(){_=!1,i.hidden=!0}function q(Z,ht){const st=document.createElement("div");st.className="files-head";const wt=document.createElement("h2");wt.textContent=Z;const vt=document.createElement("button");return vt.type="button",vt.className="close",vt.setAttribute("aria-label","關閉"),vt.textContent="×",vt.addEventListener("click",ht),st.append(wt,vt),st}function ot(){const Z=document.createElement("p");return Z.className="send-hint",Z.textContent="會打開 GitHub，按 Submit 就送出",Z}function xt(){s.replaceChildren(),s.setAttribute("aria-label","Sonny 的想法");const Z=G(),ht=document.createElement("div");ht.className="files-body";const st=document.createElement("textarea");st.className="idea-box",st.rows=4,st.placeholder="寫一個想法…",st.value=Z.draft,st.addEventListener("input",()=>{const vt=G();vt.draft=st.value,et(vt)});const wt=document.createElement("button");if(wt.type="button",wt.className="send-btn",wt.textContent="存成一則",wt.addEventListener("click",()=>{const vt=st.value.trim();if(!vt)return;const Ot=G();Ot.items.unshift({id:`${Date.now()}`,text:vt,createdAt:new Date().toISOString()}),Ot.draft="",et(Ot),xt()}),ht.append(st,wt),!Z.items.length){const vt=document.createElement("p");vt.className="empty",vt.textContent="還沒有存下來的想法。",ht.append(vt)}for(const vt of Z.items){const Ot=document.createElement("article");Ot.className="file-card";const L=document.createElement("p");L.textContent=vt.text;const ue=document.createElement("p");ue.className="time",ue.textContent=vt.createdAt?Ql(vt.createdAt):"";const Vt=document.createElement("button");Vt.type="button",Vt.className="send-btn",Vt.textContent="送出給 Grok",Vt.addEventListener("click",()=>{O({title:$("[想法] ",vt.text),body:`給：Grok Bot
時間：${Y()}

${vt.text}`,labels:["idea","for-grok"]})}),Ot.append(L,ue,Vt,ot()),ht.append(Ot)}s.append(q("Sonny 的想法",at),ht)}function Tt(Z,ht){if(Number.isFinite(Z.progress)){const st=document.createElement("p"),wt=document.createElement("span");wt.className="k",wt.textContent="進度",st.append(wt,document.createTextNode(` ${Math.round(Z.progress)}%`));const vt=document.createElement("span");vt.className="meter";const Ot=document.createElement("i");Ot.style.width=`${Math.max(0,Math.min(100,Z.progress))}%`,vt.append(Ot),st.append(vt),ht.append(st)}if(Array.isArray(Z.done)&&Z.done.length){const st=document.createElement("p"),wt=document.createElement("span");wt.className="k",wt.textContent="最近做完",st.append(wt),ht.append(st);const vt=document.createElement("ul");vt.className="done-list";for(const Ot of Z.done){const L=document.createElement("li");L.textContent=String(Ot),vt.append(L)}ht.append(vt)}if(Z.next){const st=document.createElement("p"),wt=document.createElement("span");wt.className="k",wt.textContent="下一步",st.append(wt,document.createTextNode(` ${Z.next}`)),ht.append(st)}}function ct(Z){s.replaceChildren();const ht=V[Z.id]||{name:Z.name,label:"task"};s.setAttribute("aria-label",ht.name);const st=document.createElement("div");st.className="files-body";const wt=document.createElement("p");wt.className="role",wt.textContent=Z.role||"";const vt=document.createElement("p"),Ot=document.createElement("span");Ot.className="k",Ot.textContent="狀態",vt.append(Ot,document.createTextNode(` ${Z.state||"…"}`));const L=document.createElement("p"),ue=document.createElement("span");if(ue.className="k",ue.textContent="正在做",L.append(ue,document.createTextNode(` ${Z.task||"待確認"}`)),st.append(wt,vt,L),Z.away){const nt=document.createElement("p");nt.className="away",nt.textContent="人暫時離席，等一下會回來工作。",st.append(nt)}if(Tt(Z,st),Z.updatedAt){const nt=document.createElement("p");nt.className="time",nt.textContent=`更新 ${Ql(Z.updatedAt)}`,st.append(nt)}if(Z.id==="grok"){const nt=document.createElement("p");if(A){const Pt={進行中:0,暫停:0,閒置:0,已上線:0};for(const Bt of A)Pt[Bt.status]!==void 0&&(Pt[Bt.status]+=1);nt.textContent=`整體：進行中 ${Pt.進行中}、暫停 ${Pt.暫停}、閒置 ${Pt.閒置}、已上線 ${Pt.已上線}。`}else nt.textContent="整體專案進度在檔案櫃。";const ae=document.createElement("button");ae.type="button",ae.className="send-btn",ae.textContent="打開專案檔案櫃",ae.addEventListener("click",()=>Ft()),st.append(nt,ae)}const Vt=document.createElement("textarea");Vt.className="idea-box",Vt.rows=4,Vt.placeholder="要派的工作…";const Kt=document.createElement("button");Kt.type="button",Kt.className="send-btn",Kt.textContent=`派給${ht.name}`,Kt.addEventListener("click",()=>{const nt=Vt.value.trim();nt&&O({title:$(`[派工給 ${ht.name}] `,nt),body:`給：${ht.name}
時間：${Y()}

${nt}`,labels:["task",ht.label]})}),st.append(Vt,Kt,ot()),s.append(q(ht.name,at),st)}function zt(){if(!P||!H)return;if(H==="sonny"){xt();return}const Z=(X.people||[]).find(vt=>vt.id===H);if(!Z)return;const ht=s.querySelector(".idea-box"),st=ht?ht.value:"";ct(Z);const wt=s.querySelector(".idea-box");wt&&st&&(wt.value=st)}function Se(Z){if(Et(),P=!0,H=Z,s.hidden=!1,X=X||{people:[]},Z==="sonny")xt();else{const ht=(X.people||[]).find(st=>st.id===Z)||{id:Z,name:ms[Z]?.name||Z,role:ms[Z]?.role||"",state:"…",task:""};ct(ht)}}async function Ft(){if(at(),_=!0,i.hidden=!1,b="",D(),!A){try{const Z=new URL("./office/projects.json",window.location.href),ht=await fetch(Z,{cache:"no-store"});if(!ht.ok)throw new Error(String(ht.status));const st=await ht.json();A=Array.isArray(st?.projects)?st.projects:[]}catch{b="讀不到 office/projects.json",A=[]}_&&D()}}let Zt=null,ie="",Wt=!1;function Me(){r.replaceChildren();const Z=document.createElement("div");if(Z.className="files-body",ie){const ht=document.createElement("p");ht.className="empty",ht.textContent=ie,Z.append(ht)}else if(Zt){const ht=document.createElement("p");ht.className="role",ht.textContent=Zt.week||"",Z.append(ht);for(const st of Zt.items||[]){const wt=document.createElement("article");wt.className="file-card";const vt=document.createElement("div");vt.className="file-top";const Ot=document.createElement("h3");Ot.textContent=`${st.project||""} · ${st.owner||""}`;const L=document.createElement("span");L.className=`badge badge-${st.status||"unknown"}`,L.textContent=st.status||"待確認",vt.append(Ot,L),wt.append(vt);const ue=Array.isArray(st.done)?st.done:[];if(ue.length){const g=document.createElement("ul");g.className="done-list";for(const B of ue){const it=document.createElement("li");it.textContent=String(B),g.append(it)}wt.append(g)}const Vt=document.createElement("p"),Kt=document.createElement("span");Kt.className="k",Kt.textContent="下一步",Vt.append(Kt,document.createTextNode(` ${st.next||"待確認"}`));const nt=document.createElement("p"),ae=document.createElement("span");ae.className="k",ae.textContent="進度";const Pt=Math.max(0,Math.min(100,Number(st.percent)||0));nt.append(ae,document.createTextNode(` ${Pt}%`));const Bt=document.createElement("span");Bt.className="meter";const T=document.createElement("i");T.style.width=`${Pt}%`,Bt.append(T),nt.append(Bt),wt.append(Vt,nt),Z.append(wt)}}else{const ht=document.createElement("p");ht.className="empty",ht.textContent="讀取中…",Z.append(ht)}r.append(q(Zt?.title||"本週進度",()=>{Wt=!1,r.hidden=!0}),Z)}function ye(Z){Zt=Z,ie="",Wt&&Me()}async function Be(){if(at(),Et(),Wt=!0,r.hidden=!1,Me(),!Zt){try{const Z=new URL("./office/weekly.json",window.location.href),ht=await fetch(Z,{cache:"no-store"});if(!ht.ok)throw new Error(String(ht.status));Zt=await ht.json()}catch{ie="讀不到 office/weekly.json"}Wt&&Me()}}return{render:S,openCabinet:Ft,openPerson:Se,openWeekly:Be,setWeekly:ye}}const Ei=document.querySelector("#view"),ci=new D0({canvas:Ei,antialias:!0});ci.setPixelRatio(Math.min(window.devicePixelRatio||1,1.75));ci.setSize(window.innerWidth,window.innerHeight);ci.shadowMap.enabled=!0;ci.shadowMap.type=fs;ci.outputColorSpace=Oe;ci.setClearColor(14606046);Ei.style.touchAction="none";const Gn=new hu;Gn.background=new jt(14606046);const an=new gn(42,1,.1,80);an.position.set(7.4,5.5,8.6);const ce=new N0(an,Ei);ce.target.set(.2,.85,-.15);ce.enableDamping=!0;ce.dampingFactor=.08;ce.maxPolarAngle=Math.PI/2-.05;ce.minDistance=3.4;ce.maxDistance=18;ce.update();ce.saveState();let qe=null;function hi(){const n=ce.domElement,t=Array.isArray(ce._pointers)?ce._pointers.slice():[];for(const e of t)try{n.releasePointerCapture(e)}catch{}ce.disconnect(),ce.connect(n),ce.enabled=!qe?.active}document.addEventListener("pointercancel",()=>hi(),!0);document.addEventListener("pointerup",()=>{ce.state!==-1&&(ce._pointers?.length||0)===0&&hi()},!0);Ei.addEventListener("lostpointercapture",()=>{ce.state!==-1&&(ce._pointers?.length||0)===0&&hi()});window.addEventListener("blur",()=>hi());document.addEventListener("visibilitychange",()=>{document.hidden&&hi()});Gn.add(new Du(16777215,1.45));Gn.add(new Ru(16777215,13619151,.45));const Ze=new Lu(16775926,2.55);Ze.position.set(-7.2,8.2,6.4);Ze.castShadow=!0;Ze.shadow.mapSize.set(window.innerWidth<800?1024:2048,window.innerWidth<800?1024:2048);Ze.shadow.camera.near=.5;Ze.shadow.camera.far=36;const Tr=12;Ze.shadow.camera.left=-Tr;Ze.shadow.camera.right=Tr;Ze.shadow.camera.top=Tr;Ze.shadow.camera.bottom=-Tr;Ze.shadow.bias=-2e-4;Ze.shadow.normalBias=.035;Ze.shadow.radius=3;Ze.target.position.set(0,.2,-.4);Gn.add(Ze);Gn.add(Ze.target);const nh=K0(),ai=M_(Gn,nh),Ee={},wr=[];for(const n of gr){const t=Z0({id:n,mats:nh,accentHex:Qc[n],accessory:fe[n].accessory,name:ms[n].label});Gn.add(t.anchor),wr.push(t.anchor),Ee[n]=new t_({id:n,anchor:t.anchor,rig:t.rig,chair:ai.chairs[n],layout:fe[n]})}const On=new _e(new vo(.42,.52,6),new Ti({color:16777215,side:En,transparent:!0,opacity:.85}));On.rotation.x=-Math.PI/2;On.position.y=.03;On.visible=!1;Gn.add(On);wr.push(ai.cabinet);wr.push(ai.board);const wo=document.createElement("div");wo.id="mode-cluster";wo.innerHTML=`
  <button type="button" id="mode-btn">進入辦公室</button>
  <button type="button" id="reset-view">重置視角</button>
`;document.querySelector("#app").append(wo);const ni=N_(document.querySelector("#hud"),{onSelect:n=>Ao(n),onClear:()=>U_()});let Qe=null,oi=null,no="",vr="";function U_(){Qe&&(Qe.selected=!1),Qe=null,oi=null,vr=""}function Ao(n){Ee[n]&&(Qe&&Qe!==Ee[n]&&(Qe.selected=!1),Qe=Ee[n],Qe.selected=!0,qe?.active||(oi=new F(Qe.pos.x,.9,Qe.pos.z)),vr="",ni.openPerson(n))}const ec=new Fu,ca=new Dt;let Vi=null;Ei.addEventListener("pointerdown",n=>{oi=null,Vi={x:n.clientX,y:n.clientY,id:n.pointerId}});Ei.addEventListener("pointerup",n=>{if(!Vi||Vi.id!==n.pointerId)return;const t=Math.hypot(n.clientX-Vi.x,n.clientY-Vi.y);if(Vi=null,t>8)return;const e=Ei.getBoundingClientRect();ca.x=(n.clientX-e.left)/e.width*2-1,ca.y=-((n.clientY-e.top)/e.height)*2+1,ec.setFromCamera(ca,an);const s=ec.intersectObjects(wr,!0)[0]?.object;if(s){if(s.userData.board){ni.openWeekly();return}if(s.userData.cabinet){ni.openCabinet();return}s.userData.id&&Ao(s.userData.id)}});ce.addEventListener("start",()=>{oi=null});function ih(){const n=window.innerWidth,t=window.innerHeight;an.aspect=n/Math.max(t,1),an.fov=t<520?46:40,an.updateProjectionMatrix(),ci.setSize(n,t)}window.addEventListener("resize",ih);ih();function F_(){return{error:no,selected:Qe?.id||null,people:gr.map(n=>{const t=Ee[n],e=ms[n];return{id:n,name:e.name,role:e.role,state:t.official||"…",task:t.task,updatedAt:t.updatedAt,away:t.simSlack,progress:t.progress,done:t.done||[],next:t.next||""}})}}function sh(){const n=F_(),t=JSON.stringify(n);t!==vr&&(vr=t,ni.render(n))}async function rh(){try{const n=await w_();no="";const t=Array.isArray(n?.people)?n.people:[];for(const e of t){const i=Ee[e.id];i&&(i.ready?i.applyStatus(e):i.placeInitial(e))}}catch{no="讀不到 office/status.json。請用這個專案的開發伺服器或建置後的預覽打開。";for(const n of Object.values(Ee))n.ready||n.placeInitial({state:"",task:"",updatedAt:""})}sh()}await rh();try{const n=new URL("./office/weekly.json",window.location.href),t=await fetch(n,{cache:"no-store"});if(t.ok){const e=await t.json();ai.boardScreen.weekly=e,ai.boardScreen.dirty=!0,ni.setWeekly(e)}}catch{}setInterval(rh,1e4);document.fonts?.ready&&document.fonts.ready.then(()=>{for(const n of ai.screens)n.last=-10});const lr=new Nu;lr.connect(document);const nc=new me,ic=new $i;Ee.sonny.resume=()=>{Ee.sonny.suspended=!1,Ee.sonny.begin(Ee.sonny.planOfficial())};qe=L_({camera:an,sonny:Ee.sonny,onInteract:{position(n){return{x:Ee[n].pos.x,z:Ee[n].pos.z}},use(n){n.kind==="cabinet"?ni.openCabinet():n.kind==="board"?ni.openWeekly():ni.openPerson(n.id)}}});function O_(n){oi=null,hi(),n?qe.enter():qe.exit(),ce.enabled=!qe.active,document.querySelector("#mode-btn").textContent=qe.active?"自由視角":"進入辦公室"}document.querySelector("#mode-btn").addEventListener("click",()=>O_(!qe.active));document.querySelector("#reset-view").addEventListener("click",()=>{if(oi=null,hi(),qe.active){qe.follow();return}ce.reset(),ce.update()});function ah(n){lr.update(n);const t=Math.min(lr.getDelta(),.05);qe.active&&qe.update(t),ai.fadeWalls(qe.active?an:null,qe.active?Ee.sonny.pos:null);for(const e of Object.values(Ee))e.update(t);qe.active||(ce.state!==-1&&(ce._pointers?.length||0)===0&&hi(),oi&&ce.target.lerp(oi,.08),ce.update()),Qe?(On.visible=!0,On.position.x=Qe.pos.x,On.position.z=Qe.pos.z,On.rotation.z+=t*.4):On.visible=!1,nc.multiplyMatrices(an.projectionMatrix,an.matrixWorldInverse),ic.setFromProjectionMatrix(nc),g_(ai.screens,lr.getElapsed(),{isOn(e){const i=Ee[e.owner];return i?i.activity==="work"||e.kind==="overview":!1},isPlaying(e){const i=Ee[e.owner];return!!(e.playable&&i&&i.activity==="play")},isVisible(e){return e.mesh.updateWorldMatrix(!0,!1),ic.intersectsObject(e.mesh)}}),ci.render(Gn,an),sh(),requestAnimationFrame(ah)}requestAnimationFrame(ah);const B_=new URLSearchParams(window.location.search).has("debug");B_&&(window.__office={ready:!0,agents:Ee,camera:an,controls:ce,select:Ao,look(n,t,e,i,s,r){an.position.set(n,t,e),ce.target.set(i,s,r),ce.update()},setState(n,t,e){const i=Ee[n];i.applyStatus({state:t,task:e??i.task,updatedAt:new Date().toISOString()})},snapshot(){return Object.fromEntries(Object.values(Ee).map(n=>[n.id,{state:n.official,activity:n.activity,pose:n.pose,x:Number(n.pos.x.toFixed(3)),z:Number(n.pos.z.toFixed(3)),simSlack:n.simSlack,task:n.task}]))}});
