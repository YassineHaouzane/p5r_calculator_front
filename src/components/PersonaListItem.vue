<script setup lang="ts">
import type { Persona } from '../data/types';

defineProps<{
    persona: Persona
}>()

</script>

<template>
    <td><router-link :to="'/persona/' + persona.name">{{ persona.name }}</router-link></td>
    <td>{{ persona.level }}</td>
    <td>{{ persona.arcana }}</td>
</template>