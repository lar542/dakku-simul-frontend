<template>
  <div>
    <b-row class="mt-2">
      <b-col>
        <b-button block squared variant="primary" @click="addTextItem"
          >T</b-button
        >
      </b-col>
    </b-row>
    <b-row class="mt-2">
      <b-col>
        <b-form-select
          v-model="selectedFontFamily"
          :options="options"
          @change="setFontFamily"
        ></b-form-select>
      </b-col>
    </b-row>
    <b-row class="mt-2">
      <b-col>
        <b-button-group>
          <b-button variant="primary" @click="setFontWeightBold">
            <font-awesome-icon icon="bold"></font-awesome-icon>
          </b-button>
          <b-button variant="primary" @click="setFontItalic">
            <font-awesome-icon icon="italic"></font-awesome-icon>
          </b-button>
          <b-button variant="primary" @click="setFontUnderline">
            <font-awesome-icon icon="underline"></font-awesome-icon>
          </b-button>
        </b-button-group>
      </b-col>
    </b-row>
    <b-row class="mt-2">
      <b-col>
        <b-button-group>
          <b-button variant="primary" @click="setFontAlignLeft">
            <font-awesome-icon icon="align-left"></font-awesome-icon>
          </b-button>
          <b-button variant="primary" @click="setFontAlignCenter">
            <font-awesome-icon icon="align-center"></font-awesome-icon>
          </b-button>
          <b-button variant="primary" @click="setFontAlignRight">
            <font-awesome-icon icon="align-right"></font-awesome-icon>
          </b-button>
        </b-button-group>
      </b-col>
    </b-row>
    <b-row class="mt-2">
      <b-col class="text-center">
        <label for="font-size" style="font-size: 15px;">
          font <span>{{ fontSize }}</span>
        </label>
      </b-col>
      <b-col>
        <b-form-input
          id="font-size"
          type="range"
          v-model="fontSize"
          @input="setFontSize"
          value="fontSize"
          min="5"
          max="100"
        ></b-form-input>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import { fabric } from 'fabric';
import { getRandomLeftTop } from '@/js/fabricjs/utils';
import { mapMutations } from 'vuex';

export default {
  data() {
    return {
      fontSize: 30,
      selectedFontFamily: 'fantasy',
      options: [
        { value: 'fantasy', text: 'fantasy' },
        { value: 'cursive', text: 'cursive' },
        { value: 'monospace', text: 'monospace' },
        { value: 'Times New Roman', text: 'Times New Roman' },
        { value: 'Pacifico', text: 'Pacifico' },
      ],
    };
  },
  methods: {
    addTextItem() {
      const coord = getRandomLeftTop();
      this.$store.commit(
        'addTextItem',
        new fabric.Textbox('Hello World!', {
          left: coord.left,
          top: coord.top,
          width: 300,
          fontWidth: 200,
          fontSize: this.fontSize,
          fontFamily: this.selectedFontFamily,
        }),
      );
    },
    setFontSize() {
      this.$store.commit('setFontSize', this.fontSize);
    },
    setFontFamily() {
      this.$store.commit('setFontFamily', this.selectedFontFamily);
    },
    ...mapMutations({
      setFontWeightBold: 'setFontWeightBold',
      setFontItalic: 'setFontItalic',
      setFontUnderline: 'setFontUnderline',
      setFontAlignLeft: 'setFontAlignLeft',
      setFontAlignCenter: 'setFontAlignCenter',
      setFontAlignRight: 'setFontAlignRight',
    }),
  },
};
</script>

<style></style>
