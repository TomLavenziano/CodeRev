<template>
  <div>
      <v-card color="indigo" dark>
          <v-card-title>
              Recent Reviews
          </v-card-title>
      </v-card>
      <v-data-table
    :headers="headers"
    :items="items"
    hide-actions
    item-key="name"
  >
    <template slot="items" slot-scope="props">
      <tr @click="props.expanded = !props.expanded">
        <td>{{ props.item.name }}</td>
        <td class="text-xs-left">{{ props.item.date }}</td>
        <td class="text-xs-left">{{ props.item.status }}</td>
        
      </tr>
    </template>
    <template slot="expand" slot-scope="props">
      <v-card flat>
        <v-btn color="green"> See Review </v-btn>
        
      </v-card>
    </template>
  </v-data-table>
  </div>
</template>

<script>
import axios from 'axios';
  export default {
    data () {
      return {
        headers: [
          {
            text: 'Review Title',
            align: 'left',
            sortable: true,
            value: 'name'
          },
          { text: 'Date Posted', value: 'date', sortable: false },
          { text: 'Review Status', value: 'status', sortable: false }
          
        ],
        items: [
          {
            name: "Sample Review",
            date: "2018-05-09",
            status: "Unseen"
          }
        ]
      }
    }
  }


</script>

<style>

</style>
