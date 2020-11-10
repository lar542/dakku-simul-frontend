<template>
  <li id="dakku-tool">
    <b-container>
      <DakkuRemover></DakkuRemover>
      <DakkuTextTool></DakkuTextTool>
      <DakkuItemColor></DakkuItemColor>
      <b-row class="mt-5">
        <b-col>
          <b-button variant="info" @click="changeMode">{{ MODE }}</b-button>
        </b-col>
      </b-row>
      <DakkuDrawingTools v-if="isDrawingMode"></DakkuDrawingTools>
    </b-container>
  </li>
</template>

<script>
import DakkuRemover from '@/components/common/dakku/objectTools/DakkuRemover.vue';
import DakkuTextTool from '@/components/common/dakku/objectTools/DakkuTextTool.vue';
import DakkuItemColor from '@/components/common/dakku/objectTools/DakkuItemColor.vue';
import DakkuDrawingTools from '@/components/common/dakku/drawingTools/DakkuDrawingTools.vue';

export default {
  data() {
    return {
      isDrawingMode: false,
      MODE: 'drawing mode',
    };
  },
  methods: {
    changeMode() {
      if (this.isDrawingMode) {
        this.MODE = 'drawing mode';
      } else {
        this.MODE = 'control mode';
      }
      this.isDrawingMode = !this.isDrawingMode;
      this.$store.commit('changeMode');
    },
  },
  components: {
    DakkuRemover,
    DakkuTextTool,
    DakkuItemColor,
    DakkuDrawingTools,
  },
};
</script>

<style></style>
