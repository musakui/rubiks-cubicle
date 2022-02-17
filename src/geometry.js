import { Animation } from '@babylonjs/core/Animations/animation'
import { BoxBuilder } from '@babylonjs/core/Meshes/Builders/boxBuilder'
import { PlaneBuilder } from '@babylonjs/core/Meshes/Builders/planeBuilder'
import { StandardMaterial } from '@babylonjs/core/Materials/standardMaterial'

import '@babylonjs/core/Meshes/instancedMesh'
import '@babylonjs/core/Animations/animatable'

import { HALF_PI, POINTS } from './scene.js'

const THREE = [-1, 0, 1]
const FACES = [
  [[0, 0.3, 0.7], [0, -HALF_PI, 0]],
  [[0, 0.6, 0.3], [0,  HALF_PI, 0]],
  [[1, 1.0, 1.0], [ HALF_PI, 0, 0]],
  [[1, 0.8, 0.0], [-HALF_PI, 0, 0]],
  [[0.7, 0, 0.2], [0, 0, 0]],
  [[1, 0.3, 0.0], [Math.PI, 0, 0]],
]

export const createCubies = (scene) => {
  const baseCubie = BoxBuilder.CreateBox('', { size: 1 }, scene)
  const cubies = THREE.flatMap((x) => THREE.flatMap((y) => THREE.map((z) => {
    const c = baseCubie.createInstance('')
    c.position.set(x, y, z)
    return c
  })))

  for (const [i, normal] of POINTS.entries()) {
    const temPlane = PlaneBuilder.CreatePlane('', { size: 0.9 }, scene)
    temPlane.material = new StandardMaterial('', scene)
    temPlane.material.ambientColor.set(...FACES[i][0])
    temPlane.isVisible = false

    for (const cubie of cubies) {
      const other = cubie.position.add(normal)
      if (cubies.some((c) => c.position.equals(other))) continue
      const p = temPlane.createInstance('')
      p.parent = cubie
      p.rotation.set(...FACES[i][1])
      p.position.set(...normal).scaleInPlace(0.501)
    }
  }

  return cubies
}

export const animate = (...params) => new Promise(async (resolve) => {
  Animation.CreateAndStartAnimation('', ...params).onAnimationEnd = resolve
})