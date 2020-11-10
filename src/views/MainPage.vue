<template>
  <div>
    <div class="main list-container contents">
      <ul>
        <DakkuDiary></DakkuDiary>
        <DakkuTools></DakkuTools>
        <DakkuItems></DakkuItems>
      </ul>
    </div>
  </div>
</template>

<script>
import DakkuDiary from '@/components/common/dakku/DakkuCanvas.vue';
import DakkuTools from '@/components/common/dakku/DakkuTools.vue';
import DakkuItems from '@/components/common/dakku/DakkuItems.vue';

export default {
  components: {
    DakkuDiary,
    DakkuTools,
    DakkuItems,
  },
};
</script>

<style></style>
