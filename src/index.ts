import { KeyDisplay } from './utils'
import { CharacterControls } from './characterControls'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'

const CreateObject = (
  dimention: any,
  position: any,
  image: string,
  callBack?: any,
) => {
  const geometryC2 = new THREE.BoxGeometry(
    dimention[0],
    dimention[1],
    dimention[2],
  )
  const floorTexture = new THREE.TextureLoader().load(image)
  const materialC2 = new THREE.MeshBasicMaterial({ map: floorTexture })
  const meshC2: any = new THREE.Mesh<any>(geometryC2, materialC2)
  meshC2.position.set(position[0], position[1], position[2])
  if (callBack) {
    meshC2.callback = callBack
  }
  scene.add(meshC2)
}

const PhotoFrame = (
  frameDimention: any,
  photoDimention: any,
  position: any,
  image: any,
  token: any,
) => {
  CreateObject(frameDimention, position, './textures/img/1200px-Frame.svg.png')
  CreateObject(photoDimention, position, image, function () {
    onClickOnMesh(token, image)
  })
}

// SCENE
const scene = new THREE.Scene()
scene.background = new THREE.Color(0xa8def0)

// CAMERA
const camera = new THREE.PerspectiveCamera(
  45,
  window.innerWidth / window.innerHeight,
  0.1,
  1000,
)
camera.position.y = 5
camera.position.z = 5
camera.position.x = 0

// RENDERER
const renderer = new THREE.WebGLRenderer({ antialias: true })
renderer.setSize(window.innerWidth, window.innerHeight)
renderer.setPixelRatio(window.devicePixelRatio)
renderer.shadowMap.enabled = true

// CONTROLS
const orbitControls = new OrbitControls(camera, renderer.domElement)
orbitControls.enableDamping = true
orbitControls.minDistance = 5
orbitControls.maxDistance = 15
orbitControls.enablePan = false
orbitControls.maxPolarAngle = Math.PI / 2 - 0.05
orbitControls.update()

// LIGHTS
light()

// FLOOR
generateFloor()

// MODEL WITH ANIMATIONS
var characterControls: CharacterControls
new GLTFLoader().load('models/Soldier.glb', function (gltf) {
  const model = gltf.scene
  model.traverse(function (object: any) {
    if (object.isMesh) object.castShadow = true
  })
  scene.add(model)

  const gltfAnimations: THREE.AnimationClip[] = gltf.animations
  const mixer = new THREE.AnimationMixer(model)
  const animationsMap: Map<string, THREE.AnimationAction> = new Map()
  gltfAnimations
    .filter((a) => a.name != 'TPose')
    .forEach((a: THREE.AnimationClip) => {
      animationsMap.set(a.name, mixer.clipAction(a))
    })

  characterControls = new CharacterControls(
    model,
    mixer,
    animationsMap,
    orbitControls,
    camera,
    'Idle',
  )
})

const onClickOnMesh = (token: any, image: any) => {
  const redirectButton: any = document.getElementById('redirectLink')
  redirectButton.href = `https://nftmall.netlify.app/details/${token}`
  document.getElementById('buttonModal').click()
  const nftImg: any = document.getElementById('nftImg')
  nftImg.src = image
  const modalHeader: any = document.getElementById('modalHeader')
  modalHeader.innerHTML = `Token #${token}`
}

// -----------------------------------Albums----------------------------------------
CreateObject([50, 10, 0.5], [1, 3, -37], './textures/img/marble.jpg') // front
CreateObject([33, 10, 0.5], [11, 3, -22], './textures/img/marble.jpg') // back
CreateObject([0.5, 10, 33], [35, 3, -10], './textures/img/marble.jpg') // right

// CreateObject([0.5, 20, 55], [-30, 3, -10], './textures/img/marble.jpg') // left

CreateObject(
  [6, 1, 0.5],
  [-2, 6.5, -35],
  './textures/img/cooltext420831018997673.png',
)
PhotoFrame(
  [5, 5, 0.5],
  [3.5, 3.3, 1],
  [-20, 3, -35],
  './textures/img/token7.jpg',
  7,
)
PhotoFrame(
  [5, 5, 0.5],
  [3.5, 3.3, 1],
  [-14, 3, -35],
  './textures/img/token8.jpg',
  8,
)
PhotoFrame(
  [5, 5, 0.5],
  [3.5, 3.3, 1],
  [-8, 3, -35],
  './textures/img/Token9.jpg',
  9,
)
PhotoFrame(
  [5, 5, 0.5],
  [3.5, 3.3, 1],
  [-2, 3, -35],
  './textures/img/token14.jpg',
  14,
)
PhotoFrame(
  [5, 5, 0.5],
  [3.5, 3.3, 1],
  [4, 3, -35],
  './textures/img/token15.jpg',
  15,
)
PhotoFrame(
  [5, 5, 0.5],
  [3.5, 3.3, 1],
  [10, 3, -35],
  './textures/img/token17.png',
  17,
)
PhotoFrame(
  [5, 5, 0.5],
  [3.5, 3.3, 1],
  [16, 3, -35],
  './textures/img/token23.jpg',
  23,
)
PhotoFrame(
  [5, 5, 0.5],
  [3.5, 3.3, 1],
  [22, 3, -35],
  './textures/img/token24.jpg',
  24,
)
// ----------------------------front-------------------------------------
CreateObject(
  [6, 1, 0.5],
  [10, 6.5, -20],
  './textures/img/cooltext420830515242949.png',
)
PhotoFrame(
  [5, 5, 0.5],
  [3.5, 3.3, 1],
  [22, 3, -20],
  './textures/img/token18.jpg',
  18,
)
PhotoFrame(
  [5, 5, 0.5],
  [3.5, 3.3, 1],
  [16, 3, -20],
  './textures/img/token19.jpg',
  19,
)
PhotoFrame(
  [5, 5, 0.5],
  [3.5, 3.3, 1],
  [10, 3, -20],
  './textures/img/token20.png',
  20,
)
PhotoFrame(
  [5, 5, 0.5],
  [3.5, 3.3, 1],
  [4, 3, -20],
  './textures/img/token23.png',
  21,
)
PhotoFrame(
  [5, 5, 0.5],
  [3.5, 3.3, 1],
  [-2, 3, -20],
  './textures/img/token22.png',
  22,
)
// -------------------------------right--------------------------------
PhotoFrame(
  [0.5, 5, 5],
  [1, 3.3, 3.5],
  [34, 3, -10],
  './textures/img/token1.png',
  1,
)
PhotoFrame(
  [0.5, 5, 5],
  [1, 3.3, 3.5],
  [34, 3, -16],
  './textures/img/token5.jpg',
  5,
)
PhotoFrame(
  [0.5, 5, 5],
  [1, 3.3, 3.5],
  [34, 3, -22],
  './textures/img/token3.png',
  4,
)
CreateObject(
  [0.5, 3, 10],
  [34, 4, 0],
  './textures/img/cooltext420829729532844.png',
)
CreateObject(
  [0.5, 1, 6],
  [34, 7, -15],
  './textures/img/cooltext420830017333234.png',
)

// CONTROL KEYS
const keysPressed = {}
const keyDisplayQueue = new KeyDisplay()
document.addEventListener(
  'keydown',
  (event) => {
    keyDisplayQueue.down(event.key)
    if (event.shiftKey && characterControls) {
      characterControls.switchRunToggle()
    } else {
      ;(keysPressed as any)[event.key.toLowerCase()] = true
    }
  },
  false,
)
document.addEventListener(
  'keyup',
  (event) => {
    keyDisplayQueue.up(event.key)
    ;(keysPressed as any)[event.key.toLowerCase()] = false
  },
  false,
)

const clock = new THREE.Clock()
// ANIMATE
function animate() {
  let mixerUpdateDelta = clock.getDelta()
  if (characterControls) {
    characterControls.update(mixerUpdateDelta, keysPressed)
  }
  orbitControls.update()
  renderer.render(scene, camera)
  requestAnimationFrame(animate)
}
document.body.appendChild(renderer.domElement)
animate()

// RESIZE HANDLER
function onWindowResize() {
  camera.aspect = window.innerWidth / window.innerHeight
  camera.updateProjectionMatrix()
  renderer.setSize(window.innerWidth, window.innerHeight)
  keyDisplayQueue.updatePosition()
}
window.addEventListener('resize', onWindowResize)

function generateFloor() {
  // TEXTURES
  const textureLoader = new THREE.TextureLoader()
  const placeholder = textureLoader.load(
    './textures/placeholder/placeholder.png',
  )
  const sandBaseColor = textureLoader.load('./textures/img/marble.jpg')
  const sandNormalMap = textureLoader.load('./textures/img/marble.jpg')
  const sandHeightMap = textureLoader.load('./textures/img/marble.jpg')
  const sandAmbientOcclusion = textureLoader.load('./textures/img/marble.jpg')

  const WIDTH = 80
  const LENGTH = 80

  const geometry = new THREE.PlaneGeometry(WIDTH, LENGTH, 512, 512)
  const material = new THREE.MeshStandardMaterial({
    map: sandBaseColor,
    normalMap: sandNormalMap,
    displacementMap: sandHeightMap,
    displacementScale: 0.1,
    aoMap: sandAmbientOcclusion,
  })
  wrapAndRepeatTexture(material.map)
  wrapAndRepeatTexture(material.normalMap)
  wrapAndRepeatTexture(material.displacementMap)
  wrapAndRepeatTexture(material.aoMap)
  // const material = new THREE.MeshPhongMaterial({ map: placeholder})

  const floor = new THREE.Mesh(geometry, material)
  floor.receiveShadow = true
  floor.rotation.x = -Math.PI / 2
  scene.add(floor)
}

function wrapAndRepeatTexture(map: THREE.Texture) {
  map.wrapS = map.wrapT = THREE.RepeatWrapping
  map.repeat.x = map.repeat.y = 10
}

function light() {
  scene.add(new THREE.AmbientLight(0xffffff, 0.7))

  const dirLight = new THREE.DirectionalLight(0xffffff, 1)
  dirLight.position.set(-60, 100, -10)
  dirLight.castShadow = true
  dirLight.shadow.camera.top = 50
  dirLight.shadow.camera.bottom = -50
  dirLight.shadow.camera.left = -50
  dirLight.shadow.camera.right = 50
  dirLight.shadow.camera.near = 0.1
  dirLight.shadow.camera.far = 200
  dirLight.shadow.mapSize.width = 4096
  dirLight.shadow.mapSize.height = 4096
  scene.add(dirLight)
  // scene.add( new THREE.CameraHelper(dirLight.shadow.camera))
}

window.addEventListener('dblclick', onDocumentMouseDown, false)
var raycaster = new THREE.Raycaster()
var mouse = new THREE.Vector2()
function onDocumentMouseDown(event: any) {
  event.preventDefault()
  mouse.x = (event.clientX / renderer.domElement.clientWidth) * 2 - 1
  mouse.y = -(event.clientY / renderer.domElement.clientHeight) * 2 + 1
  raycaster.setFromCamera(mouse, camera)
  console.log(scene.children)
  var intersects: any = raycaster.intersectObjects(scene.children)
  console.log(intersects)
  if (intersects.length > 0) {
    intersects[0]?.object?.callback()
  }
}
