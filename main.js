let scene, camera, renderer, cube, dodecahedron, octahedron;

function init() {

    scene = new THREE.Scene();
    scene.background = new THREE.Color( 0x1b76ff );

    camera = new THREE.PerspectiveCamera(
        75, 
        window.innerWidth / window.innerHeight,
        0.1,
        1000
        );
    
        renderer = new THREE.WebGLRenderer( {antialias: true} );

       
    
       
        renderer.setSize(window.innerWidth, window.innerHeight);
    
        document.body.appendChild(renderer.domElement);

        ///////CUBE 
        
       const texture = new THREE.TextureLoader().load('textures/6.jpg');

	// Create material with texture
    const material = new THREE.MeshBasicMaterial({ map: texture });

    const geometry = new THREE.BoxGeometry( 2, 2, 2);
    
 //const material = new THREE.MeshBasicMaterial({ color: 0x3a89ff });

 cube = new THREE.Mesh( geometry, material );
 scene.add( cube );
 //cube.position.x += 5;
 //cube.position.y += -3.5;

 ///////////2nd GEOMETRY
        
      const geometry1 = new THREE.DodecahedronGeometry( 1, 0, 0);
      const texture2 = new THREE.TextureLoader().load('textures/6.jpg');
        const material1 = new THREE.MeshBasicMaterial({ map: texture2 });
        
        
        //dodecahedron.position.y += 1;
        //dodecahedron.position.x += 1;
        

        dodecahedron = new THREE.Mesh( geometry1, material1 );
        scene.add( dodecahedron );
        dodecahedron.position.x += 6;
        dodecahedron.position.y += -4;
        dodecahedron.scale.multiplyScalar(3);


        ////////////////////3rd geometry //OctahedronBufferGeometry

        const geometry2 = new THREE.OctahedronBufferGeometry();
      const texture3 = new THREE.TextureLoader().load('textures/6.jpg');
        const material2 = new THREE.MeshBasicMaterial({ map: texture2 });
        
        
        //dodecahedron.position.y += 1;
        //dodecahedron.position.x += 1;
        

        octahedron = new THREE.Mesh( geometry2, material2 );
        scene.add( octahedron );
        octahedron.position.x += 4;
        octahedron.position.y += 1;
        octahedron.scale.multiplyScalar(0.5);


    
    camera.position.z = 5;
    //camera.position.x = 1;
    //camera.position.y = 1;

}




function animate() {
    requestAnimationFrame( animate );

    octahedron.rotation.x += 0.003;
    octahedron.rotation.y += 0.003;

    dodecahedron.rotation.x += 0.001;
    dodecahedron.rotation.y += 0.001;

    
    cube.rotation.x += 0.005;
    cube.rotation.y += 0.005;

	renderer.render( scene, camera );
}

function onWindowResize() {
camera.aspect = window.innerWidth / window.innerHeight;
camera.updateProjectionMatrix();
renderer.setSize(window.innerWidth, window.innerHeight);

}

window.addEventListener('resize', onWindowResize, false);

init();
animate();