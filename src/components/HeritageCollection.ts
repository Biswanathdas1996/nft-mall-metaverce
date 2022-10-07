import { CreateObject, PhotoFrame } from '../helpers'
import { scene } from '../init'

export default function heritageCollection() {
  CreateObject(scene, [33, 10, 0.5], [11, 3, -12], './textures/img/marble.jpg')
  CreateObject(
    scene,
    [6, 1, 0.5],
    [10, 6.5, -10],
    './textures/img/cooltext420830515242949.png',
  )
  PhotoFrame(
    scene,
    [5, 5, 0.5],
    [3.5, 3.3, 1],
    [22, 3, -10],
    './textures/img/token18.jpg',
    22,
  )
  PhotoFrame(
    scene,
    [5, 5, 0.5],
    [3.5, 3.3, 1],
    [16, 3, -10],
    './textures/img/token19.jpg',
    23,
  )
  PhotoFrame(
    scene,
    [5, 5, 0.5],
    [3.5, 3.3, 1],
    [10, 3, -10],
    './textures/img/token20.png',
    24,
  )
  PhotoFrame(
    scene,
    [5, 5, 0.5],
    [3.5, 3.3, 1],
    [4, 3, -10],
    './textures/img/token23.png',
    25,
  )
  PhotoFrame(
    scene,
    [5, 5, 0.5],
    [3.5, 3.3, 1],
    [-2, 3, -10],
    './textures/img/token22.png',
    26,
  )
}
