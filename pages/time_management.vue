<template>
  <div class="container">
    <v-card elevation="2" loading outlined>
      <!--    現在時刻表示（毎秒更新）-->
      <h1>現在の日時： {{ date }} {{ time }}</h1>
      <!--      <h2>記録した時間： {{ $store.state.totalTime }}</h2>-->
      <h2>記録中の経過時間： 未対応</h2>
      <!--      <h2>記録した時間： {{ $store.state.totalTime }}</h2>-->
      <h2>本日の累計時間： {{ $store.state.hour }}時間{{ $store.state.min }}分{{ $store.state.rem }}秒</h2>
    </v-card>

    <!--    記録用ボタン-->
    <v-btn @click="updateRecord" elevation="2" large :color="color" class="recordButton">
      <span v-if="recordFlag">記録開始</span>
      <span v-else>記録終了</span>
    </v-btn>

    <!--    記録用ボタン-->
    <v-btn @click="clearRecord" elevation="2" large class="recordButton">
      <span>記録クリア</span>
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
      recordedDateTimes: [],
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
      // 最新の日時を取得
      this.updateDateTime()
      this.recordedDateTimes.push(this.date + ' ' + this.time)
      this.recordFlag = !this.recordFlag
      if (this.recordFlag) {
        // moment.jsの機能を利用して日付型に変換
        let toDateTime   = moment(this.recordedDateTimes[1])
        let fromDateTime = moment(this.recordedDateTimes[0])
        // 未来日 - 過去日で日付の差分を求める
        console.log(toDateTime.diff(fromDateTime))
        // ミリ秒でdiffがが取得されるため1000で割って秒に変換
        let sec = toDateTime.diff(fromDateTime) / 1000
        this.$store.commit("addHour", Math.floor(sec / 3600));
        this.$store.commit("addMin", Math.floor(sec % 3600 / 60));
        this.$store.commit("addRem", sec % 60);
        this.$store.commit("addTime", sec)
        // localstorageへの登録が終わったらレコード記録(recordedDateTimes)をリセットする
        this.recordedDateTimes = []
        this.color = 'primary'
      } else {
        this.color = 'secondary'
      }
    },
    clearRecord() {
      this.$store.commit("totalTimeClear")
    }
  }
}
</script>

<style>
  h1 {
    text-align: center;
    padding: 2em 0;
  }
  h2 {
    text-align: center;
    padding-bottom: 2em;
  }
  .recordButton {
    margin-top: 2em;
    width: 100%;
  }
  .recordList {
    margin-top: 2em;
    text-align: center;
  }
</style>
