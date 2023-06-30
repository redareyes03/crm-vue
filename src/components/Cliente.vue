<script setup>
    import { computed, ref } from 'vue';
    import {editCliente} from '../../data/clientes'

    const props = defineProps({
        cliente: {
            type: Object,
            required: true
        }
    })

    defineEmits(['eliminar-cliente'])
    
    const estados = {
        1: "Activo",
        0: "Inactivo",
    }

    const estado = ref(props.cliente.estado)

    const nombreCliente = computed(() => props.cliente.nombre + ' ' + props.cliente.apellido)
    
    const estadoCliente = computed(() => {
        return estados[estado.value]
    })

    const claseEstadoCliente = computed(() => estado.value === 1 ? 'bg-green-200 text-green-800 dark:bg-green-600 dark:text-green-50' : 'bg-red-200 text-red-800 dark:bg-red-500 dark:text-red-50')

    const editarEstadoCliente = async() => {
        try {
            await editCliente({estado: estado.value == 1 ? 0 : 1}, props.cliente.id)
            estado.value = estado.value == 1 ? 0 : 1
        } catch (error) {
            
        }
        
    }

    
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
                @click="editarEstadoCliente"
                class="inline-flex rounded-full px-2 text-xs font-semibold leading-5"
                :class="[claseEstadoCliente]">
                {{ estadoCliente }}
            </button>
        </td>
        <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500 dark:text-gray-200 ">
            <RouterLink 
                :to="`editar-cliente/${cliente.id}`"
                class="text-sky-700 dark:text-sky-400"
            >Editar</RouterLink>
            <button 
                class="text-red-700 dark:text-red-400 ml-4"
                @click="$emit('eliminar-cliente', cliente.id)"
            >Eliminar</button>
        </td>
    </tr>
</template>