<template>
 <div>
 <p>{{uid}}</p>
 </div>
</template>
<script>
export default {
   props:['uid'],
   beforeRouteUpdate(to,from,next){
      console.log(to,from);
	  this.$router.app.loading=true;
	  next();
   }
}
</script>
<style scoped>
div{padding:0 8px}
</style>