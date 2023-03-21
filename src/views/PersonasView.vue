<script setup lang="ts">
import type { Persona } from '@/data/types';
import { globalPersonas } from '@/store';
import { type Ref, ref, watchEffect } from 'vue';
import Spinner from '@/components/Spinner.vue';
import PersonasList from '@/components/PersonasList.vue';
import Title from '@/components/Title.vue';


let personas: Ref<Persona[] | undefined> = ref(undefined);

watchEffect(async () => {
  let response = await globalPersonas();
  personas.value = response;
});


</script>

<template>
  <div v-if="personas">
    <Title></Title>
    <PersonasList :personas="personas" />
  </div>
  <Spinner v-else class="app-container" loading-text="Loading data..." />
</template>

