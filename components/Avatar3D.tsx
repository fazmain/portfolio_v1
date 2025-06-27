"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

export default function Avatar3D() {
  const containerRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<{
    scene: THREE.Scene | null;
    renderer: THREE.WebGLRenderer | null;
    camera: THREE.PerspectiveCamera | null;
    model: THREE.Object3D | null;
    mixer: THREE.AnimationMixer | null;
    controls: OrbitControls | null;
    animationFrame: number | null;
  }>({
    scene: null,
    renderer: null,
    camera: null,
    model: null,
    mixer: null,
    controls: null,
    animationFrame: null,
  });

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const cleanup = () => {
      if (sceneRef.current.animationFrame) {
        cancelAnimationFrame(sceneRef.current.animationFrame);
      }

      if (sceneRef.current.mixer) {
        sceneRef.current.mixer.stopAllAction();
      }

      if (sceneRef.current.model) {
        sceneRef.current.model.traverse((object) => {
          if ((object as THREE.Mesh).isMesh) {
            const mesh = object as THREE.Mesh;
            if (mesh.geometry) {
              mesh.geometry.dispose();
            }
            if (mesh.material) {
              if (Array.isArray(mesh.material)) {
                mesh.material.forEach((material) => material.dispose());
              } else {
                mesh.material.dispose();
              }
            }
          }
        });
      }

      if (sceneRef.current.renderer) {
        sceneRef.current.renderer.dispose();
        const element = sceneRef.current.renderer.domElement;
        element.parentNode?.removeChild(element);
      }

      if (sceneRef.current.scene) {
        while (sceneRef.current.scene.children.length > 0) {
          sceneRef.current.scene.remove(sceneRef.current.scene.children[0]);
        }
      }

      // Reset all refs
      sceneRef.current = {
        scene: null,
        renderer: null,
        camera: null,
        model: null,
        mixer: null,
        controls: null,
        animationFrame: null,
      };
    };

    const init = async () => {
      // Cleanup any existing scene
      cleanup();

      // Find the window container
      const windowContainer = container.querySelector("#window-container");
      if (!windowContainer) return;

      // Init renderer
      const renderer = new THREE.WebGLRenderer({
        antialias: true,
        alpha: true,
      });
      renderer.setPixelRatio(window.devicePixelRatio);
      sceneRef.current.renderer = renderer;

      // Set initial size to match container size
      const containerRect = windowContainer.getBoundingClientRect();
      const size = Math.min(containerRect.width, containerRect.height);
      renderer.setSize(size, size);
      windowContainer.appendChild(renderer.domElement);

      // Setup camera
      const camera = new THREE.PerspectiveCamera(30, 1, 0.1, 100);
      camera.position.set(10, 3, 10);
      sceneRef.current.camera = camera;

      // Setup controls
      const controls = new OrbitControls(camera, renderer.domElement);
      controls.target.set(0, 1.7, 0);
      controls.minDistance = 0.8;
      controls.maxDistance = 1.5;
      controls.minPolarAngle = Math.PI / 2 - 0.3;
      controls.maxPolarAngle = Math.PI / 2 + 0.3;
      controls.minAzimuthAngle = -0.5;
      controls.maxAzimuthAngle = 0.5;
      controls.update();
      sceneRef.current.controls = controls;

      // Setup scene with transparent background
      const scene = new THREE.Scene();
      scene.background = null;
      sceneRef.current.scene = scene;

      // Setup lights
      const hemiLight = new THREE.HemisphereLight(0xffffff, 0x444444, 1.5);
      hemiLight.position.set(0, 20, 0);
      scene.add(hemiLight);

      const mainLight = new THREE.DirectionalLight(0xffffff, 4.0);
      mainLight.position.set(2, 2, 3);
      mainLight.castShadow = true;
      mainLight.shadow.camera.top = 2;
      mainLight.shadow.camera.bottom = -2;
      mainLight.shadow.camera.left = -2;
      mainLight.shadow.camera.right = 2;
      mainLight.shadow.camera.near = 0.1;
      mainLight.shadow.camera.far = 40;
      mainLight.shadow.bias = -0.001;
      scene.add(mainLight);

      const fillLight = new THREE.DirectionalLight(0xffffff, 1.5);
      fillLight.position.set(-2, 2, 2);
      scene.add(fillLight);

      // const frontLight = new THREE.DirectionalLight(0xffffff, 1.0);
      // frontLight.position.set(0, 1.8, 2.5);
      // scene.add(frontLight);

      const pinkNeon = new THREE.PointLight(0xff69b4, 1.5);
      pinkNeon.position.set(-1.2, 1.8, 1.2);
      pinkNeon.distance = 3;
      pinkNeon.decay = 1.5;
      scene.add(pinkNeon);

      const blueNeon = new THREE.PointLight(0x00bfff, 1.5);
      blueNeon.position.set(1.2, 1.8, 1.2);
      blueNeon.distance = 3;
      blueNeon.decay = 1.5;
      scene.add(blueNeon);

      const purpleRim = new THREE.PointLight(0x9370db, 1.8);
      purpleRim.position.set(0, 2.0, -1.2);
      purpleRim.distance = 3;
      purpleRim.decay = 1.5;
      scene.add(purpleRim);

      const softFill = new THREE.PointLight(0xffffff, 1.2);
      softFill.position.set(0, 1.7, 1.5);
      softFill.distance = 2.5;
      softFill.decay = 1;
      scene.add(softFill);


      // Function to randomly select a model from available options
      const getRandomModel = () => {
        // Array of available model paths
        const modelOptions = [
          "/model (11).glb",
          "/model (12).glb",
          "/model (13).glb",
          "/model (14).glb",
          "/model (15).glb",
          "/model (16).glb",
        ];
        
        // Generate random index
        const randomIndex = Math.floor(Math.random() * modelOptions.length);
        
        // Return randomly selected model path
        return modelOptions[randomIndex];
      }

      // Get random model path
      const modelPath = getRandomModel();

      // Load model
      const loader = new GLTFLoader();
      const gltf = await loader.loadAsync(modelPath);
      const model = gltf.scene;
      model.rotation.y = 1;
      scene.add(model);
      sceneRef.current.model = model;

      // Setup model properties
      model.traverse((object) => {
        if ((object as THREE.Mesh).isMesh) {
          object.castShadow = true;
          object.receiveShadow = true;
          const material = (object as THREE.Mesh)
            .material as THREE.MeshStandardMaterial;
          if (material.envMap) {
            material.envMapIntensity = 0.5;
          }
          if (material.map && !material.name?.includes("hair")) {
            material.map.generateMipmaps = false;
          }
        }
      });

      // Setup animation
      const mixer = new THREE.AnimationMixer(model);
      sceneRef.current.mixer = mixer;

      if (gltf.animations.length > 0) {
        const action = mixer.clipAction(gltf.animations[0]);
        action.play();
      }

      // Handle resize
      const handleResize = () => {
        const containerRect = windowContainer.getBoundingClientRect();
        const size = Math.min(containerRect.width, containerRect.height);
        camera.aspect = 1;
        camera.updateProjectionMatrix();
        renderer.setSize(size, size);
      };

      window.addEventListener("resize", handleResize);

      // Animation loop
      const clock = new THREE.Clock();
      const animate = () => {
        const animationFrame = requestAnimationFrame(animate);
        sceneRef.current.animationFrame = animationFrame;

        const delta = clock.getDelta();
        mixer.update(delta);
        renderer.render(scene, camera);
      };

      animate();

      return () => {
        window.removeEventListener("resize", handleResize);
        cleanup();
      };
    };

    init();
  }, []);

  return (
    <div
      ref={containerRef}
      className="w-full h-full flex items-center justify-center"
    >
      <div
        className="aspect-square overflow-hidden"
        style={{ width: "min(80vw, 400px)" }}
      >
        <div id="window-container" className="w-full h-full" />
      </div>
    </div>
  );
}
