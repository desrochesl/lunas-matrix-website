<template>
  <div class="flex justify-center">
  <button class="btn m-4" onclick="my_modal_1.showModal()">Create Matrix</button>
  </div>


  <dialog id="my_modal_1" class="modal">
    <div class="modal-box">
     <matrix-table></matrix-table>
    <div class="modal-action">
      <form method="dialog">
        <!-- If there is a button in the form, it will close the modal -->
        <button class="btn">Close</button>
      </form>
    </div>
    </div>
  </dialog>

  <div class="flex flex-wrap">
    <matrix-table></matrix-table>
    <matrix-table></matrix-table>
    <matrix-table></matrix-table>
  </div>
</template>

<script>
import Navbar from "../components/Navbar.vue";
import Footer from "../components/Footer.vue";
import MatrixTable from "../components/MatrixTable.vue";

export default {
  components: { Navbar, Footer, MatrixTable },
};
</script>
