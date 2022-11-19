<script setup lang="ts">
const resulet = computed(() => useNuxtApp().vueApp.config.globalProperties["previousRoute"]["meta"]["middleware"] ?? "Unset")
</script>

<template>
    <div>{{ resulet }}</div>
</template>