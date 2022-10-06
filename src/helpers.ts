import * as THREE from 'three'

const onClickOnMesh = (token: any, image: any) => {
  const redirectButton: any = document.getElementById('redirectLink')
  redirectButton.href = `https://nftmall.netlify.app/details/${token}`
  document.getElementById('buttonModal').click()
  const nftImg: any = document.getElementById('nftImg')
  nftImg.src = image
  const modalHeader: any = document.getElementById('modalHeader')
  modalHeader.innerHTML = `Token #${token}`
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
