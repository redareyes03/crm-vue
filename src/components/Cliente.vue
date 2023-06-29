<script setup>
import { computed } from 'vue';

    const props = defineProps({
        cliente: {
            type: Object,
            required: true
        }
    })

    const estados = {
        1: "Activo",
        0: "Inactivo",
    }

    const nombreCliente = computed(() => props.cliente.nombre + ' ' + props.cliente.apellido)
    const estadoCliente = computed(() => {
        return estados[props.cliente.estado]
    })
    const claseEstadoCliente = computed(() => props.cliente.estado === 1 ? 'bg-green-200 text-green-800' : 'bg-red-200 text-red-800')
</script>

<template>
    <tr>
        <td class="whitespace-nowrap py-4 pl-4 pr-3 text-sm sm:pl-0">
            <p class="font-medium text-gray-900 dark:text-white">{{ nombreCliente }}</p>
            <p class="text-gray-500 dark:text-gray-200">{{ cliente.email }}</p>
        </td>
        <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
            <p class="text-gray-900 dark:text-white font-bold">{{ cliente.empresa }}</p>
            <p class="text-gray-500 dark:text-gray-200">{{ cliente.puesto }}</p>
        </td>
        <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
            <p class="text-gray-500 dark:text-gray-200">{{ cliente.telefono }}</p>
        </td>
        <td class="whitespace-nowrap px-3 py-4 text-sm">
            <button 
                class="inline-flex rounded-full px-2 text-xs font-semibold leading-5"
                :class="[claseEstadoCliente]">
                {{ estadoCliente }}
            </button>
        </td>
        <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500 dark:text-gray-200">
            
        </td>
    </tr>
</template>