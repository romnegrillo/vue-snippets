<script>
export default {
  name: 'ModalComponent',
  props: ['title', 'message', 'active'],
  data() {
    return {};
  },
  methods: {
    closeModal() {
      this.$emit('okClicked');
    }
  }
};
</script>

<template>
  <div class="backdrop" v-if="active" @click.self="closeModal">
    <div class="modal">
      <div class="modal-header">
        <h2>{{ title }}</h2>
      </div>

      <div class="modal-content">
        <p>{{ message }}</p>
      </div>

      <div class="modal-buttons">
        <button class="button" @click="closeModal">OK</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.backdrop {
  position: fixed;
  top: 0;
  background: rgba(255, 255, 255, 0.5);
  width: 100%;
  height: 100%;
}

.modal {
  background-color: #4c4444;
  width: 600px;
  border-radius: 16px;
  padding: 16px;
  margin: auto;
  margin-top: 20px;
}

.modal-header {
  margin: 16px;
  border-bottom: 1px solid #fff;
}

.modal-content {
  margin: 16px;
}

.modal-buttons {
  margin: 16px;
  display: flex;
  justify-content: flex-end;
}

.button {
  padding: 8px;
  width: 80px;
  margin-left: 8px;
  border-radius: 16px;
  border: none;
}
</style>
