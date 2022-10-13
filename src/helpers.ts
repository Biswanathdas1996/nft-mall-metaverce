import * as THREE from 'three'
import { buyNft, getNftData } from './Blockckain/Functions'

const onClickOnMesh = async (token: any, image: any) => {
  const buyNowButton: any = document.getElementById('buyNowButton')
  const priceElement: any = document.getElementById('priceElement')
  const ownerElemennt: any = document.getElementById('ownerElemennt')
  priceElement.innerHTML = `<div class="loader"></div>`
  ownerElemennt.innerHTML = `<div class="loader"></div>`

  document.getElementById('transction').style.display = 'none'
  document.getElementById('buyNowButton').style.display = ''
  buyNowButton.disabled = true
  buyNowButton.innerHTML = 'Initializing...'
  const redirectButton: any = document.getElementById('redirectLink')
  redirectButton.href = `https://nftmall.netlify.app/details/${token}`
  document.getElementById('buttonModal').click()

  const nftImg: any = document.getElementById('nftImg')
  nftImg.src = image
  const modalHeader: any = document.getElementById('modalHeader')
  modalHeader.innerHTML = `Token #${token}`
  buyNowButton.setAttribute('token', token)

  const nftData = await getNftData(token)
  console.log('nftData------->', nftData)
  const { owner, account } = nftData
  if (owner === account) {
    buyNowButton.disabled = true
    buyNowButton.innerHTML = 'You own this token'
  } else {
    buyNowButton.disabled = false
    buyNowButton.innerHTML = 'Buy Now'
  }
  priceElement.innerHTML = `${nftData?.price / 1000000000000000000} ETH`
  ownerElemennt.innerHTML = nftData?.owner
}

export const CreateObject = (
  scene: any,
  dimention: any,
  position: any,
  image: string,
  callBack?: any,
) => {
  const geometryC2 = new THREE.BoxGeometry(
    dimention[0],
    dimention[1],
    dimention[2],
  )
  const floorTexture = new THREE.TextureLoader().load(image)
  const materialC2 = new THREE.MeshBasicMaterial({ map: floorTexture })
  const meshC2: any = new THREE.Mesh<any>(geometryC2, materialC2)
  meshC2.position.set(position[0], position[1], position[2])
  meshC2.side = THREE.FrontSide
  if (callBack) {
    meshC2.callback = callBack
  }
  scene.add(meshC2)
}

export const PhotoFrame = (
  scene: any,
  frameDimention: any,
  photoDimention: any,
  position: any,
  image: any,
  token: any,
) => {
  CreateObject(
    scene,
    frameDimention,
    position,
    './textures/img/1200px-Frame.svg.png',
  )
  CreateObject(scene, photoDimention, position, image, function () {
    onClickOnMesh(token, image)
  })
}
