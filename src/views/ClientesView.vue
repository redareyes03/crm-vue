<script setup>
import { Menu, MenuButton, MenuItems } from '@headlessui/vue';
import MenuItem from '../components/UI/MenuItem.vue';
</script>

<template>
  <div class="flex justify-between">
    <h1 class="text-3xl text-slate-500 font-bold">Clientes</h1>
    <Menu as="div" class="outline-none relative">
      <MenuButton class="rounded-md bg-white px-4 py-1 shadow-sm flex items-center justify-between gap-2 mb-2">
        <span class="text-gray-700 dark:text-gray-100">Acciones</span>
        <v-icon name="fa-chevron-down" class="w-4 fill-gray-500"/>
      </MenuButton>
      <transition
        enter-active-class="transition duration-100 ease-out"
        enter-from-class="transform scale-95 opacity-0"
        enter-to-class="transform scale-100 opacity-100"
        leave-active-class="transition duration-75 ease-in"
        leave-from-class="transform scale-100 opacity-100"
        leave-to-class="transform scale-95 opacity-0"
      >
        <MenuItems class="absolute right-0 p-2 bg-white drop-shadow-md flex flex-col gap-1 rounded-md w-48">
          <MenuItem to="/agregar-clientes">
            <v-icon name="fa-user-plus"/>
            Agregar clientes
          </MenuItem>
          <MenuItem to="/agregar-clientes">
            <v-icon name="fa-user-edit"/>
            Editar clientes
          </MenuItem>
          <MenuItem to="/agregar-clientes">
            <v-icon name="bi-gear-fill"/>
            Configuracion
          </MenuItem>
        </MenuItems>
    </transition>
    </Menu>
  </div>

</template> 