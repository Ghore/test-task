<template>
  <div class="success__wrapper">
    <img src="../assets/image/Icon_Success.png" alt="success icon" />
    <p class="success__description">Registration is successful</p>
  </div>
</template>

<script>
export default {
  name: "success",
};
</script>

<style lang="css" scoped>
.success__wrapper {
  display: flex;
}
@media (max-width: 1199px) {
  .success__wrapper {
    padding-top: 22px;
    padding-bottom: 12px;
  }
}

.success__description {
  font-family: FuturaDemiC;
  font-weight: 600;
  font-size: 16px;
  line-height: 19px;
  color: #01a96d;
  margin-left: 12px;
}
</style>
