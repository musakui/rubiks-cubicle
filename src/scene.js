import { Scene } from '@babylonjs/core/scene'

export const createScene = (engine) => {
  const scene = new Scene(engine)
  scene.clearColor.set(0.1, 0.1, 0.1, 1)
  scene.ambientColor.set(1, 1, 1)
  return scene
}

export const init = import('./geometry.js').then(({ createCamera, createGeometry }) => [createCamera, createGeometry])