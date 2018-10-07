<template>
    <div>
        <div class="first">
            <img src="../images/money.png"  class="secondImg1">
            <div class="firstTitle">Profit Sharing</div>
            <div class="firstIntro">BIG.GAME will share the profits</div>
            <div class="firstIntro">to all players through a dividend plan.</div>
            <div class="firstIntro">Coming soon!</div>
        </div>
        <div class="first">
            <img src="../images/calculate.png"  class="secondImg1">
            <div class="firstTitle">Feeless</div>
            <div class="firstIntro">Gamble joyfully anytime, anywhere,</div>
            <div class="firstIntro">with zero fees.</div>
        </div>
    </div>
</template>

<script>
export default {
  name: "fourth",
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
  background: #5000A0;
  text-align: center;
}
.secondImg1 {
  margin-top: 1rem;
  width: 4.5rem;
  height: 4.5rem;
  text-align: center;
  margin-left: 1rem;
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
