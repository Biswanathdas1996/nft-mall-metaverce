import { CreateObject, PhotoFrame } from '../helpers'
import { scene } from '../init'

export default function heritageCollection() {
  CreateObject(scene, [33, 10, 0.3], [6, 3, 30], './textures/img/marble.jpg')
  CreateObject(
    scene,
    [33, 0.5, 10],
    [6, 8, 30],
    './textures/img/photo-1584505192555-4feb7834358a.jpg',
  ) // cilling
  CreateObject(
    scene,
    [6, 1, 0.5],
    [10, 6.5, 30],
    './textures/img/cooltext420830515242949.png',
  )

  var requestOptions: any = {
    method: 'GET',
    redirect: 'follow',
  }

  fetch(
    'https://sosal.in/endpoints/metaverce/get_nft.php?category=Heritage',
    requestOptions,
  )
    .then((response) => response.json())
    .then((result) => {
      console.log(result)
      let initial = 24
      result?.map((data: any, index: number) => {
        PhotoFrame(
          scene,
          [5, 5, 0.5],
          [3.5, 3.3, 1],
          [(initial -= 6), 3, 30],
          data?.image_link,
          data?.token_id,
        )
      })
    })
    .catch((error) => console.log('error', error))

  // 22, 16, 10, 4

  // PhotoFrame(
  //   scene,
  //   [5, 5, 0.5],
  //   [3.5, 3.3, 1],
  //   [22, 3, -10],
  //   './textures/img/token18.jpg',
  //   26,
  // )
  // PhotoFrame(
  //   scene,
  //   [5, 5, 0.5],
  //   [3.5, 3.3, 1],
  //   [16, 3, -10],
  //   './textures/img/token19.jpg',
  //   25,
  // )
  // PhotoFrame(
  //   scene,
  //   [5, 5, 0.5],
  //   [3.5, 3.3, 1],
  //   [10, 3, -10],
  //   './textures/img/token20.png',
  //   24,
  // )
  // PhotoFrame(
  //   scene,
  //   [5, 5, 0.5],
  //   [3.5, 3.3, 1],
  //   [4, 3, -10],
  //   './textures/img/token23.png',
  //   23,
  // )
  // PhotoFrame(
  //   scene,
  //   [5, 5, 0.5],
  //   [3.5, 3.3, 1],
  //   [-2, 3, -10],
  //   './textures/img/token22.png',
  //   22,
  // )
}
