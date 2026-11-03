// 場景、鏡頭、地圖（有邊界的平原）。
import * as THREE from './vendor/three.module.min.js';
import { CONFIG } from './config.js';

export class World {
  constructor(container) {
    const c = CONFIG.render;
    this.renderer = new THREE.WebGLRenderer({ antialias: c.antialias, powerPreference: 'high-performance' });
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, c.maxPixelRatio));
    this.renderer.outputColorSpace = THREE.SRGBColorSpace;
    container.appendChild(this.renderer.domElement);
    this.canvas = this.renderer.domElement;

    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color(0x6fae55);

    this.camera = new THREE.PerspectiveCamera(CONFIG.camera.fov, 1, 1, 400);
    this.camTarget = new THREE.Vector3();
    this.camDistance = 40;
    this.viewRadius = 20; // 鏡頭能看到的地面半徑（出怪圈用）

    const hemi = new THREE.HemisphereLight(0xffffff, 0x557744, 1.6);
    this.scene.add(hemi);
    const sun = new THREE.DirectionalLight(0xffffff, 1.6);
    sun.position.set(-10, 30, 15);
    this.scene.add(sun);

    this.buildMap();
    this.resize();
    window.addEventListener('resize', () => this.resize());
    window.visualViewport?.addEventListener('resize', () => this.resize());
  }

  buildMap() {
    const m = CONFIG.map;
    const half = m.size / 2;
    this.half = half;

    // 程式產生的草地格紋貼圖，讓移動有參考點
    const cv = document.createElement('canvas');
    cv.width = cv.height = 128;
    const g = cv.getContext('2d');
    const c1 = '#' + m.groundColor.toString(16).padStart(6, '0');
    const c2 = '#' + m.groundColor2.toString(16).padStart(6, '0');
    g.fillStyle = c1;
    g.fillRect(0, 0, 128, 128);
    g.fillStyle = c2;
    g.fillRect(0, 0, 64, 64);
    g.fillRect(64, 64, 64, 64);
    g.fillStyle = 'rgba(255,255,255,0.18)';
    for (let i = 0; i < 18; i++) {
      const x = (i * 37) % 128;
      const y = (i * 71) % 128;
      g.fillRect(x, y, 3, 6);
    }
    const tex = new THREE.CanvasTexture(cv);
    tex.colorSpace = THREE.SRGBColorSpace;
    tex.wrapS = tex.wrapT = THREE.RepeatWrapping;
    tex.repeat.set(m.size / 8, m.size / 8);
    tex.anisotropy = 4;

    const ground = new THREE.Mesh(
      new THREE.PlaneGeometry(m.size, m.size),
      new THREE.MeshLambertMaterial({ map: tex })
    );
    ground.rotation.x = -Math.PI / 2;
    this.scene.add(ground);

    // 邊界：四面矮牆
    const wallMat = new THREE.MeshLambertMaterial({ color: m.wallColor });
    const t = m.wallThickness;
    const h = m.wallHeight;
    const long = m.size + t * 2;
    const walls = [
      [0, -half - t / 2, long, t],
      [0, half + t / 2, long, t],
      [-half - t / 2, 0, t, m.size],
      [half + t / 2, 0, t, m.size],
    ];
    for (const [x, z, w, d] of walls) {
      const wall = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), wallMat);
      wall.position.set(x, h / 2, z);
      this.scene.add(wall);
    }
  }

  resize() {
    const w = window.innerWidth;
    const h = window.innerHeight;
    this.renderer.setSize(w, h);
    const cam = CONFIG.camera;
    const aspect = w / h;
    this.camera.aspect = aspect;
    const tan = Math.tan(THREE.MathUtils.degToRad(cam.fov / 2));
    let dist = cam.minViewSpan / (2 * tan);
    if (aspect < 1) dist /= Math.pow(aspect, cam.portraitCompensation);
    this.camDistance = dist;
    const visH = 2 * dist * tan;
    const visW = visH * aspect;
    this.viewRadius = Math.hypot(visW, visH) / 2;
    this.camera.updateProjectionMatrix();
  }

  follow(x, z, dt, snap = false) {
    const k = snap ? 1 : 1 - Math.exp(-CONFIG.camera.followLerp * dt);
    this.camTarget.x += (x - this.camTarget.x) * k;
    this.camTarget.z += (z - this.camTarget.z) * k;
    const tilt = CONFIG.camera.tilt;
    const back = Math.sqrt(1 - tilt * tilt);
    this.camera.position.set(
      this.camTarget.x,
      this.camDistance * tilt,
      this.camTarget.z + this.camDistance * back
    );
    this.camera.lookAt(this.camTarget.x, 0, this.camTarget.z);
  }

  render() {
    this.renderer.render(this.scene, this.camera);
  }
}
