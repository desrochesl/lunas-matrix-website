<template>
  <div class="p-4">
    <!-- Input for number of cells -->
    <label class="flex justify-center m-2">
      <input
        type="number"
        v-model.number="numRows"
        min="1"
        class="input w-10 text-center border border-base-300 m-2"
      />
      <p class="text mt-4">by</p>
      <input
        type="number"
        v-model.number="numColumns"
        min="1"
        class="input w-10 text-center border border-base-300 m-2"
      />
    </label>

    <div class="overflow-x-auto flex justify-center mt-8 mb-8">
      <table class="table border border-base-300 w-auto bg-base-100">
        <MatrixRow
          v-for="index in numRows"
          :key="index"
          :numColumns="numColumns"
        />
      </table>
    </div>
  </div>
</template>

<script>
import MatrixRow from "./MatrixRow.vue";

export default {
  name: "MatrixTable",
  components: { MatrixRow },
  data() {
    return {
      numColumns: 3,
      numRows: 3,
    };
  },
};
</script>
