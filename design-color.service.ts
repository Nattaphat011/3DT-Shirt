import { Injectable } from '@angular/core';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader';
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry';

@Injectable({
  providedIn: 'root'
})
export class DesignColorService {
private scene: THREE.Scene = new THREE.Scene();
  private camera: THREE.PerspectiveCamera = new THREE.PerspectiveCamera();
  private renderer: THREE.WebGLRenderer = new THREE.WebGLRenderer();
  private tShirt: THREE.Mesh = new THREE.Mesh();

  constructor() { 
    this.init();
  }

    private init() {
      // Initialize Three.js scene, camera, and renderer
      this.scene = new THREE.Scene();
      this.camera = new THREE.PerspectiveCamera();
      this.renderer = new THREE.WebGLRenderer();
      this.renderer.setSize(window.innerWidth, window.innerHeight);
      document.body.appendChild(this.renderer.domElement);
  
      // Load GLTF model
      const loader = new GLTFLoader();
      loader.load('.assets/TTT.glb', (gltf) => {
        this.tShirt = gltf.scene.children[0] as THREE.Mesh;
        this.scene.add(this.tShirt);
        
  
        // Render loop
        const animate = () => {
          requestAnimationFrame(animate);
          this.renderer.render(this.scene, this.camera);
        };
        animate();
      });
    }
  
    public addTextToModel(text: string, size: number) {
      // Remove existing text
      this.tShirt.children.forEach(child => {
        if (child instanceof THREE.Mesh && child.geometry instanceof THREE.TubeGeometry) {
          this.tShirt.remove(child);
        }
      });
  
      const loader = new FontLoader();
      loader.load('https://threejs.org/examples/fonts/helvetiker_regular.typeface.json', (font) => {
const geometry = new TextGeometry(text, {
  font: font,
  size: size,
  height: 0.2,
});
        const material = new THREE.MeshBasicMaterial({ color: 0x000000 });
        const textMesh = new THREE.Mesh(geometry, material);
  
        // Position text and add to the model
        textMesh.position.set(-1, 1, 0); // Adjust based on your model
        this.tShirt.add(textMesh);
      });
    }
  
    public changeColor(color: string) {
      if (this.tShirt) {
        (this.tShirt.material as THREE.MeshBasicMaterial).color.set(color);
      }
    }
  }