<script>
export default {
  data(){
    return {
      languages: ['en', 'es']
    }
  }
}
</script>

<template>
  <pv-select-button
      v-model="$i18n.locale"
      :options="languages"
      class="uppercase language-switcher"
  />
</template>
<style>

</style>
