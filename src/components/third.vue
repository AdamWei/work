<template>
    <div class="first">
        <img src="../images/house.png"  class="secondImg1">
        <img src="../images/play.png"  class="secondImg2">   
        <div class="firstTitle">有趣刺激</div>
        <div class="firstIntro">我们将把流行的各种游戏尽快带到我们的平台上， </div>
        <div class="firstIntro">包括彩票、骰子、老虎机、百家乐、21点等等。</div>
        <div class="firstIntro">通过精良的制作给玩家带来有趣和刺激的体验。</div>
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
  margin-top: 2rem;
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
