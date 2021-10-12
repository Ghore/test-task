<template>
  <div id="app">
    <Header />
    <div class="wrapper">
      <Form />
      <Benefits />
    </div>
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Form from "./components/Form.vue";
import Benefits from "./components/Benefits.vue";

import "./assets/main.css";

export default {
  name: "App",
  components: {
    Header,
    Form,
    Benefits,
  },
};
</script>
<style>
@media (min-width: 1200px) {
  .wrapper {
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
  }
}
</style>
