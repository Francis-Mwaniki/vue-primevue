<template>
  <div>
    <div class="color-mode-selector">
      <div v-for="mode in modes" :key="mode" :class="mode" @click="selectedMode = mode">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          v-if="mode === 'dark'"
          :fill="mode === 'dark' ? 'white' : 'none'"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-6 h-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
          />
        </svg>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          :fill="mode === 'dark' ? 'white' : 'none'"
          v-if="mode !== 'dark'"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-6 h-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
          />
        </svg>

        <!-- <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            v-if="mode === 'auto'"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25"
            />
          </svg> -->

        {{ mode }}
      </div>
    </div>
  </div>
</template>

<script>
import { ref, computed, watch } from "vue";
import { useColorMode } from "@vueuse/core";
// import { Icon } from "@iconify/vue";
export default {
  components: {},
  name: "ColorModeComponent",
  setup() {
    const { system, store } = useColorMode();

    const selectedMode = ref(store.value);
    const modes = ["dark", "light"];

    const currentColorMode = computed(() =>
      selectedMode.value === "auto" ? system.value : selectedMode.value
    );

    // Watch for changes in the system color mode and update selectedMode accordingly
    // watch(system, (newValue) => {
    //   if (selectedMode.value === "auto") {
    //     selectedMode.value = newValue;
    //   }
    // });

    // watch(modes, (newValue) => {
    //   if (selectedMode.value === "auto") {
    //     selectedMode.value = newValue;
    //   }
    // });

    // Watch for changes in the selected color mode and update the store
    watch(selectedMode, (newValue) => {
      store.value = newValue;
    });

    return {
      selectedMode,
      modes,
      currentColorMode,
    };
  },
};
</script>

<style>
.color-mode-selector {
  display: flex;
  gap: 1rem;
  margin-bottom: 1rem;
}

.color-mode-result {
  font-weight: bold;
}

.dark {
  background-color: #000;
  color: #fff;
}

.light {
  background-color: #fff;
  color: #000;
}

.auto {
  background-color: #fff;
  color: #000;
}
</style>
