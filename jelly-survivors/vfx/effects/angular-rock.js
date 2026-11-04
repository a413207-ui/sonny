/*!
00GameDevs exported assets — original code only
This license applies only to original code delivered by the VFX, Shader and Object copy/download functions. Website UI code, branding, avatars and promotional images are not licensed by this notice. Third-party code retains its own copyright and license.

The MIT License

Copyright (c) 2026 00GameDevs (@00vchannel)

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

Third-party dependency: Three.js (including its addons).
Keep the notices supplied with each dependency when distributing your game.
The notice below does not replace any additional notices in imported modules.

The MIT License

Copyright © 2010-2026 three.js authors

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
*/
// 00GameDevs — Angular rock
// Complete game object; three@0.187.0. Three.js: MIT / three.js authors.
// Units: meters; Y up; origin: base center.
// const asset = createGameObject(); scene.add(asset.group);
// scene.add(new THREE.HemisphereLight(0xffffff,0x889977,2));
// Add a directional light for props. In your existing loop: asset.update(deltaSeconds);



// asset.setOptions({primary:'#e59a37'}); // Only primary, secondary, accent are accepted.
// asset.stats.triangles is read-only. When finished: asset.dispose();
// No renderer, camera or permanent animation loop is created by createGameObject.

import * as THREE from 'three';

// One shader program for every palette and object. Coordinates remain on the mesh.
function createWatercolorMaterial(options={}) {
 const material=new THREE.MeshStandardMaterial({color:options.color??'#86a789',roughness:1,metalness:0,vertexColors:options.vertexColors??false});
 const uniforms={wcWash:{value:options.wash??.65},wcPaper:{value:options.paper??.5},wcPigment:{value:options.pigment??.55}};
 material.userData.watercolor=uniforms;
 material.customProgramCacheKey=()=> '00-watercolor-v1';
 material.onBeforeCompile=shader=>{
  Object.assign(shader.uniforms,uniforms);
  shader.vertexShader='varying vec3 wcPosition;\n'+shader.vertexShader.replace('#include <begin_vertex>','#include <begin_vertex>\nwcPosition = position;');
  shader.fragmentShader=`varying vec3 wcPosition;
  uniform float wcWash,wcPaper,wcPigment;
  float wcHash(vec3 p){p=fract(p*.3183099+vec3(.1,.2,.3));p*=17.0;return fract(p.x*p.y*p.z*(p.x+p.y+p.z));}
  float wcNoise(vec3 p){vec3 i=floor(p),f=fract(p);f=f*f*(3.0-2.0*f);return mix(mix(mix(wcHash(i),wcHash(i+vec3(1,0,0)),f.x),mix(wcHash(i+vec3(0,1,0)),wcHash(i+vec3(1,1,0)),f.x),f.y),mix(mix(wcHash(i+vec3(0,0,1)),wcHash(i+vec3(1,0,1)),f.x),mix(wcHash(i+vec3(0,1,1)),wcHash(i+vec3(1,1,1)),f.x),f.y),f.z);}
  `+shader.fragmentShader.replace('#include <color_fragment>',`#include <color_fragment>
  vec3 p=wcPosition*3.5;
  float drift=wcNoise(p*.8)*2.0;
  float pool=wcNoise(p+vec3(drift,drift*.6,0.0));
  float bloom=smoothstep(.28,.76,pool);
  float ridge=1.0-smoothstep(.025,.11,abs(pool-.49));
  float grain=wcNoise(p*42.0);
  float fibre=wcNoise(p*vec3(18.0,110.0,35.0));
  vec3 paperColor=vec3(1.0,.955,.85);
  diffuseColor.rgb=mix(diffuseColor.rgb,paperColor,.24*wcWash*bloom);
  diffuseColor.rgb*=1.0-wcPigment*(ridge*.13+(1.0-pool)*.19);
  diffuseColor.rgb*=1.0+wcPaper*((grain-.5)*.32+(fibre-.5)*.12);
  `);
 };
 return material;
}

function createGeometryTools(T,group,materials){
 const hash=n=>{const x=Math.sin(n*127.1+311.7)*43758.5453;return x-Math.floor(x);};
 let serial=0;
 const mesh=(geometry,role=0,p=[0,0,0],s=[1,1,1],r=[0,0,0])=>{const m=new T.Mesh(geometry,materials[role]);m.position.set(...p);m.scale.set(...s);m.rotation.set(...r);m.castShadow=m.receiveShadow=true;m.userData.tone=.88+hash(++serial)*.2;group.add(m);return m;};
 const shape=(points,depth,p=[0,0,0],role=0,bevel=.012)=>{const path=new T.Shape();points.forEach(([x,y],i)=>i?path.lineTo(x,y):path.moveTo(x,y));path.closePath();const geo=new T.ExtrudeGeometry(path,{depth:Math.max(.001,depth-2*bevel),bevelEnabled:bevel>0,bevelThickness:bevel,bevelSize:bevel,bevelSegments:2,steps:1,curveSegments:8});geo.translate(0,0,-Math.max(.001,depth-2*bevel)/2);return mesh(geo,role,p);};
 const box=(size,p,role=0,r=[0,0,0],bevel=.012)=>{const [x,y,z]=size,b=Math.min(bevel,x*.16,y*.16,z*.16),m=shape([[-x/2+b,-y/2+b],[x/2-b,-y/2+b],[x/2-b,y/2-b],[-x/2+b,y/2-b]],z,p,role,b);m.rotation.set(...r);return m;};
 const ball=(size,p,role=0,detail=2)=>mesh(new T.IcosahedronGeometry(1,detail),role,p,size);
 const cylinder=(top,bottom,height,p,role=0,sides=16,r=[0,0,0])=>mesh(new T.CylinderGeometry(top,bottom,height,sides),role,p,[1,1,1],r);
 const torus=(radius,tube,p,role=0,r=[Math.PI/2,0,0],arc=Math.PI*2)=>mesh(new T.TorusGeometry(radius,tube,6,32,arc),role,p,[1,1,1],r);
 const rod=(a,b,radius,role=0,endRadius=radius,sides=8)=>{const av=new T.Vector3(...a),bv=new T.Vector3(...b),dir=bv.clone().sub(av);const m=cylinder(endRadius,radius,dir.length(),av.add(bv).multiplyScalar(.5).toArray(),role,sides);m.quaternion.setFromUnitVectors(new T.Vector3(0,1,0),dir.normalize());return m;};
 const curve=(points,radius,role=0,segments=20,sides=5)=>mesh(new T.TubeGeometry(new T.CatmullRomCurve3(points.map(p=>new T.Vector3(...p))),segments,radius,sides,false),role);
 const branch=(points,radii,role=1,steps=18,sides=9)=>{const spline=new T.CatmullRomCurve3(points.map(p=>new T.Vector3(...p))),pos=[],idx=[];for(let i=0;i<=steps;i++){const t=i/steps,c=spline.getPoint(t),dir=spline.getTangent(t),u=new T.Vector3().crossVectors(dir,Math.abs(dir.y)>.95?new T.Vector3(1,0,0):new T.Vector3(0,1,0)).normalize(),v=new T.Vector3().crossVectors(dir,u),k=t*(radii.length-1),a=Math.min(radii.length-2,Math.floor(k)),radius=T.MathUtils.lerp(radii[a],radii[a+1],k-a);for(let j=0;j<sides;j++){const angle=j*Math.PI*2/sides,p=c.clone().addScaledVector(u,Math.cos(angle)*radius).addScaledVector(v,Math.sin(angle)*radius);pos.push(...p.toArray());if(i<steps){const n=i*sides+j,m=i*sides+(j+1)%sides;idx.push(n,m,n+sides,m,m+sides,n+sides);}}}for(const end of [0,steps]){const c=spline.getPoint(end/steps);pos.push(...c.toArray());const ci=pos.length/3-1;for(let j=0;j<sides;j++)idx.push(ci,end*sides+(end===0?(j+1)%sides:j),end*sides+(end===0?j:(j+1)%sides));}const geo=new T.BufferGeometry();geo.setAttribute('position',new T.Float32BufferAttribute(pos,3));geo.setIndex(idx);geo.computeVertexNormals();return mesh(geo,role);};
 const lathe=(points,p,role=0,sides=24)=>mesh(new T.LatheGeometry(points.map(([x,y])=>new T.Vector2(x,y)),sides),role,p);
 const leaf=(length,width,p,role=0,r=[0,0,0],bend=.18)=>{const pos=[],idx=[],steps=8;for(let face=0;face<2;face++)for(let i=0;i<=steps;i++){const t=i/steps,w=width*Math.pow(Math.sin(Math.PI*t),.8);for(let j=0;j<3;j++)pos.push((j-1)*w,t*length,bend*t*t+(j===1?width*.26*Math.sin(Math.PI*t):0)+(face?-.003:0));}const side=(steps+1)*3;for(let i=0;i<steps;i++)for(let j=0;j<2;j++){const a=i*3+j,b=a+3;idx.push(a,a+1,b,a+1,b+1,b,a+side,b+side,a+1+side,a+1+side,b+side,b+1+side);}const geo=new T.BufferGeometry();geo.setAttribute('position',new T.Float32BufferAttribute(pos,3));geo.setIndex(idx);geo.computeVertexNormals();return mesh(geo,role,p,[1,1,1],r);};
 const rock=(size,p,role=0,seed=1,detail=1)=>{const geo=new T.IcosahedronGeometry(1,detail),a=geo.attributes.position;for(let i=0;i<a.count;i++){const x=a.getX(i),y=a.getY(i),z=a.getZ(i),n=Math.sin(x*8.7+seed)*Math.cos(z*6.8-y*4.3)*.13+Math.sin(y*13.2+x*3.1+seed)*.06;a.setXYZ(i,x*(1+n),y*(1+n*.7),z*(1+n));}geo.computeVertexNormals();return mesh(geo,role,p,size);};
 const stud=(p,radius=.018,role=2,rotation=[Math.PI/2,0,0])=>{const m=cylinder(radius*.88,radius,.014,p,role,8,rotation);return m;};
 const groove=(a,b,role=1,radius=.003)=>curve([a,a.map((v,i)=>(v+b[i])*.5+(i===0?.006:0)),b],radius,role,10,4);
 const woodLines=(width,height,p,role=1,lines=4)=>{for(let i=0;i<lines;i++){const x=(i/(lines-1)-.5)*width*.75;curve([[p[0]+x,p[1]-height*.43,p[2]],[p[0]+x+.009,p[1]-height*.1,p[2]],[p[0]+x-.006,p[1]+height*.21,p[2]],[p[0]+x+.005,p[1]+height*.43,p[2]]],.0025,role,12,4);}};
 const grip=(length=.24,radius=.038,at=[0,0,0])=>{lathe([[0,-length/2],[radius*.85,-length/2],[radius,-length*.33],[radius*1.04,0],[radius,length*.33],[radius*.85,length/2],[0,length/2]],at,1,16);const points=[];for(let i=0;i<=100;i++){const t=i/100,a=t*Math.PI*18;points.push([at[0]+Math.cos(a)*radius*1.04,at[1]+(t-.5)*length*.9,at[2]+Math.sin(a)*radius*1.04]);}curve(points,.005,2,100,4);for(const y of [-length/2,length/2])torus(radius,.007,[at[0],at[1]+y,at[2]],2);};
 const blade=(stations,depth=.025,role=0)=>{const p=[],idx=[];for(const [y,w]of stations){const d=w===0?0:Math.min(depth,w*.65);p.push(-w,y,0,0,y,d,w,y,0,0,y,-d);}for(let i=0;i<stations.length-1;i++)for(let j=0;j<4;j++){const a=i*4+j,b=i*4+(j+1)%4;idx.push(a,b,a+4,b,b+4,a+4);}const g=new T.BufferGeometry();g.setAttribute('position',new T.Float32BufferAttribute(p,3));g.setIndex(idx);const facets=g.toNonIndexed();g.dispose();facets.computeVertexNormals();return mesh(facets,role);};
 const emblem=(p,size=.1,role=2)=>{const [x,y,z]=p;shape([[0,size],[-size*.24,size*.23],[-size,0],[-size*.24,-size*.23],[0,-size],[size*.24,-size*.23],[size,0],[size*.24,size*.23]],.009,[x,y,z],role,.002);};
 return {T,group,mesh,shape,box,ball,cylinder,torus,rod,curve,branch,lathe,leaf,rock,stud,groove,woodLines,grip,blade,emblem,hash};
}

// Counts submitted geometry, including instances, without a renderer or GL context.
function countObjectTriangles(group){let total=0;group.traverse(o=>{
 if(!o.isMesh||o.userData.previewHelper||o.userData.objectEffect)return;
 const g=o.geometry,available=g.index?.count??g.attributes.position.count;
 const start=Math.min(available,g.drawRange.start),count=Math.min(available-start,g.drawRange.count);
 total+=Math.floor(count/3)*(o.isInstancedMesh?o.count:1);
});return total;}

// Explicit dependencies keep this implementation identical in downloaded modules.
function assembleObject(THREE,spec,builder,geometryTools,materialFactory,options={}){
 const base={primary:spec.colors[0],secondary:spec.colors[1],accent:spec.colors[2]};
 const settings={...base};let disposed=false;
 const group=new THREE.Group();group.name=spec.model;group.userData={units:'meters',origin:spec.weapon?'grip':'base-center',shader:spec.materialFamily==='scifi'?'MeshStandardMaterial':'00-watercolor-v1'};
 const materials=spec.colors.map((color,role)=>materialFactory({color,role,vertexColors:true}));
 builder(geometryTools(THREE,group,materials));
 // Keep the public root transform free for the caller, including the bow's grip offset.
 if(group.position.lengthSq()){const offset=group.position.clone();group.children.forEach(o=>o.position.add(offset));group.position.set(0,0,0);}
 // Bake small modeled details into three material batches. Keep model-space paper
 // coordinates and normal depth testing without hundreds of individual draw calls.
 const parts=[...group.children],originals=new Set();group.userData.modeledParts=parts.length;
 materials.forEach((material,role)=>{
  const pieces=[];let count=0;
  for(const part of parts){if(part.material!==material)continue;part.updateMatrix();originals.add(part.geometry);const geometry=part.geometry.index?part.geometry.toNonIndexed():part.geometry.clone();geometry.applyMatrix4(part.matrix);pieces.push({geometry,tone:part.userData.tone??1});count+=geometry.attributes.position.count;}
  if(!count)return;
  const position=new Float32Array(count*3),normal=new Float32Array(count*3),color=new Float32Array(count*3);let offset=0;
  for(const {geometry,tone} of pieces){const size=geometry.attributes.position.array.length;position.set(geometry.attributes.position.array,offset);normal.set(geometry.attributes.normal.array,offset);color.fill(tone,offset,offset+size);offset+=size;geometry.dispose();}
  const geometry=new THREE.BufferGeometry();for(const [name,array]of [['position',position],['normal',normal],['color',color]])geometry.setAttribute(name,new THREE.BufferAttribute(array,3));geometry.computeBoundingSphere();
  const mesh=new THREE.Mesh(geometry,material);mesh.name=spec.model+'-palette-'+role;mesh.castShadow=mesh.receiveShadow=true;group.add(mesh);
 });
 parts.forEach(part=>group.remove(part));originals.forEach(geometry=>geometry.dispose());
 group.userData.modelOffset=[0,0,0];
 if(!spec.weapon){group.updateMatrixWorld(true);const bounds=new THREE.Box3().setFromObject(group),center=bounds.getCenter(new THREE.Vector3());group.userData.modelOffset=[-center.x,-bounds.min.y,-center.z];group.children.forEach(o=>{o.geometry.translate(...group.userData.modelOffset);o.geometry.computeBoundingSphere();});}
 function setOptions(values={}){if(disposed)return;for(const key of ['primary','secondary','accent'])if(/^#[0-9a-f]{6}$/i.test(values[key]))settings[key]=values[key];materials.forEach((m,i)=>{m.color.set(settings[['primary','secondary','accent'][i]]);if(m.userData.sciFiRole===2)m.emissive.copy(m.color);});}
 function dispose(){if(disposed)return;disposed=true;const geometry=new Set();group.traverse(o=>{if(o.geometry)geometry.add(o.geometry);});geometry.forEach(g=>g.dispose());materials.forEach(m=>m.dispose());group.removeFromParent();group.clear();}
 const stats=Object.freeze({triangles:countObjectTriangles(group)});
 setOptions(options);const initial={...settings};return {group,materials,stats,setOptions,update(){},reset(){setOptions(initial);},dispose,get settings(){return {...settings};},get disposed(){return disposed;}};
}

function angular_rock(g){
 const {rock,shape,curve}=g;
 rock([.56,.87,.46],[-.1,.82,0],0,16,1).rotation.z=-.13;rock([.38,.52,.37],[.37,.45,.09],0,9,0).rotation.z=.3;rock([.28,.31,.29],[-.4,.26,.24],1,3,0);
 for(let i=0;i<7;i++){const a=i*2.4;rock([.12,.11,.13],[Math.cos(a)*.58,.08,Math.sin(a)*.4],1,i,0);}
 for(let i=0;i<3;i++)shape([[-.1,0],[.1,.025],[.2,.11],[.17,.14],[-.12,.04]],.014,[-.23+i*.12,.59+i*.22,.4-i*.045],1,.002).rotation.z=.12;
 curve([[-.23,1.41,.14],[-.21,1.13,.29],[-.3,.95,.36],[-.24,.77,.4]],.008,1,22,4);
 for(let i=0;i<13;i++){const a=i*2.4;rock([.08,.025,.07],[Math.cos(a)*.45,.05,Math.sin(a)*.33],2,i,1);}
}



const spec={"model":"angular-rock","colors":["#8d9da9","#b2b6a7","#7d958c"],"weapon":false,"plant":false,"turret":false,"firing":false,"materialFamily":"watercolor","controls":[{"key":"primary","label":"主色","en":"Primary color","type":"color","default":"#8d9da9"},{"key":"secondary","label":"輔色","en":"Secondary color","type":"color","default":"#b2b6a7"},{"key":"accent","label":"點綴色","en":"Accent color","type":"color","default":"#7d958c"}]};
export const defaultOptions={"primary":"#8d9da9","secondary":"#b2b6a7","accent":"#7d958c"};
export {createWatercolorMaterial};
export function createGameObject(options={}){const asset=assembleObject(THREE,spec,angular_rock,createGeometryTools,createWatercolorMaterial,{...defaultOptions,...options});return asset;}
export default createGameObject;
