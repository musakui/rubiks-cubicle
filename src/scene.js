import { Scene } from '@babylonjs/core/scene'
import { Vector3 } from '@babylonjs/core/Maths/math'
import { ArcRotateCamera } from '@babylonjs/core/Cameras/arcRotateCamera'

import { TransformNode } from '@babylonjs/core/Meshes/transformNode'

const FACES = 'FBUDLR'
export const HALF_PI = Math.PI / 2
export const POINTS = [
  [ 1, 0, 0],
  [-1, 0, 0],
  [0,  1, 0],
  [0, -1, 0],
  [0, 0, -1],
  [0, 0,  1],
]

export const createScene = (engine) => {
  const scene = new Scene(engine)
  const camera = new ArcRotateCamera('', 0.4, 1.2, 7, Vector3.Zero(), scene)
  camera.wheelPrecision = 100
  camera.lowerRadiusLimit = 6
  camera.upperRadiusLimit = 8
  camera.attachControl(engine.getRenderingCanvas(), true)
  scene.clearColor.set(0.1, 0.1, 0.1, 1)
  scene.ambientColor.set(1, 1, 1)
  return scene
}

export const createRotator = (scene, cubies, animate) => {
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