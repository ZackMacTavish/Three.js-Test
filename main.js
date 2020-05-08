let scene, camera, renderer, cube;

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
        
       const texture = new THREE.TextureLoader().load('textures/6.jpg');

	// Create material with texture
    const material = new THREE.MeshBasicMaterial({ map: texture });
    

        //const material = new THREE.MeshBasicMaterial({ color: 0x3a89ff });
        const geometry = new THREE.BoxGeometry( 2, 2, 2);
        //const geometry = new THREE.DodecahedronGeometry( 1, 0, 0);
        
        
        cube = new THREE.Mesh( geometry, material );
        scene.add( cube );
    
    camera.position.z = 5;

}




function animate() {
    requestAnimationFrame( animate );
    
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;

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