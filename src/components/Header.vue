<template>
  <div class="logo__wrapper container">
    <img src="../assets/image/logo.png" alt="bank logo" />
    <img
      class="logo__partners"
      src="../assets/image/Group.png"
      alt="partners logo"
    />
  </div>
</template>

<script>
export default {
  name: "Header",
};
</script>

<style lang="css" scoped>
.logo__wrapper {
  margin-top: 10px;
  display: flex;
}

.logo__partners {
  margin-left: 20px;
}

@media (min-width: 1200px) {
  .logo__wrapper {
    position: absolute;
    left: 30px;
    top: 20px;
  }
}
</style>
