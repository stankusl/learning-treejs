function init() {

    let scene = new THREE.Scene();

    let geometry = new THREE.BoxGeometry(1,1,1);
    let material = new THREE.MeshBasicMaterial( {
        color: 0x00ff00
    });

    let mesh = new THREE.Mesh(
        geometry,
        material
    );

    scene.add(mesh);

    let camera = new THREE.PerspectiveCamera(
        45,
        window.innerWidth / window.innerHeight,
        1,
        1000
    );

    camera.position.z = 5;

    let renderer = new THREE.WebGLRenderer();

    renderer.setSize(window.innerWidth, window.innerHeight);

    document.getElementById('webgl').appendChild(renderer.domElement);

    renderer.render(
        scene,
        camera
    );
}

init();

