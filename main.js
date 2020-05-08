let scene, camera, renderer, cube, dodecahedron;

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

    const geometry = new THREE.BoxGeometry( 3, 3, 3);
    
 //const material = new THREE.MeshBasicMaterial({ color: 0x3a89ff });

 cube = new THREE.Mesh( geometry, material );
 scene.add( cube );
 cube.position.x += 5;
 cube.position.y += -3.5;

 ///////////2nd GEOMETRY
        
      const geometry1 = new THREE.DodecahedronGeometry( 1, 0, 0);
      const texture2 = new THREE.TextureLoader().load('textures/6.jpg');
        const material1 = new THREE.MeshBasicMaterial({ map: texture2 });
        
        
        //dodecahedron.position.y += 1;
        //dodecahedron.position.x += 1;

        dodecahedron = new THREE.Mesh( geometry1, material1 );
        scene.add( dodecahedron );
    
    camera.position.z = 5;
    //camera.position.x = 1;
    //camera.position.y = 1;

}




function animate() {
    requestAnimationFrame( animate );

    dodecahedron.rotation.x += 0.01;
    dodecahedron.rotation.y += 0.01;

    
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