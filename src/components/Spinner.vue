<script setup lang="ts">


import type { Persona } from '../data/types';
import { ref, watchEffect, type Ref } from 'vue'
import  PersonasList  from './PersonasList.vue';
import { globalPersonas } from '@/store';

defineProps<{
    loadingText: string
}>()


let personas: Ref<Persona[] | undefined> = ref(undefined);

watchEffect(async () => {
    let response = await globalPersonas();
    personas.value = response;
});

</script>
<template>
    <div v-if="personas">
        <PersonasList :personas="personas"/>
    </div>
    <div v-else>
        <img alt="Persona Logo"
            src="https://gcdn.thunderstore.io/live/repository/icons/Lacirev-Persona5Soundtrack-1.4.1.png.128x128_q95.png"
            class="image">
        {{ loadingText }}
    </div>
</template>

<style scoped>

div {
    display: flex;
    flex-direction: column;
}

p {
    margin-top: 5px;
    letter-spacing: 1px;
}

.image {
    animation: spinner 1s infinite linear;
}

@keyframes spinner {
    0% {
        transform: rotate3d(0, 1, 0, 0deg);
    }

    50% {
        transform: rotate3d(0, 1, 0, 180deg);
    }

    100% {
        transform: rotate3d(0, 1, 0, 360deg);
    }
}
</style>