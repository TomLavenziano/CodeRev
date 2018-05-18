<template>
  <div id="ProjectDashboard">
      <div class="project-info-card card-panel">
          <div class="">
              <span> {{ project.name }} </span>
              <div class="small-section"> {{ project.github_fullname }} ({{ project.id }})</div>
              <div class="">
                  <span class="small-section dim">Latest:</span>
                  <span class="very-small-section" v-if="commits"> {{ commits[0].hash }} </span>
              </div>
          </div>
          <hr />
          <div class="clone-url-container">
              <span class="small-section dim">Clone:</span>
              <span class="very-small-section">
                  <input type="text" name="clone-url" :value="'git clone ' + project.coderev_upstream" class="clone-url-input"  @focus="$event.target.select()" :style="{width : project.coderev_upstream.length + 10 + 'rem'}">
               </span>
          </div>
      </div>

      <div class="info-container">
          <div class="commits-container">
              <div v-for="commit in commits" :key="commit.key" v-if="commits" class="card-panel commit-card">
                  <div class="commit-message"> {{ commit.message }} </div>
                  <div class="commit-message thin"> {{ commit.hash }} </div>
                  <hr />
                  <div class="commit-author"> {{ commit.author_name }}
                      <span class="commit-time">committed {{ commit.time }}</span>
                  </div>
              </div>
          </div>

          <div class="review-container card-panel">
              <!-- {{ project }} -->
              <!-- <ViewDiff :raw="showDiff.diff"></ViewDiff> -->
              <ViewDiff :pid="id"></ViewDiff>
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
        commits: {},
        showDiff: {}
    }),
    components: {
        ViewDiff
    },
    props: ['id'],
    created() {
        console.log(`Project Dashboard | Project: ${this.id}`);

        // Get Project by ID
        api.get(`project/${this.id}`).then(res => {
            console.log(res.data);
            this.project = res.data;
        });

        // Get the Project's commits
        api.get(`project/repo/commits/${this.id}`).then(res => {
            this.commits = res.data.all.map(commit => {
                commit.time = ta.ago(commit.date);
                return commit;
            });
            console.log(this.commits[0]);
        });

        // Get the files from the Project's last commit
        api.get(`project/${this.id}/repo/files`).then(res => {
            console.info(this.showDiff);
            this.showDiff = res.data;
        });
    },
    methods: {

    }
};
</script>
<style lang="less" scoped>
    @import '../assets/styles/imports.less';

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

        & .clone-url-container {
            & input.clone-url-input {
                margin-left: .5em;
                border: 2px solid #777;
                padding: 5px;
                border-radius: 7px;
            }

        }

    }

    .info-container {
        width: 100%;
        display: inline-flex;
        .commits-container {
            width: 40%;
            float: left;

            & .commit-card {
                padding: 5px;

                & .commit-message {
                    font-weight: 500;
                    font-size: 1.5em;
                    color: #222;

                    &.thin {
                        color: #333;
                        font-weight: 400;
                        font-size: 1.25em;
                    }
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
        width: 60%;
        float: right;
    }
}
</style>
