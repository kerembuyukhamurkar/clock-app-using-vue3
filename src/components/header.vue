
import { RouterLink } from 'vue-router';

<template>
    <div class=" border-t-4 border-r-4 border-orange-700 bg-orange-500 relative  bottom-12 rounded-b-2xl py-2 w-fit  flex items-center justify-center " >
          <Router-Link to="/" class="bg-orange-400 text-orange-700 font-semibold p-2 rounded-xl mx-2 hover:bg-orange-700  hover:text-white">Watch</Router-Link>
          <Router-Link to="/stopwatch"  class=" text-orange-900 font-semibold bg-orange-400 p-2 rounded-xl mx-2  hover:bg-orange-700  hover:text-white">Stopwatch</Router-Link>
          <Router-Link to="/countdown"  class="  text-orange-950 font-semibold bg-orange-400 p-2 rounded-xl mx-2  hover:bg-orange-700  hover:text-white">Timer </Router-Link>
    </div>
    
</template>