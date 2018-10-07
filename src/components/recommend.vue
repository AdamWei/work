<template>       
    <div class="container" @click="close">
        <div class="messagebox">
          <i class="close"></i>
          <span class="c-messagebox__point-top"></span>
          <span class="c-messagebox__point-bottom"></span>
          <div class="c-messagebox__cnt">
            <h3 class="c-messagebox__title">推荐奖励</h3>
            <div class="c-msg-info">
              <p class="c-msg-info__item u-mgt15">• 登录后在右上角个人中心中查看专属推荐连接。</p>
              <p class="c-msg-info__item u-mgt15">• 分享链接邀好友。若新用户从您的链接进入网站并完成首次下注，则推荐成功。</p>
              <p class="c-msg-info__item u-mgt15">• 被推荐人每次投注，推荐人都能得到投注金额的相应比例作为佣金。大乐透与掷骰子的佣金分别为投注金额的<span>2%</span>与<span>0.75%</span>。</p>
            </div>
          </div>
        </div>
    </div>
</template>

<script>
export default {
  name: "recommend",
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
    max-height: 3.20rem;
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
</style>
