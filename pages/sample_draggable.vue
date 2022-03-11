<template>
  <div id="app">
    <draggable v-model="items" draggable=".item" tag="ul">
      <li v-for="item in items" :key="item.id" class="item">
        No.{{item.id}} {{item.name}}
      </li>
    </draggable>
    <center>
      <v-btn elevation="2" color="primary" @click="showItems">順番表示</v-btn>
    </center>
  </div>
</template>

<script>
import Vue from 'vue'
import draggable from 'vuedraggable'

export default Vue.extend({
  name: "Draggable",
  components: {
    draggable
  },
  data() {
    return {
      items: [
        {
          id: 1,
          name: "ITEM 1"
        },
        {
          id: 2,
          name: "ITEM 2"
        },
        {
          id: 3,
          name: "ITEM 3"
        },
        {
          id: 4,
          name: "ITEM 4"
        },
      ]
    }
  },
  methods: {
    showItems() {
      alert(this.items.map(val => { return val.id }))
    }
  }
})
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
    margin: 5em;
  }
</style>
