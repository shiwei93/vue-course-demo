<script setup lang="ts">
defineProps<{
    msg: string
}>()
</script>

<template>
    <div class="greetings">
        <h1 class="font-medium text-center text-4xl">{{ msg }}</h1>
    </div>
</template>

<style scoped></style>
