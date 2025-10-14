<template>
  <div class="flex justify-center">
    <label class="flex justify-center m-2">
      <input
        type="number"
        v-model.number="rows"
        min="1"
        class="input w-10 text-center border border-base-300 m-2"
      />
      <p class="text mt-4">x</p>
      <input
        type="number"
        v-model.number="cols"
        min="1"
        class="input w-10 text-center border border-base-300 m-2"
      />
    </label>
  </div>
  <div class="flex justify-center">
    
  <button class="btn m-4" onclick="my_modal_1.showModal()">Create Matrix</button>
  </div>


  <dialog id="my_modal_1" class="modal">
    <div class="modal-box">
     <matrix-table :rows="rows" :cols="cols"></matrix-table>
    <div class="modal-action">
      <form method="dialog">
        <!-- If there is a button in the form, it will close the modal -->
        <button class="btn">Accept</button>
      </form>
    </div>
    </div>
  </dialog>

  <!-- <div class="flex flex-wrap">
    <matrix-table></matrix-table>
    <matrix-table></matrix-table>
    <matrix-table></matrix-table>
  </div> -->
</template>

<script>
import Navbar from "../components/Navbar.vue";
import Footer from "../components/Footer.vue";
import MatrixTable from "../components/MatrixTable.vue";

export default {
  components: { Navbar, Footer, MatrixTable },
  data() {
    return {
      rows: 3,
      cols: 3,
    };
  },
};
</script>
