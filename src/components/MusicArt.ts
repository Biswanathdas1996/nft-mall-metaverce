import { CreateObject, PhotoFrame } from '../helpers'
import { scene } from '../init'

export default function musicArt() {
  CreateObject(
    scene,
    [0.1, 10, 45],
    [-30, 3, 17],
    './textures/img/360_F_280027991_HGgSVJVCSRkbC88TzqhcxKrSdYz2FyiM.jpg',
  )
  CreateObject(
    scene,
    [10, 0.5, 45],
    [-30, 8, 17],
    './textures/img/photo-1584505192555-4feb7834358a.jpg',
  ) // cilling

  CreateObject(
    scene,
    [0.5, 1, 6],
    [-30, 6.5, 10],
    './textures/img/cooltext421196893368460.png',
  )

  var requestOptions: any = {
    method: 'GET',
    redirect: 'follow',
  }

  fetch(
    'https://endpoints.in/endpoints/metaverce/get_nft.php?category=music',
    requestOptions,
  )
    .then((response) => response.json())
    .then((result) => {
      console.log(result)
      let initial = 41
      result?.map((data: any, index: number) => {
        PhotoFrame(
          scene,
          [0.5, 4, 4],
          [1, 3.0, 3.2],
          [-30, 3, (initial -= 4.5)],

          data?.image_link,
          data?.token_id,
        )
      })
    })
    .catch((error) => console.log('error', error))
}
