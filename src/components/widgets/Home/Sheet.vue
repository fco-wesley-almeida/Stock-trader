<template>
  <v-flex class="sheet">
    <v-sheet :color="color" class="mb-4" height="40" align-center elevation="10">
      <!-- <v-icon>info</v-icon> -->
      <span class="headline white--text message">{{ message }}</span>
    </v-sheet>
  </v-flex>
</template>

<script>
export default {
  props: {
    color: { required: true, type: String },
    message: { required: true, type: String }
  }
}
</script>

<style scoped>
  .message{
    font-family: "Merriweather", serif;
  }

  .sheet{
    /* padding-left: var(--sheet-pad); */
    padding-left: 90px;
    padding-right: 90px;
  }
</style>
