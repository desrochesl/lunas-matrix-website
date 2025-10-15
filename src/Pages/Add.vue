<template>
  <div class="flex justify-center items-center m-5">
    <input
        class="input validator input-xs m-2"
        min="0"
        type="number"
        value="3"
        v-model.number="rows"
    />
    <i class="fa-solid fa-xmark"></i>
    <input
        class="input validator input-xs m-2"
        min="0"
        type="number"
        value="3"
        v-model.number="cols"
    />

  </div>
  <div class="flex justify-center items-center m-5">

    <button class="btn" @click="addMatrices">Add Matrices</button>
  </div>
  <div class="flex flex-wrap mt-0">
    <matrix-table ref="matrix1" :cols="cols" :rows="rows"></matrix-table>
    <matrix-table ref="matrix2" :cols="cols" :rows="rows"></matrix-table>

    <!-- Display result if it exists -->
    <matrix-table
        ref="resultTable"
        :cols="cols"
        :isReadOnly="true"
        :rows="rows">
    </matrix-table>
  </div>
</template>

<script>
import MatrixTable from "../components/MatrixTable.vue";
import matrixFunctions from "../js/matrixFunctions.js";

export default {
  components: {MatrixTable},
  data() {
    return {
      rows: 3,
      cols: 3,
      resultMatrix: [],
    };
  },
  methods: {
    addMatrices() {
      // Get the data from both matrix tables
      const matrix1 = this.$refs.matrix1.getMatrixData();
      const matrix2 = this.$refs.matrix2.getMatrixData();

      try {
        // Call the imported function
        this.resultMatrix = matrixFunctions.addMatrix(
            JSON.parse(JSON.stringify(matrix1)), // deep copy
            JSON.parse(JSON.stringify(matrix2))  // deep copy
        );

        // Update the result table
        this.$refs.resultTable.setMatrixData(this.resultMatrix);
      } catch (error) {
        alert(error.message);
      }
    },
  },
};
</script>
