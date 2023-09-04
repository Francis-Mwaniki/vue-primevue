<template>
    <div ref="el" :style="style" style="position: fixed; background-color: rgb(254, 254, 254); color:black; padding:5px;">
      <slot />
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue'
  import { useDraggable } from '@vueuse/core'
  
  const el = ref<HTMLElement | null>(null)
  const { style } = useDraggable(el)
  </script>
  