<template>
  <div>
 <v-touch v-on:swipeleft="onSwipeLeft">
  <p>Home</p>
  <p v-if="loading">loading</p>
 </v-touch> 
 </div>
</template>
<script>
export default {
  data(){
    return {
	   loading:false
	}
  },
  beforeRouteEnter(to,from,next){
    next(router=>router.fetchData());
  },
  beforeRouteUpdate(to,from,next){
    this.fetchData();
	next();
  },
  /*
  created () {
    this.fetchData()
	console.log('created');
  },
  watch:{
    '$route'(old,newd){
	  console.log('$route',old,newd);
	  this.fetchData();
	},
  },
  */
  methods:{
     fetchData(){
	   this.loading = true;
	   setTimeout(()=>{
	      this.loading = false;
	   },1000);
	 },
	 onSwipeLeft(){
	    console.log('swipeleft');
	 }
	 
  }
}
</script>
<style scoped>
div{padding:0 8px}
</style>