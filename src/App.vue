<script setup>
import { RouterView } from 'vue-router'
import {Switch} from '@headlessui/vue'
import {ref, watch, onMounted } from 'vue';
const darkMode = ref(false)


const guardarDarkMode = () => window.localStorage.setItem('dark-mode', JSON.stringify(darkMode.value))
watch(darkMode, () => {
  guardarDarkMode()
  if(darkMode.value){
    document.documentElement.classList.add('dark')
  }else{
    document.documentElement.classList.remove('dark')
  }  
})

onMounted(() => {
  darkMode.value = JSON.parse(window.localStorage.getItem('dark-mode'))
})
</script>

<template>
   
  <header class="bg-gray-800">
    <div class="max-w-sm md:max-w-md lg:max-w-4xl mx-auto py-10 flex justify-between items-center">
      <h1 class="text-4xl font-bold text-white">Administrador Clientes</h1>
      
      <Switch
        v-model="darkMode"
        :class="darkMode ? 'bg-blue-600' : 'bg-slate-400'"
        class="relative inline-flex h-8 w-14 items-center rounded-full"
      >
          <span class="sr-only">Enable dark mode</span>
          <span
            :class="darkMode ? 'translate-x-6' : 'translate-x-1'"
            class="inline-block h-6 w-6 transform rounded-full bg-white transition relative"
            >
            <v-icon name="md-darkmode-twotone" v-if="darkMode" class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 center dark:fill-gray-800"/>
            <v-icon name="md-wbsunny-twotone" v-else class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 center fill-yellow-400"/>
          </span>
      </Switch>

    </div>
  </header>

  <main class="max-w-sm md:max-w-md lg:max-w-4xl mx-auto mt-10">
    <RouterView />
  </main>
</template>

<style scoped>

</style>
