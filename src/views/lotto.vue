<template>
  <div class="lotto">
    <div class="c-bet">
      <div class="c-bet__head">
        <!-- <div class="c-bet__head--title"></div> -->
        <div class="c-bet__head--btns">
          <div class="c-bet__head--btnWraps">
            <div class="left-btn left-active">
              <!-- <div>EOS20</div> -->
              <!-- <div>第 T001014 期</div> -->
            </div>
            <div class="eosLogo logo"></div>
            <div class="eosLogo2 logo"></div>
            <div class="right-btn ">
              <!-- <div>EOS100</div> -->
              <!-- <div>第 S000166 期</div> -->
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
    height:6rem;
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
    // background-size: 3rem 0.6rem;
    background-size:  3.20rem 0.60rem;
    position: absolute;
    top: 0rem;
}
.c-bet__head--btns {
    margin-top: 0.6rem;
    width: 1.72rem;
    height: 0.86rem;
    // background: url("../images/img_EOSbtn_botton.png");
    display: -ms-flexbox;
    display: flex;
    -ms-flex-direction: row;
    flex-direction: row;
    -ms-flex-pack: center;
    justify-content: center;
}
.c-bet__head--btnWraps {
    width: 5.38rem;
    height: 0.86rem;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-direction: row;
    flex-direction: row;
    -ms-flex-pack: justify;
    justify-content: space-between;
    -ms-flex-align: center;
    align-items: center;
    position: relative;
    margin-top: -2px;
}
.c-bet__head--btnWraps .left-btn:hover {
    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOYAAABQCAYAAAAN+QnTAAAAAXNSR…PVA9UD1QPVA9UD1QPVA9UD1QPVA9UD1QPVA9UD1QNLeuD/AZJxWBKufhbpAAAAAElFTkSuQmCC);
}
.c-bet__head--btnWraps .left-active {
    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOYAAABQCAYAAAAN+QnTAAAAAXNSR…LQItAi0CLQItAi0CLQItAi0CLQItAi0CLQItAicMAI/D/99S/1RE4K3gAAAABJRU5ErkJggg==) !important;
}
.c-bet__head--btnWraps .eosLogo {
    background-image: url("../images/img_title_EOSlogo.png");
}
.c-bet__head--btnWraps .logo {
    width: 2.60rem;
    height: 2.60rem;
    position: absolute;
    left: 50%;
    top: -0.30rem;
    margin-left: -1.3rem;
}
.c-bet__head--btnWraps .eosLogo2 {
    background-image: url("../images/img_title_EOSlogo1.png");
    -webkit-animation: twinkling infinite .5s linear;
    animation: twinkling infinite .5s linear;
}
.c-bet__head--btnWraps .right-btn {
    width: 2.30rem;
    height: 0.80rem;
    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOYAAABQCAYAAAAN+QnTAAAAAXNSR…AyMDIwMjAyMDIwMjAyMDIwMjAyMDIwMjAyMDIwMlAy8P86nyURzZEySAAAAABJRU5ErkJggg==);
}
</style>
