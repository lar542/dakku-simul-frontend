<template>
  <b-row class="text-center">
    <b-col>
      <span>
        <img
          :src="this.baseUrl + stikerItem.value[0].url"
          class="img-fluid"
          v-on:click="showStikers(stikerItem.value[0].title)"
        />
        <p class="font-weight-bold">
          {{ stikerItem.value[0].title.substring(4) }}
        </p>
      </span>
    </b-col>
    <b-col>
      <span>
        <img
          :src="this.baseUrl + stikerItem.value[1].url"
          class="img-fluid"
          v-on:click="showStikers(stikerItem.value[1].title)"
        />
        <p class="font-weight-bold">
          {{ stikerItem.value[1].title.substring(4) }}
        </p>
      </span>
    </b-col>
  </b-row>
</template>

<script>
export default {
  data() {
    return {
      baseUrl: process.env.VUE_APP_API_URL,
    };
  },
  props: {
    stikerItem: {
      type: Object,
      required: true,
    },
  },
  methods: {
    showStikers(title) {
      this.$emit('showModal', title);
    },
  },
};
</script>

<style></style>
