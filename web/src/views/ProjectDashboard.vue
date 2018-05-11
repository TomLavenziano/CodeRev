<template>
  <div id="ProjectDashboard">
      <div class="project-info-card card-panel">
          <div class="">
              <span> {{ project.name }} </span>
              <div class="small-section"> {{ project.github_fullname }} </div>
          </div>
          <hr />
          <div class="">
              <span class="small-section dim">Latest:</span>
              <span class="very-small-section"> {{ commits[0].hash }} </span>
          </div>
      </div>
      <div class="info-container">
          <div class="commits-container">
              <div v-for="commit in commits" :key="commit.key" class="card-panel commit-card">
                  <div class="commit-message"> {{ commit.message }} </div>
                  <hr />
                  <div class="commit-author"> {{ commit.author_name }}
                      <span class="commit-time">committed {{ commit.time }}</span>
                  </div>
              </div>
          </div>
          <div class="review-container card-panel">
              {{ project }}
          </div>
      </div>
      <ViewDiff :pid="id"></ViewDiff>
  </div>
</template>
<script>
import ViewDiff from '@/components/ViewDiff.vue';
import api from '../http-global';
import ta from 'time-ago';

export default {
    name: 'ProjectDashboard',
    data: () => ({
        project: {},
        commits: {}
    }),
    components: {
        ViewDiff
    },
    props: ['id'],
    created() {
        console.log('Project dashboard');
        console.log('ID:' + this.id);
        api.get(`project/${this.id}`).then(res => {
            console.log(res.data);
            this.project = res.data;
        });

        api.get(`project/repo/commits/${this.id}`).then(res => {
            this.commits = res.data.all.map(commit => {
                commit.time = ta.ago(commit.date);
                return commit;
            });
            console.log(this.commits[0]);
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
        display: inline-block;
    }
    .project-info-card {
        width: 99%;
        font-size: 3.5em;
        font-weight: bold;
        padding-left: 10px;

        & .small-section {
            font-size: .7em;
            color: #555;
            font-weight: 300;
            // line-height: .25em;

            &.dim {
                font-size: .6em;
                font-weight: 400;
                // line-height: .75em;
            }
        }

        & .very-small-section {
            font-size: .55em;
            color: #555;
            font-weight: 300;
            // line-height: .5em;
        }
    }

    .info-container {
        width: 100%;
        display: inline-flex;
        .commits-container {
            width: 50%;
            float: left;

            & .commit-card {
                padding: 5px;

                & .commit-message {
                    font-weight: 500;
                    font-size: 1.5em;
                    color: #222;
                }

                & .commit-author {
                    padding-top: 5px;
                    font-size: 1.25em;
                    font-weight: 500;
                    color: #555;

                    & .commit-time {
                        font-weight: 400;
                    }
                }
            }
        }

    .review-container {
        width: 50%;
        float: right;
    }
}
</style>
