// Cena básica
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, 600/400, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(600, 400);
document.getElementById("container3D").appendChild(renderer.domElement);

// Exemplo: cubos representando regiões
const torax = new THREE.Mesh(new THREE.BoxGeometry(1,1,1), new THREE.MeshBasicMaterial({color:0x00ff00}));
torax.position.set(0,0,0);
scene.add(torax);

const biceps = new THREE.Mesh(new THREE.BoxGeometry(0.5,1,0.5), new THREE.MeshBasicMaterial({color:0x0000ff}));
biceps.position.set(2,0,0);
scene.add(biceps);

camera.position.z = 5;

function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
}
animate();

// Função para destacar região
function highlight(mesh) {
    mesh.material.color.set(0xff0000); // vermelho
    setTimeout(() => mesh.material.color.set(0x00ff00), 1000); // volta depois
}

// Eventos nos inputs
document.getElementById("torax").addEventListener("focus", () => highlight(torax));
document.getElementById("biceps").addEventListener("focus", () => highlight(biceps));