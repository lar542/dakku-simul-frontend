<template>
  <div class="app">
    <DakkuHeader></DakkuHeader>
    <div class="app-contents">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import DakkuHeader from '@/components/common/DakkuHeader.vue';

export default {
  components: {
    DakkuHeader,
  },
};
</script>

<style>
@import './css/reset.css';
@import './css/common.css';
</style>
