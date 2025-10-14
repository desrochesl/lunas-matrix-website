<template>
  <div class="p-0 mx-auto place-items-center">
    <div class="overflow-x-auto flex justify-center mt-8 mb-8">
      <table class="table border border-base-300 w-auto bg-base-100">
        <tbody>
          <tr
            class="w-20 h-20 text-center border border-base-300"
            v-for="r in rows"
            :key="r"
          >
            <td v-for="c in cols" :key="c">
              <input
                type="number"
                class="input validator input-xs m-2"
                min="0"
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
  },
};
</script>
