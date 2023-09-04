<script setup lang="ts">
import {
  useTokenClient,
  type AuthCodeFlowSuccessResponse,
  type AuthCodeFlowErrorResponse,
} from "vue3-google-signin";

const handleOnSuccess = async (response: AuthCodeFlowSuccessResponse) => {
  console.log("Access Token: ", response.access_token);
  const url=`https://api.3commas.crypttops.com/users/google/auth/`

  const res = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
     "access_token": response.access_token,
    })
  });
  if(res.ok){
    const data = await res.json();
    console.log(data);
  }else{
    console.log("error");
  }
};

const handleOnError = (errorResponse: AuthCodeFlowErrorResponse) => {
  console.log("Error: ", errorResponse);
};

const { isReady, login } = useTokenClient({
  onSuccess: handleOnSuccess,
  onError: handleOnError,

});
</script>

<template>
  <button :disabled="!isReady" @click="() => login()" class="g-btn">
    Login with Google
  </button>
</template>
