<template>
  <div class="container">
    <v-card elevation="2" outlined>
      <h1>現在の日時： {{ date }} {{ time }}</h1>
    </v-card>
  </div>
</template>

<script>
import moment from 'moment'
export default {
  data () {
    return {
      date: '',
      time: ''
    }
  },
  mounted: function() {
    // 毎秒日時を更新する
    setInterval(this.updateDateTime, 1000);
  },
  methods: {
    updateDateTime() {
      this.date = moment().format('YYYY/MM/DD')
      this.time = moment().format('HH:mm:ss')
    }
  }
}
</script>

<style>
  h1 {
    text-align: center;
    padding: 2em 0;
  }
</style>
