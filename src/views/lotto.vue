<template>
  <div class="lotto">
    <div class="c-bet">
      <div class="c-bet__head">
        <div class="c-bet__head--title"></div>
        <div class="c-bet__head--btnWraps">
          <div class="left-btn">
                <div>EOS20</div>
                <div>第 T001014 期</div>
          </div>
          <div class="eosLogo logo"></div>
          <div class="eosLogo2 logo"></div>
          <div class="right-btn">
              <div>EOS100</div>
              <div>第 S000166 期</div>
            </div>
        </div>
      </div>

    <div class="c-bet__form">
      <div class="out-box">
         <div class="inside-box">
          <div class="form">
           <div class="s-title">
              <i class="s-title__icon coin"></i>奖池<span>20 EOS</span>
              <div class="details">本期详情</div>
            </div>
             <div class="c-progress-box l-clear-float">
                <div class="c-progress-wrap">
                 <div class="c-progress" style="width: 67.5%;"></div>
                </div>
                <span class="l-clear-float__left">135/200 注</span>
              </div>
                <div class="s-title"><i class="s-title__icon bet"></i>投注</div>
                
               
                <div class="bet-box">
                  <div class="bet-num">
                    <div class="numBtn">-</div>
                    <input type="text" value="1">
                    <div class="numBtn">+</div>
                  </div>
                  <div class="bet-btn">
                    <div class="bet-btn-item">10X</div>
                  </div>
                  <div class="bet-btn">
                    <div class="bet-btn-item">MAX</div>
                  </div>
                </div>
                <div class="account-info">
                      <div class="s-title">
                        <i class="s-title__icon amount"></i>0.1 EOS
                      </div>
                      <div class="s-title"><i class="s-title__icon account"></i>0</div>
                  </div>
                  <div class="buy-btn">
                    <div class="buy-btn__content">登录</div>
                  </div>
                 <div class="bet-tips">
                     <i class="tips-icon"></i>若投注超出本期可购数量，超出部分将购买下期
                </div>
            </div>
         </div> 
      </div> 
    </div>



    </div>


    <tableList/>
    <bottom/>
  </div>
</template>
<script>
import axios from "axios";
import bottom from "@/components/bottom.vue";
import tableList from "@/components/table.vue";
export default {
  components: {
    bottom,
    tableList
  },
  data() {
    return {};
  },
  created() {},
  methods: {}
};
</script>
<style lang="scss" scoped>
.lotto {
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
}
.c-bet {
    width: 100%;
    min-width: 7.50rem;
    height:9rem;
    background-image: url("../images/img_background.jpg");
    background-repeat: no-repeat;
    background-color: #3a0356;
    background-size: 100% 100%;
    background-position: center center;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-align: center;
    align-items: center;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
}
.c-bet__head {
    width: 7.50rem;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-pack: center;
    justify-content: center;
    position: relative;
}
.c-bet__head--title {
    height: 0.60rem;
    width: 3.20rem;
    text-align: center;
    background: url("../images/bg_toptitle.png") no-repeat;
    background-size:  3.20rem 0.60rem;
    position: absolute;
    top: 0rem;
}
.c-bet__head--btns {
    margin-top: 0.6rem;
    width: 1.72rem;
    height: 0.86rem;
    background: url("../images/img_EOSbtn_botton.png");
    display: -ms-flexbox;
    display: flex;
    -ms-flex-direction: row;
    flex-direction: row;
    -ms-flex-pack: center;
    justify-content: center;
}
.c-bet__head--btnWraps { 
    width: 5.6rem;
    height: 0.86rem;
    margin-top: 0.6rem;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-direction: row;
    flex-direction: row;
    -ms-flex-pack: justify;
    justify-content: space-between;
    -ms-flex-align: center;
    align-items: center;
    position: relative;
}

.c-bet__head--btnWraps .eosLogo {
    background: url("../images/img_title_EOSlogo.png") no-repeat;
    background-size: 50% 50%;

}
.c-bet__head--btnWraps .logo {
    width: 2.60rem;
    height: 2.60rem;
    position: absolute;
    left: 50%;
    top: 0rem;
    margin-left: -0.7rem;
}
.c-bet__head--btnWraps .eosLogo2 {
    background: url("../images/img_title_EOSlogo1.png")  no-repeat;
    -webkit-animation: twinkling infinite .5s linear;
    animation: twinkling infinite .5s linear;
    background-size: 50% 50%;
}
.c-bet__head--btnWraps .right-btn {
    padding-top: 0.1rem;
    box-sizing: border-box;
    border:1px solid #571194;
    border-top-right-radius:0.1rem;
    border-bottom-right-radius:1rem;  
    text-align: center;
    width: 2.60rem;
    height: 0.80rem;
    line-height: 0.3rem;
    font-size: 0.12rem;
    color:#fff;
}
.c-bet__head--btnWraps .left-btn {
    padding-top: 0.1rem;
    box-sizing: border-box;
    border:1px solid #571194;
    border-top-left-radius:0.1rem;
    border-bottom-left-radius:1rem; 
    text-align: center;
    line-height: 0.3rem;
    width: 2.60rem;
    height: 0.80rem;
    font-size: 0.10rem;
    color:#fff;
}

.c-bet__form{
  margin-top: 0.5rem;
}
.c-bet__form .out-box {
    height: 5.20rem;
    width: 5.58rem;
    position: relative;
    border-radius: 0.40rem;
    padding: 0.12rem;
    background-image: -webkit-gradient(linear, left top, left bottom, from(#D51387), to(#F5760B));
    background-image: -webkit-linear-gradient(top, #D51387 0%, #F5760B 100%);
    background-image: -o-linear-gradient(top, #D51387 0%, #F5760B 100%);
    background-image: linear-gradient(-180deg, #D51387 0%, #F5760B 100%);
}

.c-bet__form .inside-box {
    width: 95%;
    height: 95%;
    padding: 0.12rem;
    border-radius: 0.30rem;
    background-image: -webkit-gradient(linear, left top, left bottom, from(#9F03A7), to(#B75D09));
    background-image: -webkit-linear-gradient(top, #9F03A7 0%, #B75D09 100%);
    background-image: -o-linear-gradient(top, #9F03A7 0%, #B75D09 100%);
    background-image: linear-gradient(-180deg, #9F03A7 0%, #B75D09 100%);
}
.c-bet__form .form {
    background: #560FC1;
    width: 95%;
    height: 95%;
    border-radius: 0.22rem;
    padding: 0.26rem 0.15rem 0 0.14rem;
    color: #fff;
}
.c-bet__form .form .s-title {
    font-size: 16px;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-direction: row;
    flex-direction: row;
    -ms-flex-align: center;
    align-items: center;
    padding: 0 9px 12px 0;
    position: relative;
}
.c-bet__form .form .s-title__icon {
    display: inline-block;
    width: 0.32rem;
    height: 0.32rem;
    margin-right: 9px;
    background-size: 100%;
}
.c-bet__form .form .s-title span {
    font-size: .14rem;
    color: #F5A623;
    margin-left: 0.10rem;
}
.c-bet__form .form .s-title .coin {
    background: url("../images/icon_home_money.svg");
}
.c-bet__form .form .s-title span {
    font-size: .14rem;
    color: #F5A623;
    margin-left: 0.10rem;
}
.c-bet__form .form .s-title .details {
    background: #34058A;
    border-radius: 0.20rem;
    height: 0.38rem;
    text-align: center;
    line-height: 0.38rem;
    padding: 0 0.15rem;
    position: absolute;
    right: 0;
    font-size: 0.14rem;
    color: #FFFFFF;
    cursor: pointer;
}
.c-bet__form .form .c-progress-box {
    width: 4.8rem;
    height: 0.90rem;
    margin: 0 auto;
    padding: .21rem .21rem .21rem .21rem;
    background: url("../images/bg_touzhu_jiangjinchi.jpg") no-repeat;
    position: relative;
    background-size: 4.8rem 0.92rem;
    z-index: 1;
    margin-bottom: 0.31rem;
}
.c-bet__form .form .c-progress-box .c-progress-wrap {
    background-color: #34048a;
    border-radius: 0.30rem;
    width: 4.40rem;
    overflow: hidden;
    height: 0.50rem;
    z-index: -1;
    position: absolute;
}
.c-bet__form .form .c-progress-box .c-progress {
    height: 0.50rem;
    background-image: -webkit-linear-gradient(359deg, #FDA728 0px, #FF2F7A 220px, #FF09A1 440px);
    background-image: -o-linear-gradient(359deg, #FDA728 0px, #FF2F7A 220px, #FF09A1 440px);
    background-image: linear-gradient(-269deg, #FDA728 0px, #FF2F7A 220px, #FF09A1 440px);
    border-radius: 0 .30rem .30rem 0;
    -webkit-transition: width 1s;
    -o-transition: width 1s;
    transition: width 1s;
}
.c-bet__form .form .c-progress-box span:nth-child(2) {
    margin-left: .18rem;
}
.c-bet__form .form .c-progress-box span {
    display: inline-block;
    line-height: .50rem;
    z-index: 1;
    font-size: .20rem;
    font-weight: 500;
}
.c-bet__form .form .s-title {
    font-size: 0.16rem;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-direction: row;
    flex-direction: row;
    -ms-flex-align: center;
    align-items: center;
    padding: 0 0.09rem .12rem 0;
    position: relative;
}
.c-bet__form .form .s-title .bet {
    background: url("../images/icon_home_buy.svg");
}
.c-bet__form .form .s-title__icon {
    display: inline-block;
    width: .32rem;
    height: .32rem;
    margin-right: 0.09rem;
    background-size: 100%;
}
.c-bet__form .form .bet-box {
    width: 4.82rem;
    height: 0.60rem;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-direction: row;
    flex-direction: row;
    margin-bottom: 0.30rem;
}
.c-bet__form .form .bet-box .bet-num {
    width: 2.78rem;
    height: .60rem;
    background: #34058A;
    border-radius: .30rem;
    padding: .05rem .06rem .03rem;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-pack: justify;
    justify-content: space-between;
}
.c-bet__form .form .bet-box .bet-num .numBtn {
    background-image: -webkit-linear-gradient(269deg, #CA6FFF 1%, #BB38FF 94%);
    background-image: -o-linear-gradient(269deg, #CA6FFF 1%, #BB38FF 94%);
    background-image: linear-gradient(-179deg, #CA6FFF 1%, #BB38FF 94%);
    -webkit-box-shadow: 0 4px 0 0 #8011CB, inset 0 1px 1px 0 #E5B8FF;
    box-shadow: 0 4px 0 0 #8011CB, inset 0 1px 1px 0 #E5B8FF;
    border-radius: .30rem;
    width: .48rem;
    height: .48rem;
    line-height: .43rem;
    font-size: .40rem;
    text-align: center;
    cursor: pointer;
}
.c-bet__form .form .bet-box .bet-num input {
    line-height: .52rem;
    font-family: SFUIDisplay-Bold;
    font-size: .24rem;
    color: #FFFFFF;
    background: transparent;
    outline: none;
    border: none;
    width: 1.59rem;
    text-align: center;
}
.c-bet__form .form .bet-box .bet-btn {
    background: #34058A;
    border-radius: .34rem;
    height: .60rem;
    padding: .04rem .05rem .08rem .05rem;
    width: .90rem;
    margin-left: .12rem;
}
.c-bet__form .form .bet-box .bet-btn .bet-btn-item {
    height: .48rem;
    min-width: .80rem;
    background-image: -webkit-linear-gradient(269deg, #F93EFE 4%, #D80994 94%);
    background-image: -o-linear-gradient(269deg, #F93EFE 4%, #D80994 94%);
    background-image: linear-gradient(-179deg, #F93EFE 4%, #D80994 94%);
    -webkit-box-shadow: 0 4px 0 0 #900065, inset 0 1px 1px 0 #FEADFF;
    box-shadow: 0 4px 0 0 #900065, inset 0 1px 1px 0 #FEADFF;
    border-radius: .30rem;
    line-height: .48rem;
    text-align: center;
    font-size: .20rem;
    color: #FFFFFF;
    font-weight: 500;
    cursor: pointer;
}
.c-bet__form .form .account-info {
    display: -ms-flexbox;
    display: flex;
    width: 4.65rem;
    margin-left: 4px;
    -ms-flex-direction: row;
    flex-direction: row;
    -ms-flex-pack: justify;
    justify-content: space-between;
    margin-bottom: .18rem;
}
.c-bet__form .form .s-title {
    font-size: .16rem;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-direction: row;
    flex-direction: row;
    -ms-flex-align: center;
    align-items: center;
    padding: 0 .09rem .12rem 0;
    position: relative;
}
.c-bet__form .form .s-title .amount {
    background: url("../images/icon_home_coin.svg");
}
.c-bet__form .form .s-title__icon {
    display: inline-block;
    width: .22rem;
    height: .22rem;
    margin-right: .09rem;
    background-size: 100%;
}
.c-bet__form .form .s-title {
    font-size: .16rem;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-direction: row;
    flex-direction: row;
    -ms-flex-align: center;
    align-items: center;
    padding: 0 .09rem .12rem 0;
    position: relative;
}
.c-bet__form .form .buy-btn {
    background: #34058A;
    border-radius: .30rem;
    width: 4.82rem;
    height: .53rem;
    position: relative;
}
.c-bet__form .form .buy-btn__content {
    background-image: -webkit-gradient(linear, left top, left bottom, color-stop(3%, #FFA330), color-stop(98%, #FC7B0E));
    background-image: -webkit-linear-gradient(top, #FFA330 3%, #FC7B0E 98%);
    background-image: -o-linear-gradient(top, #FFA330 3%, #FC7B0E 98%);
    background-image: linear-gradient(-180deg, #FFA330 3%, #FC7B0E 98%);
    -webkit-box-shadow: 0 8px 0 0 #C45907, inset 0 1px 1px 0 #FFE8A6;
    box-shadow: 0 8px 0 0 #C45907, inset 0 1px 1px 0 #FFE8A6;
    border-radius: .30rem;
    height: .42rem;
    width: 4.72rem;
    text-align: center;
    font-size: .20rem;
    font-weight: 500;
    line-height: .52rem;
    position: absolute;
    cursor: pointer;
    left: .05rem;
    top: -.13rem;
}
.c-bet__form .form .bet-tips {
    width: 100%;
    font-size: .1rem;
    text-align: center;
    font-weight: 100;
    height: .2rem;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-direction: row;
    flex-direction: row;
    -ms-flex-pack: center;
    justify-content: center;
    -ms-flex-align: center;
    align-items: center;
    margin-top: .08rem;
}
.c-bet__form .form .bet-tips .tips-icon {
    width: .24rem;
    height: .24rem;
    display: inline-block;
    // background: url("../images/icon_home_tips.svg");
    background-size: 100%;
    margin-right: -0.30rem;
    font-size: .1rem;
}
</style>
