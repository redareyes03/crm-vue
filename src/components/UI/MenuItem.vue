<script setup>
import { MenuItem } from '@headlessui/vue';
import { RouterLink } from 'vue-router'

defineProps({
    to: {
        type: String
    }
})
</script>

<template>
        <MenuItem 
            as="button" 
            v-slot="{active}"
            class="text-left text-gray-600 dark:text-gray-100">
                <RouterLink 
                    class="w-full h-full block px-3 py-1 rounded-md"
                    :class='{ "text-gray-800 bg-gray-100 dark:text-gray-300 dark:bg-slate-600 transition": active }' 
                    :to="{name: to}">
                    <div class="flex items-center gap-2">
                        <slot></slot>
                    </div>
                </RouterLink>
        </MenuItem>
</template>
