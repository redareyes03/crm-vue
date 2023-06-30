<script setup>
import {RouterLink} from 'vue-router'
</script>

<template>
    <div class="w-full h-[calc(100vh-20rem)] flex flex-col justify-center items-center gap-10">
        <h1 class="text-center font-bold text-5xl text-gray-800 dark:text-white">404: Página no encontrada</h1>
        <RouterLink to="/" class="text-lg text-sky-800 bg-sky-200 dark:text-sky-200 dark:bg-sky-800 px-4 py-1 rounded-md" >Volver al inicio</RouterLink>
    </div>
</template>