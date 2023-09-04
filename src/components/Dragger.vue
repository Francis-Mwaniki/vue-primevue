<script setup lang="ts">
import { ref, watchEffect } from 'vue'
import { useResizeObserver } from '@vueuse/core'
import { useDraggable } from '@vueuse/core'
import { breakpointsTailwind, useBreakpoints } from '@vueuse/core'
const breakpoints = useBreakpoints(breakpointsTailwind)


const smAndLarger = breakpoints.greaterOrEqual('sm') // sm and larger
const largerThanSm = breakpoints.greater('sm') // only larger than sm
const lgAndSmaller = breakpoints.smallerOrEqual('lg') // lg and smaller
const smallerThanLg = breakpoints.smaller('lg') // only smaller than lg
const el = ref<HTMLElement | null>(null)
const ele = ref(null)
const text = ref<string>("")
// `style` will be a helper computed for `left: ?px; top: ?px;`

useResizeObserver(el, (entries) => {
      const entry = entries[0]
      const { width, height } = entry.contentRect
      text.value = `width: ${width}, height: ${height}`
    })
watchEffect(() => {
  console.log(
    {
      "smAndLarger": smAndLarger.value,
      "largerThanSm": largerThanSm.value,
      "lgAndSmaller": lgAndSmaller.value,
      "smallerThanLg": smallerThanLg.value,
    }
  );
})

const { x, y, style } = useDraggable(el, {
  initialValue: { x: 40, y: 40 },
})
</script>

<template>
 
   <div ref="ele" style="position: fixed; background-color: rgb(254, 254, 254); color:black; padding:5px;"> 
    <textarea ref="el"  class="resizer" disabled v-text="text"/>
    <div ref="el" :style="style" style="position: fixed; background-color: rgb(254, 254, 254); color:black; padding:5px; cursor:grab">
  </div>
</div>
</template>



