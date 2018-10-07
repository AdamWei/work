<template>
    <div class="first">
        <img src="../images/number.png"  class="secondImg2">
        <img src="../images/blance.png"  class="secondImg1">
       
        <div class="firstTitle">Provably Fair</div>
        <div class="firstIntro">We believe in the transparency of Blockchain and count on mathematical algorithm.</div>
        <div class="firstIntro">Every game on BIG.GAME is provably fair with public algorithms and open source codes.</div>

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
  margin-top: 1rem;
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
