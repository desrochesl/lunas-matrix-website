<template>
  <div class="p-0 mx-auto place-items-center">
    <div class="overflow-x-auto flex justify-center mb-10">
      <table class="table border border-base-300 w-auto bg-base-100">
        <tbody>
        <tr v-for="(row, r) in matrixData" :key="r" class="w-20 h-20 text-center border border-base-300">
          <td v-for="(cell, c) in row" :key="c">
            <input
                v-model.number="matrixData[r][c]"
                :readonly="isReadOnly"
                class="input validator input-xs m-2"
                min="0"
                type="number"
            />
          </td>
        </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>


export default {
  props: {
    rows: {
      type: Number,
      required: true,
    },
    cols: {
      type: Number,
      required: true,
    },
    isReadOnly: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      matrixData: [],
    };
  },
  watch: {
    rows: {
      immediate: true,
      handler() {
        this.initializeMatrix();
      },
    },
    cols: {
      immediate: true,
      handler() {
        this.initializeMatrix();
      },
    },
  },
  methods: {

    initializeMatrix() {
      this.matrixData = Array.from({length: this.rows}, () =>
          Array.from({length: this.cols}, () => 0)
      );
    },
    getMatrixData() {
      return this.matrixData;
    },
  },
};
</script>