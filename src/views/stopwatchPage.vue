<template>
  <div class="flex flex-col gap-9 items-center justify-center">

 
    <div class="bg-orange-700 p-12 rounded-2xl items-center">
      <Header />
      <p class="text-white text-9xl font-bold">
        {{ displayTime}}
      </p>
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
          <button
            @click="lap" class="bg-red-600 text-white font-semibold p-2 rounded-xl mx-2 hover:bg-orange-700 hover:text-white"
          >
            Lap
          </button>
        </div>
      </div>
    </div>
    <div v-if="isArray" class=" flex  flex-col items-center justify-center gap-4 bg-orange-700 p-12 w-fit rounded-2xl ">
      <p class="text-white text-4xl font-bold" v-for="Lap in LapArray">{{ Lap }} </p>

    </div>
  </div>
  
</template>

<script>

import Header from "../components/header.vue";

export default {
  components:{Header},
  data(){
    return{
      startTime:0,
      currentTime:0,
      elapsedTime:0,
      interval:null,
      LapArray:[]
     

    }
  },
  methods:{
    Start(){
    
      const date=new Date();
      this.startTime=date.getTime();
      this.interval= setInterval(() => {
          this.currentTime = new Date().getTime();
          this.elapsedTime = this.currentTime - this.startTime;
           
        }, 10);

    },
    Stop(){
      clearInterval(this.interval)

    },
    Clear(){
      const date=new Date();
      this.startTime=date.getTime();
      this.LapArray=[];
      this.elapsedTime=0;

    },
    lap(){
      const minutes=new Date(this.elapsedTime).getMinutes();
      const seconds=new Date(this.elapsedTime).getSeconds();
      const milliseconds=new Date(this.elapsedTime).getMilliseconds();
      this.LapArray.push(`${minutes<10 ?"0"+minutes:minutes}:${seconds<10?"0"+seconds:seconds}.${milliseconds<10?"00"+milliseconds:milliseconds<100?"0"+milliseconds:milliseconds}`);
      
    }
  },
  computed:{
    displayTime() {
    const minutes = new Date(this.elapsedTime).getMinutes();
    const seconds =  new Date(this.elapsedTime).getSeconds();
    const milliseconds = new Date(this.elapsedTime).getMilliseconds();
    return `${minutes<10 ?"0"+minutes:minutes}:${seconds<10?"0"+seconds:seconds}.${milliseconds<10?"00"+milliseconds:milliseconds<100?"0"+milliseconds:milliseconds}`;
  },
  isArray(){
    return this.LapArray.length>0
  }
  
},}
</script>
