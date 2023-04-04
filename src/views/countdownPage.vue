<template>
    
    
     <div class="bg-orange-700  p-12  rounded-2xl items-center">
         <Header/>
         <div class="flex items-center justify-center">

         
         <div class="flex flex-col gap-1">
           <button  class="text-white text-5xl font-bold " @click="this.minute++">+</button>
           <button class="text-white text-5xl font-bold " @click="this.minute--">-</button>
        </div>
     
           <p class="text-white text-9xl font-bold ">{{ time }}</p>
           
        <div class="flex flex-col gap-1">
           <button  class="text-white text-5xl font-bold " @click="this.second++">+</button>
           <button class="text-white text-5xl font-bold " @click="this.second--">-</button>
        </div>
     
        </div>
        <div class="flex items-baseline justify-between">
        <button
          @click="() => $router.push('/')"
          class="w-28 bg-orange-400 text-orange-950 font-semibold p-3 rounded-xl mx-2 mt-6 hover:bg-orange-300 hover:text-orange-900"
        >
          Back
        </button>
        <div>
          <button
            @click="Start"
            class="bg-green-950 text-white font-semibold p-2 rounded-xl mx-2 hover:bg-green-600 hover:text-white"
          >
            Start
          </button>
          <button
             @click="Stop"
            class="bg-red-950 text-white font-semibold p-2 rounded-xl mx-2 hover:bg-red-600 hover:text-white"
          >
            Stop
          </button>
          <button
             @click="Clear" class="bg-red-600 text-white font-semibold p-2 rounded-xl mx-2 hover:bg-orange-700 hover:text-white"
          >
            Clear
          </button>
          </div>
        </div>
       
      </div>
       
   
  
  </template>
  <script>

import Header from "../components/header.vue"

   export default {
     components:{
      Header
     },
     data(){
      return{
        startTime:0,
        currentTime:0,
        stopTime:0,
        elapsedTime:0,
        minute:0,
        second:0,
        timerstarted:false,
        timestoped:false,
        
        interval:null

      }
     },
     methods:{
      Start() {
      
    if (this.minute > 0 || this.second > 0) {
      
      this.timerstarted=true;
      if(this.timestoped==false){
         this.startTime = new Date().getTime(); 
         this.stopTime = this.startTime + (60000 * this.minute) + (1000 * this.second);
      }
      this.timestoped=false;
      
      this.interval = setInterval(() => {
        this.currentTime = new Date().getTime();
        this.elapsedTime = this.stopTime - this.currentTime;
      
      }, 10);
    }
  },
  Stop(){
    this.timerstarted=false;
    this.timestoped=true;
    clearInterval(this.interval);
    this.startTime=this.elapsedTime;
    
  },
  Clear() {
  clearInterval(this.interval);
  this.elapsedTime = 0;
  this.minute = 0;
  this.second = 0;
  this.timestoped=false;
}
},
     computed:{
     time(){
      
      let seconds=new Date(this.elapsedTime).getSeconds();
      let minutes=new Date(this.elapsedTime).getMinutes();
      if(this.elapsedTime==0){ 
        
        this.second=this.second>=0?this.second:0;
        this.minute=this.minute>=0?this.minute:0;
        seconds=this.second;
        minutes=this.minute;
      }
      if(seconds==0&&minutes==0){
       clearInterval(this.interval);
        this.minute=0;
        this.second=0;
      }
       return `${minutes<10 ?"0"+minutes:minutes}.${seconds<10 ?"0"+seconds:seconds}`;
      }
     
      }
       

     }




  </script>
   