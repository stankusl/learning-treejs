function init() {

    let scene = new THREE.Scene();

    const isFog = false;

    if (isFog) {
        scene.fog = new THREE.FogExp2(0xffffff, 0.2);
    }

    let box = getBox(1,1,1);
    box.position.y = .5;

    let plane = getPlane(8);
    plane.name = 'plane-1';
    plane.rotation.x = (Math.PI / 2);

    let sphere = getSphere(0.05);

    let pointLight = getPointLight(1);
    pointLight.position.y = 1.95;
    pointLight.position.x = 0.5;
    pointLight.position.z = 2;

    scene.add(box);
    scene.add(plane);
    pointLight.add(sphere);
    scene.add(pointLight);

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
    renderer.setClearColor('rgb(120,120,120)');

    document.getElementById('webgl').appendChild(renderer.domElement);

    update(renderer, scene, camera);

    return scene;
   
}

function getPointLight( intensity ) {
    let light = new THREE.PointLight(0xffffff, intensity);

    return light;
}

function getPlane(w) {
    let geometry = new THREE.PlaneGeometry(w, w);
    let material = new THREE.MeshPhongMaterial( {
        color: 'grb(120,120,120)',
        side: THREE.DoubleSide
    });

    return mesh = new THREE.Mesh(
        geometry,
        material
    );
}

function getSphere(r) {
    let geometry = new THREE.SphereGeometry(r, 24, 24);
    let material = new THREE.MeshBasicMaterial( {
        color: 'grb(255,255,255)',
    });

    return mesh = new THREE.Mesh(
        geometry,
        material
    );
}


function getBox(w,h,d) {
    let geometry = new THREE.BoxGeometry(w,h,d);
    let material = new THREE.MeshPhongMaterial( {
        color: 'grb(120,120,120)',
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


