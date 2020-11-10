<template>
  <b-row class="mt-2">
    <b-col class="text-center">
      <label for="font-color" style="font-size: 15px;">color</label>
    </b-col>
    <b-col>
      <input type="color" v-model="itemColor" @input="setItemColor" />
      <input
        id="font-color"
        type="color"
        v-model="fontBackgroundColor"
        @input="setFontBackgroundColor"
      />
    </b-col>
  </b-row>
</template>

<script>
export default {
  data() {
    return {
      itemColor: '',
      fontBackgroundColor: '',
    };
  },
  methods: {
    setItemColor() {
      this.$store.commit('setItemColor', this.itemColor);
    },
    setFontBackgroundColor() {
      this.$store.commit('setFontBackgroundColor', this.fontBackgroundColor);
    },
  },
};
</script>

<style></style>
