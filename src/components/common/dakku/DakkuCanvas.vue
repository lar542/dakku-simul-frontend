<template>
  <li id="dakku-contents">
    <div>
      <canvas id="canvas" class="border"></canvas>
    </div>
  </li>
</template>

<script>
import { fabric } from 'fabric';

export default {
  mounted() {
    const canvas = new fabric.Canvas('canvas', {
      backgroundColor: null,
      isDrawingMode: false,
      width: 1100,
      height: 850,
    });
    const img = new Image();
    img.src = this.$store.getters.getPaperType;
    img.onload = function() {
      const f_img = new fabric.Image(img);
      canvas.setBackgroundImage(f_img);
      canvas.renderAll();
    };
    this.$store.commit('setCanvas', canvas);
  },
};
</script>

<style></style>
