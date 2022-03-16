import Vue from 'vue'
import { Doughnut, Line, mixins } from 'vue-chartjs';
import movable from 'v-movable'
const { reactiveProp } = mixins;

Vue.component('doughnut-chart', {
  extends: Doughnut,
  mixins: [reactiveProp],
  props: {
    options: {
      type: Object,
      default: () => {},
    },
  },
  mounted() {
    this.renderChart(this.chartData, this.options);
  },
});

Vue.component('line-chart', {
  extends: Line,
  mixins: [reactiveProp],
  props: ['options'],
  mounted () {
    this.renderChart(this.chartData, this.options)
  }
});

Vue.use(movable)
