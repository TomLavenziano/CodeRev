<template>
  <div id="ListProjectCards">
      <div class="project-container" v-for="project in codeRevProjects" :key="project.key">
          <router-link tag="div" class="card-panel project-card" :to="{path: '/project/' + project.id}">
              {{project.name}}
          </router-link>
      </div>
  </div>
</template>
<script>
import api from '../http-global';
export default {
    name: 'ListProjectCards',
    data: function () {
        return {
            codeRevProjects: []
        };
    },
    created() {
        this.getCodeRevProjects();
    },
    methods: {
        getCodeRevProjects() {
            api.get('project')
                .then(res => {
                    console.log(res.data);
                    this.codeRevProjects = res.data;
                });
        }
    }
};
</script>
<style lang="less" scoped>
    @import '../assets/styles/imports.less';

    .project-card {
        padding: 5%;
        font-size: 2.5em;
        font-weight: bold;

        &:hover {
            cursor: pointer;
            box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
        }
    }

</style>
