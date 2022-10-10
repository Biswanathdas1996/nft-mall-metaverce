import { CreateObject, PhotoFrame } from '../helpers'
import { scene } from '../init'

export default function digitalArt() {
  CreateObject(scene, [0.5, 10, 75], [35, 3, 0], './textures/img/marble.jpg')
  CreateObject(scene, [0.1, 10, 37], [15, 3, 0], './textures/img/marble.jpg')

  CreateObject(
    scene,
    [0.5, 1, 6],
    [15, 7, -5],
    './textures/img/cooltext420830017333234.png',
  )

  var requestOptions: any = {
    method: 'GET',
    redirect: 'follow',
  }

  fetch(
    'https://sosal.in/endpoints/metaverce/get_nft.php?category=art',
    requestOptions,
  )
    .then((response) => response.json())
    .then((result) => {
      console.log(result)
      let backWallinitial = 39

      let frontWall = result?.slice(0, 8)
      let backWall = result?.slice(8, 10000)

      backWall?.map((data: any, index: number) => {
        PhotoFrame(
          scene,
          [0.5, 4, 4],
          [1, 3.0, 3.2],
          [34, 3, (backWallinitial -= 4.5)],
          data?.image_link,
          data?.token_id,
        )
      })
      let frontWallinitial = 20
      frontWall?.map((data: any, index: number) => {
        PhotoFrame(
          scene,
          [0.5, 4, 4],
          [1, 3.0, 3.2],
          [15, 3, (frontWallinitial -= 4.5)],
          data?.image_link,
          data?.token_id,
        )
      })
    })
    .catch((error) => console.log('error', error))

  // PhotoFrame(
  //   scene,
  //   [0.5, 5, 5],
  //   [1, 3.3, 3.5],
  //   [34, 3, 24],
  //   './textures/img/images.jpg',
  //   6,
  // )
  // PhotoFrame(
  //   scene,
  //   [0.5, 5, 5],
  //   [1, 3.3, 3.5],
  //   [34, 3, 18],
  //   './textures/img/rrrr.jpg',
  //   7,
  // )
  // PhotoFrame(
  //   scene,
  //   [0.5, 5, 5],
  //   [1, 3.3, 3.5],
  //   [34, 3, 12],
  //   './textures/img/pro_1024x1024.jpg',
  //   13,
  // )
  // PhotoFrame(
  //   scene,
  //   [0.5, 5, 5],
  //   [1, 3.3, 3.5],
  //   [34, 3, 6],
  //   './textures/img/blog1.png',
  //   3,
  // )
  // PhotoFrame(
  //   scene,
  //   [0.5, 5, 5],
  //   [1, 3.3, 3.5],
  //   [34, 3, 0],
  //   './textures/img/token1.png',
  //   1,
  // )
  // PhotoFrame(
  //   scene,
  //   [0.5, 5, 5],
  //   [1, 3.3, 3.5],
  //   [34, 3, -6],
  //   './textures/img/token5.jpg',
  //   5,
  // )
  // PhotoFrame(
  //   scene,
  //   [0.5, 5, 5],
  //   [1, 3.3, 3.5],
  //   [34, 3, -12],
  //   './textures/img/token3.png',
  //   4,
  // )

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
