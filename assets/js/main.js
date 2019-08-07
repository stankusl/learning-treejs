function init() {

    let scene = new THREE.Scene();

    let box = getBox(1,1,1);
    box.position.y = .5;

    let plane = getPlane(8);

    plane.name = 'plane-1';

    plane.rotation.x = (Math.PI / 2);


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

    update(renderer, scene, camera);

    return scene;
    // renderer.render(
    //     scene,
    //     camera
    // );
}

function getPlane(w) {
    let geometry = new THREE.PlaneGeometry(w, w);
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

function update(renderer, scene, camera) {
    renderer.render(
        scene,
        camera
    );

    // let plane = scene.getObjectByName('plane-1');
    // plane.rotation.y += 0.01;
    // plane.rotation.z += 0.01;

    requestAnimationFrame( function() {
        update(renderer, scene, camera)
    })
}

let scene = init();


