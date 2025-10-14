<template>
  <Navbar />
  <router-view />
  <Footer />
</template>

<script>
import Navbar from "./components/Navbar.vue";
import Footer from "./components/Footer.vue";
import Home from "./components/Home.vue";

export default {
  name: "App",
  components: { Navbar, Footer },
};
</script>
