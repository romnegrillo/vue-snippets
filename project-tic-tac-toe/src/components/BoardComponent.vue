<script>
import CellComponent from './CellComponent.vue';

export default {
  name: 'BoardComponent',
  components: {
    CellComponent
  },
  data() {
    return {
      isGameStarted: false,
      isPlayerOneTurn: true,
      board: [
        ['', '', ''],
        ['', '', ''],
        ['', '', '']
      ]
    };
  },
  methods: {
    cellClicked(id) {
      let letter = 'X';

      if (this.isPlayerOneTurn) {
        letter = 'X';
      } else {
        letter = 'O';
      }

      if (id === '1' && this.board[0][0] == '') {
        this.board[0][0] = letter;
      } else if (id === '2' && this.board[0][1] == '') {
        this.board[0][1] = letter;
      } else if (id === '3' && this.board[0][2] == '') {
        this.board[0][2] = letter;
      } else if (id === '4' && this.board[1][0] == '') {
        this.board[1][0] = letter;
      } else if (id === '5' && this.board[1][1] == '') {
        this.board[1][1] = letter;
      } else if (id === '6' && this.board[1][2] == '') {
        this.board[1][2] = letter;
      } else if (id === '7' && this.board[2][0] == '') {
        this.board[2][0] = letter;
      } else if (id === '8' && this.board[2][1] == '') {
        this.board[2][1] = letter;
      } else if (id === '9' && this.board[2][2] == '') {
        this.board[2][2] = letter;
      }

      this.isPlayerOneTurn = !this.isPlayerOneTurn;
    }
  }
};
</script>

<template>
  <div class="board">
    <div class="row">
      <CellComponent
        id="1"
        type="corner-upper-left"
        :currentLetter="board[0][0]"
        @cellClicked="cellClicked"
      />
      <CellComponent
        id="2"
        type="edge-upper-middle"
        :currentLetter="board[0][1]"
        @cellClicked="cellClicked"
      />
      <CellComponent
        id="3"
        type="corner-upper-right"
        :currentLetter="board[0][2]"
        @cellClicked="cellClicked"
      />
    </div>

    <div class="row">
      <CellComponent
        id="4"
        type="edge-middle-left"
        :currentLetter="board[1][0]"
        @cellClicked="cellClicked"
      />
      <CellComponent id="5" type="center" :currentLetter="board[1][1]" @cellClicked="cellClicked" />
      <CellComponent
        id="6"
        type="edge-middle-right"
        :currentLetter="board[1][2]"
        @cellClicked="cellClicked"
      />
    </div>

    <div class="row">
      <CellComponent
        id="7"
        type="corner-lower-left"
        :currentLetter="board[2][0]"
        @cellClicked="cellClicked"
      />
      <CellComponent
        id="8"
        type="edge-lower-middle"
        :currentLetter="board[2][1]"
        @cellClicked="cellClicked"
      />
      <CellComponent
        id="9"
        type="corner-lower-right"
        :currentLetter="board[2][2]"
        @cellClicked="cellClicked"
      />
    </div>
  </div>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.board {
  display: flex;
  flex-direction: column;
  height: 600px;
  width: 600px;
  margin: 16px auto;
}

.row {
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100%;
}
</style>
