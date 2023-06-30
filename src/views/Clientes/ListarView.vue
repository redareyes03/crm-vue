<script setup>
import { onMounted, ref, computed } from 'vue';
import { getClientes, deleteCliente } from '../../../services/clientes'
import Cliente from '../../components/Cliente.vue';
import Button from '../../components/UI/Boton.vue'

const clientes = ref([])
const loading = ref(true)

const props = defineProps({
  alerta: {
    type: String
  }
})

const eliminarCliente = async(id) => {
  try {
      await deleteCliente(id)
      clientes.value = clientes.value.filter(cliente => cliente.id != id)
  } catch (error) {
      
  }
}

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
    <Button>
      <RouterLink class="px-4" :to="{name: 'agregar cliente'}">Agregar cliente</RouterLink>
    </Button>
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
                <Cliente
                  v-for="cliente in clientes" 
                  :cliente="cliente" 
                  :key="cliente.id"
                  @eliminar-cliente="eliminarCliente" />
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>

    <p v-if="!loading && !hayClientes" class="mt-10 text-2xl text-center dark:text-gray-100">No hay clientes</p>
  </div>
</template> 