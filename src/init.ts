import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { VRButton } from 'three/examples/jsm/webxr/VRButton.js'

// SCENE
export const scene = new THREE.Scene()
scene.background = new THREE.Color(0xa8def0)

// CAMERA
export const camera = new THREE.PerspectiveCamera(
  45,
  window.innerWidth / window.innerHeight,
  0.1,
  1000,
)
camera.position.y = 5
camera.position.z = 5
camera.position.x = 0

// RENDERER
export const renderer = new THREE.WebGLRenderer({ antialias: true })
renderer.setSize(window.innerWidth, window.innerHeight)
renderer.setPixelRatio(window.devicePixelRatio)
renderer.shadowMap.enabled = true

// CONTROLS
export const orbitControls = new OrbitControls(camera, renderer.domElement)
document.body.appendChild(VRButton.createButton(renderer))
renderer.xr.enabled = true

orbitControls.enableDamping = true
orbitControls.minDistance = 5
orbitControls.maxDistance = 15
orbitControls.enablePan = false
orbitControls.maxPolarAngle = Math.PI / 2 - 0.05
orbitControls.update()

export function light() {
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

export function generateFloor() {
  // TEXTURES
  const textureLoader = new THREE.TextureLoader()
  const placeholder = textureLoader.load(
    './textures/placeholder/placeholder.png',
  )
  const sandBaseColor = textureLoader.load(
    './textures/img/ae896ce99626ec6d3033c47c29ffb1f1.jpg',
  )
  const sandNormalMap = textureLoader.load(
    './textures/img/ae896ce99626ec6d3033c47c29ffb1f1.jpg',
  )
  const sandHeightMap = textureLoader.load(
    './textures/img/ae896ce99626ec6d3033c47c29ffb1f1.jpg',
  )
  const sandAmbientOcclusion = textureLoader.load(
    './textures/img/ae896ce99626ec6d3033c47c29ffb1f1.jpg',
  )

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
