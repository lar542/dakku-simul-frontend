<template>
  <div>
    <b-card
      overlay
      img-src="https://cdn.pixabay.com/photo/2016/02/01/12/29/list-1173544_960_720.png"
      img-alt="404"
      text-variant="black"
    >
      <b-card-text style="margin: 200px;">
        404 Page is not found &nbsp;&nbsp;
        <router-link to="/index" class="text-primary"
          >▶ 메인으로 돌아가기 ◀</router-link
        >
      </b-card-text>
    </b-card>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
