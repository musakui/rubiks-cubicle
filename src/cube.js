import { Scene } from '@babylonjs/core/scene'
import { Engine } from '@babylonjs/core/Engines/engine'
import { Vector3, Color3, Color4 } from '@babylonjs/core/Maths/math'

import { TransformNode } from '@babylonjs/core/Meshes/transformNode'
import { ArcRotateCamera } from '@babylonjs/core/Cameras/arcRotateCamera'
import { StandardMaterial } from '@babylonjs/core/Materials/standardMaterial'

import { Animation } from '@babylonjs/core/Animations/animation'
import { BoxBuilder } from '@babylonjs/core/Meshes/Builders/boxBuilder'
import { PlaneBuilder } from '@babylonjs/core/Meshes/Builders/planeBuilder'

import '@babylonjs/core/Meshes/instancedMesh'
import '@babylonjs/core/Animations/animatable'

const THREE = [0, 1, 2]
const HALF_PI = Math.PI / 2
const PLANE_INFO = [
  [[1, 1.0, 1.0], [0,  1, 0], [ HALF_PI, 0, 0]],
  [[1, 0.8, 0.0], [0, -1, 0], [-HALF_PI, 0, 0]],
  [[0, 0.3, 0.7], [ 1, 0, 0], [0, -HALF_PI, 0]],
  [[0, 0.6, 0.3], [-1, 0, 0], [0,  HALF_PI, 0]],
  [[1, 0.3, 0.0], [0, 0,  1], [Math.PI, 0, 0]],
  [[0.7, 0, 0.2], [0, 0, -1], [0, 0, 0]],
]

const NOTATION = {
  F: [0, 2], B: [0, 0],
  U: [1, 2], D: [1, 0],
  R: [2, 2], L: [2, 0],
}

export const createCube = (canvas) => {
  if (!canvas) return null

  const engine = new Engine(canvas, true)
  const scene = new Scene(engine)
  const lights = (v) => { scene.ambientColor = new Color3(v, v, v) }
  const mainNode = new TransformNode('', scene)

  const tempCubie = BoxBuilder.CreateBox('', { size: 1 }, scene)
  tempCubie.isVisible = false
  tempCubie.material = new StandardMaterial('', scene)
  tempCubie.material.disableLighting = true

  const cubies = THREE.flatMap((x) => THREE.flatMap((y) => THREE.map((z) => {
    const c = tempCubie.createInstance('')
    c.position = new Vector3(x, y, z)
    c.parent = mainNode
    return c
  })))

  const centerPoint = cubies.reduce((t, c) => t.addInPlace(c.position), Vector3.Zero()).scale(1 / 27)

  const camera = new ArcRotateCamera('', 0.4, HALF_PI - 0.4, 7, centerPoint, scene)
  camera.wheelPrecision = 100
  camera.lowerRadiusLimit = 6
  camera.upperRadiusLimit = 8
  camera.attachControl(canvas, true)
  scene.clearColor = new Color4(0.1, 0.1, 0.1, 1.0)

  for (const [color, normal, rotation] of PLANE_INFO) {
    const temPlane = PlaneBuilder.CreatePlane('', { size: 0.9 }, scene)
    temPlane.isVisible = false
    temPlane.parent = mainNode
    temPlane.material = new StandardMaterial('', scene)
    temPlane.material.ambientColor = new Color3(...color)
    temPlane.material.disableLighting = true

    for (const c of cubies) {
      if (cubies.some((o) => o.position.equals(c.position.add(normal)))) continue
      const p = temPlane.createInstance('')
      p.parent = c
      p.rotation = new Vector3(...rotation)
      p.position = new Vector3(...normal)
      p.position.scaleInPlace(0.501)
    }
  }

  lights(0.1)
  engine.runRenderLoop(() => scene.render())

  const rotate = async (face, turn, frames = 2) => {
    if (!turn) return
    const [axis, layer] = NOTATION[face]
    const property = `rotation.${'xyz'[axis]}`
    const angle = HALF_PI * turn * (layer ? 1 : -1)

    const toRotate = cubies.filter(({ position: { x, y, z } }) => [x, y, z][axis] === layer)

    const node = new TransformNode('', scene)
    node.position = new Vector3(...[0, 1, 2].map((i) => axis === i ? layer : 0))
    node.position.addInPlace(centerPoint)
    node.parent = mainNode
    for (const c of toRotate) c.setParent(node)

    await new Promise((resolve) => {
      Animation.CreateAndStartAnimation('', node, property, 60, frames, 0, angle, 0).onAnimationEnd = resolve
    })

    for (const c of toRotate) {
      c.setParent(mainNode)
      // round positions & rotations to avoid accumulating FP errors
      const { x, y, z } = c.rotation
      c.rotation.set(...[x, y, z].map((i) => Math.round(i / HALF_PI) * HALF_PI))
      c.position.set(Math.round(c.position.x), Math.round(c.position.y), Math.round(c.position.z))
    }

    node.dispose()
  }

  return {
    lights,
    rotate,
    dispose: () => (scene.dispose(), engine.dispose()),
  }
}
