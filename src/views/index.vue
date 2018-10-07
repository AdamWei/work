<template>
  <div class="home">
  	<div class="box" @click="clickbox"></div>
		<div class="box" @click="clickbox1"></div>
  </div>
</template>

<script>

export default {
  name: 'index',
  methods:{
  	clickbox(){
  		console.log(111)
  		this.$router.push({ path: `/dice` });
		},
		clickbox1(){
  		console.log(111)
  		this.$router.push({ path: `/lotto` });
  	}
  }
}
</script>
<style lang="scss" scoped>
	.box{
		width:200px;
		height:200px;
		border:1px solid gray;
		background:red;
	}
</style>
