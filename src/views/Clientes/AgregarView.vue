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

   <div class="bg-white/60 dark:bg-slate-700 transition p-8 mt-8 rounded-md shadow w-full max-w-xl mx-auto">
      <div class="mx-auto w-full max-w-md">
         <FormKit 
            type="form" 
            submit-label="Agregar cliente"
            >
            <div class="grid grid-cols-2 gap-4">
               <FormKit 
                  type="text"
                  name="nombre"
                  label="Nombre(s)"
                  placeholder="Nombre del Cliente"
                  validation="required"
                  :validation-messages="{required: 'El nombre del cliente es obligatorio'}"/>
            
               <FormKit 
                  type="text"
                  name="apellido"
                  label="Apellido"
                  placeholder="Apellido del Cliente"
                  validation="required"
                  :validation-messages="{required: 'El apellido del cliente es obligatorio'}"/>
             </div>

               <FormKit 
                  type="email"
                  name="email"
                  label="Email"
                  placeholder="Email del Cliente"
                  validation="required|email"
                  prefix-icon="email"
                  inner-class=""
                  :validation-messages="{required: 'El email es obligatorio', email: 'El formato es incorrecto'}"/>

               <FormKit 
                  type="tel"
                  name="telefono"
                  label="Teléfono"
                  placeholder="Formato XXX-XXX-XXXX"
                  validation="required|*matches:/^[0-9]{3}-[0-9]{3}-[0-9]{4}$/"
                  prefix-icon="telephone"
                  :validation-messages="{required: 'El teléfono es obligatorio', matches: 'El formato es incorrecto'}"/>

            <div class="grid grid-cols-2 gap-4">
               <FormKit 
                  type="text"
                  name="empresa"
                  label="Empresa"
                  placeholder="Empresa a la que pertenece"/>

               <FormKit 
                  type="text"
                  name="puesto"
                  label="Puesto"
                  placeholder="Puesto en la empresa"/>
             </div>
         </FormKit>
         </div>
   </div>
</template>

<style>
   .formkit-prefix-icon{
      color: black;
   }
</style>