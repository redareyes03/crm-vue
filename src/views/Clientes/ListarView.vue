<script setup>
import { Menu, MenuButton, MenuItems } from '@headlessui/vue';
import { onMounted, ref, computed } from 'vue';
import Cliente from '../../components/Cliente.vue';
import MenuItem from '../../components/UI/MenuItem.vue';
import { getClientes } from '../../../data/clientes'

const clientes = ref([])
const loading = ref(true)

onMounted(async () => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  clientes.value = await getClientes()
  loading.value = false
})



const hayClientes = computed(() => clientes.value.length > 0)
</script>

<template>
  <div class="flex justify-between">
    <h1 class="text-3xl text-slate-500 dark:text-white font-bold">Clientes</h1>
    <Menu as="div" class="outline-none relative">
      <MenuButton
        class="rounded-md bg-white dark:bg-slate-700 px-4 py-1 shadow-sm flex items-center justify-between gap-2 mb-2">
        <span class="text-gray-700 dark:text-gray-100">Acciones</span>
        <v-icon name="fa-chevron-down" class="w-4 fill-gray-500 dark:fill-gray-400" />
      </MenuButton>
      <transition enter-active-class="transition duration-100 ease-out" enter-from-class="transform scale-95 opacity-0"
        enter-to-class="transform scale-100 opacity-100" leave-active-class="transition duration-75 ease-in"
        leave-from-class="transform scale-100 opacity-100" leave-to-class="transform scale-95 opacity-0">
        <MenuItems
          class="absolute right-0 p-2 bg-white dark:bg-slate-700 drop-shadow-md flex flex-col gap-1 rounded-md w-48">
          <MenuItem to="agregar cliente">
          <v-icon name="fa-user-plus" />
          Agregar clientes
          </MenuItem>
          <MenuItem to="agregar cliente">
          <v-icon name="fa-user-edit" />
          Editar clientes
          </MenuItem>
          <MenuItem to="">
          <v-icon name="bi-gear-fill" />
          Configuracion
          </MenuItem>
        </MenuItems>
      </transition>
    </Menu>
  </div>

  <div>

    <div v-loading="loading"  element-loading-text="Cargando Clientes">
      <div v-if="hayClientes" class="flow-root mx-auto  mt-10 p-5 bg-white dark:bg-slate-700 shadow">
        <div class="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div class="min-w-full py-2 align-middle sm:px-6 lg:px-8">
            <table class="min-w-full divide-y divide-gray-300">
              <thead>
                <tr class="text-gray-600 dark:text-white">
                  <th scope="col" class="p-2 text-left text-sm font-extrabold ">Cliente</th>
                  <th scope="col" class="p-2 text-left text-sm font-extrabold ">Empresa</th>
                  <th scope="col" class="p-2 text-left text-sm font-extrabold ">Telefono</th>
                  <th scope="col" class="p-2 text-left text-sm font-extrabold ">Estado</th>
                  <th scope="col" class="p-2 text-left text-sm font-extrabold ">Acciones</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-gray-200 bg-white dark:bg-slate-700">
                <Cliente v-for="cliente in clientes" :cliente="cliente" :key="cliente.id" />
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>

    <p v-if="!loading && !hayClientes" class="mt-10 text-2xl text-center dark:text-gray-100">No hay clientes</p>
  </div>
</template> 