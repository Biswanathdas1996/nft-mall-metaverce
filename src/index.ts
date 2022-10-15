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
import { buyNft } from './Blockckain/Functions'

// LIGHTS
light()

// FLOOR
generateFloor()

var characterControls: CharacterControls
// -------------------------------------pillers....
// MODEL WITH ANIMATIONS

new GLTFLoader().load('models/Piller.glb', function (gltf) {
  const model = gltf.scene
  model.position.set(-5, 0, -15)
  model.scale.set(20, 32, 20)
  console.log('----model', model)
  scene.add(model)
})

new GLTFLoader().load('models/Piller.glb', function (gltf) {
  const model = gltf.scene
  model.position.set(-35, 0, -15)
  model.scale.set(20, 32, 20)
  scene.add(model)
})
new GLTFLoader().load('models/Piller.glb', function (gltf) {
  const model = gltf.scene
  model.position.set(-30, 0, -5)
  model.scale.set(20, 32, 20)
  scene.add(model)
})
new GLTFLoader().load('models/Piller.glb', function (gltf) {
  const model = gltf.scene
  model.position.set(-30, 0, 40)
  model.scale.set(20, 32, 20)
  scene.add(model)
})
new GLTFLoader().load('models/Piller.glb', function (gltf) {
  const model = gltf.scene
  model.position.set(-10, 0, 30)
  model.scale.set(20, 32, 20)
  console.log('----model', model)
  scene.add(model)
})
new GLTFLoader().load('models/Piller.glb', function (gltf) {
  const model = gltf.scene
  model.position.set(23, 0, 30)
  model.scale.set(20, 32, 20)
  console.log('----model', model)
  scene.add(model)
})
new GLTFLoader().load('models/Piller.glb', function (gltf) {
  const model = gltf.scene
  model.position.set(15, 0, 19)
  model.scale.set(20, 32, 20)
  console.log('----model', model)
  scene.add(model)
})

new GLTFLoader().load('models/Piller.glb', function (gltf) {
  const model = gltf.scene
  model.position.set(-39, 0, -37)
  model.scale.set(20, 32, 20)
  console.log('----model', model)
  scene.add(model)
})
new GLTFLoader().load('models/Piller.glb', function (gltf) {
  const model = gltf.scene
  model.position.set(15, 0, -19)
  model.scale.set(20, 32, 20)
  console.log('----model', model)
  scene.add(model)
})
// -------------------------------------pillers....

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
  renderer.setAnimationLoop(function () {
    renderer.render(scene, camera)
  })

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

const buyNowButton: any = document.getElementById('buyNowButton')
buyNowButton.addEventListener(
  'click',
  async () => {
    buyNowButton.disabled = true
    buyNowButton.innerHTML = `<div style="display:flex; ">Transction Initialized, <div class="loader" style="margin-left:10px;"></div></div> `
    const token = buyNowButton.getAttribute('token')
    const response = await buyNft(Number(token))
    console.log('----response---->', response)
    if (response?.error) {
      console.log(response?.error?.message)
      buyNowButton.disabled = false
      buyNowButton.innerHTML = 'Buy Now'
    } else {
      document.getElementById('transction').style.display = 'block'
      document.getElementById('buyNowButton').style.display = 'none'
      document.getElementById('transctionHash').innerHTML =
        response?.transactionHash
      const transctionHashElement: any = document.getElementById(
        'transctionHashRedirectLink',
      )
      transctionHashElement.href = `https://goerli.etherscan.io/tx/${response?.transactionHash}`
      document.getElementById('blockNumber').innerHTML = response?.blockNumber
    }
  },
  false,
)
