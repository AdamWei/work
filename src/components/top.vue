<template>
  <div class="header">
    <img src="../images/Biggame_Logo.png" @click="changeMenu('index')" class="logo">
    <div class="header-left">
      <span :class="['menu-btn', active === 'dice' ? 'active' : '']" @click="changeMenu('dice')">掷骰子</span>
      <span :class="['menu-btn', active === 'lotto' ? 'active' : '']" @click="changeMenu('lotto')">大乐透</span>
    </div>
    <div class="header-right">
      <span :class="showrecommend ? 'color' : ''" @click="recommend">推荐奖励</span>
      <span :class="showBG ? 'color' : ''" @click="winBG">赢BG币</span>
      <span class="login">登录</span>
    </div>
    <recommend v-if="showrecommend" @close="recommend"></recommend>
    <winbg v-if="showBG" @close="winBG"></winbg>
  </div>
</template>

<script>

import axios from 'axios'
import recommend from '@/components/recommend.vue'
import winbg from '@/components/winBG.vue'

export default {
  name: 'top',
  components: {
    recommend,
    winbg
  },
  data () {
    return {
      active: '',
      showrecommend: false,
      showBG: false
    }
  },
  methods: {
    changeMenu(menu){
      this.active = menu
      this.$router.push({ path: '/' + menu });
    },
    winBG(){
      this.showBG = !this.showBG
    },
    recommend() {
      this.showrecommend = !this.showrecommend
    }
  }
}
</script>

<style scoped lang="scss">
.header{
  height: .6rem;
  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAA8CAMAAABPYVrXAAAAOVBMVEVSA62hAsBpA7KTArydAr+YAr5XA65zA7RuA7RkA7GLArqGA7lfA7B3A7Z8A7dbA6+PAruCArh/A7cYYvnxAAAApklEQVQ4y83J2w6DIBCEYRTPVgTe/2E7uxe0SCYoSZN+TmST33TUD9KguqHD9AW9zcDcS6N86ZY0Uo3JUnkasfQiMcZb660XeC6JkrT5DSvTpjTh9w2pVE87dSOFPWB5CjnJ+AkkxsSPEIPCIZAIJOeii5i7Mul6lA6qkuZjxso0U41poRpTn1v6BdMTiamnFSvSSjWmF9WYTupBms5J4TAT1Zj+wxsQRzAdmLZPHwAAAABJRU5ErkJggg==) repeat left top;
  padding: 0 .15rem;
  line-height: .6rem;
  color: white;
  font-weight: bold;
  font-size: .16rem;

}
.logo{
  height: .82rem;
  width: 1.3rem;
}
.header-left{
  position: absolute;
  top: 0;
  left: 1.5rem;
  height: .6rem;
  text-align: center;
}
.menu-btn{
  display: inline-block;
  height: 100%;
  width: 1rem;
  // &:hover{
  //   background-image: -webkit-gradient(linear, left top, left bottom, from(rgba(241, 35, 183, 0)), color-stop(97%, #CC166E));
  //   background-image: -webkit-linear-gradient(top, rgba(241, 35, 183, 0) 0%, #CC166E 97%);
  //   background-image: -o-linear-gradient(top, rgba(241, 35, 183, 0) 0%, #CC166E 97%);
  //   background-image: linear-gradient(-180deg, rgba(241, 35, 183, 0) 0%, #CC166E 97%); 
  //   }
}
.active{
  position: relative;
  background-image: -webkit-gradient(linear, left top, left bottom, from(rgba(241, 35, 183, 0)), color-stop(97%, #CC166E));
  background-image: -webkit-linear-gradient(top, rgba(241, 35, 183, 0) 0%, #CC166E 97%);
  background-image: -o-linear-gradient(top, rgba(241, 35, 183, 0) 0%, #CC166E 97%);
  background-image: linear-gradient(-180deg, rgba(241, 35, 183, 0) 0%, #CC166E 97%); 
  &:before {
    content: '';
    display: inline-block;
    position: absolute;
    bottom: 0px;
    width: 1.19rem;
    height: .04rem;
    left: 0;
    background-image: -webkit-gradient(linear, right top, left top, from(rgba(255, 255, 255, 0)), color-stop(50%, #FFFFFF), to(rgba(255, 255, 255, 0)));
    background-image: -webkit-linear-gradient(right, rgba(255, 255, 255, 0) 0%, #FFFFFF 50%, rgba(255, 255, 255, 0) 100%);
    background-image: -o-linear-gradient(right, rgba(255, 255, 255, 0) 0%, #FFFFFF 50%, rgba(255, 255, 255, 0) 100%);
    background-image: linear-gradient(-90deg, rgba(255, 255, 255, 0) 0%, #FFFFFF 50%, rgba(255, 255, 255, 0) 100%); 
  }
}
.header-right{
  float: right;
  text-align: center;
}
.login{
    background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIIAAAAoCAMAAAAFWtJHAAABDlBMVEUAAABoEahoEqloEqlsF6pnEqhnEqhoEqloEahoEqlpEqpqE6ttFq9oF65nEqlnEahHBpPEWQf/rir+mx/9lhz+niH/qyn+oyT+qCf9kxr+oCL+pSX/tzD/si3+qij/tS//sCz9lRv/sy79kBn9jhf+mR//6Kb+pib+oSP9mB7/uDH9kRliD6VdDaJSCptQCZpIBpRZDJ9MCJdJBpRbE3z/vkXzhxb52pWnRiexTBv4kBq8Uw/NYwv+3I391oHyzYtyOIqGS4aWXoWrd4NmGnBwImWHMEzYbxHSaQ3SpYTJk3vyw3f/0GvkqGP/xU/wp0b+tDz6qzjchC/1miXugBPgcw+8YzW8YjXvly3uly09fCscAAAAD3RSTlMAqH/zC+jZ07+CclIjFvLRL7PzAAACrUlEQVRYw8TU2WrCQBQG4IlxX/h/vLCCsREvKkg2lZAr43blru//Mp2JNmjT2ioYPw7MTIYDB86ZiGvVslbM63gaPV/UylXxq1qpgFQUSjXxk2xGR2r0TFYkVHJQbMcdenwab+g6NpRcRXyTgWS5HlPguRakzHUTNFWAQ3K2nAQfTxRMljOSjipCu2yGqsAekYtgvNn5/YjRN2TE61nynPx2K9/fbcbBghzZqobrLgzIaRD6hmEapgzjYX/n+2EwJQeXvaicKpiPfTMl/nh+qqFyHoQcYJPzsN+9R7vblpHY/09f1WADuexXG6wRp2G3naJuOOXIOreipgMOOTE7qTInpAPo6j9ZAixy4dfv1Kl3ZNQf5i9ICyjJEgqAS67jq0a9ocglPt/Yx+v9+WvSBQpCVAF4nB0aqTvM6AGoinL0HFbvL7CKHkVZaNEwbpsvsI0GUhPFaBT2vViz15QRr1LyLnl+JH8fDUNR5IEheWy9wJEcAnmhq2lk6+0VqOZR/2zGTFYkBoEAOl/QIIk05jYkDQl9FXE7Zjv3Msv//8gUaqdABmkPbedRkNJYIKi1fRzcFq59f+yPIPhF4rnEmiz7q9vCIRzET/MGfv1BhOt4oY6GNiA0IvUPybe/+OsYHuU3pRWtNmAA4r5ASsf1+fZf/lEG1zTrqjh69q4pOGi+DKfh5ADF6SlwHerZ9gsPDjqEKSXqoQYZHA89mgPiedRz7YXyYWoL1pPVdVG0nXywxpRFruyzIGyVIWXBxI2bVbNi6NXwR+KG6etIrDgD7MwcoGzAACShI0/ZC0tGTF8xiR8NWUSbRdd2IG0mYiFmDEl8VMpwSYi930T3QsTtbgmRHEuZqKCbFCmAmrCg+6es5bNUhrwMo+TMsazdV3G/ixbHHho9e2h3va3p9wfG4+koi9ZZBQAAAABJRU5ErkJggg==) no-repeat left top;
    display: inline-block;
    position: relative;
    background-size: 100% .4rem;
    width: 1.30rem;
    height: .40rem;
    line-height: .37rem;
    margin-top: .1rem;
    cursor: pointer;
    margin-top: .09rem;
    text-align: center;
    line-height: .39rem;
}
.color{
  color: #FF3B80;
}
</style>
