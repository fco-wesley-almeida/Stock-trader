<template>
  <v-layout class="card">
    <!-- <v-flex class="pr-3 pb-3" xs12 md6 lg4> -->
    <v-flex >

      <v-card min-width="375px" max-width="375px" :class="natureStyle">
        <div class="box" :style="style">
          <v-card-title class="headline"> {{ title }} {{ description }}  </v-card-title>
        </div>
      </v-card>

      <v-card min-width="375px" max-width="375px">
        <v-container fill-height width="375px">
          <v-text-field label="Quantidade" type="number"></v-text-field>
          <v-spacer></v-spacer>
          <v-btn :class="natureStyle" flat dark>Comprar</v-btn>
        </v-container>
      </v-card>

    </v-flex>
  </v-layout>
</template>

<script>
export default {
  props: {
    nature: {
      required: true,
      type: String
    },

    title: {
      required: true,
      type: String
    },

    description: {
      required: true,
      type: String
    }
  },

  computed: {
    natureStyle () {
      return `${this.nature === 'p' ? 'blue' : 'green'} darken-3`
    }
  }
}
</script>

<style scoped>
.box {
  height: 60px;
  width: 375px;
  /* background-color: rgb(39, 39, 238); */
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  font-size: x-large;
  color: white;
}

.card {
  margin-top: 50px;
  margin-left: 50px;
  }
</style>
