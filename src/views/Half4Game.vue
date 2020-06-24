<template>
  <div class="background">
    <div class="game-container">
      <h3 class="game-header">Half 4tje!</h3>
      <div v-if="gameReady" style="display: flex; flex-direction:column; align-items:center">

        <h1 id="game-text" class="game-text">{{questions[count]}}</h1>
        <button class="next-btn" @click="nextItem">volgende</button>
      </div>
    </div>

    <div class="area">
      <ul class="circles">
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </div>
  </div>
</template>

<script>
import db from "../components/firebaseInit";

export default {
  name: "Half4Game",
  methods: {
    nextItem: function() {
      this.count++;
      if (this.count >= this.questions.length) {
        this.$router.push({ name: "Players" });
      }
    }
  },
  data() {
    return {
      gameReady: false,
      questions: [],
      count: 0
    };
  },
  created() {
    db.collection("half4")
      .doc("gamedata")
      .get()
      .then(querySnapshot => {
        querySnapshot.data().questions.forEach(element => {
          this.questions.push(element);
        });
        this.questions = shuffle(this.questions);
        this.gameReady = true;
      });
  }
};

function shuffle(array) {
  array.sort(() => Math.random() - 0.5);
  return array;
}
</script>

<style scoped>


.background {
  /* background: #4e54c8; */
  color: white;
  position: relative;
  width: 100%;
  height: 100%;
}

.game-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  z-index: 100;
}

.game-header {
  text-align: center;
  padding-left: 1em;
  padding-right: 1em;
}

.game-text {
  text-align: center;
  padding-left: 1em;
  padding-right: 1em;
  width: 100%;
}

.next-btn{
    border: none;
    border-radius: 2em;
    padding:  0.5em 2em 0.5em 2em;
    text-align: center;
}
</style>

<style scoped>
.area {
  /* background: #4e54c8; */
  /* background: -webkit-linear-gradient(to left, #8f94fb, #4e54c8); */
  width: 100%;
  height: 100vh;
  position: fixed;
}

.circles {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.circles li {
  position: fixed;
  display: block;
  list-style: none;
  width: 20px;
  height: 20px;
  background: rgba(255, 255, 255, 0.2);
  animation: animate 25s linear infinite;
  bottom: -150px;
}

.circles li:nth-child(1) {
  left: 25%;
  width: 80px;
  height: 80px;
  animation-delay: 0s;
}

.circles li:nth-child(2) {
  left: 10%;
  width: 20px;
  height: 20px;
  animation-delay: 2s;
  animation-duration: 12s;
}

.circles li:nth-child(3) {
  left: 70%;
  width: 20px;
  height: 20px;
  animation-delay: 4s;
}

.circles li:nth-child(4) {
  left: 40%;
  width: 60px;
  height: 60px;
  animation-delay: 0s;
  animation-duration: 18s;
}

.circles li:nth-child(5) {
  left: 65%;
  width: 20px;
  height: 20px;
  animation-delay: 0s;
}

.circles li:nth-child(6) {
  left: 75%;
  width: 110px;
  height: 110px;
  animation-delay: 3s;
}

.circles li:nth-child(7) {
  left: 35%;
  width: 150px;
  height: 150px;
  animation-delay: 7s;
}

.circles li:nth-child(8) {
  left: 50%;
  width: 25px;
  height: 25px;
  animation-delay: 15s;
  animation-duration: 45s;
}

.circles li:nth-child(9) {
  left: 20%;
  width: 15px;
  height: 15px;
  animation-delay: 2s;
  animation-duration: 35s;
}

.circles li:nth-child(10) {
  left: 85%;
  width: 150px;
  height: 150px;
  animation-delay: 0s;
  animation-duration: 11s;
}

@keyframes animate {
  0% {
    transform: translateY(0) rotate(0deg);
    opacity: 1;
    border-radius: 0;
  }

  100% {
    transform: translateY(-1000px) rotate(720deg);
    opacity: 0;
    border-radius: 50%;
  }
}
</style>