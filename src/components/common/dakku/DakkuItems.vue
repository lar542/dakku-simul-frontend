<template>
  <li id="dakku-items">
    <DakkuItemCircleSquare></DakkuItemCircleSquare>
    <DakkuItem
      v-for="previewItem in previewItems"
      :key="previewItem.key"
      :stikerItem="previewItem"
      @showModal="setItemsToModal"
    ></DakkuItem>
    <Modal v-if="showModel">
      <h3 slot="header">
        {{ modalTitle }} made by
        <a
          href="https://www.flaticon.com/kr/authors/freepik"
          title="Freepik"
          target="_blank"
          >Freepik</a
        >
      </h3>
      <p slot="body">
        <b-row v-for="(details, index) in detailItems" :key="index">
          <b-col cols="1" v-for="(item, index) in details" :key="index">
            <button class="btn">
              <img :src="item" class="img-fluid" @click="addStiker(item)" />
            </button>
          </b-col>
        </b-row>
      </p>
      <button slot="footer" class="btn btn-success" @click="changeModal">
        <font-awesome-icon icon="times" size="lg"></font-awesome-icon>
      </button>
    </Modal>
  </li>
</template>

<script>
import DakkuItemCircleSquare from '@/components/common/dakku/items/DakkuItemCircleSquare.vue';
import DakkuItem from '@/components/common/dakku/items/DakkuItem.vue';
import { fetchPreviewItems, fetchItems } from '@/api/items';
import Modal from '@/components/common/modal/DakkuModal.vue';
import { getRandomInt, getRandomLeftTop } from '@/js/fabricjs/utils';

export default {
  data() {
    return {
      previewItems: [],
      showModel: false,
      detailItems: [],
      modalTitle: '',
      baseUrl: process.env.VUE_APP_API_URL,
    };
  },
  methods: {
    async fetchData() {
      const { data } = await fetchPreviewItems('stikers');
      this.previewItems = data;
    },
    async setItemsToModal(name) {
      const { data } = await fetchItems('stikers', name);
      for (let i = 0; i < data.length; i++) {
        for (let j = 0; j < data[i].length; j++) {
          data[i][j] = this.baseUrl + data[i][j];
        }
      }
      this.detailItems = data;
      this.modalTitle = name.substring(4);
      this.changeModal();
    },
    changeModal() {
      this.showModel = !this.showModel;
    },
    addStiker(url) {
      const payload = {
        url: url,
        coord: getRandomLeftTop(),
        angle: getRandomInt(-10, 10),
      };
      this.$store.commit('addSVGStiker', payload);
    },
  },
  created() {
    this.fetchData();
  },
  components: {
    DakkuItemCircleSquare,
    DakkuItem,
    Modal,
  },
};
</script>

<style></style>
