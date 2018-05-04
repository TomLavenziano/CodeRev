<template>
  <div id="ProjectDashboard">
      <h1>Project</h1>
      <div class="commits-container">
            {{ project }}
      </div>
      <div class="review-container">

      </div>
  </div>
</template>
<script>
import vhttp from '../http-global';
export default {
    name: 'ProjectDashboard',
    data: () => ({
        project: {}
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
    }
};
</script>
<style lang="less" scoped>
</style>
