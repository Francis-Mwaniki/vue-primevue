<template>
    <div>
      <a
        class="twitter-timeline"
        href="https://twitter.com/FRANCIS90776084"
        data-tweet-limit="5"  
        data-chrome="noheader nofooter noborders noscrollbar"
      ></a>
  
     <div class="tweets"></div>
    </div>
  </template>
  
  <script>
  export default {
    mounted() {
      // Load Twitter widget scripts to render the timeline
      const script = document.createElement('script');
      script.src = 'https://platform.twitter.com/widgets.js';
      script.async = true;
      document.body.appendChild(script);
  
      // load tweets from https://twitter.com/FRANCIS90776084  
   
  
     
      
    },
  };
  </script>
  
  <style scoped>
  /* Add any custom styles for the embedded timeline if needed */
  </style>
  