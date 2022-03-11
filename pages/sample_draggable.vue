<template>
  <div id="container">
    <h2>group1</h2>
    <div class="group">
      <draggable v-model="items1" draggable=".item" tag="ul" group="items">
        <li v-for="item in items1" :key="item.id" class="item">
          No.{{item.id}} {{item.name}}
        </li>
      </draggable>
      <div v-if="items1 == false">No Member</div>
    </div>

    <h2>group2</h2>
    <div class="group">
      <draggable v-model="items2" draggable=".item" tag="ul" group="items">
        <li v-for="item in items2" :key="item.id" class="item">
          No.{{item.id}} {{item.name}}
        </li>
      </draggable>
      <div v-if="items2 == false">No Member</div>
    </div>
    <center>
      <v-btn elevation="2" color="primary" @click="showItems">group1 - 順番表示</v-btn>
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
      items1: [
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
      ],
      items2: [
        {
          id: 5,
          name: "ITEM 5"
        },
        {
          id: 6,
          name: "ITEM 6"
        },
        {
          id: 7,
          name: "ITEM 7"
        },
        {
          id: 8,
          name: "ITEM 8"
        },
      ]
    }
  },
  methods: {
    showItems() {
      alert(this.items1.map(val => { return val.id }))
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
    margin: 2em;
  }
  .group {
    height: 100%;
    margin: 2em;
  }
</style>
