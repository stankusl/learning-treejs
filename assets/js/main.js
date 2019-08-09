function init() {

    let scene = new THREE.Scene();

    // Import Orbit controls
    // const orbit = new THREE

    // Import GUI
    const gui = new dat.GUI();

    const isFog = false;

    if (isFog) {
        scene.fog = new THREE.FogExp2(0xffffff, 0.2);
    }

    let boxGrid = getBoxGrid(10, 1.5);
    // let box = getBox(1,1,1);
    // box.position.y = .5;

    let plane = getPlane(20);
    plane.name = 'plane-1';
    plane.rotation.x = (Math.PI / 2);

    let sphere = getSphere(0.05);

    let pointLight = getPointLight(1);
    pointLight.position.y = 1.5;
    pointLight.position.x = 0;
    pointLight.position.z = 0;

    // ================== GUI CONTROLLERS
    gui.add(pointLight, 'intensity', 0, 10);
    gui.add(pointLight.position, 'y', 0, 10);


    // scene.add(box);
    scene.add(plane);
    pointLight.add(sphere);
    scene.add(pointLight);
    scene.add(boxGrid);
    

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
    renderer.shadowMap.enabled = true;

    document.getElementById('webgl').appendChild(renderer.domElement);

    let controls = new THREE.OrbitControls(camera, renderer.domElement );

    update(renderer, scene, camera, controls);

    return scene;

}

function getBoxGrid(amount, separationMultiplier)  {
    let group = new THREE.Group();

    for (let i = 0; i < amount; i++ ) {
        let obj = getBox(1, 1, 1);
        obj.position.x = i * separationMultiplier;
        obj.position.y = obj.geometry.parameters.height / 2;
        group.add(obj);

        for (let j = 1; j < amount; j++ ) {
            let obj = getBox(1, 1, 1);
            obj.position.x = i * separationMultiplier;
            obj.position.y = obj.geometry.parameters.height / 2;
            obj.position.z = j * separationMultiplier;
            group.add(obj);

        }
    }

    group.position.x = -(separationMultiplier * (amount-1))/2;
    group.position.z = -(separationMultiplier * (amount-1))/2;

    return group;
}

function getPointLight( intensity ) {
    let light = new THREE.PointLight(0xffffff, intensity);
    light.castShadow = true;

    return light;
}

function getPlane(w) {
    let geometry = new THREE.PlaneGeometry(w, w);
    let material = new THREE.MeshPhongMaterial( {
        color: 'rgb(120,120,120)',
        side: THREE.DoubleSide
    });

    let mesh = new THREE.Mesh(
        geometry,
        material
    );

    mesh.receiveShadow = true;

    return mesh;
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

    let mesh = new THREE.Mesh(
        geometry,
        material
    );

    mesh.castShadow = true;

    return mesh;
}

function update(renderer, scene, camera, controls) {
    renderer.render(
        scene,
        camera
    );

    controls.update();

    // let plane = scene.getObjectByName('plane-1');
    // plane.rotation.y += 0.01;
    // plane.rotation.z += 0.01;

    requestAnimationFrame( function() {
        update(renderer, scene, camera, controls)
    })
}

let scene = init();


