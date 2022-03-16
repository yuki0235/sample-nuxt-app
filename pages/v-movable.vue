<template>
  <v-main>
    <v-container>
      <v-row>
        <v-col ref="parentEl">
          <v-card v-for="card in cards" :key="card.id">
            <movable class="testmove" target="parentEl"><span>{{ card.name }}</span></movable>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-main>
</template>

<script>
export default {
  data() {
    return {
      cards: [
        {
          id: 1,
          name: "A",
        },
        {
          id: 1,
          name: "B",
        },
        {
          id: 1,
          name: "C",
        }
      ]
    }
  }
}
</script>

<style>
.testmove {
  display: block;
  position: absolute;
  top: 0;
  height: 150px;
  width: 150px;
  margin: 10px;
  background: orange;
  color: white;
}

.modaltitle {
  background: blue;
  display: block;
  width: 100%;
  color: white;
}
</style>
