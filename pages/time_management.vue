<template>
  <div class="container">
    <!--    現在時刻表示（毎秒更新）-->
    <v-card elevation="2" outlined>
      <h1>現在の日時： {{ date }} {{ time }}</h1>
    </v-card>

    <!--    記録用ボタン-->
    <v-btn @click="updateRecord" elevation="2" large :color="color" class="recordButton">
      <span v-if="recordFlag">記録開始</span>
      <span v-else>記録終了</span>
    </v-btn>
  </div>
</template>

<script>
import moment from 'moment'
export default {
  data () {
    return {
      date: '',
      time: '',
      recordFlag: true,
      buttonMessage: false,
      color: 'primary',
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
    },
    updateRecord() {
      this.recordFlag = !this.recordFlag
      if (this.recordFlag) {
        this.color = 'primary'
      } else {
        this.color = 'secondary'
      }
    }
  }
}
</script>

<style>
  h1 {
    text-align: center;
    padding: 2em 0;
  }
  .recordButton {
    margin-top: 2em;
    width: 100%;
  }
</style>
