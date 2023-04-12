<script>
export default {
  name: 'InfoComponent',
  props: ['totalTime'],
  data() {
    return {
      category: ''
    };
  },
  methods: {
    categorizeTime() {
      console.log(this.totalTime);
      if (this.totalTime < 1500) {
        this.category = "You're faster than I expected.";
      } else if (this.totalTime >= 1500 && this.totalTime <= 5000) {
        this.category = 'Too slow.';
      } else {
        this.category = 'Are you even trying?';
      }
    }
  },
  mounted() {
    this.categorizeTime();
  }
};
</script>

<template>
  <div class="info">
    <p>Your reaction time is {{ totalTime }} ms.</p>
    <p>{{ category }}</p>
  </div>
</template>

<style scoped>
.info {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
</style>
