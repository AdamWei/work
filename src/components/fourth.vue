<template>
    <div>
        <div class="first">
            <img src="../images/money.png"  class="secondImg1">
            <div class="firstTitle">分享利润</div>
            <div class="firstIntro">BIG.GAME将通过分红计划</div>
            <div class="firstIntro">把平台利润和所有玩家共享</div>
            <div class="firstIntro">分红计划即将上线</div>
        </div>
        <div class="first">
            <img src="../images/calculate.png"  class="secondImg1">
            <div class="firstTitle">零手续费</div>
            <div class="firstIntro">无需手续费，随时随地</div>
            <div class="firstIntro">尽享游戏乐趣</div>
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
  height: calc(70vh);
  min-height: 7.5rem;
  background: #5000A0;
  text-align: center;
}
.secondImg1 {
  margin-top: 1.5rem;
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
