<template>
  <v-data-table
    :headers="headers"
    :items="items"
    hide-actions
    item-key="name"
  >
    <template slot="items" slot-scope="props">
        {{ projects }}
      <tr @click="props.expanded = !props.expanded">
        <td>{{ props.item.name }}</td>
        <td class="text-xs-center">{{ props.item.notifications }}</td>
        <td class="text-xs-center">{{ props.item.commits }}</td>
        <td class="text-xs-center">{{ props.item.reviews}}</td>
        <td class="text-xs-center">{{ props.item.todos }}</td>
        <td class="text-xs-center">{{ props.item.iron }}</td>
      </tr>
  </template>
    <template slot="expand" slot-scope="props">
      <v-card flat>
        <v-card-text><proj-panel></proj-panel></v-card-text>
      </v-card>
  </template>
  </v-data-table>
</template>

<script>
import vhttp from '../http-global';
export default {
    name: 'ProjectList',
    data: () => ({
        projects: [],
        headers: [
            {
                text: 'Projects',
                align: 'left',
                sortable: true,
                value: 'name'
            },
            { text: 'Notifications', value: 'notifications', sortable: false },
            { text: 'Commits', value: 'commits', sortable: false },
            { text: 'Pending Reviews', value: 'reviews', sortable: false },
            { text: 'ToDos', value: 'todos' }

        ],
        items: [
            {
                name: 'Sample Project',
                notifications: 25,
                commits: 4,
                reviews: 10,
                todos: 1

            }
        ]
    }),
    props: ['username'],
    created() {
        // const username = this.$route.props.username;
        const username = 'TomLavenziano';
        vhttp.get(`project/owner/${username}`).then(res => (this.projects = res.data));
    }
};
</script>

<style>

</style>
