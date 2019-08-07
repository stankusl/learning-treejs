function init() {

    let scene = new THREE.Scene();

    let box = getBox(1,1,1);
    let plane = getPlane(8);


    scene.add(box);
    scene.add(plane);

    let camera = new THREE.PerspectiveCamera(
        45,
        window.innerWidth / window.innerHeight,
        1,
        1000
    );

    camera.position.z = 5;
    camera.position.x = 1;
    camera.position.y = 2;

    camera.lookAt(new THREE.Vector3(0, 0 , 0));

    let renderer = new THREE.WebGLRenderer();

    renderer.setSize(window.innerWidth, window.innerHeight);

    document.getElementById('webgl').appendChild(renderer.domElement);

    renderer.render(
        scene,
        camera
    );
}

function getPlane(w) {
    let geometry = new THREE.PlaneGeometry(w);
    let material = new THREE.MeshBasicMaterial( {
        color: 0x0000ff,
        side: THREE.DoubleSide
    });

    return mesh = new THREE.Mesh(
        geometry,
        material
    );
}

function getBox(w,h,d) {
    let geometry = new THREE.BoxGeometry(w,h,d);
    let material = new THREE.MeshBasicMaterial( {
        color: 0x00ff00
    });

    return mesh = new THREE.Mesh(
        geometry,
        material
    );
}

init();

