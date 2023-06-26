<script setup>
import { RouterLink } from 'vue-router';
import Boton from '../../components/UI/Boton.vue';

import { ArrowRight } from '@element-plus/icons-vue'
import 'element-plus/es/components/breadcrumb/style/css'
import 'element-plus/theme-chalk/dark/css-vars.css'
</script>

<template>

   <el-breadcrumb :separator-icon="ArrowRight" class="mb-4 dark:text-white">
      <el-breadcrumb-item :to="{ path: '/' }">Inicio</el-breadcrumb-item>
      <el-breadcrumb-item>Agregar Cliente</el-breadcrumb-item>
   </el-breadcrumb>

   <div class="flex justify-between items-center">

      <h1 class="text-3xl text-slate-500 font-bold">Agregar Cliente</h1>
      <Boton>
         <RouterLink :to="{ name: 'inicio' }">Volver</RouterLink>
      </Boton>
   </div>
</template>