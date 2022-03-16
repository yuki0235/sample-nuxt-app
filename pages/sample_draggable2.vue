<template>
  <v-container>
    <ChildDraggable1></ChildDraggable1>
    <ChildDraggable2></ChildDraggable2>
  </v-container>
</template>

<script>
import ChildDraggable1 from "../components/ChildDraggable1";
import ChildDraggable2 from "../components/ChildDraggable2";

export default {
  components: {
    ChildDraggable1,
    ChildDraggable2
  },
  data() {
    return {
      //
    }
  },
  methods: {
    showItems() {
      alert(this.ChildDraggable1.items1.map(val => { return val.id }))
    }
  }
}
</script>

<style>
  ul {
  list-style-type: none;
  }
  li {
    cursor: pointer;
    padding: 10px;
    border: solid #ddd 1px;
  }
  center {
    margin: 2em;
  }
  .group {
    height: 100%;
    margin: 2em;
  }
</style>
