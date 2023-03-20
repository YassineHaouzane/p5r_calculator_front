<script setup lang="ts">
import type { Persona, Recipes } from '@/data/types';

defineProps<{
    persona: Persona,
    recipes: Recipes
}>()


</script>
<template>
    <h1>{{ persona.name }} ({{ persona.level }} / {{ persona.arcana }})</h1>
    <h1>Recipes</h1>
    <table>
        <thead>
            <tr>
                <td>Cost</td>
                <td>Ingredients</td>
            </tr>
        </thead>
        <tbody v-for="recipe in recipes">
            <tr>
                <td>¥{{ recipe.cost }}</td>
                <td>
                    <router-link v-for="persona in recipe.sources" :to="'/persona/' + persona.name">{{ persona.name
                    }}&nbsp;</router-link>
                </td>
            </tr>
        </tbody>
    </table>
</template>