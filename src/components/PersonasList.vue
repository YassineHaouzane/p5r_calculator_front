<script lang="ts">
import { defineComponent, type PropType } from 'vue';
import type { Persona, Arcana } from '../data/types';
import PersonaListHead from './PersonaListHead.vue';
import PersonaListItem from './PersonaListItem.vue';

export const enum SortedBy {
    LevelDesc,
    LevelAsc,
    Name,
    Arcana,
}

const compareArcanas = (a: Arcana, b: Arcana) => { return a.localeCompare(b) }



export default defineComponent({
    components: {
        PersonaListHead,
        PersonaListItem
    },
    props: {
        personas: { type: Array as PropType<Persona[]>, required: true },
    },

    data() {
        return {
            sortType: SortedBy.LevelAsc,
            searchValue: ""
        }
    },

    methods: {
        sortBy(newSort: SortedBy) {
            this.sortType = newSort;
            switch (this.sortType) {
                case SortedBy.LevelAsc: return this.personas.sort((a, b) => a.level - b.level);
                case SortedBy.LevelDesc: return this.personas.sort((a, b) => b.level - a.level);
                case SortedBy.Name: return this.personas.sort((a, b) => a.name.localeCompare(b.name));
                case SortedBy.Arcana: return this.personas.sort((a, b) => compareArcanas(a.arcana, b.arcana));
            }
        },
        sortByName() {
            this.sortBy(SortedBy.Name);
        },
        sortByLevel() {
            if (this.sortType === SortedBy.LevelAsc) {
                this.sortBy(SortedBy.LevelDesc);
            } else {
                this.sortBy(SortedBy.LevelAsc);

            }
        },
        groupByArcana() {
            this.sortBy(SortedBy.Arcana);
        },
        searchFilter() {
            return this.personas.filter(persona =>
                !this.searchValue || persona.name.toLowerCase().includes(this.searchValue.toLowerCase())
            );
        }
    }
});

</script>

<template>
    <div class="search-container">
        <label for="filter">Filter</label>
        <input v-model="searchValue" name="filter">
    </div>

    <table>
        <PersonaListHead @sortByName="sortByName" @sortByLevel="sortByLevel" @groupByArcana="groupByArcana" />
        <tbody>
            <tr v-for="persona in searchFilter()">
                <PersonaListItem :persona="persona" />
            </tr>
        </tbody>
    </table>
</template>

<style scoped>
.search-container {
    display: flex;
    flex-direction: column;
    margin: 10px;
}

table {
    border: 1px solid white;
    border-radius: 10px;
    width: 100%;
}
</style>
