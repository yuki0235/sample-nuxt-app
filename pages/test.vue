<template>
  <div>
    <div class="message">
      <!-- store/index.jsで定義したstateのmessageを出力   -->
      <p>{{ $store.state.message }}</p>
    </div>


    <div class="counter">
      <!-- store/index.jsで定義したmutationでstateの値を書き換える  -->
      <p>{{ $store.state.count }}</p>
      <button @click="countUp">UP</button>
      <button @click="countDown">Down</button>
    </div>

    <div class="store-namespace">
      <!-- store/index.jsで定義したmutationでstateの値を書き換える  -->
      <p>{{ $store.state.test.sample.message }}</p>
      <p>{{ $store.state.test.sample.count }}</p>
      <button @click="counter">ボタン</button>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    countUp() {
      /*
      * mutationで定義した処理の呼び出しにはcommitを使う
      * commitの引数に指定する文字列はmutation内に定義した処理名
      */
      this.$store.commit("increment")
    },
    countDown() {
      /*
      * mutationで定義した処理の呼び出しにはcommitを使う
      * commitの引数に指定する文字列はmutation内に定義した処理名
      */
      this.$store.commit("decrement")
    },
    counter() {
      /*
      * namespaceを切ったmutationを呼び出すには、
      * commitの引数に定義した処理のpathを指定する
      */
      this.$store.commit("test/sample/increment");
    }
  }
};
</script>

<style>
  .message{
    border: 1px solid red;
    padding-left: 5px;
  }
  .counter{
    margin-top: 10px;
    border: 1px solid blue;
    padding-left: 5px;
  }
  .counter p {
    padding-left: 20px;
  }
  .store-namespace{
    margin-top: 10px;
    border: 1px solid green;
    padding-left: 5px;
  }
</style>
