<template>
  <div class="container">
    <v-text-field placeholder="please input api url" v-model="url"></v-text-field>
    <v-btn @click="execute" class="executeBtn" color="secondary">execute</v-btn>
    <v-textarea class="responseTextArea" v-model="response" rows="15"></v-textarea>
  </div>
</template>

<script>
export default {
  data() {
    return {
      url: "",
      response: ""
    }
  },
  methods: {
    async execute() {
      // APIのURLをフォームから取得してレスポンス
      let response = await this.$axios.$get(this.url);
      // Object形式でレスポンスが入っているためJson形式に変換
      // JSON.stringify(<Object>, <フィルタ用関数>, <インデント数(\tでタブ指定可能)>)
      this.response = JSON.stringify(response, null, 2)
    }
  },
  mounted: function() {

  }
}
</script>

<style>
.executeBtn {
  width: 100%;
}
</style>
