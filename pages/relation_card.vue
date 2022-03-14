<template>
  <div class="container">
    <h1>{{ title }}</h1>
    <v-card class="pageDescription" color="secondary">
      <p>
        カードに設定されたid,type,nameの情報をもとに、選択したタグに関連する情報を抽出する
      </p>
    </v-card>
    <v-container>
      <v-switch label="frontend" hide-details>
        <v-btn>frontend</v-btn>
      </v-switch>
      <v-switch label="backend" hide-details>
        <v-btn>backend</v-btn>
      </v-switch>
      <v-switch label="infrastructure" hide-details>
        <v-btn>infrastructure</v-btn>
      </v-switch>
    </v-container>
    <v-container>
      <v-row>
        <v-col v-for="card in cards" :key="card.id" :cols="3">
          <v-card :color="color(card.type)">
            <v-card-title>{{ card.name }}</v-card-title>
            <v-card-subtitle>{{ card.type }}</v-card-subtitle>
            <v-btn class="white" text @click="card.show = !card.show" width="100%">
              詳細
              <v-icon>{{ card.show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
            </v-btn>
            <v-card-text class="white" v-show="card.show">{{ card.desc }}</v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: "Relation Card",
      cards: [
        {
          id: 1,
          type: "frontend",
          name: "Vue.js",
          desc: "学習コストの低いJavaScriptフレームワークです",
          show: false
        },
        {
          id: 2,
          type: "backend",
          name: "Ruby",
          desc: "初学者向けのサーバサイドプログラミング言語です",
          show: false

        },
        {
          id: 3,
          type: "infrastructure",
          name: "AWS",
          desc: "Amazonから提供されているCloudサービスです",
          show: false
        },
        {
          id: 4,
          type: "infrastructure",
          name: "GCP",
          desc: "Google Cloudから提供されているCloudサービスです",
          show: false
        }
      ]
    }
  },
  methods: {
    color(type) {
      switch (type) {
        case "frontend":
          return "red lighten-5"
        case "backend":
          return "indigo lighten-5"
        case "infrastructure":
          return "light-green lighten-5"
      }
    }
  }
}
</script>

<style>
.pageDescription {
  height: auto;
  text-align: center;
}
p {
  padding: 20px;
  color: white;
}
</style>
