<template>
    <div>
      <div v-if="tweetHtml">
        <!-- Render the embedded tweet HTML -->
        <div v-html="tweetHtml"></div>
      </div>
      <div v-else>
        Loading tweet...
      </div>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        tweetHtml: null,
      };
    },
    mounted() {
      // Make a GET request to your server-side endpoint
      axios.get('http://localhost:5000/getTweet', {
        params: {
          url: 'https://twitter.com/FRANCIS90776084',
        },
      })
      .then(response => {
        // Set the tweet HTML to be rendered in the template
        console.log(response.data)
        this.tweetHtml = response.data.html;
      })
      .catch(error => {
        console.error(error);
      });
    },
  };
  </script>
  