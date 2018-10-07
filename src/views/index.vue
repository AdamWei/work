<template>
  <div class="container">
		<first/>
		<second/>	
		<third/>
		<fourth/>
		<bottom/>
  </div>
</template>

<script>
import first from '@/components/first.vue'
import second from '@/components/second.vue'
import third from '@/components/third.vue'
import fourth from '@/components/fourth.vue'
import bottom from '@/components/bottom.vue'
export default {
	name: 'index',
	components: {
		first,
		second,
		third,
		fourth,
    bottom
	},
  methods:{
  }
}
</script>
<style lang="scss" scoped>
	.container{
		width:100%;
		height:100%;
		padding:0;
		margin:0;
	}
</style>
