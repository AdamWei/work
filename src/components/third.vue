<template>
    <div class="first">
        <img src="../images/house.png"  class="secondImg1">
        <img src="../images/play.png"  class="secondImg2">   
        <div class="firstTitle">Fun & Exciting</div>
        <div class="firstIntro">Popular games like Lottery, Dice, Slot, </div>
        <div class="firstIntro">Baccarat and BlackJack will be launched soon.</div>
        <div class="firstIntro">Excellent products bring players fun & excitement.</div>
    </div>
</template>

<script>
export default {
  name: "third",
  methods: {
  }
};
</script>
<style lang="scss" scoped>
.first {
  padding: 0;
  margin: 0;
  width: 100%;
  min-width: 7.5rem;
  height: calc(80vh);
  min-height: 7.5rem;
  background: #6E00A5;
  text-align: center;
}
.secondImg1 {
  margin-top: 1rem;
  width: 4.5rem;
  height: 4.5rem;
  margin-left: 0.2rem;
  text-align: center;
}
.secondImg2 {
  width: 1.2rem;
  height: 1.2rem;
}
.firstTitle {
    font-size: 0.32rem;
    color: #FFAA00;
    letter-spacing: 0;
    line-height: 0.45rem;
    margin-bottom: 0.2rem;
    font-weight: 300;
}
.firstIntro {
    font-size: 0.18rem;
    color: #FFFFFF;
    letter-spacing: 0;
    line-height: 0.35rem;
    font-weight: 100;
}
</style>
