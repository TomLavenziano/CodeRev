<template>
  <v-data-table
    :headers="headers"
    :items="items"
    hide-actions
    item-key="name"
  >
    <template slot="items" slot-scope="props">
      <tr @click="props.expanded = !props.expanded">
        <td>{{ props.item.name }}</td>
        <td class="text-xs-right">{{ props.item.calories }}</td>
        <td class="text-xs-right">{{ props.item.fat }}</td>
        <td class="text-xs-right">{{ props.item.carbs }}</td>
        <td class="text-xs-right">{{ props.item.protein }}</td>
        <td class="text-xs-right">{{ props.item.iron }}</td>
      </tr>
    </template>
    <template slot="expand" slot-scope="props">
      <v-card flat>
        <v-card-text>Peek-a-boo!</v-card-text>
      </v-card>
    </template>
  </v-data-table>
</template>

<script>
  export default {
    data () {
      return {
        headers: [
          {
            text: 'Projects',
            align: 'left',
            sortable: true,
            value: 'name'
          },
          { text: 'Notifications', value: 'notifications', sortable: false },
          { text: 'Commits', value: 'commits', sortable: false },
          { text: 'Pending Reviews', value: 'previews', sortable: false },
          { text: 'ToDos', value: 'protein', sortable: false },
          
        ],
        items: [
        ]
      }
    }
  }
</script>

<style>

</style>
