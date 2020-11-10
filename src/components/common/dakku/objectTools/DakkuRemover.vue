<template>
  <b-row class="mt-2">
    <b-col>
      <b-button-group>
        <b-button variant="danger" @click="clearCanvas">
          <font-awesome-icon icon="eraser"></font-awesome-icon>
        </b-button>
        <b-button variant="danger" @click="deleteSelected">
          <font-awesome-icon icon="trash-alt"></font-awesome-icon>
        </b-button>
        <b-form-select
          class="ml-1"
          v-model="selectedPaper"
          :options="options"
          @change="changePaper"
        ></b-form-select>
      </b-button-group>
    </b-col>
  </b-row>
</template>

<script>
export default {
  data() {
    return {
      selectedPaper: 'free-page',
      options: [
        { value: 'free-page', text: '기본 속지' },
        { value: 'dot-paper', text: '물방울 속지' },
        { value: 'grid-page', text: '모눈 속지' },
        { value: 'harf-line-paper', text: '라인 속지' },
        { value: 'todo-paper', text: '할일 목록 속지' },
      ],
    };
  },
  methods: {
    clearCanvas() {
      if (confirm('현재 캔버스를 비우시겠습니까?')) {
        this.$store.commit('clearCanvas');
      }
    },
    deleteSelected() {
      this.$store.commit('deleteSelected');
    },
    changePaper() {
      this.$store.commit('changePaper', this.selectedPaper);
    },
  },
};
</script>

<style></style>
