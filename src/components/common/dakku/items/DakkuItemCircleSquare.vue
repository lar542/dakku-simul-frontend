<template>
  <b-row>
    <b-col class="text-center">
      <span @click="addItem('circle')">
        <font-awesome-icon
          icon="circle"
          size="6x"
          class="text-warning"
        ></font-awesome-icon>
        <p class="font-weight-bold">circle</p>
      </span>
    </b-col>
    <b-col class="text-center">
      <span @click="addItem('square')">
        <font-awesome-icon
          icon="square-full"
          size="6x"
          class="text-warning"
        ></font-awesome-icon>
        <p class="font-weight-bold">square</p>
      </span>
    </b-col>
  </b-row>
</template>

<script>
import { fabric } from 'fabric';
import { getRandomLeftTop, getRandomColor } from '@/js/fabricjs/utils';

export default {
  methods: {
    addItem(type) {
      const coord = getRandomLeftTop();
      let item = null;
      if (type === 'circle') {
        item = this.fabricCircle(coord);
      } else if (type === 'square') {
        item = this.fabricRect(coord);
      }
      this.$store.commit('addItem', item);
    },
    fabricCircle(coord) {
      return new fabric.Circle({
        left: coord.left,
        top: coord.top,
        fill: getRandomColor(),
        radius: 50,
      });
    },
    fabricRect(coord) {
      return new fabric.Rect({
        left: coord.left,
        top: coord.top,
        fill: getRandomColor(),
        width: 100,
        height: 100,
      });
    },
  },
};
</script>

<style></style>
