import { Vector3 } from '@babylonjs/core/Maths/math'
import { BoxBuilder } from '@babylonjs/core/Meshes/Builders/boxBuilder'
import { PlaneBuilder } from '@babylonjs/core/Meshes/Builders/planeBuilder'
import { StandardMaterial } from '@babylonjs/core/Materials/standardMaterial'

import { Animation } from '@babylonjs/core/Animations/animation'
import { TransformNode } from '@babylonjs/core/Meshes/transformNode'
import { ArcRotateCamera } from '@babylonjs/core/Cameras/arcRotateCamera'

import '@babylonjs/core/Meshes/instancedMesh'
import '@babylonjs/core/Animations/animatable'

const FACES = 'FBUDLR'
const THREE = [-1, 0, 1]
const HALF_PI = Math.PI / 2

const POINTS = [
  [ 1, 0, 0],
  [-1, 0, 0],
  [0,  1, 0],
  [0, -1, 0],
  [0, 0, -1],
  [0, 0,  1],
]

const COLORS = [
  [0, 0.3, 0.7],
  [0, 0.6, 0.3],
  [1, 1.0, 1.0],
  [1, 0.8, 0.0],
  [0.7, 0, 0.2],
  [1, 0.3, 0.0],
]

const ROTATIONS = [
  [0, -HALF_PI, 0],
  [0,  HALF_PI, 0],
  [ HALF_PI, 0, 0],
  [-HALF_PI, 0, 0],
  [0, 0, 0],
  [Math.PI, 0, 0],
]

const animate = (...params) => new Promise((resolve) => {
  Animation.CreateAndStartAnimation('', ...params).onAnimationEnd = resolve
})

export const createCamera = (scene) => {
  const camera = new ArcRotateCamera('', 0.4, 1.2, 7, Vector3.Zero(), scene)
  camera.wheelPrecision = 100
  camera.lowerRadiusLimit = 6
  camera.upperRadiusLimit = 8
  return camera
}

export const createGeometry = (scene) => {
  const baseCubie = BoxBuilder.CreateBox('', { size: 1 }, scene)
  const cubies = THREE.flatMap((x) => THREE.flatMap((y) => THREE.map((z) => {
    const c = baseCubie.createInstance('')
    c.position.set(x, y, z)
    return c
  })))

  for (const [i, normal] of POINTS.entries()) {
    const temPlane = PlaneBuilder.CreatePlane('', { size: 0.9 }, scene)
    temPlane.material = new StandardMaterial('', scene)
    temPlane.material.ambientColor.set(...COLORS[i])
    temPlane.isVisible = false

    for (const cubie of cubies) {
      const other = cubie.position.add(normal)
      if (cubies.some((c) => c.position.equals(other))) continue
      const p = temPlane.createInstance('')
      p.parent = cubie
      p.rotation.set(...ROTATIONS[i])
      p.position.set(...normal).scaleInPlace(0.501)
    }
  }

  const core = new Map(POINTS.map((p, face) => {
    const axis = p.findIndex((i) => i)
    const mult = HALF_PI * p[axis]
    const coord = 'xyz'[axis]
    const target = `rotation.${coord}`
    const onFace = (c) => c.position.asArray().every((v, i) => !p[i] || p[i] === v)
    const node = new TransformNode('', scene)
    node.position.set(...p)
    return [FACES[face], async (turn, frames = 0) => {
      if (!turn) return
      const angle = mult * turn
      const toRotate = cubies.filter(onFace)
      for (const c of toRotate) c.setParent(node)
      if (frames) {
        await animate(node, target, 60, frames, 0, angle, 0)
      } else {
        node.rotation[coord] = angle
      }
      for (const c of toRotate) {
        c.setParent(null)
        // round to avoid accumulating fp errors
        c.position.set(...c.position.asArray().map((i) => Math.round(i)))
        c.rotation.set(...c.rotation.asArray().map((i) => Math.round(i / HALF_PI) * HALF_PI))
      }
      node.rotation.set(0, 0, 0)
    }]
  }))

  return (face, turn, frames) => core.get(face)?.(turn, frames)
}