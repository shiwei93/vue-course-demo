<script setup lang="ts">
import { onMounted } from 'vue'
import { fetchPokemons } from '../apis/pokemon'

onMounted(() => {
    fetchPokemons(0).then((data) => {
        console.log('data', data)
    })
})
</script>

<template>
    <main>
        <div class="flex text-red-300 text-lg font-bold">Hello world</div>
    </main>
</template>
