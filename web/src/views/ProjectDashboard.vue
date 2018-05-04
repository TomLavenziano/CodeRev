<template>
  <div id="ProjectDashboard">
      <div class="commits-container">
          <div v-for="commit in commits" :key="commit.key" class="card-panel">
              {{ commit.message }}
          </div>
      </div>
      <div class="review-container card-panel">
          {{ project }}
      </div>
  </div>
</template>
<script>
import vhttp from '../http-global';
export default {
    name: 'ProjectDashboard',
    data: () => ({
        project: {},
        commits: {}
    }),
    props: ['id'],
    created() {
        console.log('Project dashboard');
        const id = this.id;
        console.log('ID:' + id);
        vhttp.get(`project/${id}`).then(res => {
            console.log(res.data);
            this.project = res.data;
        });

        vhttp.get('git/commits').then(res => {
            this.commits = res.data.all;
        });
    }
};
</script>
<style lang="less" scoped>
    .card-panel {
      padding: 0.5%;
      margin: 10px;
      border-radius: 5px;
      background-color: #FFF;
      transition: all 0.3s cubic-bezier(.25,.8,.25,1);
      box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
    }

    #ProjectDashboard {
        display: inline-flex;
    }

    .commits-container {
        width: 50%;
    }

    .review-container {
        width: 50%;
    }
</style>
