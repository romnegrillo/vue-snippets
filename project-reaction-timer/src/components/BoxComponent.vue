<script>
export default {
  name: 'BoxComponent',
  props: ['time'],
  data() {
    return {
      isBoxShown: false,
      timer: null,
      totalTime: 0
    };
  },
  methods: {
    startTimer() {
      this.timer = setInterval(() => {
        this.totalTime += 10;
      }, 10);
    },
    stopTimer() {
      clearInterval(this.timer);
      this.$emit('clicked', this.totalTime);
    }
  },
  mounted() {
    console.log('BoxComponent is mounted.');
    console.log(this.time);

    setTimeout(() => {
      this.isBoxShown = true;
      this.startTimer();
    }, this.time);
  }
};
</script>

<template>
  <div class="box" v-if="isBoxShown" @click="stopTimer"></div>
</template>

<style scoped>
.box {
  width: 400px;
  height: 400px;
  background-color: #e0d7d7;
  margin: 0 auto;
}
</style>
