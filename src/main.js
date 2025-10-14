import { createApp } from "vue";
import "./style.css";

import Table from "./components/MatrixTable.vue";
import FeatureCard from "./components/Card.vue";
import Navbar from "./components/Navbar.vue";

createApp({
  components: { FeatureCard },
  template: `<div class="flex flex-wrap justify-center mt-10">
      <FeatureCard
        v-for="(card, i) in cards"
        :key="i"
        :title="card.title"
        :description="card.description"
        :link="card.link"
        :buttonText="card.buttonText"
      />
    </div>`,
  data() {
    return {
      cards: [
        {
          title: "Add Matrices",
          description:
            "Combine matrices of equal dimensions by adding their elements.",
          link: "./src/matrixFunctions/add.html",
          buttonText: "Try Add",
        },
        {
          title: "Multiply Matrices",
          description: "Perform matrix multiplication on compatible matrices.",
          link: "/multiply",
          buttonText: "Try Multiply",
        },
        {
          title: "Row Reduction",
          description: "Reduce a matrix to its row echelon form step-by-step.",
          link: "/rowreduce",
          buttonText: "Try Row Reduce",
        },
      ],
    };
  },
}).mount("#app");

createApp(Navbar).mount("#navbar");

// createApp(Table).mount('#myDiv')
