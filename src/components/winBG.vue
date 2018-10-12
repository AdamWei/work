<template>       
    <div class="container" @click="close">
        <div class="messagebox">
          <i class="close"></i>
          <span class="c-messagebox__point-top"></span>
          <span class="c-messagebox__point-bottom"></span>
          <div class="c-messagebox__cnt">
            <h3 class="c-messagebox__title">立即投注赢取BG币</h3>
            <div class="c-msg-info">
              <img class="c-msg-info__icon" src="data:image/png;base64,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" alt="">
              <p class="c-msg-info__item u-mgt15">我们将向参与BIG.GAME的玩家空投BG币，BG币总量<span>10亿</span>，BG币的持有者每季度可参与BIG.GAME平台红利分成。发放数量有限，立即投注参与！</p>
              <p class="c-msg-info__item u-mgt15">掷骰子空投总量为<span>2000万BG币</span>，空投比例为<span>EOS:BG=1:0.4</span>，每投注1个EOS可获得0.4个BG币。</p>
              <p class="c-msg-info__item u-mgt15">大乐透空投总量为<span>2000万BG币</span>，空投比例为<span>EOS:BG=1:1</span>，每投注1个EOS可获得1个BG币。</p>
            </div>
          </div>
        </div>
    </div>
</template>

<script>
export default {
  name: "winBG",
  methods: {
    close(){
      this.$emit('close')
    }
  }
};
</script>
<style lang="scss" scoped>
.container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0,0,0,.6);
  z-index: 9;
}
.messagebox {
    width: 6rem;
    position: absolute;
    left: 50%;
    top: 50%;
    -webkit-transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    background: -webkit-gradient(linear, left top, left bottom, color-stop(7%, #A60F79), color-stop(95%, #BD5521));
    background: -webkit-linear-gradient(top, #A60F79 7%, #BD5521 95%);
    background: -o-linear-gradient(top, #A60F79 7%, #BD5521 95%);
    background: linear-gradient(-180deg, #A60F79 7%, #BD5521 95%);
    border-radius: .24rem;
    -webkit-animation: msgSlideIn .3s;
    animation: msgSlideIn .3s;
    &::before{
      content: ' ';
      display: inline-block;
      width: calc(100% - .16rem);
      height: calc(100% - .16rem);
      background: -webkit-gradient(linear, left top, left bottom, color-stop(7%, #740292), color-stop(95%, #93441E));
      background: -webkit-linear-gradient(top, #740292 7%, #93441E 95%);
      background: -o-linear-gradient(top, #740292 7%, #93441E 95%);
      background: linear-gradient(-180deg, #740292 7%, #93441E 95%);
      position: absolute;
      left: 50%;
      top: 50%;
      -webkit-transform: translate(-50%, -50%);
      -ms-transform: translate(-50%, -50%);
      transform: translate(-50%, -50%);
      border-radius: .16rem;
    }
}
.close {
    display: inline-block;
    background: url(data:image/png;base64,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) no-repeat left top;
    background-size: 100%;
    width: .54rem;
    height: .49rem;
    position: absolute;
    top: -.41rem;
    right: .20rem;
    // cursor: pointer;
}
.c-messagebox__point-top {
    display: inline-block;
    height: .08rem;
    width: 1.20rem;
    position: absolute;
    opacity: 0.5;
    background-image: -webkit-gradient(linear, right top, left top, from(rgba(255, 255, 255, 0)), color-stop(50%, #FFFFFF), to(rgba(255, 255, 255, 0)));
    background-image: -webkit-linear-gradient(right, rgba(255, 255, 255, 0) 0%, #FFFFFF 50%, rgba(255, 255, 255, 0) 100%);
    background-image: -o-linear-gradient(right, rgba(255, 255, 255, 0) 0%, #FFFFFF 50%, rgba(255, 255, 255, 0) 100%);
    background-image: linear-gradient(-90deg, rgba(255, 255, 255, 0) 0%, #FFFFFF 50%, rgba(255, 255, 255, 0) 100%);
    top: 0;
    left: 1.00rem;
}
.c-messagebox__point-bottom {
    display: inline-block;
    height: .08rem;
    width: 1.20rem;
    position: absolute;
    opacity: 0.5;
    background-image: -webkit-gradient(linear, right top, left top, from(rgba(255, 255, 255, 0)), color-stop(50%, #FFFFFF), to(rgba(255, 255, 255, 0)));
    background-image: -webkit-linear-gradient(right, rgba(255, 255, 255, 0) 0%, #FFFFFF 50%, rgba(255, 255, 255, 0) 100%);
    background-image: -o-linear-gradient(right, rgba(255, 255, 255, 0) 0%, #FFFFFF 50%, rgba(255, 255, 255, 0) 100%);
    background-image: linear-gradient(-90deg, rgba(255, 255, 255, 0) 0%, #FFFFFF 50%, rgba(255, 255, 255, 0) 100%);
    bottom: 0;
    right: 1.00rem;
}
.c-messagebox__cnt {
    z-index: 2;
    padding: .16rem .1rem .40rem .1rem;
    height: 100%;
    width: 100%;
    position: relative;
}
.c-messagebox__title {
    line-height: .50rem;
    height: .50rem;
    overflow: hidden;
    font-size: .20rem;
    font-weight: 500;
    color: #E9C5FF;
    text-align: center;
    margin-bottom: .15rem;
    position: relative;
    &::before{
          content: ' ';
    width: 4.00rem;
    height: 1.00rem;
    border-radius: 1.00rem;
    display: inline-block;
    background: -webkit-gradient(linear, left top, right top, from(rgba(73, 14, 108, 0.4)), color-stop(20%, #4a0e6c), color-stop(80%, #490e6c), to(rgba(73, 14, 108, 0.4)));
    background: -webkit-linear-gradient(left, rgba(73, 14, 108, 0.4), #4a0e6c 20%, #490e6c 80%, rgba(73, 14, 108, 0.4));
    background: -o-linear-gradient(left, rgba(73, 14, 108, 0.4), #4a0e6c 20%, #490e6c 80%, rgba(73, 14, 108, 0.4));
    background: linear-gradient(to right, rgba(73, 14, 108, 0.4), #4a0e6c 20%, #490e6c 80%, rgba(73, 14, 108, 0.4));
    position: absolute;
    top: 0;
    left: 50%;
    -webkit-transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    z-index: -1;
    }
}
.c-msg-info {
    font-size: .14rem;
    color: #E9C5FF;
    font-weight: 300;
    text-align: center;
    max-height: 5.20rem;
    overflow-y: auto;
    padding: 0 .18rem;
}
.c-msg-info__item {
    text-align: left;
    line-height: .24rem;
    margin-top: .15rem;
}
.c-msg-info__item span, .c-msg-info__item a {
    color: #F5A623;
    text-decoration: none;
}
.c-msg-info__icon {
    width: .90rem;
    height: .90rem;
}
</style>
