import { CreateObject, PhotoFrame } from '../helpers'
import { scene } from '../init'

export default function sportsCollection() {
  CreateObject(scene, [50, 10, 0.5], [1, 3, -37], './textures/img/marble.jpg') // front

  CreateObject(
    scene,
    [6, 1, 0.5],
    [-2, 6.5, -35],
    './textures/img/cooltext420831018997673.png',
  )
  PhotoFrame(
    scene,
    [5, 5, 0.5],
    [3.5, 3.3, 1],
    [-20, 3, -35],
    './textures/img/token7.jpg',
    7,
  )
  PhotoFrame(
    scene,
    [5, 5, 0.5],
    [3.5, 3.3, 1],
    [-14, 3, -35],
    './textures/img/token8.jpg',
    8,
  )
  PhotoFrame(
    scene,
    [5, 5, 0.5],
    [3.5, 3.3, 1],
    [-8, 3, -35],
    './textures/img/Token9.jpg',
    9,
  )
  PhotoFrame(
    scene,
    [5, 5, 0.5],
    [3.5, 3.3, 1],
    [-2, 3, -35],
    './textures/img/token14.jpg',
    14,
  )
  PhotoFrame(
    scene,
    [5, 5, 0.5],
    [3.5, 3.3, 1],
    [4, 3, -35],
    './textures/img/token15.jpg',
    15,
  )
  PhotoFrame(
    scene,
    [5, 5, 0.5],
    [3.5, 3.3, 1],
    [10, 3, -35],
    './textures/img/token17.png',
    17,
  )
  PhotoFrame(
    scene,
    [5, 5, 0.5],
    [3.5, 3.3, 1],
    [16, 3, -35],
    './textures/img/token23.jpg',
    23,
  )
  PhotoFrame(
    scene,
    [5, 5, 0.5],
    [3.5, 3.3, 1],
    [22, 3, -35],
    './textures/img/token24.jpg',
    24,
  )
}
