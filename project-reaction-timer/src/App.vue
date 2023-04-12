<script>
import BoxComponent from './components/BoxComponent.vue';
import InfoComponent from './components/InfoComponent.vue';

export default {
  name: 'App',
  components: {
    BoxComponent,
    InfoComponent
  },
  data() {
    return {
      isGameStarted: false,
      isGameOver: false,
      time: null,
      totalTime: 0
    };
  },
  methods: {
    startGame() {
      this.isGameStarted = true;
      this.isGameOver = false;
      this.time = Math.floor(Math.random() * 5000) + 2000;
    },
    boxClicked(totalTime) {
      this.totalTime = totalTime;
      this.isGameStarted = false;
      this.isGameOver = true;
    }
  }
};
</script>

<template>
  <header>
    <h1>Project Reaction Timer</h1>
    <button class="button" @click="startGame" :disabled="isGameStarted">Start</button>
  </header>

  <main>
    <BoxComponent @clicked="boxClicked" v-if="isGameStarted" :time="time" />
    <InfoComponent v-if="isGameOver" :totalTime="totalTime" />
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

  border-radius: 16px;
  border: none;
  margin: 8px;
}
</style>
