<script>
import ToolbarSection from "./public/toolbar-section.component.vue";
import FooterSection from "./public/footer-section.component.vue";
import ContentSection from "./public/content-section.component.vue";

export default {
  name: "App",
  components: {
    FooterSection,
    ToolbarSection
  },
};
</script>


<template>

<ToolbarSection />
<FooterSection />

</template>

<style scoped>

</style>
