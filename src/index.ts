import { KeyDisplay } from './utils'
import { CharacterControls } from './characterControls'
import * as THREE from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import {
  scene,
  camera,
  renderer,
  orbitControls,
  light,
  generateFloor,
} from './init'
import heritageCollection from './components/HeritageCollection'
import digitalArt from './components/DigitalArt'
import sportsCollection from './components/SportsCollection'
import musicArt from './components/MusicArt'

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

// Walls of collections
heritageCollection()
digitalArt()
sportsCollection()
musicArt()

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
