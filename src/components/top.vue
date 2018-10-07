<template>
  <div class="header">
    <img src="../images/Biggame_Logo.png" class="logo">
  </div>
</template>

<script>

import axios from 'axios'

export default {
  name: 'top',
  components: {
  },
  data () {
    return {
    }
  },
  methods: {
  }
}
</script>

<style scoped lang="scss">
.header{
  height: .6rem;
  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAA8CAMAAABPYVrXAAAAOVBMVEVSA62hAsBpA7KTArydAr+YAr5XA65zA7RuA7RkA7GLArqGA7lfA7B3A7Z8A7dbA6+PAruCArh/A7cYYvnxAAAApklEQVQ4y83J2w6DIBCEYRTPVgTe/2E7uxe0SCYoSZN+TmST33TUD9KguqHD9AW9zcDcS6N86ZY0Uo3JUnkasfQiMcZb660XeC6JkrT5DSvTpjTh9w2pVE87dSOFPWB5CjnJ+AkkxsSPEIPCIZAIJOeii5i7Mul6lA6qkuZjxso0U41poRpTn1v6BdMTiamnFSvSSjWmF9WYTupBms5J4TAT1Zj+wxsQRzAdmLZPHwAAAABJRU5ErkJggg==) repeat left top;
  padding: 0 .3rem;
}
.logo{
  height: .82rem;
  width: 1.3rem;
}
</style>
