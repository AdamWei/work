<template>
    <div class="first">
        <img src="../images/number.png"  class="secondImg2">
        <img src="../images/blance.png"  class="secondImg1">
       
        <div class="firstTitle">公平可验证</div>
        <div class="firstIntro">我们信仰区块链的透明和公开，信仰数学算法。</div>
        <div class="firstIntro">BIG.GAME上的每一个游戏，都是可以被验证没有作弊的</div>

    </div>
</template>

<script>
export default {
  name: "second",
  methods: {
    toDice() {
      this.$router.push({ path: `/dice` });
    },
    toLotto() {
      this.$router.push({ path: `/lotto` });
    }
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
  margin-top: 2rem;
  width: 4.5rem;
  height: 4.5rem;
  text-align: center;
}
.secondImg2 {
  margin-left: 0.2rem;
  width: 2rem;
  height: 2rem;
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
