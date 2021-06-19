<template>
  <main class="container">
    <h1>Get Your Global IP</h1>
    <div>
      <button @click="getIp" class="btn btn-primary" style="width: 100%">Get Your IP</button>
      <div style="margin-top: 20px;">
        <p v-text="ip" class="ip"></p>
      </div>
    </div>
  </main>
</template>
<script>
export default {
  name: "getip",
  data() {
    return {
      ip: "",
    };
  },
  methods: {
    getIp() {
      this.ip = "Getting IP"
      fetch("https://net-info.ml", {
        method: "GET",
        redirect: "follow",
      }).then((resp) => {
        if (resp.ok) {
          resp.json().then((data) => {
            this.ip = data.ip;
          });
        } else {
          this.ip = "Error";
        }
      });
    },
  },
};
</script>
<style>
.ip{
  color: #60ecff;
  font-size: 5em;
}
</style>