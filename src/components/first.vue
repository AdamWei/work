<template>
    <div class="first">
        <img src="../images/game.png" alt="" class="firstImg">
        <div class="firstTitle">BIG.GAME</div>
        <div class="firstIntro">Fair & Exciting EOS Casino Games Platform!</div>
        <span class="firstBotton" @click="toDice">DICE</span>
        <span class="firstBotton" @click="toLotto">LOTTO</span>
    </div>
</template>

<script>
export default {
  name: "first",
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
  min-height: 5rem;
  background: #3a0356 url("../images/firstbg.png") no-repeat;
  background-size: 100% 100%;
  -moz-background-size: 100% 100%;
  text-align: center;
}
.firstImg {
  margin-top: 1rem;
  width: 5rem;
  height: 5rem;
}
.firstTitle {
  font-size: 0.5rem;
  color: #ffffff;
  letter-spacing: 0;
  line-height: 0.5rem;
  font-weight: 400;
  margin-bottom: 0.2rem;
}
.firstIntro {
  font-size: 0.34rem;
  color: #ffaa00;
  letter-spacing: 0;
  line-height: 0.5rem;
  font-weight: 300;
}
.firstBotton {
  display: inline-block;
  width: 1.4rem;
  height: 0.55rem;
  line-height: 0.55rem;
  text-align: center;
  font-size: 0.16rem;
  color: #ffffff;
  letter-spacing: 0;
  margin-right: 0.2rem;
  background: #6d00cc;
  border-radius: 5rem;
}
</style>
