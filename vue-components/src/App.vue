<script>
import ModalComponent from './components/ModalComponent.vue';

export default {
  name: 'App',
  components: {
    ModalComponent
  },
  data() {
    return {
      isModal1Active: false,
      isModal2Active: false
    };
  },
  methods: {
    toggleModal1() {
      this.isModal1Active = !this.isModal1Active;
    },
    toggleModal2() {
      this.isModal2Active = !this.isModal2Active;
    }
  }
};
</script>

<template>
  <header>
    <h1>Components and Props Basic</h1>
    <button class="button" @click="toggleModal1">Toggle Modal 1</button>
    <button class="button" @click="toggleModal2">Toggle Modal 2</button>
  </header>

  <br />

  <main>
    <ModalComponent
      title="Modal 1 Title"
      message="My modal 1 content."
      :active="isModal1Active"
      @okClicked="toggleModal1"
    />

    <ModalComponent
      title="Modal 2 Title"
      message="My modal 2 content."
      :active="isModal2Active"
      @okClicked="toggleModal2"
    />
  </main>
</template>

<style scoped>
header,
main {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.button {
  padding: 8px;
  width: 120px;
  margin-left: 8px;
  border-radius: 16px;
  border: none;
  margin: 8px;
}
</style>
