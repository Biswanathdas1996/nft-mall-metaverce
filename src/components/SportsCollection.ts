import { CreateObject, PhotoFrame } from '../helpers'
import { scene } from '../init'

export default function sportsCollection() {
  CreateObject(scene, [80, 10, 0.5], [1, 3, -37], './textures/img/marble.jpg') // front

  CreateObject(
    scene,
    [6, 1, 0.5],
    [-2, 6.5, -35],
    './textures/img/cooltext420831018997673.png',
  )

  CreateObject(scene, [30, 10, 0.2], [-20, 3, -15], './textures/img/marble.jpg') // front

  CreateObject(
    scene,
    [6, 1, 0.5],
    [-22, 6.5, -15],
    './textures/img/cooltext420831018997673.png',
  )

  var requestOptions: any = {
    method: 'GET',
    redirect: 'follow',
  }

  fetch(
    'https://sosal.in/endpoints/metaverce/get_nft.php?category=sports',
    requestOptions,
  )
    .then((response) => response.json())
    .then((result) => {
      console.log(result)

      let frontWall = result?.slice(0, 6)
      let backWall = result?.slice(6, 10000)

      let initialFrontWall = -4
      frontWall?.map((data: any, index: number) => {
        PhotoFrame(
          scene,
          [4, 4, 0.5],
          [3.2, 3.0, 1],
          [(initialFrontWall -= 4.5), 3, -15],
          data?.image_link,
          data?.token_id,
        )
      })

      let initialBackWall = 35
      backWall?.map((data: any, index: number) => {
        PhotoFrame(
          scene,
          [4, 4, 0.5],
          [3.2, 3.0, 1],
          [(initialBackWall -= 4.5), 3, -35],
          data?.image_link,
          data?.token_id,
        )
      })
    })
    .catch((error) => console.log('error', error))

  // PhotoFrame(
  //   scene,
  //   [5, 5, 0.5],
  //   [3.5, 3.3, 1],
  //   [-20, 3, -35],
  //   './textures/img/token7.jpg',
  //   14,
  // )
  // PhotoFrame(
  //   scene,
  //   [5, 5, 0.5],
  //   [3.5, 3.3, 1],
  //   [-14, 3, -35],
  //   './textures/img/token8.jpg',
  //   15,
  // )
  // PhotoFrame(
  //   scene,
  //   [5, 5, 0.5],
  //   [3.5, 3.3, 1],
  //   [-8, 3, -35],
  //   './textures/img/Token9.jpg',
  //   16,
  // )
  // PhotoFrame(
  //   scene,
  //   [5, 5, 0.5],
  //   [3.5, 3.3, 1],
  //   [-2, 3, -35],
  //   './textures/img/token14.jpg',
  //   17,
  // )
  // PhotoFrame(
  //   scene,
  //   [5, 5, 0.5],
  //   [3.5, 3.3, 1],
  //   [4, 3, -35],
  //   './textures/img/token15.jpg',
  //   18,
  // )
  // PhotoFrame(
  //   scene,
  //   [5, 5, 0.5],
  //   [3.5, 3.3, 1],
  //   [10, 3, -35],
  //   './textures/img/token17.png',
  //   19,
  // )
  // PhotoFrame(
  //   scene,
  //   [5, 5, 0.5],
  //   [3.5, 3.3, 1],
  //   [16, 3, -35],
  //   './textures/img/token23.jpg',
  //   20,
  // )
  // PhotoFrame(
  //   scene,
  //   [5, 5, 0.5],
  //   [3.5, 3.3, 1],
  //   [22, 3, -35],
  //   './textures/img/token24.jpg',
  //   21,
  // )
}
