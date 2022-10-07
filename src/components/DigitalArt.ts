import { CreateObject, PhotoFrame } from '../helpers'
import { scene } from '../init'

export default function digitalArt() {
  CreateObject(scene, [0.5, 10, 55], [35, 3, 0], './textures/img/marble.jpg')

  PhotoFrame(
    scene,
    [0.5, 5, 5],
    [1, 3.3, 3.5],
    [34, 3, 24],
    './textures/img/images.jpg',
    6,
  )
  PhotoFrame(
    scene,
    [0.5, 5, 5],
    [1, 3.3, 3.5],
    [34, 3, 18],
    './textures/img/rrrr.jpg',
    7,
  )
  PhotoFrame(
    scene,
    [0.5, 5, 5],
    [1, 3.3, 3.5],
    [34, 3, 12],
    './textures/img/pro_1024x1024.jpg',
    13,
  )
  PhotoFrame(
    scene,
    [0.5, 5, 5],
    [1, 3.3, 3.5],
    [34, 3, 6],
    './textures/img/blog1.png',
    3,
  )
  PhotoFrame(
    scene,
    [0.5, 5, 5],
    [1, 3.3, 3.5],
    [34, 3, 0],
    './textures/img/token1.png',
    1,
  )
  PhotoFrame(
    scene,
    [0.5, 5, 5],
    [1, 3.3, 3.5],
    [34, 3, -6],
    './textures/img/token5.jpg',
    5,
  )
  PhotoFrame(
    scene,
    [0.5, 5, 5],
    [1, 3.3, 3.5],
    [34, 3, -12],
    './textures/img/token3.png',
    4,
  )

  CreateObject(
    scene,
    [0.5, 1, 6],
    [34, 7, -5],
    './textures/img/cooltext420830017333234.png',
  )

  CreateObject(
    scene,
    [0.5, 3, 10],
    [-30, 4, 10],
    './textures/img/cooltext420829729532844.png',
  )
}
