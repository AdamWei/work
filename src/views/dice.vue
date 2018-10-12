<template>
<div class="box">
  <div class="c-dice">
        <div class="c-diceOrder">
            <div class="c-diceOrder__panel">
                <div class="c-diceOrder__panel-topTitle dice"></div>
                <div class="c-diceOrder__panel-screen">
                    <div class="light ">
                        <div class="left1"></div>
                        <div class="left2"></div>
                        <div class="right1"></div>
                        <div class="right2"></div>
                    </div>
                <p class="decor"></p>
                <div class="screen-content clear">
                    <div class="left-box">
                        <div class="item">
                                <div class="title">数字小于获胜</div>
                            <div class="text">
                                <i class="down-arrow"></i>6
                            </div>
                        </div>
                        <div class="item">
                            <div class="title">赔率</div>
                            <div class="text">16.33X</div>
                        </div>
                        <div class="item">
                            <div class="title">中奖概率</div>
                            <div class="text">6.00 %</div>
                        </div>
                    </div>
                    <div class="right-box">
                        <div class="c-dice-num">
                            <div class="c-dice-num__left">
                                <img src="../images/img_no_00.svg">
                            </div>
                            <div class="c-dice-num__right">
                                <img src="../images/img_no_00.svg">
                            </div>
                        </div>
                    </div>
                </div>
                <div class="middle-content clear">
                    <div class="bonus-box">
                        <div class="bonus-title">赢取奖金</div>
                        <div class="bonus-money">35.9333</div>
                    </div>
                    <div class="slider-box">
                        <div class="slide-bg">
                            <div class="slide-fill">
                                <div class="slide-box">
                                    <div class="slide-pointer">6</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="control-box clear">
                    <div class="account-box">
                        <div class="account-content">
                            <input type="text" value="2.2"></div>
                        </div>
                        <div class="button-box">
                            <span class="btn1"></span>
                            <span class="btn2"></span>
                            <span class="btn3"></span>
                        </div>
                        <div class="login-btn"></div>
                    </div>
                    <div class="info-box clear">
                        <span class="eos-box"><i></i><span>0.0000</span></span>
                        <span class="bg-box">
                            <span class="bg-content"><i></i><span>0.0000</span></span>
                        </span>
                    </div>
                </div>
            </div>
        </div>
  </div>
<bottom></bottom>
</div>

</template>
<script>
import axios from "axios";
import bottom from '@/components/bottom.vue'
export default {
  components: {
      bottom
  },
  data() {
    return {};
  },
  created() {},
  methods: {}
};
</script>
<style lang="scss" scoped>
.box{
    padding-top: .6rem;
    background-color: #3a0356;
}
.c-dice{
    margin-bottom: 1.43rem;
}
.c-dice .c-diceOrder {
    width: 100%;
    height: 7.60rem;
    // background-image: url(../images/dice_bg.png);
    background-size: 19.20rem 6.50rem;
    background-position: center -.60rem;
    background-repeat: no-repeat;
    background-color: #3a0356;
    position: relative;
    padding-top: .50rem;
}
.c-dice .c-diceOrder:before {
    content: '';
    height: 1.01rem;
    width: 2.02rem;
    background-image: url('../images/img_logo_dice1.png');
    background-size: 2.02rem 1.01rem;
    background-repeat: no-repeat;
    position: absolute;
    top: -.60rem;
    left: 50%;
    margin-left: -1.01rem;
}
.c-dice .c-diceOrder__panel {
    margin: 0 auto;
    width: 7.5rem;
    height: 7.04rem;
    background-image: url(../images/img_consoles.png);
    background-size: 100%;
    background-repeat: no-repeat;
    position: relative;
}
.c-dice .c-diceOrder__panel-topTitle {
    background-position: center;
    width: 1.92rem;
    height: .55rem;
    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAXYAAABuCAMAAAAEcsgVAAAC/VBMV…lj7MjZoR6yI9yYKjvUN9du7MjZWYV9UmLff13f3apZfwAw3Y8LoqK46gAAAABJRU5ErkJggg==);
    background-size: 100%;
    position: absolute;
    left: 50%;
    margin-left: -.96rem;
    top: .17rem;
}
.c-dice .c-diceOrder__panel-topTitle.dice:before {
    background-image: url(../images/img_dice.svg);
}
.c-dice .c-diceOrder__panel-topTitle:before {
    content: '';
    width: 1.16rem;
    height: .46rem;
    position: absolute;
    top: .06rem;
    left: 50%;
    margin-left: -.58rem;
    background-repeat: no-repeat;
}
.c-dice .c-diceOrder__panel-screen {
    width: 5.24rem;
    height: 2.70rem;
    position: absolute;
    top: .80rem;
    left: 50%;
    margin-left: -2.62rem;
    background-image: -webkit-gradient(linear, left top, left bottom, from(#8D3A3A), to(#BD872E));
    background-image: -webkit-linear-gradient(top, #8D3A3A 0%, #BD872E 100%);
    background-image: -o-linear-gradient(top, #8D3A3A 0%, #BD872E 100%);
    background-image: linear-gradient(-180deg, #8D3A3A 0%, #BD872E 100%);
    border-radius: .14rem;
    padding: .08rem;
}
.c-dice .c-diceOrder__panel-screen .light .left1 {
    left: -.22rem;
}
.c-dice .c-diceOrder__panel-screen .light > div {
    width: .21rem;
    height: 2.74rem;
    position: absolute;
    background-image: url(../images/icon_light_normal1.png);
    background-size: 100%;
    top: 0;
}
.c-dice .c-diceOrder__panel-screen .light .left2 {
    left: -.22rem;
    background-image: url(../images/icon_light_normal2.png);
    -webkit-animation: twinkling infinite .6s linear;
    animation: twinkling infinite .6s linear;
}
.c-dice .c-diceOrder__panel-screen .light > div {
    width: .21rem;
    height: 2.74rem;
    position: absolute;
    background-image: url(../images/icon_light_normal1.png);
    background-size: 100%;
    top: 0;
}
.c-dice .c-diceOrder__panel-screen .light .right1 {
    right: -.22rem;
}
.c-dice .c-diceOrder__panel-screen .light > div {
    width: .21rem;
    height: 2.74rem;
    position: absolute;
    background-image: url(../images/icon_light_normal1.png);
    background-size: 100%;
    top: 0;
}
.c-dice .c-diceOrder__panel-screen .light .right2 {
    right: -.22rem;
    background-image: url(../images/icon_light_normal2.png);
    -webkit-animation: twinkling infinite .6s linear;
    animation: twinkling infinite .6s linear;
}
.c-dice .c-diceOrder__panel-screen .light > div {
    width: .21rem;
    height: 2.74rem;
    position: absolute;
    background-image: url(../images/icon_light_normal1.png);
    background-size: 100%;
    top: 0;
}
.c-dice .c-diceOrder__panel-screen .decor {
    position: absolute;
    width: 3.10rem;
    height: .08rem;
    background-image: -webkit-gradient(linear, right top, left top, from(rgba(255, 255, 255, 0)), color-stop(50%, #FFFFFF), to(rgba(255, 255, 255, 0)));
    background-image: -webkit-linear-gradient(right, rgba(255, 255, 255, 0) 0%, #FFFFFF 50%, rgba(255, 255, 255, 0) 100%);
    background-image: -o-linear-gradient(right, rgba(255, 255, 255, 0) 0%, #FFFFFF 50%, rgba(255, 255, 255, 0) 100%);
    background-image: linear-gradient(-90deg, rgba(255, 255, 255, 0) 0%, #FFFFFF 50%, rgba(255, 255, 255, 0) 100%);
    bottom: 0;
    right: 1.10rem;
    opacity: 0.8;
}
.c-dice .c-diceOrder__panel-screen .screen-content {
    position: relative;
    width: 100%;
    height: 100%;
    background-color: #3F2D43;
    border-radius: .06rem;
    border: .03rem solid #2c1c2f;
}
.c-dice .c-diceOrder__panel-screen .screen-content .left-box {
    height: 100%;
    width: 1.70rem;
    border-right: .03rem solid #3A1F40;
    padding: .20rem 0 0 0;
    float: left;
}
.c-dice .c-diceOrder__panel-screen .screen-content .left-box .item {
    height: 33%;
}

.c-dice .c-diceOrder__panel-screen .screen-content .left-box .item .title {
    background-image: url(../images/img_bar_left.svg);
    width: 1.50rem;
    height: .24rem;
    line-height: .24rem;
    font-size: .12rem;
    color: #FFF3E0;
    text-align: center;
    margin: 0 auto;
}
.c-dice .c-diceOrder__panel-screen .screen-content .left-box .item .text {
    font-size: .32rem;
    color: #FFCB01;
    font-family: 'Ozone';
    text-align: center;
}
.c-dice .c-diceOrder__panel-screen .screen-content .left-box .item .text .down-arrow {
    display: inline-block;
    background-image: url(../images/icon_lower.svg);
    background-size: .20rem .12rem;
    background-repeat: no-repeat;
    background-position: center;
    width: .20rem;
    height: .21rem;
    margin-right: .07rem;
}
.c-dice .c-diceOrder__panel-screen .screen-content .right-box {
    float: left;
    height: 100%;
    width: 3.32rem;
    position: relative;
}
.c-dice-num {
    height: 2.50rem;
    width: 3.32rem;
}
.c-dice-num__left {
    width: 35%;
    float: left;
    background: url(../images/img_no_normal.svg) no-repeat 60% 50%;
    background-size: 80%;
    height: 70%;
    padding: 0 .16rem 0 .18rem;
    margin-top: .45rem;
}
.c-dice-num__right {
    float: right;
    width: 35%;
    background: url(../images/img_no_normal.svg) no-repeat 40% 50%;
    background-size: 80%;
    height: 70%;
    padding: 0 .19rem 0 .15rem;
    margin-top: .45rem;
}
.clear:after {
    display: block;
    clear: both;
    visibility: hidden;
    height: 0;
    overflow: hidden;
    content: "";
}
.c-dice .c-diceOrder__panel-screen .middle-content {
    width: 5.50rem;
    margin-top: .19rem;
    margin-left: -.18rem;
}
.c-dice .c-diceOrder__panel-screen .middle-content .bonus-box {
    width: 1.72rem;
    height: .86rem;
    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAVgAAACsCAMAAAAJxkTJAAACglBMVEUAAADQUFDh5VL/tbXnp6fYb2//+/Pgjo7/+e3ZdnbNRETy8o3MNjaXWzfY2E/g5FLloqL/+e3f5FHlnJz/+Oz/+e/gkpLgiYn/+ezg5FH/+OrXa2vg5FP/+OjTZGTVX1/g41T/+Ofi6VfMPDzo6FHMMzPdhobSVFT+9+ufajmthz/f5FHW0k/g41L/+e7+9OfgkpLqrang5FHOwEvcf3/g41L/+OvUa2v98N3NTU3/+eL/+OHLPDz/9OnINzfj/1XjkpLijo7im5fVVVX/+OQ/LUN/MC7EKSm/KyvAKirCKiq+Kyu/LCzDKirBKyvFKCjHKCjf41HGKCjGKSn+8dr/8tvEKir/8t3/+vLpqan/+vHnqanCKyvoqKj/89776cv99en76s376cr66Mn76MjALCz/893mqan99ej+9+v86s3758fmqqr868/86sxCLULHLS3LPz2viT9kLjfKRUTORUP748/PTUqPTDXJMTGEOC/dgoLLOzr/9eXzybbnpqbjmprTZGBILkBRLj1YLjtsLzR5MDB4LzD/+O766+LrsrHlqqrut6fmm469i3rNUlLJNjX/9OH96tT238Hln5+pbmLRWlaUTkiFODXENTX87+j42sfxv67npaTrqZvhkpLjkIThiH3dgXbYbW3SVVHFOzj+9e320sDtsaLkmZnno5W+kYnchYXcfX3XdnbbdGvXcWfVYWDb3FCdXlDNVU/AqkWKQTyfazqIQDH+9+rz49jvv73YaGDBMjD22dTs2c710srxxcLv2LruurjpzrPpq6vuu6nprprTrZbEnJTciorDloTfj4DdeXDYd2uqdWjSyky0k0GhcDrUtqzUtqu9jHvZn1zUAAAARXRSTlMAS4AB+or6x8aYKgwL/fnz7uzo4t/Ozr+2qoiBcnBwalJJIx4WBbZT+fHb2dbT0tLQy7+xqaWXg0JCLCIiFxcJ0Me4VEx8FzRGAAALWElEQVR42uyZ20sUURzHJ9pdzXwoulKYSFhvURBdKYqCxYVlxdnN9Lg+OgU9zMBeWNx17c1EaY0Q8m5KWSjmYxRRRL31P/U7czr+xh9zdmZdg2jn08Fz/Z7v7/xmOjil1cT+mx1tV042Xzh6OPLQg5nxvnRfGkqfrDnYRug6ycxDv3xx1dfg/2lMuXfk8NELzSevtHXc3K/9HQ52nDpG0qmg/2E/lJlxOAEgD0fbimTg3Bexjw/Db256/22aV+lL/CPHTnUc1PaYG6eaI2gkzAEMQIIB8XfW7W1RJkD2Jd+chwTU/uNEj/jy//6GxK/2jDSfuqHtGbfajklfEgBpE56NV39DWR+D4mzvWDtOtlP6z6CeePnxh7ziXn441nZL2wuunYz0I2MfS6WpqcFe+MPhDdpGRird9TA7SHH3XKjLJZ8j8VOmpqZKpY9j/Ujk5DWtXvbd/fH1jczplHsi1WMjhe46WBD7SJRem/WYZHPq+Il/6RFmt/m+Vg/37jCAp/ZxCY2GeoegiP7Q4BAUDEDMbddz9WT21xBJqMI/W1deq8Tv4l96LO+5S+e13dJyggkWVyZfgEGqNwVFmmKfQ+ckcyYeoqe7Bwrt0zaSxYMCSv+cQo+o/a3ZavG7+g+WxiCtnyAtJ1q03dAaDjGbYf5GFCeTvRw0wNoxDmCAqSFoT5jqA1JosnM79lf5ryn02FZ6FGerx6/wfzvPbELh1l1crkcYJ71h8UAA631SHEaJ8+1F1kyh54dxP7hzXu/W9R79z/ga2d/d/7VST/en/sW3HvG7+r/90NNtbaQZ58g+rTY6w33ibS3+CQqi1bMLyZQkmUpCSflhQRd6ODM/mGjDD0C2FQl4naK4+ecVehxT+Fcwr/6Z3dRtfXGYcfrCnVoNnG1inHerdgBIdk0mkx7QWQNQ4fz7HopMAEk0Qc+r90X/nK7Sk3FKZcQ7fjo++8vc1j9/xzhNZ2u4Bg4xoLxiYoCAHWR+QpqhsQQ6rnOpSdQrD41jOKfnlIfEsQmlHsfd/AsjPuPHfu616dzTXCkz4JDv66A9bb+uWfcErM7hE0TIGBmfdE1goieR0BOi7RiDIldOJL29lhV6jwdYmPOKn47nlgs0/oz90qbbNV+cFrdrQedg0FhPjyRrZcmhp4mFIpLhnBcs+zj8ahU99mlt/kzWxoulgkv8BXHTnta82X+AAeWthAAP7kzEVs2pXd6hTwB0T6yRVR8HNpV6dfwJc6LGtE5WFPFvlRlwYL9nXi8zYD6v6zJYrOVYNBGNfl5Y2pzOWhVTsc5Lr0d1wb+qN4v51c+bSxM5O61FtT4/z4DLXpm139eXWS6Ggk89qou+84nJNWi0Pfcf6a3Py1ZVffal/c76uF9HLdsIitNYPlEcJweQfaCx9MVRz3u23c5rJSoNsSZPuCqJRtNX7My2a0r2pfk9YBGZwljdbjy9xW+D9D7l99YhmJ7P1GpOxxpRn5nnXwqKb7DOJpgs56MBuyBf5l+3nZobYQZsef4V8JhrVP1TBoRdL1gGDEcDdskwA1yu2dYjMD5aeBB9ACW6axpXXxjl/z7b6noRlDMehsq2pJH1mbLbZdASgtEVxWYeZriusfUrkMIQ/X+wE/wiMIkRbgDgHNbUqLH1Jr8MTmg7OM+A555PjY4Ro0bXP2fAec3JRRhZj0fjUPAJxR+IPjWX66hJoF+HNF6kv2oZRfp0nGaSamsCvZUmv3I1QX8DJsUiinM8Fo9BcZ0P9PHoBv/+wrxeZ4C1vSgWFWL4AU26qTKYQB+PWwy4rknOMWYMxwAUAnQz2rbBfqDnDBuMnZN5vR2CxGbwKXFkm46pjQI9b2eYYYRua4IzhmEsumwAKE0o8UAv5hYNg53RBMchy09xktQ+gwj0ov0UEntcs2kxgFexgD3hlQG0aJyr0FrvinVBqa5xrqH9QC/b65DOqxqnCVrTdPFAbGCga4CaqYMI9HJuGtLZpAGtIX4TdAFkQyhYi3n6lHAs0Ev9qyfGk1Ar/5yFxqJzAewrNqdjoII+zjvWBnpcuwgJ5Z+14d/sls9LG0EUx0e0UI+C9OixeJPePRWyrCT4L2w2u7LZZE0OCfQmRI2Spk2gMSaFHoqQi0IQDB4EEUTqT7y0/X/6xunkrS+uIT+glZ0Pw76ZN+87u3xnslnHc9qyEEERhc7zqPRY13Yc5xX/2IJYfVS4vLQMTdaJMQAB58hiSo/6KpzYN4xNTkH8KgUUzGP/qZzSY45/cE1NskXPc3Z6iwQ4JpHMKb1fv+N43iKbcBzvhhQhZNGgGqX3z93AkZ1gc3Bi20/vlr6sQ+vdJX1J5HFXld6vb3ueN8emHadckIW4GyCGhovABbpciH2sUXq/vgAndpq998rlKi/ABQFcjCwuIq1Xev+4Wi6X37LXbulk/363pVPkoqQfhNJ3yZe9j+/Yguu6X0xztfZtf6+QXwHxEDfEftj1rc79908l111gs2DsKhhrrnKstcu7w87pyz0t/0wfyxf2Pv+omdxLsHSWzcAVHOUJTspMpcxDXTEArcO7yzUL/ePGzrB5uJoIP7lmQX+WFX0F2nMV4dLvUv/A0nnmAikB2C3ooHi4Bw2XvkP9i4OnDC5x6BumYaSMvwUf/p/T8BL0eeqfG48LYx+cFpNwMTOtWEyPPRZDAhr2o7FoVI/KPK0Nl75F/YsDjF+MTMbI8KSYNE57FwAgYN83Dw3rRE249KfUPzRWkJEFIAC4iAOhO4aGUY+Jm3Fw9yGGTU/9Q2MJUQkuhP1+OSBseoOAxiYSRsJAoFiAC9EIBD9k2PToHzEWkjADTcREz47R2GcubHrqHxprWQkrgcT8PL1LgoBc2PTUPzT2MVafn4XoB9dEw6an/qGxtm3ZFiCct/vsFj5AwDhseupf11gbBjAJiIK+/6D0RqQ2bHriH55Y6EMGmog2LhZwEwp5gLDpqX94YkUCEJNkQYTkg/ph01P/0FiRAC5u60eNpqYYiGbjqH57YXG4weJVkBSvgrSVTp9XGppiaBqV8x5jbaD2W53UEWlWamnASj4YC/DR1bGmGJnjq7Rtp+PgqTS2oinGQgXMTHaNrdU1xZio13zGKl/HSB2NVe+BsVKRxv7SkO3cxno2ohiI7PpGbltDfgpjS/g9sLUZUQzJ5hZ+G5QejD3QJEV1VkcgW9QkB9zYk6Yc5iKKkchJJ5snSYYHthhRjEgRjyxLNuT7Vb0HRiYr37ONJDuTJqv/rTGwKd08Y9fyOyuiGAPyq+v6T3v3rppAFEVheHMsRQU7wULEJrcmIXUqT3+eJHCqYcr4RgbRt8jliXJZJiQkKaJ7ig3/9wg/w8xUe9kDX64uvl8Pdp9ltYSDVZZ7a7LcLeHgLktjbRb+CVzcZmkt7y3hIu8RlrAxEFYIGwVhhbBREFYIGwVhhbBREFYIGwVhhbBREFYIGwVhhbBREFYIGwVhhbBREFYIGwVhhbBREFYIGwVhhbBREFYIGwVhhbBREFYIGwVhhbBREFYIGwVhhbBREFYIGwVhhbBREFYIGwVhhbBREFYIGwVhhbBREFYIGwVhhbBREFY6C8vRyI6ORnLmtKszpwMO83paZRnYCaekuzglfWKnHD8X3+Pnp3bFuX7xPdd/ZdOGgQn/gYlmavPKJIr/JEqdm523jPh4j/i052aWKrNT3rNTNZnZYrhjKM13KG03XNirtGHaz3fab5PsTX9cMxzVcd/ezco2w822zGwvrSnrZrtO9qE3KbwNnNQy6dmnm0nZ7DKOttuUyY190UtlXduMo7R1XVLPvpuNy7A2GQdr6rCMZ/ZDP41KeXx6HjQ8uf/UNoPnp8dSRqlvv1mki4KDXaSF/Wk+vb48GxX8y+js8no6t29eAPhzi6V2TZHsAAAAAElFTkSuQmCC);
    background-size: 100%;
    float: left;
    margin-right: .14rem;
}
.c-dice .c-diceOrder__panel-screen .middle-content .bonus-box .bonus-title {
    font-size: .14rem;
    color: #FFF3E0;
    line-height: .42rem;
    text-align: center;
}
.c-dice .c-diceOrder__panel-screen .middle-content .bonus-box .bonus-money {
    font-size: .32rem;
    line-height: .40rem;
    color: #FF2B46;
    font-family: 'DS-DIGI','DS-Digital';
    text-align: right;
    padding: 0 .12rem;
    background-color: #3F2D43;
}
.c-dice .c-diceOrder__panel-screen .middle-content .slider-box {
    float: left;
    width: 3.58rem;
    height: .86rem;
    background-image: url(../images/img_ctrlnumber_bg.png);
    background-size: 3.58rem .82rem;
    background-repeat: no-repeat;
    background-position: 0rem .04rem;
}
.c-dice .c-diceOrder__panel-screen .middle-content .slider-box .slide-bg {
    width: 3.26rem;
    height: .18rem;
    background-image: url(../images/img_ctrlbar_normal.svg);
    background-repeat: no-repeat;
    background-size: 100%;
    margin: .48rem auto 0;
}
.c-dice .c-diceOrder__panel-screen .middle-content .slider-box .slide-bg .slide-fill {
    width: 30%;
    height: .18rem;
    background-image: url(../images/img_ctrlbar_light.svg);
    position: relative;
}
.c-dice .c-diceOrder__panel-screen .middle-content .slider-box .slide-bg .slide-fill .slide-box {
    width: .32rem;
    height: .32rem;
    background-image: url(data:image/png;base64,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);
    background-size: 100%;
    position: absolute;
    right: -.24rem;
    top: -.05rem;
    cursor: pointer;
}
.c-dice .c-diceOrder__panel-screen .middle-content .slider-box .slide-bg .slide-fill .slide-box .slide-pointer {
    width: .32rem;
    height: .36rem;
    background-image: url(data:image/png;base64,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);
    background-size: 100%;
    font-size: .16rem;
    color: #FFFFFF;
    text-align: center;
    padding-top: .04rem;
    position: absolute;
    top: -.39rem;
}
.c-dice .c-diceOrder__panel-screen .control-box {
    margin: .35rem 0 0 -.39rem;
    width: 6.04rem;
}
.c-dice .c-diceOrder__panel-screen .control-box .account-box {
    width: 2.18rem;
    height: .50rem;
    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAbQAAABkCAMAAADZozXvAAAC/VBMV…+AIZMljZ+lM7u0c/POUHzrfcwvzbH/7/VniZ80SsiA3qY+A5LNVG4Z6+PxAAAAAElFTkSuQmCC);
    background-size: 100%;
    float: left;
    background-color: #3A1F40;
}
.c-dice .c-diceOrder__panel-screen .control-box .account-box .account-content {
    background-image: url(../images/icon_eosbuy.svg);
    background-repeat: no-repeat;
    background-position: .21rem .09rem;
    padding-right: .17rem;
    background-size: .3rem;
    height: .5rem;
}
.c-dice .c-diceOrder__panel-screen .control-box .account-box .account-content input {
    line-height: .52rem;
    font-family: 'DS-DIGII', 'DS-Digital-Italic';
    font-size: .32rem;
    color: #98FF27;
    background: transparent;
    outline: none;
    text-align: right;
    border: none;
    width: 1.42rem;
    margin-left: .55rem;
    display: flex;
}
.c-dice .c-diceOrder__panel-screen .control-box .button-box {
    width: 1.88rem;
    height: .50rem;
    background-image: url(data:image/png;base64,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);
    background-size: 100%;
    float: left;
    margin-left: .08rem;
}
.c-dice .c-diceOrder__panel-screen .control-box .button-box > span {
    display: inline-block;
    width: .62rem;
    height: .50rem;
    position: relative;
}
.c-dice .c-diceOrder__panel-screen .control-box .button-box .btn1 {
    width: .55rem;
    margin-left: .04rem;
    border-top-left-radius: .05rem;
    border-top-right-radius: .05rem;
    cursor: pointer;
}
.c-dice .c-diceOrder__panel-screen .control-box .button-box .btn1:before {
    content: '';
    width: 0;
    height: 0;
    border-style: solid;
    border-width: .47rem .04rem 0rem 0rem;
    border-color: transparent transparent transparent transparent;
    position: absolute;
    left: -.04rem;
    top: .02rem;
    opacity: 0.4;
    border-bottom-left-radius: .06rem;
}
.c-dice .c-diceOrder__panel-screen .control-box .button-box .btn1:after {
    content: '';
    width: 0;
    height: 0;
    border-style: solid;
    border-width: .46rem 0rem 0rem 0.015rem;
    border-color: transparent transparent transparent transparent;
    right: -.015rem;
    top: .03rem;
    opacity: 0.4;
    position: absolute;
    border-bottom-right-radius: .08rem;
}
.c-dice .c-diceOrder__panel-screen .control-box .button-box .btn2 {
    margin-left: .04rem;
    border-top-left-radius: .05rem;
    border-top-right-radius: .05rem;
    width: .57rem;
    -webkit-transform: skewX(2deg);
    -ms-transform: skewX(2deg);
    transform: skewX(2deg);
    cursor: pointer;
}
.c-dice .c-diceOrder__panel-screen .control-box .button-box .btn2:after {
    content: '';
    width: 0;
    height: 0;
    border-style: solid;
    border-width: .46rem 0rem 0rem .03rem;
    border-color: transparent transparent transparent transparent;
    right: -.029rem;
    top: .03rem;
    opacity: 0.4;
    position: absolute;
    border-bottom-right-radius: .17rem;
}
.c-dice .c-diceOrder__panel-screen .control-box .button-box .btn3 {
    margin-left: .05rem;
    border-top-left-radius: .05rem;
    border-top-right-radius: .07rem;
    width: .57rem;
    -webkit-transform: skewX(6deg);
    -ms-transform: skewX(6deg);
    transform: skewX(6deg);
    cursor: pointer;
}
.c-dice .c-diceOrder__panel-screen .control-box .button-box .btn3:after {
    content: '';
    width: 0;
    height: 0;
    border-style: solid;
    border-width: .31rem 0rem .16rem .035rem;
    border-color: transparent transparent transparent transparent;
    right: -.035rem;
    top: .03rem;
    opacity: 0.4;
    position: absolute;
}
.c-dice .c-diceOrder__panel-screen .control-box .login-btn {
    background-image: url(data:image/png;base64,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);
    background-size: 100%;
    width: 1.64rem;
    height: .64rem;
    float: left;
    margin: -.11rem 0 0 .05rem;
    cursor: pointer;
}
.c-dice .c-diceOrder__panel-screen .info-box {
    width: 6.07rem;
    margin: .29rem 0 0 -.41rem;
}
.c-dice .c-diceOrder__panel-screen .info-box > span {
    display: inline-block;
    width: 2.50rem;
    height: .50rem;
    line-height: .40rem;
    font-family: 'DS-DIGI','DS-Digital';
    text-align: right;
    padding: 0 .14rem;
    font-size: .32rem;
    float: left;
}
.c-dice .c-diceOrder__panel-screen .info-box .eos-box {
    background: #3F2D43;
    border: .04rem solid #813000;
    -webkit-box-shadow: 0 .01rem 0 0 #EA7F3F;
    box-shadow: 0 .01rem 0 0 #EA7F3F;
    border-radius: .08rem;
    color: #FFCB01;
    position: relative;
}
.c-dice .c-diceOrder__panel-screen .info-box .eos-box i {
    display: inline-block;
    background-image: url(../images/icon_eos_myeos.svg);
    width: .30rem;
    height: .30rem;
    background-size: 100%;
    background-repeat: no-repeat;
    position: absolute;
    left: .07rem;
    top: .05rem;
}
.c-dice .c-diceOrder__panel-screen .info-box .eos-box > span {
    font-family: 'DS-DIGI','DS-Digital';
}
.c-dice .c-diceOrder__panel-screen .info-box > span {
    display: inline-block;
    width: 2.50rem;
    height: .50rem;
    line-height: .40rem;
    font-family: 'DS-DIGI','DS-Digital';
    text-align: right;
    padding: 0 .14rem;
    font-size: .32rem;
    float: left;
}
.c-dice .c-diceOrder__panel-screen .info-box .bg-box {
    -webkit-box-shadow: 0 .01rem 0 0 #EA7F3F;
    box-shadow: 0 .01rem 0 0 #EA7F3F;
    border-radius: .08rem;
    background-image: -webkit-gradient(linear, left top, left bottom, color-stop(7%, #6F39B7), color-stop(95%, #7A52DB));
    background-image: -webkit-linear-gradient(top, #6F39B7 7%, #7A52DB 95%);
    background-image: -o-linear-gradient(top, #6F39B7 7%, #7A52DB 95%);
    background-image: linear-gradient(-180deg, #6F39B7 7%, #7A52DB 95%);
    color: #AA74FF;
    padding: .04rem;
    margin-left: .26rem;
}
.c-dice .c-diceOrder__panel-screen .info-box .bg-box .bg-content {
    display: inline-block;
    background: #3F2D43;
    border-radius: .04rem;
    width: 100%;
    height: 100%;
    font-family: 'DS-DIGI','DS-Digital';
    text-align: right;
    // padding: 0 .14rem;
    font-size: .32rem;
    position: relative;
}
.c-dice .c-diceOrder__panel-screen .info-box .bg-box .bg-content i {
    display: inline-block;
    background-image: url(data:image/png;base64,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);
    // background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAMAAAANIilAAAAC/VBMV…ShIPAlZVhXqVGxC8rfX4201QUFGk1eyfXV6P9eyv7pOvgTKywMBMvnM44AAAAASUVORK5CYII=);
    width: .30rem;
    height: .30rem;
    background-size: 100%;
    background-repeat: no-repeat;
    position: absolute;
    left: .07rem;
    top: .05rem;
    cursor: pointer;
}
.c-dice .c-diceOrder__panel-screen .info-box .bg-box .bg-content > span {
    font-family: 'DS-DIGI','DS-Digital';
}
.c-dice .c-diceOrder:after {
    content: '';
    height: 1.01rem;
    width: 2.02rem;
    background-image: url(../images/img_logo_dice2.png);
    background-size: 2.02rem 1.01rem;
    background-repeat: no-repeat;
    position: absolute;
    top: -.60rem;
    left: 50%;
    margin-left: -1.01rem;
    -webkit-animation: twinkling infinite .5s linear;
    animation: twinkling infinite .5s linear;
}
.c-dice .c-diceOrder__panel-screen .control-box .account-box .account-content input {
    line-height: .52rem;
    font-family: 'DS-DIGII', 'DS-Digital-Italic';
    font-size: .32rem;
    color: #98FF27;
    background: transparent;
    outline: none;
    text-align: right;
    border: none;
    width: 1.42rem;
    margin-left: .55rem;
}
</style>
