<template>
 

     <div class="bg-orange-700  p-12  rounded-2xl  items-center">
         <Header/>
        <p class="text-white text-9xl font-bold ">{{hours }}:{{ minutes }}:{{seconds }}</p>     
      </div>
       
    
 
  </template>
  
  <script>
  import Header from "../components/header.vue"
  export default {
    components:{
        Header
 
    },
    
   
    data() {
      const date = new Date();
      return {
      
        hour:date.getHours(),
        minute:date.getMinutes(),
        second:date.getSeconds(),
        
      };
    },
    computed:{
      seconds(){
        
        setInterval( ()=>{
          const date = new Date();
    
        this.second=date.getSeconds();
       },1000)
       
      return this.second<10?"0"+this.second:this.second
      },
      minutes(){
        
        setInterval( ()=>{
          const date = new Date();
    
        this.minute=date.getMinutes();
       },1000)
       
       
      return this.minute<10?"0"+this.minute:this.minute
      },
      hours(){
        
        setInterval( ()=>{
          const date = new Date();
    
        this.hour=date.getHours();
       },1000)
      return this.hour<10?"0"+this.hour:this.hour
      },
     
    
      
  
    
    
    },
    
     
  
  
   
  
  
    
  };
  </script>