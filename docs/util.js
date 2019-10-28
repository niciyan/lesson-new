function createScene() {
    return new THREE.Scene();
}

function createCamera() {
    return new THREE.PerspectiveCamera(
        75,
        window.innerWidth/window.innerHeight,
        0.1,
        1000
    );
}

function createRenderer() {
    let renderer = new THREE.WebGLRenderer();
    renderer.setSize( window.innerWidth, window.innerHeight );
    document.body.appendChild( renderer.domElement );
    return renderer;
}

function createControls(camera, element) {
    return new THREE.OrbitControls(camera, element);
}