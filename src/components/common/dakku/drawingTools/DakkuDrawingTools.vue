<template>
  <div>
    <b-row class="mt-2">
      <b-col>
        <b-form-select
          v-model="selectedDrawingType"
          :options="options"
          @change="setDrawingType"
        ></b-form-select>
      </b-col>
    </b-row>
    <b-row class="mt-2">
      <b-col class="text-center">
        <label for="drawing-line-width" style="font-size: 15px;">
          brush <span>{{ lineWidth }}</span>
        </label>
      </b-col>
      <b-col>
        <b-form-input
          id="drawing-line-width"
          type="range"
          v-model="lineWidth"
          @input="setLineWidth"
          value="lineWidth"
          min="1"
          max="150"
        ></b-form-input>
      </b-col>
    </b-row>
    <b-row class="mt-2">
      <b-col class="text-center">
        <label for="drawing-color" style="font-size: 15px;">color</label>
      </b-col>
      <b-col>
        <input
          id="drawing-color"
          type="color"
          v-model="lineColor"
          @input="setLineColor"
        />
        <input type="color" v-model="shadowColor" @input="setShadowColor" />
      </b-col>
    </b-row>
    <b-row class="mt-2">
      <b-col>
        <label for="shadow-width" style="font-size: 15px;">
          shadow
          <span>{{ shadowWidth }}</span>
        </label>
      </b-col>
      <b-col>
        <b-form-input
          id="shadow-width"
          type="range"
          v-model="shadowWidth"
          @input="setShadowWidth"
          value="shadowWidth"
          min="0"
          max="50"
        ></b-form-input>
      </b-col>
    </b-row>
    <b-row class="mt-2">
      <b-col>
        <label for="shadow-offet" style="font-size: 15px;">
          offet
          <span>{{ shadowOffet }}</span>
        </label>
      </b-col>
      <b-col>
        <b-form-input
          id="shadow-offet"
          type="range"
          v-model="shadowOffet"
          @input="setShadowOffet"
          value="shadowOffet"
          min="0"
          max="50"
        ></b-form-input>
      </b-col>
    </b-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selectedDrawingType: 'Pencil',
      options: [
        { value: 'Pencil', text: '연필' },
        { value: 'Circle', text: '물방울' },
        { value: 'Spray', text: '스프레이' },
      ],
      lineColor: '#000000',
      lineWidth: 30,
      shadowColor: '#000000',
      shadowWidth: 0,
      shadowOffet: 0,
    };
  },
  created() {
    const payload = this.initOptions();
    this.$store.commit('initOptions', payload);
  },
  methods: {
    initOptions() {
      return {
        type: this.selectedDrawingType,
        drawingColor: this.lineColor,
        drawingLineWidth: parseInt(this.lineWidth, 10) || 1,
        shadowInstance: {
          blur: parseInt(this.shadowWidth, 10) || 0,
          offsetX: 0,
          offsetY: 0,
          affectStroke: true,
          color: this.shadowColor,
        },
      };
    },
    setDrawingType() {
      const payload = this.initOptions();
      this.$store.commit('setDrawingType', payload);
    },
    setLineColor() {
      this.$store.commit('setLineColor', this.lineColor);
    },
    setShadowColor() {
      this.$store.commit('setShadowColor', this.shadowColor);
    },
    setLineWidth() {
      this.$store.commit('setLineWidth', parseInt(this.lineWidth, 10) || 1);
    },
    setShadowWidth() {
      this.$store.commit('setShadowWidth', parseInt(this.shadowWidth, 10) || 0);
    },
    setShadowOffet() {
      const payload = {
        offsetX: parseInt(this.shadowOffet, 10) || 0,
        offsetY: parseInt(this.shadowOffet, 10) || 0,
      };
      this.$store.commit('setShadowOffet', payload);
    },
  },
};
</script>

<style></style>
