<script>
import BoardComponent from './components/BoardComponent.vue';

export default {
  name: 'App',
  components: {
    BoardComponent
  },
  data() {
    return {};
  },
  methods: {}
};
</script>

<template>
  <header>
    <h1>Project Tic-Tac-Toe</h1>
    <p>I over complicate the components to practice how it works.</p>
  </header>

  <main>
    <BoardComponent />
  </main>
</template>

<style scoped>
header {
  line-height: 1.5;
  text-align: center;
  margin: 16px;
}
</style>
