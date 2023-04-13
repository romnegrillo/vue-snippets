<script>
export default {
  name: 'CellComponent',
  props: ['id', 'type', 'currentLetter'],
  data() {
    return {};
  },
  methods: {
    setDisplayType() {
      this.$refs.cell.classList.add(this.type);
    },
    cellClicked() {
      this.$emit('cellClicked', this.id);
    }
  },
  mounted() {
    this.setDisplayType();
  }
};
</script>

<template>
  <div class="cell" ref="cell" @click="cellClicked">{{ currentLetter }}</div>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.cell {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 3rem;
}

.corner-upper-left {
  border-right: 1px solid white;
  border-bottom: 1px solid white;
}

.edge-upper-middle {
  border-left: 1px solid white;
  border-right: 1px solid white;
  border-bottom: 1px solid white;
}
.corner-upper-right {
  border-left: 1px solid white;
  border-bottom: 1px solid white;
}

.edge-middle-left {
  border-top: 1px solid white;
  border-right: 1px solid white;
  border-bottom: 1px solid white;
}

.center {
  border: 1px solid white;
}

.edge-middle-right {
  border-top: 1px solid white;
  border-left: 1px solid white;
  border-bottom: 1px solid white;
}

.corner-lower-left {
  border-top: 1px solid white;
  border-right: 1px solid white;
}

.edge-lower-middle {
  border-top: 1px solid white;
  border-left: 1px solid white;
  border-right: 1px solid white;
}
.corner-lower-right {
  border-top: 1px solid white;
  border-left: 1px solid white;
}
</style>
