<script setup lang="ts">
import type { Persona } from '@/data/types';
import { globalPersonas } from '@/store';
import { type Ref, ref, watchEffect } from 'vue';
import Spinner from '../components/Spinner.vue';
import PersonasList from '../components/PersonasList.vue';


let personas: Ref<Persona[] | undefined> = ref(undefined);

watchEffect(async () => {
  let response = await globalPersonas();
  personas.value = response;
});


</script>

<template>
  <div v-if="personas">
    <PersonasList :personas="personas" />
  </div>
  <div v-else class="app-container">
    <Spinner loading-text="Loading data..." />
  </div>
</template>


<style scoped>
.app-container {
  width: 100%;
}
</style>
