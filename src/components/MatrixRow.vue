<template>
  <tr>
    <MatrixCell v-for="index in numColumns" :key="index" />
  </tr>
</template>

<script>
import MatrixCell from "./MatrixCell.vue";

export default {
  name: "MatrixRow",
  components: { MatrixCell },
  props: {
    numColumns: 3

  }
};
</script>
