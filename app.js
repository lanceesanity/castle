//COLORS
let Colors = {
  red:0xf25346,
  white:0xd8d0d1,
  brown:0x59332e,
  pink:0xF5986E,
  brownDark:0x23190f,
  blue:0x68c3c0,
};

// THREEJS RELATED VARIABLES

let scene,
  camera, fieldOfView, aspectRatio, nearPlane, farPlane,
  renderer, container;


//INIT THREE JS, SCREEN AND MOUSE EVENTS

function createScene() {

HEIGHT = window.innerHeight;
WIDTH = window.innerWidth;

scene = new THREE.Scene();
aspectRatio = WIDTH / HEIGHT;
fieldOfView = 120;
nearPlane = 1;
farPlane = 10000;
camera = new THREE.PerspectiveCamera(
  fieldOfView,
  aspectRatio,
  nearPlane,
  farPlane
  );

scene.fog = new THREE.Fog(0xf7d9aa, 100,950);
camera.position.x = 200;
camera.position.z = 800;
camera.position.y = 200;
camera.rotation.y =0.5;


renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
renderer.setSize(WIDTH, HEIGHT);
renderer.shadowMap.enabled = true;
container = document.getElementById('world');
container.appendChild(renderer.domElement);

window.addEventListener('resize', handleWindowResize, false);
}

// HANDLE SCREEN EVENTS

function handleWindowResize() {
HEIGHT = window.innerHeight;
WIDTH = window.innerWidth;
renderer.setSize(WIDTH, HEIGHT);
camera.aspect = WIDTH / HEIGHT;
camera.updateProjectionMatrix();
}


// LIGHTS

let ambientLight, hemisphereLight, shadowLight;

function createLights() {

hemisphereLight = new THREE.HemisphereLight(0xaaaaaa,0x000000, .9)
shadowLight = new THREE.DirectionalLight(0xffffff, .9);
shadowLight.position.set(150, 350, 350);
shadowLight.castShadow = true;
shadowLight.shadow.camera.left = -400;
shadowLight.shadow.camera.right = 400;
shadowLight.shadow.camera.top = 400;
shadowLight.shadow.camera.bottom = -400;
shadowLight.shadow.camera.near = 1;
shadowLight.shadow.camera.far = 1000;
shadowLight.shadow.mapSize.width = 2048;
shadowLight.shadow.mapSize.height = 2048;

scene.add(hemisphereLight);
scene.add(shadowLight);

}


var Castle = function(){
this.mesh = new THREE.Object3D();
this.mesh.name = "Castle";

  // Create the building
var geomBuilding= new THREE.BoxGeometry(300,1800,250,1,1,1);
var textureBuilding = new THREE.TextureLoader().load('assets/textures/castle.jpg' );
var matBuilding = new THREE.MeshPhongMaterial({shading:THREE.FlatShading, map:textureBuilding});
var building = new THREE.Mesh(geomBuilding, matBuilding);
building.position.x=-2200;
building.position.y=-190;
building.position.z=750;
building.castShadow = true;
building.receiveShadow = true;
this.mesh.add(building);

//2nd building
var building = new THREE.Mesh(geomBuilding, matBuilding);
building.position.x = 2200;
building.position.y =- 190;
building.position.z = 750;
building.castShadow = true;
building.receiveShadow = true;
this.mesh.add(building);

//3rd building
var building = new THREE.Mesh(geomBuilding, matBuilding);
building.position.x = 2200;
building.position.y =- 190;
building.position.z =- 1800;
building.castShadow = true;
building.receiveShadow = true;
this.mesh.add(building);

//4th building
var building = new THREE.Mesh(geomBuilding, matBuilding);
building.position.x=-2200;
building.position.y=-190;
building.position.z=-1800;
building.castShadow = true;
building.receiveShadow = true;
this.mesh.add(building);

//Cylinder buildings
var geomCylinder = new THREE.CylinderGeometry( 400, 400, 500, 400 );
var textureCylinder = new THREE.TextureLoader().load('assets/textures/castle.jpg' );
var matCylinder = new THREE.MeshBasicMaterial( {shading:THREE.FlatShading, map:textureCylinder} );
var cylinder = new THREE.Mesh( geomCylinder, matCylinder );
cylinder.position.x=250;
cylinder.position.y=500;
cylinder.position.z=100;
cylinder.castShadow = true;
cylinder.receiveShadow = true;
this.mesh.add( cylinder );
//2nd
var cylinder = new THREE.Mesh( geomCylinder, matCylinder );
cylinder.position.x =- 500;
cylinder.position.y = 500;
cylinder.position.z = 100;
cylinder.castShadow = true;
cylinder.receiveShadow = true;
this.mesh.add( cylinder );

//create circle design
var geomCircle = new THREE.CircleGeometry( 400, 400);
var textureCircle = new THREE.TextureLoader().load('assets/textures/lakers.jpg' );
var matCircle = new THREE.MeshBasicMaterial( { map:textureCircle} );
var circle = new THREE.Mesh( geomCircle, matCircle );
circle.position.x =- 500;
circle.position.y = 200;
circle.position.z = 1000;
circle.castShadow = true;
circle.receiveShadow = true;
this.mesh.add( circle );

  // Create the door
var geomDoor= new THREE.BoxGeometry(420,600,50,1,1,1);
var textureDoor = new THREE.TextureLoader().load('assets/textures/door.jpg' );
var matDoor = new THREE.MeshPhongMaterial({shading:THREE.FlatShading, map:textureDoor});
var door = new THREE.Mesh(geomDoor, matDoor);
door.position.x=250;
door.position.y=-190;
door.position.z=750;
door.castShadow = true;
door.receiveShadow = true;
this.mesh.add(door);

// Create the main building
var geomBuilding= new THREE.BoxGeometry(4500,1000,2500,1,1,1);
//texture for main wall
var textureMain = new THREE.TextureLoader().load( 'assets/textures/castlewall.jpg' );
var matBuilding = new THREE.MeshPhongMaterial({shading:THREE.FlatShading, map:textureMain});
var building = new THREE.Mesh(geomBuilding, matBuilding);
building.position.x =- 1;
building.position.y =- 190;
building.position.z =- 500;
building.castShadow = true;
building.receiveShadow = true;
this.mesh.add(building);


//ring design
let geomRing = new THREE.RingBufferGeometry( 1000, 1000, 1000 );
let textureRing=new THREE.TextureLoader().load( 'assets/textures/castlewall.jpg' );
let matRing = new THREE.MeshBasicMaterial( { map:textureRing, side: THREE.DoubleSide } );
let ring = new THREE.Mesh( geomRing, matRing );
ring.position.x = 2200;
ring.position.y = 1000;
ring.position.z = 900;
ring.castShadow = true;
ring.receiveShadow = true;
scene.add( ring );

//roof
var geomRoof = new THREE.ConeGeometry( 190, 430, 32 );
//texture for roof
var textureRoof = new THREE.TextureLoader().load( 'assets/textures/blue2.jpg' );
var matRoof = new THREE.MeshBasicMaterial( {map:textureRoof} );
var cone = new THREE.Mesh( geomRoof, matRoof );
cone.position.x =- 2200 ;
cone.position.y = 900;
cone.position.z = 750;
this.mesh.add( cone );
//2nd
var cone = new THREE.Mesh( geomRoof, matRoof );
cone.position.x = 2200 ;
cone.position.y = 900;
cone.position.z = 750;
this.mesh.add( cone );
//3rd
var cone = new THREE.Mesh( geomRoof, matRoof );
cone.position.x = 2200 ;
cone.position.y = 900;
cone.position.z = -1800;
this.mesh.add( cone );
//4th
var cone = new THREE.Mesh( geomRoof, matRoof );
cone.position.x = -2200 ;
cone.position.y = 900;
cone.position.z = -1800;
this.mesh.add( cone );

// Create the pathway
let geomPath= new THREE.BoxGeometry(1000,10000,50,1,1,1);
let texturePath = new THREE.TextureLoader().load('assets/textures/path.jpg' );
let matPath = new THREE.MeshPhongMaterial({shading:THREE.FlatShading, map:texturePath});
let path = new THREE.Mesh(geomPath, matPath);
path.position.x=200;
path.position.y=-190;
path.position.z=5500;
path.rotation.x =1.55;
path.castShadow = true;
path.receiveShadow = true;
this.mesh.add(path);
//Create grass plane
let geomGrass= new THREE.BoxGeometry(10000,10000,50,1,1,1);
let textureGrass = new THREE.TextureLoader().load('assets/textures/water.jpg' );
let matGrass = new THREE.MeshPhongMaterial({shading:THREE.FlatShading,transparent:true, map:textureGrass});
let grass = new THREE.Mesh(geomGrass, matGrass);
grass.position.x=0;
grass.position.y=-400;
grass.position.z=0;
grass.rotation.x =1.54;
grass.receiveShadow = true;
this.mesh.add(grass);

//sky
let skyTexture= new THREE.TextureLoader().load( 'assets/textures/water.jpg' );
let skyMat= new THREE.MeshBasicMaterial({map:skyTexture})
};


Sea = function(){
let geomSea = new THREE.PlaneGeometry(20000,20000,1600);
geomSea.applyMatrix(new THREE.Matrix4().makeRotationX(-Math.PI/2));
let textureSea = new THREE.TextureLoader().load( 'assets/textures/sagbot1.jpg' );
let matSea = new THREE.MeshPhongMaterial({
  color:Colors.blue,
  transparent:true,
  opacity:.6,
  shading:THREE.FlatShading,
  map: textureSea
});
this.mesh = new THREE.Mesh(geomSea, matSea);
this.mesh.receiveShadow = true;
}






// 3D Models
let sea;
let castle;

function createCastle(){
castle = new Castle();
castle.mesh.scale.set(.25,.25,.25);
castle.mesh.position.y = 100;
scene.add(castle.mesh);
}

function createSea(){
sea = new Sea();
scene.add(sea.mesh);
}


function loop(){
renderer.render(scene, camera);
requestAnimationFrame(loop);
//to rotate the scene
scene.rotation.y+=0.008
}


function init(event){
createScene();
createLights();
createCastle();
createSea();
loop();
}

window.addEventListener('load', init, false);



