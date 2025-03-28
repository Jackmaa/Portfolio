// Scene
const scene = new THREE.Scene();

// Camera
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.5,
  2000
);
camera.position.set(0, 0, 2);

const textureLoader = new THREE.TextureLoader();

// Renderer
const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Metallic Material
const metalTexture = textureLoader.load("./Metal048C_1K-JPG_Roughness.jpg");

const material = new THREE.MeshStandardMaterial({
  color: 0xfd9a00, //gold color
  metalness: 1,
  roughness: 0.2,
  map: metalTexture,
});

const light = new THREE.PointLight(0xffffff, 20, 0, 1.5);
light.position.set(0, 0, 0.5);
scene.add(light);

//Mouse movement tracking
const mouse = new THREE.Vector2();

window.addEventListener("mousemove", (e) => {
  //Normalize mouse position [-1, 1] for Three.js 3D space
  mouse.x = (e.clientX / window.innerWidth) * 2 - 1;
  mouse.y = -(e.clientY / window.innerHeight) * 2 + 1;

  light.position.x = mouse.x * 5;
  light.position.y = mouse.y * 5;
});

let logo; // Déclaré globalement

// Use the GLTFLoader from THREE namespace
const loader = new THREE.GLTFLoader();
loader.load("logoV.glb", (gltf) => {
  logo = gltf.scene;
  logo.traverse((child) => {
    if (child.isMesh) {
      child.material = material;
    }
  });
  logo.rotation.x += 0.15;
  logo.rotation.z += 0.125;
  logo.rotation.y += 1.55;
  logo.scale.set(10, 10, 10); // Appliquer l'échelle après chargement
  logo.position.set(0, 0.1, 0);
  scene.add(logo);
});

const ambientLight = new THREE.AmbientLight(0xffffff, 1);
scene.add(ambientLight);

// Animation Loop
function animate() {
  requestAnimationFrame(animate);

  light.position.x = mouse.x;
  light.position.y = mouse.y;
  renderer.render(scene, camera);
}

animate();

// Resize Handling
window.addEventListener("resize", () => {
  renderer.setSize(window.innerWidth, window.innerHeight);
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
});
