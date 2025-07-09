<template>
  <div class="page-not-found">
    <h1>404 - Page Not Found</h1>
    <p>The route <strong>{{ route }}</strong> does not exist.</p>
    <button @click="goHome">Go to Home</button>
  </div>
</template>

<script>
export default {
  name: "PageNotFound",
  computed: {
    route() {
      return this.$route.path;
    },
  },
  methods: {
    goHome() {
      this.$router.push("/");
    },
  },
};
</script>

<style scoped>
.page-not-found {
  text-align: center;
  padding: 2rem;
}

button {
  padding: 0.5rem 1rem;
  margin-top: 1rem;
}
</style>