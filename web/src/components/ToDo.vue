<template>
<div>
<v-card color="indigo" dark>
  <v-flex>
  <v-card-title>ToDo</v-card-title>
  </v-flex>
</v-card>
<v-card v-for="item in items" :key="item.text">
  {{item.text}}

</v-card>
</div>
</template>

<script>
export default {
  data(){
    return{
          items: [{text:"End of todos"}]
    }
  },
  methods: {
   
  }
}


</script>