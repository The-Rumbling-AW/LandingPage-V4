<template>
  <header>
    <div class="logo">
      <img
          src="https://images-ext-1.discordapp.net/external/wh4YnruyuLlZc8mhMzpH9KepFTksnYi9tTO14hzp1h8/https/the-rumbling.github.io/StayMap-Landing_Page/starymaplogo.png?format=webp&quality=lossless&width=666&height=670"
          alt="Logo"
      />
    </div>

    <nav>
      <router-link
          v-for="item in items"
          :key="item.label"
          :to="item.to"
          class="nav-button"
      >
        {{ $t(item.label) }}
      </router-link>
    </nav>

    <language-switcher />

    <a href="https://staymap-frontend.onrender.com/" class="btn-appweb">

      {{ $t("ingresar") }}
    </a>
  </header>

  <router-view />
</template>

<script>
import LanguageSwitcher from "./language-switcher.component.vue";

export default {
  name: "toolbar-section",
  components: { LanguageSwitcher },
  data() {
    return {
      items: [
        { label: "inicio", to: "/home" },
        { label: "fans", to: "/fans" },
        { label: "artistas", to: "/artists" }
      ]
    };
  }
};
</script>

<style scoped>

</style>
