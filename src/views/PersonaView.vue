<script setup lang="ts">
import type { Persona, Recipes } from '@/data/types';
import { getPersonaRecipes, globalPersonas } from '@/store';
import { type Ref, ref, watchEffect } from 'vue';
import PersonaInfo from '@/components/PersonaInfo.vue';

const props = defineProps<{
  name: string
}>()


let persona: Ref<Persona | undefined> = ref(undefined);
let recipes: Ref<Recipes | undefined> = ref(undefined);

watchEffect(async () => {
  let response = await globalPersonas();
  let currentPersona = response?.find(p => p.name === props.name);
  if (currentPersona) {
    persona.value = currentPersona;
    recipes.value = await getPersonaRecipes(currentPersona);
    console.log(recipes.value);
  }
});
</script>

<template>
  <div v-if="persona && recipes">
    <PersonaInfo :persona="persona" :recipes="recipes"></PersonaInfo>
  </div>
</template>
