
<template>
  <div class="flex justify-center items-center m-5">
    <button @click="addMatrices" class="btn">Add Matrices</button>
  </div>
  <div class="flex mt-0">
    <matrix-table ref="matrix1" :rows="3" :cols="3"></matrix-table>
    <matrix-table ref="matrix2" :rows="3" :cols="3"></matrix-table>

    <!-- Display result if it exists -->
      <matrix-table
        ref="resultTable"
        :rows="3"
        :cols="3"
        :isReadOnly="true">
      </matrix-table>
  </div>
</template>

<script>
import MatrixTable from "../components/MatrixTable.vue";
import matrixFunctions from "../js/matrixFunctions.js";

export default {
  components: { MatrixTable },
  data() {
    return {
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
      } catch (error) {
        alert(error.message);
      }
    },
  },
};
</script>
