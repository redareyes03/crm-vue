<script setup>
import { RouterLink, useRouter } from 'vue-router';
import Boton from '../../components/UI/Boton.vue';

import { ArrowRight } from '@element-plus/icons-vue'
import 'element-plus/es/components/breadcrumb/style/css'
import 'element-plus/theme-chalk/dark/css-vars.css'
import { postCliente } from '../../../data/clientes';

const router = useRouter()

const handleSubmit = async data => {
   await postCliente(data)
   router.push({
      name: 'inicio'
   })
}


defineProps({
   pagina: {
      type: String
   }
})
</script>

<template>
   <el-breadcrumb :separator-icon="ArrowRight" class="mb-4 dark:text-white">
      <el-breadcrumb-item :to="{ path: '/' }">Inicio</el-breadcrumb-item>
      <el-breadcrumb-item>{{ pagina }} Cliente</el-breadcrumb-item>
   </el-breadcrumb>

   <div class="flex justify-between items-center">

      <h1 class="text-3xl text-slate-500 dark:text-white font-bold">{{ pagina }} Cliente</h1>
      <Boton>
         <RouterLink :to="{ name: 'inicio' }" class="py-1.5 px-4 block">Volver</RouterLink>
      </Boton>
   </div>

   <div class="bg-white/60 dark:bg-slate-700 transition p-8 my-8 rounded-md shadow w-full max-w-xl mx-auto">
      <div class="mx-auto w-full max-w-md">
         <FormKit 
            type="form" 
            :actions="false"
            @submit="handleSubmit"
            incomplete-message="Hay datos que no estan completos o tienen errores"
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
                  placeholder="Telefono del cliente"
                  validation="required"
                  prefix-icon="telephone"
                  :validation-messages="{required: 'El teléfono es obligatorio'}"/>

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

             <FormKit 
               type="submit"
               :label="pagina + ' Cliente'"
               input-class="bg-sky-500"
               wrapper-class="w-fit mx-auto mt-4"
               />
         </FormKit>
         </div>
   </div>
</template>

<style>
   .formkit-prefix-icon{
      color: black;
   }
</style>