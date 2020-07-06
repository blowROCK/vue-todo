<template>
  <div>
    <Todo />
    <Modal v-if="isModalOpen" />
  </div>
</template>

<script>
import Modal from "../components/Modal";
import Todo from "../components/Todo";
export default {
  components: { Modal, Todo },
  computed:{
    isModalOpen: function(){
      return this.$store.getters['modal/isModalOpen'];
    }
  }
}
</script>

<style>

</style>
