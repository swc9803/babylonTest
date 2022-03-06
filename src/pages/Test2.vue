<template>
  <canvas ref="canvas"></canvas>
</template>

<script>
import { onMounted, ref } from 'vue'
import * as BABYLON from 'babylonjs'
// import { Scene, Engine } from 'babylonjs';
export default {
  setup () {
    const canvas = ref()
    onMounted(() => {
      const engine = new BABYLON.Engine(canvas.value, true)
      const createScene = function () {
        const scene = new BABYLON.Scene(engine)
        scene.clearColor = new BABYLON.Color3.Black()

        const alpha = Math.PI / 4
        const beta = Math.PI / 3
        const radius = 8
        const target = new BABYLON.Vector3(0, 0, 0)

        const camera = new BABYLON.ArcRotateCamera('Camera', alpha, beta, radius, target, scene)
        camera.attachControl(canvas.value, true)

        // eslint-disable-next-line no-unused-vars
        const light = new BABYLON.HemisphericLight('light', new BABYLON.Vector3(1, 1, 0))

        const box = BABYLON.MeshBuilder.CreateBox('box', {})
        box.position.x = 0.5
        box.position.y = 1

        const boxMaterial = new BABYLON.StandardMaterial('material', scene)
        boxMaterial.diffuseColor = BABYLON.Color3.Random()
        box.material = boxMaterial

        box.actionManager = new BABYLON.ActionManager(scene)
        box.actionManager.registerAction(
          new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.OnPickTrigger,
            function (evt) {
              const sourceBox = evt.meshUnderPointer
              sourceBox.position.x += 0.1
              sourceBox.position.y += 0.1

              boxMaterial.diffuseColor = BABYLON.Color3.Random()
            }
          )
        )

        return scene
      }
      const sceneToRender = createScene()
      engine.runRenderLoop(function () {
        sceneToRender.render()
      })
    })
    return {
      canvas
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
