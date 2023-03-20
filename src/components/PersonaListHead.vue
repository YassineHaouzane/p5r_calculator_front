<script setup lang="ts">
const emit = defineEmits(['sortByName', 'sortByLevel', 'groupByArcana'])

</script>

<template>
    <thead>
        <tr>
            <td @click="emit('sortByName')">Name</td>
            <td @click="emit('sortByLevel')">Level</td>
            <td @click="emit('groupByArcana')">Arcana</td>
        </tr>
    </thead>
</template>
